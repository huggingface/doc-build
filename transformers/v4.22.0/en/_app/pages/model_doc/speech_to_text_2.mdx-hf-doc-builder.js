import{S as Jc,i as Gc,s as Yc,e as a,k as l,w as g,t as r,M as Kc,c as n,d as o,m as d,a as c,x as v,h as s,b as i,G as e,g as h,y as x,q as T,o as k,B as b,v as Qc,L as Bc}from"../../chunks/vendor-hf-doc-builder.js";import{T as Uc}from"../../chunks/Tip-hf-doc-builder.js";import{D as V}from"../../chunks/Docstring-hf-doc-builder.js";import{C as $r}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ut}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Hc}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Xc(B){let m,E,u,_,w;return _=new $r({props:{code:`from transformers import Speech2Text2ForCausalLM, Speech2Text2Config

# Initializing a Speech2Text2 s2t_transformer_s style configuration
configuration = Speech2Text2Config()

# Initializing a model from the s2t_transformer_s style configuration
model = Speech2Text2ForCausalLM(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2Text2ForCausalLM, Speech2Text2Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Speech2Text2 s2t_transformer_s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Speech2Text2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the s2t_transformer_s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2Text2ForCausalLM(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){m=a("p"),E=r("Example:"),u=l(),g(_.$$.fragment)},l(f){m=n(f,"P",{});var S=c(m);E=s(S,"Example:"),S.forEach(o),u=d(f),v(_.$$.fragment,f)},m(f,S){h(f,m,S),e(m,E),h(f,u,S),x(_,f,S),w=!0},p:Bc,i(f){w||(T(_.$$.fragment,f),w=!0)},o(f){k(_.$$.fragment,f),w=!1},d(f){f&&o(m),f&&o(u),b(_,f)}}}function Zc(B){let m,E,u,_,w,f,S,D;return{c(){m=a("p"),E=r(`This class method is simply calling the feature extractor
`),u=a("a"),_=r("from_pretrained()"),w=r(` and the tokenizer
`),f=a("code"),S=r("from_pretrained"),D=r(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(q){m=n(q,"P",{});var $=c(m);E=s($,`This class method is simply calling the feature extractor
`),u=n($,"A",{href:!0});var M=c(u);_=s(M,"from_pretrained()"),M.forEach(o),w=s($,` and the tokenizer
`),f=n($,"CODE",{});var F=c(f);S=s(F,"from_pretrained"),F.forEach(o),D=s($,` methods. Please refer to the docstrings of the
methods above for more information.`),$.forEach(o),this.h()},h(){i(u,"href","/docs/transformers/v4.22.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(q,$){h(q,m,$),e(m,E),e(m,u),e(u,_),e(m,w),e(m,f),e(f,S),e(m,D)},d(q){q&&o(m)}}}function ei(B){let m,E,u,_,w,f,S,D;return{c(){m=a("p"),E=r("This class method is simply calling "),u=a("a"),_=r("save_pretrained()"),w=r(` and
`),f=a("code"),S=r("save_pretrained"),D=r(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(q){m=n(q,"P",{});var $=c(m);E=s($,"This class method is simply calling "),u=n($,"A",{href:!0});var M=c(u);_=s(M,"save_pretrained()"),M.forEach(o),w=s($,` and
`),f=n($,"CODE",{});var F=c(f);S=s(F,"save_pretrained"),F.forEach(o),D=s($,`. Please refer to the docstrings of the methods
above for more information.`),$.forEach(o),this.h()},h(){i(u,"href","/docs/transformers/v4.22.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(q,$){h(q,m,$),e(m,E),e(m,u),e(u,_),e(m,w),e(m,f),e(f,S),e(m,D)},d(q){q&&o(m)}}}function ti(B){let m,E,u,_,w;return _=new $r({props:{code:`from transformers import (
    SpeechEncoderDecoderModel,
    Speech2Text2ForCausalLM,
    Wav2Vec2Model,
    Speech2Text2Config,
    Wav2Vec2Config,
    Wav2Vec2FeatureExtractor,
    Speech2Text2Tokenizer,
)
from datasets import load_dataset

feature_extractor = Wav2Vec2FeatureExtractor()
tokenizer = Speech2Text2Tokenizer.from_pretrained("facebook/s2t-wav2vec2-large-en-de")

encoder = Wav2Vec2Model(Wav2Vec2Config())
decoder = Speech2Text2ForCausalLM(Speech2Text2Config())
# init random speech2text model

model = SpeechEncoderDecoderModel(encoder=encoder, decoder=decoder)
model.config.pad_token_id = tokenizer.pad_token_id
model.config.decoder_start_token_id = tokenizer.bos_token_id
# pre-process inputs and labels

ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
inputs = feature_extractor(
    ds[0]["audio"]["array"], sampling_rate=ds[0]["audio"]["sampling_rate"], return_tensors="pt"
)
input_values = inputs.input_values
decoder_input_ids = tokenizer(ds[0]["text"], return_tensors="pt").input_ids
# compute loss

loss = model(inputs=input_values, labels=decoder_input_ids).loss
# backprop loss

loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    SpeechEncoderDecoderModel,
<span class="hljs-meta">... </span>    Speech2Text2ForCausalLM,
<span class="hljs-meta">... </span>    Wav2Vec2Model,
<span class="hljs-meta">... </span>    Speech2Text2Config,
<span class="hljs-meta">... </span>    Wav2Vec2Config,
<span class="hljs-meta">... </span>    Wav2Vec2FeatureExtractor,
<span class="hljs-meta">... </span>    Speech2Text2Tokenizer,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor()
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = Speech2Text2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoder = Wav2Vec2Model(Wav2Vec2Config())
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder = Speech2Text2ForCausalLM(Speech2Text2Config())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># init random speech2text model</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel(encoder=encoder, decoder=decoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = tokenizer.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = tokenizer.bos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># pre-process inputs and labels</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = inputs.input_values
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(inputs=input_values, labels=decoder_input_ids).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># backprop loss</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){m=a("p"),E=r("Example:"),u=l(),g(_.$$.fragment)},l(f){m=n(f,"P",{});var S=c(m);E=s(S,"Example:"),S.forEach(o),u=d(f),v(_.$$.fragment,f)},m(f,S){h(f,m,S),e(m,E),h(f,u,S),x(_,f,S),w=!0},p:Bc,i(f){w||(T(_.$$.fragment,f),w=!0)},o(f){k(_.$$.fragment,f),w=!1},d(f){f&&o(m),f&&o(u),b(_,f)}}}function oi(B){let m,E,u,_,w,f,S,D,q,$,M,F,Zt,Ee,yr,eo,Er,qo,J,zr,_t,Pr,jr,ze,Cr,qr,Mo,z,Mr,to,Fr,Ar,oo,Lr,Dr,gt,Wr,Ir,vt,Vr,Nr,xt,Or,Rr,ro,Ur,Hr,Fo,ne,Br,Pe,Jr,Gr,Ao,ce,Yr,je,Kr,Qr,Lo,Tt,Xr,Do,G,Ce,Zr,qe,es,ts,os,Me,rs,kt,ss,as,ns,Fe,cs,Ae,is,ls,Wo,Z,ie,so,Le,ds,ao,ps,Io,Y,hs,bt,fs,ms,St,us,_s,Vo,j,gs,wt,vs,xs,$t,Ts,ks,yt,bs,Ss,Et,ws,$s,zt,ys,Es,No,Pt,no,zs,Oo,De,Ro,jt,We,co,Ps,js,io,Cs,Uo,Ie,Ho,le,qs,Ve,Ms,Fs,Bo,ee,de,lo,Ne,As,po,Ls,Jo,W,Oe,Ds,te,Ws,Ct,Is,Vs,Re,Ns,Os,Rs,oe,Us,qt,Hs,Bs,Mt,Js,Gs,Ys,pe,Go,re,he,ho,Ue,Ks,fo,Qs,Yo,P,He,Xs,mo,Zs,ea,Be,ta,Ft,oa,ra,sa,fe,Je,aa,uo,na,ca,K,Ge,ia,_o,la,da,Ye,pa,go,ha,fa,ma,At,Ke,Ko,se,me,vo,Qe,ua,xo,_a,Qo,y,Xe,ga,To,va,xa,A,Lt,Ta,ka,Dt,ba,Sa,Wt,wa,$a,Ze,ko,ya,Ea,za,It,Pa,ja,Ca,ue,et,qa,R,Ma,bo,Fa,Aa,So,La,Da,tt,wo,Wa,Ia,Va,Na,Q,ot,Oa,$o,Ra,Ua,_e,Ha,X,rt,Ba,st,Ja,Vt,Ga,Ya,Ka,ge,Qa,ve,at,Xa,nt,Za,Nt,en,tn,on,xe,ct,rn,it,sn,Ot,an,nn,Xo,ae,Te,yo,lt,cn,Eo,ln,Zo,I,dt,dn,U,pn,Rt,hn,fn,zo,mn,un,Ut,_n,gn,vn,pt,xn,ht,Tn,kn,bn,ke,ft,Sn,be,er;return f=new ut({}),Ee=new ut({}),Le=new ut({}),De=new $r({props:{code:`import torch
from transformers import Speech2Text2Processor, SpeechEncoderDecoderModel
from datasets import load_dataset
import soundfile as sf

model = SpeechEncoderDecoderModel.from_pretrained("facebook/s2t-wav2vec2-large-en-de")
processor = Speech2Text2Processor.from_pretrained("facebook/s2t-wav2vec2-large-en-de")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

inputs = processor(ds["speech"][0], sampling_rate=16_000, return_tensors="pt")
generated_ids = model.generate(inputs=inputs["input_values"], attention_mask=inputs["attention_mask"])

transcription = processor.batch_decode(generated_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2Text2Processor, SpeechEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2Text2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], sampling_rate=<span class="hljs-number">16_000</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs=inputs[<span class="hljs-string">&quot;input_values&quot;</span>], attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),Ie=new $r({props:{code:`from datasets import load_dataset
from transformers import pipeline

librispeech_en = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
asr = pipeline(
    "automatic-speech-recognition",
    model="facebook/s2t-wav2vec2-large-en-de",
    feature_extractor="facebook/s2t-wav2vec2-large-en-de",
)

translation_de = asr(librispeech_en[0]["file"])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>librispeech_en = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>asr = pipeline(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;automatic-speech-recognition&quot;</span>,
<span class="hljs-meta">... </span>    model=<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>,
<span class="hljs-meta">... </span>    feature_extractor=<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>translation_de = asr(librispeech_en[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;file&quot;</span>])`}}),Ne=new ut({}),Oe=new V({props:{name:"class transformers.Speech2Text2Config",anchor:"transformers.Speech2Text2Config",parameters:[{name:"vocab_size",val:" = 10000"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Speech2Text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.0/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>`,name:"vocab_size"},{anchor:"transformers.Speech2Text2Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.Speech2Text2Config.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.Speech2Text2Config.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.Speech2Text2Config.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.Speech2Text2Config.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the pooler. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>,
<code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.Speech2Text2Config.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, and pooler.`,name:"dropout"},{anchor:"transformers.Speech2Text2Config.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Speech2Text2Config.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.Speech2Text2Config.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.Speech2Text2Config.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
<a href="https://arxiv.org/abs/1909.11556%3E%60" rel="nofollow">https://arxiv.org/abs/1909.11556&gt;\`</a>__ for more details.`,name:"init_std"},{anchor:"transformers.Speech2Text2Config.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.Speech2Text2Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.Speech2Text2Config.max_source_positions",description:`<strong>max_source_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 6000) &#x2014;
The maximum sequence length of log-mel filter-bank features that this model might ever be used with.`,name:"max_source_positions"},{anchor:"transformers.Speech2Text2Config.max_target_positions",description:`<strong>max_target_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_target_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/speech_to_text_2/configuration_speech_to_text_2.py#L31"}}),pe=new Hc({props:{anchor:"transformers.Speech2Text2Config.example",$$slots:{default:[Xc]},$$scope:{ctx:B}}}),Ue=new ut({}),He=new V({props:{name:"class transformers.Speech2Text2Tokenizer",anchor:"transformers.Speech2Text2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_lower_case",val:" = False"},{name:"merges_file",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Speech2Text2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Speech2Text2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Speech2Text2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Speech2Text2Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.</p>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/speech_to_text_2/tokenization_speech_to_text_2.py#L73"}}),Je=new V({props:{name:"batch_decode",anchor:"transformers.Speech2Text2Tokenizer.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/tokenization_utils_base.py#L3368",returnDescription:`
<p>The list of decoded sentences.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Ge=new V({props:{name:"decode",anchor:"transformers.Speech2Text2Tokenizer.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.Speech2Text2Tokenizer.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Speech2Text2Tokenizer.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Speech2Text2Tokenizer.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/tokenization_utils_base.py#L3401",returnDescription:`
<p>The decoded sentence.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ke=new V({props:{name:"save_vocabulary",anchor:"transformers.Speech2Text2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/speech_to_text_2/tokenization_speech_to_text_2.py#L241"}}),Qe=new ut({}),Xe=new V({props:{name:"class transformers.Speech2Text2Processor",anchor:"transformers.Speech2Text2Processor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>AutoFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.0/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2Text2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2Text2Tokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer">Speech2Text2Tokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L24"}}),et=new V({props:{name:"__call__",anchor:"transformers.Speech2Text2Processor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L46"}}),ot=new V({props:{name:"from_pretrained",anchor:"transformers.Speech2Text2Processor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Processor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/v4.22.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/v4.22.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/processing_utils.py#L152"}}),_e=new Uc({props:{$$slots:{default:[Zc]},$$scope:{ctx:B}}}),rt=new V({props:{name:"save_pretrained",anchor:"transformers.Speech2Text2Processor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Processor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Speech2Text2Processor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).
kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/processing_utils.py#L94"}}),ge=new Uc({props:{$$slots:{default:[ei]},$$scope:{ctx:B}}}),at=new V({props:{name:"batch_decode",anchor:"transformers.Speech2Text2Processor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L84"}}),ct=new V({props:{name:"decode",anchor:"transformers.Speech2Text2Processor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L91"}}),lt=new ut({}),dt=new V({props:{name:"class transformers.Speech2Text2ForCausalLM",anchor:"transformers.Speech2Text2ForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Config">Speech2Text2Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L747"}}),ft=new V({props:{name:"forward",anchor:"transformers.Speech2Text2ForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer">Speech2Text2Tokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L778",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Config"
>Speech2Text2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),be=new Hc({props:{anchor:"transformers.Speech2Text2ForCausalLM.forward.example",$$slots:{default:[ti]},$$scope:{ctx:B}}}),{c(){m=a("meta"),E=l(),u=a("h1"),_=a("a"),w=a("span"),g(f.$$.fragment),S=l(),D=a("span"),q=r("Speech2Text2"),$=l(),M=a("h2"),F=a("a"),Zt=a("span"),g(Ee.$$.fragment),yr=l(),eo=a("span"),Er=r("Overview"),qo=l(),J=a("p"),zr=r("The Speech2Text2 model is used together with "),_t=a("a"),Pr=r("Wav2Vec2"),jr=r(` for Speech Translation models proposed in
`),ze=a("a"),Cr=r("Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),qr=r(` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Mo=l(),z=a("p"),Mr=r("Speech2Text2 is a "),to=a("em"),Fr=r("decoder-only"),Ar=r(" transformer model that can be used with any speech "),oo=a("em"),Lr=r("encoder-only"),Dr=r(`, such as
`),gt=a("a"),Wr=r("Wav2Vec2"),Ir=r(" or "),vt=a("a"),Vr=r("HuBERT"),Nr=r(` for Speech-to-Text tasks. Please refer to the
`),xt=a("a"),Or=r("SpeechEncoderDecoder"),Rr=r(" class on how to combine Speech2Text2 with any speech "),ro=a("em"),Ur=r("encoder-only"),Hr=r(`
model.`),Fo=l(),ne=a("p"),Br=r("This model was contributed by "),Pe=a("a"),Jr=r("Patrick von Platen"),Gr=r("."),Ao=l(),ce=a("p"),Yr=r("The original code can be found "),je=a("a"),Kr=r("here"),Qr=r("."),Lo=l(),Tt=a("p"),Xr=r("Tips:"),Do=l(),G=a("ul"),Ce=a("li"),Zr=r(`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),qe=a("a"),es=r("official models"),ts=r(" ."),os=l(),Me=a("li"),rs=r("Speech2Text2 is always used within the "),kt=a("a"),ss=r("SpeechEncoderDecoder"),as=r(" framework."),ns=l(),Fe=a("li"),cs=r("Speech2Text2\u2019s tokenizer is based on "),Ae=a("a"),is=r("fastBPE"),ls=r("."),Wo=l(),Z=a("h2"),ie=a("a"),so=a("span"),g(Le.$$.fragment),ds=l(),ao=a("span"),ps=r("Inference"),Io=l(),Y=a("p"),hs=r("Speech2Text2\u2019s "),bt=a("a"),fs=r("SpeechEncoderDecoderModel"),ms=r(` model accepts raw waveform input values from speech and
makes use of `),St=a("a"),us=r("generate()"),_s=r(` to translate the input speech
autoregressively to the target language.`),Vo=l(),j=a("p"),gs=r("The "),wt=a("a"),vs=r("Wav2Vec2FeatureExtractor"),xs=r(` class is responsible for preprocessing the input speech and
`),$t=a("a"),Ts=r("Speech2Text2Tokenizer"),ks=r(` decodes the generated target tokens to the target string. The
`),yt=a("a"),bs=r("Speech2Text2Processor"),Ss=r(" wraps "),Et=a("a"),ws=r("Wav2Vec2FeatureExtractor"),$s=r(` and
`),zt=a("a"),ys=r("Speech2Text2Tokenizer"),Es=r(` into a single instance to both extract the input features and decode the
predicted token ids.`),No=l(),Pt=a("ul"),no=a("li"),zs=r("Step-by-step Speech Translation"),Oo=l(),g(De.$$.fragment),Ro=l(),jt=a("ul"),We=a("li"),co=a("p"),Ps=r("Speech Translation via Pipelines"),js=l(),io=a("p"),Cs=r("The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),Uo=l(),g(Ie.$$.fragment),Ho=l(),le=a("p"),qs=r("See "),Ve=a("a"),Ms=r("model hub"),Fs=r(" to look for Speech2Text2 checkpoints."),Bo=l(),ee=a("h2"),de=a("a"),lo=a("span"),g(Ne.$$.fragment),As=l(),po=a("span"),Ls=r("Speech2Text2Config"),Jo=l(),W=a("div"),g(Oe.$$.fragment),Ds=l(),te=a("p"),Ws=r("This is the configuration class to store the configuration of a "),Ct=a("a"),Is=r("Speech2Text2ForCausalLM"),Vs=r(`. It is used to
instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Re=a("a"),Ns=r("facebook/s2t-wav2vec2-large-en-de"),Os=r(" architecture."),Rs=l(),oe=a("p"),Us=r("Configuration objects inherit from "),qt=a("a"),Hs=r("PretrainedConfig"),Bs=r(` and can be used to control the model outputs. Read the
documentation from `),Mt=a("a"),Js=r("PretrainedConfig"),Gs=r(" for more information."),Ys=l(),g(pe.$$.fragment),Go=l(),re=a("h2"),he=a("a"),ho=a("span"),g(Ue.$$.fragment),Ks=l(),fo=a("span"),Qs=r("Speech2TextTokenizer"),Yo=l(),P=a("div"),g(He.$$.fragment),Xs=l(),mo=a("p"),Zs=r("Constructs a Speech2Text2Tokenizer."),ea=l(),Be=a("p"),ta=r("This tokenizer inherits from "),Ft=a("a"),oa=r("PreTrainedTokenizer"),ra=r(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),sa=l(),fe=a("div"),g(Je.$$.fragment),aa=l(),uo=a("p"),na=r("Convert a list of lists of token ids into a list of strings by calling decode."),ca=l(),K=a("div"),g(Ge.$$.fragment),ia=l(),_o=a("p"),la=r(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),da=l(),Ye=a("p"),pa=r("Similar to doing "),go=a("code"),ha=r("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),fa=r("."),ma=l(),At=a("div"),g(Ke.$$.fragment),Ko=l(),se=a("h2"),me=a("a"),vo=a("span"),g(Qe.$$.fragment),ua=l(),xo=a("span"),_a=r("Speech2Text2Processor"),Qo=l(),y=a("div"),g(Xe.$$.fragment),ga=l(),To=a("p"),va=r(`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),xa=l(),A=a("p"),Lt=a("a"),Ta=r("Speech2Text2Processor"),ka=r(" offers all the functionalities of "),Dt=a("a"),ba=r("AutoFeatureExtractor"),Sa=r(" and "),Wt=a("a"),wa=r("Speech2Text2Tokenizer"),$a=r(`.
See the `),Ze=a("a"),ko=a("strong"),ya=r("call"),Ea=r("()"),za=r(" and "),It=a("a"),Pa=r("decode()"),ja=r(" for more information."),Ca=l(),ue=a("div"),g(et.$$.fragment),qa=l(),R=a("p"),Ma=r(`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),bo=a("code"),Fa=r("__call__()"),Aa=r(` and returns its output. If used in the context
`),So=a("code"),La=r("as_target_processor()"),Da=r(` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),tt=a("a"),wo=a("strong"),Wa=r("call"),Ia=r("()"),Va=r(`. Please refer to the doctsring of the above two
methods for more information.`),Na=l(),Q=a("div"),g(ot.$$.fragment),Oa=l(),$o=a("p"),Ra=r("Instantiate a processor associated with a pretrained model."),Ua=l(),g(_e.$$.fragment),Ha=l(),X=a("div"),g(rt.$$.fragment),Ba=l(),st=a("p"),Ja=r(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Vt=a("a"),Ga=r("from_pretrained()"),Ya=r(" method."),Ka=l(),g(ge.$$.fragment),Qa=l(),ve=a("div"),g(at.$$.fragment),Xa=l(),nt=a("p"),Za=r("This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Nt=a("a"),en=r("batch_decode()"),tn=r(`. Please
refer to the docstring of this method for more information.`),on=l(),xe=a("div"),g(ct.$$.fragment),rn=l(),it=a("p"),sn=r("This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Ot=a("a"),an=r("decode()"),nn=r(`. Please refer
to the docstring of this method for more information.`),Xo=l(),ae=a("h2"),Te=a("a"),yo=a("span"),g(lt.$$.fragment),cn=l(),Eo=a("span"),ln=r("Speech2Text2ForCausalLM"),Zo=l(),I=a("div"),g(dt.$$.fragment),dn=l(),U=a("p"),pn=r("The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Rt=a("a"),hn=r("EncoderDecoderModel"),fn=r(" and "),zo=a("code"),mn=r("SpeechEncoderDecoder"),un=r(`.
This model inherits from `),Ut=a("a"),_n=r("PreTrainedModel"),gn=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vn=l(),pt=a("p"),xn=r("This model is also a PyTorch "),ht=a("a"),Tn=r("torch.nn.Module"),kn=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bn=l(),ke=a("div"),g(ft.$$.fragment),Sn=l(),g(be.$$.fragment),this.h()},l(t){const p=Kc('[data-svelte="svelte-1phssyn"]',document.head);m=n(p,"META",{name:!0,content:!0}),p.forEach(o),E=d(t),u=n(t,"H1",{class:!0});var mt=c(u);_=n(mt,"A",{id:!0,class:!0,href:!0});var Po=c(_);w=n(Po,"SPAN",{});var jo=c(w);v(f.$$.fragment,jo),jo.forEach(o),Po.forEach(o),S=d(mt),D=n(mt,"SPAN",{});var Co=c(D);q=s(Co,"Speech2Text2"),Co.forEach(o),mt.forEach(o),$=d(t),M=n(t,"H2",{class:!0});var tr=c(M);F=n(tr,"A",{id:!0,class:!0,href:!0});var yn=c(F);Zt=n(yn,"SPAN",{});var En=c(Zt);v(Ee.$$.fragment,En),En.forEach(o),yn.forEach(o),yr=d(tr),eo=n(tr,"SPAN",{});var zn=c(eo);Er=s(zn,"Overview"),zn.forEach(o),tr.forEach(o),qo=d(t),J=n(t,"P",{});var Ht=c(J);zr=s(Ht,"The Speech2Text2 model is used together with "),_t=n(Ht,"A",{href:!0});var Pn=c(_t);Pr=s(Pn,"Wav2Vec2"),Pn.forEach(o),jr=s(Ht,` for Speech Translation models proposed in
`),ze=n(Ht,"A",{href:!0,rel:!0});var jn=c(ze);Cr=s(jn,"Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),jn.forEach(o),qr=s(Ht,` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Ht.forEach(o),Mo=d(t),z=n(t,"P",{});var L=c(z);Mr=s(L,"Speech2Text2 is a "),to=n(L,"EM",{});var Cn=c(to);Fr=s(Cn,"decoder-only"),Cn.forEach(o),Ar=s(L," transformer model that can be used with any speech "),oo=n(L,"EM",{});var qn=c(oo);Lr=s(qn,"encoder-only"),qn.forEach(o),Dr=s(L,`, such as
`),gt=n(L,"A",{href:!0});var Mn=c(gt);Wr=s(Mn,"Wav2Vec2"),Mn.forEach(o),Ir=s(L," or "),vt=n(L,"A",{href:!0});var Fn=c(vt);Vr=s(Fn,"HuBERT"),Fn.forEach(o),Nr=s(L,` for Speech-to-Text tasks. Please refer to the
`),xt=n(L,"A",{href:!0});var An=c(xt);Or=s(An,"SpeechEncoderDecoder"),An.forEach(o),Rr=s(L," class on how to combine Speech2Text2 with any speech "),ro=n(L,"EM",{});var Ln=c(ro);Ur=s(Ln,"encoder-only"),Ln.forEach(o),Hr=s(L,`
model.`),L.forEach(o),Fo=d(t),ne=n(t,"P",{});var or=c(ne);Br=s(or,"This model was contributed by "),Pe=n(or,"A",{href:!0,rel:!0});var Dn=c(Pe);Jr=s(Dn,"Patrick von Platen"),Dn.forEach(o),Gr=s(or,"."),or.forEach(o),Ao=d(t),ce=n(t,"P",{});var rr=c(ce);Yr=s(rr,"The original code can be found "),je=n(rr,"A",{href:!0,rel:!0});var Wn=c(je);Kr=s(Wn,"here"),Wn.forEach(o),Qr=s(rr,"."),rr.forEach(o),Lo=d(t),Tt=n(t,"P",{});var In=c(Tt);Xr=s(In,"Tips:"),In.forEach(o),Do=d(t),G=n(t,"UL",{});var Bt=c(G);Ce=n(Bt,"LI",{});var sr=c(Ce);Zr=s(sr,`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),qe=n(sr,"A",{href:!0,rel:!0});var Vn=c(qe);es=s(Vn,"official models"),Vn.forEach(o),ts=s(sr," ."),sr.forEach(o),os=d(Bt),Me=n(Bt,"LI",{});var ar=c(Me);rs=s(ar,"Speech2Text2 is always used within the "),kt=n(ar,"A",{href:!0});var Nn=c(kt);ss=s(Nn,"SpeechEncoderDecoder"),Nn.forEach(o),as=s(ar," framework."),ar.forEach(o),ns=d(Bt),Fe=n(Bt,"LI",{});var nr=c(Fe);cs=s(nr,"Speech2Text2\u2019s tokenizer is based on "),Ae=n(nr,"A",{href:!0,rel:!0});var On=c(Ae);is=s(On,"fastBPE"),On.forEach(o),ls=s(nr,"."),nr.forEach(o),Bt.forEach(o),Wo=d(t),Z=n(t,"H2",{class:!0});var cr=c(Z);ie=n(cr,"A",{id:!0,class:!0,href:!0});var Rn=c(ie);so=n(Rn,"SPAN",{});var Un=c(so);v(Le.$$.fragment,Un),Un.forEach(o),Rn.forEach(o),ds=d(cr),ao=n(cr,"SPAN",{});var Hn=c(ao);ps=s(Hn,"Inference"),Hn.forEach(o),cr.forEach(o),Io=d(t),Y=n(t,"P",{});var Jt=c(Y);hs=s(Jt,"Speech2Text2\u2019s "),bt=n(Jt,"A",{href:!0});var Bn=c(bt);fs=s(Bn,"SpeechEncoderDecoderModel"),Bn.forEach(o),ms=s(Jt,` model accepts raw waveform input values from speech and
makes use of `),St=n(Jt,"A",{href:!0});var Jn=c(St);us=s(Jn,"generate()"),Jn.forEach(o),_s=s(Jt,` to translate the input speech
autoregressively to the target language.`),Jt.forEach(o),Vo=d(t),j=n(t,"P",{});var N=c(j);gs=s(N,"The "),wt=n(N,"A",{href:!0});var Gn=c(wt);vs=s(Gn,"Wav2Vec2FeatureExtractor"),Gn.forEach(o),xs=s(N,` class is responsible for preprocessing the input speech and
`),$t=n(N,"A",{href:!0});var Yn=c($t);Ts=s(Yn,"Speech2Text2Tokenizer"),Yn.forEach(o),ks=s(N,` decodes the generated target tokens to the target string. The
`),yt=n(N,"A",{href:!0});var Kn=c(yt);bs=s(Kn,"Speech2Text2Processor"),Kn.forEach(o),Ss=s(N," wraps "),Et=n(N,"A",{href:!0});var Qn=c(Et);ws=s(Qn,"Wav2Vec2FeatureExtractor"),Qn.forEach(o),$s=s(N,` and
`),zt=n(N,"A",{href:!0});var Xn=c(zt);ys=s(Xn,"Speech2Text2Tokenizer"),Xn.forEach(o),Es=s(N,` into a single instance to both extract the input features and decode the
predicted token ids.`),N.forEach(o),No=d(t),Pt=n(t,"UL",{});var Zn=c(Pt);no=n(Zn,"LI",{});var ec=c(no);zs=s(ec,"Step-by-step Speech Translation"),ec.forEach(o),Zn.forEach(o),Oo=d(t),v(De.$$.fragment,t),Ro=d(t),jt=n(t,"UL",{});var tc=c(jt);We=n(tc,"LI",{});var ir=c(We);co=n(ir,"P",{});var oc=c(co);Ps=s(oc,"Speech Translation via Pipelines"),oc.forEach(o),js=d(ir),io=n(ir,"P",{});var rc=c(io);Cs=s(rc,"The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),rc.forEach(o),ir.forEach(o),tc.forEach(o),Uo=d(t),v(Ie.$$.fragment,t),Ho=d(t),le=n(t,"P",{});var lr=c(le);qs=s(lr,"See "),Ve=n(lr,"A",{href:!0,rel:!0});var sc=c(Ve);Ms=s(sc,"model hub"),sc.forEach(o),Fs=s(lr," to look for Speech2Text2 checkpoints."),lr.forEach(o),Bo=d(t),ee=n(t,"H2",{class:!0});var dr=c(ee);de=n(dr,"A",{id:!0,class:!0,href:!0});var ac=c(de);lo=n(ac,"SPAN",{});var nc=c(lo);v(Ne.$$.fragment,nc),nc.forEach(o),ac.forEach(o),As=d(dr),po=n(dr,"SPAN",{});var cc=c(po);Ls=s(cc,"Speech2Text2Config"),cc.forEach(o),dr.forEach(o),Jo=d(t),W=n(t,"DIV",{class:!0});var Se=c(W);v(Oe.$$.fragment,Se),Ds=d(Se),te=n(Se,"P",{});var Gt=c(te);Ws=s(Gt,"This is the configuration class to store the configuration of a "),Ct=n(Gt,"A",{href:!0});var ic=c(Ct);Is=s(ic,"Speech2Text2ForCausalLM"),ic.forEach(o),Vs=s(Gt,`. It is used to
instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Re=n(Gt,"A",{href:!0,rel:!0});var lc=c(Re);Ns=s(lc,"facebook/s2t-wav2vec2-large-en-de"),lc.forEach(o),Os=s(Gt," architecture."),Gt.forEach(o),Rs=d(Se),oe=n(Se,"P",{});var Yt=c(oe);Us=s(Yt,"Configuration objects inherit from "),qt=n(Yt,"A",{href:!0});var dc=c(qt);Hs=s(dc,"PretrainedConfig"),dc.forEach(o),Bs=s(Yt,` and can be used to control the model outputs. Read the
documentation from `),Mt=n(Yt,"A",{href:!0});var pc=c(Mt);Js=s(pc,"PretrainedConfig"),pc.forEach(o),Gs=s(Yt," for more information."),Yt.forEach(o),Ys=d(Se),v(pe.$$.fragment,Se),Se.forEach(o),Go=d(t),re=n(t,"H2",{class:!0});var pr=c(re);he=n(pr,"A",{id:!0,class:!0,href:!0});var hc=c(he);ho=n(hc,"SPAN",{});var fc=c(ho);v(Ue.$$.fragment,fc),fc.forEach(o),hc.forEach(o),Ks=d(pr),fo=n(pr,"SPAN",{});var mc=c(fo);Qs=s(mc,"Speech2TextTokenizer"),mc.forEach(o),pr.forEach(o),Yo=d(t),P=n(t,"DIV",{class:!0});var O=c(P);v(He.$$.fragment,O),Xs=d(O),mo=n(O,"P",{});var uc=c(mo);Zs=s(uc,"Constructs a Speech2Text2Tokenizer."),uc.forEach(o),ea=d(O),Be=n(O,"P",{});var hr=c(Be);ta=s(hr,"This tokenizer inherits from "),Ft=n(hr,"A",{href:!0});var _c=c(Ft);oa=s(_c,"PreTrainedTokenizer"),_c.forEach(o),ra=s(hr,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),hr.forEach(o),sa=d(O),fe=n(O,"DIV",{class:!0});var fr=c(fe);v(Je.$$.fragment,fr),aa=d(fr),uo=n(fr,"P",{});var gc=c(uo);na=s(gc,"Convert a list of lists of token ids into a list of strings by calling decode."),gc.forEach(o),fr.forEach(o),ca=d(O),K=n(O,"DIV",{class:!0});var Kt=c(K);v(Ge.$$.fragment,Kt),ia=d(Kt),_o=n(Kt,"P",{});var vc=c(_o);la=s(vc,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),vc.forEach(o),da=d(Kt),Ye=n(Kt,"P",{});var mr=c(Ye);pa=s(mr,"Similar to doing "),go=n(mr,"CODE",{});var xc=c(go);ha=s(xc,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),xc.forEach(o),fa=s(mr,"."),mr.forEach(o),Kt.forEach(o),ma=d(O),At=n(O,"DIV",{class:!0});var Tc=c(At);v(Ke.$$.fragment,Tc),Tc.forEach(o),O.forEach(o),Ko=d(t),se=n(t,"H2",{class:!0});var ur=c(se);me=n(ur,"A",{id:!0,class:!0,href:!0});var kc=c(me);vo=n(kc,"SPAN",{});var bc=c(vo);v(Qe.$$.fragment,bc),bc.forEach(o),kc.forEach(o),ua=d(ur),xo=n(ur,"SPAN",{});var Sc=c(xo);_a=s(Sc,"Speech2Text2Processor"),Sc.forEach(o),ur.forEach(o),Qo=d(t),y=n(t,"DIV",{class:!0});var C=c(y);v(Xe.$$.fragment,C),ga=d(C),To=n(C,"P",{});var wc=c(To);va=s(wc,`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),wc.forEach(o),xa=d(C),A=n(C,"P",{});var H=c(A);Lt=n(H,"A",{href:!0});var $c=c(Lt);Ta=s($c,"Speech2Text2Processor"),$c.forEach(o),ka=s(H," offers all the functionalities of "),Dt=n(H,"A",{href:!0});var yc=c(Dt);ba=s(yc,"AutoFeatureExtractor"),yc.forEach(o),Sa=s(H," and "),Wt=n(H,"A",{href:!0});var Ec=c(Wt);wa=s(Ec,"Speech2Text2Tokenizer"),Ec.forEach(o),$a=s(H,`.
See the `),Ze=n(H,"A",{href:!0});var wn=c(Ze);ko=n(wn,"STRONG",{});var zc=c(ko);ya=s(zc,"call"),zc.forEach(o),Ea=s(wn,"()"),wn.forEach(o),za=s(H," and "),It=n(H,"A",{href:!0});var Pc=c(It);Pa=s(Pc,"decode()"),Pc.forEach(o),ja=s(H," for more information."),H.forEach(o),Ca=d(C),ue=n(C,"DIV",{class:!0});var _r=c(ue);v(et.$$.fragment,_r),qa=d(_r),R=n(_r,"P",{});var we=c(R);Ma=s(we,`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),bo=n(we,"CODE",{});var jc=c(bo);Fa=s(jc,"__call__()"),jc.forEach(o),Aa=s(we,` and returns its output. If used in the context
`),So=n(we,"CODE",{});var Cc=c(So);La=s(Cc,"as_target_processor()"),Cc.forEach(o),Da=s(we,` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),tt=n(we,"A",{href:!0});var $n=c(tt);wo=n($n,"STRONG",{});var qc=c(wo);Wa=s(qc,"call"),qc.forEach(o),Ia=s($n,"()"),$n.forEach(o),Va=s(we,`. Please refer to the doctsring of the above two
methods for more information.`),we.forEach(o),_r.forEach(o),Na=d(C),Q=n(C,"DIV",{class:!0});var Qt=c(Q);v(ot.$$.fragment,Qt),Oa=d(Qt),$o=n(Qt,"P",{});var Mc=c($o);Ra=s(Mc,"Instantiate a processor associated with a pretrained model."),Mc.forEach(o),Ua=d(Qt),v(_e.$$.fragment,Qt),Qt.forEach(o),Ha=d(C),X=n(C,"DIV",{class:!0});var Xt=c(X);v(rt.$$.fragment,Xt),Ba=d(Xt),st=n(Xt,"P",{});var gr=c(st);Ja=s(gr,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Vt=n(gr,"A",{href:!0});var Fc=c(Vt);Ga=s(Fc,"from_pretrained()"),Fc.forEach(o),Ya=s(gr," method."),gr.forEach(o),Ka=d(Xt),v(ge.$$.fragment,Xt),Xt.forEach(o),Qa=d(C),ve=n(C,"DIV",{class:!0});var vr=c(ve);v(at.$$.fragment,vr),Xa=d(vr),nt=n(vr,"P",{});var xr=c(nt);Za=s(xr,"This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Nt=n(xr,"A",{href:!0});var Ac=c(Nt);en=s(Ac,"batch_decode()"),Ac.forEach(o),tn=s(xr,`. Please
refer to the docstring of this method for more information.`),xr.forEach(o),vr.forEach(o),on=d(C),xe=n(C,"DIV",{class:!0});var Tr=c(xe);v(ct.$$.fragment,Tr),rn=d(Tr),it=n(Tr,"P",{});var kr=c(it);sn=s(kr,"This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Ot=n(kr,"A",{href:!0});var Lc=c(Ot);an=s(Lc,"decode()"),Lc.forEach(o),nn=s(kr,`. Please refer
to the docstring of this method for more information.`),kr.forEach(o),Tr.forEach(o),C.forEach(o),Xo=d(t),ae=n(t,"H2",{class:!0});var br=c(ae);Te=n(br,"A",{id:!0,class:!0,href:!0});var Dc=c(Te);yo=n(Dc,"SPAN",{});var Wc=c(yo);v(lt.$$.fragment,Wc),Wc.forEach(o),Dc.forEach(o),cn=d(br),Eo=n(br,"SPAN",{});var Ic=c(Eo);ln=s(Ic,"Speech2Text2ForCausalLM"),Ic.forEach(o),br.forEach(o),Zo=d(t),I=n(t,"DIV",{class:!0});var $e=c(I);v(dt.$$.fragment,$e),dn=d($e),U=n($e,"P",{});var ye=c(U);pn=s(ye,"The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Rt=n(ye,"A",{href:!0});var Vc=c(Rt);hn=s(Vc,"EncoderDecoderModel"),Vc.forEach(o),fn=s(ye," and "),zo=n(ye,"CODE",{});var Nc=c(zo);mn=s(Nc,"SpeechEncoderDecoder"),Nc.forEach(o),un=s(ye,`.
This model inherits from `),Ut=n(ye,"A",{href:!0});var Oc=c(Ut);_n=s(Oc,"PreTrainedModel"),Oc.forEach(o),gn=s(ye,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ye.forEach(o),vn=d($e),pt=n($e,"P",{});var Sr=c(pt);xn=s(Sr,"This model is also a PyTorch "),ht=n(Sr,"A",{href:!0,rel:!0});var Rc=c(ht);Tn=s(Rc,"torch.nn.Module"),Rc.forEach(o),kn=s(Sr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sr.forEach(o),bn=d($e),ke=n($e,"DIV",{class:!0});var wr=c(ke);v(ft.$$.fragment,wr),Sn=d(wr),v(be.$$.fragment,wr),wr.forEach(o),$e.forEach(o),this.h()},h(){i(m,"name","hf:doc:metadata"),i(m,"content",JSON.stringify(ri)),i(_,"id","speech2text2"),i(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(_,"href","#speech2text2"),i(u,"class","relative group"),i(F,"id","overview"),i(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(F,"href","#overview"),i(M,"class","relative group"),i(_t,"href","wav2vec2"),i(ze,"href","https://arxiv.org/abs/2104.06678"),i(ze,"rel","nofollow"),i(gt,"href","wav2vec2"),i(vt,"href","hubert"),i(xt,"href","speech-encoder-decoder"),i(Pe,"href","https://huggingface.co/patrickvonplaten"),i(Pe,"rel","nofollow"),i(je,"href","https://github.com/pytorch/fairseq/blob/1f7ef9ed1e1061f8c7f88f8b94c7186834398690/fairseq/models/wav2vec/wav2vec2_asr.py#L266"),i(je,"rel","nofollow"),i(qe,"href","https://huggingface.co/models?other=speech2text2"),i(qe,"rel","nofollow"),i(kt,"href","speech-encoder-decoder"),i(Ae,"href","https://github.com/glample/fastBPE"),i(Ae,"rel","nofollow"),i(ie,"id","inference"),i(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(ie,"href","#inference"),i(Z,"class","relative group"),i(bt,"href","/docs/transformers/v4.22.0/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(St,"href","/docs/transformers/v4.22.0/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),i(wt,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),i($t,"href","/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(yt,"href","/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),i(Et,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),i(zt,"href","/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(Ve,"href","https://huggingface.co/models?filter=speech2text2"),i(Ve,"rel","nofollow"),i(de,"id","transformers.Speech2Text2Config"),i(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(de,"href","#transformers.Speech2Text2Config"),i(ee,"class","relative group"),i(Ct,"href","/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2ForCausalLM"),i(Re,"href","https://huggingface.co/facebook/s2t-wav2vec2-large-en-de"),i(Re,"rel","nofollow"),i(qt,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),i(Mt,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),i(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(he,"id","transformers.Speech2Text2Tokenizer"),i(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(he,"href","#transformers.Speech2Text2Tokenizer"),i(re,"class","relative group"),i(Ft,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),i(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(me,"id","transformers.Speech2Text2Processor"),i(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(me,"href","#transformers.Speech2Text2Processor"),i(se,"class","relative group"),i(Lt,"href","/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),i(Dt,"href","/docs/transformers/v4.22.0/en/model_doc/auto#transformers.AutoFeatureExtractor"),i(Wt,"href","/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(Ze,"href","/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.__call__"),i(It,"href","/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.decode"),i(tt,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),i(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(Vt,"href","/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.from_pretrained"),i(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(Nt,"href","/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),i(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(Ot,"href","/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),i(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(Te,"id","transformers.Speech2Text2ForCausalLM"),i(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(Te,"href","#transformers.Speech2Text2ForCausalLM"),i(ae,"class","relative group"),i(Rt,"href","/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),i(Ut,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),i(ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),i(ht,"rel","nofollow"),i(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,p){e(document.head,m),h(t,E,p),h(t,u,p),e(u,_),e(_,w),x(f,w,null),e(u,S),e(u,D),e(D,q),h(t,$,p),h(t,M,p),e(M,F),e(F,Zt),x(Ee,Zt,null),e(M,yr),e(M,eo),e(eo,Er),h(t,qo,p),h(t,J,p),e(J,zr),e(J,_t),e(_t,Pr),e(J,jr),e(J,ze),e(ze,Cr),e(J,qr),h(t,Mo,p),h(t,z,p),e(z,Mr),e(z,to),e(to,Fr),e(z,Ar),e(z,oo),e(oo,Lr),e(z,Dr),e(z,gt),e(gt,Wr),e(z,Ir),e(z,vt),e(vt,Vr),e(z,Nr),e(z,xt),e(xt,Or),e(z,Rr),e(z,ro),e(ro,Ur),e(z,Hr),h(t,Fo,p),h(t,ne,p),e(ne,Br),e(ne,Pe),e(Pe,Jr),e(ne,Gr),h(t,Ao,p),h(t,ce,p),e(ce,Yr),e(ce,je),e(je,Kr),e(ce,Qr),h(t,Lo,p),h(t,Tt,p),e(Tt,Xr),h(t,Do,p),h(t,G,p),e(G,Ce),e(Ce,Zr),e(Ce,qe),e(qe,es),e(Ce,ts),e(G,os),e(G,Me),e(Me,rs),e(Me,kt),e(kt,ss),e(Me,as),e(G,ns),e(G,Fe),e(Fe,cs),e(Fe,Ae),e(Ae,is),e(Fe,ls),h(t,Wo,p),h(t,Z,p),e(Z,ie),e(ie,so),x(Le,so,null),e(Z,ds),e(Z,ao),e(ao,ps),h(t,Io,p),h(t,Y,p),e(Y,hs),e(Y,bt),e(bt,fs),e(Y,ms),e(Y,St),e(St,us),e(Y,_s),h(t,Vo,p),h(t,j,p),e(j,gs),e(j,wt),e(wt,vs),e(j,xs),e(j,$t),e($t,Ts),e(j,ks),e(j,yt),e(yt,bs),e(j,Ss),e(j,Et),e(Et,ws),e(j,$s),e(j,zt),e(zt,ys),e(j,Es),h(t,No,p),h(t,Pt,p),e(Pt,no),e(no,zs),h(t,Oo,p),x(De,t,p),h(t,Ro,p),h(t,jt,p),e(jt,We),e(We,co),e(co,Ps),e(We,js),e(We,io),e(io,Cs),h(t,Uo,p),x(Ie,t,p),h(t,Ho,p),h(t,le,p),e(le,qs),e(le,Ve),e(Ve,Ms),e(le,Fs),h(t,Bo,p),h(t,ee,p),e(ee,de),e(de,lo),x(Ne,lo,null),e(ee,As),e(ee,po),e(po,Ls),h(t,Jo,p),h(t,W,p),x(Oe,W,null),e(W,Ds),e(W,te),e(te,Ws),e(te,Ct),e(Ct,Is),e(te,Vs),e(te,Re),e(Re,Ns),e(te,Os),e(W,Rs),e(W,oe),e(oe,Us),e(oe,qt),e(qt,Hs),e(oe,Bs),e(oe,Mt),e(Mt,Js),e(oe,Gs),e(W,Ys),x(pe,W,null),h(t,Go,p),h(t,re,p),e(re,he),e(he,ho),x(Ue,ho,null),e(re,Ks),e(re,fo),e(fo,Qs),h(t,Yo,p),h(t,P,p),x(He,P,null),e(P,Xs),e(P,mo),e(mo,Zs),e(P,ea),e(P,Be),e(Be,ta),e(Be,Ft),e(Ft,oa),e(Be,ra),e(P,sa),e(P,fe),x(Je,fe,null),e(fe,aa),e(fe,uo),e(uo,na),e(P,ca),e(P,K),x(Ge,K,null),e(K,ia),e(K,_o),e(_o,la),e(K,da),e(K,Ye),e(Ye,pa),e(Ye,go),e(go,ha),e(Ye,fa),e(P,ma),e(P,At),x(Ke,At,null),h(t,Ko,p),h(t,se,p),e(se,me),e(me,vo),x(Qe,vo,null),e(se,ua),e(se,xo),e(xo,_a),h(t,Qo,p),h(t,y,p),x(Xe,y,null),e(y,ga),e(y,To),e(To,va),e(y,xa),e(y,A),e(A,Lt),e(Lt,Ta),e(A,ka),e(A,Dt),e(Dt,ba),e(A,Sa),e(A,Wt),e(Wt,wa),e(A,$a),e(A,Ze),e(Ze,ko),e(ko,ya),e(Ze,Ea),e(A,za),e(A,It),e(It,Pa),e(A,ja),e(y,Ca),e(y,ue),x(et,ue,null),e(ue,qa),e(ue,R),e(R,Ma),e(R,bo),e(bo,Fa),e(R,Aa),e(R,So),e(So,La),e(R,Da),e(R,tt),e(tt,wo),e(wo,Wa),e(tt,Ia),e(R,Va),e(y,Na),e(y,Q),x(ot,Q,null),e(Q,Oa),e(Q,$o),e($o,Ra),e(Q,Ua),x(_e,Q,null),e(y,Ha),e(y,X),x(rt,X,null),e(X,Ba),e(X,st),e(st,Ja),e(st,Vt),e(Vt,Ga),e(st,Ya),e(X,Ka),x(ge,X,null),e(y,Qa),e(y,ve),x(at,ve,null),e(ve,Xa),e(ve,nt),e(nt,Za),e(nt,Nt),e(Nt,en),e(nt,tn),e(y,on),e(y,xe),x(ct,xe,null),e(xe,rn),e(xe,it),e(it,sn),e(it,Ot),e(Ot,an),e(it,nn),h(t,Xo,p),h(t,ae,p),e(ae,Te),e(Te,yo),x(lt,yo,null),e(ae,cn),e(ae,Eo),e(Eo,ln),h(t,Zo,p),h(t,I,p),x(dt,I,null),e(I,dn),e(I,U),e(U,pn),e(U,Rt),e(Rt,hn),e(U,fn),e(U,zo),e(zo,mn),e(U,un),e(U,Ut),e(Ut,_n),e(U,gn),e(I,vn),e(I,pt),e(pt,xn),e(pt,ht),e(ht,Tn),e(pt,kn),e(I,bn),e(I,ke),x(ft,ke,null),e(ke,Sn),x(be,ke,null),er=!0},p(t,[p]){const mt={};p&2&&(mt.$$scope={dirty:p,ctx:t}),pe.$set(mt);const Po={};p&2&&(Po.$$scope={dirty:p,ctx:t}),_e.$set(Po);const jo={};p&2&&(jo.$$scope={dirty:p,ctx:t}),ge.$set(jo);const Co={};p&2&&(Co.$$scope={dirty:p,ctx:t}),be.$set(Co)},i(t){er||(T(f.$$.fragment,t),T(Ee.$$.fragment,t),T(Le.$$.fragment,t),T(De.$$.fragment,t),T(Ie.$$.fragment,t),T(Ne.$$.fragment,t),T(Oe.$$.fragment,t),T(pe.$$.fragment,t),T(Ue.$$.fragment,t),T(He.$$.fragment,t),T(Je.$$.fragment,t),T(Ge.$$.fragment,t),T(Ke.$$.fragment,t),T(Qe.$$.fragment,t),T(Xe.$$.fragment,t),T(et.$$.fragment,t),T(ot.$$.fragment,t),T(_e.$$.fragment,t),T(rt.$$.fragment,t),T(ge.$$.fragment,t),T(at.$$.fragment,t),T(ct.$$.fragment,t),T(lt.$$.fragment,t),T(dt.$$.fragment,t),T(ft.$$.fragment,t),T(be.$$.fragment,t),er=!0)},o(t){k(f.$$.fragment,t),k(Ee.$$.fragment,t),k(Le.$$.fragment,t),k(De.$$.fragment,t),k(Ie.$$.fragment,t),k(Ne.$$.fragment,t),k(Oe.$$.fragment,t),k(pe.$$.fragment,t),k(Ue.$$.fragment,t),k(He.$$.fragment,t),k(Je.$$.fragment,t),k(Ge.$$.fragment,t),k(Ke.$$.fragment,t),k(Qe.$$.fragment,t),k(Xe.$$.fragment,t),k(et.$$.fragment,t),k(ot.$$.fragment,t),k(_e.$$.fragment,t),k(rt.$$.fragment,t),k(ge.$$.fragment,t),k(at.$$.fragment,t),k(ct.$$.fragment,t),k(lt.$$.fragment,t),k(dt.$$.fragment,t),k(ft.$$.fragment,t),k(be.$$.fragment,t),er=!1},d(t){o(m),t&&o(E),t&&o(u),b(f),t&&o($),t&&o(M),b(Ee),t&&o(qo),t&&o(J),t&&o(Mo),t&&o(z),t&&o(Fo),t&&o(ne),t&&o(Ao),t&&o(ce),t&&o(Lo),t&&o(Tt),t&&o(Do),t&&o(G),t&&o(Wo),t&&o(Z),b(Le),t&&o(Io),t&&o(Y),t&&o(Vo),t&&o(j),t&&o(No),t&&o(Pt),t&&o(Oo),b(De,t),t&&o(Ro),t&&o(jt),t&&o(Uo),b(Ie,t),t&&o(Ho),t&&o(le),t&&o(Bo),t&&o(ee),b(Ne),t&&o(Jo),t&&o(W),b(Oe),b(pe),t&&o(Go),t&&o(re),b(Ue),t&&o(Yo),t&&o(P),b(He),b(Je),b(Ge),b(Ke),t&&o(Ko),t&&o(se),b(Qe),t&&o(Qo),t&&o(y),b(Xe),b(et),b(ot),b(_e),b(rt),b(ge),b(at),b(ct),t&&o(Xo),t&&o(ae),b(lt),t&&o(Zo),t&&o(I),b(dt),b(ft),b(be)}}}const ri={local:"speech2text2",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2Text2Config",title:"Speech2Text2Config"},{local:"transformers.Speech2Text2Tokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2Text2Processor",title:"Speech2Text2Processor"},{local:"transformers.Speech2Text2ForCausalLM",title:"Speech2Text2ForCausalLM"}],title:"Speech2Text2"};function si(B){return Qc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pi extends Jc{constructor(m){super();Gc(this,m,si,oi,Yc,{})}}export{pi as default,ri as metadata};
