import React, { useState, useEffect } from 'react';
import { openEditService } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import Icon from 'icon';
import Modal from 'lib/elements/Modal';
import AutoComplete from 'lib/components/SearchInput/AutoComplete';
import { update, read } from 'utils/api';

const EditService = ({ dispatch, countryList, showModalEditService, auth }) => {
  const [serviceName, setServiceName] = useState('');
  const [partnerId, setPartnerId] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [currencySymbol, setCurrencySymbol] = useState('');
  const [description, setDescription] = useState('');
  const [minimumPrice, setMinimumPrice] = useState('');
  const [partnerList, setPartnerList] = useState([]);
  const [categoryId, setCategoryId] = useState('');
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

    update(`${auth.user.role === 'Admin' ? 'admin' : 'partners'}/services/${showModalEditService}`, data)
    .then(() => window.location.reload());
  };

  useEffect(() => {
    const { user: { role }, userProfile } = auth;

    const fetchData = async () => {
      if (role === 'Admin') {
        const resPartners = await read('admin/partners');
        setPartnerList(resPartners.data.results.rows);
      }

      const resData = await read(`${role === 'Admin' ? 'admin' : 'partners'}/services/${showModalEditService}`);
      setServiceName(resData.data.name);
      setPartnerId(resData.data.userId);
      setCurrencySymbol(resData.data.currencySymbol);
      setDescription(resData.data.description);
      setMinimumPrice(resData.data.minimumPrice);
      setCategoryId(resData.data.categoryId);
      setCatPartnerId(role === 'Admin' ? resData.data.Category.parentId : userProfile?.categoryId);
      setCompanyName(role === 'Admin' ? resData.data.partner.companyName : userProfile?.companyName);
    };

    fetchData();
  }, [showModalEditService]);

  useEffect(() => {
    const fetchData = async () => {
      if (catPartnerId) {
        const resCategory = await read(`categories/${catPartnerId}/child`);
        setSubCategoryList(resCategory.data);
      }
    };

    fetchData();
  }, [catPartnerId]);

  const setPartner = data => {
    const currency = countryList.filter(find => find.name === data.country);
    setPartnerId(data.id);
    setCurrencySymbol(currency[0].currencySymbol);
  }

  return (
    <Modal>
      <div className="border-b px-6 py-4 flex items-center">
        <h3 className="font-medium text-xl">Edit Service</h3>

        <button className="ml-auto block" onClick={ () => dispatch(openEditService(false)) }>
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
                value={serviceName || '' }
                onChange={ e => setServiceName(e.target.value) }
              />
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Partner</span>

              <div className="w-full relative">
                { auth.user.role === 'Admin' ? partnerList && companyName && <AutoComplete
                    suggestions={ partnerList }
                    value={ companyName }
                    onChange={ e => setPartner(e) }
                  />
                  : <AutoComplete value={ auth.userProfile.companyName } disabled />
                }
              </div>
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Description</span>

              <textarea
                required
                className="border py-1 px-2"
                value={ description || ''}
                onChange={ e => setDescription(e.target.value) }
              ></textarea>
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Service Category</span>

              <select
                className="border p-2 text-xs text-gray-500"
                value={ categoryId }
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
                value={ minimumPrice || 0 }
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
  showModalEditService: state.modalControl.showModalEditService,
  auth: state.auth
});

export default connect(mapStateToProps)(EditService);
