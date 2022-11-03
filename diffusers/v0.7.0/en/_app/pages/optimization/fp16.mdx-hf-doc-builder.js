import{S as vp,i as yp,s as wp,e as a,k as l,w as u,t as r,M as gp,c as n,d as s,m as p,a as o,x as d,h as i,b as h,G as t,g as c,y as m,q as _,o as v,B as y,v as bp}from"../../chunks/vendor-hf-doc-builder.js";import{T as $p}from"../../chunks/Tip-hf-doc-builder.js";import{I as q}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as k}from"../../chunks/CodeBlock-hf-doc-builder.js";function jp(Zs){let b;return{c(){b=r(`Attention slicing is useful even if a batch size of just 1 is used - as long
  as the model uses more than one attention head. If there is more than one
  attention head the *QK^T* attention matrix can be computed sequentially for
  each head which can save a significant amount of memory.`)},l(T){b=i(T,`Attention slicing is useful even if a batch size of just 1 is used - as long
  as the model uses more than one attention head. If there is more than one
  attention head the *QK^T* attention matrix can be computed sequentially for
  each head which can save a significant amount of memory.`)},m(T,E){c(T,b,E)},d(T){T&&s(b)}}}function Ep(Zs){let b,T,E,se,Tt,je,dn,Dt,mn,ea,ae,_n,Pt,vn,yn,ta,ne,At,x,sa,wn,qt,gn,bn,xt,$n,jn,w,N,Nt,En,kn,St,Tn,Dn,Ut,Pn,An,S,It,qn,xn,Ct,Nn,Sn,Rt,Un,In,U,Ft,Cn,Rn,Mt,Fn,Mn,Ht,Hn,zn,I,zt,Gn,On,Gt,Bn,Vn,Ot,Ln,Xn,C,Bt,Yn,Wn,Vt,Kn,Qn,Lt,Jn,Zn,R,Xt,eo,to,Yt,so,ao,Wt,no,oo,F,Kt,ro,io,Qt,lo,po,Jt,fo,aa,Ke,co,na,M,oe,Zt,Ee,ho,es,uo,oa,ke,Te,mo,_o,ra,re,vo,ts,yo,wo,ia,De,la,H,ie,ss,Pe,go,as,bo,pa,le,$o,Ae,jo,Eo,fa,qe,ca,z,pe,ns,xe,ko,os,To,ha,D,Do,rs,Po,Ao,is,qo,xo,ua,Ne,da,fe,No,ls,So,Uo,ma,G,ce,ps,Se,Io,fs,Co,_a,P,Ro,cs,Fo,Mo,hs,Ho,zo,va,Ue,ya,O,he,us,Ie,Go,ds,Oo,wa,Qe,Bo,ga,ue,ba,de,Vo,Je,Lo,Xo,$a,Ce,ja,Ze,Yo,Ea,B,me,ms,Re,Wo,_s,Ko,ka,et,Qo,Ta,_e,Jo,vs,Zo,er,Da,Fe,Pa,tt,tr,Aa,st,sr,qa,Me,xa,V,ve,ys,He,ar,ws,nr,Na,at,or,Sa,nt,rr,Ua,ze,Ia,L,ye,gs,Ge,ir,bs,lr,Ca,we,pr,$s,fr,cr,Ra,ot,hr,Fa,Oe,Ma,ge,ur,js,dr,mr,Ha,Be,za,X,be,Es,Ve,_r,ks,vr,Ga,$e,Ts,Y,Ds,yr,wr,Ps,gr,br,As,$r,jr,g,W,qs,Er,kr,xs,Tr,Dr,Ns,Pr,Ar,K,Ss,qr,xr,Us,Nr,Sr,Is,Ur,Ir,Q,Cs,Cr,Rr,Rs,Fr,Mr,Fs,Hr,zr,J,Ms,Gr,Or,Hs,Br,Vr,zs,Lr,Xr,Z,Gs,Yr,Wr,Os,Kr,Qr,Bs,Jr,Zr,ee,Vs,ei,ti,Ls,si,ai,Xs,ni,oi,te,Ys,ri,ii,Ws,li,pi,Ks,fi,Oa,rt,ci,Ba,A,Qs,hi,ui,Js,di,mi,Le,_i,Xe,vi,yi,Va,Ye,La;return je=new q({}),Ee=new q({}),De=new k({props:{code:`import torch

torch.backends.cudnn.benchmark = True`,highlighted:`<span class="hljs-keyword">import</span> torch

torch.backends.cudnn.benchmark = <span class="hljs-literal">True</span>`}}),Pe=new q({}),qe=new k({props:{code:`import torch

torch.backends.cuda.matmul.allow_tf32 = True`,highlighted:`<span class="hljs-keyword">import</span> torch

torch.backends.cuda.matmul.allow_tf32 = <span class="hljs-literal">True</span>`}}),xe=new q({}),Ne=new k({props:{code:`from torch import autocast
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
    image = pipe(prompt).images[<span class="hljs-number">0</span>]`}}),Se=new q({}),Ue=new k({props:{code:`pipe = StableDiffusionPipeline.from_pretrained(
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
image = pipe(prompt).images[<span class="hljs-number">0</span>]`}}),Ie=new q({}),ue=new $p({props:{$$slots:{default:[jp]},$$scope:{ctx:Zs}}}),Ce=new k({props:{code:`import torch
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
image = pipe(prompt).images[<span class="hljs-number">0</span>]`}}),Re=new q({}),Fe=new k({props:{code:`import torch
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
image = pipe(prompt).images[<span class="hljs-number">0</span>]`}}),Me=new k({props:{code:`import torch
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

image = pipe(prompt).images[<span class="hljs-number">0</span>]`}}),He=new q({}),ze=new k({props:{code:`print(pipe.unet.conv_out.state_dict()["weight"].stride())  # (2880, 9, 3, 1)
pipe.unet.to(memory_format=torch.channels_last)  # in-place operation
print(
    pipe.unet.conv_out.state_dict()["weight"].stride()
)  # (2880, 1, 960, 320) having a stride of 1 for the 2nd dimension proves that it works`,highlighted:`<span class="hljs-built_in">print</span>(pipe.unet.conv_out.state_dict()[<span class="hljs-string">&quot;weight&quot;</span>].stride())  <span class="hljs-comment"># (2880, 9, 3, 1)</span>
pipe.unet.to(memory_format=torch.channels_last)  <span class="hljs-comment"># in-place operation</span>
<span class="hljs-built_in">print</span>(
    pipe.unet.conv_out.state_dict()[<span class="hljs-string">&quot;weight&quot;</span>].stride()
)  <span class="hljs-comment"># (2880, 1, 960, 320) having a stride of 1 for the 2nd dimension proves that it works</span>`}}),Ge=new q({}),Oe=new k({props:{code:`import time
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
unet_traced.save(<span class="hljs-string">&quot;unet_traced.pt&quot;</span>)`}}),Be=new k({props:{code:`from diffusers import StableDiffusionPipeline
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
    image = pipe([prompt] * <span class="hljs-number">1</span>, num_inference_steps=<span class="hljs-number">50</span>).images[<span class="hljs-number">0</span>]`}}),Ve=new q({}),Ye=new k({props:{code:`from diffusers import StableDiffusionPipeline
import torch

pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    revision="fp16",
    torch_dtype=torch.float16,
).to("cuda")

pipe.enable_xformers_memory_efficient_attention()

with torch.inference_mode():
    sample = pipe("a small cat")

# optional: You can disable it via
# pipe.disable_xformers_memory_efficient_attention()`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionPipeline
<span class="hljs-keyword">import</span> torch

pipe = StableDiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;runwayml/stable-diffusion-v1-5&quot;</span>,
    revision=<span class="hljs-string">&quot;fp16&quot;</span>,
    torch_dtype=torch.float16,
).to(<span class="hljs-string">&quot;cuda&quot;</span>)

pipe.enable_xformers_memory_efficient_attention()

<span class="hljs-keyword">with</span> torch.inference_mode():
    sample = pipe(<span class="hljs-string">&quot;a small cat&quot;</span>)

<span class="hljs-comment"># optional: You can disable it via</span>
<span class="hljs-comment"># pipe.disable_xformers_memory_efficient_attention()</span>`}}),{c(){b=a("meta"),T=l(),E=a("h1"),se=a("a"),Tt=a("span"),u(je.$$.fragment),dn=l(),Dt=a("span"),mn=r("Memory and speed"),ea=l(),ae=a("p"),_n=r("We present some techniques and ideas to optimize \u{1F917} Diffusers "),Pt=a("em"),vn=r("inference"),yn=r(" for memory or speed."),ta=l(),ne=a("table"),At=a("thead"),x=a("tr"),sa=a("th"),wn=l(),qt=a("th"),gn=r("Latency"),bn=l(),xt=a("th"),$n=r("Speedup"),jn=l(),w=a("tbody"),N=a("tr"),Nt=a("td"),En=r("original"),kn=l(),St=a("td"),Tn=r("9.50s"),Dn=l(),Ut=a("td"),Pn=r("x1"),An=l(),S=a("tr"),It=a("td"),qn=r("cuDNN auto-tuner"),xn=l(),Ct=a("td"),Nn=r("9.37s"),Sn=l(),Rt=a("td"),Un=r("x1.01"),In=l(),U=a("tr"),Ft=a("td"),Cn=r("autocast (fp16)"),Rn=l(),Mt=a("td"),Fn=r("5.47s"),Mn=l(),Ht=a("td"),Hn=r("x1.74"),zn=l(),I=a("tr"),zt=a("td"),Gn=r("fp16"),On=l(),Gt=a("td"),Bn=r("3.61s"),Vn=l(),Ot=a("td"),Ln=r("x2.63"),Xn=l(),C=a("tr"),Bt=a("td"),Yn=r("channels last"),Wn=l(),Vt=a("td"),Kn=r("3.30s"),Qn=l(),Lt=a("td"),Jn=r("x2.88"),Zn=l(),R=a("tr"),Xt=a("td"),eo=r("traced UNet"),to=l(),Yt=a("td"),so=r("3.21s"),ao=l(),Wt=a("td"),no=r("x2.96"),oo=l(),F=a("tr"),Kt=a("td"),ro=r("memory efficient attention"),io=l(),Qt=a("td"),lo=r("2.63s"),po=l(),Jt=a("td"),fo=r("x3.61"),aa=l(),Ke=a("em"),co=r(`obtained on NVIDIA TITAN RTX by generating a single image of size 512x512 from
  the prompt "a photo of an astronaut riding a horse on mars" with 50 DDIM
  steps.`),na=l(),M=a("h2"),oe=a("a"),Zt=a("span"),u(Ee.$$.fragment),ho=l(),es=a("span"),uo=r("Enable cuDNN auto-tuner"),oa=l(),ke=a("p"),Te=a("a"),mo=r("NVIDIA cuDNN"),_o=r("\xA0supports many algorithms to compute a convolution. Autotuner runs a short benchmark and selects the kernel with the best performance on a given hardware for a given input size."),ra=l(),re=a("p"),vo=r("Since we\u2019re using "),ts=a("strong"),yo=r("convolutional networks"),wo=r(" (other types currently not supported), we can enable cuDNN autotuner before launching the inference by setting:"),ia=l(),u(De.$$.fragment),la=l(),H=a("h3"),ie=a("a"),ss=a("span"),u(Pe.$$.fragment),go=l(),as=a("span"),bo=r("Use tf32 instead of fp32 (on Ampere and later CUDA devices)"),pa=l(),le=a("p"),$o=r("On Ampere and later CUDA devices matrix multiplications and convolutions can use the TensorFloat32 (TF32) mode for faster but slightly less accurate computations. By default PyTorch enables TF32 mode for convolutions but not matrix multiplications, and unless a network requires full float32 precision we recommend enabling this setting for matrix multiplications, too. It can significantly speed up computations with typically negligible loss of numerical accuracy. You can read more about it "),Ae=a("a"),jo=r("here"),Eo=r(". All you need to do is to add this before your inference:"),fa=l(),u(qe.$$.fragment),ca=l(),z=a("h2"),pe=a("a"),ns=a("span"),u(xe.$$.fragment),ko=l(),os=a("span"),To=r("Automatic mixed precision (AMP)"),ha=l(),D=a("p"),Do=r("If you use a CUDA GPU, you can take advantage of "),rs=a("code"),Po=r("torch.autocast"),Ao=r(" to perform inference roughly twice as fast at the cost of slightly lower precision. All you need to do is put your inference call inside an "),is=a("code"),qo=r("autocast"),xo=r(" context manager. The following example shows how to do it using Stable Diffusion text-to-image generation as an example:"),ua=l(),u(Ne.$$.fragment),da=l(),fe=a("p"),No=r("Despite the precision loss, in our experience the final image results look the same as the "),ls=a("code"),So=r("float32"),Uo=r(" versions. Feel free to experiment and report back!"),ma=l(),G=a("h2"),ce=a("a"),ps=a("span"),u(Se.$$.fragment),Io=l(),fs=a("span"),Co=r("Half precision weights"),_a=l(),P=a("p"),Ro=r("To save more GPU memory and get even more speed, you can load and run the model weights directly in half precision. This involves loading the float16 version of the weights, which was saved to a branch named "),cs=a("code"),Fo=r("fp16"),Mo=r(", and telling PyTorch to use the "),hs=a("code"),Ho=r("float16"),zo=r(" type when loading them:"),va=l(),u(Ue.$$.fragment),ya=l(),O=a("h2"),he=a("a"),us=a("span"),u(Ie.$$.fragment),Go=l(),ds=a("span"),Oo=r("Sliced attention for additional memory savings"),wa=l(),Qe=a("p"),Bo=r("For even additional memory savings, you can use a sliced version of attention that performs the computation in steps instead of all at once."),ga=l(),u(ue.$$.fragment),ba=l(),de=a("p"),Vo=r("To perform the attention computation sequentially over each head, you only need to invoke "),Je=a("a"),Lo=r("enable_attention_slicing()"),Xo=r(" in your pipeline before inference, like here:"),$a=l(),u(Ce.$$.fragment),ja=l(),Ze=a("p"),Yo=r("There\u2019s a small performance penalty of about 10% slower inference times, but this method allows you to use Stable Diffusion in as little as 3.2 GB of VRAM!"),Ea=l(),B=a("h2"),me=a("a"),ms=a("span"),u(Re.$$.fragment),Wo=l(),_s=a("span"),Ko=r("Offloading to CPU with accelerate for memory savings"),ka=l(),et=a("p"),Qo=r("For additional memory savings, you can offload the weights to CPU and load them to GPU when performing the forward pass."),Ta=l(),_e=a("p"),Jo=r("To perform CPU offloading, all you have to do is invoke "),vs=a("code"),Zo=r("enable_sequential_cpu_offload()"),er=r(":"),Da=l(),u(Fe.$$.fragment),Pa=l(),tt=a("p"),tr=r("And you can get the memory consumption to < 2GB."),Aa=l(),st=a("p"),sr=r("If is also possible to chain it with attention slicing for minimal memory consumption, running it in as little as < 800mb of GPU vRAM:"),qa=l(),u(Me.$$.fragment),xa=l(),V=a("h2"),ve=a("a"),ys=a("span"),u(He.$$.fragment),ar=l(),ws=a("span"),nr=r("Using Channels Last memory format"),Na=l(),at=a("p"),or=r("Channels last memory format is an alternative way of ordering NCHW tensors in memory preserving dimensions ordering. Channels last tensors ordered in such a way that channels become the densest dimension (aka storing images pixel-per-pixel). Since not all operators currently support channels last format it may result in a worst performance, so it\u2019s better to try it and see if it works for your model."),Sa=l(),nt=a("p"),rr=r("For example, in order to set the UNet model in our pipeline to use channels last format, we can use the following:"),Ua=l(),u(ze.$$.fragment),Ia=l(),L=a("h2"),ye=a("a"),gs=a("span"),u(Ge.$$.fragment),ir=l(),bs=a("span"),lr=r("Tracing"),Ca=l(),we=a("p"),pr=r("Tracing runs an example input tensor through your model, and captures the operations that are invoked as that input makes its way through the model\u2019s layers so that an executable or "),$s=a("code"),fr=r("ScriptFunction"),cr=r(" is returned that will be optimized using just-in-time compilation."),Ra=l(),ot=a("p"),hr=r("To trace our UNet model, we can use the following:"),Fa=l(),u(Oe.$$.fragment),Ma=l(),ge=a("p"),ur=r("Then we can replace the "),js=a("code"),dr=r("unet"),mr=r(" attribute of the pipeline with the traced model like the following"),Ha=l(),u(Be.$$.fragment),za=l(),X=a("h2"),be=a("a"),Es=a("span"),u(Ve.$$.fragment),_r=l(),ks=a("span"),vr=r("Memory Efficient Attention"),Ga=r(`

Recent work on optimizing the bandwitdh in the attention block have generated huge speed ups and gains in GPU memory usage. The most recent being Flash Attention (from @tridao, [code](https://github.com/HazyResearch/flash-attention), [paper](https://arxiv.org/pdf/2205.14135.pdf)) .
Here are the speedups we obtain on a few Nvidia GPUs when running the inference at 512x512 with a batch size of 1 (one prompt):
`),$e=a("table"),Ts=a("thead"),Y=a("tr"),Ds=a("th"),yr=r("GPU"),wr=l(),Ps=a("th"),gr=r("Base Attention FP16"),br=l(),As=a("th"),$r=r("Memory Efficient Attention FP16"),jr=l(),g=a("tbody"),W=a("tr"),qs=a("td"),Er=r("NVIDIA Tesla T4"),kr=l(),xs=a("td"),Tr=r("3.5it/s"),Dr=l(),Ns=a("td"),Pr=r("5.5it/s"),Ar=l(),K=a("tr"),Ss=a("td"),qr=r("NVIDIA 3060 RTX"),xr=l(),Us=a("td"),Nr=r("4.6it/s"),Sr=l(),Is=a("td"),Ur=r("7.8it/s"),Ir=l(),Q=a("tr"),Cs=a("td"),Cr=r("NVIDIA A10G"),Rr=l(),Rs=a("td"),Fr=r("8.88it/s"),Mr=l(),Fs=a("td"),Hr=r("15.6it/s"),zr=l(),J=a("tr"),Ms=a("td"),Gr=r("NVIDIA RTX A6000"),Or=l(),Hs=a("td"),Br=r("11.7it/s"),Vr=l(),zs=a("td"),Lr=r("21.09it/s"),Xr=l(),Z=a("tr"),Gs=a("td"),Yr=r("NVIDIA TITAN RTX"),Wr=l(),Os=a("td"),Kr=r("12.51it/s"),Qr=l(),Bs=a("td"),Jr=r("18.22it/s"),Zr=l(),ee=a("tr"),Vs=a("td"),ei=r("A100-SXM4-40GB"),ti=l(),Ls=a("td"),si=r("18.6it/s"),ai=l(),Xs=a("td"),ni=r("29.it/s"),oi=l(),te=a("tr"),Ys=a("td"),ri=r("A100-SXM-80GB"),ii=l(),Ws=a("td"),li=r("18.7it/s"),pi=l(),Ks=a("td"),fi=r("29.5it/s"),Oa=l(),rt=a("p"),ci=r("To leverage it just make sure you have:"),Ba=l(),A=a("ul"),Qs=a("li"),hi=r("PyTorch > 1.12"),ui=l(),Js=a("li"),di=r("Cuda available"),mi=l(),Le=a("li"),_i=r("Installed the "),Xe=a("a"),vi=r("xformers"),yi=r(" library"),Va=l(),u(Ye.$$.fragment),this.h()},l(e){const f=gp('[data-svelte="svelte-1phssyn"]',document.head);b=n(f,"META",{name:!0,content:!0}),f.forEach(s),T=p(e),E=n(e,"H1",{class:!0});var We=o(E);se=n(We,"A",{id:!0,class:!0,href:!0});var gi=o(se);Tt=n(gi,"SPAN",{});var bi=o(Tt);d(je.$$.fragment,bi),bi.forEach(s),gi.forEach(s),dn=p(We),Dt=n(We,"SPAN",{});var $i=o(Dt);mn=i($i,"Memory and speed"),$i.forEach(s),We.forEach(s),ea=p(e),ae=n(e,"P",{});var Xa=o(ae);_n=i(Xa,"We present some techniques and ideas to optimize \u{1F917} Diffusers "),Pt=n(Xa,"EM",{});var ji=o(Pt);vn=i(ji,"inference"),ji.forEach(s),yn=i(Xa," for memory or speed."),Xa.forEach(s),ta=p(e),ne=n(e,"TABLE",{});var Ya=o(ne);At=n(Ya,"THEAD",{});var Ei=o(At);x=n(Ei,"TR",{});var it=o(x);sa=n(it,"TH",{}),o(sa).forEach(s),wn=p(it),qt=n(it,"TH",{});var ki=o(qt);gn=i(ki,"Latency"),ki.forEach(s),bn=p(it),xt=n(it,"TH",{});var Ti=o(xt);$n=i(Ti,"Speedup"),Ti.forEach(s),it.forEach(s),Ei.forEach(s),jn=p(Ya),w=n(Ya,"TBODY",{});var $=o(w);N=n($,"TR",{});var lt=o(N);Nt=n(lt,"TD",{});var Di=o(Nt);En=i(Di,"original"),Di.forEach(s),kn=p(lt),St=n(lt,"TD",{});var Pi=o(St);Tn=i(Pi,"9.50s"),Pi.forEach(s),Dn=p(lt),Ut=n(lt,"TD",{});var Ai=o(Ut);Pn=i(Ai,"x1"),Ai.forEach(s),lt.forEach(s),An=p($),S=n($,"TR",{});var pt=o(S);It=n(pt,"TD",{});var qi=o(It);qn=i(qi,"cuDNN auto-tuner"),qi.forEach(s),xn=p(pt),Ct=n(pt,"TD",{});var xi=o(Ct);Nn=i(xi,"9.37s"),xi.forEach(s),Sn=p(pt),Rt=n(pt,"TD",{});var Ni=o(Rt);Un=i(Ni,"x1.01"),Ni.forEach(s),pt.forEach(s),In=p($),U=n($,"TR",{});var ft=o(U);Ft=n(ft,"TD",{});var Si=o(Ft);Cn=i(Si,"autocast (fp16)"),Si.forEach(s),Rn=p(ft),Mt=n(ft,"TD",{});var Ui=o(Mt);Fn=i(Ui,"5.47s"),Ui.forEach(s),Mn=p(ft),Ht=n(ft,"TD",{});var Ii=o(Ht);Hn=i(Ii,"x1.74"),Ii.forEach(s),ft.forEach(s),zn=p($),I=n($,"TR",{});var ct=o(I);zt=n(ct,"TD",{});var Ci=o(zt);Gn=i(Ci,"fp16"),Ci.forEach(s),On=p(ct),Gt=n(ct,"TD",{});var Ri=o(Gt);Bn=i(Ri,"3.61s"),Ri.forEach(s),Vn=p(ct),Ot=n(ct,"TD",{});var Fi=o(Ot);Ln=i(Fi,"x2.63"),Fi.forEach(s),ct.forEach(s),Xn=p($),C=n($,"TR",{});var ht=o(C);Bt=n(ht,"TD",{});var Mi=o(Bt);Yn=i(Mi,"channels last"),Mi.forEach(s),Wn=p(ht),Vt=n(ht,"TD",{});var Hi=o(Vt);Kn=i(Hi,"3.30s"),Hi.forEach(s),Qn=p(ht),Lt=n(ht,"TD",{});var zi=o(Lt);Jn=i(zi,"x2.88"),zi.forEach(s),ht.forEach(s),Zn=p($),R=n($,"TR",{});var ut=o(R);Xt=n(ut,"TD",{});var Gi=o(Xt);eo=i(Gi,"traced UNet"),Gi.forEach(s),to=p(ut),Yt=n(ut,"TD",{});var Oi=o(Yt);so=i(Oi,"3.21s"),Oi.forEach(s),ao=p(ut),Wt=n(ut,"TD",{});var Bi=o(Wt);no=i(Bi,"x2.96"),Bi.forEach(s),ut.forEach(s),oo=p($),F=n($,"TR",{});var dt=o(F);Kt=n(dt,"TD",{});var Vi=o(Kt);ro=i(Vi,"memory efficient attention"),Vi.forEach(s),io=p(dt),Qt=n(dt,"TD",{});var Li=o(Qt);lo=i(Li,"2.63s"),Li.forEach(s),po=p(dt),Jt=n(dt,"TD",{});var Xi=o(Jt);fo=i(Xi,"x3.61"),Xi.forEach(s),dt.forEach(s),$.forEach(s),Ya.forEach(s),aa=p(e),Ke=n(e,"EM",{});var Yi=o(Ke);co=i(Yi,`obtained on NVIDIA TITAN RTX by generating a single image of size 512x512 from
  the prompt "a photo of an astronaut riding a horse on mars" with 50 DDIM
  steps.`),Yi.forEach(s),na=p(e),M=n(e,"H2",{class:!0});var Wa=o(M);oe=n(Wa,"A",{id:!0,class:!0,href:!0});var Wi=o(oe);Zt=n(Wi,"SPAN",{});var Ki=o(Zt);d(Ee.$$.fragment,Ki),Ki.forEach(s),Wi.forEach(s),ho=p(Wa),es=n(Wa,"SPAN",{});var Qi=o(es);uo=i(Qi,"Enable cuDNN auto-tuner"),Qi.forEach(s),Wa.forEach(s),oa=p(e),ke=n(e,"P",{});var wi=o(ke);Te=n(wi,"A",{href:!0,rel:!0});var Ji=o(Te);mo=i(Ji,"NVIDIA cuDNN"),Ji.forEach(s),_o=i(wi,"\xA0supports many algorithms to compute a convolution. Autotuner runs a short benchmark and selects the kernel with the best performance on a given hardware for a given input size."),wi.forEach(s),ra=p(e),re=n(e,"P",{});var Ka=o(re);vo=i(Ka,"Since we\u2019re using "),ts=n(Ka,"STRONG",{});var Zi=o(ts);yo=i(Zi,"convolutional networks"),Zi.forEach(s),wo=i(Ka," (other types currently not supported), we can enable cuDNN autotuner before launching the inference by setting:"),Ka.forEach(s),ia=p(e),d(De.$$.fragment,e),la=p(e),H=n(e,"H3",{class:!0});var Qa=o(H);ie=n(Qa,"A",{id:!0,class:!0,href:!0});var el=o(ie);ss=n(el,"SPAN",{});var tl=o(ss);d(Pe.$$.fragment,tl),tl.forEach(s),el.forEach(s),go=p(Qa),as=n(Qa,"SPAN",{});var sl=o(as);bo=i(sl,"Use tf32 instead of fp32 (on Ampere and later CUDA devices)"),sl.forEach(s),Qa.forEach(s),pa=p(e),le=n(e,"P",{});var Ja=o(le);$o=i(Ja,"On Ampere and later CUDA devices matrix multiplications and convolutions can use the TensorFloat32 (TF32) mode for faster but slightly less accurate computations. By default PyTorch enables TF32 mode for convolutions but not matrix multiplications, and unless a network requires full float32 precision we recommend enabling this setting for matrix multiplications, too. It can significantly speed up computations with typically negligible loss of numerical accuracy. You can read more about it "),Ae=n(Ja,"A",{href:!0,rel:!0});var al=o(Ae);jo=i(al,"here"),al.forEach(s),Eo=i(Ja,". All you need to do is to add this before your inference:"),Ja.forEach(s),fa=p(e),d(qe.$$.fragment,e),ca=p(e),z=n(e,"H2",{class:!0});var Za=o(z);pe=n(Za,"A",{id:!0,class:!0,href:!0});var nl=o(pe);ns=n(nl,"SPAN",{});var ol=o(ns);d(xe.$$.fragment,ol),ol.forEach(s),nl.forEach(s),ko=p(Za),os=n(Za,"SPAN",{});var rl=o(os);To=i(rl,"Automatic mixed precision (AMP)"),rl.forEach(s),Za.forEach(s),ha=p(e),D=n(e,"P",{});var mt=o(D);Do=i(mt,"If you use a CUDA GPU, you can take advantage of "),rs=n(mt,"CODE",{});var il=o(rs);Po=i(il,"torch.autocast"),il.forEach(s),Ao=i(mt," to perform inference roughly twice as fast at the cost of slightly lower precision. All you need to do is put your inference call inside an "),is=n(mt,"CODE",{});var ll=o(is);qo=i(ll,"autocast"),ll.forEach(s),xo=i(mt," context manager. The following example shows how to do it using Stable Diffusion text-to-image generation as an example:"),mt.forEach(s),ua=p(e),d(Ne.$$.fragment,e),da=p(e),fe=n(e,"P",{});var en=o(fe);No=i(en,"Despite the precision loss, in our experience the final image results look the same as the "),ls=n(en,"CODE",{});var pl=o(ls);So=i(pl,"float32"),pl.forEach(s),Uo=i(en," versions. Feel free to experiment and report back!"),en.forEach(s),ma=p(e),G=n(e,"H2",{class:!0});var tn=o(G);ce=n(tn,"A",{id:!0,class:!0,href:!0});var fl=o(ce);ps=n(fl,"SPAN",{});var cl=o(ps);d(Se.$$.fragment,cl),cl.forEach(s),fl.forEach(s),Io=p(tn),fs=n(tn,"SPAN",{});var hl=o(fs);Co=i(hl,"Half precision weights"),hl.forEach(s),tn.forEach(s),_a=p(e),P=n(e,"P",{});var _t=o(P);Ro=i(_t,"To save more GPU memory and get even more speed, you can load and run the model weights directly in half precision. This involves loading the float16 version of the weights, which was saved to a branch named "),cs=n(_t,"CODE",{});var ul=o(cs);Fo=i(ul,"fp16"),ul.forEach(s),Mo=i(_t,", and telling PyTorch to use the "),hs=n(_t,"CODE",{});var dl=o(hs);Ho=i(dl,"float16"),dl.forEach(s),zo=i(_t," type when loading them:"),_t.forEach(s),va=p(e),d(Ue.$$.fragment,e),ya=p(e),O=n(e,"H2",{class:!0});var sn=o(O);he=n(sn,"A",{id:!0,class:!0,href:!0});var ml=o(he);us=n(ml,"SPAN",{});var _l=o(us);d(Ie.$$.fragment,_l),_l.forEach(s),ml.forEach(s),Go=p(sn),ds=n(sn,"SPAN",{});var vl=o(ds);Oo=i(vl,"Sliced attention for additional memory savings"),vl.forEach(s),sn.forEach(s),wa=p(e),Qe=n(e,"P",{});var yl=o(Qe);Bo=i(yl,"For even additional memory savings, you can use a sliced version of attention that performs the computation in steps instead of all at once."),yl.forEach(s),ga=p(e),d(ue.$$.fragment,e),ba=p(e),de=n(e,"P",{});var an=o(de);Vo=i(an,"To perform the attention computation sequentially over each head, you only need to invoke "),Je=n(an,"A",{href:!0});var wl=o(Je);Lo=i(wl,"enable_attention_slicing()"),wl.forEach(s),Xo=i(an," in your pipeline before inference, like here:"),an.forEach(s),$a=p(e),d(Ce.$$.fragment,e),ja=p(e),Ze=n(e,"P",{});var gl=o(Ze);Yo=i(gl,"There\u2019s a small performance penalty of about 10% slower inference times, but this method allows you to use Stable Diffusion in as little as 3.2 GB of VRAM!"),gl.forEach(s),Ea=p(e),B=n(e,"H2",{class:!0});var nn=o(B);me=n(nn,"A",{id:!0,class:!0,href:!0});var bl=o(me);ms=n(bl,"SPAN",{});var $l=o(ms);d(Re.$$.fragment,$l),$l.forEach(s),bl.forEach(s),Wo=p(nn),_s=n(nn,"SPAN",{});var jl=o(_s);Ko=i(jl,"Offloading to CPU with accelerate for memory savings"),jl.forEach(s),nn.forEach(s),ka=p(e),et=n(e,"P",{});var El=o(et);Qo=i(El,"For additional memory savings, you can offload the weights to CPU and load them to GPU when performing the forward pass."),El.forEach(s),Ta=p(e),_e=n(e,"P",{});var on=o(_e);Jo=i(on,"To perform CPU offloading, all you have to do is invoke "),vs=n(on,"CODE",{});var kl=o(vs);Zo=i(kl,"enable_sequential_cpu_offload()"),kl.forEach(s),er=i(on,":"),on.forEach(s),Da=p(e),d(Fe.$$.fragment,e),Pa=p(e),tt=n(e,"P",{});var Tl=o(tt);tr=i(Tl,"And you can get the memory consumption to < 2GB."),Tl.forEach(s),Aa=p(e),st=n(e,"P",{});var Dl=o(st);sr=i(Dl,"If is also possible to chain it with attention slicing for minimal memory consumption, running it in as little as < 800mb of GPU vRAM:"),Dl.forEach(s),qa=p(e),d(Me.$$.fragment,e),xa=p(e),V=n(e,"H2",{class:!0});var rn=o(V);ve=n(rn,"A",{id:!0,class:!0,href:!0});var Pl=o(ve);ys=n(Pl,"SPAN",{});var Al=o(ys);d(He.$$.fragment,Al),Al.forEach(s),Pl.forEach(s),ar=p(rn),ws=n(rn,"SPAN",{});var ql=o(ws);nr=i(ql,"Using Channels Last memory format"),ql.forEach(s),rn.forEach(s),Na=p(e),at=n(e,"P",{});var xl=o(at);or=i(xl,"Channels last memory format is an alternative way of ordering NCHW tensors in memory preserving dimensions ordering. Channels last tensors ordered in such a way that channels become the densest dimension (aka storing images pixel-per-pixel). Since not all operators currently support channels last format it may result in a worst performance, so it\u2019s better to try it and see if it works for your model."),xl.forEach(s),Sa=p(e),nt=n(e,"P",{});var Nl=o(nt);rr=i(Nl,"For example, in order to set the UNet model in our pipeline to use channels last format, we can use the following:"),Nl.forEach(s),Ua=p(e),d(ze.$$.fragment,e),Ia=p(e),L=n(e,"H2",{class:!0});var ln=o(L);ye=n(ln,"A",{id:!0,class:!0,href:!0});var Sl=o(ye);gs=n(Sl,"SPAN",{});var Ul=o(gs);d(Ge.$$.fragment,Ul),Ul.forEach(s),Sl.forEach(s),ir=p(ln),bs=n(ln,"SPAN",{});var Il=o(bs);lr=i(Il,"Tracing"),Il.forEach(s),ln.forEach(s),Ca=p(e),we=n(e,"P",{});var pn=o(we);pr=i(pn,"Tracing runs an example input tensor through your model, and captures the operations that are invoked as that input makes its way through the model\u2019s layers so that an executable or "),$s=n(pn,"CODE",{});var Cl=o($s);fr=i(Cl,"ScriptFunction"),Cl.forEach(s),cr=i(pn," is returned that will be optimized using just-in-time compilation."),pn.forEach(s),Ra=p(e),ot=n(e,"P",{});var Rl=o(ot);hr=i(Rl,"To trace our UNet model, we can use the following:"),Rl.forEach(s),Fa=p(e),d(Oe.$$.fragment,e),Ma=p(e),ge=n(e,"P",{});var fn=o(ge);ur=i(fn,"Then we can replace the "),js=n(fn,"CODE",{});var Fl=o(js);dr=i(Fl,"unet"),Fl.forEach(s),mr=i(fn," attribute of the pipeline with the traced model like the following"),fn.forEach(s),Ha=p(e),d(Be.$$.fragment,e),za=p(e),X=n(e,"H2",{class:!0});var cn=o(X);be=n(cn,"A",{id:!0,class:!0,href:!0});var Ml=o(be);Es=n(Ml,"SPAN",{});var Hl=o(Es);d(Ve.$$.fragment,Hl),Hl.forEach(s),Ml.forEach(s),_r=p(cn),ks=n(cn,"SPAN",{});var zl=o(ks);vr=i(zl,"Memory Efficient Attention"),zl.forEach(s),cn.forEach(s),Ga=i(e,`

Recent work on optimizing the bandwitdh in the attention block have generated huge speed ups and gains in GPU memory usage. The most recent being Flash Attention (from @tridao, [code](https://github.com/HazyResearch/flash-attention), [paper](https://arxiv.org/pdf/2205.14135.pdf)) .
Here are the speedups we obtain on a few Nvidia GPUs when running the inference at 512x512 with a batch size of 1 (one prompt):
`),$e=n(e,"TABLE",{});var hn=o($e);Ts=n(hn,"THEAD",{});var Gl=o(Ts);Y=n(Gl,"TR",{});var vt=o(Y);Ds=n(vt,"TH",{});var Ol=o(Ds);yr=i(Ol,"GPU"),Ol.forEach(s),wr=p(vt),Ps=n(vt,"TH",{});var Bl=o(Ps);gr=i(Bl,"Base Attention FP16"),Bl.forEach(s),br=p(vt),As=n(vt,"TH",{});var Vl=o(As);$r=i(Vl,"Memory Efficient Attention FP16"),Vl.forEach(s),vt.forEach(s),Gl.forEach(s),jr=p(hn),g=n(hn,"TBODY",{});var j=o(g);W=n(j,"TR",{});var yt=o(W);qs=n(yt,"TD",{});var Ll=o(qs);Er=i(Ll,"NVIDIA Tesla T4"),Ll.forEach(s),kr=p(yt),xs=n(yt,"TD",{});var Xl=o(xs);Tr=i(Xl,"3.5it/s"),Xl.forEach(s),Dr=p(yt),Ns=n(yt,"TD",{});var Yl=o(Ns);Pr=i(Yl,"5.5it/s"),Yl.forEach(s),yt.forEach(s),Ar=p(j),K=n(j,"TR",{});var wt=o(K);Ss=n(wt,"TD",{});var Wl=o(Ss);qr=i(Wl,"NVIDIA 3060 RTX"),Wl.forEach(s),xr=p(wt),Us=n(wt,"TD",{});var Kl=o(Us);Nr=i(Kl,"4.6it/s"),Kl.forEach(s),Sr=p(wt),Is=n(wt,"TD",{});var Ql=o(Is);Ur=i(Ql,"7.8it/s"),Ql.forEach(s),wt.forEach(s),Ir=p(j),Q=n(j,"TR",{});var gt=o(Q);Cs=n(gt,"TD",{});var Jl=o(Cs);Cr=i(Jl,"NVIDIA A10G"),Jl.forEach(s),Rr=p(gt),Rs=n(gt,"TD",{});var Zl=o(Rs);Fr=i(Zl,"8.88it/s"),Zl.forEach(s),Mr=p(gt),Fs=n(gt,"TD",{});var ep=o(Fs);Hr=i(ep,"15.6it/s"),ep.forEach(s),gt.forEach(s),zr=p(j),J=n(j,"TR",{});var bt=o(J);Ms=n(bt,"TD",{});var tp=o(Ms);Gr=i(tp,"NVIDIA RTX A6000"),tp.forEach(s),Or=p(bt),Hs=n(bt,"TD",{});var sp=o(Hs);Br=i(sp,"11.7it/s"),sp.forEach(s),Vr=p(bt),zs=n(bt,"TD",{});var ap=o(zs);Lr=i(ap,"21.09it/s"),ap.forEach(s),bt.forEach(s),Xr=p(j),Z=n(j,"TR",{});var $t=o(Z);Gs=n($t,"TD",{});var np=o(Gs);Yr=i(np,"NVIDIA TITAN RTX"),np.forEach(s),Wr=p($t),Os=n($t,"TD",{});var op=o(Os);Kr=i(op,"12.51it/s"),op.forEach(s),Qr=p($t),Bs=n($t,"TD",{});var rp=o(Bs);Jr=i(rp,"18.22it/s"),rp.forEach(s),$t.forEach(s),Zr=p(j),ee=n(j,"TR",{});var jt=o(ee);Vs=n(jt,"TD",{});var ip=o(Vs);ei=i(ip,"A100-SXM4-40GB"),ip.forEach(s),ti=p(jt),Ls=n(jt,"TD",{});var lp=o(Ls);si=i(lp,"18.6it/s"),lp.forEach(s),ai=p(jt),Xs=n(jt,"TD",{});var pp=o(Xs);ni=i(pp,"29.it/s"),pp.forEach(s),jt.forEach(s),oi=p(j),te=n(j,"TR",{});var Et=o(te);Ys=n(Et,"TD",{});var fp=o(Ys);ri=i(fp,"A100-SXM-80GB"),fp.forEach(s),ii=p(Et),Ws=n(Et,"TD",{});var cp=o(Ws);li=i(cp,"18.7it/s"),cp.forEach(s),pi=p(Et),Ks=n(Et,"TD",{});var hp=o(Ks);fi=i(hp,"29.5it/s"),hp.forEach(s),Et.forEach(s),j.forEach(s),hn.forEach(s),Oa=p(e),rt=n(e,"P",{});var up=o(rt);ci=i(up,"To leverage it just make sure you have:"),up.forEach(s),Ba=p(e),A=n(e,"UL",{});var kt=o(A);Qs=n(kt,"LI",{});var dp=o(Qs);hi=i(dp,"PyTorch > 1.12"),dp.forEach(s),ui=p(kt),Js=n(kt,"LI",{});var mp=o(Js);di=i(mp,"Cuda available"),mp.forEach(s),mi=p(kt),Le=n(kt,"LI",{});var un=o(Le);_i=i(un,"Installed the "),Xe=n(un,"A",{href:!0,rel:!0});var _p=o(Xe);vi=i(_p,"xformers"),_p.forEach(s),yi=i(un," library"),un.forEach(s),kt.forEach(s),Va=p(e),d(Ye.$$.fragment,e),this.h()},h(){h(b,"name","hf:doc:metadata"),h(b,"content",JSON.stringify(kp)),h(se,"id","memory-and-speed"),h(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(se,"href","#memory-and-speed"),h(E,"class","relative group"),h(oe,"id","enable-cudnn-autotuner"),h(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oe,"href","#enable-cudnn-autotuner"),h(M,"class","relative group"),h(Te,"href","https://developer.nvidia.com/cudnn"),h(Te,"rel","nofollow"),h(ie,"id","use-tf32-instead-of-fp32-on-ampere-and-later-cuda-devices"),h(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ie,"href","#use-tf32-instead-of-fp32-on-ampere-and-later-cuda-devices"),h(H,"class","relative group"),h(Ae,"href","https://huggingface.co/docs/transformers/v4.18.0/en/performance#tf32"),h(Ae,"rel","nofollow"),h(pe,"id","automatic-mixed-precision-amp"),h(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(pe,"href","#automatic-mixed-precision-amp"),h(z,"class","relative group"),h(ce,"id","half-precision-weights"),h(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ce,"href","#half-precision-weights"),h(G,"class","relative group"),h(he,"id","sliced-attention-for-additional-memory-savings"),h(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(he,"href","#sliced-attention-for-additional-memory-savings"),h(O,"class","relative group"),h(Je,"href","/docs/diffusers/v0.7.0/en/api/pipelines/stable_diffusion#diffusers.StableDiffusionPipeline.enable_attention_slicing"),h(me,"id","offloading-to-cpu-with-accelerate-for-memory-savings"),h(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(me,"href","#offloading-to-cpu-with-accelerate-for-memory-savings"),h(B,"class","relative group"),h(ve,"id","using-channels-last-memory-format"),h(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ve,"href","#using-channels-last-memory-format"),h(V,"class","relative group"),h(ye,"id","tracing"),h(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ye,"href","#tracing"),h(L,"class","relative group"),h(be,"id","memory-efficient-attention"),h(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(be,"href","#memory-efficient-attention"),h(X,"class","relative group"),h(Xe,"href","https://github.com/facebookresearch/xformers"),h(Xe,"rel","nofollow")},m(e,f){t(document.head,b),c(e,T,f),c(e,E,f),t(E,se),t(se,Tt),m(je,Tt,null),t(E,dn),t(E,Dt),t(Dt,mn),c(e,ea,f),c(e,ae,f),t(ae,_n),t(ae,Pt),t(Pt,vn),t(ae,yn),c(e,ta,f),c(e,ne,f),t(ne,At),t(At,x),t(x,sa),t(x,wn),t(x,qt),t(qt,gn),t(x,bn),t(x,xt),t(xt,$n),t(ne,jn),t(ne,w),t(w,N),t(N,Nt),t(Nt,En),t(N,kn),t(N,St),t(St,Tn),t(N,Dn),t(N,Ut),t(Ut,Pn),t(w,An),t(w,S),t(S,It),t(It,qn),t(S,xn),t(S,Ct),t(Ct,Nn),t(S,Sn),t(S,Rt),t(Rt,Un),t(w,In),t(w,U),t(U,Ft),t(Ft,Cn),t(U,Rn),t(U,Mt),t(Mt,Fn),t(U,Mn),t(U,Ht),t(Ht,Hn),t(w,zn),t(w,I),t(I,zt),t(zt,Gn),t(I,On),t(I,Gt),t(Gt,Bn),t(I,Vn),t(I,Ot),t(Ot,Ln),t(w,Xn),t(w,C),t(C,Bt),t(Bt,Yn),t(C,Wn),t(C,Vt),t(Vt,Kn),t(C,Qn),t(C,Lt),t(Lt,Jn),t(w,Zn),t(w,R),t(R,Xt),t(Xt,eo),t(R,to),t(R,Yt),t(Yt,so),t(R,ao),t(R,Wt),t(Wt,no),t(w,oo),t(w,F),t(F,Kt),t(Kt,ro),t(F,io),t(F,Qt),t(Qt,lo),t(F,po),t(F,Jt),t(Jt,fo),c(e,aa,f),c(e,Ke,f),t(Ke,co),c(e,na,f),c(e,M,f),t(M,oe),t(oe,Zt),m(Ee,Zt,null),t(M,ho),t(M,es),t(es,uo),c(e,oa,f),c(e,ke,f),t(ke,Te),t(Te,mo),t(ke,_o),c(e,ra,f),c(e,re,f),t(re,vo),t(re,ts),t(ts,yo),t(re,wo),c(e,ia,f),m(De,e,f),c(e,la,f),c(e,H,f),t(H,ie),t(ie,ss),m(Pe,ss,null),t(H,go),t(H,as),t(as,bo),c(e,pa,f),c(e,le,f),t(le,$o),t(le,Ae),t(Ae,jo),t(le,Eo),c(e,fa,f),m(qe,e,f),c(e,ca,f),c(e,z,f),t(z,pe),t(pe,ns),m(xe,ns,null),t(z,ko),t(z,os),t(os,To),c(e,ha,f),c(e,D,f),t(D,Do),t(D,rs),t(rs,Po),t(D,Ao),t(D,is),t(is,qo),t(D,xo),c(e,ua,f),m(Ne,e,f),c(e,da,f),c(e,fe,f),t(fe,No),t(fe,ls),t(ls,So),t(fe,Uo),c(e,ma,f),c(e,G,f),t(G,ce),t(ce,ps),m(Se,ps,null),t(G,Io),t(G,fs),t(fs,Co),c(e,_a,f),c(e,P,f),t(P,Ro),t(P,cs),t(cs,Fo),t(P,Mo),t(P,hs),t(hs,Ho),t(P,zo),c(e,va,f),m(Ue,e,f),c(e,ya,f),c(e,O,f),t(O,he),t(he,us),m(Ie,us,null),t(O,Go),t(O,ds),t(ds,Oo),c(e,wa,f),c(e,Qe,f),t(Qe,Bo),c(e,ga,f),m(ue,e,f),c(e,ba,f),c(e,de,f),t(de,Vo),t(de,Je),t(Je,Lo),t(de,Xo),c(e,$a,f),m(Ce,e,f),c(e,ja,f),c(e,Ze,f),t(Ze,Yo),c(e,Ea,f),c(e,B,f),t(B,me),t(me,ms),m(Re,ms,null),t(B,Wo),t(B,_s),t(_s,Ko),c(e,ka,f),c(e,et,f),t(et,Qo),c(e,Ta,f),c(e,_e,f),t(_e,Jo),t(_e,vs),t(vs,Zo),t(_e,er),c(e,Da,f),m(Fe,e,f),c(e,Pa,f),c(e,tt,f),t(tt,tr),c(e,Aa,f),c(e,st,f),t(st,sr),c(e,qa,f),m(Me,e,f),c(e,xa,f),c(e,V,f),t(V,ve),t(ve,ys),m(He,ys,null),t(V,ar),t(V,ws),t(ws,nr),c(e,Na,f),c(e,at,f),t(at,or),c(e,Sa,f),c(e,nt,f),t(nt,rr),c(e,Ua,f),m(ze,e,f),c(e,Ia,f),c(e,L,f),t(L,ye),t(ye,gs),m(Ge,gs,null),t(L,ir),t(L,bs),t(bs,lr),c(e,Ca,f),c(e,we,f),t(we,pr),t(we,$s),t($s,fr),t(we,cr),c(e,Ra,f),c(e,ot,f),t(ot,hr),c(e,Fa,f),m(Oe,e,f),c(e,Ma,f),c(e,ge,f),t(ge,ur),t(ge,js),t(js,dr),t(ge,mr),c(e,Ha,f),m(Be,e,f),c(e,za,f),c(e,X,f),t(X,be),t(be,Es),m(Ve,Es,null),t(X,_r),t(X,ks),t(ks,vr),c(e,Ga,f),c(e,$e,f),t($e,Ts),t(Ts,Y),t(Y,Ds),t(Ds,yr),t(Y,wr),t(Y,Ps),t(Ps,gr),t(Y,br),t(Y,As),t(As,$r),t($e,jr),t($e,g),t(g,W),t(W,qs),t(qs,Er),t(W,kr),t(W,xs),t(xs,Tr),t(W,Dr),t(W,Ns),t(Ns,Pr),t(g,Ar),t(g,K),t(K,Ss),t(Ss,qr),t(K,xr),t(K,Us),t(Us,Nr),t(K,Sr),t(K,Is),t(Is,Ur),t(g,Ir),t(g,Q),t(Q,Cs),t(Cs,Cr),t(Q,Rr),t(Q,Rs),t(Rs,Fr),t(Q,Mr),t(Q,Fs),t(Fs,Hr),t(g,zr),t(g,J),t(J,Ms),t(Ms,Gr),t(J,Or),t(J,Hs),t(Hs,Br),t(J,Vr),t(J,zs),t(zs,Lr),t(g,Xr),t(g,Z),t(Z,Gs),t(Gs,Yr),t(Z,Wr),t(Z,Os),t(Os,Kr),t(Z,Qr),t(Z,Bs),t(Bs,Jr),t(g,Zr),t(g,ee),t(ee,Vs),t(Vs,ei),t(ee,ti),t(ee,Ls),t(Ls,si),t(ee,ai),t(ee,Xs),t(Xs,ni),t(g,oi),t(g,te),t(te,Ys),t(Ys,ri),t(te,ii),t(te,Ws),t(Ws,li),t(te,pi),t(te,Ks),t(Ks,fi),c(e,Oa,f),c(e,rt,f),t(rt,ci),c(e,Ba,f),c(e,A,f),t(A,Qs),t(Qs,hi),t(A,ui),t(A,Js),t(Js,di),t(A,mi),t(A,Le),t(Le,_i),t(Le,Xe),t(Xe,vi),t(Le,yi),c(e,Va,f),m(Ye,e,f),La=!0},p(e,[f]){const We={};f&2&&(We.$$scope={dirty:f,ctx:e}),ue.$set(We)},i(e){La||(_(je.$$.fragment,e),_(Ee.$$.fragment,e),_(De.$$.fragment,e),_(Pe.$$.fragment,e),_(qe.$$.fragment,e),_(xe.$$.fragment,e),_(Ne.$$.fragment,e),_(Se.$$.fragment,e),_(Ue.$$.fragment,e),_(Ie.$$.fragment,e),_(ue.$$.fragment,e),_(Ce.$$.fragment,e),_(Re.$$.fragment,e),_(Fe.$$.fragment,e),_(Me.$$.fragment,e),_(He.$$.fragment,e),_(ze.$$.fragment,e),_(Ge.$$.fragment,e),_(Oe.$$.fragment,e),_(Be.$$.fragment,e),_(Ve.$$.fragment,e),_(Ye.$$.fragment,e),La=!0)},o(e){v(je.$$.fragment,e),v(Ee.$$.fragment,e),v(De.$$.fragment,e),v(Pe.$$.fragment,e),v(qe.$$.fragment,e),v(xe.$$.fragment,e),v(Ne.$$.fragment,e),v(Se.$$.fragment,e),v(Ue.$$.fragment,e),v(Ie.$$.fragment,e),v(ue.$$.fragment,e),v(Ce.$$.fragment,e),v(Re.$$.fragment,e),v(Fe.$$.fragment,e),v(Me.$$.fragment,e),v(He.$$.fragment,e),v(ze.$$.fragment,e),v(Ge.$$.fragment,e),v(Oe.$$.fragment,e),v(Be.$$.fragment,e),v(Ve.$$.fragment,e),v(Ye.$$.fragment,e),La=!1},d(e){s(b),e&&s(T),e&&s(E),y(je),e&&s(ea),e&&s(ae),e&&s(ta),e&&s(ne),e&&s(aa),e&&s(Ke),e&&s(na),e&&s(M),y(Ee),e&&s(oa),e&&s(ke),e&&s(ra),e&&s(re),e&&s(ia),y(De,e),e&&s(la),e&&s(H),y(Pe),e&&s(pa),e&&s(le),e&&s(fa),y(qe,e),e&&s(ca),e&&s(z),y(xe),e&&s(ha),e&&s(D),e&&s(ua),y(Ne,e),e&&s(da),e&&s(fe),e&&s(ma),e&&s(G),y(Se),e&&s(_a),e&&s(P),e&&s(va),y(Ue,e),e&&s(ya),e&&s(O),y(Ie),e&&s(wa),e&&s(Qe),e&&s(ga),y(ue,e),e&&s(ba),e&&s(de),e&&s($a),y(Ce,e),e&&s(ja),e&&s(Ze),e&&s(Ea),e&&s(B),y(Re),e&&s(ka),e&&s(et),e&&s(Ta),e&&s(_e),e&&s(Da),y(Fe,e),e&&s(Pa),e&&s(tt),e&&s(Aa),e&&s(st),e&&s(qa),y(Me,e),e&&s(xa),e&&s(V),y(He),e&&s(Na),e&&s(at),e&&s(Sa),e&&s(nt),e&&s(Ua),y(ze,e),e&&s(Ia),e&&s(L),y(Ge),e&&s(Ca),e&&s(we),e&&s(Ra),e&&s(ot),e&&s(Fa),y(Oe,e),e&&s(Ma),e&&s(ge),e&&s(Ha),y(Be,e),e&&s(za),e&&s(X),y(Ve),e&&s(Ga),e&&s($e),e&&s(Oa),e&&s(rt),e&&s(Ba),e&&s(A),e&&s(Va),y(Ye,e)}}}const kp={local:"memory-and-speed",sections:[{local:"enable-cudnn-autotuner",sections:[{local:"use-tf32-instead-of-fp32-on-ampere-and-later-cuda-devices",title:"Use tf32 instead of fp32 (on Ampere and later CUDA devices)"}],title:"Enable cuDNN auto-tuner"},{local:"automatic-mixed-precision-amp",title:"Automatic mixed precision (AMP)"},{local:"half-precision-weights",title:"Half precision weights"},{local:"sliced-attention-for-additional-memory-savings",title:"Sliced attention for additional memory savings"},{local:"offloading-to-cpu-with-accelerate-for-memory-savings",title:"Offloading to CPU with accelerate for memory savings"},{local:"using-channels-last-memory-format",title:"Using Channels Last memory format"},{local:"tracing",title:"Tracing"},{local:"memory-efficient-attention",title:"Memory Efficient Attention"}],title:"Memory and speed"};function Tp(Zs){return bp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xp extends vp{constructor(b){super();yp(this,b,Tp,Ep,wp,{})}}export{xp as default,kp as metadata};
