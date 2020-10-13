import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '~/images/logo.svg';
import { Container, Content, Location, EnterButton } from './Landing.styles';

const Landing = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Goiânia</strong>
          <span>Goiás</span>
        </Location>

        <EnterButton to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </EnterButton>
      </Content>
    </Container>
  );
}

export default Landing;
