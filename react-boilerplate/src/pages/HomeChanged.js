import React, { useEffect } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MOVIES_REQUEST } from '../reducer/movies';

const HomeChanged = () => {
  const { isLoading } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_MOVIES_REQUEST,
    });
  }, []);

  return <section className="container">{isLoading ? <div>로딩중..</div> : <div>로딩 완료!</div>}</section>;
};

export default HomeChanged;
