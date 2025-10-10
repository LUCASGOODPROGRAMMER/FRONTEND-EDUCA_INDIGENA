import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import BemVindo from "./routes/primeirasRotas/BemVindo.jsx";
import Login from "./routes/primeirasRotas/Login.jsx";
import Cadastro from "./routes/primeirasRotas/Cadastro.jsx";
import Home from "./routes/primeirasRotas/Home.jsx";

// rotas de home
import GaleriaDeAnimais from "./routes/subRotasDeHome/GaleriaDeAnimais.jsx";
import MateriaisDeEstudo from "./routes/subRotasDeHome/MateriaisDeEstudo.jsx";
import Quizzes from "./routes/subRotasDeHome/Quizzes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <BemVindo /> },
      { path: "login", element: <Login /> },
      { path: "cadastro", element: <Cadastro /> },
      {
        path: "home",
        element: <Home />,
        children: [
          { path: "galeria-de-animais", element: <GaleriaDeAnimais /> },
          { path: "materiais-de-estudo", element: <MateriaisDeEstudo /> },
          { path: "quizzes", element: <Quizzes /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
