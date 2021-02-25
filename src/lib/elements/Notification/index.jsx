import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openNotification } from 'store/actions/ModalControl';
import { useDispatch } from 'react-redux';
import Icon from 'icon';

const Notification = ({ message, type }) => {
  const dispatch= useDispatch();
  const [color, setColor] = useState('');

  useEffect(() => {
    type === 'success' && setColor('bg-green-500 border-green-700 text-white');
    type === 'failed' && setColor('bg-red-500 border-red-700 text-white');
  }, [type]);

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex z-50 justify-center items-center">
      <div className={`flex items-center border-l-4 py-2 px-3 shadow-md mb-20 ${color} bg-opacity-90`}>
        <div className="mr-3">
          <Icon size={45} name="success-notif" />
        </div>

        <div className="max-w-xs">{ message }</div>
        <button className="ml-6" onClick={() => dispatch(openNotification(false))}>X</button>
      </div>
    </div>
  );
};

Notification.defaultProps = {
  type: 'success'
};

Notification.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  ...state.modalControl.showNotification
});

export default connect(mapStateToProps)(Notification);
