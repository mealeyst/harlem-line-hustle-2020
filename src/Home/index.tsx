import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Tout from './Tout';
import Window from './Window';

export interface HomeProps {
  className?: string
}

export const Home: FunctionComponent<HomeProps> = ({className}) => {
  return (
    <section className={className}>
      <Window />
      <Tout className='topLeft' />
      <Logo />
      <Tout className='topRight' type='topRight' />
    </section>
  )
}

const StyledHome = styled(Home)`
  max-width: 1440px;
  padding-top: 5.5rem;
  margin: 0 auto;
  position: relative;
  z-index: 0;

  ${Window} {
    width: 100%;
  }

  ${Logo} {
    width: 15%;
    position: absolute;
    left: 50%;
    top: 275px;
    transform: translateX(-50%);
  }

  .topLeft {
    left: 2.7%;
    top: 200px;
    position: absolute;
    width: 37.5%;
    max-width: 540px;
  }
  .topRight{
    right: 2.7%;
    top: 200px;
    position: absolute;
    width: 37.5%;
    max-width: 540px;
  }
`

export default StyledHome