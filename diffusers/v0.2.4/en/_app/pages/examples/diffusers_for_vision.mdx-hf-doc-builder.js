import{S as Ts,i as Vs,s as Gs,e as n,k as l,w as u,t as h,M as Hs,c as t,d as s,m,a as i,x as f,h as c,b as r,G as a,g as o,y as g,L as Us,q as d,o as _,B as v,v as Bs}from"../../chunks/vendor-hf-doc-builder.js";import{I as Y}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as fe}from"../../chunks/CodeBlock-hf-doc-builder.js";function Cs(ms){let w,ge,j,k,ee,T,Be,se,Ce,de,$,D,ae,V,ze,ne,Je,_e,y,S,te,G,Oe,re,Re,ve,H,we,b,q,ie,U,Fe,pe,Ke,je,I,Qe,B,We,Xe,$e,C,ye,P,N,oe,z,Ye,le,Ze,be,A,es,J,ss,as,Pe,O,xe,x,M,me,R,ns,he,ts,Ee,Z,F,rs,K,is,ps,ke,Q,De,E,L,ce,W,os,ue,ls,Se,X,qe;return T=new Y({}),V=new Y({}),G=new Y({}),H=new fe({props:{code:`from diffusers import PNDM, UNetModel, PNDMScheduler
import PIL.Image
import numpy as np
import torch

model_id = "fusing/ddim-celeba-hq"

model = UNetModel.from_pretrained(model_id)
scheduler = PNDMScheduler()

# load model and scheduler
pndm = PNDM(unet=model, noise_scheduler=scheduler)

# run pipeline in inference (sample random noise and denoise)
with torch.no_grad():
    image = pndm()

# process image to PIL
image_processed = image.cpu().permute(0, 2, 3, 1)
image_processed = (image_processed + 1.0) / 2
image_processed = torch.clamp(image_processed, 0.0, 1.0)
image_processed = image_processed * 255
image_processed = image_processed.numpy().astype(np.uint8)
image_pil = PIL.Image.fromarray(image_processed[0])

# save image
image_pil.save("test.png")`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> PNDM, UNetModel, PNDMScheduler
<span class="hljs-keyword">import</span> PIL.Image
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-keyword">import</span> torch

model_id = <span class="hljs-string">&quot;fusing/ddim-celeba-hq&quot;</span>

model = UNetModel.from_pretrained(model_id)
scheduler = PNDMScheduler()

<span class="hljs-comment"># load model and scheduler</span>
pndm = PNDM(unet=model, noise_scheduler=scheduler)

<span class="hljs-comment"># run pipeline in inference (sample random noise and denoise)</span>
<span class="hljs-keyword">with</span> torch.no_grad():
    image = pndm()

<span class="hljs-comment"># process image to PIL</span>
image_processed = image.cpu().permute(<span class="hljs-number">0</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">1</span>)
image_processed = (image_processed + <span class="hljs-number">1.0</span>) / <span class="hljs-number">2</span>
image_processed = torch.clamp(image_processed, <span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>)
image_processed = image_processed * <span class="hljs-number">255</span>
image_processed = image_processed.numpy().astype(np.uint8)
image_pil = PIL.Image.fromarray(image_processed[<span class="hljs-number">0</span>])

<span class="hljs-comment"># save image</span>
image_pil.save(<span class="hljs-string">&quot;test.png&quot;</span>)`}}),U=new Y({}),C=new fe({props:{code:`from diffusers import DiffusionPipeline
import torch
import PIL.Image
import numpy as np

torch.manual_seed(32)

score_sde_sv = DiffusionPipeline.from_pretrained("fusing/ffhq_ncsnpp")

# Note this might take up to 3 minutes on a GPU
image = score_sde_sv(num_inference_steps=2000)

image = image.permute(0, 2, 3, 1).cpu().numpy()
image = np.clip(image * 255, 0, 255).astype(np.uint8)
image_pil = PIL.Image.fromarray(image[0])

# save image
image_pil.save("test.png")`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> PIL.Image
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

torch.manual_seed(<span class="hljs-number">32</span>)

score_sde_sv = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;fusing/ffhq_ncsnpp&quot;</span>)

<span class="hljs-comment"># Note this might take up to 3 minutes on a GPU</span>
image = score_sde_sv(num_inference_steps=<span class="hljs-number">2000</span>)

image = image.permute(<span class="hljs-number">0</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">1</span>).cpu().numpy()
image = np.clip(image * <span class="hljs-number">255</span>, <span class="hljs-number">0</span>, <span class="hljs-number">255</span>).astype(np.uint8)
image_pil = PIL.Image.fromarray(image[<span class="hljs-number">0</span>])

<span class="hljs-comment"># save image</span>
image_pil.save(<span class="hljs-string">&quot;test.png&quot;</span>)`}}),z=new Y({}),O=new fe({props:{code:`from diffusers import DiffusionPipeline
import torch
import PIL.Image
import numpy as np

torch.manual_seed(32)

score_sde_sv = DiffusionPipeline.from_pretrained("fusing/cifar10-ddpmpp-deep-vp")

# Note this might take up to 3 minutes on a GPU
image = score_sde_sv(num_inference_steps=1000)

image = image.permute(0, 2, 3, 1).cpu().numpy()
image = np.clip(image * 255, 0, 255).astype(np.uint8)
image_pil = PIL.Image.fromarray(image[0])

# save image
image_pil.save("test.png")`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> PIL.Image
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

torch.manual_seed(<span class="hljs-number">32</span>)

score_sde_sv = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;fusing/cifar10-ddpmpp-deep-vp&quot;</span>)

<span class="hljs-comment"># Note this might take up to 3 minutes on a GPU</span>
image = score_sde_sv(num_inference_steps=<span class="hljs-number">1000</span>)

image = image.permute(<span class="hljs-number">0</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">1</span>).cpu().numpy()
image = np.clip(image * <span class="hljs-number">255</span>, <span class="hljs-number">0</span>, <span class="hljs-number">255</span>).astype(np.uint8)
image_pil = PIL.Image.fromarray(image[<span class="hljs-number">0</span>])

<span class="hljs-comment"># save image</span>
image_pil.save(<span class="hljs-string">&quot;test.png&quot;</span>)`}}),R=new Y({}),Q=new fe({props:{code:`from diffusers import DiffusionPipeline

ldm = DiffusionPipeline.from_pretrained("fusing/latent-diffusion-text2im-large")

generator = torch.manual_seed(42)

prompt = "A painting of a squirrel eating a burger"
image = ldm([prompt], generator=generator, eta=0.3, guidance_scale=6.0, num_inference_steps=50)

image_processed = image.cpu().permute(0, 2, 3, 1)
image_processed = image_processed * 255.0
image_processed = image_processed.numpy().astype(np.uint8)
image_pil = PIL.Image.fromarray(image_processed[0])

# save image
image_pil.save("test.png")`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline

ldm = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;fusing/latent-diffusion-text2im-large&quot;</span>)

generator = torch.manual_seed(<span class="hljs-number">42</span>)

prompt = <span class="hljs-string">&quot;A painting of a squirrel eating a burger&quot;</span>
image = ldm([prompt], generator=generator, eta=<span class="hljs-number">0.3</span>, guidance_scale=<span class="hljs-number">6.0</span>, num_inference_steps=<span class="hljs-number">50</span>)

image_processed = image.cpu().permute(<span class="hljs-number">0</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">1</span>)
image_processed = image_processed * <span class="hljs-number">255.0</span>
image_processed = image_processed.numpy().astype(np.uint8)
image_pil = PIL.Image.fromarray(image_processed[<span class="hljs-number">0</span>])

<span class="hljs-comment"># save image</span>
image_pil.save(<span class="hljs-string">&quot;test.png&quot;</span>)`}}),W=new Y({}),X=new fe({props:{code:`import torch
from diffusers import BDDMPipeline, GradTTSPipeline

torch_device = "cuda"

# load grad tts and bddm pipelines
grad_tts = GradTTSPipeline.from_pretrained("fusing/grad-tts-libri-tts")
bddm = BDDMPipeline.from_pretrained("fusing/diffwave-vocoder-ljspeech")

text = "Hello world, I missed you so much."

# generate mel spectograms using text
mel_spec = grad_tts(text, torch_device=torch_device)

#  generate the speech by passing mel spectograms to BDDMPipeline pipeline
generator = torch.manual_seed(42)
audio = bddm(mel_spec, generator, torch_device=torch_device)

# save generated audio
from scipy.io.wavfile import write as wavwrite

sampling_rate = 22050
wavwrite("generated_audio.wav", sampling_rate, audio.squeeze().cpu().numpy())`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> BDDMPipeline, GradTTSPipeline

torch_device = <span class="hljs-string">&quot;cuda&quot;</span>

<span class="hljs-comment"># load grad tts and bddm pipelines</span>
grad_tts = GradTTSPipeline.from_pretrained(<span class="hljs-string">&quot;fusing/grad-tts-libri-tts&quot;</span>)
bddm = BDDMPipeline.from_pretrained(<span class="hljs-string">&quot;fusing/diffwave-vocoder-ljspeech&quot;</span>)

text = <span class="hljs-string">&quot;Hello world, I missed you so much.&quot;</span>

<span class="hljs-comment"># generate mel spectograms using text</span>
mel_spec = grad_tts(text, torch_device=torch_device)

<span class="hljs-comment">#  generate the speech by passing mel spectograms to BDDMPipeline pipeline</span>
generator = torch.manual_seed(<span class="hljs-number">42</span>)
audio = bddm(mel_spec, generator, torch_device=torch_device)

<span class="hljs-comment"># save generated audio</span>
<span class="hljs-keyword">from</span> scipy.io.wavfile <span class="hljs-keyword">import</span> write <span class="hljs-keyword">as</span> wavwrite

sampling_rate = <span class="hljs-number">22050</span>
wavwrite(<span class="hljs-string">&quot;generated_audio.wav&quot;</span>, sampling_rate, audio.squeeze().cpu().numpy())`}}),{c(){w=n("meta"),ge=l(),j=n("h1"),k=n("a"),ee=n("span"),u(T.$$.fragment),Be=l(),se=n("span"),Ce=h("Diffusers for vision"),de=l(),$=n("h2"),D=n("a"),ae=n("span"),u(V.$$.fragment),ze=l(),ne=n("span"),Je=h("Direct image generation"),_e=l(),y=n("h4"),S=n("a"),te=n("span"),u(G.$$.fragment),Oe=l(),re=n("span"),Re=h("**Example image generation with PNDM**"),ve=l(),u(H.$$.fragment),we=l(),b=n("h4"),q=n("a"),ie=n("span"),u(U.$$.fragment),Fe=l(),pe=n("span"),Ke=h("**Example 1024x1024 image generation with SDE VE**"),je=l(),I=n("p"),Qe=h("See "),B=n("a"),We=h("paper"),Xe=h(" for more information on SDE VE."),$e=l(),u(C.$$.fragment),ye=l(),P=n("h4"),N=n("a"),oe=n("span"),u(z.$$.fragment),Ye=l(),le=n("span"),Ze=h("**Example 32x32 image generation with SDE VP**"),be=l(),A=n("p"),es=h("See "),J=n("a"),ss=h("paper"),as=h(" for more information on SDE VE."),Pe=l(),u(O.$$.fragment),xe=l(),x=n("h4"),M=n("a"),me=n("span"),u(R.$$.fragment),ns=l(),he=n("span"),ts=h("**Text to Image generation with Latent Diffusion**"),Ee=l(),Z=n("p"),F=n("em"),rs=h("Note: To use latent diffusion install transformers from "),K=n("a"),is=h("this branch"),ps=h("."),ke=l(),u(Q.$$.fragment),De=l(),E=n("h2"),L=n("a"),ce=n("span"),u(W.$$.fragment),os=l(),ue=n("span"),ls=h("Text to image generation"),Se=l(),u(X.$$.fragment),this.h()},l(e){const p=Hs('[data-svelte="svelte-1phssyn"]',document.head);w=t(p,"META",{name:!0,content:!0}),p.forEach(s),ge=m(e),j=t(e,"H1",{class:!0});var Ie=i(j);k=t(Ie,"A",{id:!0,class:!0,href:!0});var hs=i(k);ee=t(hs,"SPAN",{});var cs=i(ee);f(T.$$.fragment,cs),cs.forEach(s),hs.forEach(s),Be=m(Ie),se=t(Ie,"SPAN",{});var us=i(se);Ce=c(us,"Diffusers for vision"),us.forEach(s),Ie.forEach(s),de=m(e),$=t(e,"H2",{class:!0});var Ne=i($);D=t(Ne,"A",{id:!0,class:!0,href:!0});var fs=i(D);ae=t(fs,"SPAN",{});var gs=i(ae);f(V.$$.fragment,gs),gs.forEach(s),fs.forEach(s),ze=m(Ne),ne=t(Ne,"SPAN",{});var ds=i(ne);Je=c(ds,"Direct image generation"),ds.forEach(s),Ne.forEach(s),_e=m(e),y=t(e,"H4",{class:!0});var Ae=i(y);S=t(Ae,"A",{id:!0,class:!0,href:!0});var _s=i(S);te=t(_s,"SPAN",{});var vs=i(te);f(G.$$.fragment,vs),vs.forEach(s),_s.forEach(s),Oe=m(Ae),re=t(Ae,"SPAN",{});var ws=i(re);Re=c(ws,"**Example image generation with PNDM**"),ws.forEach(s),Ae.forEach(s),ve=m(e),f(H.$$.fragment,e),we=m(e),b=t(e,"H4",{class:!0});var Me=i(b);q=t(Me,"A",{id:!0,class:!0,href:!0});var js=i(q);ie=t(js,"SPAN",{});var $s=i(ie);f(U.$$.fragment,$s),$s.forEach(s),js.forEach(s),Fe=m(Me),pe=t(Me,"SPAN",{});var ys=i(pe);Ke=c(ys,"**Example 1024x1024 image generation with SDE VE**"),ys.forEach(s),Me.forEach(s),je=m(e),I=t(e,"P",{});var Le=i(I);Qe=c(Le,"See "),B=t(Le,"A",{href:!0,rel:!0});var bs=i(B);We=c(bs,"paper"),bs.forEach(s),Xe=c(Le," for more information on SDE VE."),Le.forEach(s),$e=m(e),f(C.$$.fragment,e),ye=m(e),P=t(e,"H4",{class:!0});var Te=i(P);N=t(Te,"A",{id:!0,class:!0,href:!0});var Ps=i(N);oe=t(Ps,"SPAN",{});var xs=i(oe);f(z.$$.fragment,xs),xs.forEach(s),Ps.forEach(s),Ye=m(Te),le=t(Te,"SPAN",{});var Es=i(le);Ze=c(Es,"**Example 32x32 image generation with SDE VP**"),Es.forEach(s),Te.forEach(s),be=m(e),A=t(e,"P",{});var Ve=i(A);es=c(Ve,"See "),J=t(Ve,"A",{href:!0,rel:!0});var ks=i(J);ss=c(ks,"paper"),ks.forEach(s),as=c(Ve," for more information on SDE VE."),Ve.forEach(s),Pe=m(e),f(O.$$.fragment,e),xe=m(e),x=t(e,"H4",{class:!0});var Ge=i(x);M=t(Ge,"A",{id:!0,class:!0,href:!0});var Ds=i(M);me=t(Ds,"SPAN",{});var Ss=i(me);f(R.$$.fragment,Ss),Ss.forEach(s),Ds.forEach(s),ns=m(Ge),he=t(Ge,"SPAN",{});var qs=i(he);ts=c(qs,"**Text to Image generation with Latent Diffusion**"),qs.forEach(s),Ge.forEach(s),Ee=m(e),Z=t(e,"P",{});var Is=i(Z);F=t(Is,"EM",{});var He=i(F);rs=c(He,"Note: To use latent diffusion install transformers from "),K=t(He,"A",{href:!0,rel:!0});var Ns=i(K);is=c(Ns,"this branch"),Ns.forEach(s),ps=c(He,"."),He.forEach(s),Is.forEach(s),ke=m(e),f(Q.$$.fragment,e),De=m(e),E=t(e,"H2",{class:!0});var Ue=i(E);L=t(Ue,"A",{id:!0,class:!0,href:!0});var As=i(L);ce=t(As,"SPAN",{});var Ms=i(ce);f(W.$$.fragment,Ms),Ms.forEach(s),As.forEach(s),os=m(Ue),ue=t(Ue,"SPAN",{});var Ls=i(ue);ls=c(Ls,"Text to image generation"),Ls.forEach(s),Ue.forEach(s),Se=m(e),f(X.$$.fragment,e),this.h()},h(){r(w,"name","hf:doc:metadata"),r(w,"content",JSON.stringify(zs)),r(k,"id","diffusers-for-vision"),r(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(k,"href","#diffusers-for-vision"),r(j,"class","relative group"),r(D,"id","direct-image-generation"),r(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(D,"href","#direct-image-generation"),r($,"class","relative group"),r(S,"id","example-image-generation-with-pndm"),r(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(S,"href","#example-image-generation-with-pndm"),r(y,"class","relative group"),r(q,"id","example-1024x1024-image-generation-with-sde-ve"),r(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(q,"href","#example-1024x1024-image-generation-with-sde-ve"),r(b,"class","relative group"),r(B,"href","https://arxiv.org/abs/2011.13456"),r(B,"rel","nofollow"),r(N,"id","example-32x32-image-generation-with-sde-vp"),r(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(N,"href","#example-32x32-image-generation-with-sde-vp"),r(P,"class","relative group"),r(J,"href","https://arxiv.org/abs/2011.13456"),r(J,"rel","nofollow"),r(M,"id","text-to-image-generation-with-latent-diffusion"),r(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(M,"href","#text-to-image-generation-with-latent-diffusion"),r(x,"class","relative group"),r(K,"href","https://github.com/patil-suraj/transformers/tree/ldm-bert"),r(K,"rel","nofollow"),r(L,"id","text-to-image-generation"),r(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(L,"href","#text-to-image-generation"),r(E,"class","relative group")},m(e,p){a(document.head,w),o(e,ge,p),o(e,j,p),a(j,k),a(k,ee),g(T,ee,null),a(j,Be),a(j,se),a(se,Ce),o(e,de,p),o(e,$,p),a($,D),a(D,ae),g(V,ae,null),a($,ze),a($,ne),a(ne,Je),o(e,_e,p),o(e,y,p),a(y,S),a(S,te),g(G,te,null),a(y,Oe),a(y,re),a(re,Re),o(e,ve,p),g(H,e,p),o(e,we,p),o(e,b,p),a(b,q),a(q,ie),g(U,ie,null),a(b,Fe),a(b,pe),a(pe,Ke),o(e,je,p),o(e,I,p),a(I,Qe),a(I,B),a(B,We),a(I,Xe),o(e,$e,p),g(C,e,p),o(e,ye,p),o(e,P,p),a(P,N),a(N,oe),g(z,oe,null),a(P,Ye),a(P,le),a(le,Ze),o(e,be,p),o(e,A,p),a(A,es),a(A,J),a(J,ss),a(A,as),o(e,Pe,p),g(O,e,p),o(e,xe,p),o(e,x,p),a(x,M),a(M,me),g(R,me,null),a(x,ns),a(x,he),a(he,ts),o(e,Ee,p),o(e,Z,p),a(Z,F),a(F,rs),a(F,K),a(K,is),a(F,ps),o(e,ke,p),g(Q,e,p),o(e,De,p),o(e,E,p),a(E,L),a(L,ce),g(W,ce,null),a(E,os),a(E,ue),a(ue,ls),o(e,Se,p),g(X,e,p),qe=!0},p:Us,i(e){qe||(d(T.$$.fragment,e),d(V.$$.fragment,e),d(G.$$.fragment,e),d(H.$$.fragment,e),d(U.$$.fragment,e),d(C.$$.fragment,e),d(z.$$.fragment,e),d(O.$$.fragment,e),d(R.$$.fragment,e),d(Q.$$.fragment,e),d(W.$$.fragment,e),d(X.$$.fragment,e),qe=!0)},o(e){_(T.$$.fragment,e),_(V.$$.fragment,e),_(G.$$.fragment,e),_(H.$$.fragment,e),_(U.$$.fragment,e),_(C.$$.fragment,e),_(z.$$.fragment,e),_(O.$$.fragment,e),_(R.$$.fragment,e),_(Q.$$.fragment,e),_(W.$$.fragment,e),_(X.$$.fragment,e),qe=!1},d(e){s(w),e&&s(ge),e&&s(j),v(T),e&&s(de),e&&s($),v(V),e&&s(_e),e&&s(y),v(G),e&&s(ve),v(H,e),e&&s(we),e&&s(b),v(U),e&&s(je),e&&s(I),e&&s($e),v(C,e),e&&s(ye),e&&s(P),v(z),e&&s(be),e&&s(A),e&&s(Pe),v(O,e),e&&s(xe),e&&s(x),v(R),e&&s(Ee),e&&s(Z),e&&s(ke),v(Q,e),e&&s(De),e&&s(E),v(W),e&&s(Se),v(X,e)}}}const zs={local:"diffusers-for-vision",sections:[{local:"direct-image-generation",sections:[{local:"example-image-generation-with-pndm",title:"**Example image generation with PNDM**"},{local:"example-1024x1024-image-generation-with-sde-ve",title:"**Example 1024x1024 image generation with SDE VE**"},{local:"example-32x32-image-generation-with-sde-vp",title:"**Example 32x32 image generation with SDE VP**"},{local:"text-to-image-generation-with-latent-diffusion",title:"**Text to Image generation with Latent Diffusion**"}],title:"Direct image generation"},{local:"text-to-image-generation",title:"Text to image generation"}],title:"Diffusers for vision"};function Js(ms){return Bs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ks extends Ts{constructor(w){super();Vs(this,w,Js,Cs,Gs,{})}}export{Ks as default,zs as metadata};
