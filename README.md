# Prop Type Utils

[![npm package][npm-badge]][npm]

Prop Typ Utils is a collection of _useful_ prop type validation rules.

<img src="https://raw.githubusercontent.com/chrislaughlin/prop-type-utils/master/public/proptypeutils.png" alt="PropType Utils Logo" height="250px"/>

Logo designed by [Liffy Designs](http://www.liffydesigns.co.uk/)

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

## Utils:
- [isEven](#iseven)
- [isGreaterThan](#isgreaterthan)
- [isLessThan](#islessthan)
- [isBetween](#isbetween)
- [includes](#includes)
- [isRequiredWhen](#isrequiredwhen)
- [isRequiredWhenAll](#isrequiredwhenAll)
- [isOnlyOneAllowed](#isOnlyOneAllowed)
- Have more? Raise a PR

### isEven

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

### isGreaterThan

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

### isLessThan

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

### isBetween

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

### includes

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

### isRequiredWhen

```javascript
import includes from 'prop-type-utils/isRequiredWhen';

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

### isRequiredWhenAll

```javascript
import isRequiredWhenAll from 'prop-type-utils/isRequiredWhenAll';

Foo.propTypes = {
    isShowing: PropTypes.bool,
    foo: PropTypes.string,
    bar: isRequiredWhenAll(['isShowing', 'foo'])
}

//Examples
<Foo isShowing={true} foo={true} bar={null} />
//Error

<Foo isShowing={true} foo={false} bar={null} />
//Error

<Foo isShowing={false} bar={null} />
//Success

<Foo isShowing={true} foo={true} bar={true} />
//Success

```

### isOnlyOneAllowed

```javascript
import isOnlyOneAllowed from 'prop-type-utils/isOnlyOneAllowed';

Foo.propTypes = {
    isShowing: isOnlyOneAllowed(['isShowing','foo', 'bar']),
    foo: isOnlyOneAllowed(['isShowing','foo', 'bar']),
    bar: isOnlyOneAllowed(['isShowing','foo', 'bar'])
}

//Examples
<Foo isShowing={true} foo={true} bar={null} />
//Error

<Foo isShowing={true} foo={true} bar={true} />
//Error

<Foo isShowing={false} bar={null} />
//Success

<Foo isShowing={true} foo={null} bar={null} />
//Success

```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
