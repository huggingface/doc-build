import{S as Fn,i as Sn,s as Hn,e as i,k as m,w as _,t as a,M as Bn,c as l,d as s,m as c,a as n,x as v,h as t,b as p,G as o,g as d,y as g,q as h,o as b,B as q,v as Vn}from"../chunks/vendor-hf-doc-builder.js";import{T as tl}from"../chunks/Tip-hf-doc-builder.js";import{I as wo}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as w}from"../chunks/CodeBlock-hf-doc-builder.js";function Ln(Z){let u,y;return{c(){u=i("p"),y=a("Se o seu modelo for muito semelhante a um modelo dentro da biblioteca, voc\xEA poder\xE1 reutilizar a mesma configura\xE7\xE3o desse modelo.")},l(f){u=l(f,"P",{});var $=n(u);y=t($,"Se o seu modelo for muito semelhante a um modelo dentro da biblioteca, voc\xEA poder\xE1 reutilizar a mesma configura\xE7\xE3o desse modelo."),$.forEach(s)},m(f,$){d(f,u,$),o(u,y)},d(f){f&&s(u)}}}function Gn(Z){let u,y;return{c(){u=i("p"),y=a("Esta API \xE9 experimental e pode ter algumas pequenas altera\xE7\xF5es nas pr\xF3ximas vers\xF5es.")},l(f){u=l(f,"P",{});var $=n(u);y=t($,"Esta API \xE9 experimental e pode ter algumas pequenas altera\xE7\xF5es nas pr\xF3ximas vers\xF5es."),$.forEach(s)},m(f,$){d(f,u,$),o(u,y)},d(f){f&&s(u)}}}function Un(Z){let u,y,f,$,G;return{c(){u=i("p"),y=a(`Se estiver copiando arquivos de modelagem da biblioteca, voc\xEA precisar\xE1 substituir todas as importa\xE7\xF5es relativas na parte superior do arquivo
para importar do pacote `),f=i("code"),$=a("transformers"),G=a(".")},l(k){u=l(k,"P",{});var M=n(u);y=t(M,`Se estiver copiando arquivos de modelagem da biblioteca, voc\xEA precisar\xE1 substituir todas as importa\xE7\xF5es relativas na parte superior do arquivo
para importar do pacote `),f=l(M,"CODE",{});var ee=n(f);$=t(ee,"transformers"),ee.forEach(s),G=t(M,"."),M.forEach(s)},m(k,M){d(k,u,M),o(u,y),o(u,f),o(f,$),o(u,G)},d(k){k&&s(u)}}}function Kn(Z){let u,y,f,$,G,k,M,ee,st,Ms,Ke,at,Ds,Je,tt,xs,D,rt,qe,it,lt,yo,nt,dt,Ns,U,oe,jo,$e,mt,Co,ct,Is,se,pt,ko,ut,ft,Ts,Qe,_t,Fs,Ee,Ss,We,vt,Hs,x,we,gt,Po,ht,bt,qt,K,$t,zo,Et,wt,Ao,yt,jt,Ct,J,kt,Ro,Pt,zt,Oo,At,Rt,Bs,N,Ot,Mo,Mt,Dt,Do,xt,Nt,Vs,I,It,xo,Tt,Ft,No,St,Ht,Ls,Xe,Bt,Gs,ye,Us,P,Vt,Io,Lt,Gt,To,Ut,Kt,Fo,Jt,Qt,Ks,je,Js,T,Wt,So,Xt,Yt,Ho,Zt,er,Qs,Q,ae,Bo,Ce,or,Vo,sr,Ws,F,ar,Lo,tr,rr,Go,ir,lr,Xs,te,nr,Uo,dr,mr,Ys,ke,Zs,Ye,cr,ea,Pe,oa,C,pr,Ko,ur,fr,Jo,_r,vr,Qo,gr,hr,Wo,br,qr,sa,re,aa,S,$r,Xo,Er,wr,Yo,yr,jr,ta,Ze,Cr,ra,ze,ia,z,kr,Zo,Pr,zr,es,Ar,Rr,os,Or,Mr,la,eo,Dr,na,Ae,da,H,xr,ss,Nr,Ir,as,Tr,Fr,ma,W,ie,ts,Re,Sr,rs,Hr,ca,le,pa,E,Br,is,Vr,Lr,ls,Gr,Ur,ns,Kr,Jr,ds,Qr,Wr,ms,Xr,Yr,cs,Zr,ei,ps,oi,si,ua,Oe,fa,B,ai,us,ti,ri,fs,ii,li,_a,ne,va,oo,ni,ga,so,di,ha,Me,ba,de,mi,_s,ci,pi,qa,De,$a,me,ui,vs,fi,_i,Ea,ao,vi,wa,xe,ya,to,gi,ja,Ne,Ca,ro,hi,ka,Ie,Pa,io,bi,za,Te,Aa,A,qi,gs,$i,Ei,hs,wi,yi,Fe,ji,Ci,Ra,ce,ki,lo,Pi,zi,Oa,X,pe,bs,Se,Ai,qs,Ri,Ma,R,Oi,$s,Mi,Di,He,xi,Ni,Es,Ii,Ti,Da,Be,xa,ue,Fi,ws,Si,Hi,Na,Ve,Ia,no,Bi,Ta,Y,fe,ys,Le,Vi,js,Li,Fa,mo,Gi,Sa,V,Ui,Cs,Ki,Ji,ks,Qi,Wi,Ha,Ge,Ba,O,Xi,Ps,Yi,Zi,zs,el,ol,As,sl,al,Va;return k=new wo({}),$e=new wo({}),Ee=new w({props:{code:`from transformers import PretrainedConfig
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
            raise ValueError(f"\`block_type\` must be 'basic' or bottleneck', got {block_type}.")
        if stem_type not in ["", "deep", "deep-tiered"]:
            raise ValueError(f"\`stem_type\` must be '', 'deep' or 'deep-tiered', got {stem_type}.")

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
            <span class="hljs-keyword">raise</span> ValueError(<span class="hljs-string">f&quot;\`block_type\` must be &#x27;basic&#x27; or bottleneck&#x27;, got <span class="hljs-subst">{block_type}</span>.&quot;</span>)
        <span class="hljs-keyword">if</span> stem_type <span class="hljs-keyword">not</span> <span class="hljs-keyword">in</span> [<span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;deep&quot;</span>, <span class="hljs-string">&quot;deep-tiered&quot;</span>]:
            <span class="hljs-keyword">raise</span> ValueError(<span class="hljs-string">f&quot;\`stem_type\` must be &#x27;&#x27;, &#x27;deep&#x27; or &#x27;deep-tiered&#x27;, got <span class="hljs-subst">{stem_type}</span>.&quot;</span>)

        self.block_type = block_type
        self.layers = layers
        self.num_classes = num_classes
        self.input_channels = input_channels
        self.cardinality = cardinality
        self.base_width = base_width
        self.stem_width = stem_width
        self.stem_type = stem_type
        self.avg_down = avg_down
        <span class="hljs-built_in">super</span>().__init__(**kwargs)`}}),ye=new w({props:{code:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d_config.save_pretrained("custom-resnet")`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d_config.save_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)`}}),je=new w({props:{code:'resnet50d_config = ResnetConfig.from_pretrained("custom-resnet")',highlighted:'resnet50d_config = ResnetConfig.from_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)'}}),Ce=new wo({}),ke=new w({props:{code:`from transformers import PreTrainedModel
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
        <span class="hljs-keyword">return</span> self.model.forward_features(tensor)`}}),Pe=new w({props:{code:`import torch


class ResnetModelForImageClassification(PreTrainedModel):
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
        return {"logits": logits}`,highlighted:`<span class="hljs-keyword">import</span> torch


<span class="hljs-keyword">class</span> <span class="hljs-title class_">ResnetModelForImageClassification</span>(<span class="hljs-title class_ inherited__">PreTrainedModel</span>):
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
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;logits&quot;</span>: logits}`}}),re=new tl({props:{$$slots:{default:[Ln]},$$scope:{ctx:Z}}}),ze=new w({props:{code:"resnet50d = ResnetModelForImageClassification(resnet50d_config)",highlighted:"resnet50d = ResnetModelForImageClassification(resnet50d_config)"}}),Ae=new w({props:{code:`import timm

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`,highlighted:`<span class="hljs-keyword">import</span> timm

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),Re=new wo({}),le=new tl({props:{warning:!0,$$slots:{default:[Gn]},$$scope:{ctx:Z}}}),Oe=new w({props:{code:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.py
    \u251C\u2500\u2500 configuration_resnet.py
    \u2514\u2500\u2500 modeling_resnet.py`,highlighted:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.<span class="hljs-keyword">py</span>
    \u251C\u2500\u2500 configuration_resnet.<span class="hljs-keyword">py</span>
    \u2514\u2500\u2500 modeling_resnet.<span class="hljs-keyword">py</span>`}}),ne=new tl({props:{warning:!0,$$slots:{default:[Un]},$$scope:{ctx:Z}}}),Me=new w({props:{code:`from resnet_model.configuration_resnet import ResnetConfig
from resnet_model.modeling_resnet import ResnetModel, ResnetModelForImageClassification`,highlighted:`<span class="hljs-keyword">from</span> resnet_model.configuration_resnet <span class="hljs-keyword">import</span> ResnetConfig
<span class="hljs-keyword">from</span> resnet_model.modeling_resnet <span class="hljs-keyword">import</span> ResnetModel, ResnetModelForImageClassification`}}),De=new w({props:{code:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class("AutoModel")
ResnetModelForImageClassification.register_for_auto_class("AutoModelForImageClassification")`,highlighted:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class(<span class="hljs-string">&quot;AutoModel&quot;</span>)
ResnetModelForImageClassification.register_for_auto_class(<span class="hljs-string">&quot;AutoModelForImageClassification&quot;</span>)`}}),xe=new w({props:{code:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),Ne=new w({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}}),Ie=new w({props:{code:`from huggingface_hub import notebook_login

notebook_login()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),Te=new w({props:{code:'resnet50d.push_to_hub("custom-resnet50d")',highlighted:'resnet50d.push_to_hub(<span class="hljs-string">&quot;custom-resnet50d&quot;</span>)'}}),Se=new wo({}),Be=new w({props:{code:`from transformers import AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained("sgugger/custom-resnet50d", trust_remote_code=True)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained(<span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>)`}}),Ve=new w({props:{code:`commit_hash = "ed94a7c6247d8aedce4647f00f20de6875b5b292"
model = AutoModelForImageClassification.from_pretrained(
    "sgugger/custom-resnet50d", trust_remote_code=True, revision=commit_hash
)`,highlighted:`commit_hash = <span class="hljs-string">&quot;ed94a7c6247d8aedce4647f00f20de6875b5b292&quot;</span>
model = AutoModelForImageClassification.from_pretrained(
    <span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>, revision=commit_hash
)`}}),Le=new wo({}),Ge=new w({props:{code:`from transformers import AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register("resnet", ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register(<span class="hljs-string">&quot;resnet&quot;</span>, ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification)`}}),{c(){u=i("meta"),y=m(),f=i("h1"),$=i("a"),G=i("span"),_(k.$$.fragment),M=m(),ee=i("span"),st=a("Compartilhando modelos customizados"),Ms=m(),Ke=i("p"),at=a(`A biblioteca \u{1F917} Transformers foi projetada para ser facilmente extens\xEDvel. Cada modelo \xE9 totalmente codificado em uma determinada subpasta
do reposit\xF3rio sem abstra\xE7\xE3o, para que voc\xEA possa copiar facilmente um arquivo de modelagem e ajust\xE1-lo \xE0s suas necessidades.`),Ds=m(),Je=i("p"),tt=a(`Se voc\xEA estiver escrevendo um modelo totalmente novo, pode ser mais f\xE1cil come\xE7ar do zero. Neste tutorial, mostraremos
como escrever um modelo customizado e sua configura\xE7\xE3o para que possa ser usado com Transformers, e como voc\xEA pode compartilh\xE1-lo
com a comunidade (com o c\xF3digo em que se baseia) para que qualquer pessoa possa us\xE1-lo, mesmo se n\xE3o estiver presente na biblioteca \u{1F917} Transformers.`),xs=m(),D=i("p"),rt=a(`Ilustraremos tudo isso em um modelo ResNet, envolvendo a classe ResNet do
`),qe=i("a"),it=a("biblioteca timm"),lt=a(" em um "),yo=i("code"),nt=a("PreTrainedModel"),dt=a("."),Ns=m(),U=i("h2"),oe=i("a"),jo=i("span"),_($e.$$.fragment),mt=m(),Co=i("span"),ct=a("Escrevendo uma configura\xE7\xE3o customizada"),Is=m(),se=i("p"),pt=a(`Antes de mergulharmos no modelo, vamos primeiro escrever sua configura\xE7\xE3o. A configura\xE7\xE3o de um modelo \xE9 um objeto que
ter\xE1 todas as informa\xE7\xF5es necess\xE1rias para construir o modelo. Como veremos na pr\xF3xima se\xE7\xE3o, o modelo s\xF3 pode
ter um `),ko=i("code"),ut=a("config"),ft=a(" para ser inicializado, ent\xE3o realmente precisamos que esse objeto seja o mais completo poss\xEDvel."),Ts=m(),Qe=i("p"),_t=a(`Em nosso exemplo, pegaremos alguns argumentos da classe ResNet que podemos querer ajustar. Diferentes
configura\xE7\xF5es nos dar\xE1 os diferentes tipos de ResNets que s\xE3o poss\xEDveis. Em seguida, apenas armazenamos esses argumentos,
ap\xF3s verificar a validade de alguns deles.`),Fs=m(),_(Ee.$$.fragment),Ss=m(),We=i("p"),vt=a("As tr\xEAs coisas importantes a serem lembradas ao escrever sua pr\xF3pria configura\xE7\xE3o s\xE3o:"),Hs=m(),x=i("ul"),we=i("li"),gt=a("voc\xEA tem que herdar de "),Po=i("code"),ht=a("PretrainedConfig"),bt=a(","),qt=m(),K=i("li"),$t=a("o "),zo=i("code"),Et=a("__init__"),wt=a(" do seu "),Ao=i("code"),yt=a("PretrainedConfig"),jt=a(" deve aceitar quaisquer kwargs,"),Ct=m(),J=i("li"),kt=a("esses "),Ro=i("code"),Pt=a("kwargs"),zt=a(" precisam ser passados para a superclasse "),Oo=i("code"),At=a("__init__"),Rt=a("."),Bs=m(),N=i("p"),Ot=a(`A heran\xE7a \xE9 para garantir que voc\xEA obtenha todas as funcionalidades da biblioteca \u{1F917} Transformers, enquanto as outras duas
restri\xE7\xF5es v\xEAm do fato de um `),Mo=i("code"),Mt=a("PretrainedConfig"),Dt=a(` ter mais campos do que os que voc\xEA est\xE1 configurando. Ao recarregar um
config com o m\xE9todo `),Do=i("code"),xt=a("from_pretrained"),Nt=a(`, esses campos precisam ser aceitos pelo seu config e ent\xE3o enviados para a
superclasse.`),Vs=m(),I=i("p"),It=a("Definir um "),xo=i("code"),Tt=a("model_type"),Ft=a(" para sua configura\xE7\xE3o (aqui "),No=i("code"),St=a('model_type="resnet"'),Ht=a(`) n\xE3o \xE9 obrigat\xF3rio, a menos que voc\xEA queira
registrar seu modelo com as classes autom\xE1ticas (veja a \xFAltima se\xE7\xE3o).`),Ls=m(),Xe=i("p"),Bt=a(`Com isso feito, voc\xEA pode facilmente criar e salvar sua configura\xE7\xE3o como faria com qualquer outra configura\xE7\xE3o de modelo da
biblioteca. Aqui est\xE1 como podemos criar uma configura\xE7\xE3o resnet50d e salv\xE1-la:`),Gs=m(),_(ye.$$.fragment),Us=m(),P=i("p"),Vt=a("Isso salvar\xE1 um arquivo chamado "),Io=i("code"),Lt=a("config.json"),Gt=a(" dentro da pasta "),To=i("code"),Ut=a("custom-resnet"),Kt=a(`. Voc\xEA pode ent\xE3o recarregar sua configura\xE7\xE3o com o
m\xE9todo `),Fo=i("code"),Jt=a("from_pretrained"),Qt=a(":"),Ks=m(),_(je.$$.fragment),Js=m(),T=i("p"),Wt=a("Voc\xEA tamb\xE9m pode usar qualquer outro m\xE9todo da classe "),So=i("code"),Xt=a("PretrainedConfig"),Yt=a(", como "),Ho=i("code"),Zt=a("push_to_hub()"),er=a(` para
carregar diretamente sua configura\xE7\xE3o para o Hub.`),Qs=m(),Q=i("h2"),ae=i("a"),Bo=i("span"),_(Ce.$$.fragment),or=m(),Vo=i("span"),sr=a("Escrevendo um modelo customizado"),Ws=m(),F=i("p"),ar=a(`Agora que temos nossa configura\xE7\xE3o ResNet, podemos continuar escrevendo o modelo. Na verdade, escreveremos dois: um que
extrai os recursos ocultos de um lote de imagens (como `),Lo=i("code"),tr=a("BertModel"),rr=a(`) e um que \xE9 adequado para classifica\xE7\xE3o de imagem
(como `),Go=i("code"),ir=a("BertForSequenceClassification"),lr=a(")."),Xs=m(),te=i("p"),nr=a(`Como mencionamos antes, escreveremos apenas um wrapper solto do modelo para mant\xEA-lo simples para este exemplo. A \xFAnica
coisa que precisamos fazer antes de escrever esta classe \xE9 um mapa entre os tipos de bloco e as classes de bloco reais. Ent\xE3o o
modelo \xE9 definido a partir da configura\xE7\xE3o passando tudo para a classe `),Uo=i("code"),dr=a("ResNet"),mr=a(":"),Ys=m(),_(ke.$$.fragment),Zs=m(),Ye=i("p"),cr=a("Para o modelo que ir\xE1 classificar as imagens, vamos apenas alterar o m\xE9todo forward:"),ea=m(),_(Pe.$$.fragment),oa=m(),C=i("p"),pr=a("Em ambos os casos, observe como herdamos de "),Ko=i("code"),ur=a("PreTrainedModel"),fr=a(" e chamamos a inicializa\xE7\xE3o da superclasse com o "),Jo=i("code"),_r=a("config"),vr=a(`
(um pouco parecido quando voc\xEA escreve um `),Qo=i("code"),gr=a("torch.nn.Module"),hr=a("). A linha que define o "),Wo=i("code"),br=a("config_class"),qr=a(` n\xE3o \xE9 obrigat\xF3ria, a menos que
voc\xEA deseje registrar seu modelo com as classes autom\xE1ticas (consulte a \xFAltima se\xE7\xE3o).`),sa=m(),_(re.$$.fragment),aa=m(),S=i("p"),$r=a(`Voc\xEA pode fazer com que seu modelo retorne o que voc\xEA quiser,por\xE9m retornando um dicion\xE1rio como fizemos para
`),Xo=i("code"),Er=a("ResnetModelForImageClassification"),wr=a(`, com a fun\xE7\xE3o de perda inclu\xEDda quando os r\xF3tulos s\xE3o passados, vai tornar seu modelo diretamente
utiliz\xE1vel dentro da classe `),Yo=i("code"),yr=a("Trainer"),jr=a(`. Voc\xEA pode usar outro formato de sa\xEDda, desde que esteja planejando usar seu pr\xF3prio
la\xE7o de treinamento ou outra biblioteca para treinamento.`),ta=m(),Ze=i("p"),Cr=a("Agora que temos nossa classe do modelo, vamos criar uma:"),ra=m(),_(ze.$$.fragment),ia=m(),z=i("p"),kr=a("Novamente, voc\xEA pode usar qualquer um dos m\xE9todos do "),Zo=i("code"),Pr=a("PreTrainedModel"),zr=a(", como "),es=i("code"),Ar=a("save_pretrained()"),Rr=a(` ou
`),os=i("code"),Or=a("push_to_hub()"),Mr=a(`. Usaremos o segundo na pr\xF3xima se\xE7\xE3o e veremos como enviar os pesos e
o c\xF3digo do nosso modelo. Mas primeiro, vamos carregar alguns pesos pr\xE9-treinados dentro do nosso modelo.`),la=m(),eo=i("p"),Dr=a(`Em seu pr\xF3prio caso de uso, voc\xEA provavelmente estar\xE1 treinando seu modelo customizado em seus pr\xF3prios dados. Para este tutorial ser r\xE1pido,
usaremos a vers\xE3o pr\xE9-treinada do resnet50d. Como nosso modelo \xE9 apenas um wrapper em torno dele, ser\xE1
f\xE1cil de transferir esses pesos:`),na=m(),_(Ae.$$.fragment),da=m(),H=i("p"),xr=a("Agora vamos ver como ter certeza de que quando fazemos "),ss=i("code"),Nr=a("save_pretrained()"),Ir=a(" ou "),as=i("code"),Tr=a("push_to_hub()"),Fr=a(`, o
c\xF3digo do modelo \xE9 salvo.`),ma=m(),W=i("h2"),ie=i("a"),ts=i("span"),_(Re.$$.fragment),Sr=m(),rs=i("span"),Hr=a("Enviando o c\xF3digo para o Hub"),ca=m(),_(le.$$.fragment),pa=m(),E=i("p"),Br=a("Primeiro, certifique-se de que seu modelo esteja totalmente definido em um arquivo "),is=i("code"),Vr=a(".py"),Lr=a(`. Ele pode contar com importa\xE7\xF5es relativas para alguns outros arquivos
desde que todos os arquivos estejam no mesmo diret\xF3rio (ainda n\xE3o suportamos subm\xF3dulos para este recurso). Para o nosso exemplo,
vamos definir um arquivo `),ls=i("code"),Gr=a("modeling_resnet.py"),Ur=a(" e um arquivo "),ns=i("code"),Kr=a("configuration_resnet.py"),Jr=a(` em uma pasta no
diret\xF3rio de trabalho atual chamado `),ds=i("code"),Qr=a("resnet_model"),Wr=a(". O arquivo de configura\xE7\xE3o cont\xE9m o c\xF3digo para "),ms=i("code"),Xr=a("ResnetConfig"),Yr=a(` e o arquivo de modelagem
cont\xE9m o c\xF3digo do `),cs=i("code"),Zr=a("ResnetModel"),ei=a(" e "),ps=i("code"),oi=a("ResnetModelForImageClassification"),si=a("."),ua=m(),_(Oe.$$.fragment),fa=m(),B=i("p"),ai=a("O "),us=i("code"),ti=a("__init__.py"),ri=a(" pode estar vazio, apenas est\xE1 l\xE1 para que o Python detecte que o "),fs=i("code"),ii=a("resnet_model"),li=a(" possa ser usado como um m\xF3dulo."),_a=m(),_(ne.$$.fragment),va=m(),oo=i("p"),ni=a("Observe que voc\xEA pode reutilizar (ou subclasse) uma configura\xE7\xE3o/modelo existente."),ga=m(),so=i("p"),di=a(`Para compartilhar seu modelo com a comunidade, siga estas etapas: primeiro importe o modelo ResNet e a configura\xE7\xE3o do
arquivos criados:`),ha=m(),_(Me.$$.fragment),ba=m(),de=i("p"),mi=a("Ent\xE3o voc\xEA tem que dizer \xE0 biblioteca que deseja copiar os arquivos de c\xF3digo desses objetos ao usar o "),_s=i("code"),ci=a("save_pretrained"),pi=a(`
e registr\xE1-los corretamente com uma determinada classe autom\xE1ticas (especialmente para modelos), basta executar:`),qa=m(),_(De.$$.fragment),$a=m(),me=i("p"),ui=a(`Observe que n\xE3o h\xE1 necessidade de especificar uma classe autom\xE1tica para a configura\xE7\xE3o (h\xE1 apenas uma classe autom\xE1tica,
`),vs=i("code"),fi=a("AutoConfig"),_i=a(`), mas \xE9 diferente para os modelos. Seu modelo customizado pode ser adequado para muitas tarefas diferentes, ent\xE3o voc\xEA
tem que especificar qual das classes autom\xE1ticas \xE9 a correta para o seu modelo.`),Ea=m(),ao=i("p"),vi=a("Em seguida, vamos criar a configura\xE7\xE3o e os modelos como fizemos antes:"),wa=m(),_(xe.$$.fragment),ya=m(),to=i("p"),gi=a("Agora para enviar o modelo para o Hub, certifique-se de estar logado. Ou execute no seu terminal:"),ja=m(),_(Ne.$$.fragment),Ca=m(),ro=i("p"),hi=a("ou a partir do notebook:"),ka=m(),_(Ie.$$.fragment),Pa=m(),io=i("p"),bi=a("Voc\xEA pode ent\xE3o enviar para seu pr\xF3prio namespace (ou uma organiza\xE7\xE3o da qual voc\xEA \xE9 membro) assim:"),za=m(),_(Te.$$.fragment),Aa=m(),A=i("p"),qi=a(`Al\xE9m dos pesos do modelo e da configura\xE7\xE3o no formato json, isso tamb\xE9m copiou o modelo e
configura\xE7\xE3o `),gs=i("code"),$i=a(".py"),Ei=a(" na pasta "),hs=i("code"),wi=a("custom-resnet50d"),yi=a(` e carregou o resultado para o Hub. Voc\xEA pode conferir o resultado
neste `),Fe=i("a"),ji=a("reposit\xF3rio de modelos"),Ci=a("."),Ra=m(),ce=i("p"),ki=a("Consulte o "),lo=i("a"),Pi=a("tutorial de compartilhamento"),zi=a(" para obter mais informa\xE7\xF5es sobre o m\xE9todo push_to_hub."),Oa=m(),X=i("h2"),pe=i("a"),bs=i("span"),_(Se.$$.fragment),Ai=m(),qs=i("span"),Ri=a("Usando um modelo com c\xF3digo customizado"),Ma=m(),R=i("p"),Oi=a(`Voc\xEA pode usar qualquer configura\xE7\xE3o, modelo ou tokenizador com arquivos de c\xF3digo customizados em seu reposit\xF3rio com as classes autom\xE1ticas e
o m\xE9todo `),$s=i("code"),Mi=a("from_pretrained"),Di=a(". Todos os arquivos e c\xF3digos carregados no Hub s\xE3o verificados quanto a malware (consulte a documenta\xE7\xE3o de "),He=i("a"),xi=a("Seguran\xE7a do Hub"),Ni=a(` para obter mais informa\xE7\xF5es), mas voc\xEA ainda deve
revisar o c\xF3digo do modelo e o autor para evitar a execu\xE7\xE3o de c\xF3digo malicioso em sua m\xE1quina. Defina `),Es=i("code"),Ii=a("trust_remote_code=True"),Ti=a(` para usar
um modelo com c\xF3digo customizado:`),Da=m(),_(Be.$$.fragment),xa=m(),ue=i("p"),Fi=a("Tamb\xE9m \xE9 fortemente recomendado passar um hash de confirma\xE7\xE3o como uma "),ws=i("code"),Si=a("revis\xE3o"),Hi=a(` para garantir que o autor dos modelos n\xE3o
atualize o c\xF3digo com novas linhas maliciosas (a menos que voc\xEA confie totalmente nos autores dos modelos).`),Na=m(),_(Ve.$$.fragment),Ia=m(),no=i("p"),Bi=a(`Observe que ao navegar no hist\xF3rico de commits do reposit\xF3rio do modelo no Hub, h\xE1 um bot\xE3o para copiar facilmente o commit
hash de qualquer commit.`),Ta=m(),Y=i("h2"),fe=i("a"),ys=i("span"),_(Le.$$.fragment),Vi=m(),js=i("span"),Li=a("Registrando um modelo com c\xF3digo customizado para as classes autom\xE1ticas"),Fa=m(),mo=i("p"),Gi=a(`Se voc\xEA estiver escrevendo uma biblioteca que estende \u{1F917} Transformers, talvez queira estender as classes autom\xE1ticas para incluir seus pr\xF3prios
modelos. Isso \xE9 diferente de enviar o c\xF3digo para o Hub no sentido de que os usu\xE1rios precisar\xE3o importar sua biblioteca para
obter os modelos customizados (ao contr\xE1rio de baixar automaticamente o c\xF3digo do modelo do Hub).`),Sa=m(),V=i("p"),Ui=a("Desde que sua configura\xE7\xE3o tenha um atributo "),Cs=i("code"),Ki=a("model_type"),Ji=a(` diferente dos tipos de modelo existentes e que as classes do seu modelo
tenha os atributos `),ks=i("code"),Qi=a("config_class"),Wi=a(" corretos, voc\xEA pode simplesmente adicion\xE1-los \xE0s classes autom\xE1ticas assim:"),Ha=m(),_(Ge.$$.fragment),Ba=m(),O=i("p"),Xi=a("Observe que o primeiro argumento usado ao registrar sua configura\xE7\xE3o customizada para "),Ps=i("code"),Yi=a("AutoConfig"),Zi=a(" precisa corresponder ao "),zs=i("code"),el=a("model_type"),ol=a(`
de sua configura\xE7\xE3o customizada. E o primeiro argumento usado ao registrar seus modelos customizados, para qualquer necessidade de classe de modelo autom\xE1tico
deve corresponder ao `),As=i("code"),sl=a("config_class"),al=a(" desses modelos."),this.h()},l(e){const r=Bn('[data-svelte="svelte-1phssyn"]',document.head);u=l(r,"META",{name:!0,content:!0}),r.forEach(s),y=c(e),f=l(e,"H1",{class:!0});var Ue=n(f);$=l(Ue,"A",{id:!0,class:!0,href:!0});var Rs=n($);G=l(Rs,"SPAN",{});var Os=n(G);v(k.$$.fragment,Os),Os.forEach(s),Rs.forEach(s),M=c(Ue),ee=l(Ue,"SPAN",{});var rl=n(ee);st=t(rl,"Compartilhando modelos customizados"),rl.forEach(s),Ue.forEach(s),Ms=c(e),Ke=l(e,"P",{});var il=n(Ke);at=t(il,`A biblioteca \u{1F917} Transformers foi projetada para ser facilmente extens\xEDvel. Cada modelo \xE9 totalmente codificado em uma determinada subpasta
do reposit\xF3rio sem abstra\xE7\xE3o, para que voc\xEA possa copiar facilmente um arquivo de modelagem e ajust\xE1-lo \xE0s suas necessidades.`),il.forEach(s),Ds=c(e),Je=l(e,"P",{});var ll=n(Je);tt=t(ll,`Se voc\xEA estiver escrevendo um modelo totalmente novo, pode ser mais f\xE1cil come\xE7ar do zero. Neste tutorial, mostraremos
como escrever um modelo customizado e sua configura\xE7\xE3o para que possa ser usado com Transformers, e como voc\xEA pode compartilh\xE1-lo
com a comunidade (com o c\xF3digo em que se baseia) para que qualquer pessoa possa us\xE1-lo, mesmo se n\xE3o estiver presente na biblioteca \u{1F917} Transformers.`),ll.forEach(s),xs=c(e),D=l(e,"P",{});var co=n(D);rt=t(co,`Ilustraremos tudo isso em um modelo ResNet, envolvendo a classe ResNet do
`),qe=l(co,"A",{href:!0,rel:!0});var nl=n(qe);it=t(nl,"biblioteca timm"),nl.forEach(s),lt=t(co," em um "),yo=l(co,"CODE",{});var dl=n(yo);nt=t(dl,"PreTrainedModel"),dl.forEach(s),dt=t(co,"."),co.forEach(s),Ns=c(e),U=l(e,"H2",{class:!0});var La=n(U);oe=l(La,"A",{id:!0,class:!0,href:!0});var ml=n(oe);jo=l(ml,"SPAN",{});var cl=n(jo);v($e.$$.fragment,cl),cl.forEach(s),ml.forEach(s),mt=c(La),Co=l(La,"SPAN",{});var pl=n(Co);ct=t(pl,"Escrevendo uma configura\xE7\xE3o customizada"),pl.forEach(s),La.forEach(s),Is=c(e),se=l(e,"P",{});var Ga=n(se);pt=t(Ga,`Antes de mergulharmos no modelo, vamos primeiro escrever sua configura\xE7\xE3o. A configura\xE7\xE3o de um modelo \xE9 um objeto que
ter\xE1 todas as informa\xE7\xF5es necess\xE1rias para construir o modelo. Como veremos na pr\xF3xima se\xE7\xE3o, o modelo s\xF3 pode
ter um `),ko=l(Ga,"CODE",{});var ul=n(ko);ut=t(ul,"config"),ul.forEach(s),ft=t(Ga," para ser inicializado, ent\xE3o realmente precisamos que esse objeto seja o mais completo poss\xEDvel."),Ga.forEach(s),Ts=c(e),Qe=l(e,"P",{});var fl=n(Qe);_t=t(fl,`Em nosso exemplo, pegaremos alguns argumentos da classe ResNet que podemos querer ajustar. Diferentes
configura\xE7\xF5es nos dar\xE1 os diferentes tipos de ResNets que s\xE3o poss\xEDveis. Em seguida, apenas armazenamos esses argumentos,
ap\xF3s verificar a validade de alguns deles.`),fl.forEach(s),Fs=c(e),v(Ee.$$.fragment,e),Ss=c(e),We=l(e,"P",{});var _l=n(We);vt=t(_l,"As tr\xEAs coisas importantes a serem lembradas ao escrever sua pr\xF3pria configura\xE7\xE3o s\xE3o:"),_l.forEach(s),Hs=c(e),x=l(e,"UL",{});var po=n(x);we=l(po,"LI",{});var Ua=n(we);gt=t(Ua,"voc\xEA tem que herdar de "),Po=l(Ua,"CODE",{});var vl=n(Po);ht=t(vl,"PretrainedConfig"),vl.forEach(s),bt=t(Ua,","),Ua.forEach(s),qt=c(po),K=l(po,"LI",{});var uo=n(K);$t=t(uo,"o "),zo=l(uo,"CODE",{});var gl=n(zo);Et=t(gl,"__init__"),gl.forEach(s),wt=t(uo," do seu "),Ao=l(uo,"CODE",{});var hl=n(Ao);yt=t(hl,"PretrainedConfig"),hl.forEach(s),jt=t(uo," deve aceitar quaisquer kwargs,"),uo.forEach(s),Ct=c(po),J=l(po,"LI",{});var fo=n(J);kt=t(fo,"esses "),Ro=l(fo,"CODE",{});var bl=n(Ro);Pt=t(bl,"kwargs"),bl.forEach(s),zt=t(fo," precisam ser passados para a superclasse "),Oo=l(fo,"CODE",{});var ql=n(Oo);At=t(ql,"__init__"),ql.forEach(s),Rt=t(fo,"."),fo.forEach(s),po.forEach(s),Bs=c(e),N=l(e,"P",{});var _o=n(N);Ot=t(_o,`A heran\xE7a \xE9 para garantir que voc\xEA obtenha todas as funcionalidades da biblioteca \u{1F917} Transformers, enquanto as outras duas
restri\xE7\xF5es v\xEAm do fato de um `),Mo=l(_o,"CODE",{});var $l=n(Mo);Mt=t($l,"PretrainedConfig"),$l.forEach(s),Dt=t(_o,` ter mais campos do que os que voc\xEA est\xE1 configurando. Ao recarregar um
config com o m\xE9todo `),Do=l(_o,"CODE",{});var El=n(Do);xt=t(El,"from_pretrained"),El.forEach(s),Nt=t(_o,`, esses campos precisam ser aceitos pelo seu config e ent\xE3o enviados para a
superclasse.`),_o.forEach(s),Vs=c(e),I=l(e,"P",{});var vo=n(I);It=t(vo,"Definir um "),xo=l(vo,"CODE",{});var wl=n(xo);Tt=t(wl,"model_type"),wl.forEach(s),Ft=t(vo," para sua configura\xE7\xE3o (aqui "),No=l(vo,"CODE",{});var yl=n(No);St=t(yl,'model_type="resnet"'),yl.forEach(s),Ht=t(vo,`) n\xE3o \xE9 obrigat\xF3rio, a menos que voc\xEA queira
registrar seu modelo com as classes autom\xE1ticas (veja a \xFAltima se\xE7\xE3o).`),vo.forEach(s),Ls=c(e),Xe=l(e,"P",{});var jl=n(Xe);Bt=t(jl,`Com isso feito, voc\xEA pode facilmente criar e salvar sua configura\xE7\xE3o como faria com qualquer outra configura\xE7\xE3o de modelo da
biblioteca. Aqui est\xE1 como podemos criar uma configura\xE7\xE3o resnet50d e salv\xE1-la:`),jl.forEach(s),Gs=c(e),v(ye.$$.fragment,e),Us=c(e),P=l(e,"P",{});var _e=n(P);Vt=t(_e,"Isso salvar\xE1 um arquivo chamado "),Io=l(_e,"CODE",{});var Cl=n(Io);Lt=t(Cl,"config.json"),Cl.forEach(s),Gt=t(_e," dentro da pasta "),To=l(_e,"CODE",{});var kl=n(To);Ut=t(kl,"custom-resnet"),kl.forEach(s),Kt=t(_e,`. Voc\xEA pode ent\xE3o recarregar sua configura\xE7\xE3o com o
m\xE9todo `),Fo=l(_e,"CODE",{});var Pl=n(Fo);Jt=t(Pl,"from_pretrained"),Pl.forEach(s),Qt=t(_e,":"),_e.forEach(s),Ks=c(e),v(je.$$.fragment,e),Js=c(e),T=l(e,"P",{});var go=n(T);Wt=t(go,"Voc\xEA tamb\xE9m pode usar qualquer outro m\xE9todo da classe "),So=l(go,"CODE",{});var zl=n(So);Xt=t(zl,"PretrainedConfig"),zl.forEach(s),Yt=t(go,", como "),Ho=l(go,"CODE",{});var Al=n(Ho);Zt=t(Al,"push_to_hub()"),Al.forEach(s),er=t(go,` para
carregar diretamente sua configura\xE7\xE3o para o Hub.`),go.forEach(s),Qs=c(e),Q=l(e,"H2",{class:!0});var Ka=n(Q);ae=l(Ka,"A",{id:!0,class:!0,href:!0});var Rl=n(ae);Bo=l(Rl,"SPAN",{});var Ol=n(Bo);v(Ce.$$.fragment,Ol),Ol.forEach(s),Rl.forEach(s),or=c(Ka),Vo=l(Ka,"SPAN",{});var Ml=n(Vo);sr=t(Ml,"Escrevendo um modelo customizado"),Ml.forEach(s),Ka.forEach(s),Ws=c(e),F=l(e,"P",{});var ho=n(F);ar=t(ho,`Agora que temos nossa configura\xE7\xE3o ResNet, podemos continuar escrevendo o modelo. Na verdade, escreveremos dois: um que
extrai os recursos ocultos de um lote de imagens (como `),Lo=l(ho,"CODE",{});var Dl=n(Lo);tr=t(Dl,"BertModel"),Dl.forEach(s),rr=t(ho,`) e um que \xE9 adequado para classifica\xE7\xE3o de imagem
(como `),Go=l(ho,"CODE",{});var xl=n(Go);ir=t(xl,"BertForSequenceClassification"),xl.forEach(s),lr=t(ho,")."),ho.forEach(s),Xs=c(e),te=l(e,"P",{});var Ja=n(te);nr=t(Ja,`Como mencionamos antes, escreveremos apenas um wrapper solto do modelo para mant\xEA-lo simples para este exemplo. A \xFAnica
coisa que precisamos fazer antes de escrever esta classe \xE9 um mapa entre os tipos de bloco e as classes de bloco reais. Ent\xE3o o
modelo \xE9 definido a partir da configura\xE7\xE3o passando tudo para a classe `),Uo=l(Ja,"CODE",{});var Nl=n(Uo);dr=t(Nl,"ResNet"),Nl.forEach(s),mr=t(Ja,":"),Ja.forEach(s),Ys=c(e),v(ke.$$.fragment,e),Zs=c(e),Ye=l(e,"P",{});var Il=n(Ye);cr=t(Il,"Para o modelo que ir\xE1 classificar as imagens, vamos apenas alterar o m\xE9todo forward:"),Il.forEach(s),ea=c(e),v(Pe.$$.fragment,e),oa=c(e),C=l(e,"P",{});var L=n(C);pr=t(L,"Em ambos os casos, observe como herdamos de "),Ko=l(L,"CODE",{});var Tl=n(Ko);ur=t(Tl,"PreTrainedModel"),Tl.forEach(s),fr=t(L," e chamamos a inicializa\xE7\xE3o da superclasse com o "),Jo=l(L,"CODE",{});var Fl=n(Jo);_r=t(Fl,"config"),Fl.forEach(s),vr=t(L,`
(um pouco parecido quando voc\xEA escreve um `),Qo=l(L,"CODE",{});var Sl=n(Qo);gr=t(Sl,"torch.nn.Module"),Sl.forEach(s),hr=t(L,"). A linha que define o "),Wo=l(L,"CODE",{});var Hl=n(Wo);br=t(Hl,"config_class"),Hl.forEach(s),qr=t(L,` n\xE3o \xE9 obrigat\xF3ria, a menos que
voc\xEA deseje registrar seu modelo com as classes autom\xE1ticas (consulte a \xFAltima se\xE7\xE3o).`),L.forEach(s),sa=c(e),v(re.$$.fragment,e),aa=c(e),S=l(e,"P",{});var bo=n(S);$r=t(bo,`Voc\xEA pode fazer com que seu modelo retorne o que voc\xEA quiser,por\xE9m retornando um dicion\xE1rio como fizemos para
`),Xo=l(bo,"CODE",{});var Bl=n(Xo);Er=t(Bl,"ResnetModelForImageClassification"),Bl.forEach(s),wr=t(bo,`, com a fun\xE7\xE3o de perda inclu\xEDda quando os r\xF3tulos s\xE3o passados, vai tornar seu modelo diretamente
utiliz\xE1vel dentro da classe `),Yo=l(bo,"CODE",{});var Vl=n(Yo);yr=t(Vl,"Trainer"),Vl.forEach(s),jr=t(bo,`. Voc\xEA pode usar outro formato de sa\xEDda, desde que esteja planejando usar seu pr\xF3prio
la\xE7o de treinamento ou outra biblioteca para treinamento.`),bo.forEach(s),ta=c(e),Ze=l(e,"P",{});var Ll=n(Ze);Cr=t(Ll,"Agora que temos nossa classe do modelo, vamos criar uma:"),Ll.forEach(s),ra=c(e),v(ze.$$.fragment,e),ia=c(e),z=l(e,"P",{});var ve=n(z);kr=t(ve,"Novamente, voc\xEA pode usar qualquer um dos m\xE9todos do "),Zo=l(ve,"CODE",{});var Gl=n(Zo);Pr=t(Gl,"PreTrainedModel"),Gl.forEach(s),zr=t(ve,", como "),es=l(ve,"CODE",{});var Ul=n(es);Ar=t(Ul,"save_pretrained()"),Ul.forEach(s),Rr=t(ve,` ou
`),os=l(ve,"CODE",{});var Kl=n(os);Or=t(Kl,"push_to_hub()"),Kl.forEach(s),Mr=t(ve,`. Usaremos o segundo na pr\xF3xima se\xE7\xE3o e veremos como enviar os pesos e
o c\xF3digo do nosso modelo. Mas primeiro, vamos carregar alguns pesos pr\xE9-treinados dentro do nosso modelo.`),ve.forEach(s),la=c(e),eo=l(e,"P",{});var Jl=n(eo);Dr=t(Jl,`Em seu pr\xF3prio caso de uso, voc\xEA provavelmente estar\xE1 treinando seu modelo customizado em seus pr\xF3prios dados. Para este tutorial ser r\xE1pido,
usaremos a vers\xE3o pr\xE9-treinada do resnet50d. Como nosso modelo \xE9 apenas um wrapper em torno dele, ser\xE1
f\xE1cil de transferir esses pesos:`),Jl.forEach(s),na=c(e),v(Ae.$$.fragment,e),da=c(e),H=l(e,"P",{});var qo=n(H);xr=t(qo,"Agora vamos ver como ter certeza de que quando fazemos "),ss=l(qo,"CODE",{});var Ql=n(ss);Nr=t(Ql,"save_pretrained()"),Ql.forEach(s),Ir=t(qo," ou "),as=l(qo,"CODE",{});var Wl=n(as);Tr=t(Wl,"push_to_hub()"),Wl.forEach(s),Fr=t(qo,`, o
c\xF3digo do modelo \xE9 salvo.`),qo.forEach(s),ma=c(e),W=l(e,"H2",{class:!0});var Qa=n(W);ie=l(Qa,"A",{id:!0,class:!0,href:!0});var Xl=n(ie);ts=l(Xl,"SPAN",{});var Yl=n(ts);v(Re.$$.fragment,Yl),Yl.forEach(s),Xl.forEach(s),Sr=c(Qa),rs=l(Qa,"SPAN",{});var Zl=n(rs);Hr=t(Zl,"Enviando o c\xF3digo para o Hub"),Zl.forEach(s),Qa.forEach(s),ca=c(e),v(le.$$.fragment,e),pa=c(e),E=l(e,"P",{});var j=n(E);Br=t(j,"Primeiro, certifique-se de que seu modelo esteja totalmente definido em um arquivo "),is=l(j,"CODE",{});var en=n(is);Vr=t(en,".py"),en.forEach(s),Lr=t(j,`. Ele pode contar com importa\xE7\xF5es relativas para alguns outros arquivos
desde que todos os arquivos estejam no mesmo diret\xF3rio (ainda n\xE3o suportamos subm\xF3dulos para este recurso). Para o nosso exemplo,
vamos definir um arquivo `),ls=l(j,"CODE",{});var on=n(ls);Gr=t(on,"modeling_resnet.py"),on.forEach(s),Ur=t(j," e um arquivo "),ns=l(j,"CODE",{});var sn=n(ns);Kr=t(sn,"configuration_resnet.py"),sn.forEach(s),Jr=t(j,` em uma pasta no
diret\xF3rio de trabalho atual chamado `),ds=l(j,"CODE",{});var an=n(ds);Qr=t(an,"resnet_model"),an.forEach(s),Wr=t(j,". O arquivo de configura\xE7\xE3o cont\xE9m o c\xF3digo para "),ms=l(j,"CODE",{});var tn=n(ms);Xr=t(tn,"ResnetConfig"),tn.forEach(s),Yr=t(j,` e o arquivo de modelagem
cont\xE9m o c\xF3digo do `),cs=l(j,"CODE",{});var rn=n(cs);Zr=t(rn,"ResnetModel"),rn.forEach(s),ei=t(j," e "),ps=l(j,"CODE",{});var ln=n(ps);oi=t(ln,"ResnetModelForImageClassification"),ln.forEach(s),si=t(j,"."),j.forEach(s),ua=c(e),v(Oe.$$.fragment,e),fa=c(e),B=l(e,"P",{});var $o=n(B);ai=t($o,"O "),us=l($o,"CODE",{});var nn=n(us);ti=t(nn,"__init__.py"),nn.forEach(s),ri=t($o," pode estar vazio, apenas est\xE1 l\xE1 para que o Python detecte que o "),fs=l($o,"CODE",{});var dn=n(fs);ii=t(dn,"resnet_model"),dn.forEach(s),li=t($o," possa ser usado como um m\xF3dulo."),$o.forEach(s),_a=c(e),v(ne.$$.fragment,e),va=c(e),oo=l(e,"P",{});var mn=n(oo);ni=t(mn,"Observe que voc\xEA pode reutilizar (ou subclasse) uma configura\xE7\xE3o/modelo existente."),mn.forEach(s),ga=c(e),so=l(e,"P",{});var cn=n(so);di=t(cn,`Para compartilhar seu modelo com a comunidade, siga estas etapas: primeiro importe o modelo ResNet e a configura\xE7\xE3o do
arquivos criados:`),cn.forEach(s),ha=c(e),v(Me.$$.fragment,e),ba=c(e),de=l(e,"P",{});var Wa=n(de);mi=t(Wa,"Ent\xE3o voc\xEA tem que dizer \xE0 biblioteca que deseja copiar os arquivos de c\xF3digo desses objetos ao usar o "),_s=l(Wa,"CODE",{});var pn=n(_s);ci=t(pn,"save_pretrained"),pn.forEach(s),pi=t(Wa,`
e registr\xE1-los corretamente com uma determinada classe autom\xE1ticas (especialmente para modelos), basta executar:`),Wa.forEach(s),qa=c(e),v(De.$$.fragment,e),$a=c(e),me=l(e,"P",{});var Xa=n(me);ui=t(Xa,`Observe que n\xE3o h\xE1 necessidade de especificar uma classe autom\xE1tica para a configura\xE7\xE3o (h\xE1 apenas uma classe autom\xE1tica,
`),vs=l(Xa,"CODE",{});var un=n(vs);fi=t(un,"AutoConfig"),un.forEach(s),_i=t(Xa,`), mas \xE9 diferente para os modelos. Seu modelo customizado pode ser adequado para muitas tarefas diferentes, ent\xE3o voc\xEA
tem que especificar qual das classes autom\xE1ticas \xE9 a correta para o seu modelo.`),Xa.forEach(s),Ea=c(e),ao=l(e,"P",{});var fn=n(ao);vi=t(fn,"Em seguida, vamos criar a configura\xE7\xE3o e os modelos como fizemos antes:"),fn.forEach(s),wa=c(e),v(xe.$$.fragment,e),ya=c(e),to=l(e,"P",{});var _n=n(to);gi=t(_n,"Agora para enviar o modelo para o Hub, certifique-se de estar logado. Ou execute no seu terminal:"),_n.forEach(s),ja=c(e),v(Ne.$$.fragment,e),Ca=c(e),ro=l(e,"P",{});var vn=n(ro);hi=t(vn,"ou a partir do notebook:"),vn.forEach(s),ka=c(e),v(Ie.$$.fragment,e),Pa=c(e),io=l(e,"P",{});var gn=n(io);bi=t(gn,"Voc\xEA pode ent\xE3o enviar para seu pr\xF3prio namespace (ou uma organiza\xE7\xE3o da qual voc\xEA \xE9 membro) assim:"),gn.forEach(s),za=c(e),v(Te.$$.fragment,e),Aa=c(e),A=l(e,"P",{});var ge=n(A);qi=t(ge,`Al\xE9m dos pesos do modelo e da configura\xE7\xE3o no formato json, isso tamb\xE9m copiou o modelo e
configura\xE7\xE3o `),gs=l(ge,"CODE",{});var hn=n(gs);$i=t(hn,".py"),hn.forEach(s),Ei=t(ge," na pasta "),hs=l(ge,"CODE",{});var bn=n(hs);wi=t(bn,"custom-resnet50d"),bn.forEach(s),yi=t(ge,` e carregou o resultado para o Hub. Voc\xEA pode conferir o resultado
neste `),Fe=l(ge,"A",{href:!0,rel:!0});var qn=n(Fe);ji=t(qn,"reposit\xF3rio de modelos"),qn.forEach(s),Ci=t(ge,"."),ge.forEach(s),Ra=c(e),ce=l(e,"P",{});var Ya=n(ce);ki=t(Ya,"Consulte o "),lo=l(Ya,"A",{href:!0});var $n=n(lo);Pi=t($n,"tutorial de compartilhamento"),$n.forEach(s),zi=t(Ya," para obter mais informa\xE7\xF5es sobre o m\xE9todo push_to_hub."),Ya.forEach(s),Oa=c(e),X=l(e,"H2",{class:!0});var Za=n(X);pe=l(Za,"A",{id:!0,class:!0,href:!0});var En=n(pe);bs=l(En,"SPAN",{});var wn=n(bs);v(Se.$$.fragment,wn),wn.forEach(s),En.forEach(s),Ai=c(Za),qs=l(Za,"SPAN",{});var yn=n(qs);Ri=t(yn,"Usando um modelo com c\xF3digo customizado"),yn.forEach(s),Za.forEach(s),Ma=c(e),R=l(e,"P",{});var he=n(R);Oi=t(he,`Voc\xEA pode usar qualquer configura\xE7\xE3o, modelo ou tokenizador com arquivos de c\xF3digo customizados em seu reposit\xF3rio com as classes autom\xE1ticas e
o m\xE9todo `),$s=l(he,"CODE",{});var jn=n($s);Mi=t(jn,"from_pretrained"),jn.forEach(s),Di=t(he,". Todos os arquivos e c\xF3digos carregados no Hub s\xE3o verificados quanto a malware (consulte a documenta\xE7\xE3o de "),He=l(he,"A",{href:!0,rel:!0});var Cn=n(He);xi=t(Cn,"Seguran\xE7a do Hub"),Cn.forEach(s),Ni=t(he,` para obter mais informa\xE7\xF5es), mas voc\xEA ainda deve
revisar o c\xF3digo do modelo e o autor para evitar a execu\xE7\xE3o de c\xF3digo malicioso em sua m\xE1quina. Defina `),Es=l(he,"CODE",{});var kn=n(Es);Ii=t(kn,"trust_remote_code=True"),kn.forEach(s),Ti=t(he,` para usar
um modelo com c\xF3digo customizado:`),he.forEach(s),Da=c(e),v(Be.$$.fragment,e),xa=c(e),ue=l(e,"P",{});var et=n(ue);Fi=t(et,"Tamb\xE9m \xE9 fortemente recomendado passar um hash de confirma\xE7\xE3o como uma "),ws=l(et,"CODE",{});var Pn=n(ws);Si=t(Pn,"revis\xE3o"),Pn.forEach(s),Hi=t(et,` para garantir que o autor dos modelos n\xE3o
atualize o c\xF3digo com novas linhas maliciosas (a menos que voc\xEA confie totalmente nos autores dos modelos).`),et.forEach(s),Na=c(e),v(Ve.$$.fragment,e),Ia=c(e),no=l(e,"P",{});var zn=n(no);Bi=t(zn,`Observe que ao navegar no hist\xF3rico de commits do reposit\xF3rio do modelo no Hub, h\xE1 um bot\xE3o para copiar facilmente o commit
hash de qualquer commit.`),zn.forEach(s),Ta=c(e),Y=l(e,"H2",{class:!0});var ot=n(Y);fe=l(ot,"A",{id:!0,class:!0,href:!0});var An=n(fe);ys=l(An,"SPAN",{});var Rn=n(ys);v(Le.$$.fragment,Rn),Rn.forEach(s),An.forEach(s),Vi=c(ot),js=l(ot,"SPAN",{});var On=n(js);Li=t(On,"Registrando um modelo com c\xF3digo customizado para as classes autom\xE1ticas"),On.forEach(s),ot.forEach(s),Fa=c(e),mo=l(e,"P",{});var Mn=n(mo);Gi=t(Mn,`Se voc\xEA estiver escrevendo uma biblioteca que estende \u{1F917} Transformers, talvez queira estender as classes autom\xE1ticas para incluir seus pr\xF3prios
modelos. Isso \xE9 diferente de enviar o c\xF3digo para o Hub no sentido de que os usu\xE1rios precisar\xE3o importar sua biblioteca para
obter os modelos customizados (ao contr\xE1rio de baixar automaticamente o c\xF3digo do modelo do Hub).`),Mn.forEach(s),Sa=c(e),V=l(e,"P",{});var Eo=n(V);Ui=t(Eo,"Desde que sua configura\xE7\xE3o tenha um atributo "),Cs=l(Eo,"CODE",{});var Dn=n(Cs);Ki=t(Dn,"model_type"),Dn.forEach(s),Ji=t(Eo,` diferente dos tipos de modelo existentes e que as classes do seu modelo
tenha os atributos `),ks=l(Eo,"CODE",{});var xn=n(ks);Qi=t(xn,"config_class"),xn.forEach(s),Wi=t(Eo," corretos, voc\xEA pode simplesmente adicion\xE1-los \xE0s classes autom\xE1ticas assim:"),Eo.forEach(s),Ha=c(e),v(Ge.$$.fragment,e),Ba=c(e),O=l(e,"P",{});var be=n(O);Xi=t(be,"Observe que o primeiro argumento usado ao registrar sua configura\xE7\xE3o customizada para "),Ps=l(be,"CODE",{});var Nn=n(Ps);Yi=t(Nn,"AutoConfig"),Nn.forEach(s),Zi=t(be," precisa corresponder ao "),zs=l(be,"CODE",{});var In=n(zs);el=t(In,"model_type"),In.forEach(s),ol=t(be,`
de sua configura\xE7\xE3o customizada. E o primeiro argumento usado ao registrar seus modelos customizados, para qualquer necessidade de classe de modelo autom\xE1tico
deve corresponder ao `),As=l(be,"CODE",{});var Tn=n(As);sl=t(Tn,"config_class"),Tn.forEach(s),al=t(be," desses modelos."),be.forEach(s),this.h()},h(){p(u,"name","hf:doc:metadata"),p(u,"content",JSON.stringify(Jn)),p($,"id","compartilhando-modelos-customizados"),p($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p($,"href","#compartilhando-modelos-customizados"),p(f,"class","relative group"),p(qe,"href","https://github.com/rwightman/pytorch-image-models"),p(qe,"rel","nofollow"),p(oe,"id","escrevendo-uma-configurao-customizada"),p(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(oe,"href","#escrevendo-uma-configurao-customizada"),p(U,"class","relative group"),p(ae,"id","escrevendo-um-modelo-customizado"),p(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ae,"href","#escrevendo-um-modelo-customizado"),p(Q,"class","relative group"),p(ie,"id","enviando-o-cdigo-para-o-hub"),p(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ie,"href","#enviando-o-cdigo-para-o-hub"),p(W,"class","relative group"),p(Fe,"href","https://huggingface.co/sgugger/custom-resnet50d"),p(Fe,"rel","nofollow"),p(lo,"href","model_sharing"),p(pe,"id","usando-um-modelo-com-cdigo-customizado"),p(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(pe,"href","#usando-um-modelo-com-cdigo-customizado"),p(X,"class","relative group"),p(He,"href","https://huggingface.co/docs/hub/security#malware-scanning"),p(He,"rel","nofollow"),p(fe,"id","registrando-um-modelo-com-cdigo-customizado-para-as-classes-automticas"),p(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(fe,"href","#registrando-um-modelo-com-cdigo-customizado-para-as-classes-automticas"),p(Y,"class","relative group")},m(e,r){o(document.head,u),d(e,y,r),d(e,f,r),o(f,$),o($,G),g(k,G,null),o(f,M),o(f,ee),o(ee,st),d(e,Ms,r),d(e,Ke,r),o(Ke,at),d(e,Ds,r),d(e,Je,r),o(Je,tt),d(e,xs,r),d(e,D,r),o(D,rt),o(D,qe),o(qe,it),o(D,lt),o(D,yo),o(yo,nt),o(D,dt),d(e,Ns,r),d(e,U,r),o(U,oe),o(oe,jo),g($e,jo,null),o(U,mt),o(U,Co),o(Co,ct),d(e,Is,r),d(e,se,r),o(se,pt),o(se,ko),o(ko,ut),o(se,ft),d(e,Ts,r),d(e,Qe,r),o(Qe,_t),d(e,Fs,r),g(Ee,e,r),d(e,Ss,r),d(e,We,r),o(We,vt),d(e,Hs,r),d(e,x,r),o(x,we),o(we,gt),o(we,Po),o(Po,ht),o(we,bt),o(x,qt),o(x,K),o(K,$t),o(K,zo),o(zo,Et),o(K,wt),o(K,Ao),o(Ao,yt),o(K,jt),o(x,Ct),o(x,J),o(J,kt),o(J,Ro),o(Ro,Pt),o(J,zt),o(J,Oo),o(Oo,At),o(J,Rt),d(e,Bs,r),d(e,N,r),o(N,Ot),o(N,Mo),o(Mo,Mt),o(N,Dt),o(N,Do),o(Do,xt),o(N,Nt),d(e,Vs,r),d(e,I,r),o(I,It),o(I,xo),o(xo,Tt),o(I,Ft),o(I,No),o(No,St),o(I,Ht),d(e,Ls,r),d(e,Xe,r),o(Xe,Bt),d(e,Gs,r),g(ye,e,r),d(e,Us,r),d(e,P,r),o(P,Vt),o(P,Io),o(Io,Lt),o(P,Gt),o(P,To),o(To,Ut),o(P,Kt),o(P,Fo),o(Fo,Jt),o(P,Qt),d(e,Ks,r),g(je,e,r),d(e,Js,r),d(e,T,r),o(T,Wt),o(T,So),o(So,Xt),o(T,Yt),o(T,Ho),o(Ho,Zt),o(T,er),d(e,Qs,r),d(e,Q,r),o(Q,ae),o(ae,Bo),g(Ce,Bo,null),o(Q,or),o(Q,Vo),o(Vo,sr),d(e,Ws,r),d(e,F,r),o(F,ar),o(F,Lo),o(Lo,tr),o(F,rr),o(F,Go),o(Go,ir),o(F,lr),d(e,Xs,r),d(e,te,r),o(te,nr),o(te,Uo),o(Uo,dr),o(te,mr),d(e,Ys,r),g(ke,e,r),d(e,Zs,r),d(e,Ye,r),o(Ye,cr),d(e,ea,r),g(Pe,e,r),d(e,oa,r),d(e,C,r),o(C,pr),o(C,Ko),o(Ko,ur),o(C,fr),o(C,Jo),o(Jo,_r),o(C,vr),o(C,Qo),o(Qo,gr),o(C,hr),o(C,Wo),o(Wo,br),o(C,qr),d(e,sa,r),g(re,e,r),d(e,aa,r),d(e,S,r),o(S,$r),o(S,Xo),o(Xo,Er),o(S,wr),o(S,Yo),o(Yo,yr),o(S,jr),d(e,ta,r),d(e,Ze,r),o(Ze,Cr),d(e,ra,r),g(ze,e,r),d(e,ia,r),d(e,z,r),o(z,kr),o(z,Zo),o(Zo,Pr),o(z,zr),o(z,es),o(es,Ar),o(z,Rr),o(z,os),o(os,Or),o(z,Mr),d(e,la,r),d(e,eo,r),o(eo,Dr),d(e,na,r),g(Ae,e,r),d(e,da,r),d(e,H,r),o(H,xr),o(H,ss),o(ss,Nr),o(H,Ir),o(H,as),o(as,Tr),o(H,Fr),d(e,ma,r),d(e,W,r),o(W,ie),o(ie,ts),g(Re,ts,null),o(W,Sr),o(W,rs),o(rs,Hr),d(e,ca,r),g(le,e,r),d(e,pa,r),d(e,E,r),o(E,Br),o(E,is),o(is,Vr),o(E,Lr),o(E,ls),o(ls,Gr),o(E,Ur),o(E,ns),o(ns,Kr),o(E,Jr),o(E,ds),o(ds,Qr),o(E,Wr),o(E,ms),o(ms,Xr),o(E,Yr),o(E,cs),o(cs,Zr),o(E,ei),o(E,ps),o(ps,oi),o(E,si),d(e,ua,r),g(Oe,e,r),d(e,fa,r),d(e,B,r),o(B,ai),o(B,us),o(us,ti),o(B,ri),o(B,fs),o(fs,ii),o(B,li),d(e,_a,r),g(ne,e,r),d(e,va,r),d(e,oo,r),o(oo,ni),d(e,ga,r),d(e,so,r),o(so,di),d(e,ha,r),g(Me,e,r),d(e,ba,r),d(e,de,r),o(de,mi),o(de,_s),o(_s,ci),o(de,pi),d(e,qa,r),g(De,e,r),d(e,$a,r),d(e,me,r),o(me,ui),o(me,vs),o(vs,fi),o(me,_i),d(e,Ea,r),d(e,ao,r),o(ao,vi),d(e,wa,r),g(xe,e,r),d(e,ya,r),d(e,to,r),o(to,gi),d(e,ja,r),g(Ne,e,r),d(e,Ca,r),d(e,ro,r),o(ro,hi),d(e,ka,r),g(Ie,e,r),d(e,Pa,r),d(e,io,r),o(io,bi),d(e,za,r),g(Te,e,r),d(e,Aa,r),d(e,A,r),o(A,qi),o(A,gs),o(gs,$i),o(A,Ei),o(A,hs),o(hs,wi),o(A,yi),o(A,Fe),o(Fe,ji),o(A,Ci),d(e,Ra,r),d(e,ce,r),o(ce,ki),o(ce,lo),o(lo,Pi),o(ce,zi),d(e,Oa,r),d(e,X,r),o(X,pe),o(pe,bs),g(Se,bs,null),o(X,Ai),o(X,qs),o(qs,Ri),d(e,Ma,r),d(e,R,r),o(R,Oi),o(R,$s),o($s,Mi),o(R,Di),o(R,He),o(He,xi),o(R,Ni),o(R,Es),o(Es,Ii),o(R,Ti),d(e,Da,r),g(Be,e,r),d(e,xa,r),d(e,ue,r),o(ue,Fi),o(ue,ws),o(ws,Si),o(ue,Hi),d(e,Na,r),g(Ve,e,r),d(e,Ia,r),d(e,no,r),o(no,Bi),d(e,Ta,r),d(e,Y,r),o(Y,fe),o(fe,ys),g(Le,ys,null),o(Y,Vi),o(Y,js),o(js,Li),d(e,Fa,r),d(e,mo,r),o(mo,Gi),d(e,Sa,r),d(e,V,r),o(V,Ui),o(V,Cs),o(Cs,Ki),o(V,Ji),o(V,ks),o(ks,Qi),o(V,Wi),d(e,Ha,r),g(Ge,e,r),d(e,Ba,r),d(e,O,r),o(O,Xi),o(O,Ps),o(Ps,Yi),o(O,Zi),o(O,zs),o(zs,el),o(O,ol),o(O,As),o(As,sl),o(O,al),Va=!0},p(e,[r]){const Ue={};r&2&&(Ue.$$scope={dirty:r,ctx:e}),re.$set(Ue);const Rs={};r&2&&(Rs.$$scope={dirty:r,ctx:e}),le.$set(Rs);const Os={};r&2&&(Os.$$scope={dirty:r,ctx:e}),ne.$set(Os)},i(e){Va||(h(k.$$.fragment,e),h($e.$$.fragment,e),h(Ee.$$.fragment,e),h(ye.$$.fragment,e),h(je.$$.fragment,e),h(Ce.$$.fragment,e),h(ke.$$.fragment,e),h(Pe.$$.fragment,e),h(re.$$.fragment,e),h(ze.$$.fragment,e),h(Ae.$$.fragment,e),h(Re.$$.fragment,e),h(le.$$.fragment,e),h(Oe.$$.fragment,e),h(ne.$$.fragment,e),h(Me.$$.fragment,e),h(De.$$.fragment,e),h(xe.$$.fragment,e),h(Ne.$$.fragment,e),h(Ie.$$.fragment,e),h(Te.$$.fragment,e),h(Se.$$.fragment,e),h(Be.$$.fragment,e),h(Ve.$$.fragment,e),h(Le.$$.fragment,e),h(Ge.$$.fragment,e),Va=!0)},o(e){b(k.$$.fragment,e),b($e.$$.fragment,e),b(Ee.$$.fragment,e),b(ye.$$.fragment,e),b(je.$$.fragment,e),b(Ce.$$.fragment,e),b(ke.$$.fragment,e),b(Pe.$$.fragment,e),b(re.$$.fragment,e),b(ze.$$.fragment,e),b(Ae.$$.fragment,e),b(Re.$$.fragment,e),b(le.$$.fragment,e),b(Oe.$$.fragment,e),b(ne.$$.fragment,e),b(Me.$$.fragment,e),b(De.$$.fragment,e),b(xe.$$.fragment,e),b(Ne.$$.fragment,e),b(Ie.$$.fragment,e),b(Te.$$.fragment,e),b(Se.$$.fragment,e),b(Be.$$.fragment,e),b(Ve.$$.fragment,e),b(Le.$$.fragment,e),b(Ge.$$.fragment,e),Va=!1},d(e){s(u),e&&s(y),e&&s(f),q(k),e&&s(Ms),e&&s(Ke),e&&s(Ds),e&&s(Je),e&&s(xs),e&&s(D),e&&s(Ns),e&&s(U),q($e),e&&s(Is),e&&s(se),e&&s(Ts),e&&s(Qe),e&&s(Fs),q(Ee,e),e&&s(Ss),e&&s(We),e&&s(Hs),e&&s(x),e&&s(Bs),e&&s(N),e&&s(Vs),e&&s(I),e&&s(Ls),e&&s(Xe),e&&s(Gs),q(ye,e),e&&s(Us),e&&s(P),e&&s(Ks),q(je,e),e&&s(Js),e&&s(T),e&&s(Qs),e&&s(Q),q(Ce),e&&s(Ws),e&&s(F),e&&s(Xs),e&&s(te),e&&s(Ys),q(ke,e),e&&s(Zs),e&&s(Ye),e&&s(ea),q(Pe,e),e&&s(oa),e&&s(C),e&&s(sa),q(re,e),e&&s(aa),e&&s(S),e&&s(ta),e&&s(Ze),e&&s(ra),q(ze,e),e&&s(ia),e&&s(z),e&&s(la),e&&s(eo),e&&s(na),q(Ae,e),e&&s(da),e&&s(H),e&&s(ma),e&&s(W),q(Re),e&&s(ca),q(le,e),e&&s(pa),e&&s(E),e&&s(ua),q(Oe,e),e&&s(fa),e&&s(B),e&&s(_a),q(ne,e),e&&s(va),e&&s(oo),e&&s(ga),e&&s(so),e&&s(ha),q(Me,e),e&&s(ba),e&&s(de),e&&s(qa),q(De,e),e&&s($a),e&&s(me),e&&s(Ea),e&&s(ao),e&&s(wa),q(xe,e),e&&s(ya),e&&s(to),e&&s(ja),q(Ne,e),e&&s(Ca),e&&s(ro),e&&s(ka),q(Ie,e),e&&s(Pa),e&&s(io),e&&s(za),q(Te,e),e&&s(Aa),e&&s(A),e&&s(Ra),e&&s(ce),e&&s(Oa),e&&s(X),q(Se),e&&s(Ma),e&&s(R),e&&s(Da),q(Be,e),e&&s(xa),e&&s(ue),e&&s(Na),q(Ve,e),e&&s(Ia),e&&s(no),e&&s(Ta),e&&s(Y),q(Le),e&&s(Fa),e&&s(mo),e&&s(Sa),e&&s(V),e&&s(Ha),q(Ge,e),e&&s(Ba),e&&s(O)}}}const Jn={local:"compartilhando-modelos-customizados",sections:[{local:"escrevendo-uma-configurao-customizada",title:"Escrevendo uma configura\xE7\xE3o customizada"},{local:"escrevendo-um-modelo-customizado",title:"Escrevendo um modelo customizado"},{local:"enviando-o-cdigo-para-o-hub",title:"Enviando o c\xF3digo para o Hub"},{local:"usando-um-modelo-com-cdigo-customizado",title:"Usando um modelo com c\xF3digo customizado"},{local:"registrando-um-modelo-com-cdigo-customizado-para-as-classes-automticas",title:"Registrando um modelo com c\xF3digo customizado para as classes autom\xE1ticas"}],title:"Compartilhando modelos customizados"};function Qn(Z){return Vn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ed extends Fn{constructor(u){super();Sn(this,u,Qn,Kn,Hn,{})}}export{ed as default,Jn as metadata};
