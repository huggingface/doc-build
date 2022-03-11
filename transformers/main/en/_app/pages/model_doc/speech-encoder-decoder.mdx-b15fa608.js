import{S as Ts,i as xs,s as Ds,e as r,k as i,w as b,t as n,M as Ms,c as s,d as o,m as l,a as d,x as y,h as t,b as c,F as e,g,y as w,q as E,o as k,B as S}from"../../chunks/vendor-4833417e.js";import{T as Ss}from"../../chunks/Tip-fffd6df1.js";import{D as ne}from"../../chunks/Docstring-4f315ed9.js";import{C as en}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as xn}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function $s(he){let p,$,u,T,F;return{c(){p=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),T=n("Module"),F=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){p=s(x,"P",{});var M=d(p);$=t(M,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(M,"CODE",{});var L=d(u);T=t(L,"Module"),L.forEach(o),F=t(M,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),M.forEach(o)},m(x,M){g(x,p,M),e(p,$),e(p,u),e(u,T),e(p,F)},d(x){x&&o(p)}}}function js(he){let p,$,u,T,F;return{c(){p=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),T=n("Module"),F=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){p=s(x,"P",{});var M=d(p);$=t(M,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(M,"CODE",{});var L=d(u);T=t(L,"Module"),L.forEach(o),F=t(M,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),M.forEach(o)},m(x,M){g(x,p,M),e(p,$),e(p,u),e(u,T),e(p,F)},d(x){x&&o(p)}}}function qs(he){let p,$,u,T,F,x,M,L,Dn,on,j,Mn,Ye,$n,jn,wo,qn,Pn,Ze,zn,Cn,Ke,Fn,An,nn,N,Ln,Eo,Nn,In,me,Wn,Vn,tn,I,On,Qe,Bn,Rn,Xe,Un,Hn,an,H,te,ko,fe,Gn,So,Jn,rn,D,ue,Yn,ae,eo,Zn,Kn,oo,Qn,Xn,et,G,ot,no,nt,tt,to,at,rt,st,To,dt,ct,ge,it,re,_e,lt,ve,pt,ao,ht,mt,ft,se,be,ut,J,gt,xo,_t,vt,Do,bt,yt,sn,Y,de,Mo,ye,wt,$o,Et,dn,m,we,kt,Z,St,jo,Tt,xt,qo,Dt,Mt,$t,Ee,jt,ke,qt,Pt,zt,Se,Ct,Te,Ft,At,Lt,Po,Nt,It,xe,Wt,ro,Vt,Ot,Bt,De,Rt,Me,Ut,Ht,Gt,W,so,Jt,Yt,zo,Zt,Kt,Co,Qt,Xt,ea,q,$e,oa,K,na,co,ta,aa,Fo,ra,sa,da,ce,ca,Ao,ia,la,je,pa,P,qe,ha,Lo,ma,fa,Q,ua,No,ga,_a,Io,va,ba,ya,Wo,wa,Ea,Pe,cn,X,ie,Vo,ze,ka,Oo,Sa,ln,f,Ce,Ta,ee,xa,Bo,Da,Ma,Ro,$a,ja,qa,Fe,Pa,Ae,za,Ca,Fa,Le,Aa,Ne,La,Na,Ia,Uo,Wa,Va,Ie,Oa,io,Ba,Ra,Ua,We,Ha,Ve,Ga,Ja,Ya,V,lo,Za,Ka,Ho,Qa,Xa,Go,er,or,nr,z,Oe,tr,oe,ar,po,rr,sr,Jo,dr,cr,ir,le,lr,Yo,pr,hr,Be,mr,A,Re,fr,Zo,ur,gr,Ko,_r,vr,Ue,pn;return x=new xn({}),fe=new xn({}),ue=new ne({props:{name:"class transformers.SpeechEncoderDecoderConfig",anchor:"transformers.SpeechEncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L27",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}]}}),ge=new en({props:{code:`from transformers import BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),_e=new ne({props:{name:"from_encoder_decoder_configs",anchor:"transformers.SpeechEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L92",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a></p>
`}}),be=new ne({props:{name:"to_dict",anchor:"transformers.SpeechEncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L109",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),ye=new xn({}),we=new ne({props:{name:"class transformers.SpeechEncoderDecoderModel",anchor:"transformers.SpeechEncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L174",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$e=new ne({props:{name:"forward",anchor:"transformers.SpeechEncoderDecoderModel.forward",parameters:[{name:"inputs",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"input_values",val:" = None"},{name:"input_features",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L442",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.forward.inputs",description:`<strong>inputs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
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
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),ce=new Ss({props:{$$slots:{default:[$s]},$$scope:{ctx:he}}}),je=new en({props:{code:`from transformers import SpeechEncoderDecoderModel, Wav2Vec2Processor
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),qe=new ne({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L286",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),Pe=new en({props:{code:`from transformers import SpeechEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2bert&quot;</span>)`}}),ze=new xn({}),Ce=new ne({props:{name:"class transformers.FlaxSpeechEncoderDecoderModel",anchor:"transformers.FlaxSpeechEncoderDecoderModel",parameters:[{name:"config",val:": SpeechEncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L321",parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Oe=new ne({props:{name:"__call__",anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__",parameters:[{name:"inputs",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L632",parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.inputs",description:`<strong>inputs</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
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
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),le=new Ss({props:{$$slots:{default:[js]},$$scope:{ctx:he}}}),Be=new en({props:{code:`from transformers import FlaxSpeechEncoderDecoderModel, BartTokenizer

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
<span class="hljs-comment"># Assert something? More interesting input? dtype correct?</span>`}}),Re=new ne({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L753",parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),Ue=new en({props:{code:`from transformers import FlaxSpeechEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxSpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2-2-bart-large&quot;</span>)`}}),{c(){p=r("meta"),$=i(),u=r("h1"),T=r("a"),F=r("span"),b(x.$$.fragment),M=i(),L=r("span"),Dn=n("Speech Encoder Decoder Models"),on=i(),j=r("p"),Mn=n("The "),Ye=r("a"),$n=n("SpeechEncoderDecoderModel"),jn=n(` can be used to initialize a speech-sequence-to-text-sequence model
with any pretrained speech autoencoding model as the encoder (`),wo=r("em"),qn=n("e.g."),Pn=i(),Ze=r("a"),zn=n("Wav2Vec2"),Cn=n(", "),Ke=r("a"),Fn=n("Hubert"),An=n(") and any pretrained autoregressive model as the decoder."),nn=i(),N=r("p"),Ln=n(`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),Eo=r("em"),Nn=n("e.g."),In=n(" been shown in "),me=r("a"),Wn=n(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Vn=n(` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),tn=i(),I=r("p"),On=n("An example of how to use a "),Qe=r("a"),Bn=n("SpeechEncoderDecoderModel"),Rn=n(` for inference can be seen in
`),Xe=r("a"),Un=n("Speech2Text2"),Hn=n("."),an=i(),H=r("h2"),te=r("a"),ko=r("span"),b(fe.$$.fragment),Gn=i(),So=r("span"),Jn=n("SpeechEncoderDecoderConfig"),rn=i(),D=r("div"),b(ue.$$.fragment),Yn=i(),ae=r("p"),eo=r("a"),Zn=n("SpeechEncoderDecoderConfig"),Kn=n(` is the configuration class to store the configuration of a
`),oo=r("a"),Qn=n("SpeechEncoderDecoderModel"),Xn=n(`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),et=i(),G=r("p"),ot=n("Configuration objects inherit from "),no=r("a"),nt=n("PretrainedConfig"),tt=n(` and can be used to control the model outputs. Read the
documentation from `),to=r("a"),at=n("PretrainedConfig"),rt=n(" for more information."),st=i(),To=r("p"),dt=n("Examples:"),ct=i(),b(ge.$$.fragment),it=i(),re=r("div"),b(_e.$$.fragment),lt=i(),ve=r("p"),pt=n("Instantiate a "),ao=r("a"),ht=n("SpeechEncoderDecoderConfig"),mt=n(` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),ft=i(),se=r("div"),b(be.$$.fragment),ut=i(),J=r("p"),gt=n("Serializes this instance to a Python dictionary. Override the default "),xo=r("em"),_t=n("to_dict()"),vt=n(" from "),Do=r("em"),bt=n("PretrainedConfig"),yt=n("."),sn=i(),Y=r("h2"),de=r("a"),Mo=r("span"),b(ye.$$.fragment),wt=i(),$o=r("span"),Et=n("SpeechEncoderDecoderModel"),dn=i(),m=r("div"),b(we.$$.fragment),kt=i(),Z=r("p"),St=n(`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),jo=r("code"),Tt=n("from_pretrained()"),xt=n(`function and the decoder is loaded via
`),qo=r("code"),Dt=n("from_pretrained()"),Mt=n(`function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),$t=i(),Ee=r("p"),jt=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),ke=r("a"),qt=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Pt=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),zt=i(),Se=r("p"),Ct=n("Additionally, in "),Te=r("a"),Ft=n(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),At=n(` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Lt=i(),Po=r("p"),Nt=n(`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),It=i(),xe=r("p"),Wt=n("This model inherits from "),ro=r("a"),Vt=n("PreTrainedModel"),Ot=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bt=i(),De=r("p"),Rt=n("This model is also a PyTorch "),Me=r("a"),Ut=n("torch.nn.Module"),Ht=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gt=i(),W=r("p"),so=r("a"),Jt=n("SpeechEncoderDecoderModel"),Yt=n(` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),zo=r("em"),Zt=n("~transformers.AutoModel.from_pretrained"),Kt=n(` class method for the encoder and
:meth`),Co=r("em"),Qt=n("~transformers.AutoModelForCausalLM.from_pretrained"),Xt=n(" class method for the decoder."),ea=i(),q=r("div"),b($e.$$.fragment),oa=i(),K=r("p"),na=n("The "),co=r("a"),ta=n("SpeechEncoderDecoderModel"),aa=n(" forward method, overrides the "),Fo=r("code"),ra=n("__call__"),sa=n(" special method."),da=i(),b(ce.$$.fragment),ca=i(),Ao=r("p"),ia=n("Examples:"),la=i(),b(je.$$.fragment),pa=i(),P=r("div"),b(qe.$$.fragment),ha=i(),Lo=r("p"),ma=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),fa=i(),Q=r("p"),ua=n("The model is set in evaluation mode by default using "),No=r("code"),ga=n("model.eval()"),_a=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Io=r("code"),va=n("model.train()"),ba=n("."),ya=i(),Wo=r("p"),wa=n("Example:"),Ea=i(),b(Pe.$$.fragment),cn=i(),X=r("h2"),ie=r("a"),Vo=r("span"),b(ze.$$.fragment),ka=i(),Oo=r("span"),Sa=n("FlaxSpeechEncoderDecoderModel"),ln=i(),f=r("div"),b(Ce.$$.fragment),Ta=i(),ee=r("p"),xa=n(`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Bo=r("code"),Da=n("from_pretrained()"),Ma=n(`function and the decoder is loaded via
`),Ro=r("code"),$a=n("from_pretrained()"),ja=n(`function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),qa=i(),Fe=r("p"),Pa=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ae=r("a"),za=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ca=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Fa=i(),Le=r("p"),Aa=n("Additionally, in "),Ne=r("a"),La=n(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Na=n(` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Ia=i(),Uo=r("p"),Wa=n(`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Va=i(),Ie=r("p"),Oa=n("This model inherits from "),io=r("a"),Ba=n("FlaxPreTrainedModel"),Ra=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ua=i(),We=r("p"),Ha=n(`This model is also a Flax Linen
`),Ve=r("a"),Ga=n("flax.nn.Module"),Ja=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ya=i(),V=r("p"),lo=r("a"),Za=n("FlaxSpeechEncoderDecoderModel"),Ka=n(` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one
as decoder module when created with the :meth`),Ho=r("em"),Qa=n("~transformers.FlaxAutoModel.from_pretrained"),Xa=n(` class method for the
encoder and :meth`),Go=r("em"),er=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),or=n(" class method for the decoder."),nr=i(),z=r("div"),b(Oe.$$.fragment),tr=i(),oe=r("p"),ar=n("The "),po=r("a"),rr=n("FlaxSpeechEncoderDecoderModel"),sr=n(" forward method, overrides the "),Jo=r("code"),dr=n("__call__"),cr=n(" special method."),ir=i(),b(le.$$.fragment),lr=i(),Yo=r("p"),pr=n("Examples:"),hr=i(),b(Be.$$.fragment),mr=i(),A=r("div"),b(Re.$$.fragment),fr=i(),Zo=r("p"),ur=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),gr=i(),Ko=r("p"),_r=n("Example:"),vr=i(),b(Ue.$$.fragment),this.h()},l(a){const h=Ms('[data-svelte="svelte-1phssyn"]',document.head);p=s(h,"META",{name:!0,content:!0}),h.forEach(o),$=l(a),u=s(a,"H1",{class:!0});var He=d(u);T=s(He,"A",{id:!0,class:!0,href:!0});var Qo=d(T);F=s(Qo,"SPAN",{});var br=d(F);y(x.$$.fragment,br),br.forEach(o),Qo.forEach(o),M=l(He),L=s(He,"SPAN",{});var yr=d(L);Dn=t(yr,"Speech Encoder Decoder Models"),yr.forEach(o),He.forEach(o),on=l(a),j=s(a,"P",{});var O=d(j);Mn=t(O,"The "),Ye=s(O,"A",{href:!0});var wr=d(Ye);$n=t(wr,"SpeechEncoderDecoderModel"),wr.forEach(o),jn=t(O,` can be used to initialize a speech-sequence-to-text-sequence model
with any pretrained speech autoencoding model as the encoder (`),wo=s(O,"EM",{});var Er=d(wo);qn=t(Er,"e.g."),Er.forEach(o),Pn=l(O),Ze=s(O,"A",{href:!0});var kr=d(Ze);zn=t(kr,"Wav2Vec2"),kr.forEach(o),Cn=t(O,", "),Ke=s(O,"A",{href:!0});var Sr=d(Ke);Fn=t(Sr,"Hubert"),Sr.forEach(o),An=t(O,") and any pretrained autoregressive model as the decoder."),O.forEach(o),nn=l(a),N=s(a,"P",{});var ho=d(N);Ln=t(ho,`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),Eo=s(ho,"EM",{});var Tr=d(Eo);Nn=t(Tr,"e.g."),Tr.forEach(o),In=t(ho," been shown in "),me=s(ho,"A",{href:!0,rel:!0});var xr=d(me);Wn=t(xr,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),xr.forEach(o),Vn=t(ho,` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),ho.forEach(o),tn=l(a),I=s(a,"P",{});var mo=d(I);On=t(mo,"An example of how to use a "),Qe=s(mo,"A",{href:!0});var Dr=d(Qe);Bn=t(Dr,"SpeechEncoderDecoderModel"),Dr.forEach(o),Rn=t(mo,` for inference can be seen in
`),Xe=s(mo,"A",{href:!0});var Mr=d(Xe);Un=t(Mr,"Speech2Text2"),Mr.forEach(o),Hn=t(mo,"."),mo.forEach(o),an=l(a),H=s(a,"H2",{class:!0});var hn=d(H);te=s(hn,"A",{id:!0,class:!0,href:!0});var $r=d(te);ko=s($r,"SPAN",{});var jr=d(ko);y(fe.$$.fragment,jr),jr.forEach(o),$r.forEach(o),Gn=l(hn),So=s(hn,"SPAN",{});var qr=d(So);Jn=t(qr,"SpeechEncoderDecoderConfig"),qr.forEach(o),hn.forEach(o),rn=l(a),D=s(a,"DIV",{class:!0});var C=d(D);y(ue.$$.fragment,C),Yn=l(C),ae=s(C,"P",{});var Xo=d(ae);eo=s(Xo,"A",{href:!0});var Pr=d(eo);Zn=t(Pr,"SpeechEncoderDecoderConfig"),Pr.forEach(o),Kn=t(Xo,` is the configuration class to store the configuration of a
`),oo=s(Xo,"A",{href:!0});var zr=d(oo);Qn=t(zr,"SpeechEncoderDecoderModel"),zr.forEach(o),Xn=t(Xo,`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),Xo.forEach(o),et=l(C),G=s(C,"P",{});var fo=d(G);ot=t(fo,"Configuration objects inherit from "),no=s(fo,"A",{href:!0});var Cr=d(no);nt=t(Cr,"PretrainedConfig"),Cr.forEach(o),tt=t(fo,` and can be used to control the model outputs. Read the
documentation from `),to=s(fo,"A",{href:!0});var Fr=d(to);at=t(Fr,"PretrainedConfig"),Fr.forEach(o),rt=t(fo," for more information."),fo.forEach(o),st=l(C),To=s(C,"P",{});var Ar=d(To);dt=t(Ar,"Examples:"),Ar.forEach(o),ct=l(C),y(ge.$$.fragment,C),it=l(C),re=s(C,"DIV",{class:!0});var mn=d(re);y(_e.$$.fragment,mn),lt=l(mn),ve=s(mn,"P",{});var fn=d(ve);pt=t(fn,"Instantiate a "),ao=s(fn,"A",{href:!0});var Lr=d(ao);ht=t(Lr,"SpeechEncoderDecoderConfig"),Lr.forEach(o),mt=t(fn,` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),fn.forEach(o),mn.forEach(o),ft=l(C),se=s(C,"DIV",{class:!0});var un=d(se);y(be.$$.fragment,un),ut=l(un),J=s(un,"P",{});var uo=d(J);gt=t(uo,"Serializes this instance to a Python dictionary. Override the default "),xo=s(uo,"EM",{});var Nr=d(xo);_t=t(Nr,"to_dict()"),Nr.forEach(o),vt=t(uo," from "),Do=s(uo,"EM",{});var Ir=d(Do);bt=t(Ir,"PretrainedConfig"),Ir.forEach(o),yt=t(uo,"."),uo.forEach(o),un.forEach(o),C.forEach(o),sn=l(a),Y=s(a,"H2",{class:!0});var gn=d(Y);de=s(gn,"A",{id:!0,class:!0,href:!0});var Wr=d(de);Mo=s(Wr,"SPAN",{});var Vr=d(Mo);y(ye.$$.fragment,Vr),Vr.forEach(o),Wr.forEach(o),wt=l(gn),$o=s(gn,"SPAN",{});var Or=d($o);Et=t(Or,"SpeechEncoderDecoderModel"),Or.forEach(o),gn.forEach(o),dn=l(a),m=s(a,"DIV",{class:!0});var _=d(m);y(we.$$.fragment,_),kt=l(_),Z=s(_,"P",{});var go=d(Z);St=t(go,`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),jo=s(go,"CODE",{});var Br=d(jo);Tt=t(Br,"from_pretrained()"),Br.forEach(o),xt=t(go,`function and the decoder is loaded via
`),qo=s(go,"CODE",{});var Rr=d(qo);Dt=t(Rr,"from_pretrained()"),Rr.forEach(o),Mt=t(go,`function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),go.forEach(o),$t=l(_),Ee=s(_,"P",{});var _n=d(Ee);jt=t(_n,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),ke=s(_n,"A",{href:!0,rel:!0});var Ur=d(ke);qt=t(Ur,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ur.forEach(o),Pt=t(_n,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),_n.forEach(o),zt=l(_),Se=s(_,"P",{});var vn=d(Se);Ct=t(vn,"Additionally, in "),Te=s(vn,"A",{href:!0,rel:!0});var Hr=d(Te);Ft=t(Hr,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Hr.forEach(o),At=t(vn,` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),vn.forEach(o),Lt=l(_),Po=s(_,"P",{});var Gr=d(Po);Nt=t(Gr,`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Gr.forEach(o),It=l(_),xe=s(_,"P",{});var bn=d(xe);Wt=t(bn,"This model inherits from "),ro=s(bn,"A",{href:!0});var Jr=d(ro);Vt=t(Jr,"PreTrainedModel"),Jr.forEach(o),Ot=t(bn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bn.forEach(o),Bt=l(_),De=s(_,"P",{});var yn=d(De);Rt=t(yn,"This model is also a PyTorch "),Me=s(yn,"A",{href:!0,rel:!0});var Yr=d(Me);Ut=t(Yr,"torch.nn.Module"),Yr.forEach(o),Ht=t(yn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yn.forEach(o),Gt=l(_),W=s(_,"P",{});var Ge=d(W);so=s(Ge,"A",{href:!0});var Zr=d(so);Jt=t(Zr,"SpeechEncoderDecoderModel"),Zr.forEach(o),Yt=t(Ge,` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),zo=s(Ge,"EM",{});var Kr=d(zo);Zt=t(Kr,"~transformers.AutoModel.from_pretrained"),Kr.forEach(o),Kt=t(Ge,` class method for the encoder and
:meth`),Co=s(Ge,"EM",{});var Qr=d(Co);Qt=t(Qr,"~transformers.AutoModelForCausalLM.from_pretrained"),Qr.forEach(o),Xt=t(Ge," class method for the decoder."),Ge.forEach(o),ea=l(_),q=s(_,"DIV",{class:!0});var B=d(q);y($e.$$.fragment,B),oa=l(B),K=s(B,"P",{});var _o=d(K);na=t(_o,"The "),co=s(_o,"A",{href:!0});var Xr=d(co);ta=t(Xr,"SpeechEncoderDecoderModel"),Xr.forEach(o),aa=t(_o," forward method, overrides the "),Fo=s(_o,"CODE",{});var es=d(Fo);ra=t(es,"__call__"),es.forEach(o),sa=t(_o," special method."),_o.forEach(o),da=l(B),y(ce.$$.fragment,B),ca=l(B),Ao=s(B,"P",{});var os=d(Ao);ia=t(os,"Examples:"),os.forEach(o),la=l(B),y(je.$$.fragment,B),B.forEach(o),pa=l(_),P=s(_,"DIV",{class:!0});var R=d(P);y(qe.$$.fragment,R),ha=l(R),Lo=s(R,"P",{});var ns=d(Lo);ma=t(ns,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ns.forEach(o),fa=l(R),Q=s(R,"P",{});var vo=d(Q);ua=t(vo,"The model is set in evaluation mode by default using "),No=s(vo,"CODE",{});var ts=d(No);ga=t(ts,"model.eval()"),ts.forEach(o),_a=t(vo,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Io=s(vo,"CODE",{});var as=d(Io);va=t(as,"model.train()"),as.forEach(o),ba=t(vo,"."),vo.forEach(o),ya=l(R),Wo=s(R,"P",{});var rs=d(Wo);wa=t(rs,"Example:"),rs.forEach(o),Ea=l(R),y(Pe.$$.fragment,R),R.forEach(o),_.forEach(o),cn=l(a),X=s(a,"H2",{class:!0});var wn=d(X);ie=s(wn,"A",{id:!0,class:!0,href:!0});var ss=d(ie);Vo=s(ss,"SPAN",{});var ds=d(Vo);y(ze.$$.fragment,ds),ds.forEach(o),ss.forEach(o),ka=l(wn),Oo=s(wn,"SPAN",{});var cs=d(Oo);Sa=t(cs,"FlaxSpeechEncoderDecoderModel"),cs.forEach(o),wn.forEach(o),ln=l(a),f=s(a,"DIV",{class:!0});var v=d(f);y(Ce.$$.fragment,v),Ta=l(v),ee=s(v,"P",{});var bo=d(ee);xa=t(bo,`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Bo=s(bo,"CODE",{});var is=d(Bo);Da=t(is,"from_pretrained()"),is.forEach(o),Ma=t(bo,`function and the decoder is loaded via
`),Ro=s(bo,"CODE",{});var ls=d(Ro);$a=t(ls,"from_pretrained()"),ls.forEach(o),ja=t(bo,`function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),bo.forEach(o),qa=l(v),Fe=s(v,"P",{});var En=d(Fe);Pa=t(En,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ae=s(En,"A",{href:!0,rel:!0});var ps=d(Ae);za=t(ps,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),ps.forEach(o),Ca=t(En,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),En.forEach(o),Fa=l(v),Le=s(v,"P",{});var kn=d(Le);Aa=t(kn,"Additionally, in "),Ne=s(kn,"A",{href:!0,rel:!0});var hs=d(Ne);La=t(hs,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),hs.forEach(o),Na=t(kn,` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),kn.forEach(o),Ia=l(v),Uo=s(v,"P",{});var ms=d(Uo);Wa=t(ms,`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),ms.forEach(o),Va=l(v),Ie=s(v,"P",{});var Sn=d(Ie);Oa=t(Sn,"This model inherits from "),io=s(Sn,"A",{href:!0});var fs=d(io);Ba=t(fs,"FlaxPreTrainedModel"),fs.forEach(o),Ra=t(Sn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sn.forEach(o),Ua=l(v),We=s(v,"P",{});var Tn=d(We);Ha=t(Tn,`This model is also a Flax Linen
`),Ve=s(Tn,"A",{href:!0,rel:!0});var us=d(Ve);Ga=t(us,"flax.nn.Module"),us.forEach(o),Ja=t(Tn,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Tn.forEach(o),Ya=l(v),V=s(v,"P",{});var Je=d(V);lo=s(Je,"A",{href:!0});var gs=d(lo);Za=t(gs,"FlaxSpeechEncoderDecoderModel"),gs.forEach(o),Ka=t(Je,` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one
as decoder module when created with the :meth`),Ho=s(Je,"EM",{});var _s=d(Ho);Qa=t(_s,"~transformers.FlaxAutoModel.from_pretrained"),_s.forEach(o),Xa=t(Je,` class method for the
encoder and :meth`),Go=s(Je,"EM",{});var vs=d(Go);er=t(vs,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),vs.forEach(o),or=t(Je," class method for the decoder."),Je.forEach(o),nr=l(v),z=s(v,"DIV",{class:!0});var U=d(z);y(Oe.$$.fragment,U),tr=l(U),oe=s(U,"P",{});var yo=d(oe);ar=t(yo,"The "),po=s(yo,"A",{href:!0});var bs=d(po);rr=t(bs,"FlaxSpeechEncoderDecoderModel"),bs.forEach(o),sr=t(yo," forward method, overrides the "),Jo=s(yo,"CODE",{});var ys=d(Jo);dr=t(ys,"__call__"),ys.forEach(o),cr=t(yo," special method."),yo.forEach(o),ir=l(U),y(le.$$.fragment,U),lr=l(U),Yo=s(U,"P",{});var ws=d(Yo);pr=t(ws,"Examples:"),ws.forEach(o),hr=l(U),y(Be.$$.fragment,U),U.forEach(o),mr=l(v),A=s(v,"DIV",{class:!0});var pe=d(A);y(Re.$$.fragment,pe),fr=l(pe),Zo=s(pe,"P",{});var Es=d(Zo);ur=t(Es,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Es.forEach(o),gr=l(pe),Ko=s(pe,"P",{});var ks=d(Ko);_r=t(ks,"Example:"),ks.forEach(o),vr=l(pe),y(Ue.$$.fragment,pe),pe.forEach(o),v.forEach(o),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(Ps)),c(T,"id","speech-encoder-decoder-models"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#speech-encoder-decoder-models"),c(u,"class","relative group"),c(Ye,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(Ze,"href","wav2vec2"),c(Ke,"href","hubert"),c(me,"href","https://arxiv.org/abs/2104.06678"),c(me,"rel","nofollow"),c(Qe,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(Xe,"href","speech_to_text_2"),c(te,"id","transformers.SpeechEncoderDecoderConfig"),c(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(te,"href","#transformers.SpeechEncoderDecoderConfig"),c(H,"class","relative group"),c(eo,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),c(oo,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(no,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(to,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ao,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),c(re,"class","docstring"),c(se,"class","docstring"),c(D,"class","docstring"),c(de,"id","transformers.SpeechEncoderDecoderModel"),c(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(de,"href","#transformers.SpeechEncoderDecoderModel"),c(Y,"class","relative group"),c(ke,"href","https://arxiv.org/abs/1907.12461"),c(ke,"rel","nofollow"),c(Te,"href","https://arxiv.org/abs/2104.06678"),c(Te,"rel","nofollow"),c(ro,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Me,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Me,"rel","nofollow"),c(so,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(co,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(q,"class","docstring"),c(P,"class","docstring"),c(m,"class","docstring"),c(ie,"id","transformers.FlaxSpeechEncoderDecoderModel"),c(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ie,"href","#transformers.FlaxSpeechEncoderDecoderModel"),c(X,"class","relative group"),c(Ae,"href","https://arxiv.org/abs/1907.12461"),c(Ae,"rel","nofollow"),c(Ne,"href","https://arxiv.org/abs/2104.06678"),c(Ne,"rel","nofollow"),c(io,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ve,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ve,"rel","nofollow"),c(lo,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.FlaxSpeechEncoderDecoderModel"),c(po,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.FlaxSpeechEncoderDecoderModel"),c(z,"class","docstring"),c(A,"class","docstring"),c(f,"class","docstring")},m(a,h){e(document.head,p),g(a,$,h),g(a,u,h),e(u,T),e(T,F),w(x,F,null),e(u,M),e(u,L),e(L,Dn),g(a,on,h),g(a,j,h),e(j,Mn),e(j,Ye),e(Ye,$n),e(j,jn),e(j,wo),e(wo,qn),e(j,Pn),e(j,Ze),e(Ze,zn),e(j,Cn),e(j,Ke),e(Ke,Fn),e(j,An),g(a,nn,h),g(a,N,h),e(N,Ln),e(N,Eo),e(Eo,Nn),e(N,In),e(N,me),e(me,Wn),e(N,Vn),g(a,tn,h),g(a,I,h),e(I,On),e(I,Qe),e(Qe,Bn),e(I,Rn),e(I,Xe),e(Xe,Un),e(I,Hn),g(a,an,h),g(a,H,h),e(H,te),e(te,ko),w(fe,ko,null),e(H,Gn),e(H,So),e(So,Jn),g(a,rn,h),g(a,D,h),w(ue,D,null),e(D,Yn),e(D,ae),e(ae,eo),e(eo,Zn),e(ae,Kn),e(ae,oo),e(oo,Qn),e(ae,Xn),e(D,et),e(D,G),e(G,ot),e(G,no),e(no,nt),e(G,tt),e(G,to),e(to,at),e(G,rt),e(D,st),e(D,To),e(To,dt),e(D,ct),w(ge,D,null),e(D,it),e(D,re),w(_e,re,null),e(re,lt),e(re,ve),e(ve,pt),e(ve,ao),e(ao,ht),e(ve,mt),e(D,ft),e(D,se),w(be,se,null),e(se,ut),e(se,J),e(J,gt),e(J,xo),e(xo,_t),e(J,vt),e(J,Do),e(Do,bt),e(J,yt),g(a,sn,h),g(a,Y,h),e(Y,de),e(de,Mo),w(ye,Mo,null),e(Y,wt),e(Y,$o),e($o,Et),g(a,dn,h),g(a,m,h),w(we,m,null),e(m,kt),e(m,Z),e(Z,St),e(Z,jo),e(jo,Tt),e(Z,xt),e(Z,qo),e(qo,Dt),e(Z,Mt),e(m,$t),e(m,Ee),e(Ee,jt),e(Ee,ke),e(ke,qt),e(Ee,Pt),e(m,zt),e(m,Se),e(Se,Ct),e(Se,Te),e(Te,Ft),e(Se,At),e(m,Lt),e(m,Po),e(Po,Nt),e(m,It),e(m,xe),e(xe,Wt),e(xe,ro),e(ro,Vt),e(xe,Ot),e(m,Bt),e(m,De),e(De,Rt),e(De,Me),e(Me,Ut),e(De,Ht),e(m,Gt),e(m,W),e(W,so),e(so,Jt),e(W,Yt),e(W,zo),e(zo,Zt),e(W,Kt),e(W,Co),e(Co,Qt),e(W,Xt),e(m,ea),e(m,q),w($e,q,null),e(q,oa),e(q,K),e(K,na),e(K,co),e(co,ta),e(K,aa),e(K,Fo),e(Fo,ra),e(K,sa),e(q,da),w(ce,q,null),e(q,ca),e(q,Ao),e(Ao,ia),e(q,la),w(je,q,null),e(m,pa),e(m,P),w(qe,P,null),e(P,ha),e(P,Lo),e(Lo,ma),e(P,fa),e(P,Q),e(Q,ua),e(Q,No),e(No,ga),e(Q,_a),e(Q,Io),e(Io,va),e(Q,ba),e(P,ya),e(P,Wo),e(Wo,wa),e(P,Ea),w(Pe,P,null),g(a,cn,h),g(a,X,h),e(X,ie),e(ie,Vo),w(ze,Vo,null),e(X,ka),e(X,Oo),e(Oo,Sa),g(a,ln,h),g(a,f,h),w(Ce,f,null),e(f,Ta),e(f,ee),e(ee,xa),e(ee,Bo),e(Bo,Da),e(ee,Ma),e(ee,Ro),e(Ro,$a),e(ee,ja),e(f,qa),e(f,Fe),e(Fe,Pa),e(Fe,Ae),e(Ae,za),e(Fe,Ca),e(f,Fa),e(f,Le),e(Le,Aa),e(Le,Ne),e(Ne,La),e(Le,Na),e(f,Ia),e(f,Uo),e(Uo,Wa),e(f,Va),e(f,Ie),e(Ie,Oa),e(Ie,io),e(io,Ba),e(Ie,Ra),e(f,Ua),e(f,We),e(We,Ha),e(We,Ve),e(Ve,Ga),e(We,Ja),e(f,Ya),e(f,V),e(V,lo),e(lo,Za),e(V,Ka),e(V,Ho),e(Ho,Qa),e(V,Xa),e(V,Go),e(Go,er),e(V,or),e(f,nr),e(f,z),w(Oe,z,null),e(z,tr),e(z,oe),e(oe,ar),e(oe,po),e(po,rr),e(oe,sr),e(oe,Jo),e(Jo,dr),e(oe,cr),e(z,ir),w(le,z,null),e(z,lr),e(z,Yo),e(Yo,pr),e(z,hr),w(Be,z,null),e(f,mr),e(f,A),w(Re,A,null),e(A,fr),e(A,Zo),e(Zo,ur),e(A,gr),e(A,Ko),e(Ko,_r),e(A,vr),w(Ue,A,null),pn=!0},p(a,[h]){const He={};h&2&&(He.$$scope={dirty:h,ctx:a}),ce.$set(He);const Qo={};h&2&&(Qo.$$scope={dirty:h,ctx:a}),le.$set(Qo)},i(a){pn||(E(x.$$.fragment,a),E(fe.$$.fragment,a),E(ue.$$.fragment,a),E(ge.$$.fragment,a),E(_e.$$.fragment,a),E(be.$$.fragment,a),E(ye.$$.fragment,a),E(we.$$.fragment,a),E($e.$$.fragment,a),E(ce.$$.fragment,a),E(je.$$.fragment,a),E(qe.$$.fragment,a),E(Pe.$$.fragment,a),E(ze.$$.fragment,a),E(Ce.$$.fragment,a),E(Oe.$$.fragment,a),E(le.$$.fragment,a),E(Be.$$.fragment,a),E(Re.$$.fragment,a),E(Ue.$$.fragment,a),pn=!0)},o(a){k(x.$$.fragment,a),k(fe.$$.fragment,a),k(ue.$$.fragment,a),k(ge.$$.fragment,a),k(_e.$$.fragment,a),k(be.$$.fragment,a),k(ye.$$.fragment,a),k(we.$$.fragment,a),k($e.$$.fragment,a),k(ce.$$.fragment,a),k(je.$$.fragment,a),k(qe.$$.fragment,a),k(Pe.$$.fragment,a),k(ze.$$.fragment,a),k(Ce.$$.fragment,a),k(Oe.$$.fragment,a),k(le.$$.fragment,a),k(Be.$$.fragment,a),k(Re.$$.fragment,a),k(Ue.$$.fragment,a),pn=!1},d(a){o(p),a&&o($),a&&o(u),S(x),a&&o(on),a&&o(j),a&&o(nn),a&&o(N),a&&o(tn),a&&o(I),a&&o(an),a&&o(H),S(fe),a&&o(rn),a&&o(D),S(ue),S(ge),S(_e),S(be),a&&o(sn),a&&o(Y),S(ye),a&&o(dn),a&&o(m),S(we),S($e),S(ce),S(je),S(qe),S(Pe),a&&o(cn),a&&o(X),S(ze),a&&o(ln),a&&o(f),S(Ce),S(Oe),S(le),S(Be),S(Re),S(Ue)}}}const Ps={local:"speech-encoder-decoder-models",sections:[{local:"transformers.SpeechEncoderDecoderConfig",title:"SpeechEncoderDecoderConfig"},{local:"transformers.SpeechEncoderDecoderModel",title:"SpeechEncoderDecoderModel"},{local:"transformers.FlaxSpeechEncoderDecoderModel",title:"FlaxSpeechEncoderDecoderModel"}],title:"Speech Encoder Decoder Models"};function zs(he,p,$){let{fw:u}=p;return he.$$set=T=>{"fw"in T&&$(0,u=T.fw)},[u]}class Ws extends Ts{constructor(p){super();xs(this,p,zs,qs,Ds,{fw:0})}}export{Ws as default,Ps as metadata};
