import asianImage from "../assets/images/category-asian.png";
import chineseImage from "../assets/images/category-chinese.png";
import koreanImage from "../assets/images/category-korean.png";
import japaneseImage from "../assets/images/category-japanese.png";
import westernImage from "../assets/images/category-western.png";
import etcImage from '../assets/images/category-etc.png';

class Category {

    constructor(value: string) {
        this.validateNameLength(value);
        this._value = value;
    }

    private _value: String;

    get value(): string {
        return this._value.toString();
    }

    get image(): string {
        switch (this._value) {
            case "asian":
                return asianImage;
            case "korean":
                return koreanImage;
            case "japanese":
                return japaneseImage;
            case "western":
                return westernImage;
            case "chinese":
                return chineseImage;
            default:
                return etcImage;
        }
    }

    validateNameLength(value: string) {
        if (value.length > 20) {
            throw new Error("카테고리 이름이 너무 길어요")
        }
    }
}


export default Category;