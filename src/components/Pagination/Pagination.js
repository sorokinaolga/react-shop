import React from 'react';
import PropTypes from 'prop-types';

import logRenderComponent from '../../hocs/logRenderComponent';
import style from './Pagination.module.css';

const Pagination = (props) => {
  const handleButtonClick = (pageNumber) => {
    props.handleChangePage(pageNumber);
    window.history.pushState({}, 'page-number', `?page=${pageNumber}`);
  }

  return(
    <div className={style.pagination}>
      <button className={style.pagination_button} 
              onClick={() => handleButtonClick(props.activePage - 1)} 
              disabled={props.activePage === 1 ? true : false}>
        Назад
      </button>

      {
        props.pages.map( (item, number) => (
          <button key={number} 
              className={`${style.pagination_item} ${(number+1) === props.activePage ? style.active : ''}`}
              onClick={() => handleButtonClick(number+1)}>
                {number+1}
          </button>
        ))
      }

      <button className={style.pagination_button} 
              onClick={() => handleButtonClick(props.activePage + 1)}
              disabled={props.activePage < props.pages.length ? false : true}>
        Вперед
      </button>
    </div>
  )
};

Pagination.propTypes = {
  activePage: PropTypes.number,
  pages: PropTypes.array,
  handleChangePage: PropTypes.func,
};

export default logRenderComponent(Pagination);