import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import ResizablePlot from './common/ResizablePlot';

const Dashboard = props => (
  <div className="container">
    <Row>
      <ResizablePlot data={props.dashboard.data} layout={{ title: 'Sample Plot' }} />
    </Row>
    <br />
    <button onClick={props.switchPlot}>
      <i className="fa fa-toggle-right" /> Switch Plots
    </button>
  </div>
);

Dashboard.propTypes = {
  switchPlot: PropTypes.func.isRequired,
  dashboard: PropTypes.shape({
    type: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
  }).isRequired,
};

export default Dashboard;
