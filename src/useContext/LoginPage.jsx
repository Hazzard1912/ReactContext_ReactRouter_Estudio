import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  /**
   * Debemos señalar el contexto al que queremos acceder, y
   * luego podemos desestructurar lo que sea que venga en el
   * value.
   */
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>
        LoginPage <small>{user?.name}</small>
      </h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 123,
            name: "Juan",
          })
        }
      >
        Establecer usuario
      </button>
    </>
  );
};
