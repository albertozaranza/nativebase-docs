(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{338:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),i=(a(0),a(733)),s={id:"circularProgress",title:"CircularProgress"},c={unversionedId:"circularProgress",id:"version-3.0.0-next.37/circularProgress",isDocsHomePage:!1,title:"CircularProgress",description:"Circular Progress is used to indicate the progress for determinate and indeterminate processes.",source:"@site/versioned_docs/version-3.0.0-next.37/circularProgress.md",slug:"/circularProgress",permalink:"/3.0.0-next.37/circularProgress",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/circularProgress.md",version:"3.0.0-next.37"},o=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Usage",id:"usage",children:[]},{value:"CircularProgress Sizes",id:"circularprogress-sizes",children:[]},{value:"CircularProgress Thickness",id:"circularprogress-thickness",children:[]},{value:"CircularProgress Color",id:"circularprogress-color",children:[]},{value:"CircularProgress TrackColor",id:"circularprogress-trackcolor",children:[]},{value:"CircularProgress Min and Max",id:"circularprogress-min-and-max",children:[]},{value:"CircularProgress Label",id:"circularprogress-label",children:[]},{value:"Indeterminate Progress",id:"indeterminate-progress",children:[]}]},{value:"Props",id:"props",children:[]},{value:"Accessibility",id:"accessibility",children:[]}],l={toc:o};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Circular Progress is used to indicate the progress for determinate and indeterminate processes."),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { CircularProgress } from 'native-base';\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Heading%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EDefault%20CircularProgress%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B80%7D%20%2F%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"circularprogress-sizes"},"CircularProgress Sizes"),Object(i.b)("p",null,"You can add a size prop to the CircularProgress to add a custom size or choose from defined sizes."),Object(i.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Sizes","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Heading%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EChanging%20the%20size%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B60%7D%20size%3D%7B60%7D%20%2F%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"circularprogress-thickness"},"CircularProgress Thickness"),Object(i.b)("p",null,"You can add the thickness prop to update the thickness of the progress ring."),Object(i.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Thickness","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Heading%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EChanging%20the%20thickness%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B70%7D%20thickness%3D%7B10%7D%20%2F%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"circularprogress-color"},"CircularProgress Color"),Object(i.b)("p",null,"You can add the color prop to apply any color that the theme contains."),Object(i.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Color","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Heading%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EChanging%20the%20color%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B50%7D%20color%3D%22red.200%22%20%2F%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"circularprogress-trackcolor"},"CircularProgress TrackColor"),Object(i.b)("p",null,"You can add the trackColor prop to apply any color that the theme contains to the CircularProgress track."),Object(i.b)("div",{className:"snack-player","data-snack-name":"CircularProgress TrackColor","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Heading%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%3EChanging%20the%20Track%20Color%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B50%7D%20trackColor%3D%22blue.100%22%20%2F%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"circularprogress-min-and-max"},"CircularProgress Min and Max"),Object(i.b)("p",null,"You can add min and max props to manage what is the start and end value of your CircularProgress."),Object(i.b)("div",{className:"snack-player","data-snack-name":"CircularProgress min max","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Heading%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%3EMin%20and%20Max%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%0A%20%20%20%20%20%20%20%20mt%3D%7B6%7D%0A%20%20%20%20%20%20%20%20value%3D%7B550%7D%0A%20%20%20%20%20%20%20%20max%3D%7B1000%7D%0A%20%20%20%20%20%20%20%20min%3D%7B100%7D%0A%20%20%20%20%20%20%20%20size%3D%7B100%7D%0A%20%20%20%20%20%20%20%20color%3D%22red.200%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20550%25%0A%20%20%20%20%20%20%3C%2FCircularProgress%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"circularprogress-label"},"CircularProgress Label"),Object(i.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Label","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Heading%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%2C%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EAdding%20label%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%0A%20%20%20%20%20%20%20%20mt%3D%7B6%7D%0A%20%20%20%20%20%20%20%20value%3D%7B45%7D%0A%20%20%20%20%20%20%20%20size%3D%7B60%7D%0A%20%20%20%20%20%20%20%20color%3D%22red.200%22%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%20color%3A%20'blue.400'%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%2045%25%0A%20%20%20%20%20%20%3C%2FCircularProgress%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"indeterminate-progress"},"Indeterminate Progress"),Object(i.b)("p",null,"Setting the progress to indeterminate means that the value can't be determined upfront. Pass the isIndeterminate prop to activate this state."),Object(i.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Indeterminate Progress","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Center%2C%0A%20%20Heading%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EIndeterminate%20Progress%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B50%7D%20isIndeterminate%20color%3D%22red.200%22%3E%0A%20%20%20%20%20%20%20%2050%25%0A%20%20%20%20%20%20%3C%2FCircularProgress%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"size"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"4xl"),",",Object(i.b)("inlineCode",{parentName:"td"},"3xl"),",",Object(i.b)("inlineCode",{parentName:"td"},"2xl"),", ",Object(i.b)("inlineCode",{parentName:"td"},"xl"),",",Object(i.b)("inlineCode",{parentName:"td"},"lg"),", ",Object(i.b)("inlineCode",{parentName:"td"},"md"),", ",Object(i.b)("inlineCode",{parentName:"td"},"sm"),", ",Object(i.b)("inlineCode",{parentName:"td"},"xs"),", number"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The size of circular progress."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"lg"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"max"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Maximum value defining 100% progress made (must be higher than 'min')"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"min"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Minimum value defining 'no progress' (must be lower than 'max')"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"value"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Current progress (must be between min/max)"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"isIndeterminate"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Puts the component into indeterminate state. When passed, the 'value' prop is ignored"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"thickness"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number, string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The thickness of the progress indicator"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"trackColor"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The color name of the progress track. Use a color key from the theme object"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"color"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The color of the progress indicator. Use a color key from the theme object"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"_","text"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/3.0.0-next.37/text#props"}),"TextProps")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Text styling for Label Text."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(i.b)("h2",{id:"accessibility"},"Accessibility"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"On web and mobile, Progress has ",Object(i.b)("inlineCode",{parentName:"li"},"role")," set to ",Object(i.b)("inlineCode",{parentName:"li"},"progressbar")," to denote that it is a progress bar."),Object(i.b)("li",{parentName:"ul"},"On web, ",Object(i.b)("inlineCode",{parentName:"li"},"aria-valuenow"),", ",Object(i.b)("inlineCode",{parentName:"li"},"aria-valuemin")," and ",Object(i.b)("inlineCode",{parentName:"li"},"aria-valuemax")," to ensure the progress percent is visible to screen readers."),Object(i.b)("li",{parentName:"ul"},"On mobile, ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://reactnative.dev/docs/accessibility#accessibilityvalue"}),"accessibilityValue")," is used to ensure it's announced by Talkback and VoiceOver.")))}d.isMDXComponent=!0},733:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=d(a),u=r,m=b["".concat(s,".").concat(u)]||b[u]||p[u]||i;return a?n.a.createElement(m,c(c({ref:t},l),{},{components:a})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<i;l++)s[l]=a[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);