
PlayerEvents.loggedIn(event => {
    const player = event.player

    if (player.persistentData.hearthwildStarted) return

        player.persistentData.hearthwildStarted = true

        player.tell(Text.gold('Welcome to Hearthwild!'))
        player.tell(Text.gray('Your journey starts here. Good luck out there!'))

        player.give('minecraft:stone_sword')
        player.give('minecraft:stone_pickaxe')
        player.give('minecraft:stone_axe')
        player.give('minecraft:stone_shovel')
        player.give('minecraft:stone_hoe')
})
