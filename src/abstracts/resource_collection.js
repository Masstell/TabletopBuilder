import Resource from "./resource";

export default class ResourceCollection {
    constructor (config = {}) {
        let {
            resourceClass = Resource,
            gameObjectProps: {
                scene,
                x,
                y 
            },
            id = null
        } = config;

        this._config = config;
        this._resourceClass = resourceClass;

        if (!scene) throw 'scene is not defined in resource!'
        this._scene = scene;

        this._x = x;
        this._y = y;

        this._resources = [];

        // this intentionally assigns to the 'non-private' id so we autogenerate the id first time if one was not defined in config
        this.id = id;
    }

    get config () { return this._config };

    get id () { return this._id; }

    set id (id) { this._id = id || Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1)) + 1; }

    get resourceClass () { return this._resourceClass; }

    get scene () { return this._scene; }

    get x () { return this._x; }

    get y () { return this._y; }

    get resources () { return this._resources; }

    get amount () { return this._resources.length }

    get gameObject () { throw 'undefined in abstract class: ResourceCollection'; }

    generateResources (amount = 1, resourceConfig = {}) {
        let ResourceClass = this.resourceClass;
        let _resourceConfig = {
            gameObjectProps: {
                scene: this.scene,
                x: this.x,
                y: this.y
            },
            ...resourceConfig
        };
        let resources = [];

        for (let i = 0; i < amount; i++) {
            resources.push(new ResourceClass(_resourceConfig));
        }

        return resources;
    }

    removeAmountOfResources (amount = 1) {
        let actualAmount = amount > this.amount ? this.amount : amount;

        let removedResources = this._resources.splice(0, actualAmount);

        return removedResources;
    }

    addToResources (resources = []) {
        let _resourcesAsArray = Array.isArray(resources) ? resources : [ resources ];

        this._resources = _.concat(this._resources, _resourcesAsArray);
    }
}