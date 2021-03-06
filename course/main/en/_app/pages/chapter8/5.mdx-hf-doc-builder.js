import{S as Ea,i as Pa,s as ja,e as s,k as h,w as y,t as n,M as Ta,c as i,d as t,m as p,a as l,x as d,h as u,b as f,G as o,g as r,y as g,q as b,o as w,B as v,v as Aa}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ia}from"../../chunks/Tip-hf-doc-builder.js";import{Y as Ca}from"../../chunks/Youtube-hf-doc-builder.js";import{I as J}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as So}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as Ha}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function Na(Ye){let m,I;return{c(){m=s("p"),I=n("\u{1F6A8} Many issues in the \u{1F917} Transformers repository are unsolved because the data used to reproduce them is not accessible.")},l(c){m=i(c,"P",{});var k=l(m);I=u(k,"\u{1F6A8} Many issues in the \u{1F917} Transformers repository are unsolved because the data used to reproduce them is not accessible."),k.forEach(t)},m(c,k){r(c,m,k),o(m,I)},d(c){c&&t(m)}}}function Sa(Ye){let m,I,c,k,$e,z,Dt,_e,qt,Le,V,Je,C,Gt,B,Ut,Ft,ze,R,Ve,ue,Mt,Be,_,H,xe,K,Wt,Ee,Yt,Re,he,Lt,Ke,N,Qe,S,Jt,Pe,zt,Vt,Xe,pe,Bt,Ze,x,O,je,Q,Rt,Te,Kt,et,D,Qt,X,Xt,Zt,tt,q,eo,Z,to,oo,ot,E,G,Ae,ee,ao,Ie,so,at,fe,io,st,te,it,me,ro,rt,oe,lt,$,lo,Ce,no,uo,He,ho,po,nt,P,U,Ne,ae,fo,Se,mo,ut,F,co,Oe,yo,go,ht,ce,bo,pt,j,M,De,se,wo,qe,vo,ft,W,ko,Ge,$o,_o,mt,ie,ct,ye,xo,yt,de,Eo,dt,ge,Po,gt,T,Y,Ue,re,jo,Fe,To,bt,be,Ao,wt,A,L,Me,le,Io,We,Co,vt,we,Ho,kt,ve,No,$t;return z=new J({}),V=new Ha({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter8/section5.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter8/section5.ipynb"}]}}),R=new Ca({props:{id:"_PAli-V4wj0"}}),K=new J({}),N=new Ia({props:{$$slots:{default:[Na]},$$scope:{ctx:Ye}}}),Q=new J({}),ee=new J({}),te=new So({props:{code:"transformers-cli env",highlighted:'transformers-<span class="hljs-keyword">cli</span> env'}}),oe=new So({props:{code:"",highlighted:`<span class="hljs-keyword">Copy</span>-<span class="hljs-keyword">and</span>-paste the <span class="hljs-type">text</span> below <span class="hljs-keyword">in</span> your GitHub issue <span class="hljs-keyword">and</span> FILL <span class="hljs-keyword">OUT</span> the two last points.

- \`transformers\` <span class="hljs-keyword">version</span>: <span class="hljs-number">4.12</span><span class="hljs-number">.0</span>.dev0
- Platform: Linux<span class="hljs-number">-5.10</span><span class="hljs-number">.61</span><span class="hljs-number">-1</span>-MANJARO-x86_64-<span class="hljs-keyword">with</span>-arch-Manjaro-Linux
- Python <span class="hljs-keyword">version</span>: <span class="hljs-number">3.7</span><span class="hljs-number">.9</span>
- PyTorch version (GPU?): <span class="hljs-number">1.8</span><span class="hljs-number">.1</span>+cu111 (<span class="hljs-keyword">True</span>)
- Tensorflow version (GPU?): <span class="hljs-number">2.5</span><span class="hljs-number">.0</span> (<span class="hljs-keyword">True</span>)
- Flax version (CPU?/GPU?/TPU?): <span class="hljs-number">0.3</span><span class="hljs-number">.4</span> (cpu)
- Jax <span class="hljs-keyword">version</span>: <span class="hljs-number">0.2</span><span class="hljs-number">.13</span>
- JaxLib <span class="hljs-keyword">version</span>: <span class="hljs-number">0.1</span><span class="hljs-number">.65</span>
- <span class="hljs-keyword">Using</span> GPU <span class="hljs-keyword">in</span> script?: &lt;fill <span class="hljs-keyword">in</span>&gt;
- <span class="hljs-keyword">Using</span> distributed <span class="hljs-keyword">or</span> parallel <span class="hljs-keyword">set</span>-up <span class="hljs-keyword">in</span> script?: &lt;fill <span class="hljs-keyword">in</span>&gt;`}}),ae=new J({}),se=new J({}),ie=new So({props:{code:"```python",highlighted:"```python"}}),re=new J({}),le=new J({}),{c(){m=s("meta"),I=h(),c=s("h1"),k=s("a"),$e=s("span"),y(z.$$.fragment),Dt=h(),_e=s("span"),qt=n("How to write a good issue"),Le=h(),y(V.$$.fragment),Je=h(),C=s("p"),Gt=n("When you encounter something that doesn\u2019t seem right with one of the Hugging Face libraries, you should definitely let us know so we can fix it (the same goes for any open source library, for that matter). If you are not completely certain whether the bug lies in your own code or one of our libraries, the first place to check is the "),B=s("a"),Ut=n("forums"),Ft=n(". The community will help you figure this out, and the Hugging Face team also closely watches the discussions there."),ze=h(),y(R.$$.fragment),Ve=h(),ue=s("p"),Mt=n("When you are sure you have a bug in your hand, the first step is to build a minimal reproducible example."),Be=h(),_=s("h2"),H=s("a"),xe=s("span"),y(K.$$.fragment),Wt=h(),Ee=s("span"),Yt=n("Creating a minimal reproducible example"),Re=h(),he=s("p"),Lt=n("It\u2019s very important to isolate the piece of code that produces the bug, as no one in the Hugging Face team is a magician (yet), and they can\u2019t fix what they can\u2019t see. A minimal reproducible example should, as the name indicates, be reproducible. This means that it should not rely on any external files or data you may have. Try to replace the data you are using with some dummy values that look like your real ones and still produce the same error."),Ke=h(),y(N.$$.fragment),Qe=h(),S=s("p"),Jt=n("Once you have something that is self-contained, you can try to reduce it into even less lines of code, building what we call a "),Pe=s("em"),zt=n("minimal reproducible example"),Vt=n(". While this requires a bit more work on your side, you will almost be guaranteed to get help and a fix if you provide a nice, short bug reproducer."),Xe=h(),pe=s("p"),Bt=n("If you feel comfortable enough, go inspect the source code where your bug happens. You might find a solution to your problem (in which case you can even suggest a pull request to fix it), but more generally, this can help the maintainers better understand the source when they read your report."),Ze=h(),x=s("h2"),O=s("a"),je=s("span"),y(Q.$$.fragment),Rt=h(),Te=s("span"),Kt=n("Filling out the issue template"),et=h(),D=s("p"),Qt=n("When you file your issue, you will notice there is a template to fill out. We will follow the one for "),X=s("a"),Xt=n("\u{1F917} Transformers issues"),Zt=n(" here, but the same kind of information will be required if you report an issue in another repository. Don\u2019t leave the template blank: taking the time to fill it in will maximize your chances of getting an answer and solving your problem."),tt=h(),q=s("p"),eo=n("In general, when filing an issue, always stay courteous. This is an open source project, so you are using free software, and no one has any obligation to help you. You may include what you feel is justified criticism in your issue, but then the maintainers may very well take it badly and not be in a rush help you. Make sure you read the "),Z=s("a"),to=n("code of conduct"),oo=n(" of the project."),ot=h(),E=s("h3"),G=s("a"),Ae=s("span"),y(ee.$$.fragment),ao=h(),Ie=s("span"),so=n("Including your environment information"),at=h(),fe=s("p"),io=n("\u{1F917} Transformers provides a utility to get all the information we need about your environment. Just type the following in your terminal:"),st=h(),y(te.$$.fragment),it=h(),me=s("p"),ro=n("and you should get something like this:"),rt=h(),y(oe.$$.fragment),lt=h(),$=s("p"),lo=n("You can also add a "),Ce=s("code"),no=n("!"),uo=n(" at the beginning of the "),He=s("code"),ho=n("transformers-cli env"),po=n(" command to execute it from a notebook cell, and then copy and paste the result at the beginning of your issue."),nt=h(),P=s("h3"),U=s("a"),Ne=s("span"),y(ae.$$.fragment),fo=h(),Se=s("span"),mo=n("Tagging people"),ut=h(),F=s("p"),co=n("Tagging people by typing an "),Oe=s("code"),yo=n("@"),go=n(" followed by their GitHub handle will send them a notification so they will see your issue and might reply quicker. Use this with moderation, because the people you tag might not appreciate being notified if it\u2019s something they have no direct link to. If you have looked at the source files related to your bug, you should tag the last person that made changes at the line you think is responsible for your problem (you can find this information by looking at said line on GitHub, selecting it, then clicking \u201CView git blame\u201D)."),ht=h(),ce=s("p"),bo=n("Otherwise, the template offers suggestions of people to tag. In general, never tag more than three people!"),pt=h(),j=s("h3"),M=s("a"),De=s("span"),y(se.$$.fragment),wo=h(),qe=s("span"),vo=n("Including a reproducible example"),ft=h(),W=s("p"),ko=n("If you have managed to create a self-contained example that produces the bug, now is the time to include it! Type a line with three backticks followed by "),Ge=s("code"),$o=n("python"),_o=n(", like this:"),mt=h(),y(ie.$$.fragment),ct=h(),ye=s("p"),xo=n("then paste in your minimal reproducible example and type a new line with three backticks. This will ensure your code is properly formatted."),yt=h(),de=s("p"),Eo=n("If you didn\u2019t manage to create a reproducible example, explain in clear steps how you got to your issue. Include a link to a Google Colab notebook where you got the error if you can. The more information you share, the better able the maintainers will be to reply to you."),dt=h(),ge=s("p"),Po=n("In all cases, you should copy and paste the whole error message you are getting. If you\u2019re working in Colab, remember that some of the frames may be automatically collapsed in the stack trace, so make sure you expand them before copying. Like with the code sample, put that error message between two lines with three backticks, so it\u2019s properly formatted."),gt=h(),T=s("h3"),Y=s("a"),Ue=s("span"),y(re.$$.fragment),jo=h(),Fe=s("span"),To=n("Describing the expected behavior"),bt=h(),be=s("p"),Ao=n("Explain in a few lines what you expected to get, so that the maintainers get a full grasp of the problem. This part is generally pretty obvious, so it should fit in one sentence, but in some cases you may have a lot to say."),wt=h(),A=s("h2"),L=s("a"),Me=s("span"),y(le.$$.fragment),Io=h(),We=s("span"),Co=n("And then what?"),vt=h(),we=s("p"),Ho=n("Once your issue is filed, make sure to quickly check everything looks okay. You can edit the issue if you made a mistake, or even change its title if you realize the problem is different from what you initially thought."),kt=h(),ve=s("p"),No=n("There is no point pinging people if you don\u2019t get an answer. If no one helps you in a few days, it\u2019s likely that no one could make sense of your problem. Don\u2019t hesitate to go back to the reproducible example. Can you make it shorter and more to the point? If you don\u2019t get an answer in a week, you can leave a message gently asking for help, especially if you\u2019ve edited your issue to include more information on the problem."),this.h()},l(e){const a=Ta('[data-svelte="svelte-1phssyn"]',document.head);m=i(a,"META",{name:!0,content:!0}),a.forEach(t),I=p(e),c=i(e,"H1",{class:!0});var ne=l(c);k=i(ne,"A",{id:!0,class:!0,href:!0});var Oo=l(k);$e=i(Oo,"SPAN",{});var Do=l($e);d(z.$$.fragment,Do),Do.forEach(t),Oo.forEach(t),Dt=p(ne),_e=i(ne,"SPAN",{});var qo=l(_e);qt=u(qo,"How to write a good issue"),qo.forEach(t),ne.forEach(t),Le=p(e),d(V.$$.fragment,e),Je=p(e),C=i(e,"P",{});var _t=l(C);Gt=u(_t,"When you encounter something that doesn\u2019t seem right with one of the Hugging Face libraries, you should definitely let us know so we can fix it (the same goes for any open source library, for that matter). If you are not completely certain whether the bug lies in your own code or one of our libraries, the first place to check is the "),B=i(_t,"A",{href:!0,rel:!0});var Go=l(B);Ut=u(Go,"forums"),Go.forEach(t),Ft=u(_t,". The community will help you figure this out, and the Hugging Face team also closely watches the discussions there."),_t.forEach(t),ze=p(e),d(R.$$.fragment,e),Ve=p(e),ue=i(e,"P",{});var Uo=l(ue);Mt=u(Uo,"When you are sure you have a bug in your hand, the first step is to build a minimal reproducible example."),Uo.forEach(t),Be=p(e),_=i(e,"H2",{class:!0});var xt=l(_);H=i(xt,"A",{id:!0,class:!0,href:!0});var Fo=l(H);xe=i(Fo,"SPAN",{});var Mo=l(xe);d(K.$$.fragment,Mo),Mo.forEach(t),Fo.forEach(t),Wt=p(xt),Ee=i(xt,"SPAN",{});var Wo=l(Ee);Yt=u(Wo,"Creating a minimal reproducible example"),Wo.forEach(t),xt.forEach(t),Re=p(e),he=i(e,"P",{});var Yo=l(he);Lt=u(Yo,"It\u2019s very important to isolate the piece of code that produces the bug, as no one in the Hugging Face team is a magician (yet), and they can\u2019t fix what they can\u2019t see. A minimal reproducible example should, as the name indicates, be reproducible. This means that it should not rely on any external files or data you may have. Try to replace the data you are using with some dummy values that look like your real ones and still produce the same error."),Yo.forEach(t),Ke=p(e),d(N.$$.fragment,e),Qe=p(e),S=i(e,"P",{});var Et=l(S);Jt=u(Et,"Once you have something that is self-contained, you can try to reduce it into even less lines of code, building what we call a "),Pe=i(Et,"EM",{});var Lo=l(Pe);zt=u(Lo,"minimal reproducible example"),Lo.forEach(t),Vt=u(Et,". While this requires a bit more work on your side, you will almost be guaranteed to get help and a fix if you provide a nice, short bug reproducer."),Et.forEach(t),Xe=p(e),pe=i(e,"P",{});var Jo=l(pe);Bt=u(Jo,"If you feel comfortable enough, go inspect the source code where your bug happens. You might find a solution to your problem (in which case you can even suggest a pull request to fix it), but more generally, this can help the maintainers better understand the source when they read your report."),Jo.forEach(t),Ze=p(e),x=i(e,"H2",{class:!0});var Pt=l(x);O=i(Pt,"A",{id:!0,class:!0,href:!0});var zo=l(O);je=i(zo,"SPAN",{});var Vo=l(je);d(Q.$$.fragment,Vo),Vo.forEach(t),zo.forEach(t),Rt=p(Pt),Te=i(Pt,"SPAN",{});var Bo=l(Te);Kt=u(Bo,"Filling out the issue template"),Bo.forEach(t),Pt.forEach(t),et=p(e),D=i(e,"P",{});var jt=l(D);Qt=u(jt,"When you file your issue, you will notice there is a template to fill out. We will follow the one for "),X=i(jt,"A",{href:!0,rel:!0});var Ro=l(X);Xt=u(Ro,"\u{1F917} Transformers issues"),Ro.forEach(t),Zt=u(jt," here, but the same kind of information will be required if you report an issue in another repository. Don\u2019t leave the template blank: taking the time to fill it in will maximize your chances of getting an answer and solving your problem."),jt.forEach(t),tt=p(e),q=i(e,"P",{});var Tt=l(q);eo=u(Tt,"In general, when filing an issue, always stay courteous. This is an open source project, so you are using free software, and no one has any obligation to help you. You may include what you feel is justified criticism in your issue, but then the maintainers may very well take it badly and not be in a rush help you. Make sure you read the "),Z=i(Tt,"A",{href:!0,rel:!0});var Ko=l(Z);to=u(Ko,"code of conduct"),Ko.forEach(t),oo=u(Tt," of the project."),Tt.forEach(t),ot=p(e),E=i(e,"H3",{class:!0});var At=l(E);G=i(At,"A",{id:!0,class:!0,href:!0});var Qo=l(G);Ae=i(Qo,"SPAN",{});var Xo=l(Ae);d(ee.$$.fragment,Xo),Xo.forEach(t),Qo.forEach(t),ao=p(At),Ie=i(At,"SPAN",{});var Zo=l(Ie);so=u(Zo,"Including your environment information"),Zo.forEach(t),At.forEach(t),at=p(e),fe=i(e,"P",{});var ea=l(fe);io=u(ea,"\u{1F917} Transformers provides a utility to get all the information we need about your environment. Just type the following in your terminal:"),ea.forEach(t),st=p(e),d(te.$$.fragment,e),it=p(e),me=i(e,"P",{});var ta=l(me);ro=u(ta,"and you should get something like this:"),ta.forEach(t),rt=p(e),d(oe.$$.fragment,e),lt=p(e),$=i(e,"P",{});var ke=l($);lo=u(ke,"You can also add a "),Ce=i(ke,"CODE",{});var oa=l(Ce);no=u(oa,"!"),oa.forEach(t),uo=u(ke," at the beginning of the "),He=i(ke,"CODE",{});var aa=l(He);ho=u(aa,"transformers-cli env"),aa.forEach(t),po=u(ke," command to execute it from a notebook cell, and then copy and paste the result at the beginning of your issue."),ke.forEach(t),nt=p(e),P=i(e,"H3",{class:!0});var It=l(P);U=i(It,"A",{id:!0,class:!0,href:!0});var sa=l(U);Ne=i(sa,"SPAN",{});var ia=l(Ne);d(ae.$$.fragment,ia),ia.forEach(t),sa.forEach(t),fo=p(It),Se=i(It,"SPAN",{});var ra=l(Se);mo=u(ra,"Tagging people"),ra.forEach(t),It.forEach(t),ut=p(e),F=i(e,"P",{});var Ct=l(F);co=u(Ct,"Tagging people by typing an "),Oe=i(Ct,"CODE",{});var la=l(Oe);yo=u(la,"@"),la.forEach(t),go=u(Ct," followed by their GitHub handle will send them a notification so they will see your issue and might reply quicker. Use this with moderation, because the people you tag might not appreciate being notified if it\u2019s something they have no direct link to. If you have looked at the source files related to your bug, you should tag the last person that made changes at the line you think is responsible for your problem (you can find this information by looking at said line on GitHub, selecting it, then clicking \u201CView git blame\u201D)."),Ct.forEach(t),ht=p(e),ce=i(e,"P",{});var na=l(ce);bo=u(na,"Otherwise, the template offers suggestions of people to tag. In general, never tag more than three people!"),na.forEach(t),pt=p(e),j=i(e,"H3",{class:!0});var Ht=l(j);M=i(Ht,"A",{id:!0,class:!0,href:!0});var ua=l(M);De=i(ua,"SPAN",{});var ha=l(De);d(se.$$.fragment,ha),ha.forEach(t),ua.forEach(t),wo=p(Ht),qe=i(Ht,"SPAN",{});var pa=l(qe);vo=u(pa,"Including a reproducible example"),pa.forEach(t),Ht.forEach(t),ft=p(e),W=i(e,"P",{});var Nt=l(W);ko=u(Nt,"If you have managed to create a self-contained example that produces the bug, now is the time to include it! Type a line with three backticks followed by "),Ge=i(Nt,"CODE",{});var fa=l(Ge);$o=u(fa,"python"),fa.forEach(t),_o=u(Nt,", like this:"),Nt.forEach(t),mt=p(e),d(ie.$$.fragment,e),ct=p(e),ye=i(e,"P",{});var ma=l(ye);xo=u(ma,"then paste in your minimal reproducible example and type a new line with three backticks. This will ensure your code is properly formatted."),ma.forEach(t),yt=p(e),de=i(e,"P",{});var ca=l(de);Eo=u(ca,"If you didn\u2019t manage to create a reproducible example, explain in clear steps how you got to your issue. Include a link to a Google Colab notebook where you got the error if you can. The more information you share, the better able the maintainers will be to reply to you."),ca.forEach(t),dt=p(e),ge=i(e,"P",{});var ya=l(ge);Po=u(ya,"In all cases, you should copy and paste the whole error message you are getting. If you\u2019re working in Colab, remember that some of the frames may be automatically collapsed in the stack trace, so make sure you expand them before copying. Like with the code sample, put that error message between two lines with three backticks, so it\u2019s properly formatted."),ya.forEach(t),gt=p(e),T=i(e,"H3",{class:!0});var St=l(T);Y=i(St,"A",{id:!0,class:!0,href:!0});var da=l(Y);Ue=i(da,"SPAN",{});var ga=l(Ue);d(re.$$.fragment,ga),ga.forEach(t),da.forEach(t),jo=p(St),Fe=i(St,"SPAN",{});var ba=l(Fe);To=u(ba,"Describing the expected behavior"),ba.forEach(t),St.forEach(t),bt=p(e),be=i(e,"P",{});var wa=l(be);Ao=u(wa,"Explain in a few lines what you expected to get, so that the maintainers get a full grasp of the problem. This part is generally pretty obvious, so it should fit in one sentence, but in some cases you may have a lot to say."),wa.forEach(t),wt=p(e),A=i(e,"H2",{class:!0});var Ot=l(A);L=i(Ot,"A",{id:!0,class:!0,href:!0});var va=l(L);Me=i(va,"SPAN",{});var ka=l(Me);d(le.$$.fragment,ka),ka.forEach(t),va.forEach(t),Io=p(Ot),We=i(Ot,"SPAN",{});var $a=l(We);Co=u($a,"And then what?"),$a.forEach(t),Ot.forEach(t),vt=p(e),we=i(e,"P",{});var _a=l(we);Ho=u(_a,"Once your issue is filed, make sure to quickly check everything looks okay. You can edit the issue if you made a mistake, or even change its title if you realize the problem is different from what you initially thought."),_a.forEach(t),kt=p(e),ve=i(e,"P",{});var xa=l(ve);No=u(xa,"There is no point pinging people if you don\u2019t get an answer. If no one helps you in a few days, it\u2019s likely that no one could make sense of your problem. Don\u2019t hesitate to go back to the reproducible example. Can you make it shorter and more to the point? If you don\u2019t get an answer in a week, you can leave a message gently asking for help, especially if you\u2019ve edited your issue to include more information on the problem."),xa.forEach(t),this.h()},h(){f(m,"name","hf:doc:metadata"),f(m,"content",JSON.stringify(Oa)),f(k,"id","how-to-write-a-good-issue"),f(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(k,"href","#how-to-write-a-good-issue"),f(c,"class","relative group"),f(B,"href","https://discuss.huggingface.co/"),f(B,"rel","nofollow"),f(H,"id","creating-a-minimal-reproducible-example"),f(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(H,"href","#creating-a-minimal-reproducible-example"),f(_,"class","relative group"),f(O,"id","filling-out-the-issue-template"),f(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(O,"href","#filling-out-the-issue-template"),f(x,"class","relative group"),f(X,"href","https://github.com/huggingface/transformers/issues/new/choose"),f(X,"rel","nofollow"),f(Z,"href","https://github.com/huggingface/transformers/blob/master/CODE_OF_CONDUCT.md"),f(Z,"rel","nofollow"),f(G,"id","including-your-environment-information"),f(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(G,"href","#including-your-environment-information"),f(E,"class","relative group"),f(U,"id","tagging-people"),f(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(U,"href","#tagging-people"),f(P,"class","relative group"),f(M,"id","including-a-reproducible-example"),f(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(M,"href","#including-a-reproducible-example"),f(j,"class","relative group"),f(Y,"id","describing-the-expected-behavior"),f(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Y,"href","#describing-the-expected-behavior"),f(T,"class","relative group"),f(L,"id","and-then-what?"),f(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(L,"href","#and-then-what?"),f(A,"class","relative group")},m(e,a){o(document.head,m),r(e,I,a),r(e,c,a),o(c,k),o(k,$e),g(z,$e,null),o(c,Dt),o(c,_e),o(_e,qt),r(e,Le,a),g(V,e,a),r(e,Je,a),r(e,C,a),o(C,Gt),o(C,B),o(B,Ut),o(C,Ft),r(e,ze,a),g(R,e,a),r(e,Ve,a),r(e,ue,a),o(ue,Mt),r(e,Be,a),r(e,_,a),o(_,H),o(H,xe),g(K,xe,null),o(_,Wt),o(_,Ee),o(Ee,Yt),r(e,Re,a),r(e,he,a),o(he,Lt),r(e,Ke,a),g(N,e,a),r(e,Qe,a),r(e,S,a),o(S,Jt),o(S,Pe),o(Pe,zt),o(S,Vt),r(e,Xe,a),r(e,pe,a),o(pe,Bt),r(e,Ze,a),r(e,x,a),o(x,O),o(O,je),g(Q,je,null),o(x,Rt),o(x,Te),o(Te,Kt),r(e,et,a),r(e,D,a),o(D,Qt),o(D,X),o(X,Xt),o(D,Zt),r(e,tt,a),r(e,q,a),o(q,eo),o(q,Z),o(Z,to),o(q,oo),r(e,ot,a),r(e,E,a),o(E,G),o(G,Ae),g(ee,Ae,null),o(E,ao),o(E,Ie),o(Ie,so),r(e,at,a),r(e,fe,a),o(fe,io),r(e,st,a),g(te,e,a),r(e,it,a),r(e,me,a),o(me,ro),r(e,rt,a),g(oe,e,a),r(e,lt,a),r(e,$,a),o($,lo),o($,Ce),o(Ce,no),o($,uo),o($,He),o(He,ho),o($,po),r(e,nt,a),r(e,P,a),o(P,U),o(U,Ne),g(ae,Ne,null),o(P,fo),o(P,Se),o(Se,mo),r(e,ut,a),r(e,F,a),o(F,co),o(F,Oe),o(Oe,yo),o(F,go),r(e,ht,a),r(e,ce,a),o(ce,bo),r(e,pt,a),r(e,j,a),o(j,M),o(M,De),g(se,De,null),o(j,wo),o(j,qe),o(qe,vo),r(e,ft,a),r(e,W,a),o(W,ko),o(W,Ge),o(Ge,$o),o(W,_o),r(e,mt,a),g(ie,e,a),r(e,ct,a),r(e,ye,a),o(ye,xo),r(e,yt,a),r(e,de,a),o(de,Eo),r(e,dt,a),r(e,ge,a),o(ge,Po),r(e,gt,a),r(e,T,a),o(T,Y),o(Y,Ue),g(re,Ue,null),o(T,jo),o(T,Fe),o(Fe,To),r(e,bt,a),r(e,be,a),o(be,Ao),r(e,wt,a),r(e,A,a),o(A,L),o(L,Me),g(le,Me,null),o(A,Io),o(A,We),o(We,Co),r(e,vt,a),r(e,we,a),o(we,Ho),r(e,kt,a),r(e,ve,a),o(ve,No),$t=!0},p(e,[a]){const ne={};a&2&&(ne.$$scope={dirty:a,ctx:e}),N.$set(ne)},i(e){$t||(b(z.$$.fragment,e),b(V.$$.fragment,e),b(R.$$.fragment,e),b(K.$$.fragment,e),b(N.$$.fragment,e),b(Q.$$.fragment,e),b(ee.$$.fragment,e),b(te.$$.fragment,e),b(oe.$$.fragment,e),b(ae.$$.fragment,e),b(se.$$.fragment,e),b(ie.$$.fragment,e),b(re.$$.fragment,e),b(le.$$.fragment,e),$t=!0)},o(e){w(z.$$.fragment,e),w(V.$$.fragment,e),w(R.$$.fragment,e),w(K.$$.fragment,e),w(N.$$.fragment,e),w(Q.$$.fragment,e),w(ee.$$.fragment,e),w(te.$$.fragment,e),w(oe.$$.fragment,e),w(ae.$$.fragment,e),w(se.$$.fragment,e),w(ie.$$.fragment,e),w(re.$$.fragment,e),w(le.$$.fragment,e),$t=!1},d(e){t(m),e&&t(I),e&&t(c),v(z),e&&t(Le),v(V,e),e&&t(Je),e&&t(C),e&&t(ze),v(R,e),e&&t(Ve),e&&t(ue),e&&t(Be),e&&t(_),v(K),e&&t(Re),e&&t(he),e&&t(Ke),v(N,e),e&&t(Qe),e&&t(S),e&&t(Xe),e&&t(pe),e&&t(Ze),e&&t(x),v(Q),e&&t(et),e&&t(D),e&&t(tt),e&&t(q),e&&t(ot),e&&t(E),v(ee),e&&t(at),e&&t(fe),e&&t(st),v(te,e),e&&t(it),e&&t(me),e&&t(rt),v(oe,e),e&&t(lt),e&&t($),e&&t(nt),e&&t(P),v(ae),e&&t(ut),e&&t(F),e&&t(ht),e&&t(ce),e&&t(pt),e&&t(j),v(se),e&&t(ft),e&&t(W),e&&t(mt),v(ie,e),e&&t(ct),e&&t(ye),e&&t(yt),e&&t(de),e&&t(dt),e&&t(ge),e&&t(gt),e&&t(T),v(re),e&&t(bt),e&&t(be),e&&t(wt),e&&t(A),v(le),e&&t(vt),e&&t(we),e&&t(kt),e&&t(ve)}}}const Oa={local:"how-to-write-a-good-issue",sections:[{local:"creating-a-minimal-reproducible-example",title:"Creating a minimal reproducible example"},{local:"filling-out-the-issue-template",sections:[{local:"including-your-environment-information",title:"Including your environment information"},{local:"tagging-people",title:"Tagging people "},{local:"including-a-reproducible-example",title:"Including a reproducible example"}],title:"Filling out the issue template"}],title:"How to write a good issue"};function Da(Ye){return Aa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ya extends Ea{constructor(m){super();Pa(this,m,Da,Sa,ja,{})}}export{Ya as default,Oa as metadata};
