import{S as Ts,i as xs,s as Ms,e as r,k as i,w as b,t as n,M as Ds,c as s,d as o,m as l,a as d,x as y,h as t,b as c,F as e,g as u,y as w,q as E,o as k,B as S,v as $s}from"../../chunks/vendor-6b77c823.js";import{T as Ss}from"../../chunks/Tip-39098574.js";import{D as ne}from"../../chunks/Docstring-abef54e3.js";import{C as en}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as xn}from"../../chunks/IconCopyLink-7a11ce68.js";function js(Je){let h,C,g,D,F;return{c(){h=r("p"),C=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),D=n("Module"),F=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=s(T,"P",{});var M=d(h);C=t(M,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(M,"CODE",{});var L=d(g);D=t(L,"Module"),L.forEach(o),F=t(M,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),M.forEach(o)},m(T,M){u(T,h,M),e(h,C),e(h,g),e(g,D),e(h,F)},d(T){T&&o(h)}}}function qs(Je){let h,C,g,D,F;return{c(){h=r("p"),C=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),D=n("Module"),F=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=s(T,"P",{});var M=d(h);C=t(M,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(M,"CODE",{});var L=d(g);D=t(L,"Module"),L.forEach(o),F=t(M,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),M.forEach(o)},m(T,M){u(T,h,M),e(h,C),e(h,g),e(g,D),e(h,F)},d(T){T&&o(h)}}}function Ps(Je){let h,C,g,D,F,T,M,L,Mn,on,$,Dn,Ye,$n,jn,To,qn,Pn,Ze,zn,Fn,Ke,Cn,An,nn,N,Ln,xo,Nn,In,he,Vn,Wn,tn,I,On,Qe,Bn,Rn,Xe,Un,Hn,an,H,te,Mo,me,Gn,Do,Jn,rn,x,fe,Yn,ae,eo,Zn,Kn,oo,Qn,Xn,et,G,ot,no,nt,tt,to,at,rt,st,$o,dt,ct,ue,it,re,ge,lt,_e,pt,ao,ht,mt,ft,se,ve,ut,J,gt,jo,_t,vt,qo,bt,yt,sn,Y,de,Po,be,wt,zo,Et,dn,m,ye,kt,Z,St,ro,Tt,xt,so,Mt,Dt,$t,we,jt,Ee,qt,Pt,zt,ke,Ft,Se,Ct,At,Lt,Fo,Nt,It,Te,Vt,co,Wt,Ot,Bt,xe,Rt,Me,Ut,Ht,Gt,V,io,Jt,Yt,Co,Zt,Kt,Ao,Qt,Xt,ea,j,De,oa,K,na,lo,ta,aa,Lo,ra,sa,da,ce,ca,No,ia,la,$e,pa,q,je,ha,Io,ma,fa,Q,ua,Vo,ga,_a,Wo,va,ba,ya,Oo,wa,Ea,qe,cn,X,ie,Bo,Pe,ka,Ro,Sa,ln,f,ze,Ta,ee,xa,po,Ma,Da,ho,$a,ja,qa,Fe,Pa,Ce,za,Fa,Ca,Ae,Aa,Le,La,Na,Ia,Uo,Va,Wa,Ne,Oa,mo,Ba,Ra,Ua,Ie,Ha,Ve,Ga,Ja,Ya,W,fo,Za,Ka,Ho,Qa,Xa,Go,er,or,nr,P,We,tr,oe,ar,uo,rr,sr,Jo,dr,cr,ir,le,lr,Yo,pr,hr,Oe,mr,A,Be,fr,Zo,ur,gr,Ko,_r,vr,Re,pn;return T=new xn({}),me=new xn({}),fe=new ne({props:{name:"class transformers.SpeechEncoderDecoderConfig",anchor:"transformers.SpeechEncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L27",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}]}}),ue=new en({props:{code:`from transformers import BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),ge=new ne({props:{name:"from_encoder_decoder_configs",anchor:"transformers.SpeechEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L92",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a></p>
`}}),ve=new ne({props:{name:"to_dict",anchor:"transformers.SpeechEncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L109",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),be=new xn({}),ye=new ne({props:{name:"class transformers.SpeechEncoderDecoderModel",anchor:"transformers.SpeechEncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L173",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),De=new ne({props:{name:"forward",anchor:"transformers.SpeechEncoderDecoderModel.forward",parameters:[{name:"inputs",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"input_values",val:" = None"},{name:"input_features",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L441",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.forward.inputs",description:`<strong>inputs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform or speech features. Values can be obtained by loading a <em>.flac</em>
or <em>.wav</em> audio file into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile
library (<em>pip install soundfile</em>). To prepare the array into <em>inputs</em>, either the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> or
<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextProcessor">Speech2TextProcessor</a> should be used for padding and conversion into a tensor of type
<em>torch.FloatTensor</em>.`,name:"inputs"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>, <em>optional</em>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ce=new Ss({props:{$$slots:{default:[js]},$$scope:{ctx:Je}}}),$e=new en({props:{code:`from transformers import SpeechEncoderDecoderModel, Wav2Vec2Processor
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),je=new ne({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L285",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),qe=new en({props:{code:`from transformers import SpeechEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2bert&quot;</span>)`}}),Pe=new xn({}),ze=new ne({props:{name:"class transformers.FlaxSpeechEncoderDecoderModel",anchor:"transformers.FlaxSpeechEncoderDecoderModel",parameters:[{name:"config",val:": SpeechEncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L320",parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),We=new ne({props:{name:"__call__",anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__",parameters:[{name:"inputs",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L633",parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.inputs",description:`<strong>inputs</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform or speech features. Values can be obtained by loading a <em>.flac</em>
or <em>.wav</em> audio file into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile
library (<em>pip install soundfile</em>). To prepare the array into <em>inputs</em>, either the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> or
<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextProcessor">Speech2TextProcessor</a> should be used for padding and conversion into a tensor of type
<em>torch.FloatTensor</em>.`,name:"inputs"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new Ss({props:{$$slots:{default:[qs]},$$scope:{ctx:Je}}}),Oe=new en({props:{code:`from transformers import FlaxSpeechEncoderDecoderModel, BartTokenizer

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
<span class="hljs-comment"># Assert something? More interesting input? dtype correct?</span>`}}),Be=new ne({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L754",parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),Re=new en({props:{code:`from transformers import FlaxSpeechEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxSpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2-2-bart-large&quot;</span>)`}}),{c(){h=r("meta"),C=i(),g=r("h1"),D=r("a"),F=r("span"),b(T.$$.fragment),M=i(),L=r("span"),Mn=n("Speech Encoder Decoder Models"),on=i(),$=r("p"),Dn=n("The "),Ye=r("a"),$n=n("SpeechEncoderDecoderModel"),jn=n(` can be used to initialize a speech-sequence-to-text-sequence model
with any pretrained speech autoencoding model as the encoder (`),To=r("em"),qn=n("e.g."),Pn=i(),Ze=r("a"),zn=n("Wav2Vec2"),Fn=n(", "),Ke=r("a"),Cn=n("Hubert"),An=n(") and any pretrained autoregressive model as the decoder."),nn=i(),N=r("p"),Ln=n(`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),xo=r("em"),Nn=n("e.g."),In=n(" been shown in "),he=r("a"),Vn=n(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Wn=n(` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),tn=i(),I=r("p"),On=n("An example of how to use a "),Qe=r("a"),Bn=n("SpeechEncoderDecoderModel"),Rn=n(` for inference can be seen in
`),Xe=r("a"),Un=n("Speech2Text2"),Hn=n("."),an=i(),H=r("h2"),te=r("a"),Mo=r("span"),b(me.$$.fragment),Gn=i(),Do=r("span"),Jn=n("SpeechEncoderDecoderConfig"),rn=i(),x=r("div"),b(fe.$$.fragment),Yn=i(),ae=r("p"),eo=r("a"),Zn=n("SpeechEncoderDecoderConfig"),Kn=n(` is the configuration class to store the configuration of a
`),oo=r("a"),Qn=n("SpeechEncoderDecoderModel"),Xn=n(`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),et=i(),G=r("p"),ot=n("Configuration objects inherit from "),no=r("a"),nt=n("PretrainedConfig"),tt=n(` and can be used to control the model outputs. Read the
documentation from `),to=r("a"),at=n("PretrainedConfig"),rt=n(" for more information."),st=i(),$o=r("p"),dt=n("Examples:"),ct=i(),b(ue.$$.fragment),it=i(),re=r("div"),b(ge.$$.fragment),lt=i(),_e=r("p"),pt=n("Instantiate a "),ao=r("a"),ht=n("SpeechEncoderDecoderConfig"),mt=n(` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),ft=i(),se=r("div"),b(ve.$$.fragment),ut=i(),J=r("p"),gt=n("Serializes this instance to a Python dictionary. Override the default "),jo=r("em"),_t=n("to_dict()"),vt=n(" from "),qo=r("em"),bt=n("PretrainedConfig"),yt=n("."),sn=i(),Y=r("h2"),de=r("a"),Po=r("span"),b(be.$$.fragment),wt=i(),zo=r("span"),Et=n("SpeechEncoderDecoderModel"),dn=i(),m=r("div"),b(ye.$$.fragment),kt=i(),Z=r("p"),St=n(`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),ro=r("a"),Tt=n("from_pretrained()"),xt=n(` function and the decoder is loaded via
`),so=r("a"),Mt=n("from_pretrained()"),Dt=n(` function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),$t=i(),we=r("p"),jt=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ee=r("a"),qt=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Pt=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),zt=i(),ke=r("p"),Ft=n("Additionally, in "),Se=r("a"),Ct=n(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),At=n(` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Lt=i(),Fo=r("p"),Nt=n(`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),It=i(),Te=r("p"),Vt=n("This model inherits from "),co=r("a"),Wt=n("PreTrainedModel"),Ot=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bt=i(),xe=r("p"),Rt=n("This model is also a PyTorch "),Me=r("a"),Ut=n("torch.nn.Module"),Ht=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gt=i(),V=r("p"),io=r("a"),Jt=n("SpeechEncoderDecoderModel"),Yt=n(` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),Co=r("em"),Zt=n("~transformers.AutoModel.from_pretrained"),Kt=n(` class method for the encoder and
:meth`),Ao=r("em"),Qt=n("~transformers.AutoModelForCausalLM.from_pretrained"),Xt=n(" class method for the decoder."),ea=i(),j=r("div"),b(De.$$.fragment),oa=i(),K=r("p"),na=n("The "),lo=r("a"),ta=n("SpeechEncoderDecoderModel"),aa=n(" forward method, overrides the "),Lo=r("code"),ra=n("__call__"),sa=n(" special method."),da=i(),b(ce.$$.fragment),ca=i(),No=r("p"),ia=n("Examples:"),la=i(),b($e.$$.fragment),pa=i(),q=r("div"),b(je.$$.fragment),ha=i(),Io=r("p"),ma=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),fa=i(),Q=r("p"),ua=n("The model is set in evaluation mode by default using "),Vo=r("code"),ga=n("model.eval()"),_a=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Wo=r("code"),va=n("model.train()"),ba=n("."),ya=i(),Oo=r("p"),wa=n("Example:"),Ea=i(),b(qe.$$.fragment),cn=i(),X=r("h2"),ie=r("a"),Bo=r("span"),b(Pe.$$.fragment),ka=i(),Ro=r("span"),Sa=n("FlaxSpeechEncoderDecoderModel"),ln=i(),f=r("div"),b(ze.$$.fragment),Ta=i(),ee=r("p"),xa=n(`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),po=r("a"),Ma=n("from_pretrained()"),Da=n(` function and the decoder is loaded via
`),ho=r("a"),$a=n("from_pretrained()"),ja=n(` function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),qa=i(),Fe=r("p"),Pa=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ce=r("a"),za=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Fa=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Ca=i(),Ae=r("p"),Aa=n("Additionally, in "),Le=r("a"),La=n(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Na=n(` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Ia=i(),Uo=r("p"),Va=n(`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Wa=i(),Ne=r("p"),Oa=n("This model inherits from "),mo=r("a"),Ba=n("FlaxPreTrainedModel"),Ra=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ua=i(),Ie=r("p"),Ha=n(`This model is also a Flax Linen
`),Ve=r("a"),Ga=n("flax.nn.Module"),Ja=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ya=i(),W=r("p"),fo=r("a"),Za=n("FlaxSpeechEncoderDecoderModel"),Ka=n(` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one
as decoder module when created with the :meth`),Ho=r("em"),Qa=n("~transformers.FlaxAutoModel.from_pretrained"),Xa=n(` class method for the
encoder and :meth`),Go=r("em"),er=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),or=n(" class method for the decoder."),nr=i(),P=r("div"),b(We.$$.fragment),tr=i(),oe=r("p"),ar=n("The "),uo=r("a"),rr=n("FlaxSpeechEncoderDecoderModel"),sr=n(" forward method, overrides the "),Jo=r("code"),dr=n("__call__"),cr=n(" special method."),ir=i(),b(le.$$.fragment),lr=i(),Yo=r("p"),pr=n("Examples:"),hr=i(),b(Oe.$$.fragment),mr=i(),A=r("div"),b(Be.$$.fragment),fr=i(),Zo=r("p"),ur=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),gr=i(),Ko=r("p"),_r=n("Example:"),vr=i(),b(Re.$$.fragment),this.h()},l(a){const p=Ds('[data-svelte="svelte-1phssyn"]',document.head);h=s(p,"META",{name:!0,content:!0}),p.forEach(o),C=l(a),g=s(a,"H1",{class:!0});var Ue=d(g);D=s(Ue,"A",{id:!0,class:!0,href:!0});var Qo=d(D);F=s(Qo,"SPAN",{});var br=d(F);y(T.$$.fragment,br),br.forEach(o),Qo.forEach(o),M=l(Ue),L=s(Ue,"SPAN",{});var yr=d(L);Mn=t(yr,"Speech Encoder Decoder Models"),yr.forEach(o),Ue.forEach(o),on=l(a),$=s(a,"P",{});var O=d($);Dn=t(O,"The "),Ye=s(O,"A",{href:!0});var wr=d(Ye);$n=t(wr,"SpeechEncoderDecoderModel"),wr.forEach(o),jn=t(O,` can be used to initialize a speech-sequence-to-text-sequence model
with any pretrained speech autoencoding model as the encoder (`),To=s(O,"EM",{});var Er=d(To);qn=t(Er,"e.g."),Er.forEach(o),Pn=l(O),Ze=s(O,"A",{href:!0});var kr=d(Ze);zn=t(kr,"Wav2Vec2"),kr.forEach(o),Fn=t(O,", "),Ke=s(O,"A",{href:!0});var Sr=d(Ke);Cn=t(Sr,"Hubert"),Sr.forEach(o),An=t(O,") and any pretrained autoregressive model as the decoder."),O.forEach(o),nn=l(a),N=s(a,"P",{});var go=d(N);Ln=t(go,`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),xo=s(go,"EM",{});var Tr=d(xo);Nn=t(Tr,"e.g."),Tr.forEach(o),In=t(go," been shown in "),he=s(go,"A",{href:!0,rel:!0});var xr=d(he);Vn=t(xr,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),xr.forEach(o),Wn=t(go,` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),go.forEach(o),tn=l(a),I=s(a,"P",{});var _o=d(I);On=t(_o,"An example of how to use a "),Qe=s(_o,"A",{href:!0});var Mr=d(Qe);Bn=t(Mr,"SpeechEncoderDecoderModel"),Mr.forEach(o),Rn=t(_o,` for inference can be seen in
`),Xe=s(_o,"A",{href:!0});var Dr=d(Xe);Un=t(Dr,"Speech2Text2"),Dr.forEach(o),Hn=t(_o,"."),_o.forEach(o),an=l(a),H=s(a,"H2",{class:!0});var hn=d(H);te=s(hn,"A",{id:!0,class:!0,href:!0});var $r=d(te);Mo=s($r,"SPAN",{});var jr=d(Mo);y(me.$$.fragment,jr),jr.forEach(o),$r.forEach(o),Gn=l(hn),Do=s(hn,"SPAN",{});var qr=d(Do);Jn=t(qr,"SpeechEncoderDecoderConfig"),qr.forEach(o),hn.forEach(o),rn=l(a),x=s(a,"DIV",{class:!0});var z=d(x);y(fe.$$.fragment,z),Yn=l(z),ae=s(z,"P",{});var Xo=d(ae);eo=s(Xo,"A",{href:!0});var Pr=d(eo);Zn=t(Pr,"SpeechEncoderDecoderConfig"),Pr.forEach(o),Kn=t(Xo,` is the configuration class to store the configuration of a
`),oo=s(Xo,"A",{href:!0});var zr=d(oo);Qn=t(zr,"SpeechEncoderDecoderModel"),zr.forEach(o),Xn=t(Xo,`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),Xo.forEach(o),et=l(z),G=s(z,"P",{});var vo=d(G);ot=t(vo,"Configuration objects inherit from "),no=s(vo,"A",{href:!0});var Fr=d(no);nt=t(Fr,"PretrainedConfig"),Fr.forEach(o),tt=t(vo,` and can be used to control the model outputs. Read the
documentation from `),to=s(vo,"A",{href:!0});var Cr=d(to);at=t(Cr,"PretrainedConfig"),Cr.forEach(o),rt=t(vo," for more information."),vo.forEach(o),st=l(z),$o=s(z,"P",{});var Ar=d($o);dt=t(Ar,"Examples:"),Ar.forEach(o),ct=l(z),y(ue.$$.fragment,z),it=l(z),re=s(z,"DIV",{class:!0});var mn=d(re);y(ge.$$.fragment,mn),lt=l(mn),_e=s(mn,"P",{});var fn=d(_e);pt=t(fn,"Instantiate a "),ao=s(fn,"A",{href:!0});var Lr=d(ao);ht=t(Lr,"SpeechEncoderDecoderConfig"),Lr.forEach(o),mt=t(fn,` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),fn.forEach(o),mn.forEach(o),ft=l(z),se=s(z,"DIV",{class:!0});var un=d(se);y(ve.$$.fragment,un),ut=l(un),J=s(un,"P",{});var bo=d(J);gt=t(bo,"Serializes this instance to a Python dictionary. Override the default "),jo=s(bo,"EM",{});var Nr=d(jo);_t=t(Nr,"to_dict()"),Nr.forEach(o),vt=t(bo," from "),qo=s(bo,"EM",{});var Ir=d(qo);bt=t(Ir,"PretrainedConfig"),Ir.forEach(o),yt=t(bo,"."),bo.forEach(o),un.forEach(o),z.forEach(o),sn=l(a),Y=s(a,"H2",{class:!0});var gn=d(Y);de=s(gn,"A",{id:!0,class:!0,href:!0});var Vr=d(de);Po=s(Vr,"SPAN",{});var Wr=d(Po);y(be.$$.fragment,Wr),Wr.forEach(o),Vr.forEach(o),wt=l(gn),zo=s(gn,"SPAN",{});var Or=d(zo);Et=t(Or,"SpeechEncoderDecoderModel"),Or.forEach(o),gn.forEach(o),dn=l(a),m=s(a,"DIV",{class:!0});var _=d(m);y(ye.$$.fragment,_),kt=l(_),Z=s(_,"P",{});var yo=d(Z);St=t(yo,`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),ro=s(yo,"A",{href:!0});var Br=d(ro);Tt=t(Br,"from_pretrained()"),Br.forEach(o),xt=t(yo,` function and the decoder is loaded via
`),so=s(yo,"A",{href:!0});var Rr=d(so);Mt=t(Rr,"from_pretrained()"),Rr.forEach(o),Dt=t(yo,` function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),yo.forEach(o),$t=l(_),we=s(_,"P",{});var _n=d(we);jt=t(_n,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ee=s(_n,"A",{href:!0,rel:!0});var Ur=d(Ee);qt=t(Ur,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ur.forEach(o),Pt=t(_n,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),_n.forEach(o),zt=l(_),ke=s(_,"P",{});var vn=d(ke);Ft=t(vn,"Additionally, in "),Se=s(vn,"A",{href:!0,rel:!0});var Hr=d(Se);Ct=t(Hr,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Hr.forEach(o),At=t(vn,` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),vn.forEach(o),Lt=l(_),Fo=s(_,"P",{});var Gr=d(Fo);Nt=t(Gr,`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Gr.forEach(o),It=l(_),Te=s(_,"P",{});var bn=d(Te);Vt=t(bn,"This model inherits from "),co=s(bn,"A",{href:!0});var Jr=d(co);Wt=t(Jr,"PreTrainedModel"),Jr.forEach(o),Ot=t(bn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bn.forEach(o),Bt=l(_),xe=s(_,"P",{});var yn=d(xe);Rt=t(yn,"This model is also a PyTorch "),Me=s(yn,"A",{href:!0,rel:!0});var Yr=d(Me);Ut=t(Yr,"torch.nn.Module"),Yr.forEach(o),Ht=t(yn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yn.forEach(o),Gt=l(_),V=s(_,"P",{});var He=d(V);io=s(He,"A",{href:!0});var Zr=d(io);Jt=t(Zr,"SpeechEncoderDecoderModel"),Zr.forEach(o),Yt=t(He,` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),Co=s(He,"EM",{});var Kr=d(Co);Zt=t(Kr,"~transformers.AutoModel.from_pretrained"),Kr.forEach(o),Kt=t(He,` class method for the encoder and
:meth`),Ao=s(He,"EM",{});var Qr=d(Ao);Qt=t(Qr,"~transformers.AutoModelForCausalLM.from_pretrained"),Qr.forEach(o),Xt=t(He," class method for the decoder."),He.forEach(o),ea=l(_),j=s(_,"DIV",{class:!0});var B=d(j);y(De.$$.fragment,B),oa=l(B),K=s(B,"P",{});var wo=d(K);na=t(wo,"The "),lo=s(wo,"A",{href:!0});var Xr=d(lo);ta=t(Xr,"SpeechEncoderDecoderModel"),Xr.forEach(o),aa=t(wo," forward method, overrides the "),Lo=s(wo,"CODE",{});var es=d(Lo);ra=t(es,"__call__"),es.forEach(o),sa=t(wo," special method."),wo.forEach(o),da=l(B),y(ce.$$.fragment,B),ca=l(B),No=s(B,"P",{});var os=d(No);ia=t(os,"Examples:"),os.forEach(o),la=l(B),y($e.$$.fragment,B),B.forEach(o),pa=l(_),q=s(_,"DIV",{class:!0});var R=d(q);y(je.$$.fragment,R),ha=l(R),Io=s(R,"P",{});var ns=d(Io);ma=t(ns,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ns.forEach(o),fa=l(R),Q=s(R,"P",{});var Eo=d(Q);ua=t(Eo,"The model is set in evaluation mode by default using "),Vo=s(Eo,"CODE",{});var ts=d(Vo);ga=t(ts,"model.eval()"),ts.forEach(o),_a=t(Eo,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Wo=s(Eo,"CODE",{});var as=d(Wo);va=t(as,"model.train()"),as.forEach(o),ba=t(Eo,"."),Eo.forEach(o),ya=l(R),Oo=s(R,"P",{});var rs=d(Oo);wa=t(rs,"Example:"),rs.forEach(o),Ea=l(R),y(qe.$$.fragment,R),R.forEach(o),_.forEach(o),cn=l(a),X=s(a,"H2",{class:!0});var wn=d(X);ie=s(wn,"A",{id:!0,class:!0,href:!0});var ss=d(ie);Bo=s(ss,"SPAN",{});var ds=d(Bo);y(Pe.$$.fragment,ds),ds.forEach(o),ss.forEach(o),ka=l(wn),Ro=s(wn,"SPAN",{});var cs=d(Ro);Sa=t(cs,"FlaxSpeechEncoderDecoderModel"),cs.forEach(o),wn.forEach(o),ln=l(a),f=s(a,"DIV",{class:!0});var v=d(f);y(ze.$$.fragment,v),Ta=l(v),ee=s(v,"P",{});var ko=d(ee);xa=t(ko,`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),po=s(ko,"A",{href:!0});var is=d(po);Ma=t(is,"from_pretrained()"),is.forEach(o),Da=t(ko,` function and the decoder is loaded via
`),ho=s(ko,"A",{href:!0});var ls=d(ho);$a=t(ls,"from_pretrained()"),ls.forEach(o),ja=t(ko,` function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),ko.forEach(o),qa=l(v),Fe=s(v,"P",{});var En=d(Fe);Pa=t(En,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ce=s(En,"A",{href:!0,rel:!0});var ps=d(Ce);za=t(ps,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),ps.forEach(o),Fa=t(En,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),En.forEach(o),Ca=l(v),Ae=s(v,"P",{});var kn=d(Ae);Aa=t(kn,"Additionally, in "),Le=s(kn,"A",{href:!0,rel:!0});var hs=d(Le);La=t(hs,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),hs.forEach(o),Na=t(kn,` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),kn.forEach(o),Ia=l(v),Uo=s(v,"P",{});var ms=d(Uo);Va=t(ms,`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),ms.forEach(o),Wa=l(v),Ne=s(v,"P",{});var Sn=d(Ne);Oa=t(Sn,"This model inherits from "),mo=s(Sn,"A",{href:!0});var fs=d(mo);Ba=t(fs,"FlaxPreTrainedModel"),fs.forEach(o),Ra=t(Sn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sn.forEach(o),Ua=l(v),Ie=s(v,"P",{});var Tn=d(Ie);Ha=t(Tn,`This model is also a Flax Linen
`),Ve=s(Tn,"A",{href:!0,rel:!0});var us=d(Ve);Ga=t(us,"flax.nn.Module"),us.forEach(o),Ja=t(Tn,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Tn.forEach(o),Ya=l(v),W=s(v,"P",{});var Ge=d(W);fo=s(Ge,"A",{href:!0});var gs=d(fo);Za=t(gs,"FlaxSpeechEncoderDecoderModel"),gs.forEach(o),Ka=t(Ge,` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one
as decoder module when created with the :meth`),Ho=s(Ge,"EM",{});var _s=d(Ho);Qa=t(_s,"~transformers.FlaxAutoModel.from_pretrained"),_s.forEach(o),Xa=t(Ge,` class method for the
encoder and :meth`),Go=s(Ge,"EM",{});var vs=d(Go);er=t(vs,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),vs.forEach(o),or=t(Ge," class method for the decoder."),Ge.forEach(o),nr=l(v),P=s(v,"DIV",{class:!0});var U=d(P);y(We.$$.fragment,U),tr=l(U),oe=s(U,"P",{});var So=d(oe);ar=t(So,"The "),uo=s(So,"A",{href:!0});var bs=d(uo);rr=t(bs,"FlaxSpeechEncoderDecoderModel"),bs.forEach(o),sr=t(So," forward method, overrides the "),Jo=s(So,"CODE",{});var ys=d(Jo);dr=t(ys,"__call__"),ys.forEach(o),cr=t(So," special method."),So.forEach(o),ir=l(U),y(le.$$.fragment,U),lr=l(U),Yo=s(U,"P",{});var ws=d(Yo);pr=t(ws,"Examples:"),ws.forEach(o),hr=l(U),y(Oe.$$.fragment,U),U.forEach(o),mr=l(v),A=s(v,"DIV",{class:!0});var pe=d(A);y(Be.$$.fragment,pe),fr=l(pe),Zo=s(pe,"P",{});var Es=d(Zo);ur=t(Es,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Es.forEach(o),gr=l(pe),Ko=s(pe,"P",{});var ks=d(Ko);_r=t(ks,"Example:"),ks.forEach(o),vr=l(pe),y(Re.$$.fragment,pe),pe.forEach(o),v.forEach(o),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(zs)),c(D,"id","speech-encoder-decoder-models"),c(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(D,"href","#speech-encoder-decoder-models"),c(g,"class","relative group"),c(Ye,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(Ze,"href","wav2vec2"),c(Ke,"href","hubert"),c(he,"href","https://arxiv.org/abs/2104.06678"),c(he,"rel","nofollow"),c(Qe,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(Xe,"href","speech_to_text_2"),c(te,"id","transformers.SpeechEncoderDecoderConfig"),c(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(te,"href","#transformers.SpeechEncoderDecoderConfig"),c(H,"class","relative group"),c(eo,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),c(oo,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(no,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(to,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ao,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),c(re,"class","docstring"),c(se,"class","docstring"),c(x,"class","docstring"),c(de,"id","transformers.SpeechEncoderDecoderModel"),c(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(de,"href","#transformers.SpeechEncoderDecoderModel"),c(Y,"class","relative group"),c(ro,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(so,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Ee,"href","https://arxiv.org/abs/1907.12461"),c(Ee,"rel","nofollow"),c(Se,"href","https://arxiv.org/abs/2104.06678"),c(Se,"rel","nofollow"),c(co,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Me,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Me,"rel","nofollow"),c(io,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(lo,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(j,"class","docstring"),c(q,"class","docstring"),c(m,"class","docstring"),c(ie,"id","transformers.FlaxSpeechEncoderDecoderModel"),c(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ie,"href","#transformers.FlaxSpeechEncoderDecoderModel"),c(X,"class","relative group"),c(po,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(ho,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Ce,"href","https://arxiv.org/abs/1907.12461"),c(Ce,"rel","nofollow"),c(Le,"href","https://arxiv.org/abs/2104.06678"),c(Le,"rel","nofollow"),c(mo,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ve,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ve,"rel","nofollow"),c(fo,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.FlaxSpeechEncoderDecoderModel"),c(uo,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.FlaxSpeechEncoderDecoderModel"),c(P,"class","docstring"),c(A,"class","docstring"),c(f,"class","docstring")},m(a,p){e(document.head,h),u(a,C,p),u(a,g,p),e(g,D),e(D,F),w(T,F,null),e(g,M),e(g,L),e(L,Mn),u(a,on,p),u(a,$,p),e($,Dn),e($,Ye),e(Ye,$n),e($,jn),e($,To),e(To,qn),e($,Pn),e($,Ze),e(Ze,zn),e($,Fn),e($,Ke),e(Ke,Cn),e($,An),u(a,nn,p),u(a,N,p),e(N,Ln),e(N,xo),e(xo,Nn),e(N,In),e(N,he),e(he,Vn),e(N,Wn),u(a,tn,p),u(a,I,p),e(I,On),e(I,Qe),e(Qe,Bn),e(I,Rn),e(I,Xe),e(Xe,Un),e(I,Hn),u(a,an,p),u(a,H,p),e(H,te),e(te,Mo),w(me,Mo,null),e(H,Gn),e(H,Do),e(Do,Jn),u(a,rn,p),u(a,x,p),w(fe,x,null),e(x,Yn),e(x,ae),e(ae,eo),e(eo,Zn),e(ae,Kn),e(ae,oo),e(oo,Qn),e(ae,Xn),e(x,et),e(x,G),e(G,ot),e(G,no),e(no,nt),e(G,tt),e(G,to),e(to,at),e(G,rt),e(x,st),e(x,$o),e($o,dt),e(x,ct),w(ue,x,null),e(x,it),e(x,re),w(ge,re,null),e(re,lt),e(re,_e),e(_e,pt),e(_e,ao),e(ao,ht),e(_e,mt),e(x,ft),e(x,se),w(ve,se,null),e(se,ut),e(se,J),e(J,gt),e(J,jo),e(jo,_t),e(J,vt),e(J,qo),e(qo,bt),e(J,yt),u(a,sn,p),u(a,Y,p),e(Y,de),e(de,Po),w(be,Po,null),e(Y,wt),e(Y,zo),e(zo,Et),u(a,dn,p),u(a,m,p),w(ye,m,null),e(m,kt),e(m,Z),e(Z,St),e(Z,ro),e(ro,Tt),e(Z,xt),e(Z,so),e(so,Mt),e(Z,Dt),e(m,$t),e(m,we),e(we,jt),e(we,Ee),e(Ee,qt),e(we,Pt),e(m,zt),e(m,ke),e(ke,Ft),e(ke,Se),e(Se,Ct),e(ke,At),e(m,Lt),e(m,Fo),e(Fo,Nt),e(m,It),e(m,Te),e(Te,Vt),e(Te,co),e(co,Wt),e(Te,Ot),e(m,Bt),e(m,xe),e(xe,Rt),e(xe,Me),e(Me,Ut),e(xe,Ht),e(m,Gt),e(m,V),e(V,io),e(io,Jt),e(V,Yt),e(V,Co),e(Co,Zt),e(V,Kt),e(V,Ao),e(Ao,Qt),e(V,Xt),e(m,ea),e(m,j),w(De,j,null),e(j,oa),e(j,K),e(K,na),e(K,lo),e(lo,ta),e(K,aa),e(K,Lo),e(Lo,ra),e(K,sa),e(j,da),w(ce,j,null),e(j,ca),e(j,No),e(No,ia),e(j,la),w($e,j,null),e(m,pa),e(m,q),w(je,q,null),e(q,ha),e(q,Io),e(Io,ma),e(q,fa),e(q,Q),e(Q,ua),e(Q,Vo),e(Vo,ga),e(Q,_a),e(Q,Wo),e(Wo,va),e(Q,ba),e(q,ya),e(q,Oo),e(Oo,wa),e(q,Ea),w(qe,q,null),u(a,cn,p),u(a,X,p),e(X,ie),e(ie,Bo),w(Pe,Bo,null),e(X,ka),e(X,Ro),e(Ro,Sa),u(a,ln,p),u(a,f,p),w(ze,f,null),e(f,Ta),e(f,ee),e(ee,xa),e(ee,po),e(po,Ma),e(ee,Da),e(ee,ho),e(ho,$a),e(ee,ja),e(f,qa),e(f,Fe),e(Fe,Pa),e(Fe,Ce),e(Ce,za),e(Fe,Fa),e(f,Ca),e(f,Ae),e(Ae,Aa),e(Ae,Le),e(Le,La),e(Ae,Na),e(f,Ia),e(f,Uo),e(Uo,Va),e(f,Wa),e(f,Ne),e(Ne,Oa),e(Ne,mo),e(mo,Ba),e(Ne,Ra),e(f,Ua),e(f,Ie),e(Ie,Ha),e(Ie,Ve),e(Ve,Ga),e(Ie,Ja),e(f,Ya),e(f,W),e(W,fo),e(fo,Za),e(W,Ka),e(W,Ho),e(Ho,Qa),e(W,Xa),e(W,Go),e(Go,er),e(W,or),e(f,nr),e(f,P),w(We,P,null),e(P,tr),e(P,oe),e(oe,ar),e(oe,uo),e(uo,rr),e(oe,sr),e(oe,Jo),e(Jo,dr),e(oe,cr),e(P,ir),w(le,P,null),e(P,lr),e(P,Yo),e(Yo,pr),e(P,hr),w(Oe,P,null),e(f,mr),e(f,A),w(Be,A,null),e(A,fr),e(A,Zo),e(Zo,ur),e(A,gr),e(A,Ko),e(Ko,_r),e(A,vr),w(Re,A,null),pn=!0},p(a,[p]){const Ue={};p&2&&(Ue.$$scope={dirty:p,ctx:a}),ce.$set(Ue);const Qo={};p&2&&(Qo.$$scope={dirty:p,ctx:a}),le.$set(Qo)},i(a){pn||(E(T.$$.fragment,a),E(me.$$.fragment,a),E(fe.$$.fragment,a),E(ue.$$.fragment,a),E(ge.$$.fragment,a),E(ve.$$.fragment,a),E(be.$$.fragment,a),E(ye.$$.fragment,a),E(De.$$.fragment,a),E(ce.$$.fragment,a),E($e.$$.fragment,a),E(je.$$.fragment,a),E(qe.$$.fragment,a),E(Pe.$$.fragment,a),E(ze.$$.fragment,a),E(We.$$.fragment,a),E(le.$$.fragment,a),E(Oe.$$.fragment,a),E(Be.$$.fragment,a),E(Re.$$.fragment,a),pn=!0)},o(a){k(T.$$.fragment,a),k(me.$$.fragment,a),k(fe.$$.fragment,a),k(ue.$$.fragment,a),k(ge.$$.fragment,a),k(ve.$$.fragment,a),k(be.$$.fragment,a),k(ye.$$.fragment,a),k(De.$$.fragment,a),k(ce.$$.fragment,a),k($e.$$.fragment,a),k(je.$$.fragment,a),k(qe.$$.fragment,a),k(Pe.$$.fragment,a),k(ze.$$.fragment,a),k(We.$$.fragment,a),k(le.$$.fragment,a),k(Oe.$$.fragment,a),k(Be.$$.fragment,a),k(Re.$$.fragment,a),pn=!1},d(a){o(h),a&&o(C),a&&o(g),S(T),a&&o(on),a&&o($),a&&o(nn),a&&o(N),a&&o(tn),a&&o(I),a&&o(an),a&&o(H),S(me),a&&o(rn),a&&o(x),S(fe),S(ue),S(ge),S(ve),a&&o(sn),a&&o(Y),S(be),a&&o(dn),a&&o(m),S(ye),S(De),S(ce),S($e),S(je),S(qe),a&&o(cn),a&&o(X),S(Pe),a&&o(ln),a&&o(f),S(ze),S(We),S(le),S(Oe),S(Be),S(Re)}}}const zs={local:"speech-encoder-decoder-models",sections:[{local:"transformers.SpeechEncoderDecoderConfig",title:"SpeechEncoderDecoderConfig"},{local:"transformers.SpeechEncoderDecoderModel",title:"SpeechEncoderDecoderModel"},{local:"transformers.FlaxSpeechEncoderDecoderModel",title:"FlaxSpeechEncoderDecoderModel"}],title:"Speech Encoder Decoder Models"};function Fs(Je){return $s(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Vs extends Ts{constructor(h){super();xs(this,h,Fs,Ps,Ms,{})}}export{Vs as default,zs as metadata};
