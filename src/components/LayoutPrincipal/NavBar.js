import React from "react";
import { Col, Menu, Row } from "antd";
import { Link } from "react-router-dom";
import "../../css/NavBar.css";
import image from "../../assets/logo/Asset 1-8.png";

function NavBar() {
  return (
    <Row style={{ padding: 10 }}>
      <Col xs={12} md={18}>
        <button
          style={{
            backgroundColor: "#fff",
            border: 0,
          }}
        >
          <Link to="/">
            <img alt="San Mateo" src={image} width="160px" height="50px" />
          </Link>
        </button>
      </Col>
      <Col xs={12} md={6}>
        {" "}
        <Menu mode="horizontal">
          <Menu.Item key="/">
            <Link to={`/`}>Inicio</Link>
          </Menu.Item>
          <Menu.Item key="/admin">
            <Link to="/admin">Admin</Link>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
}

export default NavBar;
