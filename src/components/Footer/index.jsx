import React from 'react';
import * as S from './styles';

function Footer() {
  return (
    <S.FooterContainer>
      <S.InstitutionalSection>
        <img src="https://www.piuka.com.br/media/logo/stores/1/logo-piuka.png" width="110" height="40" alt="Logo" />
        <div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.1</p>
        </div>
      </S.InstitutionalSection>
      <S.BottomSection>
        <div className="copyright-content">
          <p>© Copyright 2022 - 2022. Todos os direitos reservados.</p>
          <p>NOSSA - CNPJ: 00.000.000/0000-00</p>
          <p>Rua São Paulo, 000 - São Paulo - SP - Brasil</p>
        </div>
        <div className="secure-labels-footer">
          <a href="https://www.ebit.com.br/" title="Selo EBIT" rel="noopener">
            <img src="https://newimgebit-a.akamaihd.net/ebitBR/selo/img_72730.png" alt="Selo EBIT" />
          </a>
          <img src="https://www.piuka.com.br/static/version1658320312/frontend/Piuka/default/pt_BR/images/selo-rapidssl.webp" alt="Selo Rapid SSL" />
          <a href="http://abcomm.org/" title="Selo ABCOMM" target="_blank" rel="noreferrer">
            <img src="https://www.piuka.com.br/static/version1658320312/frontend/Piuka/default/pt_BR/images/selo-abcomm.webp" alt="Selo ABCOMM" />
          </a>
          <a href="https://www.lojaconfiavel.com" className="ts-footerstamp" data-lcname="piuka" title="Selo Loja Confiável" target="_blank" rel="noreferrer">
            <img src="//service.yourviews.com.br/Image/abe4993c-9102-4f4b-8eed-052d06f225ce/Footer.jpg" alt="Selo Loja Confiável" />
          </a>
        </div>
      </S.BottomSection>
    </S.FooterContainer>
  );
}

export default Footer;
