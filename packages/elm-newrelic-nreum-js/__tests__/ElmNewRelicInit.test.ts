import { init } from '../src/index';

test("call init with different configuration", () => {
  const customInit = {beacon: "xxx.com"};
  const testInit = jest.fn(args => init({beacon: args.beacon}));

  testInit(customInit);

  expect(testInit).toHaveBeenNthCalledWith(1, {sa: 1, beacon: "xxx.com"});
});
