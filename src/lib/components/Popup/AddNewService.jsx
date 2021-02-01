import React, { useState, useEffect } from 'react';
import { openNewService } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import Icon from 'icon';
import Modal from 'lib/elements/Modal';
import AutoComplete from 'lib/components/SearchInput/AutoComplete';
import { create, read } from 'utils/api';

const AddNewService = ({ dispatch, countryList, categoryList }) => {
  const [serviceName, setServiceName] = useState('');
  const [partnerId, setPartnerId] = useState('');
  const [currencySymbol, setCurrencySymbol] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [description, setDescription] = useState('');
  const [minimumPrice, setMinimumPrice] = useState('');
  const [partnerList, setPartnerList] = useState([]);

  const [catPartnerId, setCatPartnerId] = useState('');
  const [subCategoryList, setSubCategoryList] = useState([]);

  const submit = e => {
    e.preventDefault();

    const data = {
      'service_name': serviceName,
      'partner_id': partnerId,
      'currency_symbol': currencySymbol,
      'description': description,
      'category_id': categoryId,
      'minimum_price': minimumPrice
    }

    create('admin/services', data)
    .then(() => window.location.reload());
  };

  useEffect(() => {
    const fetchData = async () => {
      const resPartners = await read('admin/partners');
      setPartnerList(resPartners.data.results.rows);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (catPartnerId) {
        const resCategory = await read(`admin/categories/${catPartnerId}/child`);
        setSubCategoryList(resCategory.data);
      }
    };

    fetchData();
  }, [catPartnerId]);

  const setPartner = data => {
    const currency = countryList.filter(find => find.name === data.country);

    setPartnerId(data.id);
    setCurrencySymbol(currency[0].currencySymbol);
    setCatPartnerId(data.categoryId);
  }

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
                onChange={ e => setServiceName(e.target.value) }
              />
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Partner</span>

              <div className="w-full relative">
                { partnerList && <AutoComplete
                  suggestions={ partnerList }
                  onChange={ e => setPartner(e) }
                /> }
              </div>
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Description</span>

              <textarea
                required
                className="border py-1 px-2"
                onChange={ e => setDescription(e.target.value) }
              ></textarea>
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Service Category</span>

              <select
                className="border p-2 text-xs text-gray-500"
                onChange={ e => setCategoryId(e.target.value) }
              >
                <option>Select category</option>
                { subCategoryList?.map(el => (
                  <option key={ el.id } value={ el.id }>{ el.name }</option>
                )) }
              </select>
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Minimum Price</span>

              <input
                required
                className="border py-1 px-2"
                onChange={ e => setMinimumPrice(e.target.value) }
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

const mapStateToProps = state => ({
  countryList: state.globalState.countryList,
  categoryList: state.globalState.categoryList
});

export default connect(mapStateToProps)(AddNewService);
