import React from "react";
import avatar from "../../assets/avatar.jpg";
import "./SideMenu.css";

function SideMenu() {
  return (
    <div className="side">
      <div className="menu_header">
        <img src={avatar} />
        <div className="header_text">
          <h4>Do-it</h4>
          <h3>Fatma El-4armat</h3>
        </div>
      </div>
      <div className="tasks">
        <i class="fa-regular fa-calendar"></i>
        <div className="tasks__cats">
          <h3>Today Tasks</h3>
          <div className="tasks__cat">
            <div className="pink circle"></div>
            <h4>Personal</h4>
          </div>
          <div className="tasks__cat">
            <div className="blue circle"></div>
            <h4>Freelance</h4>
          </div>
          <div className="tasks__cat">
            <div className="yellow circle"></div>
            <h4>Work</h4>
          </div>
          <div className="tasks__cat">
            <i class="fa-solid fa-plus"></i>
            <h4>Add Filter</h4>
          </div>
        </div>
      </div>
      <div className="scheduled">
        <i class="fa-regular fa-calendar-days"></i>
        <h3>Scheduled Tasks</h3>
      </div>
      <div className="setting">
        <i class="fa-solid fa-gear"></i>
        <h3>Settings</h3>
      </div>
    </div>
  );
}

export default SideMenu;
