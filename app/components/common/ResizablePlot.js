import React from 'react';
import Plot from 'react-plotly.js';
import PropTypes from 'prop-types';

const ResizablePlot = props => (
  <Plot
    data={props.data}
    layout={props.layout}
    useResizeHandler
    style={props.style}
  />
);

ResizablePlot.propTypes = {
  data: PropTypes.array.isRequired,
  layout: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  style: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

ResizablePlot.defaultProps = {
  layout: { autoresize: true, title: 'No title given' },
  style: { width: '100%', height: '100%' },
};

export default ResizablePlot;
