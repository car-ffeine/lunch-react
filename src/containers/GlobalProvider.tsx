import React, {useState} from "react";
import {Restaurant} from "../types/Restaurant";
import Category from "../types/Category";
import Name from "../types/Name";
import Distance from "../types/Distance";

export interface GlobalState {
    modalOpen: boolean;
    setModalOpen: (value: boolean) => void;
    restaurants: Restaurant[];
    setRestaurants: (value: Restaurant[]) => void;
    restaurant: Restaurant;
    setRestaurant: (value: Restaurant) => void;
}

const defaultRestaurant: Restaurant = {
    category: new Category(""),
    name: new Name(""),
    distance: new Distance(0),
    description: "",
    favorite: false
}

export const GlobalContext = React.createContext<GlobalState>({
    modalOpen: false,
    setModalOpen: () => {
    },
    restaurants: [],
    setRestaurants: () => {
    },
    restaurant: defaultRestaurant,
    setRestaurant: () => {
    }
});

interface GlobalProviderProps {
    children: React.ReactNode;
}

function GlobalProvider({children}: GlobalProviderProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [restaurant, setRestaurant] = useState(defaultRestaurant);
    const state = {
        modalOpen,
        setModalOpen,
        restaurants,
        setRestaurants,
        restaurant,
        setRestaurant,
    };

    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;
