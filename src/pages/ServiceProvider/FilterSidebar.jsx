import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setFilter } from 'store/actions/ServiceFilter';
import { read } from 'utils/api';

const FilterSidebar = ({ dispatch, categoryList, countryList }) => {
  const [cityList, setCityList] = useState([]);
  const [params, setParams] = useState({categoryId: '', country: '', city: ''});

  const selectCountry = async (id, name) => {
    setParams({...params, country: name});
    const resCity = await read(`countries/${id}/cities`);
    setCityList(resCity.data);
  }

  const applyFilter = () => {
    dispatch(setFilter({
      categoryId: params.categoryId,
      country: params.country,
      city: params.city
    }));
  }

  return (
    <Fragment>
      <h2 className="text-sm font-bold">Country</h2>

      <label className="w-full flex flex-col mb-5 mt-2">
        <select
          className="border p-2 rounded text-xs text-gray-500"
          onChange={ e => selectCountry(e.target.value, e.target[e.target.selectedIndex].getAttribute('name')) }
        >
          <option value="">Select country</option>
          { countryList?.map(el => (
            <option key={ el.id } value={ el.id } name={ el.name }>{ el.name }</option>
          )) }
        </select>
      </label>

      <h2 className="text-sm font-bold">City</h2>

      <label className="w-full flex flex-col mb-5 mt-2">
        <select
          className="border p-2 rounded text-xs text-gray-500"
          onChange={ e => setParams({...params, city: e.target.value}) }
        >
          <option value="">Select city</option>
          { cityList?.map(el => (
            <option key={ el.id } value={ el.name }>{ el.name }</option>
          )) }
        </select>
      </label>

      { categoryList?.map((el, i) => (
        <div className="mb-3" key={ i }>
          <h3 className="text-sm font-bold">{ el.name }</h3>

          { el.SubCategory.map((item, i) => (
            <label className="w-full flex mt-2" key={ i }>
              <input
                type="radio"
                name="category"
                className="border rounded form-checkbox text-orange"
                onChange={ () => setParams({...params, categoryId: item.id}) }
              />

              <p className="pl-3">{ item.name }</p>
            </label>
          )) }
        </div>
      )) }

      <button onClick={ applyFilter } className="w-full bg-orange text-white py-2 rounded mt-8">
        Apply Filters
      </button>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  serviceFilter: state.serviceFilter,
  countryList: state.globalState.countryList,
  categoryList: state.globalState.categoryList
});

export default connect(mapStateToProps)(FilterSidebar);
