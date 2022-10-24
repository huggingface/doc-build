import{S as it,i as st,s as tt,e as n,k as u,w as k,t,M as lt,c as o,d as s,m,a,x,h as l,b as f,G as i,g as r,y as D,q as C,o as A,B as H,v as nt}from"../../chunks/vendor-hf-doc-builder.js";import{T as ot}from"../../chunks/Tip-hf-doc-builder.js";import{I as li}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ni}from"../../chunks/CodeBlock-hf-doc-builder.js";function at(Le){let h,L;return{c(){h=n("p"),L=t(`By loading a custom pipeline from the Hugging Face Hub, you are trusting that the code you are loading
is safe \u{1F512}. Make sure to check out the code online before loading & running it automatically.`)},l(g){h=o(g,"P",{});var v=a(h);L=l(v,`By loading a custom pipeline from the Hugging Face Hub, you are trusting that the code you are loading
is safe \u{1F512}. Make sure to check out the code online before loading & running it automatically.`),v.forEach(s)},m(g,v){r(g,h,v),i(h,L)},d(g){g&&s(h)}}}function pt(Le){let h,L,g,v,pe,N,oi,re,ai,Se,b,pi,T,ri,fi,te,ui,mi,qe,E,S,fe,K,di,ue,ci,Me,$,hi,me,_i,gi,U,yi,vi,Fe,q,wi,de,bi,$i,Oe,V,Ie,M,Ei,G,Pi,ji,ze,F,Be,P,O,ce,J,ki,he,xi,Ne,R,Di,Z,Ci,Te,c,Ai,_e,Hi,Li,ge,Si,qi,ye,Mi,Fi,ve,Oi,Ii,we,zi,Bi,be,Ni,Ti,Ke,I,Ki,$e,Ui,Vi,Ue,Q,Ve,j,z,Ee,W,Gi,Pe,Ji,Ge,w,Ri,le,Zi,Qi,je,Wi,Xi,ke,Yi,es,Je,ne,is,Re,X,Ze,d,ss,xe,ts,ls,Y,ns,os,ee,as,ps,De,rs,fs,Ce,us,ms,Ae,ds,cs,He,hs,_s,Qe,ie,We;return N=new li({}),K=new li({}),V=new ni({props:{code:`from diffusers import DiffusionPipeline

pipeline = DiffusionPipeline.from_pretrained(
    "google/ddpm-cifar10-32", custom_pipeline="hf-internal-testing/diffusers-dummy-pipeline"
)`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline

pipeline = DiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;google/ddpm-cifar10-32&quot;</span>, custom_pipeline=<span class="hljs-string">&quot;hf-internal-testing/diffusers-dummy-pipeline&quot;</span>
)`}}),F=new ot({props:{warning:!0,$$slots:{default:[at]},$$scope:{ctx:Le}}}),J=new li({}),Q=new ni({props:{code:`from diffusers import DiffusionPipeline
from transformers import CLIPFeatureExtractor, CLIPModel

clip_model_id = "laion/CLIP-ViT-B-32-laion2B-s34B-b79K"

feature_extractor = CLIPFeatureExtractor.from_pretrained(clip_model_id)
clip_model = CLIPModel.from_pretrained(clip_model_id)

pipeline = DiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    custom_pipeline="clip_guided_stable_diffusion",
    clip_model=clip_model,
    feature_extractor=feature_extractor,
)`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPFeatureExtractor, CLIPModel

clip_model_id = <span class="hljs-string">&quot;laion/CLIP-ViT-B-32-laion2B-s34B-b79K&quot;</span>

feature_extractor = CLIPFeatureExtractor.from_pretrained(clip_model_id)
clip_model = CLIPModel.from_pretrained(clip_model_id)

pipeline = DiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;runwayml/stable-diffusion-v1-5&quot;</span>,
    custom_pipeline=<span class="hljs-string">&quot;clip_guided_stable_diffusion&quot;</span>,
    clip_model=clip_model,
    feature_extractor=feature_extractor,
)`}}),W=new li({}),X=new ni({props:{code:`import torch
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

        <span class="hljs-keyword">return</span> image`}}),ie=new ni({props:{code:`my_pipeline = DiffusionPipeline.from_pretrained(
    "google/ddpm-cifar10-32", custom_pipeline="patrickvonplaten/my_custom_pipeline"
)`,highlighted:`my_pipeline = DiffusionPipeline.from_pretrained(
    <span class="hljs-string">&quot;google/ddpm-cifar10-32&quot;</span>, custom_pipeline=<span class="hljs-string">&quot;patrickvonplaten/my_custom_pipeline&quot;</span>
)`}}),{c(){h=n("meta"),L=u(),g=n("h1"),v=n("a"),pe=n("span"),k(N.$$.fragment),oi=u(),re=n("span"),ai=t("Loading and Saving Custom Pipelines"),Se=u(),b=n("p"),pi=t("Diffusers allows you to conveniently load any custom pipeline from the Hugging Face Hub as well as any "),T=n("a"),ri=t("official community pipeline"),fi=t(`
via the `),te=n("a"),ui=t("DiffusionPipeline"),mi=t(" class."),qe=u(),E=n("h2"),S=n("a"),fe=n("span"),k(K.$$.fragment),di=u(),ue=n("span"),ci=t("Loading custom pipelines from the Hub"),Me=u(),$=n("p"),hi=t("Custom pipelines can be easily loaded from any model repository on the Hub that defines a diffusion pipeline in a "),me=n("code"),_i=t("pipeline.py"),gi=t(` file.
Let\u2019s load a dummy pipeline from `),U=n("a"),yi=t("hf-internal-testing/diffusers-dummy-pipeline"),vi=t("."),Fe=u(),q=n("p"),wi=t("All you need to do is pass the custom pipeline repo id with the "),de=n("code"),bi=t("custom_pipeline"),$i=t(" argument alongside the repo from where you wish to load the pipeline modules."),Oe=u(),k(V.$$.fragment),Ie=u(),M=n("p"),Ei=t("This will load the custom pipeline as defined in the "),G=n("a"),Pi=t("model repository"),ji=t("."),ze=u(),k(F.$$.fragment),Be=u(),P=n("h2"),O=n("a"),ce=n("span"),k(J.$$.fragment),ki=u(),he=n("span"),xi=t("Loading official community pipelines"),Ne=u(),R=n("p"),Di=t("Community pipelines are summarized in the "),Z=n("a"),Ci=t("community examples folder"),Te=u(),c=n("p"),Ai=t("Similarly, you need to pass both the "),_e=n("em"),Hi=t("repo id"),Li=t(" from where you wish to load the weights as well as the "),ge=n("code"),Si=t("custom_pipeline"),qi=t(" argument. Here the "),ye=n("code"),Mi=t("custom_pipeline"),Fi=t(" argument should consist simply of the filename of the community pipeline excluding the "),ve=n("code"),Oi=t(".py"),Ii=t(" suffix, "),we=n("em"),zi=t("e.g."),Bi=u(),be=n("code"),Ni=t("clip_guided_stable_diffusion"),Ti=t("."),Ke=u(),I=n("p"),Ki=t("Since community pipelines are often more complex, one can mix loading weights from an official "),$e=n("em"),Ui=t("repo id"),Vi=t(`
and passing pipeline modules directly.`),Ue=u(),k(Q.$$.fragment),Ve=u(),j=n("h2"),z=n("a"),Ee=n("span"),k(W.$$.fragment),Gi=u(),Pe=n("span"),Ji=t("Adding custom pipelines to the Hub"),Ge=u(),w=n("p"),Ri=t(`To add a custom pipeline to the Hub, all you need to do is to define a pipeline class that inherits
from `),le=n("a"),Zi=t("DiffusionPipeline"),Qi=t(" in a "),je=n("code"),Wi=t("pipeline.py"),Xi=t(` file.
Make sure that the whole pipeline is encapsulated within a single class and that the `),ke=n("code"),Yi=t("pipeline.py"),es=t(` file
has only one such class.`),Je=u(),ne=n("p"),is=t("Let\u2019s quickly define an example pipeline."),Re=u(),k(X.$$.fragment),Ze=u(),d=n("p"),ss=t("Now you can upload this short file under the name "),xe=n("code"),ts=t("pipeline.py"),ls=t(" in your preferred "),Y=n("a"),ns=t("model repository"),os=t(". For Stable Diffusion pipelines, you may also "),ee=n("a"),as=t("join the community organisation for shared pipelines"),ps=t(` to upload yours.
Finally, we can load the custom pipeline by passing the model repository name, `),De=n("em"),rs=t("e.g."),fs=u(),Ce=n("code"),us=t("sd-diffusers-pipelines-library/my_custom_pipeline"),ms=t(" alongside the model repository from where we want to load the "),Ae=n("code"),ds=t("unet"),cs=t(" and "),He=n("code"),hs=t("scheduler"),_s=t(" components."),Qe=u(),k(ie.$$.fragment),this.h()},l(e){const p=lt('[data-svelte="svelte-1phssyn"]',document.head);h=o(p,"META",{name:!0,content:!0}),p.forEach(s),L=m(e),g=o(e,"H1",{class:!0});var se=a(g);v=o(se,"A",{id:!0,class:!0,href:!0});var ys=a(v);pe=o(ys,"SPAN",{});var vs=a(pe);x(N.$$.fragment,vs),vs.forEach(s),ys.forEach(s),oi=m(se),re=o(se,"SPAN",{});var ws=a(re);ai=l(ws,"Loading and Saving Custom Pipelines"),ws.forEach(s),se.forEach(s),Se=m(e),b=o(e,"P",{});var oe=a(b);pi=l(oe,"Diffusers allows you to conveniently load any custom pipeline from the Hugging Face Hub as well as any "),T=o(oe,"A",{href:!0,rel:!0});var bs=a(T);ri=l(bs,"official community pipeline"),bs.forEach(s),fi=l(oe,`
via the `),te=o(oe,"A",{href:!0});var $s=a(te);ui=l($s,"DiffusionPipeline"),$s.forEach(s),mi=l(oe," class."),oe.forEach(s),qe=m(e),E=o(e,"H2",{class:!0});var Xe=a(E);S=o(Xe,"A",{id:!0,class:!0,href:!0});var Es=a(S);fe=o(Es,"SPAN",{});var Ps=a(fe);x(K.$$.fragment,Ps),Ps.forEach(s),Es.forEach(s),di=m(Xe),ue=o(Xe,"SPAN",{});var js=a(ue);ci=l(js,"Loading custom pipelines from the Hub"),js.forEach(s),Xe.forEach(s),Me=m(e),$=o(e,"P",{});var ae=a($);hi=l(ae,"Custom pipelines can be easily loaded from any model repository on the Hub that defines a diffusion pipeline in a "),me=o(ae,"CODE",{});var ks=a(me);_i=l(ks,"pipeline.py"),ks.forEach(s),gi=l(ae,` file.
Let\u2019s load a dummy pipeline from `),U=o(ae,"A",{href:!0,rel:!0});var xs=a(U);yi=l(xs,"hf-internal-testing/diffusers-dummy-pipeline"),xs.forEach(s),vi=l(ae,"."),ae.forEach(s),Fe=m(e),q=o(e,"P",{});var Ye=a(q);wi=l(Ye,"All you need to do is pass the custom pipeline repo id with the "),de=o(Ye,"CODE",{});var Ds=a(de);bi=l(Ds,"custom_pipeline"),Ds.forEach(s),$i=l(Ye," argument alongside the repo from where you wish to load the pipeline modules."),Ye.forEach(s),Oe=m(e),x(V.$$.fragment,e),Ie=m(e),M=o(e,"P",{});var ei=a(M);Ei=l(ei,"This will load the custom pipeline as defined in the "),G=o(ei,"A",{href:!0,rel:!0});var Cs=a(G);Pi=l(Cs,"model repository"),Cs.forEach(s),ji=l(ei,"."),ei.forEach(s),ze=m(e),x(F.$$.fragment,e),Be=m(e),P=o(e,"H2",{class:!0});var ii=a(P);O=o(ii,"A",{id:!0,class:!0,href:!0});var As=a(O);ce=o(As,"SPAN",{});var Hs=a(ce);x(J.$$.fragment,Hs),Hs.forEach(s),As.forEach(s),ki=m(ii),he=o(ii,"SPAN",{});var Ls=a(he);xi=l(Ls,"Loading official community pipelines"),Ls.forEach(s),ii.forEach(s),Ne=m(e),R=o(e,"P",{});var gs=a(R);Di=l(gs,"Community pipelines are summarized in the "),Z=o(gs,"A",{href:!0,rel:!0});var Ss=a(Z);Ci=l(Ss,"community examples folder"),Ss.forEach(s),gs.forEach(s),Te=m(e),c=o(e,"P",{});var y=a(c);Ai=l(y,"Similarly, you need to pass both the "),_e=o(y,"EM",{});var qs=a(_e);Hi=l(qs,"repo id"),qs.forEach(s),Li=l(y," from where you wish to load the weights as well as the "),ge=o(y,"CODE",{});var Ms=a(ge);Si=l(Ms,"custom_pipeline"),Ms.forEach(s),qi=l(y," argument. Here the "),ye=o(y,"CODE",{});var Fs=a(ye);Mi=l(Fs,"custom_pipeline"),Fs.forEach(s),Fi=l(y," argument should consist simply of the filename of the community pipeline excluding the "),ve=o(y,"CODE",{});var Os=a(ve);Oi=l(Os,".py"),Os.forEach(s),Ii=l(y," suffix, "),we=o(y,"EM",{});var Is=a(we);zi=l(Is,"e.g."),Is.forEach(s),Bi=m(y),be=o(y,"CODE",{});var zs=a(be);Ni=l(zs,"clip_guided_stable_diffusion"),zs.forEach(s),Ti=l(y,"."),y.forEach(s),Ke=m(e),I=o(e,"P",{});var si=a(I);Ki=l(si,"Since community pipelines are often more complex, one can mix loading weights from an official "),$e=o(si,"EM",{});var Bs=a($e);Ui=l(Bs,"repo id"),Bs.forEach(s),Vi=l(si,`
and passing pipeline modules directly.`),si.forEach(s),Ue=m(e),x(Q.$$.fragment,e),Ve=m(e),j=o(e,"H2",{class:!0});var ti=a(j);z=o(ti,"A",{id:!0,class:!0,href:!0});var Ns=a(z);Ee=o(Ns,"SPAN",{});var Ts=a(Ee);x(W.$$.fragment,Ts),Ts.forEach(s),Ns.forEach(s),Gi=m(ti),Pe=o(ti,"SPAN",{});var Ks=a(Pe);Ji=l(Ks,"Adding custom pipelines to the Hub"),Ks.forEach(s),ti.forEach(s),Ge=m(e),w=o(e,"P",{});var B=a(w);Ri=l(B,`To add a custom pipeline to the Hub, all you need to do is to define a pipeline class that inherits
from `),le=o(B,"A",{href:!0});var Us=a(le);Zi=l(Us,"DiffusionPipeline"),Us.forEach(s),Qi=l(B," in a "),je=o(B,"CODE",{});var Vs=a(je);Wi=l(Vs,"pipeline.py"),Vs.forEach(s),Xi=l(B,` file.
Make sure that the whole pipeline is encapsulated within a single class and that the `),ke=o(B,"CODE",{});var Gs=a(ke);Yi=l(Gs,"pipeline.py"),Gs.forEach(s),es=l(B,` file
has only one such class.`),B.forEach(s),Je=m(e),ne=o(e,"P",{});var Js=a(ne);is=l(Js,"Let\u2019s quickly define an example pipeline."),Js.forEach(s),Re=m(e),x(X.$$.fragment,e),Ze=m(e),d=o(e,"P",{});var _=a(d);ss=l(_,"Now you can upload this short file under the name "),xe=o(_,"CODE",{});var Rs=a(xe);ts=l(Rs,"pipeline.py"),Rs.forEach(s),ls=l(_," in your preferred "),Y=o(_,"A",{href:!0,rel:!0});var Zs=a(Y);ns=l(Zs,"model repository"),Zs.forEach(s),os=l(_,". For Stable Diffusion pipelines, you may also "),ee=o(_,"A",{href:!0,rel:!0});var Qs=a(ee);as=l(Qs,"join the community organisation for shared pipelines"),Qs.forEach(s),ps=l(_,` to upload yours.
Finally, we can load the custom pipeline by passing the model repository name, `),De=o(_,"EM",{});var Ws=a(De);rs=l(Ws,"e.g."),Ws.forEach(s),fs=m(_),Ce=o(_,"CODE",{});var Xs=a(Ce);us=l(Xs,"sd-diffusers-pipelines-library/my_custom_pipeline"),Xs.forEach(s),ms=l(_," alongside the model repository from where we want to load the "),Ae=o(_,"CODE",{});var Ys=a(Ae);ds=l(Ys,"unet"),Ys.forEach(s),cs=l(_," and "),He=o(_,"CODE",{});var et=a(He);hs=l(et,"scheduler"),et.forEach(s),_s=l(_," components."),_.forEach(s),Qe=m(e),x(ie.$$.fragment,e),this.h()},h(){f(h,"name","hf:doc:metadata"),f(h,"content",JSON.stringify(rt)),f(v,"id","loading-and-saving-custom-pipelines"),f(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(v,"href","#loading-and-saving-custom-pipelines"),f(g,"class","relative group"),f(T,"href","https://github.com/huggingface/diffusers/tree/main/examples/community"),f(T,"rel","nofollow"),f(te,"href","/docs/diffusers/main/en/using-diffusers/loading#diffusers.DiffusionPipeline"),f(S,"id","loading-custom-pipelines-from-the-hub"),f(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(S,"href","#loading-custom-pipelines-from-the-hub"),f(E,"class","relative group"),f(U,"href","https://huggingface.co/hf-internal-testing/diffusers-dummy-pipeline"),f(U,"rel","nofollow"),f(G,"href","https://huggingface.co/hf-internal-testing/diffusers-dummy-pipeline/blob/main/pipeline.py"),f(G,"rel","nofollow"),f(O,"id","loading-official-community-pipelines"),f(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(O,"href","#loading-official-community-pipelines"),f(P,"class","relative group"),f(Z,"href","https://github.com/huggingface/diffusers/tree/main/examples/community"),f(Z,"rel","nofollow"),f(z,"id","adding-custom-pipelines-to-the-hub"),f(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(z,"href","#adding-custom-pipelines-to-the-hub"),f(j,"class","relative group"),f(le,"href","/docs/diffusers/main/en/using-diffusers/loading#diffusers.DiffusionPipeline"),f(Y,"href","https://huggingface.co/docs/hub/models-uploading"),f(Y,"rel","nofollow"),f(ee,"href","https://huggingface.co/organizations/sd-diffusers-pipelines-library/share/BUPyDUuHcciGTOKaExlqtfFcyCZsVFdrjr"),f(ee,"rel","nofollow")},m(e,p){i(document.head,h),r(e,L,p),r(e,g,p),i(g,v),i(v,pe),D(N,pe,null),i(g,oi),i(g,re),i(re,ai),r(e,Se,p),r(e,b,p),i(b,pi),i(b,T),i(T,ri),i(b,fi),i(b,te),i(te,ui),i(b,mi),r(e,qe,p),r(e,E,p),i(E,S),i(S,fe),D(K,fe,null),i(E,di),i(E,ue),i(ue,ci),r(e,Me,p),r(e,$,p),i($,hi),i($,me),i(me,_i),i($,gi),i($,U),i(U,yi),i($,vi),r(e,Fe,p),r(e,q,p),i(q,wi),i(q,de),i(de,bi),i(q,$i),r(e,Oe,p),D(V,e,p),r(e,Ie,p),r(e,M,p),i(M,Ei),i(M,G),i(G,Pi),i(M,ji),r(e,ze,p),D(F,e,p),r(e,Be,p),r(e,P,p),i(P,O),i(O,ce),D(J,ce,null),i(P,ki),i(P,he),i(he,xi),r(e,Ne,p),r(e,R,p),i(R,Di),i(R,Z),i(Z,Ci),r(e,Te,p),r(e,c,p),i(c,Ai),i(c,_e),i(_e,Hi),i(c,Li),i(c,ge),i(ge,Si),i(c,qi),i(c,ye),i(ye,Mi),i(c,Fi),i(c,ve),i(ve,Oi),i(c,Ii),i(c,we),i(we,zi),i(c,Bi),i(c,be),i(be,Ni),i(c,Ti),r(e,Ke,p),r(e,I,p),i(I,Ki),i(I,$e),i($e,Ui),i(I,Vi),r(e,Ue,p),D(Q,e,p),r(e,Ve,p),r(e,j,p),i(j,z),i(z,Ee),D(W,Ee,null),i(j,Gi),i(j,Pe),i(Pe,Ji),r(e,Ge,p),r(e,w,p),i(w,Ri),i(w,le),i(le,Zi),i(w,Qi),i(w,je),i(je,Wi),i(w,Xi),i(w,ke),i(ke,Yi),i(w,es),r(e,Je,p),r(e,ne,p),i(ne,is),r(e,Re,p),D(X,e,p),r(e,Ze,p),r(e,d,p),i(d,ss),i(d,xe),i(xe,ts),i(d,ls),i(d,Y),i(Y,ns),i(d,os),i(d,ee),i(ee,as),i(d,ps),i(d,De),i(De,rs),i(d,fs),i(d,Ce),i(Ce,us),i(d,ms),i(d,Ae),i(Ae,ds),i(d,cs),i(d,He),i(He,hs),i(d,_s),r(e,Qe,p),D(ie,e,p),We=!0},p(e,[p]){const se={};p&2&&(se.$$scope={dirty:p,ctx:e}),F.$set(se)},i(e){We||(C(N.$$.fragment,e),C(K.$$.fragment,e),C(V.$$.fragment,e),C(F.$$.fragment,e),C(J.$$.fragment,e),C(Q.$$.fragment,e),C(W.$$.fragment,e),C(X.$$.fragment,e),C(ie.$$.fragment,e),We=!0)},o(e){A(N.$$.fragment,e),A(K.$$.fragment,e),A(V.$$.fragment,e),A(F.$$.fragment,e),A(J.$$.fragment,e),A(Q.$$.fragment,e),A(W.$$.fragment,e),A(X.$$.fragment,e),A(ie.$$.fragment,e),We=!1},d(e){s(h),e&&s(L),e&&s(g),H(N),e&&s(Se),e&&s(b),e&&s(qe),e&&s(E),H(K),e&&s(Me),e&&s($),e&&s(Fe),e&&s(q),e&&s(Oe),H(V,e),e&&s(Ie),e&&s(M),e&&s(ze),H(F,e),e&&s(Be),e&&s(P),H(J),e&&s(Ne),e&&s(R),e&&s(Te),e&&s(c),e&&s(Ke),e&&s(I),e&&s(Ue),H(Q,e),e&&s(Ve),e&&s(j),H(W),e&&s(Ge),e&&s(w),e&&s(Je),e&&s(ne),e&&s(Re),H(X,e),e&&s(Ze),e&&s(d),e&&s(Qe),H(ie,e)}}}const rt={local:"loading-and-saving-custom-pipelines",sections:[{local:"loading-custom-pipelines-from-the-hub",title:"Loading custom pipelines from the Hub"},{local:"loading-official-community-pipelines",title:"Loading official community pipelines"},{local:"adding-custom-pipelines-to-the-hub",title:"Adding custom pipelines to the Hub"}],title:"Loading and Saving Custom Pipelines"};function ft(Le){return nt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ht extends it{constructor(h){super();st(this,h,ft,pt,tt,{})}}export{ht as default,rt as metadata};
