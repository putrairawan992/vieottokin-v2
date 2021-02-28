import React from 'react';
import { openDeleteConfirm } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import Icon from 'icon';
import Modal from 'lib/elements/Modal';
import { remove } from 'utils/api';

const DeleteConfirm = ({ dispatch, role, showModalDeleteConfirm }) => {
  const deleteService = () => {
    const roles = role === 'Admin' ? 'admin' : 'partners';
    remove(`${roles}/${showModalDeleteConfirm.data}s/${showModalDeleteConfirm.id}`)
    .then(() => window.location.reload())
  };

  return (
    <Modal>
      <div className="text-center pt-10">
        <span className="w-14 h-14 bg-orange mx-auto flex justify-center items-center rounded-full">
          <Icon name="question" size={ 31 } />
        </span>

        <h1 className="text-2xl py-5 font-bold">Confirm Deletion</h1>

        <article className="text-gray-500 mb-8">
          <p>Are you sure you want to delete this {showModalDeleteConfirm.data}?</p>
          <p>This cannot undone.</p>
        </article>

        <button
          className="font-bold text-orange py-3"
          onClick={ () => dispatch(openDeleteConfirm(null)) }
        >
          CANCEL
        </button>

        <button
          onClick={ () => deleteService() }
          className="w-full bg-orange p-4 rounded-b-md text-white text-center"
        >
          DELETE
        </button>
      </div>
    </Modal>
  );
};

const mapStateToProps = state => ({
  ...state.modalControl,
  role: state.auth.user.role
});

export default connect(mapStateToProps)(DeleteConfirm);
