import React, { useState } from 'react';
import { openModalOffer } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import Icon from 'icon';
import Modal from 'components/Modal';

const listOffer = [
  {
    id: 1,
    offer: 'Incorporation'
  }, {
    id: 2,
    offer: 'Intellectual Property'
  }
]

const Offer = ({ dispatch }) => {
  const [selectedOffer, setSelectedOffer ] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [openOffer, setOpenOffer] = useState(false);

  const addMyOffer = (id, offer) => {
    setSelectedOffer([...selectedOffer, {id, offer}]);
    setOpenOffer(false);
  }

  const removeMyOffer = index => {
    selectedOffer.splice(index, 1);
    setSelectedOffer([...selectedOffer]);
  }

  return (
    <Modal>
      <div className="p-6 border-b mb-6 pb-4 flex justify-between items-center">
        <h3 className="font-medium text-lg">Services Offered</h3>

        <button className="h-auto" onClick={ () => dispatch(openModalOffer(false)) }>
          <Icon name="close" color="#333" />
        </button>
      </div>

      <div className="flex flex-col mb-2 m-6">
        <div className="relative w-full">
          <div className="flex items-center border rounded-l-sm">
            <div className="bg-white flex justify-center items-center px-4">
              <Icon name="search" size={ 12 } color="#333" />
            </div>

            <input
              onFocus={ () => setOpenOffer(true) }
              // onBlur={ () => setOpenOffer(false) }
              className="h-10 w-6/12"
              placeholder="What service are you looking for?"
              onChange={ e => setKeyword(e.target.value) }
            />
          </div>

          { openOffer && <div className="shadow-md bg-white rounded-md mt-2 absolute w-full">
            { listOffer
              .filter((find, i) => selectedOffer[i] ? find.id !== selectedOffer[i].id : find)
              .filter(find => find.offer.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
              .map(item => (
                <div
                  className="cursor-pointer hover:bg-gray-100"
                  key={ item.id }
                  onClick={ () => addMyOffer(item.id, item.offer) }
                >
                  <p className="p-3">{ item.offer }</p>
                </div>
            )) }
          </div> }
        </div>

        { selectedOffer.length > 0 && <ul className="block mt-4">
          { selectedOffer.map((item, i) => (
            <li
              key={ item.id }
              className="border-blue text-blue text-xs border-2 rounded-full px-4 py-2 mr-2 inline-flex justify-between items-center"
            >
              {item.offer}

              <button className="ml-6" onClick={ () => removeMyOffer(i) }>
                <Icon name="close" size={ 10 } color="#86BBFF" />
              </button>
            </li>
          )) }
        </ul> }

        <button className="text-orange text-sm font-bold mt-24">
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
