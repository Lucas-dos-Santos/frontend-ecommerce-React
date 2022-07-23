import React from 'react';
import { ReactComponent as WhatsAppLogo } from '../../assets/whatsapp.svg';
import * as S from './styles';

function WhatsApp() {
  return (
    <S.WhatsAppContainer target="_blank" href="https://api.whatsapp.com/send?phone=5547984412147">
      <WhatsAppLogo />
    </S.WhatsAppContainer>
  );
}

export default WhatsApp;
