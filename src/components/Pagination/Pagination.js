import React from 'react';
import PropTypes from 'prop-types';

import logRenderComponent from '../../hocs/logRenderComponent';
import style from './Pagination.module.css';

const Pagination = (props) => {
  const handlePageClick = (evt) => {
    let pageNumber = +evt.target.textContent;
    props.handleChangePage(pageNumber);
    window.history.pushState({}, 'page-number', `?page=${pageNumber}`);
  }

  const handleButtonClick = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= props.pages.length) {
      props.handleChangePage(pageNumber);
      window.history.pushState({}, 'page-number', `?page=${pageNumber}`);
    }
  }

  let pageNumbers = [];
  for (let i=1; i<= props.pages.length; i++) {
    pageNumbers.push(i);
  }
  return(
    <div className={style.pagination}>
      <button className={style.pagination_button} onClick={() => handleButtonClick(props.activePage - 1)}>Назад</button>
        <ul className={style.pagination_list}>
          {
            pageNumbers.map( (number) => (
              <li key={number} 
                  className={`${style.pagination_item} ${number === props.activePage ? style.active : ''}`}
                  onClick={handlePageClick}>
                    {number}
              </li>
            ))
          }
        </ul>
      <button className={style.pagination_button} onClick={() => handleButtonClick(props.activePage + 1)}>Вперед</button>
    </div>
  )
};

Pagination.propTypes = {
  activePage: PropTypes.number,
  pages: PropTypes.array,
};

export default logRenderComponent(Pagination);