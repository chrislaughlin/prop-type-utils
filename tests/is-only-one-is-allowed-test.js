import expect from 'expect'

import isOnlyOneIsAllowed from 'src/isOnlyOneAllowed'

describe('Is Only One Allowed When', () => {

    const PROP_NAME = 'PROP_NAME';
    const COMPONENT_NAME = 'bar';

    const LINKED_PROP_NAMES = ['test1', 'test2', 'test3'];

    it('should return error when more than one linked prop name exists', () => {
        expect(isOnlyOneIsAllowed(LINKED_PROP_NAMES)(
            {
                test1: 'exists',
                test2: 'exists',
                test3: null
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            new Error('Invalid prop foo: is not a valid string for bar')
        )
    })

    it('should not return error when one linked prop name exists', () => {
        expect(isOnlyOneIsAllowed(LINKED_PROP_NAMES)(
            {
                test1: 'exists',
                test2: undefined,
                test3: null
            },
            PROP_NAME,
            COMPONENT_NAME
        )).toEqual(
            undefined
        )
    })

});
