import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive'
import NavbarSansSignup from '../extraComponents/NavbarSansSignup';

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background: lightgreen;
   display: flex;
   align-items: center;
   justify-content: center;
`; 
const Wrapper = styled.div`
   width: 40%;
   padding: 20px;
   background-color: white;
   ${mobile({ width: "76%", marginBottom: "90px"})}
`;

const Logo = styled.h1`
   font-weight: bold;
`;

const PageTitle = styled.h2`
   margin-top: 20px;
   margin-bottom: 5px;
`;

const Title = styled.h1`
   font-size: 24px;
   font-weight: 300;
`; 
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`; 
const Input = styled.input`
     flex: 1;
     min-width: 40%;
     margin: 20px 10px 0px 0px;
     padding: 10px;
`; 
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`; 
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`; 

const Register = () => {
    return (
        <div className="register">
            <NavbarSansSignup />
        <Container>

            <Wrapper>
            <Logo>AMN</Logo>
            <PageTitle>REGISTER PAGE</PageTitle>
                <Title>Create Your Account</Title>
                <Form>
                    <Input placeholder="Firstname" />
                    <Input placeholder="Lastname" />
                    <Input placeholder="E-mail" />
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agreement>
                        I accept the terms and condtions
                        in order to use the facilities of this comapny.
                    </Agreement>
                    <Button>Let's do it!</Button>
                </Form>
            </Wrapper>
        </Container>
        </div>
    )
}

export default Register