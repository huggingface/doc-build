import{S as vi,i as bi,s as yi,e as a,k as l,w as b,t as n,M as wi,c as s,d as t,m as p,a as d,x as y,h as r,b as i,G as e,g as u,y as w,q as E,o as k,B as $,v as Ei,L as sn}from"../../chunks/vendor-hf-doc-builder.js";import{T as _i}from"../../chunks/Tip-hf-doc-builder.js";import{D as ie}from"../../chunks/Docstring-hf-doc-builder.js";import{C as le}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ae}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as an}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ki(z){let m,S,_,f,v;return f=new le({props:{code:`from transformers import BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

# Initializing a Wav2Vec2 & BERT style configuration
config_encoder = Wav2Vec2Config()
config_decoder = BertConfig()

config = SpeechEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

# Initializing a Wav2Vec2Bert model from a Wav2Vec2 & bert-base-uncased style configurations
model = SpeechEncoderDecoderModel(config=config)

# Accessing the model configuration
config_encoder = model.config.encoder
config_decoder = model.config.decoder
# set decoder config to causal lm
config_decoder.is_decoder = True
config_decoder.add_cross_attention = True

# Saving the model, including its configuration
model.save_pretrained("my-model")

# loading model and config from pretrained folder
encoder_decoder_config = SpeechEncoderDecoderConfig.from_pretrained("my-model")
model = SpeechEncoderDecoderModel.from_pretrained("my-model", config=encoder_decoder_config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Wav2Vec2 &amp; BERT style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = Wav2Vec2Config()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = SpeechEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Wav2Vec2Bert model from a Wav2Vec2 &amp; bert-base-uncased style configurations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = model.config.encoder
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = model.config.decoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set decoder config to causal lm</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.add_cross_attention = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_decoder_config = SpeechEncoderDecoderConfig.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),{c(){m=a("p"),S=n("Examples:"),_=l(),b(f.$$.fragment)},l(c){m=s(c,"P",{});var g=d(m);S=r(g,"Examples:"),g.forEach(t),_=p(c),y(f.$$.fragment,c)},m(c,g){u(c,m,g),e(m,S),u(c,_,g),w(f,c,g),v=!0},p:sn,i(c){v||(E(f.$$.fragment,c),v=!0)},o(c){k(f.$$.fragment,c),v=!1},d(c){c&&t(m),c&&t(_),$(f,c)}}}function $i(z){let m,S,_,f,v;return{c(){m=a("p"),S=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){m=s(c,"P",{});var g=d(m);S=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var O=d(_);f=r(O,"Module"),O.forEach(t),v=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(c,g){u(c,m,g),e(m,S),e(m,_),e(_,f),e(m,v)},d(c){c&&t(m)}}}function Si(z){let m,S,_,f,v;return f=new le({props:{code:`from transformers import SpeechEncoderDecoderModel, Wav2Vec2Processor
from datasets import load_dataset
import torch

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-xls-r-300m-en-to-15")
model = SpeechEncoderDecoderModel.from_pretrained("facebook/wav2vec2-xls-r-300m-en-to-15")

ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")

input_values = processor(ds[0]["audio"]["array"], return_tensors="pt").input_values
# Inference: Translate English speech to German
generated = model.generate(input_values)
decoded = processor.batch_decode(generated, skip_special_tokens=True)[0]
decoded

# Training: Train model on English transcription
with processor.as_target_processor():
    labels = processor(ds[0]["text"], return_tensors="pt").input_ids

loss = model(input_values, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel, Wav2Vec2Processor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-xls-r-300m-en-to-15&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-xls-r-300m-en-to-15&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Inference: Translate English speech to German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoded = processor.batch_decode(generated, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>decoded
<span class="hljs-string">&#x27;Mr. Quilter ist der Apostel der Mittelschicht und wir freuen uns, sein Evangelium willkommen hei\xDFen zu k\xF6nnen.&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Training: Train model on English transcription</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    labels = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){m=a("p"),S=n("Examples:"),_=l(),b(f.$$.fragment)},l(c){m=s(c,"P",{});var g=d(m);S=r(g,"Examples:"),g.forEach(t),_=p(c),y(f.$$.fragment,c)},m(c,g){u(c,m,g),e(m,S),u(c,_,g),w(f,c,g),v=!0},p:sn,i(c){v||(E(f.$$.fragment,c),v=!0)},o(c){k(f.$$.fragment,c),v=!1},d(c){c&&t(m),c&&t(_),$(f,c)}}}function xi(z){let m,S,_,f,v;return f=new le({props:{code:`from transformers import SpeechEncoderDecoderModel

# initialize a wav2vec2bert from a pretrained Wav2Vec2 and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized
model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
    "facebook/wav2vec2-base-960h", "bert-base-uncased"
)
# saving model after fine-tuning
model.save_pretrained("./wav2vec2bert")
# load fine-tuned model
model = SpeechEncoderDecoderModel.from_pretrained("./wav2vec2bert")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a wav2vec2bert from a pretrained Wav2Vec2 and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./wav2vec2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2bert&quot;</span>)`}}),{c(){m=a("p"),S=n("Example:"),_=l(),b(f.$$.fragment)},l(c){m=s(c,"P",{});var g=d(m);S=r(g,"Example:"),g.forEach(t),_=p(c),y(f.$$.fragment,c)},m(c,g){u(c,m,g),e(m,S),u(c,_,g),w(f,c,g),v=!0},p:sn,i(c){v||(E(f.$$.fragment,c),v=!0)},o(c){k(f.$$.fragment,c),v=!1},d(c){c&&t(m),c&&t(_),$(f,c)}}}function ji(z){let m,S,_,f,v;return{c(){m=a("p"),S=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){m=s(c,"P",{});var g=d(m);S=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var O=d(_);f=r(O,"Module"),O.forEach(t),v=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(c,g){u(c,m,g),e(m,S),e(m,_),e(_,f),e(m,v)},d(c){c&&t(m)}}}function Ti(z){let m,S,_,f,v;return f=new le({props:{code:`from transformers import FlaxSpeechEncoderDecoderModel, BartTokenizer

# load a fine-tuned wav2vec2-2-bart model
model = FlaxSpeechEncoderDecoderModel.from_pretrained("patrickvonplaten/wav2vec2-2-bart-large")
# load output tokenizer
tokenizer_output = BartTokenizer.from_pretrained("facebook/bart-large")

inputs = jnp.ones((2, 5000), dtype=jnp.float32)

# use bart's special bos, pad and eos tokens
model.config.decoder_start_token_id = model.decoder.config.bos_token_id
model.config.pad_token_id = model.decoder.config.pad_token_id
model.config.eos_token_id = model.decoder.config.eos_token_id

outputs = model.generate(inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxSpeechEncoderDecoderModel, BartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned wav2vec2-2-bart model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxSpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wav2vec2-2-bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load output tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_output = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = jnp.ones((<span class="hljs-number">2</span>, <span class="hljs-number">5000</span>), dtype=jnp.float32)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use bart&#x27;s special bos, pad and eos tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = model.decoder.config.bos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.decoder.config.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.eos_token_id = model.decoder.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs)
<span class="hljs-comment"># Assert something? More interesting input? dtype correct?</span>`}}),{c(){m=a("p"),S=n("Examples:"),_=l(),b(f.$$.fragment)},l(c){m=s(c,"P",{});var g=d(m);S=r(g,"Examples:"),g.forEach(t),_=p(c),y(f.$$.fragment,c)},m(c,g){u(c,m,g),e(m,S),u(c,_,g),w(f,c,g),v=!0},p:sn,i(c){v||(E(f.$$.fragment,c),v=!0)},o(c){k(f.$$.fragment,c),v=!1},d(c){c&&t(m),c&&t(_),$(f,c)}}}function Mi(z){let m,S,_,f,v;return f=new le({props:{code:`from transformers import FlaxSpeechEncoderDecoderModel

# initialize a wav2vec2-2-bart from pretrained wav2vec2 and bart models. Note that the cross-attention layers will be randomly initialized
model = FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
    "facebook/wav2vec2-large-lv60", "facebook/bart-large"
)
# saving model after fine-tuning
model.save_pretrained("./wav2vec2-2-bart-large")
# load fine-tuned model
model = FlaxSpeechEncoderDecoderModel.from_pretrained("./wav2vec2-2-bart-large")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxSpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a wav2vec2-2-bart from pretrained wav2vec2 and bart models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec2-large-lv60&quot;</span>, <span class="hljs-string">&quot;facebook/bart-large&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./wav2vec2-2-bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxSpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2-2-bart-large&quot;</span>)`}}),{c(){m=a("p"),S=n("Example:"),_=l(),b(f.$$.fragment)},l(c){m=s(c,"P",{});var g=d(m);S=r(g,"Example:"),g.forEach(t),_=p(c),y(f.$$.fragment,c)},m(c,g){u(c,m,g),e(m,S),u(c,_,g),w(f,c,g),v=!0},p:sn,i(c){v||(E(f.$$.fragment,c),v=!0)},o(c){k(f.$$.fragment,c),v=!1},d(c){c&&t(m),c&&t(_),$(f,c)}}}function Di(z){let m,S,_,f,v,c,g,O,Xn,dn,C,er,xo,or,tr,lt,nr,rr,jo,ar,sr,To,dr,cr,cn,R,ir,pt,lr,pr,Fe,hr,mr,ln,H,fr,Mo,ur,gr,Do,_r,vr,pn,Y,pe,ht,Le,br,Ne,yr,mt,wr,Er,hn,B,qo,kr,$r,Po,Sr,xr,ft,jr,Tr,mn,Ve,fn,Z,he,ut,We,Mr,Ie,Dr,gt,qr,Pr,un,x,zo,zr,Cr,_t,Ar,Fr,Co,Lr,Nr,Ao,Vr,Wr,vt,Ir,Or,bt,Br,Rr,yt,Hr,Gr,Fo,Ur,Jr,me,Yr,wt,Zr,Kr,Et,Qr,Xr,Lo,ea,oa,gn,Oe,_n,K,fe,kt,Be,ta,Re,na,$t,ra,aa,vn,F,sa,St,da,ca,No,ia,la,xt,pa,ha,bn,ue,ma,jt,fa,ua,yn,He,wn,Q,ge,Tt,Ge,ga,Mt,_a,En,L,va,Dt,ba,ya,qt,wa,Ea,Pt,ka,$a,kn,Ue,$n,X,_e,zt,Je,Sa,Ct,xa,Sn,P,Ye,ja,ve,Vo,Ta,Ma,Wo,Da,qa,Pa,ee,za,Io,Ca,Aa,Oo,Fa,La,Na,be,Va,ye,Ze,Wa,Ke,Ia,Bo,Oa,Ba,Ra,we,Qe,Ha,oe,Ga,At,Ua,Ja,Ft,Ya,Za,xn,te,Ee,Lt,Xe,Ka,Nt,Qa,jn,j,eo,Xa,ne,es,Ro,os,ts,Ho,ns,rs,as,oo,ss,to,ds,cs,is,no,ls,ro,ps,hs,ms,Vt,fs,us,ao,gs,Go,_s,vs,bs,so,ys,co,ws,Es,ks,G,Uo,$s,Ss,Wt,xs,js,It,Ts,Ms,Ds,N,io,qs,re,Ps,Jo,zs,Cs,Ot,As,Fs,Ls,ke,Ns,$e,Vs,V,lo,Ws,Bt,Is,Os,ae,Bs,Rt,Rs,Hs,Ht,Gs,Us,Js,Se,Tn,se,xe,Gt,po,Ys,Ut,Zs,Mn,T,ho,Ks,de,Qs,Yo,Xs,ed,Zo,od,td,nd,mo,rd,fo,ad,sd,dd,uo,cd,go,id,ld,pd,Jt,hd,md,_o,fd,Ko,ud,gd,_d,vo,vd,bo,bd,yd,wd,U,Qo,Ed,kd,Yt,$d,Sd,Zt,xd,jd,Td,W,yo,Md,ce,Dd,Xo,qd,Pd,Kt,zd,Cd,Ad,je,Fd,Te,Ld,J,wo,Nd,Qt,Vd,Wd,Me,Dn;return c=new Ae({}),Le=new Ae({}),Ve=new le({props:{code:`from transformers import BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

config_encoder = Wav2Vec2Config()
config_decoder = BertConfig()

config = SpeechEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
model = SpeechEncoderDecoderModel(config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = Wav2Vec2Config()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = SpeechEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel(config=config)`}}),We=new Ae({}),Oe=new le({props:{code:`from transformers import SpeechEncoderDecoderModel

model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
    "facebook/hubert-large-ll60k", "bert-base-uncased"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/hubert-large-ll60k&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)`}}),Be=new Ae({}),He=new le({props:{code:`from transformers import Wav2Vec2Processor, SpeechEncoderDecoderModel
from datasets import load_dataset
import torch

# load a fine-tuned speech translation model and corresponding processor
model = SpeechEncoderDecoderModel.from_pretrained("facebook/wav2vec2-xls-r-300m-en-to-15")
processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-xls-r-300m-en-to-15")

# let's perform inference on a piece of English speech (which we'll translate to German)
ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
input_values = processor(ds[0]["audio"]["array"], return_tensors="pt").input_values

# autoregressively generate transcription (uses greedy decoding by default)
generated_ids = model.generate(input_values)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]
print(generated_text)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SpeechEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned speech translation model and corresponding processor</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-xls-r-300m-en-to-15&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-xls-r-300m-en-to-15&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s perform inference on a piece of English speech (which we&#x27;ll translate to German)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># autoregressively generate transcription (uses greedy decoding by default)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(input_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(generated_text)
Mr. Quilter ist der Apostel der Mittelschicht und wir freuen uns, sein Evangelium willkommen hei\xDFen zu k\xF6nnen.`}}),Ge=new Ae({}),Ue=new le({props:{code:`from transformers import Wav2Vec2Processor, SpeechEncoderDecoderModel
from datasets import load_dataset

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-base-960h")
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
    "facebook/wav2vec2-base-960h", "bert-base-uncased"
)

model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
model.config.pad_token_id = processor.tokenizer.pad_token_id

# load a speech input
ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
input_values = processor(ds[0]["audio"]["array"], return_tensors="pt").input_values

# load its corresponding transcription
with processor.as_target_processor():
    labels = processor(ds[0]["text"], return_tensors="pt").input_ids

# the forward function automatically creates the correct decoder_input_ids
loss = model(input_values, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SpeechEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = processor.tokenizer.pad_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a speech input</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load its corresponding transcription</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    labels = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Je=new Ae({}),Ye=new ie({props:{name:"class transformers.SpeechEncoderDecoderConfig",anchor:"transformers.SpeechEncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L27"}}),be=new an({props:{anchor:"transformers.SpeechEncoderDecoderConfig.example",$$slots:{default:[ki]},$$scope:{ctx:z}}}),Ze=new ie({props:{name:"from_encoder_decoder_configs",anchor:"transformers.SpeechEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L93",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a></p>
`}}),Qe=new ie({props:{name:"to_dict",anchor:"transformers.SpeechEncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L110",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),Xe=new Ae({}),eo=new ie({props:{name:"class transformers.SpeechEncoderDecoderModel",anchor:"transformers.SpeechEncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L173"}}),io=new ie({props:{name:"forward",anchor:"transformers.SpeechEncoderDecoderModel.forward",parameters:[{name:"inputs",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"input_values",val:" = None"},{name:"input_features",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.forward.inputs",description:`<strong>inputs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform or speech features. Values can be obtained by loading a <em>.flac</em>
or <em>.wav</em> audio file into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile
library (<em>pip install soundfile</em>). To prepare the array into <em>inputs</em>, either the <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> or
<a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextProcessor">Speech2TextProcessor</a> should be used for padding and conversion into a tensor of type
<em>torch.FloatTensor</em>.`,name:"inputs"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code> to the
right, replacing -100 by the <code>pad_token_id</code> and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor
of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the
decoder.`,name:"encoder_outputs"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>, <em>optional</em>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion
into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L442",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ke=new _i({props:{$$slots:{default:[$i]},$$scope:{ctx:z}}}),$e=new an({props:{anchor:"transformers.SpeechEncoderDecoderModel.forward.example",$$slots:{default:[Si]},$$scope:{ctx:z}}}),lo=new ie({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L287"}}),Se=new an({props:{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[xi]},$$scope:{ctx:z}}}),po=new Ae({}),ho=new ie({props:{name:"class transformers.FlaxSpeechEncoderDecoderModel",anchor:"transformers.FlaxSpeechEncoderDecoderModel",parameters:[{name:"config",val:": SpeechEncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L329"}}),yo=new ie({props:{name:"__call__",anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__",parameters:[{name:"inputs",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.inputs",description:`<strong>inputs</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform or speech features. Values can be obtained by loading a <em>.flac</em>
or <em>.wav</em> audio file into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile
library (<em>pip install soundfile</em>). To prepare the array into <em>inputs</em>, either the <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> or
<a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextProcessor">Speech2TextProcessor</a> should be used for padding and conversion into a tensor of type
<em>torch.FloatTensor</em>.`,name:"inputs"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For sequence to sequence training, <code>decoder_input_ids</code> should be provided. <code>decoder_input_ids</code> should be
created outside of the model by shifting the <code>labels</code> to the right, replacing -100 by the <code>pad_token_id</code>
and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.decoder.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L662",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),je=new _i({props:{$$slots:{default:[ji]},$$scope:{ctx:z}}}),Te=new an({props:{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.example",$$slots:{default:[Ti]},$$scope:{ctx:z}}}),wo=new ie({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L784"}}),Me=new an({props:{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Mi]},$$scope:{ctx:z}}}),{c(){m=a("meta"),S=l(),_=a("h1"),f=a("a"),v=a("span"),b(c.$$.fragment),g=l(),O=a("span"),Xn=n("Speech Encoder Decoder Models"),dn=l(),C=a("p"),er=n("The "),xo=a("a"),or=n("SpeechEncoderDecoderModel"),tr=n(` can be used to initialize a speech-to-text model
with any pretrained speech autoencoding model as the encoder (`),lt=a("em"),nr=n("e.g."),rr=l(),jo=a("a"),ar=n("Wav2Vec2"),sr=n(", "),To=a("a"),dr=n("Hubert"),cr=n(") and any pretrained autoregressive model as the decoder."),cn=l(),R=a("p"),ir=n(`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),pt=a("em"),lr=n("e.g."),pr=n(" been shown in "),Fe=a("a"),hr=n(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),mr=n(` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),ln=l(),H=a("p"),fr=n("An example of how to use a "),Mo=a("a"),ur=n("SpeechEncoderDecoderModel"),gr=n(" for inference can be seen in "),Do=a("a"),_r=n("Speech2Text2"),vr=n("."),pn=l(),Y=a("h2"),pe=a("a"),ht=a("span"),b(Le.$$.fragment),br=l(),Ne=a("span"),yr=n("Randomly initializing "),mt=a("code"),wr=n("SpeechEncoderDecoderModel"),Er=n(" from model configurations."),hn=l(),B=a("p"),qo=a("a"),kr=n("SpeechEncoderDecoderModel"),$r=n(" can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),Po=a("a"),Sr=n("Wav2Vec2Model"),xr=n(` configuration for the encoder
and the default `),ft=a("code"),jr=n("BertForCausalLM"),Tr=n(" configuration for the decoder."),mn=l(),b(Ve.$$.fragment),fn=l(),Z=a("h2"),he=a("a"),ut=a("span"),b(We.$$.fragment),Mr=l(),Ie=a("span"),Dr=n("Initialising "),gt=a("code"),qr=n("SpeechEncoderDecoderModel"),Pr=n(" from a pretrained encoder and a pretrained decoder."),un=l(),x=a("p"),zo=a("a"),zr=n("SpeechEncoderDecoderModel"),Cr=n(" can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained Transformer-based speech model, "),_t=a("em"),Ar=n("e.g."),Fr=l(),Co=a("a"),Lr=n("Wav2Vec2"),Nr=n(", "),Ao=a("a"),Vr=n("Hubert"),Wr=n(" can serve as the encoder and both pretrained auto-encoding models, "),vt=a("em"),Ir=n("e.g."),Or=n(" BERT, pretrained causal language models, "),bt=a("em"),Br=n("e.g."),Rr=n(" GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),yt=a("em"),Hr=n("e.g."),Gr=n(` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),Fo=a("a"),Ur=n("SpeechEncoderDecoderModel"),Jr=n(" from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),me=a("a"),Yr=n("the "),wt=a("em"),Zr=n("Warm-starting-encoder-decoder blog post"),Kr=n(`.
To do so, the `),Et=a("code"),Qr=n("SpeechEncoderDecoderModel"),Xr=n(" class provides a "),Lo=a("a"),ea=n("SpeechEncoderDecoderModel.from_encoder_decoder_pretrained()"),oa=n(" method."),gn=l(),b(Oe.$$.fragment),_n=l(),K=a("h2"),fe=a("a"),kt=a("span"),b(Be.$$.fragment),ta=l(),Re=a("span"),na=n("Loading an existing "),$t=a("code"),ra=n("SpeechEncoderDecoderModel"),aa=n(" checkpoint and perform inference."),vn=l(),F=a("p"),sa=n("To load fine-tuned checkpoints of the "),St=a("code"),da=n("SpeechEncoderDecoderModel"),ca=n(" class, "),No=a("a"),ia=n("SpeechEncoderDecoderModel"),la=n(" provides the "),xt=a("code"),pa=n("from_pretrained(...)"),ha=n(" method just like any other model architecture in Transformers."),bn=l(),ue=a("p"),ma=n("To perform inference, one uses the "),jt=a("code"),fa=n("generate"),ua=n(" method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),yn=l(),b(He.$$.fragment),wn=l(),Q=a("h2"),ge=a("a"),Tt=a("span"),b(Ge.$$.fragment),ga=l(),Mt=a("span"),_a=n("Training"),En=l(),L=a("p"),va=n(`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model on a dataset of (speech, text) pairs.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),Dt=a("code"),ba=n("input_values"),ya=n(` (which are the
speech inputs) and `),qt=a("code"),wa=n("labels"),Ea=n(" (which are the "),Pt=a("code"),ka=n("input_ids"),$a=n(" of the encoded target sequence)."),kn=l(),b(Ue.$$.fragment),$n=l(),X=a("h2"),_e=a("a"),zt=a("span"),b(Je.$$.fragment),Sa=l(),Ct=a("span"),xa=n("SpeechEncoderDecoderConfig"),Sn=l(),P=a("div"),b(Ye.$$.fragment),ja=l(),ve=a("p"),Vo=a("a"),Ta=n("SpeechEncoderDecoderConfig"),Ma=n(` is the configuration class to store the configuration of a
`),Wo=a("a"),Da=n("SpeechEncoderDecoderModel"),qa=n(`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),Pa=l(),ee=a("p"),za=n("Configuration objects inherit from "),Io=a("a"),Ca=n("PretrainedConfig"),Aa=n(` and can be used to control the model outputs. Read the
documentation from `),Oo=a("a"),Fa=n("PretrainedConfig"),La=n(" for more information."),Na=l(),b(be.$$.fragment),Va=l(),ye=a("div"),b(Ze.$$.fragment),Wa=l(),Ke=a("p"),Ia=n("Instantiate a "),Bo=a("a"),Oa=n("SpeechEncoderDecoderConfig"),Ba=n(` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),Ra=l(),we=a("div"),b(Qe.$$.fragment),Ha=l(),oe=a("p"),Ga=n("Serializes this instance to a Python dictionary. Override the default "),At=a("em"),Ua=n("to_dict()"),Ja=n(" from "),Ft=a("em"),Ya=n("PretrainedConfig"),Za=n("."),xn=l(),te=a("h2"),Ee=a("a"),Lt=a("span"),b(Xe.$$.fragment),Ka=l(),Nt=a("span"),Qa=n("SpeechEncoderDecoderModel"),jn=l(),j=a("div"),b(eo.$$.fragment),Xa=l(),ne=a("p"),es=n(`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Ro=a("a"),os=n("from_pretrained()"),ts=n(` function and the decoder is loaded via
`),Ho=a("a"),ns=n("from_pretrained()"),rs=n(` function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),as=l(),oo=a("p"),ss=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),to=a("a"),ds=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),cs=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),is=l(),no=a("p"),ls=n("Additionally, in "),ro=a("a"),ps=n(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),hs=n(` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),ms=l(),Vt=a("p"),fs=n(`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),us=l(),ao=a("p"),gs=n("This model inherits from "),Go=a("a"),_s=n("PreTrainedModel"),vs=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bs=l(),so=a("p"),ys=n("This model is also a PyTorch "),co=a("a"),ws=n("torch.nn.Module"),Es=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ks=l(),G=a("p"),Uo=a("a"),$s=n("SpeechEncoderDecoderModel"),Ss=n(` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),Wt=a("em"),xs=n("~transformers.AutoModel.from_pretrained"),js=n(` class method for the encoder and
:meth`),It=a("em"),Ts=n("~transformers.AutoModelForCausalLM.from_pretrained"),Ms=n(" class method for the decoder."),Ds=l(),N=a("div"),b(io.$$.fragment),qs=l(),re=a("p"),Ps=n("The "),Jo=a("a"),zs=n("SpeechEncoderDecoderModel"),Cs=n(" forward method, overrides the "),Ot=a("code"),As=n("__call__"),Fs=n(" special method."),Ls=l(),b(ke.$$.fragment),Ns=l(),b($e.$$.fragment),Vs=l(),V=a("div"),b(lo.$$.fragment),Ws=l(),Bt=a("p"),Is=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Os=l(),ae=a("p"),Bs=n("The model is set in evaluation mode by default using "),Rt=a("code"),Rs=n("model.eval()"),Hs=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Ht=a("code"),Gs=n("model.train()"),Us=n("."),Js=l(),b(Se.$$.fragment),Tn=l(),se=a("h2"),xe=a("a"),Gt=a("span"),b(po.$$.fragment),Ys=l(),Ut=a("span"),Zs=n("FlaxSpeechEncoderDecoderModel"),Mn=l(),T=a("div"),b(ho.$$.fragment),Ks=l(),de=a("p"),Qs=n(`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Yo=a("a"),Xs=n("from_pretrained()"),ed=n(` function and the decoder is loaded via
`),Zo=a("a"),od=n("from_pretrained()"),td=n(` function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),nd=l(),mo=a("p"),rd=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),fo=a("a"),ad=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),sd=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),dd=l(),uo=a("p"),cd=n("Additionally, in "),go=a("a"),id=n(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),ld=n(` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),pd=l(),Jt=a("p"),hd=n(`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),md=l(),_o=a("p"),fd=n("This model inherits from "),Ko=a("a"),ud=n("FlaxPreTrainedModel"),gd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_d=l(),vo=a("p"),vd=n(`This model is also a Flax Linen
`),bo=a("a"),bd=n("flax.nn.Module"),yd=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wd=l(),U=a("p"),Qo=a("a"),Ed=n("FlaxSpeechEncoderDecoderModel"),kd=n(` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one
as decoder module when created with the :meth`),Yt=a("em"),$d=n("~transformers.FlaxAutoModel.from_pretrained"),Sd=n(` class method for the
encoder and :meth`),Zt=a("em"),xd=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),jd=n(" class method for the decoder."),Td=l(),W=a("div"),b(yo.$$.fragment),Md=l(),ce=a("p"),Dd=n("The "),Xo=a("a"),qd=n("FlaxSpeechEncoderDecoderModel"),Pd=n(" forward method, overrides the "),Kt=a("code"),zd=n("__call__"),Cd=n(" special method."),Ad=l(),b(je.$$.fragment),Fd=l(),b(Te.$$.fragment),Ld=l(),J=a("div"),b(wo.$$.fragment),Nd=l(),Qt=a("p"),Vd=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Wd=l(),b(Me.$$.fragment),this.h()},l(o){const h=wi('[data-svelte="svelte-1phssyn"]',document.head);m=s(h,"META",{name:!0,content:!0}),h.forEach(t),S=p(o),_=s(o,"H1",{class:!0});var Eo=d(_);f=s(Eo,"A",{id:!0,class:!0,href:!0});var Xt=d(f);v=s(Xt,"SPAN",{});var en=d(v);y(c.$$.fragment,en),en.forEach(t),Xt.forEach(t),g=p(Eo),O=s(Eo,"SPAN",{});var on=d(O);Xn=r(on,"Speech Encoder Decoder Models"),on.forEach(t),Eo.forEach(t),dn=p(o),C=s(o,"P",{});var A=d(C);er=r(A,"The "),xo=s(A,"A",{href:!0});var tn=d(xo);or=r(tn,"SpeechEncoderDecoderModel"),tn.forEach(t),tr=r(A,` can be used to initialize a speech-to-text model
with any pretrained speech autoencoding model as the encoder (`),lt=s(A,"EM",{});var nn=d(lt);nr=r(nn,"e.g."),nn.forEach(t),rr=p(A),jo=s(A,"A",{href:!0});var Od=d(jo);ar=r(Od,"Wav2Vec2"),Od.forEach(t),sr=r(A,", "),To=s(A,"A",{href:!0});var Bd=d(To);dr=r(Bd,"Hubert"),Bd.forEach(t),cr=r(A,") and any pretrained autoregressive model as the decoder."),A.forEach(t),cn=p(o),R=s(o,"P",{});var et=d(R);ir=r(et,`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),pt=s(et,"EM",{});var Rd=d(pt);lr=r(Rd,"e.g."),Rd.forEach(t),pr=r(et," been shown in "),Fe=s(et,"A",{href:!0,rel:!0});var Hd=d(Fe);hr=r(Hd,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Hd.forEach(t),mr=r(et,` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),et.forEach(t),ln=p(o),H=s(o,"P",{});var ot=d(H);fr=r(ot,"An example of how to use a "),Mo=s(ot,"A",{href:!0});var Gd=d(Mo);ur=r(Gd,"SpeechEncoderDecoderModel"),Gd.forEach(t),gr=r(ot," for inference can be seen in "),Do=s(ot,"A",{href:!0});var Ud=d(Do);_r=r(Ud,"Speech2Text2"),Ud.forEach(t),vr=r(ot,"."),ot.forEach(t),pn=p(o),Y=s(o,"H2",{class:!0});var qn=d(Y);pe=s(qn,"A",{id:!0,class:!0,href:!0});var Jd=d(pe);ht=s(Jd,"SPAN",{});var Yd=d(ht);y(Le.$$.fragment,Yd),Yd.forEach(t),Jd.forEach(t),br=p(qn),Ne=s(qn,"SPAN",{});var Pn=d(Ne);yr=r(Pn,"Randomly initializing "),mt=s(Pn,"CODE",{});var Zd=d(mt);wr=r(Zd,"SpeechEncoderDecoderModel"),Zd.forEach(t),Er=r(Pn," from model configurations."),Pn.forEach(t),qn.forEach(t),hn=p(o),B=s(o,"P",{});var ko=d(B);qo=s(ko,"A",{href:!0});var Kd=d(qo);kr=r(Kd,"SpeechEncoderDecoderModel"),Kd.forEach(t),$r=r(ko," can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),Po=s(ko,"A",{href:!0});var Qd=d(Po);Sr=r(Qd,"Wav2Vec2Model"),Qd.forEach(t),xr=r(ko,` configuration for the encoder
and the default `),ft=s(ko,"CODE",{});var Xd=d(ft);jr=r(Xd,"BertForCausalLM"),Xd.forEach(t),Tr=r(ko," configuration for the decoder."),ko.forEach(t),mn=p(o),y(Ve.$$.fragment,o),fn=p(o),Z=s(o,"H2",{class:!0});var zn=d(Z);he=s(zn,"A",{id:!0,class:!0,href:!0});var ec=d(he);ut=s(ec,"SPAN",{});var oc=d(ut);y(We.$$.fragment,oc),oc.forEach(t),ec.forEach(t),Mr=p(zn),Ie=s(zn,"SPAN",{});var Cn=d(Ie);Dr=r(Cn,"Initialising "),gt=s(Cn,"CODE",{});var tc=d(gt);qr=r(tc,"SpeechEncoderDecoderModel"),tc.forEach(t),Pr=r(Cn," from a pretrained encoder and a pretrained decoder."),Cn.forEach(t),zn.forEach(t),un=p(o),x=s(o,"P",{});var M=d(x);zo=s(M,"A",{href:!0});var nc=d(zo);zr=r(nc,"SpeechEncoderDecoderModel"),nc.forEach(t),Cr=r(M," can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained Transformer-based speech model, "),_t=s(M,"EM",{});var rc=d(_t);Ar=r(rc,"e.g."),rc.forEach(t),Fr=p(M),Co=s(M,"A",{href:!0});var ac=d(Co);Lr=r(ac,"Wav2Vec2"),ac.forEach(t),Nr=r(M,", "),Ao=s(M,"A",{href:!0});var sc=d(Ao);Vr=r(sc,"Hubert"),sc.forEach(t),Wr=r(M," can serve as the encoder and both pretrained auto-encoding models, "),vt=s(M,"EM",{});var dc=d(vt);Ir=r(dc,"e.g."),dc.forEach(t),Or=r(M," BERT, pretrained causal language models, "),bt=s(M,"EM",{});var cc=d(bt);Br=r(cc,"e.g."),cc.forEach(t),Rr=r(M," GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),yt=s(M,"EM",{});var ic=d(yt);Hr=r(ic,"e.g."),ic.forEach(t),Gr=r(M,` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),Fo=s(M,"A",{href:!0});var lc=d(Fo);Ur=r(lc,"SpeechEncoderDecoderModel"),lc.forEach(t),Jr=r(M," from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),me=s(M,"A",{href:!0,rel:!0});var Id=d(me);Yr=r(Id,"the "),wt=s(Id,"EM",{});var pc=d(wt);Zr=r(pc,"Warm-starting-encoder-decoder blog post"),pc.forEach(t),Id.forEach(t),Kr=r(M,`.
To do so, the `),Et=s(M,"CODE",{});var hc=d(Et);Qr=r(hc,"SpeechEncoderDecoderModel"),hc.forEach(t),Xr=r(M," class provides a "),Lo=s(M,"A",{href:!0});var mc=d(Lo);ea=r(mc,"SpeechEncoderDecoderModel.from_encoder_decoder_pretrained()"),mc.forEach(t),oa=r(M," method."),M.forEach(t),gn=p(o),y(Oe.$$.fragment,o),_n=p(o),K=s(o,"H2",{class:!0});var An=d(K);fe=s(An,"A",{id:!0,class:!0,href:!0});var fc=d(fe);kt=s(fc,"SPAN",{});var uc=d(kt);y(Be.$$.fragment,uc),uc.forEach(t),fc.forEach(t),ta=p(An),Re=s(An,"SPAN",{});var Fn=d(Re);na=r(Fn,"Loading an existing "),$t=s(Fn,"CODE",{});var gc=d($t);ra=r(gc,"SpeechEncoderDecoderModel"),gc.forEach(t),aa=r(Fn," checkpoint and perform inference."),Fn.forEach(t),An.forEach(t),vn=p(o),F=s(o,"P",{});var De=d(F);sa=r(De,"To load fine-tuned checkpoints of the "),St=s(De,"CODE",{});var _c=d(St);da=r(_c,"SpeechEncoderDecoderModel"),_c.forEach(t),ca=r(De," class, "),No=s(De,"A",{href:!0});var vc=d(No);ia=r(vc,"SpeechEncoderDecoderModel"),vc.forEach(t),la=r(De," provides the "),xt=s(De,"CODE",{});var bc=d(xt);pa=r(bc,"from_pretrained(...)"),bc.forEach(t),ha=r(De," method just like any other model architecture in Transformers."),De.forEach(t),bn=p(o),ue=s(o,"P",{});var Ln=d(ue);ma=r(Ln,"To perform inference, one uses the "),jt=s(Ln,"CODE",{});var yc=d(jt);fa=r(yc,"generate"),yc.forEach(t),ua=r(Ln," method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),Ln.forEach(t),yn=p(o),y(He.$$.fragment,o),wn=p(o),Q=s(o,"H2",{class:!0});var Nn=d(Q);ge=s(Nn,"A",{id:!0,class:!0,href:!0});var wc=d(ge);Tt=s(wc,"SPAN",{});var Ec=d(Tt);y(Ge.$$.fragment,Ec),Ec.forEach(t),wc.forEach(t),ga=p(Nn),Mt=s(Nn,"SPAN",{});var kc=d(Mt);_a=r(kc,"Training"),kc.forEach(t),Nn.forEach(t),En=p(o),L=s(o,"P",{});var qe=d(L);va=r(qe,`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model on a dataset of (speech, text) pairs.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),Dt=s(qe,"CODE",{});var $c=d(Dt);ba=r($c,"input_values"),$c.forEach(t),ya=r(qe,` (which are the
speech inputs) and `),qt=s(qe,"CODE",{});var Sc=d(qt);wa=r(Sc,"labels"),Sc.forEach(t),Ea=r(qe," (which are the "),Pt=s(qe,"CODE",{});var xc=d(Pt);ka=r(xc,"input_ids"),xc.forEach(t),$a=r(qe," of the encoded target sequence)."),qe.forEach(t),kn=p(o),y(Ue.$$.fragment,o),$n=p(o),X=s(o,"H2",{class:!0});var Vn=d(X);_e=s(Vn,"A",{id:!0,class:!0,href:!0});var jc=d(_e);zt=s(jc,"SPAN",{});var Tc=d(zt);y(Je.$$.fragment,Tc),Tc.forEach(t),jc.forEach(t),Sa=p(Vn),Ct=s(Vn,"SPAN",{});var Mc=d(Ct);xa=r(Mc,"SpeechEncoderDecoderConfig"),Mc.forEach(t),Vn.forEach(t),Sn=p(o),P=s(o,"DIV",{class:!0});var I=d(P);y(Ye.$$.fragment,I),ja=p(I),ve=s(I,"P",{});var rn=d(ve);Vo=s(rn,"A",{href:!0});var Dc=d(Vo);Ta=r(Dc,"SpeechEncoderDecoderConfig"),Dc.forEach(t),Ma=r(rn,` is the configuration class to store the configuration of a
`),Wo=s(rn,"A",{href:!0});var qc=d(Wo);Da=r(qc,"SpeechEncoderDecoderModel"),qc.forEach(t),qa=r(rn,`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),rn.forEach(t),Pa=p(I),ee=s(I,"P",{});var tt=d(ee);za=r(tt,"Configuration objects inherit from "),Io=s(tt,"A",{href:!0});var Pc=d(Io);Ca=r(Pc,"PretrainedConfig"),Pc.forEach(t),Aa=r(tt,` and can be used to control the model outputs. Read the
documentation from `),Oo=s(tt,"A",{href:!0});var zc=d(Oo);Fa=r(zc,"PretrainedConfig"),zc.forEach(t),La=r(tt," for more information."),tt.forEach(t),Na=p(I),y(be.$$.fragment,I),Va=p(I),ye=s(I,"DIV",{class:!0});var Wn=d(ye);y(Ze.$$.fragment,Wn),Wa=p(Wn),Ke=s(Wn,"P",{});var In=d(Ke);Ia=r(In,"Instantiate a "),Bo=s(In,"A",{href:!0});var Cc=d(Bo);Oa=r(Cc,"SpeechEncoderDecoderConfig"),Cc.forEach(t),Ba=r(In,` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),In.forEach(t),Wn.forEach(t),Ra=p(I),we=s(I,"DIV",{class:!0});var On=d(we);y(Qe.$$.fragment,On),Ha=p(On),oe=s(On,"P",{});var nt=d(oe);Ga=r(nt,"Serializes this instance to a Python dictionary. Override the default "),At=s(nt,"EM",{});var Ac=d(At);Ua=r(Ac,"to_dict()"),Ac.forEach(t),Ja=r(nt," from "),Ft=s(nt,"EM",{});var Fc=d(Ft);Ya=r(Fc,"PretrainedConfig"),Fc.forEach(t),Za=r(nt,"."),nt.forEach(t),On.forEach(t),I.forEach(t),xn=p(o),te=s(o,"H2",{class:!0});var Bn=d(te);Ee=s(Bn,"A",{id:!0,class:!0,href:!0});var Lc=d(Ee);Lt=s(Lc,"SPAN",{});var Nc=d(Lt);y(Xe.$$.fragment,Nc),Nc.forEach(t),Lc.forEach(t),Ka=p(Bn),Nt=s(Bn,"SPAN",{});var Vc=d(Nt);Qa=r(Vc,"SpeechEncoderDecoderModel"),Vc.forEach(t),Bn.forEach(t),jn=p(o),j=s(o,"DIV",{class:!0});var D=d(j);y(eo.$$.fragment,D),Xa=p(D),ne=s(D,"P",{});var rt=d(ne);es=r(rt,`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Ro=s(rt,"A",{href:!0});var Wc=d(Ro);os=r(Wc,"from_pretrained()"),Wc.forEach(t),ts=r(rt,` function and the decoder is loaded via
`),Ho=s(rt,"A",{href:!0});var Ic=d(Ho);ns=r(Ic,"from_pretrained()"),Ic.forEach(t),rs=r(rt,` function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),rt.forEach(t),as=p(D),oo=s(D,"P",{});var Rn=d(oo);ss=r(Rn,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),to=s(Rn,"A",{href:!0,rel:!0});var Oc=d(to);ds=r(Oc,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Oc.forEach(t),cs=r(Rn,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Rn.forEach(t),is=p(D),no=s(D,"P",{});var Hn=d(no);ls=r(Hn,"Additionally, in "),ro=s(Hn,"A",{href:!0,rel:!0});var Bc=d(ro);ps=r(Bc,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Bc.forEach(t),hs=r(Hn,` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Hn.forEach(t),ms=p(D),Vt=s(D,"P",{});var Rc=d(Vt);fs=r(Rc,`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Rc.forEach(t),us=p(D),ao=s(D,"P",{});var Gn=d(ao);gs=r(Gn,"This model inherits from "),Go=s(Gn,"A",{href:!0});var Hc=d(Go);_s=r(Hc,"PreTrainedModel"),Hc.forEach(t),vs=r(Gn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gn.forEach(t),bs=p(D),so=s(D,"P",{});var Un=d(so);ys=r(Un,"This model is also a PyTorch "),co=s(Un,"A",{href:!0,rel:!0});var Gc=d(co);ws=r(Gc,"torch.nn.Module"),Gc.forEach(t),Es=r(Un,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Un.forEach(t),ks=p(D),G=s(D,"P",{});var $o=d(G);Uo=s($o,"A",{href:!0});var Uc=d(Uo);$s=r(Uc,"SpeechEncoderDecoderModel"),Uc.forEach(t),Ss=r($o,` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),Wt=s($o,"EM",{});var Jc=d(Wt);xs=r(Jc,"~transformers.AutoModel.from_pretrained"),Jc.forEach(t),js=r($o,` class method for the encoder and
:meth`),It=s($o,"EM",{});var Yc=d(It);Ts=r(Yc,"~transformers.AutoModelForCausalLM.from_pretrained"),Yc.forEach(t),Ms=r($o," class method for the decoder."),$o.forEach(t),Ds=p(D),N=s(D,"DIV",{class:!0});var Pe=d(N);y(io.$$.fragment,Pe),qs=p(Pe),re=s(Pe,"P",{});var at=d(re);Ps=r(at,"The "),Jo=s(at,"A",{href:!0});var Zc=d(Jo);zs=r(Zc,"SpeechEncoderDecoderModel"),Zc.forEach(t),Cs=r(at," forward method, overrides the "),Ot=s(at,"CODE",{});var Kc=d(Ot);As=r(Kc,"__call__"),Kc.forEach(t),Fs=r(at," special method."),at.forEach(t),Ls=p(Pe),y(ke.$$.fragment,Pe),Ns=p(Pe),y($e.$$.fragment,Pe),Pe.forEach(t),Vs=p(D),V=s(D,"DIV",{class:!0});var ze=d(V);y(lo.$$.fragment,ze),Ws=p(ze),Bt=s(ze,"P",{});var Qc=d(Bt);Is=r(Qc,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Qc.forEach(t),Os=p(ze),ae=s(ze,"P",{});var st=d(ae);Bs=r(st,"The model is set in evaluation mode by default using "),Rt=s(st,"CODE",{});var Xc=d(Rt);Rs=r(Xc,"model.eval()"),Xc.forEach(t),Hs=r(st,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Ht=s(st,"CODE",{});var ei=d(Ht);Gs=r(ei,"model.train()"),ei.forEach(t),Us=r(st,"."),st.forEach(t),Js=p(ze),y(Se.$$.fragment,ze),ze.forEach(t),D.forEach(t),Tn=p(o),se=s(o,"H2",{class:!0});var Jn=d(se);xe=s(Jn,"A",{id:!0,class:!0,href:!0});var oi=d(xe);Gt=s(oi,"SPAN",{});var ti=d(Gt);y(po.$$.fragment,ti),ti.forEach(t),oi.forEach(t),Ys=p(Jn),Ut=s(Jn,"SPAN",{});var ni=d(Ut);Zs=r(ni,"FlaxSpeechEncoderDecoderModel"),ni.forEach(t),Jn.forEach(t),Mn=p(o),T=s(o,"DIV",{class:!0});var q=d(T);y(ho.$$.fragment,q),Ks=p(q),de=s(q,"P",{});var dt=d(de);Qs=r(dt,`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Yo=s(dt,"A",{href:!0});var ri=d(Yo);Xs=r(ri,"from_pretrained()"),ri.forEach(t),ed=r(dt,` function and the decoder is loaded via
`),Zo=s(dt,"A",{href:!0});var ai=d(Zo);od=r(ai,"from_pretrained()"),ai.forEach(t),td=r(dt,` function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),dt.forEach(t),nd=p(q),mo=s(q,"P",{});var Yn=d(mo);rd=r(Yn,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),fo=s(Yn,"A",{href:!0,rel:!0});var si=d(fo);ad=r(si,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),si.forEach(t),sd=r(Yn,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Yn.forEach(t),dd=p(q),uo=s(q,"P",{});var Zn=d(uo);cd=r(Zn,"Additionally, in "),go=s(Zn,"A",{href:!0,rel:!0});var di=d(go);id=r(di,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),di.forEach(t),ld=r(Zn,` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Zn.forEach(t),pd=p(q),Jt=s(q,"P",{});var ci=d(Jt);hd=r(ci,`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),ci.forEach(t),md=p(q),_o=s(q,"P",{});var Kn=d(_o);fd=r(Kn,"This model inherits from "),Ko=s(Kn,"A",{href:!0});var ii=d(Ko);ud=r(ii,"FlaxPreTrainedModel"),ii.forEach(t),gd=r(Kn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kn.forEach(t),_d=p(q),vo=s(q,"P",{});var Qn=d(vo);vd=r(Qn,`This model is also a Flax Linen
`),bo=s(Qn,"A",{href:!0,rel:!0});var li=d(bo);bd=r(li,"flax.nn.Module"),li.forEach(t),yd=r(Qn,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Qn.forEach(t),wd=p(q),U=s(q,"P",{});var So=d(U);Qo=s(So,"A",{href:!0});var pi=d(Qo);Ed=r(pi,"FlaxSpeechEncoderDecoderModel"),pi.forEach(t),kd=r(So,` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one
as decoder module when created with the :meth`),Yt=s(So,"EM",{});var hi=d(Yt);$d=r(hi,"~transformers.FlaxAutoModel.from_pretrained"),hi.forEach(t),Sd=r(So,` class method for the
encoder and :meth`),Zt=s(So,"EM",{});var mi=d(Zt);xd=r(mi,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),mi.forEach(t),jd=r(So," class method for the decoder."),So.forEach(t),Td=p(q),W=s(q,"DIV",{class:!0});var Ce=d(W);y(yo.$$.fragment,Ce),Md=p(Ce),ce=s(Ce,"P",{});var ct=d(ce);Dd=r(ct,"The "),Xo=s(ct,"A",{href:!0});var fi=d(Xo);qd=r(fi,"FlaxSpeechEncoderDecoderModel"),fi.forEach(t),Pd=r(ct," forward method, overrides the "),Kt=s(ct,"CODE",{});var ui=d(Kt);zd=r(ui,"__call__"),ui.forEach(t),Cd=r(ct," special method."),ct.forEach(t),Ad=p(Ce),y(je.$$.fragment,Ce),Fd=p(Ce),y(Te.$$.fragment,Ce),Ce.forEach(t),Ld=p(q),J=s(q,"DIV",{class:!0});var it=d(J);y(wo.$$.fragment,it),Nd=p(it),Qt=s(it,"P",{});var gi=d(Qt);Vd=r(gi,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),gi.forEach(t),Wd=p(it),y(Me.$$.fragment,it),it.forEach(t),q.forEach(t),this.h()},h(){i(m,"name","hf:doc:metadata"),i(m,"content",JSON.stringify(qi)),i(f,"id","speech-encoder-decoder-models"),i(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(f,"href","#speech-encoder-decoder-models"),i(_,"class","relative group"),i(xo,"href","/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(jo,"href","wav2vec2"),i(To,"href","hubert"),i(Fe,"href","https://arxiv.org/abs/2104.06678"),i(Fe,"rel","nofollow"),i(Mo,"href","/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(Do,"href","speech_to_text_2"),i(pe,"id","randomly-initializing-speechencoderdecodermodel-from-model-configurations"),i(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(pe,"href","#randomly-initializing-speechencoderdecodermodel-from-model-configurations"),i(Y,"class","relative group"),i(qo,"href","/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(Po,"href","/docs/transformers/v4.21.2/en/model_doc/wav2vec2#transformers.Wav2Vec2Model"),i(he,"id","initialising-speechencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),i(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(he,"href","#initialising-speechencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),i(Z,"class","relative group"),i(zo,"href","/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(Co,"href","wav2vec2"),i(Ao,"href","hubert"),i(Fo,"href","/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(me,"href","https://huggingface.co/blog/warm-starting-encoder-decoder"),i(me,"rel","nofollow"),i(Lo,"href","/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained"),i(fe,"id","loading-an-existing-speechencoderdecodermodel-checkpoint-and-perform-inference"),i(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(fe,"href","#loading-an-existing-speechencoderdecodermodel-checkpoint-and-perform-inference"),i(K,"class","relative group"),i(No,"href","/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(ge,"id","training"),i(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(ge,"href","#training"),i(Q,"class","relative group"),i(_e,"id","transformers.SpeechEncoderDecoderConfig"),i(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(_e,"href","#transformers.SpeechEncoderDecoderConfig"),i(X,"class","relative group"),i(Vo,"href","/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),i(Wo,"href","/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(Io,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),i(Oo,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),i(Bo,"href","/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),i(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(Ee,"id","transformers.SpeechEncoderDecoderModel"),i(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(Ee,"href","#transformers.SpeechEncoderDecoderModel"),i(te,"class","relative group"),i(Ro,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),i(Ho,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),i(to,"href","https://arxiv.org/abs/1907.12461"),i(to,"rel","nofollow"),i(ro,"href","https://arxiv.org/abs/2104.06678"),i(ro,"rel","nofollow"),i(Go,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),i(co,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),i(co,"rel","nofollow"),i(Uo,"href","/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(Jo,"href","/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(xe,"id","transformers.FlaxSpeechEncoderDecoderModel"),i(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(xe,"href","#transformers.FlaxSpeechEncoderDecoderModel"),i(se,"class","relative group"),i(Yo,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),i(Zo,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),i(fo,"href","https://arxiv.org/abs/1907.12461"),i(fo,"rel","nofollow"),i(go,"href","https://arxiv.org/abs/2104.06678"),i(go,"rel","nofollow"),i(Ko,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),i(bo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),i(bo,"rel","nofollow"),i(Qo,"href","/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.FlaxSpeechEncoderDecoderModel"),i(Xo,"href","/docs/transformers/v4.21.2/en/model_doc/speech-encoder-decoder#transformers.FlaxSpeechEncoderDecoderModel"),i(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,h){e(document.head,m),u(o,S,h),u(o,_,h),e(_,f),e(f,v),w(c,v,null),e(_,g),e(_,O),e(O,Xn),u(o,dn,h),u(o,C,h),e(C,er),e(C,xo),e(xo,or),e(C,tr),e(C,lt),e(lt,nr),e(C,rr),e(C,jo),e(jo,ar),e(C,sr),e(C,To),e(To,dr),e(C,cr),u(o,cn,h),u(o,R,h),e(R,ir),e(R,pt),e(pt,lr),e(R,pr),e(R,Fe),e(Fe,hr),e(R,mr),u(o,ln,h),u(o,H,h),e(H,fr),e(H,Mo),e(Mo,ur),e(H,gr),e(H,Do),e(Do,_r),e(H,vr),u(o,pn,h),u(o,Y,h),e(Y,pe),e(pe,ht),w(Le,ht,null),e(Y,br),e(Y,Ne),e(Ne,yr),e(Ne,mt),e(mt,wr),e(Ne,Er),u(o,hn,h),u(o,B,h),e(B,qo),e(qo,kr),e(B,$r),e(B,Po),e(Po,Sr),e(B,xr),e(B,ft),e(ft,jr),e(B,Tr),u(o,mn,h),w(Ve,o,h),u(o,fn,h),u(o,Z,h),e(Z,he),e(he,ut),w(We,ut,null),e(Z,Mr),e(Z,Ie),e(Ie,Dr),e(Ie,gt),e(gt,qr),e(Ie,Pr),u(o,un,h),u(o,x,h),e(x,zo),e(zo,zr),e(x,Cr),e(x,_t),e(_t,Ar),e(x,Fr),e(x,Co),e(Co,Lr),e(x,Nr),e(x,Ao),e(Ao,Vr),e(x,Wr),e(x,vt),e(vt,Ir),e(x,Or),e(x,bt),e(bt,Br),e(x,Rr),e(x,yt),e(yt,Hr),e(x,Gr),e(x,Fo),e(Fo,Ur),e(x,Jr),e(x,me),e(me,Yr),e(me,wt),e(wt,Zr),e(x,Kr),e(x,Et),e(Et,Qr),e(x,Xr),e(x,Lo),e(Lo,ea),e(x,oa),u(o,gn,h),w(Oe,o,h),u(o,_n,h),u(o,K,h),e(K,fe),e(fe,kt),w(Be,kt,null),e(K,ta),e(K,Re),e(Re,na),e(Re,$t),e($t,ra),e(Re,aa),u(o,vn,h),u(o,F,h),e(F,sa),e(F,St),e(St,da),e(F,ca),e(F,No),e(No,ia),e(F,la),e(F,xt),e(xt,pa),e(F,ha),u(o,bn,h),u(o,ue,h),e(ue,ma),e(ue,jt),e(jt,fa),e(ue,ua),u(o,yn,h),w(He,o,h),u(o,wn,h),u(o,Q,h),e(Q,ge),e(ge,Tt),w(Ge,Tt,null),e(Q,ga),e(Q,Mt),e(Mt,_a),u(o,En,h),u(o,L,h),e(L,va),e(L,Dt),e(Dt,ba),e(L,ya),e(L,qt),e(qt,wa),e(L,Ea),e(L,Pt),e(Pt,ka),e(L,$a),u(o,kn,h),w(Ue,o,h),u(o,$n,h),u(o,X,h),e(X,_e),e(_e,zt),w(Je,zt,null),e(X,Sa),e(X,Ct),e(Ct,xa),u(o,Sn,h),u(o,P,h),w(Ye,P,null),e(P,ja),e(P,ve),e(ve,Vo),e(Vo,Ta),e(ve,Ma),e(ve,Wo),e(Wo,Da),e(ve,qa),e(P,Pa),e(P,ee),e(ee,za),e(ee,Io),e(Io,Ca),e(ee,Aa),e(ee,Oo),e(Oo,Fa),e(ee,La),e(P,Na),w(be,P,null),e(P,Va),e(P,ye),w(Ze,ye,null),e(ye,Wa),e(ye,Ke),e(Ke,Ia),e(Ke,Bo),e(Bo,Oa),e(Ke,Ba),e(P,Ra),e(P,we),w(Qe,we,null),e(we,Ha),e(we,oe),e(oe,Ga),e(oe,At),e(At,Ua),e(oe,Ja),e(oe,Ft),e(Ft,Ya),e(oe,Za),u(o,xn,h),u(o,te,h),e(te,Ee),e(Ee,Lt),w(Xe,Lt,null),e(te,Ka),e(te,Nt),e(Nt,Qa),u(o,jn,h),u(o,j,h),w(eo,j,null),e(j,Xa),e(j,ne),e(ne,es),e(ne,Ro),e(Ro,os),e(ne,ts),e(ne,Ho),e(Ho,ns),e(ne,rs),e(j,as),e(j,oo),e(oo,ss),e(oo,to),e(to,ds),e(oo,cs),e(j,is),e(j,no),e(no,ls),e(no,ro),e(ro,ps),e(no,hs),e(j,ms),e(j,Vt),e(Vt,fs),e(j,us),e(j,ao),e(ao,gs),e(ao,Go),e(Go,_s),e(ao,vs),e(j,bs),e(j,so),e(so,ys),e(so,co),e(co,ws),e(so,Es),e(j,ks),e(j,G),e(G,Uo),e(Uo,$s),e(G,Ss),e(G,Wt),e(Wt,xs),e(G,js),e(G,It),e(It,Ts),e(G,Ms),e(j,Ds),e(j,N),w(io,N,null),e(N,qs),e(N,re),e(re,Ps),e(re,Jo),e(Jo,zs),e(re,Cs),e(re,Ot),e(Ot,As),e(re,Fs),e(N,Ls),w(ke,N,null),e(N,Ns),w($e,N,null),e(j,Vs),e(j,V),w(lo,V,null),e(V,Ws),e(V,Bt),e(Bt,Is),e(V,Os),e(V,ae),e(ae,Bs),e(ae,Rt),e(Rt,Rs),e(ae,Hs),e(ae,Ht),e(Ht,Gs),e(ae,Us),e(V,Js),w(Se,V,null),u(o,Tn,h),u(o,se,h),e(se,xe),e(xe,Gt),w(po,Gt,null),e(se,Ys),e(se,Ut),e(Ut,Zs),u(o,Mn,h),u(o,T,h),w(ho,T,null),e(T,Ks),e(T,de),e(de,Qs),e(de,Yo),e(Yo,Xs),e(de,ed),e(de,Zo),e(Zo,od),e(de,td),e(T,nd),e(T,mo),e(mo,rd),e(mo,fo),e(fo,ad),e(mo,sd),e(T,dd),e(T,uo),e(uo,cd),e(uo,go),e(go,id),e(uo,ld),e(T,pd),e(T,Jt),e(Jt,hd),e(T,md),e(T,_o),e(_o,fd),e(_o,Ko),e(Ko,ud),e(_o,gd),e(T,_d),e(T,vo),e(vo,vd),e(vo,bo),e(bo,bd),e(vo,yd),e(T,wd),e(T,U),e(U,Qo),e(Qo,Ed),e(U,kd),e(U,Yt),e(Yt,$d),e(U,Sd),e(U,Zt),e(Zt,xd),e(U,jd),e(T,Td),e(T,W),w(yo,W,null),e(W,Md),e(W,ce),e(ce,Dd),e(ce,Xo),e(Xo,qd),e(ce,Pd),e(ce,Kt),e(Kt,zd),e(ce,Cd),e(W,Ad),w(je,W,null),e(W,Fd),w(Te,W,null),e(T,Ld),e(T,J),w(wo,J,null),e(J,Nd),e(J,Qt),e(Qt,Vd),e(J,Wd),w(Me,J,null),Dn=!0},p(o,[h]){const Eo={};h&2&&(Eo.$$scope={dirty:h,ctx:o}),be.$set(Eo);const Xt={};h&2&&(Xt.$$scope={dirty:h,ctx:o}),ke.$set(Xt);const en={};h&2&&(en.$$scope={dirty:h,ctx:o}),$e.$set(en);const on={};h&2&&(on.$$scope={dirty:h,ctx:o}),Se.$set(on);const A={};h&2&&(A.$$scope={dirty:h,ctx:o}),je.$set(A);const tn={};h&2&&(tn.$$scope={dirty:h,ctx:o}),Te.$set(tn);const nn={};h&2&&(nn.$$scope={dirty:h,ctx:o}),Me.$set(nn)},i(o){Dn||(E(c.$$.fragment,o),E(Le.$$.fragment,o),E(Ve.$$.fragment,o),E(We.$$.fragment,o),E(Oe.$$.fragment,o),E(Be.$$.fragment,o),E(He.$$.fragment,o),E(Ge.$$.fragment,o),E(Ue.$$.fragment,o),E(Je.$$.fragment,o),E(Ye.$$.fragment,o),E(be.$$.fragment,o),E(Ze.$$.fragment,o),E(Qe.$$.fragment,o),E(Xe.$$.fragment,o),E(eo.$$.fragment,o),E(io.$$.fragment,o),E(ke.$$.fragment,o),E($e.$$.fragment,o),E(lo.$$.fragment,o),E(Se.$$.fragment,o),E(po.$$.fragment,o),E(ho.$$.fragment,o),E(yo.$$.fragment,o),E(je.$$.fragment,o),E(Te.$$.fragment,o),E(wo.$$.fragment,o),E(Me.$$.fragment,o),Dn=!0)},o(o){k(c.$$.fragment,o),k(Le.$$.fragment,o),k(Ve.$$.fragment,o),k(We.$$.fragment,o),k(Oe.$$.fragment,o),k(Be.$$.fragment,o),k(He.$$.fragment,o),k(Ge.$$.fragment,o),k(Ue.$$.fragment,o),k(Je.$$.fragment,o),k(Ye.$$.fragment,o),k(be.$$.fragment,o),k(Ze.$$.fragment,o),k(Qe.$$.fragment,o),k(Xe.$$.fragment,o),k(eo.$$.fragment,o),k(io.$$.fragment,o),k(ke.$$.fragment,o),k($e.$$.fragment,o),k(lo.$$.fragment,o),k(Se.$$.fragment,o),k(po.$$.fragment,o),k(ho.$$.fragment,o),k(yo.$$.fragment,o),k(je.$$.fragment,o),k(Te.$$.fragment,o),k(wo.$$.fragment,o),k(Me.$$.fragment,o),Dn=!1},d(o){t(m),o&&t(S),o&&t(_),$(c),o&&t(dn),o&&t(C),o&&t(cn),o&&t(R),o&&t(ln),o&&t(H),o&&t(pn),o&&t(Y),$(Le),o&&t(hn),o&&t(B),o&&t(mn),$(Ve,o),o&&t(fn),o&&t(Z),$(We),o&&t(un),o&&t(x),o&&t(gn),$(Oe,o),o&&t(_n),o&&t(K),$(Be),o&&t(vn),o&&t(F),o&&t(bn),o&&t(ue),o&&t(yn),$(He,o),o&&t(wn),o&&t(Q),$(Ge),o&&t(En),o&&t(L),o&&t(kn),$(Ue,o),o&&t($n),o&&t(X),$(Je),o&&t(Sn),o&&t(P),$(Ye),$(be),$(Ze),$(Qe),o&&t(xn),o&&t(te),$(Xe),o&&t(jn),o&&t(j),$(eo),$(io),$(ke),$($e),$(lo),$(Se),o&&t(Tn),o&&t(se),$(po),o&&t(Mn),o&&t(T),$(ho),$(yo),$(je),$(Te),$(wo),$(Me)}}}const qi={local:"speech-encoder-decoder-models",sections:[{local:"randomly-initializing-speechencoderdecodermodel-from-model-configurations",title:"Randomly initializing `SpeechEncoderDecoderModel` from model configurations."},{local:"initialising-speechencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder",title:"Initialising `SpeechEncoderDecoderModel` from a pretrained encoder and a pretrained decoder."},{local:"loading-an-existing-speechencoderdecodermodel-checkpoint-and-perform-inference",title:"Loading an existing `SpeechEncoderDecoderModel` checkpoint and perform inference."},{local:"training",title:"Training"},{local:"transformers.SpeechEncoderDecoderConfig",title:"SpeechEncoderDecoderConfig"},{local:"transformers.SpeechEncoderDecoderModel",title:"SpeechEncoderDecoderModel"},{local:"transformers.FlaxSpeechEncoderDecoderModel",title:"FlaxSpeechEncoderDecoderModel"}],title:"Speech Encoder Decoder Models"};function Pi(z){return Ei(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Vi extends vi{constructor(m){super();bi(this,m,Pi,Di,yi,{})}}export{Vi as default,qi as metadata};
