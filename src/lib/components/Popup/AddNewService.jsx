import React, { useState, useEffect } from 'react';
import { openNewService } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import Icon from 'icon';
import Modal from 'lib/elements/Modal';
import { create } from 'utils/api';

const AddNewService = ({ dispatch }) => {
  const [serviceName, setServiceName] = useState('');
  const [partnerId, setPartnerId] = useState('');
  const [description, setDescription] = useState('');
  const [minimumPrice, setMinimumPrice] = useState('');

  const submit = e => {
    e.preventDefault();
    create('admin/services');
  };

  useEffect(() => {

  }, []);

  return (
    <Modal>
      <div className="border-b px-6 py-4 flex items-center">
        <h3 className="font-medium text-xl">Add New Service</h3>

        <button className="ml-auto block" onClick={ () => dispatch(openNewService(false)) }>
          <Icon name="close" color="#333" />
        </button>
      </div>

      <div className="flex flex-col mt-6">
        <form onSubmit={ submit }>
          <div className="mx-3 flex flex-wrap">
            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Service Name</span>

              <input
                required
                className="border py-1 px-2"
              />
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Partner</span>

              <div className="flex w-full items-center border border-gray-300 justify-between">
                <div className="bg-white h-10 w-10 flex justify-center items-center rounded-l-sm">
                  <Icon name="search" size={ 12 } color="#333" />
                </div>

                <input
                  className="h-10 w-full text-gray-500"
                  placeholder="Search partners"
                />
              </div>
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Description</span>

              <textarea
                required
                className="border py-1 px-2"
              ></textarea>
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Service Category</span>

              <select className="border p-2 text-xs text-gray-500">
                <option>Select country</option>
              </select>
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Minimum Price</span>

              <input
                required
                className="border py-1 px-2"
              />
            </label>
          </div>

          <button className="bg-orange w-full py-3 mt-4 text-white font-bold rounded-b-md">
            ADD SERVICE
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default connect()(AddNewService);
