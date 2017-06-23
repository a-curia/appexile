import { AppexilePage } from './app.po';

describe('appexile App', () => {
  let page: AppexilePage;

  beforeEach(() => {
    page = new AppexilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
