import{k as m,A as f,l as I,q as a,i as x,b as d,n as v}from"./entry.Ck87Shdd.js";import{r as _,_ as S}from"./_plugin-vue_export-helper.ctIv-i5u.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){f(e=>({e9800f76:p.value}));const t=I(),s=u,l=a(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[s.name]?t.nuxtIcon.aliases[s.name]:s.name}),c=a(()=>_(l.value)),p=a(()=>{var o,r;const e=(r=(o=t.nuxtIcon)==null?void 0:o.iconifyApiOptions)==null?void 0:r.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${c.value.prefix}/${c.value.name}.svg')`}),i=a(()=>{var n,o,r;if(!s.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((o=t.nuxtIcon)!=null&&o.size))return;const e=s.size||((r=t.nuxtIcon)==null?void 0:r.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(x(),d("span",{style:v({width:i.value,height:i.value})},null,4))}}),h=S(y,[["__scopeId","data-v-f044c279"]]);export{h as default};
