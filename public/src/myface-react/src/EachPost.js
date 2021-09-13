import React from "react";
import {PostList} from "./PostList"

export function EachPost(props) {
   

return(
    <li className="posts">
            <h1>{props.post.message}</h1>
            <p>posted by {props.post.postedBy.name}</p>
            <p>created at {props.post.createdAt}</p>
            <p>postid {props.post.id}</p>
            <img className="image" src={props.post.imageUrl} alt={props.post.message} width="200px"/>
                <form method="post" action={`http://localhost:3001/posts/${props.post.id}/like`}>
                <button type="submit">👍</button> <span>{props.post.likedBy.length} likes </span>
                </form>
                <form method="post" action={`http://localhost:3001/posts/${props.post.id}/dislike`}>
                <button type="submit">👎</button> <span>{props.post.dislikedBy.length} dislikes </span>
                </form>        
    </li>
)
}

