StartupEvents.registry('item', event => {

  event.create('mars_air')
    .displayName('Mars Air')
    .maxStackSize(64)
    .textureJson({
        layer0: 'minecraft:item/potion',
        layer1: 'minecraft:item/potion_overlay'
    })
    .color(0, '#ffffff')
    .color(1, '#fc5e03')



    event.create('special_shard_1')
    .displayName('Blue Shard')
    .maxStackSize(1)
    .textureJson({
        layer0: 'ad_astra:item/ice_shard',
        layer1: 'ad_astra:item/ice_shard',
    })
    .color(0, '#ffffff')
    .color(1, '#56ffd5ff')

      event.create('special_shard_2')
    .displayName('Red Shard')
    .maxStackSize(1)
    .textureJson({
        layer0: 'ad_astra:item/ice_shard',
    })
    .color(0, '#a10000')

    event.create('special_shard_3')
    .displayName('Purple Shard')
    .maxStackSize(1)
    .textureJson({
        layer0: 'ad_astra:item/ice_shard',
    })
    .color(0, '#73003f')

        event.create('special_shard_4')
    .displayName('Green Shard')
    .maxStackSize(1)
    .textureJson({
        layer0: 'ad_astra:item/ice_shard',
    })
    .color(0, '#00ff26')

        event.create('special_shard_5')
    .displayName('Yellow Shard')
    .maxStackSize(1)
    .textureJson({
        layer0: 'ad_astra:item/ice_shard',
    })
    .color(0, '#fff352')
        event.create('special_shard_6')
    .displayName('Black Shard')
    .maxStackSize(1)
    .textureJson({
        layer0: 'ad_astra:item/ice_shard',
    })
    .color(0, '#3c3c3c')
        event.create('special_shard_7')
    .displayName('White Shard')
    .maxStackSize(1)
    .textureJson({
        layer0: 'ad_astra:item/ice_shard',
    })
    .color(0, '#ececec')
        event.create('special_shard_8')
    .displayName('Orange Shard')
    .maxStackSize(1)
    .textureJson({
        layer0: 'ad_astra:item/ice_shard',
    })
    .color(0, '#ffb41d')


        event.create('infinity_shard')
    .displayName('Infinity Shard')
    .tooltip('Can seemingly be dissovled indefinitely, giving us an unlimited access to water.')
    .maxStackSize(1)
    .textureJson({
        layer0: 'ad_astra:item/ice_shard',
    })
    .glow(true)
    
    


    }
)