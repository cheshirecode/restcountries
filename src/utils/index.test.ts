import { expect } from 'chai';
import { subtractFromTotal, isValidHTTPScheme, getURI } from './';
import consts from './const';

describe('subtractFromTotal()', () => {
  it('should return correct subtraction', () => {
    let arr: unknown[] = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(subtractFromTotal(arr)).to.be.an('array').that.is.empty;
    arr = ['1em'];
    expect(subtractFromTotal(arr)).to.be.an('array').to.have.members(['calc(100% - 1em)']);
  });
});

describe('isValidHTTPScheme()', () => {
  it('should return true for valid scheme: http, https or protocol-relative', () => {
    expect(isValidHTTPScheme('http://')).to.be.eq(true);
    expect(isValidHTTPScheme('hTTPs://')).to.be.eq(true);
    expect(isValidHTTPScheme('//')).to.be.eq(true);
  });

  it('should return false for invalid or any other schemes', () => {
    expect(isValidHTTPScheme('http//')).to.be.eq(false);
    expect(isValidHTTPScheme('hTTPs')).to.be.eq(false);
    expect(isValidHTTPScheme('abc')).to.be.eq(false);
  });
});

describe('getURI()', () => {
  it('should return a valid URL', () => {
    expect(getURI('https://foo.com')).to.be.eq('https://foo.com/');
    expect(getURI('https://foo.com/test', ['x', 'y'])).to.be.eq(
      `https://foo.com/test?fields=${encodeURIComponent(`x${consts.FIELDS_SEPARATOR}y`)}`,
    );
    expect(getURI('foo.com/?bar=1', [], 'http://')).to.be.eq('http://foo.com/?bar=1');
    expect(getURI('/test')).to.be.eq(`${consts.API_BASE_URL}/test`);
  });

  it('should return empty string otherwise', () => {
    expect(getURI('/test', [], '')).to.be.eq('');
  });
});
