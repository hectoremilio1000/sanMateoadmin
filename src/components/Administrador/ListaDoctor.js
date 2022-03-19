import React from "react";
import { Table } from "antd";

const doctoresData = [
  {
    id: 1,
    key: "1",
    nombreDoctor: "hector",
    apellidoPaternoDoctor: "velasquez",
    apellidoMaternoDoctor: "perez",
    correoWhatsEscogerDoctor: "Correo electronico",
    porcentajeApoyoDoctor: 100,
  },
];

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
    dataIndex: "correoWhatsEscogerDoctor",
    key: "correoWhatsEscogerDoctor",
  },
  {
    title: "correo/Whats definir",
    dataIndex: "correoWhatsDefinirDoctor",
    key: "correoWhatsDefinirDoctor",
  },
  {
    title: "porcentaje Doctor",
    dataIndex: "correoWhatsDefinirDoctor",
    key: "correoWhatsDefinirDoctor",
  },
];

function ListaDoctor() {
  return (
    <>
      <div>Lista Pacientes</div>
      <Table dataSource={doctoresData} columns={columns} scroll={{ x: 1500 }} />
    </>
  );
}

export default ListaDoctor;
