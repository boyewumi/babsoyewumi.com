function y(t) {
  var e,
    n,
    a = ''
  if (typeof t == 'string' || typeof t == 'number') a += t
  else if (typeof t == 'object')
    if (Array.isArray(t)) {
      var r = t.length
      for (e = 0; e < r; e++) t[e] && (n = y(t[e])) && (a && (a += ' '), (a += n))
    } else for (n in t) t[n] && (a && (a += ' '), (a += n))
  return a
}
function g() {
  for (var t, e, n = 0, a = '', r = arguments.length; n < r; n++)
    (t = arguments[n]) && (e = y(t)) && (a && (a += ' '), (a += e))
  return a
}
function h(...t) {
  return (e) => {
    t.forEach((n) => {
      typeof n == 'function' ? n(e) : n != null && (n.current = e)
    })
  }
}
const f = (t) => (typeof t == 'boolean' ? `${t}` : t === 0 ? '0' : t),
  m = g,
  j = (t, e) => (n) => {
    var a
    if (e?.variants == null) return m(t, n?.class, n?.className)
    const { variants: r, defaultVariants: s } = e,
      V = Object.keys(r).map((l) => {
        const i = n?.[l],
          o = s?.[l]
        if (i === null) return null
        const u = f(i) || f(o)
        return r[l][u]
      }),
      v =
        n &&
        Object.entries(n).reduce((l, i) => {
          let [o, u] = i
          return (u === void 0 || (l[o] = u), l)
        }, {}),
      N =
        e == null || (a = e.compoundVariants) === null || a === void 0
          ? void 0
          : a.reduce((l, i) => {
              let { class: o, className: u, ...b } = i
              return Object.entries(b).every((C) => {
                let [c, d] = C
                return Array.isArray(d) ? d.includes({ ...s, ...v }[c]) : { ...s, ...v }[c] === d
              })
                ? [...l, o, u]
                : l
            }, [])
    return m(t, V, N, n?.class, n?.className)
  }
export { g as a, j as c, h as m }
