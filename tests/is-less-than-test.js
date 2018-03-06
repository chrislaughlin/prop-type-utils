import expect from 'expect'

import isLessThan from 'src/isLessThan'

describe('Is less Than', () => {

    const PROP_NAME = 'foo';
    const COMPONENT_NAME = 'bar';

    it('should return error when not number', () => {
        expect(isLessThan(5)(
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
        expect(isLessThan(5)(
            {
                foo: 6
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            new Error('Invalid prop foo: is not less than 5')
        )
    })

    it('should not return error when number and less than 5', () => {
        expect(isLessThan(5)(
            {
                foo: 1
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            undefined
        )
    })

});
