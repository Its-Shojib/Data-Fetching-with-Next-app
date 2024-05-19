import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import img from '@/public/img.jpg'

const BlogPage = ({ params }) => {
    let { id } = params;
    if (id > 2) {
        notFound();
    }

    return (
        <div>
            <h1>This is {id} Page</h1>
            <Image src={img} alt='My photo' quality={100} placeholder='blur'></Image>
        </div>
    );
};

export default BlogPage;