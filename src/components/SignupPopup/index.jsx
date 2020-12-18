import React from 'react';
import { openModalSignup } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import Icon from 'icon';

const SigninPopup = ({ dispatch }) => {
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex z-50 justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-sm w-full m-2 md:w-6/12 lg:w-4/12">
        <div className="text-center p-6 pb-0">
          <button className="ml-auto block" onClick={ () => dispatch(openModalSignup(false)) }>
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
                  <option value="volvo">Select country</option>
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

            <button className="bg-orange w-full py-3 mt-4 text-white rounded-b-sm">
              NEXT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default connect()(SigninPopup);
