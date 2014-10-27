        var carrots = 100000000000000000000000000;

function Farm(val) {
    carrots = carrots + val;
    if (carrots == 1) {
        document.getElementById("carrotcount").innerHTML = "1 carrot farmed";
        document.title = "1 carrot - CarrotClicker";
    }
    else {
        document.getElementById("carrotcount").innerHTML = carrots + " carrots farmed";
        document.title = carrots + " carrots - CarrotClicker";
    }
}
var tractors = 0;
var tractor_add = 0;

function buyTractor(){
    var tractor_price = Math.floor(25 * Math.pow(1.1,tractors));
    if(carrots >= tractor_price) {
        tractors = tractors + 1;
        tractor_add = tractor_add + 1;
        carrots = carrots - tractor_price;
        Farm(0);
        document.getElementById('tractorcount').innerHTML = tractors;
    }
    //var nextprice = Math.floor(25 * Math.pow(1.1,tractors));
    //document.getElementById('tractorcost').innerHTML = "costs " + nextprice + " carrots";
};
window.setInterval(function() {
    Farm(tractor_add);
}, 1000);
