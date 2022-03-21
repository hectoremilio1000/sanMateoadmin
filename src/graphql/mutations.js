/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPaciente = /* GraphQL */ `
  mutation CreatePaciente(
    $input: CreatePacienteInput!
    $condition: ModelPacienteConditionInput
  ) {
    createPaciente(input: $input, condition: $condition) {
      id
      key
      nombrePaciente
      apellidoPaternoPaciente
      apellidoMaternoPaciente
      fechaNacimientoPaciente
      edadPaciente
      direccionPaciente
      correoelectronicoWhatsescogerPaciente
      correoelectronicoWhatsescribirPaciente
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
      key
      nombrePaciente
      apellidoPaternoPaciente
      apellidoMaternoPaciente
      fechaNacimientoPaciente
      edadPaciente
      direccionPaciente
      correoelectronicoWhatsescogerPaciente
      correoelectronicoWhatsescribirPaciente
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
      key
      nombrePaciente
      apellidoPaternoPaciente
      apellidoMaternoPaciente
      fechaNacimientoPaciente
      edadPaciente
      direccionPaciente
      correoelectronicoWhatsescogerPaciente
      correoelectronicoWhatsescribirPaciente
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
export const createDoctor = /* GraphQL */ `
  mutation CreateDoctor(
    $input: CreateDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    createDoctor(input: $input, condition: $condition) {
      id
      key
      nombreDoctor
      apellidoPaternoDoctor
      apellidoMaternoDoctor
      correoelectronicoWhatsescogerDoctor
      correoelectronicoWhatsescribirDoctor
      porcentajeApoyoDoctor
      createdAt
      updatedAt
    }
  }
`;
export const updateDoctor = /* GraphQL */ `
  mutation UpdateDoctor(
    $input: UpdateDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    updateDoctor(input: $input, condition: $condition) {
      id
      key
      nombreDoctor
      apellidoPaternoDoctor
      apellidoMaternoDoctor
      correoelectronicoWhatsescogerDoctor
      correoelectronicoWhatsescribirDoctor
      porcentajeApoyoDoctor
      createdAt
      updatedAt
    }
  }
`;
export const deleteDoctor = /* GraphQL */ `
  mutation DeleteDoctor(
    $input: DeleteDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    deleteDoctor(input: $input, condition: $condition) {
      id
      key
      nombreDoctor
      apellidoPaternoDoctor
      apellidoMaternoDoctor
      correoelectronicoWhatsescogerDoctor
      correoelectronicoWhatsescribirDoctor
      porcentajeApoyoDoctor
      createdAt
      updatedAt
    }
  }
`;
export const createOrden = /* GraphQL */ `
  mutation CreateOrden(
    $input: CreateOrdenInput!
    $condition: ModelOrdenConditionInput
  ) {
    createOrden(input: $input, condition: $condition) {
      id
      key
      nombrePacienteOrden
      apellidoPaternoPacienteOrden
      apellidoMaternoPacienteOrden
      fechaOrden
      horaOrden
      emailWhatsEscogerPacienteOrden
      emailWhatsEscribirPacienteOrden
      pruebaOrden
      costoPruebaOrden
      formaPagoOrden
      ingresadoPorOrden
      lugarTomaMuestraOrden
      direccionTomaMuestraOrden
      doctorDirigidoOrden
      emailWhatsDirigidoEscogerOrden
      emailWhatsDirigidoDefinirOrden
      mandadoporOrden
      createdAt
      updatedAt
    }
  }
`;
export const updateOrden = /* GraphQL */ `
  mutation UpdateOrden(
    $input: UpdateOrdenInput!
    $condition: ModelOrdenConditionInput
  ) {
    updateOrden(input: $input, condition: $condition) {
      id
      key
      nombrePacienteOrden
      apellidoPaternoPacienteOrden
      apellidoMaternoPacienteOrden
      fechaOrden
      horaOrden
      emailWhatsEscogerPacienteOrden
      emailWhatsEscribirPacienteOrden
      pruebaOrden
      costoPruebaOrden
      formaPagoOrden
      ingresadoPorOrden
      lugarTomaMuestraOrden
      direccionTomaMuestraOrden
      doctorDirigidoOrden
      emailWhatsDirigidoEscogerOrden
      emailWhatsDirigidoDefinirOrden
      mandadoporOrden
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrden = /* GraphQL */ `
  mutation DeleteOrden(
    $input: DeleteOrdenInput!
    $condition: ModelOrdenConditionInput
  ) {
    deleteOrden(input: $input, condition: $condition) {
      id
      key
      nombrePacienteOrden
      apellidoPaternoPacienteOrden
      apellidoMaternoPacienteOrden
      fechaOrden
      horaOrden
      emailWhatsEscogerPacienteOrden
      emailWhatsEscribirPacienteOrden
      pruebaOrden
      costoPruebaOrden
      formaPagoOrden
      ingresadoPorOrden
      lugarTomaMuestraOrden
      direccionTomaMuestraOrden
      doctorDirigidoOrden
      emailWhatsDirigidoEscogerOrden
      emailWhatsDirigidoDefinirOrden
      mandadoporOrden
      createdAt
      updatedAt
    }
  }
`;
