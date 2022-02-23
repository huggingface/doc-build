import{S as di,i as hi,s as pi,e as a,k as l,w as m,t as r,L as fi,c as n,d as o,m as d,a as c,x as u,h as s,b as i,J as e,g as p,y as _,q as g,o as v,B as T}from"../../chunks/vendor-e859c359.js";import{T as li}from"../../chunks/Tip-edc75249.js";import{D as I}from"../../chunks/Docstring-ade913b3.js";import{C as Vn}from"../../chunks/CodeBlock-ce4317c2.js";import{I as ut}from"../../chunks/IconCopyLink-5fae3b20.js";import"../../chunks/CopyButton-77addb3d.js";function mi(ye){let f,q,k,S,F,w,N,j;return{c(){f=a("p"),q=r(`This class method is simply calling AutoFeatureExtractor\u2019s
`),k=a("code"),S=r("from_pretrained"),F=r(` and Speech2Text2Tokenizer\u2019s
`),w=a("code"),N=r("from_pretrained"),j=r(`. Please refer to the
docstrings of the methods above for more information.`)},l(z){f=n(z,"P",{});var b=c(f);q=s(b,`This class method is simply calling AutoFeatureExtractor\u2019s
`),k=n(b,"CODE",{});var C=c(k);S=s(C,"from_pretrained"),C.forEach(o),F=s(b,` and Speech2Text2Tokenizer\u2019s
`),w=n(b,"CODE",{});var A=c(w);N=s(A,"from_pretrained"),A.forEach(o),j=s(b,`. Please refer to the
docstrings of the methods above for more information.`),b.forEach(o)},m(z,b){p(z,f,b),e(f,q),e(f,k),e(k,S),e(f,F),e(f,w),e(w,N),e(f,j)},d(z){z&&o(f)}}}function ui(ye){let f,q,k,S,F,w,N,j;return{c(){f=a("p"),q=r("This class method is simply calling "),k=a("code"),S=r("save_pretrained"),F=r(` and
`),w=a("code"),N=r("save_pretrained"),j=r(`. Please refer to the
docstrings of the methods above for more information.`)},l(z){f=n(z,"P",{});var b=c(f);q=s(b,"This class method is simply calling "),k=n(b,"CODE",{});var C=c(k);S=s(C,"save_pretrained"),C.forEach(o),F=s(b,` and
`),w=n(b,"CODE",{});var A=c(w);N=s(A,"save_pretrained"),A.forEach(o),j=s(b,`. Please refer to the
docstrings of the methods above for more information.`),b.forEach(o)},m(z,b){p(z,f,b),e(f,q),e(f,k),e(k,S),e(f,F),e(f,w),e(w,N),e(f,j)},d(z){z&&o(f)}}}function _i(ye){let f,q,k,S,F,w,N,j,z,b,C,A,so,$e,Cr,ao,qr,Do,H,Ar,_t,Mr,Lr,Ee,Fr,jr,Io,y,Dr,no,Ir,Wr,co,Vr,Nr,gt,Br,Or,vt,Ur,Rr,Tt,Hr,Jr,io,Gr,Kr,Wo,ce,Qr,Pe,Xr,Yr,Vo,ie,Zr,ze,es,ts,No,kt,os,Bo,J,Ce,rs,qe,ss,as,ns,Ae,cs,xt,is,ls,ds,Me,hs,bt,ps,Le,fs,ms,Oo,Z,le,lo,Fe,us,ho,_s,Uo,G,gs,St,vs,Ts,wt,ks,xs,Ro,P,bs,yt,Ss,ws,$t,ys,$s,Et,Es,Ps,Pt,zs,Cs,zt,qs,As,Ho,Ct,po,Ms,Jo,je,Go,qt,De,fo,Ls,Fs,mo,js,Ko,Ie,Qo,de,Ds,We,Is,Ws,Xo,ee,he,uo,Ve,Vs,_o,Ns,Yo,B,Ne,Bs,te,Os,At,Us,Rs,Be,Hs,Js,Gs,oe,Ks,Mt,Qs,Xs,Lt,Ys,Zs,Zo,re,pe,go,Oe,ea,vo,ta,er,E,Ue,oa,To,ra,sa,Re,aa,Ft,na,ca,ia,fe,He,la,ko,da,ha,K,Je,pa,xo,fa,ma,Ge,ua,bo,_a,ga,va,So,tr,se,me,wo,Ke,Ta,yo,ka,or,x,Qe,xa,$o,ba,Sa,M,jt,wa,ya,Dt,$a,Ea,It,Pa,za,Xe,Eo,Ca,qa,Aa,Wt,Ma,La,Fa,ue,Ye,ja,O,Da,Po,Ia,Wa,Vt,Va,Na,Ze,zo,Ba,Oa,Ua,Ra,Q,et,Ha,tt,Ja,Nt,Ga,Ka,Qa,_e,Xa,X,ot,Ya,ae,Za,Co,en,tn,Bt,on,rn,sn,ge,an,ve,rt,nn,st,cn,Ot,ln,dn,hn,Te,at,pn,nt,fn,Ut,mn,un,_n,ke,ct,gn,qo,vn,rr,ne,xe,Ao,it,Tn,Mo,kn,sr,D,lt,xn,U,bn,Rt,Sn,wn,Lo,yn,$n,Ht,En,Pn,zn,dt,Cn,ht,qn,An,Mn,Y,pt,Ln,Fo,Fn,jn,ft,ar;return w=new ut({}),$e=new ut({}),Fe=new ut({}),je=new Vn({props:{code:`import torch
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
generated_ids = model.generate(input_ids=inputs["input_values"], attention_mask=inputs["attention_mask"])

transcription = processor.batch_decode(generated_ids),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">import</span> torch</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2Text2Processor, SpeechEncoderDecoderModel</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">processor = Speech2Text2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):</span>
<span class="hljs-meta">...</span> <span class="language-python">    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])</span>
<span class="hljs-meta">...</span> <span class="language-python">    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech</span>
<span class="hljs-meta">...</span> <span class="language-python">    <span class="hljs-keyword">return</span> batch</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">ds = ds.<span class="hljs-built_in">map</span>(map_to_array)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">inputs = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], sampling_rate=<span class="hljs-number">16_000</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">generated_ids = model.generate(input_ids=inputs[<span class="hljs-string">&quot;input_values&quot;</span>], attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>])</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">transcription = processor.batch_decode(generated_ids)</span>`}}),Ie=new Vn({props:{code:`from datasets import load_dataset
from transformers import pipeline

librispeech_en = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
asr = pipeline("automatic-speech-recognition", model="facebook/s2t-wav2vec2-large-en-de", feature_extractor="facebook/s2t-wav2vec2-large-en-de")

translation_de = asr(librispeech_en[0]["file"]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">librispeech_en = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">asr = pipeline(<span class="hljs-string">&quot;automatic-speech-recognition&quot;</span>, model=<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>, feature_extractor=<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">translation_de = asr(librispeech_en[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;file&quot;</span>])</span>`}}),Ve=new ut({}),Ne=new I({props:{name:"class transformers.Speech2Text2Config",anchor:"transformers.Speech2Text2Config",parameters:[{name:"vocab_size",val:" = 10000"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text_2/configuration_speech_to_text_2.py#L29",parametersDescription:[{anchor:"transformers.Speech2Text2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Speech2Text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>`,name:"vocab_size"},{anchor:"transformers.Speech2Text2Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.Speech2Text2Config.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.Speech2Text2Config.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.Speech2Text2Config.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.Speech2Text2Config.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.Speech2Text2Config.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, and pooler.`,name:"dropout"},{anchor:"transformers.Speech2Text2Config.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Speech2Text2Config.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.Speech2Text2Config.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.Speech2Text2Config.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated<em>normal_initializer for initializing all weight matrices.
<a href="https://arxiv.org/abs/1909.11556%3E%60" rel="nofollow">https://arxiv.org/abs/1909.11556&gt;\`</a>__ for more details. decoder_layerdrop &#x2014; (<code>float</code>, _optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.Speech2Text2Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.Speech2Text2Config.max_source_positions",description:`<strong>max_source_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 6000) &#x2014;
The maximum sequence length of log-mel filter-bank features that this model might ever be used with.
max<em>target_positions &#x2014; (<code>int</code>, _optional</em>, defaults to 1024):
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).</p>
<p>Example &#x2014;:</p>
<blockquote>
<blockquote>
<blockquote>
<p>from transformers import Speech2Text2ForCausalLM, Speech2Text2Config</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<h1 class="relative group">
	<a id="initializing-a-speech2text2-s2t_transformer_s-style-configuration" class="header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full" href="#initializing-a-speech2text2-s2t_transformer_s-style-configuration">
		<span><iconcopylink></iconcopylink></span>
	</a>
	<span>
		Initializing a Speech2Text2 s2t_transformer_s style configuration
	</span>
</h1>

<p>configuration = Speech2Text2Config()</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<h1 class="relative group">
	<a id="initializing-a-model-from-the-s2t_transformer_s-style-configuration" class="header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full" href="#initializing-a-model-from-the-s2t_transformer_s-style-configuration">
		<span><iconcopylink></iconcopylink></span>
	</a>
	<span>
		Initializing a model from the s2t_transformer_s style configuration
	</span>
</h1>

<p>model = Speech2Text2ForCausalLM(configuration)</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<h1 class="relative group">
	<a id="accessing-the-model-configuration" class="header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full" href="#accessing-the-model-configuration">
		<span><iconcopylink></iconcopylink></span>
	</a>
	<span>
		Accessing the model configuration
	</span>
</h1>

<p>configuration = model.config</p>
</blockquote>
</blockquote>
</blockquote>`,name:"max_source_positions"}]}}),Oe=new ut({}),Ue=new I({props:{name:"class transformers.Speech2Text2Tokenizer",anchor:"transformers.Speech2Text2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_lower_case",val:" = False"},{name:"merges_file",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text_2/tokenization_speech_to_text_2.py#L67",parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Speech2Text2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Speech2Text2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Speech2Text2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Speech2Text2Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.</p>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}]}}),He=new I({props:{name:"batch_decode",anchor:"transformers.PreTrainedTokenizerBase.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/tokenization_utils_base.py#L3167",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],returnDescription:`
<p>The list of decoded sentences.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Je=new I({props:{name:"decode",anchor:"transformers.PreTrainedTokenizerBase.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/tokenization_utils_base.py#L3200",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.PreTrainedTokenizerBase.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizerBase.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],returnDescription:`
<p>The decoded sentence.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ke=new ut({}),Qe=new I({props:{name:"class transformers.Speech2Text2Processor",anchor:"transformers.Speech2Text2Processor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L25",parametersDescription:[{anchor:"transformers.Speech2Text2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>AutoFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/master/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2Text2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2Text2Tokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/master/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer">Speech2Text2Tokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}]}}),Ye=new I({props:{name:"__call__",anchor:"transformers.Speech2Text2Processor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L110"}}),et=new I({props:{name:"from_pretrained",anchor:"transformers.Speech2Text2Processor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L77",parametersDescription:[{anchor:"transformers.Speech2Text2Processor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<code>save_pretrained</code> method, e.g.,
<code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both <code>PreTrainedFeatureExtractor</code> and
<a href="/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a></li>
</ul>`,name:"pretrained_model_name_or_path"}]}}),_e=new li({props:{$$slots:{default:[mi]},$$scope:{ctx:ye}}}),ot=new I({props:{name:"save_pretrained",anchor:"transformers.Speech2Text2Processor.save_pretrained",parameters:[{name:"save_directory",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L56",parametersDescription:[{anchor:"transformers.Speech2Text2Processor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"}]}}),ge=new li({props:{$$slots:{default:[ui]},$$scope:{ctx:ye}}}),rt=new I({props:{name:"batch_decode",anchor:"transformers.Speech2Text2Processor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L120"}}),at=new I({props:{name:"decode",anchor:"transformers.Speech2Text2Processor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L128"}}),ct=new I({props:{name:"as_target_processor",anchor:"transformers.Speech2Text2Processor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L136"}}),it=new ut({}),lt=new I({props:{name:"class transformers.Speech2Text2ForCausalLM",anchor:"transformers.Speech2Text2ForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L745",parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/speech_to_text_2#transformers.Speech2Text2Config">Speech2Text2Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),pt=new I({props:{name:"forward",anchor:"transformers.Speech2Text2ForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L776",parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer">Speech2Text2Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a>
for details.</p>
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
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2
tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional
tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two
additional tensors are only required when the model is used as a decoder in a Sequence to Sequence
model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential
decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/speech_to_text_2#transformers.Speech2Text2Config"
>Speech2Text2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
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
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the
cached key, value states of the self-attention and the cross-attention layers if model is used in
encoder-decoder setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ft=new Vn({props:{code:`from transformers import SpeechEncoderDecoderModel, Speech2Text2ForCausalLM, Wav2Vec2Model, Speech2Text2Config, Wav2Vec2Config

encoder = Wav2Vec2Model(Wav2Vec2Config())
decoder = Speech2Text2ForCausalLM(Speech2Text2Config())

model = SpeechEncoderDecoderModel(encoder=encoder, decoder=decoder),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel, Speech2Text2ForCausalLM, Wav2Vec2Model, Speech2Text2Config, Wav2Vec2Config

<span class="hljs-meta">&gt;&gt;&gt; </span>encoder = Wav2Vec2Model(Wav2Vec2Config())
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder = Speech2Text2ForCausalLM(Speech2Text2Config())

<span class="hljs-comment"># init speech2text model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel(encoder=encoder, decoder=decoder)`}}),{c(){f=a("meta"),q=l(),k=a("h1"),S=a("a"),F=a("span"),m(w.$$.fragment),N=l(),j=a("span"),z=r("Speech2Text2"),b=l(),C=a("h2"),A=a("a"),so=a("span"),m($e.$$.fragment),Cr=l(),ao=a("span"),qr=r("Overview"),Do=l(),H=a("p"),Ar=r("The Speech2Text2 model is used together with "),_t=a("a"),Mr=r("Wav2Vec2"),Lr=r(` for Speech Translation models proposed in
`),Ee=a("a"),Fr=r("Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),jr=r(` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Io=l(),y=a("p"),Dr=r("Speech2Text2 is a "),no=a("em"),Ir=r("decoder-only"),Wr=r(" transformer model that can be used with any speech "),co=a("em"),Vr=r("encoder-only"),Nr=r(`, such as
`),gt=a("a"),Br=r("Wav2Vec2"),Or=r(" or "),vt=a("a"),Ur=r("HuBERT"),Rr=r(` for Speech-to-Text tasks. Please refer to the
`),Tt=a("a"),Hr=r("SpeechEncoderDecoder"),Jr=r(" class on how to combine Speech2Text2 with any speech "),io=a("em"),Gr=r("encoder-only"),Kr=r(`
model.`),Wo=l(),ce=a("p"),Qr=r("This model was contributed by "),Pe=a("a"),Xr=r("Patrick von Platen"),Yr=r("."),Vo=l(),ie=a("p"),Zr=r("The original code can be found "),ze=a("a"),es=r("here"),ts=r("."),No=l(),kt=a("p"),os=r("Tips:"),Bo=l(),J=a("ul"),Ce=a("li"),rs=r(`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),qe=a("a"),ss=r("official models"),as=r(" ."),ns=l(),Ae=a("li"),cs=r("Speech2Text2 is always used within the "),xt=a("a"),is=r("SpeechEncoderDecoder"),ls=r(" framework."),ds=l(),Me=a("li"),hs=r("Speech2Text2\u2019s tokenizer is based on "),bt=a("em"),ps=r("fastBPE <"),Le=a("a"),fs=r("https://github.com/glample/fastBPE>"),ms=r("."),Oo=l(),Z=a("h2"),le=a("a"),lo=a("span"),m(Fe.$$.fragment),us=l(),ho=a("span"),_s=r("Inference"),Uo=l(),G=a("p"),gs=r("Speech2Text2\u2019s "),St=a("a"),vs=r("SpeechEncoderDecoderModel"),Ts=r(` model accepts raw waveform input values from speech and
makes use of `),wt=a("a"),ks=r("generate()"),xs=r(` to translate the input speech
autoregressively to the target language.`),Ro=l(),P=a("p"),bs=r("The "),yt=a("a"),Ss=r("Wav2Vec2FeatureExtractor"),ws=r(` class is responsible for preprocessing the input speech and
`),$t=a("a"),ys=r("Speech2Text2Tokenizer"),$s=r(` decodes the generated target tokens to the target string. The
`),Et=a("a"),Es=r("Speech2Text2Processor"),Ps=r(" wraps "),Pt=a("a"),zs=r("Wav2Vec2FeatureExtractor"),Cs=r(` and
`),zt=a("a"),qs=r("Speech2Text2Tokenizer"),As=r(` into a single instance to both extract the input features and decode the
predicted token ids.`),Ho=l(),Ct=a("ul"),po=a("li"),Ms=r("Step-by-step Speech Translation"),Jo=l(),m(je.$$.fragment),Go=l(),qt=a("ul"),De=a("li"),fo=a("p"),Ls=r("Speech Translation via Pipelines"),Fs=l(),mo=a("p"),js=r("The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),Ko=l(),m(Ie.$$.fragment),Qo=l(),de=a("p"),Ds=r("See "),We=a("a"),Is=r("model hub"),Ws=r(" to look for Speech2Text2 checkpoints."),Xo=l(),ee=a("h2"),he=a("a"),uo=a("span"),m(Ve.$$.fragment),Vs=l(),_o=a("span"),Ns=r("Speech2Text2Config"),Yo=l(),B=a("div"),m(Ne.$$.fragment),Bs=l(),te=a("p"),Os=r("This is the configuration class to store the configuration of a "),At=a("a"),Us=r("Speech2Text2ForCausalLM"),Rs=r(`. It
is used to instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Be=a("a"),Hs=r("facebook/s2t-small-librispeech-asr"),Js=r(" architecture."),Gs=l(),oe=a("p"),Ks=r("Configuration objects inherit from "),Mt=a("a"),Qs=r("PretrainedConfig"),Xs=r(` and can be used to control the model
outputs. Read the documentation from `),Lt=a("a"),Ys=r("PretrainedConfig"),Zs=r(" for more information."),Zo=l(),re=a("h2"),pe=a("a"),go=a("span"),m(Oe.$$.fragment),ea=l(),vo=a("span"),ta=r("Speech2TextTokenizer"),er=l(),E=a("div"),m(Ue.$$.fragment),oa=l(),To=a("p"),ra=r("Constructs a Speech2Text2Tokenizer."),sa=l(),Re=a("p"),aa=r("This tokenizer inherits from "),Ft=a("a"),na=r("PreTrainedTokenizer"),ca=r(` which contains some of the main methods.
Users should refer to the superclass for more information regarding such methods.`),ia=l(),fe=a("div"),m(He.$$.fragment),la=l(),ko=a("p"),da=r("Convert a list of lists of token ids into a list of strings by calling decode."),ha=l(),K=a("div"),m(Je.$$.fragment),pa=l(),xo=a("p"),fa=r(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),ma=l(),Ge=a("p"),ua=r("Similar to doing "),bo=a("code"),_a=r("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),ga=r("."),va=l(),So=a("div"),tr=l(),se=a("h2"),me=a("a"),wo=a("span"),m(Ke.$$.fragment),Ta=l(),yo=a("span"),ka=r("Speech2Text2Processor"),or=l(),x=a("div"),m(Qe.$$.fragment),xa=l(),$o=a("p"),ba=r(`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),Sa=l(),M=a("p"),jt=a("a"),wa=r("Speech2Text2Processor"),ya=r(` offers all the functionalities of
`),Dt=a("a"),$a=r("AutoFeatureExtractor"),Ea=r(" and "),It=a("a"),Pa=r("Speech2Text2Tokenizer"),za=r(`. See the
`),Xe=a("a"),Eo=a("strong"),Ca=r("call"),qa=r("()"),Aa=r(" and "),Wt=a("a"),Ma=r("decode()"),La=r(` for
more information.`),Fa=l(),ue=a("div"),m(Ye.$$.fragment),ja=l(),O=a("p"),Da=r(`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),Po=a("code"),Ia=r("__call__()"),Wa=r(` and returns its output. If used in the context
`),Vt=a("a"),Va=r("as_target_processor()"),Na=r(` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),Ze=a("a"),zo=a("strong"),Ba=r("call"),Oa=r("()"),Ua=r(`. Please refer to the doctsring of
the above two methods for more information.`),Ra=l(),Q=a("div"),m(et.$$.fragment),Ha=l(),tt=a("p"),Ja=r("Instantiate a "),Nt=a("a"),Ga=r("Speech2Text2Processor"),Ka=r(" from a pretrained Speech2Text2 processor."),Qa=l(),m(_e.$$.fragment),Xa=l(),X=a("div"),m(ot.$$.fragment),Ya=l(),ae=a("p"),Za=r(`Save a Speech2Text2 feature extractor object and Speech2Text2 tokenizer object to the directory
`),Co=a("code"),en=r("save_directory"),tn=r(`, so that it can be re-loaded using the
`),Bt=a("a"),on=r("from_pretrained()"),rn=r(" class method."),sn=l(),m(ge.$$.fragment),an=l(),ve=a("div"),m(rt.$$.fragment),nn=l(),st=a("p"),cn=r(`This method forwards all its arguments to Speech2Text2Tokenizer\u2019s
`),Ot=a("a"),ln=r("batch_decode()"),dn=r(`. Please refer to the docstring of this method for more
information.`),hn=l(),Te=a("div"),m(at.$$.fragment),pn=l(),nt=a("p"),fn=r(`This method forwards all its arguments to Speech2Text2Tokenizer\u2019s
`),Ut=a("a"),mn=r("decode()"),un=r(`. Please refer to the docstring of this method for more
information.`),_n=l(),ke=a("div"),m(ct.$$.fragment),gn=l(),qo=a("p"),vn=r(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text2.`),rr=l(),ne=a("h2"),xe=a("a"),Ao=a("span"),m(it.$$.fragment),Tn=l(),Mo=a("span"),kn=r("Speech2Text2ForCausalLM"),sr=l(),D=a("div"),m(lt.$$.fragment),xn=l(),U=a("p"),bn=r("The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Rt=a("a"),Sn=r("EncoderDecoderModel"),wn=r(" and "),Lo=a("code"),yn=r("SpeechEncoderDecoder"),$n=r(`.
This model inherits from `),Ht=a("a"),En=r("PreTrainedModel"),Pn=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),zn=l(),dt=a("p"),Cn=r("This model is also a PyTorch "),ht=a("a"),qn=r("torch.nn.Module"),An=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Mn=l(),Y=a("div"),m(pt.$$.fragment),Ln=l(),Fo=a("p"),Fn=r("Example:"),jn=l(),m(ft.$$.fragment),this.h()},l(t){const h=fi('[data-svelte="svelte-1phssyn"]',document.head);f=n(h,"META",{name:!0,content:!0}),h.forEach(o),q=d(t),k=n(t,"H1",{class:!0});var mt=c(k);S=n(mt,"A",{id:!0,class:!0,href:!0});var jo=c(S);F=n(jo,"SPAN",{});var Nn=c(F);u(w.$$.fragment,Nn),Nn.forEach(o),jo.forEach(o),N=d(mt),j=n(mt,"SPAN",{});var Bn=c(j);z=s(Bn,"Speech2Text2"),Bn.forEach(o),mt.forEach(o),b=d(t),C=n(t,"H2",{class:!0});var nr=c(C);A=n(nr,"A",{id:!0,class:!0,href:!0});var On=c(A);so=n(On,"SPAN",{});var Un=c(so);u($e.$$.fragment,Un),Un.forEach(o),On.forEach(o),Cr=d(nr),ao=n(nr,"SPAN",{});var Rn=c(ao);qr=s(Rn,"Overview"),Rn.forEach(o),nr.forEach(o),Do=d(t),H=n(t,"P",{});var Jt=c(H);Ar=s(Jt,"The Speech2Text2 model is used together with "),_t=n(Jt,"A",{href:!0});var Hn=c(_t);Mr=s(Hn,"Wav2Vec2"),Hn.forEach(o),Lr=s(Jt,` for Speech Translation models proposed in
`),Ee=n(Jt,"A",{href:!0,rel:!0});var Jn=c(Ee);Fr=s(Jn,"Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),Jn.forEach(o),jr=s(Jt,` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Jt.forEach(o),Io=d(t),y=n(t,"P",{});var L=c(y);Dr=s(L,"Speech2Text2 is a "),no=n(L,"EM",{});var Gn=c(no);Ir=s(Gn,"decoder-only"),Gn.forEach(o),Wr=s(L," transformer model that can be used with any speech "),co=n(L,"EM",{});var Kn=c(co);Vr=s(Kn,"encoder-only"),Kn.forEach(o),Nr=s(L,`, such as
`),gt=n(L,"A",{href:!0});var Qn=c(gt);Br=s(Qn,"Wav2Vec2"),Qn.forEach(o),Or=s(L," or "),vt=n(L,"A",{href:!0});var Xn=c(vt);Ur=s(Xn,"HuBERT"),Xn.forEach(o),Rr=s(L,` for Speech-to-Text tasks. Please refer to the
`),Tt=n(L,"A",{href:!0});var Yn=c(Tt);Hr=s(Yn,"SpeechEncoderDecoder"),Yn.forEach(o),Jr=s(L," class on how to combine Speech2Text2 with any speech "),io=n(L,"EM",{});var Zn=c(io);Gr=s(Zn,"encoder-only"),Zn.forEach(o),Kr=s(L,`
model.`),L.forEach(o),Wo=d(t),ce=n(t,"P",{});var cr=c(ce);Qr=s(cr,"This model was contributed by "),Pe=n(cr,"A",{href:!0,rel:!0});var ec=c(Pe);Xr=s(ec,"Patrick von Platen"),ec.forEach(o),Yr=s(cr,"."),cr.forEach(o),Vo=d(t),ie=n(t,"P",{});var ir=c(ie);Zr=s(ir,"The original code can be found "),ze=n(ir,"A",{href:!0,rel:!0});var tc=c(ze);es=s(tc,"here"),tc.forEach(o),ts=s(ir,"."),ir.forEach(o),No=d(t),kt=n(t,"P",{});var oc=c(kt);os=s(oc,"Tips:"),oc.forEach(o),Bo=d(t),J=n(t,"UL",{});var Gt=c(J);Ce=n(Gt,"LI",{});var lr=c(Ce);rs=s(lr,`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),qe=n(lr,"A",{href:!0,rel:!0});var rc=c(qe);ss=s(rc,"official models"),rc.forEach(o),as=s(lr," ."),lr.forEach(o),ns=d(Gt),Ae=n(Gt,"LI",{});var dr=c(Ae);cs=s(dr,"Speech2Text2 is always used within the "),xt=n(dr,"A",{href:!0});var sc=c(xt);is=s(sc,"SpeechEncoderDecoder"),sc.forEach(o),ls=s(dr," framework."),dr.forEach(o),ds=d(Gt),Me=n(Gt,"LI",{});var hr=c(Me);hs=s(hr,"Speech2Text2\u2019s tokenizer is based on "),bt=n(hr,"EM",{});var Dn=c(bt);ps=s(Dn,"fastBPE <"),Le=n(Dn,"A",{href:!0,rel:!0});var ac=c(Le);fs=s(ac,"https://github.com/glample/fastBPE>"),ac.forEach(o),Dn.forEach(o),ms=s(hr,"."),hr.forEach(o),Gt.forEach(o),Oo=d(t),Z=n(t,"H2",{class:!0});var pr=c(Z);le=n(pr,"A",{id:!0,class:!0,href:!0});var nc=c(le);lo=n(nc,"SPAN",{});var cc=c(lo);u(Fe.$$.fragment,cc),cc.forEach(o),nc.forEach(o),us=d(pr),ho=n(pr,"SPAN",{});var ic=c(ho);_s=s(ic,"Inference"),ic.forEach(o),pr.forEach(o),Uo=d(t),G=n(t,"P",{});var Kt=c(G);gs=s(Kt,"Speech2Text2\u2019s "),St=n(Kt,"A",{href:!0});var lc=c(St);vs=s(lc,"SpeechEncoderDecoderModel"),lc.forEach(o),Ts=s(Kt,` model accepts raw waveform input values from speech and
makes use of `),wt=n(Kt,"A",{href:!0});var dc=c(wt);ks=s(dc,"generate()"),dc.forEach(o),xs=s(Kt,` to translate the input speech
autoregressively to the target language.`),Kt.forEach(o),Ro=d(t),P=n(t,"P",{});var W=c(P);bs=s(W,"The "),yt=n(W,"A",{href:!0});var hc=c(yt);Ss=s(hc,"Wav2Vec2FeatureExtractor"),hc.forEach(o),ws=s(W,` class is responsible for preprocessing the input speech and
`),$t=n(W,"A",{href:!0});var pc=c($t);ys=s(pc,"Speech2Text2Tokenizer"),pc.forEach(o),$s=s(W,` decodes the generated target tokens to the target string. The
`),Et=n(W,"A",{href:!0});var fc=c(Et);Es=s(fc,"Speech2Text2Processor"),fc.forEach(o),Ps=s(W," wraps "),Pt=n(W,"A",{href:!0});var mc=c(Pt);zs=s(mc,"Wav2Vec2FeatureExtractor"),mc.forEach(o),Cs=s(W,` and
`),zt=n(W,"A",{href:!0});var uc=c(zt);qs=s(uc,"Speech2Text2Tokenizer"),uc.forEach(o),As=s(W,` into a single instance to both extract the input features and decode the
predicted token ids.`),W.forEach(o),Ho=d(t),Ct=n(t,"UL",{});var _c=c(Ct);po=n(_c,"LI",{});var gc=c(po);Ms=s(gc,"Step-by-step Speech Translation"),gc.forEach(o),_c.forEach(o),Jo=d(t),u(je.$$.fragment,t),Go=d(t),qt=n(t,"UL",{});var vc=c(qt);De=n(vc,"LI",{});var fr=c(De);fo=n(fr,"P",{});var Tc=c(fo);Ls=s(Tc,"Speech Translation via Pipelines"),Tc.forEach(o),Fs=d(fr),mo=n(fr,"P",{});var kc=c(mo);js=s(kc,"The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),kc.forEach(o),fr.forEach(o),vc.forEach(o),Ko=d(t),u(Ie.$$.fragment,t),Qo=d(t),de=n(t,"P",{});var mr=c(de);Ds=s(mr,"See "),We=n(mr,"A",{href:!0,rel:!0});var xc=c(We);Is=s(xc,"model hub"),xc.forEach(o),Ws=s(mr," to look for Speech2Text2 checkpoints."),mr.forEach(o),Xo=d(t),ee=n(t,"H2",{class:!0});var ur=c(ee);he=n(ur,"A",{id:!0,class:!0,href:!0});var bc=c(he);uo=n(bc,"SPAN",{});var Sc=c(uo);u(Ve.$$.fragment,Sc),Sc.forEach(o),bc.forEach(o),Vs=d(ur),_o=n(ur,"SPAN",{});var wc=c(_o);Ns=s(wc,"Speech2Text2Config"),wc.forEach(o),ur.forEach(o),Yo=d(t),B=n(t,"DIV",{class:!0});var Qt=c(B);u(Ne.$$.fragment,Qt),Bs=d(Qt),te=n(Qt,"P",{});var Xt=c(te);Os=s(Xt,"This is the configuration class to store the configuration of a "),At=n(Xt,"A",{href:!0});var yc=c(At);Us=s(yc,"Speech2Text2ForCausalLM"),yc.forEach(o),Rs=s(Xt,`. It
is used to instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Be=n(Xt,"A",{href:!0,rel:!0});var $c=c(Be);Hs=s($c,"facebook/s2t-small-librispeech-asr"),$c.forEach(o),Js=s(Xt," architecture."),Xt.forEach(o),Gs=d(Qt),oe=n(Qt,"P",{});var Yt=c(oe);Ks=s(Yt,"Configuration objects inherit from "),Mt=n(Yt,"A",{href:!0});var Ec=c(Mt);Qs=s(Ec,"PretrainedConfig"),Ec.forEach(o),Xs=s(Yt,` and can be used to control the model
outputs. Read the documentation from `),Lt=n(Yt,"A",{href:!0});var Pc=c(Lt);Ys=s(Pc,"PretrainedConfig"),Pc.forEach(o),Zs=s(Yt," for more information."),Yt.forEach(o),Qt.forEach(o),Zo=d(t),re=n(t,"H2",{class:!0});var _r=c(re);pe=n(_r,"A",{id:!0,class:!0,href:!0});var zc=c(pe);go=n(zc,"SPAN",{});var Cc=c(go);u(Oe.$$.fragment,Cc),Cc.forEach(o),zc.forEach(o),ea=d(_r),vo=n(_r,"SPAN",{});var qc=c(vo);ta=s(qc,"Speech2TextTokenizer"),qc.forEach(o),_r.forEach(o),er=d(t),E=n(t,"DIV",{class:!0});var V=c(E);u(Ue.$$.fragment,V),oa=d(V),To=n(V,"P",{});var Ac=c(To);ra=s(Ac,"Constructs a Speech2Text2Tokenizer."),Ac.forEach(o),sa=d(V),Re=n(V,"P",{});var gr=c(Re);aa=s(gr,"This tokenizer inherits from "),Ft=n(gr,"A",{href:!0});var Mc=c(Ft);na=s(Mc,"PreTrainedTokenizer"),Mc.forEach(o),ca=s(gr,` which contains some of the main methods.
Users should refer to the superclass for more information regarding such methods.`),gr.forEach(o),ia=d(V),fe=n(V,"DIV",{class:!0});var vr=c(fe);u(He.$$.fragment,vr),la=d(vr),ko=n(vr,"P",{});var Lc=c(ko);da=s(Lc,"Convert a list of lists of token ids into a list of strings by calling decode."),Lc.forEach(o),vr.forEach(o),ha=d(V),K=n(V,"DIV",{class:!0});var Zt=c(K);u(Je.$$.fragment,Zt),pa=d(Zt),xo=n(Zt,"P",{});var Fc=c(xo);fa=s(Fc,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Fc.forEach(o),ma=d(Zt),Ge=n(Zt,"P",{});var Tr=c(Ge);ua=s(Tr,"Similar to doing "),bo=n(Tr,"CODE",{});var jc=c(bo);_a=s(jc,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),jc.forEach(o),ga=s(Tr,"."),Tr.forEach(o),Zt.forEach(o),va=d(V),So=n(V,"DIV",{class:!0}),c(So).forEach(o),V.forEach(o),tr=d(t),se=n(t,"H2",{class:!0});var kr=c(se);me=n(kr,"A",{id:!0,class:!0,href:!0});var Dc=c(me);wo=n(Dc,"SPAN",{});var Ic=c(wo);u(Ke.$$.fragment,Ic),Ic.forEach(o),Dc.forEach(o),Ta=d(kr),yo=n(kr,"SPAN",{});var Wc=c(yo);ka=s(Wc,"Speech2Text2Processor"),Wc.forEach(o),kr.forEach(o),or=d(t),x=n(t,"DIV",{class:!0});var $=c(x);u(Qe.$$.fragment,$),xa=d($),$o=n($,"P",{});var Vc=c($o);ba=s(Vc,`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),Vc.forEach(o),Sa=d($),M=n($,"P",{});var R=c(M);jt=n(R,"A",{href:!0});var Nc=c(jt);wa=s(Nc,"Speech2Text2Processor"),Nc.forEach(o),ya=s(R,` offers all the functionalities of
`),Dt=n(R,"A",{href:!0});var Bc=c(Dt);$a=s(Bc,"AutoFeatureExtractor"),Bc.forEach(o),Ea=s(R," and "),It=n(R,"A",{href:!0});var Oc=c(It);Pa=s(Oc,"Speech2Text2Tokenizer"),Oc.forEach(o),za=s(R,`. See the
`),Xe=n(R,"A",{href:!0});var In=c(Xe);Eo=n(In,"STRONG",{});var Uc=c(Eo);Ca=s(Uc,"call"),Uc.forEach(o),qa=s(In,"()"),In.forEach(o),Aa=s(R," and "),Wt=n(R,"A",{href:!0});var Rc=c(Wt);Ma=s(Rc,"decode()"),Rc.forEach(o),La=s(R,` for
more information.`),R.forEach(o),Fa=d($),ue=n($,"DIV",{class:!0});var xr=c(ue);u(Ye.$$.fragment,xr),ja=d(xr),O=n(xr,"P",{});var be=c(O);Da=s(be,`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),Po=n(be,"CODE",{});var Hc=c(Po);Ia=s(Hc,"__call__()"),Hc.forEach(o),Wa=s(be,` and returns its output. If used in the context
`),Vt=n(be,"A",{href:!0});var Jc=c(Vt);Va=s(Jc,"as_target_processor()"),Jc.forEach(o),Na=s(be,` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),Ze=n(be,"A",{href:!0});var Wn=c(Ze);zo=n(Wn,"STRONG",{});var Gc=c(zo);Ba=s(Gc,"call"),Gc.forEach(o),Oa=s(Wn,"()"),Wn.forEach(o),Ua=s(be,`. Please refer to the doctsring of
the above two methods for more information.`),be.forEach(o),xr.forEach(o),Ra=d($),Q=n($,"DIV",{class:!0});var eo=c(Q);u(et.$$.fragment,eo),Ha=d(eo),tt=n(eo,"P",{});var br=c(tt);Ja=s(br,"Instantiate a "),Nt=n(br,"A",{href:!0});var Kc=c(Nt);Ga=s(Kc,"Speech2Text2Processor"),Kc.forEach(o),Ka=s(br," from a pretrained Speech2Text2 processor."),br.forEach(o),Qa=d(eo),u(_e.$$.fragment,eo),eo.forEach(o),Xa=d($),X=n($,"DIV",{class:!0});var to=c(X);u(ot.$$.fragment,to),Ya=d(to),ae=n(to,"P",{});var oo=c(ae);Za=s(oo,`Save a Speech2Text2 feature extractor object and Speech2Text2 tokenizer object to the directory
`),Co=n(oo,"CODE",{});var Qc=c(Co);en=s(Qc,"save_directory"),Qc.forEach(o),tn=s(oo,`, so that it can be re-loaded using the
`),Bt=n(oo,"A",{href:!0});var Xc=c(Bt);on=s(Xc,"from_pretrained()"),Xc.forEach(o),rn=s(oo," class method."),oo.forEach(o),sn=d(to),u(ge.$$.fragment,to),to.forEach(o),an=d($),ve=n($,"DIV",{class:!0});var Sr=c(ve);u(rt.$$.fragment,Sr),nn=d(Sr),st=n(Sr,"P",{});var wr=c(st);cn=s(wr,`This method forwards all its arguments to Speech2Text2Tokenizer\u2019s
`),Ot=n(wr,"A",{href:!0});var Yc=c(Ot);ln=s(Yc,"batch_decode()"),Yc.forEach(o),dn=s(wr,`. Please refer to the docstring of this method for more
information.`),wr.forEach(o),Sr.forEach(o),hn=d($),Te=n($,"DIV",{class:!0});var yr=c(Te);u(at.$$.fragment,yr),pn=d(yr),nt=n(yr,"P",{});var $r=c(nt);fn=s($r,`This method forwards all its arguments to Speech2Text2Tokenizer\u2019s
`),Ut=n($r,"A",{href:!0});var Zc=c(Ut);mn=s(Zc,"decode()"),Zc.forEach(o),un=s($r,`. Please refer to the docstring of this method for more
information.`),$r.forEach(o),yr.forEach(o),_n=d($),ke=n($,"DIV",{class:!0});var Er=c(ke);u(ct.$$.fragment,Er),gn=d(Er),qo=n(Er,"P",{});var ei=c(qo);vn=s(ei,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text2.`),ei.forEach(o),Er.forEach(o),$.forEach(o),rr=d(t),ne=n(t,"H2",{class:!0});var Pr=c(ne);xe=n(Pr,"A",{id:!0,class:!0,href:!0});var ti=c(xe);Ao=n(ti,"SPAN",{});var oi=c(Ao);u(it.$$.fragment,oi),oi.forEach(o),ti.forEach(o),Tn=d(Pr),Mo=n(Pr,"SPAN",{});var ri=c(Mo);kn=s(ri,"Speech2Text2ForCausalLM"),ri.forEach(o),Pr.forEach(o),sr=d(t),D=n(t,"DIV",{class:!0});var Se=c(D);u(lt.$$.fragment,Se),xn=d(Se),U=n(Se,"P",{});var we=c(U);bn=s(we,"The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Rt=n(we,"A",{href:!0});var si=c(Rt);Sn=s(si,"EncoderDecoderModel"),si.forEach(o),wn=s(we," and "),Lo=n(we,"CODE",{});var ai=c(Lo);yn=s(ai,"SpeechEncoderDecoder"),ai.forEach(o),$n=s(we,`.
This model inherits from `),Ht=n(we,"A",{href:!0});var ni=c(Ht);En=s(ni,"PreTrainedModel"),ni.forEach(o),Pn=s(we,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),we.forEach(o),zn=d(Se),dt=n(Se,"P",{});var zr=c(dt);Cn=s(zr,"This model is also a PyTorch "),ht=n(zr,"A",{href:!0,rel:!0});var ci=c(ht);qn=s(ci,"torch.nn.Module"),ci.forEach(o),An=s(zr,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),zr.forEach(o),Mn=d(Se),Y=n(Se,"DIV",{class:!0});var ro=c(Y);u(pt.$$.fragment,ro),Ln=d(ro),Fo=n(ro,"P",{});var ii=c(Fo);Fn=s(ii,"Example:"),ii.forEach(o),jn=d(ro),u(ft.$$.fragment,ro),ro.forEach(o),Se.forEach(o),this.h()},h(){i(f,"name","hf:doc:metadata"),i(f,"content",JSON.stringify(gi)),i(S,"id","speech2text2"),i(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(S,"href","#speech2text2"),i(k,"class","relative group"),i(A,"id","overview"),i(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(A,"href","#overview"),i(C,"class","relative group"),i(_t,"href","/docs/transformers/master/en/wav2vec2"),i(Ee,"href","https://arxiv.org/abs/2104.06678"),i(Ee,"rel","nofollow"),i(gt,"href","/docs/transformers/master/en/wav2vec2"),i(vt,"href","/docs/transformers/master/en/hubert"),i(Tt,"href","/docs/transformers/master/en/speechencoderdecoder"),i(Pe,"href","https://huggingface.co/patrickvonplaten"),i(Pe,"rel","nofollow"),i(ze,"href","https://github.com/pytorch/fairseq/blob/1f7ef9ed1e1061f8c7f88f8b94c7186834398690/fairseq/models/wav2vec/wav2vec2_asr.py#L266"),i(ze,"rel","nofollow"),i(qe,"href","https://huggingface.co/models?other=speech2text2"),i(qe,"rel","nofollow"),i(xt,"href","/docs/transformers/master/en/speechencoderdecoder"),i(Le,"href","https://github.com/glample/fastBPE%3E"),i(Le,"rel","nofollow"),i(le,"id","inference"),i(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(le,"href","#inference"),i(Z,"class","relative group"),i(St,"href","/docs/transformers/master/en/model_doc/speechencoderdecoder#transformers.SpeechEncoderDecoderModel"),i(wt,"href","/docs/transformers/master/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),i(yt,"href","/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),i($t,"href","/docs/transformers/master/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(Et,"href","/docs/transformers/master/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),i(Pt,"href","/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),i(zt,"href","/docs/transformers/master/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(We,"href","https://huggingface.co/models?filter=speech2text2"),i(We,"rel","nofollow"),i(he,"id","transformers.Speech2Text2Config"),i(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(he,"href","#transformers.Speech2Text2Config"),i(ee,"class","relative group"),i(At,"href","/docs/transformers/master/en/model_doc/speech_to_text_2#transformers.Speech2Text2ForCausalLM"),i(Be,"href","https://huggingface.co/facebook/s2t-small-librispeech-asr"),i(Be,"rel","nofollow"),i(Mt,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),i(Lt,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),i(B,"class","docstring"),i(pe,"id","transformers.Speech2Text2Tokenizer"),i(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(pe,"href","#transformers.Speech2Text2Tokenizer"),i(re,"class","relative group"),i(Ft,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),i(fe,"class","docstring"),i(K,"class","docstring"),i(So,"class","docstring"),i(E,"class","docstring"),i(me,"id","transformers.Speech2Text2Processor"),i(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(me,"href","#transformers.Speech2Text2Processor"),i(se,"class","relative group"),i(jt,"href","/docs/transformers/master/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),i(Dt,"href","/docs/transformers/master/en/model_doc/auto#transformers.AutoFeatureExtractor"),i(It,"href","/docs/transformers/master/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(Xe,"href","/docs/transformers/master/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.__call__"),i(Wt,"href","/docs/transformers/master/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.decode"),i(Vt,"href","/docs/transformers/master/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.as_target_processor"),i(Ze,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),i(ue,"class","docstring"),i(Nt,"href","/docs/transformers/master/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),i(Q,"class","docstring"),i(Bt,"href","/docs/transformers/master/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.from_pretrained"),i(X,"class","docstring"),i(Ot,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),i(ve,"class","docstring"),i(Ut,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),i(Te,"class","docstring"),i(ke,"class","docstring"),i(x,"class","docstring"),i(xe,"id","transformers.Speech2Text2ForCausalLM"),i(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(xe,"href","#transformers.Speech2Text2ForCausalLM"),i(ne,"class","relative group"),i(Rt,"href","/docs/transformers/master/en/model_doc/encoderdecoder#transformers.EncoderDecoderModel"),i(Ht,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),i(ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),i(ht,"rel","nofollow"),i(Y,"class","docstring"),i(D,"class","docstring")},m(t,h){e(document.head,f),p(t,q,h),p(t,k,h),e(k,S),e(S,F),_(w,F,null),e(k,N),e(k,j),e(j,z),p(t,b,h),p(t,C,h),e(C,A),e(A,so),_($e,so,null),e(C,Cr),e(C,ao),e(ao,qr),p(t,Do,h),p(t,H,h),e(H,Ar),e(H,_t),e(_t,Mr),e(H,Lr),e(H,Ee),e(Ee,Fr),e(H,jr),p(t,Io,h),p(t,y,h),e(y,Dr),e(y,no),e(no,Ir),e(y,Wr),e(y,co),e(co,Vr),e(y,Nr),e(y,gt),e(gt,Br),e(y,Or),e(y,vt),e(vt,Ur),e(y,Rr),e(y,Tt),e(Tt,Hr),e(y,Jr),e(y,io),e(io,Gr),e(y,Kr),p(t,Wo,h),p(t,ce,h),e(ce,Qr),e(ce,Pe),e(Pe,Xr),e(ce,Yr),p(t,Vo,h),p(t,ie,h),e(ie,Zr),e(ie,ze),e(ze,es),e(ie,ts),p(t,No,h),p(t,kt,h),e(kt,os),p(t,Bo,h),p(t,J,h),e(J,Ce),e(Ce,rs),e(Ce,qe),e(qe,ss),e(Ce,as),e(J,ns),e(J,Ae),e(Ae,cs),e(Ae,xt),e(xt,is),e(Ae,ls),e(J,ds),e(J,Me),e(Me,hs),e(Me,bt),e(bt,ps),e(bt,Le),e(Le,fs),e(Me,ms),p(t,Oo,h),p(t,Z,h),e(Z,le),e(le,lo),_(Fe,lo,null),e(Z,us),e(Z,ho),e(ho,_s),p(t,Uo,h),p(t,G,h),e(G,gs),e(G,St),e(St,vs),e(G,Ts),e(G,wt),e(wt,ks),e(G,xs),p(t,Ro,h),p(t,P,h),e(P,bs),e(P,yt),e(yt,Ss),e(P,ws),e(P,$t),e($t,ys),e(P,$s),e(P,Et),e(Et,Es),e(P,Ps),e(P,Pt),e(Pt,zs),e(P,Cs),e(P,zt),e(zt,qs),e(P,As),p(t,Ho,h),p(t,Ct,h),e(Ct,po),e(po,Ms),p(t,Jo,h),_(je,t,h),p(t,Go,h),p(t,qt,h),e(qt,De),e(De,fo),e(fo,Ls),e(De,Fs),e(De,mo),e(mo,js),p(t,Ko,h),_(Ie,t,h),p(t,Qo,h),p(t,de,h),e(de,Ds),e(de,We),e(We,Is),e(de,Ws),p(t,Xo,h),p(t,ee,h),e(ee,he),e(he,uo),_(Ve,uo,null),e(ee,Vs),e(ee,_o),e(_o,Ns),p(t,Yo,h),p(t,B,h),_(Ne,B,null),e(B,Bs),e(B,te),e(te,Os),e(te,At),e(At,Us),e(te,Rs),e(te,Be),e(Be,Hs),e(te,Js),e(B,Gs),e(B,oe),e(oe,Ks),e(oe,Mt),e(Mt,Qs),e(oe,Xs),e(oe,Lt),e(Lt,Ys),e(oe,Zs),p(t,Zo,h),p(t,re,h),e(re,pe),e(pe,go),_(Oe,go,null),e(re,ea),e(re,vo),e(vo,ta),p(t,er,h),p(t,E,h),_(Ue,E,null),e(E,oa),e(E,To),e(To,ra),e(E,sa),e(E,Re),e(Re,aa),e(Re,Ft),e(Ft,na),e(Re,ca),e(E,ia),e(E,fe),_(He,fe,null),e(fe,la),e(fe,ko),e(ko,da),e(E,ha),e(E,K),_(Je,K,null),e(K,pa),e(K,xo),e(xo,fa),e(K,ma),e(K,Ge),e(Ge,ua),e(Ge,bo),e(bo,_a),e(Ge,ga),e(E,va),e(E,So),p(t,tr,h),p(t,se,h),e(se,me),e(me,wo),_(Ke,wo,null),e(se,Ta),e(se,yo),e(yo,ka),p(t,or,h),p(t,x,h),_(Qe,x,null),e(x,xa),e(x,$o),e($o,ba),e(x,Sa),e(x,M),e(M,jt),e(jt,wa),e(M,ya),e(M,Dt),e(Dt,$a),e(M,Ea),e(M,It),e(It,Pa),e(M,za),e(M,Xe),e(Xe,Eo),e(Eo,Ca),e(Xe,qa),e(M,Aa),e(M,Wt),e(Wt,Ma),e(M,La),e(x,Fa),e(x,ue),_(Ye,ue,null),e(ue,ja),e(ue,O),e(O,Da),e(O,Po),e(Po,Ia),e(O,Wa),e(O,Vt),e(Vt,Va),e(O,Na),e(O,Ze),e(Ze,zo),e(zo,Ba),e(Ze,Oa),e(O,Ua),e(x,Ra),e(x,Q),_(et,Q,null),e(Q,Ha),e(Q,tt),e(tt,Ja),e(tt,Nt),e(Nt,Ga),e(tt,Ka),e(Q,Qa),_(_e,Q,null),e(x,Xa),e(x,X),_(ot,X,null),e(X,Ya),e(X,ae),e(ae,Za),e(ae,Co),e(Co,en),e(ae,tn),e(ae,Bt),e(Bt,on),e(ae,rn),e(X,sn),_(ge,X,null),e(x,an),e(x,ve),_(rt,ve,null),e(ve,nn),e(ve,st),e(st,cn),e(st,Ot),e(Ot,ln),e(st,dn),e(x,hn),e(x,Te),_(at,Te,null),e(Te,pn),e(Te,nt),e(nt,fn),e(nt,Ut),e(Ut,mn),e(nt,un),e(x,_n),e(x,ke),_(ct,ke,null),e(ke,gn),e(ke,qo),e(qo,vn),p(t,rr,h),p(t,ne,h),e(ne,xe),e(xe,Ao),_(it,Ao,null),e(ne,Tn),e(ne,Mo),e(Mo,kn),p(t,sr,h),p(t,D,h),_(lt,D,null),e(D,xn),e(D,U),e(U,bn),e(U,Rt),e(Rt,Sn),e(U,wn),e(U,Lo),e(Lo,yn),e(U,$n),e(U,Ht),e(Ht,En),e(U,Pn),e(D,zn),e(D,dt),e(dt,Cn),e(dt,ht),e(ht,qn),e(dt,An),e(D,Mn),e(D,Y),_(pt,Y,null),e(Y,Ln),e(Y,Fo),e(Fo,Fn),e(Y,jn),_(ft,Y,null),ar=!0},p(t,[h]){const mt={};h&2&&(mt.$$scope={dirty:h,ctx:t}),_e.$set(mt);const jo={};h&2&&(jo.$$scope={dirty:h,ctx:t}),ge.$set(jo)},i(t){ar||(g(w.$$.fragment,t),g($e.$$.fragment,t),g(Fe.$$.fragment,t),g(je.$$.fragment,t),g(Ie.$$.fragment,t),g(Ve.$$.fragment,t),g(Ne.$$.fragment,t),g(Oe.$$.fragment,t),g(Ue.$$.fragment,t),g(He.$$.fragment,t),g(Je.$$.fragment,t),g(Ke.$$.fragment,t),g(Qe.$$.fragment,t),g(Ye.$$.fragment,t),g(et.$$.fragment,t),g(_e.$$.fragment,t),g(ot.$$.fragment,t),g(ge.$$.fragment,t),g(rt.$$.fragment,t),g(at.$$.fragment,t),g(ct.$$.fragment,t),g(it.$$.fragment,t),g(lt.$$.fragment,t),g(pt.$$.fragment,t),g(ft.$$.fragment,t),ar=!0)},o(t){v(w.$$.fragment,t),v($e.$$.fragment,t),v(Fe.$$.fragment,t),v(je.$$.fragment,t),v(Ie.$$.fragment,t),v(Ve.$$.fragment,t),v(Ne.$$.fragment,t),v(Oe.$$.fragment,t),v(Ue.$$.fragment,t),v(He.$$.fragment,t),v(Je.$$.fragment,t),v(Ke.$$.fragment,t),v(Qe.$$.fragment,t),v(Ye.$$.fragment,t),v(et.$$.fragment,t),v(_e.$$.fragment,t),v(ot.$$.fragment,t),v(ge.$$.fragment,t),v(rt.$$.fragment,t),v(at.$$.fragment,t),v(ct.$$.fragment,t),v(it.$$.fragment,t),v(lt.$$.fragment,t),v(pt.$$.fragment,t),v(ft.$$.fragment,t),ar=!1},d(t){o(f),t&&o(q),t&&o(k),T(w),t&&o(b),t&&o(C),T($e),t&&o(Do),t&&o(H),t&&o(Io),t&&o(y),t&&o(Wo),t&&o(ce),t&&o(Vo),t&&o(ie),t&&o(No),t&&o(kt),t&&o(Bo),t&&o(J),t&&o(Oo),t&&o(Z),T(Fe),t&&o(Uo),t&&o(G),t&&o(Ro),t&&o(P),t&&o(Ho),t&&o(Ct),t&&o(Jo),T(je,t),t&&o(Go),t&&o(qt),t&&o(Ko),T(Ie,t),t&&o(Qo),t&&o(de),t&&o(Xo),t&&o(ee),T(Ve),t&&o(Yo),t&&o(B),T(Ne),t&&o(Zo),t&&o(re),T(Oe),t&&o(er),t&&o(E),T(Ue),T(He),T(Je),t&&o(tr),t&&o(se),T(Ke),t&&o(or),t&&o(x),T(Qe),T(Ye),T(et),T(_e),T(ot),T(ge),T(rt),T(at),T(ct),t&&o(rr),t&&o(ne),T(it),t&&o(sr),t&&o(D),T(lt),T(pt),T(ft)}}}const gi={local:"speech2text2",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2Text2Config",title:"Speech2Text2Config"},{local:"transformers.Speech2Text2Tokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2Text2Processor",title:"Speech2Text2Processor"},{local:"transformers.Speech2Text2ForCausalLM",title:"Speech2Text2ForCausalLM"}],title:"Speech2Text2"};function vi(ye,f,q){let{fw:k}=f;return ye.$$set=S=>{"fw"in S&&q(0,k=S.fw)},[k]}class yi extends di{constructor(f){super();hi(this,f,vi,_i,pi,{fw:0})}}export{yi as default,gi as metadata};
