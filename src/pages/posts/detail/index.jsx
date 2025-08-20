import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { INITIAL_POSTS } from "..";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/Container";

import * as SC from "./styles"
import { Link } from "../../../UI components/Link";

export const DetailPostPage = () => {
  const { id } = useParams();

  const currentPost = useMemo(() => INITIAL_POSTS.find((item) => item.id === Number(id)), [id]);
  
  if (!currentPost) {
    return <>Пост не найден</>
  }
  
  return (<Container>
    <Typo>{currentPost.title}</Typo>
    <SC.Image src={currentPost.image} alt={currentPost.id}/>
    <SC.Text>{currentPost.text}</SC.Text>
    <div style={{clear: 'both'}}/>
    <SC.LinkWrapper>
      <Link to='/posts/'>Обратно к публикациям</Link>
    </SC.LinkWrapper>
  </Container>
    
  )
}