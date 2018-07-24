import errorBuilder from './utils/errorBuilder';

const allPropsExist = (props, propList) => propList.every(prop => props[prop]);

/*
    Return error if the provided props exists
 */
export default linkedPropNames => (props, propName, componentName) => {
    const propValue = props[propName];
    const newError = reason => errorBuilder(reason, propName, componentName);
    if (allPropsExist(props, linkedPropNames) && !propValue) {
        return newError(`is required when ${linkedPropNames.join(', ')} is present`);
    }
}