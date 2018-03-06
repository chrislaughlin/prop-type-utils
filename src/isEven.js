import isNumber from './utils/isNumber';
import errorBuilder from './utils/errorBuilder';

/*
    Return error if the prop value is not an number or is not even
 */
export default (props, propName, componentName) => {
    const propValue = props[propName];
    const newError = reason => errorBuilder(reason, propName, componentName);
    if (!isNumber(propValue)) {
        return newError('is not a valid number');
    }
    if (propValue % 2 !== 0) {
        return newError('is not a valid number');
    }
}