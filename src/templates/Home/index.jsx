import logo from '../../logo.svg';
import './style.css';
import { Component } from 'react';
import { Posts } from '../../components/Posts';
import {loadPosts} from '../../utils/load-posts'
import { Button } from '../../components/Button';

class Home extends Component{
  state={
    posts:[],
    allPosts:[],
    page:0,
    postsPerPage:6
  }
  componentDidMount(){
   this.loadPosts()
  }
  loadPosts = async () =>{
    const {page, postsPerPage} = this.state
    const postandPhotos = await loadPosts()
    this.setState({posts: postandPhotos.slice(page, postsPerPage), 
      allPosts:postandPhotos,
    })
  }
  loadMorePosts = () =>{
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state
    const nextPage = postsPerPage + page
    const nextPosts = allPosts.slice(nextPage, postsPerPage + nextPage)
    posts.push(...nextPosts) // é preciso fazer o spread, pois caso o contrário, teremos um array que esta vindo em next post, dentro desse outro array 
    console.log('cliquei')
    this.setState({posts, page: nextPage})
  }
  render(){
    const {posts, page, postsPerPage, allPosts} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length

    return(
      <div className="App">
        <section className="container">       
          <Posts posts={posts}/>
          <Button text="Load More Posts" click={this.loadMorePosts} disabled={noMorePosts}/>
        </section>
      </div>
    )
  }
}

export default Home;
