"use strict";(self.webpackChunkAngularSPA=self.webpackChunkAngularSPA||[]).push([[859],{9859:(C,m,o)=>{o.r(m),o.d(m,{HomeModule:()=>H});var u=o(6895),i=o(7163),r=o(1571),p=o(2340);let h=(()=>{class t{constructor(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=o(6858),a=o(2371);function n(t,c){if(1&t&&(r.TgZ(0,"div")(1,"h3"),r._uU(2,"Our Last 25 Executed Methods"),r.qZA(),r._UZ(3,"div",1),r.qZA()),2&t){const e=r.oxw();r.xp6(3),r.Q6J("options",e.chartOption)}}let M=(()=>{class t{constructor(e,s){this.formatter=e,this.http=s,this.canDisplay=!1}ngOnInit(){this.getBenchMarkData()}getBenchMarkData(){this.http.get(p.N.apiUrl+"UIData/GetHomeBenchmarkData").subscribe(e=>{this.createLast25RequestChart(e)},e=>{})}createLast25RequestChart(e){let s=[],v=[];for(let d=0;d<e.data.length;d++)if(!s.includes(e.data[d].details.method)){s.push(e.data[d].details.method);let g=0;for(let f=0;f<e.data.length;f++)e.data[f].details.method===e.data[d].details.method&&g++;v.push(g)}this.chartOption={xAxis:{type:"category",data:s,z:2},yAxis:{type:"value"},series:[{data:v,type:"bar"}]},this.canDisplay=!0}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(h),r.Y36(l.O))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-benchmark-method-chart"]],decls:1,vars:1,consts:[[4,"ngIf"],["echarts","",1,"demo-chart",3,"options"]],template:function(e,s){1&e&&r.YNc(0,n,4,1,"div",0),2&e&&r.Q6J("ngIf",s.canDisplay)},dependencies:[u.O5,a._w]}),t})();const A=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-home"]],decls:3,vars:0,consts:[[1,"row"],[1,"col-12","text-center"]],template:function(e,s){1&e&&(r.TgZ(0,"div",0)(1,"div",1),r._UZ(2,"app-benchmark-method-chart"),r.qZA()())},dependencies:[M]}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[i.Bz.forChild(A),i.Bz]}),t})(),H=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[u.ez,y,a.Ns]}),t})()},6858:(C,m,o)=>{o.d(m,{O:()=>p});var u=o(529),i=o(1571),r=o(2611);let p=(()=>{class h{constructor(a,n){this.http=a,this.authGuard=n}get(a){return this.http.get(a)}getAuthenticated(a){return this.http.get(a,this.getAuthHeader())}post(a,n){return this.http.post(a,n)}postAuthenticated(a,n){return this.http.post(a,n,this.getAuthHeader())}put(a,n){return this.http.put(a,n)}putAuthenticated(a,n){return this.http.put(a,n,this.getAuthHeader())}delete(a,n){return this.http.delete(a,n)}getAuthHeader(){return{headers:(new u.WM).set("Authorization",`Bearer ${this.authGuard.getToken()}`)}}}return h.\u0275fac=function(a){return new(a||h)(i.LFG(u.eN),i.LFG(r.P))},h.\u0275prov=i.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()}}]);