import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditProduct = (props) => {
    const { id } = useParams();

    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription] = useState("");

    const navigate = useNavigate();

    const [ header, setHeader] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
            setHeader(res.data.title);
        })
        .catch((err) => console.log("Error in editing Product (FE)", err));
    }, [id])

    const editHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${id}`, 
        {
            title,
            price,
            description,
        })
        .then((res) => {
            console.log(res.data)
            navigate("/");
        })
        .catch((err) => console.log(err));
    };



    return (
        <div>
            <h1>Edit {header}</h1>
            <form onSubmit = {editHandler}>
                <label>Title</label>
                <input type = "text" name = "title" value = {title}
                onChange = {(e) => setTitle(e.target.value)}/>
                    <br/>
                <label>Price</label>
                <input type = "number" name = "price" value = {price}
                onChange = {(e) => setPrice(e.target.value)}/>
                    <br/>
                <label>Description</label>
                <input type = "text" name = "description" value = {description}
                onChange = {(e) => setDescription(e.target.value)}/>
                    <br/>
                <button type = "submit">Update</button>
            </form>
        </div>
    )
}

export default EditProduct;
