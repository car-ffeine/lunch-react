import React from 'react';
import {render, screen} from '@testing-library/react';
import RestaurantList from '../components/RestaurantList';
import mockData from "../data/mockData.json";

test('전체 음식점 리스트를 보여준다', () => {
    const restaurantList: string[] = mockData.map((restaurant) => restaurant.name);
    // @ts-ignore
    render(<RestaurantList restaurants={restaurantList}/>);
    restaurantList.forEach((it) => {
        const linkElement = screen.getByText(it);
        expect(linkElement).toBeInTheDocument();
    })
})
