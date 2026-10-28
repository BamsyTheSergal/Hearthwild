// Registers poor/rich hematite + limonite ore blocks (stone + deepslate)
// Written without const-in-loops / for-of, since KubeJS's Rhino handles those oddly.
StartupEvents.registry('block', event => {
  ['poor', 'rich'].forEach(function (q) {
    ['hematite', 'limonite'].forEach(function (ore) {
      ['', 'deepslate_'].forEach(function (deep) {
        let id = q + '_' + deep + ore + '_ore'
        let name = (q == 'rich' ? 'Rich ' : 'Poor ') + (deep ? 'Deepslate ' : '') + ore.charAt(0).toUpperCase() + ore.slice(1) + ' Ore'
        event.create(id)
          .displayName(name)
          .hardness(deep ? 4.5 : 3)
          .resistance(3)
          .requiresTool(true)
          .tagBlock('minecraft:mineable/pickaxe')
          .tagBlock('minecraft:needs_stone_tool')
          .tagBlock('forge:ores')
      })
    })
  })
})
