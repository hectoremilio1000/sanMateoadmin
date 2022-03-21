import { Table } from "antd";
import React from "react";

const columns = [
  {
    title: "Nombre",
    width: 100,
    dataIndex: "nombrePaciente",
    key: "nombrePaciente",
    fixed: "left",
  },
  {
    title: "Apellido Paterno",
    width: 100,
    dataIndex: "apellidoPaternoPaciente",
    key: "apellidoPaternoPaciente",
    fixed: "left",
  },
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "key",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "apellido Materno",
    dataIndex: "apellidoMaternoPaciente",
    key: "apellidoMaternoPaciente",
  },
  {
    title: "fecha Nacimiento",
    dataIndex: "fechaNacimientoPaciente",
    key: "fechaNacimientoPaciente",
  },
  {
    title: "edad",
    dataIndex: "edadPaciente",
    key: "edadPaciente",
  },
  {
    title: "dirección",
    dataIndex: "direccionPaciente",
    key: "direccionPaciente",
  },
  {
    title: "email/whats escoger",
    dataIndex: "correoelectronicoWhatsescogerPaciente",
    key: "correoelectronicoWhatsescogerPaciente",
  },
  {
    title: "email/whats escribir",
    dataIndex: "correoelectronicoWhatsescribirPaciente",
    key: "correoelectronicoWhatsescribirPaciente",
  },
];

function ListaPacientes({ pacientes }) {
  return (
    <>
      <div>ListaPacientes</div>
      <Table dataSource={pacientes} columns={columns} scroll={{ x: 2000 }} />
    </>
  );
}

export default ListaPacientes;
