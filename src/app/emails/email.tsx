import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";

interface iEmailProps {
    name?: string,
    email?: string,
    message?: string
}

export function Email({ name, email, message } : iEmailProps) {
  return (
    <Html>
    <Head />
    <Preview>
      У вас новое сообщение!
    </Preview>
    <Body style={main}>
      <Container style={container}>
      <h1 className="text-2xl text-gray-50 font-semibold">
        Student<span className="text-primary">Save</span>
        </h1>

        <Text style={title}>
          <strong>@{email}</strong>, оставил вопрос/заявку на Вашем сайте!
        </Text>

        <Section style={section}>
          <Text style={text}>
            От <strong>{name}</strong>!
          </Text>
          <Text style={text}>
            {message}
          </Text>
        </Section>

        <Text style={footer}>
          SaveStudent - сборник web-решений
        </Text>
      </Container>
    </Body>
  </Html>
  );
}

export default Email;
  
  
  const main = {
    backgroundColor: "#ffffff",
    color: "#24292e",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
  };
  
  const container = {
    maxWidth: "480px",
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const title = {
    fontSize: "24px",
    lineHeight: 1.25,
  };
  
  const section = {
    padding: "24px",
    border: "solid 1px #dedede",
    borderRadius: "5px",
    textAlign: "center" as const,
  };
  
  const text = {
    margin: "0 0 10px 0",
    textAlign: "left" as const,
  };
  
  const button = {
    fontSize: "14px",
    backgroundColor: "#28a745",
    color: "#fff",
    lineHeight: 1.5,
    borderRadius: "0.5em",
    padding: "12px 24px",
  };
  
  const links = {
    textAlign: "center" as const,
  };
  
  const link = {
    color: "#0366d6",
    fontSize: "12px",
  };
  
  const footer = {
    color: "#6a737d",
    fontSize: "12px",
    textAlign: "center" as const,
    marginTop: "60px",
  };
