import React from "react";
import mockData from "../__mock__/mockData.json";
import LunchRestaurants from "../type/Restaurant";


interface RestaurantListState {
    restaurants: LunchRestaurants[];
}

class RestaurantList extends React.Component<{}, RestaurantListState> {

    constructor(props: Readonly<{}> | {}) {
        super(props);
        this.state = {
            restaurants: mockData.map(it => {
                return new LunchRestaurants(it.category, it.name, it.distance, it.description, it.favorite);
            })
        };
    }

    render() {
        return (
            <>
                {
                    this.state.restaurants.map((it) => <div>{it.name.value}</div>)
                }
            </>
        );
    }
}

export default RestaurantList;