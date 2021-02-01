import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col } from 'lib/elements/Grid';
import { Link } from 'react-router-dom';
import Icon from 'icon';
import StepIndicator from './StepIndicator';
import { read } from 'utils/api';

const Cart = () => {
  const [openInclude, setOpenInclude] = useState({});
  const [services, setServices] = useState([]);
  const [serviceId, setServiceId] = useState([]);
  const [getNewList, setNewList] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('@viettonkin:cart'));
    const wishList = cart.filter((item, pos) => cart.indexOf(item) === pos);
    setServiceId(wishList);

    wishList.forEach(async value => {
      const getDetails = await read(`services/${value}`);
      setServices(state => [...state, getDetails.data]);
    });
  }, [getNewList]);

  const deleteServiceId = id => {
    const serviceList = serviceId;
    const index = serviceList.indexOf(`${id}`);

    if (index >= 0) {
      serviceList.splice(index, 1);
      localStorage.setItem('@viettonkin:cart', JSON.stringify(serviceList));
      setServiceId(serviceList);
      setNewList(!getNewList);
      setServices([]);
    }
  };

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
            { services?.map((item, i) => (
              <div className="rounded-md shadow mb-8" key={ i }>
                <div className="p-6 pb-2 flex">
                  <img src={ item.partner?.avatar } alt={ item.partner?.companyName } className="mr-5 w-16 h-16 rounded-full object-cover" />

                  <div className="w-full my-auto">
                    <div className="flex justify-between w-full">
                      <h2 className="font-bold text-lg">
                      { item.name }
                      </h2>

                      <button onClick={() => deleteServiceId( item.id ) } className="text-xs text-red-500 flex items-center px-2">
                        <Icon name="close" color="#f1333e" size={ 8 } />
                        <span className="ml-3">REMOVE</span>
                      </button>
                    </div>

                    <div className="flex w-full items-center mt-1">
                      <span className="text-gray-500 text-xs">
                        by <b className="text-orange">{ item.partner?.companyName }</b>
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
                  { item.description }
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
