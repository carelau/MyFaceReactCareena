import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EachUserPosts } from './EachUserPosts'

export function UserProfilePage() {
  const [user, setUser] = useState([]);
  const [userposts, setUserPosts] = useState([]);
  let { id } = useParams();

  useEffect(() => {

    async function fetchData() {
      const response = await fetch(`http://localhost:3001/users/${id}`);
      const json = await response.json();

      setUser(json);
      setUserPosts(json.posts)
    }
    fetchData();

  }, []);

  return (
    <div className="bodyusers">
      <div className="profilebanner">
        <img className = "profilebanner-coverpic" src={user.coverImageUrl} alt={user.name} />
        <img className = "profilebanner-profilepic" src={user.profileImageUrl} alt={user.name} />
        <div className ="profilebanner-text">
          <p className = "profilebanner-text-name">{user.name}</p>
          <p>{user.username}</p>
          <p className = "profilebanner-text-email">{user.email}</p>
        </div>
      </div>
      <h2>{user.name}'s posts</h2>
      <ol className="postlist">
        {userposts.map(function (userpost, index) {
          return (
            <EachUserPosts userpost={userpost} user={user} key={index} />
          )
        })}
      </ol>
    </div>

  )
}