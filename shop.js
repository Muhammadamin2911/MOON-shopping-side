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
  },
  {
    image: '/Images/Image (27).png',
    name: 'Warrick White Vase 20',
    price: '$49.00',
    text: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.'
  }
];

function cardshow(sellers) {
  const card = document.createElement('div');
  card.classList.add("card");
  card.innerHTML = `
      <img src="${sellers.image}">
      <h1>${sellers.name}</h1>
      <h2>${sellers.price}</h2>
      <p>${sellers.text}</p>
      <button>ADD TO CART</button>
      `;
  return card;
}
const reight = document.querySelector(".reight")
sellers.forEach(sellers => {
  const card = cardshow(sellers);
  reight.appendChild(card)
})