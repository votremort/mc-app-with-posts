import React from "react";

import { Posts } from "../../components/Posts";
import {Container} from "../../components/Container";
import { Typo } from "../../components/Typo";

const INITIAL_POSTS = [
  {
    id: 1,
    title: 'Post 1',
    image: 'https://img2.safereactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-%D0%A1%D1%84%D0%B8%D0%BD%D0%BA%D1%81-(%D0%BF%D0%BE%D1%80%D0%BE%D0%B4%D0%B0)-%D0%BC%D0%B0%D0%BD%D1%87%D0%BA%D0%B8%D0%BD-7357586.jpeg'
  },
    {
    id: 2,
    title: 'Post 2',
    image: 'https://img2.safereactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-%D0%A1%D1%84%D0%B8%D0%BD%D0%BA%D1%81-(%D0%BF%D0%BE%D1%80%D0%BE%D0%B4%D0%B0)-%D0%BC%D0%B0%D0%BD%D1%87%D0%BA%D0%B8%D0%BD-7357586.jpeg'
  },
    {
    id: 3,
    title: 'Post 3',
    image: 'https://img2.safereactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-%D0%A1%D1%84%D0%B8%D0%BD%D0%BA%D1%81-(%D0%BF%D0%BE%D1%80%D0%BE%D0%B4%D0%B0)-%D0%BC%D0%B0%D0%BD%D1%87%D0%BA%D0%B8%D0%BD-7357586.jpeg'
  },
]

export const MainPage = () => {

  return (
    <>
      <Container>
        <Typo> Свежие публикации</Typo>
        <Posts posts={INITIAL_POSTS}/>
      </Container>
    </>
  )
} 