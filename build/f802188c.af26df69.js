(window.webpackJsonp=window.webpackJsonp||[]).push([[633],{704:function(n,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return l})),r.d(e,"metadata",(function(){return i})),r.d(e,"toc",(function(){return m})),r.d(e,"default",(function(){return u}));var o=r(3),t=r(7),a=(r(0),r(733)),l={id:"react-hook-forms",title:"React Hook Forms"},i={unversionedId:"react-hook-forms",id:"version-3.0.0-next.40/react-hook-forms",isDocsHomePage:!1,title:"React Hook Forms",description:"A Performant, flexible and extensible forms with easy-to-use validation. And below are some examples showing its integration with NativeBase.",source:"@site/versioned_docs/version-3.0.0-next.40/reactHooksForms.md",slug:"/react-hook-forms",permalink:"/react-hook-forms",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.40/reactHooksForms.md",version:"3.0.0-next.40",sidebar:"version-3.0.0-next.40/componentsSidebar",previous:{title:"Todo-List",permalink:"/todo-example"},next:{title:"NativeBase Formik UI",permalink:"/nativebase-formik-ui"}},m=[{value:"Usage",id:"usage",children:[]},{value:"Radio and Checkbox",id:"radio-and-checkbox",children:[]},{value:"Select",id:"select",children:[]},{value:"Slider",id:"slider",children:[]},{value:"Textarea",id:"textarea",children:[]},{value:"Switch",id:"switch",children:[]},{value:"NumberInput",id:"numberinput",children:[]},{value:"PinInput",id:"pininput",children:[]}],s={toc:m};function u(n){var e=n.components,r=Object(t.a)(n,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A Performant, flexible and extensible forms with easy-to-use validation. And below are some examples showing its integration with NativeBase."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n  VStack,\n  Input,\n  Button,\n  FormControl,\n  NativeBaseProvider,\n} from 'native-base';\nimport React from 'react';\nimport { useForm, Controller } from 'react-hook-form';\n\nfunction FormHookExample() {\n  const { control, handleSubmit, errors } = useForm();\n  const onSubmit = (data) => {\n    console.log('submiting with ', data);\n  };\n  return (\n    <VStack width='80%' space={4}>\n      <FormControl isRequired isInvalid={'firstName' in errors}>\n        <FormControl.Label>First Name</FormControl.Label>\n        <Controller\n          control={control}\n          render={({ onChange, onBlur, value }) => (\n            <Input\n              onBlur={onBlur}\n              placeholder='John'\n              onChangeText={(val) => onChange(val)}\n              value={value}\n            />\n          )}\n          name='firstName'\n          rules={{ required: 'Field is required', minLength: 3 }}\n          defaultValue=''\n        />\n        <FormControl.ErrorMessage>\n          {errors.firstName?.message}\n        </FormControl.ErrorMessage>\n      </FormControl>\n      <FormControl isInvalid={'lastName' in errors}>\n        <FormControl.Label>Last Name</FormControl.Label>\n        <Controller\n          control={control}\n          render={({ onChange, onBlur, value }) => (\n            <Input\n              onBlur={onBlur}\n              placeholder='Doe'\n              onChangeText={(val) => onChange(val)}\n              value={value}\n            />\n          )}\n          name='lastName'\n          defaultValue=''\n        />\n        <FormControl.ErrorMessage>\n          {errors.lastName?.message}\n        </FormControl.ErrorMessage>\n      </FormControl>\n      <FormControl isRequired isInvalid={'age' in errors}>\n        <FormControl.Label>Age</FormControl.Label>\n        <Controller\n          control={control}\n          render={({ onChange, onBlur, value }) => (\n            <Input\n              onBlur={onBlur}\n              placeholder='24'\n              onChangeText={(val) => onChange(val)}\n              value={value}\n            />\n          )}\n          name='age'\n          rules={{ min: 18, required: 'Age is required' }}\n          defaultValue=''\n        />\n        <FormControl.ErrorMessage>\n          {errors.age?.type === 'required'\n            ? errors.age?.message\n            : errors.age?.type === 'min' ?? 'Under age'}\n        </FormControl.ErrorMessage>\n      </FormControl>\n      <Button onPress={handleSubmit(onSubmit)} colorScheme='pink'>\n        Submit\n      </Button>\n    </VStack>\n  );\n}\nexport default function () {\n  return (\n    <NativeBaseProvider>\n      <FormHookExample />\n    </NativeBaseProvider>\n  );\n}\n")),Object(a.b)("h2",{id:"radio-and-checkbox"},"Radio and Checkbox"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n  VStack,\n  Button,\n  FormControl,\n  Radio,\n  Checkbox,\n  Text,\n  Icon,\n  NativeBaseProvider,\n} from 'native-base';\nimport React from 'react';\nimport { useForm, Controller } from 'react-hook-form';\n\nfunction FormHookCheckboxExample() {\n  const { control, handleSubmit, errors } = useForm();\n  const onSubmit = (data) => {\n    console.log('submiting with ', data);\n  };\n  return (\n    <VStack width='80%' space={4}>\n      <FormControl isRequired isInvalid={'hobbies' in errors}>\n        <FormControl.Label>Hobbies</FormControl.Label>\n        <Controller\n          control={control}\n          render={({ onChange }) => (\n            <Checkbox.Group\n              onChange={(values) => {\n                onChange(values);\n              }}\n              flexDirection='row'\n            >\n              <Checkbox\n                value='dart'\n                colorScheme='orange'\n                icon={<Icon name='bullseye' type='MaterialCommunityIcons' />}\n              >\n                <Text mx={2}>Darts</Text>\n              </Checkbox>\n              <Checkbox\n                value='movie'\n                colorScheme='dark'\n                icon={<Icon name='bat' type='MaterialCommunityIcons' />}\n              >\n                <Text mx={2}>Movie</Text>\n              </Checkbox>\n              <Checkbox\n                colorScheme='red'\n                value='camping'\n                icon={<Icon name='campfire' type='MaterialCommunityIcons' />}\n              >\n                <Text mx={2}>Camping</Text>\n              </Checkbox>\n              <Checkbox\n                value='chess'\n                colorScheme='blue'\n                icon={\n                  <Icon name='chess-knight' type='MaterialCommunityIcons' />\n                }\n              >\n                <Text mx={2}>Chess</Text>\n              </Checkbox>\n            </Checkbox.Group>\n          )}\n          rules={{ required: 'Atleast 1 hobbie needed' }}\n          name='hobbies'\n          defaultValue=''\n        />\n        <FormControl.ErrorMessage>\n          {errors.hobbies?.message}\n        </FormControl.ErrorMessage>\n      </FormControl>\n      <FormControl isRequired isInvalid={'gender' in errors}>\n        <FormControl.Label>Gender</FormControl.Label>\n        <Controller\n          control={control}\n          render={({ onChange }) => (\n            <Radio.Group\n              name='gender'\n              flexDirection='row'\n              onChange={(val) => onChange(val)}\n            >\n              <Radio value='male' colorScheme='blue'>\n                <Text mx={2}>Male</Text>\n              </Radio>\n              <Radio value='female' colorScheme='pink'>\n                <Text mx={2}>Female</Text>\n              </Radio>\n            </Radio.Group>\n          )}\n          name='gender'\n          rules={{ required: 'Gender is required' }}\n        />\n        <FormControl.ErrorMessage>\n          {errors.gender?.message}\n        </FormControl.ErrorMessage>\n      </FormControl>\n      <Button onPress={handleSubmit(onSubmit)} colorScheme='pink'>\n        Submit\n      </Button>\n    </VStack>\n  );\n}\nexport default function () {\n  return (\n    <NativeBaseProvider>\n      <FormHookCheckboxExample />\n    </NativeBaseProvider>\n  );\n}\n")),Object(a.b)("h2",{id:"select"},"Select"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n  VStack,\n  Button,\n  FormControl,\n  Select,\n  Icon,\n  NativeBaseProvider,\n} from 'native-base';\nimport React from 'react';\nimport { useForm, Controller } from 'react-hook-form';\n\nfunction FormHookSelectExample() {\n  const { control, handleSubmit, errors } = useForm();\n  const onSubmit = (data) => {\n    console.log('submiting with ', data);\n  };\n  return (\n    <VStack width='80%' space={4}>\n      <FormControl isRequired isInvalid={'language' in errors}>\n        <FormControl.Label>Fav language:</FormControl.Label>\n        <Controller\n          control={control}\n          render={({ onChange, value }) => (\n            <Select\n              placeholder='Pick language'\n              selectedValue={value}\n              width={150}\n              onValueChange={(itemValue: string) => {\n                onChange(itemValue);\n              }}\n              selectedItemBg={'teal.400'}\n              dropdownOpenIcon={\n                <Icon name='arrow-drop-up' type='MaterialIcons' size={6} />\n              }\n              dropdownCloseIcon={\n                <Icon name='arrow-drop-down' type='MaterialIcons' size={6} />\n              }\n            >\n              <Select.Item label='JavaScript' value='js' />\n              <Select.Item label='TypeScript' value='ts' />\n              <Select.Item label='Java' value='java' />\n            </Select>\n          )}\n          name='language'\n          rules={{ required: 'Field is required' }}\n          defaultValue='js'\n        />\n        <FormControl.ErrorMessage>\n          {errors.language?.message}\n        </FormControl.ErrorMessage>\n      </FormControl>\n      <Button onPress={handleSubmit(onSubmit)} colorScheme='pink'>\n        Submit\n      </Button>\n    </VStack>\n  );\n}\nexport default function () {\n  return (\n    <NativeBaseProvider>\n      <FormHookSelectExample />\n    </NativeBaseProvider>\n  );\n}\n")),Object(a.b)("h2",{id:"slider"},"Slider"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n  VStack,\n  Button,\n  FormControl,\n  Slider,\n  NativeBaseProvider,\n} from 'native-base';\nimport React from 'react';\nimport { useForm, Controller } from 'react-hook-form';\n\nfunction FormHookSliderExample() {\n  const { control, handleSubmit, errors } = useForm();\n  const onSubmit = (data) => {\n    console.log('submiting with ', data);\n  };\n  return (\n    <VStack width='80%' space={4}>\n      <FormControl isRequired isInvalid={'like' in errors}>\n        <FormControl.Label>Amount you like NativeBase</FormControl.Label>\n        <Controller\n          control={control}\n          render={({ onChange, value }) => (\n            <Slider onChange={(val) => onChange(val)} defaultValue={value}>\n              <Slider.Track>\n                <Slider.FilledTrack />\n              </Slider.Track>\n              <Slider.Thumb />\n            </Slider>\n          )}\n          name='like'\n          rules={{ required: 'Field is required', minLength: 3 }}\n          defaultValue={100}\n        />\n        <FormControl.ErrorMessage>\n          {errors.like?.message}\n        </FormControl.ErrorMessage>\n      </FormControl>\n      <Button onPress={handleSubmit(onSubmit)} colorScheme='pink'>\n        Submit\n      </Button>\n    </VStack>\n  );\n}\nexport default function () {\n  return (\n    <NativeBaseProvider>\n      <FormHookSliderExample />\n    </NativeBaseProvider>\n  );\n}\n")),Object(a.b)("h2",{id:"textarea"},"Textarea"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n  VStack,\n  Button,\n  FormControl,\n  TextArea,\n  NativeBaseProvider,\n} from 'native-base';\nimport React from 'react';\nimport { useForm, Controller } from 'react-hook-form';\n\nfunction FormHookTextareaExample() {\n  const { control, handleSubmit, errors } = useForm();\n  const onSubmit = (data) => {\n    console.log('submiting with ', data);\n  };\n  return (\n    <VStack width='80%' space={4}>\n      <FormControl isRequired isInvalid={'thought' in errors}>\n        <FormControl.Label>What do you think?</FormControl.Label>\n        <Controller\n          control={control}\n          render={({ onChange, value }) => (\n            <TextArea\n              placeholder='TextArea'\n              onChangeText={(val) => onChange(val)}\n              defaultValue={value}\n            />\n          )}\n          name='thought'\n          rules={{ required: 'Field is required', minLength: 3 }}\n          defaultValue='I love NativeBase.'\n        />\n        <FormControl.ErrorMessage>\n          {errors.thought?.message}\n        </FormControl.ErrorMessage>\n      </FormControl>\n      <Button onPress={handleSubmit(onSubmit)} colorScheme='pink'>\n        Submit\n      </Button>\n    </VStack>\n  );\n}\nexport default function () {\n  return (\n    <NativeBaseProvider>\n      <FormHookTextareaExample />\n    </NativeBaseProvider>\n  );\n}\n")),Object(a.b)("h2",{id:"switch"},"Switch"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n  VStack,\n  Button,\n  FormControl,\n  Switch,\n  NativeBaseProvider,\n} from 'native-base';\nimport React from 'react';\nimport { useForm, Controller } from 'react-hook-form';\n\nfunction FormHookSwitchExample() {\n  const { control, handleSubmit, errors } = useForm();\n  const onSubmit = (data) => {\n    console.log('submiting with ', data);\n  };\n  return (\n    <VStack width='80%' space={4}>\n      <FormControl isInvalid={'rememberMe' in errors}>\n        <FormControl.Label>Remenber me:</FormControl.Label>\n        <Controller\n          control={control}\n          render={({ onChange, value }) => (\n            <Switch\n              onToggle={(val: boolean) => onChange(val)}\n              isChecked={value}\n            />\n          )}\n          name='rememberMe'\n          defaultValue={true}\n        />\n        <FormControl.ErrorMessage>\n          {errors.rememberMe?.message}\n        </FormControl.ErrorMessage>\n      </FormControl>\n      <Button onPress={handleSubmit(onSubmit)} colorScheme='pink'>\n        Submit\n      </Button>\n    </VStack>\n  );\n}\nexport default function () {\n  return (\n    <NativeBaseProvider>\n      <FormHookSwitchExample />\n    </NativeBaseProvider>\n  );\n}\n")),Object(a.b)("h2",{id:"numberinput"},"NumberInput"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n  VStack,\n  Button,\n  FormControl,\n  NumberInput,\n  NumberInputField,\n  NumberInputStepper,\n  NumberIncrementStepper,\n  NumberDecrementStepper,\n  NativeBaseProvider,\n} from 'native-base';\nimport React from 'react';\nimport { useForm, Controller } from 'react-hook-form';\n\nfunction FormHookNumberInputExample() {\n  const { control, handleSubmit, errors } = useForm();\n  const onSubmit = (data) => {\n    console.log('submiting with ', data);\n  };\n  return (\n    <VStack width='80%' space={4}>\n      <FormControl isRequired isInvalid={'version' in errors}>\n        <FormControl.Label>Current Native Base Version:</FormControl.Label>\n        <Controller\n          control={control}\n          render={({ onChange, value }) => (\n            <NumberInput\n              onChange={(val: any) => onChange(val)}\n              defaultValue={value}\n            >\n              <NumberInputField />\n              <NumberInputStepper>\n                <NumberIncrementStepper />\n                <NumberDecrementStepper />\n              </NumberInputStepper>\n            </NumberInput>\n          )}\n          name='version'\n          rules={{ required: 'Field is required' }}\n          defaultValue={3}\n        />\n        <FormControl.ErrorMessage>\n          {errors.version?.message}\n        </FormControl.ErrorMessage>\n      </FormControl>\n      <Button onPress={handleSubmit(onSubmit)} colorScheme='pink'>\n        Submit\n      </Button>\n    </VStack>\n  );\n}\nexport default function () {\n  return (\n    <NativeBaseProvider>\n      <FormHookNumberInputExample />\n    </NativeBaseProvider>\n  );\n}\n")),Object(a.b)("h2",{id:"pininput"},"PinInput"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n  VStack,\n  Button,\n  FormControl,\n  PinInput,\n  PinInputField,\n  NativeBaseProvider,\n} from 'native-base';\nimport React from 'react';\nimport { useForm, Controller } from 'react-hook-form';\n\nfunction FormHookPinInputExample() {\n  const { control, handleSubmit, errors } = useForm();\n  const onSubmit = (data) => {\n    console.log('submiting with ', data);\n  };\n  return (\n    <VStack width='80%' space={4}>\n      <FormControl isRequired isInvalid={'otp' in errors}>\n        <FormControl.Label>OTP:</FormControl.Label>\n        <Controller\n          control={control}\n          render={({ onChange, value }) => (\n            <PinInput onChange={(val: any) => onChange(val)} value={value}>\n              <PinInputField />\n              <PinInputField />\n              <PinInputField />\n              <PinInputField />\n            </PinInput>\n          )}\n          name='otp'\n          rules={{ required: 'Field is required', minLength: 4, maxLength: 4 }}\n        />\n        <FormControl.ErrorMessage>\n          {errors.otp?.message}\n        </FormControl.ErrorMessage>\n      </FormControl>\n      <Button onPress={handleSubmit(onSubmit)} colorScheme='pink'>\n        Submit\n      </Button>\n    </VStack>\n  );\n}\nexport default function () {\n  return (\n    <NativeBaseProvider>\n      <FormHookPinInputExample />\n    </NativeBaseProvider>\n  );\n}\n")))}u.isMDXComponent=!0},733:function(n,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return p}));var o=r(0),t=r.n(o);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function l(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,o)}return r}function i(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function m(n,e){if(null==n)return{};var r,o,t=function(n,e){if(null==n)return{};var r,o,t={},a=Object.keys(n);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(t[r]=n[r]);return t}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var s=t.a.createContext({}),u=function(n){var e=t.a.useContext(s),r=e;return n&&(r="function"==typeof n?n(e):i(i({},e),n)),r},c=function(n){var e=u(n.components);return t.a.createElement(s.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.a.createElement(t.a.Fragment,{},e)}},b=t.a.forwardRef((function(n,e){var r=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,s=m(n,["components","mdxType","originalType","parentName"]),c=u(r),b=o,p=c["".concat(l,".").concat(b)]||c[b]||d[b]||a;return r?t.a.createElement(p,i(i({ref:e},s),{},{components:r})):t.a.createElement(p,i({ref:e},s))}));function p(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=r.length,l=new Array(a);l[0]=b;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=n,i.mdxType="string"==typeof n?n:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return t.a.createElement.apply(null,l)}return t.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);