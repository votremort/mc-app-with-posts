import React from "react";
import * as SC from "./styles";
import { Link } from "../../../ui/Link";

export const Post = ({post}) => {
  const image = post.image || 'https://img2.safereactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-%D0%A1%D1%84%D0%B8%D0%BD%D0%BA%D1%81-(%D0%BF%D0%BE%D1%80%D0%BE%D0%B4%D0%B0)-%D0%BC%D0%B0%D0%BD%D1%87%D0%BA%D0%B8%D0%BD-7357586.jpeg';

  return(
    <SC.Post>
      <SC.Image src={image} alt={post.title} />
      <SC.Title>{post.title}</SC.Title>
      <Link to={`/posts/${post.id  }`}>Читать далее...</Link>
    </SC.Post>
  )
}