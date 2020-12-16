(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(130)),i={title:"GraphQL",slug:"/lists/graphql"},s={unversionedId:"11_Lists/3_GraphQL",id:"11_Lists/3_GraphQL",isDocsHomePage:!1,title:"GraphQL",description:"In the previous chapter, we define a search method in a DAO.",source:"@site/docs/11_Lists/3_GraphQL.md",slug:"/lists/graphql",permalink:"/symfony-boilerplate/docs/lists/graphql",editUrl:"https://github.com/thecodingmachine/symfony-boilerplate/docs/11_Lists/3_GraphQL.md",version:"current",sidebar:"docs",previous:{title:"Database",permalink:"/symfony-boilerplate/docs/lists/database"},next:{title:"Web Application",permalink:"/symfony-boilerplate/docs/lists/web-application"}},l=[],c={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In the previous chapter, we define a ",Object(o.b)("inlineCode",{parentName:"p"},"search")," method in a DAO."),Object(o.b)("p",null,"We now have to create a GraphQL query from it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/UseCase/User/GetUsers.php"',title:'"src/api/src/UseCase/User/GetUsers.php"'}),"/**\n * @return User[]|ResultIterator\n *\n * @Query\n * @Logged\n * @Security(\"is_granted('ROLE_ADMINISTRATOR')\")\n */\npublic function users(\n    ?string $search = null,\n    ?Role $role = null,\n    ?UsersSortBy $sortBy = null,\n    ?SortOrder $sortOrder = null\n): ResultIterator {\n    return $this->userDao->search(\n        $search,\n        $role,\n        $sortBy,\n        $sortOrder\n    );\n}\n")),Object(o.b)("p",null,"It's simple as that! \ud83d\ude09"),Object(o.b)("p",null,"Let's take a look at the GraphQL query for the ",Object(o.b)("inlineCode",{parentName:"p"},"GetUsers")," use case:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql",metastring:'title="GraphQL query"',title:'"GraphQL','query"':!0}),"query users($search: String, $role: Role, $sortBy: UsersSortBy, $sortOrder: SortOrder, $limit: Int!, $offset: Int!) {\n  users(search: $search, role: $role, sortBy: $sortBy, sortOrder: $sortOrder) {\n    items(limit: $limit, offset: $offset) {\n      id\n      firstName\n      lastName\n      email\n      locale\n      role\n    }\n    count\n  }\n}\n")),Object(o.b)("p",null,"Here we can see that:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The enums are valid GraphQL types."),Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"items")," property with the ",Object(o.b)("inlineCode",{parentName:"li"},"limit")," and ",Object(o.b)("inlineCode",{parentName:"li"},"offset")," arguments plus the ",Object(o.b)("inlineCode",{parentName:"li"},"count")," property come from the ",Object(o.b)("inlineCode",{parentName:"li"},"ResultIterator"),".")))}p.isMDXComponent=!0},130:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(f,s(s({ref:t},c),{},{components:r})):a.a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);