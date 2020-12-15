(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{45:function(t,e,n){},46:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n(1),r=n.n(o),s=n(36),i=n.n(s),c=n(6),l=n(2),u=n(3),h=n(5),d=n(4),j=(n(45),n(7)),b=n.p+"static/media/bookstore.2855da3c.jpg",p=(n(46),n(17)),g=n(18);function O(){var t=Object(p.a)(["\n  padding: 5rem;\n  height: 100vh;\n  width: 100vw;\n  background-color: ",";\n"]);return O=function(){return t},t}var f=g.a.section(O(),(function(t){return t.bgColor}));function m(){var t=Object(p.a)(["\n  height: 100vh;\n  width: 100vw;\n"]);return m=function(){return t},t}var v=g.a.section(m());function x(){var t=Object(p.a)(["\n  height: 1rem;\n  width: 2rem;\n  border: 2px solid black;\n  border-radius: 5px;\n  &:hover {\n    background-color: orange;\n  }\n"]);return x=function(){return t},t}var k=g.a.div(x());var y=function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)(v,{children:[Object(a.jsx)("img",{src:b,alt:""}),Object(a.jsx)("p",{children:"Write and publish books online for free"}),Object(a.jsx)(c.b,{to:"/login",children:Object(a.jsx)(k,{children:"Start"})})]}),Object(a.jsx)(f,{bgColor:"blue"}),Object(a.jsx)(f,{bgColor:"green"})]})},w=n(12),C=n(15),S=n(14),I=n.n(S),L=new(function(){function t(){Object(l.a)(this,t),this.auth=I.a.create({baseURL:"https://bookways.herokuapp.com",withCredentials:!0})}return Object(u.a)(t,[{key:"signup",value:function(t,e,n,a){return this.auth.post("/auth/signup",{firstname:t,lastname:e,email:n,password:a}).then((function(t){return t.data}))}},{key:"login",value:function(t,e){return this.auth.post("/auth/login",{email:t,password:e}).then((function(t){return t.data}))}},{key:"logout",value:function(){return this.auth.get("/auth/logout").then((function(t){return t.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(t){return t.data}))}}]),t}()),B=r.a.createContext(),R=B.Consumer,E=B.Provider,F=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={isLoggedIn:!1,isLoading:!0,user:null},t.signup=function(e,n,a,o){L.signup(e,n,a,o).then((function(e){return t.setState({isLoggedIn:!0,user:e})})).catch((function(e){t.setState({isLoggedIn:!1,user:null})}))},t.login=function(e,n){L.login(e,n).then((function(e){return t.setState({isLoggedIn:!0,user:e})})).catch((function(e){t.setState({isLoggedIn:!1,user:null})}))},t.logout=function(){L.logout().then((function(){return t.setState({isLoggedIn:!1,user:null})})).catch((function(t){return console.log(t)}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;L.me().then((function(e){return t.setState({isLoggedIn:!0,user:e,isLoading:!1})})).catch((function(e){return t.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var t=this.state,e=t.isLoggedIn,n=t.isLoading,o=t.user,r=this.signup,s=this.login,i=this.logout;return n?Object(a.jsx)("p",{children:"Loading"}):Object(a.jsx)(E,{value:{isLoggedIn:e,isLoading:n,user:o,signup:r,login:s,logout:i},children:this.props.children})}}]),n}(r.a.Component),A=function(t){return function(e){Object(h.a)(o,e);var n=Object(d.a)(o);function o(){return Object(l.a)(this,o),n.apply(this,arguments)}return Object(u.a)(o,[{key:"render",value:function(){var e=this;return Object(a.jsx)(R,{children:function(n){var o=n.isLoggedIn,r=n.isLoading,s=n.user,i=n.signup,c=n.login,l=n.logout;return Object(a.jsx)(t,Object(C.a)(Object(C.a)({},e.props),{},{isLoggedIn:o,isLoading:r,user:s,signup:i,login:c,logout:l}))}})}}]),o}(r.a.Component)},P=A(function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={firstname:"",lastname:"",email:"",password:""},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.firstname,o=n.lastname,r=n.email,s=n.password;t.props.signup(a,o,r,s)},t.handleChange=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(w.a)({},a,o))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.firstname,n=t.lastname,o=t.email,r=t.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Firstname:"}),Object(a.jsx)("input",{type:"text",name:"firstname",value:e,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Lastname:"}),Object(a.jsx)("input",{type:"text",name:"lastname",value:n,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)("input",{type:"email",name:"email",value:o,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",name:"password",value:r,onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"Signup"})]}),Object(a.jsx)("p",{children:"Already have account?"}),Object(a.jsx)(c.b,{to:"/login",children:" Login"})]})}}]),n}(o.Component)),D=A(function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={email:"",password:""},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.email,o=n.password;t.props.login(a,o)},t.handleChange=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(w.a)({},a,o))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.email,n=t.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)("input",{type:"text",name:"email",value:e,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"Login"})]})]})}}]),n}(o.Component)),N=new function t(){var e=this;Object(l.a)(this,t),this.getAllBooks=function(){return e.book.get("/startpage").then((function(t){return t.data}))},this.getOneBook=function(t){return e.book.get("/book/".concat(t)).then((function(t){return t.data}))},this.addToFavorite=function(t){return e.book.post("/books/favorites/".concat(t)).then((function(t){return t.data}))},this.addToReadList=function(t){return e.book.post("/books/postpone/".concat(t)).then((function(t){return t.data}))},this.createBook=function(t){return e.book.post("/book/create",t)},this.getMyBooks=function(){return e.book.get("/dashboard/").then((function(t){return t.data}))},this.book=I.a.create({baseURL:"https://bookways.herokuapp.com/api",withCredentials:!0})},M=A(function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)(c.b,{to:"/dashboard",id:"dashboard-btn",children:Object(a.jsx)("h4",{children:"Dashboard"})}),Object(a.jsx)(c.b,{to:"/profile",id:"profile-btn",children:Object(a.jsx)("h4",{children:"Profile"})}),Object(a.jsx)(c.b,{to:"/start",id:"start-btn",children:Object(a.jsx)("h4",{children:"Start"})}),Object(a.jsx)(c.b,{to:"/createBook",id:"plus-btn",children:Object(a.jsx)("h4",{children:"+"})})]})}}]),n}(o.Component)),U=(n(68),A(function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={actionBooks:[],fantasyBooks:[]},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;N.getAllBooks().then((function(e){console.log("heyBooks",e);var n=e.filter((function(t){return"action"===t.genre})),a=e.filter((function(t){return"fantasy"===t.genre}));t.setState({actionBooks:n,fantasyBooks:a})}))}},{key:"render",value:function(){var t=this.state,e=t.actionBooks,n=t.fantasyBooks;return Object(a.jsxs)("div",{children:[Object(a.jsx)(M,{}),Object(a.jsxs)("h2",{children:["Welcome ",this.props.user&&this.props.user.username]}),Object(a.jsx)("div",{className:"action-books",children:e.map((function(t,e){return Object(a.jsxs)(c.b,{to:"/bookdetails/".concat(t._id),children:[Object(a.jsx)("h1",{children:t.title}),";"]},e)}))}),Object(a.jsx)("div",{className:"fantasy-books",children:n.map((function(t,e){return Object(a.jsxs)(c.b,{to:"/bookdetails/".concat(t._id),children:[Object(a.jsx)("h1",{children:t.title}),";"]},e)}))})]})}}]),n}(o.Component))),_=A(function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={user:t.props.user,myBooks:""},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;N.getMyBooks().then((function(e){t.setState({myBooks:e})}))}},{key:"render",value:function(){var t=this.state,e=t.user,n=t.myBooks;return console.log("myBooks",n),console.log("user",e),console.log(e.ownBooks),console.log(e.favoriteBooks),console.log(e.nowReading),console.log(e.readList),Object(a.jsxs)("div",{children:["Hola from Dashboard",Object(a.jsx)("p",{children:"My books"}),n.ownBooks?n.ownBooks.map((function(t,e){return Object(a.jsx)(c.b,{to:"/mybook/".concat(t._id),children:Object(a.jsx)("h1",{children:t.title})},e)})):null,Object(a.jsx)("p",{children:"Reading"}),n.nowReading?n.nowReading.map((function(t,e){return Object(a.jsx)(c.b,{to:"/mybook/".concat(t._id),children:Object(a.jsx)("h2",{children:t.title})},e)})):null,Object(a.jsx)("p",{children:"My favorite books"}),n.favoriteBooks?n.favoriteBooks.map((function(t,e){return Object(a.jsx)(c.b,{to:"/mybook/".concat(t._id),children:Object(a.jsx)("h3",{children:t.title})},e)})):null,Object(a.jsx)("p",{children:"Books to read"}),n.readList?n.readList.map((function(t,e){return Object(a.jsx)(c.b,{to:"/mybook/".concat(t._id),children:Object(a.jsx)("h4",{children:t.title})},e)})):null,Object(a.jsx)(M,{})]})}}]),n}(o.Component)),T=new function t(){var e=this;Object(l.a)(this,t),this.getUserInfo=function(t){return console.log("getUserInfo"),e.user.get("/user/".concat(t)).then((function(t){return t.data}))},this.updateUserInfo=function(t,n){return e.user.put("/user/".concat(n),t)},this.user=I.a.create({baseURL:"https://bookways.herokuapp.com",withCredentials:!0})},H=A(function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={firstname:"",lastname:"",email:"",password:"",profileImage:"",totalCashEarned:"",totalViews:0,toggleFirstnameReadOnly:!1,toggleLastnameReadOnly:!1,toggleEmailReadOnly:!1,togglePasswordReadOnly:!1},t.handleSubmit=function(e){e.preventDefault(),T.updateUserInfo({firstname:t.state.firstname,lastname:t.state.lastname,email:t.state.email,password:t.state.password,profileImage:t.state.profileImage},t.props.user._id).then((function(e){console.log("user info updated"),T.getUserInfo(t.props.user._id).then((function(e){return t.setState({firstname:e.firstname,lastname:e.lastname,email:e.email,password:e.password,profileImage:e.profileImage})}))}))},t.handleInput=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(w.a)({},a,o))},t.handleEditFieldFirstname=function(e){t.setState({toggleFirstnameReadOnly:!t.state.toggleFirstnameReadOnly})},t.handleEditFieldLastname=function(e){t.setState({toggleLastnameReadOnly:!t.state.toggleLastnameReadOnly})},t.handleEditFieldEmail=function(e){t.setState({toggleEmailReadOnly:!t.state.toggleEmailReadOnly})},t.handleEditFieldPassword=function(e){t.setState({togglePasswordReadOnly:!t.state.togglePasswordReadOnly})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.toggleFirstnameReadOnly,n=t.toggleLastnameReadOnly,o=t.toggleEmailReadOnly,r=t.togglePasswordReadOnly;return Object(a.jsxs)("div",{children:["Hola from Profile",Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[e?Object(a.jsx)("input",{type:"text",name:"firstname",value:this.state.firstname,onChange:this.handleInput}):Object(a.jsx)("input",{readOnly:!0,type:"text",name:"firstname",value:this.state.firstname,onChange:this.handleInput}),Object(a.jsx)("p",{onClick:this.handleEditFieldFirstname,children:"EditBtn"}),n?Object(a.jsx)("input",{type:"text",name:"lastname",value:this.state.lastname,onChange:this.handleInput}):Object(a.jsx)("input",{readOnly:!0,type:"text",name:"lastname",value:this.state.lastname,onChange:this.handleInput}),Object(a.jsx)("p",{onClick:this.handleEditFieldLastname,children:"EditBtn"}),o?Object(a.jsx)("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleInput}):Object(a.jsx)("input",{readOnly:!0,type:"text",name:"email",value:this.state.email,onChange:this.handleInput}),Object(a.jsx)("p",{onClick:this.handleEditFieldEmail,children:"EditBtn"}),r?Object(a.jsx)("input",{type:"text",name:"password",value:this.state.password,onChange:this.handleInput}):Object(a.jsx)("input",{readOnly:!0,type:"text",name:"password",value:this.state.password,onChange:this.handleInput}),Object(a.jsx)("p",{onClick:this.handleEditFieldPassword,children:"EditBtn"}),Object(a.jsx)("input",{type:"submit",value:"Save"})]}),Object(a.jsx)(M,{})]})}},{key:"componentDidMount",value:function(){var t=this;T.getUserInfo(this.props.user._id).then((function(e){console.log(e),t.setState({firstname:e.firstname,lastname:e.lastname,email:e.email,password:e.password,profileImage:e.profileImage})}))}}]),n}(o.Component)),W=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={title:"",description:"",genre:"action",coverImage:""},t.handleInput=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(w.a)({},a,o))},t.handleSumbit=function(e){var n=t.state,a=n.title,o=n.description,r=n.genre,s=n.coverImage;e.preventDefault(),N.createBook({title:a,description:o,genre:r,coverImage:s}).then((function(e){console.log("createdBook",e);var n=e.data.updatedUser.ownBooks.pop();console.log("newBookId",n),t.props.history.push("/mybook/".concat(n))})).catch((function(t){return console.log(t)}))},t.handleChange=function(e){t.setState({genre:e.target.value})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:["Hello from CreateBook",Object(a.jsxs)("form",{onSubmit:this.handleSumbit,children:[Object(a.jsxs)("label",{children:["Title"," ",Object(a.jsx)("input",{name:"title",value:this.state.title,type:"text",onChange:this.handleInput})]}),Object(a.jsxs)("label",{children:["Description"," ",Object(a.jsx)("input",{name:"description",value:this.state.description,type:"text",onChange:this.handleInput})]}),Object(a.jsxs)("label",{children:["Genre"," ",Object(a.jsxs)("select",{value:this.state.option,onChange:this.handleChange,children:[Object(a.jsx)("option",{value:"action",children:"Action"}),Object(a.jsx)("option",{value:"fantasy",children:"Fantasy"}),Object(a.jsx)("option",{value:"biography",children:"Biography"}),Object(a.jsx)("option",{value:"comics",children:"Comics"})]})]}),Object(a.jsxs)("label",{children:["Cover ",Object(a.jsx)("input",{})]}),Object(a.jsx)("input",{type:"submit"})]})]})}}]),n}(o.Component),J=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={book:""},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;N.getOneBook(e).then((function(e){return t.setState(e)}))}},{key:"render",value:function(){var t=this.state.book;return console.log("book",t),Object(a.jsxs)("div",{children:["Hello from MyBook",Object(a.jsx)("h1",{children:t.title}),Object(a.jsx)(k,{children:Object(a.jsx)(c.b,{to:"/write/".concat(t._id),children:"Edit/create-first-page"})}),Object(a.jsx)("button",{children:"upload"}),Object(a.jsx)("button",{children:"delete"}),Object(a.jsx)(M,{})]})}}]),n}(o.Component),G=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={book:""},t.handleAddToFavorites=function(){var e=t.props.match.params.id;N.addToFavorite(e).then((function(){return console.log("new favorite book")}))},t.handleAddToReadLater=function(){var e=t.props.match.params.id;N.addToReadList(e).then((function(){return console.log("new book in readlist")}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;N.getOneBook(e).then((function(e){t.setState(e)}))}},{key:"render",value:function(){var t=this.state.book;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:["Book title: ",t.title]}),t?Object(a.jsxs)("p",{children:["author:",Object(a.jsxs)(c.b,{to:"/author/".concat(t.author._id),children:[t.author.firstname," ",t.author.lastname]})]}):null,Object(a.jsx)(k,{children:Object(a.jsx)(c.b,{to:"/read/".concat(t._id),children:"Read now"})}),Object(a.jsx)("button",{onClick:this.handleAddToFavorites,children:"Favorite"}),Object(a.jsx)("button",{onClick:this.handleAddToReadLater,children:"Read later"}),Object(a.jsx)(M,{})]})}}]),n}(o.Component),V=new function t(){var e=this;Object(l.a)(this,t),this.getAuthor=function(t){return e.author.get("/".concat(t)).then((function(t){return t.data}))},this.author=I.a.create({baseURL:"https://bookways.herokuapp.com",withCredentials:!0})},q=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={author:""},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;V.getAuthor(e).then((function(e){t.setState({author:e})}))}},{key:"render",value:function(){console.log("state",this.state.author);var t=this.state.author;return Object(a.jsxs)("div",{children:["Hello from Auhtor page",t?t.user.ownBooks.map((function(t,e){return Object(a.jsx)("h1",{children:t.title},e)})):null,Object(a.jsx)(M,{})]})}}]),n}(o.Component),z=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={book:"",pageNr:1},t.handlePageIncrease=function(){t.setState({pageNr:t.state.pageNr+1})},t.handlePageDecrease=function(){t.setState({pageNr:t.state.pageNr-1})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;N.getOneBook(e).then((function(e){t.setState(e)}))}},{key:"render",value:function(){var t,e=this.state,n=e.book,o=e.pageNr;return n&&(t=n.pages.find((function(t){return t.pageNumber===o}))),Object(a.jsxs)("div",{children:[n.title,t?Object(a.jsx)("p",{children:t.text}):null,Object(a.jsxs)("p",{children:["Page: ",o]}),Object(a.jsx)("button",{onClick:this.handlePageIncrease,children:"Next page"}),Object(a.jsx)("button",{onClick:this.handlePageDecrease,children:"Prev page"}),Object(a.jsx)(M,{})]})}}]),n}(o.Component),K=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={book:"",pageNr:1,editMode:!1,pages:[]},t.handlePageIncrease=function(){t.setState({pageNr:t.state.pageNr+1})},t.handlePageDecrease=function(){t.setState({pageNr:t.state.pageNr-1})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;N.getOneBook(e).then((function(e){console.log(e),t.setState({book:e,pages:e.pages})}))}},{key:"render",value:function(){var t=this,e=this.state,n=(e.book,e.pageNr),o=e.editMode,r=e.pages.find((function(t){return t.pageNumber===n}));return console.log("pageObj",r),Object(a.jsxs)("div",{children:["Hello from Write mode page",o?Object(a.jsx)(Q,{page:r}):Object(a.jsx)("p",{children:r?r.text:""}),Object(a.jsxs)("p",{children:["Page: ",n]}),Object(a.jsx)("button",{onClick:this.handlePageIncrease,children:"Next page"}),Object(a.jsx)("button",{onClick:this.handlePageDecrease,children:"Prev page"}),o?Object(a.jsxs)("button",{onClick:function(){return t.setState({editMode:!1})},children:[" ","Close Editor"]}):Object(a.jsx)("button",{onClick:function(){return t.setState({editMode:!0})},children:"Edit Page"}),Object(a.jsx)(M,{})]})}}]),n}(o.Component),Q=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={text:""},t.handleText=function(e){var n=e.target,a=n.value,o=n.name;t.setState(Object(w.a)({},o,a))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.setState({text:this.props.page.text})}},{key:"render",value:function(){return Object(a.jsx)("form",{children:Object(a.jsx)("textarea",{name:"text",value:this.state.text,cols:"30",rows:"10",onChange:this.handleText})})}}]),n}(r.a.Component);var X=A((function(t){var e=t.isLoggedIn,n=t.isLoading,o=t.component,r=t.exact,s=t.path;return n?"Loading":Object(a.jsx)(j.b,{exact:r,path:s,render:function(t){return e?Object(a.jsx)(j.a,{to:"/start"}):e?void 0:Object(a.jsx)(o,Object(C.a)({},t))}})}));var Y=A((function(t){var e=t.isLoggedIn,n=t.isLoading,o=t.component,r=t.exact,s=t.path;return n?"Loading":Object(a.jsx)(j.b,{exact:r,path:s,render:function(t){return e?e?Object(a.jsx)(o,Object(C.a)({},t)):void 0:Object(a.jsx)(j.a,{to:"/login"})}})})),Z=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{exact:!0,path:"/",component:y}),Object(a.jsx)(X,{exact:!0,path:"/signup",component:P}),Object(a.jsx)(X,{exact:!0,path:"/login",component:D}),Object(a.jsx)(Y,{exact:!0,path:"/start",component:U}),Object(a.jsx)(Y,{exact:!0,path:"/dashboard",component:_}),Object(a.jsx)(Y,{exact:!0,path:"/profile",component:H}),Object(a.jsx)(Y,{exact:!0,path:"/createBook",component:W}),Object(a.jsx)(Y,{exact:!0,path:"/mybook/:id",component:J}),Object(a.jsx)(Y,{exact:!0,path:"/bookdetails/:id",component:G}),Object(a.jsx)(Y,{exact:!0,path:"/author/:id",component:q}),Object(a.jsx)(Y,{exact:!0,path:"/read/:id",component:z}),Object(a.jsx)(Y,{exact:!0,path:"/write/:id",component:K})]})})}}]),n}(o.Component);i.a.render(Object(a.jsx)(c.a,{children:Object(a.jsx)(F,{children:Object(a.jsx)(Z,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.afdbc59f.chunk.js.map