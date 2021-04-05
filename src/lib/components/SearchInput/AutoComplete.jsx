import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'icon';

const AutoComplete = ({ suggestions, onChange, value, disabled }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState(value);
  const [found, setFound] = useState(false);

  const findPartner = e => {
    const userInput = e.target.value;

    if (userInput.length > 1) {
      const filteredSuggestions = suggestions.filter(
        find => find.companyName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );

      if (!!filteredSuggestions?.length) {
        setFilteredSuggestions(filteredSuggestions);
        setShowSuggestions(true);
        setFound(false);
      } else {
        setFound(true);
      }
    }

    setUserInput(userInput);
  };

  const selectPartner = (event, id, country, categoryId) => {
    onChange({id, country, categoryId});

    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(event.target.innerText);
    setFound(false);
  };

  const SuggestionsList = () => (
    <ul className="absolute w-full bg-white z-10 pl-8 text-sm border-l border-r border-b py-2">
      { filteredSuggestions.map((el, i) => {
        const parts = el.companyName.split(new RegExp(`(${userInput})`, 'gi'));

        return (
        <li key={ i } className="py-1">
          <button
            onClick={ e => selectPartner(e, el.id, el.country, el.categoryId) }
            className="w-full text-left"
          >
            { parts.map(part => part.toLowerCase() === userInput.toLowerCase() ? <span className="bg-yellow-300">{ part }</span> : part) }
          </button>
        </li>
      )}) }
    </ul>
  );

  return (
    <Fragment>
      <label className="flex w-full border border-gray-300 items-center justify-between">
        <div className="bg-white h-10 w-10 flex justify-center items-center rounded-l-sm">
          <Icon name="search" size={ 12 } color="text-grey-icon" />
        </div>

        <input
          type="search"
          onChange={ findPartner }
          value={ userInput }
          disabled={ disabled }
          className="h-10 w-full text-gray-500 pl-2"
          placeholder="Search partners"
        />
      </label>

      { showSuggestions && <SuggestionsList /> }
      { found && <small>No suggestions</small> }
    </Fragment>
  );
};

AutoComplete.defaultProps = {
  suggestions: [],
  value: '',
  disabled: false
};

AutoComplete.propTypes = {
  suggestions: PropTypes.instanceOf(Array),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default AutoComplete;
