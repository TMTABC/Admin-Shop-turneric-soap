import React, {useEffect, useState} from 'react';
import './ListProduct.css'
import data from "../../assets/data.js";
import cross_icon from '../../assets/cross_icon.png'
import {fetchInfo,remove_product} from "../../api/api.jsx";

function ListProduct(props) {
    const [allproducts,setAllProducts] = useState([])
    const loadProduct = async ()=>{
        await fetchInfo().then((data)=>setAllProducts(data))
    }
    useEffect(() => {
        loadProduct();
    }, []);
    const handlerRemoveProduct= async (id)=>{
        await remove_product(id);
        await loadProduct();
    }
    return (
        <div className={'list-product'}>
            <h1>All product</h1>
            <div className={'listproduct-format-main'}>
                <p>Product</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className={'listproduct-allproducts'}>
                <hr/>
                {allproducts.map((product,index)=>{
                    return <>
                        <div key={index} className='listproduct-format-main listproduct-format'>
                            <img className={'listproduct-product-icon'} src={product.image} alt={product.name}/>
                            <p>{product.name}</p>
                            <p>{product.old_price}</p>
                            <p>{product.new_price}</p>
                            <p>{product.category}</p>
                            <img onClick={()=>handlerRemoveProduct(product.id)} className={'listproduct-remove-icon'} src={cross_icon} alt=""/>
                        </div>
                        <hr/>
                    </>
                })}
            </div>
        </div>
    );
}

export default ListProduct;