import{S as cl,i as ul,s as hl,e as l,k as d,w as L,t as a,M as fl,c as r,d as t,m as c,a as n,x as R,h as o,b as _,G as s,g as i,y as z,q as M,o as Y,B as U,v as ml}from"../chunks/vendor-hf-doc-builder.js";import{T as _l}from"../chunks/Tip-hf-doc-builder.js";import{I as no}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as bs}from"../chunks/CodeBlock-hf-doc-builder.js";function wl(js){let u,H,f,g,D,w,re,O;return{c(){u=l("p"),H=a("Take a look at the "),f=l("code"),g=a("src/transformers/pipelines/__init__.py"),D=a(" and the dictionary "),w=l("code"),re=a("SUPPORTED_TASKS"),O=a(` to see how a task is defined.
If possible your custom task should provide a default model.`)},l(I){u=r(I,"P",{});var k=n(u);H=o(k,"Take a look at the "),f=r(k,"CODE",{});var y=n(f);g=o(y,"src/transformers/pipelines/__init__.py"),y.forEach(t),D=o(k," and the dictionary "),w=r(k,"CODE",{});var we=n(w);re=o(we,"SUPPORTED_TASKS"),we.forEach(t),O=o(k,` to see how a task is defined.
If possible your custom task should provide a default model.`),k.forEach(t)},m(I,k){i(I,u,k),s(u,H),s(u,f),s(f,g),s(u,D),s(u,w),s(w,re),s(u,O)},d(I){I&&t(u)}}}function kl(js){let u,H,f,g,D,w,re,O,I,k,y,we,ve,lt,rt,be,nt,pt,qs,E,it,je,dt,ct,qe,ut,ht,$e,ft,mt,$s,h,_t,Pe,wt,kt,Te,yt,gt,Ce,Et,vt,De,bt,jt,Oe,qt,$t,Ps,ne,Ts,ke,Pt,Cs,A,Ie,Tt,Ct,Ae,Dt,Ot,Ds,$,Se,It,At,xe,St,xt,Ne,Nt,Lt,Os,S,Le,Rt,zt,Re,Mt,Yt,Is,P,ze,Ut,Ht,Me,Gt,Ft,Ye,Xt,Jt,As,m,Bt,Ue,Kt,Qt,He,Vt,Wt,Ge,Zt,ea,Fe,sa,ta,Ss,G,aa,Xe,oa,la,xs,pe,Ns,v,ra,Je,na,pa,Be,ia,da,Ke,ca,ua,Ls,ie,Rs,ye,ha,zs,x,F,Qe,de,fa,Ve,ma,Ms,X,_a,We,wa,ka,Ys,ce,Us,J,Hs,B,ya,Ze,ga,Ea,Gs,ue,Fs,N,K,es,he,va,ss,ba,Xs,Q,ja,ts,qa,$a,Js,b,Pa,as,Ta,Ca,os,Da,Oa,ls,Ia,Aa,Bs,T,Sa,rs,xa,Na,ns,La,Ra,Ks,V,za,ps,Ma,Ya,Qs,j,W,is,Ua,Ha,ds,Ga,Fa,Xa,Z,cs,Ja,Ba,us,Ka,Qa,Va,ee,hs,Wa,Za,fs,eo,so,to,se,ms,ao,oo,_s,lo,ro,Vs;return w=new no({}),ne=new bs({props:{code:`from transformers import Pipeline


class MyPipeline(Pipeline):
    def _sanitize_parameters(self, **kwargs):
        preprocess_kwargs = {}
        if "maybe_arg" in kwargs:
            preprocess_kwargs["maybe_arg"] = kwargs["maybe_arg"]
        return preprocess_kwargs, {}, {}

    def preprocess(self, inputs, maybe_arg=2):
        model_input = Tensor(inputs["input_ids"])
        return {"model_input": model_input}

    def _forward(self, model_inputs):
        # model_inputs == {"model_input": model_input}
        outputs = self.model(**model_inputs)
        # Maybe {"logits": Tensor(...)}
        return outputs

    def postprocess(self, model_outputs):
        best_class = model_outputs["logits"].softmax(-1)
        return best_class`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Pipeline


<span class="hljs-keyword">class</span> <span class="hljs-title class_">MyPipeline</span>(<span class="hljs-title class_ inherited__">Pipeline</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">_sanitize_parameters</span>(<span class="hljs-params">self, **kwargs</span>):
        preprocess_kwargs = {}
        <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;maybe_arg&quot;</span> <span class="hljs-keyword">in</span> kwargs:
            preprocess_kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>] = kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>]
        <span class="hljs-keyword">return</span> preprocess_kwargs, {}, {}

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess</span>(<span class="hljs-params">self, inputs, maybe_arg=<span class="hljs-number">2</span></span>):
        model_input = Tensor(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;model_input&quot;</span>: model_input}

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">_forward</span>(<span class="hljs-params">self, model_inputs</span>):
        <span class="hljs-comment"># model_inputs == {&quot;model_input&quot;: model_input}</span>
        outputs = self.model(**model_inputs)
        <span class="hljs-comment"># Maybe {&quot;logits&quot;: Tensor(...)}</span>
        <span class="hljs-keyword">return</span> outputs

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">postprocess</span>(<span class="hljs-params">self, model_outputs</span>):
        best_class = model_outputs[<span class="hljs-string">&quot;logits&quot;</span>].softmax(-<span class="hljs-number">1</span>)
        <span class="hljs-keyword">return</span> best_class`}}),pe=new bs({props:{code:`pipe = pipeline("my-new-task")
pipe("This is a test")

pipe("This is a test", top_k=2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>pipe = pipeline(<span class="hljs-string">&quot;my-new-task&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>pipe(<span class="hljs-string">&quot;This is a test&quot;</span>)
[{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;1-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.8</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;2-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.1</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;3-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.05</span>}
{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;4-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.025</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;5-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.025</span>}]

<span class="hljs-meta">&gt;&gt;&gt; </span>pipe(<span class="hljs-string">&quot;This is a test&quot;</span>, top_k=<span class="hljs-number">2</span>)
[{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;1-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.8</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;2-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.1</span>}]`}}),ie=new bs({props:{code:`def postprocess(self, model_outputs, top_k=5):
    best_class = model_outputs["logits"].softmax(-1)
    # Add logic to handle top_k
    return best_class


def _sanitize_parameters(self, **kwargs):
    preprocess_kwargs = {}
    if "maybe_arg" in kwargs:
        preprocess_kwargs["maybe_arg"] = kwargs["maybe_arg"]

    postprocess_kwargs = {}
    if "top_k" in kwargs:
        preprocess_kwargs["top_k"] = kwargs["top_k"]
    return preprocess_kwargs, {}, postprocess_kwargs`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">postprocess</span>(<span class="hljs-params">self, model_outputs, top_k=<span class="hljs-number">5</span></span>):
    best_class = model_outputs[<span class="hljs-string">&quot;logits&quot;</span>].softmax(-<span class="hljs-number">1</span>)
    <span class="hljs-comment"># Add logic to handle top_k</span>
    <span class="hljs-keyword">return</span> best_class


<span class="hljs-keyword">def</span> <span class="hljs-title function_">_sanitize_parameters</span>(<span class="hljs-params">self, **kwargs</span>):
    preprocess_kwargs = {}
    <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;maybe_arg&quot;</span> <span class="hljs-keyword">in</span> kwargs:
        preprocess_kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>] = kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>]

    postprocess_kwargs = {}
    <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;top_k&quot;</span> <span class="hljs-keyword">in</span> kwargs:
        preprocess_kwargs[<span class="hljs-string">&quot;top_k&quot;</span>] = kwargs[<span class="hljs-string">&quot;top_k&quot;</span>]
    <span class="hljs-keyword">return</span> preprocess_kwargs, {}, postprocess_kwargs`}}),de=new no({}),ce=new bs({props:{code:`my_new_task = {
    "impl": MyPipeline,
    "tf": (),
    "pt": (AutoModelForAudioClassification,) if is_torch_available() else (),
    "default": {"model": {"pt": "user/awesome_model"}},
    "type": "audio",  # current support type: text, audio, image, multimodal
}`,highlighted:`my_new_task = {
    <span class="hljs-string">&quot;impl&quot;</span>: MyPipeline,
    <span class="hljs-string">&quot;tf&quot;</span>: (),
    <span class="hljs-string">&quot;pt&quot;</span>: (AutoModelForAudioClassification,) <span class="hljs-keyword">if</span> is_torch_available() <span class="hljs-keyword">else</span> (),
    <span class="hljs-string">&quot;default&quot;</span>: {<span class="hljs-string">&quot;model&quot;</span>: {<span class="hljs-string">&quot;pt&quot;</span>: <span class="hljs-string">&quot;user/awesome_model&quot;</span>}},
    <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;audio&quot;</span>,  <span class="hljs-comment"># current support type: text, audio, image, multimodal</span>
}`}}),J=new _l({props:{$$slots:{default:[wl]},$$scope:{ctx:js}}}),ue=new bs({props:{code:`from transformers.pipelines import PIPELINE_REGISTRY

PIPELINE_REGISTRY.register_pipeline("new-task", my_new_task)`,highlighted:`<span class="hljs-keyword">from</span> transformers.pipelines <span class="hljs-keyword">import</span> PIPELINE_REGISTRY

PIPELINE_REGISTRY.register_pipeline(<span class="hljs-string">&quot;new-task&quot;</span>, my_new_task)`}}),he=new no({}),{c(){u=l("meta"),H=d(),f=l("h1"),g=l("a"),D=l("span"),L(w.$$.fragment),re=d(),O=l("span"),I=a("How to add a pipeline to \u{1F917} Transformers?"),k=d(),y=l("p"),we=a(`First and foremost, you need to decide the raw entries the pipeline will be able to take. It can be strings, raw bytes,
dictionaries or whatever seems to be the most likely desired input. Try to keep these inputs as pure Python as possible
as it makes compatibility easier (even through other languages via JSON). Those will be the `),ve=l("code"),lt=a("inputs"),rt=a(` of the
pipeline (`),be=l("code"),nt=a("preprocess"),pt=a(")."),qs=d(),E=l("p"),it=a("Then define the "),je=l("code"),dt=a("outputs"),ct=a(". Same policy as the "),qe=l("code"),ut=a("inputs"),ht=a(`. The simpler, the better. Those will be the outputs of
`),$e=l("code"),ft=a("postprocess"),mt=a(" method."),$s=d(),h=l("p"),_t=a("Start by inheriting the base class "),Pe=l("code"),wt=a("Pipeline"),kt=a(". with the 4 methods needed to implement "),Te=l("code"),yt=a("preprocess"),gt=a(`,
`),Ce=l("code"),Et=a("_forward"),vt=a(", "),De=l("code"),bt=a("postprocess"),jt=a(" and "),Oe=l("code"),qt=a("_sanitize_parameters"),$t=a("."),Ps=d(),L(ne.$$.fragment),Ts=d(),ke=l("p"),Pt=a(`The structure of this breakdown is to support relatively seamless support for CPU/GPU, while supporting doing
pre/postprocessing on the CPU on different threads`),Cs=d(),A=l("p"),Ie=l("code"),Tt=a("preprocess"),Ct=a(` will take the originally defined inputs, and turn them into something feedable to the model. It might
contain more information and is usually a `),Ae=l("code"),Dt=a("Dict"),Ot=a("."),Ds=d(),$=l("p"),Se=l("code"),It=a("_forward"),At=a(" is the implementation detail and is not meant to be called directly. "),xe=l("code"),St=a("forward"),xt=a(` is the preferred
called method as it contains safeguards to make sure everything is working on the expected device. If anything is
linked to a real model it belongs in the `),Ne=l("code"),Nt=a("_forward"),Lt=a(" method, anything else is in the preprocess/postprocess."),Os=d(),S=l("p"),Le=l("code"),Rt=a("postprocess"),zt=a(" methods will take the output of "),Re=l("code"),Mt=a("_forward"),Yt=a(` and turn it into the final output that were decided
earlier.`),Is=d(),P=l("p"),ze=l("code"),Ut=a("_sanitize_parameters"),Ht=a(` exists to allow users to pass any parameters whenever they wish, be it at initialization
time `),Me=l("code"),Gt=a("pipeline(...., maybe_arg=4)"),Ft=a(" or at call time "),Ye=l("code"),Xt=a("pipe = pipeline(...); output = pipe(...., maybe_arg=4)"),Jt=a("."),As=d(),m=l("p"),Bt=a("The returns of "),Ue=l("code"),Kt=a("_sanitize_parameters"),Qt=a(" are the 3 dicts of kwargs that will be passed directly to "),He=l("code"),Vt=a("preprocess"),Wt=a(`,
`),Ge=l("code"),Zt=a("_forward"),ea=a(" and "),Fe=l("code"),sa=a("postprocess"),ta=a(`. Don\u2019t fill anything if the caller didn\u2019t call with any extra parameter. That
allows to keep the default arguments in the function definition which is always more \u201Cnatural\u201D.`),Ss=d(),G=l("p"),aa=a("A classic example would be a "),Xe=l("code"),oa=a("top_k"),la=a(" argument in the post processing in classification tasks."),xs=d(),L(pe.$$.fragment),Ns=d(),v=l("p"),ra=a("In order to achieve that, we\u2019ll update our "),Je=l("code"),na=a("postprocess"),pa=a(" method with a default parameter to "),Be=l("code"),ia=a("5"),da=a(`. and edit
`),Ke=l("code"),ca=a("_sanitize_parameters"),ua=a(" to allow this new parameter."),Ls=d(),L(ie.$$.fragment),Rs=d(),ye=l("p"),ha=a(`Try to keep the inputs/outputs very simple and ideally JSON-serializable as it makes the pipeline usage very easy
without requiring users to understand new kind of objects. It\u2019s also relatively common to support many different types
of arguments for ease of use (audio files, can be filenames, URLs or pure bytes)`),zs=d(),x=l("h2"),F=l("a"),Qe=l("span"),L(de.$$.fragment),fa=d(),Ve=l("span"),ma=a("Adding it to the list of supported tasks"),Ms=d(),X=l("p"),_a=a("To register your "),We=l("code"),wa=a("new-task"),ka=a(` to the list of supported tasks, provide the
following task template:`),Ys=d(),L(ce.$$.fragment),Us=d(),L(J.$$.fragment),Hs=d(),B=l("p"),ya=a(`Then add your custom task to the list of supported tasks via
`),Ze=l("code"),ga=a("PIPELINE_REGISTRY.register_pipeline()"),Ea=a(":"),Gs=d(),L(ue.$$.fragment),Fs=d(),N=l("h2"),K=l("a"),es=l("span"),L(he.$$.fragment),va=d(),ss=l("span"),ba=a("Adding tests"),Xs=d(),Q=l("p"),ja=a("Create a new file "),ts=l("code"),qa=a("tests/test_pipelines_MY_PIPELINE.py"),$a=a(" with example with the other tests."),Js=d(),b=l("p"),Pa=a("The "),as=l("code"),Ta=a("run_pipeline_test"),Ca=a(` function will be very generic and run on small random models on every possible
architecture as defined by `),os=l("code"),Da=a("model_mapping"),Oa=a(" and "),ls=l("code"),Ia=a("tf_model_mapping"),Aa=a("."),Bs=d(),T=l("p"),Sa=a(`This is very important to test future compatibility, meaning if someone adds a new model for
`),rs=l("code"),xa=a("XXXForQuestionAnswering"),Na=a(` then the pipeline test will attempt to run on it. Because the models are random it\u2019s
impossible to check for actual values, that\u2019s why There is a helper `),ns=l("code"),La=a("ANY"),Ra=a(` that will simply attempt to match the
output of the pipeline TYPE.`),Ks=d(),V=l("p"),za=a("You also "),ps=l("em"),Ma=a("need"),Ya=a(" to implement 2 (ideally 4) tests."),Qs=d(),j=l("ul"),W=l("li"),is=l("code"),Ua=a("test_small_model_pt"),Ha=a(` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),ds=l("code"),Ga=a("test_small_model_tf"),Fa=a("."),Xa=d(),Z=l("li"),cs=l("code"),Ja=a("test_small_model_tf"),Ba=a(` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),us=l("code"),Ka=a("test_small_model_pt"),Qa=a("."),Va=d(),ee=l("li"),hs=l("code"),Wa=a("test_large_model_pt"),Za=a(" ("),fs=l("code"),eo=a("optional"),so=a(`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),to=d(),se=l("li"),ms=l("code"),ao=a("test_large_model_tf"),oo=a(" ("),_s=l("code"),lo=a("optional"),ro=a(`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),this.h()},l(e){const p=fl('[data-svelte="svelte-1phssyn"]',document.head);u=r(p,"META",{name:!0,content:!0}),p.forEach(t),H=c(e),f=r(e,"H1",{class:!0});var fe=n(f);g=r(fe,"A",{id:!0,class:!0,href:!0});var po=n(g);D=r(po,"SPAN",{});var io=n(D);R(w.$$.fragment,io),io.forEach(t),po.forEach(t),re=c(fe),O=r(fe,"SPAN",{});var co=n(O);I=o(co,"How to add a pipeline to \u{1F917} Transformers?"),co.forEach(t),fe.forEach(t),k=c(e),y=r(e,"P",{});var ge=n(y);we=o(ge,`First and foremost, you need to decide the raw entries the pipeline will be able to take. It can be strings, raw bytes,
dictionaries or whatever seems to be the most likely desired input. Try to keep these inputs as pure Python as possible
as it makes compatibility easier (even through other languages via JSON). Those will be the `),ve=r(ge,"CODE",{});var uo=n(ve);lt=o(uo,"inputs"),uo.forEach(t),rt=o(ge,` of the
pipeline (`),be=r(ge,"CODE",{});var ho=n(be);nt=o(ho,"preprocess"),ho.forEach(t),pt=o(ge,")."),ge.forEach(t),qs=c(e),E=r(e,"P",{});var te=n(E);it=o(te,"Then define the "),je=r(te,"CODE",{});var fo=n(je);dt=o(fo,"outputs"),fo.forEach(t),ct=o(te,". Same policy as the "),qe=r(te,"CODE",{});var mo=n(qe);ut=o(mo,"inputs"),mo.forEach(t),ht=o(te,`. The simpler, the better. Those will be the outputs of
`),$e=r(te,"CODE",{});var _o=n($e);ft=o(_o,"postprocess"),_o.forEach(t),mt=o(te," method."),te.forEach(t),$s=c(e),h=r(e,"P",{});var q=n(h);_t=o(q,"Start by inheriting the base class "),Pe=r(q,"CODE",{});var wo=n(Pe);wt=o(wo,"Pipeline"),wo.forEach(t),kt=o(q,". with the 4 methods needed to implement "),Te=r(q,"CODE",{});var ko=n(Te);yt=o(ko,"preprocess"),ko.forEach(t),gt=o(q,`,
`),Ce=r(q,"CODE",{});var yo=n(Ce);Et=o(yo,"_forward"),yo.forEach(t),vt=o(q,", "),De=r(q,"CODE",{});var go=n(De);bt=o(go,"postprocess"),go.forEach(t),jt=o(q," and "),Oe=r(q,"CODE",{});var Eo=n(Oe);qt=o(Eo,"_sanitize_parameters"),Eo.forEach(t),$t=o(q,"."),q.forEach(t),Ps=c(e),R(ne.$$.fragment,e),Ts=c(e),ke=r(e,"P",{});var vo=n(ke);Pt=o(vo,`The structure of this breakdown is to support relatively seamless support for CPU/GPU, while supporting doing
pre/postprocessing on the CPU on different threads`),vo.forEach(t),Cs=c(e),A=r(e,"P",{});var ws=n(A);Ie=r(ws,"CODE",{});var bo=n(Ie);Tt=o(bo,"preprocess"),bo.forEach(t),Ct=o(ws,` will take the originally defined inputs, and turn them into something feedable to the model. It might
contain more information and is usually a `),Ae=r(ws,"CODE",{});var jo=n(Ae);Dt=o(jo,"Dict"),jo.forEach(t),Ot=o(ws,"."),ws.forEach(t),Ds=c(e),$=r(e,"P",{});var me=n($);Se=r(me,"CODE",{});var qo=n(Se);It=o(qo,"_forward"),qo.forEach(t),At=o(me," is the implementation detail and is not meant to be called directly. "),xe=r(me,"CODE",{});var $o=n(xe);St=o($o,"forward"),$o.forEach(t),xt=o(me,` is the preferred
called method as it contains safeguards to make sure everything is working on the expected device. If anything is
linked to a real model it belongs in the `),Ne=r(me,"CODE",{});var Po=n(Ne);Nt=o(Po,"_forward"),Po.forEach(t),Lt=o(me," method, anything else is in the preprocess/postprocess."),me.forEach(t),Os=c(e),S=r(e,"P",{});var ks=n(S);Le=r(ks,"CODE",{});var To=n(Le);Rt=o(To,"postprocess"),To.forEach(t),zt=o(ks," methods will take the output of "),Re=r(ks,"CODE",{});var Co=n(Re);Mt=o(Co,"_forward"),Co.forEach(t),Yt=o(ks,` and turn it into the final output that were decided
earlier.`),ks.forEach(t),Is=c(e),P=r(e,"P",{});var _e=n(P);ze=r(_e,"CODE",{});var Do=n(ze);Ut=o(Do,"_sanitize_parameters"),Do.forEach(t),Ht=o(_e,` exists to allow users to pass any parameters whenever they wish, be it at initialization
time `),Me=r(_e,"CODE",{});var Oo=n(Me);Gt=o(Oo,"pipeline(...., maybe_arg=4)"),Oo.forEach(t),Ft=o(_e," or at call time "),Ye=r(_e,"CODE",{});var Io=n(Ye);Xt=o(Io,"pipe = pipeline(...); output = pipe(...., maybe_arg=4)"),Io.forEach(t),Jt=o(_e,"."),_e.forEach(t),As=c(e),m=r(e,"P",{});var C=n(m);Bt=o(C,"The returns of "),Ue=r(C,"CODE",{});var Ao=n(Ue);Kt=o(Ao,"_sanitize_parameters"),Ao.forEach(t),Qt=o(C," are the 3 dicts of kwargs that will be passed directly to "),He=r(C,"CODE",{});var So=n(He);Vt=o(So,"preprocess"),So.forEach(t),Wt=o(C,`,
`),Ge=r(C,"CODE",{});var xo=n(Ge);Zt=o(xo,"_forward"),xo.forEach(t),ea=o(C," and "),Fe=r(C,"CODE",{});var No=n(Fe);sa=o(No,"postprocess"),No.forEach(t),ta=o(C,`. Don\u2019t fill anything if the caller didn\u2019t call with any extra parameter. That
allows to keep the default arguments in the function definition which is always more \u201Cnatural\u201D.`),C.forEach(t),Ss=c(e),G=r(e,"P",{});var Ws=n(G);aa=o(Ws,"A classic example would be a "),Xe=r(Ws,"CODE",{});var Lo=n(Xe);oa=o(Lo,"top_k"),Lo.forEach(t),la=o(Ws," argument in the post processing in classification tasks."),Ws.forEach(t),xs=c(e),R(pe.$$.fragment,e),Ns=c(e),v=r(e,"P",{});var ae=n(v);ra=o(ae,"In order to achieve that, we\u2019ll update our "),Je=r(ae,"CODE",{});var Ro=n(Je);na=o(Ro,"postprocess"),Ro.forEach(t),pa=o(ae," method with a default parameter to "),Be=r(ae,"CODE",{});var zo=n(Be);ia=o(zo,"5"),zo.forEach(t),da=o(ae,`. and edit
`),Ke=r(ae,"CODE",{});var Mo=n(Ke);ca=o(Mo,"_sanitize_parameters"),Mo.forEach(t),ua=o(ae," to allow this new parameter."),ae.forEach(t),Ls=c(e),R(ie.$$.fragment,e),Rs=c(e),ye=r(e,"P",{});var Yo=n(ye);ha=o(Yo,`Try to keep the inputs/outputs very simple and ideally JSON-serializable as it makes the pipeline usage very easy
without requiring users to understand new kind of objects. It\u2019s also relatively common to support many different types
of arguments for ease of use (audio files, can be filenames, URLs or pure bytes)`),Yo.forEach(t),zs=c(e),x=r(e,"H2",{class:!0});var Zs=n(x);F=r(Zs,"A",{id:!0,class:!0,href:!0});var Uo=n(F);Qe=r(Uo,"SPAN",{});var Ho=n(Qe);R(de.$$.fragment,Ho),Ho.forEach(t),Uo.forEach(t),fa=c(Zs),Ve=r(Zs,"SPAN",{});var Go=n(Ve);ma=o(Go,"Adding it to the list of supported tasks"),Go.forEach(t),Zs.forEach(t),Ms=c(e),X=r(e,"P",{});var et=n(X);_a=o(et,"To register your "),We=r(et,"CODE",{});var Fo=n(We);wa=o(Fo,"new-task"),Fo.forEach(t),ka=o(et,` to the list of supported tasks, provide the
following task template:`),et.forEach(t),Ys=c(e),R(ce.$$.fragment,e),Us=c(e),R(J.$$.fragment,e),Hs=c(e),B=r(e,"P",{});var st=n(B);ya=o(st,`Then add your custom task to the list of supported tasks via
`),Ze=r(st,"CODE",{});var Xo=n(Ze);ga=o(Xo,"PIPELINE_REGISTRY.register_pipeline()"),Xo.forEach(t),Ea=o(st,":"),st.forEach(t),Gs=c(e),R(ue.$$.fragment,e),Fs=c(e),N=r(e,"H2",{class:!0});var tt=n(N);K=r(tt,"A",{id:!0,class:!0,href:!0});var Jo=n(K);es=r(Jo,"SPAN",{});var Bo=n(es);R(he.$$.fragment,Bo),Bo.forEach(t),Jo.forEach(t),va=c(tt),ss=r(tt,"SPAN",{});var Ko=n(ss);ba=o(Ko,"Adding tests"),Ko.forEach(t),tt.forEach(t),Xs=c(e),Q=r(e,"P",{});var at=n(Q);ja=o(at,"Create a new file "),ts=r(at,"CODE",{});var Qo=n(ts);qa=o(Qo,"tests/test_pipelines_MY_PIPELINE.py"),Qo.forEach(t),$a=o(at," with example with the other tests."),at.forEach(t),Js=c(e),b=r(e,"P",{});var oe=n(b);Pa=o(oe,"The "),as=r(oe,"CODE",{});var Vo=n(as);Ta=o(Vo,"run_pipeline_test"),Vo.forEach(t),Ca=o(oe,` function will be very generic and run on small random models on every possible
architecture as defined by `),os=r(oe,"CODE",{});var Wo=n(os);Da=o(Wo,"model_mapping"),Wo.forEach(t),Oa=o(oe," and "),ls=r(oe,"CODE",{});var Zo=n(ls);Ia=o(Zo,"tf_model_mapping"),Zo.forEach(t),Aa=o(oe,"."),oe.forEach(t),Bs=c(e),T=r(e,"P",{});var Ee=n(T);Sa=o(Ee,`This is very important to test future compatibility, meaning if someone adds a new model for
`),rs=r(Ee,"CODE",{});var el=n(rs);xa=o(el,"XXXForQuestionAnswering"),el.forEach(t),Na=o(Ee,` then the pipeline test will attempt to run on it. Because the models are random it\u2019s
impossible to check for actual values, that\u2019s why There is a helper `),ns=r(Ee,"CODE",{});var sl=n(ns);La=o(sl,"ANY"),sl.forEach(t),Ra=o(Ee,` that will simply attempt to match the
output of the pipeline TYPE.`),Ee.forEach(t),Ks=c(e),V=r(e,"P",{});var ot=n(V);za=o(ot,"You also "),ps=r(ot,"EM",{});var tl=n(ps);Ma=o(tl,"need"),tl.forEach(t),Ya=o(ot," to implement 2 (ideally 4) tests."),ot.forEach(t),Qs=c(e),j=r(e,"UL",{});var le=n(j);W=r(le,"LI",{});var ys=n(W);is=r(ys,"CODE",{});var al=n(is);Ua=o(al,"test_small_model_pt"),al.forEach(t),Ha=o(ys,` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),ds=r(ys,"CODE",{});var ol=n(ds);Ga=o(ol,"test_small_model_tf"),ol.forEach(t),Fa=o(ys,"."),ys.forEach(t),Xa=c(le),Z=r(le,"LI",{});var gs=n(Z);cs=r(gs,"CODE",{});var ll=n(cs);Ja=o(ll,"test_small_model_tf"),ll.forEach(t),Ba=o(gs,` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),us=r(gs,"CODE",{});var rl=n(us);Ka=o(rl,"test_small_model_pt"),rl.forEach(t),Qa=o(gs,"."),gs.forEach(t),Va=c(le),ee=r(le,"LI",{});var Es=n(ee);hs=r(Es,"CODE",{});var nl=n(hs);Wa=o(nl,"test_large_model_pt"),nl.forEach(t),Za=o(Es," ("),fs=r(Es,"CODE",{});var pl=n(fs);eo=o(pl,"optional"),pl.forEach(t),so=o(Es,`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),Es.forEach(t),to=c(le),se=r(le,"LI",{});var vs=n(se);ms=r(vs,"CODE",{});var il=n(ms);ao=o(il,"test_large_model_tf"),il.forEach(t),oo=o(vs," ("),_s=r(vs,"CODE",{});var dl=n(_s);lo=o(dl,"optional"),dl.forEach(t),ro=o(vs,`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),vs.forEach(t),le.forEach(t),this.h()},h(){_(u,"name","hf:doc:metadata"),_(u,"content",JSON.stringify(yl)),_(g,"id","how-to-add-a-pipeline-to-transformers"),_(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(g,"href","#how-to-add-a-pipeline-to-transformers"),_(f,"class","relative group"),_(F,"id","adding-it-to-the-list-of-supported-tasks"),_(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(F,"href","#adding-it-to-the-list-of-supported-tasks"),_(x,"class","relative group"),_(K,"id","adding-tests"),_(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(K,"href","#adding-tests"),_(N,"class","relative group")},m(e,p){s(document.head,u),i(e,H,p),i(e,f,p),s(f,g),s(g,D),z(w,D,null),s(f,re),s(f,O),s(O,I),i(e,k,p),i(e,y,p),s(y,we),s(y,ve),s(ve,lt),s(y,rt),s(y,be),s(be,nt),s(y,pt),i(e,qs,p),i(e,E,p),s(E,it),s(E,je),s(je,dt),s(E,ct),s(E,qe),s(qe,ut),s(E,ht),s(E,$e),s($e,ft),s(E,mt),i(e,$s,p),i(e,h,p),s(h,_t),s(h,Pe),s(Pe,wt),s(h,kt),s(h,Te),s(Te,yt),s(h,gt),s(h,Ce),s(Ce,Et),s(h,vt),s(h,De),s(De,bt),s(h,jt),s(h,Oe),s(Oe,qt),s(h,$t),i(e,Ps,p),z(ne,e,p),i(e,Ts,p),i(e,ke,p),s(ke,Pt),i(e,Cs,p),i(e,A,p),s(A,Ie),s(Ie,Tt),s(A,Ct),s(A,Ae),s(Ae,Dt),s(A,Ot),i(e,Ds,p),i(e,$,p),s($,Se),s(Se,It),s($,At),s($,xe),s(xe,St),s($,xt),s($,Ne),s(Ne,Nt),s($,Lt),i(e,Os,p),i(e,S,p),s(S,Le),s(Le,Rt),s(S,zt),s(S,Re),s(Re,Mt),s(S,Yt),i(e,Is,p),i(e,P,p),s(P,ze),s(ze,Ut),s(P,Ht),s(P,Me),s(Me,Gt),s(P,Ft),s(P,Ye),s(Ye,Xt),s(P,Jt),i(e,As,p),i(e,m,p),s(m,Bt),s(m,Ue),s(Ue,Kt),s(m,Qt),s(m,He),s(He,Vt),s(m,Wt),s(m,Ge),s(Ge,Zt),s(m,ea),s(m,Fe),s(Fe,sa),s(m,ta),i(e,Ss,p),i(e,G,p),s(G,aa),s(G,Xe),s(Xe,oa),s(G,la),i(e,xs,p),z(pe,e,p),i(e,Ns,p),i(e,v,p),s(v,ra),s(v,Je),s(Je,na),s(v,pa),s(v,Be),s(Be,ia),s(v,da),s(v,Ke),s(Ke,ca),s(v,ua),i(e,Ls,p),z(ie,e,p),i(e,Rs,p),i(e,ye,p),s(ye,ha),i(e,zs,p),i(e,x,p),s(x,F),s(F,Qe),z(de,Qe,null),s(x,fa),s(x,Ve),s(Ve,ma),i(e,Ms,p),i(e,X,p),s(X,_a),s(X,We),s(We,wa),s(X,ka),i(e,Ys,p),z(ce,e,p),i(e,Us,p),z(J,e,p),i(e,Hs,p),i(e,B,p),s(B,ya),s(B,Ze),s(Ze,ga),s(B,Ea),i(e,Gs,p),z(ue,e,p),i(e,Fs,p),i(e,N,p),s(N,K),s(K,es),z(he,es,null),s(N,va),s(N,ss),s(ss,ba),i(e,Xs,p),i(e,Q,p),s(Q,ja),s(Q,ts),s(ts,qa),s(Q,$a),i(e,Js,p),i(e,b,p),s(b,Pa),s(b,as),s(as,Ta),s(b,Ca),s(b,os),s(os,Da),s(b,Oa),s(b,ls),s(ls,Ia),s(b,Aa),i(e,Bs,p),i(e,T,p),s(T,Sa),s(T,rs),s(rs,xa),s(T,Na),s(T,ns),s(ns,La),s(T,Ra),i(e,Ks,p),i(e,V,p),s(V,za),s(V,ps),s(ps,Ma),s(V,Ya),i(e,Qs,p),i(e,j,p),s(j,W),s(W,is),s(is,Ua),s(W,Ha),s(W,ds),s(ds,Ga),s(W,Fa),s(j,Xa),s(j,Z),s(Z,cs),s(cs,Ja),s(Z,Ba),s(Z,us),s(us,Ka),s(Z,Qa),s(j,Va),s(j,ee),s(ee,hs),s(hs,Wa),s(ee,Za),s(ee,fs),s(fs,eo),s(ee,so),s(j,to),s(j,se),s(se,ms),s(ms,ao),s(se,oo),s(se,_s),s(_s,lo),s(se,ro),Vs=!0},p(e,[p]){const fe={};p&2&&(fe.$$scope={dirty:p,ctx:e}),J.$set(fe)},i(e){Vs||(M(w.$$.fragment,e),M(ne.$$.fragment,e),M(pe.$$.fragment,e),M(ie.$$.fragment,e),M(de.$$.fragment,e),M(ce.$$.fragment,e),M(J.$$.fragment,e),M(ue.$$.fragment,e),M(he.$$.fragment,e),Vs=!0)},o(e){Y(w.$$.fragment,e),Y(ne.$$.fragment,e),Y(pe.$$.fragment,e),Y(ie.$$.fragment,e),Y(de.$$.fragment,e),Y(ce.$$.fragment,e),Y(J.$$.fragment,e),Y(ue.$$.fragment,e),Y(he.$$.fragment,e),Vs=!1},d(e){t(u),e&&t(H),e&&t(f),U(w),e&&t(k),e&&t(y),e&&t(qs),e&&t(E),e&&t($s),e&&t(h),e&&t(Ps),U(ne,e),e&&t(Ts),e&&t(ke),e&&t(Cs),e&&t(A),e&&t(Ds),e&&t($),e&&t(Os),e&&t(S),e&&t(Is),e&&t(P),e&&t(As),e&&t(m),e&&t(Ss),e&&t(G),e&&t(xs),U(pe,e),e&&t(Ns),e&&t(v),e&&t(Ls),U(ie,e),e&&t(Rs),e&&t(ye),e&&t(zs),e&&t(x),U(de),e&&t(Ms),e&&t(X),e&&t(Ys),U(ce,e),e&&t(Us),U(J,e),e&&t(Hs),e&&t(B),e&&t(Gs),U(ue,e),e&&t(Fs),e&&t(N),U(he),e&&t(Xs),e&&t(Q),e&&t(Js),e&&t(b),e&&t(Bs),e&&t(T),e&&t(Ks),e&&t(V),e&&t(Qs),e&&t(j)}}}const yl={local:"how-to-add-a-pipeline-to-transformers",sections:[{local:"adding-it-to-the-list-of-supported-tasks",title:"Adding it to the list of supported tasks"},{local:"adding-tests",title:"Adding tests"}],title:"How to add a pipeline to \u{1F917} Transformers?"};function gl(js){return ml(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ql extends cl{constructor(u){super();ul(this,u,gl,kl,hl,{})}}export{ql as default,yl as metadata};
