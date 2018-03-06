import expect from 'expect'

import isRequiredWhen from 'src/isRequiredWhen'

describe('Is Required When', () => {

    const PROP_NAME = 'foo';
    const COMPONENT_NAME = 'bar';

    const LINKED_PROP = 'test';

    it('should return error when linked prop exists but foo does not exist', () => {
        expect(isRequiredWhen(LINKED_PROP)(
            {
                foo: null,
                [LINKED_PROP]: true
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            new Error('Invalid prop foo: is not a valid string for bar')
        )
    })

    it('should not return error when linked prop exists and foo exist', () => {
        expect(isRequiredWhen(LINKED_PROP)(
            {
                foo: 'bar',
                [LINKED_PROP]: true
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            undefined
        )
    })

});
