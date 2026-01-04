ItemEvents.modification(event => {

  //80 FE/bT in MYC generator
  //30 FE/bT in PIT generator

  event.modify('chemlib:carbon', item => {
    item.burnTime = 200
  })

  event.modify('chemlib:hydrogen', item => {
    item.burnTime = 20
  })

  event.modify('chemlib:oxygen', item => {
    item.burnTime = 50
  })


  event.modify('create:red_sand_paper', item => {
    item.maxDamage = 192
  })


    }
)