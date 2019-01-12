import { Pred, HashMap } from './types'
import { isObject } from './lang'
import { constant } from './constant'

type PredMap<T> = { [K in keyof T]: Pred<T[K]> }

const _conforms = <T>(predMap: PredMap<T>) => {
  return (val: any): val is T => {
    if (!isObject<HashMap>(val)) {
      return false
    }
    try {
      for (const key in predMap) {
        const pred = predMap[key]
        const v = val[key]
        if (!(key in val) || !pred(v)) {
          return false
        }
      }
    } catch {
      return false
    }
    return true
  }
}

const skipProd = <T>(predMap: PredMap<T>) => {
  if (process.env.NODE_ENV === 'production') {
    return constant(true) as Pred<T>
  }
  return _conforms(predMap)
}

export const conforms = Object.assign(_conforms, { skipProd })
