import isNumber from './utils/isNumber';
import errorBuilder from './utils/errorBuilder';

/*
    Return error if the prop value is not between the two supplied values
 */
export default (lowerLimit, upperLimit) => (props, propName, componentName) => {
    const propValue = props[propName];
    const newError = reason => errorBuilder(reason, propName, componentName);
    if (!isNumber(propValue)) {
        return newError('is not a valid number');
    }
    if (propValue < lowerLimit || propValue > upperLimit) {
        return newError(`not between ${lowerLimit} and ${upperLimit}`);
    }
}