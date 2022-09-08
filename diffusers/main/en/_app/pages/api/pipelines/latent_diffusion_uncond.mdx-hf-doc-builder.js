import{S as $i,i as Ei,s as Di,e as n,k as l,w as S,t as d,M as Pi,c as o,d as t,m as f,a,x as q,h as c,b as r,G as i,g as p,y as N,L as xi,q as O,o as H,B as U,v as Mi}from"../../../chunks/vendor-hf-doc-builder.js";import{D as yi}from"../../../chunks/Docstring-hf-doc-builder.js";import{I as se}from"../../../chunks/IconCopyLink-hf-doc-builder.js";function Li(Bt){let m,Le,v,D,le,B,tt,fe,it,ke,g,P,pe,z,nt,de,ot,Ae,x,at,C,rt,st,Te,K,lt,Ie,X,ce,ft,Se,M,pt,R,dt,ct,qe,_,L,ue,G,ut,he,ht,Ne,h,Oe,mt,He,vt,Ue,Be,w,k,me,V,gt,ve,_t,ze,A,ge,b,_e,wt,bt,we,yt,$t,Z,Et,Dt,be,y,ye,Q,Pt,xt,$e,Ee,Mt,Lt,ee,kt,Ce,$,T,De,j,At,Pe,Tt,Re,E,I,xe,W,It,Me,St,Ge,u,J,qt,Y,Nt,te,Ot,Ht,Ut,ie,F,Ve;return B=new se({}),z=new se({}),G=new se({}),V=new se({}),j=new se({}),W=new se({}),J=new yi({props:{name:"class diffusers.LDMPipeline",anchor:"diffusers.LDMPipeline",parameters:[{name:"vqvae",val:": VQModel"},{name:"unet",val:": UNet2DModel"},{name:"scheduler",val:": DDIMScheduler"}],parametersDescription:[{anchor:"diffusers.LDMPipeline.vqvae",description:`<strong>vqvae</strong> (<code>VQModel</code>) &#x2014;
Vector-quantized (VQ) Model to encode and decode images to and from latent representations.`,name:"vqvae"},{anchor:"diffusers.LDMPipeline.unet",description:"<strong>unet</strong> (<code>UNet2DModel</code>) &#x2014; U-Net architecture to denoise the encoded image latents.",name:"unet"},{anchor:"diffusers.LDMPipeline.scheduler",description:`<strong>scheduler</strong> (<a href="/docs/diffusers/main/en/api/schedulers#diffusers.SchedulerMixin">SchedulerMixin</a>) &#x2014;
<a href="/docs/diffusers/main/en/api/schedulers#diffusers.DDIMScheduler">DDIMScheduler</a> is to be used in combination with <code>unet</code> to denoise the encoded image latens.`,name:"scheduler"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/latent_diffusion_uncond/pipeline_latent_diffusion_uncond.py#L12"}}),F=new yi({props:{name:"__call__",anchor:"diffusers.LDMPipeline.__call__",parameters:[{name:"batch_size",val:": int = 1"},{name:"generator",val:": typing.Optional[torch._C.Generator] = None"},{name:"eta",val:": float = 0.0"},{name:"num_inference_steps",val:": int = 50"},{name:"output_type",val:": typing.Optional[str] = 'pil'"},{name:"return_dict",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.LDMPipeline.__call__.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of images to generate.`,name:"batch_size"},{anchor:"diffusers.LDMPipeline.__call__.generator",description:`<strong>generator</strong> (<code>torch.Generator</code>, <em>optional</em>) &#x2014;
A <a href="https://pytorch.org/docs/stable/generated/torch.Generator.html" rel="nofollow">torch generator</a> to make generation
deterministic.`,name:"generator"},{anchor:"diffusers.LDMPipeline.__call__.num_inference_steps",description:`<strong>num_inference_steps</strong> (<code>int</code>, <em>optional</em>, defaults to 50) &#x2014;
The number of denoising steps. More denoising steps usually lead to a higher quality image at the
expense of slower inference.`,name:"num_inference_steps"},{anchor:"diffusers.LDMPipeline.__call__.output_type",description:`<strong>output_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pil&quot;</code>) &#x2014;
The output format of the generate image. Choose between
<a href="https://pillow.readthedocs.io/en/stable/" rel="nofollow">PIL</a>: <code>PIL.Image.Image</code> or <code>nd.array</code>.`,name:"output_type"},{anchor:"diffusers.LDMPipeline.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to return a <a href="/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput">ImagePipelineOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/latent_diffusion_uncond/pipeline_latent_diffusion_uncond.py#L30",returnDescription:`
<p><code>ImagePipelineOutput</code> if
<code>return_dict</code> is True, otherwise a \`tuple. When returning a tuple, the first element is a list with the
generated images.</p>
`,returnType:`
<p><a
  href="/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput"
>ImagePipelineOutput</a> or <code>tuple</code></p>
`}}),{c(){m=n("meta"),Le=l(),v=n("h1"),D=n("a"),le=n("span"),S(B.$$.fragment),tt=l(),fe=n("span"),it=d("Unconditional Latent Diffusion"),ke=l(),g=n("h2"),P=n("a"),pe=n("span"),S(z.$$.fragment),nt=l(),de=n("span"),ot=d("Overview"),Ae=l(),x=n("p"),at=d("Unconditional Latent Diffusion was proposed in "),C=n("a"),rt=d("High-Resolution Image Synthesis with Latent Diffusion Models"),st=d(" by Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser, Bj\xF6rn Ommer."),Te=l(),K=n("p"),lt=d("The abstract of the paper is the following:"),Ie=l(),X=n("p"),ce=n("em"),ft=d("By decomposing the image formation process into a sequential application of denoising autoencoders, diffusion models (DMs) achieve state-of-the-art synthesis results on image data and beyond. Additionally, their formulation allows for a guiding mechanism to control the image generation process without retraining. However, since these models typically operate directly in pixel space, optimization of powerful DMs often consumes hundreds of GPU days and inference is expensive due to sequential evaluations. To enable DM training on limited computational resources while retaining their quality and flexibility, we apply them in the latent space of powerful pretrained autoencoders. In contrast to previous work, training diffusion models on such a representation allows for the first time to reach a near-optimal point between complexity reduction and detail preservation, greatly boosting visual fidelity. By introducing cross-attention layers into the model architecture, we turn diffusion models into powerful and flexible generators for general conditioning inputs such as text or bounding boxes and high-resolution synthesis becomes possible in a convolutional manner. Our latent diffusion models (LDMs) achieve a new state of the art for image inpainting and highly competitive performance on various tasks, including unconditional image generation, semantic scene synthesis, and super-resolution, while significantly reducing computational requirements compared to pixel-based DMs."),Se=l(),M=n("p"),pt=d("The original codebase can be found "),R=n("a"),dt=d("here"),ct=d("."),qe=l(),_=n("h2"),L=n("a"),ue=n("span"),S(G.$$.fragment),ut=l(),he=n("span"),ht=d("Tips:"),Ne=l(),h=n("ul"),Oe=n("li"),mt=l(),He=n("li"),vt=l(),Ue=n("li"),Be=l(),w=n("h2"),k=n("a"),me=n("span"),S(V.$$.fragment),gt=l(),ve=n("span"),_t=d("Available Pipelines:"),ze=l(),A=n("table"),ge=n("thead"),b=n("tr"),_e=n("th"),wt=d("Pipeline"),bt=l(),we=n("th"),yt=d("Tasks"),$t=l(),Z=n("th"),Et=d("Colab"),Dt=l(),be=n("tbody"),y=n("tr"),ye=n("td"),Q=n("a"),Pt=d("pipeline_latent_diffusion_uncond.py"),xt=l(),$e=n("td"),Ee=n("em"),Mt=d("Unconditional Image Generation"),Lt=l(),ee=n("td"),kt=d("-"),Ce=l(),$=n("h2"),T=n("a"),De=n("span"),S(j.$$.fragment),At=l(),Pe=n("span"),Tt=d("Examples:"),Re=l(),E=n("h2"),I=n("a"),xe=n("span"),S(W.$$.fragment),It=l(),Me=n("span"),St=d("LDMPipeline"),Ge=l(),u=n("div"),S(J.$$.fragment),qt=l(),Y=n("p"),Nt=d("This model inherits from "),te=n("a"),Ot=d("DiffusionPipeline"),Ht=d(`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),Ut=l(),ie=n("div"),S(F.$$.fragment),this.h()},l(e){const s=Pi('[data-svelte="svelte-1phssyn"]',document.head);m=o(s,"META",{name:!0,content:!0}),s.forEach(t),Le=f(e),v=o(e,"H1",{class:!0});var Qe=a(v);D=o(Qe,"A",{id:!0,class:!0,href:!0});var zt=a(D);le=o(zt,"SPAN",{});var Ct=a(le);q(B.$$.fragment,Ct),Ct.forEach(t),zt.forEach(t),tt=f(Qe),fe=o(Qe,"SPAN",{});var Rt=a(fe);it=c(Rt,"Unconditional Latent Diffusion"),Rt.forEach(t),Qe.forEach(t),ke=f(e),g=o(e,"H2",{class:!0});var je=a(g);P=o(je,"A",{id:!0,class:!0,href:!0});var Gt=a(P);pe=o(Gt,"SPAN",{});var Vt=a(pe);q(z.$$.fragment,Vt),Vt.forEach(t),Gt.forEach(t),nt=f(je),de=o(je,"SPAN",{});var Qt=a(de);ot=c(Qt,"Overview"),Qt.forEach(t),je.forEach(t),Ae=f(e),x=o(e,"P",{});var We=a(x);at=c(We,"Unconditional Latent Diffusion was proposed in "),C=o(We,"A",{href:!0,rel:!0});var jt=a(C);rt=c(jt,"High-Resolution Image Synthesis with Latent Diffusion Models"),jt.forEach(t),st=c(We," by Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser, Bj\xF6rn Ommer."),We.forEach(t),Te=f(e),K=o(e,"P",{});var Wt=a(K);lt=c(Wt,"The abstract of the paper is the following:"),Wt.forEach(t),Ie=f(e),X=o(e,"P",{});var Jt=a(X);ce=o(Jt,"EM",{});var Yt=a(ce);ft=c(Yt,"By decomposing the image formation process into a sequential application of denoising autoencoders, diffusion models (DMs) achieve state-of-the-art synthesis results on image data and beyond. Additionally, their formulation allows for a guiding mechanism to control the image generation process without retraining. However, since these models typically operate directly in pixel space, optimization of powerful DMs often consumes hundreds of GPU days and inference is expensive due to sequential evaluations. To enable DM training on limited computational resources while retaining their quality and flexibility, we apply them in the latent space of powerful pretrained autoencoders. In contrast to previous work, training diffusion models on such a representation allows for the first time to reach a near-optimal point between complexity reduction and detail preservation, greatly boosting visual fidelity. By introducing cross-attention layers into the model architecture, we turn diffusion models into powerful and flexible generators for general conditioning inputs such as text or bounding boxes and high-resolution synthesis becomes possible in a convolutional manner. Our latent diffusion models (LDMs) achieve a new state of the art for image inpainting and highly competitive performance on various tasks, including unconditional image generation, semantic scene synthesis, and super-resolution, while significantly reducing computational requirements compared to pixel-based DMs."),Yt.forEach(t),Jt.forEach(t),Se=f(e),M=o(e,"P",{});var Je=a(M);pt=c(Je,"The original codebase can be found "),R=o(Je,"A",{href:!0,rel:!0});var Ft=a(R);dt=c(Ft,"here"),Ft.forEach(t),ct=c(Je,"."),Je.forEach(t),qe=f(e),_=o(e,"H2",{class:!0});var Ye=a(_);L=o(Ye,"A",{id:!0,class:!0,href:!0});var Kt=a(L);ue=o(Kt,"SPAN",{});var Xt=a(ue);q(G.$$.fragment,Xt),Xt.forEach(t),Kt.forEach(t),ut=f(Ye),he=o(Ye,"SPAN",{});var Zt=a(he);ht=c(Zt,"Tips:"),Zt.forEach(t),Ye.forEach(t),Ne=f(e),h=o(e,"UL",{});var ne=a(h);Oe=o(ne,"LI",{}),a(Oe).forEach(t),mt=f(ne),He=o(ne,"LI",{}),a(He).forEach(t),vt=f(ne),Ue=o(ne,"LI",{}),a(Ue).forEach(t),ne.forEach(t),Be=f(e),w=o(e,"H2",{class:!0});var Fe=a(w);k=o(Fe,"A",{id:!0,class:!0,href:!0});var ei=a(k);me=o(ei,"SPAN",{});var ti=a(me);q(V.$$.fragment,ti),ti.forEach(t),ei.forEach(t),gt=f(Fe),ve=o(Fe,"SPAN",{});var ii=a(ve);_t=c(ii,"Available Pipelines:"),ii.forEach(t),Fe.forEach(t),ze=f(e),A=o(e,"TABLE",{});var Ke=a(A);ge=o(Ke,"THEAD",{});var ni=a(ge);b=o(ni,"TR",{});var oe=a(b);_e=o(oe,"TH",{});var oi=a(_e);wt=c(oi,"Pipeline"),oi.forEach(t),bt=f(oe),we=o(oe,"TH",{});var ai=a(we);yt=c(ai,"Tasks"),ai.forEach(t),$t=f(oe),Z=o(oe,"TH",{align:!0});var ri=a(Z);Et=c(ri,"Colab"),ri.forEach(t),oe.forEach(t),ni.forEach(t),Dt=f(Ke),be=o(Ke,"TBODY",{});var si=a(be);y=o(si,"TR",{});var ae=a(y);ye=o(ae,"TD",{});var li=a(ye);Q=o(li,"A",{href:!0,rel:!0});var fi=a(Q);Pt=c(fi,"pipeline_latent_diffusion_uncond.py"),fi.forEach(t),li.forEach(t),xt=f(ae),$e=o(ae,"TD",{});var pi=a($e);Ee=o(pi,"EM",{});var di=a(Ee);Mt=c(di,"Unconditional Image Generation"),di.forEach(t),pi.forEach(t),Lt=f(ae),ee=o(ae,"TD",{align:!0});var ci=a(ee);kt=c(ci,"-"),ci.forEach(t),ae.forEach(t),si.forEach(t),Ke.forEach(t),Ce=f(e),$=o(e,"H2",{class:!0});var Xe=a($);T=o(Xe,"A",{id:!0,class:!0,href:!0});var ui=a(T);De=o(ui,"SPAN",{});var hi=a(De);q(j.$$.fragment,hi),hi.forEach(t),ui.forEach(t),At=f(Xe),Pe=o(Xe,"SPAN",{});var mi=a(Pe);Tt=c(mi,"Examples:"),mi.forEach(t),Xe.forEach(t),Re=f(e),E=o(e,"H2",{class:!0});var Ze=a(E);I=o(Ze,"A",{id:!0,class:!0,href:!0});var vi=a(I);xe=o(vi,"SPAN",{});var gi=a(xe);q(W.$$.fragment,gi),gi.forEach(t),vi.forEach(t),It=f(Ze),Me=o(Ze,"SPAN",{});var _i=a(Me);St=c(_i,"LDMPipeline"),_i.forEach(t),Ze.forEach(t),Ge=f(e),u=o(e,"DIV",{class:!0});var re=a(u);q(J.$$.fragment,re),qt=f(re),Y=o(re,"P",{});var et=a(Y);Nt=c(et,"This model inherits from "),te=o(et,"A",{href:!0});var wi=a(te);Ot=c(wi,"DiffusionPipeline"),wi.forEach(t),Ht=c(et,`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),et.forEach(t),Ut=f(re),ie=o(re,"DIV",{class:!0});var bi=a(ie);q(F.$$.fragment,bi),bi.forEach(t),re.forEach(t),this.h()},h(){r(m,"name","hf:doc:metadata"),r(m,"content",JSON.stringify(ki)),r(D,"id","unconditional-latent-diffusion"),r(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(D,"href","#unconditional-latent-diffusion"),r(v,"class","relative group"),r(P,"id","overview"),r(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(P,"href","#overview"),r(g,"class","relative group"),r(C,"href","https://arxiv.org/abs/2112.10752"),r(C,"rel","nofollow"),r(R,"href","https://github.com/CompVis/latent-diffusion"),r(R,"rel","nofollow"),r(L,"id","tips"),r(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(L,"href","#tips"),r(_,"class","relative group"),r(k,"id","available-pipelines"),r(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(k,"href","#available-pipelines"),r(w,"class","relative group"),r(Z,"align","center"),r(Q,"href","https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/latent_diffusion_uncond/pipeline_latent_diffusion_uncond.py"),r(Q,"rel","nofollow"),r(ee,"align","center"),r(T,"id","examples"),r(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(T,"href","#examples"),r($,"class","relative group"),r(I,"id","diffusers.LDMPipeline"),r(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(I,"href","#diffusers.LDMPipeline"),r(E,"class","relative group"),r(te,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),r(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),r(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,s){i(document.head,m),p(e,Le,s),p(e,v,s),i(v,D),i(D,le),N(B,le,null),i(v,tt),i(v,fe),i(fe,it),p(e,ke,s),p(e,g,s),i(g,P),i(P,pe),N(z,pe,null),i(g,nt),i(g,de),i(de,ot),p(e,Ae,s),p(e,x,s),i(x,at),i(x,C),i(C,rt),i(x,st),p(e,Te,s),p(e,K,s),i(K,lt),p(e,Ie,s),p(e,X,s),i(X,ce),i(ce,ft),p(e,Se,s),p(e,M,s),i(M,pt),i(M,R),i(R,dt),i(M,ct),p(e,qe,s),p(e,_,s),i(_,L),i(L,ue),N(G,ue,null),i(_,ut),i(_,he),i(he,ht),p(e,Ne,s),p(e,h,s),i(h,Oe),i(h,mt),i(h,He),i(h,vt),i(h,Ue),p(e,Be,s),p(e,w,s),i(w,k),i(k,me),N(V,me,null),i(w,gt),i(w,ve),i(ve,_t),p(e,ze,s),p(e,A,s),i(A,ge),i(ge,b),i(b,_e),i(_e,wt),i(b,bt),i(b,we),i(we,yt),i(b,$t),i(b,Z),i(Z,Et),i(A,Dt),i(A,be),i(be,y),i(y,ye),i(ye,Q),i(Q,Pt),i(y,xt),i(y,$e),i($e,Ee),i(Ee,Mt),i(y,Lt),i(y,ee),i(ee,kt),p(e,Ce,s),p(e,$,s),i($,T),i(T,De),N(j,De,null),i($,At),i($,Pe),i(Pe,Tt),p(e,Re,s),p(e,E,s),i(E,I),i(I,xe),N(W,xe,null),i(E,It),i(E,Me),i(Me,St),p(e,Ge,s),p(e,u,s),N(J,u,null),i(u,qt),i(u,Y),i(Y,Nt),i(Y,te),i(te,Ot),i(Y,Ht),i(u,Ut),i(u,ie),N(F,ie,null),Ve=!0},p:xi,i(e){Ve||(O(B.$$.fragment,e),O(z.$$.fragment,e),O(G.$$.fragment,e),O(V.$$.fragment,e),O(j.$$.fragment,e),O(W.$$.fragment,e),O(J.$$.fragment,e),O(F.$$.fragment,e),Ve=!0)},o(e){H(B.$$.fragment,e),H(z.$$.fragment,e),H(G.$$.fragment,e),H(V.$$.fragment,e),H(j.$$.fragment,e),H(W.$$.fragment,e),H(J.$$.fragment,e),H(F.$$.fragment,e),Ve=!1},d(e){t(m),e&&t(Le),e&&t(v),U(B),e&&t(ke),e&&t(g),U(z),e&&t(Ae),e&&t(x),e&&t(Te),e&&t(K),e&&t(Ie),e&&t(X),e&&t(Se),e&&t(M),e&&t(qe),e&&t(_),U(G),e&&t(Ne),e&&t(h),e&&t(Be),e&&t(w),U(V),e&&t(ze),e&&t(A),e&&t(Ce),e&&t($),U(j),e&&t(Re),e&&t(E),U(W),e&&t(Ge),e&&t(u),U(J),U(F)}}}const ki={local:"unconditional-latent-diffusion",sections:[{local:"overview",title:"Overview"},{local:"tips",title:"Tips:"},{local:"available-pipelines",title:"Available Pipelines:"},{local:"examples",title:"Examples:"},{local:"diffusers.LDMPipeline",title:"LDMPipeline"}],title:"Unconditional Latent Diffusion"};function Ai(Bt){return Mi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qi extends $i{constructor(m){super();Ei(this,m,Ai,Li,Di,{})}}export{qi as default,ki as metadata};
