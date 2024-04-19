import React from "react";

const ListNote = () => {
  return (
    <div className="my-4">
      <h5>My Saved Notes</h5>
      <div className="d-flex">
        <button className="btn fw-bold">
          <i className="fa-solid fa-arrow-down-a-z"></i> Sort by Title
        </button>
        <button className="btn fw-bold">
          <i className="fa-solid fa-list-ol"></i> Sort by Update
        </button>
      </div>
      <div className="row">
        <div className="col-3">
          <div>
            <button className="btn">
              <i className="fa-regular fa-folder"></i> All Notes
            </button>
          </div>

          <div>
            <button className="btn">
              <i className="fa-regular fa-folder"></i> Inbox
            </button>
          </div>
          <div>
            <button className="btn">
              <i className="fa-regular fa-folder"></i> Manage Folders
            </button>
          </div>
        </div>
        <div className="col">
          <span>Item1</span>
        </div>
      </div>
    </div>
  );
};

export default ListNote;
