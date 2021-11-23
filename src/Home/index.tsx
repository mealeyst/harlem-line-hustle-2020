import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Title from '../theme/typography/Title';
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
      <div className='content'>
        <Title>HARLEM LINE HUSTLE</Title>
        <div className='toutsTop'>
          <Tout
            status='In Progress'
            title='Project 1'
          />
          <Logo />
          <Tout
            type='topRight'
            status='In Progress'
            title='Project 2'
          />
        </div>
        <div className='toutsBottom'>
          <Tout
            type='bottomLeft'
            title='Blog Post 1'
          />
          <Tout
            type='bottomCenter'
            title='Blog Post 2'
          />
          <Tout
            type='bottomRight'
            title='Blog Post 3'
          />
        </div>
      </div>
    </section>
  )
}

const StyledHome = styled(Home)`
  max-width: 1440px;
  margin: 5.5rem auto 0;
  position: relative;
  z-index: 0;

  ${Window} {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
  }

  .content {
    display: grid;
    grid-template-rows: 5.5rem 22.5rem 24.5rem;
    column-gap: 0.625rem;
    row-gap: 0.625rem;
    position: relative;
    z-index: 2;
    padding-bottom: 3.5%;
  }

  .toutsTop {
    display: grid;
    grid-template-columns: 37.5% 15% 37.5%;
    align-items: center;
    justify-content: space-between;
    column-gap: 2rem;
    padding: 0 2.7%;
  }
  .toutsBottom {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 33% 33% 33%;
    column-gap: 0.625rem;
    row-gap: 0.625rem;
    padding: 0 2.7%;
  }

  ${Title} {
    align-items: center;
    margin-top: 1rem;
  }

  ${Logo} {

  }
`

export default StyledHome