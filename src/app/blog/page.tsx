import React from 'react';
import getBlog from '../lib/getBlog';
import Link from 'next/link';

interface Post {
    id: number,
    title: string,
    body: string
}


const page: React.FC = async () => {


    const posts: Post[] = await getBlog();

    console.log(posts)


    return (
        <div className='text-justify'>
            <ul className="list-disc pl-6">
                {posts.map((post) => (
                    <li key={post.id} className="py-4">
                        <Link href = {`blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default page;