export const fibExponential = n => {
    if (n === 0) return 0
    if (n === 1) return 1
    return fibExponential(n - 1) + fibExponential(n - 2)
}

export const fibLinear = n => {
    let a = 0n
    let b = 1n

    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b]
    }

    if ( n === 0 ) return a
    return b
}

export const fibLogarithmic = n => {
    const aux = n => {
        if (n === 0) return [1n, 0n, 1n]
        if (n === 1) return [0n, 1n, 1n]
        if (n % 2 === 0) {
            const [a, b, c] = aux(n / 2)
            return [a * a + b * b, a * b + b * c, b * b + c * c]
        }
        if (n % 2 === 1) {
            const [_, b, c] = aux(n - 1)
            return [b, c, b + c]
        }
    }
    return aux(n)[1]
}