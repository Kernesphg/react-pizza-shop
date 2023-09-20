import React from 'react';
import style from './NotFound.module.css';
import { Link } from 'react-router-dom';

function index() {
  return (
    <div className={style.notFoundContent}>
      <span className={style.icone}>\(o_o)/</span>
      <h1 className={style.title}>Не можем найти</h1>
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
}

export default index;
