import React, { Fragment } from 'react';
import Container from 'components/Container';
import Button from 'components/Button';

const whatWeBelieve = [
  {
    image: '/images/about-innovation.png',
    title: 'Innovation',
    text: 'We leverage technology to improve how we do things to help your company grow in emerging markets.'
  }, {
    image: '/images/about-professionalism.png',
    title: 'Professionalism',
    text: 'We don’t leave you behind. We stay with you for the entire journey to make sure you get the best service you deserve.'
  }, {
    image: '/images/about-transparency.png',
    title: 'Transparency',
    text: 'No more vague pricing with vague service. Ventoorhub is designed to give you transparency and an informed decision-making process.'
  }
]

const AboutUs = () => {
  return (
    <Fragment>
      <Container fluid className="md:px-6 lg:px-8 relative py-20">
        <Container>
          <div className="relative text-white z-10 md:ml-16">
            <h1 className="mb-4 font-bold text-4xl">We make it simpler for you to find</h1>
            <h2 className="mb-4 text-4xl text-blue">the best B2B service provider globally.</h2>

            <p className="w-4/6">Ventoorhub is a technology platform providing professional B2B service providers for companies who want to expand their business globally. Ventoorhub is part of Viettonkin Consulting, a foreign direct investment consulting firm based in Hanoi, Vietnam.</p>
          </div>

          <div className="absolute inset-0 h-auto z-0">
            <img src="/images/bg-about.jpg" alt="about" className="h-full w-full object-fit-cover" />
          </div>
        </Container>
      </Container>

      <Container className="my-16 text-center">
        <h2 className="mb-4 text-4xl font-bold">
          What <span className="text-orange">We Believe</span>
        </h2>

        <div className="flex items-end">
          { whatWeBelieve.map((item, i) => (
            <div className="mx-5 rounded" key={ i }>
              <img src={ item.image } className="mx-auto" alt={ item.title } />

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
            </div>
          ))
          }
        </div>
      </Container>

      <Container fluid className="md:px-6 lg:px-8 relative text-center py-20">
        <Container>
          <div className="relative max-w-screen-md text-white z-10 mx-auto">
            <h2 className="mb-4 text-4xl font-bold">
              Let’s get you up to speed!
            </h2>

            <p>
              We’re ready to help your company grow. Talk with us and find the best service provider, or if you want to offer your service globally with Ventoorhub.
            </p>

            <div className="mt-7">
              <Button style="solid" className="px-12 py-4 mx-4">
                Find Service Providers
              </Button>

              <Button style="outline" className="px-12 py-4 mx-3 text-orange">
                Join Our Network of Partners
              </Button>
            </div>
          </div>

          <div className="absolute inset-0 h-auto z-0">
            <img src="/images/about-cta.jpg" alt="contact" className="h-96 w-full object-fit-cover" />
          </div>
        </Container>
      </Container>

    </Fragment>
  );
}

export default AboutUs;
