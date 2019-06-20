import ResourceCollection from '../abstracts/resource_collection';
import Chip from './chip';

export default class Bank extends ResourceCollection {
    constructor (config) {
        let _config = {
            resourceClass: Chip,
            ...config
        };

        super(_config);
    }

    removeAmountOfResources (amount = 1) {
        return this.generateResources(amount);
    }
}