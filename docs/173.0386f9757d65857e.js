"use strict";(self.webpackChunkpizza=self.webpackChunkpizza||[]).push([[173],{9173:(z,l,i)=>{i.r(l),i.d(l,{ProductsModule:()=>S});var s=i(6814),d=i(266),v=i(9397),t=i(5879),m=i(7942),h=i(7422),P=i(9862);let p=(()=>{var o;class n{constructor(){this.title=""}toUpper(){return this.title.toUpperCase()}toLower(){return this.title.toLowerCase()}}return(o=n).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["custom-title"]],inputs:{title:"title"},decls:2,vars:1,consts:[[1,"product-title"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t._uU(1),t.qZA()),2&e&&(t.xp6(1),t.Oqu(r.title))},styles:[".product-title[_ngcontent-%COMP%]{font-size:18px;font-family:MullerBold,sans-serif;color:#382400}"]}),n})(),g=(()=>{var o;class n{constructor(){this.count=0}}return(o=n).\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),n})(),f=(()=>{var o;class n{transform(e,r){let c=e;return r.forEach(a=>{c=c.replace(new RegExp("[\u0410-\u042f\u0430-\u044f]*"+a+"[\u0430-\u044f]*","g"),Y=>Y.toUpperCase())}),c}}return(o=n).\u0275fac=function(e){return new(e||o)},o.\u0275pipe=t.Yjl({name:"wordUpper",type:o,pure:!0}),n})();const x=["elem"];function _(o,n){if(1&o&&(t.TgZ(0,"div",8),t._UZ(1,"img",9),t.qZA()),2&o){const u=t.oxw();t.xp6(1),t.s9C("src",u.product.image,t.LSH)}}const T=function(){return["\u0441\u044b\u0440","\u0442\u043e\u043c\u0430\u0442","\u0441\u043e\u0441"]},Z=function(o){return{product:o}},y=function(o){return["/products",o]};let M=(()=>{var o;class n{constructor(e){this.cartProductService=e,this.addToCartEvent=new t.vpe,this.product={id:0,image:"",title:"",description:"",datetime:""}}addProductToCart(){this.addToCartEvent.emit(this.titleComponent.title),this.cartProductService.count++}}return(o=n).\u0275fac=function(e){return new(e||o)(t.Y36(g))},o.\u0275cmp=t.Xpm({type:o,selectors:[["product-card"]],viewQuery:function(e,r){if(1&e&&(t.Gf(p,5),t.Gf(x,5)),2&e){let c;t.iGM(c=t.CRH())&&(r.titleComponent=c.first),t.iGM(c=t.CRH())&&(r.elem=c.first)}},inputs:{product:"product"},outputs:{addToCartEvent:"addToCartEvent"},features:[t._Bn([g])],decls:13,vars:15,consts:[[1,"product"],[3,"ngIf"],[3,"title"],[1,"product-text"],[1,"product-action"],["elem",""],["routerLink","/order",1,"btn","btn-add-to-cart",3,"queryParams"],[1,"btn","btn-white",3,"routerLink"],[1,"product-image"],[3,"src"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t.YNc(1,_,2,1,"ng-template",1),t._UZ(2,"custom-title",2),t.ALo(3,"uppercase"),t.TgZ(4,"div",3),t._uU(5),t.ALo(6,"wordUpper"),t.qZA(),t.TgZ(7,"div",4,5)(9,"a",6),t._uU(10,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),t.qZA(),t.TgZ(11,"a",7),t._uU(12,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",r.product.image),t.xp6(1),t.Q6J("title",t.lcZ(3,5,r.product.title)),t.xp6(3),t.Oqu(t.xi3(6,7,r.product.description,t.DdM(10,T))),t.xp6(4),t.Q6J("queryParams",t.VKq(11,Z,r.product.title)),t.xp6(2),t.Q6J("routerLink",t.VKq(13,y,r.product.id)))},dependencies:[s.O5,d.rH,p,s.gd,f],styles:['@charset "UTF-8";.product[_ngcontent-%COMP%]{width:282px;background-color:#fff;box-shadow:0 3px 13.8px 1.2px #98989833;text-align:center;padding:15px 20px;box-sizing:border-box;margin-top:24px}.product-image[_ngcontent-%COMP%]{height:179px;display:flex;align-items:center;justify-content:center}.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.product-text[_ngcontent-%COMP%]{font-size:14px;color:#181a1a;line-height:1.286;height:49px;margin:14px 0 15px}.product-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:242px;height:50px;padding:17px}.product-action[_ngcontent-%COMP%]{display:flex;flex-direction:column}.product-action[_ngcontent-%COMP%]   .btn.btn-white[_ngcontent-%COMP%]{margin-top:10px}@media screen and (max-width: 1229px){.product[_ngcontent-%COMP%]{margin:12px}}']}),n})();function O(o,n){if(1&o){const u=t.EpF();t.TgZ(0,"product-card",6),t.NdJ("addToCartEvent",function(r){t.CHM(u);const c=t.oxw();return t.KtG(c.addToCart(r))}),t.qZA()}2&o&&t.Q6J("product",n.$implicit)}function E(o,n){1&o&&(t.TgZ(0,"div",7),t._UZ(1,"div",8),t.qZA())}function b(o,n){if(1&o&&(t.TgZ(0,"div",10),t._UZ(1,"img",11),t.qZA()),2&o){const u=t.oxw();t.xp6(1),t.s9C("src",u.product.image,t.LSH)}}const A=function(){return["\u0441\u044b\u0440","\u0442\u043e\u043c\u0430\u0442","\u0441\u043e\u0441"]},w=function(o){return{product:o}},F=[{path:"",component:(()=>{var o;class n{constructor(e,r,c,a){this.productService=e,this.cartService=r,this.router=c,this.http=a,this.products=[],this.subscriptionProducts=null,this.loading=!1}ngOnInit(){this.loading=!0,this.subscriptionProducts=this.productService.getProducts().pipe((0,v.b)(()=>{this.loading=!1})).subscribe({next:e=>{this.products=e,console.log("next")},error:e=>{console.log(e),this.router.navigate(["/"])}})}ngOnDestroy(){this.subscriptionProducts?.unsubscribe()}addToCart(e){this.cartService.product=e,this.router.navigate(["/order"],{queryParams:{product:e}})}}return(o=n).\u0275fac=function(e){return new(e||o)(t.Y36(m.M),t.Y36(h.N),t.Y36(d.F0),t.Y36(P.eN))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:7,vars:2,consts:[["id","products",1,"products"],[1,"container"],["id","products-title",1,"products-title"],[1,"products-items"],[3,"product","addToCartEvent",4,"ngFor","ngForOf"],["class","loader-bg",4,"ngIf"],[3,"product","addToCartEvent"],[1,"loader-bg"],[1,"loader"]],template:function(e,r){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),t._uU(3,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043b\u044e\u0431\u0438\u043c\u0443\u044e \u043f\u0438\u0446\u0446\u0443"),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,O,1,1,"product-card",4),t.qZA(),t.YNc(6,E,2,0,"div",5),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",r.products),t.xp6(1),t.Q6J("ngIf",r.loading))},dependencies:[s.sg,s.O5,M]}),n})()},{path:":id",component:(()=>{var o;class n{constructor(e,r,c){this.activatedRoute=e,this.productService=r,this.router=c,this.product={id:0,image:"",title:"",description:"",datetime:""}}ngOnInit(){this.activatedRoute.params.subscribe(e=>{e.id&&this.productService.getProduct(+e.id).subscribe({next:r=>{this.product=r},error:r=>{this.router.navigate(["/"])}})})}}return(o=n).\u0275fac=function(e){return new(e||o)(t.Y36(d.gz),t.Y36(m.M),t.Y36(d.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product"]],decls:15,vars:12,consts:[[1,"products"],[1,"container"],[1,"products-title"],[1,"product-item"],[3,"ngIf"],[3,"title"],[1,"product-text"],[1,"product-action"],["elem",""],["routerLink","/order",1,"btn","btn-add-to-cart",3,"queryParams"],[1,"product-image"],[3,"src"]],template:function(e,r){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),t._uU(3,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0438\u0446\u0446\u044b"),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,b,2,1,"ng-template",4),t._UZ(6,"custom-title",5),t.ALo(7,"uppercase"),t.TgZ(8,"div",6),t._uU(9),t.ALo(10,"wordUpper"),t.qZA(),t.TgZ(11,"div",7,8)(13,"a",9),t._uU(14,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),t.qZA()()()()()),2&e&&(t.xp6(5),t.Q6J("ngIf",r.product.image),t.xp6(1),t.Q6J("title",t.lcZ(7,4,r.product.title)),t.xp6(3),t.Oqu(t.xi3(10,6,r.product.description,t.DdM(9,A))),t.xp6(4),t.Q6J("queryParams",t.VKq(10,w,r.product.title)))},dependencies:[s.O5,p,d.rH,s.gd,f],styles:[".product-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.product-item[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block;margin-top:10px}"]}),n})()}];let C=(()=>{var o;class n{}return(o=n).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(F),d.Bz]}),n})();var q=i(6208);let S=(()=>{var o;class n{}return(o=n).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,q.m,d.Bz,C,C]}),n})()}}]);