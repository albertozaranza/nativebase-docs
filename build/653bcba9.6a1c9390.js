(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{360:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(733)),s={id:"list",title:"List"},o={unversionedId:"list",id:"version-3.0.0-next.36/list",isDocsHomePage:!1,title:"List",description:"List is used to display list items.",source:"@site/versioned_docs/version-3.0.0-next.36/list.md",slug:"/list",permalink:"/3.0.0-next.36/list",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/list.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"KBD",permalink:"/3.0.0-next.36/Kbd"},next:{title:"Stat",permalink:"/3.0.0-next.36/stat"}},c=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Ordered List",id:"ordered-list",children:[]},{value:"Unordered List",id:"unordered-list",children:[]},{value:"Styled List",id:"styled-list",children:[]},{value:"List with ListIcon",id:"list-with-listicon",children:[]},{value:"Virtualized List",id:"virtualized-list",children:[]}]},{value:"Props",id:"props",children:[{value:"List",id:"list",children:[]}]}],d={toc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"List is used to display list items."),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.36/box"}),Object(i.b)("inlineCode",{parentName:"a"},"Box")),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.36/VStack"}),Object(i.b)("inlineCode",{parentName:"a"},"VStack")),".")),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { List } from 'native-base';\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"basic"},"Basic"),Object(i.b)("div",{className:"snack-player","data-snack-name":"List Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20List%2C%20Heading%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ListComponent%20()%20%7B%0A%09return%20(%0A%20%20%20%20%3CBox%20w%3D%2250%25%22%3E%0A%20%20%20%20%20%20%3CHeading%20fontSize%3D%7B24%7D%3EPlain%20List%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CList%20spacing%3D%7B2%7D%20my%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EInferno%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EMirage%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EDust%202%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3ENuke%3C%2FList.Item%3E%0A%20%20%20%20%20%20%3C%2FList%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CListComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"ordered-list"},"Ordered List"),Object(i.b)("div",{className:"snack-player","data-snack-name":"OrderedList","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20List%2C%20Heading%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ListComponent%20()%20%7B%0A%09return%20(%0A%20%20%20%20%3CBox%20w%3D%2250%25%22%3E%0A%20%20%20%20%20%20%3CHeading%20fontSize%3D%7B24%7D%3EOrdered%20List%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CList.Ordered%20my%3D%7B2%7D%20spacing%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EInferno%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EMirage%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EDust%202%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3ENuke%3C%2FList.Item%3E%0A%20%20%20%20%20%20%3C%2FList.Ordered%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CListComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"unordered-list"},"Unordered List"),Object(i.b)("div",{className:"snack-player","data-snack-name":"UnOrderedList","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20List%2C%20Heading%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ListComponent%20()%20%7B%0A%09return%20(%0A%20%20%20%20%3CBox%20w%3D%2250%25%22%3E%0A%20%20%20%20%20%20%3CHeading%20fontSize%3D%7B24%7D%3EUnordered%20List%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CList.Unordered%20my%3D%7B2%7D%20spacing%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EInferno%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EMirage%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EDust%202%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3ENuke%3C%2FList.Item%3E%0A%20%20%20%20%20%20%3C%2FList.Unordered%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CListComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"styled-list"},"Styled List"),Object(i.b)("div",{className:"snack-player","data-snack-name":"StyledList","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20List%2C%20Heading%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ListComponent%20()%20%7B%0A%09return%20(%0A%20%20%20%20%3CBox%20w%3D%2250%25%22%3E%0A%20%20%20%20%20%20%3CHeading%20fontSize%3D%7B24%7D%3EStyled%20List%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CList.Ordered%0A%20%20%20%20%20%20%20%20my%3D%7B2%7D%0A%20%20%20%20%20%20%20%20spacing%3D%7B2%7D%0A%20%20%20%20%20%20%20%20start%3D%7B11%7D%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%20color%3A%20'amber.600'%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EOcean's%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%20_text%3D%7B%7B%20color%3A%20'red.200'%20%7D%7D%3EOcean's%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%20_text%3D%7B%7B%20color%3A%20'teal.400'%2C%20fontWeight%3A%20'bold'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Ocean's%0A%20%20%20%20%20%20%20%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%3C%2FList.Ordered%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CListComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"list-with-listicon"},"List with ListIcon"),Object(i.b)("div",{className:"snack-player","data-snack-name":"ListWithIcon","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20List%2C%20Heading%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ListComponent%20()%20%7B%0A%09return%20(%0A%20%20%20%20%3CBox%20height%3D%2250%25%22%3E%0A%20%20%20%20%20%20%3CHeading%3EList%20with%20Icons%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CList%20mt%3D%7B2%7D%20fontSize%3D%7B24%7D%20spacing%3D%7B4%7D%20my%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CList.Icon%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22check-circle-outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22green.400%22%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22MaterialIcons%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20Server%20went%20up%0A%20%20%20%20%20%20%20%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CList.Icon%20name%3D%22cancel%22%20color%3D%22red.400%22%20type%3D%22MaterialIcons%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20Server%20went%20down%0A%20%20%20%20%20%20%20%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CList.Icon%20name%3D%22equalizer%22%20type%3D%22MaterialIcons%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20Graphs%20and%20stats%0A%20%20%20%20%20%20%20%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CList.Icon%20name%3D%22attach-file%22%20color%3D%22gray.400%22%20type%3D%22MaterialIcons%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20Attachments%0A%20%20%20%20%20%20%20%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%3C%2FList%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CListComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"virtualized-list"},"Virtualized List"),Object(i.b)("div",{className:"snack-player","data-snack-name":"VirtualizedList","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20VirtualizedList%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20List%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Aconst%20DATA%3A%20any%20%3D%20%5B%5D%3B%0A%0Aconst%20getItem%20%3D%20(_data%3A%20any%2C%20index%3A%20number)%20%3D%3E%20(%7B%0A%20%20id%3A%20Math.random().toString(12).substring(0)%2C%0A%20%20title%3A%20%60Item%20%24%7Bindex%20%2B%201%7D%60%2C%0A%7D)%3B%0A%0Aconst%20getItemCount%20%3D%20(_data%3A%20any)%20%3D%3E%20500%3B%0A%0Aconst%20Item%20%3D%20(%7B%20title%20%7D%3A%20any)%20%3D%3E%20(%0A%20%20%3CList.Item%0A%20%20%20%20bg%3D%22emerald.400%22%0A%20%20%20%20borderRadius%3D%22md%22%0A%20%20%20%20justifyContent%3D%22center%22%0A%20%20%20%20_text%3D%7B%7B%20fontSize%3A%20'2xl'%20%7D%7D%0A%20%20%20%20px%3D%7B4%7D%0A%20%20%20%20py%3D%7B2%7D%0A%20%20%20%20my%3D%7B2%7D%0A%20%20%3E%0A%20%20%20%20%7Btitle%7D%0A%20%20%3C%2FList.Item%3E%0A)%3B%0A%0Afunction%20ListComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVirtualizedList%0A%20%20%20%20%20%20data%3D%7BDATA%7D%0A%20%20%20%20%20%20initialNumToRender%3D%7B4%7D%0A%20%20%20%20%20%20renderItem%3D%7B(%7B%20item%20%7D)%20%3D%3E%20%3CItem%20title%3D%7Bitem.title%7D%20%2F%3E%7D%0A%20%20%20%20%20%20keyExtractor%3D%7B(item%3A%20any)%20%3D%3E%20item.key%7D%0A%20%20%20%20%20%20getItemCount%3D%7BgetItemCount%7D%0A%20%20%20%20%20%20getItem%3D%7BgetItem%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CListComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"list"},"List"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"spacing"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The space between each list item."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"start"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The starting number for Ol or List with ol/ordered prop."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"List and List.Item")," composes ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"/3.0.0-next.36/box"}),"Box")),", so all the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/3.0.0-next.36/box#props"}),Object(i.b)("inlineCode",{parentName:"a"},"Box Props"))," can be passed to it."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"List.Icon")," composes ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"/3.0.0-next.36/icon"}),"Icon")),", so all the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/3.0.0-next.36/icon#props"}),Object(i.b)("inlineCode",{parentName:"a"},"Icon Props"))," can be passed to it."))}l.isMDXComponent=!0},733:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return A}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(a),b=n,A=p["".concat(s,".").concat(b)]||p[b]||m[b]||i;return a?r.a.createElement(A,o(o({ref:t},d),{},{components:a})):r.a.createElement(A,o({ref:t},d))}));function A(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);