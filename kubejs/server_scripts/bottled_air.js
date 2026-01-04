// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ItemEvents.rightClicked('minecraft:glass_bottle', event => { 
  let player = event.player
  console.log(`${player.name} position = { X: ${player.x}, Y: ${player.y}, Z: ${player.z} }`)
  
  if (player.y >= 151 && player.y <= 250){
    event.player.giveInHand('kubejs:light_mars_air')
    event.item.count--
    //event.target.playSound('minecraft:entity.cow.milk') < doesnt work
  }
  
  if (player.y >= 100 && player.y <= 150){
    event.player.giveInHand('kubejs:mars_air')
    event.item.count--
    //event.target.playSound('minecraft:entity.cow.milk') < doesnt work
  }

  
  if (player.y >= 60 && player.y <= 99){
    event.player.giveInHand('kubejs:dense_mars_air')
    event.item.count--
    //event.target.playSound('minecraft:entity.cow.milk') < doesnt work
  }

  if (player.y >= 1 && player.y <= 59){
    event.player.giveInHand('kubejs:heavy_mars_air')
    event.item.count--
    //event.target.playSound('minecraft:entity.cow.milk') < doesnt work
  }

  if (player.y >= -64 && player.y <= 0){
    event.player.giveInHand('kubejs:super_heavy_mars_air')
    event.item.count--
    //event.target.playSound('minecraft:entity.cow.milk') < doesnt work
  }

  
  

})