import React, { Fragment } from 'react';

const FilterSidebar = () => {
  return (
    <Fragment>
      <h2 className="text-sm font-bold">Country</h2>

      <label className="w-full flex flex-col mb-5 mt-2">
        <select className="border p-2 rounded text-xs text-gray-500">
          <option>Select country</option>
        </select>
      </label>

      <h2 className="text-sm font-bold">City</h2>

      <label className="w-full flex flex-col mb-5 mt-2">
        <select className="border p-2 rounded text-xs text-gray-500">
          <option>Select city</option>
        </select>
      </label>

      <h2 className="text-sm font-bold">Services</h2>

      <div className="ml-0 sm:ml-3">
        <div className="mt-5">
          <h3 className="text-sm">Legal</h3>

          <label className="w-full flex mt-2">
            <input
              type="checkbox"
              className="border rounded form-checkbox text-orange"
            />

            <p className="pl-3">Incorporation</p>
          </label>

          <label className="w-full flex">
            <input type="checkbox" className="border rounded form-checkbox text-orange" />
            <p className="pl-3">Litigation</p>
          </label>

          <label className="w-full flex">
            <input type="checkbox" className="border rounded form-checkbox text-orange" />
            <p className="pl-3">Intellectual Property</p>
          </label>
        </div>

        <div className="mt-5">
          <h3 className="text-sm">Audit</h3>

          <label className="w-full flex mt-2">
            <input type="checkbox" className="border rounded form-checkbox text-orange" />
            <p className="pl-3">Risk Advisory</p>
          </label>

          <label className="w-full flex">
            <input type="checkbox" className="border rounded form-checkbox text-orange" />
            <p className="pl-3">Valuation</p>
          </label>
        </div>

        <div className="mt-5">
          <h3 className="text-sm">Human Resource</h3>

          <label className="w-full flex mt-2">
            <input type="checkbox" className="border rounded form-checkbox text-orange" />
            <p className="pl-3">Recruitment</p>
          </label>

          <label className="w-full flex">
            <input type="checkbox" className="border rounded form-checkbox text-orange" />
            <p className="pl-3">Payroll</p>
          </label>
        </div>
      </div>

      <button className="w-full bg-orange text-white py-2 rounded mt-8">
        Apply Filters
      </button>
    </Fragment>
  );
}

export default FilterSidebar;
