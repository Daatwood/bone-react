import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as actions from './actions';
import _ from 'underscore'

export const mapStateToProps = () => (p) => ({...p});

export const RouterView = (view, propFunc=mapStateToProps) => {
  return connect(propFunc, actions)(withRouter(view));
}

export const StateView = (view, propFunc=mapStateToProps) => {
  return connect(propFunc, actions)(view);
}