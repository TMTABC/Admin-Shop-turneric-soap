import React, {useState} from 'react';
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
import { uploadImage, addProduct } from '../../api/api.jsx';

function AddProduct(props) {
    const [image,setImage]=useState(false);
    const [productDetails,setProductDetails]=useState({
        name:'',
        image:'',
        category:'',
        new_price:'',
        old_price:''
    })
    const imageHandler = (e)=>{
        setImage(e.target.files[0]);
    }
    const changeHandler=(e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const Add_Product = async ()=>{
        const responseData = await uploadImage(image);
        let product = productDetails;
        let formData = new FormData();
        formData.append('product',image);

        if(responseData.success){
            product.image=responseData.image_url
            const addProductResponse = await addProduct(product);
            if (addProductResponse.success){
                alert("Product added sucessfully")
            }else {
                alert('Product added failed')
            }
        }else {alert('Image uploaded failed')}
    }
    return (
        <div className={'add-product'}>
            <div className={'addproduct-itemfield'}>
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type here"/>
            </div>
            <div className={'addproduct-price'}>
                <div className={'addproduct-itemfield'}>
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type here"/>
                </div>
                <div className={'addproduct-itemfield'}>
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type here"/>
                </div>
            </div>
            <div className={'addproduct-itemfield'}>
                <p>Product Category</p>
                <select value={productDetails.category} defaultValue={'xaphong'} onChange={changeHandler} name="category" className={'add-product-selector'} id="">
                    <option value="xaphong">Xà phòng</option>
                    <option value="suatam">Sữa tắm</option>
                    <option value="dauduong">Dầu dưỡng</option>
                </select>
            </div>
            <div className={'addproduct-itemfield'}>
                <label htmlFor={'file-input'}>
                    <img src={image?URL.createObjectURL(image): upload_area} className={'addproduct-thumnail-img'} alt=""/>
                </label>
                <input onChange={imageHandler} type="file" name={'image'} id={'file-input'} hidden/>
            </div>
            <button onClick={()=>{Add_Product()}}  className={'addproduct-btn'}>Thêm</button>

        </div>

    );
}

export default AddProduct;