(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{172:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),l=a(0),o=a.n(l),s=a(196),i=a.n(s),u=a(230),c=a.n(u),d=a(227),f=a.n(d),p=a(228),m=a.n(p),v=a(181),h=a(195),y=a(208),b=a(191);y.Auth.configure(h.a);var E=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t;a.setState(((t={})[e.target.id]=e.target.value,t))},a.handleCreate=function(e){if(e.preventDefault(),a.comparePasswords()){var t={username:a.state.username,password:a.state.password,attributes:{email:a.state.email,phone_number:a.state.phone}};y.Auth.signUp(t).then(function(e){alert("Check your email for Verification code"),Object(v.c)("/Verification",{state:{username:a.state.username,first_name:a.state.first_name,last_name:a.state.last_name,email:a.state.email,phone:a.state.phone}})},function(e){console.log(e),alert(e.message)})}else alert("Passwords do not match")},a.comparePasswords=function(){return a.state.password===a.state.repeat_pass},a.state={first_name:" ",last_name:" ",email:"",password:"",repeat_pass:"",username:"",phone:""},a}return r()(t,e),t.prototype.render=function(){return o.a.createElement(b.a,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"SignUp"},o.a.createElement("form",{onSubmit:this.handleCreate},o.a.createElement(f.a,{controlId:"first_name"},o.a.createElement(m.a,null,"First name"),o.a.createElement(c.a,{placeholder:"jon",autoFocus:!0,type:"text",onChange:this.handleChange})),o.a.createElement(f.a,{controlId:"last_name"},o.a.createElement(m.a,null,"Last name"),o.a.createElement(c.a,{placeholder:"doe",autoFocus:!0,type:"text",onChange:this.handleChange})),o.a.createElement(f.a,{controlId:"username"},o.a.createElement(m.a,null,"Username"),o.a.createElement(c.a,{placeholder:"jondoe1",autoFocus:!0,type:"text",onChange:this.handleChange})),o.a.createElement(f.a,{controlId:"email"},o.a.createElement(m.a,null,"email"),o.a.createElement(c.a,{placeholder:"john.doe@email.com",autoFocus:!0,type:"text",onChange:this.handleChange})),o.a.createElement(f.a,{controlId:"password"},o.a.createElement(m.a,null,"New Password"),o.a.createElement(c.a,{placeholder:"New Password",autoFocus:!0,type:"password",onChange:this.handleChange})),o.a.createElement(f.a,{controlId:"repeat_pass"},o.a.createElement(m.a,null,"Confirm Password"),o.a.createElement(c.a,{autoFocus:!0,type:"password",onChange:this.handleChange})),o.a.createElement(f.a,{controlId:"phone"},o.a.createElement(m.a,null,"Phone Number"),o.a.createElement(c.a,{placeholder:"+###########",autoFocus:!0,type:"tel",onChange:this.handleChange})),o.a.createElement(i.a,{type:"submit"},"Submit")))))},t}(l.Component);t.default=E},181:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),r=a.n(n),l=a(1),o=a.n(l),s=a(39),i=a.n(s);a.d(t,"a",function(){return i.a}),a.d(t,"c",function(){return s.navigate});a(184);var u=r.a.createContext({}),c=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},184:function(e,t,a){var n;e.exports=(n=a(189))&&n.default||n},185:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"c",function(){return l}),a.d(t,"b",function(){return o});var n=a(30),r=function(e){return function(t){t({type:n.a,payload:e})}},l=function(e){return function(t){t({type:n.c,payload:e})}},o=function(){return function(e){e({type:n.b})}}},186:function(e,t,a){"use strict";var n=a(188),r=a(10);t.__esModule=!0,t.useBootstrapPrefix=function(e,t){var a=(0,i.useContext)(u);return e||a.get(t)||t},t.createBootstrapComponent=function(e,t){"string"==typeof t&&(t={prefix:t});var a=e.prototype&&e.prototype.isReactComponent,n=t,r=n.prefix,o=n.forwardRefAs,c=void 0===o?a?"ref":"innerRef":o;return(0,s.default)(function(t,a){var n=(0,l.default)({},t);n[c]=a;var o=(0,i.useContext)(u);return i.default.createElement(e,(0,l.default)({},n,{bsPrefix:n.bsPrefix||o.get(r)||r}))},{displayName:"Bootstrap("+(e.displayName||e.name)+")"})},t.default=t.ThemeConsumer=void 0;var l=r(a(89)),o=r(a(9)),s=r(a(212)),i=n(a(0)),u=i.default.createContext(new Map),c=u.Consumer,d=u.Provider;t.ThemeConsumer=c;var f=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).prefixes=new Map,Object.keys(t.props.prefixes).forEach(function(e){t.prefixes.set(e,t.props.prefixes[e])}),t}return(0,o.default)(t,e),t.prototype.render=function(){return i.default.createElement(d,{value:this.prefixes},this.props.children)},t}(i.default.Component);t.default=f},188:function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}},189:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),l=a(1),o=a.n(l),s=a(66),i=a(3),u=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},191:function(e,t,a){"use strict";var n=a(192),r=a(0),l=a.n(r),o=a(1),s=a.n(o),i=a(181),u=function(){return l.a.createElement("footer",{className:"text-center"},l.a.createElement("div",{className:"footer-container"},l.a.createElement("p",null,"Designed by Ronuel Diaz | Jeter Gutierrez | Kelly Lu | Ramon Petgrave | Abraham B. Villaroman"),l.a.createElement("p",null,"© 2019 Universal Design Compass. All right reserved.")))},c=(a(211),a(309)),d=a(683),f=a(682),p=a(64),m=a(185),v=function(e){return l.a.createElement(d.a,{collapseOnSelect:!0,sticky:"top",expand:"md",bg:"dark",variant:"dark"},l.a.createElement(d.a.Brand,{variant:"light"},l.a.createElement(i.a,{id:"brand-link",to:e.isAuthenticated?"/Dashboard":"/",style:h.link}," ",e.siteTitle)),l.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(f.a,{className:"justify-content-end"},e.isAuthenticated?function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{className:"nav-link"},l.a.createElement(i.a,{style:h.link,activeStyle:h.linkActive,rel:"create",to:"/Create"},"Create Compass")),l.a.createElement(c.a,{className:"nav-link"},l.a.createElement(i.a,{style:h.link,activeStyle:h.linkActive,rel:"dashboard",to:"/Dashboard"},"Dashboard")),l.a.createElement(c.a,{className:"nav-link"},l.a.createElement(i.a,{style:h.link,activeStyle:h.linkActive,rel:"profile",to:"/Profile"},"Profile")),l.a.createElement(c.a,{className:"nav-link"},l.a.createElement(i.a,{style:h.link,rel:"logout",to:"/",onClick:function(){e.logOutUser(),Object(i.c)("/")}},"Logout")))}(e):l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{className:"nav-link"},l.a.createElement(i.a,{style:h.link,activeStyle:h.linkActive,rel:"about",to:"/About"},"About")),l.a.createElement(c.a,{className:"nav-link"},l.a.createElement(i.a,{style:h.link,activeStyle:h.linkActive,rel:"login",to:"/Login"},"Login"))))))},h={link:{color:"white",textDecoration:"none"},linkActive:{textDecoration:"underline"}};v.propsTypes={isAuthenticated:s.a.bool,authenticateUser:s.a.func};var y=Object(p.b)(function(e){return{isAuthenticated:e.state.isAuthenticated}},function(e){return{logOutUser:function(){return e(Object(m.b)())}}})(v),b=(a(161),function(e){var t=e.children;return l.a.createElement(i.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",null,t),l.a.createElement(u,null))},data:n})});b.propTypes={children:s.a.node.isRequired};t.a=b},192:function(e){e.exports={data:{site:{siteMetadata:{title:"Universal Design Compass"}}}}},195:function(e,t,a){"use strict";t.a={aws_project_region:"us-east-1",aws_appsync_graphqlEndpoint:"https://g5lm2htdtfbvvkr26z3emyptqe.appsync-api.us-east-1.amazonaws.com/graphql",aws_appsync_region:"us-east-1",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-fqakq3f5yvd65mvxdli26sfqgy",aws_cognito_identity_pool_id:"us-east-1:f2ed3e46-0b5b-44f7-b389-500b2eb6758a",aws_cognito_region:"us-east-1",aws_user_pools_id:"us-east-1_adKWetT9R",aws_user_pools_web_client_id:"56ige5rithr9dhhu5mso95nrsn",oauth:{}}},196:function(e,t,a){"use strict";var n=a(10);t.__esModule=!0,t.default=void 0;var r=n(a(89)),l=n(a(90)),o=n(a(178)),s=n(a(0)),i=a(186),u=n(a(201)),c=s.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.variant,c=e.size,d=e.active,f=e.className,p=e.block,m=e.type,v=e.as,h=(0,l.default)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=(0,i.useBootstrapPrefix)(a,"btn"),b=(0,o.default)(f,y,d&&"active",y+"-"+n,p&&y+"-block",c&&y+"-"+c);if(h.href)return s.default.createElement(u.default,(0,r.default)({},h,{as:v,innerRef:t,className:(0,o.default)(b,h.disabled&&"disabled")}));var E=v||"button";return t&&(h.ref=t),s.default.createElement(E,(0,r.default)({},h,{type:m,className:b}))});c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var d=c;t.default=d,e.exports=t.default},201:function(e,t,a){"use strict";var n=a(10);t.__esModule=!0,t.default=void 0;var r=n(a(89)),l=n(a(90)),o=n(a(40)),s=n(a(9)),i=n(a(0)),u=n(a(202));function c(e){return!e||"#"===e.trim()}var d=function(e){function t(t,a){var n;return(n=e.call(this,t,a)||this).handleClick=n.handleClick.bind((0,o.default)(n)),n.handleKeyDown=n.handleKeyDown.bind((0,o.default)(n)),n}(0,s.default)(t,e);var a=t.prototype;return a.handleClick=function(e){var t=this.props,a=t.disabled,n=t.href,r=t.onClick;(a||c(n))&&e.preventDefault(),a?e.stopPropagation():r&&r(e)},a.handleKeyDown=function(e){" "===e.key&&(e.preventDefault(),this.handleClick(e))},a.render=function(){var e=this.props,t=e.as,a=e.disabled,n=e.onKeyDown,o=e.innerRef,s=(0,l.default)(e,["as","disabled","onKeyDown","innerRef"]);return c(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),a&&(s.tabIndex=-1,s["aria-disabled"]=!0),o&&(s.ref=o),i.default.createElement(t,(0,r.default)({},s,{onClick:this.handleClick,onKeyDown:(0,u.default)(this.handleKeyDown,n)}))},t}(i.default.Component);d.defaultProps={as:"a"};var f=d;t.default=f,e.exports=t.default},202:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;var n=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(function(e){return null!=e}).reduce(function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}},null)};t.default=n,e.exports=t.default},203:function(e,t,a){"use strict";var n=a(10);t.__esModule=!0,t.default=void 0;var r=n(a(0)).default.createContext({controlId:void 0});t.default=r,e.exports=t.default},216:function(e,t){},217:function(e,t){},227:function(e,t,a){"use strict";var n=a(188),r=a(10);t.__esModule=!0,t.default=void 0;var l=r(a(89)),o=r(a(90)),s=r(a(178)),i=n(a(0)),u=r(a(203)),c=a(186),d=i.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.className,r=e.children,d=e.controlId,f=e.as,p=(0,o.default)(e,["bsPrefix","className","children","controlId","as"]);a=(0,c.useBootstrapPrefix)(a,"form-group");var m=(0,i.useMemo)(function(){return{controlId:d}},[d]);return i.default.createElement(u.default.Provider,{value:m},i.default.createElement(f,(0,l.default)({},p,{ref:t,className:(0,s.default)(n,a)}),r))});d.displayName="FormGroup",d.defaultProps={as:"div"};var f=d;t.default=f,e.exports=t.default},228:function(e,t,a){"use strict";var n=a(188),r=a(10);t.__esModule=!0,t.default=void 0;var l=r(a(89)),o=r(a(90)),s=r(a(178)),i=n(a(0)),u=(r(a(199)),r(a(229))),c=r(a(203)),d=a(186),f=i.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.column,r=e.srOnly,f=e.className,p=e.htmlFor,m=(0,o.default)(e,["bsPrefix","column","srOnly","className","htmlFor"]),v=(0,i.useContext)(c.default).controlId;a=(0,d.useBootstrapPrefix)(a,"form-label");var h=(0,s.default)(f,a,r&&"sr-only",n&&"col-form-label");return n?i.default.createElement(u.default,(0,l.default)({},m,{className:h,as:"label"})):i.default.createElement("label",(0,l.default)({},m,{htmlFor:p||v,ref:t,className:h}))});f.displayName="FormLabel",f.defaultProps={column:!1,srOnly:!1};var p=f;t.default=p,e.exports=t.default},229:function(e,t,a){"use strict";var n=a(10);t.__esModule=!0,t.default=void 0;var r=n(a(89)),l=n(a(90)),o=n(a(178)),s=n(a(0)),i=a(186),u=["xl","lg","md","sm","xs"],c=s.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.className,c=e.as,d=(0,l.default)(e,["bsPrefix","className","as"]),f=(0,i.useBootstrapPrefix)(a,"col"),p=[],m=[];return u.forEach(function(e){var t,a,n,r=d[e];if(delete d[e],null!=r&&"object"==typeof r){var l=r.span;t=void 0===l||l,a=r.offset,n=r.order}else t=r;var o="xs"!==e?"-"+e:"";null!=t&&p.push(!0===t?""+f+o:""+f+o+"-"+t),null!=n&&m.push("order"+o+"-"+n),null!=a&&m.push("offset"+o+"-"+a)}),p.length||p.push(f),s.default.createElement(c,(0,r.default)({},d,{ref:t,className:o.default.apply(void 0,[n].concat(p,m))}))});c.displayName="Col",c.defaultProps={as:"div"};var d=c;t.default=d,e.exports=t.default},230:function(e,t,a){"use strict";var n=a(188),r=a(10);t.__esModule=!0,t.default=void 0;var l=r(a(89)),o=r(a(90)),s=r(a(178)),i=n(a(0)),u=(r(a(199)),r(a(231))),c=r(a(203)),d=a(186),f=i.default.forwardRef(function(e,t){var a,n,r=e.bsPrefix,u=e.type,f=e.size,p=e.id,m=e.className,v=e.isValid,h=e.isInvalid,y=e.plaintext,b=e.readOnly,E=e.as,g=(0,o.default)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),x=(0,i.useContext)(c.default).controlId;if(r=(0,d.useBootstrapPrefix)(r,"form-control"),y)(n={})[r+"-plaintext"]=!0,a=n;else if("file"===u){var _;(_={})[r+"-file"]=!0,a=_}else{var w;(w={})[r]=!0,w[r+"-"+f]=f,a=w}return i.default.createElement(E,(0,l.default)({},g,{type:u,ref:t,readOnly:b,id:p||x,className:(0,s.default)(m,a,v&&"is-valid",h&&"is-invalid")}))});f.displayName="FormControl",f.defaultProps={as:"input"},f.Feedback=u.default;var p=f;t.default=p,e.exports=t.default},231:function(e,t,a){"use strict";var n=a(10);t.__esModule=!0,t.default=void 0;var r=n(a(89)),l=n(a(90)),o=n(a(178)),s=n(a(0)),i=n(a(1)),u={type:i.default.string.isRequired,as:i.default.elementType},c=s.default.forwardRef(function(e,t){var a=e.as,n=e.className,i=e.type,u=(0,l.default)(e,["as","className","type"]);return s.default.createElement(a,(0,r.default)({},u,{ref:t,className:(0,o.default)(n,i&&i+"-feedback")}))});c.displayName="Feedback",c.propTypes=u,c.defaultProps={type:"valid",as:"div"};var d=c;t.default=d,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-sign-up-js-8b1250534cccb2a4935c.js.map