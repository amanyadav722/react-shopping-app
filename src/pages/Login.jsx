import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive'
import NavbarSansSignin from '../extraComponents/NavbarSansSignin';

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background: lightgreen;
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
`; 
const Wrapper = styled.div`
   width: 22%;
   padding: 20px;
   background-color: white;
   ${mobile({ width: "76%"})}
`;

const Logo = styled.h1`
   font-weight: bold;
`;

const Title = styled.h1`
   font-size: 24px;
   font-weight: 300;
`; 
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`; 
const Input = styled.input`
     flex: 1;
     min-width: 40%;
     margin: 10px 0px;
     padding: 10px;
`; 
 
const Button = styled.button`
    width: 40%;
    border: none;
    border-radius: 7%;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`; 

const Link = styled.a`
 margin: 5px 0px;
 font-size: 12px;
 text-decoration: underline;
 cursor: pointer;
`;
 
const Login = () => {
    return (
        <div className="login">
            <NavbarSansSignin />
        <Container>
            <Wrapper>
            <Logo>AMN</Logo>
            <br />
                <Title>Sign in to your account!</Title>
                <Form>
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Button>Let's go!</Button>
                    <Link>Forgot Your Password?</Link>
                    <Link>Not yet regitered. Let's do it!</Link>
                </Form>
            </Wrapper>
        </Container>
        </div>
    )
}

export default Login