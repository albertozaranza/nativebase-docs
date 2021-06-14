(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{351:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(733)),c={id:"image",title:"Image"},o={unversionedId:"image",id:"version-3.0.0-next.36/image",isDocsHomePage:!1,title:"Image",description:"Generic Image components from React Native.",source:"@site/versioned_docs/version-3.0.0-next.36/image.md",slug:"/image",permalink:"/3.0.0-next.36/image",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/image.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"Icon",permalink:"/3.0.0-next.36/icon"},next:{title:"AppBar",permalink:"/3.0.0-next.36/appBar"}},s=[{value:"Implements",id:"implements",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Sizes",id:"sizes",children:[]},{value:"Border",id:"border",children:[]},{value:"Fallback",id:"fallback",children:[]},{value:"Basic (With Ref)",id:"basic-with-ref",children:[]}]},{value:"Props",id:"props",children:[{value:"Image",id:"image",children:[]}]}],l={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Generic Image components from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev"}),"React Native"),"."),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/image"}),Object(i.b)("inlineCode",{parentName:"a"},"Image"))," from ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev"}),"React Native"),"."),Object(i.b)("li",{parentName:"ul"},"You can use all props of React native Image.")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"basic"},"Basic"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Image Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20Image%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20ImageComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20size%3D%7B200%7D%3E%0A%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fnativebase.io%2Fassets%2Fimg%2Ffront-page-icon.png'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CImageComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"sizes"},"Sizes"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Image Example(Sizes)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20HStack%2C%20Image%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20ImageComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20size%3D%7B12%7D%0A%20%20%20%20%20%20%20%20resizeMode%3D%22cover%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fnativebase.io%2Fassets%2Fimg%2Ffront-page-icon.png'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20alt%3D%22nativebase%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20resizeMode%3D%22cover%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fnativebase.io%2Fassets%2Fimg%2Ffront-page-icon.png'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20alt%3D%22nativebase%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20size%3D%7B32%7D%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fnativebase.io%2Fassets%2Fimg%2Ffront-page-icon.png'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20alt%3D%22nativebase%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CImageComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"border"},"Border"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Image Example(Border)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Image%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20ImageComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CImage%0A%20%20%20%20%20%20size%3D%7B150%7D%0A%20%20%20%20%20%20alt%3D%22nativebase%22%0A%20%20%20%20%20%20borderRadius%3D%7B100%7D%0A%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fnativebase.io%2Fassets%2Fimg%2Ffront-page-icon.png'%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CImageComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"fallback"},"Fallback"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Image Example(Fallback)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Image%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20ImageComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CImage%0A%20%20%20%20%20%20size%3D%7B150%7D%0A%20%20%20%20%20%20alt%3D%22nativebase%22%0A%20%20%20%20%20%20borderRadius%3D%7B100%7D%0A%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2F-page-icon.png'%2C%0A%20%20%20%20%20%20%20%20%2F%2F%20uri%3A%20'https%3A%2F%2Fnativebase.io%2Fassets%2Fimg%2Ffront-page-icon.png'%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20fallbackSource%3D%7B%7B%0A%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fwww.w3schools.com%2Fcss%2Fimg_lights.jpg'%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CImageComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"basic-with-ref"},"Basic (With Ref)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Image Example(With Ref)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20Image%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20ImageComponent%20()%20%7B%0A%20%20const%20myRef%3A%20any%20%3D%20React.useRef(%7B%7D)%3B%0A%20%20React.useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20myRef%3F.current.setNativeProps(%7B%20borderWidth%3A%2010%2C%20opacity%3A%200.5%20%7D)%3B%0A%20%20%7D%2C%20%5BmyRef%5D)%3B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20size%3D%7B200%7D%3E%0A%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20ref%3D%7BmyRef%7D%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fnativebase.io%2Fassets%2Fimg%2Ffront-page-icon.png'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CImageComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"image"},"Image"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fallbackSource"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ImageSourcePropType"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"In event there was an error loading the src, specify a fallback source."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"alt"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The alt text that describes the image"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ignoreFallback"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Opt out of the fallbackSource logic and show alternative text"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Define the box size of image."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","alt"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/3.0.0-next.36/text#props"}),Object(i.b)("inlineCode",{parentName:"a"},"TextProps"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text styling for alt."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}p.isMDXComponent=!0},733:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||i;return a?r.a.createElement(u,o(o({ref:t},l),{},{components:a})):r.a.createElement(u,o({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);