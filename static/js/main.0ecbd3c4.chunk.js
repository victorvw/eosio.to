(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{262:function(e,t,a){"use strict";(function(e){var n=a(109),r=a(110),c=a(114),i=a(111),o=a(115),l=a(67),s=a.n(l),u=a(165),m=a(0),d=a.n(m),f=a(263),b=a(264),p=a.n(b),h=a(590),g=a(69),E=a(117),k=a(118),v=a(83),w=a(600),y=a(169),O=a(598),S=(a(324),a(325).SigningRequest),j=a(345)({httpEndpoint:"https://eos.greymass.com"}),x={abi:!1,action:"transfer",authorization:{actor:"............1",permission:"............1"},callback:{background:!1,url:""},contract:"eosio.token",decoded:{actions:[]},fields:{},fieldsMatchSigner:{},fieldsPromptSigner:{},loading:!1,uri:!1,uriError:!1,uriParts:[]},C=(a(142),a(451)),R={zlib:{deflateRaw:function(t){return new Uint8Array(C.deflateRawSync(e.from(t)))},inflateRaw:function(t){return new Uint8Array(C.inflateRawSync(e.from(t)))}},abiProvider:{getAbi:function(){var e=Object(u.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getAbi(t);case 2:return e.abrupt("return",e.sent.abi);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},A=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).clipboard=function(e){var t=a.refs[e].ref;t.select(),document.execCommand("copy"),t.focus()},a.decode=Object(u.a)(s.a.mark(function e(){var t,n,r,c,i,o,l,u,m,d,f,b,h,g,E=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=E.length>0&&void 0!==E[0]&&E[0],n=a.state.authorization,r=t,"eosio://"!==t.substring(0,8)&&(r=r.replace(":","://")),c=r.split("://"),console.log(c),i=S.from(r,R),e.next=9,i.getActions();case 9:return o=e.sent,e.next=12,j.getInfo(!0);case 12:return l=e.sent.head_block_num,e.next=15,j.getBlock(l);case 15:return u=e.sent,e.next=18,i.getTransaction(n,u);case 18:m=e.sent,d=i.data.callback.url,f=o[0],b={},h={},Object.keys(f.data).forEach(function(e){var t=f.data[e];"............2"===t&&(h[e]=!0),"............1"===t&&(b[e]=!0)}),g=a.refs.canvas,g.getContext("2d"),p.a.toCanvas(g,r,function(e){e&&console.error(e)}),window.location.replace("eosio://".concat(c[1])),a.setState({action:f.name,callback:{background:!1,url:d},contract:f.account,decoded:{actions:o,tx:m,callback:d},fields:Object.assign({},f.data),fieldsMatchSigner:b,fieldsPromptSigner:h,loading:!1,raw:i,uriParts:c});case 29:case"end":return e.stop()}},e,this)})),a.copyToClipboard=function(e){a.textArea.select(),document.execCommand("copy"),e.target.focus()},a.state=Object.assign({},x),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.decode,a=this.props.match;if(a&&a.params&&a.params.uri){var n="eosio:".concat(a.params.uri);this.setState({loading:!0,uri:n},function(){t(n)})}this.state.contract&&!this.state.abi&&j.getAbi(this.state.contract).then(function(t){e.setState({abi:t.abi})})}},{key:"componentWillUpdate",value:function(e,t){var a=this;if(this.state.contract!==t.contract&&j.getAbi(t.contract).then(function(e){console.log(e.abi),a.setState({abi:e.abi})}),this.state.action&&this.state.action!==t.action){var n=t.abi,r=t.action,c=n.structs,i=Object(f.find)(c,{name:r});if(i){var o=i.fields,l={};o.forEach(function(e){l[e.name]=""}),this.setState({uri:void 0,fields:l})}}}},{key:"render",value:function(){var e=this,t=this.state,a=(t.abi,t.action,t.contract,t.decoded),n=(t.fieldsMatchSigner,t.fieldsPromptSigner,t.loading),r=(t.raw,t.uri),c=(t.uriError,t.uriParts),i=a.actions;a.tx,a.callback;return d.a.createElement(h.a,{className:"App",style:{paddingTop:"1em"}},d.a.createElement(g.a,{basic:!0,loading:n},d.a.createElement(E.a,null,d.a.createElement(E.a.Row,null,d.a.createElement(E.a.Column,{width:10},d.a.createElement(g.a,{color:"green"},d.a.createElement(k.a,{size:"large"},"A Signing Request has been triggered.",d.a.createElement(k.a.Subheader,null,"Not working? Make sure you have an EEP-6 compatible wallet installed."))),d.a.createElement(g.a,null,"This signing request contains ",i.length," action(s)."),i.map(function(e){return d.a.createElement(v.a,{definition:!0},d.a.createElement(v.a.Body,null,Object.keys(e).map(function(t){return d.a.createElement(v.a.Row,null,d.a.createElement(v.a.Cell,null,t),d.a.createElement(v.a.Cell,null,d.a.createElement("pre",null,JSON.stringify(e[t],null,2))))})))})),d.a.createElement(E.a.Column,{width:6},d.a.createElement(k.a,null,"QR Code"),d.a.createElement("canvas",{ref:"canvas"}),d.a.createElement(k.a,null,"Links"),d.a.createElement(g.a,{basic:!0},d.a.createElement(w.a,{as:"a",content:"Edit in URI Builder",color:"green",href:"https://greymass.github.io/eosio.to/".concat(c[1])})),d.a.createElement(y.a,null,d.a.createElement(g.a,{secondary:!0},d.a.createElement(y.a.Field,null,d.a.createElement("label",null,"EOSIO URI Link"),d.a.createElement(O.a,{ref:"uriLink",value:r})),d.a.createElement(w.a,{as:"a",content:"Trigger",color:"blue",href:"eosio://".concat(c[1]),size:"small"}),d.a.createElement(w.a,{as:"a",color:"blue",icon:"clipboard",onClick:function(){return e.clipboard("uriLink")},size:"small"})),d.a.createElement(g.a,{secondary:!0},d.a.createElement(y.a.Field,null,d.a.createElement("label",null,"HTTPS Link (EOSIO URI via redirection)"),d.a.createElement(O.a,{ref:"httpsLink",value:"".concat("http://eosio.to/").concat(c[1])})),d.a.createElement(w.a,{as:"a",content:"Trigger",color:"blue",href:"/".concat(c[1]),size:"small"}),d.a.createElement(w.a,{as:"a",color:"blue",icon:"clipboard",onClick:function(){return e.clipboard("httpsLink")},size:"small"}))))))))}}]),t}(m.Component);t.a=A}).call(this,a(16).Buffer)},294:function(e,t,a){e.exports=a(589)},387:function(e,t){},389:function(e,t){},420:function(e,t){},584:function(e,t,a){},589:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(65),i=a.n(c),o=a(109),l=a(110),s=a(114),u=a(111),m=a(115),d=a(599),f=a(601),b=a(262),p=(a(584),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(f.a,{exact:!0,path:"/:uri",component:b.a})))}}]),t}(n.Component));i.a.render(r.a.createElement(d.a,{basename:"/"},r.a.createElement(p,null)),document.getElementById("root"))}},[[294,2,1]]]);
//# sourceMappingURL=main.0ecbd3c4.chunk.js.map