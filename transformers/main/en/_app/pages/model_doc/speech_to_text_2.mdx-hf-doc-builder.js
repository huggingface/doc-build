import{S as Ji,i as Gi,s as Ki,e as a,k as l,w as g,t as r,M as Qi,c as n,d as o,m as d,a as i,x as v,h as s,b as c,G as e,g as h,y as T,q as x,o as k,B as b,v as Xi,L as Bi}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ri}from"../../chunks/Tip-hf-doc-builder.js";import{D as V}from"../../chunks/Docstring-hf-doc-builder.js";import{C as $r}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ut}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Hi}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Yi(B){let f,E,u,_,w;return _=new $r({props:{code:`from transformers import Speech2Text2ForCausalLM, Speech2Text2Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){f=a("p"),E=r("Example:"),u=l(),g(_.$$.fragment)},l(m){f=n(m,"P",{});var S=i(f);E=s(S,"Example:"),S.forEach(o),u=d(m),v(_.$$.fragment,m)},m(m,S){h(m,f,S),e(f,E),h(m,u,S),T(_,m,S),w=!0},p:Bi,i(m){w||(x(_.$$.fragment,m),w=!0)},o(m){k(_.$$.fragment,m),w=!1},d(m){m&&o(f),m&&o(u),b(_,m)}}}function Zi(B){let f,E,u,_,w,m,S,D;return{c(){f=a("p"),E=r(`This class method is simply calling the feature extractor
`),u=a("a"),_=r("from_pretrained()"),w=r(` and the tokenizer
`),m=a("code"),S=r("from_pretrained"),D=r(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(q){f=n(q,"P",{});var $=i(f);E=s($,`This class method is simply calling the feature extractor
`),u=n($,"A",{href:!0});var F=i(u);_=s(F,"from_pretrained()"),F.forEach(o),w=s($,` and the tokenizer
`),m=n($,"CODE",{});var M=i(m);S=s(M,"from_pretrained"),M.forEach(o),D=s($,` methods. Please refer to the docstrings of the
methods above for more information.`),$.forEach(o),this.h()},h(){c(u,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(q,$){h(q,f,$),e(f,E),e(f,u),e(u,_),e(f,w),e(f,m),e(m,S),e(f,D)},d(q){q&&o(f)}}}function ec(B){let f,E,u,_,w,m,S,D;return{c(){f=a("p"),E=r("This class method is simply calling "),u=a("a"),_=r("save_pretrained()"),w=r(` and
`),m=a("code"),S=r("save_pretrained"),D=r(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(q){f=n(q,"P",{});var $=i(f);E=s($,"This class method is simply calling "),u=n($,"A",{href:!0});var F=i(u);_=s(F,"save_pretrained()"),F.forEach(o),w=s($,` and
`),m=n($,"CODE",{});var M=i(m);S=s(M,"save_pretrained"),M.forEach(o),D=s($,`. Please refer to the docstrings of the methods
above for more information.`),$.forEach(o),this.h()},h(){c(u,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(q,$){h(q,f,$),e(f,E),e(f,u),e(u,_),e(f,w),e(f,m),e(m,S),e(f,D)},d(q){q&&o(f)}}}function tc(B){let f,E,u,_,w;return _=new $r({props:{code:`from transformers import (
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){f=a("p"),E=r("Example:"),u=l(),g(_.$$.fragment)},l(m){f=n(m,"P",{});var S=i(f);E=s(S,"Example:"),S.forEach(o),u=d(m),v(_.$$.fragment,m)},m(m,S){h(m,f,S),e(f,E),h(m,u,S),T(_,m,S),w=!0},p:Bi,i(m){w||(x(_.$$.fragment,m),w=!0)},o(m){k(_.$$.fragment,m),w=!1},d(m){m&&o(f),m&&o(u),b(_,m)}}}function oc(B){let f,E,u,_,w,m,S,D,q,$,F,M,Zt,Ee,yr,eo,Er,qo,J,zr,_t,Pr,jr,ze,Cr,qr,Fo,z,Fr,to,Mr,Ar,oo,Lr,Dr,gt,Wr,Ir,vt,Vr,Nr,Tt,Or,Ur,ro,Rr,Hr,Mo,ne,Br,Pe,Jr,Gr,Ao,ie,Kr,je,Qr,Xr,Lo,xt,Yr,Do,G,Ce,Zr,qe,es,ts,os,Fe,rs,kt,ss,as,ns,Me,is,Ae,cs,ls,Wo,Z,ce,so,Le,ds,ao,ps,Io,K,hs,bt,ms,fs,St,us,_s,Vo,j,gs,wt,vs,Ts,$t,xs,ks,yt,bs,Ss,Et,ws,$s,zt,ys,Es,No,Pt,no,zs,Oo,De,Uo,jt,We,io,Ps,js,co,Cs,Ro,Ie,Ho,le,qs,Ve,Fs,Ms,Bo,ee,de,lo,Ne,As,po,Ls,Jo,W,Oe,Ds,te,Ws,Ct,Is,Vs,Ue,Ns,Os,Us,oe,Rs,qt,Hs,Bs,Ft,Js,Gs,Ks,pe,Go,re,he,ho,Re,Qs,mo,Xs,Ko,P,He,Ys,fo,Zs,ea,Be,ta,Mt,oa,ra,sa,me,Je,aa,uo,na,ia,Q,Ge,ca,_o,la,da,Ke,pa,go,ha,ma,fa,At,Qe,Qo,se,fe,vo,Xe,ua,To,_a,Xo,y,Ye,ga,xo,va,Ta,A,Lt,xa,ka,Dt,ba,Sa,Wt,wa,$a,Ze,ko,ya,Ea,za,It,Pa,ja,Ca,ue,et,qa,U,Fa,bo,Ma,Aa,So,La,Da,tt,wo,Wa,Ia,Va,Na,X,ot,Oa,$o,Ua,Ra,_e,Ha,Y,rt,Ba,st,Ja,Vt,Ga,Ka,Qa,ge,Xa,ve,at,Ya,nt,Za,Nt,en,tn,on,Te,it,rn,ct,sn,Ot,an,nn,Yo,ae,xe,yo,lt,cn,Eo,ln,Zo,I,dt,dn,R,pn,Ut,hn,mn,zo,fn,un,Rt,_n,gn,vn,pt,Tn,ht,xn,kn,bn,ke,mt,Sn,be,er;return m=new ut({}),Ee=new ut({}),Le=new ut({}),De=new $r({props:{code:`import torch
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
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>`,name:"vocab_size"},{anchor:"transformers.Speech2Text2Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<a href="https://arxiv.org/abs/1909.11556%3E%60" rel="nofollow">https://arxiv.org/abs/1909.11556&gt;\`</a>__ for more details. decoder_layerdrop: (<code>float</code>, <em>optional</em>, defaults to
0.0): The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.Speech2Text2Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.Speech2Text2Config.max_source_positions",description:`<strong>max_source_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 6000) &#x2014;
The maximum sequence length of log-mel filter-bank features that this model might ever be used with.
max_target_positions &#x2014; (<code>int</code>, <em>optional</em>, defaults to 1024):
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_source_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/configuration_speech_to_text_2.py#L31"}}),pe=new Hi({props:{anchor:"transformers.Speech2Text2Config.example",$$slots:{default:[Yi]},$$scope:{ctx:B}}}),Re=new ut({}),He=new V({props:{name:"class transformers.Speech2Text2Tokenizer",anchor:"transformers.Speech2Text2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_lower_case",val:" = False"},{name:"merges_file",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Speech2Text2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Speech2Text2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Speech2Text2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Speech2Text2Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.</p>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/tokenization_speech_to_text_2.py#L73"}}),Je=new V({props:{name:"batch_decode",anchor:"transformers.Speech2Text2Tokenizer.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3385",returnDescription:`
<p>The list of decoded sentences.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Ge=new V({props:{name:"decode",anchor:"transformers.Speech2Text2Tokenizer.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.Speech2Text2Tokenizer.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Speech2Text2Tokenizer.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Speech2Text2Tokenizer.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3418",returnDescription:`
<p>The decoded sentence.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Qe=new V({props:{name:"save_vocabulary",anchor:"transformers.Speech2Text2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/tokenization_speech_to_text_2.py#L241"}}),Xe=new ut({}),Ye=new V({props:{name:"class transformers.Speech2Text2Processor",anchor:"transformers.Speech2Text2Processor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>AutoFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2Text2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2Text2Tokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer">Speech2Text2Tokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L24"}}),et=new V({props:{name:"__call__",anchor:"transformers.Speech2Text2Processor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L46"}}),ot=new V({props:{name:"from_pretrained",anchor:"transformers.Speech2Text2Processor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Processor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L156"}}),_e=new Ri({props:{$$slots:{default:[Zi]},$$scope:{ctx:B}}}),rt=new V({props:{name:"save_pretrained",anchor:"transformers.Speech2Text2Processor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Processor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Speech2Text2Processor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L94"}}),ge=new Ri({props:{$$slots:{default:[ec]},$$scope:{ctx:B}}}),at=new V({props:{name:"batch_decode",anchor:"transformers.Speech2Text2Processor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L84"}}),it=new V({props:{name:"decode",anchor:"transformers.Speech2Text2Processor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L91"}}),lt=new ut({}),dt=new V({props:{name:"class transformers.Speech2Text2ForCausalLM",anchor:"transformers.Speech2Text2ForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Config">Speech2Text2Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L747"}}),mt=new V({props:{name:"forward",anchor:"transformers.Speech2Text2ForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer">Speech2Text2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L778",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),be=new Hi({props:{anchor:"transformers.Speech2Text2ForCausalLM.forward.example",$$slots:{default:[tc]},$$scope:{ctx:B}}}),{c(){f=a("meta"),E=l(),u=a("h1"),_=a("a"),w=a("span"),g(m.$$.fragment),S=l(),D=a("span"),q=r("Speech2Text2"),$=l(),F=a("h2"),M=a("a"),Zt=a("span"),g(Ee.$$.fragment),yr=l(),eo=a("span"),Er=r("Overview"),qo=l(),J=a("p"),zr=r("The Speech2Text2 model is used together with "),_t=a("a"),Pr=r("Wav2Vec2"),jr=r(` for Speech Translation models proposed in
`),ze=a("a"),Cr=r("Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),qr=r(` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Fo=l(),z=a("p"),Fr=r("Speech2Text2 is a "),to=a("em"),Mr=r("decoder-only"),Ar=r(" transformer model that can be used with any speech "),oo=a("em"),Lr=r("encoder-only"),Dr=r(`, such as
`),gt=a("a"),Wr=r("Wav2Vec2"),Ir=r(" or "),vt=a("a"),Vr=r("HuBERT"),Nr=r(` for Speech-to-Text tasks. Please refer to the
`),Tt=a("a"),Or=r("SpeechEncoderDecoder"),Ur=r(" class on how to combine Speech2Text2 with any speech "),ro=a("em"),Rr=r("encoder-only"),Hr=r(`
model.`),Mo=l(),ne=a("p"),Br=r("This model was contributed by "),Pe=a("a"),Jr=r("Patrick von Platen"),Gr=r("."),Ao=l(),ie=a("p"),Kr=r("The original code can be found "),je=a("a"),Qr=r("here"),Xr=r("."),Lo=l(),xt=a("p"),Yr=r("Tips:"),Do=l(),G=a("ul"),Ce=a("li"),Zr=r(`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),qe=a("a"),es=r("official models"),ts=r(" ."),os=l(),Fe=a("li"),rs=r("Speech2Text2 is always used within the "),kt=a("a"),ss=r("SpeechEncoderDecoder"),as=r(" framework."),ns=l(),Me=a("li"),is=r("Speech2Text2\u2019s tokenizer is based on "),Ae=a("a"),cs=r("fastBPE"),ls=r("."),Wo=l(),Z=a("h2"),ce=a("a"),so=a("span"),g(Le.$$.fragment),ds=l(),ao=a("span"),ps=r("Inference"),Io=l(),K=a("p"),hs=r("Speech2Text2\u2019s "),bt=a("a"),ms=r("SpeechEncoderDecoderModel"),fs=r(` model accepts raw waveform input values from speech and
makes use of `),St=a("a"),us=r("generate()"),_s=r(` to translate the input speech
autoregressively to the target language.`),Vo=l(),j=a("p"),gs=r("The "),wt=a("a"),vs=r("Wav2Vec2FeatureExtractor"),Ts=r(` class is responsible for preprocessing the input speech and
`),$t=a("a"),xs=r("Speech2Text2Tokenizer"),ks=r(` decodes the generated target tokens to the target string. The
`),yt=a("a"),bs=r("Speech2Text2Processor"),Ss=r(" wraps "),Et=a("a"),ws=r("Wav2Vec2FeatureExtractor"),$s=r(` and
`),zt=a("a"),ys=r("Speech2Text2Tokenizer"),Es=r(` into a single instance to both extract the input features and decode the
predicted token ids.`),No=l(),Pt=a("ul"),no=a("li"),zs=r("Step-by-step Speech Translation"),Oo=l(),g(De.$$.fragment),Uo=l(),jt=a("ul"),We=a("li"),io=a("p"),Ps=r("Speech Translation via Pipelines"),js=l(),co=a("p"),Cs=r("The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),Ro=l(),g(Ie.$$.fragment),Ho=l(),le=a("p"),qs=r("See "),Ve=a("a"),Fs=r("model hub"),Ms=r(" to look for Speech2Text2 checkpoints."),Bo=l(),ee=a("h2"),de=a("a"),lo=a("span"),g(Ne.$$.fragment),As=l(),po=a("span"),Ls=r("Speech2Text2Config"),Jo=l(),W=a("div"),g(Oe.$$.fragment),Ds=l(),te=a("p"),Ws=r("This is the configuration class to store the configuration of a "),Ct=a("a"),Is=r("Speech2Text2ForCausalLM"),Vs=r(`. It is used to
instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Ue=a("a"),Ns=r("facebook/s2t-wav2vec2-large-en-de"),Os=r(" architecture."),Us=l(),oe=a("p"),Rs=r("Configuration objects inherit from "),qt=a("a"),Hs=r("PretrainedConfig"),Bs=r(` and can be used to control the model outputs. Read the
documentation from `),Ft=a("a"),Js=r("PretrainedConfig"),Gs=r(" for more information."),Ks=l(),g(pe.$$.fragment),Go=l(),re=a("h2"),he=a("a"),ho=a("span"),g(Re.$$.fragment),Qs=l(),mo=a("span"),Xs=r("Speech2TextTokenizer"),Ko=l(),P=a("div"),g(He.$$.fragment),Ys=l(),fo=a("p"),Zs=r("Constructs a Speech2Text2Tokenizer."),ea=l(),Be=a("p"),ta=r("This tokenizer inherits from "),Mt=a("a"),oa=r("PreTrainedTokenizer"),ra=r(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),sa=l(),me=a("div"),g(Je.$$.fragment),aa=l(),uo=a("p"),na=r("Convert a list of lists of token ids into a list of strings by calling decode."),ia=l(),Q=a("div"),g(Ge.$$.fragment),ca=l(),_o=a("p"),la=r(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),da=l(),Ke=a("p"),pa=r("Similar to doing "),go=a("code"),ha=r("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),ma=r("."),fa=l(),At=a("div"),g(Qe.$$.fragment),Qo=l(),se=a("h2"),fe=a("a"),vo=a("span"),g(Xe.$$.fragment),ua=l(),To=a("span"),_a=r("Speech2Text2Processor"),Xo=l(),y=a("div"),g(Ye.$$.fragment),ga=l(),xo=a("p"),va=r(`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),Ta=l(),A=a("p"),Lt=a("a"),xa=r("Speech2Text2Processor"),ka=r(" offers all the functionalities of "),Dt=a("a"),ba=r("AutoFeatureExtractor"),Sa=r(" and "),Wt=a("a"),wa=r("Speech2Text2Tokenizer"),$a=r(`.
See the `),Ze=a("a"),ko=a("strong"),ya=r("call"),Ea=r("()"),za=r(" and "),It=a("a"),Pa=r("decode()"),ja=r(" for more information."),Ca=l(),ue=a("div"),g(et.$$.fragment),qa=l(),U=a("p"),Fa=r(`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),bo=a("code"),Ma=r("__call__()"),Aa=r(` and returns its output. If used in the context
`),So=a("code"),La=r("as_target_processor()"),Da=r(` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),tt=a("a"),wo=a("strong"),Wa=r("call"),Ia=r("()"),Va=r(`. Please refer to the doctsring of the above two
methods for more information.`),Na=l(),X=a("div"),g(ot.$$.fragment),Oa=l(),$o=a("p"),Ua=r("Instantiate a processor associated with a pretrained model."),Ra=l(),g(_e.$$.fragment),Ha=l(),Y=a("div"),g(rt.$$.fragment),Ba=l(),st=a("p"),Ja=r(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Vt=a("a"),Ga=r("from_pretrained()"),Ka=r(" method."),Qa=l(),g(ge.$$.fragment),Xa=l(),ve=a("div"),g(at.$$.fragment),Ya=l(),nt=a("p"),Za=r("This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Nt=a("a"),en=r("batch_decode()"),tn=r(`. Please
refer to the docstring of this method for more information.`),on=l(),Te=a("div"),g(it.$$.fragment),rn=l(),ct=a("p"),sn=r("This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Ot=a("a"),an=r("decode()"),nn=r(`. Please refer
to the docstring of this method for more information.`),Yo=l(),ae=a("h2"),xe=a("a"),yo=a("span"),g(lt.$$.fragment),cn=l(),Eo=a("span"),ln=r("Speech2Text2ForCausalLM"),Zo=l(),I=a("div"),g(dt.$$.fragment),dn=l(),R=a("p"),pn=r("The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Ut=a("a"),hn=r("EncoderDecoderModel"),mn=r(" and "),zo=a("code"),fn=r("SpeechEncoderDecoder"),un=r(`.
This model inherits from `),Rt=a("a"),_n=r("PreTrainedModel"),gn=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vn=l(),pt=a("p"),Tn=r("This model is also a PyTorch "),ht=a("a"),xn=r("torch.nn.Module"),kn=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bn=l(),ke=a("div"),g(mt.$$.fragment),Sn=l(),g(be.$$.fragment),this.h()},l(t){const p=Qi('[data-svelte="svelte-1phssyn"]',document.head);f=n(p,"META",{name:!0,content:!0}),p.forEach(o),E=d(t),u=n(t,"H1",{class:!0});var ft=i(u);_=n(ft,"A",{id:!0,class:!0,href:!0});var Po=i(_);w=n(Po,"SPAN",{});var jo=i(w);v(m.$$.fragment,jo),jo.forEach(o),Po.forEach(o),S=d(ft),D=n(ft,"SPAN",{});var Co=i(D);q=s(Co,"Speech2Text2"),Co.forEach(o),ft.forEach(o),$=d(t),F=n(t,"H2",{class:!0});var tr=i(F);M=n(tr,"A",{id:!0,class:!0,href:!0});var yn=i(M);Zt=n(yn,"SPAN",{});var En=i(Zt);v(Ee.$$.fragment,En),En.forEach(o),yn.forEach(o),yr=d(tr),eo=n(tr,"SPAN",{});var zn=i(eo);Er=s(zn,"Overview"),zn.forEach(o),tr.forEach(o),qo=d(t),J=n(t,"P",{});var Ht=i(J);zr=s(Ht,"The Speech2Text2 model is used together with "),_t=n(Ht,"A",{href:!0});var Pn=i(_t);Pr=s(Pn,"Wav2Vec2"),Pn.forEach(o),jr=s(Ht,` for Speech Translation models proposed in
`),ze=n(Ht,"A",{href:!0,rel:!0});var jn=i(ze);Cr=s(jn,"Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),jn.forEach(o),qr=s(Ht,` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Ht.forEach(o),Fo=d(t),z=n(t,"P",{});var L=i(z);Fr=s(L,"Speech2Text2 is a "),to=n(L,"EM",{});var Cn=i(to);Mr=s(Cn,"decoder-only"),Cn.forEach(o),Ar=s(L," transformer model that can be used with any speech "),oo=n(L,"EM",{});var qn=i(oo);Lr=s(qn,"encoder-only"),qn.forEach(o),Dr=s(L,`, such as
`),gt=n(L,"A",{href:!0});var Fn=i(gt);Wr=s(Fn,"Wav2Vec2"),Fn.forEach(o),Ir=s(L," or "),vt=n(L,"A",{href:!0});var Mn=i(vt);Vr=s(Mn,"HuBERT"),Mn.forEach(o),Nr=s(L,` for Speech-to-Text tasks. Please refer to the
`),Tt=n(L,"A",{href:!0});var An=i(Tt);Or=s(An,"SpeechEncoderDecoder"),An.forEach(o),Ur=s(L," class on how to combine Speech2Text2 with any speech "),ro=n(L,"EM",{});var Ln=i(ro);Rr=s(Ln,"encoder-only"),Ln.forEach(o),Hr=s(L,`
model.`),L.forEach(o),Mo=d(t),ne=n(t,"P",{});var or=i(ne);Br=s(or,"This model was contributed by "),Pe=n(or,"A",{href:!0,rel:!0});var Dn=i(Pe);Jr=s(Dn,"Patrick von Platen"),Dn.forEach(o),Gr=s(or,"."),or.forEach(o),Ao=d(t),ie=n(t,"P",{});var rr=i(ie);Kr=s(rr,"The original code can be found "),je=n(rr,"A",{href:!0,rel:!0});var Wn=i(je);Qr=s(Wn,"here"),Wn.forEach(o),Xr=s(rr,"."),rr.forEach(o),Lo=d(t),xt=n(t,"P",{});var In=i(xt);Yr=s(In,"Tips:"),In.forEach(o),Do=d(t),G=n(t,"UL",{});var Bt=i(G);Ce=n(Bt,"LI",{});var sr=i(Ce);Zr=s(sr,`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),qe=n(sr,"A",{href:!0,rel:!0});var Vn=i(qe);es=s(Vn,"official models"),Vn.forEach(o),ts=s(sr," ."),sr.forEach(o),os=d(Bt),Fe=n(Bt,"LI",{});var ar=i(Fe);rs=s(ar,"Speech2Text2 is always used within the "),kt=n(ar,"A",{href:!0});var Nn=i(kt);ss=s(Nn,"SpeechEncoderDecoder"),Nn.forEach(o),as=s(ar," framework."),ar.forEach(o),ns=d(Bt),Me=n(Bt,"LI",{});var nr=i(Me);is=s(nr,"Speech2Text2\u2019s tokenizer is based on "),Ae=n(nr,"A",{href:!0,rel:!0});var On=i(Ae);cs=s(On,"fastBPE"),On.forEach(o),ls=s(nr,"."),nr.forEach(o),Bt.forEach(o),Wo=d(t),Z=n(t,"H2",{class:!0});var ir=i(Z);ce=n(ir,"A",{id:!0,class:!0,href:!0});var Un=i(ce);so=n(Un,"SPAN",{});var Rn=i(so);v(Le.$$.fragment,Rn),Rn.forEach(o),Un.forEach(o),ds=d(ir),ao=n(ir,"SPAN",{});var Hn=i(ao);ps=s(Hn,"Inference"),Hn.forEach(o),ir.forEach(o),Io=d(t),K=n(t,"P",{});var Jt=i(K);hs=s(Jt,"Speech2Text2\u2019s "),bt=n(Jt,"A",{href:!0});var Bn=i(bt);ms=s(Bn,"SpeechEncoderDecoderModel"),Bn.forEach(o),fs=s(Jt,` model accepts raw waveform input values from speech and
makes use of `),St=n(Jt,"A",{href:!0});var Jn=i(St);us=s(Jn,"generate()"),Jn.forEach(o),_s=s(Jt,` to translate the input speech
autoregressively to the target language.`),Jt.forEach(o),Vo=d(t),j=n(t,"P",{});var N=i(j);gs=s(N,"The "),wt=n(N,"A",{href:!0});var Gn=i(wt);vs=s(Gn,"Wav2Vec2FeatureExtractor"),Gn.forEach(o),Ts=s(N,` class is responsible for preprocessing the input speech and
`),$t=n(N,"A",{href:!0});var Kn=i($t);xs=s(Kn,"Speech2Text2Tokenizer"),Kn.forEach(o),ks=s(N,` decodes the generated target tokens to the target string. The
`),yt=n(N,"A",{href:!0});var Qn=i(yt);bs=s(Qn,"Speech2Text2Processor"),Qn.forEach(o),Ss=s(N," wraps "),Et=n(N,"A",{href:!0});var Xn=i(Et);ws=s(Xn,"Wav2Vec2FeatureExtractor"),Xn.forEach(o),$s=s(N,` and
`),zt=n(N,"A",{href:!0});var Yn=i(zt);ys=s(Yn,"Speech2Text2Tokenizer"),Yn.forEach(o),Es=s(N,` into a single instance to both extract the input features and decode the
predicted token ids.`),N.forEach(o),No=d(t),Pt=n(t,"UL",{});var Zn=i(Pt);no=n(Zn,"LI",{});var ei=i(no);zs=s(ei,"Step-by-step Speech Translation"),ei.forEach(o),Zn.forEach(o),Oo=d(t),v(De.$$.fragment,t),Uo=d(t),jt=n(t,"UL",{});var ti=i(jt);We=n(ti,"LI",{});var cr=i(We);io=n(cr,"P",{});var oi=i(io);Ps=s(oi,"Speech Translation via Pipelines"),oi.forEach(o),js=d(cr),co=n(cr,"P",{});var ri=i(co);Cs=s(ri,"The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),ri.forEach(o),cr.forEach(o),ti.forEach(o),Ro=d(t),v(Ie.$$.fragment,t),Ho=d(t),le=n(t,"P",{});var lr=i(le);qs=s(lr,"See "),Ve=n(lr,"A",{href:!0,rel:!0});var si=i(Ve);Fs=s(si,"model hub"),si.forEach(o),Ms=s(lr," to look for Speech2Text2 checkpoints."),lr.forEach(o),Bo=d(t),ee=n(t,"H2",{class:!0});var dr=i(ee);de=n(dr,"A",{id:!0,class:!0,href:!0});var ai=i(de);lo=n(ai,"SPAN",{});var ni=i(lo);v(Ne.$$.fragment,ni),ni.forEach(o),ai.forEach(o),As=d(dr),po=n(dr,"SPAN",{});var ii=i(po);Ls=s(ii,"Speech2Text2Config"),ii.forEach(o),dr.forEach(o),Jo=d(t),W=n(t,"DIV",{class:!0});var Se=i(W);v(Oe.$$.fragment,Se),Ds=d(Se),te=n(Se,"P",{});var Gt=i(te);Ws=s(Gt,"This is the configuration class to store the configuration of a "),Ct=n(Gt,"A",{href:!0});var ci=i(Ct);Is=s(ci,"Speech2Text2ForCausalLM"),ci.forEach(o),Vs=s(Gt,`. It is used to
instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Ue=n(Gt,"A",{href:!0,rel:!0});var li=i(Ue);Ns=s(li,"facebook/s2t-wav2vec2-large-en-de"),li.forEach(o),Os=s(Gt," architecture."),Gt.forEach(o),Us=d(Se),oe=n(Se,"P",{});var Kt=i(oe);Rs=s(Kt,"Configuration objects inherit from "),qt=n(Kt,"A",{href:!0});var di=i(qt);Hs=s(di,"PretrainedConfig"),di.forEach(o),Bs=s(Kt,` and can be used to control the model outputs. Read the
documentation from `),Ft=n(Kt,"A",{href:!0});var pi=i(Ft);Js=s(pi,"PretrainedConfig"),pi.forEach(o),Gs=s(Kt," for more information."),Kt.forEach(o),Ks=d(Se),v(pe.$$.fragment,Se),Se.forEach(o),Go=d(t),re=n(t,"H2",{class:!0});var pr=i(re);he=n(pr,"A",{id:!0,class:!0,href:!0});var hi=i(he);ho=n(hi,"SPAN",{});var mi=i(ho);v(Re.$$.fragment,mi),mi.forEach(o),hi.forEach(o),Qs=d(pr),mo=n(pr,"SPAN",{});var fi=i(mo);Xs=s(fi,"Speech2TextTokenizer"),fi.forEach(o),pr.forEach(o),Ko=d(t),P=n(t,"DIV",{class:!0});var O=i(P);v(He.$$.fragment,O),Ys=d(O),fo=n(O,"P",{});var ui=i(fo);Zs=s(ui,"Constructs a Speech2Text2Tokenizer."),ui.forEach(o),ea=d(O),Be=n(O,"P",{});var hr=i(Be);ta=s(hr,"This tokenizer inherits from "),Mt=n(hr,"A",{href:!0});var _i=i(Mt);oa=s(_i,"PreTrainedTokenizer"),_i.forEach(o),ra=s(hr,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),hr.forEach(o),sa=d(O),me=n(O,"DIV",{class:!0});var mr=i(me);v(Je.$$.fragment,mr),aa=d(mr),uo=n(mr,"P",{});var gi=i(uo);na=s(gi,"Convert a list of lists of token ids into a list of strings by calling decode."),gi.forEach(o),mr.forEach(o),ia=d(O),Q=n(O,"DIV",{class:!0});var Qt=i(Q);v(Ge.$$.fragment,Qt),ca=d(Qt),_o=n(Qt,"P",{});var vi=i(_o);la=s(vi,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),vi.forEach(o),da=d(Qt),Ke=n(Qt,"P",{});var fr=i(Ke);pa=s(fr,"Similar to doing "),go=n(fr,"CODE",{});var Ti=i(go);ha=s(Ti,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Ti.forEach(o),ma=s(fr,"."),fr.forEach(o),Qt.forEach(o),fa=d(O),At=n(O,"DIV",{class:!0});var xi=i(At);v(Qe.$$.fragment,xi),xi.forEach(o),O.forEach(o),Qo=d(t),se=n(t,"H2",{class:!0});var ur=i(se);fe=n(ur,"A",{id:!0,class:!0,href:!0});var ki=i(fe);vo=n(ki,"SPAN",{});var bi=i(vo);v(Xe.$$.fragment,bi),bi.forEach(o),ki.forEach(o),ua=d(ur),To=n(ur,"SPAN",{});var Si=i(To);_a=s(Si,"Speech2Text2Processor"),Si.forEach(o),ur.forEach(o),Xo=d(t),y=n(t,"DIV",{class:!0});var C=i(y);v(Ye.$$.fragment,C),ga=d(C),xo=n(C,"P",{});var wi=i(xo);va=s(wi,`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),wi.forEach(o),Ta=d(C),A=n(C,"P",{});var H=i(A);Lt=n(H,"A",{href:!0});var $i=i(Lt);xa=s($i,"Speech2Text2Processor"),$i.forEach(o),ka=s(H," offers all the functionalities of "),Dt=n(H,"A",{href:!0});var yi=i(Dt);ba=s(yi,"AutoFeatureExtractor"),yi.forEach(o),Sa=s(H," and "),Wt=n(H,"A",{href:!0});var Ei=i(Wt);wa=s(Ei,"Speech2Text2Tokenizer"),Ei.forEach(o),$a=s(H,`.
See the `),Ze=n(H,"A",{href:!0});var wn=i(Ze);ko=n(wn,"STRONG",{});var zi=i(ko);ya=s(zi,"call"),zi.forEach(o),Ea=s(wn,"()"),wn.forEach(o),za=s(H," and "),It=n(H,"A",{href:!0});var Pi=i(It);Pa=s(Pi,"decode()"),Pi.forEach(o),ja=s(H," for more information."),H.forEach(o),Ca=d(C),ue=n(C,"DIV",{class:!0});var _r=i(ue);v(et.$$.fragment,_r),qa=d(_r),U=n(_r,"P",{});var we=i(U);Fa=s(we,`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),bo=n(we,"CODE",{});var ji=i(bo);Ma=s(ji,"__call__()"),ji.forEach(o),Aa=s(we,` and returns its output. If used in the context
`),So=n(we,"CODE",{});var Ci=i(So);La=s(Ci,"as_target_processor()"),Ci.forEach(o),Da=s(we,` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),tt=n(we,"A",{href:!0});var $n=i(tt);wo=n($n,"STRONG",{});var qi=i(wo);Wa=s(qi,"call"),qi.forEach(o),Ia=s($n,"()"),$n.forEach(o),Va=s(we,`. Please refer to the doctsring of the above two
methods for more information.`),we.forEach(o),_r.forEach(o),Na=d(C),X=n(C,"DIV",{class:!0});var Xt=i(X);v(ot.$$.fragment,Xt),Oa=d(Xt),$o=n(Xt,"P",{});var Fi=i($o);Ua=s(Fi,"Instantiate a processor associated with a pretrained model."),Fi.forEach(o),Ra=d(Xt),v(_e.$$.fragment,Xt),Xt.forEach(o),Ha=d(C),Y=n(C,"DIV",{class:!0});var Yt=i(Y);v(rt.$$.fragment,Yt),Ba=d(Yt),st=n(Yt,"P",{});var gr=i(st);Ja=s(gr,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Vt=n(gr,"A",{href:!0});var Mi=i(Vt);Ga=s(Mi,"from_pretrained()"),Mi.forEach(o),Ka=s(gr," method."),gr.forEach(o),Qa=d(Yt),v(ge.$$.fragment,Yt),Yt.forEach(o),Xa=d(C),ve=n(C,"DIV",{class:!0});var vr=i(ve);v(at.$$.fragment,vr),Ya=d(vr),nt=n(vr,"P",{});var Tr=i(nt);Za=s(Tr,"This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Nt=n(Tr,"A",{href:!0});var Ai=i(Nt);en=s(Ai,"batch_decode()"),Ai.forEach(o),tn=s(Tr,`. Please
refer to the docstring of this method for more information.`),Tr.forEach(o),vr.forEach(o),on=d(C),Te=n(C,"DIV",{class:!0});var xr=i(Te);v(it.$$.fragment,xr),rn=d(xr),ct=n(xr,"P",{});var kr=i(ct);sn=s(kr,"This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Ot=n(kr,"A",{href:!0});var Li=i(Ot);an=s(Li,"decode()"),Li.forEach(o),nn=s(kr,`. Please refer
to the docstring of this method for more information.`),kr.forEach(o),xr.forEach(o),C.forEach(o),Yo=d(t),ae=n(t,"H2",{class:!0});var br=i(ae);xe=n(br,"A",{id:!0,class:!0,href:!0});var Di=i(xe);yo=n(Di,"SPAN",{});var Wi=i(yo);v(lt.$$.fragment,Wi),Wi.forEach(o),Di.forEach(o),cn=d(br),Eo=n(br,"SPAN",{});var Ii=i(Eo);ln=s(Ii,"Speech2Text2ForCausalLM"),Ii.forEach(o),br.forEach(o),Zo=d(t),I=n(t,"DIV",{class:!0});var $e=i(I);v(dt.$$.fragment,$e),dn=d($e),R=n($e,"P",{});var ye=i(R);pn=s(ye,"The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Ut=n(ye,"A",{href:!0});var Vi=i(Ut);hn=s(Vi,"EncoderDecoderModel"),Vi.forEach(o),mn=s(ye," and "),zo=n(ye,"CODE",{});var Ni=i(zo);fn=s(Ni,"SpeechEncoderDecoder"),Ni.forEach(o),un=s(ye,`.
This model inherits from `),Rt=n(ye,"A",{href:!0});var Oi=i(Rt);_n=s(Oi,"PreTrainedModel"),Oi.forEach(o),gn=s(ye,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ye.forEach(o),vn=d($e),pt=n($e,"P",{});var Sr=i(pt);Tn=s(Sr,"This model is also a PyTorch "),ht=n(Sr,"A",{href:!0,rel:!0});var Ui=i(ht);xn=s(Ui,"torch.nn.Module"),Ui.forEach(o),kn=s(Sr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sr.forEach(o),bn=d($e),ke=n($e,"DIV",{class:!0});var wr=i(ke);v(mt.$$.fragment,wr),Sn=d(wr),v(be.$$.fragment,wr),wr.forEach(o),$e.forEach(o),this.h()},h(){c(f,"name","hf:doc:metadata"),c(f,"content",JSON.stringify(rc)),c(_,"id","speech2text2"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#speech2text2"),c(u,"class","relative group"),c(M,"id","overview"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#overview"),c(F,"class","relative group"),c(_t,"href","wav2vec2"),c(ze,"href","https://arxiv.org/abs/2104.06678"),c(ze,"rel","nofollow"),c(gt,"href","wav2vec2"),c(vt,"href","hubert"),c(Tt,"href","speech-encoder-decoder"),c(Pe,"href","https://huggingface.co/patrickvonplaten"),c(Pe,"rel","nofollow"),c(je,"href","https://github.com/pytorch/fairseq/blob/1f7ef9ed1e1061f8c7f88f8b94c7186834398690/fairseq/models/wav2vec/wav2vec2_asr.py#L266"),c(je,"rel","nofollow"),c(qe,"href","https://huggingface.co/models?other=speech2text2"),c(qe,"rel","nofollow"),c(kt,"href","speech-encoder-decoder"),c(Ae,"href","https://github.com/glample/fastBPE"),c(Ae,"rel","nofollow"),c(ce,"id","inference"),c(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ce,"href","#inference"),c(Z,"class","relative group"),c(bt,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(St,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(wt,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),c($t,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),c(yt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),c(Et,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),c(zt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),c(Ve,"href","https://huggingface.co/models?filter=speech2text2"),c(Ve,"rel","nofollow"),c(de,"id","transformers.Speech2Text2Config"),c(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(de,"href","#transformers.Speech2Text2Config"),c(ee,"class","relative group"),c(Ct,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2ForCausalLM"),c(Ue,"href","https://huggingface.co/facebook/s2t-wav2vec2-large-en-de"),c(Ue,"rel","nofollow"),c(qt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ft,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"id","transformers.Speech2Text2Tokenizer"),c(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(he,"href","#transformers.Speech2Text2Tokenizer"),c(re,"class","relative group"),c(Mt,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(fe,"id","transformers.Speech2Text2Processor"),c(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fe,"href","#transformers.Speech2Text2Processor"),c(se,"class","relative group"),c(Lt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),c(Dt,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor"),c(Wt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),c(Ze,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.__call__"),c(It,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.decode"),c(tt,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),c(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Vt,"href","/docs/transformers/main/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Nt,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.batch_decode"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ot,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.decode"),c(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"id","transformers.Speech2Text2ForCausalLM"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#transformers.Speech2Text2ForCausalLM"),c(ae,"class","relative group"),c(Ut,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(Rt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ht,"rel","nofollow"),c(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,p){e(document.head,f),h(t,E,p),h(t,u,p),e(u,_),e(_,w),T(m,w,null),e(u,S),e(u,D),e(D,q),h(t,$,p),h(t,F,p),e(F,M),e(M,Zt),T(Ee,Zt,null),e(F,yr),e(F,eo),e(eo,Er),h(t,qo,p),h(t,J,p),e(J,zr),e(J,_t),e(_t,Pr),e(J,jr),e(J,ze),e(ze,Cr),e(J,qr),h(t,Fo,p),h(t,z,p),e(z,Fr),e(z,to),e(to,Mr),e(z,Ar),e(z,oo),e(oo,Lr),e(z,Dr),e(z,gt),e(gt,Wr),e(z,Ir),e(z,vt),e(vt,Vr),e(z,Nr),e(z,Tt),e(Tt,Or),e(z,Ur),e(z,ro),e(ro,Rr),e(z,Hr),h(t,Mo,p),h(t,ne,p),e(ne,Br),e(ne,Pe),e(Pe,Jr),e(ne,Gr),h(t,Ao,p),h(t,ie,p),e(ie,Kr),e(ie,je),e(je,Qr),e(ie,Xr),h(t,Lo,p),h(t,xt,p),e(xt,Yr),h(t,Do,p),h(t,G,p),e(G,Ce),e(Ce,Zr),e(Ce,qe),e(qe,es),e(Ce,ts),e(G,os),e(G,Fe),e(Fe,rs),e(Fe,kt),e(kt,ss),e(Fe,as),e(G,ns),e(G,Me),e(Me,is),e(Me,Ae),e(Ae,cs),e(Me,ls),h(t,Wo,p),h(t,Z,p),e(Z,ce),e(ce,so),T(Le,so,null),e(Z,ds),e(Z,ao),e(ao,ps),h(t,Io,p),h(t,K,p),e(K,hs),e(K,bt),e(bt,ms),e(K,fs),e(K,St),e(St,us),e(K,_s),h(t,Vo,p),h(t,j,p),e(j,gs),e(j,wt),e(wt,vs),e(j,Ts),e(j,$t),e($t,xs),e(j,ks),e(j,yt),e(yt,bs),e(j,Ss),e(j,Et),e(Et,ws),e(j,$s),e(j,zt),e(zt,ys),e(j,Es),h(t,No,p),h(t,Pt,p),e(Pt,no),e(no,zs),h(t,Oo,p),T(De,t,p),h(t,Uo,p),h(t,jt,p),e(jt,We),e(We,io),e(io,Ps),e(We,js),e(We,co),e(co,Cs),h(t,Ro,p),T(Ie,t,p),h(t,Ho,p),h(t,le,p),e(le,qs),e(le,Ve),e(Ve,Fs),e(le,Ms),h(t,Bo,p),h(t,ee,p),e(ee,de),e(de,lo),T(Ne,lo,null),e(ee,As),e(ee,po),e(po,Ls),h(t,Jo,p),h(t,W,p),T(Oe,W,null),e(W,Ds),e(W,te),e(te,Ws),e(te,Ct),e(Ct,Is),e(te,Vs),e(te,Ue),e(Ue,Ns),e(te,Os),e(W,Us),e(W,oe),e(oe,Rs),e(oe,qt),e(qt,Hs),e(oe,Bs),e(oe,Ft),e(Ft,Js),e(oe,Gs),e(W,Ks),T(pe,W,null),h(t,Go,p),h(t,re,p),e(re,he),e(he,ho),T(Re,ho,null),e(re,Qs),e(re,mo),e(mo,Xs),h(t,Ko,p),h(t,P,p),T(He,P,null),e(P,Ys),e(P,fo),e(fo,Zs),e(P,ea),e(P,Be),e(Be,ta),e(Be,Mt),e(Mt,oa),e(Be,ra),e(P,sa),e(P,me),T(Je,me,null),e(me,aa),e(me,uo),e(uo,na),e(P,ia),e(P,Q),T(Ge,Q,null),e(Q,ca),e(Q,_o),e(_o,la),e(Q,da),e(Q,Ke),e(Ke,pa),e(Ke,go),e(go,ha),e(Ke,ma),e(P,fa),e(P,At),T(Qe,At,null),h(t,Qo,p),h(t,se,p),e(se,fe),e(fe,vo),T(Xe,vo,null),e(se,ua),e(se,To),e(To,_a),h(t,Xo,p),h(t,y,p),T(Ye,y,null),e(y,ga),e(y,xo),e(xo,va),e(y,Ta),e(y,A),e(A,Lt),e(Lt,xa),e(A,ka),e(A,Dt),e(Dt,ba),e(A,Sa),e(A,Wt),e(Wt,wa),e(A,$a),e(A,Ze),e(Ze,ko),e(ko,ya),e(Ze,Ea),e(A,za),e(A,It),e(It,Pa),e(A,ja),e(y,Ca),e(y,ue),T(et,ue,null),e(ue,qa),e(ue,U),e(U,Fa),e(U,bo),e(bo,Ma),e(U,Aa),e(U,So),e(So,La),e(U,Da),e(U,tt),e(tt,wo),e(wo,Wa),e(tt,Ia),e(U,Va),e(y,Na),e(y,X),T(ot,X,null),e(X,Oa),e(X,$o),e($o,Ua),e(X,Ra),T(_e,X,null),e(y,Ha),e(y,Y),T(rt,Y,null),e(Y,Ba),e(Y,st),e(st,Ja),e(st,Vt),e(Vt,Ga),e(st,Ka),e(Y,Qa),T(ge,Y,null),e(y,Xa),e(y,ve),T(at,ve,null),e(ve,Ya),e(ve,nt),e(nt,Za),e(nt,Nt),e(Nt,en),e(nt,tn),e(y,on),e(y,Te),T(it,Te,null),e(Te,rn),e(Te,ct),e(ct,sn),e(ct,Ot),e(Ot,an),e(ct,nn),h(t,Yo,p),h(t,ae,p),e(ae,xe),e(xe,yo),T(lt,yo,null),e(ae,cn),e(ae,Eo),e(Eo,ln),h(t,Zo,p),h(t,I,p),T(dt,I,null),e(I,dn),e(I,R),e(R,pn),e(R,Ut),e(Ut,hn),e(R,mn),e(R,zo),e(zo,fn),e(R,un),e(R,Rt),e(Rt,_n),e(R,gn),e(I,vn),e(I,pt),e(pt,Tn),e(pt,ht),e(ht,xn),e(pt,kn),e(I,bn),e(I,ke),T(mt,ke,null),e(ke,Sn),T(be,ke,null),er=!0},p(t,[p]){const ft={};p&2&&(ft.$$scope={dirty:p,ctx:t}),pe.$set(ft);const Po={};p&2&&(Po.$$scope={dirty:p,ctx:t}),_e.$set(Po);const jo={};p&2&&(jo.$$scope={dirty:p,ctx:t}),ge.$set(jo);const Co={};p&2&&(Co.$$scope={dirty:p,ctx:t}),be.$set(Co)},i(t){er||(x(m.$$.fragment,t),x(Ee.$$.fragment,t),x(Le.$$.fragment,t),x(De.$$.fragment,t),x(Ie.$$.fragment,t),x(Ne.$$.fragment,t),x(Oe.$$.fragment,t),x(pe.$$.fragment,t),x(Re.$$.fragment,t),x(He.$$.fragment,t),x(Je.$$.fragment,t),x(Ge.$$.fragment,t),x(Qe.$$.fragment,t),x(Xe.$$.fragment,t),x(Ye.$$.fragment,t),x(et.$$.fragment,t),x(ot.$$.fragment,t),x(_e.$$.fragment,t),x(rt.$$.fragment,t),x(ge.$$.fragment,t),x(at.$$.fragment,t),x(it.$$.fragment,t),x(lt.$$.fragment,t),x(dt.$$.fragment,t),x(mt.$$.fragment,t),x(be.$$.fragment,t),er=!0)},o(t){k(m.$$.fragment,t),k(Ee.$$.fragment,t),k(Le.$$.fragment,t),k(De.$$.fragment,t),k(Ie.$$.fragment,t),k(Ne.$$.fragment,t),k(Oe.$$.fragment,t),k(pe.$$.fragment,t),k(Re.$$.fragment,t),k(He.$$.fragment,t),k(Je.$$.fragment,t),k(Ge.$$.fragment,t),k(Qe.$$.fragment,t),k(Xe.$$.fragment,t),k(Ye.$$.fragment,t),k(et.$$.fragment,t),k(ot.$$.fragment,t),k(_e.$$.fragment,t),k(rt.$$.fragment,t),k(ge.$$.fragment,t),k(at.$$.fragment,t),k(it.$$.fragment,t),k(lt.$$.fragment,t),k(dt.$$.fragment,t),k(mt.$$.fragment,t),k(be.$$.fragment,t),er=!1},d(t){o(f),t&&o(E),t&&o(u),b(m),t&&o($),t&&o(F),b(Ee),t&&o(qo),t&&o(J),t&&o(Fo),t&&o(z),t&&o(Mo),t&&o(ne),t&&o(Ao),t&&o(ie),t&&o(Lo),t&&o(xt),t&&o(Do),t&&o(G),t&&o(Wo),t&&o(Z),b(Le),t&&o(Io),t&&o(K),t&&o(Vo),t&&o(j),t&&o(No),t&&o(Pt),t&&o(Oo),b(De,t),t&&o(Uo),t&&o(jt),t&&o(Ro),b(Ie,t),t&&o(Ho),t&&o(le),t&&o(Bo),t&&o(ee),b(Ne),t&&o(Jo),t&&o(W),b(Oe),b(pe),t&&o(Go),t&&o(re),b(Re),t&&o(Ko),t&&o(P),b(He),b(Je),b(Ge),b(Qe),t&&o(Qo),t&&o(se),b(Xe),t&&o(Xo),t&&o(y),b(Ye),b(et),b(ot),b(_e),b(rt),b(ge),b(at),b(it),t&&o(Yo),t&&o(ae),b(lt),t&&o(Zo),t&&o(I),b(dt),b(mt),b(be)}}}const rc={local:"speech2text2",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2Text2Config",title:"Speech2Text2Config"},{local:"transformers.Speech2Text2Tokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2Text2Processor",title:"Speech2Text2Processor"},{local:"transformers.Speech2Text2ForCausalLM",title:"Speech2Text2ForCausalLM"}],title:"Speech2Text2"};function sc(B){return Xi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pc extends Ji{constructor(f){super();Gi(this,f,sc,oc,Ki,{})}}export{pc as default,rc as metadata};
