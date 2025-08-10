import { j as I } from './jsx-runtime-D_zvdyIk.js'
import { r as u, R as Z } from './iframe-gEdmNp39.js'
import { c as ee, m as ae } from './index-bEuIjaH0.js'
import {
  A as k,
  h as O,
  B as re,
  C as te,
  D as K,
  o as G,
  v as ie,
  w as le,
  s as ne,
} from './useFocusable-DlTe3Pkl.js'
import './preload-helper-D9Z9MdNV.js'
function oe(e, a) {
  let { id: r, 'aria-label': t, 'aria-labelledby': i } = e
  return (
    (r = k(r)),
    i && t
      ? (i = [...new Set([r, ...i.trim().split(/\s+/)])].join(' '))
      : i && (i = i.trim().split(/\s+/).join(' ')),
    !t && !i && a && (t = a),
    { id: r, 'aria-label': t, 'aria-labelledby': i }
  )
}
function se(e, a, r) {
  let t = O(() => {
    r && r(a)
  })
  u.useEffect(() => {
    var i
    let l = e == null || (i = e.current) === null || i === void 0 ? void 0 : i.form
    return (
      l?.addEventListener('reset', t),
      () => {
        l?.removeEventListener('reset', t)
      }
    )
  }, [e, t])
}
function de(e, a, r) {
  let [t, i] = u.useState(e || a),
    l = u.useRef(e !== void 0),
    o = e !== void 0
  u.useEffect(() => {
    ;(l.current, (l.current = o))
  }, [o])
  let s = o ? e : t,
    c = u.useCallback(
      (d, ...n) => {
        let p = (v, ...f) => {
          ;(r && (Object.is(s, v) || r(v, ...f)), o || (s = v))
        }
        typeof d == 'function'
          ? i((f, ...h) => {
              let b = d(o ? s : f, ...h)
              return (p(b, ...n), o ? f : b)
            })
          : (o || i(d), p(d, ...n))
      },
      [o, s, r]
    )
  return [s, c]
}
const J = {
    badInput: !1,
    customError: !1,
    patternMismatch: !1,
    rangeOverflow: !1,
    rangeUnderflow: !1,
    stepMismatch: !1,
    tooLong: !1,
    tooShort: !1,
    typeMismatch: !1,
    valueMissing: !1,
    valid: !0,
  },
  X = { ...J, customError: !0, valid: !1 },
  S = { isInvalid: !1, validationDetails: J, validationErrors: [] },
  ue = u.createContext({}),
  Q = '__formValidationState' + Date.now()
function ce(e) {
  if (e[Q]) {
    let {
      realtimeValidation: a,
      displayValidation: r,
      updateValidation: t,
      resetValidation: i,
      commitValidation: l,
    } = e[Q]
    return {
      realtimeValidation: a,
      displayValidation: r,
      updateValidation: t,
      resetValidation: i,
      commitValidation: l,
    }
  }
  return pe(e)
}
function pe(e) {
  let {
    isInvalid: a,
    validationState: r,
    name: t,
    value: i,
    builtinValidation: l,
    validate: o,
    validationBehavior: s = 'aria',
  } = e
  r && (a || (a = r === 'invalid'))
  let c = a !== void 0 ? { isInvalid: a, validationErrors: [], validationDetails: X } : null,
    d = u.useMemo(() => {
      if (!o || i == null) return null
      let m = me(o, i)
      return Y(m)
    }, [o, i])
  l?.validationDetails.valid && (l = void 0)
  let n = u.useContext(ue),
    p = u.useMemo(
      () => (t ? (Array.isArray(t) ? t.flatMap((m) => W(n[m])) : W(n[t])) : []),
      [n, t]
    ),
    [v, f] = u.useState(n),
    [h, b] = u.useState(!1)
  n !== v && (f(n), b(!1))
  let $ = u.useMemo(() => Y(h ? [] : p), [h, p]),
    w = u.useRef(S),
    [x, E] = u.useState(S),
    y = u.useRef(S),
    U = () => {
      if (!V) return
      g(!1)
      let m = d || l || w.current
      _(m, y.current) || ((y.current = m), E(m))
    },
    [V, g] = u.useState(!1)
  return (
    u.useEffect(U),
    {
      realtimeValidation: c || $ || d || l || S,
      displayValidation: s === 'native' ? c || $ || x : c || $ || d || l || x,
      updateValidation(m) {
        s === 'aria' && !_(x, m) ? E(m) : (w.current = m)
      },
      resetValidation() {
        let m = S
        ;(_(m, y.current) || ((y.current = m), E(m)), s === 'native' && g(!1), b(!0))
      },
      commitValidation() {
        ;(s === 'native' && g(!0), b(!0))
      },
    }
  )
}
function W(e) {
  return e ? (Array.isArray(e) ? e : [e]) : []
}
function me(e, a) {
  if (typeof e == 'function') {
    let r = e(a)
    if (r && typeof r != 'boolean') return W(r)
  }
  return []
}
function Y(e) {
  return e.length ? { isInvalid: !0, validationErrors: e, validationDetails: X } : null
}
function _(e, a) {
  return e === a
    ? !0
    : !!e &&
        !!a &&
        e.isInvalid === a.isInvalid &&
        e.validationErrors.length === a.validationErrors.length &&
        e.validationErrors.every((r, t) => r === a.validationErrors[t]) &&
        Object.entries(e.validationDetails).every(([r, t]) => a.validationDetails[r] === t)
}
function ve(e, a, r) {
  let { validationBehavior: t, focus: i } = e
  re(() => {
    if (t === 'native' && r?.current && !r.current.disabled) {
      let d = a.realtimeValidation.isInvalid
        ? a.realtimeValidation.validationErrors.join(' ') || 'Invalid value.'
        : ''
      ;(r.current.setCustomValidity(d),
        r.current.hasAttribute('title') || (r.current.title = ''),
        a.realtimeValidation.isInvalid || a.updateValidation(be(r.current)))
    }
  })
  let l = u.useRef(!1),
    o = O(() => {
      l.current || a.resetValidation()
    }),
    s = O((d) => {
      var n
      a.displayValidation.isInvalid || a.commitValidation()
      let p = r == null || (n = r.current) === null || n === void 0 ? void 0 : n.form
      if (!d.defaultPrevented && r && p && ge(p) === r.current) {
        var v
        ;(i ? i() : (v = r.current) === null || v === void 0 || v.focus(), te('keyboard'))
      }
      d.preventDefault()
    }),
    c = O(() => {
      a.commitValidation()
    })
  u.useEffect(() => {
    let d = r?.current
    if (!d) return
    let n = d.form,
      p = n?.reset
    return (
      n &&
        (n.reset = () => {
          ;((l.current =
            !window.event ||
            (window.event.type === 'message' && window.event.target instanceof MessagePort)),
            p?.call(n),
            (l.current = !1))
        }),
      d.addEventListener('invalid', s),
      d.addEventListener('change', c),
      n?.addEventListener('reset', o),
      () => {
        ;(d.removeEventListener('invalid', s),
          d.removeEventListener('change', c),
          n?.removeEventListener('reset', o),
          n && (n.reset = p))
      }
    )
  }, [r, s, c, o, t])
}
function fe(e) {
  let a = e.validity
  return {
    badInput: a.badInput,
    customError: a.customError,
    patternMismatch: a.patternMismatch,
    rangeOverflow: a.rangeOverflow,
    rangeUnderflow: a.rangeUnderflow,
    stepMismatch: a.stepMismatch,
    tooLong: a.tooLong,
    tooShort: a.tooShort,
    typeMismatch: a.typeMismatch,
    valueMissing: a.valueMissing,
    valid: a.valid,
  }
}
function be(e) {
  return {
    isInvalid: !e.validity.valid,
    validationDetails: fe(e),
    validationErrors: e.validationMessage ? [e.validationMessage] : [],
  }
}
function ge(e) {
  for (let a = 0; a < e.elements.length; a++) {
    let r = e.elements[a]
    if (!r.validity.valid) return r
  }
  return null
}
function he(e) {
  let { id: a, label: r, 'aria-labelledby': t, 'aria-label': i, labelElementType: l = 'label' } = e
  a = k(a)
  let o = k(),
    s = {}
  r && ((t = t ? `${o} ${t}` : o), (s = { id: o, htmlFor: l === 'label' ? a : void 0 }))
  let c = oe({ id: a, 'aria-label': i, 'aria-labelledby': t })
  return { labelProps: s, fieldProps: c }
}
function ye(e) {
  let { description: a, errorMessage: r, isInvalid: t, validationState: i } = e,
    { labelProps: l, fieldProps: o } = he(e),
    s = K([!!a, !!r, t, i]),
    c = K([!!a, !!r, t, i])
  return (
    (o = G(o, {
      'aria-describedby': [s, c, e['aria-describedby']].filter(Boolean).join(' ') || void 0,
    })),
    { labelProps: l, fieldProps: o, descriptionProps: { id: s }, errorMessageProps: { id: c } }
  )
}
function $e(e, a) {
  let {
      inputElementType: r = 'input',
      isDisabled: t = !1,
      isRequired: i = !1,
      isReadOnly: l = !1,
      type: o = 'text',
      validationBehavior: s = 'aria',
    } = e,
    [c, d] = de(e.value, e.defaultValue || '', e.onChange),
    { focusableProps: n } = ie(e, a),
    p = ce({ ...e, value: c }),
    { isInvalid: v, validationErrors: f, validationDetails: h } = p.displayValidation,
    {
      labelProps: b,
      fieldProps: $,
      descriptionProps: w,
      errorMessageProps: x,
    } = ye({ ...e, isInvalid: v, errorMessage: e.errorMessage || f }),
    E = le(e, { labelable: !0 })
  const y = { type: o, pattern: e.pattern }
  let [U] = u.useState(c)
  var V
  return (
    se(a, (V = e.defaultValue) !== null && V !== void 0 ? V : U, d),
    ve(e, p, a),
    u.useEffect(() => {
      if (a.current instanceof ne(a.current).HTMLTextAreaElement) {
        let g = a.current
        Object.defineProperty(g, 'defaultValue', {
          get: () => g.value,
          set: () => {},
          configurable: !0,
        })
      }
    }, [a]),
    {
      labelProps: b,
      inputProps: G(E, r === 'input' ? y : void 0, {
        disabled: t,
        readOnly: l,
        required: i && s === 'native',
        'aria-required': (i && s === 'aria') || void 0,
        'aria-invalid': v || void 0,
        'aria-errormessage': e['aria-errormessage'],
        'aria-activedescendant': e['aria-activedescendant'],
        'aria-autocomplete': e['aria-autocomplete'],
        'aria-haspopup': e['aria-haspopup'],
        'aria-controls': e['aria-controls'],
        value: c,
        onChange: (g) => d(g.target.value),
        autoComplete: e.autoComplete,
        autoCapitalize: e.autoCapitalize,
        maxLength: e.maxLength,
        minLength: e.minLength,
        name: e.name,
        form: e.form,
        placeholder: e.placeholder,
        inputMode: e.inputMode,
        autoCorrect: e.autoCorrect,
        spellCheck: e.spellCheck,
        [parseInt(Z.version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: e.enterKeyHint,
        onCopy: e.onCopy,
        onCut: e.onCut,
        onPaste: e.onPaste,
        onCompositionEnd: e.onCompositionEnd,
        onCompositionStart: e.onCompositionStart,
        onCompositionUpdate: e.onCompositionUpdate,
        onSelect: e.onSelect,
        onBeforeInput: e.onBeforeInput,
        onInput: e.onInput,
        ...n,
        ...$,
      }),
      descriptionProps: w,
      errorMessageProps: x,
      isInvalid: v,
      validationErrors: f,
      validationDetails: h,
    }
  )
}
const xe = ee(
    'w-full font-normal transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-neutral-400',
    {
      variants: {
        variant: {
          standard: [
            'border border-neutral-200 bg-white text-neutral-900 shadow-xs',
            'hover:border-neutral-300 hover:shadow-sm',
            'focus-visible:border-primary-500 focus-visible:ring-primary-500/20 focus-visible:shadow-primary-sm focus-visible:ring-2',
            'invalid:border-error-500 invalid:ring-error-500/20',
          ],
          filled: [
            'border border-transparent bg-neutral-100 text-neutral-900 shadow-inner',
            'hover:bg-neutral-200',
            'focus-visible:bg-white focus-visible:ring-2 focus-visible:border-primary-500 focus-visible:ring-primary-500/20 focus-visible:shadow-primary-sm',
            'invalid:bg-error-50 invalid:border-error-500 invalid:ring-error-500/20',
          ],
          underline: [
            'border-0 border-b-2 border-neutral-200 bg-transparent text-neutral-900 shadow-none rounded-none',
            'hover:border-neutral-300',
            'focus-visible:shadow-none ',
            'invalid:border-error-500',
          ],
        },
        size: {
          sm: 'h-8 px-3 text-body-sm rounded-sm',
          md: 'h-9 px-4 text-body rounded',
          lg: 'h-10 px-6 text-body-md rounded-lg',
        },
      },
      defaultVariants: { variant: 'standard', size: 'md' },
    }
  ),
  H = u.forwardRef((e, a) => {
    const r = u.useRef(null),
      t = ae(r, a),
      {
        labelProps: i,
        inputProps: l,
        descriptionProps: o,
        errorMessageProps: s,
        isInvalid: c,
        validationErrors: d,
      } = $e(e, r)
    return I.jsxs('div', {
      className: 'flex flex-col',
      children: [
        e.label &&
          I.jsx('label', {
            ...i,
            className: 'text-label mb-1 font-normal text-neutral-900',
            children: e.label,
          }),
        I.jsx('input', {
          ...l,
          ref: t,
          className: xe({ variant: e.variant, size: e.size, className: e.className }),
        }),
        e.description &&
          I.jsx('div', {
            ...o,
            className: 'text-body mt-1 text-neutral-500',
            children: e.description,
          }),
        c &&
          I.jsx('div', {
            ...s,
            className: 'text-body-xs text-error-500 mt-1',
            children: d.join(' '),
          }),
      ],
    })
  })
H.displayName = 'Input'
H.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Input',
  props: {
    label: { required: !1, tsType: { name: 'string' }, description: '' },
    description: { required: !1, tsType: { name: 'string' }, description: '' },
    placeholder: { required: !1, tsType: { name: 'string' }, description: '' },
    type: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'text' | 'email' | 'password' | 'number'",
        elements: [
          { name: 'literal', value: "'text'" },
          { name: 'literal', value: "'email'" },
          { name: 'literal', value: "'password'" },
          { name: 'literal', value: "'number'" },
        ],
      },
      description: '',
    },
    variant: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'standard' | 'filled' | 'underline'",
        elements: [
          { name: 'literal', value: "'standard'" },
          { name: 'literal', value: "'filled'" },
          { name: 'literal', value: "'underline'" },
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
  },
  composes: ['Pick'],
}
const Ce = {
    title: 'Components/Input',
    component: H,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component:
            'A versatile input component with multiple variants, sizes, and full form validation support using React Aria.',
        },
      },
    },
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['standard', 'filled', 'underline'],
        description: 'Input style variant',
      },
      size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'], description: 'Input size' },
      type: {
        control: { type: 'select' },
        options: ['text', 'email', 'password', 'number'],
        description: 'Input type',
      },
      isDisabled: { control: 'boolean', description: 'Disable the input' },
      isRequired: { control: 'boolean', description: 'Make the input required' },
      label: { control: 'text', description: 'Input label text' },
      placeholder: { control: 'text', description: 'Placeholder text' },
      description: { control: 'text', description: 'Helper text below the input' },
      value: { control: 'text', description: 'Controlled input value' },
      defaultValue: { control: 'text', description: 'Default input value' },
      onChange: { action: 'onChange' },
      onFocus: { action: 'onFocus' },
      onBlur: { action: 'onBlur' },
    },
    args: { label: 'Label', placeholder: 'Enter text...' },
  },
  P = {},
  M = { args: { variant: 'filled', label: 'Filled Input', placeholder: 'Filled variant' } },
  C = {
    args: { variant: 'underline', label: 'Underline Input', placeholder: 'Underline variant' },
  },
  D = { args: { size: 'sm', label: 'Small Input', placeholder: 'Small size' } },
  R = { args: { size: 'md', label: 'Medium Input', placeholder: 'Medium size' } },
  L = { args: { size: 'lg', label: 'Large Input', placeholder: 'Large size' } },
  q = { args: { type: 'email', label: 'Email', placeholder: 'Enter your email' } },
  z = { args: { type: 'password', label: 'Password', placeholder: 'Enter your password' } },
  T = { args: { type: 'number', label: 'Number', placeholder: 'Enter a number' } },
  j = { args: { label: 'Disabled Input', placeholder: 'This input is disabled', isDisabled: !0 } },
  B = { args: { label: 'Required Input', placeholder: 'This field is required', isRequired: !0 } },
  F = {
    args: {
      label: 'Input with Description',
      placeholder: 'Enter text...',
      description: 'This is a helpful description for the input field.',
    },
  },
  N = { args: { label: 'Input with Value', defaultValue: 'Pre-filled value' } },
  A = {
    args: {
      variant: 'standard',
      size: 'md',
      type: 'email',
      label: 'Email Address',
      placeholder: 'john@example.com',
      description: "We'll use this to send you updates",
      isRequired: !0,
    },
  }
P.parameters = {
  ...P.parameters,
  docs: { ...P.parameters?.docs, source: { originalSource: '{}', ...P.parameters?.docs?.source } },
}
M.parameters = {
  ...M.parameters,
  docs: {
    ...M.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'filled',
    label: 'Filled Input',
    placeholder: 'Filled variant'
  }
}`,
      ...M.parameters?.docs?.source,
    },
  },
}
C.parameters = {
  ...C.parameters,
  docs: {
    ...C.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'underline',
    label: 'Underline Input',
    placeholder: 'Underline variant'
  }
}`,
      ...C.parameters?.docs?.source,
    },
  },
}
D.parameters = {
  ...D.parameters,
  docs: {
    ...D.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    size: 'sm',
    label: 'Small Input',
    placeholder: 'Small size'
  }
}`,
      ...D.parameters?.docs?.source,
    },
  },
}
R.parameters = {
  ...R.parameters,
  docs: {
    ...R.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    size: 'md',
    label: 'Medium Input',
    placeholder: 'Medium size'
  }
}`,
      ...R.parameters?.docs?.source,
    },
  },
}
L.parameters = {
  ...L.parameters,
  docs: {
    ...L.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    size: 'lg',
    label: 'Large Input',
    placeholder: 'Large size'
  }
}`,
      ...L.parameters?.docs?.source,
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
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email'
  }
}`,
      ...q.parameters?.docs?.source,
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
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password'
  }
}`,
      ...z.parameters?.docs?.source,
    },
  },
}
T.parameters = {
  ...T.parameters,
  docs: {
    ...T.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    type: 'number',
    label: 'Number',
    placeholder: 'Enter a number'
  }
}`,
      ...T.parameters?.docs?.source,
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
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    isDisabled: true
  }
}`,
      ...j.parameters?.docs?.source,
    },
  },
}
B.parameters = {
  ...B.parameters,
  docs: {
    ...B.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    label: 'Required Input',
    placeholder: 'This field is required',
    isRequired: true
  }
}`,
      ...B.parameters?.docs?.source,
    },
  },
}
F.parameters = {
  ...F.parameters,
  docs: {
    ...F.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    label: 'Input with Description',
    placeholder: 'Enter text...',
    description: 'This is a helpful description for the input field.'
  }
}`,
      ...F.parameters?.docs?.source,
    },
  },
}
N.parameters = {
  ...N.parameters,
  docs: {
    ...N.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    label: 'Input with Value',
    defaultValue: 'Pre-filled value'
  }
}`,
      ...N.parameters?.docs?.source,
    },
  },
}
A.parameters = {
  ...A.parameters,
  docs: {
    ...A.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'standard',
    size: 'md',
    type: 'email',
    label: 'Email Address',
    placeholder: 'john@example.com',
    description: "We'll use this to send you updates",
    isRequired: true
  }
}`,
      ...A.parameters?.docs?.source,
    },
  },
}
const De = [
  'Default',
  'Filled',
  'Underline',
  'Small',
  'Medium',
  'Large',
  'Email',
  'Password',
  'Number',
  'Disabled',
  'Required',
  'WithDescription',
  'WithValue',
  'FullExample',
]
export {
  P as Default,
  j as Disabled,
  q as Email,
  M as Filled,
  A as FullExample,
  L as Large,
  R as Medium,
  T as Number,
  z as Password,
  B as Required,
  D as Small,
  C as Underline,
  F as WithDescription,
  N as WithValue,
  De as __namedExportsOrder,
  Ce as default,
}
