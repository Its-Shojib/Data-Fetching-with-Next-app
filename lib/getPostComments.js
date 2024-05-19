export default async function getPostComments(id){
    let result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

    return result.json();
}