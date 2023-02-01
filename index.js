
const Questions=[
    {
        'que':'CSS stands for',
        'a':'cascading style sheet',
        'b':'common style sheet',
        'c':'color style sheet',
        'd':'cascading system sheet',
        'correct':'a'

    },
    {
        'que':'CSS linked to html file via ',
        'a':'<a>',
        'b':'<img>',
        'c':'href',
        'd':'<link>',
        'correct':'d'
    },
    {
        'que':'<br> tag is for  ',
        'a':'horzontal line',
        'b':'line break',
        'c':'paragraph change',
        'd':'for bracket',
        'correct':'b'
    },
    {
        'que':'Not a position layout ',
        'a':'fixed',
        'b':'relative',
        'c':'absolute',
        'd':'natural',
        'correct':'d'
    },
    {
        'que':'Brain of web is called ',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'Nodejs',
        'correct':'c',
    }

]
let index=0;
let total=5;
let right=0;
let wrong=0;
const quesbox=document.getElementById("quesbox");
const optionInputs=document.querySelectorAll(".options")

const loadQuestion = () =>{
    if(index==total)
    {   
       return endquiz();
    }

    reset();
    const data=Questions[index]
    //console.log(data);
    quesbox.innerText= data.que;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}
const submitquiz = ()=>{
    const data=Questions[index]
    const ans=getanswer();
    if(ans===data.correct)
    {
       right++;
    }
    else
    {
        wrong++;
    }
    index++;
    loadQuestion()
    return;
}


const getanswer = () =>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                console.log("yes")
                answer=input.value;
            
            }
        }
    )
    return answer;
}

const reset =()=>{
    optionInputs.forEach(
        (input) =>{
            input.checked=false;
        }
    )
}
const endquiz =()=>{
    document.getElementById("box").innerHTML=
    '<h3> Thanku for playing Quiz.</h3>'+
    right + '<h2>out of </h2>'+ total + '<h2>are correct</h2>'



}
function Solution() {
    
    var id=document.getElementById("box");
    
    id.innerHTML= '<em>Thanku for playing Quiz.</em>'+
    '<h2><ol><li>CSS stands for Cascading Style Sheet.</li>'+
    '<li>CSS  link to html file via link tag.</li>'+
    '<li> tag is for Line Break</li>'+
    '<li>Natural is not any position layout </li>'+
    '<li>Java Script is called brain of web </li>'+
    '</ol> </h2>' 
    id.style.alignContent="left";
    id.style.textAlign="left";
    
}
function Answer() {
    
    var id=document.getElementById("box");
    
    id.innerHTML= '<em> Play the quiz first!.</em>'+
    '<h2><ol><li>CSS stands for Cascading Style Sheet.</li>'+
    '<li>CSS  link to html file via link tag.</li>'+
    '<li> BR tag is for Line Break.</li>'+
    '<li>Natural is not any position layout. </li>'+
    '<li>Java Script is called brain of web. </li>'+
    '</ol> </h2>' 
    id.style.alignContent="left";
    id.style.textAlign="left";
    
}
loadQuestion();