let p;
p = new Promise ((resolve , reject) => {
setTimeout(() => {
    resolve("done")}, 1000);
});

p.then(res=>
    console.log(res));


/*focu =() => {
    console.log("dne");
}

focu();*/