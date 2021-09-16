import { expect } from 'chai';
import { subtractFromTotal } from './';

describe('subtractFromTotal()', () => {
  it('should return correct subtraction', () => {
    let arr: unknown[] = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(subtractFromTotal(arr)).to.be.an('array').that.is.empty;
    arr = ['1em'];
    expect(subtractFromTotal(arr)).to.be.an('array').to.have.members(['calc(100% - 1em)']);
  });
});
