import{S as it,i as st,s as tt,e as o,k as u,w as k,t,M as lt,c as n,d as s,m,a,x,h as l,b as f,G as i,g as r,y as C,q as D,o as A,B as H,v as ot}from"../../chunks/vendor-hf-doc-builder.js";import{T as nt}from"../../chunks/Tip-hf-doc-builder.js";import{I as li}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as oi}from"../../chunks/CodeBlock-hf-doc-builder.js";function at(Le){let h,L;return{c(){h=o("p"),L=t(`By loading a custom pipeline from the Hugging Face Hub, you are trusting that the code you are loading
is safe \u{1F512}. Make sure to check out the code online before loading & running it automatically.`)},l(y){h=n(y,"P",{});var v=a(h);L=l(v,`By loading a custom pipeline from the Hugging Face Hub, you are trusting that the code you are loading
is safe \u{1F512}. Make sure to check out the code online before loading & running it automatically.`),v.forEach(s)},m(y,v){r(y,h,v),i(h,L)},d(y){y&&s(h)}}}function pt(Le){let h,L,y,v,pe,N,ni,re,ai,qe,b,pi,T,ri,fi,te,ui,mi,Se,E,q,fe,V,ci,ue,di,Me,$,hi,me,_i,yi,K,gi,vi,Fe,S,wi,ce,bi,$i,Oe,U,Ie,M,Ei,G,Pi,ji,ze,F,Be,P,O,de,J,ki,he,xi,Ne,R,Ci,Z,Di,Te,d,Ai,_e,Hi,Li,ye,qi,Si,ge,Mi,Fi,ve,Oi,Ii,we,zi,Bi,be,Ni,Ti,Ve,I,Vi,$e,Ki,Ui,Ke,Q,Ue,j,z,Ee,W,Gi,Pe,Ji,Ge,w,Ri,le,Zi,Qi,je,Wi,Xi,ke,Yi,es,Je,oe,is,Re,X,Ze,c,ss,xe,ts,ls,Y,os,ns,ee,as,ps,Ce,rs,fs,De,us,ms,Ae,cs,ds,He,hs,_s,Qe,ie,We;return N=new li({}),V=new li({}),U=new oi({props:{code:`from diffusers import DiffusionPipeline

pipeline = DiffusionPipeline.from_pretrained(
    "google/ddpm-cifar10-32", custom_pipeline="hf-internal-testing/diffusers-dummy-pipeline"
)`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline

pipeline = DiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;google/ddpm-cifar10-32&quot;</span>, custom_pipeline=<span class="hljs-string">&quot;hf-internal-testing/diffusers-dummy-pipeline&quot;</span>
)`}}),F=new nt({props:{warning:!0,$$slots:{default:[at]},$$scope:{ctx:Le}}}),J=new li({}),Q=new oi({props:{code:`from diffusers import DiffusionPipeline
from transformers import CLIPFeatureExtractor, CLIPModel

clip_model_id = "laion/CLIP-ViT-B-32-laion2B-s34B-b79K"

feature_extractor = CLIPFeatureExtractor.from_pretrained(clip_model_id)
clip_model = CLIPModel.from_pretrained(clip_model_id)

pipeline = DiffusionPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4",
    custom_pipeline="clip_guided_stable_diffusion",
    clip_model=clip_model,
    feature_extractor=feature_extractor,
)`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPFeatureExtractor, CLIPModel

clip_model_id = <span class="hljs-string">&quot;laion/CLIP-ViT-B-32-laion2B-s34B-b79K&quot;</span>

feature_extractor = CLIPFeatureExtractor.from_pretrained(clip_model_id)
clip_model = CLIPModel.from_pretrained(clip_model_id)

pipeline = DiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>,
    custom_pipeline=<span class="hljs-string">&quot;clip_guided_stable_diffusion&quot;</span>,
    clip_model=clip_model,
    feature_extractor=feature_extractor,
)`}}),W=new li({}),X=new oi({props:{code:`import torch
from diffusers import DiffusionPipeline


class MyPipeline(DiffusionPipeline):
    def __init__(self, unet, scheduler):
        super().__init__()

    self.register_modules(unet=unet, scheduler=scheduler)

    @torch.no_grad()
    def __call__(self, batch_size: int = 1, num_inference_steps: int = 50):
        # Sample gaussian noise to begin loop
        image = torch.randn((batch_size, self.unet.in_channels, self.unet.sample_size, self.unet.sample_size))

    image = image.to(self.device)

    # set step values
    self.scheduler.set_timesteps(num_inference_steps)

    for t in self.progress_bar(self.scheduler.timesteps):
        # 1. predict noise model_output
        model_output = self.unet(image, t).sample

        # 2. predict previous mean of image x_t-1 and add variance depending on eta
        # eta corresponds to \u03B7 in paper and should be between [0, 1]
        # do x_t -> x_t-1
        image = self.scheduler.step(model_output, t, image, eta).prev_sample

    image = (image / 2 + 0.5).clamp(0, 1)
    image = image.cpu().permute(0, 2, 3, 1).numpy()

    return image`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline


<span class="hljs-keyword">class</span> <span class="hljs-title class_">MyPipeline</span>(<span class="hljs-title class_ inherited__">DiffusionPipeline</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, unet, scheduler</span>):
        <span class="hljs-built_in">super</span>().__init__()

    self.register_modules(unet=unet, scheduler=scheduler)

<span class="hljs-meta">    @torch.no_grad()</span>
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__call__</span>(<span class="hljs-params">self, batch_size: <span class="hljs-built_in">int</span> = <span class="hljs-number">1</span>, num_inference_steps: <span class="hljs-built_in">int</span> = <span class="hljs-number">50</span></span>):
        <span class="hljs-comment"># Sample gaussian noise to begin loop</span>
        image = torch.randn((batch_size, self.unet.in_channels, self.unet.sample_size, self.unet.sample_size))

    image = image.to(self.device)

    <span class="hljs-comment"># set step values</span>
    self.scheduler.set_timesteps(num_inference_steps)

    <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> self.progress_bar(self.scheduler.timesteps):
        <span class="hljs-comment"># 1. predict noise model_output</span>
        model_output = self.unet(image, t).sample

        <span class="hljs-comment"># 2. predict previous mean of image x_t-1 and add variance depending on eta</span>
        <span class="hljs-comment"># eta corresponds to \u03B7 in paper and should be between [0, 1]</span>
        <span class="hljs-comment"># do x_t -&gt; x_t-1</span>
        image = self.scheduler.step(model_output, t, image, eta).prev_sample

    image = (image / <span class="hljs-number">2</span> + <span class="hljs-number">0.5</span>).clamp(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>)
    image = image.cpu().permute(<span class="hljs-number">0</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">1</span>).numpy()

    <span class="hljs-keyword">return</span> image`}}),ie=new oi({props:{code:`my_pipeline = DiffusionPipeline.from_pretrained(
    "google/ddpm-cifar10-32", custom_pipeline="patrickvonplaten/my_custom_pipeline"
)`,highlighted:`my_pipeline = DiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;google/ddpm-cifar10-32&quot;</span>, custom_pipeline=<span class="hljs-string">&quot;patrickvonplaten/my_custom_pipeline&quot;</span>
)`}}),{c(){h=o("meta"),L=u(),y=o("h1"),v=o("a"),pe=o("span"),k(N.$$.fragment),ni=u(),re=o("span"),ai=t("Custom Pipelines"),qe=u(),b=o("p"),pi=t("Diffusers allows you to conveniently load any custom pipeline from the Hugging Face Hub as well as any "),T=o("a"),ri=t("official community pipeline"),fi=t(`
via the `),te=o("a"),ui=t("DiffusionPipeline"),mi=t(" class."),Se=u(),E=o("h2"),q=o("a"),fe=o("span"),k(V.$$.fragment),ci=u(),ue=o("span"),di=t("Loading custom pipelines from the Hub"),Me=u(),$=o("p"),hi=t("Custom pipelines can be easily loaded from any model repository on the Hub that defines a diffusion pipeline in a "),me=o("code"),_i=t("pipeline.py"),yi=t(` file.
Let\u2019s load a dummy pipeline from `),K=o("a"),gi=t("hf-internal-testing/diffusers-dummy-pipeline"),vi=t("."),Fe=u(),S=o("p"),wi=t("All you need to do is pass the custom pipeline repo id with the "),ce=o("code"),bi=t("custom_pipeline"),$i=t(" argument alongside the repo from where you wish to load the pipeline modules."),Oe=u(),k(U.$$.fragment),Ie=u(),M=o("p"),Ei=t("This will load the custom pipeline as defined in the "),G=o("a"),Pi=t("model repository"),ji=t("."),ze=u(),k(F.$$.fragment),Be=u(),P=o("h2"),O=o("a"),de=o("span"),k(J.$$.fragment),ki=u(),he=o("span"),xi=t("Loading official community pipelines"),Ne=u(),R=o("p"),Ci=t("Community pipelines are summarized in the "),Z=o("a"),Di=t("community examples folder"),Te=u(),d=o("p"),Ai=t("Similarly, you need to pass both the "),_e=o("em"),Hi=t("repo id"),Li=t(" from where you wish to load the weights as well as the "),ye=o("code"),qi=t("custom_pipeline"),Si=t(" argument. Here the "),ge=o("code"),Mi=t("custom_pipeline"),Fi=t(" argument should consist simply of the filename of the community pipeline excluding the "),ve=o("code"),Oi=t(".py"),Ii=t(" suffix, "),we=o("em"),zi=t("e.g."),Bi=u(),be=o("code"),Ni=t("clip_guided_stable_diffusion"),Ti=t("."),Ve=u(),I=o("p"),Vi=t("Since community pipelines are often more complex, one can mix loading weights from an official "),$e=o("em"),Ki=t("repo id"),Ui=t(`
and passing pipeline modules directly.`),Ke=u(),k(Q.$$.fragment),Ue=u(),j=o("h2"),z=o("a"),Ee=o("span"),k(W.$$.fragment),Gi=u(),Pe=o("span"),Ji=t("Adding custom pipelines to the Hub"),Ge=u(),w=o("p"),Ri=t(`To add a custom pipeline to the Hub, all you need to do is to define a pipeline class that inherits
from `),le=o("a"),Zi=t("DiffusionPipeline"),Qi=t(" in a "),je=o("code"),Wi=t("pipeline.py"),Xi=t(` file.
Make sure that the whole pipeline is encapsulated within a single class and that the `),ke=o("code"),Yi=t("pipeline.py"),es=t(` file
has only one such class.`),Je=u(),oe=o("p"),is=t("Let\u2019s quickly define an example pipeline."),Re=u(),k(X.$$.fragment),Ze=u(),c=o("p"),ss=t("Now you can upload this short file under the name "),xe=o("code"),ts=t("pipeline.py"),ls=t(" in your preferred "),Y=o("a"),os=t("model repository"),ns=t(". For Stable Diffusion pipelines, you may also "),ee=o("a"),as=t("join the community organisation for shared pipelines"),ps=t(` to upload yours.
Finally, we can load the custom pipeline by passing the model repository name, `),Ce=o("em"),rs=t("e.g."),fs=u(),De=o("code"),us=t("sd-diffusers-pipelines-library/my_custom_pipeline"),ms=t(" alongside the model repository from where we want to load the "),Ae=o("code"),cs=t("unet"),ds=t(" and "),He=o("code"),hs=t("scheduler"),_s=t(" components."),Qe=u(),k(ie.$$.fragment),this.h()},l(e){const p=lt('[data-svelte="svelte-1phssyn"]',document.head);h=n(p,"META",{name:!0,content:!0}),p.forEach(s),L=m(e),y=n(e,"H1",{class:!0});var se=a(y);v=n(se,"A",{id:!0,class:!0,href:!0});var gs=a(v);pe=n(gs,"SPAN",{});var vs=a(pe);x(N.$$.fragment,vs),vs.forEach(s),gs.forEach(s),ni=m(se),re=n(se,"SPAN",{});var ws=a(re);ai=l(ws,"Custom Pipelines"),ws.forEach(s),se.forEach(s),qe=m(e),b=n(e,"P",{});var ne=a(b);pi=l(ne,"Diffusers allows you to conveniently load any custom pipeline from the Hugging Face Hub as well as any "),T=n(ne,"A",{href:!0,rel:!0});var bs=a(T);ri=l(bs,"official community pipeline"),bs.forEach(s),fi=l(ne,`
via the `),te=n(ne,"A",{href:!0});var $s=a(te);ui=l($s,"DiffusionPipeline"),$s.forEach(s),mi=l(ne," class."),ne.forEach(s),Se=m(e),E=n(e,"H2",{class:!0});var Xe=a(E);q=n(Xe,"A",{id:!0,class:!0,href:!0});var Es=a(q);fe=n(Es,"SPAN",{});var Ps=a(fe);x(V.$$.fragment,Ps),Ps.forEach(s),Es.forEach(s),ci=m(Xe),ue=n(Xe,"SPAN",{});var js=a(ue);di=l(js,"Loading custom pipelines from the Hub"),js.forEach(s),Xe.forEach(s),Me=m(e),$=n(e,"P",{});var ae=a($);hi=l(ae,"Custom pipelines can be easily loaded from any model repository on the Hub that defines a diffusion pipeline in a "),me=n(ae,"CODE",{});var ks=a(me);_i=l(ks,"pipeline.py"),ks.forEach(s),yi=l(ae,` file.
Let\u2019s load a dummy pipeline from `),K=n(ae,"A",{href:!0,rel:!0});var xs=a(K);gi=l(xs,"hf-internal-testing/diffusers-dummy-pipeline"),xs.forEach(s),vi=l(ae,"."),ae.forEach(s),Fe=m(e),S=n(e,"P",{});var Ye=a(S);wi=l(Ye,"All you need to do is pass the custom pipeline repo id with the "),ce=n(Ye,"CODE",{});var Cs=a(ce);bi=l(Cs,"custom_pipeline"),Cs.forEach(s),$i=l(Ye," argument alongside the repo from where you wish to load the pipeline modules."),Ye.forEach(s),Oe=m(e),x(U.$$.fragment,e),Ie=m(e),M=n(e,"P",{});var ei=a(M);Ei=l(ei,"This will load the custom pipeline as defined in the "),G=n(ei,"A",{href:!0,rel:!0});var Ds=a(G);Pi=l(Ds,"model repository"),Ds.forEach(s),ji=l(ei,"."),ei.forEach(s),ze=m(e),x(F.$$.fragment,e),Be=m(e),P=n(e,"H2",{class:!0});var ii=a(P);O=n(ii,"A",{id:!0,class:!0,href:!0});var As=a(O);de=n(As,"SPAN",{});var Hs=a(de);x(J.$$.fragment,Hs),Hs.forEach(s),As.forEach(s),ki=m(ii),he=n(ii,"SPAN",{});var Ls=a(he);xi=l(Ls,"Loading official community pipelines"),Ls.forEach(s),ii.forEach(s),Ne=m(e),R=n(e,"P",{});var ys=a(R);Ci=l(ys,"Community pipelines are summarized in the "),Z=n(ys,"A",{href:!0,rel:!0});var qs=a(Z);Di=l(qs,"community examples folder"),qs.forEach(s),ys.forEach(s),Te=m(e),d=n(e,"P",{});var g=a(d);Ai=l(g,"Similarly, you need to pass both the "),_e=n(g,"EM",{});var Ss=a(_e);Hi=l(Ss,"repo id"),Ss.forEach(s),Li=l(g," from where you wish to load the weights as well as the "),ye=n(g,"CODE",{});var Ms=a(ye);qi=l(Ms,"custom_pipeline"),Ms.forEach(s),Si=l(g," argument. Here the "),ge=n(g,"CODE",{});var Fs=a(ge);Mi=l(Fs,"custom_pipeline"),Fs.forEach(s),Fi=l(g," argument should consist simply of the filename of the community pipeline excluding the "),ve=n(g,"CODE",{});var Os=a(ve);Oi=l(Os,".py"),Os.forEach(s),Ii=l(g," suffix, "),we=n(g,"EM",{});var Is=a(we);zi=l(Is,"e.g."),Is.forEach(s),Bi=m(g),be=n(g,"CODE",{});var zs=a(be);Ni=l(zs,"clip_guided_stable_diffusion"),zs.forEach(s),Ti=l(g,"."),g.forEach(s),Ve=m(e),I=n(e,"P",{});var si=a(I);Vi=l(si,"Since community pipelines are often more complex, one can mix loading weights from an official "),$e=n(si,"EM",{});var Bs=a($e);Ki=l(Bs,"repo id"),Bs.forEach(s),Ui=l(si,`
and passing pipeline modules directly.`),si.forEach(s),Ke=m(e),x(Q.$$.fragment,e),Ue=m(e),j=n(e,"H2",{class:!0});var ti=a(j);z=n(ti,"A",{id:!0,class:!0,href:!0});var Ns=a(z);Ee=n(Ns,"SPAN",{});var Ts=a(Ee);x(W.$$.fragment,Ts),Ts.forEach(s),Ns.forEach(s),Gi=m(ti),Pe=n(ti,"SPAN",{});var Vs=a(Pe);Ji=l(Vs,"Adding custom pipelines to the Hub"),Vs.forEach(s),ti.forEach(s),Ge=m(e),w=n(e,"P",{});var B=a(w);Ri=l(B,`To add a custom pipeline to the Hub, all you need to do is to define a pipeline class that inherits
from `),le=n(B,"A",{href:!0});var Ks=a(le);Zi=l(Ks,"DiffusionPipeline"),Ks.forEach(s),Qi=l(B," in a "),je=n(B,"CODE",{});var Us=a(je);Wi=l(Us,"pipeline.py"),Us.forEach(s),Xi=l(B,` file.
Make sure that the whole pipeline is encapsulated within a single class and that the `),ke=n(B,"CODE",{});var Gs=a(ke);Yi=l(Gs,"pipeline.py"),Gs.forEach(s),es=l(B,` file
has only one such class.`),B.forEach(s),Je=m(e),oe=n(e,"P",{});var Js=a(oe);is=l(Js,"Let\u2019s quickly define an example pipeline."),Js.forEach(s),Re=m(e),x(X.$$.fragment,e),Ze=m(e),c=n(e,"P",{});var _=a(c);ss=l(_,"Now you can upload this short file under the name "),xe=n(_,"CODE",{});var Rs=a(xe);ts=l(Rs,"pipeline.py"),Rs.forEach(s),ls=l(_," in your preferred "),Y=n(_,"A",{href:!0,rel:!0});var Zs=a(Y);os=l(Zs,"model repository"),Zs.forEach(s),ns=l(_,". For Stable Diffusion pipelines, you may also "),ee=n(_,"A",{href:!0,rel:!0});var Qs=a(ee);as=l(Qs,"join the community organisation for shared pipelines"),Qs.forEach(s),ps=l(_,` to upload yours.
Finally, we can load the custom pipeline by passing the model repository name, `),Ce=n(_,"EM",{});var Ws=a(Ce);rs=l(Ws,"e.g."),Ws.forEach(s),fs=m(_),De=n(_,"CODE",{});var Xs=a(De);us=l(Xs,"sd-diffusers-pipelines-library/my_custom_pipeline"),Xs.forEach(s),ms=l(_," alongside the model repository from where we want to load the "),Ae=n(_,"CODE",{});var Ys=a(Ae);cs=l(Ys,"unet"),Ys.forEach(s),ds=l(_," and "),He=n(_,"CODE",{});var et=a(He);hs=l(et,"scheduler"),et.forEach(s),_s=l(_," components."),_.forEach(s),Qe=m(e),x(ie.$$.fragment,e),this.h()},h(){f(h,"name","hf:doc:metadata"),f(h,"content",JSON.stringify(rt)),f(v,"id","custom-pipelines"),f(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(v,"href","#custom-pipelines"),f(y,"class","relative group"),f(T,"href","https://github.com/huggingface/diffusers/tree/main/examples/community"),f(T,"rel","nofollow"),f(te,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),f(q,"id","loading-custom-pipelines-from-the-hub"),f(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(q,"href","#loading-custom-pipelines-from-the-hub"),f(E,"class","relative group"),f(K,"href","https://huggingface.co/hf-internal-testing/diffusers-dummy-pipeline"),f(K,"rel","nofollow"),f(G,"href","https://huggingface.co/hf-internal-testing/diffusers-dummy-pipeline/blob/main/pipeline.py"),f(G,"rel","nofollow"),f(O,"id","loading-official-community-pipelines"),f(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(O,"href","#loading-official-community-pipelines"),f(P,"class","relative group"),f(Z,"href","https://github.com/huggingface/diffusers/tree/main/examples/community"),f(Z,"rel","nofollow"),f(z,"id","adding-custom-pipelines-to-the-hub"),f(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(z,"href","#adding-custom-pipelines-to-the-hub"),f(j,"class","relative group"),f(le,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),f(Y,"href","https://huggingface.co/docs/hub/models-uploading"),f(Y,"rel","nofollow"),f(ee,"href","https://huggingface.co/organizations/sd-diffusers-pipelines-library/share/BUPyDUuHcciGTOKaExlqtfFcyCZsVFdrjr"),f(ee,"rel","nofollow")},m(e,p){i(document.head,h),r(e,L,p),r(e,y,p),i(y,v),i(v,pe),C(N,pe,null),i(y,ni),i(y,re),i(re,ai),r(e,qe,p),r(e,b,p),i(b,pi),i(b,T),i(T,ri),i(b,fi),i(b,te),i(te,ui),i(b,mi),r(e,Se,p),r(e,E,p),i(E,q),i(q,fe),C(V,fe,null),i(E,ci),i(E,ue),i(ue,di),r(e,Me,p),r(e,$,p),i($,hi),i($,me),i(me,_i),i($,yi),i($,K),i(K,gi),i($,vi),r(e,Fe,p),r(e,S,p),i(S,wi),i(S,ce),i(ce,bi),i(S,$i),r(e,Oe,p),C(U,e,p),r(e,Ie,p),r(e,M,p),i(M,Ei),i(M,G),i(G,Pi),i(M,ji),r(e,ze,p),C(F,e,p),r(e,Be,p),r(e,P,p),i(P,O),i(O,de),C(J,de,null),i(P,ki),i(P,he),i(he,xi),r(e,Ne,p),r(e,R,p),i(R,Ci),i(R,Z),i(Z,Di),r(e,Te,p),r(e,d,p),i(d,Ai),i(d,_e),i(_e,Hi),i(d,Li),i(d,ye),i(ye,qi),i(d,Si),i(d,ge),i(ge,Mi),i(d,Fi),i(d,ve),i(ve,Oi),i(d,Ii),i(d,we),i(we,zi),i(d,Bi),i(d,be),i(be,Ni),i(d,Ti),r(e,Ve,p),r(e,I,p),i(I,Vi),i(I,$e),i($e,Ki),i(I,Ui),r(e,Ke,p),C(Q,e,p),r(e,Ue,p),r(e,j,p),i(j,z),i(z,Ee),C(W,Ee,null),i(j,Gi),i(j,Pe),i(Pe,Ji),r(e,Ge,p),r(e,w,p),i(w,Ri),i(w,le),i(le,Zi),i(w,Qi),i(w,je),i(je,Wi),i(w,Xi),i(w,ke),i(ke,Yi),i(w,es),r(e,Je,p),r(e,oe,p),i(oe,is),r(e,Re,p),C(X,e,p),r(e,Ze,p),r(e,c,p),i(c,ss),i(c,xe),i(xe,ts),i(c,ls),i(c,Y),i(Y,os),i(c,ns),i(c,ee),i(ee,as),i(c,ps),i(c,Ce),i(Ce,rs),i(c,fs),i(c,De),i(De,us),i(c,ms),i(c,Ae),i(Ae,cs),i(c,ds),i(c,He),i(He,hs),i(c,_s),r(e,Qe,p),C(ie,e,p),We=!0},p(e,[p]){const se={};p&2&&(se.$$scope={dirty:p,ctx:e}),F.$set(se)},i(e){We||(D(N.$$.fragment,e),D(V.$$.fragment,e),D(U.$$.fragment,e),D(F.$$.fragment,e),D(J.$$.fragment,e),D(Q.$$.fragment,e),D(W.$$.fragment,e),D(X.$$.fragment,e),D(ie.$$.fragment,e),We=!0)},o(e){A(N.$$.fragment,e),A(V.$$.fragment,e),A(U.$$.fragment,e),A(F.$$.fragment,e),A(J.$$.fragment,e),A(Q.$$.fragment,e),A(W.$$.fragment,e),A(X.$$.fragment,e),A(ie.$$.fragment,e),We=!1},d(e){s(h),e&&s(L),e&&s(y),H(N),e&&s(qe),e&&s(b),e&&s(Se),e&&s(E),H(V),e&&s(Me),e&&s($),e&&s(Fe),e&&s(S),e&&s(Oe),H(U,e),e&&s(Ie),e&&s(M),e&&s(ze),H(F,e),e&&s(Be),e&&s(P),H(J),e&&s(Ne),e&&s(R),e&&s(Te),e&&s(d),e&&s(Ve),e&&s(I),e&&s(Ke),H(Q,e),e&&s(Ue),e&&s(j),H(W),e&&s(Ge),e&&s(w),e&&s(Je),e&&s(oe),e&&s(Re),H(X,e),e&&s(Ze),e&&s(c),e&&s(Qe),H(ie,e)}}}const rt={local:"custom-pipelines",sections:[{local:"loading-custom-pipelines-from-the-hub",title:"Loading custom pipelines from the Hub"},{local:"loading-official-community-pipelines",title:"Loading official community pipelines"},{local:"adding-custom-pipelines-to-the-hub",title:"Adding custom pipelines to the Hub"}],title:"Custom Pipelines"};function ft(Le){return ot(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ht extends it{constructor(h){super();st(this,h,ft,pt,tt,{})}}export{ht as default,rt as metadata};
