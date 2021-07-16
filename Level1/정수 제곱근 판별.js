const solution = (n) => {
    const compare = Math.sqrt(n);
    return compare.toString().includes('.') ? -1 : (Math.sqrt(n) + 1) ** 2;
}
