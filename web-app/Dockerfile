# --------------- DÉBUT COUCHE OS -------------------
FROM node:18-alpine3.18 as build
# --------------- FIN COUCHE OS ---------------------

# RÉPERTOIRE DE TRAVAIL
WORKDIR /app

# --------------- DÉBUT COUCHE JSON-SERVER ------------------
COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

# VARIABLE QUI SERA A DEFINIR MANUELLEMENT DANS LE DOCKER COMPOSE
ARG REACT_APP_HOST_URL

ENV REACT_APP_HOST_URL $REACT_APP_HOST_URL

# BUILD DE L'APP REACT
RUN npm run build
# --------------- FIN COUCHE JSON-SERVER ------------------

# --------------- DÉBUT COUCHE NGINX ------------------
FROM nginx:alpine

# COPY DU BUILD DE L'APP REACT DANS LE REPERTOIRE DU SERVEUR WEB
COPY --from=build /app/build /usr/share/nginx/html

# EXPOSITION DU PORT 80 POUR NGINX
EXPOSE 80

# LANCEMENT DU SERVEUR WEB
CMD ["nginx", "-g", "daemon off;"]
# --------------- FIN COUCHE NGINX ------------------
