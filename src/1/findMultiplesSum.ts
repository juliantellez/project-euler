const divisibleBy = (divisor: number) => (dividend: number) => dividend % divisor === 0;

const findMultiplesSum = (multipliers: number[], ceil: number): number => {
    const [firstMultiplier, secondMultiplier] = multipliers

    let total = 0

    for(let index = 1; index < ceil; index++) {
        if(
            divisibleBy(firstMultiplier)(index) ||
            divisibleBy(secondMultiplier)(index)
        ) {
            total += index
        }
    }

    return total
}

export default findMultiplesSum
