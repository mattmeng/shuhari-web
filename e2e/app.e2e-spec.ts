import { ShuhariWebPage } from './app.po';

describe('shuhari-web App', () => {
  let page: ShuhariWebPage;

  beforeEach(() => {
    page = new ShuhariWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
