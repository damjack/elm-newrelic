import { init } from '../src/index';

test("call init with different configuration", () => {
  const init = {clientToken: 'XXX', applicationId: 'YYY'};
  const testInit = jest.fn(args => init({clientToken: args.clientToken, applicationId: args.applicationId}));

  testInit(init);

  expect(testInit).toHaveBeenNthCalledWith(1, {clientToken: 'XXX', applicationId: 'YYY'});
});
