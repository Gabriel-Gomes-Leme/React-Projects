export const loadPosts = async () =>{
    const getPosts = fetch('https://jsonplaceholder.typicode.com/posts')
    const getPhotos = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([getPosts, getPhotos])

    const postJson = await posts.json()
    const photosJson = await photos.json()

    const postandPhotos = postJson.map((posts, index)=>{
      return{...posts, cover: photosJson[index].url}
    })
    return postandPhotos
}