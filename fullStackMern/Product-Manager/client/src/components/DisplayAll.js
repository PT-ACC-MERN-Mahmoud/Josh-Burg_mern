import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const DisplayAll = (props) => {    
    const { productList, setProductList} = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then((res) =>{
            console.log(res.data);
            const newProducts = productList.filter(( product, index ) => product._id !== productId )
            setProductList(newProducts);
        })
        .catch((err) => console.log("Error of newProduct", err));
    };

    return (
        <div>
            <header>
                All Products:
            </header>
            {
                productList.map((product, index) => (
                    <div key={index}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                        <button onClick = {() => navigate(`/product/edit/${product._id}`)}>Edit</button>
                        <button onClick = {() => deleteProduct(product._id)}>Delete </button>
                    </div>
                ))
            }
        </div>
    );
};

export default DisplayAll;