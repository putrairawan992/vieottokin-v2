import React, { useState, useEffect } from 'react';
import { openNewPartner } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import Icon from 'icon';
import Modal from 'lib/elements/Modal';
import { create, read } from 'utils/api';

const AddNewPartner = ({ dispatch }) => {
  const [preview, setPreview] = useState([]);
  const [companyName, setCompanyName] = useState([]);
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const submit = e => {
    e.preventDefault();
    create('admin/services');
  };

  useEffect(() => {

  }, []);

  return (
    <Modal>
      <div className="border-b px-6 py-4 flex items-center">
        <h3 className="font-medium text-xl">Add New Partner</h3>

        <button className="ml-auto block" onClick={ () => dispatch(openNewPartner(false)) }>
          <Icon name="close" color="#333" />
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mx-3 py-5 px-2 mb-4 flex items-center">
          <label className="w-24 h-24 text-center flex flex-col cursor-pointer rounded-full justify-center border-2 border-dashed">
            <Icon name="image" size={30} className="mx-auto" color="#6493b9" />

            <small className="text-xxs text-blue">
              Add file or drag<br/>& drop here
            </small>

            <input type="file" accept=".jpg,.jpeg,.png,.gif" className="hidden" />
          </label>

          <div className="ml-5">
            <b className="leading-3 block">Profile Image</b>
            <small>Supports: JPG, JPEG, PNG, GIF</small>
          </div>
        </div>

        <form onSubmit={ submit }>
          <div className="mx-3 flex flex-wrap">
            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Company Name</span>

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

export default connect()(AddNewPartner);
