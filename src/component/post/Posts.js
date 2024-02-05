import React, { Fragment, useState } from 'react';

import postImg from "../images/Organic product/Product 1.jpg";
import PostCard from './PostCard';

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

const fakeData = [
    {
        _id: 1,
        title: "How to grow a corn",
        metaDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit",
        category: "Corn",
        images: postImg,
        user: 'sujan'
    },
    {
        _id: 2,
        title: "How to grow a corn",
        metaDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit",
        category: "Corn",
        images: postImg,
        user: 'sujan'
    },
    {
        _id: 3,
        title: "How to grow a corn",
        metaDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit",
        category: "Corn",
        images: postImg,
        user: 'sujan'
    },
    {
        _id: 4,
        title: "How to grow a corn",
        metaDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit",
        category: "Corn",
        images: postImg,
        user: 'sujan'
    },

]

const Posts = () => {
    const [category, setCategory] = useState('');

    return (
        <Fragment>
            <div className='flex flex-col lg:flex-row  min-h-screen px-12'>
                <div className='w-full lg:w-1/12'>
                    <div className='pt-10 mt-10' style={{ borderTop: '1px solid #1c1c1c' }}>
                        <p className='text-xl font-bold pb-5'> Category </p>
                        <ul>
                            {
                                productCategory.map((category, index) => (
                                    <li
                                        key={index}
                                        onClick={() => setCategory(category)}
                                        className='text-lg font-bold opacity-60'
                                    >
                                        {category}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='w-full lg:w-4/5'>
                    {
                        fakeData &&
                        fakeData.map((item) => (
                            <PostCard
                                key={item._id}
                                item={item}
                            />
                        ))
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default Posts;