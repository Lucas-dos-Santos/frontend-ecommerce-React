import React from 'react';
import * as S from './styles';

function FormShipping() {
  return (
    <S.FormShippingContainer>
      <input type="text" pattern="\d{5}-?\d{3}" required />
      <button type="submit">Calcular Frete</button>
    </S.FormShippingContainer>
  );
}

export default FormShipping;
