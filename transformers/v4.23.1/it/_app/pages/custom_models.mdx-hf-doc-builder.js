import{S as qr,i as Cr,s as jr,e as s,k as d,w as _,t as l,M as Pr,c as n,d as i,m as p,a as r,x as h,h as t,b as u,G as o,g as c,y as v,q as g,o as b,B as z,v as Ar}from"../chunks/vendor-hf-doc-builder.js";import{T as Ks}from"../chunks/Tip-hf-doc-builder.js";import{I as zo}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as w}from"../chunks/CodeBlock-hf-doc-builder.js";function Rr(Y){let m,E;return{c(){m=s("p"),E=l("Se il tuo modello \xE8 molto simile a un modello all\u2019interno della libreria, puoi ri-usare la stessa configurazione di quel modello.")},l(f){m=n(f,"P",{});var $=r(m);E=t($,"Se il tuo modello \xE8 molto simile a un modello all\u2019interno della libreria, puoi ri-usare la stessa configurazione di quel modello."),$.forEach(i)},m(f,$){c(f,m,$),o(m,E)},d(f){f&&i(m)}}}function Mr(Y){let m,E;return{c(){m=s("p"),E=l("Questa API \xE8 sperimentale e potrebbe avere alcuni cambiamenti nei prossimi rilasci.")},l(f){m=n(f,"P",{});var $=r(m);E=t($,"Questa API \xE8 sperimentale e potrebbe avere alcuni cambiamenti nei prossimi rilasci."),$.forEach(i)},m(f,$){c(f,m,$),o(m,E)},d(f){f&&i(m)}}}function Ir(Y){let m,E,f,$,Q;return{c(){m=s("p"),E=l(`Se stai copiando i file relativi alla modellazione della libreria, dovrai sostituire tutti gli import relativi in cima al file con import del
pacchetto `),f=s("code"),$=l("transformers"),Q=l(".")},l(C){m=n(C,"P",{});var I=r(m);E=t(I,`Se stai copiando i file relativi alla modellazione della libreria, dovrai sostituire tutti gli import relativi in cima al file con import del
pacchetto `),f=n(I,"CODE",{});var Z=r(f);$=t(Z,"transformers"),Z.forEach(i),Q=t(I,"."),I.forEach(i)},m(C,I){c(C,m,I),o(m,E),o(m,f),o(f,$),o(m,Q)},d(C){C&&i(m)}}}function Or(Y){let m,E,f,$,Q,C,I,Z,Wl,Ai,Ge,Xl,Ri,O,Yl,be,Zl,et,$o,ot,it,Mi,G,ee,yo,ze,lt,wo,tt,Ii,Ke,at,Oi,$e,Di,Ve,st,Ni,D,ye,nt,Eo,rt,ct,dt,K,pt,ko,ut,mt,qo,ft,_t,ht,oe,vt,Co,gt,bt,jo,zt,Ti,N,$t,Po,yt,wt,Ao,Et,kt,Si,T,qt,Ro,Ct,jt,Mo,Pt,At,Fi,Je,Rt,Li,we,Hi,j,Mt,Io,It,Ot,Oo,Dt,Nt,Do,Tt,St,Bi,Ee,xi,S,Ft,No,Lt,Ht,To,Bt,xt,Ui,V,ie,So,ke,Ut,Fo,Qt,Qi,F,Gt,Lo,Kt,Vt,Ho,Jt,Wt,Gi,le,Xt,Bo,Yt,Zt,Ki,qe,Vi,We,ea,Ji,Ce,Wi,q,oa,xo,ia,la,Uo,ta,aa,Qo,sa,na,Go,ra,ca,Xi,te,Yi,L,da,Ko,pa,ua,Vo,ma,fa,Zi,Xe,_a,el,je,ol,P,ha,Jo,va,ga,Wo,ba,za,Xo,$a,ya,il,Ye,wa,ll,Pe,tl,H,Ea,Yo,ka,qa,Zo,Ca,ja,al,J,ae,ei,Ae,Pa,oi,Aa,sl,se,nl,y,Ra,ii,Ma,Ia,li,Oa,Da,ti,Na,Ta,ai,Sa,Fa,si,La,Ha,ni,Ba,xa,ri,Ua,Qa,rl,Re,cl,B,Ga,ci,Ka,Va,di,Ja,Wa,dl,ne,pl,Ze,Xa,ul,eo,Ya,ml,Me,fl,re,Za,pi,es,os,_l,Ie,hl,ce,is,ui,ls,ts,vl,oo,as,gl,Oe,bl,io,ss,zl,De,$l,lo,ns,yl,Ne,wl,to,rs,El,Te,kl,A,cs,mi,ds,ps,fi,us,ms,Se,fs,_s,ql,de,hs,ao,vs,gs,Cl,W,pe,_i,Fe,bs,hi,zs,jl,R,$s,vi,ys,ws,Le,Es,ks,gi,qs,Cs,Pl,He,Al,ue,js,bi,Ps,As,Rl,Be,Ml,so,Rs,Il,X,me,zi,xe,Ms,$i,Is,Ol,no,Os,Dl,x,Ds,yi,Ns,Ts,wi,Ss,Fs,Nl,Ue,Tl,M,Ls,Ei,Hs,Bs,ki,xs,Us,qi,Qs,Gs,Sl;return C=new zo({}),ze=new zo({}),$e=new w({props:{code:`from transformers import PretrainedConfig
from typing import List


class ResnetConfig(PretrainedConfig):
    model_type = "resnet"

    def __init__(
        self,
        block_type="bottleneck",
        layers: List[int] = [3, 4, 6, 3],
        num_classes: int = 1000,
        input_channels: int = 3,
        cardinality: int = 1,
        base_width: int = 64,
        stem_width: int = 64,
        stem_type: str = "",
        avg_down: bool = False,
        **kwargs,
    ):
        if block_type not in ["basic", "bottleneck"]:
            raise ValueError(f"\`block\` must be 'basic' or bottleneck', got {block}.")
        if stem_type not in ["", "deep", "deep-tiered"]:
            raise ValueError(f"\`stem_type\` must be '', 'deep' or 'deep-tiered', got {block}.")

        self.block_type = block_type
        self.layers = layers
        self.num_classes = num_classes
        self.input_channels = input_channels
        self.cardinality = cardinality
        self.base_width = base_width
        self.stem_width = stem_width
        self.stem_type = stem_type
        self.avg_down = avg_down
        super().__init__(**kwargs)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PretrainedConfig
<span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">List</span>


<span class="hljs-keyword">class</span> <span class="hljs-title class_">ResnetConfig</span>(<span class="hljs-title class_ inherited__">PretrainedConfig</span>):
    model_type = <span class="hljs-string">&quot;resnet&quot;</span>

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">
        self,
        block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>,
        layers: <span class="hljs-type">List</span>[<span class="hljs-built_in">int</span>] = [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">6</span>, <span class="hljs-number">3</span>],
        num_classes: <span class="hljs-built_in">int</span> = <span class="hljs-number">1000</span>,
        input_channels: <span class="hljs-built_in">int</span> = <span class="hljs-number">3</span>,
        cardinality: <span class="hljs-built_in">int</span> = <span class="hljs-number">1</span>,
        base_width: <span class="hljs-built_in">int</span> = <span class="hljs-number">64</span>,
        stem_width: <span class="hljs-built_in">int</span> = <span class="hljs-number">64</span>,
        stem_type: <span class="hljs-built_in">str</span> = <span class="hljs-string">&quot;&quot;</span>,
        avg_down: <span class="hljs-built_in">bool</span> = <span class="hljs-literal">False</span>,
        **kwargs,
    </span>):
        <span class="hljs-keyword">if</span> block_type <span class="hljs-keyword">not</span> <span class="hljs-keyword">in</span> [<span class="hljs-string">&quot;basic&quot;</span>, <span class="hljs-string">&quot;bottleneck&quot;</span>]:
            <span class="hljs-keyword">raise</span> ValueError(<span class="hljs-string">f&quot;\`block\` must be &#x27;basic&#x27; or bottleneck&#x27;, got <span class="hljs-subst">{block}</span>.&quot;</span>)
        <span class="hljs-keyword">if</span> stem_type <span class="hljs-keyword">not</span> <span class="hljs-keyword">in</span> [<span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;deep&quot;</span>, <span class="hljs-string">&quot;deep-tiered&quot;</span>]:
            <span class="hljs-keyword">raise</span> ValueError(<span class="hljs-string">f&quot;\`stem_type\` must be &#x27;&#x27;, &#x27;deep&#x27; or &#x27;deep-tiered&#x27;, got <span class="hljs-subst">{block}</span>.&quot;</span>)

        self.block_type = block_type
        self.layers = layers
        self.num_classes = num_classes
        self.input_channels = input_channels
        self.cardinality = cardinality
        self.base_width = base_width
        self.stem_width = stem_width
        self.stem_type = stem_type
        self.avg_down = avg_down
        <span class="hljs-built_in">super</span>().__init__(**kwargs)`}}),we=new w({props:{code:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d_config.save_pretrained("custom-resnet")`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d_config.save_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)`}}),Ee=new w({props:{code:'resnet50d_config = ResnetConfig.from_pretrained("custom-resnet")',highlighted:'resnet50d_config = ResnetConfig.from_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)'}}),ke=new zo({}),qe=new w({props:{code:`from transformers import PreTrainedModel
from timm.models.resnet import BasicBlock, Bottleneck, ResNet
from .configuration_resnet import ResnetConfig


BLOCK_MAPPING = {"basic": BasicBlock, "bottleneck": Bottleneck}


class ResnetModel(PreTrainedModel):
    config_class = ResnetConfig

    def __init__(self, config):
        super().__init__(config)
        block_layer = BLOCK_MAPPING[config.block_type]
        self.model = ResNet(
            block_layer,
            config.layers,
            num_classes=config.num_classes,
            in_chans=config.input_channels,
            cardinality=config.cardinality,
            base_width=config.base_width,
            stem_width=config.stem_width,
            stem_type=config.stem_type,
            avg_down=config.avg_down,
        )

    def forward(self, tensor):
        return self.model.forward_features(tensor)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PreTrainedModel
<span class="hljs-keyword">from</span> timm.models.resnet <span class="hljs-keyword">import</span> BasicBlock, Bottleneck, ResNet
<span class="hljs-keyword">from</span> .configuration_resnet <span class="hljs-keyword">import</span> ResnetConfig


BLOCK_MAPPING = {<span class="hljs-string">&quot;basic&quot;</span>: BasicBlock, <span class="hljs-string">&quot;bottleneck&quot;</span>: Bottleneck}


<span class="hljs-keyword">class</span> <span class="hljs-title class_">ResnetModel</span>(<span class="hljs-title class_ inherited__">PreTrainedModel</span>):
    config_class = ResnetConfig

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, config</span>):
        <span class="hljs-built_in">super</span>().__init__(config)
        block_layer = BLOCK_MAPPING[config.block_type]
        self.model = ResNet(
            block_layer,
            config.layers,
            num_classes=config.num_classes,
            in_chans=config.input_channels,
            cardinality=config.cardinality,
            base_width=config.base_width,
            stem_width=config.stem_width,
            stem_type=config.stem_type,
            avg_down=config.avg_down,
        )

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">forward</span>(<span class="hljs-params">self, tensor</span>):
        <span class="hljs-keyword">return</span> self.model.forward_features(tensor)`}}),Ce=new w({props:{code:`class ResnetModelForImageClassification(PreTrainedModel):
    config_class = ResnetConfig

    def __init__(self, config):
        super().__init__(config)
        block_layer = BLOCK_MAPPING[config.block_type]
        self.model = ResNet(
            block_layer,
            config.layers,
            num_classes=config.num_classes,
            in_chans=config.input_channels,
            cardinality=config.cardinality,
            base_width=config.base_width,
            stem_width=config.stem_width,
            stem_type=config.stem_type,
            avg_down=config.avg_down,
        )

    def forward(self, tensor, labels=None):
        logits = self.model(tensor)
        if labels is not None:
            loss = torch.nn.cross_entropy(logits, labels)
            return {"loss": loss, "logits": logits}
        return {"logits": logits}`,highlighted:`<span class="hljs-keyword">class</span> <span class="hljs-title class_">ResnetModelForImageClassification</span>(<span class="hljs-title class_ inherited__">PreTrainedModel</span>):
    config_class = ResnetConfig

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, config</span>):
        <span class="hljs-built_in">super</span>().__init__(config)
        block_layer = BLOCK_MAPPING[config.block_type]
        self.model = ResNet(
            block_layer,
            config.layers,
            num_classes=config.num_classes,
            in_chans=config.input_channels,
            cardinality=config.cardinality,
            base_width=config.base_width,
            stem_width=config.stem_width,
            stem_type=config.stem_type,
            avg_down=config.avg_down,
        )

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">forward</span>(<span class="hljs-params">self, tensor, labels=<span class="hljs-literal">None</span></span>):
        logits = self.model(tensor)
        <span class="hljs-keyword">if</span> labels <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> <span class="hljs-literal">None</span>:
            loss = torch.nn.cross_entropy(logits, labels)
            <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;loss&quot;</span>: loss, <span class="hljs-string">&quot;logits&quot;</span>: logits}
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;logits&quot;</span>: logits}`}}),te=new Ks({props:{$$slots:{default:[Rr]},$$scope:{ctx:Y}}}),je=new w({props:{code:"resnet50d = ResnetModelForImageClassification(resnet50d_config)",highlighted:"resnet50d = ResnetModelForImageClassification(resnet50d_config)"}}),Pe=new w({props:{code:`import timm

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`,highlighted:`<span class="hljs-keyword">import</span> timm

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),Ae=new zo({}),se=new Ks({props:{warning:!0,$$slots:{default:[Mr]},$$scope:{ctx:Y}}}),Re=new w({props:{code:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.py
    \u251C\u2500\u2500 configuration_resnet.py
    \u2514\u2500\u2500 modeling_resnet.py`,highlighted:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.<span class="hljs-keyword">py</span>
    \u251C\u2500\u2500 configuration_resnet.<span class="hljs-keyword">py</span>
    \u2514\u2500\u2500 modeling_resnet.<span class="hljs-keyword">py</span>`}}),ne=new Ks({props:{warning:!0,$$slots:{default:[Ir]},$$scope:{ctx:Y}}}),Me=new w({props:{code:`from resnet_model.configuration_resnet import ResnetConfig
from resnet_model.modeling_resnet import ResnetModel, ResnetModelForImageClassification`,highlighted:`<span class="hljs-keyword">from</span> resnet_model.configuration_resnet <span class="hljs-keyword">import</span> ResnetConfig
<span class="hljs-keyword">from</span> resnet_model.modeling_resnet <span class="hljs-keyword">import</span> ResnetModel, ResnetModelForImageClassification`}}),Ie=new w({props:{code:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class("AutoModel")
ResnetModelForImageClassification.register_for_auto_class("AutoModelForImageClassification")`,highlighted:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class(<span class="hljs-string">&quot;AutoModel&quot;</span>)
ResnetModelForImageClassification.register_for_auto_class(<span class="hljs-string">&quot;AutoModelForImageClassification&quot;</span>)`}}),Oe=new w({props:{code:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),De=new w({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}}),Ne=new w({props:{code:`from huggingface_hub import notebook_login

notebook_login()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),Te=new w({props:{code:'resnet50d.push_to_hub("custom-resnet50d")',highlighted:'resnet50d.push_to_hub(<span class="hljs-string">&quot;custom-resnet50d&quot;</span>)'}}),Fe=new zo({}),He=new w({props:{code:`from transformers import AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained("sgugger/custom-resnet50d", trust_remote_code=True)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained(<span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>)`}}),Be=new w({props:{code:`commit_hash = "ed94a7c6247d8aedce4647f00f20de6875b5b292"
model = AutoModelForImageClassification.from_pretrained(
    "sgugger/custom-resnet50d", trust_remote_code=True, revision=commit_hash
)`,highlighted:`commit_hash = <span class="hljs-string">&quot;ed94a7c6247d8aedce4647f00f20de6875b5b292&quot;</span>
model = AutoModelForImageClassification.from_pretrained(
    <span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>, revision=commit_hash
)`}}),xe=new zo({}),Ue=new w({props:{code:`from transformers import AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register("resnet", ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register(<span class="hljs-string">&quot;resnet&quot;</span>, ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification)`}}),{c(){m=s("meta"),E=d(),f=s("h1"),$=s("a"),Q=s("span"),_(C.$$.fragment),I=d(),Z=s("span"),Wl=l("Condividere modelli personalizzati"),Ai=l(`

La libreria \u{1F917} Transformers \xE8 studiata per essere facilmente estendibile. Il codice di ogni modello \xE8 interamente 
situato in una sottocartella del repository senza alcuna astrazione, perci\xF2 puoi facilmente copiare il file di un 
modello e modificarlo in base ai tuoi bisogni.
`),Ge=s("p"),Xl=l(`Se stai scrivendo un nuovo modello, potrebbe essere pi\xF9 semplice iniziare da zero. In questo tutorial, ti mostreremo
come scrivere un modello personalizzato e la sua configurazione in modo che possa essere utilizzato all\u2019interno di
Transformers, e come condividerlo con la community (assieme al relativo codice) cos\xEC che tutte le persone possano usarlo, anche
se non presente nella libreria \u{1F917} Transformers.`),Ri=d(),O=s("p"),Yl=l(`Illustriamo tutto questo su un modello ResNet, avvolgendo la classe ResNet della
`),be=s("a"),Zl=l("libreria timm"),et=l(" in un "),$o=s("code"),ot=l("PreTrainedModel"),it=l("."),Mi=d(),G=s("h2"),ee=s("a"),yo=s("span"),_(ze.$$.fragment),lt=d(),wo=s("span"),tt=l("Scrivere una configurazione personalizzata"),Ii=l(`

Prima di iniziare a lavorare al modello, scriviamone la configurazione. La configurazione di un modello \xE8 un oggetto
che contiene tutte le informazioni necessarie per la build del modello. Come vedremo nella prossima sezione, il 
modello pu\xF2 soltanto essere inizializzato tramite \`config\`, per cui dovremo rendere tale oggetto pi\xF9 completo possibile.
`),Ke=s("p"),at=l(`Nel nostro esempio, prenderemo un paio di argomenti della classe ResNet che potremmo voler modificare.
Configurazioni differenti ci daranno quindi i differenti possibili tipi di ResNet. Salveremo poi questi argomenti,
dopo averne controllato la validit\xE0.`),Oi=d(),_($e.$$.fragment),Di=d(),Ve=s("p"),st=l("Le tre cose pi\xF9 importanti da ricordare quando scrivi le tue configurazioni sono le seguenti:"),Ni=d(),D=s("ul"),ye=s("li"),nt=l("Devi ereditare da "),Eo=s("code"),rt=l("Pretrainedconfig"),ct=l(","),dt=d(),K=s("li"),pt=l("Il metodo "),ko=s("code"),ut=l("__init__"),mt=l(" del tuo "),qo=s("code"),ft=l("Pretrainedconfig"),_t=l(" deve accettare i kwargs,"),ht=d(),oe=s("li"),vt=l("I "),Co=s("code"),gt=l("kwargs"),bt=l(" devono essere passati alla superclass "),jo=s("code"),zt=l("__init__"),Ti=d(),N=s("p"),$t=l(`L\u2019eredit\xE0 \xE8 importante per assicurarsi di ottenere tutte le funzionalit\xE0 della libreria \u{1F917} transformers,
mentre gli altri due vincoli derivano dal fatto che un `),Po=s("code"),yt=l("Pretrainedconfig"),wt=l(` ha pi\xF9 campi di quelli che stai settando.
Quando ricarichi una config da un metodo `),Ao=s("code"),Et=l("from_pretrained"),kt=l(`, questi campi devono essere accettati dalla tua config e
poi inviati alla superclasse.`),Si=d(),T=s("p"),qt=l("Definire un "),Ro=s("code"),Ct=l("model_type"),jt=l(" per la tua configurazione (qua "),Mo=s("code"),Pt=l("model_type = \u201Cresnet\u201D"),At=l(`) non \xE8 obbligatorio, a meno che tu
non voglia registrare il modello con le classi Auto (vedi l\u2019ultima sezione).`),Fi=d(),Je=s("p"),Rt=l(`Una volta completato, puoi facilmente creare e salvare la tua configurazione come faresti con ogni altra configurazione
di modelli della libreria. Ecco come possiamo creare la config di un resnet50d e salvarlo:`),Li=d(),_(we.$$.fragment),Hi=d(),j=s("p"),Mt=l("Questo salver\xE0 un file chiamato "),Io=s("code"),It=l("config.json"),Ot=l(" all\u2019interno della cartella "),Oo=s("code"),Dt=l("custom-resnet"),Nt=l(`. Potrai poi ricaricare la tua
config con il metodo `),Do=s("code"),Tt=l("from_pretrained"),St=l("."),Bi=d(),_(Ee.$$.fragment),xi=d(),S=s("p"),Ft=l("Puoi anche usare qualunque altro metodo della classe "),No=s("code"),Lt=l("PretrainedConfig"),Ht=l(", come "),To=s("code"),Bt=l("push_to_hub()"),xt=l(`
per caricare direttamente la tua configurazione nell\u2019hub.`),Ui=d(),V=s("h2"),ie=s("a"),So=s("span"),_(ke.$$.fragment),Ut=d(),Fo=s("span"),Qt=l("Scrivere un modello personalizzato"),Qi=d(),F=s("p"),Gt=l(`Ora che abbiamo la nostra configurazione ResNet, possiamo continuare a scrivere il modello. In realt\xE0, ne scriveremo
due: uno che estrae le features nascoste da una batch di immagini (come `),Lo=s("code"),Kt=l("BertModel"),Vt=l(`) e uno che \xE8 utilizzabile per
la classificazione di immagini (come `),Ho=s("code"),Jt=l("BertModelForSequenceClassification"),Wt=l(")."),Gi=d(),le=s("p"),Xt=l(`Come abbiamo menzionato in precedenza, scriveremo soltanto un wrapper del modello, per mantenerlo semplice ai fini di
questo esempio. L\u2019unica cosa che dobbiamo fare prima di scrivere questa classe \xE8 una mappatura fra i tipi di blocco e
le vere classi dei blocchi. Successivamente il modello \xE8 definito tramite la configurazione, passando tutto quanto alla
classe `),Bo=s("code"),Yt=l("ResNet"),Zt=l("."),Ki=d(),_(qe.$$.fragment),Vi=d(),We=s("p"),ea=l("Per il modello che classificher\xE0 le immagini, cambiamo soltanto il metodo forward:"),Ji=d(),_(Ce.$$.fragment),Wi=d(),q=s("p"),oa=l("Nota come, in entrambi i casi, ereditiamo da "),xo=s("code"),ia=l("PreTrainedModel"),la=l(` e chiamiamo l\u2019inizializzazione della superclasse
con il metodo `),Uo=s("code"),ta=l("config"),aa=l(" (un po\u2019 come quando scrivi un normale "),Qo=s("code"),sa=l("torch.nn.Module"),na=l("). La riga che imposta la  "),Go=s("code"),ra=l("config_class"),ca=l(`
non \xE8 obbligatoria, a meno che tu non voglia registrare il modello con le classi Auto (vedi l\u2019ultima sezione).`),Xi=d(),_(te.$$.fragment),Yi=d(),L=s("p"),da=l(`Puoi fare in modo che il tuo modello restituisca in output qualunque cosa tu voglia, ma far restituire un dizionario
come abbiamo fatto per `),Ko=s("code"),pa=l("ResnetModelForImageClassification"),ua=l(`, con la funzione di perdita inclusa quando vengono passate le labels,
render\xE0 il tuo modello direttamente utilizzabile all\u2019interno della classe `),Vo=s("code"),ma=l("Trainer"),fa=l(`. Utilizzare altri formati di output va bene
se hai in progetto di utilizzare un tuo loop di allenamento, o se utilizzerai un\u2019altra libreria per l\u2019addestramento.`),Zi=d(),Xe=s("p"),_a=l("Ora che abbiamo la classe del nostro modello, creiamone uno:"),el=d(),_(je.$$.fragment),ol=d(),P=s("p"),ha=l("Ribadiamo, puoi usare qualunque metodo dei "),Jo=s("code"),va=l("PreTrainedModel"),ga=l(", come "),Wo=s("code"),ba=l("save_pretrained()"),za=l(` o
`),Xo=s("code"),$a=l("push_to_hub()"),ya=l(`. Utilizzeremo quest\u2019ultimo nella prossima sezione, e vedremo come caricare i pesi del
modello assieme al codice del modello stesso. Ma prima, carichiamo alcuni pesi pre-allenati all\u2019interno del nostro modello.`),il=d(),Ye=s("p"),wa=l(`Nel tuo caso specifico, probabilmente allenerai il tuo modello sui tuoi dati. Per velocizzare in questo tutorial,
utilizzeremo la versione pre-allenata del resnet50d. Dato che il nostro modello \xE8 soltanto un wrapper attorno a quel modello,
sar\xE0 facile trasferirne i pesi:`),ll=d(),_(Pe.$$.fragment),tl=d(),H=s("p"),Ea=l("Vediamo adesso come assicurarci che quando facciamo "),Yo=s("code"),ka=l("save_pretrained()"),qa=l(" o "),Zo=s("code"),Ca=l("push_to_hub()"),ja=l(`,
il codice del modello venga salvato.`),al=d(),J=s("h2"),ae=s("a"),ei=s("span"),_(Ae.$$.fragment),Pa=d(),oi=s("span"),Aa=l("Inviare il codice all'Hub"),sl=d(),_(se.$$.fragment),nl=d(),y=s("p"),Ra=l("Innanzitutto, assicurati che il tuo modello sia completamente definito in un file "),ii=s("code"),Ma=l(".py"),Ia=l(`. Pu\xF2 sfruttare import relativi
ad altri file, purch\xE8 questi siano nella stessa directory (non supportiamo ancora sotto-moduli per questa funzionalit\xE0).
Per questo esempio, definiremo un file `),li=s("code"),Oa=l("modeling_resnet.py"),Da=l(" e un file "),ti=s("code"),Na=l("configuration_resnet.py"),Ta=l(` in una cartella dell\u2019attuale
working directory chiamata `),ai=s("code"),Sa=l("resnet_model"),Fa=l(". Il file configuration contiene il codice per "),si=s("code"),La=l("ResnetConfig"),Ha=l(` e il file modeling
contiene il codice di `),ni=s("code"),Ba=l("ResnetModel"),xa=l(" e "),ri=s("code"),Ua=l("ResnetModelForImageClassification"),Qa=l("."),rl=d(),_(Re.$$.fragment),cl=d(),B=s("p"),Ga=l("Il file "),ci=s("code"),Ka=l("__init__.py"),Va=l(" pu\xF2 essere vuoto, serve solo perch\xE8 Python capisca che "),di=s("code"),Ja=l("resnet_model"),Wa=l(" pu\xF2 essere utilizzato come un modulo."),dl=d(),_(ne.$$.fragment),pl=d(),Ze=s("p"),Xa=l("Nota che puoi ri-utilizzare (o usare come sottoclassi) un modello/configurazione esistente."),ul=d(),eo=s("p"),Ya=l(`Per condividere il tuo modello con la community, segui questi passi: prima importa il modello ResNet e la sua configurazione
dai nuovi file creati:`),ml=d(),_(Me.$$.fragment),fl=d(),re=s("p"),Za=l(`Dopodich\xE8 dovrai dire alla libreria che vuoi copiare i file con il codice di quegli oggetti quando utilizzi il metodo
`),pi=s("code"),es=l("save_pretrained"),os=l(" e registrarli in modo corretto con una Auto classe (specialmente per i modelli). Utilizza semplicemente:"),_l=d(),_(Ie.$$.fragment),hl=d(),ce=s("p"),is=l(`Nota che non c\u2019\xE8 bisogno di specificare una Auto classe per la configurazione (c\u2019\xE8 solo una Auto classe per le configurazioni,
`),ui=s("code"),ls=l("AutoConfig"),ts=l(`, ma \xE8 diversa per i modelli). Il tuo modello personalizato potrebbe essere utilizzato per diverse tasks,
per cui devi specificare quale delle classi Auto \xE8 quella corretta per il tuo modello.`),vl=d(),oo=s("p"),as=l("Successivamente, creiamo i modelli e la config come abbiamo fatto in precedenza:"),gl=d(),_(Oe.$$.fragment),bl=d(),io=s("p"),ss=l("Adesso, per inviare il modello all\u2019Hub, assicurati di aver effettuato l\u2019accesso. Lancia dal tuo terminale:"),zl=d(),_(De.$$.fragment),$l=d(),lo=s("p"),ns=l("O da un notebook:"),yl=d(),_(Ne.$$.fragment),wl=d(),to=s("p"),rs=l("Potrai poi inviare il tutto sul tuo profilo (o di un\u2019organizzazione di cui fai parte) in questo modo:"),El=d(),_(Te.$$.fragment),kl=d(),A=s("p"),cs=l("Oltre ai pesi del modello e alla configurazione in formato json, questo ha anche copiato i file "),mi=s("code"),ds=l(".py"),ps=l(` modeling e
configuration all\u2019interno della cartella `),fi=s("code"),us=l("custom-resnet50d"),ms=l(` e ha caricato i risultati sull\u2019Hub. Puoi controllare
i risultati in questa `),Se=s("a"),fs=l("model repo"),_s=l("."),ql=d(),de=s("p"),hs=l("Puoi controllare il tutorial di condivisione "),ao=s("a"),vs=l("tutorial di condivisione"),gs=l(` per pi\xF9 informazioni sul
metodo con cui inviare all\u2019Hub.`),Cl=d(),W=s("h2"),pe=s("a"),_i=s("span"),_(Fe.$$.fragment),bs=d(),hi=s("span"),zs=l("Usare un modello con codice personalizzato"),jl=d(),R=s("p"),$s=l(`Puoi usare ogni configurazione, modello o tokenizer con file di codice personalizzati nella sua repository
con le classi Auto e il metodo `),vi=s("code"),ys=l("from_pretrained"),ws=l(`. Tutti i files e il codice caricati sull\u2019Hub sono scansionati da malware
(fai riferimento alla documentazione `),Le=s("a"),Es=l("Hub security"),ks=l(` per pi\xF9 informazioni),
ma dovresti comunque assicurarti dell\u2019affidabilit\xE0 del codice e dell\u2019autore per evitare di eseguire codice dannoso sulla tua macchina.
Imposta `),gi=s("code"),qs=l("trust_remote_code=True"),Cs=l(" per usare un modello con codice personalizzato:"),Pl=d(),_(He.$$.fragment),Al=d(),ue=s("p"),js=l("Inoltre, raccomandiamo fortemente di passare un hash del commit come "),bi=s("code"),Ps=l("revision"),As=l(` per assicurarti che le autrici o gli autori del modello
non abbiano modificato il codice con alcune nuove righe dannose (a meno che non ti fidi completamente della fonte):`),Rl=d(),_(Be.$$.fragment),Ml=d(),so=s("p"),Rs=l(`Nota che quando cerchi la storia dei commit della repo del modello sull\u2019Hub, c\u2019\xE8 un bottone con cui facilmente copiare il
commit hash di ciascun commit.`),Il=d(),X=s("h2"),me=s("a"),zi=s("span"),_(xe.$$.fragment),Ms=d(),$i=s("span"),Is=l("Registrare un modello con codice personalizzato nelle classi Auto"),Ol=d(),no=s("p"),Os=l(`Se stai scrivendo una libreria che estende \u{1F917} Transformers, potresti voler estendere le classi Auto per includere il tuo modello.
Questo \xE8 diverso dall\u2019inviare codice nell\u2019Hub: gli utenti dovranno importare la tua libreria per ottenere il modello personalizzato
(anzich\xE8 scaricare automaticamente il modello dall\u2019Hub).`),Dl=d(),x=s("p"),Ds=l("Finch\xE8 il tuo file di configurazione ha un attributo "),yi=s("code"),Ns=l("model_type"),Ts=l(` diverso dai model types esistenti, e finch\xE8 le tue
classi modello hanno i corretti attributi `),wi=s("code"),Ss=l("config_class"),Fs=l(", potrai semplicemente aggiungerli alle classi Auto come segue:"),Nl=d(),_(Ue.$$.fragment),Tl=d(),M=s("p"),Ls=l("Nota che il primo argomento utilizzato quando registri la configurazione di un modello personalizzato con "),Ei=s("code"),Hs=l("AutoConfig"),Bs=l(`
deve corrispondere al `),ki=s("code"),xs=l("model_type"),Us=l(` della tua configurazione personalizzata, ed il primo argomento utilizzato quando
registri i tuoi modelli personalizzati in una qualunque classe Auto del modello deve corrispondere alla `),qi=s("code"),Qs=l("config_class"),Gs=l(`
di quei modelli.`),this.h()},l(e){const a=Pr('[data-svelte="svelte-1phssyn"]',document.head);m=n(a,"META",{name:!0,content:!0}),a.forEach(i),E=p(e),f=n(e,"H1",{class:!0});var Qe=r(f);$=n(Qe,"A",{id:!0,class:!0,href:!0});var Ci=r($);Q=n(Ci,"SPAN",{});var ji=r(Q);h(C.$$.fragment,ji),ji.forEach(i),Ci.forEach(i),I=p(Qe),Z=n(Qe,"SPAN",{});var Vs=r(Z);Wl=t(Vs,"Condividere modelli personalizzati"),Vs.forEach(i),Qe.forEach(i),Ai=t(e,`

La libreria \u{1F917} Transformers \xE8 studiata per essere facilmente estendibile. Il codice di ogni modello \xE8 interamente 
situato in una sottocartella del repository senza alcuna astrazione, perci\xF2 puoi facilmente copiare il file di un 
modello e modificarlo in base ai tuoi bisogni.
`),Ge=n(e,"P",{});var Js=r(Ge);Xl=t(Js,`Se stai scrivendo un nuovo modello, potrebbe essere pi\xF9 semplice iniziare da zero. In questo tutorial, ti mostreremo
come scrivere un modello personalizzato e la sua configurazione in modo che possa essere utilizzato all\u2019interno di
Transformers, e come condividerlo con la community (assieme al relativo codice) cos\xEC che tutte le persone possano usarlo, anche
se non presente nella libreria \u{1F917} Transformers.`),Js.forEach(i),Ri=p(e),O=n(e,"P",{});var ro=r(O);Yl=t(ro,`Illustriamo tutto questo su un modello ResNet, avvolgendo la classe ResNet della
`),be=n(ro,"A",{href:!0,rel:!0});var Ws=r(be);Zl=t(Ws,"libreria timm"),Ws.forEach(i),et=t(ro," in un "),$o=n(ro,"CODE",{});var Xs=r($o);ot=t(Xs,"PreTrainedModel"),Xs.forEach(i),it=t(ro,"."),ro.forEach(i),Mi=p(e),G=n(e,"H2",{class:!0});var Fl=r(G);ee=n(Fl,"A",{id:!0,class:!0,href:!0});var Ys=r(ee);yo=n(Ys,"SPAN",{});var Zs=r(yo);h(ze.$$.fragment,Zs),Zs.forEach(i),Ys.forEach(i),lt=p(Fl),wo=n(Fl,"SPAN",{});var en=r(wo);tt=t(en,"Scrivere una configurazione personalizzata"),en.forEach(i),Fl.forEach(i),Ii=t(e,`

Prima di iniziare a lavorare al modello, scriviamone la configurazione. La configurazione di un modello \xE8 un oggetto
che contiene tutte le informazioni necessarie per la build del modello. Come vedremo nella prossima sezione, il 
modello pu\xF2 soltanto essere inizializzato tramite \`config\`, per cui dovremo rendere tale oggetto pi\xF9 completo possibile.
`),Ke=n(e,"P",{});var on=r(Ke);at=t(on,`Nel nostro esempio, prenderemo un paio di argomenti della classe ResNet che potremmo voler modificare.
Configurazioni differenti ci daranno quindi i differenti possibili tipi di ResNet. Salveremo poi questi argomenti,
dopo averne controllato la validit\xE0.`),on.forEach(i),Oi=p(e),h($e.$$.fragment,e),Di=p(e),Ve=n(e,"P",{});var ln=r(Ve);st=t(ln,"Le tre cose pi\xF9 importanti da ricordare quando scrivi le tue configurazioni sono le seguenti:"),ln.forEach(i),Ni=p(e),D=n(e,"UL",{});var co=r(D);ye=n(co,"LI",{});var Ll=r(ye);nt=t(Ll,"Devi ereditare da "),Eo=n(Ll,"CODE",{});var tn=r(Eo);rt=t(tn,"Pretrainedconfig"),tn.forEach(i),ct=t(Ll,","),Ll.forEach(i),dt=p(co),K=n(co,"LI",{});var po=r(K);pt=t(po,"Il metodo "),ko=n(po,"CODE",{});var an=r(ko);ut=t(an,"__init__"),an.forEach(i),mt=t(po," del tuo "),qo=n(po,"CODE",{});var sn=r(qo);ft=t(sn,"Pretrainedconfig"),sn.forEach(i),_t=t(po," deve accettare i kwargs,"),po.forEach(i),ht=p(co),oe=n(co,"LI",{});var Pi=r(oe);vt=t(Pi,"I "),Co=n(Pi,"CODE",{});var nn=r(Co);gt=t(nn,"kwargs"),nn.forEach(i),bt=t(Pi," devono essere passati alla superclass "),jo=n(Pi,"CODE",{});var rn=r(jo);zt=t(rn,"__init__"),rn.forEach(i),Pi.forEach(i),co.forEach(i),Ti=p(e),N=n(e,"P",{});var uo=r(N);$t=t(uo,`L\u2019eredit\xE0 \xE8 importante per assicurarsi di ottenere tutte le funzionalit\xE0 della libreria \u{1F917} transformers,
mentre gli altri due vincoli derivano dal fatto che un `),Po=n(uo,"CODE",{});var cn=r(Po);yt=t(cn,"Pretrainedconfig"),cn.forEach(i),wt=t(uo,` ha pi\xF9 campi di quelli che stai settando.
Quando ricarichi una config da un metodo `),Ao=n(uo,"CODE",{});var dn=r(Ao);Et=t(dn,"from_pretrained"),dn.forEach(i),kt=t(uo,`, questi campi devono essere accettati dalla tua config e
poi inviati alla superclasse.`),uo.forEach(i),Si=p(e),T=n(e,"P",{});var mo=r(T);qt=t(mo,"Definire un "),Ro=n(mo,"CODE",{});var pn=r(Ro);Ct=t(pn,"model_type"),pn.forEach(i),jt=t(mo," per la tua configurazione (qua "),Mo=n(mo,"CODE",{});var un=r(Mo);Pt=t(un,"model_type = \u201Cresnet\u201D"),un.forEach(i),At=t(mo,`) non \xE8 obbligatorio, a meno che tu
non voglia registrare il modello con le classi Auto (vedi l\u2019ultima sezione).`),mo.forEach(i),Fi=p(e),Je=n(e,"P",{});var mn=r(Je);Rt=t(mn,`Una volta completato, puoi facilmente creare e salvare la tua configurazione come faresti con ogni altra configurazione
di modelli della libreria. Ecco come possiamo creare la config di un resnet50d e salvarlo:`),mn.forEach(i),Li=p(e),h(we.$$.fragment,e),Hi=p(e),j=n(e,"P",{});var fe=r(j);Mt=t(fe,"Questo salver\xE0 un file chiamato "),Io=n(fe,"CODE",{});var fn=r(Io);It=t(fn,"config.json"),fn.forEach(i),Ot=t(fe," all\u2019interno della cartella "),Oo=n(fe,"CODE",{});var _n=r(Oo);Dt=t(_n,"custom-resnet"),_n.forEach(i),Nt=t(fe,`. Potrai poi ricaricare la tua
config con il metodo `),Do=n(fe,"CODE",{});var hn=r(Do);Tt=t(hn,"from_pretrained"),hn.forEach(i),St=t(fe,"."),fe.forEach(i),Bi=p(e),h(Ee.$$.fragment,e),xi=p(e),S=n(e,"P",{});var fo=r(S);Ft=t(fo,"Puoi anche usare qualunque altro metodo della classe "),No=n(fo,"CODE",{});var vn=r(No);Lt=t(vn,"PretrainedConfig"),vn.forEach(i),Ht=t(fo,", come "),To=n(fo,"CODE",{});var gn=r(To);Bt=t(gn,"push_to_hub()"),gn.forEach(i),xt=t(fo,`
per caricare direttamente la tua configurazione nell\u2019hub.`),fo.forEach(i),Ui=p(e),V=n(e,"H2",{class:!0});var Hl=r(V);ie=n(Hl,"A",{id:!0,class:!0,href:!0});var bn=r(ie);So=n(bn,"SPAN",{});var zn=r(So);h(ke.$$.fragment,zn),zn.forEach(i),bn.forEach(i),Ut=p(Hl),Fo=n(Hl,"SPAN",{});var $n=r(Fo);Qt=t($n,"Scrivere un modello personalizzato"),$n.forEach(i),Hl.forEach(i),Qi=p(e),F=n(e,"P",{});var _o=r(F);Gt=t(_o,`Ora che abbiamo la nostra configurazione ResNet, possiamo continuare a scrivere il modello. In realt\xE0, ne scriveremo
due: uno che estrae le features nascoste da una batch di immagini (come `),Lo=n(_o,"CODE",{});var yn=r(Lo);Kt=t(yn,"BertModel"),yn.forEach(i),Vt=t(_o,`) e uno che \xE8 utilizzabile per
la classificazione di immagini (come `),Ho=n(_o,"CODE",{});var wn=r(Ho);Jt=t(wn,"BertModelForSequenceClassification"),wn.forEach(i),Wt=t(_o,")."),_o.forEach(i),Gi=p(e),le=n(e,"P",{});var Bl=r(le);Xt=t(Bl,`Come abbiamo menzionato in precedenza, scriveremo soltanto un wrapper del modello, per mantenerlo semplice ai fini di
questo esempio. L\u2019unica cosa che dobbiamo fare prima di scrivere questa classe \xE8 una mappatura fra i tipi di blocco e
le vere classi dei blocchi. Successivamente il modello \xE8 definito tramite la configurazione, passando tutto quanto alla
classe `),Bo=n(Bl,"CODE",{});var En=r(Bo);Yt=t(En,"ResNet"),En.forEach(i),Zt=t(Bl,"."),Bl.forEach(i),Ki=p(e),h(qe.$$.fragment,e),Vi=p(e),We=n(e,"P",{});var kn=r(We);ea=t(kn,"Per il modello che classificher\xE0 le immagini, cambiamo soltanto il metodo forward:"),kn.forEach(i),Ji=p(e),h(Ce.$$.fragment,e),Wi=p(e),q=n(e,"P",{});var U=r(q);oa=t(U,"Nota come, in entrambi i casi, ereditiamo da "),xo=n(U,"CODE",{});var qn=r(xo);ia=t(qn,"PreTrainedModel"),qn.forEach(i),la=t(U,` e chiamiamo l\u2019inizializzazione della superclasse
con il metodo `),Uo=n(U,"CODE",{});var Cn=r(Uo);ta=t(Cn,"config"),Cn.forEach(i),aa=t(U," (un po\u2019 come quando scrivi un normale "),Qo=n(U,"CODE",{});var jn=r(Qo);sa=t(jn,"torch.nn.Module"),jn.forEach(i),na=t(U,"). La riga che imposta la  "),Go=n(U,"CODE",{});var Pn=r(Go);ra=t(Pn,"config_class"),Pn.forEach(i),ca=t(U,`
non \xE8 obbligatoria, a meno che tu non voglia registrare il modello con le classi Auto (vedi l\u2019ultima sezione).`),U.forEach(i),Xi=p(e),h(te.$$.fragment,e),Yi=p(e),L=n(e,"P",{});var ho=r(L);da=t(ho,`Puoi fare in modo che il tuo modello restituisca in output qualunque cosa tu voglia, ma far restituire un dizionario
come abbiamo fatto per `),Ko=n(ho,"CODE",{});var An=r(Ko);pa=t(An,"ResnetModelForImageClassification"),An.forEach(i),ua=t(ho,`, con la funzione di perdita inclusa quando vengono passate le labels,
render\xE0 il tuo modello direttamente utilizzabile all\u2019interno della classe `),Vo=n(ho,"CODE",{});var Rn=r(Vo);ma=t(Rn,"Trainer"),Rn.forEach(i),fa=t(ho,`. Utilizzare altri formati di output va bene
se hai in progetto di utilizzare un tuo loop di allenamento, o se utilizzerai un\u2019altra libreria per l\u2019addestramento.`),ho.forEach(i),Zi=p(e),Xe=n(e,"P",{});var Mn=r(Xe);_a=t(Mn,"Ora che abbiamo la classe del nostro modello, creiamone uno:"),Mn.forEach(i),el=p(e),h(je.$$.fragment,e),ol=p(e),P=n(e,"P",{});var _e=r(P);ha=t(_e,"Ribadiamo, puoi usare qualunque metodo dei "),Jo=n(_e,"CODE",{});var In=r(Jo);va=t(In,"PreTrainedModel"),In.forEach(i),ga=t(_e,", come "),Wo=n(_e,"CODE",{});var On=r(Wo);ba=t(On,"save_pretrained()"),On.forEach(i),za=t(_e,` o
`),Xo=n(_e,"CODE",{});var Dn=r(Xo);$a=t(Dn,"push_to_hub()"),Dn.forEach(i),ya=t(_e,`. Utilizzeremo quest\u2019ultimo nella prossima sezione, e vedremo come caricare i pesi del
modello assieme al codice del modello stesso. Ma prima, carichiamo alcuni pesi pre-allenati all\u2019interno del nostro modello.`),_e.forEach(i),il=p(e),Ye=n(e,"P",{});var Nn=r(Ye);wa=t(Nn,`Nel tuo caso specifico, probabilmente allenerai il tuo modello sui tuoi dati. Per velocizzare in questo tutorial,
utilizzeremo la versione pre-allenata del resnet50d. Dato che il nostro modello \xE8 soltanto un wrapper attorno a quel modello,
sar\xE0 facile trasferirne i pesi:`),Nn.forEach(i),ll=p(e),h(Pe.$$.fragment,e),tl=p(e),H=n(e,"P",{});var vo=r(H);Ea=t(vo,"Vediamo adesso come assicurarci che quando facciamo "),Yo=n(vo,"CODE",{});var Tn=r(Yo);ka=t(Tn,"save_pretrained()"),Tn.forEach(i),qa=t(vo," o "),Zo=n(vo,"CODE",{});var Sn=r(Zo);Ca=t(Sn,"push_to_hub()"),Sn.forEach(i),ja=t(vo,`,
il codice del modello venga salvato.`),vo.forEach(i),al=p(e),J=n(e,"H2",{class:!0});var xl=r(J);ae=n(xl,"A",{id:!0,class:!0,href:!0});var Fn=r(ae);ei=n(Fn,"SPAN",{});var Ln=r(ei);h(Ae.$$.fragment,Ln),Ln.forEach(i),Fn.forEach(i),Pa=p(xl),oi=n(xl,"SPAN",{});var Hn=r(oi);Aa=t(Hn,"Inviare il codice all'Hub"),Hn.forEach(i),xl.forEach(i),sl=p(e),h(se.$$.fragment,e),nl=p(e),y=n(e,"P",{});var k=r(y);Ra=t(k,"Innanzitutto, assicurati che il tuo modello sia completamente definito in un file "),ii=n(k,"CODE",{});var Bn=r(ii);Ma=t(Bn,".py"),Bn.forEach(i),Ia=t(k,`. Pu\xF2 sfruttare import relativi
ad altri file, purch\xE8 questi siano nella stessa directory (non supportiamo ancora sotto-moduli per questa funzionalit\xE0).
Per questo esempio, definiremo un file `),li=n(k,"CODE",{});var xn=r(li);Oa=t(xn,"modeling_resnet.py"),xn.forEach(i),Da=t(k," e un file "),ti=n(k,"CODE",{});var Un=r(ti);Na=t(Un,"configuration_resnet.py"),Un.forEach(i),Ta=t(k,` in una cartella dell\u2019attuale
working directory chiamata `),ai=n(k,"CODE",{});var Qn=r(ai);Sa=t(Qn,"resnet_model"),Qn.forEach(i),Fa=t(k,". Il file configuration contiene il codice per "),si=n(k,"CODE",{});var Gn=r(si);La=t(Gn,"ResnetConfig"),Gn.forEach(i),Ha=t(k,` e il file modeling
contiene il codice di `),ni=n(k,"CODE",{});var Kn=r(ni);Ba=t(Kn,"ResnetModel"),Kn.forEach(i),xa=t(k," e "),ri=n(k,"CODE",{});var Vn=r(ri);Ua=t(Vn,"ResnetModelForImageClassification"),Vn.forEach(i),Qa=t(k,"."),k.forEach(i),rl=p(e),h(Re.$$.fragment,e),cl=p(e),B=n(e,"P",{});var go=r(B);Ga=t(go,"Il file "),ci=n(go,"CODE",{});var Jn=r(ci);Ka=t(Jn,"__init__.py"),Jn.forEach(i),Va=t(go," pu\xF2 essere vuoto, serve solo perch\xE8 Python capisca che "),di=n(go,"CODE",{});var Wn=r(di);Ja=t(Wn,"resnet_model"),Wn.forEach(i),Wa=t(go," pu\xF2 essere utilizzato come un modulo."),go.forEach(i),dl=p(e),h(ne.$$.fragment,e),pl=p(e),Ze=n(e,"P",{});var Xn=r(Ze);Xa=t(Xn,"Nota che puoi ri-utilizzare (o usare come sottoclassi) un modello/configurazione esistente."),Xn.forEach(i),ul=p(e),eo=n(e,"P",{});var Yn=r(eo);Ya=t(Yn,`Per condividere il tuo modello con la community, segui questi passi: prima importa il modello ResNet e la sua configurazione
dai nuovi file creati:`),Yn.forEach(i),ml=p(e),h(Me.$$.fragment,e),fl=p(e),re=n(e,"P",{});var Ul=r(re);Za=t(Ul,`Dopodich\xE8 dovrai dire alla libreria che vuoi copiare i file con il codice di quegli oggetti quando utilizzi il metodo
`),pi=n(Ul,"CODE",{});var Zn=r(pi);es=t(Zn,"save_pretrained"),Zn.forEach(i),os=t(Ul," e registrarli in modo corretto con una Auto classe (specialmente per i modelli). Utilizza semplicemente:"),Ul.forEach(i),_l=p(e),h(Ie.$$.fragment,e),hl=p(e),ce=n(e,"P",{});var Ql=r(ce);is=t(Ql,`Nota che non c\u2019\xE8 bisogno di specificare una Auto classe per la configurazione (c\u2019\xE8 solo una Auto classe per le configurazioni,
`),ui=n(Ql,"CODE",{});var er=r(ui);ls=t(er,"AutoConfig"),er.forEach(i),ts=t(Ql,`, ma \xE8 diversa per i modelli). Il tuo modello personalizato potrebbe essere utilizzato per diverse tasks,
per cui devi specificare quale delle classi Auto \xE8 quella corretta per il tuo modello.`),Ql.forEach(i),vl=p(e),oo=n(e,"P",{});var or=r(oo);as=t(or,"Successivamente, creiamo i modelli e la config come abbiamo fatto in precedenza:"),or.forEach(i),gl=p(e),h(Oe.$$.fragment,e),bl=p(e),io=n(e,"P",{});var ir=r(io);ss=t(ir,"Adesso, per inviare il modello all\u2019Hub, assicurati di aver effettuato l\u2019accesso. Lancia dal tuo terminale:"),ir.forEach(i),zl=p(e),h(De.$$.fragment,e),$l=p(e),lo=n(e,"P",{});var lr=r(lo);ns=t(lr,"O da un notebook:"),lr.forEach(i),yl=p(e),h(Ne.$$.fragment,e),wl=p(e),to=n(e,"P",{});var tr=r(to);rs=t(tr,"Potrai poi inviare il tutto sul tuo profilo (o di un\u2019organizzazione di cui fai parte) in questo modo:"),tr.forEach(i),El=p(e),h(Te.$$.fragment,e),kl=p(e),A=n(e,"P",{});var he=r(A);cs=t(he,"Oltre ai pesi del modello e alla configurazione in formato json, questo ha anche copiato i file "),mi=n(he,"CODE",{});var ar=r(mi);ds=t(ar,".py"),ar.forEach(i),ps=t(he,` modeling e
configuration all\u2019interno della cartella `),fi=n(he,"CODE",{});var sr=r(fi);us=t(sr,"custom-resnet50d"),sr.forEach(i),ms=t(he,` e ha caricato i risultati sull\u2019Hub. Puoi controllare
i risultati in questa `),Se=n(he,"A",{href:!0,rel:!0});var nr=r(Se);fs=t(nr,"model repo"),nr.forEach(i),_s=t(he,"."),he.forEach(i),ql=p(e),de=n(e,"P",{});var Gl=r(de);hs=t(Gl,"Puoi controllare il tutorial di condivisione "),ao=n(Gl,"A",{href:!0});var rr=r(ao);vs=t(rr,"tutorial di condivisione"),rr.forEach(i),gs=t(Gl,` per pi\xF9 informazioni sul
metodo con cui inviare all\u2019Hub.`),Gl.forEach(i),Cl=p(e),W=n(e,"H2",{class:!0});var Kl=r(W);pe=n(Kl,"A",{id:!0,class:!0,href:!0});var cr=r(pe);_i=n(cr,"SPAN",{});var dr=r(_i);h(Fe.$$.fragment,dr),dr.forEach(i),cr.forEach(i),bs=p(Kl),hi=n(Kl,"SPAN",{});var pr=r(hi);zs=t(pr,"Usare un modello con codice personalizzato"),pr.forEach(i),Kl.forEach(i),jl=p(e),R=n(e,"P",{});var ve=r(R);$s=t(ve,`Puoi usare ogni configurazione, modello o tokenizer con file di codice personalizzati nella sua repository
con le classi Auto e il metodo `),vi=n(ve,"CODE",{});var ur=r(vi);ys=t(ur,"from_pretrained"),ur.forEach(i),ws=t(ve,`. Tutti i files e il codice caricati sull\u2019Hub sono scansionati da malware
(fai riferimento alla documentazione `),Le=n(ve,"A",{href:!0,rel:!0});var mr=r(Le);Es=t(mr,"Hub security"),mr.forEach(i),ks=t(ve,` per pi\xF9 informazioni),
ma dovresti comunque assicurarti dell\u2019affidabilit\xE0 del codice e dell\u2019autore per evitare di eseguire codice dannoso sulla tua macchina.
Imposta `),gi=n(ve,"CODE",{});var fr=r(gi);qs=t(fr,"trust_remote_code=True"),fr.forEach(i),Cs=t(ve," per usare un modello con codice personalizzato:"),ve.forEach(i),Pl=p(e),h(He.$$.fragment,e),Al=p(e),ue=n(e,"P",{});var Vl=r(ue);js=t(Vl,"Inoltre, raccomandiamo fortemente di passare un hash del commit come "),bi=n(Vl,"CODE",{});var _r=r(bi);Ps=t(_r,"revision"),_r.forEach(i),As=t(Vl,` per assicurarti che le autrici o gli autori del modello
non abbiano modificato il codice con alcune nuove righe dannose (a meno che non ti fidi completamente della fonte):`),Vl.forEach(i),Rl=p(e),h(Be.$$.fragment,e),Ml=p(e),so=n(e,"P",{});var hr=r(so);Rs=t(hr,`Nota che quando cerchi la storia dei commit della repo del modello sull\u2019Hub, c\u2019\xE8 un bottone con cui facilmente copiare il
commit hash di ciascun commit.`),hr.forEach(i),Il=p(e),X=n(e,"H2",{class:!0});var Jl=r(X);me=n(Jl,"A",{id:!0,class:!0,href:!0});var vr=r(me);zi=n(vr,"SPAN",{});var gr=r(zi);h(xe.$$.fragment,gr),gr.forEach(i),vr.forEach(i),Ms=p(Jl),$i=n(Jl,"SPAN",{});var br=r($i);Is=t(br,"Registrare un modello con codice personalizzato nelle classi Auto"),br.forEach(i),Jl.forEach(i),Ol=p(e),no=n(e,"P",{});var zr=r(no);Os=t(zr,`Se stai scrivendo una libreria che estende \u{1F917} Transformers, potresti voler estendere le classi Auto per includere il tuo modello.
Questo \xE8 diverso dall\u2019inviare codice nell\u2019Hub: gli utenti dovranno importare la tua libreria per ottenere il modello personalizzato
(anzich\xE8 scaricare automaticamente il modello dall\u2019Hub).`),zr.forEach(i),Dl=p(e),x=n(e,"P",{});var bo=r(x);Ds=t(bo,"Finch\xE8 il tuo file di configurazione ha un attributo "),yi=n(bo,"CODE",{});var $r=r(yi);Ns=t($r,"model_type"),$r.forEach(i),Ts=t(bo,` diverso dai model types esistenti, e finch\xE8 le tue
classi modello hanno i corretti attributi `),wi=n(bo,"CODE",{});var yr=r(wi);Ss=t(yr,"config_class"),yr.forEach(i),Fs=t(bo,", potrai semplicemente aggiungerli alle classi Auto come segue:"),bo.forEach(i),Nl=p(e),h(Ue.$$.fragment,e),Tl=p(e),M=n(e,"P",{});var ge=r(M);Ls=t(ge,"Nota che il primo argomento utilizzato quando registri la configurazione di un modello personalizzato con "),Ei=n(ge,"CODE",{});var wr=r(Ei);Hs=t(wr,"AutoConfig"),wr.forEach(i),Bs=t(ge,`
deve corrispondere al `),ki=n(ge,"CODE",{});var Er=r(ki);xs=t(Er,"model_type"),Er.forEach(i),Us=t(ge,` della tua configurazione personalizzata, ed il primo argomento utilizzato quando
registri i tuoi modelli personalizzati in una qualunque classe Auto del modello deve corrispondere alla `),qi=n(ge,"CODE",{});var kr=r(qi);Qs=t(kr,"config_class"),kr.forEach(i),Gs=t(ge,`
di quei modelli.`),ge.forEach(i),this.h()},h(){u(m,"name","hf:doc:metadata"),u(m,"content",JSON.stringify(Dr)),u($,"id","condividere-modelli-personalizzati"),u($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($,"href","#condividere-modelli-personalizzati"),u(f,"class","relative group"),u(be,"href","https://github.com/rwightman/pytorch-image-models/tree/master/timm"),u(be,"rel","nofollow"),u(ee,"id","scrivere-una-configurazione-personalizzata"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#scrivere-una-configurazione-personalizzata"),u(G,"class","relative group"),u(ie,"id","scrivere-un-modello-personalizzato"),u(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ie,"href","#scrivere-un-modello-personalizzato"),u(V,"class","relative group"),u(ae,"id","inviare-il-codice-allhub"),u(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ae,"href","#inviare-il-codice-allhub"),u(J,"class","relative group"),u(Se,"href","https://huggingface.co/sgugger/custom-resnet50d"),u(Se,"rel","nofollow"),u(ao,"href","model_sharing"),u(pe,"id","usare-un-modello-con-codice-personalizzato"),u(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pe,"href","#usare-un-modello-con-codice-personalizzato"),u(W,"class","relative group"),u(Le,"href","https://huggingface.co/docs/hub/security#malware-scanning"),u(Le,"rel","nofollow"),u(me,"id","registrare-un-modello-con-codice-personalizzato-nelle-classi-auto"),u(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(me,"href","#registrare-un-modello-con-codice-personalizzato-nelle-classi-auto"),u(X,"class","relative group")},m(e,a){o(document.head,m),c(e,E,a),c(e,f,a),o(f,$),o($,Q),v(C,Q,null),o(f,I),o(f,Z),o(Z,Wl),c(e,Ai,a),c(e,Ge,a),o(Ge,Xl),c(e,Ri,a),c(e,O,a),o(O,Yl),o(O,be),o(be,Zl),o(O,et),o(O,$o),o($o,ot),o(O,it),c(e,Mi,a),c(e,G,a),o(G,ee),o(ee,yo),v(ze,yo,null),o(G,lt),o(G,wo),o(wo,tt),c(e,Ii,a),c(e,Ke,a),o(Ke,at),c(e,Oi,a),v($e,e,a),c(e,Di,a),c(e,Ve,a),o(Ve,st),c(e,Ni,a),c(e,D,a),o(D,ye),o(ye,nt),o(ye,Eo),o(Eo,rt),o(ye,ct),o(D,dt),o(D,K),o(K,pt),o(K,ko),o(ko,ut),o(K,mt),o(K,qo),o(qo,ft),o(K,_t),o(D,ht),o(D,oe),o(oe,vt),o(oe,Co),o(Co,gt),o(oe,bt),o(oe,jo),o(jo,zt),c(e,Ti,a),c(e,N,a),o(N,$t),o(N,Po),o(Po,yt),o(N,wt),o(N,Ao),o(Ao,Et),o(N,kt),c(e,Si,a),c(e,T,a),o(T,qt),o(T,Ro),o(Ro,Ct),o(T,jt),o(T,Mo),o(Mo,Pt),o(T,At),c(e,Fi,a),c(e,Je,a),o(Je,Rt),c(e,Li,a),v(we,e,a),c(e,Hi,a),c(e,j,a),o(j,Mt),o(j,Io),o(Io,It),o(j,Ot),o(j,Oo),o(Oo,Dt),o(j,Nt),o(j,Do),o(Do,Tt),o(j,St),c(e,Bi,a),v(Ee,e,a),c(e,xi,a),c(e,S,a),o(S,Ft),o(S,No),o(No,Lt),o(S,Ht),o(S,To),o(To,Bt),o(S,xt),c(e,Ui,a),c(e,V,a),o(V,ie),o(ie,So),v(ke,So,null),o(V,Ut),o(V,Fo),o(Fo,Qt),c(e,Qi,a),c(e,F,a),o(F,Gt),o(F,Lo),o(Lo,Kt),o(F,Vt),o(F,Ho),o(Ho,Jt),o(F,Wt),c(e,Gi,a),c(e,le,a),o(le,Xt),o(le,Bo),o(Bo,Yt),o(le,Zt),c(e,Ki,a),v(qe,e,a),c(e,Vi,a),c(e,We,a),o(We,ea),c(e,Ji,a),v(Ce,e,a),c(e,Wi,a),c(e,q,a),o(q,oa),o(q,xo),o(xo,ia),o(q,la),o(q,Uo),o(Uo,ta),o(q,aa),o(q,Qo),o(Qo,sa),o(q,na),o(q,Go),o(Go,ra),o(q,ca),c(e,Xi,a),v(te,e,a),c(e,Yi,a),c(e,L,a),o(L,da),o(L,Ko),o(Ko,pa),o(L,ua),o(L,Vo),o(Vo,ma),o(L,fa),c(e,Zi,a),c(e,Xe,a),o(Xe,_a),c(e,el,a),v(je,e,a),c(e,ol,a),c(e,P,a),o(P,ha),o(P,Jo),o(Jo,va),o(P,ga),o(P,Wo),o(Wo,ba),o(P,za),o(P,Xo),o(Xo,$a),o(P,ya),c(e,il,a),c(e,Ye,a),o(Ye,wa),c(e,ll,a),v(Pe,e,a),c(e,tl,a),c(e,H,a),o(H,Ea),o(H,Yo),o(Yo,ka),o(H,qa),o(H,Zo),o(Zo,Ca),o(H,ja),c(e,al,a),c(e,J,a),o(J,ae),o(ae,ei),v(Ae,ei,null),o(J,Pa),o(J,oi),o(oi,Aa),c(e,sl,a),v(se,e,a),c(e,nl,a),c(e,y,a),o(y,Ra),o(y,ii),o(ii,Ma),o(y,Ia),o(y,li),o(li,Oa),o(y,Da),o(y,ti),o(ti,Na),o(y,Ta),o(y,ai),o(ai,Sa),o(y,Fa),o(y,si),o(si,La),o(y,Ha),o(y,ni),o(ni,Ba),o(y,xa),o(y,ri),o(ri,Ua),o(y,Qa),c(e,rl,a),v(Re,e,a),c(e,cl,a),c(e,B,a),o(B,Ga),o(B,ci),o(ci,Ka),o(B,Va),o(B,di),o(di,Ja),o(B,Wa),c(e,dl,a),v(ne,e,a),c(e,pl,a),c(e,Ze,a),o(Ze,Xa),c(e,ul,a),c(e,eo,a),o(eo,Ya),c(e,ml,a),v(Me,e,a),c(e,fl,a),c(e,re,a),o(re,Za),o(re,pi),o(pi,es),o(re,os),c(e,_l,a),v(Ie,e,a),c(e,hl,a),c(e,ce,a),o(ce,is),o(ce,ui),o(ui,ls),o(ce,ts),c(e,vl,a),c(e,oo,a),o(oo,as),c(e,gl,a),v(Oe,e,a),c(e,bl,a),c(e,io,a),o(io,ss),c(e,zl,a),v(De,e,a),c(e,$l,a),c(e,lo,a),o(lo,ns),c(e,yl,a),v(Ne,e,a),c(e,wl,a),c(e,to,a),o(to,rs),c(e,El,a),v(Te,e,a),c(e,kl,a),c(e,A,a),o(A,cs),o(A,mi),o(mi,ds),o(A,ps),o(A,fi),o(fi,us),o(A,ms),o(A,Se),o(Se,fs),o(A,_s),c(e,ql,a),c(e,de,a),o(de,hs),o(de,ao),o(ao,vs),o(de,gs),c(e,Cl,a),c(e,W,a),o(W,pe),o(pe,_i),v(Fe,_i,null),o(W,bs),o(W,hi),o(hi,zs),c(e,jl,a),c(e,R,a),o(R,$s),o(R,vi),o(vi,ys),o(R,ws),o(R,Le),o(Le,Es),o(R,ks),o(R,gi),o(gi,qs),o(R,Cs),c(e,Pl,a),v(He,e,a),c(e,Al,a),c(e,ue,a),o(ue,js),o(ue,bi),o(bi,Ps),o(ue,As),c(e,Rl,a),v(Be,e,a),c(e,Ml,a),c(e,so,a),o(so,Rs),c(e,Il,a),c(e,X,a),o(X,me),o(me,zi),v(xe,zi,null),o(X,Ms),o(X,$i),o($i,Is),c(e,Ol,a),c(e,no,a),o(no,Os),c(e,Dl,a),c(e,x,a),o(x,Ds),o(x,yi),o(yi,Ns),o(x,Ts),o(x,wi),o(wi,Ss),o(x,Fs),c(e,Nl,a),v(Ue,e,a),c(e,Tl,a),c(e,M,a),o(M,Ls),o(M,Ei),o(Ei,Hs),o(M,Bs),o(M,ki),o(ki,xs),o(M,Us),o(M,qi),o(qi,Qs),o(M,Gs),Sl=!0},p(e,[a]){const Qe={};a&2&&(Qe.$$scope={dirty:a,ctx:e}),te.$set(Qe);const Ci={};a&2&&(Ci.$$scope={dirty:a,ctx:e}),se.$set(Ci);const ji={};a&2&&(ji.$$scope={dirty:a,ctx:e}),ne.$set(ji)},i(e){Sl||(g(C.$$.fragment,e),g(ze.$$.fragment,e),g($e.$$.fragment,e),g(we.$$.fragment,e),g(Ee.$$.fragment,e),g(ke.$$.fragment,e),g(qe.$$.fragment,e),g(Ce.$$.fragment,e),g(te.$$.fragment,e),g(je.$$.fragment,e),g(Pe.$$.fragment,e),g(Ae.$$.fragment,e),g(se.$$.fragment,e),g(Re.$$.fragment,e),g(ne.$$.fragment,e),g(Me.$$.fragment,e),g(Ie.$$.fragment,e),g(Oe.$$.fragment,e),g(De.$$.fragment,e),g(Ne.$$.fragment,e),g(Te.$$.fragment,e),g(Fe.$$.fragment,e),g(He.$$.fragment,e),g(Be.$$.fragment,e),g(xe.$$.fragment,e),g(Ue.$$.fragment,e),Sl=!0)},o(e){b(C.$$.fragment,e),b(ze.$$.fragment,e),b($e.$$.fragment,e),b(we.$$.fragment,e),b(Ee.$$.fragment,e),b(ke.$$.fragment,e),b(qe.$$.fragment,e),b(Ce.$$.fragment,e),b(te.$$.fragment,e),b(je.$$.fragment,e),b(Pe.$$.fragment,e),b(Ae.$$.fragment,e),b(se.$$.fragment,e),b(Re.$$.fragment,e),b(ne.$$.fragment,e),b(Me.$$.fragment,e),b(Ie.$$.fragment,e),b(Oe.$$.fragment,e),b(De.$$.fragment,e),b(Ne.$$.fragment,e),b(Te.$$.fragment,e),b(Fe.$$.fragment,e),b(He.$$.fragment,e),b(Be.$$.fragment,e),b(xe.$$.fragment,e),b(Ue.$$.fragment,e),Sl=!1},d(e){i(m),e&&i(E),e&&i(f),z(C),e&&i(Ai),e&&i(Ge),e&&i(Ri),e&&i(O),e&&i(Mi),e&&i(G),z(ze),e&&i(Ii),e&&i(Ke),e&&i(Oi),z($e,e),e&&i(Di),e&&i(Ve),e&&i(Ni),e&&i(D),e&&i(Ti),e&&i(N),e&&i(Si),e&&i(T),e&&i(Fi),e&&i(Je),e&&i(Li),z(we,e),e&&i(Hi),e&&i(j),e&&i(Bi),z(Ee,e),e&&i(xi),e&&i(S),e&&i(Ui),e&&i(V),z(ke),e&&i(Qi),e&&i(F),e&&i(Gi),e&&i(le),e&&i(Ki),z(qe,e),e&&i(Vi),e&&i(We),e&&i(Ji),z(Ce,e),e&&i(Wi),e&&i(q),e&&i(Xi),z(te,e),e&&i(Yi),e&&i(L),e&&i(Zi),e&&i(Xe),e&&i(el),z(je,e),e&&i(ol),e&&i(P),e&&i(il),e&&i(Ye),e&&i(ll),z(Pe,e),e&&i(tl),e&&i(H),e&&i(al),e&&i(J),z(Ae),e&&i(sl),z(se,e),e&&i(nl),e&&i(y),e&&i(rl),z(Re,e),e&&i(cl),e&&i(B),e&&i(dl),z(ne,e),e&&i(pl),e&&i(Ze),e&&i(ul),e&&i(eo),e&&i(ml),z(Me,e),e&&i(fl),e&&i(re),e&&i(_l),z(Ie,e),e&&i(hl),e&&i(ce),e&&i(vl),e&&i(oo),e&&i(gl),z(Oe,e),e&&i(bl),e&&i(io),e&&i(zl),z(De,e),e&&i($l),e&&i(lo),e&&i(yl),z(Ne,e),e&&i(wl),e&&i(to),e&&i(El),z(Te,e),e&&i(kl),e&&i(A),e&&i(ql),e&&i(de),e&&i(Cl),e&&i(W),z(Fe),e&&i(jl),e&&i(R),e&&i(Pl),z(He,e),e&&i(Al),e&&i(ue),e&&i(Rl),z(Be,e),e&&i(Ml),e&&i(so),e&&i(Il),e&&i(X),z(xe),e&&i(Ol),e&&i(no),e&&i(Dl),e&&i(x),e&&i(Nl),z(Ue,e),e&&i(Tl),e&&i(M)}}}const Dr={local:"condividere-modelli-personalizzati",sections:[{local:"scrivere-una-configurazione-personalizzata",title:"Scrivere una configurazione personalizzata"},{local:"scrivere-un-modello-personalizzato",title:"Scrivere un modello personalizzato"},{local:"inviare-il-codice-allhub",title:"Inviare il codice all'Hub"},{local:"usare-un-modello-con-codice-personalizzato",title:"Usare un modello con codice personalizzato"},{local:"registrare-un-modello-con-codice-personalizzato-nelle-classi-auto",title:"Registrare un modello con codice personalizzato nelle classi Auto"}],title:"Condividere modelli personalizzati"};function Nr(Y){return Ar(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Hr extends qr{constructor(m){super();Cr(this,m,Nr,Or,jr,{})}}export{Hr as default,Dr as metadata};
