import { argtor } from '../src'

describe('argtract(fn)', () => {
  it('simple', () => {
    let count = 0
    const args = argtor(({ foo, bar }: any) => {
      console.log(foo, bar)
      count++
    })
    expect([...args]).toEqual(['foo', 'bar'])
    expect(count).toBe(0)
  })

  it('object destructure', () => {
    let count = 0
    const args = argtor(({ foo: { a = 123, b = 456 }, bar }: any) => {
      console.log(a, b, bar)
      count++
    })
    expect([...args]).toEqual(['foo', 'bar'])
    expect(count).toBe(0)
  })

  it('array destructure', () => {
    let count = 0
    const args = argtor(({ foo: [a = 123, b = 456], bar }: any) => {
      console.log(a, b, bar)
      count++
    })
    expect([...args]).toEqual(['foo', 'bar'])
    expect(count).toBe(0)
  })

  it('function default', () => {
    let count = 0
    const args = argtor(({ foo: [a = ({ x, y }: any) => x + y, b = 456], bar }: any) => {
      console.log(a, b, bar)
      count++
    })
    expect([...args]).toEqual(['foo', 'bar'])
    expect(count).toBe(0)
  })

  it('strings defaults', () => {
    let count = 0
    const args = argtor(({ foo: [a = ({ x, y }: any) => x + y, b = '({ => bar, any'], bar }: any) => {
      console.log(a, b, bar)
      count++
    })
    expect([...args]).toEqual(['foo', 'bar'])
    expect(count).toBe(0)
  })

  it('non-arrow function', () => {
    let count = 0
    const args = argtor(
      function({ foo: [a = ({ x, y }: any) => x + y, b = '({ => bar, any'], bar, zoo = '}) => x, y' }: any) {
        console.log(a, b, bar, zoo)
        count++
      }
    )
    expect([...args]).toEqual(['foo', 'bar', 'zoo'])
    expect(count).toBe(0)
  })
})
