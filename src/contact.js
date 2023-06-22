function createContact() {
  const contact = document.createElement('div')
  contact.classList.add('contact')

  const phoneNumber = document.createElement('p')
  phoneNumber.textContent = '📞 9444149013'

  const address = document.createElement('p')
  address.textContent = '🏠 Coimbatore, India'

  const restaurantLocation = document.createElement('img')
  restaurantLocation.src = 'images/restaurant-location.png'
  restaurantLocation.alt = 'Mozzafiato restaurant location'

  contact.appendChild(phoneNumber)
  contact.appendChild(address)
  contact.appendChild(restaurantLocation)

  return contact
}

function loadContact() {
  const main = document.getElementById('main')
  main.textContent = ''
  main.appendChild(createContact())
}

export default loadContact