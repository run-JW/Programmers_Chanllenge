function solution(sizes) {
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] < sizes[i][1]) sizes[i] = [sizes[i][1], sizes[i][0]];
    }

    const [w, h] = getHighestIndex(sizes);

    return w * h;
}

function getHighestIndex(array) {
    let [w, h] = [0, 0];

    for (let i = 1; i < array.length; i++) {
        if (array[i][0] > array[w][0]) w = i;
        if (array[i][1] > array[h][1]) h = i;
    }

    return [array[w][0], array[h][1]];
}
