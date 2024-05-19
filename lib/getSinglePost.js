export default async function getSinglePost(id){
    let result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return result.json();
}