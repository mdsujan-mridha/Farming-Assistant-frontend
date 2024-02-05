import React, { Fragment } from 'react';
import { Link } from "react-router-dom"

const PostCard = ({ item }) => {
    return (
        <Fragment>
            <Link to="/post/details" className='flex flex-col lg:flex-row gap-5 w-full justify-center items-center h-48'>
                <div>
                    <img className='w-32 rounded-md' src={item.images} alt={item.title} />
                </div>
                <div className='flex flex-col gap-5'>
                    <h1> {item.title} </h1>
                    <h3> {item.metaDescription} </h3>
                    <p className='flex justify-between items-center'> {item.user}  12-12-20204 </p>
                </div>
            </Link>
        </Fragment>
    );
};

export default PostCard;