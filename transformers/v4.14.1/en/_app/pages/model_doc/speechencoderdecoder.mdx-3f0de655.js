import{S as Bd,i as Rd,s as Hd,e as r,k as c,w as M,t as o,L as Jd,c as a,d as n,m as i,a as s,x as $,h as t,b as l,J as e,g as E,y as x,q as C,o as P,B as j}from"../../chunks/vendor-b1433968.js";import{T as Ud}from"../../chunks/Tip-c3840994.js";import{D as _o}from"../../chunks/Docstring-ff504c58.js";import{C as vs}from"../../chunks/CodeBlock-a320dbd7.js";import{I as Es}from"../../chunks/IconCopyLink-7029626d.js";import"../../chunks/CopyButton-f65cb278.js";function Gd(vo){let g,N,v,b,U;return{c(){g=r("p"),N=o(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=r("code"),b=o("Module"),U=o(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(D){g=a(D,"P",{});var W=s(g);N=t(W,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=a(W,"CODE",{});var de=s(v);b=t(de,"Module"),de.forEach(n),U=t(W,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),W.forEach(n)},m(D,W){E(D,g,W),e(g,N),e(g,v),e(v,b),e(g,U)},d(D){D&&n(g)}}}function Yd(vo){let g,N,v,b,U,D,W,de,It,Et,T,Ft,Ve,Ot,Nt,Eo,Wt,Vt,Be,Bt,Rt,Re,Ht,Jt,bt,V,Ut,bo,Gt,Yt,Ee,Zt,Kt,wt,B,Qt,He,Xt,en,Je,on,tn,yt,G,ce,wo,be,nn,yo,rn,Tt,_,we,an,ie,Ue,sn,dn,Ge,cn,ln,hn,Y,pn,Ye,fn,mn,Ze,un,gn,_n,To,vn,En,ye,bn,le,Te,wn,ke,yn,Ke,Tn,kn,Sn,he,Se,Dn,Z,Mn,ko,$n,xn,So,Cn,Pn,kt,K,pe,Do,De,jn,Mo,zn,St,f,Me,qn,Q,An,$o,Ln,In,xo,Fn,On,Nn,$e,Wn,xe,Vn,Bn,Rn,Ce,Hn,Pe,Jn,Un,Gn,Co,Yn,Zn,je,Kn,Qe,Qn,Xn,er,ze,or,qe,tr,nr,rr,R,Xe,ar,sr,Po,dr,cr,jo,ir,lr,hr,k,Ae,pr,X,fr,eo,mr,ur,zo,gr,_r,vr,fe,Er,qo,br,wr,Le,yr,h,Ie,Tr,Ao,kr,Sr,ee,Dr,Lo,Mr,$r,Io,xr,Cr,Pr,oe,jr,Fo,zr,qr,Oo,Ar,Lr,Ir,te,A,Fr,No,Or,Nr,Wo,Wr,Vr,Vo,Br,Rr,Hr,L,Jr,Bo,Ur,Gr,oo,Yr,Zr,Ro,Kr,Qr,Xr,w,ea,Ho,oa,ta,Jo,na,ra,Uo,aa,sa,Go,da,ca,Yo,ia,la,ha,I,pa,Zo,fa,ma,Ko,ua,ga,Qo,_a,va,Ea,ne,F,ba,Xo,wa,ya,et,Ta,ka,ot,Sa,Da,Ma,O,$a,tt,xa,Ca,to,Pa,ja,nt,za,qa,Aa,y,La,rt,Ia,Fa,at,Oa,Na,st,Wa,Va,dt,Ba,Ra,ct,Ha,Ja,Ua,re,Ga,it,Ya,Za,lt,Ka,Qa,Xa,ae,es,ht,os,ts,pt,ns,rs,as,se,ft,ss,ds,mt,cs,is,ut,ls,hs,Fe,ps,gt,fs,ms,us,_t,gs,_s,Oe,Dt;return D=new Es({}),be=new Es({}),we=new _o({props:{name:"class transformers.SpeechEncoderDecoderConfig",anchor:"transformers.SpeechEncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L27",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration
object that defines the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration
object that defines the decoder config.</li>
</ul>`,name:"kwargs"}]}}),ye=new vs({props:{code:`from transformers import BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

# Initializing a Wav2Vec2 & BERT style configuration
config_encoder = Wav2Vec2Config()
config_decoder = BertConfig()

config = SpeechEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

# Initializing a Wav2Vec2Bert model from a Wav2Vec2 & bert-base-uncased style configurations
model = SpeechEncoderDecoderModel(config=config)

# Accessing the model configuration
config_encoder = model.config.encoder
config_decoder  = model.config.decoder
# set decoder config to causal lm
config_decoder.is_decoder = True
config_decoder.add_cross_attention = True

# Saving the model, including its configuration
model.save_pretrained('my-model')

# loading model and config from pretrained folder
encoder_decoder_config = SpeechEncoderDecoderConfig.from_pretrained('my-model')
model = SpeechEncoderDecoderModel.from_pretrained('my-model', config=encoder_decoder_config),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Wav2Vec2 &amp; BERT style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = Wav2Vec2Config()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = SpeechEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Wav2Vec2Bert model from a Wav2Vec2 &amp; bert-base-uncased style configurations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = model.config.encoder
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder  = model.config.decoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set decoder config to causal lm</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.add_cross_attention = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&#x27;my-model&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_decoder_config = SpeechEncoderDecoderConfig.from_pretrained(<span class="hljs-string">&#x27;my-model&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&#x27;my-model&#x27;</span>, config=encoder_decoder_config)`}}),Te=new _o({props:{name:"from_encoder_decoder_configs",anchor:"transformers.SpeechEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L91",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/model_doc/speechencoderdecoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a></p>
`}}),Se=new _o({props:{name:"to_dict",anchor:"transformers.SpeechEncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L108",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),De=new Es({}),Me=new _o({props:{name:"class transformers.SpeechEncoderDecoderModel",anchor:"transformers.SpeechEncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L174",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/speechencoderdecoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ae=new _o({props:{name:"forward",anchor:"transformers.SpeechEncoderDecoderModel.forward",parameters:[{name:"input_values",val:" = None"},{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L419",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.14.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should
be used for padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See
<a href="/docs/transformers/v4.14.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">transformers.Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>, <em>optional</em>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a
<code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<code>pip install soundfile</code>). To prepare the array
into <code>input_features</code>, the <a href="/docs/transformers/v4.14.1/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting
the fbank features, padding and conversion into a tensor of type <code>torch.FloatTensor</code>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code>
to the right, replacing -100 by the <code>pad_token_id</code> and prepending them with the
<code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor of hidden-states at the output of the last layer of the
encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code>
indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a
plain tuple.
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a _decoder__ prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/speechencoderdecoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fe=new Ud({props:{$$slots:{default:[Gd]},$$scope:{ctx:vo}}}),Le=new vs({props:{code:`from transformers import SpeechEncoderDecoderModel, Speech2Text2Processor
from datasets import load_dataset
import torch

processor = Speech2Text2Processor.from_pretrained('facebook/s2t-wav2vec2-large-en-de')
model = SpeechEncoderDecoderModel.from_pretrained('facebook/s2t-wav2vec2-large-en-de')

ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")

input_values = processor(ds[0]["audio"]["array"], return_tensors="pt").input_values
decoder_input_ids = torch.tensor([[model.config.decoder.decoder_start_token_id]])
outputs = model(input_values=input_values, decoder_input_ids=decoder_input_ids)

# inference (generation)
generated = model.generate(input_values)
translation = processor.batch_decode(generated),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel, Speech2Text2Processor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2Text2Processor.from_pretrained(<span class="hljs-string">&#x27;facebook/s2t-wav2vec2-large-en-de&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&#x27;facebook/s2t-wav2vec2-large-en-de&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = torch.tensor([[model.config.decoder.decoder_start_token_id]])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_values=input_values, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference (generation)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>translation = processor.batch_decode(generated)`}}),Ie=new _o({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L272"}}),Oe=new vs({props:{code:`from transformers import SpeechEncoderDecoderModel
# initialize a wav2vec2bert from a pretrained Wav2Vec2 and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized
model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained('facebook/wav2vec2-base-960h', 'bert-base-uncased')
# saving model after fine-tuning
model.save_pretrained("./wav2vec2bert")
# load fine-tuned model
model = SpeechEncoderDecoderModel.from_pretrained("./wav2vec2bert"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a wav2vec2bert from a pretrained Wav2Vec2 and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&#x27;facebook/wav2vec2-base-960h&#x27;</span>, <span class="hljs-string">&#x27;bert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./wav2vec2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2bert&quot;</span>)`}}),{c(){g=r("meta"),N=c(),v=r("h1"),b=r("a"),U=r("span"),M(D.$$.fragment),W=c(),de=r("span"),It=o("Speech Encoder Decoder Models"),Et=c(),T=r("p"),Ft=o("The "),Ve=r("a"),Ot=o("SpeechEncoderDecoderModel"),Nt=o(` can be used to initialize a speech-sequence-to-text-sequence model
with any pretrained speech autoencoding model as the encoder (`),Eo=r("em"),Wt=o("e.g."),Vt=c(),Be=r("a"),Bt=o("Wav2Vec2"),Rt=o(", "),Re=r("a"),Ht=o("Hubert"),Jt=o(") and any pretrained autoregressive model as the decoder."),bt=c(),V=r("p"),Ut=o(`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),bo=r("em"),Gt=o("e.g."),Yt=o(" been shown in "),Ee=r("a"),Zt=o(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Kt=o(` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),wt=c(),B=r("p"),Qt=o("An example of how to use a "),He=r("a"),Xt=o("SpeechEncoderDecoderModel"),en=o(` for inference can be seen in
`),Je=r("a"),on=o("Speech2Text2"),tn=o("."),yt=c(),G=r("h2"),ce=r("a"),wo=r("span"),M(be.$$.fragment),nn=c(),yo=r("span"),rn=o("SpeechEncoderDecoderConfig"),Tt=c(),_=r("div"),M(we.$$.fragment),an=c(),ie=r("p"),Ue=r("a"),sn=o("SpeechEncoderDecoderConfig"),dn=o(` is the configuration class to store the configuration of a
`),Ge=r("a"),cn=o("SpeechEncoderDecoderModel"),ln=o(`. It is used to instantiate an Encoder Decoder model according to
the specified arguments, defining the encoder and decoder configs.`),hn=c(),Y=r("p"),pn=o("Configuration objects inherit from "),Ye=r("a"),fn=o("PretrainedConfig"),mn=o(` and can be used to control the model
outputs. Read the documentation from `),Ze=r("a"),un=o("PretrainedConfig"),gn=o(" for more information."),_n=c(),To=r("p"),vn=o("Examples:"),En=c(),M(ye.$$.fragment),bn=c(),le=r("div"),M(Te.$$.fragment),wn=c(),ke=r("p"),yn=o("Instantiate a "),Ke=r("a"),Tn=o("SpeechEncoderDecoderConfig"),kn=o(` (or a derived class) from a pre-trained encoder
model configuration and decoder model configuration.`),Sn=c(),he=r("div"),M(Se.$$.fragment),Dn=c(),Z=r("p"),Mn=o("Serializes this instance to a Python dictionary. Override the default "),ko=r("em"),$n=o("to_dict()"),xn=o(" from "),So=r("em"),Cn=o("PretrainedConfig"),Pn=o("."),kt=c(),K=r("h2"),pe=r("a"),Do=r("span"),M(De.$$.fragment),jn=c(),Mo=r("span"),zn=o("SpeechEncoderDecoderModel"),St=c(),f=r("div"),M(Me.$$.fragment),qn=c(),Q=r("p"),An=o(`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),$o=r("code"),Ln=o("from_pretrained()"),In=o(` function and the decoder is loaded via
`),xo=r("code"),Fn=o("from_pretrained()"),On=o(` function. Cross-attention layers are automatically added
to the decoder and should be fine-tuned on a downstream generative task, like summarization.`),Nn=c(),$e=r("p"),Wn=o(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),xe=r("a"),Vn=o("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Bn=o(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Rn=c(),Ce=r("p"),Hn=o("Additionally, in "),Pe=r("a"),Jn=o("Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),Un=o(` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Gn=c(),Co=r("p"),Yn=o(`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Zn=c(),je=r("p"),Kn=o("This model inherits from "),Qe=r("a"),Qn=o("PreTrainedModel"),Xn=o(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),er=c(),ze=r("p"),or=o("This model is also a PyTorch "),qe=r("a"),tr=o("torch.nn.Module"),nr=o(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),rr=c(),R=r("p"),Xe=r("a"),ar=o("SpeechEncoderDecoderModel"),sr=o(` is a generic model class that will be instantiated as a
transformer architecture with one of the base model classes of the library as encoder and another one as decoder
when created with the :meth`),Po=r("em"),dr=o("~transformers.AutoModel.from_pretrained"),cr=o(` class method for the encoder and
:meth`),jo=r("em"),ir=o("~transformers.AutoModelForCausalLM.from_pretrained"),lr=o(" class method for the decoder."),hr=c(),k=r("div"),M(Ae.$$.fragment),pr=c(),X=r("p"),fr=o("The "),eo=r("a"),mr=o("SpeechEncoderDecoderModel"),ur=o(" forward method, overrides the "),zo=r("code"),gr=o("__call__"),_r=o(" special method."),vr=c(),M(fe.$$.fragment),Er=c(),qo=r("p"),br=o("Examples:"),wr=c(),M(Le.$$.fragment),yr=c(),h=r("div"),M(Ie.$$.fragment),Tr=c(),Ao=r("p"),kr=o(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Sr=c(),ee=r("p"),Dr=o("The model is set in evaluation mode by default using "),Lo=r("code"),Mr=o("model.eval()"),$r=o(` (Dropout modules are deactivated). To
train the model, you need to first set it back in training mode with `),Io=r("code"),xr=o("model.train()"),Cr=o("."),Pr=c(),oe=r("p"),jr=o(`Params:
encoder`),Fo=r("em"),zr=o("pretrained_model_name_or_path (:obj: _str"),qr=o(", "),Oo=r("em"),Ar=o("optional"),Lr=o(`):
Information necessary to initiate the encoder. Can be either:`),Ir=c(),te=r("ul"),A=r("li"),Fr=o("A string, the "),No=r("em"),Or=o("model id"),Nr=o(` of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like `),Wo=r("code"),Wr=o("bert-base-uncased"),Vr=o(`, or namespaced under
a user or organization name, like `),Vo=r("code"),Br=o("dbmdz/bert-base-german-cased"),Rr=o("."),Hr=c(),L=r("li"),Jr=o("A path to a "),Bo=r("em"),Ur=o("directory"),Gr=o(` containing model weights saved using
`),oo=r("a"),Yr=o("save_pretrained()"),Zr=o(", e.g., "),Ro=r("code"),Kr=o("./my_model_directory/"),Qr=o("."),Xr=c(),w=r("li"),ea=o("A path or url to a "),Ho=r("em"),oa=o("tensorflow index checkpoint file"),ta=o(" (e.g, "),Jo=r("code"),na=o("./tf_model/model.ckpt.index"),ra=o(`). In
this case, `),Uo=r("code"),aa=o("from_tf"),sa=o(" should be set to "),Go=r("code"),da=o("True"),ca=o(` and a configuration object should be provided
as `),Yo=r("code"),ia=o("config"),la=o(` argument. This loading path is slower than converting the TensorFlow checkpoint in
a PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.`),ha=c(),I=r("p"),pa=o("decoder"),Zo=r("em"),fa=o("pretrained_model_name_or_path (:obj: _str"),ma=o(", "),Ko=r("em"),ua=o("optional"),ga=o(", defaults to "),Qo=r("em"),_a=o("None"),va=o(`):
Information necessary to initiate the decoder. Can be either:`),Ea=c(),ne=r("ul"),F=r("li"),ba=o("A string, the "),Xo=r("em"),wa=o("model id"),ya=o(` of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like `),et=r("code"),Ta=o("bert-base-uncased"),ka=o(`, or namespaced under
a user or organization name, like `),ot=r("code"),Sa=o("dbmdz/bert-base-german-cased"),Da=o("."),Ma=c(),O=r("li"),$a=o("A path to a "),tt=r("em"),xa=o("directory"),Ca=o(` containing model weights saved using
`),to=r("a"),Pa=o("save_pretrained()"),ja=o(", e.g., "),nt=r("code"),za=o("./my_model_directory/"),qa=o("."),Aa=c(),y=r("li"),La=o("A path or url to a "),rt=r("em"),Ia=o("tensorflow index checkpoint file"),Fa=o(" (e.g, "),at=r("code"),Oa=o("./tf_model/model.ckpt.index"),Na=o(`). In
this case, `),st=r("code"),Wa=o("from_tf"),Va=o(" should be set to "),dt=r("code"),Ba=o("True"),Ra=o(` and a configuration object should be provided
as `),ct=r("code"),Ha=o("config"),Ja=o(` argument. This loading path is slower than converting the TensorFlow checkpoint in
a PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.`),Ua=c(),re=r("p"),Ga=o("model"),it=r("em"),Ya=o("args (remaining positional arguments, _optional"),Za=o(`):
All remaning positional arguments will be passed to the underlying model\u2019s `),lt=r("code"),Ka=o("__init__"),Qa=o(" method."),Xa=c(),ae=r("p"),es=o("kwargs (remaining dictionary of keyword arguments, "),ht=r("em"),os=o("optional"),ts=o(`):
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
`),pt=r("code"),ns=o("output_attentions=True"),rs=o(")."),as=c(),se=r("ul"),ft=r("li"),ss=o("To update the encoder configuration, use the prefix _encoder__ for each configuration parameter."),ds=c(),mt=r("li"),cs=o("To update the decoder configuration, use the prefix _decoder__ for each configuration parameter."),is=c(),ut=r("li"),ls=o("To update the parent model configuration, do not use a prefix for each configuration parameter."),hs=c(),Fe=r("p"),ps=o("Behaves differently depending on whether a "),gt=r("code"),fs=o("config"),ms=o(" is provided or automatically loaded."),us=c(),_t=r("p"),gs=o("Example:"),_s=c(),M(Oe.$$.fragment),this.h()},l(d){const m=Jd('[data-svelte="svelte-1phssyn"]',document.head);g=a(m,"META",{name:!0,content:!0}),m.forEach(n),N=i(d),v=a(d,"H1",{class:!0});var Ne=s(v);b=a(Ne,"A",{id:!0,class:!0,href:!0});var bs=s(b);U=a(bs,"SPAN",{});var ws=s(U);$(D.$$.fragment,ws),ws.forEach(n),bs.forEach(n),W=i(Ne),de=a(Ne,"SPAN",{});var ys=s(de);It=t(ys,"Speech Encoder Decoder Models"),ys.forEach(n),Ne.forEach(n),Et=i(d),T=a(d,"P",{});var H=s(T);Ft=t(H,"The "),Ve=a(H,"A",{href:!0});var Ts=s(Ve);Ot=t(Ts,"SpeechEncoderDecoderModel"),Ts.forEach(n),Nt=t(H,` can be used to initialize a speech-sequence-to-text-sequence model
with any pretrained speech autoencoding model as the encoder (`),Eo=a(H,"EM",{});var ks=s(Eo);Wt=t(ks,"e.g."),ks.forEach(n),Vt=i(H),Be=a(H,"A",{href:!0});var Ss=s(Be);Bt=t(Ss,"Wav2Vec2"),Ss.forEach(n),Rt=t(H,", "),Re=a(H,"A",{href:!0});var Ds=s(Re);Ht=t(Ds,"Hubert"),Ds.forEach(n),Jt=t(H,") and any pretrained autoregressive model as the decoder."),H.forEach(n),bt=i(d),V=a(d,"P",{});var no=s(V);Ut=t(no,`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),bo=a(no,"EM",{});var Ms=s(bo);Gt=t(Ms,"e.g."),Ms.forEach(n),Yt=t(no," been shown in "),Ee=a(no,"A",{href:!0,rel:!0});var $s=s(Ee);Zt=t($s,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),$s.forEach(n),Kt=t(no,` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),no.forEach(n),wt=i(d),B=a(d,"P",{});var ro=s(B);Qt=t(ro,"An example of how to use a "),He=a(ro,"A",{href:!0});var xs=s(He);Xt=t(xs,"SpeechEncoderDecoderModel"),xs.forEach(n),en=t(ro,` for inference can be seen in
`),Je=a(ro,"A",{href:!0});var Cs=s(Je);on=t(Cs,"Speech2Text2"),Cs.forEach(n),tn=t(ro,"."),ro.forEach(n),yt=i(d),G=a(d,"H2",{class:!0});var Mt=s(G);ce=a(Mt,"A",{id:!0,class:!0,href:!0});var Ps=s(ce);wo=a(Ps,"SPAN",{});var js=s(wo);$(be.$$.fragment,js),js.forEach(n),Ps.forEach(n),nn=i(Mt),yo=a(Mt,"SPAN",{});var zs=s(yo);rn=t(zs,"SpeechEncoderDecoderConfig"),zs.forEach(n),Mt.forEach(n),Tt=i(d),_=a(d,"DIV",{class:!0});var S=s(_);$(we.$$.fragment,S),an=i(S),ie=a(S,"P",{});var vt=s(ie);Ue=a(vt,"A",{href:!0});var qs=s(Ue);sn=t(qs,"SpeechEncoderDecoderConfig"),qs.forEach(n),dn=t(vt,` is the configuration class to store the configuration of a
`),Ge=a(vt,"A",{href:!0});var As=s(Ge);cn=t(As,"SpeechEncoderDecoderModel"),As.forEach(n),ln=t(vt,`. It is used to instantiate an Encoder Decoder model according to
the specified arguments, defining the encoder and decoder configs.`),vt.forEach(n),hn=i(S),Y=a(S,"P",{});var ao=s(Y);pn=t(ao,"Configuration objects inherit from "),Ye=a(ao,"A",{href:!0});var Ls=s(Ye);fn=t(Ls,"PretrainedConfig"),Ls.forEach(n),mn=t(ao,` and can be used to control the model
outputs. Read the documentation from `),Ze=a(ao,"A",{href:!0});var Is=s(Ze);un=t(Is,"PretrainedConfig"),Is.forEach(n),gn=t(ao," for more information."),ao.forEach(n),_n=i(S),To=a(S,"P",{});var Fs=s(To);vn=t(Fs,"Examples:"),Fs.forEach(n),En=i(S),$(ye.$$.fragment,S),bn=i(S),le=a(S,"DIV",{class:!0});var $t=s(le);$(Te.$$.fragment,$t),wn=i($t),ke=a($t,"P",{});var xt=s(ke);yn=t(xt,"Instantiate a "),Ke=a(xt,"A",{href:!0});var Os=s(Ke);Tn=t(Os,"SpeechEncoderDecoderConfig"),Os.forEach(n),kn=t(xt,` (or a derived class) from a pre-trained encoder
model configuration and decoder model configuration.`),xt.forEach(n),$t.forEach(n),Sn=i(S),he=a(S,"DIV",{class:!0});var Ct=s(he);$(Se.$$.fragment,Ct),Dn=i(Ct),Z=a(Ct,"P",{});var so=s(Z);Mn=t(so,"Serializes this instance to a Python dictionary. Override the default "),ko=a(so,"EM",{});var Ns=s(ko);$n=t(Ns,"to_dict()"),Ns.forEach(n),xn=t(so," from "),So=a(so,"EM",{});var Ws=s(So);Cn=t(Ws,"PretrainedConfig"),Ws.forEach(n),Pn=t(so,"."),so.forEach(n),Ct.forEach(n),S.forEach(n),kt=i(d),K=a(d,"H2",{class:!0});var Pt=s(K);pe=a(Pt,"A",{id:!0,class:!0,href:!0});var Vs=s(pe);Do=a(Vs,"SPAN",{});var Bs=s(Do);$(De.$$.fragment,Bs),Bs.forEach(n),Vs.forEach(n),jn=i(Pt),Mo=a(Pt,"SPAN",{});var Rs=s(Mo);zn=t(Rs,"SpeechEncoderDecoderModel"),Rs.forEach(n),Pt.forEach(n),St=i(d),f=a(d,"DIV",{class:!0});var u=s(f);$(Me.$$.fragment,u),qn=i(u),Q=a(u,"P",{});var co=s(Q);An=t(co,`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),$o=a(co,"CODE",{});var Hs=s($o);Ln=t(Hs,"from_pretrained()"),Hs.forEach(n),In=t(co,` function and the decoder is loaded via
`),xo=a(co,"CODE",{});var Js=s(xo);Fn=t(Js,"from_pretrained()"),Js.forEach(n),On=t(co,` function. Cross-attention layers are automatically added
to the decoder and should be fine-tuned on a downstream generative task, like summarization.`),co.forEach(n),Nn=i(u),$e=a(u,"P",{});var jt=s($e);Wn=t(jt,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),xe=a(jt,"A",{href:!0,rel:!0});var Us=s(xe);Vn=t(Us,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Us.forEach(n),Bn=t(jt,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),jt.forEach(n),Rn=i(u),Ce=a(u,"P",{});var zt=s(Ce);Hn=t(zt,"Additionally, in "),Pe=a(zt,"A",{href:!0,rel:!0});var Gs=s(Pe);Jn=t(Gs,"Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),Gs.forEach(n),Un=t(zt,` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),zt.forEach(n),Gn=i(u),Co=a(u,"P",{});var Ys=s(Co);Yn=t(Ys,`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Ys.forEach(n),Zn=i(u),je=a(u,"P",{});var qt=s(je);Kn=t(qt,"This model inherits from "),Qe=a(qt,"A",{href:!0});var Zs=s(Qe);Qn=t(Zs,"PreTrainedModel"),Zs.forEach(n),Xn=t(qt,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),qt.forEach(n),er=i(u),ze=a(u,"P",{});var At=s(ze);or=t(At,"This model is also a PyTorch "),qe=a(At,"A",{href:!0,rel:!0});var Ks=s(qe);tr=t(Ks,"torch.nn.Module"),Ks.forEach(n),nr=t(At,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),At.forEach(n),rr=i(u),R=a(u,"P",{});var We=s(R);Xe=a(We,"A",{href:!0});var Qs=s(Xe);ar=t(Qs,"SpeechEncoderDecoderModel"),Qs.forEach(n),sr=t(We,` is a generic model class that will be instantiated as a
transformer architecture with one of the base model classes of the library as encoder and another one as decoder
when created with the :meth`),Po=a(We,"EM",{});var Xs=s(Po);dr=t(Xs,"~transformers.AutoModel.from_pretrained"),Xs.forEach(n),cr=t(We,` class method for the encoder and
:meth`),jo=a(We,"EM",{});var ed=s(jo);ir=t(ed,"~transformers.AutoModelForCausalLM.from_pretrained"),ed.forEach(n),lr=t(We," class method for the decoder."),We.forEach(n),hr=i(u),k=a(u,"DIV",{class:!0});var J=s(k);$(Ae.$$.fragment,J),pr=i(J),X=a(J,"P",{});var io=s(X);fr=t(io,"The "),eo=a(io,"A",{href:!0});var od=s(eo);mr=t(od,"SpeechEncoderDecoderModel"),od.forEach(n),ur=t(io," forward method, overrides the "),zo=a(io,"CODE",{});var td=s(zo);gr=t(td,"__call__"),td.forEach(n),_r=t(io," special method."),io.forEach(n),vr=i(J),$(fe.$$.fragment,J),Er=i(J),qo=a(J,"P",{});var nd=s(qo);br=t(nd,"Examples:"),nd.forEach(n),wr=i(J),$(Le.$$.fragment,J),J.forEach(n),yr=i(u),h=a(u,"DIV",{class:!0});var p=s(h);$(Ie.$$.fragment,p),Tr=i(p),Ao=a(p,"P",{});var rd=s(Ao);kr=t(rd,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),rd.forEach(n),Sr=i(p),ee=a(p,"P",{});var lo=s(ee);Dr=t(lo,"The model is set in evaluation mode by default using "),Lo=a(lo,"CODE",{});var ad=s(Lo);Mr=t(ad,"model.eval()"),ad.forEach(n),$r=t(lo,` (Dropout modules are deactivated). To
train the model, you need to first set it back in training mode with `),Io=a(lo,"CODE",{});var sd=s(Io);xr=t(sd,"model.train()"),sd.forEach(n),Cr=t(lo,"."),lo.forEach(n),Pr=i(p),oe=a(p,"P",{});var ho=s(oe);jr=t(ho,`Params:
encoder`),Fo=a(ho,"EM",{});var dd=s(Fo);zr=t(dd,"pretrained_model_name_or_path (:obj: _str"),dd.forEach(n),qr=t(ho,", "),Oo=a(ho,"EM",{});var cd=s(Oo);Ar=t(cd,"optional"),cd.forEach(n),Lr=t(ho,`):
Information necessary to initiate the encoder. Can be either:`),ho.forEach(n),Ir=i(p),te=a(p,"UL",{});var po=s(te);A=a(po,"LI",{});var me=s(A);Fr=t(me,"A string, the "),No=a(me,"EM",{});var id=s(No);Or=t(id,"model id"),id.forEach(n),Nr=t(me,` of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like `),Wo=a(me,"CODE",{});var ld=s(Wo);Wr=t(ld,"bert-base-uncased"),ld.forEach(n),Vr=t(me,`, or namespaced under
a user or organization name, like `),Vo=a(me,"CODE",{});var hd=s(Vo);Br=t(hd,"dbmdz/bert-base-german-cased"),hd.forEach(n),Rr=t(me,"."),me.forEach(n),Hr=i(po),L=a(po,"LI",{});var ue=s(L);Jr=t(ue,"A path to a "),Bo=a(ue,"EM",{});var pd=s(Bo);Ur=t(pd,"directory"),pd.forEach(n),Gr=t(ue,` containing model weights saved using
`),oo=a(ue,"A",{href:!0});var fd=s(oo);Yr=t(fd,"save_pretrained()"),fd.forEach(n),Zr=t(ue,", e.g., "),Ro=a(ue,"CODE",{});var md=s(Ro);Kr=t(md,"./my_model_directory/"),md.forEach(n),Qr=t(ue,"."),ue.forEach(n),Xr=i(po),w=a(po,"LI",{});var z=s(w);ea=t(z,"A path or url to a "),Ho=a(z,"EM",{});var ud=s(Ho);oa=t(ud,"tensorflow index checkpoint file"),ud.forEach(n),ta=t(z," (e.g, "),Jo=a(z,"CODE",{});var gd=s(Jo);na=t(gd,"./tf_model/model.ckpt.index"),gd.forEach(n),ra=t(z,`). In
this case, `),Uo=a(z,"CODE",{});var _d=s(Uo);aa=t(_d,"from_tf"),_d.forEach(n),sa=t(z," should be set to "),Go=a(z,"CODE",{});var vd=s(Go);da=t(vd,"True"),vd.forEach(n),ca=t(z,` and a configuration object should be provided
as `),Yo=a(z,"CODE",{});var Ed=s(Yo);ia=t(Ed,"config"),Ed.forEach(n),la=t(z,` argument. This loading path is slower than converting the TensorFlow checkpoint in
a PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.`),z.forEach(n),po.forEach(n),ha=i(p),I=a(p,"P",{});var ge=s(I);pa=t(ge,"decoder"),Zo=a(ge,"EM",{});var bd=s(Zo);fa=t(bd,"pretrained_model_name_or_path (:obj: _str"),bd.forEach(n),ma=t(ge,", "),Ko=a(ge,"EM",{});var wd=s(Ko);ua=t(wd,"optional"),wd.forEach(n),ga=t(ge,", defaults to "),Qo=a(ge,"EM",{});var yd=s(Qo);_a=t(yd,"None"),yd.forEach(n),va=t(ge,`):
Information necessary to initiate the decoder. Can be either:`),ge.forEach(n),Ea=i(p),ne=a(p,"UL",{});var fo=s(ne);F=a(fo,"LI",{});var _e=s(F);ba=t(_e,"A string, the "),Xo=a(_e,"EM",{});var Td=s(Xo);wa=t(Td,"model id"),Td.forEach(n),ya=t(_e,` of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like `),et=a(_e,"CODE",{});var kd=s(et);Ta=t(kd,"bert-base-uncased"),kd.forEach(n),ka=t(_e,`, or namespaced under
a user or organization name, like `),ot=a(_e,"CODE",{});var Sd=s(ot);Sa=t(Sd,"dbmdz/bert-base-german-cased"),Sd.forEach(n),Da=t(_e,"."),_e.forEach(n),Ma=i(fo),O=a(fo,"LI",{});var ve=s(O);$a=t(ve,"A path to a "),tt=a(ve,"EM",{});var Dd=s(tt);xa=t(Dd,"directory"),Dd.forEach(n),Ca=t(ve,` containing model weights saved using
`),to=a(ve,"A",{href:!0});var Md=s(to);Pa=t(Md,"save_pretrained()"),Md.forEach(n),ja=t(ve,", e.g., "),nt=a(ve,"CODE",{});var $d=s(nt);za=t($d,"./my_model_directory/"),$d.forEach(n),qa=t(ve,"."),ve.forEach(n),Aa=i(fo),y=a(fo,"LI",{});var q=s(y);La=t(q,"A path or url to a "),rt=a(q,"EM",{});var xd=s(rt);Ia=t(xd,"tensorflow index checkpoint file"),xd.forEach(n),Fa=t(q," (e.g, "),at=a(q,"CODE",{});var Cd=s(at);Oa=t(Cd,"./tf_model/model.ckpt.index"),Cd.forEach(n),Na=t(q,`). In
this case, `),st=a(q,"CODE",{});var Pd=s(st);Wa=t(Pd,"from_tf"),Pd.forEach(n),Va=t(q," should be set to "),dt=a(q,"CODE",{});var jd=s(dt);Ba=t(jd,"True"),jd.forEach(n),Ra=t(q,` and a configuration object should be provided
as `),ct=a(q,"CODE",{});var zd=s(ct);Ha=t(zd,"config"),zd.forEach(n),Ja=t(q,` argument. This loading path is slower than converting the TensorFlow checkpoint in
a PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.`),q.forEach(n),fo.forEach(n),Ua=i(p),re=a(p,"P",{});var mo=s(re);Ga=t(mo,"model"),it=a(mo,"EM",{});var qd=s(it);Ya=t(qd,"args (remaining positional arguments, _optional"),qd.forEach(n),Za=t(mo,`):
All remaning positional arguments will be passed to the underlying model\u2019s `),lt=a(mo,"CODE",{});var Ad=s(lt);Ka=t(Ad,"__init__"),Ad.forEach(n),Qa=t(mo," method."),mo.forEach(n),Xa=i(p),ae=a(p,"P",{});var uo=s(ae);es=t(uo,"kwargs (remaining dictionary of keyword arguments, "),ht=a(uo,"EM",{});var Ld=s(ht);os=t(Ld,"optional"),Ld.forEach(n),ts=t(uo,`):
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
`),pt=a(uo,"CODE",{});var Id=s(pt);ns=t(Id,"output_attentions=True"),Id.forEach(n),rs=t(uo,")."),uo.forEach(n),as=i(p),se=a(p,"UL",{});var go=s(se);ft=a(go,"LI",{});var Fd=s(ft);ss=t(Fd,"To update the encoder configuration, use the prefix _encoder__ for each configuration parameter."),Fd.forEach(n),ds=i(go),mt=a(go,"LI",{});var Od=s(mt);cs=t(Od,"To update the decoder configuration, use the prefix _decoder__ for each configuration parameter."),Od.forEach(n),is=i(go),ut=a(go,"LI",{});var Nd=s(ut);ls=t(Nd,"To update the parent model configuration, do not use a prefix for each configuration parameter."),Nd.forEach(n),go.forEach(n),hs=i(p),Fe=a(p,"P",{});var Lt=s(Fe);ps=t(Lt,"Behaves differently depending on whether a "),gt=a(Lt,"CODE",{});var Wd=s(gt);fs=t(Wd,"config"),Wd.forEach(n),ms=t(Lt," is provided or automatically loaded."),Lt.forEach(n),us=i(p),_t=a(p,"P",{});var Vd=s(_t);gs=t(Vd,"Example:"),Vd.forEach(n),_s=i(p),$(Oe.$$.fragment,p),p.forEach(n),u.forEach(n),this.h()},h(){l(g,"name","hf:doc:metadata"),l(g,"content",JSON.stringify(Zd)),l(b,"id","speech-encoder-decoder-models"),l(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(b,"href","#speech-encoder-decoder-models"),l(v,"class","relative group"),l(Ve,"href","/docs/transformers/v4.14.1/en/model_doc/speechencoderdecoder#transformers.SpeechEncoderDecoderModel"),l(Be,"href","/docs/transformers/v4.14.1/en/wav2vec2"),l(Re,"href","/docs/transformers/v4.14.1/en/hubert"),l(Ee,"href","https://arxiv.org/abs/2104.06678"),l(Ee,"rel","nofollow"),l(He,"href","/docs/transformers/v4.14.1/en/model_doc/speechencoderdecoder#transformers.SpeechEncoderDecoderModel"),l(Je,"href","/docs/transformers/v4.14.1/en/speech_to_text_2"),l(ce,"id","transformers.SpeechEncoderDecoderConfig"),l(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ce,"href","#transformers.SpeechEncoderDecoderConfig"),l(G,"class","relative group"),l(Ue,"href","/docs/transformers/v4.14.1/en/model_doc/speechencoderdecoder#transformers.SpeechEncoderDecoderConfig"),l(Ge,"href","/docs/transformers/v4.14.1/en/model_doc/speechencoderdecoder#transformers.SpeechEncoderDecoderModel"),l(Ye,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),l(Ze,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),l(Ke,"href","/docs/transformers/v4.14.1/en/model_doc/speechencoderdecoder#transformers.SpeechEncoderDecoderConfig"),l(le,"class","docstring"),l(he,"class","docstring"),l(_,"class","docstring"),l(pe,"id","transformers.SpeechEncoderDecoderModel"),l(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(pe,"href","#transformers.SpeechEncoderDecoderModel"),l(K,"class","relative group"),l(xe,"href","https://arxiv.org/abs/1907.12461"),l(xe,"rel","nofollow"),l(Pe,"href","https://arxiv.org/abs/2104.06678"),l(Pe,"rel","nofollow"),l(Qe,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),l(qe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(qe,"rel","nofollow"),l(Xe,"href","/docs/transformers/v4.14.1/en/model_doc/speechencoderdecoder#transformers.SpeechEncoderDecoderModel"),l(eo,"href","/docs/transformers/v4.14.1/en/model_doc/speechencoderdecoder#transformers.SpeechEncoderDecoderModel"),l(k,"class","docstring"),l(oo,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),l(to,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),l(h,"class","docstring"),l(f,"class","docstring")},m(d,m){e(document.head,g),E(d,N,m),E(d,v,m),e(v,b),e(b,U),x(D,U,null),e(v,W),e(v,de),e(de,It),E(d,Et,m),E(d,T,m),e(T,Ft),e(T,Ve),e(Ve,Ot),e(T,Nt),e(T,Eo),e(Eo,Wt),e(T,Vt),e(T,Be),e(Be,Bt),e(T,Rt),e(T,Re),e(Re,Ht),e(T,Jt),E(d,bt,m),E(d,V,m),e(V,Ut),e(V,bo),e(bo,Gt),e(V,Yt),e(V,Ee),e(Ee,Zt),e(V,Kt),E(d,wt,m),E(d,B,m),e(B,Qt),e(B,He),e(He,Xt),e(B,en),e(B,Je),e(Je,on),e(B,tn),E(d,yt,m),E(d,G,m),e(G,ce),e(ce,wo),x(be,wo,null),e(G,nn),e(G,yo),e(yo,rn),E(d,Tt,m),E(d,_,m),x(we,_,null),e(_,an),e(_,ie),e(ie,Ue),e(Ue,sn),e(ie,dn),e(ie,Ge),e(Ge,cn),e(ie,ln),e(_,hn),e(_,Y),e(Y,pn),e(Y,Ye),e(Ye,fn),e(Y,mn),e(Y,Ze),e(Ze,un),e(Y,gn),e(_,_n),e(_,To),e(To,vn),e(_,En),x(ye,_,null),e(_,bn),e(_,le),x(Te,le,null),e(le,wn),e(le,ke),e(ke,yn),e(ke,Ke),e(Ke,Tn),e(ke,kn),e(_,Sn),e(_,he),x(Se,he,null),e(he,Dn),e(he,Z),e(Z,Mn),e(Z,ko),e(ko,$n),e(Z,xn),e(Z,So),e(So,Cn),e(Z,Pn),E(d,kt,m),E(d,K,m),e(K,pe),e(pe,Do),x(De,Do,null),e(K,jn),e(K,Mo),e(Mo,zn),E(d,St,m),E(d,f,m),x(Me,f,null),e(f,qn),e(f,Q),e(Q,An),e(Q,$o),e($o,Ln),e(Q,In),e(Q,xo),e(xo,Fn),e(Q,On),e(f,Nn),e(f,$e),e($e,Wn),e($e,xe),e(xe,Vn),e($e,Bn),e(f,Rn),e(f,Ce),e(Ce,Hn),e(Ce,Pe),e(Pe,Jn),e(Ce,Un),e(f,Gn),e(f,Co),e(Co,Yn),e(f,Zn),e(f,je),e(je,Kn),e(je,Qe),e(Qe,Qn),e(je,Xn),e(f,er),e(f,ze),e(ze,or),e(ze,qe),e(qe,tr),e(ze,nr),e(f,rr),e(f,R),e(R,Xe),e(Xe,ar),e(R,sr),e(R,Po),e(Po,dr),e(R,cr),e(R,jo),e(jo,ir),e(R,lr),e(f,hr),e(f,k),x(Ae,k,null),e(k,pr),e(k,X),e(X,fr),e(X,eo),e(eo,mr),e(X,ur),e(X,zo),e(zo,gr),e(X,_r),e(k,vr),x(fe,k,null),e(k,Er),e(k,qo),e(qo,br),e(k,wr),x(Le,k,null),e(f,yr),e(f,h),x(Ie,h,null),e(h,Tr),e(h,Ao),e(Ao,kr),e(h,Sr),e(h,ee),e(ee,Dr),e(ee,Lo),e(Lo,Mr),e(ee,$r),e(ee,Io),e(Io,xr),e(ee,Cr),e(h,Pr),e(h,oe),e(oe,jr),e(oe,Fo),e(Fo,zr),e(oe,qr),e(oe,Oo),e(Oo,Ar),e(oe,Lr),e(h,Ir),e(h,te),e(te,A),e(A,Fr),e(A,No),e(No,Or),e(A,Nr),e(A,Wo),e(Wo,Wr),e(A,Vr),e(A,Vo),e(Vo,Br),e(A,Rr),e(te,Hr),e(te,L),e(L,Jr),e(L,Bo),e(Bo,Ur),e(L,Gr),e(L,oo),e(oo,Yr),e(L,Zr),e(L,Ro),e(Ro,Kr),e(L,Qr),e(te,Xr),e(te,w),e(w,ea),e(w,Ho),e(Ho,oa),e(w,ta),e(w,Jo),e(Jo,na),e(w,ra),e(w,Uo),e(Uo,aa),e(w,sa),e(w,Go),e(Go,da),e(w,ca),e(w,Yo),e(Yo,ia),e(w,la),e(h,ha),e(h,I),e(I,pa),e(I,Zo),e(Zo,fa),e(I,ma),e(I,Ko),e(Ko,ua),e(I,ga),e(I,Qo),e(Qo,_a),e(I,va),e(h,Ea),e(h,ne),e(ne,F),e(F,ba),e(F,Xo),e(Xo,wa),e(F,ya),e(F,et),e(et,Ta),e(F,ka),e(F,ot),e(ot,Sa),e(F,Da),e(ne,Ma),e(ne,O),e(O,$a),e(O,tt),e(tt,xa),e(O,Ca),e(O,to),e(to,Pa),e(O,ja),e(O,nt),e(nt,za),e(O,qa),e(ne,Aa),e(ne,y),e(y,La),e(y,rt),e(rt,Ia),e(y,Fa),e(y,at),e(at,Oa),e(y,Na),e(y,st),e(st,Wa),e(y,Va),e(y,dt),e(dt,Ba),e(y,Ra),e(y,ct),e(ct,Ha),e(y,Ja),e(h,Ua),e(h,re),e(re,Ga),e(re,it),e(it,Ya),e(re,Za),e(re,lt),e(lt,Ka),e(re,Qa),e(h,Xa),e(h,ae),e(ae,es),e(ae,ht),e(ht,os),e(ae,ts),e(ae,pt),e(pt,ns),e(ae,rs),e(h,as),e(h,se),e(se,ft),e(ft,ss),e(se,ds),e(se,mt),e(mt,cs),e(se,is),e(se,ut),e(ut,ls),e(h,hs),e(h,Fe),e(Fe,ps),e(Fe,gt),e(gt,fs),e(Fe,ms),e(h,us),e(h,_t),e(_t,gs),e(h,_s),x(Oe,h,null),Dt=!0},p(d,[m]){const Ne={};m&2&&(Ne.$$scope={dirty:m,ctx:d}),fe.$set(Ne)},i(d){Dt||(C(D.$$.fragment,d),C(be.$$.fragment,d),C(we.$$.fragment,d),C(ye.$$.fragment,d),C(Te.$$.fragment,d),C(Se.$$.fragment,d),C(De.$$.fragment,d),C(Me.$$.fragment,d),C(Ae.$$.fragment,d),C(fe.$$.fragment,d),C(Le.$$.fragment,d),C(Ie.$$.fragment,d),C(Oe.$$.fragment,d),Dt=!0)},o(d){P(D.$$.fragment,d),P(be.$$.fragment,d),P(we.$$.fragment,d),P(ye.$$.fragment,d),P(Te.$$.fragment,d),P(Se.$$.fragment,d),P(De.$$.fragment,d),P(Me.$$.fragment,d),P(Ae.$$.fragment,d),P(fe.$$.fragment,d),P(Le.$$.fragment,d),P(Ie.$$.fragment,d),P(Oe.$$.fragment,d),Dt=!1},d(d){n(g),d&&n(N),d&&n(v),j(D),d&&n(Et),d&&n(T),d&&n(bt),d&&n(V),d&&n(wt),d&&n(B),d&&n(yt),d&&n(G),j(be),d&&n(Tt),d&&n(_),j(we),j(ye),j(Te),j(Se),d&&n(kt),d&&n(K),j(De),d&&n(St),d&&n(f),j(Me),j(Ae),j(fe),j(Le),j(Ie),j(Oe)}}}const Zd={local:"speech-encoder-decoder-models",sections:[{local:"transformers.SpeechEncoderDecoderConfig",title:"SpeechEncoderDecoderConfig"},{local:"transformers.SpeechEncoderDecoderModel",title:"SpeechEncoderDecoderModel"}],title:"Speech Encoder Decoder Models"};function Kd(vo,g,N){let{fw:v}=g;return vo.$$set=b=>{"fw"in b&&N(0,v=b.fw)},[v]}class rc extends Bd{constructor(g){super();Rd(this,g,Kd,Yd,Hd,{fw:0})}}export{rc as default,Zd as metadata};
