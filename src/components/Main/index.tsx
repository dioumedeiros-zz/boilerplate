import { Wrapper, Logo, Title, Description, Illustration } from './styles';

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, React, NextJS e Styled Components',
}) => (
  <Wrapper>
    <Logo
      src="/img/logo.svg"
      alt="Imagem de um átimi React Avançado e script ao lado"
    />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para a tela com código"
    />
  </Wrapper>
);

export default Main;
