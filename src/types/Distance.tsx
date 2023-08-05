class Distance {

    constructor(value: number) {
        this.validateDistance(value);
        this._value = value;
    }

    private _value: number;

    get value(): number {
        return this._value;
    }

    validateDistance(value: number) {
        if (value > 30) {
            throw new Error("거리가 너무 멀어요")
        }
    }
}

export default Distance;