const flavors = [
  {
    name: 'Strawberry Swirl',
    description: 'Creamy strawberry ribbons with vanilla bean finish.',
    color: 'pink',
    price: '$6.50',
  },
  {
    name: 'Mint Chip',
    description: 'Cool mint ice cream with dark chocolate crunch.',
    color: 'green',
    price: '$7.00',
  },
  {
    name: 'Caramel Cookie',
    description: 'Buttery caramel base layered with cookie crumbs.',
    color: 'gold',
    price: '$6.75',
  },
  {
    name: 'Blueberry Cheesecake',
    description: 'Smooth cheesecake flavor topped with berry bursts.',
    color: 'blue',
    price: '$7.25',
  },
  {
    name: 'Choco Fudge',
    description: 'Rich cocoa indulgence with warm fudge ribbons.',
    color: 'brown',
    price: '$7.50',
  },
  {
    name: 'Vanilla Cloud',
    description: 'Classic vanilla with a silky, airy finish.',
    color: 'cream',
    price: '$6.25',
  },
]

const flavorGrid = document.querySelector('#flavor-grid')

flavors.forEach((flavor) => {
  const card = document.createElement('article')
  card.className = 'flavor-card'
  card.innerHTML = `
    <div class="flavor-swatch ${flavor.color}" aria-hidden="true"></div>
    <h3>${flavor.name}</h3>
    <p>${flavor.description}</p>
    <div class="flavor-meta">
      <span>${flavor.price}</span>
      <button>Add</button>
    </div>
  `
  flavorGrid.appendChild(card)
})
