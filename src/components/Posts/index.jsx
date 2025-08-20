import React from "react";
import * as SC from "./styles"
import { Post } from "./components/Post";


export const Posts = ({posts}) => (
  <>
    <SC.Posts>
      {posts.map((post) => <Post key={post.id} post={post}/>)}
    </SC.Posts>
  </>

)