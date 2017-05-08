import isPlainObject = require('lodash.isplainobject')

export default function selectRandom<T>(o: T): any | never
{
  if (isPlainObject(o))
  {
    var keys = Object.keys(o)
    var _o: { [index: string]: any } & T = o

    return _o[keys[keys.length * Math.random() << 0]] 
  } 

  if (Array.isArray(o)) 
  {
    return o[o.length * Math.random() << 0]
  }

  throw new Error('Either object literal or array must be presented.')
}
