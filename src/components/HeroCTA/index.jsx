import React from 'react';
import Container from 'components/Container';
import Button from 'components/Button';

const HeroCTA = () => {
  return (
    <Container fluid className="md:px-6 lg:px-8 relative text-center py-28">
      <Container>
        <div className="relative max-w-screen-md text-white z-10 mx-auto">
          <h2 className="mb-4 text-4xl font-bold">
            Let’s get you up to speed!
          </h2>

          <p>
            We’re ready to help your company grow. Talk with us and find the best service provider, or if you want to offer your service globally with Ventoorhub.
          </p>

          <div className="mt-7">
            <Button type="solid" className="px-12 py-4 mx-4">
              Find Service Providers
            </Button>

            <Button type="outline" className="px-12 py-4 mx-3 text-orange">
              Join Our Network of Partners
            </Button>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden z-0">
          <img src="/images/about-cta.jpg" alt="contact" className="w-full h-full object-cover" />
        </div>
      </Container>
    </Container>
  );
}

export default HeroCTA;
