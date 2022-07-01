// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { PrimaryButton } from "./CommonStyled";
// import { productsCreate } from "../../slices/productsSlice";

import React, { useState, useEffect } from 'react';
// import Menu from '../component/Menu';
import styled from "styled-components";
// import { PrimaryButton } from "./CommonStyled";

// import Footer from '../component/Footer';
// import SidebarAdmin from './SidebarAdmin';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listProducts } from '../action/productAction';

const CreateProductAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { createStatus } = useSelector((state) => state.products);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
   const [productImg, setProductImg] = useState("");
  //  const [avatar, setAvatar] = useState("")
  const [category, setCategory] = useState('');
  const [countStock, setCountStock] = useState('');

  const [categories, setCategories] = useState('');

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/api/product/create', { name, description, price, image: productImg, category, countStock })
      .then((res) => {
        if (res) {
          // console.log(response);
          toast.success('Product created successfully');
          dispatch(listProducts());
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });

    navigate('/admin/dashboard');
  }


    //load category from the backend
    useEffect(() => {
      axios
        .get('/api/category/all')
        .then((res) => {
          console.log(res.data.categories);
          setCategories(res.data.categories);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.message);
        });
    }, []);
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   dispatch(
  //     productsCreate({
  //       name,
  //       brand,
  //       price,
  //       desc,
  //       image: productImg,
  //     })
  //   );
  // };

  return (
    <StyledCreateProduct>
      <StyledForm onSubmit={handleSubmit}>
        <h3>Create a Product</h3>

        <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} required />

        <input type='text' placeholder='Short Description' onChange={(e) => setDescription(e.target.value)} required />

        <input type='number' placeholder='Price' onChange={(e) => setPrice(e.target.value)} required />

        <input type='number' placeholder='In Stock' onChange={(e) => setCountStock(e.target.value)} required />

        <input id='imgUpload' accept='image/*' type='file' onChange={handleProductImageUpload} required />

        <select onChange={(e) => setCategory(e.target.value)} className='form-control' select select-initialized>
          <option value=''>Choose Category</option>
          {
            categories &&
            categories.map((category) => ( 
              <option key={category._id} value={category._id}></option>
              ))}
        </select>

        <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-block mb-4">Create</button>
        {/* <PrimaryButton type='submit'>{createStatus === 'pending' ? 'Submitting' : 'Submit'}</PrimaryButton> */}
      </StyledForm>
      <ImagePreview>
        {productImg ? (
          <>
            <img src={productImg} alt='error!' />
          </>
        ) : (
          <p>Product image upload preview will appear here!</p>
        )}
      </ImagePreview>
    </StyledCreateProduct>
  );
};

export default CreateProductAdmin;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;
  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;
    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }
  select {
    color: rgb(95, 95, 95);
  }
`;

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);
  img {
    max-width: 100%;
  }
`;
