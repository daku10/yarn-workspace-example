import { mySplit } from '@package-a'

export const mySplitSquared = () => {
  return mySplit().map((elem) => elem.map((e) => e * 2))
}
