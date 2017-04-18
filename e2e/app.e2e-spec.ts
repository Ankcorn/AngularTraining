import { AngulartrainingPage } from './app.po';

describe('angulartraining App', () => {
  let page: AngulartrainingPage;

  beforeEach(() => {
    page = new AngulartrainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
