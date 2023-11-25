class Graph {
    constructor(v) {
        console.log('graph init...');
        this.V = v;
        this.adj = new Array(v);
        for(let i = 0; i < v; i++){
            this.adj[i] = [];
        }
    }

    addEdge(v, w) {
        this.adj[v].push(w);
    }

    BFS(s) {
        console.log('BFS...')
        let visited = new Array(this.V);

        for(let i = 0; i < this.V; i++) {
            visited[i] = false;
        }

        let queue = [];
        visited[s] = true;
        queue.push(s);

        while(queue.length > 0) {
            s = queue[0];
            console.log(s+" ");
            queue.shift();

            this.adj[s].forEach((adjacent,i) => {
                if (!visited[adjacent]) {
                    visited[adjacent] = true;
                    queue.push(adjacent);
                }
            })
        }
    }


    DFS(v) {
        console.log('DFS...')
        let visited = new Array(this.V);
        for(let i = 0; i < this.V; i++){
            visited[i] = false;
        }

        this.DFSUtil(v, visited);
    }

    DFSUtil(v, visited) {
        visited[v] = true;
        console.log(v);

        for(let i of this.adj[v].values()) {
            let n = i;
            if (!visited[n]) {
                this.DFSUtil(n, visited);
            }
        }
    }
}


const graph =  new Graph(5);

graph.addEdge(0,1);
graph.addEdge(0,2);
graph.addEdge(1,2);
graph.addEdge(2,0);
graph.addEdge(2,3);
graph.addEdge(3,3);

graph.BFS(2);
graph.DFS(2);

console.log(JSON.stringify(graph.adj));
console.log(graph.V);