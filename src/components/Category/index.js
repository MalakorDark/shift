import React from "react";
import { useHistory } from "react-router-dom";
import ActivityList from "../Activity/ActivityList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Header from "../Header";

import gym from "../../assets/Category/Gym.svg";
import pool from "../../assets/Category/Pool.svg";
import spa from "../../assets/Category/Spa.svg";
import bar from "../../assets/Category/Bar.svg";


const image = {
  gym,
  pool,
  spa,
  bar
};

export default function Category({name,titleName}) {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <>
    <Header svgName={name} titleName={titleName}> </Header>
    <Container style={containerStyle}>
      <Row>
        <Col md={6}>
          <Image src={image[name]} />
          <Button style={buttonStyle} variant="primary" onClick={handleClick}>
          На главную
        </Button>
        </Col>
        <Col md={6}>
        <div style={itemStyle}  display="inline-block">Направления</div>
          <ActivityList name={name}></ActivityList>
        </Col>              
      </Row>
    </Container>
    </>
  );
}
const containerStyle={
  marginTop:"40px"
}
const buttonStyle = {
  marginTop: "50px",
  backgroundColor: "#FF8251",
  borderRadius: "15px 15px 15px 15px",
  width: "506px",
  border:"none",
  boxShadow: '0 2px 5px rgba(0,0,0,0.25)',
  marginRight:"auto",
  marginLeft:"auto"
};

const itemStyle = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "44px",
  lineHeight: "44px",
  textAlign:'center',
  marginBottom: "20px"
};