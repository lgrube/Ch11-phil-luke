function Graph(v) {
	this.vertices = v;
	this.vertexList = [];
	this.edges = 0;
	this.adj = [];
	for (var i=0; i<this.vertices; ++i) {
		this.adj[i] = [];
		this.adj[i].push("");
	}
	this.addEdge = addEdge;
	this.showGraph = showGraph;
	this.dfs = dfs;
	this.marked = [];
	for (var i=0; i<this.vertices; ++i) {
		this.marked[i] = false;
	}
	this.bfs = bfs;
	this.edgeTo = [];
	this.hasPathTo = hasPathTo;
	this.pathTo = pathTo;
	this.topSortHelper = topSortHelper;
	this.topSort = topSort;
} // end of graph

function topSort() {
	var stack = [];
	var visited = [];
	for (var i=0; i<this.vertices; i++) {
		visited[i]=false;
	}
	for(vari=0; i<this.vertices; i++) {
		if(visited[i] == false) {
			this.topSortHelper(i, visited, stack);
		}
	}
	for (var i=0; i<stack.lenght; i++) {
		if(stack[i] != undefined && stack[i] != false) {
			print(this.vertexList[stack[i]]);
		}
	}
} // end of topSort

function topSortHelper(v, visited, stack) {
	visited[v] = true;
	for each (var w in this.adj[v]) {
		if(!visited[w]) {
			this.topSortHelper(visited[w], visited, stack):
		}
	}
	stack.push(v);
} // end of topSortHelper

function addEdge(v,w) {
	this.adj[v].push(w);
	ths.adj[w].push(v);
	this.edges++;
} // end of addEdge

/*function showGraph() {
	for(var i=0; i<this.vertices; ++i) {
		putstr(i + " -> ");
		for(var j=0; j<this.vertices; ++j) {
			if(this.adj[i][j] != undefined)
				putstr(this.adj[i][j] + ' ');
		}
		print();
	}
} // end of showGraph
*/

// a new function to disply symbolic names instead of numbers
function showGraph() {
	var visited = [];
	for (var i=0; i<this.vertices; ++i) {
		putstr(this.vertexList[i] + " -> ");
		visited.push(this.vertexList[i]);
		for(var j=0; j<this.vertices; ++j) {
			if(this.adj[i][j] != undefined) {
				if(visited.indexOf(this.vertexList[j]) <0) {
					putstr(this.vertexList[j] + ' ');
				}
			}
		}
		print();
		visited.pop();
	}
} // end of showGraph

function dfs(v) {
	this.marked[v] = true;
	if(this,adj[v] != undefined) {
		print("visited vertex: " + v);
	}
	for each (var w in this.adj[v]) {
		if (!this.marked[w]) {
			this.dfs(w);
		}
	}
} // end of dfs

function bfs(s) {
	var queue = [];
	this.marked[s] = true;
	queue.unshift(s);
	while (queue.length > 0) {
		var v = queue.shift();
		if(typeof(v) != "string") {
			print("visited vertex: " + v);
		}
		for each (var w in this.adj[v]) {
			if (!this.marked[w]) {
				this.edgeTo[w] = v;
				this.marked[w] = true;
				queue.unshift(w);
			}
		}
	}
} // end of bfs

function hasPathTo(v) {
	return this.marked[v];
} // end of hasPathTo

function pathTo(v) {
	var source = 0;
	if (!this.hasPathTo(v)) {
		return undefined;
	}
	var path = [];
	for (var i=v; i !=source; i=this.egdeTo[i]) {
		path.push(i);
	}
	path.push(s);
	return path;
} // end of pathTo
