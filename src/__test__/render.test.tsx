import React from 'react';
import {render, screen} from '@testing-library/react';
import RestaurantList from '../component/RestaurantList';
import mockData from "../__mock__/mockData.json";

test('전체 음식점 리스트를 보여준다', () => {
    const restaurants: string[] = mockData.map((restaurant) => restaurant.name);
    console.log(restaurants)
    render(<RestaurantList/>);
    restaurants.forEach((it) => {
        const linkElement = screen.getByText(it);
        expect(linkElement).toBeInTheDocument();
    })
})
