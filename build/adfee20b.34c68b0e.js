(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{536:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(733)),o={id:"center",title:"Center"},c={unversionedId:"center",id:"center",isDocsHomePage:!1,title:"Center",description:"Center is a layout component that centers its child within itself.",source:"@site/docs/center.md",slug:"/center",permalink:"/next/center",editUrl:"https://github.com/nativebase/website/tree/main/docs/center.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Box",permalink:"/next/box"},next:{title:"Container",permalink:"/next/container"}},s=[{value:"<strong>Import</strong>",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Icon frames",id:"icon-frames",children:[]},{value:"Square and Circle",id:"square-and-circle",children:[]}]},{value:"Props",id:"props",children:[]}],l={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Center")," is a layout component that centers its child within itself."),Object(i.b)("h2",{id:"import"},Object(i.b)("strong",{parentName:"h2"},"Import")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Center, Square, Circle } from 'native-base';\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Center:"),"\xa0Centers its child, pass\xa0",Object(i.b)("inlineCode",{parentName:"li"},"width"),"\xa0and\xa0",Object(i.b)("inlineCode",{parentName:"li"},"height")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Square:"),"\xa0",Object(i.b)("inlineCode",{parentName:"li"},"Center")," but we need to pass\xa0",Object(i.b)("inlineCode",{parentName:"li"},"size"),"\xa0(width and height)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Circle:"),"\xa0",Object(i.b)("inlineCode",{parentName:"li"},"Center"),"\xa0with round\xa0",Object(i.b)("inlineCode",{parentName:"li"},"borderRadius"),", pass ",Object(i.b)("inlineCode",{parentName:"li"},"size")," (width and height)")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"basic"},"Basic"),Object(i.b)("p",null,"Put any child element inside it, give it any width or/and height. It'll ensure the child is centered."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%0A%20%20%20%20%20%20bg%3D%22primary.400%22%0A%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20height%3D%7B200%7D%0A%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20This%20is%20the%20Center%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"icon-frames"},"Icon frames"),Object(i.b)("p",null,"Center can be used to nicely position icons in the center and add frames around them."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Center%2C%20Box%2C%20HStack%2C%20Icon%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aimport%20%7B%20MaterialIcons%20%7D%20from%20%22%40expo%2Fvector-icons%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%3E%0A%20%20%20%20%20%20%3CCenter%20w%3D%2240px%22%20h%3D%2240px%22%20bg%3D%22primary.400%22%20color%3D%22white%22%3E%0A%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22audiotrack%22%20as%3D%7BMaterialIcons%7D%20color%3D%22white%22%20size%3D%7B6%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%20w%3D%2240px%22%20h%3D%2240px%22%20bg%3D%22secondary.400%22%3E%0A%20%20%20%20%20%20%20%20%3CBox%0A%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20fontSize%3A%20%22lg%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%2020%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"square-and-circle"},"Square and Circle"),Object(i.b)("p",null,"Square and Circle automatically centers their children."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Circle%2C%0A%20%20Square%2C%0A%20%20Box%2C%0A%20%20HStack%2C%0A%20%20Icon%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aimport%20%7B%20MaterialIcons%20%7D%20from%20%22%40expo%2Fvector-icons%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%3E%0A%20%20%20%20%20%20%3CCircle%20size%3D%7B98%7D%20bg%3D%22secondary.400%22%3E%0A%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22audiotrack%22%20as%3D%7BMaterialIcons%7D%20color%3D%22white%22%20size%3D%7B8%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCircle%3E%0A%20%20%20%20%20%20%3CSquare%20size%3D%22lg%22%20bg%3D%22primary.400%22%3E%0A%20%20%20%20%20%20%20%20%3CBox%0A%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20fontSize%3A%20%22lg%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%2020%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3C%2FSquare%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("p",null,"Center implements ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"box#props"}),"Box")))}p.isMDXComponent=!0},733:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return a?r.a.createElement(u,c(c({ref:t},l),{},{components:a})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);