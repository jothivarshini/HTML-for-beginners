function check() {
    var c = 0
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById("quiz")
    if (q1=="On the Doorstep") {c++}
    if (q2=="11") {c++}
    if (q3=="Howler") {c++}
   quiz.style.display="none";
    
    if (c<3){
        result.textContent=`Your result is ${c}. You are not a true Potterhead.`
    } else{
        result.textContent=`Your result is ${c}. Good job, you know the basics. Now time for some harder ones.`

    }
      
}
