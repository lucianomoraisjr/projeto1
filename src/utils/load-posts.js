export const loadPosts =async ()=>{
    const photoResponse =fetch('https://jsonplaceholder.typicode.com/photos');
    const postsRespone =  fetch('https://jsonplaceholder.typicode.com/posts');
    const [posts,photos]= await Promise.all([postsRespone, photoResponse]);
    const postsJson = await posts.json();
    const photosJson = await photos.json();
    const postAndPhotos = postsJson.map((post,index) =>{
      return{ ...post, cover:photosJson[index].url}
    });
    return postAndPhotos;
}