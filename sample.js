const pas = (n)=>{
  return Array(n).fill().reduce((a,b,i)=>{
    if (i<1) return a;
    const p = [0].concat(a[a.length-1],0);
    return a.concat([p.map((v,w)=>v+p[w+1]).slice(0,-1)]);
  },[[1]]).slice(0,n);
};

console.log(pas(10));