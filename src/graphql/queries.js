/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPaciente = /* GraphQL */ `
  query GetPaciente($id: ID!) {
    getPaciente(id: $id) {
      id
      nombrePaciente
      apellidoPaternoPaciente
      apellidoMaternoPaciente
      fechaNacimientoPaciente
      edadPaciente
      correoelectronicoWhatsescogerPaciente
      correoelectronicoWhatsescribirPaciente
      nombrePrueba
      horaMuestraPaciente
      costoPrueba
      formaPagoPacientes
      resultadoPrueba
      realizadopor
      lugarTomaMuestraEscoger
      direccionMuestra
      dirigidoa
      correoWhatsDirigidoEscoger
      correoelectronicoWhatsDirigidoDefinir
      MandadoRecomendado
      createdAt
      updatedAt
    }
  }
`;
export const listPacientes = /* GraphQL */ `
  query ListPacientes(
    $filter: ModelPacienteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPacientes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombrePaciente
        apellidoPaternoPaciente
        apellidoMaternoPaciente
        fechaNacimientoPaciente
        edadPaciente
        correoelectronicoWhatsescogerPaciente
        correoelectronicoWhatsescribirPaciente
        nombrePrueba
        horaMuestraPaciente
        costoPrueba
        formaPagoPacientes
        resultadoPrueba
        realizadopor
        lugarTomaMuestraEscoger
        direccionMuestra
        dirigidoa
        correoWhatsDirigidoEscoger
        correoelectronicoWhatsDirigidoDefinir
        MandadoRecomendado
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPruebas = /* GraphQL */ `
  query GetPruebas($id: ID!) {
    getPruebas(id: $id) {
      id
      key
      nombrePrueba
      categoriaPrueba
      imagenPrueba
      creadoporPrueba
      precioPrueba
      precioPruebaViejo
      descripcionLargaPrueba
      descripcionCortaPrueba
      tiempoEntregaPrueba
      comentariosPrueba
      tipoMuestraPrueba
      requerimientoPrueba
      createdAt
      updatedAt
    }
  }
`;
export const listPruebas = /* GraphQL */ `
  query ListPruebas(
    $filter: ModelPruebasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPruebas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
        nombrePrueba
        categoriaPrueba
        imagenPrueba
        creadoporPrueba
        precioPrueba
        precioPruebaViejo
        descripcionLargaPrueba
        descripcionCortaPrueba
        tiempoEntregaPrueba
        comentariosPrueba
        tipoMuestraPrueba
        requerimientoPrueba
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
