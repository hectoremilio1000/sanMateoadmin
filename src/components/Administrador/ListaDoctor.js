import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Nombre",
    width: 100,
    dataIndex: "nombreDoctor",
    key: "nombreDoctor",
    fixed: "left",
  },
  {
    title: "apellido Paterno",
    dataIndex: "apellidoPaternoDoctor",
    key: "apellidoPaternoDoctor",
  },
  {
    title: "apellido Materno",
    dataIndex: "apellidoMaternoDoctor",
    key: "apellidoMaternoDoctor",
  },
  {
    title: "correo/Whats Escoger",
    dataIndex: "correoelectronicoWhatsescogerDoctor",
    key: "correoelectronicoWhatsescogerDoctor",
  },
  {
    title: "correo/Whats definir",
    dataIndex: "correoelectronicoWhatsescribirDoctor",
    key: "correoelectronicoWhatsescribirDoctor",
  },
  {
    title: "porcentaje Doctor",
    dataIndex: "porcentajeApoyoDoctor",
    key: "porcentajeApoyoDoctor",
  },
];

function ListaDoctor({ doctores }) {
  return (
    <>
      <div>Lista Pacientes</div>
      <Table dataSource={doctores} columns={columns} scroll={{ x: 1500 }} />
    </>
  );
}

export default ListaDoctor;
