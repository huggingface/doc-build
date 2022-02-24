import{S as ur,i as gr,s as _r,e as a,k as i,w as T,t as n,M as vr,c as s,d as o,m as l,a as d,x as k,h as r,b as c,F as e,g as _,y as D,q as $,o as M,B as x}from"../../chunks/vendor-4833417e.js";import{T as br}from"../../chunks/Tip-fffd6df1.js";import{D as Ve}from"../../chunks/Docstring-44c5af16.js";import{C as kn}from"../../chunks/CodeBlock-90ffda97.js";import{I as Dn}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-04a16537.js";function wr(Be){let f,q,g,v,N;return{c(){f=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),v=n("Module"),N=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){f=s(S,"P",{});var P=d(f);q=r(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(P,"CODE",{});var J=d(g);v=r(J,"Module"),J.forEach(o),N=r(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(o)},m(S,P){_(S,f,P),e(f,q),e(f,g),e(g,v),e(f,N)},d(S){S&&o(f)}}}function yr(Be){let f,q,g,v,N,S,P,J,Mo,ho,b,xo,ye,qo,Po,Oe,jo,Co,Ee,zo,Ao,Se,Fo,Lo,po,j,No,Re,Wo,Io,X,Vo,Bo,mo,C,Oo,Te,Ro,Ho,ke,Jo,Uo,fo,W,U,He,ee,Go,Je,Yo,uo,u,oe,Zo,G,De,Ko,Qo,$e,Xo,et,ot,I,tt,Me,nt,rt,xe,at,st,dt,Ue,ct,it,te,lt,Y,ne,ht,re,pt,qe,mt,ft,ut,Z,ae,gt,V,_t,Ge,vt,bt,Ye,wt,yt,go,B,K,Ze,se,Et,Ke,St,_o,h,de,Tt,O,kt,Qe,Dt,$t,Xe,Mt,xt,qt,ce,Pt,ie,jt,Ct,zt,le,At,he,Ft,Lt,Nt,eo,Wt,It,pe,Vt,Pe,Bt,Ot,Rt,me,Ht,fe,Jt,Ut,Gt,z,je,Yt,Zt,oo,Kt,Qt,to,Xt,en,on,w,ue,tn,R,nn,Ce,rn,an,no,sn,dn,cn,Q,ln,ro,hn,pn,ge,mn,y,_e,fn,ao,un,gn,H,_n,so,vn,bn,co,wn,yn,En,io,Sn,Tn,ve,vo;return S=new Dn({}),ee=new Dn({}),oe=new Ve({props:{name:"class transformers.SpeechEncoderDecoderConfig",anchor:"transformers.SpeechEncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L27",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}]}}),te=new kn({props:{code:`from transformers import BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

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
model = SpeechEncoderDecoderModel.from_pretrained("my-model", config=encoder_decoder_config),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),ne=new Ve({props:{name:"from_encoder_decoder_configs",anchor:"transformers.SpeechEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L92",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a></p>
`}}),ae=new Ve({props:{name:"to_dict",anchor:"transformers.SpeechEncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L109",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),se=new Dn({}),de=new Ve({props:{name:"class transformers.SpeechEncoderDecoderModel",anchor:"transformers.SpeechEncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L174",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ue=new Ve({props:{name:"forward",anchor:"transformers.SpeechEncoderDecoderModel.forward",parameters:[{name:"inputs",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"input_values",val:" = None"},{name:"input_features",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L442",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.forward.inputs",description:`<strong>inputs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform or speech features. Values can be obtained by loading a <em>.flac</em>
or <em>.wav</em> audio file into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile
library (<em>pip install soundfile</em>). To prepare the array into <em>inputs</em>, either the <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> or
<a href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextProcessor">Speech2TextProcessor</a> should be used for padding and conversion into a tensor of type
<em>torch.FloatTensor</em>.`,name:"inputs"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>, <em>optional</em>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`}}),Q=new br({props:{$$slots:{default:[wr]},$$scope:{ctx:Be}}}),ge=new kn({props:{code:`from transformers import SpeechEncoderDecoderModel, Speech2Text2Processor
from datasets import load_dataset
import torch

processor = Speech2Text2Processor.from_pretrained("facebook/s2t-wav2vec2-large-en-de")
model = SpeechEncoderDecoderModel.from_pretrained("facebook/s2t-wav2vec2-large-en-de")

ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")

input_values = processor(ds[0]["audio"]["array"], return_tensors="pt").input_values
decoder_input_ids = torch.tensor([[model.config.decoder.decoder_start_token_id]])
outputs = model(input_values=input_values, decoder_input_ids=decoder_input_ids)

# inference (generation)
generated = model.generate(input_values)
translation = processor.batch_decode(generated),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel, Speech2Text2Processor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2Text2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = torch.tensor([[model.config.decoder.decoder_start_token_id]])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_values=input_values, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference (generation)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>translation = processor.batch_decode(generated)`}}),_e=new Ve({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L286",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),ve=new kn({props:{code:`from transformers import SpeechEncoderDecoderModel

# initialize a wav2vec2bert from a pretrained Wav2Vec2 and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized
model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
    "facebook/wav2vec2-base-960h", "bert-base-uncased"
)
# saving model after fine-tuning
model.save_pretrained("./wav2vec2bert")
# load fine-tuned model
model = SpeechEncoderDecoderModel.from_pretrained("./wav2vec2bert"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a wav2vec2bert from a pretrained Wav2Vec2 and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./wav2vec2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2bert&quot;</span>)`}}),{c(){f=a("meta"),q=i(),g=a("h1"),v=a("a"),N=a("span"),T(S.$$.fragment),P=i(),J=a("span"),Mo=n("Speech Encoder Decoder Models"),ho=i(),b=a("p"),xo=n("The "),ye=a("a"),qo=n("SpeechEncoderDecoderModel"),Po=n(` can be used to initialize a speech-sequence-to-text-sequence model
with any pretrained speech autoencoding model as the encoder (`),Oe=a("em"),jo=n("e.g."),Co=i(),Ee=a("a"),zo=n("Wav2Vec2"),Ao=n(", "),Se=a("a"),Fo=n("Hubert"),Lo=n(") and any pretrained autoregressive model as the decoder."),po=i(),j=a("p"),No=n(`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),Re=a("em"),Wo=n("e.g."),Io=n(" been shown in "),X=a("a"),Vo=n(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Bo=n(` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),mo=i(),C=a("p"),Oo=n("An example of how to use a "),Te=a("a"),Ro=n("SpeechEncoderDecoderModel"),Ho=n(` for inference can be seen in
`),ke=a("a"),Jo=n("Speech2Text2"),Uo=n("."),fo=i(),W=a("h2"),U=a("a"),He=a("span"),T(ee.$$.fragment),Go=i(),Je=a("span"),Yo=n("SpeechEncoderDecoderConfig"),uo=i(),u=a("div"),T(oe.$$.fragment),Zo=i(),G=a("p"),De=a("a"),Ko=n("SpeechEncoderDecoderConfig"),Qo=n(` is the configuration class to store the configuration of a
`),$e=a("a"),Xo=n("SpeechEncoderDecoderModel"),et=n(`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),ot=i(),I=a("p"),tt=n("Configuration objects inherit from "),Me=a("a"),nt=n("PretrainedConfig"),rt=n(` and can be used to control the model outputs. Read the
documentation from `),xe=a("a"),at=n("PretrainedConfig"),st=n(" for more information."),dt=i(),Ue=a("p"),ct=n("Examples:"),it=i(),T(te.$$.fragment),lt=i(),Y=a("div"),T(ne.$$.fragment),ht=i(),re=a("p"),pt=n("Instantiate a "),qe=a("a"),mt=n("SpeechEncoderDecoderConfig"),ft=n(` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),ut=i(),Z=a("div"),T(ae.$$.fragment),gt=i(),V=a("p"),_t=n("Serializes this instance to a Python dictionary. Override the default "),Ge=a("em"),vt=n("to_dict()"),bt=n(" from "),Ye=a("em"),wt=n("PretrainedConfig"),yt=n("."),go=i(),B=a("h2"),K=a("a"),Ze=a("span"),T(se.$$.fragment),Et=i(),Ke=a("span"),St=n("SpeechEncoderDecoderModel"),_o=i(),h=a("div"),T(de.$$.fragment),Tt=i(),O=a("p"),kt=n(`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Qe=a("code"),Dt=n("from_pretrained()"),$t=n(`function and the decoder is loaded via
`),Xe=a("code"),Mt=n("from_pretrained()"),xt=n(`function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),qt=i(),ce=a("p"),Pt=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),ie=a("a"),jt=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ct=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),zt=i(),le=a("p"),At=n("Additionally, in "),he=a("a"),Ft=n(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Lt=n(` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Nt=i(),eo=a("p"),Wt=n(`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),It=i(),pe=a("p"),Vt=n("This model inherits from "),Pe=a("a"),Bt=n("PreTrainedModel"),Ot=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rt=i(),me=a("p"),Ht=n("This model is also a PyTorch "),fe=a("a"),Jt=n("torch.nn.Module"),Ut=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gt=i(),z=a("p"),je=a("a"),Yt=n("SpeechEncoderDecoderModel"),Zt=n(` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),oo=a("em"),Kt=n("~transformers.AutoModel.from_pretrained"),Qt=n(` class method for the encoder and
:meth`),to=a("em"),Xt=n("~transformers.AutoModelForCausalLM.from_pretrained"),en=n(" class method for the decoder."),on=i(),w=a("div"),T(ue.$$.fragment),tn=i(),R=a("p"),nn=n("The "),Ce=a("a"),rn=n("SpeechEncoderDecoderModel"),an=n(" forward method, overrides the "),no=a("code"),sn=n("__call__"),dn=n(" special method."),cn=i(),T(Q.$$.fragment),ln=i(),ro=a("p"),hn=n("Examples:"),pn=i(),T(ge.$$.fragment),mn=i(),y=a("div"),T(_e.$$.fragment),fn=i(),ao=a("p"),un=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),gn=i(),H=a("p"),_n=n("The model is set in evaluation mode by default using "),so=a("code"),vn=n("model.eval()"),bn=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),co=a("code"),wn=n("model.train()"),yn=n("."),En=i(),io=a("p"),Sn=n("Example:"),Tn=i(),T(ve.$$.fragment),this.h()},l(t){const p=vr('[data-svelte="svelte-1phssyn"]',document.head);f=s(p,"META",{name:!0,content:!0}),p.forEach(o),q=l(t),g=s(t,"H1",{class:!0});var be=d(g);v=s(be,"A",{id:!0,class:!0,href:!0});var $n=d(v);N=s($n,"SPAN",{});var Mn=d(N);k(S.$$.fragment,Mn),Mn.forEach(o),$n.forEach(o),P=l(be),J=s(be,"SPAN",{});var xn=d(J);Mo=r(xn,"Speech Encoder Decoder Models"),xn.forEach(o),be.forEach(o),ho=l(t),b=s(t,"P",{});var A=d(b);xo=r(A,"The "),ye=s(A,"A",{href:!0});var qn=d(ye);qo=r(qn,"SpeechEncoderDecoderModel"),qn.forEach(o),Po=r(A,` can be used to initialize a speech-sequence-to-text-sequence model
with any pretrained speech autoencoding model as the encoder (`),Oe=s(A,"EM",{});var Pn=d(Oe);jo=r(Pn,"e.g."),Pn.forEach(o),Co=l(A),Ee=s(A,"A",{href:!0});var jn=d(Ee);zo=r(jn,"Wav2Vec2"),jn.forEach(o),Ao=r(A,", "),Se=s(A,"A",{href:!0});var Cn=d(Se);Fo=r(Cn,"Hubert"),Cn.forEach(o),Lo=r(A,") and any pretrained autoregressive model as the decoder."),A.forEach(o),po=l(t),j=s(t,"P",{});var ze=d(j);No=r(ze,`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),Re=s(ze,"EM",{});var zn=d(Re);Wo=r(zn,"e.g."),zn.forEach(o),Io=r(ze," been shown in "),X=s(ze,"A",{href:!0,rel:!0});var An=d(X);Vo=r(An,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),An.forEach(o),Bo=r(ze,` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),ze.forEach(o),mo=l(t),C=s(t,"P",{});var Ae=d(C);Oo=r(Ae,"An example of how to use a "),Te=s(Ae,"A",{href:!0});var Fn=d(Te);Ro=r(Fn,"SpeechEncoderDecoderModel"),Fn.forEach(o),Ho=r(Ae,` for inference can be seen in
`),ke=s(Ae,"A",{href:!0});var Ln=d(ke);Jo=r(Ln,"Speech2Text2"),Ln.forEach(o),Uo=r(Ae,"."),Ae.forEach(o),fo=l(t),W=s(t,"H2",{class:!0});var bo=d(W);U=s(bo,"A",{id:!0,class:!0,href:!0});var Nn=d(U);He=s(Nn,"SPAN",{});var Wn=d(He);k(ee.$$.fragment,Wn),Wn.forEach(o),Nn.forEach(o),Go=l(bo),Je=s(bo,"SPAN",{});var In=d(Je);Yo=r(In,"SpeechEncoderDecoderConfig"),In.forEach(o),bo.forEach(o),uo=l(t),u=s(t,"DIV",{class:!0});var E=d(u);k(oe.$$.fragment,E),Zo=l(E),G=s(E,"P",{});var lo=d(G);De=s(lo,"A",{href:!0});var Vn=d(De);Ko=r(Vn,"SpeechEncoderDecoderConfig"),Vn.forEach(o),Qo=r(lo,` is the configuration class to store the configuration of a
`),$e=s(lo,"A",{href:!0});var Bn=d($e);Xo=r(Bn,"SpeechEncoderDecoderModel"),Bn.forEach(o),et=r(lo,`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),lo.forEach(o),ot=l(E),I=s(E,"P",{});var Fe=d(I);tt=r(Fe,"Configuration objects inherit from "),Me=s(Fe,"A",{href:!0});var On=d(Me);nt=r(On,"PretrainedConfig"),On.forEach(o),rt=r(Fe,` and can be used to control the model outputs. Read the
documentation from `),xe=s(Fe,"A",{href:!0});var Rn=d(xe);at=r(Rn,"PretrainedConfig"),Rn.forEach(o),st=r(Fe," for more information."),Fe.forEach(o),dt=l(E),Ue=s(E,"P",{});var Hn=d(Ue);ct=r(Hn,"Examples:"),Hn.forEach(o),it=l(E),k(te.$$.fragment,E),lt=l(E),Y=s(E,"DIV",{class:!0});var wo=d(Y);k(ne.$$.fragment,wo),ht=l(wo),re=s(wo,"P",{});var yo=d(re);pt=r(yo,"Instantiate a "),qe=s(yo,"A",{href:!0});var Jn=d(qe);mt=r(Jn,"SpeechEncoderDecoderConfig"),Jn.forEach(o),ft=r(yo,` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),yo.forEach(o),wo.forEach(o),ut=l(E),Z=s(E,"DIV",{class:!0});var Eo=d(Z);k(ae.$$.fragment,Eo),gt=l(Eo),V=s(Eo,"P",{});var Le=d(V);_t=r(Le,"Serializes this instance to a Python dictionary. Override the default "),Ge=s(Le,"EM",{});var Un=d(Ge);vt=r(Un,"to_dict()"),Un.forEach(o),bt=r(Le," from "),Ye=s(Le,"EM",{});var Gn=d(Ye);wt=r(Gn,"PretrainedConfig"),Gn.forEach(o),yt=r(Le,"."),Le.forEach(o),Eo.forEach(o),E.forEach(o),go=l(t),B=s(t,"H2",{class:!0});var So=d(B);K=s(So,"A",{id:!0,class:!0,href:!0});var Yn=d(K);Ze=s(Yn,"SPAN",{});var Zn=d(Ze);k(se.$$.fragment,Zn),Zn.forEach(o),Yn.forEach(o),Et=l(So),Ke=s(So,"SPAN",{});var Kn=d(Ke);St=r(Kn,"SpeechEncoderDecoderModel"),Kn.forEach(o),So.forEach(o),_o=l(t),h=s(t,"DIV",{class:!0});var m=d(h);k(de.$$.fragment,m),Tt=l(m),O=s(m,"P",{});var Ne=d(O);kt=r(Ne,`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Qe=s(Ne,"CODE",{});var Qn=d(Qe);Dt=r(Qn,"from_pretrained()"),Qn.forEach(o),$t=r(Ne,`function and the decoder is loaded via
`),Xe=s(Ne,"CODE",{});var Xn=d(Xe);Mt=r(Xn,"from_pretrained()"),Xn.forEach(o),xt=r(Ne,`function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),Ne.forEach(o),qt=l(m),ce=s(m,"P",{});var To=d(ce);Pt=r(To,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),ie=s(To,"A",{href:!0,rel:!0});var er=d(ie);jt=r(er,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),er.forEach(o),Ct=r(To,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),To.forEach(o),zt=l(m),le=s(m,"P",{});var ko=d(le);At=r(ko,"Additionally, in "),he=s(ko,"A",{href:!0,rel:!0});var or=d(he);Ft=r(or,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),or.forEach(o),Lt=r(ko,` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),ko.forEach(o),Nt=l(m),eo=s(m,"P",{});var tr=d(eo);Wt=r(tr,`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),tr.forEach(o),It=l(m),pe=s(m,"P",{});var Do=d(pe);Vt=r(Do,"This model inherits from "),Pe=s(Do,"A",{href:!0});var nr=d(Pe);Bt=r(nr,"PreTrainedModel"),nr.forEach(o),Ot=r(Do,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Do.forEach(o),Rt=l(m),me=s(m,"P",{});var $o=d(me);Ht=r($o,"This model is also a PyTorch "),fe=s($o,"A",{href:!0,rel:!0});var rr=d(fe);Jt=r(rr,"torch.nn.Module"),rr.forEach(o),Ut=r($o,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$o.forEach(o),Gt=l(m),z=s(m,"P",{});var we=d(z);je=s(we,"A",{href:!0});var ar=d(je);Yt=r(ar,"SpeechEncoderDecoderModel"),ar.forEach(o),Zt=r(we,` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),oo=s(we,"EM",{});var sr=d(oo);Kt=r(sr,"~transformers.AutoModel.from_pretrained"),sr.forEach(o),Qt=r(we,` class method for the encoder and
:meth`),to=s(we,"EM",{});var dr=d(to);Xt=r(dr,"~transformers.AutoModelForCausalLM.from_pretrained"),dr.forEach(o),en=r(we," class method for the decoder."),we.forEach(o),on=l(m),w=s(m,"DIV",{class:!0});var F=d(w);k(ue.$$.fragment,F),tn=l(F),R=s(F,"P",{});var We=d(R);nn=r(We,"The "),Ce=s(We,"A",{href:!0});var cr=d(Ce);rn=r(cr,"SpeechEncoderDecoderModel"),cr.forEach(o),an=r(We," forward method, overrides the "),no=s(We,"CODE",{});var ir=d(no);sn=r(ir,"__call__"),ir.forEach(o),dn=r(We," special method."),We.forEach(o),cn=l(F),k(Q.$$.fragment,F),ln=l(F),ro=s(F,"P",{});var lr=d(ro);hn=r(lr,"Examples:"),lr.forEach(o),pn=l(F),k(ge.$$.fragment,F),F.forEach(o),mn=l(m),y=s(m,"DIV",{class:!0});var L=d(y);k(_e.$$.fragment,L),fn=l(L),ao=s(L,"P",{});var hr=d(ao);un=r(hr,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),hr.forEach(o),gn=l(L),H=s(L,"P",{});var Ie=d(H);_n=r(Ie,"The model is set in evaluation mode by default using "),so=s(Ie,"CODE",{});var pr=d(so);vn=r(pr,"model.eval()"),pr.forEach(o),bn=r(Ie,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),co=s(Ie,"CODE",{});var mr=d(co);wn=r(mr,"model.train()"),mr.forEach(o),yn=r(Ie,"."),Ie.forEach(o),En=l(L),io=s(L,"P",{});var fr=d(io);Sn=r(fr,"Example:"),fr.forEach(o),Tn=l(L),k(ve.$$.fragment,L),L.forEach(o),m.forEach(o),this.h()},h(){c(f,"name","hf:doc:metadata"),c(f,"content",JSON.stringify(Er)),c(v,"id","speech-encoder-decoder-models"),c(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(v,"href","#speech-encoder-decoder-models"),c(g,"class","relative group"),c(ye,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(Ee,"href","wav2vec2"),c(Se,"href","hubert"),c(X,"href","https://arxiv.org/abs/2104.06678"),c(X,"rel","nofollow"),c(Te,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(ke,"href","speech_to_text_2"),c(U,"id","transformers.SpeechEncoderDecoderConfig"),c(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(U,"href","#transformers.SpeechEncoderDecoderConfig"),c(W,"class","relative group"),c(De,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),c($e,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(Me,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(xe,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(qe,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),c(Y,"class","docstring"),c(Z,"class","docstring"),c(u,"class","docstring"),c(K,"id","transformers.SpeechEncoderDecoderModel"),c(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(K,"href","#transformers.SpeechEncoderDecoderModel"),c(B,"class","relative group"),c(ie,"href","https://arxiv.org/abs/1907.12461"),c(ie,"rel","nofollow"),c(he,"href","https://arxiv.org/abs/2104.06678"),c(he,"rel","nofollow"),c(Pe,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(fe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fe,"rel","nofollow"),c(je,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(Ce,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(w,"class","docstring"),c(y,"class","docstring"),c(h,"class","docstring")},m(t,p){e(document.head,f),_(t,q,p),_(t,g,p),e(g,v),e(v,N),D(S,N,null),e(g,P),e(g,J),e(J,Mo),_(t,ho,p),_(t,b,p),e(b,xo),e(b,ye),e(ye,qo),e(b,Po),e(b,Oe),e(Oe,jo),e(b,Co),e(b,Ee),e(Ee,zo),e(b,Ao),e(b,Se),e(Se,Fo),e(b,Lo),_(t,po,p),_(t,j,p),e(j,No),e(j,Re),e(Re,Wo),e(j,Io),e(j,X),e(X,Vo),e(j,Bo),_(t,mo,p),_(t,C,p),e(C,Oo),e(C,Te),e(Te,Ro),e(C,Ho),e(C,ke),e(ke,Jo),e(C,Uo),_(t,fo,p),_(t,W,p),e(W,U),e(U,He),D(ee,He,null),e(W,Go),e(W,Je),e(Je,Yo),_(t,uo,p),_(t,u,p),D(oe,u,null),e(u,Zo),e(u,G),e(G,De),e(De,Ko),e(G,Qo),e(G,$e),e($e,Xo),e(G,et),e(u,ot),e(u,I),e(I,tt),e(I,Me),e(Me,nt),e(I,rt),e(I,xe),e(xe,at),e(I,st),e(u,dt),e(u,Ue),e(Ue,ct),e(u,it),D(te,u,null),e(u,lt),e(u,Y),D(ne,Y,null),e(Y,ht),e(Y,re),e(re,pt),e(re,qe),e(qe,mt),e(re,ft),e(u,ut),e(u,Z),D(ae,Z,null),e(Z,gt),e(Z,V),e(V,_t),e(V,Ge),e(Ge,vt),e(V,bt),e(V,Ye),e(Ye,wt),e(V,yt),_(t,go,p),_(t,B,p),e(B,K),e(K,Ze),D(se,Ze,null),e(B,Et),e(B,Ke),e(Ke,St),_(t,_o,p),_(t,h,p),D(de,h,null),e(h,Tt),e(h,O),e(O,kt),e(O,Qe),e(Qe,Dt),e(O,$t),e(O,Xe),e(Xe,Mt),e(O,xt),e(h,qt),e(h,ce),e(ce,Pt),e(ce,ie),e(ie,jt),e(ce,Ct),e(h,zt),e(h,le),e(le,At),e(le,he),e(he,Ft),e(le,Lt),e(h,Nt),e(h,eo),e(eo,Wt),e(h,It),e(h,pe),e(pe,Vt),e(pe,Pe),e(Pe,Bt),e(pe,Ot),e(h,Rt),e(h,me),e(me,Ht),e(me,fe),e(fe,Jt),e(me,Ut),e(h,Gt),e(h,z),e(z,je),e(je,Yt),e(z,Zt),e(z,oo),e(oo,Kt),e(z,Qt),e(z,to),e(to,Xt),e(z,en),e(h,on),e(h,w),D(ue,w,null),e(w,tn),e(w,R),e(R,nn),e(R,Ce),e(Ce,rn),e(R,an),e(R,no),e(no,sn),e(R,dn),e(w,cn),D(Q,w,null),e(w,ln),e(w,ro),e(ro,hn),e(w,pn),D(ge,w,null),e(h,mn),e(h,y),D(_e,y,null),e(y,fn),e(y,ao),e(ao,un),e(y,gn),e(y,H),e(H,_n),e(H,so),e(so,vn),e(H,bn),e(H,co),e(co,wn),e(H,yn),e(y,En),e(y,io),e(io,Sn),e(y,Tn),D(ve,y,null),vo=!0},p(t,[p]){const be={};p&2&&(be.$$scope={dirty:p,ctx:t}),Q.$set(be)},i(t){vo||($(S.$$.fragment,t),$(ee.$$.fragment,t),$(oe.$$.fragment,t),$(te.$$.fragment,t),$(ne.$$.fragment,t),$(ae.$$.fragment,t),$(se.$$.fragment,t),$(de.$$.fragment,t),$(ue.$$.fragment,t),$(Q.$$.fragment,t),$(ge.$$.fragment,t),$(_e.$$.fragment,t),$(ve.$$.fragment,t),vo=!0)},o(t){M(S.$$.fragment,t),M(ee.$$.fragment,t),M(oe.$$.fragment,t),M(te.$$.fragment,t),M(ne.$$.fragment,t),M(ae.$$.fragment,t),M(se.$$.fragment,t),M(de.$$.fragment,t),M(ue.$$.fragment,t),M(Q.$$.fragment,t),M(ge.$$.fragment,t),M(_e.$$.fragment,t),M(ve.$$.fragment,t),vo=!1},d(t){o(f),t&&o(q),t&&o(g),x(S),t&&o(ho),t&&o(b),t&&o(po),t&&o(j),t&&o(mo),t&&o(C),t&&o(fo),t&&o(W),x(ee),t&&o(uo),t&&o(u),x(oe),x(te),x(ne),x(ae),t&&o(go),t&&o(B),x(se),t&&o(_o),t&&o(h),x(de),x(ue),x(Q),x(ge),x(_e),x(ve)}}}const Er={local:"speech-encoder-decoder-models",sections:[{local:"transformers.SpeechEncoderDecoderConfig",title:"SpeechEncoderDecoderConfig"},{local:"transformers.SpeechEncoderDecoderModel",title:"SpeechEncoderDecoderModel"}],title:"Speech Encoder Decoder Models"};function Sr(Be,f,q){let{fw:g}=f;return Be.$$set=v=>{"fw"in v&&q(0,g=v.fw)},[g]}class qr extends ur{constructor(f){super();gr(this,f,Sr,yr,_r,{fw:0})}}export{qr as default,Er as metadata};
