import { expect } from "chai";
import { App } from "../src";

describe('App', () => {

  let app: App;

  beforeEach(() => {
    app = new App();
  });

  it('adds numbers', () => {
    // Try setting a breakpoint here:
    expect(app.add(1, 2)).to.equal(3);
  });

});
