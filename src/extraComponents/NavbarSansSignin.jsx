import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 65px;
  ${mobile({ backgroundColor: "lightgreen" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Center = styled.div`
  flex: 2;
  text-align: start;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const ButtonItem = styled.button`
  border: 0.5px solid lightblue;
  border-radius: 10%;
  background-color: lightseagreen;

  &:hover {
    background-color: lightskyblue;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Center>
            <Link to="/">
              <Logo>AMN</Logo>
            </Link>
          </Center>

          <Right>
            <Link to="/register">
              <ButtonItem>REGISTER</ButtonItem>
            </Link>
            <MenuItem>
              <Badge badgeContent={1} color="primary">
                <Link to="/cart">
                  <ShoppingCartOutlined />
                </Link>
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
