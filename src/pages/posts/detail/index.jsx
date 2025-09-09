import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostById, showPost } from "../../../redux/slices/postsSlice";

import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/Container";
import { Link } from "../../../UI components/Link";


import * as SC from "./styles"

export const DetailPostPage = () => {
  const { id } = useParams();
  const { list } = useSelector((state) => state.posts.posts);
  const postForView = useSelector((state) => state.posts.postForView);
  const dispatch = useDispatch();

  useEffect(() => {
    const intId = Number(id);
    const findedPosts = list ? list.find((item) => item.id === intId) : undefined;
    if (findedPosts) {
      dispatch(showPost(findedPosts))
    } else {
      dispatch(getPostById(intId))
    }
    
  }, [id, list, dispatch])
  
  if (!postForView.post || !postForView.post.hasOwnProperty('id')) {
    return <>Пост не найден</>
  }

  if (postForView.loading) {
    <Container>Loading...</Container>
  }

  const { post } = postForView;
  const image = post.image || 'https://img2.safereactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-%D0%A1%D1%84%D0%B8%D0%BD%D0%BA%D1%81-(%D0%BF%D0%BE%D1%80%D0%BE%D0%B4%D0%B0)-%D0%BC%D0%B0%D0%BD%D1%87%D0%BA%D0%B8%D0%BD-7357586.jpeg';

  return (<Container>
    <Typo>{post.title}</Typo>
    <SC.Image src={image} alt={post.id}/>
    <SC.Text>{post.body}</SC.Text>
    <div style={{clear: 'both'}}/>
    <SC.LinkWrapper>
      <Link to='/posts/'>Обратно к публикациям</Link>
      <Link to={`/posts/${post.id}/edit`}>Редактировать пост</Link>
    </SC.LinkWrapper>
  </Container>
    
  )
}