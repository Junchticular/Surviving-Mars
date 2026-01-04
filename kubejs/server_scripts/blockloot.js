// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:packed_ice").addLoot(
        LootEntry.of("4x ad_astra:ice_shard").when((c) => c.matchMainHand(Item.of("flinttools:flint_knife").ignoreNBT())),
        LootEntry.of("16x ad_astra:ice_shard").when((c) => c.matchMainHand(Item.of("minecraft:stone_sword").ignoreNBT()))
    );

});

