import{S as Ot,i as qt,s as Nt,e as r,k as m,w as ee,t as a,N as St,c as l,d as o,m as f,a as n,x as te,h as s,b as c,P as Mt,G as t,g as d,y as oe,L as It,q as ae,o as se,B as re,v as Gt}from"../chunks/vendor-hf-doc-builder.js";import{I as Dt}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as it}from"../chunks/CodeBlock-hf-doc-builder.js";function Yt(dt){let y,le,b,w,Y,C,$e,L,xe,ne,p,ke,R,Ae,Ce,U,Te,Pe,ie,$,je,x,H,Me,De,Oe,de,T,ce,D,qe,he,P,me,g,Ne,k,Se,J,Ie,Ge,V,Ye,Le,fe,v,A,z,j,Re,B,Ue,ue,h,He,F,Je,Ve,W,ze,Be,K,Fe,We,Q,Ke,Qe,X,Xe,Ze,pe,M,ge,E,O,ct,et,q,ht,_e,_,tt,Z,ot,at,N,st,rt,ye;return C=new Dt({}),T=new it({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}}),P=new it({props:{code:`from huggingface_hub import notebook_login
notebook_login()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login
notebook_login()`}}),j=new Dt({}),M=new it({props:{code:`---
extra_gated_prompt: "You agree to not use the model to conduct experiments that cause harm to human subjects."
extra_gated_fields:
 Company: text
 Country: text
 I agree to use this model for non-commerical use ONLY: checkbox
---`,highlighted:`<span class="hljs-meta">---</span>
<span class="hljs-attr">extra_gated_prompt:</span> <span class="hljs-string">&quot;You agree to not use the model to conduct experiments that cause harm to human subjects.&quot;</span>
<span class="hljs-attr">extra_gated_fields:</span>
 <span class="hljs-attr">Company:</span> <span class="hljs-string">text</span>
 <span class="hljs-attr">Country:</span> <span class="hljs-string">text</span>
 <span class="hljs-attr">I agree to use this model for non-commerical use ONLY:</span> <span class="hljs-string">checkbox</span>
<span class="hljs-meta">---</span>`}}),{c(){y=r("meta"),le=m(),b=r("h1"),w=r("a"),Y=r("span"),ee(C.$$.fragment),$e=m(),L=r("span"),xe=a("Gated models"),ne=m(),p=r("p"),ke=a("To give model creators more control over how their models are used, the Hub allows users to enable "),R=r("strong"),Ae=a("User Access requests"),Ce=a(" through a model\u2019s "),U=r("strong"),Te=a("Settings"),Pe=a(" tab. Enabling this setting requires users to agree to share their contact information in order to access the model. The contact information is stored in a database, and model owners are able to download a copy of the user access report."),ie=m(),$=r("p"),je=a("Note that to download a gated model you\u2019ll need to be authenticated. You can log in by installing the "),x=r("a"),H=r("code"),Me=a("huggingface_hub"),De=a(" client library"),Oe=a(" and running the following in your terminal:"),de=m(),ee(T.$$.fragment),ce=m(),D=r("p"),qe=a("If you\u2019re using a Jupyter or Colaboratory notebook, log in with the following Python command"),he=m(),ee(P.$$.fragment),me=m(),g=r("p"),Ne=a("Then, ensure that your library uses the token. For example, if using \u{1F917} Transformers "),k=r("a"),Se=a("you\u2019ll need to pass "),J=r("code"),Ie=a("use_auth_token=True"),Ge=a(" when calling "),V=r("code"),Ye=a(".from_pretrained()"),Le=a("."),fe=m(),v=r("h2"),A=r("a"),z=r("span"),ee(j.$$.fragment),Re=m(),B=r("span"),Ue=a("Modifying the prompt"),ue=m(),h=r("p"),He=a("The User Access request dialog can be modified to include additional text and checkbox fields in the prompt. To do this, add a YAML section to the model\u2019s "),F=r("code"),Je=a("README.md"),Ve=a(" file (create one if it does not already exist) and add an "),W=r("code"),ze=a("extra_gated_fields"),Be=a(" property. Within this property, you\u2019ll be able to add as many custom fields as you like and whether they are a "),K=r("code"),Fe=a("text"),We=a(" or "),Q=r("code"),Ke=a("checkbox"),Qe=a(" field. An "),X=r("code"),Xe=a("extra_gated_prompt"),Ze=a(" property can also be included to add a customized text message."),pe=m(),ee(M.$$.fragment),ge=m(),E=r("div"),O=r("img"),et=m(),q=r("img"),_e=m(),_=r("p"),tt=a("The "),Z=r("code"),ot=a("README.md"),at=a(" file for a model is called a "),N=r("a"),st=a("model Card"),rt=a(". Visit the documentation to learn more about how to use it and to see the properties that you can configure."),this.h()},l(e){const i=St('[data-svelte="svelte-1phssyn"]',document.head);y=l(i,"META",{name:!0,content:!0}),i.forEach(o),le=f(e),b=l(e,"H1",{class:!0});var be=n(b);w=l(be,"A",{id:!0,class:!0,href:!0});var mt=n(w);Y=l(mt,"SPAN",{});var ft=n(Y);te(C.$$.fragment,ft),ft.forEach(o),mt.forEach(o),$e=f(be),L=l(be,"SPAN",{});var ut=n(L);xe=s(ut,"Gated models"),ut.forEach(o),be.forEach(o),ne=f(e),p=l(e,"P",{});var S=n(p);ke=s(S,"To give model creators more control over how their models are used, the Hub allows users to enable "),R=l(S,"STRONG",{});var pt=n(R);Ae=s(pt,"User Access requests"),pt.forEach(o),Ce=s(S," through a model\u2019s "),U=l(S,"STRONG",{});var gt=n(U);Te=s(gt,"Settings"),gt.forEach(o),Pe=s(S," tab. Enabling this setting requires users to agree to share their contact information in order to access the model. The contact information is stored in a database, and model owners are able to download a copy of the user access report."),S.forEach(o),ie=f(e),$=l(e,"P",{});var ve=n($);je=s(ve,"Note that to download a gated model you\u2019ll need to be authenticated. You can log in by installing the "),x=l(ve,"A",{href:!0,rel:!0});var lt=n(x);H=l(lt,"CODE",{});var _t=n(H);Me=s(_t,"huggingface_hub"),_t.forEach(o),De=s(lt," client library"),lt.forEach(o),Oe=s(ve," and running the following in your terminal:"),ve.forEach(o),de=f(e),te(T.$$.fragment,e),ce=f(e),D=l(e,"P",{});var yt=n(D);qe=s(yt,"If you\u2019re using a Jupyter or Colaboratory notebook, log in with the following Python command"),yt.forEach(o),he=f(e),te(P.$$.fragment,e),me=f(e),g=l(e,"P",{});var I=n(g);Ne=s(I,"Then, ensure that your library uses the token. For example, if using \u{1F917} Transformers "),k=l(I,"A",{href:!0,rel:!0});var nt=n(k);Se=s(nt,"you\u2019ll need to pass "),J=l(nt,"CODE",{});var bt=n(J);Ie=s(bt,"use_auth_token=True"),bt.forEach(o),nt.forEach(o),Ge=s(I," when calling "),V=l(I,"CODE",{});var vt=n(V);Ye=s(vt,".from_pretrained()"),vt.forEach(o),Le=s(I,"."),I.forEach(o),fe=f(e),v=l(e,"H2",{class:!0});var Ee=n(v);A=l(Ee,"A",{id:!0,class:!0,href:!0});var Et=n(A);z=l(Et,"SPAN",{});var wt=n(z);te(j.$$.fragment,wt),wt.forEach(o),Et.forEach(o),Re=f(Ee),B=l(Ee,"SPAN",{});var $t=n(B);Ue=s($t,"Modifying the prompt"),$t.forEach(o),Ee.forEach(o),ue=f(e),h=l(e,"P",{});var u=n(h);He=s(u,"The User Access request dialog can be modified to include additional text and checkbox fields in the prompt. To do this, add a YAML section to the model\u2019s "),F=l(u,"CODE",{});var xt=n(F);Je=s(xt,"README.md"),xt.forEach(o),Ve=s(u," file (create one if it does not already exist) and add an "),W=l(u,"CODE",{});var kt=n(W);ze=s(kt,"extra_gated_fields"),kt.forEach(o),Be=s(u," property. Within this property, you\u2019ll be able to add as many custom fields as you like and whether they are a "),K=l(u,"CODE",{});var At=n(K);Fe=s(At,"text"),At.forEach(o),We=s(u," or "),Q=l(u,"CODE",{});var Ct=n(Q);Ke=s(Ct,"checkbox"),Ct.forEach(o),Qe=s(u," field. An "),X=l(u,"CODE",{});var Tt=n(X);Xe=s(Tt,"extra_gated_prompt"),Tt.forEach(o),Ze=s(u," property can also be included to add a customized text message."),u.forEach(o),pe=f(e),te(M.$$.fragment,e),ge=f(e),E=l(e,"DIV",{class:!0});var we=n(E);O=l(we,"IMG",{class:!0,src:!0}),et=f(we),q=l(we,"IMG",{class:!0,src:!0}),we.forEach(o),_e=f(e),_=l(e,"P",{});var G=n(_);tt=s(G,"The "),Z=l(G,"CODE",{});var Pt=n(Z);ot=s(Pt,"README.md"),Pt.forEach(o),at=s(G," file for a model is called a "),N=l(G,"A",{href:!0});var jt=n(N);st=s(jt,"model Card"),jt.forEach(o),rt=s(G,". Visit the documentation to learn more about how to use it and to see the properties that you can configure."),G.forEach(o),this.h()},h(){c(y,"name","hf:doc:metadata"),c(y,"content",JSON.stringify(Lt)),c(w,"id","gated-models"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#gated-models"),c(b,"class","relative group"),c(x,"href","https://huggingface.co/docs/huggingface_hub/index"),c(x,"rel","nofollow"),c(k,"href","https://huggingface.co/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained"),c(k,"rel","nofollow"),c(A,"id","modifying-the-prompt"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#modifying-the-prompt"),c(v,"class","relative group"),c(O,"class","block dark:hidden"),Mt(O.src,ct="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/models-gated.png")||c(O,"src",ct),c(q,"class","hidden dark:block"),Mt(q.src,ht="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/models-gated-dark.png")||c(q,"src",ht),c(E,"class","flex justify-center"),c(N,"href","./models-cards")},m(e,i){t(document.head,y),d(e,le,i),d(e,b,i),t(b,w),t(w,Y),oe(C,Y,null),t(b,$e),t(b,L),t(L,xe),d(e,ne,i),d(e,p,i),t(p,ke),t(p,R),t(R,Ae),t(p,Ce),t(p,U),t(U,Te),t(p,Pe),d(e,ie,i),d(e,$,i),t($,je),t($,x),t(x,H),t(H,Me),t(x,De),t($,Oe),d(e,de,i),oe(T,e,i),d(e,ce,i),d(e,D,i),t(D,qe),d(e,he,i),oe(P,e,i),d(e,me,i),d(e,g,i),t(g,Ne),t(g,k),t(k,Se),t(k,J),t(J,Ie),t(g,Ge),t(g,V),t(V,Ye),t(g,Le),d(e,fe,i),d(e,v,i),t(v,A),t(A,z),oe(j,z,null),t(v,Re),t(v,B),t(B,Ue),d(e,ue,i),d(e,h,i),t(h,He),t(h,F),t(F,Je),t(h,Ve),t(h,W),t(W,ze),t(h,Be),t(h,K),t(K,Fe),t(h,We),t(h,Q),t(Q,Ke),t(h,Qe),t(h,X),t(X,Xe),t(h,Ze),d(e,pe,i),oe(M,e,i),d(e,ge,i),d(e,E,i),t(E,O),t(E,et),t(E,q),d(e,_e,i),d(e,_,i),t(_,tt),t(_,Z),t(Z,ot),t(_,at),t(_,N),t(N,st),t(_,rt),ye=!0},p:It,i(e){ye||(ae(C.$$.fragment,e),ae(T.$$.fragment,e),ae(P.$$.fragment,e),ae(j.$$.fragment,e),ae(M.$$.fragment,e),ye=!0)},o(e){se(C.$$.fragment,e),se(T.$$.fragment,e),se(P.$$.fragment,e),se(j.$$.fragment,e),se(M.$$.fragment,e),ye=!1},d(e){o(y),e&&o(le),e&&o(b),re(C),e&&o(ne),e&&o(p),e&&o(ie),e&&o($),e&&o(de),re(T,e),e&&o(ce),e&&o(D),e&&o(he),re(P,e),e&&o(me),e&&o(g),e&&o(fe),e&&o(v),re(j),e&&o(ue),e&&o(h),e&&o(pe),re(M,e),e&&o(ge),e&&o(E),e&&o(_e),e&&o(_)}}}const Lt={local:"gated-models",sections:[{local:"modifying-the-prompt",title:"Modifying the prompt "}],title:"Gated models"};function Rt(dt){return Gt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Vt extends Ot{constructor(y){super();qt(this,y,Rt,Yt,Nt,{})}}export{Vt as default,Lt as metadata};
