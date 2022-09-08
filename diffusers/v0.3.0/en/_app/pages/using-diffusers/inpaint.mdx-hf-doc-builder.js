import{S as X,i as Z,s as ss,e as i,k as I,w as H,t as k,M as as,c as o,d as a,m as y,a as u,x as J,h as j,b as n,N as es,G as e,g,y as U,L as ts,q as F,o as K,B as W,v as ns}from"../../chunks/vendor-hf-doc-builder.js";import{I as is}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as os}from"../../chunks/CodeBlock-hf-doc-builder.js";function rs(V){let r,q,p,l,v,c,B,w,T,x,m,D,_,G,L,P,f,$,h,A,d,b,Y,S;return c=new is({}),f=new os({props:{code:`from io import BytesIO

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
    "CompVis/stable-diffusion-v1-4", revision="fp16", torch_dtype=torch.float16, use_auth_token=True
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
    <span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>, revision=<span class="hljs-string">&quot;fp16&quot;</span>, torch_dtype=torch.float16, use_auth_token=<span class="hljs-literal">True</span>
).to(device)

prompt = <span class="hljs-string">&quot;a cat sitting on a bench&quot;</span>
<span class="hljs-keyword">with</span> autocast(<span class="hljs-string">&quot;cuda&quot;</span>):
    images = pipe(prompt=prompt, init_image=init_image, mask_image=mask_image, strength=<span class="hljs-number">0.75</span>).images

images[<span class="hljs-number">0</span>].save(<span class="hljs-string">&quot;cat_on_bench.png&quot;</span>)`}}),{c(){r=i("meta"),q=I(),p=i("h1"),l=i("a"),v=i("span"),H(c.$$.fragment),B=I(),w=i("span"),T=k("Text-Guided Image-Inpainting"),x=I(),m=i("p"),D=k("The "),_=i("a"),G=k("StableDiffusionInpaintPipeline"),L=k(" lets you edit specific parts of an image by providing a mask and text prompt."),P=I(),H(f.$$.fragment),$=I(),h=i("p"),A=k("You can also run this example on colab "),d=i("a"),b=i("img"),this.h()},l(s){const t=as('[data-svelte="svelte-1phssyn"]',document.head);r=o(t,"META",{name:!0,content:!0}),t.forEach(a),q=y(s),p=o(s,"H1",{class:!0});var C=u(p);l=o(C,"A",{id:!0,class:!0,href:!0});var N=u(l);v=o(N,"SPAN",{});var z=u(v);J(c.$$.fragment,z),z.forEach(a),N.forEach(a),B=y(C),w=o(C,"SPAN",{});var M=u(w);T=j(M,"Text-Guided Image-Inpainting"),M.forEach(a),C.forEach(a),x=y(s),m=o(s,"P",{});var E=u(m);D=j(E,"The "),_=o(E,"A",{href:!0});var Q=u(_);G=j(Q,"StableDiffusionInpaintPipeline"),Q.forEach(a),L=j(E," lets you edit specific parts of an image by providing a mask and text prompt."),E.forEach(a),P=y(s),J(f.$$.fragment,s),$=y(s),h=o(s,"P",{});var O=u(h);A=j(O,"You can also run this example on colab "),d=o(O,"A",{href:!0,rel:!0});var R=u(d);b=o(R,"IMG",{src:!0,alt:!0}),R.forEach(a),O.forEach(a),this.h()},h(){n(r,"name","hf:doc:metadata"),n(r,"content",JSON.stringify(ps)),n(l,"id","textguided-imageinpainting"),n(l,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(l,"href","#textguided-imageinpainting"),n(p,"class","relative group"),n(_,"href","/docs/diffusers/v0.3.0/en/api/pipelines/stable_diffusion#diffusers.StableDiffusionInpaintPipeline"),es(b.src,Y="https://colab.research.google.com/assets/colab-badge.svg")||n(b,"src",Y),n(b,"alt","Open In Colab"),n(d,"href","https://colab.research.google.com/github/patil-suraj/Notebooks/blob/master/in_painting_with_stable_diffusion_using_diffusers.ipynb"),n(d,"rel","nofollow")},m(s,t){e(document.head,r),g(s,q,t),g(s,p,t),e(p,l),e(l,v),U(c,v,null),e(p,B),e(p,w),e(w,T),g(s,x,t),g(s,m,t),e(m,D),e(m,_),e(_,G),e(m,L),g(s,P,t),U(f,s,t),g(s,$,t),g(s,h,t),e(h,A),e(h,d),e(d,b),S=!0},p:ts,i(s){S||(F(c.$$.fragment,s),F(f.$$.fragment,s),S=!0)},o(s){K(c.$$.fragment,s),K(f.$$.fragment,s),S=!1},d(s){a(r),s&&a(q),s&&a(p),W(c),s&&a(x),s&&a(m),s&&a(P),W(f,s),s&&a($),s&&a(h)}}}const ps={local:"textguided-imageinpainting",title:"Text-Guided Image-Inpainting"};function ls(V){return ns(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fs extends X{constructor(r){super();Z(this,r,ls,rs,ss,{})}}export{fs as default,ps as metadata};
