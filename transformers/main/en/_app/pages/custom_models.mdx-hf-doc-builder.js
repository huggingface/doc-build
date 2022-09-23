import{S as Bi,i as Si,s as Hi,e as r,k as c,w as p,t as o,M as Wi,c as l,d as s,m as d,a as i,x as _,h as n,b as h,G as t,g as f,y as g,q as y,o as w,B as b,v as Li}from"../chunks/vendor-hf-doc-builder.js";import{T as al}from"../chunks/Tip-hf-doc-builder.js";import{I as xt}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as k}from"../chunks/CodeBlock-hf-doc-builder.js";function zi(Z){let m,E;return{c(){m=r("p"),E=o("If your model is very similar to a model inside the library, you can re-use the same configuration as this model.")},l(u){m=l(u,"P",{});var v=i(m);E=n(v,"If your model is very similar to a model inside the library, you can re-use the same configuration as this model."),v.forEach(s)},m(u,v){f(u,m,v),t(m,E)},d(u){u&&s(m)}}}function Yi(Z){let m,E;return{c(){m=r("p"),E=o("This API is experimental and may have some slight breaking changes in the next releases.")},l(u){m=l(u,"P",{});var v=i(m);E=n(v,"This API is experimental and may have some slight breaking changes in the next releases."),v.forEach(s)},m(u,v){f(u,m,v),t(m,E)},d(u){u&&s(m)}}}function Gi(Z){let m,E,u,v,Y;return{c(){m=r("p"),E=o(`If copying a modeling files from the library, you will need to replace all the relative imports at the top of the file
to import from the `),u=r("code"),v=o("transformers"),Y=o(" package.")},l(P){m=l(P,"P",{});var I=i(m);E=n(I,`If copying a modeling files from the library, you will need to replace all the relative imports at the top of the file
to import from the `),u=l(I,"CODE",{});var ee=i(u);v=n(ee,"transformers"),ee.forEach(s),Y=n(I," package."),I.forEach(s)},m(P,I){f(P,m,I),t(m,E),t(m,u),t(u,v),t(m,Y)},d(P){P&&s(m)}}}function Ui(Z){let m,E,u,v,Y,P,I,ee,sn,qs,Ue,on,Is,Ke,nn,Ns,N,an,be,rn,ln,Ve,fn,cn,xs,G,te,Ot,ve,dn,Dt,hn,Os,se,mn,Ft,un,pn,Ds,Je,_n,Fs,$e,Bs,Qe,gn,Ss,x,ke,yn,Bt,wn,bn,vn,U,$n,St,kn,En,Ht,jn,Cn,Pn,K,An,Wt,Tn,Rn,Lt,Mn,qn,Hs,O,In,zt,Nn,xn,Yt,On,Dn,Ws,D,Fn,Gt,Bn,Sn,Ut,Hn,Wn,Ls,Xe,Ln,zs,Ee,Ys,A,zn,Kt,Yn,Gn,Vt,Un,Kn,Jt,Vn,Jn,Gs,je,Us,F,Qn,Ze,Xn,Zn,et,ea,ta,Ks,V,oe,Qt,Ce,sa,Xt,oa,Vs,B,na,tt,aa,ra,st,la,ia,Js,ne,fa,Zt,ca,da,Qs,Pe,Xs,ot,ha,Zs,Ae,eo,C,ma,es,ua,pa,ts,_a,ga,ss,ya,wa,os,ba,va,to,ae,so,S,$a,ns,ka,Ea,nt,ja,Ca,oo,at,Pa,no,Te,ao,T,Aa,rt,Ta,Ra,lt,Ma,qa,it,Ia,Na,ro,ft,xa,lo,Re,io,H,Oa,ct,Da,Fa,dt,Ba,Sa,fo,J,re,as,Me,Ha,rs,Wa,co,le,ho,$,La,ls,za,Ya,is,Ga,Ua,fs,Ka,Va,cs,Ja,Qa,ds,Xa,Za,hs,er,tr,ms,sr,or,mo,qe,uo,W,nr,us,ar,rr,ps,lr,ir,po,ie,_o,ht,fr,go,mt,cr,yo,Ie,wo,fe,dr,_s,hr,mr,bo,Ne,vo,ce,ur,ut,pr,_r,$o,pt,gr,ko,xe,Eo,_t,yr,jo,Oe,Co,gt,wr,Po,De,Ao,yt,br,To,Fe,Ro,R,vr,gs,$r,kr,ys,Er,jr,Be,Cr,Pr,Mo,de,Ar,wt,Tr,Rr,qo,Q,he,ws,Se,Mr,bs,qr,Io,M,Ir,vs,Nr,xr,He,Or,Dr,$s,Fr,Br,No,We,xo,me,Sr,ks,Hr,Wr,Oo,Le,Do,bt,Lr,Fo,X,ue,Es,ze,zr,js,Yr,Bo,vt,Gr,So,L,Ur,Cs,Kr,Vr,Ps,Jr,Qr,Ho,Ye,Wo,q,Xr,$t,Zr,el,As,tl,sl,Ts,ol,nl,Lo;return P=new xt({}),ve=new xt({}),$e=new k({props:{code:`from transformers import PretrainedConfig
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
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;logits&quot;</span>: logits}`}}),ae=new al({props:{$$slots:{default:[zi]},$$scope:{ctx:Z}}}),Te=new k({props:{code:"resnet50d = ResnetModelForImageClassification(resnet50d_config)",highlighted:"resnet50d = ResnetModelForImageClassification(resnet50d_config)"}}),Re=new k({props:{code:`import timm

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`,highlighted:`<span class="hljs-keyword">import</span> timm

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),Me=new xt({}),le=new al({props:{warning:!0,$$slots:{default:[Yi]},$$scope:{ctx:Z}}}),qe=new k({props:{code:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.py
    \u251C\u2500\u2500 configuration_resnet.py
    \u2514\u2500\u2500 modeling_resnet.py`,highlighted:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.<span class="hljs-keyword">py</span>
    \u251C\u2500\u2500 configuration_resnet.<span class="hljs-keyword">py</span>
    \u2514\u2500\u2500 modeling_resnet.<span class="hljs-keyword">py</span>`}}),ie=new al({props:{warning:!0,$$slots:{default:[Gi]},$$scope:{ctx:Z}}}),Ie=new k({props:{code:`from resnet_model.configuration_resnet import ResnetConfig
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

notebook_login()`}}),Fe=new k({props:{code:'resnet50d.push_to_hub("custom-resnet50d")',highlighted:'resnet50d.push_to_hub(<span class="hljs-string">&quot;custom-resnet50d&quot;</span>)'}}),Se=new xt({}),We=new k({props:{code:`from transformers import AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained("sgugger/custom-resnet50d", trust_remote_code=True)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained(<span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>)`}}),Le=new k({props:{code:`commit_hash = "ed94a7c6247d8aedce4647f00f20de6875b5b292"
model = AutoModelForImageClassification.from_pretrained(
    "sgugger/custom-resnet50d", trust_remote_code=True, revision=commit_hash
)`,highlighted:`commit_hash = <span class="hljs-string">&quot;ed94a7c6247d8aedce4647f00f20de6875b5b292&quot;</span>
model = AutoModelForImageClassification.from_pretrained(
    <span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>, revision=commit_hash
)`}}),ze=new xt({}),Ye=new k({props:{code:`from transformers import AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register("resnet", ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register(<span class="hljs-string">&quot;resnet&quot;</span>, ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification)`}}),{c(){m=r("meta"),E=c(),u=r("h1"),v=r("a"),Y=r("span"),p(P.$$.fragment),I=c(),ee=r("span"),sn=o("Sharing custom models"),qs=c(),Ue=r("p"),on=o(`The \u{1F917} Transformers library is designed to be easily extensible. Every model is fully coded in a given subfolder
of the repository with no abstraction, so you can easily copy a modeling file and tweak it to your needs.`),Is=c(),Ke=r("p"),nn=o(`If you are writing a brand new model, it might be easier to start from scratch. In this tutorial, we will show you
how to write a custom model and its configuration so it can be used inside Transformers, and how you can share it
with the community (with the code it relies on) so that anyone can use it, even if it\u2019s not present in the \u{1F917}
Transformers library.`),Ns=c(),N=r("p"),an=o(`We will illustrate all of this on a ResNet model, by wrapping the ResNet class of the
`),be=r("a"),rn=o("timm library"),ln=o(" into a "),Ve=r("a"),fn=o("PreTrainedModel"),cn=o("."),xs=c(),G=r("h2"),te=r("a"),Ot=r("span"),p(ve.$$.fragment),dn=c(),Dt=r("span"),hn=o("Writing a custom configuration"),Os=c(),se=r("p"),mn=o(`Before we dive into the model, let\u2019s first write its configuration. The configuration of a model is an object that
will contain all the necessary information to build the model. As we will see in the next section, the model can only
take a `),Ft=r("code"),un=o("config"),pn=o(" to be initialized, so we really need that object to be as complete as possible."),Ds=c(),Je=r("p"),_n=o(`In our example, we will take a couple of arguments of the ResNet class that we might want to tweak. Different
configurations will then give us the different types of ResNets that are possible. We then just store those arguments,
after checking the validity of a few of them.`),Fs=c(),p($e.$$.fragment),Bs=c(),Qe=r("p"),gn=o("The three important things to remember when writing you own configuration are the following:"),Ss=c(),x=r("ul"),ke=r("li"),yn=o("you have to inherit from "),Bt=r("code"),wn=o("PretrainedConfig"),bn=o(","),vn=c(),U=r("li"),$n=o("the "),St=r("code"),kn=o("__init__"),En=o(" of your "),Ht=r("code"),jn=o("PretrainedConfig"),Cn=o(" must accept any kwargs,"),Pn=c(),K=r("li"),An=o("those "),Wt=r("code"),Tn=o("kwargs"),Rn=o(" need to be passed to the superclass "),Lt=r("code"),Mn=o("__init__"),qn=o("."),Hs=c(),O=r("p"),In=o(`The inheritance is to make sure you get all the functionality from the \u{1F917} Transformers library, while the two other
constraints come from the fact a `),zt=r("code"),Nn=o("PretrainedConfig"),xn=o(` has more fields than the ones you are setting. When reloading a
config with the `),Yt=r("code"),On=o("from_pretrained"),Dn=o(` method, those fields need to be accepted by your config and then sent to the
superclass.`),Ws=c(),D=r("p"),Fn=o("Defining a "),Gt=r("code"),Bn=o("model_type"),Sn=o(" for your configuration (here "),Ut=r("code"),Hn=o('model_type="resnet"'),Wn=o(`) is not mandatory, unless you want to
register your model with the auto classes (see last section).`),Ls=c(),Xe=r("p"),Ln=o(`With this done, you can easily create and save your configuration like you would do with any other model config of the
library. Here is how we can create a resnet50d config and save it:`),zs=c(),p(Ee.$$.fragment),Ys=c(),A=r("p"),zn=o("This will save a file named "),Kt=r("code"),Yn=o("config.json"),Gn=o(" inside the folder "),Vt=r("code"),Un=o("custom-resnet"),Kn=o(`. You can then reload your config with the
`),Jt=r("code"),Vn=o("from_pretrained"),Jn=o(" method:"),Gs=c(),p(je.$$.fragment),Us=c(),F=r("p"),Qn=o("You can also use any other method of the "),Ze=r("a"),Xn=o("PretrainedConfig"),Zn=o(" class, like "),et=r("a"),ea=o("push_to_hub()"),ta=o(` to
directly upload your config to the Hub.`),Ks=c(),V=r("h2"),oe=r("a"),Qt=r("span"),p(Ce.$$.fragment),sa=c(),Xt=r("span"),oa=o("Writing a custom model"),Vs=c(),B=r("p"),na=o(`Now that we have our ResNet configuration, we can go on writing the model. We will actually write two: one that
extracts the hidden features from a batch of images (like `),tt=r("a"),aa=o("BertModel"),ra=o(`) and one that is suitable for image
classification (like `),st=r("a"),la=o("BertForSequenceClassification"),ia=o(")."),Js=c(),ne=r("p"),fa=o(`As we mentioned before, we\u2019ll only write a loose wrapper of the model to keep it simple for this example. The only
thing we need to do before writing this class is a map between the block types and actual block classes. Then the
model is defined from the configuration by passing everything to the `),Zt=r("code"),ca=o("ResNet"),da=o(" class:"),Qs=c(),p(Pe.$$.fragment),Xs=c(),ot=r("p"),ha=o("For the model that will classify images, we just change the forward method:"),Zs=c(),p(Ae.$$.fragment),eo=c(),C=r("p"),ma=o("In both cases, notice how we inherit from "),es=r("code"),ua=o("PreTrainedModel"),pa=o(" and call the superclass initialization with the "),ts=r("code"),_a=o("config"),ga=o(`
(a bit like when you write a regular `),ss=r("code"),ya=o("torch.nn.Module"),wa=o("). The line that sets the "),os=r("code"),ba=o("config_class"),va=o(` is not mandatory, unless
you want to register your model with the auto classes (see last section).`),to=c(),p(ae.$$.fragment),so=c(),S=r("p"),$a=o(`You can have your model return anything you want, but returning a dictionary like we did for
`),ns=r("code"),ka=o("ResnetModelForImageClassification"),Ea=o(`, with the loss included when labels are passed, will make your model directly
usable inside the `),nt=r("a"),ja=o("Trainer"),Ca=o(` class. Using another output format is fine as long as you are planning on using your own
training loop or another library for training.`),oo=c(),at=r("p"),Pa=o("Now that we have our model class, let\u2019s create one:"),no=c(),p(Te.$$.fragment),ao=c(),T=r("p"),Aa=o("Again, you can use any of the methods of "),rt=r("a"),Ta=o("PreTrainedModel"),Ra=o(", like "),lt=r("a"),Ma=o("save_pretrained()"),qa=o(` or
`),it=r("a"),Ia=o("push_to_hub()"),Na=o(`. We will use the second in the next section, and see how to push the model weights
with the code of our model. But first, let\u2019s load some pretrained weights inside our model.`),ro=c(),ft=r("p"),xa=o(`In your own use case, you will probably be training your custom model on your own data. To go fast for this tutorial,
we will use the pretrained version of the resnet50d. Since our model is just a wrapper around it, it\u2019s going to be
easy to transfer those weights:`),lo=c(),p(Re.$$.fragment),io=c(),H=r("p"),Oa=o("Now let\u2019s see how to make sure that when we do "),ct=r("a"),Da=o("save_pretrained()"),Fa=o(" or "),dt=r("a"),Ba=o("push_to_hub()"),Sa=o(`, the
code of the model is saved.`),fo=c(),J=r("h2"),re=r("a"),as=r("span"),p(Me.$$.fragment),Ha=c(),rs=r("span"),Wa=o("Sending the code to the Hub"),co=c(),p(le.$$.fragment),ho=c(),$=r("p"),La=o("First, make sure your model is fully defined in a "),ls=r("code"),za=o(".py"),Ya=o(` file. It can rely on relative imports to some other files as
long as all the files are in the same directory (we don\u2019t support submodules for this feature yet). For our example,
we\u2019ll define a `),is=r("code"),Ga=o("modeling_resnet.py"),Ua=o(" file and a "),fs=r("code"),Ka=o("configuration_resnet.py"),Va=o(` file in a folder of the current working
directory named `),cs=r("code"),Ja=o("resnet_model"),Qa=o(". The configuration file contains the code for "),ds=r("code"),Xa=o("ResnetConfig"),Za=o(` and the modeling file
contains the code of `),hs=r("code"),er=o("ResnetModel"),tr=o(" and "),ms=r("code"),sr=o("ResnetModelForImageClassification"),or=o("."),mo=c(),p(qe.$$.fragment),uo=c(),W=r("p"),nr=o("The "),us=r("code"),ar=o("__init__.py"),rr=o(" can be empty, it\u2019s just there so that Python detects "),ps=r("code"),lr=o("resnet_model"),ir=o(" can be use as a module."),po=c(),p(ie.$$.fragment),_o=c(),ht=r("p"),fr=o("Note that you can re-use (or subclass) an existing configuration/model."),go=c(),mt=r("p"),cr=o(`To share your model with the community, follow those steps: first import the ResNet model and config from the newly
created files:`),yo=c(),p(Ie.$$.fragment),wo=c(),fe=r("p"),dr=o("Then you have to tell the library you want to copy the code files of those objects when using the "),_s=r("code"),hr=o("save_pretrained"),mr=o(`
method and properly register them with a given Auto class (especially for models), just run:`),bo=c(),p(Ne.$$.fragment),vo=c(),ce=r("p"),ur=o(`Note that there is no need to specify an auto class for the configuration (there is only one auto class for them,
`),ut=r("a"),pr=o("AutoConfig"),_r=o(`) but it\u2019s different for models. Your custom model could be suitable for many different tasks, so you
have to specify which one of the auto classes is the correct one for your model.`),$o=c(),pt=r("p"),gr=o("Next, let\u2019s create the config and models as we did before:"),ko=c(),p(xe.$$.fragment),Eo=c(),_t=r("p"),yr=o("Now to send the model to the Hub, make sure you are logged in. Either run in your terminal:"),jo=c(),p(Oe.$$.fragment),Co=c(),gt=r("p"),wr=o("or from a notebook:"),Po=c(),p(De.$$.fragment),Ao=c(),yt=r("p"),br=o("You can then push to your own namespace (or an organization you are a member of) like this:"),To=c(),p(Fe.$$.fragment),Ro=c(),R=r("p"),vr=o(`On top of the modeling weights and the configuration in json format, this also copied the modeling and
configuration `),gs=r("code"),$r=o(".py"),kr=o(" files in the folder "),ys=r("code"),Er=o("custom-resnet50d"),jr=o(` and uploaded the result to the Hub. You can check the result
in this `),Be=r("a"),Cr=o("model repo"),Pr=o("."),Mo=c(),de=r("p"),Ar=o("See the "),wt=r("a"),Tr=o("sharing tutorial"),Rr=o(" for more information on the push to Hub method."),qo=c(),Q=r("h2"),he=r("a"),ws=r("span"),p(Se.$$.fragment),Mr=c(),bs=r("span"),qr=o("Using a model with custom code"),Io=c(),M=r("p"),Ir=o(`You can use any configuration, model or tokenizer with custom code files in its repository with the auto-classes and
the `),vs=r("code"),Nr=o("from_pretrained"),xr=o(" method. All files and code uploaded to the Hub are scanned for malware (refer to the "),He=r("a"),Or=o("Hub security"),Dr=o(` documentation for more information), but you should still
review the model code and author to avoid executing malicious code on your machine. Set `),$s=r("code"),Fr=o("trust_remote_code=True"),Br=o(` to use
a model with custom code:`),No=c(),p(We.$$.fragment),xo=c(),me=r("p"),Sr=o("It is also strongly encouraged to pass a commit hash as a "),ks=r("code"),Hr=o("revision"),Wr=o(` to make sure the author of the models did not
update the code with some malicious new lines (unless you fully trust the authors of the models).`),Oo=c(),p(Le.$$.fragment),Do=c(),bt=r("p"),Lr=o(`Note that when browsing the commit history of the model repo on the Hub, there is a button to easily copy the commit
hash of any commit.`),Fo=c(),X=r("h2"),ue=r("a"),Es=r("span"),p(ze.$$.fragment),zr=c(),js=r("span"),Yr=o("Registering a model with custom code to the auto classes"),Bo=c(),vt=r("p"),Gr=o(`If you are writing a library that extends \u{1F917} Transformers, you may want to extend the auto classes to include your own
model. This is different from pushing the code to the Hub in the sense that users will need to import your library to
get the custom models (contrarily to automatically downloading the model code from the Hub).`),So=c(),L=r("p"),Ur=o("As long as your config has a "),Cs=r("code"),Kr=o("model_type"),Vr=o(` attribute that is different from existing model types, and that your model
classes have the right `),Ps=r("code"),Jr=o("config_class"),Qr=o(" attributes, you can just add them to the auto classes likes this:"),Ho=c(),p(Ye.$$.fragment),Wo=c(),q=r("p"),Xr=o("Note that the first argument used when registering your custom config to "),$t=r("a"),Zr=o("AutoConfig"),el=o(" needs to match the "),As=r("code"),tl=o("model_type"),sl=o(`
of your custom config, and the first argument used when registering your custom models to any auto model class needs
to match the `),Ts=r("code"),ol=o("config_class"),nl=o(" of those models."),this.h()},l(e){const a=Wi('[data-svelte="svelte-1phssyn"]',document.head);m=l(a,"META",{name:!0,content:!0}),a.forEach(s),E=d(e),u=l(e,"H1",{class:!0});var Ge=i(u);v=l(Ge,"A",{id:!0,class:!0,href:!0});var Rs=i(v);Y=l(Rs,"SPAN",{});var Ms=i(Y);_(P.$$.fragment,Ms),Ms.forEach(s),Rs.forEach(s),I=d(Ge),ee=l(Ge,"SPAN",{});var rl=i(ee);sn=n(rl,"Sharing custom models"),rl.forEach(s),Ge.forEach(s),qs=d(e),Ue=l(e,"P",{});var ll=i(Ue);on=n(ll,`The \u{1F917} Transformers library is designed to be easily extensible. Every model is fully coded in a given subfolder
of the repository with no abstraction, so you can easily copy a modeling file and tweak it to your needs.`),ll.forEach(s),Is=d(e),Ke=l(e,"P",{});var il=i(Ke);nn=n(il,`If you are writing a brand new model, it might be easier to start from scratch. In this tutorial, we will show you
how to write a custom model and its configuration so it can be used inside Transformers, and how you can share it
with the community (with the code it relies on) so that anyone can use it, even if it\u2019s not present in the \u{1F917}
Transformers library.`),il.forEach(s),Ns=d(e),N=l(e,"P",{});var kt=i(N);an=n(kt,`We will illustrate all of this on a ResNet model, by wrapping the ResNet class of the
`),be=l(kt,"A",{href:!0,rel:!0});var fl=i(be);rn=n(fl,"timm library"),fl.forEach(s),ln=n(kt," into a "),Ve=l(kt,"A",{href:!0});var cl=i(Ve);fn=n(cl,"PreTrainedModel"),cl.forEach(s),cn=n(kt,"."),kt.forEach(s),xs=d(e),G=l(e,"H2",{class:!0});var zo=i(G);te=l(zo,"A",{id:!0,class:!0,href:!0});var dl=i(te);Ot=l(dl,"SPAN",{});var hl=i(Ot);_(ve.$$.fragment,hl),hl.forEach(s),dl.forEach(s),dn=d(zo),Dt=l(zo,"SPAN",{});var ml=i(Dt);hn=n(ml,"Writing a custom configuration"),ml.forEach(s),zo.forEach(s),Os=d(e),se=l(e,"P",{});var Yo=i(se);mn=n(Yo,`Before we dive into the model, let\u2019s first write its configuration. The configuration of a model is an object that
will contain all the necessary information to build the model. As we will see in the next section, the model can only
take a `),Ft=l(Yo,"CODE",{});var ul=i(Ft);un=n(ul,"config"),ul.forEach(s),pn=n(Yo," to be initialized, so we really need that object to be as complete as possible."),Yo.forEach(s),Ds=d(e),Je=l(e,"P",{});var pl=i(Je);_n=n(pl,`In our example, we will take a couple of arguments of the ResNet class that we might want to tweak. Different
configurations will then give us the different types of ResNets that are possible. We then just store those arguments,
after checking the validity of a few of them.`),pl.forEach(s),Fs=d(e),_($e.$$.fragment,e),Bs=d(e),Qe=l(e,"P",{});var _l=i(Qe);gn=n(_l,"The three important things to remember when writing you own configuration are the following:"),_l.forEach(s),Ss=d(e),x=l(e,"UL",{});var Et=i(x);ke=l(Et,"LI",{});var Go=i(ke);yn=n(Go,"you have to inherit from "),Bt=l(Go,"CODE",{});var gl=i(Bt);wn=n(gl,"PretrainedConfig"),gl.forEach(s),bn=n(Go,","),Go.forEach(s),vn=d(Et),U=l(Et,"LI",{});var jt=i(U);$n=n(jt,"the "),St=l(jt,"CODE",{});var yl=i(St);kn=n(yl,"__init__"),yl.forEach(s),En=n(jt," of your "),Ht=l(jt,"CODE",{});var wl=i(Ht);jn=n(wl,"PretrainedConfig"),wl.forEach(s),Cn=n(jt," must accept any kwargs,"),jt.forEach(s),Pn=d(Et),K=l(Et,"LI",{});var Ct=i(K);An=n(Ct,"those "),Wt=l(Ct,"CODE",{});var bl=i(Wt);Tn=n(bl,"kwargs"),bl.forEach(s),Rn=n(Ct," need to be passed to the superclass "),Lt=l(Ct,"CODE",{});var vl=i(Lt);Mn=n(vl,"__init__"),vl.forEach(s),qn=n(Ct,"."),Ct.forEach(s),Et.forEach(s),Hs=d(e),O=l(e,"P",{});var Pt=i(O);In=n(Pt,`The inheritance is to make sure you get all the functionality from the \u{1F917} Transformers library, while the two other
constraints come from the fact a `),zt=l(Pt,"CODE",{});var $l=i(zt);Nn=n($l,"PretrainedConfig"),$l.forEach(s),xn=n(Pt,` has more fields than the ones you are setting. When reloading a
config with the `),Yt=l(Pt,"CODE",{});var kl=i(Yt);On=n(kl,"from_pretrained"),kl.forEach(s),Dn=n(Pt,` method, those fields need to be accepted by your config and then sent to the
superclass.`),Pt.forEach(s),Ws=d(e),D=l(e,"P",{});var At=i(D);Fn=n(At,"Defining a "),Gt=l(At,"CODE",{});var El=i(Gt);Bn=n(El,"model_type"),El.forEach(s),Sn=n(At," for your configuration (here "),Ut=l(At,"CODE",{});var jl=i(Ut);Hn=n(jl,'model_type="resnet"'),jl.forEach(s),Wn=n(At,`) is not mandatory, unless you want to
register your model with the auto classes (see last section).`),At.forEach(s),Ls=d(e),Xe=l(e,"P",{});var Cl=i(Xe);Ln=n(Cl,`With this done, you can easily create and save your configuration like you would do with any other model config of the
library. Here is how we can create a resnet50d config and save it:`),Cl.forEach(s),zs=d(e),_(Ee.$$.fragment,e),Ys=d(e),A=l(e,"P",{});var pe=i(A);zn=n(pe,"This will save a file named "),Kt=l(pe,"CODE",{});var Pl=i(Kt);Yn=n(Pl,"config.json"),Pl.forEach(s),Gn=n(pe," inside the folder "),Vt=l(pe,"CODE",{});var Al=i(Vt);Un=n(Al,"custom-resnet"),Al.forEach(s),Kn=n(pe,`. You can then reload your config with the
`),Jt=l(pe,"CODE",{});var Tl=i(Jt);Vn=n(Tl,"from_pretrained"),Tl.forEach(s),Jn=n(pe," method:"),pe.forEach(s),Gs=d(e),_(je.$$.fragment,e),Us=d(e),F=l(e,"P",{});var Tt=i(F);Qn=n(Tt,"You can also use any other method of the "),Ze=l(Tt,"A",{href:!0});var Rl=i(Ze);Xn=n(Rl,"PretrainedConfig"),Rl.forEach(s),Zn=n(Tt," class, like "),et=l(Tt,"A",{href:!0});var Ml=i(et);ea=n(Ml,"push_to_hub()"),Ml.forEach(s),ta=n(Tt,` to
directly upload your config to the Hub.`),Tt.forEach(s),Ks=d(e),V=l(e,"H2",{class:!0});var Uo=i(V);oe=l(Uo,"A",{id:!0,class:!0,href:!0});var ql=i(oe);Qt=l(ql,"SPAN",{});var Il=i(Qt);_(Ce.$$.fragment,Il),Il.forEach(s),ql.forEach(s),sa=d(Uo),Xt=l(Uo,"SPAN",{});var Nl=i(Xt);oa=n(Nl,"Writing a custom model"),Nl.forEach(s),Uo.forEach(s),Vs=d(e),B=l(e,"P",{});var Rt=i(B);na=n(Rt,`Now that we have our ResNet configuration, we can go on writing the model. We will actually write two: one that
extracts the hidden features from a batch of images (like `),tt=l(Rt,"A",{href:!0});var xl=i(tt);aa=n(xl,"BertModel"),xl.forEach(s),ra=n(Rt,`) and one that is suitable for image
classification (like `),st=l(Rt,"A",{href:!0});var Ol=i(st);la=n(Ol,"BertForSequenceClassification"),Ol.forEach(s),ia=n(Rt,")."),Rt.forEach(s),Js=d(e),ne=l(e,"P",{});var Ko=i(ne);fa=n(Ko,`As we mentioned before, we\u2019ll only write a loose wrapper of the model to keep it simple for this example. The only
thing we need to do before writing this class is a map between the block types and actual block classes. Then the
model is defined from the configuration by passing everything to the `),Zt=l(Ko,"CODE",{});var Dl=i(Zt);ca=n(Dl,"ResNet"),Dl.forEach(s),da=n(Ko," class:"),Ko.forEach(s),Qs=d(e),_(Pe.$$.fragment,e),Xs=d(e),ot=l(e,"P",{});var Fl=i(ot);ha=n(Fl,"For the model that will classify images, we just change the forward method:"),Fl.forEach(s),Zs=d(e),_(Ae.$$.fragment,e),eo=d(e),C=l(e,"P",{});var z=i(C);ma=n(z,"In both cases, notice how we inherit from "),es=l(z,"CODE",{});var Bl=i(es);ua=n(Bl,"PreTrainedModel"),Bl.forEach(s),pa=n(z," and call the superclass initialization with the "),ts=l(z,"CODE",{});var Sl=i(ts);_a=n(Sl,"config"),Sl.forEach(s),ga=n(z,`
(a bit like when you write a regular `),ss=l(z,"CODE",{});var Hl=i(ss);ya=n(Hl,"torch.nn.Module"),Hl.forEach(s),wa=n(z,"). The line that sets the "),os=l(z,"CODE",{});var Wl=i(os);ba=n(Wl,"config_class"),Wl.forEach(s),va=n(z,` is not mandatory, unless
you want to register your model with the auto classes (see last section).`),z.forEach(s),to=d(e),_(ae.$$.fragment,e),so=d(e),S=l(e,"P",{});var Mt=i(S);$a=n(Mt,`You can have your model return anything you want, but returning a dictionary like we did for
`),ns=l(Mt,"CODE",{});var Ll=i(ns);ka=n(Ll,"ResnetModelForImageClassification"),Ll.forEach(s),Ea=n(Mt,`, with the loss included when labels are passed, will make your model directly
usable inside the `),nt=l(Mt,"A",{href:!0});var zl=i(nt);ja=n(zl,"Trainer"),zl.forEach(s),Ca=n(Mt,` class. Using another output format is fine as long as you are planning on using your own
training loop or another library for training.`),Mt.forEach(s),oo=d(e),at=l(e,"P",{});var Yl=i(at);Pa=n(Yl,"Now that we have our model class, let\u2019s create one:"),Yl.forEach(s),no=d(e),_(Te.$$.fragment,e),ao=d(e),T=l(e,"P",{});var _e=i(T);Aa=n(_e,"Again, you can use any of the methods of "),rt=l(_e,"A",{href:!0});var Gl=i(rt);Ta=n(Gl,"PreTrainedModel"),Gl.forEach(s),Ra=n(_e,", like "),lt=l(_e,"A",{href:!0});var Ul=i(lt);Ma=n(Ul,"save_pretrained()"),Ul.forEach(s),qa=n(_e,` or
`),it=l(_e,"A",{href:!0});var Kl=i(it);Ia=n(Kl,"push_to_hub()"),Kl.forEach(s),Na=n(_e,`. We will use the second in the next section, and see how to push the model weights
with the code of our model. But first, let\u2019s load some pretrained weights inside our model.`),_e.forEach(s),ro=d(e),ft=l(e,"P",{});var Vl=i(ft);xa=n(Vl,`In your own use case, you will probably be training your custom model on your own data. To go fast for this tutorial,
we will use the pretrained version of the resnet50d. Since our model is just a wrapper around it, it\u2019s going to be
easy to transfer those weights:`),Vl.forEach(s),lo=d(e),_(Re.$$.fragment,e),io=d(e),H=l(e,"P",{});var qt=i(H);Oa=n(qt,"Now let\u2019s see how to make sure that when we do "),ct=l(qt,"A",{href:!0});var Jl=i(ct);Da=n(Jl,"save_pretrained()"),Jl.forEach(s),Fa=n(qt," or "),dt=l(qt,"A",{href:!0});var Ql=i(dt);Ba=n(Ql,"push_to_hub()"),Ql.forEach(s),Sa=n(qt,`, the
code of the model is saved.`),qt.forEach(s),fo=d(e),J=l(e,"H2",{class:!0});var Vo=i(J);re=l(Vo,"A",{id:!0,class:!0,href:!0});var Xl=i(re);as=l(Xl,"SPAN",{});var Zl=i(as);_(Me.$$.fragment,Zl),Zl.forEach(s),Xl.forEach(s),Ha=d(Vo),rs=l(Vo,"SPAN",{});var ei=i(rs);Wa=n(ei,"Sending the code to the Hub"),ei.forEach(s),Vo.forEach(s),co=d(e),_(le.$$.fragment,e),ho=d(e),$=l(e,"P",{});var j=i($);La=n(j,"First, make sure your model is fully defined in a "),ls=l(j,"CODE",{});var ti=i(ls);za=n(ti,".py"),ti.forEach(s),Ya=n(j,` file. It can rely on relative imports to some other files as
long as all the files are in the same directory (we don\u2019t support submodules for this feature yet). For our example,
we\u2019ll define a `),is=l(j,"CODE",{});var si=i(is);Ga=n(si,"modeling_resnet.py"),si.forEach(s),Ua=n(j," file and a "),fs=l(j,"CODE",{});var oi=i(fs);Ka=n(oi,"configuration_resnet.py"),oi.forEach(s),Va=n(j,` file in a folder of the current working
directory named `),cs=l(j,"CODE",{});var ni=i(cs);Ja=n(ni,"resnet_model"),ni.forEach(s),Qa=n(j,". The configuration file contains the code for "),ds=l(j,"CODE",{});var ai=i(ds);Xa=n(ai,"ResnetConfig"),ai.forEach(s),Za=n(j,` and the modeling file
contains the code of `),hs=l(j,"CODE",{});var ri=i(hs);er=n(ri,"ResnetModel"),ri.forEach(s),tr=n(j," and "),ms=l(j,"CODE",{});var li=i(ms);sr=n(li,"ResnetModelForImageClassification"),li.forEach(s),or=n(j,"."),j.forEach(s),mo=d(e),_(qe.$$.fragment,e),uo=d(e),W=l(e,"P",{});var It=i(W);nr=n(It,"The "),us=l(It,"CODE",{});var ii=i(us);ar=n(ii,"__init__.py"),ii.forEach(s),rr=n(It," can be empty, it\u2019s just there so that Python detects "),ps=l(It,"CODE",{});var fi=i(ps);lr=n(fi,"resnet_model"),fi.forEach(s),ir=n(It," can be use as a module."),It.forEach(s),po=d(e),_(ie.$$.fragment,e),_o=d(e),ht=l(e,"P",{});var ci=i(ht);fr=n(ci,"Note that you can re-use (or subclass) an existing configuration/model."),ci.forEach(s),go=d(e),mt=l(e,"P",{});var di=i(mt);cr=n(di,`To share your model with the community, follow those steps: first import the ResNet model and config from the newly
created files:`),di.forEach(s),yo=d(e),_(Ie.$$.fragment,e),wo=d(e),fe=l(e,"P",{});var Jo=i(fe);dr=n(Jo,"Then you have to tell the library you want to copy the code files of those objects when using the "),_s=l(Jo,"CODE",{});var hi=i(_s);hr=n(hi,"save_pretrained"),hi.forEach(s),mr=n(Jo,`
method and properly register them with a given Auto class (especially for models), just run:`),Jo.forEach(s),bo=d(e),_(Ne.$$.fragment,e),vo=d(e),ce=l(e,"P",{});var Qo=i(ce);ur=n(Qo,`Note that there is no need to specify an auto class for the configuration (there is only one auto class for them,
`),ut=l(Qo,"A",{href:!0});var mi=i(ut);pr=n(mi,"AutoConfig"),mi.forEach(s),_r=n(Qo,`) but it\u2019s different for models. Your custom model could be suitable for many different tasks, so you
have to specify which one of the auto classes is the correct one for your model.`),Qo.forEach(s),$o=d(e),pt=l(e,"P",{});var ui=i(pt);gr=n(ui,"Next, let\u2019s create the config and models as we did before:"),ui.forEach(s),ko=d(e),_(xe.$$.fragment,e),Eo=d(e),_t=l(e,"P",{});var pi=i(_t);yr=n(pi,"Now to send the model to the Hub, make sure you are logged in. Either run in your terminal:"),pi.forEach(s),jo=d(e),_(Oe.$$.fragment,e),Co=d(e),gt=l(e,"P",{});var _i=i(gt);wr=n(_i,"or from a notebook:"),_i.forEach(s),Po=d(e),_(De.$$.fragment,e),Ao=d(e),yt=l(e,"P",{});var gi=i(yt);br=n(gi,"You can then push to your own namespace (or an organization you are a member of) like this:"),gi.forEach(s),To=d(e),_(Fe.$$.fragment,e),Ro=d(e),R=l(e,"P",{});var ge=i(R);vr=n(ge,`On top of the modeling weights and the configuration in json format, this also copied the modeling and
configuration `),gs=l(ge,"CODE",{});var yi=i(gs);$r=n(yi,".py"),yi.forEach(s),kr=n(ge," files in the folder "),ys=l(ge,"CODE",{});var wi=i(ys);Er=n(wi,"custom-resnet50d"),wi.forEach(s),jr=n(ge,` and uploaded the result to the Hub. You can check the result
in this `),Be=l(ge,"A",{href:!0,rel:!0});var bi=i(Be);Cr=n(bi,"model repo"),bi.forEach(s),Pr=n(ge,"."),ge.forEach(s),Mo=d(e),de=l(e,"P",{});var Xo=i(de);Ar=n(Xo,"See the "),wt=l(Xo,"A",{href:!0});var vi=i(wt);Tr=n(vi,"sharing tutorial"),vi.forEach(s),Rr=n(Xo," for more information on the push to Hub method."),Xo.forEach(s),qo=d(e),Q=l(e,"H2",{class:!0});var Zo=i(Q);he=l(Zo,"A",{id:!0,class:!0,href:!0});var $i=i(he);ws=l($i,"SPAN",{});var ki=i(ws);_(Se.$$.fragment,ki),ki.forEach(s),$i.forEach(s),Mr=d(Zo),bs=l(Zo,"SPAN",{});var Ei=i(bs);qr=n(Ei,"Using a model with custom code"),Ei.forEach(s),Zo.forEach(s),Io=d(e),M=l(e,"P",{});var ye=i(M);Ir=n(ye,`You can use any configuration, model or tokenizer with custom code files in its repository with the auto-classes and
the `),vs=l(ye,"CODE",{});var ji=i(vs);Nr=n(ji,"from_pretrained"),ji.forEach(s),xr=n(ye," method. All files and code uploaded to the Hub are scanned for malware (refer to the "),He=l(ye,"A",{href:!0,rel:!0});var Ci=i(He);Or=n(Ci,"Hub security"),Ci.forEach(s),Dr=n(ye,` documentation for more information), but you should still
review the model code and author to avoid executing malicious code on your machine. Set `),$s=l(ye,"CODE",{});var Pi=i($s);Fr=n(Pi,"trust_remote_code=True"),Pi.forEach(s),Br=n(ye,` to use
a model with custom code:`),ye.forEach(s),No=d(e),_(We.$$.fragment,e),xo=d(e),me=l(e,"P",{});var en=i(me);Sr=n(en,"It is also strongly encouraged to pass a commit hash as a "),ks=l(en,"CODE",{});var Ai=i(ks);Hr=n(Ai,"revision"),Ai.forEach(s),Wr=n(en,` to make sure the author of the models did not
update the code with some malicious new lines (unless you fully trust the authors of the models).`),en.forEach(s),Oo=d(e),_(Le.$$.fragment,e),Do=d(e),bt=l(e,"P",{});var Ti=i(bt);Lr=n(Ti,`Note that when browsing the commit history of the model repo on the Hub, there is a button to easily copy the commit
hash of any commit.`),Ti.forEach(s),Fo=d(e),X=l(e,"H2",{class:!0});var tn=i(X);ue=l(tn,"A",{id:!0,class:!0,href:!0});var Ri=i(ue);Es=l(Ri,"SPAN",{});var Mi=i(Es);_(ze.$$.fragment,Mi),Mi.forEach(s),Ri.forEach(s),zr=d(tn),js=l(tn,"SPAN",{});var qi=i(js);Yr=n(qi,"Registering a model with custom code to the auto classes"),qi.forEach(s),tn.forEach(s),Bo=d(e),vt=l(e,"P",{});var Ii=i(vt);Gr=n(Ii,`If you are writing a library that extends \u{1F917} Transformers, you may want to extend the auto classes to include your own
model. This is different from pushing the code to the Hub in the sense that users will need to import your library to
get the custom models (contrarily to automatically downloading the model code from the Hub).`),Ii.forEach(s),So=d(e),L=l(e,"P",{});var Nt=i(L);Ur=n(Nt,"As long as your config has a "),Cs=l(Nt,"CODE",{});var Ni=i(Cs);Kr=n(Ni,"model_type"),Ni.forEach(s),Vr=n(Nt,` attribute that is different from existing model types, and that your model
classes have the right `),Ps=l(Nt,"CODE",{});var xi=i(Ps);Jr=n(xi,"config_class"),xi.forEach(s),Qr=n(Nt," attributes, you can just add them to the auto classes likes this:"),Nt.forEach(s),Ho=d(e),_(Ye.$$.fragment,e),Wo=d(e),q=l(e,"P",{});var we=i(q);Xr=n(we,"Note that the first argument used when registering your custom config to "),$t=l(we,"A",{href:!0});var Oi=i($t);Zr=n(Oi,"AutoConfig"),Oi.forEach(s),el=n(we," needs to match the "),As=l(we,"CODE",{});var Di=i(As);tl=n(Di,"model_type"),Di.forEach(s),sl=n(we,`
of your custom config, and the first argument used when registering your custom models to any auto model class needs
to match the `),Ts=l(we,"CODE",{});var Fi=i(Ts);ol=n(Fi,"config_class"),Fi.forEach(s),nl=n(we," of those models."),we.forEach(s),this.h()},h(){h(m,"name","hf:doc:metadata"),h(m,"content",JSON.stringify(Ki)),h(v,"id","sharing-custom-models"),h(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(v,"href","#sharing-custom-models"),h(u,"class","relative group"),h(be,"href","https://github.com/rwightman/pytorch-image-models/tree/master/timm"),h(be,"rel","nofollow"),h(Ve,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(te,"id","writing-a-custom-configuration"),h(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(te,"href","#writing-a-custom-configuration"),h(G,"class","relative group"),h(Ze,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(et,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.push_to_hub"),h(oe,"id","writing-a-custom-model"),h(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oe,"href","#writing-a-custom-model"),h(V,"class","relative group"),h(tt,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),h(st,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForSequenceClassification"),h(nt,"href","/docs/transformers/main/en/main_classes/trainer#transformers.Trainer"),h(rt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(lt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),h(it,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.push_to_hub"),h(ct,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),h(dt,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.push_to_hub"),h(re,"id","sending-the-code-to-the-hub"),h(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(re,"href","#sending-the-code-to-the-hub"),h(J,"class","relative group"),h(ut,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoConfig"),h(Be,"href","https://huggingface.co/sgugger/custom-resnet50d"),h(Be,"rel","nofollow"),h(wt,"href","model_sharing"),h(he,"id","using-a-model-with-custom-code"),h(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(he,"href","#using-a-model-with-custom-code"),h(Q,"class","relative group"),h(He,"href","https://huggingface.co/docs/hub/security#malware-scanning"),h(He,"rel","nofollow"),h(ue,"id","registering-a-model-with-custom-code-to-the-auto-classes"),h(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ue,"href","#registering-a-model-with-custom-code-to-the-auto-classes"),h(X,"class","relative group"),h($t,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoConfig")},m(e,a){t(document.head,m),f(e,E,a),f(e,u,a),t(u,v),t(v,Y),g(P,Y,null),t(u,I),t(u,ee),t(ee,sn),f(e,qs,a),f(e,Ue,a),t(Ue,on),f(e,Is,a),f(e,Ke,a),t(Ke,nn),f(e,Ns,a),f(e,N,a),t(N,an),t(N,be),t(be,rn),t(N,ln),t(N,Ve),t(Ve,fn),t(N,cn),f(e,xs,a),f(e,G,a),t(G,te),t(te,Ot),g(ve,Ot,null),t(G,dn),t(G,Dt),t(Dt,hn),f(e,Os,a),f(e,se,a),t(se,mn),t(se,Ft),t(Ft,un),t(se,pn),f(e,Ds,a),f(e,Je,a),t(Je,_n),f(e,Fs,a),g($e,e,a),f(e,Bs,a),f(e,Qe,a),t(Qe,gn),f(e,Ss,a),f(e,x,a),t(x,ke),t(ke,yn),t(ke,Bt),t(Bt,wn),t(ke,bn),t(x,vn),t(x,U),t(U,$n),t(U,St),t(St,kn),t(U,En),t(U,Ht),t(Ht,jn),t(U,Cn),t(x,Pn),t(x,K),t(K,An),t(K,Wt),t(Wt,Tn),t(K,Rn),t(K,Lt),t(Lt,Mn),t(K,qn),f(e,Hs,a),f(e,O,a),t(O,In),t(O,zt),t(zt,Nn),t(O,xn),t(O,Yt),t(Yt,On),t(O,Dn),f(e,Ws,a),f(e,D,a),t(D,Fn),t(D,Gt),t(Gt,Bn),t(D,Sn),t(D,Ut),t(Ut,Hn),t(D,Wn),f(e,Ls,a),f(e,Xe,a),t(Xe,Ln),f(e,zs,a),g(Ee,e,a),f(e,Ys,a),f(e,A,a),t(A,zn),t(A,Kt),t(Kt,Yn),t(A,Gn),t(A,Vt),t(Vt,Un),t(A,Kn),t(A,Jt),t(Jt,Vn),t(A,Jn),f(e,Gs,a),g(je,e,a),f(e,Us,a),f(e,F,a),t(F,Qn),t(F,Ze),t(Ze,Xn),t(F,Zn),t(F,et),t(et,ea),t(F,ta),f(e,Ks,a),f(e,V,a),t(V,oe),t(oe,Qt),g(Ce,Qt,null),t(V,sa),t(V,Xt),t(Xt,oa),f(e,Vs,a),f(e,B,a),t(B,na),t(B,tt),t(tt,aa),t(B,ra),t(B,st),t(st,la),t(B,ia),f(e,Js,a),f(e,ne,a),t(ne,fa),t(ne,Zt),t(Zt,ca),t(ne,da),f(e,Qs,a),g(Pe,e,a),f(e,Xs,a),f(e,ot,a),t(ot,ha),f(e,Zs,a),g(Ae,e,a),f(e,eo,a),f(e,C,a),t(C,ma),t(C,es),t(es,ua),t(C,pa),t(C,ts),t(ts,_a),t(C,ga),t(C,ss),t(ss,ya),t(C,wa),t(C,os),t(os,ba),t(C,va),f(e,to,a),g(ae,e,a),f(e,so,a),f(e,S,a),t(S,$a),t(S,ns),t(ns,ka),t(S,Ea),t(S,nt),t(nt,ja),t(S,Ca),f(e,oo,a),f(e,at,a),t(at,Pa),f(e,no,a),g(Te,e,a),f(e,ao,a),f(e,T,a),t(T,Aa),t(T,rt),t(rt,Ta),t(T,Ra),t(T,lt),t(lt,Ma),t(T,qa),t(T,it),t(it,Ia),t(T,Na),f(e,ro,a),f(e,ft,a),t(ft,xa),f(e,lo,a),g(Re,e,a),f(e,io,a),f(e,H,a),t(H,Oa),t(H,ct),t(ct,Da),t(H,Fa),t(H,dt),t(dt,Ba),t(H,Sa),f(e,fo,a),f(e,J,a),t(J,re),t(re,as),g(Me,as,null),t(J,Ha),t(J,rs),t(rs,Wa),f(e,co,a),g(le,e,a),f(e,ho,a),f(e,$,a),t($,La),t($,ls),t(ls,za),t($,Ya),t($,is),t(is,Ga),t($,Ua),t($,fs),t(fs,Ka),t($,Va),t($,cs),t(cs,Ja),t($,Qa),t($,ds),t(ds,Xa),t($,Za),t($,hs),t(hs,er),t($,tr),t($,ms),t(ms,sr),t($,or),f(e,mo,a),g(qe,e,a),f(e,uo,a),f(e,W,a),t(W,nr),t(W,us),t(us,ar),t(W,rr),t(W,ps),t(ps,lr),t(W,ir),f(e,po,a),g(ie,e,a),f(e,_o,a),f(e,ht,a),t(ht,fr),f(e,go,a),f(e,mt,a),t(mt,cr),f(e,yo,a),g(Ie,e,a),f(e,wo,a),f(e,fe,a),t(fe,dr),t(fe,_s),t(_s,hr),t(fe,mr),f(e,bo,a),g(Ne,e,a),f(e,vo,a),f(e,ce,a),t(ce,ur),t(ce,ut),t(ut,pr),t(ce,_r),f(e,$o,a),f(e,pt,a),t(pt,gr),f(e,ko,a),g(xe,e,a),f(e,Eo,a),f(e,_t,a),t(_t,yr),f(e,jo,a),g(Oe,e,a),f(e,Co,a),f(e,gt,a),t(gt,wr),f(e,Po,a),g(De,e,a),f(e,Ao,a),f(e,yt,a),t(yt,br),f(e,To,a),g(Fe,e,a),f(e,Ro,a),f(e,R,a),t(R,vr),t(R,gs),t(gs,$r),t(R,kr),t(R,ys),t(ys,Er),t(R,jr),t(R,Be),t(Be,Cr),t(R,Pr),f(e,Mo,a),f(e,de,a),t(de,Ar),t(de,wt),t(wt,Tr),t(de,Rr),f(e,qo,a),f(e,Q,a),t(Q,he),t(he,ws),g(Se,ws,null),t(Q,Mr),t(Q,bs),t(bs,qr),f(e,Io,a),f(e,M,a),t(M,Ir),t(M,vs),t(vs,Nr),t(M,xr),t(M,He),t(He,Or),t(M,Dr),t(M,$s),t($s,Fr),t(M,Br),f(e,No,a),g(We,e,a),f(e,xo,a),f(e,me,a),t(me,Sr),t(me,ks),t(ks,Hr),t(me,Wr),f(e,Oo,a),g(Le,e,a),f(e,Do,a),f(e,bt,a),t(bt,Lr),f(e,Fo,a),f(e,X,a),t(X,ue),t(ue,Es),g(ze,Es,null),t(X,zr),t(X,js),t(js,Yr),f(e,Bo,a),f(e,vt,a),t(vt,Gr),f(e,So,a),f(e,L,a),t(L,Ur),t(L,Cs),t(Cs,Kr),t(L,Vr),t(L,Ps),t(Ps,Jr),t(L,Qr),f(e,Ho,a),g(Ye,e,a),f(e,Wo,a),f(e,q,a),t(q,Xr),t(q,$t),t($t,Zr),t(q,el),t(q,As),t(As,tl),t(q,sl),t(q,Ts),t(Ts,ol),t(q,nl),Lo=!0},p(e,[a]){const Ge={};a&2&&(Ge.$$scope={dirty:a,ctx:e}),ae.$set(Ge);const Rs={};a&2&&(Rs.$$scope={dirty:a,ctx:e}),le.$set(Rs);const Ms={};a&2&&(Ms.$$scope={dirty:a,ctx:e}),ie.$set(Ms)},i(e){Lo||(y(P.$$.fragment,e),y(ve.$$.fragment,e),y($e.$$.fragment,e),y(Ee.$$.fragment,e),y(je.$$.fragment,e),y(Ce.$$.fragment,e),y(Pe.$$.fragment,e),y(Ae.$$.fragment,e),y(ae.$$.fragment,e),y(Te.$$.fragment,e),y(Re.$$.fragment,e),y(Me.$$.fragment,e),y(le.$$.fragment,e),y(qe.$$.fragment,e),y(ie.$$.fragment,e),y(Ie.$$.fragment,e),y(Ne.$$.fragment,e),y(xe.$$.fragment,e),y(Oe.$$.fragment,e),y(De.$$.fragment,e),y(Fe.$$.fragment,e),y(Se.$$.fragment,e),y(We.$$.fragment,e),y(Le.$$.fragment,e),y(ze.$$.fragment,e),y(Ye.$$.fragment,e),Lo=!0)},o(e){w(P.$$.fragment,e),w(ve.$$.fragment,e),w($e.$$.fragment,e),w(Ee.$$.fragment,e),w(je.$$.fragment,e),w(Ce.$$.fragment,e),w(Pe.$$.fragment,e),w(Ae.$$.fragment,e),w(ae.$$.fragment,e),w(Te.$$.fragment,e),w(Re.$$.fragment,e),w(Me.$$.fragment,e),w(le.$$.fragment,e),w(qe.$$.fragment,e),w(ie.$$.fragment,e),w(Ie.$$.fragment,e),w(Ne.$$.fragment,e),w(xe.$$.fragment,e),w(Oe.$$.fragment,e),w(De.$$.fragment,e),w(Fe.$$.fragment,e),w(Se.$$.fragment,e),w(We.$$.fragment,e),w(Le.$$.fragment,e),w(ze.$$.fragment,e),w(Ye.$$.fragment,e),Lo=!1},d(e){s(m),e&&s(E),e&&s(u),b(P),e&&s(qs),e&&s(Ue),e&&s(Is),e&&s(Ke),e&&s(Ns),e&&s(N),e&&s(xs),e&&s(G),b(ve),e&&s(Os),e&&s(se),e&&s(Ds),e&&s(Je),e&&s(Fs),b($e,e),e&&s(Bs),e&&s(Qe),e&&s(Ss),e&&s(x),e&&s(Hs),e&&s(O),e&&s(Ws),e&&s(D),e&&s(Ls),e&&s(Xe),e&&s(zs),b(Ee,e),e&&s(Ys),e&&s(A),e&&s(Gs),b(je,e),e&&s(Us),e&&s(F),e&&s(Ks),e&&s(V),b(Ce),e&&s(Vs),e&&s(B),e&&s(Js),e&&s(ne),e&&s(Qs),b(Pe,e),e&&s(Xs),e&&s(ot),e&&s(Zs),b(Ae,e),e&&s(eo),e&&s(C),e&&s(to),b(ae,e),e&&s(so),e&&s(S),e&&s(oo),e&&s(at),e&&s(no),b(Te,e),e&&s(ao),e&&s(T),e&&s(ro),e&&s(ft),e&&s(lo),b(Re,e),e&&s(io),e&&s(H),e&&s(fo),e&&s(J),b(Me),e&&s(co),b(le,e),e&&s(ho),e&&s($),e&&s(mo),b(qe,e),e&&s(uo),e&&s(W),e&&s(po),b(ie,e),e&&s(_o),e&&s(ht),e&&s(go),e&&s(mt),e&&s(yo),b(Ie,e),e&&s(wo),e&&s(fe),e&&s(bo),b(Ne,e),e&&s(vo),e&&s(ce),e&&s($o),e&&s(pt),e&&s(ko),b(xe,e),e&&s(Eo),e&&s(_t),e&&s(jo),b(Oe,e),e&&s(Co),e&&s(gt),e&&s(Po),b(De,e),e&&s(Ao),e&&s(yt),e&&s(To),b(Fe,e),e&&s(Ro),e&&s(R),e&&s(Mo),e&&s(de),e&&s(qo),e&&s(Q),b(Se),e&&s(Io),e&&s(M),e&&s(No),b(We,e),e&&s(xo),e&&s(me),e&&s(Oo),b(Le,e),e&&s(Do),e&&s(bt),e&&s(Fo),e&&s(X),b(ze),e&&s(Bo),e&&s(vt),e&&s(So),e&&s(L),e&&s(Ho),b(Ye,e),e&&s(Wo),e&&s(q)}}}const Ki={local:"sharing-custom-models",sections:[{local:"writing-a-custom-configuration",title:"Writing a custom configuration"},{local:"writing-a-custom-model",title:"Writing a custom model"},{local:"sending-the-code-to-the-hub",title:"Sending the code to the Hub"},{local:"using-a-model-with-custom-code",title:"Using a model with custom code"},{local:"registering-a-model-with-custom-code-to-the-auto-classes",title:"Registering a model with custom code to the auto classes"}],title:"Sharing custom models"};function Vi(Z){return Li(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ef extends Bi{constructor(m){super();Si(this,m,Vi,Ui,Hi,{})}}export{ef as default,Ki as metadata};
