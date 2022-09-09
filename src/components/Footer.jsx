import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})};
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})};
`;

const Title = styled.h3`
    margin-bottom: 30px;
    ${mobile({textAlign: "center"})};
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})};
`;

const Logo = styled.h1`
    ${mobile({textAlign: "center"})};
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
    ${mobile({alignItems: "center"})};
    ${mobile({justifyContent: "center"})};
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
    margin-right: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
    marginLeft: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Rajawat Wearables</Logo>
        <Desc>
            We are leading industry in Wearables and have a huge customer market.
            When talking about the quality and comfortablity we are the number one in this sector.
            We Believe in serving the best to our customer.
        </Desc>
        <SocialContainer>
            <SocialIcon color="3b5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="e4405f">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55acee">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="e60023">
                <Pinterest/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room style={{marginRight:"10px"}} /> C-51 Sethi Colony, Jaipur Rajasthan
        </ContactItem>
        <ContactItem>
            <Phone style={{marginRight:"10px"}} /> +91-9878394389
        </ContactItem>
        <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> rajawatbanna@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer
