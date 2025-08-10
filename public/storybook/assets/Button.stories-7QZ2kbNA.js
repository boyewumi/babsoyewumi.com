import { j as Z } from './jsx-runtime-D_zvdyIk.js'
import { r as v, R as he } from './iframe-gEdmNp39.js'
import { c as De, m as Ke } from './index-bEuIjaH0.js'
import {
  $ as Ae,
  a as Me,
  b as te,
  c as Ie,
  d as Pe,
  e as Te,
  f as K,
  g as He,
  h as I,
  i as Ee,
  j as xe,
  k as _,
  l as S,
  m as Re,
  n as Oe,
  o as A,
  p as Be,
  q as Ne,
  r as Ue,
  s as ue,
  t as We,
  u as Ve,
  v as ke,
  w as ae,
  x as Ge,
  y as ze,
  z as je,
} from './useFocusable-DlTe3Pkl.js'
import './index-DRdA6cbC.js'
import './preload-helper-D9Z9MdNV.js'
import './index-BPzMnNhs.js'
function qe(...e) {
  return e.length === 1 && e[0]
    ? e[0]
    : (t) => {
        let r = !1
        const s = e.map((a) => {
          const l = de(a, t)
          return (r || (r = typeof l == 'function'), l)
        })
        if (r)
          return () => {
            s.forEach((a, l) => {
              typeof a == 'function' ? a() : de(e[l], null)
            })
          }
      }
}
function de(e, t) {
  if (typeof e == 'function') return e(t)
  e != null && (e.current = t)
}
const Ye = v.createContext({ isNative: !0, open: Qe, useHref: (e) => e })
function Se() {
  return v.useContext(Ye)
}
function Xe(e, t) {
  let r = e.getAttribute('target')
  return (
    (!r || r === '_self') &&
    e.origin === location.origin &&
    !e.hasAttribute('download') &&
    !t.metaKey &&
    !t.ctrlKey &&
    !t.altKey &&
    !t.shiftKey
  )
}
function O(e, t, r = !0) {
  var s, a
  let { metaKey: l, ctrlKey: u, altKey: c, shiftKey: d } = t
  Ae() &&
    !((a = window.event) === null || a === void 0 || (s = a.type) === null || s === void 0) &&
    s.startsWith('key') &&
    e.target === '_blank' &&
    (te() ? (l = !0) : (u = !0))
  let b =
    Me() && te() && !Ie()
      ? new KeyboardEvent('keydown', {
          keyIdentifier: 'Enter',
          metaKey: l,
          ctrlKey: u,
          altKey: c,
          shiftKey: d,
        })
      : new MouseEvent('click', {
          metaKey: l,
          ctrlKey: u,
          altKey: c,
          shiftKey: d,
          bubbles: !0,
          cancelable: !0,
        })
  ;((O.isOpening = r), Pe(e), e.dispatchEvent(b), (O.isOpening = !1))
}
O.isOpening = !1
function Je(e, t) {
  if (e instanceof HTMLAnchorElement) t(e)
  else if (e.hasAttribute('data-href')) {
    let r = document.createElement('a')
    ;((r.href = e.getAttribute('data-href')),
      e.hasAttribute('data-target') && (r.target = e.getAttribute('data-target')),
      e.hasAttribute('data-rel') && (r.rel = e.getAttribute('data-rel')),
      e.hasAttribute('data-download') && (r.download = e.getAttribute('data-download')),
      e.hasAttribute('data-ping') && (r.ping = e.getAttribute('data-ping')),
      e.hasAttribute('data-referrer-policy') &&
        (r.referrerPolicy = e.getAttribute('data-referrer-policy')),
      e.appendChild(r),
      t(r),
      e.removeChild(r))
  }
}
function Qe(e, t) {
  Je(e, (r) => O(r, t))
}
function Ze(e) {
  let t = Se()
  var r
  const s = t.useHref((r = e?.href) !== null && r !== void 0 ? r : '')
  return {
    href: e?.href ? s : void 0,
    target: e?.target,
    rel: e?.rel,
    download: e?.download,
    ping: e?.ping,
    referrerPolicy: e?.referrerPolicy,
  }
}
function et(e, t, r, s) {
  !t.isNative &&
    e.currentTarget instanceof HTMLAnchorElement &&
    e.currentTarget.href &&
    !e.isDefaultPrevented() &&
    Xe(e.currentTarget, e) &&
    r &&
    (e.preventDefault(), t.open(e.currentTarget, e, r, s))
}
function se() {
  let e = v.useRef(new Map()),
    t = v.useCallback((a, l, u, c) => {
      let d = c?.once
        ? (...b) => {
            ;(e.current.delete(u), u(...b))
          }
        : u
      ;(e.current.set(u, { type: l, eventTarget: a, fn: d, options: c }),
        a.addEventListener(l, d, c))
    }, []),
    r = v.useCallback((a, l, u, c) => {
      var d
      let b = ((d = e.current.get(u)) === null || d === void 0 ? void 0 : d.fn) || u
      ;(a.removeEventListener(l, b, c), e.current.delete(u))
    }, []),
    s = v.useCallback(() => {
      e.current.forEach((a, l) => {
        r(a.eventTarget, a.type, l, a.options)
      })
    }, [r])
  return (
    v.useEffect(() => s, [s]),
    { addGlobalListener: t, removeGlobalListener: r, removeAllGlobalListeners: s }
  )
}
function tt(e) {
  const t = v.useRef(null),
    r = v.useRef(void 0),
    s = v.useCallback(
      (a) => {
        if (typeof e == 'function') {
          const l = e,
            u = l(a)
          return () => {
            typeof u == 'function' ? u() : l(null)
          }
        } else if (e)
          return (
            (e.current = a),
            () => {
              e.current = null
            }
          )
      },
      [e]
    )
  return v.useMemo(
    () => ({
      get current() {
        return t.current
      },
      set current(a) {
        ;((t.current = a),
          r.current && (r.current(), (r.current = void 0)),
          a != null && (r.current = s(a)))
      },
    }),
    [s]
  )
}
let R = 'default',
  re = '',
  J = new WeakMap()
function rt(e) {
  if (Te()) {
    if (R === 'default') {
      const t = K(e)
      ;((re = t.documentElement.style.webkitUserSelect),
        (t.documentElement.style.webkitUserSelect = 'none'))
    }
    R = 'disabled'
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = 'userSelect' in e.style ? 'userSelect' : 'webkitUserSelect'
    ;(J.set(e, e.style[t]), (e.style[t] = 'none'))
  }
}
function fe(e) {
  if (Te()) {
    if (R !== 'disabled') return
    ;((R = 'restoring'),
      setTimeout(() => {
        He(() => {
          if (R === 'restoring') {
            const t = K(e)
            ;(t.documentElement.style.webkitUserSelect === 'none' &&
              (t.documentElement.style.webkitUserSelect = re || ''),
              (re = ''),
              (R = 'default'))
          }
        })
      }, 300))
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && J.has(e)) {
    let t = J.get(e),
      r = 'userSelect' in e.style ? 'userSelect' : 'webkitUserSelect'
    ;(e.style[r] === 'none' && (e.style[r] = t),
      e.getAttribute('style') === '' && e.removeAttribute('style'),
      J.delete(e))
  }
}
const we = he.createContext({ register: () => {} })
we.displayName = 'PressResponderContext'
function nt(e, t) {
  return t.get ? t.get.call(e) : t.value
}
function Ce(e, t, r) {
  if (!t.has(e)) throw new TypeError('attempted to ' + r + ' private field on non-instance')
  return t.get(e)
}
function at(e, t) {
  var r = Ce(e, t, 'get')
  return nt(e, r)
}
function st(e, t) {
  if (t.has(e))
    throw new TypeError('Cannot initialize the same private elements twice on an object')
}
function it(e, t, r) {
  ;(st(e, t), t.set(e, r))
}
function ot(e, t, r) {
  if (t.set) t.set.call(e, r)
  else {
    if (!t.writable) throw new TypeError('attempted to set read only private field')
    t.value = r
  }
}
function pe(e, t, r) {
  var s = Ce(e, t, 'set')
  return (ot(e, s, r), r)
}
function lt(e) {
  let t = v.useContext(we)
  if (t) {
    let { register: r, ...s } = t
    ;((e = A(s, e)), r())
  }
  return (Be(t, e.ref), e)
}
var N = new WeakMap()
class U {
  continuePropagation() {
    pe(this, N, !1)
  }
  get shouldStopPropagation() {
    return at(this, N)
  }
  constructor(t, r, s, a) {
    ;(it(this, N, { writable: !0, value: void 0 }), pe(this, N, !0))
    var l
    let u = (l = a?.target) !== null && l !== void 0 ? l : s.currentTarget
    const c = u?.getBoundingClientRect()
    let d,
      b = 0,
      g,
      f = null
    ;(s.clientX != null && s.clientY != null && ((g = s.clientX), (f = s.clientY)),
      c &&
        (g != null && f != null
          ? ((d = g - c.left), (b = f - c.top))
          : ((d = c.width / 2), (b = c.height / 2))),
      (this.type = t),
      (this.pointerType = r),
      (this.target = s.currentTarget),
      (this.shiftKey = s.shiftKey),
      (this.metaKey = s.metaKey),
      (this.ctrlKey = s.ctrlKey),
      (this.altKey = s.altKey),
      (this.x = d),
      (this.y = b))
  }
}
const be = Symbol('linkClicked'),
  ve = 'react-aria-pressable-style',
  ge = 'data-react-aria-pressable'
function _e(e) {
  let {
      onPress: t,
      onPressChange: r,
      onPressStart: s,
      onPressEnd: a,
      onPressUp: l,
      onClick: u,
      isDisabled: c,
      isPressed: d,
      preventFocusOnPress: b,
      shouldCancelOnPointerExit: g,
      allowTextSelectionOnPress: f,
      ref: P,
      ...x
    } = lt(e),
    [C, m] = v.useState(!1),
    y = v.useRef({
      isPressed: !1,
      ignoreEmulatedMouseEvents: !1,
      didFirePressStart: !1,
      isTriggeringEvent: !1,
      activePointerId: null,
      target: null,
      isOverTarget: !1,
      pointerType: null,
      disposables: [],
    }),
    { addGlobalListener: T, removeAllGlobalListeners: w } = se(),
    L = I((n, p) => {
      let E = y.current
      if (c || E.didFirePressStart) return !1
      let i = !0
      if (((E.isTriggeringEvent = !0), s)) {
        let $ = new U('pressstart', p, n)
        ;(s($), (i = $.shouldStopPropagation))
      }
      return (r && r(!0), (E.isTriggeringEvent = !1), (E.didFirePressStart = !0), m(!0), i)
    }),
    D = I((n, p, E = !0) => {
      let i = y.current
      if (!i.didFirePressStart) return !1
      ;((i.didFirePressStart = !1), (i.isTriggeringEvent = !0))
      let $ = !0
      if (a) {
        let o = new U('pressend', p, n)
        ;(a(o), ($ = o.shouldStopPropagation))
      }
      if ((r && r(!1), m(!1), t && E && !c)) {
        let o = new U('press', p, n)
        ;(t(o), $ && ($ = o.shouldStopPropagation))
      }
      return ((i.isTriggeringEvent = !1), $)
    }),
    B = I((n, p) => {
      let E = y.current
      if (c) return !1
      if (l) {
        E.isTriggeringEvent = !0
        let i = new U('pressup', p, n)
        return (l(i), (E.isTriggeringEvent = !1), i.shouldStopPropagation)
      }
      return !0
    }),
    M = I((n) => {
      let p = y.current
      if (p.isPressed && p.target) {
        ;(p.didFirePressStart && p.pointerType != null && D(H(p.target, n), p.pointerType, !1),
          (p.isPressed = !1),
          (p.isOverTarget = !1),
          (p.activePointerId = null),
          (p.pointerType = null),
          w(),
          f || fe(p.target))
        for (let E of p.disposables) E()
        p.disposables = []
      }
    }),
    le = I((n) => {
      g && M(n)
    }),
    Q = I((n) => {
      u?.(n)
    }),
    ce = I((n, p) => {
      if (u) {
        let E = new MouseEvent('click', n)
        ;(Ee(E, p), u(xe(E)))
      }
    }),
    Fe = v.useMemo(() => {
      let n = y.current,
        p = {
          onKeyDown(i) {
            if (ee(i.nativeEvent, i.currentTarget) && _(i.currentTarget, S(i.nativeEvent))) {
              var $
              me(S(i.nativeEvent), i.key) && i.preventDefault()
              let o = !0
              if (!n.isPressed && !i.repeat) {
                ;((n.target = i.currentTarget),
                  (n.isPressed = !0),
                  (n.pointerType = 'keyboard'),
                  (o = L(i, 'keyboard')))
                let h = i.currentTarget,
                  k = (F) => {
                    ee(F, h) && !F.repeat && _(h, S(F)) && n.target && B(H(n.target, F), 'keyboard')
                  }
                T(K(i.currentTarget), 'keyup', Ue(k, E), !0)
              }
              ;(o && i.stopPropagation(),
                i.metaKey &&
                  te() &&
                  (($ = n.metaKeyEvents) === null || $ === void 0 || $.set(i.key, i.nativeEvent)))
            } else i.key === 'Meta' && (n.metaKeyEvents = new Map())
          },
          onClick(i) {
            if (
              !(i && !_(i.currentTarget, S(i.nativeEvent))) &&
              i &&
              i.button === 0 &&
              !n.isTriggeringEvent &&
              !O.isOpening
            ) {
              let $ = !0
              if (
                (c && i.preventDefault(),
                !n.ignoreEmulatedMouseEvents &&
                  !n.isPressed &&
                  (n.pointerType === 'virtual' || Ne(i.nativeEvent)))
              ) {
                let o = L(i, 'virtual'),
                  h = B(i, 'virtual'),
                  k = D(i, 'virtual')
                ;(Q(i), ($ = o && h && k))
              } else if (n.isPressed && n.pointerType !== 'keyboard') {
                let o = n.pointerType || i.nativeEvent.pointerType || 'virtual',
                  h = B(H(i.currentTarget, i), o),
                  k = D(H(i.currentTarget, i), o, !0)
                ;(($ = h && k), (n.isOverTarget = !1), Q(i), M(i))
              }
              ;((n.ignoreEmulatedMouseEvents = !1), $ && i.stopPropagation())
            }
          },
        },
        E = (i) => {
          var $
          if (n.isPressed && n.target && ee(i, n.target)) {
            var o
            me(S(i), i.key) && i.preventDefault()
            let k = S(i),
              F = _(n.target, S(i))
            ;(D(H(n.target, i), 'keyboard', F),
              F && ce(i, n.target),
              w(),
              i.key !== 'Enter' &&
                ie(n.target) &&
                _(n.target, k) &&
                !i[be] &&
                ((i[be] = !0), O(n.target, i, !1)),
              (n.isPressed = !1),
              (o = n.metaKeyEvents) === null || o === void 0 || o.delete(i.key))
          } else if (
            i.key === 'Meta' &&
            !(($ = n.metaKeyEvents) === null || $ === void 0) &&
            $.size
          ) {
            var h
            let k = n.metaKeyEvents
            n.metaKeyEvents = void 0
            for (let F of k.values())
              (h = n.target) === null ||
                h === void 0 ||
                h.dispatchEvent(new KeyboardEvent('keyup', F))
          }
        }
      if (typeof PointerEvent < 'u') {
        ;((p.onPointerDown = (o) => {
          if (o.button !== 0 || !_(o.currentTarget, S(o.nativeEvent))) return
          if (Re(o.nativeEvent)) {
            n.pointerType = 'virtual'
            return
          }
          n.pointerType = o.pointerType
          let h = !0
          if (!n.isPressed) {
            ;((n.isPressed = !0),
              (n.isOverTarget = !0),
              (n.activePointerId = o.pointerId),
              (n.target = o.currentTarget),
              f || rt(n.target),
              (h = L(o, n.pointerType)))
            let k = S(o.nativeEvent)
            ;('releasePointerCapture' in k && k.releasePointerCapture(o.pointerId),
              T(K(o.currentTarget), 'pointerup', i, !1),
              T(K(o.currentTarget), 'pointercancel', $, !1))
          }
          h && o.stopPropagation()
        }),
          (p.onMouseDown = (o) => {
            if (_(o.currentTarget, S(o.nativeEvent)) && o.button === 0) {
              if (b) {
                let h = Oe(o.target)
                h && n.disposables.push(h)
              }
              o.stopPropagation()
            }
          }),
          (p.onPointerUp = (o) => {
            !_(o.currentTarget, S(o.nativeEvent)) ||
              n.pointerType === 'virtual' ||
              (o.button === 0 && !n.isPressed && B(o, n.pointerType || o.pointerType))
          }),
          (p.onPointerEnter = (o) => {
            o.pointerId === n.activePointerId &&
              n.target &&
              !n.isOverTarget &&
              n.pointerType != null &&
              ((n.isOverTarget = !0), L(H(n.target, o), n.pointerType))
          }),
          (p.onPointerLeave = (o) => {
            o.pointerId === n.activePointerId &&
              n.target &&
              n.isOverTarget &&
              n.pointerType != null &&
              ((n.isOverTarget = !1), D(H(n.target, o), n.pointerType, !1), le(o))
          }))
        let i = (o) => {
            if (o.pointerId === n.activePointerId && n.isPressed && o.button === 0 && n.target) {
              if (_(n.target, S(o)) && n.pointerType != null) {
                let h = !1,
                  k = setTimeout(() => {
                    n.isPressed &&
                      n.target instanceof HTMLElement &&
                      (h ? M(o) : (Pe(n.target), n.target.click()))
                  }, 80)
                ;(T(o.currentTarget, 'click', () => (h = !0), !0),
                  n.disposables.push(() => clearTimeout(k)))
              } else M(o)
              n.isOverTarget = !1
            }
          },
          $ = (o) => {
            M(o)
          }
        p.onDragStart = (o) => {
          _(o.currentTarget, S(o.nativeEvent)) && M(o)
        }
      }
      return p
    }, [T, c, b, w, f, M, le, D, L, B, Q, ce])
  return (
    v.useEffect(() => {
      if (!P) return
      const n = K(P.current)
      if (!n || !n.head || n.getElementById(ve)) return
      const p = n.createElement('style')
      ;((p.id = ve),
        (p.textContent = `
@layer {
  [${ge}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim()),
        n.head.prepend(p))
    }, [P]),
    v.useEffect(() => {
      let n = y.current
      return () => {
        var p
        f || fe((p = n.target) !== null && p !== void 0 ? p : void 0)
        for (let E of n.disposables) E()
        n.disposables = []
      }
    }, [f]),
    { isPressed: d || C, pressProps: A(x, Fe, { [ge]: !0 }) }
  )
}
function ie(e) {
  return e.tagName === 'A' && e.hasAttribute('href')
}
function ee(e, t) {
  const { key: r, code: s } = e,
    a = t,
    l = a.getAttribute('role')
  return (
    (r === 'Enter' || r === ' ' || r === 'Spacebar' || s === 'Space') &&
    !(
      (a instanceof ue(a).HTMLInputElement && !Le(a, r)) ||
      a instanceof ue(a).HTMLTextAreaElement ||
      a.isContentEditable
    ) &&
    !((l === 'link' || (!l && ie(a))) && r !== 'Enter')
  )
}
function H(e, t) {
  let r = t.clientX,
    s = t.clientY
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: r,
    clientY: s,
  }
}
function ct(e) {
  return e instanceof HTMLInputElement
    ? !1
    : e instanceof HTMLButtonElement
      ? e.type !== 'submit' && e.type !== 'reset'
      : !ie(e)
}
function me(e, t) {
  return e instanceof HTMLInputElement ? !Le(e, t) : ct(e)
}
const ut = new Set([
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
function Le(e, t) {
  return e.type === 'checkbox' || e.type === 'radio' ? t === ' ' : ut.has(e.type)
}
function dt(e) {
  let { isDisabled: t, onBlurWithin: r, onFocusWithin: s, onFocusWithinChange: a } = e,
    l = v.useRef({ isFocusWithin: !1 }),
    { addGlobalListener: u, removeAllGlobalListeners: c } = se(),
    d = v.useCallback(
      (f) => {
        f.currentTarget.contains(f.target) &&
          l.current.isFocusWithin &&
          !f.currentTarget.contains(f.relatedTarget) &&
          ((l.current.isFocusWithin = !1), c(), r && r(f), a && a(!1))
      },
      [r, a, l, c]
    ),
    b = We(d),
    g = v.useCallback(
      (f) => {
        if (!f.currentTarget.contains(f.target)) return
        const P = K(f.target),
          x = Ve(P)
        if (!l.current.isFocusWithin && x === S(f.nativeEvent)) {
          ;(s && s(f), a && a(!0), (l.current.isFocusWithin = !0), b(f))
          let C = f.currentTarget
          u(
            P,
            'focus',
            (m) => {
              if (l.current.isFocusWithin && !_(C, m.target)) {
                let y = new P.defaultView.FocusEvent('blur', { relatedTarget: m.target })
                Ee(y, C)
                let T = xe(y)
                d(T)
              }
            },
            { capture: !0 }
          )
        }
      },
      [s, a, b, u, d]
    )
  return t
    ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
    : { focusWithinProps: { onFocus: g, onBlur: d } }
}
let ne = !1,
  W = 0
function ft() {
  ;((ne = !0),
    setTimeout(() => {
      ne = !1
    }, 50))
}
function ye(e) {
  e.pointerType === 'touch' && ft()
}
function pt() {
  if (!(typeof document > 'u'))
    return (
      W === 0 && typeof PointerEvent < 'u' && document.addEventListener('pointerup', ye),
      W++,
      () => {
        ;(W--,
          !(W > 0) && typeof PointerEvent < 'u' && document.removeEventListener('pointerup', ye))
      }
    )
}
function bt(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: s, isDisabled: a } = e,
    [l, u] = v.useState(!1),
    c = v.useRef({
      isHovered: !1,
      ignoreEmulatedMouseEvents: !1,
      pointerType: '',
      target: null,
    }).current
  v.useEffect(pt, [])
  let { addGlobalListener: d, removeAllGlobalListeners: b } = se(),
    { hoverProps: g, triggerHoverEnd: f } = v.useMemo(() => {
      let P = (m, y) => {
          if (
            ((c.pointerType = y),
            a || y === 'touch' || c.isHovered || !m.currentTarget.contains(m.target))
          )
            return
          c.isHovered = !0
          let T = m.currentTarget
          ;((c.target = T),
            d(
              K(m.target),
              'pointerover',
              (w) => {
                c.isHovered && c.target && !_(c.target, w.target) && x(w, w.pointerType)
              },
              { capture: !0 }
            ),
            t && t({ type: 'hoverstart', target: T, pointerType: y }),
            r && r(!0),
            u(!0))
        },
        x = (m, y) => {
          let T = c.target
          ;((c.pointerType = ''),
            (c.target = null),
            !(y === 'touch' || !c.isHovered || !T) &&
              ((c.isHovered = !1),
              b(),
              s && s({ type: 'hoverend', target: T, pointerType: y }),
              r && r(!1),
              u(!1)))
        },
        C = {}
      return (
        typeof PointerEvent < 'u' &&
          ((C.onPointerEnter = (m) => {
            ;(ne && m.pointerType === 'mouse') || P(m, m.pointerType)
          }),
          (C.onPointerLeave = (m) => {
            !a && m.currentTarget.contains(m.target) && x(m, m.pointerType)
          })),
        { hoverProps: C, triggerHoverEnd: x }
      )
    }, [t, r, s, a, c, d, b])
  return (
    v.useEffect(() => {
      a && f({ currentTarget: c.target }, c.pointerType)
    }, [a]),
    { hoverProps: g, isHovered: l }
  )
}
function vt(e, t) {
  let {
      elementType: r = 'a',
      onPress: s,
      onPressStart: a,
      onPressEnd: l,
      onClick: u,
      isDisabled: c,
      ...d
    } = e,
    b = {}
  r !== 'a' && (b = { role: 'link', tabIndex: c ? void 0 : 0 })
  let { focusableProps: g } = ke(e, t),
    { pressProps: f, isPressed: P } = _e({
      onPress: s,
      onPressStart: a,
      onPressEnd: l,
      onClick: u,
      isDisabled: c,
      ref: t,
    }),
    x = ae(d, { labelable: !0 }),
    C = A(g, f),
    m = Se(),
    y = Ze(e)
  return {
    isPressed: P,
    linkProps: A(x, y, {
      ...C,
      ...b,
      'aria-disabled': c || void 0,
      'aria-current': e['aria-current'],
      onClick: (T) => {
        var w
        ;((w = f.onClick) === null || w === void 0 || w.call(f, T),
          et(T, m, e.href, e.routerOptions))
      },
    }),
  }
}
function gt(e, t) {
  let {
      elementType: r = 'button',
      isDisabled: s,
      onPress: a,
      onPressStart: l,
      onPressEnd: u,
      onPressUp: c,
      onPressChange: d,
      preventFocusOnPress: b,
      allowFocusWhenDisabled: g,
      onClick: f,
      href: P,
      target: x,
      rel: C,
      type: m = 'button',
    } = e,
    y
  r === 'button'
    ? (y = {
        type: m,
        disabled: s,
        form: e.form,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formMethod: e.formMethod,
        formNoValidate: e.formNoValidate,
        formTarget: e.formTarget,
        name: e.name,
        value: e.value,
      })
    : (y = {
        role: 'button',
        href: r === 'a' && !s ? P : void 0,
        target: r === 'a' ? x : void 0,
        type: r === 'input' ? m : void 0,
        disabled: r === 'input' ? s : void 0,
        'aria-disabled': !s || r === 'input' ? void 0 : s,
        rel: r === 'a' ? C : void 0,
      })
  let { pressProps: T, isPressed: w } = _e({
      onPressStart: l,
      onPressEnd: u,
      onPressChange: d,
      onPress: a,
      onPressUp: c,
      onClick: f,
      isDisabled: s,
      preventFocusOnPress: b,
      ref: t,
    }),
    { focusableProps: L } = ke(e, t)
  g && (L.tabIndex = s ? -1 : L.tabIndex)
  let D = A(L, T, ae(e, { labelable: !0 }))
  return {
    isPressed: w,
    buttonProps: A(y, D, {
      'aria-haspopup': e['aria-haspopup'],
      'aria-expanded': e['aria-expanded'],
      'aria-controls': e['aria-controls'],
      'aria-pressed': e['aria-pressed'],
      'aria-current': e['aria-current'],
    }),
  }
}
function mt(e = {}) {
  let { autoFocus: t = !1, isTextInput: r, within: s } = e,
    a = v.useRef({ isFocused: !1, isFocusVisible: t || Ge() }),
    [l, u] = v.useState(!1),
    [c, d] = v.useState(() => a.current.isFocused && a.current.isFocusVisible),
    b = v.useCallback(() => d(a.current.isFocused && a.current.isFocusVisible), []),
    g = v.useCallback(
      (x) => {
        ;((a.current.isFocused = x), u(x), b())
      },
      [b]
    )
  ze(
    (x) => {
      ;((a.current.isFocusVisible = x), b())
    },
    [],
    { isTextInput: r }
  )
  let { focusProps: f } = je({ isDisabled: s, onFocusChange: g }),
    { focusWithinProps: P } = dt({ isDisabled: !s, onFocusWithinChange: g })
  return { isFocused: l, isFocusVisible: c, focusProps: s ? P : f }
}
const $e = De(
    'inline-flex items-center justify-center w-fit rounded font-normal cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
    {
      variants: {
        variant: {
          primary: [
            'border border-transparent bg-primary-500 text-white shadow-primary-sm',
            'hover:bg-primary-600 hover:shadow-primary',
            'focus-visible:ring-primary-500/20',
            'active:bg-primary-700',
          ],
          secondary: [
            'border border-transparent bg-neutral-100 text-neutral-900 shadow-sm',
            'hover:bg-neutral-200 hover:shadow',
            'focus-visible:ring-neutral-500/20',
          ],
          outline: [
            'border border-neutral-200 bg-transparent text-neutral-900 shadow-xs',
            'hover:bg-neutral-50 hover:border-neutral-300 hover:shadow-sm',
            'focus-visible:ring-neutral-500/20',
          ],
        },
        size: {
          sm: 'h-8 px-3 text-label rounded-sm',
          md: 'h-9 px-4 text-label-lg rounded',
          lg: 'h-10 px-6 text-body-md rounded-lg',
        },
      },
      defaultVariants: { variant: 'primary', size: 'md' },
    }
  ),
  yt = Symbol('default')
function $t(e) {
  let {
    className: t,
    style: r,
    children: s,
    defaultClassName: a,
    defaultChildren: l,
    defaultStyle: u,
    values: c,
  } = e
  return v.useMemo(() => {
    let d, b, g
    return (
      typeof t == 'function' ? (d = t({ ...c, defaultClassName: a })) : (d = t),
      typeof r == 'function' ? (b = r({ ...c, defaultStyle: u || {} })) : (b = r),
      typeof s == 'function'
        ? (g = s({ ...c, defaultChildren: l }))
        : s == null
          ? (g = l)
          : (g = s),
      {
        className: d ?? a,
        style: b || u ? { ...u, ...b } : void 0,
        children: g ?? l,
        'data-rac': '',
      }
    )
  }, [t, r, s, a, l, u, c])
}
function ht(e, t) {
  let r = v.useContext(e)
  if (t === null) return null
  if (r && typeof r == 'object' && 'slots' in r && r.slots) {
    let s = t || yt
    if (!r.slots[s]) {
      let a = new Intl.ListFormat().format(Object.keys(r.slots).map((u) => `"${u}"`)),
        l = t ? `Invalid slot "${t}".` : 'A slot prop is required.'
      throw new Error(`${l} Valid slot names are ${a}.`)
    }
    return r.slots[s]
  }
  return r
}
function Pt(e, t, r) {
  let s = ht(r, e.slot) || {},
    { ref: a, ...l } = s,
    u = tt(v.useMemo(() => qe(t, a), [t, a])),
    c = A(l, e)
  return (
    'style' in l &&
      l.style &&
      'style' in e &&
      e.style &&
      (typeof l.style == 'function' || typeof e.style == 'function'
        ? (c.style = (d) => {
            let b = typeof l.style == 'function' ? l.style(d) : l.style,
              g = { ...d.defaultStyle, ...b },
              f = typeof e.style == 'function' ? e.style({ ...d, defaultStyle: g }) : e.style
            return { ...g, ...f }
          })
        : (c.style = { ...l.style, ...e.style })),
    [c, u]
  )
}
const Tt = v.createContext(null),
  Et = v.forwardRef(function (t, r) {
    ;[t, r] = Pt(t, r, Tt)
    let s = t.href && !t.isDisabled ? 'a' : 'span',
      { linkProps: a, isPressed: l } = vt({ ...t, elementType: s }, r),
      { hoverProps: u, isHovered: c } = bt(t),
      { focusProps: d, isFocused: b, isFocusVisible: g } = mt(),
      f = $t({
        ...t,
        defaultClassName: 'react-aria-Link',
        values: {
          isCurrent: !!t['aria-current'],
          isDisabled: t.isDisabled || !1,
          isPressed: l,
          isHovered: c,
          isFocused: b,
          isFocusVisible: g,
        },
      }),
      P = ae(t, { global: !0 })
    return (
      delete P.onClick,
      he.createElement(
        s,
        {
          ref: r,
          slot: t.slot || void 0,
          ...A(P, f, a, u, d),
          'data-focused': b || void 0,
          'data-hovered': c || void 0,
          'data-pressed': l || void 0,
          'data-focus-visible': g || void 0,
          'data-current': !!t['aria-current'] || void 0,
          'data-disabled': t.isDisabled || void 0,
        },
        f.children
      )
    )
  }),
  oe = v.forwardRef((e, t) => {
    const r = v.useRef(null),
      s = Ke(r, t),
      { buttonProps: a } = gt(e, r)
    return e.href
      ? Z.jsx(Et, {
          href: e.href,
          target: e.target,
          children: Z.jsx('button', {
            ...a,
            ref: s,
            className: $e({ variant: e.variant, size: e.size, className: e.className }),
            children: e.children,
          }),
        })
      : Z.jsx('button', {
          ...a,
          ref: s,
          className: $e({ variant: e.variant, size: e.size, className: e.className }),
          children: e.children,
        })
  })
oe.displayName = 'Button'
oe.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Button',
  props: {
    children: {
      required: !1,
      tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
      description: '',
    },
    variant: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'primary' | 'secondary' | 'outline'",
        elements: [
          { name: 'literal', value: "'primary'" },
          { name: 'literal', value: "'secondary'" },
          { name: 'literal', value: "'outline'" },
        ],
      },
      description: '',
    },
    size: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'sm' | 'md' | 'lg'",
        elements: [
          { name: 'literal', value: "'sm'" },
          { name: 'literal', value: "'md'" },
          { name: 'literal', value: "'lg'" },
        ],
      },
      description: '',
    },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    href: { required: !1, tsType: { name: 'string' }, description: '' },
    target: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'_blank' | '_self' | '_parent' | '_top'",
        elements: [
          { name: 'literal', value: "'_blank'" },
          { name: 'literal', value: "'_self'" },
          { name: 'literal', value: "'_parent'" },
          { name: 'literal', value: "'_top'" },
        ],
      },
      description: '',
    },
  },
  composes: ['Pick'],
}
const Ft = {
    title: 'Components/Button',
    component: oe,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component:
            'A versatile button component with multiple variants, sizes, and support for links.',
        },
      },
    },
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'outline'],
        description: 'Button style variant',
      },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
        description: 'Button size',
      },
      isDisabled: { control: 'boolean', description: 'Disable the button' },
      href: { control: 'text', description: 'URL to navigate to (makes button a link)' },
      target: {
        control: { type: 'select' },
        options: ['_blank', '_self', '_parent', '_top'],
        description: 'Link target (only when href is provided)',
      },
      children: { control: 'text', description: 'Button content' },
      onPress: { action: 'onPress' },
    },
    args: { children: 'Button' },
  },
  V = {},
  G = { args: { variant: 'primary', children: 'Primary Button' } },
  z = { args: { variant: 'secondary', children: 'Secondary Button' } },
  j = { args: { variant: 'outline', children: 'Outline Button' } },
  q = { args: { size: 'lg', children: 'Large Button' } },
  Y = { args: { children: 'Disabled Button', isDisabled: !0 } },
  X = { args: { children: 'Link Button', href: 'https://google.com', target: '_blank' } }
V.parameters = {
  ...V.parameters,
  docs: { ...V.parameters?.docs, source: { originalSource: '{}', ...V.parameters?.docs?.source } },
}
G.parameters = {
  ...G.parameters,
  docs: {
    ...G.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,
      ...G.parameters?.docs?.source,
    },
  },
}
z.parameters = {
  ...z.parameters,
  docs: {
    ...z.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,
      ...z.parameters?.docs?.source,
    },
  },
}
j.parameters = {
  ...j.parameters,
  docs: {
    ...j.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'outline',
    children: 'Outline Button'
  }
}`,
      ...j.parameters?.docs?.source,
    },
  },
}
q.parameters = {
  ...q.parameters,
  docs: {
    ...q.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    size: 'lg',
    children: 'Large Button'
  }
}`,
      ...q.parameters?.docs?.source,
    },
  },
}
Y.parameters = {
  ...Y.parameters,
  docs: {
    ...Y.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Disabled Button',
    isDisabled: true
  }
}`,
      ...Y.parameters?.docs?.source,
    },
  },
}
X.parameters = {
  ...X.parameters,
  docs: {
    ...X.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Link Button',
    href: 'https://google.com',
    target: '_blank'
  }
}`,
      ...X.parameters?.docs?.source,
    },
  },
}
const Dt = ['Default', 'Primary', 'Secondary', 'Outline', 'Large', 'Disabled', 'AsLink']
export {
  X as AsLink,
  V as Default,
  Y as Disabled,
  q as Large,
  j as Outline,
  G as Primary,
  z as Secondary,
  Dt as __namedExportsOrder,
  Ft as default,
}
