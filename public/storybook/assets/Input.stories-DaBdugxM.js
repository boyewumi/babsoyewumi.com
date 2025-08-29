import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./iframe-BZ0nXjex.js";import{m as D}from"./mergeRefs-DxYtFYG1.js";import{c as R}from"./index-lnR2ABT4.js";import{$ as N}from"./useTextField-PeGi8gFa.js";import"./preload-helper-D9Z9MdNV.js";import"./useFocusable-D3uVX1Jv.js";const T=R("w-full font-normal transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-neutral-400",{variants:{variant:{standard:["border border-neutral-200 bg-white text-neutral-900 shadow-xs","hover:border-neutral-300 hover:shadow-sm","focus-visible:border-primary-500 focus-visible:ring-primary-500/20 focus-visible:shadow-primary-sm focus-visible:ring-2","invalid:border-error-500 invalid:ring-error-500/20"],filled:["border border-transparent bg-neutral-100 text-neutral-900 shadow-inner","hover:bg-neutral-200","focus-visible:bg-white focus-visible:ring-2 focus-visible:border-primary-500 focus-visible:ring-primary-500/20 focus-visible:shadow-primary-sm","invalid:bg-error-50 invalid:border-error-500 invalid:ring-error-500/20"],underline:["border-0 border-b-2 border-neutral-200 bg-transparent text-neutral-900 shadow-none rounded-none","hover:border-neutral-300","focus-visible:shadow-none ","invalid:border-error-500"]},size:{sm:"h-8 px-3 text-body-sm rounded-sm",md:"h-9 px-4 text-body rounded",lg:"h-10 px-6 text-body-md rounded-lg"}},defaultVariants:{variant:"standard",size:"md"}}),h=f.forwardRef((e,x)=>{const v=f.useRef(null),y=D(v,x),{labelProps:w,inputProps:I,descriptionProps:z,errorMessageProps:E,isInvalid:S,validationErrors:q}=N(e,v);return r.jsxs("div",{className:"flex flex-col",children:[e.label&&r.jsx("label",{...w,className:"text-label mb-1 font-normal text-neutral-900",children:e.label}),r.jsx("input",{...I,ref:y,className:T({variant:e.variant,size:e.size,className:e.className})}),e.description&&r.jsx("div",{...z,className:"text-body mt-1 text-neutral-500",children:e.description}),S&&r.jsx("div",{...E,className:"text-body-xs text-error-500 mt-1",children:q.join(" ")})]})});h.displayName="Input";h.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password' | 'number'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'filled' | 'underline'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'underline'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Pick"]};const W={title:"Components/Input",component:h,parameters:{layout:"centered",docs:{description:{component:"A versatile input component with multiple variants, sizes, and full form validation support using React Aria."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["standard","filled","underline"],description:"Input style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Input size"},type:{control:{type:"select"},options:["text","email","password","number"],description:"Input type"},isDisabled:{control:"boolean",description:"Disable the input"},isRequired:{control:"boolean",description:"Make the input required"},label:{control:"text",description:"Input label text"},placeholder:{control:"text",description:"Placeholder text"},description:{control:"text",description:"Helper text below the input"},value:{control:"text",description:"Controlled input value"},defaultValue:{control:"text",description:"Default input value"},onChange:{action:"onChange"},onFocus:{action:"onFocus"},onBlur:{action:"onBlur"}},args:{label:"Label",placeholder:"Enter text..."}},a={},s={args:{variant:"filled",label:"Filled Input",placeholder:"Filled variant"}},l={args:{variant:"underline",label:"Underline Input",placeholder:"Underline variant"}},t={args:{size:"sm",label:"Small Input",placeholder:"Small size"}},n={args:{size:"md",label:"Medium Input",placeholder:"Medium size"}},i={args:{size:"lg",label:"Large Input",placeholder:"Large size"}},o={args:{type:"email",label:"Email",placeholder:"Enter your email"}},d={args:{type:"password",label:"Password",placeholder:"Enter your password"}},c={args:{type:"number",label:"Number",placeholder:"Enter a number"}},p={args:{label:"Disabled Input",placeholder:"This input is disabled",isDisabled:!0}},u={args:{label:"Required Input",placeholder:"This field is required",isRequired:!0}},m={args:{label:"Input with Description",placeholder:"Enter text...",description:"This is a helpful description for the input field."}},b={args:{label:"Input with Value",defaultValue:"Pre-filled value"}},g={args:{variant:"standard",size:"md",type:"email",label:"Email Address",placeholder:"john@example.com",description:"We'll use this to send you updates",isRequired:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    label: 'Filled Input',
    placeholder: 'Filled variant'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'underline',
    label: 'Underline Input',
    placeholder: 'Underline variant'
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small Input',
    placeholder: 'Small size'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Medium Input',
    placeholder: 'Medium size'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large Input',
    placeholder: 'Large size'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'number',
    label: 'Number',
    placeholder: 'Enter a number'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    isDisabled: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required Input',
    placeholder: 'This field is required',
    isRequired: true
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input with Description',
    placeholder: 'Enter text...',
    description: 'This is a helpful description for the input field.'
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input with Value',
    defaultValue: 'Pre-filled value'
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'standard',
    size: 'md',
    type: 'email',
    label: 'Email Address',
    placeholder: 'john@example.com',
    description: "We'll use this to send you updates",
    isRequired: true
  }
}`,...g.parameters?.docs?.source}}};const A=["Default","Filled","Underline","Small","Medium","Large","Email","Password","Number","Disabled","Required","WithDescription","WithValue","FullExample"];export{a as Default,p as Disabled,o as Email,s as Filled,g as FullExample,i as Large,n as Medium,c as Number,d as Password,u as Required,t as Small,l as Underline,m as WithDescription,b as WithValue,A as __namedExportsOrder,W as default};
