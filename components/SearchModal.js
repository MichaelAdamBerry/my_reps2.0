import Router from "next/router";
import React from "react";
import { PKEY, GKEY } from "../keys";
import PropTypes from "prop-types";
import Head from "next/head";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faTimesCircle);

const G_KEY = GKEY();

const AutoSearch = props => (
  <>
    <PlacesAutocomplete
      value={props.address}
      onChange={props.handleChange}
      onSelect={props.handleSelect}
      searchOptions={{ country: "us", types: ["address"] }}>
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <div className="autoComplete">
          <input
            {...getInputProps({
              placeholder: "e.g., 710 Ashbury St, San Francisco, CA 94117",
              label: "Enter your address to find your reps",
              className: "location-search-input"
            })}
          />
          <div className="btn-container">
            <button className="bold" type="submit">
              find my reps
            </button>
          </div>
          <div className="autocomplete-dropdown-container">
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              const style = suggestion.active
                ? {
                    backgroundColor: "#fafafa",
                    cursor: "pointer"
                  }
                : {
                    backgroundColor: "#ffffff",
                    cursor: "pointer"
                  };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style
                  })}>
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
    <style jsx>{`


      .autoComplete input, .autocomplete-dropdown-container {
        min-width: 500px;
        max-width: 500px;
        font-size: 1.5em;
        opacity: 0.9;
        background-color: #2f2f2f;
        color: white;
      }
      .autoComplete input {
          border: none; 
          border-bottom: solid white;
          height: 2em;
      }
      .btn-container {
          margin-top: 2em;
          margin-bottom: 2em;
          display: flex;
          justify-content: center;
      }
      .btn-container button {
      
        font-size: large;
        height: 45px;
        width: 150px;
        background-color: #ffffff
        color: black;
        cursor: pointer;
      }
      .autocomplete-dropdown-container {
          color: #2f2f2f;
          max-height: 200px; 
          overflow: hidden;
      }
      @media (min-width: 320px) and (max-width: 600px) {
        .autoComplete input, .autocomplete-dropdown-container {
            min-width: 300px;
            max-width: 300px;
            font-size: 1em;
    }
    `}</style>
  </>
);

AutoSearch.propTypes = {
  address: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

export default class Search extends React.Component {
  state = {
    searchText: ""
  };
  repLookup = event => {
    //event.preventDefault();
    console.log(`search submitted with ${this.state.searchText}`);
    Router.push(`/find?address=${this.state.searchText}`);
  };
  inputChange = address => {
    this.setState({ searchText: address });
  };
  render() {
    console.log(PKEY());
    const { searchText } = this.state;
    const { modalClose } = this.props;
    return (
      <div className="modal">
        <div className="form-container">
          <div className="closeBtn" onClick={modalClose}>
            <FontAwesomeIcon
              icon={faTimesCircle}
              style={{ height: "40px", width: "40px", cursor: "pointer" }}
            />
          </div>
          <h3 className="lead bold">Enter your address to find your reps</h3>

          <form onSubmit={this.repLookup}>
            <AutoSearch
              handleChange={this.inputChange}
              handleSelect={this.repLookup}
              address={searchText}
            />
          </form>
        </div>
        <style jsx>{`
          .closeBtn {
            cursor: pointer;
            position: fixed;
            font-size: larger;
            top: 20px;
            right: 20px;
          }

          .modal {
            position: absolute;
            top: 0;
            bottom: 0;
            left: calc((100vw - 600px) / 2);
            min-height: 89vh;
            max-width: 600px;
            min-width: 600px;
            background-color: var(--main-blue);
            color: var(--site-white);
            z-index: 500;
          }
          .form-container {
            min-height: 90vh;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            grid-row-gap: 2em;
            justify-items: center;
          }
          .form-container h3 {
            font-size: 1.5em;
            text-align: center;
            grid-row: 2/3;
            grid-column: 1/5;
          }
          .form-container form {
            grid-row: 3 / 5;
            grid-column: 1 / 5;
          }

          @media (min-width: 300px) and (max-width: 600px) {
            .modal {
              min-height: 500px;
              min-width: 100vw;
              max-width: 100vw;
              left: 0;
            }
            .form-container {
              width: 80vw;
              margin: auto;
            }

            .closeBtn svg {
              display: block;
              position: fixed;
              top: 20px;
              right: 20px;
              color: white;
              z-index: 1;
            }
          }
        `}</style>
      </div>
    );
  }
}
