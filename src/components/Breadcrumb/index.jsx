import React from 'react';
import { Link } from 'react-router-dom';
import parameterize from '../../services/utils';
import * as S from './styles';

function Breadcrumb({ category }) {
  return (
    <S.BreadcrumbContainer>
      <Link to="/">
        Inicio
      </Link>
      <span> &gt; </span>
      <Link to={`/${parameterize(category)}`}>
        {category}
      </Link>
    </S.BreadcrumbContainer>
  );
}

export default Breadcrumb;
