import { InheritCodeNotWorkPage } from './app.po';

describe('inherit-code-not-work App', () => {
  let page: InheritCodeNotWorkPage;

  beforeEach(() => {
    page = new InheritCodeNotWorkPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
