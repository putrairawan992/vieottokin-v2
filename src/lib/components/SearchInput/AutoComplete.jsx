import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'icon';

const AutoComplete = ({ suggestions, onChange, value }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState(value);

  const findPartner = e => {
    const userInput = e.target.value;

    const filteredSuggestions = suggestions.filter(
      find => find.companyName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(true);
    setUserInput(userInput);
  };

  const selectPartner = (event, id, country) => {
    onChange({id, country});

    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(event.target.innerText);
  };

  const SuggestionsList = () => {
    return (
      <ul className="absolute w-full bg-white z-10 pl-8 text-sm border-l border-r border-b py-2">
        { filteredSuggestions.map((el, i) => (
          <li key={ i } className="py-1">
            <button
              onClick={ e => selectPartner(e, el.id, el.country) }
              className="w-full text-left"
            >
              { el.companyName }
            </button>
          </li>
        )) }
      </ul>
    );
  }

  return (
    <Fragment>
      <div className="flex w-full border border-gray-300 items-center justify-between">
        <div className="bg-white h-10 w-10 flex justify-center items-center rounded-l-sm">
          <Icon name="search" size={ 12 } color="#333" />
        </div>

        <input
          type="search"
          onChange={findPartner}
          value={ value || userInput }
          className="h-10 w-full text-gray-500"
          placeholder="Search partners"
        />
      </div>

      { showSuggestions && userInput && <SuggestionsList /> }
      { showSuggestions && userInput && !filteredSuggestions.length && <small>No suggestions</small> }
    </Fragment>
  );
};

AutoComplete.defaultProps = {
  suggestions: [],
  value: ''
};

AutoComplete.propTypes = {
  suggestions: PropTypes.instanceOf(Array)
};

export default AutoComplete;
