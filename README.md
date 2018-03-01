#	chc-posix
__Character Classes according to POSIX__

Depends on [chc](https://www.npmjs.com/package/chc) and offers predefined charsets according POSIX.

##	Table of contents

*	[Get Started](#get-started)
*	[API](#api)

##	Links

*	[CHANGE LOG](./CHANGELOG.md)
*	[Homepage](https://github.com/YounGoat/ecmascript.chc-posix)

##	Get Started

```javascript
const chc = require('chc-posix');

const cs = chc.posix('upper');
// RETURN new CharSet() containing A-Z

cs.next();
// RETURN 'A'
```

See [chc](https://www.npmjs.com/package/chc) for details about `class CharSet`.

##	API

*	chc.CharSet __chc.posix__(string *name*)  
	Create an `CharSet` instance containing specified characters. Argument *name* may be:
	-	lower
	-	upper
	-	number
	-	alpha
	-	alnum
	-	xdigit
