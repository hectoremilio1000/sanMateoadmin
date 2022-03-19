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

function CrearOrden() {
  return (
    <Row>
      <Col xs={24}>
        <Title level={4} style={{ textAlign: "center" }}>
          Crear orden
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
          <Item label="Lugar de toma de muestra" name="lugarTomaMuestraEscoger">
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
            label="Email o whats dirigido escoger"
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
            label="Email o whats definir"
            name="correoelectronicoWhatsDirigidoDefinir"
          >
            <Input placeholder="escríbelo" />
          </Item>
          <Item label="Mandado por o recomendado" name="MandadoRecomendado">
            <Input />
          </Item>
        </Form>
      </Col>
    </Row>
  );
}

export default CrearOrden;
