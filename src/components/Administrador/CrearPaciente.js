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
} from "antd";

const { Title } = Typography;
const { Item } = Form;
const { Option } = Select;

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
          >
            <Item
              label="Nombre(s)"
              name="nombre"
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
              name="apellidopaterno"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el Apellido paterno",
                },
              ]}
            >
              <Input />
            </Item>
            <Item label="Dirigido a" name="dirigido">
              <Input />
            </Item>
            <Item label="Correo elecrónico o whtas">
              <Select>
                <Option value="correoelectronicodirigido">
                  Correo electrónico
                </Option>
                <Option value="whatsdirigido">Whatsapp</Option>
              </Select>
            </Item>

            <Item label="Correo electrónico o whats">
              <Input placeholder="escríbelo" />
            </Item>

            <Item label="Fecha de nacimiento" name="fechanacimiento">
              <DatePicker placeholder="fecha" />
            </Item>
            <Item label="Edad" name="edad">
              <InputNumber
                style={{ width: "50%" }}
                placeholder="solo números"
              />
            </Item>
            <Item label="Número de teléfono" name="numerotelefono">
              <InputNumber style={{ width: "50%" }} placeholder="9511203024" />
            </Item>
            <Item label="Nombre de prueba" name="nombreprueba">
              <Select>
                <Option value="covidantigenos">COVID ANTIGENOS</Option>
                <Option value="covidanticuerpos">COVID ANTICUERPOS</Option>
              </Select>
            </Item>
            <Item label="Hora de Muestra" name="horademuestra">
              <TimePicker placeholder="hora" />
            </Item>
            <Item label="Costo Prueba" name="costoprueba">
              <InputNumber placeholder="costo" prefix="$" />
            </Item>
            <Item label="Forma de pago" name="formapago">
              <Select placeholder="selecciona" style={{ width: "50%" }}>
                <Option value="efectivo">EFECTIVO</Option>
                <Option value="covidanticuerpos">COVID ANTICUERPOS</Option>
              </Select>
            </Item>
            <Item label="Resultado" name="resultadoprueba">
              <Input />
            </Item>
            <Item label="Realizado por" name="realizadopor">
              <Input />
            </Item>
            <Item label="Lugar de toma de muestra" name="lugarmuestra">
              <Select placeholder="selecciona" style={{ width: "50%" }}>
                <Option value="sucursal">SUCURSAL</Option>
                <Option value="domicilio">DOMICILIO</Option>
              </Select>
            </Item>
            <Item label="Dirección" name="direccion">
              <Input placeholder="Independencia 1423 colonia centro c.p. 68000 Oaxaca de Juárez Oaxaca" />
            </Item>
            <Item label="Mandado por" name="mandadopor">
              <Input />
            </Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default CrearPaciente;
