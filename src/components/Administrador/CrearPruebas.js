import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Typography,
  Upload,
} from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createPruebas } from "../../../src/graphql/mutations";
import config from "../../aws-exports";

//import config storage
const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const { Title } = Typography;
const { Item } = Form;
const { Option } = Select;

function CrearPruebas() {
  const [image, setImage] = useState(null);
  const [pruebaDetails, setPruebaDetails] = useState({
    id: "",
    key: "",
    nombrePrueba: "",
    categoriaPrueba: "",
    imagenPrueba: "",
    creadoPorPrueba: "",
    precioPrueba: "",
    precioPruebaViejo: "",
    descripcionLargaPrueba: "",
    descripcionCortaPrueba: "",
    tiempoEntregaPrueba: "",
    comentariosPrueba: "",
    tipoMuestraPrueba: "",
    requerimientoPrueba: "",
  });

  const onFinishFailed = async errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = async values => {
    try {
      const pruebaDetails = {
        id: uuidv4(),
        key: uuidv4(),
        nombrePrueba: values.nombrePrueba,
        categoriaPrueba: values.categoriaPrueba,
        imagenPrueba: values.imagenPrueba,
        creadoporPrueba: values.creadoporPrueba,
        precioPrueba: values.precioPrueba,
        precioPruebaViejo: values.precioPruebaViejo,
        descripcionLargaPrueba: values.descripcionLargaPrueba,
        descripcionCortaPrueba: values.descripcionCortaPrueba,
        tiempoEntregaPrueba: values.tiempoEntregaPrueba,
        comentariosPrueba: values.comentariosPrueba,
        tipoMuestraPrueba: values.tipoMuestraPrueba,
        requerimientoPrueba: values.requerimientoPrueba,
      };

      await API.graphql(
        graphqlOperation(createPruebas, { input: pruebaDetails })
      );
      setPruebaDetails({
        id: "",
        key: "",
        nombrePrueba: "",
        categoriaPrueba: "",
        imagenPrueba: "",
        creadoPorPrueba: "",
        precioPrueba: "",
        precioPruebaViejo: "",
        descripcionLargaPrueba: "",
        descripcionCortaPrueba: "",
        tiempoEntregaPrueba: "",
        comentariosPrueba: "",
        tipoMuestraPrueba: "",
        requerimientoPrueba: "",
      });
      console.log("Success:", values);
      console.log(values.nombrePrueba);
    } catch (err) {
      console.log(err);
    }
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
              name="imagenPrueba"
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
              name="creadoporPrueba"
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
              name="precioPrueba"
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
              name="precioPruebaViejo"
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
              name="descripcionLargaPrueba"
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
              name="descripcionCortaPrueba"
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
              name="tiempoEntregaPrueba"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el tiempo de entrega",
                },
              ]}
            >
              <Input placeholder="Resultados en 24 a 48 horas" />
            </Item>
            <Item label="Comentarios sobre la prueba" name="comentariosPrueba">
              <Input placeholder="Prueba post-vacuna o post-infección ..." />
            </Item>
            <Item label="Tipo de Muestra" name="tipoMuestraPrueba">
              <Input placeholder="Muestra de sangre" />
            </Item>
            <Item label="Requerimientos extra" name="requerimientoPrueba">
              <Input placeholder="Pedir vaso para orina..." />
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

export default CrearPruebas;
