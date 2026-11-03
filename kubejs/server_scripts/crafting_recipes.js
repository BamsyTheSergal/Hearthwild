ServerEvents.recipes(event => {
    event.shaped(Item.of('minecraft:stick', 16), [
        'L',
        'L'
    ], {
        L: '#minecraft:logs'
    })
    event.shaped(Item.of('minecraft:chest', 4), [
        'LLL',
        'L L',
        'LLL'
    ], {
        L: '#minecraft:logs'
    })
})
