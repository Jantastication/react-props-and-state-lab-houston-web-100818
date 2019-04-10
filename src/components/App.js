import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }
  updateFilters = newFilters => {
    this.setState({ filters: { type: newFilters } });
    // Does the same as below
    //   this.state.filters = newFilters
    //   return state
    // })
  };

  fetchPets = () => {
    let type = this.state.filters.type;
    let url = "/api/pets";
    if (type !== "all") {
      url += `?type=${type}`;
    }
    console.log(url);
    fetch(url)
      .then(resp => resp.json())
      .then(pets => {
        this.setState({ pets: pets });
      });
  };

  adoptPet = petID => {
    this.setState(state => {
      let pet = this.state.pets.find(pet => pet.id === petID);
      pet.isAdopted = true;
      return state;
    });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                updateFilters={this.updateFilters}
                fetchPets={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
