import{S as fi,i as ci,s as hi,e as n,k as u,w as y,t as i,M as di,c as a,d as s,m as f,a as r,x as v,h as l,b as c,G as t,g as p,y as b,L as mi,q as P,o as k,B as $,v as _i}from"../../chunks/vendor-hf-doc-builder.js";import{I as ui}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as q}from"../../chunks/CodeBlock-hf-doc-builder.js";function wi(Nt){let E,Te,j,N,ce,z,ws,he,gs,Ae,D,de,ys,vs,L,bs,Ps,Ue,ne,ks,He,O,$s,me,Es,js,Fe,G,Me,h,Ds,_e,xs,Ns,we,Os,Ss,ge,Cs,Ts,ye,As,Us,Ie,R,qe,S,Hs,ve,Fs,Ms,ze,Y,Le,m,Is,be,qs,zs,Pe,Ls,Gs,Ge,B,Re,C,Rs,W,Ys,Bs,Ye,J,Be,_,Ws,ke,Js,Ks,K,Qs,Vs,We,Q,Je,w,Xs,V,Zs,et,$e,st,tt,Ke,X,Qe,T,it,Z,lt,ot,Ve,ae,Ee,nt,Xe,A,at,ee,rt,pt,Ze,U,ut,je,ft,ct,es,x,H,De,se,ht,xe,dt,ss,d,mt,Ne,_t,wt,te,gt,yt,ie,Oe,vt,bt,ts,F,Pt,le,kt,$t,is,re,Et,ls,oe,os,M,jt,Se,Dt,xt,ns;return z=new ui({}),G=new q({props:{code:`from diffusers import DiffusionPipeline
import torch


class UnetSchedulerOneForwardPipeline(DiffusionPipeline):
    def __init__(self, unet, scheduler):
        super().__init__()`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline
<span class="hljs-keyword">import</span> torch


<span class="hljs-keyword">class</span> <span class="hljs-title class_">UnetSchedulerOneForwardPipeline</span>(<span class="hljs-title class_ inherited__">DiffusionPipeline</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, unet, scheduler</span>):
        <span class="hljs-built_in">super</span>().__init__()`}}),R=new q({props:{code:`from diffusers import DiffusionPipeline
import torch


class UnetSchedulerOneForwardPipeline(DiffusionPipeline):
    def __init__(self, unet, scheduler):
        super().__init__()

        self.register_modules(unet=unet, scheduler=scheduler)`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline
<span class="hljs-keyword">import</span> torch


<span class="hljs-keyword">class</span> <span class="hljs-title class_">UnetSchedulerOneForwardPipeline</span>(<span class="hljs-title class_ inherited__">DiffusionPipeline</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, unet, scheduler</span>):
        <span class="hljs-built_in">super</span>().__init__()

        self.register_modules(unet=unet, scheduler=scheduler)`}}),Y=new q({props:{code:`from diffusers import DiffusionPipeline
import torch


class UnetSchedulerOneForwardPipeline(DiffusionPipeline):
    def __init__(self, unet, scheduler):
        super().__init__()

        self.register_modules(unet=unet, scheduler=scheduler)

    def __call__(self):
        image = torch.randn(
            (1, self.unet.in_channels, self.unet.sample_size, self.unet.sample_size),
        )
        timestep = 1

        model_output = self.unet(image, timestep).sample
        scheduler_output = self.scheduler.step(model_output, timestep, image).prev_sample

        return scheduler_output`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline
<span class="hljs-keyword">import</span> torch


<span class="hljs-keyword">class</span> <span class="hljs-title class_">UnetSchedulerOneForwardPipeline</span>(<span class="hljs-title class_ inherited__">DiffusionPipeline</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, unet, scheduler</span>):
        <span class="hljs-built_in">super</span>().__init__()

        self.register_modules(unet=unet, scheduler=scheduler)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__call__</span>(<span class="hljs-params">self</span>):
        image = torch.randn(
            (<span class="hljs-number">1</span>, self.unet.in_channels, self.unet.sample_size, self.unet.sample_size),
        )
        timestep = <span class="hljs-number">1</span>

        model_output = self.unet(image, timestep).sample
        scheduler_output = self.scheduler.step(model_output, timestep, image).prev_sample

        <span class="hljs-keyword">return</span> scheduler_output`}}),B=new q({props:{code:`from diffusers import DDPMScheduler, Unet2DModel

scheduler = DDPMScheduler()
unet = UNet2DModel()

pipeline = UnetSchedulerOneForwardPipeline(unet=unet, scheduler=scheduler)

output = pipeline()`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DDPMScheduler, Unet2DModel

scheduler = DDPMScheduler()
unet = UNet2DModel()

pipeline = UnetSchedulerOneForwardPipeline(unet=unet, scheduler=scheduler)

output = pipeline()`}}),J=new q({props:{code:`pipeline = UnetSchedulerOneForwardPipeline.from_pretrained("google/ddpm-cifar10-32")

output = pipeline()`,highlighted:`pipeline = UnetSchedulerOneForwardPipeline.from_pretrained(<span class="hljs-string">&quot;google/ddpm-cifar10-32&quot;</span>)

output = pipeline()`}}),Q=new q({props:{code:`from diffusers import DiffusionPipeline
import torch


class UnetSchedulerOneForwardPipeline(DiffusionPipeline):
    def __init__(self, unet, scheduler):
        super().__init__()

        self.register_modules(unet=unet, scheduler=scheduler)

    def __call__(self):
        image = torch.randn(
            (1, self.unet.in_channels, self.unet.sample_size, self.unet.sample_size),
        )
        timestep = 1

        model_output = self.unet(image, timestep).sample
        scheduler_output = self.scheduler.step(model_output, timestep, image).prev_sample

        return scheduler_output`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline
<span class="hljs-keyword">import</span> torch


<span class="hljs-keyword">class</span> <span class="hljs-title class_">UnetSchedulerOneForwardPipeline</span>(<span class="hljs-title class_ inherited__">DiffusionPipeline</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, unet, scheduler</span>):
        <span class="hljs-built_in">super</span>().__init__()

        self.register_modules(unet=unet, scheduler=scheduler)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__call__</span>(<span class="hljs-params">self</span>):
        image = torch.randn(
            (<span class="hljs-number">1</span>, self.unet.in_channels, self.unet.sample_size, self.unet.sample_size),
        )
        timestep = <span class="hljs-number">1</span>

        model_output = self.unet(image, timestep).sample
        scheduler_output = self.scheduler.step(model_output, timestep, image).prev_sample

        <span class="hljs-keyword">return</span> scheduler_output`}}),X=new q({props:{code:`from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained("google/ddpm-cifar10-32", custom_pipeline="one_step_unet")
pipe()`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;google/ddpm-cifar10-32&quot;</span>, custom_pipeline=<span class="hljs-string">&quot;one_step_unet&quot;</span>)
pipe()`}}),se=new ui({}),oe=new q({props:{code:`# 2. Load the pipeline class, if using custom module then load it from the hub
# if we load from explicit class, let's use it
if custom_pipeline is not None:
    pipeline_class = get_class_from_dynamic_module(
        custom_pipeline, module_file=CUSTOM_PIPELINE_FILE_NAME, cache_dir=custom_pipeline
    )
elif cls != DiffusionPipeline:
    pipeline_class = cls
else:
    diffusers_module = importlib.import_module(cls.__module__.split(".")[0])
    pipeline_class = getattr(diffusers_module, config_dict["_class_name"])`,highlighted:`<span class="hljs-comment"># 2. Load the pipeline class, if using custom module then load it from the hub</span>
<span class="hljs-comment"># if we load from explicit class, let&#x27;s use it</span>
<span class="hljs-keyword">if</span> custom_pipeline <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> <span class="hljs-literal">None</span>:
    pipeline_class = get_class_from_dynamic_module(
        custom_pipeline, module_file=CUSTOM_PIPELINE_FILE_NAME, cache_dir=custom_pipeline
    )
<span class="hljs-keyword">elif</span> cls != DiffusionPipeline:
    pipeline_class = cls
<span class="hljs-keyword">else</span>:
    diffusers_module = importlib.import_module(cls.__module__.split(<span class="hljs-string">&quot;.&quot;</span>)[<span class="hljs-number">0</span>])
    pipeline_class = <span class="hljs-built_in">getattr</span>(diffusers_module, config_dict[<span class="hljs-string">&quot;_class_name&quot;</span>])`}}),{c(){E=n("meta"),Te=u(),j=n("h1"),N=n("a"),ce=n("span"),y(z.$$.fragment),ws=u(),he=n("span"),gs=i("How to build a community pipeline"),Ae=u(),D=n("p"),de=n("em"),ys=i("Note"),vs=i(": this page was built from the GitHub Issue on Community Pipelines "),L=n("a"),bs=i("#841"),Ps=i("."),Ue=u(),ne=n("p"),ks=i(`Let\u2019s make an example!
Say you want to define a pipeline that just does a single forward pass to a U-Net and then calls a scheduler only once (Note, this doesn\u2019t make any sense from a scientific point of view, but only represents an example of how things work under the hood).`),He=u(),O=n("p"),$s=i(`Cool! So you open your favorite IDE and start creating your pipeline \u{1F4BB}.
First, what model weights and configurations do we need?
We have a U-Net and a scheduler, so our pipeline should take a U-Net and a scheduler as an argument.
Also, as stated above, you\u2019d like to be able to load weights and the scheduler config for Hub and share your code with others, so we\u2019ll inherit from `),me=n("code"),Es=i("DiffusionPipeline"),js=i(":"),Fe=u(),y(G.$$.fragment),Me=u(),h=n("p"),Ds=i("Now, we must save the "),_e=n("code"),xs=i("unet"),Ns=i(" and "),we=n("code"),Os=i("scheduler"),Ss=i(" in a config file so that you can save your pipeline with "),ge=n("code"),Cs=i("save_pretrained"),Ts=i(`.
Therefore, make sure you add every component that is save-able to the `),ye=n("code"),As=i("register_modules"),Us=i(" function:"),Ie=u(),y(R.$$.fragment),qe=u(),S=n("p"),Hs=i("Cool, the init is done! \u{1F525} Now, let\u2019s go into the forward pass, which we recommend defining as "),ve=n("code"),Fs=i("__call__"),Ms=i(" . Here you\u2019re given all the creative freedom there is. For our amazing \u201Cone-step\u201D pipeline, we simply create a random image and call the unet once and the scheduler once:"),ze=u(),y(Y.$$.fragment),Le=u(),m=n("p"),Is=i("Cool, that\u2019s it! \u{1F680} You can now run this pipeline by passing a "),be=n("code"),qs=i("unet"),zs=i(" and a "),Pe=n("code"),Ls=i("scheduler"),Gs=i(" to the init:"),Ge=u(),y(B.$$.fragment),Re=u(),C=n("p"),Rs=i("But what\u2019s even better is that you can load pre-existing weights into the pipeline if they match exactly your pipeline structure. This is e.g. the case for "),W=n("a"),Ys=i("https://huggingface.co/google/ddpm-cifar10-32"),Bs=i(" so that we can do the following:"),Ye=u(),y(J.$$.fragment),Be=u(),_=n("p"),Ws=i("We want to share this amazing pipeline with the community, so we would open a PR request to add the following code under "),ke=n("code"),Js=i("one_step_unet.py"),Ks=i(" to "),K=n("a"),Qs=i("https://github.com/huggingface/diffusers/tree/main/examples/community"),Vs=i(" ."),We=u(),y(Q.$$.fragment),Je=u(),w=n("p"),Xs=i("Our amazing pipeline got merged here: "),V=n("a"),Zs=i("#840"),et=i(`.
Now everybody that has `),$e=n("code"),st=i("diffusers >= 0.4.0"),tt=i(" installed can use our pipeline magically \u{1FA84} as follows:"),Ke=u(),y(X.$$.fragment),Qe=u(),T=n("p"),it=i("Another way to upload your custom_pipeline, besides sending a PR, is uploading the code that contains it to the Hugging Face Hub, "),Z=n("a"),lt=i("as exemplified here"),ot=i("."),Ve=u(),ae=n("p"),Ee=n("strong"),nt=i("Try it out now - it works!"),Xe=u(),A=n("p"),at=i("In general, you will want to create much more sophisticated pipelines, so we recommend looking at existing pipelines here: "),ee=n("a"),rt=i("https://github.com/huggingface/diffusers/tree/main/examples/community"),pt=i("."),Ze=u(),U=n("p"),ut=i(`IMPORTANT:
You can use whatever package you want in your community pipeline file - as long as the user has it installed, everything will work fine. Make sure you have one and only one pipeline class that inherits from `),je=n("code"),ft=i("DiffusionPipeline"),ct=i(" as this will be automatically detected."),es=u(),x=n("h2"),H=n("a"),De=n("span"),y(se.$$.fragment),ht=u(),xe=n("span"),dt=i("How do community pipelines work?"),ss=i(`

A community pipeline is a class that has to inherit from ['DiffusionPipeline']:
and that has been added to \`examples/community\` [files](https://github.com/huggingface/diffusers/tree/main/examples/community).
The community can load the pipeline code via the custom_pipeline argument from DiffusionPipeline. See docs [here](https://huggingface.co/docs/diffusers/api/diffusion_pipeline#diffusers.DiffusionPipeline.from_pretrained.custom_pipeline):
`),d=n("p"),mt=i(`This means:
The model weights and configs of the pipeline should be loaded from the `),Ne=n("code"),_t=i("pretrained_model_name_or_path"),wt=u(),te=n("a"),gt=i("argument"),yt=i(`:
whereas the code that powers the community pipeline is defined in a file added in `),ie=n("a"),Oe=n("code"),vt=i("examples/community"),bt=i("."),ts=u(),F=n("p"),Pt=i(`Now, it might very well be that only some of your pipeline components weights can be downloaded from an official repo.
The other components should then be passed directly to init as is the case for the ClIP guidance notebook `),le=n("a"),kt=i("here"),$t=i("."),is=u(),re=n("p"),Et=i("The magic behind all of this is that we load the code directly from GitHub. You can check it out in more detail if you follow the functionality defined here:"),ls=u(),y(oe.$$.fragment),os=u(),M=n("p"),jt=i("This is why a community pipeline merged to GitHub will be directly available to all "),Se=n("code"),Dt=i("diffusers"),xt=i(" packages."),this.h()},l(e){const o=di('[data-svelte="svelte-1phssyn"]',document.head);E=a(o,"META",{name:!0,content:!0}),o.forEach(s),Te=f(e),j=a(e,"H1",{class:!0});var as=r(j);N=a(as,"A",{id:!0,class:!0,href:!0});var Ot=r(N);ce=a(Ot,"SPAN",{});var St=r(ce);v(z.$$.fragment,St),St.forEach(s),Ot.forEach(s),ws=f(as),he=a(as,"SPAN",{});var Ct=r(he);gs=l(Ct,"How to build a community pipeline"),Ct.forEach(s),as.forEach(s),Ae=f(e),D=a(e,"P",{});var Ce=r(D);de=a(Ce,"EM",{});var Tt=r(de);ys=l(Tt,"Note"),Tt.forEach(s),vs=l(Ce,": this page was built from the GitHub Issue on Community Pipelines "),L=a(Ce,"A",{href:!0,rel:!0});var At=r(L);bs=l(At,"#841"),At.forEach(s),Ps=l(Ce,"."),Ce.forEach(s),Ue=f(e),ne=a(e,"P",{});var Ut=r(ne);ks=l(Ut,`Let\u2019s make an example!
Say you want to define a pipeline that just does a single forward pass to a U-Net and then calls a scheduler only once (Note, this doesn\u2019t make any sense from a scientific point of view, but only represents an example of how things work under the hood).`),Ut.forEach(s),He=f(e),O=a(e,"P",{});var rs=r(O);$s=l(rs,`Cool! So you open your favorite IDE and start creating your pipeline \u{1F4BB}.
First, what model weights and configurations do we need?
We have a U-Net and a scheduler, so our pipeline should take a U-Net and a scheduler as an argument.
Also, as stated above, you\u2019d like to be able to load weights and the scheduler config for Hub and share your code with others, so we\u2019ll inherit from `),me=a(rs,"CODE",{});var Ht=r(me);Es=l(Ht,"DiffusionPipeline"),Ht.forEach(s),js=l(rs,":"),rs.forEach(s),Fe=f(e),v(G.$$.fragment,e),Me=f(e),h=a(e,"P",{});var g=r(h);Ds=l(g,"Now, we must save the "),_e=a(g,"CODE",{});var Ft=r(_e);xs=l(Ft,"unet"),Ft.forEach(s),Ns=l(g," and "),we=a(g,"CODE",{});var Mt=r(we);Os=l(Mt,"scheduler"),Mt.forEach(s),Ss=l(g," in a config file so that you can save your pipeline with "),ge=a(g,"CODE",{});var It=r(ge);Cs=l(It,"save_pretrained"),It.forEach(s),Ts=l(g,`.
Therefore, make sure you add every component that is save-able to the `),ye=a(g,"CODE",{});var qt=r(ye);As=l(qt,"register_modules"),qt.forEach(s),Us=l(g," function:"),g.forEach(s),Ie=f(e),v(R.$$.fragment,e),qe=f(e),S=a(e,"P",{});var ps=r(S);Hs=l(ps,"Cool, the init is done! \u{1F525} Now, let\u2019s go into the forward pass, which we recommend defining as "),ve=a(ps,"CODE",{});var zt=r(ve);Fs=l(zt,"__call__"),zt.forEach(s),Ms=l(ps," . Here you\u2019re given all the creative freedom there is. For our amazing \u201Cone-step\u201D pipeline, we simply create a random image and call the unet once and the scheduler once:"),ps.forEach(s),ze=f(e),v(Y.$$.fragment,e),Le=f(e),m=a(e,"P",{});var pe=r(m);Is=l(pe,"Cool, that\u2019s it! \u{1F680} You can now run this pipeline by passing a "),be=a(pe,"CODE",{});var Lt=r(be);qs=l(Lt,"unet"),Lt.forEach(s),zs=l(pe," and a "),Pe=a(pe,"CODE",{});var Gt=r(Pe);Ls=l(Gt,"scheduler"),Gt.forEach(s),Gs=l(pe," to the init:"),pe.forEach(s),Ge=f(e),v(B.$$.fragment,e),Re=f(e),C=a(e,"P",{});var us=r(C);Rs=l(us,"But what\u2019s even better is that you can load pre-existing weights into the pipeline if they match exactly your pipeline structure. This is e.g. the case for "),W=a(us,"A",{href:!0,rel:!0});var Rt=r(W);Ys=l(Rt,"https://huggingface.co/google/ddpm-cifar10-32"),Rt.forEach(s),Bs=l(us," so that we can do the following:"),us.forEach(s),Ye=f(e),v(J.$$.fragment,e),Be=f(e),_=a(e,"P",{});var ue=r(_);Ws=l(ue,"We want to share this amazing pipeline with the community, so we would open a PR request to add the following code under "),ke=a(ue,"CODE",{});var Yt=r(ke);Js=l(Yt,"one_step_unet.py"),Yt.forEach(s),Ks=l(ue," to "),K=a(ue,"A",{href:!0,rel:!0});var Bt=r(K);Qs=l(Bt,"https://github.com/huggingface/diffusers/tree/main/examples/community"),Bt.forEach(s),Vs=l(ue," ."),ue.forEach(s),We=f(e),v(Q.$$.fragment,e),Je=f(e),w=a(e,"P",{});var fe=r(w);Xs=l(fe,"Our amazing pipeline got merged here: "),V=a(fe,"A",{href:!0,rel:!0});var Wt=r(V);Zs=l(Wt,"#840"),Wt.forEach(s),et=l(fe,`.
Now everybody that has `),$e=a(fe,"CODE",{});var Jt=r($e);st=l(Jt,"diffusers >= 0.4.0"),Jt.forEach(s),tt=l(fe," installed can use our pipeline magically \u{1FA84} as follows:"),fe.forEach(s),Ke=f(e),v(X.$$.fragment,e),Qe=f(e),T=a(e,"P",{});var fs=r(T);it=l(fs,"Another way to upload your custom_pipeline, besides sending a PR, is uploading the code that contains it to the Hugging Face Hub, "),Z=a(fs,"A",{href:!0,rel:!0});var Kt=r(Z);lt=l(Kt,"as exemplified here"),Kt.forEach(s),ot=l(fs,"."),fs.forEach(s),Ve=f(e),ae=a(e,"P",{});var Qt=r(ae);Ee=a(Qt,"STRONG",{});var Vt=r(Ee);nt=l(Vt,"Try it out now - it works!"),Vt.forEach(s),Qt.forEach(s),Xe=f(e),A=a(e,"P",{});var cs=r(A);at=l(cs,"In general, you will want to create much more sophisticated pipelines, so we recommend looking at existing pipelines here: "),ee=a(cs,"A",{href:!0,rel:!0});var Xt=r(ee);rt=l(Xt,"https://github.com/huggingface/diffusers/tree/main/examples/community"),Xt.forEach(s),pt=l(cs,"."),cs.forEach(s),Ze=f(e),U=a(e,"P",{});var hs=r(U);ut=l(hs,`IMPORTANT:
You can use whatever package you want in your community pipeline file - as long as the user has it installed, everything will work fine. Make sure you have one and only one pipeline class that inherits from `),je=a(hs,"CODE",{});var Zt=r(je);ft=l(Zt,"DiffusionPipeline"),Zt.forEach(s),ct=l(hs," as this will be automatically detected."),hs.forEach(s),es=f(e),x=a(e,"H2",{class:!0});var ds=r(x);H=a(ds,"A",{id:!0,class:!0,href:!0});var ei=r(H);De=a(ei,"SPAN",{});var si=r(De);v(se.$$.fragment,si),si.forEach(s),ei.forEach(s),ht=f(ds),xe=a(ds,"SPAN",{});var ti=r(xe);dt=l(ti,"How do community pipelines work?"),ti.forEach(s),ds.forEach(s),ss=l(e,`

A community pipeline is a class that has to inherit from ['DiffusionPipeline']:
and that has been added to \`examples/community\` [files](https://github.com/huggingface/diffusers/tree/main/examples/community).
The community can load the pipeline code via the custom_pipeline argument from DiffusionPipeline. See docs [here](https://huggingface.co/docs/diffusers/api/diffusion_pipeline#diffusers.DiffusionPipeline.from_pretrained.custom_pipeline):
`),d=a(e,"P",{});var I=r(d);mt=l(I,`This means:
The model weights and configs of the pipeline should be loaded from the `),Ne=a(I,"CODE",{});var ii=r(Ne);_t=l(ii,"pretrained_model_name_or_path"),ii.forEach(s),wt=f(I),te=a(I,"A",{href:!0,rel:!0});var li=r(te);gt=l(li,"argument"),li.forEach(s),yt=l(I,`:
whereas the code that powers the community pipeline is defined in a file added in `),ie=a(I,"A",{href:!0,rel:!0});var oi=r(ie);Oe=a(oi,"CODE",{});var ni=r(Oe);vt=l(ni,"examples/community"),ni.forEach(s),oi.forEach(s),bt=l(I,"."),I.forEach(s),ts=f(e),F=a(e,"P",{});var ms=r(F);Pt=l(ms,`Now, it might very well be that only some of your pipeline components weights can be downloaded from an official repo.
The other components should then be passed directly to init as is the case for the ClIP guidance notebook `),le=a(ms,"A",{href:!0,rel:!0});var ai=r(le);kt=l(ai,"here"),ai.forEach(s),$t=l(ms,"."),ms.forEach(s),is=f(e),re=a(e,"P",{});var ri=r(re);Et=l(ri,"The magic behind all of this is that we load the code directly from GitHub. You can check it out in more detail if you follow the functionality defined here:"),ri.forEach(s),ls=f(e),v(oe.$$.fragment,e),os=f(e),M=a(e,"P",{});var _s=r(M);jt=l(_s,"This is why a community pipeline merged to GitHub will be directly available to all "),Se=a(_s,"CODE",{});var pi=r(Se);Dt=l(pi,"diffusers"),pi.forEach(s),xt=l(_s," packages."),_s.forEach(s),this.h()},h(){c(E,"name","hf:doc:metadata"),c(E,"content",JSON.stringify(gi)),c(N,"id","how-to-build-a-community-pipeline"),c(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(N,"href","#how-to-build-a-community-pipeline"),c(j,"class","relative group"),c(L,"href","https://github.com/huggingface/diffusers/issues/841"),c(L,"rel","nofollow"),c(W,"href","https://huggingface.co/google/ddpm-cifar10-32"),c(W,"rel","nofollow"),c(K,"href","https://github.com/huggingface/diffusers/tree/main/examples/community"),c(K,"rel","nofollow"),c(V,"href","https://github.com/huggingface/diffusers/pull/840"),c(V,"rel","nofollow"),c(Z,"href","https://huggingface.co/docs/diffusers/using-diffusers/custom_pipeline_overview#loading-custom-pipelines-from-the-hub"),c(Z,"rel","nofollow"),c(ee,"href","https://github.com/huggingface/diffusers/tree/main/examples/community"),c(ee,"rel","nofollow"),c(H,"id","how-do-community-pipelines-work"),c(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(H,"href","#how-do-community-pipelines-work"),c(x,"class","relative group"),c(te,"href","https://huggingface.co/docs/diffusers/api/diffusion_pipeline#diffusers.DiffusionPipeline.from_pretrained.pretrained_model_name_or_path"),c(te,"rel","nofollow"),c(ie,"href","https://github.com/huggingface/diffusers/tree/main/examples/community"),c(ie,"rel","nofollow"),c(le,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/diffusers/CLIP_Guided_Stable_diffusion_with_diffusers.ipynb#scrollTo=z9Kglma6hjki"),c(le,"rel","nofollow")},m(e,o){t(document.head,E),p(e,Te,o),p(e,j,o),t(j,N),t(N,ce),b(z,ce,null),t(j,ws),t(j,he),t(he,gs),p(e,Ae,o),p(e,D,o),t(D,de),t(de,ys),t(D,vs),t(D,L),t(L,bs),t(D,Ps),p(e,Ue,o),p(e,ne,o),t(ne,ks),p(e,He,o),p(e,O,o),t(O,$s),t(O,me),t(me,Es),t(O,js),p(e,Fe,o),b(G,e,o),p(e,Me,o),p(e,h,o),t(h,Ds),t(h,_e),t(_e,xs),t(h,Ns),t(h,we),t(we,Os),t(h,Ss),t(h,ge),t(ge,Cs),t(h,Ts),t(h,ye),t(ye,As),t(h,Us),p(e,Ie,o),b(R,e,o),p(e,qe,o),p(e,S,o),t(S,Hs),t(S,ve),t(ve,Fs),t(S,Ms),p(e,ze,o),b(Y,e,o),p(e,Le,o),p(e,m,o),t(m,Is),t(m,be),t(be,qs),t(m,zs),t(m,Pe),t(Pe,Ls),t(m,Gs),p(e,Ge,o),b(B,e,o),p(e,Re,o),p(e,C,o),t(C,Rs),t(C,W),t(W,Ys),t(C,Bs),p(e,Ye,o),b(J,e,o),p(e,Be,o),p(e,_,o),t(_,Ws),t(_,ke),t(ke,Js),t(_,Ks),t(_,K),t(K,Qs),t(_,Vs),p(e,We,o),b(Q,e,o),p(e,Je,o),p(e,w,o),t(w,Xs),t(w,V),t(V,Zs),t(w,et),t(w,$e),t($e,st),t(w,tt),p(e,Ke,o),b(X,e,o),p(e,Qe,o),p(e,T,o),t(T,it),t(T,Z),t(Z,lt),t(T,ot),p(e,Ve,o),p(e,ae,o),t(ae,Ee),t(Ee,nt),p(e,Xe,o),p(e,A,o),t(A,at),t(A,ee),t(ee,rt),t(A,pt),p(e,Ze,o),p(e,U,o),t(U,ut),t(U,je),t(je,ft),t(U,ct),p(e,es,o),p(e,x,o),t(x,H),t(H,De),b(se,De,null),t(x,ht),t(x,xe),t(xe,dt),p(e,ss,o),p(e,d,o),t(d,mt),t(d,Ne),t(Ne,_t),t(d,wt),t(d,te),t(te,gt),t(d,yt),t(d,ie),t(ie,Oe),t(Oe,vt),t(d,bt),p(e,ts,o),p(e,F,o),t(F,Pt),t(F,le),t(le,kt),t(F,$t),p(e,is,o),p(e,re,o),t(re,Et),p(e,ls,o),b(oe,e,o),p(e,os,o),p(e,M,o),t(M,jt),t(M,Se),t(Se,Dt),t(M,xt),ns=!0},p:mi,i(e){ns||(P(z.$$.fragment,e),P(G.$$.fragment,e),P(R.$$.fragment,e),P(Y.$$.fragment,e),P(B.$$.fragment,e),P(J.$$.fragment,e),P(Q.$$.fragment,e),P(X.$$.fragment,e),P(se.$$.fragment,e),P(oe.$$.fragment,e),ns=!0)},o(e){k(z.$$.fragment,e),k(G.$$.fragment,e),k(R.$$.fragment,e),k(Y.$$.fragment,e),k(B.$$.fragment,e),k(J.$$.fragment,e),k(Q.$$.fragment,e),k(X.$$.fragment,e),k(se.$$.fragment,e),k(oe.$$.fragment,e),ns=!1},d(e){s(E),e&&s(Te),e&&s(j),$(z),e&&s(Ae),e&&s(D),e&&s(Ue),e&&s(ne),e&&s(He),e&&s(O),e&&s(Fe),$(G,e),e&&s(Me),e&&s(h),e&&s(Ie),$(R,e),e&&s(qe),e&&s(S),e&&s(ze),$(Y,e),e&&s(Le),e&&s(m),e&&s(Ge),$(B,e),e&&s(Re),e&&s(C),e&&s(Ye),$(J,e),e&&s(Be),e&&s(_),e&&s(We),$(Q,e),e&&s(Je),e&&s(w),e&&s(Ke),$(X,e),e&&s(Qe),e&&s(T),e&&s(Ve),e&&s(ae),e&&s(Xe),e&&s(A),e&&s(Ze),e&&s(U),e&&s(es),e&&s(x),$(se),e&&s(ss),e&&s(d),e&&s(ts),e&&s(F),e&&s(is),e&&s(re),e&&s(ls),$(oe,e),e&&s(os),e&&s(M)}}}const gi={local:"how-to-build-a-community-pipeline",sections:[{local:"how-do-community-pipelines-work",title:"How do community pipelines work?"}],title:"How to build a community pipeline"};function yi(Nt){return _i(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ki extends fi{constructor(E){super();ci(this,E,yi,wi,hi,{})}}export{ki as default,gi as metadata};
