import React from "react";
import { UserProfilePage } from "./UserProfilePage"

export function EachUserPosts(props) {

    return (
        <li className="postsuser">
            <img className="imagesuser" src={props.userpost.imageUrl} alt={props.userpost.message} />
            <div className="post-textbox">
                <p>{props.user.username}</p>
                <p>{props.userpost.message}</p>
            </div>

        </li>
    )
}


