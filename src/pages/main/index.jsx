import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Posts } from "../../components/Posts";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { Loader } from "../../components/ui/Loader"
import { getPosts, selectFreshPosts } from "../../redux/slices/postsSlice";

export const MainPage = () => {
  const dispatch = useDispatch();
  const freshPosts = useSelector(selectFreshPosts);
  const loading = useSelector((state) => state.loading);
  console.log('fresh Posts')
  console.log(freshPosts);
  const { post } = useSelector((state) => state.posts.postForView);
  // const { posts, loading } = useSelector((state) => state.posts.freshPosts);

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <>
      <Container>
        {loading && <Loader />}
        { freshPosts && 
          <>
            <Typo> Свежие публикации</Typo>
            <Posts posts={freshPosts}/>
          </>
        }

        { post && 
          <>
            <Typo>Последний просмотренный пост</Typo>
            {post ? <Posts posts={[post]}/> : <div>Вы пока ничего не посмотрели</div>}
            
          </>
        }
       
      </Container>
    </>
  )
} 