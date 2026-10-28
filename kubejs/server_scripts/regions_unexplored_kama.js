const SHEARS_OR_SILK = {
    condition: 'minecraft:any_of',
    terms: [
        {
            condition: 'minecraft:match_tool',
            predicate: { tag: 'forge:shears' }
        },
        {
            condition: 'minecraft:match_tool',
            predicate: {
                enchantments: [
                    {
                        enchantment: 'minecraft:silk_touch',
                        levels: { min: 1 }
                    }
                ]
            }
        },
        {
            condition: 'forge:can_tool_perform_action',
            action: 'shears_dig'
        }
    ]
}

ServerEvents.blockLootTables(event => {
    Block.getTypeList().forEach(id => {
        if (!id.startsWith('regions_unexplored:')) return
            if (!id.endsWith('_leaves')) return

                event.modifyBlock(id, table => {
                    table.addPool(pool => {
                        pool.rolls = 1
                        pool.addItem(id)
                        pool.addCondition(SHEARS_OR_SILK)
                    })
                })
    })
})
