import React, {Component} from 'react';
import { connect } from 'react-redux';

import { setCategory, changePage } from './store/actions';
import Header from './components/Header/Header';
import { FilterContainer } from './containers/FilterContainer';
import CardsContainer from './containers/CardsContainer';
import style from './index.module.css';

class App extends Component {

  componentDidMount() {
    window.addEventListener('popstate', this.setHistory);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.setHistory);
  }

  setHistory = () => {
    let category = window.location.pathname.substr(1);
    this.props.setCategory(category);
    let page = window.location.search.substr(6) || 1;
    this.props.changePage(+page);
  };

  render() {
    return (
        <div className={style.app}>
          <header className={style.header}>  
            <Header>Список товаров</Header>
          </header>
          <main className={style.content}>
            <CardsContainer />
          </main>
          <section className={style.filters}>
            <FilterContainer />
          </section>
          <aside className={style.sidebar}></aside>
        </div>
    );
  }

}

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = {
  setCategory, 
  changePage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(App);
