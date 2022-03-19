import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listPruebas } from "../../src/graphql/queries";

const PruebasContext = React.createContext();

function PruebasProvider({ children }) {
  const [pruebas, setPruebas] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPruebas = async () => {
    try {
      setLoading(true);
      const { data } = await API.graphql({
        query: listPruebas,
        authMode: "API_KEY",
      });
      const pruebas = data.listPruebas.items;
      setPruebas(pruebas);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPruebas();
  }, []);

  return (
    <PruebasContext.Provider value={{ pruebas, loading }}>
      {children}
    </PruebasContext.Provider>
  );
}

export { PruebasContext, PruebasProvider };
