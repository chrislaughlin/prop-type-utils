import expect from 'expect'

import isRequiredWhenAll from 'src/isRequiredWhenAll'

describe('Is Required When All', () => {

    const PROP_NAME = 'foo';
    const COMPONENT_NAME = 'bar';

    const LINKED_PROPS = ['test', 'test1'];

    it('should return error when all linked props exists but foo does not exist', () => {
        expect(isRequiredWhenAll(LINKED_PROPS)(
            {
                foo: null,
                [LINKED_PROPS[0]]: true,
                [LINKED_PROPS[1]]: true
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            new Error('Invalid prop foo: is not a valid string for bar')
        )
    });

    it('should not return error when only one linked prop exists and foo exist', () => {
        expect(isRequiredWhenAll(LINKED_PROPS)(
            {
                foo: 'bar',
                [LINKED_PROPS[0]]: true
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            undefined
        )
    });

    it('should not return error when no linked props exists and foo exist', () => {
        expect(isRequiredWhenAll(LINKED_PROPS)(
            {
                foo: 'bar'
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            undefined
        )
    });

});
