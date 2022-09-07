import{S as Wt,i as zt,s as Bt,e as r,k as l,w as j,t as p,M as Jt,c as i,d as t,m as c,a as o,x as V,h as d,b as n,G as a,g as f,y as Y,L as Rt,q as F,o as K,B as Q,v as jt}from"../../../chunks/vendor-hf-doc-builder.js";import{D as Ut}from"../../../chunks/Docstring-hf-doc-builder.js";import{I as Se}from"../../../chunks/IconCopyLink-hf-doc-builder.js";function Vt(dt){let m,me,u,w,X,I,qe,Z,Ce,ue,v,y,ee,k,Ne,te,Oe,ve,T,A,He,Le,ge,L,Ge,_e,G,Ue,De,P,We,x,ze,Be,be,g,M,ae,S,Je,re,Re,we,$,ie,_,oe,je,Ve,ne,Ye,Fe,U,Ke,Qe,se,D,le,q,Xe,Ze,ce,pe,et,tt,W,at,ye,b,E,de,C,rt,fe,it,Pe,h,N,ot,O,nt,he,st,lt,ct,z,H,Me;return I=new Se({}),k=new Se({}),S=new Se({}),C=new Se({}),N=new Ut({props:{name:"class diffusers.DDIMPipeline",anchor:"diffusers.DDIMPipeline",parameters:[{name:"unet",val:""},{name:"scheduler",val:""}],parametersDescription:[{anchor:"diffusers.DDIMPipeline.unet",description:"<strong>unet</strong> (<code>UNet2DModel</code>) &#x2014; U-Net architecture to denoise the encoded image.",name:"unet"},{anchor:"diffusers.DDIMPipeline.scheduler",description:`<strong>scheduler</strong> (<code>SchedulerMixin</code>) &#x2014;
A scheduler to be used in combination with <code>unet</code> to denoise the encoded image. Can be one of
<code>DDPMScheduler</code>, or <code>DDIMScheduler</code>.`,name:"scheduler"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/ddim/pipeline_ddim.py#L25"}}),H=new Ut({props:{name:"__call__",anchor:"diffusers.DDIMPipeline.__call__",parameters:[{name:"batch_size",val:": int = 1"},{name:"generator",val:": typing.Optional[torch._C.Generator] = None"},{name:"eta",val:": float = 0.0"},{name:"num_inference_steps",val:": int = 50"},{name:"output_type",val:": typing.Optional[str] = 'pil'"},{name:"return_dict",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.DDIMPipeline.__call__.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of images to generate.`,name:"batch_size"},{anchor:"diffusers.DDIMPipeline.__call__.generator",description:`<strong>generator</strong> (<code>torch.Generator</code>, <em>optional</em>) &#x2014;
A <a href="https://pytorch.org/docs/stable/generated/torch.Generator.html" rel="nofollow">torch generator</a> to make generation
deterministic.`,name:"generator"},{anchor:"diffusers.DDIMPipeline.__call__.eta",description:`<strong>eta</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The eta parameter which controls the scale of the variance (0 is DDIM and 1 is one type of DDPM).`,name:"eta"},{anchor:"diffusers.DDIMPipeline.__call__.num_inference_steps",description:`<strong>num_inference_steps</strong> (<code>int</code>, <em>optional</em>, defaults to 50) &#x2014;
The number of denoising steps. More denoising steps usually lead to a higher quality image at the
expense of slower inference.`,name:"num_inference_steps"},{anchor:"diffusers.DDIMPipeline.__call__.output_type",description:`<strong>output_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pil&quot;</code>) &#x2014;
The output format of the generate image. Choose between
<a href="https://pillow.readthedocs.io/en/stable/" rel="nofollow">PIL</a>: <em>PIL.Image.Image</em> or <em>nd.array</em>.`,name:"output_type"},{anchor:"diffusers.DDIMPipeline.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to return a [<em>~pipeline_utils.ImagePipelineOutput</em>] instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/ddim/pipeline_ddim.py#L42"}}),{c(){m=r("meta"),me=l(),u=r("h1"),w=r("a"),X=r("span"),j(I.$$.fragment),qe=l(),Z=r("span"),Ce=p("DDIM"),ue=l(),v=r("h2"),y=r("a"),ee=r("span"),j(k.$$.fragment),Ne=l(),te=r("span"),Oe=p("Overview"),ve=l(),T=r("p"),A=r("a"),He=p("Denoising Diffusion Implicit Models"),Le=p(" (DDIM) by Jiaming Song, Chenlin Meng and Stefano Ermon."),ge=l(),L=r("p"),Ge=p("The abstract of the paper is the following:"),_e=l(),G=r("p"),Ue=p("Denoising diffusion probabilistic models (DDPMs) have achieved high quality image generation without adversarial training, yet they require simulating a Markov chain for many steps to produce a sample. To accelerate sampling, we present denoising diffusion implicit models (DDIMs), a more efficient class of iterative implicit probabilistic models with the same training procedure as DDPMs. In DDPMs, the generative process is defined as the reverse of a Markovian diffusion process. We construct a class of non-Markovian diffusion processes that lead to the same training objective, but whose reverse process can be much faster to sample from. We empirically demonstrate that DDIMs can produce high quality samples 10\xD7 to 50\xD7 faster in terms of wall-clock time compared to DDPMs, allow us to trade off computation for sample quality, and can perform semantically meaningful image interpolation directly in the latent space."),De=l(),P=r("p"),We=p("The original codebase of this paper can be found "),x=r("a"),ze=p("here"),Be=p("."),be=l(),g=r("h2"),M=r("a"),ae=r("span"),j(S.$$.fragment),Je=l(),re=r("span"),Re=p("Available Pipelines:"),we=l(),$=r("table"),ie=r("thead"),_=r("tr"),oe=r("th"),je=p("Pipeline"),Ve=l(),ne=r("th"),Ye=p("Tasks"),Fe=l(),U=r("th"),Ke=p("Colab"),Qe=l(),se=r("tbody"),D=r("tr"),le=r("td"),q=r("a"),Xe=p("pipeline_ddim.py"),Ze=l(),ce=r("td"),pe=r("em"),et=p("Unconditional Image Generation"),tt=l(),W=r("td"),at=p("-"),ye=l(),b=r("h2"),E=r("a"),de=r("span"),j(C.$$.fragment),rt=l(),fe=r("span"),it=p("API"),Pe=l(),h=r("div"),j(N.$$.fragment),ot=l(),O=r("p"),nt=p("This model inherits from "),he=r("code"),st=p("DiffusionPipeline"),lt=p(`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),ct=l(),z=r("div"),j(H.$$.fragment),this.h()},l(e){const s=Jt('[data-svelte="svelte-1phssyn"]',document.head);m=i(s,"META",{name:!0,content:!0}),s.forEach(t),me=c(e),u=i(e,"H1",{class:!0});var $e=o(u);w=i($e,"A",{id:!0,class:!0,href:!0});var ft=o(w);X=i(ft,"SPAN",{});var ht=o(X);V(I.$$.fragment,ht),ht.forEach(t),ft.forEach(t),qe=c($e),Z=i($e,"SPAN",{});var mt=o(Z);Ce=d(mt,"DDIM"),mt.forEach(t),$e.forEach(t),ue=c(e),v=i(e,"H2",{class:!0});var Ee=o(v);y=i(Ee,"A",{id:!0,class:!0,href:!0});var ut=o(y);ee=i(ut,"SPAN",{});var vt=o(ee);V(k.$$.fragment,vt),vt.forEach(t),ut.forEach(t),Ne=c(Ee),te=i(Ee,"SPAN",{});var gt=o(te);Oe=d(gt,"Overview"),gt.forEach(t),Ee.forEach(t),ve=c(e),T=i(e,"P",{});var pt=o(T);A=i(pt,"A",{href:!0,rel:!0});var _t=o(A);He=d(_t,"Denoising Diffusion Implicit Models"),_t.forEach(t),Le=d(pt," (DDIM) by Jiaming Song, Chenlin Meng and Stefano Ermon."),pt.forEach(t),ge=c(e),L=i(e,"P",{});var Dt=o(L);Ge=d(Dt,"The abstract of the paper is the following:"),Dt.forEach(t),_e=c(e),G=i(e,"P",{});var bt=o(G);Ue=d(bt,"Denoising diffusion probabilistic models (DDPMs) have achieved high quality image generation without adversarial training, yet they require simulating a Markov chain for many steps to produce a sample. To accelerate sampling, we present denoising diffusion implicit models (DDIMs), a more efficient class of iterative implicit probabilistic models with the same training procedure as DDPMs. In DDPMs, the generative process is defined as the reverse of a Markovian diffusion process. We construct a class of non-Markovian diffusion processes that lead to the same training objective, but whose reverse process can be much faster to sample from. We empirically demonstrate that DDIMs can produce high quality samples 10\xD7 to 50\xD7 faster in terms of wall-clock time compared to DDPMs, allow us to trade off computation for sample quality, and can perform semantically meaningful image interpolation directly in the latent space."),bt.forEach(t),De=c(e),P=i(e,"P",{});var Ie=o(P);We=d(Ie,"The original codebase of this paper can be found "),x=i(Ie,"A",{href:!0,rel:!0});var wt=o(x);ze=d(wt,"here"),wt.forEach(t),Be=d(Ie,"."),Ie.forEach(t),be=c(e),g=i(e,"H2",{class:!0});var ke=o(g);M=i(ke,"A",{id:!0,class:!0,href:!0});var yt=o(M);ae=i(yt,"SPAN",{});var Pt=o(ae);V(S.$$.fragment,Pt),Pt.forEach(t),yt.forEach(t),Je=c(ke),re=i(ke,"SPAN",{});var Mt=o(re);Re=d(Mt,"Available Pipelines:"),Mt.forEach(t),ke.forEach(t),we=c(e),$=i(e,"TABLE",{});var Te=o($);ie=i(Te,"THEAD",{});var $t=o(ie);_=i($t,"TR",{});var B=o(_);oe=i(B,"TH",{});var Et=o(oe);je=d(Et,"Pipeline"),Et.forEach(t),Ve=c(B),ne=i(B,"TH",{});var It=o(ne);Ye=d(It,"Tasks"),It.forEach(t),Fe=c(B),U=i(B,"TH",{align:!0});var kt=o(U);Ke=d(kt,"Colab"),kt.forEach(t),B.forEach(t),$t.forEach(t),Qe=c(Te),se=i(Te,"TBODY",{});var Tt=o(se);D=i(Tt,"TR",{});var J=o(D);le=i(J,"TD",{});var At=o(le);q=i(At,"A",{href:!0,rel:!0});var xt=o(q);Xe=d(xt,"pipeline_ddim.py"),xt.forEach(t),At.forEach(t),Ze=c(J),ce=i(J,"TD",{});var St=o(ce);pe=i(St,"EM",{});var qt=o(pe);et=d(qt,"Unconditional Image Generation"),qt.forEach(t),St.forEach(t),tt=c(J),W=i(J,"TD",{align:!0});var Ct=o(W);at=d(Ct,"-"),Ct.forEach(t),J.forEach(t),Tt.forEach(t),Te.forEach(t),ye=c(e),b=i(e,"H2",{class:!0});var Ae=o(b);E=i(Ae,"A",{id:!0,class:!0,href:!0});var Nt=o(E);de=i(Nt,"SPAN",{});var Ot=o(de);V(C.$$.fragment,Ot),Ot.forEach(t),Nt.forEach(t),rt=c(Ae),fe=i(Ae,"SPAN",{});var Ht=o(fe);it=d(Ht,"API"),Ht.forEach(t),Ae.forEach(t),Pe=c(e),h=i(e,"DIV",{class:!0});var R=o(h);V(N.$$.fragment,R),ot=c(R),O=i(R,"P",{});var xe=o(O);nt=d(xe,"This model inherits from "),he=i(xe,"CODE",{});var Lt=o(he);st=d(Lt,"DiffusionPipeline"),Lt.forEach(t),lt=d(xe,`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),xe.forEach(t),ct=c(R),z=i(R,"DIV",{class:!0});var Gt=o(z);V(H.$$.fragment,Gt),Gt.forEach(t),R.forEach(t),this.h()},h(){n(m,"name","hf:doc:metadata"),n(m,"content",JSON.stringify(Yt)),n(w,"id","ddim"),n(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(w,"href","#ddim"),n(u,"class","relative group"),n(y,"id","overview"),n(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(y,"href","#overview"),n(v,"class","relative group"),n(A,"href","https://arxiv.org/abs/2010.02502"),n(A,"rel","nofollow"),n(x,"href","https://github.com/ermongroup/ddim"),n(x,"rel","nofollow"),n(M,"id","available-pipelines"),n(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(M,"href","#available-pipelines"),n(g,"class","relative group"),n(U,"align","center"),n(q,"href","https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/ddim/pipeline_ddim.py"),n(q,"rel","nofollow"),n(W,"align","center"),n(E,"id","diffusers.DDIMPipeline"),n(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(E,"href","#diffusers.DDIMPipeline"),n(b,"class","relative group"),n(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),n(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,s){a(document.head,m),f(e,me,s),f(e,u,s),a(u,w),a(w,X),Y(I,X,null),a(u,qe),a(u,Z),a(Z,Ce),f(e,ue,s),f(e,v,s),a(v,y),a(y,ee),Y(k,ee,null),a(v,Ne),a(v,te),a(te,Oe),f(e,ve,s),f(e,T,s),a(T,A),a(A,He),a(T,Le),f(e,ge,s),f(e,L,s),a(L,Ge),f(e,_e,s),f(e,G,s),a(G,Ue),f(e,De,s),f(e,P,s),a(P,We),a(P,x),a(x,ze),a(P,Be),f(e,be,s),f(e,g,s),a(g,M),a(M,ae),Y(S,ae,null),a(g,Je),a(g,re),a(re,Re),f(e,we,s),f(e,$,s),a($,ie),a(ie,_),a(_,oe),a(oe,je),a(_,Ve),a(_,ne),a(ne,Ye),a(_,Fe),a(_,U),a(U,Ke),a($,Qe),a($,se),a(se,D),a(D,le),a(le,q),a(q,Xe),a(D,Ze),a(D,ce),a(ce,pe),a(pe,et),a(D,tt),a(D,W),a(W,at),f(e,ye,s),f(e,b,s),a(b,E),a(E,de),Y(C,de,null),a(b,rt),a(b,fe),a(fe,it),f(e,Pe,s),f(e,h,s),Y(N,h,null),a(h,ot),a(h,O),a(O,nt),a(O,he),a(he,st),a(O,lt),a(h,ct),a(h,z),Y(H,z,null),Me=!0},p:Rt,i(e){Me||(F(I.$$.fragment,e),F(k.$$.fragment,e),F(S.$$.fragment,e),F(C.$$.fragment,e),F(N.$$.fragment,e),F(H.$$.fragment,e),Me=!0)},o(e){K(I.$$.fragment,e),K(k.$$.fragment,e),K(S.$$.fragment,e),K(C.$$.fragment,e),K(N.$$.fragment,e),K(H.$$.fragment,e),Me=!1},d(e){t(m),e&&t(me),e&&t(u),Q(I),e&&t(ue),e&&t(v),Q(k),e&&t(ve),e&&t(T),e&&t(ge),e&&t(L),e&&t(_e),e&&t(G),e&&t(De),e&&t(P),e&&t(be),e&&t(g),Q(S),e&&t(we),e&&t($),e&&t(ye),e&&t(b),Q(C),e&&t(Pe),e&&t(h),Q(N),Q(H)}}}const Yt={local:"ddim",sections:[{local:"overview",title:"Overview"},{local:"available-pipelines",title:"Available Pipelines:"},{local:"diffusers.DDIMPipeline",title:"API"}],title:"DDIM"};function Ft(dt){return jt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Zt extends Wt{constructor(m){super();zt(this,m,Ft,Vt,Bt,{})}}export{Zt as default,Yt as metadata};
