import React from 'react';
import { setFilter } from 'store/actions/ServiceFilter';
import { connect } from 'react-redux';
import Icon from 'icon';

const TableFooter = ({ data, currentPage, dispatch }) => (
  <div className="flex justify-between p-5">
    <div className="flex items-center text-xs">
      <p>Show</p>

      <select
        className="border p-1 ml-2 font-bold"
        onClick={ e => dispatch(setFilter({limit: e.target.value})) }
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">40</option>
        <option value="90">90</option>
      </select>
    </div>

    <nav className="flex text-xs text-gray-500">
      <button
        className="px-3 py-2 flex items-center"
        onClick={ () => dispatch(setFilter({page: currentPage - 1 })) }
        disabled={ currentPage === 1 }
      >
        <Icon name="chevron-left" size={12} color="#7e8692" />
        <i className="ml-2">prev</i>
      </button>

      { [...Array(data.page)].map((el, i) => (
        <button
          className={`${currentPage === i+1 ? 'border-b border-orange text-orange' : ''} px-3 py-2`}
          onClick={ () => dispatch(setFilter({page: i+1 })) }
          key={ i }
          disabled={ currentPage === i+1 }
        >
          { i+1 }
        </button>
      )) }

      <button
        className="px-3 py-2 flex items-center"
        onClick={ () => dispatch(setFilter({page: currentPage + 1 })) }
        disabled={ currentPage === data.page }
      >
        <i className="mr-2">next</i>
        <Icon name="chevron-right" size={12} color="#7e8692" />
      </button>
    </nav>
  </div>
);

const mapStateToProps = state => ({
  currentPage: state.serviceFilter.page
})

export default connect(mapStateToProps)(TableFooter);
