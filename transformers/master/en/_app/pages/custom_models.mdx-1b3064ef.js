import{S as Hi,i as Bi,s as Si,e as l,k as c,w as p,t as o,M as Wi,c as r,d as s,m as d,a as i,x as _,h as a,b as h,F as t,g as f,y as g,q as y,o as w,B as b}from"../chunks/vendor-4833417e.js";import{T as nr}from"../chunks/Tip-fffd6df1.js";import{I as Nt}from"../chunks/IconCopyLink-4b81c553.js";import{C as E}from"../chunks/CodeBlock-90ffda97.js";import"../chunks/CopyButton-04a16537.js";function Li(z){let m,k;return{c(){m=l("p"),k=o("If your model is very similar to a model inside the library, you can re-use the same configuration as this model.")},l(u){m=r(u,"P",{});var v=i(m);k=a(v,"If your model is very similar to a model inside the library, you can re-use the same configuration as this model."),v.forEach(s)},m(u,v){f(u,m,v),t(m,k)},d(u){u&&s(m)}}}function Yi(z){let m,k;return{c(){m=l("p"),k=o("This API is experimental and may have some slight breaking changes in the next releases.")},l(u){m=r(u,"P",{});var v=i(m);k=a(v,"This API is experimental and may have some slight breaking changes in the next releases."),v.forEach(s)},m(u,v){f(u,m,v),t(m,k)},d(u){u&&s(m)}}}function zi(z){let m,k,u,v,G;return{c(){m=l("p"),k=o(`If copying a modeling files from the library, you will need to replace all the relative imports at the top of the file
to import from the `),u=l("code"),v=o("transformers"),G=o(" package.")},l(P){m=r(P,"P",{});var I=i(m);k=a(I,`If copying a modeling files from the library, you will need to replace all the relative imports at the top of the file
to import from the `),u=r(I,"CODE",{});var ee=i(u);v=a(ee,"transformers"),ee.forEach(s),G=a(I," package."),I.forEach(s)},m(P,I){f(P,m,I),t(m,k),t(m,u),t(u,v),t(m,G)},d(P){P&&s(m)}}}function Gi(z){let m,k,u,v,G,P,I,ee,sa,qs,Ke,oa,Is,Ue,aa,Ns,N,na,be,la,ra,Ve,ia,fa,xs,K,te,xt,ve,ca,Ot,da,Os,se,ha,Dt,ma,ua,Ds,Je,pa,Fs,$e,Hs,Qe,_a,Bs,x,ke,ga,Ft,ya,wa,ba,U,va,Ht,$a,ka,Bt,Ea,ja,Ca,V,Pa,St,Aa,Ta,Wt,Ma,Ra,Ss,O,qa,Lt,Ia,Na,Yt,xa,Oa,Ws,D,Da,zt,Fa,Ha,Gt,Ba,Sa,Ls,Xe,Wa,Ys,Ee,zs,A,La,Kt,Ya,za,Ut,Ga,Ka,Vt,Ua,Va,Gs,je,Ks,F,Ja,Ze,Qa,Xa,et,Za,en,Us,J,oe,Jt,Ce,tn,Qt,sn,Vs,H,on,tt,an,nn,Xt,ln,rn,Js,ae,fn,Zt,cn,dn,Qs,Pe,Xs,st,hn,Zs,Ae,eo,C,mn,es,un,pn,ts,_n,gn,ss,yn,wn,os,bn,vn,to,ne,so,B,$n,as,kn,En,ot,jn,Cn,oo,at,Pn,ao,Te,no,T,An,nt,Tn,Mn,lt,Rn,qn,rt,In,Nn,lo,it,xn,ro,Me,io,S,On,ft,Dn,Fn,ct,Hn,Bn,fo,Q,le,ns,Re,Sn,ls,Wn,co,re,ho,$,Ln,rs,Yn,zn,is,Gn,Kn,fs,Un,Vn,cs,Jn,Qn,ds,Xn,Zn,hs,el,tl,ms,sl,ol,mo,qe,uo,W,al,us,nl,ll,ps,rl,il,po,ie,_o,dt,fl,go,ht,cl,yo,Ie,wo,fe,dl,_s,hl,ml,bo,Ne,vo,ce,ul,mt,pl,_l,$o,ut,gl,ko,xe,Eo,pt,yl,jo,Oe,Co,_t,wl,Po,De,Ao,gt,bl,To,Fe,Mo,M,vl,gs,$l,kl,ys,El,jl,He,Cl,Pl,Ro,de,Al,yt,Tl,Ml,qo,X,he,ws,Be,Rl,bs,ql,Io,R,Il,vs,Nl,xl,Se,Ol,Dl,$s,Fl,Hl,No,We,xo,me,Bl,ks,Sl,Wl,Oo,Le,Do,wt,Ll,Fo,Z,ue,Es,Ye,Yl,js,zl,Ho,bt,Gl,Bo,L,Kl,Cs,Ul,Vl,Ps,Jl,Ql,So,ze,Wo,q,Xl,vt,Zl,er,As,tr,sr,Ts,or,ar,Lo;return P=new Nt({}),ve=new Nt({}),$e=new E({props:{code:`from transformers import PretrainedConfig
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
        super().__init__(**kwargs),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PretrainedConfig
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
        <span class="hljs-built_in">super</span>().__init__(**kwargs)`}}),Ee=new E({props:{code:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d_config.save_pretrained("custom-resnet"),`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d_config.save_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)`}}),je=new E({props:{code:'resnet50d_config = ResnetConfig.from_pretrained("custom-resnet"),',highlighted:'resnet50d_config = ResnetConfig.from_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)'}}),Ce=new Nt({}),Pe=new E({props:{code:`from transformers import PreTrainedModel
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
        return self.model.forward_features(tensor),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PreTrainedModel
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
        <span class="hljs-keyword">return</span> self.model.forward_features(tensor)`}}),Ae=new E({props:{code:`class ResnetModelForImageClassification(PreTrainedModel):
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
        return {"logits": logits},`,highlighted:`<span class="hljs-keyword">class</span> <span class="hljs-title class_">ResnetModelForImageClassification</span>(<span class="hljs-title class_ inherited__">PreTrainedModel</span>):
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
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;logits&quot;</span>: logits}`}}),ne=new nr({props:{$$slots:{default:[Li]},$$scope:{ctx:z}}}),Te=new E({props:{code:"resnet50d = ResnetModelForImageClassification(resnet50d_config),",highlighted:"resnet50d = ResnetModelForImageClassification(resnet50d_config)"}}),Me=new E({props:{code:`import timm

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict()),`,highlighted:`<span class="hljs-keyword">import</span> timm

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),Re=new Nt({}),re=new nr({props:{warning:"&lcub;true}",$$slots:{default:[Yi]},$$scope:{ctx:z}}}),qe=new E({props:{code:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.py
    \u251C\u2500\u2500 configuration_resnet.py
    \u2514\u2500\u2500 modeling_resnet.py,`,highlighted:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.<span class="hljs-keyword">py</span>
    \u251C\u2500\u2500 configuration_resnet.<span class="hljs-keyword">py</span>
    \u2514\u2500\u2500 modeling_resnet.<span class="hljs-keyword">py</span>`}}),ie=new nr({props:{warning:"&lcub;true}",$$slots:{default:[zi]},$$scope:{ctx:z}}}),Ie=new E({props:{code:`from resnet_model.configuration_resnet import ResnetConfig
from resnet_model.modeling_resnet import ResnetModel, ResnetModelForImageClassification,`,highlighted:`<span class="hljs-keyword">from</span> resnet_model.configuration_resnet <span class="hljs-keyword">import</span> ResnetConfig
<span class="hljs-keyword">from</span> resnet_model.modeling_resnet <span class="hljs-keyword">import</span> ResnetModel, ResnetModelForImageClassification`}}),Ne=new E({props:{code:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class("AutoModel")
ResnetModelForImageClassification.register_for_auto_class("AutoModelForImageClassification"),`,highlighted:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class(<span class="hljs-string">&quot;AutoModel&quot;</span>)
ResnetModelForImageClassification.register_for_auto_class(<span class="hljs-string">&quot;AutoModelForImageClassification&quot;</span>)`}}),xe=new E({props:{code:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict()),`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),Oe=new E({props:{code:"huggingface-cli login,",highlighted:"huggingface-cli login"}}),De=new E({props:{code:`from huggingface_hub import notebook_login

notebook_login(),`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),Fe=new E({props:{code:'resnet50d.push_to_hub("custom-resnet50d"),',highlighted:'resnet50d.push_to_hub(<span class="hljs-string">&quot;custom-resnet50d&quot;</span>)'}}),Be=new Nt({}),We=new E({props:{code:`from transformers import AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained("sgugger/custom-resnet50d", trust_remote_code=True),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained(<span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>)`}}),Le=new E({props:{code:`commit_hash = "ed94a7c6247d8aedce4647f00f20de6875b5b292"
model = AutoModelForImageClassification.from_pretrained(
    "sgugger/custom-resnet50d", trust_remote_code=True, revision=commit_hash
),`,highlighted:`commit_hash = <span class="hljs-string">&quot;ed94a7c6247d8aedce4647f00f20de6875b5b292&quot;</span>
model = AutoModelForImageClassification.from_pretrained(
    <span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>, revision=commit_hash
)`}}),Ye=new Nt({}),ze=new E({props:{code:`from transformers import AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register("resnet", ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register(<span class="hljs-string">&quot;resnet&quot;</span>, ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification)`}}),{c(){m=l("meta"),k=c(),u=l("h1"),v=l("a"),G=l("span"),p(P.$$.fragment),I=c(),ee=l("span"),sa=o("Sharing custom models"),qs=c(),Ke=l("p"),oa=o(`The \u{1F917} Transformers library is designed to be easily extensible. Every model is fully coded in a given subfolder
of the repository with no abstraction, so you can easily copy a modeling file and tweak it to your needs.`),Is=c(),Ue=l("p"),aa=o(`If you are writing a brand new model, it might be easier to start from scratch. In this tutorial, we will show you
how to write a custom model and its configuration so it can be used inside Transformers, and how you can share it
with the community (with the code it relies on) so that anyone can use it, even if it\u2019s not present in the \u{1F917}
Transformers library.`),Ns=c(),N=l("p"),na=o(`We will illustrate all of this on a ResNet model, by wrapping the ResNet class of the
`),be=l("a"),la=o("timm library"),ra=o(" into a "),Ve=l("a"),ia=o("PreTrainedModel"),fa=o("."),xs=c(),K=l("h2"),te=l("a"),xt=l("span"),p(ve.$$.fragment),ca=c(),Ot=l("span"),da=o("Writing a custom configuration"),Os=c(),se=l("p"),ha=o(`Before we dive into the model, let\u2019s first write its configuration. The configuration of a model is an object that
will contain all the necessary information to build the model. As we will see in the next section, the model can only
take a `),Dt=l("code"),ma=o("config"),ua=o(" to be initialized, so we really need that object to be as complete as possible."),Ds=c(),Je=l("p"),pa=o(`In our example, we will take a couple of arguments of the ResNet class that we might want to tweak. Different
configurations will then give us the different types of ResNets that are possible. We then just store those arguments,
after checking the validity of a few of them.`),Fs=c(),p($e.$$.fragment),Hs=c(),Qe=l("p"),_a=o("The three important things to remember when writing you own configuration are the following:"),Bs=c(),x=l("ul"),ke=l("li"),ga=o("you have to inherit from "),Ft=l("code"),ya=o("PretrainedConfig"),wa=o(","),ba=c(),U=l("li"),va=o("the "),Ht=l("code"),$a=o("__init__"),ka=o(" of your "),Bt=l("code"),Ea=o("PretrainedConfig"),ja=o(" must accept any kwargs,"),Ca=c(),V=l("li"),Pa=o("those "),St=l("code"),Aa=o("kwargs"),Ta=o(" need to be passed to the superclass "),Wt=l("code"),Ma=o("__init__"),Ra=o("."),Ss=c(),O=l("p"),qa=o(`The inheritance is to make sure you get all the functionality from the \u{1F917} Transformers library, while the two other
constraints come from the fact a `),Lt=l("code"),Ia=o("PretrainedConfig"),Na=o(` has more fields than the ones you are setting. When reloading a
config with the `),Yt=l("code"),xa=o("from_pretrained"),Oa=o(` method, those fields need to be accepted by your config and then sent to the
superclass.`),Ws=c(),D=l("p"),Da=o("Defining a "),zt=l("code"),Fa=o("model_type"),Ha=o(" for your configuration (here "),Gt=l("code"),Ba=o('model_type="resnet"'),Sa=o(`) is not mandatory, unless you want to
register your model with the auto classes (see last section).`),Ls=c(),Xe=l("p"),Wa=o(`With this done, you can easily create and save your configuration like you would do with any other model config of the
library. Here is how we can create a resnet50d config and save it:`),Ys=c(),p(Ee.$$.fragment),zs=c(),A=l("p"),La=o("This will save a file named "),Kt=l("code"),Ya=o("config.json"),za=o(" inside the folder "),Ut=l("code"),Ga=o("custom-resnet"),Ka=o(`. You can then reload your config with the
`),Vt=l("code"),Ua=o("from_pretrained"),Va=o(" method:"),Gs=c(),p(je.$$.fragment),Ks=c(),F=l("p"),Ja=o("You can also use any other method of the "),Ze=l("a"),Qa=o("PretrainedConfig"),Xa=o(" class, like "),et=l("a"),Za=o("push_to_hub()"),en=o(` to
directly upload your config to the Hub.`),Us=c(),J=l("h2"),oe=l("a"),Jt=l("span"),p(Ce.$$.fragment),tn=c(),Qt=l("span"),sn=o("Writing a custom model"),Vs=c(),H=l("p"),on=o(`Now that we have our ResNet configuration, we can go on writing the model. We will actually write two: one that
extracts the hidden features from a batch of images (like `),tt=l("a"),an=o("BertModel"),nn=o(`) and one that is suitable for image
classification (like `),Xt=l("code"),ln=o("BertModelForSequenceClassification"),rn=o(")."),Js=c(),ae=l("p"),fn=o(`As we mentioned before, we\u2019ll only write a loose wrapper of the model to keep it simple for this example. The only
thing we need to do before writing this class is a map between the block types and actual block classes. Then the
model is defined from the configuration by passing everything to the `),Zt=l("code"),cn=o("ResNet"),dn=o(" class:"),Qs=c(),p(Pe.$$.fragment),Xs=c(),st=l("p"),hn=o("For the model that will classify images, we just change the forward method:"),Zs=c(),p(Ae.$$.fragment),eo=c(),C=l("p"),mn=o("In both cases, notice how we inherit from "),es=l("code"),un=o("PreTrainedModel"),pn=o(" and call the superclass initialization with the "),ts=l("code"),_n=o("config"),gn=o(`
(a bit like when you write a regular `),ss=l("code"),yn=o("torch.nn.Module"),wn=o("). The line that sets the "),os=l("code"),bn=o("config_class"),vn=o(` is not mandatory, unless
you want to register your model with the auto classes (see last section).`),to=c(),p(ne.$$.fragment),so=c(),B=l("p"),$n=o(`You can have your model return anything you want, but returning a dictionary like we did for
`),as=l("code"),kn=o("ResnetModelForImageClassification"),En=o(`, with the loss included when labels are passed, will make your model directly
usable inside the `),ot=l("a"),jn=o("Trainer"),Cn=o(` class. Using another output format is fine as long as you are planning on using your own
training loop or another library for training.`),oo=c(),at=l("p"),Pn=o("Now that we have our model class, let\u2019s create one:"),ao=c(),p(Te.$$.fragment),no=c(),T=l("p"),An=o("Again, you can use any of the methods of "),nt=l("a"),Tn=o("PreTrainedModel"),Mn=o(", like "),lt=l("a"),Rn=o("save_pretrained()"),qn=o(` or
`),rt=l("a"),In=o("push_to_hub()"),Nn=o(`. We will use the second in the next section, and see how to push the model weights
with the code of our model. But first, let\u2019s load some pretrained weights inside our model.`),lo=c(),it=l("p"),xn=o(`In your own use case, you will probably be training your custom model on your own data. To go fast for this tutorial,
we will use the pretrained version of the resnet50d. Since our model is just a wrapper around it, it\u2019s going to be
easy to transfer those weights:`),ro=c(),p(Me.$$.fragment),io=c(),S=l("p"),On=o("Now let\u2019s see how to make sure that when we do "),ft=l("a"),Dn=o("save_pretrained()"),Fn=o(" or "),ct=l("a"),Hn=o("push_to_hub()"),Bn=o(`, the
code of the model is saved.`),fo=c(),Q=l("h2"),le=l("a"),ns=l("span"),p(Re.$$.fragment),Sn=c(),ls=l("span"),Wn=o("Sending the code to the Hub"),co=c(),p(re.$$.fragment),ho=c(),$=l("p"),Ln=o("First, make sure your model is fully defined in a "),rs=l("code"),Yn=o(".py"),zn=o(` file. It can rely on relative imports to some other files as
long as all the files are in the same directory (we don\u2019t support submodules for this feature yet). For our example,
we\u2019ll define a `),is=l("code"),Gn=o("modeling_resnet.py"),Kn=o(" file and a "),fs=l("code"),Un=o("configuration_resnet.py"),Vn=o(` file in a folder of the current working
directory named `),cs=l("code"),Jn=o("resnet_model"),Qn=o(". The configuration file contains the code for "),ds=l("code"),Xn=o("ResnetConfig"),Zn=o(` and the modeling file
contains the code of `),hs=l("code"),el=o("ResnetModel"),tl=o(" and "),ms=l("code"),sl=o("ResnetModelForImageClassification"),ol=o("."),mo=c(),p(qe.$$.fragment),uo=c(),W=l("p"),al=o("The "),us=l("code"),nl=o("__init__.py"),ll=o(" can be empty, it\u2019s just there so that Python detects "),ps=l("code"),rl=o("resnet_model"),il=o(" can be use as a module."),po=c(),p(ie.$$.fragment),_o=c(),dt=l("p"),fl=o("Note that you can re-use (or subclass) an existing configuration/model."),go=c(),ht=l("p"),cl=o(`To share your model with the community, follow those steps: first import the ResNet model and config from the newly
created files:`),yo=c(),p(Ie.$$.fragment),wo=c(),fe=l("p"),dl=o("Then you have to tell the library you want to copy the code files of those objects when using the "),_s=l("code"),hl=o("save_pretrained"),ml=o(`
method and properly register them with a given Auto class (especially for models), just run:`),bo=c(),p(Ne.$$.fragment),vo=c(),ce=l("p"),ul=o(`Note that there is no need to specify an auto class for the configuration (there is only one auto class for them,
`),mt=l("a"),pl=o("AutoConfig"),_l=o(`) but it\u2019s different for models. Your custom model could be suitable for many different tasks, so you
have to specify which one of the auto classes is the correct one for your model.`),$o=c(),ut=l("p"),gl=o("Next, let\u2019s create the config and models as we did before:"),ko=c(),p(xe.$$.fragment),Eo=c(),pt=l("p"),yl=o("Now to send the model to the Hub, make sure you are logged in. Either run in your terminal:"),jo=c(),p(Oe.$$.fragment),Co=c(),_t=l("p"),wl=o("or from a notebook:"),Po=c(),p(De.$$.fragment),Ao=c(),gt=l("p"),bl=o("You can then push to to your own namespace (or an organization you are a member of) like this:"),To=c(),p(Fe.$$.fragment),Mo=c(),M=l("p"),vl=o(`On top of the modeling weights and the configuration in json format, this also copied the modeling and
configuration `),gs=l("code"),$l=o(".py"),kl=o(" files in the folder "),ys=l("code"),El=o("custom-resnet50d"),jl=o(` and uploaded the result to the Hub. You can check the result
in this `),He=l("a"),Cl=o("model repo"),Pl=o("."),Ro=c(),de=l("p"),Al=o("See the "),yt=l("a"),Tl=o("sharing tutorial"),Ml=o(" for more information on the push to Hub method."),qo=c(),X=l("h2"),he=l("a"),ws=l("span"),p(Be.$$.fragment),Rl=c(),bs=l("span"),ql=o("Using a model with custom code"),Io=c(),R=l("p"),Il=o(`You can use any configuration, model or tokenizer with custom code files in its repository with the auto-classes and
the `),vs=l("code"),Nl=o("from_pretrained"),xl=o(" method. All files and code uploaded to the Hub are scanned for malware (refer to the "),Se=l("a"),Ol=o("Hub security"),Dl=o(` documentation for more information), but you should still
review the model code and author to avoid executing malicious code on your machine. Set `),$s=l("code"),Fl=o("trust_remote_code=True"),Hl=o(` to use
a model with custom code:`),No=c(),p(We.$$.fragment),xo=c(),me=l("p"),Bl=o("It is also strongly encouraged to pass a commit hash as a "),ks=l("code"),Sl=o("revision"),Wl=o(` to make sure the author of the models did not
update the code with some malicious new lines (unless you fully trust the authors of the models).`),Oo=c(),p(Le.$$.fragment),Do=c(),wt=l("p"),Ll=o(`Note that when browsing the commit history of the model repo on the Hub, there is a button to easily copy the commit
hash of any commit.`),Fo=c(),Z=l("h2"),ue=l("a"),Es=l("span"),p(Ye.$$.fragment),Yl=c(),js=l("span"),zl=o("Registering a model with custom code to the auto classes"),Ho=c(),bt=l("p"),Gl=o(`If you are writing a library that extends \u{1F917} Transformers, you may want to extend the auto classes to include your own
model. This is different from pushing the code to the Hub in the sense that users will need to import your library to
get the custom models (contrarily to automatically downloading the model code from the Hub).`),Bo=c(),L=l("p"),Kl=o("As long as your config has a "),Cs=l("code"),Ul=o("model_type"),Vl=o(` attribute that is different from existing model types, and that your model
classes have the right `),Ps=l("code"),Jl=o("config_class"),Ql=o(" attributes, you can just add them to the auto classes likes this:"),So=c(),p(ze.$$.fragment),Wo=c(),q=l("p"),Xl=o("Note that the first argument used when registering your custom config to "),vt=l("a"),Zl=o("AutoConfig"),er=o(" needs to match the "),As=l("code"),tr=o("model_type"),sr=o(`
of your custom config, and the first argument used when registering your custom models to any auto model class needs
to match the `),Ts=l("code"),or=o("config_class"),ar=o(" of those models."),this.h()},l(e){const n=Wi('[data-svelte="svelte-1phssyn"]',document.head);m=r(n,"META",{name:!0,content:!0}),n.forEach(s),k=d(e),u=r(e,"H1",{class:!0});var Ge=i(u);v=r(Ge,"A",{id:!0,class:!0,href:!0});var Ms=i(v);G=r(Ms,"SPAN",{});var Rs=i(G);_(P.$$.fragment,Rs),Rs.forEach(s),Ms.forEach(s),I=d(Ge),ee=r(Ge,"SPAN",{});var lr=i(ee);sa=a(lr,"Sharing custom models"),lr.forEach(s),Ge.forEach(s),qs=d(e),Ke=r(e,"P",{});var rr=i(Ke);oa=a(rr,`The \u{1F917} Transformers library is designed to be easily extensible. Every model is fully coded in a given subfolder
of the repository with no abstraction, so you can easily copy a modeling file and tweak it to your needs.`),rr.forEach(s),Is=d(e),Ue=r(e,"P",{});var ir=i(Ue);aa=a(ir,`If you are writing a brand new model, it might be easier to start from scratch. In this tutorial, we will show you
how to write a custom model and its configuration so it can be used inside Transformers, and how you can share it
with the community (with the code it relies on) so that anyone can use it, even if it\u2019s not present in the \u{1F917}
Transformers library.`),ir.forEach(s),Ns=d(e),N=r(e,"P",{});var $t=i(N);na=a($t,`We will illustrate all of this on a ResNet model, by wrapping the ResNet class of the
`),be=r($t,"A",{href:!0,rel:!0});var fr=i(be);la=a(fr,"timm library"),fr.forEach(s),ra=a($t," into a "),Ve=r($t,"A",{href:!0});var cr=i(Ve);ia=a(cr,"PreTrainedModel"),cr.forEach(s),fa=a($t,"."),$t.forEach(s),xs=d(e),K=r(e,"H2",{class:!0});var Yo=i(K);te=r(Yo,"A",{id:!0,class:!0,href:!0});var dr=i(te);xt=r(dr,"SPAN",{});var hr=i(xt);_(ve.$$.fragment,hr),hr.forEach(s),dr.forEach(s),ca=d(Yo),Ot=r(Yo,"SPAN",{});var mr=i(Ot);da=a(mr,"Writing a custom configuration"),mr.forEach(s),Yo.forEach(s),Os=d(e),se=r(e,"P",{});var zo=i(se);ha=a(zo,`Before we dive into the model, let\u2019s first write its configuration. The configuration of a model is an object that
will contain all the necessary information to build the model. As we will see in the next section, the model can only
take a `),Dt=r(zo,"CODE",{});var ur=i(Dt);ma=a(ur,"config"),ur.forEach(s),ua=a(zo," to be initialized, so we really need that object to be as complete as possible."),zo.forEach(s),Ds=d(e),Je=r(e,"P",{});var pr=i(Je);pa=a(pr,`In our example, we will take a couple of arguments of the ResNet class that we might want to tweak. Different
configurations will then give us the different types of ResNets that are possible. We then just store those arguments,
after checking the validity of a few of them.`),pr.forEach(s),Fs=d(e),_($e.$$.fragment,e),Hs=d(e),Qe=r(e,"P",{});var _r=i(Qe);_a=a(_r,"The three important things to remember when writing you own configuration are the following:"),_r.forEach(s),Bs=d(e),x=r(e,"UL",{});var kt=i(x);ke=r(kt,"LI",{});var Go=i(ke);ga=a(Go,"you have to inherit from "),Ft=r(Go,"CODE",{});var gr=i(Ft);ya=a(gr,"PretrainedConfig"),gr.forEach(s),wa=a(Go,","),Go.forEach(s),ba=d(kt),U=r(kt,"LI",{});var Et=i(U);va=a(Et,"the "),Ht=r(Et,"CODE",{});var yr=i(Ht);$a=a(yr,"__init__"),yr.forEach(s),ka=a(Et," of your "),Bt=r(Et,"CODE",{});var wr=i(Bt);Ea=a(wr,"PretrainedConfig"),wr.forEach(s),ja=a(Et," must accept any kwargs,"),Et.forEach(s),Ca=d(kt),V=r(kt,"LI",{});var jt=i(V);Pa=a(jt,"those "),St=r(jt,"CODE",{});var br=i(St);Aa=a(br,"kwargs"),br.forEach(s),Ta=a(jt," need to be passed to the superclass "),Wt=r(jt,"CODE",{});var vr=i(Wt);Ma=a(vr,"__init__"),vr.forEach(s),Ra=a(jt,"."),jt.forEach(s),kt.forEach(s),Ss=d(e),O=r(e,"P",{});var Ct=i(O);qa=a(Ct,`The inheritance is to make sure you get all the functionality from the \u{1F917} Transformers library, while the two other
constraints come from the fact a `),Lt=r(Ct,"CODE",{});var $r=i(Lt);Ia=a($r,"PretrainedConfig"),$r.forEach(s),Na=a(Ct,` has more fields than the ones you are setting. When reloading a
config with the `),Yt=r(Ct,"CODE",{});var kr=i(Yt);xa=a(kr,"from_pretrained"),kr.forEach(s),Oa=a(Ct,` method, those fields need to be accepted by your config and then sent to the
superclass.`),Ct.forEach(s),Ws=d(e),D=r(e,"P",{});var Pt=i(D);Da=a(Pt,"Defining a "),zt=r(Pt,"CODE",{});var Er=i(zt);Fa=a(Er,"model_type"),Er.forEach(s),Ha=a(Pt," for your configuration (here "),Gt=r(Pt,"CODE",{});var jr=i(Gt);Ba=a(jr,'model_type="resnet"'),jr.forEach(s),Sa=a(Pt,`) is not mandatory, unless you want to
register your model with the auto classes (see last section).`),Pt.forEach(s),Ls=d(e),Xe=r(e,"P",{});var Cr=i(Xe);Wa=a(Cr,`With this done, you can easily create and save your configuration like you would do with any other model config of the
library. Here is how we can create a resnet50d config and save it:`),Cr.forEach(s),Ys=d(e),_(Ee.$$.fragment,e),zs=d(e),A=r(e,"P",{});var pe=i(A);La=a(pe,"This will save a file named "),Kt=r(pe,"CODE",{});var Pr=i(Kt);Ya=a(Pr,"config.json"),Pr.forEach(s),za=a(pe," inside the folder "),Ut=r(pe,"CODE",{});var Ar=i(Ut);Ga=a(Ar,"custom-resnet"),Ar.forEach(s),Ka=a(pe,`. You can then reload your config with the
`),Vt=r(pe,"CODE",{});var Tr=i(Vt);Ua=a(Tr,"from_pretrained"),Tr.forEach(s),Va=a(pe," method:"),pe.forEach(s),Gs=d(e),_(je.$$.fragment,e),Ks=d(e),F=r(e,"P",{});var At=i(F);Ja=a(At,"You can also use any other method of the "),Ze=r(At,"A",{href:!0});var Mr=i(Ze);Qa=a(Mr,"PretrainedConfig"),Mr.forEach(s),Xa=a(At," class, like "),et=r(At,"A",{href:!0});var Rr=i(et);Za=a(Rr,"push_to_hub()"),Rr.forEach(s),en=a(At,` to
directly upload your config to the Hub.`),At.forEach(s),Us=d(e),J=r(e,"H2",{class:!0});var Ko=i(J);oe=r(Ko,"A",{id:!0,class:!0,href:!0});var qr=i(oe);Jt=r(qr,"SPAN",{});var Ir=i(Jt);_(Ce.$$.fragment,Ir),Ir.forEach(s),qr.forEach(s),tn=d(Ko),Qt=r(Ko,"SPAN",{});var Nr=i(Qt);sn=a(Nr,"Writing a custom model"),Nr.forEach(s),Ko.forEach(s),Vs=d(e),H=r(e,"P",{});var Tt=i(H);on=a(Tt,`Now that we have our ResNet configuration, we can go on writing the model. We will actually write two: one that
extracts the hidden features from a batch of images (like `),tt=r(Tt,"A",{href:!0});var xr=i(tt);an=a(xr,"BertModel"),xr.forEach(s),nn=a(Tt,`) and one that is suitable for image
classification (like `),Xt=r(Tt,"CODE",{});var Or=i(Xt);ln=a(Or,"BertModelForSequenceClassification"),Or.forEach(s),rn=a(Tt,")."),Tt.forEach(s),Js=d(e),ae=r(e,"P",{});var Uo=i(ae);fn=a(Uo,`As we mentioned before, we\u2019ll only write a loose wrapper of the model to keep it simple for this example. The only
thing we need to do before writing this class is a map between the block types and actual block classes. Then the
model is defined from the configuration by passing everything to the `),Zt=r(Uo,"CODE",{});var Dr=i(Zt);cn=a(Dr,"ResNet"),Dr.forEach(s),dn=a(Uo," class:"),Uo.forEach(s),Qs=d(e),_(Pe.$$.fragment,e),Xs=d(e),st=r(e,"P",{});var Fr=i(st);hn=a(Fr,"For the model that will classify images, we just change the forward method:"),Fr.forEach(s),Zs=d(e),_(Ae.$$.fragment,e),eo=d(e),C=r(e,"P",{});var Y=i(C);mn=a(Y,"In both cases, notice how we inherit from "),es=r(Y,"CODE",{});var Hr=i(es);un=a(Hr,"PreTrainedModel"),Hr.forEach(s),pn=a(Y," and call the superclass initialization with the "),ts=r(Y,"CODE",{});var Br=i(ts);_n=a(Br,"config"),Br.forEach(s),gn=a(Y,`
(a bit like when you write a regular `),ss=r(Y,"CODE",{});var Sr=i(ss);yn=a(Sr,"torch.nn.Module"),Sr.forEach(s),wn=a(Y,"). The line that sets the "),os=r(Y,"CODE",{});var Wr=i(os);bn=a(Wr,"config_class"),Wr.forEach(s),vn=a(Y,` is not mandatory, unless
you want to register your model with the auto classes (see last section).`),Y.forEach(s),to=d(e),_(ne.$$.fragment,e),so=d(e),B=r(e,"P",{});var Mt=i(B);$n=a(Mt,`You can have your model return anything you want, but returning a dictionary like we did for
`),as=r(Mt,"CODE",{});var Lr=i(as);kn=a(Lr,"ResnetModelForImageClassification"),Lr.forEach(s),En=a(Mt,`, with the loss included when labels are passed, will make your model directly
usable inside the `),ot=r(Mt,"A",{href:!0});var Yr=i(ot);jn=a(Yr,"Trainer"),Yr.forEach(s),Cn=a(Mt,` class. Using another output format is fine as long as you are planning on using your own
training loop or another library for training.`),Mt.forEach(s),oo=d(e),at=r(e,"P",{});var zr=i(at);Pn=a(zr,"Now that we have our model class, let\u2019s create one:"),zr.forEach(s),ao=d(e),_(Te.$$.fragment,e),no=d(e),T=r(e,"P",{});var _e=i(T);An=a(_e,"Again, you can use any of the methods of "),nt=r(_e,"A",{href:!0});var Gr=i(nt);Tn=a(Gr,"PreTrainedModel"),Gr.forEach(s),Mn=a(_e,", like "),lt=r(_e,"A",{href:!0});var Kr=i(lt);Rn=a(Kr,"save_pretrained()"),Kr.forEach(s),qn=a(_e,` or
`),rt=r(_e,"A",{href:!0});var Ur=i(rt);In=a(Ur,"push_to_hub()"),Ur.forEach(s),Nn=a(_e,`. We will use the second in the next section, and see how to push the model weights
with the code of our model. But first, let\u2019s load some pretrained weights inside our model.`),_e.forEach(s),lo=d(e),it=r(e,"P",{});var Vr=i(it);xn=a(Vr,`In your own use case, you will probably be training your custom model on your own data. To go fast for this tutorial,
we will use the pretrained version of the resnet50d. Since our model is just a wrapper around it, it\u2019s going to be
easy to transfer those weights:`),Vr.forEach(s),ro=d(e),_(Me.$$.fragment,e),io=d(e),S=r(e,"P",{});var Rt=i(S);On=a(Rt,"Now let\u2019s see how to make sure that when we do "),ft=r(Rt,"A",{href:!0});var Jr=i(ft);Dn=a(Jr,"save_pretrained()"),Jr.forEach(s),Fn=a(Rt," or "),ct=r(Rt,"A",{href:!0});var Qr=i(ct);Hn=a(Qr,"push_to_hub()"),Qr.forEach(s),Bn=a(Rt,`, the
code of the model is saved.`),Rt.forEach(s),fo=d(e),Q=r(e,"H2",{class:!0});var Vo=i(Q);le=r(Vo,"A",{id:!0,class:!0,href:!0});var Xr=i(le);ns=r(Xr,"SPAN",{});var Zr=i(ns);_(Re.$$.fragment,Zr),Zr.forEach(s),Xr.forEach(s),Sn=d(Vo),ls=r(Vo,"SPAN",{});var ei=i(ls);Wn=a(ei,"Sending the code to the Hub"),ei.forEach(s),Vo.forEach(s),co=d(e),_(re.$$.fragment,e),ho=d(e),$=r(e,"P",{});var j=i($);Ln=a(j,"First, make sure your model is fully defined in a "),rs=r(j,"CODE",{});var ti=i(rs);Yn=a(ti,".py"),ti.forEach(s),zn=a(j,` file. It can rely on relative imports to some other files as
long as all the files are in the same directory (we don\u2019t support submodules for this feature yet). For our example,
we\u2019ll define a `),is=r(j,"CODE",{});var si=i(is);Gn=a(si,"modeling_resnet.py"),si.forEach(s),Kn=a(j," file and a "),fs=r(j,"CODE",{});var oi=i(fs);Un=a(oi,"configuration_resnet.py"),oi.forEach(s),Vn=a(j,` file in a folder of the current working
directory named `),cs=r(j,"CODE",{});var ai=i(cs);Jn=a(ai,"resnet_model"),ai.forEach(s),Qn=a(j,". The configuration file contains the code for "),ds=r(j,"CODE",{});var ni=i(ds);Xn=a(ni,"ResnetConfig"),ni.forEach(s),Zn=a(j,` and the modeling file
contains the code of `),hs=r(j,"CODE",{});var li=i(hs);el=a(li,"ResnetModel"),li.forEach(s),tl=a(j," and "),ms=r(j,"CODE",{});var ri=i(ms);sl=a(ri,"ResnetModelForImageClassification"),ri.forEach(s),ol=a(j,"."),j.forEach(s),mo=d(e),_(qe.$$.fragment,e),uo=d(e),W=r(e,"P",{});var qt=i(W);al=a(qt,"The "),us=r(qt,"CODE",{});var ii=i(us);nl=a(ii,"__init__.py"),ii.forEach(s),ll=a(qt," can be empty, it\u2019s just there so that Python detects "),ps=r(qt,"CODE",{});var fi=i(ps);rl=a(fi,"resnet_model"),fi.forEach(s),il=a(qt," can be use as a module."),qt.forEach(s),po=d(e),_(ie.$$.fragment,e),_o=d(e),dt=r(e,"P",{});var ci=i(dt);fl=a(ci,"Note that you can re-use (or subclass) an existing configuration/model."),ci.forEach(s),go=d(e),ht=r(e,"P",{});var di=i(ht);cl=a(di,`To share your model with the community, follow those steps: first import the ResNet model and config from the newly
created files:`),di.forEach(s),yo=d(e),_(Ie.$$.fragment,e),wo=d(e),fe=r(e,"P",{});var Jo=i(fe);dl=a(Jo,"Then you have to tell the library you want to copy the code files of those objects when using the "),_s=r(Jo,"CODE",{});var hi=i(_s);hl=a(hi,"save_pretrained"),hi.forEach(s),ml=a(Jo,`
method and properly register them with a given Auto class (especially for models), just run:`),Jo.forEach(s),bo=d(e),_(Ne.$$.fragment,e),vo=d(e),ce=r(e,"P",{});var Qo=i(ce);ul=a(Qo,`Note that there is no need to specify an auto class for the configuration (there is only one auto class for them,
`),mt=r(Qo,"A",{href:!0});var mi=i(mt);pl=a(mi,"AutoConfig"),mi.forEach(s),_l=a(Qo,`) but it\u2019s different for models. Your custom model could be suitable for many different tasks, so you
have to specify which one of the auto classes is the correct one for your model.`),Qo.forEach(s),$o=d(e),ut=r(e,"P",{});var ui=i(ut);gl=a(ui,"Next, let\u2019s create the config and models as we did before:"),ui.forEach(s),ko=d(e),_(xe.$$.fragment,e),Eo=d(e),pt=r(e,"P",{});var pi=i(pt);yl=a(pi,"Now to send the model to the Hub, make sure you are logged in. Either run in your terminal:"),pi.forEach(s),jo=d(e),_(Oe.$$.fragment,e),Co=d(e),_t=r(e,"P",{});var _i=i(_t);wl=a(_i,"or from a notebook:"),_i.forEach(s),Po=d(e),_(De.$$.fragment,e),Ao=d(e),gt=r(e,"P",{});var gi=i(gt);bl=a(gi,"You can then push to to your own namespace (or an organization you are a member of) like this:"),gi.forEach(s),To=d(e),_(Fe.$$.fragment,e),Mo=d(e),M=r(e,"P",{});var ge=i(M);vl=a(ge,`On top of the modeling weights and the configuration in json format, this also copied the modeling and
configuration `),gs=r(ge,"CODE",{});var yi=i(gs);$l=a(yi,".py"),yi.forEach(s),kl=a(ge," files in the folder "),ys=r(ge,"CODE",{});var wi=i(ys);El=a(wi,"custom-resnet50d"),wi.forEach(s),jl=a(ge,` and uploaded the result to the Hub. You can check the result
in this `),He=r(ge,"A",{href:!0,rel:!0});var bi=i(He);Cl=a(bi,"model repo"),bi.forEach(s),Pl=a(ge,"."),ge.forEach(s),Ro=d(e),de=r(e,"P",{});var Xo=i(de);Al=a(Xo,"See the "),yt=r(Xo,"A",{href:!0});var vi=i(yt);Tl=a(vi,"sharing tutorial"),vi.forEach(s),Ml=a(Xo," for more information on the push to Hub method."),Xo.forEach(s),qo=d(e),X=r(e,"H2",{class:!0});var Zo=i(X);he=r(Zo,"A",{id:!0,class:!0,href:!0});var $i=i(he);ws=r($i,"SPAN",{});var ki=i(ws);_(Be.$$.fragment,ki),ki.forEach(s),$i.forEach(s),Rl=d(Zo),bs=r(Zo,"SPAN",{});var Ei=i(bs);ql=a(Ei,"Using a model with custom code"),Ei.forEach(s),Zo.forEach(s),Io=d(e),R=r(e,"P",{});var ye=i(R);Il=a(ye,`You can use any configuration, model or tokenizer with custom code files in its repository with the auto-classes and
the `),vs=r(ye,"CODE",{});var ji=i(vs);Nl=a(ji,"from_pretrained"),ji.forEach(s),xl=a(ye," method. All files and code uploaded to the Hub are scanned for malware (refer to the "),Se=r(ye,"A",{href:!0,rel:!0});var Ci=i(Se);Ol=a(Ci,"Hub security"),Ci.forEach(s),Dl=a(ye,` documentation for more information), but you should still
review the model code and author to avoid executing malicious code on your machine. Set `),$s=r(ye,"CODE",{});var Pi=i($s);Fl=a(Pi,"trust_remote_code=True"),Pi.forEach(s),Hl=a(ye,` to use
a model with custom code:`),ye.forEach(s),No=d(e),_(We.$$.fragment,e),xo=d(e),me=r(e,"P",{});var ea=i(me);Bl=a(ea,"It is also strongly encouraged to pass a commit hash as a "),ks=r(ea,"CODE",{});var Ai=i(ks);Sl=a(Ai,"revision"),Ai.forEach(s),Wl=a(ea,` to make sure the author of the models did not
update the code with some malicious new lines (unless you fully trust the authors of the models).`),ea.forEach(s),Oo=d(e),_(Le.$$.fragment,e),Do=d(e),wt=r(e,"P",{});var Ti=i(wt);Ll=a(Ti,`Note that when browsing the commit history of the model repo on the Hub, there is a button to easily copy the commit
hash of any commit.`),Ti.forEach(s),Fo=d(e),Z=r(e,"H2",{class:!0});var ta=i(Z);ue=r(ta,"A",{id:!0,class:!0,href:!0});var Mi=i(ue);Es=r(Mi,"SPAN",{});var Ri=i(Es);_(Ye.$$.fragment,Ri),Ri.forEach(s),Mi.forEach(s),Yl=d(ta),js=r(ta,"SPAN",{});var qi=i(js);zl=a(qi,"Registering a model with custom code to the auto classes"),qi.forEach(s),ta.forEach(s),Ho=d(e),bt=r(e,"P",{});var Ii=i(bt);Gl=a(Ii,`If you are writing a library that extends \u{1F917} Transformers, you may want to extend the auto classes to include your own
model. This is different from pushing the code to the Hub in the sense that users will need to import your library to
get the custom models (contrarily to automatically downloading the model code from the Hub).`),Ii.forEach(s),Bo=d(e),L=r(e,"P",{});var It=i(L);Kl=a(It,"As long as your config has a "),Cs=r(It,"CODE",{});var Ni=i(Cs);Ul=a(Ni,"model_type"),Ni.forEach(s),Vl=a(It,` attribute that is different from existing model types, and that your model
classes have the right `),Ps=r(It,"CODE",{});var xi=i(Ps);Jl=a(xi,"config_class"),xi.forEach(s),Ql=a(It," attributes, you can just add them to the auto classes likes this:"),It.forEach(s),So=d(e),_(ze.$$.fragment,e),Wo=d(e),q=r(e,"P",{});var we=i(q);Xl=a(we,"Note that the first argument used when registering your custom config to "),vt=r(we,"A",{href:!0});var Oi=i(vt);Zl=a(Oi,"AutoConfig"),Oi.forEach(s),er=a(we," needs to match the "),As=r(we,"CODE",{});var Di=i(As);tr=a(Di,"model_type"),Di.forEach(s),sr=a(we,`
of your custom config, and the first argument used when registering your custom models to any auto model class needs
to match the `),Ts=r(we,"CODE",{});var Fi=i(Ts);or=a(Fi,"config_class"),Fi.forEach(s),ar=a(we," of those models."),we.forEach(s),this.h()},h(){h(m,"name","hf:doc:metadata"),h(m,"content",JSON.stringify(Ki)),h(v,"id","sharing-custom-models"),h(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(v,"href","#sharing-custom-models"),h(u,"class","relative group"),h(be,"href","https://github.com/rwightman/pytorch-image-models/tree/master/timm"),h(be,"rel","nofollow"),h(Ve,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),h(te,"id","writing-a-custom-configuration"),h(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(te,"href","#writing-a-custom-configuration"),h(K,"class","relative group"),h(Ze,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),h(et,"href","/docs/transformers/master/en/main_classes/model#transformers.file_utils.PushToHubMixin.push_to_hub"),h(oe,"id","writing-a-custom-model"),h(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oe,"href","#writing-a-custom-model"),h(J,"class","relative group"),h(tt,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertModel"),h(ot,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(nt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),h(lt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),h(rt,"href","/docs/transformers/master/en/main_classes/model#transformers.file_utils.PushToHubMixin.push_to_hub"),h(ft,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),h(ct,"href","/docs/transformers/master/en/main_classes/model#transformers.file_utils.PushToHubMixin.push_to_hub"),h(le,"id","sending-the-code-to-the-hub"),h(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(le,"href","#sending-the-code-to-the-hub"),h(Q,"class","relative group"),h(mt,"href","/docs/transformers/master/en/model_doc/auto#transformers.AutoConfig"),h(He,"href","https://huggingface.co/sgugger/custom-resnet50d"),h(He,"rel","nofollow"),h(yt,"href","model_sharing"),h(he,"id","using-a-model-with-custom-code"),h(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(he,"href","#using-a-model-with-custom-code"),h(X,"class","relative group"),h(Se,"href","https://huggingface.co/docs/hub/security#malware-scanning"),h(Se,"rel","nofollow"),h(ue,"id","registering-a-model-with-custom-code-to-the-auto-classes"),h(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ue,"href","#registering-a-model-with-custom-code-to-the-auto-classes"),h(Z,"class","relative group"),h(vt,"href","/docs/transformers/master/en/model_doc/auto#transformers.AutoConfig")},m(e,n){t(document.head,m),f(e,k,n),f(e,u,n),t(u,v),t(v,G),g(P,G,null),t(u,I),t(u,ee),t(ee,sa),f(e,qs,n),f(e,Ke,n),t(Ke,oa),f(e,Is,n),f(e,Ue,n),t(Ue,aa),f(e,Ns,n),f(e,N,n),t(N,na),t(N,be),t(be,la),t(N,ra),t(N,Ve),t(Ve,ia),t(N,fa),f(e,xs,n),f(e,K,n),t(K,te),t(te,xt),g(ve,xt,null),t(K,ca),t(K,Ot),t(Ot,da),f(e,Os,n),f(e,se,n),t(se,ha),t(se,Dt),t(Dt,ma),t(se,ua),f(e,Ds,n),f(e,Je,n),t(Je,pa),f(e,Fs,n),g($e,e,n),f(e,Hs,n),f(e,Qe,n),t(Qe,_a),f(e,Bs,n),f(e,x,n),t(x,ke),t(ke,ga),t(ke,Ft),t(Ft,ya),t(ke,wa),t(x,ba),t(x,U),t(U,va),t(U,Ht),t(Ht,$a),t(U,ka),t(U,Bt),t(Bt,Ea),t(U,ja),t(x,Ca),t(x,V),t(V,Pa),t(V,St),t(St,Aa),t(V,Ta),t(V,Wt),t(Wt,Ma),t(V,Ra),f(e,Ss,n),f(e,O,n),t(O,qa),t(O,Lt),t(Lt,Ia),t(O,Na),t(O,Yt),t(Yt,xa),t(O,Oa),f(e,Ws,n),f(e,D,n),t(D,Da),t(D,zt),t(zt,Fa),t(D,Ha),t(D,Gt),t(Gt,Ba),t(D,Sa),f(e,Ls,n),f(e,Xe,n),t(Xe,Wa),f(e,Ys,n),g(Ee,e,n),f(e,zs,n),f(e,A,n),t(A,La),t(A,Kt),t(Kt,Ya),t(A,za),t(A,Ut),t(Ut,Ga),t(A,Ka),t(A,Vt),t(Vt,Ua),t(A,Va),f(e,Gs,n),g(je,e,n),f(e,Ks,n),f(e,F,n),t(F,Ja),t(F,Ze),t(Ze,Qa),t(F,Xa),t(F,et),t(et,Za),t(F,en),f(e,Us,n),f(e,J,n),t(J,oe),t(oe,Jt),g(Ce,Jt,null),t(J,tn),t(J,Qt),t(Qt,sn),f(e,Vs,n),f(e,H,n),t(H,on),t(H,tt),t(tt,an),t(H,nn),t(H,Xt),t(Xt,ln),t(H,rn),f(e,Js,n),f(e,ae,n),t(ae,fn),t(ae,Zt),t(Zt,cn),t(ae,dn),f(e,Qs,n),g(Pe,e,n),f(e,Xs,n),f(e,st,n),t(st,hn),f(e,Zs,n),g(Ae,e,n),f(e,eo,n),f(e,C,n),t(C,mn),t(C,es),t(es,un),t(C,pn),t(C,ts),t(ts,_n),t(C,gn),t(C,ss),t(ss,yn),t(C,wn),t(C,os),t(os,bn),t(C,vn),f(e,to,n),g(ne,e,n),f(e,so,n),f(e,B,n),t(B,$n),t(B,as),t(as,kn),t(B,En),t(B,ot),t(ot,jn),t(B,Cn),f(e,oo,n),f(e,at,n),t(at,Pn),f(e,ao,n),g(Te,e,n),f(e,no,n),f(e,T,n),t(T,An),t(T,nt),t(nt,Tn),t(T,Mn),t(T,lt),t(lt,Rn),t(T,qn),t(T,rt),t(rt,In),t(T,Nn),f(e,lo,n),f(e,it,n),t(it,xn),f(e,ro,n),g(Me,e,n),f(e,io,n),f(e,S,n),t(S,On),t(S,ft),t(ft,Dn),t(S,Fn),t(S,ct),t(ct,Hn),t(S,Bn),f(e,fo,n),f(e,Q,n),t(Q,le),t(le,ns),g(Re,ns,null),t(Q,Sn),t(Q,ls),t(ls,Wn),f(e,co,n),g(re,e,n),f(e,ho,n),f(e,$,n),t($,Ln),t($,rs),t(rs,Yn),t($,zn),t($,is),t(is,Gn),t($,Kn),t($,fs),t(fs,Un),t($,Vn),t($,cs),t(cs,Jn),t($,Qn),t($,ds),t(ds,Xn),t($,Zn),t($,hs),t(hs,el),t($,tl),t($,ms),t(ms,sl),t($,ol),f(e,mo,n),g(qe,e,n),f(e,uo,n),f(e,W,n),t(W,al),t(W,us),t(us,nl),t(W,ll),t(W,ps),t(ps,rl),t(W,il),f(e,po,n),g(ie,e,n),f(e,_o,n),f(e,dt,n),t(dt,fl),f(e,go,n),f(e,ht,n),t(ht,cl),f(e,yo,n),g(Ie,e,n),f(e,wo,n),f(e,fe,n),t(fe,dl),t(fe,_s),t(_s,hl),t(fe,ml),f(e,bo,n),g(Ne,e,n),f(e,vo,n),f(e,ce,n),t(ce,ul),t(ce,mt),t(mt,pl),t(ce,_l),f(e,$o,n),f(e,ut,n),t(ut,gl),f(e,ko,n),g(xe,e,n),f(e,Eo,n),f(e,pt,n),t(pt,yl),f(e,jo,n),g(Oe,e,n),f(e,Co,n),f(e,_t,n),t(_t,wl),f(e,Po,n),g(De,e,n),f(e,Ao,n),f(e,gt,n),t(gt,bl),f(e,To,n),g(Fe,e,n),f(e,Mo,n),f(e,M,n),t(M,vl),t(M,gs),t(gs,$l),t(M,kl),t(M,ys),t(ys,El),t(M,jl),t(M,He),t(He,Cl),t(M,Pl),f(e,Ro,n),f(e,de,n),t(de,Al),t(de,yt),t(yt,Tl),t(de,Ml),f(e,qo,n),f(e,X,n),t(X,he),t(he,ws),g(Be,ws,null),t(X,Rl),t(X,bs),t(bs,ql),f(e,Io,n),f(e,R,n),t(R,Il),t(R,vs),t(vs,Nl),t(R,xl),t(R,Se),t(Se,Ol),t(R,Dl),t(R,$s),t($s,Fl),t(R,Hl),f(e,No,n),g(We,e,n),f(e,xo,n),f(e,me,n),t(me,Bl),t(me,ks),t(ks,Sl),t(me,Wl),f(e,Oo,n),g(Le,e,n),f(e,Do,n),f(e,wt,n),t(wt,Ll),f(e,Fo,n),f(e,Z,n),t(Z,ue),t(ue,Es),g(Ye,Es,null),t(Z,Yl),t(Z,js),t(js,zl),f(e,Ho,n),f(e,bt,n),t(bt,Gl),f(e,Bo,n),f(e,L,n),t(L,Kl),t(L,Cs),t(Cs,Ul),t(L,Vl),t(L,Ps),t(Ps,Jl),t(L,Ql),f(e,So,n),g(ze,e,n),f(e,Wo,n),f(e,q,n),t(q,Xl),t(q,vt),t(vt,Zl),t(q,er),t(q,As),t(As,tr),t(q,sr),t(q,Ts),t(Ts,or),t(q,ar),Lo=!0},p(e,[n]){const Ge={};n&2&&(Ge.$$scope={dirty:n,ctx:e}),ne.$set(Ge);const Ms={};n&2&&(Ms.$$scope={dirty:n,ctx:e}),re.$set(Ms);const Rs={};n&2&&(Rs.$$scope={dirty:n,ctx:e}),ie.$set(Rs)},i(e){Lo||(y(P.$$.fragment,e),y(ve.$$.fragment,e),y($e.$$.fragment,e),y(Ee.$$.fragment,e),y(je.$$.fragment,e),y(Ce.$$.fragment,e),y(Pe.$$.fragment,e),y(Ae.$$.fragment,e),y(ne.$$.fragment,e),y(Te.$$.fragment,e),y(Me.$$.fragment,e),y(Re.$$.fragment,e),y(re.$$.fragment,e),y(qe.$$.fragment,e),y(ie.$$.fragment,e),y(Ie.$$.fragment,e),y(Ne.$$.fragment,e),y(xe.$$.fragment,e),y(Oe.$$.fragment,e),y(De.$$.fragment,e),y(Fe.$$.fragment,e),y(Be.$$.fragment,e),y(We.$$.fragment,e),y(Le.$$.fragment,e),y(Ye.$$.fragment,e),y(ze.$$.fragment,e),Lo=!0)},o(e){w(P.$$.fragment,e),w(ve.$$.fragment,e),w($e.$$.fragment,e),w(Ee.$$.fragment,e),w(je.$$.fragment,e),w(Ce.$$.fragment,e),w(Pe.$$.fragment,e),w(Ae.$$.fragment,e),w(ne.$$.fragment,e),w(Te.$$.fragment,e),w(Me.$$.fragment,e),w(Re.$$.fragment,e),w(re.$$.fragment,e),w(qe.$$.fragment,e),w(ie.$$.fragment,e),w(Ie.$$.fragment,e),w(Ne.$$.fragment,e),w(xe.$$.fragment,e),w(Oe.$$.fragment,e),w(De.$$.fragment,e),w(Fe.$$.fragment,e),w(Be.$$.fragment,e),w(We.$$.fragment,e),w(Le.$$.fragment,e),w(Ye.$$.fragment,e),w(ze.$$.fragment,e),Lo=!1},d(e){s(m),e&&s(k),e&&s(u),b(P),e&&s(qs),e&&s(Ke),e&&s(Is),e&&s(Ue),e&&s(Ns),e&&s(N),e&&s(xs),e&&s(K),b(ve),e&&s(Os),e&&s(se),e&&s(Ds),e&&s(Je),e&&s(Fs),b($e,e),e&&s(Hs),e&&s(Qe),e&&s(Bs),e&&s(x),e&&s(Ss),e&&s(O),e&&s(Ws),e&&s(D),e&&s(Ls),e&&s(Xe),e&&s(Ys),b(Ee,e),e&&s(zs),e&&s(A),e&&s(Gs),b(je,e),e&&s(Ks),e&&s(F),e&&s(Us),e&&s(J),b(Ce),e&&s(Vs),e&&s(H),e&&s(Js),e&&s(ae),e&&s(Qs),b(Pe,e),e&&s(Xs),e&&s(st),e&&s(Zs),b(Ae,e),e&&s(eo),e&&s(C),e&&s(to),b(ne,e),e&&s(so),e&&s(B),e&&s(oo),e&&s(at),e&&s(ao),b(Te,e),e&&s(no),e&&s(T),e&&s(lo),e&&s(it),e&&s(ro),b(Me,e),e&&s(io),e&&s(S),e&&s(fo),e&&s(Q),b(Re),e&&s(co),b(re,e),e&&s(ho),e&&s($),e&&s(mo),b(qe,e),e&&s(uo),e&&s(W),e&&s(po),b(ie,e),e&&s(_o),e&&s(dt),e&&s(go),e&&s(ht),e&&s(yo),b(Ie,e),e&&s(wo),e&&s(fe),e&&s(bo),b(Ne,e),e&&s(vo),e&&s(ce),e&&s($o),e&&s(ut),e&&s(ko),b(xe,e),e&&s(Eo),e&&s(pt),e&&s(jo),b(Oe,e),e&&s(Co),e&&s(_t),e&&s(Po),b(De,e),e&&s(Ao),e&&s(gt),e&&s(To),b(Fe,e),e&&s(Mo),e&&s(M),e&&s(Ro),e&&s(de),e&&s(qo),e&&s(X),b(Be),e&&s(Io),e&&s(R),e&&s(No),b(We,e),e&&s(xo),e&&s(me),e&&s(Oo),b(Le,e),e&&s(Do),e&&s(wt),e&&s(Fo),e&&s(Z),b(Ye),e&&s(Ho),e&&s(bt),e&&s(Bo),e&&s(L),e&&s(So),b(ze,e),e&&s(Wo),e&&s(q)}}}const Ki={local:"sharing-custom-models",sections:[{local:"writing-a-custom-configuration",title:"Writing a custom configuration"},{local:"writing-a-custom-model",title:"Writing a custom model"},{local:"sending-the-code-to-the-hub",title:"Sending the code to the Hub"},{local:"using-a-model-with-custom-code",title:"Using a model with custom code"},{local:"registering-a-model-with-custom-code-to-the-auto-classes",title:"Registering a model with custom code to the auto classes"}],title:"Sharing custom models"};function Ui(z,m,k){let{fw:u}=m;return z.$$set=v=>{"fw"in v&&k(0,u=v.fw)},[u]}class ef extends Hi{constructor(m){super();Bi(this,m,Ui,Gi,Si,{fw:0})}}export{ef as default,Ki as metadata};
