import React from "react";
import { Layout, Menu, Typography } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  RobotOutlined,
  ExceptionOutlined,
  ExperimentOutlined,
  ForkOutlined,
  NodeIndexOutlined,
  MedicineBoxOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import "../../css/LayoutAdministrador.css";
import { useState } from "react";
import { useEffect } from "react";
import CrearUsuario from "./CrearPaciente";
import ListaPacientes from "./ListaPacientes";
import CrearPruebas from "./CrearPruebas";
import ListaPruebas from "./ListaPruebas";
import RegistroDoctor from "./RegistroDoctor";
import ListaDoctor from "./ListaDoctor";
import CrearOrden from "./CrearOrden";
import ListaOrdenes from "./ListaOrdenes";

//amplify//
import { API, graphqlOperation } from "aws-amplify";
import { listPacientes } from "../../graphql/queries";
import { listDoctors } from "../../graphql/queries";
import { listOrdens } from "../../graphql/queries";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

function LayoutAdministrador({ user }) {
  const [current, setCurrent] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [loadingPaciente, setLoadingPaciente] = useState(false);
  const [doctores, setDoctores] = useState([]);
  const [loadingDoctores, setLoadingDoctores] = useState(false);
  const [ordenes, setOrdenes] = useState([]);
  const [loadingOrdenes, setLoadingOrdenes] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const cambiarComponent = e => {
    setCurrent(e.key);
  };

  const fetchPaciente = async () => {
    try {
      setLoadingPaciente(true);
      const { data } = await API.graphql({
        query: listPacientes,
        authMode: "API_KEY",
      });
      const pacientes = data.listPacientes.items;
      setPacientes(pacientes);
      setLoadingPaciente(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPaciente();
  }, []);

  const fetchDoctores = async () => {
    try {
      setLoadingDoctores(true);
      const { data } = await API.graphql({
        query: listDoctors,
        authMode: "API_KEY",
      });
      const doctores = data.listDoctors.items;
      setDoctores(doctores);
      setLoadingDoctores(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDoctores();
  }, []);

  const fetchOrdenes = async () => {
    try {
      setLoadingOrdenes(true);
      const { data } = await API.graphql({
        query: listOrdens,
        authMode: "API_KEY",
      });
      const ordenes = data.listOrdens.items;
      setOrdenes(ordenes);
      setLoadingOrdenes(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrdenes();
  }, []);

  console.log(ordenes);

  if (user) {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={current}
            onClick={cambiarComponent}
          >
            <Menu.Item key="1" icon={<UserOutlined />} style={{ fontSize: 12 }}>
              Registro de pacientes
            </Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined />} style={{ fontSize: 12 }}>
              Lista de pacientes
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<ExperimentOutlined />}
              style={{ fontSize: 12 }}
            >
              Crear prueba
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<ExceptionOutlined />}
              style={{ fontSize: 12 }}
            >
              Lista de pruebas
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={<NodeIndexOutlined />}
              style={{ fontSize: 12 }}
            >
              Registro doctor
            </Menu.Item>
            <Menu.Item key="6" icon={<ForkOutlined />} style={{ fontSize: 12 }}>
              Lista Doctores
            </Menu.Item>
            <Menu.Item
              key="7"
              icon={<MedicineBoxOutlined />}
              style={{ fontSize: 12 }}
            >
              Crear Orden
            </Menu.Item>
            <Menu.Item
              key="8"
              icon={<ProfileOutlined />}
              style={{ fontSize: 12 }}
            >
              Lista órdenes
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{
              padding: 0,
              height: 100,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger hamburguesaMenu",
                  onClick: toggle,
                }
              )}
            </div>
            <div>
              <p style={{ textAlign: "center" }} className="textAdminHeader">
                Administrador, hola {user.username}
              </p>
            </div>
          </Header>

          <Content style={{ margin: "24px 16px 0" }}>
            {current === "1" ? (
              <div
                className="site-layout-background"
                style={{ minHeight: 100 }}
              >
                <CrearUsuario />
              </div>
            ) : current === "2" ? (
              <div
                className="site-layout-background"
                style={{ minHeight: 100 }}
              >
                <ListaPacientes pacientes={pacientes} />
              </div>
            ) : current === "3" ? (
              <div>
                <CrearPruebas />
              </div>
            ) : current === "4" ? (
              <div>
                <ListaPruebas />
              </div>
            ) : current === "5" ? (
              <div>
                <RegistroDoctor />
              </div>
            ) : current === "6" ? (
              <div>
                <ListaDoctor doctores={doctores} />
              </div>
            ) : current === "7" ? (
              <div>
                <CrearOrden />
              </div>
            ) : current === "8" ? (
              <div>
                <ListaOrdenes ordenes={ordenes} />
              </div>
            ) : (
              <div>Por favor escoge una categoría</div>
            )}
          </Content>
        </Layout>
      </Layout>
    );
  } else {
  }
}

export default LayoutAdministrador;
