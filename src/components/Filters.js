import React from "react";

class Filters extends React.Component {
  render() {
    console.log(this.props.onChangeType);
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select
            onChange={e => this.props.updateFilters(e.target.value)}
            name="type"
            id="type"
          >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button
            onClick={() => this.props.fetchPets()}
            className="ui secondary button"
          >
            Find pets
          </button>
        </div>
      </div>
    );
  }
}

export default Filters;
