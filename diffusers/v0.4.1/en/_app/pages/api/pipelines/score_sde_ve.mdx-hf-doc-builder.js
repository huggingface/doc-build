import{S as Mt,i as Bt,s as zt,e as i,k as d,w as R,t as p,M as Gt,c as o,d as t,m as c,a,x as F,h,b as n,G as r,g as l,y as K,L as Ht,q as J,o as Y,B as j,v as Lt}from"../../../chunks/vendor-hf-doc-builder.js";import{D as qt}from"../../../chunks/Docstring-hf-doc-builder.js";import{I as Ve}from"../../../chunks/IconCopyLink-hf-doc-builder.js";function Wt(st){let f,he,u,S,Q,k,Ie,X,Ce,fe,m,y,Z,x,Ne,ee,Oe,ue,T,A,qe,Me,me,M,Be,ve,B,ze,ge,E,Ge,V,He,Le,_e,z,We,be,v,P,te,I,Ue,re,Re,we,$,ie,g,oe,Fe,Ke,ae,Je,Ye,G,je,Qe,ne,_,se,C,Xe,Ze,le,de,et,tt,H,rt,Se,b,D,ce,N,it,pe,ot,ye,w,O,at,L,q,Ee;return k=new Ve({}),x=new Ve({}),I=new Ve({}),N=new Ve({}),O=new qt({props:{name:"class diffusers.ScoreSdeVePipeline",anchor:"diffusers.ScoreSdeVePipeline",parameters:[{name:"unet",val:": UNet2DModel"},{name:"scheduler",val:": DiffusionPipeline"}],parametersDescription:[{anchor:"diffusers.ScoreSdeVePipeline.This",description:'<strong>This</strong> model inherits from <a href="/docs/diffusers/v0.4.1/en/api/diffusion_pipeline#diffusers.DiffusionPipeline">DiffusionPipeline</a>. Check the superclass documentation for the generic methods the &#x2014;',name:"This"},{anchor:"diffusers.ScoreSdeVePipeline.library",description:`<strong>library</strong> implements for all the pipelines (such as downloading or saving, running on a particular device, etc.) &#x2014;
unet (<a href="/docs/diffusers/v0.4.1/en/api/models#diffusers.UNet2DModel">UNet2DModel</a>): U-Net architecture to denoise the encoded image. scheduler (<a href="/docs/diffusers/v0.4.1/en/api/schedulers#diffusers.SchedulerMixin">SchedulerMixin</a>):
The <a href="/docs/diffusers/v0.4.1/en/api/schedulers#diffusers.ScoreSdeVeScheduler">ScoreSdeVeScheduler</a> scheduler to be used in combination with <code>unet</code> to denoise the encoded image.`,name:"library"}],source:"https://github.com/huggingface/diffusers/blob/v0.4.1/src/diffusers/pipelines/score_sde_ve/pipeline_score_sde_ve.py#L11"}}),q=new qt({props:{name:"__call__",anchor:"diffusers.ScoreSdeVePipeline.__call__",parameters:[{name:"batch_size",val:": int = 1"},{name:"num_inference_steps",val:": int = 2000"},{name:"generator",val:": typing.Optional[torch._C.Generator] = None"},{name:"output_type",val:": typing.Optional[str] = 'pil'"},{name:"return_dict",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.ScoreSdeVePipeline.__call__.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of images to generate.`,name:"batch_size"},{anchor:"diffusers.ScoreSdeVePipeline.__call__.generator",description:`<strong>generator</strong> (<code>torch.Generator</code>, <em>optional</em>) &#x2014;
A <a href="https://pytorch.org/docs/stable/generated/torch.Generator.html" rel="nofollow">torch generator</a> to make generation
deterministic.`,name:"generator"},{anchor:"diffusers.ScoreSdeVePipeline.__call__.output_type",description:`<strong>output_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pil&quot;</code>) &#x2014;
The output format of the generate image. Choose between
<a href="https://pillow.readthedocs.io/en/stable/" rel="nofollow">PIL</a>: <code>PIL.Image.Image</code> or <code>np.array</code>.`,name:"output_type"},{anchor:"diffusers.ScoreSdeVePipeline.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to return a <a href="/docs/diffusers/v0.4.1/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput">ImagePipelineOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/diffusers/blob/v0.4.1/src/diffusers/pipelines/score_sde_ve/pipeline_score_sde_ve.py#L26",returnDescription:`
<p><code>ImagePipelineOutput</code> if
<code>return_dict</code> is True, otherwise a \`tuple. When returning a tuple, the first element is a list with the
generated images.</p>
`,returnType:`
<p><a
  href="/docs/diffusers/v0.4.1/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput"
>ImagePipelineOutput</a> or <code>tuple</code></p>
`}}),{c(){f=i("meta"),he=d(),u=i("h1"),S=i("a"),Q=i("span"),R(k.$$.fragment),Ie=d(),X=i("span"),Ce=p("Score SDE VE"),fe=d(),m=i("h2"),y=i("a"),Z=i("span"),R(x.$$.fragment),Ne=d(),ee=i("span"),Oe=p("Overview"),ue=d(),T=i("p"),A=i("a"),qe=p("Score-Based Generative Modeling through Stochastic Differential Equations"),Me=p(" (Score SDE) by Yang Song, Jascha Sohl-Dickstein, Diederik P. Kingma, Abhishek Kumar, Stefano Ermon and Ben Poole."),me=d(),M=i("p"),Be=p("The abstract of the paper is the following:"),ve=d(),B=i("p"),ze=p("Creating noise from data is easy; creating data from noise is generative modeling. We present a stochastic differential equation (SDE) that smoothly transforms a complex data distribution to a known prior distribution by slowly injecting noise, and a corresponding reverse-time SDE that transforms the prior distribution back into the data distribution by slowly removing the noise. Crucially, the reverse-time SDE depends only on the time-dependent gradient field (\\aka, score) of the perturbed data distribution. By leveraging advances in score-based generative modeling, we can accurately estimate these scores with neural networks, and use numerical SDE solvers to generate samples. We show that this framework encapsulates previous approaches in score-based generative modeling and diffusion probabilistic modeling, allowing for new sampling procedures and new modeling capabilities. In particular, we introduce a predictor-corrector framework to correct errors in the evolution of the discretized reverse-time SDE. We also derive an equivalent neural ODE that samples from the same distribution as the SDE, but additionally enables exact likelihood computation, and improved sampling efficiency. In addition, we provide a new way to solve inverse problems with score-based models, as demonstrated with experiments on class-conditional generation, image inpainting, and colorization. Combined with multiple architectural improvements, we achieve record-breaking performance for unconditional image generation on CIFAR-10 with an Inception score of 9.89 and FID of 2.20, a competitive likelihood of 2.99 bits/dim, and demonstrate high fidelity generation of 1024 x 1024 images for the first time from a score-based generative model."),ge=d(),E=i("p"),Ge=p("The original codebase can be found "),V=i("a"),He=p("here"),Le=p("."),_e=d(),z=i("p"),We=p("This pipeline implements the Variance Expanding (VE) variant of the method."),be=d(),v=i("h2"),P=i("a"),te=i("span"),R(I.$$.fragment),Ue=d(),re=i("span"),Re=p("Available Pipelines:"),we=d(),$=i("table"),ie=i("thead"),g=i("tr"),oe=i("th"),Fe=p("Pipeline"),Ke=d(),ae=i("th"),Je=p("Tasks"),Ye=d(),G=i("th"),je=p("Colab"),Qe=d(),ne=i("tbody"),_=i("tr"),se=i("td"),C=i("a"),Xe=p("pipeline_score_sde_ve.py"),Ze=d(),le=i("td"),de=i("em"),et=p("Unconditional Image Generation"),tt=d(),H=i("td"),rt=p("-"),Se=d(),b=i("h2"),D=i("a"),ce=i("span"),R(N.$$.fragment),it=d(),pe=i("span"),ot=p("ScoreSdeVePipeline"),ye=d(),w=i("div"),R(O.$$.fragment),at=d(),L=i("div"),R(q.$$.fragment),this.h()},l(e){const s=Gt('[data-svelte="svelte-1phssyn"]',document.head);f=o(s,"META",{name:!0,content:!0}),s.forEach(t),he=c(e),u=o(e,"H1",{class:!0});var Pe=a(u);S=o(Pe,"A",{id:!0,class:!0,href:!0});var lt=a(S);Q=o(lt,"SPAN",{});var dt=a(Q);F(k.$$.fragment,dt),dt.forEach(t),lt.forEach(t),Ie=c(Pe),X=o(Pe,"SPAN",{});var ct=a(X);Ce=h(ct,"Score SDE VE"),ct.forEach(t),Pe.forEach(t),fe=c(e),m=o(e,"H2",{class:!0});var $e=a(m);y=o($e,"A",{id:!0,class:!0,href:!0});var pt=a(y);Z=o(pt,"SPAN",{});var ht=a(Z);F(x.$$.fragment,ht),ht.forEach(t),pt.forEach(t),Ne=c($e),ee=o($e,"SPAN",{});var ft=a(ee);Oe=h(ft,"Overview"),ft.forEach(t),$e.forEach(t),ue=c(e),T=o(e,"P",{});var nt=a(T);A=o(nt,"A",{href:!0,rel:!0});var ut=a(A);qe=h(ut,"Score-Based Generative Modeling through Stochastic Differential Equations"),ut.forEach(t),Me=h(nt," (Score SDE) by Yang Song, Jascha Sohl-Dickstein, Diederik P. Kingma, Abhishek Kumar, Stefano Ermon and Ben Poole."),nt.forEach(t),me=c(e),M=o(e,"P",{});var mt=a(M);Be=h(mt,"The abstract of the paper is the following:"),mt.forEach(t),ve=c(e),B=o(e,"P",{});var vt=a(B);ze=h(vt,"Creating noise from data is easy; creating data from noise is generative modeling. We present a stochastic differential equation (SDE) that smoothly transforms a complex data distribution to a known prior distribution by slowly injecting noise, and a corresponding reverse-time SDE that transforms the prior distribution back into the data distribution by slowly removing the noise. Crucially, the reverse-time SDE depends only on the time-dependent gradient field (\\aka, score) of the perturbed data distribution. By leveraging advances in score-based generative modeling, we can accurately estimate these scores with neural networks, and use numerical SDE solvers to generate samples. We show that this framework encapsulates previous approaches in score-based generative modeling and diffusion probabilistic modeling, allowing for new sampling procedures and new modeling capabilities. In particular, we introduce a predictor-corrector framework to correct errors in the evolution of the discretized reverse-time SDE. We also derive an equivalent neural ODE that samples from the same distribution as the SDE, but additionally enables exact likelihood computation, and improved sampling efficiency. In addition, we provide a new way to solve inverse problems with score-based models, as demonstrated with experiments on class-conditional generation, image inpainting, and colorization. Combined with multiple architectural improvements, we achieve record-breaking performance for unconditional image generation on CIFAR-10 with an Inception score of 9.89 and FID of 2.20, a competitive likelihood of 2.99 bits/dim, and demonstrate high fidelity generation of 1024 x 1024 images for the first time from a score-based generative model."),vt.forEach(t),ge=c(e),E=o(e,"P",{});var De=a(E);Ge=h(De,"The original codebase can be found "),V=o(De,"A",{href:!0,rel:!0});var gt=a(V);He=h(gt,"here"),gt.forEach(t),Le=h(De,"."),De.forEach(t),_e=c(e),z=o(e,"P",{});var _t=a(z);We=h(_t,"This pipeline implements the Variance Expanding (VE) variant of the method."),_t.forEach(t),be=c(e),v=o(e,"H2",{class:!0});var ke=a(v);P=o(ke,"A",{id:!0,class:!0,href:!0});var bt=a(P);te=o(bt,"SPAN",{});var wt=a(te);F(I.$$.fragment,wt),wt.forEach(t),bt.forEach(t),Ue=c(ke),re=o(ke,"SPAN",{});var St=a(re);Re=h(St,"Available Pipelines:"),St.forEach(t),ke.forEach(t),we=c(e),$=o(e,"TABLE",{});var xe=a($);ie=o(xe,"THEAD",{});var yt=a(ie);g=o(yt,"TR",{});var W=a(g);oe=o(W,"TH",{});var Et=a(oe);Fe=h(Et,"Pipeline"),Et.forEach(t),Ke=c(W),ae=o(W,"TH",{});var Pt=a(ae);Je=h(Pt,"Tasks"),Pt.forEach(t),Ye=c(W),G=o(W,"TH",{align:!0});var $t=a(G);je=h($t,"Colab"),$t.forEach(t),W.forEach(t),yt.forEach(t),Qe=c(xe),ne=o(xe,"TBODY",{});var Dt=a(ne);_=o(Dt,"TR",{});var U=a(_);se=o(U,"TD",{});var kt=a(se);C=o(kt,"A",{href:!0,rel:!0});var xt=a(C);Xe=h(xt,"pipeline_score_sde_ve.py"),xt.forEach(t),kt.forEach(t),Ze=c(U),le=o(U,"TD",{});var Tt=a(le);de=o(Tt,"EM",{});var At=a(de);et=h(At,"Unconditional Image Generation"),At.forEach(t),Tt.forEach(t),tt=c(U),H=o(U,"TD",{align:!0});var Vt=a(H);rt=h(Vt,"-"),Vt.forEach(t),U.forEach(t),Dt.forEach(t),xe.forEach(t),Se=c(e),b=o(e,"H2",{class:!0});var Te=a(b);D=o(Te,"A",{id:!0,class:!0,href:!0});var It=a(D);ce=o(It,"SPAN",{});var Ct=a(ce);F(N.$$.fragment,Ct),Ct.forEach(t),It.forEach(t),it=c(Te),pe=o(Te,"SPAN",{});var Nt=a(pe);ot=h(Nt,"ScoreSdeVePipeline"),Nt.forEach(t),Te.forEach(t),ye=c(e),w=o(e,"DIV",{class:!0});var Ae=a(w);F(O.$$.fragment,Ae),at=c(Ae),L=o(Ae,"DIV",{class:!0});var Ot=a(L);F(q.$$.fragment,Ot),Ot.forEach(t),Ae.forEach(t),this.h()},h(){n(f,"name","hf:doc:metadata"),n(f,"content",JSON.stringify(Ut)),n(S,"id","score-sde-ve"),n(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(S,"href","#score-sde-ve"),n(u,"class","relative group"),n(y,"id","overview"),n(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(y,"href","#overview"),n(m,"class","relative group"),n(A,"href","https://arxiv.org/abs/2011.13456"),n(A,"rel","nofollow"),n(V,"href","https://github.com/yang-song/score_sde_pytorch"),n(V,"rel","nofollow"),n(P,"id","available-pipelines"),n(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(P,"href","#available-pipelines"),n(v,"class","relative group"),n(G,"align","center"),n(C,"href","https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/score_sde_ve/pipeline_score_sde_ve.py"),n(C,"rel","nofollow"),n(H,"align","center"),n(D,"id","diffusers.ScoreSdeVePipeline"),n(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(D,"href","#diffusers.ScoreSdeVePipeline"),n(b,"class","relative group"),n(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),n(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,s){r(document.head,f),l(e,he,s),l(e,u,s),r(u,S),r(S,Q),K(k,Q,null),r(u,Ie),r(u,X),r(X,Ce),l(e,fe,s),l(e,m,s),r(m,y),r(y,Z),K(x,Z,null),r(m,Ne),r(m,ee),r(ee,Oe),l(e,ue,s),l(e,T,s),r(T,A),r(A,qe),r(T,Me),l(e,me,s),l(e,M,s),r(M,Be),l(e,ve,s),l(e,B,s),r(B,ze),l(e,ge,s),l(e,E,s),r(E,Ge),r(E,V),r(V,He),r(E,Le),l(e,_e,s),l(e,z,s),r(z,We),l(e,be,s),l(e,v,s),r(v,P),r(P,te),K(I,te,null),r(v,Ue),r(v,re),r(re,Re),l(e,we,s),l(e,$,s),r($,ie),r(ie,g),r(g,oe),r(oe,Fe),r(g,Ke),r(g,ae),r(ae,Je),r(g,Ye),r(g,G),r(G,je),r($,Qe),r($,ne),r(ne,_),r(_,se),r(se,C),r(C,Xe),r(_,Ze),r(_,le),r(le,de),r(de,et),r(_,tt),r(_,H),r(H,rt),l(e,Se,s),l(e,b,s),r(b,D),r(D,ce),K(N,ce,null),r(b,it),r(b,pe),r(pe,ot),l(e,ye,s),l(e,w,s),K(O,w,null),r(w,at),r(w,L),K(q,L,null),Ee=!0},p:Ht,i(e){Ee||(J(k.$$.fragment,e),J(x.$$.fragment,e),J(I.$$.fragment,e),J(N.$$.fragment,e),J(O.$$.fragment,e),J(q.$$.fragment,e),Ee=!0)},o(e){Y(k.$$.fragment,e),Y(x.$$.fragment,e),Y(I.$$.fragment,e),Y(N.$$.fragment,e),Y(O.$$.fragment,e),Y(q.$$.fragment,e),Ee=!1},d(e){t(f),e&&t(he),e&&t(u),j(k),e&&t(fe),e&&t(m),j(x),e&&t(ue),e&&t(T),e&&t(me),e&&t(M),e&&t(ve),e&&t(B),e&&t(ge),e&&t(E),e&&t(_e),e&&t(z),e&&t(be),e&&t(v),j(I),e&&t(we),e&&t($),e&&t(Se),e&&t(b),j(N),e&&t(ye),e&&t(w),j(O),j(q)}}}const Ut={local:"score-sde-ve",sections:[{local:"overview",title:"Overview"},{local:"available-pipelines",title:"Available Pipelines:"},{local:"diffusers.ScoreSdeVePipeline",title:"ScoreSdeVePipeline"}],title:"Score SDE VE"};function Rt(st){return Lt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Yt extends Mt{constructor(f){super();Bt(this,f,Rt,Wt,zt,{})}}export{Yt as default,Ut as metadata};
