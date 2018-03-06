export default (reason, propName, componentName) => {
    return new Error(`Invalid prop ${propName}: ${reason} for ${componentName}`);
}