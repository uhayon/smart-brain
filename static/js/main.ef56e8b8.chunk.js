(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return c});var a=n(0),r=n.n(a).a.createContext({userLogged:!1,userData:{}}),o=r.Provider,c=r.Consumer},,,,,function(e,t,n){e.exports={inputContainer:"Input_inputContainer__3QDWD",inputError:"Input_inputError__1pt-9",errorIcon:"Input_errorIcon__McvBE",errorDescription:"Input_errorDescription__2Woyb"}},,,,,function(e,t,n){e.exports={menu:"UserMenu_menu__3TWLR",menuOpened:"UserMenu_menuOpened__Ur3yl",optionsContainer:"UserMenu_optionsContainer__3tyWP"}},function(e,t,n){e.exports={buttonGroup:"ButtonGroup_buttonGroup__uNnUp",buttonActive:"ButtonGroup_buttonActive__3B2UR"}},,function(e,t,n){e.exports={ratingStar:"Rating_ratingStar__L49Z1",starActive:"Rating_starActive__1mThw"}},function(e,t,n){e.exports={spinner:"Spinner_spinner__WCBsR",rotator:"Spinner_rotator__21TVv",path:"Spinner_path__1VCMZ",dash:"Spinner_dash__R0xpt",colors:"Spinner_colors__LxxDn"}},function(e,t,n){"use strict";var a=n(3),r=n(4),o=n(6),c=n(5),i=n(7),l=n(0),s=n.n(l),u=n(14),m=n(12),p=n(15),d=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={showPassword:!1},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showPassword,n=this.props,a=n.id,r=n.label,o=n.errorState,c=n.onInputChange,i=n.inputValue,l=n.errorMessage,d=n.password,h=n.onInputKeyPress;return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:a,className:"tl db fw6 lh-copy f6"},r),s.a.createElement("div",{className:"".concat(p.inputContainer," ").concat(o?p.inputError:""," ba hover-bg-light-silver")},s.a.createElement("input",{id:a,name:a,type:d&&!t?"password":"text",className:"white pa2 input-reset bn bg-transparent hover-black outline-0 w-100",onChange:c||function(){},value:i,onKeyPress:h||function(){}}),d?s.a.createElement(u.a,{icon:t?m.b:m.a,className:"f4 pr2 pointer hover-black",onClick:function(){return e.setState({showPassword:!t})}}):null,o&&s.a.createElement(u.a,{icon:m.d,className:"".concat(p.errorIcon," f4 pr2")})),o&&s.a.createElement("p",{className:p.errorDescription},l))}}]),t}(s.a.Component);t.a=d},,function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(24);t.a=function(){return r.a.createElement("svg",{className:o.spinner,width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("circle",{className:o.path,fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"}))}},,function(e,t,n){e.exports={option:"UserMenuOption_option__3LaOB"}},function(e,t,n){e.exports={modalContainer:"Modal_modalContainer__1sME3"}},function(e,t,n){e.exports={header:"Header_header__20vw1"}},,,function(e,t,n){e.exports=n(47)},,,,,,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),i=(n(39),n(40),n(16)),l=n(3),s=n(4),u=n(6),m=n(5),p=n(18),d=n(7),h=n(49),f=n(50),b=n(51),g=n(28),v=n.n(g),E=(n(41),n(10)),w=n(20),O=n(29),_=function(e){var t=e.divider,n=e.onOptionClick,a=e.label;return t?r.a.createElement("hr",{style:{width:"75%",margin:"0"}}):r.a.createElement("p",{className:"link dim black pa2 pointer white ma0 w-100 ".concat(O.option),onClick:n},a)},k=n(30),C=document.getElementById("modal-root"),y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).onModalClick=function(e){e.stopPropagation()},n.el=document.createElement("div"),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){C.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){C.removeChild(this.el)}},{key:"render",value:function(){var e=this.props.handleClose,t="function"===typeof e?e:function(){};return c.a.createPortal(r.a.createElement("div",{className:k.modalContainer,onClick:t},r.a.createElement("div",{className:"w-100 w-75-m w-50-l h-100 h-auto-m br3 flex flex-column justify-between items-center bg-purple pa3",onClick:this.onModalClick},this.props.children)),this.el)}}]),t}(r.a.Component),N=n(32),S=n(21),j=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.buttonsConfiguration,n=e.legend,a=e.onButtonClick,o=e.selectedButton;return r.a.createElement("fieldset",{className:"".concat(S.buttonGroup," tc ba b--white")},r.a.createElement("legend",null,n),t.map(function(e){return r.a.createElement("button",{key:e.id,className:"w-100 w-auto-m outline-0 f6 link dim ba ph3 pv2 mv2 dib bg-white purple shadow-5 ".concat(e.id===o?S.buttonActive:""),onClick:function(){return a(e.id)}},e.label)}))}}]),t}(r.a.Component),x=n(25),L=n(14),M=n(12),U=n(23),I=function(e){for(var t=e.totalStars,n=e.filledStars,a=e.onStarClick,o=e.label,c=[],i=function(e){c.push(r.a.createElement(L.a,{key:e,icon:M.c,onClick:function(){return a(e)},className:"mh1 pointer grow ".concat(U.ratingStar," ").concat(e<=n?U.starActive:"")}))},l=1;l<=t;l++)i(l);return r.a.createElement("fieldset",{className:"tc ba b--white"},r.a.createElement("legend",null,o),r.a.createElement("div",{className:"pv2"},c))},P=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleSaveProfile=function(){var e=n.state,t=(e.errorState,Object(N.a)(e,["errorState"]));fetch("".concat("http://localhost:3001","profile/").concat(n.props.user.id),{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token")||sessionStorage.getItem("token"))},body:JSON.stringify(t)}).then(function(e){if(e.ok)return e.json();throw Error()}).then(function(e){return n.props.setUserLogged(!0,e),n.props.handleCloseModal()}).catch(function(e){return n.setState({errorState:!0})})},n.state=n.getInitialState(),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getInitialState",value:function(){var e=this.props.user,t=e.rating,n=e.favouritedetectiontype;return{rating:t,age:e.age,favouritedetectiontype:n,errorState:!1}}},{key:"render",value:function(){var e=this,t=this.props,n=t.user,a=t.handleCloseModal,o=this.state,c=o.age,i=o.rating,l=o.favouritedetectiontype,s=o.errorState;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"https://robohash.org/".concat(n.username),className:"br-100 h4 w4 dib bg-light-purple-50 shadow-5",alt:"avatar"}),r.a.createElement("div",null,r.a.createElement("h1",{className:"white mv2 tc"},n.fullname),r.a.createElement("h4",{className:"white mv3"},"Images submitted: ".concat(n.entries)),r.a.createElement("p",{className:"white mv2 f6"},"Member since: ".concat(new Date(n.joined).toLocaleDateString()))),r.a.createElement("fieldset",{id:"user_profile",className:"w-75 white ba b--transparent ph0 mh0"},r.a.createElement("hr",null),r.a.createElement("div",{className:"mv4"},r.a.createElement(x.a,{id:"profile_age",label:"Age",onInputChange:function(t){var n=t.target.value,a=parseInt(n,10);e.setState({age:isNaN(a)?0:a})},inputValue:0===c?"":c})),r.a.createElement("div",{className:"mv4"},r.a.createElement(j,{selectedButton:l,onButtonClick:function(t){return e.setState({favouritedetectiontype:t})},legend:"Choose your favourite detection type",buttonsConfiguration:[{id:"celebrity",label:"Celebrities"},{id:"color",label:"Colors"},{id:"face",label:"Faces"},{id:"food",label:"Food"}]})),r.a.createElement("div",{className:"mv4"},r.a.createElement(I,{label:"How much do you like the application?",totalStars:5,filledStars:i,onStarClick:function(t){return e.setState({rating:t})}}))),r.a.createElement("p",{className:"mb4 mt0",style:{color:"red",fontWeight:"bold",display:s?"block":"none"}},"There was an error while updating your profile. Please try againg in a few moments"),r.a.createElement("div",{className:"flex justify-around w-100"},r.a.createElement("button",{className:"shadow-5 b ph3 pv2 button-reset ba b--white purple bg-white grow pointer f5 dib hover-bg-light-purple hover-white outline-0",onClick:this.handleSaveProfile},"Save"),r.a.createElement("button",{className:"b ph3 pv2 button-reset bn b--white white bg-transparent grow pointer f5 dib hover-white underline outline-0",onClick:a},"Cancel")))}}]),t}(r.a.Component),B=r.a.forwardRef(function(e,t){return r.a.createElement(E.a,null,function(t){var n=t.setUserLogged;return r.a.createElement(P,Object.assign({},e,{setUserLogged:n}))})}),D=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleMenuOpen=function(e){e.stopPropagation(),n.setState(function(e){return Object(i.a)({},e,{menuOpen:!e.menuOpen})})},n.setOpenedStatus=function(e){n.setState({menuOpen:e})},n.closeMenu=function(){n.setOpenedStatus(!1)},n.showProfileModal=function(){n.setState({modalOpen:!0})},n.state={menuOpen:!1,modalOpen:!1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.closeMenu)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.closeMenu)}},{key:"render",value:function(){var e=this,t=this.props,n=t.user,a=t.setUserLogged,o=this.state,c=o.menuOpen,i=o.modalOpen;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dib relative"},r.a.createElement("div",{className:"tc ma2 pointer",onClick:this.handleMenuOpen},r.a.createElement("img",{src:"https://robohash.org/".concat(n.username),className:"br-100 h3 w3 dib bg-light-purple-50",alt:"avatar"})),r.a.createElement("div",{className:"".concat(w.menu," ").concat(c?w.menuOpened:"")},r.a.createElement("div",{className:w.optionsContainer},r.a.createElement(_,{label:"View Profile",onOptionClick:this.showProfileModal}),r.a.createElement(_,{divider:!0}),r.a.createElement(_,{label:"Sign Out",onOptionClick:function(){return a(!1)}})))),i&&r.a.createElement(y,{handleClose:function(){return e.setState({modalOpen:!1})}},r.a.createElement(B,{user:n,handleCloseModal:function(){return e.setState({modalOpen:!1})}})))}}]),t}(r.a.Component),R=n(31),W=function(){return r.a.createElement(E.a,null,function(e){var t=e.userLogged,n=e.userData,a=e.setUserLogged;return r.a.createElement("header",{className:"bg-black-translucent"},t?r.a.createElement("nav",{className:R.header},r.a.createElement(D,{user:n,setUserLogged:a})):null)})},A=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",{className:"bg-light-purple pa2"},r.a.createElement("span",{className:"white"},"Copyright \xa9 ","".concat(2019===e?"":"2019 - ").concat(e)," by ",r.a.createElement("strong",null,r.a.createElement("i",null,"uRi"))))},F=n(27),G=function(e){var t=e.children;return r.a.createElement(a.Suspense,{fallback:r.a.createElement(F.a,null)},t)},T=Object(a.lazy)(function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,108))}),V=Object(a.lazy)(function(){return n.e(5).then(n.bind(null,106))}),z=Object(a.lazy)(function(){return n.e(6).then(n.bind(null,107))}),J={particles:{number:{value:30,density:{enable:!0,value_area:400}}}},H=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).setUserLogged=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.setState({userLogged:t,userData:n})},e.checkRoute=function(e,t,n,a){return a?r.a.createElement(G,null,r.a.createElement(t,e)):r.a.createElement(h.a,{to:{pathname:n}})},e.state={userLogged:!1,userData:{}},e.setUserLogged=e.setUserLogged.bind(Object(p.a)(e)),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.userLogged;return r.a.createElement("div",{className:"App"},r.a.createElement(v.a,{className:"particles",params:J}),r.a.createElement(E.b,{value:Object(i.a)({},this.state,{setUserLogged:this.setUserLogged})},r.a.createElement(W,null),r.a.createElement(f.a,{basename:"http://localhost:3001"},r.a.createElement("div",{className:"h-100 overflow-y-auto"},r.a.createElement(b.a,{exact:!0,path:"/home",render:function(n){return e.checkRoute(n,T,"/signin",t)}}),r.a.createElement(b.a,{exact:!0,path:"/signin",render:function(n){return e.checkRoute(n,V,"/home",!t)}}),r.a.createElement(b.a,{exact:!0,path:"/signup",render:function(n){return e.checkRoute(n,z,"/home",!t)}}),r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement(h.a,{to:{pathname:"".concat(t?"/home":"/signin")}})}})))),r.a.createElement(A,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[34,1,3]]]);
//# sourceMappingURL=main.ef56e8b8.chunk.js.map