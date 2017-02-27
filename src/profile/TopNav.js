import React, { Component } from 'react'

class TopNav extends Component{
        render() {
                return <nav className="top-nav clearfix">
                <div className="row">
                    <span className="icon-logo"></span>
                    <ul className="top-nav_list">
                        <li className="top-nav_list-item">
                            <a href="#">
                                <span className="item-number"><span className="icon-phs"></span>80%</span>
                                <p className="item-text">PHS</p>
                            </a>
                        </li>
                        <li className="top-nav_list-item">
                            <a href="#">
                                <span className="item-number"><span className="icon-applications"></span>16</span>
                                <p className="item-text">Applications</p>
                            </a>
                        </li>
                        <li className="top-nav_list-item">
                            <a href="#">
                                <span className="item-number"><span className="icon-infrastructure"></span>24</span>
                                <p className="item-text">Infrastructure</p>
                            </a>
                        </li>
                        <li className="top-nav_list-item">
                            <a href="#">
                                <span className="item-number"><span className="icon-network"></span>12</span>
                                <p className="item-text">Network</p>
                            </a>
                        </li>
                        <li className="top-nav_list-item">
                            <a href="#">
                                <span className="item-number"><span className="icon-storage"></span>15</span>
                                <p className="item-text">Storage</p>
                            </a>
                        </li>
                    </ul>
                    <div className="profile-controls">
                        {
                                // <a className="profile-controls_search" href="#"><span className="icon-search"></span></a>
                        }
                        <a className="profile-controls_notifications" href="#">
                            <span className="icon-notification"></span>
                            <div className="notifications-window">
                                <div className="notifications_triangle">
                                    <div className="triangle-white"></div>
                                </div>
                                <div className="notifications-window_item">
                                    <img src="img/logos/amazon.png" alt="" className="notification_image" />
                                    <div className="notification_descr">
                                        <span className="notification_name">New Update for <b>New Relic</b></span>
                                        <span className="notification_time">2 min ago</span>
                                    </div>
                                </div>
                                <div className="notifications-window_item">
                                    <img src="img/logos/amazon.png" alt="" className="notification_image" />
                                    <div className="notification_descr">
                                        <span className="notification_name"><strong>Yedidya</strong> fixed the event: <b>Networking Availability</b></span>
                                        <span className="notification_time">10 min ago</span>
                                    </div>
                                </div>
                                <div className="notifications-window_item">
                                    <img src="img/logos/amazon.png" alt="" className="notification_image" />
                                    <div className="notification_descr">
                                        <span className="notification_name"><b>Site Maintenance</b> <strong>between 10PM-12AM</strong></span>
                                        <span className="notification_time">17 min ago</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="profile-controls_avatar dropdown-button" href="#" data-activates="profileDropdown" data-beloworigin="true">
                            <div className="user-initials user-initials-red">av</div>
                        </a>
                        {
                                // <!-- Profile Dropdown Structure -->
                        }
                        <ul id="profileDropdown" className="dropdown-content">
                            <li><a href="#!">User profile</a></li>
                            <li><a href="#!">Team</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <ul className="top-nav_menu">
                        <li className="top-nav_menu-item active"><a href="app_control-center.html">Control Center</a></li>
                        <li className="top-nav_menu-item"><a href="app_sensors.html">Sensors</a></li>
                        <li className="top-nav_menu-item"><a href="app_decisions.html">Decisions</a></li>
                    </ul>
                </div>
                        </nav>
        }
}

export default TopNav
