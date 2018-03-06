import errorBuilder from './utils/errorBuilder';

/*
    Return error if the prop value does not include the sub string
 */
export default linkedPropName => (props, propName, componentName) => {
    const propValue = props[propName];
    const newError = reason => errorBuilder(reason, propName, componentName);
    if (props[linkedPropName] && !propValue) {
        return newError(`is required when ${linkedPropName} is present`);
    }
}