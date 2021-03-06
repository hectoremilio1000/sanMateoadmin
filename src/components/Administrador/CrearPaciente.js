import React from "react";
import { v4 as uuidv4 } from "uuid";
import { API, graphqlOperation } from "aws-amplify";
import { createPaciente } from "../../graphql/mutations";
import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Select,
  TimePicker,
  Button,
} from "antd";
import { useState } from "react";

const { Title } = Typography;
const { Item } = Form;
const { Option } = Select;

function CrearPaciente() {
  const [pacienteDetails, setPacienteDetails] = useState({
    id: "",
    key: "",
    nombrePaciente: "",
    apellidoPaternoPaciente: "",
    apellidoMaternoPaciente: "",
    fechaNacimientoPaciente: "",
    edadPaciente: "",
    direccionPaciente: "",
    correoelectronicoWhatsescogerPaciente: "",
    correoelectronicoWhatsescribirPaciente: "",
  });

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = async values => {
    const {
      nombrePaciente,
      apellidoPaternoPaciente,
      apellidoMaternoPaciente,
      fechaNacimientoPaciente,
      edadPaciente,
      direccionPaciente,
      correoelectronicoWhatsescogerPaciente,
      correoelectronicoWhatsescribirPaciente,
    } = values;
    try {
      const pacienteDetails = {
        id: uuidv4(),
        key: uuidv4(),
        nombrePaciente: nombrePaciente,
        apellidoPaternoPaciente: apellidoPaternoPaciente,
        apellidoMaternoPaciente: apellidoMaternoPaciente,
        fechaNacimientoPaciente: fechaNacimientoPaciente,
        edadPaciente: edadPaciente,
        direccionPaciente: direccionPaciente,
        correoelectronicoWhatsescogerPaciente: correoelectronicoWhatsescogerPaciente,
        correoelectronicoWhatsescribirPaciente: correoelectronicoWhatsescribirPaciente,
      };
      await API.graphql(
        graphqlOperation(createPaciente, { input: pacienteDetails })
      );
      setPacienteDetails({
        id: "",
        key: "",
        nombrePaciente: "",
        apellidoPaternoPaciente: "",
        apellidoMaternoPaciente: "",
        fechaNacimientoPaciente: "",
        edadPaciente: "",
        direccionPaciente: "",
        correoelectronicoWhatsescogerPaciente: "",
        correoelectronicoWhatsescribirPaciente: "",
      });
      console.log("success:", values);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Row>
        <Col xs={24}>
          <Title level={4} style={{ textAlign: "center" }}>
            Crear paciente nuevo
          </Title>
        </Col>
        <Col xs={23} sm={20} md={20} lg={20}>
          <Form
            name=""
            labelCol={{
              span: 10,
            }}
            wrapperCol={{
              span: 18,
            }}
            autoComplete="off"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Item
              label="Nombre(s)"
              name="nombrePaciente"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el nombre(s) del usuario",
                },
              ]}
            >
              <Input />
            </Item>
            <Item
              label="Apellido paterno"
              name="apellidoPaternoPaciente"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el Apellido paterno",
                },
              ]}
            >
              <Input />
            </Item>
            <Item
              label="Apellido materno"
              name="apellidoMaternoPaciente"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el Apellido materno",
                },
              ]}
            >
              <Input />
            </Item>

            <Item label="Fecha de nacimiento" name="fechaNacimientoPaciente">
              <DatePicker placeholder="fecha" />
            </Item>
            <Item label="Edad" name="edadPaciente">
              <InputNumber
                style={{ width: "50%" }}
                placeholder="solo n??meros"
              />
            </Item>
            <Item label="Direcci??n" name="direccionPaciente">
              <Input placeholder="Independencia 1423 colonia centro c.p. 68000 Oaxaca de Ju??rez Oaxaca" />
            </Item>
            <Item
              label="Email o whats escoger"
              name="correoelectronicoWhatsescogerPaciente"
            >
              <Select>
                <Option value="correoelectronicodirigido">
                  Correo electr??nico paciente
                </Option>
                <Option value="whatsdirigido">Whatsapp paciente</Option>
              </Select>
            </Item>

            <Item
              label="Email o whats escribir"
              name="correoelectronicoWhatsescribirPaciente"
            >
              <Input placeholder="escr??belo" />
            </Item>

            <Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Agregar
              </Button>
            </Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default CrearPaciente;
