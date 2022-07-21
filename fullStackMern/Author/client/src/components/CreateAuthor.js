import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const CreateAuthor = (props) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});


  const submitHandler = (e)=>{
    e.preventDefault();

    axios.post("http://localhost:8000/api/authors", {
      name,
    })
    .then((res)=>{
      console.log(res);
      setName("");
      navigate("/");
    })
    .catch( (err) => { console.log(err.response.data.err.errors);
      setErrors(err.response.data.err.errors);
  });
  }

return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Link to="/">Home</Link>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              {errors.name ? <p>{errors.name.message}</p> : null}
            </div>
            <button className="btn btn-primary" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAuthor;