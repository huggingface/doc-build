import{S as Hi,i as Bi,s as Si,e as l,k as c,w as p,t as o,M as Wi,c as r,d as s,m as d,a as i,x as _,h as n,b as h,F as t,g as f,y as g,q as y,o as w,B as b}from"../chunks/vendor-4833417e.js";import{T as ar}from"../chunks/Tip-fffd6df1.js";import{I as Nt}from"../chunks/IconCopyLink-4b81c553.js";import{C as E}from"../chunks/CodeBlock-6a3d1b46.js";import"../chunks/CopyButton-dacfbfaf.js";function Li(z){let u,k;return{c(){u=l("p"),k=o("If your model is very similar to a model inside the library, you can re-use the same configuration as this model.")},l(m){u=r(m,"P",{});var v=i(u);k=n(v,"If your model is very similar to a model inside the library, you can re-use the same configuration as this model."),v.forEach(s)},m(m,v){f(m,u,v),t(u,k)},d(m){m&&s(u)}}}function Yi(z){let u,k;return{c(){u=l("p"),k=o("This API is experimental and may have some slight breaking changes in the next releases.")},l(m){u=r(m,"P",{});var v=i(u);k=n(v,"This API is experimental and may have some slight breaking changes in the next releases."),v.forEach(s)},m(m,v){f(m,u,v),t(u,k)},d(m){m&&s(u)}}}function zi(z){let u,k,m,v,G;return{c(){u=l("p"),k=o(`If copying a modeling files from the library, you will need to replace all the relative imports at the top of the file
to import from the `),m=l("code"),v=o("transformers"),G=o(" package.")},l(P){u=r(P,"P",{});var I=i(u);k=n(I,`If copying a modeling files from the library, you will need to replace all the relative imports at the top of the file
to import from the `),m=r(I,"CODE",{});var ee=i(m);v=n(ee,"transformers"),ee.forEach(s),G=n(I," package."),I.forEach(s)},m(P,I){f(P,u,I),t(u,k),t(u,m),t(m,v),t(u,G)},d(P){P&&s(u)}}}function Gi(z){let u,k,m,v,G,P,I,ee,sn,qs,Ke,on,Is,Ue,nn,Ns,N,an,be,ln,rn,Ve,fn,cn,xs,K,te,xt,ve,dn,Ot,hn,Os,se,un,Dt,mn,pn,Ds,Je,_n,Fs,$e,Hs,Qe,gn,Bs,x,ke,yn,Ft,wn,bn,vn,U,$n,Ht,kn,En,Bt,jn,Cn,Pn,V,An,St,Tn,Mn,Wt,Rn,qn,Ss,O,In,Lt,Nn,xn,Yt,On,Dn,Ws,D,Fn,zt,Hn,Bn,Gt,Sn,Wn,Ls,Xe,Ln,Ys,Ee,zs,A,Yn,Kt,zn,Gn,Ut,Kn,Un,Vt,Vn,Jn,Gs,je,Ks,F,Qn,Ze,Xn,Zn,et,ea,ta,Us,J,oe,Jt,Ce,sa,Qt,oa,Vs,H,na,tt,aa,la,Xt,ra,ia,Js,ne,fa,Zt,ca,da,Qs,Pe,Xs,st,ha,Zs,Ae,eo,C,ua,es,ma,pa,ts,_a,ga,ss,ya,wa,os,ba,va,to,ae,so,B,$a,ns,ka,Ea,ot,ja,Ca,oo,nt,Pa,no,Te,ao,T,Aa,at,Ta,Ma,lt,Ra,qa,rt,Ia,Na,lo,it,xa,ro,Me,io,S,Oa,ft,Da,Fa,ct,Ha,Ba,fo,Q,le,as,Re,Sa,ls,Wa,co,re,ho,$,La,rs,Ya,za,is,Ga,Ka,fs,Ua,Va,cs,Ja,Qa,ds,Xa,Za,hs,el,tl,us,sl,ol,uo,qe,mo,W,nl,ms,al,ll,ps,rl,il,po,ie,_o,dt,fl,go,ht,cl,yo,Ie,wo,fe,dl,_s,hl,ul,bo,Ne,vo,ce,ml,ut,pl,_l,$o,mt,gl,ko,xe,Eo,pt,yl,jo,Oe,Co,_t,wl,Po,De,Ao,gt,bl,To,Fe,Mo,M,vl,gs,$l,kl,ys,El,jl,He,Cl,Pl,Ro,de,Al,yt,Tl,Ml,qo,X,he,ws,Be,Rl,bs,ql,Io,R,Il,vs,Nl,xl,Se,Ol,Dl,$s,Fl,Hl,No,We,xo,ue,Bl,ks,Sl,Wl,Oo,Le,Do,wt,Ll,Fo,Z,me,Es,Ye,Yl,js,zl,Ho,bt,Gl,Bo,L,Kl,Cs,Ul,Vl,Ps,Jl,Ql,So,ze,Wo,q,Xl,vt,Zl,er,As,tr,sr,Ts,or,nr,Lo;return P=new Nt({}),ve=new Nt({}),$e=new E({props:{codee:`from transformers import PretrainedConfig
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
        <span class="hljs-built_in">super</span>().__init__(**kwargs)`}}),Ee=new E({props:{codee:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d_config.save_pretrained("custom-resnet"),`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d_config.save_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)`}}),je=new E({props:{codee:'resnet50d_config = ResnetConfig.from_pretrained("custom-resnet"),',highlighted:'resnet50d_config = ResnetConfig.from_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)'}}),Ce=new Nt({}),Pe=new E({props:{codee:`from transformers import PreTrainedModel
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
        <span class="hljs-keyword">return</span> self.model.forward_features(tensor)`}}),Ae=new E({props:{codee:`class ResnetModelForImageClassification(PreTrainedModel):
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
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;logits&quot;</span>: logits}`}}),ae=new ar({props:{$$slots:{default:[Li]},$$scope:{ctx:z}}}),Te=new E({props:{codee:"resnet50d = ResnetModelForImageClassification(resnet50d_config),",highlighted:"resnet50d = ResnetModelForImageClassification(resnet50d_config)"}}),Me=new E({props:{codee:`import timm

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict()),`,highlighted:`<span class="hljs-keyword">import</span> timm

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),Re=new Nt({}),re=new ar({props:{warning:"&lcub;true}",$$slots:{default:[Yi]},$$scope:{ctx:z}}}),qe=new E({props:{codee:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.py
    \u251C\u2500\u2500 configuration_resnet.py
    \u2514\u2500\u2500 modeling_resnet.py,`,highlighted:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.<span class="hljs-keyword">py</span>
    \u251C\u2500\u2500 configuration_resnet.<span class="hljs-keyword">py</span>
    \u2514\u2500\u2500 modeling_resnet.<span class="hljs-keyword">py</span>`}}),ie=new ar({props:{warning:"&lcub;true}",$$slots:{default:[zi]},$$scope:{ctx:z}}}),Ie=new E({props:{codee:`from resnet_model.configuration_resnet import ResnetConfig
from resnet_model.modeling_resnet import ResnetModel, ResnetModelForImageClassification,`,highlighted:`<span class="hljs-keyword">from</span> resnet_model.configuration_resnet <span class="hljs-keyword">import</span> ResnetConfig
<span class="hljs-keyword">from</span> resnet_model.modeling_resnet <span class="hljs-keyword">import</span> ResnetModel, ResnetModelForImageClassification`}}),Ne=new E({props:{codee:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class("AutoModel")
ResnetModelForImageClassification.register_for_auto_class("AutoModelForImageClassification"),`,highlighted:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class(<span class="hljs-string">&quot;AutoModel&quot;</span>)
ResnetModelForImageClassification.register_for_auto_class(<span class="hljs-string">&quot;AutoModelForImageClassification&quot;</span>)`}}),xe=new E({props:{codee:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict()),`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),Oe=new E({props:{codee:"huggingface-cli login,",highlighted:"huggingface-cli login"}}),De=new E({props:{codee:`from huggingface_hub import notebook_login

notebook_login(),`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),Fe=new E({props:{codee:'resnet50d.push_to_hub("custom-resnet50d"),',highlighted:'resnet50d.push_to_hub(<span class="hljs-string">&quot;custom-resnet50d&quot;</span>)'}}),Be=new Nt({}),We=new E({props:{codee:`from transformers import AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained("sgugger/custom-resnet50d", trust_remote_code=True),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained(<span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>)`}}),Le=new E({props:{codee:`commit_hash = "ed94a7c6247d8aedce4647f00f20de6875b5b292"
model = AutoModelForImageClassification.from_pretrained(
    "sgugger/custom-resnet50d", trust_remote_code=True, revision=commit_hash
),`,highlighted:`commit_hash = <span class="hljs-string">&quot;ed94a7c6247d8aedce4647f00f20de6875b5b292&quot;</span>
model = AutoModelForImageClassification.from_pretrained(
    <span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>, revision=commit_hash
)`}}),Ye=new Nt({}),ze=new E({props:{codee:`from transformers import AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register("resnet", ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register(<span class="hljs-string">&quot;resnet&quot;</span>, ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification)`}}),{c(){u=l("meta"),k=c(),m=l("h1"),v=l("a"),G=l("span"),p(P.$$.fragment),I=c(),ee=l("span"),sn=o("Sharing custom models"),qs=c(),Ke=l("p"),on=o(`The \u{1F917} Transformers library is designed to be easily extensible. Every model is fully coded in a given subfolder
of the repository with no abstraction, so you can easily copy a modeling file and tweak it to your needs.`),Is=c(),Ue=l("p"),nn=o(`If you are writing a brand new model, it might be easier to start from scratch. In this tutorial, we will show you
how to write a custom model and its configuration so it can be used inside Transformers, and how you can share it
with the community (with the code it relies on) so that anyone can use it, even if it\u2019s not present in the \u{1F917}
Transformers library.`),Ns=c(),N=l("p"),an=o(`We will illustrate all of this on a ResNet model, by wrapping the ResNet class of the
`),be=l("a"),ln=o("timm library"),rn=o(" into a "),Ve=l("a"),fn=o("PreTrainedModel"),cn=o("."),xs=c(),K=l("h2"),te=l("a"),xt=l("span"),p(ve.$$.fragment),dn=c(),Ot=l("span"),hn=o("Writing a custom configuration"),Os=c(),se=l("p"),un=o(`Before we dive into the model, let\u2019s first write its configuration. The configuration of a model is an object that
will contain all the necessary information to build the model. As we will see in the next section, the model can only
take a `),Dt=l("code"),mn=o("config"),pn=o(" to be initialized, so we really need that object to be as complete as possible."),Ds=c(),Je=l("p"),_n=o(`In our example, we will take a couple of arguments of the ResNet class that we might want to tweak. Different
configurations will then give us the different types of ResNets that are possible. We then just store those arguments,
after checking the validity of a few of them.`),Fs=c(),p($e.$$.fragment),Hs=c(),Qe=l("p"),gn=o("The three important things to remember when writing you own configuration are the following:"),Bs=c(),x=l("ul"),ke=l("li"),yn=o("you have to inherit from "),Ft=l("code"),wn=o("PretrainedConfig"),bn=o(","),vn=c(),U=l("li"),$n=o("the "),Ht=l("code"),kn=o("__init__"),En=o(" of your "),Bt=l("code"),jn=o("PretrainedConfig"),Cn=o(" must accept any kwargs,"),Pn=c(),V=l("li"),An=o("those "),St=l("code"),Tn=o("kwargs"),Mn=o(" need to be passed to the superclass "),Wt=l("code"),Rn=o("__init__"),qn=o("."),Ss=c(),O=l("p"),In=o(`The inheritance is to make sure you get all the functionality from the \u{1F917} Transformers library, while the two other
constraints come from the fact a `),Lt=l("code"),Nn=o("PretrainedConfig"),xn=o(` has more fields than the ones you are setting. When reloading a
config with the `),Yt=l("code"),On=o("from_pretrained"),Dn=o(` method, those fields need to be accepted by your config and then sent to the
superclass.`),Ws=c(),D=l("p"),Fn=o("Defining a "),zt=l("code"),Hn=o("model_type"),Bn=o(" for your configuration (here "),Gt=l("code"),Sn=o('model_type="resnet"'),Wn=o(`) is not mandatory, unless you want to
register your model with the auto classes (see last section).`),Ls=c(),Xe=l("p"),Ln=o(`With this done, you can easily create and save your configuration like you would do with any other model config of the
library. Here is how we can create a resnet50d config and save it:`),Ys=c(),p(Ee.$$.fragment),zs=c(),A=l("p"),Yn=o("This will save a file named "),Kt=l("code"),zn=o("config.json"),Gn=o(" inside the folder "),Ut=l("code"),Kn=o("custom-resnet"),Un=o(`. You can then reload your config with the
`),Vt=l("code"),Vn=o("from_pretrained"),Jn=o(" method:"),Gs=c(),p(je.$$.fragment),Ks=c(),F=l("p"),Qn=o("You can also use any other method of the "),Ze=l("a"),Xn=o("PretrainedConfig"),Zn=o(" class, like "),et=l("a"),ea=o("push_to_hub()"),ta=o(` to
directly upload your config to the Hub.`),Us=c(),J=l("h2"),oe=l("a"),Jt=l("span"),p(Ce.$$.fragment),sa=c(),Qt=l("span"),oa=o("Writing a custom model"),Vs=c(),H=l("p"),na=o(`Now that we have our ResNet configuration, we can go on writing the model. We will actually write two: one that
extracts the hidden features from a batch of images (like `),tt=l("a"),aa=o("BertModel"),la=o(`) and one that is suitable for image
classification (like `),Xt=l("code"),ra=o("BertModelForSequenceClassification"),ia=o(")."),Js=c(),ne=l("p"),fa=o(`As we mentioned before, we\u2019ll only write a loose wrapper of the model to keep it simple for this example. The only
thing we need to do before writing this class is a map between the block types and actual block classes. Then the
model is defined from the configuration by passing everything to the `),Zt=l("code"),ca=o("ResNet"),da=o(" class:"),Qs=c(),p(Pe.$$.fragment),Xs=c(),st=l("p"),ha=o("For the model that will classify images, we just change the forward method:"),Zs=c(),p(Ae.$$.fragment),eo=c(),C=l("p"),ua=o("In both cases, notice how we inherit from "),es=l("code"),ma=o("PreTrainedModel"),pa=o(" and call the superclass initialization with the "),ts=l("code"),_a=o("config"),ga=o(`
(a bit like when you write a regular `),ss=l("code"),ya=o("torch.nn.Module"),wa=o("). The line that sets the "),os=l("code"),ba=o("config_class"),va=o(` is not mandatory, unless
you want to register your model with the auto classes (see last section).`),to=c(),p(ae.$$.fragment),so=c(),B=l("p"),$a=o(`You can have your model return anything you want, but returning a dictionary like we did for
`),ns=l("code"),ka=o("ResnetModelForImageClassification"),Ea=o(`, with the loss included when labels are passed, will make your model directly
usable inside the `),ot=l("a"),ja=o("Trainer"),Ca=o(` class. Using another output format is fine as long as you are planning on using your own
training loop or another library for training.`),oo=c(),nt=l("p"),Pa=o("Now that we have our model class, let\u2019s create one:"),no=c(),p(Te.$$.fragment),ao=c(),T=l("p"),Aa=o("Again, you can use any of the methods of "),at=l("a"),Ta=o("PreTrainedModel"),Ma=o(", like "),lt=l("a"),Ra=o("save_pretrained()"),qa=o(` or
`),rt=l("a"),Ia=o("push_to_hub()"),Na=o(`. We will use the second in the next section, and see how to push the model weights
with the code of our model. But first, let\u2019s load some pretrained weights inside our model.`),lo=c(),it=l("p"),xa=o(`In your own use case, you will probably be training your custom model on your own data. To go fast for this tutorial,
we will use the pretrained version of the resnet50d. Since our model is just a wrapper around it, it\u2019s going to be
easy to transfer those weights:`),ro=c(),p(Me.$$.fragment),io=c(),S=l("p"),Oa=o("Now let\u2019s see how to make sure that when we do "),ft=l("a"),Da=o("save_pretrained()"),Fa=o(" or "),ct=l("a"),Ha=o("push_to_hub()"),Ba=o(`, the
code of the model is saved.`),fo=c(),Q=l("h2"),le=l("a"),as=l("span"),p(Re.$$.fragment),Sa=c(),ls=l("span"),Wa=o("Sending the code to the Hub"),co=c(),p(re.$$.fragment),ho=c(),$=l("p"),La=o("First, make sure your model is fully defined in a "),rs=l("code"),Ya=o(".py"),za=o(` file. It can rely on relative imports to some other files as
long as all the files are in the same directory (we don\u2019t support submodules for this feature yet). For our example,
we\u2019ll define a `),is=l("code"),Ga=o("modeling_resnet.py"),Ka=o(" file and a "),fs=l("code"),Ua=o("configuration_resnet.py"),Va=o(` file in a folder of the current working
directory named `),cs=l("code"),Ja=o("resnet_model"),Qa=o(". The configuration file contains the code for "),ds=l("code"),Xa=o("ResnetConfig"),Za=o(` and the modeling file
contains the code of `),hs=l("code"),el=o("ResnetModel"),tl=o(" and "),us=l("code"),sl=o("ResnetModelForImageClassification"),ol=o("."),uo=c(),p(qe.$$.fragment),mo=c(),W=l("p"),nl=o("The "),ms=l("code"),al=o("__init__.py"),ll=o(" can be empty, it\u2019s just there so that Python detects "),ps=l("code"),rl=o("resnet_model"),il=o(" can be use as a module."),po=c(),p(ie.$$.fragment),_o=c(),dt=l("p"),fl=o("Note that you can re-use (or subclass) an existing configuration/model."),go=c(),ht=l("p"),cl=o(`To share your model with the community, follow those steps: first import the ResNet model and config from the newly
created files:`),yo=c(),p(Ie.$$.fragment),wo=c(),fe=l("p"),dl=o("Then you have to tell the library you want to copy the code files of those objects when using the "),_s=l("code"),hl=o("save_pretrained"),ul=o(`
method and properly register them with a given Auto class (especially for models), just run:`),bo=c(),p(Ne.$$.fragment),vo=c(),ce=l("p"),ml=o(`Note that there is no need to specify an auto class for the configuration (there is only one auto class for them,
`),ut=l("a"),pl=o("AutoConfig"),_l=o(`) but it\u2019s different for models. Your custom model could be suitable for many different tasks, so you
have to specify which one of the auto classes is the correct one for your model.`),$o=c(),mt=l("p"),gl=o("Next, let\u2019s create the config and models as we did before:"),ko=c(),p(xe.$$.fragment),Eo=c(),pt=l("p"),yl=o("Now to send the model to the Hub, make sure you are logged in. Either run in your terminal:"),jo=c(),p(Oe.$$.fragment),Co=c(),_t=l("p"),wl=o("or from a notebook:"),Po=c(),p(De.$$.fragment),Ao=c(),gt=l("p"),bl=o("You can then push to to your own namespace (or an organization you are a member of) like this:"),To=c(),p(Fe.$$.fragment),Mo=c(),M=l("p"),vl=o(`On top of the modeling weights and the configuration in json format, this also copied the modeling and
configuration `),gs=l("code"),$l=o(".py"),kl=o(" files in the folder "),ys=l("code"),El=o("custom-resnet50d"),jl=o(` and uploaded the result to the Hub. You can check the result
in this `),He=l("a"),Cl=o("model repo"),Pl=o("."),Ro=c(),de=l("p"),Al=o("See the "),yt=l("a"),Tl=o("sharing tutorial"),Ml=o(" for more information on the push to Hub method."),qo=c(),X=l("h2"),he=l("a"),ws=l("span"),p(Be.$$.fragment),Rl=c(),bs=l("span"),ql=o("Using a model with custom code"),Io=c(),R=l("p"),Il=o(`You can use any configuration, model or tokenizer with custom code files in its repository with the auto-classes and
the `),vs=l("code"),Nl=o("from_pretrained"),xl=o(" method. All files and code uploaded to the Hub are scanned for malware (refer to the "),Se=l("a"),Ol=o("Hub security"),Dl=o(` documentation for more information), but you should still
review the model code and author to avoid executing malicious code on your machine. Set `),$s=l("code"),Fl=o("trust_remote_code=True"),Hl=o(` to use
a model with custom code:`),No=c(),p(We.$$.fragment),xo=c(),ue=l("p"),Bl=o("It is also strongly encouraged to pass a commit hash as a "),ks=l("code"),Sl=o("revision"),Wl=o(` to make sure the author of the models did not
update the code with some malicious new lines (unless you fully trust the authors of the models).`),Oo=c(),p(Le.$$.fragment),Do=c(),wt=l("p"),Ll=o(`Note that when browsing the commit history of the model repo on the Hub, there is a button to easily copy the commit
hash of any commit.`),Fo=c(),Z=l("h2"),me=l("a"),Es=l("span"),p(Ye.$$.fragment),Yl=c(),js=l("span"),zl=o("Registering a model with custom code to the auto classes"),Ho=c(),bt=l("p"),Gl=o(`If you are writing a library that extends \u{1F917} Transformers, you may want to extend the auto classes to include your own
model. This is different from pushing the code to the Hub in the sense that users will need to import your library to
get the custom models (contrarily to automatically downloading the model code from the Hub).`),Bo=c(),L=l("p"),Kl=o("As long as your config has a "),Cs=l("code"),Ul=o("model_type"),Vl=o(` attribute that is different from existing model types, and that your model
classes have the right `),Ps=l("code"),Jl=o("config_class"),Ql=o(" attributes, you can just add them to the auto classes likes this:"),So=c(),p(ze.$$.fragment),Wo=c(),q=l("p"),Xl=o("Note that the first argument used when registering your custom config to "),vt=l("a"),Zl=o("AutoConfig"),er=o(" needs to match the "),As=l("code"),tr=o("model_type"),sr=o(`
of your custom config, and the first argument used when registering your custom models to any auto model class needs
to match the `),Ts=l("code"),or=o("config_class"),nr=o(" of those models."),this.h()},l(e){const a=Wi('[data-svelte="svelte-1phssyn"]',document.head);u=r(a,"META",{name:!0,content:!0}),a.forEach(s),k=d(e),m=r(e,"H1",{class:!0});var Ge=i(m);v=r(Ge,"A",{id:!0,class:!0,href:!0});var Ms=i(v);G=r(Ms,"SPAN",{});var Rs=i(G);_(P.$$.fragment,Rs),Rs.forEach(s),Ms.forEach(s),I=d(Ge),ee=r(Ge,"SPAN",{});var lr=i(ee);sn=n(lr,"Sharing custom models"),lr.forEach(s),Ge.forEach(s),qs=d(e),Ke=r(e,"P",{});var rr=i(Ke);on=n(rr,`The \u{1F917} Transformers library is designed to be easily extensible. Every model is fully coded in a given subfolder
of the repository with no abstraction, so you can easily copy a modeling file and tweak it to your needs.`),rr.forEach(s),Is=d(e),Ue=r(e,"P",{});var ir=i(Ue);nn=n(ir,`If you are writing a brand new model, it might be easier to start from scratch. In this tutorial, we will show you
how to write a custom model and its configuration so it can be used inside Transformers, and how you can share it
with the community (with the code it relies on) so that anyone can use it, even if it\u2019s not present in the \u{1F917}
Transformers library.`),ir.forEach(s),Ns=d(e),N=r(e,"P",{});var $t=i(N);an=n($t,`We will illustrate all of this on a ResNet model, by wrapping the ResNet class of the
`),be=r($t,"A",{href:!0,rel:!0});var fr=i(be);ln=n(fr,"timm library"),fr.forEach(s),rn=n($t," into a "),Ve=r($t,"A",{href:!0});var cr=i(Ve);fn=n(cr,"PreTrainedModel"),cr.forEach(s),cn=n($t,"."),$t.forEach(s),xs=d(e),K=r(e,"H2",{class:!0});var Yo=i(K);te=r(Yo,"A",{id:!0,class:!0,href:!0});var dr=i(te);xt=r(dr,"SPAN",{});var hr=i(xt);_(ve.$$.fragment,hr),hr.forEach(s),dr.forEach(s),dn=d(Yo),Ot=r(Yo,"SPAN",{});var ur=i(Ot);hn=n(ur,"Writing a custom configuration"),ur.forEach(s),Yo.forEach(s),Os=d(e),se=r(e,"P",{});var zo=i(se);un=n(zo,`Before we dive into the model, let\u2019s first write its configuration. The configuration of a model is an object that
will contain all the necessary information to build the model. As we will see in the next section, the model can only
take a `),Dt=r(zo,"CODE",{});var mr=i(Dt);mn=n(mr,"config"),mr.forEach(s),pn=n(zo," to be initialized, so we really need that object to be as complete as possible."),zo.forEach(s),Ds=d(e),Je=r(e,"P",{});var pr=i(Je);_n=n(pr,`In our example, we will take a couple of arguments of the ResNet class that we might want to tweak. Different
configurations will then give us the different types of ResNets that are possible. We then just store those arguments,
after checking the validity of a few of them.`),pr.forEach(s),Fs=d(e),_($e.$$.fragment,e),Hs=d(e),Qe=r(e,"P",{});var _r=i(Qe);gn=n(_r,"The three important things to remember when writing you own configuration are the following:"),_r.forEach(s),Bs=d(e),x=r(e,"UL",{});var kt=i(x);ke=r(kt,"LI",{});var Go=i(ke);yn=n(Go,"you have to inherit from "),Ft=r(Go,"CODE",{});var gr=i(Ft);wn=n(gr,"PretrainedConfig"),gr.forEach(s),bn=n(Go,","),Go.forEach(s),vn=d(kt),U=r(kt,"LI",{});var Et=i(U);$n=n(Et,"the "),Ht=r(Et,"CODE",{});var yr=i(Ht);kn=n(yr,"__init__"),yr.forEach(s),En=n(Et," of your "),Bt=r(Et,"CODE",{});var wr=i(Bt);jn=n(wr,"PretrainedConfig"),wr.forEach(s),Cn=n(Et," must accept any kwargs,"),Et.forEach(s),Pn=d(kt),V=r(kt,"LI",{});var jt=i(V);An=n(jt,"those "),St=r(jt,"CODE",{});var br=i(St);Tn=n(br,"kwargs"),br.forEach(s),Mn=n(jt," need to be passed to the superclass "),Wt=r(jt,"CODE",{});var vr=i(Wt);Rn=n(vr,"__init__"),vr.forEach(s),qn=n(jt,"."),jt.forEach(s),kt.forEach(s),Ss=d(e),O=r(e,"P",{});var Ct=i(O);In=n(Ct,`The inheritance is to make sure you get all the functionality from the \u{1F917} Transformers library, while the two other
constraints come from the fact a `),Lt=r(Ct,"CODE",{});var $r=i(Lt);Nn=n($r,"PretrainedConfig"),$r.forEach(s),xn=n(Ct,` has more fields than the ones you are setting. When reloading a
config with the `),Yt=r(Ct,"CODE",{});var kr=i(Yt);On=n(kr,"from_pretrained"),kr.forEach(s),Dn=n(Ct,` method, those fields need to be accepted by your config and then sent to the
superclass.`),Ct.forEach(s),Ws=d(e),D=r(e,"P",{});var Pt=i(D);Fn=n(Pt,"Defining a "),zt=r(Pt,"CODE",{});var Er=i(zt);Hn=n(Er,"model_type"),Er.forEach(s),Bn=n(Pt," for your configuration (here "),Gt=r(Pt,"CODE",{});var jr=i(Gt);Sn=n(jr,'model_type="resnet"'),jr.forEach(s),Wn=n(Pt,`) is not mandatory, unless you want to
register your model with the auto classes (see last section).`),Pt.forEach(s),Ls=d(e),Xe=r(e,"P",{});var Cr=i(Xe);Ln=n(Cr,`With this done, you can easily create and save your configuration like you would do with any other model config of the
library. Here is how we can create a resnet50d config and save it:`),Cr.forEach(s),Ys=d(e),_(Ee.$$.fragment,e),zs=d(e),A=r(e,"P",{});var pe=i(A);Yn=n(pe,"This will save a file named "),Kt=r(pe,"CODE",{});var Pr=i(Kt);zn=n(Pr,"config.json"),Pr.forEach(s),Gn=n(pe," inside the folder "),Ut=r(pe,"CODE",{});var Ar=i(Ut);Kn=n(Ar,"custom-resnet"),Ar.forEach(s),Un=n(pe,`. You can then reload your config with the
`),Vt=r(pe,"CODE",{});var Tr=i(Vt);Vn=n(Tr,"from_pretrained"),Tr.forEach(s),Jn=n(pe," method:"),pe.forEach(s),Gs=d(e),_(je.$$.fragment,e),Ks=d(e),F=r(e,"P",{});var At=i(F);Qn=n(At,"You can also use any other method of the "),Ze=r(At,"A",{href:!0});var Mr=i(Ze);Xn=n(Mr,"PretrainedConfig"),Mr.forEach(s),Zn=n(At," class, like "),et=r(At,"A",{href:!0});var Rr=i(et);ea=n(Rr,"push_to_hub()"),Rr.forEach(s),ta=n(At,` to
directly upload your config to the Hub.`),At.forEach(s),Us=d(e),J=r(e,"H2",{class:!0});var Ko=i(J);oe=r(Ko,"A",{id:!0,class:!0,href:!0});var qr=i(oe);Jt=r(qr,"SPAN",{});var Ir=i(Jt);_(Ce.$$.fragment,Ir),Ir.forEach(s),qr.forEach(s),sa=d(Ko),Qt=r(Ko,"SPAN",{});var Nr=i(Qt);oa=n(Nr,"Writing a custom model"),Nr.forEach(s),Ko.forEach(s),Vs=d(e),H=r(e,"P",{});var Tt=i(H);na=n(Tt,`Now that we have our ResNet configuration, we can go on writing the model. We will actually write two: one that
extracts the hidden features from a batch of images (like `),tt=r(Tt,"A",{href:!0});var xr=i(tt);aa=n(xr,"BertModel"),xr.forEach(s),la=n(Tt,`) and one that is suitable for image
classification (like `),Xt=r(Tt,"CODE",{});var Or=i(Xt);ra=n(Or,"BertModelForSequenceClassification"),Or.forEach(s),ia=n(Tt,")."),Tt.forEach(s),Js=d(e),ne=r(e,"P",{});var Uo=i(ne);fa=n(Uo,`As we mentioned before, we\u2019ll only write a loose wrapper of the model to keep it simple for this example. The only
thing we need to do before writing this class is a map between the block types and actual block classes. Then the
model is defined from the configuration by passing everything to the `),Zt=r(Uo,"CODE",{});var Dr=i(Zt);ca=n(Dr,"ResNet"),Dr.forEach(s),da=n(Uo," class:"),Uo.forEach(s),Qs=d(e),_(Pe.$$.fragment,e),Xs=d(e),st=r(e,"P",{});var Fr=i(st);ha=n(Fr,"For the model that will classify images, we just change the forward method:"),Fr.forEach(s),Zs=d(e),_(Ae.$$.fragment,e),eo=d(e),C=r(e,"P",{});var Y=i(C);ua=n(Y,"In both cases, notice how we inherit from "),es=r(Y,"CODE",{});var Hr=i(es);ma=n(Hr,"PreTrainedModel"),Hr.forEach(s),pa=n(Y," and call the superclass initialization with the "),ts=r(Y,"CODE",{});var Br=i(ts);_a=n(Br,"config"),Br.forEach(s),ga=n(Y,`
(a bit like when you write a regular `),ss=r(Y,"CODE",{});var Sr=i(ss);ya=n(Sr,"torch.nn.Module"),Sr.forEach(s),wa=n(Y,"). The line that sets the "),os=r(Y,"CODE",{});var Wr=i(os);ba=n(Wr,"config_class"),Wr.forEach(s),va=n(Y,` is not mandatory, unless
you want to register your model with the auto classes (see last section).`),Y.forEach(s),to=d(e),_(ae.$$.fragment,e),so=d(e),B=r(e,"P",{});var Mt=i(B);$a=n(Mt,`You can have your model return anything you want, but returning a dictionary like we did for
`),ns=r(Mt,"CODE",{});var Lr=i(ns);ka=n(Lr,"ResnetModelForImageClassification"),Lr.forEach(s),Ea=n(Mt,`, with the loss included when labels are passed, will make your model directly
usable inside the `),ot=r(Mt,"A",{href:!0});var Yr=i(ot);ja=n(Yr,"Trainer"),Yr.forEach(s),Ca=n(Mt,` class. Using another output format is fine as long as you are planning on using your own
training loop or another library for training.`),Mt.forEach(s),oo=d(e),nt=r(e,"P",{});var zr=i(nt);Pa=n(zr,"Now that we have our model class, let\u2019s create one:"),zr.forEach(s),no=d(e),_(Te.$$.fragment,e),ao=d(e),T=r(e,"P",{});var _e=i(T);Aa=n(_e,"Again, you can use any of the methods of "),at=r(_e,"A",{href:!0});var Gr=i(at);Ta=n(Gr,"PreTrainedModel"),Gr.forEach(s),Ma=n(_e,", like "),lt=r(_e,"A",{href:!0});var Kr=i(lt);Ra=n(Kr,"save_pretrained()"),Kr.forEach(s),qa=n(_e,` or
`),rt=r(_e,"A",{href:!0});var Ur=i(rt);Ia=n(Ur,"push_to_hub()"),Ur.forEach(s),Na=n(_e,`. We will use the second in the next section, and see how to push the model weights
with the code of our model. But first, let\u2019s load some pretrained weights inside our model.`),_e.forEach(s),lo=d(e),it=r(e,"P",{});var Vr=i(it);xa=n(Vr,`In your own use case, you will probably be training your custom model on your own data. To go fast for this tutorial,
we will use the pretrained version of the resnet50d. Since our model is just a wrapper around it, it\u2019s going to be
easy to transfer those weights:`),Vr.forEach(s),ro=d(e),_(Me.$$.fragment,e),io=d(e),S=r(e,"P",{});var Rt=i(S);Oa=n(Rt,"Now let\u2019s see how to make sure that when we do "),ft=r(Rt,"A",{href:!0});var Jr=i(ft);Da=n(Jr,"save_pretrained()"),Jr.forEach(s),Fa=n(Rt," or "),ct=r(Rt,"A",{href:!0});var Qr=i(ct);Ha=n(Qr,"push_to_hub()"),Qr.forEach(s),Ba=n(Rt,`, the
code of the model is saved.`),Rt.forEach(s),fo=d(e),Q=r(e,"H2",{class:!0});var Vo=i(Q);le=r(Vo,"A",{id:!0,class:!0,href:!0});var Xr=i(le);as=r(Xr,"SPAN",{});var Zr=i(as);_(Re.$$.fragment,Zr),Zr.forEach(s),Xr.forEach(s),Sa=d(Vo),ls=r(Vo,"SPAN",{});var ei=i(ls);Wa=n(ei,"Sending the code to the Hub"),ei.forEach(s),Vo.forEach(s),co=d(e),_(re.$$.fragment,e),ho=d(e),$=r(e,"P",{});var j=i($);La=n(j,"First, make sure your model is fully defined in a "),rs=r(j,"CODE",{});var ti=i(rs);Ya=n(ti,".py"),ti.forEach(s),za=n(j,` file. It can rely on relative imports to some other files as
long as all the files are in the same directory (we don\u2019t support submodules for this feature yet). For our example,
we\u2019ll define a `),is=r(j,"CODE",{});var si=i(is);Ga=n(si,"modeling_resnet.py"),si.forEach(s),Ka=n(j," file and a "),fs=r(j,"CODE",{});var oi=i(fs);Ua=n(oi,"configuration_resnet.py"),oi.forEach(s),Va=n(j,` file in a folder of the current working
directory named `),cs=r(j,"CODE",{});var ni=i(cs);Ja=n(ni,"resnet_model"),ni.forEach(s),Qa=n(j,". The configuration file contains the code for "),ds=r(j,"CODE",{});var ai=i(ds);Xa=n(ai,"ResnetConfig"),ai.forEach(s),Za=n(j,` and the modeling file
contains the code of `),hs=r(j,"CODE",{});var li=i(hs);el=n(li,"ResnetModel"),li.forEach(s),tl=n(j," and "),us=r(j,"CODE",{});var ri=i(us);sl=n(ri,"ResnetModelForImageClassification"),ri.forEach(s),ol=n(j,"."),j.forEach(s),uo=d(e),_(qe.$$.fragment,e),mo=d(e),W=r(e,"P",{});var qt=i(W);nl=n(qt,"The "),ms=r(qt,"CODE",{});var ii=i(ms);al=n(ii,"__init__.py"),ii.forEach(s),ll=n(qt," can be empty, it\u2019s just there so that Python detects "),ps=r(qt,"CODE",{});var fi=i(ps);rl=n(fi,"resnet_model"),fi.forEach(s),il=n(qt," can be use as a module."),qt.forEach(s),po=d(e),_(ie.$$.fragment,e),_o=d(e),dt=r(e,"P",{});var ci=i(dt);fl=n(ci,"Note that you can re-use (or subclass) an existing configuration/model."),ci.forEach(s),go=d(e),ht=r(e,"P",{});var di=i(ht);cl=n(di,`To share your model with the community, follow those steps: first import the ResNet model and config from the newly
created files:`),di.forEach(s),yo=d(e),_(Ie.$$.fragment,e),wo=d(e),fe=r(e,"P",{});var Jo=i(fe);dl=n(Jo,"Then you have to tell the library you want to copy the code files of those objects when using the "),_s=r(Jo,"CODE",{});var hi=i(_s);hl=n(hi,"save_pretrained"),hi.forEach(s),ul=n(Jo,`
method and properly register them with a given Auto class (especially for models), just run:`),Jo.forEach(s),bo=d(e),_(Ne.$$.fragment,e),vo=d(e),ce=r(e,"P",{});var Qo=i(ce);ml=n(Qo,`Note that there is no need to specify an auto class for the configuration (there is only one auto class for them,
`),ut=r(Qo,"A",{href:!0});var ui=i(ut);pl=n(ui,"AutoConfig"),ui.forEach(s),_l=n(Qo,`) but it\u2019s different for models. Your custom model could be suitable for many different tasks, so you
have to specify which one of the auto classes is the correct one for your model.`),Qo.forEach(s),$o=d(e),mt=r(e,"P",{});var mi=i(mt);gl=n(mi,"Next, let\u2019s create the config and models as we did before:"),mi.forEach(s),ko=d(e),_(xe.$$.fragment,e),Eo=d(e),pt=r(e,"P",{});var pi=i(pt);yl=n(pi,"Now to send the model to the Hub, make sure you are logged in. Either run in your terminal:"),pi.forEach(s),jo=d(e),_(Oe.$$.fragment,e),Co=d(e),_t=r(e,"P",{});var _i=i(_t);wl=n(_i,"or from a notebook:"),_i.forEach(s),Po=d(e),_(De.$$.fragment,e),Ao=d(e),gt=r(e,"P",{});var gi=i(gt);bl=n(gi,"You can then push to to your own namespace (or an organization you are a member of) like this:"),gi.forEach(s),To=d(e),_(Fe.$$.fragment,e),Mo=d(e),M=r(e,"P",{});var ge=i(M);vl=n(ge,`On top of the modeling weights and the configuration in json format, this also copied the modeling and
configuration `),gs=r(ge,"CODE",{});var yi=i(gs);$l=n(yi,".py"),yi.forEach(s),kl=n(ge," files in the folder "),ys=r(ge,"CODE",{});var wi=i(ys);El=n(wi,"custom-resnet50d"),wi.forEach(s),jl=n(ge,` and uploaded the result to the Hub. You can check the result
in this `),He=r(ge,"A",{href:!0,rel:!0});var bi=i(He);Cl=n(bi,"model repo"),bi.forEach(s),Pl=n(ge,"."),ge.forEach(s),Ro=d(e),de=r(e,"P",{});var Xo=i(de);Al=n(Xo,"See the "),yt=r(Xo,"A",{href:!0});var vi=i(yt);Tl=n(vi,"sharing tutorial"),vi.forEach(s),Ml=n(Xo," for more information on the push to Hub method."),Xo.forEach(s),qo=d(e),X=r(e,"H2",{class:!0});var Zo=i(X);he=r(Zo,"A",{id:!0,class:!0,href:!0});var $i=i(he);ws=r($i,"SPAN",{});var ki=i(ws);_(Be.$$.fragment,ki),ki.forEach(s),$i.forEach(s),Rl=d(Zo),bs=r(Zo,"SPAN",{});var Ei=i(bs);ql=n(Ei,"Using a model with custom code"),Ei.forEach(s),Zo.forEach(s),Io=d(e),R=r(e,"P",{});var ye=i(R);Il=n(ye,`You can use any configuration, model or tokenizer with custom code files in its repository with the auto-classes and
the `),vs=r(ye,"CODE",{});var ji=i(vs);Nl=n(ji,"from_pretrained"),ji.forEach(s),xl=n(ye," method. All files and code uploaded to the Hub are scanned for malware (refer to the "),Se=r(ye,"A",{href:!0,rel:!0});var Ci=i(Se);Ol=n(Ci,"Hub security"),Ci.forEach(s),Dl=n(ye,` documentation for more information), but you should still
review the model code and author to avoid executing malicious code on your machine. Set `),$s=r(ye,"CODE",{});var Pi=i($s);Fl=n(Pi,"trust_remote_code=True"),Pi.forEach(s),Hl=n(ye,` to use
a model with custom code:`),ye.forEach(s),No=d(e),_(We.$$.fragment,e),xo=d(e),ue=r(e,"P",{});var en=i(ue);Bl=n(en,"It is also strongly encouraged to pass a commit hash as a "),ks=r(en,"CODE",{});var Ai=i(ks);Sl=n(Ai,"revision"),Ai.forEach(s),Wl=n(en,` to make sure the author of the models did not
update the code with some malicious new lines (unless you fully trust the authors of the models).`),en.forEach(s),Oo=d(e),_(Le.$$.fragment,e),Do=d(e),wt=r(e,"P",{});var Ti=i(wt);Ll=n(Ti,`Note that when browsing the commit history of the model repo on the Hub, there is a button to easily copy the commit
hash of any commit.`),Ti.forEach(s),Fo=d(e),Z=r(e,"H2",{class:!0});var tn=i(Z);me=r(tn,"A",{id:!0,class:!0,href:!0});var Mi=i(me);Es=r(Mi,"SPAN",{});var Ri=i(Es);_(Ye.$$.fragment,Ri),Ri.forEach(s),Mi.forEach(s),Yl=d(tn),js=r(tn,"SPAN",{});var qi=i(js);zl=n(qi,"Registering a model with custom code to the auto classes"),qi.forEach(s),tn.forEach(s),Ho=d(e),bt=r(e,"P",{});var Ii=i(bt);Gl=n(Ii,`If you are writing a library that extends \u{1F917} Transformers, you may want to extend the auto classes to include your own
model. This is different from pushing the code to the Hub in the sense that users will need to import your library to
get the custom models (contrarily to automatically downloading the model code from the Hub).`),Ii.forEach(s),Bo=d(e),L=r(e,"P",{});var It=i(L);Kl=n(It,"As long as your config has a "),Cs=r(It,"CODE",{});var Ni=i(Cs);Ul=n(Ni,"model_type"),Ni.forEach(s),Vl=n(It,` attribute that is different from existing model types, and that your model
classes have the right `),Ps=r(It,"CODE",{});var xi=i(Ps);Jl=n(xi,"config_class"),xi.forEach(s),Ql=n(It," attributes, you can just add them to the auto classes likes this:"),It.forEach(s),So=d(e),_(ze.$$.fragment,e),Wo=d(e),q=r(e,"P",{});var we=i(q);Xl=n(we,"Note that the first argument used when registering your custom config to "),vt=r(we,"A",{href:!0});var Oi=i(vt);Zl=n(Oi,"AutoConfig"),Oi.forEach(s),er=n(we," needs to match the "),As=r(we,"CODE",{});var Di=i(As);tr=n(Di,"model_type"),Di.forEach(s),sr=n(we,`
of your custom config, and the first argument used when registering your custom models to any auto model class needs
to match the `),Ts=r(we,"CODE",{});var Fi=i(Ts);or=n(Fi,"config_class"),Fi.forEach(s),nr=n(we," of those models."),we.forEach(s),this.h()},h(){h(u,"name","hf:doc:metadata"),h(u,"content",JSON.stringify(Ki)),h(v,"id","sharing-custom-models"),h(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(v,"href","#sharing-custom-models"),h(m,"class","relative group"),h(be,"href","https://github.com/rwightman/pytorch-image-models/tree/master/timm"),h(be,"rel","nofollow"),h(Ve,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),h(te,"id","writing-a-custom-configuration"),h(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(te,"href","#writing-a-custom-configuration"),h(K,"class","relative group"),h(Ze,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(et,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.file_utils.PushToHubMixin.push_to_hub"),h(oe,"id","writing-a-custom-model"),h(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oe,"href","#writing-a-custom-model"),h(J,"class","relative group"),h(tt,"href","/docs/transformers/v4.17.0/en/model_doc/bert#transformers.BertModel"),h(ot,"href","/docs/transformers/v4.17.0/en/main_classes/trainer#transformers.Trainer"),h(at,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),h(lt,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),h(rt,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.file_utils.PushToHubMixin.push_to_hub"),h(ft,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),h(ct,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.file_utils.PushToHubMixin.push_to_hub"),h(le,"id","sending-the-code-to-the-hub"),h(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(le,"href","#sending-the-code-to-the-hub"),h(Q,"class","relative group"),h(ut,"href","/docs/transformers/v4.17.0/en/model_doc/auto#transformers.AutoConfig"),h(He,"href","https://huggingface.co/sgugger/custom-resnet50d"),h(He,"rel","nofollow"),h(yt,"href","model_sharing"),h(he,"id","using-a-model-with-custom-code"),h(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(he,"href","#using-a-model-with-custom-code"),h(X,"class","relative group"),h(Se,"href","https://huggingface.co/docs/hub/security#malware-scanning"),h(Se,"rel","nofollow"),h(me,"id","registering-a-model-with-custom-code-to-the-auto-classes"),h(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(me,"href","#registering-a-model-with-custom-code-to-the-auto-classes"),h(Z,"class","relative group"),h(vt,"href","/docs/transformers/v4.17.0/en/model_doc/auto#transformers.AutoConfig")},m(e,a){t(document.head,u),f(e,k,a),f(e,m,a),t(m,v),t(v,G),g(P,G,null),t(m,I),t(m,ee),t(ee,sn),f(e,qs,a),f(e,Ke,a),t(Ke,on),f(e,Is,a),f(e,Ue,a),t(Ue,nn),f(e,Ns,a),f(e,N,a),t(N,an),t(N,be),t(be,ln),t(N,rn),t(N,Ve),t(Ve,fn),t(N,cn),f(e,xs,a),f(e,K,a),t(K,te),t(te,xt),g(ve,xt,null),t(K,dn),t(K,Ot),t(Ot,hn),f(e,Os,a),f(e,se,a),t(se,un),t(se,Dt),t(Dt,mn),t(se,pn),f(e,Ds,a),f(e,Je,a),t(Je,_n),f(e,Fs,a),g($e,e,a),f(e,Hs,a),f(e,Qe,a),t(Qe,gn),f(e,Bs,a),f(e,x,a),t(x,ke),t(ke,yn),t(ke,Ft),t(Ft,wn),t(ke,bn),t(x,vn),t(x,U),t(U,$n),t(U,Ht),t(Ht,kn),t(U,En),t(U,Bt),t(Bt,jn),t(U,Cn),t(x,Pn),t(x,V),t(V,An),t(V,St),t(St,Tn),t(V,Mn),t(V,Wt),t(Wt,Rn),t(V,qn),f(e,Ss,a),f(e,O,a),t(O,In),t(O,Lt),t(Lt,Nn),t(O,xn),t(O,Yt),t(Yt,On),t(O,Dn),f(e,Ws,a),f(e,D,a),t(D,Fn),t(D,zt),t(zt,Hn),t(D,Bn),t(D,Gt),t(Gt,Sn),t(D,Wn),f(e,Ls,a),f(e,Xe,a),t(Xe,Ln),f(e,Ys,a),g(Ee,e,a),f(e,zs,a),f(e,A,a),t(A,Yn),t(A,Kt),t(Kt,zn),t(A,Gn),t(A,Ut),t(Ut,Kn),t(A,Un),t(A,Vt),t(Vt,Vn),t(A,Jn),f(e,Gs,a),g(je,e,a),f(e,Ks,a),f(e,F,a),t(F,Qn),t(F,Ze),t(Ze,Xn),t(F,Zn),t(F,et),t(et,ea),t(F,ta),f(e,Us,a),f(e,J,a),t(J,oe),t(oe,Jt),g(Ce,Jt,null),t(J,sa),t(J,Qt),t(Qt,oa),f(e,Vs,a),f(e,H,a),t(H,na),t(H,tt),t(tt,aa),t(H,la),t(H,Xt),t(Xt,ra),t(H,ia),f(e,Js,a),f(e,ne,a),t(ne,fa),t(ne,Zt),t(Zt,ca),t(ne,da),f(e,Qs,a),g(Pe,e,a),f(e,Xs,a),f(e,st,a),t(st,ha),f(e,Zs,a),g(Ae,e,a),f(e,eo,a),f(e,C,a),t(C,ua),t(C,es),t(es,ma),t(C,pa),t(C,ts),t(ts,_a),t(C,ga),t(C,ss),t(ss,ya),t(C,wa),t(C,os),t(os,ba),t(C,va),f(e,to,a),g(ae,e,a),f(e,so,a),f(e,B,a),t(B,$a),t(B,ns),t(ns,ka),t(B,Ea),t(B,ot),t(ot,ja),t(B,Ca),f(e,oo,a),f(e,nt,a),t(nt,Pa),f(e,no,a),g(Te,e,a),f(e,ao,a),f(e,T,a),t(T,Aa),t(T,at),t(at,Ta),t(T,Ma),t(T,lt),t(lt,Ra),t(T,qa),t(T,rt),t(rt,Ia),t(T,Na),f(e,lo,a),f(e,it,a),t(it,xa),f(e,ro,a),g(Me,e,a),f(e,io,a),f(e,S,a),t(S,Oa),t(S,ft),t(ft,Da),t(S,Fa),t(S,ct),t(ct,Ha),t(S,Ba),f(e,fo,a),f(e,Q,a),t(Q,le),t(le,as),g(Re,as,null),t(Q,Sa),t(Q,ls),t(ls,Wa),f(e,co,a),g(re,e,a),f(e,ho,a),f(e,$,a),t($,La),t($,rs),t(rs,Ya),t($,za),t($,is),t(is,Ga),t($,Ka),t($,fs),t(fs,Ua),t($,Va),t($,cs),t(cs,Ja),t($,Qa),t($,ds),t(ds,Xa),t($,Za),t($,hs),t(hs,el),t($,tl),t($,us),t(us,sl),t($,ol),f(e,uo,a),g(qe,e,a),f(e,mo,a),f(e,W,a),t(W,nl),t(W,ms),t(ms,al),t(W,ll),t(W,ps),t(ps,rl),t(W,il),f(e,po,a),g(ie,e,a),f(e,_o,a),f(e,dt,a),t(dt,fl),f(e,go,a),f(e,ht,a),t(ht,cl),f(e,yo,a),g(Ie,e,a),f(e,wo,a),f(e,fe,a),t(fe,dl),t(fe,_s),t(_s,hl),t(fe,ul),f(e,bo,a),g(Ne,e,a),f(e,vo,a),f(e,ce,a),t(ce,ml),t(ce,ut),t(ut,pl),t(ce,_l),f(e,$o,a),f(e,mt,a),t(mt,gl),f(e,ko,a),g(xe,e,a),f(e,Eo,a),f(e,pt,a),t(pt,yl),f(e,jo,a),g(Oe,e,a),f(e,Co,a),f(e,_t,a),t(_t,wl),f(e,Po,a),g(De,e,a),f(e,Ao,a),f(e,gt,a),t(gt,bl),f(e,To,a),g(Fe,e,a),f(e,Mo,a),f(e,M,a),t(M,vl),t(M,gs),t(gs,$l),t(M,kl),t(M,ys),t(ys,El),t(M,jl),t(M,He),t(He,Cl),t(M,Pl),f(e,Ro,a),f(e,de,a),t(de,Al),t(de,yt),t(yt,Tl),t(de,Ml),f(e,qo,a),f(e,X,a),t(X,he),t(he,ws),g(Be,ws,null),t(X,Rl),t(X,bs),t(bs,ql),f(e,Io,a),f(e,R,a),t(R,Il),t(R,vs),t(vs,Nl),t(R,xl),t(R,Se),t(Se,Ol),t(R,Dl),t(R,$s),t($s,Fl),t(R,Hl),f(e,No,a),g(We,e,a),f(e,xo,a),f(e,ue,a),t(ue,Bl),t(ue,ks),t(ks,Sl),t(ue,Wl),f(e,Oo,a),g(Le,e,a),f(e,Do,a),f(e,wt,a),t(wt,Ll),f(e,Fo,a),f(e,Z,a),t(Z,me),t(me,Es),g(Ye,Es,null),t(Z,Yl),t(Z,js),t(js,zl),f(e,Ho,a),f(e,bt,a),t(bt,Gl),f(e,Bo,a),f(e,L,a),t(L,Kl),t(L,Cs),t(Cs,Ul),t(L,Vl),t(L,Ps),t(Ps,Jl),t(L,Ql),f(e,So,a),g(ze,e,a),f(e,Wo,a),f(e,q,a),t(q,Xl),t(q,vt),t(vt,Zl),t(q,er),t(q,As),t(As,tr),t(q,sr),t(q,Ts),t(Ts,or),t(q,nr),Lo=!0},p(e,[a]){const Ge={};a&2&&(Ge.$$scope={dirty:a,ctx:e}),ae.$set(Ge);const Ms={};a&2&&(Ms.$$scope={dirty:a,ctx:e}),re.$set(Ms);const Rs={};a&2&&(Rs.$$scope={dirty:a,ctx:e}),ie.$set(Rs)},i(e){Lo||(y(P.$$.fragment,e),y(ve.$$.fragment,e),y($e.$$.fragment,e),y(Ee.$$.fragment,e),y(je.$$.fragment,e),y(Ce.$$.fragment,e),y(Pe.$$.fragment,e),y(Ae.$$.fragment,e),y(ae.$$.fragment,e),y(Te.$$.fragment,e),y(Me.$$.fragment,e),y(Re.$$.fragment,e),y(re.$$.fragment,e),y(qe.$$.fragment,e),y(ie.$$.fragment,e),y(Ie.$$.fragment,e),y(Ne.$$.fragment,e),y(xe.$$.fragment,e),y(Oe.$$.fragment,e),y(De.$$.fragment,e),y(Fe.$$.fragment,e),y(Be.$$.fragment,e),y(We.$$.fragment,e),y(Le.$$.fragment,e),y(Ye.$$.fragment,e),y(ze.$$.fragment,e),Lo=!0)},o(e){w(P.$$.fragment,e),w(ve.$$.fragment,e),w($e.$$.fragment,e),w(Ee.$$.fragment,e),w(je.$$.fragment,e),w(Ce.$$.fragment,e),w(Pe.$$.fragment,e),w(Ae.$$.fragment,e),w(ae.$$.fragment,e),w(Te.$$.fragment,e),w(Me.$$.fragment,e),w(Re.$$.fragment,e),w(re.$$.fragment,e),w(qe.$$.fragment,e),w(ie.$$.fragment,e),w(Ie.$$.fragment,e),w(Ne.$$.fragment,e),w(xe.$$.fragment,e),w(Oe.$$.fragment,e),w(De.$$.fragment,e),w(Fe.$$.fragment,e),w(Be.$$.fragment,e),w(We.$$.fragment,e),w(Le.$$.fragment,e),w(Ye.$$.fragment,e),w(ze.$$.fragment,e),Lo=!1},d(e){s(u),e&&s(k),e&&s(m),b(P),e&&s(qs),e&&s(Ke),e&&s(Is),e&&s(Ue),e&&s(Ns),e&&s(N),e&&s(xs),e&&s(K),b(ve),e&&s(Os),e&&s(se),e&&s(Ds),e&&s(Je),e&&s(Fs),b($e,e),e&&s(Hs),e&&s(Qe),e&&s(Bs),e&&s(x),e&&s(Ss),e&&s(O),e&&s(Ws),e&&s(D),e&&s(Ls),e&&s(Xe),e&&s(Ys),b(Ee,e),e&&s(zs),e&&s(A),e&&s(Gs),b(je,e),e&&s(Ks),e&&s(F),e&&s(Us),e&&s(J),b(Ce),e&&s(Vs),e&&s(H),e&&s(Js),e&&s(ne),e&&s(Qs),b(Pe,e),e&&s(Xs),e&&s(st),e&&s(Zs),b(Ae,e),e&&s(eo),e&&s(C),e&&s(to),b(ae,e),e&&s(so),e&&s(B),e&&s(oo),e&&s(nt),e&&s(no),b(Te,e),e&&s(ao),e&&s(T),e&&s(lo),e&&s(it),e&&s(ro),b(Me,e),e&&s(io),e&&s(S),e&&s(fo),e&&s(Q),b(Re),e&&s(co),b(re,e),e&&s(ho),e&&s($),e&&s(uo),b(qe,e),e&&s(mo),e&&s(W),e&&s(po),b(ie,e),e&&s(_o),e&&s(dt),e&&s(go),e&&s(ht),e&&s(yo),b(Ie,e),e&&s(wo),e&&s(fe),e&&s(bo),b(Ne,e),e&&s(vo),e&&s(ce),e&&s($o),e&&s(mt),e&&s(ko),b(xe,e),e&&s(Eo),e&&s(pt),e&&s(jo),b(Oe,e),e&&s(Co),e&&s(_t),e&&s(Po),b(De,e),e&&s(Ao),e&&s(gt),e&&s(To),b(Fe,e),e&&s(Mo),e&&s(M),e&&s(Ro),e&&s(de),e&&s(qo),e&&s(X),b(Be),e&&s(Io),e&&s(R),e&&s(No),b(We,e),e&&s(xo),e&&s(ue),e&&s(Oo),b(Le,e),e&&s(Do),e&&s(wt),e&&s(Fo),e&&s(Z),b(Ye),e&&s(Ho),e&&s(bt),e&&s(Bo),e&&s(L),e&&s(So),b(ze,e),e&&s(Wo),e&&s(q)}}}const Ki={local:"sharing-custom-models",sections:[{local:"writing-a-custom-configuration",title:"Writing a custom configuration"},{local:"writing-a-custom-model",title:"Writing a custom model"},{local:"sending-the-code-to-the-hub",title:"Sending the code to the Hub"},{local:"using-a-model-with-custom-code",title:"Using a model with custom code"},{local:"registering-a-model-with-custom-code-to-the-auto-classes",title:"Registering a model with custom code to the auto classes"}],title:"Sharing custom models"};function Ui(z,u,k){let{fw:m}=u;return z.$$set=v=>{"fw"in v&&k(0,m=v.fw)},[m]}class ef extends Hi{constructor(u){super();Bi(this,u,Ui,Gi,Si,{fw:0})}}export{ef as default,Ki as metadata};
