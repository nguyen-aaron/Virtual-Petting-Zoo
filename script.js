console.log("script running!");

const button1 = document.querySelector("#button1");

button1.addEventListener("click", () => {

  alert("Me-eh-eh-eh-eh")
  
}
)

const button2 = document.querySelector("#button2");

const status2 = document.querySelector("#status2");

button2.addEventListener("click", () => {

  status2.innerText = ("Thank you for petting Brodie. He is happy now")
  
}
)

const button3 = document.querySelector("#button3");
const status3 = document.querySelector("#status3");
let numberOfCarrots = 2;

button3.addEventListener("click", () => {
  if (numberOfCarrots < 10)
  {
    numberOfCarrots += 1;
    status3.innerText = `Coco has had ${numberOfCarrots} carrots today.`;
  }
  else
  {
    alert("No More")
  }
}
)

let button4 = document.querySelector("#button4");
const zoo = document.querySelector("#zoo");
const alligator = document.querySelector("#alligator");
let secondChance = document.querySelector("#second-chance");
const buttonYes = document.querySelector("#yes");
const buttonNo = document.querySelector("#no");


button4.addEventListener("click", () => {
    secondChance.style.display = "block"
    button4.style.display = "none"

    }
  )

buttonYes.addEventListener("click", () => {
      zoo.innerHTML = "<h1 class ='title'> You broke the rules. Bad. </h1>"
    }
    )

 buttonNo.addEventListener("click", () => {
      button4.style.display = "block"
      secondChance.style.display = "none"
 }
)



