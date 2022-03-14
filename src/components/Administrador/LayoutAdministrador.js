import React from "react";
import { Layout, Menu, Typography } from "antd";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
import "../../css/LayoutAdministrador.css";
import { useState } from "react";
import { useEffect } from "react";
import CrearUsuario from "./CrearPaciente";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

function LayoutAdministrador({ user }) {
  const [current, setCurrent] = useState("");

  const cambiarComponent = e => {
    setCurrent(e.key);
  };

  console.log(current);
  if (user) {
    return (
      <Layout>
        <Sider>
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
              Lista de Usuarios
            </Menu.Item>
            <Menu.Item key="3" icon={<TeamOutlined />} style={{ fontSize: 12 }}>
              Registro de Pruebas
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          >
            <h1 style={{ textAlign: "center" }}>
              Administrador, hola {user.username}
            </h1>
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
                hola soy current 2
              </div>
            ) : current === "3" ? (
              <div>hola soy current 3</div>
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
