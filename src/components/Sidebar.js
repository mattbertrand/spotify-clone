import React from 'react';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import '../css/Sidebar.css';
import { useStateProviderValue } from './StateProvider';

function Sidebar() {
	const [{ playlists }, dispatch] = useStateProviderValue();
	return (
		<div className="sidebar">
			<img 
			className="sidebar__logo"
			src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol-768x234.jpg"
			alt="spotify-logo"
			/>
			<SidebarOption Icon={HomeIcon} title="Home" />
			<SidebarOption Icon={SearchIcon} title="Search" />
			<SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
			<strong className="sidebar__title">PLAYLISTS</strong>
			<hr />

			{playlists?.items?.map(playlist => (
				<SidebarOption title={playlist.name}/>
			))}
		</div>
	)
}

export default Sidebar
