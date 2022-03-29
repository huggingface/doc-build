import{S as zi,i as xi,s as $i,e as a,k as c,w as f,t,M as ji,c as s,d as o,m as l,a as d,x as u,h as r,b as i,F as e,g as h,y as g,q as _,o as b,B as v,v as Fi}from"../../chunks/vendor-6b77c823.js";import{T as dd}from"../../chunks/Tip-39098574.js";import{D as O}from"../../chunks/Docstring-abef54e3.js";import{C as De}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Rn}from"../../chunks/IconCopyLink-7a11ce68.js";function Pi(pe){let m,F,y,q,j;return{c(){m=a("p"),F=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a("code"),q=t("Module"),j=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){m=s(k,"P",{});var T=d(m);F=r(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(T,"CODE",{});var P=d(y);q=r(P,"Module"),P.forEach(o),j=r(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(k,T){h(k,m,T),e(m,F),e(m,y),e(y,q),e(m,j)},d(k){k&&o(m)}}}function Ai(pe){let m,F,y,q,j;return{c(){m=a("p"),F=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a("code"),q=t("Module"),j=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){m=s(k,"P",{});var T=d(m);F=r(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(T,"CODE",{});var P=d(y);q=r(P,"Module"),P.forEach(o),j=r(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(k,T){h(k,m,T),e(m,F),e(m,y),e(y,q),e(m,j)},d(k){k&&o(m)}}}function Ci(pe){let m,F,y,q,j;return{c(){m=a("p"),F=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a("code"),q=t("Module"),j=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){m=s(k,"P",{});var T=d(m);F=r(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(T,"CODE",{});var P=d(y);q=r(P,"Module"),P.forEach(o),j=r(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(k,T){h(k,m,T),e(m,F),e(m,y),e(y,q),e(m,j)},d(k){k&&o(m)}}}function Si(pe){let m,F,y,q,j,k,T,P,qt,Gn,me,Dt,wo,zt,xt,Un,he,$t,ze,jt,Ft,Hn,fe,Pt,Eo,At,Ct,Yn,V,St,Mo,Nt,It,xe,Lt,Bt,Jn,W,Ot,sn,Vt,Wt,dn,Rt,Gt,Zn,$e,Kn,R,Ut,je,Ht,Yt,Fe,Jt,Zt,Qn,Q,ue,cn,Pe,Kt,ln,Qt,Xn,D,Ae,Xt,ge,qo,er,or,Do,nr,tr,rr,X,ar,zo,sr,dr,xo,ir,cr,lr,pn,pr,mr,Ce,hr,_e,Se,fr,Ne,ur,$o,gr,_r,br,be,Ie,vr,ee,yr,mn,kr,Tr,hn,wr,Er,et,oe,ve,fn,Le,Mr,un,qr,ot,w,Be,Dr,ne,zr,jo,xr,$r,Fo,jr,Fr,Pr,Oe,Ar,Ve,Cr,Sr,Nr,gn,Ir,Lr,We,Br,Po,Or,Vr,Wr,Re,Rr,Ge,Gr,Ur,Hr,G,Ao,Yr,Jr,_n,Zr,Kr,bn,Qr,Xr,ea,A,Ue,oa,te,na,Co,ta,ra,vn,aa,sa,da,ye,ia,yn,ca,la,He,pa,C,Ye,ma,kn,ha,fa,re,ua,Tn,ga,_a,wn,ba,va,ya,En,ka,Ta,Je,nt,ae,ke,Mn,Ze,wa,qn,Ea,tt,E,Ke,Ma,se,qa,So,Da,za,No,xa,$a,ja,Qe,Fa,Xe,Pa,Aa,Ca,Dn,Sa,Na,eo,Ia,Io,La,Ba,Oa,oo,Va,no,Wa,Ra,Ga,U,Lo,Ua,Ha,Bo,Ya,Ja,Oo,Za,Ka,Qa,S,to,Xa,de,es,Vo,os,ns,zn,ts,rs,as,Te,ss,xn,ds,is,ro,cs,L,ao,ls,$n,ps,ms,jn,hs,fs,so,rt,ie,we,Fn,io,us,Pn,gs,at,M,co,_s,ce,bs,Wo,vs,ys,Ro,ks,Ts,ws,lo,Es,po,Ms,qs,Ds,An,zs,xs,mo,$s,Go,js,Fs,Ps,ho,As,fo,Cs,Ss,Ns,H,Uo,Is,Ls,Cn,Bs,Os,Sn,Vs,Ws,Rs,N,uo,Gs,le,Us,Ho,Hs,Ys,Nn,Js,Zs,Ks,Ee,Qs,In,Xs,ed,go,od,B,_o,nd,Ln,td,rd,Bn,ad,sd,bo,st;return k=new Rn({}),$e=new De({props:{code:`# a workaround to load from pytorch checkpoint
_model = EncoderDecoderModel.from_pretrained("patrickvonplaten/bert2bert-cnn_dailymail-fp16")
_model.encoder.save_pretrained("./encoder")
_model.decoder.save_pretrained("./decoder")
model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(
    "./encoder", "./decoder", encoder_from_pt=True, decoder_from_pt=True
)
# This is only for copying some specific attributes of this particular model.
model.config = _model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># a workaround to load from pytorch checkpoint</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>_model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2bert-cnn_dailymail-fp16&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>_model.encoder.save_pretrained(<span class="hljs-string">&quot;./encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>_model.decoder.save_pretrained(<span class="hljs-string">&quot;./decoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;./encoder&quot;</span>, <span class="hljs-string">&quot;./decoder&quot;</span>, encoder_from_pt=<span class="hljs-literal">True</span>, decoder_from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is only for copying some specific attributes of this particular model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config = _model.config`}}),Pe=new Rn({}),Ae=new O({props:{name:"class transformers.EncoderDecoderConfig",anchor:"transformers.EncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L26",parametersDescription:[{anchor:"transformers.EncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}]}}),Ce=new De({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

# Initializing a BERT bert-base-uncased style configuration
config_encoder = BertConfig()
config_decoder = BertConfig()

config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

# Initializing a Bert2Bert model from the bert-base-uncased style configurations
model = EncoderDecoderModel(config=config)

# Accessing the model configuration
config_encoder = model.config.encoder
config_decoder = model.config.decoder
# set decoder config to causal lm
config_decoder.is_decoder = True
config_decoder.add_cross_attention = True

# Saving the model, including its configuration
model.save_pretrained("my-model")

# loading model and config from pretrained folder
encoder_decoder_config = EncoderDecoderConfig.from_pretrained("my-model")
model = EncoderDecoderModel.from_pretrained("my-model", config=encoder_decoder_config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, EncoderDecoderConfig, EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BERT bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = BertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Bert2Bert model from the bert-base-uncased style configurations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = model.config.encoder
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = model.config.decoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set decoder config to causal lm</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.add_cross_attention = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_decoder_config = EncoderDecoderConfig.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),Se=new O({props:{name:"from_encoder_decoder_configs",anchor:"transformers.EncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L91",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a></p>
`}}),Ie=new O({props:{name:"to_dict",anchor:"transformers.EncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L108",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),Le=new Rn({}),Be=new O({props:{name:"class transformers.EncoderDecoderModel",anchor:"transformers.EncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L165",parametersDescription:[{anchor:"transformers.EncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ue=new O({props:{name:"forward",anchor:"transformers.EncoderDecoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L429",parametersDescription:[{anchor:"transformers.EncoderDecoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code> to the
right, replacing -100 by the <code>pad_token_id</code> and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor
of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the
decoder.`,name:"encoder_outputs"},{anchor:"transformers.EncoderDecoderModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.EncoderDecoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.EncoderDecoderModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.EncoderDecoderModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.EncoderDecoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.EncoderDecoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.EncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
  href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ye=new dd({props:{$$slots:{default:[Pi]},$$scope:{ctx:pe}}}),He=new De({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained(
    "bert-base-uncased", "bert-base-uncased"
)  # initialize Bert2Bert from pre-trained checkpoints

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
generated = model.generate(input_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, BertTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># initialize Bert2Bert from pre-trained checkpoints</span>

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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids)`}}),Ye=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L278",parametersDescription:[{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
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
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaining positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),Je=new De({props:{code:`from transformers import EncoderDecoderModel

# initialize a bert2bert from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized
model = EncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "bert-base-uncased")
# saving model after fine-tuning
model.save_pretrained("./bert2bert")
# load fine-tuned model
model = EncoderDecoderModel.from_pretrained("./bert2bert")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2bert from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)`}}),Ze=new Rn({}),Ke=new O({props:{name:"class transformers.TFEncoderDecoderModel",anchor:"transformers.TFEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L186",parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),to=new O({props:{name:"call",anchor:"transformers.TFEncoderDecoderModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L494",parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.`,name:"decoder_input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor of hidden-states at the output
of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFEncoderDecoderModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFEncoderDecoderModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFEncoderDecoderModel.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.TFEncoderDecoderModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFEncoderDecoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFEncoderDecoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFEncoderDecoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFEncoderDecoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as \`**decoder_kwargs&#x201C; for the decoder forward function.</li>
</ul>`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Te=new dd({props:{$$slots:{default:[Ai]},$$scope:{ctx:pe}}}),ro=new De({props:{code:`from transformers import TFEncoderDecoderModel, BertTokenizer

# initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = TFEncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-cased", "gpt2")

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")

# forward
input_ids = tokenizer.encode(
    "Hello, my dog is cute", add_special_tokens=True, return_tensors="tf"
)  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=input_ids)

# training
outputs = model(input_ids=input_ids, decoder_input_ids=input_ids, labels=input_ids)
loss, logits = outputs.loss, outputs.logits

# save and load from pretrained
model.save_pretrained("bert2gpt2")
model = TFEncoderDecoderModel.from_pretrained("bert2gpt2")

# generation
generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFEncoderDecoderModel, BertTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer.encode(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=input_ids, labels=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;bert2gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id)`}}),ao=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L330",parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch index checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>encoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),so=new De({props:{code:`from transformers import TFEncoderDecoderModel

# initialize a bert2gpt2 from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized
model = TFEncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "gpt2")
# saving model after fine-tuning
model.save_pretrained("./bert2gpt2")
# load fine-tuned model
model = TFEncoderDecoderModel.from_pretrained("./bert2gpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),io=new Rn({}),co=new O({props:{name:"class transformers.FlaxEncoderDecoderModel",anchor:"transformers.FlaxEncoderDecoderModel",parameters:[{name:"config",val:": EncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L301",parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),uo=new O({props:{name:"__call__",anchor:"transformers.FlaxEncoderDecoderModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L610",parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For sequence to sequence training, <code>decoder_input_ids</code> should be provided. <code>decoder_input_ids</code> should be
created outside of the model by shifting the <code>labels</code> to the right, replacing -100 by the <code>pad_token_id</code>
and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.encoder.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.decoder.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a>) and inputs.</p>
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
`}}),Ee=new dd({props:{$$slots:{default:[Ci]},$$scope:{ctx:pe}}}),go=new De({props:{code:`from transformers import FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

# load a fine-tuned bert2gpt2 model
model = FlaxEncoderDecoderModel.from_pretrained("patrickvonplaten/bert2gpt2-cnn_dailymail-fp16")
# load input & output tokenizer
tokenizer_input = BertTokenizer.from_pretrained("bert-base-cased")
tokenizer_output = GPT2Tokenizer.from_pretrained("gpt2")

article = '''Sigma Alpha Epsilon is under fire for a video showing party-bound fraternity members
singing a racist chant. SAE's national chapter suspended the students,
but University of Oklahoma President David Boren took it a step further,
saying the university's affiliation with the fraternity is permanently done.'''

input_ids = tokenizer_input(article, add_special_tokens=True, return_tensors="np").input_ids

# use GPT2's eos_token as the pad as well as eos token
model.config.eos_token_id = model.config.decoder.eos_token_id
model.config.pad_token_id = model.config.eos_token_id

sequences = model.generate(input_ids, num_beams=4, max_length=12).sequences

summary = tokenizer_output.batch_decode(sequences, skip_special_tokens=True)[0]
assert summary == "SAS Alpha Epsilon suspended Sigma Alpha Epsilon members"`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned bert2gpt2 model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2gpt2-cnn_dailymail-fp16&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load input &amp; output tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_input = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_output = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&#x27;&#x27;&#x27;Sigma Alpha Epsilon is under fire for a video showing party-bound fraternity members
<span class="hljs-meta">&gt;&gt;&gt; </span>singing a racist chant. SAE&#x27;s national chapter suspended the students,
<span class="hljs-meta">&gt;&gt;&gt; </span>but University of Oklahoma President David Boren took it a step further,
<span class="hljs-meta">&gt;&gt;&gt; </span>saying the university&#x27;s affiliation with the fraternity is permanently done.&#x27;&#x27;&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer_input(article, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use GPT2&#x27;s eos_token as the pad as well as eos token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.eos_token_id = model.config.decoder.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(input_ids, num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">12</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>summary = tokenizer_output.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> summary == <span class="hljs-string">&quot;SAS Alpha Epsilon suspended Sigma Alpha Epsilon members&quot;</span>`}}),_o=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L741",parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),bo=new De({props:{code:`from transformers import FlaxEncoderDecoderModel

# initialize a bert2gpt2 from pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = FlaxEncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-cased", "gpt2")
# saving model after fine-tuning
model.save_pretrained("./bert2gpt2")
# load fine-tuned model
model = FlaxEncoderDecoderModel.from_pretrained("./bert2gpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){m=a("meta"),F=c(),y=a("h1"),q=a("a"),j=a("span"),f(k.$$.fragment),T=c(),P=a("span"),qt=t("Encoder Decoder Models"),Gn=c(),me=a("p"),Dt=t("The "),wo=a("a"),zt=t("EncoderDecoderModel"),xt=t(` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),Un=c(),he=a("p"),$t=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),ze=a("a"),jt=t("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Ft=t(` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),Hn=c(),fe=a("p"),Pt=t("After such an "),Eo=a("a"),At=t("EncoderDecoderModel"),Ct=t(` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),Yn=c(),V=a("p"),St=t("An application of this architecture could be to leverage two pretrained "),Mo=a("a"),Nt=t("BertModel"),It=t(` as the encoder
and decoder for a summarization model as was shown in: `),xe=a("a"),Lt=t("Text Summarization with Pretrained Encoders"),Bt=t(" by Yang Liu and Mirella Lapata."),Jn=c(),W=a("p"),Ot=t("The "),sn=a("code"),Vt=t("from_pretrained()"),Wt=t(`currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),dn=a("code"),Rt=t("from_pt=True"),Gt=t(` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Zn=c(),f($e.$$.fragment),Kn=c(),R=a("p"),Ut=t("This model was contributed by "),je=a("a"),Ht=t("thomwolf"),Yt=t(`. This model\u2019s TensorFlow and Flax versions
were contributed by `),Fe=a("a"),Jt=t("ydshieh"),Zt=t("."),Qn=c(),Q=a("h2"),ue=a("a"),cn=a("span"),f(Pe.$$.fragment),Kt=c(),ln=a("span"),Qt=t("EncoderDecoderConfig"),Xn=c(),D=a("div"),f(Ae.$$.fragment),Xt=c(),ge=a("p"),qo=a("a"),er=t("EncoderDecoderConfig"),or=t(" is the configuration class to store the configuration of a "),Do=a("a"),nr=t("EncoderDecoderModel"),tr=t(`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),rr=c(),X=a("p"),ar=t("Configuration objects inherit from "),zo=a("a"),sr=t("PretrainedConfig"),dr=t(` and can be used to control the model outputs. Read the
documentation from `),xo=a("a"),ir=t("PretrainedConfig"),cr=t(" for more information."),lr=c(),pn=a("p"),pr=t("Examples:"),mr=c(),f(Ce.$$.fragment),hr=c(),_e=a("div"),f(Se.$$.fragment),fr=c(),Ne=a("p"),ur=t("Instantiate a "),$o=a("a"),gr=t("EncoderDecoderConfig"),_r=t(` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),br=c(),be=a("div"),f(Ie.$$.fragment),vr=c(),ee=a("p"),yr=t("Serializes this instance to a Python dictionary. Override the default "),mn=a("em"),kr=t("to_dict()"),Tr=t(" from "),hn=a("em"),wr=t("PretrainedConfig"),Er=t("."),et=c(),oe=a("h2"),ve=a("a"),fn=a("span"),f(Le.$$.fragment),Mr=c(),un=a("span"),qr=t("EncoderDecoderModel"),ot=c(),w=a("div"),f(Be.$$.fragment),Dr=c(),ne=a("p"),zr=t(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),jo=a("a"),xr=t("from_pretrained()"),$r=t(" function and the decoder is loaded via "),Fo=a("a"),jr=t("from_pretrained()"),Fr=t(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Pr=c(),Oe=a("p"),Ar=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ve=a("a"),Cr=t(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Sr=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Nr=c(),gn=a("p"),Ir=t(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Lr=c(),We=a("p"),Br=t("This model inherits from "),Po=a("a"),Or=t("PreTrainedModel"),Vr=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wr=c(),Re=a("p"),Rr=t("This model is also a PyTorch "),Ge=a("a"),Gr=t("torch.nn.Module"),Ur=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hr=c(),G=a("p"),Ao=a("a"),Yr=t("EncoderDecoderModel"),Jr=t(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),_n=a("em"),Zr=t("~transformers.AutoModel.from_pretrained"),Kr=t(` class method for the encoder and
:meth`),bn=a("em"),Qr=t("~transformers.AutoModelForCausalLM.from_pretrained"),Xr=t(" class method for the decoder."),ea=c(),A=a("div"),f(Ue.$$.fragment),oa=c(),te=a("p"),na=t("The "),Co=a("a"),ta=t("EncoderDecoderModel"),ra=t(" forward method, overrides the "),vn=a("code"),aa=t("__call__"),sa=t(" special method."),da=c(),f(ye.$$.fragment),ia=c(),yn=a("p"),ca=t("Examples:"),la=c(),f(He.$$.fragment),pa=c(),C=a("div"),f(Ye.$$.fragment),ma=c(),kn=a("p"),ha=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),fa=c(),re=a("p"),ua=t("The model is set in evaluation mode by default using "),Tn=a("code"),ga=t("model.eval()"),_a=t(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),wn=a("code"),ba=t("model.train()"),va=t("."),ya=c(),En=a("p"),ka=t("Example:"),Ta=c(),f(Je.$$.fragment),nt=c(),ae=a("h2"),ke=a("a"),Mn=a("span"),f(Ze.$$.fragment),wa=c(),qn=a("span"),Ea=t("TFEncoderDecoderModel"),tt=c(),E=a("div"),f(Ke.$$.fragment),Ma=c(),se=a("p"),qa=t(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),So=a("a"),Da=t("from_pretrained()"),za=t(" function and the decoder is loaded via "),No=a("a"),xa=t("from_pretrained()"),$a=t(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),ja=c(),Qe=a("p"),Fa=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Xe=a("a"),Pa=t(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Aa=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Ca=c(),Dn=a("p"),Sa=t(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Na=c(),eo=a("p"),Ia=t("This model inherits from "),Io=a("a"),La=t("TFPreTrainedModel"),Ba=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oa=c(),oo=a("p"),Va=t("This model is also a "),no=a("a"),Wa=t("tf.keras.Model"),Ra=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ga=c(),U=a("p"),Lo=a("a"),Ua=t("TFEncoderDecoderModel"),Ha=t(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),Bo=a("a"),Ya=t("from_pretrained()"),Ja=t(" class method for the encoder and "),Oo=a("a"),Za=t("from_pretrained()"),Ka=t(` class
method for the decoder.`),Qa=c(),S=a("div"),f(to.$$.fragment),Xa=c(),de=a("p"),es=t("The "),Vo=a("a"),os=t("TFEncoderDecoderModel"),ns=t(" forward method, overrides the "),zn=a("code"),ts=t("__call__"),rs=t(" special method."),as=c(),f(Te.$$.fragment),ss=c(),xn=a("p"),ds=t("Examples:"),is=c(),f(ro.$$.fragment),cs=c(),L=a("div"),f(ao.$$.fragment),ls=c(),$n=a("p"),ps=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ms=c(),jn=a("p"),hs=t("Example:"),fs=c(),f(so.$$.fragment),rt=c(),ie=a("h2"),we=a("a"),Fn=a("span"),f(io.$$.fragment),us=c(),Pn=a("span"),gs=t("FlaxEncoderDecoderModel"),at=c(),M=a("div"),f(co.$$.fragment),_s=c(),ce=a("p"),bs=t(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Wo=a("a"),vs=t("from_pretrained()"),ys=t(" function and the decoder is loaded via "),Ro=a("a"),ks=t("from_pretrained()"),Ts=t(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),ws=c(),lo=a("p"),Es=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),po=a("a"),Ms=t(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),qs=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Ds=c(),An=a("p"),zs=t(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),xs=c(),mo=a("p"),$s=t("This model inherits from "),Go=a("a"),js=t("FlaxPreTrainedModel"),Fs=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ps=c(),ho=a("p"),As=t(`This model is also a Flax Linen
`),fo=a("a"),Cs=t("flax.nn.Module"),Ss=t(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ns=c(),H=a("p"),Uo=a("a"),Is=t("FlaxEncoderDecoderModel"),Ls=t(` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),Cn=a("em"),Bs=t("~transformers.FlaxAutoModel.from_pretrained"),Os=t(` class method for the
encoder and :meth`),Sn=a("em"),Vs=t("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Ws=t(" class method for the decoder."),Rs=c(),N=a("div"),f(uo.$$.fragment),Gs=c(),le=a("p"),Us=t("The "),Ho=a("a"),Hs=t("FlaxEncoderDecoderModel"),Ys=t(" forward method, overrides the "),Nn=a("code"),Js=t("__call__"),Zs=t(" special method."),Ks=c(),f(Ee.$$.fragment),Qs=c(),In=a("p"),Xs=t("Examples:"),ed=c(),f(go.$$.fragment),od=c(),B=a("div"),f(_o.$$.fragment),nd=c(),Ln=a("p"),td=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),rd=c(),Bn=a("p"),ad=t("Example:"),sd=c(),f(bo.$$.fragment),this.h()},l(n){const p=ji('[data-svelte="svelte-1phssyn"]',document.head);m=s(p,"META",{name:!0,content:!0}),p.forEach(o),F=l(n),y=s(n,"H1",{class:!0});var vo=d(y);q=s(vo,"A",{id:!0,class:!0,href:!0});var On=d(q);j=s(On,"SPAN",{});var Vn=d(j);u(k.$$.fragment,Vn),Vn.forEach(o),On.forEach(o),T=l(vo),P=s(vo,"SPAN",{});var id=d(P);qt=r(id,"Encoder Decoder Models"),id.forEach(o),vo.forEach(o),Gn=l(n),me=s(n,"P",{});var dt=d(me);Dt=r(dt,"The "),wo=s(dt,"A",{href:!0});var cd=d(wo);zt=r(cd,"EncoderDecoderModel"),cd.forEach(o),xt=r(dt,` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),dt.forEach(o),Un=l(n),he=s(n,"P",{});var it=d(he);$t=r(it,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),ze=s(it,"A",{href:!0,rel:!0});var ld=d(ze);jt=r(ld,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),ld.forEach(o),Ft=r(it,` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),it.forEach(o),Hn=l(n),fe=s(n,"P",{});var ct=d(fe);Pt=r(ct,"After such an "),Eo=s(ct,"A",{href:!0});var pd=d(Eo);At=r(pd,"EncoderDecoderModel"),pd.forEach(o),Ct=r(ct,` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),ct.forEach(o),Yn=l(n),V=s(n,"P",{});var Yo=d(V);St=r(Yo,"An application of this architecture could be to leverage two pretrained "),Mo=s(Yo,"A",{href:!0});var md=d(Mo);Nt=r(md,"BertModel"),md.forEach(o),It=r(Yo,` as the encoder
and decoder for a summarization model as was shown in: `),xe=s(Yo,"A",{href:!0,rel:!0});var hd=d(xe);Lt=r(hd,"Text Summarization with Pretrained Encoders"),hd.forEach(o),Bt=r(Yo," by Yang Liu and Mirella Lapata."),Yo.forEach(o),Jn=l(n),W=s(n,"P",{});var Jo=d(W);Ot=r(Jo,"The "),sn=s(Jo,"CODE",{});var fd=d(sn);Vt=r(fd,"from_pretrained()"),fd.forEach(o),Wt=r(Jo,`currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),dn=s(Jo,"CODE",{});var ud=d(dn);Rt=r(ud,"from_pt=True"),ud.forEach(o),Gt=r(Jo,` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Jo.forEach(o),Zn=l(n),u($e.$$.fragment,n),Kn=l(n),R=s(n,"P",{});var Zo=d(R);Ut=r(Zo,"This model was contributed by "),je=s(Zo,"A",{href:!0,rel:!0});var gd=d(je);Ht=r(gd,"thomwolf"),gd.forEach(o),Yt=r(Zo,`. This model\u2019s TensorFlow and Flax versions
were contributed by `),Fe=s(Zo,"A",{href:!0,rel:!0});var _d=d(Fe);Jt=r(_d,"ydshieh"),_d.forEach(o),Zt=r(Zo,"."),Zo.forEach(o),Qn=l(n),Q=s(n,"H2",{class:!0});var lt=d(Q);ue=s(lt,"A",{id:!0,class:!0,href:!0});var bd=d(ue);cn=s(bd,"SPAN",{});var vd=d(cn);u(Pe.$$.fragment,vd),vd.forEach(o),bd.forEach(o),Kt=l(lt),ln=s(lt,"SPAN",{});var yd=d(ln);Qt=r(yd,"EncoderDecoderConfig"),yd.forEach(o),lt.forEach(o),Xn=l(n),D=s(n,"DIV",{class:!0});var I=d(D);u(Ae.$$.fragment,I),Xt=l(I),ge=s(I,"P",{});var Wn=d(ge);qo=s(Wn,"A",{href:!0});var kd=d(qo);er=r(kd,"EncoderDecoderConfig"),kd.forEach(o),or=r(Wn," is the configuration class to store the configuration of a "),Do=s(Wn,"A",{href:!0});var Td=d(Do);nr=r(Td,"EncoderDecoderModel"),Td.forEach(o),tr=r(Wn,`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),Wn.forEach(o),rr=l(I),X=s(I,"P",{});var Ko=d(X);ar=r(Ko,"Configuration objects inherit from "),zo=s(Ko,"A",{href:!0});var wd=d(zo);sr=r(wd,"PretrainedConfig"),wd.forEach(o),dr=r(Ko,` and can be used to control the model outputs. Read the
documentation from `),xo=s(Ko,"A",{href:!0});var Ed=d(xo);ir=r(Ed,"PretrainedConfig"),Ed.forEach(o),cr=r(Ko," for more information."),Ko.forEach(o),lr=l(I),pn=s(I,"P",{});var Md=d(pn);pr=r(Md,"Examples:"),Md.forEach(o),mr=l(I),u(Ce.$$.fragment,I),hr=l(I),_e=s(I,"DIV",{class:!0});var pt=d(_e);u(Se.$$.fragment,pt),fr=l(pt),Ne=s(pt,"P",{});var mt=d(Ne);ur=r(mt,"Instantiate a "),$o=s(mt,"A",{href:!0});var qd=d($o);gr=r(qd,"EncoderDecoderConfig"),qd.forEach(o),_r=r(mt,` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),mt.forEach(o),pt.forEach(o),br=l(I),be=s(I,"DIV",{class:!0});var ht=d(be);u(Ie.$$.fragment,ht),vr=l(ht),ee=s(ht,"P",{});var Qo=d(ee);yr=r(Qo,"Serializes this instance to a Python dictionary. Override the default "),mn=s(Qo,"EM",{});var Dd=d(mn);kr=r(Dd,"to_dict()"),Dd.forEach(o),Tr=r(Qo," from "),hn=s(Qo,"EM",{});var zd=d(hn);wr=r(zd,"PretrainedConfig"),zd.forEach(o),Er=r(Qo,"."),Qo.forEach(o),ht.forEach(o),I.forEach(o),et=l(n),oe=s(n,"H2",{class:!0});var ft=d(oe);ve=s(ft,"A",{id:!0,class:!0,href:!0});var xd=d(ve);fn=s(xd,"SPAN",{});var $d=d(fn);u(Le.$$.fragment,$d),$d.forEach(o),xd.forEach(o),Mr=l(ft),un=s(ft,"SPAN",{});var jd=d(un);qr=r(jd,"EncoderDecoderModel"),jd.forEach(o),ft.forEach(o),ot=l(n),w=s(n,"DIV",{class:!0});var z=d(w);u(Be.$$.fragment,z),Dr=l(z),ne=s(z,"P",{});var Xo=d(ne);zr=r(Xo,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),jo=s(Xo,"A",{href:!0});var Fd=d(jo);xr=r(Fd,"from_pretrained()"),Fd.forEach(o),$r=r(Xo," function and the decoder is loaded via "),Fo=s(Xo,"A",{href:!0});var Pd=d(Fo);jr=r(Pd,"from_pretrained()"),Pd.forEach(o),Fr=r(Xo,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Xo.forEach(o),Pr=l(z),Oe=s(z,"P",{});var ut=d(Oe);Ar=r(ut,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ve=s(ut,"A",{href:!0,rel:!0});var Ad=d(Ve);Cr=r(Ad,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ad.forEach(o),Sr=r(ut,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ut.forEach(o),Nr=l(z),gn=s(z,"P",{});var Cd=d(gn);Ir=r(Cd,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Cd.forEach(o),Lr=l(z),We=s(z,"P",{});var gt=d(We);Br=r(gt,"This model inherits from "),Po=s(gt,"A",{href:!0});var Sd=d(Po);Or=r(Sd,"PreTrainedModel"),Sd.forEach(o),Vr=r(gt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gt.forEach(o),Wr=l(z),Re=s(z,"P",{});var _t=d(Re);Rr=r(_t,"This model is also a PyTorch "),Ge=s(_t,"A",{href:!0,rel:!0});var Nd=d(Ge);Gr=r(Nd,"torch.nn.Module"),Nd.forEach(o),Ur=r(_t,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_t.forEach(o),Hr=l(z),G=s(z,"P",{});var yo=d(G);Ao=s(yo,"A",{href:!0});var Id=d(Ao);Yr=r(Id,"EncoderDecoderModel"),Id.forEach(o),Jr=r(yo,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),_n=s(yo,"EM",{});var Ld=d(_n);Zr=r(Ld,"~transformers.AutoModel.from_pretrained"),Ld.forEach(o),Kr=r(yo,` class method for the encoder and
:meth`),bn=s(yo,"EM",{});var Bd=d(bn);Qr=r(Bd,"~transformers.AutoModelForCausalLM.from_pretrained"),Bd.forEach(o),Xr=r(yo," class method for the decoder."),yo.forEach(o),ea=l(z),A=s(z,"DIV",{class:!0});var Y=d(A);u(Ue.$$.fragment,Y),oa=l(Y),te=s(Y,"P",{});var en=d(te);na=r(en,"The "),Co=s(en,"A",{href:!0});var Od=d(Co);ta=r(Od,"EncoderDecoderModel"),Od.forEach(o),ra=r(en," forward method, overrides the "),vn=s(en,"CODE",{});var Vd=d(vn);aa=r(Vd,"__call__"),Vd.forEach(o),sa=r(en," special method."),en.forEach(o),da=l(Y),u(ye.$$.fragment,Y),ia=l(Y),yn=s(Y,"P",{});var Wd=d(yn);ca=r(Wd,"Examples:"),Wd.forEach(o),la=l(Y),u(He.$$.fragment,Y),Y.forEach(o),pa=l(z),C=s(z,"DIV",{class:!0});var J=d(C);u(Ye.$$.fragment,J),ma=l(J),kn=s(J,"P",{});var Rd=d(kn);ha=r(Rd,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Rd.forEach(o),fa=l(J),re=s(J,"P",{});var on=d(re);ua=r(on,"The model is set in evaluation mode by default using "),Tn=s(on,"CODE",{});var Gd=d(Tn);ga=r(Gd,"model.eval()"),Gd.forEach(o),_a=r(on,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),wn=s(on,"CODE",{});var Ud=d(wn);ba=r(Ud,"model.train()"),Ud.forEach(o),va=r(on,"."),on.forEach(o),ya=l(J),En=s(J,"P",{});var Hd=d(En);ka=r(Hd,"Example:"),Hd.forEach(o),Ta=l(J),u(Je.$$.fragment,J),J.forEach(o),z.forEach(o),nt=l(n),ae=s(n,"H2",{class:!0});var bt=d(ae);ke=s(bt,"A",{id:!0,class:!0,href:!0});var Yd=d(ke);Mn=s(Yd,"SPAN",{});var Jd=d(Mn);u(Ze.$$.fragment,Jd),Jd.forEach(o),Yd.forEach(o),wa=l(bt),qn=s(bt,"SPAN",{});var Zd=d(qn);Ea=r(Zd,"TFEncoderDecoderModel"),Zd.forEach(o),bt.forEach(o),tt=l(n),E=s(n,"DIV",{class:!0});var x=d(E);u(Ke.$$.fragment,x),Ma=l(x),se=s(x,"P",{});var nn=d(se);qa=r(nn,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),So=s(nn,"A",{href:!0});var Kd=d(So);Da=r(Kd,"from_pretrained()"),Kd.forEach(o),za=r(nn," function and the decoder is loaded via "),No=s(nn,"A",{href:!0});var Qd=d(No);xa=r(Qd,"from_pretrained()"),Qd.forEach(o),$a=r(nn,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),nn.forEach(o),ja=l(x),Qe=s(x,"P",{});var vt=d(Qe);Fa=r(vt,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Xe=s(vt,"A",{href:!0,rel:!0});var Xd=d(Xe);Pa=r(Xd,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Xd.forEach(o),Aa=r(vt,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),vt.forEach(o),Ca=l(x),Dn=s(x,"P",{});var ei=d(Dn);Sa=r(ei,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),ei.forEach(o),Na=l(x),eo=s(x,"P",{});var yt=d(eo);Ia=r(yt,"This model inherits from "),Io=s(yt,"A",{href:!0});var oi=d(Io);La=r(oi,"TFPreTrainedModel"),oi.forEach(o),Ba=r(yt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yt.forEach(o),Oa=l(x),oo=s(x,"P",{});var kt=d(oo);Va=r(kt,"This model is also a "),no=s(kt,"A",{href:!0,rel:!0});var ni=d(no);Wa=r(ni,"tf.keras.Model"),ni.forEach(o),Ra=r(kt,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kt.forEach(o),Ga=l(x),U=s(x,"P",{});var ko=d(U);Lo=s(ko,"A",{href:!0});var ti=d(Lo);Ua=r(ti,"TFEncoderDecoderModel"),ti.forEach(o),Ha=r(ko,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),Bo=s(ko,"A",{href:!0});var ri=d(Bo);Ya=r(ri,"from_pretrained()"),ri.forEach(o),Ja=r(ko," class method for the encoder and "),Oo=s(ko,"A",{href:!0});var ai=d(Oo);Za=r(ai,"from_pretrained()"),ai.forEach(o),Ka=r(ko,` class
method for the decoder.`),ko.forEach(o),Qa=l(x),S=s(x,"DIV",{class:!0});var Z=d(S);u(to.$$.fragment,Z),Xa=l(Z),de=s(Z,"P",{});var tn=d(de);es=r(tn,"The "),Vo=s(tn,"A",{href:!0});var si=d(Vo);os=r(si,"TFEncoderDecoderModel"),si.forEach(o),ns=r(tn," forward method, overrides the "),zn=s(tn,"CODE",{});var di=d(zn);ts=r(di,"__call__"),di.forEach(o),rs=r(tn," special method."),tn.forEach(o),as=l(Z),u(Te.$$.fragment,Z),ss=l(Z),xn=s(Z,"P",{});var ii=d(xn);ds=r(ii,"Examples:"),ii.forEach(o),is=l(Z),u(ro.$$.fragment,Z),Z.forEach(o),cs=l(x),L=s(x,"DIV",{class:!0});var Me=d(L);u(ao.$$.fragment,Me),ls=l(Me),$n=s(Me,"P",{});var ci=d($n);ps=r(ci,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ci.forEach(o),ms=l(Me),jn=s(Me,"P",{});var li=d(jn);hs=r(li,"Example:"),li.forEach(o),fs=l(Me),u(so.$$.fragment,Me),Me.forEach(o),x.forEach(o),rt=l(n),ie=s(n,"H2",{class:!0});var Tt=d(ie);we=s(Tt,"A",{id:!0,class:!0,href:!0});var pi=d(we);Fn=s(pi,"SPAN",{});var mi=d(Fn);u(io.$$.fragment,mi),mi.forEach(o),pi.forEach(o),us=l(Tt),Pn=s(Tt,"SPAN",{});var hi=d(Pn);gs=r(hi,"FlaxEncoderDecoderModel"),hi.forEach(o),Tt.forEach(o),at=l(n),M=s(n,"DIV",{class:!0});var $=d(M);u(co.$$.fragment,$),_s=l($),ce=s($,"P",{});var rn=d(ce);bs=r(rn,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Wo=s(rn,"A",{href:!0});var fi=d(Wo);vs=r(fi,"from_pretrained()"),fi.forEach(o),ys=r(rn," function and the decoder is loaded via "),Ro=s(rn,"A",{href:!0});var ui=d(Ro);ks=r(ui,"from_pretrained()"),ui.forEach(o),Ts=r(rn,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),rn.forEach(o),ws=l($),lo=s($,"P",{});var wt=d(lo);Es=r(wt,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),po=s(wt,"A",{href:!0,rel:!0});var gi=d(po);Ms=r(gi,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),gi.forEach(o),qs=r(wt,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),wt.forEach(o),Ds=l($),An=s($,"P",{});var _i=d(An);zs=r(_i,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),_i.forEach(o),xs=l($),mo=s($,"P",{});var Et=d(mo);$s=r(Et,"This model inherits from "),Go=s(Et,"A",{href:!0});var bi=d(Go);js=r(bi,"FlaxPreTrainedModel"),bi.forEach(o),Fs=r(Et,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Et.forEach(o),Ps=l($),ho=s($,"P",{});var Mt=d(ho);As=r(Mt,`This model is also a Flax Linen
`),fo=s(Mt,"A",{href:!0,rel:!0});var vi=d(fo);Cs=r(vi,"flax.nn.Module"),vi.forEach(o),Ss=r(Mt,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mt.forEach(o),Ns=l($),H=s($,"P",{});var To=d(H);Uo=s(To,"A",{href:!0});var yi=d(Uo);Is=r(yi,"FlaxEncoderDecoderModel"),yi.forEach(o),Ls=r(To,` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),Cn=s(To,"EM",{});var ki=d(Cn);Bs=r(ki,"~transformers.FlaxAutoModel.from_pretrained"),ki.forEach(o),Os=r(To,` class method for the
encoder and :meth`),Sn=s(To,"EM",{});var Ti=d(Sn);Vs=r(Ti,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Ti.forEach(o),Ws=r(To," class method for the decoder."),To.forEach(o),Rs=l($),N=s($,"DIV",{class:!0});var K=d(N);u(uo.$$.fragment,K),Gs=l(K),le=s(K,"P",{});var an=d(le);Us=r(an,"The "),Ho=s(an,"A",{href:!0});var wi=d(Ho);Hs=r(wi,"FlaxEncoderDecoderModel"),wi.forEach(o),Ys=r(an," forward method, overrides the "),Nn=s(an,"CODE",{});var Ei=d(Nn);Js=r(Ei,"__call__"),Ei.forEach(o),Zs=r(an," special method."),an.forEach(o),Ks=l(K),u(Ee.$$.fragment,K),Qs=l(K),In=s(K,"P",{});var Mi=d(In);Xs=r(Mi,"Examples:"),Mi.forEach(o),ed=l(K),u(go.$$.fragment,K),K.forEach(o),od=l($),B=s($,"DIV",{class:!0});var qe=d(B);u(_o.$$.fragment,qe),nd=l(qe),Ln=s(qe,"P",{});var qi=d(Ln);td=r(qi,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),qi.forEach(o),rd=l(qe),Bn=s(qe,"P",{});var Di=d(Bn);ad=r(Di,"Example:"),Di.forEach(o),sd=l(qe),u(bo.$$.fragment,qe),qe.forEach(o),$.forEach(o),this.h()},h(){i(m,"name","hf:doc:metadata"),i(m,"content",JSON.stringify(Ni)),i(q,"id","encoder-decoder-models"),i(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(q,"href","#encoder-decoder-models"),i(y,"class","relative group"),i(wo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),i(ze,"href","https://arxiv.org/abs/1907.12461"),i(ze,"rel","nofollow"),i(Eo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),i(Mo,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),i(xe,"href","https://arxiv.org/abs/1908.08345"),i(xe,"rel","nofollow"),i(je,"href","https://github.com/thomwolf"),i(je,"rel","nofollow"),i(Fe,"href","https://github.com/ydshieh"),i(Fe,"rel","nofollow"),i(ue,"id","transformers.EncoderDecoderConfig"),i(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(ue,"href","#transformers.EncoderDecoderConfig"),i(Q,"class","relative group"),i(qo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),i(Do,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),i(zo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),i(xo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),i($o,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),i(_e,"class","docstring"),i(be,"class","docstring"),i(D,"class","docstring"),i(ve,"id","transformers.EncoderDecoderModel"),i(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(ve,"href","#transformers.EncoderDecoderModel"),i(oe,"class","relative group"),i(jo,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),i(Fo,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),i(Ve,"href","https://arxiv.org/abs/1907.12461"),i(Ve,"rel","nofollow"),i(Po,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),i(Ge,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),i(Ge,"rel","nofollow"),i(Ao,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),i(Co,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),i(A,"class","docstring"),i(C,"class","docstring"),i(w,"class","docstring"),i(ke,"id","transformers.TFEncoderDecoderModel"),i(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(ke,"href","#transformers.TFEncoderDecoderModel"),i(ae,"class","relative group"),i(So,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),i(No,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),i(Xe,"href","https://arxiv.org/abs/1907.12461"),i(Xe,"rel","nofollow"),i(Io,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),i(no,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),i(no,"rel","nofollow"),i(Lo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),i(Bo,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),i(Oo,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),i(Vo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),i(S,"class","docstring"),i(L,"class","docstring"),i(E,"class","docstring"),i(we,"id","transformers.FlaxEncoderDecoderModel"),i(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(we,"href","#transformers.FlaxEncoderDecoderModel"),i(ie,"class","relative group"),i(Wo,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),i(Ro,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),i(po,"href","https://arxiv.org/abs/1907.12461"),i(po,"rel","nofollow"),i(Go,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),i(fo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),i(fo,"rel","nofollow"),i(Uo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),i(Ho,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),i(N,"class","docstring"),i(B,"class","docstring"),i(M,"class","docstring")},m(n,p){e(document.head,m),h(n,F,p),h(n,y,p),e(y,q),e(q,j),g(k,j,null),e(y,T),e(y,P),e(P,qt),h(n,Gn,p),h(n,me,p),e(me,Dt),e(me,wo),e(wo,zt),e(me,xt),h(n,Un,p),h(n,he,p),e(he,$t),e(he,ze),e(ze,jt),e(he,Ft),h(n,Hn,p),h(n,fe,p),e(fe,Pt),e(fe,Eo),e(Eo,At),e(fe,Ct),h(n,Yn,p),h(n,V,p),e(V,St),e(V,Mo),e(Mo,Nt),e(V,It),e(V,xe),e(xe,Lt),e(V,Bt),h(n,Jn,p),h(n,W,p),e(W,Ot),e(W,sn),e(sn,Vt),e(W,Wt),e(W,dn),e(dn,Rt),e(W,Gt),h(n,Zn,p),g($e,n,p),h(n,Kn,p),h(n,R,p),e(R,Ut),e(R,je),e(je,Ht),e(R,Yt),e(R,Fe),e(Fe,Jt),e(R,Zt),h(n,Qn,p),h(n,Q,p),e(Q,ue),e(ue,cn),g(Pe,cn,null),e(Q,Kt),e(Q,ln),e(ln,Qt),h(n,Xn,p),h(n,D,p),g(Ae,D,null),e(D,Xt),e(D,ge),e(ge,qo),e(qo,er),e(ge,or),e(ge,Do),e(Do,nr),e(ge,tr),e(D,rr),e(D,X),e(X,ar),e(X,zo),e(zo,sr),e(X,dr),e(X,xo),e(xo,ir),e(X,cr),e(D,lr),e(D,pn),e(pn,pr),e(D,mr),g(Ce,D,null),e(D,hr),e(D,_e),g(Se,_e,null),e(_e,fr),e(_e,Ne),e(Ne,ur),e(Ne,$o),e($o,gr),e(Ne,_r),e(D,br),e(D,be),g(Ie,be,null),e(be,vr),e(be,ee),e(ee,yr),e(ee,mn),e(mn,kr),e(ee,Tr),e(ee,hn),e(hn,wr),e(ee,Er),h(n,et,p),h(n,oe,p),e(oe,ve),e(ve,fn),g(Le,fn,null),e(oe,Mr),e(oe,un),e(un,qr),h(n,ot,p),h(n,w,p),g(Be,w,null),e(w,Dr),e(w,ne),e(ne,zr),e(ne,jo),e(jo,xr),e(ne,$r),e(ne,Fo),e(Fo,jr),e(ne,Fr),e(w,Pr),e(w,Oe),e(Oe,Ar),e(Oe,Ve),e(Ve,Cr),e(Oe,Sr),e(w,Nr),e(w,gn),e(gn,Ir),e(w,Lr),e(w,We),e(We,Br),e(We,Po),e(Po,Or),e(We,Vr),e(w,Wr),e(w,Re),e(Re,Rr),e(Re,Ge),e(Ge,Gr),e(Re,Ur),e(w,Hr),e(w,G),e(G,Ao),e(Ao,Yr),e(G,Jr),e(G,_n),e(_n,Zr),e(G,Kr),e(G,bn),e(bn,Qr),e(G,Xr),e(w,ea),e(w,A),g(Ue,A,null),e(A,oa),e(A,te),e(te,na),e(te,Co),e(Co,ta),e(te,ra),e(te,vn),e(vn,aa),e(te,sa),e(A,da),g(ye,A,null),e(A,ia),e(A,yn),e(yn,ca),e(A,la),g(He,A,null),e(w,pa),e(w,C),g(Ye,C,null),e(C,ma),e(C,kn),e(kn,ha),e(C,fa),e(C,re),e(re,ua),e(re,Tn),e(Tn,ga),e(re,_a),e(re,wn),e(wn,ba),e(re,va),e(C,ya),e(C,En),e(En,ka),e(C,Ta),g(Je,C,null),h(n,nt,p),h(n,ae,p),e(ae,ke),e(ke,Mn),g(Ze,Mn,null),e(ae,wa),e(ae,qn),e(qn,Ea),h(n,tt,p),h(n,E,p),g(Ke,E,null),e(E,Ma),e(E,se),e(se,qa),e(se,So),e(So,Da),e(se,za),e(se,No),e(No,xa),e(se,$a),e(E,ja),e(E,Qe),e(Qe,Fa),e(Qe,Xe),e(Xe,Pa),e(Qe,Aa),e(E,Ca),e(E,Dn),e(Dn,Sa),e(E,Na),e(E,eo),e(eo,Ia),e(eo,Io),e(Io,La),e(eo,Ba),e(E,Oa),e(E,oo),e(oo,Va),e(oo,no),e(no,Wa),e(oo,Ra),e(E,Ga),e(E,U),e(U,Lo),e(Lo,Ua),e(U,Ha),e(U,Bo),e(Bo,Ya),e(U,Ja),e(U,Oo),e(Oo,Za),e(U,Ka),e(E,Qa),e(E,S),g(to,S,null),e(S,Xa),e(S,de),e(de,es),e(de,Vo),e(Vo,os),e(de,ns),e(de,zn),e(zn,ts),e(de,rs),e(S,as),g(Te,S,null),e(S,ss),e(S,xn),e(xn,ds),e(S,is),g(ro,S,null),e(E,cs),e(E,L),g(ao,L,null),e(L,ls),e(L,$n),e($n,ps),e(L,ms),e(L,jn),e(jn,hs),e(L,fs),g(so,L,null),h(n,rt,p),h(n,ie,p),e(ie,we),e(we,Fn),g(io,Fn,null),e(ie,us),e(ie,Pn),e(Pn,gs),h(n,at,p),h(n,M,p),g(co,M,null),e(M,_s),e(M,ce),e(ce,bs),e(ce,Wo),e(Wo,vs),e(ce,ys),e(ce,Ro),e(Ro,ks),e(ce,Ts),e(M,ws),e(M,lo),e(lo,Es),e(lo,po),e(po,Ms),e(lo,qs),e(M,Ds),e(M,An),e(An,zs),e(M,xs),e(M,mo),e(mo,$s),e(mo,Go),e(Go,js),e(mo,Fs),e(M,Ps),e(M,ho),e(ho,As),e(ho,fo),e(fo,Cs),e(ho,Ss),e(M,Ns),e(M,H),e(H,Uo),e(Uo,Is),e(H,Ls),e(H,Cn),e(Cn,Bs),e(H,Os),e(H,Sn),e(Sn,Vs),e(H,Ws),e(M,Rs),e(M,N),g(uo,N,null),e(N,Gs),e(N,le),e(le,Us),e(le,Ho),e(Ho,Hs),e(le,Ys),e(le,Nn),e(Nn,Js),e(le,Zs),e(N,Ks),g(Ee,N,null),e(N,Qs),e(N,In),e(In,Xs),e(N,ed),g(go,N,null),e(M,od),e(M,B),g(_o,B,null),e(B,nd),e(B,Ln),e(Ln,td),e(B,rd),e(B,Bn),e(Bn,ad),e(B,sd),g(bo,B,null),st=!0},p(n,[p]){const vo={};p&2&&(vo.$$scope={dirty:p,ctx:n}),ye.$set(vo);const On={};p&2&&(On.$$scope={dirty:p,ctx:n}),Te.$set(On);const Vn={};p&2&&(Vn.$$scope={dirty:p,ctx:n}),Ee.$set(Vn)},i(n){st||(_(k.$$.fragment,n),_($e.$$.fragment,n),_(Pe.$$.fragment,n),_(Ae.$$.fragment,n),_(Ce.$$.fragment,n),_(Se.$$.fragment,n),_(Ie.$$.fragment,n),_(Le.$$.fragment,n),_(Be.$$.fragment,n),_(Ue.$$.fragment,n),_(ye.$$.fragment,n),_(He.$$.fragment,n),_(Ye.$$.fragment,n),_(Je.$$.fragment,n),_(Ze.$$.fragment,n),_(Ke.$$.fragment,n),_(to.$$.fragment,n),_(Te.$$.fragment,n),_(ro.$$.fragment,n),_(ao.$$.fragment,n),_(so.$$.fragment,n),_(io.$$.fragment,n),_(co.$$.fragment,n),_(uo.$$.fragment,n),_(Ee.$$.fragment,n),_(go.$$.fragment,n),_(_o.$$.fragment,n),_(bo.$$.fragment,n),st=!0)},o(n){b(k.$$.fragment,n),b($e.$$.fragment,n),b(Pe.$$.fragment,n),b(Ae.$$.fragment,n),b(Ce.$$.fragment,n),b(Se.$$.fragment,n),b(Ie.$$.fragment,n),b(Le.$$.fragment,n),b(Be.$$.fragment,n),b(Ue.$$.fragment,n),b(ye.$$.fragment,n),b(He.$$.fragment,n),b(Ye.$$.fragment,n),b(Je.$$.fragment,n),b(Ze.$$.fragment,n),b(Ke.$$.fragment,n),b(to.$$.fragment,n),b(Te.$$.fragment,n),b(ro.$$.fragment,n),b(ao.$$.fragment,n),b(so.$$.fragment,n),b(io.$$.fragment,n),b(co.$$.fragment,n),b(uo.$$.fragment,n),b(Ee.$$.fragment,n),b(go.$$.fragment,n),b(_o.$$.fragment,n),b(bo.$$.fragment,n),st=!1},d(n){o(m),n&&o(F),n&&o(y),v(k),n&&o(Gn),n&&o(me),n&&o(Un),n&&o(he),n&&o(Hn),n&&o(fe),n&&o(Yn),n&&o(V),n&&o(Jn),n&&o(W),n&&o(Zn),v($e,n),n&&o(Kn),n&&o(R),n&&o(Qn),n&&o(Q),v(Pe),n&&o(Xn),n&&o(D),v(Ae),v(Ce),v(Se),v(Ie),n&&o(et),n&&o(oe),v(Le),n&&o(ot),n&&o(w),v(Be),v(Ue),v(ye),v(He),v(Ye),v(Je),n&&o(nt),n&&o(ae),v(Ze),n&&o(tt),n&&o(E),v(Ke),v(to),v(Te),v(ro),v(ao),v(so),n&&o(rt),n&&o(ie),v(io),n&&o(at),n&&o(M),v(co),v(uo),v(Ee),v(go),v(_o),v(bo)}}}const Ni={local:"encoder-decoder-models",sections:[{local:"transformers.EncoderDecoderConfig",title:"EncoderDecoderConfig"},{local:"transformers.EncoderDecoderModel",title:"EncoderDecoderModel"},{local:"transformers.TFEncoderDecoderModel",title:"TFEncoderDecoderModel"},{local:"transformers.FlaxEncoderDecoderModel",title:"FlaxEncoderDecoderModel"}],title:"Encoder Decoder Models"};function Ii(pe){return Fi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ri extends zi{constructor(m){super();xi(this,m,Ii,Si,$i,{})}}export{Ri as default,Ni as metadata};
