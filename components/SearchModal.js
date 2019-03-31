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
import { Spring, config } from "react-spring";

library.add(faTimesCircle);

const G_KEY = GKEY();

const AutoSearch = props => (
  <>
    <PlacesAutocomplete
      value={props.address}
      onChange={props.handleChange}
      onSelect={props.handleSelect}
      onSubmit={props.handleSelect}
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
            <button className="bold" type="submit" onClick={props.handleSelect}>
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
      .autoComplete input,
      .autocomplete-dropdown-container {
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
        background-color: var(--site-white);
        color: black;
        cursor: pointer;
      }
      .autocomplete-dropdown-container {
        color: #2f2f2f;
        position: relative;
        max-height: 200px;
        overflow: hidden;
      }
      @media (min-width: 320px) and (max-width: 600px) {
        .autoComplete input,
        .autocomplete-dropdown-container {
          min-width: 300px;
          max-width: 300px;
          font-size: 1em;
        }
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
    searchText: "",
    fromError: this.props.fromError
  };

  static defaultProps = {
    fromError: false
  };

  repLookup = event => {
    event.preventDefault();
    console.log(`search submitted with ${this.state.searchText}`);
    Router.push(`/find?address=${this.state.searchText}`);
  };
  inputChange = address => {
    this.setState({ searchText: address });
  };

  render() {
    const renderError = () => {
      return (
        <>
          {this.state.fromError ? (
            <p>
              That address does not seem to exist. Make sure it is formatted
              correctly and try again
            </p>
          ) : (
            ""
          )}
        </>
      );
    };
    console.log(PKEY());
    const { searchText } = this.state;
    const { modalClose } = this.props;
    return (
      <Spring
        from={{ opacity: 0, top: -400 }}
        to={{ opacity: 1, top: 0 }}
        config={config.gentle}>
        {({ opacity, top }) => (
          <>
            <div>
              <div className="modal">
                <div className="closeBtn" onClick={modalClose}>
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    style={{
                      height: "40px",
                      width: "40px",
                      cursor: "pointer",
                      float: "right"
                    }}
                  />
                </div>
                <div className="form-container">
                  <h3 className="lead bold">
                    Enter your address to find your reps
                  </h3>
                  <form onSubmit={this.repLookup}>
                    <AutoSearch
                      handleChange={this.inputChange}
                      handleSubmit={e => this.repLookup(e)}
                      address={searchText}
                    />
                  </form>
                  <span>{renderError()}</span>
                </div>
              </div>
            </div>
            <style jsx>{`
              .closeBtn svg {
                display: block;
                position: fixed;
                top: 20px;
                right: 20px;
                color: white;
                z-index: 100;
              }

              .modal:before {
                content: "";
                display: none;
                filter: opacity(0.8);
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 10;
              }

              .modal {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: ${opacity};
                margin: 0 2em;
                padding: 1em;
                background-color: var(--main-blue);
                color: var(--site-white);
                z-index: 500;
              }
              .form-container {
                min-height: 60vh;
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
                grid-row: 1/3;
                grid-column: 1/5;
              }
              .form-container form {
                grid-row: 3 / 5;
                grid-column: 1 / 5;
              }

              @media (min-width: 300px) and (max-width: 600px) {
                .modal {
                  margin: 0;
                  top: 40%;
                }

                .form-container h3 {
                  line-height: 1em;
                }

                .form-container {
                  width: 80vw;
                  display: block;
                }

                .closeBtn svg {
                  display: block;
                  position: fixed;
                  top: 20px;
                  left: 20px;
                  color: white;
                  z-index: 60;
                }
              }
            `}</style>
          </>
        )}
      </Spring>
    );
  }
}
