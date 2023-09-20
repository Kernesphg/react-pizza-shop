import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="-3" y="413" rx="13" ry="13" width="91" height="27" />
    <rect x="0" y="253" rx="10" ry="10" width="280" height="26" />
    <rect x="131" y="401" rx="25" ry="25" width="150" height="50" />
    <rect x="0" y="302" rx="10" ry="10" width="280" height="75" />
    <circle cx="141" cy="120" r="110" />
  </ContentLoader>
);

export default Skeleton;
