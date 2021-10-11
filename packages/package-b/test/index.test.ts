import { mySplitSquared } from '../src'

it('should be passed', () => {
  expect(mySplitSquared()).toStrictEqual([
    [2, 4, 6],
    [8, 10, 12],
    [14, 16, 18],
  ])
})
