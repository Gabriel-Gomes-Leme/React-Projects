import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Posts } from './components/Posts';
import {loadPosts} from './utils/load-posts'

class App extends Component{
  state={
    posts:[]
  }
  componentDidMount(){
   this.loadPosts()
  }
  loadPosts = async () =>{
    const postandPhotos = await loadPosts()
    this.setState({posts: postandPhotos})
  }
  render(){
    const {posts} = this.state;

    return(
      <div className="App">
        <section className="container">
          <Posts posts={posts}/>
        </section>
      </div>
    )
  }
}

export default App;
