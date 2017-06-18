import BootState from '../../../src/states/boot';

describe('BootState', () => {
    let bootState;

    describe('constructor()', () => {
        it('generates an object', () => {
            bootState = new BootState(game);

            assert.isObject(bootState);
        });
    });
});
