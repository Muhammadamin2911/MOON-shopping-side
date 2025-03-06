let random = Math.floor(Math.random() * 100000000);

const random_num = document.querySelector(".random_num");
random_num.textContent = random;
const number = document.querySelector(".number");
const anti_robot = document.querySelector(".anti_robot");
const tugma = document.querySelector(".tugma");
const xato = document.querySelector(".xato");

tugma.addEventListener("click", () => {
  if (parseInt(number.value) === random) {
    if (anti_robot) {
      anti_robot.style.display = "flex"
      anti_robot.style.top = "-100vh"

    } else {
      console.error('Element ".anti_robot" topilmadi.');
    }
  } else {
    if (anti_robot, random_num, xato, number) {
      anti_robot.style.backgroundColor = "#ffb1b1";
      random_num.style.color = "white";
      xato.style.display = "block"
      number.value = ""
    }
  }
});




let sellers = [
  {
    image: '/Images/Image (24).png',
    name: 'Small Ecru Ceramic Compote',
    price: '$49.00',
    text: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.'
  },
  {
    image: '/Images/Image (25).png',
    name: 'Warrick White Vase 14"',
    price: '$49.00',
    text: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.'
  },
  {
    image: '/Images/Image (26).png',
    name: 'Porcelain Dinner Plate',
    price: '$49.00',
    text: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.'
  },
  {
    image: '/Images/Image (27).png',
    name: 'Warrick White Vase 20',
    price: '$49.00',
    text: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.'
  },
  {
    image: '/Images/Image (28).png',
    name: 'Rounded Dual Handled Vase',
    price: '$49.00',
    text: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.'
  },
  {
    image: '/Images/Image (29).png',
    name: 'Marin White Dinner Plate',
    price: '$49.00',
    text: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.'
  },
  {
    image: '/Images/Image (30).png',
    name: 'Tall Cream Ceramic Vase',
    price: '$49.00',
    text: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.'
  },
  {
    image: '/Images/Image (31).png',
    name: 'Luana Bowl',
    price: '$49.00',
    text: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.'
  }
];




let arrivals = [
  {
    image: '/Images/Image (24).png',
    name: 'Small Ecru Ceramic Compote',
    price: '$49.00',
    text: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.'
  },
  {
    image: '/Images/Image (25).png',
    name: 'Warrick White Vase 14"',
    price: '$49.00',
    text: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.'
  },
  {
    image: '/Images/Image (26).png',
    name: 'Porcelain Dinner Plate',
    price: '$49.00',
    text: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.'
  },
  {
    image: '/Images/Image (27).png',
    name: 'Warrick White Vase 20',
    price: '$49.00',
    text: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.'
  }
];



function cardshow(arrivals) {
  const card = document.createElement('div');
  card.classList.add("card");
  card.innerHTML = `
      <img src="${arrivals.image}">
      <h1>${arrivals.name}</h1>
      <h2>${arrivals.price}</h2>
      <p>${arrivals.text}</p>
      <button>ADD TO CART</button>
      `;
  return card;
}
const arrivalse = document.querySelector(".arrivals_card")
arrivals.forEach(arrivals => {
  const card = cardshow(arrivals);
  arrivalse.appendChild(card)
})



let counter = 0; // Hisoblagichni boshlash

function cardshow(sellers) {
  const card = document.createElement('div');
  card.classList.add("card");
  card.innerHTML = `
      <img src="${sellers.image}" alt="Mahsulot surati">
      <h1>${sellers.name}</h1>
      <h2>${sellers.price}</h2>
      <p>${sellers.text}</p>
      <button class="add_karzinka">SAVATGA QO'SHISH</button>`;

  const button_cl = card.querySelector(".add_karzinka");
  const karzinka = document.querySelector(".karzinka");
  const counterDisplay = document.querySelector(".counter_display");

  button_cl.addEventListener("click", () => {
    const karzinka_item = card.cloneNode(true);
    const boxcounter = document.createElement("div");


    counter++;
    counterDisplay.textContent = `Savatdagi mahsulotlar soni: ${counter}`;

    let sanagich = 0;
    const plus = document.createElement("div");
    plus.classList.add("plus");
    plus.textContent = "+";

    const minus = document.createElement("div");
    minus.classList.add("minus");
    minus.textContent = "-";

    const sanagichValue = document.createElement("div");
    sanagichValue.classList.add("sanagichValue");
    sanagichValue.textContent = sanagich;
    const summs = document.createElement("div");
    summs.classList.add("summs")
    plus.addEventListener("click", () => {
      sanagich++;
      sanagichValue.textContent = sanagich;
      let sum = (sellers.price.slice(1, sellers.price.length))
      let result = sum * sanagich
      summs.textContent = `$${result}`
      result.style.color = "green"
      summs.style.width = "200px"
      console.log(result);


    });
    plus.style.width = "25px"
    plus.style.height = "25px"
    plus.style.borderRadius = "5"
    plus.style.border = "1px solid gray"
    plus.style.textAlign = "center"



    minus.addEventListener("click", () => {
      if (sanagich > 0) {
        sanagich--;
        sanagichValue.textContent = sanagich;
        let sum = (sellers.price.slice(1, sellers.price.length))
        let result = sum * sanagich
        summs.textContent = `$${result}`
        console.log(result);
        result.style.color = "green"
      }
    });
    minus.style.width = "25px"
    minus.style.height = "25px"
    minus.style.borderRadius = "5"
    minus.style.border = "1px solid gray"
    minus.style.textAlign = "center"

    const deletebt = document.createElement("div");

    deletebt.classList.add("deletebt");
    deletebt.textContent = ("🗑️")
    deletebt.style.width = "30px"
    deletebt.style.height = "30px"

    deletebt.addEventListener("click", () => {
      karzinka_item.remove()
      counter--; // Savatdagi mahsulotlar sonini kamaytirish
      counterDisplay.textContent = `Savatdagi mahsulotlar soni: ${counter}`;
    });
    const box = document.createElement("div")
    box.style.display = "flex"
    box.style.gap = "30px"

    boxcounter.style.display = "flex"

    boxcounter.style.gap = "10px"



    boxcounter.appendChild(summs);
    boxcounter.appendChild(minus);
    boxcounter.appendChild(sanagichValue);
    boxcounter.appendChild(plus);
    box.appendChild(boxcounter);
    box.appendChild(deletebt);
    karzinka_item.appendChild(box)
    karzinka.appendChild(karzinka_item);


  });

  return card;



}
cardshow(sellers)



const container = document.querySelector(".container")
sellers.forEach(sellers => {
  const card = cardshow(sellers);
  container.appendChild(card)
})

const shopcard = document.querySelector(".shopcard")
console.log(shopcard);

function open_shop() {
  shopcard.style.display = "grid"
  shopcard.style.top = "50px"
}
function close_shop() {
  shopcard.style.display = "grid"
  shopcard.style.top = "-450px"
}

const karzinka = document.querySelector(".karzinka")
console.log(karzinka);

function open_karzinka() {
  karzinka.style.display = "grid"
  karzinka.style.left = "600px"
  karzinka.style.top = "80px"

}
function close_karzinka() {
  karzinka.style.display = "grid"
  karzinka.style.left = "2000px"
  karzinka.style.top = "-1000px"

}





const bars_link = document.querySelector(".bars_link")
const bars = document.querySelector(".bars")
let lazer = 0
bars.addEventListener("click", () => {
  if (lazer === 0) {
    bars_link.style.top = "40px"
    lazer++
  } else {
    bars_link.style.top = "-400px"
    lazer--
  }
})


