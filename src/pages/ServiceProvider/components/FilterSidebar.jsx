import React, { Fragment, useEffect, useState, memo } from 'react';
import { connect } from 'react-redux';
import { setFilter } from 'store/actions/ServiceFilter';
import { read } from 'utils/api';

const Category = memo(function Category({ value, checked, onChange, label }) {
  return (
    <label className="w-full flex mt-2">
      <input
        type="radio"
        className="border rounded form-checkbox text-orange"
        value={ value }
        onChange={ onChange }
        checked={ checked }
      />

      <p className="pl-3">{ label }</p>
    </label>
  );
});

const FilterSidebar = ({ dispatch, categoryList, countryList, filter }) => {
  const [cityList, setCityList] = useState([]);
  const [countryId, setCountryId] = useState(0);
  const [params, setParams] = useState({categoryId: 0, country: '', city: ''});

  const selectCountry = async (id, name) => {
    if (id === '') {
      setCityList([]);
    } else {
      const resCity = await read(`countries/${id}/cities`);
      setCityList(resCity.data);
    }

    setParams({...params, country: name});
    setCountryId(id);
  }

  const applyFilter = () => {
    dispatch(setFilter({
      categoryId: params.categoryId,
      country: params.country || '',
      city: params.city
    }));
  }

  useEffect(() => {
    const { country, categoryId, city } = filter;

    const fetchData = async () => {
      if (country !== '') {
        const id = countryList.filter(find => find.name === country)[0].id;
        const resCity = await read(`countries/${id}/cities`);

        setCountryId(id);
        setCityList(resCity.data);
      }

      setParams(state => ({state, categoryId, country, city }));
    };

    if (country !== '' || city !== '' || countryId !== '') fetchData();
  }, [filter, countryList])

  return (
    <Fragment>
      <h2 className="text-sm font-bold">Country</h2>

      <label className="w-full flex flex-col mb-5 mt-2">
        <select
          className="border p-2 rounded text-xs text-gray-500"
          onChange={ e => selectCountry(e.target.value, e.target[e.target.selectedIndex].getAttribute('name')) }
          value={ countryId }
        >
          <option value="">Select country</option>
          { countryList?.map(el => (
            <option
              key={ el.id }
              value={ el.id }
              name={ el.name }
            >
              { el.name }
            </option>
          )) }
        </select>
      </label>

      <h2 className="text-sm font-bold">City</h2>

      <label className="w-full flex flex-col mb-5 mt-2">
        <select
          className="border p-2 rounded text-xs text-gray-500"
          onChange={ e => setParams({...params, city: e.target.value}) }
          value={ params.city === '' ? filter.city : params.city }
        >
          <option value="">Select city</option>
          { cityList?.map(el => (
            <option
              key={ el.id }
              value={ el.name }
            >
              { el.name }
            </option>
          )) }
        </select>
      </label>

      { categoryList?.map((el, i) => (
        <div className="mb-3" key={ i }>
          <h3 className="text-sm font-bold">{ el.name }</h3>

          { el.SubCategory.map(({ name, id }) => (
            <Category
              key={ id }
              value={ id }
              label={ name }
              checked={ id === params.categoryId }
              onChange={ e => setParams({...params, categoryId: parseInt(e.target.value)}) }
            />
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
  categoryList: state.globalState.categoryList,
  filter: state.serviceFilter
});

export default connect(mapStateToProps)(FilterSidebar);
