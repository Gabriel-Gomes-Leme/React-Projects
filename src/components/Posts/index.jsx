import { PostCard } from "../PostCard"
export const Posts = ({posts}) =>{
    return(
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
    )
}