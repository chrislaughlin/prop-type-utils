import isString from './utils/isString';
import errorBuilder from './utils/errorBuilder';

/*
    Return error if the prop value does not include the sub string
 */
export default subString => (props, propName, componentName) => {
    const propValue = props[propName];
    const newError = reason => errorBuilder(reason, propName, componentName);
    if (!isString(propValue)) {
        return newError('is not a valid string');
    }
    if (!propValue.includes(subString)) {
        return newError(`does not include ${subString}`);
    }
}