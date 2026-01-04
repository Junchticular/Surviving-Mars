// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:packed_ice")
        .matchMainHand(Item.of("flinttools:flint_knife").ignoreNBT())
        .addLoot("4x ad_astra:ice_shard");
});