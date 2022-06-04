import{S as Wr,i as Jr,s as Kr,e as a,k as h,w as Jt,t as s,N as Qr,c as r,d as o,m as f,a as l,x as Kt,h as i,b as n,P as w,G as t,g as u,y as Qt,L as Xr,q as Xt,o as Zt,B as eo,v as Zr}from"../chunks/vendor-hf-doc-builder.js";import{I as to}from"../chunks/IconCopyLink-hf-doc-builder.js";function el(Sa){let E,st,k,H,xe,j,oo,Ge,ao,it,v,ro,V,lo,so,ce,io,no,nt,m,co,R,uo,ho,q,fo,po,W,mo,go,ct,O,vo,ue,_o,bo,ut,I,U,Me,J,yo,Ce,wo,ht,z,Eo,K,ko,Io,ft,he,He,Ao,dt,A,Q,Da,$o,X,Fa,pt,Z,Oe,To,mt,$,fe,Ya,Po,de,Na,gt,T,Ue,ee,Lo,ze,xo,Go,Mo,Se,De,Co,vt,pe,Ho,_t,P,me,Ba,Oo,ge,ja,bt,ve,Uo,yt,L,_e,Va,zo,be,Ra,wt,te,Fe,So,Et,ye,Do,kt,d,Ye,Fo,Yo,x,No,Ne,Bo,jo,Be,Vo,Ro,qo,je,Wo,Jo,Ve,Ko,Qo,Re,Xo,Zo,qe,ea,ta,We,oa,It,S,aa,we,ra,la,At,oe,Je,sa,$t,g,ia,Ke,na,ca,D,Qe,ua,ha,fa,Xe,da,pa,Tt,G,Ee,qa,ma,ke,Wa,Pt,_,ga,ae,va,_a,re,Ze,ba,ya,Lt,M,F,et,le,wa,tt,Ea,xt,b,ka,Ie,Ia,Aa,ot,$a,Ta,Gt,C,Y,at,se,Pa,ie,La,rt,xa,Ga,Mt,y,Ma,lt,Ca,Ha,ne,Oa,Ua,Ct;return j=new to({}),J=new to({}),le=new to({}),se=new to({}),{c(){E=a("meta"),st=h(),k=a("h1"),H=a("a"),xe=a("span"),Jt(j.$$.fragment),oo=h(),Ge=a("span"),ao=s("Uploading models"),it=h(),v=a("p"),ro=s("To upload models to the Hub, you\u2019ll need to create an account at "),V=a("a"),lo=s("Hugging Face"),so=s(". Models on the Hub are "),ce=a("a"),io=s("Git-based repositories"),no=s(", which give you versioning, branches, discoverability and sharing features, integration with over a dozen libraries, and more! You have control over what you want to upload to your repository, which could include checkpoints, configs, and any other files."),nt=h(),m=a("p"),co=s("You can link repositories with an individual, such as "),R=a("a"),uo=s("osanseviero/fashion_brands_patterns"),ho=s(", or with an organization, such as "),q=a("a"),fo=s("facebook/bart-large-xsum"),po=s(". Organizations can collect models related to a company, community, or library! If you choose an organization, the model will be featured on the organization\u2019s page, and every member of the organization will have the ability to contribute to the repository. You can create a new organization "),W=a("a"),mo=s("here"),go=s("."),ct=h(),O=a("p"),vo=s("There are several ways to upload models to the Hub, described below. We suggest adding a "),ue=a("a"),_o=s("Model Card"),bo=s(" to to your repo to document your model."),ut=h(),I=a("h2"),U=a("a"),Me=a("span"),Jt(J.$$.fragment),yo=h(),Ce=a("span"),wo=s("Using the web interface"),ht=h(),z=a("p"),Eo=s("To create a brand new model repository, visit "),K=a("a"),ko=s("huggingface.co/new"),Io=s(". Then follow these steps:"),ft=h(),he=a("ol"),He=a("li"),Ao=s("In the \u201CFiles and versions\u201D tab, select \u201CAdd File\u201D and specify \u201CUpload File\u201D:"),dt=h(),A=a("div"),Q=a("img"),$o=h(),X=a("img"),pt=h(),Z=a("ol"),Oe=a("li"),To=s("From there, select a file from your computer to upload and leave a helpful commit message to know what you are uploading:"),mt=h(),$=a("div"),fe=a("img"),Po=h(),de=a("img"),gt=h(),T=a("ol"),Ue=a("li"),ee=a("p"),Lo=s("Afterwards, click "),ze=a("strong"),xo=s("Commit changes"),Go=s(" to upload your model to the Hub!"),Mo=h(),Se=a("li"),De=a("p"),Co=s("Inspect files and history"),vt=h(),pe=a("p"),Ho=s("You can check your repository with all the recently added files!"),_t=h(),P=a("div"),me=a("img"),Oo=h(),ge=a("img"),bt=h(),ve=a("p"),Uo=s("The UI allows you to explore the model files and commits and to see the diff introduced by each commit:"),yt=h(),L=a("div"),_e=a("img"),zo=h(),be=a("img"),wt=h(),te=a("ol"),Fe=a("li"),So=s("Add metadata"),Et=h(),ye=a("p"),Do=s("You can add metadata to your model card. You can specify:"),kt=h(),d=a("ul"),Ye=a("li"),Fo=s("the type of task this model is for, enabling widgets and the Inference API."),Yo=h(),x=a("li"),No=s("the used library ("),Ne=a("code"),Bo=s("transformers"),jo=s(", "),Be=a("code"),Vo=s("spaCy"),Ro=s(", etc.)"),qo=h(),je=a("li"),Wo=s("the language"),Jo=h(),Ve=a("li"),Ko=s("the dataset"),Qo=h(),Re=a("li"),Xo=s("metrics"),Zo=h(),qe=a("li"),ea=s("license"),ta=h(),We=a("li"),oa=s("a lot more!"),It=h(),S=a("p"),aa=s("Read more about model tags "),we=a("a"),ra=s("here"),la=s("."),At=h(),oe=a("ol"),Je=a("li"),sa=s("Add TensorBoard traces"),$t=h(),g=a("p"),ia=s("Any repository that contains TensorBoard traces (filenames that contain "),Ke=a("code"),na=s("tfevents"),ca=s(") is categorized with the "),D=a("a"),Qe=a("code"),ua=s("TensorBoard"),ha=s(" tag"),fa=s(". As a convention, we suggest that you save traces under the "),Xe=a("code"),da=s("runs/"),pa=s(" subfolder. The \u201CTraining metrics\u201D tab then makes it easy to review charts of the logged variables, like the loss or the accuracy."),Tt=h(),G=a("div"),Ee=a("img"),ma=h(),ke=a("img"),Pt=h(),_=a("p"),ga=s("Models trained with \u{1F917} Transformers will generate "),ae=a("a"),va=s("TensorBoard traces"),_a=s(" by default if "),re=a("a"),Ze=a("code"),ba=s("tensorboard"),ya=s(" is installed."),Lt=h(),M=a("h2"),F=a("a"),et=a("span"),Jt(le.$$.fragment),wa=h(),tt=a("span"),Ea=s("Using Git"),xt=h(),b=a("p"),ka=s("Since model repos are just Git repositories, you can use Git to push your model files to the Hub. Follow the guide on "),Ie=a("a"),Ia=s("Getting Started with Repositories"),Aa=s(" to learn about using the "),ot=a("code"),$a=s("git"),Ta=s(" CLI to commit and push your models."),Gt=h(),C=a("h2"),Y=a("a"),at=a("span"),Jt(se.$$.fragment),Pa=h(),ie=a("span"),La=s("Using the "),rt=a("code"),xa=s("huggingface_hub"),Ga=s(" client library"),Mt=h(),y=a("p"),Ma=s("The rich feature set in the "),lt=a("code"),Ca=s("huggingface_hub"),Ha=s(" library allows you to manage repositories, including creating repos and uploading models to the Model Hub. Visit "),ne=a("a"),Oa=s("the client library\u2019s documentation"),Ua=s(" to learn more."),this.h()},l(e){const c=Qr('[data-svelte="svelte-1phssyn"]',document.head);E=r(c,"META",{name:!0,content:!0}),c.forEach(o),st=f(e),k=r(e,"H1",{class:!0});var Ht=l(k);H=r(Ht,"A",{id:!0,class:!0,href:!0});var Ja=l(H);xe=r(Ja,"SPAN",{});var Ka=l(xe);Kt(j.$$.fragment,Ka),Ka.forEach(o),Ja.forEach(o),oo=f(Ht),Ge=r(Ht,"SPAN",{});var Qa=l(Ge);ao=i(Qa,"Uploading models"),Qa.forEach(o),Ht.forEach(o),it=f(e),v=r(e,"P",{});var Ae=l(v);ro=i(Ae,"To upload models to the Hub, you\u2019ll need to create an account at "),V=r(Ae,"A",{href:!0,rel:!0});var Xa=l(V);lo=i(Xa,"Hugging Face"),Xa.forEach(o),so=i(Ae,". Models on the Hub are "),ce=r(Ae,"A",{href:!0});var Za=l(ce);io=i(Za,"Git-based repositories"),Za.forEach(o),no=i(Ae,", which give you versioning, branches, discoverability and sharing features, integration with over a dozen libraries, and more! You have control over what you want to upload to your repository, which could include checkpoints, configs, and any other files."),Ae.forEach(o),nt=f(e),m=r(e,"P",{});var N=l(m);co=i(N,"You can link repositories with an individual, such as "),R=r(N,"A",{href:!0,rel:!0});var er=l(R);uo=i(er,"osanseviero/fashion_brands_patterns"),er.forEach(o),ho=i(N,", or with an organization, such as "),q=r(N,"A",{href:!0,rel:!0});var tr=l(q);fo=i(tr,"facebook/bart-large-xsum"),tr.forEach(o),po=i(N,". Organizations can collect models related to a company, community, or library! If you choose an organization, the model will be featured on the organization\u2019s page, and every member of the organization will have the ability to contribute to the repository. You can create a new organization "),W=r(N,"A",{href:!0,rel:!0});var or=l(W);mo=i(or,"here"),or.forEach(o),go=i(N,"."),N.forEach(o),ct=f(e),O=r(e,"P",{});var Ot=l(O);vo=i(Ot,"There are several ways to upload models to the Hub, described below. We suggest adding a "),ue=r(Ot,"A",{href:!0});var ar=l(ue);_o=i(ar,"Model Card"),ar.forEach(o),bo=i(Ot," to to your repo to document your model."),Ot.forEach(o),ut=f(e),I=r(e,"H2",{class:!0});var Ut=l(I);U=r(Ut,"A",{id:!0,class:!0,href:!0});var rr=l(U);Me=r(rr,"SPAN",{});var lr=l(Me);Kt(J.$$.fragment,lr),lr.forEach(o),rr.forEach(o),yo=f(Ut),Ce=r(Ut,"SPAN",{});var sr=l(Ce);wo=i(sr,"Using the web interface"),sr.forEach(o),Ut.forEach(o),ht=f(e),z=r(e,"P",{});var zt=l(z);Eo=i(zt,"To create a brand new model repository, visit "),K=r(zt,"A",{href:!0,rel:!0});var ir=l(K);ko=i(ir,"huggingface.co/new"),ir.forEach(o),Io=i(zt,". Then follow these steps:"),zt.forEach(o),ft=f(e),he=r(e,"OL",{});var nr=l(he);He=r(nr,"LI",{});var cr=l(He);Ao=i(cr,"In the \u201CFiles and versions\u201D tab, select \u201CAdd File\u201D and specify \u201CUpload File\u201D:"),cr.forEach(o),nr.forEach(o),dt=f(e),A=r(e,"DIV",{class:!0});var St=l(A);Q=r(St,"IMG",{class:!0,width:!0,src:!0}),$o=f(St),X=r(St,"IMG",{class:!0,width:!0,src:!0}),St.forEach(o),pt=f(e),Z=r(e,"OL",{start:!0});var ur=l(Z);Oe=r(ur,"LI",{});var hr=l(Oe);To=i(hr,"From there, select a file from your computer to upload and leave a helpful commit message to know what you are uploading:"),hr.forEach(o),ur.forEach(o),mt=f(e),$=r(e,"DIV",{class:!0});var Dt=l($);fe=r(Dt,"IMG",{class:!0,src:!0}),Po=f(Dt),de=r(Dt,"IMG",{class:!0,src:!0}),Dt.forEach(o),gt=f(e),T=r(e,"OL",{start:!0});var Ft=l(T);Ue=r(Ft,"LI",{});var fr=l(Ue);ee=r(fr,"P",{});var Yt=l(ee);Lo=i(Yt,"Afterwards, click "),ze=r(Yt,"STRONG",{});var dr=l(ze);xo=i(dr,"Commit changes"),dr.forEach(o),Go=i(Yt," to upload your model to the Hub!"),Yt.forEach(o),fr.forEach(o),Mo=f(Ft),Se=r(Ft,"LI",{});var pr=l(Se);De=r(pr,"P",{});var mr=l(De);Co=i(mr,"Inspect files and history"),mr.forEach(o),pr.forEach(o),Ft.forEach(o),vt=f(e),pe=r(e,"P",{});var gr=l(pe);Ho=i(gr,"You can check your repository with all the recently added files!"),gr.forEach(o),_t=f(e),P=r(e,"DIV",{class:!0});var Nt=l(P);me=r(Nt,"IMG",{class:!0,src:!0}),Oo=f(Nt),ge=r(Nt,"IMG",{class:!0,src:!0}),Nt.forEach(o),bt=f(e),ve=r(e,"P",{});var vr=l(ve);Uo=i(vr,"The UI allows you to explore the model files and commits and to see the diff introduced by each commit:"),vr.forEach(o),yt=f(e),L=r(e,"DIV",{class:!0});var Bt=l(L);_e=r(Bt,"IMG",{class:!0,src:!0}),zo=f(Bt),be=r(Bt,"IMG",{class:!0,src:!0}),Bt.forEach(o),wt=f(e),te=r(e,"OL",{start:!0});var _r=l(te);Fe=r(_r,"LI",{});var br=l(Fe);So=i(br,"Add metadata"),br.forEach(o),_r.forEach(o),Et=f(e),ye=r(e,"P",{});var yr=l(ye);Do=i(yr,"You can add metadata to your model card. You can specify:"),yr.forEach(o),kt=f(e),d=r(e,"UL",{});var p=l(d);Ye=r(p,"LI",{});var wr=l(Ye);Fo=i(wr,"the type of task this model is for, enabling widgets and the Inference API."),wr.forEach(o),Yo=f(p),x=r(p,"LI",{});var $e=l(x);No=i($e,"the used library ("),Ne=r($e,"CODE",{});var Er=l(Ne);Bo=i(Er,"transformers"),Er.forEach(o),jo=i($e,", "),Be=r($e,"CODE",{});var kr=l(Be);Vo=i(kr,"spaCy"),kr.forEach(o),Ro=i($e,", etc.)"),$e.forEach(o),qo=f(p),je=r(p,"LI",{});var Ir=l(je);Wo=i(Ir,"the language"),Ir.forEach(o),Jo=f(p),Ve=r(p,"LI",{});var Ar=l(Ve);Ko=i(Ar,"the dataset"),Ar.forEach(o),Qo=f(p),Re=r(p,"LI",{});var $r=l(Re);Xo=i($r,"metrics"),$r.forEach(o),Zo=f(p),qe=r(p,"LI",{});var Tr=l(qe);ea=i(Tr,"license"),Tr.forEach(o),ta=f(p),We=r(p,"LI",{});var Pr=l(We);oa=i(Pr,"a lot more!"),Pr.forEach(o),p.forEach(o),It=f(e),S=r(e,"P",{});var jt=l(S);aa=i(jt,"Read more about model tags "),we=r(jt,"A",{href:!0});var Lr=l(we);ra=i(Lr,"here"),Lr.forEach(o),la=i(jt,"."),jt.forEach(o),At=f(e),oe=r(e,"OL",{start:!0});var xr=l(oe);Je=r(xr,"LI",{});var Gr=l(Je);sa=i(Gr,"Add TensorBoard traces"),Gr.forEach(o),xr.forEach(o),$t=f(e),g=r(e,"P",{});var B=l(g);ia=i(B,"Any repository that contains TensorBoard traces (filenames that contain "),Ke=r(B,"CODE",{});var Mr=l(Ke);na=i(Mr,"tfevents"),Mr.forEach(o),ca=i(B,") is categorized with the "),D=r(B,"A",{href:!0,rel:!0});var za=l(D);Qe=r(za,"CODE",{});var Cr=l(Qe);ua=i(Cr,"TensorBoard"),Cr.forEach(o),ha=i(za," tag"),za.forEach(o),fa=i(B,". As a convention, we suggest that you save traces under the "),Xe=r(B,"CODE",{});var Hr=l(Xe);da=i(Hr,"runs/"),Hr.forEach(o),pa=i(B," subfolder. The \u201CTraining metrics\u201D tab then makes it easy to review charts of the logged variables, like the loss or the accuracy."),B.forEach(o),Tt=f(e),G=r(e,"DIV",{class:!0});var Vt=l(G);Ee=r(Vt,"IMG",{class:!0,src:!0}),ma=f(Vt),ke=r(Vt,"IMG",{class:!0,src:!0}),Vt.forEach(o),Pt=f(e),_=r(e,"P",{});var Te=l(_);ga=i(Te,"Models trained with \u{1F917} Transformers will generate "),ae=r(Te,"A",{href:!0,rel:!0});var Or=l(ae);va=i(Or,"TensorBoard traces"),Or.forEach(o),_a=i(Te," by default if "),re=r(Te,"A",{href:!0,rel:!0});var Ur=l(re);Ze=r(Ur,"CODE",{});var zr=l(Ze);ba=i(zr,"tensorboard"),zr.forEach(o),Ur.forEach(o),ya=i(Te," is installed."),Te.forEach(o),Lt=f(e),M=r(e,"H2",{class:!0});var Rt=l(M);F=r(Rt,"A",{id:!0,class:!0,href:!0});var Sr=l(F);et=r(Sr,"SPAN",{});var Dr=l(et);Kt(le.$$.fragment,Dr),Dr.forEach(o),Sr.forEach(o),wa=f(Rt),tt=r(Rt,"SPAN",{});var Fr=l(tt);Ea=i(Fr,"Using Git"),Fr.forEach(o),Rt.forEach(o),xt=f(e),b=r(e,"P",{});var Pe=l(b);ka=i(Pe,"Since model repos are just Git repositories, you can use Git to push your model files to the Hub. Follow the guide on "),Ie=r(Pe,"A",{href:!0});var Yr=l(Ie);Ia=i(Yr,"Getting Started with Repositories"),Yr.forEach(o),Aa=i(Pe," to learn about using the "),ot=r(Pe,"CODE",{});var Nr=l(ot);$a=i(Nr,"git"),Nr.forEach(o),Ta=i(Pe," CLI to commit and push your models."),Pe.forEach(o),Gt=f(e),C=r(e,"H2",{class:!0});var qt=l(C);Y=r(qt,"A",{id:!0,class:!0,href:!0});var Br=l(Y);at=r(Br,"SPAN",{});var jr=l(at);Kt(se.$$.fragment,jr),jr.forEach(o),Br.forEach(o),Pa=f(qt),ie=r(qt,"SPAN",{});var Wt=l(ie);La=i(Wt,"Using the "),rt=r(Wt,"CODE",{});var Vr=l(rt);xa=i(Vr,"huggingface_hub"),Vr.forEach(o),Ga=i(Wt," client library"),Wt.forEach(o),qt.forEach(o),Mt=f(e),y=r(e,"P",{});var Le=l(y);Ma=i(Le,"The rich feature set in the "),lt=r(Le,"CODE",{});var Rr=l(lt);Ca=i(Rr,"huggingface_hub"),Rr.forEach(o),Ha=i(Le," library allows you to manage repositories, including creating repos and uploading models to the Model Hub. Visit "),ne=r(Le,"A",{href:!0,rel:!0});var qr=l(ne);Oa=i(qr,"the client library\u2019s documentation"),qr.forEach(o),Ua=i(Le," to learn more."),Le.forEach(o),this.h()},h(){n(E,"name","hf:doc:metadata"),n(E,"content",JSON.stringify(tl)),n(H,"id","uploading-models"),n(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(H,"href","#uploading-models"),n(k,"class","relative group"),n(V,"href","https://huggingface.co/join"),n(V,"rel","nofollow"),n(ce,"href","./repositories"),n(R,"href","https://huggingface.co/osanseviero/fashion_brands_patterns"),n(R,"rel","nofollow"),n(q,"href","https://huggingface.co/facebook/bart-large-xsum"),n(q,"rel","nofollow"),n(W,"href","https://huggingface.co/organizations/new"),n(W,"rel","nofollow"),n(ue,"href","./models-cards"),n(U,"id","using-the-web-interface"),n(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(U,"href","#using-the-web-interface"),n(I,"class","relative group"),n(K,"href","http://huggingface.co/new"),n(K,"rel","nofollow"),n(Q,"class","block dark:hidden"),n(Q,"width","300"),w(Q.src,Da="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/add-file.png")||n(Q,"src",Da),n(X,"class","hidden dark:block"),n(X,"width","300"),w(X.src,Fa="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/add-file-dark.png")||n(X,"src",Fa),n(A,"class","flex justify-center"),n(Z,"start","2"),n(fe,"class","block dark:hidden"),w(fe.src,Ya="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/commit-file.png")||n(fe,"src",Ya),n(de,"class","hidden dark:block"),w(de.src,Na="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/commit-file-dark.png")||n(de,"src",Na),n($,"class","flex justify-center"),n(T,"start","3"),n(me,"class","block dark:hidden"),w(me.src,Ba="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/repo_with_files.png")||n(me,"src",Ba),n(ge,"class","hidden dark:block"),w(ge.src,ja="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/repo_with_files-dark.png")||n(ge,"src",ja),n(P,"class","flex justify-center"),n(_e,"class","block dark:hidden"),w(_e.src,Va="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/explore_history.gif")||n(_e,"src",Va),n(be,"class","hidden dark:block"),w(be.src,Ra="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/explore_history-dark.gif")||n(be,"src",Ra),n(L,"class","flex justify-center"),n(te,"start","5"),n(we,"href","./models-cards#model-card-metadata"),n(oe,"start","6"),n(D,"href","https://huggingface.co/models?filter=tensorboard"),n(D,"rel","nofollow"),n(Ee,"class","block dark:hidden"),w(Ee.src,qa="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/tensorboard.png")||n(Ee,"src",qa),n(ke,"class","hidden dark:block"),w(ke.src,Wa="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/tensorboard-dark.png")||n(ke,"src",Wa),n(G,"class","flex justify-center"),n(ae,"href","https://huggingface.co/transformers/main_classes/callback.html?highlight=tensorboard#transformers.integrations.TensorBoardCallback"),n(ae,"rel","nofollow"),n(re,"href","https://pypi.org/project/tensorboard/"),n(re,"rel","nofollow"),n(F,"id","using-git"),n(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(F,"href","#using-git"),n(M,"class","relative group"),n(Ie,"href","repositories-getting-started"),n(Y,"id","using-the-huggingfacehub-client-library"),n(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(Y,"href","#using-the-huggingfacehub-client-library"),n(C,"class","relative group"),n(ne,"href","https://huggingface.co/docs/huggingface_hub/index"),n(ne,"rel","nofollow")},m(e,c){t(document.head,E),u(e,st,c),u(e,k,c),t(k,H),t(H,xe),Qt(j,xe,null),t(k,oo),t(k,Ge),t(Ge,ao),u(e,it,c),u(e,v,c),t(v,ro),t(v,V),t(V,lo),t(v,so),t(v,ce),t(ce,io),t(v,no),u(e,nt,c),u(e,m,c),t(m,co),t(m,R),t(R,uo),t(m,ho),t(m,q),t(q,fo),t(m,po),t(m,W),t(W,mo),t(m,go),u(e,ct,c),u(e,O,c),t(O,vo),t(O,ue),t(ue,_o),t(O,bo),u(e,ut,c),u(e,I,c),t(I,U),t(U,Me),Qt(J,Me,null),t(I,yo),t(I,Ce),t(Ce,wo),u(e,ht,c),u(e,z,c),t(z,Eo),t(z,K),t(K,ko),t(z,Io),u(e,ft,c),u(e,he,c),t(he,He),t(He,Ao),u(e,dt,c),u(e,A,c),t(A,Q),t(A,$o),t(A,X),u(e,pt,c),u(e,Z,c),t(Z,Oe),t(Oe,To),u(e,mt,c),u(e,$,c),t($,fe),t($,Po),t($,de),u(e,gt,c),u(e,T,c),t(T,Ue),t(Ue,ee),t(ee,Lo),t(ee,ze),t(ze,xo),t(ee,Go),t(T,Mo),t(T,Se),t(Se,De),t(De,Co),u(e,vt,c),u(e,pe,c),t(pe,Ho),u(e,_t,c),u(e,P,c),t(P,me),t(P,Oo),t(P,ge),u(e,bt,c),u(e,ve,c),t(ve,Uo),u(e,yt,c),u(e,L,c),t(L,_e),t(L,zo),t(L,be),u(e,wt,c),u(e,te,c),t(te,Fe),t(Fe,So),u(e,Et,c),u(e,ye,c),t(ye,Do),u(e,kt,c),u(e,d,c),t(d,Ye),t(Ye,Fo),t(d,Yo),t(d,x),t(x,No),t(x,Ne),t(Ne,Bo),t(x,jo),t(x,Be),t(Be,Vo),t(x,Ro),t(d,qo),t(d,je),t(je,Wo),t(d,Jo),t(d,Ve),t(Ve,Ko),t(d,Qo),t(d,Re),t(Re,Xo),t(d,Zo),t(d,qe),t(qe,ea),t(d,ta),t(d,We),t(We,oa),u(e,It,c),u(e,S,c),t(S,aa),t(S,we),t(we,ra),t(S,la),u(e,At,c),u(e,oe,c),t(oe,Je),t(Je,sa),u(e,$t,c),u(e,g,c),t(g,ia),t(g,Ke),t(Ke,na),t(g,ca),t(g,D),t(D,Qe),t(Qe,ua),t(D,ha),t(g,fa),t(g,Xe),t(Xe,da),t(g,pa),u(e,Tt,c),u(e,G,c),t(G,Ee),t(G,ma),t(G,ke),u(e,Pt,c),u(e,_,c),t(_,ga),t(_,ae),t(ae,va),t(_,_a),t(_,re),t(re,Ze),t(Ze,ba),t(_,ya),u(e,Lt,c),u(e,M,c),t(M,F),t(F,et),Qt(le,et,null),t(M,wa),t(M,tt),t(tt,Ea),u(e,xt,c),u(e,b,c),t(b,ka),t(b,Ie),t(Ie,Ia),t(b,Aa),t(b,ot),t(ot,$a),t(b,Ta),u(e,Gt,c),u(e,C,c),t(C,Y),t(Y,at),Qt(se,at,null),t(C,Pa),t(C,ie),t(ie,La),t(ie,rt),t(rt,xa),t(ie,Ga),u(e,Mt,c),u(e,y,c),t(y,Ma),t(y,lt),t(lt,Ca),t(y,Ha),t(y,ne),t(ne,Oa),t(y,Ua),Ct=!0},p:Xr,i(e){Ct||(Xt(j.$$.fragment,e),Xt(J.$$.fragment,e),Xt(le.$$.fragment,e),Xt(se.$$.fragment,e),Ct=!0)},o(e){Zt(j.$$.fragment,e),Zt(J.$$.fragment,e),Zt(le.$$.fragment,e),Zt(se.$$.fragment,e),Ct=!1},d(e){o(E),e&&o(st),e&&o(k),eo(j),e&&o(it),e&&o(v),e&&o(nt),e&&o(m),e&&o(ct),e&&o(O),e&&o(ut),e&&o(I),eo(J),e&&o(ht),e&&o(z),e&&o(ft),e&&o(he),e&&o(dt),e&&o(A),e&&o(pt),e&&o(Z),e&&o(mt),e&&o($),e&&o(gt),e&&o(T),e&&o(vt),e&&o(pe),e&&o(_t),e&&o(P),e&&o(bt),e&&o(ve),e&&o(yt),e&&o(L),e&&o(wt),e&&o(te),e&&o(Et),e&&o(ye),e&&o(kt),e&&o(d),e&&o(It),e&&o(S),e&&o(At),e&&o(oe),e&&o($t),e&&o(g),e&&o(Tt),e&&o(G),e&&o(Pt),e&&o(_),e&&o(Lt),e&&o(M),eo(le),e&&o(xt),e&&o(b),e&&o(Gt),e&&o(C),eo(se),e&&o(Mt),e&&o(y)}}}const tl={local:"uploading-models",sections:[{local:"using-the-web-interface",title:"Using the web interface"},{local:"using-git",title:"Using Git"},{local:"using-the-huggingfacehub-client-library",title:"Using the `huggingface_hub` client library"}],title:"Uploading models"};function ol(Sa){return Zr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ll extends Wr{constructor(E){super();Jr(this,E,ol,el,Kr,{})}}export{ll as default,tl as metadata};
