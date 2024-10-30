//dummy
import React from "react";
import {
  Body,
  Container,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Section,
  Text,
} from "@react-email/components";

const ContactEmailStyle = ({ message, senderEmail }) => {
  return (
    <Html>
      <Body style={main}>
        <Container>
          <Section style={container}>
            <Heading as="h2" style={header}>
              Received message from the Portfolio-Builder Contact Form.
            </Heading>
            <Hr />
            <Text style={text}>{message}</Text>
            <Hr />
            <Text>
              <em style={italicText}>The sender's email is: </em>
              {senderEmail}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
export default ContactEmailStyle;

// styles from css
const main = {
  fontFamily: '"Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif',
  backgroundColor: "#D8F3DC",
  margin: "0",
};

const header = {
  width: "100%",
  backgroundColor: "#fff",
  margin: "0 auto",
  paddingBottom: "30px",
  zIndex: "999",
};

const container = {
  backgroundColor: "#fff",
  margin: "0 auto",
  width: "648px",
  maxWidth: "100%",
  position: "relative",
};

const text = {
  fontSize: "16px",
};

const italicText = {
  fontSize: "12px",
};
