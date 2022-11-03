import{S as Va,i as Ya,s as Ja,e as n,k as l,w as E,t as h,M as Ka,c as i,d as a,m as p,a as s,x as D,h as d,b as r,G as t,g as m,y as T,L as Qa,q as A,o as q,B as L,v as Xa}from"../../../chunks/vendor-hf-doc-builder.js";import{D as Wa}from"../../../chunks/Docstring-hf-doc-builder.js";import{C as Za}from"../../../chunks/CodeBlock-hf-doc-builder.js";import{I as _e}from"../../../chunks/IconCopyLink-hf-doc-builder.js";function et(ca){let u,ve,f,y,ee,M,Fe,ae,Ge,Pe,c,k,te,S,Be,ne,Ce,be,N,O,He,ze,we,V,Ue,ye,Y,We,ke,$,Ve,F,Ye,Je,$e,g,x,ie,G,Ke,se,Qe,xe,R,re,_,oe,Xe,Ze,le,ea,aa,J,ta,na,pe,v,me,B,ia,sa,he,de,ra,oa,K,la,Re,P,j,ue,C,pa,fe,ma,je,H,Ie,b,I,ce,z,ha,ge,da,Ee,w,U,ua,Q,W,De;return M=new _e({}),S=new _e({}),G=new _e({}),C=new _e({}),H=new Za({props:{code:`from io import BytesIO

import torch

import PIL
import requests
from diffusers import RePaintPipeline, RePaintScheduler


def download_image(url):
    response = requests.get(url)
    return PIL.Image.open(BytesIO(response.content)).convert("RGB")


img_url = "https://huggingface.co/datasets/hf-internal-testing/diffusers-images/resolve/main/repaint/celeba_hq_256.png"
mask_url = "https://huggingface.co/datasets/hf-internal-testing/diffusers-images/resolve/main/repaint/mask_256.png"

# Load the original image and the mask as PIL images
original_image = download_image(img_url).resize((256, 256))
mask_image = download_image(mask_url).resize((256, 256))

# Load the RePaint scheduler and pipeline based on a pretrained DDPM model
scheduler = RePaintScheduler.from_config("google/ddpm-ema-celebahq-256")
pipe = RePaintPipeline.from_pretrained("google/ddpm-ema-celebahq-256", scheduler=scheduler)
pipe = pipe.to("cuda")

generator = torch.Generator(device="cuda").manual_seed(0)
output = pipe(
    original_image=original_image,
    mask_image=mask_image,
    num_inference_steps=250,
    eta=0.0,
    jump_length=10,
    jump_n_sample=10,
    generator=generator,
)
inpainted_image = output.images[0]`,highlighted:`<span class="hljs-keyword">from</span> io <span class="hljs-keyword">import</span> BytesIO

<span class="hljs-keyword">import</span> torch

<span class="hljs-keyword">import</span> PIL
<span class="hljs-keyword">import</span> requests
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> RePaintPipeline, RePaintScheduler


<span class="hljs-keyword">def</span> <span class="hljs-title function_">download_image</span>(<span class="hljs-params">url</span>):
    response = requests.get(url)
    <span class="hljs-keyword">return</span> PIL.Image.<span class="hljs-built_in">open</span>(BytesIO(response.content)).convert(<span class="hljs-string">&quot;RGB&quot;</span>)


img_url = <span class="hljs-string">&quot;https://huggingface.co/datasets/hf-internal-testing/diffusers-images/resolve/main/repaint/celeba_hq_256.png&quot;</span>
mask_url = <span class="hljs-string">&quot;https://huggingface.co/datasets/hf-internal-testing/diffusers-images/resolve/main/repaint/mask_256.png&quot;</span>

<span class="hljs-comment"># Load the original image and the mask as PIL images</span>
original_image = download_image(img_url).resize((<span class="hljs-number">256</span>, <span class="hljs-number">256</span>))
mask_image = download_image(mask_url).resize((<span class="hljs-number">256</span>, <span class="hljs-number">256</span>))

<span class="hljs-comment"># Load the RePaint scheduler and pipeline based on a pretrained DDPM model</span>
scheduler = RePaintScheduler.from_config(<span class="hljs-string">&quot;google/ddpm-ema-celebahq-256&quot;</span>)
pipe = RePaintPipeline.from_pretrained(<span class="hljs-string">&quot;google/ddpm-ema-celebahq-256&quot;</span>, scheduler=scheduler)
pipe = pipe.to(<span class="hljs-string">&quot;cuda&quot;</span>)

generator = torch.Generator(device=<span class="hljs-string">&quot;cuda&quot;</span>).manual_seed(<span class="hljs-number">0</span>)
output = pipe(
    original_image=original_image,
    mask_image=mask_image,
    num_inference_steps=<span class="hljs-number">250</span>,
    eta=<span class="hljs-number">0.0</span>,
    jump_length=<span class="hljs-number">10</span>,
    jump_n_sample=<span class="hljs-number">10</span>,
    generator=generator,
)
inpainted_image = output.images[<span class="hljs-number">0</span>]`}}),z=new _e({}),U=new Wa({props:{name:"class diffusers.RePaintPipeline",anchor:"diffusers.RePaintPipeline",parameters:[{name:"unet",val:""},{name:"scheduler",val:""}],source:"https://github.com/huggingface/diffusers/blob/v0.7.0/src/diffusers/pipelines/repaint/pipeline_repaint.py#L46"}}),W=new Wa({props:{name:"__call__",anchor:"diffusers.RePaintPipeline.__call__",parameters:[{name:"original_image",val:": typing.Union[torch.FloatTensor, PIL.Image.Image]"},{name:"mask_image",val:": typing.Union[torch.FloatTensor, PIL.Image.Image]"},{name:"num_inference_steps",val:": int = 250"},{name:"eta",val:": float = 0.0"},{name:"jump_length",val:": int = 10"},{name:"jump_n_sample",val:": int = 10"},{name:"generator",val:": typing.Optional[torch._C.Generator] = None"},{name:"output_type",val:": typing.Optional[str] = 'pil'"},{name:"return_dict",val:": bool = True"}],parametersDescription:[{anchor:"diffusers.RePaintPipeline.__call__.original_image",description:`<strong>original_image</strong> (<code>torch.FloatTensor</code> or <code>PIL.Image.Image</code>) &#x2014;
The original image to inpaint on.`,name:"original_image"},{anchor:"diffusers.RePaintPipeline.__call__.mask_image",description:`<strong>mask_image</strong> (<code>torch.FloatTensor</code> or <code>PIL.Image.Image</code>) &#x2014;
The mask_image where 0.0 values define which part of the original image to inpaint (change).`,name:"mask_image"},{anchor:"diffusers.RePaintPipeline.__call__.num_inference_steps",description:`<strong>num_inference_steps</strong> (<code>int</code>, <em>optional</em>, defaults to 1000) &#x2014;
The number of denoising steps. More denoising steps usually lead to a higher quality image at the
expense of slower inference.`,name:"num_inference_steps"},{anchor:"diffusers.RePaintPipeline.__call__.eta",description:`<strong>eta</strong> (<code>float</code>) &#x2014;
The weight of noise for added noise in a diffusion step. Its value is between 0.0 and 1.0 - 0.0 is DDIM
and 1.0 is DDPM scheduler respectively.`,name:"eta"},{anchor:"diffusers.RePaintPipeline.__call__.jump_length",description:`<strong>jump_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
The number of steps taken forward in time before going backward in time for a single jump (&#x201C;j&#x201D; in
RePaint paper). Take a look at Figure 9 and 10 in <a href="https://arxiv.org/pdf/2201.09865.pdf" rel="nofollow">https://arxiv.org/pdf/2201.09865.pdf</a>.`,name:"jump_length"},{anchor:"diffusers.RePaintPipeline.__call__.jump_n_sample",description:`<strong>jump_n_sample</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
The number of times we will make forward time jump for a given chosen time sample. Take a look at
Figure 9 and 10 in <a href="https://arxiv.org/pdf/2201.09865.pdf" rel="nofollow">https://arxiv.org/pdf/2201.09865.pdf</a>.`,name:"jump_n_sample"},{anchor:"diffusers.RePaintPipeline.__call__.generator",description:`<strong>generator</strong> (<code>torch.Generator</code>, <em>optional</em>) &#x2014;
A <a href="https://pytorch.org/docs/stable/generated/torch.Generator.html" rel="nofollow">torch generator</a> to make generation
deterministic.`,name:"generator"},{anchor:"diffusers.RePaintPipeline.__call__.output_type",description:`<strong>output_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pil&quot;</code>) &#x2014;
The output format of the generate image. Choose between
<a href="https://pillow.readthedocs.io/en/stable/" rel="nofollow">PIL</a>: <code>PIL.Image.Image</code> or <code>np.array</code>.`,name:"output_type"},{anchor:"diffusers.RePaintPipeline.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to return a <a href="/docs/diffusers/v0.7.0/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput">ImagePipelineOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/diffusers/blob/v0.7.0/src/diffusers/pipelines/repaint/pipeline_repaint.py#L54",returnDescription:`
<p><code>~pipelines.utils.ImagePipelineOutput</code> if
<code>return_dict</code> is True, otherwise a \`tuple. When returning a tuple, the first element is a list with the
generated images.</p>
`,returnType:`
<p><a
  href="/docs/diffusers/v0.7.0/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput"
>ImagePipelineOutput</a> or <code>tuple</code></p>
`}}),{c(){u=n("meta"),ve=l(),f=n("h1"),y=n("a"),ee=n("span"),E(M.$$.fragment),Fe=l(),ae=n("span"),Ge=h("RePaint"),Pe=l(),c=n("h2"),k=n("a"),te=n("span"),E(S.$$.fragment),Be=l(),ne=n("span"),Ce=h("Overview"),be=l(),N=n("p"),O=n("a"),He=h("RePaint: Inpainting using Denoising Diffusion Probabilistic Models"),ze=h(" (PNDM) by Andreas Lugmayr, Martin Danelljan, Andres Romero, Fisher Yu, Radu Timofte, Luc Van Gool."),we=l(),V=n("p"),Ue=h("The abstract of the paper is the following:"),ye=l(),Y=n("p"),We=h(`Free-form inpainting is the task of adding new content to an image in the regions specified by an arbitrary binary mask. Most existing approaches train for a certain distribution of masks, which limits their generalization capabilities to unseen mask types. Furthermore, training with pixel-wise and perceptual losses often leads to simple textural extensions towards the missing areas instead of semantically meaningful generation. In this work, we propose RePaint: A Denoising Diffusion Probabilistic Model (DDPM) based inpainting approach that is applicable to even extreme masks. We employ a pretrained unconditional DDPM as the generative prior. To condition the generation process, we only alter the reverse diffusion iterations by sampling the unmasked regions using the given image information. Since this technique does not modify or condition the original DDPM network itself, the model produces high-quality and diverse output images for any inpainting form. We validate our method for both faces and general-purpose image inpainting using standard and extreme masks.
RePaint outperforms state-of-the-art Autoregressive, and GAN approaches for at least five out of six mask distributions.`),ke=l(),$=n("p"),Ve=h("The original codebase can be found "),F=n("a"),Ye=h("here"),Je=h("."),$e=l(),g=n("h2"),x=n("a"),ie=n("span"),E(G.$$.fragment),Ke=l(),se=n("span"),Qe=h("Available Pipelines:"),xe=l(),R=n("table"),re=n("thead"),_=n("tr"),oe=n("th"),Xe=h("Pipeline"),Ze=l(),le=n("th"),ea=h("Tasks"),aa=l(),J=n("th"),ta=h("Colab"),na=l(),pe=n("tbody"),v=n("tr"),me=n("td"),B=n("a"),ia=h("pipeline_repaint.py"),sa=l(),he=n("td"),de=n("em"),ra=h("Image Inpainting"),oa=l(),K=n("td"),la=h("-"),Re=l(),P=n("h2"),j=n("a"),ue=n("span"),E(C.$$.fragment),pa=l(),fe=n("span"),ma=h("Usage example"),je=l(),E(H.$$.fragment),Ie=l(),b=n("h2"),I=n("a"),ce=n("span"),E(z.$$.fragment),ha=l(),ge=n("span"),da=h("RePaintPipeline"),Ee=l(),w=n("div"),E(U.$$.fragment),ua=l(),Q=n("div"),E(W.$$.fragment),this.h()},l(e){const o=Ka('[data-svelte="svelte-1phssyn"]',document.head);u=i(o,"META",{name:!0,content:!0}),o.forEach(a),ve=p(e),f=i(e,"H1",{class:!0});var Te=s(f);y=i(Te,"A",{id:!0,class:!0,href:!0});var ga=s(y);ee=i(ga,"SPAN",{});var _a=s(ee);D(M.$$.fragment,_a),_a.forEach(a),ga.forEach(a),Fe=p(Te),ae=i(Te,"SPAN",{});var va=s(ae);Ge=d(va,"RePaint"),va.forEach(a),Te.forEach(a),Pe=p(e),c=i(e,"H2",{class:!0});var Ae=s(c);k=i(Ae,"A",{id:!0,class:!0,href:!0});var Pa=s(k);te=i(Pa,"SPAN",{});var ba=s(te);D(S.$$.fragment,ba),ba.forEach(a),Pa.forEach(a),Be=p(Ae),ne=i(Ae,"SPAN",{});var wa=s(ne);Ce=d(wa,"Overview"),wa.forEach(a),Ae.forEach(a),be=p(e),N=i(e,"P",{});var fa=s(N);O=i(fa,"A",{href:!0,rel:!0});var ya=s(O);He=d(ya,"RePaint: Inpainting using Denoising Diffusion Probabilistic Models"),ya.forEach(a),ze=d(fa," (PNDM) by Andreas Lugmayr, Martin Danelljan, Andres Romero, Fisher Yu, Radu Timofte, Luc Van Gool."),fa.forEach(a),we=p(e),V=i(e,"P",{});var ka=s(V);Ue=d(ka,"The abstract of the paper is the following:"),ka.forEach(a),ye=p(e),Y=i(e,"P",{});var $a=s(Y);We=d($a,`Free-form inpainting is the task of adding new content to an image in the regions specified by an arbitrary binary mask. Most existing approaches train for a certain distribution of masks, which limits their generalization capabilities to unseen mask types. Furthermore, training with pixel-wise and perceptual losses often leads to simple textural extensions towards the missing areas instead of semantically meaningful generation. In this work, we propose RePaint: A Denoising Diffusion Probabilistic Model (DDPM) based inpainting approach that is applicable to even extreme masks. We employ a pretrained unconditional DDPM as the generative prior. To condition the generation process, we only alter the reverse diffusion iterations by sampling the unmasked regions using the given image information. Since this technique does not modify or condition the original DDPM network itself, the model produces high-quality and diverse output images for any inpainting form. We validate our method for both faces and general-purpose image inpainting using standard and extreme masks.
RePaint outperforms state-of-the-art Autoregressive, and GAN approaches for at least five out of six mask distributions.`),$a.forEach(a),ke=p(e),$=i(e,"P",{});var qe=s($);Ve=d(qe,"The original codebase can be found "),F=i(qe,"A",{href:!0,rel:!0});var xa=s(F);Ye=d(xa,"here"),xa.forEach(a),Je=d(qe,"."),qe.forEach(a),$e=p(e),g=i(e,"H2",{class:!0});var Le=s(g);x=i(Le,"A",{id:!0,class:!0,href:!0});var Ra=s(x);ie=i(Ra,"SPAN",{});var ja=s(ie);D(G.$$.fragment,ja),ja.forEach(a),Ra.forEach(a),Ke=p(Le),se=i(Le,"SPAN",{});var Ia=s(se);Qe=d(Ia,"Available Pipelines:"),Ia.forEach(a),Le.forEach(a),xe=p(e),R=i(e,"TABLE",{});var Me=s(R);re=i(Me,"THEAD",{});var Ea=s(re);_=i(Ea,"TR",{});var X=s(_);oe=i(X,"TH",{});var Da=s(oe);Xe=d(Da,"Pipeline"),Da.forEach(a),Ze=p(X),le=i(X,"TH",{});var Ta=s(le);ea=d(Ta,"Tasks"),Ta.forEach(a),aa=p(X),J=i(X,"TH",{align:!0});var Aa=s(J);ta=d(Aa,"Colab"),Aa.forEach(a),X.forEach(a),Ea.forEach(a),na=p(Me),pe=i(Me,"TBODY",{});var qa=s(pe);v=i(qa,"TR",{});var Z=s(v);me=i(Z,"TD",{});var La=s(me);B=i(La,"A",{href:!0,rel:!0});var Ma=s(B);ia=d(Ma,"pipeline_repaint.py"),Ma.forEach(a),La.forEach(a),sa=p(Z),he=i(Z,"TD",{});var Sa=s(he);de=i(Sa,"EM",{});var Na=s(de);ra=d(Na,"Image Inpainting"),Na.forEach(a),Sa.forEach(a),oa=p(Z),K=i(Z,"TD",{align:!0});var Oa=s(K);la=d(Oa,"-"),Oa.forEach(a),Z.forEach(a),qa.forEach(a),Me.forEach(a),Re=p(e),P=i(e,"H2",{class:!0});var Se=s(P);j=i(Se,"A",{id:!0,class:!0,href:!0});var Fa=s(j);ue=i(Fa,"SPAN",{});var Ga=s(ue);D(C.$$.fragment,Ga),Ga.forEach(a),Fa.forEach(a),pa=p(Se),fe=i(Se,"SPAN",{});var Ba=s(fe);ma=d(Ba,"Usage example"),Ba.forEach(a),Se.forEach(a),je=p(e),D(H.$$.fragment,e),Ie=p(e),b=i(e,"H2",{class:!0});var Ne=s(b);I=i(Ne,"A",{id:!0,class:!0,href:!0});var Ca=s(I);ce=i(Ca,"SPAN",{});var Ha=s(ce);D(z.$$.fragment,Ha),Ha.forEach(a),Ca.forEach(a),ha=p(Ne),ge=i(Ne,"SPAN",{});var za=s(ge);da=d(za,"RePaintPipeline"),za.forEach(a),Ne.forEach(a),Ee=p(e),w=i(e,"DIV",{class:!0});var Oe=s(w);D(U.$$.fragment,Oe),ua=p(Oe),Q=i(Oe,"DIV",{class:!0});var Ua=s(Q);D(W.$$.fragment,Ua),Ua.forEach(a),Oe.forEach(a),this.h()},h(){r(u,"name","hf:doc:metadata"),r(u,"content",JSON.stringify(at)),r(y,"id","repaint"),r(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(y,"href","#repaint"),r(f,"class","relative group"),r(k,"id","overview"),r(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(k,"href","#overview"),r(c,"class","relative group"),r(O,"href","https://arxiv.org/abs/2201.09865"),r(O,"rel","nofollow"),r(F,"href","https://github.com/andreas128/RePaint"),r(F,"rel","nofollow"),r(x,"id","available-pipelines"),r(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(x,"href","#available-pipelines"),r(g,"class","relative group"),r(J,"align","center"),r(B,"href","https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/repaint/pipeline_repaint.py"),r(B,"rel","nofollow"),r(K,"align","center"),r(j,"id","usage-example"),r(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(j,"href","#usage-example"),r(P,"class","relative group"),r(I,"id","diffusers.RePaintPipeline"),r(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(I,"href","#diffusers.RePaintPipeline"),r(b,"class","relative group"),r(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),r(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,o){t(document.head,u),m(e,ve,o),m(e,f,o),t(f,y),t(y,ee),T(M,ee,null),t(f,Fe),t(f,ae),t(ae,Ge),m(e,Pe,o),m(e,c,o),t(c,k),t(k,te),T(S,te,null),t(c,Be),t(c,ne),t(ne,Ce),m(e,be,o),m(e,N,o),t(N,O),t(O,He),t(N,ze),m(e,we,o),m(e,V,o),t(V,Ue),m(e,ye,o),m(e,Y,o),t(Y,We),m(e,ke,o),m(e,$,o),t($,Ve),t($,F),t(F,Ye),t($,Je),m(e,$e,o),m(e,g,o),t(g,x),t(x,ie),T(G,ie,null),t(g,Ke),t(g,se),t(se,Qe),m(e,xe,o),m(e,R,o),t(R,re),t(re,_),t(_,oe),t(oe,Xe),t(_,Ze),t(_,le),t(le,ea),t(_,aa),t(_,J),t(J,ta),t(R,na),t(R,pe),t(pe,v),t(v,me),t(me,B),t(B,ia),t(v,sa),t(v,he),t(he,de),t(de,ra),t(v,oa),t(v,K),t(K,la),m(e,Re,o),m(e,P,o),t(P,j),t(j,ue),T(C,ue,null),t(P,pa),t(P,fe),t(fe,ma),m(e,je,o),T(H,e,o),m(e,Ie,o),m(e,b,o),t(b,I),t(I,ce),T(z,ce,null),t(b,ha),t(b,ge),t(ge,da),m(e,Ee,o),m(e,w,o),T(U,w,null),t(w,ua),t(w,Q),T(W,Q,null),De=!0},p:Qa,i(e){De||(A(M.$$.fragment,e),A(S.$$.fragment,e),A(G.$$.fragment,e),A(C.$$.fragment,e),A(H.$$.fragment,e),A(z.$$.fragment,e),A(U.$$.fragment,e),A(W.$$.fragment,e),De=!0)},o(e){q(M.$$.fragment,e),q(S.$$.fragment,e),q(G.$$.fragment,e),q(C.$$.fragment,e),q(H.$$.fragment,e),q(z.$$.fragment,e),q(U.$$.fragment,e),q(W.$$.fragment,e),De=!1},d(e){a(u),e&&a(ve),e&&a(f),L(M),e&&a(Pe),e&&a(c),L(S),e&&a(be),e&&a(N),e&&a(we),e&&a(V),e&&a(ye),e&&a(Y),e&&a(ke),e&&a($),e&&a($e),e&&a(g),L(G),e&&a(xe),e&&a(R),e&&a(Re),e&&a(P),L(C),e&&a(je),L(H,e),e&&a(Ie),e&&a(b),L(z),e&&a(Ee),e&&a(w),L(U),L(W)}}}const at={local:"repaint",sections:[{local:"overview",title:"Overview"},{local:"available-pipelines",title:"Available Pipelines:"},{local:"usage-example",title:"Usage example"},{local:"diffusers.RePaintPipeline",title:"RePaintPipeline"}],title:"RePaint"};function tt(ca){return Xa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ot extends Va{constructor(u){super();Ya(this,u,tt,et,Ja,{})}}export{ot as default,at as metadata};
