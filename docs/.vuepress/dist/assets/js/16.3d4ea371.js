(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{212:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication","aria-hidden":"true"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),s("p",[t._v("Let's start with authentication, even if this subject seems to be non Sharp related: its is, actually, and without a bit of configuration nothing will work, because Sharp can't be used as a guest.")]),t._v(" "),s("p",[t._v("Sharp uses the standard Laravel authentication.")]),t._v(" "),s("h2",{attrs:{id:"configure-user-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-user-attributes","aria-hidden":"true"}},[t._v("#")]),t._v(" Configure user attributes")]),t._v(" "),s("p",[t._v("The Sharp login form asks for a login and a password field; to handle the authentication, Sharp has to know what attributes it must test in your User model. Defaults are "),s("code",{staticClass:"inline"},[t._v("email")]),t._v(" and "),s("code",{staticClass:"inline"},[t._v("password")]),t._v(", and can be overriden in the Sharp config:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in config/sharp.php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"auth"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"login_attribute"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"login"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"password_attribute"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"pwd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"display_attribute"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("The third attribute, "),s("code",{staticClass:"inline"},[t._v("display_attribute")]),t._v(", is used to display the user name in the Sharp UI. Default is "),s("code",{staticClass:"inline"},[t._v("name")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"custom-guard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-guard","aria-hidden":"true"}},[t._v("#")]),t._v(" Custom guard")]),t._v(" "),s("p",[t._v("It's very likely that you don't want to authorize all users to access Sharp. You can hook into the the "),s("a",{attrs:{href:"https://laravel.com/docs/5.4/authentication#adding-custom-guards",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel custom guards"),s("OutboundLink")],1),t._v(" functionality, with one config key:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//in config/sharp.php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"auth"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"guard"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"sharp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v('Of course, this implies that you defined a "sharp" guard in '),s("code",{staticClass:"inline"},[t._v("config"),s("span",{staticClass:"token operator"},[t._v("/")]),t._v("auth"),s("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("php")]),t._v(", as detailed in the Laravel documentation.")]),t._v(" "),s("h2",{attrs:{id:"authentication-check"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication-check","aria-hidden":"true"}},[t._v("#")]),t._v(" Authentication check")]),t._v(" "),s("p",[t._v("If you want a simple way to authorize some users to access Sharp in a project where you have other users, you can define an auth check rather than using custom guard.")]),t._v(" "),s("p",[t._v("First write a class which implements "),s("code",{staticClass:"inline"},[t._v("Code16\\"),s("span",{staticClass:"token package"},[t._v("Sharp"),s("span",{staticClass:"token punctuation"},[t._v("\\")]),t._v("Auth"),s("span",{staticClass:"token punctuation"},[t._v("\\")]),t._v("SharpAuthenticationCheckHandler")])]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SharpCheckHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SharpAuthenticationCheckHandler")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @param $user\n     * @return bool\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bool\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sharp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Perform in the "),s("code",{staticClass:"inline"},[s("span",{staticClass:"token function"},[t._v("check")]),s("span",{staticClass:"token punctuation"},[t._v("(")]),s("span",{staticClass:"token punctuation"},[t._v(")")])]),t._v(" method any test you need to make on the authenticated user.")]),t._v(" "),s("p",[t._v("Finally enable this feature adding a config key:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//in config/sharp.php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"auth"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"check_handler"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Sharp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SharpCheckHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("And you are good to go.")])])},[],!1,null,null,null);a.default=e.exports}}]);