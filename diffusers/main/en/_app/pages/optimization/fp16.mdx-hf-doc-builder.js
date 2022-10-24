import{S as Ao,i as Po,s as qo,e as a,k as p,w as f,t as i,M as No,c as n,d as s,m as c,a as o,x as d,h as l,b as h,G as t,g as u,y as m,q as _,o as v,B as y,v as So}from"../../chunks/vendor-hf-doc-builder.js";import{T as Uo}from"../../chunks/Tip-hf-doc-builder.js";import{I as ae}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ne}from"../../chunks/CodeBlock-hf-doc-builder.js";function Co(St){let g;return{c(){g=i("Attention slicing is useful even if a batch size of just 1 is used - as long as the model uses more than one attention head. If there is more than one attention head the *QK^T* attention matrix can be computed sequentially for each head which can save a significant amount of memory.")},l($){g=l($,"Attention slicing is useful even if a batch size of just 1 is used - as long as the model uses more than one attention head. If there is more than one attention head the *QK^T* attention matrix can be computed sequentially for each head which can save a significant amount of memory.")},m($,j){u($,g,j)},d($){$&&s(g)}}}function Fo(St){let g,$,j,M,Oe,oe,Ps,Re,qs,Ut,O,Ns,Be,Ss,Us,Ct,R,Ge,D,Ft,Cs,Le,Fs,zs,Ve,Is,Hs,w,T,We,Ms,Os,Ye,Rs,Bs,Ke,Gs,Ls,x,Qe,Vs,Ws,Xe,Ys,Ks,Je,Qs,Xs,A,Ze,Js,Zs,et,ea,ta,tt,sa,aa,P,st,na,oa,at,ra,ia,nt,la,pa,q,ot,ca,ua,rt,ha,fa,it,da,ma,N,lt,_a,va,pt,ya,wa,ct,ga,zt,Ee,ba,It,S,B,ut,re,ja,ht,$a,Ht,ie,le,ka,Ea,Mt,G,Da,ft,Ta,xa,Ot,pe,Rt,U,L,dt,ce,Aa,mt,Pa,Bt,V,qa,ue,Na,Sa,Gt,he,Lt,C,W,_t,fe,Ua,vt,Ca,Vt,k,Fa,yt,za,Ia,wt,Ha,Ma,Wt,de,Yt,Y,Oa,gt,Ra,Ba,Kt,F,K,bt,me,Ga,jt,La,Qt,E,Va,$t,Wa,Ya,kt,Ka,Qa,Xt,_e,Jt,z,Q,Et,ve,Xa,Dt,Ja,Zt,De,Za,es,X,ts,J,en,Te,tn,sn,ss,ye,as,xe,an,ns,I,Z,Tt,we,nn,xt,on,os,Ae,rn,rs,Pe,ln,is,ge,ls,H,ee,At,be,pn,Pt,cn,ps,te,un,qt,hn,fn,cs,qe,dn,us,je,hs,se,mn,Nt,_n,vn,fs,$e,ds;return oe=new ae({}),re=new ae({}),pe=new ne({props:{code:`import torch

torch.backends.cudnn.benchmark = True`,highlighted:`<span class="hljs-keyword">import</span> torch

torch.backends.cudnn.benchmark = <span class="hljs-literal">True</span>`}}),ce=new ae({}),he=new ne({props:{code:`import torch

torch.backends.cuda.matmul.allow_tf32 = True`,highlighted:`<span class="hljs-keyword">import</span> torch

torch.backends.cuda.matmul.allow_tf32 = <span class="hljs-literal">True</span>`}}),fe=new ae({}),de=new ne({props:{code:`from torch import autocast
from diffusers import StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")
pipe = pipe.to("cuda")

prompt = "a photo of an astronaut riding a horse on mars"
with autocast("cuda"):
    image = pipe(prompt).images[0]  `,highlighted:`<span class="hljs-keyword">from</span> torch <span class="hljs-keyword">import</span> autocast
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;runwayml/stable-diffusion-v1-5&quot;</span>)
pipe = pipe.to(<span class="hljs-string">&quot;cuda&quot;</span>)

prompt = <span class="hljs-string">&quot;a photo of an astronaut riding a horse on mars&quot;</span>
<span class="hljs-keyword">with</span> autocast(<span class="hljs-string">&quot;cuda&quot;</span>):
    image = pipe(prompt).images[<span class="hljs-number">0</span>]  `}}),me=new ae({}),_e=new ne({props:{code:`pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    revision="fp16",
    torch_dtype=torch.float16,
)
pipe = pipe.to("cuda")

prompt = "a photo of an astronaut riding a horse on mars"
image = pipe(prompt).images[0]  `,highlighted:`pipe = StableDiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;runwayml/stable-diffusion-v1-5&quot;</span>,
    revision=<span class="hljs-string">&quot;fp16&quot;</span>,
    torch_dtype=torch.float16,
)
pipe = pipe.to(<span class="hljs-string">&quot;cuda&quot;</span>)

prompt = <span class="hljs-string">&quot;a photo of an astronaut riding a horse on mars&quot;</span>
image = pipe(prompt).images[<span class="hljs-number">0</span>]  `}}),ve=new ae({}),X=new Uo({props:{$$slots:{default:[Co]},$$scope:{ctx:St}}}),ye=new ne({props:{code:`import torch
from diffusers import StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    revision="fp16",
    torch_dtype=torch.float16,
)
pipe = pipe.to("cuda")

prompt = "a photo of an astronaut riding a horse on mars"
pipe.enable_attention_slicing()
image = pipe(prompt).images[0]  `,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;runwayml/stable-diffusion-v1-5&quot;</span>,
    revision=<span class="hljs-string">&quot;fp16&quot;</span>,
    torch_dtype=torch.float16,
)
pipe = pipe.to(<span class="hljs-string">&quot;cuda&quot;</span>)

prompt = <span class="hljs-string">&quot;a photo of an astronaut riding a horse on mars&quot;</span>
pipe.enable_attention_slicing()
image = pipe(prompt).images[<span class="hljs-number">0</span>]  `}}),we=new ae({}),ge=new ne({props:{code:`print(pipe.unet.conv_out.state_dict()["weight"].stride())  # (2880, 9, 3, 1)
pipe.unet.to(memory_format=torch.channels_last)  # in-place operation
print(
    pipe.unet.conv_out.state_dict()["weight"].stride()
)  # (2880, 1, 960, 320) having a stride of 1 for the 2nd dimension proves that it works`,highlighted:`<span class="hljs-built_in">print</span>(pipe.unet.conv_out.state_dict()[<span class="hljs-string">&quot;weight&quot;</span>].stride())  <span class="hljs-comment"># (2880, 9, 3, 1)</span>
pipe.unet.to(memory_format=torch.channels_last)  <span class="hljs-comment"># in-place operation</span>
<span class="hljs-built_in">print</span>(
    pipe.unet.conv_out.state_dict()[<span class="hljs-string">&quot;weight&quot;</span>].stride()
)  <span class="hljs-comment"># (2880, 1, 960, 320) having a stride of 1 for the 2nd dimension proves that it works</span>`}}),be=new ae({}),je=new ne({props:{code:`import time
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
unet_traced.save(<span class="hljs-string">&quot;unet_traced.pt&quot;</span>)`}}),$e=new ne({props:{code:`from diffusers import StableDiffusionPipeline
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
    image = pipe([prompt] * <span class="hljs-number">1</span>, num_inference_steps=<span class="hljs-number">50</span>).images[<span class="hljs-number">0</span>]`}}),{c(){g=a("meta"),$=p(),j=a("h1"),M=a("a"),Oe=a("span"),f(oe.$$.fragment),Ps=p(),Re=a("span"),qs=i("Memory and speed"),Ut=p(),O=a("p"),Ns=i("We present some techniques and ideas to optimize \u{1F917} Diffusers "),Be=a("em"),Ss=i("inference"),Us=i(" for memory or speed."),Ct=p(),R=a("table"),Ge=a("thead"),D=a("tr"),Ft=a("th"),Cs=p(),Le=a("th"),Fs=i("Latency"),zs=p(),Ve=a("th"),Is=i("Speedup"),Hs=p(),w=a("tbody"),T=a("tr"),We=a("td"),Ms=i("original"),Os=p(),Ye=a("td"),Rs=i("9.50s"),Bs=p(),Ke=a("td"),Gs=i("x1"),Ls=p(),x=a("tr"),Qe=a("td"),Vs=i("cuDNN auto-tuner"),Ws=p(),Xe=a("td"),Ys=i("9.37s"),Ks=p(),Je=a("td"),Qs=i("x1.01"),Xs=p(),A=a("tr"),Ze=a("td"),Js=i("autocast (fp16)"),Zs=p(),et=a("td"),ea=i("5.47s"),ta=p(),tt=a("td"),sa=i("x1.91"),aa=p(),P=a("tr"),st=a("td"),na=i("fp16"),oa=p(),at=a("td"),ra=i("3.61s"),ia=p(),nt=a("td"),la=i("x2.91"),pa=p(),q=a("tr"),ot=a("td"),ca=i("channels last"),ua=p(),rt=a("td"),ha=i("3.30s"),fa=p(),it=a("td"),da=i("x2.87"),ma=p(),N=a("tr"),lt=a("td"),_a=i("traced UNet"),va=p(),pt=a("td"),ya=i("3.21s"),wa=p(),ct=a("td"),ga=i("x2.96"),zt=p(),Ee=a("em"),ba=i('obtained on NVIDIA TITAN RTX by generating a single image of size 512x512 from the prompt "a photo of an astronaut riding a horse on mars" with 50 DDIM steps.'),It=p(),S=a("h2"),B=a("a"),ut=a("span"),f(re.$$.fragment),ja=p(),ht=a("span"),$a=i("Enable cuDNN auto-tuner"),Ht=p(),ie=a("p"),le=a("a"),ka=i("NVIDIA cuDNN"),Ea=i("\xA0supports many algorithms to compute a convolution. Autotuner runs a short benchmark and selects the kernel with the best performance on a given hardware for a given input size."),Mt=p(),G=a("p"),Da=i("Since we\u2019re using "),ft=a("strong"),Ta=i("convolutional networks"),xa=i(" (other types currently not supported), we can enable cuDNN autotuner before launching the inference by setting:"),Ot=p(),f(pe.$$.fragment),Rt=p(),U=a("h3"),L=a("a"),dt=a("span"),f(ce.$$.fragment),Aa=p(),mt=a("span"),Pa=i("Use tf32 instead of fp32 (on Ampere and later CUDA devices)"),Bt=p(),V=a("p"),qa=i("On Ampere and later CUDA devices matrix multiplications and convolutions can use the TensorFloat32 (TF32) mode for faster but slightly less accurate computations. By default PyTorch enables TF32 mode for convolutions but not matrix multiplications, and unless a network requires full float32 precision we recommend enabling this setting for matrix multiplications, too. It can significantly speed up computations with typically negligible loss of numerical accuracy. You can read more about it "),ue=a("a"),Na=i("here"),Sa=i(". All you need to do is to add this before your inference:"),Gt=p(),f(he.$$.fragment),Lt=p(),C=a("h2"),W=a("a"),_t=a("span"),f(fe.$$.fragment),Ua=p(),vt=a("span"),Ca=i("Automatic mixed precision (AMP)"),Vt=p(),k=a("p"),Fa=i("If you use a CUDA GPU, you can take advantage of "),yt=a("code"),za=i("torch.autocast"),Ia=i(" to perform inference roughly twice as fast at the cost of slightly lower precision. All you need to do is put your inference call inside an "),wt=a("code"),Ha=i("autocast"),Ma=i(" context manager. The following example shows how to do it using Stable Diffusion text-to-image generation as an example:"),Wt=p(),f(de.$$.fragment),Yt=p(),Y=a("p"),Oa=i("Despite the precision loss, in our experience the final image results look the same as the "),gt=a("code"),Ra=i("float32"),Ba=i(" versions. Feel free to experiment and report back!"),Kt=p(),F=a("h2"),K=a("a"),bt=a("span"),f(me.$$.fragment),Ga=p(),jt=a("span"),La=i("Half precision weights"),Qt=p(),E=a("p"),Va=i("To save more GPU memory and get even more speed, you can load and run the model weights directly in half precision. This involves loading the float16 version of the weights, which was saved to a branch named "),$t=a("code"),Wa=i("fp16"),Ya=i(", and telling PyTorch to use the "),kt=a("code"),Ka=i("float16"),Qa=i(" type when loading them:"),Xt=p(),f(_e.$$.fragment),Jt=p(),z=a("h2"),Q=a("a"),Et=a("span"),f(ve.$$.fragment),Xa=p(),Dt=a("span"),Ja=i("Sliced attention for additional memory savings"),Zt=p(),De=a("p"),Za=i("For even additional memory savings, you can use a sliced version of attention that performs the computation in steps instead of all at once."),es=p(),f(X.$$.fragment),ts=p(),J=a("p"),en=i("To perform the attention computation sequentially over each head, you only need to invoke "),Te=a("a"),tn=i("enable_attention_slicing()"),sn=i(" in your pipeline before inference, like here:"),ss=p(),f(ye.$$.fragment),as=p(),xe=a("p"),an=i("There\u2019s a small performance penalty of about 10% slower inference times, but this method allows you to use Stable Diffusion in as little as 3.2 GB of VRAM!"),ns=p(),I=a("h2"),Z=a("a"),Tt=a("span"),f(we.$$.fragment),nn=p(),xt=a("span"),on=i("Using Channels Last memory format"),os=p(),Ae=a("p"),rn=i("Channels last memory format is an alternative way of ordering NCHW tensors in memory preserving dimensions ordering. Channels last tensors ordered in such a way that channels become the densest dimension (aka storing images pixel-per-pixel). Since not all operators currently support channels last format it may result in a worst performance, so it\u2019s better to try it and see if it works for your model."),rs=p(),Pe=a("p"),ln=i("For example, in order to set the UNet model in our pipeline to use channels last format, we can use the following:"),is=p(),f(ge.$$.fragment),ls=p(),H=a("h2"),ee=a("a"),At=a("span"),f(be.$$.fragment),pn=p(),Pt=a("span"),cn=i("Tracing"),ps=p(),te=a("p"),un=i("Tracing runs an example input tensor through your model, and captures the operations that are invoked as that input makes its way through the model\u2019s layers so that an executable or "),qt=a("code"),hn=i("ScriptFunction"),fn=i(" is returned that will be optimized using just-in-time compilation."),cs=p(),qe=a("p"),dn=i("To trace our UNet model, we can use the following:"),us=p(),f(je.$$.fragment),hs=p(),se=a("p"),mn=i("Then we can replace the "),Nt=a("code"),_n=i("unet"),vn=i(" attribute of the pipeline with the traced model like the following"),fs=p(),f($e.$$.fragment),this.h()},l(e){const r=No('[data-svelte="svelte-1phssyn"]',document.head);g=n(r,"META",{name:!0,content:!0}),r.forEach(s),$=c(e),j=n(e,"H1",{class:!0});var ke=o(j);M=n(ke,"A",{id:!0,class:!0,href:!0});var wn=o(M);Oe=n(wn,"SPAN",{});var gn=o(Oe);d(oe.$$.fragment,gn),gn.forEach(s),wn.forEach(s),Ps=c(ke),Re=n(ke,"SPAN",{});var bn=o(Re);qs=l(bn,"Memory and speed"),bn.forEach(s),ke.forEach(s),Ut=c(e),O=n(e,"P",{});var ms=o(O);Ns=l(ms,"We present some techniques and ideas to optimize \u{1F917} Diffusers "),Be=n(ms,"EM",{});var jn=o(Be);Ss=l(jn,"inference"),jn.forEach(s),Us=l(ms," for memory or speed."),ms.forEach(s),Ct=c(e),R=n(e,"TABLE",{});var _s=o(R);Ge=n(_s,"THEAD",{});var $n=o(Ge);D=n($n,"TR",{});var Ne=o(D);Ft=n(Ne,"TH",{}),o(Ft).forEach(s),Cs=c(Ne),Le=n(Ne,"TH",{});var kn=o(Le);Fs=l(kn,"Latency"),kn.forEach(s),zs=c(Ne),Ve=n(Ne,"TH",{});var En=o(Ve);Is=l(En,"Speedup"),En.forEach(s),Ne.forEach(s),$n.forEach(s),Hs=c(_s),w=n(_s,"TBODY",{});var b=o(w);T=n(b,"TR",{});var Se=o(T);We=n(Se,"TD",{});var Dn=o(We);Ms=l(Dn,"original"),Dn.forEach(s),Os=c(Se),Ye=n(Se,"TD",{});var Tn=o(Ye);Rs=l(Tn,"9.50s"),Tn.forEach(s),Bs=c(Se),Ke=n(Se,"TD",{});var xn=o(Ke);Gs=l(xn,"x1"),xn.forEach(s),Se.forEach(s),Ls=c(b),x=n(b,"TR",{});var Ue=o(x);Qe=n(Ue,"TD",{});var An=o(Qe);Vs=l(An,"cuDNN auto-tuner"),An.forEach(s),Ws=c(Ue),Xe=n(Ue,"TD",{});var Pn=o(Xe);Ys=l(Pn,"9.37s"),Pn.forEach(s),Ks=c(Ue),Je=n(Ue,"TD",{});var qn=o(Je);Qs=l(qn,"x1.01"),qn.forEach(s),Ue.forEach(s),Xs=c(b),A=n(b,"TR",{});var Ce=o(A);Ze=n(Ce,"TD",{});var Nn=o(Ze);Js=l(Nn,"autocast (fp16)"),Nn.forEach(s),Zs=c(Ce),et=n(Ce,"TD",{});var Sn=o(et);ea=l(Sn,"5.47s"),Sn.forEach(s),ta=c(Ce),tt=n(Ce,"TD",{});var Un=o(tt);sa=l(Un,"x1.91"),Un.forEach(s),Ce.forEach(s),aa=c(b),P=n(b,"TR",{});var Fe=o(P);st=n(Fe,"TD",{});var Cn=o(st);na=l(Cn,"fp16"),Cn.forEach(s),oa=c(Fe),at=n(Fe,"TD",{});var Fn=o(at);ra=l(Fn,"3.61s"),Fn.forEach(s),ia=c(Fe),nt=n(Fe,"TD",{});var zn=o(nt);la=l(zn,"x2.91"),zn.forEach(s),Fe.forEach(s),pa=c(b),q=n(b,"TR",{});var ze=o(q);ot=n(ze,"TD",{});var In=o(ot);ca=l(In,"channels last"),In.forEach(s),ua=c(ze),rt=n(ze,"TD",{});var Hn=o(rt);ha=l(Hn,"3.30s"),Hn.forEach(s),fa=c(ze),it=n(ze,"TD",{});var Mn=o(it);da=l(Mn,"x2.87"),Mn.forEach(s),ze.forEach(s),ma=c(b),N=n(b,"TR",{});var Ie=o(N);lt=n(Ie,"TD",{});var On=o(lt);_a=l(On,"traced UNet"),On.forEach(s),va=c(Ie),pt=n(Ie,"TD",{});var Rn=o(pt);ya=l(Rn,"3.21s"),Rn.forEach(s),wa=c(Ie),ct=n(Ie,"TD",{});var Bn=o(ct);ga=l(Bn,"x2.96"),Bn.forEach(s),Ie.forEach(s),b.forEach(s),_s.forEach(s),zt=c(e),Ee=n(e,"EM",{});var Gn=o(Ee);ba=l(Gn,'obtained on NVIDIA TITAN RTX by generating a single image of size 512x512 from the prompt "a photo of an astronaut riding a horse on mars" with 50 DDIM steps.'),Gn.forEach(s),It=c(e),S=n(e,"H2",{class:!0});var vs=o(S);B=n(vs,"A",{id:!0,class:!0,href:!0});var Ln=o(B);ut=n(Ln,"SPAN",{});var Vn=o(ut);d(re.$$.fragment,Vn),Vn.forEach(s),Ln.forEach(s),ja=c(vs),ht=n(vs,"SPAN",{});var Wn=o(ht);$a=l(Wn,"Enable cuDNN auto-tuner"),Wn.forEach(s),vs.forEach(s),Ht=c(e),ie=n(e,"P",{});var yn=o(ie);le=n(yn,"A",{href:!0,rel:!0});var Yn=o(le);ka=l(Yn,"NVIDIA cuDNN"),Yn.forEach(s),Ea=l(yn,"\xA0supports many algorithms to compute a convolution. Autotuner runs a short benchmark and selects the kernel with the best performance on a given hardware for a given input size."),yn.forEach(s),Mt=c(e),G=n(e,"P",{});var ys=o(G);Da=l(ys,"Since we\u2019re using "),ft=n(ys,"STRONG",{});var Kn=o(ft);Ta=l(Kn,"convolutional networks"),Kn.forEach(s),xa=l(ys," (other types currently not supported), we can enable cuDNN autotuner before launching the inference by setting:"),ys.forEach(s),Ot=c(e),d(pe.$$.fragment,e),Rt=c(e),U=n(e,"H3",{class:!0});var ws=o(U);L=n(ws,"A",{id:!0,class:!0,href:!0});var Qn=o(L);dt=n(Qn,"SPAN",{});var Xn=o(dt);d(ce.$$.fragment,Xn),Xn.forEach(s),Qn.forEach(s),Aa=c(ws),mt=n(ws,"SPAN",{});var Jn=o(mt);Pa=l(Jn,"Use tf32 instead of fp32 (on Ampere and later CUDA devices)"),Jn.forEach(s),ws.forEach(s),Bt=c(e),V=n(e,"P",{});var gs=o(V);qa=l(gs,"On Ampere and later CUDA devices matrix multiplications and convolutions can use the TensorFloat32 (TF32) mode for faster but slightly less accurate computations. By default PyTorch enables TF32 mode for convolutions but not matrix multiplications, and unless a network requires full float32 precision we recommend enabling this setting for matrix multiplications, too. It can significantly speed up computations with typically negligible loss of numerical accuracy. You can read more about it "),ue=n(gs,"A",{href:!0,rel:!0});var Zn=o(ue);Na=l(Zn,"here"),Zn.forEach(s),Sa=l(gs,". All you need to do is to add this before your inference:"),gs.forEach(s),Gt=c(e),d(he.$$.fragment,e),Lt=c(e),C=n(e,"H2",{class:!0});var bs=o(C);W=n(bs,"A",{id:!0,class:!0,href:!0});var eo=o(W);_t=n(eo,"SPAN",{});var to=o(_t);d(fe.$$.fragment,to),to.forEach(s),eo.forEach(s),Ua=c(bs),vt=n(bs,"SPAN",{});var so=o(vt);Ca=l(so,"Automatic mixed precision (AMP)"),so.forEach(s),bs.forEach(s),Vt=c(e),k=n(e,"P",{});var He=o(k);Fa=l(He,"If you use a CUDA GPU, you can take advantage of "),yt=n(He,"CODE",{});var ao=o(yt);za=l(ao,"torch.autocast"),ao.forEach(s),Ia=l(He," to perform inference roughly twice as fast at the cost of slightly lower precision. All you need to do is put your inference call inside an "),wt=n(He,"CODE",{});var no=o(wt);Ha=l(no,"autocast"),no.forEach(s),Ma=l(He," context manager. The following example shows how to do it using Stable Diffusion text-to-image generation as an example:"),He.forEach(s),Wt=c(e),d(de.$$.fragment,e),Yt=c(e),Y=n(e,"P",{});var js=o(Y);Oa=l(js,"Despite the precision loss, in our experience the final image results look the same as the "),gt=n(js,"CODE",{});var oo=o(gt);Ra=l(oo,"float32"),oo.forEach(s),Ba=l(js," versions. Feel free to experiment and report back!"),js.forEach(s),Kt=c(e),F=n(e,"H2",{class:!0});var $s=o(F);K=n($s,"A",{id:!0,class:!0,href:!0});var ro=o(K);bt=n(ro,"SPAN",{});var io=o(bt);d(me.$$.fragment,io),io.forEach(s),ro.forEach(s),Ga=c($s),jt=n($s,"SPAN",{});var lo=o(jt);La=l(lo,"Half precision weights"),lo.forEach(s),$s.forEach(s),Qt=c(e),E=n(e,"P",{});var Me=o(E);Va=l(Me,"To save more GPU memory and get even more speed, you can load and run the model weights directly in half precision. This involves loading the float16 version of the weights, which was saved to a branch named "),$t=n(Me,"CODE",{});var po=o($t);Wa=l(po,"fp16"),po.forEach(s),Ya=l(Me,", and telling PyTorch to use the "),kt=n(Me,"CODE",{});var co=o(kt);Ka=l(co,"float16"),co.forEach(s),Qa=l(Me," type when loading them:"),Me.forEach(s),Xt=c(e),d(_e.$$.fragment,e),Jt=c(e),z=n(e,"H2",{class:!0});var ks=o(z);Q=n(ks,"A",{id:!0,class:!0,href:!0});var uo=o(Q);Et=n(uo,"SPAN",{});var ho=o(Et);d(ve.$$.fragment,ho),ho.forEach(s),uo.forEach(s),Xa=c(ks),Dt=n(ks,"SPAN",{});var fo=o(Dt);Ja=l(fo,"Sliced attention for additional memory savings"),fo.forEach(s),ks.forEach(s),Zt=c(e),De=n(e,"P",{});var mo=o(De);Za=l(mo,"For even additional memory savings, you can use a sliced version of attention that performs the computation in steps instead of all at once."),mo.forEach(s),es=c(e),d(X.$$.fragment,e),ts=c(e),J=n(e,"P",{});var Es=o(J);en=l(Es,"To perform the attention computation sequentially over each head, you only need to invoke "),Te=n(Es,"A",{href:!0});var _o=o(Te);tn=l(_o,"enable_attention_slicing()"),_o.forEach(s),sn=l(Es," in your pipeline before inference, like here:"),Es.forEach(s),ss=c(e),d(ye.$$.fragment,e),as=c(e),xe=n(e,"P",{});var vo=o(xe);an=l(vo,"There\u2019s a small performance penalty of about 10% slower inference times, but this method allows you to use Stable Diffusion in as little as 3.2 GB of VRAM!"),vo.forEach(s),ns=c(e),I=n(e,"H2",{class:!0});var Ds=o(I);Z=n(Ds,"A",{id:!0,class:!0,href:!0});var yo=o(Z);Tt=n(yo,"SPAN",{});var wo=o(Tt);d(we.$$.fragment,wo),wo.forEach(s),yo.forEach(s),nn=c(Ds),xt=n(Ds,"SPAN",{});var go=o(xt);on=l(go,"Using Channels Last memory format"),go.forEach(s),Ds.forEach(s),os=c(e),Ae=n(e,"P",{});var bo=o(Ae);rn=l(bo,"Channels last memory format is an alternative way of ordering NCHW tensors in memory preserving dimensions ordering. Channels last tensors ordered in such a way that channels become the densest dimension (aka storing images pixel-per-pixel). Since not all operators currently support channels last format it may result in a worst performance, so it\u2019s better to try it and see if it works for your model."),bo.forEach(s),rs=c(e),Pe=n(e,"P",{});var jo=o(Pe);ln=l(jo,"For example, in order to set the UNet model in our pipeline to use channels last format, we can use the following:"),jo.forEach(s),is=c(e),d(ge.$$.fragment,e),ls=c(e),H=n(e,"H2",{class:!0});var Ts=o(H);ee=n(Ts,"A",{id:!0,class:!0,href:!0});var $o=o(ee);At=n($o,"SPAN",{});var ko=o(At);d(be.$$.fragment,ko),ko.forEach(s),$o.forEach(s),pn=c(Ts),Pt=n(Ts,"SPAN",{});var Eo=o(Pt);cn=l(Eo,"Tracing"),Eo.forEach(s),Ts.forEach(s),ps=c(e),te=n(e,"P",{});var xs=o(te);un=l(xs,"Tracing runs an example input tensor through your model, and captures the operations that are invoked as that input makes its way through the model\u2019s layers so that an executable or "),qt=n(xs,"CODE",{});var Do=o(qt);hn=l(Do,"ScriptFunction"),Do.forEach(s),fn=l(xs," is returned that will be optimized using just-in-time compilation."),xs.forEach(s),cs=c(e),qe=n(e,"P",{});var To=o(qe);dn=l(To,"To trace our UNet model, we can use the following:"),To.forEach(s),us=c(e),d(je.$$.fragment,e),hs=c(e),se=n(e,"P",{});var As=o(se);mn=l(As,"Then we can replace the "),Nt=n(As,"CODE",{});var xo=o(Nt);_n=l(xo,"unet"),xo.forEach(s),vn=l(As," attribute of the pipeline with the traced model like the following"),As.forEach(s),fs=c(e),d($e.$$.fragment,e),this.h()},h(){h(g,"name","hf:doc:metadata"),h(g,"content",JSON.stringify(zo)),h(M,"id","memory-and-speed"),h(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(M,"href","#memory-and-speed"),h(j,"class","relative group"),h(B,"id","enable-cudnn-autotuner"),h(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(B,"href","#enable-cudnn-autotuner"),h(S,"class","relative group"),h(le,"href","https://developer.nvidia.com/cudnn"),h(le,"rel","nofollow"),h(L,"id","use-tf32-instead-of-fp32-on-ampere-and-later-cuda-devices"),h(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(L,"href","#use-tf32-instead-of-fp32-on-ampere-and-later-cuda-devices"),h(U,"class","relative group"),h(ue,"href","https://huggingface.co/docs/transformers/v4.18.0/en/performance#tf32"),h(ue,"rel","nofollow"),h(W,"id","automatic-mixed-precision-amp"),h(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(W,"href","#automatic-mixed-precision-amp"),h(C,"class","relative group"),h(K,"id","half-precision-weights"),h(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(K,"href","#half-precision-weights"),h(F,"class","relative group"),h(Q,"id","sliced-attention-for-additional-memory-savings"),h(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Q,"href","#sliced-attention-for-additional-memory-savings"),h(z,"class","relative group"),h(Te,"href","/docs/diffusers/main/en/api/pipelines/stable_diffusion#diffusers.StableDiffusionPipeline.enable_attention_slicing"),h(Z,"id","using-channels-last-memory-format"),h(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Z,"href","#using-channels-last-memory-format"),h(I,"class","relative group"),h(ee,"id","tracing"),h(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ee,"href","#tracing"),h(H,"class","relative group")},m(e,r){t(document.head,g),u(e,$,r),u(e,j,r),t(j,M),t(M,Oe),m(oe,Oe,null),t(j,Ps),t(j,Re),t(Re,qs),u(e,Ut,r),u(e,O,r),t(O,Ns),t(O,Be),t(Be,Ss),t(O,Us),u(e,Ct,r),u(e,R,r),t(R,Ge),t(Ge,D),t(D,Ft),t(D,Cs),t(D,Le),t(Le,Fs),t(D,zs),t(D,Ve),t(Ve,Is),t(R,Hs),t(R,w),t(w,T),t(T,We),t(We,Ms),t(T,Os),t(T,Ye),t(Ye,Rs),t(T,Bs),t(T,Ke),t(Ke,Gs),t(w,Ls),t(w,x),t(x,Qe),t(Qe,Vs),t(x,Ws),t(x,Xe),t(Xe,Ys),t(x,Ks),t(x,Je),t(Je,Qs),t(w,Xs),t(w,A),t(A,Ze),t(Ze,Js),t(A,Zs),t(A,et),t(et,ea),t(A,ta),t(A,tt),t(tt,sa),t(w,aa),t(w,P),t(P,st),t(st,na),t(P,oa),t(P,at),t(at,ra),t(P,ia),t(P,nt),t(nt,la),t(w,pa),t(w,q),t(q,ot),t(ot,ca),t(q,ua),t(q,rt),t(rt,ha),t(q,fa),t(q,it),t(it,da),t(w,ma),t(w,N),t(N,lt),t(lt,_a),t(N,va),t(N,pt),t(pt,ya),t(N,wa),t(N,ct),t(ct,ga),u(e,zt,r),u(e,Ee,r),t(Ee,ba),u(e,It,r),u(e,S,r),t(S,B),t(B,ut),m(re,ut,null),t(S,ja),t(S,ht),t(ht,$a),u(e,Ht,r),u(e,ie,r),t(ie,le),t(le,ka),t(ie,Ea),u(e,Mt,r),u(e,G,r),t(G,Da),t(G,ft),t(ft,Ta),t(G,xa),u(e,Ot,r),m(pe,e,r),u(e,Rt,r),u(e,U,r),t(U,L),t(L,dt),m(ce,dt,null),t(U,Aa),t(U,mt),t(mt,Pa),u(e,Bt,r),u(e,V,r),t(V,qa),t(V,ue),t(ue,Na),t(V,Sa),u(e,Gt,r),m(he,e,r),u(e,Lt,r),u(e,C,r),t(C,W),t(W,_t),m(fe,_t,null),t(C,Ua),t(C,vt),t(vt,Ca),u(e,Vt,r),u(e,k,r),t(k,Fa),t(k,yt),t(yt,za),t(k,Ia),t(k,wt),t(wt,Ha),t(k,Ma),u(e,Wt,r),m(de,e,r),u(e,Yt,r),u(e,Y,r),t(Y,Oa),t(Y,gt),t(gt,Ra),t(Y,Ba),u(e,Kt,r),u(e,F,r),t(F,K),t(K,bt),m(me,bt,null),t(F,Ga),t(F,jt),t(jt,La),u(e,Qt,r),u(e,E,r),t(E,Va),t(E,$t),t($t,Wa),t(E,Ya),t(E,kt),t(kt,Ka),t(E,Qa),u(e,Xt,r),m(_e,e,r),u(e,Jt,r),u(e,z,r),t(z,Q),t(Q,Et),m(ve,Et,null),t(z,Xa),t(z,Dt),t(Dt,Ja),u(e,Zt,r),u(e,De,r),t(De,Za),u(e,es,r),m(X,e,r),u(e,ts,r),u(e,J,r),t(J,en),t(J,Te),t(Te,tn),t(J,sn),u(e,ss,r),m(ye,e,r),u(e,as,r),u(e,xe,r),t(xe,an),u(e,ns,r),u(e,I,r),t(I,Z),t(Z,Tt),m(we,Tt,null),t(I,nn),t(I,xt),t(xt,on),u(e,os,r),u(e,Ae,r),t(Ae,rn),u(e,rs,r),u(e,Pe,r),t(Pe,ln),u(e,is,r),m(ge,e,r),u(e,ls,r),u(e,H,r),t(H,ee),t(ee,At),m(be,At,null),t(H,pn),t(H,Pt),t(Pt,cn),u(e,ps,r),u(e,te,r),t(te,un),t(te,qt),t(qt,hn),t(te,fn),u(e,cs,r),u(e,qe,r),t(qe,dn),u(e,us,r),m(je,e,r),u(e,hs,r),u(e,se,r),t(se,mn),t(se,Nt),t(Nt,_n),t(se,vn),u(e,fs,r),m($e,e,r),ds=!0},p(e,[r]){const ke={};r&2&&(ke.$$scope={dirty:r,ctx:e}),X.$set(ke)},i(e){ds||(_(oe.$$.fragment,e),_(re.$$.fragment,e),_(pe.$$.fragment,e),_(ce.$$.fragment,e),_(he.$$.fragment,e),_(fe.$$.fragment,e),_(de.$$.fragment,e),_(me.$$.fragment,e),_(_e.$$.fragment,e),_(ve.$$.fragment,e),_(X.$$.fragment,e),_(ye.$$.fragment,e),_(we.$$.fragment,e),_(ge.$$.fragment,e),_(be.$$.fragment,e),_(je.$$.fragment,e),_($e.$$.fragment,e),ds=!0)},o(e){v(oe.$$.fragment,e),v(re.$$.fragment,e),v(pe.$$.fragment,e),v(ce.$$.fragment,e),v(he.$$.fragment,e),v(fe.$$.fragment,e),v(de.$$.fragment,e),v(me.$$.fragment,e),v(_e.$$.fragment,e),v(ve.$$.fragment,e),v(X.$$.fragment,e),v(ye.$$.fragment,e),v(we.$$.fragment,e),v(ge.$$.fragment,e),v(be.$$.fragment,e),v(je.$$.fragment,e),v($e.$$.fragment,e),ds=!1},d(e){s(g),e&&s($),e&&s(j),y(oe),e&&s(Ut),e&&s(O),e&&s(Ct),e&&s(R),e&&s(zt),e&&s(Ee),e&&s(It),e&&s(S),y(re),e&&s(Ht),e&&s(ie),e&&s(Mt),e&&s(G),e&&s(Ot),y(pe,e),e&&s(Rt),e&&s(U),y(ce),e&&s(Bt),e&&s(V),e&&s(Gt),y(he,e),e&&s(Lt),e&&s(C),y(fe),e&&s(Vt),e&&s(k),e&&s(Wt),y(de,e),e&&s(Yt),e&&s(Y),e&&s(Kt),e&&s(F),y(me),e&&s(Qt),e&&s(E),e&&s(Xt),y(_e,e),e&&s(Jt),e&&s(z),y(ve),e&&s(Zt),e&&s(De),e&&s(es),y(X,e),e&&s(ts),e&&s(J),e&&s(ss),y(ye,e),e&&s(as),e&&s(xe),e&&s(ns),e&&s(I),y(we),e&&s(os),e&&s(Ae),e&&s(rs),e&&s(Pe),e&&s(is),y(ge,e),e&&s(ls),e&&s(H),y(be),e&&s(ps),e&&s(te),e&&s(cs),e&&s(qe),e&&s(us),y(je,e),e&&s(hs),e&&s(se),e&&s(fs),y($e,e)}}}const zo={local:"memory-and-speed",sections:[{local:"enable-cudnn-autotuner",sections:[{local:"use-tf32-instead-of-fp32-on-ampere-and-later-cuda-devices",title:"Use tf32 instead of fp32 (on Ampere and later CUDA devices)"}],title:"Enable cuDNN auto-tuner"},{local:"automatic-mixed-precision-amp",title:"Automatic mixed precision (AMP)"},{local:"half-precision-weights",title:"Half precision weights"},{local:"sliced-attention-for-additional-memory-savings",title:"Sliced attention for additional memory savings"},{local:"using-channels-last-memory-format",title:"Using Channels Last memory format"},{local:"tracing",title:"Tracing"}],title:"Memory and speed"};function Io(St){return So(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Bo extends Ao{constructor(g){super();Po(this,g,Io,Fo,qo,{})}}export{Bo as default,zo as metadata};
