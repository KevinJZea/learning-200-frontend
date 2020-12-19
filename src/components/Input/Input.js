import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Input.scss";

export class Input extends Component {
  state = {
    data: {
      username: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        username: e.target.value,
      },
    });
  };

  sendUser = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("user", this.state.data.username);
    urlencoded.append("field", "DS");
    urlencoded.append("subfield", "IA/ML");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };

    fetch("https://learning-200.herokuapp.com/main", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <React.Fragment>
        <div className="Input-Main-Container">
          <div className="Input__Container">
            <h3>Ingresa tu username de Platzi</h3>

            <span>https://platzi.com/p/{this.state.data.username}</span>
            <input
              placeholder="Ingresa tu username de Platzi"
              type="text"
              name="username"
              id="username"
              onChange={this.handleChange}
            />

            <Link to="/exam">
              <button type="button" onClick={this.sendUser}>
                Comenzar
              </button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Input;
