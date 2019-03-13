let total = 0;
let c = 0;
let count = 0;



function put(val) 
    {    
        var grade = document.getElementById("result").value = val;
        let txt = grade;

        check();
        
        if (c == 0){
            var grade_display = document.getElementById("fresult").value += "(" + val + ")";
                            
            document.getElementById("result").value = "(" + txt + ")";
            console.log(++c);

        } else {
            document.getElementById("result").value = "+(" + txt + ")+";
            var grade_display = document.getElementById("fresult").value += "+(" + val + ")";

            console.log(++c);
        }

        switch (txt)
        {
            case "A":

            total += 4 * 3;

            break;
            case "B+":
                 
            total += 3.5 * 3;
            break;
            case "B":
                 
            total += 3 * 3;
            break;
            case "C+":
                 
            total += 2.5 * 3;
            break;
            case "C":
                 
            total += 2 * 3;
            break;
            case "D":
                 
            total += 1 * 3;
            break;
            case "F/FD":
                 
            total += 0 * 3;
            break;
            
            default:
            break;

            }

        } 
           

function ans() 
    { 
        var res =  total + " / " + (c * 3) + " units" + " = " ;
        var roff = Math.round((total / (c * 3)) * 100) / 100
             

        document.getElementById("result1").value = res+ " "+parseFloat(roff);

        count++;
    } 


           
         //function that clear the display 
function ers() 
    { 
        document.getElementById("result").value = ""
        document.getElementById("result1").value = "0.0"
        document.getElementById("fresult").value = ""
        
        c = 0;
        total = 0;
    }


function check()
    {
        if (count > 0){
            document.getElementById("result").value = ""
            document.getElementById("result1").value = "0.0"
            document.getElementById("fresult").value = ""
            c = 0;
            total = 0;
            count = 0;
    }   
}

 
