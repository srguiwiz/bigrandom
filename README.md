# bigrandom
Generate 128 bit random numbers for use as unique ids.

```
bigrandom = require('bigrandom');

var random128bitHexString = bigrandom();
```

For Node.js at https://www.npmjs.com/package/bigrandom .

Desgin goals:

* Truly random:
  Don't allow conclusions about time of creation.
* Truly random:
  Don't allow conclusions about IP addresses or number of servers.
* Better random: Maximize entropy.
* Also fit for use in URLs.

TODO: Make same name function for use in browsers.
Obviously must get entropy differently.
