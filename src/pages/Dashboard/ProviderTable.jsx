import React, { Fragment } from 'react';
import Icon, { IconImage } from 'icon';
import { openDeleteConfirm, openNewPartner } from 'store/actions/ModalControl';
import { connect } from 'react-redux';

const trBorder = 'border-b border-gray-300';

const ProviderTable = ({ list, dispatch }) => {
  return (
    <Fragment>
      <div className="px-5 py-4 flex justify-between items-center">
        <h2 className="text-darkdrop font-medium text-lg">Partners</h2>

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
            { list && list.map((item, i) => (
              <tr key={ i }>
                <td className={ `pl-5 p-3 ${trBorder}` }>
                  <div className="flex items-center">
                    <img src="/images/provider/lopez-law.png" alt={ item.companyName } className="h-7 w-7 hidden md:block object-cover" />
                    <span className="md:ml-3">{ item.companyName }</span>
                  </div>
                </td>

                <td className={ `${trBorder}` }>
                  <div className="flex items-center">
                    <IconImage name={ `${item.country}-flag` } />
                    <span className="ml-3">{ item.country }</span>
                  </div>
                </td>

                <td className={ `${trBorder}` }>
                  { item.city }
                </td>

                <td className={ `${trBorder}` }>
                  <div className="flex">
                    <button
                      className="w-8 h-8 rounded bg-darkdrop flex items-center justify-center mr-2"
                      // onClick={ () => dispatch(openDeleteConfirm(true)) }
                    >
                      <Icon name="pen" size={ 13 } />
                    </button>

                    <button
                      className="w-8 h-8 rounded bg-red-700 flex items-center justify-center"
                      onClick={ () => dispatch(openDeleteConfirm(item.id)) }
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

function mapStateToProps(state) {
  return state.modalControl
}

export default connect(mapStateToProps)(ProviderTable);
