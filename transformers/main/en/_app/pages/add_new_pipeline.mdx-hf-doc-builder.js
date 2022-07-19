import{S as an,i as on,s as ln,e as l,k as c,w as _,t as a,M as nn,c as i,d as t,m as d,a as n,x as w,h as o,b as h,G as s,g as p,y,L as rn,q as k,o as g,B as E,v as pn}from"../chunks/vendor-hf-doc-builder.js";import{I as Kt}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as R}from"../chunks/CodeBlock-hf-doc-builder.js";function cn(Ml){let N,Vs,M,G,Se,ce,Vt,Ae,Wt,Ws,U,Zt,$e,ea,sa,Zs,C,ta,Re,aa,oa,Ne,la,ia,et,b,na,Me,ra,pa,Fe,ca,da,Le,ha,ua,st,u,fa,ze,ma,_a,Ye,wa,ya,He,ka,ga,Ge,Ea,ba,Ue,va,ja,tt,de,at,Pe,qa,ot,F,Xe,$a,Pa,Je,Ta,Ca,lt,P,Be,xa,Da,Qe,Oa,Ia,Ke,Sa,Aa,it,L,Ve,Ra,Na,We,Ma,Fa,nt,T,Ze,La,za,es,Ya,Ha,ss,Ga,Ua,rt,f,Xa,ts,Ja,Ba,as,Qa,Ka,os,Va,Wa,ls,Za,eo,pt,X,so,is,to,ao,ct,he,dt,v,oo,ns,lo,io,rs,no,ro,ps,po,co,ht,ue,ut,Te,ho,ft,z,J,cs,fe,uo,ds,fo,mt,x,mo,hs,_o,wo,us,yo,ko,_t,me,wt,B,go,fs,Eo,bo,yt,_e,kt,Y,Q,ms,we,vo,_s,jo,gt,K,qo,ws,$o,Po,Et,ye,bt,V,To,ys,Co,xo,vt,ke,jt,W,Do,ks,Oo,Io,qt,ge,$t,D,So,gs,Ao,Ro,Es,No,Mo,Pt,Ee,Tt,m,Fo,bs,Lo,zo,vs,Yo,Ho,js,Go,Uo,qs,Xo,Jo,Ct,be,xt,H,Z,$s,ve,Bo,Ps,Qo,Dt,O,Ko,Ts,Vo,Wo,Cs,Zo,el,Ot,ee,sl,xs,tl,al,It,j,ol,Ds,ll,il,Os,nl,rl,Is,pl,cl,St,I,dl,Ss,hl,ul,As,fl,ml,At,se,_l,Rs,wl,yl,Rt,q,te,Ns,kl,gl,Ms,El,bl,vl,ae,Fs,jl,ql,Ls,$l,Pl,Tl,oe,zs,Cl,xl,Ys,Dl,Ol,Il,le,Hs,Sl,Al,Gs,Rl,Nl,Nt;return ce=new Kt({}),de=new R({props:{code:`from transformers import Pipeline


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
        <span class="hljs-keyword">return</span> best_class`}}),he=new R({props:{code:`pipe = pipeline("my-new-task")
pipe("This is a test")

pipe("This is a test", top_k=2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>pipe = pipeline(<span class="hljs-string">&quot;my-new-task&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>pipe(<span class="hljs-string">&quot;This is a test&quot;</span>)
[{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;1-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.8</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;2-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.1</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;3-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.05</span>}
{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;4-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.025</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;5-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.025</span>}]

<span class="hljs-meta">&gt;&gt;&gt; </span>pipe(<span class="hljs-string">&quot;This is a test&quot;</span>, top_k=<span class="hljs-number">2</span>)
[{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;1-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.8</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;2-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.1</span>}]`}}),ue=new R({props:{code:`def postprocess(self, model_outputs, top_k=5):
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
    <span class="hljs-keyword">return</span> preprocess_kwargs, {}, postprocess_kwargs`}}),fe=new Kt({}),me=new R({props:{code:`from transformers.pipelines import PIPELINE_REGISTRY

PIPELINE_REGISTRY.register_pipeline(
    "new-task",
    pipeline_class=MyPipeline,
    pt_model=AutoModelForSequenceClassification,
)`,highlighted:`<span class="hljs-keyword">from</span> transformers.pipelines <span class="hljs-keyword">import</span> PIPELINE_REGISTRY

PIPELINE_REGISTRY.register_pipeline(
    <span class="hljs-string">&quot;new-task&quot;</span>,
    pipeline_class=MyPipeline,
    pt_model=AutoModelForSequenceClassification,
)`}}),_e=new R({props:{code:`PIPELINE_REGISTRY.register_pipeline(
    "new-task",
    pipeline_class=MyPipeline,
    pt_model=AutoModelForSequenceClassification,
    default={"pt": ("user/awesome_model", "abcdef")},
    type="text",  # current support type: text, audio, image, multimodal
)`,highlighted:`PIPELINE_REGISTRY.register_pipeline(
    <span class="hljs-string">&quot;new-task&quot;</span>,
    pipeline_class=MyPipeline,
    pt_model=AutoModelForSequenceClassification,
    default={<span class="hljs-string">&quot;pt&quot;</span>: (<span class="hljs-string">&quot;user/awesome_model&quot;</span>, <span class="hljs-string">&quot;abcdef&quot;</span>)},
    <span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;text&quot;</span>,  <span class="hljs-comment"># current support type: text, audio, image, multimodal</span>
)`}}),we=new Kt({}),ye=new R({props:{code:`import numpy as np

from transformers import Pipeline


def softmax(outputs):
    maxes = np.max(outputs, axis=-1, keepdims=True)
    shifted_exp = np.exp(outputs - maxes)
    return shifted_exp / shifted_exp.sum(axis=-1, keepdims=True)


class PairClassificationPipeline(Pipeline):
    def _sanitize_parameters(self, **kwargs):
        preprocess_kwargs = {}
        if "second_text" in kwargs:
            preprocess_kwargs["second_text"] = kwargs["second_text"]
        return preprocess_kwargs, {}, {}

    def preprocess(self, text, second_text=None):
        return self.tokenizer(text, text_pair=second_text, return_tensors=self.framework)

    def _forward(self, model_inputs):
        return self.model(**model_inputs)

    def postprocess(self, model_outputs):
        logits = model_outputs.logits[0].numpy()
        probabilities = softmax(logits)

        best_class = np.argmax(probabilities)
        label = self.model.config.id2label[best_class]
        score = probabilities[best_class].item()
        logits = logits.tolist()
        return {"label": label, "score": score, "logits": logits}`,highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Pipeline


<span class="hljs-keyword">def</span> <span class="hljs-title function_">softmax</span>(<span class="hljs-params">outputs</span>):
    maxes = np.<span class="hljs-built_in">max</span>(outputs, axis=-<span class="hljs-number">1</span>, keepdims=<span class="hljs-literal">True</span>)
    shifted_exp = np.exp(outputs - maxes)
    <span class="hljs-keyword">return</span> shifted_exp / shifted_exp.<span class="hljs-built_in">sum</span>(axis=-<span class="hljs-number">1</span>, keepdims=<span class="hljs-literal">True</span>)


<span class="hljs-keyword">class</span> <span class="hljs-title class_">PairClassificationPipeline</span>(<span class="hljs-title class_ inherited__">Pipeline</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">_sanitize_parameters</span>(<span class="hljs-params">self, **kwargs</span>):
        preprocess_kwargs = {}
        <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;second_text&quot;</span> <span class="hljs-keyword">in</span> kwargs:
            preprocess_kwargs[<span class="hljs-string">&quot;second_text&quot;</span>] = kwargs[<span class="hljs-string">&quot;second_text&quot;</span>]
        <span class="hljs-keyword">return</span> preprocess_kwargs, {}, {}

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess</span>(<span class="hljs-params">self, text, second_text=<span class="hljs-literal">None</span></span>):
        <span class="hljs-keyword">return</span> self.tokenizer(text, text_pair=second_text, return_tensors=self.framework)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">_forward</span>(<span class="hljs-params">self, model_inputs</span>):
        <span class="hljs-keyword">return</span> self.model(**model_inputs)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">postprocess</span>(<span class="hljs-params">self, model_outputs</span>):
        logits = model_outputs.logits[<span class="hljs-number">0</span>].numpy()
        probabilities = softmax(logits)

        best_class = np.argmax(probabilities)
        label = self.model.config.id2label[best_class]
        score = probabilities[best_class].item()
        logits = logits.tolist()
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;label&quot;</span>: label, <span class="hljs-string">&quot;score&quot;</span>: score, <span class="hljs-string">&quot;logits&quot;</span>: logits}`}}),ke=new R({props:{code:`from pair_classification import PairClassificationPipeline
from transformers.pipelines import PIPELINE_REGISTRY
from transformers import AutoModelForSequenceClassification, TFAutoModelForSequenceClassification

PIPELINE_REGISTRY.register_pipeline(
    "pair-classification",
    pipeline_class=PairClassificationPipeline,
    pt_model=AutoModelForSequenceClassification,
    tf_model=TFAutoModelForSequenceClassification,
)`,highlighted:`<span class="hljs-keyword">from</span> pair_classification <span class="hljs-keyword">import</span> PairClassificationPipeline
<span class="hljs-keyword">from</span> transformers.pipelines <span class="hljs-keyword">import</span> PIPELINE_REGISTRY
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification, TFAutoModelForSequenceClassification

PIPELINE_REGISTRY.register_pipeline(
    <span class="hljs-string">&quot;pair-classification&quot;</span>,
    pipeline_class=PairClassificationPipeline,
    pt_model=AutoModelForSequenceClassification,
    tf_model=TFAutoModelForSequenceClassification,
)`}}),ge=new R({props:{code:`from transformers import pipeline

classifier = pipeline("pair-classification", model="sgugger/finetuned-bert-mrpc")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

classifier = pipeline(<span class="hljs-string">&quot;pair-classification&quot;</span>, model=<span class="hljs-string">&quot;sgugger/finetuned-bert-mrpc&quot;</span>)`}}),Ee=new R({props:{code:`from huggingface_hub import Repository

repo = Repository("test-dynamic-pipeline", clone_from="{your_username}/test-dynamic-pipeline")
classifier.save_pretrained("test-dynamic-pipeline")
repo.push_to_hub()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository

repo = Repository(<span class="hljs-string">&quot;test-dynamic-pipeline&quot;</span>, clone_from=<span class="hljs-string">&quot;{your_username}/test-dynamic-pipeline&quot;</span>)
classifier.save_pretrained(<span class="hljs-string">&quot;test-dynamic-pipeline&quot;</span>)
repo.push_to_hub()`}}),be=new R({props:{code:`from transformers import pipeline

classifier = pipeline(model="{your_username}/test-dynamic-pipeline", trust_remote_code=True)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

classifier = pipeline(model=<span class="hljs-string">&quot;{your_username}/test-dynamic-pipeline&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>)`}}),ve=new Kt({}),{c(){N=l("meta"),Vs=c(),M=l("h1"),G=l("a"),Se=l("span"),_(ce.$$.fragment),Vt=c(),Ae=l("span"),Wt=a("How to create a custom pipeline?"),Ws=c(),U=l("p"),Zt=a("In this guide, we will see how to create a custom pipeline and share it on the "),$e=l("a"),ea=a("Hub"),sa=a(` or add it to the
Transformers library.`),Zs=c(),C=l("p"),ta=a(`First and foremost, you need to decide the raw entries the pipeline will be able to take. It can be strings, raw bytes,
dictionaries or whatever seems to be the most likely desired input. Try to keep these inputs as pure Python as possible
as it makes compatibility easier (even through other languages via JSON). Those will be the `),Re=l("code"),aa=a("inputs"),oa=a(` of the
pipeline (`),Ne=l("code"),la=a("preprocess"),ia=a(")."),et=c(),b=l("p"),na=a("Then define the "),Me=l("code"),ra=a("outputs"),pa=a(". Same policy as the "),Fe=l("code"),ca=a("inputs"),da=a(`. The simpler, the better. Those will be the outputs of
`),Le=l("code"),ha=a("postprocess"),ua=a(" method."),st=c(),u=l("p"),fa=a("Start by inheriting the base class "),ze=l("code"),ma=a("Pipeline"),_a=a(". with the 4 methods needed to implement "),Ye=l("code"),wa=a("preprocess"),ya=a(`,
`),He=l("code"),ka=a("_forward"),ga=a(", "),Ge=l("code"),Ea=a("postprocess"),ba=a(" and "),Ue=l("code"),va=a("_sanitize_parameters"),ja=a("."),tt=c(),_(de.$$.fragment),at=c(),Pe=l("p"),qa=a(`The structure of this breakdown is to support relatively seamless support for CPU/GPU, while supporting doing
pre/postprocessing on the CPU on different threads`),ot=c(),F=l("p"),Xe=l("code"),$a=a("preprocess"),Pa=a(` will take the originally defined inputs, and turn them into something feedable to the model. It might
contain more information and is usually a `),Je=l("code"),Ta=a("Dict"),Ca=a("."),lt=c(),P=l("p"),Be=l("code"),xa=a("_forward"),Da=a(" is the implementation detail and is not meant to be called directly. "),Qe=l("code"),Oa=a("forward"),Ia=a(` is the preferred
called method as it contains safeguards to make sure everything is working on the expected device. If anything is
linked to a real model it belongs in the `),Ke=l("code"),Sa=a("_forward"),Aa=a(" method, anything else is in the preprocess/postprocess."),it=c(),L=l("p"),Ve=l("code"),Ra=a("postprocess"),Na=a(" methods will take the output of "),We=l("code"),Ma=a("_forward"),Fa=a(` and turn it into the final output that were decided
earlier.`),nt=c(),T=l("p"),Ze=l("code"),La=a("_sanitize_parameters"),za=a(` exists to allow users to pass any parameters whenever they wish, be it at initialization
time `),es=l("code"),Ya=a("pipeline(...., maybe_arg=4)"),Ha=a(" or at call time "),ss=l("code"),Ga=a("pipe = pipeline(...); output = pipe(...., maybe_arg=4)"),Ua=a("."),rt=c(),f=l("p"),Xa=a("The returns of "),ts=l("code"),Ja=a("_sanitize_parameters"),Ba=a(" are the 3 dicts of kwargs that will be passed directly to "),as=l("code"),Qa=a("preprocess"),Ka=a(`,
`),os=l("code"),Va=a("_forward"),Wa=a(" and "),ls=l("code"),Za=a("postprocess"),eo=a(`. Don\u2019t fill anything if the caller didn\u2019t call with any extra parameter. That
allows to keep the default arguments in the function definition which is always more \u201Cnatural\u201D.`),pt=c(),X=l("p"),so=a("A classic example would be a "),is=l("code"),to=a("top_k"),ao=a(" argument in the post processing in classification tasks."),ct=c(),_(he.$$.fragment),dt=c(),v=l("p"),oo=a("In order to achieve that, we\u2019ll update our "),ns=l("code"),lo=a("postprocess"),io=a(" method with a default parameter to "),rs=l("code"),no=a("5"),ro=a(`. and edit
`),ps=l("code"),po=a("_sanitize_parameters"),co=a(" to allow this new parameter."),ht=c(),_(ue.$$.fragment),ut=c(),Te=l("p"),ho=a(`Try to keep the inputs/outputs very simple and ideally JSON-serializable as it makes the pipeline usage very easy
without requiring users to understand new kind of objects. It\u2019s also relatively common to support many different types
of arguments for ease of use (audio files, can be filenames, URLs or pure bytes)`),ft=c(),z=l("h2"),J=l("a"),cs=l("span"),_(fe.$$.fragment),uo=c(),ds=l("span"),fo=a("Adding it to the list of supported tasks"),mt=c(),x=l("p"),mo=a("To register your "),hs=l("code"),_o=a("new-task"),wo=a(" to the list of supported tasks, you have to add it to the "),us=l("code"),yo=a("PIPELINE_REGISTRY"),ko=a(":"),_t=c(),_(me.$$.fragment),wt=c(),B=l("p"),go=a("You can specify a default model if you want, in which case it should come with a specific revision (which can be the name of a branch or a commit hash, here we took "),fs=l("code"),Eo=a('"abcdef"'),bo=a(") as well was the type:"),yt=c(),_(_e.$$.fragment),kt=c(),Y=l("h2"),Q=l("a"),ms=l("span"),_(we.$$.fragment),vo=c(),_s=l("span"),jo=a("Share your pipeline on the Hub"),gt=c(),K=l("p"),qo=a("To share your custom pipeline on the Hub, you just have to save the custom code of your "),ws=l("code"),$o=a("Pipeline"),Po=a(` subclass in a
python file. For instance, let\u2019s say we want to use a custom pipeline for sentence pair classification like this:`),Et=c(),_(ye.$$.fragment),bt=c(),V=l("p"),To=a(`The implementation is framework agnostic, and will work for PyTorch and TensorFlow models. If we have saved this in
a file named `),ys=l("code"),Co=a("pair_classification.py"),xo=a(", we can then import it and register it like this:"),vt=c(),_(ke.$$.fragment),jt=c(),W=l("p"),Do=a("Once this is done, we can use it with a pretrained model. For instance "),ks=l("code"),Oo=a("sgugger/finetuned-bert-mrpc"),Io=a(` has been
fine-tuned on the MRPC dataset, which classifies pairs of sentences as paraphrases or not.`),qt=c(),_(ge.$$.fragment),$t=c(),D=l("p"),So=a("Then we can share it on the Hub by using the "),gs=l("code"),Ao=a("save_pretrained"),Ro=a(" method in a "),Es=l("code"),No=a("Repository"),Mo=a(":"),Pt=c(),_(Ee.$$.fragment),Tt=c(),m=l("p"),Fo=a("This will copy the file where you defined "),bs=l("code"),Lo=a("PairClassificationPipeline"),zo=a(" inside the folder "),vs=l("code"),Yo=a('"test-dynamic-pipeline"'),Ho=a(`,
along with saving the model and tokenizer of the pipeline, before pushing everything in the repository
`),js=l("code"),Go=a("{your_username}/test-dynamic-pipeline"),Uo=a(`. After that anyone can use it as long as they provide the option
`),qs=l("code"),Xo=a("trust_remote_code=True"),Jo=a(":"),Ct=c(),_(be.$$.fragment),xt=c(),H=l("h2"),Z=l("a"),$s=l("span"),_(ve.$$.fragment),Bo=c(),Ps=l("span"),Qo=a("Add the pipeline to Transformers"),Dt=c(),O=l("p"),Ko=a("If you want to contribute your pipeline to Transformers, you will need to add a new module in the "),Ts=l("code"),Vo=a("pipelines"),Wo=a(` submodule
with the code of your pipeline, then add it in the list of tasks defined in `),Cs=l("code"),Zo=a("pipelines/__init__.py"),el=a("."),Ot=c(),ee=l("p"),sl=a("Then you will need to add tests. Create a new file "),xs=l("code"),tl=a("tests/test_pipelines_MY_PIPELINE.py"),al=a(" with example with the other tests."),It=c(),j=l("p"),ol=a("The "),Ds=l("code"),ll=a("run_pipeline_test"),il=a(` function will be very generic and run on small random models on every possible
architecture as defined by `),Os=l("code"),nl=a("model_mapping"),rl=a(" and "),Is=l("code"),pl=a("tf_model_mapping"),cl=a("."),St=c(),I=l("p"),dl=a(`This is very important to test future compatibility, meaning if someone adds a new model for
`),Ss=l("code"),hl=a("XXXForQuestionAnswering"),ul=a(` then the pipeline test will attempt to run on it. Because the models are random it\u2019s
impossible to check for actual values, that\u2019s why There is a helper `),As=l("code"),fl=a("ANY"),ml=a(` that will simply attempt to match the
output of the pipeline TYPE.`),At=c(),se=l("p"),_l=a("You also "),Rs=l("em"),wl=a("need"),yl=a(" to implement 2 (ideally 4) tests."),Rt=c(),q=l("ul"),te=l("li"),Ns=l("code"),kl=a("test_small_model_pt"),gl=a(` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),Ms=l("code"),El=a("test_small_model_tf"),bl=a("."),vl=c(),ae=l("li"),Fs=l("code"),jl=a("test_small_model_tf"),ql=a(` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),Ls=l("code"),$l=a("test_small_model_pt"),Pl=a("."),Tl=c(),oe=l("li"),zs=l("code"),Cl=a("test_large_model_pt"),xl=a(" ("),Ys=l("code"),Dl=a("optional"),Ol=a(`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),Il=c(),le=l("li"),Hs=l("code"),Sl=a("test_large_model_tf"),Al=a(" ("),Gs=l("code"),Rl=a("optional"),Nl=a(`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),this.h()},l(e){const r=nn('[data-svelte="svelte-1phssyn"]',document.head);N=i(r,"META",{name:!0,content:!0}),r.forEach(t),Vs=d(e),M=i(e,"H1",{class:!0});var Mt=n(M);G=i(Mt,"A",{id:!0,class:!0,href:!0});var Fl=n(G);Se=i(Fl,"SPAN",{});var Ll=n(Se);w(ce.$$.fragment,Ll),Ll.forEach(t),Fl.forEach(t),Vt=d(Mt),Ae=i(Mt,"SPAN",{});var zl=n(Ae);Wt=o(zl,"How to create a custom pipeline?"),zl.forEach(t),Mt.forEach(t),Ws=d(e),U=i(e,"P",{});var Ft=n(U);Zt=o(Ft,"In this guide, we will see how to create a custom pipeline and share it on the "),$e=i(Ft,"A",{href:!0});var Yl=n($e);ea=o(Yl,"Hub"),Yl.forEach(t),sa=o(Ft,` or add it to the
Transformers library.`),Ft.forEach(t),Zs=d(e),C=i(e,"P",{});var Ce=n(C);ta=o(Ce,`First and foremost, you need to decide the raw entries the pipeline will be able to take. It can be strings, raw bytes,
dictionaries or whatever seems to be the most likely desired input. Try to keep these inputs as pure Python as possible
as it makes compatibility easier (even through other languages via JSON). Those will be the `),Re=i(Ce,"CODE",{});var Hl=n(Re);aa=o(Hl,"inputs"),Hl.forEach(t),oa=o(Ce,` of the
pipeline (`),Ne=i(Ce,"CODE",{});var Gl=n(Ne);la=o(Gl,"preprocess"),Gl.forEach(t),ia=o(Ce,")."),Ce.forEach(t),et=d(e),b=i(e,"P",{});var ie=n(b);na=o(ie,"Then define the "),Me=i(ie,"CODE",{});var Ul=n(Me);ra=o(Ul,"outputs"),Ul.forEach(t),pa=o(ie,". Same policy as the "),Fe=i(ie,"CODE",{});var Xl=n(Fe);ca=o(Xl,"inputs"),Xl.forEach(t),da=o(ie,`. The simpler, the better. Those will be the outputs of
`),Le=i(ie,"CODE",{});var Jl=n(Le);ha=o(Jl,"postprocess"),Jl.forEach(t),ua=o(ie," method."),ie.forEach(t),st=d(e),u=i(e,"P",{});var $=n(u);fa=o($,"Start by inheriting the base class "),ze=i($,"CODE",{});var Bl=n(ze);ma=o(Bl,"Pipeline"),Bl.forEach(t),_a=o($,". with the 4 methods needed to implement "),Ye=i($,"CODE",{});var Ql=n(Ye);wa=o(Ql,"preprocess"),Ql.forEach(t),ya=o($,`,
`),He=i($,"CODE",{});var Kl=n(He);ka=o(Kl,"_forward"),Kl.forEach(t),ga=o($,", "),Ge=i($,"CODE",{});var Vl=n(Ge);Ea=o(Vl,"postprocess"),Vl.forEach(t),ba=o($," and "),Ue=i($,"CODE",{});var Wl=n(Ue);va=o(Wl,"_sanitize_parameters"),Wl.forEach(t),ja=o($,"."),$.forEach(t),tt=d(e),w(de.$$.fragment,e),at=d(e),Pe=i(e,"P",{});var Zl=n(Pe);qa=o(Zl,`The structure of this breakdown is to support relatively seamless support for CPU/GPU, while supporting doing
pre/postprocessing on the CPU on different threads`),Zl.forEach(t),ot=d(e),F=i(e,"P",{});var Us=n(F);Xe=i(Us,"CODE",{});var ei=n(Xe);$a=o(ei,"preprocess"),ei.forEach(t),Pa=o(Us,` will take the originally defined inputs, and turn them into something feedable to the model. It might
contain more information and is usually a `),Je=i(Us,"CODE",{});var si=n(Je);Ta=o(si,"Dict"),si.forEach(t),Ca=o(Us,"."),Us.forEach(t),lt=d(e),P=i(e,"P",{});var je=n(P);Be=i(je,"CODE",{});var ti=n(Be);xa=o(ti,"_forward"),ti.forEach(t),Da=o(je," is the implementation detail and is not meant to be called directly. "),Qe=i(je,"CODE",{});var ai=n(Qe);Oa=o(ai,"forward"),ai.forEach(t),Ia=o(je,` is the preferred
called method as it contains safeguards to make sure everything is working on the expected device. If anything is
linked to a real model it belongs in the `),Ke=i(je,"CODE",{});var oi=n(Ke);Sa=o(oi,"_forward"),oi.forEach(t),Aa=o(je," method, anything else is in the preprocess/postprocess."),je.forEach(t),it=d(e),L=i(e,"P",{});var Xs=n(L);Ve=i(Xs,"CODE",{});var li=n(Ve);Ra=o(li,"postprocess"),li.forEach(t),Na=o(Xs," methods will take the output of "),We=i(Xs,"CODE",{});var ii=n(We);Ma=o(ii,"_forward"),ii.forEach(t),Fa=o(Xs,` and turn it into the final output that were decided
earlier.`),Xs.forEach(t),nt=d(e),T=i(e,"P",{});var qe=n(T);Ze=i(qe,"CODE",{});var ni=n(Ze);La=o(ni,"_sanitize_parameters"),ni.forEach(t),za=o(qe,` exists to allow users to pass any parameters whenever they wish, be it at initialization
time `),es=i(qe,"CODE",{});var ri=n(es);Ya=o(ri,"pipeline(...., maybe_arg=4)"),ri.forEach(t),Ha=o(qe," or at call time "),ss=i(qe,"CODE",{});var pi=n(ss);Ga=o(pi,"pipe = pipeline(...); output = pipe(...., maybe_arg=4)"),pi.forEach(t),Ua=o(qe,"."),qe.forEach(t),rt=d(e),f=i(e,"P",{});var S=n(f);Xa=o(S,"The returns of "),ts=i(S,"CODE",{});var ci=n(ts);Ja=o(ci,"_sanitize_parameters"),ci.forEach(t),Ba=o(S," are the 3 dicts of kwargs that will be passed directly to "),as=i(S,"CODE",{});var di=n(as);Qa=o(di,"preprocess"),di.forEach(t),Ka=o(S,`,
`),os=i(S,"CODE",{});var hi=n(os);Va=o(hi,"_forward"),hi.forEach(t),Wa=o(S," and "),ls=i(S,"CODE",{});var ui=n(ls);Za=o(ui,"postprocess"),ui.forEach(t),eo=o(S,`. Don\u2019t fill anything if the caller didn\u2019t call with any extra parameter. That
allows to keep the default arguments in the function definition which is always more \u201Cnatural\u201D.`),S.forEach(t),pt=d(e),X=i(e,"P",{});var Lt=n(X);so=o(Lt,"A classic example would be a "),is=i(Lt,"CODE",{});var fi=n(is);to=o(fi,"top_k"),fi.forEach(t),ao=o(Lt," argument in the post processing in classification tasks."),Lt.forEach(t),ct=d(e),w(he.$$.fragment,e),dt=d(e),v=i(e,"P",{});var ne=n(v);oo=o(ne,"In order to achieve that, we\u2019ll update our "),ns=i(ne,"CODE",{});var mi=n(ns);lo=o(mi,"postprocess"),mi.forEach(t),io=o(ne," method with a default parameter to "),rs=i(ne,"CODE",{});var _i=n(rs);no=o(_i,"5"),_i.forEach(t),ro=o(ne,`. and edit
`),ps=i(ne,"CODE",{});var wi=n(ps);po=o(wi,"_sanitize_parameters"),wi.forEach(t),co=o(ne," to allow this new parameter."),ne.forEach(t),ht=d(e),w(ue.$$.fragment,e),ut=d(e),Te=i(e,"P",{});var yi=n(Te);ho=o(yi,`Try to keep the inputs/outputs very simple and ideally JSON-serializable as it makes the pipeline usage very easy
without requiring users to understand new kind of objects. It\u2019s also relatively common to support many different types
of arguments for ease of use (audio files, can be filenames, URLs or pure bytes)`),yi.forEach(t),ft=d(e),z=i(e,"H2",{class:!0});var zt=n(z);J=i(zt,"A",{id:!0,class:!0,href:!0});var ki=n(J);cs=i(ki,"SPAN",{});var gi=n(cs);w(fe.$$.fragment,gi),gi.forEach(t),ki.forEach(t),uo=d(zt),ds=i(zt,"SPAN",{});var Ei=n(ds);fo=o(Ei,"Adding it to the list of supported tasks"),Ei.forEach(t),zt.forEach(t),mt=d(e),x=i(e,"P",{});var xe=n(x);mo=o(xe,"To register your "),hs=i(xe,"CODE",{});var bi=n(hs);_o=o(bi,"new-task"),bi.forEach(t),wo=o(xe," to the list of supported tasks, you have to add it to the "),us=i(xe,"CODE",{});var vi=n(us);yo=o(vi,"PIPELINE_REGISTRY"),vi.forEach(t),ko=o(xe,":"),xe.forEach(t),_t=d(e),w(me.$$.fragment,e),wt=d(e),B=i(e,"P",{});var Yt=n(B);go=o(Yt,"You can specify a default model if you want, in which case it should come with a specific revision (which can be the name of a branch or a commit hash, here we took "),fs=i(Yt,"CODE",{});var ji=n(fs);Eo=o(ji,'"abcdef"'),ji.forEach(t),bo=o(Yt,") as well was the type:"),Yt.forEach(t),yt=d(e),w(_e.$$.fragment,e),kt=d(e),Y=i(e,"H2",{class:!0});var Ht=n(Y);Q=i(Ht,"A",{id:!0,class:!0,href:!0});var qi=n(Q);ms=i(qi,"SPAN",{});var $i=n(ms);w(we.$$.fragment,$i),$i.forEach(t),qi.forEach(t),vo=d(Ht),_s=i(Ht,"SPAN",{});var Pi=n(_s);jo=o(Pi,"Share your pipeline on the Hub"),Pi.forEach(t),Ht.forEach(t),gt=d(e),K=i(e,"P",{});var Gt=n(K);qo=o(Gt,"To share your custom pipeline on the Hub, you just have to save the custom code of your "),ws=i(Gt,"CODE",{});var Ti=n(ws);$o=o(Ti,"Pipeline"),Ti.forEach(t),Po=o(Gt,` subclass in a
python file. For instance, let\u2019s say we want to use a custom pipeline for sentence pair classification like this:`),Gt.forEach(t),Et=d(e),w(ye.$$.fragment,e),bt=d(e),V=i(e,"P",{});var Ut=n(V);To=o(Ut,`The implementation is framework agnostic, and will work for PyTorch and TensorFlow models. If we have saved this in
a file named `),ys=i(Ut,"CODE",{});var Ci=n(ys);Co=o(Ci,"pair_classification.py"),Ci.forEach(t),xo=o(Ut,", we can then import it and register it like this:"),Ut.forEach(t),vt=d(e),w(ke.$$.fragment,e),jt=d(e),W=i(e,"P",{});var Xt=n(W);Do=o(Xt,"Once this is done, we can use it with a pretrained model. For instance "),ks=i(Xt,"CODE",{});var xi=n(ks);Oo=o(xi,"sgugger/finetuned-bert-mrpc"),xi.forEach(t),Io=o(Xt,` has been
fine-tuned on the MRPC dataset, which classifies pairs of sentences as paraphrases or not.`),Xt.forEach(t),qt=d(e),w(ge.$$.fragment,e),$t=d(e),D=i(e,"P",{});var De=n(D);So=o(De,"Then we can share it on the Hub by using the "),gs=i(De,"CODE",{});var Di=n(gs);Ao=o(Di,"save_pretrained"),Di.forEach(t),Ro=o(De," method in a "),Es=i(De,"CODE",{});var Oi=n(Es);No=o(Oi,"Repository"),Oi.forEach(t),Mo=o(De,":"),De.forEach(t),Pt=d(e),w(Ee.$$.fragment,e),Tt=d(e),m=i(e,"P",{});var A=n(m);Fo=o(A,"This will copy the file where you defined "),bs=i(A,"CODE",{});var Ii=n(bs);Lo=o(Ii,"PairClassificationPipeline"),Ii.forEach(t),zo=o(A," inside the folder "),vs=i(A,"CODE",{});var Si=n(vs);Yo=o(Si,'"test-dynamic-pipeline"'),Si.forEach(t),Ho=o(A,`,
along with saving the model and tokenizer of the pipeline, before pushing everything in the repository
`),js=i(A,"CODE",{});var Ai=n(js);Go=o(Ai,"{your_username}/test-dynamic-pipeline"),Ai.forEach(t),Uo=o(A,`. After that anyone can use it as long as they provide the option
`),qs=i(A,"CODE",{});var Ri=n(qs);Xo=o(Ri,"trust_remote_code=True"),Ri.forEach(t),Jo=o(A,":"),A.forEach(t),Ct=d(e),w(be.$$.fragment,e),xt=d(e),H=i(e,"H2",{class:!0});var Jt=n(H);Z=i(Jt,"A",{id:!0,class:!0,href:!0});var Ni=n(Z);$s=i(Ni,"SPAN",{});var Mi=n($s);w(ve.$$.fragment,Mi),Mi.forEach(t),Ni.forEach(t),Bo=d(Jt),Ps=i(Jt,"SPAN",{});var Fi=n(Ps);Qo=o(Fi,"Add the pipeline to Transformers"),Fi.forEach(t),Jt.forEach(t),Dt=d(e),O=i(e,"P",{});var Oe=n(O);Ko=o(Oe,"If you want to contribute your pipeline to Transformers, you will need to add a new module in the "),Ts=i(Oe,"CODE",{});var Li=n(Ts);Vo=o(Li,"pipelines"),Li.forEach(t),Wo=o(Oe,` submodule
with the code of your pipeline, then add it in the list of tasks defined in `),Cs=i(Oe,"CODE",{});var zi=n(Cs);Zo=o(zi,"pipelines/__init__.py"),zi.forEach(t),el=o(Oe,"."),Oe.forEach(t),Ot=d(e),ee=i(e,"P",{});var Bt=n(ee);sl=o(Bt,"Then you will need to add tests. Create a new file "),xs=i(Bt,"CODE",{});var Yi=n(xs);tl=o(Yi,"tests/test_pipelines_MY_PIPELINE.py"),Yi.forEach(t),al=o(Bt," with example with the other tests."),Bt.forEach(t),It=d(e),j=i(e,"P",{});var re=n(j);ol=o(re,"The "),Ds=i(re,"CODE",{});var Hi=n(Ds);ll=o(Hi,"run_pipeline_test"),Hi.forEach(t),il=o(re,` function will be very generic and run on small random models on every possible
architecture as defined by `),Os=i(re,"CODE",{});var Gi=n(Os);nl=o(Gi,"model_mapping"),Gi.forEach(t),rl=o(re," and "),Is=i(re,"CODE",{});var Ui=n(Is);pl=o(Ui,"tf_model_mapping"),Ui.forEach(t),cl=o(re,"."),re.forEach(t),St=d(e),I=i(e,"P",{});var Ie=n(I);dl=o(Ie,`This is very important to test future compatibility, meaning if someone adds a new model for
`),Ss=i(Ie,"CODE",{});var Xi=n(Ss);hl=o(Xi,"XXXForQuestionAnswering"),Xi.forEach(t),ul=o(Ie,` then the pipeline test will attempt to run on it. Because the models are random it\u2019s
impossible to check for actual values, that\u2019s why There is a helper `),As=i(Ie,"CODE",{});var Ji=n(As);fl=o(Ji,"ANY"),Ji.forEach(t),ml=o(Ie,` that will simply attempt to match the
output of the pipeline TYPE.`),Ie.forEach(t),At=d(e),se=i(e,"P",{});var Qt=n(se);_l=o(Qt,"You also "),Rs=i(Qt,"EM",{});var Bi=n(Rs);wl=o(Bi,"need"),Bi.forEach(t),yl=o(Qt," to implement 2 (ideally 4) tests."),Qt.forEach(t),Rt=d(e),q=i(e,"UL",{});var pe=n(q);te=i(pe,"LI",{});var Js=n(te);Ns=i(Js,"CODE",{});var Qi=n(Ns);kl=o(Qi,"test_small_model_pt"),Qi.forEach(t),gl=o(Js,` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),Ms=i(Js,"CODE",{});var Ki=n(Ms);El=o(Ki,"test_small_model_tf"),Ki.forEach(t),bl=o(Js,"."),Js.forEach(t),vl=d(pe),ae=i(pe,"LI",{});var Bs=n(ae);Fs=i(Bs,"CODE",{});var Vi=n(Fs);jl=o(Vi,"test_small_model_tf"),Vi.forEach(t),ql=o(Bs,` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),Ls=i(Bs,"CODE",{});var Wi=n(Ls);$l=o(Wi,"test_small_model_pt"),Wi.forEach(t),Pl=o(Bs,"."),Bs.forEach(t),Tl=d(pe),oe=i(pe,"LI",{});var Qs=n(oe);zs=i(Qs,"CODE",{});var Zi=n(zs);Cl=o(Zi,"test_large_model_pt"),Zi.forEach(t),xl=o(Qs," ("),Ys=i(Qs,"CODE",{});var en=n(Ys);Dl=o(en,"optional"),en.forEach(t),Ol=o(Qs,`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),Qs.forEach(t),Il=d(pe),le=i(pe,"LI",{});var Ks=n(le);Hs=i(Ks,"CODE",{});var sn=n(Hs);Sl=o(sn,"test_large_model_tf"),sn.forEach(t),Al=o(Ks," ("),Gs=i(Ks,"CODE",{});var tn=n(Gs);Rl=o(tn,"optional"),tn.forEach(t),Nl=o(Ks,`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),Ks.forEach(t),pe.forEach(t),this.h()},h(){h(N,"name","hf:doc:metadata"),h(N,"content",JSON.stringify(dn)),h(G,"id","how-to-create-a-custom-pipeline"),h(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(G,"href","#how-to-create-a-custom-pipeline"),h(M,"class","relative group"),h($e,"href","hf.co/models"),h(J,"id","adding-it-to-the-list-of-supported-tasks"),h(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(J,"href","#adding-it-to-the-list-of-supported-tasks"),h(z,"class","relative group"),h(Q,"id","share-your-pipeline-on-the-hub"),h(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Q,"href","#share-your-pipeline-on-the-hub"),h(Y,"class","relative group"),h(Z,"id","add-the-pipeline-to-transformers"),h(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Z,"href","#add-the-pipeline-to-transformers"),h(H,"class","relative group")},m(e,r){s(document.head,N),p(e,Vs,r),p(e,M,r),s(M,G),s(G,Se),y(ce,Se,null),s(M,Vt),s(M,Ae),s(Ae,Wt),p(e,Ws,r),p(e,U,r),s(U,Zt),s(U,$e),s($e,ea),s(U,sa),p(e,Zs,r),p(e,C,r),s(C,ta),s(C,Re),s(Re,aa),s(C,oa),s(C,Ne),s(Ne,la),s(C,ia),p(e,et,r),p(e,b,r),s(b,na),s(b,Me),s(Me,ra),s(b,pa),s(b,Fe),s(Fe,ca),s(b,da),s(b,Le),s(Le,ha),s(b,ua),p(e,st,r),p(e,u,r),s(u,fa),s(u,ze),s(ze,ma),s(u,_a),s(u,Ye),s(Ye,wa),s(u,ya),s(u,He),s(He,ka),s(u,ga),s(u,Ge),s(Ge,Ea),s(u,ba),s(u,Ue),s(Ue,va),s(u,ja),p(e,tt,r),y(de,e,r),p(e,at,r),p(e,Pe,r),s(Pe,qa),p(e,ot,r),p(e,F,r),s(F,Xe),s(Xe,$a),s(F,Pa),s(F,Je),s(Je,Ta),s(F,Ca),p(e,lt,r),p(e,P,r),s(P,Be),s(Be,xa),s(P,Da),s(P,Qe),s(Qe,Oa),s(P,Ia),s(P,Ke),s(Ke,Sa),s(P,Aa),p(e,it,r),p(e,L,r),s(L,Ve),s(Ve,Ra),s(L,Na),s(L,We),s(We,Ma),s(L,Fa),p(e,nt,r),p(e,T,r),s(T,Ze),s(Ze,La),s(T,za),s(T,es),s(es,Ya),s(T,Ha),s(T,ss),s(ss,Ga),s(T,Ua),p(e,rt,r),p(e,f,r),s(f,Xa),s(f,ts),s(ts,Ja),s(f,Ba),s(f,as),s(as,Qa),s(f,Ka),s(f,os),s(os,Va),s(f,Wa),s(f,ls),s(ls,Za),s(f,eo),p(e,pt,r),p(e,X,r),s(X,so),s(X,is),s(is,to),s(X,ao),p(e,ct,r),y(he,e,r),p(e,dt,r),p(e,v,r),s(v,oo),s(v,ns),s(ns,lo),s(v,io),s(v,rs),s(rs,no),s(v,ro),s(v,ps),s(ps,po),s(v,co),p(e,ht,r),y(ue,e,r),p(e,ut,r),p(e,Te,r),s(Te,ho),p(e,ft,r),p(e,z,r),s(z,J),s(J,cs),y(fe,cs,null),s(z,uo),s(z,ds),s(ds,fo),p(e,mt,r),p(e,x,r),s(x,mo),s(x,hs),s(hs,_o),s(x,wo),s(x,us),s(us,yo),s(x,ko),p(e,_t,r),y(me,e,r),p(e,wt,r),p(e,B,r),s(B,go),s(B,fs),s(fs,Eo),s(B,bo),p(e,yt,r),y(_e,e,r),p(e,kt,r),p(e,Y,r),s(Y,Q),s(Q,ms),y(we,ms,null),s(Y,vo),s(Y,_s),s(_s,jo),p(e,gt,r),p(e,K,r),s(K,qo),s(K,ws),s(ws,$o),s(K,Po),p(e,Et,r),y(ye,e,r),p(e,bt,r),p(e,V,r),s(V,To),s(V,ys),s(ys,Co),s(V,xo),p(e,vt,r),y(ke,e,r),p(e,jt,r),p(e,W,r),s(W,Do),s(W,ks),s(ks,Oo),s(W,Io),p(e,qt,r),y(ge,e,r),p(e,$t,r),p(e,D,r),s(D,So),s(D,gs),s(gs,Ao),s(D,Ro),s(D,Es),s(Es,No),s(D,Mo),p(e,Pt,r),y(Ee,e,r),p(e,Tt,r),p(e,m,r),s(m,Fo),s(m,bs),s(bs,Lo),s(m,zo),s(m,vs),s(vs,Yo),s(m,Ho),s(m,js),s(js,Go),s(m,Uo),s(m,qs),s(qs,Xo),s(m,Jo),p(e,Ct,r),y(be,e,r),p(e,xt,r),p(e,H,r),s(H,Z),s(Z,$s),y(ve,$s,null),s(H,Bo),s(H,Ps),s(Ps,Qo),p(e,Dt,r),p(e,O,r),s(O,Ko),s(O,Ts),s(Ts,Vo),s(O,Wo),s(O,Cs),s(Cs,Zo),s(O,el),p(e,Ot,r),p(e,ee,r),s(ee,sl),s(ee,xs),s(xs,tl),s(ee,al),p(e,It,r),p(e,j,r),s(j,ol),s(j,Ds),s(Ds,ll),s(j,il),s(j,Os),s(Os,nl),s(j,rl),s(j,Is),s(Is,pl),s(j,cl),p(e,St,r),p(e,I,r),s(I,dl),s(I,Ss),s(Ss,hl),s(I,ul),s(I,As),s(As,fl),s(I,ml),p(e,At,r),p(e,se,r),s(se,_l),s(se,Rs),s(Rs,wl),s(se,yl),p(e,Rt,r),p(e,q,r),s(q,te),s(te,Ns),s(Ns,kl),s(te,gl),s(te,Ms),s(Ms,El),s(te,bl),s(q,vl),s(q,ae),s(ae,Fs),s(Fs,jl),s(ae,ql),s(ae,Ls),s(Ls,$l),s(ae,Pl),s(q,Tl),s(q,oe),s(oe,zs),s(zs,Cl),s(oe,xl),s(oe,Ys),s(Ys,Dl),s(oe,Ol),s(q,Il),s(q,le),s(le,Hs),s(Hs,Sl),s(le,Al),s(le,Gs),s(Gs,Rl),s(le,Nl),Nt=!0},p:rn,i(e){Nt||(k(ce.$$.fragment,e),k(de.$$.fragment,e),k(he.$$.fragment,e),k(ue.$$.fragment,e),k(fe.$$.fragment,e),k(me.$$.fragment,e),k(_e.$$.fragment,e),k(we.$$.fragment,e),k(ye.$$.fragment,e),k(ke.$$.fragment,e),k(ge.$$.fragment,e),k(Ee.$$.fragment,e),k(be.$$.fragment,e),k(ve.$$.fragment,e),Nt=!0)},o(e){g(ce.$$.fragment,e),g(de.$$.fragment,e),g(he.$$.fragment,e),g(ue.$$.fragment,e),g(fe.$$.fragment,e),g(me.$$.fragment,e),g(_e.$$.fragment,e),g(we.$$.fragment,e),g(ye.$$.fragment,e),g(ke.$$.fragment,e),g(ge.$$.fragment,e),g(Ee.$$.fragment,e),g(be.$$.fragment,e),g(ve.$$.fragment,e),Nt=!1},d(e){t(N),e&&t(Vs),e&&t(M),E(ce),e&&t(Ws),e&&t(U),e&&t(Zs),e&&t(C),e&&t(et),e&&t(b),e&&t(st),e&&t(u),e&&t(tt),E(de,e),e&&t(at),e&&t(Pe),e&&t(ot),e&&t(F),e&&t(lt),e&&t(P),e&&t(it),e&&t(L),e&&t(nt),e&&t(T),e&&t(rt),e&&t(f),e&&t(pt),e&&t(X),e&&t(ct),E(he,e),e&&t(dt),e&&t(v),e&&t(ht),E(ue,e),e&&t(ut),e&&t(Te),e&&t(ft),e&&t(z),E(fe),e&&t(mt),e&&t(x),e&&t(_t),E(me,e),e&&t(wt),e&&t(B),e&&t(yt),E(_e,e),e&&t(kt),e&&t(Y),E(we),e&&t(gt),e&&t(K),e&&t(Et),E(ye,e),e&&t(bt),e&&t(V),e&&t(vt),E(ke,e),e&&t(jt),e&&t(W),e&&t(qt),E(ge,e),e&&t($t),e&&t(D),e&&t(Pt),E(Ee,e),e&&t(Tt),e&&t(m),e&&t(Ct),E(be,e),e&&t(xt),e&&t(H),E(ve),e&&t(Dt),e&&t(O),e&&t(Ot),e&&t(ee),e&&t(It),e&&t(j),e&&t(St),e&&t(I),e&&t(At),e&&t(se),e&&t(Rt),e&&t(q)}}}const dn={local:"how-to-create-a-custom-pipeline",sections:[{local:"adding-it-to-the-list-of-supported-tasks",title:"Adding it to the list of supported tasks"},{local:"share-your-pipeline-on-the-hub",title:"Share your pipeline on the Hub"},{local:"add-the-pipeline-to-transformers",title:"Add the pipeline to Transformers"}],title:"How to create a custom pipeline?"};function hn(Ml){return pn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _n extends an{constructor(N){super();on(this,N,hn,cn,ln,{})}}export{_n as default,dn as metadata};
