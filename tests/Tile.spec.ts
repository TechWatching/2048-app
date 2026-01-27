import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tile from '../app/components/game/Tile.vue'

describe('Tile', () => {
  it('applies an orange background for value 2', () => {
    const wrapper = mount(Tile, {
      props: {
        value: 2
      }
    })

    expect(wrapper.classes()).toContain('bg-amber-100')
  })
})
