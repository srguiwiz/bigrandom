# bigrandom

Generate 128 bit random numbers for use as unique ids.

For Node.js at https://www.npmjs.com/package/bigrandom .

## Use

Simple example:

```
var bigrandom = require('bigrandom');

var random128bitHexString = bigrandom();
```

For more entropy, anything can be passed in as salt:

```
var moreRandom128bitHexString = bigrandom([req.headers, req.body]);
```

Example result:

```
"fa3f25fcd6a415285bc079c1924cbfdc"
```

## Desgin goals

* Truly random:
  Don't allow conclusions about time of creation.
* Truly random:
  Don't allow conclusions about IP addresses or number of servers.
* Better random: Maximize entropy.
* Also fit for use in URLs.

## TODO

Make same name function for use in browsers.
Should and must get some of entropy differently.

