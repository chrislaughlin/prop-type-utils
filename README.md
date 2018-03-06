#Prop Type Utils

[![npm package][npm-badge]][npm]

Prop Typ Utils is a collection of _useful_ prop type validation rules.

Install

```
npm i prop-type-utils
```

Use

You can import the named utils from the main package:
```javascript
import { includes, isGreaterThan } from 'prop-type-utils';

......

static propTypes = {
    age: isGreaterThan(18),
    title: includes('cool')
}
```

Or you can import the individual utils as you need them

```javascript
import isBetween from 'prop-type-utils/lib/isBetween';

......

static propTypes = {
    score: isBetween(10, 60)
}
```

##Utils:
- [isEven](#isEven)
- [isGreaterThan](#isGreaterThan)
- [isLessThan](#isLessThan)
- [isBetween](#isBetween)
- [includes](#includes)
- [isRequiredWhen](#isRequiredWhen)
- more tbc

###isEven

```javascript
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

###isGreaterThan

```javascript
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

###isLessThan

```javascript
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

###isBetween

```javascript
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

###includes

```javascript
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

###includes

```javascript
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
