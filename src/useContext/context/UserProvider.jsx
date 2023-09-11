/**
 * Lo que diferencia a un Higher Order Component de un componente
 * normal, es que este recibe en sus props los children.
 */

import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  //   const user = {
  //     id: 123,
  //     name: "Jhonnier",
  //   };

  const [user, setUser] = useState();

  /**
   * La property value es la informacion que cualquier hijo
   * del user provider va a poder obtener del usercontext.
   *
   * Como recuperamos esa informacion cuando la necesitemos?
   * Como la modificamos?
   *
   * para esto entonces esta el useContext
   */
  return (
    // No es bena practica enviar la funcion de dispatch a los hijos.
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
