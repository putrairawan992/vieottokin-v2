import React from 'react';
import { openSignup } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import Icon from 'icon';
import Modal from 'components/Modal';

const SigninPopup = ({ dispatch }) => {
  return (
    <Modal>
      <div className="text-center p-6 pb-0">
        <button className="ml-auto block" onClick={ () => dispatch(openSignup(false)) }>
          <Icon name="close" color="#333" />
        </button>
      </div>

      <div className="flex flex-col">
        <div className="text-center border-b mb-6">
          <h3 className="font-medium text-2xl px-6">Welcome!</h3>

          <p className="text-sm mt-4 px-3 md:px-8 mb-6">
            Thank you for your interest in becoming a part of the Ventoorhub network. Please let us know a little about the magic your company offers. We will get back to you right away!
          </p>
        </div>

        <form>
          <div className="mx-4 flex flex-wrap">
            <label className="w-6/12 px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Company Name</span>

              <input
                required
                className="border py-1 px-2"
              />
            </label>

            <label className="w-6/12 px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Company Website</span>

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

            <label className="w-6/12 px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">First Name</span>

              <input
                required
                className="border py-1 px-2"
              />
            </label>

            <label className="w-6/12 px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Last Name</span>

              <input
                required
                className="border py-1 px-2"
              />
            </label>

            <label className="w-6/12 px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Position</span>

              <input
                required
                className="border py-1 px-2"
              />
            </label>

            <label className="w-6/12 px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Email</span>

              <input
                required
                className="border py-1 px-2"
              />
            </label>

            <label className="w-6/12 px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Phone</span>

              <input
                required
                className="border py-1 px-2"
              />
            </label>

            <label className="w-6/12 px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Industry</span>

              <input
                required
                className="border py-1 px-2"
              />
            </label>
          </div>

          <button className="bg-orange w-full py-3 mt-4 text-white rounded-b-md">
            NEXT
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default connect()(SigninPopup);
