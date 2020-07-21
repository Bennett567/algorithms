/*Take a graph, which has its vertices numbered by the positive integers from 1 to 100.
Two vertices are connected if they are not relative primes, or if one of them is vertex 1.
The cost of an edge is always the bigger number divided by the greatest common divisor of the two
(e.g. if the two vertices are 15 and 18, the cost is 18/3=6).
What is the total cost of the minimum spanning tree? Show your work. (5 pts)*/
let nodes = [0]
let edges = []
let matrix = []
let n = 100
function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        return Math.abs(a);
    } 
}
function relative_prime(n1,n2){
    if(gcd_rec(n1,n2) == 1){
        if (n1 == 1 || n2 == 1 || n1 == n2) {
            return false
        }
        return true
    }else{
        return false
    }
}

for (var i = 0; i < n; i++) {
    matrix[i] = new Array(n);
}
for (let i = 1; i <= n; i++) {
    nodes.push(i);
}
for (let i = 1; i <= n; i++) {
    for (let j = 2; j <= n; j++) {
        if (!relative_prime(i,j) && !(j <= i)) {
            edges.push({
                from: i,
                to: j,
                cost: j/gcd_rec(i,j)
              })
        }
    }
}
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        matrix[i][j] = 0
    }
}

edges.forEach(element => {
    matrix[element.from-1][element.to-1] = element.cost
    matrix[element.to-1][element.from-1] = element.cost
});
let cost_all = 0
let INF = 9999999
let V = n
let no_edge = 0
let selected = []
for (let i = 0; i < n; i++) {
    selected.push(0)
}
//console.log(selected.length);
selected[0] = true
//console.log(selected);

while (no_edge < V - 1){
    let minimum = INF
    let x = 0
    let y = 0
    for (let i = 0; i < V; i++){
        if (selected[i] == true){
            for(let j = 0; j < V ; j++){
                if (!(selected[j] == true) && !(matrix[i][j] == 0)){
                    if (minimum > matrix[i][j]){
                        minimum = matrix[i][j]
                        x = i
                        y = j
                    }
                }
            }
        }
    }
    console.log(`from: ${x+1} to: ${y+1} cost: ${matrix[x][y]}`)
    cost_all += matrix[x][y]
    selected[y] = true
    no_edge++
}
console.log(`full cost: ${cost_all}`);