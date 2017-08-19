import { FreelancerareaPage } from './app.po';

describe('freelancerarea App', () => {
  let page: FreelancerareaPage;

  beforeEach(() => {
    page = new FreelancerareaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
