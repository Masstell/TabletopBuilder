export default class Resource {
    constructor (id) {
        this.id = id;
    }

    get id () { return this._id; }

    set id (id) { this._id = id || Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1)) + 1; }
}