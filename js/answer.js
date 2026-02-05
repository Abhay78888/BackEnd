const scores = ["85", 92, "67", 40, 100, "30", 76, "90"];
function analyzeScores(scoresArray){
    let total=0;
    let excellent=0;
    let pass=0;
    let fail=0;
    let sum=0;
    for(let i =0;i<scoresArray.length;i++){
        let score=Number(scoresArray[i]);

        if(isNaN(score)){
            continue;
        }
        total=total+1;
        sum=sum+score;

        if(score>=90){
            excellent=excellent+1;
            console.log("Score:" , score , "Excellent");
        }
        else if(score>=60){
            pass=pass+1;
            console.log("Score:" , score , "pass")
        }

        
        else{
            fail=fail+1;
            console.log("Score:" , score , "fail")
        }
        




        

    

    }
    let avg=0;
    if(total>0){
        avg=(sum/total).toFixed(2);
    }
    return{
  totalStudents: total,
  excellent: excellent,
  pass: pass,
  fail: fail,
  averageScore: avg
};



}

const result=analyzeScores(scores);
console.log(result);