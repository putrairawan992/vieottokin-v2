import React, { useEffect, useState } from 'react';
import { openOffer } from 'store/actions/ModalControl';
import { useDispatch } from 'react-redux';
import { create, read } from 'utils/api';
import Icon from 'icon';
import Modal from 'lib/elements/Modal';

const Offer = () => {
  const dispatch = useDispatch();
  const [subCategories, setSubCategories ] = useState([]);
  const [selectedOffer, setSelectedOffer ] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [openOfferList, setOpenOffer] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await read('categories');
      res.data.map(({ SubCategory }) => setSubCategories(state => [...state, ...SubCategory]));
    };

    fetchData();
  }, []);

  const addMyOffer = (id, offer) => {
    setSelectedOffer([...selectedOffer, {id, offer}]);
    setOpenOffer(false);
  };

  const removeMyOffer = index => {
    selectedOffer.splice(index, 1);
    setSelectedOffer([...selectedOffer]);
  };

  const submit = () => {
    console.log(selectedOffer)
    // create('', selectedOffer)
    // .then(() => {
    //   alert('Submit success');
    //   dispatch(openOffer(false));
    // });
  };


  return (
    <Modal>
      <div className="p-6 border-b mb-6 pb-4 flex justify-between items-center">
        <h3 className="font-medium text-lg">Services Offered</h3>

        <button className="h-auto" onClick={ () => dispatch(openOffer(false)) }>
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
              className="h-10 w-full pl-2"
              placeholder="What service are you looking for?"
              onChange={ e => setKeyword(e.target.value) }
            />
          </div>

          { openOfferList && <div className="shadow-md bg-white rounded-md mt-2 absolute w-full">
            { subCategories?.filter((find, i) => selectedOffer[i] ? find.id !== selectedOffer[i].id : find)
              .filter(find => find.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
              .map(item => (
                <div
                  className="cursor-pointer hover:bg-gray-100"
                  key={ item.id }
                  onClick={ () => addMyOffer(item.id, item.name) }
                >
                  <p className="p-3">{ item.name }</p>
                </div>
            )) }
          </div> }
        </div>

        { selectedOffer.length > 0 && <ul className="block mt-2">
          { selectedOffer.map((item, i) => (
            <li
              key={ item.id }
              className="border-blue text-blue text-xs border-2 rounded-full px-4 py-2 mr-2 mt-2 inline-flex justify-between items-center"
            >
              { item.offer }

              <button className="ml-6" onClick={ () => removeMyOffer(i) }>
                <Icon name="close" size={ 10 } color="#86BBFF" />
              </button>
            </li>
          )) }
        </ul> }

        <button
          onClick={ () => dispatch(openOffer(false)) }
          className="text-orange text-sm font-bold mt-24"
        >
          GO BACK
        </button>
      </div>

      <button
        onClick={ submit }
        className="bg-orange w-full py-3 text-white rounded-b-md"
      >
        SUBMIT
      </button>
    </Modal>
  );
}

export default Offer;
