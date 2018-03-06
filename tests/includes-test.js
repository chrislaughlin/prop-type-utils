import expect from 'expect'

import includes from 'src/includes'

describe('Includes', () => {

    const PROP_NAME = 'foo';
    const COMPONENT_NAME = 'bar';

    const SUB_STRING = 'test';

    it('should return error when not string', () => {
        expect(includes(SUB_STRING)(
            {
                foo: 1
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            new Error('Invalid prop foo: is not a valid string for bar')
        )
    })

    it('should return error when string but does not include test', () => {
        expect(includes(SUB_STRING)(
            {
                foo: 'bar'
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            new Error(`Invalid prop foo: does not include ${SUB_STRING} for bar`)
        )
    })

    it('should not return error when string and includes test', () => {
        expect(includes(SUB_STRING)(
            {
                foo: 'testing'
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            undefined
        )
    })

});
