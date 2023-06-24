function toVal(mix) {
    if (!mix) return false
    let str = ""
    str += mix
    return str
  }
  
export function clss(...args) {
    let i = 0,
      tmp,
      x,
      str = ""
    while (i < args.length) {
      if ((tmp = args[i++])) {
        if ((x = toVal(tmp))) {
          str && (str += " ")
          str += x
        }
      }
    }
    return str
  }