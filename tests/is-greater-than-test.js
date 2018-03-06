import expect from 'expect'

import isGreaterThan from 'src/isGreaterThan'

describe('Is Greater Than', () => {

    const PROP_NAME = 'foo';
    const COMPONENT_NAME = 'bar';

    it('should return error when not number', () => {
        expect(isGreaterThan(5)(
            {
                foo: 'string'
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            new Error('Invalid prop foo: is not a valid number for bar')
        )
    })

    it('should return error when number but not greater than 5', () => {
        expect(isGreaterThan(5)(
            {
                foo: 1
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            new Error('Invalid prop foo: is not greater than 5')
        )
    })

    it('should not return error when number and greater than 5', () => {
        expect(isGreaterThan(5)(
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
