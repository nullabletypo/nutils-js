import * as _ from '../src/index'

describe('not', () => {
  it('return predicate funciton with reversed result', () => {
    const isOverZero = (n: number) => n > 0
    const isNotObserZero = _.not(isOverZero)
    expect(isNotObserZero(1)).toBe(false)
    expect(isNotObserZero(0)).toBe(true)
  })

  it('convert function result to boolean', () => {
    const f = () => 0
    const f2 = () => ({})
    expect(_.not(f)()).toBe(true)
    expect(_.not(f2)()).toBe(false)
  })
})

describe('existy', () => {
  it('check value is not null or undefined', () => {
    expect(_.existy(undefined)).toBe(false)
    expect(_.existy(null)).toBe(false)
    expect(_.existy(0)).toBe(true)
    expect(_.existy('')).toBe(true)
    expect(_.existy([])).toBe(true)
    expect(_.existy({})).toBe(true)
  })
})


describe('identity', () => {
  it('retunr value', () => {
    expect(_.identity(1)).toBe(1)
  })
})

describe('constant', () => {
  it('return function that return same value constantly ', () => {
    const one = _.constant(1)
    expect(one()).toBe(1)
    expect(one({})).toBe(1)
  })
})

describe('prefixer', () => {
  it('add prefix', () => {
    const px = _.prefixer('prefix::')
    expect(px('postfix')).toBe('prefix::postfix')
  })
})


describe('bundle', () => {
  it('bundle same interface functions', () => {
    const f1 = (n: number) => n
    const f2 = (n: number) => n
    const m1 = jest.fn(f1) as typeof f1
    const m2 = jest.fn(f2) as typeof f2
    const f = _.bundle(m1, m2)
    expect(f(1)).toBeUndefined()
    expect(m1).toBeCalledWith(1)
    expect(m2).toBeCalledWith(1)
  })
})

describe('compose', () => {
  it('compose function from single argument functions', () => {
    const f1 = (n: number) => n + ''
    const f2 = (s: string) => s + '!'
    const m1 = jest.fn(f1) as typeof f1
    const m2 = jest.fn(f2) as typeof f2

    expect(_.compose(m2, m1)(1)).toBe('1!')
    expect(m1).toBeCalledWith(1)
    expect(m2).toBeCalledWith('1')
  })
})


describe('once', () => {
  it('invoke function just once', () => {
    const mock = jest.fn(() => 1)
    const f = _.once(mock)
    expect(f()).toBe(1)
    expect(f()).toBeUndefined()
    expect(mock).toHaveBeenCalledTimes(1)
  })
})


describe('justOnTime', () => {
  const _f = (n: number) => n

  it('invoke function just once on that time', () => {
    const m = jest.fn(_f) as typeof _f
    const f = _.afterOnce(2, m)

    f(1)
    expect(m).not.toBeCalled()

    f(1)
    expect(m).toBeCalled()
    expect(m).toBeCalledWith(1)

    f(1)
    expect(m).toHaveBeenCalledTimes(1)
  })

  test('times is 0 with init', () => {
    const m = jest.fn(_f) as typeof _f
    const f = _.afterOnce(0, m, [1])
    expect(m).toBeCalledWith(1)
  })
})

describe('getGlobal', () => {
  it('return global variables', () => {
    expect(_.getGlobal()).toBe(global)
  })
})


describe('conforms', () => {
  function isNumberList(v: any) {
    return Array.isArray(v) ? v.every(_.isNumber) : false
  }

  const isRecord = _.conforms({
    id: _.isNumber,
    content: _.isString,
    list: isNumberList as _.conforms.Predicate<number[]>,
    meta: _.conforms({ x: _.isBoolean }),
    anyProp: _.constant(true) as _.conforms.Predicate<any>,
  })

  it('return predicate function that validate compatibility of given value', () => {
    expect(isRecord(null)).toBe(false)
    expect(isRecord(undefined)).toBe(false)
    expect(isRecord('aaaa')).toBe(false)
    expect(isRecord({ id: 1 })).toBe(false)

    expect(isRecord({
      id: 1,
      content: 'string',
      list: [1, 2, 3],
      meta: { x: true },
    })).toBe(false)

    expect(isRecord({
      id: 1,
      content: 'string',
      list: [1, 2, 3],
      meta: { x: true },
      anyProp: '',
    })).toBe(true)
  })

  describe('skipProd', () => {
    // tslint:disable
    const ENV = process.env.NODE_ENV;
    const isRecord = _.conforms.skipProd({ id: _.isNumber });

    it('return true constantly if ENV is production', () => {
      if (ENV === 'production') {
        expect(ENV === 'production');
        expect(isRecord({ id: '1' })).toBe(true);
      } else {
        expect(isRecord({ id: '1' })).toBe(false);
      }
    });
    // tslint:enable
  })
})


test('or', () => {
  const predicate = _.or(_.isString, _.isNumber, _.isVoid)

  expect(predicate('')).toBe(true)
  expect(predicate(1)).toBe(true)
  expect(predicate(undefined)).toBe(true)
  expect(predicate(null)).toBe(true)
  expect(predicate({})).toBe(false)
})


test('and', () => {
  const hasNumId = _.conforms({ id: _.isNumber })
  const hasStrContent = _.conforms({ content: _.isString })
  const predicate = _.and(hasNumId, hasStrContent)

  expect(predicate({ id: 1, content: '' })).toBe(true)
  expect(predicate({ id: 1 })).toBe(false)
  expect(predicate({ id: 1, content: 1 })).toBe(false)
})
