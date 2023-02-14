let target;
function timer() {
    //let now=new Date()
    let diff = target.getTime() - new Date().getTime();
    let days = Math.floor((diff / (1000 * 24 * 60 * 60)));
    let hours = Math.floor((diff % (1000 * 24 * 60 * 60)) / (100 * 60 * 60));
    let min = Math.floor((diff % (1000 * 60 * 60)) / (100 * 60));
    let sec = Math.floor((diff % (1000 * 60)) / 100);
    console.log(`${days} days, ${hours} hours, ${min} minutes, and ${sec} seconds left.`);
    setTimeout(timer, 1000);
}
target = new Date("2023-02-22T23:59:59");
timer();
export {};
