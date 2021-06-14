(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{481:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(733)),i={id:"use-clipboard",title:"useClipboard"},c={unversionedId:"use-clipboard",id:"version-3.0.0-next.38/use-clipboard",isDocsHomePage:!1,title:"useClipboard",description:"useClipboard is a custom hook that handles copying content to clipboard.",source:"@site/versioned_docs/version-3.0.0-next.38/useClipboard.md",slug:"/use-clipboard",permalink:"/3.0.0-next.38/use-clipboard",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.38/useClipboard.md",version:"3.0.0-next.38",sidebar:"version-3.0.0-next.38/componentsSidebar",previous:{title:"useBreakpointValue",permalink:"/3.0.0-next.38/use-breakPoint-value"},next:{title:"useMediaQuery",permalink:"/3.0.0-next.38/use-media-query"}},s=[{value:"Return Value",id:"return-value",children:[]},{value:"Import",id:"import",children:[]},{value:"Usage",id:"usage",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useClipboard")," is a custom hook that handles copying content to clipboard."),Object(o.b)("h2",{id:"return-value"},"Return Value"),Object(o.b)("p",null,"The\xa0",Object(o.b)("inlineCode",{parentName:"p"},"useClipboard"),"\xa0hook returns an object with the following fields:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"value")," : ( ",Object(o.b)("strong",{parentName:"li"},"string")," ) The copied value."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onCopy")," : ( ",Object(o.b)("strong",{parentName:"li"},"Function")," ) Callback function to copy content."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"hasCopied")," : ( ",Object(o.b)("strong",{parentName:"li"},"boolean")," ) If ",Object(o.b)("strong",{parentName:"li"},"true"),", the content has been copied.")),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { useClipboard } from 'native-base';\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("div",{className:"snack-player","data-snack-name":"useClipboard Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Button%2C%0A%20%20HStack%2C%0A%20%20VStack%2C%0A%20%20Text%2C%0A%20%20Input%2C%0A%20%20useClipboard%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20UseClipboardExample()%20%7B%0A%20%20const%20%5BcopyText%2C%20setCopyText%5D%20%3D%20React.useState(%22Copy%20Me%22)%3B%0A%20%20const%20%5BpasteText%2C%20setPasteText%5D%20%3D%20React.useState(%22%22)%3B%0A%20%20const%20%7B%20value%2C%20onCopy%2C%20hasCopied%20%7D%20%3D%20useClipboard()%3B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CHStack%20space%3D%7B3%7D%3E%0A%20%20%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20%20%20w%3D%2260%25%22%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%22Copy%20From%22%0A%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7B(v)%20%3D%3E%20setCopyText(v)%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BcopyText%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20onCopy(copyText)%7D%3ECopy%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%3CHStack%20space%3D%7B3%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%7BhasCopied%20%3F%20%22Copied%22%20%3A%20%22Press%20here%22%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20%20%20w%3D%2260%25%22%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%22Paste%20To%22%0A%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7B(v)%20%3D%3E%20setPasteText(v)%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BpasteText%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20setPasteText(value)%7D%3EPaste%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CUseClipboardExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}))}l.isMDXComponent=!0},733:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);