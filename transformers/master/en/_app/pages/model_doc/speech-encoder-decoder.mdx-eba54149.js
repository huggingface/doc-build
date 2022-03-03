import{S as Ts,i as xs,s as Ds,e as a,k as i,w as b,t,M as Ms,c as s,d as o,m as l,a as d,x as y,h as n,b as c,F as e,g,y as w,q as E,o as k,B as S}from"../../chunks/vendor-4833417e.js";import{T as Ss}from"../../chunks/Tip-fffd6df1.js";import{D as te}from"../../chunks/Docstring-7b52c3d4.js";import{C as et}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Tt}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function $s(he){let p,$,u,T,F;return{c(){p=a("p"),$=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),T=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){p=s(x,"P",{});var M=d(p);$=n(M,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(M,"CODE",{});var L=d(u);T=n(L,"Module"),L.forEach(o),F=n(M,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),M.forEach(o)},m(x,M){g(x,p,M),e(p,$),e(p,u),e(u,T),e(p,F)},d(x){x&&o(p)}}}function js(he){let p,$,u,T,F;return{c(){p=a("p"),$=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),T=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){p=s(x,"P",{});var M=d(p);$=n(M,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(M,"CODE",{});var L=d(u);T=n(L,"Module"),L.forEach(o),F=n(M,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),M.forEach(o)},m(x,M){g(x,p,M),e(p,$),e(p,u),e(u,T),e(p,F)},d(x){x&&o(p)}}}function qs(he){let p,$,u,T,F,x,M,L,xt,ot,j,Dt,Ye,Mt,$t,wo,jt,qt,Ze,Pt,zt,Ke,Ct,Ft,tt,N,At,Eo,Lt,Nt,me,It,Wt,nt,I,Vt,Qe,Ot,Bt,Xe,Rt,Ut,rt,H,ne,ko,fe,Ht,So,Gt,at,D,ue,Jt,re,eo,Yt,Zt,oo,Kt,Qt,Xt,G,en,to,on,tn,no,nn,rn,an,To,sn,dn,ge,cn,ae,_e,ln,ve,pn,ro,hn,mn,fn,se,be,un,J,gn,xo,_n,vn,Do,bn,yn,st,Y,de,Mo,ye,wn,$o,En,dt,m,we,kn,Z,Sn,jo,Tn,xn,qo,Dn,Mn,$n,Ee,jn,ke,qn,Pn,zn,Se,Cn,Te,Fn,An,Ln,Po,Nn,In,xe,Wn,ao,Vn,On,Bn,De,Rn,Me,Un,Hn,Gn,W,so,Jn,Yn,zo,Zn,Kn,Co,Qn,Xn,er,q,$e,or,K,tr,co,nr,rr,Fo,ar,sr,dr,ce,cr,Ao,ir,lr,je,pr,P,qe,hr,Lo,mr,fr,Q,ur,No,gr,_r,Io,vr,br,yr,Wo,wr,Er,Pe,ct,X,ie,Vo,ze,kr,Oo,Sr,it,f,Ce,Tr,ee,xr,Bo,Dr,Mr,Ro,$r,jr,qr,Fe,Pr,Ae,zr,Cr,Fr,Le,Ar,Ne,Lr,Nr,Ir,Uo,Wr,Vr,Ie,Or,io,Br,Rr,Ur,We,Hr,Ve,Gr,Jr,Yr,V,lo,Zr,Kr,Ho,Qr,Xr,Go,ea,oa,ta,z,Oe,na,oe,ra,po,aa,sa,Jo,da,ca,ia,le,la,Yo,pa,ha,Be,ma,A,Re,fa,Zo,ua,ga,Ko,_a,va,Ue,lt;return x=new Tt({}),fe=new Tt({}),ue=new te({props:{name:"class transformers.SpeechEncoderDecoderConfig",anchor:"transformers.SpeechEncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L27",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}]}}),ge=new et({props:{code:`from transformers import BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),_e=new te({props:{name:"from_encoder_decoder_configs",anchor:"transformers.SpeechEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L92",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a></p>
`}}),be=new te({props:{name:"to_dict",anchor:"transformers.SpeechEncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L109",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),ye=new Tt({}),we=new te({props:{name:"class transformers.SpeechEncoderDecoderModel",anchor:"transformers.SpeechEncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L174",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$e=new te({props:{name:"forward",anchor:"transformers.SpeechEncoderDecoderModel.forward",parameters:[{name:"inputs",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"input_values",val:" = None"},{name:"input_features",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L442",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.forward.inputs",description:`<strong>inputs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
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
`}}),ce=new Ss({props:{$$slots:{default:[$s]},$$scope:{ctx:he}}}),je=new et({props:{code:`from transformers import SpeechEncoderDecoderModel, Speech2Text2Processor
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
translation = processor.batch_decode(generated)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel, Speech2Text2Processor
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
<span class="hljs-meta">&gt;&gt;&gt; </span>translation = processor.batch_decode(generated)`}}),qe=new te({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L286",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),Pe=new et({props:{code:`from transformers import SpeechEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2bert&quot;</span>)`}}),ze=new Tt({}),Ce=new te({props:{name:"class transformers.FlaxSpeechEncoderDecoderModel",anchor:"transformers.FlaxSpeechEncoderDecoderModel",parameters:[{name:"config",val:": SpeechEncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L325",parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Oe=new te({props:{name:"__call__",anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__",parameters:[{name:"inputs",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L634",parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.inputs",description:`<strong>inputs</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
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
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code> to the
right, replacing -100 by the <code>pad_token_id</code> and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),le=new Ss({props:{$$slots:{default:[js]},$$scope:{ctx:he}}}),Be=new et({props:{code:`from transformers import FlaxSpeechEncoderDecoderModel, BartTokenizer

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
<span class="hljs-comment"># Assert something? More interesting input? dtype correct?</span>`}}),Re=new te({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L749",parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),Ue=new et({props:{code:`from transformers import FlaxSpeechEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxSpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2-2-bart-large&quot;</span>)`}}),{c(){p=a("meta"),$=i(),u=a("h1"),T=a("a"),F=a("span"),b(x.$$.fragment),M=i(),L=a("span"),xt=t("Speech Encoder Decoder Models"),ot=i(),j=a("p"),Dt=t("The "),Ye=a("a"),Mt=t("SpeechEncoderDecoderModel"),$t=t(` can be used to initialize a speech-sequence-to-text-sequence model
with any pretrained speech autoencoding model as the encoder (`),wo=a("em"),jt=t("e.g."),qt=i(),Ze=a("a"),Pt=t("Wav2Vec2"),zt=t(", "),Ke=a("a"),Ct=t("Hubert"),Ft=t(") and any pretrained autoregressive model as the decoder."),tt=i(),N=a("p"),At=t(`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),Eo=a("em"),Lt=t("e.g."),Nt=t(" been shown in "),me=a("a"),It=t(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Wt=t(` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),nt=i(),I=a("p"),Vt=t("An example of how to use a "),Qe=a("a"),Ot=t("SpeechEncoderDecoderModel"),Bt=t(` for inference can be seen in
`),Xe=a("a"),Rt=t("Speech2Text2"),Ut=t("."),rt=i(),H=a("h2"),ne=a("a"),ko=a("span"),b(fe.$$.fragment),Ht=i(),So=a("span"),Gt=t("SpeechEncoderDecoderConfig"),at=i(),D=a("div"),b(ue.$$.fragment),Jt=i(),re=a("p"),eo=a("a"),Yt=t("SpeechEncoderDecoderConfig"),Zt=t(` is the configuration class to store the configuration of a
`),oo=a("a"),Kt=t("SpeechEncoderDecoderModel"),Qt=t(`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),Xt=i(),G=a("p"),en=t("Configuration objects inherit from "),to=a("a"),on=t("PretrainedConfig"),tn=t(` and can be used to control the model outputs. Read the
documentation from `),no=a("a"),nn=t("PretrainedConfig"),rn=t(" for more information."),an=i(),To=a("p"),sn=t("Examples:"),dn=i(),b(ge.$$.fragment),cn=i(),ae=a("div"),b(_e.$$.fragment),ln=i(),ve=a("p"),pn=t("Instantiate a "),ro=a("a"),hn=t("SpeechEncoderDecoderConfig"),mn=t(` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),fn=i(),se=a("div"),b(be.$$.fragment),un=i(),J=a("p"),gn=t("Serializes this instance to a Python dictionary. Override the default "),xo=a("em"),_n=t("to_dict()"),vn=t(" from "),Do=a("em"),bn=t("PretrainedConfig"),yn=t("."),st=i(),Y=a("h2"),de=a("a"),Mo=a("span"),b(ye.$$.fragment),wn=i(),$o=a("span"),En=t("SpeechEncoderDecoderModel"),dt=i(),m=a("div"),b(we.$$.fragment),kn=i(),Z=a("p"),Sn=t(`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),jo=a("code"),Tn=t("from_pretrained()"),xn=t(`function and the decoder is loaded via
`),qo=a("code"),Dn=t("from_pretrained()"),Mn=t(`function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),$n=i(),Ee=a("p"),jn=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),ke=a("a"),qn=t(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Pn=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),zn=i(),Se=a("p"),Cn=t("Additionally, in "),Te=a("a"),Fn=t(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),An=t(` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Ln=i(),Po=a("p"),Nn=t(`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),In=i(),xe=a("p"),Wn=t("This model inherits from "),ao=a("a"),Vn=t("PreTrainedModel"),On=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bn=i(),De=a("p"),Rn=t("This model is also a PyTorch "),Me=a("a"),Un=t("torch.nn.Module"),Hn=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gn=i(),W=a("p"),so=a("a"),Jn=t("SpeechEncoderDecoderModel"),Yn=t(` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),zo=a("em"),Zn=t("~transformers.AutoModel.from_pretrained"),Kn=t(` class method for the encoder and
:meth`),Co=a("em"),Qn=t("~transformers.AutoModelForCausalLM.from_pretrained"),Xn=t(" class method for the decoder."),er=i(),q=a("div"),b($e.$$.fragment),or=i(),K=a("p"),tr=t("The "),co=a("a"),nr=t("SpeechEncoderDecoderModel"),rr=t(" forward method, overrides the "),Fo=a("code"),ar=t("__call__"),sr=t(" special method."),dr=i(),b(ce.$$.fragment),cr=i(),Ao=a("p"),ir=t("Examples:"),lr=i(),b(je.$$.fragment),pr=i(),P=a("div"),b(qe.$$.fragment),hr=i(),Lo=a("p"),mr=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),fr=i(),Q=a("p"),ur=t("The model is set in evaluation mode by default using "),No=a("code"),gr=t("model.eval()"),_r=t(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Io=a("code"),vr=t("model.train()"),br=t("."),yr=i(),Wo=a("p"),wr=t("Example:"),Er=i(),b(Pe.$$.fragment),ct=i(),X=a("h2"),ie=a("a"),Vo=a("span"),b(ze.$$.fragment),kr=i(),Oo=a("span"),Sr=t("FlaxSpeechEncoderDecoderModel"),it=i(),f=a("div"),b(Ce.$$.fragment),Tr=i(),ee=a("p"),xr=t(`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Bo=a("code"),Dr=t("from_pretrained()"),Mr=t(`function and the decoder is loaded via
`),Ro=a("code"),$r=t("from_pretrained()"),jr=t(`function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),qr=i(),Fe=a("p"),Pr=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ae=a("a"),zr=t(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Cr=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Fr=i(),Le=a("p"),Ar=t("Additionally, in "),Ne=a("a"),Lr=t(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Nr=t(` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Ir=i(),Uo=a("p"),Wr=t(`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Vr=i(),Ie=a("p"),Or=t("This model inherits from "),io=a("a"),Br=t("FlaxPreTrainedModel"),Rr=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ur=i(),We=a("p"),Hr=t(`This model is also a Flax Linen
`),Ve=a("a"),Gr=t("flax.nn.Module"),Jr=t(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Yr=i(),V=a("p"),lo=a("a"),Zr=t("FlaxSpeechEncoderDecoderModel"),Kr=t(` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one
as decoder module when created with the :meth`),Ho=a("em"),Qr=t("~transformers.FlaxAutoModel.from_pretrained"),Xr=t(` class method for the
encoder and :meth`),Go=a("em"),ea=t("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),oa=t(" class method for the decoder."),ta=i(),z=a("div"),b(Oe.$$.fragment),na=i(),oe=a("p"),ra=t("The "),po=a("a"),aa=t("FlaxSpeechEncoderDecoderModel"),sa=t(" forward method, overrides the "),Jo=a("code"),da=t("__call__"),ca=t(" special method."),ia=i(),b(le.$$.fragment),la=i(),Yo=a("p"),pa=t("Examples:"),ha=i(),b(Be.$$.fragment),ma=i(),A=a("div"),b(Re.$$.fragment),fa=i(),Zo=a("p"),ua=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ga=i(),Ko=a("p"),_a=t("Example:"),va=i(),b(Ue.$$.fragment),this.h()},l(r){const h=Ms('[data-svelte="svelte-1phssyn"]',document.head);p=s(h,"META",{name:!0,content:!0}),h.forEach(o),$=l(r),u=s(r,"H1",{class:!0});var He=d(u);T=s(He,"A",{id:!0,class:!0,href:!0});var Qo=d(T);F=s(Qo,"SPAN",{});var ba=d(F);y(x.$$.fragment,ba),ba.forEach(o),Qo.forEach(o),M=l(He),L=s(He,"SPAN",{});var ya=d(L);xt=n(ya,"Speech Encoder Decoder Models"),ya.forEach(o),He.forEach(o),ot=l(r),j=s(r,"P",{});var O=d(j);Dt=n(O,"The "),Ye=s(O,"A",{href:!0});var wa=d(Ye);Mt=n(wa,"SpeechEncoderDecoderModel"),wa.forEach(o),$t=n(O,` can be used to initialize a speech-sequence-to-text-sequence model
with any pretrained speech autoencoding model as the encoder (`),wo=s(O,"EM",{});var Ea=d(wo);jt=n(Ea,"e.g."),Ea.forEach(o),qt=l(O),Ze=s(O,"A",{href:!0});var ka=d(Ze);Pt=n(ka,"Wav2Vec2"),ka.forEach(o),zt=n(O,", "),Ke=s(O,"A",{href:!0});var Sa=d(Ke);Ct=n(Sa,"Hubert"),Sa.forEach(o),Ft=n(O,") and any pretrained autoregressive model as the decoder."),O.forEach(o),tt=l(r),N=s(r,"P",{});var ho=d(N);At=n(ho,`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),Eo=s(ho,"EM",{});var Ta=d(Eo);Lt=n(Ta,"e.g."),Ta.forEach(o),Nt=n(ho," been shown in "),me=s(ho,"A",{href:!0,rel:!0});var xa=d(me);It=n(xa,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),xa.forEach(o),Wt=n(ho,` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),ho.forEach(o),nt=l(r),I=s(r,"P",{});var mo=d(I);Vt=n(mo,"An example of how to use a "),Qe=s(mo,"A",{href:!0});var Da=d(Qe);Ot=n(Da,"SpeechEncoderDecoderModel"),Da.forEach(o),Bt=n(mo,` for inference can be seen in
`),Xe=s(mo,"A",{href:!0});var Ma=d(Xe);Rt=n(Ma,"Speech2Text2"),Ma.forEach(o),Ut=n(mo,"."),mo.forEach(o),rt=l(r),H=s(r,"H2",{class:!0});var pt=d(H);ne=s(pt,"A",{id:!0,class:!0,href:!0});var $a=d(ne);ko=s($a,"SPAN",{});var ja=d(ko);y(fe.$$.fragment,ja),ja.forEach(o),$a.forEach(o),Ht=l(pt),So=s(pt,"SPAN",{});var qa=d(So);Gt=n(qa,"SpeechEncoderDecoderConfig"),qa.forEach(o),pt.forEach(o),at=l(r),D=s(r,"DIV",{class:!0});var C=d(D);y(ue.$$.fragment,C),Jt=l(C),re=s(C,"P",{});var Xo=d(re);eo=s(Xo,"A",{href:!0});var Pa=d(eo);Yt=n(Pa,"SpeechEncoderDecoderConfig"),Pa.forEach(o),Zt=n(Xo,` is the configuration class to store the configuration of a
`),oo=s(Xo,"A",{href:!0});var za=d(oo);Kt=n(za,"SpeechEncoderDecoderModel"),za.forEach(o),Qt=n(Xo,`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),Xo.forEach(o),Xt=l(C),G=s(C,"P",{});var fo=d(G);en=n(fo,"Configuration objects inherit from "),to=s(fo,"A",{href:!0});var Ca=d(to);on=n(Ca,"PretrainedConfig"),Ca.forEach(o),tn=n(fo,` and can be used to control the model outputs. Read the
documentation from `),no=s(fo,"A",{href:!0});var Fa=d(no);nn=n(Fa,"PretrainedConfig"),Fa.forEach(o),rn=n(fo," for more information."),fo.forEach(o),an=l(C),To=s(C,"P",{});var Aa=d(To);sn=n(Aa,"Examples:"),Aa.forEach(o),dn=l(C),y(ge.$$.fragment,C),cn=l(C),ae=s(C,"DIV",{class:!0});var ht=d(ae);y(_e.$$.fragment,ht),ln=l(ht),ve=s(ht,"P",{});var mt=d(ve);pn=n(mt,"Instantiate a "),ro=s(mt,"A",{href:!0});var La=d(ro);hn=n(La,"SpeechEncoderDecoderConfig"),La.forEach(o),mn=n(mt,` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),mt.forEach(o),ht.forEach(o),fn=l(C),se=s(C,"DIV",{class:!0});var ft=d(se);y(be.$$.fragment,ft),un=l(ft),J=s(ft,"P",{});var uo=d(J);gn=n(uo,"Serializes this instance to a Python dictionary. Override the default "),xo=s(uo,"EM",{});var Na=d(xo);_n=n(Na,"to_dict()"),Na.forEach(o),vn=n(uo," from "),Do=s(uo,"EM",{});var Ia=d(Do);bn=n(Ia,"PretrainedConfig"),Ia.forEach(o),yn=n(uo,"."),uo.forEach(o),ft.forEach(o),C.forEach(o),st=l(r),Y=s(r,"H2",{class:!0});var ut=d(Y);de=s(ut,"A",{id:!0,class:!0,href:!0});var Wa=d(de);Mo=s(Wa,"SPAN",{});var Va=d(Mo);y(ye.$$.fragment,Va),Va.forEach(o),Wa.forEach(o),wn=l(ut),$o=s(ut,"SPAN",{});var Oa=d($o);En=n(Oa,"SpeechEncoderDecoderModel"),Oa.forEach(o),ut.forEach(o),dt=l(r),m=s(r,"DIV",{class:!0});var _=d(m);y(we.$$.fragment,_),kn=l(_),Z=s(_,"P",{});var go=d(Z);Sn=n(go,`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),jo=s(go,"CODE",{});var Ba=d(jo);Tn=n(Ba,"from_pretrained()"),Ba.forEach(o),xn=n(go,`function and the decoder is loaded via
`),qo=s(go,"CODE",{});var Ra=d(qo);Dn=n(Ra,"from_pretrained()"),Ra.forEach(o),Mn=n(go,`function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),go.forEach(o),$n=l(_),Ee=s(_,"P",{});var gt=d(Ee);jn=n(gt,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),ke=s(gt,"A",{href:!0,rel:!0});var Ua=d(ke);qn=n(Ua,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ua.forEach(o),Pn=n(gt,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),gt.forEach(o),zn=l(_),Se=s(_,"P",{});var _t=d(Se);Cn=n(_t,"Additionally, in "),Te=s(_t,"A",{href:!0,rel:!0});var Ha=d(Te);Fn=n(Ha,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Ha.forEach(o),An=n(_t,` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),_t.forEach(o),Ln=l(_),Po=s(_,"P",{});var Ga=d(Po);Nn=n(Ga,`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Ga.forEach(o),In=l(_),xe=s(_,"P",{});var vt=d(xe);Wn=n(vt,"This model inherits from "),ao=s(vt,"A",{href:!0});var Ja=d(ao);Vn=n(Ja,"PreTrainedModel"),Ja.forEach(o),On=n(vt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vt.forEach(o),Bn=l(_),De=s(_,"P",{});var bt=d(De);Rn=n(bt,"This model is also a PyTorch "),Me=s(bt,"A",{href:!0,rel:!0});var Ya=d(Me);Un=n(Ya,"torch.nn.Module"),Ya.forEach(o),Hn=n(bt,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bt.forEach(o),Gn=l(_),W=s(_,"P",{});var Ge=d(W);so=s(Ge,"A",{href:!0});var Za=d(so);Jn=n(Za,"SpeechEncoderDecoderModel"),Za.forEach(o),Yn=n(Ge,` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),zo=s(Ge,"EM",{});var Ka=d(zo);Zn=n(Ka,"~transformers.AutoModel.from_pretrained"),Ka.forEach(o),Kn=n(Ge,` class method for the encoder and
:meth`),Co=s(Ge,"EM",{});var Qa=d(Co);Qn=n(Qa,"~transformers.AutoModelForCausalLM.from_pretrained"),Qa.forEach(o),Xn=n(Ge," class method for the decoder."),Ge.forEach(o),er=l(_),q=s(_,"DIV",{class:!0});var B=d(q);y($e.$$.fragment,B),or=l(B),K=s(B,"P",{});var _o=d(K);tr=n(_o,"The "),co=s(_o,"A",{href:!0});var Xa=d(co);nr=n(Xa,"SpeechEncoderDecoderModel"),Xa.forEach(o),rr=n(_o," forward method, overrides the "),Fo=s(_o,"CODE",{});var es=d(Fo);ar=n(es,"__call__"),es.forEach(o),sr=n(_o," special method."),_o.forEach(o),dr=l(B),y(ce.$$.fragment,B),cr=l(B),Ao=s(B,"P",{});var os=d(Ao);ir=n(os,"Examples:"),os.forEach(o),lr=l(B),y(je.$$.fragment,B),B.forEach(o),pr=l(_),P=s(_,"DIV",{class:!0});var R=d(P);y(qe.$$.fragment,R),hr=l(R),Lo=s(R,"P",{});var ts=d(Lo);mr=n(ts,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ts.forEach(o),fr=l(R),Q=s(R,"P",{});var vo=d(Q);ur=n(vo,"The model is set in evaluation mode by default using "),No=s(vo,"CODE",{});var ns=d(No);gr=n(ns,"model.eval()"),ns.forEach(o),_r=n(vo,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Io=s(vo,"CODE",{});var rs=d(Io);vr=n(rs,"model.train()"),rs.forEach(o),br=n(vo,"."),vo.forEach(o),yr=l(R),Wo=s(R,"P",{});var as=d(Wo);wr=n(as,"Example:"),as.forEach(o),Er=l(R),y(Pe.$$.fragment,R),R.forEach(o),_.forEach(o),ct=l(r),X=s(r,"H2",{class:!0});var yt=d(X);ie=s(yt,"A",{id:!0,class:!0,href:!0});var ss=d(ie);Vo=s(ss,"SPAN",{});var ds=d(Vo);y(ze.$$.fragment,ds),ds.forEach(o),ss.forEach(o),kr=l(yt),Oo=s(yt,"SPAN",{});var cs=d(Oo);Sr=n(cs,"FlaxSpeechEncoderDecoderModel"),cs.forEach(o),yt.forEach(o),it=l(r),f=s(r,"DIV",{class:!0});var v=d(f);y(Ce.$$.fragment,v),Tr=l(v),ee=s(v,"P",{});var bo=d(ee);xr=n(bo,`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Bo=s(bo,"CODE",{});var is=d(Bo);Dr=n(is,"from_pretrained()"),is.forEach(o),Mr=n(bo,`function and the decoder is loaded via
`),Ro=s(bo,"CODE",{});var ls=d(Ro);$r=n(ls,"from_pretrained()"),ls.forEach(o),jr=n(bo,`function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),bo.forEach(o),qr=l(v),Fe=s(v,"P",{});var wt=d(Fe);Pr=n(wt,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ae=s(wt,"A",{href:!0,rel:!0});var ps=d(Ae);zr=n(ps,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),ps.forEach(o),Cr=n(wt,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),wt.forEach(o),Fr=l(v),Le=s(v,"P",{});var Et=d(Le);Ar=n(Et,"Additionally, in "),Ne=s(Et,"A",{href:!0,rel:!0});var hs=d(Ne);Lr=n(hs,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),hs.forEach(o),Nr=n(Et,` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Et.forEach(o),Ir=l(v),Uo=s(v,"P",{});var ms=d(Uo);Wr=n(ms,`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),ms.forEach(o),Vr=l(v),Ie=s(v,"P",{});var kt=d(Ie);Or=n(kt,"This model inherits from "),io=s(kt,"A",{href:!0});var fs=d(io);Br=n(fs,"FlaxPreTrainedModel"),fs.forEach(o),Rr=n(kt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kt.forEach(o),Ur=l(v),We=s(v,"P",{});var St=d(We);Hr=n(St,`This model is also a Flax Linen
`),Ve=s(St,"A",{href:!0,rel:!0});var us=d(Ve);Gr=n(us,"flax.nn.Module"),us.forEach(o),Jr=n(St,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),St.forEach(o),Yr=l(v),V=s(v,"P",{});var Je=d(V);lo=s(Je,"A",{href:!0});var gs=d(lo);Zr=n(gs,"FlaxSpeechEncoderDecoderModel"),gs.forEach(o),Kr=n(Je,` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one
as decoder module when created with the :meth`),Ho=s(Je,"EM",{});var _s=d(Ho);Qr=n(_s,"~transformers.FlaxAutoModel.from_pretrained"),_s.forEach(o),Xr=n(Je,` class method for the
encoder and :meth`),Go=s(Je,"EM",{});var vs=d(Go);ea=n(vs,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),vs.forEach(o),oa=n(Je," class method for the decoder."),Je.forEach(o),ta=l(v),z=s(v,"DIV",{class:!0});var U=d(z);y(Oe.$$.fragment,U),na=l(U),oe=s(U,"P",{});var yo=d(oe);ra=n(yo,"The "),po=s(yo,"A",{href:!0});var bs=d(po);aa=n(bs,"FlaxSpeechEncoderDecoderModel"),bs.forEach(o),sa=n(yo," forward method, overrides the "),Jo=s(yo,"CODE",{});var ys=d(Jo);da=n(ys,"__call__"),ys.forEach(o),ca=n(yo," special method."),yo.forEach(o),ia=l(U),y(le.$$.fragment,U),la=l(U),Yo=s(U,"P",{});var ws=d(Yo);pa=n(ws,"Examples:"),ws.forEach(o),ha=l(U),y(Be.$$.fragment,U),U.forEach(o),ma=l(v),A=s(v,"DIV",{class:!0});var pe=d(A);y(Re.$$.fragment,pe),fa=l(pe),Zo=s(pe,"P",{});var Es=d(Zo);ua=n(Es,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Es.forEach(o),ga=l(pe),Ko=s(pe,"P",{});var ks=d(Ko);_a=n(ks,"Example:"),ks.forEach(o),va=l(pe),y(Ue.$$.fragment,pe),pe.forEach(o),v.forEach(o),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(Ps)),c(T,"id","speech-encoder-decoder-models"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#speech-encoder-decoder-models"),c(u,"class","relative group"),c(Ye,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(Ze,"href","wav2vec2"),c(Ke,"href","hubert"),c(me,"href","https://arxiv.org/abs/2104.06678"),c(me,"rel","nofollow"),c(Qe,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(Xe,"href","speech_to_text_2"),c(ne,"id","transformers.SpeechEncoderDecoderConfig"),c(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ne,"href","#transformers.SpeechEncoderDecoderConfig"),c(H,"class","relative group"),c(eo,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),c(oo,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(to,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(no,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(ro,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),c(ae,"class","docstring"),c(se,"class","docstring"),c(D,"class","docstring"),c(de,"id","transformers.SpeechEncoderDecoderModel"),c(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(de,"href","#transformers.SpeechEncoderDecoderModel"),c(Y,"class","relative group"),c(ke,"href","https://arxiv.org/abs/1907.12461"),c(ke,"rel","nofollow"),c(Te,"href","https://arxiv.org/abs/2104.06678"),c(Te,"rel","nofollow"),c(ao,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Me,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Me,"rel","nofollow"),c(so,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(co,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(q,"class","docstring"),c(P,"class","docstring"),c(m,"class","docstring"),c(ie,"id","transformers.FlaxSpeechEncoderDecoderModel"),c(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ie,"href","#transformers.FlaxSpeechEncoderDecoderModel"),c(X,"class","relative group"),c(Ae,"href","https://arxiv.org/abs/1907.12461"),c(Ae,"rel","nofollow"),c(Ne,"href","https://arxiv.org/abs/2104.06678"),c(Ne,"rel","nofollow"),c(io,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ve,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ve,"rel","nofollow"),c(lo,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.FlaxSpeechEncoderDecoderModel"),c(po,"href","/docs/transformers/master/en/model_doc/speech-encoder-decoder#transformers.FlaxSpeechEncoderDecoderModel"),c(z,"class","docstring"),c(A,"class","docstring"),c(f,"class","docstring")},m(r,h){e(document.head,p),g(r,$,h),g(r,u,h),e(u,T),e(T,F),w(x,F,null),e(u,M),e(u,L),e(L,xt),g(r,ot,h),g(r,j,h),e(j,Dt),e(j,Ye),e(Ye,Mt),e(j,$t),e(j,wo),e(wo,jt),e(j,qt),e(j,Ze),e(Ze,Pt),e(j,zt),e(j,Ke),e(Ke,Ct),e(j,Ft),g(r,tt,h),g(r,N,h),e(N,At),e(N,Eo),e(Eo,Lt),e(N,Nt),e(N,me),e(me,It),e(N,Wt),g(r,nt,h),g(r,I,h),e(I,Vt),e(I,Qe),e(Qe,Ot),e(I,Bt),e(I,Xe),e(Xe,Rt),e(I,Ut),g(r,rt,h),g(r,H,h),e(H,ne),e(ne,ko),w(fe,ko,null),e(H,Ht),e(H,So),e(So,Gt),g(r,at,h),g(r,D,h),w(ue,D,null),e(D,Jt),e(D,re),e(re,eo),e(eo,Yt),e(re,Zt),e(re,oo),e(oo,Kt),e(re,Qt),e(D,Xt),e(D,G),e(G,en),e(G,to),e(to,on),e(G,tn),e(G,no),e(no,nn),e(G,rn),e(D,an),e(D,To),e(To,sn),e(D,dn),w(ge,D,null),e(D,cn),e(D,ae),w(_e,ae,null),e(ae,ln),e(ae,ve),e(ve,pn),e(ve,ro),e(ro,hn),e(ve,mn),e(D,fn),e(D,se),w(be,se,null),e(se,un),e(se,J),e(J,gn),e(J,xo),e(xo,_n),e(J,vn),e(J,Do),e(Do,bn),e(J,yn),g(r,st,h),g(r,Y,h),e(Y,de),e(de,Mo),w(ye,Mo,null),e(Y,wn),e(Y,$o),e($o,En),g(r,dt,h),g(r,m,h),w(we,m,null),e(m,kn),e(m,Z),e(Z,Sn),e(Z,jo),e(jo,Tn),e(Z,xn),e(Z,qo),e(qo,Dn),e(Z,Mn),e(m,$n),e(m,Ee),e(Ee,jn),e(Ee,ke),e(ke,qn),e(Ee,Pn),e(m,zn),e(m,Se),e(Se,Cn),e(Se,Te),e(Te,Fn),e(Se,An),e(m,Ln),e(m,Po),e(Po,Nn),e(m,In),e(m,xe),e(xe,Wn),e(xe,ao),e(ao,Vn),e(xe,On),e(m,Bn),e(m,De),e(De,Rn),e(De,Me),e(Me,Un),e(De,Hn),e(m,Gn),e(m,W),e(W,so),e(so,Jn),e(W,Yn),e(W,zo),e(zo,Zn),e(W,Kn),e(W,Co),e(Co,Qn),e(W,Xn),e(m,er),e(m,q),w($e,q,null),e(q,or),e(q,K),e(K,tr),e(K,co),e(co,nr),e(K,rr),e(K,Fo),e(Fo,ar),e(K,sr),e(q,dr),w(ce,q,null),e(q,cr),e(q,Ao),e(Ao,ir),e(q,lr),w(je,q,null),e(m,pr),e(m,P),w(qe,P,null),e(P,hr),e(P,Lo),e(Lo,mr),e(P,fr),e(P,Q),e(Q,ur),e(Q,No),e(No,gr),e(Q,_r),e(Q,Io),e(Io,vr),e(Q,br),e(P,yr),e(P,Wo),e(Wo,wr),e(P,Er),w(Pe,P,null),g(r,ct,h),g(r,X,h),e(X,ie),e(ie,Vo),w(ze,Vo,null),e(X,kr),e(X,Oo),e(Oo,Sr),g(r,it,h),g(r,f,h),w(Ce,f,null),e(f,Tr),e(f,ee),e(ee,xr),e(ee,Bo),e(Bo,Dr),e(ee,Mr),e(ee,Ro),e(Ro,$r),e(ee,jr),e(f,qr),e(f,Fe),e(Fe,Pr),e(Fe,Ae),e(Ae,zr),e(Fe,Cr),e(f,Fr),e(f,Le),e(Le,Ar),e(Le,Ne),e(Ne,Lr),e(Le,Nr),e(f,Ir),e(f,Uo),e(Uo,Wr),e(f,Vr),e(f,Ie),e(Ie,Or),e(Ie,io),e(io,Br),e(Ie,Rr),e(f,Ur),e(f,We),e(We,Hr),e(We,Ve),e(Ve,Gr),e(We,Jr),e(f,Yr),e(f,V),e(V,lo),e(lo,Zr),e(V,Kr),e(V,Ho),e(Ho,Qr),e(V,Xr),e(V,Go),e(Go,ea),e(V,oa),e(f,ta),e(f,z),w(Oe,z,null),e(z,na),e(z,oe),e(oe,ra),e(oe,po),e(po,aa),e(oe,sa),e(oe,Jo),e(Jo,da),e(oe,ca),e(z,ia),w(le,z,null),e(z,la),e(z,Yo),e(Yo,pa),e(z,ha),w(Be,z,null),e(f,ma),e(f,A),w(Re,A,null),e(A,fa),e(A,Zo),e(Zo,ua),e(A,ga),e(A,Ko),e(Ko,_a),e(A,va),w(Ue,A,null),lt=!0},p(r,[h]){const He={};h&2&&(He.$$scope={dirty:h,ctx:r}),ce.$set(He);const Qo={};h&2&&(Qo.$$scope={dirty:h,ctx:r}),le.$set(Qo)},i(r){lt||(E(x.$$.fragment,r),E(fe.$$.fragment,r),E(ue.$$.fragment,r),E(ge.$$.fragment,r),E(_e.$$.fragment,r),E(be.$$.fragment,r),E(ye.$$.fragment,r),E(we.$$.fragment,r),E($e.$$.fragment,r),E(ce.$$.fragment,r),E(je.$$.fragment,r),E(qe.$$.fragment,r),E(Pe.$$.fragment,r),E(ze.$$.fragment,r),E(Ce.$$.fragment,r),E(Oe.$$.fragment,r),E(le.$$.fragment,r),E(Be.$$.fragment,r),E(Re.$$.fragment,r),E(Ue.$$.fragment,r),lt=!0)},o(r){k(x.$$.fragment,r),k(fe.$$.fragment,r),k(ue.$$.fragment,r),k(ge.$$.fragment,r),k(_e.$$.fragment,r),k(be.$$.fragment,r),k(ye.$$.fragment,r),k(we.$$.fragment,r),k($e.$$.fragment,r),k(ce.$$.fragment,r),k(je.$$.fragment,r),k(qe.$$.fragment,r),k(Pe.$$.fragment,r),k(ze.$$.fragment,r),k(Ce.$$.fragment,r),k(Oe.$$.fragment,r),k(le.$$.fragment,r),k(Be.$$.fragment,r),k(Re.$$.fragment,r),k(Ue.$$.fragment,r),lt=!1},d(r){o(p),r&&o($),r&&o(u),S(x),r&&o(ot),r&&o(j),r&&o(tt),r&&o(N),r&&o(nt),r&&o(I),r&&o(rt),r&&o(H),S(fe),r&&o(at),r&&o(D),S(ue),S(ge),S(_e),S(be),r&&o(st),r&&o(Y),S(ye),r&&o(dt),r&&o(m),S(we),S($e),S(ce),S(je),S(qe),S(Pe),r&&o(ct),r&&o(X),S(ze),r&&o(it),r&&o(f),S(Ce),S(Oe),S(le),S(Be),S(Re),S(Ue)}}}const Ps={local:"speech-encoder-decoder-models",sections:[{local:"transformers.SpeechEncoderDecoderConfig",title:"SpeechEncoderDecoderConfig"},{local:"transformers.SpeechEncoderDecoderModel",title:"SpeechEncoderDecoderModel"},{local:"transformers.FlaxSpeechEncoderDecoderModel",title:"FlaxSpeechEncoderDecoderModel"}],title:"Speech Encoder Decoder Models"};function zs(he,p,$){let{fw:u}=p;return he.$$set=T=>{"fw"in T&&$(0,u=T.fw)},[u]}class Ws extends Ts{constructor(p){super();xs(this,p,zs,qs,Ds,{fw:0})}}export{Ws as default,Ps as metadata};
