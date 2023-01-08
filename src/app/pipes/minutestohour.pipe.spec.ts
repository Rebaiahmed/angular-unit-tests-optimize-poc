import { MinutestohourPipe } from './minutestohour.pipe';
const pipe = new MinutestohourPipe();

describe('MinutestohourPipe', () => {
  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });

  it('transform minutes to hours and minutes string', () => {
    const testData = {
        1: '1 minute',
        30: '30 minutes',
        60: '1 hour',
        90: '1 hour and 30 minutes',
        97: '1 hour and 37 minutes',
        120: '2 hours',
        121: '2 hours and 1 minute',
        131: '2 hours and 11 minutes'
    };

    Object.keys(testData).forEach((key) => {
        expect(pipe.transform(key)).toBe(testData[key]);
    });
  });
});
