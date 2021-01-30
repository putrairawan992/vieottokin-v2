import React, { Fragment, useEffect, useState } from 'react';
import { openDeleteConfirm, openNewService, openEditService } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import { read } from 'utils/api';
import Icon from 'icon';
import { Link } from 'react-router-dom';

const trBorder = 'border-b border-gray-300';

const ServiceTable = ({ setCount, dispatch }) => {
  const [services, setServices] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const resServices = await read('admin/services');
      const resPartner = await read(`admin/partners`);
      setAvatar(resPartner.data.results.rows);
      setCount({count: resServices.data.results.count, pages: resServices.data.lastPage || 1});
      setServices(resServices.data.results);
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="px-5 py-4 flex justify-between items-center">
        <h2 className="text-darkdrop font-medium text-lg">Services</h2>

        <div className="flex">
          <div className="flex border-gray-300 border rounded items-center justify-between">
            <div className="bg-white h-10 w-12 flex justify-center items-center rounded-l-sm">
              <Icon name="search" size={ 12 } color="#333" />
            </div>

            <input
              className="h-10 w-full text-gray-500"
              placeholder="Search"
              onChange={ e => setSearch(e.target.value) }
            />
          </div>

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
          { services.rows?.filter(find => find.name.toLowerCase().includes(search.toLowerCase())).map(item => (
            <tr key={ item.id }>
              <td className={ `pl-5 p-3 ${trBorder}` }>
                <div className="flex items-center">
                  <span>{ item.name }</span>
                </div>
              </td>

              <td className={trBorder}>
                <div className="flex items-center">
                  <img
                    src={ avatar?.filter(find => find.id === item.userId)[0].avatar } alt={item.name}
                    className="h-7 w-7 object-cover"
                  />

                  <span className="ml-3">{ avatar?.filter(find => find.id === item.userId)[0].companyName }</span>
                </div>
              </td>

              <td className={ `${trBorder}` }>
                <div className="flex">
                  <button
                    className="w-8 h-8 rounded bg-darkdrop flex items-center justify-center mr-2"
                    onClick={ () => dispatch(openEditService(item.id)) }
                  >
                    <Icon name="pen" size={ 13 } />
                  </button>

                  <button
                    className="w-8 h-8 rounded bg-red-700 flex items-center justify-center mr-2"
                    onClick={ () => dispatch(openDeleteConfirm({id: item.id, data: 'service'})) }
                  >
                    <Icon name="trash" size={ 13 } />
                  </button>

                  <Link
                    to={ `profile-provider/${item.id}` }
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

export default connect()(ServiceTable);
