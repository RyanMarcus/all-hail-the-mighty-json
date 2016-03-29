# all-hail-the-mighty-json

> If you like JSON so much, why don't you program with it?

JSON has supplanted [overly-verbose XML](http://c2.com/cgi/wiki?XmlSucks) and [S-expressions](http://c2.com/cgi/wiki?EssExpressions) as the *de facto* data exchange format for modern computing. By simultaneously avoiding [explicit and rigid schemas](http://json-schema.org/) and providing a [simple, unambiguous representation](https://en.wikipedia.org/wiki/JSON#Data_portability_issues), JSON is truly the way of the future.


This project progresses the benevolent dominance of [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford)'s (praise be upon Him) JSON to its next logical step. Programs themselves often rely on data formats that are highly verbose or dependent on arbitrary and sometimes platform-specific characters like newlines or semicolons. `all-hail-the-mighty-json` is a programming language for the modern developer who understands that JSON is the [One True Path](http://c2.com/cgi/wiki?OneTruePath).

Instead of representing code as messy and hard-to-skim S-expressions, or as silly *lines* of code, `all-hail-the-mighty-json` uses JSON itself to represent source code. The below example shows how to calculate the factorial of five:

```javascript
["last",
 ["defun", "\"factorial\"", {"args":["n"],
			                 "body": ["cond",
				                      ["<=", "n", 1],
				                      1,
				                      ["*", "n",
									      ["factorial", ["-", "n", 1]]]]
	                        }],
 ["console.log", ["factorial", 5]]
]
```

Obviously, this approach uses a standard monadic eager-applicative functor over an immutable fixed point combinator of the state space, as is popular in any *decent* modern frontend web framework. Save this program to `sample.json` and run it as follows:

```
~ $ npm install -g all-hail-the-mighty-json
~ $ all-hail-the-mighty-json sample.json 
120
~ $ 
```

Minified, the entire interpreter is only 550 bytes, making it a small, but important, addition to your webapp. Future versions will include support for async/await, JSX, reactive programming, and possibly something actually useful.
