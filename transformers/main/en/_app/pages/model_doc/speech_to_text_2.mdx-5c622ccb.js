import{S as ic,i as cc,s as lc,e as r,k as l,w as f,t as s,M as dc,c as n,d as o,m as d,a as i,x as u,h as a,b as c,F as e,g as h,y as _,q as g,o as v,B as T,v as pc}from"../../chunks/vendor-6b77c823.js";import{T as nc}from"../../chunks/Tip-39098574.js";import{D as A}from"../../chunks/Docstring-abef54e3.js";import{C as Ps}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as _t}from"../../chunks/IconCopyLink-7a11ce68.js";function hc(gt){let m,W,x,E,L,S,O,D;return{c(){m=r("p"),W=s(`This class method is simply calling the feature extractor
`),x=r("a"),E=s("from_pretrained()"),L=s(` and the tokenizer
`),S=r("code"),O=s("from_pretrained"),D=s(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(P){m=n(P,"P",{});var b=i(m);W=a(b,`This class method is simply calling the feature extractor
`),x=n(b,"A",{href:!0});var j=i(x);E=a(j,"from_pretrained()"),j.forEach(o),L=a(b,` and the tokenizer
`),S=n(b,"CODE",{});var q=i(S);O=a(q,"from_pretrained"),q.forEach(o),D=a(b,` methods. Please refer to the docstrings of the
methods above for more information.`),b.forEach(o),this.h()},h(){c(x,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(P,b){h(P,m,b),e(m,W),e(m,x),e(x,E),e(m,L),e(m,S),e(S,O),e(m,D)},d(P){P&&o(m)}}}function mc(gt){let m,W,x,E,L,S,O,D;return{c(){m=r("p"),W=s("This class method is simply calling "),x=r("a"),E=s("save_pretrained()"),L=s(` and
`),S=r("code"),O=s("save_pretrained"),D=s(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(P){m=n(P,"P",{});var b=i(m);W=a(b,"This class method is simply calling "),x=n(b,"A",{href:!0});var j=i(x);E=a(j,"save_pretrained()"),j.forEach(o),L=a(b,` and
`),S=n(b,"CODE",{});var q=i(S);O=a(q,"save_pretrained"),q.forEach(o),D=a(b,`. Please refer to the docstrings of the methods
above for more information.`),b.forEach(o),this.h()},h(){c(x,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(P,b){h(P,m,b),e(m,W),e(m,x),e(x,E),e(m,L),e(m,S),e(S,O),e(m,D)},d(P){P&&o(m)}}}function fc(gt){let m,W,x,E,L,S,O,D,P,b,j,q,so,ye,js,ao,Cs,Lo,B,qs,vt,Fs,Ms,$e,As,Ls,Do,w,Ds,ro,Is,Ws,no,Vs,Ns,Tt,Os,Us,xt,Rs,Hs,kt,Bs,Js,io,Gs,Ks,Io,ie,Qs,Ee,Xs,Ys,Wo,ce,Zs,ze,ea,ta,Vo,bt,oa,No,J,Pe,sa,je,aa,ra,na,Ce,ia,St,ca,la,da,qe,pa,Fe,ha,ma,Oo,ee,le,co,Me,fa,lo,ua,Uo,G,_a,wt,ga,va,yt,Ta,xa,Ro,z,ka,$t,ba,Sa,Et,wa,ya,zt,$a,Ea,Pt,za,Pa,jt,ja,Ca,Ho,Ct,po,qa,Bo,Ae,Jo,qt,Le,ho,Fa,Ma,mo,Aa,Go,De,Ko,de,La,Ie,Da,Ia,Qo,te,pe,fo,We,Wa,uo,Va,Xo,C,Ve,Na,oe,Oa,Ft,Ua,Ra,Ne,Ha,Ba,Ja,se,Ga,Mt,Ka,Qa,At,Xa,Ya,Za,_o,er,tr,Oe,Yo,ae,he,go,Ue,or,vo,sr,Zo,$,Re,ar,To,rr,nr,He,ir,Lt,cr,lr,dr,me,Be,pr,xo,hr,mr,K,Je,fr,ko,ur,_r,Ge,gr,bo,vr,Tr,xr,Dt,Ke,es,re,fe,So,Qe,kr,wo,br,ts,k,Xe,Sr,yo,wr,yr,F,It,$r,Er,Wt,zr,Pr,Vt,jr,Cr,Ye,$o,qr,Fr,Mr,Nt,Ar,Lr,Dr,ue,Ze,Ir,U,Wr,Eo,Vr,Nr,Ot,Or,Ur,et,zo,Rr,Hr,Br,Jr,Q,tt,Gr,Po,Kr,Qr,_e,Xr,X,ot,Yr,st,Zr,Ut,en,tn,on,ge,sn,ve,at,an,rt,rn,Rt,nn,cn,ln,Te,nt,dn,it,pn,Ht,hn,mn,fn,xe,ct,un,jo,_n,os,ne,ke,Co,lt,gn,qo,vn,ss,I,dt,Tn,R,xn,Bt,kn,bn,Fo,Sn,wn,Jt,yn,$n,En,pt,zn,ht,Pn,jn,Cn,Y,mt,qn,Mo,Fn,Mn,ft,as;return S=new _t({}),ye=new _t({}),Me=new _t({}),Ae=new Ps({props:{code:`import torch
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

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),De=new Ps({props:{code:`from datasets import load_dataset
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

<span class="hljs-meta">&gt;&gt;&gt; </span>translation_de = asr(librispeech_en[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;file&quot;</span>])`}}),We=new _t({}),Ve=new A({props:{name:"class transformers.Speech2Text2Config",anchor:"transformers.Speech2Text2Config",parameters:[{name:"vocab_size",val:" = 10000"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/configuration_speech_to_text_2.py#L29",parametersDescription:[{anchor:"transformers.Speech2Text2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
just in case (e.g., 512 or 1024 or 2048).`,name:"max_source_positions"}]}}),Oe=new Ps({props:{code:`from transformers import Speech2Text2ForCausalLM, Speech2Text2Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Ue=new _t({}),Re=new A({props:{name:"class transformers.Speech2Text2Tokenizer",anchor:"transformers.Speech2Text2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_lower_case",val:" = False"},{name:"merges_file",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/tokenization_speech_to_text_2.py#L67",parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Speech2Text2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Speech2Text2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Speech2Text2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Speech2Text2Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.</p>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}]}}),Be=new A({props:{name:"batch_decode",anchor:"transformers.Speech2Text2Tokenizer.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3242",parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],returnDescription:`
<p>The list of decoded sentences.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Je=new A({props:{name:"decode",anchor:"transformers.Speech2Text2Tokenizer.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3275",parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.Speech2Text2Tokenizer.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Speech2Text2Tokenizer.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Speech2Text2Tokenizer.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],returnDescription:`
<p>The decoded sentence.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ke=new A({props:{name:"save_vocabulary",anchor:"transformers.Speech2Text2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/tokenization_speech_to_text_2.py#L235"}}),Qe=new _t({}),Xe=new A({props:{name:"class transformers.Speech2Text2Processor",anchor:"transformers.Speech2Text2Processor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L23",parametersDescription:[{anchor:"transformers.Speech2Text2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>AutoFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2Text2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2Text2Tokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer">Speech2Text2Tokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}]}}),Ze=new A({props:{name:"__call__",anchor:"transformers.Speech2Text2Processor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L44"}}),tt=new A({props:{name:"from_pretrained",anchor:"transformers.Speech2Text2Processor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L156",parametersDescription:[{anchor:"transformers.Speech2Text2Processor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
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
</ul>`,name:"pretrained_model_name_or_path"}]}}),_e=new nc({props:{$$slots:{default:[hc]},$$scope:{ctx:gt}}}),ot=new A({props:{name:"save_pretrained",anchor:"transformers.Speech2Text2Processor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L94",parametersDescription:[{anchor:"transformers.Speech2Text2Processor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Speech2Text2Processor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}]}}),ge=new nc({props:{$$slots:{default:[mc]},$$scope:{ctx:gt}}}),at=new A({props:{name:"batch_decode",anchor:"transformers.Speech2Text2Processor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L54"}}),nt=new A({props:{name:"decode",anchor:"transformers.Speech2Text2Processor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L61"}}),ct=new A({props:{name:"as_target_processor",anchor:"transformers.Speech2Text2Processor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L68"}}),lt=new _t({}),dt=new A({props:{name:"class transformers.Speech2Text2ForCausalLM",anchor:"transformers.Speech2Text2ForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L741",parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Config">Speech2Text2Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),mt=new A({props:{name:"forward",anchor:"transformers.Speech2Text2ForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L772",parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),ft=new Ps({props:{code:`from transformers import (
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){m=r("meta"),W=l(),x=r("h1"),E=r("a"),L=r("span"),f(S.$$.fragment),O=l(),D=r("span"),P=s("Speech2Text2"),b=l(),j=r("h2"),q=r("a"),so=r("span"),f(ye.$$.fragment),js=l(),ao=r("span"),Cs=s("Overview"),Lo=l(),B=r("p"),qs=s("The Speech2Text2 model is used together with "),vt=r("a"),Fs=s("Wav2Vec2"),Ms=s(` for Speech Translation models proposed in
`),$e=r("a"),As=s("Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),Ls=s(` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Do=l(),w=r("p"),Ds=s("Speech2Text2 is a "),ro=r("em"),Is=s("decoder-only"),Ws=s(" transformer model that can be used with any speech "),no=r("em"),Vs=s("encoder-only"),Ns=s(`, such as
`),Tt=r("a"),Os=s("Wav2Vec2"),Us=s(" or "),xt=r("a"),Rs=s("HuBERT"),Hs=s(` for Speech-to-Text tasks. Please refer to the
`),kt=r("a"),Bs=s("SpeechEncoderDecoder"),Js=s(" class on how to combine Speech2Text2 with any speech "),io=r("em"),Gs=s("encoder-only"),Ks=s(`
model.`),Io=l(),ie=r("p"),Qs=s("This model was contributed by "),Ee=r("a"),Xs=s("Patrick von Platen"),Ys=s("."),Wo=l(),ce=r("p"),Zs=s("The original code can be found "),ze=r("a"),ea=s("here"),ta=s("."),Vo=l(),bt=r("p"),oa=s("Tips:"),No=l(),J=r("ul"),Pe=r("li"),sa=s(`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),je=r("a"),aa=s("official models"),ra=s(" ."),na=l(),Ce=r("li"),ia=s("Speech2Text2 is always used within the "),St=r("a"),ca=s("SpeechEncoderDecoder"),la=s(" framework."),da=l(),qe=r("li"),pa=s("Speech2Text2\u2019s tokenizer is based on "),Fe=r("a"),ha=s("fastBPE"),ma=s("."),Oo=l(),ee=r("h2"),le=r("a"),co=r("span"),f(Me.$$.fragment),fa=l(),lo=r("span"),ua=s("Inference"),Uo=l(),G=r("p"),_a=s("Speech2Text2\u2019s "),wt=r("a"),ga=s("SpeechEncoderDecoderModel"),va=s(` model accepts raw waveform input values from speech and
makes use of `),yt=r("a"),Ta=s("generate()"),xa=s(` to translate the input speech
autoregressively to the target language.`),Ro=l(),z=r("p"),ka=s("The "),$t=r("a"),ba=s("Wav2Vec2FeatureExtractor"),Sa=s(` class is responsible for preprocessing the input speech and
`),Et=r("a"),wa=s("Speech2Text2Tokenizer"),ya=s(` decodes the generated target tokens to the target string. The
`),zt=r("a"),$a=s("Speech2Text2Processor"),Ea=s(" wraps "),Pt=r("a"),za=s("Wav2Vec2FeatureExtractor"),Pa=s(` and
`),jt=r("a"),ja=s("Speech2Text2Tokenizer"),Ca=s(` into a single instance to both extract the input features and decode the
predicted token ids.`),Ho=l(),Ct=r("ul"),po=r("li"),qa=s("Step-by-step Speech Translation"),Bo=l(),f(Ae.$$.fragment),Jo=l(),qt=r("ul"),Le=r("li"),ho=r("p"),Fa=s("Speech Translation via Pipelines"),Ma=l(),mo=r("p"),Aa=s("The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),Go=l(),f(De.$$.fragment),Ko=l(),de=r("p"),La=s("See "),Ie=r("a"),Da=s("model hub"),Ia=s(" to look for Speech2Text2 checkpoints."),Qo=l(),te=r("h2"),pe=r("a"),fo=r("span"),f(We.$$.fragment),Wa=l(),uo=r("span"),Va=s("Speech2Text2Config"),Xo=l(),C=r("div"),f(Ve.$$.fragment),Na=l(),oe=r("p"),Oa=s("This is the configuration class to store the configuration of a "),Ft=r("a"),Ua=s("Speech2Text2ForCausalLM"),Ra=s(`. It is used to
instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Ne=r("a"),Ha=s("facebook/s2t-small-librispeech-asr"),Ba=s(" architecture."),Ja=l(),se=r("p"),Ga=s("Configuration objects inherit from "),Mt=r("a"),Ka=s("PretrainedConfig"),Qa=s(` and can be used to control the model outputs. Read the
documentation from `),At=r("a"),Xa=s("PretrainedConfig"),Ya=s(" for more information."),Za=l(),_o=r("p"),er=s("Example:"),tr=l(),f(Oe.$$.fragment),Yo=l(),ae=r("h2"),he=r("a"),go=r("span"),f(Ue.$$.fragment),or=l(),vo=r("span"),sr=s("Speech2TextTokenizer"),Zo=l(),$=r("div"),f(Re.$$.fragment),ar=l(),To=r("p"),rr=s("Constructs a Speech2Text2Tokenizer."),nr=l(),He=r("p"),ir=s("This tokenizer inherits from "),Lt=r("a"),cr=s("PreTrainedTokenizer"),lr=s(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),dr=l(),me=r("div"),f(Be.$$.fragment),pr=l(),xo=r("p"),hr=s("Convert a list of lists of token ids into a list of strings by calling decode."),mr=l(),K=r("div"),f(Je.$$.fragment),fr=l(),ko=r("p"),ur=s(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),_r=l(),Ge=r("p"),gr=s("Similar to doing "),bo=r("code"),vr=s("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Tr=s("."),xr=l(),Dt=r("div"),f(Ke.$$.fragment),es=l(),re=r("h2"),fe=r("a"),So=r("span"),f(Qe.$$.fragment),kr=l(),wo=r("span"),br=s("Speech2Text2Processor"),ts=l(),k=r("div"),f(Xe.$$.fragment),Sr=l(),yo=r("p"),wr=s(`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),yr=l(),F=r("p"),It=r("a"),$r=s("Speech2Text2Processor"),Er=s(" offers all the functionalities of "),Wt=r("a"),zr=s("AutoFeatureExtractor"),Pr=s(" and "),Vt=r("a"),jr=s("Speech2Text2Tokenizer"),Cr=s(`.
See the `),Ye=r("a"),$o=r("strong"),qr=s("call"),Fr=s("()"),Mr=s(" and "),Nt=r("a"),Ar=s("decode()"),Lr=s(" for more information."),Dr=l(),ue=r("div"),f(Ze.$$.fragment),Ir=l(),U=r("p"),Wr=s(`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),Eo=r("code"),Vr=s("__call__()"),Nr=s(` and returns its output. If used in the context
`),Ot=r("a"),Or=s("as_target_processor()"),Ur=s(` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),et=r("a"),zo=r("strong"),Rr=s("call"),Hr=s("()"),Br=s(`. Please refer to the doctsring of the above two
methods for more information.`),Jr=l(),Q=r("div"),f(tt.$$.fragment),Gr=l(),Po=r("p"),Kr=s("Instantiate a processor associated with a pretrained model."),Qr=l(),f(_e.$$.fragment),Xr=l(),X=r("div"),f(ot.$$.fragment),Yr=l(),st=r("p"),Zr=s(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Ut=r("a"),en=s("from_pretrained()"),tn=s(" method."),on=l(),f(ge.$$.fragment),sn=l(),ve=r("div"),f(at.$$.fragment),an=l(),rt=r("p"),rn=s("This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Rt=r("a"),nn=s("batch_decode()"),cn=s(`. Please
refer to the docstring of this method for more information.`),ln=l(),Te=r("div"),f(nt.$$.fragment),dn=l(),it=r("p"),pn=s("This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Ht=r("a"),hn=s("decode()"),mn=s(`. Please refer
to the docstring of this method for more information.`),fn=l(),xe=r("div"),f(ct.$$.fragment),un=l(),jo=r("p"),_n=s(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text2.`),os=l(),ne=r("h2"),ke=r("a"),Co=r("span"),f(lt.$$.fragment),gn=l(),qo=r("span"),vn=s("Speech2Text2ForCausalLM"),ss=l(),I=r("div"),f(dt.$$.fragment),Tn=l(),R=r("p"),xn=s("The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Bt=r("a"),kn=s("EncoderDecoderModel"),bn=s(" and "),Fo=r("code"),Sn=s("SpeechEncoderDecoder"),wn=s(`.
This model inherits from `),Jt=r("a"),yn=s("PreTrainedModel"),$n=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),En=l(),pt=r("p"),zn=s("This model is also a PyTorch "),ht=r("a"),Pn=s("torch.nn.Module"),jn=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cn=l(),Y=r("div"),f(mt.$$.fragment),qn=l(),Mo=r("p"),Fn=s("Example:"),Mn=l(),f(ft.$$.fragment),this.h()},l(t){const p=dc('[data-svelte="svelte-1phssyn"]',document.head);m=n(p,"META",{name:!0,content:!0}),p.forEach(o),W=d(t),x=n(t,"H1",{class:!0});var ut=i(x);E=n(ut,"A",{id:!0,class:!0,href:!0});var Ao=i(E);L=n(Ao,"SPAN",{});var Dn=i(L);u(S.$$.fragment,Dn),Dn.forEach(o),Ao.forEach(o),O=d(ut),D=n(ut,"SPAN",{});var In=i(D);P=a(In,"Speech2Text2"),In.forEach(o),ut.forEach(o),b=d(t),j=n(t,"H2",{class:!0});var rs=i(j);q=n(rs,"A",{id:!0,class:!0,href:!0});var Wn=i(q);so=n(Wn,"SPAN",{});var Vn=i(so);u(ye.$$.fragment,Vn),Vn.forEach(o),Wn.forEach(o),js=d(rs),ao=n(rs,"SPAN",{});var Nn=i(ao);Cs=a(Nn,"Overview"),Nn.forEach(o),rs.forEach(o),Lo=d(t),B=n(t,"P",{});var Gt=i(B);qs=a(Gt,"The Speech2Text2 model is used together with "),vt=n(Gt,"A",{href:!0});var On=i(vt);Fs=a(On,"Wav2Vec2"),On.forEach(o),Ms=a(Gt,` for Speech Translation models proposed in
`),$e=n(Gt,"A",{href:!0,rel:!0});var Un=i($e);As=a(Un,"Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),Un.forEach(o),Ls=a(Gt,` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Gt.forEach(o),Do=d(t),w=n(t,"P",{});var M=i(w);Ds=a(M,"Speech2Text2 is a "),ro=n(M,"EM",{});var Rn=i(ro);Is=a(Rn,"decoder-only"),Rn.forEach(o),Ws=a(M," transformer model that can be used with any speech "),no=n(M,"EM",{});var Hn=i(no);Vs=a(Hn,"encoder-only"),Hn.forEach(o),Ns=a(M,`, such as
`),Tt=n(M,"A",{href:!0});var Bn=i(Tt);Os=a(Bn,"Wav2Vec2"),Bn.forEach(o),Us=a(M," or "),xt=n(M,"A",{href:!0});var Jn=i(xt);Rs=a(Jn,"HuBERT"),Jn.forEach(o),Hs=a(M,` for Speech-to-Text tasks. Please refer to the
`),kt=n(M,"A",{href:!0});var Gn=i(kt);Bs=a(Gn,"SpeechEncoderDecoder"),Gn.forEach(o),Js=a(M," class on how to combine Speech2Text2 with any speech "),io=n(M,"EM",{});var Kn=i(io);Gs=a(Kn,"encoder-only"),Kn.forEach(o),Ks=a(M,`
model.`),M.forEach(o),Io=d(t),ie=n(t,"P",{});var ns=i(ie);Qs=a(ns,"This model was contributed by "),Ee=n(ns,"A",{href:!0,rel:!0});var Qn=i(Ee);Xs=a(Qn,"Patrick von Platen"),Qn.forEach(o),Ys=a(ns,"."),ns.forEach(o),Wo=d(t),ce=n(t,"P",{});var is=i(ce);Zs=a(is,"The original code can be found "),ze=n(is,"A",{href:!0,rel:!0});var Xn=i(ze);ea=a(Xn,"here"),Xn.forEach(o),ta=a(is,"."),is.forEach(o),Vo=d(t),bt=n(t,"P",{});var Yn=i(bt);oa=a(Yn,"Tips:"),Yn.forEach(o),No=d(t),J=n(t,"UL",{});var Kt=i(J);Pe=n(Kt,"LI",{});var cs=i(Pe);sa=a(cs,`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),je=n(cs,"A",{href:!0,rel:!0});var Zn=i(je);aa=a(Zn,"official models"),Zn.forEach(o),ra=a(cs," ."),cs.forEach(o),na=d(Kt),Ce=n(Kt,"LI",{});var ls=i(Ce);ia=a(ls,"Speech2Text2 is always used within the "),St=n(ls,"A",{href:!0});var ei=i(St);ca=a(ei,"SpeechEncoderDecoder"),ei.forEach(o),la=a(ls," framework."),ls.forEach(o),da=d(Kt),qe=n(Kt,"LI",{});var ds=i(qe);pa=a(ds,"Speech2Text2\u2019s tokenizer is based on "),Fe=n(ds,"A",{href:!0,rel:!0});var ti=i(Fe);ha=a(ti,"fastBPE"),ti.forEach(o),ma=a(ds,"."),ds.forEach(o),Kt.forEach(o),Oo=d(t),ee=n(t,"H2",{class:!0});var ps=i(ee);le=n(ps,"A",{id:!0,class:!0,href:!0});var oi=i(le);co=n(oi,"SPAN",{});var si=i(co);u(Me.$$.fragment,si),si.forEach(o),oi.forEach(o),fa=d(ps),lo=n(ps,"SPAN",{});var ai=i(lo);ua=a(ai,"Inference"),ai.forEach(o),ps.forEach(o),Uo=d(t),G=n(t,"P",{});var Qt=i(G);_a=a(Qt,"Speech2Text2\u2019s "),wt=n(Qt,"A",{href:!0});var ri=i(wt);ga=a(ri,"SpeechEncoderDecoderModel"),ri.forEach(o),va=a(Qt,` model accepts raw waveform input values from speech and
makes use of `),yt=n(Qt,"A",{href:!0});var ni=i(yt);Ta=a(ni,"generate()"),ni.forEach(o),xa=a(Qt,` to translate the input speech
autoregressively to the target language.`),Qt.forEach(o),Ro=d(t),z=n(t,"P",{});var V=i(z);ka=a(V,"The "),$t=n(V,"A",{href:!0});var ii=i($t);ba=a(ii,"Wav2Vec2FeatureExtractor"),ii.forEach(o),Sa=a(V,` class is responsible for preprocessing the input speech and
`),Et=n(V,"A",{href:!0});var ci=i(Et);wa=a(ci,"Speech2Text2Tokenizer"),ci.forEach(o),ya=a(V,` decodes the generated target tokens to the target string. The
`),zt=n(V,"A",{href:!0});var li=i(zt);$a=a(li,"Speech2Text2Processor"),li.forEach(o),Ea=a(V," wraps "),Pt=n(V,"A",{href:!0});var di=i(Pt);za=a(di,"Wav2Vec2FeatureExtractor"),di.forEach(o),Pa=a(V,` and
`),jt=n(V,"A",{href:!0});var pi=i(jt);ja=a(pi,"Speech2Text2Tokenizer"),pi.forEach(o),Ca=a(V,` into a single instance to both extract the input features and decode the
predicted token ids.`),V.forEach(o),Ho=d(t),Ct=n(t,"UL",{});var hi=i(Ct);po=n(hi,"LI",{});var mi=i(po);qa=a(mi,"Step-by-step Speech Translation"),mi.forEach(o),hi.forEach(o),Bo=d(t),u(Ae.$$.fragment,t),Jo=d(t),qt=n(t,"UL",{});var fi=i(qt);Le=n(fi,"LI",{});var hs=i(Le);ho=n(hs,"P",{});var ui=i(ho);Fa=a(ui,"Speech Translation via Pipelines"),ui.forEach(o),Ma=d(hs),mo=n(hs,"P",{});var _i=i(mo);Aa=a(_i,"The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),_i.forEach(o),hs.forEach(o),fi.forEach(o),Go=d(t),u(De.$$.fragment,t),Ko=d(t),de=n(t,"P",{});var ms=i(de);La=a(ms,"See "),Ie=n(ms,"A",{href:!0,rel:!0});var gi=i(Ie);Da=a(gi,"model hub"),gi.forEach(o),Ia=a(ms," to look for Speech2Text2 checkpoints."),ms.forEach(o),Qo=d(t),te=n(t,"H2",{class:!0});var fs=i(te);pe=n(fs,"A",{id:!0,class:!0,href:!0});var vi=i(pe);fo=n(vi,"SPAN",{});var Ti=i(fo);u(We.$$.fragment,Ti),Ti.forEach(o),vi.forEach(o),Wa=d(fs),uo=n(fs,"SPAN",{});var xi=i(uo);Va=a(xi,"Speech2Text2Config"),xi.forEach(o),fs.forEach(o),Xo=d(t),C=n(t,"DIV",{class:!0});var Z=i(C);u(Ve.$$.fragment,Z),Na=d(Z),oe=n(Z,"P",{});var Xt=i(oe);Oa=a(Xt,"This is the configuration class to store the configuration of a "),Ft=n(Xt,"A",{href:!0});var ki=i(Ft);Ua=a(ki,"Speech2Text2ForCausalLM"),ki.forEach(o),Ra=a(Xt,`. It is used to
instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Ne=n(Xt,"A",{href:!0,rel:!0});var bi=i(Ne);Ha=a(bi,"facebook/s2t-small-librispeech-asr"),bi.forEach(o),Ba=a(Xt," architecture."),Xt.forEach(o),Ja=d(Z),se=n(Z,"P",{});var Yt=i(se);Ga=a(Yt,"Configuration objects inherit from "),Mt=n(Yt,"A",{href:!0});var Si=i(Mt);Ka=a(Si,"PretrainedConfig"),Si.forEach(o),Qa=a(Yt,` and can be used to control the model outputs. Read the
documentation from `),At=n(Yt,"A",{href:!0});var wi=i(At);Xa=a(wi,"PretrainedConfig"),wi.forEach(o),Ya=a(Yt," for more information."),Yt.forEach(o),Za=d(Z),_o=n(Z,"P",{});var yi=i(_o);er=a(yi,"Example:"),yi.forEach(o),tr=d(Z),u(Oe.$$.fragment,Z),Z.forEach(o),Yo=d(t),ae=n(t,"H2",{class:!0});var us=i(ae);he=n(us,"A",{id:!0,class:!0,href:!0});var $i=i(he);go=n($i,"SPAN",{});var Ei=i(go);u(Ue.$$.fragment,Ei),Ei.forEach(o),$i.forEach(o),or=d(us),vo=n(us,"SPAN",{});var zi=i(vo);sr=a(zi,"Speech2TextTokenizer"),zi.forEach(o),us.forEach(o),Zo=d(t),$=n(t,"DIV",{class:!0});var N=i($);u(Re.$$.fragment,N),ar=d(N),To=n(N,"P",{});var Pi=i(To);rr=a(Pi,"Constructs a Speech2Text2Tokenizer."),Pi.forEach(o),nr=d(N),He=n(N,"P",{});var _s=i(He);ir=a(_s,"This tokenizer inherits from "),Lt=n(_s,"A",{href:!0});var ji=i(Lt);cr=a(ji,"PreTrainedTokenizer"),ji.forEach(o),lr=a(_s,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),_s.forEach(o),dr=d(N),me=n(N,"DIV",{class:!0});var gs=i(me);u(Be.$$.fragment,gs),pr=d(gs),xo=n(gs,"P",{});var Ci=i(xo);hr=a(Ci,"Convert a list of lists of token ids into a list of strings by calling decode."),Ci.forEach(o),gs.forEach(o),mr=d(N),K=n(N,"DIV",{class:!0});var Zt=i(K);u(Je.$$.fragment,Zt),fr=d(Zt),ko=n(Zt,"P",{});var qi=i(ko);ur=a(qi,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),qi.forEach(o),_r=d(Zt),Ge=n(Zt,"P",{});var vs=i(Ge);gr=a(vs,"Similar to doing "),bo=n(vs,"CODE",{});var Fi=i(bo);vr=a(Fi,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Fi.forEach(o),Tr=a(vs,"."),vs.forEach(o),Zt.forEach(o),xr=d(N),Dt=n(N,"DIV",{class:!0});var Mi=i(Dt);u(Ke.$$.fragment,Mi),Mi.forEach(o),N.forEach(o),es=d(t),re=n(t,"H2",{class:!0});var Ts=i(re);fe=n(Ts,"A",{id:!0,class:!0,href:!0});var Ai=i(fe);So=n(Ai,"SPAN",{});var Li=i(So);u(Qe.$$.fragment,Li),Li.forEach(o),Ai.forEach(o),kr=d(Ts),wo=n(Ts,"SPAN",{});var Di=i(wo);br=a(Di,"Speech2Text2Processor"),Di.forEach(o),Ts.forEach(o),ts=d(t),k=n(t,"DIV",{class:!0});var y=i(k);u(Xe.$$.fragment,y),Sr=d(y),yo=n(y,"P",{});var Ii=i(yo);wr=a(Ii,`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),Ii.forEach(o),yr=d(y),F=n(y,"P",{});var H=i(F);It=n(H,"A",{href:!0});var Wi=i(It);$r=a(Wi,"Speech2Text2Processor"),Wi.forEach(o),Er=a(H," offers all the functionalities of "),Wt=n(H,"A",{href:!0});var Vi=i(Wt);zr=a(Vi,"AutoFeatureExtractor"),Vi.forEach(o),Pr=a(H," and "),Vt=n(H,"A",{href:!0});var Ni=i(Vt);jr=a(Ni,"Speech2Text2Tokenizer"),Ni.forEach(o),Cr=a(H,`.
See the `),Ye=n(H,"A",{href:!0});var An=i(Ye);$o=n(An,"STRONG",{});var Oi=i($o);qr=a(Oi,"call"),Oi.forEach(o),Fr=a(An,"()"),An.forEach(o),Mr=a(H," and "),Nt=n(H,"A",{href:!0});var Ui=i(Nt);Ar=a(Ui,"decode()"),Ui.forEach(o),Lr=a(H," for more information."),H.forEach(o),Dr=d(y),ue=n(y,"DIV",{class:!0});var xs=i(ue);u(Ze.$$.fragment,xs),Ir=d(xs),U=n(xs,"P",{});var be=i(U);Wr=a(be,`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),Eo=n(be,"CODE",{});var Ri=i(Eo);Vr=a(Ri,"__call__()"),Ri.forEach(o),Nr=a(be,` and returns its output. If used in the context
`),Ot=n(be,"A",{href:!0});var Hi=i(Ot);Or=a(Hi,"as_target_processor()"),Hi.forEach(o),Ur=a(be,` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),et=n(be,"A",{href:!0});var Ln=i(et);zo=n(Ln,"STRONG",{});var Bi=i(zo);Rr=a(Bi,"call"),Bi.forEach(o),Hr=a(Ln,"()"),Ln.forEach(o),Br=a(be,`. Please refer to the doctsring of the above two
methods for more information.`),be.forEach(o),xs.forEach(o),Jr=d(y),Q=n(y,"DIV",{class:!0});var eo=i(Q);u(tt.$$.fragment,eo),Gr=d(eo),Po=n(eo,"P",{});var Ji=i(Po);Kr=a(Ji,"Instantiate a processor associated with a pretrained model."),Ji.forEach(o),Qr=d(eo),u(_e.$$.fragment,eo),eo.forEach(o),Xr=d(y),X=n(y,"DIV",{class:!0});var to=i(X);u(ot.$$.fragment,to),Yr=d(to),st=n(to,"P",{});var ks=i(st);Zr=a(ks,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Ut=n(ks,"A",{href:!0});var Gi=i(Ut);en=a(Gi,"from_pretrained()"),Gi.forEach(o),tn=a(ks," method."),ks.forEach(o),on=d(to),u(ge.$$.fragment,to),to.forEach(o),sn=d(y),ve=n(y,"DIV",{class:!0});var bs=i(ve);u(at.$$.fragment,bs),an=d(bs),rt=n(bs,"P",{});var Ss=i(rt);rn=a(Ss,"This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Rt=n(Ss,"A",{href:!0});var Ki=i(Rt);nn=a(Ki,"batch_decode()"),Ki.forEach(o),cn=a(Ss,`. Please
refer to the docstring of this method for more information.`),Ss.forEach(o),bs.forEach(o),ln=d(y),Te=n(y,"DIV",{class:!0});var ws=i(Te);u(nt.$$.fragment,ws),dn=d(ws),it=n(ws,"P",{});var ys=i(it);pn=a(ys,"This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Ht=n(ys,"A",{href:!0});var Qi=i(Ht);hn=a(Qi,"decode()"),Qi.forEach(o),mn=a(ys,`. Please refer
to the docstring of this method for more information.`),ys.forEach(o),ws.forEach(o),fn=d(y),xe=n(y,"DIV",{class:!0});var $s=i(xe);u(ct.$$.fragment,$s),un=d($s),jo=n($s,"P",{});var Xi=i(jo);_n=a(Xi,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text2.`),Xi.forEach(o),$s.forEach(o),y.forEach(o),os=d(t),ne=n(t,"H2",{class:!0});var Es=i(ne);ke=n(Es,"A",{id:!0,class:!0,href:!0});var Yi=i(ke);Co=n(Yi,"SPAN",{});var Zi=i(Co);u(lt.$$.fragment,Zi),Zi.forEach(o),Yi.forEach(o),gn=d(Es),qo=n(Es,"SPAN",{});var ec=i(qo);vn=a(ec,"Speech2Text2ForCausalLM"),ec.forEach(o),Es.forEach(o),ss=d(t),I=n(t,"DIV",{class:!0});var Se=i(I);u(dt.$$.fragment,Se),Tn=d(Se),R=n(Se,"P",{});var we=i(R);xn=a(we,"The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Bt=n(we,"A",{href:!0});var tc=i(Bt);kn=a(tc,"EncoderDecoderModel"),tc.forEach(o),bn=a(we," and "),Fo=n(we,"CODE",{});var oc=i(Fo);Sn=a(oc,"SpeechEncoderDecoder"),oc.forEach(o),wn=a(we,`.
This model inherits from `),Jt=n(we,"A",{href:!0});var sc=i(Jt);yn=a(sc,"PreTrainedModel"),sc.forEach(o),$n=a(we,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),we.forEach(o),En=d(Se),pt=n(Se,"P",{});var zs=i(pt);zn=a(zs,"This model is also a PyTorch "),ht=n(zs,"A",{href:!0,rel:!0});var ac=i(ht);Pn=a(ac,"torch.nn.Module"),ac.forEach(o),jn=a(zs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zs.forEach(o),Cn=d(Se),Y=n(Se,"DIV",{class:!0});var oo=i(Y);u(mt.$$.fragment,oo),qn=d(oo),Mo=n(oo,"P",{});var rc=i(Mo);Fn=a(rc,"Example:"),rc.forEach(o),Mn=d(oo),u(ft.$$.fragment,oo),oo.forEach(o),Se.forEach(o),this.h()},h(){c(m,"name","hf:doc:metadata"),c(m,"content",JSON.stringify(uc)),c(E,"id","speech2text2"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#speech2text2"),c(x,"class","relative group"),c(q,"id","overview"),c(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(q,"href","#overview"),c(j,"class","relative group"),c(vt,"href","wav2vec2"),c($e,"href","https://arxiv.org/abs/2104.06678"),c($e,"rel","nofollow"),c(Tt,"href","wav2vec2"),c(xt,"href","hubert"),c(kt,"href","speech-encoder-decoder"),c(Ee,"href","https://huggingface.co/patrickvonplaten"),c(Ee,"rel","nofollow"),c(ze,"href","https://github.com/pytorch/fairseq/blob/1f7ef9ed1e1061f8c7f88f8b94c7186834398690/fairseq/models/wav2vec/wav2vec2_asr.py#L266"),c(ze,"rel","nofollow"),c(je,"href","https://huggingface.co/models?other=speech2text2"),c(je,"rel","nofollow"),c(St,"href","speech-encoder-decoder"),c(Fe,"href","https://github.com/glample/fastBPE"),c(Fe,"rel","nofollow"),c(le,"id","inference"),c(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(le,"href","#inference"),c(ee,"class","relative group"),c(wt,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(yt,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c($t,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),c(Et,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),c(zt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),c(Pt,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),c(jt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),c(Ie,"href","https://huggingface.co/models?filter=speech2text2"),c(Ie,"rel","nofollow"),c(pe,"id","transformers.Speech2Text2Config"),c(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(pe,"href","#transformers.Speech2Text2Config"),c(te,"class","relative group"),c(Ft,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2ForCausalLM"),c(Ne,"href","https://huggingface.co/facebook/s2t-small-librispeech-asr"),c(Ne,"rel","nofollow"),c(Mt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(At,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(C,"class","docstring"),c(he,"id","transformers.Speech2Text2Tokenizer"),c(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(he,"href","#transformers.Speech2Text2Tokenizer"),c(ae,"class","relative group"),c(Lt,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(me,"class","docstring"),c(K,"class","docstring"),c(Dt,"class","docstring"),c($,"class","docstring"),c(fe,"id","transformers.Speech2Text2Processor"),c(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fe,"href","#transformers.Speech2Text2Processor"),c(re,"class","relative group"),c(It,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),c(Wt,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor"),c(Vt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),c(Ye,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.__call__"),c(Nt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.decode"),c(Ot,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.as_target_processor"),c(et,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),c(ue,"class","docstring"),c(Q,"class","docstring"),c(Ut,"href","/docs/transformers/main/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),c(X,"class","docstring"),c(Rt,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.batch_decode"),c(ve,"class","docstring"),c(Ht,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.decode"),c(Te,"class","docstring"),c(xe,"class","docstring"),c(k,"class","docstring"),c(ke,"id","transformers.Speech2Text2ForCausalLM"),c(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ke,"href","#transformers.Speech2Text2ForCausalLM"),c(ne,"class","relative group"),c(Bt,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(Jt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ht,"rel","nofollow"),c(Y,"class","docstring"),c(I,"class","docstring")},m(t,p){e(document.head,m),h(t,W,p),h(t,x,p),e(x,E),e(E,L),_(S,L,null),e(x,O),e(x,D),e(D,P),h(t,b,p),h(t,j,p),e(j,q),e(q,so),_(ye,so,null),e(j,js),e(j,ao),e(ao,Cs),h(t,Lo,p),h(t,B,p),e(B,qs),e(B,vt),e(vt,Fs),e(B,Ms),e(B,$e),e($e,As),e(B,Ls),h(t,Do,p),h(t,w,p),e(w,Ds),e(w,ro),e(ro,Is),e(w,Ws),e(w,no),e(no,Vs),e(w,Ns),e(w,Tt),e(Tt,Os),e(w,Us),e(w,xt),e(xt,Rs),e(w,Hs),e(w,kt),e(kt,Bs),e(w,Js),e(w,io),e(io,Gs),e(w,Ks),h(t,Io,p),h(t,ie,p),e(ie,Qs),e(ie,Ee),e(Ee,Xs),e(ie,Ys),h(t,Wo,p),h(t,ce,p),e(ce,Zs),e(ce,ze),e(ze,ea),e(ce,ta),h(t,Vo,p),h(t,bt,p),e(bt,oa),h(t,No,p),h(t,J,p),e(J,Pe),e(Pe,sa),e(Pe,je),e(je,aa),e(Pe,ra),e(J,na),e(J,Ce),e(Ce,ia),e(Ce,St),e(St,ca),e(Ce,la),e(J,da),e(J,qe),e(qe,pa),e(qe,Fe),e(Fe,ha),e(qe,ma),h(t,Oo,p),h(t,ee,p),e(ee,le),e(le,co),_(Me,co,null),e(ee,fa),e(ee,lo),e(lo,ua),h(t,Uo,p),h(t,G,p),e(G,_a),e(G,wt),e(wt,ga),e(G,va),e(G,yt),e(yt,Ta),e(G,xa),h(t,Ro,p),h(t,z,p),e(z,ka),e(z,$t),e($t,ba),e(z,Sa),e(z,Et),e(Et,wa),e(z,ya),e(z,zt),e(zt,$a),e(z,Ea),e(z,Pt),e(Pt,za),e(z,Pa),e(z,jt),e(jt,ja),e(z,Ca),h(t,Ho,p),h(t,Ct,p),e(Ct,po),e(po,qa),h(t,Bo,p),_(Ae,t,p),h(t,Jo,p),h(t,qt,p),e(qt,Le),e(Le,ho),e(ho,Fa),e(Le,Ma),e(Le,mo),e(mo,Aa),h(t,Go,p),_(De,t,p),h(t,Ko,p),h(t,de,p),e(de,La),e(de,Ie),e(Ie,Da),e(de,Ia),h(t,Qo,p),h(t,te,p),e(te,pe),e(pe,fo),_(We,fo,null),e(te,Wa),e(te,uo),e(uo,Va),h(t,Xo,p),h(t,C,p),_(Ve,C,null),e(C,Na),e(C,oe),e(oe,Oa),e(oe,Ft),e(Ft,Ua),e(oe,Ra),e(oe,Ne),e(Ne,Ha),e(oe,Ba),e(C,Ja),e(C,se),e(se,Ga),e(se,Mt),e(Mt,Ka),e(se,Qa),e(se,At),e(At,Xa),e(se,Ya),e(C,Za),e(C,_o),e(_o,er),e(C,tr),_(Oe,C,null),h(t,Yo,p),h(t,ae,p),e(ae,he),e(he,go),_(Ue,go,null),e(ae,or),e(ae,vo),e(vo,sr),h(t,Zo,p),h(t,$,p),_(Re,$,null),e($,ar),e($,To),e(To,rr),e($,nr),e($,He),e(He,ir),e(He,Lt),e(Lt,cr),e(He,lr),e($,dr),e($,me),_(Be,me,null),e(me,pr),e(me,xo),e(xo,hr),e($,mr),e($,K),_(Je,K,null),e(K,fr),e(K,ko),e(ko,ur),e(K,_r),e(K,Ge),e(Ge,gr),e(Ge,bo),e(bo,vr),e(Ge,Tr),e($,xr),e($,Dt),_(Ke,Dt,null),h(t,es,p),h(t,re,p),e(re,fe),e(fe,So),_(Qe,So,null),e(re,kr),e(re,wo),e(wo,br),h(t,ts,p),h(t,k,p),_(Xe,k,null),e(k,Sr),e(k,yo),e(yo,wr),e(k,yr),e(k,F),e(F,It),e(It,$r),e(F,Er),e(F,Wt),e(Wt,zr),e(F,Pr),e(F,Vt),e(Vt,jr),e(F,Cr),e(F,Ye),e(Ye,$o),e($o,qr),e(Ye,Fr),e(F,Mr),e(F,Nt),e(Nt,Ar),e(F,Lr),e(k,Dr),e(k,ue),_(Ze,ue,null),e(ue,Ir),e(ue,U),e(U,Wr),e(U,Eo),e(Eo,Vr),e(U,Nr),e(U,Ot),e(Ot,Or),e(U,Ur),e(U,et),e(et,zo),e(zo,Rr),e(et,Hr),e(U,Br),e(k,Jr),e(k,Q),_(tt,Q,null),e(Q,Gr),e(Q,Po),e(Po,Kr),e(Q,Qr),_(_e,Q,null),e(k,Xr),e(k,X),_(ot,X,null),e(X,Yr),e(X,st),e(st,Zr),e(st,Ut),e(Ut,en),e(st,tn),e(X,on),_(ge,X,null),e(k,sn),e(k,ve),_(at,ve,null),e(ve,an),e(ve,rt),e(rt,rn),e(rt,Rt),e(Rt,nn),e(rt,cn),e(k,ln),e(k,Te),_(nt,Te,null),e(Te,dn),e(Te,it),e(it,pn),e(it,Ht),e(Ht,hn),e(it,mn),e(k,fn),e(k,xe),_(ct,xe,null),e(xe,un),e(xe,jo),e(jo,_n),h(t,os,p),h(t,ne,p),e(ne,ke),e(ke,Co),_(lt,Co,null),e(ne,gn),e(ne,qo),e(qo,vn),h(t,ss,p),h(t,I,p),_(dt,I,null),e(I,Tn),e(I,R),e(R,xn),e(R,Bt),e(Bt,kn),e(R,bn),e(R,Fo),e(Fo,Sn),e(R,wn),e(R,Jt),e(Jt,yn),e(R,$n),e(I,En),e(I,pt),e(pt,zn),e(pt,ht),e(ht,Pn),e(pt,jn),e(I,Cn),e(I,Y),_(mt,Y,null),e(Y,qn),e(Y,Mo),e(Mo,Fn),e(Y,Mn),_(ft,Y,null),as=!0},p(t,[p]){const ut={};p&2&&(ut.$$scope={dirty:p,ctx:t}),_e.$set(ut);const Ao={};p&2&&(Ao.$$scope={dirty:p,ctx:t}),ge.$set(Ao)},i(t){as||(g(S.$$.fragment,t),g(ye.$$.fragment,t),g(Me.$$.fragment,t),g(Ae.$$.fragment,t),g(De.$$.fragment,t),g(We.$$.fragment,t),g(Ve.$$.fragment,t),g(Oe.$$.fragment,t),g(Ue.$$.fragment,t),g(Re.$$.fragment,t),g(Be.$$.fragment,t),g(Je.$$.fragment,t),g(Ke.$$.fragment,t),g(Qe.$$.fragment,t),g(Xe.$$.fragment,t),g(Ze.$$.fragment,t),g(tt.$$.fragment,t),g(_e.$$.fragment,t),g(ot.$$.fragment,t),g(ge.$$.fragment,t),g(at.$$.fragment,t),g(nt.$$.fragment,t),g(ct.$$.fragment,t),g(lt.$$.fragment,t),g(dt.$$.fragment,t),g(mt.$$.fragment,t),g(ft.$$.fragment,t),as=!0)},o(t){v(S.$$.fragment,t),v(ye.$$.fragment,t),v(Me.$$.fragment,t),v(Ae.$$.fragment,t),v(De.$$.fragment,t),v(We.$$.fragment,t),v(Ve.$$.fragment,t),v(Oe.$$.fragment,t),v(Ue.$$.fragment,t),v(Re.$$.fragment,t),v(Be.$$.fragment,t),v(Je.$$.fragment,t),v(Ke.$$.fragment,t),v(Qe.$$.fragment,t),v(Xe.$$.fragment,t),v(Ze.$$.fragment,t),v(tt.$$.fragment,t),v(_e.$$.fragment,t),v(ot.$$.fragment,t),v(ge.$$.fragment,t),v(at.$$.fragment,t),v(nt.$$.fragment,t),v(ct.$$.fragment,t),v(lt.$$.fragment,t),v(dt.$$.fragment,t),v(mt.$$.fragment,t),v(ft.$$.fragment,t),as=!1},d(t){o(m),t&&o(W),t&&o(x),T(S),t&&o(b),t&&o(j),T(ye),t&&o(Lo),t&&o(B),t&&o(Do),t&&o(w),t&&o(Io),t&&o(ie),t&&o(Wo),t&&o(ce),t&&o(Vo),t&&o(bt),t&&o(No),t&&o(J),t&&o(Oo),t&&o(ee),T(Me),t&&o(Uo),t&&o(G),t&&o(Ro),t&&o(z),t&&o(Ho),t&&o(Ct),t&&o(Bo),T(Ae,t),t&&o(Jo),t&&o(qt),t&&o(Go),T(De,t),t&&o(Ko),t&&o(de),t&&o(Qo),t&&o(te),T(We),t&&o(Xo),t&&o(C),T(Ve),T(Oe),t&&o(Yo),t&&o(ae),T(Ue),t&&o(Zo),t&&o($),T(Re),T(Be),T(Je),T(Ke),t&&o(es),t&&o(re),T(Qe),t&&o(ts),t&&o(k),T(Xe),T(Ze),T(tt),T(_e),T(ot),T(ge),T(at),T(nt),T(ct),t&&o(os),t&&o(ne),T(lt),t&&o(ss),t&&o(I),T(dt),T(mt),T(ft)}}}const uc={local:"speech2text2",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2Text2Config",title:"Speech2Text2Config"},{local:"transformers.Speech2Text2Tokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2Text2Processor",title:"Speech2Text2Processor"},{local:"transformers.Speech2Text2ForCausalLM",title:"Speech2Text2ForCausalLM"}],title:"Speech2Text2"};function _c(gt){return pc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bc extends ic{constructor(m){super();cc(this,m,_c,fc,lc,{})}}export{bc as default,uc as metadata};
