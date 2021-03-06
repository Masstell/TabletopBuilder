export default class Resource {
    constructor (config = {}) {
        let {
            gameObjectProps: {
                scene, 
                x, 
                y 
            },
            id
        } = config;

        this._config = config;

        if (!scene) throw 'scene is not defined in resource!';
        this._scene = scene;

        this._x = x;
        this._y = y;

        // this intentionally assigns to the 'non-private' id so we autogenerate the id first time if one was not defined in config
        this.id = id;
    }

    get config () { return this._config };

    get id () { return this._id; }

    set id (id) { this._id = id || Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1)) + 1; }

    get scene () { return this._scene; }

    get x () { return this._x; }

    get y () { return this._y; }

    get gameObject () { throw 'undefined in abstract class: Resource'; }
}