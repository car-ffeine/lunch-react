import Name from "./Name";
import Category from "./Category";
import Distance from "./Distance";

export interface Restaurant {
    "category": Category;
    "name": Name;
    "distance": Distance;
    "description": string;
    "favorite": boolean
}

class LunchRestaurant implements Restaurant {
    readonly category: Category;
    readonly name: Name;
    readonly distance: Distance;
    readonly description: string;
    readonly favorite: boolean;

    constructor(category: string, name: string, distance: number, description: string, favorite: boolean) {
        this.category = new Category(category);
        this.distance = new Distance(distance);
        this.description = description;
        this.favorite = favorite;
        this.name = new Name(name);
    }
}

export default LunchRestaurant;

