import React, { Component } from "react";
import "../../App.css";

export class SingerCard extends Component {
  // showTracks = () => {
  //   return (
  //     <div
  //       className="modal fade"
  //       id="tracksModal"
  //       tabindex="-1"
  //       role="dialog"
  //       aria-labelledby="tracksModalLabel"
  //       aria-hidden="true"
  //     >
  //       <div className="doal-dialog" role="document">
  //         <div className="modal-content">
  //           <div className="modal-header">
  //             <h5 className="modal-title" id="tracksModalLabel">
  //               {this.props.name}'s tracks
  //             </h5>
  //             <button
  //               type="button"
  //               class="close"
  //               data-dismiss="modal"
  //               aria-label="Close"
  //             >
  //               <span aria-hidden="true">&times;</span>
  //             </button>
  //           </div>
  //           <div className="modal-body">hello</div>
  //           <div class="modal-footer">
  //             <button
  //               type="button"
  //               class="btn btn-secondary"
  //               data-dismiss="modal"
  //             >
  //               Close
  //             </button>
  //             <button type="button" class="btn btn-primary">
  //               Save changes
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  render() {
    return (
      <button
        type="button"
        data-toggle="modal"
        data-target="#tracksModal"
        onClick={() => this.showTracks()}
        style={{ padding: "1px" }}
      >
        <div className="card" style={{ width: "8rem" }}>
          <img
            class="card-img-top"
            src={this.props.image[0].url}
            alt="Card image"
          />
          <div
            className="card-body"
            style={{ height: "4rem", fontSize: "14px" }}
          >
            <p className="card-text">{this.props.name}</p>
          </div>
        </div>
      </button>
    );
  }
}

export default SingerCard;
