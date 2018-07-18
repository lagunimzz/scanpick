import { LoginLayoutModule } from './login-layout.module';

describe('LoginLayoutModule', () => {
  let loginLayoutModule: LoginLayoutModule;

  beforeEach(() => {
    loginLayoutModule = new LoginLayoutModule();
  });

  it('should create an instance', () => {
    expect(loginLayoutModule).toBeTruthy();
  });
});
