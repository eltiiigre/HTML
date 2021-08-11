
document.getElementById('calculate').addEventListener('click', calculator);
document.getElementById('btn2').addEventListener('click', calculator);
document.getElementById('btn1').addEventListener('click', calculator);
document.getElementById('populationButton').addEventListener('click',calculator);
let collection={
    'sampleMean':null,
    'populationMean':null,
    'standardDeviation':null,
    'sampleSize':null,
    'populationContainer':null,
    'T-ScoreContainer':null,

}

let storeNumber = null;
let operands = 1;
let sampleMean = null;
function calculator(e){
    e.preventDefault();
    

    if(e.target.id ==="btn2"){
        displayPopulation();
        collection['populationContainer'] = 1;
        
    }

    if(collection['populationContainer'] === 1 && e.target.id ==="btn1"){
        displayTSCORE();  
    }

    if(e.target.id ==="calculate"){
        storeNumber= document.getElementById('userInput').value
        document.getElementById('userInput').value = ''

        for(let i=0; i<storeNumber.length;i++){
            if(storeNumber[i] ==="+"){
                operands = operands + 1;
            }

            if(storeNumber[i] ==="-"){
                operands = operands + 1;
            }

            if(storeNumber[i] ==="*"){
                operands = operands + 1;
            }

            if(storeNumber[i] ==="/"){
                operands = operands + 1;
            }
        }

        document.getElementById('sampleSize').value = operands;

        let sampleMean = calculateSampleMean();
        collection['sampleMean'] = sampleMean;
        collection['sampleSize'] = operands;

        document.getElementById('sampleMean').value = collection['sampleMean'];
        
        document.getElementById('populationMean').value = collection['populationMean'];

        collection['standardDeviation'] = document.getElementById('standardDeviation').value;

        calculateTSCORE();
    } 

    if(e.target.id ==="populationButton"){
        calculatePopulation();
    }
    
}

function displayPopulation(){
    document.querySelector('.Box').style.display = 'block';
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.Box').style.left = '37%';
  
}

function displayTSCORE(){
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.Box').style.display = 'none';
}

function calculateSampleMean(){
    
    let storeNumber1 = eval(storeNumber);
    let divide = storeNumber1 / operands;
    
    return divide;
}

function calculatePopulation(){
    let m1 = document.querySelector('#m1').value;
    let s1 = document.querySelector('#s1').value;
    let m2 = document.querySelector('#m2').value;
    let s2 = document.querySelector('#s2').value;
    let m3 = document.querySelector('#m3').value;
    let s3 = document.querySelector('#s3').value;
    let m4 = document.querySelector('#m4').value;
    let s4 = document.querySelector('#s4').value;
    let m5 = document.querySelector('#m5').value;
    let s5 = document.querySelector('#s5').value;
    let m6 = document.querySelector('#m6').value;
    let s6 = document.querySelector('#s6').value;

    let results = ((m1*s1) + (m2*s2) +  (m3*s3) + (m4*s4) + (m5*s5) + (m6*s6));

    let population = document.querySelector('.PopulationCalculator').value;
    document.querySelector('.PopulationCalculator').value = '';

    let finalResults = results / population;

    collection['populationMean'] = finalResults;
    document.querySelector('.PopulationCalculator').value = collection['populationMean'];

    document.querySelector('#m1').value =''
    document.querySelector('#s1').value =''
    document.querySelector('#m2').value =''
    document.querySelector('#s2').value =''
    document.querySelector('#m3').value =''
    document.querySelector('#s3').value =''
    document.querySelector('#m4').value =''
    document.querySelector('#s4').value =''
    document.querySelector('#m5').value =''
    document.querySelector('#s5').value =''
    document.querySelector('#m6').value =''
    document.querySelector('#s6').value =''

}

function calculateTSCORE(){
    let square = Math.sqrt(collection['sampleSize']);
    let x = collection['sampleMean'] - collection['populationMean'];
    let y = collection['standardDeviation'] / square;

    let finalScore = x / y;
    
    collection['T-ScoreContainer'] = finalScore;
    document.querySelector('#userInput').value = '';
    document.querySelector('#userInput').value = collection['T-ScoreContainer'];
}
