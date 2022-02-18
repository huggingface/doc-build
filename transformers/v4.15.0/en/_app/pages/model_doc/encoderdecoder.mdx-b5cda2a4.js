import{S as Di,i as ji,s as $i,e as a,k as i,w as u,t,L as qi,c as s,d as o,m as c,a as d,x as g,h as r,b as l,J as e,g as h,y as _,q as v,o as b,B as y}from"../../chunks/vendor-b1433968.js";import{T as dd}from"../../chunks/Tip-c3840994.js";import{D as O}from"../../chunks/Docstring-ff504c58.js";import{C as ze}from"../../chunks/CodeBlock-a320dbd7.js";import{I as Gn}from"../../chunks/IconCopyLink-7029626d.js";import"../../chunks/CopyButton-f65cb278.js";function Pi(Q){let m,D,f,w,P;return{c(){m=a("p"),D=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),w=t("Module"),P=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){m=s(k,"P",{});var T=d(m);D=r(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(T,"CODE",{});var F=d(f);w=r(F,"Module"),F.forEach(o),P=r(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(k,T){h(k,m,T),e(m,D),e(m,f),e(f,w),e(m,P)},d(k){k&&o(m)}}}function Fi(Q){let m,D,f,w,P;return{c(){m=a("p"),D=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),w=t("Module"),P=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){m=s(k,"P",{});var T=d(m);D=r(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(T,"CODE",{});var F=d(f);w=r(F,"Module"),F.forEach(o),P=r(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(k,T){h(k,m,T),e(m,D),e(m,f),e(f,w),e(m,P)},d(k){k&&o(m)}}}function Ci(Q){let m,D,f,w,P;return{c(){m=a("p"),D=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),w=t("Module"),P=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){m=s(k,"P",{});var T=d(m);D=r(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(T,"CODE",{});var F=d(f);w=r(F,"Module"),F.forEach(o),P=r(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(k,T){h(k,m,T),e(m,D),e(m,f),e(f,w),e(m,P)},d(k){k&&o(m)}}}function Ai(Q){let m,D,f,w,P,k,T,F,Mt,Un,me,zt,wo,Dt,jt,Vn,he,$t,De,qt,Pt,Hn,fe,Ft,Eo,Ct,At,Jn,W,St,xo,Nt,It,je,Lt,Bt,Yn,R,Ot,Ko,Wt,Rt,Qo,Gt,Ut,Zn,$e,Kn,G,Vt,qe,Ht,Jt,Pe,Yt,Zt,Qn,X,ue,Xo,Fe,Kt,en,Qt,Xn,z,Ce,Xt,ge,Mo,er,or,zo,nr,tr,rr,ee,ar,Do,sr,dr,jo,ir,cr,lr,on,pr,mr,Ae,hr,_e,Se,fr,Ne,ur,$o,gr,_r,vr,ve,Ie,br,oe,yr,nn,kr,Tr,tn,wr,Er,et,ne,be,rn,Le,xr,an,Mr,ot,E,Be,zr,te,Dr,sn,jr,$r,dn,qr,Pr,Fr,Oe,Cr,We,Ar,Sr,Nr,cn,Ir,Lr,Re,Br,qo,Or,Wr,Rr,Ge,Gr,Ue,Ur,Vr,Hr,U,Po,Jr,Yr,ln,Zr,Kr,pn,Qr,Xr,ea,C,Ve,oa,re,na,Fo,ta,ra,mn,aa,sa,da,ye,ia,hn,ca,la,He,pa,A,Je,ma,fn,ha,fa,ae,ua,un,ga,_a,gn,va,ba,ya,_n,ka,Ta,Ye,nt,se,ke,vn,Ze,wa,bn,Ea,tt,x,Ke,xa,de,Ma,yn,za,Da,kn,ja,$a,qa,Qe,Pa,Xe,Fa,Ca,Aa,Tn,Sa,Na,eo,Ia,Co,La,Ba,Oa,oo,Wa,no,Ra,Ga,Ua,V,wn,Va,Ha,En,Ja,Ya,xn,Za,Ka,Qa,S,to,Xa,ie,es,Ao,os,ns,Mn,ts,rs,as,Te,ss,zn,ds,is,ro,cs,L,ao,ls,Dn,ps,ms,jn,hs,fs,so,rt,ce,we,$n,io,us,qn,gs,at,M,co,_s,le,vs,Pn,bs,ys,Fn,ks,Ts,ws,lo,Es,po,xs,Ms,zs,Cn,Ds,js,mo,$s,So,qs,Ps,Fs,ho,Cs,fo,As,Ss,Ns,H,No,Is,Ls,An,Bs,Os,Sn,Ws,Rs,Gs,N,uo,Us,pe,Vs,Io,Hs,Js,Nn,Ys,Zs,Ks,Ee,Qs,In,Xs,ed,go,od,B,_o,nd,Ln,td,rd,Bn,ad,sd,vo,st;return k=new Gn({}),$e=new ze({props:{code:`# a workaround to load from pytorch checkpoint
_model = EncoderDecoderModel.from_pretrained("patrickvonplaten/bert2bert-cnn_dailymail-fp16")
_model.encoder.save_pretrained("./encoder")
_model.decoder.save_pretrained("./decoder")
model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(
    "./encoder", "./decoder", encoder_from_pt=True, decoder_from_pt=True
)
# This is only for copying some specific attributes of this particular model.
model.config = _model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># a workaround to load from pytorch checkpoint</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>_model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2bert-cnn_dailymail-fp16&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>_model.encoder.save_pretrained(<span class="hljs-string">&quot;./encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>_model.decoder.save_pretrained(<span class="hljs-string">&quot;./decoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;./encoder&quot;</span>, <span class="hljs-string">&quot;./decoder&quot;</span>, encoder_from_pt=<span class="hljs-literal">True</span>, decoder_from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is only for copying some specific attributes of this particular model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config = _model.config`}}),Fe=new Gn({}),Ce=new O({props:{name:"class transformers.EncoderDecoderConfig",anchor:"transformers.EncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L26",parametersDescription:[{anchor:"transformers.EncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration
object that defines the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration
object that defines the decoder config.</li>
</ul>`,name:"kwargs"}]}}),Ae=new ze({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

# Initializing a BERT bert-base-uncased style configuration
config_encoder = BertConfig()
config_decoder = BertConfig()

config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

# Initializing a Bert2Bert model from the bert-base-uncased style configurations
model = EncoderDecoderModel(config=config)

# Accessing the model configuration
config_encoder = model.config.encoder
config_decoder  = model.config.decoder
# set decoder config to causal lm
config_decoder.is_decoder = True
config_decoder.add_cross_attention = True

# Saving the model, including its configuration
model.save_pretrained('my-model')

# loading model and config from pretrained folder
encoder_decoder_config = EncoderDecoderConfig.from_pretrained('my-model')
model = EncoderDecoderModel.from_pretrained('my-model', config=encoder_decoder_config),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, EncoderDecoderConfig, EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BERT bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = BertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Bert2Bert model from the bert-base-uncased style configurations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = model.config.encoder
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder  = model.config.decoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set decoder config to causal lm</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.add_cross_attention = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&#x27;my-model&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_decoder_config = EncoderDecoderConfig.from_pretrained(<span class="hljs-string">&#x27;my-model&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&#x27;my-model&#x27;</span>, config=encoder_decoder_config)`}}),Se=new O({props:{name:"from_encoder_decoder_configs",anchor:"transformers.EncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L91",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.15.0/en/model_doc/encoderdecoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a></p>
`}}),Ie=new O({props:{name:"to_dict",anchor:"transformers.EncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L108",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),Le=new Gn({}),Be=new O({props:{name:"class transformers.EncoderDecoderModel",anchor:"transformers.EncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L168",parametersDescription:[{anchor:"transformers.EncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/encoderdecoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ve=new O({props:{name:"forward",anchor:"transformers.EncoderDecoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L425",parametersDescription:[{anchor:"transformers.EncoderDecoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code>
to the right, replacing -100 by the <code>pad_token_id</code> and prepending them with the
<code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor of hidden-states at the output of the last layer of the
encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.EncoderDecoderModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.EncoderDecoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code>
indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.EncoderDecoderModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.EncoderDecoderModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.EncoderDecoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.EncoderDecoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.EncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a
plain tuple.
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/encoderdecoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ye=new dd({props:{$$slots:{default:[Pi]},$$scope:{ctx:Q}}}),He=new ze({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer
import torch

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = EncoderDecoderModel.from_encoder_decoder_pretrained('bert-base-uncased', 'bert-base-uncased') # initialize Bert2Bert from pre-trained checkpoints

# training
model.config.decoder_start_token_id = tokenizer.cls_token_id
model.config.pad_token_id = tokenizer.pad_token_id
model.config.vocab_size = model.config.decoder.vocab_size

input_ids = tokenizer("This is a really long text", return_tensors="pt").input_ids
labels = tokenizer("This is the corresponding summary", return_tensors="pt").input_ids
outputs = model(input_ids=input_ids, labels=input_ids)
loss, logits = outputs.loss, outputs.logits

# save and load from pretrained
model.save_pretrained("bert2bert")
model = EncoderDecoderModel.from_pretrained("bert2bert")

# generation
generated = model.generate(input_ids),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, BertTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&#x27;bert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&#x27;bert-base-uncased&#x27;</span>, <span class="hljs-string">&#x27;bert-base-uncased&#x27;</span>) <span class="hljs-comment"># initialize Bert2Bert from pre-trained checkpoints</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = tokenizer.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.vocab_size = model.config.decoder.vocab_size

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;This is a really long text&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;This is the corresponding summary&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;bert2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;bert2bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids)`}}),Je=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L281",parametersDescription:[{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (:obj: <em>str</em>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under
a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided
as <code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in
a PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (:obj: <em>str</em>, <em>optional</em>, defaults to <em>None</em>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under
a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided
as <code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in
a PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaining positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),Ye=new ze({props:{code:`from transformers import EncoderDecoderModel
# initialize a bert2bert from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized
model = EncoderDecoderModel.from_encoder_decoder_pretrained('bert-base-uncased', 'bert-base-uncased')
# saving model after fine-tuning
model.save_pretrained("./bert2bert")
# load fine-tuned model
model = EncoderDecoderModel.from_pretrained("./bert2bert"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2bert from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&#x27;bert-base-uncased&#x27;</span>, <span class="hljs-string">&#x27;bert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)`}}),Ze=new Gn({}),Ke=new O({props:{name:"class transformers.TFEncoderDecoderModel",anchor:"transformers.TFEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L152",parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/encoderdecoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),to=new O({props:{name:"call",anchor:"transformers.TFEncoderDecoderModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L463",parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"decoder_input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a
tensor of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the
decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFEncoderDecoderModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFEncoderDecoderModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code>
indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFEncoderDecoderModel.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.TFEncoderDecoderModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFEncoderDecoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFEncoderDecoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFEncoderDecoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a
plain tuple.`,name:"return_dict"},{anchor:"transformers.TFEncoderDecoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as \`**decoder_kwargs&#x201C; for the decoder forward function.</li>
</ul>`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/encoderdecoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Te=new dd({props:{$$slots:{default:[Fi]},$$scope:{ctx:Q}}}),ro=new ze({props:{code:`from transformers import TFEncoderDecoderModel, BertTokenizer

# initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = TFEncoderDecoderModel.from_encoder_decoder_pretrained('bert-base-cased', 'gpt2')

tokenizer = BertTokenizer.from_pretrained('bert-base-cased')

# forward
input_ids = tokenizer.encode("Hello, my dog is cute", add_special_tokens=True, return_tensors='tf')  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=input_ids)

# training
outputs = model(input_ids=input_ids, decoder_input_ids=input_ids, labels=input_ids)
loss, logits = outputs.loss, outputs.logits

# save and load from pretrained
model.save_pretrained("bert2gpt2")
model = TFEncoderDecoderModel.from_pretrained("bert2gpt2")

# generation
generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFEncoderDecoderModel, BertTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&#x27;bert-base-cased&#x27;</span>, <span class="hljs-string">&#x27;gpt2&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&#x27;bert-base-cased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=input_ids, labels=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;bert2gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id)`}}),ao=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L300",parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (:obj: <em>str</em>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under
a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch index checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>encoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (:obj: <em>str</em>, <em>optional</em>, defaults to <em>None</em>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under
a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>decoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),so=new ze({props:{code:`from transformers import TFEncoderDecoderModel
# initialize a bert2gpt2 from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized
model = TFEncoderDecoderModel.from_encoder_decoder_pretrained('bert-base-uncased', 'gpt2')
# saving model after fine-tuning
model.save_pretrained("./bert2gpt2")
# load fine-tuned model
model = TFEncoderDecoderModel.from_pretrained("./bert2gpt2"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&#x27;bert-base-uncased&#x27;</span>, <span class="hljs-string">&#x27;gpt2&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),io=new Gn({}),co=new O({props:{name:"class transformers.FlaxEncoderDecoderModel",anchor:"transformers.FlaxEncoderDecoderModel",parameters:[{name:"config",val:": EncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L306",parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/encoderdecoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),uo=new O({props:{name:"__call__",anchor:"transformers.FlaxEncoderDecoderModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L614",parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For sequence to sequence training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.encoder.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.decoder.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead
of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/encoderdecoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ee=new dd({props:{$$slots:{default:[Ci]},$$scope:{ctx:Q}}}),go=new ze({props:{code:`from transformers import FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

# load a fine-tuned bert2gpt2 model
model = FlaxEncoderDecoderModel.from_pretrained("patrickvonplaten/bert2gpt2-cnn_dailymail-fp16")
# load input & output tokenizer
tokenizer_input = BertTokenizer.from_pretrained('bert-base-cased')
tokenizer_output = GPT2Tokenizer.from_pretrained('gpt2')

article = '''Sigma Alpha Epsilon is under fire for a video showing party-bound fraternity members
singing a racist chant. SAE's national chapter suspended the students,
but University of Oklahoma President David Boren took it a step further,
saying the university's affiliation with the fraternity is permanently done.'''

input_ids = tokenizer_input(article, add_special_tokens=True, return_tensors='np').input_ids

# use GPT2's eos_token as the pad as well as eos token
model.config.eos_token_id = model.config.decoder.eos_token_id
model.config.pad_token_id = model.config.eos_token_id

sequences = model.generate(input_ids, num_beams=4, max_length=12).sequences

summary = tokenizer_output.batch_decode(sequences, skip_special_tokens=True)[0]
assert summary == "SAS Alpha Epsilon suspended Sigma Alpha Epsilon members",`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned bert2gpt2 model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2gpt2-cnn_dailymail-fp16&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load input &amp; output tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_input = BertTokenizer.from_pretrained(<span class="hljs-string">&#x27;bert-base-cased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_output = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&#x27;gpt2&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&#x27;&#x27;&#x27;Sigma Alpha Epsilon is under fire for a video showing party-bound fraternity members
<span class="hljs-meta">... </span>singing a racist chant. SAE&#x27;s national chapter suspended the students,
<span class="hljs-meta">... </span>but University of Oklahoma President David Boren took it a step further,
<span class="hljs-meta">... </span>saying the university&#x27;s affiliation with the fraternity is permanently done.&#x27;&#x27;&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer_input(article, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use GPT2&#x27;s eos_token as the pad as well as eos token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.eos_token_id = model.config.decoder.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(input_ids, num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">12</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>summary = tokenizer_output.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> summary == <span class="hljs-string">&quot;SAS Alpha Epsilon suspended Sigma Alpha Epsilon members&quot;</span>`}}),_o=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L739",parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (:obj: <em>Union[str, os.PathLike]</em>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under
a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (:obj: <em>Union[str, os.PathLike]</em>, <em>optional</em>, defaults to <em>None</em>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under
a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),vo=new ze({props:{code:`from transformers import FlaxEncoderDecoderModel
# initialize a bert2gpt2 from pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = FlaxEncoderDecoderModel.from_encoder_decoder_pretrained('bert-base-cased', 'gpt2')
# saving model after fine-tuning
model.save_pretrained("./bert2gpt2")
# load fine-tuned model
model = FlaxEncoderDecoderModel.from_pretrained("./bert2gpt2"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&#x27;bert-base-cased&#x27;</span>, <span class="hljs-string">&#x27;gpt2&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){m=a("meta"),D=i(),f=a("h1"),w=a("a"),P=a("span"),u(k.$$.fragment),T=i(),F=a("span"),Mt=t("Encoder Decoder Models"),Un=i(),me=a("p"),zt=t("The "),wo=a("a"),Dt=t("EncoderDecoderModel"),jt=t(` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),Vn=i(),he=a("p"),$t=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),De=a("a"),qt=t("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Pt=t(` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),Hn=i(),fe=a("p"),Ft=t("After such an "),Eo=a("a"),Ct=t("EncoderDecoderModel"),At=t(` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),Jn=i(),W=a("p"),St=t("An application of this architecture could be to leverage two pretrained "),xo=a("a"),Nt=t("BertModel"),It=t(` as the encoder
and decoder for a summarization model as was shown in: `),je=a("a"),Lt=t("Text Summarization with Pretrained Encoders"),Bt=t(" by Yang Liu and Mirella Lapata."),Yn=i(),R=a("p"),Ot=t("The "),Ko=a("code"),Wt=t("from_pretrained()"),Rt=t(` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),Qo=a("code"),Gt=t("from_pt=True"),Ut=t(` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Zn=i(),u($e.$$.fragment),Kn=i(),G=a("p"),Vt=t("This model was contributed by "),qe=a("a"),Ht=t("thomwolf"),Jt=t(`. This model\u2019s TensorFlow and Flax versions
were contributed by `),Pe=a("a"),Yt=t("ydshieh"),Zt=t("."),Qn=i(),X=a("h2"),ue=a("a"),Xo=a("span"),u(Fe.$$.fragment),Kt=i(),en=a("span"),Qt=t("EncoderDecoderConfig"),Xn=i(),z=a("div"),u(Ce.$$.fragment),Xt=i(),ge=a("p"),Mo=a("a"),er=t("EncoderDecoderConfig"),or=t(` is the configuration class to store the configuration of a
`),zo=a("a"),nr=t("EncoderDecoderModel"),tr=t(`. It is used to instantiate an Encoder Decoder model according to the
specified arguments, defining the encoder and decoder configs.`),rr=i(),ee=a("p"),ar=t("Configuration objects inherit from "),Do=a("a"),sr=t("PretrainedConfig"),dr=t(` and can be used to control the model
outputs. Read the documentation from `),jo=a("a"),ir=t("PretrainedConfig"),cr=t(" for more information."),lr=i(),on=a("p"),pr=t("Examples:"),mr=i(),u(Ae.$$.fragment),hr=i(),_e=a("div"),u(Se.$$.fragment),fr=i(),Ne=a("p"),ur=t("Instantiate a "),$o=a("a"),gr=t("EncoderDecoderConfig"),_r=t(` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),vr=i(),ve=a("div"),u(Ie.$$.fragment),br=i(),oe=a("p"),yr=t("Serializes this instance to a Python dictionary. Override the default "),nn=a("em"),kr=t("to_dict()"),Tr=t(" from "),tn=a("em"),wr=t("PretrainedConfig"),Er=t("."),et=i(),ne=a("h2"),be=a("a"),rn=a("span"),u(Le.$$.fragment),xr=i(),an=a("span"),Mr=t("EncoderDecoderModel"),ot=i(),E=a("div"),u(Be.$$.fragment),zr=i(),te=a("p"),Dr=t(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),sn=a("code"),jr=t("from_pretrained()"),$r=t(` function and the decoder is loaded via
`),dn=a("code"),qr=t("from_pretrained()"),Pr=t(` function. Cross-attention layers are automatically added
to the decoder and should be fine-tuned on a downstream generative task, like summarization.`),Fr=i(),Oe=a("p"),Cr=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),We=a("a"),Ar=t("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Sr=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Nr=i(),cn=a("p"),Ir=t(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Lr=i(),Re=a("p"),Br=t("This model inherits from "),qo=a("a"),Or=t("PreTrainedModel"),Wr=t(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Rr=i(),Ge=a("p"),Gr=t("This model is also a PyTorch "),Ue=a("a"),Ur=t("torch.nn.Module"),Vr=t(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Hr=i(),U=a("p"),Po=a("a"),Jr=t("EncoderDecoderModel"),Yr=t(` is a generic model class that will be instantiated as a transformer
architecture with one of the base model classes of the library as encoder and another one as decoder when created
with the :meth`),ln=a("em"),Zr=t("~transformers.AutoModel.from_pretrained"),Kr=t(` class method for the encoder and
:meth`),pn=a("em"),Qr=t("~transformers.AutoModelForCausalLM.from_pretrained"),Xr=t(" class method for the decoder."),ea=i(),C=a("div"),u(Ve.$$.fragment),oa=i(),re=a("p"),na=t("The "),Fo=a("a"),ta=t("EncoderDecoderModel"),ra=t(" forward method, overrides the "),mn=a("code"),aa=t("__call__"),sa=t(" special method."),da=i(),u(ye.$$.fragment),ia=i(),hn=a("p"),ca=t("Examples:"),la=i(),u(He.$$.fragment),pa=i(),A=a("div"),u(Je.$$.fragment),ma=i(),fn=a("p"),ha=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),fa=i(),ae=a("p"),ua=t("The model is set in evaluation mode by default using "),un=a("code"),ga=t("model.eval()"),_a=t(` (Dropout modules are deactivated). To
train the model, you need to first set it back in training mode with `),gn=a("code"),va=t("model.train()"),ba=t("."),ya=i(),_n=a("p"),ka=t("Example:"),Ta=i(),u(Ye.$$.fragment),nt=i(),se=a("h2"),ke=a("a"),vn=a("span"),u(Ze.$$.fragment),wa=i(),bn=a("span"),Ea=t("TFEncoderDecoderModel"),tt=i(),x=a("div"),u(Ke.$$.fragment),xa=i(),de=a("p"),Ma=t(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),yn=a("code"),za=t("from_pretrained()"),Da=t(` function and the decoder is loaded via
`),kn=a("code"),ja=t("from_pretrained()"),$a=t(` function. Cross-attention layers are automatically
added to the decoder and should be fine-tuned on a downstream generative task, like summarization.`),qa=i(),Qe=a("p"),Pa=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Xe=a("a"),Fa=t("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Ca=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Aa=i(),Tn=a("p"),Sa=t(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Na=i(),eo=a("p"),Ia=t("This model inherits from "),Co=a("a"),La=t("TFPreTrainedModel"),Ba=t(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Oa=i(),oo=a("p"),Wa=t("This model is also a "),no=a("a"),Ra=t("tf.keras.Model"),Ga=t(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ua=i(),V=a("p"),wn=a("code"),Va=t("TFEncoderDecoder"),Ha=t(` is a generic model class that will be instantiated as a transformer
architecture with one of the base model classes of the library as encoder and another one as decoder when created
with the :meth`),En=a("em"),Ja=t("~transformers.TFAutoModel.from_pretrained"),Ya=t(` class method for the encoder and
:meth`),xn=a("em"),Za=t("~transformers.TFAutoModelForCausalLM.from_pretrained"),Ka=t(" class method for the decoder."),Qa=i(),S=a("div"),u(to.$$.fragment),Xa=i(),ie=a("p"),es=t("The "),Ao=a("a"),os=t("TFEncoderDecoderModel"),ns=t(" forward method, overrides the "),Mn=a("code"),ts=t("__call__"),rs=t(" special method."),as=i(),u(Te.$$.fragment),ss=i(),zn=a("p"),ds=t("Examples:"),is=i(),u(ro.$$.fragment),cs=i(),L=a("div"),u(ao.$$.fragment),ls=i(),Dn=a("p"),ps=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ms=i(),jn=a("p"),hs=t("Example:"),fs=i(),u(so.$$.fragment),rt=i(),ce=a("h2"),we=a("a"),$n=a("span"),u(io.$$.fragment),us=i(),qn=a("span"),gs=t("FlaxEncoderDecoderModel"),at=i(),M=a("div"),u(co.$$.fragment),_s=i(),le=a("p"),vs=t(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Pn=a("code"),bs=t("from_pretrained()"),ys=t(` function and the decoder is loaded via
`),Fn=a("code"),ks=t("from_pretrained()"),Ts=t(` function. Cross-attention layers are automatically added
to the decoder and should be fine-tuned on a downstream generative task, like summarization.`),ws=i(),lo=a("p"),Es=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),po=a("a"),xs=t("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Ms=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),zs=i(),Cn=a("p"),Ds=t(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),js=i(),mo=a("p"),$s=t("This model inherits from "),So=a("a"),qs=t("FlaxPreTrainedModel"),Ps=t(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Fs=i(),ho=a("p"),Cs=t("This model is also a Flax Linen "),fo=a("a"),As=t("flax.nn.Module"),Ss=t(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ns=i(),H=a("p"),No=a("a"),Is=t("FlaxEncoderDecoderModel"),Ls=t(` is a generic model class that will be instantiated as a transformer
architecture with the module (flax.nn.Module) of one of the base model classes of the library as encoder module and
another one as decoder module when created with the :meth`),An=a("em"),Bs=t("~transformers.FlaxAutoModel.from_pretrained"),Os=t(` class method
for the encoder and :meth`),Sn=a("em"),Ws=t("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Rs=t(" class method for the decoder."),Gs=i(),N=a("div"),u(uo.$$.fragment),Us=i(),pe=a("p"),Vs=t("The "),Io=a("a"),Hs=t("FlaxEncoderDecoderModel"),Js=t(" forward method, overrides the "),Nn=a("code"),Ys=t("__call__"),Zs=t(" special method."),Ks=i(),u(Ee.$$.fragment),Qs=i(),In=a("p"),Xs=t("Examples:"),ed=i(),u(go.$$.fragment),od=i(),B=a("div"),u(_o.$$.fragment),nd=i(),Ln=a("p"),td=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),rd=i(),Bn=a("p"),ad=t("Example:"),sd=i(),u(vo.$$.fragment),this.h()},l(n){const p=qi('[data-svelte="svelte-1phssyn"]',document.head);m=s(p,"META",{name:!0,content:!0}),p.forEach(o),D=c(n),f=s(n,"H1",{class:!0});var bo=d(f);w=s(bo,"A",{id:!0,class:!0,href:!0});var On=d(w);P=s(On,"SPAN",{});var Wn=d(P);g(k.$$.fragment,Wn),Wn.forEach(o),On.forEach(o),T=c(bo),F=s(bo,"SPAN",{});var id=d(F);Mt=r(id,"Encoder Decoder Models"),id.forEach(o),bo.forEach(o),Un=c(n),me=s(n,"P",{});var dt=d(me);zt=r(dt,"The "),wo=s(dt,"A",{href:!0});var cd=d(wo);Dt=r(cd,"EncoderDecoderModel"),cd.forEach(o),jt=r(dt,` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),dt.forEach(o),Vn=c(n),he=s(n,"P",{});var it=d(he);$t=r(it,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),De=s(it,"A",{href:!0,rel:!0});var ld=d(De);qt=r(ld,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),ld.forEach(o),Pt=r(it,` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),it.forEach(o),Hn=c(n),fe=s(n,"P",{});var ct=d(fe);Ft=r(ct,"After such an "),Eo=s(ct,"A",{href:!0});var pd=d(Eo);Ct=r(pd,"EncoderDecoderModel"),pd.forEach(o),At=r(ct,` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),ct.forEach(o),Jn=c(n),W=s(n,"P",{});var Lo=d(W);St=r(Lo,"An application of this architecture could be to leverage two pretrained "),xo=s(Lo,"A",{href:!0});var md=d(xo);Nt=r(md,"BertModel"),md.forEach(o),It=r(Lo,` as the encoder
and decoder for a summarization model as was shown in: `),je=s(Lo,"A",{href:!0,rel:!0});var hd=d(je);Lt=r(hd,"Text Summarization with Pretrained Encoders"),hd.forEach(o),Bt=r(Lo," by Yang Liu and Mirella Lapata."),Lo.forEach(o),Yn=c(n),R=s(n,"P",{});var Bo=d(R);Ot=r(Bo,"The "),Ko=s(Bo,"CODE",{});var fd=d(Ko);Wt=r(fd,"from_pretrained()"),fd.forEach(o),Rt=r(Bo,` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),Qo=s(Bo,"CODE",{});var ud=d(Qo);Gt=r(ud,"from_pt=True"),ud.forEach(o),Ut=r(Bo,` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Bo.forEach(o),Zn=c(n),g($e.$$.fragment,n),Kn=c(n),G=s(n,"P",{});var Oo=d(G);Vt=r(Oo,"This model was contributed by "),qe=s(Oo,"A",{href:!0,rel:!0});var gd=d(qe);Ht=r(gd,"thomwolf"),gd.forEach(o),Jt=r(Oo,`. This model\u2019s TensorFlow and Flax versions
were contributed by `),Pe=s(Oo,"A",{href:!0,rel:!0});var _d=d(Pe);Yt=r(_d,"ydshieh"),_d.forEach(o),Zt=r(Oo,"."),Oo.forEach(o),Qn=c(n),X=s(n,"H2",{class:!0});var lt=d(X);ue=s(lt,"A",{id:!0,class:!0,href:!0});var vd=d(ue);Xo=s(vd,"SPAN",{});var bd=d(Xo);g(Fe.$$.fragment,bd),bd.forEach(o),vd.forEach(o),Kt=c(lt),en=s(lt,"SPAN",{});var yd=d(en);Qt=r(yd,"EncoderDecoderConfig"),yd.forEach(o),lt.forEach(o),Xn=c(n),z=s(n,"DIV",{class:!0});var I=d(z);g(Ce.$$.fragment,I),Xt=c(I),ge=s(I,"P",{});var Rn=d(ge);Mo=s(Rn,"A",{href:!0});var kd=d(Mo);er=r(kd,"EncoderDecoderConfig"),kd.forEach(o),or=r(Rn,` is the configuration class to store the configuration of a
`),zo=s(Rn,"A",{href:!0});var Td=d(zo);nr=r(Td,"EncoderDecoderModel"),Td.forEach(o),tr=r(Rn,`. It is used to instantiate an Encoder Decoder model according to the
specified arguments, defining the encoder and decoder configs.`),Rn.forEach(o),rr=c(I),ee=s(I,"P",{});var Wo=d(ee);ar=r(Wo,"Configuration objects inherit from "),Do=s(Wo,"A",{href:!0});var wd=d(Do);sr=r(wd,"PretrainedConfig"),wd.forEach(o),dr=r(Wo,` and can be used to control the model
outputs. Read the documentation from `),jo=s(Wo,"A",{href:!0});var Ed=d(jo);ir=r(Ed,"PretrainedConfig"),Ed.forEach(o),cr=r(Wo," for more information."),Wo.forEach(o),lr=c(I),on=s(I,"P",{});var xd=d(on);pr=r(xd,"Examples:"),xd.forEach(o),mr=c(I),g(Ae.$$.fragment,I),hr=c(I),_e=s(I,"DIV",{class:!0});var pt=d(_e);g(Se.$$.fragment,pt),fr=c(pt),Ne=s(pt,"P",{});var mt=d(Ne);ur=r(mt,"Instantiate a "),$o=s(mt,"A",{href:!0});var Md=d($o);gr=r(Md,"EncoderDecoderConfig"),Md.forEach(o),_r=r(mt,` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),mt.forEach(o),pt.forEach(o),vr=c(I),ve=s(I,"DIV",{class:!0});var ht=d(ve);g(Ie.$$.fragment,ht),br=c(ht),oe=s(ht,"P",{});var Ro=d(oe);yr=r(Ro,"Serializes this instance to a Python dictionary. Override the default "),nn=s(Ro,"EM",{});var zd=d(nn);kr=r(zd,"to_dict()"),zd.forEach(o),Tr=r(Ro," from "),tn=s(Ro,"EM",{});var Dd=d(tn);wr=r(Dd,"PretrainedConfig"),Dd.forEach(o),Er=r(Ro,"."),Ro.forEach(o),ht.forEach(o),I.forEach(o),et=c(n),ne=s(n,"H2",{class:!0});var ft=d(ne);be=s(ft,"A",{id:!0,class:!0,href:!0});var jd=d(be);rn=s(jd,"SPAN",{});var $d=d(rn);g(Le.$$.fragment,$d),$d.forEach(o),jd.forEach(o),xr=c(ft),an=s(ft,"SPAN",{});var qd=d(an);Mr=r(qd,"EncoderDecoderModel"),qd.forEach(o),ft.forEach(o),ot=c(n),E=s(n,"DIV",{class:!0});var j=d(E);g(Be.$$.fragment,j),zr=c(j),te=s(j,"P",{});var Go=d(te);Dr=r(Go,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),sn=s(Go,"CODE",{});var Pd=d(sn);jr=r(Pd,"from_pretrained()"),Pd.forEach(o),$r=r(Go,` function and the decoder is loaded via
`),dn=s(Go,"CODE",{});var Fd=d(dn);qr=r(Fd,"from_pretrained()"),Fd.forEach(o),Pr=r(Go,` function. Cross-attention layers are automatically added
to the decoder and should be fine-tuned on a downstream generative task, like summarization.`),Go.forEach(o),Fr=c(j),Oe=s(j,"P",{});var ut=d(Oe);Cr=r(ut,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),We=s(ut,"A",{href:!0,rel:!0});var Cd=d(We);Ar=r(Cd,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Cd.forEach(o),Sr=r(ut,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ut.forEach(o),Nr=c(j),cn=s(j,"P",{});var Ad=d(cn);Ir=r(Ad,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Ad.forEach(o),Lr=c(j),Re=s(j,"P",{});var gt=d(Re);Br=r(gt,"This model inherits from "),qo=s(gt,"A",{href:!0});var Sd=d(qo);Or=r(Sd,"PreTrainedModel"),Sd.forEach(o),Wr=r(gt,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),gt.forEach(o),Rr=c(j),Ge=s(j,"P",{});var _t=d(Ge);Gr=r(_t,"This model is also a PyTorch "),Ue=s(_t,"A",{href:!0,rel:!0});var Nd=d(Ue);Ur=r(Nd,"torch.nn.Module"),Nd.forEach(o),Vr=r(_t,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),_t.forEach(o),Hr=c(j),U=s(j,"P",{});var yo=d(U);Po=s(yo,"A",{href:!0});var Id=d(Po);Jr=r(Id,"EncoderDecoderModel"),Id.forEach(o),Yr=r(yo,` is a generic model class that will be instantiated as a transformer
architecture with one of the base model classes of the library as encoder and another one as decoder when created
with the :meth`),ln=s(yo,"EM",{});var Ld=d(ln);Zr=r(Ld,"~transformers.AutoModel.from_pretrained"),Ld.forEach(o),Kr=r(yo,` class method for the encoder and
:meth`),pn=s(yo,"EM",{});var Bd=d(pn);Qr=r(Bd,"~transformers.AutoModelForCausalLM.from_pretrained"),Bd.forEach(o),Xr=r(yo," class method for the decoder."),yo.forEach(o),ea=c(j),C=s(j,"DIV",{class:!0});var J=d(C);g(Ve.$$.fragment,J),oa=c(J),re=s(J,"P",{});var Uo=d(re);na=r(Uo,"The "),Fo=s(Uo,"A",{href:!0});var Od=d(Fo);ta=r(Od,"EncoderDecoderModel"),Od.forEach(o),ra=r(Uo," forward method, overrides the "),mn=s(Uo,"CODE",{});var Wd=d(mn);aa=r(Wd,"__call__"),Wd.forEach(o),sa=r(Uo," special method."),Uo.forEach(o),da=c(J),g(ye.$$.fragment,J),ia=c(J),hn=s(J,"P",{});var Rd=d(hn);ca=r(Rd,"Examples:"),Rd.forEach(o),la=c(J),g(He.$$.fragment,J),J.forEach(o),pa=c(j),A=s(j,"DIV",{class:!0});var Y=d(A);g(Je.$$.fragment,Y),ma=c(Y),fn=s(Y,"P",{});var Gd=d(fn);ha=r(Gd,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Gd.forEach(o),fa=c(Y),ae=s(Y,"P",{});var Vo=d(ae);ua=r(Vo,"The model is set in evaluation mode by default using "),un=s(Vo,"CODE",{});var Ud=d(un);ga=r(Ud,"model.eval()"),Ud.forEach(o),_a=r(Vo,` (Dropout modules are deactivated). To
train the model, you need to first set it back in training mode with `),gn=s(Vo,"CODE",{});var Vd=d(gn);va=r(Vd,"model.train()"),Vd.forEach(o),ba=r(Vo,"."),Vo.forEach(o),ya=c(Y),_n=s(Y,"P",{});var Hd=d(_n);ka=r(Hd,"Example:"),Hd.forEach(o),Ta=c(Y),g(Ye.$$.fragment,Y),Y.forEach(o),j.forEach(o),nt=c(n),se=s(n,"H2",{class:!0});var vt=d(se);ke=s(vt,"A",{id:!0,class:!0,href:!0});var Jd=d(ke);vn=s(Jd,"SPAN",{});var Yd=d(vn);g(Ze.$$.fragment,Yd),Yd.forEach(o),Jd.forEach(o),wa=c(vt),bn=s(vt,"SPAN",{});var Zd=d(bn);Ea=r(Zd,"TFEncoderDecoderModel"),Zd.forEach(o),vt.forEach(o),tt=c(n),x=s(n,"DIV",{class:!0});var $=d(x);g(Ke.$$.fragment,$),xa=c($),de=s($,"P",{});var Ho=d(de);Ma=r(Ho,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),yn=s(Ho,"CODE",{});var Kd=d(yn);za=r(Kd,"from_pretrained()"),Kd.forEach(o),Da=r(Ho,` function and the decoder is loaded via
`),kn=s(Ho,"CODE",{});var Qd=d(kn);ja=r(Qd,"from_pretrained()"),Qd.forEach(o),$a=r(Ho,` function. Cross-attention layers are automatically
added to the decoder and should be fine-tuned on a downstream generative task, like summarization.`),Ho.forEach(o),qa=c($),Qe=s($,"P",{});var bt=d(Qe);Pa=r(bt,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Xe=s(bt,"A",{href:!0,rel:!0});var Xd=d(Xe);Fa=r(Xd,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Xd.forEach(o),Ca=r(bt,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),bt.forEach(o),Aa=c($),Tn=s($,"P",{});var ei=d(Tn);Sa=r(ei,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),ei.forEach(o),Na=c($),eo=s($,"P",{});var yt=d(eo);Ia=r(yt,"This model inherits from "),Co=s(yt,"A",{href:!0});var oi=d(Co);La=r(oi,"TFPreTrainedModel"),oi.forEach(o),Ba=r(yt,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),yt.forEach(o),Oa=c($),oo=s($,"P",{});var kt=d(oo);Wa=r(kt,"This model is also a "),no=s(kt,"A",{href:!0,rel:!0});var ni=d(no);Ra=r(ni,"tf.keras.Model"),ni.forEach(o),Ga=r(kt,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),kt.forEach(o),Ua=c($),V=s($,"P",{});var ko=d(V);wn=s(ko,"CODE",{});var ti=d(wn);Va=r(ti,"TFEncoderDecoder"),ti.forEach(o),Ha=r(ko,` is a generic model class that will be instantiated as a transformer
architecture with one of the base model classes of the library as encoder and another one as decoder when created
with the :meth`),En=s(ko,"EM",{});var ri=d(En);Ja=r(ri,"~transformers.TFAutoModel.from_pretrained"),ri.forEach(o),Ya=r(ko,` class method for the encoder and
:meth`),xn=s(ko,"EM",{});var ai=d(xn);Za=r(ai,"~transformers.TFAutoModelForCausalLM.from_pretrained"),ai.forEach(o),Ka=r(ko," class method for the decoder."),ko.forEach(o),Qa=c($),S=s($,"DIV",{class:!0});var Z=d(S);g(to.$$.fragment,Z),Xa=c(Z),ie=s(Z,"P",{});var Jo=d(ie);es=r(Jo,"The "),Ao=s(Jo,"A",{href:!0});var si=d(Ao);os=r(si,"TFEncoderDecoderModel"),si.forEach(o),ns=r(Jo," forward method, overrides the "),Mn=s(Jo,"CODE",{});var di=d(Mn);ts=r(di,"__call__"),di.forEach(o),rs=r(Jo," special method."),Jo.forEach(o),as=c(Z),g(Te.$$.fragment,Z),ss=c(Z),zn=s(Z,"P",{});var ii=d(zn);ds=r(ii,"Examples:"),ii.forEach(o),is=c(Z),g(ro.$$.fragment,Z),Z.forEach(o),cs=c($),L=s($,"DIV",{class:!0});var xe=d(L);g(ao.$$.fragment,xe),ls=c(xe),Dn=s(xe,"P",{});var ci=d(Dn);ps=r(ci,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ci.forEach(o),ms=c(xe),jn=s(xe,"P",{});var li=d(jn);hs=r(li,"Example:"),li.forEach(o),fs=c(xe),g(so.$$.fragment,xe),xe.forEach(o),$.forEach(o),rt=c(n),ce=s(n,"H2",{class:!0});var Tt=d(ce);we=s(Tt,"A",{id:!0,class:!0,href:!0});var pi=d(we);$n=s(pi,"SPAN",{});var mi=d($n);g(io.$$.fragment,mi),mi.forEach(o),pi.forEach(o),us=c(Tt),qn=s(Tt,"SPAN",{});var hi=d(qn);gs=r(hi,"FlaxEncoderDecoderModel"),hi.forEach(o),Tt.forEach(o),at=c(n),M=s(n,"DIV",{class:!0});var q=d(M);g(co.$$.fragment,q),_s=c(q),le=s(q,"P",{});var Yo=d(le);vs=r(Yo,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Pn=s(Yo,"CODE",{});var fi=d(Pn);bs=r(fi,"from_pretrained()"),fi.forEach(o),ys=r(Yo,` function and the decoder is loaded via
`),Fn=s(Yo,"CODE",{});var ui=d(Fn);ks=r(ui,"from_pretrained()"),ui.forEach(o),Ts=r(Yo,` function. Cross-attention layers are automatically added
to the decoder and should be fine-tuned on a downstream generative task, like summarization.`),Yo.forEach(o),ws=c(q),lo=s(q,"P",{});var wt=d(lo);Es=r(wt,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),po=s(wt,"A",{href:!0,rel:!0});var gi=d(po);xs=r(gi,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),gi.forEach(o),Ms=r(wt,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),wt.forEach(o),zs=c(q),Cn=s(q,"P",{});var _i=d(Cn);Ds=r(_i,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),_i.forEach(o),js=c(q),mo=s(q,"P",{});var Et=d(mo);$s=r(Et,"This model inherits from "),So=s(Et,"A",{href:!0});var vi=d(So);qs=r(vi,"FlaxPreTrainedModel"),vi.forEach(o),Ps=r(Et,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Et.forEach(o),Fs=c(q),ho=s(q,"P",{});var xt=d(ho);Cs=r(xt,"This model is also a Flax Linen "),fo=s(xt,"A",{href:!0,rel:!0});var bi=d(fo);As=r(bi,"flax.nn.Module"),bi.forEach(o),Ss=r(xt,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),xt.forEach(o),Ns=c(q),H=s(q,"P",{});var To=d(H);No=s(To,"A",{href:!0});var yi=d(No);Is=r(yi,"FlaxEncoderDecoderModel"),yi.forEach(o),Ls=r(To,` is a generic model class that will be instantiated as a transformer
architecture with the module (flax.nn.Module) of one of the base model classes of the library as encoder module and
another one as decoder module when created with the :meth`),An=s(To,"EM",{});var ki=d(An);Bs=r(ki,"~transformers.FlaxAutoModel.from_pretrained"),ki.forEach(o),Os=r(To,` class method
for the encoder and :meth`),Sn=s(To,"EM",{});var Ti=d(Sn);Ws=r(Ti,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Ti.forEach(o),Rs=r(To," class method for the decoder."),To.forEach(o),Gs=c(q),N=s(q,"DIV",{class:!0});var K=d(N);g(uo.$$.fragment,K),Us=c(K),pe=s(K,"P",{});var Zo=d(pe);Vs=r(Zo,"The "),Io=s(Zo,"A",{href:!0});var wi=d(Io);Hs=r(wi,"FlaxEncoderDecoderModel"),wi.forEach(o),Js=r(Zo," forward method, overrides the "),Nn=s(Zo,"CODE",{});var Ei=d(Nn);Ys=r(Ei,"__call__"),Ei.forEach(o),Zs=r(Zo," special method."),Zo.forEach(o),Ks=c(K),g(Ee.$$.fragment,K),Qs=c(K),In=s(K,"P",{});var xi=d(In);Xs=r(xi,"Examples:"),xi.forEach(o),ed=c(K),g(go.$$.fragment,K),K.forEach(o),od=c(q),B=s(q,"DIV",{class:!0});var Me=d(B);g(_o.$$.fragment,Me),nd=c(Me),Ln=s(Me,"P",{});var Mi=d(Ln);td=r(Mi,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Mi.forEach(o),rd=c(Me),Bn=s(Me,"P",{});var zi=d(Bn);ad=r(zi,"Example:"),zi.forEach(o),sd=c(Me),g(vo.$$.fragment,Me),Me.forEach(o),q.forEach(o),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Si)),l(w,"id","encoder-decoder-models"),l(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(w,"href","#encoder-decoder-models"),l(f,"class","relative group"),l(wo,"href","/docs/transformers/v4.15.0/en/model_doc/encoderdecoder#transformers.EncoderDecoderModel"),l(De,"href","https://arxiv.org/abs/1907.12461"),l(De,"rel","nofollow"),l(Eo,"href","/docs/transformers/v4.15.0/en/model_doc/encoderdecoder#transformers.EncoderDecoderModel"),l(xo,"href","/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertModel"),l(je,"href","https://arxiv.org/abs/1908.08345"),l(je,"rel","nofollow"),l(qe,"href","https://github.com/thomwolf"),l(qe,"rel","nofollow"),l(Pe,"href","https://github.com/ydshieh"),l(Pe,"rel","nofollow"),l(ue,"id","transformers.EncoderDecoderConfig"),l(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ue,"href","#transformers.EncoderDecoderConfig"),l(X,"class","relative group"),l(Mo,"href","/docs/transformers/v4.15.0/en/model_doc/encoderdecoder#transformers.EncoderDecoderConfig"),l(zo,"href","/docs/transformers/v4.15.0/en/model_doc/encoderdecoder#transformers.EncoderDecoderModel"),l(Do,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(jo,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),l($o,"href","/docs/transformers/v4.15.0/en/model_doc/encoderdecoder#transformers.EncoderDecoderConfig"),l(_e,"class","docstring"),l(ve,"class","docstring"),l(z,"class","docstring"),l(be,"id","transformers.EncoderDecoderModel"),l(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(be,"href","#transformers.EncoderDecoderModel"),l(ne,"class","relative group"),l(We,"href","https://arxiv.org/abs/1907.12461"),l(We,"rel","nofollow"),l(qo,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),l(Ue,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ue,"rel","nofollow"),l(Po,"href","/docs/transformers/v4.15.0/en/model_doc/encoderdecoder#transformers.EncoderDecoderModel"),l(Fo,"href","/docs/transformers/v4.15.0/en/model_doc/encoderdecoder#transformers.EncoderDecoderModel"),l(C,"class","docstring"),l(A,"class","docstring"),l(E,"class","docstring"),l(ke,"id","transformers.TFEncoderDecoderModel"),l(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ke,"href","#transformers.TFEncoderDecoderModel"),l(se,"class","relative group"),l(Xe,"href","https://arxiv.org/abs/1907.12461"),l(Xe,"rel","nofollow"),l(Co,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),l(no,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(no,"rel","nofollow"),l(Ao,"href","/docs/transformers/v4.15.0/en/model_doc/encoderdecoder#transformers.TFEncoderDecoderModel"),l(S,"class","docstring"),l(L,"class","docstring"),l(x,"class","docstring"),l(we,"id","transformers.FlaxEncoderDecoderModel"),l(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(we,"href","#transformers.FlaxEncoderDecoderModel"),l(ce,"class","relative group"),l(po,"href","https://arxiv.org/abs/1907.12461"),l(po,"rel","nofollow"),l(So,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(fo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),l(fo,"rel","nofollow"),l(No,"href","/docs/transformers/v4.15.0/en/model_doc/encoderdecoder#transformers.FlaxEncoderDecoderModel"),l(Io,"href","/docs/transformers/v4.15.0/en/model_doc/encoderdecoder#transformers.FlaxEncoderDecoderModel"),l(N,"class","docstring"),l(B,"class","docstring"),l(M,"class","docstring")},m(n,p){e(document.head,m),h(n,D,p),h(n,f,p),e(f,w),e(w,P),_(k,P,null),e(f,T),e(f,F),e(F,Mt),h(n,Un,p),h(n,me,p),e(me,zt),e(me,wo),e(wo,Dt),e(me,jt),h(n,Vn,p),h(n,he,p),e(he,$t),e(he,De),e(De,qt),e(he,Pt),h(n,Hn,p),h(n,fe,p),e(fe,Ft),e(fe,Eo),e(Eo,Ct),e(fe,At),h(n,Jn,p),h(n,W,p),e(W,St),e(W,xo),e(xo,Nt),e(W,It),e(W,je),e(je,Lt),e(W,Bt),h(n,Yn,p),h(n,R,p),e(R,Ot),e(R,Ko),e(Ko,Wt),e(R,Rt),e(R,Qo),e(Qo,Gt),e(R,Ut),h(n,Zn,p),_($e,n,p),h(n,Kn,p),h(n,G,p),e(G,Vt),e(G,qe),e(qe,Ht),e(G,Jt),e(G,Pe),e(Pe,Yt),e(G,Zt),h(n,Qn,p),h(n,X,p),e(X,ue),e(ue,Xo),_(Fe,Xo,null),e(X,Kt),e(X,en),e(en,Qt),h(n,Xn,p),h(n,z,p),_(Ce,z,null),e(z,Xt),e(z,ge),e(ge,Mo),e(Mo,er),e(ge,or),e(ge,zo),e(zo,nr),e(ge,tr),e(z,rr),e(z,ee),e(ee,ar),e(ee,Do),e(Do,sr),e(ee,dr),e(ee,jo),e(jo,ir),e(ee,cr),e(z,lr),e(z,on),e(on,pr),e(z,mr),_(Ae,z,null),e(z,hr),e(z,_e),_(Se,_e,null),e(_e,fr),e(_e,Ne),e(Ne,ur),e(Ne,$o),e($o,gr),e(Ne,_r),e(z,vr),e(z,ve),_(Ie,ve,null),e(ve,br),e(ve,oe),e(oe,yr),e(oe,nn),e(nn,kr),e(oe,Tr),e(oe,tn),e(tn,wr),e(oe,Er),h(n,et,p),h(n,ne,p),e(ne,be),e(be,rn),_(Le,rn,null),e(ne,xr),e(ne,an),e(an,Mr),h(n,ot,p),h(n,E,p),_(Be,E,null),e(E,zr),e(E,te),e(te,Dr),e(te,sn),e(sn,jr),e(te,$r),e(te,dn),e(dn,qr),e(te,Pr),e(E,Fr),e(E,Oe),e(Oe,Cr),e(Oe,We),e(We,Ar),e(Oe,Sr),e(E,Nr),e(E,cn),e(cn,Ir),e(E,Lr),e(E,Re),e(Re,Br),e(Re,qo),e(qo,Or),e(Re,Wr),e(E,Rr),e(E,Ge),e(Ge,Gr),e(Ge,Ue),e(Ue,Ur),e(Ge,Vr),e(E,Hr),e(E,U),e(U,Po),e(Po,Jr),e(U,Yr),e(U,ln),e(ln,Zr),e(U,Kr),e(U,pn),e(pn,Qr),e(U,Xr),e(E,ea),e(E,C),_(Ve,C,null),e(C,oa),e(C,re),e(re,na),e(re,Fo),e(Fo,ta),e(re,ra),e(re,mn),e(mn,aa),e(re,sa),e(C,da),_(ye,C,null),e(C,ia),e(C,hn),e(hn,ca),e(C,la),_(He,C,null),e(E,pa),e(E,A),_(Je,A,null),e(A,ma),e(A,fn),e(fn,ha),e(A,fa),e(A,ae),e(ae,ua),e(ae,un),e(un,ga),e(ae,_a),e(ae,gn),e(gn,va),e(ae,ba),e(A,ya),e(A,_n),e(_n,ka),e(A,Ta),_(Ye,A,null),h(n,nt,p),h(n,se,p),e(se,ke),e(ke,vn),_(Ze,vn,null),e(se,wa),e(se,bn),e(bn,Ea),h(n,tt,p),h(n,x,p),_(Ke,x,null),e(x,xa),e(x,de),e(de,Ma),e(de,yn),e(yn,za),e(de,Da),e(de,kn),e(kn,ja),e(de,$a),e(x,qa),e(x,Qe),e(Qe,Pa),e(Qe,Xe),e(Xe,Fa),e(Qe,Ca),e(x,Aa),e(x,Tn),e(Tn,Sa),e(x,Na),e(x,eo),e(eo,Ia),e(eo,Co),e(Co,La),e(eo,Ba),e(x,Oa),e(x,oo),e(oo,Wa),e(oo,no),e(no,Ra),e(oo,Ga),e(x,Ua),e(x,V),e(V,wn),e(wn,Va),e(V,Ha),e(V,En),e(En,Ja),e(V,Ya),e(V,xn),e(xn,Za),e(V,Ka),e(x,Qa),e(x,S),_(to,S,null),e(S,Xa),e(S,ie),e(ie,es),e(ie,Ao),e(Ao,os),e(ie,ns),e(ie,Mn),e(Mn,ts),e(ie,rs),e(S,as),_(Te,S,null),e(S,ss),e(S,zn),e(zn,ds),e(S,is),_(ro,S,null),e(x,cs),e(x,L),_(ao,L,null),e(L,ls),e(L,Dn),e(Dn,ps),e(L,ms),e(L,jn),e(jn,hs),e(L,fs),_(so,L,null),h(n,rt,p),h(n,ce,p),e(ce,we),e(we,$n),_(io,$n,null),e(ce,us),e(ce,qn),e(qn,gs),h(n,at,p),h(n,M,p),_(co,M,null),e(M,_s),e(M,le),e(le,vs),e(le,Pn),e(Pn,bs),e(le,ys),e(le,Fn),e(Fn,ks),e(le,Ts),e(M,ws),e(M,lo),e(lo,Es),e(lo,po),e(po,xs),e(lo,Ms),e(M,zs),e(M,Cn),e(Cn,Ds),e(M,js),e(M,mo),e(mo,$s),e(mo,So),e(So,qs),e(mo,Ps),e(M,Fs),e(M,ho),e(ho,Cs),e(ho,fo),e(fo,As),e(ho,Ss),e(M,Ns),e(M,H),e(H,No),e(No,Is),e(H,Ls),e(H,An),e(An,Bs),e(H,Os),e(H,Sn),e(Sn,Ws),e(H,Rs),e(M,Gs),e(M,N),_(uo,N,null),e(N,Us),e(N,pe),e(pe,Vs),e(pe,Io),e(Io,Hs),e(pe,Js),e(pe,Nn),e(Nn,Ys),e(pe,Zs),e(N,Ks),_(Ee,N,null),e(N,Qs),e(N,In),e(In,Xs),e(N,ed),_(go,N,null),e(M,od),e(M,B),_(_o,B,null),e(B,nd),e(B,Ln),e(Ln,td),e(B,rd),e(B,Bn),e(Bn,ad),e(B,sd),_(vo,B,null),st=!0},p(n,[p]){const bo={};p&2&&(bo.$$scope={dirty:p,ctx:n}),ye.$set(bo);const On={};p&2&&(On.$$scope={dirty:p,ctx:n}),Te.$set(On);const Wn={};p&2&&(Wn.$$scope={dirty:p,ctx:n}),Ee.$set(Wn)},i(n){st||(v(k.$$.fragment,n),v($e.$$.fragment,n),v(Fe.$$.fragment,n),v(Ce.$$.fragment,n),v(Ae.$$.fragment,n),v(Se.$$.fragment,n),v(Ie.$$.fragment,n),v(Le.$$.fragment,n),v(Be.$$.fragment,n),v(Ve.$$.fragment,n),v(ye.$$.fragment,n),v(He.$$.fragment,n),v(Je.$$.fragment,n),v(Ye.$$.fragment,n),v(Ze.$$.fragment,n),v(Ke.$$.fragment,n),v(to.$$.fragment,n),v(Te.$$.fragment,n),v(ro.$$.fragment,n),v(ao.$$.fragment,n),v(so.$$.fragment,n),v(io.$$.fragment,n),v(co.$$.fragment,n),v(uo.$$.fragment,n),v(Ee.$$.fragment,n),v(go.$$.fragment,n),v(_o.$$.fragment,n),v(vo.$$.fragment,n),st=!0)},o(n){b(k.$$.fragment,n),b($e.$$.fragment,n),b(Fe.$$.fragment,n),b(Ce.$$.fragment,n),b(Ae.$$.fragment,n),b(Se.$$.fragment,n),b(Ie.$$.fragment,n),b(Le.$$.fragment,n),b(Be.$$.fragment,n),b(Ve.$$.fragment,n),b(ye.$$.fragment,n),b(He.$$.fragment,n),b(Je.$$.fragment,n),b(Ye.$$.fragment,n),b(Ze.$$.fragment,n),b(Ke.$$.fragment,n),b(to.$$.fragment,n),b(Te.$$.fragment,n),b(ro.$$.fragment,n),b(ao.$$.fragment,n),b(so.$$.fragment,n),b(io.$$.fragment,n),b(co.$$.fragment,n),b(uo.$$.fragment,n),b(Ee.$$.fragment,n),b(go.$$.fragment,n),b(_o.$$.fragment,n),b(vo.$$.fragment,n),st=!1},d(n){o(m),n&&o(D),n&&o(f),y(k),n&&o(Un),n&&o(me),n&&o(Vn),n&&o(he),n&&o(Hn),n&&o(fe),n&&o(Jn),n&&o(W),n&&o(Yn),n&&o(R),n&&o(Zn),y($e,n),n&&o(Kn),n&&o(G),n&&o(Qn),n&&o(X),y(Fe),n&&o(Xn),n&&o(z),y(Ce),y(Ae),y(Se),y(Ie),n&&o(et),n&&o(ne),y(Le),n&&o(ot),n&&o(E),y(Be),y(Ve),y(ye),y(He),y(Je),y(Ye),n&&o(nt),n&&o(se),y(Ze),n&&o(tt),n&&o(x),y(Ke),y(to),y(Te),y(ro),y(ao),y(so),n&&o(rt),n&&o(ce),y(io),n&&o(at),n&&o(M),y(co),y(uo),y(Ee),y(go),y(_o),y(vo)}}}const Si={local:"encoder-decoder-models",sections:[{local:"transformers.EncoderDecoderConfig",title:"EncoderDecoderConfig"},{local:"transformers.EncoderDecoderModel",title:"EncoderDecoderModel"},{local:"transformers.TFEncoderDecoderModel",title:"TFEncoderDecoderModel"},{local:"transformers.FlaxEncoderDecoderModel",title:"FlaxEncoderDecoderModel"}],title:"Encoder Decoder Models"};function Ni(Q,m,D){let{fw:f}=m;return Q.$$set=w=>{"fw"in w&&D(0,f=w.fw)},[f]}class Gi extends Di{constructor(m){super();ji(this,m,Ni,Ai,$i,{fw:0})}}export{Gi as default,Si as metadata};
