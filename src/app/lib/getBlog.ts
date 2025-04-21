

export default async function getBlog(): Promise<[]> {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next : {
            revalidate : 20 //after 20s it will be revalidate
        }
    });

    const posts1 = await result.json();
    const posts = posts1.slice(0, 10);
    return posts;
}