import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import * as DashboardActions from '../actions/dashboard';

const mapStateToProps = state => ({ dashboard: state.dashboard });

const mapDispatchToProps = dispatch => bindActionCreators(DashboardActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
