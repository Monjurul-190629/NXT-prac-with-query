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
            {post.id}
            {post.body}
        </div>
    );
};

export default page;