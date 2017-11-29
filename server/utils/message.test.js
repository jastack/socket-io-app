var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'James';
    var text = 'This is the test text';

    var res = generateMessage(from, text);
    // assert from match
    expect(res).toMatchObject({from, text});
    // assert createdAt is a number
    expect(typeof res.createdAt).toBe('number');

  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var lat = 37.8948275;
    var lng = -122.29594039999999;
    var from = 'James';
    var url = `https://www.google.com/maps?q=${lat},${lng}`

    var res = generateLocationMessage(from, lat, lng);
    expect(res).toMatchObject({
      from,
      url
    })

    expect(typeof res.createdAt).toBe('number');
  });
});
