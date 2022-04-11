import{S as ci,i as ii,s as li,e as a,k as l,w as m,t as s,M as di,c as n,d as o,m as d,a as c,x as u,h as r,b as i,F as e,g as h,y as _,q as g,o as v,B as T,v as pi}from"../../chunks/vendor-6b77c823.js";import{T as ni}from"../../chunks/Tip-39098574.js";import{D as A}from"../../chunks/Docstring-af1d0ae0.js";import{C as Ps}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as _t}from"../../chunks/IconCopyLink-7a11ce68.js";function hi(gt){let f,I,x,E,L,S,O,D;return{c(){f=a("p"),I=s(`This class method is simply calling the feature extractor
`),x=a("a"),E=s("from_pretrained()"),L=s(` and the tokenizer
`),S=a("code"),O=s("from_pretrained"),D=s(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(P){f=n(P,"P",{});var b=c(f);I=r(b,`This class method is simply calling the feature extractor
`),x=n(b,"A",{href:!0});var j=c(x);E=r(j,"from_pretrained()"),j.forEach(o),L=r(b,` and the tokenizer
`),S=n(b,"CODE",{});var q=c(S);O=r(q,"from_pretrained"),q.forEach(o),D=r(b,` methods. Please refer to the docstrings of the
methods above for more information.`),b.forEach(o),this.h()},h(){i(x,"href","/docs/transformers/v4.18.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(P,b){h(P,f,b),e(f,I),e(f,x),e(x,E),e(f,L),e(f,S),e(S,O),e(f,D)},d(P){P&&o(f)}}}function fi(gt){let f,I,x,E,L,S,O,D;return{c(){f=a("p"),I=s("This class method is simply calling "),x=a("a"),E=s("save_pretrained()"),L=s(` and
`),S=a("code"),O=s("save_pretrained"),D=s(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(P){f=n(P,"P",{});var b=c(f);I=r(b,"This class method is simply calling "),x=n(b,"A",{href:!0});var j=c(x);E=r(j,"save_pretrained()"),j.forEach(o),L=r(b,` and
`),S=n(b,"CODE",{});var q=c(S);O=r(q,"save_pretrained"),q.forEach(o),D=r(b,`. Please refer to the docstrings of the methods
above for more information.`),b.forEach(o),this.h()},h(){i(x,"href","/docs/transformers/v4.18.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(P,b){h(P,f,b),e(f,I),e(f,x),e(x,E),e(f,L),e(f,S),e(S,O),e(f,D)},d(P){P&&o(f)}}}function mi(gt){let f,I,x,E,L,S,O,D,P,b,j,q,so,ye,js,ro,Cs,Lo,B,qs,vt,Fs,Ms,$e,As,Ls,Do,w,Ds,ao,Ws,Is,no,Vs,Ns,Tt,Os,Us,xt,Rs,Hs,kt,Bs,Js,co,Gs,Ks,Wo,ce,Qs,Ee,Xs,Ys,Io,ie,Zs,ze,er,tr,Vo,bt,or,No,J,Pe,sr,je,rr,ar,nr,Ce,cr,St,ir,lr,dr,qe,pr,Fe,hr,fr,Oo,ee,le,io,Me,mr,lo,ur,Uo,G,_r,wt,gr,vr,yt,Tr,xr,Ro,z,kr,$t,br,Sr,Et,wr,yr,zt,$r,Er,Pt,zr,Pr,jt,jr,Cr,Ho,Ct,po,qr,Bo,Ae,Jo,qt,Le,ho,Fr,Mr,fo,Ar,Go,De,Ko,de,Lr,We,Dr,Wr,Qo,te,pe,mo,Ie,Ir,uo,Vr,Xo,C,Ve,Nr,oe,Or,Ft,Ur,Rr,Ne,Hr,Br,Jr,se,Gr,Mt,Kr,Qr,At,Xr,Yr,Zr,_o,ea,ta,Oe,Yo,re,he,go,Ue,oa,vo,sa,Zo,$,Re,ra,To,aa,na,He,ca,Lt,ia,la,da,fe,Be,pa,xo,ha,fa,K,Je,ma,ko,ua,_a,Ge,ga,bo,va,Ta,xa,Dt,Ke,es,ae,me,So,Qe,ka,wo,ba,ts,k,Xe,Sa,yo,wa,ya,F,Wt,$a,Ea,It,za,Pa,Vt,ja,Ca,Ye,$o,qa,Fa,Ma,Nt,Aa,La,Da,ue,Ze,Wa,U,Ia,Eo,Va,Na,Ot,Oa,Ua,et,zo,Ra,Ha,Ba,Ja,Q,tt,Ga,Po,Ka,Qa,_e,Xa,X,ot,Ya,st,Za,Ut,en,tn,on,ge,sn,ve,rt,rn,at,an,Rt,nn,cn,ln,Te,nt,dn,ct,pn,Ht,hn,fn,mn,xe,it,un,jo,_n,os,ne,ke,Co,lt,gn,qo,vn,ss,W,dt,Tn,R,xn,Bt,kn,bn,Fo,Sn,wn,Jt,yn,$n,En,pt,zn,ht,Pn,jn,Cn,Y,ft,qn,Mo,Fn,Mn,mt,rs;return S=new _t({}),ye=new _t({}),Me=new _t({}),Ae=new Ps({props:{code:`import torch
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

<span class="hljs-meta">&gt;&gt;&gt; </span>translation_de = asr(librispeech_en[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;file&quot;</span>])`}}),Ie=new _t({}),Ve=new A({props:{name:"class transformers.Speech2Text2Config",anchor:"transformers.Speech2Text2Config",parameters:[{name:"vocab_size",val:" = 10000"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/configuration_speech_to_text_2.py#L29",parametersDescription:[{anchor:"transformers.Speech2Text2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Speech2Text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>`,name:"vocab_size"},{anchor:"transformers.Speech2Text2Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Ue=new _t({}),Re=new A({props:{name:"class transformers.Speech2Text2Tokenizer",anchor:"transformers.Speech2Text2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_lower_case",val:" = False"},{name:"merges_file",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/tokenization_speech_to_text_2.py#L67",parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Speech2Text2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Speech2Text2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Speech2Text2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Speech2Text2Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.</p>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}]}}),Be=new A({props:{name:"batch_decode",anchor:"transformers.Speech2Text2Tokenizer.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/tokenization_utils_base.py#L3242",parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],returnDescription:`
<p>The list of decoded sentences.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Je=new A({props:{name:"decode",anchor:"transformers.Speech2Text2Tokenizer.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/tokenization_utils_base.py#L3275",parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.Speech2Text2Tokenizer.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Speech2Text2Tokenizer.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Speech2Text2Tokenizer.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],returnDescription:`
<p>The decoded sentence.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ke=new A({props:{name:"save_vocabulary",anchor:"transformers.Speech2Text2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/tokenization_speech_to_text_2.py#L235"}}),Qe=new _t({}),Xe=new A({props:{name:"class transformers.Speech2Text2Processor",anchor:"transformers.Speech2Text2Processor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L23",parametersDescription:[{anchor:"transformers.Speech2Text2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>AutoFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.18.0/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2Text2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2Text2Tokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer">Speech2Text2Tokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}]}}),Ze=new A({props:{name:"__call__",anchor:"transformers.Speech2Text2Processor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L44"}}),tt=new A({props:{name:"from_pretrained",anchor:"transformers.Speech2Text2Processor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/processing_utils.py#L156",parametersDescription:[{anchor:"transformers.Speech2Text2Processor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/v4.18.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/v4.18.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}]}}),_e=new ni({props:{$$slots:{default:[hi]},$$scope:{ctx:gt}}}),ot=new A({props:{name:"save_pretrained",anchor:"transformers.Speech2Text2Processor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/processing_utils.py#L94",parametersDescription:[{anchor:"transformers.Speech2Text2Processor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Speech2Text2Processor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}]}}),ge=new ni({props:{$$slots:{default:[fi]},$$scope:{ctx:gt}}}),rt=new A({props:{name:"batch_decode",anchor:"transformers.Speech2Text2Processor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L54"}}),nt=new A({props:{name:"decode",anchor:"transformers.Speech2Text2Processor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L61"}}),it=new A({props:{name:"as_target_processor",anchor:"transformers.Speech2Text2Processor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L68"}}),lt=new _t({}),dt=new A({props:{name:"class transformers.Speech2Text2ForCausalLM",anchor:"transformers.Speech2Text2ForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L741",parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Config">Speech2Text2Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ft=new A({props:{name:"forward",anchor:"transformers.Speech2Text2ForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L772",parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer">Speech2Text2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Config"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mt=new Ps({props:{code:`from transformers import (
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){f=a("meta"),I=l(),x=a("h1"),E=a("a"),L=a("span"),m(S.$$.fragment),O=l(),D=a("span"),P=s("Speech2Text2"),b=l(),j=a("h2"),q=a("a"),so=a("span"),m(ye.$$.fragment),js=l(),ro=a("span"),Cs=s("Overview"),Lo=l(),B=a("p"),qs=s("The Speech2Text2 model is used together with "),vt=a("a"),Fs=s("Wav2Vec2"),Ms=s(` for Speech Translation models proposed in
`),$e=a("a"),As=s("Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),Ls=s(` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Do=l(),w=a("p"),Ds=s("Speech2Text2 is a "),ao=a("em"),Ws=s("decoder-only"),Is=s(" transformer model that can be used with any speech "),no=a("em"),Vs=s("encoder-only"),Ns=s(`, such as
`),Tt=a("a"),Os=s("Wav2Vec2"),Us=s(" or "),xt=a("a"),Rs=s("HuBERT"),Hs=s(` for Speech-to-Text tasks. Please refer to the
`),kt=a("a"),Bs=s("SpeechEncoderDecoder"),Js=s(" class on how to combine Speech2Text2 with any speech "),co=a("em"),Gs=s("encoder-only"),Ks=s(`
model.`),Wo=l(),ce=a("p"),Qs=s("This model was contributed by "),Ee=a("a"),Xs=s("Patrick von Platen"),Ys=s("."),Io=l(),ie=a("p"),Zs=s("The original code can be found "),ze=a("a"),er=s("here"),tr=s("."),Vo=l(),bt=a("p"),or=s("Tips:"),No=l(),J=a("ul"),Pe=a("li"),sr=s(`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),je=a("a"),rr=s("official models"),ar=s(" ."),nr=l(),Ce=a("li"),cr=s("Speech2Text2 is always used within the "),St=a("a"),ir=s("SpeechEncoderDecoder"),lr=s(" framework."),dr=l(),qe=a("li"),pr=s("Speech2Text2\u2019s tokenizer is based on "),Fe=a("a"),hr=s("fastBPE"),fr=s("."),Oo=l(),ee=a("h2"),le=a("a"),io=a("span"),m(Me.$$.fragment),mr=l(),lo=a("span"),ur=s("Inference"),Uo=l(),G=a("p"),_r=s("Speech2Text2\u2019s "),wt=a("a"),gr=s("SpeechEncoderDecoderModel"),vr=s(` model accepts raw waveform input values from speech and
makes use of `),yt=a("a"),Tr=s("generate()"),xr=s(` to translate the input speech
autoregressively to the target language.`),Ro=l(),z=a("p"),kr=s("The "),$t=a("a"),br=s("Wav2Vec2FeatureExtractor"),Sr=s(` class is responsible for preprocessing the input speech and
`),Et=a("a"),wr=s("Speech2Text2Tokenizer"),yr=s(` decodes the generated target tokens to the target string. The
`),zt=a("a"),$r=s("Speech2Text2Processor"),Er=s(" wraps "),Pt=a("a"),zr=s("Wav2Vec2FeatureExtractor"),Pr=s(` and
`),jt=a("a"),jr=s("Speech2Text2Tokenizer"),Cr=s(` into a single instance to both extract the input features and decode the
predicted token ids.`),Ho=l(),Ct=a("ul"),po=a("li"),qr=s("Step-by-step Speech Translation"),Bo=l(),m(Ae.$$.fragment),Jo=l(),qt=a("ul"),Le=a("li"),ho=a("p"),Fr=s("Speech Translation via Pipelines"),Mr=l(),fo=a("p"),Ar=s("The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),Go=l(),m(De.$$.fragment),Ko=l(),de=a("p"),Lr=s("See "),We=a("a"),Dr=s("model hub"),Wr=s(" to look for Speech2Text2 checkpoints."),Qo=l(),te=a("h2"),pe=a("a"),mo=a("span"),m(Ie.$$.fragment),Ir=l(),uo=a("span"),Vr=s("Speech2Text2Config"),Xo=l(),C=a("div"),m(Ve.$$.fragment),Nr=l(),oe=a("p"),Or=s("This is the configuration class to store the configuration of a "),Ft=a("a"),Ur=s("Speech2Text2ForCausalLM"),Rr=s(`. It is used to
instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Ne=a("a"),Hr=s("facebook/s2t-small-librispeech-asr"),Br=s(" architecture."),Jr=l(),se=a("p"),Gr=s("Configuration objects inherit from "),Mt=a("a"),Kr=s("PretrainedConfig"),Qr=s(` and can be used to control the model outputs. Read the
documentation from `),At=a("a"),Xr=s("PretrainedConfig"),Yr=s(" for more information."),Zr=l(),_o=a("p"),ea=s("Example:"),ta=l(),m(Oe.$$.fragment),Yo=l(),re=a("h2"),he=a("a"),go=a("span"),m(Ue.$$.fragment),oa=l(),vo=a("span"),sa=s("Speech2TextTokenizer"),Zo=l(),$=a("div"),m(Re.$$.fragment),ra=l(),To=a("p"),aa=s("Constructs a Speech2Text2Tokenizer."),na=l(),He=a("p"),ca=s("This tokenizer inherits from "),Lt=a("a"),ia=s("PreTrainedTokenizer"),la=s(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),da=l(),fe=a("div"),m(Be.$$.fragment),pa=l(),xo=a("p"),ha=s("Convert a list of lists of token ids into a list of strings by calling decode."),fa=l(),K=a("div"),m(Je.$$.fragment),ma=l(),ko=a("p"),ua=s(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),_a=l(),Ge=a("p"),ga=s("Similar to doing "),bo=a("code"),va=s("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Ta=s("."),xa=l(),Dt=a("div"),m(Ke.$$.fragment),es=l(),ae=a("h2"),me=a("a"),So=a("span"),m(Qe.$$.fragment),ka=l(),wo=a("span"),ba=s("Speech2Text2Processor"),ts=l(),k=a("div"),m(Xe.$$.fragment),Sa=l(),yo=a("p"),wa=s(`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),ya=l(),F=a("p"),Wt=a("a"),$a=s("Speech2Text2Processor"),Ea=s(" offers all the functionalities of "),It=a("a"),za=s("AutoFeatureExtractor"),Pa=s(" and "),Vt=a("a"),ja=s("Speech2Text2Tokenizer"),Ca=s(`.
See the `),Ye=a("a"),$o=a("strong"),qa=s("call"),Fa=s("()"),Ma=s(" and "),Nt=a("a"),Aa=s("decode()"),La=s(" for more information."),Da=l(),ue=a("div"),m(Ze.$$.fragment),Wa=l(),U=a("p"),Ia=s(`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),Eo=a("code"),Va=s("__call__()"),Na=s(` and returns its output. If used in the context
`),Ot=a("a"),Oa=s("as_target_processor()"),Ua=s(` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),et=a("a"),zo=a("strong"),Ra=s("call"),Ha=s("()"),Ba=s(`. Please refer to the doctsring of the above two
methods for more information.`),Ja=l(),Q=a("div"),m(tt.$$.fragment),Ga=l(),Po=a("p"),Ka=s("Instantiate a processor associated with a pretrained model."),Qa=l(),m(_e.$$.fragment),Xa=l(),X=a("div"),m(ot.$$.fragment),Ya=l(),st=a("p"),Za=s(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Ut=a("a"),en=s("from_pretrained()"),tn=s(" method."),on=l(),m(ge.$$.fragment),sn=l(),ve=a("div"),m(rt.$$.fragment),rn=l(),at=a("p"),an=s("This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Rt=a("a"),nn=s("batch_decode()"),cn=s(`. Please
refer to the docstring of this method for more information.`),ln=l(),Te=a("div"),m(nt.$$.fragment),dn=l(),ct=a("p"),pn=s("This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Ht=a("a"),hn=s("decode()"),fn=s(`. Please refer
to the docstring of this method for more information.`),mn=l(),xe=a("div"),m(it.$$.fragment),un=l(),jo=a("p"),_n=s(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text2.`),os=l(),ne=a("h2"),ke=a("a"),Co=a("span"),m(lt.$$.fragment),gn=l(),qo=a("span"),vn=s("Speech2Text2ForCausalLM"),ss=l(),W=a("div"),m(dt.$$.fragment),Tn=l(),R=a("p"),xn=s("The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Bt=a("a"),kn=s("EncoderDecoderModel"),bn=s(" and "),Fo=a("code"),Sn=s("SpeechEncoderDecoder"),wn=s(`.
This model inherits from `),Jt=a("a"),yn=s("PreTrainedModel"),$n=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),En=l(),pt=a("p"),zn=s("This model is also a PyTorch "),ht=a("a"),Pn=s("torch.nn.Module"),jn=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cn=l(),Y=a("div"),m(ft.$$.fragment),qn=l(),Mo=a("p"),Fn=s("Example:"),Mn=l(),m(mt.$$.fragment),this.h()},l(t){const p=di('[data-svelte="svelte-1phssyn"]',document.head);f=n(p,"META",{name:!0,content:!0}),p.forEach(o),I=d(t),x=n(t,"H1",{class:!0});var ut=c(x);E=n(ut,"A",{id:!0,class:!0,href:!0});var Ao=c(E);L=n(Ao,"SPAN",{});var Dn=c(L);u(S.$$.fragment,Dn),Dn.forEach(o),Ao.forEach(o),O=d(ut),D=n(ut,"SPAN",{});var Wn=c(D);P=r(Wn,"Speech2Text2"),Wn.forEach(o),ut.forEach(o),b=d(t),j=n(t,"H2",{class:!0});var as=c(j);q=n(as,"A",{id:!0,class:!0,href:!0});var In=c(q);so=n(In,"SPAN",{});var Vn=c(so);u(ye.$$.fragment,Vn),Vn.forEach(o),In.forEach(o),js=d(as),ro=n(as,"SPAN",{});var Nn=c(ro);Cs=r(Nn,"Overview"),Nn.forEach(o),as.forEach(o),Lo=d(t),B=n(t,"P",{});var Gt=c(B);qs=r(Gt,"The Speech2Text2 model is used together with "),vt=n(Gt,"A",{href:!0});var On=c(vt);Fs=r(On,"Wav2Vec2"),On.forEach(o),Ms=r(Gt,` for Speech Translation models proposed in
`),$e=n(Gt,"A",{href:!0,rel:!0});var Un=c($e);As=r(Un,"Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),Un.forEach(o),Ls=r(Gt,` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Gt.forEach(o),Do=d(t),w=n(t,"P",{});var M=c(w);Ds=r(M,"Speech2Text2 is a "),ao=n(M,"EM",{});var Rn=c(ao);Ws=r(Rn,"decoder-only"),Rn.forEach(o),Is=r(M," transformer model that can be used with any speech "),no=n(M,"EM",{});var Hn=c(no);Vs=r(Hn,"encoder-only"),Hn.forEach(o),Ns=r(M,`, such as
`),Tt=n(M,"A",{href:!0});var Bn=c(Tt);Os=r(Bn,"Wav2Vec2"),Bn.forEach(o),Us=r(M," or "),xt=n(M,"A",{href:!0});var Jn=c(xt);Rs=r(Jn,"HuBERT"),Jn.forEach(o),Hs=r(M,` for Speech-to-Text tasks. Please refer to the
`),kt=n(M,"A",{href:!0});var Gn=c(kt);Bs=r(Gn,"SpeechEncoderDecoder"),Gn.forEach(o),Js=r(M," class on how to combine Speech2Text2 with any speech "),co=n(M,"EM",{});var Kn=c(co);Gs=r(Kn,"encoder-only"),Kn.forEach(o),Ks=r(M,`
model.`),M.forEach(o),Wo=d(t),ce=n(t,"P",{});var ns=c(ce);Qs=r(ns,"This model was contributed by "),Ee=n(ns,"A",{href:!0,rel:!0});var Qn=c(Ee);Xs=r(Qn,"Patrick von Platen"),Qn.forEach(o),Ys=r(ns,"."),ns.forEach(o),Io=d(t),ie=n(t,"P",{});var cs=c(ie);Zs=r(cs,"The original code can be found "),ze=n(cs,"A",{href:!0,rel:!0});var Xn=c(ze);er=r(Xn,"here"),Xn.forEach(o),tr=r(cs,"."),cs.forEach(o),Vo=d(t),bt=n(t,"P",{});var Yn=c(bt);or=r(Yn,"Tips:"),Yn.forEach(o),No=d(t),J=n(t,"UL",{});var Kt=c(J);Pe=n(Kt,"LI",{});var is=c(Pe);sr=r(is,`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),je=n(is,"A",{href:!0,rel:!0});var Zn=c(je);rr=r(Zn,"official models"),Zn.forEach(o),ar=r(is," ."),is.forEach(o),nr=d(Kt),Ce=n(Kt,"LI",{});var ls=c(Ce);cr=r(ls,"Speech2Text2 is always used within the "),St=n(ls,"A",{href:!0});var ec=c(St);ir=r(ec,"SpeechEncoderDecoder"),ec.forEach(o),lr=r(ls," framework."),ls.forEach(o),dr=d(Kt),qe=n(Kt,"LI",{});var ds=c(qe);pr=r(ds,"Speech2Text2\u2019s tokenizer is based on "),Fe=n(ds,"A",{href:!0,rel:!0});var tc=c(Fe);hr=r(tc,"fastBPE"),tc.forEach(o),fr=r(ds,"."),ds.forEach(o),Kt.forEach(o),Oo=d(t),ee=n(t,"H2",{class:!0});var ps=c(ee);le=n(ps,"A",{id:!0,class:!0,href:!0});var oc=c(le);io=n(oc,"SPAN",{});var sc=c(io);u(Me.$$.fragment,sc),sc.forEach(o),oc.forEach(o),mr=d(ps),lo=n(ps,"SPAN",{});var rc=c(lo);ur=r(rc,"Inference"),rc.forEach(o),ps.forEach(o),Uo=d(t),G=n(t,"P",{});var Qt=c(G);_r=r(Qt,"Speech2Text2\u2019s "),wt=n(Qt,"A",{href:!0});var ac=c(wt);gr=r(ac,"SpeechEncoderDecoderModel"),ac.forEach(o),vr=r(Qt,` model accepts raw waveform input values from speech and
makes use of `),yt=n(Qt,"A",{href:!0});var nc=c(yt);Tr=r(nc,"generate()"),nc.forEach(o),xr=r(Qt,` to translate the input speech
autoregressively to the target language.`),Qt.forEach(o),Ro=d(t),z=n(t,"P",{});var V=c(z);kr=r(V,"The "),$t=n(V,"A",{href:!0});var cc=c($t);br=r(cc,"Wav2Vec2FeatureExtractor"),cc.forEach(o),Sr=r(V,` class is responsible for preprocessing the input speech and
`),Et=n(V,"A",{href:!0});var ic=c(Et);wr=r(ic,"Speech2Text2Tokenizer"),ic.forEach(o),yr=r(V,` decodes the generated target tokens to the target string. The
`),zt=n(V,"A",{href:!0});var lc=c(zt);$r=r(lc,"Speech2Text2Processor"),lc.forEach(o),Er=r(V," wraps "),Pt=n(V,"A",{href:!0});var dc=c(Pt);zr=r(dc,"Wav2Vec2FeatureExtractor"),dc.forEach(o),Pr=r(V,` and
`),jt=n(V,"A",{href:!0});var pc=c(jt);jr=r(pc,"Speech2Text2Tokenizer"),pc.forEach(o),Cr=r(V,` into a single instance to both extract the input features and decode the
predicted token ids.`),V.forEach(o),Ho=d(t),Ct=n(t,"UL",{});var hc=c(Ct);po=n(hc,"LI",{});var fc=c(po);qr=r(fc,"Step-by-step Speech Translation"),fc.forEach(o),hc.forEach(o),Bo=d(t),u(Ae.$$.fragment,t),Jo=d(t),qt=n(t,"UL",{});var mc=c(qt);Le=n(mc,"LI",{});var hs=c(Le);ho=n(hs,"P",{});var uc=c(ho);Fr=r(uc,"Speech Translation via Pipelines"),uc.forEach(o),Mr=d(hs),fo=n(hs,"P",{});var _c=c(fo);Ar=r(_c,"The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),_c.forEach(o),hs.forEach(o),mc.forEach(o),Go=d(t),u(De.$$.fragment,t),Ko=d(t),de=n(t,"P",{});var fs=c(de);Lr=r(fs,"See "),We=n(fs,"A",{href:!0,rel:!0});var gc=c(We);Dr=r(gc,"model hub"),gc.forEach(o),Wr=r(fs," to look for Speech2Text2 checkpoints."),fs.forEach(o),Qo=d(t),te=n(t,"H2",{class:!0});var ms=c(te);pe=n(ms,"A",{id:!0,class:!0,href:!0});var vc=c(pe);mo=n(vc,"SPAN",{});var Tc=c(mo);u(Ie.$$.fragment,Tc),Tc.forEach(o),vc.forEach(o),Ir=d(ms),uo=n(ms,"SPAN",{});var xc=c(uo);Vr=r(xc,"Speech2Text2Config"),xc.forEach(o),ms.forEach(o),Xo=d(t),C=n(t,"DIV",{class:!0});var Z=c(C);u(Ve.$$.fragment,Z),Nr=d(Z),oe=n(Z,"P",{});var Xt=c(oe);Or=r(Xt,"This is the configuration class to store the configuration of a "),Ft=n(Xt,"A",{href:!0});var kc=c(Ft);Ur=r(kc,"Speech2Text2ForCausalLM"),kc.forEach(o),Rr=r(Xt,`. It is used to
instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Ne=n(Xt,"A",{href:!0,rel:!0});var bc=c(Ne);Hr=r(bc,"facebook/s2t-small-librispeech-asr"),bc.forEach(o),Br=r(Xt," architecture."),Xt.forEach(o),Jr=d(Z),se=n(Z,"P",{});var Yt=c(se);Gr=r(Yt,"Configuration objects inherit from "),Mt=n(Yt,"A",{href:!0});var Sc=c(Mt);Kr=r(Sc,"PretrainedConfig"),Sc.forEach(o),Qr=r(Yt,` and can be used to control the model outputs. Read the
documentation from `),At=n(Yt,"A",{href:!0});var wc=c(At);Xr=r(wc,"PretrainedConfig"),wc.forEach(o),Yr=r(Yt," for more information."),Yt.forEach(o),Zr=d(Z),_o=n(Z,"P",{});var yc=c(_o);ea=r(yc,"Example:"),yc.forEach(o),ta=d(Z),u(Oe.$$.fragment,Z),Z.forEach(o),Yo=d(t),re=n(t,"H2",{class:!0});var us=c(re);he=n(us,"A",{id:!0,class:!0,href:!0});var $c=c(he);go=n($c,"SPAN",{});var Ec=c(go);u(Ue.$$.fragment,Ec),Ec.forEach(o),$c.forEach(o),oa=d(us),vo=n(us,"SPAN",{});var zc=c(vo);sa=r(zc,"Speech2TextTokenizer"),zc.forEach(o),us.forEach(o),Zo=d(t),$=n(t,"DIV",{class:!0});var N=c($);u(Re.$$.fragment,N),ra=d(N),To=n(N,"P",{});var Pc=c(To);aa=r(Pc,"Constructs a Speech2Text2Tokenizer."),Pc.forEach(o),na=d(N),He=n(N,"P",{});var _s=c(He);ca=r(_s,"This tokenizer inherits from "),Lt=n(_s,"A",{href:!0});var jc=c(Lt);ia=r(jc,"PreTrainedTokenizer"),jc.forEach(o),la=r(_s,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),_s.forEach(o),da=d(N),fe=n(N,"DIV",{class:!0});var gs=c(fe);u(Be.$$.fragment,gs),pa=d(gs),xo=n(gs,"P",{});var Cc=c(xo);ha=r(Cc,"Convert a list of lists of token ids into a list of strings by calling decode."),Cc.forEach(o),gs.forEach(o),fa=d(N),K=n(N,"DIV",{class:!0});var Zt=c(K);u(Je.$$.fragment,Zt),ma=d(Zt),ko=n(Zt,"P",{});var qc=c(ko);ua=r(qc,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),qc.forEach(o),_a=d(Zt),Ge=n(Zt,"P",{});var vs=c(Ge);ga=r(vs,"Similar to doing "),bo=n(vs,"CODE",{});var Fc=c(bo);va=r(Fc,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Fc.forEach(o),Ta=r(vs,"."),vs.forEach(o),Zt.forEach(o),xa=d(N),Dt=n(N,"DIV",{class:!0});var Mc=c(Dt);u(Ke.$$.fragment,Mc),Mc.forEach(o),N.forEach(o),es=d(t),ae=n(t,"H2",{class:!0});var Ts=c(ae);me=n(Ts,"A",{id:!0,class:!0,href:!0});var Ac=c(me);So=n(Ac,"SPAN",{});var Lc=c(So);u(Qe.$$.fragment,Lc),Lc.forEach(o),Ac.forEach(o),ka=d(Ts),wo=n(Ts,"SPAN",{});var Dc=c(wo);ba=r(Dc,"Speech2Text2Processor"),Dc.forEach(o),Ts.forEach(o),ts=d(t),k=n(t,"DIV",{class:!0});var y=c(k);u(Xe.$$.fragment,y),Sa=d(y),yo=n(y,"P",{});var Wc=c(yo);wa=r(Wc,`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),Wc.forEach(o),ya=d(y),F=n(y,"P",{});var H=c(F);Wt=n(H,"A",{href:!0});var Ic=c(Wt);$a=r(Ic,"Speech2Text2Processor"),Ic.forEach(o),Ea=r(H," offers all the functionalities of "),It=n(H,"A",{href:!0});var Vc=c(It);za=r(Vc,"AutoFeatureExtractor"),Vc.forEach(o),Pa=r(H," and "),Vt=n(H,"A",{href:!0});var Nc=c(Vt);ja=r(Nc,"Speech2Text2Tokenizer"),Nc.forEach(o),Ca=r(H,`.
See the `),Ye=n(H,"A",{href:!0});var An=c(Ye);$o=n(An,"STRONG",{});var Oc=c($o);qa=r(Oc,"call"),Oc.forEach(o),Fa=r(An,"()"),An.forEach(o),Ma=r(H," and "),Nt=n(H,"A",{href:!0});var Uc=c(Nt);Aa=r(Uc,"decode()"),Uc.forEach(o),La=r(H," for more information."),H.forEach(o),Da=d(y),ue=n(y,"DIV",{class:!0});var xs=c(ue);u(Ze.$$.fragment,xs),Wa=d(xs),U=n(xs,"P",{});var be=c(U);Ia=r(be,`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),Eo=n(be,"CODE",{});var Rc=c(Eo);Va=r(Rc,"__call__()"),Rc.forEach(o),Na=r(be,` and returns its output. If used in the context
`),Ot=n(be,"A",{href:!0});var Hc=c(Ot);Oa=r(Hc,"as_target_processor()"),Hc.forEach(o),Ua=r(be,` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),et=n(be,"A",{href:!0});var Ln=c(et);zo=n(Ln,"STRONG",{});var Bc=c(zo);Ra=r(Bc,"call"),Bc.forEach(o),Ha=r(Ln,"()"),Ln.forEach(o),Ba=r(be,`. Please refer to the doctsring of the above two
methods for more information.`),be.forEach(o),xs.forEach(o),Ja=d(y),Q=n(y,"DIV",{class:!0});var eo=c(Q);u(tt.$$.fragment,eo),Ga=d(eo),Po=n(eo,"P",{});var Jc=c(Po);Ka=r(Jc,"Instantiate a processor associated with a pretrained model."),Jc.forEach(o),Qa=d(eo),u(_e.$$.fragment,eo),eo.forEach(o),Xa=d(y),X=n(y,"DIV",{class:!0});var to=c(X);u(ot.$$.fragment,to),Ya=d(to),st=n(to,"P",{});var ks=c(st);Za=r(ks,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Ut=n(ks,"A",{href:!0});var Gc=c(Ut);en=r(Gc,"from_pretrained()"),Gc.forEach(o),tn=r(ks," method."),ks.forEach(o),on=d(to),u(ge.$$.fragment,to),to.forEach(o),sn=d(y),ve=n(y,"DIV",{class:!0});var bs=c(ve);u(rt.$$.fragment,bs),rn=d(bs),at=n(bs,"P",{});var Ss=c(at);an=r(Ss,"This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Rt=n(Ss,"A",{href:!0});var Kc=c(Rt);nn=r(Kc,"batch_decode()"),Kc.forEach(o),cn=r(Ss,`. Please
refer to the docstring of this method for more information.`),Ss.forEach(o),bs.forEach(o),ln=d(y),Te=n(y,"DIV",{class:!0});var ws=c(Te);u(nt.$$.fragment,ws),dn=d(ws),ct=n(ws,"P",{});var ys=c(ct);pn=r(ys,"This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Ht=n(ys,"A",{href:!0});var Qc=c(Ht);hn=r(Qc,"decode()"),Qc.forEach(o),fn=r(ys,`. Please refer
to the docstring of this method for more information.`),ys.forEach(o),ws.forEach(o),mn=d(y),xe=n(y,"DIV",{class:!0});var $s=c(xe);u(it.$$.fragment,$s),un=d($s),jo=n($s,"P",{});var Xc=c(jo);_n=r(Xc,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text2.`),Xc.forEach(o),$s.forEach(o),y.forEach(o),os=d(t),ne=n(t,"H2",{class:!0});var Es=c(ne);ke=n(Es,"A",{id:!0,class:!0,href:!0});var Yc=c(ke);Co=n(Yc,"SPAN",{});var Zc=c(Co);u(lt.$$.fragment,Zc),Zc.forEach(o),Yc.forEach(o),gn=d(Es),qo=n(Es,"SPAN",{});var ei=c(qo);vn=r(ei,"Speech2Text2ForCausalLM"),ei.forEach(o),Es.forEach(o),ss=d(t),W=n(t,"DIV",{class:!0});var Se=c(W);u(dt.$$.fragment,Se),Tn=d(Se),R=n(Se,"P",{});var we=c(R);xn=r(we,"The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Bt=n(we,"A",{href:!0});var ti=c(Bt);kn=r(ti,"EncoderDecoderModel"),ti.forEach(o),bn=r(we," and "),Fo=n(we,"CODE",{});var oi=c(Fo);Sn=r(oi,"SpeechEncoderDecoder"),oi.forEach(o),wn=r(we,`.
This model inherits from `),Jt=n(we,"A",{href:!0});var si=c(Jt);yn=r(si,"PreTrainedModel"),si.forEach(o),$n=r(we,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),we.forEach(o),En=d(Se),pt=n(Se,"P",{});var zs=c(pt);zn=r(zs,"This model is also a PyTorch "),ht=n(zs,"A",{href:!0,rel:!0});var ri=c(ht);Pn=r(ri,"torch.nn.Module"),ri.forEach(o),jn=r(zs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zs.forEach(o),Cn=d(Se),Y=n(Se,"DIV",{class:!0});var oo=c(Y);u(ft.$$.fragment,oo),qn=d(oo),Mo=n(oo,"P",{});var ai=c(Mo);Fn=r(ai,"Example:"),ai.forEach(o),Mn=d(oo),u(mt.$$.fragment,oo),oo.forEach(o),Se.forEach(o),this.h()},h(){i(f,"name","hf:doc:metadata"),i(f,"content",JSON.stringify(ui)),i(E,"id","speech2text2"),i(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(E,"href","#speech2text2"),i(x,"class","relative group"),i(q,"id","overview"),i(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(q,"href","#overview"),i(j,"class","relative group"),i(vt,"href","wav2vec2"),i($e,"href","https://arxiv.org/abs/2104.06678"),i($e,"rel","nofollow"),i(Tt,"href","wav2vec2"),i(xt,"href","hubert"),i(kt,"href","speech-encoder-decoder"),i(Ee,"href","https://huggingface.co/patrickvonplaten"),i(Ee,"rel","nofollow"),i(ze,"href","https://github.com/pytorch/fairseq/blob/1f7ef9ed1e1061f8c7f88f8b94c7186834398690/fairseq/models/wav2vec/wav2vec2_asr.py#L266"),i(ze,"rel","nofollow"),i(je,"href","https://huggingface.co/models?other=speech2text2"),i(je,"rel","nofollow"),i(St,"href","speech-encoder-decoder"),i(Fe,"href","https://github.com/glample/fastBPE"),i(Fe,"rel","nofollow"),i(le,"id","inference"),i(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(le,"href","#inference"),i(ee,"class","relative group"),i(wt,"href","/docs/transformers/v4.18.0/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(yt,"href","/docs/transformers/v4.18.0/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),i($t,"href","/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),i(Et,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(zt,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),i(Pt,"href","/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),i(jt,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(We,"href","https://huggingface.co/models?filter=speech2text2"),i(We,"rel","nofollow"),i(pe,"id","transformers.Speech2Text2Config"),i(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(pe,"href","#transformers.Speech2Text2Config"),i(te,"class","relative group"),i(Ft,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2ForCausalLM"),i(Ne,"href","https://huggingface.co/facebook/s2t-small-librispeech-asr"),i(Ne,"rel","nofollow"),i(Mt,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),i(At,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),i(C,"class","docstring"),i(he,"id","transformers.Speech2Text2Tokenizer"),i(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(he,"href","#transformers.Speech2Text2Tokenizer"),i(re,"class","relative group"),i(Lt,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),i(fe,"class","docstring"),i(K,"class","docstring"),i(Dt,"class","docstring"),i($,"class","docstring"),i(me,"id","transformers.Speech2Text2Processor"),i(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(me,"href","#transformers.Speech2Text2Processor"),i(ae,"class","relative group"),i(Wt,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),i(It,"href","/docs/transformers/v4.18.0/en/model_doc/auto#transformers.AutoFeatureExtractor"),i(Vt,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(Ye,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.__call__"),i(Nt,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.decode"),i(Ot,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.as_target_processor"),i(et,"href","/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),i(ue,"class","docstring"),i(Q,"class","docstring"),i(Ut,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.from_pretrained"),i(X,"class","docstring"),i(Rt,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),i(ve,"class","docstring"),i(Ht,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),i(Te,"class","docstring"),i(xe,"class","docstring"),i(k,"class","docstring"),i(ke,"id","transformers.Speech2Text2ForCausalLM"),i(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(ke,"href","#transformers.Speech2Text2ForCausalLM"),i(ne,"class","relative group"),i(Bt,"href","/docs/transformers/v4.18.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),i(Jt,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),i(ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),i(ht,"rel","nofollow"),i(Y,"class","docstring"),i(W,"class","docstring")},m(t,p){e(document.head,f),h(t,I,p),h(t,x,p),e(x,E),e(E,L),_(S,L,null),e(x,O),e(x,D),e(D,P),h(t,b,p),h(t,j,p),e(j,q),e(q,so),_(ye,so,null),e(j,js),e(j,ro),e(ro,Cs),h(t,Lo,p),h(t,B,p),e(B,qs),e(B,vt),e(vt,Fs),e(B,Ms),e(B,$e),e($e,As),e(B,Ls),h(t,Do,p),h(t,w,p),e(w,Ds),e(w,ao),e(ao,Ws),e(w,Is),e(w,no),e(no,Vs),e(w,Ns),e(w,Tt),e(Tt,Os),e(w,Us),e(w,xt),e(xt,Rs),e(w,Hs),e(w,kt),e(kt,Bs),e(w,Js),e(w,co),e(co,Gs),e(w,Ks),h(t,Wo,p),h(t,ce,p),e(ce,Qs),e(ce,Ee),e(Ee,Xs),e(ce,Ys),h(t,Io,p),h(t,ie,p),e(ie,Zs),e(ie,ze),e(ze,er),e(ie,tr),h(t,Vo,p),h(t,bt,p),e(bt,or),h(t,No,p),h(t,J,p),e(J,Pe),e(Pe,sr),e(Pe,je),e(je,rr),e(Pe,ar),e(J,nr),e(J,Ce),e(Ce,cr),e(Ce,St),e(St,ir),e(Ce,lr),e(J,dr),e(J,qe),e(qe,pr),e(qe,Fe),e(Fe,hr),e(qe,fr),h(t,Oo,p),h(t,ee,p),e(ee,le),e(le,io),_(Me,io,null),e(ee,mr),e(ee,lo),e(lo,ur),h(t,Uo,p),h(t,G,p),e(G,_r),e(G,wt),e(wt,gr),e(G,vr),e(G,yt),e(yt,Tr),e(G,xr),h(t,Ro,p),h(t,z,p),e(z,kr),e(z,$t),e($t,br),e(z,Sr),e(z,Et),e(Et,wr),e(z,yr),e(z,zt),e(zt,$r),e(z,Er),e(z,Pt),e(Pt,zr),e(z,Pr),e(z,jt),e(jt,jr),e(z,Cr),h(t,Ho,p),h(t,Ct,p),e(Ct,po),e(po,qr),h(t,Bo,p),_(Ae,t,p),h(t,Jo,p),h(t,qt,p),e(qt,Le),e(Le,ho),e(ho,Fr),e(Le,Mr),e(Le,fo),e(fo,Ar),h(t,Go,p),_(De,t,p),h(t,Ko,p),h(t,de,p),e(de,Lr),e(de,We),e(We,Dr),e(de,Wr),h(t,Qo,p),h(t,te,p),e(te,pe),e(pe,mo),_(Ie,mo,null),e(te,Ir),e(te,uo),e(uo,Vr),h(t,Xo,p),h(t,C,p),_(Ve,C,null),e(C,Nr),e(C,oe),e(oe,Or),e(oe,Ft),e(Ft,Ur),e(oe,Rr),e(oe,Ne),e(Ne,Hr),e(oe,Br),e(C,Jr),e(C,se),e(se,Gr),e(se,Mt),e(Mt,Kr),e(se,Qr),e(se,At),e(At,Xr),e(se,Yr),e(C,Zr),e(C,_o),e(_o,ea),e(C,ta),_(Oe,C,null),h(t,Yo,p),h(t,re,p),e(re,he),e(he,go),_(Ue,go,null),e(re,oa),e(re,vo),e(vo,sa),h(t,Zo,p),h(t,$,p),_(Re,$,null),e($,ra),e($,To),e(To,aa),e($,na),e($,He),e(He,ca),e(He,Lt),e(Lt,ia),e(He,la),e($,da),e($,fe),_(Be,fe,null),e(fe,pa),e(fe,xo),e(xo,ha),e($,fa),e($,K),_(Je,K,null),e(K,ma),e(K,ko),e(ko,ua),e(K,_a),e(K,Ge),e(Ge,ga),e(Ge,bo),e(bo,va),e(Ge,Ta),e($,xa),e($,Dt),_(Ke,Dt,null),h(t,es,p),h(t,ae,p),e(ae,me),e(me,So),_(Qe,So,null),e(ae,ka),e(ae,wo),e(wo,ba),h(t,ts,p),h(t,k,p),_(Xe,k,null),e(k,Sa),e(k,yo),e(yo,wa),e(k,ya),e(k,F),e(F,Wt),e(Wt,$a),e(F,Ea),e(F,It),e(It,za),e(F,Pa),e(F,Vt),e(Vt,ja),e(F,Ca),e(F,Ye),e(Ye,$o),e($o,qa),e(Ye,Fa),e(F,Ma),e(F,Nt),e(Nt,Aa),e(F,La),e(k,Da),e(k,ue),_(Ze,ue,null),e(ue,Wa),e(ue,U),e(U,Ia),e(U,Eo),e(Eo,Va),e(U,Na),e(U,Ot),e(Ot,Oa),e(U,Ua),e(U,et),e(et,zo),e(zo,Ra),e(et,Ha),e(U,Ba),e(k,Ja),e(k,Q),_(tt,Q,null),e(Q,Ga),e(Q,Po),e(Po,Ka),e(Q,Qa),_(_e,Q,null),e(k,Xa),e(k,X),_(ot,X,null),e(X,Ya),e(X,st),e(st,Za),e(st,Ut),e(Ut,en),e(st,tn),e(X,on),_(ge,X,null),e(k,sn),e(k,ve),_(rt,ve,null),e(ve,rn),e(ve,at),e(at,an),e(at,Rt),e(Rt,nn),e(at,cn),e(k,ln),e(k,Te),_(nt,Te,null),e(Te,dn),e(Te,ct),e(ct,pn),e(ct,Ht),e(Ht,hn),e(ct,fn),e(k,mn),e(k,xe),_(it,xe,null),e(xe,un),e(xe,jo),e(jo,_n),h(t,os,p),h(t,ne,p),e(ne,ke),e(ke,Co),_(lt,Co,null),e(ne,gn),e(ne,qo),e(qo,vn),h(t,ss,p),h(t,W,p),_(dt,W,null),e(W,Tn),e(W,R),e(R,xn),e(R,Bt),e(Bt,kn),e(R,bn),e(R,Fo),e(Fo,Sn),e(R,wn),e(R,Jt),e(Jt,yn),e(R,$n),e(W,En),e(W,pt),e(pt,zn),e(pt,ht),e(ht,Pn),e(pt,jn),e(W,Cn),e(W,Y),_(ft,Y,null),e(Y,qn),e(Y,Mo),e(Mo,Fn),e(Y,Mn),_(mt,Y,null),rs=!0},p(t,[p]){const ut={};p&2&&(ut.$$scope={dirty:p,ctx:t}),_e.$set(ut);const Ao={};p&2&&(Ao.$$scope={dirty:p,ctx:t}),ge.$set(Ao)},i(t){rs||(g(S.$$.fragment,t),g(ye.$$.fragment,t),g(Me.$$.fragment,t),g(Ae.$$.fragment,t),g(De.$$.fragment,t),g(Ie.$$.fragment,t),g(Ve.$$.fragment,t),g(Oe.$$.fragment,t),g(Ue.$$.fragment,t),g(Re.$$.fragment,t),g(Be.$$.fragment,t),g(Je.$$.fragment,t),g(Ke.$$.fragment,t),g(Qe.$$.fragment,t),g(Xe.$$.fragment,t),g(Ze.$$.fragment,t),g(tt.$$.fragment,t),g(_e.$$.fragment,t),g(ot.$$.fragment,t),g(ge.$$.fragment,t),g(rt.$$.fragment,t),g(nt.$$.fragment,t),g(it.$$.fragment,t),g(lt.$$.fragment,t),g(dt.$$.fragment,t),g(ft.$$.fragment,t),g(mt.$$.fragment,t),rs=!0)},o(t){v(S.$$.fragment,t),v(ye.$$.fragment,t),v(Me.$$.fragment,t),v(Ae.$$.fragment,t),v(De.$$.fragment,t),v(Ie.$$.fragment,t),v(Ve.$$.fragment,t),v(Oe.$$.fragment,t),v(Ue.$$.fragment,t),v(Re.$$.fragment,t),v(Be.$$.fragment,t),v(Je.$$.fragment,t),v(Ke.$$.fragment,t),v(Qe.$$.fragment,t),v(Xe.$$.fragment,t),v(Ze.$$.fragment,t),v(tt.$$.fragment,t),v(_e.$$.fragment,t),v(ot.$$.fragment,t),v(ge.$$.fragment,t),v(rt.$$.fragment,t),v(nt.$$.fragment,t),v(it.$$.fragment,t),v(lt.$$.fragment,t),v(dt.$$.fragment,t),v(ft.$$.fragment,t),v(mt.$$.fragment,t),rs=!1},d(t){o(f),t&&o(I),t&&o(x),T(S),t&&o(b),t&&o(j),T(ye),t&&o(Lo),t&&o(B),t&&o(Do),t&&o(w),t&&o(Wo),t&&o(ce),t&&o(Io),t&&o(ie),t&&o(Vo),t&&o(bt),t&&o(No),t&&o(J),t&&o(Oo),t&&o(ee),T(Me),t&&o(Uo),t&&o(G),t&&o(Ro),t&&o(z),t&&o(Ho),t&&o(Ct),t&&o(Bo),T(Ae,t),t&&o(Jo),t&&o(qt),t&&o(Go),T(De,t),t&&o(Ko),t&&o(de),t&&o(Qo),t&&o(te),T(Ie),t&&o(Xo),t&&o(C),T(Ve),T(Oe),t&&o(Yo),t&&o(re),T(Ue),t&&o(Zo),t&&o($),T(Re),T(Be),T(Je),T(Ke),t&&o(es),t&&o(ae),T(Qe),t&&o(ts),t&&o(k),T(Xe),T(Ze),T(tt),T(_e),T(ot),T(ge),T(rt),T(nt),T(it),t&&o(os),t&&o(ne),T(lt),t&&o(ss),t&&o(W),T(dt),T(ft),T(mt)}}}const ui={local:"speech2text2",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2Text2Config",title:"Speech2Text2Config"},{local:"transformers.Speech2Text2Tokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2Text2Processor",title:"Speech2Text2Processor"},{local:"transformers.Speech2Text2ForCausalLM",title:"Speech2Text2ForCausalLM"}],title:"Speech2Text2"};function _i(gt){return pi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bi extends ci{constructor(f){super();ii(this,f,_i,mi,li,{})}}export{bi as default,ui as metadata};
