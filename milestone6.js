/*Take a graph, which has its vertices numbered by the positive integers from 1 to 100.
Two vertices are connected if they are not relative primes, or if one of them is vertex 1.
The cost of an edge is always the bigger number divided by the greatest common divisor of the two
(e.g. if the two vertices are 15 and 18, the cost is 18/3=6).
What is the total cost of the minimum spanning tree? Show your work. (5 pts)*/
var options = {
    autoResize: true,
    height: '100%',
    width: '100%'
    locale: 'en',
    locales: locales,
    clickToUse: false,
  }
let edges = [];
let nodes = []
/*edges.push({
    from: from,
    to: to
  });*/
function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        return Math.abs(a);
    }
}
function relative_prime(n1,n2){
    if(gcd_rec(n1,n2) == 1){
        return true
    }else{
        return false
    }
}
for (let i = 1; i <= 100; i++) {
    nodes.push({
        id: i,
        label: String(i)
      });
}
