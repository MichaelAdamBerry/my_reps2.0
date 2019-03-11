import Router from "next/router";
import React from "react";
import { PKEY, GKEY } from "../keys";
import PropTypes from "prop-types";
import Head from "next/head";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const G_KEY = GKEY();

const AutoSearch = props => (
  <PlacesAutocomplete
    value={props.address}
    onChange={props.handleChange}
    onSelect={props.handleSelect}
    searchOptions={{ country: "us", types: ["address"] }}>
    {({ getInputProps, suggestions, getSuggestionItemProps }) => (
      <div>
        <input
          {...getInputProps({
            placeholder: "e.g., 710 Ashbury St, San Francisco, CA 94117",
            label: "Enter your address to find your reps",
            className: "location-search-input"
          })}
        />
        <div>
          <button type="submit">find my reps</button>
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
);

AutoSearch.propTypes = {
  address: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

class Search extends React.Component {
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
    return (
      <div>
        <p>Enter your address to find your reps</p>
        <form onSubmit={this.repLookup}>
          <AutoSearch
            handleChange={this.inputChange}
            handleSelect={this.repLookup}
            address={searchText}
          />
        </form>
      </div>
    );
  }
}
export default () => (
  <>
    <Search />
    <script
      type="text/javascript"
      src={`https://maps.googleapis.com/maps/api/js?key=${G_KEY}&libraries=places`}
    />
  </>
);
