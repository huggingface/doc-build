import{S as X,i as Z,s as ss,e as i,k as I,w as H,t as k,M as as,c as o,d as a,m as y,a as u,x as J,h as j,b as n,N as es,G as e,g as d,y as U,L as ts,q as F,o as K,B as W,v as ns}from"../../chunks/vendor-hf-doc-builder.js";import{I as is}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as os}from"../../chunks/CodeBlock-hf-doc-builder.js";function rs(V){let r,q,p,l,v,c,B,w,D,x,m,G,_,L,A,P,f,$,h,O,g,b,Y,S;return c=new is({}),f=new os({props:{code:`from io import BytesIO

from torch import autocast
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
with autocast("cuda"):
    images = pipe(prompt=prompt, init_image=init_image, mask_image=mask_image, strength=0.75).images

images[0].save("cat_on_bench.png")`,highlighted:`<span class="hljs-keyword">from</span> io <span class="hljs-keyword">import</span> BytesIO

<span class="hljs-keyword">from</span> torch <span class="hljs-keyword">import</span> autocast
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
<span class="hljs-keyword">with</span> autocast(<span class="hljs-string">&quot;cuda&quot;</span>):
    images = pipe(prompt=prompt, init_image=init_image, mask_image=mask_image, strength=<span class="hljs-number">0.75</span>).images

images[<span class="hljs-number">0</span>].save(<span class="hljs-string">&quot;cat_on_bench.png&quot;</span>)`}}),{c(){r=i("meta"),q=I(),p=i("h1"),l=i("a"),v=i("span"),H(c.$$.fragment),B=I(),w=i("span"),D=k("Text-Guided Image-Inpainting"),x=I(),m=i("p"),G=k("The "),_=i("a"),L=k("StableDiffusionInpaintPipeline"),A=k(" lets you edit specific parts of an image by providing a mask and text prompt."),P=I(),H(f.$$.fragment),$=I(),h=i("p"),O=k("You can also run this example on colab "),g=i("a"),b=i("img"),this.h()},l(s){const t=as('[data-svelte="svelte-1phssyn"]',document.head);r=o(t,"META",{name:!0,content:!0}),t.forEach(a),q=y(s),p=o(s,"H1",{class:!0});var C=u(p);l=o(C,"A",{id:!0,class:!0,href:!0});var z=u(l);v=o(z,"SPAN",{});var M=u(v);J(c.$$.fragment,M),M.forEach(a),z.forEach(a),B=y(C),w=o(C,"SPAN",{});var N=u(w);D=j(N,"Text-Guided Image-Inpainting"),N.forEach(a),C.forEach(a),x=y(s),m=o(s,"P",{});var E=u(m);G=j(E,"The "),_=o(E,"A",{href:!0});var Q=u(_);L=j(Q,"StableDiffusionInpaintPipeline"),Q.forEach(a),A=j(E," lets you edit specific parts of an image by providing a mask and text prompt."),E.forEach(a),P=y(s),J(f.$$.fragment,s),$=y(s),h=o(s,"P",{});var T=u(h);O=j(T,"You can also run this example on colab "),g=o(T,"A",{href:!0,rel:!0});var R=u(g);b=o(R,"IMG",{src:!0,alt:!0}),R.forEach(a),T.forEach(a),this.h()},h(){n(r,"name","hf:doc:metadata"),n(r,"content",JSON.stringify(ps)),n(l,"id","textguided-imageinpainting"),n(l,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(l,"href","#textguided-imageinpainting"),n(p,"class","relative group"),n(_,"href","/docs/diffusers/main/en/api/pipelines/stable_diffusion#diffusers.StableDiffusionInpaintPipeline"),es(b.src,Y="https://colab.research.google.com/assets/colab-badge.svg")||n(b,"src",Y),n(b,"alt","Open In Colab"),n(g,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/diffusers/in_painting_with_stable_diffusion_using_diffusers.ipynb"),n(g,"rel","nofollow")},m(s,t){e(document.head,r),d(s,q,t),d(s,p,t),e(p,l),e(l,v),U(c,v,null),e(p,B),e(p,w),e(w,D),d(s,x,t),d(s,m,t),e(m,G),e(m,_),e(_,L),e(m,A),d(s,P,t),U(f,s,t),d(s,$,t),d(s,h,t),e(h,O),e(h,g),e(g,b),S=!0},p:ts,i(s){S||(F(c.$$.fragment,s),F(f.$$.fragment,s),S=!0)},o(s){K(c.$$.fragment,s),K(f.$$.fragment,s),S=!1},d(s){a(r),s&&a(q),s&&a(p),W(c),s&&a(x),s&&a(m),s&&a(P),W(f,s),s&&a($),s&&a(h)}}}const ps={local:"textguided-imageinpainting",title:"Text-Guided Image-Inpainting"};function ls(V){return ns(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fs extends X{constructor(r){super();Z(this,r,ls,rs,ss,{})}}export{fs as default,ps as metadata};
