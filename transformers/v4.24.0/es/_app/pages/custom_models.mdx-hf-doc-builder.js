import{S as yc,i as $c,s as qc,e as r,k as d,w as _,t as a,M as wc,c as n,d as s,m as p,a as i,x as g,h as t,b as m,G as o,g as c,y as h,q as b,o as v,B as E,v as Cc}from"../chunks/vendor-hf-doc-builder.js";import{T as Tn}from"../chunks/Tip-hf-doc-builder.js";import{I as wo}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C}from"../chunks/CodeBlock-hf-doc-builder.js";function jc(ae){let u,j;return{c(){u=r("p"),j=a("Si tu modelo es muy similar a un modelo dentro de la biblioteca, puedes reutilizar la misma configuraci\xF3n de ese modelo.")},l(f){u=n(f,"P",{});var y=i(u);j=t(y,"Si tu modelo es muy similar a un modelo dentro de la biblioteca, puedes reutilizar la misma configuraci\xF3n de ese modelo."),y.forEach(s)},m(f,y){c(f,u,y),o(u,j)},d(f){f&&s(u)}}}function kc(ae){let u,j,f,y,A;return{c(){u=r("p"),j=a("Esta "),f=r("em"),y=a("API"),A=a(" es experimental y puede tener algunos cambios leves en las pr\xF3ximas versiones.")},l(q){u=n(q,"P",{});var w=i(u);j=t(w,"Esta "),f=n(w,"EM",{});var I=i(f);y=t(I,"API"),I.forEach(s),A=t(w," es experimental y puede tener algunos cambios leves en las pr\xF3ximas versiones."),w.forEach(s)},m(q,w){c(q,u,w),o(u,j),o(u,f),o(f,y),o(u,A)},d(q){q&&s(u)}}}function Pc(ae){let u,j,f,y,A;return{c(){u=r("p"),j=a(`Si copias archivos del modelo desde la biblioteca, deber\xE1s reemplazar todas las importaciones relativas en la parte superior
del archivo para importarlos desde el paquete `),f=r("code"),y=a("transformers"),A=a(".")},l(q){u=n(q,"P",{});var w=i(u);j=t(w,`Si copias archivos del modelo desde la biblioteca, deber\xE1s reemplazar todas las importaciones relativas en la parte superior
del archivo para importarlos desde el paquete `),f=n(w,"CODE",{});var I=i(f);y=t(I,"transformers"),I.forEach(s),A=t(w,"."),w.forEach(s)},m(q,w){c(q,u,w),o(u,j),o(u,f),o(f,y),o(u,A)},d(q){q&&s(u)}}}function zc(ae){let u,j,f,y,A,q,w,I,ft,Bs,Ze,_t,Us,eo,gt,Gs,F,ht,je,bt,vt,Co,Et,yt,Ks,X,te,jo,ke,$t,ko,qt,Vs,le,wt,Po,Ct,jt,Js,oo,kt,Qs,Pe,Ws,so,Pt,Xs,x,ze,zt,zo,Rt,At,Mt,L,Ot,Ro,Dt,Tt,Ao,Nt,It,Mo,Lt,Ft,xt,Y,St,Oo,Ht,Bt,Do,Ut,Gt,Ys,P,Kt,To,Vt,Jt,No,Qt,Wt,Io,Xt,Yt,Lo,Zt,el,Zs,S,ol,Fo,sl,al,xo,tl,ll,ea,ao,rl,oa,Re,sa,M,nl,So,il,cl,Ho,dl,pl,Bo,ul,ml,aa,Ae,ta,H,fl,Uo,_l,gl,Go,hl,bl,la,Z,re,Ko,Me,vl,Vo,El,ra,B,yl,Jo,$l,ql,Qo,wl,Cl,na,U,jl,Wo,kl,Pl,Xo,zl,Rl,ia,Oe,ca,ne,Al,Yo,Ml,Ol,da,De,pa,z,Dl,Zo,Tl,Nl,es,Il,Ll,os,Fl,xl,ss,Sl,Hl,ua,ie,ma,O,Bl,as,Ul,Gl,ts,Kl,Vl,ls,Jl,Ql,fa,to,Wl,_a,Te,ga,D,Xl,rs,Yl,Zl,ns,er,or,is,sr,ar,ha,lo,tr,ba,Ne,va,G,lr,cs,rr,nr,ds,ir,cr,Ea,ee,ce,ps,Ie,dr,us,pr,ya,de,$a,$,ur,ms,mr,fr,fs,_r,gr,_s,hr,br,gs,vr,Er,hs,yr,$r,bs,qr,wr,vs,Cr,jr,qa,Le,wa,K,kr,Es,Pr,zr,ys,Rr,Ar,Ca,pe,ja,ro,Mr,ka,no,Or,Pa,Fe,za,ue,Dr,$s,Tr,Nr,Ra,xe,Aa,me,Ir,qs,Lr,Fr,Ma,io,xr,Oa,Se,Da,co,Sr,Ta,He,Na,fe,Hr,ws,Br,Ur,Ia,Be,La,po,Gr,Fa,Ue,xa,T,Kr,Cs,Vr,Jr,js,Qr,Wr,Ge,Xr,Yr,Sa,_e,Zr,uo,en,on,Ha,oe,ge,ks,Ke,sn,Ps,an,Ba,R,tn,zs,ln,rn,Rs,nn,cn,Ve,dn,pn,As,un,mn,Ua,Je,Ga,he,fn,Ms,_n,gn,Ka,Qe,Va,be,hn,Os,bn,vn,Ja,se,ve,Ds,We,En,Ts,yn,Qa,mo,$n,Wa,V,qn,Ns,wn,Cn,Is,jn,kn,Xa,Xe,Ya,N,Pn,Ls,zn,Rn,Fs,An,Mn,xs,On,Dn,Za;return q=new wo({}),ke=new wo({}),Pe=new C({props:{code:`from transformers import PretrainedConfig
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
        <span class="hljs-built_in">super</span>().__init__(**kwargs)`}}),Re=new C({props:{code:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d_config.save_pretrained("custom-resnet")`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d_config.save_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)`}}),Ae=new C({props:{code:'resnet50d_config = ResnetConfig.from_pretrained("custom-resnet")',highlighted:'resnet50d_config = ResnetConfig.from_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)'}}),Me=new wo({}),Oe=new C({props:{code:`from transformers import PreTrainedModel
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
        <span class="hljs-keyword">return</span> self.model.forward_features(tensor)`}}),De=new C({props:{code:`class ResnetModelForImageClassification(PreTrainedModel):
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
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;logits&quot;</span>: logits}`}}),ie=new Tn({props:{$$slots:{default:[jc]},$$scope:{ctx:ae}}}),Te=new C({props:{code:"resnet50d = ResnetModelForImageClassification(resnet50d_config)",highlighted:"resnet50d = ResnetModelForImageClassification(resnet50d_config)"}}),Ne=new C({props:{code:`import timm

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`,highlighted:`<span class="hljs-keyword">import</span> timm

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),Ie=new wo({}),de=new Tn({props:{warning:!0,$$slots:{default:[kc]},$$scope:{ctx:ae}}}),Le=new C({props:{code:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.py
    \u251C\u2500\u2500 configuration_resnet.py
    \u2514\u2500\u2500 modeling_resnet.py`,highlighted:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.<span class="hljs-keyword">py</span>
    \u251C\u2500\u2500 configuration_resnet.<span class="hljs-keyword">py</span>
    \u2514\u2500\u2500 modeling_resnet.<span class="hljs-keyword">py</span>`}}),pe=new Tn({props:{warning:!0,$$slots:{default:[Pc]},$$scope:{ctx:ae}}}),Fe=new C({props:{code:`from resnet_model.configuration_resnet import ResnetConfig
from resnet_model.modeling_resnet import ResnetModel, ResnetModelForImageClassification`,highlighted:`<span class="hljs-keyword">from</span> resnet_model.configuration_resnet <span class="hljs-keyword">import</span> ResnetConfig
<span class="hljs-keyword">from</span> resnet_model.modeling_resnet <span class="hljs-keyword">import</span> ResnetModel, ResnetModelForImageClassification`}}),xe=new C({props:{code:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class("AutoModel")
ResnetModelForImageClassification.register_for_auto_class("AutoModelForImageClassification")`,highlighted:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class(<span class="hljs-string">&quot;AutoModel&quot;</span>)
ResnetModelForImageClassification.register_for_auto_class(<span class="hljs-string">&quot;AutoModelForImageClassification&quot;</span>)`}}),Se=new C({props:{code:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),He=new C({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}}),Be=new C({props:{code:`from huggingface_hub import notebook_login

notebook_login()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),Ue=new C({props:{code:'resnet50d.push_to_hub("custom-resnet50d")',highlighted:'resnet50d.push_to_hub(<span class="hljs-string">&quot;custom-resnet50d&quot;</span>)'}}),Ke=new wo({}),Je=new C({props:{code:`from transformers import AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained("sgugger/custom-resnet50d", trust_remote_code=True)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained(<span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>)`}}),Qe=new C({props:{code:`commit_hash = "ed94a7c6247d8aedce4647f00f20de6875b5b292"
model = AutoModelForImageClassification.from_pretrained(
    "sgugger/custom-resnet50d", trust_remote_code=True, revision=commit_hash
)`,highlighted:`commit_hash = <span class="hljs-string">&quot;ed94a7c6247d8aedce4647f00f20de6875b5b292&quot;</span>
model = AutoModelForImageClassification.from_pretrained(
    <span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>, revision=commit_hash
)`}}),We=new wo({}),Xe=new C({props:{code:`from transformers import AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register("resnet", ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register(<span class="hljs-string">&quot;resnet&quot;</span>, ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification)`}}),{c(){u=r("meta"),j=d(),f=r("h1"),y=r("a"),A=r("span"),_(q.$$.fragment),w=d(),I=r("span"),ft=a("Compartir modelos personalizados"),Bs=d(),Ze=r("p"),_t=a(`La biblioteca \u{1F917} Transformers est\xE1 dise\xF1ada para ser f\xE1cilmente ampliable. Cada modelo est\xE1 completamente codificado
sin abstracci\xF3n en una subcarpeta determinada del repositorio, por lo que puedes copiar f\xE1cilmente un archivo del modelo
y ajustarlo seg\xFAn tus necesidades.`),Us=d(),eo=r("p"),gt=a(`Si est\xE1s escribiendo un modelo completamente nuevo, podr\xEDa ser m\xE1s f\xE1cil comenzar desde cero. En este tutorial, te mostraremos
c\xF3mo escribir un modelo personalizado y su configuraci\xF3n para que pueda usarse dentro de Transformers, y c\xF3mo puedes compartirlo
con la comunidad (con el c\xF3digo en el que se basa) para que cualquiera pueda usarlo, incluso si no est\xE1 presente en la biblioteca
\u{1F917} Transformers.`),Gs=d(),F=r("p"),ht=a("Ilustraremos todo esto con un modelo ResNet, envolviendo la clase ResNet de la "),je=r("a"),bt=a("biblioteca timm"),vt=a(" en un "),Co=r("code"),Et=a("PreTrainedModel"),yt=a("."),Ks=d(),X=r("h2"),te=r("a"),jo=r("span"),_(ke.$$.fragment),$t=d(),ko=r("span"),qt=a("Escribir una configuraci\xF3n personalizada"),Vs=d(),le=r("p"),wt=a(`Antes de adentrarnos en el modelo, primero escribamos su configuraci\xF3n. La configuraci\xF3n de un modelo es un objeto que
contendr\xE1 toda la informaci\xF3n necesaria para construir el modelo. Como veremos en la siguiente secci\xF3n, el modelo solo puede
tomar un `),Po=r("code"),Ct=a("config"),jt=a(" para ser inicializado, por lo que realmente necesitamos que ese objeto est\xE9 lo m\xE1s completo posible."),Js=d(),oo=r("p"),kt=a(`En nuestro ejemplo, tomaremos un par de argumentos de la clase ResNet que tal vez queramos modificar. Las diferentes
configuraciones nos dar\xE1n los diferentes tipos de ResNet que son posibles. Luego simplemente almacenamos esos argumentos
despu\xE9s de verificar la validez de algunos de ellos.`),Qs=d(),_(Pe.$$.fragment),Ws=d(),so=r("p"),Pt=a("Las tres cosas importantes que debes recordar al escribir tu propia configuraci\xF3n son las siguientes:"),Xs=d(),x=r("ul"),ze=r("li"),zt=a("tienes que heredar de "),zo=r("code"),Rt=a("PretrainedConfig"),At=a(","),Mt=d(),L=r("li"),Ot=a("el "),Ro=r("code"),Dt=a("__init__"),Tt=a(" de tu "),Ao=r("code"),Nt=a("PretrainedConfig"),It=a(" debe aceptar cualquier "),Mo=r("code"),Lt=a("kwargs"),Ft=a(","),xt=d(),Y=r("li"),St=a("esos "),Oo=r("code"),Ht=a("kwargs"),Bt=a(" deben pasarse a la superclase "),Do=r("code"),Ut=a("__init__"),Gt=a("."),Ys=d(),P=r("p"),Kt=a(`La herencia es para asegurarte de obtener toda la funcionalidad de la biblioteca \u{1F917} Transformers, mientras que las otras dos
restricciones provienen del hecho de que una `),To=r("code"),Vt=a("PretrainedConfig"),Jt=a(` tiene m\xE1s campos que los que est\xE1s configurando. Al recargar una
`),No=r("code"),Qt=a("config"),Wt=a(" con el m\xE9todo "),Io=r("code"),Xt=a("from_pretrained"),Yt=a(", esos campos deben ser aceptados por tu "),Lo=r("code"),Zt=a("config"),el=a(" y luego enviados a la superclase."),Zs=d(),S=r("p"),ol=a("Definir un "),Fo=r("code"),sl=a("model_type"),al=a(" para tu configuraci\xF3n (en este caso "),xo=r("code"),tl=a('model_type="resnet"'),ll=a(`) no es obligatorio, a menos que quieras
registrar tu modelo con las clases autom\xE1ticas (ver la \xFAltima secci\xF3n).`),ea=d(),ao=r("p"),rl=a(`Una vez hecho esto, puedes crear y guardar f\xE1cilmente tu configuraci\xF3n como lo har\xEDas con cualquier otra configuraci\xF3n de un
modelo de la biblioteca. As\xED es como podemos crear una configuraci\xF3n resnet50d y guardarla:`),oa=d(),_(Re.$$.fragment),sa=d(),M=r("p"),nl=a("Esto guardar\xE1 un archivo llamado "),So=r("code"),il=a("config.json"),cl=a(" dentro de la carpeta "),Ho=r("code"),dl=a("custom-resnet"),pl=a(`. Luego puedes volver a cargar tu configuraci\xF3n
con el m\xE9todo `),Bo=r("code"),ul=a("from_pretrained"),ml=a(":"),aa=d(),_(Ae.$$.fragment),ta=d(),H=r("p"),fl=a("Tambi\xE9n puedes usar cualquier otro m\xE9todo de la clase "),Uo=r("code"),_l=a("PretrainedConfig"),gl=a(", como "),Go=r("code"),hl=a("push_to_hub()"),bl=a(`, para cargar
directamente tu configuraci\xF3n en el Hub.`),la=d(),Z=r("h2"),re=r("a"),Ko=r("span"),_(Me.$$.fragment),vl=d(),Vo=r("span"),El=a("Escribir un modelo personalizado"),ra=d(),B=r("p"),yl=a(`Ahora que tenemos nuestra configuraci\xF3n de ResNet, podemos seguir escribiendo el modelo. En realidad escribiremos dos: una que
extrae las caracter\xEDsticas ocultas de un grupo de im\xE1genes (como `),Jo=r("code"),$l=a("BertModel"),ql=a(`) y una que es adecuada para clasificaci\xF3n de
imagenes (como `),Qo=r("code"),wl=a("BertForSequenceClassification"),Cl=a(")."),na=d(),U=r("p"),jl=a("Como mencionamos antes, solo escribiremos un envoltura ("),Wo=r("em"),kl=a("wrapper"),Pl=a(`) libre del modelo para simplificar este ejemplo. Lo \xFAnico que debemos
hacer antes de escribir esta clase es un mapeo entre los tipos de bloques y las clases de bloques reales. Luego se define el
modelo desde la configuraci\xF3n pasando todo a la clase `),Xo=r("code"),zl=a("ResNet"),Rl=a(":"),ia=d(),_(Oe.$$.fragment),ca=d(),ne=r("p"),Al=a("Para el modelo que clasificar\xE1 las im\xE1genes, solo cambiamos el m\xE9todo de avance (es decir, el m\xE9todo "),Yo=r("code"),Ml=a("forward"),Ol=a("):"),da=d(),_(De.$$.fragment),pa=d(),z=r("p"),Dl=a("En ambos casos, observa c\xF3mo heredamos de "),Zo=r("code"),Tl=a("PreTrainedModel"),Nl=a(" y llamamos a la inicializaci\xF3n de la superclase con "),es=r("code"),Il=a("config"),Ll=a(`
(un poco como cuando escribes `),os=r("code"),Fl=a("torch.nn.Module"),xl=a("). La l\xEDnea que establece "),ss=r("code"),Sl=a("config_class"),Hl=a(` no es obligatoria, a menos
que quieras registrar tu modelo con las clases autom\xE1ticas (consulta la \xFAltima secci\xF3n).`),ua=d(),_(ie.$$.fragment),ma=d(),O=r("p"),Bl=a(`Puedes hacer que tu modelo devuelva lo que quieras, pero devolver un diccionario como lo hicimos para
`),as=r("code"),Ul=a("ResnetModelForImageClassification"),Gl=a(", con el "),ts=r("code"),Kl=a("loss"),Vl=a(` incluido cuando se pasan las etiquetas, har\xE1 que tu modelo se pueda
usar directamente dentro de la clase `),ls=r("code"),Jl=a("Trainer"),Ql=a(`. Usar otro formato de salida est\xE1 bien, siempre y cuando est\xE9s planeando usar
tu propio bucle de entrenamiento u otra biblioteca para el entrenamiento.`),fa=d(),to=r("p"),Wl=a("Ahora que tenemos nuestra clase, vamos a crear un modelo:"),_a=d(),_(Te.$$.fragment),ga=d(),D=r("p"),Xl=a("Nuevamente, puedes usar cualquiera de los m\xE9todos de "),rs=r("code"),Yl=a("PreTrainedModel"),Zl=a(", como "),ns=r("code"),er=a("save_pretrained()"),or=a(` o
`),is=r("code"),sr=a("push_to_hub()"),ar=a(`. Usaremos el segundo en la siguiente secci\xF3n y veremos c\xF3mo pasar los pesos del modelo
con el c\xF3digo de nuestro modelo. Pero primero, carguemos algunos pesos previamente entrenados dentro de nuestro modelo.`),ha=d(),lo=r("p"),tr=a(`En tu caso de uso, probablemente estar\xE1s entrenando tu modelo personalizado con tus propios datos. Para ir r\xE1pido en este
tutorial, usaremos la versi\xF3n preentrenada de resnet50d. Dado que nuestro modelo es solo un envoltorio alrededor del resnet50d
original, ser\xE1 f\xE1cil transferir esos pesos:`),ba=d(),_(Ne.$$.fragment),va=d(),G=r("p"),lr=a("Ahora veamos c\xF3mo asegurarnos de que cuando hacemos "),cs=r("code"),rr=a("save_pretrained()"),nr=a(" o "),ds=r("code"),ir=a("push_to_hub()"),cr=a(`,
se guarda el c\xF3digo del modelo.`),Ea=d(),ee=r("h2"),ce=r("a"),ps=r("span"),_(Ie.$$.fragment),dr=d(),us=r("span"),pr=a("Enviar el c\xF3digo al _Hub_"),ya=d(),_(de.$$.fragment),$a=d(),$=r("p"),ur=a("Primero, aseg\xFArate de que tu modelo est\xE9 completamente definido en un archivo "),ms=r("code"),mr=a(".py"),fr=a(`. Puedes basarte en importaciones
relativas a otros archivos, siempre que todos los archivos est\xE9n en el mismo directorio (a\xFAn no admitimos subm\xF3dulos
para esta caracter\xEDstica). Para nuestro ejemplo, definiremos un archivo `),fs=r("code"),_r=a("modeling_resnet.py"),gr=a(` y un archivo
`),_s=r("code"),hr=a("configuration_resnet.py"),br=a(" en una carpeta del directorio de trabajo actual llamado "),gs=r("code"),vr=a("resnet_model"),Er=a(`. El archivo de configuraci\xF3n
contiene el c\xF3digo de `),hs=r("code"),yr=a("ResnetConfig"),$r=a(" y el archivo del modelo contiene el c\xF3digo de "),bs=r("code"),qr=a("ResnetModel"),wr=a(` y
`),vs=r("code"),Cr=a("ResnetModelForImageClassification"),jr=a("."),qa=d(),_(Le.$$.fragment),wa=d(),K=r("p"),kr=a("El "),Es=r("code"),Pr=a("__init__.py"),zr=a("  puede estar vac\xEDo, solo est\xE1 ah\xED para que Python detecte que "),ys=r("code"),Rr=a("resnet_model"),Ar=a(" se puede usar como un m\xF3dulo."),Ca=d(),_(pe.$$.fragment),ja=d(),ro=r("p"),Mr=a("Ten en cuenta que puedes reutilizar (o subclasificar) una configuraci\xF3n o modelo existente."),ka=d(),no=r("p"),Or=a(`Para compartir tu modelo con la comunidad, sigue estos pasos: primero importa el modelo y la configuraci\xF3n de ResNet desde
los archivos reci\xE9n creados:`),Pa=d(),_(Fe.$$.fragment),za=d(),ue=r("p"),Dr=a("Luego, debes decirle a la biblioteca que deseas copiar el c\xF3digo de esos objetos cuando usas el m\xE9todo "),$s=r("code"),Tr=a("save_pretrained"),Nr=a(`
y registrarlos correctamente con una determinada clase autom\xE1tica (especialmente para modelos), simplemente ejecuta:`),Ra=d(),_(xe.$$.fragment),Aa=d(),me=r("p"),Ir=a(`Ten en cuenta que no es necesario especificar una clase autom\xE1tica para la configuraci\xF3n (solo hay una clase autom\xE1tica
para ellos, `),qs=r("code"),Lr=a("AutoConfig"),Fr=a(`), pero es diferente para los modelos. Tu modelo personalizado podr\xEDa ser adecuado para muchas
tareas diferentes, por lo que debes especificar cu\xE1l de las clases autom\xE1ticas es la correcta para tu modelo.`),Ma=d(),io=r("p"),xr=a("A continuaci\xF3n, vamos a crear la configuraci\xF3n y los modelos como lo hicimos antes:"),Oa=d(),_(Se.$$.fragment),Da=d(),co=r("p"),Sr=a("Ahora, para enviar el modelo al Hub, aseg\xFArate de haber iniciado sesi\xF3n. Ejecuta en tu terminal:"),Ta=d(),_(He.$$.fragment),Na=d(),fe=r("p"),Hr=a("o desde un "),ws=r("em"),Br=a("notebook"),Ur=a(":"),Ia=d(),_(Be.$$.fragment),La=d(),po=r("p"),Gr=a("Luego puedes ingresar a tu propio espacio (o una organizaci\xF3n de la que seas miembro) de esta manera:"),Fa=d(),_(Ue.$$.fragment),xa=d(),T=r("p"),Kr=a("Adem\xE1s de los pesos del modelo y la configuraci\xF3n en formato json, esto tambi\xE9n copi\xF3 los archivos "),Cs=r("code"),Vr=a(".py"),Jr=a(` del modelo y la
configuraci\xF3n en la carpeta `),js=r("code"),Qr=a("custom-resnet50d"),Wr=a(` y subi\xF3 el resultado al Hub. Puedes verificar el resultado en este
`),Ge=r("a"),Xr=a("repositorio de modelos"),Yr=a("."),Sa=d(),_e=r("p"),Zr=a("Consulta el tutorial sobre c\xF3mo "),uo=r("a"),en=a("compartir modelos"),on=a(" para obtener m\xE1s informaci\xF3n sobre el m\xE9todo para subir modelos al Hub."),Ha=d(),oe=r("h2"),ge=r("a"),ks=r("span"),_(Ke.$$.fragment),sn=d(),Ps=r("span"),an=a("Usar un modelo con c\xF3digo personalizado"),Ba=d(),R=r("p"),tn=a("Puedes usar cualquier configuraci\xF3n, modelo o "),zs=r("em"),ln=a("tokenizador"),rn=a(` con archivos de c\xF3digo personalizado en tu repositorio con las
clases autom\xE1ticas y el m\xE9todo `),Rs=r("code"),nn=a("from_pretrained"),cn=a(`. Todos los archivos y c\xF3digos cargados en el Hub se analizan en busca de
malware (consulta la documentaci\xF3n de `),Ve=r("a"),dn=a("seguridad del Hub"),pn=a(` para
obtener m\xE1s informaci\xF3n), pero a\xFAn debes revisar el c\xF3digo del modelo y el autor para evitar la ejecuci\xF3n de c\xF3digo malicioso
en tu computadora. Configura `),As=r("code"),un=a("trust_remote_code=True"),mn=a(" para usar un modelo con c\xF3digo personalizado:"),Ua=d(),_(Je.$$.fragment),Ga=d(),he=r("p"),fn=a("Tambi\xE9n se recomienda encarecidamente pasar un "),Ms=r("em"),_n=a("hash"),gn=a(` de confirmaci\xF3n como una \u201Crevisi\xF3n\u201D para asegurarte de que el autor
de los modelos no actualiz\xF3 el c\xF3digo con algunas l\xEDneas nuevas maliciosas (a menos que conf\xEDes plenamente en los autores
de los modelos).`),Ka=d(),_(Qe.$$.fragment),Va=d(),be=r("p"),hn=a(`Ten en cuenta que al navegar por el historial de confirmaciones del repositorio del modelo en Hub, hay un bot\xF3n para copiar
f\xE1cilmente el hash de confirmaci\xF3n de cualquier `),Os=r("em"),bn=a("commit"),vn=a("."),Ja=d(),se=r("h2"),ve=r("a"),Ds=r("span"),_(We.$$.fragment),En=d(),Ts=r("span"),yn=a("Registrar un model con c\xF3digo personalizado a las clases autom\xE1ticas"),Qa=d(),mo=r("p"),$n=a(`Si est\xE1s escribiendo una biblioteca que ampl\xEDa \u{1F917} Transformers, es posible que quieras ampliar las clases autom\xE1ticas para
incluir tu propio modelo. Esto es diferente de enviar el c\xF3digo al Hub en el sentido de que los usuarios necesitar\xE1n importar
tu biblioteca para obtener los modelos personalizados (al contrario de descargar autom\xE1ticamente el c\xF3digo del modelo desde Hub).`),Wa=d(),V=r("p"),qn=a("Siempre que tu configuraci\xF3n tenga un atributo "),Ns=r("code"),wn=a("model_type"),Cn=a(` que sea diferente de los tipos de modelos existentes, y que tus
clases modelo tengan los atributos `),Is=r("code"),jn=a("config_class"),kn=a(" correctos, puedes agregarlos a las clases autom\xE1ticas de la siguiente manera:"),Xa=d(),_(Xe.$$.fragment),Ya=d(),N=r("p"),Pn=a("Ten en cuenta que el primer argumento utilizado al registrar tu configuraci\xF3n personalizada en "),Ls=r("code"),zn=a("AutoConfig"),Rn=a(` debe coincidir
con el `),Fs=r("code"),An=a("model_type"),Mn=a(` de tu configuraci\xF3n personalizada, y el primer argumento utilizado al registrar tus modelos personalizados
en cualquier clase del modelo autom\xE1tico debe coincidir con el `),xs=r("code"),On=a("config_class"),Dn=a(" de esos modelos."),this.h()},l(e){const l=wc('[data-svelte="svelte-1phssyn"]',document.head);u=n(l,"META",{name:!0,content:!0}),l.forEach(s),j=p(e),f=n(e,"H1",{class:!0});var Ye=i(f);y=n(Ye,"A",{id:!0,class:!0,href:!0});var Ss=i(y);A=n(Ss,"SPAN",{});var Hs=i(A);g(q.$$.fragment,Hs),Hs.forEach(s),Ss.forEach(s),w=p(Ye),I=n(Ye,"SPAN",{});var Nn=i(I);ft=t(Nn,"Compartir modelos personalizados"),Nn.forEach(s),Ye.forEach(s),Bs=p(e),Ze=n(e,"P",{});var In=i(Ze);_t=t(In,`La biblioteca \u{1F917} Transformers est\xE1 dise\xF1ada para ser f\xE1cilmente ampliable. Cada modelo est\xE1 completamente codificado
sin abstracci\xF3n en una subcarpeta determinada del repositorio, por lo que puedes copiar f\xE1cilmente un archivo del modelo
y ajustarlo seg\xFAn tus necesidades.`),In.forEach(s),Us=p(e),eo=n(e,"P",{});var Ln=i(eo);gt=t(Ln,`Si est\xE1s escribiendo un modelo completamente nuevo, podr\xEDa ser m\xE1s f\xE1cil comenzar desde cero. En este tutorial, te mostraremos
c\xF3mo escribir un modelo personalizado y su configuraci\xF3n para que pueda usarse dentro de Transformers, y c\xF3mo puedes compartirlo
con la comunidad (con el c\xF3digo en el que se basa) para que cualquiera pueda usarlo, incluso si no est\xE1 presente en la biblioteca
\u{1F917} Transformers.`),Ln.forEach(s),Gs=p(e),F=n(e,"P",{});var fo=i(F);ht=t(fo,"Ilustraremos todo esto con un modelo ResNet, envolviendo la clase ResNet de la "),je=n(fo,"A",{href:!0,rel:!0});var Fn=i(je);bt=t(Fn,"biblioteca timm"),Fn.forEach(s),vt=t(fo," en un "),Co=n(fo,"CODE",{});var xn=i(Co);Et=t(xn,"PreTrainedModel"),xn.forEach(s),yt=t(fo,"."),fo.forEach(s),Ks=p(e),X=n(e,"H2",{class:!0});var et=i(X);te=n(et,"A",{id:!0,class:!0,href:!0});var Sn=i(te);jo=n(Sn,"SPAN",{});var Hn=i(jo);g(ke.$$.fragment,Hn),Hn.forEach(s),Sn.forEach(s),$t=p(et),ko=n(et,"SPAN",{});var Bn=i(ko);qt=t(Bn,"Escribir una configuraci\xF3n personalizada"),Bn.forEach(s),et.forEach(s),Vs=p(e),le=n(e,"P",{});var ot=i(le);wt=t(ot,`Antes de adentrarnos en el modelo, primero escribamos su configuraci\xF3n. La configuraci\xF3n de un modelo es un objeto que
contendr\xE1 toda la informaci\xF3n necesaria para construir el modelo. Como veremos en la siguiente secci\xF3n, el modelo solo puede
tomar un `),Po=n(ot,"CODE",{});var Un=i(Po);Ct=t(Un,"config"),Un.forEach(s),jt=t(ot," para ser inicializado, por lo que realmente necesitamos que ese objeto est\xE9 lo m\xE1s completo posible."),ot.forEach(s),Js=p(e),oo=n(e,"P",{});var Gn=i(oo);kt=t(Gn,`En nuestro ejemplo, tomaremos un par de argumentos de la clase ResNet que tal vez queramos modificar. Las diferentes
configuraciones nos dar\xE1n los diferentes tipos de ResNet que son posibles. Luego simplemente almacenamos esos argumentos
despu\xE9s de verificar la validez de algunos de ellos.`),Gn.forEach(s),Qs=p(e),g(Pe.$$.fragment,e),Ws=p(e),so=n(e,"P",{});var Kn=i(so);Pt=t(Kn,"Las tres cosas importantes que debes recordar al escribir tu propia configuraci\xF3n son las siguientes:"),Kn.forEach(s),Xs=p(e),x=n(e,"UL",{});var _o=i(x);ze=n(_o,"LI",{});var st=i(ze);zt=t(st,"tienes que heredar de "),zo=n(st,"CODE",{});var Vn=i(zo);Rt=t(Vn,"PretrainedConfig"),Vn.forEach(s),At=t(st,","),st.forEach(s),Mt=p(_o),L=n(_o,"LI",{});var Ee=i(L);Ot=t(Ee,"el "),Ro=n(Ee,"CODE",{});var Jn=i(Ro);Dt=t(Jn,"__init__"),Jn.forEach(s),Tt=t(Ee," de tu "),Ao=n(Ee,"CODE",{});var Qn=i(Ao);Nt=t(Qn,"PretrainedConfig"),Qn.forEach(s),It=t(Ee," debe aceptar cualquier "),Mo=n(Ee,"CODE",{});var Wn=i(Mo);Lt=t(Wn,"kwargs"),Wn.forEach(s),Ft=t(Ee,","),Ee.forEach(s),xt=p(_o),Y=n(_o,"LI",{});var go=i(Y);St=t(go,"esos "),Oo=n(go,"CODE",{});var Xn=i(Oo);Ht=t(Xn,"kwargs"),Xn.forEach(s),Bt=t(go," deben pasarse a la superclase "),Do=n(go,"CODE",{});var Yn=i(Do);Ut=t(Yn,"__init__"),Yn.forEach(s),Gt=t(go,"."),go.forEach(s),_o.forEach(s),Ys=p(e),P=n(e,"P",{});var J=i(P);Kt=t(J,`La herencia es para asegurarte de obtener toda la funcionalidad de la biblioteca \u{1F917} Transformers, mientras que las otras dos
restricciones provienen del hecho de que una `),To=n(J,"CODE",{});var Zn=i(To);Vt=t(Zn,"PretrainedConfig"),Zn.forEach(s),Jt=t(J,` tiene m\xE1s campos que los que est\xE1s configurando. Al recargar una
`),No=n(J,"CODE",{});var ei=i(No);Qt=t(ei,"config"),ei.forEach(s),Wt=t(J," con el m\xE9todo "),Io=n(J,"CODE",{});var oi=i(Io);Xt=t(oi,"from_pretrained"),oi.forEach(s),Yt=t(J,", esos campos deben ser aceptados por tu "),Lo=n(J,"CODE",{});var si=i(Lo);Zt=t(si,"config"),si.forEach(s),el=t(J," y luego enviados a la superclase."),J.forEach(s),Zs=p(e),S=n(e,"P",{});var ho=i(S);ol=t(ho,"Definir un "),Fo=n(ho,"CODE",{});var ai=i(Fo);sl=t(ai,"model_type"),ai.forEach(s),al=t(ho," para tu configuraci\xF3n (en este caso "),xo=n(ho,"CODE",{});var ti=i(xo);tl=t(ti,'model_type="resnet"'),ti.forEach(s),ll=t(ho,`) no es obligatorio, a menos que quieras
registrar tu modelo con las clases autom\xE1ticas (ver la \xFAltima secci\xF3n).`),ho.forEach(s),ea=p(e),ao=n(e,"P",{});var li=i(ao);rl=t(li,`Una vez hecho esto, puedes crear y guardar f\xE1cilmente tu configuraci\xF3n como lo har\xEDas con cualquier otra configuraci\xF3n de un
modelo de la biblioteca. As\xED es como podemos crear una configuraci\xF3n resnet50d y guardarla:`),li.forEach(s),oa=p(e),g(Re.$$.fragment,e),sa=p(e),M=n(e,"P",{});var ye=i(M);nl=t(ye,"Esto guardar\xE1 un archivo llamado "),So=n(ye,"CODE",{});var ri=i(So);il=t(ri,"config.json"),ri.forEach(s),cl=t(ye," dentro de la carpeta "),Ho=n(ye,"CODE",{});var ni=i(Ho);dl=t(ni,"custom-resnet"),ni.forEach(s),pl=t(ye,`. Luego puedes volver a cargar tu configuraci\xF3n
con el m\xE9todo `),Bo=n(ye,"CODE",{});var ii=i(Bo);ul=t(ii,"from_pretrained"),ii.forEach(s),ml=t(ye,":"),ye.forEach(s),aa=p(e),g(Ae.$$.fragment,e),ta=p(e),H=n(e,"P",{});var bo=i(H);fl=t(bo,"Tambi\xE9n puedes usar cualquier otro m\xE9todo de la clase "),Uo=n(bo,"CODE",{});var ci=i(Uo);_l=t(ci,"PretrainedConfig"),ci.forEach(s),gl=t(bo,", como "),Go=n(bo,"CODE",{});var di=i(Go);hl=t(di,"push_to_hub()"),di.forEach(s),bl=t(bo,`, para cargar
directamente tu configuraci\xF3n en el Hub.`),bo.forEach(s),la=p(e),Z=n(e,"H2",{class:!0});var at=i(Z);re=n(at,"A",{id:!0,class:!0,href:!0});var pi=i(re);Ko=n(pi,"SPAN",{});var ui=i(Ko);g(Me.$$.fragment,ui),ui.forEach(s),pi.forEach(s),vl=p(at),Vo=n(at,"SPAN",{});var mi=i(Vo);El=t(mi,"Escribir un modelo personalizado"),mi.forEach(s),at.forEach(s),ra=p(e),B=n(e,"P",{});var vo=i(B);yl=t(vo,`Ahora que tenemos nuestra configuraci\xF3n de ResNet, podemos seguir escribiendo el modelo. En realidad escribiremos dos: una que
extrae las caracter\xEDsticas ocultas de un grupo de im\xE1genes (como `),Jo=n(vo,"CODE",{});var fi=i(Jo);$l=t(fi,"BertModel"),fi.forEach(s),ql=t(vo,`) y una que es adecuada para clasificaci\xF3n de
imagenes (como `),Qo=n(vo,"CODE",{});var _i=i(Qo);wl=t(_i,"BertForSequenceClassification"),_i.forEach(s),Cl=t(vo,")."),vo.forEach(s),na=p(e),U=n(e,"P",{});var Eo=i(U);jl=t(Eo,"Como mencionamos antes, solo escribiremos un envoltura ("),Wo=n(Eo,"EM",{});var gi=i(Wo);kl=t(gi,"wrapper"),gi.forEach(s),Pl=t(Eo,`) libre del modelo para simplificar este ejemplo. Lo \xFAnico que debemos
hacer antes de escribir esta clase es un mapeo entre los tipos de bloques y las clases de bloques reales. Luego se define el
modelo desde la configuraci\xF3n pasando todo a la clase `),Xo=n(Eo,"CODE",{});var hi=i(Xo);zl=t(hi,"ResNet"),hi.forEach(s),Rl=t(Eo,":"),Eo.forEach(s),ia=p(e),g(Oe.$$.fragment,e),ca=p(e),ne=n(e,"P",{});var tt=i(ne);Al=t(tt,"Para el modelo que clasificar\xE1 las im\xE1genes, solo cambiamos el m\xE9todo de avance (es decir, el m\xE9todo "),Yo=n(tt,"CODE",{});var bi=i(Yo);Ml=t(bi,"forward"),bi.forEach(s),Ol=t(tt,"):"),tt.forEach(s),da=p(e),g(De.$$.fragment,e),pa=p(e),z=n(e,"P",{});var Q=i(z);Dl=t(Q,"En ambos casos, observa c\xF3mo heredamos de "),Zo=n(Q,"CODE",{});var vi=i(Zo);Tl=t(vi,"PreTrainedModel"),vi.forEach(s),Nl=t(Q," y llamamos a la inicializaci\xF3n de la superclase con "),es=n(Q,"CODE",{});var Ei=i(es);Il=t(Ei,"config"),Ei.forEach(s),Ll=t(Q,`
(un poco como cuando escribes `),os=n(Q,"CODE",{});var yi=i(os);Fl=t(yi,"torch.nn.Module"),yi.forEach(s),xl=t(Q,"). La l\xEDnea que establece "),ss=n(Q,"CODE",{});var $i=i(ss);Sl=t($i,"config_class"),$i.forEach(s),Hl=t(Q,` no es obligatoria, a menos
que quieras registrar tu modelo con las clases autom\xE1ticas (consulta la \xFAltima secci\xF3n).`),Q.forEach(s),ua=p(e),g(ie.$$.fragment,e),ma=p(e),O=n(e,"P",{});var $e=i(O);Bl=t($e,`Puedes hacer que tu modelo devuelva lo que quieras, pero devolver un diccionario como lo hicimos para
`),as=n($e,"CODE",{});var qi=i(as);Ul=t(qi,"ResnetModelForImageClassification"),qi.forEach(s),Gl=t($e,", con el "),ts=n($e,"CODE",{});var wi=i(ts);Kl=t(wi,"loss"),wi.forEach(s),Vl=t($e,` incluido cuando se pasan las etiquetas, har\xE1 que tu modelo se pueda
usar directamente dentro de la clase `),ls=n($e,"CODE",{});var Ci=i(ls);Jl=t(Ci,"Trainer"),Ci.forEach(s),Ql=t($e,`. Usar otro formato de salida est\xE1 bien, siempre y cuando est\xE9s planeando usar
tu propio bucle de entrenamiento u otra biblioteca para el entrenamiento.`),$e.forEach(s),fa=p(e),to=n(e,"P",{});var ji=i(to);Wl=t(ji,"Ahora que tenemos nuestra clase, vamos a crear un modelo:"),ji.forEach(s),_a=p(e),g(Te.$$.fragment,e),ga=p(e),D=n(e,"P",{});var qe=i(D);Xl=t(qe,"Nuevamente, puedes usar cualquiera de los m\xE9todos de "),rs=n(qe,"CODE",{});var ki=i(rs);Yl=t(ki,"PreTrainedModel"),ki.forEach(s),Zl=t(qe,", como "),ns=n(qe,"CODE",{});var Pi=i(ns);er=t(Pi,"save_pretrained()"),Pi.forEach(s),or=t(qe,` o
`),is=n(qe,"CODE",{});var zi=i(is);sr=t(zi,"push_to_hub()"),zi.forEach(s),ar=t(qe,`. Usaremos el segundo en la siguiente secci\xF3n y veremos c\xF3mo pasar los pesos del modelo
con el c\xF3digo de nuestro modelo. Pero primero, carguemos algunos pesos previamente entrenados dentro de nuestro modelo.`),qe.forEach(s),ha=p(e),lo=n(e,"P",{});var Ri=i(lo);tr=t(Ri,`En tu caso de uso, probablemente estar\xE1s entrenando tu modelo personalizado con tus propios datos. Para ir r\xE1pido en este
tutorial, usaremos la versi\xF3n preentrenada de resnet50d. Dado que nuestro modelo es solo un envoltorio alrededor del resnet50d
original, ser\xE1 f\xE1cil transferir esos pesos:`),Ri.forEach(s),ba=p(e),g(Ne.$$.fragment,e),va=p(e),G=n(e,"P",{});var yo=i(G);lr=t(yo,"Ahora veamos c\xF3mo asegurarnos de que cuando hacemos "),cs=n(yo,"CODE",{});var Ai=i(cs);rr=t(Ai,"save_pretrained()"),Ai.forEach(s),nr=t(yo," o "),ds=n(yo,"CODE",{});var Mi=i(ds);ir=t(Mi,"push_to_hub()"),Mi.forEach(s),cr=t(yo,`,
se guarda el c\xF3digo del modelo.`),yo.forEach(s),Ea=p(e),ee=n(e,"H2",{class:!0});var lt=i(ee);ce=n(lt,"A",{id:!0,class:!0,href:!0});var Oi=i(ce);ps=n(Oi,"SPAN",{});var Di=i(ps);g(Ie.$$.fragment,Di),Di.forEach(s),Oi.forEach(s),dr=p(lt),us=n(lt,"SPAN",{});var Ti=i(us);pr=t(Ti,"Enviar el c\xF3digo al _Hub_"),Ti.forEach(s),lt.forEach(s),ya=p(e),g(de.$$.fragment,e),$a=p(e),$=n(e,"P",{});var k=i($);ur=t(k,"Primero, aseg\xFArate de que tu modelo est\xE9 completamente definido en un archivo "),ms=n(k,"CODE",{});var Ni=i(ms);mr=t(Ni,".py"),Ni.forEach(s),fr=t(k,`. Puedes basarte en importaciones
relativas a otros archivos, siempre que todos los archivos est\xE9n en el mismo directorio (a\xFAn no admitimos subm\xF3dulos
para esta caracter\xEDstica). Para nuestro ejemplo, definiremos un archivo `),fs=n(k,"CODE",{});var Ii=i(fs);_r=t(Ii,"modeling_resnet.py"),Ii.forEach(s),gr=t(k,` y un archivo
`),_s=n(k,"CODE",{});var Li=i(_s);hr=t(Li,"configuration_resnet.py"),Li.forEach(s),br=t(k," en una carpeta del directorio de trabajo actual llamado "),gs=n(k,"CODE",{});var Fi=i(gs);vr=t(Fi,"resnet_model"),Fi.forEach(s),Er=t(k,`. El archivo de configuraci\xF3n
contiene el c\xF3digo de `),hs=n(k,"CODE",{});var xi=i(hs);yr=t(xi,"ResnetConfig"),xi.forEach(s),$r=t(k," y el archivo del modelo contiene el c\xF3digo de "),bs=n(k,"CODE",{});var Si=i(bs);qr=t(Si,"ResnetModel"),Si.forEach(s),wr=t(k,` y
`),vs=n(k,"CODE",{});var Hi=i(vs);Cr=t(Hi,"ResnetModelForImageClassification"),Hi.forEach(s),jr=t(k,"."),k.forEach(s),qa=p(e),g(Le.$$.fragment,e),wa=p(e),K=n(e,"P",{});var $o=i(K);kr=t($o,"El "),Es=n($o,"CODE",{});var Bi=i(Es);Pr=t(Bi,"__init__.py"),Bi.forEach(s),zr=t($o,"  puede estar vac\xEDo, solo est\xE1 ah\xED para que Python detecte que "),ys=n($o,"CODE",{});var Ui=i(ys);Rr=t(Ui,"resnet_model"),Ui.forEach(s),Ar=t($o," se puede usar como un m\xF3dulo."),$o.forEach(s),Ca=p(e),g(pe.$$.fragment,e),ja=p(e),ro=n(e,"P",{});var Gi=i(ro);Mr=t(Gi,"Ten en cuenta que puedes reutilizar (o subclasificar) una configuraci\xF3n o modelo existente."),Gi.forEach(s),ka=p(e),no=n(e,"P",{});var Ki=i(no);Or=t(Ki,`Para compartir tu modelo con la comunidad, sigue estos pasos: primero importa el modelo y la configuraci\xF3n de ResNet desde
los archivos reci\xE9n creados:`),Ki.forEach(s),Pa=p(e),g(Fe.$$.fragment,e),za=p(e),ue=n(e,"P",{});var rt=i(ue);Dr=t(rt,"Luego, debes decirle a la biblioteca que deseas copiar el c\xF3digo de esos objetos cuando usas el m\xE9todo "),$s=n(rt,"CODE",{});var Vi=i($s);Tr=t(Vi,"save_pretrained"),Vi.forEach(s),Nr=t(rt,`
y registrarlos correctamente con una determinada clase autom\xE1tica (especialmente para modelos), simplemente ejecuta:`),rt.forEach(s),Ra=p(e),g(xe.$$.fragment,e),Aa=p(e),me=n(e,"P",{});var nt=i(me);Ir=t(nt,`Ten en cuenta que no es necesario especificar una clase autom\xE1tica para la configuraci\xF3n (solo hay una clase autom\xE1tica
para ellos, `),qs=n(nt,"CODE",{});var Ji=i(qs);Lr=t(Ji,"AutoConfig"),Ji.forEach(s),Fr=t(nt,`), pero es diferente para los modelos. Tu modelo personalizado podr\xEDa ser adecuado para muchas
tareas diferentes, por lo que debes especificar cu\xE1l de las clases autom\xE1ticas es la correcta para tu modelo.`),nt.forEach(s),Ma=p(e),io=n(e,"P",{});var Qi=i(io);xr=t(Qi,"A continuaci\xF3n, vamos a crear la configuraci\xF3n y los modelos como lo hicimos antes:"),Qi.forEach(s),Oa=p(e),g(Se.$$.fragment,e),Da=p(e),co=n(e,"P",{});var Wi=i(co);Sr=t(Wi,"Ahora, para enviar el modelo al Hub, aseg\xFArate de haber iniciado sesi\xF3n. Ejecuta en tu terminal:"),Wi.forEach(s),Ta=p(e),g(He.$$.fragment,e),Na=p(e),fe=n(e,"P",{});var it=i(fe);Hr=t(it,"o desde un "),ws=n(it,"EM",{});var Xi=i(ws);Br=t(Xi,"notebook"),Xi.forEach(s),Ur=t(it,":"),it.forEach(s),Ia=p(e),g(Be.$$.fragment,e),La=p(e),po=n(e,"P",{});var Yi=i(po);Gr=t(Yi,"Luego puedes ingresar a tu propio espacio (o una organizaci\xF3n de la que seas miembro) de esta manera:"),Yi.forEach(s),Fa=p(e),g(Ue.$$.fragment,e),xa=p(e),T=n(e,"P",{});var we=i(T);Kr=t(we,"Adem\xE1s de los pesos del modelo y la configuraci\xF3n en formato json, esto tambi\xE9n copi\xF3 los archivos "),Cs=n(we,"CODE",{});var Zi=i(Cs);Vr=t(Zi,".py"),Zi.forEach(s),Jr=t(we,` del modelo y la
configuraci\xF3n en la carpeta `),js=n(we,"CODE",{});var ec=i(js);Qr=t(ec,"custom-resnet50d"),ec.forEach(s),Wr=t(we,` y subi\xF3 el resultado al Hub. Puedes verificar el resultado en este
`),Ge=n(we,"A",{href:!0,rel:!0});var oc=i(Ge);Xr=t(oc,"repositorio de modelos"),oc.forEach(s),Yr=t(we,"."),we.forEach(s),Sa=p(e),_e=n(e,"P",{});var ct=i(_e);Zr=t(ct,"Consulta el tutorial sobre c\xF3mo "),uo=n(ct,"A",{href:!0});var sc=i(uo);en=t(sc,"compartir modelos"),sc.forEach(s),on=t(ct," para obtener m\xE1s informaci\xF3n sobre el m\xE9todo para subir modelos al Hub."),ct.forEach(s),Ha=p(e),oe=n(e,"H2",{class:!0});var dt=i(oe);ge=n(dt,"A",{id:!0,class:!0,href:!0});var ac=i(ge);ks=n(ac,"SPAN",{});var tc=i(ks);g(Ke.$$.fragment,tc),tc.forEach(s),ac.forEach(s),sn=p(dt),Ps=n(dt,"SPAN",{});var lc=i(Ps);an=t(lc,"Usar un modelo con c\xF3digo personalizado"),lc.forEach(s),dt.forEach(s),Ba=p(e),R=n(e,"P",{});var W=i(R);tn=t(W,"Puedes usar cualquier configuraci\xF3n, modelo o "),zs=n(W,"EM",{});var rc=i(zs);ln=t(rc,"tokenizador"),rc.forEach(s),rn=t(W,` con archivos de c\xF3digo personalizado en tu repositorio con las
clases autom\xE1ticas y el m\xE9todo `),Rs=n(W,"CODE",{});var nc=i(Rs);nn=t(nc,"from_pretrained"),nc.forEach(s),cn=t(W,`. Todos los archivos y c\xF3digos cargados en el Hub se analizan en busca de
malware (consulta la documentaci\xF3n de `),Ve=n(W,"A",{href:!0,rel:!0});var ic=i(Ve);dn=t(ic,"seguridad del Hub"),ic.forEach(s),pn=t(W,` para
obtener m\xE1s informaci\xF3n), pero a\xFAn debes revisar el c\xF3digo del modelo y el autor para evitar la ejecuci\xF3n de c\xF3digo malicioso
en tu computadora. Configura `),As=n(W,"CODE",{});var cc=i(As);un=t(cc,"trust_remote_code=True"),cc.forEach(s),mn=t(W," para usar un modelo con c\xF3digo personalizado:"),W.forEach(s),Ua=p(e),g(Je.$$.fragment,e),Ga=p(e),he=n(e,"P",{});var pt=i(he);fn=t(pt,"Tambi\xE9n se recomienda encarecidamente pasar un "),Ms=n(pt,"EM",{});var dc=i(Ms);_n=t(dc,"hash"),dc.forEach(s),gn=t(pt,` de confirmaci\xF3n como una \u201Crevisi\xF3n\u201D para asegurarte de que el autor
de los modelos no actualiz\xF3 el c\xF3digo con algunas l\xEDneas nuevas maliciosas (a menos que conf\xEDes plenamente en los autores
de los modelos).`),pt.forEach(s),Ka=p(e),g(Qe.$$.fragment,e),Va=p(e),be=n(e,"P",{});var ut=i(be);hn=t(ut,`Ten en cuenta que al navegar por el historial de confirmaciones del repositorio del modelo en Hub, hay un bot\xF3n para copiar
f\xE1cilmente el hash de confirmaci\xF3n de cualquier `),Os=n(ut,"EM",{});var pc=i(Os);bn=t(pc,"commit"),pc.forEach(s),vn=t(ut,"."),ut.forEach(s),Ja=p(e),se=n(e,"H2",{class:!0});var mt=i(se);ve=n(mt,"A",{id:!0,class:!0,href:!0});var uc=i(ve);Ds=n(uc,"SPAN",{});var mc=i(Ds);g(We.$$.fragment,mc),mc.forEach(s),uc.forEach(s),En=p(mt),Ts=n(mt,"SPAN",{});var fc=i(Ts);yn=t(fc,"Registrar un model con c\xF3digo personalizado a las clases autom\xE1ticas"),fc.forEach(s),mt.forEach(s),Qa=p(e),mo=n(e,"P",{});var _c=i(mo);$n=t(_c,`Si est\xE1s escribiendo una biblioteca que ampl\xEDa \u{1F917} Transformers, es posible que quieras ampliar las clases autom\xE1ticas para
incluir tu propio modelo. Esto es diferente de enviar el c\xF3digo al Hub en el sentido de que los usuarios necesitar\xE1n importar
tu biblioteca para obtener los modelos personalizados (al contrario de descargar autom\xE1ticamente el c\xF3digo del modelo desde Hub).`),_c.forEach(s),Wa=p(e),V=n(e,"P",{});var qo=i(V);qn=t(qo,"Siempre que tu configuraci\xF3n tenga un atributo "),Ns=n(qo,"CODE",{});var gc=i(Ns);wn=t(gc,"model_type"),gc.forEach(s),Cn=t(qo,` que sea diferente de los tipos de modelos existentes, y que tus
clases modelo tengan los atributos `),Is=n(qo,"CODE",{});var hc=i(Is);jn=t(hc,"config_class"),hc.forEach(s),kn=t(qo," correctos, puedes agregarlos a las clases autom\xE1ticas de la siguiente manera:"),qo.forEach(s),Xa=p(e),g(Xe.$$.fragment,e),Ya=p(e),N=n(e,"P",{});var Ce=i(N);Pn=t(Ce,"Ten en cuenta que el primer argumento utilizado al registrar tu configuraci\xF3n personalizada en "),Ls=n(Ce,"CODE",{});var bc=i(Ls);zn=t(bc,"AutoConfig"),bc.forEach(s),Rn=t(Ce,` debe coincidir
con el `),Fs=n(Ce,"CODE",{});var vc=i(Fs);An=t(vc,"model_type"),vc.forEach(s),Mn=t(Ce,` de tu configuraci\xF3n personalizada, y el primer argumento utilizado al registrar tus modelos personalizados
en cualquier clase del modelo autom\xE1tico debe coincidir con el `),xs=n(Ce,"CODE",{});var Ec=i(xs);On=t(Ec,"config_class"),Ec.forEach(s),Dn=t(Ce," de esos modelos."),Ce.forEach(s),this.h()},h(){m(u,"name","hf:doc:metadata"),m(u,"content",JSON.stringify(Rc)),m(y,"id","compartir-modelos-personalizados"),m(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(y,"href","#compartir-modelos-personalizados"),m(f,"class","relative group"),m(je,"href","https://github.com/rwightman/pytorch-image-models/tree/master/timm"),m(je,"rel","nofollow"),m(te,"id","escribir-una-configuracin-personalizada"),m(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(te,"href","#escribir-una-configuracin-personalizada"),m(X,"class","relative group"),m(re,"id","escribir-un-modelo-personalizado"),m(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(re,"href","#escribir-un-modelo-personalizado"),m(Z,"class","relative group"),m(ce,"id","enviar-el-cdigo-al-hub"),m(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ce,"href","#enviar-el-cdigo-al-hub"),m(ee,"class","relative group"),m(Ge,"href","https://huggingface.co/sgugger/custom-resnet50d"),m(Ge,"rel","nofollow"),m(uo,"href","model_sharing"),m(ge,"id","usar-un-modelo-con-cdigo-personalizado"),m(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ge,"href","#usar-un-modelo-con-cdigo-personalizado"),m(oe,"class","relative group"),m(Ve,"href","https://huggingface.co/docs/hub/security#malware-scanning"),m(Ve,"rel","nofollow"),m(ve,"id","registrar-un-model-con-cdigo-personalizado-a-las-clases-automticas"),m(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ve,"href","#registrar-un-model-con-cdigo-personalizado-a-las-clases-automticas"),m(se,"class","relative group")},m(e,l){o(document.head,u),c(e,j,l),c(e,f,l),o(f,y),o(y,A),h(q,A,null),o(f,w),o(f,I),o(I,ft),c(e,Bs,l),c(e,Ze,l),o(Ze,_t),c(e,Us,l),c(e,eo,l),o(eo,gt),c(e,Gs,l),c(e,F,l),o(F,ht),o(F,je),o(je,bt),o(F,vt),o(F,Co),o(Co,Et),o(F,yt),c(e,Ks,l),c(e,X,l),o(X,te),o(te,jo),h(ke,jo,null),o(X,$t),o(X,ko),o(ko,qt),c(e,Vs,l),c(e,le,l),o(le,wt),o(le,Po),o(Po,Ct),o(le,jt),c(e,Js,l),c(e,oo,l),o(oo,kt),c(e,Qs,l),h(Pe,e,l),c(e,Ws,l),c(e,so,l),o(so,Pt),c(e,Xs,l),c(e,x,l),o(x,ze),o(ze,zt),o(ze,zo),o(zo,Rt),o(ze,At),o(x,Mt),o(x,L),o(L,Ot),o(L,Ro),o(Ro,Dt),o(L,Tt),o(L,Ao),o(Ao,Nt),o(L,It),o(L,Mo),o(Mo,Lt),o(L,Ft),o(x,xt),o(x,Y),o(Y,St),o(Y,Oo),o(Oo,Ht),o(Y,Bt),o(Y,Do),o(Do,Ut),o(Y,Gt),c(e,Ys,l),c(e,P,l),o(P,Kt),o(P,To),o(To,Vt),o(P,Jt),o(P,No),o(No,Qt),o(P,Wt),o(P,Io),o(Io,Xt),o(P,Yt),o(P,Lo),o(Lo,Zt),o(P,el),c(e,Zs,l),c(e,S,l),o(S,ol),o(S,Fo),o(Fo,sl),o(S,al),o(S,xo),o(xo,tl),o(S,ll),c(e,ea,l),c(e,ao,l),o(ao,rl),c(e,oa,l),h(Re,e,l),c(e,sa,l),c(e,M,l),o(M,nl),o(M,So),o(So,il),o(M,cl),o(M,Ho),o(Ho,dl),o(M,pl),o(M,Bo),o(Bo,ul),o(M,ml),c(e,aa,l),h(Ae,e,l),c(e,ta,l),c(e,H,l),o(H,fl),o(H,Uo),o(Uo,_l),o(H,gl),o(H,Go),o(Go,hl),o(H,bl),c(e,la,l),c(e,Z,l),o(Z,re),o(re,Ko),h(Me,Ko,null),o(Z,vl),o(Z,Vo),o(Vo,El),c(e,ra,l),c(e,B,l),o(B,yl),o(B,Jo),o(Jo,$l),o(B,ql),o(B,Qo),o(Qo,wl),o(B,Cl),c(e,na,l),c(e,U,l),o(U,jl),o(U,Wo),o(Wo,kl),o(U,Pl),o(U,Xo),o(Xo,zl),o(U,Rl),c(e,ia,l),h(Oe,e,l),c(e,ca,l),c(e,ne,l),o(ne,Al),o(ne,Yo),o(Yo,Ml),o(ne,Ol),c(e,da,l),h(De,e,l),c(e,pa,l),c(e,z,l),o(z,Dl),o(z,Zo),o(Zo,Tl),o(z,Nl),o(z,es),o(es,Il),o(z,Ll),o(z,os),o(os,Fl),o(z,xl),o(z,ss),o(ss,Sl),o(z,Hl),c(e,ua,l),h(ie,e,l),c(e,ma,l),c(e,O,l),o(O,Bl),o(O,as),o(as,Ul),o(O,Gl),o(O,ts),o(ts,Kl),o(O,Vl),o(O,ls),o(ls,Jl),o(O,Ql),c(e,fa,l),c(e,to,l),o(to,Wl),c(e,_a,l),h(Te,e,l),c(e,ga,l),c(e,D,l),o(D,Xl),o(D,rs),o(rs,Yl),o(D,Zl),o(D,ns),o(ns,er),o(D,or),o(D,is),o(is,sr),o(D,ar),c(e,ha,l),c(e,lo,l),o(lo,tr),c(e,ba,l),h(Ne,e,l),c(e,va,l),c(e,G,l),o(G,lr),o(G,cs),o(cs,rr),o(G,nr),o(G,ds),o(ds,ir),o(G,cr),c(e,Ea,l),c(e,ee,l),o(ee,ce),o(ce,ps),h(Ie,ps,null),o(ee,dr),o(ee,us),o(us,pr),c(e,ya,l),h(de,e,l),c(e,$a,l),c(e,$,l),o($,ur),o($,ms),o(ms,mr),o($,fr),o($,fs),o(fs,_r),o($,gr),o($,_s),o(_s,hr),o($,br),o($,gs),o(gs,vr),o($,Er),o($,hs),o(hs,yr),o($,$r),o($,bs),o(bs,qr),o($,wr),o($,vs),o(vs,Cr),o($,jr),c(e,qa,l),h(Le,e,l),c(e,wa,l),c(e,K,l),o(K,kr),o(K,Es),o(Es,Pr),o(K,zr),o(K,ys),o(ys,Rr),o(K,Ar),c(e,Ca,l),h(pe,e,l),c(e,ja,l),c(e,ro,l),o(ro,Mr),c(e,ka,l),c(e,no,l),o(no,Or),c(e,Pa,l),h(Fe,e,l),c(e,za,l),c(e,ue,l),o(ue,Dr),o(ue,$s),o($s,Tr),o(ue,Nr),c(e,Ra,l),h(xe,e,l),c(e,Aa,l),c(e,me,l),o(me,Ir),o(me,qs),o(qs,Lr),o(me,Fr),c(e,Ma,l),c(e,io,l),o(io,xr),c(e,Oa,l),h(Se,e,l),c(e,Da,l),c(e,co,l),o(co,Sr),c(e,Ta,l),h(He,e,l),c(e,Na,l),c(e,fe,l),o(fe,Hr),o(fe,ws),o(ws,Br),o(fe,Ur),c(e,Ia,l),h(Be,e,l),c(e,La,l),c(e,po,l),o(po,Gr),c(e,Fa,l),h(Ue,e,l),c(e,xa,l),c(e,T,l),o(T,Kr),o(T,Cs),o(Cs,Vr),o(T,Jr),o(T,js),o(js,Qr),o(T,Wr),o(T,Ge),o(Ge,Xr),o(T,Yr),c(e,Sa,l),c(e,_e,l),o(_e,Zr),o(_e,uo),o(uo,en),o(_e,on),c(e,Ha,l),c(e,oe,l),o(oe,ge),o(ge,ks),h(Ke,ks,null),o(oe,sn),o(oe,Ps),o(Ps,an),c(e,Ba,l),c(e,R,l),o(R,tn),o(R,zs),o(zs,ln),o(R,rn),o(R,Rs),o(Rs,nn),o(R,cn),o(R,Ve),o(Ve,dn),o(R,pn),o(R,As),o(As,un),o(R,mn),c(e,Ua,l),h(Je,e,l),c(e,Ga,l),c(e,he,l),o(he,fn),o(he,Ms),o(Ms,_n),o(he,gn),c(e,Ka,l),h(Qe,e,l),c(e,Va,l),c(e,be,l),o(be,hn),o(be,Os),o(Os,bn),o(be,vn),c(e,Ja,l),c(e,se,l),o(se,ve),o(ve,Ds),h(We,Ds,null),o(se,En),o(se,Ts),o(Ts,yn),c(e,Qa,l),c(e,mo,l),o(mo,$n),c(e,Wa,l),c(e,V,l),o(V,qn),o(V,Ns),o(Ns,wn),o(V,Cn),o(V,Is),o(Is,jn),o(V,kn),c(e,Xa,l),h(Xe,e,l),c(e,Ya,l),c(e,N,l),o(N,Pn),o(N,Ls),o(Ls,zn),o(N,Rn),o(N,Fs),o(Fs,An),o(N,Mn),o(N,xs),o(xs,On),o(N,Dn),Za=!0},p(e,[l]){const Ye={};l&2&&(Ye.$$scope={dirty:l,ctx:e}),ie.$set(Ye);const Ss={};l&2&&(Ss.$$scope={dirty:l,ctx:e}),de.$set(Ss);const Hs={};l&2&&(Hs.$$scope={dirty:l,ctx:e}),pe.$set(Hs)},i(e){Za||(b(q.$$.fragment,e),b(ke.$$.fragment,e),b(Pe.$$.fragment,e),b(Re.$$.fragment,e),b(Ae.$$.fragment,e),b(Me.$$.fragment,e),b(Oe.$$.fragment,e),b(De.$$.fragment,e),b(ie.$$.fragment,e),b(Te.$$.fragment,e),b(Ne.$$.fragment,e),b(Ie.$$.fragment,e),b(de.$$.fragment,e),b(Le.$$.fragment,e),b(pe.$$.fragment,e),b(Fe.$$.fragment,e),b(xe.$$.fragment,e),b(Se.$$.fragment,e),b(He.$$.fragment,e),b(Be.$$.fragment,e),b(Ue.$$.fragment,e),b(Ke.$$.fragment,e),b(Je.$$.fragment,e),b(Qe.$$.fragment,e),b(We.$$.fragment,e),b(Xe.$$.fragment,e),Za=!0)},o(e){v(q.$$.fragment,e),v(ke.$$.fragment,e),v(Pe.$$.fragment,e),v(Re.$$.fragment,e),v(Ae.$$.fragment,e),v(Me.$$.fragment,e),v(Oe.$$.fragment,e),v(De.$$.fragment,e),v(ie.$$.fragment,e),v(Te.$$.fragment,e),v(Ne.$$.fragment,e),v(Ie.$$.fragment,e),v(de.$$.fragment,e),v(Le.$$.fragment,e),v(pe.$$.fragment,e),v(Fe.$$.fragment,e),v(xe.$$.fragment,e),v(Se.$$.fragment,e),v(He.$$.fragment,e),v(Be.$$.fragment,e),v(Ue.$$.fragment,e),v(Ke.$$.fragment,e),v(Je.$$.fragment,e),v(Qe.$$.fragment,e),v(We.$$.fragment,e),v(Xe.$$.fragment,e),Za=!1},d(e){s(u),e&&s(j),e&&s(f),E(q),e&&s(Bs),e&&s(Ze),e&&s(Us),e&&s(eo),e&&s(Gs),e&&s(F),e&&s(Ks),e&&s(X),E(ke),e&&s(Vs),e&&s(le),e&&s(Js),e&&s(oo),e&&s(Qs),E(Pe,e),e&&s(Ws),e&&s(so),e&&s(Xs),e&&s(x),e&&s(Ys),e&&s(P),e&&s(Zs),e&&s(S),e&&s(ea),e&&s(ao),e&&s(oa),E(Re,e),e&&s(sa),e&&s(M),e&&s(aa),E(Ae,e),e&&s(ta),e&&s(H),e&&s(la),e&&s(Z),E(Me),e&&s(ra),e&&s(B),e&&s(na),e&&s(U),e&&s(ia),E(Oe,e),e&&s(ca),e&&s(ne),e&&s(da),E(De,e),e&&s(pa),e&&s(z),e&&s(ua),E(ie,e),e&&s(ma),e&&s(O),e&&s(fa),e&&s(to),e&&s(_a),E(Te,e),e&&s(ga),e&&s(D),e&&s(ha),e&&s(lo),e&&s(ba),E(Ne,e),e&&s(va),e&&s(G),e&&s(Ea),e&&s(ee),E(Ie),e&&s(ya),E(de,e),e&&s($a),e&&s($),e&&s(qa),E(Le,e),e&&s(wa),e&&s(K),e&&s(Ca),E(pe,e),e&&s(ja),e&&s(ro),e&&s(ka),e&&s(no),e&&s(Pa),E(Fe,e),e&&s(za),e&&s(ue),e&&s(Ra),E(xe,e),e&&s(Aa),e&&s(me),e&&s(Ma),e&&s(io),e&&s(Oa),E(Se,e),e&&s(Da),e&&s(co),e&&s(Ta),E(He,e),e&&s(Na),e&&s(fe),e&&s(Ia),E(Be,e),e&&s(La),e&&s(po),e&&s(Fa),E(Ue,e),e&&s(xa),e&&s(T),e&&s(Sa),e&&s(_e),e&&s(Ha),e&&s(oe),E(Ke),e&&s(Ba),e&&s(R),e&&s(Ua),E(Je,e),e&&s(Ga),e&&s(he),e&&s(Ka),E(Qe,e),e&&s(Va),e&&s(be),e&&s(Ja),e&&s(se),E(We),e&&s(Qa),e&&s(mo),e&&s(Wa),e&&s(V),e&&s(Xa),E(Xe,e),e&&s(Ya),e&&s(N)}}}const Rc={local:"compartir-modelos-personalizados",sections:[{local:"escribir-una-configuracin-personalizada",title:"Escribir una configuraci\xF3n personalizada"},{local:"escribir-un-modelo-personalizado",title:"Escribir un modelo personalizado"},{local:"enviar-el-cdigo-al-hub",title:"Enviar el c\xF3digo al _Hub_"},{local:"usar-un-modelo-con-cdigo-personalizado",title:"Usar un modelo con c\xF3digo personalizado"},{local:"registrar-un-model-con-cdigo-personalizado-a-las-clases-automticas",title:"Registrar un model con c\xF3digo personalizado a las clases autom\xE1ticas"}],title:"Compartir modelos personalizados"};function Ac(ae){return Cc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Nc extends yc{constructor(u){super();$c(this,u,Ac,zc,qc,{})}}export{Nc as default,Rc as metadata};
