import {useContext} from 'react';
import {Restaurant} from '../types/Restaurant';
import {GlobalContext} from "../containers/GlobalProvider";


const useRestaurants = (init: Restaurant[]) => {
    const globalState = useContext(GlobalContext);
    const deleteItem = (name: string) => {
        let restaurants = globalState.restaurants;
        console.log(restaurants)
        let restaurant = globalState.restaurant;
        console.log(restaurant)
        const updatedList = globalState.restaurants.filter(it => it.name.value !== name);
        globalState.setRestaurants(updatedList);
    }
    return {init, deleteItem};
};
export default useRestaurants;