import errorBuilder from './utils/errorBuilder';

/*
    Return error if the provided prop exists
 */
export default linkedPropNames => (props, propName, componentName) => {
    const newError = reason => errorBuilder(reason, propName, componentName);
    const existingPropsCount = linkedPropNames
        .filter(linkedName => props[linkedName] !== undefined && props[linkedName] !== null).length;
    if (existingPropsCount > 1) {
        return newError(`Only one of ${linkedPropNames.join(', ')} can be provided at a time`);
    }
}
