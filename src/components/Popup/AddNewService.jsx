import React from 'react';
import { openNewPartner } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import Icon from 'icon';
import Modal from 'components/Modal';

const AddNewService = ({ dispatch }) => {
  return (
    <Modal>
      <div className="border-b px-6 py-4 flex items-center">
        <h3 className="font-medium text-xl">Add New Partner</h3>

        <button className="ml-auto block" onClick={ () => dispatch(openNewPartner(false)) }>
          <Icon name="close" color="#333" />
        </button>
      </div>

      <div className="flex flex-col">
        <form>
          <div className="mx-3 flex flex-wrap">
            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Service Name</span>

              <input
                required
                className="border py-1 px-2"
              />
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Email Address</span>

              <input
                required
                className="border py-1 px-2"
              />
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Country</span>

              <select className="border p-2 text-xs text-gray-500">
                <option>Select country</option>
              </select>
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">City</span>

              <input
                required
                className="border py-1 px-2"
              />
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Service Category</span>

              <select className="border p-2 text-xs text-gray-500">
                <option>Select country</option>
              </select>
            </label>
          </div>

          <button className="bg-orange w-full py-3 mt-4 text-white font-bold rounded-b-md">
            ADD PARTNER
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default connect()(AddNewService);
