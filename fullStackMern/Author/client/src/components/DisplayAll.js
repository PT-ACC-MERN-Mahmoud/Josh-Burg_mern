import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const DisplayAll = (props) => {    
    const { authorList, setAuthorList} = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
        .then((res) =>{
            console.log(res.data);
            const newAuthor = authorList.filter(( author, index ) => author._id !== authorId )
            setAuthorList(newAuthor);
        })
        .catch((err) => console.log("Error of newAuthor", err));
    };

    return (
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Link to="/new">Add an author</Link>
                <p className="purple-text">We have quotes by:</p>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Author</th>
                    <th scope="col">Actions Available</th>
                  </tr>
                </thead>
                <tbody>
                  {authorList.map((author, index) => {
                    return (
                      <tr key={author._id}>
                        <td>{author.name}</td>
                        <td>
                          <Link to={`/edit/${author._id}`}>
                            <button className="btn btn-primary">Edit</button>
                          </Link>
    
                          <button
                            onClick={() => deleteAuthor(author._id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    };
    
    export default DisplayAll;