(this["webpackJsonphw-1"]=this["webpackJsonphw-1"]||[]).push([[0],{1:function(e,t,a){e.exports={wrapper:"Table_wrapper__j7rAj","transaction-history":"Table_transaction-history__tYsQO",row:"Table_row__GvRlL",cells:"Table_cells__34Fa3",head:"Table_head__3U_pH Table_cells__34Fa3",data:"Table_data__3DHDh Table_cells__34Fa3",buttonDelete:"Table_buttonDelete__270HB"}},13:function(e,t,a){e.exports={list:"Contacts_list__1xOvI",item:"Contacts_item__10B2v",buttonDelete:"Contacts_buttonDelete__suIsD"}},27:function(e,t,a){e.exports={notification:"Notification_notification__35dC_"}},28:function(e,t,a){e.exports={appear:"slideBar_appear__2DgBP",appearActive:"slideBar_appearActive__2KQQp"}},29:function(e,t,a){e.exports={enter:"titleFade_enter__2zZG3",enterActive:"titleFade_enterActive__2EgPv",exit:"titleFade_exit__jNQLE",exitActive:"titleFade_exitActive__1gxwF"}},3:function(e,t,a){e.exports={title:"PhoneBook_title__1Bdkh",inputContact:"PhoneBook_inputContact__1hgMh",label:"PhoneBook_label__2-OAy",input:"PhoneBook_input__3e_Bf",buttonAddContact:"PhoneBook_buttonAddContact__24kLi"}},30:function(e,t,a){e.exports={enter:"slideItems_enter__3UhLs",enterActive:"slideItems_enterActive__PgED0",exit:"slideItems_exit__1OXJ7",exitActive:"slideItems_exitActive__3qjBj"}},32:function(e,t,a){e.exports={filter:"Filter_filter__-kpUO"}},33:function(e,t,a){e.exports={App:"App_App__3DlnI",ButtonWrap:"App_ButtonWrap__2sEpH"}},36:function(e,t,a){e.exports=a(63)},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),s=a(4),i=a(5),l=a(9),u=a(8),m=a(15),_=a(3),d=a.n(_),h=a(64),p=a(27),f=a.n(p);var b=function(e){var t=e.message;return r.a.createElement("h2",{className:f.a.notification},t)},v=a(28),E=a.n(v),C=a(29),g=a.n(C),N=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",email:"",error:""},e.handleSubmit=function(t){t.preventDefault();var a={id:Object(m.v4)(),name:e.state.name,email:e.state.email},n=e.state;n.name,n.email;e.props.onAddContact(a)},e.handleChange=function(t){e.setState({name:t.target.value})},e.handleChangeEmail=function(t){e.setState({email:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){Object(m.v4)(),this.state.name,this.state.number;var e=this.props.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{in:!0,appear:!0,timeout:500,classNames:E.a,unmountOnExit:!0},r.a.createElement("h2",{className:d.a.title},"Welcome to the club")),r.a.createElement(h.a,{in:""!==e,timeout:250,classNames:g.a,unmountOnExit:!0},r.a.createElement(b,{message:e})),r.a.createElement("form",{className:d.a.inputContact,onSubmit:this.handleSubmit},r.a.createElement("label",{className:d.a.label},"Name"),r.a.createElement("input",{className:d.a.input,type:"text",value:this.state.name,onChange:this.handleChange}),r.a.createElement("label",{className:d.a.label},"Email"),r.a.createElement("input",{className:d.a.input,type:"email",value:this.state.email,onChange:this.handleChangeEmail}),r.a.createElement("button",{type:"submit",className:d.a.buttonAddContact},"Add")))}}]),a}(n.Component),x=a(13),A=a.n(x),w=a(65),D=a(30),k=a.n(D),y=(n.Component,a(31)),O=a.n(y).a.create({baseURL:"https://lisnyk-m-go.herokuapp.com"}),B=function(){return O.get("/users").then((function(e){return console.log("existUsers: ",e.data),e.data})).catch((function(e){return e}))},j=function(e){O.delete("/user/".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))},I=function(e,t){return new Promise((function(a,n){O.post("/auth/register",{User:e,Email:t,Password:"1111"}).then((function(e){console.log("res.data: ",e.data),a(e.data)})).catch((function(e){e&&e.response&&e.response.data?n(e.response.data.error):n("Netwok error")}))}))};a(32);var S=a(33),F=a.n(S),P=a(1),L=a.n(P),T=function(e){var t=e.data,a=e.onRemoveContact;return r.a.createElement("div",{className:L.a.wrapper},r.a.createElement("table",{className:L.a["transaction-history"],cellSpacing:"1",border:"1",cellPadding:"5",width:"300"},r.a.createElement("thead",{className:L.a.thead},r.a.createElement("tr",{className:L.a.row},r.a.createElement("th",{className:L.a.head},"ID"),r.a.createElement("th",{className:L.a.head},"Name"),r.a.createElement("th",{className:L.a.head},"Email"),r.a.createElement("th",{className:L.a.head},"Registration date"),r.a.createElement("th",{className:L.a.head},"Delete"))),r.a.createElement("tbody",null,t&&t.length>0&&t.map((function(e){return r.a.createElement("tr",{className:L.a.row,key:e.ID},r.a.createElement("td",{className:L.a.data},e.ID),r.a.createElement("td",{className:L.a.data},e.Name),r.a.createElement("td",{className:L.a.data},e.Email),r.a.createElement("td",{className:L.a.data},e.CreatedAt.substring(0,10)),r.a.createElement("td",{className:L.a.data},r.a.createElement("button",{className:L.a.buttonDelete,id:e.ID,onClick:function(){return a(e.ID)}},"x")))})))))},U=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={filter:"",contacts:[],name:"",error:""},n.addContact=function(e){var t=e.name,a=e.email;I(t,a).then((function(e){B().then((function(e){return n.setState({contacts:e,error:""})})).catch((function(e){return n.setState({error:e.message})}))})).catch((function(e){return n.setState({error:e})}))},n.existContact=function(e){return n.state.contacts.findIndex((function(t){return t.Name.toLowerCase()===e.name.toLowerCase()}))>0},n.changeFilter=function(e){n.setState({filter:e})},n.getVisibleContacts=function(){var e=n.state,t=e.contacts,a=e.filter;return t.length>0?t.filter((function(e){return e.Name.toLowerCase().includes(a.toLowerCase())})):t},n.removeContact=function(e){j(e),n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.ID!==e}))}}))},n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.contacts,this.state.contacts}},{key:"componentDidMount",value:function(){var e=this;B().then((function(t){return e.setState({contacts:t})})).catch((function(t){return e.setState({error:t.message})}))}},{key:"render",value:function(){var e=this.state,t=(e.filter,e.contacts),a=e.error;this.getVisibleContacts();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:F.a.App},r.a.createElement(N,{onAddContact:this.addContact,contacts:t,existContact:this.existContact,error:a}),r.a.createElement(T,{data:t,onRemoveContact:this.removeContact})))}}]),a}(n.Component);a(62);o.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.8c5df171.chunk.js.map