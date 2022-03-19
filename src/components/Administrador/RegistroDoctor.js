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

function RegistroDoctor() {
  return (
    <div>
      <Row>
        <Col xs={24}>
          <Title level={4} style={{ textAlign: "center" }}>
            Registro Doctor
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
              name="nombreDoctor"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el nombre del Doctor",
                },
              ]}
            >
              <Input />
            </Item>

            <Item
              label="Apellido paterno"
              name="apellidoPaternoDoctor"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa los apellidos del Doctor",
                },
              ]}
            >
              <Input />
            </Item>
            <Item
              label="Apellido materno"
              name="apellidoMaternoDoctor"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa los apellidos del Doctor",
                },
              ]}
            >
              <Input />
            </Item>

            <Item
              label="Correo elecrónico o whats escoger"
              name="correoelectronicoWhatsescogerDoctor"
            >
              <Select>
                <Option value="correoelectronicoescogerDoctor">
                  Correo electrónico
                </Option>
                <Option value="whatsescogerDoctor">Whatsapp </Option>
              </Select>
            </Item>

            <Item
              label="Correo electrónico o whats escribir"
              name="correoelectronicoWhatsescribirDoctor"
            >
              <Input placeholder="escríbelo" />
            </Item>
            <Item label="Porcentaje apoyo" name="porcentajeApoyo">
              <InputNumber placeholder="definir porcentaje" prefix="%" />
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

export default RegistroDoctor;
