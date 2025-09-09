import React from "react";

import { PostForm } from "../../posts/components/PostForm";
import { editPost } from "../../../redux/slices/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const EditPostPage = () => {
  const { id } = useParams();
  const { list } = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();
  const onSubmitForm = (formValues) => {
    dispatch(editPost(formValues))
  };


  if (!list) {
    return <>Пост не найден</>
  }

  const findedPost = list?.find((item) => item.id === Number(id))

  return <PostForm 
    title= {`Редактирование поста - ${id}`} 
    onSubmitForm={onSubmitForm}
    defaultValues={findedPost}
  />
  
  
}