const evenFibonacciSum = (ceil: number): number => {
    let prev = 1
    let current = 1
    let next = 0
    let total = 0

    while(next < ceil) {
        next = prev + current

        if (next % 2 === 0) {
            total += next
        }
        
        prev = current
        current = next
    }

    return total
}

export default evenFibonacciSum
