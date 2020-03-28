import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Lobby from './Lobby';
import { State } from './redux';
import Login from './Login';

interface Props {
  isAuthenticated: boolean;
}

const Container = styled.div`
  max-width: 50rem;
  margin: auto;
  padding: 2rem;
`;

function App({ isAuthenticated }: Props) {
  return (
    <Container className="App">
      <header className="App-header">
        <h1>
          Agurk
        </h1>
      </header>

      <main>
        { isAuthenticated ? <Lobby /> : <Login /> }
      </main>
    </Container>
  );
}

const mapStateToProps = (state: State) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(mapStateToProps)(App);
