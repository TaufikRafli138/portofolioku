import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
  educational,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="justify-content-center">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>

          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            {worktimeline.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <div class="educational__title">
                    <span><b>{data.jobtitle}</b></span>
                    <span>({data.date})</span>
                  </div>
                  <p className="service_desc"><i>{data.where}<br />{data.location}</i> </p>
                  <p style={{ textAlign: 'justify' }}>{data.description}</p>
                  As {data.jobtitle} at {data.where}, I have key responsibilities :
                  <p className="service_desc">{data.key_responbilities}</p>
                </div>
              );
            })}
          </Col>
        </Row>



        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Educational</h3>
          </Col>
          <Col lg="7">
            {educational.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <div class="educational__title">
                    <span>{data.school}</span>
                    <span>({data.year})</span>
                  </div>
                  <p className="service_desc"><i>{data.degree} - {data.major}</i></p>
                  <p className="service_desc">{data.description}</p>
                  What i have learned :
                  <i><p style={{ color: 'gray' }}>{data.whatILearn}</p></i>
                </div>
              );
            })}
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            <div className="skills-container">
              {skills.map((data, i) => (
                <div key={i} className="skill-item">
                  <span className="dot"></span>
                  <h3 className="progress-title">{data.name}</h3>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                  Tools
                  <i><p style={{ color: 'gray' }}>{data.tools}</p></i>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
