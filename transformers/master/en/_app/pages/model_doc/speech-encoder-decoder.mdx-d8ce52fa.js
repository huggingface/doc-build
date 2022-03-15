import{S as Ts,i as xs,s as Ms,e as a,k as i,w as b,t as n,M as Ds,c as s,d as o,m as l,a as d,x as y,h as t,b as c,F as e,g,y as w,q as E,o as k,B as S}from"../../chunks/vendor-4833417e.js";import{T as Ss}from"../../chunks/Tip-fffd6df1.js";import{D as ne}from"../../chunks/Docstring-4f315ed9.js";import{C as en}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as xn}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function $s(he){let p,$,u,T,C;return{c(){p=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),T=n("Module"),C=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){p=s(x,"P",{});var D=d(p);$=t(D,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(D,"CODE",{});var L=d(u);T=t(L,"Module"),L.forEach(o),C=t(D,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),D.forEach(o)},m(x,D){g(x,p,D),e(p,$),e(p,u),e(u,T),e(p,C)},d(x){x&&o(p)}}}function js(he){let p,$,u,T,C;return{c(){p=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),T=n("Module"),C=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){p=s(x,"P",{});var D=d(p);$=t(D,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(D,"CODE",{});var L=d(u);T=t(L,"Module"),L.forEach(o),C=t(D,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),D.forEach(o)},m(x,D){g(x,p,D),e(p,$),e(p,u),e(u,T),e(p,C)},d(x){x&&o(p)}}}function qs(he){let p,$,u,T,C,x,D,L,Mn,on,j,Dn,Ye,$n,jn,wo,qn,Pn,Ze,zn,Fn,Ke,Cn,An,nn,N,Ln,Eo,Nn,In,me,Wn,Vn,tn,I,On,Qe,Bn,Rn,Xe,Un,Hn,rn,H,te,ko,fe,Gn,So,Jn,an,M,ue,Yn,re,eo,Zn,Kn,oo,Qn,Xn,et,G,ot,no,nt,tt,to,rt,at,st,To,dt,ct,ge,it,ae,_e,lt,ve,pt,ro,ht,mt,ft,se,be,ut,J,gt,xo,_t,vt,Mo,bt,yt,sn,Y,de,Do,ye,wt,$o,Et,dn,m,we,kt,Z,St,jo,Tt,xt,qo,Mt,Dt,$t,Ee,jt,ke,qt,Pt,zt,Se,Ft,Te,Ct,At,Lt,Po,Nt,It,xe,Wt,ao,Vt,Ot,Bt,Me,Rt,De,Ut,Ht,Gt,W,so,Jt,Yt,zo,Zt,Kt,Fo,Qt,Xt,er,q,$e,or,K,nr,co,tr,rr,Co,ar,sr,dr,ce,cr,Ao,ir,lr,je,pr,P,qe,hr,Lo,mr,fr,Q,ur,No,gr,_r,Io,vr,br,yr,Wo,wr,Er,Pe,cn,X,ie,Vo,ze,kr,Oo,Sr,ln,f,Fe,Tr,ee,xr,Bo,Mr,Dr,Ro,$r,jr,qr,Ce,Pr,Ae,zr,Fr,Cr,Le,Ar,Ne,Lr,Nr,Ir,Uo,Wr,Vr,Ie,Or,io,Br,Rr,Ur,We,Hr,Ve,Gr,Jr,Yr,V,lo,Zr,Kr,Ho,Qr,Xr,Go,ea,oa,na,z,Oe,ta,oe,ra,po,aa,sa,Jo,da,ca,ia,le,la,Yo,pa,ha,Be,ma,A,Re,fa,Zo,ua,ga,Ko,_a,va,Ue,pn;return x=new xn({}),fe=new xn({}),ue=new ne({props:{name:"class transformers.SpeechEncoderDecoderConfig",anchor:"transformers.SpeechEncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L27",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),_e=new ne({props:{name:"from_encoder_decoder_configs",anchor:"transformers.SpeechEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L92",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a></p>
`}}),be=new ne({props:{name:"to_dict",anchor:"transformers.SpeechEncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L109",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),ye=new xn({}),we=new ne({props:{name:"class transformers.SpeechEncoderDecoderModel",anchor:"transformers.SpeechEncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L174",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$e=new ne({props:{name:"forward",anchor:"transformers.SpeechEncoderDecoderModel.forward",parameters:[{name:"inputs",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"input_values",val:" = None"},{name:"input_features",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L442",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.forward.inputs",description:`<strong>inputs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),qe=new ne({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L286",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2bert&quot;</span>)`}}),ze=new xn({}),Fe=new ne({props:{name:"class transformers.FlaxSpeechEncoderDecoderModel",anchor:"transformers.FlaxSpeechEncoderDecoderModel",parameters:[{name:"config",val:": SpeechEncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L321",parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Oe=new ne({props:{name:"__call__",anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__",parameters:[{name:"inputs",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L632",parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.inputs",description:`<strong>inputs</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform or speech features. Values can be obtained by loading a <em>.flac</em>
or <em>.wav</em> audio file into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile
library (<em>pip install soundfile</em>). To prepare the array into <em>inputs</em>, either the <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> or
<a href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextProcessor">Speech2TextProcessor</a> should be used for padding and conversion into a tensor of type
<em>torch.FloatTensor</em>.`,name:"inputs"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
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
<span class="hljs-comment"># Assert something? More interesting input? dtype correct?</span>`}}),Re=new ne({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L753",parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxSpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2-2-bart-large&quot;</span>)`}}),{c(){p=a("meta"),$=i(),u=a("h1"),T=a("a"),C=a("span"),b(x.$$.fragment),D=i(),L=a("span"),Mn=n("Speech Encoder Decoder Models"),on=i(),j=a("p"),Dn=n("The "),Ye=a("a"),$n=n("SpeechEncoderDecoderModel"),jn=n(` can be used to initialize a speech-sequence-to-text-sequence model
with any pretrained speech autoencoding model as the encoder (`),wo=a("em"),qn=n("e.g."),Pn=i(),Ze=a("a"),zn=n("Wav2Vec2"),Fn=n(", "),Ke=a("a"),Cn=n("Hubert"),An=n(") and any pretrained autoregressive model as the decoder."),nn=i(),N=a("p"),Ln=n(`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),Eo=a("em"),Nn=n("e.g."),In=n(" been shown in "),me=a("a"),Wn=n(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Vn=n(` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),tn=i(),I=a("p"),On=n("An example of how to use a "),Qe=a("a"),Bn=n("SpeechEncoderDecoderModel"),Rn=n(` for inference can be seen in
`),Xe=a("a"),Un=n("Speech2Text2"),Hn=n("."),rn=i(),H=a("h2"),te=a("a"),ko=a("span"),b(fe.$$.fragment),Gn=i(),So=a("span"),Jn=n("SpeechEncoderDecoderConfig"),an=i(),M=a("div"),b(ue.$$.fragment),Yn=i(),re=a("p"),eo=a("a"),Zn=n("SpeechEncoderDecoderConfig"),Kn=n(` is the configuration class to store the configuration of a
`),oo=a("a"),Qn=n("SpeechEncoderDecoderModel"),Xn=n(`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),et=i(),G=a("p"),ot=n("Configuration objects inherit from "),no=a("a"),nt=n("PretrainedConfig"),tt=n(` and can be used to control the model outputs. Read the
documentation from `),to=a("a"),rt=n("PretrainedConfig"),at=n(" for more information."),st=i(),To=a("p"),dt=n("Examples:"),ct=i(),b(ge.$$.fragment),it=i(),ae=a("div"),b(_e.$$.fragment),lt=i(),ve=a("p"),pt=n("Instantiate a "),ro=a("a"),ht=n("SpeechEncoderDecoderConfig"),mt=n(` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),ft=i(),se=a("div"),b(be.$$.fragment),ut=i(),J=a("p"),gt=n("Serializes this instance to a Python dictionary. Override the default "),xo=a("em"),_t=n("to_dict()"),vt=n(" from "),Mo=a("em"),bt=n("PretrainedConfig"),yt=n("."),sn=i(),Y=a("h2"),de=a("a"),Do=a("span"),b(ye.$$.fragment),wt=i(),$o=a("span"),Et=n("SpeechEncoderDecoderModel"),dn=i(),m=a("div"),b(we.$$.fragment),kt=i(),Z=a("p"),St=n(`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),jo=a("code"),Tt=n("from_pretrained()"),xt=n(`function and the decoder is loaded via
`),qo=a("code"),Mt=n("from_pretrained()"),Dt=n(`function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),$t=i(),Ee=a("p"),jt=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),ke=a("a"),qt=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Pt=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),zt=i(),Se=a("p"),Ft=n("Additionally, in "),Te=a("a"),Ct=n(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),At=n(` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Lt=i(),Po=a("p"),Nt=n(`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),It=i(),xe=a("p"),Wt=n("This model inherits from "),ao=a("a"),Vt=n("PreTrainedModel"),Ot=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bt=i(),Me=a("p"),Rt=n("This model is also a PyTorch "),De=a("a"),Ut=n("torch.nn.Module"),Ht=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gt=i(),W=a("p"),so=a("a"),Jt=n("SpeechEncoderDecoderModel"),Yt=n(` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),zo=a("em"),Zt=n("~transformers.AutoModel.from_pretrained"),Kt=n(` class method for the encoder and
:meth`),Fo=a("em"),Qt=n("~transformers.AutoModelForCausalLM.from_pretrained"),Xt=n(" class method for the decoder."),er=i(),q=a("div"),b($e.$$.fragment),or=i(),K=a("p"),nr=n("The "),co=a("a"),tr=n("SpeechEncoderDecoderModel"),rr=n(" forward method, overrides the "),Co=a("code"),ar=n("__call__"),sr=n(" special method."),dr=i(),b(ce.$$.fragment),cr=i(),Ao=a("p"),ir=n("Examples:"),lr=i(),b(je.$$.fragment),pr=i(),P=a("div"),b(qe.$$.fragment),hr=i(),Lo=a("p"),mr=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),fr=i(),Q=a("p"),ur=n("The model is set in evaluation mode by default using "),No=a("code"),gr=n("model.eval()"),_r=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Io=a("code"),vr=n("model.train()"),br=n("."),yr=i(),Wo=a("p"),wr=n("Example:"),Er=i(),b(Pe.$$.fragment),cn=i(),X=a("h2"),ie=a("a"),Vo=a("span"),b(ze.$$.fragment),kr=i(),Oo=a("span"),Sr=n("FlaxSpeechEncoderDecoderModel"),ln=i(),f=a("div"),b(Fe.$$.fragment),Tr=i(),ee=a("p"),xr=n(`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Bo=a("code"),Mr=n("from_pretrained()"),Dr=n(`function and the decoder is loaded via
`),Ro=a("code"),$r=n("from_pretrained()"),jr=n(`function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),qr=i(),Ce=a("p"),Pr=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ae=a("a"),zr=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Fr=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Cr=i(),Le=a("p"),Ar=n("Additionally, in "),Ne=a("a"),Lr=n(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Nr=n(` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Ir=i(),Uo=a("p"),Wr=n(`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Vr=i(),Ie=a("p"),Or=n("This model inherits from "),io=a("a"),Br=n("FlaxPreTrainedModel"),Rr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ur=i(),We=a("p"),Hr=n(`This model is also a Flax Linen
`),Ve=a("a"),Gr=n("flax.nn.Module"),Jr=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Yr=i(),V=a("p"),lo=a("a"),Zr=n("FlaxSpeechEncoderDecoderModel"),Kr=n(` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one
as decoder module when created with the :meth`),Ho=a("em"),Qr=n("~transformers.FlaxAutoModel.from_pretrained"),Xr=n(` class method for the
encoder and :meth`),Go=a("em"),ea=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),oa=n(" class method for the decoder."),na=i(),z=a("div"),b(Oe.$$.fragment),ta=i(),oe=a("p"),ra=n("The "),po=a("a"),aa=n("FlaxSpeechEncoderDecoderModel"),sa=n(" forward method, overrides the "),Jo=a("code"),da=n("__call__"),ca=n(" special method."),ia=i(),b(le.$$.fragment),la=i(),Yo=a("p"),pa=n("Examples:"),ha=i(),b(Be.$$.fragment),ma=i(),A=a("div"),b(Re.$$.fragment),fa=i(),Zo=a("p"),ua=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ga=i(),Ko=a("p"),_a=n("Example:"),va=i(),b(Ue.$$.fragment),this.h()},l(r){const h=Ds('[data-svelte="svelte-1phssyn"]',document.head);p=s(h,"META",{name:!0,content:!0}),h.forEach(o),$=l(r),u=s(r,"H1",{class:!0});var He=d(u);T=s(He,"A",{id:!0,class:!0,href:!0});var Qo=d(T);C=s(Qo,"SPAN",{});var ba=d(C);y(x.$$.fragment,ba),ba.forEach(o),Qo.forEach(o),D=l(He),L=s(He,"SPAN",{});var ya=d(L);Mn=t(ya,"Speech Encoder Decoder Models"),ya.forEach(o),He.forEach(o),on=l(r),j=s(r,"P",{});var O=d(j);Dn=t(O,"The "),Ye=s(O,"A",{href:!0});var wa=d(Ye);$n=t(wa,"SpeechEncoderDecoderModel"),wa.forEach(o),jn=t(O,` can be used to initialize a speech-sequence-to-text-sequence model
with any pretrained speech autoencoding model as the encoder (`),wo=s(O,"EM",{});var Ea=d(wo);qn=t(Ea,"e.g."),Ea.forEach(o),Pn=l(O),Ze=s(O,"A",{href:!0});var ka=d(Ze);zn=t(ka,"Wav2Vec2"),ka.forEach(o),Fn=t(O,", "),Ke=s(O,"A",{href:!0});var Sa=d(Ke);Cn=t(Sa,"Hubert"),Sa.forEach(o),An=t(O,") and any pretrained autoregressive model as the decoder."),O.forEach(o),nn=l(r),N=s(r,"P",{});var ho=d(N);Ln=t(ho,`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),Eo=s(ho,"EM",{});var Ta=d(Eo);Nn=t(Ta,"e.g."),Ta.forEach(o),In=t(ho," been shown in "),me=s(ho,"A",{href:!0,rel:!0});var xa=d(me);Wn=t(xa,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),xa.forEach(o),Vn=t(ho,` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),ho.forEach(o),tn=l(r),I=s(r,"P",{});var mo=d(I);On=t(mo,"An example of how to use a "),Qe=s(mo,"A",{href:!0});var Ma=d(Qe);Bn=t(Ma,"SpeechEncoderDecoderModel"),Ma.forEach(o),Rn=t(mo,` for inference can be seen in
`),Xe=s(mo,"A",{href:!0});var Da=d(Xe);Un=t(Da,"Speech2Text2"),Da.forEach(o),Hn=t(mo,"."),mo.forEach(o),rn=l(r),H=s(r,"H2",{class:!0});var hn=d(H);te=s(hn,"A",{id:!0,class:!0,href:!0});var $a=d(te);ko=s($a,"SPAN",{});var ja=d(ko);y(fe.$$.fragment,ja),ja.forEach(o),$a.forEach(o),Gn=l(hn),So=s(hn,"SPAN",{});var qa=d(So);Jn=t(qa,"SpeechEncoderDecoderConfig"),qa.forEach(o),hn.forEach(o),an=l(r),M=s(r,"DIV",{class:!0});var F=d(M);y(ue.$$.fragment,F),Yn=l(F),re=s(F,"P",{});var Xo=d(re);eo=s(Xo,"A",{href:!0});var Pa=d(eo);Zn=t(Pa,"SpeechEncoderDecoderConfig"),Pa.forEach(o),Kn=t(Xo,` is the configuration class to store the configuration of a
`),oo=s(Xo,"A",{href:!0});var za=d(oo);Qn=t(za,"SpeechEncoderDecoderModel"),za.forEach(o),Xn=t(Xo,`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),Xo.forEach(o),et=l(F),G=s(F,"P",{});var fo=d(G);ot=t(fo,"Configuration objects inherit from "),no=s(fo,"A",{href:!0});var Fa=d(no);nt=t(Fa,"PretrainedConfig"),Fa.forEach(o),tt=t(fo,` and can be used to control the model outputs. Read the
documentation from `),to=s(fo,"A",{href:!0});var Ca=d(to);rt=t(Ca,"PretrainedConfig"),Ca.forEach(o),at=t(fo," for more information."),fo.forEach(o),st=l(F),To=s(F,"P",{});var Aa=d(To);dt=t(Aa,"Examples:"),Aa.forEach(o),ct=l(F),y(ge.$$.fragment,F),it=l(F),ae=s(F,"DIV",{class:!0});var mn=d(ae);y(_e.$$.fragment,mn),lt=l(mn),ve=s(mn,"P",{});var fn=d(ve);pt=t(fn,"Instantiate a "),ro=s(fn,"A",{href:!0});var La=d(ro);ht=t(La,"SpeechEncoderDecoderConfig"),La.forEach(o),mt=t(fn,` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),fn.forEach(o),mn.forEach(o),ft=l(F),se=s(F,"DIV",{class:!0});var un=d(se);y(be.$$.fragment,un),ut=l(un),J=s(un,"P",{});var uo=d(J);gt=t(uo,"Serializes this instance to a Python dictionary. Override the default "),xo=s(uo,"EM",{});var Na=d(xo);_t=t(Na,"to_dict()"),Na.forEach(o),vt=t(uo," from "),Mo=s(uo,"EM",{});var Ia=d(Mo);bt=t(Ia,"PretrainedConfig"),Ia.forEach(o),yt=t(uo,"."),uo.forEach(o),un.forEach(o),F.forEach(o),sn=l(r),Y=s(r,"H2",{class:!0});var gn=d(Y);de=s(gn,"A",{id:!0,class:!0,href:!0});var Wa=d(de);Do=s(Wa,"SPAN",{});var Va=d(Do);y(ye.$$.fragment,Va),Va.forEach(o),Wa.forEach(o),wt=l(gn),$o=s(gn,"SPAN",{});var Oa=d($o);Et=t(Oa,"SpeechEncoderDecoderModel"),Oa.forEach(o),gn.forEach(o),dn=l(r),m=s(r,"DIV",{class:!0});var _=d(m);y(we.$$.fragment,_),kt=l(_),Z=s(_,"P",{});var go=d(Z);St=t(go,`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),jo=s(go,"CODE",{});var Ba=d(jo);Tt=t(Ba,"from_pretrained()"),Ba.forEach(o),xt=t(go,`function and the decoder is loaded via
`),qo=s(go,"CODE",{});var Ra=d(qo);Mt=t(Ra,"from_pretrained()"),Ra.forEach(o),Dt=t(go,`function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),go.forEach(o),$t=l(_),Ee=s(_,"P",{});var _n=d(Ee);jt=t(_n,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),ke=s(_n,"A",{href:!0,rel:!0});var Ua=d(ke);qt=t(Ua,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ua.forEach(o),Pt=t(_n,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),_n.forEach(o),zt=l(_),Se=s(_,"P",{});var vn=d(Se);Ft=t(vn,"Additionally, in "),Te=s(vn,"A",{href:!0,rel:!0});var Ha=d(Te);Ct=t(Ha,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Ha.forEach(o),At=t(vn,` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),vn.forEach(o),Lt=l(_),Po=s(_,"P",{});var Ga=d(Po);Nt=t(Ga,`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Ga.forEach(o),It=l(_),xe=s(_,"P",{});var bn=d(xe);Wt=t(bn,"This model inherits from "),ao=s(bn,"A",{href:!0});var Ja=d(ao);Vt=t(Ja,"PreTrainedModel"),Ja.forEach(o),Ot=t(bn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bn.forEach(o),Bt=l(_),Me=s(_,"P",{});var yn=d(Me);Rt=t(yn,"This model is also a PyTorch "),De=s(yn,"A",{href:!0,rel:!0});var Ya=d(De);Ut=t(Ya,"torch.nn.Module"),Ya.forEach(o),Ht=t(yn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yn.forEach(o),Gt=l(_),W=s(_,"P",{});var Ge=d(W);so=s(Ge,"A",{href:!0});var Za=d(so);Jt=t(Za,"SpeechEncoderDecoderModel"),Za.forEach(o),Yt=t(Ge,` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),zo=s(Ge,"EM",{});var Ka=d(zo);Zt=t(Ka,"~transformers.AutoModel.from_pretrained"),Ka.forEach(o),Kt=t(Ge,` class method for the encoder and
:meth`),Fo=s(Ge,"EM",{});var Qa=d(Fo);Qt=t(Qa,"~transformers.AutoModelForCausalLM.from_pretrained"),Qa.forEach(o),Xt=t(Ge," class method for the decoder."),Ge.forEach(o),er=l(_),q=s(_,"DIV",{class:!0});var B=d(q);y($e.$$.fragment,B),or=l(B),K=s(B,"P",{});var _o=d(K);nr=t(_o,"The "),co=s(_o,"A",{href:!0});var Xa=d(co);tr=t(Xa,"SpeechEncoderDecoderModel"),Xa.forEach(o),rr=t(_o," forward method, overrides the "),Co=s(_o,"CODE",{});var es=d(Co);ar=t(es,"__call__"),es.forEach(o),sr=t(_o," special method."),_o.forEach(o),dr=l(B),y(ce.$$.fragment,B),cr=l(B),Ao=s(B,"P",{});var os=d(Ao);ir=t(os,"Examples:"),os.forEach(o),lr=l(B),y(je.$$.fragment,B),B.forEach(o),pr=l(_),P=s(_,"DIV",{class:!0});var R=d(P);y(qe.$$.fragment,R),hr=l(R),Lo=s(R,"P",{});var ns=d(Lo);mr=t(ns,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ns.forEach(o),fr=l(R),Q=s(R,"P",{});var vo=d(Q);ur=t(vo,"The model is set in evaluation mode by default using "),No=s(vo,"CODE",{});var ts=d(No);gr=t(ts,"model.eval()"),ts.forEach(o),_r=t(vo,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Io=s(vo,"CODE",{});var rs=d(Io);vr=t(rs,"model.train()"),rs.forEach(o),br=t(vo,"."),vo.forEach(o),yr=l(R),Wo=s(R,"P",{});var as=d(Wo);wr=t(as,"Example:"),as.forEach(o),Er=l(R),y(Pe.$$.fragment,R),R.forEach(o),_.forEach(o),cn=l(r),X=s(r,"H2",{class:!0});var wn=d(X);ie=s(wn,"A",{id:!0,class:!0,href:!0});var ss=d(ie);Vo=s(ss,"SPAN",{});var ds=d(Vo);y(ze.$$.fragment,ds),ds.forEach(o),ss.forEach(o),kr=l(wn),Oo=s(wn,"SPAN",{});var cs=d(Oo);Sr=t(cs,"FlaxSpeechEncoderDecoderModel"),cs.forEach(o),wn.forEach(o),ln=l(r),f=s(r,"DIV",{class:!0});var v=d(f);y(Fe.$$.fragment,v),Tr=l(v),ee=s(v,"P",{});var bo=d(ee);xr=t(bo,`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Bo=s(bo,"CODE",{});var is=d(Bo);Mr=t(is,"from_pretrained()"),is.forEach(o),Dr=t(bo,`function and the decoder is loaded via
`),Ro=s(bo,"CODE",{});var ls=d(Ro);$r=t(ls,"from_pretrained()"),ls.forEach(o),jr=t(bo,`function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),bo.forEach(o),qr=l(v),Ce=s(v,"P",{});var En=d(Ce);Pr=t(En,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ae=s(En,"A",{href:!0,rel:!0});var ps=d(Ae);zr=t(ps,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),ps.forEach(o),Fr=t(En,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),En.forEach(o),Cr=l(v),Le=s(v,"P",{});var kn=d(Le);Ar=t(kn,"Additionally, in "),Ne=s(kn,"A",{href:!0,rel:!0});var hs=d(Ne);Lr=t(hs,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),hs.forEach(o),Nr=t(kn,` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),kn.forEach(o),Ir=l(v),Uo=s(v,"P",{});var ms=d(Uo);Wr=t(ms,`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),ms.forEach(o),Vr=l(v),Ie=s(v,"P",{});var Sn=d(Ie);Or=t(Sn,"This model inherits from "),io=s(Sn,"A",{href:!0});var fs=d(io);Br=t(fs,"FlaxPreTrainedModel"),fs.forEach(o),Rr=t(Sn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sn.forEach(o),Ur=l(v),We=s(v,"P",{});var Tn=d(We);Hr=t(Tn,`This model is also a Flax Linen
`),Ve=s(Tn,"A",{href:!0,rel:!0});var us=d(Ve);Gr=t(us,"flax.nn.Module"),us.forEach(o),Jr=t(Tn,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Tn.forEach(o),Yr=l(v),V=s(v,"P",{});var Je=d(V);lo=s(Je,"A",{href:!0});var gs=d(lo);Zr=t(gs,"FlaxSpeechEncoderDecoderModel"),gs.forEach(o),Kr=t(Je,` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one
as decoder module when created with the :meth`),Ho=s(Je,"EM",{});var _s=d(Ho);Qr=t(_s,"~transformers.FlaxAutoModel.from_pretrained"),_s.forEach(o),Xr=t(Je,` class method for the
encoder and :meth`),Go=s(Je,"EM",{});var vs=d(Go);ea=t(vs,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),vs.forEach(o),oa=t(Je," class method for the decoder."),Je.forEach(o),na=l(v),z=s(v,"DIV",{class:!0});var U=d(z);y(Oe.$$.fragment,U),ta=l(U),oe=s(U,"P",{});var yo=d(oe);ra=t(yo,"The "),po=s(yo,"A",{href:!0});var bs=d(po);aa=t(bs,"FlaxSpeechEncoderDecoderModel"),bs.forEach(o),sa=t(yo," forward method, overrides the "),Jo=s(yo,"CODE",{});var ys=d(Jo);da=t(ys,"__call__"),ys.forEach(o),ca=t(yo," special method."),yo.forEach(o),ia=l(U),y(le.$$.fragment,U),la=l(U),Yo=s(U,"P",{});var ws=d(Yo);pa=t(ws,"Examples:"),ws.forEach(o),ha=l(U),y(Be.$$.fragment,U),U.forEach(o),ma=l(v),A=s(v,"DIV",{class:!0});var pe=d(A);y(Re.$$.fragment,pe),fa=l(pe),Zo=s(pe,"P",{});var Es=d(Zo);ua=t(Es,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Es.forEach(o),ga=l(pe),Ko=s(pe,"P",{});var ks=d(Ko);_a=t(ks,"Example:"),ks.forEach(o),va=l(pe),y(Ue.$$.fragment,pe),pe.forEach(o),v.forEach(o),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(Ps)),c(T,"id","speech-encoder-decoder-models"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#speech-encoder-decoder-models"),c(u,"class","relative group"),c(Ye,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(Ze,"href","wav2vec2"),c(Ke,"href","hubert"),c(me,"href","https://arxiv.org/abs/2104.06678"),c(me,"rel","nofollow"),c(Qe,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(Xe,"href","speech_to_text_2"),c(te,"id","transformers.SpeechEncoderDecoderConfig"),c(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(te,"href","#transformers.SpeechEncoderDecoderConfig"),c(H,"class","relative group"),c(eo,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),c(oo,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(no,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(to,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(ro,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),c(ae,"class","docstring"),c(se,"class","docstring"),c(M,"class","docstring"),c(de,"id","transformers.SpeechEncoderDecoderModel"),c(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(de,"href","#transformers.SpeechEncoderDecoderModel"),c(Y,"class","relative group"),c(ke,"href","https://arxiv.org/abs/1907.12461"),c(ke,"rel","nofollow"),c(Te,"href","https://arxiv.org/abs/2104.06678"),c(Te,"rel","nofollow"),c(ao,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(De,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(De,"rel","nofollow"),c(so,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(co,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(q,"class","docstring"),c(P,"class","docstring"),c(m,"class","docstring"),c(ie,"id","transformers.FlaxSpeechEncoderDecoderModel"),c(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ie,"href","#transformers.FlaxSpeechEncoderDecoderModel"),c(X,"class","relative group"),c(Ae,"href","https://arxiv.org/abs/1907.12461"),c(Ae,"rel","nofollow"),c(Ne,"href","https://arxiv.org/abs/2104.06678"),c(Ne,"rel","nofollow"),c(io,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ve,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ve,"rel","nofollow"),c(lo,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.FlaxSpeechEncoderDecoderModel"),c(po,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.FlaxSpeechEncoderDecoderModel"),c(z,"class","docstring"),c(A,"class","docstring"),c(f,"class","docstring")},m(r,h){e(document.head,p),g(r,$,h),g(r,u,h),e(u,T),e(T,C),w(x,C,null),e(u,D),e(u,L),e(L,Mn),g(r,on,h),g(r,j,h),e(j,Dn),e(j,Ye),e(Ye,$n),e(j,jn),e(j,wo),e(wo,qn),e(j,Pn),e(j,Ze),e(Ze,zn),e(j,Fn),e(j,Ke),e(Ke,Cn),e(j,An),g(r,nn,h),g(r,N,h),e(N,Ln),e(N,Eo),e(Eo,Nn),e(N,In),e(N,me),e(me,Wn),e(N,Vn),g(r,tn,h),g(r,I,h),e(I,On),e(I,Qe),e(Qe,Bn),e(I,Rn),e(I,Xe),e(Xe,Un),e(I,Hn),g(r,rn,h),g(r,H,h),e(H,te),e(te,ko),w(fe,ko,null),e(H,Gn),e(H,So),e(So,Jn),g(r,an,h),g(r,M,h),w(ue,M,null),e(M,Yn),e(M,re),e(re,eo),e(eo,Zn),e(re,Kn),e(re,oo),e(oo,Qn),e(re,Xn),e(M,et),e(M,G),e(G,ot),e(G,no),e(no,nt),e(G,tt),e(G,to),e(to,rt),e(G,at),e(M,st),e(M,To),e(To,dt),e(M,ct),w(ge,M,null),e(M,it),e(M,ae),w(_e,ae,null),e(ae,lt),e(ae,ve),e(ve,pt),e(ve,ro),e(ro,ht),e(ve,mt),e(M,ft),e(M,se),w(be,se,null),e(se,ut),e(se,J),e(J,gt),e(J,xo),e(xo,_t),e(J,vt),e(J,Mo),e(Mo,bt),e(J,yt),g(r,sn,h),g(r,Y,h),e(Y,de),e(de,Do),w(ye,Do,null),e(Y,wt),e(Y,$o),e($o,Et),g(r,dn,h),g(r,m,h),w(we,m,null),e(m,kt),e(m,Z),e(Z,St),e(Z,jo),e(jo,Tt),e(Z,xt),e(Z,qo),e(qo,Mt),e(Z,Dt),e(m,$t),e(m,Ee),e(Ee,jt),e(Ee,ke),e(ke,qt),e(Ee,Pt),e(m,zt),e(m,Se),e(Se,Ft),e(Se,Te),e(Te,Ct),e(Se,At),e(m,Lt),e(m,Po),e(Po,Nt),e(m,It),e(m,xe),e(xe,Wt),e(xe,ao),e(ao,Vt),e(xe,Ot),e(m,Bt),e(m,Me),e(Me,Rt),e(Me,De),e(De,Ut),e(Me,Ht),e(m,Gt),e(m,W),e(W,so),e(so,Jt),e(W,Yt),e(W,zo),e(zo,Zt),e(W,Kt),e(W,Fo),e(Fo,Qt),e(W,Xt),e(m,er),e(m,q),w($e,q,null),e(q,or),e(q,K),e(K,nr),e(K,co),e(co,tr),e(K,rr),e(K,Co),e(Co,ar),e(K,sr),e(q,dr),w(ce,q,null),e(q,cr),e(q,Ao),e(Ao,ir),e(q,lr),w(je,q,null),e(m,pr),e(m,P),w(qe,P,null),e(P,hr),e(P,Lo),e(Lo,mr),e(P,fr),e(P,Q),e(Q,ur),e(Q,No),e(No,gr),e(Q,_r),e(Q,Io),e(Io,vr),e(Q,br),e(P,yr),e(P,Wo),e(Wo,wr),e(P,Er),w(Pe,P,null),g(r,cn,h),g(r,X,h),e(X,ie),e(ie,Vo),w(ze,Vo,null),e(X,kr),e(X,Oo),e(Oo,Sr),g(r,ln,h),g(r,f,h),w(Fe,f,null),e(f,Tr),e(f,ee),e(ee,xr),e(ee,Bo),e(Bo,Mr),e(ee,Dr),e(ee,Ro),e(Ro,$r),e(ee,jr),e(f,qr),e(f,Ce),e(Ce,Pr),e(Ce,Ae),e(Ae,zr),e(Ce,Fr),e(f,Cr),e(f,Le),e(Le,Ar),e(Le,Ne),e(Ne,Lr),e(Le,Nr),e(f,Ir),e(f,Uo),e(Uo,Wr),e(f,Vr),e(f,Ie),e(Ie,Or),e(Ie,io),e(io,Br),e(Ie,Rr),e(f,Ur),e(f,We),e(We,Hr),e(We,Ve),e(Ve,Gr),e(We,Jr),e(f,Yr),e(f,V),e(V,lo),e(lo,Zr),e(V,Kr),e(V,Ho),e(Ho,Qr),e(V,Xr),e(V,Go),e(Go,ea),e(V,oa),e(f,na),e(f,z),w(Oe,z,null),e(z,ta),e(z,oe),e(oe,ra),e(oe,po),e(po,aa),e(oe,sa),e(oe,Jo),e(Jo,da),e(oe,ca),e(z,ia),w(le,z,null),e(z,la),e(z,Yo),e(Yo,pa),e(z,ha),w(Be,z,null),e(f,ma),e(f,A),w(Re,A,null),e(A,fa),e(A,Zo),e(Zo,ua),e(A,ga),e(A,Ko),e(Ko,_a),e(A,va),w(Ue,A,null),pn=!0},p(r,[h]){const He={};h&2&&(He.$$scope={dirty:h,ctx:r}),ce.$set(He);const Qo={};h&2&&(Qo.$$scope={dirty:h,ctx:r}),le.$set(Qo)},i(r){pn||(E(x.$$.fragment,r),E(fe.$$.fragment,r),E(ue.$$.fragment,r),E(ge.$$.fragment,r),E(_e.$$.fragment,r),E(be.$$.fragment,r),E(ye.$$.fragment,r),E(we.$$.fragment,r),E($e.$$.fragment,r),E(ce.$$.fragment,r),E(je.$$.fragment,r),E(qe.$$.fragment,r),E(Pe.$$.fragment,r),E(ze.$$.fragment,r),E(Fe.$$.fragment,r),E(Oe.$$.fragment,r),E(le.$$.fragment,r),E(Be.$$.fragment,r),E(Re.$$.fragment,r),E(Ue.$$.fragment,r),pn=!0)},o(r){k(x.$$.fragment,r),k(fe.$$.fragment,r),k(ue.$$.fragment,r),k(ge.$$.fragment,r),k(_e.$$.fragment,r),k(be.$$.fragment,r),k(ye.$$.fragment,r),k(we.$$.fragment,r),k($e.$$.fragment,r),k(ce.$$.fragment,r),k(je.$$.fragment,r),k(qe.$$.fragment,r),k(Pe.$$.fragment,r),k(ze.$$.fragment,r),k(Fe.$$.fragment,r),k(Oe.$$.fragment,r),k(le.$$.fragment,r),k(Be.$$.fragment,r),k(Re.$$.fragment,r),k(Ue.$$.fragment,r),pn=!1},d(r){o(p),r&&o($),r&&o(u),S(x),r&&o(on),r&&o(j),r&&o(nn),r&&o(N),r&&o(tn),r&&o(I),r&&o(rn),r&&o(H),S(fe),r&&o(an),r&&o(M),S(ue),S(ge),S(_e),S(be),r&&o(sn),r&&o(Y),S(ye),r&&o(dn),r&&o(m),S(we),S($e),S(ce),S(je),S(qe),S(Pe),r&&o(cn),r&&o(X),S(ze),r&&o(ln),r&&o(f),S(Fe),S(Oe),S(le),S(Be),S(Re),S(Ue)}}}const Ps={local:"speech-encoder-decoder-models",sections:[{local:"transformers.SpeechEncoderDecoderConfig",title:"SpeechEncoderDecoderConfig"},{local:"transformers.SpeechEncoderDecoderModel",title:"SpeechEncoderDecoderModel"},{local:"transformers.FlaxSpeechEncoderDecoderModel",title:"FlaxSpeechEncoderDecoderModel"}],title:"Speech Encoder Decoder Models"};function zs(he,p,$){let{fw:u}=p;return he.$$set=T=>{"fw"in T&&$(0,u=T.fw)},[u]}class Ws extends Ts{constructor(p){super();xs(this,p,zs,qs,Ms,{fw:0})}}export{Ws as default,Ps as metadata};
