/**

Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
 */
import {assert} from 'chai'

import findMultiplesSum from './findMultiplesSum'

describe('Multiples of 3 and 5', () => {
    it('should find the sum of all the multiples of 3 or 5 below 100', () => {
        const multipliers = [3, 5]
        const ceil = 1000
        const actual = findMultiplesSum(multipliers, ceil)

        const expected = 233168

        assert.equal(actual, expected)
    })
})
