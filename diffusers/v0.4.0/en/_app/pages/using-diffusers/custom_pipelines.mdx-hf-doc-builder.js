import{S as st,i as it,s as tt,e as o,k as u,w as k,t,M as lt,c as n,d as i,m,a,x,h as l,b as f,G as s,g as r,y as C,q as D,o as A,B as H,v as ot}from"../../chunks/vendor-hf-doc-builder.js";import{T as nt}from"../../chunks/Tip-hf-doc-builder.js";import{I as ls}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as os}from"../../chunks/CodeBlock-hf-doc-builder.js";function at(Le){let h,L;return{c(){h=o("p"),L=t(`By loading a custom pipeline from the Hugging Face Hub, you are trusting that the code you are loading
is safe \u{1F512}. Make sure to check out the code online before loading & running it automatically.`)},l(y){h=n(y,"P",{});var v=a(h);L=l(v,`By loading a custom pipeline from the Hugging Face Hub, you are trusting that the code you are loading
is safe \u{1F512}. Make sure to check out the code online before loading & running it automatically.`),v.forEach(i)},m(y,v){r(y,h,v),s(h,L)},d(y){y&&i(h)}}}function pt(Le){let h,L,y,v,pe,N,ns,re,as,qe,b,ps,T,rs,fs,te,us,ms,Se,E,q,fe,V,cs,ue,ds,Me,$,hs,me,_s,ys,K,gs,vs,Fe,S,ws,ce,bs,$s,Oe,U,Ie,M,Es,G,Ps,js,ze,F,Be,P,O,de,J,ks,he,xs,Ne,R,Cs,Z,Ds,Te,d,As,_e,Hs,Ls,ye,qs,Ss,ge,Ms,Fs,ve,Os,Is,we,zs,Bs,be,Ns,Ts,Ve,I,Vs,$e,Ks,Us,Ke,Q,Ue,j,z,Ee,W,Gs,Pe,Js,Ge,w,Rs,le,Zs,Qs,je,Ws,Xs,ke,Ys,ei,Je,oe,si,Re,X,Ze,c,ii,xe,ti,li,Y,oi,ni,ee,ai,pi,Ce,ri,fi,De,ui,mi,Ae,ci,di,He,hi,_i,Qe,se,We;return N=new ls({}),V=new ls({}),U=new os({props:{code:`from diffusers import DiffusionPipeline

pipeline = DiffusionPipeline.from_pretrained(
    "google/ddpm-cifar10-32", custom_pipeline="hf-internal-testing/diffusers-dummy-pipeline"
)`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline

pipeline = DiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;google/ddpm-cifar10-32&quot;</span>, custom_pipeline=<span class="hljs-string">&quot;hf-internal-testing/diffusers-dummy-pipeline&quot;</span>
)`}}),F=new nt({props:{warning:!0,$$slots:{default:[at]},$$scope:{ctx:Le}}}),J=new ls({}),Q=new os({props:{code:`from diffusers import DiffusionPipeline
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
)`}}),W=new ls({}),X=new os({props:{code:`import torch
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

    <span class="hljs-keyword">return</span> image`}}),se=new os({props:{code:`my_pipeline = DiffusionPipeline.from_pretrained(
    "google/ddpm-cifar10-32", custom_pipeline="patrickvonplaten/my_custom_pipeline"
)`,highlighted:`my_pipeline = DiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;google/ddpm-cifar10-32&quot;</span>, custom_pipeline=<span class="hljs-string">&quot;patrickvonplaten/my_custom_pipeline&quot;</span>
)`}}),{c(){h=o("meta"),L=u(),y=o("h1"),v=o("a"),pe=o("span"),k(N.$$.fragment),ns=u(),re=o("span"),as=t("Custom Pipelines"),qe=u(),b=o("p"),ps=t("Diffusers allows you to conveniently load any custom pipeline from the Hugging Face Hub as well as any "),T=o("a"),rs=t("official community pipeline"),fs=t(`
via the `),te=o("a"),us=t("DiffusionPipeline"),ms=t(" class."),Se=u(),E=o("h2"),q=o("a"),fe=o("span"),k(V.$$.fragment),cs=u(),ue=o("span"),ds=t("Loading custom pipelines from the Hub"),Me=u(),$=o("p"),hs=t("Custom pipelines can be easily loaded from any model repository on the Hub that defines a diffusion pipeline in a "),me=o("code"),_s=t("pipeline.py"),ys=t(` file.
Let\u2019s load a dummy pipeline from `),K=o("a"),gs=t("hf-internal-testing/diffusers-dummy-pipeline"),vs=t("."),Fe=u(),S=o("p"),ws=t("All you need to do is pass the custom pipeline repo id with the "),ce=o("code"),bs=t("custom_pipeline"),$s=t(" argument alongside the repo from where you wish to load the pipeline modules."),Oe=u(),k(U.$$.fragment),Ie=u(),M=o("p"),Es=t("This will load the custom pipeline as defined in the "),G=o("a"),Ps=t("model repository"),js=t("."),ze=u(),k(F.$$.fragment),Be=u(),P=o("h2"),O=o("a"),de=o("span"),k(J.$$.fragment),ks=u(),he=o("span"),xs=t("Loading official community pipelines"),Ne=u(),R=o("p"),Cs=t("Community pipelines are summarized in the "),Z=o("a"),Ds=t("community examples folder"),Te=u(),d=o("p"),As=t("Similarly, you need to pass both the "),_e=o("em"),Hs=t("repo id"),Ls=t(" from where you wish to load the weights as well as the "),ye=o("code"),qs=t("custom_pipeline"),Ss=t(" argument. Here the "),ge=o("code"),Ms=t("custom_pipeline"),Fs=t(" argument should consist simply of the filename of the community pipeline excluding the "),ve=o("code"),Os=t(".py"),Is=t(" suffix, "),we=o("em"),zs=t("e.g."),Bs=u(),be=o("code"),Ns=t("clip_guided_stable_diffusion"),Ts=t("."),Ve=u(),I=o("p"),Vs=t("Since community pipelines are often more complex, one can mix loading weights from an official "),$e=o("em"),Ks=t("repo id"),Us=t(`
and passing pipeline modules directly.`),Ke=u(),k(Q.$$.fragment),Ue=u(),j=o("h2"),z=o("a"),Ee=o("span"),k(W.$$.fragment),Gs=u(),Pe=o("span"),Js=t("Adding custom pipelines to the Hub"),Ge=u(),w=o("p"),Rs=t(`To add a custom pipeline to the Hub, all you need to do is to define a pipeline class that inherits
from `),le=o("a"),Zs=t("DiffusionPipeline"),Qs=t(" in a "),je=o("code"),Ws=t("pipeline.py"),Xs=t(` file.
Make sure that the whole pipeline is encapsulated within a single class and that the `),ke=o("code"),Ys=t("pipeline.py"),ei=t(` file
has only one such class.`),Je=u(),oe=o("p"),si=t("Let\u2019s quickly define an example pipeline."),Re=u(),k(X.$$.fragment),Ze=u(),c=o("p"),ii=t("Now you can upload this short file under the name "),xe=o("code"),ti=t("pipeline.py"),li=t(" in your preferred "),Y=o("a"),oi=t("model repository"),ni=t(". For Stable Diffusion pipelines, you may also "),ee=o("a"),ai=t("join the community organisation for shared pipelines"),pi=t(` to upload yours.
Finally, we can load the custom pipeline by passing the model repository name, `),Ce=o("em"),ri=t("e.g."),fi=u(),De=o("code"),ui=t("sd-diffusers-pipelines-library/my_custom_pipeline"),mi=t(" alongside the model repository from where we want to load the "),Ae=o("code"),ci=t("unet"),di=t(" and "),He=o("code"),hi=t("scheduler"),_i=t(" components."),Qe=u(),k(se.$$.fragment),this.h()},l(e){const p=lt('[data-svelte="svelte-1phssyn"]',document.head);h=n(p,"META",{name:!0,content:!0}),p.forEach(i),L=m(e),y=n(e,"H1",{class:!0});var ie=a(y);v=n(ie,"A",{id:!0,class:!0,href:!0});var gi=a(v);pe=n(gi,"SPAN",{});var vi=a(pe);x(N.$$.fragment,vi),vi.forEach(i),gi.forEach(i),ns=m(ie),re=n(ie,"SPAN",{});var wi=a(re);as=l(wi,"Custom Pipelines"),wi.forEach(i),ie.forEach(i),qe=m(e),b=n(e,"P",{});var ne=a(b);ps=l(ne,"Diffusers allows you to conveniently load any custom pipeline from the Hugging Face Hub as well as any "),T=n(ne,"A",{href:!0,rel:!0});var bi=a(T);rs=l(bi,"official community pipeline"),bi.forEach(i),fs=l(ne,`
via the `),te=n(ne,"A",{href:!0});var $i=a(te);us=l($i,"DiffusionPipeline"),$i.forEach(i),ms=l(ne," class."),ne.forEach(i),Se=m(e),E=n(e,"H2",{class:!0});var Xe=a(E);q=n(Xe,"A",{id:!0,class:!0,href:!0});var Ei=a(q);fe=n(Ei,"SPAN",{});var Pi=a(fe);x(V.$$.fragment,Pi),Pi.forEach(i),Ei.forEach(i),cs=m(Xe),ue=n(Xe,"SPAN",{});var ji=a(ue);ds=l(ji,"Loading custom pipelines from the Hub"),ji.forEach(i),Xe.forEach(i),Me=m(e),$=n(e,"P",{});var ae=a($);hs=l(ae,"Custom pipelines can be easily loaded from any model repository on the Hub that defines a diffusion pipeline in a "),me=n(ae,"CODE",{});var ki=a(me);_s=l(ki,"pipeline.py"),ki.forEach(i),ys=l(ae,` file.
Let\u2019s load a dummy pipeline from `),K=n(ae,"A",{href:!0,rel:!0});var xi=a(K);gs=l(xi,"hf-internal-testing/diffusers-dummy-pipeline"),xi.forEach(i),vs=l(ae,"."),ae.forEach(i),Fe=m(e),S=n(e,"P",{});var Ye=a(S);ws=l(Ye,"All you need to do is pass the custom pipeline repo id with the "),ce=n(Ye,"CODE",{});var Ci=a(ce);bs=l(Ci,"custom_pipeline"),Ci.forEach(i),$s=l(Ye," argument alongside the repo from where you wish to load the pipeline modules."),Ye.forEach(i),Oe=m(e),x(U.$$.fragment,e),Ie=m(e),M=n(e,"P",{});var es=a(M);Es=l(es,"This will load the custom pipeline as defined in the "),G=n(es,"A",{href:!0,rel:!0});var Di=a(G);Ps=l(Di,"model repository"),Di.forEach(i),js=l(es,"."),es.forEach(i),ze=m(e),x(F.$$.fragment,e),Be=m(e),P=n(e,"H2",{class:!0});var ss=a(P);O=n(ss,"A",{id:!0,class:!0,href:!0});var Ai=a(O);de=n(Ai,"SPAN",{});var Hi=a(de);x(J.$$.fragment,Hi),Hi.forEach(i),Ai.forEach(i),ks=m(ss),he=n(ss,"SPAN",{});var Li=a(he);xs=l(Li,"Loading official community pipelines"),Li.forEach(i),ss.forEach(i),Ne=m(e),R=n(e,"P",{});var yi=a(R);Cs=l(yi,"Community pipelines are summarized in the "),Z=n(yi,"A",{href:!0,rel:!0});var qi=a(Z);Ds=l(qi,"community examples folder"),qi.forEach(i),yi.forEach(i),Te=m(e),d=n(e,"P",{});var g=a(d);As=l(g,"Similarly, you need to pass both the "),_e=n(g,"EM",{});var Si=a(_e);Hs=l(Si,"repo id"),Si.forEach(i),Ls=l(g," from where you wish to load the weights as well as the "),ye=n(g,"CODE",{});var Mi=a(ye);qs=l(Mi,"custom_pipeline"),Mi.forEach(i),Ss=l(g," argument. Here the "),ge=n(g,"CODE",{});var Fi=a(ge);Ms=l(Fi,"custom_pipeline"),Fi.forEach(i),Fs=l(g," argument should consist simply of the filename of the community pipeline excluding the "),ve=n(g,"CODE",{});var Oi=a(ve);Os=l(Oi,".py"),Oi.forEach(i),Is=l(g," suffix, "),we=n(g,"EM",{});var Ii=a(we);zs=l(Ii,"e.g."),Ii.forEach(i),Bs=m(g),be=n(g,"CODE",{});var zi=a(be);Ns=l(zi,"clip_guided_stable_diffusion"),zi.forEach(i),Ts=l(g,"."),g.forEach(i),Ve=m(e),I=n(e,"P",{});var is=a(I);Vs=l(is,"Since community pipelines are often more complex, one can mix loading weights from an official "),$e=n(is,"EM",{});var Bi=a($e);Ks=l(Bi,"repo id"),Bi.forEach(i),Us=l(is,`
and passing pipeline modules directly.`),is.forEach(i),Ke=m(e),x(Q.$$.fragment,e),Ue=m(e),j=n(e,"H2",{class:!0});var ts=a(j);z=n(ts,"A",{id:!0,class:!0,href:!0});var Ni=a(z);Ee=n(Ni,"SPAN",{});var Ti=a(Ee);x(W.$$.fragment,Ti),Ti.forEach(i),Ni.forEach(i),Gs=m(ts),Pe=n(ts,"SPAN",{});var Vi=a(Pe);Js=l(Vi,"Adding custom pipelines to the Hub"),Vi.forEach(i),ts.forEach(i),Ge=m(e),w=n(e,"P",{});var B=a(w);Rs=l(B,`To add a custom pipeline to the Hub, all you need to do is to define a pipeline class that inherits
from `),le=n(B,"A",{href:!0});var Ki=a(le);Zs=l(Ki,"DiffusionPipeline"),Ki.forEach(i),Qs=l(B," in a "),je=n(B,"CODE",{});var Ui=a(je);Ws=l(Ui,"pipeline.py"),Ui.forEach(i),Xs=l(B,` file.
Make sure that the whole pipeline is encapsulated within a single class and that the `),ke=n(B,"CODE",{});var Gi=a(ke);Ys=l(Gi,"pipeline.py"),Gi.forEach(i),ei=l(B,` file
has only one such class.`),B.forEach(i),Je=m(e),oe=n(e,"P",{});var Ji=a(oe);si=l(Ji,"Let\u2019s quickly define an example pipeline."),Ji.forEach(i),Re=m(e),x(X.$$.fragment,e),Ze=m(e),c=n(e,"P",{});var _=a(c);ii=l(_,"Now you can upload this short file under the name "),xe=n(_,"CODE",{});var Ri=a(xe);ti=l(Ri,"pipeline.py"),Ri.forEach(i),li=l(_," in your preferred "),Y=n(_,"A",{href:!0,rel:!0});var Zi=a(Y);oi=l(Zi,"model repository"),Zi.forEach(i),ni=l(_,". For Stable Diffusion pipelines, you may also "),ee=n(_,"A",{href:!0,rel:!0});var Qi=a(ee);ai=l(Qi,"join the community organisation for shared pipelines"),Qi.forEach(i),pi=l(_,` to upload yours.
Finally, we can load the custom pipeline by passing the model repository name, `),Ce=n(_,"EM",{});var Wi=a(Ce);ri=l(Wi,"e.g."),Wi.forEach(i),fi=m(_),De=n(_,"CODE",{});var Xi=a(De);ui=l(Xi,"sd-diffusers-pipelines-library/my_custom_pipeline"),Xi.forEach(i),mi=l(_," alongside the model repository from where we want to load the "),Ae=n(_,"CODE",{});var Yi=a(Ae);ci=l(Yi,"unet"),Yi.forEach(i),di=l(_," and "),He=n(_,"CODE",{});var et=a(He);hi=l(et,"scheduler"),et.forEach(i),_i=l(_," components."),_.forEach(i),Qe=m(e),x(se.$$.fragment,e),this.h()},h(){f(h,"name","hf:doc:metadata"),f(h,"content",JSON.stringify(rt)),f(v,"id","custom-pipelines"),f(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(v,"href","#custom-pipelines"),f(y,"class","relative group"),f(T,"href","https://github.com/huggingface/diffusers/tree/main/examples/community"),f(T,"rel","nofollow"),f(te,"href","/docs/diffusers/v0.4.0/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),f(q,"id","loading-custom-pipelines-from-the-hub"),f(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(q,"href","#loading-custom-pipelines-from-the-hub"),f(E,"class","relative group"),f(K,"href","https://huggingface.co/hf-internal-testing/diffusers-dummy-pipeline"),f(K,"rel","nofollow"),f(G,"href","https://huggingface.co/hf-internal-testing/diffusers-dummy-pipeline/blob/main/pipeline.py"),f(G,"rel","nofollow"),f(O,"id","loading-official-community-pipelines"),f(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(O,"href","#loading-official-community-pipelines"),f(P,"class","relative group"),f(Z,"href","https://github.com/huggingface/diffusers/tree/main/examples/community"),f(Z,"rel","nofollow"),f(z,"id","adding-custom-pipelines-to-the-hub"),f(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(z,"href","#adding-custom-pipelines-to-the-hub"),f(j,"class","relative group"),f(le,"href","/docs/diffusers/v0.4.0/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),f(Y,"href","https://huggingface.co/docs/hub/models-uploading"),f(Y,"rel","nofollow"),f(ee,"href","https://huggingface.co/organizations/sd-diffusers-pipelines-library/share/BUPyDUuHcciGTOKaExlqtfFcyCZsVFdrjr"),f(ee,"rel","nofollow")},m(e,p){s(document.head,h),r(e,L,p),r(e,y,p),s(y,v),s(v,pe),C(N,pe,null),s(y,ns),s(y,re),s(re,as),r(e,qe,p),r(e,b,p),s(b,ps),s(b,T),s(T,rs),s(b,fs),s(b,te),s(te,us),s(b,ms),r(e,Se,p),r(e,E,p),s(E,q),s(q,fe),C(V,fe,null),s(E,cs),s(E,ue),s(ue,ds),r(e,Me,p),r(e,$,p),s($,hs),s($,me),s(me,_s),s($,ys),s($,K),s(K,gs),s($,vs),r(e,Fe,p),r(e,S,p),s(S,ws),s(S,ce),s(ce,bs),s(S,$s),r(e,Oe,p),C(U,e,p),r(e,Ie,p),r(e,M,p),s(M,Es),s(M,G),s(G,Ps),s(M,js),r(e,ze,p),C(F,e,p),r(e,Be,p),r(e,P,p),s(P,O),s(O,de),C(J,de,null),s(P,ks),s(P,he),s(he,xs),r(e,Ne,p),r(e,R,p),s(R,Cs),s(R,Z),s(Z,Ds),r(e,Te,p),r(e,d,p),s(d,As),s(d,_e),s(_e,Hs),s(d,Ls),s(d,ye),s(ye,qs),s(d,Ss),s(d,ge),s(ge,Ms),s(d,Fs),s(d,ve),s(ve,Os),s(d,Is),s(d,we),s(we,zs),s(d,Bs),s(d,be),s(be,Ns),s(d,Ts),r(e,Ve,p),r(e,I,p),s(I,Vs),s(I,$e),s($e,Ks),s(I,Us),r(e,Ke,p),C(Q,e,p),r(e,Ue,p),r(e,j,p),s(j,z),s(z,Ee),C(W,Ee,null),s(j,Gs),s(j,Pe),s(Pe,Js),r(e,Ge,p),r(e,w,p),s(w,Rs),s(w,le),s(le,Zs),s(w,Qs),s(w,je),s(je,Ws),s(w,Xs),s(w,ke),s(ke,Ys),s(w,ei),r(e,Je,p),r(e,oe,p),s(oe,si),r(e,Re,p),C(X,e,p),r(e,Ze,p),r(e,c,p),s(c,ii),s(c,xe),s(xe,ti),s(c,li),s(c,Y),s(Y,oi),s(c,ni),s(c,ee),s(ee,ai),s(c,pi),s(c,Ce),s(Ce,ri),s(c,fi),s(c,De),s(De,ui),s(c,mi),s(c,Ae),s(Ae,ci),s(c,di),s(c,He),s(He,hi),s(c,_i),r(e,Qe,p),C(se,e,p),We=!0},p(e,[p]){const ie={};p&2&&(ie.$$scope={dirty:p,ctx:e}),F.$set(ie)},i(e){We||(D(N.$$.fragment,e),D(V.$$.fragment,e),D(U.$$.fragment,e),D(F.$$.fragment,e),D(J.$$.fragment,e),D(Q.$$.fragment,e),D(W.$$.fragment,e),D(X.$$.fragment,e),D(se.$$.fragment,e),We=!0)},o(e){A(N.$$.fragment,e),A(V.$$.fragment,e),A(U.$$.fragment,e),A(F.$$.fragment,e),A(J.$$.fragment,e),A(Q.$$.fragment,e),A(W.$$.fragment,e),A(X.$$.fragment,e),A(se.$$.fragment,e),We=!1},d(e){i(h),e&&i(L),e&&i(y),H(N),e&&i(qe),e&&i(b),e&&i(Se),e&&i(E),H(V),e&&i(Me),e&&i($),e&&i(Fe),e&&i(S),e&&i(Oe),H(U,e),e&&i(Ie),e&&i(M),e&&i(ze),H(F,e),e&&i(Be),e&&i(P),H(J),e&&i(Ne),e&&i(R),e&&i(Te),e&&i(d),e&&i(Ve),e&&i(I),e&&i(Ke),H(Q,e),e&&i(Ue),e&&i(j),H(W),e&&i(Ge),e&&i(w),e&&i(Je),e&&i(oe),e&&i(Re),H(X,e),e&&i(Ze),e&&i(c),e&&i(Qe),H(se,e)}}}const rt={local:"custom-pipelines",sections:[{local:"loading-custom-pipelines-from-the-hub",title:"Loading custom pipelines from the Hub"},{local:"loading-official-community-pipelines",title:"Loading official community pipelines"},{local:"adding-custom-pipelines-to-the-hub",title:"Adding custom pipelines to the Hub"}],title:"Custom Pipelines"};function ft(Le){return ot(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ht extends st{constructor(h){super();it(this,h,ft,pt,tt,{})}}export{ht as default,rt as metadata};
