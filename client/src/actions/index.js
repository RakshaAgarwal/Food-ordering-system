export const addToCart = (menuItem) => {
    return {
        type:"AddCART",
        payload: menuItem
    }
}