// LunchApp.tsx
import React from 'react';
import RestaurantList from '../components/RestaurantList';
import mockData from "../data/mockData.json";
import LunchRestaurant from '../types/Restaurant';
import Modal from '../components/Modal';
import useRestaurants from '../hooks/useRestaurants';
import HeaderComponent from "../components/Header";

function LunchApp() {
    const {init} = useRestaurants(mockData.map(it => new LunchRestaurant(it.category, it.name, it.distance, it.description, it.favorite)));

    return (
        <>
            <HeaderComponent/>
            <RestaurantList restaurants={init}/>
            <Modal/>
        </>
    );
}

export default LunchApp;
