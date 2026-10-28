PlayerEvents.loggedIn(event => {
    const player = event.player

    if (player.persistentData.hearthwildStarted) return

        player.persistentData.hearthwildStarted = true

        player.tell(Text.gold('Welcome to Hearthwild!'))
        player.tell(Text.gray('Your journey starts here. Good luck out there!'))

        player.give(Item.of('tconstruct:sword', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:rock","tconstruct:wood","tconstruct:rock"],tic_modifiers:[{level:1,name:"tconstruct:cultivated"},{level:2,name:"tconstruct:stonebound"},{level:1,name:"tconstruct:silky_shears"}],tic_multipliers:{"tconstruct:durability":1.1f,"tconstruct:mining_speed":0.5f},tic_persistent:{},tic_stats:{"tconstruct:attack_damage":4.0f,"tconstruct:attack_speed":1.6f,"tconstruct:block_amount":10.0f,"tconstruct:durability":135.85f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":2.05f},tic_volatile_data:{abilities:1,upgrades:3},tinkers_quenching_head_material:"tconstruct:rock"}'))

        player.give(Item.of('tconstruct:hand_axe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:rock","tconstruct:wood","tconstruct:rock"],tic_modifiers:[{level:1,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:stripping"},{level:2,name:"tconstruct:stonebound"}],tic_persistent:{},tic_stats:{"tconstruct:attack_damage":7.0f,"tconstruct:attack_speed":0.9f,"tconstruct:durability":130.0f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":4.0f},tic_volatile_data:{abilities:1,upgrades:3},tinkers_quenching_head_material:"tconstruct:rock"}'))

        player.give(Item.of('tconstruct:pickaxe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:rock","tconstruct:wood","tconstruct:rock"],tic_modifiers:[{level:1,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:pierce"},{level:2,name:"tconstruct:stonebound"}],tic_persistent:{},tic_stats:{"tconstruct:attack_damage":2.0f,"tconstruct:attack_speed":1.2f,"tconstruct:durability":130.0f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":4.0f},tic_volatile_data:{abilities:1,upgrades:3},tinkers_quenching_head_material:"tconstruct:rock"}'))

        player.give(Item.of('tinkers_things:shovel', '{tic_materials:["tconstruct:rock","tconstruct:wood"],tic_modifiers:[{level:1,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:knockback"},{level:1,name:"tconstruct:pathing"},{level:1,name:"tconstruct:stonebound"}],tic_persistent:{},tic_stats:{"tconstruct:attack_damage":2.5f,"tconstruct:durability":130.0f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":4.0f},tic_volatile_data:{abilities:1,upgrades:5},tinkers_quenching_head_material:"tconstruct:rock"}'))

        player.give(Item.of('tconstruct:kama', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:rock","tconstruct:wood","tconstruct:rock"],tic_modifiers:[{level:1,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:tilling"},{level:1,name:"tconstruct:harvest"},{level:2,name:"tconstruct:stonebound"},{level:1,name:"tconstruct:shears"}],tic_multipliers:{"tconstruct:attack_damage":0.5f},tic_persistent:{},tic_stats:{"tconstruct:attack_damage":1.0f,"tconstruct:attack_speed":1.6f,"tconstruct:durability":130.0f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":4.0f},tic_volatile_data:{abilities:1,upgrades:3},tinkers_quenching_head_material:"tconstruct:rock"}'))
})
