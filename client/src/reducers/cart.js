const initialCart = []

const addToCart =  (state=initialCart, action)=>{
   if(action.type === 'AddCART') return [...state, action.payload];
   else return state
}

export default addToCart;