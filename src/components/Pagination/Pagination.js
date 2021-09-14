import React from 'react';
import PropTypes from 'prop-types';

import logRenderComponent from '../../hocs/logRenderComponent';
import style from './Pagination.module.css';
import { Link } from 'react-router-dom';

const Pagination = (props) => {
  const { activeCategory, activePage, pages } = props;

  const url = (number) => {
    if (activeCategory) {
      return `category=${activeCategory}&page=${number}`;
    } else {
      return `&page=${number}`;
    }
  }

  return(
    <div className={style.pagination}>
      <Link className={`${style.pagination_button} ${activePage === 1 ? style.blocked : ''}`}
            to={{search: url(activePage - 1)}}>
        Назад
      </Link>

      {
        pages.map( (item, number) => (
          <Link key={number} 
              className={`${style.pagination_item} ${(number+1) === activePage ? style.active : ''}`}
              to={{search: url(number + 1)}}
          >
            {number+1}
          </Link>
        ))
      }

      <Link className={`${style.pagination_button} ${activePage < pages.length ? '' : style.blocked}`}
            to={{search: url(activePage + 1)}}>
        Вперед
      </Link>
    </div>
  )
};

Pagination.propTypes = {
  activePage: PropTypes.number,
  pages: PropTypes.array,
  activeCategory: PropTypes.string,
};

export default logRenderComponent(Pagination);