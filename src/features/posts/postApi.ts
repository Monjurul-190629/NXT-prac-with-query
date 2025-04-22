export const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = response.json();
    return result;
}