import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import {FaSearch} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/actions/productActions";
const CreateProduct = () => {
  const [value, setValue] = useState([]);

  const dispatch = useDispatch();
  const addItem = useSelector((state) => state.createProduct);
  const userInfo = useSelector((state) => state.userLogin?.userInfo);
  // console.log(userInfo.user);
  const { loading, error, success } = addItem;
  console.log(success);
  console.log(error);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(value));
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo?.user?.role === "vendor") {
      navigate("/");
    }
  }, [navigate, userInfo]);
  useEffect(() => {
    if (success) {
      alert("Item added successfully");
      setValue([]);
    }
  }, [success]);

  // console.log(value);
  const handleChange = (e) => {
    setValue((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <Wrapper>
      <Left>
        <Title>Add a new product</Title>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label htmlFor="name">Product Name</Label>
            <Input name="name" onChange={handleChange} placeholder="Name" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="price">Product Price</Label>
            <Input name="price" onChange={handleChange} placeholder="Price" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="image">Product Image</Label>
            <Input
              name="image"
              onChange={handleChange}
              placeholder="Image URL"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="">Product Category</Label>
            <Input
              name="category"
              onChange={handleChange}
              placeholder="Category (lowercase)"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="miniDescription">Product minidescription</Label>
            <Input
              name="miniDescription"
              onChange={handleChange}
              placeholder="Minidescription"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="description">Product Description</Label>
            <TextArea
              onChange={handleChange}
              name="description"
              placeholder="Description"
              rows={5}
            />
          </InputWrapper>
          <Button type="submit">{loading ? "Loading....." : "Add Item"}</Button>
        </Form>
      </Left>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 500px;
  padding-top: 80px;
  margin: 0 auto;
  width: 90vw;
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  position: sticky;
  overflow-y: hidden;
  min-height: 100vh;

  margin-right: 40px;
`;

const Form = styled.form``;
const Input = styled.input`
  outline: none;
  padding: 4px 6px;
  border-radius: 4px;
  border: 1px solid cadetblue;
`;
const Label = styled.label`
  padding-bottom: 8px;
`;
const TextArea = styled.textarea`
  margin-bottom: 8px;
  padding: 5px;
  border: 1px solid cadetblue;
  border-radius: 4px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  font-size: 19px;
  color: #082032;
`;
const Button = styled.button`
  padding: 8px 14px;
  margin-top: 9px;
  font-size: 15px;
  border: 1px solid chartreuse;
  border-radius: 4px;
  cursor: pointer;
  background: lightcyan;
  transition: all 0.7s linear;
  &:hover {
    background: cyan;
  }
`;

export default CreateProduct;
