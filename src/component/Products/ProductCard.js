import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { LocationOn, Star } from '@mui/icons-material';
import { Rating } from '@mui/material';

const ProductCard = ({ product }) => {

  

    return (
        <Fragment>
            <Link to={`/products/${product._id}`} className="w-auto h-auto bg-gray-100 rounded-lg shadow-xl relative" key={product._id}>
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
        </Fragment>
    );
};

export default ProductCard;