import React from "react";
import { Table } from "antd";
import { PruebasContext } from "../../context/pruebas";
import { useContext } from "react";

const columns = [
  {
    title: "Nombre",
    width: 120,
    dataIndex: "nombrePrueba",
    key: "nombrePrueba",
    fixed: "left",
  },
  {
    title: "precio",
    width: 80,
    dataIndex: "precioPrueba",
    key: "precioPrueba",
    fixed: "left",
  },
  {
    title: "categoria",
    dataIndex: "categoriaPrueba",
    key: "categoriaPrueba",
  },
  {
    title: "imagen",
    dataIndex: "imagenPrueba",
    key: "imagenPrueba",
  },
  {
    title: "creadoPor",
    dataIndex: "creadoPorPrueba",
    key: "creadoPorPrueba",
  },
  {
    title: "Precio Prueba Viejo",
    dataIndex: "PrecioPruebaViejo",
    key: "PrecioPruebaViejo",
  },

  {
    title: "descripción Larga",
    width: 200,
    dataIndex: "descripcionLargaPrueba",
    key: "descripcionLargaPrueba",
  },
  {
    title: "descripción Corta",
    width: 150,
    dataIndex: "descripcionCortaPrueba",
    key: "descripcionCortaPrueba",
  },
  {
    title: "tiempo Entrega",
    dataIndex: "tiempoEntregaPrueba",
    key: "tiempoEntregaPrueba",
  },
  {
    title: "comentarios Prueba",
    dataIndex: "comentariosPrueba",
    key: "comentariosPrueba",
  },
  {
    title: "tipo",
    dataIndex: "tipoMuestraPrueba",
    key: "tipoMuestraPrueba",
  },
  {
    title: "requerimiento",
    dataIndex: "requerimientoPrueba",
    key: "requerimientoPrueba",
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

function ListaPruebas() {
  const { pruebas } = useContext(PruebasContext);

  return (
    <>
      <div>ListaPruebas</div>
      <Table dataSource={pruebas} columns={columns} scroll={{ x: 2000 }} />
    </>
  );
}

export default ListaPruebas;
