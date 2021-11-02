import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Tout from './Tout';
import Window from './Window';

export interface HomeProps {
  className?: string
}

export const Home: FunctionComponent<HomeProps> = ({className}) => {
  return (
    <section className={className}>
      <Window />
      <Tout />
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

  ${Tout} {
    left: 40px;
    top: 200px;
    position: absolute;
    width: 37.5%;
    max-width: 540px;
  }
`

export default StyledHome