(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){},35:function(e,t,a){e.exports=a(71)},40:function(e,t,a){},62:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),i=a.n(o),s=(a(23),a(40),a(24),a(12)),c=a(13),l=a(18),m=a.n(l),u=a(32),h=a(3),d=a(4),p=a(7),b=a(5),f=a(6),v=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Dance Practice!")}}]),t}(n.Component),k=a(2),g=a(14),E=a.n(g),y=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).enterEditMode=function(e){e.preventDefault(),a.setState({editMode:!0}),e.stopPropagation()},a.goToMarker=function(e){"btn btn-info"!==e.target.className&&"form-control"!==e.target.className&&a.props.vidReference.seekTo(a.props.timestamp)},a.state={label:"Marker at "+a.props.timestamp,editMode:!1,markedForDelete:!1},a.handleChange=a.handleChange.bind(Object(k.a)(Object(k.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(k.a)(Object(k.a)(a))),a.handleDelete=a.handleDelete.bind(Object(k.a)(Object(k.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.setState({label:this.props.label}),console.log("I'm a marker!!! My id is "+this.props.markerID)}},{key:"handleChange",value:function(e){this.setState({label:e.target.value}),e.stopPropagation()}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log('UPDATE markers SET title="'.concat(this.state.label,'" WHERE markerID="').concat(this.props.markerID,'";')),this.setState({editMode:!1}),E.a.post("/updatemarker",{cmd:'UPDATE markers SET title="'.concat(this.state.label,'" WHERE markerID="').concat(this.props.markerID,'";')}).then(function(e){console.log(e)}).catch(function(e){console.error(e)}),e.stopPropagation()}},{key:"captureclick",value:function(e){e.stopPropagation()}},{key:"doNothing",value:function(e){e.stopPropagation()}},{key:"handleDelete",value:function(e){e.preventDefault(),console.log("AAAAAAAAAAAAA!!!!!"),console.log("/remove/".concat(this.props.markerID)),console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!!!"),this.setState({markedForDelete:!0}),E.a.post("/remove/".concat(this.props.markerID)).then(function(e){console.log(e)}).catch(function(e){console.error(e)})}},{key:"render",value:function(){return this.state.markedForDelete?r.a.createElement("li",{className:"list-group-item list-group-item-danger"},r.a.createElement("p",{className:"text-center",style:{display:"inline-block"}},"Click the Reload List button to remove")):this.state.editMode?r.a.createElement("li",{className:"list-group-item list-group-item-primary",onClick:this.goToMarker},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:"btn btn-info",style:{display:"inline-block",float:"right"},onClick:this.captureclick},"Rename"),r.a.createElement("div",{className:"col-sm-4 col-offset-sm-4"},r.a.createElement("input",{className:"form-control",style:{display:"inline-block",float:"left"},id:"new-label",default:this.state.label,onChange:this.handleChange,value:this.state.label,onClick:this.captureclick})))):(console.log("I am a marker on video "+this.props.videoID),r.a.createElement("li",{className:"list-group-item list-group-item-primary",onClick:this.goToMarker},r.a.createElement("button",{className:"btn btn-info",style:{display:"inline-block",float:"right"},onClick:this.enterEditMode},"Rename"),r.a.createElement("p",{className:"text-center",style:{display:"inline-block"}},this.state.label),r.a.createElement("p",{className:"btn btn-danger",style:{display:"inline-block",float:"left"},onClick:this.handleDelete},"Delete")))}}]),t}(n.Component),A=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"list-group"},this.props.items.map(function(t){return r.a.createElement(y,{key:t.markerID,timestamp:t.timestamp,vidID:t.videoID,vidReference:e.props.vidReference,markerID:t.markerID,label:t.title})}))}}]),t}(n.Component),O=(a(62),function(e){function t(e){var a;Object(h.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).shortref=function(){return"dancesong_"+a.props.short},a.youtube_url=function(e){return"https://www.youtube.com/embed/"+e+"?enablejsapi=1"};var n=document.createElement("script");n.id="iframe-test",n.src="https://www.youtube.com/iframe_api";var r=document.getElementsByTagName("script")[0];return r.parentNode.insertBefore(n,r),a.state={items:[],danceVid:"VIDEO NOT SET",counter:0},a.handleSubmit=a.handleSubmit.bind(Object(k.a)(Object(k.a)(a))),a.setCorrectVid=a.setCorrectVid.bind(Object(k.a)(Object(k.a)(a))),a.refreshList=a.refreshList.bind(Object(k.a)(Object(k.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/song/".concat(this.props.video_id)).then(function(t){var a=t.data;console.log("Got markers!"),console.log(a),e.setState({items:a})}).catch(function(e){console.error(e)})}},{key:"handleSubmit",value:function(e){console.log(this.state.danceVid),e.preventDefault();var t={timestamp:this.state.danceVid.getCurrentTime(),markerID:"M"+Date.now(),videoID:this.props.video_id,title:"Marker at "+this.state.danceVid.getCurrentTime()};console.log(t),this.setState(function(e){return{items:e.items.concat(t)}}),E.a.post("/pushmarker",t).then(function(e){console.log(e)}).catch(function(e){console.error(e)})}},{key:"refreshList",value:function(e){var t=this;e.preventDefault(),console.log("A refresh was requested"),E.a.get("/song/".concat(this.props.video_id)).then(function(e){var a=e.data;console.log(a),t.setState({items:a})}).catch(function(e){console.error(e)})}},{key:"setCorrectVid",value:function(){this.YT=window.YT,this.reframed=!1,this.danceVid=new window.YT.Player(this.shortref()),this.setState({danceVid:this.danceVid}),console.log("SCV mounted")}},{key:"render",value:function(){return r.a.createElement("div",{id:"video-player-container"},r.a.createElement("h5",null,"Your player code is: ",this.props.short),r.a.createElement("iframe",{id:this.shortref(),ref:this.shortref(),title:this.props.songtitle,width:this.props.vid_width,height:this.props.vid_height,src:this.youtube_url(this.props.video_id),frameBorder:"0",onLoad:this.setCorrectVid}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add a Marker Here")),r.a.createElement("h3",null,"Markers"),r.a.createElement("div",{className:"row marker-list"},r.a.createElement("div",{style:{width:"50vw"}},r.a.createElement(A,{items:this.state.items,vidReference:this.state.danceVid}))),r.a.createElement("form",{onSubmit:this.refreshList},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Reload List")))}}]),t}(n.Component)),j=(n.Component,function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).callBackendAPI=Object(u.a)(m.a.mark(function e(){var t,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/express_backend");case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}throw Error(a.message);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}},e)})),a.state={songtitle:"Yes or Yes",song_id:"Nl4BJ2TDmWE",data:"The server failed to connect"},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.callBackendAPI().then(function(t){return e.setState({data:t.express})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Pick a song to begin"),r.a.createElement("p",null,this.state.data))}}]),t}(n.Component)),w=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={items:[],vidName:null,vidSet:!1},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return 0==this.state.vidSet?r.a.createElement("div",{className:"phone-menu"},r.a.createElement("h1",null,"Smartphone Controller"),r.a.createElement("p",null,"Select a video to begin")):r.a.createElement("div",{className:"row marker-list"},r.a.createElement("div",{style:{width:"50vw"}},r.a.createElement(A,{items:this.state.items})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Welcome to DancePartner!"),r.a.createElement("ul",{className:"navbar"},r.a.createElement(s.b,{to:"/",className:"btn btn-primary"},"Home"),r.a.createElement(s.b,{to:"/twice",className:"btn btn-primary"},"Yes Or Yes - Twice"),r.a.createElement(s.b,{to:"/pentagon",className:"btn btn-primary"},"Shine - Pentagon"),r.a.createElement(s.b,{to:"/nct",className:"btn btn-primary"},"Boss - NCT U"),r.a.createElement(s.b,{to:"/mobile",className:"btn btn-primary"},"Phone Menu")),r.a.createElement(c.a,{exact:!0,path:"/",component:j}),r.a.createElement(c.a,{path:"/title",component:v}),r.a.createElement(c.a,{path:"/twice",render:function(){return r.a.createElement(O,{title:"Yes or Yes",video_id:"Nl4BJ2TDmWE",vid_width:640,vid_height:360,short:"yory"})}}),r.a.createElement(c.a,{path:"/pentagon",render:function(){return r.a.createElement(O,{title:"Shine",video_id:"6_v8n_zb5ak",vid_width:640,vid_height:360,short:"shine"})}}),r.a.createElement(c.a,{path:"/nct",render:function(){return r.a.createElement(O,{title:"Boss",video_id:"-7tSTUR7FG0",vid_width:640,vid_height:360,short:"nct"})}}),r.a.createElement(c.a,{path:"/mobile",component:w})));i.a.render(D,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.1d2e2ce1.chunk.js.map