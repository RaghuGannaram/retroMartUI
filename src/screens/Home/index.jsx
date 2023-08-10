import React from "react";
import { Row, Col, Card, Carousel, Image } from "antd";
import "./index.scss";
import telephone from "../../assets/telephone.jpg";
import boombox from "../../assets/boombox.jpg";
import typewriter from "../../assets/typewriter.jpg";
import radio from "../../assets/radio.jpg";

function Home() {
  return (
    <Row>
      <Col span={16} offset={4}>
        <Carousel autoplay className="carousel">
          <Card className="image-card">
            <Image width="100%" src={telephone} />
          </Card>
          <Card className="image-card">
            <Image width="100%" src={boombox} />
          </Card>
          <Card className="image-card">
            <Image width="100%" src={typewriter} />
          </Card>
          <Card className="image-card">
            <Image width="100%" src={radio} />
          </Card>
        </Carousel>
      </Col>
    </Row>
    
  );
}

export default Home;
