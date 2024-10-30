// dummy
'use server';

import { Resend } from 'resend';
import * as React from 'react';
import { NextResponse } from 'next/server';
// import ContactEmailStyle from '@/email/page';
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

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendEmail({ email, message }) {

    if(!message || typeof message !== 'string'){
      return{
        error:'Invalid message',
      }
    }
    if(!email || typeof message !== 'string'){
      return{
        error:'Invalid message',
      }
    }

  try {

    // const emailHtml = renderToStaticMarkup(<ContactEmailStyle message={message} senderEmail={senderEmail} />);
    const emailHtml = (
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
                {email}
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );


    const { data, error } = await resend.emails.send({
      from: 'Portfolio Builder Contact Form <onboarding@resend.dev>',
      to: ['gokulpnr2001@gmail.com'],
      subject: "Message from contact form",
      reply_to:email,
      // react: <ContactEmailStyle message={message} senderEmail={senderEmail} />,
      text:message,
    });

    if (error) {
      return NextResponse.json({ error:error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error:error.message }, { status: 500 });
  }

}


// const ContactEmailStyle = ({ message, senderEmail }) => {
//   return (
//     <Html>
//       <Body style={main}>
//         <Container>
//           <Section style={container}>
//             <Heading as="h2" style={header}>
//               Received message from the Portfolio-Builder Contact Form.
//             </Heading>
//             <Hr />
//             <Text style={text}>{message}</Text>
//             <Hr />
//             <Text>
//               <em style={italicText}>The sender's email is: </em>
//               {senderEmail}
//             </Text>
//           </Section>
//         </Container>
//       </Body>
//     </Html>
//   );
// };
// export default ContactEmailStyle;
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