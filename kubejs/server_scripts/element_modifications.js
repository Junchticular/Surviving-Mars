// priority: 0

// Visit the wiki for more info - https://kubejs.com/

//Test script... oxygen to oxygen

ServerEvents.recipes(event => {
  // You can replace `event` with any name you like, as
  // long as you change it inside the callback too!


  event.remove({ mod: "minecraft"})
  event.remove({ mod: "create"})
  event.remove({ type: "minecraft:smelting"})
  event.remove({ mod: "flinttools"})
  event.remove({ id: "alchemistry:liquifier/oxygen"})
  event.remove({ id: "alchemistry:dissolver/sand"})
  event.remove({ id: "alchemistry:dissolver/red_sand"})
  event.remove({ id: "alchemistry:polished_conglomerate"})
  event.remove({ type: "alchemistry:dissovler", input: "#forge:nuggets"})
  event.remove({ type: "alchemistry:combiner", output: "#minecraft:saplings"})
  event.remove({ type: "alchemistry:combiner", output: "#forge:seeds"})
  //event.remove({ not: { mod: 'ad_astra'}, tag: "#forge:storage_blocks"})
  //event.remove({ not: { mod: 'ad_astra'}, tag: "#forge:ingots" })                        
  //event.remove({ input: "minecraft:iron", output: "minecraft:bucket"}) <^ These 2 break oxygen distributor!???
  //event.remove({ output: "#minecraft:hoes"})
  //event.remove({ output: "#forge:tools/hoes"})
  event.remove({ id: "alchemistry:compactor/flint"})
  event.remove({ id: "alchemistry:compactor/sand"})
  event.remove({ id: "alchemistry:compactor/stone"})
  event.remove({ id: "alchemistry:compactor/diorite"})
  event.remove({ id: "alchemistry:compactor/cobblestone"})
  event.remove({ id: "alchemistry:compactor/granite"})
  //event.remove({ output: "flinttools:flint_knife"})

  //SMELTING
  event.smelting('toughasnails:purified_water_bottle', 'toughasnails:dirty_water_bottle')
  event.smelting('toughasnails:purified_water_bottle', Item.of("minecraft:potion", {Potion:"minecraft:water"}))

  //CAMPFIRE COOKING
  event.campfireCooking('minecraft:brick', 'minecraft:clay_ball', 0.35, 2400)
  event.campfireCooking('minecraft:baked_potato', 'minecraft:potato', 0.35, 300)

  //LIQUIFIER
  // Adds recipe for astra oxygen from element
  event.custom({
  type: "alchemistry:liquifier",
  cookingtime: 10,
  energy: 30,
  input: {
    ingredient: {
      item: 'chemlib:oxygen',
      amount: 1
    }
    },
    result: {
    fluid: "ad_astra:oxygen",
    amount: 2
    }
  }
)

  //DISSOLVER
  event.recipes.alchemistry.dissolver("minecraft:iron_nugget", 1, true)
    .withGroup(100, ["2x chemlib:iron"])
  event.recipes.alchemistry.dissolver("chemlib:aluminum_nugget", 1, true)
    .withGroup(100, ["2x chemlib:aluminum"])
  event.recipes.alchemistry.dissolver("chemlib:nickel_nugget", 1, true)
    .withGroup(100, ["2x chemlib:nickel"])
  event.recipes.alchemistry.dissolver("chemlib:magnesium_nugget", 1, true)
    .withGroup(100, ["2x chemlib:magnesium"])
  event.recipes.alchemistry.dissolver("chemlib:manganese_nugget", 1, true)
    .withGroup(100, ["2x chemlib:manganese"])



  event.recipes.alchemistry.dissolver("ad_astra:mars_sand", 1, true)
    .withGroup(9, ["minecraft:air"])
    .withGroup(45, ["chemlib:silicon_dioxide"])
    .withGroup(12, ["chemlib:iron_ii_oxide"])
    .withGroup(10, ["chemlib:aluminum_oxide"])
    .withGroup(9, ["chemlib:magnesium_oxide"])
    .withGroup(6, ["chemlib:sulfur_trioxide"])
    .withGroup(6, ["chemlib:iron_oxide"])
    .withGroup(1, ["chemlib:potassium_oxide"])
    .withGroup(1, ["chemlib:chlorine"])
    .withGroup(1, ["chemlib:phosphate"])

  event.recipes.alchemistry.dissolver("minecraft:red_sand", 1, true)
    .withGroup(12, ["chemlib:silicon_dioxide"])
    .withGroup(10, ["chemlib:iron_ii_oxide"])
    .withGroup(3, ["chemlib:aluminum_oxide"])
    .withGroup(4, ["chemlib:magnesium_oxide"])
    .withGroup(2, ["chemlib:sulfur_trioxide"])
    .withGroup(69, ["chemlib:iron_oxide"])

    event.recipes.alchemistry.dissolver("minecraft:sand", 1, true)
    .withGroup(78.9, ["chemlib:silicon_dioxide"])
    .withGroup(5, ["chemlib:aluminum_oxide"])
    .withGroup(3, ["chemlib:magnesium_oxide"])
    .withGroup(2, ["chemlib:sulfur_trioxide"])
    .withGroup(5, ["chemlib:potassium_oxide"])
    .withGroup(3, ["chemlib:chlorine"])
    .withGroup(3, ["chemlib:phosphate"])
    .withGroup(0.1, ["chemlib:gold"])


  event.recipes.alchemistry.dissolver("ad_astra:mars_stone", 1, true)
    .withGroup(8, ["minecraft:air"])
    .withGroup(50, ["chemlib:silicon_dioxide"])
    .withGroup(20, ["chemlib:iron_ii_oxide"])
    .withGroup(11, ["chemlib:aluminum_oxide"])
    .withGroup(9, ["chemlib:magnesium_oxide"])
    .withGroup(1, ["chemlib:potassium_oxide"])
    .withGroup(1, ["chemlib:phosphate"])
    

  event.recipes.alchemistry.dissolver("ad_astra:mars_cobblestone", 1, true)
    .withGroup(8, ["minecraft:air"])
    .withGroup(50, ["chemlib:silicon_dioxide"])
    .withGroup(20, ["chemlib:iron_ii_oxide"])
    .withGroup(11, ["chemlib:aluminum_oxide"])
    .withGroup(9, ["chemlib:magnesium_oxide"])
    .withGroup(1, ["chemlib:potassium_oxide"])
    .withGroup(1, ["chemlib:phosphate"])

  event.recipes.alchemistry.dissolver("ad_astra:conglomerate", 8, false)
    .withGroup(50, ["minecraft:iron_nugget"])
    .withGroup(25, ["4x chemlib:magnesium_oxide"])
    .withGroup(14.5, ["4x chemlib:nickel_oxide"])
    .withGroup(7.5, ["4x chemlib:chromium_oxide"])
    .withGroup(2.5, ["4x chemlib:manganese_oxide"])
    .withGroup(0.5, ["4x chemlib:thorium"])
    
  event.recipes.alchemistry.dissolver("kubejs:mars_air", 1, true)
    .withGroup(95, ["chemlib:carbon_dioxide", Item.of("minecraft:glass_bottle")])
    .withGroup(3, ["chemlib:nitrogen", Item.of("minecraft:glass_bottle")])
    .withGroup(2, ["chemlib:argon", Item.of("minecraft:glass_bottle")])

  event.recipes.alchemistry.dissolver("ad_astra:ice_shard", 1, false)
    .withGroup(99.5, ["8x chemlib:water"])
    .withGroup(0.5, ["chemlib:nickel"])

  event.recipes.alchemistry.dissolver(Item.of("minecraft:potion", {Potion:"minecraft:water"}), 1, false)
    .withGroup(100, ["16x chemlib:water"])

  //COMBINER

  event.recipes.alchemistry.combiner([
    Item.of("chemlib:methane", 12),
    Item.of("chemlib:oxygen", 2),
    Item.of("chemlib:nitrogen", 2)
  ], "chemlib:nylon")

  event.recipes.alchemistry.combiner([
    Item.of("chemlib:sulfur_trioxide", 1),
    Item.of("chemlib:water", 1)
  ], "chemlib:sulfuric_acid")

  event.recipes.alchemistry.combiner([
    Item.of("minecraft:glass_bottle", 1),
    Item.of("chemlib:water", 4)
  ], Item.of("minecraft:potion", {Potion:"minecraft:water"}))

  event.recipes.alchemistry.combiner([
    Item.of("minecraft:iron_nugget", 4),
    Item.of("minecraft:andesite", 4),
    Item.of("chemlib:pentane", 1)
  ], "4x create:andesite_alloy")

  //COMPACTOR

  event.recipes.alchemistry.compactor(Item.of("chemlib:iron_dust", 6), Item.of("ad_astra:iron_rod"))
  event.recipes.alchemistry.compactor(Item.of("chemlib:aluminum_dust", 6), Item.of("immersiveengineering:stick_aluminum"))
  event.recipes.alchemistry.compactor(Item.of("chemlib:nylon", 1), Item.of("minecraft:string", 4))
  event.recipes.alchemistry.compactor(Item.of("create:andesite_alloy", 2), Item.of("create:shaft", 1))

  //CREATE COMPACTOR
  event.recipes.create.compacting(['immersiveengineering:sawblade', Item.of('chemlib:iron_dust').withChance(0.15)], ['9x minecraft:iron_nugget', 'chemlib:hydrochloric_acid'])

  event.recipes.create.compacting('chemlib:iron_plate', '9x minecraft:iron_nugget')
  event.recipes.create.compacting('chemlib:aluminum_plate', '9x chemlib:aluminum_nugget')
  event.recipes.create.compacting('chemlib:nickel_plate', '9x chemlib:nickel_nugget')
  event.recipes.create.compacting('chemlib:magnesium_plate', '9x chemlib:magnesium_nugget')
  event.recipes.create.compacting('chemlib:manganese_plate', '9x chemlib:manganese_nugget')

  event.recipes.create.compacting('chemlib:iron_nugget', '2x chemlib:iron')
  event.recipes.create.compacting('chemlib:aluminum_nugget', '2x chemlib:aluminum')
  event.recipes.create.compacting('chemlib:nickel_nugget', '2x chemlib:nickel')
  event.recipes.create.compacting('chemlib:magnesium_nugget', '2x chemlib:magnesium')
  event.recipes.create.compacting('chemlib:manganese_nugget', '2x chemlib:manganese')


  //MIXER

  event.recipes.create.mixing('create:red_sand_paper', ['ad_astra:mars_sand', 'chemlib:nylon'])

  //SAW

  event.recipes.create.cutting('ad_astra:iron_rod', 'chemlib:iron_plate').processingTime(300)

  //SANDPAPER

  event.recipes.create.sandpaper_polishing('minecraft:red_sand', 'ad_astra:mars_sand')
  event.recipes.create.sandpaper_polishing('minecraft:sand', 'minecraft:red_sand')

  //SHAPELESS

  event.shapeless(
    Item.of("flinttools:flint_pieces", 1),
    [
      'minecraft:flint'
    ]
  )

  event.shapeless(
    Item.of("create:cogwheel", 4),
    [
      'create:shaft',
      'ad_astra:iron_rod',
      'ad_astra:iron_rod'
    ]
  )

  //event.shapeless(
  //  Item.of("create:red_sand_paper", 1),
  //  [
  //    'ad_astra:mars_sand',
  //    'chemlib:nylon'
  //  ]
  //)

  //SHAPED

  event.shaped(
  Item.of('flinttools:flint_knife', 1), // arg 1: output
  [
    ' A ',
    'B  ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'flinttools:flint_pieces',
    B: 'ad_astra:iron_rod'
  }
)

event.shaped(
  Item.of('create:whisk', 1), // arg 1: output
  [
    'AA ',
    'AA ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'immersiveengineering:stick_aluminum'
  }
)

event.shaped(
  Item.of('brickfurnace:brick_furnace', 1), // arg 1: output
  [
    'BB ',
    'AA ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'ad_astra:mars_cobblestone',
    B: 'minecraft:brick'
  }
)

event.shaped(
  Item.of('minecraft:crafting_table', 1), // arg 1: output
  [
    'BD ',
    'AC ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'chemlib:nickel_plate',
    B: 'chemlib:magnesium_plate',
    C: 'create:andesite_casing',
    D: 'chemlib:manganese_plate'
  }
)

event.shaped(
  Item.of('create:mechanical_saw', 1), // arg 1: output
  [
    'BC ',
    'AD ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'create:cogwheel',
    B: 'create:shaft',
    C: 'create:andesite_casing',
    D: 'immersiveengineering:sawblade'
  }
)

event.shaped(
  Item.of('create:mechanical_mixer', 1), // arg 1: output
  [
    'BC ',
    'AD ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'create:cogwheel',
    B: 'create:shaft',
    C: 'create:andesite_casing',
    D: 'create:whisk'
  }
)

event.shaped(
  Item.of('create:basin', 1), // arg 1: output
  [
    'AA ',
    'AA ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'create:shaft'
  }
)

event.shaped(
  Item.of('create:andesite_casing', 1), // arg 1: output
  [
    'BA ',
    'AB ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'create:andesite_alloy',
    B: 'chemlib:chromium_dust'
  }
)

event.shaped(
  Item.of('create:mechanical_press', 1), // arg 1: output
  [
    'BC ',
    'AD ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'create:cogwheel',
    B: 'create:shaft',
    C: 'create:andesite_casing',
    D: 'create:basin'
  }
)

  event.shaped(
  Item.of('create:hand_crank', 1), // arg 1: output
  [
    '   ',
    'BB ', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'create:andesite_alloy',
    B: 'ad_astra:iron_rod'
  }
)

  event.shaped(
  Item.of('flinttools:flint_pickaxe', 1), // arg 1: output
  [
    'AC ',
    'BA ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'flinttools:flint_pieces',
    B: 'ad_astra:iron_rod',
    C: 'minecraft:string'
  }
)




  // This part, inside the curly braces, is the callback.
  // You can modify as many recipes as you like in here,
  // without needing to use ServerEvents.recipes() again.

  console.log('Hello! The recipe event has fired!')
}

)


