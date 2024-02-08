import React, { Fragment, useEffect, useState } from 'react';
import image from "../images/Organic product/product 7.jpg";

import { useParams } from 'react-router-dom';


const PostDetails = () => {


    const { id } = useParams();

    const [postItem, setPostItem] = useState({})


    useEffect(() => {

        fetch(`http://localhost:5000/api/v1/post/${id}`)
            .then(res => res.json())
            .then(data => setPostItem(data.post))

    }, [id])

    console.log(postItem)

    const { title, metaDescription, category, images, createAt, description } = postItem

    return (
        <Fragment>
            <div className='px-12 pt-12'>
                <img className=' rounded-md w-full' src={images?.[0]?.url} alt="information" />
                <p className='py-5 flex justify-between items-center'> category: {category} <span> create At: {createAt}  </span></p>
                <div>
                    <h1 className='text-5xl font-bold pt-10'> {title} </h1>
                    <p className='text-lg font-semibold pt-5'>
                        {metaDescription}
                    </p>
                    <p className='text-lg font-semibold pt-5'>
                        {description}
                    </p>
                </div>
            </div>
        </Fragment>

    );
};

export default PostDetails;