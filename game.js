var grade;
function GetGrade(){
    grade = document.getElementById("Grade").value;
    sai = grade;
    if(grade > 0 && grade < 6){
        document.getElementById("Invis").style = "display:inline;";
        document.getElementById("Vis").style = "display:none;";
        console.log(sai);
        document.getElementById("Error").innerHTML = "";
    }else{
        document.getElementById("Error").innerHTML = "Set a grade of 1,2,3,4 or 5";
    }
}