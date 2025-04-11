# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


depends on the number of vertices bc we got both rows and columns equal
to the number of vertices squared aka we're iterating over v^2 no matter
WHAT even if we not pushing. List to matrix would depend on the number of
edges bc u just have to put dat shit in its slot but only iterate over edges


## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
