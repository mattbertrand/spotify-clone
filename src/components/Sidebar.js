import React from 'react';
import SidebarOption from './SidebarOption';
import '../css/Sidebar.css';

function Sidebar() {
	return (
		<div className="sidebar">
			<img 
			className="sidebar__logo"
			src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol-768x234.jpg"
			alt="spotify-logo"
			/>
			<SidebarOption title="Home" />
			<SidebarOption title="Search" />
			<SidebarOption title="Your Library" />
		</div>
	)
}

export default Sidebar
