import MainMenuState from '../../../src/states/main-menu';

describe('MainMenuState', () => {
    let mainMenuState;

    describe('constructor()', () => {
        it('generates an object', () => {
            mainMenuState = new MainMenuState(game);

            assert.isObject(mainMenuState);
        });
    });
});
