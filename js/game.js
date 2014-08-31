/**
 * Created by chnpmy on 2014/8/30.
 */
var card = new Array(54);
for (var i = 0; i < card.length; i++){
    card[i] = i;
}
//随机打乱数组
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

//发牌
function deal_cards(data) {
    var length = data.length;
    for (var i = 0; i < length; i++) {
        var img;
        if (data[i] < 52) {
            img = parseInt(Math.floor(data[i] / 13) + 1) + "_" + (data[i] % 13 + 1) + ".jpg";
            console.log(img + " " + data[i]);
        }
        else if (data[i] == 52) {
            img = "xiaowang.jpg";
        }
        else {
            img = "dawang.jpg";
        }
        var new_img = document.createElement("img");
        new_img.src = "image/" + img;
        if (i % 2 == 0) {
            document.getElementById("player1").appendChild(new_img);
        }
        else{
            document.getElementById("player2").appendChild(new_img);
        }
    }
}
function deal(){
    var p1 = document.getElementById("player1");
    p1.innerHTML = "";
    var p2 = document.getElementById("player2");
    p2.innerHTML = "";
    card = shuffle(card);
    deal_cards(card);
}
var btn = document.getElementById("btn");
btn.onclick = deal;