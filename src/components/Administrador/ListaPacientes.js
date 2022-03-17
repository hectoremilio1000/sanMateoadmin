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
    title: "correoelectronico Whats escoger",
    dataIndex: "correoelectronicoWhatsescogerPaciente",
    key: "correoelectronicoWhatsescogerPaciente",
  },
  {
    title: "correo electronicoWhats escribir",
    dataIndex: "correoelectronicoWhatsescribirPaciente",
    key: "correoelectronicoWhatsescribirPaciente",
  },
  {
    title: "nombre Prueba",
    dataIndex: "nombrePrueba",
    key: "nombrePrueba",
  },
  {
    title: "hora Muestra",
    dataIndex: "horaMuestraPaciente",
    key: "horaMuestraPaciente",
  },
  {
    title: "costo Prueba",
    dataIndex: "costoPrueba",
    key: "costoPrueba",
  },
  {
    title: "forma de Pago",
    dataIndex: "formaPagoPacientes",
    key: "formaPagoPacientes",
  },
  {
    title: "resultado Prueba",
    dataIndex: "resultadoPrueba",
    key: "resultadoPrueba",
  },
  {
    title: "realizado por",
    dataIndex: "realizadopor",
    key: "realizadopor",
  },
  {
    title: "lugar de Toma de Muestra",
    dataIndex: "lugarTomaMuestraEscoger",
    key: "lugarTomaMuestraEscoger",
  },
  {
    title: "direccion de toma de Muestra",
    dataIndex: "direccionMuestra",
    key: "direccionMuestra",
  },
  {
    title: "Dirigido a",
    dataIndex: "dirigidoa",
    key: "dirigidoa",
  },
  {
    title: "correo o Whats Dirigido",
    dataIndex: "correoWhatsDirigidoEscoger",
    key: "correoWhatsDirigidoEscoger",
  },
  {
    title: "correo o Whats Dirigido",
    dataIndex: "correoelectronicoWhatsDirigidoDefinir",
    key: "correoelectronicoWhatsDirigidoDefinir",
  },
  {
    title: "Mandado por o Recomendado",
    dataIndex: "MandadoRecomendado",
    key: "MandadoRecomendado",
  },
];

function ListaPacientes() {
  return (
    <>
      <div>ListaPacientes</div>
      <Table
        dataSource={pacientesData}
        columns={columns}
        scroll={{ x: 2000 }}
      />
    </>
  );
}

export default ListaPacientes;
