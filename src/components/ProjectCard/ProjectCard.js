import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import './ProjectCard.css'; 

function ProjectCards(props) {
  return (
    <Card style={{ width: '50rem', height:'50vh'}}>
      <Card.Img variant="top" src={props.imgPath} />
      <Card.Body style={{ background: '#F8F4F6', }}>
        <Card.Title style={{ background: 'linear-gradient(to left, #0ef, #c800ff)', WebkitBackgroundClip: 'text', color: 'transparent' }} className="claseTitulos">{props.title}</Card.Title>
        <Card.Text style={{ background: 'linear-gradient(to left, #0ef, #c800ff)', WebkitBackgroundClip: 'text', color: 'transparent' }} className="claseTextos">
          By - {props.usuario}
        </Card.Text>
        <div style={{ display: "block" , padding:'0.5vh'}} >
         <Button variant="secondary"  href={props.ghLink} target="_blank" style={{height:'5vh', background: 'linear-gradient(to left, #0ef, #c800ff)', margin:'0.5vw'}}>
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          <Button variant="secondary"  href={props.linkUser} target="_blank" style={{ height:'5vh', background: 'linear-gradient(to left, #0ef, #c800ff)', margin:'0.5vw'}}>
            <FaLinkedin /> 
            {props.isBlog ? "Blog" : "Linkedin"}
          </Button>
        
          <Button variant="secondary" style={{height:'5vh', background: 'linear-gradient(to left, #0ef, #c800ff)', margin:'0.5vw'}} onClick={() => props.onClick(props.id)} >ver detalle del proyecto</Button>
          <Button  style={{height:'5vh', background: 'linear-gradient(to left, #0ef, #c800ff)', margin:'0.5vw'}} variant="secondary" onClick={() => props.favorito(props.id)} >Agregar a favorito</Button>
        </div>
        
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
