var num_mvs = 0;
var allow_shuffle = false;

window.addEventListener("DOMContentLoaded", (event) => {

    if (localStorage.length == 0) {
        var list = document.getElementById("players-list");
        var name = "No one has played this game yet"
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(name));
        list.appendChild(entry);
    }
    for (var i = 0; i < localStorage.length; i++) {
        var list = document.getElementById("players-list");
        var name = localStorage.key(i)
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(name));
        list.appendChild(entry);
    }
    var champ = "none";
    var timeList = [];
    var playerList = [];
    for (var j = 0; j < localStorage.length; j++) {
        timeList.push(localStorage.getItem(localStorage.key(j)));
        //console.log(localStorage.getItem(localStorage.key(j)));

        playerList.push(localStorage.key(j));
        //console.log(localStorage.key(j));
    }
    var champ_value = "" + Math.min(...timeList);

    //console.log(champ_value, typeof(champ_value));
    //console.log(timeList.indexOf(champ_value));

    key_ls = timeList.indexOf(champ_value);
    //console.log(key_ls);

    champ = localStorage.key(key_ls);
    console.log(champ);

    document.getElementById('curr_champ').innerText = "Champion : " + champ;





})

function easyWin() {
    if (window.innerWidth > 530) {
        document.getElementById('p11').textContent = 11;
        document.getElementById('p11').style.background = 'url(images/11.jpg)';
        document.getElementById('p11').style.backgroundSize = '100px';

        document.getElementById('p12').textContent = 12;
        document.getElementById('p12').style.background = 'url(images/12.jpg)';

        document.getElementById('p13').textContent = 13;
        document.getElementById('p13').style.background = 'url(images/13.jpg)';

        document.getElementById('p21').textContent = 21;
        document.getElementById('p21').style.background = 'url(images/21.jpg)';

        document.getElementById('p22').textContent = 22;
        document.getElementById('p22').style.background = 'url(images/22.jpg)';

        document.getElementById('p23').textContent = 23;
        document.getElementById('p23').style.background = 'url(images/23.jpg)';

        document.getElementById('p31').textContent = 31;
        document.getElementById('p31').style.background = 'url(images/31.jpg)';

        document.getElementById('p32').textContent = 32;
        document.getElementById('p32').style.background = 'url(images/32.jpg)';

        document.getElementById('p33').textContent = 33;
        document.getElementById('p33').style.background = 'url(images/33.jpg)';
    }
    else{
        document.getElementById('p11').textContent = 11;
        document.getElementById('p11').style.background = 'url(images/11.jpg)';
        document.getElementById('p11').style.backgroundSize = '100px';

        document.getElementById('p12').textContent = 12;
        document.getElementById('p12').style.background = 'url(images/12.jpg)';
        document.getElementById('p12').style.backgroundSize = '100px';

        document.getElementById('p13').textContent = 13;
        document.getElementById('p13').style.background = 'url(images/13.jpg)';
        document.getElementById('p13').style.backgroundSize = '100px';

        document.getElementById('p21').textContent = 21;
        document.getElementById('p21').style.background = 'url(images/21.jpg)';
        document.getElementById('p21').style.backgroundSize = '100px';

        document.getElementById('p22').textContent = 22;
        document.getElementById('p22').style.background = 'url(images/22.jpg)';
        document.getElementById('p22').style.backgroundSize = '100px';

        document.getElementById('p23').textContent = 23;
        document.getElementById('p23').style.background = 'url(images/23.jpg)';
        document.getElementById('p23').style.backgroundSize = '100px';

        document.getElementById('p31').textContent = 31;
        document.getElementById('p31').style.background = 'url(images/31.jpg)';
        document.getElementById('p31').style.backgroundSize = '100px';

        document.getElementById('p32').textContent = 32;
        document.getElementById('p32').style.background = 'url(images/32.jpg)';
        document.getElementById('p32').style.backgroundSize = '100px';

        document.getElementById('p33').textContent = 33;
        document.getElementById('p33').style.background = 'url(images/33.jpg)';
        document.getElementById('p33').style.backgroundSize = '100px';
    }

}

function startGame() {
    allow_shuffle = true;
    document.getElementById('launch').textContent = "Reset Puzzle";
    var tab_position = new Array();
    while (tab_position.length < 9) {
        var num = Math.round(Math.random() * 100);
        //console.log(num)
        if ((num == 11) || (num == 12) || (num == 13) || (num == 21) || (num == 22) || (num == 23) || (num == 31) || (num == 32) || (num == 33)) {
            if (!tab_position.includes(num)) {
                tab_position[tab_position.length] = num;
                //console.log(num)
            }
        }

    }
    console.log(tab_position);

    document.getElementById('p11').textContent = tab_position[0];
    document.getElementById('p11').style.background = 'url(images/' + tab_position[0] + '.jpg)';
    document.getElementById('p11').style.backgroundSize = 'cover';

    document.getElementById('p12').textContent = tab_position[1];
    document.getElementById('p12').style.background = 'url(images/' + tab_position[1] + '.jpg)';
    document.getElementById('p12').style.backgroundSize = 'cover';
    

    document.getElementById('p13').textContent = tab_position[2];
    document.getElementById('p13').style.background = 'url(images/' + tab_position[2] + '.jpg)';
    document.getElementById('p13').style.backgroundSize = 'cover';

    document.getElementById('p21').textContent = tab_position[3];
    document.getElementById('p21').style.background = 'url(images/' + tab_position[3] + '.jpg)';
    document.getElementById('p21').style.backgroundSize = 'cover';

    document.getElementById('p22').textContent = tab_position[4];
    document.getElementById('p22').style.background = 'url(images/' + tab_position[4] + '.jpg)';
    document.getElementById('p22').style.backgroundSize = 'cover';

    document.getElementById('p23').textContent = tab_position[5];
    document.getElementById('p23').style.background = 'url(images/' + tab_position[5] + '.jpg)';
    document.getElementById('p23').style.backgroundSize = 'cover';

    document.getElementById('p31').textContent = tab_position[6];
    document.getElementById('p31').style.background = 'url(images/' + tab_position[6] + '.jpg)';
    document.getElementById('p31').style.backgroundSize = 'cover';

    document.getElementById('p32').textContent = tab_position[7];
    document.getElementById('p32').style.background = 'url(images/' + tab_position[7] + '.jpg)';
    document.getElementById('p32').style.backgroundSize = 'cover';

    document.getElementById('p33').textContent = tab_position[8];
    document.getElementById('p33').style.background = 'url(images/' + tab_position[8] + '.jpg)';
    document.getElementById('p33').style.backgroundSize = 'cover';

    num_mvs = 0;
    document.getElementById('moves').textContent = "Moves: 0";

}

//  function backToNormal(){
//     document.getElementById('p11').style.visibility = 'visible';
//     document.getElementById('p12').style.visibility = 'visible';
//     document.getElementById('p13').style.visibility = 'visible';
//     document.getElementById('p21').style.visibility = 'visible';
//     document.getElementById('p22').style.visibility = 'visible';
//     document.getElementById('p23').style.visibility = 'visible';
//     document.getElementById('p31').style.visibility = 'visible';
//     document.getElementById('p32').style.visibility = 'visible';
//     document.getElementById('p33').style.visibility = 'visible';

//     document.getElementById('launch').textContent = 'Start Game';
//     num_mvs = 0;
//     document.getElementById('moves').textContent = 'Moves: 0';
//     document.getElementById('player-name').style.visibility = "hidden";
//  }

function submit() {

    var player = document.getElementById('name').value
    localStorage.setItem(player + "||  Moves played: " + num_mvs, num_mvs);
    return location.reload();

}

function checkWin() {
    var cell1 = document.getElementById('p11').textContent;
    var cell2 = document.getElementById('p12').textContent;
    var cell3 = document.getElementById('p13').textContent;
    var cell4 = document.getElementById('p21').textContent;
    var cell5 = document.getElementById('p22').textContent;
    var cell6 = document.getElementById('p23').textContent;
    var cell7 = document.getElementById('p31').textContent;
    var cell8 = document.getElementById('p32').textContent;
    var cell9 = document.getElementById('p33').textContent;

    if ((cell1 == '11') && (cell2 == '12') && (cell3 == '13') && (cell4 == '21') && (cell5 == '22') && (cell6 == '23') && (cell7 == '31') && (cell8 == '32') && (cell9 == '33')) {
        return true;
    } else return false;
}

function switching(cell) {
    //console.log(cell);
    if (document.getElementById(cell).textContent != '11' && allow_shuffle == true) {
        switch (cell) {
            case 'p11':
                if (document.getElementById('p12').textContent == '11') {
                    var temp_val = document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent = document.getElementById('p11').textContent;
                    document.getElementById('p11').textContent = temp_val;

                    document.getElementById('p12').style.background = 'url( images/' + document.getElementById('p12').textContent + '.jpg)';
                    document.getElementById('p11').style.background = 'url( images/' + document.getElementById('p11').textContent + '.jpg)';
                    
                    document.getElementById('p11').style.backgroundSize = 'cover';
                    document.getElementById('p12').style.backgroundSize = 'cover';
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;

                }
                if (document.getElementById('p21').textContent == '11') {
                    var temp_val = document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent = document.getElementById('p11').textContent;
                    document.getElementById('p11').textContent = temp_val;

                    document.getElementById('p21').style.background = 'url( images/' + document.getElementById('p21').textContent + '.jpg)';
                    document.getElementById('p11').style.background = 'url( images/' + document.getElementById('p11').textContent + '.jpg)';
                    
                    document.getElementById('p21').style.backgroundSize = 'cover';
                    document.getElementById('p11').style.backgroundSize = 'cover';

                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;

                }
                if (checkWin()) {

                    setTimeout(function () {
                        document.getElementById('p11').style.visibility = 'hidden';
                        document.getElementById('p12').style.visibility = 'hidden';
                        document.getElementById('p13').style.visibility = 'hidden';
                        document.getElementById('p21').style.visibility = 'hidden';
                        document.getElementById('p22').style.visibility = 'hidden';
                        document.getElementById('p23').style.visibility = 'hidden';
                        document.getElementById('p31').style.visibility = 'hidden';
                        document.getElementById('p32').style.visibility = 'hidden';
                        document.getElementById('p33').style.visibility = 'hidden';
                        
                        if(window.innerWidth > 530){
                            document.getElementById('grid').style.background = 'url( images/win.gif )';
                        }
                        else{
                            document.getElementById('grid').style.background = 'url( images/win.gif )';
                            document.getElementById('grid').style.backgroundSize = 'cover';
                        }
                    }, 600);
                    document.getElementById('player-name').style.visibility = 'visible';

                }

                break;

            case 'p12':
                if (document.getElementById('p11').textContent == '11') {
                    var temp_val = document.getElementById('p11').textContent;
                    document.getElementById('p11').textContent = document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent = temp_val;

                    document.getElementById('p11').style.background = 'url( images/' + document.getElementById('p11').textContent + '.jpg)';
                    document.getElementById('p12').style.background = 'url( images/' + document.getElementById('p12').textContent + '.jpg)';
                    
                    document.getElementById('p11').style.backgroundSize = 'cover';
                    document.getElementById('p12').style.backgroundSize = 'cover';
                    
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }
                if (document.getElementById('p22').textContent == '11') {
                    var temp_val = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent = temp_val;

                    document.getElementById('p22').style.background = 'url( images/' + document.getElementById('p22').textContent + '.jpg)';
                    document.getElementById('p12').style.background = 'url( images/' + document.getElementById('p12').textContent + '.jpg)';
                    
                    document.getElementById('p22').style.backgroundSize = 'cover';
                    document.getElementById('p12').style.backgroundSize = 'cover';

                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }
                if (document.getElementById('p13').textContent == '11') {
                    var temp_val = document.getElementById('p13').textContent;
                    document.getElementById('p13').textContent = document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent = temp_val;

                    document.getElementById('p13').style.background = 'url( images/' + document.getElementById('p13').textContent + '.jpg)';
                    document.getElementById('p12').style.background = 'url( images/' + document.getElementById('p12').textContent + '.jpg)';
                    
                    document.getElementById('p13').style.backgroundSize = 'cover';
                    document.getElementById('p12').style.backgroundSize = 'cover';
                    
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }

                break;

            case 'p13':
                if (document.getElementById('p12').textContent == '11') {
                    var temp_val = document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent = document.getElementById('p13').textContent;
                    document.getElementById('p13').textContent = temp_val;

                    document.getElementById('p12').style.background = 'url( images/' + document.getElementById('p12').textContent + '.jpg)';
                    document.getElementById('p13').style.background = 'url( images/' + document.getElementById('p13').textContent + '.jpg)';
                    
                    document.getElementById('p13').style.backgroundSize = 'cover';
                    document.getElementById('p12').style.backgroundSize = 'cover';
                    
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }
                if (document.getElementById('p23').textContent == '11') {
                    var temp_val = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = document.getElementById('p13').textContent;
                    document.getElementById('p13').textContent = temp_val;

                    document.getElementById('p23').style.background = 'url( images/' + document.getElementById('p23').textContent + '.jpg)';
                    document.getElementById('p13').style.background = 'url( images/' + document.getElementById('p13').textContent + '.jpg)';
                    
                    document.getElementById('p23').style.backgroundSize = 'cover';
                    document.getElementById('p13').style.backgroundSize = 'cover';
                    
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }

                break;

            case 'p21':
                if (document.getElementById('p11').textContent == '11') {
                    var temp_val = document.getElementById('p11').textContent;
                    document.getElementById('p11').textContent = document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent = temp_val;

                    document.getElementById('p11').style.background = 'url( images/' + document.getElementById('p11').textContent + '.jpg)';
                    document.getElementById('p21').style.background = 'url( images/' + document.getElementById('p21').textContent + '.jpg)';
                    
                    document.getElementById('p11').style.backgroundSize = 'cover';
                    document.getElementById('p21').style.backgroundSize = 'cover';

                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }
                if (document.getElementById('p22').textContent == '11') {
                    var temp_val = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent = temp_val;

                    document.getElementById('p22').style.background = 'url( images/' + document.getElementById('p22').textContent + '.jpg)';
                    document.getElementById('p21').style.background = 'url( images/' + document.getElementById('p21').textContent + '.jpg)';
                    
                    document.getElementById('p22').style.backgroundSize = 'cover';
                    document.getElementById('p21').style.backgroundSize = 'cover';
                    
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }
                if (document.getElementById('p31').textContent == '11') {
                    var temp_val = document.getElementById('p31').textContent;
                    document.getElementById('p31').textContent = document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent = temp_val;

                    document.getElementById('p31').style.background = 'url( images/' + document.getElementById('p31').textContent + '.jpg)';
                    document.getElementById('p21').style.background = 'url( images/' + document.getElementById('p21').textContent + '.jpg)';
                    
                    document.getElementById('p31').style.backgroundSize = 'cover';
                    document.getElementById('p21').style.backgroundSize = 'cover';
                    
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }


                break;

            case 'p22':
                if (document.getElementById('p12').textContent == '11') {
                    var temp_val = document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = temp_val;

                    document.getElementById('p12').style.background = 'url( images/' + document.getElementById('p12').textContent + '.jpg)';
                    document.getElementById('p22').style.background = 'url( images/' + document.getElementById('p22').textContent + '.jpg)';
                    
                    document.getElementById('p12').style.backgroundSize = 'cover';
                    document.getElementById('p22').style.backgroundSize = 'cover';
                    
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }
                if (document.getElementById('p21').textContent == '11') {
                    var temp_val = document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = temp_val;

                    document.getElementById('p21').style.background = 'url( images/' + document.getElementById('p21').textContent + '.jpg)';
                    document.getElementById('p22').style.background = 'url( images/' + document.getElementById('p22').textContent + '.jpg)';
                    
                    document.getElementById('p21').style.backgroundSize = 'cover';
                    document.getElementById('p22').style.backgroundSize = 'cover';

                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }
                if (document.getElementById('p32').textContent == '11') {
                    var temp_val = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = temp_val;

                    document.getElementById('p32').style.background = 'url( images/' + document.getElementById('p32').textContent + '.jpg)';
                    document.getElementById('p22').style.background = 'url( images/' + document.getElementById('p22').textContent + '.jpg)';
                    
                    document.getElementById('p32').style.backgroundSize = 'cover';
                    document.getElementById('p22').style.backgroundSize = 'cover';

                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }
                if (document.getElementById('p23').textContent == '11') {
                    var temp_val = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = temp_val;

                    document.getElementById('p23').style.background = 'url( images/' + document.getElementById('p23').textContent + '.jpg)';
                    document.getElementById('p22').style.background = 'url( images/' + document.getElementById('p22').textContent + '.jpg)';
                    
                    document.getElementById('p23').style.backgroundSize = 'cover';
                    document.getElementById('p22').style.backgroundSize = 'cover';
                    
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }

                break;

            case 'p23':
                if (document.getElementById('p13').textContent == '11') {
                    var temp_val = document.getElementById('p13').textContent;
                    document.getElementById('p13').textContent = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = temp_val;

                    document.getElementById('p13').style.background = 'url( images/' + document.getElementById('p13').textContent + '.jpg)';
                    document.getElementById('p23').style.background = 'url( images/' + document.getElementById('p23').textContent + '.jpg)';
                    
                    document.getElementById('p23').style.backgroundSize = 'cover';
                    document.getElementById('p13').style.backgroundSize = 'cover';
                    
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }
                if (document.getElementById('p22').textContent == '11') {
                    var temp_val = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = temp_val;

                    document.getElementById('p22').style.background = 'url( images/' + document.getElementById('p22').textContent + '.jpg)';
                    document.getElementById('p23').style.background = 'url( images/' + document.getElementById('p23').textContent + '.jpg)';
                    
                    document.getElementById('p23').style.backgroundSize = 'cover';
                    document.getElementById('p22').style.backgroundSize = 'cover';

                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }
                if (document.getElementById('p33').textContent == '11') {
                    var temp_val = document.getElementById('p33').textContent;
                    document.getElementById('p33').textContent = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = temp_val;

                    document.getElementById('p33').style.background = 'url( images/' + document.getElementById('p33').textContent + '.jpg)';
                    document.getElementById('p23').style.background = 'url( images/' + document.getElementById('p23').textContent + '.jpg)';
                    
                    document.getElementById('p23').style.backgroundSize = 'cover';
                    document.getElementById('p33').style.backgroundSize = 'cover';
                    
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }


                break;

            case 'p31':
                if (document.getElementById('p21').textContent == '11') {
                    var temp_val = document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent = document.getElementById('p31').textContent;
                    document.getElementById('p31').textContent = temp_val;

                    document.getElementById('p21').style.background = 'url( images/' + document.getElementById('p21').textContent + '.jpg)';
                    document.getElementById('p31').style.background = 'url( images/' + document.getElementById('p31').textContent + '.jpg)';
                    
                    document.getElementById('p21').style.backgroundSize = 'cover';
                    document.getElementById('p31').style.backgroundSize = 'cover';
                    
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }
                if (document.getElementById('p32').textContent == '11') {
                    var temp_val = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = document.getElementById('p31').textContent;
                    document.getElementById('p31').textContent = temp_val;

                    document.getElementById('p32').style.background = 'url( images/' + document.getElementById('p32').textContent + '.jpg)';
                    document.getElementById('p31').style.background = 'url( images/' + document.getElementById('p31').textContent + '.jpg)';
                    
                    document.getElementById('p32').style.backgroundSize = 'cover';
                    document.getElementById('p31').style.backgroundSize = 'cover';
                    
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }


                break;

            case 'p32':
                if (document.getElementById('p31').textContent == '11') {
                    var temp_val = document.getElementById('p31').textContent;
                    document.getElementById('p31').textContent = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = temp_val;

                    document.getElementById('p31').style.background = 'url( images/' + document.getElementById('p31').textContent + '.jpg)';
                    document.getElementById('p32').style.background = 'url( images/' + document.getElementById('p32').textContent + '.jpg)';
                    
                    document.getElementById('p32').style.backgroundSize = 'cover';
                    document.getElementById('p31').style.backgroundSize = 'cover';
                    
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }
                if (document.getElementById('p22').textContent == '11') {
                    var temp_val = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = temp_val;

                    document.getElementById('p22').style.background = 'url( images/' + document.getElementById('p22').textContent + '.jpg)';
                    document.getElementById('p32').style.background = 'url( images/' + document.getElementById('p32').textContent + '.jpg)';
                    
                    document.getElementById('p22').style.backgroundSize = 'cover';
                    document.getElementById('p32').style.backgroundSize = 'cover';
                    
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }
                if (document.getElementById('p33').textContent == '11') {
                    var temp_val = document.getElementById('p33').textContent;
                    document.getElementById('p33').textContent = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = temp_val;

                    document.getElementById('p33').style.background = 'url( images/' + document.getElementById('p33').textContent + '.jpg)';
                    document.getElementById('p32').style.background = 'url( images/' + document.getElementById('p32').textContent + '.jpg)';
                    
                    document.getElementById('p33').style.backgroundSize = 'cover';
                    document.getElementById('p32').style.backgroundSize = 'cover';
                    
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }

                break;

            case 'p33':
                if (document.getElementById('p23').textContent == '11') {
                    var temp_val = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = document.getElementById('p33').textContent;
                    document.getElementById('p33').textContent = temp_val;

                    document.getElementById('p23').style.background = 'url( images/' + document.getElementById('p23').textContent + '.jpg)';
                    document.getElementById('p33').style.background = 'url( images/' + document.getElementById('p33').textContent + '.jpg)';
                    
                    document.getElementById('p23').style.backgroundSize = 'cover';
                    document.getElementById('p33').style.backgroundSize = 'cover';
                    
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }
                if (document.getElementById('p32').textContent == '11') {
                    var temp_val = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = document.getElementById('p33').textContent;
                    document.getElementById('p33').textContent = temp_val;

                    document.getElementById('p32').style.background = 'url( images/' + document.getElementById('p32').textContent + '.jpg)';
                    document.getElementById('p33').style.background = 'url( images/' + document.getElementById('p33').textContent + '.jpg)';
                    
                    document.getElementById('p32').style.backgroundSize = 'cover';
                    document.getElementById('p33').style.backgroundSize = 'cover';
                    
                    num_mvs++;
                    document.getElementById('moves').textContent = "Moves: " + num_mvs;
                }

                break;
        }
    }
}

function calci() {
    return location.href = ("https://dazzling-carson-a34245.netlify.app")
}

var hints = true;

function hintsCheck() {
    if (hints == true) {
        document.getElementById('p11').style.fontSize = "0.1px"
        document.getElementById('p12').style.fontSize = "0.1px"
        document.getElementById('p13').style.fontSize = "0.1px"
        document.getElementById('p21').style.fontSize = "0.1px"
        document.getElementById('p22').style.fontSize = "0.1px"
        document.getElementById('p23').style.fontSize = "0.1px"
        document.getElementById('p31').style.fontSize = "0.1px"
        document.getElementById('p32').style.fontSize = "0.1px"
        document.getElementById('p33').style.fontSize = "0.1px"

        hints = false;
        document.getElementById('hints').innerText = "Hints: Off"
    } else {
        document.getElementById('p11').style.fontSize = "24px"
        document.getElementById('p12').style.fontSize = "24px"
        document.getElementById('p13').style.fontSize = "24px"
        document.getElementById('p21').style.fontSize = "24px"
        document.getElementById('p22').style.fontSize = "24px"
        document.getElementById('p23').style.fontSize = "24px"
        document.getElementById('p31').style.fontSize = "24px"
        document.getElementById('p32').style.fontSize = "24px"
        document.getElementById('p33').style.fontSize = "24px"

        hints = true;
        document.getElementById('hints').innerText = "Hints: On"
    }
}