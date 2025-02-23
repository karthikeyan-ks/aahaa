import React from "react";
import ImageGrid from "./ImageGrid";

interface ModalProps {
  header: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ header, content }) => {
  return (
    <div
      className="modal fade col-11"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered w-100 col-11">
        <div className="modal-content" style={{ backgroundColor: "#09747a" }}>
          <div className="modal-header" style={{ backgroundColor: "white", color: "black" }}>
            <h5 className="modal-title" id="exampleModalLabel" style={{ color: "black" }}>
              {header}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <section className="d-flex flex-column gap-3 w-100">
              <div className="col-12">
                <p style={{ padding: "5px", margin: "5px", color: "white" }}>
                  {content}
                </p>
              </div>
              <div className="d-flex w-auto flex-row justify-content-center align-item-center mt-4 mb-4">
                <ImageGrid />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
