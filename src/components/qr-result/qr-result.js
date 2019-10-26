import React from "react";

export class QrResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const student_id = this.props.qrOutput.student_id;
    return (
      <div className="columns is-vcentered is-multiline has-text-centered is-mobile is-centered">
        {student_id ? (
          <div className="column is-full">
            <figure className="image is-1by1">
              <img src={this.props.qrOutput.qrcode} alt="" />
            </figure>
          </div>
        ) : (
          <div className="column is-two-thirds">
            <p className="is-size-5 has-text-danger">
              {this.props.qrOutput.message}
            </p>
          </div>
        )}
        {student_id ? (
          <div className="column is-one-third-desktop is-full-mobile">
            <label className="label">Student ID:</label>
            <p className="has-text-info is-size-5">
              {this.props.qrOutput.student_id}
            </p>
          </div>
        ) : (
          undefined
        )}
        {student_id ? (
          <div className="column is-one-third-desktop is-full-mobile">
            <label className="label">Student Name:</label>
            <p className="has-text-info is-size-5">
              {this.props.qrOutput.student_name}
            </p>
          </div>
        ) : (
          undefined
        )}
        {student_id ? (
          <div className="column is-one-third-desktop is-full-mobile">
            <label className="label">College Name:</label>
            <p className="has-text-info is-size-5">
              {this.props.qrOutput.college_name}
            </p>
          </div>
        ) : (
          undefined
        )}
      </div>
    );
  }
}
