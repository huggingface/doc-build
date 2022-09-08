import{S as To,i as Do,s as $o,e as i,k as l,w as S,t as c,M as Eo,c as n,d as t,m as d,a,x as q,h as p,b as r,G as o,g as f,y as N,L as Po,q as O,o as B,B as C,v as Mo}from"../../../chunks/vendor-hf-doc-builder.js";import{D as xo}from"../../../chunks/Docstring-hf-doc-builder.js";import{I as re}from"../../../chunks/IconCopyLink-hf-doc-builder.js";function Lo(Ht){let m,Me,g,D,se,H,tt,le,ot,Le,v,$,de,z,it,fe,nt,ke,E,at,U,rt,st,Ie,Y,lt,Ae,X,ce,dt,Se,P,ft,G,ct,pt,qe,_,M,pe,R,ht,he,ut,Ne,u,Oe,mt,Be,gt,Ce,He,y,L,ue,V,vt,me,_t,ze,k,ge,w,ve,yt,wt,_e,bt,xt,Z,Tt,Dt,ye,b,we,Q,$t,Et,be,xe,Pt,Mt,ee,Lt,Ue,x,I,Te,j,kt,De,It,Ge,T,A,$e,F,At,Ee,St,Re,h,J,qt,K,Nt,Pe,Ot,Bt,Ct,te,W,Ve;return H=new re({}),z=new re({}),R=new re({}),V=new re({}),j=new re({}),F=new re({}),J=new xo({props:{name:"class diffusers.LDMTextToImagePipeline",anchor:"diffusers.LDMTextToImagePipeline",parameters:[{name:"vqvae",val:": typing.Union[diffusers.models.vae.VQModel, diffusers.models.vae.AutoencoderKL]"},{name:"bert",val:": PreTrainedModel"},{name:"tokenizer",val:": PreTrainedTokenizer"},{name:"unet",val:": typing.Union[diffusers.models.unet_2d.UNet2DModel, diffusers.models.unet_2d_condition.UNet2DConditionModel]"},{name:"scheduler",val:": typing.Union[diffusers.schedulers.scheduling_ddim.DDIMScheduler, diffusers.schedulers.scheduling_pndm.PNDMScheduler, diffusers.schedulers.scheduling_lms_discrete.LMSDiscreteScheduler]"}],parametersDescription:[{anchor:"diffusers.LDMTextToImagePipeline.vqvae",description:`<strong>vqvae</strong> (<code>VQModel</code>) &#x2014;
Vector-quantized (VQ) Model to encode and decode images to and from latent representations.`,name:"vqvae"},{anchor:"diffusers.LDMTextToImagePipeline.bert",description:`<strong>bert</strong> (<code>LDMBertModel</code>) &#x2014;
Text-encoder model based on <a href="ttps://huggingface.co/docs/transformers/model_doc/bert">BERT</a> architecture.`,name:"bert"},{anchor:"diffusers.LDMTextToImagePipeline.tokenizer",description:`<strong>tokenizer</strong> (<code>transformers.BertTokenizer</code>) &#x2014;
Tokenizer of class
<a href="https://huggingface.co/docs/transformers/model_doc/bert#transformers.BertTokenizer" rel="nofollow">BertTokenizer</a>.`,name:"tokenizer"},{anchor:"diffusers.LDMTextToImagePipeline.unet",description:"<strong>unet</strong> (<code>UNet2DConditionModel</code>) &#x2014; Conditional U-Net architecture to denoise the encoded image latents.",name:"unet"},{anchor:"diffusers.LDMTextToImagePipeline.scheduler",description:`<strong>scheduler</strong> (<a href="/docs/diffusers/main/en/api/schedulers#diffusers.SchedulerMixin">SchedulerMixin</a>) &#x2014;
A scheduler to be used in combination with <code>unet</code> to denoise the encoded image latens. Can be one of
<a href="/docs/diffusers/main/en/api/schedulers#diffusers.DDIMScheduler">DDIMScheduler</a>, <a href="/docs/diffusers/main/en/api/schedulers#diffusers.LMSDiscreteScheduler">LMSDiscreteScheduler</a>, or <a href="/docs/diffusers/main/en/api/schedulers#diffusers.PNDMScheduler">PNDMScheduler</a>.`,name:"scheduler"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/latent_diffusion/pipeline_latent_diffusion.py#L21"}}),W=new xo({props:{name:"__call__",anchor:"diffusers.LDMTextToImagePipeline.__call__",parameters:[{name:"prompt",val:": typing.Union[str, typing.List[str]]"},{name:"height",val:": typing.Optional[int] = 256"},{name:"width",val:": typing.Optional[int] = 256"},{name:"num_inference_steps",val:": typing.Optional[int] = 50"},{name:"guidance_scale",val:": typing.Optional[float] = 1.0"},{name:"eta",val:": typing.Optional[float] = 0.0"},{name:"generator",val:": typing.Optional[torch._C.Generator] = None"},{name:"output_type",val:": typing.Optional[str] = 'pil'"},{name:"return_dict",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.LDMTextToImagePipeline.__call__.prompt",description:`<strong>prompt</strong> (<code>str</code> or <code>List[str]</code>) &#x2014;
The prompt or prompts to guide the image generation.`,name:"prompt"},{anchor:"diffusers.LDMTextToImagePipeline.__call__.height",description:`<strong>height</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The height in pixels of the generated image.`,name:"height"},{anchor:"diffusers.LDMTextToImagePipeline.__call__.width",description:`<strong>width</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The width in pixels of the generated image.`,name:"width"},{anchor:"diffusers.LDMTextToImagePipeline.__call__.num_inference_steps",description:`<strong>num_inference_steps</strong> (<code>int</code>, <em>optional</em>, defaults to 50) &#x2014;
The number of denoising steps. More denoising steps usually lead to a higher quality image at the
expense of slower inference.`,name:"num_inference_steps"},{anchor:"diffusers.LDMTextToImagePipeline.__call__.guidance_scale",description:`<strong>guidance_scale</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Guidance scale as defined in <a href="https://arxiv.org/abs/2207.12598" rel="nofollow">Classifier-Free Diffusion Guidance</a>.
<code>guidance_scale</code> is defined as <code>w</code> of equation 2. of <a href="https://arxiv.org/pdf/2205.11487.pdf" rel="nofollow">Imagen
Paper</a>. Guidance scale is enabled by setting <code>guidance_scale &gt; 1</code>. Higher guidance scale encourages to generate images that are closely linked to the text <code>prompt</code> at
the, usually at the expense of lower image quality.`,name:"guidance_scale"},{anchor:"diffusers.LDMTextToImagePipeline.__call__.generator",description:`<strong>generator</strong> (<code>torch.Generator</code>, <em>optional</em>) &#x2014;
A <a href="https://pytorch.org/docs/stable/generated/torch.Generator.html" rel="nofollow">torch generator</a> to make generation
deterministic.`,name:"generator"},{anchor:"diffusers.LDMTextToImagePipeline.__call__.output_type",description:`<strong>output_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pil&quot;</code>) &#x2014;
The output format of the generate image. Choose between
<a href="https://pillow.readthedocs.io/en/stable/" rel="nofollow">PIL</a>: <code>PIL.Image.Image</code> or <code>nd.array</code>.`,name:"output_type"},{anchor:"diffusers.LDMTextToImagePipeline.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ImagePipelineOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/latent_diffusion/pipeline_latent_diffusion.py#L52"}}),{c(){m=i("meta"),Me=l(),g=i("h1"),D=i("a"),se=i("span"),S(H.$$.fragment),tt=l(),le=i("span"),ot=c("Latent Diffusion"),Le=l(),v=i("h2"),$=i("a"),de=i("span"),S(z.$$.fragment),it=l(),fe=i("span"),nt=c("Overview"),ke=l(),E=i("p"),at=c("Latent Diffusion was proposed in "),U=i("a"),rt=c("High-Resolution Image Synthesis with Latent Diffusion Models"),st=c(" by Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser, Bj\xF6rn Ommer."),Ie=l(),Y=i("p"),lt=c("The abstract of the paper is the following:"),Ae=l(),X=i("p"),ce=i("em"),dt=c("By decomposing the image formation process into a sequential application of denoising autoencoders, diffusion models (DMs) achieve state-of-the-art synthesis results on image data and beyond. Additionally, their formulation allows for a guiding mechanism to control the image generation process without retraining. However, since these models typically operate directly in pixel space, optimization of powerful DMs often consumes hundreds of GPU days and inference is expensive due to sequential evaluations. To enable DM training on limited computational resources while retaining their quality and flexibility, we apply them in the latent space of powerful pretrained autoencoders. In contrast to previous work, training diffusion models on such a representation allows for the first time to reach a near-optimal point between complexity reduction and detail preservation, greatly boosting visual fidelity. By introducing cross-attention layers into the model architecture, we turn diffusion models into powerful and flexible generators for general conditioning inputs such as text or bounding boxes and high-resolution synthesis becomes possible in a convolutional manner. Our latent diffusion models (LDMs) achieve a new state of the art for image inpainting and highly competitive performance on various tasks, including unconditional image generation, semantic scene synthesis, and super-resolution, while significantly reducing computational requirements compared to pixel-based DMs."),Se=l(),P=i("p"),ft=c("The original codebase can be found "),G=i("a"),ct=c("here"),pt=c("."),qe=l(),_=i("h2"),M=i("a"),pe=i("span"),S(R.$$.fragment),ht=l(),he=i("span"),ut=c("Tips:"),Ne=l(),u=i("ul"),Oe=i("li"),mt=l(),Be=i("li"),gt=l(),Ce=i("li"),He=l(),y=i("h2"),L=i("a"),ue=i("span"),S(V.$$.fragment),vt=l(),me=i("span"),_t=c("Available Pipelines:"),ze=l(),k=i("table"),ge=i("thead"),w=i("tr"),ve=i("th"),yt=c("Pipeline"),wt=l(),_e=i("th"),bt=c("Tasks"),xt=l(),Z=i("th"),Tt=c("Colab"),Dt=l(),ye=i("tbody"),b=i("tr"),we=i("td"),Q=i("a"),$t=c("pipeline_latent_diffusion.py"),Et=l(),be=i("td"),xe=i("em"),Pt=c("Text-to-Image Generation"),Mt=l(),ee=i("td"),Lt=c("-"),Ue=l(),x=i("h2"),I=i("a"),Te=i("span"),S(j.$$.fragment),kt=l(),De=i("span"),It=c("Examples:"),Ge=l(),T=i("h2"),A=i("a"),$e=i("span"),S(F.$$.fragment),At=l(),Ee=i("span"),St=c("API"),Re=l(),h=i("div"),S(J.$$.fragment),qt=l(),K=i("p"),Nt=c("This model inherits from "),Pe=i("code"),Ot=c("DiffusionPipeline"),Bt=c(`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),Ct=l(),te=i("div"),S(W.$$.fragment),this.h()},l(e){const s=Eo('[data-svelte="svelte-1phssyn"]',document.head);m=n(s,"META",{name:!0,content:!0}),s.forEach(t),Me=d(e),g=n(e,"H1",{class:!0});var Qe=a(g);D=n(Qe,"A",{id:!0,class:!0,href:!0});var zt=a(D);se=n(zt,"SPAN",{});var Ut=a(se);q(H.$$.fragment,Ut),Ut.forEach(t),zt.forEach(t),tt=d(Qe),le=n(Qe,"SPAN",{});var Gt=a(le);ot=p(Gt,"Latent Diffusion"),Gt.forEach(t),Qe.forEach(t),Le=d(e),v=n(e,"H2",{class:!0});var je=a(v);$=n(je,"A",{id:!0,class:!0,href:!0});var Rt=a($);de=n(Rt,"SPAN",{});var Vt=a(de);q(z.$$.fragment,Vt),Vt.forEach(t),Rt.forEach(t),it=d(je),fe=n(je,"SPAN",{});var Qt=a(fe);nt=p(Qt,"Overview"),Qt.forEach(t),je.forEach(t),ke=d(e),E=n(e,"P",{});var Fe=a(E);at=p(Fe,"Latent Diffusion was proposed in "),U=n(Fe,"A",{href:!0,rel:!0});var jt=a(U);rt=p(jt,"High-Resolution Image Synthesis with Latent Diffusion Models"),jt.forEach(t),st=p(Fe," by Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser, Bj\xF6rn Ommer."),Fe.forEach(t),Ie=d(e),Y=n(e,"P",{});var Ft=a(Y);lt=p(Ft,"The abstract of the paper is the following:"),Ft.forEach(t),Ae=d(e),X=n(e,"P",{});var Jt=a(X);ce=n(Jt,"EM",{});var Kt=a(ce);dt=p(Kt,"By decomposing the image formation process into a sequential application of denoising autoencoders, diffusion models (DMs) achieve state-of-the-art synthesis results on image data and beyond. Additionally, their formulation allows for a guiding mechanism to control the image generation process without retraining. However, since these models typically operate directly in pixel space, optimization of powerful DMs often consumes hundreds of GPU days and inference is expensive due to sequential evaluations. To enable DM training on limited computational resources while retaining their quality and flexibility, we apply them in the latent space of powerful pretrained autoencoders. In contrast to previous work, training diffusion models on such a representation allows for the first time to reach a near-optimal point between complexity reduction and detail preservation, greatly boosting visual fidelity. By introducing cross-attention layers into the model architecture, we turn diffusion models into powerful and flexible generators for general conditioning inputs such as text or bounding boxes and high-resolution synthesis becomes possible in a convolutional manner. Our latent diffusion models (LDMs) achieve a new state of the art for image inpainting and highly competitive performance on various tasks, including unconditional image generation, semantic scene synthesis, and super-resolution, while significantly reducing computational requirements compared to pixel-based DMs."),Kt.forEach(t),Jt.forEach(t),Se=d(e),P=n(e,"P",{});var Je=a(P);ft=p(Je,"The original codebase can be found "),G=n(Je,"A",{href:!0,rel:!0});var Wt=a(G);ct=p(Wt,"here"),Wt.forEach(t),pt=p(Je,"."),Je.forEach(t),qe=d(e),_=n(e,"H2",{class:!0});var Ke=a(_);M=n(Ke,"A",{id:!0,class:!0,href:!0});var Yt=a(M);pe=n(Yt,"SPAN",{});var Xt=a(pe);q(R.$$.fragment,Xt),Xt.forEach(t),Yt.forEach(t),ht=d(Ke),he=n(Ke,"SPAN",{});var Zt=a(he);ut=p(Zt,"Tips:"),Zt.forEach(t),Ke.forEach(t),Ne=d(e),u=n(e,"UL",{});var oe=a(u);Oe=n(oe,"LI",{}),a(Oe).forEach(t),mt=d(oe),Be=n(oe,"LI",{}),a(Be).forEach(t),gt=d(oe),Ce=n(oe,"LI",{}),a(Ce).forEach(t),oe.forEach(t),He=d(e),y=n(e,"H2",{class:!0});var We=a(y);L=n(We,"A",{id:!0,class:!0,href:!0});var eo=a(L);ue=n(eo,"SPAN",{});var to=a(ue);q(V.$$.fragment,to),to.forEach(t),eo.forEach(t),vt=d(We),me=n(We,"SPAN",{});var oo=a(me);_t=p(oo,"Available Pipelines:"),oo.forEach(t),We.forEach(t),ze=d(e),k=n(e,"TABLE",{});var Ye=a(k);ge=n(Ye,"THEAD",{});var io=a(ge);w=n(io,"TR",{});var ie=a(w);ve=n(ie,"TH",{});var no=a(ve);yt=p(no,"Pipeline"),no.forEach(t),wt=d(ie),_e=n(ie,"TH",{});var ao=a(_e);bt=p(ao,"Tasks"),ao.forEach(t),xt=d(ie),Z=n(ie,"TH",{align:!0});var ro=a(Z);Tt=p(ro,"Colab"),ro.forEach(t),ie.forEach(t),io.forEach(t),Dt=d(Ye),ye=n(Ye,"TBODY",{});var so=a(ye);b=n(so,"TR",{});var ne=a(b);we=n(ne,"TD",{});var lo=a(we);Q=n(lo,"A",{href:!0,rel:!0});var fo=a(Q);$t=p(fo,"pipeline_latent_diffusion.py"),fo.forEach(t),lo.forEach(t),Et=d(ne),be=n(ne,"TD",{});var co=a(be);xe=n(co,"EM",{});var po=a(xe);Pt=p(po,"Text-to-Image Generation"),po.forEach(t),co.forEach(t),Mt=d(ne),ee=n(ne,"TD",{align:!0});var ho=a(ee);Lt=p(ho,"-"),ho.forEach(t),ne.forEach(t),so.forEach(t),Ye.forEach(t),Ue=d(e),x=n(e,"H2",{class:!0});var Xe=a(x);I=n(Xe,"A",{id:!0,class:!0,href:!0});var uo=a(I);Te=n(uo,"SPAN",{});var mo=a(Te);q(j.$$.fragment,mo),mo.forEach(t),uo.forEach(t),kt=d(Xe),De=n(Xe,"SPAN",{});var go=a(De);It=p(go,"Examples:"),go.forEach(t),Xe.forEach(t),Ge=d(e),T=n(e,"H2",{class:!0});var Ze=a(T);A=n(Ze,"A",{id:!0,class:!0,href:!0});var vo=a(A);$e=n(vo,"SPAN",{});var _o=a($e);q(F.$$.fragment,_o),_o.forEach(t),vo.forEach(t),At=d(Ze),Ee=n(Ze,"SPAN",{});var yo=a(Ee);St=p(yo,"API"),yo.forEach(t),Ze.forEach(t),Re=d(e),h=n(e,"DIV",{class:!0});var ae=a(h);q(J.$$.fragment,ae),qt=d(ae),K=n(ae,"P",{});var et=a(K);Nt=p(et,"This model inherits from "),Pe=n(et,"CODE",{});var wo=a(Pe);Ot=p(wo,"DiffusionPipeline"),wo.forEach(t),Bt=p(et,`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),et.forEach(t),Ct=d(ae),te=n(ae,"DIV",{class:!0});var bo=a(te);q(W.$$.fragment,bo),bo.forEach(t),ae.forEach(t),this.h()},h(){r(m,"name","hf:doc:metadata"),r(m,"content",JSON.stringify(ko)),r(D,"id","latent-diffusion"),r(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(D,"href","#latent-diffusion"),r(g,"class","relative group"),r($,"id","overview"),r($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r($,"href","#overview"),r(v,"class","relative group"),r(U,"href","https://arxiv.org/abs/2112.10752"),r(U,"rel","nofollow"),r(G,"href","https://github.com/CompVis/latent-diffusion"),r(G,"rel","nofollow"),r(M,"id","tips"),r(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(M,"href","#tips"),r(_,"class","relative group"),r(L,"id","available-pipelines"),r(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(L,"href","#available-pipelines"),r(y,"class","relative group"),r(Z,"align","center"),r(Q,"href","https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/latent_diffusion/pipeline_latent_diffusion.py"),r(Q,"rel","nofollow"),r(ee,"align","center"),r(I,"id","examples"),r(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(I,"href","#examples"),r(x,"class","relative group"),r(A,"id","diffusers.LDMTextToImagePipeline"),r(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(A,"href","#diffusers.LDMTextToImagePipeline"),r(T,"class","relative group"),r(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),r(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,s){o(document.head,m),f(e,Me,s),f(e,g,s),o(g,D),o(D,se),N(H,se,null),o(g,tt),o(g,le),o(le,ot),f(e,Le,s),f(e,v,s),o(v,$),o($,de),N(z,de,null),o(v,it),o(v,fe),o(fe,nt),f(e,ke,s),f(e,E,s),o(E,at),o(E,U),o(U,rt),o(E,st),f(e,Ie,s),f(e,Y,s),o(Y,lt),f(e,Ae,s),f(e,X,s),o(X,ce),o(ce,dt),f(e,Se,s),f(e,P,s),o(P,ft),o(P,G),o(G,ct),o(P,pt),f(e,qe,s),f(e,_,s),o(_,M),o(M,pe),N(R,pe,null),o(_,ht),o(_,he),o(he,ut),f(e,Ne,s),f(e,u,s),o(u,Oe),o(u,mt),o(u,Be),o(u,gt),o(u,Ce),f(e,He,s),f(e,y,s),o(y,L),o(L,ue),N(V,ue,null),o(y,vt),o(y,me),o(me,_t),f(e,ze,s),f(e,k,s),o(k,ge),o(ge,w),o(w,ve),o(ve,yt),o(w,wt),o(w,_e),o(_e,bt),o(w,xt),o(w,Z),o(Z,Tt),o(k,Dt),o(k,ye),o(ye,b),o(b,we),o(we,Q),o(Q,$t),o(b,Et),o(b,be),o(be,xe),o(xe,Pt),o(b,Mt),o(b,ee),o(ee,Lt),f(e,Ue,s),f(e,x,s),o(x,I),o(I,Te),N(j,Te,null),o(x,kt),o(x,De),o(De,It),f(e,Ge,s),f(e,T,s),o(T,A),o(A,$e),N(F,$e,null),o(T,At),o(T,Ee),o(Ee,St),f(e,Re,s),f(e,h,s),N(J,h,null),o(h,qt),o(h,K),o(K,Nt),o(K,Pe),o(Pe,Ot),o(K,Bt),o(h,Ct),o(h,te),N(W,te,null),Ve=!0},p:Po,i(e){Ve||(O(H.$$.fragment,e),O(z.$$.fragment,e),O(R.$$.fragment,e),O(V.$$.fragment,e),O(j.$$.fragment,e),O(F.$$.fragment,e),O(J.$$.fragment,e),O(W.$$.fragment,e),Ve=!0)},o(e){B(H.$$.fragment,e),B(z.$$.fragment,e),B(R.$$.fragment,e),B(V.$$.fragment,e),B(j.$$.fragment,e),B(F.$$.fragment,e),B(J.$$.fragment,e),B(W.$$.fragment,e),Ve=!1},d(e){t(m),e&&t(Me),e&&t(g),C(H),e&&t(Le),e&&t(v),C(z),e&&t(ke),e&&t(E),e&&t(Ie),e&&t(Y),e&&t(Ae),e&&t(X),e&&t(Se),e&&t(P),e&&t(qe),e&&t(_),C(R),e&&t(Ne),e&&t(u),e&&t(He),e&&t(y),C(V),e&&t(ze),e&&t(k),e&&t(Ue),e&&t(x),C(j),e&&t(Ge),e&&t(T),C(F),e&&t(Re),e&&t(h),C(J),C(W)}}}const ko={local:"latent-diffusion",sections:[{local:"overview",title:"Overview"},{local:"tips",title:"Tips:"},{local:"available-pipelines",title:"Available Pipelines:"},{local:"examples",title:"Examples:"},{local:"diffusers.LDMTextToImagePipeline",title:"API"}],title:"Latent Diffusion"};function Io(Ht){return Mo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class No extends To{constructor(m){super();Do(this,m,Io,Lo,$o,{})}}export{No as default,ko as metadata};
