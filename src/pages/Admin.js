import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Auth, Hub } from "aws-amplify";
import Form from "../components/Form/Form";

import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";
import LayoutAdministrador from "../components/Administrador/LayoutAdministrador";

Amplify.configure(awsconfig);

function Admin() {
  useEffect(() => {
    checkUser();
    Hub.listen("auth", data => {
      const { payload } = data;
      if (payload.event === "signOut") {
        setUser(null);
      }
    });
  }, []);
  const [user, setUser] = useState(null);
  async function checkUser() {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes };
      setUser(userInfo);
    } catch (err) {
      console.log("error: ", err);
    }
  }
  function signOut() {
    Auth.signOut().catch(err => console.log("error signing out: ", err));
  }
  if (user) {
    return (
      <div>
        <LayoutAdministrador user={user} />

        <Button
          onClick={signOut}
          style={{ width: "100%", backgroundColor: "#fff242", border: 2 }}
        >
          <span style={{ fontWeight: 800, fontSize: 17 }}>Cerrar sesión</span>
        </Button>
      </div>
    );
  }
  return <Form setUser={setUser} />;
}

export default Admin;
