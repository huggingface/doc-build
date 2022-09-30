import{S as za,i as Ia,s as Ma,e as n,k as c,w as f,t as l,M as Va,c as o,d as t,m as u,a as r,x as m,h as p,b as h,G as s,g as i,y as d,q as _,o as v,B as w,v as Oa}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ha}from"../../chunks/Tip-hf-doc-builder.js";import{I as W}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as K}from"../../chunks/CodeBlock-hf-doc-builder.js";function Ga(Xe){let y;return{c(){y=l("Attention slicing is useful even if a batch size of just 1 is used - as long as the model uses more than one attention head. If there is more than one attention head the *QK^T* attention matrix can be computed sequentially for each head which can save a significant amount of memory.")},l(b){y=p(b,"Attention slicing is useful even if a batch size of just 1 is used - as long as the model uses more than one attention head. If there is more than one attention head the *QK^T* attention matrix can be computed sequentially for each head which can save a significant amount of memory.")},m(b,g){i(b,y,g)},d(b){b&&t(y)}}}function La(Xe){let y,b,g,q,xe,Q,Bt,Ee,Rt,Ye,N,Wt,Pe,Kt,Qt,Je,de,Xt,Ze,_e,Yt,et,k,S,Ae,X,Jt,De,Zt,tt,Y,J,es,ts,st,C,ss,Te,as,ns,at,Z,nt,x,U,qe,ee,os,Ne,rs,ot,F,is,te,ls,ps,rt,se,it,E,z,Se,ae,cs,Ce,us,lt,j,hs,Ue,fs,ms,Fe,ds,_s,pt,ne,ct,I,vs,ze,ws,ys,ut,P,M,Ie,oe,gs,Me,bs,ht,$,js,Ve,$s,ks,Oe,xs,Es,ft,re,mt,A,V,He,ie,Ps,Ge,As,dt,ve,Ds,_t,O,vt,H,Ts,we,qs,Ns,wt,le,yt,ye,Ss,gt,D,G,Le,pe,Cs,Be,Us,bt,ge,Fs,jt,be,zs,$t,ce,kt,T,L,Re,ue,Is,We,Ms,xt,B,Vs,Ke,Os,Hs,Et,je,Gs,Pt,he,At,R,Ls,Qe,Bs,Rs,Dt,fe,Tt;return Q=new W({}),X=new W({}),Z=new K({props:{code:`import torch

torch.backends.cudnn.benchmark = True`,highlighted:`<span class="hljs-keyword">import</span> torch

torch.backends.cudnn.benchmark = <span class="hljs-literal">True</span>`}}),ee=new W({}),se=new K({props:{code:`import torch

torch.backends.cuda.matmul.allow_tf32 = True`,highlighted:`<span class="hljs-keyword">import</span> torch

torch.backends.cuda.matmul.allow_tf32 = <span class="hljs-literal">True</span>`}}),ae=new W({}),ne=new K({props:{code:`from torch import autocast
from diffusers import StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained("CompVis/stable-diffusion-v1-4", use_auth_token=True)
pipe = pipe.to("cuda")

prompt = "a photo of an astronaut riding a horse on mars"
with autocast("cuda"):
    image = pipe(prompt).images[0]  `,highlighted:`<span class="hljs-keyword">from</span> torch <span class="hljs-keyword">import</span> autocast
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>, use_auth_token=<span class="hljs-literal">True</span>)
pipe = pipe.to(<span class="hljs-string">&quot;cuda&quot;</span>)

prompt = <span class="hljs-string">&quot;a photo of an astronaut riding a horse on mars&quot;</span>
<span class="hljs-keyword">with</span> autocast(<span class="hljs-string">&quot;cuda&quot;</span>):
    image = pipe(prompt).images[<span class="hljs-number">0</span>]  `}}),oe=new W({}),re=new K({props:{code:`pipe = StableDiffusionPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4",
    revision="fp16",
    torch_dtype=torch.float16,
    use_auth_token=True
)`,highlighted:`pipe = StableDiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>,
    revision=<span class="hljs-string">&quot;fp16&quot;</span>,
    torch_dtype=torch.float16,
    use_auth_token=<span class="hljs-literal">True</span>
)`}}),ie=new W({}),O=new Ha({props:{$$slots:{default:[Ga]},$$scope:{ctx:Xe}}}),le=new K({props:{code:`import torch
from diffusers import StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4",
    revision="fp16",
    torch_dtype=torch.float16,
    use_auth_token=True
)
pipe = pipe.to("cuda")

prompt = "a photo of an astronaut riding a horse on mars"
pipe.enable_attention_slicing()
with torch.autocast("cuda"):
    image = pipe(prompt).images[0]  `,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>,
    revision=<span class="hljs-string">&quot;fp16&quot;</span>,
    torch_dtype=torch.float16,
    use_auth_token=<span class="hljs-literal">True</span>
)
pipe = pipe.to(<span class="hljs-string">&quot;cuda&quot;</span>)

prompt = <span class="hljs-string">&quot;a photo of an astronaut riding a horse on mars&quot;</span>
pipe.enable_attention_slicing()
<span class="hljs-keyword">with</span> torch.autocast(<span class="hljs-string">&quot;cuda&quot;</span>):
    image = pipe(prompt).images[<span class="hljs-number">0</span>]  `}}),pe=new W({}),ce=new K({props:{code:`print(pipe.unet.conv_out.state_dict()["weight"].stride())  # (2880, 9, 3, 1)
pipe.unet.to(memory_format=torch.channels_last)  # in-place operation
print(
    pipe.unet.conv_out.state_dict()["weight"].stride()
)  # (2880, 1, 960, 320) haveing a stride of 1 for the 2nd dimension proves that it works`,highlighted:`<span class="hljs-built_in">print</span>(pipe.unet.conv_out.state_dict()[<span class="hljs-string">&quot;weight&quot;</span>].stride())  <span class="hljs-comment"># (2880, 9, 3, 1)</span>
pipe.unet.to(memory_format=torch.channels_last)  <span class="hljs-comment"># in-place operation</span>
<span class="hljs-built_in">print</span>(
    pipe.unet.conv_out.state_dict()[<span class="hljs-string">&quot;weight&quot;</span>].stride()
)  <span class="hljs-comment"># (2880, 1, 960, 320) haveing a stride of 1 for the 2nd dimension proves that it works</span>`}}),ue=new W({}),he=new K({props:{code:`import time
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
    "CompVis/stable-diffusion-v1-4",
    # scheduler=scheduler,
    use_auth_token=True,
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
    <span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>,
    <span class="hljs-comment"># scheduler=scheduler,</span>
    use_auth_token=<span class="hljs-literal">True</span>,
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
unet_traced.save(<span class="hljs-string">&quot;unet_traced.pt&quot;</span>)`}}),fe=new K({props:{code:`from diffusers import StableDiffusionPipeline
import torch
from dataclasses import dataclass


@dataclass
class UNet2DConditionOutput:
    sample: torch.FloatTensor


pipe = StableDiffusionPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4",
    # scheduler=scheduler,
    use_auth_token=True,
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
    <span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>,
    <span class="hljs-comment"># scheduler=scheduler,</span>
    use_auth_token=<span class="hljs-literal">True</span>,
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
    image = pipe([prompt] * <span class="hljs-number">1</span>, num_inference_steps=<span class="hljs-number">50</span>).images[<span class="hljs-number">0</span>]`}}),{c(){y=n("meta"),b=c(),g=n("h1"),q=n("a"),xe=n("span"),f(Q.$$.fragment),Bt=c(),Ee=n("span"),Rt=l("Memory and speed"),Ye=c(),N=n("p"),Wt=l("We present some techniques and ideas to optimize \u{1F917} Diffusers "),Pe=n("em"),Kt=l("inference"),Qt=l(" for memory or speed."),Je=c(),de=n("table"),Xt=l(`&lt;tr>
 &lt;td>
 &lt;td>Latency
 &lt;td>Speedup
&lt;tr>
&lt;tr>
 &lt;td>original
 &lt;td>9.50s
 &lt;td>x1
&lt;tr>
&lt;tr>
 &lt;td>cuDNN auto-tuner
 &lt;td>9.37s
 &lt;td>x1.01
&lt;tr>
 &lt;td>autocast (fp16)
 &lt;td>5.47s
 &lt;td>x1.91
&lt;tr>
 &lt;td>fp16
 &lt;td>3.61s
 &lt;td>x2.91
&lt;tr>
 &lt;td>channels last
 &lt;td>3.30s
 &lt;td>x2.87
&lt;tr>
&lt;tr>
 &lt;td>traced UNet
 &lt;td>3.21s
 &lt;td>x2.96`),Ze=c(),_e=n("em"),Yt=l('obtained on NVIDIA TITAN RTX by generating a single image of size 512x512 from the prompt "a photo of an astronaut riding a horse on mars" with 50 DDIM steps.'),et=c(),k=n("h2"),S=n("a"),Ae=n("span"),f(X.$$.fragment),Jt=c(),De=n("span"),Zt=l("Enable cuDNN auto-tuner"),tt=c(),Y=n("p"),J=n("a"),es=l("NVIDIA cuDNN"),ts=l("\xA0supports many algorithms to compute a convolution. Autotuner runs a short benchmark and selects the kernel with the best performance on a given hardware for a given input size."),st=c(),C=n("p"),ss=l("Since we\u2019re using "),Te=n("strong"),as=l("convolutional networks"),ns=l(" (other types currently not supported), we can enable cuDNN autotuner before launching the inference by setting:"),at=c(),f(Z.$$.fragment),nt=c(),x=n("h3"),U=n("a"),qe=n("span"),f(ee.$$.fragment),os=c(),Ne=n("span"),rs=l("Use tf32 instead of fp32 (on Ampere and later CUDA devices)"),ot=c(),F=n("p"),is=l("On Ampere and later CUDA devices matrix multiplications and convolutions can use the TensorFloat32 (TF32) mode for faster but slightly less accurate computations. By default PyTorch enables TF32 mode for convolutions but not matrix multiplications, and unless a network requires full float32 precision we recommend enabling this setting for matrix multiplications, too. It can significantly speed up computations with typically negligible loss of numerical accuracy. You can read more about it "),te=n("a"),ls=l("here"),ps=l(". All you need to do is to add this before your inference:"),rt=c(),f(se.$$.fragment),it=c(),E=n("h2"),z=n("a"),Se=n("span"),f(ae.$$.fragment),cs=c(),Ce=n("span"),us=l("Automatic mixed precision (AMP)"),lt=c(),j=n("p"),hs=l("If you use a CUDA GPU, you can take advantage of "),Ue=n("code"),fs=l("torch.autocast"),ms=l(" to perform inference roughly twice as fast at the cost of slightly lower precision. All you need to do is put your inference call inside an "),Fe=n("code"),ds=l("autocast"),_s=l(" context manager. The following example shows how to do it using Stable Diffusion text-to-image generation as an example:"),pt=c(),f(ne.$$.fragment),ct=c(),I=n("p"),vs=l("Despite the precision loss, in our experience the final image results look the same as the "),ze=n("code"),ws=l("float32"),ys=l(" versions. Feel free to experiment and report back!"),ut=c(),P=n("h2"),M=n("a"),Ie=n("span"),f(oe.$$.fragment),gs=c(),Me=n("span"),bs=l("Half precision weights"),ht=c(),$=n("p"),js=l("To save more GPU memory, you can load the model weights directly in half precision. This involves loading the float16 version of the weights, which was saved to a branch named "),Ve=n("code"),$s=l("fp16"),ks=l(", and telling PyTorch to use the "),Oe=n("code"),xs=l("float16"),Es=l(" type when loading them:"),ft=c(),f(re.$$.fragment),mt=c(),A=n("h2"),V=n("a"),He=n("span"),f(ie.$$.fragment),Ps=c(),Ge=n("span"),As=l("Sliced attention for additional memory savings"),dt=c(),ve=n("p"),Ds=l("For even additional memory savings, you can use a sliced version of attention that performs the computation in steps instead of all at once."),_t=c(),f(O.$$.fragment),vt=c(),H=n("p"),Ts=l("To perform the attention computation sequentially over each head, you only need to invoke "),we=n("a"),qs=l("enable_attention_slicing()"),Ns=l(" in your pipeline before inference, like here:"),wt=c(),f(le.$$.fragment),yt=c(),ye=n("p"),Ss=l("There\u2019s a small performance penalty of about 10% slower inference times, but this method allows you to use Stable Diffusion in as little as 3.2 GB of VRAM!"),gt=c(),D=n("h2"),G=n("a"),Le=n("span"),f(pe.$$.fragment),Cs=c(),Be=n("span"),Us=l("Using Channels Last memory format"),bt=c(),ge=n("p"),Fs=l("Channels last memory format is an alternative way of ordering NCHW tensors in memory preserving dimensions ordering. Channels last tensors ordered in such a way that channels become the densest dimension (aka storing images pixel-per-pixel). Since not all operators currently support channels last format it may result in a worst performance, so it\u2019s better to try it and see if it works for your model."),jt=c(),be=n("p"),zs=l("For example, in order to set the UNet model in our pipeline to use channels last format, we can use the following:"),$t=c(),f(ce.$$.fragment),kt=c(),T=n("h2"),L=n("a"),Re=n("span"),f(ue.$$.fragment),Is=c(),We=n("span"),Ms=l("Tracing"),xt=c(),B=n("p"),Vs=l("Tracing runs an example input tensor through your model, and captures the operations that are invoked as that input makes its way through the model\u2019s layers so that an executable or "),Ke=n("code"),Os=l("ScriptFunction"),Hs=l(" is returned that will be optimized using just-in-time compilation."),Et=c(),je=n("p"),Gs=l("To trace our UNet model, we can use the following:"),Pt=c(),f(he.$$.fragment),At=c(),R=n("p"),Ls=l("Then we can replace the "),Qe=n("code"),Bs=l("unet"),Rs=l(" attribute of the pipeline with the traced model like the following"),Dt=c(),f(fe.$$.fragment),this.h()},l(e){const a=Va('[data-svelte="svelte-1phssyn"]',document.head);y=o(a,"META",{name:!0,content:!0}),a.forEach(t),b=u(e),g=o(e,"H1",{class:!0});var me=r(g);q=o(me,"A",{id:!0,class:!0,href:!0});var Ks=r(q);xe=o(Ks,"SPAN",{});var Qs=r(xe);m(Q.$$.fragment,Qs),Qs.forEach(t),Ks.forEach(t),Bt=u(me),Ee=o(me,"SPAN",{});var Xs=r(Ee);Rt=p(Xs,"Memory and speed"),Xs.forEach(t),me.forEach(t),Ye=u(e),N=o(e,"P",{});var qt=r(N);Wt=p(qt,"We present some techniques and ideas to optimize \u{1F917} Diffusers "),Pe=o(qt,"EM",{});var Ys=r(Pe);Kt=p(Ys,"inference"),Ys.forEach(t),Qt=p(qt," for memory or speed."),qt.forEach(t),Je=u(e),de=o(e,"TABLE",{});var Js=r(de);Xt=p(Js,`&lt;tr>
 &lt;td>
 &lt;td>Latency
 &lt;td>Speedup
&lt;tr>
&lt;tr>
 &lt;td>original
 &lt;td>9.50s
 &lt;td>x1
&lt;tr>
&lt;tr>
 &lt;td>cuDNN auto-tuner
 &lt;td>9.37s
 &lt;td>x1.01
&lt;tr>
 &lt;td>autocast (fp16)
 &lt;td>5.47s
 &lt;td>x1.91
&lt;tr>
 &lt;td>fp16
 &lt;td>3.61s
 &lt;td>x2.91
&lt;tr>
 &lt;td>channels last
 &lt;td>3.30s
 &lt;td>x2.87
&lt;tr>
&lt;tr>
 &lt;td>traced UNet
 &lt;td>3.21s
 &lt;td>x2.96`),Js.forEach(t),Ze=u(e),_e=o(e,"EM",{});var Zs=r(_e);Yt=p(Zs,'obtained on NVIDIA TITAN RTX by generating a single image of size 512x512 from the prompt "a photo of an astronaut riding a horse on mars" with 50 DDIM steps.'),Zs.forEach(t),et=u(e),k=o(e,"H2",{class:!0});var Nt=r(k);S=o(Nt,"A",{id:!0,class:!0,href:!0});var ea=r(S);Ae=o(ea,"SPAN",{});var ta=r(Ae);m(X.$$.fragment,ta),ta.forEach(t),ea.forEach(t),Jt=u(Nt),De=o(Nt,"SPAN",{});var sa=r(De);Zt=p(sa,"Enable cuDNN auto-tuner"),sa.forEach(t),Nt.forEach(t),tt=u(e),Y=o(e,"P",{});var Ws=r(Y);J=o(Ws,"A",{href:!0,rel:!0});var aa=r(J);es=p(aa,"NVIDIA cuDNN"),aa.forEach(t),ts=p(Ws,"\xA0supports many algorithms to compute a convolution. Autotuner runs a short benchmark and selects the kernel with the best performance on a given hardware for a given input size."),Ws.forEach(t),st=u(e),C=o(e,"P",{});var St=r(C);ss=p(St,"Since we\u2019re using "),Te=o(St,"STRONG",{});var na=r(Te);as=p(na,"convolutional networks"),na.forEach(t),ns=p(St," (other types currently not supported), we can enable cuDNN autotuner before launching the inference by setting:"),St.forEach(t),at=u(e),m(Z.$$.fragment,e),nt=u(e),x=o(e,"H3",{class:!0});var Ct=r(x);U=o(Ct,"A",{id:!0,class:!0,href:!0});var oa=r(U);qe=o(oa,"SPAN",{});var ra=r(qe);m(ee.$$.fragment,ra),ra.forEach(t),oa.forEach(t),os=u(Ct),Ne=o(Ct,"SPAN",{});var ia=r(Ne);rs=p(ia,"Use tf32 instead of fp32 (on Ampere and later CUDA devices)"),ia.forEach(t),Ct.forEach(t),ot=u(e),F=o(e,"P",{});var Ut=r(F);is=p(Ut,"On Ampere and later CUDA devices matrix multiplications and convolutions can use the TensorFloat32 (TF32) mode for faster but slightly less accurate computations. By default PyTorch enables TF32 mode for convolutions but not matrix multiplications, and unless a network requires full float32 precision we recommend enabling this setting for matrix multiplications, too. It can significantly speed up computations with typically negligible loss of numerical accuracy. You can read more about it "),te=o(Ut,"A",{href:!0,rel:!0});var la=r(te);ls=p(la,"here"),la.forEach(t),ps=p(Ut,". All you need to do is to add this before your inference:"),Ut.forEach(t),rt=u(e),m(se.$$.fragment,e),it=u(e),E=o(e,"H2",{class:!0});var Ft=r(E);z=o(Ft,"A",{id:!0,class:!0,href:!0});var pa=r(z);Se=o(pa,"SPAN",{});var ca=r(Se);m(ae.$$.fragment,ca),ca.forEach(t),pa.forEach(t),cs=u(Ft),Ce=o(Ft,"SPAN",{});var ua=r(Ce);us=p(ua,"Automatic mixed precision (AMP)"),ua.forEach(t),Ft.forEach(t),lt=u(e),j=o(e,"P",{});var $e=r(j);hs=p($e,"If you use a CUDA GPU, you can take advantage of "),Ue=o($e,"CODE",{});var ha=r(Ue);fs=p(ha,"torch.autocast"),ha.forEach(t),ms=p($e," to perform inference roughly twice as fast at the cost of slightly lower precision. All you need to do is put your inference call inside an "),Fe=o($e,"CODE",{});var fa=r(Fe);ds=p(fa,"autocast"),fa.forEach(t),_s=p($e," context manager. The following example shows how to do it using Stable Diffusion text-to-image generation as an example:"),$e.forEach(t),pt=u(e),m(ne.$$.fragment,e),ct=u(e),I=o(e,"P",{});var zt=r(I);vs=p(zt,"Despite the precision loss, in our experience the final image results look the same as the "),ze=o(zt,"CODE",{});var ma=r(ze);ws=p(ma,"float32"),ma.forEach(t),ys=p(zt," versions. Feel free to experiment and report back!"),zt.forEach(t),ut=u(e),P=o(e,"H2",{class:!0});var It=r(P);M=o(It,"A",{id:!0,class:!0,href:!0});var da=r(M);Ie=o(da,"SPAN",{});var _a=r(Ie);m(oe.$$.fragment,_a),_a.forEach(t),da.forEach(t),gs=u(It),Me=o(It,"SPAN",{});var va=r(Me);bs=p(va,"Half precision weights"),va.forEach(t),It.forEach(t),ht=u(e),$=o(e,"P",{});var ke=r($);js=p(ke,"To save more GPU memory, you can load the model weights directly in half precision. This involves loading the float16 version of the weights, which was saved to a branch named "),Ve=o(ke,"CODE",{});var wa=r(Ve);$s=p(wa,"fp16"),wa.forEach(t),ks=p(ke,", and telling PyTorch to use the "),Oe=o(ke,"CODE",{});var ya=r(Oe);xs=p(ya,"float16"),ya.forEach(t),Es=p(ke," type when loading them:"),ke.forEach(t),ft=u(e),m(re.$$.fragment,e),mt=u(e),A=o(e,"H2",{class:!0});var Mt=r(A);V=o(Mt,"A",{id:!0,class:!0,href:!0});var ga=r(V);He=o(ga,"SPAN",{});var ba=r(He);m(ie.$$.fragment,ba),ba.forEach(t),ga.forEach(t),Ps=u(Mt),Ge=o(Mt,"SPAN",{});var ja=r(Ge);As=p(ja,"Sliced attention for additional memory savings"),ja.forEach(t),Mt.forEach(t),dt=u(e),ve=o(e,"P",{});var $a=r(ve);Ds=p($a,"For even additional memory savings, you can use a sliced version of attention that performs the computation in steps instead of all at once."),$a.forEach(t),_t=u(e),m(O.$$.fragment,e),vt=u(e),H=o(e,"P",{});var Vt=r(H);Ts=p(Vt,"To perform the attention computation sequentially over each head, you only need to invoke "),we=o(Vt,"A",{href:!0});var ka=r(we);qs=p(ka,"enable_attention_slicing()"),ka.forEach(t),Ns=p(Vt," in your pipeline before inference, like here:"),Vt.forEach(t),wt=u(e),m(le.$$.fragment,e),yt=u(e),ye=o(e,"P",{});var xa=r(ye);Ss=p(xa,"There\u2019s a small performance penalty of about 10% slower inference times, but this method allows you to use Stable Diffusion in as little as 3.2 GB of VRAM!"),xa.forEach(t),gt=u(e),D=o(e,"H2",{class:!0});var Ot=r(D);G=o(Ot,"A",{id:!0,class:!0,href:!0});var Ea=r(G);Le=o(Ea,"SPAN",{});var Pa=r(Le);m(pe.$$.fragment,Pa),Pa.forEach(t),Ea.forEach(t),Cs=u(Ot),Be=o(Ot,"SPAN",{});var Aa=r(Be);Us=p(Aa,"Using Channels Last memory format"),Aa.forEach(t),Ot.forEach(t),bt=u(e),ge=o(e,"P",{});var Da=r(ge);Fs=p(Da,"Channels last memory format is an alternative way of ordering NCHW tensors in memory preserving dimensions ordering. Channels last tensors ordered in such a way that channels become the densest dimension (aka storing images pixel-per-pixel). Since not all operators currently support channels last format it may result in a worst performance, so it\u2019s better to try it and see if it works for your model."),Da.forEach(t),jt=u(e),be=o(e,"P",{});var Ta=r(be);zs=p(Ta,"For example, in order to set the UNet model in our pipeline to use channels last format, we can use the following:"),Ta.forEach(t),$t=u(e),m(ce.$$.fragment,e),kt=u(e),T=o(e,"H2",{class:!0});var Ht=r(T);L=o(Ht,"A",{id:!0,class:!0,href:!0});var qa=r(L);Re=o(qa,"SPAN",{});var Na=r(Re);m(ue.$$.fragment,Na),Na.forEach(t),qa.forEach(t),Is=u(Ht),We=o(Ht,"SPAN",{});var Sa=r(We);Ms=p(Sa,"Tracing"),Sa.forEach(t),Ht.forEach(t),xt=u(e),B=o(e,"P",{});var Gt=r(B);Vs=p(Gt,"Tracing runs an example input tensor through your model, and captures the operations that are invoked as that input makes its way through the model\u2019s layers so that an executable or "),Ke=o(Gt,"CODE",{});var Ca=r(Ke);Os=p(Ca,"ScriptFunction"),Ca.forEach(t),Hs=p(Gt," is returned that will be optimized using just-in-time compilation."),Gt.forEach(t),Et=u(e),je=o(e,"P",{});var Ua=r(je);Gs=p(Ua,"To trace our UNet model, we can use the following:"),Ua.forEach(t),Pt=u(e),m(he.$$.fragment,e),At=u(e),R=o(e,"P",{});var Lt=r(R);Ls=p(Lt,"Then we can replace the "),Qe=o(Lt,"CODE",{});var Fa=r(Qe);Bs=p(Fa,"unet"),Fa.forEach(t),Rs=p(Lt," attribute of the pipeline with the traced model like the following"),Lt.forEach(t),Dt=u(e),m(fe.$$.fragment,e),this.h()},h(){h(y,"name","hf:doc:metadata"),h(y,"content",JSON.stringify(Ba)),h(q,"id","memory-and-speed"),h(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(q,"href","#memory-and-speed"),h(g,"class","relative group"),h(S,"id","enable-cudnn-autotuner"),h(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(S,"href","#enable-cudnn-autotuner"),h(k,"class","relative group"),h(J,"href","https://developer.nvidia.com/cudnn"),h(J,"rel","nofollow"),h(U,"id","use-tf32-instead-of-fp32-on-ampere-and-later-cuda-devices"),h(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(U,"href","#use-tf32-instead-of-fp32-on-ampere-and-later-cuda-devices"),h(x,"class","relative group"),h(te,"href","https://huggingface.co/docs/transformers/v4.18.0/en/performance#tf32"),h(te,"rel","nofollow"),h(z,"id","automatic-mixed-precision-amp"),h(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(z,"href","#automatic-mixed-precision-amp"),h(E,"class","relative group"),h(M,"id","half-precision-weights"),h(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(M,"href","#half-precision-weights"),h(P,"class","relative group"),h(V,"id","sliced-attention-for-additional-memory-savings"),h(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(V,"href","#sliced-attention-for-additional-memory-savings"),h(A,"class","relative group"),h(we,"href","/docs/diffusers/main/en/api/pipelines/stable_diffusion#diffusers.StableDiffusionPipeline.enable_attention_slicing"),h(G,"id","using-channels-last-memory-format"),h(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(G,"href","#using-channels-last-memory-format"),h(D,"class","relative group"),h(L,"id","tracing"),h(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(L,"href","#tracing"),h(T,"class","relative group")},m(e,a){s(document.head,y),i(e,b,a),i(e,g,a),s(g,q),s(q,xe),d(Q,xe,null),s(g,Bt),s(g,Ee),s(Ee,Rt),i(e,Ye,a),i(e,N,a),s(N,Wt),s(N,Pe),s(Pe,Kt),s(N,Qt),i(e,Je,a),i(e,de,a),s(de,Xt),i(e,Ze,a),i(e,_e,a),s(_e,Yt),i(e,et,a),i(e,k,a),s(k,S),s(S,Ae),d(X,Ae,null),s(k,Jt),s(k,De),s(De,Zt),i(e,tt,a),i(e,Y,a),s(Y,J),s(J,es),s(Y,ts),i(e,st,a),i(e,C,a),s(C,ss),s(C,Te),s(Te,as),s(C,ns),i(e,at,a),d(Z,e,a),i(e,nt,a),i(e,x,a),s(x,U),s(U,qe),d(ee,qe,null),s(x,os),s(x,Ne),s(Ne,rs),i(e,ot,a),i(e,F,a),s(F,is),s(F,te),s(te,ls),s(F,ps),i(e,rt,a),d(se,e,a),i(e,it,a),i(e,E,a),s(E,z),s(z,Se),d(ae,Se,null),s(E,cs),s(E,Ce),s(Ce,us),i(e,lt,a),i(e,j,a),s(j,hs),s(j,Ue),s(Ue,fs),s(j,ms),s(j,Fe),s(Fe,ds),s(j,_s),i(e,pt,a),d(ne,e,a),i(e,ct,a),i(e,I,a),s(I,vs),s(I,ze),s(ze,ws),s(I,ys),i(e,ut,a),i(e,P,a),s(P,M),s(M,Ie),d(oe,Ie,null),s(P,gs),s(P,Me),s(Me,bs),i(e,ht,a),i(e,$,a),s($,js),s($,Ve),s(Ve,$s),s($,ks),s($,Oe),s(Oe,xs),s($,Es),i(e,ft,a),d(re,e,a),i(e,mt,a),i(e,A,a),s(A,V),s(V,He),d(ie,He,null),s(A,Ps),s(A,Ge),s(Ge,As),i(e,dt,a),i(e,ve,a),s(ve,Ds),i(e,_t,a),d(O,e,a),i(e,vt,a),i(e,H,a),s(H,Ts),s(H,we),s(we,qs),s(H,Ns),i(e,wt,a),d(le,e,a),i(e,yt,a),i(e,ye,a),s(ye,Ss),i(e,gt,a),i(e,D,a),s(D,G),s(G,Le),d(pe,Le,null),s(D,Cs),s(D,Be),s(Be,Us),i(e,bt,a),i(e,ge,a),s(ge,Fs),i(e,jt,a),i(e,be,a),s(be,zs),i(e,$t,a),d(ce,e,a),i(e,kt,a),i(e,T,a),s(T,L),s(L,Re),d(ue,Re,null),s(T,Is),s(T,We),s(We,Ms),i(e,xt,a),i(e,B,a),s(B,Vs),s(B,Ke),s(Ke,Os),s(B,Hs),i(e,Et,a),i(e,je,a),s(je,Gs),i(e,Pt,a),d(he,e,a),i(e,At,a),i(e,R,a),s(R,Ls),s(R,Qe),s(Qe,Bs),s(R,Rs),i(e,Dt,a),d(fe,e,a),Tt=!0},p(e,[a]){const me={};a&2&&(me.$$scope={dirty:a,ctx:e}),O.$set(me)},i(e){Tt||(_(Q.$$.fragment,e),_(X.$$.fragment,e),_(Z.$$.fragment,e),_(ee.$$.fragment,e),_(se.$$.fragment,e),_(ae.$$.fragment,e),_(ne.$$.fragment,e),_(oe.$$.fragment,e),_(re.$$.fragment,e),_(ie.$$.fragment,e),_(O.$$.fragment,e),_(le.$$.fragment,e),_(pe.$$.fragment,e),_(ce.$$.fragment,e),_(ue.$$.fragment,e),_(he.$$.fragment,e),_(fe.$$.fragment,e),Tt=!0)},o(e){v(Q.$$.fragment,e),v(X.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(se.$$.fragment,e),v(ae.$$.fragment,e),v(ne.$$.fragment,e),v(oe.$$.fragment,e),v(re.$$.fragment,e),v(ie.$$.fragment,e),v(O.$$.fragment,e),v(le.$$.fragment,e),v(pe.$$.fragment,e),v(ce.$$.fragment,e),v(ue.$$.fragment,e),v(he.$$.fragment,e),v(fe.$$.fragment,e),Tt=!1},d(e){t(y),e&&t(b),e&&t(g),w(Q),e&&t(Ye),e&&t(N),e&&t(Je),e&&t(de),e&&t(Ze),e&&t(_e),e&&t(et),e&&t(k),w(X),e&&t(tt),e&&t(Y),e&&t(st),e&&t(C),e&&t(at),w(Z,e),e&&t(nt),e&&t(x),w(ee),e&&t(ot),e&&t(F),e&&t(rt),w(se,e),e&&t(it),e&&t(E),w(ae),e&&t(lt),e&&t(j),e&&t(pt),w(ne,e),e&&t(ct),e&&t(I),e&&t(ut),e&&t(P),w(oe),e&&t(ht),e&&t($),e&&t(ft),w(re,e),e&&t(mt),e&&t(A),w(ie),e&&t(dt),e&&t(ve),e&&t(_t),w(O,e),e&&t(vt),e&&t(H),e&&t(wt),w(le,e),e&&t(yt),e&&t(ye),e&&t(gt),e&&t(D),w(pe),e&&t(bt),e&&t(ge),e&&t(jt),e&&t(be),e&&t($t),w(ce,e),e&&t(kt),e&&t(T),w(ue),e&&t(xt),e&&t(B),e&&t(Et),e&&t(je),e&&t(Pt),w(he,e),e&&t(At),e&&t(R),e&&t(Dt),w(fe,e)}}}const Ba={local:"memory-and-speed",sections:[{local:"enable-cudnn-autotuner",sections:[{local:"use-tf32-instead-of-fp32-on-ampere-and-later-cuda-devices",title:"Use tf32 instead of fp32 (on Ampere and later CUDA devices)"}],title:"Enable cuDNN auto-tuner"},{local:"automatic-mixed-precision-amp",title:"Automatic mixed precision (AMP)"},{local:"half-precision-weights",title:"Half precision weights"},{local:"sliced-attention-for-additional-memory-savings",title:"Sliced attention for additional memory savings"},{local:"using-channels-last-memory-format",title:"Using Channels Last memory format"},{local:"tracing",title:"Tracing"}],title:"Memory and speed"};function Ra(Xe){return Oa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ya extends za{constructor(y){super();Ia(this,y,Ra,La,Ma,{})}}export{Ya as default,Ba as metadata};
