import React, { Fragment, useState } from 'react';
import { Container, Row, Col } from 'components/Grid';
import { Link } from 'react-router-dom';
import Icon from 'icon';
import StepIndicator from './StepIndicator';

const listProvider = [{
  logo: '/images/provider/hnt-law.png',
  product: 'Litigation Services',
  name: 'H & T Law',
  text: '<p className="mb-3">Nowadays there are so many phones that we can find it difficult to choose which one suits us, we have so many choices so little time and knowledge about the brands. Well, thats what Im for, I will try to help you to find your ideal smartphone taking into account what you are looking for, your preferences or what you would use the mobile (to play, just to call or for work) and your budget.</p><p className="mb-3">I will provide the following services:</p><ul className="ml-4 sm:ml-6 list-disc"><li>How to choose the smartphone, Tabs, Desktop & Laptop?</li><li>How to root your smartphone?</li><li>How to unlock the bootloader of your smartphone?</li><li>How to install custom ROMs on your smartphone?</li><li>I will also provide the link from where you can easily download the custom ROMs</li><li>How to install custom recovery on your smartphone?</li><li>How to install custom boot animations on your smartphone?</li></ul>',
}, {
  logo: '/images/provider/risid.png',
  product: 'Risk Advisory',
  name: 'Risid',
  text: '<p className="mb-3">Nowadays there are so many phones that we can find it difficult to choose which one suits us, we have so many choices so little time and knowledge about the brands. Well, thats what Im for, I will try to help you to find your ideal smartphone taking into account what you are looking for, your preferences or what you would use the mobile (to play, just to call or for work) and your budget.</p><p className="mb-3">I will provide the following services:</p><ul className="ml-4 sm:ml-6 list-disc"><li>How to choose the smartphone, Tabs, Desktop & Laptop?</li><li>How to root your smartphone?</li><li>How to unlock the bootloader of your smartphone?</li><li>How to install custom ROMs on your smartphone?</li><li>I will also provide the link from where you can easily download the custom ROMs</li><li>How to install custom recovery on your smartphone?</li><li>How to install custom boot animations on your smartphone?</li></ul>',
}, {
  logo: '/images/provider/paypal.png',
  product: 'Payroll',
  name: 'PayPal',
  text: '<p className="mb-3">Nowadays there are so many phones that we can find it difficult to choose which one suits us, we have so many choices so little time and knowledge about the brands. Well, thats what Im for, I will try to help you to find your ideal smartphone taking into account what you are looking for, your preferences or what you would use the mobile (to play, just to call or for work) and your budget.</p><p className="mb-3">I will provide the following services:</p><ul className="ml-4 sm:ml-6 list-disc"><li>How to choose the smartphone, Tabs, Desktop & Laptop?</li><li>How to root your smartphone?</li><li>How to unlock the bootloader of your smartphone?</li><li>How to install custom ROMs on your smartphone?</li><li>I will also provide the link from where you can easily download the custom ROMs</li><li>How to install custom recovery on your smartphone?</li><li>How to install custom boot animations on your smartphone?</li></ul>'
}];

const Cart = () => {
  const [openInclude, setOpenInclude] = useState({});

  const toggleComment = id => {
    setOpenInclude(prevOpenInclude => ({
      ...prevOpenInclude,
      [id]: !prevOpenInclude[id]
    }));
  };

  return (
    <Fragment>
      <StepIndicator step={1} backButton />

      <Container className="md:px-6 lg:px-8 relative py-24">
        <Row className="md:justify-evenly">
          <Col md={7}>
            { listProvider && listProvider.map((item, i) => (
              <div className="rounded-md shadow mb-8">
                <div className="p-6 pb-2 flex" key={ i }>
                  <img src={ item.logo } alt={ item.name } className="mr-5 w-16 h-16 rounded-full" />

                  <div className="w-full my-auto">
                    <div className="flex justify-between w-full">
                      <h2 className="font-bold text-lg">
                      { item.product }
                      </h2>

                      <button className="text-xs text-red-500 flex items-center">
                        <Icon name="close" color="#f1333e" size={ 8 } />
                        <span className="ml-3">REMOVE</span>
                      </button>
                    </div>

                    <div className="flex w-full items-center mt-1">
                      <span className="text-gray-500 text-xs">
                        by <b className="text-orange">{ item.name }</b>
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  className="text-darkdrop flex items-center px-6 py-3"
                  onClick={ () => toggleComment([i]) }
                >
                  <span className="mr-3">What’s Included</span>
                  <Icon name="triangle" color="#0f4875" size={ 8 } />
                </button>

                { openInclude[i] && <article className="px-6 py-4 text-sm leading-5 text-gray-700">
                  <p className="mb-3">Nowadays there are so many phones that we can find it difficult to choose which one suits us, we have so many choices so little time and knowledge about the brands. Well, that's what I'm for, I will try to help you to find your ideal smartphone taking into account what you are looking for, your preferences or what you would use the mobile (to play, just to call or for work) and your budget.</p>
                  <p className="mb-3">I will provide the following services:</p>

                  <ul className="ml-4 sm:ml-6 list-disc">
                    <li>How to choose the smartphone, Tabs, Desktop & Laptop?</li>
                    <li>How to root your smartphone?</li>
                    <li>How to unlock the bootloader of your smartphone?</li>
                    <li>How to install custom ROMs on your smartphone?</li>
                    <li>I will also provide the link from where you can easily download the custom ROMs</li>
                    <li>How to install custom recovery on your smartphone?</li>
                    <li>How to install custom boot animations on your smartphone?</li>
                  </ul>
                </article> }
              </div>
            )) }
          </Col>

          <Col md={4}>
            <div className="shadow-md rounded-md pt-6">
              <h4 className="text-xl px-5">Summary</h4>

              <div className="flex justify-between text-gray-500 text-sm mt-5 pb-6 px-5 border-b">
                <span>Subtotal</span>
                <span>¥ 7440</span>
              </div>

              <div className="px-5 flex justify-between mb-6 mt-3">
                <b className="text-sm">Total</b>
                <div className="font-bold text-lg leading-none">¥ 7440</div>
              </div>

              <div className="px-5 flex justify-between mb-6 mt-3">
                <p>Response Time</p>
                <p>2 - 3 days</p>
              </div>

              <Link to="/submit-requirements" className="bg-orange p-1 flex w-full rounded-b-md h-12 items-center justify-between">
                <div className="text-center w-full text-white">
                  CONTINUE
                </div>
              </Link>
            </div>

            <p className="text-center mt-6 text-sm text-gray-400">You won’t be charged yet</p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Cart;
