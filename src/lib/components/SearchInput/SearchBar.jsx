import React, { useState, useRef, useEffect } from 'react';
import { setFilter } from 'store/actions/ServiceFilter';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'lib/elements/Grid';
import { connect, useDispatch } from 'react-redux';
import Icon from 'icon';
import { read } from 'utils/api';

const SearchBar = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [params, setParams] = useState({search: '', categoryId: '', country: '', city: ''});
  const history = useHistory();
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();

  const setFilters = () => {
    dispatch(setFilter({
      search: params.search,
      categoryId: params.categoryId,
      country: params.country,
      city: params.city
    }));

    setShowFilter(false);
  }

  const redirectEnter = e => {
    if (e.key === 'Enter') {
      setFilters();
      history.push('/service-providers');
    }
  };

  const redirectButton = () => {
    setFilters();
    history.push('/service-providers');
  }

  useEffect(() => {
    function handleOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowFilter(false);
      }
    }

    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef}>
      <div className="flex items-center justify-between">
        <div className="bg-white h-10 md:w-12 w-8 flex justify-center items-center rounded-l-sm">
          <Icon name="search" size={ 12 } color="#333" />
        </div>

        <input
          className="h-10 w-full text-sm text-gray-500 rounded-r-sm"
          placeholder="What service are you looking for?"
          onChange={ e => setParams({ ...params, search: e.target.value }) }
          onFocus={ () => setShowFilter(true) }
          onKeyDown={ redirectEnter }
        />

        <button onClick={ redirectButton } className="px-5 text-xs h-10 bg-orange rounded-r-sm hidden md:block">
          Search
        </button>
      </div>

      { showFilter && <FilterSection
        // setOut={ e => setShowFilter(e) }
        setState={ state => setParams({ ...params, ...state}) }
        wrapperRef={ wrapperRef }
      />  }
    </div>
  );
};

const mapStateToProps = state => ({
  countryList: state.globalState.countryList,
  categoryList: state.globalState.categoryList
});

const FilterSection = connect(mapStateToProps)(({ countryList, categoryList, setState }) => {
  const [cityList, setCityList] = useState([]);

  const selectCountry = async (id, name) => {
    setState({country: name});
    const resCity = await read(`countries/${id}/cities`);
    setCityList(resCity.data);
  }

  return (
    <div className="bg-white text-black py-6 px-3 absolute mt-4 z-20 w-full rounded-md shadow-md">
      <Row>
        <Col md={6}>
          <h3 className="w-full font-bold">Country</h3>

          { countryList?.map(({id, name}) => (
            <label className="w-full flex items-center mt-2" key={ id }>
              <input
                type="radio"
                name="coutry"
                className="border rounded form-radio text-orange"
                onChange={ () => selectCountry(id, name) }
              />

              <p className="pl-3">{ name }</p>
            </label>
          )) }

          <h3 className="text-sm font-bold mt-6">City</h3>

          <label className="w-full flex flex-col mb-5">
            <select
              className="border p-2 text-xs text-gray-500"
              onChange={ e => setState({city: e.target.value}) }
            >
              <option value="">Select city</option>
              { cityList?.map(el => (
                <option key={ el.id } value={ el.name }>{ el.name }</option>
              )) }
            </select>
          </label>
        </Col>

        <Col md={6}>
          { categoryList?.map((el, i) => (
            <div className="mb-3" key={ i }>
              <h3 className="text-sm font-bold">{ el.name }</h3>

              { el.SubCategory.map((item, i) => (
                <label className="w-full flex mt-2" key={ i }>
                  <input
                    type="radio"
                    name="category"
                    className="border rounded form-checkbox text-orange"
                    onChange={ () => setState({categoryId: item.id}) }
                  />

                  <p className="pl-3">{ item.name }</p>
                </label>
              )) }
            </div>
          )) }
        </Col>
      </Row>
    </div>
  );
})

export default SearchBar;
