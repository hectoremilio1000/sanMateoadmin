import React from "react";
import { v4 as uuid } from "uuid";
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

const { Title } = Typography;
const { Item } = Form;
const { Option } = Select;

const onFinishFailed = errorInfo => {
  console.log("Failed:", errorInfo);
};
const onFinish = values => {
  console.log("Success:", values);
};

function CrearPaciente() {
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
                placeholder="solo números"
              />
            </Item>
            <Item
              label="Correo elecrónico o whats escoger"
              name="correoelectronicoWhatsescogerPaciente"
            >
              <Select>
                <Option value="correoelectronicodirigido">
                  Correo electrónico paciente
                </Option>
                <Option value="whatsdirigido">Whatsapp paciente</Option>
              </Select>
            </Item>

            <Item
              label="Correo electrónico o whats escribir"
              name="correoelectronicoWhatsescribirPaciente"
            >
              <Input placeholder="escríbelo" />
            </Item>

            <Item label="Nombre de prueba" name="nombrePrueba">
              <Select>
                <Option value="covidantigenos">COVID ANTIGENOS</Option>
                <Option value="covidanticuerpos">COVID ANTICUERPOS</Option>
              </Select>
            </Item>
            <Item label="Hora de Muestra" name="horaMuestraPaciente">
              <TimePicker placeholder="hora" />
            </Item>
            <Item label="Costo Prueba" name="costoPrueba">
              <InputNumber placeholder="costo" prefix="$" />
            </Item>
            <Item label="Forma de pago" name="formaPagoPacientes">
              <Select placeholder="selecciona">
                <Option value="efectivo">EFECTIVO</Option>
                <Option value="tarjeta">TARJETA</Option>
                <Option value="transferencia">TRANSFERENCIA</Option>
              </Select>
            </Item>
            <Item label="Resultado" name="resultadoPrueba">
              <Input />
            </Item>
            <Item label="Realizado por" name="realizadopor">
              <Input />
            </Item>
            <Item
              label="Lugar de toma de muestra"
              name="lugarTomaMuestraEscoger"
            >
              <Select placeholder="selecciona" style={{ width: "50%" }}>
                <Option value="sucursal">SUCURSAL</Option>
                <Option value="domicilio">DOMICILIO</Option>
              </Select>
            </Item>
            <Item label="Dirección" name="direccionMuestra">
              <Input placeholder="Independencia 1423 colonia centro c.p. 68000 Oaxaca de Juárez Oaxaca" />
            </Item>
            <Item label="Dirigido a" name="dirigidoa">
              <Input />
            </Item>
            <Item
              label="Correo elecrónico o whats dirigido escoger"
              name="correoWhatsDirigidoEscoger"
            >
              <Select>
                <Option value="correoelectronicodirigido">
                  Correo electrónico
                </Option>
                <Option value="whatsdirigido">Whatsapp</Option>
              </Select>
            </Item>

            <Item
              label="Correo electrónico o whats definir"
              name="correoelectronicoWhatsDirigidoDefinir"
            >
              <Input placeholder="escríbelo" />
            </Item>
            <Item label="Mandado por o recomendado" name="MandadoRecomendado">
              <Input />
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
