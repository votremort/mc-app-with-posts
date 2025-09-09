import React, { useEffect } from "react";

import { useSelector,useDispatch } from "react-redux";

import { Posts } from "../../components/Posts";
import {Container} from "../../components/Container";
import { Typo } from "../../components/Typo";
import { getFreshPosts } from "../../redux/slices/postsSlice";

export const MainPage = () => {
  const dispatch = useDispatch()
  const { post } = useSelector((state) => state.posts.postForView);
  const { posts, loading } = useSelector((state) => state.posts.freshPosts);

  useEffect(() => {
    dispatch(getFreshPosts())
  }, [])

  return (
    <>
      <Container>
        {loading && <>Loading...</>}
        { posts && 
          <>
            <Typo> Свежие публикации</Typo>
            <Posts posts={posts}/>
          </>
        }

        { posts && 
          <>
            <Typo>Последний просмотренный пост</Typo>
            <Posts posts={[post]}/>
          </>
        }
       
      </Container>
    </>
  )
} 