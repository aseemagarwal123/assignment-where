import React from "react";
import { QrResult } from "../qr-result/qr-result";

export class FormFields extends React.Component {
  constructor() {
    super();
    this.state = {
      generatedQR: null,
      collegeName: "",
      studentName: ""
    };
    this.onGenerateQR = this.onGenerateQR.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onGenerateQR(event) {
    event.preventDefault();
    return fetch(`http://34.238.235.212:3000/v1/api/students/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        student_name: this.state.studentName,
        college_name: this.state.collegeName
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({ generatedQR: responseJson });
      });
  }
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    const headStyle = {
      marginTop: "3%"
    };
    const generatedQR =
      this.state.generatedQR && this.state.generatedQR["student"];
    return (
      <div className="container">
        <div className="columns is-mobile">
          <div className="column">
            <h1
              style={headStyle}
              className="is-size-1 has-text-dark has-text-weight-bold has-text-centered"
            >
              Where the Food!
            </h1>
          </div>
        </div>

        <div className="columns is-mobile is-multiline is-vcentered is-centered">
          <div className="column is-two-thirds">
            <label className="label">Student Name</label>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="studentName"
                  placeholder="Enter Student's Name"
                  value={this.state.studentName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="column is-two-thirds">
            <label className="label">College Name</label>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="collegeName"
                  placeholder="Enter College's Name"
                  value={this.state.collegeName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="column is-two-thirds">
            <a onClick={this.onGenerateQR} className="button is-primary">
              Generate QR
            </a>
          </div>
          <div className="column is-full">
            {generatedQR ? <QrResult qrOutput={generatedQR} /> : undefined}
          </div>
        </div>
      </div>
    );
  }
}
