import { Layout, Row, Menu } from "antd";
import React from "react";
import { Container, Action, ActionItem, Avatar } from "./header.styled";
const Header = () => {
  const auth = true;
  return (
    <Container>
      <Action>
        {auth && <Avatar>Ajgiz</Avatar>}
        <ActionItem>{auth ? "Logout" : "Login"}</ActionItem>
      </Action>
    </Container>
  );
};

export default Header;
