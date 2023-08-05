class Name {

    private _value: String;

    constructor(value: string) {
        this.validateNameLength(value);
        this._value = value;
    }


    validateNameLength(value: string) {
        if (value.length > 10) {
            throw new Error("이름이 너무 길어요")
        }
    }

    get value(): String {
        return this._value;
    }
}

export default Name;