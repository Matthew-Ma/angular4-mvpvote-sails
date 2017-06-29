import { MvpvotePage } from './app.po';

describe('mvpvote App', () => {
  let page: MvpvotePage;

  beforeEach(() => {
    page = new MvpvotePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
