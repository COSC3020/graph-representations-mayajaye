//Maya Conway
//code.js
//Graph Representations
//4-11-25

function convertToAdjList(adjMatrix) {
    const adjList = [];

    for (var i = 0; i < adjMatrix.length; i++) {        //create the adjacency list row
        adjList[i] = [];
        for (var j = 0; j < adjMatrix[i].length; j++) {
            if (adjMatrix[i][j] == 1) adjList[i].push(j); //push the edges on the matrix into the row
        }
    }
    return adjList;
}

function convertToAdjMatrix(adjList) {
    const adjMatrix = [];
    var max = adjList.length - 1;           //find the max node

    for(var i = 0; i <= max; i++) {         //create the adjacency matrix row
        adjMatrix[i] = [];
        for(var j = 0; j <= max; j++) {     //fill it with 0s
            adjMatrix[i][j] = 0;
        }
    }
    for(var j = 0; j < adjList.length; j++) {
        for (var i of adjList[j]) adjMatrix[j][i] = 1; //if an edge exists from j to i, place a 1 in the matrix
    }
    return adjMatrix;
}