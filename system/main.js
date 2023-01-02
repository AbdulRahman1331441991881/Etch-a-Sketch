document.querySelector('title').innerHTML='Etch a Sketch'

var contanor = document.querySelector(".contanor");

var button1 = document.createElement('Button');
var button2 = document.createElement('Button');
var button3 = document.createElement('Button');
var button4 = document.createElement("Button");

var buttonsContanor = document.querySelector(".buttons")

window.onload = () => {
    var boxs = contanor.querySelectorAll(".box");
  boxs.forEach(box => box.addEventListener('mousemove', () => {
      boxs.style.background='black'
    }))
}


var CreateDiv = (col,rows) => {
    for (var i = 0; i < (col * rows); i++){
        
        var div = document.createElement('div'); 
        // div.style.border='1px solid red'
        contanor.style.gridTemplateColumns = `repeat(${col},ifr)`;
      contanor.style.gridTemplateRows = `repeat(${rows},ifr)`;
        contanor.appendChild(div).classList.add("box");
        button1.style.padding = '10px 15px';
        button1.style.margin = '20px'
        button1.style.width = "100px";
        button1.style.background = "rgb(240,255,240)";
        button1.style.border = "none";
        button2.style.padding = "10px 15px";
        button2.style.margin = "20px";
        button2.style.background = "rgb(240,255,240)";
        button2.style.width = "100px";
        button2.style.border = "none";
        button3.style.padding = "10px 15px";
        button3.style.margin = "20px";
        button3.style.background = "rgb(240,255,240)";
        button3.style.width = "100px";
        button3.style.border = "none";
        button4.style.padding="10px 15px"
        button4.style.margin = "20px";
        button4.style.background = "rgb(240,255,240)";
        button4.style.width = "100px";
        button4.style.border = "none";
        
    }
    
}
CreateDiv(4,4)
var GreyColor = () => {
    var boxs = contanor.querySelectorAll('.box')
    button2.textContent='Gray'
    button2.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mousemove', () => {
            var Rnum =Math.floor(Math.random()*255)
            box.style.background=`rgb(${Rnum},${Rnum},${Rnum})`
        }))
    })
    buttonsContanor.appendChild(button2).classList.add('btn')
}
GreyColor()
var GreyColor2 = () => {
  var boxs = contanor.querySelectorAll(".box");
  button1.textContent = "black";
  button1.addEventListener("click", () => {
    boxs.forEach((box) =>
      box.addEventListener("mousemove", () => {
        // var Rnum = Math.floor(Math.random() * 255);
        box.style.background = `black`;
      })
    );
  });
  buttonsContanor.appendChild(button1).classList.add("btn");
};
GreyColor2();
var GreyColor3 = () => {
  var boxs = contanor.querySelectorAll(".box");
  button3.textContent = "RGB";
  button3.addEventListener("click", () => {
    boxs.forEach((box) =>
      box.addEventListener("mousemove", () => {
       var R = Math.floor(Math.random() * 255);
       var G = Math.floor(Math.random() * 255);
       var B = Math.floor(Math.random() * 255);
          box.style.background = `rgb(${R},${G},${B})`
      })
    );
  });
  buttonsContanor.appendChild(button3).classList.add("btn");
};
GreyColor3();
var reSet = () => {
  var boxs = contanor.querySelectorAll(".box");
    boxs.forEach((box) => box.remove())
}
var reSiz = () => {
    button4.textContent='Graid size'
    button4.addEventListener('click', () =>{
        var user = prompt('what size do u want your grid to be?')
        if (user === null || user < 1) {
          reSet();
          CreateDiv(4, 4);
          GreyColor();
          GreyColor2();
          GreyColor3();
        } else if (user > 10) {
          reSet();
          CreateDiv(10, 10);
          GreyColor();
          GreyColor2();
          GreyColor3();
        } else {
          reSet();
          CreateDiv(user, user);
          GreyColor();
          GreyColor2();
          GreyColor3();
        }
         }
    )
    buttonsContanor.appendChild(button4).classList.add('btn')
}
reSiz()
var Background = () => {
    colors = ['red', 'blue', 'green', 'yellow']
    var section = document.querySelector('.section')
    var spam = document.createElement('span')
    
    let size = Math.random() * 50;
    spam.style.width=10 + size + 'px'
    spam.style.height = 10 + size + "px";
    spam.style.borderRadius= `${size}%`
    spam.style.top = Math.random() * innerHeight + `px`;
    spam.style.left = Math.random() * innerWidth + `px`;

    var background = colors[Math.floor(Math.random()* colors.length)]
    spam.style.background = background
    section.appendChild(spam)
    setTimeout(() => {
        spam.remove
    },3000)
}

setInterval(Background, 1000)




















