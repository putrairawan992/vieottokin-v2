import React, { useState, Fragment } from 'react';
import { Row, Col } from 'components/Grid';
import { connect } from 'react-redux';
import Icon from 'icon';

const SearchInput = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <Fragment>
      <div className="flex items-center justify-between">
        <div className="bg-white h-10 md:w-12 w-8 flex justify-center items-center rounded-l-sm">
          <Icon name="search" size={ 12 } color="#333" />
        </div>

        <input
          className="h-10 w-full text-sm text-gray-500 rounded-r-sm"
          placeholder="What service are you looking for?"
          onFocus={ () => setShowFilter(true) }
          // onBlur={ () => setShowFilter(false) }
        />

        <button className="px-5 text-xs h-10 bg-orange rounded-r-sm hidden md:block">
          Search
        </button>
      </div>

      { showFilter && <div className="bg-white text-black py-6 px-3 absolute mt-2 z-20 w-full rounded-md shadow-sm">
        <Row className="flex-wrap">
          <Col xs={12} md={6}>
            <h3 className="w-full font-bold">Country</h3>

            <label className="w-full flex items-center mt-2">
              <input
                type="radio"
                name="coutry"
                className="border rounded form-radio text-orange"
              />

              <p className="pl-3">Vietnam</p>
            </label>

            <label className="w-full flex items-center mt-2">
              <input
                type="radio"
                name="coutry"
                className="border rounded form-radio text-orange"
              />

              <p className="pl-3">Singapore</p>
            </label>

            <label className="w-full flex items-center mt-2">
              <input
                type="radio"
                name="coutry"
                className="border rounded form-radio text-orange"
              />

              <p className="pl-3">Indonesia</p>
            </label>

            <h3 className="text-sm font-bold mt-6">City</h3>

            <label className="w-full flex flex-col text-xs mb-5 mt-2">
              <select className="border p-2 rounded text-xs text-gray-500">
                <option>Select city</option>
              </select>
            </label>
          </Col>

          <Col xs={12} md={6}>
            <h3 className="text-sm font-bold">Legal</h3>

            <label className="w-full flex mt-2">
              <input
                type="checkbox"
                className="border rounded form-checkbox text-orange"
              />

              <p className="pl-3">Incorporation</p>
            </label>

            <label className="w-full flex">
              <input type="checkbox" className="border rounded form-checkbox text-orange" />
              <p className="pl-3">Litigation</p>
            </label>

            <label className="w-full flex">
              <input type="checkbox" className="border rounded form-checkbox text-orange" />
              <p className="pl-3">Intellectual Property</p>
            </label>

            <div className="mt-5">
            <h3 className="text-sm font-bold">Audit</h3>

            <label className="w-full flex mt-2">
              <input type="checkbox" className="border rounded form-checkbox text-orange" />
              <p className="pl-3">Risk Advisory</p>
            </label>

            <label className="w-full flex">
              <input type="checkbox" className="border rounded form-checkbox text-orange" />
              <p className="pl-3">Valuation</p>
            </label>
            </div>

            <div className="mt-5">
              <h3 className="text-sm font-bold">Human Resource</h3>

              <label className="w-full flex mt-2">
                <input type="checkbox" className="border rounded form-checkbox text-orange" />
                <p className="pl-3">Recruitment</p>
              </label>

              <label className="w-full flex">
                <input type="checkbox" className="border rounded form-checkbox text-orange" />
                <p className="pl-3">Payroll</p>
              </label>
            </div>
          </Col>
        </Row>
      </div> }
    </Fragment>
  );
}

export default connect()(SearchInput);
