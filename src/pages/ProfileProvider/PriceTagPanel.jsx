import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'icon';

const PriceTagPanel = ({ currency, price, category }) => (
  <Fragment>
    <div className="shadow-lg rounded-md pt-6">
      <h4 className="text-lg px-5">Selected Service</h4>

      <div className="flex justify-between text-gray-500 text-sm mt-5 pb-6 px-5 border-b">
        <span>{ category }</span>
        <span>{currency} { price } <i className="text-orange">*</i></span>
      </div>

      <div className="px-5 text-right mb-6 mt-3">
        <small className="text-xs text-gray-500">starting from</small>
        <div className="font-bold text-lg leading-none">{currency} { price }</div>
      </div>

      <Link to="/cart" className="bg-orange p-1 flex w-full rounded-b-md h-12 items-center justify-between">
        <div className="bg-white h-10 w-10 flex justify-center items-center rounded-bl-sm">
          <Icon name="bookmark" color="#f58120" />
        </div>

        <div className="text-center w-full text-white">
          ADD TO CART
        </div>
      </Link>
    </div>

    <p className="px-6 mt-6 text-sm">
      <b className="text-orange">*</b> The rate provided is the cheapest estimate for this service. Final rate will depend on the needed service.
    </p>
  </Fragment>
);

export default PriceTagPanel;
