import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  // Usualmente querremos que el provider se encuentre alto en
  // el arbol de componentes.
  return (
    <UserProvider>
      <Navbar />
      <hr />

      {/* Nuestras rutas: */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />

        {/* Capturar ruta no valida */}

        {/* Creando un componente */}
        {/* <Route path="/*" element={<LoginPage />} /> */}

        {/* Redirigiendo a otra ruta. */}
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </UserProvider>
  );
};
