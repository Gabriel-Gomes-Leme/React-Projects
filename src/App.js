import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';

class App extends Component{
  state={
    posts:[]
  }
  componentDidMount(){
   this.loadPosts()
  }
  loadPosts = async () =>{
    const getPosts = fetch('https://jsonplaceholder.typicode.com/posts')
    const getPhotos = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([getPosts, getPhotos])

    const postJson = await posts.json()
    const photosJson = await photos.json()

    const postandPhotos = postJson.map((posts, index)=>{
      return{...posts, cover: photosJson[index].url}
    })

    this.setState({posts: postandPhotos})
  }
  render(){
    const {posts} = this.state;

    return(
      <div className="App">
        <section className="container">
          <div className="wrapper">
            <div className="posts-container">
        {posts.map(post=>(
         <PostCard key={post.id} title={post.title}
         body={post.body}
         cover={post.cover}
         id={post.id}
         ></PostCard>
        ))}
        </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App;
