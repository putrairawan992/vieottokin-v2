import React, { useState, useEffect } from 'react';
import { openNewPartner } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import Icon from 'icon';
import Modal from 'lib/elements/Modal';
import { create, read } from 'utils/api';

const AddNewPartner = ({ dispatch }) => {
  const [preview, setPreview] = useState(null);
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [listCategory, setListCategory] = useState([]);

  const onChangeImage = e => {
    e.preventDefault();
    setPreview(e.target.files[0]);
  }

  const submit = e => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('file', preview);
    formData.append('company_name', companyName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('country', 'Vietnam');
    formData.append('city', 'Hanoi');
    formData.append('category_id', categoryId);

    create('admin/partners', formData)
    .then(res => console.log(res))
  };

  useEffect(() => {
    const fetchData = async () => {
      setListCategory([]);
      const resCategory = await read('categories');
      resCategory.data.map(({ SubCategory }) => setListCategory(state => [...state, ...SubCategory]));
    };

    fetchData();
  }, []);

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
              <span className="mr-5 mb-2 text-sm font-bold">Email Address</span>

              <input
                required
                type="email"
                className="border py-1 px-2"
                onChange={ e => setEmail(e.target.value) }
              />
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Password</span>

              <input
                required
                type="password"
                className="border py-1 px-2"
                onChange={ e => setPassword(e.target.value) }
              />
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Country</span>

              <select className="border p-2 text-xs text-gray-500">
                <option>Select country</option>
              </select>
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">City</span>

              <input
                required
                className="border py-1 px-2"
              />
            </label>

            <label className="w-full px-2 flex flex-col mb-5">
              <span className="mr-5 mb-2 text-sm font-bold">Service Category</span>

              <select
                className="border p-2 text-xs text-gray-500"
                onChange={ e => setCategoryId(e.target.value) }
              >
                <option>Select country</option>
                { listCategory.map(el => (
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
