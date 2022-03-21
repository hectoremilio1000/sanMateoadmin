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
    dataIndex: "apellidoPaternoPacienteOrden",
    key: "apellidoPaternoPacienteOrden",
  },
  {
    title: "apellido Materno",
    dataIndex: "apellidoMaternoPacienteOrden",
    key: "apellidoMaternoPacienteOrden",
  },
  {
    title: "fecha toma de muestra",
    dataIndex: "fechaOrden",
    key: "fechaOrden",
  },
  {
    title: "Hora toma de muestra",
    dataIndex: "horaOrden",
    key: "horaOrden",
  },
  {
    title: "apellido Materno",
    dataIndex: "apellidoMaternoPacienteOrden",
    key: "apellidoMaternoPacienteOrden",
  },
  {
    title: "email/whats escoger paciente",
    dataIndex: "emailWhatsEscogerPacienteOrden",
    key: "emailWhatsEscogerPacienteOrden",
  },
  {
    title: "email/whats escribir paciente",
    dataIndex: "emailWhatsEscribirPacienteOrden",
    key: "emailWhatsEscribirPacienteOrden",
  },
  {
    title: "costo total prueba(s)",
    dataIndex: "costoPruebaOrden",
    key: "costoPruebaOrden",
  },
  {
    title: "forma de pago",
    dataIndex: "formaPagoOrden",
    key: "formaPagoOrden",
  },
  {
    title: "lugar toma selecciona",
    dataIndex: "lugarTomaMuestraOrden",
    key: "lugarTomaMuestraOrden",
  },
  {
    title: "dirección toma",
    dataIndex: "direccionTomaMuestraOrden",
    key: "direccionTomaMuestraOrden",
  },
  {
    title: "dirigido a nombre",
    dataIndex: "doctorDirigidoOrden",
    key: "doctorDirigidoOrden",
  },
  {
    title: "email/whats dirigido selecciona",
    dataIndex: "emailWhatsDirigidoEscogerOrden",
    key: "emailWhatsDirigidoEscogerOrden",
  },
  {
    title: "email/whats dirigido define",
    dataIndex: "emailWhatsDirigidoDefinirOrden",
    key: "emailWhatsDirigidoDefinirOrden",
  },
  {
    title: "Mandado por",
    dataIndex: "mandadoporOrden",
    key: "mandadoporOrden",
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
];

function ListaOrdenes({ ordenes }) {
  return (
    <>
      <div>Lista órdenes</div>
      <Table dataSource={ordenes} columns={columns} scroll={{ x: 2000 }} />
    </>
  );
}

export default ListaOrdenes;
