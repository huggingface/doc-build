import{S as Ln,i as Gn,s as On,e as i,k as f,w as W,t as r,M as Nn,c as t,d as n,m as d,a as o,x as V,h as l,b as p,G as s,g as c,y as H,L as zn,q as R,o as K,B as J,v as Un}from"../../../chunks/vendor-hf-doc-builder.js";import{D as Mn}from"../../../chunks/Docstring-hf-doc-builder.js";import{C as Bn}from"../../../chunks/CodeBlock-hf-doc-builder.js";import{I as dn}from"../../../chunks/IconCopyLink-hf-doc-builder.js";function Fn(un){let m,re,h,y,Q,x,je,X,$e,le,g,v,Y,k,qe,Z,Se,ce,b,Ae,I,Te,Me,pe,O,Le,fe,N,ee,Ge,de,E,ne,Oe,Ne,ue,w,j,ze,z,Ue,Be,Fe,$,We,U,Ve,He,me,q,se,Re,Ke,he,S,Je,B,Qe,ge,A,_e,_,D,ie,T,Xe,te,Ye,ye,u,M,Ze,oe,en,nn,L,sn,F,tn,on,an,C,G,rn,ae,ln,ve;return x=new dn({}),k=new dn({}),A=new Bn({props:{code:`import requests
import torch
from PIL import Image
from io import BytesIO

from diffusers import CycleDiffusionPipeline, DDIMScheduler

# load the pipeline
# make sure you're logged in with \`huggingface-cli login\`
model_id_or_path = "CompVis/stable-diffusion-v1-4"
scheduler = DDIMScheduler.from_config(model_id_or_path, subfolder="scheduler")
pipe = CycleDiffusionPipeline.from_pretrained(model_id_or_path, scheduler=scheduler).to("cuda")

# let's download an initial image
url = "https://raw.githubusercontent.com/ChenWu98/cycle-diffusion/main/data/dalle2/An%20astronaut%20riding%20a%20horse.png"
response = requests.get(url)
init_image = Image.open(BytesIO(response.content)).convert("RGB")
init_image = init_image.resize((512, 512))
init_image.save("horse.png")

# let's specify a prompt
source_prompt = "An astronaut riding a horse"
prompt = "An astronaut riding an elephant"

# call the pipeline
image = pipe(
    prompt=prompt,
    source_prompt=source_prompt,
    init_image=init_image,
    num_inference_steps=100,
    eta=0.1,
    strength=0.8,
    guidance_scale=2,
    source_guidance_scale=1,
).images[0]

image.save("horse_to_elephant.png")

# let's try another example
# See more samples at the original repo: https://github.com/ChenWu98/cycle-diffusion
url = "https://raw.githubusercontent.com/ChenWu98/cycle-diffusion/main/data/dalle2/A%20black%20colored%20car.png"
response = requests.get(url)
init_image = Image.open(BytesIO(response.content)).convert("RGB")
init_image = init_image.resize((512, 512))
init_image.save("black.png")

source_prompt = "A black colored car"
prompt = "A blue colored car"

# call the pipeline
torch.manual_seed(0)
image = pipe(
    prompt=prompt,
    source_prompt=source_prompt,
    init_image=init_image,
    num_inference_steps=100,
    eta=0.1,
    strength=0.85,
    guidance_scale=3,
    source_guidance_scale=1,
).images[0]

image.save("black_to_blue.png")`,highlighted:`<span class="hljs-keyword">import</span> requests
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-keyword">from</span> io <span class="hljs-keyword">import</span> BytesIO

<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> CycleDiffusionPipeline, DDIMScheduler

<span class="hljs-comment"># load the pipeline</span>
<span class="hljs-comment"># make sure you&#x27;re logged in with \`huggingface-cli login\`</span>
model_id_or_path = <span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>
scheduler = DDIMScheduler.from_config(model_id_or_path, subfolder=<span class="hljs-string">&quot;scheduler&quot;</span>)
pipe = CycleDiffusionPipeline.from_pretrained(model_id_or_path, scheduler=scheduler).to(<span class="hljs-string">&quot;cuda&quot;</span>)

<span class="hljs-comment"># let&#x27;s download an initial image</span>
url = <span class="hljs-string">&quot;https://raw.githubusercontent.com/ChenWu98/cycle-diffusion/main/data/dalle2/An%20astronaut%20riding%20a%20horse.png&quot;</span>
response = requests.get(url)
init_image = Image.<span class="hljs-built_in">open</span>(BytesIO(response.content)).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
init_image = init_image.resize((<span class="hljs-number">512</span>, <span class="hljs-number">512</span>))
init_image.save(<span class="hljs-string">&quot;horse.png&quot;</span>)

<span class="hljs-comment"># let&#x27;s specify a prompt</span>
source_prompt = <span class="hljs-string">&quot;An astronaut riding a horse&quot;</span>
prompt = <span class="hljs-string">&quot;An astronaut riding an elephant&quot;</span>

<span class="hljs-comment"># call the pipeline</span>
image = pipe(
    prompt=prompt,
    source_prompt=source_prompt,
    init_image=init_image,
    num_inference_steps=<span class="hljs-number">100</span>,
    eta=<span class="hljs-number">0.1</span>,
    strength=<span class="hljs-number">0.8</span>,
    guidance_scale=<span class="hljs-number">2</span>,
    source_guidance_scale=<span class="hljs-number">1</span>,
).images[<span class="hljs-number">0</span>]

image.save(<span class="hljs-string">&quot;horse_to_elephant.png&quot;</span>)

<span class="hljs-comment"># let&#x27;s try another example</span>
<span class="hljs-comment"># See more samples at the original repo: https://github.com/ChenWu98/cycle-diffusion</span>
url = <span class="hljs-string">&quot;https://raw.githubusercontent.com/ChenWu98/cycle-diffusion/main/data/dalle2/A%20black%20colored%20car.png&quot;</span>
response = requests.get(url)
init_image = Image.<span class="hljs-built_in">open</span>(BytesIO(response.content)).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
init_image = init_image.resize((<span class="hljs-number">512</span>, <span class="hljs-number">512</span>))
init_image.save(<span class="hljs-string">&quot;black.png&quot;</span>)

source_prompt = <span class="hljs-string">&quot;A black colored car&quot;</span>
prompt = <span class="hljs-string">&quot;A blue colored car&quot;</span>

<span class="hljs-comment"># call the pipeline</span>
torch.manual_seed(<span class="hljs-number">0</span>)
image = pipe(
    prompt=prompt,
    source_prompt=source_prompt,
    init_image=init_image,
    num_inference_steps=<span class="hljs-number">100</span>,
    eta=<span class="hljs-number">0.1</span>,
    strength=<span class="hljs-number">0.85</span>,
    guidance_scale=<span class="hljs-number">3</span>,
    source_guidance_scale=<span class="hljs-number">1</span>,
).images[<span class="hljs-number">0</span>]

image.save(<span class="hljs-string">&quot;black_to_blue.png&quot;</span>)`}}),T=new dn({}),M=new Mn({props:{name:"class diffusers.CycleDiffusionPipeline",anchor:"diffusers.CycleDiffusionPipeline",parameters:[{name:"vae",val:": AutoencoderKL"},{name:"text_encoder",val:": CLIPTextModel"},{name:"tokenizer",val:": CLIPTokenizer"},{name:"unet",val:": UNet2DConditionModel"},{name:"scheduler",val:": DDIMScheduler"},{name:"safety_checker",val:": StableDiffusionSafetyChecker"},{name:"feature_extractor",val:": CLIPImageProcessor"}],parametersDescription:[{anchor:"diffusers.CycleDiffusionPipeline.vae",description:`<strong>vae</strong> (<a href="/docs/diffusers/main/en/api/models#diffusers.AutoencoderKL">AutoencoderKL</a>) &#x2014;
Variational Auto-Encoder (VAE) Model to encode and decode images to and from latent representations.`,name:"vae"},{anchor:"diffusers.CycleDiffusionPipeline.text_encoder",description:`<strong>text_encoder</strong> (<code>CLIPTextModel</code>) &#x2014;
Frozen text-encoder. Stable Diffusion uses the text portion of
<a href="https://huggingface.co/docs/transformers/model_doc/clip#transformers.CLIPTextModel" rel="nofollow">CLIP</a>, specifically
the <a href="https://huggingface.co/openai/clip-vit-large-patch14" rel="nofollow">clip-vit-large-patch14</a> variant.`,name:"text_encoder"},{anchor:"diffusers.CycleDiffusionPipeline.tokenizer",description:`<strong>tokenizer</strong> (<code>CLIPTokenizer</code>) &#x2014;
Tokenizer of class
<a href="https://huggingface.co/docs/transformers/v4.21.0/en/model_doc/clip#transformers.CLIPTokenizer" rel="nofollow">CLIPTokenizer</a>.`,name:"tokenizer"},{anchor:"diffusers.CycleDiffusionPipeline.unet",description:'<strong>unet</strong> (<a href="/docs/diffusers/main/en/api/models#diffusers.UNet2DConditionModel">UNet2DConditionModel</a>) &#x2014; Conditional U-Net architecture to denoise the encoded image latents.',name:"unet"},{anchor:"diffusers.CycleDiffusionPipeline.scheduler",description:`<strong>scheduler</strong> (<a href="/docs/diffusers/main/en/api/schedulers#diffusers.SchedulerMixin">SchedulerMixin</a>) &#x2014;
A scheduler to be used in combination with <code>unet</code> to denoise the encoded image latents. Can be one of
<a href="/docs/diffusers/main/en/api/schedulers#diffusers.DDIMScheduler">DDIMScheduler</a>, <a href="/docs/diffusers/main/en/api/schedulers#diffusers.LMSDiscreteScheduler">LMSDiscreteScheduler</a>, or <a href="/docs/diffusers/main/en/api/schedulers#diffusers.PNDMScheduler">PNDMScheduler</a>.`,name:"scheduler"},{anchor:"diffusers.CycleDiffusionPipeline.safety_checker",description:`<strong>safety_checker</strong> (<code>StableDiffusionSafetyChecker</code>) &#x2014;
Classification module that estimates whether generated images could be considered offensive or harmful.
Please, refer to the <a href="https://huggingface.co/CompVis/stable-diffusion-v1-4" rel="nofollow">model card</a> for details.`,name:"safety_checker"},{anchor:"diffusers.CycleDiffusionPipeline.feature_extractor",description:`<strong>feature_extractor</strong> (<code>CLIPFeatureExtractor</code>) &#x2014;
Model that extracts features from generated images to be used as inputs for the <code>safety_checker</code>.`,name:"feature_extractor"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/stable_diffusion/pipeline_cycle_diffusion.py#L108"}}),G=new Mn({props:{name:"__call__",anchor:"diffusers.CycleDiffusionPipeline.__call__",parameters:[{name:"prompt",val:": typing.Union[str, typing.List[str]]"},{name:"source_prompt",val:": typing.Union[str, typing.List[str]]"},{name:"init_image",val:": typing.Union[torch.FloatTensor, PIL.Image.Image]"},{name:"strength",val:": float = 0.8"},{name:"num_inference_steps",val:": typing.Optional[int] = 50"},{name:"guidance_scale",val:": typing.Optional[float] = 7.5"},{name:"source_guidance_scale",val:": typing.Optional[float] = 1"},{name:"num_images_per_prompt",val:": typing.Optional[int] = 1"},{name:"eta",val:": typing.Optional[float] = 0.1"},{name:"generator",val:": typing.Optional[torch._C.Generator] = None"},{name:"output_type",val:": typing.Optional[str] = 'pil'"},{name:"return_dict",val:": bool = True"},{name:"callback",val:": typing.Union[typing.Callable[[int, int, torch.FloatTensor], NoneType], NoneType] = None"},{name:"callback_steps",val:": typing.Optional[int] = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.CycleDiffusionPipeline.__call__.prompt",description:`<strong>prompt</strong> (<code>str</code> or <code>List[str]</code>) &#x2014;
The prompt or prompts to guide the image generation.`,name:"prompt"},{anchor:"diffusers.CycleDiffusionPipeline.__call__.init_image",description:`<strong>init_image</strong> (<code>torch.FloatTensor</code> or <code>PIL.Image.Image</code>) &#x2014;
<code>Image</code>, or tensor representing an image batch, that will be used as the starting point for the
process.`,name:"init_image"},{anchor:"diffusers.CycleDiffusionPipeline.__call__.strength",description:`<strong>strength</strong> (<code>float</code>, <em>optional</em>, defaults to 0.8) &#x2014;
Conceptually, indicates how much to transform the reference <code>init_image</code>. Must be between 0 and 1.
<code>init_image</code> will be used as a starting point, adding more noise to it the larger the <code>strength</code>. The
number of denoising steps depends on the amount of noise initially added. When <code>strength</code> is 1, added
noise will be maximum and the denoising process will run for the full number of iterations specified in
<code>num_inference_steps</code>. A value of 1, therefore, essentially ignores <code>init_image</code>.`,name:"strength"},{anchor:"diffusers.CycleDiffusionPipeline.__call__.num_inference_steps",description:`<strong>num_inference_steps</strong> (<code>int</code>, <em>optional</em>, defaults to 50) &#x2014;
The number of denoising steps. More denoising steps usually lead to a higher quality image at the
expense of slower inference. This parameter will be modulated by <code>strength</code>.`,name:"num_inference_steps"},{anchor:"diffusers.CycleDiffusionPipeline.__call__.guidance_scale",description:`<strong>guidance_scale</strong> (<code>float</code>, <em>optional</em>, defaults to 7.5) &#x2014;
Guidance scale as defined in <a href="https://arxiv.org/abs/2207.12598" rel="nofollow">Classifier-Free Diffusion Guidance</a>.
<code>guidance_scale</code> is defined as <code>w</code> of equation 2. of <a href="https://arxiv.org/pdf/2205.11487.pdf" rel="nofollow">Imagen
Paper</a>. Guidance scale is enabled by setting <code>guidance_scale &gt; 1</code>. Higher guidance scale encourages to generate images that are closely linked to the text <code>prompt</code>,
usually at the expense of lower image quality.`,name:"guidance_scale"},{anchor:"diffusers.CycleDiffusionPipeline.__call__.source_guidance_scale",description:`<strong>source_guidance_scale</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
Guidance scale for the source prompt. This is useful to control the amount of influence the source
prompt for encoding.`,name:"source_guidance_scale"},{anchor:"diffusers.CycleDiffusionPipeline.__call__.num_images_per_prompt",description:`<strong>num_images_per_prompt</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of images to generate per prompt.`,name:"num_images_per_prompt"},{anchor:"diffusers.CycleDiffusionPipeline.__call__.eta",description:`<strong>eta</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Corresponds to parameter eta (&#x3B7;) in the DDIM paper: <a href="https://arxiv.org/abs/2010.02502" rel="nofollow">https://arxiv.org/abs/2010.02502</a>. Only applies to
<a href="/docs/diffusers/main/en/api/schedulers#diffusers.DDIMScheduler">schedulers.DDIMScheduler</a>, will be ignored for others.`,name:"eta"},{anchor:"diffusers.CycleDiffusionPipeline.__call__.generator",description:`<strong>generator</strong> (<code>torch.Generator</code>, <em>optional</em>) &#x2014;
A <a href="https://pytorch.org/docs/stable/generated/torch.Generator.html" rel="nofollow">torch generator</a> to make generation
deterministic.`,name:"generator"},{anchor:"diffusers.CycleDiffusionPipeline.__call__.output_type",description:`<strong>output_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pil&quot;</code>) &#x2014;
The output format of the generate image. Choose between
<a href="https://pillow.readthedocs.io/en/stable/" rel="nofollow">PIL</a>: <code>PIL.Image.Image</code> or <code>np.array</code>.`,name:"output_type"},{anchor:"diffusers.CycleDiffusionPipeline.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to return a <a href="/docs/diffusers/main/en/api/pipelines/stable_diffusion#diffusers.pipelines.stable_diffusion.StableDiffusionPipelineOutput">StableDiffusionPipelineOutput</a> instead of a
plain tuple.`,name:"return_dict"},{anchor:"diffusers.CycleDiffusionPipeline.__call__.callback",description:`<strong>callback</strong> (<code>Callable</code>, <em>optional</em>) &#x2014;
A function that will be called every <code>callback_steps</code> steps during inference. The function will be
called with the following arguments: <code>callback(step: int, timestep: int, latents: torch.FloatTensor)</code>.`,name:"callback"},{anchor:"diffusers.CycleDiffusionPipeline.__call__.callback_steps",description:`<strong>callback_steps</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The frequency at which the <code>callback</code> function will be called. If not specified, the callback will be
called at every step.`,name:"callback_steps"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/stable_diffusion/pipeline_cycle_diffusion.py#L454",returnDescription:`
<p><a
  href="/docs/diffusers/main/en/api/pipelines/stable_diffusion#diffusers.pipelines.stable_diffusion.StableDiffusionPipelineOutput"
>StableDiffusionPipelineOutput</a> if <code>return_dict</code> is True, otherwise a <code>tuple. When returning a tuple, the first element is a list with the generated images, and the second element is a list of </code>bool<code>s denoting whether the corresponding generated image likely represents "not-safe-for-work" (nsfw) content, according to the </code>safety_checker\`.</p>
`,returnType:`
<p><a
  href="/docs/diffusers/main/en/api/pipelines/stable_diffusion#diffusers.pipelines.stable_diffusion.StableDiffusionPipelineOutput"
>StableDiffusionPipelineOutput</a> or <code>tuple</code></p>
`}}),{c(){m=i("meta"),re=f(),h=i("h1"),y=i("a"),Q=i("span"),W(x.$$.fragment),je=f(),X=i("span"),$e=r("Cycle Diffusion"),le=f(),g=i("h2"),v=i("a"),Y=i("span"),W(k.$$.fragment),qe=f(),Z=i("span"),Se=r("Overview"),ce=f(),b=i("p"),Ae=r("Cycle Diffusion is a Text-Guided Image-to-Image Generation model proposed in "),I=i("a"),Te=r("Unifying Diffusion Models\u2019 Latent Space, with Applications to CycleDiffusion and Guidance"),Me=r(" by Chen Henry Wu, Fernando De la Torre."),pe=f(),O=i("p"),Le=r("The abstract of the paper is the following:"),fe=f(),N=i("p"),ee=i("em"),Ge=r("Diffusion models have achieved unprecedented performance in generative modeling. The commonly-adopted formulation of the latent code of diffusion models is a sequence of gradually denoised samples, as opposed to the simpler (e.g., Gaussian) latent space of GANs, VAEs, and normalizing flows. This paper provides an alternative, Gaussian formulation of the latent space of various diffusion models, as well as an invertible DPM-Encoder that maps images into the latent space. While our formulation is purely based on the definition of diffusion models, we demonstrate several intriguing consequences. (1) Empirically, we observe that a common latent space emerges from two diffusion models trained independently on related domains. In light of this finding, we propose CycleDiffusion, which uses DPM-Encoder for unpaired image-to-image translation. Furthermore, applying CycleDiffusion to text-to-image diffusion models, we show that large-scale text-to-image diffusion models can be used as zero-shot image-to-image editors. (2) One can guide pre-trained diffusion models and GANs by controlling the latent codes in a unified, plug-and-play formulation based on energy-based models. Using the CLIP model and a face recognition model as guidance, we demonstrate that diffusion models have better coverage of low-density sub-populations and individuals than GANs."),de=f(),E=i("p"),ne=i("em"),Oe=r("Tips"),Ne=r(":"),ue=f(),w=i("ul"),j=i("li"),ze=r("The Cycle Diffusion pipeline is fully compatible with any "),z=i("a"),Ue=r("Stable Diffusion"),Be=r(" checkpoints"),Fe=f(),$=i("li"),We=r("Currently Cycle Diffusion only works with the "),U=i("a"),Ve=r("DDIMScheduler"),He=r("."),me=f(),q=i("p"),se=i("em"),Re=r("Example"),Ke=r(":"),he=f(),S=i("p"),Je=r("In the following we should how to best use the "),B=i("a"),Qe=r("CycleDiffusionPipeline"),ge=f(),W(A.$$.fragment),_e=f(),_=i("h2"),D=i("a"),ie=i("span"),W(T.$$.fragment),Xe=f(),te=i("span"),Ye=r("CycleDiffusionPipeline"),ye=f(),u=i("div"),W(M.$$.fragment),Ze=f(),oe=i("p"),en=r("Pipeline for text-guided image to image generation using Stable Diffusion."),nn=f(),L=i("p"),sn=r("This model inherits from "),F=i("a"),tn=r("DiffusionPipeline"),on=r(`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),an=f(),C=i("div"),W(G.$$.fragment),rn=f(),ae=i("p"),ln=r("Function invoked when calling the pipeline for generation."),this.h()},l(e){const a=Nn('[data-svelte="svelte-1phssyn"]',document.head);m=t(a,"META",{name:!0,content:!0}),a.forEach(n),re=d(e),h=t(e,"H1",{class:!0});var be=o(h);y=t(be,"A",{id:!0,class:!0,href:!0});var mn=o(y);Q=t(mn,"SPAN",{});var hn=o(Q);V(x.$$.fragment,hn),hn.forEach(n),mn.forEach(n),je=d(be),X=t(be,"SPAN",{});var gn=o(X);$e=l(gn,"Cycle Diffusion"),gn.forEach(n),be.forEach(n),le=d(e),g=t(e,"H2",{class:!0});var we=o(g);v=t(we,"A",{id:!0,class:!0,href:!0});var _n=o(v);Y=t(_n,"SPAN",{});var yn=o(Y);V(k.$$.fragment,yn),yn.forEach(n),_n.forEach(n),qe=d(we),Z=t(we,"SPAN",{});var vn=o(Z);Se=l(vn,"Overview"),vn.forEach(n),we.forEach(n),ce=d(e),b=t(e,"P",{});var De=o(b);Ae=l(De,"Cycle Diffusion is a Text-Guided Image-to-Image Generation model proposed in "),I=t(De,"A",{href:!0,rel:!0});var bn=o(I);Te=l(bn,"Unifying Diffusion Models\u2019 Latent Space, with Applications to CycleDiffusion and Guidance"),bn.forEach(n),Me=l(De," by Chen Henry Wu, Fernando De la Torre."),De.forEach(n),pe=d(e),O=t(e,"P",{});var wn=o(O);Le=l(wn,"The abstract of the paper is the following:"),wn.forEach(n),fe=d(e),N=t(e,"P",{});var Dn=o(N);ee=t(Dn,"EM",{});var Cn=o(ee);Ge=l(Cn,"Diffusion models have achieved unprecedented performance in generative modeling. The commonly-adopted formulation of the latent code of diffusion models is a sequence of gradually denoised samples, as opposed to the simpler (e.g., Gaussian) latent space of GANs, VAEs, and normalizing flows. This paper provides an alternative, Gaussian formulation of the latent space of various diffusion models, as well as an invertible DPM-Encoder that maps images into the latent space. While our formulation is purely based on the definition of diffusion models, we demonstrate several intriguing consequences. (1) Empirically, we observe that a common latent space emerges from two diffusion models trained independently on related domains. In light of this finding, we propose CycleDiffusion, which uses DPM-Encoder for unpaired image-to-image translation. Furthermore, applying CycleDiffusion to text-to-image diffusion models, we show that large-scale text-to-image diffusion models can be used as zero-shot image-to-image editors. (2) One can guide pre-trained diffusion models and GANs by controlling the latent codes in a unified, plug-and-play formulation based on energy-based models. Using the CLIP model and a face recognition model as guidance, we demonstrate that diffusion models have better coverage of low-density sub-populations and individuals than GANs."),Cn.forEach(n),Dn.forEach(n),de=d(e),E=t(e,"P",{});var cn=o(E);ne=t(cn,"EM",{});var Pn=o(ne);Oe=l(Pn,"Tips"),Pn.forEach(n),Ne=l(cn,":"),cn.forEach(n),ue=d(e),w=t(e,"UL",{});var Ce=o(w);j=t(Ce,"LI",{});var Pe=o(j);ze=l(Pe,"The Cycle Diffusion pipeline is fully compatible with any "),z=t(Pe,"A",{href:!0});var xn=o(z);Ue=l(xn,"Stable Diffusion"),xn.forEach(n),Be=l(Pe," checkpoints"),Pe.forEach(n),Fe=d(Ce),$=t(Ce,"LI",{});var xe=o($);We=l(xe,"Currently Cycle Diffusion only works with the "),U=t(xe,"A",{href:!0});var kn=o(U);Ve=l(kn,"DDIMScheduler"),kn.forEach(n),He=l(xe,"."),xe.forEach(n),Ce.forEach(n),me=d(e),q=t(e,"P",{});var pn=o(q);se=t(pn,"EM",{});var In=o(se);Re=l(In,"Example"),In.forEach(n),Ke=l(pn,":"),pn.forEach(n),he=d(e),S=t(e,"P",{});var fn=o(S);Je=l(fn,"In the following we should how to best use the "),B=t(fn,"A",{href:!0});var En=o(B);Qe=l(En,"CycleDiffusionPipeline"),En.forEach(n),fn.forEach(n),ge=d(e),V(A.$$.fragment,e),_e=d(e),_=t(e,"H2",{class:!0});var ke=o(_);D=t(ke,"A",{id:!0,class:!0,href:!0});var jn=o(D);ie=t(jn,"SPAN",{});var $n=o(ie);V(T.$$.fragment,$n),$n.forEach(n),jn.forEach(n),Xe=d(ke),te=t(ke,"SPAN",{});var qn=o(te);Ye=l(qn,"CycleDiffusionPipeline"),qn.forEach(n),ke.forEach(n),ye=d(e),u=t(e,"DIV",{class:!0});var P=o(u);V(M.$$.fragment,P),Ze=d(P),oe=t(P,"P",{});var Sn=o(oe);en=l(Sn,"Pipeline for text-guided image to image generation using Stable Diffusion."),Sn.forEach(n),nn=d(P),L=t(P,"P",{});var Ie=o(L);sn=l(Ie,"This model inherits from "),F=t(Ie,"A",{href:!0});var An=o(F);tn=l(An,"DiffusionPipeline"),An.forEach(n),on=l(Ie,`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),Ie.forEach(n),an=d(P),C=t(P,"DIV",{class:!0});var Ee=o(C);V(G.$$.fragment,Ee),rn=d(Ee),ae=t(Ee,"P",{});var Tn=o(ae);ln=l(Tn,"Function invoked when calling the pipeline for generation."),Tn.forEach(n),Ee.forEach(n),P.forEach(n),this.h()},h(){p(m,"name","hf:doc:metadata"),p(m,"content",JSON.stringify(Wn)),p(y,"id","cycle-diffusion"),p(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(y,"href","#cycle-diffusion"),p(h,"class","relative group"),p(v,"id","overview"),p(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(v,"href","#overview"),p(g,"class","relative group"),p(I,"href","https://arxiv.org/abs/2210.05559"),p(I,"rel","nofollow"),p(z,"href","./stable_diffusion"),p(U,"href","/docs/diffusers/main/en/api/schedulers#diffusers.DDIMScheduler"),p(B,"href","/docs/diffusers/main/en/api/pipelines/cycle_diffusion#diffusers.CycleDiffusionPipeline"),p(D,"id","diffusers.CycleDiffusionPipeline"),p(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(D,"href","#diffusers.CycleDiffusionPipeline"),p(_,"class","relative group"),p(F,"href","/docs/diffusers/main/en/using-diffusers/loading#diffusers.DiffusionPipeline"),p(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,a){s(document.head,m),c(e,re,a),c(e,h,a),s(h,y),s(y,Q),H(x,Q,null),s(h,je),s(h,X),s(X,$e),c(e,le,a),c(e,g,a),s(g,v),s(v,Y),H(k,Y,null),s(g,qe),s(g,Z),s(Z,Se),c(e,ce,a),c(e,b,a),s(b,Ae),s(b,I),s(I,Te),s(b,Me),c(e,pe,a),c(e,O,a),s(O,Le),c(e,fe,a),c(e,N,a),s(N,ee),s(ee,Ge),c(e,de,a),c(e,E,a),s(E,ne),s(ne,Oe),s(E,Ne),c(e,ue,a),c(e,w,a),s(w,j),s(j,ze),s(j,z),s(z,Ue),s(j,Be),s(w,Fe),s(w,$),s($,We),s($,U),s(U,Ve),s($,He),c(e,me,a),c(e,q,a),s(q,se),s(se,Re),s(q,Ke),c(e,he,a),c(e,S,a),s(S,Je),s(S,B),s(B,Qe),c(e,ge,a),H(A,e,a),c(e,_e,a),c(e,_,a),s(_,D),s(D,ie),H(T,ie,null),s(_,Xe),s(_,te),s(te,Ye),c(e,ye,a),c(e,u,a),H(M,u,null),s(u,Ze),s(u,oe),s(oe,en),s(u,nn),s(u,L),s(L,sn),s(L,F),s(F,tn),s(L,on),s(u,an),s(u,C),H(G,C,null),s(C,rn),s(C,ae),s(ae,ln),ve=!0},p:zn,i(e){ve||(R(x.$$.fragment,e),R(k.$$.fragment,e),R(A.$$.fragment,e),R(T.$$.fragment,e),R(M.$$.fragment,e),R(G.$$.fragment,e),ve=!0)},o(e){K(x.$$.fragment,e),K(k.$$.fragment,e),K(A.$$.fragment,e),K(T.$$.fragment,e),K(M.$$.fragment,e),K(G.$$.fragment,e),ve=!1},d(e){n(m),e&&n(re),e&&n(h),J(x),e&&n(le),e&&n(g),J(k),e&&n(ce),e&&n(b),e&&n(pe),e&&n(O),e&&n(fe),e&&n(N),e&&n(de),e&&n(E),e&&n(ue),e&&n(w),e&&n(me),e&&n(q),e&&n(he),e&&n(S),e&&n(ge),J(A,e),e&&n(_e),e&&n(_),J(T),e&&n(ye),e&&n(u),J(M),J(G)}}}const Wn={local:"cycle-diffusion",sections:[{local:"overview",title:"Overview"},{local:"diffusers.CycleDiffusionPipeline",title:"CycleDiffusionPipeline"}],title:"Cycle Diffusion"};function Vn(un){return Un(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qn extends Ln{constructor(m){super();Gn(this,m,Vn,Fn,On,{})}}export{Qn as default,Wn as metadata};
