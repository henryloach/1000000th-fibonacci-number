function matrixMult(matrixA, matrixB) {
    const [
        [a,b,c],
        [d,e,f],
        [g,h,i]
    ] = matrixA

    const [
        [j,k,l],
        [m,n,o],
        [p,q,r]
    ] = matrixB

    return [
        [a*j + b*m + c*p, a*k + b*n + c*q, a*l + b*o + c*r],
        [d*j + e*m + f*p, d*k + e*n + f*q, d*l + e*o + f*r],
        [g*j + h*m + i*p, g*k + h*n + i*q, g*l + h*o + i*r]
    ]
}

function matrixPower(base, power, acc = [[1n, 0n, 0n], [0n, 1n, 0n], [0n, 0n, 1n]]) {
    if (power === 0) return acc

    return (power % 2 === 0)
        ? matrixPower(matrixMult(base, base), power / 2, acc)
        : matrixPower(base, power - 1, matrixMult(acc, base))
}

function tribMatrix(n) {
    return matrixPower([[1n, 1n, 1n], [1n, 0n, 0n], [0n, 1n, 0n]], n)[0][2]
}