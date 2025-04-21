interface Post{
    id : number,
    title : string,
    body: string
}

export default async function getPostById(id:number):Promise<Post> {
   const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next : {
        revalidate : 10
    }
   });

   const post = await result.json();
   return post;
}