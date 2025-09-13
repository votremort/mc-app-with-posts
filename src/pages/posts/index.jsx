import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "../../components/ui/Container";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/ui/Typo";
import { Loader } from "../../components/ui/Loader";
import { getPosts } from "../../redux/slices/postsSlice";

export const PostsPage = () => {
  const { list, loading } = useSelector((state) =>  state.posts.posts );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list) {
      dispatch(getPosts())
    }
    
  }, [list, dispatch]);

  if (!list && loading) {
    return <Loader />
  }

  if (!list) {
    return <>404</>
  }

  return (
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={list}/>
    </Container>
  )
}