"use strict";(self.webpackChunkAngularSPA=self.webpackChunkAngularSPA||[]).push([[125],{2125:(F,m,n)=>{n.r(m),n.d(m,{RegisterModule:()=>R});var u=n(6895),d=n(7163),s=n(433);class c{constructor(o,r,i){this.username=o,this.email=r,this.password=i}}var p=n(2340),g=n(5983),e=n(1571),f=n(6858),h=n(7185);function b(t,o){1&t&&(e.TgZ(0,"div",13),e._uU(1," Register form is not valid. "),e.qZA())}function v(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(l){e.CHM(r);const a=e.oxw();return e.KtG(a.handleFormSubmit(l))})("keydown",function(l){e.CHM(r);const a=e.oxw();return e.KtG(a.handleEnterPress(l))}),e._uU(1,"Submit"),e.qZA()}}function Z(t,o){1&t&&(e.TgZ(0,"div",15)(1,"span",16),e._uU(2,"Loading..."),e.qZA()())}const C=[{path:"",component:(()=>{class t{constructor(r,i,l){this.formBuilder=r,this.http=i,this.toastr=l,this.apiUrl=p.N.apiUrl+"UserRegister",this.isFormValid=!1,this.isSubmitClicked=!1,this.registerForm=this.formBuilder.group({email:["",[s.kI.required,s.kI.email]],username:["",[s.kI.required,s.kI.minLength(6)]],password:["",[s.kI.required,g.ym]]})}ngOnInit(){}handleFormSubmit(r){!this.isSubmitClicked&&this.registerForm.valid?(this.isSubmitClicked=!0,this.isFormValid=!0,this.http.post(this.apiUrl,this.createFormObject()).subscribe(i=>{this.toastr.success("",i.message),this.registerForm.reset(),this.isSubmitClicked=!1},i=>{console.error(i),this.toastr.error("",i.error.error),this.isSubmitClicked=!1})):this.isFormValid=!1}handleEnterPress(r){13===r.keyCode&&this.handleFormSubmit(r)}createFormObject(){return new c(this.registerForm.value.username,this.registerForm.value.email,this.registerForm.value.password)}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(s.qu),e.Y36(f.O),e.Y36(h._W))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],decls:26,vars:4,consts:[[1,"row"],[1,"col"],[3,"formGroup","keydown"],[1,"mb-3"],["for","email-input",1,"form-label"],["type","email","id","email-input","aria-describedby","emailHelp","formControlName","email",1,"form-control"],["for","username-input",1,"form-label"],["type","email","id","username-input","aria-describedby","usernameHelp","formControlName","username",1,"form-control"],["for","password-input",1,"form-label"],["type","password","id","password-input","formControlName","password",1,"form-control"],["class","alert alert-danger","role","alert",4,"ngIf"],["type","button","class","btn btn-primary",3,"click","keydown",4,"ngIf"],["class","spinner-border text-primary","role","status",4,"ngIf"],["role","alert",1,"alert","alert-danger"],["type","button",1,"btn","btn-primary",3,"click","keydown"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.TgZ(2,"div",1)(3,"h2"),e._uU(4,"Register"),e.qZA()(),e._UZ(5,"div",1),e.qZA(),e.TgZ(6,"div",0),e._UZ(7,"div",1),e.TgZ(8,"div",1)(9,"form",2),e.NdJ("keydown",function(a){return i.handleEnterPress(a)}),e.TgZ(10,"div",3)(11,"label",4),e._uU(12,"Email"),e.qZA(),e._UZ(13,"input",5),e.qZA(),e.TgZ(14,"div",3)(15,"label",6),e._uU(16,"Username"),e.qZA(),e._UZ(17,"input",7),e.qZA(),e.TgZ(18,"div",3)(19,"label",8),e._uU(20,"Password"),e.qZA(),e._UZ(21,"input",9),e.qZA(),e.YNc(22,b,2,0,"div",10),e.YNc(23,v,2,0,"button",11),e.YNc(24,Z,3,0,"div",12),e.qZA()(),e._UZ(25,"div",1),e.qZA()),2&r&&(e.xp6(9),e.Q6J("formGroup",i.registerForm),e.xp6(13),e.Q6J("ngIf",i.isSubmitClicked&&!i.isFormValid),e.xp6(1),e.Q6J("ngIf",!i.isSubmitClicked),e.xp6(1),e.Q6J("ngIf",i.isSubmitClicked))},dependencies:[u.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(C),d.Bz]}),t})(),R=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,y,s.UX]}),t})()}}]);