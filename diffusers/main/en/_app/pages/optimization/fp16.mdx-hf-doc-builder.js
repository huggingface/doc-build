import{S as cr,i as ur,s as hr,e as a,k as f,w as h,t as i,M as mr,c as n,d as s,m as c,a as o,x as m,h as l,b as u,G as t,g as p,y as d,q as _,o as v,B as y,v as dr}from"../../chunks/vendor-hf-doc-builder.js";import{T as _r}from"../../chunks/Tip-hf-doc-builder.js";import{I as R}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as D}from"../../chunks/CodeBlock-hf-doc-builder.js";function vr(Lt){let g;return{c(){g=i(`Attention slicing is useful even if a batch size of just 1 is used - as long
  as the model uses more than one attention head. If there is more than one
  attention head the *QK^T* attention matrix can be computed sequentially for
  each head which can save a significant amount of memory.`)},l(j){g=l(j,`Attention slicing is useful even if a batch size of just 1 is used - as long
  as the model uses more than one attention head. If there is more than one
  attention head the *QK^T* attention matrix can be computed sequentially for
  each head which can save a significant amount of memory.`)},m(j,$){p(j,g,$)},d(j){j&&s(g)}}}function yr(Lt){let g,j,$,G,Qe,le,Xs,Xe,Js,Vt,B,Zs,Je,ea,ta,Wt,L,Ze,P,Yt,sa,et,aa,na,tt,oa,ra,w,q,st,ia,la,at,pa,fa,nt,ca,ua,T,ot,ha,ma,rt,da,_a,it,va,ya,x,lt,wa,ga,pt,ba,$a,ft,ja,ka,A,ct,Ea,Da,ut,Pa,qa,ht,Ta,xa,S,mt,Aa,Sa,dt,Na,Ua,_t,Ca,Fa,N,vt,Ia,za,yt,Oa,Ma,wt,Ha,Kt,Ae,Ra,Qt,U,V,gt,pe,Ga,bt,Ba,Xt,fe,ce,La,Va,Jt,W,Wa,$t,Ya,Ka,Zt,ue,es,C,Y,jt,he,Qa,kt,Xa,ts,K,Ja,me,Za,en,ss,de,as,F,Q,Et,_e,tn,Dt,sn,ns,k,an,Pt,nn,on,qt,rn,ln,os,ve,rs,X,pn,Tt,fn,cn,is,I,J,xt,ye,un,At,hn,ls,E,mn,St,dn,_n,Nt,vn,yn,ps,we,fs,z,Z,Ut,ge,wn,Ct,gn,cs,Se,bn,us,ee,hs,te,$n,Ne,jn,kn,ms,be,ds,Ue,En,_s,O,se,Ft,$e,Dn,It,Pn,vs,Ce,qn,ys,ae,Tn,zt,xn,An,ws,je,gs,Fe,Sn,bs,Ie,Nn,$s,ke,js,M,ne,Ot,Ee,Un,Mt,Cn,ks,ze,Fn,Es,Oe,In,Ds,De,Ps,H,oe,Ht,Pe,zn,Rt,On,qs,re,Mn,Gt,Hn,Rn,Ts,Me,Gn,xs,qe,As,ie,Bn,Bt,Ln,Vn,Ss,Te,Ns;return le=new R({}),pe=new R({}),ue=new D({props:{code:`import torch

torch.backends.cudnn.benchmark = True`,highlighted:`<span class="hljs-keyword">import</span> torch

torch.backends.cudnn.benchmark = <span class="hljs-literal">True</span>`}}),he=new R({}),de=new D({props:{code:`import torch

torch.backends.cuda.matmul.allow_tf32 = True`,highlighted:`<span class="hljs-keyword">import</span> torch

torch.backends.cuda.matmul.allow_tf32 = <span class="hljs-literal">True</span>`}}),_e=new R({}),ve=new D({props:{code:`from torch import autocast
from diffusers import StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")
pipe = pipe.to("cuda")

prompt = "a photo of an astronaut riding a horse on mars"
with autocast("cuda"):
    image = pipe(prompt).images[0]`,highlighted:`<span class="hljs-keyword">from</span> torch <span class="hljs-keyword">import</span> autocast
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;runwayml/stable-diffusion-v1-5&quot;</span>)
pipe = pipe.to(<span class="hljs-string">&quot;cuda&quot;</span>)

prompt = <span class="hljs-string">&quot;a photo of an astronaut riding a horse on mars&quot;</span>
<span class="hljs-keyword">with</span> autocast(<span class="hljs-string">&quot;cuda&quot;</span>):
    image = pipe(prompt).images[<span class="hljs-number">0</span>]`}}),ye=new R({}),we=new D({props:{code:`pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    revision="fp16",
    torch_dtype=torch.float16,
)
pipe = pipe.to("cuda")

prompt = "a photo of an astronaut riding a horse on mars"
image = pipe(prompt).images[0]`,highlighted:`pipe = StableDiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;runwayml/stable-diffusion-v1-5&quot;</span>,
    revision=<span class="hljs-string">&quot;fp16&quot;</span>,
    torch_dtype=torch.float16,
)
pipe = pipe.to(<span class="hljs-string">&quot;cuda&quot;</span>)

prompt = <span class="hljs-string">&quot;a photo of an astronaut riding a horse on mars&quot;</span>
image = pipe(prompt).images[<span class="hljs-number">0</span>]`}}),ge=new R({}),ee=new _r({props:{$$slots:{default:[vr]},$$scope:{ctx:Lt}}}),be=new D({props:{code:`import torch
from diffusers import StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    revision="fp16",
    torch_dtype=torch.float16,
)
pipe = pipe.to("cuda")

prompt = "a photo of an astronaut riding a horse on mars"
pipe.enable_attention_slicing()
image = pipe(prompt).images[0]`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;runwayml/stable-diffusion-v1-5&quot;</span>,
    revision=<span class="hljs-string">&quot;fp16&quot;</span>,
    torch_dtype=torch.float16,
)
pipe = pipe.to(<span class="hljs-string">&quot;cuda&quot;</span>)

prompt = <span class="hljs-string">&quot;a photo of an astronaut riding a horse on mars&quot;</span>
pipe.enable_attention_slicing()
image = pipe(prompt).images[<span class="hljs-number">0</span>]`}}),$e=new R({}),je=new D({props:{code:`import torch
from diffusers import StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    revision="fp16",
    torch_dtype=torch.float16,
)
pipe = pipe.to("cuda")

prompt = "a photo of an astronaut riding a horse on mars"
pipe.enable_sequential_cpu_offload()
image = pipe(prompt).images[0]`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;runwayml/stable-diffusion-v1-5&quot;</span>,
    revision=<span class="hljs-string">&quot;fp16&quot;</span>,
    torch_dtype=torch.float16,
)
pipe = pipe.to(<span class="hljs-string">&quot;cuda&quot;</span>)

prompt = <span class="hljs-string">&quot;a photo of an astronaut riding a horse on mars&quot;</span>
pipe.enable_sequential_cpu_offload()
image = pipe(prompt).images[<span class="hljs-number">0</span>]`}}),ke=new D({props:{code:`import torch
from diffusers import StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    revision="fp16",
    torch_dtype=torch.float16,
)
pipe = pipe.to("cuda")

prompt = "a photo of an astronaut riding a horse on mars"
pipe.enable_sequential_cpu_offload()
pipe.enable_attention_slicing(1)

image = pipe(prompt).images[0]`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;runwayml/stable-diffusion-v1-5&quot;</span>,
    revision=<span class="hljs-string">&quot;fp16&quot;</span>,
    torch_dtype=torch.float16,
)
pipe = pipe.to(<span class="hljs-string">&quot;cuda&quot;</span>)

prompt = <span class="hljs-string">&quot;a photo of an astronaut riding a horse on mars&quot;</span>
pipe.enable_sequential_cpu_offload()
pipe.enable_attention_slicing(<span class="hljs-number">1</span>)

image = pipe(prompt).images[<span class="hljs-number">0</span>]`}}),Ee=new R({}),De=new D({props:{code:`print(pipe.unet.conv_out.state_dict()["weight"].stride())  # (2880, 9, 3, 1)
pipe.unet.to(memory_format=torch.channels_last)  # in-place operation
print(
    pipe.unet.conv_out.state_dict()["weight"].stride()
)  # (2880, 1, 960, 320) having a stride of 1 for the 2nd dimension proves that it works`,highlighted:`<span class="hljs-built_in">print</span>(pipe.unet.conv_out.state_dict()[<span class="hljs-string">&quot;weight&quot;</span>].stride())  <span class="hljs-comment"># (2880, 9, 3, 1)</span>
pipe.unet.to(memory_format=torch.channels_last)  <span class="hljs-comment"># in-place operation</span>
<span class="hljs-built_in">print</span>(
    pipe.unet.conv_out.state_dict()[<span class="hljs-string">&quot;weight&quot;</span>].stride()
)  <span class="hljs-comment"># (2880, 1, 960, 320) having a stride of 1 for the 2nd dimension proves that it works</span>`}}),Pe=new R({}),qe=new D({props:{code:`import time
import torch
from diffusers import StableDiffusionPipeline
import functools

# torch disable grad
torch.set_grad_enabled(False)

# set variables
n_experiments = 2
unet_runs_per_experiment = 50

# load inputs
def generate_inputs():
    sample = torch.randn(2, 4, 64, 64).half().cuda()
    timestep = torch.rand(1).half().cuda() * 999
    encoder_hidden_states = torch.randn(2, 77, 768).half().cuda()
    return sample, timestep, encoder_hidden_states


pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    revision="fp16",
    torch_dtype=torch.float16,
).to("cuda")
unet = pipe.unet
unet.eval()
unet.to(memory_format=torch.channels_last)  # use channels_last memory format
unet.forward = functools.partial(unet.forward, return_dict=False)  # set return_dict=False as default

# warmup
for _ in range(3):
    with torch.inference_mode():
        inputs = generate_inputs()
        orig_output = unet(*inputs)

# trace
print("tracing..")
unet_traced = torch.jit.trace(unet, inputs)
unet_traced.eval()
print("done tracing")


# warmup and optimize graph
for _ in range(5):
    with torch.inference_mode():
        inputs = generate_inputs()
        orig_output = unet_traced(*inputs)


# benchmarking
with torch.inference_mode():
    for _ in range(n_experiments):
        torch.cuda.synchronize()
        start_time = time.time()
        for _ in range(unet_runs_per_experiment):
            orig_output = unet_traced(*inputs)
        torch.cuda.synchronize()
        print(f"unet traced inference took {time.time() - start_time:.2f} seconds")
    for _ in range(n_experiments):
        torch.cuda.synchronize()
        start_time = time.time()
        for _ in range(unet_runs_per_experiment):
            orig_output = unet(*inputs)
        torch.cuda.synchronize()
        print(f"unet inference took {time.time() - start_time:.2f} seconds")

# save the model
unet_traced.save("unet_traced.pt")`,highlighted:`<span class="hljs-keyword">import</span> time
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionPipeline
<span class="hljs-keyword">import</span> functools

<span class="hljs-comment"># torch disable grad</span>
torch.set_grad_enabled(<span class="hljs-literal">False</span>)

<span class="hljs-comment"># set variables</span>
n_experiments = <span class="hljs-number">2</span>
unet_runs_per_experiment = <span class="hljs-number">50</span>

<span class="hljs-comment"># load inputs</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">generate_inputs</span>():
    sample = torch.randn(<span class="hljs-number">2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">64</span>, <span class="hljs-number">64</span>).half().cuda()
    timestep = torch.rand(<span class="hljs-number">1</span>).half().cuda() * <span class="hljs-number">999</span>
    encoder_hidden_states = torch.randn(<span class="hljs-number">2</span>, <span class="hljs-number">77</span>, <span class="hljs-number">768</span>).half().cuda()
    <span class="hljs-keyword">return</span> sample, timestep, encoder_hidden_states


pipe = StableDiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;runwayml/stable-diffusion-v1-5&quot;</span>,
    revision=<span class="hljs-string">&quot;fp16&quot;</span>,
    torch_dtype=torch.float16,
).to(<span class="hljs-string">&quot;cuda&quot;</span>)
unet = pipe.unet
unet.<span class="hljs-built_in">eval</span>()
unet.to(memory_format=torch.channels_last)  <span class="hljs-comment"># use channels_last memory format</span>
unet.forward = functools.partial(unet.forward, return_dict=<span class="hljs-literal">False</span>)  <span class="hljs-comment"># set return_dict=False as default</span>

<span class="hljs-comment"># warmup</span>
<span class="hljs-keyword">for</span> _ <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">3</span>):
    <span class="hljs-keyword">with</span> torch.inference_mode():
        inputs = generate_inputs()
        orig_output = unet(*inputs)

<span class="hljs-comment"># trace</span>
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;tracing..&quot;</span>)
unet_traced = torch.jit.trace(unet, inputs)
unet_traced.<span class="hljs-built_in">eval</span>()
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;done tracing&quot;</span>)


<span class="hljs-comment"># warmup and optimize graph</span>
<span class="hljs-keyword">for</span> _ <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">5</span>):
    <span class="hljs-keyword">with</span> torch.inference_mode():
        inputs = generate_inputs()
        orig_output = unet_traced(*inputs)


<span class="hljs-comment"># benchmarking</span>
<span class="hljs-keyword">with</span> torch.inference_mode():
    <span class="hljs-keyword">for</span> _ <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(n_experiments):
        torch.cuda.synchronize()
        start_time = time.time()
        <span class="hljs-keyword">for</span> _ <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(unet_runs_per_experiment):
            orig_output = unet_traced(*inputs)
        torch.cuda.synchronize()
        <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;unet traced inference took <span class="hljs-subst">{time.time() - start_time:<span class="hljs-number">.2</span>f}</span> seconds&quot;</span>)
    <span class="hljs-keyword">for</span> _ <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(n_experiments):
        torch.cuda.synchronize()
        start_time = time.time()
        <span class="hljs-keyword">for</span> _ <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(unet_runs_per_experiment):
            orig_output = unet(*inputs)
        torch.cuda.synchronize()
        <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;unet inference took <span class="hljs-subst">{time.time() - start_time:<span class="hljs-number">.2</span>f}</span> seconds&quot;</span>)

<span class="hljs-comment"># save the model</span>
unet_traced.save(<span class="hljs-string">&quot;unet_traced.pt&quot;</span>)`}}),Te=new D({props:{code:`from diffusers import StableDiffusionPipeline
import torch
from dataclasses import dataclass


@dataclass
class UNet2DConditionOutput:
    sample: torch.FloatTensor


pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    revision="fp16",
    torch_dtype=torch.float16,
).to("cuda")

# use jitted unet
unet_traced = torch.jit.load("unet_traced.pt")
# del pipe.unet
class TracedUNet(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.in_channels = pipe.unet.in_channels
        self.device = pipe.unet.device

    def forward(self, latent_model_input, t, encoder_hidden_states):
        sample = unet_traced(latent_model_input, t, encoder_hidden_states)[0]
        return UNet2DConditionOutput(sample=sample)


pipe.unet = TracedUNet()

with torch.inference_mode():
    image = pipe([prompt] * 1, num_inference_steps=50).images[0]`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionPipeline
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> dataclasses <span class="hljs-keyword">import</span> dataclass


<span class="hljs-meta">@dataclass</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">UNet2DConditionOutput</span>:
    sample: torch.FloatTensor


pipe = StableDiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;runwayml/stable-diffusion-v1-5&quot;</span>,
    revision=<span class="hljs-string">&quot;fp16&quot;</span>,
    torch_dtype=torch.float16,
).to(<span class="hljs-string">&quot;cuda&quot;</span>)

<span class="hljs-comment"># use jitted unet</span>
unet_traced = torch.jit.load(<span class="hljs-string">&quot;unet_traced.pt&quot;</span>)
<span class="hljs-comment"># del pipe.unet</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">TracedUNet</span>(torch.nn.Module):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self</span>):
        <span class="hljs-built_in">super</span>().__init__()
        self.in_channels = pipe.unet.in_channels
        self.device = pipe.unet.device

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">forward</span>(<span class="hljs-params">self, latent_model_input, t, encoder_hidden_states</span>):
        sample = unet_traced(latent_model_input, t, encoder_hidden_states)[<span class="hljs-number">0</span>]
        <span class="hljs-keyword">return</span> UNet2DConditionOutput(sample=sample)


pipe.unet = TracedUNet()

<span class="hljs-keyword">with</span> torch.inference_mode():
    image = pipe([prompt] * <span class="hljs-number">1</span>, num_inference_steps=<span class="hljs-number">50</span>).images[<span class="hljs-number">0</span>]`}}),{c(){g=a("meta"),j=f(),$=a("h1"),G=a("a"),Qe=a("span"),h(le.$$.fragment),Xs=f(),Xe=a("span"),Js=i("Memory and speed"),Vt=f(),B=a("p"),Zs=i("We present some techniques and ideas to optimize \u{1F917} Diffusers "),Je=a("em"),ea=i("inference"),ta=i(" for memory or speed."),Wt=f(),L=a("table"),Ze=a("thead"),P=a("tr"),Yt=a("th"),sa=f(),et=a("th"),aa=i("Latency"),na=f(),tt=a("th"),oa=i("Speedup"),ra=f(),w=a("tbody"),q=a("tr"),st=a("td"),ia=i("original"),la=f(),at=a("td"),pa=i("9.50s"),fa=f(),nt=a("td"),ca=i("x1"),ua=f(),T=a("tr"),ot=a("td"),ha=i("cuDNN auto-tuner"),ma=f(),rt=a("td"),da=i("9.37s"),_a=f(),it=a("td"),va=i("x1.01"),ya=f(),x=a("tr"),lt=a("td"),wa=i("autocast (fp16)"),ga=f(),pt=a("td"),ba=i("5.47s"),$a=f(),ft=a("td"),ja=i("x1.91"),ka=f(),A=a("tr"),ct=a("td"),Ea=i("fp16"),Da=f(),ut=a("td"),Pa=i("3.61s"),qa=f(),ht=a("td"),Ta=i("x2.91"),xa=f(),S=a("tr"),mt=a("td"),Aa=i("channels last"),Sa=f(),dt=a("td"),Na=i("3.30s"),Ua=f(),_t=a("td"),Ca=i("x2.87"),Fa=f(),N=a("tr"),vt=a("td"),Ia=i("traced UNet"),za=f(),yt=a("td"),Oa=i("3.21s"),Ma=f(),wt=a("td"),Ha=i("x2.96"),Kt=f(),Ae=a("em"),Ra=i(`obtained on NVIDIA TITAN RTX by generating a single image of size 512x512 from
  the prompt "a photo of an astronaut riding a horse on mars" with 50 DDIM
  steps.`),Qt=f(),U=a("h2"),V=a("a"),gt=a("span"),h(pe.$$.fragment),Ga=f(),bt=a("span"),Ba=i("Enable cuDNN auto-tuner"),Xt=f(),fe=a("p"),ce=a("a"),La=i("NVIDIA cuDNN"),Va=i("\xA0supports many algorithms to compute a convolution. Autotuner runs a short benchmark and selects the kernel with the best performance on a given hardware for a given input size."),Jt=f(),W=a("p"),Wa=i("Since we\u2019re using "),$t=a("strong"),Ya=i("convolutional networks"),Ka=i(" (other types currently not supported), we can enable cuDNN autotuner before launching the inference by setting:"),Zt=f(),h(ue.$$.fragment),es=f(),C=a("h3"),Y=a("a"),jt=a("span"),h(he.$$.fragment),Qa=f(),kt=a("span"),Xa=i("Use tf32 instead of fp32 (on Ampere and later CUDA devices)"),ts=f(),K=a("p"),Ja=i("On Ampere and later CUDA devices matrix multiplications and convolutions can use the TensorFloat32 (TF32) mode for faster but slightly less accurate computations. By default PyTorch enables TF32 mode for convolutions but not matrix multiplications, and unless a network requires full float32 precision we recommend enabling this setting for matrix multiplications, too. It can significantly speed up computations with typically negligible loss of numerical accuracy. You can read more about it "),me=a("a"),Za=i("here"),en=i(". All you need to do is to add this before your inference:"),ss=f(),h(de.$$.fragment),as=f(),F=a("h2"),Q=a("a"),Et=a("span"),h(_e.$$.fragment),tn=f(),Dt=a("span"),sn=i("Automatic mixed precision (AMP)"),ns=f(),k=a("p"),an=i("If you use a CUDA GPU, you can take advantage of "),Pt=a("code"),nn=i("torch.autocast"),on=i(" to perform inference roughly twice as fast at the cost of slightly lower precision. All you need to do is put your inference call inside an "),qt=a("code"),rn=i("autocast"),ln=i(" context manager. The following example shows how to do it using Stable Diffusion text-to-image generation as an example:"),os=f(),h(ve.$$.fragment),rs=f(),X=a("p"),pn=i("Despite the precision loss, in our experience the final image results look the same as the "),Tt=a("code"),fn=i("float32"),cn=i(" versions. Feel free to experiment and report back!"),is=f(),I=a("h2"),J=a("a"),xt=a("span"),h(ye.$$.fragment),un=f(),At=a("span"),hn=i("Half precision weights"),ls=f(),E=a("p"),mn=i("To save more GPU memory and get even more speed, you can load and run the model weights directly in half precision. This involves loading the float16 version of the weights, which was saved to a branch named "),St=a("code"),dn=i("fp16"),_n=i(", and telling PyTorch to use the "),Nt=a("code"),vn=i("float16"),yn=i(" type when loading them:"),ps=f(),h(we.$$.fragment),fs=f(),z=a("h2"),Z=a("a"),Ut=a("span"),h(ge.$$.fragment),wn=f(),Ct=a("span"),gn=i("Sliced attention for additional memory savings"),cs=f(),Se=a("p"),bn=i("For even additional memory savings, you can use a sliced version of attention that performs the computation in steps instead of all at once."),us=f(),h(ee.$$.fragment),hs=f(),te=a("p"),$n=i("To perform the attention computation sequentially over each head, you only need to invoke "),Ne=a("a"),jn=i("enable_attention_slicing()"),kn=i(" in your pipeline before inference, like here:"),ms=f(),h(be.$$.fragment),ds=f(),Ue=a("p"),En=i("There\u2019s a small performance penalty of about 10% slower inference times, but this method allows you to use Stable Diffusion in as little as 3.2 GB of VRAM!"),_s=f(),O=a("h2"),se=a("a"),Ft=a("span"),h($e.$$.fragment),Dn=f(),It=a("span"),Pn=i("Offloading to CPU with accelerate for memory savings"),vs=f(),Ce=a("p"),qn=i("For additional memory savings, you can offload the weights to CPU and load them to GPU when performing the forward pass."),ys=f(),ae=a("p"),Tn=i("To perform CPU offloading, all you have to do is invoke "),zt=a("code"),xn=i("enable_sequential_cpu_offload()"),An=i(":"),ws=f(),h(je.$$.fragment),gs=f(),Fe=a("p"),Sn=i("And you can get the memory consumption to < 2GB."),bs=f(),Ie=a("p"),Nn=i("If is also possible to chain it with attention slicing for minimal memory consumption, running it in as little as < 800mb of GPU vRAM:"),$s=f(),h(ke.$$.fragment),js=f(),M=a("h2"),ne=a("a"),Ot=a("span"),h(Ee.$$.fragment),Un=f(),Mt=a("span"),Cn=i("Using Channels Last memory format"),ks=f(),ze=a("p"),Fn=i("Channels last memory format is an alternative way of ordering NCHW tensors in memory preserving dimensions ordering. Channels last tensors ordered in such a way that channels become the densest dimension (aka storing images pixel-per-pixel). Since not all operators currently support channels last format it may result in a worst performance, so it\u2019s better to try it and see if it works for your model."),Es=f(),Oe=a("p"),In=i("For example, in order to set the UNet model in our pipeline to use channels last format, we can use the following:"),Ds=f(),h(De.$$.fragment),Ps=f(),H=a("h2"),oe=a("a"),Ht=a("span"),h(Pe.$$.fragment),zn=f(),Rt=a("span"),On=i("Tracing"),qs=f(),re=a("p"),Mn=i("Tracing runs an example input tensor through your model, and captures the operations that are invoked as that input makes its way through the model\u2019s layers so that an executable or "),Gt=a("code"),Hn=i("ScriptFunction"),Rn=i(" is returned that will be optimized using just-in-time compilation."),Ts=f(),Me=a("p"),Gn=i("To trace our UNet model, we can use the following:"),xs=f(),h(qe.$$.fragment),As=f(),ie=a("p"),Bn=i("Then we can replace the "),Bt=a("code"),Ln=i("unet"),Vn=i(" attribute of the pipeline with the traced model like the following"),Ss=f(),h(Te.$$.fragment),this.h()},l(e){const r=mr('[data-svelte="svelte-1phssyn"]',document.head);g=n(r,"META",{name:!0,content:!0}),r.forEach(s),j=c(e),$=n(e,"H1",{class:!0});var xe=o($);G=n(xe,"A",{id:!0,class:!0,href:!0});var Yn=o(G);Qe=n(Yn,"SPAN",{});var Kn=o(Qe);m(le.$$.fragment,Kn),Kn.forEach(s),Yn.forEach(s),Xs=c(xe),Xe=n(xe,"SPAN",{});var Qn=o(Xe);Js=l(Qn,"Memory and speed"),Qn.forEach(s),xe.forEach(s),Vt=c(e),B=n(e,"P",{});var Us=o(B);Zs=l(Us,"We present some techniques and ideas to optimize \u{1F917} Diffusers "),Je=n(Us,"EM",{});var Xn=o(Je);ea=l(Xn,"inference"),Xn.forEach(s),ta=l(Us," for memory or speed."),Us.forEach(s),Wt=c(e),L=n(e,"TABLE",{});var Cs=o(L);Ze=n(Cs,"THEAD",{});var Jn=o(Ze);P=n(Jn,"TR",{});var He=o(P);Yt=n(He,"TH",{}),o(Yt).forEach(s),sa=c(He),et=n(He,"TH",{});var Zn=o(et);aa=l(Zn,"Latency"),Zn.forEach(s),na=c(He),tt=n(He,"TH",{});var eo=o(tt);oa=l(eo,"Speedup"),eo.forEach(s),He.forEach(s),Jn.forEach(s),ra=c(Cs),w=n(Cs,"TBODY",{});var b=o(w);q=n(b,"TR",{});var Re=o(q);st=n(Re,"TD",{});var to=o(st);ia=l(to,"original"),to.forEach(s),la=c(Re),at=n(Re,"TD",{});var so=o(at);pa=l(so,"9.50s"),so.forEach(s),fa=c(Re),nt=n(Re,"TD",{});var ao=o(nt);ca=l(ao,"x1"),ao.forEach(s),Re.forEach(s),ua=c(b),T=n(b,"TR",{});var Ge=o(T);ot=n(Ge,"TD",{});var no=o(ot);ha=l(no,"cuDNN auto-tuner"),no.forEach(s),ma=c(Ge),rt=n(Ge,"TD",{});var oo=o(rt);da=l(oo,"9.37s"),oo.forEach(s),_a=c(Ge),it=n(Ge,"TD",{});var ro=o(it);va=l(ro,"x1.01"),ro.forEach(s),Ge.forEach(s),ya=c(b),x=n(b,"TR",{});var Be=o(x);lt=n(Be,"TD",{});var io=o(lt);wa=l(io,"autocast (fp16)"),io.forEach(s),ga=c(Be),pt=n(Be,"TD",{});var lo=o(pt);ba=l(lo,"5.47s"),lo.forEach(s),$a=c(Be),ft=n(Be,"TD",{});var po=o(ft);ja=l(po,"x1.91"),po.forEach(s),Be.forEach(s),ka=c(b),A=n(b,"TR",{});var Le=o(A);ct=n(Le,"TD",{});var fo=o(ct);Ea=l(fo,"fp16"),fo.forEach(s),Da=c(Le),ut=n(Le,"TD",{});var co=o(ut);Pa=l(co,"3.61s"),co.forEach(s),qa=c(Le),ht=n(Le,"TD",{});var uo=o(ht);Ta=l(uo,"x2.91"),uo.forEach(s),Le.forEach(s),xa=c(b),S=n(b,"TR",{});var Ve=o(S);mt=n(Ve,"TD",{});var ho=o(mt);Aa=l(ho,"channels last"),ho.forEach(s),Sa=c(Ve),dt=n(Ve,"TD",{});var mo=o(dt);Na=l(mo,"3.30s"),mo.forEach(s),Ua=c(Ve),_t=n(Ve,"TD",{});var _o=o(_t);Ca=l(_o,"x2.87"),_o.forEach(s),Ve.forEach(s),Fa=c(b),N=n(b,"TR",{});var We=o(N);vt=n(We,"TD",{});var vo=o(vt);Ia=l(vo,"traced UNet"),vo.forEach(s),za=c(We),yt=n(We,"TD",{});var yo=o(yt);Oa=l(yo,"3.21s"),yo.forEach(s),Ma=c(We),wt=n(We,"TD",{});var wo=o(wt);Ha=l(wo,"x2.96"),wo.forEach(s),We.forEach(s),b.forEach(s),Cs.forEach(s),Kt=c(e),Ae=n(e,"EM",{});var go=o(Ae);Ra=l(go,`obtained on NVIDIA TITAN RTX by generating a single image of size 512x512 from
  the prompt "a photo of an astronaut riding a horse on mars" with 50 DDIM
  steps.`),go.forEach(s),Qt=c(e),U=n(e,"H2",{class:!0});var Fs=o(U);V=n(Fs,"A",{id:!0,class:!0,href:!0});var bo=o(V);gt=n(bo,"SPAN",{});var $o=o(gt);m(pe.$$.fragment,$o),$o.forEach(s),bo.forEach(s),Ga=c(Fs),bt=n(Fs,"SPAN",{});var jo=o(bt);Ba=l(jo,"Enable cuDNN auto-tuner"),jo.forEach(s),Fs.forEach(s),Xt=c(e),fe=n(e,"P",{});var Wn=o(fe);ce=n(Wn,"A",{href:!0,rel:!0});var ko=o(ce);La=l(ko,"NVIDIA cuDNN"),ko.forEach(s),Va=l(Wn,"\xA0supports many algorithms to compute a convolution. Autotuner runs a short benchmark and selects the kernel with the best performance on a given hardware for a given input size."),Wn.forEach(s),Jt=c(e),W=n(e,"P",{});var Is=o(W);Wa=l(Is,"Since we\u2019re using "),$t=n(Is,"STRONG",{});var Eo=o($t);Ya=l(Eo,"convolutional networks"),Eo.forEach(s),Ka=l(Is," (other types currently not supported), we can enable cuDNN autotuner before launching the inference by setting:"),Is.forEach(s),Zt=c(e),m(ue.$$.fragment,e),es=c(e),C=n(e,"H3",{class:!0});var zs=o(C);Y=n(zs,"A",{id:!0,class:!0,href:!0});var Do=o(Y);jt=n(Do,"SPAN",{});var Po=o(jt);m(he.$$.fragment,Po),Po.forEach(s),Do.forEach(s),Qa=c(zs),kt=n(zs,"SPAN",{});var qo=o(kt);Xa=l(qo,"Use tf32 instead of fp32 (on Ampere and later CUDA devices)"),qo.forEach(s),zs.forEach(s),ts=c(e),K=n(e,"P",{});var Os=o(K);Ja=l(Os,"On Ampere and later CUDA devices matrix multiplications and convolutions can use the TensorFloat32 (TF32) mode for faster but slightly less accurate computations. By default PyTorch enables TF32 mode for convolutions but not matrix multiplications, and unless a network requires full float32 precision we recommend enabling this setting for matrix multiplications, too. It can significantly speed up computations with typically negligible loss of numerical accuracy. You can read more about it "),me=n(Os,"A",{href:!0,rel:!0});var To=o(me);Za=l(To,"here"),To.forEach(s),en=l(Os,". All you need to do is to add this before your inference:"),Os.forEach(s),ss=c(e),m(de.$$.fragment,e),as=c(e),F=n(e,"H2",{class:!0});var Ms=o(F);Q=n(Ms,"A",{id:!0,class:!0,href:!0});var xo=o(Q);Et=n(xo,"SPAN",{});var Ao=o(Et);m(_e.$$.fragment,Ao),Ao.forEach(s),xo.forEach(s),tn=c(Ms),Dt=n(Ms,"SPAN",{});var So=o(Dt);sn=l(So,"Automatic mixed precision (AMP)"),So.forEach(s),Ms.forEach(s),ns=c(e),k=n(e,"P",{});var Ye=o(k);an=l(Ye,"If you use a CUDA GPU, you can take advantage of "),Pt=n(Ye,"CODE",{});var No=o(Pt);nn=l(No,"torch.autocast"),No.forEach(s),on=l(Ye," to perform inference roughly twice as fast at the cost of slightly lower precision. All you need to do is put your inference call inside an "),qt=n(Ye,"CODE",{});var Uo=o(qt);rn=l(Uo,"autocast"),Uo.forEach(s),ln=l(Ye," context manager. The following example shows how to do it using Stable Diffusion text-to-image generation as an example:"),Ye.forEach(s),os=c(e),m(ve.$$.fragment,e),rs=c(e),X=n(e,"P",{});var Hs=o(X);pn=l(Hs,"Despite the precision loss, in our experience the final image results look the same as the "),Tt=n(Hs,"CODE",{});var Co=o(Tt);fn=l(Co,"float32"),Co.forEach(s),cn=l(Hs," versions. Feel free to experiment and report back!"),Hs.forEach(s),is=c(e),I=n(e,"H2",{class:!0});var Rs=o(I);J=n(Rs,"A",{id:!0,class:!0,href:!0});var Fo=o(J);xt=n(Fo,"SPAN",{});var Io=o(xt);m(ye.$$.fragment,Io),Io.forEach(s),Fo.forEach(s),un=c(Rs),At=n(Rs,"SPAN",{});var zo=o(At);hn=l(zo,"Half precision weights"),zo.forEach(s),Rs.forEach(s),ls=c(e),E=n(e,"P",{});var Ke=o(E);mn=l(Ke,"To save more GPU memory and get even more speed, you can load and run the model weights directly in half precision. This involves loading the float16 version of the weights, which was saved to a branch named "),St=n(Ke,"CODE",{});var Oo=o(St);dn=l(Oo,"fp16"),Oo.forEach(s),_n=l(Ke,", and telling PyTorch to use the "),Nt=n(Ke,"CODE",{});var Mo=o(Nt);vn=l(Mo,"float16"),Mo.forEach(s),yn=l(Ke," type when loading them:"),Ke.forEach(s),ps=c(e),m(we.$$.fragment,e),fs=c(e),z=n(e,"H2",{class:!0});var Gs=o(z);Z=n(Gs,"A",{id:!0,class:!0,href:!0});var Ho=o(Z);Ut=n(Ho,"SPAN",{});var Ro=o(Ut);m(ge.$$.fragment,Ro),Ro.forEach(s),Ho.forEach(s),wn=c(Gs),Ct=n(Gs,"SPAN",{});var Go=o(Ct);gn=l(Go,"Sliced attention for additional memory savings"),Go.forEach(s),Gs.forEach(s),cs=c(e),Se=n(e,"P",{});var Bo=o(Se);bn=l(Bo,"For even additional memory savings, you can use a sliced version of attention that performs the computation in steps instead of all at once."),Bo.forEach(s),us=c(e),m(ee.$$.fragment,e),hs=c(e),te=n(e,"P",{});var Bs=o(te);$n=l(Bs,"To perform the attention computation sequentially over each head, you only need to invoke "),Ne=n(Bs,"A",{href:!0});var Lo=o(Ne);jn=l(Lo,"enable_attention_slicing()"),Lo.forEach(s),kn=l(Bs," in your pipeline before inference, like here:"),Bs.forEach(s),ms=c(e),m(be.$$.fragment,e),ds=c(e),Ue=n(e,"P",{});var Vo=o(Ue);En=l(Vo,"There\u2019s a small performance penalty of about 10% slower inference times, but this method allows you to use Stable Diffusion in as little as 3.2 GB of VRAM!"),Vo.forEach(s),_s=c(e),O=n(e,"H2",{class:!0});var Ls=o(O);se=n(Ls,"A",{id:!0,class:!0,href:!0});var Wo=o(se);Ft=n(Wo,"SPAN",{});var Yo=o(Ft);m($e.$$.fragment,Yo),Yo.forEach(s),Wo.forEach(s),Dn=c(Ls),It=n(Ls,"SPAN",{});var Ko=o(It);Pn=l(Ko,"Offloading to CPU with accelerate for memory savings"),Ko.forEach(s),Ls.forEach(s),vs=c(e),Ce=n(e,"P",{});var Qo=o(Ce);qn=l(Qo,"For additional memory savings, you can offload the weights to CPU and load them to GPU when performing the forward pass."),Qo.forEach(s),ys=c(e),ae=n(e,"P",{});var Vs=o(ae);Tn=l(Vs,"To perform CPU offloading, all you have to do is invoke "),zt=n(Vs,"CODE",{});var Xo=o(zt);xn=l(Xo,"enable_sequential_cpu_offload()"),Xo.forEach(s),An=l(Vs,":"),Vs.forEach(s),ws=c(e),m(je.$$.fragment,e),gs=c(e),Fe=n(e,"P",{});var Jo=o(Fe);Sn=l(Jo,"And you can get the memory consumption to < 2GB."),Jo.forEach(s),bs=c(e),Ie=n(e,"P",{});var Zo=o(Ie);Nn=l(Zo,"If is also possible to chain it with attention slicing for minimal memory consumption, running it in as little as < 800mb of GPU vRAM:"),Zo.forEach(s),$s=c(e),m(ke.$$.fragment,e),js=c(e),M=n(e,"H2",{class:!0});var Ws=o(M);ne=n(Ws,"A",{id:!0,class:!0,href:!0});var er=o(ne);Ot=n(er,"SPAN",{});var tr=o(Ot);m(Ee.$$.fragment,tr),tr.forEach(s),er.forEach(s),Un=c(Ws),Mt=n(Ws,"SPAN",{});var sr=o(Mt);Cn=l(sr,"Using Channels Last memory format"),sr.forEach(s),Ws.forEach(s),ks=c(e),ze=n(e,"P",{});var ar=o(ze);Fn=l(ar,"Channels last memory format is an alternative way of ordering NCHW tensors in memory preserving dimensions ordering. Channels last tensors ordered in such a way that channels become the densest dimension (aka storing images pixel-per-pixel). Since not all operators currently support channels last format it may result in a worst performance, so it\u2019s better to try it and see if it works for your model."),ar.forEach(s),Es=c(e),Oe=n(e,"P",{});var nr=o(Oe);In=l(nr,"For example, in order to set the UNet model in our pipeline to use channels last format, we can use the following:"),nr.forEach(s),Ds=c(e),m(De.$$.fragment,e),Ps=c(e),H=n(e,"H2",{class:!0});var Ys=o(H);oe=n(Ys,"A",{id:!0,class:!0,href:!0});var or=o(oe);Ht=n(or,"SPAN",{});var rr=o(Ht);m(Pe.$$.fragment,rr),rr.forEach(s),or.forEach(s),zn=c(Ys),Rt=n(Ys,"SPAN",{});var ir=o(Rt);On=l(ir,"Tracing"),ir.forEach(s),Ys.forEach(s),qs=c(e),re=n(e,"P",{});var Ks=o(re);Mn=l(Ks,"Tracing runs an example input tensor through your model, and captures the operations that are invoked as that input makes its way through the model\u2019s layers so that an executable or "),Gt=n(Ks,"CODE",{});var lr=o(Gt);Hn=l(lr,"ScriptFunction"),lr.forEach(s),Rn=l(Ks," is returned that will be optimized using just-in-time compilation."),Ks.forEach(s),Ts=c(e),Me=n(e,"P",{});var pr=o(Me);Gn=l(pr,"To trace our UNet model, we can use the following:"),pr.forEach(s),xs=c(e),m(qe.$$.fragment,e),As=c(e),ie=n(e,"P",{});var Qs=o(ie);Bn=l(Qs,"Then we can replace the "),Bt=n(Qs,"CODE",{});var fr=o(Bt);Ln=l(fr,"unet"),fr.forEach(s),Vn=l(Qs," attribute of the pipeline with the traced model like the following"),Qs.forEach(s),Ss=c(e),m(Te.$$.fragment,e),this.h()},h(){u(g,"name","hf:doc:metadata"),u(g,"content",JSON.stringify(wr)),u(G,"id","memory-and-speed"),u(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(G,"href","#memory-and-speed"),u($,"class","relative group"),u(V,"id","enable-cudnn-autotuner"),u(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(V,"href","#enable-cudnn-autotuner"),u(U,"class","relative group"),u(ce,"href","https://developer.nvidia.com/cudnn"),u(ce,"rel","nofollow"),u(Y,"id","use-tf32-instead-of-fp32-on-ampere-and-later-cuda-devices"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#use-tf32-instead-of-fp32-on-ampere-and-later-cuda-devices"),u(C,"class","relative group"),u(me,"href","https://huggingface.co/docs/transformers/v4.18.0/en/performance#tf32"),u(me,"rel","nofollow"),u(Q,"id","automatic-mixed-precision-amp"),u(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Q,"href","#automatic-mixed-precision-amp"),u(F,"class","relative group"),u(J,"id","half-precision-weights"),u(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(J,"href","#half-precision-weights"),u(I,"class","relative group"),u(Z,"id","sliced-attention-for-additional-memory-savings"),u(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Z,"href","#sliced-attention-for-additional-memory-savings"),u(z,"class","relative group"),u(Ne,"href","/docs/diffusers/main/en/api/pipelines/stable_diffusion#diffusers.StableDiffusionPipeline.enable_attention_slicing"),u(se,"id","offloading-to-cpu-with-accelerate-for-memory-savings"),u(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(se,"href","#offloading-to-cpu-with-accelerate-for-memory-savings"),u(O,"class","relative group"),u(ne,"id","using-channels-last-memory-format"),u(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ne,"href","#using-channels-last-memory-format"),u(M,"class","relative group"),u(oe,"id","tracing"),u(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(oe,"href","#tracing"),u(H,"class","relative group")},m(e,r){t(document.head,g),p(e,j,r),p(e,$,r),t($,G),t(G,Qe),d(le,Qe,null),t($,Xs),t($,Xe),t(Xe,Js),p(e,Vt,r),p(e,B,r),t(B,Zs),t(B,Je),t(Je,ea),t(B,ta),p(e,Wt,r),p(e,L,r),t(L,Ze),t(Ze,P),t(P,Yt),t(P,sa),t(P,et),t(et,aa),t(P,na),t(P,tt),t(tt,oa),t(L,ra),t(L,w),t(w,q),t(q,st),t(st,ia),t(q,la),t(q,at),t(at,pa),t(q,fa),t(q,nt),t(nt,ca),t(w,ua),t(w,T),t(T,ot),t(ot,ha),t(T,ma),t(T,rt),t(rt,da),t(T,_a),t(T,it),t(it,va),t(w,ya),t(w,x),t(x,lt),t(lt,wa),t(x,ga),t(x,pt),t(pt,ba),t(x,$a),t(x,ft),t(ft,ja),t(w,ka),t(w,A),t(A,ct),t(ct,Ea),t(A,Da),t(A,ut),t(ut,Pa),t(A,qa),t(A,ht),t(ht,Ta),t(w,xa),t(w,S),t(S,mt),t(mt,Aa),t(S,Sa),t(S,dt),t(dt,Na),t(S,Ua),t(S,_t),t(_t,Ca),t(w,Fa),t(w,N),t(N,vt),t(vt,Ia),t(N,za),t(N,yt),t(yt,Oa),t(N,Ma),t(N,wt),t(wt,Ha),p(e,Kt,r),p(e,Ae,r),t(Ae,Ra),p(e,Qt,r),p(e,U,r),t(U,V),t(V,gt),d(pe,gt,null),t(U,Ga),t(U,bt),t(bt,Ba),p(e,Xt,r),p(e,fe,r),t(fe,ce),t(ce,La),t(fe,Va),p(e,Jt,r),p(e,W,r),t(W,Wa),t(W,$t),t($t,Ya),t(W,Ka),p(e,Zt,r),d(ue,e,r),p(e,es,r),p(e,C,r),t(C,Y),t(Y,jt),d(he,jt,null),t(C,Qa),t(C,kt),t(kt,Xa),p(e,ts,r),p(e,K,r),t(K,Ja),t(K,me),t(me,Za),t(K,en),p(e,ss,r),d(de,e,r),p(e,as,r),p(e,F,r),t(F,Q),t(Q,Et),d(_e,Et,null),t(F,tn),t(F,Dt),t(Dt,sn),p(e,ns,r),p(e,k,r),t(k,an),t(k,Pt),t(Pt,nn),t(k,on),t(k,qt),t(qt,rn),t(k,ln),p(e,os,r),d(ve,e,r),p(e,rs,r),p(e,X,r),t(X,pn),t(X,Tt),t(Tt,fn),t(X,cn),p(e,is,r),p(e,I,r),t(I,J),t(J,xt),d(ye,xt,null),t(I,un),t(I,At),t(At,hn),p(e,ls,r),p(e,E,r),t(E,mn),t(E,St),t(St,dn),t(E,_n),t(E,Nt),t(Nt,vn),t(E,yn),p(e,ps,r),d(we,e,r),p(e,fs,r),p(e,z,r),t(z,Z),t(Z,Ut),d(ge,Ut,null),t(z,wn),t(z,Ct),t(Ct,gn),p(e,cs,r),p(e,Se,r),t(Se,bn),p(e,us,r),d(ee,e,r),p(e,hs,r),p(e,te,r),t(te,$n),t(te,Ne),t(Ne,jn),t(te,kn),p(e,ms,r),d(be,e,r),p(e,ds,r),p(e,Ue,r),t(Ue,En),p(e,_s,r),p(e,O,r),t(O,se),t(se,Ft),d($e,Ft,null),t(O,Dn),t(O,It),t(It,Pn),p(e,vs,r),p(e,Ce,r),t(Ce,qn),p(e,ys,r),p(e,ae,r),t(ae,Tn),t(ae,zt),t(zt,xn),t(ae,An),p(e,ws,r),d(je,e,r),p(e,gs,r),p(e,Fe,r),t(Fe,Sn),p(e,bs,r),p(e,Ie,r),t(Ie,Nn),p(e,$s,r),d(ke,e,r),p(e,js,r),p(e,M,r),t(M,ne),t(ne,Ot),d(Ee,Ot,null),t(M,Un),t(M,Mt),t(Mt,Cn),p(e,ks,r),p(e,ze,r),t(ze,Fn),p(e,Es,r),p(e,Oe,r),t(Oe,In),p(e,Ds,r),d(De,e,r),p(e,Ps,r),p(e,H,r),t(H,oe),t(oe,Ht),d(Pe,Ht,null),t(H,zn),t(H,Rt),t(Rt,On),p(e,qs,r),p(e,re,r),t(re,Mn),t(re,Gt),t(Gt,Hn),t(re,Rn),p(e,Ts,r),p(e,Me,r),t(Me,Gn),p(e,xs,r),d(qe,e,r),p(e,As,r),p(e,ie,r),t(ie,Bn),t(ie,Bt),t(Bt,Ln),t(ie,Vn),p(e,Ss,r),d(Te,e,r),Ns=!0},p(e,[r]){const xe={};r&2&&(xe.$$scope={dirty:r,ctx:e}),ee.$set(xe)},i(e){Ns||(_(le.$$.fragment,e),_(pe.$$.fragment,e),_(ue.$$.fragment,e),_(he.$$.fragment,e),_(de.$$.fragment,e),_(_e.$$.fragment,e),_(ve.$$.fragment,e),_(ye.$$.fragment,e),_(we.$$.fragment,e),_(ge.$$.fragment,e),_(ee.$$.fragment,e),_(be.$$.fragment,e),_($e.$$.fragment,e),_(je.$$.fragment,e),_(ke.$$.fragment,e),_(Ee.$$.fragment,e),_(De.$$.fragment,e),_(Pe.$$.fragment,e),_(qe.$$.fragment,e),_(Te.$$.fragment,e),Ns=!0)},o(e){v(le.$$.fragment,e),v(pe.$$.fragment,e),v(ue.$$.fragment,e),v(he.$$.fragment,e),v(de.$$.fragment,e),v(_e.$$.fragment,e),v(ve.$$.fragment,e),v(ye.$$.fragment,e),v(we.$$.fragment,e),v(ge.$$.fragment,e),v(ee.$$.fragment,e),v(be.$$.fragment,e),v($e.$$.fragment,e),v(je.$$.fragment,e),v(ke.$$.fragment,e),v(Ee.$$.fragment,e),v(De.$$.fragment,e),v(Pe.$$.fragment,e),v(qe.$$.fragment,e),v(Te.$$.fragment,e),Ns=!1},d(e){s(g),e&&s(j),e&&s($),y(le),e&&s(Vt),e&&s(B),e&&s(Wt),e&&s(L),e&&s(Kt),e&&s(Ae),e&&s(Qt),e&&s(U),y(pe),e&&s(Xt),e&&s(fe),e&&s(Jt),e&&s(W),e&&s(Zt),y(ue,e),e&&s(es),e&&s(C),y(he),e&&s(ts),e&&s(K),e&&s(ss),y(de,e),e&&s(as),e&&s(F),y(_e),e&&s(ns),e&&s(k),e&&s(os),y(ve,e),e&&s(rs),e&&s(X),e&&s(is),e&&s(I),y(ye),e&&s(ls),e&&s(E),e&&s(ps),y(we,e),e&&s(fs),e&&s(z),y(ge),e&&s(cs),e&&s(Se),e&&s(us),y(ee,e),e&&s(hs),e&&s(te),e&&s(ms),y(be,e),e&&s(ds),e&&s(Ue),e&&s(_s),e&&s(O),y($e),e&&s(vs),e&&s(Ce),e&&s(ys),e&&s(ae),e&&s(ws),y(je,e),e&&s(gs),e&&s(Fe),e&&s(bs),e&&s(Ie),e&&s($s),y(ke,e),e&&s(js),e&&s(M),y(Ee),e&&s(ks),e&&s(ze),e&&s(Es),e&&s(Oe),e&&s(Ds),y(De,e),e&&s(Ps),e&&s(H),y(Pe),e&&s(qs),e&&s(re),e&&s(Ts),e&&s(Me),e&&s(xs),y(qe,e),e&&s(As),e&&s(ie),e&&s(Ss),y(Te,e)}}}const wr={local:"memory-and-speed",sections:[{local:"enable-cudnn-autotuner",sections:[{local:"use-tf32-instead-of-fp32-on-ampere-and-later-cuda-devices",title:"Use tf32 instead of fp32 (on Ampere and later CUDA devices)"}],title:"Enable cuDNN auto-tuner"},{local:"automatic-mixed-precision-amp",title:"Automatic mixed precision (AMP)"},{local:"half-precision-weights",title:"Half precision weights"},{local:"sliced-attention-for-additional-memory-savings",title:"Sliced attention for additional memory savings"},{local:"offloading-to-cpu-with-accelerate-for-memory-savings",title:"Offloading to CPU with accelerate for memory savings"},{local:"using-channels-last-memory-format",title:"Using Channels Last memory format"},{local:"tracing",title:"Tracing"}],title:"Memory and speed"};function gr(Lt){return dr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Er extends cr{constructor(g){super();ur(this,g,gr,yr,hr,{})}}export{Er as default,wr as metadata};
