class Distance {

    private _value: number;

    constructor(value: number) {
        this.validateDistance(value);
        this._value = value;
    }


    validateDistance(value: number) {
        if (value > 30) {
            throw new Error("거리가 너무 멀어요")
        }
    }

    get value(): Number {
        return this._value;
    }
}

export default Distance;