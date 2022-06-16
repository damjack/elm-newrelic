import { init } from '../src/index';

test("call init with different configuration", () => {
  const init1 = {service: 'test-app', clientToken: 'XXX', applicationId: 'YYY'};
  const init2 = {service: 'test-app', clientToken: 'XXX', applicationId: 'YYY', env: 'development'};
  const testInit = jest.fn(args => init({service: args.service, clientToken: args.clientToken, applicationId: args.applicationId}));

  testInit(init1);
  testInit(init2);

  expect(testInit).toHaveBeenNthCalledWith(1, {service: 'test-app', clientToken: 'XXX', applicationId: 'YYY'});
  expect(testInit).toHaveBeenNthCalledWith(2, {service: 'test-app', clientToken: 'XXX', applicationId: 'YYY', env: 'development'});
});
