import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Paginate from '../components/Paginate';

import { setTypeCategory } from '../redux/slices/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

function Home({ searchValue }) {
  console.log('HOME');
  const [pizzas, setPizzas] = React.useState([]);
  const [loadingStatus, setLoadingStatus] = React.useState(true);
  const [selectedPage, setSelectedPage] = React.useState(1);
  const [sortTypeObj, setSortTypeObj] = React.useState({
    name: 'популярности',
    sortType: 'rating',
  });
  const [orderType, setOrderType] = React.useState(true);

  const categoryType = useSelector((state) => state.filter.type);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setLoadingStatus(true);
    fetch(
      `https://64ff4768f8b9eeca9e29f003.mockapi.io/items?page=${selectedPage}&limit=8&${
        categoryType > 0 ? 'category=' + categoryType : ''
      }&sortBy=${sortTypeObj.sortType}&order=${orderType ? 'desc' : 'ask'}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setLoadingStatus(false);
        setPizzas(json);
      });
  }, [categoryType, sortTypeObj, orderType, selectedPage]);

  return (
    <div>
      <div className="content__top">
        <Categories
          categoryType={categoryType}
          onChangeCatehory={(index) => dispatch(setTypeCategory(index))}
          // categoryType={categoryType}
          // onChangeCategory={(index) => setCategoryType(index)}
        />
        <Sort
          sortTypeObj={sortTypeObj}
          onChangeSort={(obj) => setSortTypeObj(obj)}
          orderType={orderType}
          onChangeOrder={(order) => setOrderType(order)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loadingStatus
          ? [...Array(8).keys()].map((el) => <Skeleton key={el} />)
          : pizzas
              .filter((el) => {
                return el.title.toLowerCase().includes(searchValue.toLowerCase());
              })
              .map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Paginate onChangePage={(num) => setSelectedPage(num)} />
      {/* пагинация работает в виде
      демострации возможностей раоты с будущим бэком. Сейчас много багов и недочетов */}
    </div>
  );
}

export default Home;
