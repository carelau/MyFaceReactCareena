import React, { useState, useEffect } from 'react';
import {EachPost} from './EachPost';
import { useParams } from 'react-router-dom';

export function PostList() {
const [posts, setState] = useState([]);
let { pagenumber } = useParams();
let number = parseInt(pagenumber);
const [page, setPage] = useState(number);
console.log(page);

useEffect(() => {

    async function fetchData() {
        const response = await fetch(`http://localhost:3001/posts/?page=${page}&pageSize=10`);
        const json = await response.json();

       setState(json.results);
    }
    fetchData();
    
  },[page]);

  return(
    <>
      <ol className="PostsPage">
      <button className="nextprevious" type="submit" onClick={()=>setPage(page+1)}>Next</button>
      <button className="nextprevious" type="previous" onClick={()=>setPage(page-1)}>Previous</button>
         {posts.map(function(post,index) {
        return <EachPost post={post} key={index} />
         })}
      </ol>
     
      </>

  )
}
