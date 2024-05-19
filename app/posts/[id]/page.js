import getSinglePost from '@/lib/getSinglePost';
import React from 'react';

const SinglePost = async ({ params }) => {
    let { id } = params;
    let post = await getSinglePost(id)
    return (
        <div>
            <h1 className='my-2'>{post.id}</h1>
            <h1 className='my-2'>{post.title}</h1>
            <h1 className='my-2'>{post.body}</h1>
        </div>
    );
};

export default SinglePost;