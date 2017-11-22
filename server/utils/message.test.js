var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'James';
    var text = 'This is the test text';

    var res = generateMessage(from, text);
    // assert from match
    expect(res).toMatchObject({from, text})
    // assert createdAt is a number
    expect(typeof res.createdAt).toBe('number');

  });
});
