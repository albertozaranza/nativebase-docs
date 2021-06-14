(window.webpackJsonp=window.webpackJsonp||[]).push([[619],{690:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(7),l=(a(0),a(733)),i={id:"modal",title:"Modal"},r={unversionedId:"modal",id:"version-3.0.0-next.36/modal",isDocsHomePage:!1,title:"Modal",description:"A Modal is a window overlaid on either the primary window or another dialog window. Content behind a modal dialog is inert, meaning that users cannot interact with it.",source:"@site/versioned_docs/version-3.0.0-next.36/modal.md",slug:"/modal",permalink:"/3.0.0-next.36/modal",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/modal.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"Menu",permalink:"/3.0.0-next.36/menu"},next:{title:"Overlay",permalink:"/3.0.0-next.36/overlay"}},c=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Modal Sizes",id:"modal-sizes",children:[]},{value:"intialFocusRef and finalFocusRef Example",id:"intialfocusref-and-finalfocusref-example",children:[]},{value:"Modal with avoidKeyboard",id:"modal-with-avoidkeyboard",children:[]}]},{value:"Accessibility",id:"accessibility",children:[{value:"Keyboard Interactions",id:"keyboard-interactions",children:[]}]},{value:"Props",id:"props",children:[{value:"Modal",id:"modal",children:[]},{value:"Children components",id:"children-components",children:[]}]}],d={toc:c};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A Modal is a window overlaid on either the primary window or another dialog window. Content behind a modal dialog is ",Object(l.b)("strong",{parentName:"p"},"inert"),", meaning that users cannot interact with it."),Object(l.b)("h2",{id:"import"},"Import"),Object(l.b)("p",null,"NativeBase exports Modal Compound component:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Modal"),": The wrapper that provides context for its children."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Modal.Content"),": The container for the modal dialog's content."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Modal.Header"),": The header that labels the modal dialog."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Modal.Footer"),": The footer that houses the modal actions."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Modal.Body"),": The wrapper that houses the modal's main content."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Modal.CloseButton"),": The button that closes the modal.")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Modal } from 'native-base';\n")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("h3",{id:"basic"},"Basic"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Modal Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Modal%2C%0A%20%20Button%2C%0A%20%20Center%2C%0A%20%20Input%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20ModalComponent%20()%20%7B%0A%20%20const%20%5BmodalVisible%2C%20setModalVisible%5D%20%3D%20React.useState(false)%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CModal%0A%20%20%20%20%20%20%20%20isOpen%3D%7BmodalVisible%7D%0A%20%20%20%20%20%20%20%20onClose%3D%7BsetModalVisible%7D%0A%20%20%20%20%20%20%20%20overlayVisible%3D%7Btrue%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CModal.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Header%20_text%3D%7B%7B%20fontSize%3A%20'4xl'%2C%20fontWeight%3A%20'bold'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Hello%20World%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%20consectetur%20adipisicing%20elit.%20Quos%20quasi%0A%20%20%20%20%20%20%20%20%20%20%20%20cupiditate%20expedita%2C%20ipsa%20corporis%20officia%20totam%20similique%20delectus!%0A%20%20%20%20%20%20%20%20%20%20%20%20Debitis%20esse%2C%20ea%20blanditiis%20iste%20enim%20iure%20at%20odit%20fugiat%20autem.%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CInput%20mt%3D%7B4%7D%20placeholder%3D%22Lorem%20ipsum%20dolor%20sit%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20colorScheme%3D%22blue%22%20mr%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Done%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22secondary%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Cancel%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Footer%3E%0A%20%20%20%20%20%20%20%20%3C%2FModal.Content%3E%0A%20%20%20%20%20%20%3C%2FModal%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Open%20Modal%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CModalComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(l.b)("h3",{id:"modal-sizes"},"Modal Sizes"),Object(l.b)("p",null,"You can pass ",Object(l.b)("inlineCode",{parentName:"p"},"size")," prop to NativeBase Modal , it can take ",Object(l.b)("inlineCode",{parentName:"p"},"xs")," , ",Object(l.b)("inlineCode",{parentName:"p"},"sm"),", ",Object(l.b)("inlineCode",{parentName:"p"},"md"),", ",Object(l.b)("inlineCode",{parentName:"p"},"lg"),", ",Object(l.b)("inlineCode",{parentName:"p"},"xl"),", ",Object(l.b)("inlineCode",{parentName:"p"},"full")," that maps to ",Object(l.b)("strong",{parentName:"p"},"40%"),", ",Object(l.b)("strong",{parentName:"p"},"48%"),", ",Object(l.b)("strong",{parentName:"p"},"60%"),", ",Object(l.b)("strong",{parentName:"p"},"75%"),", ",Object(l.b)("strong",{parentName:"p"},"90%")," and ",Object(l.b)("strong",{parentName:"p"},"100%")," respectively , or a string or a numerical width of the Modal."),Object(l.b)("div",{className:"snack-player","data-snack-name":"Modal Sizes","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Modal%2C%0A%20%20Button%2C%0A%20%20Center%2C%0A%20%20Input%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20ModalComponent()%20%7B%0A%20%20const%20%5BmodalVisible%2C%20setModalVisible%5D%20%3D%20React.useState(false)%3B%0A%20%20const%20%5Bsize%2C%20setSize%5D%20%3D%20React.useState('md')%3B%0A%0A%20%20const%20handleSizeClick%20%3D%20(newSize%3A%20string)%20%3D%3E%20%7B%0A%20%20%20%20setSize(newSize)%3B%0A%20%20%20%20setModalVisible(!modalVisible)%3B%0A%20%20%7D%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CModal%0A%20%20%20%20%20%20%20%20isCentered%0A%20%20%20%20%20%20%20%20isOpen%3D%7BmodalVisible%7D%0A%20%20%20%20%20%20%20%20onClose%3D%7BsetModalVisible%7D%0A%20%20%20%20%20%20%20%20size%3D%7Bsize%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CModal.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Header%20_text%3D%7B%7B%20fontSize%3A%20'4xl'%2C%20fontWeight%3A%20'bold'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Hello%20World%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%20consectetur%20adipisicing%20elit.%20Quos%20quasi%0A%20%20%20%20%20%20%20%20%20%20%20%20cupiditate%20expedita%2C%20ipsa%20delectus!%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CInput%20mt%3D%7B4%7D%20placeholder%3D%22Lorem%20ipsum%20dolor%20sit%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20colorScheme%3D%22blue%22%20mr%3D%7B1%7D%20mb%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Save%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22secondary%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Close%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Footer%3E%0A%20%20%20%20%20%20%20%20%3C%2FModal.Content%3E%0A%20%20%20%20%20%20%3C%2FModal%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20handleSizeClick('xs')%7D%0A%20%20%20%20%20%20%20%20%20%20key%3D%7B'xs'%7D%0A%20%20%20%20%20%20%20%20%20%20m%3D%7B4%7D%0A%20%20%20%20%20%20%20%20%3E%7B%60Open%20%24%7B'xs'%7D%20Modal%60%7D%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20handleSizeClick('sm')%7D%0A%20%20%20%20%20%20%20%20%20%20key%3D%7B'sm'%7D%0A%20%20%20%20%20%20%20%20%20%20m%3D%7B4%7D%0A%20%20%20%20%20%20%20%20%3E%7B%60Open%20%24%7B'sm'%7D%20Modal%60%7D%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20handleSizeClick('md')%7D%0A%20%20%20%20%20%20%20%20%20%20key%3D%7B'md'%7D%0A%20%20%20%20%20%20%20%20%20%20m%3D%7B4%7D%0A%20%20%20%20%20%20%20%20%3E%7B%60Open%20%24%7B'md'%7D%20Modal%60%7D%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20handleSizeClick('lg')%7D%0A%20%20%20%20%20%20%20%20%20%20key%3D%7B'lg'%7D%0A%20%20%20%20%20%20%20%20%20%20m%3D%7B4%7D%0A%20%20%20%20%20%20%20%20%3E%7B%60Open%20%24%7B'lg'%7D%20Modal%60%7D%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20handleSizeClick('xl')%7D%0A%20%20%20%20%20%20%20%20%20%20key%3D%7B'xl'%7D%0A%20%20%20%20%20%20%20%20%20%20m%3D%7B4%7D%0A%20%20%20%20%20%20%20%20%3E%7B%60Open%20%24%7B'xl'%7D%20Modal%60%7D%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20handleSizeClick('full')%7D%0A%20%20%20%20%20%20%20%20%20%20key%3D%7B'full'%7D%0A%20%20%20%20%20%20%20%20%20%20m%3D%7B4%7D%0A%20%20%20%20%20%20%20%20%3E%7B%60Open%20%24%7B'full'%7D%20Modal%60%7D%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CModalComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(l.b)("h3",{id:"intialfocusref-and-finalfocusref-example"},"intialFocusRef and finalFocusRef Example"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Modal Refs","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Modal%2C%0A%20%20Button%2C%0A%20%20Center%2C%0A%20%20Input%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20ModalComponent%20()%20%7B%0A%20%20const%20%5BmodalVisible%2C%20setModalVisible%5D%20%3D%20React.useState(false)%3B%0A%20%20const%20initialRef%20%3D%20React.useRef(null)%3B%0A%20%20const%20finalRef%20%3D%20React.useRef(null)%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CModal%0A%20%20%20%20%20%20%20%20isCentered%0A%20%20%20%20%20%20%20%20isOpen%3D%7BmodalVisible%7D%0A%20%20%20%20%20%20%20%20onClose%3D%7BsetModalVisible%7D%0A%20%20%20%20%20%20%20%20initialFocusRef%3D%7BinitialRef%7D%0A%20%20%20%20%20%20%20%20finalFocusRef%3D%7BfinalRef%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CModal.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Header%20_text%3D%7B%7B%20fontSize%3A%20'4xl'%2C%20fontWeight%3A%20'bold'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Hello%20World%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%20consectetur%20adipisicing%20elit.%20Quos%20quasi%0A%20%20%20%20%20%20%20%20%20%20%20%20cupiditate%20expedita%2C%20ipsa%20corporis%20officia%20totam%20similique%20delectus!%0A%20%20%20%20%20%20%20%20%20%20%20%20Debitis%20esse%2C%20ea%20blanditiis%20iste%20enim%20iure%20at%20odit%20fugiat%20autem.%0A%20%20%20%20%20%20%20%20%20%20%20%20Accusamus%3F%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CInput%20mt%3D%7B4%7D%20ref%3D%7BinitialRef%7D%20placeholder%3D%22First%20name%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20colorScheme%3D%22blue%22%20mr%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Save%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22secondary%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Close%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Footer%3E%0A%20%20%20%20%20%20%20%20%3C%2FModal.Content%3E%0A%20%20%20%20%20%20%3C%2FModal%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Open%20Modal%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CInput%20mt%3D%7B4%7D%20ref%3D%7BfinalRef%7D%20placeholder%3D%22I'll%20receive%20focus%20on%20close%22%20%2F%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CModalComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(l.b)("h3",{id:"modal-with-avoidkeyboard"},"Modal with avoidKeyboard"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Modal avoidKeyboard","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Modal%2C%0A%20%20Button%2C%0A%20%20Center%2C%0A%20%20Input%2C%0A%20%20VStack%2C%0A%20%20Text%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20ModalComponent%20()%20%7B%0A%20%20const%20%5BmodalVisible%2C%20setModalVisible%5D%20%3D%20React.useState(false)%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CModal%0A%20%20%20%20%20%20%20%20isCentered%0A%20%20%20%20%20%20%20%20isOpen%3D%7BmodalVisible%7D%0A%20%20%20%20%20%20%20%20onClose%3D%7BsetModalVisible%7D%0A%20%20%20%20%20%20%20%20avoidKeyboard%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CModal.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Header%20_text%3D%7B%7B%20fontSize%3A%20'4xl'%2C%20fontWeight%3A%20'bold'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Hello%20World%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%20consectetur%20adipisicing%20elit.%20Quos%20quasi%0A%20%20%20%20%20%20%20%20%20%20%20%20cupiditate%20expedita%2C%20ipsa%20corporis%20officia%20totam%20similique%20delectus!%0A%20%20%20%20%20%20%20%20%20%20%20%20Debitis%20esse%2C%20ea%20blanditiis%20iste%20enim%20iure%20at%20odit%20fugiat%20autem.%0A%20%20%20%20%20%20%20%20%20%20%20%20Accusamus%3F%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CInput%20mt%3D%7B4%7D%20placeholder%3D%22Lorem%20ipsum%20dolor%20sit%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20colorScheme%3D%22blue%22%20mr%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Save%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22secondary%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Close%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Footer%3E%0A%20%20%20%20%20%20%20%20%3C%2FModal.Content%3E%0A%20%20%20%20%20%20%3C%2FModal%3E%0A%20%20%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Open%20Modal%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%20%20Open%20modal%20and%20focus%20on%20the%20input%20element%20to%20see%20the%20effect.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CModalComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(l.b)("br",null),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Tip")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"If you want a specifically aligned Modal, pass ",Object(l.b)("inlineCode",{parentName:"p"},"justifyContent")," and ",Object(l.b)("inlineCode",{parentName:"p"},"alignItems")," to Modal."))),Object(l.b)("h2",{id:"accessibility"},"Accessibility"),Object(l.b)("p",null,"Uses React Native ARIA ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://react-native-aria.geekyants.com/docs/FocusScope"}),"@react-native-aria/focus")," which follows the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal"}),"Dialog Modal WAI-ARIA design pattern"),"."),Object(l.b)("h3",{id:"keyboard-interactions"},"Keyboard Interactions"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Tab")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Moves focus to the next tabbable element inside the dialog. If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Shift")," + ",Object(l.b)("inlineCode",{parentName:"td"},"Tab")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Moves focus to the previous tabbable element inside the dialog. If focus is on the first tabbable element inside the dialog, moves focus to the last tabbable element inside the dialog.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Escape")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Closes the dialog")))),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("h3",{id:"modal"},"Modal"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isOpen"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the modal will open."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onClose"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback invoked to close the modal."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"motionPreset"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"fade"),", ",Object(l.b)("inlineCode",{parentName:"td"},"none"),", ",Object(l.b)("inlineCode",{parentName:"td"},"slide")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The default animation or transition to apply to the modal."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"initialFocusRef"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"React.ref"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The least destructive action to get focus when dialog is open."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"finalFocusRef"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"React.ref"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The least destructive action to get focus when dialog is closed. (ios only)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"xs"),", ",Object(l.b)("inlineCode",{parentName:"td"},"sm"),",",Object(l.b)("inlineCode",{parentName:"td"},"md"),",",Object(l.b)("inlineCode",{parentName:"td"},"lg"),",",Object(l.b)("inlineCode",{parentName:"td"},"xl"),",",Object(l.b)("inlineCode",{parentName:"td"},"full"),", number, string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The content of the modal."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"closeOnOverlayClick"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the modal will close when the overlay is clicked."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The top-level id to use for the modal and it's sub-components."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"avoidKeyboard"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, Modal will avoid keyboard to overlap."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"closeOnOverlayClick"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, clicking on overlay will close the modal."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"overlayVisible"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"To set the visibility the overlay."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"overlayColor"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"To set the color of overlay."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isKeyboardDismissable"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If false, modal cannot be closed using Escape key on web."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accessibilityLabel"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"To set label for the modal, this will be announced by screenreader"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h3",{id:"children-components"},"Children components"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Modal.Header"),",\xa0",Object(l.b)("inlineCode",{parentName:"li"},"Modal.Footer"),"\xa0and\xa0",Object(l.b)("inlineCode",{parentName:"li"},"Modal.Body"),"\xa0composes the\xa0",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.36/box"}),Object(l.b)("inlineCode",{parentName:"a"},"Box")),"\xa0component."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Modal.CloseButton"),"\xa0composes the\xa0",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.36/closeButton"}),Object(l.b)("inlineCode",{parentName:"a"},"CloseButton")),".")))}b.isMDXComponent=!0},733:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=o.a.createContext({}),b=function(e){var t=o.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=b(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=b(a),m=n,u=s["".concat(i,".").concat(m)]||s[m]||p[m]||l;return a?o.a.createElement(u,r(r({ref:t},d),{},{components:a})):o.a.createElement(u,r({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var d=2;d<l;d++)i[d]=a[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);