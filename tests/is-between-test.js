import expect from 'expect'

import isBetween from 'src/isBetween'

describe('Is Between', () => {

    const PROP_NAME = 'foo';
    const COMPONENT_NAME = 'bar';

    const lowerLimit = 5;
    const upperLimit = 10;

    it('should return error when not number', () => {
        expect(isBetween(5, 10)(
            {
                foo: 'string'
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            new Error('Invalid prop foo: is not a valid number for bar')
        )
    })

    it('should return error when number but not between 5 and 10', () => {
        expect(isBetween(5, 10)(
            {
                foo: 1
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            new Error(`Invalid prop foo: not between ${lowerLimit} and ${upperLimit} for bar`)
        )
    })

    it('should return error when number but not between 5 and 10', () => {
        expect(isBetween(5, 10)(
            {
                foo: 11
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            new Error(`Invalid prop foo: not between ${lowerLimit} and ${upperLimit} for bar`)
        )
    })

    it('should not return error when number and less than 5', () => {
        expect(isBetween(5, 10)(
            {
                foo: 6
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            undefined
        )
    })

});
