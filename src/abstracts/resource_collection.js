export default class ResourceCollection {
    constructor (config = {}) {
        let {
            id = null
        } = config;

        this._config = config;

        // this intentionally assigns to the 'non-private' id so we autogenerate the id first time if one was not defined in config
        this.id = id;
    }

    get config () { return this._config };

    get id () { return this._id; }

    set id (id) { this._id = id || Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1)) + 1; }
}