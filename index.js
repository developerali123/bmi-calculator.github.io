//BMI=KG/(H/100*H/100)
document.getElementById("submit").addEventListener("click",function(){
    var output;
    var cm=parseFloat(document.getElementById("cm").value);
    var kg=parseFloat(document.getElementById("kg").value);
    console.log(cm);
    if(kg==""||cm==""){
        document.getElementById("result").innerHTML="please enter value";
    }else{
    cm=cm/100;
    var bmi=kg/(cm*cm);
    bmi=bmi.toFixed(1);
    if(bmi<18.5){
        output="under-weight";
    }
    else if(bmi>18.5&&bmi<=24.5){
        output="normal";
    }
    else{
        output="over-weight";
    }
    // console.log(bmi);
    document.getElementById("result").innerHTML="your BMI is: " + bmi+ " and this is considered "+output;
}
});