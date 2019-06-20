import ResourceCollection from '../abstracts/resource_collection';
import Chip from './chip';

export default class Wallet extends ResourceCollection {
    constructor (config) {
        let _config = {
            resourceClass: Chip,
            ...config
        };

        super(_config);
    }
}