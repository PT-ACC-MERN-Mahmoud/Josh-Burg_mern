import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditAuthor = (props) => {
    const { id } = useParams();
    const [ name, setName ] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [authorNotFoundError, setAuthorNotFoundError] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            setName(res.data.name);
        })
        .catch((err) => {
            console.log(err.response);
            setAuthorNotFoundError(`Author not found using that ID`);
        });
    }, [id])

    const editHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/${id}`, 
        {
            name,
        })
        .then((res) => {
            console.log(res.data)
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };


return (
    <form onSubmit={editHandler}>
        {authorNotFoundError ? (
            <h2>
              {authorNotFoundError} <Link to="/new">Click here to add author</Link>
            </h2>
          ) : null}
        <Link to="/">Home</Link>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name ? <p>{errors.name.message}</p> : null}
          </div>
        <button type="submit" className="btn btn-primary">
            SUBMIT
        </button>
        </form>
      );
    };

export default EditAuthor;
