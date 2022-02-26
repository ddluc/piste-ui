import { debounce } from './index'; 

// Tell Jest to mock all timeout functions
jest.useFakeTimers();

describe('debounce', () => {
    let func: jest.Mock;
    let debouncedFunc: Function;
    beforeEach(() => {
        func = jest.fn();
    });
    it('should execute just once', () => {
        debouncedFunc = debounce(func, 1000);
        for (let i = 0; i < 100; i++) {
            debouncedFunc();
        }
        // Fast-forward time
        jest.runAllTimers();
        expect(func).toBeCalledTimes(1);
    });
    it('should execute the leading call', () => {
      const leading = true; 
      debouncedFunc = debounce(func, 1000, leading);
      for (let i = 0; i < 100; i++) {
          debouncedFunc();
      }
      // Fast-forward time
      jest.runAllTimers();
      expect(func).toBeCalledTimes(1);
  });
});