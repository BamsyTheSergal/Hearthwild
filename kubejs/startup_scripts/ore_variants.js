// Registers poor/rich ore blocks (stone + deepslate) for Geolosys ores.
// Replaces the old hematite/limonite-only script, so delete that one.
// Written without const-in-loops / for-of, since KubeJS's Rhino handles those oddly.

let SoundType = Java.loadClass('net.minecraft.world.level.block.SoundType')

// id: [display name, tool tier for stone variant, tool tier for deepslate variant]
// Tiers match the Geolosys originals ('' = any pickaxe).
let ORES = {
  hematite:        ['Hematite',        'stone', 'stone'],
  limonite:        ['Limonite',        'stone', 'stone'],
  sphalerite:      ['Sphalerite',      'stone', 'iron'],
  gold:            ['Gold',            'iron',  'iron'],
  cassiterite:     ['Cassiterite',     'stone', 'iron'],
  azurite:         ['Azurite',         'iron',  'iron'],
  coal:            ['Coal',            '',      ''],
  anthracite_coal: ['Anthracite Coal', 'iron',  'iron'],
  bituminous_coal: ['Bituminous Coal', 'stone', 'iron'],
  lignite:         ['Lignite',         'stone', 'iron']
}

StartupEvents.registry('block', event => {
  ['poor', 'rich'].forEach(function (q) {
    Object.keys(ORES).forEach(function (ore) {
      ['', 'deepslate_'].forEach(function (deep) {
        let info = ORES[ore]
        let id = q + '_' + deep + ore + '_ore'
        let name = (q == 'rich' ? 'Rich ' : 'Poor ') + (deep ? 'Deepslate ' : '') + info[0] + ' Ore'
        let tier = deep ? info[2] : info[1]

        let b = event.create(id)
          .displayName(name)
          .soundType(deep ? SoundType.DEEPSLATE : SoundType.STONE)
          .hardness(deep ? 4.5 : 3)
          .resistance(3)
          .requiresTool(true)
          .tagBlock('minecraft:mineable/pickaxe')
          .tagBlock('forge:ores')
        if (tier) b.tagBlock('minecraft:needs_' + tier + '_tool')
      })
    })
  })
})
