import React, { ReactNode } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { GameState } from './redux/reducers';

interface Props {
  children: ReactNode[] | ReactNode;
  isAuthenticated: boolean;
}

function AuthenticatedRoute({
  children, isAuthenticated, ...rest
}: Props & RouteProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route {...rest}>
      { isAuthenticated ? children : <Redirect to="/" /> }
    </Route>
  );
}

const mapStateToProps = (state: GameState) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(mapStateToProps)(AuthenticatedRoute);
