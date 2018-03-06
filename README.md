# Prop Type Utils

[![npm package][npm-badge]][npm]

Prop Typ Utils is a collection of _useful_ prop type validation rules.

## Rules:
- isEven
- isGreaterThan
- isLessThan
- isBetween
- includes
- isRequiredWhen
- more tbc

### isEven

```
import isEven from 'prop-type-utils/isEven';

Foo.propTypes = {
    bar: isEven
}

//Examples
<Foo bar={1} />
//Error

<Foo bar={2} />
//Success
```

### isGreaterThan

```
import isGreaterThan from 'prop-type-utils/isGreaterThan';

Foo.propTypes = {
    bar: isGreaterThan(5)
}

//Examples
<Foo bar={1} />
//Error

<Foo bar={6} />
//Success
```

### isLessThan

```
import isLessThan from 'prop-type-utils/isLessThan';

Foo.propTypes = {
    bar: isLessThan(5)
}

//Examples
<Foo bar={6} />
//Error

<Foo bar={1} />
//Success
```

### isBetween

```
import isBetween from 'prop-type-utils/isBetween';

Foo.propTypes = {
    bar: isBetween(5, 10)
}

//Examples
<Foo bar={1} />
//Error

<Foo bar={6} />
//Success
```

### includes

```
import includes from 'prop-type-utils/includes';

Foo.propTypes = {
    bar: includes('react')
}

//Examples
<Foo bar="facebook" />
//Error

<Foo bar="react-dom" />
//Success
```

### includes

```
import includes from 'prop-type-utils/includes';

Foo.propTypes = {
    isShowing: PropTypes.bool
    bar: isRequiredWhen('isShowing')
}

//Examples
<Foo isShowing={true} bar={null} />
//Error

<Foo isShowing={false} bar={null} />
//Success

```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
