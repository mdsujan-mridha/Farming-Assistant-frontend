import { LocationOn, Star } from '@mui/icons-material';
import { Rating, Slider } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import "./Products.css";
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getAllProduct } from '../action/productAction';
import Loader from "../Layout/Loader";
import { toast } from 'react-toastify';
const Products = () => {

    const dispatch = useDispatch();
    const { loading, products, error, productCount, resultPerPage, filteredProductsCount } = useSelector((state) => state.products)
    const productCategory = [
        "Beans",
        "Radish",
        "Cauliflower",
        "Cabbage",
        "Pumpkin",
        "Capsicum",
        "Pea",
        "Haicha",
        "Lemon",
        "Carrot",
        "Tomato",
        "Pumpkin",
    ]

    const [price, setPrice] = useState([0, 200]);
    const [selectedCategory, setSelectedCategory] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [rating, setRating] = useState(5);
    const [keyword, setKeyword] = useState("");

    // set price 
    const handlePriceChange = (e, newPrice) => {

        setPrice(newPrice);
    }
    const handleCheckbox = (category) => {
        setSelectedCategory(category)
    }

    let count = filteredProductsCount;
    // pagination

    const setCurrentPageNo = (e) => {
        setCurrentPage(e)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setKeyword(e.target.value);

    }
    // console.log(keyword)
    const filterProduct = products.filter((product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
    )
    console.log(filterProduct);
    useEffect(() => {

        if (error) {
            dispatch(clearErrors);
            toast.error(error, 'You got some error');
        }

        dispatch(getAllProduct(price, currentPage))

    }, [dispatch, error, price, currentPage])

    return (
        <Fragment>
            {
                loading ? (<Loader />)
                    :
                    (<Fragment>
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
                                            value={price}
                                            onChange={handlePriceChange}
                                            valueLabelDisplay="auto"
                                            aria-labelledby='range-slider'
                                            min={0}
                                            max={200}
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
                                                        name={item}
                                                        id={item}
                                                        onChange={() => selectedCategory === item}
                                                        onClick={() => handleCheckbox(item)}
                                                    />
                                                    <label className='font-semibold pl-2 text-gray-500 text-md' htmlFor={item}>{item}</label>
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
                                        placeholder='Search your product'
                                        className='w-full border-2 p-4 rounded-xl border-gray-500'
                                        onChange={handleSearch}
                                        value={keyword}

                                    /> </div>
                                <div className='mt-7 pt-10 bg-white rounded-lg h-full px-8'>
                                    <p className='text-lg font-bold'> Found <span className='text-primary'> 200 </span> products </p>
                                    <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                                        {
                                            filterProduct &&
                                            filterProduct?.map((product) => (
                                                <Link to="/productDetails" className="w-auto h-auto bg-gray-100 rounded-lg shadow-xl relative" key={product._id}>
                                                    <img src={product?.images[0]?.url} alt={product.name}
                                                        className='p-1 rounded-2xl w-full h-80' />
                                                    <div className='mt-5 px-5'>
                                                        <div className='flex justify-between gap-5 items-center'>
                                                            <p className='text-xl font-bold'> {product?.name} </p>
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
                                    {
                                        resultPerPage < count && (
                                            <div className="paginationBox">
                                                <Pagination
                                                    activePage={currentPage}
                                                    itemsCountPerPage={resultPerPage}
                                                    totalItemsCount={productCount}
                                                    onChange={setCurrentPageNo}
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
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </Fragment>)
            }
        </Fragment>
    );
};

export default Products;