import expect from 'expect'

import isEven from 'src/isEven'

describe('Is Even', () => {

    const PROP_NAME = 'foo';
    const COMPONENT_NAME = 'bar';

    it('should return error when not number', () => {
        expect(isEven(
            {
                foo: 'string'
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            new Error('Invalid prop foo: is not a valid number for bar')
        )
    })

    it('should return error when number but not even', () => {
        expect(isEven(
            {
                foo: 1
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            new Error('Invalid prop foo: is not a valid number for bar')
        )
    })

    it('should not return error when number and even', () => {
        expect(isEven(
            {
                foo: 2
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            undefined
        )
    })

});
