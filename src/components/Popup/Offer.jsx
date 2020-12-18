import React from 'react';
import { openModalOffer } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import Icon from 'icon';
import Modal from 'components/Modal';

const Offer = ({ dispatch }) => {
  return (
    <Modal>
      <div className="p-6 border-b mb-6 pb-4 flex justify-between items-center">
        <h3 className="font-medium text-lg">Services Offered</h3>

        <button className="h-auto" onClick={ () => dispatch(openModalOffer(false)) }>
          <Icon name="close" color="#333" />
        </button>
      </div>

      <div className="flex flex-col mb-2 m-6">
        <div className="flex items-center border w-full rounded-l-sm mb-24">
          <div className="bg-white flex justify-center items-center px-4">
            <Icon name="search" size={ 12 } color="#333" />
          </div>

          <input
            className="h-10 w-6/12"
            placeholder="What service are you looking for?"
          />
        </div>

        <button className="text-orange text-sm font-bold">
          GO BACK
        </button>
      </div>

      <button className="bg-orange w-full py-3 text-white rounded-b-md">
        SUBMIT
      </button>
    </Modal>
  );
}

export default connect()(Offer);
