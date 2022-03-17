import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
  Typography,
  Upload,
} from "antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Item } = Form;
const { Option } = Select;

function CrearPruebas() {
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = values => {
    console.log("Success:", values);
  };

  //image upload//
  const normFile = e => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };
  return (
    <div>
      <Row>
        <Col xs={24}>
          <Title level={4} style={{ textAlign: "center" }}>
            CrearPruebas
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
              label="Nombre Prueba"
              name="nombrePrueba"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el nombre de la Prueba",
                },
              ]}
            >
              <Input />
            </Item>
            <Item
              label="Categoría Prueba"
              name="categoriaPrueba"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa la categoría de la Prueba",
                },
              ]}
            >
              <Select>
                <Option value="pruebaRapida">Prueba Rápida</Option>
                <Option value="pruebaNoRapida">Prueba no rápida</Option>
              </Select>
            </Item>
            <Item
              name="upload"
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload
                name="logo"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
              >
                <Button icon={<UploadOutlined />}>Subir</Button>
              </Upload>
            </Item>
            <Item
              label="Creado por"
              name="creadopor"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu nombre",
                },
              ]}
            >
              <Input />
            </Item>

            <Item
              label="Precio de la Prueba"
              name="prcioPrueba"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el precio",
                },
              ]}
            >
              <InputNumber placeholder="precio" prefix="$" />
            </Item>
            <Item
              label="Precio de la Prueba viejo"
              name="prcioPruebaViejo"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el precio viejo",
                },
              ]}
            >
              <InputNumber placeholder="precio" prefix="$" />
            </Item>
            <Item
              label="Descripción larga"
              name="descripcion"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa la descripción larga",
                },
              ]}
            >
              <Input />
            </Item>
            <Item
              label="Descripción corta"
              name="descripcioncorta"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa la descripción corta",
                },
              ]}
            >
              <Input />
            </Item>
            <Item
              label="Tiempo de entrega"
              name="tiempoentrega"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el tiempo de entrega",
                },
              ]}
            >
              <Input placeholder="Resultados en 24 a 48 horas" />
            </Item>
            <Item label="Comentarios sobre la prueba" name="comentariosprueba">
              <Input placeholder="Prueba post-vacuna o post-infección ..." />
            </Item>
            <Item label="Tipo de Muestra" name="tipomuestra">
              <Input placeholder="Muestra de sangre" />
            </Item>
            <Item label="Requerimientos extra" name="requerimientosextra">
              <Input placeholder="Pedir vaso para orina..." />
            </Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default CrearPruebas;
