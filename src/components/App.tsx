import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { State } from '../redux';
import Login from './Login';
import { Theme } from './styled/theme';
import Game from './Game';

interface Props {
  isAuthenticated: boolean;
}

const Header = styled.header`
  background-color: ${({ theme }: { theme: Theme }) => (theme.colors.primary)};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 2em;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  text-align: center;
  padding: 0.5em;

  &:hover {
    text-decoration: underline;
  }
`;

const NavTitle = styled(NavLink)`
  font-size: 1.5em;
  font-weight: bold;

  &:hover {
    text-decoration: none;
  }
`;

const Main = styled.main`
  margin-bottom: 2em;
`;

function App({ isAuthenticated }: Props) {
  return (
    <>
      <Header>
        <NavBar>
          <NavTitle href="/agurk-client">
            Agurk
          </NavTitle>
          <NavLink target="_blank" href="https://github.com/SimonMueller/agurk-server/blob/master/README.md#rules">
            Read the rules
          </NavLink>
        </NavBar>
      </Header>
      <Container>
        <Main>
          { isAuthenticated ? <Game /> : <Login /> }
        </Main>
      </Container>
    </>
  );
}

const mapStateToProps = (state: State) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(mapStateToProps)(App);
