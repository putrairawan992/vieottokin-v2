import React, { Fragment } from 'react';
import { Container, Row, Col } from 'lib/elements/Grid';
import HeroCTA from 'lib/components/HeroCTA';
import Icon from 'icon';

const listFeature = [
  {
    image: '/images/landing-coin.png',
    title: 'Connect with reliable \n service providers',
    text: 'All of our service provider partners are curated tightly to make sure their reliability to give their best service.'
  }, {
    image: '/images/landing-time.png',
    title: 'Save your \n precious time',
    text: 'We know it’s a long and grueling process for finding the right corporate services. We make it easy and short for you.'
  }, {
    image: '/images/landing-cs.png',
    title: 'Great customer \n service',
    text: 'Our customer service will help you through all the process until your request has been finished.'
  }
]

const listService = [
  [{
    image: '/images/deal.png',
    title: 'Business Incorporation',
    text: 'Our network of corporate service providers covers everything you need.'
  }, {
    image: '/images/legal.png',
    title: 'Legal',
    text: 'Our network of corporate service providers covers everything you need.'
  }, {
    image: '/images/work.png',
    title: 'Work Permit Application',
    text: 'Our network of corporate service providers covers everything you need.'
  }, {
    image: '/images/accounting.png',
    title: 'Accounting Service',
    text: 'Our network of corporate service providers covers everything you need.'
  }], [
    {
      image: '/images/payroll.png',
      title: 'Payroll Service',
      text: 'Our network of corporate service providers covers everything you need.'
    }, {
      image: '/images/nominee.png',
      title: 'Nominee Service',
      text: 'Our network of corporate service providers covers everything you need.'
    }, {
      image: '/images/translate.png',
      title: 'Translation',
      text: 'Our network of corporate service providers covers everything you need.'
    }, {
      image: '/images/tax.png',
      title: 'Tax Assitance',
      text: 'Our network of corporate service providers covers everything you need.'
    },
  ]
]

const listProcess = [
  {
    image: '/images/step-1.png',
    title: 'Select your service provider',
    text: 'Log in and select the service provider in the country of your choice.'
  }, {
    image: '/images/step-2.png',
    title: 'Confirm the services you neeed',
    text: 'Our team will confirm with you and then breakdown the service and price.'
  }, {
    image: '/images/step-3.png',
    title: 'Our team will contact you',
    text: 'You will be invoiced for the services you need. Payment process is smooth to ensure you focus on the case.'
  }, {
    image: '/images/step-4.png',
    title: 'Get the services you need done!',
    text: 'Your service provider partner will work on your case, and our team will stand by to ensure process clarity and your satisfaction.'
  },
]

const Home = () => {
  return (
    <Fragment>
      <Container fluid className="md:px-6 lg:px-8 relative py-20">
        <Container>
          <div className="absolute inset-0 overflow-hidden z-0">
            <img src="/images/landing.png" alt="landing page" className="w-full h-full object-cover" />
          </div>

          <div className="relative text-white z-10 md:ml-16">
            <h1 className="mb-4 font-bold text-4xl">We help you find the best service provider</h1>
            <h2 className="mb-4 text-4xl text-blue">with affordable budget in South East Asia</h2>

            <p className="md:w-4/6 w-full">
              Viettonkin Consulting is a platform to help you minimize risk by finding you the right solution for your business expansion in SouthEast Asia.
            </p>

            <div className="flex items-center mt-6">
              <div className="bg-white h-12 border-r p-5 w-18 flex justify-center items-center rounded-l-sm cursor-pointer">
                <p className="text-gray-500 text-xs mr-3">Location</p>
                <Icon name="triangle" size={ 10 } color="#333" className="mt-1" />
              </div>

              <input
                className="h-12 w-6/12 md:w-4/12 px-3 text-gray-500"
                placeholder="What service are you looking for?"
              />

              <button className="w-24 text-xs h-12 bg-orange text-white rounded-r-sm">
                Search
              </button>
            </div>
          </div>

          <div className="md:mx-24 mx-auto flex relative z-5">
            <Row className="text-center my-24">
              { listFeature.map((item, i) => (
                <Col md={4} key={ i }>
                  <div className="mx-3 mt-4 px-6 py-10 shadow-lg rounded bg-white flex justify-between flex-col">
                    <img src={ item.image } className="mx-auto object-cover" alt={ item.title } />

                    <div>
                      <h3 className="text-xl font-bold whitespace-pre-line leading-6 py-6">{ item.title }</h3>
                      <p className="text-sm">{ item.text }</p>
                    </div>
                  </div>
                </Col>
              )) }
            </Row>
          </div>
        </Container>
      </Container>

      <Container className="py-20">
        <Row>
          <Col md={4} className="px-5">
            <img src="/images/sign.png" alt="signing" className="object-cover" />
          </Col>

          <Col md={8} className="px-5">
            <h2 className="font-bold text-4xl md:mt-0 mt-6">
              Services you can expect inside<br/><span className="text-orange">Viettonkin Consulting</span>
            </h2>

            <p className="mt-4 mb-12">Our network of corporate service providers covers everything you need</p>

            <Row>
              <Col md={6}>
                { listService[0].map((item, i) => (
                  <div className="flex justify-between mb-6" key={ i }>
                    <img src={ item.image } className="w-10 mr-5 h-full object-cover" alt={ item.title } />

                    <div>
                      <h3 className="text-xl font-bold">{ item.title }</h3>
                      <p className="text-xs text-gray-500">{ item.text }</p>
                    </div>
                  </div>
                )) }
              </Col>

              <Col md={6}>
                { listService[1].map((item, i) => (
                  <div className="flex justify-between mb-6" key={ i }>
                    <img src={ item.image } className="w-10 mr-5 h-full object-cover" alt={ item.title } />

                    <div>
                      <h3 className="text-xl font-bold">{ item.title }</h3>
                      <p className="text-xs text-gray-500">{ item.text }</p>
                    </div>
                  </div>
                )) }
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container fluid className="md:px-6 lg:px-8 relative py-24">
        <Container>
          <div className="relative text-white z-10 text-center">
            <h2 className="text-4xl font-bold">
              It’s an entirely easy process with<br/><span className="text-orange">Viettonkin Consulting</span>
            </h2>

            <div className="md:mx-20 mx-auto flex">
              <Row className="relative z-5 mt-6">
                { listProcess.map((item, i) => (
                  <Col md={3} className="mt-10" key={ i }>
                    <div className="rounded flex justify-between flex-col">
                      <img src={ item.image } className="mx-auto object-cover" alt={ item.title } />

                      <div className="mt-">
                        <h3 className="text-xl font-bold md:mx-6 py-4 leading-5">{ item.title }</h3>
                        <p className="text-xs">{ item.text }</p>
                      </div>
                    </div>
                  </Col>
                )) }
              </Row>
            </div>
          </div>

          <div className="absolute inset-0 h-auto z-0">
            <img src="/images/bg.png" alt="about" className="h-full w-full object-cover" />
          </div>
        </Container>
      </Container>

      <HeroCTA />
    </Fragment>
  );
}

export default Home;
