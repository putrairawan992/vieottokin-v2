import React from 'react';
import { openDeleteConfirm } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import Icon from 'icon';
import Modal from 'lib/elements/Modal';
import { remove } from 'utils/api';

const DeleteConfirm = ({ dispatch, showModalDeleteConfirm }) => {
  const Remove = async () => {
    const w = await remove(`admin/partners/${showModalDeleteConfirm}`);
    console.log(w);
    // dispatch(openDeleteConfirm(null));
  };

  return (
    <Modal>
      <div className="text-center pt-10">
        <span className="w-14 h-14 bg-orange mx-auto flex justify-center items-center rounded-full">
          <Icon name="question" size={ 31 } />
        </span>

        <h1 className="text-2xl py-5 font-bold">Confirm Deletion</h1>

        <article className="text-gray-500 mb-8">
          <p>Are you sure you want to delete this partner?</p>
          <p>This cannot undone.</p>
        </article>

        <button
          className="font-bold text-orange py-3"
          onClick={ () => dispatch(openDeleteConfirm(null)) }
        >
          CANCEL
        </button>

        <button
          onClick={ () => Remove() }
          className="w-full bg-orange p-4 rounded-b-md text-white text-center"
        >
          DELETE
        </button>
      </div>
    </Modal>
  );
};

function mapStateToProps(state) {
  return state.modalControl;
};

export default connect(mapStateToProps)(DeleteConfirm);
