// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ItemEvents.rightClicked('minecraft:glass_bottle', event => { 
  event.player.giveInHand('kubejs:mars_air')
  event.item.count--
  event.target.playSound('minecraft:entity.cow.milk')
})