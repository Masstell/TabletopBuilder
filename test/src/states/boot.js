import {describe, it} from 'mocha';
import chai from 'chai';
import env from '../../env';
import BootState from '../../../src/states/boot';

const assert = chai.assert;

env.gameReady.then((game) => {
    describe('BootState', () => {
        let bootState;

        describe('constructor()', () => {
            it('generates an object', () => {
                bootState = new BootState(game);

                assert.isObject(bootState);
            });
        });
    });
});
