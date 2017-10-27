import { DerashTrainingPage } from './app.po';

describe('derash-training App', () => {
  let page: DerashTrainingPage;

  beforeEach(() => {
    page = new DerashTrainingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
