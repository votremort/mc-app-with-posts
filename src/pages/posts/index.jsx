import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as SC from "./styles"

import { Container } from "../../components/ui/Container";
import { Posts } from "../../components/Posts";

import { Typo } from "../../components/ui/Typo";
import { Loader } from "../../components/ui/Loader";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

import { getPosts, setPage, selectTotalPagesFiltered,
  setSortOrder, setFilterText, selectFilteredPosts
 } from "../../redux/slices/postsSlice";

export const PostsPage = () => {
  const { list, loading } = useSelector((state) =>  state.posts.posts );
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.posts.currentPage);
  const totalPages = useSelector(selectTotalPagesFiltered);

  const sortOrder = useSelector((state) => state.posts.sortOrder);
  const filterText = useSelector((state) => state.posts.filterText);

  const filteredAndSortedPosts = useSelector(selectFilteredPosts);

  useEffect(() => {
    if (!list || list.length === 0) {
      dispatch(getPosts())
    }
  }, [list, dispatch]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      dispatch(setPage(totalPages));
    }
  }, [totalPages, currentPage, dispatch])

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      dispatch(setPage(pageNumber));
    }
  };

  const postsPerPage = 10;
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToDisplay = filteredAndSortedPosts.slice(startIndex, endIndex)

  if (!list && loading) {
    return <Loader />
  }

  if (!list) {
    return <>404</>
  }

  return (
    <Container>
      <Typo>Публикации</Typo>
      <SC.SortFilterWrapper>
        <Input 
          type="text"
          placeholder="Фильтр по названию"
          value={filterText}
          onChange={(e) => {
            dispatch(setFilterText(e.target.value))
            dispatch(setPage(1))
            }
          }
        />
        <SC.SortWrapper>
          <label>Сортировка:</label>
          <select 
            value={sortOrder}
            onChange={(e) => {
              dispatch(setSortOrder(e.target.value))
              dispatch(setPage(1))
              }
            }
          >
          <option value='id_asc'>ID: по возрастанию</option>
          <option value='id_desc'>ID: по убыванию</option>
          <option value='name_asc'>Название: А - Z</option>
          <option value='name_desc'>Название:Z - A</option>
          </select>
        </SC.SortWrapper>
      </SC.SortFilterWrapper>
      <Posts posts={postsToDisplay}/>
      <SC.PaginationWrapper>
        <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} text='назад'/>
        <div>{currentPage}</div>
        <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} text='вперед'/>
      </SC.PaginationWrapper >
    </Container>
  )
}