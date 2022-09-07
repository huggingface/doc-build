import{S as Ft,i as Rt,s as zt,e as r,k as l,w as W,t as h,M as Wt,c as o,d as a,m as c,a as i,x as Y,h as p,b as s,G as t,g as f,y as J,L as Yt,q as j,o as Q,B as X,v as Jt}from"../../../chunks/vendor-hf-doc-builder.js";import{D as Bt}from"../../../chunks/Docstring-hf-doc-builder.js";import{I as Ke}from"../../../chunks/IconCopyLink-hf-doc-builder.js";function jt(ft){let u,ve,m,y,Z,S,Ie,ee,Ne,ge,v,E,te,x,Me,ae,qe,_e,V,D,Ge,Le,be,O,Oe,we,C,Ce,ye,H,He,Ee,g,$,re,K,Ue,oe,Be,$e,k,ie,_,se,Fe,Re,ne,ze,We,U,Ye,Je,le,b,ce,I,je,Qe,he,pe,Xe,Ze,B,et,ke,w,P,fe,N,tt,de,at,Pe,d,M,rt,ue,ot,it,T,st,q,nt,lt,G,ct,ht,F,L,Te;return S=new Ke({}),x=new Ke({}),K=new Ke({}),N=new Ke({}),M=new Bt({props:{name:"class diffusers.KarrasVePipeline",anchor:"diffusers.KarrasVePipeline",parameters:[{name:"unet",val:": UNet2DModel"},{name:"scheduler",val:": KarrasVeScheduler"}],parametersDescription:[{anchor:"diffusers.KarrasVePipeline.unet",description:"<strong>unet</strong> (<code>UNet2DModel</code>) &#x2014; U-Net architecture to denoise the encoded image.",name:"unet"},{anchor:"diffusers.KarrasVePipeline.scheduler",description:`<strong>scheduler</strong> (<code>KarrasVeScheduler</code>) &#x2014;
Scheduler for the diffusion process to be used in combination with <code>unet</code> to denoise the encoded image.`,name:"scheduler"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/stochastic_karras_ve/pipeline_stochastic_karras_ve.py#L12"}}),L=new Bt({props:{name:"__call__",anchor:"diffusers.KarrasVePipeline.__call__",parameters:[{name:"batch_size",val:": int = 1"},{name:"num_inference_steps",val:": int = 50"},{name:"generator",val:": typing.Optional[torch._C.Generator] = None"},{name:"output_type",val:": typing.Optional[str] = 'pil'"},{name:"return_dict",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.KarrasVePipeline.__call__.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of images to generate.`,name:"batch_size"},{anchor:"diffusers.KarrasVePipeline.__call__.generator",description:`<strong>generator</strong> (<code>torch.Generator</code>, <em>optional</em>) &#x2014;
A <a href="https://pytorch.org/docs/stable/generated/torch.Generator.html" rel="nofollow">torch generator</a> to make generation
deterministic.`,name:"generator"},{anchor:"diffusers.KarrasVePipeline.__call__.num_inference_steps",description:`<strong>num_inference_steps</strong> (<code>int</code>, <em>optional</em>, defaults to 50) &#x2014;
The number of denoising steps. More denoising steps usually lead to a higher quality image at the
expense of slower inference.`,name:"num_inference_steps"},{anchor:"diffusers.KarrasVePipeline.__call__.output_type",description:`<strong>output_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pil&quot;</code>) &#x2014;
The output format of the generate image. Choose between
<a href="https://pillow.readthedocs.io/en/stable/" rel="nofollow">PIL</a>: <em>PIL.Image.Image</em> or <em>nd.array</em>.`,name:"output_type"},{anchor:"diffusers.KarrasVePipeline.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to return a [<em>~pipeline_utils.ImagePipelineOutput</em>] instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/stochastic_karras_ve/pipeline_stochastic_karras_ve.py#L36"}}),{c(){u=r("meta"),ve=l(),m=r("h1"),y=r("a"),Z=r("span"),W(S.$$.fragment),Ie=l(),ee=r("span"),Ne=h("Stochastic Karras VE"),ge=l(),v=r("h2"),E=r("a"),te=r("span"),W(x.$$.fragment),Me=l(),ae=r("span"),qe=h("Overview"),_e=l(),V=r("p"),D=r("a"),Ge=h("Elucidating the Design Space of Diffusion-Based Generative Models"),Le=h(" by Tero Karras, Miika Aittala, Timo Aila and Samuli Laine."),be=l(),O=r("p"),Oe=h("The abstract of the paper is the following:"),we=l(),C=r("p"),Ce=h("We argue that the theory and practice of diffusion-based generative models are currently unnecessarily convoluted and seek to remedy the situation by presenting a design space that clearly separates the concrete design choices. This lets us identify several changes to both the sampling and training processes, as well as preconditioning of the score networks. Together, our improvements yield new state-of-the-art FID of 1.79 for CIFAR-10 in a class-conditional setting and 1.97 in an unconditional setting, with much faster sampling (35 network evaluations per image) than prior designs. To further demonstrate their modular nature, we show that our design changes dramatically improve both the efficiency and quality obtainable with pre-trained score networks from previous work, including improving the FID of an existing ImageNet-64 model from 2.07 to near-SOTA 1.55."),ye=l(),H=r("p"),He=h("This pipeline implements the Stochastic sampling tailored to the Variance-Expanding (VE) models."),Ee=l(),g=r("h2"),$=r("a"),re=r("span"),W(K.$$.fragment),Ue=l(),oe=r("span"),Be=h("Available Pipelines:"),$e=l(),k=r("table"),ie=r("thead"),_=r("tr"),se=r("th"),Fe=h("Pipeline"),Re=l(),ne=r("th"),ze=h("Tasks"),We=l(),U=r("th"),Ye=h("Colab"),Je=l(),le=r("tbody"),b=r("tr"),ce=r("td"),I=r("a"),je=h("pipeline_stochastic_karras_ve.py"),Qe=l(),he=r("td"),pe=r("em"),Xe=h("Unconditional Image Generation"),Ze=l(),B=r("td"),et=h("-"),ke=l(),w=r("h2"),P=r("a"),fe=r("span"),W(N.$$.fragment),tt=l(),de=r("span"),at=h("API"),Pe=l(),d=r("div"),W(M.$$.fragment),rt=l(),ue=r("p"),ot=h(`Stochastic sampling from Karras et al. [1] tailored to the Variance-Expanding (VE) models [2]. Use Algorithm 2 and
the VE column of Table 1 from [1] for reference.`),it=l(),T=r("p"),st=h(`[1] Karras, Tero, et al. \u201CElucidating the Design Space of Diffusion-Based Generative Models.\u201D
`),q=r("a"),nt=h("https://arxiv.org/abs/2206.00364"),lt=h(` [2] Song, Yang, et al. \u201CScore-based generative modeling through stochastic
differential equations.\u201D `),G=r("a"),ct=h("https://arxiv.org/abs/2011.13456"),ht=l(),F=r("div"),W(L.$$.fragment),this.h()},l(e){const n=Wt('[data-svelte="svelte-1phssyn"]',document.head);u=o(n,"META",{name:!0,content:!0}),n.forEach(a),ve=c(e),m=o(e,"H1",{class:!0});var Ae=i(m);y=o(Ae,"A",{id:!0,class:!0,href:!0});var dt=i(y);Z=o(dt,"SPAN",{});var ut=i(Z);Y(S.$$.fragment,ut),ut.forEach(a),dt.forEach(a),Ie=c(Ae),ee=o(Ae,"SPAN",{});var mt=i(ee);Ne=p(mt,"Stochastic Karras VE"),mt.forEach(a),Ae.forEach(a),ge=c(e),v=o(e,"H2",{class:!0});var Se=i(v);E=o(Se,"A",{id:!0,class:!0,href:!0});var vt=i(E);te=o(vt,"SPAN",{});var gt=i(te);Y(x.$$.fragment,gt),gt.forEach(a),vt.forEach(a),Me=c(Se),ae=o(Se,"SPAN",{});var _t=i(ae);qe=p(_t,"Overview"),_t.forEach(a),Se.forEach(a),_e=c(e),V=o(e,"P",{});var pt=i(V);D=o(pt,"A",{href:!0,rel:!0});var bt=i(D);Ge=p(bt,"Elucidating the Design Space of Diffusion-Based Generative Models"),bt.forEach(a),Le=p(pt," by Tero Karras, Miika Aittala, Timo Aila and Samuli Laine."),pt.forEach(a),be=c(e),O=o(e,"P",{});var wt=i(O);Oe=p(wt,"The abstract of the paper is the following:"),wt.forEach(a),we=c(e),C=o(e,"P",{});var yt=i(C);Ce=p(yt,"We argue that the theory and practice of diffusion-based generative models are currently unnecessarily convoluted and seek to remedy the situation by presenting a design space that clearly separates the concrete design choices. This lets us identify several changes to both the sampling and training processes, as well as preconditioning of the score networks. Together, our improvements yield new state-of-the-art FID of 1.79 for CIFAR-10 in a class-conditional setting and 1.97 in an unconditional setting, with much faster sampling (35 network evaluations per image) than prior designs. To further demonstrate their modular nature, we show that our design changes dramatically improve both the efficiency and quality obtainable with pre-trained score networks from previous work, including improving the FID of an existing ImageNet-64 model from 2.07 to near-SOTA 1.55."),yt.forEach(a),ye=c(e),H=o(e,"P",{});var Et=i(H);He=p(Et,"This pipeline implements the Stochastic sampling tailored to the Variance-Expanding (VE) models."),Et.forEach(a),Ee=c(e),g=o(e,"H2",{class:!0});var xe=i(g);$=o(xe,"A",{id:!0,class:!0,href:!0});var $t=i($);re=o($t,"SPAN",{});var kt=i(re);Y(K.$$.fragment,kt),kt.forEach(a),$t.forEach(a),Ue=c(xe),oe=o(xe,"SPAN",{});var Pt=i(oe);Be=p(Pt,"Available Pipelines:"),Pt.forEach(a),xe.forEach(a),$e=c(e),k=o(e,"TABLE",{});var Ve=i(k);ie=o(Ve,"THEAD",{});var Tt=i(ie);_=o(Tt,"TR",{});var R=i(_);se=o(R,"TH",{});var At=i(se);Fe=p(At,"Pipeline"),At.forEach(a),Re=c(R),ne=o(R,"TH",{});var St=i(ne);ze=p(St,"Tasks"),St.forEach(a),We=c(R),U=o(R,"TH",{align:!0});var xt=i(U);Ye=p(xt,"Colab"),xt.forEach(a),R.forEach(a),Tt.forEach(a),Je=c(Ve),le=o(Ve,"TBODY",{});var Vt=i(le);b=o(Vt,"TR",{});var z=i(b);ce=o(z,"TD",{});var Dt=i(ce);I=o(Dt,"A",{href:!0,rel:!0});var Kt=i(I);je=p(Kt,"pipeline_stochastic_karras_ve.py"),Kt.forEach(a),Dt.forEach(a),Qe=c(z),he=o(z,"TD",{});var It=i(he);pe=o(It,"EM",{});var Nt=i(pe);Xe=p(Nt,"Unconditional Image Generation"),Nt.forEach(a),It.forEach(a),Ze=c(z),B=o(z,"TD",{align:!0});var Mt=i(B);et=p(Mt,"-"),Mt.forEach(a),z.forEach(a),Vt.forEach(a),Ve.forEach(a),ke=c(e),w=o(e,"H2",{class:!0});var De=i(w);P=o(De,"A",{id:!0,class:!0,href:!0});var qt=i(P);fe=o(qt,"SPAN",{});var Gt=i(fe);Y(N.$$.fragment,Gt),Gt.forEach(a),qt.forEach(a),tt=c(De),de=o(De,"SPAN",{});var Lt=i(de);at=p(Lt,"API"),Lt.forEach(a),De.forEach(a),Pe=c(e),d=o(e,"DIV",{class:!0});var A=i(d);Y(M.$$.fragment,A),rt=c(A),ue=o(A,"P",{});var Ot=i(ue);ot=p(Ot,`Stochastic sampling from Karras et al. [1] tailored to the Variance-Expanding (VE) models [2]. Use Algorithm 2 and
the VE column of Table 1 from [1] for reference.`),Ot.forEach(a),it=c(A),T=o(A,"P",{});var me=i(T);st=p(me,`[1] Karras, Tero, et al. \u201CElucidating the Design Space of Diffusion-Based Generative Models.\u201D
`),q=o(me,"A",{href:!0,rel:!0});var Ct=i(q);nt=p(Ct,"https://arxiv.org/abs/2206.00364"),Ct.forEach(a),lt=p(me,` [2] Song, Yang, et al. \u201CScore-based generative modeling through stochastic
differential equations.\u201D `),G=o(me,"A",{href:!0,rel:!0});var Ht=i(G);ct=p(Ht,"https://arxiv.org/abs/2011.13456"),Ht.forEach(a),me.forEach(a),ht=c(A),F=o(A,"DIV",{class:!0});var Ut=i(F);Y(L.$$.fragment,Ut),Ut.forEach(a),A.forEach(a),this.h()},h(){s(u,"name","hf:doc:metadata"),s(u,"content",JSON.stringify(Qt)),s(y,"id","stochastic-karras-ve"),s(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(y,"href","#stochastic-karras-ve"),s(m,"class","relative group"),s(E,"id","overview"),s(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(E,"href","#overview"),s(v,"class","relative group"),s(D,"href","https://arxiv.org/abs/2206.00364"),s(D,"rel","nofollow"),s($,"id","available-pipelines"),s($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s($,"href","#available-pipelines"),s(g,"class","relative group"),s(U,"align","center"),s(I,"href","https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/stochastic_karras_ve/pipeline_stochastic_karras_ve.py"),s(I,"rel","nofollow"),s(B,"align","center"),s(P,"id","diffusers.KarrasVePipeline"),s(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(P,"href","#diffusers.KarrasVePipeline"),s(w,"class","relative group"),s(q,"href","https://arxiv.org/abs/2206.00364"),s(q,"rel","nofollow"),s(G,"href","https://arxiv.org/abs/2011.13456"),s(G,"rel","nofollow"),s(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(d,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,n){t(document.head,u),f(e,ve,n),f(e,m,n),t(m,y),t(y,Z),J(S,Z,null),t(m,Ie),t(m,ee),t(ee,Ne),f(e,ge,n),f(e,v,n),t(v,E),t(E,te),J(x,te,null),t(v,Me),t(v,ae),t(ae,qe),f(e,_e,n),f(e,V,n),t(V,D),t(D,Ge),t(V,Le),f(e,be,n),f(e,O,n),t(O,Oe),f(e,we,n),f(e,C,n),t(C,Ce),f(e,ye,n),f(e,H,n),t(H,He),f(e,Ee,n),f(e,g,n),t(g,$),t($,re),J(K,re,null),t(g,Ue),t(g,oe),t(oe,Be),f(e,$e,n),f(e,k,n),t(k,ie),t(ie,_),t(_,se),t(se,Fe),t(_,Re),t(_,ne),t(ne,ze),t(_,We),t(_,U),t(U,Ye),t(k,Je),t(k,le),t(le,b),t(b,ce),t(ce,I),t(I,je),t(b,Qe),t(b,he),t(he,pe),t(pe,Xe),t(b,Ze),t(b,B),t(B,et),f(e,ke,n),f(e,w,n),t(w,P),t(P,fe),J(N,fe,null),t(w,tt),t(w,de),t(de,at),f(e,Pe,n),f(e,d,n),J(M,d,null),t(d,rt),t(d,ue),t(ue,ot),t(d,it),t(d,T),t(T,st),t(T,q),t(q,nt),t(T,lt),t(T,G),t(G,ct),t(d,ht),t(d,F),J(L,F,null),Te=!0},p:Yt,i(e){Te||(j(S.$$.fragment,e),j(x.$$.fragment,e),j(K.$$.fragment,e),j(N.$$.fragment,e),j(M.$$.fragment,e),j(L.$$.fragment,e),Te=!0)},o(e){Q(S.$$.fragment,e),Q(x.$$.fragment,e),Q(K.$$.fragment,e),Q(N.$$.fragment,e),Q(M.$$.fragment,e),Q(L.$$.fragment,e),Te=!1},d(e){a(u),e&&a(ve),e&&a(m),X(S),e&&a(ge),e&&a(v),X(x),e&&a(_e),e&&a(V),e&&a(be),e&&a(O),e&&a(we),e&&a(C),e&&a(ye),e&&a(H),e&&a(Ee),e&&a(g),X(K),e&&a($e),e&&a(k),e&&a(ke),e&&a(w),X(N),e&&a(Pe),e&&a(d),X(M),X(L)}}}const Qt={local:"stochastic-karras-ve",sections:[{local:"overview",title:"Overview"},{local:"available-pipelines",title:"Available Pipelines:"},{local:"diffusers.KarrasVePipeline",title:"API"}],title:"Stochastic Karras VE"};function Xt(ft){return Jt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class aa extends Ft{constructor(u){super();Rt(this,u,Xt,jt,zt,{})}}export{aa as default,Qt as metadata};
