import React, { useState, useEffect } from 'react';
import { openNewPartner } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import Icon from 'icon';
import Modal from 'lib/elements/Modal';
import { create, read } from 'utils/api';

const categoryList = JSON.parse(localStorage.getItem('@viettonkin:categories'));
const countryList = JSON.parse(localStorage.getItem('@viettonkin:countries'));

const AddNewPartner = ({ dispatch }) => {
  const [preview, setPreview] = useState(null);
  const [companyName, setCompanyName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [country, setCountry] = useState({id: '', name: ''});
  const [city, setCity] = useState('');

  const [cityList, setCityList] = useState([]);

  const onChangeImage = e => {
    e.preventDefault();
    setPreview(e.target.files[0]);
  }

  const submit = e => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('file', preview);
    formData.append('company_name', companyName);
    formData.append('description', description);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('country', country.name);
    formData.append('city', city);
    formData.append('category_id', categoryId);

    create('admin/partners', formData)
    .then(() => window.location.reload());
  };

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
        <h3 className="font-medium text-xl">Add New Partner</h3>

        <button className="ml-auto block" onClick={ () => dispatch(openNewPartner(false)) }>
          <Icon name="close" color="#333" />
        </button>
      </div>

      <div className="flex flex-col">
        <form onSubmit={ submit }>
          <div className="mx-3 py-5 px-2 flex items-center">
            <label className="w-24 h-24 text-center flex flex-col cursor-pointer rounded-full justify-center border-2 border-dashed">
              { preview ? <img src={ URL.createObjectURL(preview) } /> : <Icon name="image" size={30} className="mx-auto" color="#6493b9" /> }

              { !preview && <small className="text-xxs text-blue">
                Add file or drag<br/>& drop here
              </small> }

              <input
                type="file"
                required
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
                onChange={ e => setCompanyName(e.target.value) }
              />
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Description</span>

              <textarea
                required
                className="border py-1 px-2"
                onChange={ e => setDescription(e.target.value) }
              ></textarea>
            </label>

            <label className="w-6/12 px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Email Address</span>

              <input
                required
                type="email"
                className="border py-1 px-2"
                onChange={ e => setEmail(e.target.value) }
              />
            </label>

            <label className="w-6/12 px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Password</span>

              <input
                required
                type="password"
                className="border py-1 px-2"
                onChange={ e => setPassword(e.target.value) }
              />
            </label>

            <label className="w-6/12 px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Country</span>

              <select
                className="border p-2 text-xs text-gray-500"
                onChange={ e => setCountry({
                  id: e.target.value,
                  name: e.target[e.target.selectedIndex].getAttribute('name')
                })
                }
              >
                <option value="">Select country</option>
                { countryList.map(el => (
                  <option key={el.id} value={ el.id } name={el.name}>{ el.name }</option>
                )) }
              </select>
            </label>

            <label className="w-6/12 px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">City</span>

              <select
                className="border p-2 text-xs text-gray-500"
                onChange={ e => setCity(e.target.value) }
              >
                <option value="">Select city</option>
                { cityList && cityList.map(el => (
                  <option key={ el.id } value={ el.name }>{ el.name }</option>
                )) }
              </select>
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Service Category</span>

              <select
                className="border p-2 text-xs text-gray-500"
                onChange={ e => setCategoryId(e.target.value) }
              >
                <option>Select country</option>
                { categoryList.map(el => (
                  <option key={ el.id } value={ el.id }>{ el.name }</option>
                )) }
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
