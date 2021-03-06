import React from "react";

function TabButtons({ buttons, changeTab, activeTab }) {

  return (
    <div className="tab-buttons">
      {buttons.map((button, i) => {
        return (
          <button
            key={i}
            className={`${button === activeTab ? "tab-active" : ""} tab-button`}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
}

export default TabButtons;
