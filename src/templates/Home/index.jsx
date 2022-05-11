import logo from '../../logo.svg';
import './style.css';
import { Component } from 'react';
import { Posts } from '../../components/Posts';
import {loadPosts} from '../../utils/load-posts'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

class Home extends Component{
  state={
    posts:[],
    allPosts:[],
    page:0,
    postsPerPage:6,
    searchValue:''
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
  handleChange = (e) =>{
    const {value} = e.target
    this.setState({searchValue:value})
    console.log(value)
  }
  render(){
    const {posts, page, postsPerPage, allPosts, searchValue} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length

    const filteredPosts = !!searchValue ? allPosts.filter(post=>{
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
    }) :
    posts;

    return(
      <div className="App">
        <section className="container">
          <div className="wrapper">
          {!!searchValue && (
          <>
            <h2>Searching for : {searchValue}</h2>
          </>
        )} 
          <div className="flex-center-vh">
            <Input searchValue={searchValue} change={this.handleChange}/>
          </div>
          {filteredPosts.length > 0 && (
            <>
            <Posts posts={filteredPosts}/>
            </>
          )}
          {filteredPosts.length === 0 && (
            <>
            <p>Não foram encontrados posts com esse título</p>
            </>
          )}
          {!searchValue &&(
            <>
            <Button text="Load More Posts" click={this.loadMorePosts} disabled={noMorePosts}/>
            </>
          )}
          </div>
        </section>
      </div>
    )
  }
}

export default Home;
