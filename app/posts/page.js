import getAllPost from '@/lib/getAllPost';
import Link from 'next/link';
import React from 'react';

const Posts = async () => {
    let posts = await getAllPost();


    return (
        <div>
            <h1 className='text-center font-bold my-10 text-5xl'>All Posts</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    posts.map((post) => {
                        return (
                            <div className='bg-gray-600 text-white p-5' key={post.id}>
                                <h1 className='text-2xl text-center font-bold py-2'>{post.title}</h1>
                                <p className='text-base'>{post.body}</p>
                                <button className='bg-green-950 text-white py-1 px-3 rounded-lg my-3 mx-auto'><Link href={`/posts/${post?.id}`}>See Details</Link></button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Posts;