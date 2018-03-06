import isNumber from './utils/isNumber';
import errorBuilder from './utils/errorBuilder';

/*
    Return error if the prop value is not greater than the supplied value
 */
export default compareValue => (props, propName, componentName) => {
    const propValue = props[propName];
    const newError = reason => errorBuilder(reason, propName, componentName);
    if (!isNumber(propValue)) {
        return newError('is not a valid number');
    }
    if (propValue < compareValue) {
        return newError(`is not greater than ${compareValue}`);
    }
}