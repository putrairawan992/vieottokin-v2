import React, { useState, Fragment } from 'react';
import { Container, Row, Col } from 'lib/elements/Grid';
import { setFilter } from 'store/actions/ServiceFilter';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import HeroCTA from 'lib/components/HeroCTA';
import Icon from 'icon';
import { listFeature, listService, listProcess } from './content';

const Home = ({ dispatch, countryList, country }) => {
  const [showCountry, setShowCountry] = useState(false);
  const history = useHistory();

  const seletCountry = name => {
    dispatch(setFilter({country: name}));
    setShowCountry(false);
  };

  const redirectEnter = e => {
    if (e.key === 'Enter') {
      history.push('/service-providers');
    }
  };

  const redirectButton = () => {
    history.push('/service-providers');
  }

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

            <div className="mt-6">
              <label className="flex items-center">
                <button
                  onClick={ () => setShowCountry(!showCountry) }
                  className="bg-white h-12 border-r p-5 w-18 flex justify-center items-center rounded-l-sm cursor-pointer"
                >
                  <span className="text-gray-500 text-xs mr-3">{ country || 'Location' }</span>
                  <Icon name="triangle" size={ 10 } color="text-grey-icon" className="mt-1" />
                </button>

                <input
                  className="h-12 w-6/12 md:w-4/12 px-3 text-gray-500"
                  placeholder="What service are you looking for?"
                  onChange={ e => dispatch(setFilter({search: e.target.value})) }
                  onKeyDown={ redirectEnter }
                />

                <button onClick={ redirectButton } className="w-24 text-xs h-12 bg-orange text-white rounded-r-sm">
                  Search
                </button>
              </label>

              { showCountry && <ul className="w-6/12 md:w-2/12 bg-white text-gray-500 px-5 py-2 mt-2 rounded-sm absolute">
                { countryList.map(el => (
                  <li key={ el.id } value={ el.name }>
                    <button onClick={ () => seletCountry(el.name) }>
                      { el.name }
                    </button>
                  </li>
                )) }
              </ul> }
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

const mapStateToProps = state => ({
  country: state.serviceFilter.country,
  countryList: state.globalState.countryList,
});

export default connect(mapStateToProps)(Home);
