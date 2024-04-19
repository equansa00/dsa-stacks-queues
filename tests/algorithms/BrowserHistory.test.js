const BrowserHistory = require('../../src/algorithms/BrowserHistory');

describe('BrowserHistory', () => {
    let history;

    beforeEach(() => {
        history = new BrowserHistory();
    });

    test('visit', () => {
        history.visit('google.com');
        expect(history.backStack.peek()).toBe('google.com');
        expect(history.forwardStack.isEmpty()).toBe(true);
    });

    test('back', () => {
        history.visit('google.com');
        history.visit('github.com');
        expect(history.back()).toBe('google.com');
        expect(history.forwardStack.peek()).toBe('github.com');
    });

    test('back with no history', () => {
        expect(() => {
            history.back();
        }).toThrow('No back history');
    });

    test('forward', () => {
        history.visit('google.com');
        history.visit('github.com');
        history.back();
        expect(history.forward()).toBe('github.com');
        expect(history.backStack.peek()).toBe('github.com');
    });

    test('forward with no history', () => {
        expect(() => {
            history.forward();
        }).toThrow('No forward history');
    });
});
