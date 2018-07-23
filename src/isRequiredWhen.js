import errorBuilder from './utils/errorBuilder';

/*
    Return error if the provided prop exists
 */
export default linkedPropName => (props, propName, componentName) => {
    const propValue = props[propName];
    const newError = reason => errorBuilder(reason, propName, componentName);
    if (props[linkedPropName] && !propValue) {
        return newError(`is required when ${linkedPropName} is present`);
    }
}