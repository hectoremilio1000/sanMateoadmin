import React from "react";
import { v4 as uuidv4 } from "uuid";
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

//amplify //
import { API, graphqlOperation } from "aws-amplify";
import { createDoctor } from "../../graphql/mutations";
import { useState } from "react";

const { Title } = Typography;
const { Item } = Form;
const { Option } = Select;

function RegistroDoctor() {
  const [doctorDetails, setDoctorDetails] = useState({
    id: "",
    key: "",
    nombreDoctor: "",
    apellidoPaternoDoctor: "",
    apellidoMaternoDoctor: "",
    correoelectronicoWhatsescogerDoctor: "",
    correoelectronicoWhatsescribirDoctor: "",
    porcentajeApoyoDoctor: "",
  });
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = async values => {
    const {
      nombreDoctor,
      apellidoPaternoDoctor,
      apellidoMaternoDoctor,
      correoelectronicoWhatsescogerDoctor,
      correoelectronicoWhatsescribirDoctor,
      porcentajeApoyoDoctor,
    } = values;
    try {
      const doctorDetails = {
        id: uuidv4(),
        key: uuidv4(),
        nombreDoctor: nombreDoctor,
        apellidoPaternoDoctor: apellidoPaternoDoctor,
        apellidoMaternoDoctor: apellidoMaternoDoctor,
        correoelectronicoWhatsescogerDoctor: correoelectronicoWhatsescogerDoctor,
        correoelectronicoWhatsescribirDoctor: correoelectronicoWhatsescribirDoctor,
        porcentajeApoyoDoctor: porcentajeApoyoDoctor,
      };
      await API.graphql(
        graphqlOperation(createDoctor, { input: doctorDetails })
      );
      setDoctorDetails({
        id: "",
        key: "",
        nombreDoctor: "",
        apellidoPaternoDoctor: "",
        apellidoMaternoDoctor: "",
        correoelectronicoWhatsescogerDoctor: "",
        correoelectronicoWhatsescribirDoctor: "",
        porcentajeApoyoDoctor: "",
      });
      console.log("Success:", values);
    } catch (err) {
      console.log(err);
    }
  };
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
              label="emails/whats escoger"
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
              label="email/whats escribir"
              name="correoelectronicoWhatsescribirDoctor"
            >
              <Input placeholder="escríbelo" />
            </Item>
            <Item label="Porcentaje apoyo" name="porcentajeApoyoDoctor">
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
