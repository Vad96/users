import React, { useState } from "react";
import Tab from "./Tab";
import TabButtons from "./TabButtons";

function Tabs(props) {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  let content;
  let buttons = [];
  return (
    <div>
      {React.Children.map(props.children, (child) => {
        buttons.push(child.props.label);
        if (child.props.label === activeTab) content = child.props.children;
      })}

      <TabButtons
        activeTab={activeTab}
        buttons={buttons}
        changeTab={changeTab}
      />
      <div className="tab-content">{content}</div>
    </div>
  );
}

export default Tabs;
