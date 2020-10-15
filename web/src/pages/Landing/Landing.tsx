import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '~/images/logo.svg';
import * as S from './Landing.styles';

const Landing = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <S.Location>
          <strong>Goiânia</strong>
          <span>Goiás</span>
        </S.Location>

        <S.EnterButton to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </S.EnterButton>
      </S.Content>
    </S.Container>
  );
};

export default Landing;
