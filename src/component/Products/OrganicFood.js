import React, { Fragment } from 'react';
import productOne from "../images/Organic product/Product 1.jpg";
import productTwo from "../images/Organic product/product 2.jpg";
import productThree from "../images/Organic product/product 3.jpg";
import productFour from "../images/Organic product/product 4.jpg";

const OrganicFood = () => {

    const products = [
        {
            id: 1,
            name: "ব্রকলি",
            image: productOne,
            price: "৮০",
        },
        {
            id: 2,
            name: "পাকা পেপে",
            image: productTwo,
            price: "১২০",
        },
        {
            id: 3,
            name: "গাঁজর",
            image: productThree,
            price: "১৫০",
        },
        {
            id: 4,
            name: "বাঁধা কপি",
            image: productFour,
            price: "৭০",
        },
    ]

    return (
        <Fragment>
            <div className='container pt-20 pb-10'>
                <h1 className='text-4xl font-bold text-primary lg:text-center'>অর্গানিক ফুড </h1>
                <div className='pl-12 lg:pl-0 pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                    {
                        products?.map((item) => (
                            <div className="card card-compact w-96 md:w-72 lg:w-64 bg-base-100 shadow-2xl" key={item?.id}>
                                <figure className='lg:h-48 flex justify-center items-center'><img src={item?.image} alt="অর্গানিক_ফুড " className='w-full' style={{ objectFit: "cover", margin: "0 auto", width: '100%' }} /></figure>
                                <div className="card-body pt-5">
                                    <h2 className="text-2xl font-bold"> {item?.name} </h2>
                                    <p className='text-lg font-medium'> মূল্য: {item?.price} টাকা  </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
    
        </Fragment>
    );
};

export default OrganicFood;