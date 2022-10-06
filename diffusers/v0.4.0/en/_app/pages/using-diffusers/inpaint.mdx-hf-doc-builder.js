import{S as X,i as Z,s as ee,e as i,k as w,w as H,t as k,M as se,c as o,d as s,m as y,a as u,x as J,h as j,b as n,N as ae,G as a,g as h,y as U,L as te,q as F,o as K,B as W,v as ne}from"../../chunks/vendor-hf-doc-builder.js";import{I as ie}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as oe}from"../../chunks/CodeBlock-hf-doc-builder.js";function re(V){let r,q,p,l,v,c,B,I,D,x,m,G,_,L,A,P,f,$,g,O,d,b,Y,S;return c=new ie({}),f=new oe({props:{code:`from io import BytesIO

import requests
import PIL

from diffusers import StableDiffusionInpaintPipeline


def download_image(url):
    response = requests.get(url)
    return PIL.Image.open(BytesIO(response.content)).convert("RGB")


img_url = "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png"
mask_url = "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"

init_image = download_image(img_url).resize((512, 512))
mask_image = download_image(mask_url).resize((512, 512))

device = "cuda"
pipe = StableDiffusionInpaintPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4", revision="fp16", torch_dtype=torch.float16
).to(device)

prompt = "a cat sitting on a bench"
images = pipe(prompt=prompt, init_image=init_image, mask_image=mask_image, strength=0.75).images

images[0].save("cat_on_bench.png")`,highlighted:`<span class="hljs-keyword">from</span> io <span class="hljs-keyword">import</span> BytesIO

<span class="hljs-keyword">import</span> requests
<span class="hljs-keyword">import</span> PIL

<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionInpaintPipeline


<span class="hljs-keyword">def</span> <span class="hljs-title function_">download_image</span>(<span class="hljs-params">url</span>):
    response = requests.get(url)
    <span class="hljs-keyword">return</span> PIL.Image.<span class="hljs-built_in">open</span>(BytesIO(response.content)).convert(<span class="hljs-string">&quot;RGB&quot;</span>)


img_url = <span class="hljs-string">&quot;https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png&quot;</span>
mask_url = <span class="hljs-string">&quot;https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png&quot;</span>

init_image = download_image(img_url).resize((<span class="hljs-number">512</span>, <span class="hljs-number">512</span>))
mask_image = download_image(mask_url).resize((<span class="hljs-number">512</span>, <span class="hljs-number">512</span>))

device = <span class="hljs-string">&quot;cuda&quot;</span>
pipe = StableDiffusionInpaintPipeline.from_pretrained(
    <span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>, revision=<span class="hljs-string">&quot;fp16&quot;</span>, torch_dtype=torch.float16
).to(device)

prompt = <span class="hljs-string">&quot;a cat sitting on a bench&quot;</span>
images = pipe(prompt=prompt, init_image=init_image, mask_image=mask_image, strength=<span class="hljs-number">0.75</span>).images

images[<span class="hljs-number">0</span>].save(<span class="hljs-string">&quot;cat_on_bench.png&quot;</span>)`}}),{c(){r=i("meta"),q=w(),p=i("h1"),l=i("a"),v=i("span"),H(c.$$.fragment),B=w(),I=i("span"),D=k("Text-Guided Image-Inpainting"),x=w(),m=i("p"),G=k("The "),_=i("a"),L=k("StableDiffusionInpaintPipeline"),A=k(" lets you edit specific parts of an image by providing a mask and text prompt."),P=w(),H(f.$$.fragment),$=w(),g=i("p"),O=k("You can also run this example on colab "),d=i("a"),b=i("img"),this.h()},l(e){const t=se('[data-svelte="svelte-1phssyn"]',document.head);r=o(t,"META",{name:!0,content:!0}),t.forEach(s),q=y(e),p=o(e,"H1",{class:!0});var C=u(p);l=o(C,"A",{id:!0,class:!0,href:!0});var z=u(l);v=o(z,"SPAN",{});var M=u(v);J(c.$$.fragment,M),M.forEach(s),z.forEach(s),B=y(C),I=o(C,"SPAN",{});var N=u(I);D=j(N,"Text-Guided Image-Inpainting"),N.forEach(s),C.forEach(s),x=y(e),m=o(e,"P",{});var E=u(m);G=j(E,"The "),_=o(E,"A",{href:!0});var Q=u(_);L=j(Q,"StableDiffusionInpaintPipeline"),Q.forEach(s),A=j(E," lets you edit specific parts of an image by providing a mask and text prompt."),E.forEach(s),P=y(e),J(f.$$.fragment,e),$=y(e),g=o(e,"P",{});var T=u(g);O=j(T,"You can also run this example on colab "),d=o(T,"A",{href:!0,rel:!0});var R=u(d);b=o(R,"IMG",{src:!0,alt:!0}),R.forEach(s),T.forEach(s),this.h()},h(){n(r,"name","hf:doc:metadata"),n(r,"content",JSON.stringify(pe)),n(l,"id","textguided-imageinpainting"),n(l,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(l,"href","#textguided-imageinpainting"),n(p,"class","relative group"),n(_,"href","/docs/diffusers/v0.4.0/en/api/pipelines/stable_diffusion#diffusers.StableDiffusionInpaintPipeline"),ae(b.src,Y="https://colab.research.google.com/assets/colab-badge.svg")||n(b,"src",Y),n(b,"alt","Open In Colab"),n(d,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/diffusers/in_painting_with_stable_diffusion_using_diffusers.ipynb"),n(d,"rel","nofollow")},m(e,t){a(document.head,r),h(e,q,t),h(e,p,t),a(p,l),a(l,v),U(c,v,null),a(p,B),a(p,I),a(I,D),h(e,x,t),h(e,m,t),a(m,G),a(m,_),a(_,L),a(m,A),h(e,P,t),U(f,e,t),h(e,$,t),h(e,g,t),a(g,O),a(g,d),a(d,b),S=!0},p:te,i(e){S||(F(c.$$.fragment,e),F(f.$$.fragment,e),S=!0)},o(e){K(c.$$.fragment,e),K(f.$$.fragment,e),S=!1},d(e){s(r),e&&s(q),e&&s(p),W(c),e&&s(x),e&&s(m),e&&s(P),W(f,e),e&&s($),e&&s(g)}}}const pe={local:"textguided-imageinpainting",title:"Text-Guided Image-Inpainting"};function le(V){return ne(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fe extends X{constructor(r){super();Z(this,r,le,re,ee,{})}}export{fe as default,pe as metadata};
