import{S as X,i as Z,s as ee,e as i,k as y,w as J,t as w,M as se,c as o,d as s,m as j,a as c,x as U,h as q,b as n,N as ae,G as a,g as d,y as F,L as te,q as K,o as Q,B as W,v as ne}from"../../chunks/vendor-hf-doc-builder.js";import{I as ie}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as oe}from"../../chunks/CodeBlock-hf-doc-builder.js";function re(M){let r,k,l,p,v,u,A,I,B,x,m,C,_,D,O,$,g,P,f,T,h,b,N,S;return u=new ie({}),g=new oe({props:{code:`import torch
import requests
from PIL import Image
from io import BytesIO

from diffusers import StableDiffusionImg2ImgPipeline

# load the pipeline
device = "cuda"
pipe = StableDiffusionImg2ImgPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5", revision="fp16", torch_dtype=torch.float16
).to(device)

# let's download an initial image
url = "https://raw.githubusercontent.com/CompVis/stable-diffusion/main/assets/stable-samples/img2img/sketch-mountains-input.jpg"

response = requests.get(url)
init_image = Image.open(BytesIO(response.content)).convert("RGB")
init_image = init_image.resize((768, 512))

prompt = "A fantasy landscape, trending on artstation"

images = pipe(prompt=prompt, init_image=init_image, strength=0.75, guidance_scale=7.5).images

images[0].save("fantasy_landscape.png")`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> requests
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-keyword">from</span> io <span class="hljs-keyword">import</span> BytesIO

<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionImg2ImgPipeline

<span class="hljs-comment"># load the pipeline</span>
device = <span class="hljs-string">&quot;cuda&quot;</span>
pipe = StableDiffusionImg2ImgPipeline.from_pretrained(
    <span class="hljs-string">&quot;runwayml/stable-diffusion-v1-5&quot;</span>, revision=<span class="hljs-string">&quot;fp16&quot;</span>, torch_dtype=torch.float16
).to(device)

<span class="hljs-comment"># let&#x27;s download an initial image</span>
url = <span class="hljs-string">&quot;https://raw.githubusercontent.com/CompVis/stable-diffusion/main/assets/stable-samples/img2img/sketch-mountains-input.jpg&quot;</span>

response = requests.get(url)
init_image = Image.<span class="hljs-built_in">open</span>(BytesIO(response.content)).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
init_image = init_image.resize((<span class="hljs-number">768</span>, <span class="hljs-number">512</span>))

prompt = <span class="hljs-string">&quot;A fantasy landscape, trending on artstation&quot;</span>

images = pipe(prompt=prompt, init_image=init_image, strength=<span class="hljs-number">0.75</span>, guidance_scale=<span class="hljs-number">7.5</span>).images

images[<span class="hljs-number">0</span>].save(<span class="hljs-string">&quot;fantasy_landscape.png&quot;</span>)`}}),{c(){r=i("meta"),k=y(),l=i("h1"),p=i("a"),v=i("span"),J(u.$$.fragment),A=y(),I=i("span"),B=w("Text-Guided Image-to-Image Generation"),x=y(),m=i("p"),C=w("The "),_=i("a"),D=w("StableDiffusionImg2ImgPipeline"),O=w(" lets you pass a text prompt and an initial image to condition the generation of new images."),$=y(),J(g.$$.fragment),P=y(),f=i("p"),T=w("You can also run this example on colab "),h=i("a"),b=i("img"),this.h()},l(e){const t=se('[data-svelte="svelte-1phssyn"]',document.head);r=o(t,"META",{name:!0,content:!0}),t.forEach(s),k=j(e),l=o(e,"H1",{class:!0});var E=c(l);p=o(E,"A",{id:!0,class:!0,href:!0});var R=c(p);v=o(R,"SPAN",{});var z=c(v);U(u.$$.fragment,z),z.forEach(s),R.forEach(s),A=j(E),I=o(E,"SPAN",{});var V=c(I);B=q(V,"Text-Guided Image-to-Image Generation"),V.forEach(s),E.forEach(s),x=j(e),m=o(e,"P",{});var G=c(m);C=q(G,"The "),_=o(G,"A",{href:!0});var Y=c(_);D=q(Y,"StableDiffusionImg2ImgPipeline"),Y.forEach(s),O=q(G," lets you pass a text prompt and an initial image to condition the generation of new images."),G.forEach(s),$=j(e),U(g.$$.fragment,e),P=j(e),f=o(e,"P",{});var L=c(f);T=q(L,"You can also run this example on colab "),h=o(L,"A",{href:!0,rel:!0});var H=c(h);b=o(H,"IMG",{src:!0,alt:!0}),H.forEach(s),L.forEach(s),this.h()},h(){n(r,"name","hf:doc:metadata"),n(r,"content",JSON.stringify(le)),n(p,"id","textguided-imagetoimage-generation"),n(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(p,"href","#textguided-imagetoimage-generation"),n(l,"class","relative group"),n(_,"href","/docs/diffusers/v0.7.0/en/api/pipelines/stable_diffusion#diffusers.StableDiffusionImg2ImgPipeline"),ae(b.src,N="https://colab.research.google.com/assets/colab-badge.svg")||n(b,"src",N),n(b,"alt","Open In Colab"),n(h,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/diffusers/image_2_image_using_diffusers.ipynb"),n(h,"rel","nofollow")},m(e,t){a(document.head,r),d(e,k,t),d(e,l,t),a(l,p),a(p,v),F(u,v,null),a(l,A),a(l,I),a(I,B),d(e,x,t),d(e,m,t),a(m,C),a(m,_),a(_,D),a(m,O),d(e,$,t),F(g,e,t),d(e,P,t),d(e,f,t),a(f,T),a(f,h),a(h,b),S=!0},p:te,i(e){S||(K(u.$$.fragment,e),K(g.$$.fragment,e),S=!0)},o(e){Q(u.$$.fragment,e),Q(g.$$.fragment,e),S=!1},d(e){s(r),e&&s(k),e&&s(l),W(u),e&&s(x),e&&s(m),e&&s($),W(g,e),e&&s(P),e&&s(f)}}}const le={local:"textguided-imagetoimage-generation",title:"Text-Guided Image-to-Image Generation"};function pe(M){return ne(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ge extends X{constructor(r){super();Z(this,r,pe,re,ee,{})}}export{ge as default,le as metadata};
