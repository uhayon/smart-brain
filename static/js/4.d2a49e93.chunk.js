(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{103:function(e,t,n){e.exports={form:"ImageLinkForm_form__39jrh",formInput:"ImageLinkForm_formInput__2eaPK",formContainer:"ImageLinkForm_formContainer__1kd5A"}},104:function(e){e.exports=[{value:"CELEBRITY_MODEL",text:"Celebrities",description:"Place the link of a picture and the magic brain will tell you which celibrities appear, where, and the probabilities of being them"},{value:"COLOR_MODEL",text:"Colors",description:"Place the link of a picture and the magic brain will tell you which colors appear, and an aproximated percentage of each one"},{value:"FACE_DETECT_MODEL",text:"Faces detection",description:"Place the link of a picture and the magic brain will tell you the faces that appear and where"},{value:"FOOD_MODEL",text:"Foods & ingredients",description:"Place the link of a picture and the magic brain will tell you the ingredients and the probability of each of them"}]},108:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(4),o=n(6),i=n(5),c=n(7),l=n(0),s=n.n(l),u=n(67),m=n.n(u),d=function(e){var t=e.onFormModelChange,n=e.selectedModel,a=e.models;return s.a.createElement("select",{name:"modelSelector",id:"model_selector",className:"bg-light-purple white",onChange:t,value:n.value},a.map(function(e,t){return s.a.createElement("option",{key:t,value:e.value},e.text)}))},f=n(103),h=function(e){var t=e.onFormInputChange,n=e.onImageSubmit,a=e.inputValue,r=e.onFormModelChange,o=e.selectedModel,i=e.models;return s.a.createElement("div",null,s.a.createElement("p",{className:"f3 white"},"This Magic Brain will detect what you want in your pictures. Give it a try."),s.a.createElement("div",{className:"flex-justify-center center"},s.a.createElement("div",{className:"pa4 br3 shadow-5 flex-justify-center center column ".concat(f.form)},s.a.createElement("div",{className:"".concat(f.formContainer," center"),style:{margin:"0"}},s.a.createElement(d,{onFormModelChange:r,selectedModel:o,models:i}),s.a.createElement("input",{className:"".concat(f.formInput," f4 pa2 w-70 flex-justify-center center input-reset ba b--white-10"),type:"text",onChange:t,value:a}),s.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-dark-gray b--white-10 bg-light-purple",onClick:n},"Detect")),s.a.createElement("span",{className:"white mt3 bg-black"},o.description))))},g=n(10),p=function(){return s.a.createElement(g.a,null,function(e){var t=e.userData,n=t.fullname,a=t.entries;return s.a.createElement("div",null,s.a.createElement("div",{className:"white f3"},"".concat(n,", your entries count is...")),s.a.createElement("div",{className:"white f1"},a))})},v=n(65),b=n(66),E=n(27),w=function(e){return document.querySelector('[data-reference="'.concat(e,'"]'))},y=function(e){var t=e.isSearching,n=e.references,a=e.selectedModel.value;return console.log(a),s.a.createElement("div",{style:{minWidth:"25%"}},s.a.createElement("ul",{className:"list pl0"},t?s.a.createElement(E.a,null):n.map(function(e){var t=e.description,n=e.key;return s.a.createElement("li",{style:"COLOR_MODEL"===a?{backgroundColor:n}:{},className:"".concat(v.referenceElement," pointer pa2 ttc"),onMouseOver:function(){return function(e){var t=w(e);t&&t.classList.add(b.boundingBoxHovered)}(n)},onMouseOut:function(){return function(e){var t=w(e);t&&t.classList.remove(b.boundingBoxHovered)}(n)},key:t,"data-reference":n},s.a.createElement("span",{style:"COLOR_MODEL"===a?{backgroundColor:"rgba(0, 0, 0, .75)",color:"#fff"}:{}},t))})))},C=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).resizeBoxes=function(){n.setState({resizeBoxes:!0})},n.calculateBoundingBoxVertices=function(e){var t=document.getElementById("inputimage"),n=Number(t.width),a=Number(t.height);return{leftCol:e.left_col*n,topRow:e.top_row*a,rightCol:n-e.right_col*n,bottomRow:a-e.bottom_row*a}},n.getReferenceListElement=function(e){return document.querySelector('li[data-reference="'.concat(e,'"]'))},n.highlightReference=function(e){var t=n.getReferenceListElement(e);t&&t.classList.add(v.hovered)},n.unhighlightReference=function(e){var t=n.getReferenceListElement(e);t&&t.classList.remove(v.hovered)},n.state={resizeBoxes:!1},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeBoxes)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeBoxes)}},{key:"render",value:function(){var e=this,t=this.props,n=t.image,a=t.references,r=t.selectedModel,o=t.isSearching;return s.a.createElement("div",{className:"".concat(b.container," ").concat(""===n.trim()?"dn":"flex"," justify-around center ma")},s.a.createElement("div",{className:"relative"},s.a.createElement("img",{id:"inputimage",style:{display:"".concat(""===n?"none":"block")},src:n,alt:"Recognize",width:"100%",height:"100%"}),a.map(function(t){var n=t.box,a=t.key,r={};if(n){var o=e.calculateBoundingBoxVertices(n),i=o.topRow,c=o.bottomRow,l=o.leftCol;r={top:i,right:o.rightCol,bottom:c,left:l}}return s.a.createElement("div",{"data-reference":a,key:a,className:b.boundingBox,style:r,onMouseEnter:function(){return e.highlightReference(a)},onMouseLeave:function(){return e.unhighlightReference(a)}})})),s.a.createElement(y,{references:a,selectedModel:r,isSearching:o}))}}]),t}(s.a.Component),_=n(104);m.a.CELEBRITY_MODEL="e466caa0619f444ab97497640cefc4dc";var x=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(o.a)(this,Object(i.a)(t).call(this))).onFormInputChange=function(t){e.setState({input:t.target.value})},e.onFormModelChange=function(t){e.setState({selectedModelValue:t.target.value,references:[]})},e.onImageSubmit=function(t,n){var a=e.state,r=a.selectedModelValue,o=a.input;e.setState({imageUrl:o,isSearching:!0},function(){fetch("http://localhost:3000/imageurl",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token")||sessionStorage.getItem("token"))},body:JSON.stringify({imageUrl:o,detectionType:r})}).then(function(e){return e.ok?e.json():Promise.reject(e.status)}).then(function(a){a&&fetch("http://localhost:3000/image",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token")||sessionStorage.getItem("token"))},body:JSON.stringify({id:t})}).then(function(e){return e.json()}).then(function(e){return n(!0,e)}),e.handleImageRecognition(a)}).catch(function(t){e.setState({isSearching:!1,errorState:!0,errorText:401===t?"You are unauthorized to execute this operation. Plase log out and enter again with your credentials":"There was an error. Please try again in a moment"})})})},e.handleImageRecognition=function(t){e.setReferences(t)},e.setReferences=function(t){e.setState({references:t,isSearching:!1})},e.getSelectedModel=function(){return _.find(function(t){return t.value===e.state.selectedModelValue})||_[0]},e.state={input:"",imageUrl:"",selectedModelValue:_[0].value,references:[],isSearching:!1,errorState:!1,errorText:""},e}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.input,a=t.imageUrl,r=t.references,o=t.isSearching,i=t.errorState,c=t.errorText,l=this.getSelectedModel();return s.a.createElement(g.a,null,function(t){var u=t.userData.id,m=t.setUserLogged;return s.a.createElement("div",{className:"mt5"},s.a.createElement(p,null),s.a.createElement(h,{onFormInputChange:e.onFormInputChange,inputValue:n,onImageSubmit:function(){return e.onImageSubmit(u,m)},onFormModelChange:e.onFormModelChange,selectedModel:l,models:_}),i?s.a.createElement("p",{style:{color:"red",fontSize:"1.3rem",fontWeight:"bold",backgroundColor:"rgba(255, 255, 255, .75)"}},c):s.a.createElement(C,{image:a,references:r,selectedModel:l,isSearching:o}))})}}]),t}(s.a.Component);t.default=x},65:function(e,t,n){e.exports={referenceElement:"ImageReferences_referenceElement__Boi02",hovered:"ImageReferences_hovered__3cwJ0"}},66:function(e,t,n){e.exports={boundingBox:"ImageContainer_boundingBox__3eLqc",boundingBoxHovered:"ImageContainer_boundingBoxHovered__2PWcZ",container:"ImageContainer_container__3FNX5"}}}]);
//# sourceMappingURL=4.d2a49e93.chunk.js.map