/**
 * Created by Administrator on 2016/11/25.
 */
window.onload=function(){
    var arrRow=[];
    var arrRan=[];
    var randomIntNum=[2,4];
    var score=0;
    createRc();
    function origin(){
    randomNum();
    randomNum();
    show();
    }
    origin();
    $(".restart p").click(function(){
        score=0;
        $(".showScore").html(score);
        $(".gameOver").slideUp(1000);
        empty();
        origin();
    })
    $(".showScore").html(score);
    function createRc(){
        var arrCol=[];
        var divObjs=$(".main div");
        for(var i=0;i<divObjs.length;i++){
            arrCol.push(divObjs[i]);
            if((i+1)%4==0){
                    arrRow.push(arrCol);

                arrCol=[];
            }
        }
    }
    function moveLeft(num1,num2){
        var sum;
        for(var i=0;i<arrRow.length;i++){
            var col1=arrRow[i][num1];
            var col2=arrRow[i][num2];
            //var col3=arrRow[i][num3];
            //var col4=arrRow[i][num4];
            if(col2.innerText==""){

            }else if(col1.innerText==col2.innerText){
                sum=parseInt(col1.innerText)+parseInt(col2.innerText);
                col1.innerText=sum;
                col2.innerText="";
                score=score+sum;
            }else if(col1.innerText==""){
                col1.innerText=col2.innerText;
                var x=parseInt(col2.innerText)
                $(col2).addClass()
                col2.innerText="";
            }
        }
    }
    function moveTop(num1,num2){
        for(var i=0;i<arrRow.length;i++){
            var row1=arrRow[num1][i];
            var row2=arrRow[num2][i];
            if(row2.innerText==""){

            }else if(row1.innerText==row2.innerText){
                var sum=parseInt(row1.innerText)+parseInt(row2.innerText);
                row1.innerText=sum;
                row2.innerText="";
                score=score+sum;
            }else if(row1.innerText==""){
                row1.innerText=row2.innerText;
                row2.innerText="";
            }
        }
    }
    function moveRight(num1,num2){
        var sum;
        for(var i=0;i<arrRow.length;i++){
            var col1=arrRow[i][num1];
            var col2=arrRow[i][num2];
            if(col1.innerText==""){

            }else if(col1.innerText==col2.innerText){
                sum=parseInt(col1.innerText)+parseInt(col2.innerText);
                col2.innerText=sum;
                col1.innerText="";
                score=score+sum;
            }else if(col2.innerText==""){
                col2.innerText=col1.innerText;
                col1.innerText="";
            }
        }
    }
    function moveDown(num1,num2){
        var sum;
        for(var i=0;i<arrRow.length;i++){
            var row1=arrRow[num1][i];
            var row2=arrRow[num2][i];
            if(row1.innerText==""){

            }else if(row1.innerText==row2.innerText){
                var sum=parseInt(row1.innerText)+parseInt(row2.innerText);
                row2.innerText=sum;
                row1.innerText="";
                score=score+sum;
            }else if(row2.innerText==""){
                row2.innerText=row1.innerText;
                row1.innerText="";
            }
        }
    }
    $(document).keyup(function(e){
        var ev=window.event||e;
        switch (ev.keyCode){
            case 37:
                var type;
                for(var m=0;m<4;m++){
                    for(var n=1;n<4;n++){
                        if(arrRow[m][n].innerText!="") {
                            if (arrRow[m][n-1].innerText == arrRow[m][n].innerText || arrRow[m][n-1].innerText == "") {
                                type = true;
                            }
                        }
                    }
                }
                if(type){
                for (var a = 0; a < arrRow.length; a++) {
                    for(var j=0;j<arrRow[a].length;j++){
                        if(arrRow[a][j].innerText!=""){
                            if ((arrRow[a][0].innerText == arrRow[a][1].innerText)&&(arrRow[a][2].innerText == arrRow[a][3].innerText)) {
                                moveLeft(2,3);
                            }
                        }
                    }
                }
                for(var c=0;c<arrRow.length;c++) {
                    for (var p = 0; p < 3; p++) {
                        for (var j = 0; j < arrRow[c].length-1; j++) {
                            if (arrRow[c][j].innerText == "") {
                                arrRow[c][j].innerText = arrRow[c][j + 1].innerText;
                                arrRow[c][j+1].innerText="";
                            }
                        }
                    }
                }
                moveLeft(0,1);
                moveLeft(1,2);
                moveLeft(2,3);
                randomNum();
                show();
                gameOver();
                }
                break;
            case 38:
                var type1;
                for(var m1=1;m1<4;m1++){
                    for(var n1=0;n1<4;n1++){
                        if(arrRow[m1][n1].innerText!="") {
                            if (arrRow[m1-1][n1].innerText == arrRow[m1][n1].innerText || arrRow[m1-1][n1].innerText == "") {
                                type1= true;
                            }
                        }
                    }
                }
                if(type1) {
                    for (var b = 0; b < 4; b++) {
                        for(var j=0;j<arrRow.length;j++){
                            if(arrRow[j][b].innerText!=""){
                                if ((arrRow[0][b].innerText == arrRow[1][b].innerText) && (arrRow[2][b].innerText == arrRow[3][b].innerText)) {
                                    moveTop(2, 3);
                                }
                            }
                        }
                    }
                    for (var c1 = 0; c1 < arrRow.length; c1++) {
                        for (var p1 = 0; p1 < 4; p1++) {
                            for (var j1 = 0; j1 < arrRow.length - 1; j1++) {
                                if (arrRow[j1][c1].innerText == "") {
                                    arrRow[j1][c1].innerText = arrRow[j1 + 1][c1].innerText;
                                    arrRow[j1 + 1][c1].innerText = "";
                                }
                            }
                        }
                    }
                    moveTop(0, 1);
                    moveTop(1, 2);
                    moveTop(2, 3);
                    randomNum();
                    show();
                    gameOver();
                }
                break;
            case 39:
                var type2;
                for(var m2=0;m2<4;m2++){
                    for(var n2=0;n2<3;n2++){
                        if(arrRow[m2][n2].innerText!="") {
                            if (arrRow[m2][n2+1].innerText == arrRow[m2][n2].innerText || arrRow[m2][n2+1].innerText == "") {
                                type2= true;
                            }
                        }
                    }
                }
                if(type2) {
                    for (var d = 0; d < 4; d++) {
                        for(var j=0;j<arrRow[d].length;j++){
                            if(arrRow[d][j].innerText!=""){
                                if ((arrRow[d][0].innerText == arrRow[d][1].innerText) && (arrRow[d][2].innerText == arrRow[d][3].innerText)) {
                                    moveRight(0, 1);
                                }
                            }
                        }
                    }
                    for (var c3 = 0; c3 < arrRow.length; c3++) {
                        for (var p3 = 0; p3 < 4; p3++) {
                            for (var j3 = arrRow.length - 1; j3 > 0; j3--) {
                                if (arrRow[c3][j3].innerText == "") {
                                    arrRow[c3][j3].innerText = arrRow[c3][j3 - 1].innerText;
                                    arrRow[c3][j3 - 1].innerText = "";
                                }
                            }
                        }
                    }
                    moveRight(2, 3);
                    moveRight(1, 2);
                    moveRight(0, 1);
                    randomNum();
                    show();
                    gameOver();
                }
                break;
            case 40:
                var type3;
                for(var m3=0;m3<3;m3++){
                    for(var n3=0;n3<4;n3++){
                        if(arrRow[m3][n3].innerText!="") {
                            if (arrRow[m3+1][n3].innerText == arrRow[m3][n3].innerText || arrRow[m3+1][n3].innerText == "") {
                                type3= true;
                            }
                        }
                    }
                }
                if(type3) {
                    for (var e = 0; e < 4; e++) {
                        for(var j=0;j<arrRow.length;j++){
                            if(arrRow[j][e].innerText!=""){
                                if ((arrRow[0][e].innerText == arrRow[1][e].innerText) && (arrRow[2][e].innerText == arrRow[3][e].innerText)) {
                                    moveDown(0, 1);
                                }
                            }
                        }
                    }
                    for (var c4 = 0; c4 < arrRow.length; c4++) {
                        for (var p4 = 0; p4 < 3; p4++) {
                            for (var j4 = arrRow.length - 1; j4 > 0; j4--) {
                                if (arrRow[j4][c4].innerText == "") {
                                    arrRow[j4][c4].innerText = arrRow[j4 - 1][c4].innerText;
                                    arrRow[j4 - 1][c4].innerText = "";
                                }
                            }
                        }
                    }
                    moveDown(2, 3);
                    moveDown(1, 2);
                    moveDown(0, 1);
                    randomNum();
                    show();
                    gameOver();
                }
                break;
        }
       $(".showScore").html(score);
    });

    function randomNum(){
        getEmptyDiv();
        var ran=parseInt(Math.random()*2);
        var ranArr=parseInt(Math.random()*arrRan.length);
        arrRan[ranArr].innerText=randomIntNum[0];
        $(arrRan[ranArr]).removeClass().addClass("num"+randomIntNum[0]);
        $(arrRan[ranArr]).hide();
        $(arrRan[ranArr]).fadeIn(500);
    }
    function show(){
        for(var i=0;i<arrRow.length;i++){
            for(var j=0;j<arrRow[i].length;j++){
                var num=parseInt(arrRow[i][j].innerText);
                $(arrRow[i][j]).removeClass().addClass("num"+num);
            }
        }
    }
    function getEmptyDiv(){
        var divObjs=$(".main div");
        arrRan=[];
        for(var i=0;i<divObjs.length;i++){
            if(divObjs[i].innerText==""){
                arrRan.push(divObjs[i]);
            }
        }
    }
function gameOver(){
    getEmptyDiv();
    var type5;
    var type6;
    if(arrRan.length==0){
        for(var i=0;i<4;i++){
            for(var j=0;j<3;j++){
                if(arrRow[i][j].innerText==arrRow[i][j+1].innerText){
                     type5=3;
                }
            }
        }
        for(var i1=0;i1<3;i1++){
             for(var j2=0;j2<4;j2++){
                 if(arrRow[i1][j2].innerText==arrRow[i1+1][j2].innerText){
                       type6=2;
                    }
                }
            }
        if(type5==undefined&&type6==undefined){
            $(".gameOver").fadeIn(800);
            $(".scoreShow").html("score:"+score);
            saveScore();
        }
    }
}
    function empty(){
        var divObjs=$(".main div");
        for(var i=0;i<divObjs.length;i++){
            divObjs[i].innerText="";
        }
    }
    var maxScore=document.cookie;
    if(maxScore){
        maxScore=parseInt(document.cookie)
    }else{
        maxScore=0
    }
    function saveScore(){
        if(score<maxScore){
            return;
        }else{
            document.cookie=score;
        }
        $(".saveScoreShow").html(document.cookie);
    }
    $(".saveScoreShow").html(document.cookie);
};
    //var score1=0
    //function saveScore1() {
    //    if (score1 < score) {
    //        score1 = score;
    //        document.cookie = score1;
    //        $(".saveScoreShow").html(document.cookie);
    //    }
    //    if (document.cookie > score) {
    //        $(".saveScoreShow").html(document.cookie);
    //    }
    //}

    //document.cookie=0;
    //function saveScore(){
    //    if(document.cookie<=score){
    //        document.cookie=score;
    //        $(".saveScoreShow").html(document.cookie);
    //    }else if(document.cookie>score){
    //        $(".saveScoreShow").html(document.cookie);
    //    }
    //}

    //score1=0
    //function saveScore(){
    //    if(score1<score){
    //        score1=score;
    //        document.cookie=score1;
    //        $(".saveScoreShow").html(document.cookie);
    //    }
    //    if(document.cookie>score){
    //        $(".saveScoreShow").html(document.cookie);
    //    }
        //document.cookie=$(".saveScoreShow").html();
        //if(document.cookie<score){
        //    document.cookie=score;
        //}

    //}
    //    $(".saveScoreShow").html(document.cookie);


    //document.cookie=$(".saveScoreShow").html();
    //console.log(document.cookie);

    //$(".gameOver").show(500);
    //$(".scoreShow").html("score:"+score);





//function gameOver() {
//    var type4;
//    var divObjs = $(".main div");
//    for(var i=0;i<divObjs.length;i++){
//        if(divObjs[i].innerText==""){
//            break;
//        }else if(i==15){
//            alert(11);
//            type4=true
//        }
//    }
//    console.log(type4);
//}

 //    if ($.inArray(divObjs.innerText == "", divObjs)) {
    //        type4 = false;
    //    }else{
    //        alert(11);
    //    }

    //var key;
    //for(key in divObjs){
    //    if(divObjs[key].innerText!=""){
    //        type4=true;
    //    }
    //}
    //if(type4){
   //    var divObjs = $(".main div");
    //for (var z = 0; z < divObjs.length; z++) {
    //    //console.log(divObjs.innerText);
    //    if (divObjs[z].innerText == "") {
    //        type4 = false;
    //    }
    //}
    //}else{
    //    alert(11);
    //    type4=true;
    //}
    //console.log(type4);
    //if(type4){
    //    for(var i=0;i<arrRow.length-1;i++){
    //        for(var j=0;j<arrRow[i].length-1){
    //            if()
    //        }
    //    }
    //}


//function gameOver(){
//    var divObjs=$(".main div");
//    if($(divObjs).innerText=="") {
//        alert(11);
//    }



        //if($(divObjs).innerText==""){
        //    alert(11);
        //    for(var i=0;i<arrRow.length-1;i++){
        //        for(var j=0;j<arrRow[i].length-1;j++){
        //            if(arrRow[i][j].innerText==arrRow[i][j+1].innerText||arrRow[i][j].innerText==arrRow[i+1][j].innerText){
        //                alert(11);
        //            }
        //        }
        //
        //    }

        //}
    //}






//$(document).ready(function(){
//    var maxScore = document.cookie.maxscore;
//
//    if(maxScore){
//        maxScore = parseInt()
//    }else{
//        maxScore = 0;
//    }
//
//
//
//    gameOver();
//
//
//    fuc gameOver(){
//
//        if(curscore < maxScore){
//            return;
//        }else{
//
//        }
//
//    }
//})

