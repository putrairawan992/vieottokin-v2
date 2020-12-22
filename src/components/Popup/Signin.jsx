import React, { useState } from 'react';
import { openSignin } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import Icon from 'icon';
import Modal from 'components/Modal';

const SigninPopup = ({ dispatch }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <Modal>
      <div className="text-center p-6 pb-0">
        <button className="ml-auto block" onClick={ () => dispatch(openSignin(false)) }>
          <Icon name="close" color="#333" />
        </button>
      </div>

      <div className="flex flex-col">
        <div className="text-center border-b mb-6">
          <h3 className="font-medium text-2xl px-6">Welcome!</h3>

          <p className="text-sm mt-4 px-3 md:px-8 mb-6">
            Please sign in by below
          </p>
        </div>

        <form>
          <div className="mx-4 flex flex-wrap">
            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Email</span>

              <input
                required
                type="email"
                className="border py-1 px-2"
              />
            </label>

            <label className="w-full px-2 flex flex-col mb-5 relative">
              <span className="mr-5 mb-2 text-sm font-bold">Password</span>

              <div className="relative flex items-center">
                <input
                  required
                  type={ hidePassword ? 'password' : 'text' }
                  className="border py-1 px-2 w-full"
                />

                <button
                  type="button"
                  className="absolute right-2"
                  onClick={ () => setHidePassword(!hidePassword) }
                >
                  <Icon name={ hidePassword ? 'eye-off' : 'eye-on' } color="#333" />
                </button>
              </div>
            </label>
          </div>

          <button className="bg-orange w-full py-3 mt-4 text-white rounded-b-md">
            LOGIN
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default connect()(SigninPopup);