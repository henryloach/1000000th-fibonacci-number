function matrixMult(matrixA, matrixB) {
    const [
        [a,b],
        [c,d]
    ] = matrixA

    const [
        [e,f],
        [g,h]
    ] = matrixB

    return [
        [a*e + b*g, a*f + b*h],
        [c*e + d*g, c*f + d*h]
    ]
}

function matrixPower(base, power, acc = [[1n, 0n], [0n, 1n]]) {
    if (power === 0) return acc

    return (power % 2 === 0)
        ? matrixPower(matrixMult(base, base), power / 2, acc)
        : matrixPower(base, power - 1, matrixMult(acc, base))
}

function fibMatrix(n) {
    return matrixPower([[1n, 1n], [1n, 0n]], n)[0][1]
}

function fibTripples(n) {
    function aux(n) {
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
    return String(aux(n)[1])
}

export default fibTripples