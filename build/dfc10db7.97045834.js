(window.webpackJsonp=window.webpackJsonp||[]).push([[585],{656:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(733)),i={id:"use-disclosure",title:"useDisclosure"},s={unversionedId:"use-disclosure",id:"version-3.0.0-next.37/use-disclosure",isDocsHomePage:!1,title:"useDisclosure",description:"useDisclosure is a custom hook used to help handle common open, close, or toggle scenarios. It can be used to control feedback component such as Modal, AlertDialog, Drawer, etc.",source:"@site/versioned_docs/version-3.0.0-next.37/useDisclosure.md",slug:"/use-disclosure",permalink:"/3.0.0-next.37/use-disclosure",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/useDisclosure.md",version:"3.0.0-next.37",sidebar:"version-3.0.0-next.37/componentsSidebar",previous:{title:"Transition",permalink:"/3.0.0-next.37/transition"},next:{title:"usePopover",permalink:"/3.0.0-next.37/use-popOver"}},c=[{value:"Import",id:"import",children:[]},{value:"Example",id:"example",children:[]},{value:"Return value",id:"return-value",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useDisclosure")," is a custom hook used to help handle common ",Object(a.b)("inlineCode",{parentName:"p"},"open"),", ",Object(a.b)("inlineCode",{parentName:"p"},"close"),", or ",Object(a.b)("inlineCode",{parentName:"p"},"toggle")," scenarios. It can be used to control feedback component such as ",Object(a.b)("strong",{parentName:"p"},"Modal"),", ",Object(a.b)("strong",{parentName:"p"},"AlertDialog"),", ",Object(a.b)("strong",{parentName:"p"},"Drawer"),", etc."),Object(a.b)("h2",{id:"import"},"Import"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { useDisclose } from 'native-base';\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("div",{className:"snack-player","data-snack-name":"useDisclose Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Modal%2C%0A%20%20Button%2C%0A%20%20Center%2C%0A%20%20Input%2C%0A%20%20useDisclose%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20UseDiscloseExample()%20%7B%0A%20%20const%20%7B%20isOpen%2C%20onOpen%2C%20onClose%20%7D%20%3D%20useDisclose()%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CModal%20isCentered%20isOpen%3D%7BisOpen%7D%20onClose%3D%7BonClose%7D%3E%0A%20%20%20%20%20%20%20%20%3CModal.Overlay%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CModal.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Header%20fontSize%3D%224xl%22%20fontWeight%3D%22bold%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Hello%20World%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%20consectetur%20adipisicing%20elit.%20Quos%20quasi%0A%20%20%20%20%20%20%20%20%20%20%20%20cupiditate%20expedita%2C%20ipsa%20corporis%20officia%20totam%20similique%20delectus!%0A%20%20%20%20%20%20%20%20%20%20%20%20Debitis%20esse%2C%20ea%20blanditiis%20iste%20enim%20iure%20at%20odit%20fugiat%20autem.%0A%20%20%20%20%20%20%20%20%20%20%20%20Accusamus%3F%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CInput%20mt%3D%7B4%7D%20placeholder%3D%22Lorem%20ipsum%20dolor%20sit%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20colorScheme%3D%22blue%22%20mr%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Save%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7BonClose%7D%3EClose%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Footer%3E%0A%20%20%20%20%20%20%20%20%3C%2FModal.Content%3E%0A%20%20%20%20%20%20%3C%2FModal%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonOpen%7D%3EOpen%20Modal%3C%2FButton%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CUseDiscloseExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(a.b)("h2",{id:"return-value"},"Return value"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"useDisclosure")," hook returns an object with the following fields:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"isOpen"),": ( ",Object(a.b)("strong",{parentName:"p"},"boolean")," ) Show the component; triggers the enter or exit states."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"onClose"),": ( ",Object(a.b)("strong",{parentName:"p"},"function")," ) Callback function to set a falsy value for the ",Object(a.b)("inlineCode",{parentName:"p"},"isOpen")," parameter."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"onOpen"),": ( ",Object(a.b)("strong",{parentName:"p"},"function")," ) Callback function to set a truthy value for the ",Object(a.b)("inlineCode",{parentName:"p"},"isOpen")," parameter."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"onToggle"),": ( ",Object(a.b)("strong",{parentName:"p"},"function")," ) Callback function to toggle the value of the ",Object(a.b)("inlineCode",{parentName:"p"},"isOpen")," parameter."))}p.isMDXComponent=!0},733:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);