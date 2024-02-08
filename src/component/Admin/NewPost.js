import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clearErrors, createPost } from '../action/postAction';
import { NEW_POST_RESET } from '../constant/postConstant';
import MetaData from '../Layout/MetaData';
import Sidebar from './Sidebar';
import { AccountTree, AttachMoney, Description, Spellcheck, } from '@mui/icons-material';
import { Button } from '@mui/material';
import "./NewProduct.css";

const NewPost = () => {

    const dispatch = useDispatch();

    const { error, loading, success } = useSelector((state) => state.newPost);
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [metaDescription, setMetaDescription] = useState("")
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    console.log(success);
    // set category 
    const categories = [
        "Laptop",
        "Footwear",
        "Bottom",
        "Tops",
        "Attire",
        "Camera",
        "SmartPhones",
    ];

    useEffect(() => {
        if (error) {
            toast.error(error)
            console.log(error)
            dispatch(clearErrors());

        }
        if (success) {
            toast.success("Product create successfully")
            navigate("/admin/dashboard")
            dispatch({ type: NEW_POST_RESET })
        }
    }, [dispatch, error, success, navigate])

    const createProductSubmitHandler = (e) => {
        e.preventDefault()
        const myForm = new FormData()
        myForm.set("name", title);
        myForm.set("price", price);
        myForm.set("description", description);
        myForm.set("category", category);
        myForm.append("metaDescription", metaDescription)
        images.forEach((image) => {
            myForm.append("images", image);
        });
        dispatch(createPost(myForm));


    }

    const createProductImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                    setImages((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });
    }

    return (
        <Fragment>
            <MetaData title="Create Post" />
            <div className="dashboard">
                <Sidebar />
                <div className="newProductContainer">
                    <form
                        className="createProductForm"
                        encType="multipart/form-data"
                        onSubmit={createProductSubmitHandler}
                    >
                        <h1>Create post</h1>

                        <div>
                            <Spellcheck />
                            <input
                                type="text"
                                placeholder="Post Name"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <AttachMoney />
                            <input
                                type="number"
                                placeholder="Price"
                                required
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        <div>
                            <Description />

                            <textarea
                                placeholder="Post Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                cols="30"
                                rows="1"
                            ></textarea>
                        </div>
                        <div>
                            <Description />

                            <textarea
                                placeholder="Post Description"
                                value={metaDescription}
                                onChange={(e) => setMetaDescription(e.target.value)}
                                cols="30"
                                rows="1"
                            ></textarea>
                        </div>

                        <div>
                            <AccountTree />
                            <select onChange={(e) => setCategory(e.target.value)}>
                                <option value="">Choose Category</option>
                                {categories.map((cate) => (
                                    <option key={cate} value={cate}>
                                        {cate}
                                    </option>
                                ))}
                            </select>
                        </div>



                        <div id="createProductFormFile">
                            <input
                                type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={createProductImagesChange}
                                multiple
                            />
                        </div>

                        <div id="createProductFormImage">
                            {imagesPreview.map((image, index) => (
                                <img key={index} src={image} alt="Product Preview" />
                            ))}
                        </div>

                        <Button
                            id="createProductBtn"
                            type="submit"
                            disabled={loading ? true : false}
                        >
                            Create
                        </Button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default NewPost;