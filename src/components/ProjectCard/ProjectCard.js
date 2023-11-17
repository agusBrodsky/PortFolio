import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import './ProjectCard.css'; 

function ProjectCards(props) {
  return (
    <Card style={{ width: '20rem',margin:"1vw"}}>
      <Card.Img className="claseImagenes" variant="top" src={props.imgPath} />
      <Card.Body>
        <Card.Title className="claseTitulos">{props.title}</Card.Title>
        <Card.Title className="claseTitulos">By - {props.usuario}</Card.Title>
        <Card.Text className="claseTextos">
          {props.descripcion}
        </Card.Text>
        <div style={{ display: "block" , padding:'0.5vw'}} >
         <Button variant="secondary"  href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          <Button variant="secondary"  href={props.linkUser} target="_blank" style={{ margin:'0.5vw'}}>
            <FaLinkedin /> 
            {props.isBlog ? "Blog" : "Linkedin"}
          </Button>
        </div>
        <Button variant="secondary" onClick={() => props.onClick(props.id)} >ver detalle del proyecto</Button>
        
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
