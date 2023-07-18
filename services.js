const message = [
  {
    id: 1,
    title: 'Full Body Massage',
    price: 49.99,
    img: './images/massage1.jpg',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti culpa repellat blanditiis necessitatibus exercitationem.`,
  },
  {
    id: 2,
    title: 'Thai Massage',
    price: 30.99,
    img: './images/massage2.jpg',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti culpa repellat blanditiis necessitatibus exercitationem.`,
  },
  {
    id: 3,
    title: 'Relaxing Massage',
    price: 29.5,
    img: './images/massage3.jpg',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti culpa repellat blanditiis necessitatibus exercitationem.`,
  },
  {
    id: 4,
    title: 'Feet Massage',
    price: 30.99,
    img: './images/massage4.jpg',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti culpa repellat blanditiis necessitatibus exercitationem.`,
  },
  {
    id: 5,
    title: 'Head Massage',
    price: 25.49,
    img: './images/massage5.jpg',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti culpa repellat blanditiis necessitatibus exercitationem.`,
  },
  {
    id: 6,
    title: 'Javanese Massage',
    price: 19.99,
    img: './images/massage6.jpg',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti culpa repellat blanditiis necessitatibus exercitationem.`,
  },
]

const sectionCenter = document.querySelector('.section-center')

window.addEventListener('DOMContentLoaded', function () {
  let displayMessage = message.map(function (item) {
    return `<article class="message-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <div>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </div>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`
  })
  displayMessage = displayMessage.join('')

  sectionCenter.innerHTML = displayMessage
})
