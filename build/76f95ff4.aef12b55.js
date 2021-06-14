(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{411:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(3),o=n(7),i=(n(0),n(733)),a={id:"customizingTheme",title:"Customising Theme"},c={unversionedId:"customizingTheme",id:"version-3.0.0-next.37/customizingTheme",isDocsHomePage:!1,title:"Customising Theme",description:"Theme is one core elements of NativeBase. And the extent of customising you can bring to your application by updating it, is only limited your imagination. NativeBase theme is complex object which looks like",source:"@site/versioned_docs/version-3.0.0-next.37/customizingTheme.md",slug:"/customizingTheme",permalink:"/3.0.0-next.37/customizingTheme",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/customizingTheme.md",version:"3.0.0-next.37",sidebar:"version-3.0.0-next.37/componentsSidebar",previous:{title:"Default Theme",permalink:"/3.0.0-next.37/default-theme"},next:{title:"Making components dark mode compatible",permalink:"/3.0.0-next.37/darkMode"}},l=[],s={toc:l};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Theme is one core elements of NativeBase. And the extent of customising you can bring to your application by updating it, is only limited your imagination. NativeBase theme is complex object which looks like"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"// theme\n{\n    colors: {...},\n    fonts: {...},\n    .\n    .\n    .\n    config: {...},\n}\n")),Object(i.b)("p",null,"It have many other properties but in this recipe, well only few of them (namely colors, fonts, and config) and well update it using NativeBase's ",Object(i.b)("inlineCode",{parentName:"p"},"extendTheme")," function, we can update theme object. A simple example to illustrate the process of updating the theme."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { NativeBaseProvider, extendTheme } from 'native-base';\nimport { Content } from './Content';\n\nexport default function () {\n  const theme = extendTheme({\n    colors: {\n      // Add new color\n      primary: {\n        50: '#E3F2F9',\n        100: '#C5E4F3',\n        200: '#A2D4EC',\n        300: '#7AC1E4',\n        400: '#47A9DA',\n        500: '#0088CC',\n        600: '#007AB8',\n        700: '#006BA1',\n        800: '#005885',\n        900: '#003F5E',\n      },\n      // Redefinig only one shade, rest of the color will remain same.\n      amber: {\n        400: '#d97706',\n      },\n    },\n    config: {\n      // Changing initialColorMode to 'dark'\n      initialColorMode: 'dark',\n    },\n  });\n\n  return (\n    <NativeBaseProvider theme={theme}>\n      <Content />\n    </NativeBaseProvider>\n  );\n}\n")),Object(i.b)("p",null,"In the above example, the following changes have been made:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added a new color named ",Object(i.b)("strong",{parentName:"li"},"primary"),"."),Object(i.b)("li",{parentName:"ul"},"Updated one of the shade of ",Object(i.b)("strong",{parentName:"li"},"amber")," color."),Object(i.b)("li",{parentName:"ul"},"Updated the initial color mode to ",Object(i.b)("strong",{parentName:"li"},"dark"),". Default is ",Object(i.b)("strong",{parentName:"li"},"light"),"."),Object(i.b)("li",{parentName:"ul"},"Finally passed the new ",Object(i.b)("strong",{parentName:"li"},"theme")," object to the ",Object(i.b)("strong",{parentName:"li"},"NativeBaseProvider"),".")))}m.isMDXComponent=!0},733:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),m=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=m(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(n),b=r,d=p["".concat(a,".").concat(b)]||p[b]||u[b]||i;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);