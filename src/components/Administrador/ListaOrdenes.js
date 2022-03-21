import React from "react";
import { Table } from "antd";

const columns = [
  {
    tile: "nombre paciente",
    width: 100,
    dataIndex: "nombrePacienteOrden",
    key: "nombrePacienteOrden",
    fixed: "left",
  },
  {
    tile: "pruebas",
    width: 100,
    dataIndex: "pruebaOrden",
    key: "pruebaOrden",
    fixed: "left",
  },
  {
    title: "apellido Paterno",
    dataIndex: "apellidoPaternoDoctor",
    key: "apellidoPaternoDoctor",
  },
];

function ListaOrdenes() {
  return <div>ListaOrdenes</div>;
}

export default ListaOrdenes;
