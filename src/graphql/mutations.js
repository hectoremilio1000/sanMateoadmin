/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPaciente = /* GraphQL */ `
  mutation CreatePaciente(
    $input: CreatePacienteInput!
    $condition: ModelPacienteConditionInput
  ) {
    createPaciente(input: $input, condition: $condition) {
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
export const updatePaciente = /* GraphQL */ `
  mutation UpdatePaciente(
    $input: UpdatePacienteInput!
    $condition: ModelPacienteConditionInput
  ) {
    updatePaciente(input: $input, condition: $condition) {
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
export const deletePaciente = /* GraphQL */ `
  mutation DeletePaciente(
    $input: DeletePacienteInput!
    $condition: ModelPacienteConditionInput
  ) {
    deletePaciente(input: $input, condition: $condition) {
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
export const createPruebas = /* GraphQL */ `
  mutation CreatePruebas(
    $input: CreatePruebasInput!
    $condition: ModelPruebasConditionInput
  ) {
    createPruebas(input: $input, condition: $condition) {
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
export const updatePruebas = /* GraphQL */ `
  mutation UpdatePruebas(
    $input: UpdatePruebasInput!
    $condition: ModelPruebasConditionInput
  ) {
    updatePruebas(input: $input, condition: $condition) {
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
export const deletePruebas = /* GraphQL */ `
  mutation DeletePruebas(
    $input: DeletePruebasInput!
    $condition: ModelPruebasConditionInput
  ) {
    deletePruebas(input: $input, condition: $condition) {
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
