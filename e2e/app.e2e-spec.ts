import { NgApiClientPage } from './app.po';

describe('ng-api-client App', () => {
  let page: NgApiClientPage;

  beforeEach(() => {
    page = new NgApiClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
