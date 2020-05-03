(this["webpackJsonppersonalkanban-react-client"]=this["webpackJsonppersonalkanban-react-client"]||[]).push([[0],{46:function(e,t,a){e.exports=a(79)},51:function(e,t,a){},52:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(25),o=a.n(c),s=(a(51),a(52),a(53),a(10)),i=a(22),l=a(5),m=a(6),u=a(8),p=a(7),d=a(9),h=a(1),v=a(4),f=a.n(v),b=a(13),E=a(12),j=a.n(E),g="GET_ERRORS",y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).onDeleteClick=function(e){a.props.deleteProject(e)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.project;return(n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card card-body bg-light mb-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"},n.a.createElement("span",{className:"mx-auto"},e.projectIdentifier)),n.a.createElement("div",{className:"col-lg-6 col-md-4 col-8"},n.a.createElement("h3",null,e.projectName),n.a.createElement("p",null,e.description)),n.a.createElement("div",{className:"col-md-4 d-none d-lg-block"},n.a.createElement("ul",{className:"list-group"},n.a.createElement(s.b,{to:"/projectBoard/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item board"},n.a.createElement("i",{className:"fa fa-flag-checkered pr-1"}," Project Board "))),n.a.createElement(s.b,{to:"/updateProject/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item update"},n.a.createElement("i",{className:"fa fa-edit pr-1"}," Update Project Info"))),n.a.createElement("li",{className:"list-group-item delete",onClick:this.onDeleteClick.bind(this,e.projectIdentifier)},n.a.createElement("i",{className:"fa fa-minus-circle pr-1"}," Delete Project"))))))))}}]),t}(r.Component),N=Object(h.b)(null,{deleteProject:function(e){return function(){var t=Object(b.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure? This will delete the project and all data related to it")){t.next=4;break}return t.next=3,j.a.delete("/api/project/".concat(e));case 3:a({type:"DELETE_PROJECT",payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(y);var k=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.b,{to:"/addProject",className:"btn btn-lg btn-info"},"Create a Project"))},O=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return(n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"display-4 text-center"},"Projects"),n.a.createElement("br",null),n.a.createElement(k,null),n.a.createElement("br",null),n.a.createElement("hr",null),e.map((function(e){return n.a.createElement(N,{key:e.id,project:e})})))))))}}]),t}(r.Component),C=Object(h.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(){var e=Object(b.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/project/all");case 2:a=e.sent,t({type:"GET_PROJECTS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(O),w=function(e){e?j.a.defaults.headers.common.Authorization=e:delete j.a.defaults.headers.common.Authorization},S=a(27),_=a.n(S),P=function(){return function(e){localStorage.removeItem("jwtToken"),w(!1),e({type:"SET_CURRENT_USER",payload:{}})}},x=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"logout",value:function(){this.props.logout(),window.location.href="/"}},{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,r=t.user,c=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/dashboard"},"Dashboard"))),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/dashboard"},n.a.createElement("i",{className:"fas fa-user-circle mr-1"}),r.fullName)),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/logout",onClick:this.logout.bind(this)},"Logout")))),o=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/register"},"Sign Up")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/login"},"Login"))));return e=a&&r?c:o,n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4"},n.a.createElement("div",{className:"container"},n.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Personal Project Management Tool"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},n.a.createElement("span",{className:"navbar-toggler-icon"})),e))}}]),t}(r.Component),T=Object(h.b)((function(e){return{security:e.security}}),{logout:P})(x),D=a(14),I=a(11),R=a(3),A=a.n(R),U=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(I.a)(e)),e.onSubmit=e.onSubmit.bind(Object(I.a)(e)),e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",null,n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Create Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectIdentifier&&n.a.createElement("div",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:A()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.errors!==t.prevErrors)return{errors:e.errors}}}]),t}(r.Component),B=Object(h.b)((function(e){return{errors:e.errors}}),{createProject:function(e,t){return function(){var a=Object(b.a)(f.a.mark((function a(r){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j.a.post("/api/project/add",e);case 3:t.push("/dashboard"),r({type:g,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:g,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})(U),G=a(19),q=a(44),L={},M=a(20),J={projects:[],project:{}},F={project_tasks:[],project_task:{}},K={user:{},validToken:!1},W=function(e){return!!e},H=Object(G.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return Object(M.a)({},e,{projects:t.payload});case"GET_PROJECT":return Object(M.a)({},e,{project:t.payload});case"DELETE_PROJECT":return Object(M.a)({},e,{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BACKLOG":return Object(M.a)({},e,{project_tasks:t.payload});case"GET_PROJECT_TASK":return Object(M.a)({},e,{project_task:t.payload});case"DELETE_PROJECT_TASK":return Object(M.a)({},e,{project_tasks:e.project_tasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(M.a)({},e,{validToken:W(t.payload),user:t.payload});default:return e}}}),X={},V=[q.a],z=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Y=window.navigator.userAgent.includes("Chrome")&&z?Object(G.e)(H,X,Object(G.d)(G.a.apply(void 0,V),z)):Object(G.e)(H,X,Object(G.d)(G.a.apply(void 0,V))),$=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).onChange=e.onChange.bind(Object(I.a)(e)),e.onSubmit=e.onSubmit.bind(Object(I.a)(e)),e.state={id:"",projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project,a=t.id,r=t.projectName,n=t.projectIdentifier,c=t.description,o=t.start_date,s=t.end_date;this.setState({id:a,projectName:r,projectIdentifier:n,description:c,start_date:o,end_date:s})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.updateProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Update Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control form-control-lg",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange,placeholder:"Unique Project ID",disabled:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:A()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),Q=Object(h.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(){var a=Object(b.a)(f.a.mark((function a(r){var n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j.a.get("/api/project/".concat(e));case 3:n=a.sent,r({type:"GET_PROJECT",payload:n.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.push("/dashboard");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},updateProject:function(e,t){return function(){var a=Object(b.a)(f.a.mark((function a(r){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j.a.post("/api/project",e);case 3:t.push("/dashboard"),r({type:g,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:g,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})($),Z=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onDeleteClick",value:function(e,t){this.props.deleteProjectTask(e,t)}},{key:"render",value:function(){var e,t,a=this.props.project_task;return 1===a.priority&&(e="bg-danger text-light",t="HIGH"),2===a.priority&&(e="bg-warning text-light",t="MEDIUM"),3===a.priority&&(e="bg-info text-light",t="LOW"),n.a.createElement("div",{className:"card mb-1 bg-light"},n.a.createElement("div",{className:"card-header text-primary ".concat(e)},"ID: ",a.projectSequence," -- Priority: ",t),n.a.createElement("div",{className:"card-body bg-light"},n.a.createElement("h5",{className:"card-title"},a.summary),n.a.createElement("p",{className:"card-text text-truncate "},a.acceptanceCriteria),n.a.createElement(s.b,{to:"/updateProjectTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-primary"},"View / Update"),n.a.createElement("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClick.bind(this,a.projectIdentifier,a.projectSequence)},"Delete")))}}]),t}(r.Component),ee=Object(h.b)(null,{deleteProjectTask:function(e,t){return function(){var a=Object(b.a)(f.a.mark((function a(r){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("You are deleting project task ".concat(t,", are you sure?"))){a.next=4;break}return a.next=3,j.a.delete("/api/projectTask/".concat(e,"/").concat(t));case 3:r({type:"DELETE_PROJECT_TASK",payload:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(Z),te=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){for(var e=this.props.project_tasks_prop.map((function(e){return n.a.createElement(ee,{key:e.id,project_task:e})})),t=[],a=[],r=[],c=0;c<e.length;c++)console.log(e[c]),"TO_DO"===e[c].props.project_task.status&&t.push(e[c]),"IN_PROGRESS"===e[c].props.project_task.status&&a.push(e[c]),"DONE"===e[c].props.project_task.status&&r.push(e[c]);return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-secondary text-white"},n.a.createElement("h3",null,"TO DO"))),t),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-primary text-white"},n.a.createElement("h3",null,"In Progress"))),a),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-success text-white"},n.a.createElement("h3",null,"Done"))),r)))}}]),t}(r.Component),ae=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={errors:{}},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e,t=this.props.match.params.id,a=this.props.backlog.project_tasks;return e=function(e,t){return t.length<1?e.projectNotFound?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectNotFound):e.projectIdentifier?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectIdentifier):e.projectNotFoundInAccount?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectNotFoundInAccount):n.a.createElement("div",{className:"alert alert-info text-center",role:"alert"},"No Project Tasks in this board"):n.a.createElement(te,{project_tasks_prop:t})}(this.state.errors,a),n.a.createElement("div",{className:"container"},n.a.createElement(s.b,{to:"/addProjectTask/".concat(t),className:"btn btn-primary mb-3"},n.a.createElement("i",{className:"fas fa-plus-circle"}," Create Project Task ")),n.a.createElement("br",null),n.a.createElement("hr",null),e)}}]),t}(r.Component),re=Object(h.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e,t){return function(){var t=Object(b.a)(f.a.mark((function t(a){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("/api/projectTask/".concat(e));case 3:r=t.sent,a({type:"GET_BACKLOG",payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:g,payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})(ae),ne=function(e){function t(e){var a;Object(l.a)(this,t);var r=(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).props.match.params.id;return a.state={summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:r,errors:{}},a.onChange=a.onChange.bind(Object(I.a)(a)),a.onSubmit=a.onSubmit.bind(Object(I.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate};this.props.addProjectTask(this.state.projectIdentifier,t,this.props.history)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(s.b,{to:"/projectBoard/".concat(e),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Add Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name + Project Code"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",value:this.state.summary,onChange:this.onChange,placeholder:"Project Task summary"}),t.summary&&n.a.createElement("div",{className:"invalid-feedback"},t.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:A()("form-control form-control-lg",{"is-invalid":t.acceptanceCriteria}),placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange}),t.acceptanceCriteria&&n.a.createElement("div",{className:"invalid-feedback"},t.acceptanceCriteria)),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:A()("form-control form-control-lg",{"is-invalid":t.dueDate}),name:"dueDate",value:this.state.dueDate,onChange:this.onChange}),t.dueDate&&n.a.createElement("div",{className:"invalid-feedback"},t.dueDate)),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:A()("form-control form-control-lg",{"is-invalid":t.priority}),name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low")),t.priority&&n.a.createElement("div",{className:"invalid-feedback"},t.priority)),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:A()("form-control form-control-lg",{"is-invalid":t.status}),name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE")),t.status&&n.a.createElement("div",{className:"invalid-feedback"},t.status)),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.errors!==t.prevErrors)return{errors:e.errors}}}]),t}(r.Component),ce=Object(h.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(){var r=Object(b.a)(f.a.mark((function r(n){return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,j.a.post("/api/projectTask/".concat(e),t);case 3:a.push("/projectBoard/".concat(e)),n({type:g,payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),n({type:g,payload:r.t0.response.data});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}})(ne),oe=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).onChange=e.onChange.bind(Object(I.a)(e)),e.onSubmit=e.onSubmit.bind(Object(I.a)(e)),e.state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:"",created_At:"",errors:{}},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project_task,a=t.id,r=t.projectSequence,n=t.summary,c=t.acceptanceCriteria,o=t.status,s=t.priority,i=t.dueDate,l=t.projectIdentifier,m=t.created_At;this.setState({id:a,projectSequence:r,summary:n,acceptanceCriteria:c,status:o,priority:s,dueDate:i,projectIdentifier:l,created_At:m})}},{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.project_identifier,a=e.project_sequence;this.props.getProjectTask(t,a,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectSequence:this.state.projectSequence,summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate,projectIdentifier:this.state.projectIdentifier,created_At:this.state.created_At};this.props.updateProjectTask(this.state.projectIdentifier,this.state.projectSequence,t,this.props.history)}},{key:"render",value:function(){var e=this.props.match.params.project_identifier,t=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(s.b,{to:"/projectBoard/".concat(e),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Update Project Task"),n.a.createElement("p",{className:"lead text-center"},"Identifier: ",this.state.projectIdentifier," - Sequence:"," ",this.state.projectSequence),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",value:this.state.summary,onChange:this.onChange,placeholder:"Project Task summary"}),t.summary&&n.a.createElement("div",{className:"invalid-feedback"},t.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:A()("form-control form-control-lg",{"is-invalid":t.acceptanceCriteria}),placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange}),t.acceptanceCriteria&&n.a.createElement("div",{className:"invalid-feedback"},t.acceptanceCriteria)),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:A()("form-control form-control-lg",{"is-invalid":t.dueDate}),name:"dueDate",value:this.state.dueDate,onChange:this.onChange}),t.dueDate&&n.a.createElement("div",{className:"invalid-feedback"},t.dueDate)),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:A()("form-control form-control-lg",{"is-invalid":t.priority}),name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low")),t.priority&&n.a.createElement("div",{className:"invalid-feedback"},t.priority)),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:A()("form-control form-control-lg",{"is-invalid":t.status}),name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE")),t.status&&n.a.createElement("div",{className:"invalid-feedback"},t.status)),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),se=Object(h.b)((function(e){return{project_task:e.backlog.project_task,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(){var r=Object(b.a)(f.a.mark((function r(n){var c;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,j.a.get("/api/projectTask/".concat(e,"/").concat(t));case 3:c=r.sent,n({type:"GET_PROJECT_TASK",payload:c.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a.push("/dashboard");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},updateProjectTask:function(e,t,a,r){return function(){var n=Object(b.a)(f.a.mark((function n(c){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j.a.patch("/api/projectTask/".concat(e,"/").concat(t),a);case 3:r.push("/projectBoard/".concat(e)),c({type:g,payload:{}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c({type:g,payload:n.t0.response.data});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}})(oe),ie=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return n.a.createElement("div",{className:"landing"},n.a.createElement("div",{className:"light-overlay landing-inner text-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:"display-3 mb-4"},"Personal Project Management Kanban Tool"),n.a.createElement("p",{className:"lead"},"Create your account to join active projects or start your own"),n.a.createElement("hr",null),n.a.createElement(s.b,{className:"btn btn-lg btn-primary mr-2",to:"/register"},"Sign Up"),n.a.createElement(s.b,{to:"/login",className:"btn btn-lg btn-secondary mr-2"},"Login"))))))}}]),t}(r.Component),le=Object(h.b)((function(e){return{security:e.security}}))(ie),me=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).onChange=e.onChange.bind(Object(I.a)(e)),e.onSubmit=e.onSubmit.bind(Object(I.a)(e)),e.state={username:"",fullName:"",password:"",confirmPassword:"",errors:{}},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"onChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,fullName:this.state.fullName,password:this.state.password,confirmPassword:this.state.confirmPassword};this.props.createNewUser(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),n.a.createElement("p",{className:"lead text-center"},"Create your Account"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg",{"is-invalid":e.fullName}),placeholder:"Full Name",name:"fullName",value:this.state.fullName,onChange:this.onChange}),e.fullName&&n.a.createElement("div",{className:"invalid-feedback"},e.fullName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:A()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address (Username)",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:A()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:A()("form-control form-control-lg",{"is-invalid":e.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange}),e.confirmPassword&&n.a.createElement("div",{className:"invalid-feedback"},e.confirmPassword)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.errors!==t.prevErrors)return{errors:e.errors}}}]),t}(r.Component),ue=Object(h.b)((function(e){return{security:e.security,errors:e.errors}}),{createNewUser:function(e,t){return function(){var a=Object(b.a)(f.a.mark((function a(r){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j.a.post("/api/users/register",e);case 3:t.push("/login"),r({type:g,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:g,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})(me),pe=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).onChange=e.onChange.bind(Object(I.a)(e)),e.onSubmit=e.onSubmit.bind(Object(I.a)(e)),e.state={username:"",password:"",errors:{}},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"onChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};this.props.login(t)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Log In"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:A()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:A()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.security.validToken?e.history.push("/dashboard"):e.errors!==t.prevErrors?{errors:e.errors}:void 0}}]),t}(r.Component),de=Object(h.b)((function(e){return{security:e.security,errors:e.errors}}),{login:function(e){return function(){var t=Object(b.a)(f.a.mark((function t(a){var r,n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.post("/api/users/login",e);case 3:r=t.sent,n=r.data.token,localStorage.setItem("jwtToken",n),w(n),c=_()(n),a({type:"SET_CURRENT_USER",payload:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:g,payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})(pe),he=a(45),ve=Object(h.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,r=Object(he.a)(e,["component","security"]);return n.a.createElement(i.b,Object.assign({},r,{render:function(e){return!0===a.validToken?n.a.createElement(t,e):n.a.createElement(i.a,{to:"/login"})}}))})),fe=localStorage.jwtToken;if(fe){w(fe);var be=_()(fe);Y.dispatch({type:"SET_CURRENT_USER",payload:be});var Ee=Date.now()/1e3;be.exp<Ee&&(Y.dispatch(P()),window.location.href="/")}var je=function(){return n.a.createElement(h.a,{store:Y},n.a.createElement(s.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(T,null),n.a.createElement(i.b,{exact:!0,path:"/",component:le}),n.a.createElement(i.b,{exact:!0,path:"/register",component:ue}),n.a.createElement(i.b,{exact:!0,path:"/login",component:de}),n.a.createElement(i.d,null,n.a.createElement(ve,{exact:!0,path:"/dashboard",component:C}),n.a.createElement(ve,{exact:!0,path:"/addProject",component:B}),n.a.createElement(ve,{exact:!0,path:"/updateProject/:id",component:Q}),n.a.createElement(ve,{exact:!0,path:"/projectBoard/:id",component:re}),n.a.createElement(ve,{exact:!0,path:"/addProjectTask/:id",component:ce}),n.a.createElement(ve,{exact:!0,path:"/updateProjectTask/:project_identifier/:project_sequence",component:se})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.ef794e1d.chunk.js.map