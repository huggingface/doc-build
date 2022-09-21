import{S as Si,i as Bi,s as Hi,e as r,k as c,w as p,t as o,M as Wi,c as l,d as s,m as d,a as i,x as _,h as a,b as h,G as t,g as f,y as g,q as y,o as w,B as b,v as Li}from"../chunks/vendor-hf-doc-builder.js";import{T as nl}from"../chunks/Tip-hf-doc-builder.js";import{I as xt}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as k}from"../chunks/CodeBlock-hf-doc-builder.js";function Yi(Z){let m,E;return{c(){m=r("p"),E=o("If your model is very similar to a model inside the library, you can re-use the same configuration as this model.")},l(u){m=l(u,"P",{});var v=i(m);E=a(v,"If your model is very similar to a model inside the library, you can re-use the same configuration as this model."),v.forEach(s)},m(u,v){f(u,m,v),t(m,E)},d(u){u&&s(m)}}}function zi(Z){let m,E;return{c(){m=r("p"),E=o("This API is experimental and may have some slight breaking changes in the next releases.")},l(u){m=l(u,"P",{});var v=i(m);E=a(v,"This API is experimental and may have some slight breaking changes in the next releases."),v.forEach(s)},m(u,v){f(u,m,v),t(m,E)},d(u){u&&s(m)}}}function Gi(Z){let m,E,u,v,z;return{c(){m=r("p"),E=o(`If copying a modeling files from the library, you will need to replace all the relative imports at the top of the file
to import from the `),u=r("code"),v=o("transformers"),z=o(" package.")},l(P){m=l(P,"P",{});var I=i(m);E=a(I,`If copying a modeling files from the library, you will need to replace all the relative imports at the top of the file
to import from the `),u=l(I,"CODE",{});var ee=i(u);v=a(ee,"transformers"),ee.forEach(s),z=a(I," package."),I.forEach(s)},m(P,I){f(P,m,I),t(m,E),t(m,u),t(u,v),t(m,z)},d(P){P&&s(m)}}}function Ui(Z){let m,E,u,v,z,P,I,ee,sa,qs,Ue,oa,Is,Ke,aa,Ns,N,na,be,ra,la,Ve,ia,fa,xs,G,te,Ot,ve,ca,Dt,da,Os,se,ha,Ft,ma,ua,Ds,Je,pa,Fs,$e,Ss,Qe,_a,Bs,x,ke,ga,St,ya,wa,ba,U,va,Bt,$a,ka,Ht,Ea,ja,Ca,K,Pa,Wt,Aa,Ma,Lt,Ra,Ta,Hs,O,qa,Yt,Ia,Na,zt,xa,Oa,Ws,D,Da,Gt,Fa,Sa,Ut,Ba,Ha,Ls,Xe,Wa,Ys,Ee,zs,A,La,Kt,Ya,za,Vt,Ga,Ua,Jt,Ka,Va,Gs,je,Us,F,Ja,Ze,Qa,Xa,et,Za,en,Ks,V,oe,Qt,Ce,tn,Xt,sn,Vs,S,on,tt,an,nn,st,rn,ln,Js,ae,fn,Zt,cn,dn,Qs,Pe,Xs,ot,hn,Zs,Ae,eo,C,mn,es,un,pn,ts,_n,gn,ss,yn,wn,os,bn,vn,to,ne,so,B,$n,as,kn,En,at,jn,Cn,oo,nt,Pn,ao,Me,no,M,An,rt,Mn,Rn,lt,Tn,qn,it,In,Nn,ro,ft,xn,lo,Re,io,H,On,ct,Dn,Fn,dt,Sn,Bn,fo,J,re,ns,Te,Hn,rs,Wn,co,le,ho,$,Ln,ls,Yn,zn,is,Gn,Un,fs,Kn,Vn,cs,Jn,Qn,ds,Xn,Zn,hs,er,tr,ms,sr,or,mo,qe,uo,W,ar,us,nr,rr,ps,lr,ir,po,ie,_o,ht,fr,go,mt,cr,yo,Ie,wo,fe,dr,_s,hr,mr,bo,Ne,vo,ce,ur,ut,pr,_r,$o,pt,gr,ko,xe,Eo,_t,yr,jo,Oe,Co,gt,wr,Po,De,Ao,yt,br,Mo,Fe,Ro,R,vr,gs,$r,kr,ys,Er,jr,Se,Cr,Pr,To,de,Ar,wt,Mr,Rr,qo,Q,he,ws,Be,Tr,bs,qr,Io,T,Ir,vs,Nr,xr,He,Or,Dr,$s,Fr,Sr,No,We,xo,me,Br,ks,Hr,Wr,Oo,Le,Do,bt,Lr,Fo,X,ue,Es,Ye,Yr,js,zr,So,vt,Gr,Bo,L,Ur,Cs,Kr,Vr,Ps,Jr,Qr,Ho,ze,Wo,q,Xr,$t,Zr,el,As,tl,sl,Ms,ol,al,Lo;return P=new xt({}),ve=new xt({}),$e=new k({props:{code:`from transformers import PretrainedConfig
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
        <span class="hljs-built_in">super</span>().__init__(**kwargs)`}}),Ee=new k({props:{code:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d_config.save_pretrained("custom-resnet")`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d_config.save_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)`}}),je=new k({props:{code:'resnet50d_config = ResnetConfig.from_pretrained("custom-resnet")',highlighted:'resnet50d_config = ResnetConfig.from_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)'}}),Ce=new xt({}),Pe=new k({props:{code:`from transformers import PreTrainedModel
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
        <span class="hljs-keyword">return</span> self.model.forward_features(tensor)`}}),Ae=new k({props:{code:`class ResnetModelForImageClassification(PreTrainedModel):
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
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;logits&quot;</span>: logits}`}}),ne=new nl({props:{$$slots:{default:[Yi]},$$scope:{ctx:Z}}}),Me=new k({props:{code:"resnet50d = ResnetModelForImageClassification(resnet50d_config)",highlighted:"resnet50d = ResnetModelForImageClassification(resnet50d_config)"}}),Re=new k({props:{code:`import timm

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`,highlighted:`<span class="hljs-keyword">import</span> timm

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),Te=new xt({}),le=new nl({props:{warning:!0,$$slots:{default:[zi]},$$scope:{ctx:Z}}}),qe=new k({props:{code:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.py
    \u251C\u2500\u2500 configuration_resnet.py
    \u2514\u2500\u2500 modeling_resnet.py`,highlighted:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.<span class="hljs-keyword">py</span>
    \u251C\u2500\u2500 configuration_resnet.<span class="hljs-keyword">py</span>
    \u2514\u2500\u2500 modeling_resnet.<span class="hljs-keyword">py</span>`}}),ie=new nl({props:{warning:!0,$$slots:{default:[Gi]},$$scope:{ctx:Z}}}),Ie=new k({props:{code:`from resnet_model.configuration_resnet import ResnetConfig
from resnet_model.modeling_resnet import ResnetModel, ResnetModelForImageClassification`,highlighted:`<span class="hljs-keyword">from</span> resnet_model.configuration_resnet <span class="hljs-keyword">import</span> ResnetConfig
<span class="hljs-keyword">from</span> resnet_model.modeling_resnet <span class="hljs-keyword">import</span> ResnetModel, ResnetModelForImageClassification`}}),Ne=new k({props:{code:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class("AutoModel")
ResnetModelForImageClassification.register_for_auto_class("AutoModelForImageClassification")`,highlighted:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class(<span class="hljs-string">&quot;AutoModel&quot;</span>)
ResnetModelForImageClassification.register_for_auto_class(<span class="hljs-string">&quot;AutoModelForImageClassification&quot;</span>)`}}),xe=new k({props:{code:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),Oe=new k({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}}),De=new k({props:{code:`from huggingface_hub import notebook_login

notebook_login()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),Fe=new k({props:{code:'resnet50d.push_to_hub("custom-resnet50d")',highlighted:'resnet50d.push_to_hub(<span class="hljs-string">&quot;custom-resnet50d&quot;</span>)'}}),Be=new xt({}),We=new k({props:{code:`from transformers import AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained("sgugger/custom-resnet50d", trust_remote_code=True)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained(<span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>)`}}),Le=new k({props:{code:`commit_hash = "ed94a7c6247d8aedce4647f00f20de6875b5b292"
model = AutoModelForImageClassification.from_pretrained(
    "sgugger/custom-resnet50d", trust_remote_code=True, revision=commit_hash
)`,highlighted:`commit_hash = <span class="hljs-string">&quot;ed94a7c6247d8aedce4647f00f20de6875b5b292&quot;</span>
model = AutoModelForImageClassification.from_pretrained(
    <span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>, revision=commit_hash
)`}}),Ye=new xt({}),ze=new k({props:{code:`from transformers import AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register("resnet", ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register(<span class="hljs-string">&quot;resnet&quot;</span>, ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification)`}}),{c(){m=r("meta"),E=c(),u=r("h1"),v=r("a"),z=r("span"),p(P.$$.fragment),I=c(),ee=r("span"),sa=o("Sharing custom models"),qs=c(),Ue=r("p"),oa=o(`The \u{1F917} Transformers library is designed to be easily extensible. Every model is fully coded in a given subfolder
of the repository with no abstraction, so you can easily copy a modeling file and tweak it to your needs.`),Is=c(),Ke=r("p"),aa=o(`If you are writing a brand new model, it might be easier to start from scratch. In this tutorial, we will show you
how to write a custom model and its configuration so it can be used inside Transformers, and how you can share it
with the community (with the code it relies on) so that anyone can use it, even if it\u2019s not present in the \u{1F917}
Transformers library.`),Ns=c(),N=r("p"),na=o(`We will illustrate all of this on a ResNet model, by wrapping the ResNet class of the
`),be=r("a"),ra=o("timm library"),la=o(" into a "),Ve=r("a"),ia=o("PreTrainedModel"),fa=o("."),xs=c(),G=r("h2"),te=r("a"),Ot=r("span"),p(ve.$$.fragment),ca=c(),Dt=r("span"),da=o("Writing a custom configuration"),Os=c(),se=r("p"),ha=o(`Before we dive into the model, let\u2019s first write its configuration. The configuration of a model is an object that
will contain all the necessary information to build the model. As we will see in the next section, the model can only
take a `),Ft=r("code"),ma=o("config"),ua=o(" to be initialized, so we really need that object to be as complete as possible."),Ds=c(),Je=r("p"),pa=o(`In our example, we will take a couple of arguments of the ResNet class that we might want to tweak. Different
configurations will then give us the different types of ResNets that are possible. We then just store those arguments,
after checking the validity of a few of them.`),Fs=c(),p($e.$$.fragment),Ss=c(),Qe=r("p"),_a=o("The three important things to remember when writing you own configuration are the following:"),Bs=c(),x=r("ul"),ke=r("li"),ga=o("you have to inherit from "),St=r("code"),ya=o("PretrainedConfig"),wa=o(","),ba=c(),U=r("li"),va=o("the "),Bt=r("code"),$a=o("__init__"),ka=o(" of your "),Ht=r("code"),Ea=o("PretrainedConfig"),ja=o(" must accept any kwargs,"),Ca=c(),K=r("li"),Pa=o("those "),Wt=r("code"),Aa=o("kwargs"),Ma=o(" need to be passed to the superclass "),Lt=r("code"),Ra=o("__init__"),Ta=o("."),Hs=c(),O=r("p"),qa=o(`The inheritance is to make sure you get all the functionality from the \u{1F917} Transformers library, while the two other
constraints come from the fact a `),Yt=r("code"),Ia=o("PretrainedConfig"),Na=o(` has more fields than the ones you are setting. When reloading a
config with the `),zt=r("code"),xa=o("from_pretrained"),Oa=o(` method, those fields need to be accepted by your config and then sent to the
superclass.`),Ws=c(),D=r("p"),Da=o("Defining a "),Gt=r("code"),Fa=o("model_type"),Sa=o(" for your configuration (here "),Ut=r("code"),Ba=o('model_type="resnet"'),Ha=o(`) is not mandatory, unless you want to
register your model with the auto classes (see last section).`),Ls=c(),Xe=r("p"),Wa=o(`With this done, you can easily create and save your configuration like you would do with any other model config of the
library. Here is how we can create a resnet50d config and save it:`),Ys=c(),p(Ee.$$.fragment),zs=c(),A=r("p"),La=o("This will save a file named "),Kt=r("code"),Ya=o("config.json"),za=o(" inside the folder "),Vt=r("code"),Ga=o("custom-resnet"),Ua=o(`. You can then reload your config with the
`),Jt=r("code"),Ka=o("from_pretrained"),Va=o(" method:"),Gs=c(),p(je.$$.fragment),Us=c(),F=r("p"),Ja=o("You can also use any other method of the "),Ze=r("a"),Qa=o("PretrainedConfig"),Xa=o(" class, like "),et=r("a"),Za=o("push_to_hub()"),en=o(` to
directly upload your config to the Hub.`),Ks=c(),V=r("h2"),oe=r("a"),Qt=r("span"),p(Ce.$$.fragment),tn=c(),Xt=r("span"),sn=o("Writing a custom model"),Vs=c(),S=r("p"),on=o(`Now that we have our ResNet configuration, we can go on writing the model. We will actually write two: one that
extracts the hidden features from a batch of images (like `),tt=r("a"),an=o("BertModel"),nn=o(`) and one that is suitable for image
classification (like `),st=r("a"),rn=o("BertForSequenceClassification"),ln=o(")."),Js=c(),ae=r("p"),fn=o(`As we mentioned before, we\u2019ll only write a loose wrapper of the model to keep it simple for this example. The only
thing we need to do before writing this class is a map between the block types and actual block classes. Then the
model is defined from the configuration by passing everything to the `),Zt=r("code"),cn=o("ResNet"),dn=o(" class:"),Qs=c(),p(Pe.$$.fragment),Xs=c(),ot=r("p"),hn=o("For the model that will classify images, we just change the forward method:"),Zs=c(),p(Ae.$$.fragment),eo=c(),C=r("p"),mn=o("In both cases, notice how we inherit from "),es=r("code"),un=o("PreTrainedModel"),pn=o(" and call the superclass initialization with the "),ts=r("code"),_n=o("config"),gn=o(`
(a bit like when you write a regular `),ss=r("code"),yn=o("torch.nn.Module"),wn=o("). The line that sets the "),os=r("code"),bn=o("config_class"),vn=o(` is not mandatory, unless
you want to register your model with the auto classes (see last section).`),to=c(),p(ne.$$.fragment),so=c(),B=r("p"),$n=o(`You can have your model return anything you want, but returning a dictionary like we did for
`),as=r("code"),kn=o("ResnetModelForImageClassification"),En=o(`, with the loss included when labels are passed, will make your model directly
usable inside the `),at=r("a"),jn=o("Trainer"),Cn=o(` class. Using another output format is fine as long as you are planning on using your own
training loop or another library for training.`),oo=c(),nt=r("p"),Pn=o("Now that we have our model class, let\u2019s create one:"),ao=c(),p(Me.$$.fragment),no=c(),M=r("p"),An=o("Again, you can use any of the methods of "),rt=r("a"),Mn=o("PreTrainedModel"),Rn=o(", like "),lt=r("a"),Tn=o("save_pretrained()"),qn=o(` or
`),it=r("a"),In=o("push_to_hub()"),Nn=o(`. We will use the second in the next section, and see how to push the model weights
with the code of our model. But first, let\u2019s load some pretrained weights inside our model.`),ro=c(),ft=r("p"),xn=o(`In your own use case, you will probably be training your custom model on your own data. To go fast for this tutorial,
we will use the pretrained version of the resnet50d. Since our model is just a wrapper around it, it\u2019s going to be
easy to transfer those weights:`),lo=c(),p(Re.$$.fragment),io=c(),H=r("p"),On=o("Now let\u2019s see how to make sure that when we do "),ct=r("a"),Dn=o("save_pretrained()"),Fn=o(" or "),dt=r("a"),Sn=o("push_to_hub()"),Bn=o(`, the
code of the model is saved.`),fo=c(),J=r("h2"),re=r("a"),ns=r("span"),p(Te.$$.fragment),Hn=c(),rs=r("span"),Wn=o("Sending the code to the Hub"),co=c(),p(le.$$.fragment),ho=c(),$=r("p"),Ln=o("First, make sure your model is fully defined in a "),ls=r("code"),Yn=o(".py"),zn=o(` file. It can rely on relative imports to some other files as
long as all the files are in the same directory (we don\u2019t support submodules for this feature yet). For our example,
we\u2019ll define a `),is=r("code"),Gn=o("modeling_resnet.py"),Un=o(" file and a "),fs=r("code"),Kn=o("configuration_resnet.py"),Vn=o(` file in a folder of the current working
directory named `),cs=r("code"),Jn=o("resnet_model"),Qn=o(". The configuration file contains the code for "),ds=r("code"),Xn=o("ResnetConfig"),Zn=o(` and the modeling file
contains the code of `),hs=r("code"),er=o("ResnetModel"),tr=o(" and "),ms=r("code"),sr=o("ResnetModelForImageClassification"),or=o("."),mo=c(),p(qe.$$.fragment),uo=c(),W=r("p"),ar=o("The "),us=r("code"),nr=o("__init__.py"),rr=o(" can be empty, it\u2019s just there so that Python detects "),ps=r("code"),lr=o("resnet_model"),ir=o(" can be use as a module."),po=c(),p(ie.$$.fragment),_o=c(),ht=r("p"),fr=o("Note that you can re-use (or subclass) an existing configuration/model."),go=c(),mt=r("p"),cr=o(`To share your model with the community, follow those steps: first import the ResNet model and config from the newly
created files:`),yo=c(),p(Ie.$$.fragment),wo=c(),fe=r("p"),dr=o("Then you have to tell the library you want to copy the code files of those objects when using the "),_s=r("code"),hr=o("save_pretrained"),mr=o(`
method and properly register them with a given Auto class (especially for models), just run:`),bo=c(),p(Ne.$$.fragment),vo=c(),ce=r("p"),ur=o(`Note that there is no need to specify an auto class for the configuration (there is only one auto class for them,
`),ut=r("a"),pr=o("AutoConfig"),_r=o(`) but it\u2019s different for models. Your custom model could be suitable for many different tasks, so you
have to specify which one of the auto classes is the correct one for your model.`),$o=c(),pt=r("p"),gr=o("Next, let\u2019s create the config and models as we did before:"),ko=c(),p(xe.$$.fragment),Eo=c(),_t=r("p"),yr=o("Now to send the model to the Hub, make sure you are logged in. Either run in your terminal:"),jo=c(),p(Oe.$$.fragment),Co=c(),gt=r("p"),wr=o("or from a notebook:"),Po=c(),p(De.$$.fragment),Ao=c(),yt=r("p"),br=o("You can then push to your own namespace (or an organization you are a member of) like this:"),Mo=c(),p(Fe.$$.fragment),Ro=c(),R=r("p"),vr=o(`On top of the modeling weights and the configuration in json format, this also copied the modeling and
configuration `),gs=r("code"),$r=o(".py"),kr=o(" files in the folder "),ys=r("code"),Er=o("custom-resnet50d"),jr=o(` and uploaded the result to the Hub. You can check the result
in this `),Se=r("a"),Cr=o("model repo"),Pr=o("."),To=c(),de=r("p"),Ar=o("See the "),wt=r("a"),Mr=o("sharing tutorial"),Rr=o(" for more information on the push to Hub method."),qo=c(),Q=r("h2"),he=r("a"),ws=r("span"),p(Be.$$.fragment),Tr=c(),bs=r("span"),qr=o("Using a model with custom code"),Io=c(),T=r("p"),Ir=o(`You can use any configuration, model or tokenizer with custom code files in its repository with the auto-classes and
the `),vs=r("code"),Nr=o("from_pretrained"),xr=o(" method. All files and code uploaded to the Hub are scanned for malware (refer to the "),He=r("a"),Or=o("Hub security"),Dr=o(` documentation for more information), but you should still
review the model code and author to avoid executing malicious code on your machine. Set `),$s=r("code"),Fr=o("trust_remote_code=True"),Sr=o(` to use
a model with custom code:`),No=c(),p(We.$$.fragment),xo=c(),me=r("p"),Br=o("It is also strongly encouraged to pass a commit hash as a "),ks=r("code"),Hr=o("revision"),Wr=o(` to make sure the author of the models did not
update the code with some malicious new lines (unless you fully trust the authors of the models).`),Oo=c(),p(Le.$$.fragment),Do=c(),bt=r("p"),Lr=o(`Note that when browsing the commit history of the model repo on the Hub, there is a button to easily copy the commit
hash of any commit.`),Fo=c(),X=r("h2"),ue=r("a"),Es=r("span"),p(Ye.$$.fragment),Yr=c(),js=r("span"),zr=o("Registering a model with custom code to the auto classes"),So=c(),vt=r("p"),Gr=o(`If you are writing a library that extends \u{1F917} Transformers, you may want to extend the auto classes to include your own
model. This is different from pushing the code to the Hub in the sense that users will need to import your library to
get the custom models (contrarily to automatically downloading the model code from the Hub).`),Bo=c(),L=r("p"),Ur=o("As long as your config has a "),Cs=r("code"),Kr=o("model_type"),Vr=o(` attribute that is different from existing model types, and that your model
classes have the right `),Ps=r("code"),Jr=o("config_class"),Qr=o(" attributes, you can just add them to the auto classes likes this:"),Ho=c(),p(ze.$$.fragment),Wo=c(),q=r("p"),Xr=o("Note that the first argument used when registering your custom config to "),$t=r("a"),Zr=o("AutoConfig"),el=o(" needs to match the "),As=r("code"),tl=o("model_type"),sl=o(`
of your custom config, and the first argument used when registering your custom models to any auto model class needs
to match the `),Ms=r("code"),ol=o("config_class"),al=o(" of those models."),this.h()},l(e){const n=Wi('[data-svelte="svelte-1phssyn"]',document.head);m=l(n,"META",{name:!0,content:!0}),n.forEach(s),E=d(e),u=l(e,"H1",{class:!0});var Ge=i(u);v=l(Ge,"A",{id:!0,class:!0,href:!0});var Rs=i(v);z=l(Rs,"SPAN",{});var Ts=i(z);_(P.$$.fragment,Ts),Ts.forEach(s),Rs.forEach(s),I=d(Ge),ee=l(Ge,"SPAN",{});var rl=i(ee);sa=a(rl,"Sharing custom models"),rl.forEach(s),Ge.forEach(s),qs=d(e),Ue=l(e,"P",{});var ll=i(Ue);oa=a(ll,`The \u{1F917} Transformers library is designed to be easily extensible. Every model is fully coded in a given subfolder
of the repository with no abstraction, so you can easily copy a modeling file and tweak it to your needs.`),ll.forEach(s),Is=d(e),Ke=l(e,"P",{});var il=i(Ke);aa=a(il,`If you are writing a brand new model, it might be easier to start from scratch. In this tutorial, we will show you
how to write a custom model and its configuration so it can be used inside Transformers, and how you can share it
with the community (with the code it relies on) so that anyone can use it, even if it\u2019s not present in the \u{1F917}
Transformers library.`),il.forEach(s),Ns=d(e),N=l(e,"P",{});var kt=i(N);na=a(kt,`We will illustrate all of this on a ResNet model, by wrapping the ResNet class of the
`),be=l(kt,"A",{href:!0,rel:!0});var fl=i(be);ra=a(fl,"timm library"),fl.forEach(s),la=a(kt," into a "),Ve=l(kt,"A",{href:!0});var cl=i(Ve);ia=a(cl,"PreTrainedModel"),cl.forEach(s),fa=a(kt,"."),kt.forEach(s),xs=d(e),G=l(e,"H2",{class:!0});var Yo=i(G);te=l(Yo,"A",{id:!0,class:!0,href:!0});var dl=i(te);Ot=l(dl,"SPAN",{});var hl=i(Ot);_(ve.$$.fragment,hl),hl.forEach(s),dl.forEach(s),ca=d(Yo),Dt=l(Yo,"SPAN",{});var ml=i(Dt);da=a(ml,"Writing a custom configuration"),ml.forEach(s),Yo.forEach(s),Os=d(e),se=l(e,"P",{});var zo=i(se);ha=a(zo,`Before we dive into the model, let\u2019s first write its configuration. The configuration of a model is an object that
will contain all the necessary information to build the model. As we will see in the next section, the model can only
take a `),Ft=l(zo,"CODE",{});var ul=i(Ft);ma=a(ul,"config"),ul.forEach(s),ua=a(zo," to be initialized, so we really need that object to be as complete as possible."),zo.forEach(s),Ds=d(e),Je=l(e,"P",{});var pl=i(Je);pa=a(pl,`In our example, we will take a couple of arguments of the ResNet class that we might want to tweak. Different
configurations will then give us the different types of ResNets that are possible. We then just store those arguments,
after checking the validity of a few of them.`),pl.forEach(s),Fs=d(e),_($e.$$.fragment,e),Ss=d(e),Qe=l(e,"P",{});var _l=i(Qe);_a=a(_l,"The three important things to remember when writing you own configuration are the following:"),_l.forEach(s),Bs=d(e),x=l(e,"UL",{});var Et=i(x);ke=l(Et,"LI",{});var Go=i(ke);ga=a(Go,"you have to inherit from "),St=l(Go,"CODE",{});var gl=i(St);ya=a(gl,"PretrainedConfig"),gl.forEach(s),wa=a(Go,","),Go.forEach(s),ba=d(Et),U=l(Et,"LI",{});var jt=i(U);va=a(jt,"the "),Bt=l(jt,"CODE",{});var yl=i(Bt);$a=a(yl,"__init__"),yl.forEach(s),ka=a(jt," of your "),Ht=l(jt,"CODE",{});var wl=i(Ht);Ea=a(wl,"PretrainedConfig"),wl.forEach(s),ja=a(jt," must accept any kwargs,"),jt.forEach(s),Ca=d(Et),K=l(Et,"LI",{});var Ct=i(K);Pa=a(Ct,"those "),Wt=l(Ct,"CODE",{});var bl=i(Wt);Aa=a(bl,"kwargs"),bl.forEach(s),Ma=a(Ct," need to be passed to the superclass "),Lt=l(Ct,"CODE",{});var vl=i(Lt);Ra=a(vl,"__init__"),vl.forEach(s),Ta=a(Ct,"."),Ct.forEach(s),Et.forEach(s),Hs=d(e),O=l(e,"P",{});var Pt=i(O);qa=a(Pt,`The inheritance is to make sure you get all the functionality from the \u{1F917} Transformers library, while the two other
constraints come from the fact a `),Yt=l(Pt,"CODE",{});var $l=i(Yt);Ia=a($l,"PretrainedConfig"),$l.forEach(s),Na=a(Pt,` has more fields than the ones you are setting. When reloading a
config with the `),zt=l(Pt,"CODE",{});var kl=i(zt);xa=a(kl,"from_pretrained"),kl.forEach(s),Oa=a(Pt,` method, those fields need to be accepted by your config and then sent to the
superclass.`),Pt.forEach(s),Ws=d(e),D=l(e,"P",{});var At=i(D);Da=a(At,"Defining a "),Gt=l(At,"CODE",{});var El=i(Gt);Fa=a(El,"model_type"),El.forEach(s),Sa=a(At," for your configuration (here "),Ut=l(At,"CODE",{});var jl=i(Ut);Ba=a(jl,'model_type="resnet"'),jl.forEach(s),Ha=a(At,`) is not mandatory, unless you want to
register your model with the auto classes (see last section).`),At.forEach(s),Ls=d(e),Xe=l(e,"P",{});var Cl=i(Xe);Wa=a(Cl,`With this done, you can easily create and save your configuration like you would do with any other model config of the
library. Here is how we can create a resnet50d config and save it:`),Cl.forEach(s),Ys=d(e),_(Ee.$$.fragment,e),zs=d(e),A=l(e,"P",{});var pe=i(A);La=a(pe,"This will save a file named "),Kt=l(pe,"CODE",{});var Pl=i(Kt);Ya=a(Pl,"config.json"),Pl.forEach(s),za=a(pe," inside the folder "),Vt=l(pe,"CODE",{});var Al=i(Vt);Ga=a(Al,"custom-resnet"),Al.forEach(s),Ua=a(pe,`. You can then reload your config with the
`),Jt=l(pe,"CODE",{});var Ml=i(Jt);Ka=a(Ml,"from_pretrained"),Ml.forEach(s),Va=a(pe," method:"),pe.forEach(s),Gs=d(e),_(je.$$.fragment,e),Us=d(e),F=l(e,"P",{});var Mt=i(F);Ja=a(Mt,"You can also use any other method of the "),Ze=l(Mt,"A",{href:!0});var Rl=i(Ze);Qa=a(Rl,"PretrainedConfig"),Rl.forEach(s),Xa=a(Mt," class, like "),et=l(Mt,"A",{href:!0});var Tl=i(et);Za=a(Tl,"push_to_hub()"),Tl.forEach(s),en=a(Mt,` to
directly upload your config to the Hub.`),Mt.forEach(s),Ks=d(e),V=l(e,"H2",{class:!0});var Uo=i(V);oe=l(Uo,"A",{id:!0,class:!0,href:!0});var ql=i(oe);Qt=l(ql,"SPAN",{});var Il=i(Qt);_(Ce.$$.fragment,Il),Il.forEach(s),ql.forEach(s),tn=d(Uo),Xt=l(Uo,"SPAN",{});var Nl=i(Xt);sn=a(Nl,"Writing a custom model"),Nl.forEach(s),Uo.forEach(s),Vs=d(e),S=l(e,"P",{});var Rt=i(S);on=a(Rt,`Now that we have our ResNet configuration, we can go on writing the model. We will actually write two: one that
extracts the hidden features from a batch of images (like `),tt=l(Rt,"A",{href:!0});var xl=i(tt);an=a(xl,"BertModel"),xl.forEach(s),nn=a(Rt,`) and one that is suitable for image
classification (like `),st=l(Rt,"A",{href:!0});var Ol=i(st);rn=a(Ol,"BertForSequenceClassification"),Ol.forEach(s),ln=a(Rt,")."),Rt.forEach(s),Js=d(e),ae=l(e,"P",{});var Ko=i(ae);fn=a(Ko,`As we mentioned before, we\u2019ll only write a loose wrapper of the model to keep it simple for this example. The only
thing we need to do before writing this class is a map between the block types and actual block classes. Then the
model is defined from the configuration by passing everything to the `),Zt=l(Ko,"CODE",{});var Dl=i(Zt);cn=a(Dl,"ResNet"),Dl.forEach(s),dn=a(Ko," class:"),Ko.forEach(s),Qs=d(e),_(Pe.$$.fragment,e),Xs=d(e),ot=l(e,"P",{});var Fl=i(ot);hn=a(Fl,"For the model that will classify images, we just change the forward method:"),Fl.forEach(s),Zs=d(e),_(Ae.$$.fragment,e),eo=d(e),C=l(e,"P",{});var Y=i(C);mn=a(Y,"In both cases, notice how we inherit from "),es=l(Y,"CODE",{});var Sl=i(es);un=a(Sl,"PreTrainedModel"),Sl.forEach(s),pn=a(Y," and call the superclass initialization with the "),ts=l(Y,"CODE",{});var Bl=i(ts);_n=a(Bl,"config"),Bl.forEach(s),gn=a(Y,`
(a bit like when you write a regular `),ss=l(Y,"CODE",{});var Hl=i(ss);yn=a(Hl,"torch.nn.Module"),Hl.forEach(s),wn=a(Y,"). The line that sets the "),os=l(Y,"CODE",{});var Wl=i(os);bn=a(Wl,"config_class"),Wl.forEach(s),vn=a(Y,` is not mandatory, unless
you want to register your model with the auto classes (see last section).`),Y.forEach(s),to=d(e),_(ne.$$.fragment,e),so=d(e),B=l(e,"P",{});var Tt=i(B);$n=a(Tt,`You can have your model return anything you want, but returning a dictionary like we did for
`),as=l(Tt,"CODE",{});var Ll=i(as);kn=a(Ll,"ResnetModelForImageClassification"),Ll.forEach(s),En=a(Tt,`, with the loss included when labels are passed, will make your model directly
usable inside the `),at=l(Tt,"A",{href:!0});var Yl=i(at);jn=a(Yl,"Trainer"),Yl.forEach(s),Cn=a(Tt,` class. Using another output format is fine as long as you are planning on using your own
training loop or another library for training.`),Tt.forEach(s),oo=d(e),nt=l(e,"P",{});var zl=i(nt);Pn=a(zl,"Now that we have our model class, let\u2019s create one:"),zl.forEach(s),ao=d(e),_(Me.$$.fragment,e),no=d(e),M=l(e,"P",{});var _e=i(M);An=a(_e,"Again, you can use any of the methods of "),rt=l(_e,"A",{href:!0});var Gl=i(rt);Mn=a(Gl,"PreTrainedModel"),Gl.forEach(s),Rn=a(_e,", like "),lt=l(_e,"A",{href:!0});var Ul=i(lt);Tn=a(Ul,"save_pretrained()"),Ul.forEach(s),qn=a(_e,` or
`),it=l(_e,"A",{href:!0});var Kl=i(it);In=a(Kl,"push_to_hub()"),Kl.forEach(s),Nn=a(_e,`. We will use the second in the next section, and see how to push the model weights
with the code of our model. But first, let\u2019s load some pretrained weights inside our model.`),_e.forEach(s),ro=d(e),ft=l(e,"P",{});var Vl=i(ft);xn=a(Vl,`In your own use case, you will probably be training your custom model on your own data. To go fast for this tutorial,
we will use the pretrained version of the resnet50d. Since our model is just a wrapper around it, it\u2019s going to be
easy to transfer those weights:`),Vl.forEach(s),lo=d(e),_(Re.$$.fragment,e),io=d(e),H=l(e,"P",{});var qt=i(H);On=a(qt,"Now let\u2019s see how to make sure that when we do "),ct=l(qt,"A",{href:!0});var Jl=i(ct);Dn=a(Jl,"save_pretrained()"),Jl.forEach(s),Fn=a(qt," or "),dt=l(qt,"A",{href:!0});var Ql=i(dt);Sn=a(Ql,"push_to_hub()"),Ql.forEach(s),Bn=a(qt,`, the
code of the model is saved.`),qt.forEach(s),fo=d(e),J=l(e,"H2",{class:!0});var Vo=i(J);re=l(Vo,"A",{id:!0,class:!0,href:!0});var Xl=i(re);ns=l(Xl,"SPAN",{});var Zl=i(ns);_(Te.$$.fragment,Zl),Zl.forEach(s),Xl.forEach(s),Hn=d(Vo),rs=l(Vo,"SPAN",{});var ei=i(rs);Wn=a(ei,"Sending the code to the Hub"),ei.forEach(s),Vo.forEach(s),co=d(e),_(le.$$.fragment,e),ho=d(e),$=l(e,"P",{});var j=i($);Ln=a(j,"First, make sure your model is fully defined in a "),ls=l(j,"CODE",{});var ti=i(ls);Yn=a(ti,".py"),ti.forEach(s),zn=a(j,` file. It can rely on relative imports to some other files as
long as all the files are in the same directory (we don\u2019t support submodules for this feature yet). For our example,
we\u2019ll define a `),is=l(j,"CODE",{});var si=i(is);Gn=a(si,"modeling_resnet.py"),si.forEach(s),Un=a(j," file and a "),fs=l(j,"CODE",{});var oi=i(fs);Kn=a(oi,"configuration_resnet.py"),oi.forEach(s),Vn=a(j,` file in a folder of the current working
directory named `),cs=l(j,"CODE",{});var ai=i(cs);Jn=a(ai,"resnet_model"),ai.forEach(s),Qn=a(j,". The configuration file contains the code for "),ds=l(j,"CODE",{});var ni=i(ds);Xn=a(ni,"ResnetConfig"),ni.forEach(s),Zn=a(j,` and the modeling file
contains the code of `),hs=l(j,"CODE",{});var ri=i(hs);er=a(ri,"ResnetModel"),ri.forEach(s),tr=a(j," and "),ms=l(j,"CODE",{});var li=i(ms);sr=a(li,"ResnetModelForImageClassification"),li.forEach(s),or=a(j,"."),j.forEach(s),mo=d(e),_(qe.$$.fragment,e),uo=d(e),W=l(e,"P",{});var It=i(W);ar=a(It,"The "),us=l(It,"CODE",{});var ii=i(us);nr=a(ii,"__init__.py"),ii.forEach(s),rr=a(It," can be empty, it\u2019s just there so that Python detects "),ps=l(It,"CODE",{});var fi=i(ps);lr=a(fi,"resnet_model"),fi.forEach(s),ir=a(It," can be use as a module."),It.forEach(s),po=d(e),_(ie.$$.fragment,e),_o=d(e),ht=l(e,"P",{});var ci=i(ht);fr=a(ci,"Note that you can re-use (or subclass) an existing configuration/model."),ci.forEach(s),go=d(e),mt=l(e,"P",{});var di=i(mt);cr=a(di,`To share your model with the community, follow those steps: first import the ResNet model and config from the newly
created files:`),di.forEach(s),yo=d(e),_(Ie.$$.fragment,e),wo=d(e),fe=l(e,"P",{});var Jo=i(fe);dr=a(Jo,"Then you have to tell the library you want to copy the code files of those objects when using the "),_s=l(Jo,"CODE",{});var hi=i(_s);hr=a(hi,"save_pretrained"),hi.forEach(s),mr=a(Jo,`
method and properly register them with a given Auto class (especially for models), just run:`),Jo.forEach(s),bo=d(e),_(Ne.$$.fragment,e),vo=d(e),ce=l(e,"P",{});var Qo=i(ce);ur=a(Qo,`Note that there is no need to specify an auto class for the configuration (there is only one auto class for them,
`),ut=l(Qo,"A",{href:!0});var mi=i(ut);pr=a(mi,"AutoConfig"),mi.forEach(s),_r=a(Qo,`) but it\u2019s different for models. Your custom model could be suitable for many different tasks, so you
have to specify which one of the auto classes is the correct one for your model.`),Qo.forEach(s),$o=d(e),pt=l(e,"P",{});var ui=i(pt);gr=a(ui,"Next, let\u2019s create the config and models as we did before:"),ui.forEach(s),ko=d(e),_(xe.$$.fragment,e),Eo=d(e),_t=l(e,"P",{});var pi=i(_t);yr=a(pi,"Now to send the model to the Hub, make sure you are logged in. Either run in your terminal:"),pi.forEach(s),jo=d(e),_(Oe.$$.fragment,e),Co=d(e),gt=l(e,"P",{});var _i=i(gt);wr=a(_i,"or from a notebook:"),_i.forEach(s),Po=d(e),_(De.$$.fragment,e),Ao=d(e),yt=l(e,"P",{});var gi=i(yt);br=a(gi,"You can then push to your own namespace (or an organization you are a member of) like this:"),gi.forEach(s),Mo=d(e),_(Fe.$$.fragment,e),Ro=d(e),R=l(e,"P",{});var ge=i(R);vr=a(ge,`On top of the modeling weights and the configuration in json format, this also copied the modeling and
configuration `),gs=l(ge,"CODE",{});var yi=i(gs);$r=a(yi,".py"),yi.forEach(s),kr=a(ge," files in the folder "),ys=l(ge,"CODE",{});var wi=i(ys);Er=a(wi,"custom-resnet50d"),wi.forEach(s),jr=a(ge,` and uploaded the result to the Hub. You can check the result
in this `),Se=l(ge,"A",{href:!0,rel:!0});var bi=i(Se);Cr=a(bi,"model repo"),bi.forEach(s),Pr=a(ge,"."),ge.forEach(s),To=d(e),de=l(e,"P",{});var Xo=i(de);Ar=a(Xo,"See the "),wt=l(Xo,"A",{href:!0});var vi=i(wt);Mr=a(vi,"sharing tutorial"),vi.forEach(s),Rr=a(Xo," for more information on the push to Hub method."),Xo.forEach(s),qo=d(e),Q=l(e,"H2",{class:!0});var Zo=i(Q);he=l(Zo,"A",{id:!0,class:!0,href:!0});var $i=i(he);ws=l($i,"SPAN",{});var ki=i(ws);_(Be.$$.fragment,ki),ki.forEach(s),$i.forEach(s),Tr=d(Zo),bs=l(Zo,"SPAN",{});var Ei=i(bs);qr=a(Ei,"Using a model with custom code"),Ei.forEach(s),Zo.forEach(s),Io=d(e),T=l(e,"P",{});var ye=i(T);Ir=a(ye,`You can use any configuration, model or tokenizer with custom code files in its repository with the auto-classes and
the `),vs=l(ye,"CODE",{});var ji=i(vs);Nr=a(ji,"from_pretrained"),ji.forEach(s),xr=a(ye," method. All files and code uploaded to the Hub are scanned for malware (refer to the "),He=l(ye,"A",{href:!0,rel:!0});var Ci=i(He);Or=a(Ci,"Hub security"),Ci.forEach(s),Dr=a(ye,` documentation for more information), but you should still
review the model code and author to avoid executing malicious code on your machine. Set `),$s=l(ye,"CODE",{});var Pi=i($s);Fr=a(Pi,"trust_remote_code=True"),Pi.forEach(s),Sr=a(ye,` to use
a model with custom code:`),ye.forEach(s),No=d(e),_(We.$$.fragment,e),xo=d(e),me=l(e,"P",{});var ea=i(me);Br=a(ea,"It is also strongly encouraged to pass a commit hash as a "),ks=l(ea,"CODE",{});var Ai=i(ks);Hr=a(Ai,"revision"),Ai.forEach(s),Wr=a(ea,` to make sure the author of the models did not
update the code with some malicious new lines (unless you fully trust the authors of the models).`),ea.forEach(s),Oo=d(e),_(Le.$$.fragment,e),Do=d(e),bt=l(e,"P",{});var Mi=i(bt);Lr=a(Mi,`Note that when browsing the commit history of the model repo on the Hub, there is a button to easily copy the commit
hash of any commit.`),Mi.forEach(s),Fo=d(e),X=l(e,"H2",{class:!0});var ta=i(X);ue=l(ta,"A",{id:!0,class:!0,href:!0});var Ri=i(ue);Es=l(Ri,"SPAN",{});var Ti=i(Es);_(Ye.$$.fragment,Ti),Ti.forEach(s),Ri.forEach(s),Yr=d(ta),js=l(ta,"SPAN",{});var qi=i(js);zr=a(qi,"Registering a model with custom code to the auto classes"),qi.forEach(s),ta.forEach(s),So=d(e),vt=l(e,"P",{});var Ii=i(vt);Gr=a(Ii,`If you are writing a library that extends \u{1F917} Transformers, you may want to extend the auto classes to include your own
model. This is different from pushing the code to the Hub in the sense that users will need to import your library to
get the custom models (contrarily to automatically downloading the model code from the Hub).`),Ii.forEach(s),Bo=d(e),L=l(e,"P",{});var Nt=i(L);Ur=a(Nt,"As long as your config has a "),Cs=l(Nt,"CODE",{});var Ni=i(Cs);Kr=a(Ni,"model_type"),Ni.forEach(s),Vr=a(Nt,` attribute that is different from existing model types, and that your model
classes have the right `),Ps=l(Nt,"CODE",{});var xi=i(Ps);Jr=a(xi,"config_class"),xi.forEach(s),Qr=a(Nt," attributes, you can just add them to the auto classes likes this:"),Nt.forEach(s),Ho=d(e),_(ze.$$.fragment,e),Wo=d(e),q=l(e,"P",{});var we=i(q);Xr=a(we,"Note that the first argument used when registering your custom config to "),$t=l(we,"A",{href:!0});var Oi=i($t);Zr=a(Oi,"AutoConfig"),Oi.forEach(s),el=a(we," needs to match the "),As=l(we,"CODE",{});var Di=i(As);tl=a(Di,"model_type"),Di.forEach(s),sl=a(we,`
of your custom config, and the first argument used when registering your custom models to any auto model class needs
to match the `),Ms=l(we,"CODE",{});var Fi=i(Ms);ol=a(Fi,"config_class"),Fi.forEach(s),al=a(we," of those models."),we.forEach(s),this.h()},h(){h(m,"name","hf:doc:metadata"),h(m,"content",JSON.stringify(Ki)),h(v,"id","sharing-custom-models"),h(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(v,"href","#sharing-custom-models"),h(u,"class","relative group"),h(be,"href","https://github.com/rwightman/pytorch-image-models/tree/master/timm"),h(be,"rel","nofollow"),h(Ve,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(te,"id","writing-a-custom-configuration"),h(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(te,"href","#writing-a-custom-configuration"),h(G,"class","relative group"),h(Ze,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(et,"href","/docs/transformers/main/en/main_classes/processors#transformers.ProcessorMixin.push_to_hub"),h(oe,"id","writing-a-custom-model"),h(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oe,"href","#writing-a-custom-model"),h(V,"class","relative group"),h(tt,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),h(st,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForSequenceClassification"),h(at,"href","/docs/transformers/main/en/main_classes/trainer#transformers.Trainer"),h(rt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(lt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),h(it,"href","/docs/transformers/main/en/main_classes/processors#transformers.ProcessorMixin.push_to_hub"),h(ct,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),h(dt,"href","/docs/transformers/main/en/main_classes/processors#transformers.ProcessorMixin.push_to_hub"),h(re,"id","sending-the-code-to-the-hub"),h(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(re,"href","#sending-the-code-to-the-hub"),h(J,"class","relative group"),h(ut,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoConfig"),h(Se,"href","https://huggingface.co/sgugger/custom-resnet50d"),h(Se,"rel","nofollow"),h(wt,"href","model_sharing"),h(he,"id","using-a-model-with-custom-code"),h(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(he,"href","#using-a-model-with-custom-code"),h(Q,"class","relative group"),h(He,"href","https://huggingface.co/docs/hub/security#malware-scanning"),h(He,"rel","nofollow"),h(ue,"id","registering-a-model-with-custom-code-to-the-auto-classes"),h(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ue,"href","#registering-a-model-with-custom-code-to-the-auto-classes"),h(X,"class","relative group"),h($t,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoConfig")},m(e,n){t(document.head,m),f(e,E,n),f(e,u,n),t(u,v),t(v,z),g(P,z,null),t(u,I),t(u,ee),t(ee,sa),f(e,qs,n),f(e,Ue,n),t(Ue,oa),f(e,Is,n),f(e,Ke,n),t(Ke,aa),f(e,Ns,n),f(e,N,n),t(N,na),t(N,be),t(be,ra),t(N,la),t(N,Ve),t(Ve,ia),t(N,fa),f(e,xs,n),f(e,G,n),t(G,te),t(te,Ot),g(ve,Ot,null),t(G,ca),t(G,Dt),t(Dt,da),f(e,Os,n),f(e,se,n),t(se,ha),t(se,Ft),t(Ft,ma),t(se,ua),f(e,Ds,n),f(e,Je,n),t(Je,pa),f(e,Fs,n),g($e,e,n),f(e,Ss,n),f(e,Qe,n),t(Qe,_a),f(e,Bs,n),f(e,x,n),t(x,ke),t(ke,ga),t(ke,St),t(St,ya),t(ke,wa),t(x,ba),t(x,U),t(U,va),t(U,Bt),t(Bt,$a),t(U,ka),t(U,Ht),t(Ht,Ea),t(U,ja),t(x,Ca),t(x,K),t(K,Pa),t(K,Wt),t(Wt,Aa),t(K,Ma),t(K,Lt),t(Lt,Ra),t(K,Ta),f(e,Hs,n),f(e,O,n),t(O,qa),t(O,Yt),t(Yt,Ia),t(O,Na),t(O,zt),t(zt,xa),t(O,Oa),f(e,Ws,n),f(e,D,n),t(D,Da),t(D,Gt),t(Gt,Fa),t(D,Sa),t(D,Ut),t(Ut,Ba),t(D,Ha),f(e,Ls,n),f(e,Xe,n),t(Xe,Wa),f(e,Ys,n),g(Ee,e,n),f(e,zs,n),f(e,A,n),t(A,La),t(A,Kt),t(Kt,Ya),t(A,za),t(A,Vt),t(Vt,Ga),t(A,Ua),t(A,Jt),t(Jt,Ka),t(A,Va),f(e,Gs,n),g(je,e,n),f(e,Us,n),f(e,F,n),t(F,Ja),t(F,Ze),t(Ze,Qa),t(F,Xa),t(F,et),t(et,Za),t(F,en),f(e,Ks,n),f(e,V,n),t(V,oe),t(oe,Qt),g(Ce,Qt,null),t(V,tn),t(V,Xt),t(Xt,sn),f(e,Vs,n),f(e,S,n),t(S,on),t(S,tt),t(tt,an),t(S,nn),t(S,st),t(st,rn),t(S,ln),f(e,Js,n),f(e,ae,n),t(ae,fn),t(ae,Zt),t(Zt,cn),t(ae,dn),f(e,Qs,n),g(Pe,e,n),f(e,Xs,n),f(e,ot,n),t(ot,hn),f(e,Zs,n),g(Ae,e,n),f(e,eo,n),f(e,C,n),t(C,mn),t(C,es),t(es,un),t(C,pn),t(C,ts),t(ts,_n),t(C,gn),t(C,ss),t(ss,yn),t(C,wn),t(C,os),t(os,bn),t(C,vn),f(e,to,n),g(ne,e,n),f(e,so,n),f(e,B,n),t(B,$n),t(B,as),t(as,kn),t(B,En),t(B,at),t(at,jn),t(B,Cn),f(e,oo,n),f(e,nt,n),t(nt,Pn),f(e,ao,n),g(Me,e,n),f(e,no,n),f(e,M,n),t(M,An),t(M,rt),t(rt,Mn),t(M,Rn),t(M,lt),t(lt,Tn),t(M,qn),t(M,it),t(it,In),t(M,Nn),f(e,ro,n),f(e,ft,n),t(ft,xn),f(e,lo,n),g(Re,e,n),f(e,io,n),f(e,H,n),t(H,On),t(H,ct),t(ct,Dn),t(H,Fn),t(H,dt),t(dt,Sn),t(H,Bn),f(e,fo,n),f(e,J,n),t(J,re),t(re,ns),g(Te,ns,null),t(J,Hn),t(J,rs),t(rs,Wn),f(e,co,n),g(le,e,n),f(e,ho,n),f(e,$,n),t($,Ln),t($,ls),t(ls,Yn),t($,zn),t($,is),t(is,Gn),t($,Un),t($,fs),t(fs,Kn),t($,Vn),t($,cs),t(cs,Jn),t($,Qn),t($,ds),t(ds,Xn),t($,Zn),t($,hs),t(hs,er),t($,tr),t($,ms),t(ms,sr),t($,or),f(e,mo,n),g(qe,e,n),f(e,uo,n),f(e,W,n),t(W,ar),t(W,us),t(us,nr),t(W,rr),t(W,ps),t(ps,lr),t(W,ir),f(e,po,n),g(ie,e,n),f(e,_o,n),f(e,ht,n),t(ht,fr),f(e,go,n),f(e,mt,n),t(mt,cr),f(e,yo,n),g(Ie,e,n),f(e,wo,n),f(e,fe,n),t(fe,dr),t(fe,_s),t(_s,hr),t(fe,mr),f(e,bo,n),g(Ne,e,n),f(e,vo,n),f(e,ce,n),t(ce,ur),t(ce,ut),t(ut,pr),t(ce,_r),f(e,$o,n),f(e,pt,n),t(pt,gr),f(e,ko,n),g(xe,e,n),f(e,Eo,n),f(e,_t,n),t(_t,yr),f(e,jo,n),g(Oe,e,n),f(e,Co,n),f(e,gt,n),t(gt,wr),f(e,Po,n),g(De,e,n),f(e,Ao,n),f(e,yt,n),t(yt,br),f(e,Mo,n),g(Fe,e,n),f(e,Ro,n),f(e,R,n),t(R,vr),t(R,gs),t(gs,$r),t(R,kr),t(R,ys),t(ys,Er),t(R,jr),t(R,Se),t(Se,Cr),t(R,Pr),f(e,To,n),f(e,de,n),t(de,Ar),t(de,wt),t(wt,Mr),t(de,Rr),f(e,qo,n),f(e,Q,n),t(Q,he),t(he,ws),g(Be,ws,null),t(Q,Tr),t(Q,bs),t(bs,qr),f(e,Io,n),f(e,T,n),t(T,Ir),t(T,vs),t(vs,Nr),t(T,xr),t(T,He),t(He,Or),t(T,Dr),t(T,$s),t($s,Fr),t(T,Sr),f(e,No,n),g(We,e,n),f(e,xo,n),f(e,me,n),t(me,Br),t(me,ks),t(ks,Hr),t(me,Wr),f(e,Oo,n),g(Le,e,n),f(e,Do,n),f(e,bt,n),t(bt,Lr),f(e,Fo,n),f(e,X,n),t(X,ue),t(ue,Es),g(Ye,Es,null),t(X,Yr),t(X,js),t(js,zr),f(e,So,n),f(e,vt,n),t(vt,Gr),f(e,Bo,n),f(e,L,n),t(L,Ur),t(L,Cs),t(Cs,Kr),t(L,Vr),t(L,Ps),t(Ps,Jr),t(L,Qr),f(e,Ho,n),g(ze,e,n),f(e,Wo,n),f(e,q,n),t(q,Xr),t(q,$t),t($t,Zr),t(q,el),t(q,As),t(As,tl),t(q,sl),t(q,Ms),t(Ms,ol),t(q,al),Lo=!0},p(e,[n]){const Ge={};n&2&&(Ge.$$scope={dirty:n,ctx:e}),ne.$set(Ge);const Rs={};n&2&&(Rs.$$scope={dirty:n,ctx:e}),le.$set(Rs);const Ts={};n&2&&(Ts.$$scope={dirty:n,ctx:e}),ie.$set(Ts)},i(e){Lo||(y(P.$$.fragment,e),y(ve.$$.fragment,e),y($e.$$.fragment,e),y(Ee.$$.fragment,e),y(je.$$.fragment,e),y(Ce.$$.fragment,e),y(Pe.$$.fragment,e),y(Ae.$$.fragment,e),y(ne.$$.fragment,e),y(Me.$$.fragment,e),y(Re.$$.fragment,e),y(Te.$$.fragment,e),y(le.$$.fragment,e),y(qe.$$.fragment,e),y(ie.$$.fragment,e),y(Ie.$$.fragment,e),y(Ne.$$.fragment,e),y(xe.$$.fragment,e),y(Oe.$$.fragment,e),y(De.$$.fragment,e),y(Fe.$$.fragment,e),y(Be.$$.fragment,e),y(We.$$.fragment,e),y(Le.$$.fragment,e),y(Ye.$$.fragment,e),y(ze.$$.fragment,e),Lo=!0)},o(e){w(P.$$.fragment,e),w(ve.$$.fragment,e),w($e.$$.fragment,e),w(Ee.$$.fragment,e),w(je.$$.fragment,e),w(Ce.$$.fragment,e),w(Pe.$$.fragment,e),w(Ae.$$.fragment,e),w(ne.$$.fragment,e),w(Me.$$.fragment,e),w(Re.$$.fragment,e),w(Te.$$.fragment,e),w(le.$$.fragment,e),w(qe.$$.fragment,e),w(ie.$$.fragment,e),w(Ie.$$.fragment,e),w(Ne.$$.fragment,e),w(xe.$$.fragment,e),w(Oe.$$.fragment,e),w(De.$$.fragment,e),w(Fe.$$.fragment,e),w(Be.$$.fragment,e),w(We.$$.fragment,e),w(Le.$$.fragment,e),w(Ye.$$.fragment,e),w(ze.$$.fragment,e),Lo=!1},d(e){s(m),e&&s(E),e&&s(u),b(P),e&&s(qs),e&&s(Ue),e&&s(Is),e&&s(Ke),e&&s(Ns),e&&s(N),e&&s(xs),e&&s(G),b(ve),e&&s(Os),e&&s(se),e&&s(Ds),e&&s(Je),e&&s(Fs),b($e,e),e&&s(Ss),e&&s(Qe),e&&s(Bs),e&&s(x),e&&s(Hs),e&&s(O),e&&s(Ws),e&&s(D),e&&s(Ls),e&&s(Xe),e&&s(Ys),b(Ee,e),e&&s(zs),e&&s(A),e&&s(Gs),b(je,e),e&&s(Us),e&&s(F),e&&s(Ks),e&&s(V),b(Ce),e&&s(Vs),e&&s(S),e&&s(Js),e&&s(ae),e&&s(Qs),b(Pe,e),e&&s(Xs),e&&s(ot),e&&s(Zs),b(Ae,e),e&&s(eo),e&&s(C),e&&s(to),b(ne,e),e&&s(so),e&&s(B),e&&s(oo),e&&s(nt),e&&s(ao),b(Me,e),e&&s(no),e&&s(M),e&&s(ro),e&&s(ft),e&&s(lo),b(Re,e),e&&s(io),e&&s(H),e&&s(fo),e&&s(J),b(Te),e&&s(co),b(le,e),e&&s(ho),e&&s($),e&&s(mo),b(qe,e),e&&s(uo),e&&s(W),e&&s(po),b(ie,e),e&&s(_o),e&&s(ht),e&&s(go),e&&s(mt),e&&s(yo),b(Ie,e),e&&s(wo),e&&s(fe),e&&s(bo),b(Ne,e),e&&s(vo),e&&s(ce),e&&s($o),e&&s(pt),e&&s(ko),b(xe,e),e&&s(Eo),e&&s(_t),e&&s(jo),b(Oe,e),e&&s(Co),e&&s(gt),e&&s(Po),b(De,e),e&&s(Ao),e&&s(yt),e&&s(Mo),b(Fe,e),e&&s(Ro),e&&s(R),e&&s(To),e&&s(de),e&&s(qo),e&&s(Q),b(Be),e&&s(Io),e&&s(T),e&&s(No),b(We,e),e&&s(xo),e&&s(me),e&&s(Oo),b(Le,e),e&&s(Do),e&&s(bt),e&&s(Fo),e&&s(X),b(Ye),e&&s(So),e&&s(vt),e&&s(Bo),e&&s(L),e&&s(Ho),b(ze,e),e&&s(Wo),e&&s(q)}}}const Ki={local:"sharing-custom-models",sections:[{local:"writing-a-custom-configuration",title:"Writing a custom configuration"},{local:"writing-a-custom-model",title:"Writing a custom model"},{local:"sending-the-code-to-the-hub",title:"Sending the code to the Hub"},{local:"using-a-model-with-custom-code",title:"Using a model with custom code"},{local:"registering-a-model-with-custom-code-to-the-auto-classes",title:"Registering a model with custom code to the auto classes"}],title:"Sharing custom models"};function Vi(Z){return Li(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ef extends Si{constructor(m){super();Bi(this,m,Vi,Ui,Hi,{})}}export{ef as default,Ki as metadata};
