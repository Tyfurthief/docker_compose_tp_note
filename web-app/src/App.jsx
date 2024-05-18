import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

// CYCLE DE VIE du composant App :
// 1. rendu initial (avec les valeurs d'état initiales)
// 2. exécution de l'action du 'useEffect' : mise à jour de l'état
// 3. ce qui fait automatiquement un nouveau rendu

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/notes"} />} />
        <Route path="/notes" element={<Home />} >
          <Route path="/notes/:id" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
