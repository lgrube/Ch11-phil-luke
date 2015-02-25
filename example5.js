function topSort() {
  var stack = [];
  var visited = [];
  for (var i = 0; i < this.vertices; i++) {
    visited[i] = false;
  }
  
  for (var i = 0; i < this.vertices; i++) {
    if (!visited[i]) {
      this.topSortHelper(i, visited, stack);
    }
  }

  for (var i = 0; i < stack.length; i++) {
    if (stack[i] != undefined && stack[i] != false) {
      print(this.vertexList[stack[i]]);
    }
  }
}

function topSortHelper(v, visited, stack) {
  visited[v] = true;
  for (var i = 0; i < this.adj[v]; i++) {
    w = this.adj[v][i];
    if (!visited[w]) {
      this.topSortHelper(visited[w], visited, stack);
    }
  }
  stack.push(v);
}

