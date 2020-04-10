import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { State } from '../redux';
import Login from './Login';
import { Theme } from '../styled/theme';
import Game from './Game';

interface Props {
  isAuthenticated: boolean;
}

const Header = styled.header`
  background-color: ${({ theme }: { theme: Theme }) => (theme.colors.primary)};
`;

const Title = styled.h1`
  color: white;
  margin: 0;
  text-align: center;
  padding: 0.5em;
  font-size: 1.5em;
  font-weight: bold;
`;

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 0 2em;
`;

const NavBar = styled.a`
  display: flex;
  justify-content: center;
`;

const NavLink = styled.a`
  display: inline-block;
  text-decoration: none;
`;

const Footer = styled.footer`
  text-align: center;
  margin-bottom: 2em;
`;

const Main = styled.main`
  margin-bottom: 2em;
`;

const MutedLink = styled.a`
  color: ${({ theme }: { theme: Theme }) => (theme.colors.muted)};
  text-decoration: none;

  &:hover {
    color: ${({ theme }: { theme: Theme }) => (theme.colors.text)};
    text-decoration: underline;
  }
`;

function App({ isAuthenticated }: Props) {
  return (
    <>
      <Header>
        <NavBar>
          <NavLink href="/">
            <Title>
              Agurk
            </Title>
          </NavLink>
        </NavBar>
      </Header>
      <Container>
        <Main>
          { isAuthenticated ? <Game /> : <Login /> }
        </Main>
        <Footer>
          <MutedLink target="_blank" href="https://github.com/SimonMueller/agurk-server/blob/master/README.md#rules">
            Read the rules
          </MutedLink>
        </Footer>
      </Container>
    </>
  );
}

const mapStateToProps = (state: State) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(mapStateToProps)(App);
