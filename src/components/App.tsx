import React from 'react';
import { connect } from 'react-redux';
import { Container, Box } from '@material-ui/core';
import { State } from '../redux/root.reducer';
import Login from './Login';
import Game from './Game';
import Header from './Header';

interface Props {
  isAuthenticated: boolean;
}

function App({ isAuthenticated }: Props) {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="md">
          <Box paddingTop={2}>
            { isAuthenticated ? <Game /> : <Login /> }
          </Box>
        </Container>
      </main>
    </>
  );
}

const mapStateToProps = (state: State) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(mapStateToProps)(App);
