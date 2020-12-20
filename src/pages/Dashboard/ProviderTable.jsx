import React from 'react';
import Icon, { IconImage } from 'icon';
import { openDeleteConfirm } from 'store/actions/ModalControl';
import { connect } from 'react-redux';

const trBorder = 'border-b border-gray-300';

const ProviderTable = ({ list, dispatch }) => {
  return (
    <table className="table-auto w-full text-left">
      <thead className="bg-gray-50">
        <tr>
          <th className={ `pl-5 p-3 ${trBorder}` }>Name</th>
          <th className={trBorder}>Country</th>
          <th className={trBorder}>City</th>
          <th className={`${trBorder} w-28`}>Actions</th>
        </tr>
      </thead>
      <tbody>
        { list.map((item, i) => (
          <tr key={ i }>
            <td className={ `pl-5 p-3 ${trBorder}` }>
              <div className="flex items-center">
                <img src={item.logo} alt={item.name} className="h-7 w-7" />
                <span className="ml-3">{ item.name }</span>
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
                  onClick={ () => dispatch(openDeleteConfirm(true)) }
                >
                  <Icon name="trash" size={ 13 } />
                </button>
              </div>
            </td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return state.modalControl
}

export default connect(mapStateToProps)(ProviderTable);
