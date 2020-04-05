import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { State } from './redux';
import Login from './Login';
import { Theme } from './styled/theme';
import Game from './Game';

interface Props {
  isAuthenticated: boolean;
}

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 0 2em;
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
    text-decoration: underline;
  }
`;

function App({ isAuthenticated }: Props) {
  return (
    <Container className="App">
      <header className="App-header">
        <h1>
          Agurk
        </h1>
      </header>
      <Main>
        { isAuthenticated ? <Game /> : <Login /> }
      </Main>
      <Footer>
        <MutedLink href="https://github.com/SimonMueller/agurk-server/blob/master/README.md#rules">
          Read the rules
        </MutedLink>
      </Footer>
    </Container>
  );
}

const mapStateToProps = (state: State) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(mapStateToProps)(App);
