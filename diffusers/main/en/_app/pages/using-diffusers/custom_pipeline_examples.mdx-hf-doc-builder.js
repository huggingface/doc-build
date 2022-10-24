import{S as El,i as jl,s as kl,e as a,k as p,w as d,t as r,M as ql,c as i,d as s,m as f,a as o,x as m,h as l,b as n,N as gn,G as t,g as h,y as c,L as Pl,q as g,o as _,B as b,v as $l}from"../../chunks/vendor-hf-doc-builder.js";import{I as G}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as me}from"../../chunks/CodeBlock-hf-doc-builder.js";function Dl(_n){let B,As,R,X,Jt,ce,La,Xt,Na,Ls,Je,Zt,ge,Oa,_e,Ga,Ba,Ns,M,es,Ra,Ma,ts,Va,Ua,Os,Z,ss,w,Xe,Wa,Ha,Ze,Fa,za,et,Ya,Ka,tt,Qa,Ja,st,Xa,Za,v,y,at,ei,ti,it,si,ai,ot,nt,ii,oi,rt,be,lt,bn,ni,pt,ve,ri,li,E,ft,pi,fi,ee,ui,we,hi,di,mi,ut,ht,ci,gi,dt,_i,bi,mt,ye,vi,wi,j,ct,yi,Ei,gt,ji,ki,_t,bt,qi,Pi,vt,$i,Di,wt,Ee,xi,Ti,k,yt,Si,Ii,$,as,Ci,Ai,je,Li,Ni,ke,Oi,Gi,qe,Bi,Ri,Et,jt,Mi,Vi,kt,Ui,Wi,qt,Pe,Hi,Fi,q,Pt,zi,Yi,$e,is,Ki,Qi,Ji,$t,Dt,Xi,Zi,xt,eo,to,Tt,De,so,ao,P,St,io,oo,It,no,ro,Ct,At,lo,po,Lt,fo,uo,Nt,xe,ho,Gs,D,mo,os,co,go,ns,_o,bo,rs,vo,wo,Bs,Te,Rs,V,te,ls,Se,yo,ps,Eo,Ms,U,se,fs,Ie,jo,us,ko,Vs,Ot,qo,Us,Gt,Po,Ws,Ce,Hs,ae,$o,hs,Do,xo,Fs,Ae,Bt,vn,To,zs,W,ie,ds,Le,So,ms,Io,Ys,Rt,Co,Ks,Ne,Qs,H,cs,Ao,Lo,Oe,No,Oo,Js,F,oe,gs,Ge,Go,_s,Bo,Xs,Mt,Ro,Zs,Be,ea,T,Mo,bs,Vo,Uo,vs,Wo,Ho,ta,Vt,ws,Re,Fo,Me,zo,Yo,sa,z,ne,ys,Ve,Ko,Es,Qo,aa,Ut,Jo,ia,Ue,oa,Wt,Xo,na,Y,re,js,We,Zo,ks,en,ra,Ht,tn,la,K,le,qs,He,sn,Ps,an,pa,Fe,fa,Q,pe,$s,ze,on,Ds,nn,ua,Ye,ha,fe,rn,xs,ln,pn,da,J,ue,Ts,Ke,fn,Ss,un,ma,Ft,hn,ca,Qe,ga,zt,dn,_a,Yt,Kt,wn,ba;return ce=new G({}),Te=new me({props:{code:`pipe = DiffusionPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4", custom_pipeline="filename_in_the_community_folder"
)`,highlighted:`pipe = DiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>, custom_pipeline=<span class="hljs-string">&quot;filename_in_the_community_folder&quot;</span>
)`}}),Se=new G({}),Ie=new G({}),Ce=new me({props:{code:`from diffusers import DiffusionPipeline
from transformers import CLIPFeatureExtractor, CLIPModel
import torch


feature_extractor = CLIPFeatureExtractor.from_pretrained("laion/CLIP-ViT-B-32-laion2B-s34B-b79K")
clip_model = CLIPModel.from_pretrained("laion/CLIP-ViT-B-32-laion2B-s34B-b79K", torch_dtype=torch.float16)


guided_pipeline = DiffusionPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4",
    custom_pipeline="clip_guided_stable_diffusion",
    clip_model=clip_model,
    feature_extractor=feature_extractor,
    revision="fp16",
    torch_dtype=torch.float16,
)
guided_pipeline.enable_attention_slicing()
guided_pipeline = guided_pipeline.to("cuda")

prompt = "fantasy book cover, full moon, fantasy forest landscape, golden vector elements, fantasy magic, dark light night, intricate, elegant, sharp focus, illustration, highly detailed, digital painting, concept art, matte, art by WLOP and Artgerm and Albert Bierstadt, masterpiece"

generator = torch.Generator(device="cuda").manual_seed(0)
images = []
for i in range(4):
    image = guided_pipeline(
        prompt,
        num_inference_steps=50,
        guidance_scale=7.5,
        clip_guidance_scale=100,
        num_cutouts=4,
        use_cutouts=False,
        generator=generator,
    ).images[0]
    images.append(image)

# save images locally
for i, img in enumerate(images):
    img.save(f"./clip_guided_sd/image_{i}.png")`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPFeatureExtractor, CLIPModel
<span class="hljs-keyword">import</span> torch


feature_extractor = CLIPFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;laion/CLIP-ViT-B-32-laion2B-s34B-b79K&quot;</span>)
clip_model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;laion/CLIP-ViT-B-32-laion2B-s34B-b79K&quot;</span>, torch_dtype=torch.float16)


guided_pipeline = DiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>,
    custom_pipeline=<span class="hljs-string">&quot;clip_guided_stable_diffusion&quot;</span>,
    clip_model=clip_model,
    feature_extractor=feature_extractor,
    revision=<span class="hljs-string">&quot;fp16&quot;</span>,
    torch_dtype=torch.float16,
)
guided_pipeline.enable_attention_slicing()
guided_pipeline = guided_pipeline.to(<span class="hljs-string">&quot;cuda&quot;</span>)

prompt = <span class="hljs-string">&quot;fantasy book cover, full moon, fantasy forest landscape, golden vector elements, fantasy magic, dark light night, intricate, elegant, sharp focus, illustration, highly detailed, digital painting, concept art, matte, art by WLOP and Artgerm and Albert Bierstadt, masterpiece&quot;</span>

generator = torch.Generator(device=<span class="hljs-string">&quot;cuda&quot;</span>).manual_seed(<span class="hljs-number">0</span>)
images = []
<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">4</span>):
    image = guided_pipeline(
        prompt,
        num_inference_steps=<span class="hljs-number">50</span>,
        guidance_scale=<span class="hljs-number">7.5</span>,
        clip_guidance_scale=<span class="hljs-number">100</span>,
        num_cutouts=<span class="hljs-number">4</span>,
        use_cutouts=<span class="hljs-literal">False</span>,
        generator=generator,
    ).images[<span class="hljs-number">0</span>]
    images.append(image)

<span class="hljs-comment"># save images locally</span>
<span class="hljs-keyword">for</span> i, img <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(images):
    img.save(<span class="hljs-string">f&quot;./clip_guided_sd/image_<span class="hljs-subst">{i}</span>.png&quot;</span>)`}}),Le=new G({}),Ne=new me({props:{code:`from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained("google/ddpm-cifar10-32", custom_pipeline="one_step_unet")
pipe()`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;google/ddpm-cifar10-32&quot;</span>, custom_pipeline=<span class="hljs-string">&quot;one_step_unet&quot;</span>)
pipe()`}}),Ge=new G({}),Be=new me({props:{code:`from diffusers import DiffusionPipeline
import torch

pipe = DiffusionPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4",
    revision="fp16",
    torch_dtype=torch.float16,
    safety_checker=None,  # Very important for videos...lots of false positives while interpolating
    custom_pipeline="interpolate_stable_diffusion",
).to("cuda")
pipe.enable_attention_slicing()

frame_filepaths = pipe.walk(
    prompts=["a dog", "a cat", "a horse"],
    seeds=[42, 1337, 1234],
    num_interpolation_steps=16,
    output_dir="./dreams",
    batch_size=4,
    height=512,
    width=512,
    guidance_scale=8.5,
    num_inference_steps=50,
)`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline
<span class="hljs-keyword">import</span> torch

pipe = DiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>,
    revision=<span class="hljs-string">&quot;fp16&quot;</span>,
    torch_dtype=torch.float16,
    safety_checker=<span class="hljs-literal">None</span>,  <span class="hljs-comment"># Very important for videos...lots of false positives while interpolating</span>
    custom_pipeline=<span class="hljs-string">&quot;interpolate_stable_diffusion&quot;</span>,
).to(<span class="hljs-string">&quot;cuda&quot;</span>)
pipe.enable_attention_slicing()

frame_filepaths = pipe.walk(
    prompts=[<span class="hljs-string">&quot;a dog&quot;</span>, <span class="hljs-string">&quot;a cat&quot;</span>, <span class="hljs-string">&quot;a horse&quot;</span>],
    seeds=[<span class="hljs-number">42</span>, <span class="hljs-number">1337</span>, <span class="hljs-number">1234</span>],
    num_interpolation_steps=<span class="hljs-number">16</span>,
    output_dir=<span class="hljs-string">&quot;./dreams&quot;</span>,
    batch_size=<span class="hljs-number">4</span>,
    height=<span class="hljs-number">512</span>,
    width=<span class="hljs-number">512</span>,
    guidance_scale=<span class="hljs-number">8.5</span>,
    num_inference_steps=<span class="hljs-number">50</span>,
)`}}),Ve=new G({}),Ue=new me({props:{code:`#!/usr/bin/env python3
from diffusers import DiffusionPipeline
import PIL
import requests
from io import BytesIO
import torch


def download_image(url):
    response = requests.get(url)
    return PIL.Image.open(BytesIO(response.content)).convert("RGB")


pipe = DiffusionPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4",
    custom_pipeline="stable_diffusion_mega",
    torch_dtype=torch.float16,
    revision="fp16",
)
pipe.to("cuda")
pipe.enable_attention_slicing()


### Text-to-Image

images = pipe.text2img("An astronaut riding a horse").images

### Image-to-Image

init_image = download_image(
    "https://raw.githubusercontent.com/CompVis/stable-diffusion/main/assets/stable-samples/img2img/sketch-mountains-input.jpg"
)

prompt = "A fantasy landscape, trending on artstation"

images = pipe.img2img(prompt=prompt, init_image=init_image, strength=0.75, guidance_scale=7.5).images

### Inpainting

img_url = "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png"
mask_url = "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"
init_image = download_image(img_url).resize((512, 512))
mask_image = download_image(mask_url).resize((512, 512))

prompt = "a cat sitting on a bench"
images = pipe.inpaint(prompt=prompt, init_image=init_image, mask_image=mask_image, strength=0.75).images`,highlighted:`<span class="hljs-comment">#!/usr/bin/env python3</span>
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline
<span class="hljs-keyword">import</span> PIL
<span class="hljs-keyword">import</span> requests
<span class="hljs-keyword">from</span> io <span class="hljs-keyword">import</span> BytesIO
<span class="hljs-keyword">import</span> torch


<span class="hljs-keyword">def</span> <span class="hljs-title function_">download_image</span>(<span class="hljs-params">url</span>):
    response = requests.get(url)
    <span class="hljs-keyword">return</span> PIL.Image.<span class="hljs-built_in">open</span>(BytesIO(response.content)).convert(<span class="hljs-string">&quot;RGB&quot;</span>)


pipe = DiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>,
    custom_pipeline=<span class="hljs-string">&quot;stable_diffusion_mega&quot;</span>,
    torch_dtype=torch.float16,
    revision=<span class="hljs-string">&quot;fp16&quot;</span>,
)
pipe.to(<span class="hljs-string">&quot;cuda&quot;</span>)
pipe.enable_attention_slicing()


<span class="hljs-comment">### Text-to-Image</span>

images = pipe.text2img(<span class="hljs-string">&quot;An astronaut riding a horse&quot;</span>).images

<span class="hljs-comment">### Image-to-Image</span>

init_image = download_image(
    <span class="hljs-string">&quot;https://raw.githubusercontent.com/CompVis/stable-diffusion/main/assets/stable-samples/img2img/sketch-mountains-input.jpg&quot;</span>
)

prompt = <span class="hljs-string">&quot;A fantasy landscape, trending on artstation&quot;</span>

images = pipe.img2img(prompt=prompt, init_image=init_image, strength=<span class="hljs-number">0.75</span>, guidance_scale=<span class="hljs-number">7.5</span>).images

<span class="hljs-comment">### Inpainting</span>

img_url = <span class="hljs-string">&quot;https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png&quot;</span>
mask_url = <span class="hljs-string">&quot;https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png&quot;</span>
init_image = download_image(img_url).resize((<span class="hljs-number">512</span>, <span class="hljs-number">512</span>))
mask_image = download_image(mask_url).resize((<span class="hljs-number">512</span>, <span class="hljs-number">512</span>))

prompt = <span class="hljs-string">&quot;a cat sitting on a bench&quot;</span>
images = pipe.inpaint(prompt=prompt, init_image=init_image, mask_image=mask_image, strength=<span class="hljs-number">0.75</span>).images`}}),We=new G({}),He=new G({}),Fe=new me({props:{code:`from diffusers import DiffusionPipeline
import torch

pipe = DiffusionPipeline.from_pretrained(
    "hakurei/waifu-diffusion", custom_pipeline="lpw_stable_diffusion", revision="fp16", torch_dtype=torch.float16
)
pipe = pipe.to("cuda")

prompt = "best_quality (1girl:1.3) bow bride brown_hair closed_mouth frilled_bow frilled_hair_tubes frills (full_body:1.3) fox_ear hair_bow hair_tubes happy hood japanese_clothes kimono long_sleeves red_bow smile solo tabi uchikake white_kimono wide_sleeves cherry_blossoms"
neg_prompt = "lowres, bad_anatomy, error_body, error_hair, error_arm, error_hands, bad_hands, error_fingers, bad_fingers, missing_fingers, error_legs, bad_legs, multiple_legs, missing_legs, error_lighting, error_shadow, error_reflection, text, error, extra_digit, fewer_digits, cropped, worst_quality, low_quality, normal_quality, jpeg_artifacts, signature, watermark, username, blurry"

pipe.text2img(prompt, negative_prompt=neg_prompt, width=512, height=512, max_embeddings_multiples=3).images[0]`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline
<span class="hljs-keyword">import</span> torch

pipe = DiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;hakurei/waifu-diffusion&quot;</span>, custom_pipeline=<span class="hljs-string">&quot;lpw_stable_diffusion&quot;</span>, revision=<span class="hljs-string">&quot;fp16&quot;</span>, torch_dtype=torch.float16
)
pipe = pipe.to(<span class="hljs-string">&quot;cuda&quot;</span>)

prompt = <span class="hljs-string">&quot;best_quality (1girl:1.3) bow bride brown_hair closed_mouth frilled_bow frilled_hair_tubes frills (full_body:1.3) fox_ear hair_bow hair_tubes happy hood japanese_clothes kimono long_sleeves red_bow smile solo tabi uchikake white_kimono wide_sleeves cherry_blossoms&quot;</span>
neg_prompt = <span class="hljs-string">&quot;lowres, bad_anatomy, error_body, error_hair, error_arm, error_hands, bad_hands, error_fingers, bad_fingers, missing_fingers, error_legs, bad_legs, multiple_legs, missing_legs, error_lighting, error_shadow, error_reflection, text, error, extra_digit, fewer_digits, cropped, worst_quality, low_quality, normal_quality, jpeg_artifacts, signature, watermark, username, blurry&quot;</span>

pipe.text2img(prompt, negative_prompt=neg_prompt, width=<span class="hljs-number">512</span>, height=<span class="hljs-number">512</span>, max_embeddings_multiples=<span class="hljs-number">3</span>).images[<span class="hljs-number">0</span>]`}}),ze=new G({}),Ye=new me({props:{code:`from diffusers import DiffusionPipeline
import torch

pipe = DiffusionPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4",
    custom_pipeline="lpw_stable_diffusion_onnx",
    revision="onnx",
    provider="CUDAExecutionProvider",
)

prompt = "a photo of an astronaut riding a horse on mars, best quality"
neg_prompt = "lowres, bad anatomy, error body, error hair, error arm, error hands, bad hands, error fingers, bad fingers, missing fingers, error legs, bad legs, multiple legs, missing legs, error lighting, error shadow, error reflection, text, error, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry"

pipe.text2img(prompt, negative_prompt=neg_prompt, width=512, height=512, max_embeddings_multiples=3).images[0]`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline
<span class="hljs-keyword">import</span> torch

pipe = DiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>,
    custom_pipeline=<span class="hljs-string">&quot;lpw_stable_diffusion_onnx&quot;</span>,
    revision=<span class="hljs-string">&quot;onnx&quot;</span>,
    provider=<span class="hljs-string">&quot;CUDAExecutionProvider&quot;</span>,
)

prompt = <span class="hljs-string">&quot;a photo of an astronaut riding a horse on mars, best quality&quot;</span>
neg_prompt = <span class="hljs-string">&quot;lowres, bad anatomy, error body, error hair, error arm, error hands, bad hands, error fingers, bad fingers, missing fingers, error legs, bad legs, multiple legs, missing legs, error lighting, error shadow, error reflection, text, error, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry&quot;</span>

pipe.text2img(prompt, negative_prompt=neg_prompt, width=<span class="hljs-number">512</span>, height=<span class="hljs-number">512</span>, max_embeddings_multiples=<span class="hljs-number">3</span>).images[<span class="hljs-number">0</span>]`}}),Ke=new G({}),Qe=new me({props:{code:`import torch

import matplotlib.pyplot as plt
from datasets import load_dataset
from diffusers import DiffusionPipeline
from transformers import (
    WhisperForConditionalGeneration,
    WhisperProcessor,
)


device = "cuda" if torch.cuda.is_available() else "cpu"

ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")

audio_sample = ds[3]

text = audio_sample["text"].lower()
speech_data = audio_sample["audio"]["array"]

model = WhisperForConditionalGeneration.from_pretrained("openai/whisper-small").to(device)
processor = WhisperProcessor.from_pretrained("openai/whisper-small")

diffuser_pipeline = DiffusionPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4",
    custom_pipeline="speech_to_image_diffusion",
    speech_model=model,
    speech_processor=processor,
    revision="fp16",
    torch_dtype=torch.float16,
)

diffuser_pipeline.enable_attention_slicing()
diffuser_pipeline = diffuser_pipeline.to(device)

output = diffuser_pipeline(speech_data)
plt.imshow(output.images[0])`,highlighted:`<span class="hljs-keyword">import</span> torch

<span class="hljs-keyword">import</span> matplotlib.pyplot <span class="hljs-keyword">as</span> plt
<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
    WhisperForConditionalGeneration,
    WhisperProcessor,
)


device = <span class="hljs-string">&quot;cuda&quot;</span> <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> <span class="hljs-string">&quot;cpu&quot;</span>

ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

audio_sample = ds[<span class="hljs-number">3</span>]

text = audio_sample[<span class="hljs-string">&quot;text&quot;</span>].lower()
speech_data = audio_sample[<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>]

model = WhisperForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;openai/whisper-small&quot;</span>).to(device)
processor = WhisperProcessor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-small&quot;</span>)

diffuser_pipeline = DiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>,
    custom_pipeline=<span class="hljs-string">&quot;speech_to_image_diffusion&quot;</span>,
    speech_model=model,
    speech_processor=processor,
    revision=<span class="hljs-string">&quot;fp16&quot;</span>,
    torch_dtype=torch.float16,
)

diffuser_pipeline.enable_attention_slicing()
diffuser_pipeline = diffuser_pipeline.to(device)

output = diffuser_pipeline(speech_data)
plt.imshow(output.images[<span class="hljs-number">0</span>])`}}),{c(){B=a("meta"),As=p(),R=a("h1"),X=a("a"),Jt=a("span"),d(ce.$$.fragment),La=p(),Xt=a("span"),Na=r("Custom Pipelines"),Ls=p(),Je=a("blockquote"),Zt=a("p"),ge=a("strong"),Oa=r("For more information about community pipelines, please have a look at "),_e=a("a"),Ga=r("this issue"),Ba=r("."),Ns=p(),M=a("p"),es=a("strong"),Ra=r("Community"),Ma=r(` examples consist of both inference and training examples that have been added by the community.
Please have a look at the following table to get an overview of all community examples. Click on the `),ts=a("strong"),Va=r("Code Example"),Ua=r(` to get a copy-and-paste ready code example that you can try out.
If a community doesn\u2019t work as expected, please open an issue and ping the author on it.`),Os=p(),Z=a("table"),ss=a("thead"),w=a("tr"),Xe=a("th"),Wa=r("Example"),Ha=p(),Ze=a("th"),Fa=r("Description"),za=p(),et=a("th"),Ya=r("Code Example"),Ka=p(),tt=a("th"),Qa=r("Colab"),Ja=p(),st=a("th"),Xa=r("Author"),Za=p(),v=a("tbody"),y=a("tr"),at=a("td"),ei=r("CLIP Guided Stable Diffusion"),ti=p(),it=a("td"),si=r("Doing CLIP guidance for text to image generation with Stable Diffusion"),ai=p(),ot=a("td"),nt=a("a"),ii=r("CLIP Guided Stable Diffusion"),oi=p(),rt=a("td"),be=a("a"),lt=a("img"),ni=p(),pt=a("td"),ve=a("a"),ri=r("Suraj Patil"),li=p(),E=a("tr"),ft=a("td"),pi=r("One Step U-Net (Dummy)"),fi=p(),ee=a("td"),ui=r("Example showcasing of how to use Community Pipelines (see "),we=a("a"),hi=r("https://github.com/huggingface/diffusers/issues/841"),di=r(")"),mi=p(),ut=a("td"),ht=a("a"),ci=r("One Step U-Net"),gi=p(),dt=a("td"),_i=r("-"),bi=p(),mt=a("td"),ye=a("a"),vi=r("Patrick von Platen"),wi=p(),j=a("tr"),ct=a("td"),yi=r("Stable Diffusion Interpolation"),Ei=p(),gt=a("td"),ji=r("Interpolate the latent space of Stable Diffusion between different prompts/seeds"),ki=p(),_t=a("td"),bt=a("a"),qi=r("Stable Diffusion Interpolation"),Pi=p(),vt=a("td"),$i=r("-"),Di=p(),wt=a("td"),Ee=a("a"),xi=r("Nate Raw"),Ti=p(),k=a("tr"),yt=a("td"),Si=r("Stable Diffusion Mega"),Ii=p(),$=a("td"),as=a("strong"),Ci=r("One"),Ai=r(" Stable Diffusion Pipeline with all functionalities of "),je=a("a"),Li=r("Text2Image"),Ni=r(", "),ke=a("a"),Oi=r("Image2Image"),Gi=r(" and "),qe=a("a"),Bi=r("Inpainting"),Ri=p(),Et=a("td"),jt=a("a"),Mi=r("Stable Diffusion Mega"),Vi=p(),kt=a("td"),Ui=r("-"),Wi=p(),qt=a("td"),Pe=a("a"),Hi=r("Patrick von Platen"),Fi=p(),q=a("tr"),Pt=a("td"),zi=r("Long Prompt Weighting Stable Diffusion"),Yi=p(),$e=a("td"),is=a("strong"),Ki=r("One"),Qi=r(" Stable Diffusion Pipeline without tokens length limit, and support parsing weighting in prompt."),Ji=p(),$t=a("td"),Dt=a("a"),Xi=r("Long Prompt Weighting Stable Diffusion"),Zi=p(),xt=a("td"),eo=r("-"),to=p(),Tt=a("td"),De=a("a"),so=r("SkyTNT"),ao=p(),P=a("tr"),St=a("td"),io=r("Speech to Image"),oo=p(),It=a("td"),no=r("Using automatic-speech-recognition to transcribe text and Stable Diffusion to generate images"),ro=p(),Ct=a("td"),At=a("a"),lo=r("Speech to Image"),po=p(),Lt=a("td"),fo=r("-"),uo=p(),Nt=a("td"),xe=a("a"),ho=r("Mikail Duzenli"),Gs=p(),D=a("p"),mo=r("To load a custom pipeline you just need to pass the "),os=a("code"),co=r("custom_pipeline"),go=r(" argument to "),ns=a("code"),_o=r("DiffusionPipeline"),bo=r(", as one of the files in "),rs=a("code"),vo=r("diffusers/examples/community"),wo=r(". Feel free to send a PR with your own pipelines, we will merge them quickly."),Bs=p(),d(Te.$$.fragment),Rs=p(),V=a("h2"),te=a("a"),ls=a("span"),d(Se.$$.fragment),yo=p(),ps=a("span"),Eo=r("Example usages"),Ms=p(),U=a("h3"),se=a("a"),fs=a("span"),d(Ie.$$.fragment),jo=p(),us=a("span"),ko=r("CLIP Guided Stable Diffusion"),Vs=p(),Ot=a("p"),qo=r(`CLIP guided stable diffusion can help to generate more realistic images
by guiding stable diffusion at every denoising step with an additional CLIP model.`),Us=p(),Gt=a("p"),Po=r("The following code requires roughly 12GB of GPU RAM."),Ws=p(),d(Ce.$$.fragment),Hs=p(),ae=a("p"),$o=r("The "),hs=a("code"),Do=r("images"),xo=r(` list contains a list of PIL images that can be saved locally or displayed directly in a google colab.
Generated images tend to be of higher qualtiy than natively using stable diffusion. E.g. the above script generates the following images:`),Fs=p(),Ae=a("p"),Bt=a("img"),To=r("."),zs=p(),W=a("h3"),ie=a("a"),ds=a("span"),d(Le.$$.fragment),So=p(),ms=a("span"),Io=r("One Step Unet"),Ys=p(),Rt=a("p"),Co=r("The dummy \u201Cone-step-unet\u201D can be run as follows:"),Ks=p(),d(Ne.$$.fragment),Qs=p(),H=a("p"),cs=a("strong"),Ao=r("Note"),Lo=r(": This community pipeline is not useful as a feature, but rather just serves as an example of how community pipelines can be added (see "),Oe=a("a"),No=r("https://github.com/huggingface/diffusers/issues/841"),Oo=r(")."),Js=p(),F=a("h3"),oe=a("a"),gs=a("span"),d(Ge.$$.fragment),Go=p(),_s=a("span"),Bo=r("Stable Diffusion Interpolation"),Xs=p(),Mt=a("p"),Ro=r("The following code can be run on a GPU of at least 8GB VRAM and should take approximately 5 minutes."),Zs=p(),d(Be.$$.fragment),ea=p(),T=a("p"),Mo=r("The output of the "),bs=a("code"),Vo=r("walk(...)"),Uo=r(" function returns a list of images saved under the folder as defined in "),vs=a("code"),Wo=r("output_dir"),Ho=r(". You can use these images to create videos of stable diffusion."),ta=p(),Vt=a("blockquote"),ws=a("p"),Re=a("strong"),Fo=r("Please have a look at "),Me=a("a"),zo=r("https://github.com/nateraw/stable-diffusion-videos"),Yo=r(" for more in-detail information on how to create videos using stable diffusion as well as more feature-complete functionality."),sa=p(),z=a("h3"),ne=a("a"),ys=a("span"),d(Ve.$$.fragment),Ko=p(),Es=a("span"),Qo=r("Stable Diffusion Mega"),aa=p(),Ut=a("p"),Jo=r("The Stable Diffusion Mega Pipeline lets you use the main use cases of the stable diffusion pipeline in a single class."),ia=p(),d(Ue.$$.fragment),oa=p(),Wt=a("p"),Xo=r("As shown above this one pipeline can run all both \u201Ctext-to-image\u201D, \u201Cimage-to-image\u201D, and \u201Cinpainting\u201D in one pipeline."),na=p(),Y=a("h3"),re=a("a"),js=a("span"),d(We.$$.fragment),Zo=p(),ks=a("span"),en=r("Long Prompt Weighting Stable Diffusion"),ra=p(),Ht=a("p"),tn=r(`The Pipeline lets you input prompt without 77 token length limit. And you can increase words weighting by using \u201D()\u201D or decrease words weighting by using \u201D[]\u201D
The Pipeline also lets you use the main use cases of the stable diffusion pipeline in a single class.`),la=p(),K=a("h4"),le=a("a"),qs=a("span"),d(He.$$.fragment),sn=p(),Ps=a("span"),an=r("pytorch"),pa=p(),d(Fe.$$.fragment),fa=p(),Q=a("h4"),pe=a("a"),$s=a("span"),d(ze.$$.fragment),on=p(),Ds=a("span"),nn=r("onnxruntime"),ua=p(),d(Ye.$$.fragment),ha=p(),fe=a("p"),rn=r("if you see "),xs=a("code"),ln=r("Token indices sequence length is longer than the specified maximum sequence length for this model ( *** > 77 ) . Running this sequence through the model will result in indexing errors"),pn=r(". Do not worry, it is normal."),da=p(),J=a("h3"),ue=a("a"),Ts=a("span"),d(Ke.$$.fragment),fn=p(),Ss=a("span"),un=r("Speech to Image"),ma=p(),Ft=a("p"),hn=r("The following code can generate an image from an audio sample using pre-trained OpenAI whisper-small and Stable Diffusion."),ca=p(),d(Qe.$$.fragment),ga=p(),zt=a("p"),dn=r("This example produces the following image:"),_a=p(),Yt=a("p"),Kt=a("img"),this.h()},l(e){const u=ql('[data-svelte="svelte-1phssyn"]',document.head);B=i(u,"META",{name:!0,content:!0}),u.forEach(s),As=f(e),R=i(e,"H1",{class:!0});var va=o(R);X=i(va,"A",{id:!0,class:!0,href:!0});var yn=o(X);Jt=i(yn,"SPAN",{});var En=o(Jt);m(ce.$$.fragment,En),En.forEach(s),yn.forEach(s),La=f(va),Xt=i(va,"SPAN",{});var jn=o(Xt);Na=l(jn,"Custom Pipelines"),jn.forEach(s),va.forEach(s),Ls=f(e),Je=i(e,"BLOCKQUOTE",{});var kn=o(Je);Zt=i(kn,"P",{});var qn=o(Zt);ge=i(qn,"STRONG",{});var wa=o(ge);Oa=l(wa,"For more information about community pipelines, please have a look at "),_e=i(wa,"A",{href:!0,rel:!0});var Pn=o(_e);Ga=l(Pn,"this issue"),Pn.forEach(s),Ba=l(wa,"."),wa.forEach(s),qn.forEach(s),kn.forEach(s),Ns=f(e),M=i(e,"P",{});var Is=o(M);es=i(Is,"STRONG",{});var $n=o(es);Ra=l($n,"Community"),$n.forEach(s),Ma=l(Is,` examples consist of both inference and training examples that have been added by the community.
Please have a look at the following table to get an overview of all community examples. Click on the `),ts=i(Is,"STRONG",{});var Dn=o(ts);Va=l(Dn,"Code Example"),Dn.forEach(s),Ua=l(Is,` to get a copy-and-paste ready code example that you can try out.
If a community doesn\u2019t work as expected, please open an issue and ping the author on it.`),Is.forEach(s),Os=f(e),Z=i(e,"TABLE",{});var ya=o(Z);ss=i(ya,"THEAD",{});var xn=o(ss);w=i(xn,"TR",{});var S=o(w);Xe=i(S,"TH",{align:!0});var Tn=o(Xe);Wa=l(Tn,"Example"),Tn.forEach(s),Ha=f(S),Ze=i(S,"TH",{align:!0});var Sn=o(Ze);Fa=l(Sn,"Description"),Sn.forEach(s),za=f(S),et=i(S,"TH",{align:!0});var In=o(et);Ya=l(In,"Code Example"),In.forEach(s),Ka=f(S),tt=i(S,"TH",{align:!0});var Cn=o(tt);Qa=l(Cn,"Colab"),Cn.forEach(s),Ja=f(S),st=i(S,"TH",{align:!0});var An=o(st);Xa=l(An,"Author"),An.forEach(s),S.forEach(s),xn.forEach(s),Za=f(ya),v=i(ya,"TBODY",{});var x=o(v);y=i(x,"TR",{});var I=o(y);at=i(I,"TD",{align:!0});var Ln=o(at);ei=l(Ln,"CLIP Guided Stable Diffusion"),Ln.forEach(s),ti=f(I),it=i(I,"TD",{align:!0});var Nn=o(it);si=l(Nn,"Doing CLIP guidance for text to image generation with Stable Diffusion"),Nn.forEach(s),ai=f(I),ot=i(I,"TD",{align:!0});var On=o(ot);nt=i(On,"A",{href:!0});var Gn=o(nt);ii=l(Gn,"CLIP Guided Stable Diffusion"),Gn.forEach(s),On.forEach(s),oi=f(I),rt=i(I,"TD",{align:!0});var Bn=o(rt);be=i(Bn,"A",{href:!0,rel:!0});var Rn=o(be);lt=i(Rn,"IMG",{src:!0,alt:!0}),Rn.forEach(s),Bn.forEach(s),ni=f(I),pt=i(I,"TD",{align:!0});var Mn=o(pt);ve=i(Mn,"A",{href:!0,rel:!0});var Vn=o(ve);ri=l(Vn,"Suraj Patil"),Vn.forEach(s),Mn.forEach(s),I.forEach(s),li=f(x),E=i(x,"TR",{});var C=o(E);ft=i(C,"TD",{align:!0});var Un=o(ft);pi=l(Un,"One Step U-Net (Dummy)"),Un.forEach(s),fi=f(C),ee=i(C,"TD",{align:!0});var Ea=o(ee);ui=l(Ea,"Example showcasing of how to use Community Pipelines (see "),we=i(Ea,"A",{href:!0,rel:!0});var Wn=o(we);hi=l(Wn,"https://github.com/huggingface/diffusers/issues/841"),Wn.forEach(s),di=l(Ea,")"),Ea.forEach(s),mi=f(C),ut=i(C,"TD",{align:!0});var Hn=o(ut);ht=i(Hn,"A",{href:!0});var Fn=o(ht);ci=l(Fn,"One Step U-Net"),Fn.forEach(s),Hn.forEach(s),gi=f(C),dt=i(C,"TD",{align:!0});var zn=o(dt);_i=l(zn,"-"),zn.forEach(s),bi=f(C),mt=i(C,"TD",{align:!0});var Yn=o(mt);ye=i(Yn,"A",{href:!0,rel:!0});var Kn=o(ye);vi=l(Kn,"Patrick von Platen"),Kn.forEach(s),Yn.forEach(s),C.forEach(s),wi=f(x),j=i(x,"TR",{});var A=o(j);ct=i(A,"TD",{align:!0});var Qn=o(ct);yi=l(Qn,"Stable Diffusion Interpolation"),Qn.forEach(s),Ei=f(A),gt=i(A,"TD",{align:!0});var Jn=o(gt);ji=l(Jn,"Interpolate the latent space of Stable Diffusion between different prompts/seeds"),Jn.forEach(s),ki=f(A),_t=i(A,"TD",{align:!0});var Xn=o(_t);bt=i(Xn,"A",{href:!0});var Zn=o(bt);qi=l(Zn,"Stable Diffusion Interpolation"),Zn.forEach(s),Xn.forEach(s),Pi=f(A),vt=i(A,"TD",{align:!0});var er=o(vt);$i=l(er,"-"),er.forEach(s),Di=f(A),wt=i(A,"TD",{align:!0});var tr=o(wt);Ee=i(tr,"A",{href:!0,rel:!0});var sr=o(Ee);xi=l(sr,"Nate Raw"),sr.forEach(s),tr.forEach(s),A.forEach(s),Ti=f(x),k=i(x,"TR",{});var L=o(k);yt=i(L,"TD",{align:!0});var ar=o(yt);Si=l(ar,"Stable Diffusion Mega"),ar.forEach(s),Ii=f(L),$=i(L,"TD",{align:!0});var he=o($);as=i(he,"STRONG",{});var ir=o(as);Ci=l(ir,"One"),ir.forEach(s),Ai=l(he," Stable Diffusion Pipeline with all functionalities of "),je=i(he,"A",{href:!0,rel:!0});var or=o(je);Li=l(or,"Text2Image"),or.forEach(s),Ni=l(he,", "),ke=i(he,"A",{href:!0,rel:!0});var nr=o(ke);Oi=l(nr,"Image2Image"),nr.forEach(s),Gi=l(he," and "),qe=i(he,"A",{href:!0,rel:!0});var rr=o(qe);Bi=l(rr,"Inpainting"),rr.forEach(s),he.forEach(s),Ri=f(L),Et=i(L,"TD",{align:!0});var lr=o(Et);jt=i(lr,"A",{href:!0});var pr=o(jt);Mi=l(pr,"Stable Diffusion Mega"),pr.forEach(s),lr.forEach(s),Vi=f(L),kt=i(L,"TD",{align:!0});var fr=o(kt);Ui=l(fr,"-"),fr.forEach(s),Wi=f(L),qt=i(L,"TD",{align:!0});var ur=o(qt);Pe=i(ur,"A",{href:!0,rel:!0});var hr=o(Pe);Hi=l(hr,"Patrick von Platen"),hr.forEach(s),ur.forEach(s),L.forEach(s),Fi=f(x),q=i(x,"TR",{});var N=o(q);Pt=i(N,"TD",{align:!0});var dr=o(Pt);zi=l(dr,"Long Prompt Weighting Stable Diffusion"),dr.forEach(s),Yi=f(N),$e=i(N,"TD",{align:!0});var mn=o($e);is=i(mn,"STRONG",{});var mr=o(is);Ki=l(mr,"One"),mr.forEach(s),Qi=l(mn," Stable Diffusion Pipeline without tokens length limit, and support parsing weighting in prompt."),mn.forEach(s),Ji=f(N),$t=i(N,"TD",{align:!0});var cr=o($t);Dt=i(cr,"A",{href:!0});var gr=o(Dt);Xi=l(gr,"Long Prompt Weighting Stable Diffusion"),gr.forEach(s),cr.forEach(s),Zi=f(N),xt=i(N,"TD",{align:!0});var _r=o(xt);eo=l(_r,"-"),_r.forEach(s),to=f(N),Tt=i(N,"TD",{align:!0});var br=o(Tt);De=i(br,"A",{href:!0,rel:!0});var vr=o(De);so=l(vr,"SkyTNT"),vr.forEach(s),br.forEach(s),N.forEach(s),ao=f(x),P=i(x,"TR",{});var O=o(P);St=i(O,"TD",{align:!0});var wr=o(St);io=l(wr,"Speech to Image"),wr.forEach(s),oo=f(O),It=i(O,"TD",{align:!0});var yr=o(It);no=l(yr,"Using automatic-speech-recognition to transcribe text and Stable Diffusion to generate images"),yr.forEach(s),ro=f(O),Ct=i(O,"TD",{align:!0});var Er=o(Ct);At=i(Er,"A",{href:!0});var jr=o(At);lo=l(jr,"Speech to Image"),jr.forEach(s),Er.forEach(s),po=f(O),Lt=i(O,"TD",{align:!0});var kr=o(Lt);fo=l(kr,"-"),kr.forEach(s),uo=f(O),Nt=i(O,"TD",{align:!0});var qr=o(Nt);xe=i(qr,"A",{href:!0,rel:!0});var Pr=o(xe);ho=l(Pr,"Mikail Duzenli"),Pr.forEach(s),qr.forEach(s),O.forEach(s),x.forEach(s),ya.forEach(s),Gs=f(e),D=i(e,"P",{});var de=o(D);mo=l(de,"To load a custom pipeline you just need to pass the "),os=i(de,"CODE",{});var $r=o(os);co=l($r,"custom_pipeline"),$r.forEach(s),go=l(de," argument to "),ns=i(de,"CODE",{});var Dr=o(ns);_o=l(Dr,"DiffusionPipeline"),Dr.forEach(s),bo=l(de,", as one of the files in "),rs=i(de,"CODE",{});var xr=o(rs);vo=l(xr,"diffusers/examples/community"),xr.forEach(s),wo=l(de,". Feel free to send a PR with your own pipelines, we will merge them quickly."),de.forEach(s),Bs=f(e),m(Te.$$.fragment,e),Rs=f(e),V=i(e,"H2",{class:!0});var ja=o(V);te=i(ja,"A",{id:!0,class:!0,href:!0});var Tr=o(te);ls=i(Tr,"SPAN",{});var Sr=o(ls);m(Se.$$.fragment,Sr),Sr.forEach(s),Tr.forEach(s),yo=f(ja),ps=i(ja,"SPAN",{});var Ir=o(ps);Eo=l(Ir,"Example usages"),Ir.forEach(s),ja.forEach(s),Ms=f(e),U=i(e,"H3",{class:!0});var ka=o(U);se=i(ka,"A",{id:!0,class:!0,href:!0});var Cr=o(se);fs=i(Cr,"SPAN",{});var Ar=o(fs);m(Ie.$$.fragment,Ar),Ar.forEach(s),Cr.forEach(s),jo=f(ka),us=i(ka,"SPAN",{});var Lr=o(us);ko=l(Lr,"CLIP Guided Stable Diffusion"),Lr.forEach(s),ka.forEach(s),Vs=f(e),Ot=i(e,"P",{});var Nr=o(Ot);qo=l(Nr,`CLIP guided stable diffusion can help to generate more realistic images
by guiding stable diffusion at every denoising step with an additional CLIP model.`),Nr.forEach(s),Us=f(e),Gt=i(e,"P",{});var Or=o(Gt);Po=l(Or,"The following code requires roughly 12GB of GPU RAM."),Or.forEach(s),Ws=f(e),m(Ce.$$.fragment,e),Hs=f(e),ae=i(e,"P",{});var qa=o(ae);$o=l(qa,"The "),hs=i(qa,"CODE",{});var Gr=o(hs);Do=l(Gr,"images"),Gr.forEach(s),xo=l(qa,` list contains a list of PIL images that can be saved locally or displayed directly in a google colab.
Generated images tend to be of higher qualtiy than natively using stable diffusion. E.g. the above script generates the following images:`),qa.forEach(s),Fs=f(e),Ae=i(e,"P",{});var cn=o(Ae);Bt=i(cn,"IMG",{src:!0,alt:!0}),To=l(cn,"."),cn.forEach(s),zs=f(e),W=i(e,"H3",{class:!0});var Pa=o(W);ie=i(Pa,"A",{id:!0,class:!0,href:!0});var Br=o(ie);ds=i(Br,"SPAN",{});var Rr=o(ds);m(Le.$$.fragment,Rr),Rr.forEach(s),Br.forEach(s),So=f(Pa),ms=i(Pa,"SPAN",{});var Mr=o(ms);Io=l(Mr,"One Step Unet"),Mr.forEach(s),Pa.forEach(s),Ys=f(e),Rt=i(e,"P",{});var Vr=o(Rt);Co=l(Vr,"The dummy \u201Cone-step-unet\u201D can be run as follows:"),Vr.forEach(s),Ks=f(e),m(Ne.$$.fragment,e),Qs=f(e),H=i(e,"P",{});var Cs=o(H);cs=i(Cs,"STRONG",{});var Ur=o(cs);Ao=l(Ur,"Note"),Ur.forEach(s),Lo=l(Cs,": This community pipeline is not useful as a feature, but rather just serves as an example of how community pipelines can be added (see "),Oe=i(Cs,"A",{href:!0,rel:!0});var Wr=o(Oe);No=l(Wr,"https://github.com/huggingface/diffusers/issues/841"),Wr.forEach(s),Oo=l(Cs,")."),Cs.forEach(s),Js=f(e),F=i(e,"H3",{class:!0});var $a=o(F);oe=i($a,"A",{id:!0,class:!0,href:!0});var Hr=o(oe);gs=i(Hr,"SPAN",{});var Fr=o(gs);m(Ge.$$.fragment,Fr),Fr.forEach(s),Hr.forEach(s),Go=f($a),_s=i($a,"SPAN",{});var zr=o(_s);Bo=l(zr,"Stable Diffusion Interpolation"),zr.forEach(s),$a.forEach(s),Xs=f(e),Mt=i(e,"P",{});var Yr=o(Mt);Ro=l(Yr,"The following code can be run on a GPU of at least 8GB VRAM and should take approximately 5 minutes."),Yr.forEach(s),Zs=f(e),m(Be.$$.fragment,e),ea=f(e),T=i(e,"P",{});var Qt=o(T);Mo=l(Qt,"The output of the "),bs=i(Qt,"CODE",{});var Kr=o(bs);Vo=l(Kr,"walk(...)"),Kr.forEach(s),Uo=l(Qt," function returns a list of images saved under the folder as defined in "),vs=i(Qt,"CODE",{});var Qr=o(vs);Wo=l(Qr,"output_dir"),Qr.forEach(s),Ho=l(Qt,". You can use these images to create videos of stable diffusion."),Qt.forEach(s),ta=f(e),Vt=i(e,"BLOCKQUOTE",{});var Jr=o(Vt);ws=i(Jr,"P",{});var Xr=o(ws);Re=i(Xr,"STRONG",{});var Da=o(Re);Fo=l(Da,"Please have a look at "),Me=i(Da,"A",{href:!0,rel:!0});var Zr=o(Me);zo=l(Zr,"https://github.com/nateraw/stable-diffusion-videos"),Zr.forEach(s),Yo=l(Da," for more in-detail information on how to create videos using stable diffusion as well as more feature-complete functionality."),Da.forEach(s),Xr.forEach(s),Jr.forEach(s),sa=f(e),z=i(e,"H3",{class:!0});var xa=o(z);ne=i(xa,"A",{id:!0,class:!0,href:!0});var el=o(ne);ys=i(el,"SPAN",{});var tl=o(ys);m(Ve.$$.fragment,tl),tl.forEach(s),el.forEach(s),Ko=f(xa),Es=i(xa,"SPAN",{});var sl=o(Es);Qo=l(sl,"Stable Diffusion Mega"),sl.forEach(s),xa.forEach(s),aa=f(e),Ut=i(e,"P",{});var al=o(Ut);Jo=l(al,"The Stable Diffusion Mega Pipeline lets you use the main use cases of the stable diffusion pipeline in a single class."),al.forEach(s),ia=f(e),m(Ue.$$.fragment,e),oa=f(e),Wt=i(e,"P",{});var il=o(Wt);Xo=l(il,"As shown above this one pipeline can run all both \u201Ctext-to-image\u201D, \u201Cimage-to-image\u201D, and \u201Cinpainting\u201D in one pipeline."),il.forEach(s),na=f(e),Y=i(e,"H3",{class:!0});var Ta=o(Y);re=i(Ta,"A",{id:!0,class:!0,href:!0});var ol=o(re);js=i(ol,"SPAN",{});var nl=o(js);m(We.$$.fragment,nl),nl.forEach(s),ol.forEach(s),Zo=f(Ta),ks=i(Ta,"SPAN",{});var rl=o(ks);en=l(rl,"Long Prompt Weighting Stable Diffusion"),rl.forEach(s),Ta.forEach(s),ra=f(e),Ht=i(e,"P",{});var ll=o(Ht);tn=l(ll,`The Pipeline lets you input prompt without 77 token length limit. And you can increase words weighting by using \u201D()\u201D or decrease words weighting by using \u201D[]\u201D
The Pipeline also lets you use the main use cases of the stable diffusion pipeline in a single class.`),ll.forEach(s),la=f(e),K=i(e,"H4",{class:!0});var Sa=o(K);le=i(Sa,"A",{id:!0,class:!0,href:!0});var pl=o(le);qs=i(pl,"SPAN",{});var fl=o(qs);m(He.$$.fragment,fl),fl.forEach(s),pl.forEach(s),sn=f(Sa),Ps=i(Sa,"SPAN",{});var ul=o(Ps);an=l(ul,"pytorch"),ul.forEach(s),Sa.forEach(s),pa=f(e),m(Fe.$$.fragment,e),fa=f(e),Q=i(e,"H4",{class:!0});var Ia=o(Q);pe=i(Ia,"A",{id:!0,class:!0,href:!0});var hl=o(pe);$s=i(hl,"SPAN",{});var dl=o($s);m(ze.$$.fragment,dl),dl.forEach(s),hl.forEach(s),on=f(Ia),Ds=i(Ia,"SPAN",{});var ml=o(Ds);nn=l(ml,"onnxruntime"),ml.forEach(s),Ia.forEach(s),ua=f(e),m(Ye.$$.fragment,e),ha=f(e),fe=i(e,"P",{});var Ca=o(fe);rn=l(Ca,"if you see "),xs=i(Ca,"CODE",{});var cl=o(xs);ln=l(cl,"Token indices sequence length is longer than the specified maximum sequence length for this model ( *** > 77 ) . Running this sequence through the model will result in indexing errors"),cl.forEach(s),pn=l(Ca,". Do not worry, it is normal."),Ca.forEach(s),da=f(e),J=i(e,"H3",{class:!0});var Aa=o(J);ue=i(Aa,"A",{id:!0,class:!0,href:!0});var gl=o(ue);Ts=i(gl,"SPAN",{});var _l=o(Ts);m(Ke.$$.fragment,_l),_l.forEach(s),gl.forEach(s),fn=f(Aa),Ss=i(Aa,"SPAN",{});var bl=o(Ss);un=l(bl,"Speech to Image"),bl.forEach(s),Aa.forEach(s),ma=f(e),Ft=i(e,"P",{});var vl=o(Ft);hn=l(vl,"The following code can generate an image from an audio sample using pre-trained OpenAI whisper-small and Stable Diffusion."),vl.forEach(s),ca=f(e),m(Qe.$$.fragment,e),ga=f(e),zt=i(e,"P",{});var wl=o(zt);dn=l(wl,"This example produces the following image:"),wl.forEach(s),_a=f(e),Yt=i(e,"P",{});var yl=o(Yt);Kt=i(yl,"IMG",{src:!0,alt:!0}),yl.forEach(s),this.h()},h(){n(B,"name","hf:doc:metadata"),n(B,"content",JSON.stringify(xl)),n(X,"id","custom-pipelines"),n(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(X,"href","#custom-pipelines"),n(R,"class","relative group"),n(_e,"href","https://github.com/huggingface/diffusers/issues/841"),n(_e,"rel","nofollow"),n(Xe,"align","left"),n(Ze,"align","left"),n(et,"align","left"),n(tt,"align","left"),n(st,"align","right"),n(at,"align","left"),n(it,"align","left"),n(nt,"href","#clip-guided-stable-diffusion"),n(ot,"align","left"),gn(lt.src,bn="https://colab.research.google.com/assets/colab-badge.svg")||n(lt,"src",bn),n(lt,"alt","Open In Colab"),n(be,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/diffusers/CLIP_Guided_Stable_diffusion_with_diffusers.ipynb"),n(be,"rel","nofollow"),n(rt,"align","left"),n(ve,"href","https://github.com/patil-suraj/"),n(ve,"rel","nofollow"),n(pt,"align","right"),n(ft,"align","left"),n(we,"href","https://github.com/huggingface/diffusers/issues/841"),n(we,"rel","nofollow"),n(ee,"align","left"),n(ht,"href","#one-step-unet"),n(ut,"align","left"),n(dt,"align","left"),n(ye,"href","https://github.com/patrickvonplaten/"),n(ye,"rel","nofollow"),n(mt,"align","right"),n(ct,"align","left"),n(gt,"align","left"),n(bt,"href","#stable-diffusion-interpolation"),n(_t,"align","left"),n(vt,"align","left"),n(Ee,"href","https://github.com/nateraw/"),n(Ee,"rel","nofollow"),n(wt,"align","right"),n(yt,"align","left"),n(je,"href","https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/stable_diffusion/pipeline_stable_diffusion.py"),n(je,"rel","nofollow"),n(ke,"href","https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/stable_diffusion/pipeline_stable_diffusion_img2img.py"),n(ke,"rel","nofollow"),n(qe,"href","https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/stable_diffusion/pipeline_stable_diffusion_inpaint.py"),n(qe,"rel","nofollow"),n($,"align","left"),n(jt,"href","#stable-diffusion-mega"),n(Et,"align","left"),n(kt,"align","left"),n(Pe,"href","https://github.com/patrickvonplaten/"),n(Pe,"rel","nofollow"),n(qt,"align","right"),n(Pt,"align","left"),n($e,"align","left"),n(Dt,"href","#long-prompt-weighting-stable-diffusion"),n($t,"align","left"),n(xt,"align","left"),n(De,"href","https://github.com/SkyTNT"),n(De,"rel","nofollow"),n(Tt,"align","right"),n(St,"align","left"),n(It,"align","left"),n(At,"href","#speech-to-image"),n(Ct,"align","left"),n(Lt,"align","left"),n(xe,"href","https://github.com/MikailINTech"),n(xe,"rel","nofollow"),n(Nt,"align","right"),n(te,"id","example-usages"),n(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(te,"href","#example-usages"),n(V,"class","relative group"),n(se,"id","clip-guided-stable-diffusion"),n(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(se,"href","#clip-guided-stable-diffusion"),n(U,"class","relative group"),gn(Bt.src,vn="https://huggingface.co/datasets/patrickvonplaten/images/resolve/main/clip_guidance/merged_clip_guidance.jpg")||n(Bt,"src",vn),n(Bt,"alt","clip_guidance"),n(ie,"id","one-step-unet"),n(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(ie,"href","#one-step-unet"),n(W,"class","relative group"),n(Oe,"href","https://github.com/huggingface/diffusers/issues/841"),n(Oe,"rel","nofollow"),n(oe,"id","stable-diffusion-interpolation"),n(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(oe,"href","#stable-diffusion-interpolation"),n(F,"class","relative group"),n(Me,"href","https://github.com/nateraw/stable-diffusion-videos"),n(Me,"rel","nofollow"),n(ne,"id","stable-diffusion-mega"),n(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(ne,"href","#stable-diffusion-mega"),n(z,"class","relative group"),n(re,"id","long-prompt-weighting-stable-diffusion"),n(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(re,"href","#long-prompt-weighting-stable-diffusion"),n(Y,"class","relative group"),n(le,"id","pytorch"),n(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(le,"href","#pytorch"),n(K,"class","relative group"),n(pe,"id","onnxruntime"),n(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(pe,"href","#onnxruntime"),n(Q,"class","relative group"),n(ue,"id","speech-to-image"),n(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(ue,"href","#speech-to-image"),n(J,"class","relative group"),gn(Kt.src,wn="https://user-images.githubusercontent.com/45072645/196901736-77d9c6fc-63ee-4072-90b0-dc8b903d63e3.png")||n(Kt,"src",wn),n(Kt,"alt","image")},m(e,u){t(document.head,B),h(e,As,u),h(e,R,u),t(R,X),t(X,Jt),c(ce,Jt,null),t(R,La),t(R,Xt),t(Xt,Na),h(e,Ls,u),h(e,Je,u),t(Je,Zt),t(Zt,ge),t(ge,Oa),t(ge,_e),t(_e,Ga),t(ge,Ba),h(e,Ns,u),h(e,M,u),t(M,es),t(es,Ra),t(M,Ma),t(M,ts),t(ts,Va),t(M,Ua),h(e,Os,u),h(e,Z,u),t(Z,ss),t(ss,w),t(w,Xe),t(Xe,Wa),t(w,Ha),t(w,Ze),t(Ze,Fa),t(w,za),t(w,et),t(et,Ya),t(w,Ka),t(w,tt),t(tt,Qa),t(w,Ja),t(w,st),t(st,Xa),t(Z,Za),t(Z,v),t(v,y),t(y,at),t(at,ei),t(y,ti),t(y,it),t(it,si),t(y,ai),t(y,ot),t(ot,nt),t(nt,ii),t(y,oi),t(y,rt),t(rt,be),t(be,lt),t(y,ni),t(y,pt),t(pt,ve),t(ve,ri),t(v,li),t(v,E),t(E,ft),t(ft,pi),t(E,fi),t(E,ee),t(ee,ui),t(ee,we),t(we,hi),t(ee,di),t(E,mi),t(E,ut),t(ut,ht),t(ht,ci),t(E,gi),t(E,dt),t(dt,_i),t(E,bi),t(E,mt),t(mt,ye),t(ye,vi),t(v,wi),t(v,j),t(j,ct),t(ct,yi),t(j,Ei),t(j,gt),t(gt,ji),t(j,ki),t(j,_t),t(_t,bt),t(bt,qi),t(j,Pi),t(j,vt),t(vt,$i),t(j,Di),t(j,wt),t(wt,Ee),t(Ee,xi),t(v,Ti),t(v,k),t(k,yt),t(yt,Si),t(k,Ii),t(k,$),t($,as),t(as,Ci),t($,Ai),t($,je),t(je,Li),t($,Ni),t($,ke),t(ke,Oi),t($,Gi),t($,qe),t(qe,Bi),t(k,Ri),t(k,Et),t(Et,jt),t(jt,Mi),t(k,Vi),t(k,kt),t(kt,Ui),t(k,Wi),t(k,qt),t(qt,Pe),t(Pe,Hi),t(v,Fi),t(v,q),t(q,Pt),t(Pt,zi),t(q,Yi),t(q,$e),t($e,is),t(is,Ki),t($e,Qi),t(q,Ji),t(q,$t),t($t,Dt),t(Dt,Xi),t(q,Zi),t(q,xt),t(xt,eo),t(q,to),t(q,Tt),t(Tt,De),t(De,so),t(v,ao),t(v,P),t(P,St),t(St,io),t(P,oo),t(P,It),t(It,no),t(P,ro),t(P,Ct),t(Ct,At),t(At,lo),t(P,po),t(P,Lt),t(Lt,fo),t(P,uo),t(P,Nt),t(Nt,xe),t(xe,ho),h(e,Gs,u),h(e,D,u),t(D,mo),t(D,os),t(os,co),t(D,go),t(D,ns),t(ns,_o),t(D,bo),t(D,rs),t(rs,vo),t(D,wo),h(e,Bs,u),c(Te,e,u),h(e,Rs,u),h(e,V,u),t(V,te),t(te,ls),c(Se,ls,null),t(V,yo),t(V,ps),t(ps,Eo),h(e,Ms,u),h(e,U,u),t(U,se),t(se,fs),c(Ie,fs,null),t(U,jo),t(U,us),t(us,ko),h(e,Vs,u),h(e,Ot,u),t(Ot,qo),h(e,Us,u),h(e,Gt,u),t(Gt,Po),h(e,Ws,u),c(Ce,e,u),h(e,Hs,u),h(e,ae,u),t(ae,$o),t(ae,hs),t(hs,Do),t(ae,xo),h(e,Fs,u),h(e,Ae,u),t(Ae,Bt),t(Ae,To),h(e,zs,u),h(e,W,u),t(W,ie),t(ie,ds),c(Le,ds,null),t(W,So),t(W,ms),t(ms,Io),h(e,Ys,u),h(e,Rt,u),t(Rt,Co),h(e,Ks,u),c(Ne,e,u),h(e,Qs,u),h(e,H,u),t(H,cs),t(cs,Ao),t(H,Lo),t(H,Oe),t(Oe,No),t(H,Oo),h(e,Js,u),h(e,F,u),t(F,oe),t(oe,gs),c(Ge,gs,null),t(F,Go),t(F,_s),t(_s,Bo),h(e,Xs,u),h(e,Mt,u),t(Mt,Ro),h(e,Zs,u),c(Be,e,u),h(e,ea,u),h(e,T,u),t(T,Mo),t(T,bs),t(bs,Vo),t(T,Uo),t(T,vs),t(vs,Wo),t(T,Ho),h(e,ta,u),h(e,Vt,u),t(Vt,ws),t(ws,Re),t(Re,Fo),t(Re,Me),t(Me,zo),t(Re,Yo),h(e,sa,u),h(e,z,u),t(z,ne),t(ne,ys),c(Ve,ys,null),t(z,Ko),t(z,Es),t(Es,Qo),h(e,aa,u),h(e,Ut,u),t(Ut,Jo),h(e,ia,u),c(Ue,e,u),h(e,oa,u),h(e,Wt,u),t(Wt,Xo),h(e,na,u),h(e,Y,u),t(Y,re),t(re,js),c(We,js,null),t(Y,Zo),t(Y,ks),t(ks,en),h(e,ra,u),h(e,Ht,u),t(Ht,tn),h(e,la,u),h(e,K,u),t(K,le),t(le,qs),c(He,qs,null),t(K,sn),t(K,Ps),t(Ps,an),h(e,pa,u),c(Fe,e,u),h(e,fa,u),h(e,Q,u),t(Q,pe),t(pe,$s),c(ze,$s,null),t(Q,on),t(Q,Ds),t(Ds,nn),h(e,ua,u),c(Ye,e,u),h(e,ha,u),h(e,fe,u),t(fe,rn),t(fe,xs),t(xs,ln),t(fe,pn),h(e,da,u),h(e,J,u),t(J,ue),t(ue,Ts),c(Ke,Ts,null),t(J,fn),t(J,Ss),t(Ss,un),h(e,ma,u),h(e,Ft,u),t(Ft,hn),h(e,ca,u),c(Qe,e,u),h(e,ga,u),h(e,zt,u),t(zt,dn),h(e,_a,u),h(e,Yt,u),t(Yt,Kt),ba=!0},p:Pl,i(e){ba||(g(ce.$$.fragment,e),g(Te.$$.fragment,e),g(Se.$$.fragment,e),g(Ie.$$.fragment,e),g(Ce.$$.fragment,e),g(Le.$$.fragment,e),g(Ne.$$.fragment,e),g(Ge.$$.fragment,e),g(Be.$$.fragment,e),g(Ve.$$.fragment,e),g(Ue.$$.fragment,e),g(We.$$.fragment,e),g(He.$$.fragment,e),g(Fe.$$.fragment,e),g(ze.$$.fragment,e),g(Ye.$$.fragment,e),g(Ke.$$.fragment,e),g(Qe.$$.fragment,e),ba=!0)},o(e){_(ce.$$.fragment,e),_(Te.$$.fragment,e),_(Se.$$.fragment,e),_(Ie.$$.fragment,e),_(Ce.$$.fragment,e),_(Le.$$.fragment,e),_(Ne.$$.fragment,e),_(Ge.$$.fragment,e),_(Be.$$.fragment,e),_(Ve.$$.fragment,e),_(Ue.$$.fragment,e),_(We.$$.fragment,e),_(He.$$.fragment,e),_(Fe.$$.fragment,e),_(ze.$$.fragment,e),_(Ye.$$.fragment,e),_(Ke.$$.fragment,e),_(Qe.$$.fragment,e),ba=!1},d(e){s(B),e&&s(As),e&&s(R),b(ce),e&&s(Ls),e&&s(Je),e&&s(Ns),e&&s(M),e&&s(Os),e&&s(Z),e&&s(Gs),e&&s(D),e&&s(Bs),b(Te,e),e&&s(Rs),e&&s(V),b(Se),e&&s(Ms),e&&s(U),b(Ie),e&&s(Vs),e&&s(Ot),e&&s(Us),e&&s(Gt),e&&s(Ws),b(Ce,e),e&&s(Hs),e&&s(ae),e&&s(Fs),e&&s(Ae),e&&s(zs),e&&s(W),b(Le),e&&s(Ys),e&&s(Rt),e&&s(Ks),b(Ne,e),e&&s(Qs),e&&s(H),e&&s(Js),e&&s(F),b(Ge),e&&s(Xs),e&&s(Mt),e&&s(Zs),b(Be,e),e&&s(ea),e&&s(T),e&&s(ta),e&&s(Vt),e&&s(sa),e&&s(z),b(Ve),e&&s(aa),e&&s(Ut),e&&s(ia),b(Ue,e),e&&s(oa),e&&s(Wt),e&&s(na),e&&s(Y),b(We),e&&s(ra),e&&s(Ht),e&&s(la),e&&s(K),b(He),e&&s(pa),b(Fe,e),e&&s(fa),e&&s(Q),b(ze),e&&s(ua),b(Ye,e),e&&s(ha),e&&s(fe),e&&s(da),e&&s(J),b(Ke),e&&s(ma),e&&s(Ft),e&&s(ca),b(Qe,e),e&&s(ga),e&&s(zt),e&&s(_a),e&&s(Yt)}}}const xl={local:"custom-pipelines",sections:[{local:"example-usages",sections:[{local:"clip-guided-stable-diffusion",title:"CLIP Guided Stable Diffusion"},{local:"one-step-unet",title:"One Step Unet"},{local:"stable-diffusion-interpolation",title:"Stable Diffusion Interpolation"},{local:"stable-diffusion-mega",title:"Stable Diffusion Mega"},{local:"long-prompt-weighting-stable-diffusion",sections:[{local:"pytorch",title:"pytorch"},{local:"onnxruntime",title:"onnxruntime"}],title:"Long Prompt Weighting Stable Diffusion"},{local:"speech-to-image",title:"Speech to Image"}],title:"Example usages"}],title:"Custom Pipelines"};function Tl(_n){return $l(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Al extends El{constructor(B){super();jl(this,B,Tl,Dl,kl,{})}}export{Al as default,xl as metadata};
