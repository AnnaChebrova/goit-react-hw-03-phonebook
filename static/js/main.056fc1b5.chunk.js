(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{2:function(t,e,n){t.exports={container:"phonebook_container___3Cg9",form:"phonebook_form__2p_Q0",inputName:"phonebook_inputName__35LTf",inputTel:"phonebook_inputTel__ApGVP",btn:"phonebook_btn__2_OWC"}},27:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(9),r=n.n(o),i=n(12),s=n(4),u=n(5),l=n(7),d=n(6),b=n(2),h=n.n(b),m=n(10),j=n(0),p=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){t.setState(Object(m.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addContact(t.state.name,t.state.number),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:h.a.form,children:[Object(j.jsxs)("label",{children:[" Name",Object(j.jsx)("input",{className:h.a.inputName,value:this.state.name,onChange:this.handleInputChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{children:[" Tel",Object(j.jsx)("input",{className:h.a.inputTel,value:this.state.number,onChange:this.handleInputChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{type:"submit",className:h.a.btn,children:"Add contact"})]})}}]),n}(c.a.Component),f=n(11),O=n.n(f),C=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{children:[" Find contact by name",Object(j.jsx)("input",{type:"text",value:e,onChange:n})]})},g=function(t){var e=t.contacts,n=t.deleteContact;return Object(j.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{children:[Object(j.jsxs)("p",{children:[a," : ",c]}),Object(j.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"delete contact"})]},e)}))})},v=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){if(t.state.contacts.find((function(t){return e.toLowerCase()===t.name.toLocaleLowerCase()})))alert("".concat(e," is already in list"));else if(e&&n){var a={id:O.a.generate(),name:e,number:n};t.setState((function(t){return{contacts:[a].concat(Object(i.a)(t.contacts))}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){localStorage.getItem("contacts")&&this.setState({contacts:JSON.parse(localStorage.getItem("contacts"))})}},{key:"componentDidUpdate",value:function(t){this.setState.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{className:h.a.container,children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{contacts:this.state.contacts,addContact:this.addContact,onSubmit:this.formSubmit}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(C,{value:this.state.filter,onChange:this.changeFilter}),Object(j.jsx)(g,{contacts:this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())})),deleteContact:this.deleteContact})]})}}]),n}(c.a.Component),x=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(v,{})})};n(26);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.056fc1b5.chunk.js.map