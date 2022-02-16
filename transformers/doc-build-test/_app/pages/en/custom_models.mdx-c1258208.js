import{S as Rr,i as qr,s as Ir,e as l,k as d,w as p,t as o,L as Nr,c as i,d as s,m as c,a as r,x as _,h as n,b as h,J as t,g as f,y as g,q as y,o as w,B as b}from"../../chunks/vendor-9e2b328e.js";import{T as Zl}from"../../chunks/Tip-76f97a76.js";import{I as qt}from"../../chunks/IconCopyLink-fd0e58fd.js";import{C as E}from"../../chunks/CodeBlock-b9ff96e9.js";import"../../chunks/CopyButton-4b97cbf7.js";function xr(Y){let u,k;return{c(){u=l("p"),k=o("If your model is very similar to a model inside the library, you can re-use the same configuration as this model.")},l(m){u=i(m,"P",{});var v=r(u);k=n(v,"If your model is very similar to a model inside the library, you can re-use the same configuration as this model."),v.forEach(s)},m(m,v){f(m,u,v),t(u,k)},d(m){m&&s(u)}}}function Or(Y){let u,k;return{c(){u=l("p"),k=o("This API is experimental and may have some slight breaking changes in the next releases.")},l(m){u=i(m,"P",{});var v=r(u);k=n(v,"This API is experimental and may have some slight breaking changes in the next releases."),v.forEach(s)},m(m,v){f(m,u,v),t(u,k)},d(m){m&&s(u)}}}function Dr(Y){let u,k,m,v,z;return{c(){u=l("p"),k=o(`If copying a modeling files from the library, you will need to replace all the relative imports at the top of the file
to import from the `),m=l("code"),v=o("transformers"),z=o(" package.")},l(P){u=i(P,"P",{});var q=r(u);k=n(q,`If copying a modeling files from the library, you will need to replace all the relative imports at the top of the file
to import from the `),m=i(q,"CODE",{});var Z=r(m);v=n(Z,"transformers"),Z.forEach(s),z=n(q," package."),q.forEach(s)},m(P,q){f(P,u,q),t(u,k),t(u,m),t(m,v),t(u,z)},d(P){P&&s(u)}}}function Fr(Y){let u,k,m,v,z,P,q,Z,en,Ts,ze,tn,Ms,Ge,sn,Rs,I,on,we,nn,an,Ke,ln,rn,qs,G,ee,It,be,fn,Nt,dn,Is,te,cn,xt,hn,un,Ns,Ue,mn,xs,ve,Os,Ve,pn,Ds,N,$e,_n,Ot,gn,yn,wn,K,bn,Dt,vn,$n,Ft,kn,En,jn,U,Cn,Bt,Pn,An,Ht,Tn,Mn,Fs,x,Rn,St,qn,In,Wt,Nn,xn,Bs,O,On,Lt,Dn,Fn,Yt,Bn,Hn,Hs,Je,Sn,Ss,ke,Ws,A,Wn,zt,Ln,Yn,Gt,zn,Gn,Kt,Kn,Un,Ls,Ee,Ys,D,Vn,Qe,Jn,Qn,Xe,Xn,Zn,zs,V,se,Ut,je,ea,Vt,ta,Gs,F,sa,Ze,oa,na,Jt,aa,la,Ks,oe,ia,Qt,ra,fa,Us,Ce,Vs,et,da,Js,Pe,Qs,C,ca,Xt,ha,ua,Zt,ma,pa,es,_a,ga,ts,ya,wa,Xs,ne,Zs,B,ba,ss,va,$a,tt,ka,Ea,eo,st,ja,to,Ae,so,T,Ca,ot,Pa,Aa,nt,Ta,Ma,at,Ra,qa,oo,lt,Ia,no,Te,ao,H,Na,it,xa,Oa,rt,Da,Fa,lo,J,ae,os,Me,Ba,ns,Ha,io,le,ro,$,Sa,as,Wa,La,ls,Ya,za,is,Ga,Ka,rs,Ua,Va,fs,Ja,Qa,ds,Xa,Za,cs,el,tl,fo,Re,co,S,sl,hs,ol,nl,us,al,ll,ho,ie,uo,ft,il,mo,dt,rl,po,qe,_o,re,fl,ms,dl,cl,go,Ie,yo,fe,hl,ct,ul,ml,wo,ht,pl,bo,Ne,vo,ut,_l,$o,xe,ko,mt,gl,Eo,Oe,jo,pt,yl,Co,De,Po,M,wl,ps,bl,vl,_s,$l,kl,Fe,El,jl,Ao,de,Cl,_t,Pl,Al,To,Q,ce,gs,Be,Tl,ys,Ml,Mo,he,Rl,ws,ql,Il,Ro,He,qo,ue,Nl,bs,xl,Ol,Io,Se,No,gt,Dl,xo,X,me,vs,We,Fl,$s,Bl,Oo,yt,Hl,Do,W,Sl,ks,Wl,Ll,Es,Yl,zl,Fo,Le,Bo,R,Gl,wt,Kl,Ul,js,Vl,Jl,Cs,Ql,Xl,Ho;return P=new qt({}),be=new qt({}),ve=new E({props:{code:`from transformers import PretrainedConfig
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
        <span class="hljs-built_in">super</span>().__init__(**kwargs)`}}),ke=new E({props:{code:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d_config.save_pretrained("custom-resnet"),`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d_config.save_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)`}}),Ee=new E({props:{code:'resnet50d_config = ResnetConfig.from_pretrained("custom-resnet"),',highlighted:'resnet50d_config = ResnetConfig.from_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)'}}),je=new qt({}),Ce=new E({props:{code:`from transformers import PreTrainedModel
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
        <span class="hljs-keyword">return</span> self.model.forward_features(tensor)`}}),Pe=new E({props:{code:`class ResnetModelForImageClassification(PreTrainedModel):
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
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;logits&quot;</span>: logits}`}}),ne=new Zl({props:{$$slots:{default:[xr]},$$scope:{ctx:Y}}}),Ae=new E({props:{code:"resnet50d = ResnetModelForImageClassification(resnet50d_config),",highlighted:"resnet50d = ResnetModelForImageClassification(resnet50d_config)"}}),Te=new E({props:{code:`import timm

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict()),`,highlighted:`<span class="hljs-keyword">import</span> timm

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),Me=new qt({}),le=new Zl({props:{warning:"&lcub;true}",$$slots:{default:[Or]},$$scope:{ctx:Y}}}),Re=new E({props:{code:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.py
    \u251C\u2500\u2500 configuration_resnet.py
    \u2514\u2500\u2500 modeling_resnet.py,`,highlighted:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.<span class="hljs-keyword">py</span>
    \u251C\u2500\u2500 configuration_resnet.<span class="hljs-keyword">py</span>
    \u2514\u2500\u2500 modeling_resnet.<span class="hljs-keyword">py</span>`}}),ie=new Zl({props:{warning:"&lcub;true}",$$slots:{default:[Dr]},$$scope:{ctx:Y}}}),qe=new E({props:{code:`from resnet_model.configuration_resnet import ResnetConfig
from resnet_model.modeling_resnet import ResnetModel, ResnetModelForImageClassification,`,highlighted:`<span class="hljs-keyword">from</span> resnet_model.configuration_resnet <span class="hljs-keyword">import</span> ResnetConfig
<span class="hljs-keyword">from</span> resnet_model.modeling_resnet <span class="hljs-keyword">import</span> ResnetModel, ResnetModelForImageClassification`}}),Ie=new E({props:{code:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class("AutoModel")
ResnetModelForImageClassification.register_for_auto_class("AutoModelForImageClassification"),`,highlighted:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class(<span class="hljs-string">&quot;AutoModel&quot;</span>)
ResnetModelForImageClassification.register_for_auto_class(<span class="hljs-string">&quot;AutoModelForImageClassification&quot;</span>)`}}),Ne=new E({props:{code:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict()),`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),xe=new E({props:{code:"huggingface-cli login,",highlighted:"huggingface-cli login"}}),Oe=new E({props:{code:`from huggingface_hub import notebook_login

notebook_login(),`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),De=new E({props:{code:'resnet50d.push_to_hub("custom-resnet50d"),',highlighted:'resnet50d.push_to_hub(<span class="hljs-string">&quot;custom-resnet50d&quot;</span>)'}}),Be=new qt({}),He=new E({props:{code:`from transformers import AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained("sgugger/custom-resnet50d", trust_remote_code=True),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained(<span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>)`}}),Se=new E({props:{code:`commit_hash = "ed94a7c6247d8aedce4647f00f20de6875b5b292"
model = AutoModelForImageClassification.from_pretrained(
    "sgugger/custom-resnet50d", trust_remote_code=True, revision=commit_hash
),`,highlighted:`commit_hash = <span class="hljs-string">&quot;ed94a7c6247d8aedce4647f00f20de6875b5b292&quot;</span>
model = AutoModelForImageClassification.from_pretrained(
    <span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>, revision=commit_hash
)`}}),We=new qt({}),Le=new E({props:{code:`from transformers import AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register("resnet", ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register(<span class="hljs-string">&quot;resnet&quot;</span>, ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification)`}}),{c(){u=l("meta"),k=d(),m=l("h1"),v=l("a"),z=l("span"),p(P.$$.fragment),q=d(),Z=l("span"),en=o("Sharing custom models"),Ts=d(),ze=l("p"),tn=o(`The \u{1F917} Transformers library is designed to be easily extensible. Every model is fully coded in a given subfolder
of the repository with no abstraction, so you can easily copy a modeling file and tweak it to your needs.`),Ms=d(),Ge=l("p"),sn=o(`If you are writing a brand new model, it might be easier to start from scratch. In this tutorial, we will show you
how to write a custom model and its configuration so it can be used inside Transformers, and how you can share it
with the community (with the code it relies on) so that anyone can use it, even if it\u2019s not present in the \u{1F917}
Transformers library.`),Rs=d(),I=l("p"),on=o(`We will illustrate all of this on a ResNet model, by wrapping the ResNet class of the
`),we=l("a"),nn=o("timm library"),an=o(" into a "),Ke=l("a"),ln=o("PreTrainedModel"),rn=o("."),qs=d(),G=l("h2"),ee=l("a"),It=l("span"),p(be.$$.fragment),fn=d(),Nt=l("span"),dn=o("Writing a custom configuration"),Is=d(),te=l("p"),cn=o(`Before we dive into the model, let\u2019s first write its configuration. The configuration of a model is an object that
will contain all the necessary information to build the model. As we will see in the next section, the model can only
take a `),xt=l("code"),hn=o("config"),un=o(" to be initialized, so we really need that object to be as complete as possible."),Ns=d(),Ue=l("p"),mn=o(`In our example, we will take a couple of arguments of the ResNet class that we might want to tweak. Different
configurations will then give us the different types of ResNets that are possible. We then just store those arguments,
after checking the validity of a few of them.`),xs=d(),p(ve.$$.fragment),Os=d(),Ve=l("p"),pn=o("The three important things to remember when writing you own configuration are the following:"),Ds=d(),N=l("ul"),$e=l("li"),_n=o("you have to inherit from "),Ot=l("code"),gn=o("PretrainedConfig"),yn=o(","),wn=d(),K=l("li"),bn=o("the "),Dt=l("code"),vn=o("__init__"),$n=o(" of your "),Ft=l("code"),kn=o("PretrainedConfig"),En=o(" must accept any kwargs,"),jn=d(),U=l("li"),Cn=o("those "),Bt=l("code"),Pn=o("kwargs"),An=o(" need to be passed to the superclass "),Ht=l("code"),Tn=o("__init__"),Mn=o("."),Fs=d(),x=l("p"),Rn=o(`The inheritance is to make sure you get all the functionality from the \u{1F917} Transformers library, while the two other
constraints come from the fact a `),St=l("code"),qn=o("PretrainedConfig"),In=o(` has more fields than the ones you are setting. When reloading a
config with the `),Wt=l("code"),Nn=o("from_pretrained"),xn=o(` method, those fields need to be accepted by your config and then sent to the
superclass.`),Bs=d(),O=l("p"),On=o("Defining a "),Lt=l("code"),Dn=o("model_type"),Fn=o(" for your configuration (here "),Yt=l("code"),Bn=o('model_type="resnet"'),Hn=o(`) is not mandatory, unless you want to
register your model with the auto classes (see last section).`),Hs=d(),Je=l("p"),Sn=o(`With this done, you can easily create and save your configuration like you would do with any other model config of the
library. Here is how we can create a resnet50d config and save it:`),Ss=d(),p(ke.$$.fragment),Ws=d(),A=l("p"),Wn=o("This will save a file named "),zt=l("code"),Ln=o("config.json"),Yn=o(" inside the folder "),Gt=l("code"),zn=o("custom-resnet"),Gn=o(`. You can then reload your config with the
`),Kt=l("code"),Kn=o("from_pretrained"),Un=o(" method:"),Ls=d(),p(Ee.$$.fragment),Ys=d(),D=l("p"),Vn=o("You can also use any other method of the "),Qe=l("a"),Jn=o("PretrainedConfig"),Qn=o(" class, like "),Xe=l("a"),Xn=o("push_to_hub()"),Zn=o(` to
directly upload your config to the Hub.`),zs=d(),V=l("h2"),se=l("a"),Ut=l("span"),p(je.$$.fragment),ea=d(),Vt=l("span"),ta=o("Writing a custom model"),Gs=d(),F=l("p"),sa=o(`Now that we have our ResNet configuration, we can go on writing the model. We will actually write two: one that
extracts the hidden features from a batch of images (like `),Ze=l("a"),oa=o("BertModel"),na=o(`) and one that is suitable for image
classification (like `),Jt=l("code"),aa=o("BertModelForSequenceClassification"),la=o(")."),Ks=d(),oe=l("p"),ia=o(`As we mentioned before, we\u2019ll only write a loose wrapper of the model to keep it simple for this example. The only
thing we need to do before writing this class is a map between the block types and actual block classes. Then the
model is defined from the configuration by passing everything to the `),Qt=l("code"),ra=o("ResNet"),fa=o(" class:"),Us=d(),p(Ce.$$.fragment),Vs=d(),et=l("p"),da=o("For the model that will classify images, we just change the forward method:"),Js=d(),p(Pe.$$.fragment),Qs=d(),C=l("p"),ca=o("In both cases, notice how we inherit from "),Xt=l("code"),ha=o("PreTrainedModel"),ua=o(" and call the superclass initialization with the "),Zt=l("code"),ma=o("config"),pa=o(`
(a bit like when you write a regular `),es=l("code"),_a=o("torch.nn.Module"),ga=o("). The line that sets the "),ts=l("code"),ya=o("config_class"),wa=o(` is not mandatory, unless
you want to register your model with the auto classes (see last section).`),Xs=d(),p(ne.$$.fragment),Zs=d(),B=l("p"),ba=o(`You can have your model return anything you want, but returning a dictionary like we did for
`),ss=l("code"),va=o("ResnetModelForImageClassification"),$a=o(`, with the loss included when labels are passed, will make your model directly
usable inside the `),tt=l("a"),ka=o("Trainer"),Ea=o(` class. Using another output format is fine as long as you are planning on using your own
training loop or another library for training.`),eo=d(),st=l("p"),ja=o("Now that we have our model class, let\u2019s create one:"),to=d(),p(Ae.$$.fragment),so=d(),T=l("p"),Ca=o("Again, you can use any of the methods of "),ot=l("a"),Pa=o("PreTrainedModel"),Aa=o(", like "),nt=l("a"),Ta=o("save_pretrained()"),Ma=o(` or
`),at=l("a"),Ra=o("push_to_hub()"),qa=o(`. We will use the second in the next section, and see how to push the model weights
with the code of our model. But first, let\u2019s load some pretrained weights inside our model.`),oo=d(),lt=l("p"),Ia=o(`In your own use case, you will probably be training your custom model on your own data. To go fast for this tutorial,
we will use the pretrained version of the resnet50d. Since our model is just a wrapper around it, it\u2019s going to be
easy to transfer those weights:`),no=d(),p(Te.$$.fragment),ao=d(),H=l("p"),Na=o("Now let\u2019s see how to make sure that when we do "),it=l("a"),xa=o("save_pretrained()"),Oa=o(" or "),rt=l("a"),Da=o("push_to_hub()"),Fa=o(`, the
code of the model is saved.`),lo=d(),J=l("h2"),ae=l("a"),os=l("span"),p(Me.$$.fragment),Ba=d(),ns=l("span"),Ha=o("Sending the code to the Hub"),io=d(),p(le.$$.fragment),ro=d(),$=l("p"),Sa=o("First, make sure your model is fully defined in a "),as=l("code"),Wa=o(".py"),La=o(` file. It can rely on relative imports to some other files as
long as all the files are in the same directory (we don\u2019t support submodules for this feature yet). For our example,
we\u2019ll define a `),ls=l("code"),Ya=o("modeling_resnet.py"),za=o(" file and a "),is=l("code"),Ga=o("configuration_resnet.py"),Ka=o(` file in a folder of the current working
directory named `),rs=l("code"),Ua=o("resnet_model"),Va=o(". The configuration file contains the code for "),fs=l("code"),Ja=o("ResnetConfig"),Qa=o(` and the modeling file
contains the code of `),ds=l("code"),Xa=o("ResnetModel"),Za=o(" and "),cs=l("code"),el=o("ResnetModelForImageClassification"),tl=o("."),fo=d(),p(Re.$$.fragment),co=d(),S=l("p"),sl=o("The "),hs=l("code"),ol=o("__init__.py"),nl=o(" can be empty, it\u2019s just there so that Python detects "),us=l("code"),al=o("resnet_model"),ll=o(" can be use as a module."),ho=d(),p(ie.$$.fragment),uo=d(),ft=l("p"),il=o("Note that you can re-use (or subclass) an existing configuration/model."),mo=d(),dt=l("p"),rl=o(`To share your model with the community, follow those steps: first import the ResNet model and config from the newly
created files:`),po=d(),p(qe.$$.fragment),_o=d(),re=l("p"),fl=o("Then you have to tell the library you want to copy the code files of those objects when using the "),ms=l("code"),dl=o("save_pretrained"),cl=o(`
method and properly register them with a given Auto class (especially for models), just run:`),go=d(),p(Ie.$$.fragment),yo=d(),fe=l("p"),hl=o(`Note that there is no need to specify an auto class for the configuration (there is only one auto class for them,
`),ct=l("a"),ul=o("AutoConfig"),ml=o(`) but it\u2019s different for models. Your custom model could be suitable for many different tasks, so you
have to specify which one of the auto classes is the correct one for your model.`),wo=d(),ht=l("p"),pl=o("Next, let\u2019s create the config and models as we did before:"),bo=d(),p(Ne.$$.fragment),vo=d(),ut=l("p"),_l=o("Now to send the model to the Hub, make sure you are logged in. Either run in your terminal:"),$o=d(),p(xe.$$.fragment),ko=d(),mt=l("p"),gl=o("or from a notebook:"),Eo=d(),p(Oe.$$.fragment),jo=d(),pt=l("p"),yl=o("You can then push to to your own namespace (or an organization you are a member of) like this:"),Co=d(),p(De.$$.fragment),Po=d(),M=l("p"),wl=o(`On top of the modeling weights and the configuration in json format, this also copied the modeling and
configuration `),ps=l("code"),bl=o(".py"),vl=o(" files in the folder "),_s=l("code"),$l=o("custom-resnet50d"),kl=o(` and uploaded the result to the Hub. You can check the result
in this `),Fe=l("a"),El=o("model repo"),jl=o("."),Ao=d(),de=l("p"),Cl=o("See the "),_t=l("a"),Pl=o("sharing tutorial"),Al=o(" for more information on the push to Hub method."),To=d(),Q=l("h2"),ce=l("a"),gs=l("span"),p(Be.$$.fragment),Tl=d(),ys=l("span"),Ml=o("Using a model with custom code"),Mo=d(),he=l("p"),Rl=o(`You can use any configuration, model or tokenizer with custom code files in its repository with the auto-classes and
the `),ws=l("code"),ql=o("from_pretrained"),Il=o(` method. The only thing is that you have to add an extra argument to make sure you have read the
online code and trust the author of that model, to avoid executing malicious code on your machine:`),Ro=d(),p(He.$$.fragment),qo=d(),ue=l("p"),Nl=o("It is also strongly encouraged to pass a commit hash as a "),bs=l("code"),xl=o("revision"),Ol=o(` to make sure the author of the models did not
update the code with some malicious new lines (unless you fully trust the authors of the models).`),Io=d(),p(Se.$$.fragment),No=d(),gt=l("p"),Dl=o(`Note that when browsing the commit history of the model repo on the Hub, there is a button to easily copy the commit
hash of any commit.`),xo=d(),X=l("h2"),me=l("a"),vs=l("span"),p(We.$$.fragment),Fl=d(),$s=l("span"),Bl=o("Registering a model with custom code to the auto classes"),Oo=d(),yt=l("p"),Hl=o(`If you are writing a library that extends \u{1F917} Transformers, you may want to extend the auto classes to include your own
model. This is different from pushing the code to the Hub in the sense that users will need to import your library to
get the custom models (contrarily to automatically downloading the model code from the Hub).`),Do=d(),W=l("p"),Sl=o("As long as your config has a "),ks=l("code"),Wl=o("model_type"),Ll=o(` attribute that is different from existing model types, and that your model
classes have the right `),Es=l("code"),Yl=o("config_class"),zl=o(" attributes, you can just add them to the auto classes likes this:"),Fo=d(),p(Le.$$.fragment),Bo=d(),R=l("p"),Gl=o("Note that the first argument used when registering your custom config to "),wt=l("a"),Kl=o("AutoConfig"),Ul=o(" needs to match the "),js=l("code"),Vl=o("model_type"),Jl=o(`
of your custom config, and the first argument used when registering your custom models to any auto model class needs
to match the `),Cs=l("code"),Ql=o("config_class"),Xl=o(" of those models."),this.h()},l(e){const a=Nr('[data-svelte="svelte-1phssyn"]',document.head);u=i(a,"META",{name:!0,content:!0}),a.forEach(s),k=c(e),m=i(e,"H1",{class:!0});var Ye=r(m);v=i(Ye,"A",{id:!0,class:!0,href:!0});var Ps=r(v);z=i(Ps,"SPAN",{});var As=r(z);_(P.$$.fragment,As),As.forEach(s),Ps.forEach(s),q=c(Ye),Z=i(Ye,"SPAN",{});var ei=r(Z);en=n(ei,"Sharing custom models"),ei.forEach(s),Ye.forEach(s),Ts=c(e),ze=i(e,"P",{});var ti=r(ze);tn=n(ti,`The \u{1F917} Transformers library is designed to be easily extensible. Every model is fully coded in a given subfolder
of the repository with no abstraction, so you can easily copy a modeling file and tweak it to your needs.`),ti.forEach(s),Ms=c(e),Ge=i(e,"P",{});var si=r(Ge);sn=n(si,`If you are writing a brand new model, it might be easier to start from scratch. In this tutorial, we will show you
how to write a custom model and its configuration so it can be used inside Transformers, and how you can share it
with the community (with the code it relies on) so that anyone can use it, even if it\u2019s not present in the \u{1F917}
Transformers library.`),si.forEach(s),Rs=c(e),I=i(e,"P",{});var bt=r(I);on=n(bt,`We will illustrate all of this on a ResNet model, by wrapping the ResNet class of the
`),we=i(bt,"A",{href:!0,rel:!0});var oi=r(we);nn=n(oi,"timm library"),oi.forEach(s),an=n(bt," into a "),Ke=i(bt,"A",{href:!0});var ni=r(Ke);ln=n(ni,"PreTrainedModel"),ni.forEach(s),rn=n(bt,"."),bt.forEach(s),qs=c(e),G=i(e,"H2",{class:!0});var So=r(G);ee=i(So,"A",{id:!0,class:!0,href:!0});var ai=r(ee);It=i(ai,"SPAN",{});var li=r(It);_(be.$$.fragment,li),li.forEach(s),ai.forEach(s),fn=c(So),Nt=i(So,"SPAN",{});var ii=r(Nt);dn=n(ii,"Writing a custom configuration"),ii.forEach(s),So.forEach(s),Is=c(e),te=i(e,"P",{});var Wo=r(te);cn=n(Wo,`Before we dive into the model, let\u2019s first write its configuration. The configuration of a model is an object that
will contain all the necessary information to build the model. As we will see in the next section, the model can only
take a `),xt=i(Wo,"CODE",{});var ri=r(xt);hn=n(ri,"config"),ri.forEach(s),un=n(Wo," to be initialized, so we really need that object to be as complete as possible."),Wo.forEach(s),Ns=c(e),Ue=i(e,"P",{});var fi=r(Ue);mn=n(fi,`In our example, we will take a couple of arguments of the ResNet class that we might want to tweak. Different
configurations will then give us the different types of ResNets that are possible. We then just store those arguments,
after checking the validity of a few of them.`),fi.forEach(s),xs=c(e),_(ve.$$.fragment,e),Os=c(e),Ve=i(e,"P",{});var di=r(Ve);pn=n(di,"The three important things to remember when writing you own configuration are the following:"),di.forEach(s),Ds=c(e),N=i(e,"UL",{});var vt=r(N);$e=i(vt,"LI",{});var Lo=r($e);_n=n(Lo,"you have to inherit from "),Ot=i(Lo,"CODE",{});var ci=r(Ot);gn=n(ci,"PretrainedConfig"),ci.forEach(s),yn=n(Lo,","),Lo.forEach(s),wn=c(vt),K=i(vt,"LI",{});var $t=r(K);bn=n($t,"the "),Dt=i($t,"CODE",{});var hi=r(Dt);vn=n(hi,"__init__"),hi.forEach(s),$n=n($t," of your "),Ft=i($t,"CODE",{});var ui=r(Ft);kn=n(ui,"PretrainedConfig"),ui.forEach(s),En=n($t," must accept any kwargs,"),$t.forEach(s),jn=c(vt),U=i(vt,"LI",{});var kt=r(U);Cn=n(kt,"those "),Bt=i(kt,"CODE",{});var mi=r(Bt);Pn=n(mi,"kwargs"),mi.forEach(s),An=n(kt," need to be passed to the superclass "),Ht=i(kt,"CODE",{});var pi=r(Ht);Tn=n(pi,"__init__"),pi.forEach(s),Mn=n(kt,"."),kt.forEach(s),vt.forEach(s),Fs=c(e),x=i(e,"P",{});var Et=r(x);Rn=n(Et,`The inheritance is to make sure you get all the functionality from the \u{1F917} Transformers library, while the two other
constraints come from the fact a `),St=i(Et,"CODE",{});var _i=r(St);qn=n(_i,"PretrainedConfig"),_i.forEach(s),In=n(Et,` has more fields than the ones you are setting. When reloading a
config with the `),Wt=i(Et,"CODE",{});var gi=r(Wt);Nn=n(gi,"from_pretrained"),gi.forEach(s),xn=n(Et,` method, those fields need to be accepted by your config and then sent to the
superclass.`),Et.forEach(s),Bs=c(e),O=i(e,"P",{});var jt=r(O);On=n(jt,"Defining a "),Lt=i(jt,"CODE",{});var yi=r(Lt);Dn=n(yi,"model_type"),yi.forEach(s),Fn=n(jt," for your configuration (here "),Yt=i(jt,"CODE",{});var wi=r(Yt);Bn=n(wi,'model_type="resnet"'),wi.forEach(s),Hn=n(jt,`) is not mandatory, unless you want to
register your model with the auto classes (see last section).`),jt.forEach(s),Hs=c(e),Je=i(e,"P",{});var bi=r(Je);Sn=n(bi,`With this done, you can easily create and save your configuration like you would do with any other model config of the
library. Here is how we can create a resnet50d config and save it:`),bi.forEach(s),Ss=c(e),_(ke.$$.fragment,e),Ws=c(e),A=i(e,"P",{});var pe=r(A);Wn=n(pe,"This will save a file named "),zt=i(pe,"CODE",{});var vi=r(zt);Ln=n(vi,"config.json"),vi.forEach(s),Yn=n(pe," inside the folder "),Gt=i(pe,"CODE",{});var $i=r(Gt);zn=n($i,"custom-resnet"),$i.forEach(s),Gn=n(pe,`. You can then reload your config with the
`),Kt=i(pe,"CODE",{});var ki=r(Kt);Kn=n(ki,"from_pretrained"),ki.forEach(s),Un=n(pe," method:"),pe.forEach(s),Ls=c(e),_(Ee.$$.fragment,e),Ys=c(e),D=i(e,"P",{});var Ct=r(D);Vn=n(Ct,"You can also use any other method of the "),Qe=i(Ct,"A",{href:!0});var Ei=r(Qe);Jn=n(Ei,"PretrainedConfig"),Ei.forEach(s),Qn=n(Ct," class, like "),Xe=i(Ct,"A",{href:!0});var ji=r(Xe);Xn=n(ji,"push_to_hub()"),ji.forEach(s),Zn=n(Ct,` to
directly upload your config to the Hub.`),Ct.forEach(s),zs=c(e),V=i(e,"H2",{class:!0});var Yo=r(V);se=i(Yo,"A",{id:!0,class:!0,href:!0});var Ci=r(se);Ut=i(Ci,"SPAN",{});var Pi=r(Ut);_(je.$$.fragment,Pi),Pi.forEach(s),Ci.forEach(s),ea=c(Yo),Vt=i(Yo,"SPAN",{});var Ai=r(Vt);ta=n(Ai,"Writing a custom model"),Ai.forEach(s),Yo.forEach(s),Gs=c(e),F=i(e,"P",{});var Pt=r(F);sa=n(Pt,`Now that we have our ResNet configuration, we can go on writing the model. We will actually write two: one that
extracts the hidden features from a batch of images (like `),Ze=i(Pt,"A",{href:!0});var Ti=r(Ze);oa=n(Ti,"BertModel"),Ti.forEach(s),na=n(Pt,`) and one that is suitable for image
classification (like `),Jt=i(Pt,"CODE",{});var Mi=r(Jt);aa=n(Mi,"BertModelForSequenceClassification"),Mi.forEach(s),la=n(Pt,")."),Pt.forEach(s),Ks=c(e),oe=i(e,"P",{});var zo=r(oe);ia=n(zo,`As we mentioned before, we\u2019ll only write a loose wrapper of the model to keep it simple for this example. The only
thing we need to do before writing this class is a map between the block types and actual block classes. Then the
model is defined from the configuration by passing everything to the `),Qt=i(zo,"CODE",{});var Ri=r(Qt);ra=n(Ri,"ResNet"),Ri.forEach(s),fa=n(zo," class:"),zo.forEach(s),Us=c(e),_(Ce.$$.fragment,e),Vs=c(e),et=i(e,"P",{});var qi=r(et);da=n(qi,"For the model that will classify images, we just change the forward method:"),qi.forEach(s),Js=c(e),_(Pe.$$.fragment,e),Qs=c(e),C=i(e,"P",{});var L=r(C);ca=n(L,"In both cases, notice how we inherit from "),Xt=i(L,"CODE",{});var Ii=r(Xt);ha=n(Ii,"PreTrainedModel"),Ii.forEach(s),ua=n(L," and call the superclass initialization with the "),Zt=i(L,"CODE",{});var Ni=r(Zt);ma=n(Ni,"config"),Ni.forEach(s),pa=n(L,`
(a bit like when you write a regular `),es=i(L,"CODE",{});var xi=r(es);_a=n(xi,"torch.nn.Module"),xi.forEach(s),ga=n(L,"). The line that sets the "),ts=i(L,"CODE",{});var Oi=r(ts);ya=n(Oi,"config_class"),Oi.forEach(s),wa=n(L,` is not mandatory, unless
you want to register your model with the auto classes (see last section).`),L.forEach(s),Xs=c(e),_(ne.$$.fragment,e),Zs=c(e),B=i(e,"P",{});var At=r(B);ba=n(At,`You can have your model return anything you want, but returning a dictionary like we did for
`),ss=i(At,"CODE",{});var Di=r(ss);va=n(Di,"ResnetModelForImageClassification"),Di.forEach(s),$a=n(At,`, with the loss included when labels are passed, will make your model directly
usable inside the `),tt=i(At,"A",{href:!0});var Fi=r(tt);ka=n(Fi,"Trainer"),Fi.forEach(s),Ea=n(At,` class. Using another output format is fine as long as you are planning on using your own
training loop or another library for training.`),At.forEach(s),eo=c(e),st=i(e,"P",{});var Bi=r(st);ja=n(Bi,"Now that we have our model class, let\u2019s create one:"),Bi.forEach(s),to=c(e),_(Ae.$$.fragment,e),so=c(e),T=i(e,"P",{});var _e=r(T);Ca=n(_e,"Again, you can use any of the methods of "),ot=i(_e,"A",{href:!0});var Hi=r(ot);Pa=n(Hi,"PreTrainedModel"),Hi.forEach(s),Aa=n(_e,", like "),nt=i(_e,"A",{href:!0});var Si=r(nt);Ta=n(Si,"save_pretrained()"),Si.forEach(s),Ma=n(_e,` or
`),at=i(_e,"A",{href:!0});var Wi=r(at);Ra=n(Wi,"push_to_hub()"),Wi.forEach(s),qa=n(_e,`. We will use the second in the next section, and see how to push the model weights
with the code of our model. But first, let\u2019s load some pretrained weights inside our model.`),_e.forEach(s),oo=c(e),lt=i(e,"P",{});var Li=r(lt);Ia=n(Li,`In your own use case, you will probably be training your custom model on your own data. To go fast for this tutorial,
we will use the pretrained version of the resnet50d. Since our model is just a wrapper around it, it\u2019s going to be
easy to transfer those weights:`),Li.forEach(s),no=c(e),_(Te.$$.fragment,e),ao=c(e),H=i(e,"P",{});var Tt=r(H);Na=n(Tt,"Now let\u2019s see how to make sure that when we do "),it=i(Tt,"A",{href:!0});var Yi=r(it);xa=n(Yi,"save_pretrained()"),Yi.forEach(s),Oa=n(Tt," or "),rt=i(Tt,"A",{href:!0});var zi=r(rt);Da=n(zi,"push_to_hub()"),zi.forEach(s),Fa=n(Tt,`, the
code of the model is saved.`),Tt.forEach(s),lo=c(e),J=i(e,"H2",{class:!0});var Go=r(J);ae=i(Go,"A",{id:!0,class:!0,href:!0});var Gi=r(ae);os=i(Gi,"SPAN",{});var Ki=r(os);_(Me.$$.fragment,Ki),Ki.forEach(s),Gi.forEach(s),Ba=c(Go),ns=i(Go,"SPAN",{});var Ui=r(ns);Ha=n(Ui,"Sending the code to the Hub"),Ui.forEach(s),Go.forEach(s),io=c(e),_(le.$$.fragment,e),ro=c(e),$=i(e,"P",{});var j=r($);Sa=n(j,"First, make sure your model is fully defined in a "),as=i(j,"CODE",{});var Vi=r(as);Wa=n(Vi,".py"),Vi.forEach(s),La=n(j,` file. It can rely on relative imports to some other files as
long as all the files are in the same directory (we don\u2019t support submodules for this feature yet). For our example,
we\u2019ll define a `),ls=i(j,"CODE",{});var Ji=r(ls);Ya=n(Ji,"modeling_resnet.py"),Ji.forEach(s),za=n(j," file and a "),is=i(j,"CODE",{});var Qi=r(is);Ga=n(Qi,"configuration_resnet.py"),Qi.forEach(s),Ka=n(j,` file in a folder of the current working
directory named `),rs=i(j,"CODE",{});var Xi=r(rs);Ua=n(Xi,"resnet_model"),Xi.forEach(s),Va=n(j,". The configuration file contains the code for "),fs=i(j,"CODE",{});var Zi=r(fs);Ja=n(Zi,"ResnetConfig"),Zi.forEach(s),Qa=n(j,` and the modeling file
contains the code of `),ds=i(j,"CODE",{});var er=r(ds);Xa=n(er,"ResnetModel"),er.forEach(s),Za=n(j," and "),cs=i(j,"CODE",{});var tr=r(cs);el=n(tr,"ResnetModelForImageClassification"),tr.forEach(s),tl=n(j,"."),j.forEach(s),fo=c(e),_(Re.$$.fragment,e),co=c(e),S=i(e,"P",{});var Mt=r(S);sl=n(Mt,"The "),hs=i(Mt,"CODE",{});var sr=r(hs);ol=n(sr,"__init__.py"),sr.forEach(s),nl=n(Mt," can be empty, it\u2019s just there so that Python detects "),us=i(Mt,"CODE",{});var or=r(us);al=n(or,"resnet_model"),or.forEach(s),ll=n(Mt," can be use as a module."),Mt.forEach(s),ho=c(e),_(ie.$$.fragment,e),uo=c(e),ft=i(e,"P",{});var nr=r(ft);il=n(nr,"Note that you can re-use (or subclass) an existing configuration/model."),nr.forEach(s),mo=c(e),dt=i(e,"P",{});var ar=r(dt);rl=n(ar,`To share your model with the community, follow those steps: first import the ResNet model and config from the newly
created files:`),ar.forEach(s),po=c(e),_(qe.$$.fragment,e),_o=c(e),re=i(e,"P",{});var Ko=r(re);fl=n(Ko,"Then you have to tell the library you want to copy the code files of those objects when using the "),ms=i(Ko,"CODE",{});var lr=r(ms);dl=n(lr,"save_pretrained"),lr.forEach(s),cl=n(Ko,`
method and properly register them with a given Auto class (especially for models), just run:`),Ko.forEach(s),go=c(e),_(Ie.$$.fragment,e),yo=c(e),fe=i(e,"P",{});var Uo=r(fe);hl=n(Uo,`Note that there is no need to specify an auto class for the configuration (there is only one auto class for them,
`),ct=i(Uo,"A",{href:!0});var ir=r(ct);ul=n(ir,"AutoConfig"),ir.forEach(s),ml=n(Uo,`) but it\u2019s different for models. Your custom model could be suitable for many different tasks, so you
have to specify which one of the auto classes is the correct one for your model.`),Uo.forEach(s),wo=c(e),ht=i(e,"P",{});var rr=r(ht);pl=n(rr,"Next, let\u2019s create the config and models as we did before:"),rr.forEach(s),bo=c(e),_(Ne.$$.fragment,e),vo=c(e),ut=i(e,"P",{});var fr=r(ut);_l=n(fr,"Now to send the model to the Hub, make sure you are logged in. Either run in your terminal:"),fr.forEach(s),$o=c(e),_(xe.$$.fragment,e),ko=c(e),mt=i(e,"P",{});var dr=r(mt);gl=n(dr,"or from a notebook:"),dr.forEach(s),Eo=c(e),_(Oe.$$.fragment,e),jo=c(e),pt=i(e,"P",{});var cr=r(pt);yl=n(cr,"You can then push to to your own namespace (or an organization you are a member of) like this:"),cr.forEach(s),Co=c(e),_(De.$$.fragment,e),Po=c(e),M=i(e,"P",{});var ge=r(M);wl=n(ge,`On top of the modeling weights and the configuration in json format, this also copied the modeling and
configuration `),ps=i(ge,"CODE",{});var hr=r(ps);bl=n(hr,".py"),hr.forEach(s),vl=n(ge," files in the folder "),_s=i(ge,"CODE",{});var ur=r(_s);$l=n(ur,"custom-resnet50d"),ur.forEach(s),kl=n(ge,` and uploaded the result to the Hub. You can check the result
in this `),Fe=i(ge,"A",{href:!0,rel:!0});var mr=r(Fe);El=n(mr,"model repo"),mr.forEach(s),jl=n(ge,"."),ge.forEach(s),Ao=c(e),de=i(e,"P",{});var Vo=r(de);Cl=n(Vo,"See the "),_t=i(Vo,"A",{href:!0});var pr=r(_t);Pl=n(pr,"sharing tutorial"),pr.forEach(s),Al=n(Vo," for more information on the push to Hub method."),Vo.forEach(s),To=c(e),Q=i(e,"H2",{class:!0});var Jo=r(Q);ce=i(Jo,"A",{id:!0,class:!0,href:!0});var _r=r(ce);gs=i(_r,"SPAN",{});var gr=r(gs);_(Be.$$.fragment,gr),gr.forEach(s),_r.forEach(s),Tl=c(Jo),ys=i(Jo,"SPAN",{});var yr=r(ys);Ml=n(yr,"Using a model with custom code"),yr.forEach(s),Jo.forEach(s),Mo=c(e),he=i(e,"P",{});var Qo=r(he);Rl=n(Qo,`You can use any configuration, model or tokenizer with custom code files in its repository with the auto-classes and
the `),ws=i(Qo,"CODE",{});var wr=r(ws);ql=n(wr,"from_pretrained"),wr.forEach(s),Il=n(Qo,` method. The only thing is that you have to add an extra argument to make sure you have read the
online code and trust the author of that model, to avoid executing malicious code on your machine:`),Qo.forEach(s),Ro=c(e),_(He.$$.fragment,e),qo=c(e),ue=i(e,"P",{});var Xo=r(ue);Nl=n(Xo,"It is also strongly encouraged to pass a commit hash as a "),bs=i(Xo,"CODE",{});var br=r(bs);xl=n(br,"revision"),br.forEach(s),Ol=n(Xo,` to make sure the author of the models did not
update the code with some malicious new lines (unless you fully trust the authors of the models).`),Xo.forEach(s),Io=c(e),_(Se.$$.fragment,e),No=c(e),gt=i(e,"P",{});var vr=r(gt);Dl=n(vr,`Note that when browsing the commit history of the model repo on the Hub, there is a button to easily copy the commit
hash of any commit.`),vr.forEach(s),xo=c(e),X=i(e,"H2",{class:!0});var Zo=r(X);me=i(Zo,"A",{id:!0,class:!0,href:!0});var $r=r(me);vs=i($r,"SPAN",{});var kr=r(vs);_(We.$$.fragment,kr),kr.forEach(s),$r.forEach(s),Fl=c(Zo),$s=i(Zo,"SPAN",{});var Er=r($s);Bl=n(Er,"Registering a model with custom code to the auto classes"),Er.forEach(s),Zo.forEach(s),Oo=c(e),yt=i(e,"P",{});var jr=r(yt);Hl=n(jr,`If you are writing a library that extends \u{1F917} Transformers, you may want to extend the auto classes to include your own
model. This is different from pushing the code to the Hub in the sense that users will need to import your library to
get the custom models (contrarily to automatically downloading the model code from the Hub).`),jr.forEach(s),Do=c(e),W=i(e,"P",{});var Rt=r(W);Sl=n(Rt,"As long as your config has a "),ks=i(Rt,"CODE",{});var Cr=r(ks);Wl=n(Cr,"model_type"),Cr.forEach(s),Ll=n(Rt,` attribute that is different from existing model types, and that your model
classes have the right `),Es=i(Rt,"CODE",{});var Pr=r(Es);Yl=n(Pr,"config_class"),Pr.forEach(s),zl=n(Rt," attributes, you can just add them to the auto classes likes this:"),Rt.forEach(s),Fo=c(e),_(Le.$$.fragment,e),Bo=c(e),R=i(e,"P",{});var ye=r(R);Gl=n(ye,"Note that the first argument used when registering your custom config to "),wt=i(ye,"A",{href:!0});var Ar=r(wt);Kl=n(Ar,"AutoConfig"),Ar.forEach(s),Ul=n(ye," needs to match the "),js=i(ye,"CODE",{});var Tr=r(js);Vl=n(Tr,"model_type"),Tr.forEach(s),Jl=n(ye,`
of your custom config, and the first argument used when registering your custom models to any auto model class needs
to match the `),Cs=i(ye,"CODE",{});var Mr=r(Cs);Ql=n(Mr,"config_class"),Mr.forEach(s),Xl=n(ye," of those models."),ye.forEach(s),this.h()},h(){h(u,"name","hf:doc:metadata"),h(u,"content",JSON.stringify(Br)),h(v,"id","sharing-custom-models"),h(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(v,"href","#sharing-custom-models"),h(m,"class","relative group"),h(we,"href","https://github.com/rwightman/pytorch-image-models/tree/master/timm"),h(we,"rel","nofollow"),h(Ke,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel"),h(ee,"id","writing-a-custom-configuration"),h(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ee,"href","#writing-a-custom-configuration"),h(G,"class","relative group"),h(Qe,"href","/docs/transformers/doc-build-test/en/main_classes/configuration#transformers.PretrainedConfig"),h(Xe,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.file_utils.PushToHubMixin.push_to_hub"),h(se,"id","writing-a-custom-model"),h(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(se,"href","#writing-a-custom-model"),h(V,"class","relative group"),h(Ze,"href","/docs/transformers/doc-build-test/en/model_doc/bert#transformers.BertModel"),h(tt,"href","/docs/transformers/doc-build-test/en/main_classes/trainer#transformers.Trainer"),h(ot,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel"),h(nt,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),h(at,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.file_utils.PushToHubMixin.push_to_hub"),h(it,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),h(rt,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.file_utils.PushToHubMixin.push_to_hub"),h(ae,"id","sending-the-code-to-the-hub"),h(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ae,"href","#sending-the-code-to-the-hub"),h(J,"class","relative group"),h(ct,"href","/docs/transformers/doc-build-test/en/model_doc/auto#transformers.AutoConfig"),h(Fe,"href","https://huggingface.co/sgugger/custom-resnet50d"),h(Fe,"rel","nofollow"),h(_t,"href","model_sharing"),h(ce,"id","using-a-model-with-custom-code"),h(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ce,"href","#using-a-model-with-custom-code"),h(Q,"class","relative group"),h(me,"id","registering-a-model-with-custom-code-to-the-auto-classes"),h(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(me,"href","#registering-a-model-with-custom-code-to-the-auto-classes"),h(X,"class","relative group"),h(wt,"href","/docs/transformers/doc-build-test/en/model_doc/auto#transformers.AutoConfig")},m(e,a){t(document.head,u),f(e,k,a),f(e,m,a),t(m,v),t(v,z),g(P,z,null),t(m,q),t(m,Z),t(Z,en),f(e,Ts,a),f(e,ze,a),t(ze,tn),f(e,Ms,a),f(e,Ge,a),t(Ge,sn),f(e,Rs,a),f(e,I,a),t(I,on),t(I,we),t(we,nn),t(I,an),t(I,Ke),t(Ke,ln),t(I,rn),f(e,qs,a),f(e,G,a),t(G,ee),t(ee,It),g(be,It,null),t(G,fn),t(G,Nt),t(Nt,dn),f(e,Is,a),f(e,te,a),t(te,cn),t(te,xt),t(xt,hn),t(te,un),f(e,Ns,a),f(e,Ue,a),t(Ue,mn),f(e,xs,a),g(ve,e,a),f(e,Os,a),f(e,Ve,a),t(Ve,pn),f(e,Ds,a),f(e,N,a),t(N,$e),t($e,_n),t($e,Ot),t(Ot,gn),t($e,yn),t(N,wn),t(N,K),t(K,bn),t(K,Dt),t(Dt,vn),t(K,$n),t(K,Ft),t(Ft,kn),t(K,En),t(N,jn),t(N,U),t(U,Cn),t(U,Bt),t(Bt,Pn),t(U,An),t(U,Ht),t(Ht,Tn),t(U,Mn),f(e,Fs,a),f(e,x,a),t(x,Rn),t(x,St),t(St,qn),t(x,In),t(x,Wt),t(Wt,Nn),t(x,xn),f(e,Bs,a),f(e,O,a),t(O,On),t(O,Lt),t(Lt,Dn),t(O,Fn),t(O,Yt),t(Yt,Bn),t(O,Hn),f(e,Hs,a),f(e,Je,a),t(Je,Sn),f(e,Ss,a),g(ke,e,a),f(e,Ws,a),f(e,A,a),t(A,Wn),t(A,zt),t(zt,Ln),t(A,Yn),t(A,Gt),t(Gt,zn),t(A,Gn),t(A,Kt),t(Kt,Kn),t(A,Un),f(e,Ls,a),g(Ee,e,a),f(e,Ys,a),f(e,D,a),t(D,Vn),t(D,Qe),t(Qe,Jn),t(D,Qn),t(D,Xe),t(Xe,Xn),t(D,Zn),f(e,zs,a),f(e,V,a),t(V,se),t(se,Ut),g(je,Ut,null),t(V,ea),t(V,Vt),t(Vt,ta),f(e,Gs,a),f(e,F,a),t(F,sa),t(F,Ze),t(Ze,oa),t(F,na),t(F,Jt),t(Jt,aa),t(F,la),f(e,Ks,a),f(e,oe,a),t(oe,ia),t(oe,Qt),t(Qt,ra),t(oe,fa),f(e,Us,a),g(Ce,e,a),f(e,Vs,a),f(e,et,a),t(et,da),f(e,Js,a),g(Pe,e,a),f(e,Qs,a),f(e,C,a),t(C,ca),t(C,Xt),t(Xt,ha),t(C,ua),t(C,Zt),t(Zt,ma),t(C,pa),t(C,es),t(es,_a),t(C,ga),t(C,ts),t(ts,ya),t(C,wa),f(e,Xs,a),g(ne,e,a),f(e,Zs,a),f(e,B,a),t(B,ba),t(B,ss),t(ss,va),t(B,$a),t(B,tt),t(tt,ka),t(B,Ea),f(e,eo,a),f(e,st,a),t(st,ja),f(e,to,a),g(Ae,e,a),f(e,so,a),f(e,T,a),t(T,Ca),t(T,ot),t(ot,Pa),t(T,Aa),t(T,nt),t(nt,Ta),t(T,Ma),t(T,at),t(at,Ra),t(T,qa),f(e,oo,a),f(e,lt,a),t(lt,Ia),f(e,no,a),g(Te,e,a),f(e,ao,a),f(e,H,a),t(H,Na),t(H,it),t(it,xa),t(H,Oa),t(H,rt),t(rt,Da),t(H,Fa),f(e,lo,a),f(e,J,a),t(J,ae),t(ae,os),g(Me,os,null),t(J,Ba),t(J,ns),t(ns,Ha),f(e,io,a),g(le,e,a),f(e,ro,a),f(e,$,a),t($,Sa),t($,as),t(as,Wa),t($,La),t($,ls),t(ls,Ya),t($,za),t($,is),t(is,Ga),t($,Ka),t($,rs),t(rs,Ua),t($,Va),t($,fs),t(fs,Ja),t($,Qa),t($,ds),t(ds,Xa),t($,Za),t($,cs),t(cs,el),t($,tl),f(e,fo,a),g(Re,e,a),f(e,co,a),f(e,S,a),t(S,sl),t(S,hs),t(hs,ol),t(S,nl),t(S,us),t(us,al),t(S,ll),f(e,ho,a),g(ie,e,a),f(e,uo,a),f(e,ft,a),t(ft,il),f(e,mo,a),f(e,dt,a),t(dt,rl),f(e,po,a),g(qe,e,a),f(e,_o,a),f(e,re,a),t(re,fl),t(re,ms),t(ms,dl),t(re,cl),f(e,go,a),g(Ie,e,a),f(e,yo,a),f(e,fe,a),t(fe,hl),t(fe,ct),t(ct,ul),t(fe,ml),f(e,wo,a),f(e,ht,a),t(ht,pl),f(e,bo,a),g(Ne,e,a),f(e,vo,a),f(e,ut,a),t(ut,_l),f(e,$o,a),g(xe,e,a),f(e,ko,a),f(e,mt,a),t(mt,gl),f(e,Eo,a),g(Oe,e,a),f(e,jo,a),f(e,pt,a),t(pt,yl),f(e,Co,a),g(De,e,a),f(e,Po,a),f(e,M,a),t(M,wl),t(M,ps),t(ps,bl),t(M,vl),t(M,_s),t(_s,$l),t(M,kl),t(M,Fe),t(Fe,El),t(M,jl),f(e,Ao,a),f(e,de,a),t(de,Cl),t(de,_t),t(_t,Pl),t(de,Al),f(e,To,a),f(e,Q,a),t(Q,ce),t(ce,gs),g(Be,gs,null),t(Q,Tl),t(Q,ys),t(ys,Ml),f(e,Mo,a),f(e,he,a),t(he,Rl),t(he,ws),t(ws,ql),t(he,Il),f(e,Ro,a),g(He,e,a),f(e,qo,a),f(e,ue,a),t(ue,Nl),t(ue,bs),t(bs,xl),t(ue,Ol),f(e,Io,a),g(Se,e,a),f(e,No,a),f(e,gt,a),t(gt,Dl),f(e,xo,a),f(e,X,a),t(X,me),t(me,vs),g(We,vs,null),t(X,Fl),t(X,$s),t($s,Bl),f(e,Oo,a),f(e,yt,a),t(yt,Hl),f(e,Do,a),f(e,W,a),t(W,Sl),t(W,ks),t(ks,Wl),t(W,Ll),t(W,Es),t(Es,Yl),t(W,zl),f(e,Fo,a),g(Le,e,a),f(e,Bo,a),f(e,R,a),t(R,Gl),t(R,wt),t(wt,Kl),t(R,Ul),t(R,js),t(js,Vl),t(R,Jl),t(R,Cs),t(Cs,Ql),t(R,Xl),Ho=!0},p(e,[a]){const Ye={};a&2&&(Ye.$$scope={dirty:a,ctx:e}),ne.$set(Ye);const Ps={};a&2&&(Ps.$$scope={dirty:a,ctx:e}),le.$set(Ps);const As={};a&2&&(As.$$scope={dirty:a,ctx:e}),ie.$set(As)},i(e){Ho||(y(P.$$.fragment,e),y(be.$$.fragment,e),y(ve.$$.fragment,e),y(ke.$$.fragment,e),y(Ee.$$.fragment,e),y(je.$$.fragment,e),y(Ce.$$.fragment,e),y(Pe.$$.fragment,e),y(ne.$$.fragment,e),y(Ae.$$.fragment,e),y(Te.$$.fragment,e),y(Me.$$.fragment,e),y(le.$$.fragment,e),y(Re.$$.fragment,e),y(ie.$$.fragment,e),y(qe.$$.fragment,e),y(Ie.$$.fragment,e),y(Ne.$$.fragment,e),y(xe.$$.fragment,e),y(Oe.$$.fragment,e),y(De.$$.fragment,e),y(Be.$$.fragment,e),y(He.$$.fragment,e),y(Se.$$.fragment,e),y(We.$$.fragment,e),y(Le.$$.fragment,e),Ho=!0)},o(e){w(P.$$.fragment,e),w(be.$$.fragment,e),w(ve.$$.fragment,e),w(ke.$$.fragment,e),w(Ee.$$.fragment,e),w(je.$$.fragment,e),w(Ce.$$.fragment,e),w(Pe.$$.fragment,e),w(ne.$$.fragment,e),w(Ae.$$.fragment,e),w(Te.$$.fragment,e),w(Me.$$.fragment,e),w(le.$$.fragment,e),w(Re.$$.fragment,e),w(ie.$$.fragment,e),w(qe.$$.fragment,e),w(Ie.$$.fragment,e),w(Ne.$$.fragment,e),w(xe.$$.fragment,e),w(Oe.$$.fragment,e),w(De.$$.fragment,e),w(Be.$$.fragment,e),w(He.$$.fragment,e),w(Se.$$.fragment,e),w(We.$$.fragment,e),w(Le.$$.fragment,e),Ho=!1},d(e){s(u),e&&s(k),e&&s(m),b(P),e&&s(Ts),e&&s(ze),e&&s(Ms),e&&s(Ge),e&&s(Rs),e&&s(I),e&&s(qs),e&&s(G),b(be),e&&s(Is),e&&s(te),e&&s(Ns),e&&s(Ue),e&&s(xs),b(ve,e),e&&s(Os),e&&s(Ve),e&&s(Ds),e&&s(N),e&&s(Fs),e&&s(x),e&&s(Bs),e&&s(O),e&&s(Hs),e&&s(Je),e&&s(Ss),b(ke,e),e&&s(Ws),e&&s(A),e&&s(Ls),b(Ee,e),e&&s(Ys),e&&s(D),e&&s(zs),e&&s(V),b(je),e&&s(Gs),e&&s(F),e&&s(Ks),e&&s(oe),e&&s(Us),b(Ce,e),e&&s(Vs),e&&s(et),e&&s(Js),b(Pe,e),e&&s(Qs),e&&s(C),e&&s(Xs),b(ne,e),e&&s(Zs),e&&s(B),e&&s(eo),e&&s(st),e&&s(to),b(Ae,e),e&&s(so),e&&s(T),e&&s(oo),e&&s(lt),e&&s(no),b(Te,e),e&&s(ao),e&&s(H),e&&s(lo),e&&s(J),b(Me),e&&s(io),b(le,e),e&&s(ro),e&&s($),e&&s(fo),b(Re,e),e&&s(co),e&&s(S),e&&s(ho),b(ie,e),e&&s(uo),e&&s(ft),e&&s(mo),e&&s(dt),e&&s(po),b(qe,e),e&&s(_o),e&&s(re),e&&s(go),b(Ie,e),e&&s(yo),e&&s(fe),e&&s(wo),e&&s(ht),e&&s(bo),b(Ne,e),e&&s(vo),e&&s(ut),e&&s($o),b(xe,e),e&&s(ko),e&&s(mt),e&&s(Eo),b(Oe,e),e&&s(jo),e&&s(pt),e&&s(Co),b(De,e),e&&s(Po),e&&s(M),e&&s(Ao),e&&s(de),e&&s(To),e&&s(Q),b(Be),e&&s(Mo),e&&s(he),e&&s(Ro),b(He,e),e&&s(qo),e&&s(ue),e&&s(Io),b(Se,e),e&&s(No),e&&s(gt),e&&s(xo),e&&s(X),b(We),e&&s(Oo),e&&s(yt),e&&s(Do),e&&s(W),e&&s(Fo),b(Le,e),e&&s(Bo),e&&s(R)}}}const Br={local:"sharing-custom-models",sections:[{local:"writing-a-custom-configuration",title:"Writing a custom configuration"},{local:"writing-a-custom-model",title:"Writing a custom model"},{local:"sending-the-code-to-the-hub",title:"Sending the code to the Hub"},{local:"using-a-model-with-custom-code",title:"Using a model with custom code"},{local:"registering-a-model-with-custom-code-to-the-auto-classes",title:"Registering a model with custom code to the auto classes"}],title:"Sharing custom models"};function Hr(Y,u,k){let{fw:m}=u;return Y.$$set=v=>{"fw"in v&&k(0,m=v.fw)},[m]}class Gr extends Rr{constructor(u){super();qr(this,u,Hr,Fr,Ir,{fw:0})}}export{Gr as default,Br as metadata};
