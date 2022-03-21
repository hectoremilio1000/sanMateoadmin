import { Table } from "antd";
import React from "react";

const pacientesData = [
  {
    id: 1,
    key: "1",
    nombrePaciente: "hector emilio",
    apellidoPaternoPaciente: "velasquez",
    apellidoMaternoPaciente: "Pérez",
    fechaNacimientoPaciente: "Tue Mar 08 2022 07:47:48 GMT-0600",
    edadPaciente: 34,
    correoelectronicoWhatsescogerPaciente: "correoelectronicodirigido",
    correoelectronicoWhatsescribirPaciente: "hectoremilio1000@gmail.com",
    nombrePrueba: "covid antigenos",
    horaMuestraPaciente: "Wed Mar 16 2022 06:04:04 GMT-0600",
    costoPrueba: 600,
    formaPagoPacientes: "tarjeta",
    resultadoPrueba: "positivo",
    realizadopor: "dania",
    lugarTomaMuestraEscoger: "sucursal",
    direccionMuestra: "undefined",
    dirigidoa: "miguel",
    correoWhatsDirigidoEscoger: "correoelectronicodirigido",
    correoelectronicoWhatsDirigidoDefinir: "drmiguel1980@gmail.com",
    MandadoRecomendado: "miguel",
  },
  {
    id: 2,
    key: "2",
    nombrePaciente: "juan",
    apellidoPaternoPaciente: "piedras",
    apellidoMaternoPaciente: "francisco",
    fechaNacimientoPaciente: "Tue Mar 08 2022 07:47:48 GMT-0600",
    edadPaciente: 34,
    correoelectronicoWhatsescogerPaciente: "correoelectronicodirigido",
    correoelectronicoWhatsescribirPaciente: "hectoremilio1000@gmail.com",
    nombrePrueba: "covid antigenos",
    horaMuestraPaciente: "Wed Mar 16 2022 06:04:04 GMT-0600",
    costoPrueba: 600,
    formaPagoPacientes: "tarjeta",
    resultadoPrueba: "positivo",
    realizadopor: "dania",
    lugarTomaMuestraEscoger: "sucursal",
    direccionMuestra: "undefined",
    dirigidoa: "miguel",
    correoWhatsDirigidoEscoger: "correoelectronicodirigido",
    correoelectronicoWhatsDirigidoDefinir: "drmiguel1980@gmail.com",
    MandadoRecomendado: "miguel",
  },
];

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
