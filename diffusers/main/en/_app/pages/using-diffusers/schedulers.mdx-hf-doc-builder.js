import{S as Na,i as Ia,s as La,e as l,k as u,w as h,t as o,M as Ga,c as i,d as s,m as f,a,x as d,h as p,b as c,N as ws,G as t,g as n,y as m,L as Ca,q as _,o as g,B as v,v as Ta}from"../../chunks/vendor-hf-doc-builder.js";import{I as Ws}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as $}from"../../chunks/CodeBlock-hf-doc-builder.js";function Ra(Mi){let N,Us,I,O,$s,X,rr,bs,lr,zs,B,ir,Ee,ar,nr,Ys,H,or,Ss,pr,ur,Js,P,ys,fr,cr,Es,hr,dr,Ds,mr,Ks,j,_r,Ms,gr,vr,ks,wr,$r,Qs,De,br,Vs,L,F,Ps,Z,Sr,js,yr,Xs,W,Er,ee,Dr,Mr,Zs,se,et,Me,kr,st,te,tt,G,U,qs,re,Pr,As,jr,rt,q,qr,xs,Ar,xr,Ns,Nr,Ir,lt,le,it,ie,Is,Lr,Gr,at,ae,nt,z,Cr,ke,Tr,Rr,ot,ne,pt,Pe,Or,ut,oe,ft,S,Br,Hr,je,ki,Fr,Wr,ct,C,Y,Ls,pe,Ur,Gs,zr,ht,J,Yr,Cs,Jr,Kr,dt,ue,mt,fe,Ts,Qr,Vr,_t,ce,gt,qe,Xr,vt,w,Ae,xe,Zr,el,sl,Ne,Ie,tl,rl,ll,Le,Ge,il,al,nl,Ce,Te,ol,pl,ul,Re,Oe,fl,cl,hl,Be,He,dl,ml,_l,Fe,We,gl,vl,wt,A,wl,Rs,$l,bl,Ue,Sl,yl,$t,he,bt,ze,El,St,de,Os,Dl,Ml,yt,me,Et,K,kl,Ye,Pl,jl,Dt,_e,Mt,Je,ql,kt,ge,Pt,y,Al,xl,Ke,Pi,Nl,Il,jt,T,Q,Bs,ve,Ll,Hs,Gl,qt,x,Cl,Qe,Tl,Rl,Ve,Ol,Bl,At,we,Xe,Hl,Fl,xt,$e,Nt,E,Wl,Ul,Ze,ji,zl,Yl,It,R,es,Jl,Kl,ss,Ql,Vl,Lt,be,Gt,D,Xl,Zl,ts,qi,ei,si,Ct,rs,ti,Tt,Se,Rt,M,ri,li,ls,Ai,ii,ai,Ot,V,ni,is,oi,pi,Bt,ye,Ht,k,ui,fi,as,xi,ci,hi,Ft,ns,di,Wt;return X=new Ws({}),Z=new Ws({}),se=new $({props:{code:`from huggingface_hub import login
from diffusers import DiffusionPipeline
import torch

# first we need to login with our access token
login()

# Now we can download the pipeline
pipeline = DiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5", torch_dtype=torch.float16)`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> login
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline
<span class="hljs-keyword">import</span> torch

<span class="hljs-comment"># first we need to login with our access token</span>
login()

<span class="hljs-comment"># Now we can download the pipeline</span>
pipeline = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;runwayml/stable-diffusion-v1-5&quot;</span>, torch_dtype=torch.float16)`}}),te=new $({props:{code:'pipeline.to("cuda")',highlighted:'pipeline.to(<span class="hljs-string">&quot;cuda&quot;</span>)'}}),re=new Ws({}),le=new $({props:{code:"pipeline.scheduler",highlighted:"pipeline.scheduler"}}),ae=new $({props:{code:`PNDMScheduler {
  "_class_name": "PNDMScheduler",
  "_diffusers_version": "0.8.0.dev0",
  "beta_end": 0.012,
  "beta_schedule": "scaled_linear",
  "beta_start": 0.00085,
  "clip_sample": false,
  "num_train_timesteps": 1000,
  "set_alpha_to_one": false,
  "skip_prk_steps": true,
  "steps_offset": 1,
  "trained_betas": null
}`,highlighted:`PNDMScheduler {
  <span class="hljs-string">&quot;_class_name&quot;</span>: <span class="hljs-string">&quot;PNDMScheduler&quot;</span>,
  <span class="hljs-string">&quot;_diffusers_version&quot;</span>: <span class="hljs-string">&quot;0.8.0.dev0&quot;</span>,
  <span class="hljs-string">&quot;beta_end&quot;</span>: <span class="hljs-number">0.012</span>,
  <span class="hljs-string">&quot;beta_schedule&quot;</span>: <span class="hljs-string">&quot;scaled_linear&quot;</span>,
  <span class="hljs-string">&quot;beta_start&quot;</span>: <span class="hljs-number">0.00085</span>,
  <span class="hljs-string">&quot;clip_sample&quot;</span>: <span class="hljs-literal">false</span>,
  <span class="hljs-string">&quot;num_train_timesteps&quot;</span>: <span class="hljs-number">1000</span>,
  <span class="hljs-string">&quot;set_alpha_to_one&quot;</span>: <span class="hljs-literal">false</span>,
  <span class="hljs-string">&quot;skip_prk_steps&quot;</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-string">&quot;steps_offset&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-string">&quot;trained_betas&quot;</span>: <span class="hljs-literal">null</span>
}`}}),ne=new $({props:{code:'prompt = "A photograph of an astronaut riding a horse on Mars, high resolution, high definition."',highlighted:'prompt = <span class="hljs-string">&quot;A photograph of an astronaut riding a horse on Mars, high resolution, high definition.&quot;</span>'}}),oe=new $({props:{code:`generator = torch.Generator(device="cuda").manual_seed(8)
image = pipeline(prompt, generator=generator).images[0]
image`,highlighted:`generator = torch.Generator(device=<span class="hljs-string">&quot;cuda&quot;</span>).manual_seed(<span class="hljs-number">8</span>)
image = pipeline(prompt, generator=generator).images[<span class="hljs-number">0</span>]
image`}}),pe=new Ws({}),ue=new $({props:{code:"pipeline.scheduler.compatibles",highlighted:"pipeline.scheduler.compatibles"}}),ce=new $({props:{code:`[diffusers.schedulers.scheduling_lms_discrete.LMSDiscreteScheduler,
 diffusers.schedulers.scheduling_ddim.DDIMScheduler,
 diffusers.schedulers.scheduling_dpmsolver_multistep.DPMSolverMultistepScheduler,
 diffusers.schedulers.scheduling_euler_discrete.EulerDiscreteScheduler,
 diffusers.schedulers.scheduling_pndm.PNDMScheduler,
 diffusers.schedulers.scheduling_ddpm.DDPMScheduler,
 diffusers.schedulers.scheduling_euler_ancestral_discrete.EulerAncestralDiscreteScheduler]`,highlighted:`[<span class="hljs-keyword">diffusers.schedulers.scheduling_lms_discrete.LMSDiscreteScheduler,
</span> <span class="hljs-keyword">diffusers.schedulers.scheduling_ddim.DDIMScheduler,
</span> <span class="hljs-keyword">diffusers.schedulers.scheduling_dpmsolver_multistep.DPMSolverMultistepScheduler,
</span> <span class="hljs-keyword">diffusers.schedulers.scheduling_euler_discrete.EulerDiscreteScheduler,
</span> <span class="hljs-keyword">diffusers.schedulers.scheduling_pndm.PNDMScheduler,
</span> <span class="hljs-keyword">diffusers.schedulers.scheduling_ddpm.DDPMScheduler,
</span> <span class="hljs-keyword">diffusers.schedulers.scheduling_euler_ancestral_discrete.EulerAncestralDiscreteScheduler]</span>`}}),he=new $({props:{code:"pipeline.scheduler.config",highlighted:"pipeline.scheduler.config"}}),me=new $({props:{code:`FrozenDict([('num_train_timesteps', 1000),
            ('beta_start', 0.00085),
            ('beta_end', 0.012),
            ('beta_schedule', 'scaled_linear'),
            ('trained_betas', None),
            ('skip_prk_steps', True),
            ('set_alpha_to_one', False),
            ('steps_offset', 1),
            ('_class_name', 'PNDMScheduler'),
            ('_diffusers_version', '0.8.0.dev0'),
            ('clip_sample', False)])`,highlighted:`FrozenDict([(&#x27;num_train_timesteps&#x27;, <span class="hljs-number">1000</span>),
            (&#x27;beta_start&#x27;, <span class="hljs-number">0.00085</span>),
            (&#x27;beta_end&#x27;, <span class="hljs-number">0.012</span>),
            (&#x27;beta_schedule&#x27;, &#x27;scaled_linear&#x27;),
            (&#x27;trained_betas&#x27;, None),
            (&#x27;skip_prk_steps&#x27;, True),
            (&#x27;set_alpha_to_one&#x27;, False),
            (&#x27;steps_offset&#x27;, <span class="hljs-number">1</span>),
            (&#x27;_class_name&#x27;, &#x27;PNDMScheduler&#x27;),
            (&#x27;_diffusers_version&#x27;, &#x27;<span class="hljs-number">0.8</span>.<span class="hljs-number">0</span>.dev0&#x27;),
            (&#x27;clip_sample&#x27;, False)])`}}),_e=new $({props:{code:`from diffusers import DDIMScheduler

pipeline.scheduler = DDIMScheduler.from_config(pipeline.scheduler.config)`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DDIMScheduler

pipeline.scheduler = DDIMScheduler.from_config(pipeline.scheduler.config)`}}),ge=new $({props:{code:`generator = torch.Generator(device="cuda").manual_seed(8)
image = pipeline(prompt, generator=generator).images[0]
image`,highlighted:`generator = torch.Generator(device=<span class="hljs-string">&quot;cuda&quot;</span>).manual_seed(<span class="hljs-number">8</span>)
image = pipeline(prompt, generator=generator).images[<span class="hljs-number">0</span>]
image`}}),ve=new Ws({}),$e=new $({props:{code:`from diffusers import LMSDiscreteScheduler

pipeline.scheduler = LMSDiscreteScheduler.from_config(pipeline.scheduler.config)

generator = torch.Generator(device="cuda").manual_seed(8)
image = pipeline(prompt, generator=generator).images[0]
image`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> LMSDiscreteScheduler

pipeline.scheduler = LMSDiscreteScheduler.from_config(pipeline.scheduler.config)

generator = torch.Generator(device=<span class="hljs-string">&quot;cuda&quot;</span>).manual_seed(<span class="hljs-number">8</span>)
image = pipeline(prompt, generator=generator).images[<span class="hljs-number">0</span>]
image`}}),be=new $({props:{code:`from diffusers import EulerDiscreteScheduler

pipeline.scheduler = EulerDiscreteScheduler.from_config(pipeline.scheduler.config)

generator = torch.Generator(device="cuda").manual_seed(8)
image = pipeline(prompt, generator=generator, num_inference_steps=30).images[0]
image`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> EulerDiscreteScheduler

pipeline.scheduler = EulerDiscreteScheduler.from_config(pipeline.scheduler.config)

generator = torch.Generator(device=<span class="hljs-string">&quot;cuda&quot;</span>).manual_seed(<span class="hljs-number">8</span>)
image = pipeline(prompt, generator=generator, num_inference_steps=<span class="hljs-number">30</span>).images[<span class="hljs-number">0</span>]
image`}}),Se=new $({props:{code:`from diffusers import EulerAncestralDiscreteScheduler

pipeline.scheduler = EulerAncestralDiscreteScheduler.from_config(pipeline.scheduler.config)

generator = torch.Generator(device="cuda").manual_seed(8)
image = pipeline(prompt, generator=generator, num_inference_steps=30).images[0]
image`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> EulerAncestralDiscreteScheduler

pipeline.scheduler = EulerAncestralDiscreteScheduler.from_config(pipeline.scheduler.config)

generator = torch.Generator(device=<span class="hljs-string">&quot;cuda&quot;</span>).manual_seed(<span class="hljs-number">8</span>)
image = pipeline(prompt, generator=generator, num_inference_steps=<span class="hljs-number">30</span>).images[<span class="hljs-number">0</span>]
image`}}),ye=new $({props:{code:`from diffusers import DPMSolverMultistepScheduler

pipeline.scheduler = DPMSolverMultistepScheduler.from_config(pipeline.scheduler.config)

generator = torch.Generator(device="cuda").manual_seed(8)
image = pipeline(prompt, generator=generator, num_inference_steps=20).images[0]
image`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DPMSolverMultistepScheduler

pipeline.scheduler = DPMSolverMultistepScheduler.from_config(pipeline.scheduler.config)

generator = torch.Generator(device=<span class="hljs-string">&quot;cuda&quot;</span>).manual_seed(<span class="hljs-number">8</span>)
image = pipeline(prompt, generator=generator, num_inference_steps=<span class="hljs-number">20</span>).images[<span class="hljs-number">0</span>]
image`}}),{c(){N=l("meta"),Us=u(),I=l("h1"),O=l("a"),$s=l("span"),h(X.$$.fragment),rr=u(),bs=l("span"),lr=o("Schedulers"),zs=u(),B=l("p"),ir=o(`Diffusion pipelines are inherently a collection of diffusion models and schedulers that are partly independent from each other. This means that one is able to switch out parts of the pipeline to better customize
a pipeline to one\u2019s use case. The best example of this are the `),Ee=l("a"),ar=o("Schedulers"),nr=o("."),Ys=u(),H=l("p"),or=o(`Whereas diffusion models usually simply define the forward pass from noise to a less noisy sample,
schedulers define the whole denoising process, `),Ss=l("em"),pr=o("i.e."),ur=o(":"),Js=u(),P=l("ul"),ys=l("li"),fr=o("How many denoising steps?"),cr=u(),Es=l("li"),hr=o("Stochastic or deterministic?"),dr=u(),Ds=l("li"),mr=o("What algorithm to use to find the denoised sample"),Ks=u(),j=l("p"),_r=o("They can be quite complex and often define a trade-off between "),Ms=l("strong"),gr=o("denoising speed"),vr=o(" and "),ks=l("strong"),wr=o("denoising quality"),$r=o(`.
It is extremely difficult to measure quantitatively which scheduler works best for a given diffusion pipeline, so it is often recommended to simply try out which works best.`),Qs=u(),De=l("p"),br=o("The following paragraphs shows how to do so with the \u{1F9E8} Diffusers library."),Vs=u(),L=l("h2"),F=l("a"),Ps=l("span"),h(Z.$$.fragment),Sr=u(),js=l("span"),yr=o("Load pipeline"),Xs=u(),W=l("p"),Er=o(`Let\u2019s start by loading the stable diffusion pipeline.
Remember that you have to be a registered user on the \u{1F917} Hugging Face Hub, and have \u201Cclick-accepted\u201D the `),ee=l("a"),Dr=o("license"),Mr=o(" in order to use stable diffusion."),Zs=u(),h(se.$$.fragment),et=u(),Me=l("p"),kr=o("Next, we move it to GPU:"),st=u(),h(te.$$.fragment),tt=u(),G=l("h2"),U=l("a"),qs=l("span"),h(re.$$.fragment),Pr=u(),As=l("span"),jr=o("Access the scheduler"),rt=u(),q=l("p"),qr=o("The scheduler is always one of the components of the pipeline and is usually called "),xs=l("code"),Ar=o('"scheduler"'),xr=o(`.
So it can be accessed via the `),Ns=l("code"),Nr=o('"scheduler"'),Ir=o(" property."),lt=u(),h(le.$$.fragment),it=u(),ie=l("p"),Is=l("strong"),Lr=o("Output"),Gr=o(":"),at=u(),h(ae.$$.fragment),nt=u(),z=l("p"),Cr=o("We can see that the scheduler is of type "),ke=l("a"),Tr=o("PNDMScheduler"),Rr=o(`.
Cool, now let\u2019s compare the scheduler in its performance to other schedulers.
First we define a prompt on which we will test all the different schedulers:`),ot=u(),h(ne.$$.fragment),pt=u(),Pe=l("p"),Or=o("Next, we create a generator from a random seed that will ensure that we can generate similar images as well as run the pipeline:"),ut=u(),h(oe.$$.fragment),ft=u(),S=l("p"),Br=l("br"),Hr=u(),je=l("img"),Fr=u(),Wr=l("br"),ct=u(),C=l("h2"),Y=l("a"),Ls=l("span"),h(pe.$$.fragment),Ur=u(),Gs=l("span"),zr=o("Changing the scheduler"),ht=u(),J=l("p"),Yr=o("Now we show how easy it is to change the scheduler of a pipeline. Every scheduler has a property "),Cs=l("code"),Jr=o("SchedulerMixin.compatibles"),Kr=o(`
which defines all compatible schedulers. You can take a look at all available, compatible schedulers for the Stable Diffusion pipeline as follows.`),dt=u(),h(ue.$$.fragment),mt=u(),fe=l("p"),Ts=l("strong"),Qr=o("Output"),Vr=o(":"),_t=u(),h(ce.$$.fragment),gt=u(),qe=l("p"),Xr=o("Cool, lots of schedulers to look at. Feel free to have a look at their respective class definitions:"),vt=u(),w=l("ul"),Ae=l("li"),xe=l("a"),Zr=o("LMSDiscreteScheduler"),el=o(","),sl=u(),Ne=l("li"),Ie=l("a"),tl=o("DDIMScheduler"),rl=o(","),ll=u(),Le=l("li"),Ge=l("a"),il=o("DPMSolverMultistepScheduler"),al=o(","),nl=u(),Ce=l("li"),Te=l("a"),ol=o("EulerDiscreteScheduler"),pl=o(","),ul=u(),Re=l("li"),Oe=l("a"),fl=o("PNDMScheduler"),cl=o(","),hl=u(),Be=l("li"),He=l("a"),dl=o("DDPMScheduler"),ml=o(","),_l=u(),Fe=l("li"),We=l("a"),gl=o("EulerAncestralDiscreteScheduler"),vl=o("."),wt=u(),A=l("p"),wl=o(`We will now compare the input prompt with all other schedulers. To change the scheduler of the pipeline you can make use of the
convenient `),Rs=l("code"),$l=o("ConfigMixin.config"),bl=o(" property in combination with the "),Ue=l("a"),Sl=o("ConfigMixin.from_config()"),yl=o(" function."),$t=u(),h(he.$$.fragment),bt=u(),ze=l("p"),El=o("returns a dictionary of the configuration of the scheduler:"),St=u(),de=l("p"),Os=l("strong"),Dl=o("Output"),Ml=o(":"),yt=u(),h(me.$$.fragment),Et=u(),K=l("p"),kl=o(`This configuration can then be used to instantiate a scheduler
of a different class that is compatible with the pipeline. Here,
we change the scheduler to the `),Ye=l("a"),Pl=o("DDIMScheduler"),jl=o("."),Dt=u(),h(_e.$$.fragment),Mt=u(),Je=l("p"),ql=o("Cool, now we can run the pipeline again to compare the generation quality."),kt=u(),h(ge.$$.fragment),Pt=u(),y=l("p"),Al=l("br"),xl=u(),Ke=l("img"),Nl=u(),Il=l("br"),jt=u(),T=l("h2"),Q=l("a"),Bs=l("span"),h(ve.$$.fragment),Ll=u(),Hs=l("span"),Gl=o("Compare schedulers"),qt=u(),x=l("p"),Cl=o("So far we have tried running the stable diffusion pipeline with two schedulers: "),Qe=l("a"),Tl=o("PNDMScheduler"),Rl=o(" and "),Ve=l("a"),Ol=o("DDIMScheduler"),Bl=o(`.
A number of better schedulers have been released that can be run with much fewer steps, let\u2019s compare them here:`),At=u(),we=l("p"),Xe=l("a"),Hl=o("LMSDiscreteScheduler"),Fl=o(" usually leads to better results:"),xt=u(),h($e.$$.fragment),Nt=u(),E=l("p"),Wl=l("br"),Ul=u(),Ze=l("img"),zl=u(),Yl=l("br"),It=u(),R=l("p"),es=l("a"),Jl=o("EulerDiscreteScheduler"),Kl=o(" and "),ss=l("a"),Ql=o("EulerAncestralDiscreteScheduler"),Vl=o(" can generate high quality results with as little as 30 steps."),Lt=u(),h(be.$$.fragment),Gt=u(),D=l("p"),Xl=l("br"),Zl=u(),ts=l("img"),ei=u(),si=l("br"),Ct=u(),rs=l("p"),ti=o("and:"),Tt=u(),h(Se.$$.fragment),Rt=u(),M=l("p"),ri=l("br"),li=u(),ls=l("img"),ii=u(),ai=l("br"),Ot=u(),V=l("p"),ni=o("At the time of writing this doc "),is=l("a"),oi=o("DPMSolverMultistepScheduler"),pi=o(` gives arguably the best speed/quality trade-off and can be run with as little
as 20 steps.`),Bt=u(),h(ye.$$.fragment),Ht=u(),k=l("p"),ui=l("br"),fi=u(),as=l("img"),ci=u(),hi=l("br"),Ft=u(),ns=l("p"),di=o(`As you can see most images look very similar and are arguably of very similar quality. It often really depends on the specific use case which scheduler to choose. A good approach is always to run multiple different
schedulers to compare results.`),this.h()},l(e){const r=Ga('[data-svelte="svelte-1phssyn"]',document.head);N=i(r,"META",{name:!0,content:!0}),r.forEach(s),Us=f(e),I=i(e,"H1",{class:!0});var Ut=a(I);O=i(Ut,"A",{id:!0,class:!0,href:!0});var Ni=a(O);$s=i(Ni,"SPAN",{});var Ii=a($s);d(X.$$.fragment,Ii),Ii.forEach(s),Ni.forEach(s),rr=f(Ut),bs=i(Ut,"SPAN",{});var Li=a(bs);lr=p(Li,"Schedulers"),Li.forEach(s),Ut.forEach(s),zs=f(e),B=i(e,"P",{});var zt=a(B);ir=p(zt,`Diffusion pipelines are inherently a collection of diffusion models and schedulers that are partly independent from each other. This means that one is able to switch out parts of the pipeline to better customize
a pipeline to one\u2019s use case. The best example of this are the `),Ee=i(zt,"A",{href:!0});var Gi=a(Ee);ar=p(Gi,"Schedulers"),Gi.forEach(s),nr=p(zt,"."),zt.forEach(s),Ys=f(e),H=i(e,"P",{});var Yt=a(H);or=p(Yt,`Whereas diffusion models usually simply define the forward pass from noise to a less noisy sample,
schedulers define the whole denoising process, `),Ss=i(Yt,"EM",{});var Ci=a(Ss);pr=p(Ci,"i.e."),Ci.forEach(s),ur=p(Yt,":"),Yt.forEach(s),Js=f(e),P=i(e,"UL",{});var os=a(P);ys=i(os,"LI",{});var Ti=a(ys);fr=p(Ti,"How many denoising steps?"),Ti.forEach(s),cr=f(os),Es=i(os,"LI",{});var Ri=a(Es);hr=p(Ri,"Stochastic or deterministic?"),Ri.forEach(s),dr=f(os),Ds=i(os,"LI",{});var Oi=a(Ds);mr=p(Oi,"What algorithm to use to find the denoised sample"),Oi.forEach(s),os.forEach(s),Ks=f(e),j=i(e,"P",{});var ps=a(j);_r=p(ps,"They can be quite complex and often define a trade-off between "),Ms=i(ps,"STRONG",{});var Bi=a(Ms);gr=p(Bi,"denoising speed"),Bi.forEach(s),vr=p(ps," and "),ks=i(ps,"STRONG",{});var Hi=a(ks);wr=p(Hi,"denoising quality"),Hi.forEach(s),$r=p(ps,`.
It is extremely difficult to measure quantitatively which scheduler works best for a given diffusion pipeline, so it is often recommended to simply try out which works best.`),ps.forEach(s),Qs=f(e),De=i(e,"P",{});var Fi=a(De);br=p(Fi,"The following paragraphs shows how to do so with the \u{1F9E8} Diffusers library."),Fi.forEach(s),Vs=f(e),L=i(e,"H2",{class:!0});var Jt=a(L);F=i(Jt,"A",{id:!0,class:!0,href:!0});var Wi=a(F);Ps=i(Wi,"SPAN",{});var Ui=a(Ps);d(Z.$$.fragment,Ui),Ui.forEach(s),Wi.forEach(s),Sr=f(Jt),js=i(Jt,"SPAN",{});var zi=a(js);yr=p(zi,"Load pipeline"),zi.forEach(s),Jt.forEach(s),Xs=f(e),W=i(e,"P",{});var Kt=a(W);Er=p(Kt,`Let\u2019s start by loading the stable diffusion pipeline.
Remember that you have to be a registered user on the \u{1F917} Hugging Face Hub, and have \u201Cclick-accepted\u201D the `),ee=i(Kt,"A",{href:!0,rel:!0});var Yi=a(ee);Dr=p(Yi,"license"),Yi.forEach(s),Mr=p(Kt," in order to use stable diffusion."),Kt.forEach(s),Zs=f(e),d(se.$$.fragment,e),et=f(e),Me=i(e,"P",{});var Ji=a(Me);kr=p(Ji,"Next, we move it to GPU:"),Ji.forEach(s),st=f(e),d(te.$$.fragment,e),tt=f(e),G=i(e,"H2",{class:!0});var Qt=a(G);U=i(Qt,"A",{id:!0,class:!0,href:!0});var Ki=a(U);qs=i(Ki,"SPAN",{});var Qi=a(qs);d(re.$$.fragment,Qi),Qi.forEach(s),Ki.forEach(s),Pr=f(Qt),As=i(Qt,"SPAN",{});var Vi=a(As);jr=p(Vi,"Access the scheduler"),Vi.forEach(s),Qt.forEach(s),rt=f(e),q=i(e,"P",{});var us=a(q);qr=p(us,"The scheduler is always one of the components of the pipeline and is usually called "),xs=i(us,"CODE",{});var Xi=a(xs);Ar=p(Xi,'"scheduler"'),Xi.forEach(s),xr=p(us,`.
So it can be accessed via the `),Ns=i(us,"CODE",{});var Zi=a(Ns);Nr=p(Zi,'"scheduler"'),Zi.forEach(s),Ir=p(us," property."),us.forEach(s),lt=f(e),d(le.$$.fragment,e),it=f(e),ie=i(e,"P",{});var mi=a(ie);Is=i(mi,"STRONG",{});var ea=a(Is);Lr=p(ea,"Output"),ea.forEach(s),Gr=p(mi,":"),mi.forEach(s),at=f(e),d(ae.$$.fragment,e),nt=f(e),z=i(e,"P",{});var Vt=a(z);Cr=p(Vt,"We can see that the scheduler is of type "),ke=i(Vt,"A",{href:!0});var sa=a(ke);Tr=p(sa,"PNDMScheduler"),sa.forEach(s),Rr=p(Vt,`.
Cool, now let\u2019s compare the scheduler in its performance to other schedulers.
First we define a prompt on which we will test all the different schedulers:`),Vt.forEach(s),ot=f(e),d(ne.$$.fragment,e),pt=f(e),Pe=i(e,"P",{});var ta=a(Pe);Or=p(ta,"Next, we create a generator from a random seed that will ensure that we can generate similar images as well as run the pipeline:"),ta.forEach(s),ut=f(e),d(oe.$$.fragment,e),ft=f(e),S=i(e,"P",{align:!0});var fs=a(S);Br=i(fs,"BR",{}),Hr=f(fs),je=i(fs,"IMG",{src:!0,width:!0}),Fr=f(fs),Wr=i(fs,"BR",{}),fs.forEach(s),ct=f(e),C=i(e,"H2",{class:!0});var Xt=a(C);Y=i(Xt,"A",{id:!0,class:!0,href:!0});var ra=a(Y);Ls=i(ra,"SPAN",{});var la=a(Ls);d(pe.$$.fragment,la),la.forEach(s),ra.forEach(s),Ur=f(Xt),Gs=i(Xt,"SPAN",{});var ia=a(Gs);zr=p(ia,"Changing the scheduler"),ia.forEach(s),Xt.forEach(s),ht=f(e),J=i(e,"P",{});var Zt=a(J);Yr=p(Zt,"Now we show how easy it is to change the scheduler of a pipeline. Every scheduler has a property "),Cs=i(Zt,"CODE",{});var aa=a(Cs);Jr=p(aa,"SchedulerMixin.compatibles"),aa.forEach(s),Kr=p(Zt,`
which defines all compatible schedulers. You can take a look at all available, compatible schedulers for the Stable Diffusion pipeline as follows.`),Zt.forEach(s),dt=f(e),d(ue.$$.fragment,e),mt=f(e),fe=i(e,"P",{});var _i=a(fe);Ts=i(_i,"STRONG",{});var na=a(Ts);Qr=p(na,"Output"),na.forEach(s),Vr=p(_i,":"),_i.forEach(s),_t=f(e),d(ce.$$.fragment,e),gt=f(e),qe=i(e,"P",{});var oa=a(qe);Xr=p(oa,"Cool, lots of schedulers to look at. Feel free to have a look at their respective class definitions:"),oa.forEach(s),vt=f(e),w=i(e,"UL",{});var b=a(w);Ae=i(b,"LI",{});var gi=a(Ae);xe=i(gi,"A",{href:!0});var pa=a(xe);Zr=p(pa,"LMSDiscreteScheduler"),pa.forEach(s),el=p(gi,","),gi.forEach(s),sl=f(b),Ne=i(b,"LI",{});var vi=a(Ne);Ie=i(vi,"A",{href:!0});var ua=a(Ie);tl=p(ua,"DDIMScheduler"),ua.forEach(s),rl=p(vi,","),vi.forEach(s),ll=f(b),Le=i(b,"LI",{});var wi=a(Le);Ge=i(wi,"A",{href:!0});var fa=a(Ge);il=p(fa,"DPMSolverMultistepScheduler"),fa.forEach(s),al=p(wi,","),wi.forEach(s),nl=f(b),Ce=i(b,"LI",{});var $i=a(Ce);Te=i($i,"A",{href:!0});var ca=a(Te);ol=p(ca,"EulerDiscreteScheduler"),ca.forEach(s),pl=p($i,","),$i.forEach(s),ul=f(b),Re=i(b,"LI",{});var bi=a(Re);Oe=i(bi,"A",{href:!0});var ha=a(Oe);fl=p(ha,"PNDMScheduler"),ha.forEach(s),cl=p(bi,","),bi.forEach(s),hl=f(b),Be=i(b,"LI",{});var Si=a(Be);He=i(Si,"A",{href:!0});var da=a(He);dl=p(da,"DDPMScheduler"),da.forEach(s),ml=p(Si,","),Si.forEach(s),_l=f(b),Fe=i(b,"LI",{});var yi=a(Fe);We=i(yi,"A",{href:!0});var ma=a(We);gl=p(ma,"EulerAncestralDiscreteScheduler"),ma.forEach(s),vl=p(yi,"."),yi.forEach(s),b.forEach(s),wt=f(e),A=i(e,"P",{});var cs=a(A);wl=p(cs,`We will now compare the input prompt with all other schedulers. To change the scheduler of the pipeline you can make use of the
convenient `),Rs=i(cs,"CODE",{});var _a=a(Rs);$l=p(_a,"ConfigMixin.config"),_a.forEach(s),bl=p(cs," property in combination with the "),Ue=i(cs,"A",{href:!0});var ga=a(Ue);Sl=p(ga,"ConfigMixin.from_config()"),ga.forEach(s),yl=p(cs," function."),cs.forEach(s),$t=f(e),d(he.$$.fragment,e),bt=f(e),ze=i(e,"P",{});var va=a(ze);El=p(va,"returns a dictionary of the configuration of the scheduler:"),va.forEach(s),St=f(e),de=i(e,"P",{});var Ei=a(de);Os=i(Ei,"STRONG",{});var wa=a(Os);Dl=p(wa,"Output"),wa.forEach(s),Ml=p(Ei,":"),Ei.forEach(s),yt=f(e),d(me.$$.fragment,e),Et=f(e),K=i(e,"P",{});var er=a(K);kl=p(er,`This configuration can then be used to instantiate a scheduler
of a different class that is compatible with the pipeline. Here,
we change the scheduler to the `),Ye=i(er,"A",{href:!0});var $a=a(Ye);Pl=p($a,"DDIMScheduler"),$a.forEach(s),jl=p(er,"."),er.forEach(s),Dt=f(e),d(_e.$$.fragment,e),Mt=f(e),Je=i(e,"P",{});var ba=a(Je);ql=p(ba,"Cool, now we can run the pipeline again to compare the generation quality."),ba.forEach(s),kt=f(e),d(ge.$$.fragment,e),Pt=f(e),y=i(e,"P",{align:!0});var hs=a(y);Al=i(hs,"BR",{}),xl=f(hs),Ke=i(hs,"IMG",{src:!0,width:!0}),Nl=f(hs),Il=i(hs,"BR",{}),hs.forEach(s),jt=f(e),T=i(e,"H2",{class:!0});var sr=a(T);Q=i(sr,"A",{id:!0,class:!0,href:!0});var Sa=a(Q);Bs=i(Sa,"SPAN",{});var ya=a(Bs);d(ve.$$.fragment,ya),ya.forEach(s),Sa.forEach(s),Ll=f(sr),Hs=i(sr,"SPAN",{});var Ea=a(Hs);Gl=p(Ea,"Compare schedulers"),Ea.forEach(s),sr.forEach(s),qt=f(e),x=i(e,"P",{});var ds=a(x);Cl=p(ds,"So far we have tried running the stable diffusion pipeline with two schedulers: "),Qe=i(ds,"A",{href:!0});var Da=a(Qe);Tl=p(Da,"PNDMScheduler"),Da.forEach(s),Rl=p(ds," and "),Ve=i(ds,"A",{href:!0});var Ma=a(Ve);Ol=p(Ma,"DDIMScheduler"),Ma.forEach(s),Bl=p(ds,`.
A number of better schedulers have been released that can be run with much fewer steps, let\u2019s compare them here:`),ds.forEach(s),At=f(e),we=i(e,"P",{});var Di=a(we);Xe=i(Di,"A",{href:!0});var ka=a(Xe);Hl=p(ka,"LMSDiscreteScheduler"),ka.forEach(s),Fl=p(Di," usually leads to better results:"),Di.forEach(s),xt=f(e),d($e.$$.fragment,e),Nt=f(e),E=i(e,"P",{align:!0});var ms=a(E);Wl=i(ms,"BR",{}),Ul=f(ms),Ze=i(ms,"IMG",{src:!0,width:!0}),zl=f(ms),Yl=i(ms,"BR",{}),ms.forEach(s),It=f(e),R=i(e,"P",{});var Fs=a(R);es=i(Fs,"A",{href:!0});var Pa=a(es);Jl=p(Pa,"EulerDiscreteScheduler"),Pa.forEach(s),Kl=p(Fs," and "),ss=i(Fs,"A",{href:!0});var ja=a(ss);Ql=p(ja,"EulerAncestralDiscreteScheduler"),ja.forEach(s),Vl=p(Fs," can generate high quality results with as little as 30 steps."),Fs.forEach(s),Lt=f(e),d(be.$$.fragment,e),Gt=f(e),D=i(e,"P",{align:!0});var _s=a(D);Xl=i(_s,"BR",{}),Zl=f(_s),ts=i(_s,"IMG",{src:!0,width:!0}),ei=f(_s),si=i(_s,"BR",{}),_s.forEach(s),Ct=f(e),rs=i(e,"P",{});var qa=a(rs);ti=p(qa,"and:"),qa.forEach(s),Tt=f(e),d(Se.$$.fragment,e),Rt=f(e),M=i(e,"P",{align:!0});var gs=a(M);ri=i(gs,"BR",{}),li=f(gs),ls=i(gs,"IMG",{src:!0,width:!0}),ii=f(gs),ai=i(gs,"BR",{}),gs.forEach(s),Ot=f(e),V=i(e,"P",{});var tr=a(V);ni=p(tr,"At the time of writing this doc "),is=i(tr,"A",{href:!0});var Aa=a(is);oi=p(Aa,"DPMSolverMultistepScheduler"),Aa.forEach(s),pi=p(tr,` gives arguably the best speed/quality trade-off and can be run with as little
as 20 steps.`),tr.forEach(s),Bt=f(e),d(ye.$$.fragment,e),Ht=f(e),k=i(e,"P",{align:!0});var vs=a(k);ui=i(vs,"BR",{}),fi=f(vs),as=i(vs,"IMG",{src:!0,width:!0}),ci=f(vs),hi=i(vs,"BR",{}),vs.forEach(s),Ft=f(e),ns=i(e,"P",{});var xa=a(ns);di=p(xa,`As you can see most images look very similar and are arguably of very similar quality. It often really depends on the specific use case which scheduler to choose. A good approach is always to run multiple different
schedulers to compare results.`),xa.forEach(s),this.h()},h(){c(N,"name","hf:doc:metadata"),c(N,"content",JSON.stringify(Oa)),c(O,"id","schedulers"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#schedulers"),c(I,"class","relative group"),c(Ee,"href","../api/schedulers.mdx"),c(F,"id","load-pipeline"),c(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(F,"href","#load-pipeline"),c(L,"class","relative group"),c(ee,"href","https://huggingface.co/runwayml/stable-diffusion-v1-5"),c(ee,"rel","nofollow"),c(U,"id","access-the-scheduler"),c(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(U,"href","#access-the-scheduler"),c(G,"class","relative group"),c(ke,"href","/docs/diffusers/main/en/api/schedulers#diffusers.PNDMScheduler"),ws(je.src,ki="https://huggingface.co/datasets/patrickvonplaten/images/resolve/main/diffusers_docs/astronaut_pndm.png")||c(je,"src",ki),c(je,"width","400"),c(S,"align","center"),c(Y,"id","changing-the-scheduler"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#changing-the-scheduler"),c(C,"class","relative group"),c(xe,"href","/docs/diffusers/main/en/api/schedulers#diffusers.LMSDiscreteScheduler"),c(Ie,"href","/docs/diffusers/main/en/api/schedulers#diffusers.DDIMScheduler"),c(Ge,"href","/docs/diffusers/main/en/api/schedulers#diffusers.DPMSolverMultistepScheduler"),c(Te,"href","/docs/diffusers/main/en/api/schedulers#diffusers.EulerDiscreteScheduler"),c(Oe,"href","/docs/diffusers/main/en/api/schedulers#diffusers.PNDMScheduler"),c(He,"href","/docs/diffusers/main/en/api/schedulers#diffusers.DDPMScheduler"),c(We,"href","/docs/diffusers/main/en/api/schedulers#diffusers.EulerAncestralDiscreteScheduler"),c(Ue,"href","/docs/diffusers/main/en/using-diffusers/configuration#diffusers.ConfigMixin.from_config"),c(Ye,"href","/docs/diffusers/main/en/api/schedulers#diffusers.DDIMScheduler"),ws(Ke.src,Pi="https://huggingface.co/datasets/patrickvonplaten/images/resolve/main/diffusers_docs/astronaut_ddim.png")||c(Ke,"src",Pi),c(Ke,"width","400"),c(y,"align","center"),c(Q,"id","compare-schedulers"),c(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Q,"href","#compare-schedulers"),c(T,"class","relative group"),c(Qe,"href","/docs/diffusers/main/en/api/schedulers#diffusers.PNDMScheduler"),c(Ve,"href","/docs/diffusers/main/en/api/schedulers#diffusers.DDIMScheduler"),c(Xe,"href","/docs/diffusers/main/en/api/schedulers#diffusers.LMSDiscreteScheduler"),ws(Ze.src,ji="https://huggingface.co/datasets/patrickvonplaten/images/resolve/main/diffusers_docs/astronaut_lms.png")||c(Ze,"src",ji),c(Ze,"width","400"),c(E,"align","center"),c(es,"href","/docs/diffusers/main/en/api/schedulers#diffusers.EulerDiscreteScheduler"),c(ss,"href","/docs/diffusers/main/en/api/schedulers#diffusers.EulerAncestralDiscreteScheduler"),ws(ts.src,qi="https://huggingface.co/datasets/patrickvonplaten/images/resolve/main/diffusers_docs/astronaut_euler_discrete.png")||c(ts,"src",qi),c(ts,"width","400"),c(D,"align","center"),ws(ls.src,Ai="https://huggingface.co/datasets/patrickvonplaten/images/resolve/main/diffusers_docs/astronaut_euler_ancestral.png")||c(ls,"src",Ai),c(ls,"width","400"),c(M,"align","center"),c(is,"href","/docs/diffusers/main/en/api/schedulers#diffusers.DPMSolverMultistepScheduler"),ws(as.src,xi="https://huggingface.co/datasets/patrickvonplaten/images/resolve/main/diffusers_docs/astronaut_dpm.png")||c(as,"src",xi),c(as,"width","400"),c(k,"align","center")},m(e,r){t(document.head,N),n(e,Us,r),n(e,I,r),t(I,O),t(O,$s),m(X,$s,null),t(I,rr),t(I,bs),t(bs,lr),n(e,zs,r),n(e,B,r),t(B,ir),t(B,Ee),t(Ee,ar),t(B,nr),n(e,Ys,r),n(e,H,r),t(H,or),t(H,Ss),t(Ss,pr),t(H,ur),n(e,Js,r),n(e,P,r),t(P,ys),t(ys,fr),t(P,cr),t(P,Es),t(Es,hr),t(P,dr),t(P,Ds),t(Ds,mr),n(e,Ks,r),n(e,j,r),t(j,_r),t(j,Ms),t(Ms,gr),t(j,vr),t(j,ks),t(ks,wr),t(j,$r),n(e,Qs,r),n(e,De,r),t(De,br),n(e,Vs,r),n(e,L,r),t(L,F),t(F,Ps),m(Z,Ps,null),t(L,Sr),t(L,js),t(js,yr),n(e,Xs,r),n(e,W,r),t(W,Er),t(W,ee),t(ee,Dr),t(W,Mr),n(e,Zs,r),m(se,e,r),n(e,et,r),n(e,Me,r),t(Me,kr),n(e,st,r),m(te,e,r),n(e,tt,r),n(e,G,r),t(G,U),t(U,qs),m(re,qs,null),t(G,Pr),t(G,As),t(As,jr),n(e,rt,r),n(e,q,r),t(q,qr),t(q,xs),t(xs,Ar),t(q,xr),t(q,Ns),t(Ns,Nr),t(q,Ir),n(e,lt,r),m(le,e,r),n(e,it,r),n(e,ie,r),t(ie,Is),t(Is,Lr),t(ie,Gr),n(e,at,r),m(ae,e,r),n(e,nt,r),n(e,z,r),t(z,Cr),t(z,ke),t(ke,Tr),t(z,Rr),n(e,ot,r),m(ne,e,r),n(e,pt,r),n(e,Pe,r),t(Pe,Or),n(e,ut,r),m(oe,e,r),n(e,ft,r),n(e,S,r),t(S,Br),t(S,Hr),t(S,je),t(S,Fr),t(S,Wr),n(e,ct,r),n(e,C,r),t(C,Y),t(Y,Ls),m(pe,Ls,null),t(C,Ur),t(C,Gs),t(Gs,zr),n(e,ht,r),n(e,J,r),t(J,Yr),t(J,Cs),t(Cs,Jr),t(J,Kr),n(e,dt,r),m(ue,e,r),n(e,mt,r),n(e,fe,r),t(fe,Ts),t(Ts,Qr),t(fe,Vr),n(e,_t,r),m(ce,e,r),n(e,gt,r),n(e,qe,r),t(qe,Xr),n(e,vt,r),n(e,w,r),t(w,Ae),t(Ae,xe),t(xe,Zr),t(Ae,el),t(w,sl),t(w,Ne),t(Ne,Ie),t(Ie,tl),t(Ne,rl),t(w,ll),t(w,Le),t(Le,Ge),t(Ge,il),t(Le,al),t(w,nl),t(w,Ce),t(Ce,Te),t(Te,ol),t(Ce,pl),t(w,ul),t(w,Re),t(Re,Oe),t(Oe,fl),t(Re,cl),t(w,hl),t(w,Be),t(Be,He),t(He,dl),t(Be,ml),t(w,_l),t(w,Fe),t(Fe,We),t(We,gl),t(Fe,vl),n(e,wt,r),n(e,A,r),t(A,wl),t(A,Rs),t(Rs,$l),t(A,bl),t(A,Ue),t(Ue,Sl),t(A,yl),n(e,$t,r),m(he,e,r),n(e,bt,r),n(e,ze,r),t(ze,El),n(e,St,r),n(e,de,r),t(de,Os),t(Os,Dl),t(de,Ml),n(e,yt,r),m(me,e,r),n(e,Et,r),n(e,K,r),t(K,kl),t(K,Ye),t(Ye,Pl),t(K,jl),n(e,Dt,r),m(_e,e,r),n(e,Mt,r),n(e,Je,r),t(Je,ql),n(e,kt,r),m(ge,e,r),n(e,Pt,r),n(e,y,r),t(y,Al),t(y,xl),t(y,Ke),t(y,Nl),t(y,Il),n(e,jt,r),n(e,T,r),t(T,Q),t(Q,Bs),m(ve,Bs,null),t(T,Ll),t(T,Hs),t(Hs,Gl),n(e,qt,r),n(e,x,r),t(x,Cl),t(x,Qe),t(Qe,Tl),t(x,Rl),t(x,Ve),t(Ve,Ol),t(x,Bl),n(e,At,r),n(e,we,r),t(we,Xe),t(Xe,Hl),t(we,Fl),n(e,xt,r),m($e,e,r),n(e,Nt,r),n(e,E,r),t(E,Wl),t(E,Ul),t(E,Ze),t(E,zl),t(E,Yl),n(e,It,r),n(e,R,r),t(R,es),t(es,Jl),t(R,Kl),t(R,ss),t(ss,Ql),t(R,Vl),n(e,Lt,r),m(be,e,r),n(e,Gt,r),n(e,D,r),t(D,Xl),t(D,Zl),t(D,ts),t(D,ei),t(D,si),n(e,Ct,r),n(e,rs,r),t(rs,ti),n(e,Tt,r),m(Se,e,r),n(e,Rt,r),n(e,M,r),t(M,ri),t(M,li),t(M,ls),t(M,ii),t(M,ai),n(e,Ot,r),n(e,V,r),t(V,ni),t(V,is),t(is,oi),t(V,pi),n(e,Bt,r),m(ye,e,r),n(e,Ht,r),n(e,k,r),t(k,ui),t(k,fi),t(k,as),t(k,ci),t(k,hi),n(e,Ft,r),n(e,ns,r),t(ns,di),Wt=!0},p:Ca,i(e){Wt||(_(X.$$.fragment,e),_(Z.$$.fragment,e),_(se.$$.fragment,e),_(te.$$.fragment,e),_(re.$$.fragment,e),_(le.$$.fragment,e),_(ae.$$.fragment,e),_(ne.$$.fragment,e),_(oe.$$.fragment,e),_(pe.$$.fragment,e),_(ue.$$.fragment,e),_(ce.$$.fragment,e),_(he.$$.fragment,e),_(me.$$.fragment,e),_(_e.$$.fragment,e),_(ge.$$.fragment,e),_(ve.$$.fragment,e),_($e.$$.fragment,e),_(be.$$.fragment,e),_(Se.$$.fragment,e),_(ye.$$.fragment,e),Wt=!0)},o(e){g(X.$$.fragment,e),g(Z.$$.fragment,e),g(se.$$.fragment,e),g(te.$$.fragment,e),g(re.$$.fragment,e),g(le.$$.fragment,e),g(ae.$$.fragment,e),g(ne.$$.fragment,e),g(oe.$$.fragment,e),g(pe.$$.fragment,e),g(ue.$$.fragment,e),g(ce.$$.fragment,e),g(he.$$.fragment,e),g(me.$$.fragment,e),g(_e.$$.fragment,e),g(ge.$$.fragment,e),g(ve.$$.fragment,e),g($e.$$.fragment,e),g(be.$$.fragment,e),g(Se.$$.fragment,e),g(ye.$$.fragment,e),Wt=!1},d(e){s(N),e&&s(Us),e&&s(I),v(X),e&&s(zs),e&&s(B),e&&s(Ys),e&&s(H),e&&s(Js),e&&s(P),e&&s(Ks),e&&s(j),e&&s(Qs),e&&s(De),e&&s(Vs),e&&s(L),v(Z),e&&s(Xs),e&&s(W),e&&s(Zs),v(se,e),e&&s(et),e&&s(Me),e&&s(st),v(te,e),e&&s(tt),e&&s(G),v(re),e&&s(rt),e&&s(q),e&&s(lt),v(le,e),e&&s(it),e&&s(ie),e&&s(at),v(ae,e),e&&s(nt),e&&s(z),e&&s(ot),v(ne,e),e&&s(pt),e&&s(Pe),e&&s(ut),v(oe,e),e&&s(ft),e&&s(S),e&&s(ct),e&&s(C),v(pe),e&&s(ht),e&&s(J),e&&s(dt),v(ue,e),e&&s(mt),e&&s(fe),e&&s(_t),v(ce,e),e&&s(gt),e&&s(qe),e&&s(vt),e&&s(w),e&&s(wt),e&&s(A),e&&s($t),v(he,e),e&&s(bt),e&&s(ze),e&&s(St),e&&s(de),e&&s(yt),v(me,e),e&&s(Et),e&&s(K),e&&s(Dt),v(_e,e),e&&s(Mt),e&&s(Je),e&&s(kt),v(ge,e),e&&s(Pt),e&&s(y),e&&s(jt),e&&s(T),v(ve),e&&s(qt),e&&s(x),e&&s(At),e&&s(we),e&&s(xt),v($e,e),e&&s(Nt),e&&s(E),e&&s(It),e&&s(R),e&&s(Lt),v(be,e),e&&s(Gt),e&&s(D),e&&s(Ct),e&&s(rs),e&&s(Tt),v(Se,e),e&&s(Rt),e&&s(M),e&&s(Ot),e&&s(V),e&&s(Bt),v(ye,e),e&&s(Ht),e&&s(k),e&&s(Ft),e&&s(ns)}}}const Oa={local:"schedulers",sections:[{local:"load-pipeline",title:"Load pipeline"},{local:"access-the-scheduler",title:"Access the scheduler"},{local:"changing-the-scheduler",title:"Changing the scheduler"},{local:"compare-schedulers",title:"Compare schedulers"}],title:"Schedulers"};function Ba(Mi){return Ta(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ua extends Na{constructor(N){super();Ia(this,N,Ba,Ra,La,{})}}export{Ua as default,Oa as metadata};
