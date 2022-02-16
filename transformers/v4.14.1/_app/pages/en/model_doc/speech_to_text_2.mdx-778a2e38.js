import{S as di,i as hi,s as pi,e as s,k as l,w as m,t as r,L as fi,c as a,d as o,m as d,a as c,x as u,h as n,b as i,J as e,g as p,y as _,q as g,o as v,B as T}from"../../../chunks/vendor-b1433968.js";import{T as li}from"../../../chunks/Tip-c3840994.js";import{D as I}from"../../../chunks/Docstring-ff504c58.js";import{C as Va}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as ut}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function mi(ye){let f,q,k,S,F,w,N,j;return{c(){f=s("p"),q=r(`This class method is simply calling AutoFeatureExtractor\u2019s
`),k=s("code"),S=r("from_pretrained"),F=r(` and Speech2Text2Tokenizer\u2019s
`),w=s("code"),N=r("from_pretrained"),j=r(`. Please refer to the
docstrings of the methods above for more information.`)},l(z){f=a(z,"P",{});var b=c(f);q=n(b,`This class method is simply calling AutoFeatureExtractor\u2019s
`),k=a(b,"CODE",{});var C=c(k);S=n(C,"from_pretrained"),C.forEach(o),F=n(b,` and Speech2Text2Tokenizer\u2019s
`),w=a(b,"CODE",{});var A=c(w);N=n(A,"from_pretrained"),A.forEach(o),j=n(b,`. Please refer to the
docstrings of the methods above for more information.`),b.forEach(o)},m(z,b){p(z,f,b),e(f,q),e(f,k),e(k,S),e(f,F),e(f,w),e(w,N),e(f,j)},d(z){z&&o(f)}}}function ui(ye){let f,q,k,S,F,w,N,j;return{c(){f=s("p"),q=r("This class method is simply calling "),k=s("code"),S=r("save_pretrained"),F=r(` and
`),w=s("code"),N=r("save_pretrained"),j=r(`. Please refer to the
docstrings of the methods above for more information.`)},l(z){f=a(z,"P",{});var b=c(f);q=n(b,"This class method is simply calling "),k=a(b,"CODE",{});var C=c(k);S=n(C,"save_pretrained"),C.forEach(o),F=n(b,` and
`),w=a(b,"CODE",{});var A=c(w);N=n(A,"save_pretrained"),A.forEach(o),j=n(b,`. Please refer to the
docstrings of the methods above for more information.`),b.forEach(o)},m(z,b){p(z,f,b),e(f,q),e(f,k),e(k,S),e(f,F),e(f,w),e(w,N),e(f,j)},d(z){z&&o(f)}}}function _i(ye){let f,q,k,S,F,w,N,j,z,b,C,A,no,$e,Cr,so,qr,Do,H,Ar,_t,Mr,Lr,Ee,Fr,jr,Io,y,Dr,ao,Ir,Wr,co,Vr,Nr,gt,Br,Or,vt,Ur,Rr,Tt,Hr,Jr,io,Gr,Kr,Wo,ce,Qr,Pe,Xr,Yr,Vo,ie,Zr,ze,en,tn,No,kt,on,Bo,J,Ce,rn,qe,nn,sn,an,Ae,cn,xt,ln,dn,hn,Me,pn,bt,fn,Le,mn,un,Oo,Z,le,lo,Fe,_n,ho,gn,Uo,G,vn,St,Tn,kn,wt,xn,bn,Ro,P,Sn,yt,wn,yn,$t,$n,En,Et,Pn,zn,Pt,Cn,qn,zt,An,Mn,Ho,Ct,po,Ln,Jo,je,Go,qt,De,fo,Fn,jn,mo,Dn,Ko,Ie,Qo,de,In,We,Wn,Vn,Xo,ee,he,uo,Ve,Nn,_o,Bn,Yo,B,Ne,On,te,Un,At,Rn,Hn,Be,Jn,Gn,Kn,oe,Qn,Mt,Xn,Yn,Lt,Zn,es,Zo,re,pe,go,Oe,ts,vo,os,er,E,Ue,rs,To,ns,ss,Re,as,Ft,cs,is,ls,fe,He,ds,ko,hs,ps,K,Je,fs,xo,ms,us,Ge,_s,bo,gs,vs,Ts,So,tr,ne,me,wo,Ke,ks,yo,xs,or,x,Qe,bs,$o,Ss,ws,M,jt,ys,$s,Dt,Es,Ps,It,zs,Cs,Xe,Eo,qs,As,Ms,Wt,Ls,Fs,js,ue,Ye,Ds,O,Is,Po,Ws,Vs,Vt,Ns,Bs,Ze,zo,Os,Us,Rs,Hs,Q,et,Js,tt,Gs,Nt,Ks,Qs,Xs,_e,Ys,X,ot,Zs,se,ea,Co,ta,oa,Bt,ra,na,sa,ge,aa,ve,rt,ca,nt,ia,Ot,la,da,ha,Te,st,pa,at,fa,Ut,ma,ua,_a,ke,ct,ga,qo,va,rr,ae,xe,Ao,it,Ta,Mo,ka,nr,D,lt,xa,U,ba,Rt,Sa,wa,Lo,ya,$a,Ht,Ea,Pa,za,dt,Ca,ht,qa,Aa,Ma,Y,pt,La,Fo,Fa,ja,ft,sr;return w=new ut({}),$e=new ut({}),Fe=new ut({}),je=new Va({props:{code:`import torch
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

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">transcription = processor.batch_decode(generated_ids)</span>`}}),Ie=new Va({props:{code:`from datasets import load_dataset
from transformers import pipeline

librispeech_en = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
asr = pipeline("automatic-speech-recognition", model="facebook/s2t-wav2vec2-large-en-de", feature_extractor="facebook/s2t-wav2vec2-large-en-de")

translation_de = asr(librispeech_en[0]["file"]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">librispeech_en = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">asr = pipeline(<span class="hljs-string">&quot;automatic-speech-recognition&quot;</span>, model=<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>, feature_extractor=<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">translation_de = asr(librispeech_en[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;file&quot;</span>])</span>`}}),Ve=new ut({}),Ne=new I({props:{name:"class transformers.Speech2Text2Config",anchor:"transformers.Speech2Text2Config",parameters:[{name:"vocab_size",val:" = 10000"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/speech_to_text_2/configuration_speech_to_text_2.py#L29",parametersDescription:[{anchor:"transformers.Speech2Text2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Speech2Text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.14.1/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>`,name:"vocab_size"},{anchor:"transformers.Speech2Text2Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
</blockquote>`,name:"max_source_positions"}]}}),Oe=new ut({}),Ue=new I({props:{name:"class transformers.Speech2Text2Tokenizer",anchor:"transformers.Speech2Text2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_lower_case",val:" = False"},{name:"merges_file",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/speech_to_text_2/tokenization_speech_to_text_2.py#L67",parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Speech2Text2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Speech2Text2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Speech2Text2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Speech2Text2Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.</p>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}]}}),He=new I({props:{name:"batch\\_decode",anchor:"transformers.PreTrainedTokenizerBase.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/tokenization_utils_base.py#L3167",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],returnDescription:`
<p>The list of decoded sentences.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Je=new I({props:{name:"decode",anchor:"transformers.PreTrainedTokenizerBase.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/tokenization_utils_base.py#L3200",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.PreTrainedTokenizerBase.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizerBase.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],returnDescription:`
<p>The decoded sentence.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ke=new ut({}),Qe=new I({props:{name:"class transformers.Speech2Text2Processor",anchor:"transformers.Speech2Text2Processor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L25",parametersDescription:[{anchor:"transformers.Speech2Text2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>AutoFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.14.1/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2Text2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2Text2Tokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.14.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer">Speech2Text2Tokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}]}}),Ye=new I({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.Speech2Text2Processor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L110"}}),et=new I({props:{name:"from\\_pretrained",anchor:"transformers.Speech2Text2Processor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L77",parametersDescription:[{anchor:"transformers.Speech2Text2Processor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
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
<a href="/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a></li>
</ul>`,name:"pretrained_model_name_or_path"}]}}),_e=new li({props:{$$slots:{default:[mi]},$$scope:{ctx:ye}}}),ot=new I({props:{name:"save\\_pretrained",anchor:"transformers.Speech2Text2Processor.save_pretrained",parameters:[{name:"save_directory",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L56",parametersDescription:[{anchor:"transformers.Speech2Text2Processor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"}]}}),ge=new li({props:{$$slots:{default:[ui]},$$scope:{ctx:ye}}}),rt=new I({props:{name:"batch\\_decode",anchor:"transformers.Speech2Text2Processor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L120"}}),st=new I({props:{name:"decode",anchor:"transformers.Speech2Text2Processor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L128"}}),ct=new I({props:{name:"as\\_target\\_processor",anchor:"transformers.Speech2Text2Processor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L136"}}),it=new ut({}),lt=new I({props:{name:"class transformers.Speech2Text2ForCausalLM",anchor:"transformers.Speech2Text2ForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L745",parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Config">Speech2Text2Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),pt=new I({props:{name:"forward",anchor:"transformers.Speech2Text2ForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L776",parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer">Speech2Text2Tokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a>
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Config"
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ft=new Va({props:{code:`from transformers import SpeechEncoderDecoderModel, Speech2Text2ForCausalLM, Wav2Vec2Model, Speech2Text2Config, Wav2Vec2Config

encoder = Wav2Vec2Model(Wav2Vec2Config())
decoder = Speech2Text2ForCausalLM(Speech2Text2Config())

model = SpeechEncoderDecoderModel(encoder=encoder, decoder=decoder),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel, Speech2Text2ForCausalLM, Wav2Vec2Model, Speech2Text2Config, Wav2Vec2Config

<span class="hljs-meta">&gt;&gt;&gt; </span>encoder = Wav2Vec2Model(Wav2Vec2Config())
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder = Speech2Text2ForCausalLM(Speech2Text2Config())

<span class="hljs-comment"># init speech2text model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel(encoder=encoder, decoder=decoder)`}}),{c(){f=s("meta"),q=l(),k=s("h1"),S=s("a"),F=s("span"),m(w.$$.fragment),N=l(),j=s("span"),z=r("Speech2Text2"),b=l(),C=s("h2"),A=s("a"),no=s("span"),m($e.$$.fragment),Cr=l(),so=s("span"),qr=r("Overview"),Do=l(),H=s("p"),Ar=r("The Speech2Text2 model is used together with "),_t=s("a"),Mr=r("Wav2Vec2"),Lr=r(` for Speech Translation models proposed in
`),Ee=s("a"),Fr=r("Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),jr=r(` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Io=l(),y=s("p"),Dr=r("Speech2Text2 is a "),ao=s("em"),Ir=r("decoder-only"),Wr=r(" transformer model that can be used with any speech "),co=s("em"),Vr=r("encoder-only"),Nr=r(`, such as
`),gt=s("a"),Br=r("Wav2Vec2"),Or=r(" or "),vt=s("a"),Ur=r("HuBERT"),Rr=r(` for Speech-to-Text tasks. Please refer to the
`),Tt=s("a"),Hr=r("SpeechEncoderDecoder"),Jr=r(" class on how to combine Speech2Text2 with any speech "),io=s("em"),Gr=r("encoder-only"),Kr=r(`
model.`),Wo=l(),ce=s("p"),Qr=r("This model was contributed by "),Pe=s("a"),Xr=r("Patrick von Platen"),Yr=r("."),Vo=l(),ie=s("p"),Zr=r("The original code can be found "),ze=s("a"),en=r("here"),tn=r("."),No=l(),kt=s("p"),on=r("Tips:"),Bo=l(),J=s("ul"),Ce=s("li"),rn=r(`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),qe=s("a"),nn=r("official models"),sn=r(" ."),an=l(),Ae=s("li"),cn=r("Speech2Text2 is always used within the "),xt=s("a"),ln=r("SpeechEncoderDecoder"),dn=r(" framework."),hn=l(),Me=s("li"),pn=r("Speech2Text2\u2019s tokenizer is based on "),bt=s("em"),fn=r("fastBPE <"),Le=s("a"),mn=r("https://github.com/glample/fastBPE>"),un=r("."),Oo=l(),Z=s("h2"),le=s("a"),lo=s("span"),m(Fe.$$.fragment),_n=l(),ho=s("span"),gn=r("Inference"),Uo=l(),G=s("p"),vn=r("Speech2Text2\u2019s "),St=s("a"),Tn=r("SpeechEncoderDecoderModel"),kn=r(` model accepts raw waveform input values from speech and
makes use of `),wt=s("a"),xn=r("generate()"),bn=r(` to translate the input speech
autoregressively to the target language.`),Ro=l(),P=s("p"),Sn=r("The "),yt=s("a"),wn=r("Wav2Vec2FeatureExtractor"),yn=r(` class is responsible for preprocessing the input speech and
`),$t=s("a"),$n=r("Speech2Text2Tokenizer"),En=r(` decodes the generated target tokens to the target string. The
`),Et=s("a"),Pn=r("Speech2Text2Processor"),zn=r(" wraps "),Pt=s("a"),Cn=r("Wav2Vec2FeatureExtractor"),qn=r(` and
`),zt=s("a"),An=r("Speech2Text2Tokenizer"),Mn=r(` into a single instance to both extract the input features and decode the
predicted token ids.`),Ho=l(),Ct=s("ul"),po=s("li"),Ln=r("Step-by-step Speech Translation"),Jo=l(),m(je.$$.fragment),Go=l(),qt=s("ul"),De=s("li"),fo=s("p"),Fn=r("Speech Translation via Pipelines"),jn=l(),mo=s("p"),Dn=r("The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),Ko=l(),m(Ie.$$.fragment),Qo=l(),de=s("p"),In=r("See "),We=s("a"),Wn=r("model hub"),Vn=r(" to look for Speech2Text2 checkpoints."),Xo=l(),ee=s("h2"),he=s("a"),uo=s("span"),m(Ve.$$.fragment),Nn=l(),_o=s("span"),Bn=r("Speech2Text2Config"),Yo=l(),B=s("div"),m(Ne.$$.fragment),On=l(),te=s("p"),Un=r("This is the configuration class to store the configuration of a "),At=s("a"),Rn=r("Speech2Text2ForCausalLM"),Hn=r(`. It
is used to instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Be=s("a"),Jn=r("facebook/s2t-small-librispeech-asr"),Gn=r(" architecture."),Kn=l(),oe=s("p"),Qn=r("Configuration objects inherit from "),Mt=s("a"),Xn=r("PretrainedConfig"),Yn=r(` and can be used to control the model
outputs. Read the documentation from `),Lt=s("a"),Zn=r("PretrainedConfig"),es=r(" for more information."),Zo=l(),re=s("h2"),pe=s("a"),go=s("span"),m(Oe.$$.fragment),ts=l(),vo=s("span"),os=r("Speech2TextTokenizer"),er=l(),E=s("div"),m(Ue.$$.fragment),rs=l(),To=s("p"),ns=r("Constructs a Speech2Text2Tokenizer."),ss=l(),Re=s("p"),as=r("This tokenizer inherits from "),Ft=s("a"),cs=r("PreTrainedTokenizer"),is=r(` which contains some of the main methods.
Users should refer to the superclass for more information regarding such methods.`),ls=l(),fe=s("div"),m(He.$$.fragment),ds=l(),ko=s("p"),hs=r("Convert a list of lists of token ids into a list of strings by calling decode."),ps=l(),K=s("div"),m(Je.$$.fragment),fs=l(),xo=s("p"),ms=r(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),us=l(),Ge=s("p"),_s=r("Similar to doing "),bo=s("code"),gs=r("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),vs=r("."),Ts=l(),So=s("div"),tr=l(),ne=s("h2"),me=s("a"),wo=s("span"),m(Ke.$$.fragment),ks=l(),yo=s("span"),xs=r("Speech2Text2Processor"),or=l(),x=s("div"),m(Qe.$$.fragment),bs=l(),$o=s("p"),Ss=r(`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),ws=l(),M=s("p"),jt=s("a"),ys=r("Speech2Text2Processor"),$s=r(` offers all the functionalities of
`),Dt=s("a"),Es=r("AutoFeatureExtractor"),Ps=r(" and "),It=s("a"),zs=r("Speech2Text2Tokenizer"),Cs=r(`. See the
`),Xe=s("a"),Eo=s("strong"),qs=r("call"),As=r("()"),Ms=r(" and "),Wt=s("a"),Ls=r("decode()"),Fs=r(` for
more information.`),js=l(),ue=s("div"),m(Ye.$$.fragment),Ds=l(),O=s("p"),Is=r(`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),Po=s("code"),Ws=r("__call__()"),Vs=r(` and returns its output. If used in the context
`),Vt=s("a"),Ns=r("as_target_processor()"),Bs=r(` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),Ze=s("a"),zo=s("strong"),Os=r("call"),Us=r("()"),Rs=r(`. Please refer to the doctsring of
the above two methods for more information.`),Hs=l(),Q=s("div"),m(et.$$.fragment),Js=l(),tt=s("p"),Gs=r("Instantiate a "),Nt=s("a"),Ks=r("Speech2Text2Processor"),Qs=r(" from a pretrained Speech2Text2 processor."),Xs=l(),m(_e.$$.fragment),Ys=l(),X=s("div"),m(ot.$$.fragment),Zs=l(),se=s("p"),ea=r(`Save a Speech2Text2 feature extractor object and Speech2Text2 tokenizer object to the directory
`),Co=s("code"),ta=r("save_directory"),oa=r(`, so that it can be re-loaded using the
`),Bt=s("a"),ra=r("from_pretrained()"),na=r(" class method."),sa=l(),m(ge.$$.fragment),aa=l(),ve=s("div"),m(rt.$$.fragment),ca=l(),nt=s("p"),ia=r(`This method forwards all its arguments to Speech2Text2Tokenizer\u2019s
`),Ot=s("a"),la=r("batch_decode()"),da=r(`. Please refer to the docstring of this method for more
information.`),ha=l(),Te=s("div"),m(st.$$.fragment),pa=l(),at=s("p"),fa=r(`This method forwards all its arguments to Speech2Text2Tokenizer\u2019s
`),Ut=s("a"),ma=r("decode()"),ua=r(`. Please refer to the docstring of this method for more
information.`),_a=l(),ke=s("div"),m(ct.$$.fragment),ga=l(),qo=s("p"),va=r(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text2.`),rr=l(),ae=s("h2"),xe=s("a"),Ao=s("span"),m(it.$$.fragment),Ta=l(),Mo=s("span"),ka=r("Speech2Text2ForCausalLM"),nr=l(),D=s("div"),m(lt.$$.fragment),xa=l(),U=s("p"),ba=r("The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Rt=s("a"),Sa=r("EncoderDecoderModel"),wa=r(" and "),Lo=s("code"),ya=r("SpeechEncoderDecoder"),$a=r(`.
This model inherits from `),Ht=s("a"),Ea=r("PreTrainedModel"),Pa=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),za=l(),dt=s("p"),Ca=r("This model is also a PyTorch "),ht=s("a"),qa=r("torch.nn.Module"),Aa=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Ma=l(),Y=s("div"),m(pt.$$.fragment),La=l(),Fo=s("p"),Fa=r("Example:"),ja=l(),m(ft.$$.fragment),this.h()},l(t){const h=fi('[data-svelte="svelte-1phssyn"]',document.head);f=a(h,"META",{name:!0,content:!0}),h.forEach(o),q=d(t),k=a(t,"H1",{class:!0});var mt=c(k);S=a(mt,"A",{id:!0,class:!0,href:!0});var jo=c(S);F=a(jo,"SPAN",{});var Na=c(F);u(w.$$.fragment,Na),Na.forEach(o),jo.forEach(o),N=d(mt),j=a(mt,"SPAN",{});var Ba=c(j);z=n(Ba,"Speech2Text2"),Ba.forEach(o),mt.forEach(o),b=d(t),C=a(t,"H2",{class:!0});var ar=c(C);A=a(ar,"A",{id:!0,class:!0,href:!0});var Oa=c(A);no=a(Oa,"SPAN",{});var Ua=c(no);u($e.$$.fragment,Ua),Ua.forEach(o),Oa.forEach(o),Cr=d(ar),so=a(ar,"SPAN",{});var Ra=c(so);qr=n(Ra,"Overview"),Ra.forEach(o),ar.forEach(o),Do=d(t),H=a(t,"P",{});var Jt=c(H);Ar=n(Jt,"The Speech2Text2 model is used together with "),_t=a(Jt,"A",{href:!0});var Ha=c(_t);Mr=n(Ha,"Wav2Vec2"),Ha.forEach(o),Lr=n(Jt,` for Speech Translation models proposed in
`),Ee=a(Jt,"A",{href:!0,rel:!0});var Ja=c(Ee);Fr=n(Ja,"Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),Ja.forEach(o),jr=n(Jt,` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Jt.forEach(o),Io=d(t),y=a(t,"P",{});var L=c(y);Dr=n(L,"Speech2Text2 is a "),ao=a(L,"EM",{});var Ga=c(ao);Ir=n(Ga,"decoder-only"),Ga.forEach(o),Wr=n(L," transformer model that can be used with any speech "),co=a(L,"EM",{});var Ka=c(co);Vr=n(Ka,"encoder-only"),Ka.forEach(o),Nr=n(L,`, such as
`),gt=a(L,"A",{href:!0});var Qa=c(gt);Br=n(Qa,"Wav2Vec2"),Qa.forEach(o),Or=n(L," or "),vt=a(L,"A",{href:!0});var Xa=c(vt);Ur=n(Xa,"HuBERT"),Xa.forEach(o),Rr=n(L,` for Speech-to-Text tasks. Please refer to the
`),Tt=a(L,"A",{href:!0});var Ya=c(Tt);Hr=n(Ya,"SpeechEncoderDecoder"),Ya.forEach(o),Jr=n(L," class on how to combine Speech2Text2 with any speech "),io=a(L,"EM",{});var Za=c(io);Gr=n(Za,"encoder-only"),Za.forEach(o),Kr=n(L,`
model.`),L.forEach(o),Wo=d(t),ce=a(t,"P",{});var cr=c(ce);Qr=n(cr,"This model was contributed by "),Pe=a(cr,"A",{href:!0,rel:!0});var ec=c(Pe);Xr=n(ec,"Patrick von Platen"),ec.forEach(o),Yr=n(cr,"."),cr.forEach(o),Vo=d(t),ie=a(t,"P",{});var ir=c(ie);Zr=n(ir,"The original code can be found "),ze=a(ir,"A",{href:!0,rel:!0});var tc=c(ze);en=n(tc,"here"),tc.forEach(o),tn=n(ir,"."),ir.forEach(o),No=d(t),kt=a(t,"P",{});var oc=c(kt);on=n(oc,"Tips:"),oc.forEach(o),Bo=d(t),J=a(t,"UL",{});var Gt=c(J);Ce=a(Gt,"LI",{});var lr=c(Ce);rn=n(lr,`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),qe=a(lr,"A",{href:!0,rel:!0});var rc=c(qe);nn=n(rc,"official models"),rc.forEach(o),sn=n(lr," ."),lr.forEach(o),an=d(Gt),Ae=a(Gt,"LI",{});var dr=c(Ae);cn=n(dr,"Speech2Text2 is always used within the "),xt=a(dr,"A",{href:!0});var nc=c(xt);ln=n(nc,"SpeechEncoderDecoder"),nc.forEach(o),dn=n(dr," framework."),dr.forEach(o),hn=d(Gt),Me=a(Gt,"LI",{});var hr=c(Me);pn=n(hr,"Speech2Text2\u2019s tokenizer is based on "),bt=a(hr,"EM",{});var Da=c(bt);fn=n(Da,"fastBPE <"),Le=a(Da,"A",{href:!0,rel:!0});var sc=c(Le);mn=n(sc,"https://github.com/glample/fastBPE>"),sc.forEach(o),Da.forEach(o),un=n(hr,"."),hr.forEach(o),Gt.forEach(o),Oo=d(t),Z=a(t,"H2",{class:!0});var pr=c(Z);le=a(pr,"A",{id:!0,class:!0,href:!0});var ac=c(le);lo=a(ac,"SPAN",{});var cc=c(lo);u(Fe.$$.fragment,cc),cc.forEach(o),ac.forEach(o),_n=d(pr),ho=a(pr,"SPAN",{});var ic=c(ho);gn=n(ic,"Inference"),ic.forEach(o),pr.forEach(o),Uo=d(t),G=a(t,"P",{});var Kt=c(G);vn=n(Kt,"Speech2Text2\u2019s "),St=a(Kt,"A",{href:!0});var lc=c(St);Tn=n(lc,"SpeechEncoderDecoderModel"),lc.forEach(o),kn=n(Kt,` model accepts raw waveform input values from speech and
makes use of `),wt=a(Kt,"A",{href:!0});var dc=c(wt);xn=n(dc,"generate()"),dc.forEach(o),bn=n(Kt,` to translate the input speech
autoregressively to the target language.`),Kt.forEach(o),Ro=d(t),P=a(t,"P",{});var W=c(P);Sn=n(W,"The "),yt=a(W,"A",{href:!0});var hc=c(yt);wn=n(hc,"Wav2Vec2FeatureExtractor"),hc.forEach(o),yn=n(W,` class is responsible for preprocessing the input speech and
`),$t=a(W,"A",{href:!0});var pc=c($t);$n=n(pc,"Speech2Text2Tokenizer"),pc.forEach(o),En=n(W,` decodes the generated target tokens to the target string. The
`),Et=a(W,"A",{href:!0});var fc=c(Et);Pn=n(fc,"Speech2Text2Processor"),fc.forEach(o),zn=n(W," wraps "),Pt=a(W,"A",{href:!0});var mc=c(Pt);Cn=n(mc,"Wav2Vec2FeatureExtractor"),mc.forEach(o),qn=n(W,` and
`),zt=a(W,"A",{href:!0});var uc=c(zt);An=n(uc,"Speech2Text2Tokenizer"),uc.forEach(o),Mn=n(W,` into a single instance to both extract the input features and decode the
predicted token ids.`),W.forEach(o),Ho=d(t),Ct=a(t,"UL",{});var _c=c(Ct);po=a(_c,"LI",{});var gc=c(po);Ln=n(gc,"Step-by-step Speech Translation"),gc.forEach(o),_c.forEach(o),Jo=d(t),u(je.$$.fragment,t),Go=d(t),qt=a(t,"UL",{});var vc=c(qt);De=a(vc,"LI",{});var fr=c(De);fo=a(fr,"P",{});var Tc=c(fo);Fn=n(Tc,"Speech Translation via Pipelines"),Tc.forEach(o),jn=d(fr),mo=a(fr,"P",{});var kc=c(mo);Dn=n(kc,"The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),kc.forEach(o),fr.forEach(o),vc.forEach(o),Ko=d(t),u(Ie.$$.fragment,t),Qo=d(t),de=a(t,"P",{});var mr=c(de);In=n(mr,"See "),We=a(mr,"A",{href:!0,rel:!0});var xc=c(We);Wn=n(xc,"model hub"),xc.forEach(o),Vn=n(mr," to look for Speech2Text2 checkpoints."),mr.forEach(o),Xo=d(t),ee=a(t,"H2",{class:!0});var ur=c(ee);he=a(ur,"A",{id:!0,class:!0,href:!0});var bc=c(he);uo=a(bc,"SPAN",{});var Sc=c(uo);u(Ve.$$.fragment,Sc),Sc.forEach(o),bc.forEach(o),Nn=d(ur),_o=a(ur,"SPAN",{});var wc=c(_o);Bn=n(wc,"Speech2Text2Config"),wc.forEach(o),ur.forEach(o),Yo=d(t),B=a(t,"DIV",{class:!0});var Qt=c(B);u(Ne.$$.fragment,Qt),On=d(Qt),te=a(Qt,"P",{});var Xt=c(te);Un=n(Xt,"This is the configuration class to store the configuration of a "),At=a(Xt,"A",{href:!0});var yc=c(At);Rn=n(yc,"Speech2Text2ForCausalLM"),yc.forEach(o),Hn=n(Xt,`. It
is used to instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Be=a(Xt,"A",{href:!0,rel:!0});var $c=c(Be);Jn=n($c,"facebook/s2t-small-librispeech-asr"),$c.forEach(o),Gn=n(Xt," architecture."),Xt.forEach(o),Kn=d(Qt),oe=a(Qt,"P",{});var Yt=c(oe);Qn=n(Yt,"Configuration objects inherit from "),Mt=a(Yt,"A",{href:!0});var Ec=c(Mt);Xn=n(Ec,"PretrainedConfig"),Ec.forEach(o),Yn=n(Yt,` and can be used to control the model
outputs. Read the documentation from `),Lt=a(Yt,"A",{href:!0});var Pc=c(Lt);Zn=n(Pc,"PretrainedConfig"),Pc.forEach(o),es=n(Yt," for more information."),Yt.forEach(o),Qt.forEach(o),Zo=d(t),re=a(t,"H2",{class:!0});var _r=c(re);pe=a(_r,"A",{id:!0,class:!0,href:!0});var zc=c(pe);go=a(zc,"SPAN",{});var Cc=c(go);u(Oe.$$.fragment,Cc),Cc.forEach(o),zc.forEach(o),ts=d(_r),vo=a(_r,"SPAN",{});var qc=c(vo);os=n(qc,"Speech2TextTokenizer"),qc.forEach(o),_r.forEach(o),er=d(t),E=a(t,"DIV",{class:!0});var V=c(E);u(Ue.$$.fragment,V),rs=d(V),To=a(V,"P",{});var Ac=c(To);ns=n(Ac,"Constructs a Speech2Text2Tokenizer."),Ac.forEach(o),ss=d(V),Re=a(V,"P",{});var gr=c(Re);as=n(gr,"This tokenizer inherits from "),Ft=a(gr,"A",{href:!0});var Mc=c(Ft);cs=n(Mc,"PreTrainedTokenizer"),Mc.forEach(o),is=n(gr,` which contains some of the main methods.
Users should refer to the superclass for more information regarding such methods.`),gr.forEach(o),ls=d(V),fe=a(V,"DIV",{class:!0});var vr=c(fe);u(He.$$.fragment,vr),ds=d(vr),ko=a(vr,"P",{});var Lc=c(ko);hs=n(Lc,"Convert a list of lists of token ids into a list of strings by calling decode."),Lc.forEach(o),vr.forEach(o),ps=d(V),K=a(V,"DIV",{class:!0});var Zt=c(K);u(Je.$$.fragment,Zt),fs=d(Zt),xo=a(Zt,"P",{});var Fc=c(xo);ms=n(Fc,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Fc.forEach(o),us=d(Zt),Ge=a(Zt,"P",{});var Tr=c(Ge);_s=n(Tr,"Similar to doing "),bo=a(Tr,"CODE",{});var jc=c(bo);gs=n(jc,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),jc.forEach(o),vs=n(Tr,"."),Tr.forEach(o),Zt.forEach(o),Ts=d(V),So=a(V,"DIV",{class:!0}),c(So).forEach(o),V.forEach(o),tr=d(t),ne=a(t,"H2",{class:!0});var kr=c(ne);me=a(kr,"A",{id:!0,class:!0,href:!0});var Dc=c(me);wo=a(Dc,"SPAN",{});var Ic=c(wo);u(Ke.$$.fragment,Ic),Ic.forEach(o),Dc.forEach(o),ks=d(kr),yo=a(kr,"SPAN",{});var Wc=c(yo);xs=n(Wc,"Speech2Text2Processor"),Wc.forEach(o),kr.forEach(o),or=d(t),x=a(t,"DIV",{class:!0});var $=c(x);u(Qe.$$.fragment,$),bs=d($),$o=a($,"P",{});var Vc=c($o);Ss=n(Vc,`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),Vc.forEach(o),ws=d($),M=a($,"P",{});var R=c(M);jt=a(R,"A",{href:!0});var Nc=c(jt);ys=n(Nc,"Speech2Text2Processor"),Nc.forEach(o),$s=n(R,` offers all the functionalities of
`),Dt=a(R,"A",{href:!0});var Bc=c(Dt);Es=n(Bc,"AutoFeatureExtractor"),Bc.forEach(o),Ps=n(R," and "),It=a(R,"A",{href:!0});var Oc=c(It);zs=n(Oc,"Speech2Text2Tokenizer"),Oc.forEach(o),Cs=n(R,`. See the
`),Xe=a(R,"A",{href:!0});var Ia=c(Xe);Eo=a(Ia,"STRONG",{});var Uc=c(Eo);qs=n(Uc,"call"),Uc.forEach(o),As=n(Ia,"()"),Ia.forEach(o),Ms=n(R," and "),Wt=a(R,"A",{href:!0});var Rc=c(Wt);Ls=n(Rc,"decode()"),Rc.forEach(o),Fs=n(R,` for
more information.`),R.forEach(o),js=d($),ue=a($,"DIV",{class:!0});var xr=c(ue);u(Ye.$$.fragment,xr),Ds=d(xr),O=a(xr,"P",{});var be=c(O);Is=n(be,`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),Po=a(be,"CODE",{});var Hc=c(Po);Ws=n(Hc,"__call__()"),Hc.forEach(o),Vs=n(be,` and returns its output. If used in the context
`),Vt=a(be,"A",{href:!0});var Jc=c(Vt);Ns=n(Jc,"as_target_processor()"),Jc.forEach(o),Bs=n(be,` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),Ze=a(be,"A",{href:!0});var Wa=c(Ze);zo=a(Wa,"STRONG",{});var Gc=c(zo);Os=n(Gc,"call"),Gc.forEach(o),Us=n(Wa,"()"),Wa.forEach(o),Rs=n(be,`. Please refer to the doctsring of
the above two methods for more information.`),be.forEach(o),xr.forEach(o),Hs=d($),Q=a($,"DIV",{class:!0});var eo=c(Q);u(et.$$.fragment,eo),Js=d(eo),tt=a(eo,"P",{});var br=c(tt);Gs=n(br,"Instantiate a "),Nt=a(br,"A",{href:!0});var Kc=c(Nt);Ks=n(Kc,"Speech2Text2Processor"),Kc.forEach(o),Qs=n(br," from a pretrained Speech2Text2 processor."),br.forEach(o),Xs=d(eo),u(_e.$$.fragment,eo),eo.forEach(o),Ys=d($),X=a($,"DIV",{class:!0});var to=c(X);u(ot.$$.fragment,to),Zs=d(to),se=a(to,"P",{});var oo=c(se);ea=n(oo,`Save a Speech2Text2 feature extractor object and Speech2Text2 tokenizer object to the directory
`),Co=a(oo,"CODE",{});var Qc=c(Co);ta=n(Qc,"save_directory"),Qc.forEach(o),oa=n(oo,`, so that it can be re-loaded using the
`),Bt=a(oo,"A",{href:!0});var Xc=c(Bt);ra=n(Xc,"from_pretrained()"),Xc.forEach(o),na=n(oo," class method."),oo.forEach(o),sa=d(to),u(ge.$$.fragment,to),to.forEach(o),aa=d($),ve=a($,"DIV",{class:!0});var Sr=c(ve);u(rt.$$.fragment,Sr),ca=d(Sr),nt=a(Sr,"P",{});var wr=c(nt);ia=n(wr,`This method forwards all its arguments to Speech2Text2Tokenizer\u2019s
`),Ot=a(wr,"A",{href:!0});var Yc=c(Ot);la=n(Yc,"batch_decode()"),Yc.forEach(o),da=n(wr,`. Please refer to the docstring of this method for more
information.`),wr.forEach(o),Sr.forEach(o),ha=d($),Te=a($,"DIV",{class:!0});var yr=c(Te);u(st.$$.fragment,yr),pa=d(yr),at=a(yr,"P",{});var $r=c(at);fa=n($r,`This method forwards all its arguments to Speech2Text2Tokenizer\u2019s
`),Ut=a($r,"A",{href:!0});var Zc=c(Ut);ma=n(Zc,"decode()"),Zc.forEach(o),ua=n($r,`. Please refer to the docstring of this method for more
information.`),$r.forEach(o),yr.forEach(o),_a=d($),ke=a($,"DIV",{class:!0});var Er=c(ke);u(ct.$$.fragment,Er),ga=d(Er),qo=a(Er,"P",{});var ei=c(qo);va=n(ei,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text2.`),ei.forEach(o),Er.forEach(o),$.forEach(o),rr=d(t),ae=a(t,"H2",{class:!0});var Pr=c(ae);xe=a(Pr,"A",{id:!0,class:!0,href:!0});var ti=c(xe);Ao=a(ti,"SPAN",{});var oi=c(Ao);u(it.$$.fragment,oi),oi.forEach(o),ti.forEach(o),Ta=d(Pr),Mo=a(Pr,"SPAN",{});var ri=c(Mo);ka=n(ri,"Speech2Text2ForCausalLM"),ri.forEach(o),Pr.forEach(o),nr=d(t),D=a(t,"DIV",{class:!0});var Se=c(D);u(lt.$$.fragment,Se),xa=d(Se),U=a(Se,"P",{});var we=c(U);ba=n(we,"The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Rt=a(we,"A",{href:!0});var ni=c(Rt);Sa=n(ni,"EncoderDecoderModel"),ni.forEach(o),wa=n(we," and "),Lo=a(we,"CODE",{});var si=c(Lo);ya=n(si,"SpeechEncoderDecoder"),si.forEach(o),$a=n(we,`.
This model inherits from `),Ht=a(we,"A",{href:!0});var ai=c(Ht);Ea=n(ai,"PreTrainedModel"),ai.forEach(o),Pa=n(we,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),we.forEach(o),za=d(Se),dt=a(Se,"P",{});var zr=c(dt);Ca=n(zr,"This model is also a PyTorch "),ht=a(zr,"A",{href:!0,rel:!0});var ci=c(ht);qa=n(ci,"torch.nn.Module"),ci.forEach(o),Aa=n(zr,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),zr.forEach(o),Ma=d(Se),Y=a(Se,"DIV",{class:!0});var ro=c(Y);u(pt.$$.fragment,ro),La=d(ro),Fo=a(ro,"P",{});var ii=c(Fo);Fa=n(ii,"Example:"),ii.forEach(o),ja=d(ro),u(ft.$$.fragment,ro),ro.forEach(o),Se.forEach(o),this.h()},h(){i(f,"name","hf:doc:metadata"),i(f,"content",JSON.stringify(gi)),i(S,"id","speech2text2"),i(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(S,"href","#speech2text2"),i(k,"class","relative group"),i(A,"id","overview"),i(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(A,"href","#overview"),i(C,"class","relative group"),i(_t,"href","/docs/transformers/v4.14.1/en/wav2vec2"),i(Ee,"href","https://arxiv.org/abs/2104.06678"),i(Ee,"rel","nofollow"),i(gt,"href","/docs/transformers/v4.14.1/en/wav2vec2"),i(vt,"href","/docs/transformers/v4.14.1/en/hubert"),i(Tt,"href","/docs/transformers/v4.14.1/en/speechencoderdecoder"),i(Pe,"href","https://huggingface.co/patrickvonplaten"),i(Pe,"rel","nofollow"),i(ze,"href","https://github.com/pytorch/fairseq/blob/1f7ef9ed1e1061f8c7f88f8b94c7186834398690/fairseq/models/wav2vec/wav2vec2_asr.py#L266"),i(ze,"rel","nofollow"),i(qe,"href","https://huggingface.co/models?other=speech2text2"),i(qe,"rel","nofollow"),i(xt,"href","/docs/transformers/v4.14.1/en/speechencoderdecoder"),i(Le,"href","https://github.com/glample/fastBPE%3E"),i(Le,"rel","nofollow"),i(le,"id","inference"),i(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(le,"href","#inference"),i(Z,"class","relative group"),i(St,"href","/docs/transformers/v4.14.1/en/model_doc/speechencoderdecoder#transformers.SpeechEncoderDecoderModel"),i(wt,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),i(yt,"href","/docs/transformers/v4.14.1/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),i($t,"href","/docs/transformers/v4.14.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(Et,"href","/docs/transformers/v4.14.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),i(Pt,"href","/docs/transformers/v4.14.1/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),i(zt,"href","/docs/transformers/v4.14.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(We,"href","https://huggingface.co/models?filter=speech2text2"),i(We,"rel","nofollow"),i(he,"id","transformers.Speech2Text2Config"),i(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(he,"href","#transformers.Speech2Text2Config"),i(ee,"class","relative group"),i(At,"href","/docs/transformers/v4.14.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2ForCausalLM"),i(Be,"href","https://huggingface.co/facebook/s2t-small-librispeech-asr"),i(Be,"rel","nofollow"),i(Mt,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),i(Lt,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),i(B,"class","docstring"),i(pe,"id","transformers.Speech2Text2Tokenizer"),i(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(pe,"href","#transformers.Speech2Text2Tokenizer"),i(re,"class","relative group"),i(Ft,"href","/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),i(fe,"class","docstring"),i(K,"class","docstring"),i(So,"class","docstring"),i(E,"class","docstring"),i(me,"id","transformers.Speech2Text2Processor"),i(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(me,"href","#transformers.Speech2Text2Processor"),i(ne,"class","relative group"),i(jt,"href","/docs/transformers/v4.14.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),i(Dt,"href","/docs/transformers/v4.14.1/en/model_doc/auto#transformers.AutoFeatureExtractor"),i(It,"href","/docs/transformers/v4.14.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(Xe,"href","/docs/transformers/v4.14.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.__call__"),i(Wt,"href","/docs/transformers/v4.14.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.decode"),i(Vt,"href","/docs/transformers/v4.14.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.as_target_processor"),i(Ze,"href","/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),i(ue,"class","docstring"),i(Nt,"href","/docs/transformers/v4.14.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),i(Q,"class","docstring"),i(Bt,"href","/docs/transformers/v4.14.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.from_pretrained"),i(X,"class","docstring"),i(Ot,"href","/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),i(ve,"class","docstring"),i(Ut,"href","/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),i(Te,"class","docstring"),i(ke,"class","docstring"),i(x,"class","docstring"),i(xe,"id","transformers.Speech2Text2ForCausalLM"),i(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(xe,"href","#transformers.Speech2Text2ForCausalLM"),i(ae,"class","relative group"),i(Rt,"href","/docs/transformers/v4.14.1/en/model_doc/encoderdecoder#transformers.EncoderDecoderModel"),i(Ht,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),i(ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),i(ht,"rel","nofollow"),i(Y,"class","docstring"),i(D,"class","docstring")},m(t,h){e(document.head,f),p(t,q,h),p(t,k,h),e(k,S),e(S,F),_(w,F,null),e(k,N),e(k,j),e(j,z),p(t,b,h),p(t,C,h),e(C,A),e(A,no),_($e,no,null),e(C,Cr),e(C,so),e(so,qr),p(t,Do,h),p(t,H,h),e(H,Ar),e(H,_t),e(_t,Mr),e(H,Lr),e(H,Ee),e(Ee,Fr),e(H,jr),p(t,Io,h),p(t,y,h),e(y,Dr),e(y,ao),e(ao,Ir),e(y,Wr),e(y,co),e(co,Vr),e(y,Nr),e(y,gt),e(gt,Br),e(y,Or),e(y,vt),e(vt,Ur),e(y,Rr),e(y,Tt),e(Tt,Hr),e(y,Jr),e(y,io),e(io,Gr),e(y,Kr),p(t,Wo,h),p(t,ce,h),e(ce,Qr),e(ce,Pe),e(Pe,Xr),e(ce,Yr),p(t,Vo,h),p(t,ie,h),e(ie,Zr),e(ie,ze),e(ze,en),e(ie,tn),p(t,No,h),p(t,kt,h),e(kt,on),p(t,Bo,h),p(t,J,h),e(J,Ce),e(Ce,rn),e(Ce,qe),e(qe,nn),e(Ce,sn),e(J,an),e(J,Ae),e(Ae,cn),e(Ae,xt),e(xt,ln),e(Ae,dn),e(J,hn),e(J,Me),e(Me,pn),e(Me,bt),e(bt,fn),e(bt,Le),e(Le,mn),e(Me,un),p(t,Oo,h),p(t,Z,h),e(Z,le),e(le,lo),_(Fe,lo,null),e(Z,_n),e(Z,ho),e(ho,gn),p(t,Uo,h),p(t,G,h),e(G,vn),e(G,St),e(St,Tn),e(G,kn),e(G,wt),e(wt,xn),e(G,bn),p(t,Ro,h),p(t,P,h),e(P,Sn),e(P,yt),e(yt,wn),e(P,yn),e(P,$t),e($t,$n),e(P,En),e(P,Et),e(Et,Pn),e(P,zn),e(P,Pt),e(Pt,Cn),e(P,qn),e(P,zt),e(zt,An),e(P,Mn),p(t,Ho,h),p(t,Ct,h),e(Ct,po),e(po,Ln),p(t,Jo,h),_(je,t,h),p(t,Go,h),p(t,qt,h),e(qt,De),e(De,fo),e(fo,Fn),e(De,jn),e(De,mo),e(mo,Dn),p(t,Ko,h),_(Ie,t,h),p(t,Qo,h),p(t,de,h),e(de,In),e(de,We),e(We,Wn),e(de,Vn),p(t,Xo,h),p(t,ee,h),e(ee,he),e(he,uo),_(Ve,uo,null),e(ee,Nn),e(ee,_o),e(_o,Bn),p(t,Yo,h),p(t,B,h),_(Ne,B,null),e(B,On),e(B,te),e(te,Un),e(te,At),e(At,Rn),e(te,Hn),e(te,Be),e(Be,Jn),e(te,Gn),e(B,Kn),e(B,oe),e(oe,Qn),e(oe,Mt),e(Mt,Xn),e(oe,Yn),e(oe,Lt),e(Lt,Zn),e(oe,es),p(t,Zo,h),p(t,re,h),e(re,pe),e(pe,go),_(Oe,go,null),e(re,ts),e(re,vo),e(vo,os),p(t,er,h),p(t,E,h),_(Ue,E,null),e(E,rs),e(E,To),e(To,ns),e(E,ss),e(E,Re),e(Re,as),e(Re,Ft),e(Ft,cs),e(Re,is),e(E,ls),e(E,fe),_(He,fe,null),e(fe,ds),e(fe,ko),e(ko,hs),e(E,ps),e(E,K),_(Je,K,null),e(K,fs),e(K,xo),e(xo,ms),e(K,us),e(K,Ge),e(Ge,_s),e(Ge,bo),e(bo,gs),e(Ge,vs),e(E,Ts),e(E,So),p(t,tr,h),p(t,ne,h),e(ne,me),e(me,wo),_(Ke,wo,null),e(ne,ks),e(ne,yo),e(yo,xs),p(t,or,h),p(t,x,h),_(Qe,x,null),e(x,bs),e(x,$o),e($o,Ss),e(x,ws),e(x,M),e(M,jt),e(jt,ys),e(M,$s),e(M,Dt),e(Dt,Es),e(M,Ps),e(M,It),e(It,zs),e(M,Cs),e(M,Xe),e(Xe,Eo),e(Eo,qs),e(Xe,As),e(M,Ms),e(M,Wt),e(Wt,Ls),e(M,Fs),e(x,js),e(x,ue),_(Ye,ue,null),e(ue,Ds),e(ue,O),e(O,Is),e(O,Po),e(Po,Ws),e(O,Vs),e(O,Vt),e(Vt,Ns),e(O,Bs),e(O,Ze),e(Ze,zo),e(zo,Os),e(Ze,Us),e(O,Rs),e(x,Hs),e(x,Q),_(et,Q,null),e(Q,Js),e(Q,tt),e(tt,Gs),e(tt,Nt),e(Nt,Ks),e(tt,Qs),e(Q,Xs),_(_e,Q,null),e(x,Ys),e(x,X),_(ot,X,null),e(X,Zs),e(X,se),e(se,ea),e(se,Co),e(Co,ta),e(se,oa),e(se,Bt),e(Bt,ra),e(se,na),e(X,sa),_(ge,X,null),e(x,aa),e(x,ve),_(rt,ve,null),e(ve,ca),e(ve,nt),e(nt,ia),e(nt,Ot),e(Ot,la),e(nt,da),e(x,ha),e(x,Te),_(st,Te,null),e(Te,pa),e(Te,at),e(at,fa),e(at,Ut),e(Ut,ma),e(at,ua),e(x,_a),e(x,ke),_(ct,ke,null),e(ke,ga),e(ke,qo),e(qo,va),p(t,rr,h),p(t,ae,h),e(ae,xe),e(xe,Ao),_(it,Ao,null),e(ae,Ta),e(ae,Mo),e(Mo,ka),p(t,nr,h),p(t,D,h),_(lt,D,null),e(D,xa),e(D,U),e(U,ba),e(U,Rt),e(Rt,Sa),e(U,wa),e(U,Lo),e(Lo,ya),e(U,$a),e(U,Ht),e(Ht,Ea),e(U,Pa),e(D,za),e(D,dt),e(dt,Ca),e(dt,ht),e(ht,qa),e(dt,Aa),e(D,Ma),e(D,Y),_(pt,Y,null),e(Y,La),e(Y,Fo),e(Fo,Fa),e(Y,ja),_(ft,Y,null),sr=!0},p(t,[h]){const mt={};h&2&&(mt.$$scope={dirty:h,ctx:t}),_e.$set(mt);const jo={};h&2&&(jo.$$scope={dirty:h,ctx:t}),ge.$set(jo)},i(t){sr||(g(w.$$.fragment,t),g($e.$$.fragment,t),g(Fe.$$.fragment,t),g(je.$$.fragment,t),g(Ie.$$.fragment,t),g(Ve.$$.fragment,t),g(Ne.$$.fragment,t),g(Oe.$$.fragment,t),g(Ue.$$.fragment,t),g(He.$$.fragment,t),g(Je.$$.fragment,t),g(Ke.$$.fragment,t),g(Qe.$$.fragment,t),g(Ye.$$.fragment,t),g(et.$$.fragment,t),g(_e.$$.fragment,t),g(ot.$$.fragment,t),g(ge.$$.fragment,t),g(rt.$$.fragment,t),g(st.$$.fragment,t),g(ct.$$.fragment,t),g(it.$$.fragment,t),g(lt.$$.fragment,t),g(pt.$$.fragment,t),g(ft.$$.fragment,t),sr=!0)},o(t){v(w.$$.fragment,t),v($e.$$.fragment,t),v(Fe.$$.fragment,t),v(je.$$.fragment,t),v(Ie.$$.fragment,t),v(Ve.$$.fragment,t),v(Ne.$$.fragment,t),v(Oe.$$.fragment,t),v(Ue.$$.fragment,t),v(He.$$.fragment,t),v(Je.$$.fragment,t),v(Ke.$$.fragment,t),v(Qe.$$.fragment,t),v(Ye.$$.fragment,t),v(et.$$.fragment,t),v(_e.$$.fragment,t),v(ot.$$.fragment,t),v(ge.$$.fragment,t),v(rt.$$.fragment,t),v(st.$$.fragment,t),v(ct.$$.fragment,t),v(it.$$.fragment,t),v(lt.$$.fragment,t),v(pt.$$.fragment,t),v(ft.$$.fragment,t),sr=!1},d(t){o(f),t&&o(q),t&&o(k),T(w),t&&o(b),t&&o(C),T($e),t&&o(Do),t&&o(H),t&&o(Io),t&&o(y),t&&o(Wo),t&&o(ce),t&&o(Vo),t&&o(ie),t&&o(No),t&&o(kt),t&&o(Bo),t&&o(J),t&&o(Oo),t&&o(Z),T(Fe),t&&o(Uo),t&&o(G),t&&o(Ro),t&&o(P),t&&o(Ho),t&&o(Ct),t&&o(Jo),T(je,t),t&&o(Go),t&&o(qt),t&&o(Ko),T(Ie,t),t&&o(Qo),t&&o(de),t&&o(Xo),t&&o(ee),T(Ve),t&&o(Yo),t&&o(B),T(Ne),t&&o(Zo),t&&o(re),T(Oe),t&&o(er),t&&o(E),T(Ue),T(He),T(Je),t&&o(tr),t&&o(ne),T(Ke),t&&o(or),t&&o(x),T(Qe),T(Ye),T(et),T(_e),T(ot),T(ge),T(rt),T(st),T(ct),t&&o(rr),t&&o(ae),T(it),t&&o(nr),t&&o(D),T(lt),T(pt),T(ft)}}}const gi={local:"speech2text2",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2Text2Config",title:"Speech2Text2Config"},{local:"transformers.Speech2Text2Tokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2Text2Processor",title:"Speech2Text2Processor"},{local:"transformers.Speech2Text2ForCausalLM",title:"Speech2Text2ForCausalLM"}],title:"Speech2Text2"};function vi(ye,f,q){let{fw:k}=f;return ye.$$set=S=>{"fw"in S&&q(0,k=S.fw)},[k]}class yi extends di{constructor(f){super();hi(this,f,vi,_i,pi,{fw:0})}}export{yi as default,gi as metadata};
