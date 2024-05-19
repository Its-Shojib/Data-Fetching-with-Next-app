export default async function getAllPost(){
    let result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20');

    return result.json();
}