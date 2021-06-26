const solution = (s) => {
    const regex = new RegExp('[^0-9]', 'g');
    if (!(s.length === 4 || s.length === 6)) return false;
    return regex.test(s) && !(s.length === 4 || s.length === 6) ? false : true;
}
