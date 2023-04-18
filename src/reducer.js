export const initialState = []


export const reducer = (state, action) =>  {
		switch (action.type) {
			case 'add-products': return action.payload.products;
			default: return state;
				
		}
}