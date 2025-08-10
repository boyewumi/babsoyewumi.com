import { R as l, r as u } from './iframe-gEdmNp39.js'
import { a as ee } from './index-bEuIjaH0.js'
const w = typeof document < 'u' ? l.useLayoutEffect : () => {}
var F
const te = (F = l.useInsertionEffect) !== null && F !== void 0 ? F : w
function A(e) {
  const t = u.useRef(null)
  return (
    te(() => {
      t.current = e
    }, [e]),
    u.useCallback((...n) => {
      const r = t.current
      return r?.(...n)
    }, [])
  )
}
function ne(e) {
  let [t, n] = u.useState(e),
    r = u.useRef(null),
    o = A(() => {
      if (!r.current) return
      let a = r.current.next()
      if (a.done) {
        r.current = null
        return
      }
      t === a.value ? o() : n(a.value)
    })
  w(() => {
    r.current && o()
  })
  let i = A((a) => {
    ;((r.current = a(t)), o())
  })
  return [t, i]
}
const U = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
  W = l.createContext(U),
  re = l.createContext(!1)
let D = new WeakMap()
function oe(e = !1) {
  let t = u.useContext(W),
    n = u.useRef(null)
  if (n.current === null && !e) {
    var r, o
    let i =
      (o = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
      o === void 0 ||
      (r = o.ReactCurrentOwner) === null ||
      r === void 0
        ? void 0
        : r.current
    if (i) {
      let a = D.get(i)
      a == null
        ? D.set(i, { id: t.current, state: i.memoizedState })
        : i.memoizedState !== a.state && ((t.current = a.id), D.delete(i))
    }
    n.current = ++t.current
  }
  return n.current
}
function ae(e) {
  let t = u.useContext(W),
    n = oe(!!e),
    r = `react-aria${t.prefix}`
  return e || `${r}-${n}`
}
function ie(e) {
  let t = l.useId(),
    [n] = u.useState(le()),
    r = n ? 'react-aria' : `react-aria${U.prefix}`
  return e || `${r}-${t}`
}
const ce = typeof l.useId == 'function' ? ie : ae
function ue() {
  return !1
}
function se() {
  return !0
}
function fe(e) {
  return () => {}
}
function le() {
  return typeof l.useSyncExternalStore == 'function'
    ? l.useSyncExternalStore(fe, ue, se)
    : u.useContext(re)
}
let de = !!(typeof window < 'u' && window.document && window.document.createElement),
  E = new Map(),
  g
typeof FinalizationRegistry < 'u' &&
  (g = new FinalizationRegistry((e) => {
    E.delete(e)
  }))
function be(e) {
  let [t, n] = u.useState(e),
    r = u.useRef(null),
    o = ce(t),
    i = u.useRef(null)
  if ((g && g.register(i, o), de)) {
    const a = E.get(o)
    a && !a.includes(r) ? a.push(r) : E.set(o, [r])
  }
  return (
    w(() => {
      let a = o
      return () => {
        ;(g && g.unregister(i), E.delete(a))
      }
    }, [o]),
    u.useEffect(() => {
      let a = r.current
      return (
        a && n(a),
        () => {
          a && (r.current = null)
        }
      )
    }),
    o
  )
}
function $e(e, t) {
  if (e === t) return e
  let n = E.get(e)
  if (n) return (n.forEach((o) => (o.current = t)), t)
  let r = E.get(t)
  return r ? (r.forEach((o) => (o.current = e)), e) : t
}
function rt(e = []) {
  let t = be(),
    [n, r] = ne(t),
    o = u.useCallback(() => {
      r(function* () {
        ;(yield t, yield document.getElementById(t) ? t : void 0)
      })
    }, [t, r])
  return (w(o, [t, o, ...e]), n)
}
function pe(...e) {
  return (...t) => {
    for (let n of e) typeof n == 'function' && n(...t)
  }
}
const v = (e) => {
    var t
    return (t = e?.ownerDocument) !== null && t !== void 0 ? t : document
  },
  d = (e) => (e && 'window' in e && e.window === e ? e : v(e).defaultView || window)
function ve(e) {
  return e !== null && typeof e == 'object' && 'nodeType' in e && typeof e.nodeType == 'number'
}
function me(e) {
  return ve(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && 'host' in e
}
let Ee = !1
function K() {
  return Ee
}
function ot(e, t) {
  if (!K()) return t && e ? e.contains(t) : !1
  if (!e || !t) return !1
  let n = t
  for (; n !== null; ) {
    if (n === e) return !0
    n.tagName === 'SLOT' && n.assignedSlot
      ? (n = n.assignedSlot.parentNode)
      : me(n)
        ? (n = n.host)
        : (n = n.parentNode)
  }
  return !1
}
const S = (e = document) => {
  var t
  if (!K()) return e.activeElement
  let n = e.activeElement
  for (
    ;
    n && 'shadowRoot' in n && !((t = n.shadowRoot) === null || t === void 0) && t.activeElement;

  )
    n = n.shadowRoot.activeElement
  return n
}
function ye(e) {
  return K() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
}
function j(...e) {
  let t = { ...e[0] }
  for (let n = 1; n < e.length; n++) {
    let r = e[n]
    for (let o in r) {
      let i = t[o],
        a = r[o]
      typeof i == 'function' &&
      typeof a == 'function' &&
      o[0] === 'o' &&
      o[1] === 'n' &&
      o.charCodeAt(2) >= 65 &&
      o.charCodeAt(2) <= 90
        ? (t[o] = pe(i, a))
        : (o === 'className' || o === 'UNSAFE_className') &&
            typeof i == 'string' &&
            typeof a == 'string'
          ? (t[o] = ee(i, a))
          : o === 'id' && i && a
            ? (t.id = $e(i, a))
            : (t[o] = a !== void 0 ? a : i)
    }
  }
  return t
}
const we = new Set(['id']),
  ge = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']),
  he = new Set(['href', 'hrefLang', 'target', 'rel', 'download', 'ping', 'referrerPolicy']),
  xe = new Set(['dir', 'lang', 'hidden', 'inert', 'translate']),
  R = new Set([
    'onClick',
    'onAuxClick',
    'onContextMenu',
    'onDoubleClick',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onPointerDown',
    'onPointerMove',
    'onPointerUp',
    'onPointerCancel',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerOver',
    'onPointerOut',
    'onGotPointerCapture',
    'onLostPointerCapture',
    'onScroll',
    'onWheel',
    'onAnimationStart',
    'onAnimationEnd',
    'onAnimationIteration',
    'onTransitionCancel',
    'onTransitionEnd',
    'onTransitionRun',
    'onTransitionStart',
  ]),
  Le = /^(data-.*)$/
function at(e, t = {}) {
  let { labelable: n, isLink: r, global: o, events: i = o, propNames: a } = t,
    s = {}
  for (const c in e)
    Object.prototype.hasOwnProperty.call(e, c) &&
      (we.has(c) ||
        (n && ge.has(c)) ||
        (r && he.has(c)) ||
        (o && xe.has(c)) ||
        (i && R.has(c)) ||
        (c.endsWith('Capture') && R.has(c.slice(0, -7))) ||
        a?.has(c) ||
        Le.test(c)) &&
      (s[c] = e[c])
  return s
}
function T(e) {
  if (Se()) e.focus({ preventScroll: !0 })
  else {
    let t = Te(e)
    ;(e.focus(), Pe(t))
  }
}
let L = null
function Se() {
  if (L == null) {
    L = !1
    try {
      document.createElement('div').focus({
        get preventScroll() {
          return ((L = !0), !0)
        },
      })
    } catch {}
  }
  return L
}
function Te(e) {
  let t = e.parentNode,
    n = [],
    r = document.scrollingElement || document.documentElement
  for (; t instanceof HTMLElement && t !== r; )
    ((t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
      n.push({ element: t, scrollTop: t.scrollTop, scrollLeft: t.scrollLeft }),
      (t = t.parentNode))
  return (
    r instanceof HTMLElement &&
      n.push({ element: r, scrollTop: r.scrollTop, scrollLeft: r.scrollLeft }),
    n
  )
}
function Pe(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e) ((t.scrollTop = n), (t.scrollLeft = r))
}
function C(e) {
  var t
  if (typeof window > 'u' || window.navigator == null) return !1
  let n = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands
  return (Array.isArray(n) && n.some((r) => e.test(r.brand))) || e.test(window.navigator.userAgent)
}
function N(e) {
  var t
  return typeof window < 'u' && window.navigator != null
    ? e.test(
        ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) ||
          window.navigator.platform
      )
    : !1
}
function $(e) {
  let t = null
  return () => (t == null && (t = e()), t)
}
const G = $(function () {
    return N(/^Mac/i)
  }),
  Me = $(function () {
    return N(/^iPhone/i)
  }),
  Ce = $(function () {
    return N(/^iPad/i) || (G() && navigator.maxTouchPoints > 1)
  }),
  it = $(function () {
    return Me() || Ce()
  }),
  ct = $(function () {
    return C(/AppleWebKit/i) && !ke()
  }),
  ke = $(function () {
    return C(/Chrome/i)
  }),
  q = $(function () {
    return C(/Android/i)
  }),
  ut = $(function () {
    return C(/Firefox/i)
  })
let b = new Map(),
  I = new Set()
function B() {
  if (typeof window > 'u') return
  function e(r) {
    return 'propertyName' in r
  }
  let t = (r) => {
      if (!e(r) || !r.target) return
      let o = b.get(r.target)
      ;(o ||
        ((o = new Set()),
        b.set(r.target, o),
        r.target.addEventListener('transitioncancel', n, { once: !0 })),
        o.add(r.propertyName))
    },
    n = (r) => {
      if (!e(r) || !r.target) return
      let o = b.get(r.target)
      if (
        o &&
        (o.delete(r.propertyName),
        o.size === 0 && (r.target.removeEventListener('transitioncancel', n), b.delete(r.target)),
        b.size === 0)
      ) {
        for (let i of I) i()
        I.clear()
      }
    }
  ;(document.body.addEventListener('transitionrun', t),
    document.body.addEventListener('transitionend', n))
}
typeof document < 'u' &&
  (document.readyState !== 'loading' ? B() : document.addEventListener('DOMContentLoaded', B))
function Fe() {
  for (const [e] of b) 'isConnected' in e && !e.isConnected && b.delete(e)
}
function De(e) {
  requestAnimationFrame(() => {
    ;(Fe(), b.size === 0 ? e() : I.add(e))
  })
}
function Ae(e, t) {
  w(() => {
    if (e && e.ref && t)
      return (
        (e.ref.current = t.current),
        () => {
          e.ref && (e.ref.current = null)
        }
      )
  })
}
function Ie(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : q() && e.pointerType
      ? e.type === 'click' && e.buttons === 1
      : e.detail === 0 && !e.pointerType
}
function st(e) {
  return (
    (!q() && e.width === 0 && e.height === 0) ||
    (e.width === 1 &&
      e.height === 1 &&
      e.pressure === 0 &&
      e.detail === 0 &&
      e.pointerType === 'mouse')
  )
}
const He = typeof Element < 'u' && 'checkVisibility' in Element.prototype
function Oe(e) {
  const t = d(e)
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1
  let { display: n, visibility: r } = e.style,
    o = n !== 'none' && r !== 'hidden' && r !== 'collapse'
  if (o) {
    const { getComputedStyle: i } = e.ownerDocument.defaultView
    let { display: a, visibility: s } = i(e)
    o = a !== 'none' && s !== 'hidden' && s !== 'collapse'
  }
  return o
}
function Ve(e, t) {
  return (
    !e.hasAttribute('hidden') &&
    !e.hasAttribute('data-react-aria-prevent-focus') &&
    (e.nodeName === 'DETAILS' && t && t.nodeName !== 'SUMMARY' ? e.hasAttribute('open') : !0)
  )
}
function J(e, t) {
  return He
    ? e.checkVisibility()
    : e.nodeName !== '#comment' && Oe(e) && Ve(e, t) && (!e.parentElement || J(e.parentElement, e))
}
const Q = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable^="false"])',
    'permission',
  ],
  Ke = Q.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])'
Q.push('[tabindex]:not([tabindex="-1"]):not([disabled])')
function Ne(e) {
  return e.matches(Ke) && J(e) && !je(e)
}
function je(e) {
  let t = e
  for (; t != null; ) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0
    t = t.parentElement
  }
  return !1
}
function Re(e) {
  let t = e
  return (
    (t.nativeEvent = e),
    (t.isDefaultPrevented = () => t.defaultPrevented),
    (t.isPropagationStopped = () => t.cancelBubble),
    (t.persist = () => {}),
    t
  )
}
function ft(e, t) {
  ;(Object.defineProperty(e, 'target', { value: t }),
    Object.defineProperty(e, 'currentTarget', { value: t }))
}
function Be(e) {
  let t = u.useRef({ isFocused: !1, observer: null })
  w(() => {
    const r = t.current
    return () => {
      r.observer && (r.observer.disconnect(), (r.observer = null))
    }
  }, [])
  let n = A((r) => {
    e?.(r)
  })
  return u.useCallback(
    (r) => {
      if (
        r.target instanceof HTMLButtonElement ||
        r.target instanceof HTMLInputElement ||
        r.target instanceof HTMLTextAreaElement ||
        r.target instanceof HTMLSelectElement
      ) {
        t.current.isFocused = !0
        let o = r.target,
          i = (a) => {
            if (((t.current.isFocused = !1), o.disabled)) {
              let s = Re(a)
              n(s)
            }
            t.current.observer && (t.current.observer.disconnect(), (t.current.observer = null))
          }
        ;(o.addEventListener('focusout', i, { once: !0 }),
          (t.current.observer = new MutationObserver(() => {
            if (t.current.isFocused && o.disabled) {
              var a
              ;(a = t.current.observer) === null || a === void 0 || a.disconnect()
              let s = o === document.activeElement ? null : document.activeElement
              ;(o.dispatchEvent(new FocusEvent('blur', { relatedTarget: s })),
                o.dispatchEvent(new FocusEvent('focusout', { bubbles: !0, relatedTarget: s })))
            }
          })),
          t.current.observer.observe(o, { attributes: !0, attributeFilter: ['disabled'] }))
      }
    },
    [n]
  )
}
let P = !1
function lt(e) {
  for (; e && !Ne(e); ) e = e.parentElement
  let t = d(e),
    n = t.document.activeElement
  if (!n || n === e) return
  P = !0
  let r = !1,
    o = (f) => {
      ;(f.target === n || r) && f.stopImmediatePropagation()
    },
    i = (f) => {
      ;(f.target === n || r) && (f.stopImmediatePropagation(), !e && !r && ((r = !0), T(n), c()))
    },
    a = (f) => {
      ;(f.target === e || r) && f.stopImmediatePropagation()
    },
    s = (f) => {
      ;(f.target === e || r) && (f.stopImmediatePropagation(), r || ((r = !0), T(n), c()))
    }
  ;(t.addEventListener('blur', o, !0),
    t.addEventListener('focusout', i, !0),
    t.addEventListener('focusin', s, !0),
    t.addEventListener('focus', a, !0))
  let c = () => {
      ;(cancelAnimationFrame(x),
        t.removeEventListener('blur', o, !0),
        t.removeEventListener('focusout', i, !0),
        t.removeEventListener('focusin', s, !0),
        t.removeEventListener('focus', a, !0),
        (P = !1),
        (r = !1))
    },
    x = requestAnimationFrame(c)
  return c
}
let m = null,
  H = new Set(),
  h = new Map(),
  p = !1,
  O = !1
const ze = { Tab: !0, Escape: !0 }
function k(e, t) {
  for (let n of H) n(e, t)
}
function Ue(e) {
  return !(
    e.metaKey ||
    (!G() && e.altKey) ||
    e.ctrlKey ||
    e.key === 'Control' ||
    e.key === 'Shift' ||
    e.key === 'Meta'
  )
}
function M(e) {
  ;((p = !0), Ue(e) && ((m = 'keyboard'), k('keyboard', e)))
}
function y(e) {
  ;((m = 'pointer'),
    (e.type === 'mousedown' || e.type === 'pointerdown') && ((p = !0), k('pointer', e)))
}
function X(e) {
  Ie(e) && ((p = !0), (m = 'virtual'))
}
function Z(e) {
  e.target === window ||
    e.target === document ||
    P ||
    !e.isTrusted ||
    (!p && !O && ((m = 'virtual'), k('virtual', e)), (p = !1), (O = !1))
}
function Y() {
  P || ((p = !1), (O = !0))
}
function V(e) {
  if (typeof window > 'u' || typeof document > 'u' || h.get(d(e))) return
  const t = d(e),
    n = v(e)
  let r = t.HTMLElement.prototype.focus
  ;((t.HTMLElement.prototype.focus = function () {
    ;((p = !0), r.apply(this, arguments))
  }),
    n.addEventListener('keydown', M, !0),
    n.addEventListener('keyup', M, !0),
    n.addEventListener('click', X, !0),
    t.addEventListener('focus', Z, !0),
    t.addEventListener('blur', Y, !1),
    typeof PointerEvent < 'u' &&
      (n.addEventListener('pointerdown', y, !0),
      n.addEventListener('pointermove', y, !0),
      n.addEventListener('pointerup', y, !0)),
    t.addEventListener(
      'beforeunload',
      () => {
        _(e)
      },
      { once: !0 }
    ),
    h.set(t, { focus: r }))
}
const _ = (e, t) => {
  const n = d(e),
    r = v(e)
  ;(t && r.removeEventListener('DOMContentLoaded', t),
    h.has(n) &&
      ((n.HTMLElement.prototype.focus = h.get(n).focus),
      r.removeEventListener('keydown', M, !0),
      r.removeEventListener('keyup', M, !0),
      r.removeEventListener('click', X, !0),
      n.removeEventListener('focus', Z, !0),
      n.removeEventListener('blur', Y, !1),
      typeof PointerEvent < 'u' &&
        (r.removeEventListener('pointerdown', y, !0),
        r.removeEventListener('pointermove', y, !0),
        r.removeEventListener('pointerup', y, !0)),
      h.delete(n)))
}
function We(e) {
  const t = v(e)
  let n
  return (
    t.readyState !== 'loading'
      ? V(e)
      : ((n = () => {
          V(e)
        }),
        t.addEventListener('DOMContentLoaded', n)),
    () => _(e, n)
  )
}
typeof document < 'u' && We()
function Ge() {
  return m !== 'pointer'
}
function qe() {
  return m
}
function dt(e) {
  ;((m = e), k(e, null))
}
const Je = new Set([
  'checkbox',
  'radio',
  'range',
  'color',
  'file',
  'image',
  'button',
  'submit',
  'reset',
])
function Qe(e, t, n) {
  let r = v(n?.target)
  const o = typeof window < 'u' ? d(n?.target).HTMLInputElement : HTMLInputElement,
    i = typeof window < 'u' ? d(n?.target).HTMLTextAreaElement : HTMLTextAreaElement,
    a = typeof window < 'u' ? d(n?.target).HTMLElement : HTMLElement,
    s = typeof window < 'u' ? d(n?.target).KeyboardEvent : KeyboardEvent
  return (
    (e =
      e ||
      (r.activeElement instanceof o && !Je.has(r.activeElement.type)) ||
      r.activeElement instanceof i ||
      (r.activeElement instanceof a && r.activeElement.isContentEditable)),
    !(e && t === 'keyboard' && n instanceof s && !ze[n.key])
  )
}
function bt(e, t, n) {
  ;(V(),
    u.useEffect(() => {
      let r = (o, i) => {
        Qe(!!n?.isTextInput, o, i) && e(Ge())
      }
      return (
        H.add(r),
        () => {
          H.delete(r)
        }
      )
    }, t))
}
function Xe(e) {
  const t = v(e),
    n = S(t)
  if (qe() === 'virtual') {
    let r = n
    De(() => {
      S(t) === r && e.isConnected && T(e)
    })
  } else T(e)
}
function Ze(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e
  const i = u.useCallback(
      (c) => {
        if (c.target === c.currentTarget) return (r && r(c), o && o(!1), !0)
      },
      [r, o]
    ),
    a = Be(i),
    s = u.useCallback(
      (c) => {
        const x = v(c.target),
          f = x ? S(x) : S()
        c.target === c.currentTarget && f === ye(c.nativeEvent) && (n && n(c), o && o(!0), a(c))
      },
      [o, n, a]
    )
  return {
    focusProps: { onFocus: !t && (n || o || r) ? s : void 0, onBlur: !t && (r || o) ? i : void 0 },
  }
}
function z(e) {
  if (!e) return
  let t = !0
  return (n) => {
    let r = {
      ...n,
      preventDefault() {
        n.preventDefault()
      },
      isDefaultPrevented() {
        return n.isDefaultPrevented()
      },
      stopPropagation() {
        t = !0
      },
      continuePropagation() {
        t = !1
      },
      isPropagationStopped() {
        return t
      },
    }
    ;(e(r), t && n.stopPropagation())
  }
}
function Ye(e) {
  return { keyboardProps: e.isDisabled ? {} : { onKeyDown: z(e.onKeyDown), onKeyUp: z(e.onKeyUp) } }
}
let _e = l.createContext(null)
function et(e) {
  let t = u.useContext(_e) || {}
  Ae(t, e)
  let { ref: n, ...r } = t
  return r
}
function $t(e, t) {
  let { focusProps: n } = Ze(e),
    { keyboardProps: r } = Ye(e),
    o = j(n, r),
    i = et(t),
    a = e.isDisabled ? {} : i,
    s = u.useRef(e.autoFocus)
  u.useEffect(() => {
    ;(s.current && t.current && Xe(t.current), (s.current = !1))
  }, [t])
  let c = e.excludeFromTabOrder ? -1 : 0
  return (e.isDisabled && (c = void 0), { focusableProps: j({ ...o, tabIndex: c }, a) })
}
export {
  ut as $,
  be as A,
  w as B,
  dt as C,
  rt as D,
  ct as a,
  G as b,
  Ce as c,
  T as d,
  it as e,
  v as f,
  De as g,
  A as h,
  ft as i,
  Re as j,
  ot as k,
  ye as l,
  st as m,
  lt as n,
  j as o,
  Ae as p,
  Ie as q,
  pe as r,
  d as s,
  Be as t,
  S as u,
  $t as v,
  at as w,
  Ge as x,
  bt as y,
  Ze as z,
}
