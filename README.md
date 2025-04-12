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

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

#### Runtime of matrix to list conversion: $T(n)\in\Theta(|V^{2}|)$

The steps are:
1. Create rows of the list based on the number of vertices. $\Theta(|V|)$
	1. Loop over all potential edges and push onto the list if an edge exists. $\Theta(|V|)$

Runtime equation:

$T(n) = |V| \cdot |V|$

$= |V^{2}|$

Therefore,

$T(n)\in\Theta(|V^{2}|)$

Because you are going to have to iterate over $|V^{2}|$ no matter what, the runtime
just depends on the number of vertices.

#### Runtime of list to matrix conversion: $T(n)\in\Theta(|V^{2}|+|E|)$

The steps are:
1. Find the max node of the adjacency list. $\Theta(|V|)$
2. Iterate over the number of vertices to create the matrix rows. $\Theta(|V|)$
	1. Iterate over the number of vertices to create the matrix columns. $\Theta(|V|)$
3. Iterate over edges and place them in the matrix. $\Theta(|E|)$

Runtime equation:

$T(n) = |V| +(|V|\cdot |V|) + |E|$

$= |V| + |V^{2}| + |E|$  



$|V|$ is asymptotically insignificant, therefore:

$T(n)\in\Theta(|V^{2}| + |E|)$

This algorithm will have to iterate over both the number of vertices squared and 
the number of edges, so the runtime depends on both the number of edges and number
of vertices.



"I certify that I have listed all sources used to complete this exercise,
including the use of any Large Language Models. All of the work is my own, except
where stated otherwise. I am aware that plagiarism carries severe penalties and
that if plagiarism is suspected, charges may be filed against me without prior
notice."
