import React from 'react';
import { setTypeCategory } from '../redux/slices/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const categoryType = useSelector((state) => state.filter.categoryType);
  const dispatch = useDispatch();
  console.log('CATEGORY');

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={value}
            onClick={() => dispatch(setTypeCategory(index))}
            className={categoryType === index ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
