import{S as ol,i as rl,s as nl,e as r,k as d,w as f,t as a,M as sl,c as n,d as o,m as p,a as s,x as m,h as l,b as c,G as t,g as h,y as u,q as v,o as _,B as w,v as al}from"../chunks/vendor-hf-doc-builder.js";import{T as ll}from"../chunks/Tip-hf-doc-builder.js";import{I as P}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as ct}from"../chunks/CodeBlock-hf-doc-builder.js";function il(to){let g,R;return{c(){g=r("p"),R=a(`This is the very beginning of our experiments with TorchScript and we are still
exploring its capabilities with variable-input-size models. It is a focus of interest to
us and we will deepen our analysis in upcoming releases, with more code examples, a more
flexible implementation, and benchmarks comparing Python-based codes with compiled
TorchScript.`)},l(b){g=n(b,"P",{});var $=s(g);R=l($,`This is the very beginning of our experiments with TorchScript and we are still
exploring its capabilities with variable-input-size models. It is a focus of interest to
us and we will deepen our analysis in upcoming releases, with more code examples, a more
flexible implementation, and benchmarks comparing Python-based codes with compiled
TorchScript.`),$.forEach(o)},m(b,$){h(b,g,$),t(g,R)},d(b){b&&o(g)}}}function hl(to){let g,R,b,$,dt,me,pr,pt,fr,oo,F,ro,J,mr,ue,ur,vr,no,Ge,ft,_r,so,Y,wr,ve,gr,yr,ao,Qe,br,lo,Ve,Er,io,G,_e,$r,mt,kr,Tr,Sr,ut,xr,ho,Xe,Ar,co,C,Q,vt,we,Pr,_t,jr,po,k,zr,wt,Nr,Dr,gt,Cr,Ir,yt,Br,Mr,fo,T,Wr,bt,qr,Hr,Et,Or,Kr,$t,Lr,Ur,mo,V,Rr,kt,Fr,Jr,uo,I,X,Tt,ge,Yr,St,Gr,vo,Z,Qr,xt,Vr,Xr,_o,Ze,Zr,wo,ye,go,et,en,yo,tt,tn,bo,B,ee,At,be,on,Pt,rn,Eo,ot,nn,$o,M,te,jt,Ee,sn,zt,an,ko,E,ln,Nt,hn,cn,Dt,dn,pn,Ct,fn,mn,It,un,vn,To,$e,So,W,oe,Bt,ke,_n,Mt,wn,xo,S,gn,Wt,yn,bn,qt,En,$n,Ht,kn,Tn,Ao,Te,Po,q,re,Ot,Se,Sn,Kt,xn,jo,ne,An,Lt,Pn,jn,zo,xe,No,H,se,Ut,Ae,zn,Rt,Nn,Do,j,Dn,Pe,Cn,In,je,Bn,Mn,Co,z,Ft,Wn,qn,ze,Hn,Ne,On,Kn,Ln,O,Un,De,Rn,Fn,Ce,Jn,Yn,Io,K,ae,Jt,Ie,Gn,Yt,Qn,Bo,y,Vn,Be,Xn,Zn,Me,es,ts,We,os,rs,qe,ns,ss,He,as,ls,Mo,L,le,Gt,Oe,is,Qt,hs,Wo,N,cs,Ke,ds,ps,Le,fs,ms,qo,U,ie,Vt,Ue,us,Xt,vs,Ho,x,_s,rt,ws,gs,Zt,ys,bs,eo,Es,$s,Oo,Re,Ko,nt,ks,Lo,Fe,Uo,st,Ts,Ro,he,Ss,Je,xs,As,Fo;return me=new P({}),F=new ll({props:{$$slots:{default:[il]},$$scope:{ctx:to}}}),we=new P({}),ge=new P({}),ye=new ct({props:{code:"`The expanded size of the tensor (3) must match the existing size (7) at non-singleton dimension 2`",highlighted:'`The expanded <span class="hljs-built_in">size</span> of the tensor (<span class="hljs-number">3</span>) must match the existing <span class="hljs-built_in">size</span> (<span class="hljs-number">7</span>) at non-singleton <span class="hljs-keyword">dimension</span> <span class="hljs-number">2</span>`'}}),be=new P({}),Ee=new P({}),$e=new ct({props:{code:`from transformers import BertModel, BertTokenizer, BertConfig
import torch

enc = BertTokenizer.from_pretrained("bert-base-uncased")

# Tokenizing input text
text = "[CLS] Who was Jim Henson ? [SEP] Jim Henson was a puppeteer [SEP]"
tokenized_text = enc.tokenize(text)

# Masking one of the input tokens
masked_index = 8
tokenized_text[masked_index] = "[MASK]"
indexed_tokens = enc.convert_tokens_to_ids(tokenized_text)
segments_ids = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]

# Creating a dummy input
tokens_tensor = torch.tensor([indexed_tokens])
segments_tensors = torch.tensor([segments_ids])
dummy_input = [tokens_tensor, segments_tensors]

# Initializing the model with the torchscript flag
# Flag set to True even though it is not necessary as this model does not have an LM Head.
config = BertConfig(
    vocab_size_or_config_json_file=32000,
    hidden_size=768,
    num_hidden_layers=12,
    num_attention_heads=12,
    intermediate_size=3072,
    torchscript=True,
)

# Instantiating the model
model = BertModel(config)

# The model needs to be in evaluation mode
model.eval()

# If you are instantiating the model with *from_pretrained* you can also easily set the TorchScript flag
model = BertModel.from_pretrained("bert-base-uncased", torchscript=True)

# Creating the trace
traced_model = torch.jit.trace(model, [tokens_tensor, segments_tensors])
torch.jit.save(traced_model, "traced_bert.pt")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertModel, BertTokenizer, BertConfig
<span class="hljs-keyword">import</span> torch

enc = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-comment"># Tokenizing input text</span>
text = <span class="hljs-string">&quot;[CLS] Who was Jim Henson ? [SEP] Jim Henson was a puppeteer [SEP]&quot;</span>
tokenized_text = enc.tokenize(text)

<span class="hljs-comment"># Masking one of the input tokens</span>
masked_index = <span class="hljs-number">8</span>
tokenized_text[masked_index] = <span class="hljs-string">&quot;[MASK]&quot;</span>
indexed_tokens = enc.convert_tokens_to_ids(tokenized_text)
segments_ids = [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]

<span class="hljs-comment"># Creating a dummy input</span>
tokens_tensor = torch.tensor([indexed_tokens])
segments_tensors = torch.tensor([segments_ids])
dummy_input = [tokens_tensor, segments_tensors]

<span class="hljs-comment"># Initializing the model with the torchscript flag</span>
<span class="hljs-comment"># Flag set to True even though it is not necessary as this model does not have an LM Head.</span>
config = BertConfig(
    vocab_size_or_config_json_file=<span class="hljs-number">32000</span>,
    hidden_size=<span class="hljs-number">768</span>,
    num_hidden_layers=<span class="hljs-number">12</span>,
    num_attention_heads=<span class="hljs-number">12</span>,
    intermediate_size=<span class="hljs-number">3072</span>,
    torchscript=<span class="hljs-literal">True</span>,
)

<span class="hljs-comment"># Instantiating the model</span>
model = BertModel(config)

<span class="hljs-comment"># The model needs to be in evaluation mode</span>
model.<span class="hljs-built_in">eval</span>()

<span class="hljs-comment"># If you are instantiating the model with *from_pretrained* you can also easily set the TorchScript flag</span>
model = BertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, torchscript=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Creating the trace</span>
traced_model = torch.jit.trace(model, [tokens_tensor, segments_tensors])
torch.jit.save(traced_model, <span class="hljs-string">&quot;traced_bert.pt&quot;</span>)`}}),ke=new P({}),Te=new ct({props:{code:`loaded_model = torch.jit.load("traced_bert.pt")
loaded_model.eval()

all_encoder_layers, pooled_output = loaded_model(*dummy_input)`,highlighted:`loaded_model = torch.jit.load(<span class="hljs-string">&quot;traced_bert.pt&quot;</span>)
loaded_model.<span class="hljs-built_in">eval</span>()

all_encoder_layers, pooled_output = loaded_model(*dummy_input)`}}),Se=new P({}),xe=new ct({props:{code:"traced_model(tokens_tensor, segments_tensors)",highlighted:"traced_model(tokens_tensor, segments_tensors)"}}),Ae=new P({}),Ie=new P({}),Oe=new P({}),Ue=new P({}),Re=new ct({props:{code:`from transformers import BertModel, BertTokenizer, BertConfig
import torch
import torch.neuron`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertModel, BertTokenizer, BertConfig
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> torch.neuron`}}),Fe=new ct({props:{code:`- torch.jit.trace(model, [tokens_tensor, segments_tensors])
+ torch.neuron.trace(model, [token_tensor, segments_tensors])`,highlighted:`<span class="hljs-deletion">- torch.jit.trace(model, [tokens_tensor, segments_tensors])</span>
<span class="hljs-addition">+ torch.neuron.trace(model, [token_tensor, segments_tensors])</span>`}}),{c(){g=r("meta"),R=d(),b=r("h1"),$=r("a"),dt=r("span"),f(me.$$.fragment),pr=d(),pt=r("span"),fr=a("Export to TorchScript"),oo=d(),f(F.$$.fragment),ro=d(),J=r("p"),mr=a("According to the "),ue=r("a"),ur=a("TorchScript documentation"),vr=a(":"),no=d(),Ge=r("blockquote"),ft=r("p"),_r=a("TorchScript is a way to create serializable and optimizable models from PyTorch code."),so=d(),Y=r("p"),wr=a("There are two PyTorch modules, "),ve=r("a"),gr=a(`JIT and
TRACE`),yr=a(`, that allow developers to export their
models to be reused in other programs like efficiency-oriented C++ programs.`),ao=d(),Qe=r("p"),br=a(`We provide an interface that allows you to export \u{1F917} Transformers models to TorchScript
so they can be reused in a different environment than PyTorch-based Python programs.
Here, we explain how to export and use our models using TorchScript.`),lo=d(),Ve=r("p"),Er=a("Exporting a model requires two things:"),io=d(),G=r("ul"),_e=r("li"),$r=a("model instantiation with the "),mt=r("code"),kr=a("torchscript"),Tr=a(" flag"),Sr=d(),ut=r("li"),xr=a("a forward pass with dummy inputs"),ho=d(),Xe=r("p"),Ar=a(`These necessities imply several things developers should be careful about as detailed
below.`),co=d(),C=r("h2"),Q=r("a"),vt=r("span"),f(we.$$.fragment),Pr=d(),_t=r("span"),jr=a("TorchScript flag and tied weights"),po=d(),k=r("p"),zr=a("The "),wt=r("code"),Nr=a("torchscript"),Dr=a(` flag is necessary because most of the \u{1F917} Transformers language models
have tied weights between their `),gt=r("code"),Cr=a("Embedding"),Ir=a(" layer and their "),yt=r("code"),Br=a("Decoding"),Mr=a(` layer.
TorchScript does not allow you to export models that have tied weights, so it is
necessary to untie and clone the weights beforehand.`),fo=d(),T=r("p"),Wr=a("Models instantiated with the "),bt=r("code"),qr=a("torchscript"),Hr=a(" flag have their "),Et=r("code"),Or=a("Embedding"),Kr=a(` layer and
`),$t=r("code"),Lr=a("Decoding"),Ur=a(` layer separated, which means that they should not be trained down the line.
Training would desynchronize the two layers, leading to unexpected results.`),mo=d(),V=r("p"),Rr=a(`This is not the case for models that do not have a language model head, as those do not
have tied weights. These models can be safely exported without the `),kt=r("code"),Fr=a("torchscript"),Jr=a(" flag."),uo=d(),I=r("h2"),X=r("a"),Tt=r("span"),f(ge.$$.fragment),Yr=d(),St=r("span"),Gr=a("Dummy inputs and standard lengths"),vo=d(),Z=r("p"),Qr=a(`The dummy inputs are used for a models forward pass. While the inputs\u2019 values are
propagated through the layers, PyTorch keeps track of the different operations executed
on each tensor. These recorded operations are then used to create the `),xt=r("em"),Vr=a("trace"),Xr=a(` of the
model.`),_o=d(),Ze=r("p"),Zr=a(`The trace is created relative to the inputs\u2019 dimensions. It is therefore constrained by
the dimensions of the dummy input, and will not work for any other sequence length or
batch size. When trying with a different size, the following error is raised:`),wo=d(),f(ye.$$.fragment),go=d(),et=r("p"),en=a(`We recommended you trace the model with a dummy input size at least as large as the
largest input that will be fed to the model during inference. Padding can help fill the
missing values. However, since the model is traced with a larger input size, the
dimensions of the matrix will also be large, resulting in more calculations.`),yo=d(),tt=r("p"),tn=a(`Be careful of the total number of operations done on each input and follow the
performance closely when exporting varying sequence-length models.`),bo=d(),B=r("h2"),ee=r("a"),At=r("span"),f(be.$$.fragment),on=d(),Pt=r("span"),rn=a("Using TorchScript in Python"),Eo=d(),ot=r("p"),nn=a(`This section demonstrates how to save and load models as well as how to use the trace
for inference.`),$o=d(),M=r("h3"),te=r("a"),jt=r("span"),f(Ee.$$.fragment),sn=d(),zt=r("span"),an=a("Saving a model"),ko=d(),E=r("p"),ln=a("To export a "),Nt=r("code"),hn=a("BertModel"),cn=a(" with TorchScript, instantiate "),Dt=r("code"),dn=a("BertModel"),pn=a(" from the "),Ct=r("code"),fn=a("BertConfig"),mn=a(`
class and then save it to disk under the filename `),It=r("code"),un=a("traced_bert.pt"),vn=a(":"),To=d(),f($e.$$.fragment),So=d(),W=r("h3"),oe=r("a"),Bt=r("span"),f(ke.$$.fragment),_n=d(),Mt=r("span"),wn=a("Loading a model"),xo=d(),S=r("p"),gn=a("Now you can load the previously saved "),Wt=r("code"),yn=a("BertModel"),bn=a(", "),qt=r("code"),En=a("traced_bert.pt"),$n=a(`, from disk and use
it on the previously initialised `),Ht=r("code"),kn=a("dummy_input"),Tn=a(":"),Ao=d(),f(Te.$$.fragment),Po=d(),q=r("h3"),re=r("a"),Ot=r("span"),f(Se.$$.fragment),Sn=d(),Kt=r("span"),xn=a("Using a traced model for inference"),jo=d(),ne=r("p"),An=a("Use the traced model for inference by using its "),Lt=r("code"),Pn=a("__call__"),jn=a(" dunder method:"),zo=d(),f(xe.$$.fragment),No=d(),H=r("h2"),se=r("a"),Ut=r("span"),f(Ae.$$.fragment),zn=d(),Rt=r("span"),Nn=a("Deploy Hugging Face TorchScript models to AWS with the Neuron SDK"),Do=d(),j=r("p"),Dn=a("AWS introduced the "),Pe=r("a"),Cn=a("Amazon EC2 Inf1"),In=a(`
instance family for low cost, high performance machine learning inference in the cloud.
The Inf1 instances are powered by the AWS Inferentia chip, a custom-built hardware
accelerator, specializing in deep learning inferencing workloads. `),je=r("a"),Bn=a(`AWS
Neuron`),Mn=a(` is the SDK for
Inferentia that supports tracing and optimizing transformers models for deployment on
Inf1. The Neuron SDK provides:`),Co=d(),z=r("ol"),Ft=r("li"),Wn=a(`Easy-to-use API with one line of code change to trace and optimize a TorchScript
model for inference in the cloud.`),qn=d(),ze=r("li"),Hn=a("Out of the box performance optimizations for "),Ne=r("a"),On=a(`improved
cost-performance`),Kn=a("."),Ln=d(),O=r("li"),Un=a(`Support for Hugging Face transformers models built with either
`),De=r("a"),Rn=a("PyTorch"),Fn=a(`
or
`),Ce=r("a"),Jn=a("TensorFlow"),Yn=a("."),Io=d(),K=r("h3"),ae=r("a"),Jt=r("span"),f(Ie.$$.fragment),Gn=d(),Yt=r("span"),Qn=a("Implications"),Bo=d(),y=r("p"),Vn=a("Transformers models based on the "),Be=r("a"),Xn=a(`BERT (Bidirectional Encoder Representations from
Transformers)`),Zn=a(`
architecture, or its variants such as
`),Me=r("a"),es=a("distilBERT"),ts=a(` and
`),We=r("a"),os=a("roBERTa"),rs=a(` run best on
Inf1 for non-generative tasks such as extractive question answering, sequence
classification, and token classification. However, text generation tasks can still be
adapted to run on Inf1 according to this `),qe=r("a"),ns=a(`AWS Neuron MarianMT
tutorial`),ss=a(`.
More information about models that can be converted out of the box on Inferentia can be
found in the `),He=r("a"),as=a(`Model Architecture
Fit`),ls=a(`
section of the Neuron documentation.`),Mo=d(),L=r("h3"),le=r("a"),Gt=r("span"),f(Oe.$$.fragment),is=d(),Qt=r("span"),hs=a("Dependencies"),Wo=d(),N=r("p"),cs=a("Using AWS Neuron to convert models requires a "),Ke=r("a"),ds=a(`Neuron SDK
environment`),ps=a(`
which comes preconfigured on `),Le=r("a"),fs=a(`AWS Deep Learning
AMI`),ms=a("."),qo=d(),U=r("h3"),ie=r("a"),Vt=r("span"),f(Ue.$$.fragment),us=d(),Xt=r("span"),vs=a("Converting a model for AWS Neuron"),Ho=d(),x=r("p"),_s=a("Convert a model for AWS NEURON using the same code from "),rt=r("a"),ws=a(`Using TorchScript in
Python`),gs=a(" to trace a "),Zt=r("code"),ys=a("BertModel"),bs=a(`. Import the
`),eo=r("code"),Es=a("torch.neuron"),$s=a(` framework extension to access the components of the Neuron SDK through a
Python API:`),Oo=d(),f(Re.$$.fragment),Ko=d(),nt=r("p"),ks=a("You only need to modify the following line:"),Lo=d(),f(Fe.$$.fragment),Uo=d(),st=r("p"),Ts=a("This enables the Neuron SDK to trace the model and optimize it for Inf1 instances."),Ro=d(),he=r("p"),Ss=a(`To learn more about AWS Neuron SDK features, tools, example tutorials and latest
updates, please see the `),Je=r("a"),xs=a(`AWS NeuronSDK
documentation`),As=a("."),this.h()},l(e){const i=sl('[data-svelte="svelte-1phssyn"]',document.head);g=n(i,"META",{name:!0,content:!0}),i.forEach(o),R=p(e),b=n(e,"H1",{class:!0});var Ye=s(b);$=n(Ye,"A",{id:!0,class:!0,href:!0});var Ps=s($);dt=n(Ps,"SPAN",{});var js=s(dt);m(me.$$.fragment,js),js.forEach(o),Ps.forEach(o),pr=p(Ye),pt=n(Ye,"SPAN",{});var zs=s(pt);fr=l(zs,"Export to TorchScript"),zs.forEach(o),Ye.forEach(o),oo=p(e),m(F.$$.fragment,e),ro=p(e),J=n(e,"P",{});var Jo=s(J);mr=l(Jo,"According to the "),ue=n(Jo,"A",{href:!0,rel:!0});var Ns=s(ue);ur=l(Ns,"TorchScript documentation"),Ns.forEach(o),vr=l(Jo,":"),Jo.forEach(o),no=p(e),Ge=n(e,"BLOCKQUOTE",{});var Ds=s(Ge);ft=n(Ds,"P",{});var Cs=s(ft);_r=l(Cs,"TorchScript is a way to create serializable and optimizable models from PyTorch code."),Cs.forEach(o),Ds.forEach(o),so=p(e),Y=n(e,"P",{});var Yo=s(Y);wr=l(Yo,"There are two PyTorch modules, "),ve=n(Yo,"A",{href:!0,rel:!0});var Is=s(ve);gr=l(Is,`JIT and
TRACE`),Is.forEach(o),yr=l(Yo,`, that allow developers to export their
models to be reused in other programs like efficiency-oriented C++ programs.`),Yo.forEach(o),ao=p(e),Qe=n(e,"P",{});var Bs=s(Qe);br=l(Bs,`We provide an interface that allows you to export \u{1F917} Transformers models to TorchScript
so they can be reused in a different environment than PyTorch-based Python programs.
Here, we explain how to export and use our models using TorchScript.`),Bs.forEach(o),lo=p(e),Ve=n(e,"P",{});var Ms=s(Ve);Er=l(Ms,"Exporting a model requires two things:"),Ms.forEach(o),io=p(e),G=n(e,"UL",{});var Go=s(G);_e=n(Go,"LI",{});var Qo=s(_e);$r=l(Qo,"model instantiation with the "),mt=n(Qo,"CODE",{});var Ws=s(mt);kr=l(Ws,"torchscript"),Ws.forEach(o),Tr=l(Qo," flag"),Qo.forEach(o),Sr=p(Go),ut=n(Go,"LI",{});var qs=s(ut);xr=l(qs,"a forward pass with dummy inputs"),qs.forEach(o),Go.forEach(o),ho=p(e),Xe=n(e,"P",{});var Hs=s(Xe);Ar=l(Hs,`These necessities imply several things developers should be careful about as detailed
below.`),Hs.forEach(o),co=p(e),C=n(e,"H2",{class:!0});var Vo=s(C);Q=n(Vo,"A",{id:!0,class:!0,href:!0});var Os=s(Q);vt=n(Os,"SPAN",{});var Ks=s(vt);m(we.$$.fragment,Ks),Ks.forEach(o),Os.forEach(o),Pr=p(Vo),_t=n(Vo,"SPAN",{});var Ls=s(_t);jr=l(Ls,"TorchScript flag and tied weights"),Ls.forEach(o),Vo.forEach(o),po=p(e),k=n(e,"P",{});var ce=s(k);zr=l(ce,"The "),wt=n(ce,"CODE",{});var Us=s(wt);Nr=l(Us,"torchscript"),Us.forEach(o),Dr=l(ce,` flag is necessary because most of the \u{1F917} Transformers language models
have tied weights between their `),gt=n(ce,"CODE",{});var Rs=s(gt);Cr=l(Rs,"Embedding"),Rs.forEach(o),Ir=l(ce," layer and their "),yt=n(ce,"CODE",{});var Fs=s(yt);Br=l(Fs,"Decoding"),Fs.forEach(o),Mr=l(ce,` layer.
TorchScript does not allow you to export models that have tied weights, so it is
necessary to untie and clone the weights beforehand.`),ce.forEach(o),fo=p(e),T=n(e,"P",{});var de=s(T);Wr=l(de,"Models instantiated with the "),bt=n(de,"CODE",{});var Js=s(bt);qr=l(Js,"torchscript"),Js.forEach(o),Hr=l(de," flag have their "),Et=n(de,"CODE",{});var Ys=s(Et);Or=l(Ys,"Embedding"),Ys.forEach(o),Kr=l(de,` layer and
`),$t=n(de,"CODE",{});var Gs=s($t);Lr=l(Gs,"Decoding"),Gs.forEach(o),Ur=l(de,` layer separated, which means that they should not be trained down the line.
Training would desynchronize the two layers, leading to unexpected results.`),de.forEach(o),mo=p(e),V=n(e,"P",{});var Xo=s(V);Rr=l(Xo,`This is not the case for models that do not have a language model head, as those do not
have tied weights. These models can be safely exported without the `),kt=n(Xo,"CODE",{});var Qs=s(kt);Fr=l(Qs,"torchscript"),Qs.forEach(o),Jr=l(Xo," flag."),Xo.forEach(o),uo=p(e),I=n(e,"H2",{class:!0});var Zo=s(I);X=n(Zo,"A",{id:!0,class:!0,href:!0});var Vs=s(X);Tt=n(Vs,"SPAN",{});var Xs=s(Tt);m(ge.$$.fragment,Xs),Xs.forEach(o),Vs.forEach(o),Yr=p(Zo),St=n(Zo,"SPAN",{});var Zs=s(St);Gr=l(Zs,"Dummy inputs and standard lengths"),Zs.forEach(o),Zo.forEach(o),vo=p(e),Z=n(e,"P",{});var er=s(Z);Qr=l(er,`The dummy inputs are used for a models forward pass. While the inputs\u2019 values are
propagated through the layers, PyTorch keeps track of the different operations executed
on each tensor. These recorded operations are then used to create the `),xt=n(er,"EM",{});var ea=s(xt);Vr=l(ea,"trace"),ea.forEach(o),Xr=l(er,` of the
model.`),er.forEach(o),_o=p(e),Ze=n(e,"P",{});var ta=s(Ze);Zr=l(ta,`The trace is created relative to the inputs\u2019 dimensions. It is therefore constrained by
the dimensions of the dummy input, and will not work for any other sequence length or
batch size. When trying with a different size, the following error is raised:`),ta.forEach(o),wo=p(e),m(ye.$$.fragment,e),go=p(e),et=n(e,"P",{});var oa=s(et);en=l(oa,`We recommended you trace the model with a dummy input size at least as large as the
largest input that will be fed to the model during inference. Padding can help fill the
missing values. However, since the model is traced with a larger input size, the
dimensions of the matrix will also be large, resulting in more calculations.`),oa.forEach(o),yo=p(e),tt=n(e,"P",{});var ra=s(tt);tn=l(ra,`Be careful of the total number of operations done on each input and follow the
performance closely when exporting varying sequence-length models.`),ra.forEach(o),bo=p(e),B=n(e,"H2",{class:!0});var tr=s(B);ee=n(tr,"A",{id:!0,class:!0,href:!0});var na=s(ee);At=n(na,"SPAN",{});var sa=s(At);m(be.$$.fragment,sa),sa.forEach(o),na.forEach(o),on=p(tr),Pt=n(tr,"SPAN",{});var aa=s(Pt);rn=l(aa,"Using TorchScript in Python"),aa.forEach(o),tr.forEach(o),Eo=p(e),ot=n(e,"P",{});var la=s(ot);nn=l(la,`This section demonstrates how to save and load models as well as how to use the trace
for inference.`),la.forEach(o),$o=p(e),M=n(e,"H3",{class:!0});var or=s(M);te=n(or,"A",{id:!0,class:!0,href:!0});var ia=s(te);jt=n(ia,"SPAN",{});var ha=s(jt);m(Ee.$$.fragment,ha),ha.forEach(o),ia.forEach(o),sn=p(or),zt=n(or,"SPAN",{});var ca=s(zt);an=l(ca,"Saving a model"),ca.forEach(o),or.forEach(o),ko=p(e),E=n(e,"P",{});var D=s(E);ln=l(D,"To export a "),Nt=n(D,"CODE",{});var da=s(Nt);hn=l(da,"BertModel"),da.forEach(o),cn=l(D," with TorchScript, instantiate "),Dt=n(D,"CODE",{});var pa=s(Dt);dn=l(pa,"BertModel"),pa.forEach(o),pn=l(D," from the "),Ct=n(D,"CODE",{});var fa=s(Ct);fn=l(fa,"BertConfig"),fa.forEach(o),mn=l(D,`
class and then save it to disk under the filename `),It=n(D,"CODE",{});var ma=s(It);un=l(ma,"traced_bert.pt"),ma.forEach(o),vn=l(D,":"),D.forEach(o),To=p(e),m($e.$$.fragment,e),So=p(e),W=n(e,"H3",{class:!0});var rr=s(W);oe=n(rr,"A",{id:!0,class:!0,href:!0});var ua=s(oe);Bt=n(ua,"SPAN",{});var va=s(Bt);m(ke.$$.fragment,va),va.forEach(o),ua.forEach(o),_n=p(rr),Mt=n(rr,"SPAN",{});var _a=s(Mt);wn=l(_a,"Loading a model"),_a.forEach(o),rr.forEach(o),xo=p(e),S=n(e,"P",{});var pe=s(S);gn=l(pe,"Now you can load the previously saved "),Wt=n(pe,"CODE",{});var wa=s(Wt);yn=l(wa,"BertModel"),wa.forEach(o),bn=l(pe,", "),qt=n(pe,"CODE",{});var ga=s(qt);En=l(ga,"traced_bert.pt"),ga.forEach(o),$n=l(pe,`, from disk and use
it on the previously initialised `),Ht=n(pe,"CODE",{});var ya=s(Ht);kn=l(ya,"dummy_input"),ya.forEach(o),Tn=l(pe,":"),pe.forEach(o),Ao=p(e),m(Te.$$.fragment,e),Po=p(e),q=n(e,"H3",{class:!0});var nr=s(q);re=n(nr,"A",{id:!0,class:!0,href:!0});var ba=s(re);Ot=n(ba,"SPAN",{});var Ea=s(Ot);m(Se.$$.fragment,Ea),Ea.forEach(o),ba.forEach(o),Sn=p(nr),Kt=n(nr,"SPAN",{});var $a=s(Kt);xn=l($a,"Using a traced model for inference"),$a.forEach(o),nr.forEach(o),jo=p(e),ne=n(e,"P",{});var sr=s(ne);An=l(sr,"Use the traced model for inference by using its "),Lt=n(sr,"CODE",{});var ka=s(Lt);Pn=l(ka,"__call__"),ka.forEach(o),jn=l(sr," dunder method:"),sr.forEach(o),zo=p(e),m(xe.$$.fragment,e),No=p(e),H=n(e,"H2",{class:!0});var ar=s(H);se=n(ar,"A",{id:!0,class:!0,href:!0});var Ta=s(se);Ut=n(Ta,"SPAN",{});var Sa=s(Ut);m(Ae.$$.fragment,Sa),Sa.forEach(o),Ta.forEach(o),zn=p(ar),Rt=n(ar,"SPAN",{});var xa=s(Rt);Nn=l(xa,"Deploy Hugging Face TorchScript models to AWS with the Neuron SDK"),xa.forEach(o),ar.forEach(o),Do=p(e),j=n(e,"P",{});var at=s(j);Dn=l(at,"AWS introduced the "),Pe=n(at,"A",{href:!0,rel:!0});var Aa=s(Pe);Cn=l(Aa,"Amazon EC2 Inf1"),Aa.forEach(o),In=l(at,`
instance family for low cost, high performance machine learning inference in the cloud.
The Inf1 instances are powered by the AWS Inferentia chip, a custom-built hardware
accelerator, specializing in deep learning inferencing workloads. `),je=n(at,"A",{href:!0,rel:!0});var Pa=s(je);Bn=l(Pa,`AWS
Neuron`),Pa.forEach(o),Mn=l(at,` is the SDK for
Inferentia that supports tracing and optimizing transformers models for deployment on
Inf1. The Neuron SDK provides:`),at.forEach(o),Co=p(e),z=n(e,"OL",{});var lt=s(z);Ft=n(lt,"LI",{});var ja=s(Ft);Wn=l(ja,`Easy-to-use API with one line of code change to trace and optimize a TorchScript
model for inference in the cloud.`),ja.forEach(o),qn=p(lt),ze=n(lt,"LI",{});var lr=s(ze);Hn=l(lr,"Out of the box performance optimizations for "),Ne=n(lr,"A",{href:!0,rel:!0});var za=s(Ne);On=l(za,`improved
cost-performance`),za.forEach(o),Kn=l(lr,"."),lr.forEach(o),Ln=p(lt),O=n(lt,"LI",{});var it=s(O);Un=l(it,`Support for Hugging Face transformers models built with either
`),De=n(it,"A",{href:!0,rel:!0});var Na=s(De);Rn=l(Na,"PyTorch"),Na.forEach(o),Fn=l(it,`
or
`),Ce=n(it,"A",{href:!0,rel:!0});var Da=s(Ce);Jn=l(Da,"TensorFlow"),Da.forEach(o),Yn=l(it,"."),it.forEach(o),lt.forEach(o),Io=p(e),K=n(e,"H3",{class:!0});var ir=s(K);ae=n(ir,"A",{id:!0,class:!0,href:!0});var Ca=s(ae);Jt=n(Ca,"SPAN",{});var Ia=s(Jt);m(Ie.$$.fragment,Ia),Ia.forEach(o),Ca.forEach(o),Gn=p(ir),Yt=n(ir,"SPAN",{});var Ba=s(Yt);Qn=l(Ba,"Implications"),Ba.forEach(o),ir.forEach(o),Bo=p(e),y=n(e,"P",{});var A=s(y);Vn=l(A,"Transformers models based on the "),Be=n(A,"A",{href:!0,rel:!0});var Ma=s(Be);Xn=l(Ma,`BERT (Bidirectional Encoder Representations from
Transformers)`),Ma.forEach(o),Zn=l(A,`
architecture, or its variants such as
`),Me=n(A,"A",{href:!0,rel:!0});var Wa=s(Me);es=l(Wa,"distilBERT"),Wa.forEach(o),ts=l(A,` and
`),We=n(A,"A",{href:!0,rel:!0});var qa=s(We);os=l(qa,"roBERTa"),qa.forEach(o),rs=l(A,` run best on
Inf1 for non-generative tasks such as extractive question answering, sequence
classification, and token classification. However, text generation tasks can still be
adapted to run on Inf1 according to this `),qe=n(A,"A",{href:!0,rel:!0});var Ha=s(qe);ns=l(Ha,`AWS Neuron MarianMT
tutorial`),Ha.forEach(o),ss=l(A,`.
More information about models that can be converted out of the box on Inferentia can be
found in the `),He=n(A,"A",{href:!0,rel:!0});var Oa=s(He);as=l(Oa,`Model Architecture
Fit`),Oa.forEach(o),ls=l(A,`
section of the Neuron documentation.`),A.forEach(o),Mo=p(e),L=n(e,"H3",{class:!0});var hr=s(L);le=n(hr,"A",{id:!0,class:!0,href:!0});var Ka=s(le);Gt=n(Ka,"SPAN",{});var La=s(Gt);m(Oe.$$.fragment,La),La.forEach(o),Ka.forEach(o),is=p(hr),Qt=n(hr,"SPAN",{});var Ua=s(Qt);hs=l(Ua,"Dependencies"),Ua.forEach(o),hr.forEach(o),Wo=p(e),N=n(e,"P",{});var ht=s(N);cs=l(ht,"Using AWS Neuron to convert models requires a "),Ke=n(ht,"A",{href:!0,rel:!0});var Ra=s(Ke);ds=l(Ra,`Neuron SDK
environment`),Ra.forEach(o),ps=l(ht,`
which comes preconfigured on `),Le=n(ht,"A",{href:!0,rel:!0});var Fa=s(Le);fs=l(Fa,`AWS Deep Learning
AMI`),Fa.forEach(o),ms=l(ht,"."),ht.forEach(o),qo=p(e),U=n(e,"H3",{class:!0});var cr=s(U);ie=n(cr,"A",{id:!0,class:!0,href:!0});var Ja=s(ie);Vt=n(Ja,"SPAN",{});var Ya=s(Vt);m(Ue.$$.fragment,Ya),Ya.forEach(o),Ja.forEach(o),us=p(cr),Xt=n(cr,"SPAN",{});var Ga=s(Xt);vs=l(Ga,"Converting a model for AWS Neuron"),Ga.forEach(o),cr.forEach(o),Ho=p(e),x=n(e,"P",{});var fe=s(x);_s=l(fe,"Convert a model for AWS NEURON using the same code from "),rt=n(fe,"A",{href:!0});var Qa=s(rt);ws=l(Qa,`Using TorchScript in
Python`),Qa.forEach(o),gs=l(fe," to trace a "),Zt=n(fe,"CODE",{});var Va=s(Zt);ys=l(Va,"BertModel"),Va.forEach(o),bs=l(fe,`. Import the
`),eo=n(fe,"CODE",{});var Xa=s(eo);Es=l(Xa,"torch.neuron"),Xa.forEach(o),$s=l(fe,` framework extension to access the components of the Neuron SDK through a
Python API:`),fe.forEach(o),Oo=p(e),m(Re.$$.fragment,e),Ko=p(e),nt=n(e,"P",{});var Za=s(nt);ks=l(Za,"You only need to modify the following line:"),Za.forEach(o),Lo=p(e),m(Fe.$$.fragment,e),Uo=p(e),st=n(e,"P",{});var el=s(st);Ts=l(el,"This enables the Neuron SDK to trace the model and optimize it for Inf1 instances."),el.forEach(o),Ro=p(e),he=n(e,"P",{});var dr=s(he);Ss=l(dr,`To learn more about AWS Neuron SDK features, tools, example tutorials and latest
updates, please see the `),Je=n(dr,"A",{href:!0,rel:!0});var tl=s(Je);xs=l(tl,`AWS NeuronSDK
documentation`),tl.forEach(o),As=l(dr,"."),dr.forEach(o),this.h()},h(){c(g,"name","hf:doc:metadata"),c(g,"content",JSON.stringify(cl)),c($,"id","export-to-torchscript"),c($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($,"href","#export-to-torchscript"),c(b,"class","relative group"),c(ue,"href","https://pytorch.org/docs/stable/jit.html"),c(ue,"rel","nofollow"),c(ve,"href","https://pytorch.org/docs/stable/jit.html"),c(ve,"rel","nofollow"),c(Q,"id","torchscript-flag-and-tied-weights"),c(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Q,"href","#torchscript-flag-and-tied-weights"),c(C,"class","relative group"),c(X,"id","dummy-inputs-and-standard-lengths"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#dummy-inputs-and-standard-lengths"),c(I,"class","relative group"),c(ee,"id","using-torchscript-in-python"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#using-torchscript-in-python"),c(B,"class","relative group"),c(te,"id","saving-a-model"),c(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(te,"href","#saving-a-model"),c(M,"class","relative group"),c(oe,"id","loading-a-model"),c(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oe,"href","#loading-a-model"),c(W,"class","relative group"),c(re,"id","using-a-traced-model-for-inference"),c(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(re,"href","#using-a-traced-model-for-inference"),c(q,"class","relative group"),c(se,"id","deploy-hugging-face-torchscript-models-to-aws-with-the-neuron-sdk"),c(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(se,"href","#deploy-hugging-face-torchscript-models-to-aws-with-the-neuron-sdk"),c(H,"class","relative group"),c(Pe,"href","https://aws.amazon.com/ec2/instance-types/inf1/"),c(Pe,"rel","nofollow"),c(je,"href","https://awsdocs-neuron.readthedocs-hosted.com/en/latest/#"),c(je,"rel","nofollow"),c(Ne,"href","https://awsdocs-neuron.readthedocs-hosted.com/en/latest/neuron-guide/benchmark/%3E"),c(Ne,"rel","nofollow"),c(De,"href","https://awsdocs-neuron.readthedocs-hosted.com/en/latest/src/examples/pytorch/bert_tutorial/tutorial_pretrained_bert.html"),c(De,"rel","nofollow"),c(Ce,"href","https://awsdocs-neuron.readthedocs-hosted.com/en/latest/src/examples/tensorflow/huggingface_bert/huggingface_bert.html"),c(Ce,"rel","nofollow"),c(ae,"id","implications"),c(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ae,"href","#implications"),c(K,"class","relative group"),c(Be,"href","https://huggingface.co/docs/transformers/main/model_doc/bert"),c(Be,"rel","nofollow"),c(Me,"href","https://huggingface.co/docs/transformers/main/model_doc/distilbert"),c(Me,"rel","nofollow"),c(We,"href","https://huggingface.co/docs/transformers/main/model_doc/roberta"),c(We,"rel","nofollow"),c(qe,"href","https://awsdocs-neuron.readthedocs-hosted.com/en/latest/src/examples/pytorch/transformers-marianmt.html"),c(qe,"rel","nofollow"),c(He,"href","https://awsdocs-neuron.readthedocs-hosted.com/en/latest/neuron-guide/models/models-inferentia.html#models-inferentia"),c(He,"rel","nofollow"),c(le,"id","dependencies"),c(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(le,"href","#dependencies"),c(L,"class","relative group"),c(Ke,"href","https://awsdocs-neuron.readthedocs-hosted.com/en/latest/neuron-guide/neuron-frameworks/pytorch-neuron/index.html#installation-guide"),c(Ke,"rel","nofollow"),c(Le,"href","https://docs.aws.amazon.com/dlami/latest/devguide/tutorial-inferentia-launching.html"),c(Le,"rel","nofollow"),c(ie,"id","converting-a-model-for-aws-neuron"),c(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ie,"href","#converting-a-model-for-aws-neuron"),c(U,"class","relative group"),c(rt,"href","serialization#using-torchscript-in-python"),c(Je,"href","https://awsdocs-neuron.readthedocs-hosted.com/en/latest/index.html"),c(Je,"rel","nofollow")},m(e,i){t(document.head,g),h(e,R,i),h(e,b,i),t(b,$),t($,dt),u(me,dt,null),t(b,pr),t(b,pt),t(pt,fr),h(e,oo,i),u(F,e,i),h(e,ro,i),h(e,J,i),t(J,mr),t(J,ue),t(ue,ur),t(J,vr),h(e,no,i),h(e,Ge,i),t(Ge,ft),t(ft,_r),h(e,so,i),h(e,Y,i),t(Y,wr),t(Y,ve),t(ve,gr),t(Y,yr),h(e,ao,i),h(e,Qe,i),t(Qe,br),h(e,lo,i),h(e,Ve,i),t(Ve,Er),h(e,io,i),h(e,G,i),t(G,_e),t(_e,$r),t(_e,mt),t(mt,kr),t(_e,Tr),t(G,Sr),t(G,ut),t(ut,xr),h(e,ho,i),h(e,Xe,i),t(Xe,Ar),h(e,co,i),h(e,C,i),t(C,Q),t(Q,vt),u(we,vt,null),t(C,Pr),t(C,_t),t(_t,jr),h(e,po,i),h(e,k,i),t(k,zr),t(k,wt),t(wt,Nr),t(k,Dr),t(k,gt),t(gt,Cr),t(k,Ir),t(k,yt),t(yt,Br),t(k,Mr),h(e,fo,i),h(e,T,i),t(T,Wr),t(T,bt),t(bt,qr),t(T,Hr),t(T,Et),t(Et,Or),t(T,Kr),t(T,$t),t($t,Lr),t(T,Ur),h(e,mo,i),h(e,V,i),t(V,Rr),t(V,kt),t(kt,Fr),t(V,Jr),h(e,uo,i),h(e,I,i),t(I,X),t(X,Tt),u(ge,Tt,null),t(I,Yr),t(I,St),t(St,Gr),h(e,vo,i),h(e,Z,i),t(Z,Qr),t(Z,xt),t(xt,Vr),t(Z,Xr),h(e,_o,i),h(e,Ze,i),t(Ze,Zr),h(e,wo,i),u(ye,e,i),h(e,go,i),h(e,et,i),t(et,en),h(e,yo,i),h(e,tt,i),t(tt,tn),h(e,bo,i),h(e,B,i),t(B,ee),t(ee,At),u(be,At,null),t(B,on),t(B,Pt),t(Pt,rn),h(e,Eo,i),h(e,ot,i),t(ot,nn),h(e,$o,i),h(e,M,i),t(M,te),t(te,jt),u(Ee,jt,null),t(M,sn),t(M,zt),t(zt,an),h(e,ko,i),h(e,E,i),t(E,ln),t(E,Nt),t(Nt,hn),t(E,cn),t(E,Dt),t(Dt,dn),t(E,pn),t(E,Ct),t(Ct,fn),t(E,mn),t(E,It),t(It,un),t(E,vn),h(e,To,i),u($e,e,i),h(e,So,i),h(e,W,i),t(W,oe),t(oe,Bt),u(ke,Bt,null),t(W,_n),t(W,Mt),t(Mt,wn),h(e,xo,i),h(e,S,i),t(S,gn),t(S,Wt),t(Wt,yn),t(S,bn),t(S,qt),t(qt,En),t(S,$n),t(S,Ht),t(Ht,kn),t(S,Tn),h(e,Ao,i),u(Te,e,i),h(e,Po,i),h(e,q,i),t(q,re),t(re,Ot),u(Se,Ot,null),t(q,Sn),t(q,Kt),t(Kt,xn),h(e,jo,i),h(e,ne,i),t(ne,An),t(ne,Lt),t(Lt,Pn),t(ne,jn),h(e,zo,i),u(xe,e,i),h(e,No,i),h(e,H,i),t(H,se),t(se,Ut),u(Ae,Ut,null),t(H,zn),t(H,Rt),t(Rt,Nn),h(e,Do,i),h(e,j,i),t(j,Dn),t(j,Pe),t(Pe,Cn),t(j,In),t(j,je),t(je,Bn),t(j,Mn),h(e,Co,i),h(e,z,i),t(z,Ft),t(Ft,Wn),t(z,qn),t(z,ze),t(ze,Hn),t(ze,Ne),t(Ne,On),t(ze,Kn),t(z,Ln),t(z,O),t(O,Un),t(O,De),t(De,Rn),t(O,Fn),t(O,Ce),t(Ce,Jn),t(O,Yn),h(e,Io,i),h(e,K,i),t(K,ae),t(ae,Jt),u(Ie,Jt,null),t(K,Gn),t(K,Yt),t(Yt,Qn),h(e,Bo,i),h(e,y,i),t(y,Vn),t(y,Be),t(Be,Xn),t(y,Zn),t(y,Me),t(Me,es),t(y,ts),t(y,We),t(We,os),t(y,rs),t(y,qe),t(qe,ns),t(y,ss),t(y,He),t(He,as),t(y,ls),h(e,Mo,i),h(e,L,i),t(L,le),t(le,Gt),u(Oe,Gt,null),t(L,is),t(L,Qt),t(Qt,hs),h(e,Wo,i),h(e,N,i),t(N,cs),t(N,Ke),t(Ke,ds),t(N,ps),t(N,Le),t(Le,fs),t(N,ms),h(e,qo,i),h(e,U,i),t(U,ie),t(ie,Vt),u(Ue,Vt,null),t(U,us),t(U,Xt),t(Xt,vs),h(e,Ho,i),h(e,x,i),t(x,_s),t(x,rt),t(rt,ws),t(x,gs),t(x,Zt),t(Zt,ys),t(x,bs),t(x,eo),t(eo,Es),t(x,$s),h(e,Oo,i),u(Re,e,i),h(e,Ko,i),h(e,nt,i),t(nt,ks),h(e,Lo,i),u(Fe,e,i),h(e,Uo,i),h(e,st,i),t(st,Ts),h(e,Ro,i),h(e,he,i),t(he,Ss),t(he,Je),t(Je,xs),t(he,As),Fo=!0},p(e,[i]){const Ye={};i&2&&(Ye.$$scope={dirty:i,ctx:e}),F.$set(Ye)},i(e){Fo||(v(me.$$.fragment,e),v(F.$$.fragment,e),v(we.$$.fragment,e),v(ge.$$.fragment,e),v(ye.$$.fragment,e),v(be.$$.fragment,e),v(Ee.$$.fragment,e),v($e.$$.fragment,e),v(ke.$$.fragment,e),v(Te.$$.fragment,e),v(Se.$$.fragment,e),v(xe.$$.fragment,e),v(Ae.$$.fragment,e),v(Ie.$$.fragment,e),v(Oe.$$.fragment,e),v(Ue.$$.fragment,e),v(Re.$$.fragment,e),v(Fe.$$.fragment,e),Fo=!0)},o(e){_(me.$$.fragment,e),_(F.$$.fragment,e),_(we.$$.fragment,e),_(ge.$$.fragment,e),_(ye.$$.fragment,e),_(be.$$.fragment,e),_(Ee.$$.fragment,e),_($e.$$.fragment,e),_(ke.$$.fragment,e),_(Te.$$.fragment,e),_(Se.$$.fragment,e),_(xe.$$.fragment,e),_(Ae.$$.fragment,e),_(Ie.$$.fragment,e),_(Oe.$$.fragment,e),_(Ue.$$.fragment,e),_(Re.$$.fragment,e),_(Fe.$$.fragment,e),Fo=!1},d(e){o(g),e&&o(R),e&&o(b),w(me),e&&o(oo),w(F,e),e&&o(ro),e&&o(J),e&&o(no),e&&o(Ge),e&&o(so),e&&o(Y),e&&o(ao),e&&o(Qe),e&&o(lo),e&&o(Ve),e&&o(io),e&&o(G),e&&o(ho),e&&o(Xe),e&&o(co),e&&o(C),w(we),e&&o(po),e&&o(k),e&&o(fo),e&&o(T),e&&o(mo),e&&o(V),e&&o(uo),e&&o(I),w(ge),e&&o(vo),e&&o(Z),e&&o(_o),e&&o(Ze),e&&o(wo),w(ye,e),e&&o(go),e&&o(et),e&&o(yo),e&&o(tt),e&&o(bo),e&&o(B),w(be),e&&o(Eo),e&&o(ot),e&&o($o),e&&o(M),w(Ee),e&&o(ko),e&&o(E),e&&o(To),w($e,e),e&&o(So),e&&o(W),w(ke),e&&o(xo),e&&o(S),e&&o(Ao),w(Te,e),e&&o(Po),e&&o(q),w(Se),e&&o(jo),e&&o(ne),e&&o(zo),w(xe,e),e&&o(No),e&&o(H),w(Ae),e&&o(Do),e&&o(j),e&&o(Co),e&&o(z),e&&o(Io),e&&o(K),w(Ie),e&&o(Bo),e&&o(y),e&&o(Mo),e&&o(L),w(Oe),e&&o(Wo),e&&o(N),e&&o(qo),e&&o(U),w(Ue),e&&o(Ho),e&&o(x),e&&o(Oo),w(Re,e),e&&o(Ko),e&&o(nt),e&&o(Lo),w(Fe,e),e&&o(Uo),e&&o(st),e&&o(Ro),e&&o(he)}}}const cl={local:"export-to-torchscript",sections:[{local:"torchscript-flag-and-tied-weights",title:"TorchScript flag and tied weights"},{local:"dummy-inputs-and-standard-lengths",title:"Dummy inputs and standard lengths"},{local:"using-torchscript-in-python",sections:[{local:"saving-a-model",title:"Saving a model"},{local:"loading-a-model",title:"Loading a model"},{local:"using-a-traced-model-for-inference",title:"Using a traced model for inference"}],title:"Using TorchScript in Python"},{local:"deploy-hugging-face-torchscript-models-to-aws-with-the-neuron-sdk",sections:[{local:"implications",title:"Implications"},{local:"dependencies",title:"Dependencies"},{local:"converting-a-model-for-aws-neuron",title:"Converting a model for AWS Neuron"}],title:"Deploy Hugging Face TorchScript models to AWS with the Neuron SDK"}],title:"Export to TorchScript"};function dl(to){return al(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vl extends ol{constructor(g){super();rl(this,g,dl,hl,nl,{})}}export{vl as default,cl as metadata};
