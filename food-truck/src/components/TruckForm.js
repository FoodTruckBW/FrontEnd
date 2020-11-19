  
import React from "react";

class TruckForm extends React.Component {
  state = {
    Name: "",
    imageURL:"",
    cuisineType: "",
  };

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();
    this.setState({ Name: "rafael" });
    this.addItem(e, this.state.Name);
  };

  render() {
    return (
      <form onSubmit={this.submit}>
          <ul>
              <li>
                <input
                type="text"
                name="name"
                value={this.state.Name}
                placeholder="Name"
                onChange={this.change}
                />
                </li>
                <li>
                <input
                type="text"
                name="cuisine-type"
                value={this.state.cuisineType}
                placeholder="Type of Cuisine"
                onChange={this.change}
                />
                </li>
        </ul>
        <button>Add Truck</button>
      </form>
    );
  }
}

export default TruckForm;
