import './style.css'
export const PostCard = ({id, title, body, cover}) =>{
    return(
        <div className="post">
        <img src={cover} alt="title" title={title} className="post__img"/>
        <div className="post__body">
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      </div>
    )
}