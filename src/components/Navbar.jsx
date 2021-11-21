import { Search } from "@material-ui/icons";
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

const Left = styled.div`
  flex: 1;
  cursor: pointer;
  align-items: center;
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: brown;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.div`
  border: none;
  width: 90px;
  ${mobile({ width: "40px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 35px;
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const ButtonItem = styled.button`
  margin: 16px;
  padding: 8px;
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
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>

          <Center>
            <StyledLink to="/">
              <Logo>Amn Sales.</Logo>
            </StyledLink>
          </Center>

          <Right>
            <Link to="/register">
              <ButtonItem>REGISTER</ButtonItem>
            </Link>
            <Link to="login">
              <ButtonItem>SIGN IN</ButtonItem>
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
