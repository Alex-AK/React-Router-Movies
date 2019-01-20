import React from 'react';
// import PropTypes from 'prop-types';

import Tab from './Tab';

const Tabs = props => {
  const printTabs = props.tabs.map(tab => (
    <Tab
      key={tab}
      tab={tab}
      changeSelected={props.changeSelected}
      selected={props.selected}
    />
  ));

  return <div className="tabs">{printTabs}</div>;
};

// Navigation.propTypes = {

// }

export default Tabs;
