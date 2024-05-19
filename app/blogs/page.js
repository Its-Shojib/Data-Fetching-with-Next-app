import Link from 'next/link';
import React from 'react';

const Blogs = () => {
    let blogs = [
        {
            id: 1,
            title: 'Blog 1',
            description: 'This is blog 1'
        },
        {
            id: 2,
            title: 'Blog 2',
            description: 'This is blog 2'
        }
    ]
    return (
        <div>
            <ul>
                {
                    blogs.map(blog => (
                        <li
                            className='p-5'
                            key={blog?.id}>
                            <Link href={`/blogs/${blog.id}`}>{blog?.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Blogs; {

}