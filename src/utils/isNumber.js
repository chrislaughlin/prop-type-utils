const isNAN = object => {
    return object !== object;
};

export default value => {
    return typeof value === 'number' && !isNAN(value);
}
