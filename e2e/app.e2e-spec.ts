import { ProxybrokerUiPage } from './app.po';

describe('proxybroker-ui App', () => {
  let page: ProxybrokerUiPage;

  beforeEach(() => {
    page = new ProxybrokerUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
