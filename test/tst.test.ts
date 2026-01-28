
import { describe, it, expect } from 'vitest'

const add = (a: number, b: number) => a + b

describe('Test de calcul simple', () => {
  it('doit additionner deux nombres', () => {
    //expect(add(2, 2)).toBe(5)
    expect(add(2, 2)).toBe(4)
  })
})