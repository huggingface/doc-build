import{S as ci,i as ii,s as li,e as a,k as l,w as m,t as r,M as di,c as n,d as o,m as d,a as c,x as u,h as s,b as i,F as e,g as h,y as _,q as g,o as v,B as T,v as pi}from"../../chunks/vendor-6b77c823.js";import{T as ni}from"../../chunks/Tip-39098574.js";import{D as A}from"../../chunks/Docstring-17b815d9.js";import{C as Pr}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as _t}from"../../chunks/IconCopyLink-7a11ce68.js";function hi(gt){let f,I,x,E,L,S,O,D;return{c(){f=a("p"),I=r(`This class method is simply calling the feature extractor
`),x=a("a"),E=r("from_pretrained()"),L=r(` and the tokenizer
`),S=a("code"),O=r("from_pretrained"),D=r(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(P){f=n(P,"P",{});var k=c(f);I=s(k,`This class method is simply calling the feature extractor
`),x=n(k,"A",{href:!0});var j=c(x);E=s(j,"from_pretrained()"),j.forEach(o),L=s(k,` and the tokenizer
`),S=n(k,"CODE",{});var q=c(S);O=s(q,"from_pretrained"),q.forEach(o),D=s(k,` methods. Please refer to the docstrings of the
methods above for more information.`),k.forEach(o),this.h()},h(){i(x,"href","/docs/transformers/v4.18.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(P,k){h(P,f,k),e(f,I),e(f,x),e(x,E),e(f,L),e(f,S),e(S,O),e(f,D)},d(P){P&&o(f)}}}function fi(gt){let f,I,x,E,L,S,O,D;return{c(){f=a("p"),I=r("This class method is simply calling "),x=a("a"),E=r("save_pretrained()"),L=r(` and
`),S=a("code"),O=r("save_pretrained"),D=r(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(P){f=n(P,"P",{});var k=c(f);I=s(k,"This class method is simply calling "),x=n(k,"A",{href:!0});var j=c(x);E=s(j,"save_pretrained()"),j.forEach(o),L=s(k,` and
`),S=n(k,"CODE",{});var q=c(S);O=s(q,"save_pretrained"),q.forEach(o),D=s(k,`. Please refer to the docstrings of the methods
above for more information.`),k.forEach(o),this.h()},h(){i(x,"href","/docs/transformers/v4.18.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(P,k){h(P,f,k),e(f,I),e(f,x),e(x,E),e(f,L),e(f,S),e(S,O),e(f,D)},d(P){P&&o(f)}}}function mi(gt){let f,I,x,E,L,S,O,D,P,k,j,q,ro,ye,jr,so,Cr,Lo,B,qr,vt,Fr,Mr,$e,Ar,Lr,Do,w,Dr,ao,Wr,Ir,no,Vr,Nr,Tt,Or,Ur,xt,Rr,Hr,bt,Br,Jr,co,Gr,Kr,Wo,ce,Qr,Ee,Xr,Yr,Io,ie,Zr,ze,es,ts,Vo,kt,os,No,J,Pe,rs,je,ss,as,ns,Ce,cs,St,is,ls,ds,qe,ps,Fe,hs,fs,Oo,ee,le,io,Me,ms,lo,us,Uo,G,_s,wt,gs,vs,yt,Ts,xs,Ro,z,bs,$t,ks,Ss,Et,ws,ys,zt,$s,Es,Pt,zs,Ps,jt,js,Cs,Ho,Ct,po,qs,Bo,Ae,Jo,qt,Le,ho,Fs,Ms,fo,As,Go,De,Ko,de,Ls,We,Ds,Ws,Qo,te,pe,mo,Ie,Is,uo,Vs,Xo,C,Ve,Ns,oe,Os,Ft,Us,Rs,Ne,Hs,Bs,Js,re,Gs,Mt,Ks,Qs,At,Xs,Ys,Zs,_o,ea,ta,Oe,Yo,se,he,go,Ue,oa,vo,ra,Zo,$,Re,sa,To,aa,na,He,ca,Lt,ia,la,da,fe,Be,pa,xo,ha,fa,K,Je,ma,bo,ua,_a,Ge,ga,ko,va,Ta,xa,Dt,Ke,er,ae,me,So,Qe,ba,wo,ka,tr,b,Xe,Sa,yo,wa,ya,F,Wt,$a,Ea,It,za,Pa,Vt,ja,Ca,Ye,$o,qa,Fa,Ma,Nt,Aa,La,Da,ue,Ze,Wa,U,Ia,Eo,Va,Na,Ot,Oa,Ua,et,zo,Ra,Ha,Ba,Ja,Q,tt,Ga,Po,Ka,Qa,_e,Xa,X,ot,Ya,rt,Za,Ut,en,tn,on,ge,rn,ve,st,sn,at,an,Rt,nn,cn,ln,Te,nt,dn,ct,pn,Ht,hn,fn,mn,xe,it,un,jo,_n,or,ne,be,Co,lt,gn,qo,vn,rr,W,dt,Tn,R,xn,Bt,bn,kn,Fo,Sn,wn,Jt,yn,$n,En,pt,zn,ht,Pn,jn,Cn,Y,ft,qn,Mo,Fn,Mn,mt,sr;return S=new _t({}),ye=new _t({}),Me=new _t({}),Ae=new Pr({props:{code:`import torch
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

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),De=new Pr({props:{code:`from datasets import load_dataset
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

<span class="hljs-meta">&gt;&gt;&gt; </span>translation_de = asr(librispeech_en[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;file&quot;</span>])`}}),Ie=new _t({}),Ve=new A({props:{name:"class transformers.Speech2Text2Config",anchor:"transformers.Speech2Text2Config",parameters:[{name:"vocab_size",val:" = 10000"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
just in case (e.g., 512 or 1024 or 2048).`,name:"max_source_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/configuration_speech_to_text_2.py#L29"}}),Oe=new Pr({props:{code:`from transformers import Speech2Text2ForCausalLM, Speech2Text2Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Ue=new _t({}),Re=new A({props:{name:"class transformers.Speech2Text2Tokenizer",anchor:"transformers.Speech2Text2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_lower_case",val:" = False"},{name:"merges_file",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Speech2Text2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Speech2Text2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Speech2Text2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Speech2Text2Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.</p>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/tokenization_speech_to_text_2.py#L67"}}),Be=new A({props:{name:"batch_decode",anchor:"transformers.Speech2Text2Tokenizer.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/tokenization_utils_base.py#L3242",returnDescription:`
<p>The list of decoded sentences.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Je=new A({props:{name:"decode",anchor:"transformers.Speech2Text2Tokenizer.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.Speech2Text2Tokenizer.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Speech2Text2Tokenizer.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Speech2Text2Tokenizer.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/tokenization_utils_base.py#L3275",returnDescription:`
<p>The decoded sentence.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ke=new A({props:{name:"save_vocabulary",anchor:"transformers.Speech2Text2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/tokenization_speech_to_text_2.py#L235"}}),Qe=new _t({}),Xe=new A({props:{name:"class transformers.Speech2Text2Processor",anchor:"transformers.Speech2Text2Processor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>AutoFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.18.0/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2Text2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2Text2Tokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer">Speech2Text2Tokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L23"}}),Ze=new A({props:{name:"__call__",anchor:"transformers.Speech2Text2Processor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L44"}}),tt=new A({props:{name:"from_pretrained",anchor:"transformers.Speech2Text2Processor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Processor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
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
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/processing_utils.py#L156"}}),_e=new ni({props:{$$slots:{default:[hi]},$$scope:{ctx:gt}}}),ot=new A({props:{name:"save_pretrained",anchor:"transformers.Speech2Text2Processor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Processor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Speech2Text2Processor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/processing_utils.py#L94"}}),ge=new ni({props:{$$slots:{default:[fi]},$$scope:{ctx:gt}}}),st=new A({props:{name:"batch_decode",anchor:"transformers.Speech2Text2Processor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L54"}}),nt=new A({props:{name:"decode",anchor:"transformers.Speech2Text2Processor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L61"}}),it=new A({props:{name:"as_target_processor",anchor:"transformers.Speech2Text2Processor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L68"}}),lt=new _t({}),dt=new A({props:{name:"class transformers.Speech2Text2ForCausalLM",anchor:"transformers.Speech2Text2ForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Config">Speech2Text2Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L741"}}),ft=new A({props:{name:"forward",anchor:"transformers.Speech2Text2ForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L772",returnDescription:`
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
`}}),mt=new Pr({props:{code:`from transformers import (
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){f=a("meta"),I=l(),x=a("h1"),E=a("a"),L=a("span"),m(S.$$.fragment),O=l(),D=a("span"),P=r("Speech2Text2"),k=l(),j=a("h2"),q=a("a"),ro=a("span"),m(ye.$$.fragment),jr=l(),so=a("span"),Cr=r("Overview"),Lo=l(),B=a("p"),qr=r("The Speech2Text2 model is used together with "),vt=a("a"),Fr=r("Wav2Vec2"),Mr=r(` for Speech Translation models proposed in
`),$e=a("a"),Ar=r("Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),Lr=r(` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Do=l(),w=a("p"),Dr=r("Speech2Text2 is a "),ao=a("em"),Wr=r("decoder-only"),Ir=r(" transformer model that can be used with any speech "),no=a("em"),Vr=r("encoder-only"),Nr=r(`, such as
`),Tt=a("a"),Or=r("Wav2Vec2"),Ur=r(" or "),xt=a("a"),Rr=r("HuBERT"),Hr=r(` for Speech-to-Text tasks. Please refer to the
`),bt=a("a"),Br=r("SpeechEncoderDecoder"),Jr=r(" class on how to combine Speech2Text2 with any speech "),co=a("em"),Gr=r("encoder-only"),Kr=r(`
model.`),Wo=l(),ce=a("p"),Qr=r("This model was contributed by "),Ee=a("a"),Xr=r("Patrick von Platen"),Yr=r("."),Io=l(),ie=a("p"),Zr=r("The original code can be found "),ze=a("a"),es=r("here"),ts=r("."),Vo=l(),kt=a("p"),os=r("Tips:"),No=l(),J=a("ul"),Pe=a("li"),rs=r(`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),je=a("a"),ss=r("official models"),as=r(" ."),ns=l(),Ce=a("li"),cs=r("Speech2Text2 is always used within the "),St=a("a"),is=r("SpeechEncoderDecoder"),ls=r(" framework."),ds=l(),qe=a("li"),ps=r("Speech2Text2\u2019s tokenizer is based on "),Fe=a("a"),hs=r("fastBPE"),fs=r("."),Oo=l(),ee=a("h2"),le=a("a"),io=a("span"),m(Me.$$.fragment),ms=l(),lo=a("span"),us=r("Inference"),Uo=l(),G=a("p"),_s=r("Speech2Text2\u2019s "),wt=a("a"),gs=r("SpeechEncoderDecoderModel"),vs=r(` model accepts raw waveform input values from speech and
makes use of `),yt=a("a"),Ts=r("generate()"),xs=r(` to translate the input speech
autoregressively to the target language.`),Ro=l(),z=a("p"),bs=r("The "),$t=a("a"),ks=r("Wav2Vec2FeatureExtractor"),Ss=r(` class is responsible for preprocessing the input speech and
`),Et=a("a"),ws=r("Speech2Text2Tokenizer"),ys=r(` decodes the generated target tokens to the target string. The
`),zt=a("a"),$s=r("Speech2Text2Processor"),Es=r(" wraps "),Pt=a("a"),zs=r("Wav2Vec2FeatureExtractor"),Ps=r(` and
`),jt=a("a"),js=r("Speech2Text2Tokenizer"),Cs=r(` into a single instance to both extract the input features and decode the
predicted token ids.`),Ho=l(),Ct=a("ul"),po=a("li"),qs=r("Step-by-step Speech Translation"),Bo=l(),m(Ae.$$.fragment),Jo=l(),qt=a("ul"),Le=a("li"),ho=a("p"),Fs=r("Speech Translation via Pipelines"),Ms=l(),fo=a("p"),As=r("The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),Go=l(),m(De.$$.fragment),Ko=l(),de=a("p"),Ls=r("See "),We=a("a"),Ds=r("model hub"),Ws=r(" to look for Speech2Text2 checkpoints."),Qo=l(),te=a("h2"),pe=a("a"),mo=a("span"),m(Ie.$$.fragment),Is=l(),uo=a("span"),Vs=r("Speech2Text2Config"),Xo=l(),C=a("div"),m(Ve.$$.fragment),Ns=l(),oe=a("p"),Os=r("This is the configuration class to store the configuration of a "),Ft=a("a"),Us=r("Speech2Text2ForCausalLM"),Rs=r(`. It is used to
instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Ne=a("a"),Hs=r("facebook/s2t-small-librispeech-asr"),Bs=r(" architecture."),Js=l(),re=a("p"),Gs=r("Configuration objects inherit from "),Mt=a("a"),Ks=r("PretrainedConfig"),Qs=r(` and can be used to control the model outputs. Read the
documentation from `),At=a("a"),Xs=r("PretrainedConfig"),Ys=r(" for more information."),Zs=l(),_o=a("p"),ea=r("Example:"),ta=l(),m(Oe.$$.fragment),Yo=l(),se=a("h2"),he=a("a"),go=a("span"),m(Ue.$$.fragment),oa=l(),vo=a("span"),ra=r("Speech2TextTokenizer"),Zo=l(),$=a("div"),m(Re.$$.fragment),sa=l(),To=a("p"),aa=r("Constructs a Speech2Text2Tokenizer."),na=l(),He=a("p"),ca=r("This tokenizer inherits from "),Lt=a("a"),ia=r("PreTrainedTokenizer"),la=r(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),da=l(),fe=a("div"),m(Be.$$.fragment),pa=l(),xo=a("p"),ha=r("Convert a list of lists of token ids into a list of strings by calling decode."),fa=l(),K=a("div"),m(Je.$$.fragment),ma=l(),bo=a("p"),ua=r(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),_a=l(),Ge=a("p"),ga=r("Similar to doing "),ko=a("code"),va=r("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Ta=r("."),xa=l(),Dt=a("div"),m(Ke.$$.fragment),er=l(),ae=a("h2"),me=a("a"),So=a("span"),m(Qe.$$.fragment),ba=l(),wo=a("span"),ka=r("Speech2Text2Processor"),tr=l(),b=a("div"),m(Xe.$$.fragment),Sa=l(),yo=a("p"),wa=r(`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),ya=l(),F=a("p"),Wt=a("a"),$a=r("Speech2Text2Processor"),Ea=r(" offers all the functionalities of "),It=a("a"),za=r("AutoFeatureExtractor"),Pa=r(" and "),Vt=a("a"),ja=r("Speech2Text2Tokenizer"),Ca=r(`.
See the `),Ye=a("a"),$o=a("strong"),qa=r("call"),Fa=r("()"),Ma=r(" and "),Nt=a("a"),Aa=r("decode()"),La=r(" for more information."),Da=l(),ue=a("div"),m(Ze.$$.fragment),Wa=l(),U=a("p"),Ia=r(`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),Eo=a("code"),Va=r("__call__()"),Na=r(` and returns its output. If used in the context
`),Ot=a("a"),Oa=r("as_target_processor()"),Ua=r(` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),et=a("a"),zo=a("strong"),Ra=r("call"),Ha=r("()"),Ba=r(`. Please refer to the doctsring of the above two
methods for more information.`),Ja=l(),Q=a("div"),m(tt.$$.fragment),Ga=l(),Po=a("p"),Ka=r("Instantiate a processor associated with a pretrained model."),Qa=l(),m(_e.$$.fragment),Xa=l(),X=a("div"),m(ot.$$.fragment),Ya=l(),rt=a("p"),Za=r(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Ut=a("a"),en=r("from_pretrained()"),tn=r(" method."),on=l(),m(ge.$$.fragment),rn=l(),ve=a("div"),m(st.$$.fragment),sn=l(),at=a("p"),an=r("This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Rt=a("a"),nn=r("batch_decode()"),cn=r(`. Please
refer to the docstring of this method for more information.`),ln=l(),Te=a("div"),m(nt.$$.fragment),dn=l(),ct=a("p"),pn=r("This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Ht=a("a"),hn=r("decode()"),fn=r(`. Please refer
to the docstring of this method for more information.`),mn=l(),xe=a("div"),m(it.$$.fragment),un=l(),jo=a("p"),_n=r(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text2.`),or=l(),ne=a("h2"),be=a("a"),Co=a("span"),m(lt.$$.fragment),gn=l(),qo=a("span"),vn=r("Speech2Text2ForCausalLM"),rr=l(),W=a("div"),m(dt.$$.fragment),Tn=l(),R=a("p"),xn=r("The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Bt=a("a"),bn=r("EncoderDecoderModel"),kn=r(" and "),Fo=a("code"),Sn=r("SpeechEncoderDecoder"),wn=r(`.
This model inherits from `),Jt=a("a"),yn=r("PreTrainedModel"),$n=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),En=l(),pt=a("p"),zn=r("This model is also a PyTorch "),ht=a("a"),Pn=r("torch.nn.Module"),jn=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cn=l(),Y=a("div"),m(ft.$$.fragment),qn=l(),Mo=a("p"),Fn=r("Example:"),Mn=l(),m(mt.$$.fragment),this.h()},l(t){const p=di('[data-svelte="svelte-1phssyn"]',document.head);f=n(p,"META",{name:!0,content:!0}),p.forEach(o),I=d(t),x=n(t,"H1",{class:!0});var ut=c(x);E=n(ut,"A",{id:!0,class:!0,href:!0});var Ao=c(E);L=n(Ao,"SPAN",{});var Dn=c(L);u(S.$$.fragment,Dn),Dn.forEach(o),Ao.forEach(o),O=d(ut),D=n(ut,"SPAN",{});var Wn=c(D);P=s(Wn,"Speech2Text2"),Wn.forEach(o),ut.forEach(o),k=d(t),j=n(t,"H2",{class:!0});var ar=c(j);q=n(ar,"A",{id:!0,class:!0,href:!0});var In=c(q);ro=n(In,"SPAN",{});var Vn=c(ro);u(ye.$$.fragment,Vn),Vn.forEach(o),In.forEach(o),jr=d(ar),so=n(ar,"SPAN",{});var Nn=c(so);Cr=s(Nn,"Overview"),Nn.forEach(o),ar.forEach(o),Lo=d(t),B=n(t,"P",{});var Gt=c(B);qr=s(Gt,"The Speech2Text2 model is used together with "),vt=n(Gt,"A",{href:!0});var On=c(vt);Fr=s(On,"Wav2Vec2"),On.forEach(o),Mr=s(Gt,` for Speech Translation models proposed in
`),$e=n(Gt,"A",{href:!0,rel:!0});var Un=c($e);Ar=s(Un,"Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),Un.forEach(o),Lr=s(Gt,` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Gt.forEach(o),Do=d(t),w=n(t,"P",{});var M=c(w);Dr=s(M,"Speech2Text2 is a "),ao=n(M,"EM",{});var Rn=c(ao);Wr=s(Rn,"decoder-only"),Rn.forEach(o),Ir=s(M," transformer model that can be used with any speech "),no=n(M,"EM",{});var Hn=c(no);Vr=s(Hn,"encoder-only"),Hn.forEach(o),Nr=s(M,`, such as
`),Tt=n(M,"A",{href:!0});var Bn=c(Tt);Or=s(Bn,"Wav2Vec2"),Bn.forEach(o),Ur=s(M," or "),xt=n(M,"A",{href:!0});var Jn=c(xt);Rr=s(Jn,"HuBERT"),Jn.forEach(o),Hr=s(M,` for Speech-to-Text tasks. Please refer to the
`),bt=n(M,"A",{href:!0});var Gn=c(bt);Br=s(Gn,"SpeechEncoderDecoder"),Gn.forEach(o),Jr=s(M," class on how to combine Speech2Text2 with any speech "),co=n(M,"EM",{});var Kn=c(co);Gr=s(Kn,"encoder-only"),Kn.forEach(o),Kr=s(M,`
model.`),M.forEach(o),Wo=d(t),ce=n(t,"P",{});var nr=c(ce);Qr=s(nr,"This model was contributed by "),Ee=n(nr,"A",{href:!0,rel:!0});var Qn=c(Ee);Xr=s(Qn,"Patrick von Platen"),Qn.forEach(o),Yr=s(nr,"."),nr.forEach(o),Io=d(t),ie=n(t,"P",{});var cr=c(ie);Zr=s(cr,"The original code can be found "),ze=n(cr,"A",{href:!0,rel:!0});var Xn=c(ze);es=s(Xn,"here"),Xn.forEach(o),ts=s(cr,"."),cr.forEach(o),Vo=d(t),kt=n(t,"P",{});var Yn=c(kt);os=s(Yn,"Tips:"),Yn.forEach(o),No=d(t),J=n(t,"UL",{});var Kt=c(J);Pe=n(Kt,"LI",{});var ir=c(Pe);rs=s(ir,`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),je=n(ir,"A",{href:!0,rel:!0});var Zn=c(je);ss=s(Zn,"official models"),Zn.forEach(o),as=s(ir," ."),ir.forEach(o),ns=d(Kt),Ce=n(Kt,"LI",{});var lr=c(Ce);cs=s(lr,"Speech2Text2 is always used within the "),St=n(lr,"A",{href:!0});var ec=c(St);is=s(ec,"SpeechEncoderDecoder"),ec.forEach(o),ls=s(lr," framework."),lr.forEach(o),ds=d(Kt),qe=n(Kt,"LI",{});var dr=c(qe);ps=s(dr,"Speech2Text2\u2019s tokenizer is based on "),Fe=n(dr,"A",{href:!0,rel:!0});var tc=c(Fe);hs=s(tc,"fastBPE"),tc.forEach(o),fs=s(dr,"."),dr.forEach(o),Kt.forEach(o),Oo=d(t),ee=n(t,"H2",{class:!0});var pr=c(ee);le=n(pr,"A",{id:!0,class:!0,href:!0});var oc=c(le);io=n(oc,"SPAN",{});var rc=c(io);u(Me.$$.fragment,rc),rc.forEach(o),oc.forEach(o),ms=d(pr),lo=n(pr,"SPAN",{});var sc=c(lo);us=s(sc,"Inference"),sc.forEach(o),pr.forEach(o),Uo=d(t),G=n(t,"P",{});var Qt=c(G);_s=s(Qt,"Speech2Text2\u2019s "),wt=n(Qt,"A",{href:!0});var ac=c(wt);gs=s(ac,"SpeechEncoderDecoderModel"),ac.forEach(o),vs=s(Qt,` model accepts raw waveform input values from speech and
makes use of `),yt=n(Qt,"A",{href:!0});var nc=c(yt);Ts=s(nc,"generate()"),nc.forEach(o),xs=s(Qt,` to translate the input speech
autoregressively to the target language.`),Qt.forEach(o),Ro=d(t),z=n(t,"P",{});var V=c(z);bs=s(V,"The "),$t=n(V,"A",{href:!0});var cc=c($t);ks=s(cc,"Wav2Vec2FeatureExtractor"),cc.forEach(o),Ss=s(V,` class is responsible for preprocessing the input speech and
`),Et=n(V,"A",{href:!0});var ic=c(Et);ws=s(ic,"Speech2Text2Tokenizer"),ic.forEach(o),ys=s(V,` decodes the generated target tokens to the target string. The
`),zt=n(V,"A",{href:!0});var lc=c(zt);$s=s(lc,"Speech2Text2Processor"),lc.forEach(o),Es=s(V," wraps "),Pt=n(V,"A",{href:!0});var dc=c(Pt);zs=s(dc,"Wav2Vec2FeatureExtractor"),dc.forEach(o),Ps=s(V,` and
`),jt=n(V,"A",{href:!0});var pc=c(jt);js=s(pc,"Speech2Text2Tokenizer"),pc.forEach(o),Cs=s(V,` into a single instance to both extract the input features and decode the
predicted token ids.`),V.forEach(o),Ho=d(t),Ct=n(t,"UL",{});var hc=c(Ct);po=n(hc,"LI",{});var fc=c(po);qs=s(fc,"Step-by-step Speech Translation"),fc.forEach(o),hc.forEach(o),Bo=d(t),u(Ae.$$.fragment,t),Jo=d(t),qt=n(t,"UL",{});var mc=c(qt);Le=n(mc,"LI",{});var hr=c(Le);ho=n(hr,"P",{});var uc=c(ho);Fs=s(uc,"Speech Translation via Pipelines"),uc.forEach(o),Ms=d(hr),fo=n(hr,"P",{});var _c=c(fo);As=s(_c,"The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),_c.forEach(o),hr.forEach(o),mc.forEach(o),Go=d(t),u(De.$$.fragment,t),Ko=d(t),de=n(t,"P",{});var fr=c(de);Ls=s(fr,"See "),We=n(fr,"A",{href:!0,rel:!0});var gc=c(We);Ds=s(gc,"model hub"),gc.forEach(o),Ws=s(fr," to look for Speech2Text2 checkpoints."),fr.forEach(o),Qo=d(t),te=n(t,"H2",{class:!0});var mr=c(te);pe=n(mr,"A",{id:!0,class:!0,href:!0});var vc=c(pe);mo=n(vc,"SPAN",{});var Tc=c(mo);u(Ie.$$.fragment,Tc),Tc.forEach(o),vc.forEach(o),Is=d(mr),uo=n(mr,"SPAN",{});var xc=c(uo);Vs=s(xc,"Speech2Text2Config"),xc.forEach(o),mr.forEach(o),Xo=d(t),C=n(t,"DIV",{class:!0});var Z=c(C);u(Ve.$$.fragment,Z),Ns=d(Z),oe=n(Z,"P",{});var Xt=c(oe);Os=s(Xt,"This is the configuration class to store the configuration of a "),Ft=n(Xt,"A",{href:!0});var bc=c(Ft);Us=s(bc,"Speech2Text2ForCausalLM"),bc.forEach(o),Rs=s(Xt,`. It is used to
instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Ne=n(Xt,"A",{href:!0,rel:!0});var kc=c(Ne);Hs=s(kc,"facebook/s2t-small-librispeech-asr"),kc.forEach(o),Bs=s(Xt," architecture."),Xt.forEach(o),Js=d(Z),re=n(Z,"P",{});var Yt=c(re);Gs=s(Yt,"Configuration objects inherit from "),Mt=n(Yt,"A",{href:!0});var Sc=c(Mt);Ks=s(Sc,"PretrainedConfig"),Sc.forEach(o),Qs=s(Yt,` and can be used to control the model outputs. Read the
documentation from `),At=n(Yt,"A",{href:!0});var wc=c(At);Xs=s(wc,"PretrainedConfig"),wc.forEach(o),Ys=s(Yt," for more information."),Yt.forEach(o),Zs=d(Z),_o=n(Z,"P",{});var yc=c(_o);ea=s(yc,"Example:"),yc.forEach(o),ta=d(Z),u(Oe.$$.fragment,Z),Z.forEach(o),Yo=d(t),se=n(t,"H2",{class:!0});var ur=c(se);he=n(ur,"A",{id:!0,class:!0,href:!0});var $c=c(he);go=n($c,"SPAN",{});var Ec=c(go);u(Ue.$$.fragment,Ec),Ec.forEach(o),$c.forEach(o),oa=d(ur),vo=n(ur,"SPAN",{});var zc=c(vo);ra=s(zc,"Speech2TextTokenizer"),zc.forEach(o),ur.forEach(o),Zo=d(t),$=n(t,"DIV",{class:!0});var N=c($);u(Re.$$.fragment,N),sa=d(N),To=n(N,"P",{});var Pc=c(To);aa=s(Pc,"Constructs a Speech2Text2Tokenizer."),Pc.forEach(o),na=d(N),He=n(N,"P",{});var _r=c(He);ca=s(_r,"This tokenizer inherits from "),Lt=n(_r,"A",{href:!0});var jc=c(Lt);ia=s(jc,"PreTrainedTokenizer"),jc.forEach(o),la=s(_r,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),_r.forEach(o),da=d(N),fe=n(N,"DIV",{class:!0});var gr=c(fe);u(Be.$$.fragment,gr),pa=d(gr),xo=n(gr,"P",{});var Cc=c(xo);ha=s(Cc,"Convert a list of lists of token ids into a list of strings by calling decode."),Cc.forEach(o),gr.forEach(o),fa=d(N),K=n(N,"DIV",{class:!0});var Zt=c(K);u(Je.$$.fragment,Zt),ma=d(Zt),bo=n(Zt,"P",{});var qc=c(bo);ua=s(qc,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),qc.forEach(o),_a=d(Zt),Ge=n(Zt,"P",{});var vr=c(Ge);ga=s(vr,"Similar to doing "),ko=n(vr,"CODE",{});var Fc=c(ko);va=s(Fc,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Fc.forEach(o),Ta=s(vr,"."),vr.forEach(o),Zt.forEach(o),xa=d(N),Dt=n(N,"DIV",{class:!0});var Mc=c(Dt);u(Ke.$$.fragment,Mc),Mc.forEach(o),N.forEach(o),er=d(t),ae=n(t,"H2",{class:!0});var Tr=c(ae);me=n(Tr,"A",{id:!0,class:!0,href:!0});var Ac=c(me);So=n(Ac,"SPAN",{});var Lc=c(So);u(Qe.$$.fragment,Lc),Lc.forEach(o),Ac.forEach(o),ba=d(Tr),wo=n(Tr,"SPAN",{});var Dc=c(wo);ka=s(Dc,"Speech2Text2Processor"),Dc.forEach(o),Tr.forEach(o),tr=d(t),b=n(t,"DIV",{class:!0});var y=c(b);u(Xe.$$.fragment,y),Sa=d(y),yo=n(y,"P",{});var Wc=c(yo);wa=s(Wc,`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),Wc.forEach(o),ya=d(y),F=n(y,"P",{});var H=c(F);Wt=n(H,"A",{href:!0});var Ic=c(Wt);$a=s(Ic,"Speech2Text2Processor"),Ic.forEach(o),Ea=s(H," offers all the functionalities of "),It=n(H,"A",{href:!0});var Vc=c(It);za=s(Vc,"AutoFeatureExtractor"),Vc.forEach(o),Pa=s(H," and "),Vt=n(H,"A",{href:!0});var Nc=c(Vt);ja=s(Nc,"Speech2Text2Tokenizer"),Nc.forEach(o),Ca=s(H,`.
See the `),Ye=n(H,"A",{href:!0});var An=c(Ye);$o=n(An,"STRONG",{});var Oc=c($o);qa=s(Oc,"call"),Oc.forEach(o),Fa=s(An,"()"),An.forEach(o),Ma=s(H," and "),Nt=n(H,"A",{href:!0});var Uc=c(Nt);Aa=s(Uc,"decode()"),Uc.forEach(o),La=s(H," for more information."),H.forEach(o),Da=d(y),ue=n(y,"DIV",{class:!0});var xr=c(ue);u(Ze.$$.fragment,xr),Wa=d(xr),U=n(xr,"P",{});var ke=c(U);Ia=s(ke,`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),Eo=n(ke,"CODE",{});var Rc=c(Eo);Va=s(Rc,"__call__()"),Rc.forEach(o),Na=s(ke,` and returns its output. If used in the context
`),Ot=n(ke,"A",{href:!0});var Hc=c(Ot);Oa=s(Hc,"as_target_processor()"),Hc.forEach(o),Ua=s(ke,` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),et=n(ke,"A",{href:!0});var Ln=c(et);zo=n(Ln,"STRONG",{});var Bc=c(zo);Ra=s(Bc,"call"),Bc.forEach(o),Ha=s(Ln,"()"),Ln.forEach(o),Ba=s(ke,`. Please refer to the doctsring of the above two
methods for more information.`),ke.forEach(o),xr.forEach(o),Ja=d(y),Q=n(y,"DIV",{class:!0});var eo=c(Q);u(tt.$$.fragment,eo),Ga=d(eo),Po=n(eo,"P",{});var Jc=c(Po);Ka=s(Jc,"Instantiate a processor associated with a pretrained model."),Jc.forEach(o),Qa=d(eo),u(_e.$$.fragment,eo),eo.forEach(o),Xa=d(y),X=n(y,"DIV",{class:!0});var to=c(X);u(ot.$$.fragment,to),Ya=d(to),rt=n(to,"P",{});var br=c(rt);Za=s(br,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Ut=n(br,"A",{href:!0});var Gc=c(Ut);en=s(Gc,"from_pretrained()"),Gc.forEach(o),tn=s(br," method."),br.forEach(o),on=d(to),u(ge.$$.fragment,to),to.forEach(o),rn=d(y),ve=n(y,"DIV",{class:!0});var kr=c(ve);u(st.$$.fragment,kr),sn=d(kr),at=n(kr,"P",{});var Sr=c(at);an=s(Sr,"This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Rt=n(Sr,"A",{href:!0});var Kc=c(Rt);nn=s(Kc,"batch_decode()"),Kc.forEach(o),cn=s(Sr,`. Please
refer to the docstring of this method for more information.`),Sr.forEach(o),kr.forEach(o),ln=d(y),Te=n(y,"DIV",{class:!0});var wr=c(Te);u(nt.$$.fragment,wr),dn=d(wr),ct=n(wr,"P",{});var yr=c(ct);pn=s(yr,"This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Ht=n(yr,"A",{href:!0});var Qc=c(Ht);hn=s(Qc,"decode()"),Qc.forEach(o),fn=s(yr,`. Please refer
to the docstring of this method for more information.`),yr.forEach(o),wr.forEach(o),mn=d(y),xe=n(y,"DIV",{class:!0});var $r=c(xe);u(it.$$.fragment,$r),un=d($r),jo=n($r,"P",{});var Xc=c(jo);_n=s(Xc,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text2.`),Xc.forEach(o),$r.forEach(o),y.forEach(o),or=d(t),ne=n(t,"H2",{class:!0});var Er=c(ne);be=n(Er,"A",{id:!0,class:!0,href:!0});var Yc=c(be);Co=n(Yc,"SPAN",{});var Zc=c(Co);u(lt.$$.fragment,Zc),Zc.forEach(o),Yc.forEach(o),gn=d(Er),qo=n(Er,"SPAN",{});var ei=c(qo);vn=s(ei,"Speech2Text2ForCausalLM"),ei.forEach(o),Er.forEach(o),rr=d(t),W=n(t,"DIV",{class:!0});var Se=c(W);u(dt.$$.fragment,Se),Tn=d(Se),R=n(Se,"P",{});var we=c(R);xn=s(we,"The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Bt=n(we,"A",{href:!0});var ti=c(Bt);bn=s(ti,"EncoderDecoderModel"),ti.forEach(o),kn=s(we," and "),Fo=n(we,"CODE",{});var oi=c(Fo);Sn=s(oi,"SpeechEncoderDecoder"),oi.forEach(o),wn=s(we,`.
This model inherits from `),Jt=n(we,"A",{href:!0});var ri=c(Jt);yn=s(ri,"PreTrainedModel"),ri.forEach(o),$n=s(we,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),we.forEach(o),En=d(Se),pt=n(Se,"P",{});var zr=c(pt);zn=s(zr,"This model is also a PyTorch "),ht=n(zr,"A",{href:!0,rel:!0});var si=c(ht);Pn=s(si,"torch.nn.Module"),si.forEach(o),jn=s(zr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zr.forEach(o),Cn=d(Se),Y=n(Se,"DIV",{class:!0});var oo=c(Y);u(ft.$$.fragment,oo),qn=d(oo),Mo=n(oo,"P",{});var ai=c(Mo);Fn=s(ai,"Example:"),ai.forEach(o),Mn=d(oo),u(mt.$$.fragment,oo),oo.forEach(o),Se.forEach(o),this.h()},h(){i(f,"name","hf:doc:metadata"),i(f,"content",JSON.stringify(ui)),i(E,"id","speech2text2"),i(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(E,"href","#speech2text2"),i(x,"class","relative group"),i(q,"id","overview"),i(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(q,"href","#overview"),i(j,"class","relative group"),i(vt,"href","wav2vec2"),i($e,"href","https://arxiv.org/abs/2104.06678"),i($e,"rel","nofollow"),i(Tt,"href","wav2vec2"),i(xt,"href","hubert"),i(bt,"href","speech-encoder-decoder"),i(Ee,"href","https://huggingface.co/patrickvonplaten"),i(Ee,"rel","nofollow"),i(ze,"href","https://github.com/pytorch/fairseq/blob/1f7ef9ed1e1061f8c7f88f8b94c7186834398690/fairseq/models/wav2vec/wav2vec2_asr.py#L266"),i(ze,"rel","nofollow"),i(je,"href","https://huggingface.co/models?other=speech2text2"),i(je,"rel","nofollow"),i(St,"href","speech-encoder-decoder"),i(Fe,"href","https://github.com/glample/fastBPE"),i(Fe,"rel","nofollow"),i(le,"id","inference"),i(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(le,"href","#inference"),i(ee,"class","relative group"),i(wt,"href","/docs/transformers/v4.18.0/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i(yt,"href","/docs/transformers/v4.18.0/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),i($t,"href","/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),i(Et,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(zt,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),i(Pt,"href","/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),i(jt,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(We,"href","https://huggingface.co/models?filter=speech2text2"),i(We,"rel","nofollow"),i(pe,"id","transformers.Speech2Text2Config"),i(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(pe,"href","#transformers.Speech2Text2Config"),i(te,"class","relative group"),i(Ft,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2ForCausalLM"),i(Ne,"href","https://huggingface.co/facebook/s2t-small-librispeech-asr"),i(Ne,"rel","nofollow"),i(Mt,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),i(At,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),i(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(he,"id","transformers.Speech2Text2Tokenizer"),i(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(he,"href","#transformers.Speech2Text2Tokenizer"),i(se,"class","relative group"),i(Lt,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),i(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(me,"id","transformers.Speech2Text2Processor"),i(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(me,"href","#transformers.Speech2Text2Processor"),i(ae,"class","relative group"),i(Wt,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),i(It,"href","/docs/transformers/v4.18.0/en/model_doc/auto#transformers.AutoFeatureExtractor"),i(Vt,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(Ye,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.__call__"),i(Nt,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.decode"),i(Ot,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.as_target_processor"),i(et,"href","/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),i(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(Ut,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.from_pretrained"),i(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(Rt,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),i(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(Ht,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),i(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(be,"id","transformers.Speech2Text2ForCausalLM"),i(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(be,"href","#transformers.Speech2Text2ForCausalLM"),i(ne,"class","relative group"),i(Bt,"href","/docs/transformers/v4.18.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),i(Jt,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),i(ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),i(ht,"rel","nofollow"),i(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,p){e(document.head,f),h(t,I,p),h(t,x,p),e(x,E),e(E,L),_(S,L,null),e(x,O),e(x,D),e(D,P),h(t,k,p),h(t,j,p),e(j,q),e(q,ro),_(ye,ro,null),e(j,jr),e(j,so),e(so,Cr),h(t,Lo,p),h(t,B,p),e(B,qr),e(B,vt),e(vt,Fr),e(B,Mr),e(B,$e),e($e,Ar),e(B,Lr),h(t,Do,p),h(t,w,p),e(w,Dr),e(w,ao),e(ao,Wr),e(w,Ir),e(w,no),e(no,Vr),e(w,Nr),e(w,Tt),e(Tt,Or),e(w,Ur),e(w,xt),e(xt,Rr),e(w,Hr),e(w,bt),e(bt,Br),e(w,Jr),e(w,co),e(co,Gr),e(w,Kr),h(t,Wo,p),h(t,ce,p),e(ce,Qr),e(ce,Ee),e(Ee,Xr),e(ce,Yr),h(t,Io,p),h(t,ie,p),e(ie,Zr),e(ie,ze),e(ze,es),e(ie,ts),h(t,Vo,p),h(t,kt,p),e(kt,os),h(t,No,p),h(t,J,p),e(J,Pe),e(Pe,rs),e(Pe,je),e(je,ss),e(Pe,as),e(J,ns),e(J,Ce),e(Ce,cs),e(Ce,St),e(St,is),e(Ce,ls),e(J,ds),e(J,qe),e(qe,ps),e(qe,Fe),e(Fe,hs),e(qe,fs),h(t,Oo,p),h(t,ee,p),e(ee,le),e(le,io),_(Me,io,null),e(ee,ms),e(ee,lo),e(lo,us),h(t,Uo,p),h(t,G,p),e(G,_s),e(G,wt),e(wt,gs),e(G,vs),e(G,yt),e(yt,Ts),e(G,xs),h(t,Ro,p),h(t,z,p),e(z,bs),e(z,$t),e($t,ks),e(z,Ss),e(z,Et),e(Et,ws),e(z,ys),e(z,zt),e(zt,$s),e(z,Es),e(z,Pt),e(Pt,zs),e(z,Ps),e(z,jt),e(jt,js),e(z,Cs),h(t,Ho,p),h(t,Ct,p),e(Ct,po),e(po,qs),h(t,Bo,p),_(Ae,t,p),h(t,Jo,p),h(t,qt,p),e(qt,Le),e(Le,ho),e(ho,Fs),e(Le,Ms),e(Le,fo),e(fo,As),h(t,Go,p),_(De,t,p),h(t,Ko,p),h(t,de,p),e(de,Ls),e(de,We),e(We,Ds),e(de,Ws),h(t,Qo,p),h(t,te,p),e(te,pe),e(pe,mo),_(Ie,mo,null),e(te,Is),e(te,uo),e(uo,Vs),h(t,Xo,p),h(t,C,p),_(Ve,C,null),e(C,Ns),e(C,oe),e(oe,Os),e(oe,Ft),e(Ft,Us),e(oe,Rs),e(oe,Ne),e(Ne,Hs),e(oe,Bs),e(C,Js),e(C,re),e(re,Gs),e(re,Mt),e(Mt,Ks),e(re,Qs),e(re,At),e(At,Xs),e(re,Ys),e(C,Zs),e(C,_o),e(_o,ea),e(C,ta),_(Oe,C,null),h(t,Yo,p),h(t,se,p),e(se,he),e(he,go),_(Ue,go,null),e(se,oa),e(se,vo),e(vo,ra),h(t,Zo,p),h(t,$,p),_(Re,$,null),e($,sa),e($,To),e(To,aa),e($,na),e($,He),e(He,ca),e(He,Lt),e(Lt,ia),e(He,la),e($,da),e($,fe),_(Be,fe,null),e(fe,pa),e(fe,xo),e(xo,ha),e($,fa),e($,K),_(Je,K,null),e(K,ma),e(K,bo),e(bo,ua),e(K,_a),e(K,Ge),e(Ge,ga),e(Ge,ko),e(ko,va),e(Ge,Ta),e($,xa),e($,Dt),_(Ke,Dt,null),h(t,er,p),h(t,ae,p),e(ae,me),e(me,So),_(Qe,So,null),e(ae,ba),e(ae,wo),e(wo,ka),h(t,tr,p),h(t,b,p),_(Xe,b,null),e(b,Sa),e(b,yo),e(yo,wa),e(b,ya),e(b,F),e(F,Wt),e(Wt,$a),e(F,Ea),e(F,It),e(It,za),e(F,Pa),e(F,Vt),e(Vt,ja),e(F,Ca),e(F,Ye),e(Ye,$o),e($o,qa),e(Ye,Fa),e(F,Ma),e(F,Nt),e(Nt,Aa),e(F,La),e(b,Da),e(b,ue),_(Ze,ue,null),e(ue,Wa),e(ue,U),e(U,Ia),e(U,Eo),e(Eo,Va),e(U,Na),e(U,Ot),e(Ot,Oa),e(U,Ua),e(U,et),e(et,zo),e(zo,Ra),e(et,Ha),e(U,Ba),e(b,Ja),e(b,Q),_(tt,Q,null),e(Q,Ga),e(Q,Po),e(Po,Ka),e(Q,Qa),_(_e,Q,null),e(b,Xa),e(b,X),_(ot,X,null),e(X,Ya),e(X,rt),e(rt,Za),e(rt,Ut),e(Ut,en),e(rt,tn),e(X,on),_(ge,X,null),e(b,rn),e(b,ve),_(st,ve,null),e(ve,sn),e(ve,at),e(at,an),e(at,Rt),e(Rt,nn),e(at,cn),e(b,ln),e(b,Te),_(nt,Te,null),e(Te,dn),e(Te,ct),e(ct,pn),e(ct,Ht),e(Ht,hn),e(ct,fn),e(b,mn),e(b,xe),_(it,xe,null),e(xe,un),e(xe,jo),e(jo,_n),h(t,or,p),h(t,ne,p),e(ne,be),e(be,Co),_(lt,Co,null),e(ne,gn),e(ne,qo),e(qo,vn),h(t,rr,p),h(t,W,p),_(dt,W,null),e(W,Tn),e(W,R),e(R,xn),e(R,Bt),e(Bt,bn),e(R,kn),e(R,Fo),e(Fo,Sn),e(R,wn),e(R,Jt),e(Jt,yn),e(R,$n),e(W,En),e(W,pt),e(pt,zn),e(pt,ht),e(ht,Pn),e(pt,jn),e(W,Cn),e(W,Y),_(ft,Y,null),e(Y,qn),e(Y,Mo),e(Mo,Fn),e(Y,Mn),_(mt,Y,null),sr=!0},p(t,[p]){const ut={};p&2&&(ut.$$scope={dirty:p,ctx:t}),_e.$set(ut);const Ao={};p&2&&(Ao.$$scope={dirty:p,ctx:t}),ge.$set(Ao)},i(t){sr||(g(S.$$.fragment,t),g(ye.$$.fragment,t),g(Me.$$.fragment,t),g(Ae.$$.fragment,t),g(De.$$.fragment,t),g(Ie.$$.fragment,t),g(Ve.$$.fragment,t),g(Oe.$$.fragment,t),g(Ue.$$.fragment,t),g(Re.$$.fragment,t),g(Be.$$.fragment,t),g(Je.$$.fragment,t),g(Ke.$$.fragment,t),g(Qe.$$.fragment,t),g(Xe.$$.fragment,t),g(Ze.$$.fragment,t),g(tt.$$.fragment,t),g(_e.$$.fragment,t),g(ot.$$.fragment,t),g(ge.$$.fragment,t),g(st.$$.fragment,t),g(nt.$$.fragment,t),g(it.$$.fragment,t),g(lt.$$.fragment,t),g(dt.$$.fragment,t),g(ft.$$.fragment,t),g(mt.$$.fragment,t),sr=!0)},o(t){v(S.$$.fragment,t),v(ye.$$.fragment,t),v(Me.$$.fragment,t),v(Ae.$$.fragment,t),v(De.$$.fragment,t),v(Ie.$$.fragment,t),v(Ve.$$.fragment,t),v(Oe.$$.fragment,t),v(Ue.$$.fragment,t),v(Re.$$.fragment,t),v(Be.$$.fragment,t),v(Je.$$.fragment,t),v(Ke.$$.fragment,t),v(Qe.$$.fragment,t),v(Xe.$$.fragment,t),v(Ze.$$.fragment,t),v(tt.$$.fragment,t),v(_e.$$.fragment,t),v(ot.$$.fragment,t),v(ge.$$.fragment,t),v(st.$$.fragment,t),v(nt.$$.fragment,t),v(it.$$.fragment,t),v(lt.$$.fragment,t),v(dt.$$.fragment,t),v(ft.$$.fragment,t),v(mt.$$.fragment,t),sr=!1},d(t){o(f),t&&o(I),t&&o(x),T(S),t&&o(k),t&&o(j),T(ye),t&&o(Lo),t&&o(B),t&&o(Do),t&&o(w),t&&o(Wo),t&&o(ce),t&&o(Io),t&&o(ie),t&&o(Vo),t&&o(kt),t&&o(No),t&&o(J),t&&o(Oo),t&&o(ee),T(Me),t&&o(Uo),t&&o(G),t&&o(Ro),t&&o(z),t&&o(Ho),t&&o(Ct),t&&o(Bo),T(Ae,t),t&&o(Jo),t&&o(qt),t&&o(Go),T(De,t),t&&o(Ko),t&&o(de),t&&o(Qo),t&&o(te),T(Ie),t&&o(Xo),t&&o(C),T(Ve),T(Oe),t&&o(Yo),t&&o(se),T(Ue),t&&o(Zo),t&&o($),T(Re),T(Be),T(Je),T(Ke),t&&o(er),t&&o(ae),T(Qe),t&&o(tr),t&&o(b),T(Xe),T(Ze),T(tt),T(_e),T(ot),T(ge),T(st),T(nt),T(it),t&&o(or),t&&o(ne),T(lt),t&&o(rr),t&&o(W),T(dt),T(ft),T(mt)}}}const ui={local:"speech2text2",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2Text2Config",title:"Speech2Text2Config"},{local:"transformers.Speech2Text2Tokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2Text2Processor",title:"Speech2Text2Processor"},{local:"transformers.Speech2Text2ForCausalLM",title:"Speech2Text2ForCausalLM"}],title:"Speech2Text2"};function _i(gt){return pi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ki extends ci{constructor(f){super();ii(this,f,_i,mi,li,{})}}export{ki as default,ui as metadata};
