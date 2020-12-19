import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Input.scss";

export class Input extends Component {
  state = {
    data: {
      username: "",
    },
    loadingNewPage: false,
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
    this.setState({
      loadingNewPage: true,
    });
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

      .then((result) => {
        this.setState({
          loadingNewPage: false,
        });
        this.props.history.push("/lp");
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loadingNewPage ? (
          <h1>Loading</h1>
        ) : (
          <div className="Input-Main-Container">
            <div className="Input__Container">
              <h3>Ingresa tu username de Platzi</h3>

              <span>platzi.com/@{this.state.data.username}</span>
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
        )}
      </React.Fragment>
    );
  }
}

export default Input;
