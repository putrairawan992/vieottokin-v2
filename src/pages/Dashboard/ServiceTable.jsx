import React, { Fragment, useEffect, useState } from 'react';
import { openDeleteConfirm, openNewService, openEditService } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import { read } from 'utils/api';
import Icon from 'icon';
import { Link } from 'react-router-dom';

const trBorder = 'border-b border-gray-300';

const ServiceTable = ({ setCount, dispatch, serviceFilter, auth: { user, userProfile } }) => {
  const { limit, page } = serviceFilter;
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const params = `page=${!search?.length ? page : 1}&limit=${limit}&search=${search}`;
      const resServices = await read(`${user.role === 'Admin' ? 'admin' : 'partners'}/services?${params}`);
      setCount({count: resServices.data.results.count, pages: resServices.data.lastPage || 1});
      setServices(resServices.data.results);
    };

    const limitSearch = search.length > 3 || !search?.length;
    limitSearch && fetchData();
  }, [limit, page]);

  return (
    <Fragment>
      <div className="px-5 py-4 flex justify-between items-center">
        <h2 className="text-darkdrop font-medium text-lg">Services</h2>

        <div className="flex">
          <label className="flex border-gray-300 border rounded items-center justify-between">
            <div className="bg-white h-10 w-12 flex justify-center items-center rounded-l-sm">
              <Icon name="search" size={ 12 } color="#333" />
            </div>

            <input
              className="h-10 w-full text-gray-500 pl-2"
              placeholder="Search"
              onChange={ e => setSearch(e.target.value) }
            />
          </label>

          <button
            className="px-5 text-xs h-10 text-white ml-5 font-medium bg-orange rounded"
            onClick={ () => dispatch(openNewService(true)) }
          >
            Add New Services
          </button>
        </div>
      </div>

      <table className="table-auto w-full text-left">
        <thead className="bg-gray-50">
          <tr>
            <th className={ `pl-5 p-3 ${trBorder}` }>Service</th>
            <th className={trBorder}>Name</th>
            <th className={`${trBorder} w-52`}>Actions</th>
          </tr>
        </thead>
        <tbody>
          { services.rows?.map(({ id, name, partner }) => (
            <tr key={ id }>
              <td className={ `pl-5 p-3 ${trBorder}` }>
                <div className="flex items-center">
                  <span>{ name }</span>
                </div>
              </td>

              <td className={trBorder}>
                <div className="flex items-center">
                  <img
                    src={ user.role === 'Admin' ? partner?.avatar : userProfile.avatar } alt={name}
                    className="h-7 w-7 object-cover"
                  />

                  <span className="ml-3">{ user.role === 'Admin' ? partner?.companyName : userProfile.companyName }</span>
                </div>
              </td>

              <td className={ `${trBorder}` }>
                <div className="flex">
                  <button
                    className="w-8 h-8 rounded bg-darkdrop flex items-center justify-center mr-2"
                    onClick={ () => dispatch(openEditService(id)) }
                  >
                    <Icon name="pen" size={ 13 } />
                  </button>

                  <button
                    className="w-8 h-8 rounded bg-red-700 flex items-center justify-center mr-2"
                    onClick={ () => dispatch(openDeleteConfirm({id, data: 'service'})) }
                  >
                    <Icon name="trash" size={ 13 } />
                  </button>

                  <Link
                    to={ `profile-provider/${id}` }
                    className="px-3 text-xs rounded text-blue border border-blue flex items-center"
                  >
                    View Service
                  </Link>
                </div>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  serviceFilter: state.serviceFilter,
})

export default connect(mapStateToProps)(ServiceTable);
