import { LocationOn, Star } from '@mui/icons-material';
import { Rating, Slider } from '@mui/material';
import React, { Fragment, useState } from 'react';
import productImg from "../images/Organic product/product 8.jpg";
import productImg2 from "../images/Organic product/Product 1.jpg";
import productImg3 from "../images/Organic product/product 2.jpg";
import productImg4 from "../images/Organic product/product 3.jpg";
import productImg5 from "../images/Organic product/product 4.jpg";
import productImg6 from "../images/Organic product/product 5.jpg";
import productImg7 from "../images/Organic product/product 6.jpg";
import productImg8 from "../images/Organic product/product 7.jpg";
import "./Products.css";
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
const Products = () => {
    const productCategory = [
        {

            title: 'Beans'
        },
        {

            title: 'Radish '
        },
        {

            title: 'Cauliflower'
        },
        {

            title: 'Cabbage'
        },
        {

            title: 'Pumpkin'
        },
        {

            title: 'Capsicum'
        },
        {

            title: 'Pea '
        },
        {

            title: 'Haicha'
        },
        {

            title: 'Lemon'
        },
        {

            title: 'Carrot'
        },
        {

            title: 'Tomato'
        },
        {

            title: 'Pumpkin'
        },
    ]

    const [price, setPrice] = useState([0, 2000]);
    const [selectedCategory, setSelectedCategory] = useState(true);
    const [rating, setRating] = useState(5);

    const handlePriceChange = (e, newPrice) => {
        e.preventDefault()
        setPrice(newPrice);
    }
    const handleCheckbox = (category) => {

        setSelectedCategory(category)

    }

    const products = [
        {
            id: 1,
            image: productImg,
        },
        {
            id: 2,
            image: productImg2,
        },
        {
            id: 3,
            image: productImg3,
        },
        {
            id: 4,
            image: productImg4,
        },
        {
            id: 5,
            image: productImg5,
        },
        {
            id: 6,
            image: productImg6,
        },
        {
            id: 7,
            image: productImg7,
        },
        {
            id: 8,
            image: productImg8,
        },
    ]

    console.log(selectedCategory)
    return (
        <Fragment>
            <div className='flex flex-col lg:flex-row gap-5 px-12 bg bg-gray-200' style={{ minHeight: '100vh', width: '100%' }}>
                <div className='bg-white w-72 px-10 pt-10'>
                    <div className='flex justify-between items-center'>
                        <p className='text-xl font-bold'> Filter </p>
                        <button className='btn'> Reset </button>
                    </div>
                    <div className='pt-10 mt-10' style={{ borderTop: '1px solid #1c1c1c' }}>
                        <p className='text-xl font-bold'> Price </p>
                        <div className='pt-5'>
                            <Slider
                                getAriaLabel={() => 'Price range'}
                                valueLabelDisplay='auto'
                                onChange={handlePriceChange}
                                value={price}
                                min={0}
                                max={2000}
                            />
                        </div>

                    </div>
                    <div className='pt-10 mt-10' style={{ borderTop: '1px solid #1c1c1c' }}>
                        <p className='text-xl font-bold pb-5'> Category </p>
                        <div>
                            {
                                productCategory?.map((item) => (
                                    <div key={item.title}>
                                        <input

                                            type="checkbox"
                                            name={item?.title}
                                            id={item.title}
                                            onChange={() => selectedCategory === item}
                                            onClick={() => handleCheckbox(item)}
                                        />
                                        <label className='font-semibold pl-2 text-gray-500 text-md' htmlFor={item?.title}>{item?.title}</label>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div className='pt-10 mt-10 pb-7' style={{ borderTop: "1px solid #1c1c1c", borderBottom: '1px solid #1c1c1c' }}>
                        <p> Ratting </p>
                        <div>
                            <Rating
                                name='review'
                                readOnly
                                value={rating}
                                precision={0.5}
                                style={{ color: 'orange' }}
                                emptyIcon={<Star style={{ opacity: 0.75 }} fontSize='inherit' />}
                            />
                            <Rating
                                name='review'
                                readOnly
                                value={4.5}
                                precision={0.5}
                                style={{ color: 'orange' }}
                                emptyIcon={<Star style={{ opacity: 0.75 }} fontSize='inherit' />}
                            />
                            <Rating
                                name='review'
                                readOnly
                                value={4}
                                precision={0.5}
                                style={{ color: 'orange' }}
                                emptyIcon={<Star style={{ opacity: 0.75 }} fontSize='inherit' />}
                            />
                            <Rating
                                name='review'
                                readOnly
                                value={3.5}
                                precision={0.5}
                                style={{ color: 'orange' }}
                                emptyIcon={<Star style={{ opacity: 0.75 }} fontSize='inherit' />}
                            />
                            <Rating
                                name='review'
                                readOnly
                                value={3}
                                precision={0.5}
                                style={{ color: 'orange' }}
                                emptyIcon={<Star style={{ opacity: 0.75 }} fontSize='inherit' />}
                            />
                            <Rating
                                name='review'
                                readOnly
                                value={2.5}
                                precision={0.5}
                                style={{ color: 'orange' }}
                                emptyIcon={<Star style={{ opacity: 0.75 }} fontSize='inherit' />}
                            />
                            <Rating
                                name='review'
                                readOnly
                                value={2}
                                precision={0.5}
                                style={{ color: 'orange' }}
                                emptyIcon={<Star style={{ opacity: 0.75 }} fontSize='inherit' />}
                            />
                            <Rating
                                name='review'
                                readOnly
                                value={1}
                                precision={0.5}
                                style={{ color: 'orange' }}
                                onChange={() => setRating(rating)}
                                emptyIcon={<Star style={{ opacity: 0.75 }} fontSize='inherit' />}
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div
                        className='mt-10 w-full h-32 bg-white flex justify-center items-center rounded-md px-12'
                    >
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder='Search your product'
                            className='w-full border-2 p-4 rounded-xl border-gray-500'

                        /> </div>
                    <div className='mt-7 pt-10 bg-white rounded-lg h-full px-8'>
                        <p className='text-lg font-bold'> Found <span className='text-primary'> 200 </span> products </p>
                        <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                            {
                                products?.map((product) => (
                                    <Link to="/productDetails" className="w-auto h-auto bg-gray-100 rounded-lg shadow-xl relative" key={product.id}>
                                        <img src={product?.image} alt="product"
                                            className='p-1 rounded-2xl w-full h-80' />
                                        <div className='mt-5 px-5'>
                                            <div className='flex justify-between gap-5 items-center'>
                                                <p className='text-xl font-bold'> Tomato </p>
                                                <Rating
                                                    style={{ color: 'orange' }}
                                                    name='review'
                                                    readOnly
                                                    precision={0.5}
                                                    value={4}
                                                    emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                />
                                            </div>
                                            <p className='flex  gap-10 pt-6 text-gray-400 font-bold text-xl'> <LocationOn /> Barguna,Barishal </p>
                                            <div className='flex gap-3 items-center pt-7 pb-10'>
                                                <p className='text-lg font-extrabold text-primary'> ১২০ /- টাকা </p>
                                                <p className='bg-gray-400 p-2 rounded-xl px-5'> 5% </p>
                                                <p className='font-bold opacity-50'> <del> ১৪০ /- টাকা</del> </p>
                                            </div>
                                        </div>
                                        <div className='pb-0 mt-10'>
                                            <button className='btn btn-primary w-full absolute bottom-0 left-0 hidden  transition-opacity opacity-0 delay-300'>Add to cart</button>
                                        </div>
                                    </Link>
                                ))
                            }

                        </div>
                        <div className="paginationBox">
                            <Pagination
                                itemsCountPerPage={10}
                                totalItemsCount={450}
                                pageRangeDisplayed={5}
                                prevPageText="Prev"
                                firstPageText="First"
                                lastPageText="Last"
                                itemClass='page-item'
                                linkClass='page-link'
                                activeClass='pageItemActive'
                                activeLinkClass='pageLinkActive'
                                nextPageText="Next"
                                className="pagination"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Products;