import React, { Fragment } from 'react';
import { Container, Row, Col } from 'lib/elements/Grid';
import HeroCTA from 'lib/components/HeroCTA';
import content from './content.json';

const AboutUs = () => {
  return (
    <Fragment>
      <Container fluid className="md:px-6 lg:px-8 relative py-24">
        <Container>
          <div className="relative text-white z-10 md:ml-16">
            <h1 className="mb-2 font-bold text-4xl">We make it simpler for you to find</h1>
            <h2 className="mb-4 text-4xl text-blue">the best B2B service provider globally.</h2>

            <p className="md:w-4/6">Ventoorhub is a technology platform providing professional B2B service providers for companies who want to expand their business globally. Ventoorhub is part of Viettonkin Consulting, a foreign direct investment consulting firm based in Hanoi, Vietnam.</p>
          </div>

          <div className="absolute inset-0 h-auto z-0 object-cover">
            <img src="/images/bg-about.jpg" alt="about" className="h-full w-full object-fit-cover" />
          </div>
        </Container>
      </Container>

      <Container className="my-28 text-center">
        <h2 className="mb-4 text-4xl font-bold">
          What <span className="text-orange">We Believe</span>
        </h2>

        <Row className="items-end">
          { content.whatWeBelieve.map((item, i) => (
            <Col md={4} className="rounded mt-8" key={ i }>
              <img src={ item.image } className="mx-auto object-cover" alt={ item.title } />

              <div className="shadow-lg pt-20 -mt-16 h-56 flex items-end flex-wrap">
                <div>
                  <h3 className="text-xl font-bold flex-grow-0 flex-shrink-0" style={{flexBasis: '100%'}}>
                    { item.title }
                  </h3>

                  <p className="m-6 text-sm flex-grow-0 flex-shrink-0" style={{flexBasis: '100%'}}>
                    { item.text }
                  </p>
                </div>
              </div>
            </Col>
          )) }
        </Row>
      </Container>

      <HeroCTA />
    </Fragment>
  );
}

export default AboutUs;
