import { Facebook, MailOutline, Phone, Room } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';
import { Twitter } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import PaymentImg from '../assets/credit_card.png';
import { mobile } from '../responsive' 

const Container = styled.div`
   display: flex;
   ${mobile({ flexDirection: "column"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`

`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 18px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none"})}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "lightgreen"})}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${mobile({ height: "auto", width: "auto"})}
`;
const Payment = styled.img`
   width: 16%;
   height: auto;
   display: flex;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>AMN</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid earum, porro saepe maiores quam officiis omnis architecto odio mollitia commodi dolores ipsa adipisci aliquam possimus ex rerum a sunt facere. Adipisci iure quas officiis voluptates illum consequuntur minima et obcaecati.</Desc>
                <SocialContainer>
                    <SocialIcon color="55ACEE">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <LinkedIn />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Accout</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Whishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room /> 20 Rue Paris, Paris
                </ContactItem>
                <ContactItem>
                    <Phone />+33 12345678965
                </ContactItem>
                <ContactItem>
                    <MailOutline />contactmail76567@mail.com
                </ContactItem>
                <Payment src={PaymentImg} />
            </Right>
        </Container>
    )
}

export default Footer;
