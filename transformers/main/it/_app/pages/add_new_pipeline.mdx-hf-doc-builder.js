import{S as tn,i as an,s as on,e as o,k as c,w as _,t as a,M as ln,c as l,d as t,m as u,a as n,x as h,h as i,b as d,G as s,g as p,y as g,L as nn,q as v,o as b,B as E,v as rn}from"../chunks/vendor-hf-doc-builder.js";import{I as Kt}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as T}from"../chunks/CodeBlock-hf-doc-builder.js";function pn(Ro){let A,Vs,R,G,Se,ce,Vt,Te,Wt,Ws,H,Zt,Pe,ea,sa,Zs,z,ta,Ae,aa,ia,Re,oa,la,et,k,na,Ne,ra,pa,Le,ca,ua,Me,da,ma,st,m,fa,Fe,_a,ha,Ye,ga,va,Qe,ba,Ea,Ge,wa,ka,He,qa,ja,tt,ue,at,$e,ya,it,N,Ue,Pa,$a,Xe,Ca,za,ot,$,Je,Da,Oa,Be,Ia,xa,Ke,Sa,Ta,lt,L,Ve,Aa,Ra,We,Na,La,nt,C,Ze,Ma,Fa,es,Ya,Qa,ss,Ga,Ha,rt,w,ts,Ua,Xa,as,Ja,Ba,is,Ka,Va,os,Wa,Za,pt,U,ei,ls,si,ti,ct,de,ut,q,ai,ns,ii,oi,rs,li,ni,ps,ri,pi,dt,me,mt,Ce,ci,ft,M,X,cs,fe,ui,us,di,_t,D,mi,ds,fi,_i,ms,hi,gi,ht,_e,gt,J,vi,fs,bi,Ei,vt,he,bt,F,B,_s,ge,wi,hs,ki,Et,K,qi,gs,ji,yi,wt,ve,kt,V,Pi,vs,$i,Ci,qt,be,jt,W,zi,bs,Di,Oi,yt,Ee,Pt,O,Ii,Es,xi,Si,ws,Ti,Ai,$t,we,Ct,f,Ri,ks,Ni,Li,qs,Mi,Fi,js,Yi,Qi,ys,Gi,Hi,zt,ke,Dt,Y,Z,Ps,qe,Ui,$s,Xi,Ot,I,Ji,Cs,Bi,Ki,zs,Vi,Wi,It,ee,Zi,Ds,eo,so,xt,j,to,Os,ao,io,Is,oo,lo,xs,no,ro,St,x,po,Ss,co,uo,Ts,mo,fo,Tt,se,_o,As,ho,go,At,y,te,Rs,vo,bo,Ns,Eo,wo,ko,ae,Ls,qo,jo,Ms,yo,Po,$o,ie,Fs,Co,zo,Ys,Do,Oo,Io,oe,Qs,xo,So,Gs,To,Ao,Rt;return ce=new Kt({}),ue=new T({props:{code:`from transformers import Pipeline


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
        <span class="hljs-keyword">return</span> best_class`}}),de=new T({props:{code:`pipe = pipeline("my-new-task")
pipe("This is a test")

pipe("This is a test", top_k=2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>pipe = pipeline(<span class="hljs-string">&quot;my-new-task&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>pipe(<span class="hljs-string">&quot;This is a test&quot;</span>)
[{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;1-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.8</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;2-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.1</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;3-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.05</span>}
{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;4-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.025</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;5-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.025</span>}]

<span class="hljs-meta">&gt;&gt;&gt; </span>pipe(<span class="hljs-string">&quot;This is a test&quot;</span>, top_k=<span class="hljs-number">2</span>)
[{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;1-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.8</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;2-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.1</span>}]`}}),me=new T({props:{code:`def postprocess(self, model_outputs, top_k=5):
    best_class = model_outputs["logits"].softmax(-1)
    # Add logic to handle top_k
    return best_class


def _sanitize_parameters(self, **kwargs):
    preprocess_kwargs = {}
    if "maybe_arg" in kwargs:
        preprocess_kwargs["maybe_arg"] = kwargs["maybe_arg"]

    postprocess_kwargs = {}
    if "top_k" in kwargs:
        postprocess_kwargs["top_k"] = kwargs["top_k"]
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
        postprocess_kwargs[<span class="hljs-string">&quot;top_k&quot;</span>] = kwargs[<span class="hljs-string">&quot;top_k&quot;</span>]
    <span class="hljs-keyword">return</span> preprocess_kwargs, {}, postprocess_kwargs`}}),fe=new Kt({}),_e=new T({props:{code:`from transformers.pipelines import PIPELINE_REGISTRY

PIPELINE_REGISTRY.register_pipeline(
    "new-task",
    pipeline_class=MyPipeline,
    pt_model=AutoModelForSequenceClassification,
)`,highlighted:`<span class="hljs-keyword">from</span> transformers.pipelines <span class="hljs-keyword">import</span> PIPELINE_REGISTRY

PIPELINE_REGISTRY.register_pipeline(
    <span class="hljs-string">&quot;new-task&quot;</span>,
    pipeline_class=MyPipeline,
    pt_model=AutoModelForSequenceClassification,
)`}}),he=new T({props:{code:`PIPELINE_REGISTRY.register_pipeline(
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
)`}}),ge=new Kt({}),ve=new T({props:{code:`import numpy as np

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
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;label&quot;</span>: label, <span class="hljs-string">&quot;score&quot;</span>: score, <span class="hljs-string">&quot;logits&quot;</span>: logits}`}}),be=new T({props:{code:`from pair_classification import PairClassificationPipeline
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
)`}}),Ee=new T({props:{code:`from transformers import pipeline

classifier = pipeline("pair-classification", model="sgugger/finetuned-bert-mrpc")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

classifier = pipeline(<span class="hljs-string">&quot;pair-classification&quot;</span>, model=<span class="hljs-string">&quot;sgugger/finetuned-bert-mrpc&quot;</span>)`}}),we=new T({props:{code:`from huggingface_hub import Repository

repo = Repository("test-dynamic-pipeline", clone_from="{your_username}/test-dynamic-pipeline")
classifier.save_pretrained("test-dynamic-pipeline")
repo.push_to_hub()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository

repo = Repository(<span class="hljs-string">&quot;test-dynamic-pipeline&quot;</span>, clone_from=<span class="hljs-string">&quot;{your_username}/test-dynamic-pipeline&quot;</span>)
classifier.save_pretrained(<span class="hljs-string">&quot;test-dynamic-pipeline&quot;</span>)
repo.push_to_hub()`}}),ke=new T({props:{code:`from transformers import pipeline

classifier = pipeline(model="{your_username}/test-dynamic-pipeline", trust_remote_code=True)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

classifier = pipeline(model=<span class="hljs-string">&quot;{your_username}/test-dynamic-pipeline&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>)`}}),qe=new Kt({}),{c(){A=o("meta"),Vs=c(),R=o("h1"),G=o("a"),Se=o("span"),_(ce.$$.fragment),Vt=c(),Te=o("span"),Wt=a("Come creare una pipeline personalizzata?"),Ws=c(),H=o("p"),Zt=a("In questa guida, scopriremo come creare una pipeline personalizzata e condividerla sull\u2019 "),Pe=o("a"),ea=a("Hub"),sa=a(` o aggiungerla nella libreria
Transformers.`),Zs=c(),z=o("p"),ta=a(`Innanzitutto, \xE8 necessario decidere gli input grezzi che la pipeline sar\xE0 in grado di accettare. Possono essere strings, raw bytes,
dictionaries o qualsiasi cosa sia l\u2019input desiderato pi\xF9 probabile. Cerca di mantenere questi input il pi\xF9 possibile in Python
in quanto facilita la compatibilit\xE0 (anche con altri linguaggi tramite JSON). Questi saranno gli `),Ae=o("code"),aa=a("inputs"),ia=a(` della
pipeline (`),Re=o("code"),oa=a("preprocess"),la=a(")."),et=c(),k=o("p"),na=a("Poi definire gli "),Ne=o("code"),ra=a("outputs"),pa=a(". Stessa strategia degli "),Le=o("code"),ca=a("inputs"),ua=a(`. Pi\xF9 \xE8 seplice e meglio \xE8. Questi saranno gli output del metodo
`),Me=o("code"),da=a("postprocess"),ma=a("."),st=c(),m=o("p"),fa=a("Si parte ereditando la classe base "),Fe=o("code"),_a=a("Pipeline"),ha=a(". con i 4 metodi che bisogna implementare "),Ye=o("code"),ga=a("preprocess"),va=a(`,
`),Qe=o("code"),ba=a("_forward"),Ea=a(", "),Ge=o("code"),wa=a("postprocess"),ka=a(" e "),He=o("code"),qa=a("_sanitize_parameters"),ja=a("."),tt=c(),_(ue.$$.fragment),at=c(),$e=o("p"),ya=a(`La struttura di questa suddivisione consiste nel supportare in modo relativamente continuo CPU/GPU, supportando allo stesso tempo l\u2019esecuzione di
pre/postelaborazione sulla CPU su thread diversi.`),it=c(),N=o("p"),Ue=o("code"),Pa=a("preprocess"),$a=a(` prender\xE0 gli input originariamente definiti e li trasformer\xE0 in qualcosa di alimentabile dal modello. Potrebbe
contenere pi\xF9 informazioni e di solito \xE8 un `),Xe=o("code"),Ca=a("Dict"),za=a("."),ot=c(),$=o("p"),Je=o("code"),Da=a("_forward"),Oa=a(" \xE8 il dettaglio dell\u2019implementazione e non \xE8 destinato a essere chiamato direttamente. "),Be=o("code"),Ia=a("forward"),xa=a(` \xE8 il metodo preferito per assicurarsi che tutto funzioni correttamente perch\xE8 contiene delle slavaguardie. Se qualcosa \xE8
\xE8 collegato a un modello reale, appartiene al metodo `),Ke=o("code"),Sa=a("_forward"),Ta=a(", tutto il resto \xE8 nel preprocess/postprocess."),lt=c(),L=o("p"),Ve=o("code"),Aa=a("postprocess"),Ra=a(" prende l\u2019otput di "),We=o("code"),Na=a("_forward"),La=a(" e lo trasforma nell\u2019output finale che era stato deciso in precedenza."),nt=c(),C=o("p"),Ze=o("code"),Ma=a("_sanitize_parameters"),Fa=a(" esiste per consentire agli utenti di passare i parametri ogni volta che desiderano sia a inizialization time "),es=o("code"),Ya=a("pipeline(...., maybe_arg=4)"),Qa=a(" che al call time "),ss=o("code"),Ga=a("pipe = pipeline(...); output = pipe(...., maybe_arg=4)"),Ha=a("."),rt=c(),w=o("p"),ts=o("code"),Ua=a("_sanitize_parameters"),Xa=a(" ritorna 3 dicts di kwargs che vengono passati direttamente a "),as=o("code"),Ja=a("preprocess"),Ba=a(`,
`),is=o("code"),Ka=a("_forward"),Va=a(" e "),os=o("code"),Wa=a("postprocess"),Za=a(`. Non riempire nulla se il chiamante non ha chiamato con alcun parametro aggiuntivo. Questo
consente di mantenere gli argomenti predefiniti nella definizione della funzione, che \xE8 sempre pi\xF9 \u201Cnaturale\u201D.`),pt=c(),U=o("p"),ei=a("Un esempio classico potrebbe essere l\u2019argomento "),ls=o("code"),si=a("top_k"),ti=a(" nel post processing dei classification tasks."),ct=c(),_(de.$$.fragment),ut=c(),q=o("p"),ai=a("In order to achieve that, we\u2019ll update our "),ns=o("code"),ii=a("postprocess"),oi=a(" method with a default parameter to "),rs=o("code"),li=a("5"),ni=a(`. and edit
`),ps=o("code"),ri=a("_sanitize_parameters"),pi=a(" to allow this new parameter."),dt=c(),_(me.$$.fragment),mt=c(),Ce=o("p"),ci=a(`Cercare di mantenere gli input/output molto semplici e idealmente serializzabili in JSON, in quanto ci\xF2 rende l\u2019uso della pipeline molto facile
senza richiedere agli utenti di comprendere nuovi tipi di oggetti. \xC8 anche relativamente comune supportare molti tipi di argomenti
per facilitarne l\u2019uso (ad esempio file audio, possono essere nomi di file, URL o byte puri).`),ft=c(),M=o("h2"),X=o("a"),cs=o("span"),_(fe.$$.fragment),ui=c(),us=o("span"),di=a("Aggiungilo alla lista dei tasks supportati"),_t=c(),D=o("p"),mi=a("Per registrar il tuo "),ds=o("code"),fi=a("new-task"),_i=a(" alla lista dei tasks supportati, devi aggiungerlo al "),ms=o("code"),hi=a("PIPELINE_REGISTRY"),gi=a(":"),ht=c(),_(_e.$$.fragment),gt=c(),J=o("p"),vi=a("Puoi specificare il modello di default che desideri, in questo caso dovrebbe essere accompagnato da una revisione specifica (che pu\xF2 essere il nome di un branch o l\u2019hash di un commit, in questo caso abbiamo preso "),fs=o("code"),bi=a('"abcdef"'),Ei=a(") e anche dal type:"),vt=c(),_(he.$$.fragment),bt=c(),F=o("h2"),B=o("a"),_s=o("span"),_(ge.$$.fragment),wi=c(),hs=o("span"),ki=a("Condividi la tua pipeline sull'Hub"),Et=c(),K=o("p"),qi=a("Per condividere la tua pipeline personalizzata sull\u2019Hub, devi solo salvare il codice della tua sottoclasse "),gs=o("code"),ji=a("Pipeline"),yi=a(` in un file
python. Per esempio, supponiamo di voler utilizzare una pipeline personalizzata per la classificazione delle coppie di frasi come la seguente:`),wt=c(),_(ve.$$.fragment),kt=c(),V=o("p"),Pi=a("L\u2019implementazione \xE8 agnostica al framework, e lavorer\xE0 sia con modelli PyTorch che con TensorFlow. Se l\u2019abbiamo salvato in un file chiamato "),vs=o("code"),$i=a("pair_classification.py"),Ci=a(", pu\xF2 essere successivamente importato e registrato in questo modo:"),qt=c(),_(be.$$.fragment),jt=c(),W=o("p"),zi=a("Una volta fatto, possiamo usarla con un modello pretrained. L\u2019istanza "),bs=o("code"),Di=a("sgugger/finetuned-bert-mrpc"),Oi=a(` \xE8 stata
fine-tuned sul dataset MRPC, che classifica le coppie di frasi come parafrasi o no.`),yt=c(),_(Ee.$$.fragment),Pt=c(),O=o("p"),Ii=a("Successivamente possiamo condividerlo sull\u2019Hub usando il metodo "),Es=o("code"),xi=a("save_pretrained"),Si=a(" in un "),ws=o("code"),Ti=a("Repository"),Ai=a(":"),$t=c(),_(we.$$.fragment),Ct=c(),f=o("p"),Ri=a("Questo codice copier\xE0 il file dove \xE8 stato definitp "),ks=o("code"),Ni=a("PairClassificationPipeline"),Li=a(" all\u2019interno della cartella "),qs=o("code"),Mi=a('"test-dynamic-pipeline"'),Fi=a(`,
insieme al salvataggio del modello e del tokenizer della pipeline, prima di pushare il tutto nel repository
`),js=o("code"),Yi=a("{your_username}/test-dynamic-pipeline"),Qi=a(`. Dopodich\xE9 chiunque potr\xE0 utilizzarlo, purch\xE9 fornisca l\u2019opzione
`),ys=o("code"),Gi=a("trust_remote_code=True"),Hi=a(":"),zt=c(),_(ke.$$.fragment),Dt=c(),Y=o("h2"),Z=o("a"),Ps=o("span"),_(qe.$$.fragment),Ui=c(),$s=o("span"),Xi=a("Aggiungere la pipeline a Transformers"),Ot=c(),I=o("p"),Ji=a("Se vuoi contribuire con la tua pipeline a Transformers, dovrai aggiungere un modulo nel sottomodulo "),Cs=o("code"),Bi=a("pipelines"),Ki=a(`
con il codice della tua pipeline, quindi aggiungilo all\u2019elenco dei tasks definiti in `),zs=o("code"),Vi=a("pipelines/__init__.py"),Wi=a("."),It=c(),ee=o("p"),Zi=a("Poi hai bisogno di aggiungere i test. Crea un nuovo file "),Ds=o("code"),eo=a("tests/test_pipelines_MY_PIPELINE.py"),so=a(" con esempi ed altri test."),xt=c(),j=o("p"),to=a("La funzione "),Os=o("code"),ao=a("run_pipeline_test"),io=a(` sar\xE0 molto generica e su piccoli modelli casuali su ogni possibile
architettura, come definito da `),Is=o("code"),oo=a("model_mapping"),lo=a(" e "),xs=o("code"),no=a("tf_model_mapping"),ro=a("."),St=c(),x=o("p"),po=a(`Questo \xE8 molto importante per testare la compatibilit\xE0 futura, nel senso che se qualcuno aggiunge un nuovo modello di
`),Ss=o("code"),co=a("XXXForQuestionAnswering"),uo=a(` allora il test della pipeline tenter\xE0 di essere eseguito su di esso. Poich\xE9 i modelli sono casuali, \xE8
\xE8 impossibile controllare i valori effettivi, per questo esiste un aiuto `),Ts=o("code"),mo=a("ANY"),fo=a(" che tenter\xE0 solamente di far corrispondere l\u2019output della pipeline TYPE."),Tt=c(),se=o("p"),_o=a("Hai anche "),As=o("em"),ho=a("bisogno"),go=a(" di implementare 2 (idealmente 4) test."),At=c(),y=o("ul"),te=o("li"),Rs=o("code"),vo=a("test_small_model_pt"),bo=a(` : Definire 1 piccolo modello per questa pipeline (non importa se i risultati non hanno senso)
e testare i risultati della pipeline. I risultati dovrebbero essere gli stessi di `),Ns=o("code"),Eo=a("test_small_model_tf"),wo=a("."),ko=c(),ae=o("li"),Ls=o("code"),qo=a("test_small_model_tf"),jo=a(` : Definire 1 piccolo modello per questa pipeline (non importa se i risultati non hanno senso)
e testare i risultati della pipeline. I risultati dovrebbero essere gli stessi di `),Ms=o("code"),yo=a("test_small_model_pt"),Po=a("."),$o=c(),ie=o("li"),Fs=o("code"),Co=a("test_large_model_pt"),zo=a(" ("),Ys=o("code"),Do=a("optional"),Oo=a(`): Testare la pipeline su una pipeline reale in cui i risultati dovrebbero avere
senso. Questi test sono lenti e dovrebbero essere contrassegnati come tali. In questo caso l\u2019obiettivo \xE8 mostrare la pipeline e assicurarsi che non ci siano  derive nelle versioni future`),Io=c(),oe=o("li"),Qs=o("code"),xo=a("test_large_model_tf"),So=a(" ("),Gs=o("code"),To=a("optional"),Ao=a(`): Testare la pipeline su una pipeline reale in cui i risultati dovrebbero avere
senso. Questi test sono lenti e dovrebbero essere contrassegnati come tali. In questo caso l\u2019obiettivo \xE8 mostrare la pipeline e assicurarsi
che non ci siano derive nelle versioni future`),this.h()},l(e){const r=ln('[data-svelte="svelte-1phssyn"]',document.head);A=l(r,"META",{name:!0,content:!0}),r.forEach(t),Vs=u(e),R=l(e,"H1",{class:!0});var Nt=n(R);G=l(Nt,"A",{id:!0,class:!0,href:!0});var No=n(G);Se=l(No,"SPAN",{});var Lo=n(Se);h(ce.$$.fragment,Lo),Lo.forEach(t),No.forEach(t),Vt=u(Nt),Te=l(Nt,"SPAN",{});var Mo=n(Te);Wt=i(Mo,"Come creare una pipeline personalizzata?"),Mo.forEach(t),Nt.forEach(t),Ws=u(e),H=l(e,"P",{});var Lt=n(H);Zt=i(Lt,"In questa guida, scopriremo come creare una pipeline personalizzata e condividerla sull\u2019 "),Pe=l(Lt,"A",{href:!0});var Fo=n(Pe);ea=i(Fo,"Hub"),Fo.forEach(t),sa=i(Lt,` o aggiungerla nella libreria
Transformers.`),Lt.forEach(t),Zs=u(e),z=l(e,"P",{});var ze=n(z);ta=i(ze,`Innanzitutto, \xE8 necessario decidere gli input grezzi che la pipeline sar\xE0 in grado di accettare. Possono essere strings, raw bytes,
dictionaries o qualsiasi cosa sia l\u2019input desiderato pi\xF9 probabile. Cerca di mantenere questi input il pi\xF9 possibile in Python
in quanto facilita la compatibilit\xE0 (anche con altri linguaggi tramite JSON). Questi saranno gli `),Ae=l(ze,"CODE",{});var Yo=n(Ae);aa=i(Yo,"inputs"),Yo.forEach(t),ia=i(ze,` della
pipeline (`),Re=l(ze,"CODE",{});var Qo=n(Re);oa=i(Qo,"preprocess"),Qo.forEach(t),la=i(ze,")."),ze.forEach(t),et=u(e),k=l(e,"P",{});var le=n(k);na=i(le,"Poi definire gli "),Ne=l(le,"CODE",{});var Go=n(Ne);ra=i(Go,"outputs"),Go.forEach(t),pa=i(le,". Stessa strategia degli "),Le=l(le,"CODE",{});var Ho=n(Le);ca=i(Ho,"inputs"),Ho.forEach(t),ua=i(le,`. Pi\xF9 \xE8 seplice e meglio \xE8. Questi saranno gli output del metodo
`),Me=l(le,"CODE",{});var Uo=n(Me);da=i(Uo,"postprocess"),Uo.forEach(t),ma=i(le,"."),le.forEach(t),st=u(e),m=l(e,"P",{});var P=n(m);fa=i(P,"Si parte ereditando la classe base "),Fe=l(P,"CODE",{});var Xo=n(Fe);_a=i(Xo,"Pipeline"),Xo.forEach(t),ha=i(P,". con i 4 metodi che bisogna implementare "),Ye=l(P,"CODE",{});var Jo=n(Ye);ga=i(Jo,"preprocess"),Jo.forEach(t),va=i(P,`,
`),Qe=l(P,"CODE",{});var Bo=n(Qe);ba=i(Bo,"_forward"),Bo.forEach(t),Ea=i(P,", "),Ge=l(P,"CODE",{});var Ko=n(Ge);wa=i(Ko,"postprocess"),Ko.forEach(t),ka=i(P," e "),He=l(P,"CODE",{});var Vo=n(He);qa=i(Vo,"_sanitize_parameters"),Vo.forEach(t),ja=i(P,"."),P.forEach(t),tt=u(e),h(ue.$$.fragment,e),at=u(e),$e=l(e,"P",{});var Wo=n($e);ya=i(Wo,`La struttura di questa suddivisione consiste nel supportare in modo relativamente continuo CPU/GPU, supportando allo stesso tempo l\u2019esecuzione di
pre/postelaborazione sulla CPU su thread diversi.`),Wo.forEach(t),it=u(e),N=l(e,"P",{});var Hs=n(N);Ue=l(Hs,"CODE",{});var Zo=n(Ue);Pa=i(Zo,"preprocess"),Zo.forEach(t),$a=i(Hs,` prender\xE0 gli input originariamente definiti e li trasformer\xE0 in qualcosa di alimentabile dal modello. Potrebbe
contenere pi\xF9 informazioni e di solito \xE8 un `),Xe=l(Hs,"CODE",{});var el=n(Xe);Ca=i(el,"Dict"),el.forEach(t),za=i(Hs,"."),Hs.forEach(t),ot=u(e),$=l(e,"P",{});var je=n($);Je=l(je,"CODE",{});var sl=n(Je);Da=i(sl,"_forward"),sl.forEach(t),Oa=i(je," \xE8 il dettaglio dell\u2019implementazione e non \xE8 destinato a essere chiamato direttamente. "),Be=l(je,"CODE",{});var tl=n(Be);Ia=i(tl,"forward"),tl.forEach(t),xa=i(je,` \xE8 il metodo preferito per assicurarsi che tutto funzioni correttamente perch\xE8 contiene delle slavaguardie. Se qualcosa \xE8
\xE8 collegato a un modello reale, appartiene al metodo `),Ke=l(je,"CODE",{});var al=n(Ke);Sa=i(al,"_forward"),al.forEach(t),Ta=i(je,", tutto il resto \xE8 nel preprocess/postprocess."),je.forEach(t),lt=u(e),L=l(e,"P",{});var Us=n(L);Ve=l(Us,"CODE",{});var il=n(Ve);Aa=i(il,"postprocess"),il.forEach(t),Ra=i(Us," prende l\u2019otput di "),We=l(Us,"CODE",{});var ol=n(We);Na=i(ol,"_forward"),ol.forEach(t),La=i(Us," e lo trasforma nell\u2019output finale che era stato deciso in precedenza."),Us.forEach(t),nt=u(e),C=l(e,"P",{});var ye=n(C);Ze=l(ye,"CODE",{});var ll=n(Ze);Ma=i(ll,"_sanitize_parameters"),ll.forEach(t),Fa=i(ye," esiste per consentire agli utenti di passare i parametri ogni volta che desiderano sia a inizialization time "),es=l(ye,"CODE",{});var nl=n(es);Ya=i(nl,"pipeline(...., maybe_arg=4)"),nl.forEach(t),Qa=i(ye," che al call time "),ss=l(ye,"CODE",{});var rl=n(ss);Ga=i(rl,"pipe = pipeline(...); output = pipe(...., maybe_arg=4)"),rl.forEach(t),Ha=i(ye,"."),ye.forEach(t),rt=u(e),w=l(e,"P",{});var Q=n(w);ts=l(Q,"CODE",{});var pl=n(ts);Ua=i(pl,"_sanitize_parameters"),pl.forEach(t),Xa=i(Q," ritorna 3 dicts di kwargs che vengono passati direttamente a "),as=l(Q,"CODE",{});var cl=n(as);Ja=i(cl,"preprocess"),cl.forEach(t),Ba=i(Q,`,
`),is=l(Q,"CODE",{});var ul=n(is);Ka=i(ul,"_forward"),ul.forEach(t),Va=i(Q," e "),os=l(Q,"CODE",{});var dl=n(os);Wa=i(dl,"postprocess"),dl.forEach(t),Za=i(Q,`. Non riempire nulla se il chiamante non ha chiamato con alcun parametro aggiuntivo. Questo
consente di mantenere gli argomenti predefiniti nella definizione della funzione, che \xE8 sempre pi\xF9 \u201Cnaturale\u201D.`),Q.forEach(t),pt=u(e),U=l(e,"P",{});var Mt=n(U);ei=i(Mt,"Un esempio classico potrebbe essere l\u2019argomento "),ls=l(Mt,"CODE",{});var ml=n(ls);si=i(ml,"top_k"),ml.forEach(t),ti=i(Mt," nel post processing dei classification tasks."),Mt.forEach(t),ct=u(e),h(de.$$.fragment,e),ut=u(e),q=l(e,"P",{});var ne=n(q);ai=i(ne,"In order to achieve that, we\u2019ll update our "),ns=l(ne,"CODE",{});var fl=n(ns);ii=i(fl,"postprocess"),fl.forEach(t),oi=i(ne," method with a default parameter to "),rs=l(ne,"CODE",{});var _l=n(rs);li=i(_l,"5"),_l.forEach(t),ni=i(ne,`. and edit
`),ps=l(ne,"CODE",{});var hl=n(ps);ri=i(hl,"_sanitize_parameters"),hl.forEach(t),pi=i(ne," to allow this new parameter."),ne.forEach(t),dt=u(e),h(me.$$.fragment,e),mt=u(e),Ce=l(e,"P",{});var gl=n(Ce);ci=i(gl,`Cercare di mantenere gli input/output molto semplici e idealmente serializzabili in JSON, in quanto ci\xF2 rende l\u2019uso della pipeline molto facile
senza richiedere agli utenti di comprendere nuovi tipi di oggetti. \xC8 anche relativamente comune supportare molti tipi di argomenti
per facilitarne l\u2019uso (ad esempio file audio, possono essere nomi di file, URL o byte puri).`),gl.forEach(t),ft=u(e),M=l(e,"H2",{class:!0});var Ft=n(M);X=l(Ft,"A",{id:!0,class:!0,href:!0});var vl=n(X);cs=l(vl,"SPAN",{});var bl=n(cs);h(fe.$$.fragment,bl),bl.forEach(t),vl.forEach(t),ui=u(Ft),us=l(Ft,"SPAN",{});var El=n(us);di=i(El,"Aggiungilo alla lista dei tasks supportati"),El.forEach(t),Ft.forEach(t),_t=u(e),D=l(e,"P",{});var De=n(D);mi=i(De,"Per registrar il tuo "),ds=l(De,"CODE",{});var wl=n(ds);fi=i(wl,"new-task"),wl.forEach(t),_i=i(De," alla lista dei tasks supportati, devi aggiungerlo al "),ms=l(De,"CODE",{});var kl=n(ms);hi=i(kl,"PIPELINE_REGISTRY"),kl.forEach(t),gi=i(De,":"),De.forEach(t),ht=u(e),h(_e.$$.fragment,e),gt=u(e),J=l(e,"P",{});var Yt=n(J);vi=i(Yt,"Puoi specificare il modello di default che desideri, in questo caso dovrebbe essere accompagnato da una revisione specifica (che pu\xF2 essere il nome di un branch o l\u2019hash di un commit, in questo caso abbiamo preso "),fs=l(Yt,"CODE",{});var ql=n(fs);bi=i(ql,'"abcdef"'),ql.forEach(t),Ei=i(Yt,") e anche dal type:"),Yt.forEach(t),vt=u(e),h(he.$$.fragment,e),bt=u(e),F=l(e,"H2",{class:!0});var Qt=n(F);B=l(Qt,"A",{id:!0,class:!0,href:!0});var jl=n(B);_s=l(jl,"SPAN",{});var yl=n(_s);h(ge.$$.fragment,yl),yl.forEach(t),jl.forEach(t),wi=u(Qt),hs=l(Qt,"SPAN",{});var Pl=n(hs);ki=i(Pl,"Condividi la tua pipeline sull'Hub"),Pl.forEach(t),Qt.forEach(t),Et=u(e),K=l(e,"P",{});var Gt=n(K);qi=i(Gt,"Per condividere la tua pipeline personalizzata sull\u2019Hub, devi solo salvare il codice della tua sottoclasse "),gs=l(Gt,"CODE",{});var $l=n(gs);ji=i($l,"Pipeline"),$l.forEach(t),yi=i(Gt,` in un file
python. Per esempio, supponiamo di voler utilizzare una pipeline personalizzata per la classificazione delle coppie di frasi come la seguente:`),Gt.forEach(t),wt=u(e),h(ve.$$.fragment,e),kt=u(e),V=l(e,"P",{});var Ht=n(V);Pi=i(Ht,"L\u2019implementazione \xE8 agnostica al framework, e lavorer\xE0 sia con modelli PyTorch che con TensorFlow. Se l\u2019abbiamo salvato in un file chiamato "),vs=l(Ht,"CODE",{});var Cl=n(vs);$i=i(Cl,"pair_classification.py"),Cl.forEach(t),Ci=i(Ht,", pu\xF2 essere successivamente importato e registrato in questo modo:"),Ht.forEach(t),qt=u(e),h(be.$$.fragment,e),jt=u(e),W=l(e,"P",{});var Ut=n(W);zi=i(Ut,"Una volta fatto, possiamo usarla con un modello pretrained. L\u2019istanza "),bs=l(Ut,"CODE",{});var zl=n(bs);Di=i(zl,"sgugger/finetuned-bert-mrpc"),zl.forEach(t),Oi=i(Ut,` \xE8 stata
fine-tuned sul dataset MRPC, che classifica le coppie di frasi come parafrasi o no.`),Ut.forEach(t),yt=u(e),h(Ee.$$.fragment,e),Pt=u(e),O=l(e,"P",{});var Oe=n(O);Ii=i(Oe,"Successivamente possiamo condividerlo sull\u2019Hub usando il metodo "),Es=l(Oe,"CODE",{});var Dl=n(Es);xi=i(Dl,"save_pretrained"),Dl.forEach(t),Si=i(Oe," in un "),ws=l(Oe,"CODE",{});var Ol=n(ws);Ti=i(Ol,"Repository"),Ol.forEach(t),Ai=i(Oe,":"),Oe.forEach(t),$t=u(e),h(we.$$.fragment,e),Ct=u(e),f=l(e,"P",{});var S=n(f);Ri=i(S,"Questo codice copier\xE0 il file dove \xE8 stato definitp "),ks=l(S,"CODE",{});var Il=n(ks);Ni=i(Il,"PairClassificationPipeline"),Il.forEach(t),Li=i(S," all\u2019interno della cartella "),qs=l(S,"CODE",{});var xl=n(qs);Mi=i(xl,'"test-dynamic-pipeline"'),xl.forEach(t),Fi=i(S,`,
insieme al salvataggio del modello e del tokenizer della pipeline, prima di pushare il tutto nel repository
`),js=l(S,"CODE",{});var Sl=n(js);Yi=i(Sl,"{your_username}/test-dynamic-pipeline"),Sl.forEach(t),Qi=i(S,`. Dopodich\xE9 chiunque potr\xE0 utilizzarlo, purch\xE9 fornisca l\u2019opzione
`),ys=l(S,"CODE",{});var Tl=n(ys);Gi=i(Tl,"trust_remote_code=True"),Tl.forEach(t),Hi=i(S,":"),S.forEach(t),zt=u(e),h(ke.$$.fragment,e),Dt=u(e),Y=l(e,"H2",{class:!0});var Xt=n(Y);Z=l(Xt,"A",{id:!0,class:!0,href:!0});var Al=n(Z);Ps=l(Al,"SPAN",{});var Rl=n(Ps);h(qe.$$.fragment,Rl),Rl.forEach(t),Al.forEach(t),Ui=u(Xt),$s=l(Xt,"SPAN",{});var Nl=n($s);Xi=i(Nl,"Aggiungere la pipeline a Transformers"),Nl.forEach(t),Xt.forEach(t),Ot=u(e),I=l(e,"P",{});var Ie=n(I);Ji=i(Ie,"Se vuoi contribuire con la tua pipeline a Transformers, dovrai aggiungere un modulo nel sottomodulo "),Cs=l(Ie,"CODE",{});var Ll=n(Cs);Bi=i(Ll,"pipelines"),Ll.forEach(t),Ki=i(Ie,`
con il codice della tua pipeline, quindi aggiungilo all\u2019elenco dei tasks definiti in `),zs=l(Ie,"CODE",{});var Ml=n(zs);Vi=i(Ml,"pipelines/__init__.py"),Ml.forEach(t),Wi=i(Ie,"."),Ie.forEach(t),It=u(e),ee=l(e,"P",{});var Jt=n(ee);Zi=i(Jt,"Poi hai bisogno di aggiungere i test. Crea un nuovo file "),Ds=l(Jt,"CODE",{});var Fl=n(Ds);eo=i(Fl,"tests/test_pipelines_MY_PIPELINE.py"),Fl.forEach(t),so=i(Jt," con esempi ed altri test."),Jt.forEach(t),xt=u(e),j=l(e,"P",{});var re=n(j);to=i(re,"La funzione "),Os=l(re,"CODE",{});var Yl=n(Os);ao=i(Yl,"run_pipeline_test"),Yl.forEach(t),io=i(re,` sar\xE0 molto generica e su piccoli modelli casuali su ogni possibile
architettura, come definito da `),Is=l(re,"CODE",{});var Ql=n(Is);oo=i(Ql,"model_mapping"),Ql.forEach(t),lo=i(re," e "),xs=l(re,"CODE",{});var Gl=n(xs);no=i(Gl,"tf_model_mapping"),Gl.forEach(t),ro=i(re,"."),re.forEach(t),St=u(e),x=l(e,"P",{});var xe=n(x);po=i(xe,`Questo \xE8 molto importante per testare la compatibilit\xE0 futura, nel senso che se qualcuno aggiunge un nuovo modello di
`),Ss=l(xe,"CODE",{});var Hl=n(Ss);co=i(Hl,"XXXForQuestionAnswering"),Hl.forEach(t),uo=i(xe,` allora il test della pipeline tenter\xE0 di essere eseguito su di esso. Poich\xE9 i modelli sono casuali, \xE8
\xE8 impossibile controllare i valori effettivi, per questo esiste un aiuto `),Ts=l(xe,"CODE",{});var Ul=n(Ts);mo=i(Ul,"ANY"),Ul.forEach(t),fo=i(xe," che tenter\xE0 solamente di far corrispondere l\u2019output della pipeline TYPE."),xe.forEach(t),Tt=u(e),se=l(e,"P",{});var Bt=n(se);_o=i(Bt,"Hai anche "),As=l(Bt,"EM",{});var Xl=n(As);ho=i(Xl,"bisogno"),Xl.forEach(t),go=i(Bt," di implementare 2 (idealmente 4) test."),Bt.forEach(t),At=u(e),y=l(e,"UL",{});var pe=n(y);te=l(pe,"LI",{});var Xs=n(te);Rs=l(Xs,"CODE",{});var Jl=n(Rs);vo=i(Jl,"test_small_model_pt"),Jl.forEach(t),bo=i(Xs,` : Definire 1 piccolo modello per questa pipeline (non importa se i risultati non hanno senso)
e testare i risultati della pipeline. I risultati dovrebbero essere gli stessi di `),Ns=l(Xs,"CODE",{});var Bl=n(Ns);Eo=i(Bl,"test_small_model_tf"),Bl.forEach(t),wo=i(Xs,"."),Xs.forEach(t),ko=u(pe),ae=l(pe,"LI",{});var Js=n(ae);Ls=l(Js,"CODE",{});var Kl=n(Ls);qo=i(Kl,"test_small_model_tf"),Kl.forEach(t),jo=i(Js,` : Definire 1 piccolo modello per questa pipeline (non importa se i risultati non hanno senso)
e testare i risultati della pipeline. I risultati dovrebbero essere gli stessi di `),Ms=l(Js,"CODE",{});var Vl=n(Ms);yo=i(Vl,"test_small_model_pt"),Vl.forEach(t),Po=i(Js,"."),Js.forEach(t),$o=u(pe),ie=l(pe,"LI",{});var Bs=n(ie);Fs=l(Bs,"CODE",{});var Wl=n(Fs);Co=i(Wl,"test_large_model_pt"),Wl.forEach(t),zo=i(Bs," ("),Ys=l(Bs,"CODE",{});var Zl=n(Ys);Do=i(Zl,"optional"),Zl.forEach(t),Oo=i(Bs,`): Testare la pipeline su una pipeline reale in cui i risultati dovrebbero avere
senso. Questi test sono lenti e dovrebbero essere contrassegnati come tali. In questo caso l\u2019obiettivo \xE8 mostrare la pipeline e assicurarsi che non ci siano  derive nelle versioni future`),Bs.forEach(t),Io=u(pe),oe=l(pe,"LI",{});var Ks=n(oe);Qs=l(Ks,"CODE",{});var en=n(Qs);xo=i(en,"test_large_model_tf"),en.forEach(t),So=i(Ks," ("),Gs=l(Ks,"CODE",{});var sn=n(Gs);To=i(sn,"optional"),sn.forEach(t),Ao=i(Ks,`): Testare la pipeline su una pipeline reale in cui i risultati dovrebbero avere
senso. Questi test sono lenti e dovrebbero essere contrassegnati come tali. In questo caso l\u2019obiettivo \xE8 mostrare la pipeline e assicurarsi
che non ci siano derive nelle versioni future`),Ks.forEach(t),pe.forEach(t),this.h()},h(){d(A,"name","hf:doc:metadata"),d(A,"content",JSON.stringify(cn)),d(G,"id","come-creare-una-pipeline-personalizzata"),d(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(G,"href","#come-creare-una-pipeline-personalizzata"),d(R,"class","relative group"),d(Pe,"href","hf.co/models"),d(X,"id","aggiungilo-alla-lista-dei-tasks-supportati"),d(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(X,"href","#aggiungilo-alla-lista-dei-tasks-supportati"),d(M,"class","relative group"),d(B,"id","condividi-la-tua-pipeline-sullhub"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#condividi-la-tua-pipeline-sullhub"),d(F,"class","relative group"),d(Z,"id","aggiungere-la-pipeline-a-transformers"),d(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Z,"href","#aggiungere-la-pipeline-a-transformers"),d(Y,"class","relative group")},m(e,r){s(document.head,A),p(e,Vs,r),p(e,R,r),s(R,G),s(G,Se),g(ce,Se,null),s(R,Vt),s(R,Te),s(Te,Wt),p(e,Ws,r),p(e,H,r),s(H,Zt),s(H,Pe),s(Pe,ea),s(H,sa),p(e,Zs,r),p(e,z,r),s(z,ta),s(z,Ae),s(Ae,aa),s(z,ia),s(z,Re),s(Re,oa),s(z,la),p(e,et,r),p(e,k,r),s(k,na),s(k,Ne),s(Ne,ra),s(k,pa),s(k,Le),s(Le,ca),s(k,ua),s(k,Me),s(Me,da),s(k,ma),p(e,st,r),p(e,m,r),s(m,fa),s(m,Fe),s(Fe,_a),s(m,ha),s(m,Ye),s(Ye,ga),s(m,va),s(m,Qe),s(Qe,ba),s(m,Ea),s(m,Ge),s(Ge,wa),s(m,ka),s(m,He),s(He,qa),s(m,ja),p(e,tt,r),g(ue,e,r),p(e,at,r),p(e,$e,r),s($e,ya),p(e,it,r),p(e,N,r),s(N,Ue),s(Ue,Pa),s(N,$a),s(N,Xe),s(Xe,Ca),s(N,za),p(e,ot,r),p(e,$,r),s($,Je),s(Je,Da),s($,Oa),s($,Be),s(Be,Ia),s($,xa),s($,Ke),s(Ke,Sa),s($,Ta),p(e,lt,r),p(e,L,r),s(L,Ve),s(Ve,Aa),s(L,Ra),s(L,We),s(We,Na),s(L,La),p(e,nt,r),p(e,C,r),s(C,Ze),s(Ze,Ma),s(C,Fa),s(C,es),s(es,Ya),s(C,Qa),s(C,ss),s(ss,Ga),s(C,Ha),p(e,rt,r),p(e,w,r),s(w,ts),s(ts,Ua),s(w,Xa),s(w,as),s(as,Ja),s(w,Ba),s(w,is),s(is,Ka),s(w,Va),s(w,os),s(os,Wa),s(w,Za),p(e,pt,r),p(e,U,r),s(U,ei),s(U,ls),s(ls,si),s(U,ti),p(e,ct,r),g(de,e,r),p(e,ut,r),p(e,q,r),s(q,ai),s(q,ns),s(ns,ii),s(q,oi),s(q,rs),s(rs,li),s(q,ni),s(q,ps),s(ps,ri),s(q,pi),p(e,dt,r),g(me,e,r),p(e,mt,r),p(e,Ce,r),s(Ce,ci),p(e,ft,r),p(e,M,r),s(M,X),s(X,cs),g(fe,cs,null),s(M,ui),s(M,us),s(us,di),p(e,_t,r),p(e,D,r),s(D,mi),s(D,ds),s(ds,fi),s(D,_i),s(D,ms),s(ms,hi),s(D,gi),p(e,ht,r),g(_e,e,r),p(e,gt,r),p(e,J,r),s(J,vi),s(J,fs),s(fs,bi),s(J,Ei),p(e,vt,r),g(he,e,r),p(e,bt,r),p(e,F,r),s(F,B),s(B,_s),g(ge,_s,null),s(F,wi),s(F,hs),s(hs,ki),p(e,Et,r),p(e,K,r),s(K,qi),s(K,gs),s(gs,ji),s(K,yi),p(e,wt,r),g(ve,e,r),p(e,kt,r),p(e,V,r),s(V,Pi),s(V,vs),s(vs,$i),s(V,Ci),p(e,qt,r),g(be,e,r),p(e,jt,r),p(e,W,r),s(W,zi),s(W,bs),s(bs,Di),s(W,Oi),p(e,yt,r),g(Ee,e,r),p(e,Pt,r),p(e,O,r),s(O,Ii),s(O,Es),s(Es,xi),s(O,Si),s(O,ws),s(ws,Ti),s(O,Ai),p(e,$t,r),g(we,e,r),p(e,Ct,r),p(e,f,r),s(f,Ri),s(f,ks),s(ks,Ni),s(f,Li),s(f,qs),s(qs,Mi),s(f,Fi),s(f,js),s(js,Yi),s(f,Qi),s(f,ys),s(ys,Gi),s(f,Hi),p(e,zt,r),g(ke,e,r),p(e,Dt,r),p(e,Y,r),s(Y,Z),s(Z,Ps),g(qe,Ps,null),s(Y,Ui),s(Y,$s),s($s,Xi),p(e,Ot,r),p(e,I,r),s(I,Ji),s(I,Cs),s(Cs,Bi),s(I,Ki),s(I,zs),s(zs,Vi),s(I,Wi),p(e,It,r),p(e,ee,r),s(ee,Zi),s(ee,Ds),s(Ds,eo),s(ee,so),p(e,xt,r),p(e,j,r),s(j,to),s(j,Os),s(Os,ao),s(j,io),s(j,Is),s(Is,oo),s(j,lo),s(j,xs),s(xs,no),s(j,ro),p(e,St,r),p(e,x,r),s(x,po),s(x,Ss),s(Ss,co),s(x,uo),s(x,Ts),s(Ts,mo),s(x,fo),p(e,Tt,r),p(e,se,r),s(se,_o),s(se,As),s(As,ho),s(se,go),p(e,At,r),p(e,y,r),s(y,te),s(te,Rs),s(Rs,vo),s(te,bo),s(te,Ns),s(Ns,Eo),s(te,wo),s(y,ko),s(y,ae),s(ae,Ls),s(Ls,qo),s(ae,jo),s(ae,Ms),s(Ms,yo),s(ae,Po),s(y,$o),s(y,ie),s(ie,Fs),s(Fs,Co),s(ie,zo),s(ie,Ys),s(Ys,Do),s(ie,Oo),s(y,Io),s(y,oe),s(oe,Qs),s(Qs,xo),s(oe,So),s(oe,Gs),s(Gs,To),s(oe,Ao),Rt=!0},p:nn,i(e){Rt||(v(ce.$$.fragment,e),v(ue.$$.fragment,e),v(de.$$.fragment,e),v(me.$$.fragment,e),v(fe.$$.fragment,e),v(_e.$$.fragment,e),v(he.$$.fragment,e),v(ge.$$.fragment,e),v(ve.$$.fragment,e),v(be.$$.fragment,e),v(Ee.$$.fragment,e),v(we.$$.fragment,e),v(ke.$$.fragment,e),v(qe.$$.fragment,e),Rt=!0)},o(e){b(ce.$$.fragment,e),b(ue.$$.fragment,e),b(de.$$.fragment,e),b(me.$$.fragment,e),b(fe.$$.fragment,e),b(_e.$$.fragment,e),b(he.$$.fragment,e),b(ge.$$.fragment,e),b(ve.$$.fragment,e),b(be.$$.fragment,e),b(Ee.$$.fragment,e),b(we.$$.fragment,e),b(ke.$$.fragment,e),b(qe.$$.fragment,e),Rt=!1},d(e){t(A),e&&t(Vs),e&&t(R),E(ce),e&&t(Ws),e&&t(H),e&&t(Zs),e&&t(z),e&&t(et),e&&t(k),e&&t(st),e&&t(m),e&&t(tt),E(ue,e),e&&t(at),e&&t($e),e&&t(it),e&&t(N),e&&t(ot),e&&t($),e&&t(lt),e&&t(L),e&&t(nt),e&&t(C),e&&t(rt),e&&t(w),e&&t(pt),e&&t(U),e&&t(ct),E(de,e),e&&t(ut),e&&t(q),e&&t(dt),E(me,e),e&&t(mt),e&&t(Ce),e&&t(ft),e&&t(M),E(fe),e&&t(_t),e&&t(D),e&&t(ht),E(_e,e),e&&t(gt),e&&t(J),e&&t(vt),E(he,e),e&&t(bt),e&&t(F),E(ge),e&&t(Et),e&&t(K),e&&t(wt),E(ve,e),e&&t(kt),e&&t(V),e&&t(qt),E(be,e),e&&t(jt),e&&t(W),e&&t(yt),E(Ee,e),e&&t(Pt),e&&t(O),e&&t($t),E(we,e),e&&t(Ct),e&&t(f),e&&t(zt),E(ke,e),e&&t(Dt),e&&t(Y),E(qe),e&&t(Ot),e&&t(I),e&&t(It),e&&t(ee),e&&t(xt),e&&t(j),e&&t(St),e&&t(x),e&&t(Tt),e&&t(se),e&&t(At),e&&t(y)}}}const cn={local:"come-creare-una-pipeline-personalizzata",sections:[{local:"aggiungilo-alla-lista-dei-tasks-supportati",title:"Aggiungilo alla lista dei tasks supportati"},{local:"condividi-la-tua-pipeline-sullhub",title:"Condividi la tua pipeline sull'Hub"},{local:"aggiungere-la-pipeline-a-transformers",title:"Aggiungere la pipeline a Transformers"}],title:"Come creare una pipeline personalizzata?"};function un(Ro){return rn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _n extends tn{constructor(A){super();an(this,A,un,pn,on,{})}}export{_n as default,cn as metadata};
