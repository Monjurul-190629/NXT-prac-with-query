import getPostById from '@/app/lib/getPostById';
import React from 'react';

interface Params {
    params: {
      id: string;
    };
  }


const page = async ({params} : Params) => {
    const id = parseInt(params.id);

    const post = await getPostById(id);

    console.log(post)
    return (
        <div>
            <p className='font-bold mr-4'>{post.id}.</p>
            {post.body}
        </div>
    );
};

export default page;