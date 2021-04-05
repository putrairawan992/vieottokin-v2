import React, { Fragment, useEffect, useState } from 'react';
import Icon from 'icon';
import { openDeleteConfirm, openNewPartner, openEditPartner } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import { read } from 'utils/api';

const trBorder = 'border-b border-gray-300';

const ProviderTable = ({ setCount, dispatch, serviceFilter, countryList }) => {
  const { limit, page } = serviceFilter;
  const [partners, setPartners] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const params = `page=${!search?.length ? page : 1}&limit=${limit}&search=${search}`;
      const resPartners = await read(`admin/partners?${params}`);
      setCount({count: resPartners.data.results.count, pages: resPartners.data.lastPage || 1});
      setPartners(resPartners.data.results);
    };

    const limitSearch =  search.length > 3 || !search?.length;
    limitSearch && fetchData();
  }, [limit, page]);

  return (
    <Fragment>
      <div className="px-5 py-4 flex justify-between items-center">
        <h2 className="text-darkdrop font-medium text-lg">Partners</h2>

        <div className="flex">
          <label className="flex border-gray-300 border rounded items-center justify-between">
            <div className="bg-white h-10 w-12 flex justify-center items-center rounded-l-sm">
              <Icon name="search" size={ 12 } color="text-grey-icon" />
            </div>

            <input
              className="h-10 w-full text-gray-500 pl-2"
              placeholder="Search"
              onChange={ e => setSearch(e.target.value) }
            />
          </label>

          <button
            className="px-5 text-xs h-10 text-white md:ml-5 font-medium bg-orange rounded"
            onClick={ () => dispatch(openNewPartner(true)) }
          >
            Add New Partner
          </button>
        </div>
      </div>

      <div className="block w-full overflow-x-auto">
        <table className="w-full max-w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className={ `pl-5 p-3 ${trBorder}` }>Name</th>
              <th className={trBorder}>Country</th>
              <th className={trBorder}>City</th>
              <th className={`${trBorder} md:w-28`}>Actions</th>
            </tr>
          </thead>
          <tbody>
            { partners?.rows.map(({ id, companyName, avatar, country, city }) => (
              <tr key={ id }>
                <td className={ `pl-5 p-3 ${trBorder}` }>
                  <div className="flex items-center">
                    <img src={ avatar } alt={ companyName } className="h-7 w-7 hidden md:block object-cover" />
                    <span className="md:ml-3">{ companyName }</span>
                  </div>
                </td>

                <td className={ `${trBorder}` }>
                  <div className="flex items-center">
                    <img
                      src={ countryList.filter(find => find.name === country)[0]?.logo || '' }
                      alt={ country }
                    />
                    <span className="ml-3">{ country }</span>
                  </div>
                </td>

                <td className={ `${trBorder}` }>{ city }</td>

                <td className={ `${trBorder}` }>
                  <div className="flex">
                    <button
                      className="w-8 h-8 rounded bg-darkdrop flex items-center justify-center mr-2"
                      onClick={ () => dispatch(openEditPartner(id)) }
                    >
                      <Icon name="pen" size={ 13 } />
                    </button>

                    <button
                      className="w-8 h-8 rounded bg-red-700 flex items-center justify-center"
                      onClick={ () => dispatch(openDeleteConfirm({id, data: 'partner'})) }
                    >
                      <Icon name="trash" size={ 13 } />
                    </button>
                  </div>
                </td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  ...state.modalControl,
  serviceFilter: state.serviceFilter,
  countryList: state.globalState.countryList
});

export default connect(mapStateToProps)(ProviderTable);
