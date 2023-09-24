import React from 'react';

function Categories({ categoryType, onChangeCatehory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  // const [categorieIndex, setCategorieIndex] = React.useState(0);

  console.log('CATEGORY');

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={value}
            onClick={() => onChangeCatehory(index)}
            className={categoryType === index ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
