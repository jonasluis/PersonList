import React from "react";

export default function AddUser() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center mb-4">Add User</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type={"text"}
              className="form-control"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input
              type={"text"}
              className="form-control"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type={"text"}
              className="form-control"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <button type="submit" className="btn btn-outline-danger">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
