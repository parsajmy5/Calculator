let calculator=document.querySelector('#calculator');
let clear=document.querySelector('#clear');
let gamee=document.querySelector('#gamee');
let menha=document.querySelector('#menha');
let zabdar=document.querySelector('#zabdar');
let tagsim=document.querySelector('#tagsim');
let mosavi=document.querySelector('#mosavi');
let tavan=document.querySelector('#tavan');
let jazer=document.querySelector('#jazer');
let backspace=document.querySelector('#backspace');
let pnumber=document.querySelector('#pnumber');
let nogte=document.querySelector('#nogte');
let sin=document.querySelector('#sin');
let cos=document.querySelector('#cos');
let tan=document.querySelector('#tan');
let log=document.querySelector('#log');
let gazr=document.querySelector('#gazr');
let pulsmines=document.querySelector('#pulsmines');
let date;
let oprator;
let boolnogte=true;
let numbers=document.querySelectorAll('.number');
let to=document.getElementById("to");
let sand=document.getElementById("sand");
///////////////////////////////////////////////////////////////


// sand.addEventListener('change', function() {
//     valueone=sand.value;
//     valuetwo=to.value;
//     if(valueone==='2'&&valuetwo==='2')
//         {
//            alert("ali");
//         }
//     if(valueone==='2'&&valuetwo==='2')
//             {
//                alert("ali");
//             }    if(valueone==='2'&&valuetwo==='2')
//                 {
//                    alert("ali");
//                 }
// })
///////////////////////////////////////////////////////////////
pulsmines.addEventListener('click',(e)=>{
    calculator.textContent=calculator.textContent*-1;

})
///////////////////////////////////////////////////////////////
nogte.addEventListener('click',(e)=>{
    if(calculator.textContent=="0.0")
        {
            boolnogte=false;
        }
    else  if(boolnogte==true)
    {
        calculator.textContent+=".";
        boolnogte=false;
    }
})
///////////////////////////////////////////////////////////////
clear.addEventListener('click',(e)=>{
    calculator.textContent="0.0";
    boolnogte=true; 
})
///////////////////////////////////////////////////////////////
numbers.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(calculator.textContent=="0.0")
        {
            calculator.textContent=e.target.textContent;    
        }
        else
        {
            calculator.textContent+=e.target.textContent;
        }
    })
})
///////////////////////////////////////////////////////////////
backspace.addEventListener('click',(e)=>{
    let tedad=calculator.textContent.length;
    
    let lastchar=calculator.textContent.substring(tedad-1,tedad);
    if(lastchar=="." )
    {
        boolnogte=true;
    }
    if(tedad>1&&calculator.textContent!="0.0")
    {
    calculator.textContent=calculator.textContent.substring(0,tedad-1);
    }
    else
    {
        calculator.textContent="0.0";
    }
})
///////////////////////////////////////////////////////////////
gamee.addEventListener('click',(e)=>{
    date=Number(calculator.textContent);
    calculator.textContent="0.0";
    oprator="+";
})
///////////////////////////////////////////////////////////////
menha.addEventListener('click',(e)=>{
    date=Number(calculator.textContent);
    calculator.textContent="0.0";
    oprator="-";
})
///////////////////////////////////////////////////////////////
zabdar.addEventListener('click',(e)=>{
    date=Number(calculator.textContent);
    calculator.textContent="0.0";
    oprator="*";
})
///////////////////////////////////////////////////////////////
tagsim.addEventListener('click',(e)=>{
    date=Number(calculator.textContent);
    calculator.textContent="0.0";
    oprator="/";
})
///////////////////////////////////////////////////////////////
mosavi.addEventListener('click', (e)=>{

    switch (oprator) {
        case "+":
            calculator.textContent=date+Number(calculator.textContent);
            break;
        case "-":
            calculator.textContent=date-Number(calculator.textContent);
            break;
        case "*":
            calculator.textContent=date*Number(calculator.textContent);
            break;
        case "/":
            calculator.textContent=date/Number(calculator.textContent);
            break;
        case "^":
            calculator.textContent=Math.pow(date,Number(calculator.textContent));
            break;
        default:
            break;
    }

        date=Number(calculator.textContent);
        valueone=sand.value;
        valuetwo=to.value;
        let output=parseInt(date,valueone);
        calculator.textContent=output.toString(valuetwo);
    
})
///////////////////////////////////////////////////////////////
jazer.addEventListener('click',(e)=>{
    calculator.textContent=Math.sqrt(Number(calculator.textContent));
})
///////////////////////////////////////////////////////////////
pnumber.addEventListener('click',(e=>{
    calculator.textContent="3.14";
}))
///////////////////////////////////////////////////////////////
tavan.addEventListener('click',(e=>{
    date=Number(calculator.textContent);
    calculator.textContent="";
    oprator="^";
}))
///////////////////////////////////////////////////////////////
sin.addEventListener('click',(e=>{
    calculator.textContent=Math.sin(Number(calculator.textContent));
}))
///////////////////////////////////////////////////////////////
cos.addEventListener('click',(e=>{
    calculator.textContent=Math.cos(Number(calculator.textContent));
}))
///////////////////////////////////////////////////////////////
tan.addEventListener('click',(e=>{
    calculator.textContent=Math.tan(Number(calculator.textContent));
}))
///////////////////////////////////////////////////////////////
log.addEventListener('click',(e=>{
    calculator.textContent=Math.log(Number(calculator.textContent));
}))