export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// REMOVE BEFORE DEPLOYING
	token: 'BQCcY54618sj3lInjDssR-DoMNcEz7VzGWbooqZGF6Dq9tWjpgL5Oq2SaiMtEk_g20aOrwlUjO3f6nVVpLBuCwAU4sislAcpOpNcAwnyux0Sj1VlbAT-ZLdXm-sv2Wyu_G14DKt6Aciun7ZRhoFO2ktpLosR',
}

const reducer = (state, action) => {
	console.log(action);

	switch(action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user
			}
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token
			}
		default:
			return state;
	}
}

export default reducer;