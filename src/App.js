import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useStateProviderValue } from './components/StateProvider';
import { conditionalExpression } from '@babel/types';

const spotify = new SpotifyWebApi();

function App() {

	const [token, setToken] = useState(null)
	const [{ user }, dispatch] = useStateProviderValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;

		if (_token) {
			setToken(_token)

			spotify.setAccessToken(_token);
			
			spotify.getMe().then(user => {
				dispatch({
					type: 'SET_USER',
					user
				})
			})
		}
		console.log('I HAVE A TOKEN >>> ', token)
	}, []);
	console.log('I am a ', user)
	return (
		<div className="app">
			{
				token ? (
					<Player />
				) : (
					<Login />
				)
			}
		</div>
	);
}

export default App;
