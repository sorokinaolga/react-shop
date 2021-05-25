import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import { setCategory } from './store/reducer';
import Header from './components/Header/Header';
import { FilterContainer } from './containers/FilterContainer';
import CardsContainer from './containers/CardsContainer';
import style from './index.module.css';

class App extends Component {

  componentDidMount() {
    window.addEventListener('popstate', this.setHistoryCategory);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.setHistoryCategory);
  }

  setHistoryCategory = () => {
    const category = window.location.pathname.substr(1);
    setCategory(category);
  };

  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }

}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
