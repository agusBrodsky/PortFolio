import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import './ProjectCard.css'; 

function ProjectCards(props) {
  
  return (
    <Card style={{ width: '24rem' }}>
      <Card.Img className="claseImagenes" variant="top" src={props.imgPath} />
      <Card.Body>
        <Card.Title className="claseTitulos">{props.title}</Card.Title>
        <Card.Title className="claseTitulos">By - {props.usuario}</Card.Title>
        <Card.Text className="claseTextos">
          {props.descripcion}
        </Card.Text>
        <div style={{ display: "flex"}} >
         <Button variant="primary"  href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          <Button variant="primary"  href={props.linkUser} target="_blank">
            <FaLinkedin /> 
            {props.isBlog ? "Blog" : "Linkedin"}
          </Button>
        </div>
          {"\n"}
          {"\n"}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
