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


    }
)