import React, { useState, useEffect } from 'react';
import { openEditPartner } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import Icon from 'icon';
import Modal from 'lib/elements/Modal';
import { update, read } from 'utils/api';

const EditPartner = ({ dispatch, showModalEditPartner }) => {
  const [file, setFile] = useState(null);
  const [avatar, setAvatar] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [country, setCountry] = useState({id: '', string: ''});
  const [city, setCity] = useState('');

  const [listCategory, setListCategory] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const onChangeImage = e => {
    e.preventDefault();
    setFile(e.target.files[0]);
  }

  const edit = e => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('file', file);
    formData.append('company_name', companyName);
    formData.append('description', description);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('country', country.string);
    formData.append('city', city);
    formData.append('category_id', categoryId);

    update(`admin/partners/${showModalEditPartner}`, formData)
    .then(() => window.location.reload());
  };

  useEffect(() => {
    const fetchData = async () => {
      const resPartner = await read(`admin/partners/${showModalEditPartner}`);
      setAvatar(resPartner.data.avatar);
      setCompanyName(resPartner.data.companyName);
      setDescription(resPartner.data.description);
      setEmail(resPartner.data.email);
      setPassword(resPartner.data.password);
      setCategoryId(resPartner.data.categoryId);
      setCity(resPartner.data.city);
      setCountry(prev => ({...prev, string: resPartner.data.country}));

      const resCountry = await read('countries');
      const getCountry = resCountry.data.filter(find => find.name === resPartner.data.country);
      const resCity = await read(`countries/${getCountry[0].id}/cities`);
      setCityList(resCity.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setListCategory([]);

      const resCategory = await read('categories');
      resCategory.data.map(({ SubCategory }) => setListCategory(state => [...state, ...SubCategory]));

      const resCountry = await read('countries');
      setCountryList(resCountry.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (country.id) {
        const resCity = await read(`countries/${country.id}/cities`);
        setCityList(resCity.data);
      }
    };

    fetchData();
  }, [country]);

  return (
    <Modal>
      <div className="border-b px-6 py-4 flex items-center">
        <h3 className="font-medium text-xl">Edit Partner</h3>

        <button className="ml-auto block" onClick={ () => dispatch(openEditPartner(null)) }>
          <Icon name="close" color="#333" />
        </button>
      </div>

      <div className="flex flex-col">
        <form onSubmit={ edit }>
          <div className="mx-3 py-5 px-2 flex items-center">
            <label className="w-24 h-24 text-center flex flex-col cursor-pointer rounded-full justify-center border-2 border-dashed">
              { file ?
                  <img src={ URL.createObjectURL(file) } />
                : avatar ?
                  <img src={ avatar } />
                :
                  <Icon name="image" size={30} className="mx-auto" color="#6493b9" />
              }

              { !file && !avatar && <small className="text-xxs text-blue">Add file or drag<br/>& drop here</small> }

              <input
                type="file"
                required={ file && avatar }
                accept=".jpg,.jpeg,.png,.gif"
                className="hidden"
                onChange={onChangeImage}
              />
            </label>

            <div className="ml-5">
              <b className="leading-3 block">Profile Image</b>
              <small>Supports: JPG, JPEG, PNG, GIF</small>
            </div>
          </div>

          <div className="mx-3 flex flex-wrap">
            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Company Name</span>

              <input
                required
                className="border py-1 px-2"
                value={companyName}
                onChange={ e => setCompanyName(e.target.value) }
              />
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Description</span>

              <textarea
                required
                className="border py-1 px-2"
                value={description}
                onChange={ e => setDescription(e.target.value) }
              ></textarea>
            </label>

            <label className="w-6/12 px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Email Address</span>

              <input
                required
                type="email"
                className="border py-1 px-2"
                value={email}
                onChange={ e => setEmail(e.target.value) }
              />
            </label>

            <label className="w-6/12 px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Password</span>

              <input
                required
                type="password"
                className="border py-1 px-2"
                value={password}
                onChange={ e => setPassword(e.target.value) }
              />
            </label>

            <label className="w-6/12 px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Country</span>

              <select
                className="border p-2 text-xs text-gray-500"
                value={ country.string }
                onChange={ e => setCountry({
                  id: e.target[e.target.selectedIndex].getAttribute('name'),
                  string: e.target.value
                }) }
              >
                <option value="">Select country</option>
                { countryList.map(el => (
                  <option key={el.id} value={ el.name } name={ el.id }>{ el.name }</option>
                )) }
              </select>
            </label>

            <label className="w-6/12 px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">City</span>

              <select
                className="border p-2 text-xs text-gray-500"
                value={ city }
                onChange={ e => setCity(e.target.value) }
              >
                <option value="">Select city</option>
                { cityList?.map(el => (
                  <option key={ el.id } value={ el.name }>{ el.name }</option>
                )) }
              </select>
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Service Category</span>

              <select
                className="border p-2 text-xs text-gray-500"
                value={ categoryId || ''}
                onChange={ e => setCategoryId(e.target.value) }
              >
                <option value="">Select category</option>
                { listCategory.map(el => (
                  <option key={ el.id } value={ el.id }>{ el.name }</option>
                )) }
              </select>
            </label>
          </div>

          <button className="bg-orange w-full py-3 mt-4 text-white font-bold rounded-b-md">
            EDIT PARTNER
          </button>
        </form>
      </div>
    </Modal>
  );
}

function mapStateToProps(state) {
  return state.modalControl;
}

export default connect(mapStateToProps)(EditPartner);
