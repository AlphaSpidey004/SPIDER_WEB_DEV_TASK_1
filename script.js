var chance = -1;
var p1=[];
var p2 = [];
var i = 0;
var j = 0;
var win = 0;
var looping = 1;
var i1 = document.createElement("img");
var i2 = document.createElement("img");
var i3 = document.createElement("img");
var i4 = document.createElement("img");
var i5 = document.createElement("img");
var i6 = document.createElement("img");
var j1 = document.createElement("img");
var j2 = document.createElement("img");
var j3 = document.createElement("img");
var j4 = document.createElement("img");
var j5 = document.createElement("img");
var j6 = document.createElement("img");
i1.src = "Ellipse 1.png"
i2.src = "Ellipse 1.png"
i3.src = "Ellipse 1.png"
i4.src = "Ellipse 1.png"
i5.src = "Ellipse 1.png"
i6.src = "Ellipse 1.png"
j1.src = "Ellipse 1.png"
j2.src = "Ellipse 1.png"
j3.src = "Ellipse 1.png"
j4.src = "Ellipse 1.png"
j5.src = "Ellipse 1.png"
j6.src = "Ellipse 1.png"
window.addEventListener("keydown",(event)=>{
    if(event.code=="KeyE"){
        chance+=1;
        var num = Math.floor(Math.random()*5+1);
        
        if(chance%2==0){
            p1.push(num);
        }
        if(chance%2!=0){
            p2.push(num)
        }
        console.log(p1);
        console.log(p2);
    if(p1.length>0 && chance%2==0){
        const occur1 = function(arr, val){
        return arr.reduce((acc,elem) =>{
                return (val ===elem ? acc+1 : acc)
            },0)
        }
        console.log(p1);
        // for 1st block player 1

        if(occur1(p1,1)==1){
            var b1 = document.getElementById("p11");
            b1.appendChild(i1)
        }
        if(occur1(p1,1)==2){
            var b1 = document.getElementById("p11");
            i1.src="Frame 1.png"
            b1.appendChild(i1)
        }
        if(occur1(p1,1)==3){
            var b1 = document.getElementById("p11");
            i1.src = "Frame 2.png"
            b1.appendChild(i1)
        }
        if(occur1(p1,1)==4){
            var b1 = document.getElementById("p11");
            i1.src = "Frame 3.png"
            b1.appendChild(i1)
        }
        if(occur1(p1,1)==5){
            var b1 = document.getElementById("p11");
            i1.src = "Frame 4.png"
            b1.appendChild(i1)
            win+=1;
            if(win==1){
                alert("Player 1 Wins!!")
            }
        }
        
        // for 2nd block player 1

        if(occur1(p1,2)==1){
            var b1 = document.getElementById("p12");
            b1.appendChild(i2)
        }
        if(occur1(p1,2)==2){
            var b1 = document.getElementById("p12");
            i2.src="Frame 1.png"
            b1.appendChild(i2)
        }
        if(occur1(p1,2)==3){
            var b1 = document.getElementById("p12");
            i2.src = "Frame 2.png"
            b1.appendChild(i2)
        }
        if(occur1(p1,2)==4){
            var b1 = document.getElementById("p12");
            i2.src = "Frame 3.png"
            b1.appendChild(i2)
        }
        if(occur1(p1,2)==5){
            var b1 = document.getElementById("p12");
            i2.src = "Frame 4.png"
            b1.appendChild(i2)
            win+=1;
            if(win==1){
                alert("Player 1 Wins!!")
            }
        }
        

        // for 3rd block player 1

        if(occur1(p1,3)==1){
            var b1 = document.getElementById("p13");
            b1.appendChild(i3)
        }
        if(occur1(p1,3)==2){
            var b1 = document.getElementById("p13");
            i3.src="Frame 1.png"
            b1.appendChild(i3)
        }
        if(occur1(p1,3)==3){
            var b1 = document.getElementById("p13");
            i3.src = "Frame 2.png"
            b1.appendChild(i3)
        }
        if(occur1(p1,3)==4){
            var b1 = document.getElementById("p13");
            i3.src = "Frame 3.png"
            b1.appendChild(i3)
        }
        if(occur1(p1,3)==5){
            var b1 = document.getElementById("p13");
            i3.src = "Frame 4.png"
            b1.appendChild(i3)
            win+=1;
            if(win==1){
                alert("Player 1 Wins!!")
            }
        }
        

        // for 4th block player 1

        if(occur1(p1,4)==1){
            var b1 = document.getElementById("p14");
            b1.appendChild(i4)
        }
        if(occur1(p1,4)==2){
            var b1 = document.getElementById("p14");
            i4.src="Frame 1.png"
            b1.appendChild(i4)
        }
        if(occur1(p1,4)==3){
            var b1 = document.getElementById("p14");
            i4.src = "Frame 2.png"
            b1.appendChild(i4)
        }
        if(occur1(p1,4)==4){
            var b1 = document.getElementById("p14");
            i4.src = "Frame 3.png"
            b1.appendChild(i4)
        }
        if(occur1(p1,4)==5){
            var b1 = document.getElementById("p14");
            i4.src = "Frame 4.png"
            b1.appendChild(i4)
            win+=1;
            if(win==1){
                alert("Player 1 Wins!!")
            }
        }
        

        // for 5th block player 1

        if(occur1(p1,5)==1){
            var b1 = document.getElementById("p15");
            b1.appendChild(i5)
        }
        if(occur1(p1,5)==2){
            var b1 = document.getElementById("p15");
            i5.src="Frame 1.png"
            b1.appendChild(i5)
        }
        if(occur1(p1,5)==3){
            var b1 = document.getElementById("p15");
            i5.src = "Frame 2.png"
            b1.appendChild(i5)
        }
        if(occur1(p1,5)==4){
            var b1 = document.getElementById("p15");
            i5.src = "Frame 3.png"
            b1.appendChild(i5)
        }
        if(occur1(p1,5)==5){
            var b1 = document.getElementById("p15");
            i5.src = "Frame 4.png"
            b1.appendChild(i5)
            win+=1;
            if(win==1){
                alert("Player 1 Wins!!")
            }
        }
    
    }



    // BLOCK 2


    if(p2.length>0 && chance%2!=0){
        const occur2 = function(arr, val){
        return arr.reduce((acc,elem) =>{
                return (val ===elem ? acc+1 : acc)
            },0)
        }
        console.log(p2);
        // for 1st block player 2

        if(occur2(p2,1)==1){
            var b1 = document.getElementById("p21");
            b1.appendChild(j1)
        }
        if(occur2(p2,1)==2){
            var b1 = document.getElementById("p21");
            j1.src="Frame 1.png"
            b1.appendChild(j1)
        }
        if(occur2(p2,1)==3){
            var b1 = document.getElementById("p21");
            j1.src = "IMG\\Frame 2.png"
            b1.appendChild(j1)
        }
        if(occur2(p2,1)==4){
            var b1 = document.getElementById("p21");
            j1.src = "Frame 3.png"
            b1.appendChild(j1)
        }
        if(occur2(p2,1)==5){
            var b1 = document.getElementById("p21");
            j1.src = "Frame 4.png"
            b1.appendChild(j1)
            win+=1;
            if(win==1){
                alert("Player 2 Wins!!")
            }
            
        }
        
        // for 2nd block player 2

        if(occur2(p2,2)==1){
            var b1 = document.getElementById("p22");
            b1.appendChild(j2)
        }
        if(occur2(p2,2)==2){
            var b1 = document.getElementById("p22");
            j2.src="Frame 1.png"
            b1.appendChild(j2)
        }
        if(occur2(p2,2)==3){
            var b1 = document.getElementById("p22");
            j2.src = "Frame 2.png"
            b1.appendChild(j2)
        }
        if(occur2(p2,2)==4){
            var b1 = document.getElementById("p22");
            j2.src = "Frame 3.png"
            b1.appendChild(j2)
        }
        if(occur2(p2,2)==5){
            var b1 = document.getElementById("p22");
            j2.src = "Frame 4.png"
            b1.appendChild(j2)
            win+=1;
            if(win==1){
                alert("Player 2 Wins!!")
            }
        }
        

        // for 3rd block player 2

        if(occur2(p2,3)==1){
            var b1 = document.getElementById("p23");
            b1.appendChild(j3)
        }
        if(occur2(p2,3)==2){
            var b1 = document.getElementById("p23");
            j3.src="Frame 1.png"
            b1.appendChild(j3)
        }
        if(occur2(p2,3)==3){
            var b1 = document.getElementById("p23");
            j3.src = "Frame 2.png"
            b1.appendChild(j3)
        }
        if(occur2(p2,3)==4){
            var b1 = document.getElementById("p23");
            j3.src = "Frame 3.png"
            b1.appendChild(j3)
        }
        if(occur2(p2,3)==5){
            var b1 = document.getElementById("p23");
            j3.src = "Frame 4.png"
            b1.appendChild(j3)
            win+=1;
            if(win==1){
                alert("Player 2 Wins!!")
            }
        }
        

        // for 4th block player 2

        if(occur2(p2,4)==1){
            var b1 = document.getElementById("p24");
            b1.appendChild(j4)
        }
        if(occur2(p2,4)==2){
            var b1 = document.getElementById("p24");
            j4.src="Frame 1.png"
            b1.appendChild(j4)
        }
        if(occur2(p2,4)==3){
            var b1 = document.getElementById("p24");
            j4.src = "Frame 2.png"
            b1.appendChild(j4)
        }
        if(occur2(p2,4)==4){
            var b1 = document.getElementById("p24");
            j4.src = "Frame 3.png"
            b1.appendChild(j4)
        }
        if(occur2(p2,4)==5){
            var b1 = document.getElementById("p24");
            j4.src = "Frame 4.png"
            b1.appendChild(j4)
            win+=1;
            if(win==1){
                alert("Player 2 Wins!!")
            }
        }
        

        // for 5th block player 2

        if(occur2(p2,5)==1){
            var b1 = document.getElementById("p25");
            b1.appendChild(j5)
        }
        if(occur2(p2,5)==2){
            var b1 = document.getElementById("p25");
            j5.src="Frame 1.png"
            b1.appendChild(j5)
        }
        if(occur2(p2,5)==3){
            var b1 = document.getElementById("p25");
            j5.src = "Frame 2.png"
            b1.appendChild(j5)
        }
        if(occur2(p2,5)==4){
            var b1 = document.getElementById("p25");
            j5.src = "Frame 3.png"
            b1.appendChild(j5)
        }
        if(occur2(p2,5)==5){
            var b1 = document.getElementById("p25");
            j5.src = "Frame 4.png"
            b1.appendChild(j5)
            win+=1;
            if(win==1){
                alert("Player 2 Wins!!")
            }
        }

    }


    
    }
    }
)