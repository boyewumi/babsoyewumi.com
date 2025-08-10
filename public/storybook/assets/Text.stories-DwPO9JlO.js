import { j as v } from './jsx-runtime-D_zvdyIk.js'
import { r as h } from './iframe-gEdmNp39.js'
import { c as f, m as w } from './index-bEuIjaH0.js'
import './preload-helper-D9Z9MdNV.js'
const S = f('', {
    variants: {
      variant: {
        'label-sm': 'text-label-sm',
        label: 'text-label',
        'label-md': 'text-label-md',
        'label-lg': 'text-label-lg',
        'body-sm': 'text-body-sm',
        'body-xs': 'text-body-xs',
        body: 'text-body',
        'body-md': 'text-body-md',
        'body-lg': 'text-body-lg',
        'heading-xs': 'text-heading-xs',
        'heading-sm': 'text-heading-sm',
        'heading-md': 'text-heading-md',
        'heading-lg': 'text-heading-lg',
        'heading-xl': 'text-heading-xl',
        'heading-2xl': 'text-heading-2xl',
        'heading-3xl': 'text-heading-3xl',
        'heading-4xl': 'text-heading-4xl',
        'display-sm': 'text-display-sm',
        'display-md': 'text-display-md',
        'display-lg': 'text-display-lg',
        'display-xl': 'text-display-xl',
        'display-2xl': 'text-display-2xl',
        'display-3xl': 'text-display-3xl',
        'display-4xl': 'text-display-4xl',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
      },
      color: {
        primary: 'text-primary-500',
        'primary-600': 'text-primary-600',
        'neutral-900': 'text-neutral-900',
        'neutral-800': 'text-neutral-800',
        'neutral-700': 'text-neutral-700',
        'neutral-600': 'text-neutral-600',
        'neutral-500': 'text-neutral-500',
        'neutral-400': 'text-neutral-400',
        success: 'text-success-600',
        warning: 'text-warning-600',
        error: 'text-error-500',
        info: 'text-info-500',
        white: 'text-white',
      },
    },
    defaultVariants: { variant: 'body', weight: 'normal', color: 'neutral-700' },
  }),
  g = h.forwardRef(({ as: p = 'p', ...e }, y) => {
    const x = h.useRef(null),
      b = w(x, y)
    return v.jsx(p, {
      ref: b,
      className: S({
        variant: e.variant,
        weight: e.weight,
        color: e.color,
        className: e.className,
      }),
      ...(p === 'label' && e.htmlFor && { htmlFor: e.htmlFor }),
      children: e.children,
    })
  })
g.displayName = 'Text'
g.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Text',
  props: {
    variant: {
      required: !1,
      tsType: {
        name: 'union',
        raw: `| 'label-sm'
| 'label'
| 'label-md'
| 'label-lg'
| 'body-sm'
| 'body-xs'
| 'body'
| 'body-md'
| 'body-lg'
| 'heading-xs'
| 'heading-sm'
| 'heading-md'
| 'heading-lg'
| 'heading-xl'
| 'heading-2xl'
| 'heading-3xl'
| 'heading-4xl'
| 'display-sm'
| 'display-md'
| 'display-lg'
| 'display-xl'
| 'display-2xl'
| 'display-3xl'
| 'display-4xl'`,
        elements: [
          { name: 'literal', value: "'label-sm'" },
          { name: 'literal', value: "'label'" },
          { name: 'literal', value: "'label-md'" },
          { name: 'literal', value: "'label-lg'" },
          { name: 'literal', value: "'body-sm'" },
          { name: 'literal', value: "'body-xs'" },
          { name: 'literal', value: "'body'" },
          { name: 'literal', value: "'body-md'" },
          { name: 'literal', value: "'body-lg'" },
          { name: 'literal', value: "'heading-xs'" },
          { name: 'literal', value: "'heading-sm'" },
          { name: 'literal', value: "'heading-md'" },
          { name: 'literal', value: "'heading-lg'" },
          { name: 'literal', value: "'heading-xl'" },
          { name: 'literal', value: "'heading-2xl'" },
          { name: 'literal', value: "'heading-3xl'" },
          { name: 'literal', value: "'heading-4xl'" },
          { name: 'literal', value: "'display-sm'" },
          { name: 'literal', value: "'display-md'" },
          { name: 'literal', value: "'display-lg'" },
          { name: 'literal', value: "'display-xl'" },
          { name: 'literal', value: "'display-2xl'" },
          { name: 'literal', value: "'display-3xl'" },
          { name: 'literal', value: "'display-4xl'" },
        ],
      },
      description: '',
    },
    weight: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'",
        elements: [
          { name: 'literal', value: "'light'" },
          { name: 'literal', value: "'normal'" },
          { name: 'literal', value: "'medium'" },
          { name: 'literal', value: "'semibold'" },
          { name: 'literal', value: "'bold'" },
          { name: 'literal', value: "'extrabold'" },
        ],
      },
      description: '',
    },
    color: {
      required: !1,
      tsType: {
        name: 'union',
        raw: `| 'primary'
| 'primary-600'
| 'neutral-900'
| 'neutral-800'
| 'neutral-700'
| 'neutral-600'
| 'neutral-500'
| 'neutral-400'
| 'success'
| 'warning'
| 'error'
| 'info'
| 'white'`,
        elements: [
          { name: 'literal', value: "'primary'" },
          { name: 'literal', value: "'primary-600'" },
          { name: 'literal', value: "'neutral-900'" },
          { name: 'literal', value: "'neutral-800'" },
          { name: 'literal', value: "'neutral-700'" },
          { name: 'literal', value: "'neutral-600'" },
          { name: 'literal', value: "'neutral-500'" },
          { name: 'literal', value: "'neutral-400'" },
          { name: 'literal', value: "'success'" },
          { name: 'literal', value: "'warning'" },
          { name: 'literal', value: "'error'" },
          { name: 'literal', value: "'info'" },
          { name: 'literal', value: "'white'" },
        ],
      },
      description: '',
    },
    as: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label'",
        elements: [
          { name: 'literal', value: "'p'" },
          { name: 'literal', value: "'span'" },
          { name: 'literal', value: "'h1'" },
          { name: 'literal', value: "'h2'" },
          { name: 'literal', value: "'h3'" },
          { name: 'literal', value: "'h4'" },
          { name: 'literal', value: "'h5'" },
          { name: 'literal', value: "'h6'" },
          { name: 'literal', value: "'label'" },
        ],
      },
      description: '',
      defaultValue: { value: "'p'", computed: !1 },
    },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    children: {
      required: !0,
      tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
      description: '',
    },
    htmlFor: { required: !1, tsType: { name: 'string' }, description: '' },
  },
}
const R = {
    title: 'Components/Text',
    component: g,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component:
            'A flexible text component with semantic HTML elements, typography variants, font weights, and color options for consistent text styling.',
        },
      },
    },
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: [
          'label-sm',
          'label',
          'label-md',
          'label-lg',
          'body-xs',
          'body-sm',
          'body',
          'body-md',
          'body-lg',
          'heading-xs',
          'heading-sm',
          'heading-md',
          'heading-lg',
          'heading-xl',
          'heading-2xl',
          'heading-3xl',
          'heading-4xl',
          'display-sm',
          'display-md',
          'display-lg',
          'display-xl',
          'display-2xl',
          'display-3xl',
          'display-4xl',
        ],
        description: 'Typography variant',
      },
      weight: {
        control: { type: 'select' },
        options: ['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
        description: 'Font weight',
      },
      color: {
        control: { type: 'select' },
        options: [
          'primary',
          'primary-600',
          'neutral-900',
          'neutral-800',
          'neutral-700',
          'neutral-600',
          'neutral-500',
          'neutral-400',
          'success',
          'warning',
          'error',
          'info',
          'white',
        ],
        description: 'Text color',
      },
      as: {
        control: { type: 'select' },
        options: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label'],
        description: 'HTML element to render',
      },
      htmlFor: { control: 'text', description: 'ID of form element (only when as="label")' },
      children: { control: 'text', description: 'Text content' },
    },
    args: { children: 'Sample text content' },
  },
  a = {},
  l = { args: { variant: 'label', children: 'Default Label', as: 'label' } },
  r = {
    args: { variant: 'body', children: 'Default body text for regular content and paragraphs.' },
  },
  n = { args: { variant: 'heading-md', children: 'Medium Heading', as: 'h4' } },
  t = { args: { variant: 'display-md', children: 'Medium Display', as: 'h1' } },
  i = { args: { variant: 'body-lg', weight: 'bold', children: 'Bold weight text' } },
  s = { args: { variant: 'body-lg', color: 'primary', children: 'Primary colored text' } },
  o = { args: { variant: 'body-lg', color: 'success', children: 'Success colored text' } },
  d = { args: { variant: 'body-lg', color: 'error', children: 'Error colored text' } },
  m = { args: { variant: 'body-lg', color: 'warning', children: 'Warning colored text' } },
  c = { args: { as: 'span', variant: 'body', children: 'This is a span element' } },
  u = {
    args: {
      variant: 'heading-lg',
      weight: 'bold',
      color: 'primary',
      as: 'h2',
      children: 'Styled Primary Heading',
    },
  }
a.parameters = {
  ...a.parameters,
  docs: { ...a.parameters?.docs, source: { originalSource: '{}', ...a.parameters?.docs?.source } },
}
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'label',
    children: 'Default Label',
    as: 'label'
  }
}`,
      ...l.parameters?.docs?.source,
    },
  },
}
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'body',
    children: 'Default body text for regular content and paragraphs.'
  }
}`,
      ...r.parameters?.docs?.source,
    },
  },
}
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'heading-md',
    children: 'Medium Heading',
    as: 'h4'
  }
}`,
      ...n.parameters?.docs?.source,
    },
  },
}
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'display-md',
    children: 'Medium Display',
    as: 'h1'
  }
}`,
      ...t.parameters?.docs?.source,
    },
  },
}
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'body-lg',
    weight: 'bold',
    children: 'Bold weight text'
  }
}`,
      ...i.parameters?.docs?.source,
    },
  },
}
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'body-lg',
    color: 'primary',
    children: 'Primary colored text'
  }
}`,
      ...s.parameters?.docs?.source,
    },
  },
}
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'body-lg',
    color: 'success',
    children: 'Success colored text'
  }
}`,
      ...o.parameters?.docs?.source,
    },
  },
}
d.parameters = {
  ...d.parameters,
  docs: {
    ...d.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'body-lg',
    color: 'error',
    children: 'Error colored text'
  }
}`,
      ...d.parameters?.docs?.source,
    },
  },
}
m.parameters = {
  ...m.parameters,
  docs: {
    ...m.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'body-lg',
    color: 'warning',
    children: 'Warning colored text'
  }
}`,
      ...m.parameters?.docs?.source,
    },
  },
}
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    as: 'span',
    variant: 'body',
    children: 'This is a span element'
  }
}`,
      ...c.parameters?.docs?.source,
    },
  },
}
u.parameters = {
  ...u.parameters,
  docs: {
    ...u.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'heading-lg',
    weight: 'bold',
    color: 'primary',
    as: 'h2',
    children: 'Styled Primary Heading'
  }
}`,
      ...u.parameters?.docs?.source,
    },
  },
}
const C = [
  'Default',
  'Label',
  'Body',
  'HeadingMedium',
  'DisplayMedium',
  'BoldWeight',
  'PrimaryColor',
  'SuccessColor',
  'ErrorColor',
  'WarningColor',
  'AsSpan',
  'StyledHeading',
]
export {
  c as AsSpan,
  r as Body,
  i as BoldWeight,
  a as Default,
  t as DisplayMedium,
  d as ErrorColor,
  n as HeadingMedium,
  l as Label,
  s as PrimaryColor,
  u as StyledHeading,
  o as SuccessColor,
  m as WarningColor,
  C as __namedExportsOrder,
  R as default,
}
