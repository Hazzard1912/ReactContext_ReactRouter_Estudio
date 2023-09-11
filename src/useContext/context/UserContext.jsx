/**
 * Un context es un Higher Order Component.
 *
 * A pesar de ser un componente de React, un context
 * No los creamos como creamos un componente normal en React,
 * sino que usamos el createContext.
 *
 * Es normal que la estructura de nuestros context sea un archivo
 * como este para el context, y otro para el provider. Y comparten
 * el mismo nombre.
 *
 * Entonces, el flujo para poder usar el useContext es:
 *  Crear el contexto.
 *  Crear el provider.
 *  Establecer el provider alto en nuestro arbol de componentes.
 *  Finalmente, utilizar el useContext
 */

import { createContext } from "react";

export const UserContext = createContext();
