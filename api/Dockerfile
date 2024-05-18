# --------------- DÉBUT COUCHE OS -------------------
FROM node:20
# --------------- FIN COUCHE OS ---------------------

# RÉPERTOIRE DE TRAVAIL
WORKDIR /usr/src/app

#MISE EN PROD DE L'ENVIRONNEMENT
ENV NODE_ENV production

# --------------- DÉBUT COUCHE JSON-SERVER ------------------
RUN npm install -g json-server@v0.17.4
    
COPY . .
# --------------- FIN COUCHE JSON-SERVER ------------------

# DÉMARRAGE DU SERVICE JSON-SERVER   
CMD json-server db.json -H 0.0.0.0
    