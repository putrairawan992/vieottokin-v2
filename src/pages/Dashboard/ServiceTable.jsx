import React, { Fragment } from 'react';
import Icon from 'icon';
import { openDeleteConfirm, openNewService } from 'store/actions/ModalControl';
import { connect } from 'react-redux';

const trBorder = 'border-b border-gray-300';

const ServiceTable = ({ list, dispatch }) => {
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
          { list.map((item, i) => (
            <tr key={ i }>
              <td className={ `pl-5 p-3 ${trBorder}` }>
                <div className="flex items-center">
                  <span>{ item.service }</span>
                </div>
              </td>

              <td className={trBorder}>
                <div className="flex items-center">
                  <img src={item.logo} alt={item.name} className="h-7 w-7 object-cover" />
                  <span className="ml-3">{ item.name }</span>
                </div>
              </td>

              <td className={ `${trBorder}` }>
                <div className="flex">
                  <button
                    className="w-8 h-8 rounded bg-darkdrop flex items-center justify-center mr-2"
                  >
                    <Icon name="pen" size={ 13 } />
                  </button>

                  <button
                    className="w-8 h-8 rounded bg-red-700 flex items-center justify-center mr-2"
                    onClick={ () => dispatch(openDeleteConfirm(true)) }
                  >
                    <Icon name="trash" size={ 13 } />
                  </button>

                  <button className="px-3 text-xs rounded text-blue border border-blue">
                    View Service
                  </button>
                </div>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </Fragment>
  );
}

function mapStateToProps(state) {
  return state.modalControl
}

export default connect(mapStateToProps)(ServiceTable);
