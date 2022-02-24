import{S as xi,i as ji,s as $i,e as a,k as i,w as u,t as n,M as qi,c as s,d as o,m as c,a as d,x as g,h as r,b as l,F as e,g as h,y as _,q as b,o as v,B as y}from"../../chunks/vendor-4833417e.js";import{T as dd}from"../../chunks/Tip-fffd6df1.js";import{D as O}from"../../chunks/Docstring-44c5af16.js";import{C as Me}from"../../chunks/CodeBlock-90ffda97.js";import{I as Rt}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-04a16537.js";function Pi(Q){let m,x,f,w,P;return{c(){m=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),w=n("Module"),P=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){m=s(k,"P",{});var T=d(m);x=r(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(T,"CODE",{});var F=d(f);w=r(F,"Module"),F.forEach(o),P=r(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(k,T){h(k,m,T),e(m,x),e(m,f),e(f,w),e(m,P)},d(k){k&&o(m)}}}function Fi(Q){let m,x,f,w,P;return{c(){m=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),w=n("Module"),P=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){m=s(k,"P",{});var T=d(m);x=r(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(T,"CODE",{});var F=d(f);w=r(F,"Module"),F.forEach(o),P=r(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(k,T){h(k,m,T),e(m,x),e(m,f),e(f,w),e(m,P)},d(k){k&&o(m)}}}function Ci(Q){let m,x,f,w,P;return{c(){m=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),w=n("Module"),P=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){m=s(k,"P",{});var T=d(m);x=r(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(T,"CODE",{});var F=d(f);w=r(F,"Module"),F.forEach(o),P=r(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(k,T){h(k,m,T),e(m,x),e(m,f),e(f,w),e(m,P)},d(k){k&&o(m)}}}function Ai(Q){let m,x,f,w,P,k,T,F,zn,Gt,me,Mn,wo,xn,jn,Ut,he,$n,xe,qn,Pn,Vt,fe,Fn,Eo,Cn,An,Ht,W,Sn,Do,Nn,In,je,Ln,Bn,Yt,R,On,Qo,Wn,Rn,Xo,Gn,Un,Jt,$e,Zt,G,Vn,qe,Hn,Yn,Pe,Jn,Zn,Kt,X,ue,et,Fe,Kn,ot,Qn,Qt,M,Ce,Xn,ge,zo,er,or,Mo,tr,nr,rr,ee,ar,xo,sr,dr,jo,ir,cr,lr,tt,pr,mr,Ae,hr,_e,Se,fr,Ne,ur,$o,gr,_r,br,be,Ie,vr,oe,yr,nt,kr,Tr,rt,wr,Er,Xt,te,ve,at,Le,Dr,st,zr,en,E,Be,Mr,ne,xr,dt,jr,$r,it,qr,Pr,Fr,Oe,Cr,We,Ar,Sr,Nr,ct,Ir,Lr,Re,Br,qo,Or,Wr,Rr,Ge,Gr,Ue,Ur,Vr,Hr,U,Po,Yr,Jr,lt,Zr,Kr,pt,Qr,Xr,ea,C,Ve,oa,re,ta,Fo,na,ra,mt,aa,sa,da,ye,ia,ht,ca,la,He,pa,A,Ye,ma,ft,ha,fa,ae,ua,ut,ga,_a,gt,ba,va,ya,_t,ka,Ta,Je,on,se,ke,bt,Ze,wa,vt,Ea,tn,D,Ke,Da,de,za,yt,Ma,xa,kt,ja,$a,qa,Qe,Pa,Xe,Fa,Ca,Aa,Tt,Sa,Na,eo,Ia,Co,La,Ba,Oa,oo,Wa,to,Ra,Ga,Ua,V,Ao,Va,Ha,wt,Ya,Ja,Et,Za,Ka,Qa,S,no,Xa,ie,es,So,os,ts,Dt,ns,rs,as,Te,ss,zt,ds,is,ro,cs,L,ao,ls,Mt,ps,ms,xt,hs,fs,so,nn,ce,we,jt,io,us,$t,gs,rn,z,co,_s,le,bs,qt,vs,ys,Pt,ks,Ts,ws,lo,Es,po,Ds,zs,Ms,Ft,xs,js,mo,$s,No,qs,Ps,Fs,ho,Cs,fo,As,Ss,Ns,H,Io,Is,Ls,Ct,Bs,Os,At,Ws,Rs,Gs,N,uo,Us,pe,Vs,Lo,Hs,Ys,St,Js,Zs,Ks,Ee,Qs,Nt,Xs,ed,go,od,B,_o,td,It,nd,rd,Lt,ad,sd,bo,an;return k=new Rt({}),$e=new Me({props:{code:`# a workaround to load from pytorch checkpoint
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
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config = _model.config`}}),Fe=new Rt({}),Ce=new O({props:{name:"class transformers.EncoderDecoderConfig",anchor:"transformers.EncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L26",parametersDescription:[{anchor:"transformers.EncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}]}}),Ae=new Me({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

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
model = EncoderDecoderModel.from_pretrained("my-model", config=encoder_decoder_config),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, EncoderDecoderConfig, EncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),Se=new O({props:{name:"from_encoder_decoder_configs",anchor:"transformers.EncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L91",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a></p>
`}}),Ie=new O({props:{name:"to_dict",anchor:"transformers.EncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L108",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),Le=new Rt({}),Be=new O({props:{name:"class transformers.EncoderDecoderModel",anchor:"transformers.EncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L166",parametersDescription:[{anchor:"transformers.EncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ve=new O({props:{name:"forward",anchor:"transformers.EncoderDecoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L430",parametersDescription:[{anchor:"transformers.EncoderDecoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
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
`}}),ye=new dd({props:{$$slots:{default:[Pi]},$$scope:{ctx:Q}}}),He=new Me({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer
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
generated = model.generate(input_ids),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, BertTokenizer
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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids)`}}),Ye=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L279",parametersDescription:[{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
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
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaining positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),Je=new Me({props:{code:`from transformers import EncoderDecoderModel

# initialize a bert2bert from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized
model = EncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "bert-base-uncased")
# saving model after fine-tuning
model.save_pretrained("./bert2bert")
# load fine-tuned model
model = EncoderDecoderModel.from_pretrained("./bert2bert"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2bert from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)`}}),Ze=new Rt({}),Ke=new O({props:{name:"class transformers.TFEncoderDecoderModel",anchor:"transformers.TFEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L186",parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),no=new O({props:{name:"call",anchor:"transformers.TFEncoderDecoderModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L494",parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
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
`}}),Te=new dd({props:{$$slots:{default:[Fi]},$$scope:{ctx:Q}}}),ro=new Me({props:{code:`from transformers import TFEncoderDecoderModel, BertTokenizer

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
generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFEncoderDecoderModel, BertTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id)`}}),ao=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L330",parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch index checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>encoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),so=new Me({props:{code:`from transformers import TFEncoderDecoderModel

# initialize a bert2gpt2 from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized
model = TFEncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "gpt2")
# saving model after fine-tuning
model.save_pretrained("./bert2gpt2")
# load fine-tuned model
model = TFEncoderDecoderModel.from_pretrained("./bert2gpt2"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),io=new Rt({}),co=new O({props:{name:"class transformers.FlaxEncoderDecoderModel",anchor:"transformers.FlaxEncoderDecoderModel",parameters:[{name:"config",val:": EncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L302",parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),uo=new O({props:{name:"__call__",anchor:"transformers.FlaxEncoderDecoderModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L611",parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For sequence to sequence training, <code>decoder_input_ids</code> should be provided. If no <code>decoder_input_ids</code> is
provided, the model will create this tensor by shifting the <code>input_ids</code> to the right for denoising
pre-training.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
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
`}}),Ee=new dd({props:{$$slots:{default:[Ci]},$$scope:{ctx:Q}}}),go=new Me({props:{code:`from transformers import FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

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
assert summary == "SAS Alpha Epsilon suspended Sigma Alpha Epsilon members",`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> summary == <span class="hljs-string">&quot;SAS Alpha Epsilon suspended Sigma Alpha Epsilon members&quot;</span>`}}),_o=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L737",parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),bo=new Me({props:{code:`from transformers import FlaxEncoderDecoderModel

# initialize a bert2gpt2 from pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = FlaxEncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-cased", "gpt2")
# saving model after fine-tuning
model.save_pretrained("./bert2gpt2")
# load fine-tuned model
model = FlaxEncoderDecoderModel.from_pretrained("./bert2gpt2"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){m=a("meta"),x=i(),f=a("h1"),w=a("a"),P=a("span"),u(k.$$.fragment),T=i(),F=a("span"),zn=n("Encoder Decoder Models"),Gt=i(),me=a("p"),Mn=n("The "),wo=a("a"),xn=n("EncoderDecoderModel"),jn=n(` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),Ut=i(),he=a("p"),$n=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),xe=a("a"),qn=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Pn=n(` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),Vt=i(),fe=a("p"),Fn=n("After such an "),Eo=a("a"),Cn=n("EncoderDecoderModel"),An=n(` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),Ht=i(),W=a("p"),Sn=n("An application of this architecture could be to leverage two pretrained "),Do=a("a"),Nn=n("BertModel"),In=n(` as the encoder
and decoder for a summarization model as was shown in: `),je=a("a"),Ln=n("Text Summarization with Pretrained Encoders"),Bn=n(" by Yang Liu and Mirella Lapata."),Yt=i(),R=a("p"),On=n("The "),Qo=a("code"),Wn=n("from_pretrained()"),Rn=n(`currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),Xo=a("code"),Gn=n("from_pt=True"),Un=n(` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Jt=i(),u($e.$$.fragment),Zt=i(),G=a("p"),Vn=n("This model was contributed by "),qe=a("a"),Hn=n("thomwolf"),Yn=n(`. This model\u2019s TensorFlow and Flax versions
were contributed by `),Pe=a("a"),Jn=n("ydshieh"),Zn=n("."),Kt=i(),X=a("h2"),ue=a("a"),et=a("span"),u(Fe.$$.fragment),Kn=i(),ot=a("span"),Qn=n("EncoderDecoderConfig"),Qt=i(),M=a("div"),u(Ce.$$.fragment),Xn=i(),ge=a("p"),zo=a("a"),er=n("EncoderDecoderConfig"),or=n(" is the configuration class to store the configuration of a "),Mo=a("a"),tr=n("EncoderDecoderModel"),nr=n(`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),rr=i(),ee=a("p"),ar=n("Configuration objects inherit from "),xo=a("a"),sr=n("PretrainedConfig"),dr=n(` and can be used to control the model outputs. Read the
documentation from `),jo=a("a"),ir=n("PretrainedConfig"),cr=n(" for more information."),lr=i(),tt=a("p"),pr=n("Examples:"),mr=i(),u(Ae.$$.fragment),hr=i(),_e=a("div"),u(Se.$$.fragment),fr=i(),Ne=a("p"),ur=n("Instantiate a "),$o=a("a"),gr=n("EncoderDecoderConfig"),_r=n(` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),br=i(),be=a("div"),u(Ie.$$.fragment),vr=i(),oe=a("p"),yr=n("Serializes this instance to a Python dictionary. Override the default "),nt=a("em"),kr=n("to_dict()"),Tr=n(" from "),rt=a("em"),wr=n("PretrainedConfig"),Er=n("."),Xt=i(),te=a("h2"),ve=a("a"),at=a("span"),u(Le.$$.fragment),Dr=i(),st=a("span"),zr=n("EncoderDecoderModel"),en=i(),E=a("div"),u(Be.$$.fragment),Mr=i(),ne=a("p"),xr=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),dt=a("code"),jr=n("from_pretrained()"),$r=n("function and the decoder is loaded via "),it=a("code"),qr=n("from_pretrained()"),Pr=n(`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Fr=i(),Oe=a("p"),Cr=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),We=a("a"),Ar=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Sr=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Nr=i(),ct=a("p"),Ir=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Lr=i(),Re=a("p"),Br=n("This model inherits from "),qo=a("a"),Or=n("PreTrainedModel"),Wr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rr=i(),Ge=a("p"),Gr=n("This model is also a PyTorch "),Ue=a("a"),Ur=n("torch.nn.Module"),Vr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hr=i(),U=a("p"),Po=a("a"),Yr=n("EncoderDecoderModel"),Jr=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),lt=a("em"),Zr=n("~transformers.AutoModel.from_pretrained"),Kr=n(` class method for the encoder and
:meth`),pt=a("em"),Qr=n("~transformers.AutoModelForCausalLM.from_pretrained"),Xr=n(" class method for the decoder."),ea=i(),C=a("div"),u(Ve.$$.fragment),oa=i(),re=a("p"),ta=n("The "),Fo=a("a"),na=n("EncoderDecoderModel"),ra=n(" forward method, overrides the "),mt=a("code"),aa=n("__call__"),sa=n(" special method."),da=i(),u(ye.$$.fragment),ia=i(),ht=a("p"),ca=n("Examples:"),la=i(),u(He.$$.fragment),pa=i(),A=a("div"),u(Ye.$$.fragment),ma=i(),ft=a("p"),ha=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),fa=i(),ae=a("p"),ua=n("The model is set in evaluation mode by default using "),ut=a("code"),ga=n("model.eval()"),_a=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),gt=a("code"),ba=n("model.train()"),va=n("."),ya=i(),_t=a("p"),ka=n("Example:"),Ta=i(),u(Je.$$.fragment),on=i(),se=a("h2"),ke=a("a"),bt=a("span"),u(Ze.$$.fragment),wa=i(),vt=a("span"),Ea=n("TFEncoderDecoderModel"),tn=i(),D=a("div"),u(Ke.$$.fragment),Da=i(),de=a("p"),za=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),yt=a("code"),Ma=n("from_pretrained()"),xa=n("function and the decoder is loaded via "),kt=a("code"),ja=n("from_pretrained()"),$a=n(`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),qa=i(),Qe=a("p"),Pa=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Xe=a("a"),Fa=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ca=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Aa=i(),Tt=a("p"),Sa=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Na=i(),eo=a("p"),Ia=n("This model inherits from "),Co=a("a"),La=n("TFPreTrainedModel"),Ba=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oa=i(),oo=a("p"),Wa=n("This model is also a "),to=a("a"),Ra=n("tf.keras.Model"),Ga=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ua=i(),V=a("p"),Ao=a("a"),Va=n("TFEncoderDecoderModel"),Ha=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),wt=a("code"),Ya=n("from_pretrained()"),Ja=n("class method for the encoder and "),Et=a("code"),Za=n("from_pretrained()"),Ka=n(`class
method for the decoder.`),Qa=i(),S=a("div"),u(no.$$.fragment),Xa=i(),ie=a("p"),es=n("The "),So=a("a"),os=n("TFEncoderDecoderModel"),ts=n(" forward method, overrides the "),Dt=a("code"),ns=n("__call__"),rs=n(" special method."),as=i(),u(Te.$$.fragment),ss=i(),zt=a("p"),ds=n("Examples:"),is=i(),u(ro.$$.fragment),cs=i(),L=a("div"),u(ao.$$.fragment),ls=i(),Mt=a("p"),ps=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ms=i(),xt=a("p"),hs=n("Example:"),fs=i(),u(so.$$.fragment),nn=i(),ce=a("h2"),we=a("a"),jt=a("span"),u(io.$$.fragment),us=i(),$t=a("span"),gs=n("FlaxEncoderDecoderModel"),rn=i(),z=a("div"),u(co.$$.fragment),_s=i(),le=a("p"),bs=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),qt=a("code"),vs=n("from_pretrained()"),ys=n("function and the decoder is loaded via "),Pt=a("code"),ks=n("from_pretrained()"),Ts=n(`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),ws=i(),lo=a("p"),Es=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),po=a("a"),Ds=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),zs=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Ms=i(),Ft=a("p"),xs=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),js=i(),mo=a("p"),$s=n("This model inherits from "),No=a("a"),qs=n("FlaxPreTrainedModel"),Ps=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fs=i(),ho=a("p"),Cs=n(`This model is also a Flax Linen
`),fo=a("a"),As=n("flax.nn.Module"),Ss=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ns=i(),H=a("p"),Io=a("a"),Is=n("FlaxEncoderDecoderModel"),Ls=n(` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),Ct=a("em"),Bs=n("~transformers.FlaxAutoModel.from_pretrained"),Os=n(` class method for the
encoder and :meth`),At=a("em"),Ws=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Rs=n(" class method for the decoder."),Gs=i(),N=a("div"),u(uo.$$.fragment),Us=i(),pe=a("p"),Vs=n("The "),Lo=a("a"),Hs=n("FlaxEncoderDecoderModel"),Ys=n(" forward method, overrides the "),St=a("code"),Js=n("__call__"),Zs=n(" special method."),Ks=i(),u(Ee.$$.fragment),Qs=i(),Nt=a("p"),Xs=n("Examples:"),ed=i(),u(go.$$.fragment),od=i(),B=a("div"),u(_o.$$.fragment),td=i(),It=a("p"),nd=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),rd=i(),Lt=a("p"),ad=n("Example:"),sd=i(),u(bo.$$.fragment),this.h()},l(t){const p=qi('[data-svelte="svelte-1phssyn"]',document.head);m=s(p,"META",{name:!0,content:!0}),p.forEach(o),x=c(t),f=s(t,"H1",{class:!0});var vo=d(f);w=s(vo,"A",{id:!0,class:!0,href:!0});var Bt=d(w);P=s(Bt,"SPAN",{});var Ot=d(P);g(k.$$.fragment,Ot),Ot.forEach(o),Bt.forEach(o),T=c(vo),F=s(vo,"SPAN",{});var id=d(F);zn=r(id,"Encoder Decoder Models"),id.forEach(o),vo.forEach(o),Gt=c(t),me=s(t,"P",{});var sn=d(me);Mn=r(sn,"The "),wo=s(sn,"A",{href:!0});var cd=d(wo);xn=r(cd,"EncoderDecoderModel"),cd.forEach(o),jn=r(sn,` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),sn.forEach(o),Ut=c(t),he=s(t,"P",{});var dn=d(he);$n=r(dn,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),xe=s(dn,"A",{href:!0,rel:!0});var ld=d(xe);qn=r(ld,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),ld.forEach(o),Pn=r(dn,` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),dn.forEach(o),Vt=c(t),fe=s(t,"P",{});var cn=d(fe);Fn=r(cn,"After such an "),Eo=s(cn,"A",{href:!0});var pd=d(Eo);Cn=r(pd,"EncoderDecoderModel"),pd.forEach(o),An=r(cn,` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),cn.forEach(o),Ht=c(t),W=s(t,"P",{});var Bo=d(W);Sn=r(Bo,"An application of this architecture could be to leverage two pretrained "),Do=s(Bo,"A",{href:!0});var md=d(Do);Nn=r(md,"BertModel"),md.forEach(o),In=r(Bo,` as the encoder
and decoder for a summarization model as was shown in: `),je=s(Bo,"A",{href:!0,rel:!0});var hd=d(je);Ln=r(hd,"Text Summarization with Pretrained Encoders"),hd.forEach(o),Bn=r(Bo," by Yang Liu and Mirella Lapata."),Bo.forEach(o),Yt=c(t),R=s(t,"P",{});var Oo=d(R);On=r(Oo,"The "),Qo=s(Oo,"CODE",{});var fd=d(Qo);Wn=r(fd,"from_pretrained()"),fd.forEach(o),Rn=r(Oo,`currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),Xo=s(Oo,"CODE",{});var ud=d(Xo);Gn=r(ud,"from_pt=True"),ud.forEach(o),Un=r(Oo,` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Oo.forEach(o),Jt=c(t),g($e.$$.fragment,t),Zt=c(t),G=s(t,"P",{});var Wo=d(G);Vn=r(Wo,"This model was contributed by "),qe=s(Wo,"A",{href:!0,rel:!0});var gd=d(qe);Hn=r(gd,"thomwolf"),gd.forEach(o),Yn=r(Wo,`. This model\u2019s TensorFlow and Flax versions
were contributed by `),Pe=s(Wo,"A",{href:!0,rel:!0});var _d=d(Pe);Jn=r(_d,"ydshieh"),_d.forEach(o),Zn=r(Wo,"."),Wo.forEach(o),Kt=c(t),X=s(t,"H2",{class:!0});var ln=d(X);ue=s(ln,"A",{id:!0,class:!0,href:!0});var bd=d(ue);et=s(bd,"SPAN",{});var vd=d(et);g(Fe.$$.fragment,vd),vd.forEach(o),bd.forEach(o),Kn=c(ln),ot=s(ln,"SPAN",{});var yd=d(ot);Qn=r(yd,"EncoderDecoderConfig"),yd.forEach(o),ln.forEach(o),Qt=c(t),M=s(t,"DIV",{class:!0});var I=d(M);g(Ce.$$.fragment,I),Xn=c(I),ge=s(I,"P",{});var Wt=d(ge);zo=s(Wt,"A",{href:!0});var kd=d(zo);er=r(kd,"EncoderDecoderConfig"),kd.forEach(o),or=r(Wt," is the configuration class to store the configuration of a "),Mo=s(Wt,"A",{href:!0});var Td=d(Mo);tr=r(Td,"EncoderDecoderModel"),Td.forEach(o),nr=r(Wt,`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),Wt.forEach(o),rr=c(I),ee=s(I,"P",{});var Ro=d(ee);ar=r(Ro,"Configuration objects inherit from "),xo=s(Ro,"A",{href:!0});var wd=d(xo);sr=r(wd,"PretrainedConfig"),wd.forEach(o),dr=r(Ro,` and can be used to control the model outputs. Read the
documentation from `),jo=s(Ro,"A",{href:!0});var Ed=d(jo);ir=r(Ed,"PretrainedConfig"),Ed.forEach(o),cr=r(Ro," for more information."),Ro.forEach(o),lr=c(I),tt=s(I,"P",{});var Dd=d(tt);pr=r(Dd,"Examples:"),Dd.forEach(o),mr=c(I),g(Ae.$$.fragment,I),hr=c(I),_e=s(I,"DIV",{class:!0});var pn=d(_e);g(Se.$$.fragment,pn),fr=c(pn),Ne=s(pn,"P",{});var mn=d(Ne);ur=r(mn,"Instantiate a "),$o=s(mn,"A",{href:!0});var zd=d($o);gr=r(zd,"EncoderDecoderConfig"),zd.forEach(o),_r=r(mn,` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),mn.forEach(o),pn.forEach(o),br=c(I),be=s(I,"DIV",{class:!0});var hn=d(be);g(Ie.$$.fragment,hn),vr=c(hn),oe=s(hn,"P",{});var Go=d(oe);yr=r(Go,"Serializes this instance to a Python dictionary. Override the default "),nt=s(Go,"EM",{});var Md=d(nt);kr=r(Md,"to_dict()"),Md.forEach(o),Tr=r(Go," from "),rt=s(Go,"EM",{});var xd=d(rt);wr=r(xd,"PretrainedConfig"),xd.forEach(o),Er=r(Go,"."),Go.forEach(o),hn.forEach(o),I.forEach(o),Xt=c(t),te=s(t,"H2",{class:!0});var fn=d(te);ve=s(fn,"A",{id:!0,class:!0,href:!0});var jd=d(ve);at=s(jd,"SPAN",{});var $d=d(at);g(Le.$$.fragment,$d),$d.forEach(o),jd.forEach(o),Dr=c(fn),st=s(fn,"SPAN",{});var qd=d(st);zr=r(qd,"EncoderDecoderModel"),qd.forEach(o),fn.forEach(o),en=c(t),E=s(t,"DIV",{class:!0});var j=d(E);g(Be.$$.fragment,j),Mr=c(j),ne=s(j,"P",{});var Uo=d(ne);xr=r(Uo,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),dt=s(Uo,"CODE",{});var Pd=d(dt);jr=r(Pd,"from_pretrained()"),Pd.forEach(o),$r=r(Uo,"function and the decoder is loaded via "),it=s(Uo,"CODE",{});var Fd=d(it);qr=r(Fd,"from_pretrained()"),Fd.forEach(o),Pr=r(Uo,`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Uo.forEach(o),Fr=c(j),Oe=s(j,"P",{});var un=d(Oe);Cr=r(un,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),We=s(un,"A",{href:!0,rel:!0});var Cd=d(We);Ar=r(Cd,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Cd.forEach(o),Sr=r(un,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),un.forEach(o),Nr=c(j),ct=s(j,"P",{});var Ad=d(ct);Ir=r(Ad,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Ad.forEach(o),Lr=c(j),Re=s(j,"P",{});var gn=d(Re);Br=r(gn,"This model inherits from "),qo=s(gn,"A",{href:!0});var Sd=d(qo);Or=r(Sd,"PreTrainedModel"),Sd.forEach(o),Wr=r(gn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gn.forEach(o),Rr=c(j),Ge=s(j,"P",{});var _n=d(Ge);Gr=r(_n,"This model is also a PyTorch "),Ue=s(_n,"A",{href:!0,rel:!0});var Nd=d(Ue);Ur=r(Nd,"torch.nn.Module"),Nd.forEach(o),Vr=r(_n,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_n.forEach(o),Hr=c(j),U=s(j,"P",{});var yo=d(U);Po=s(yo,"A",{href:!0});var Id=d(Po);Yr=r(Id,"EncoderDecoderModel"),Id.forEach(o),Jr=r(yo,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),lt=s(yo,"EM",{});var Ld=d(lt);Zr=r(Ld,"~transformers.AutoModel.from_pretrained"),Ld.forEach(o),Kr=r(yo,` class method for the encoder and
:meth`),pt=s(yo,"EM",{});var Bd=d(pt);Qr=r(Bd,"~transformers.AutoModelForCausalLM.from_pretrained"),Bd.forEach(o),Xr=r(yo," class method for the decoder."),yo.forEach(o),ea=c(j),C=s(j,"DIV",{class:!0});var Y=d(C);g(Ve.$$.fragment,Y),oa=c(Y),re=s(Y,"P",{});var Vo=d(re);ta=r(Vo,"The "),Fo=s(Vo,"A",{href:!0});var Od=d(Fo);na=r(Od,"EncoderDecoderModel"),Od.forEach(o),ra=r(Vo," forward method, overrides the "),mt=s(Vo,"CODE",{});var Wd=d(mt);aa=r(Wd,"__call__"),Wd.forEach(o),sa=r(Vo," special method."),Vo.forEach(o),da=c(Y),g(ye.$$.fragment,Y),ia=c(Y),ht=s(Y,"P",{});var Rd=d(ht);ca=r(Rd,"Examples:"),Rd.forEach(o),la=c(Y),g(He.$$.fragment,Y),Y.forEach(o),pa=c(j),A=s(j,"DIV",{class:!0});var J=d(A);g(Ye.$$.fragment,J),ma=c(J),ft=s(J,"P",{});var Gd=d(ft);ha=r(Gd,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Gd.forEach(o),fa=c(J),ae=s(J,"P",{});var Ho=d(ae);ua=r(Ho,"The model is set in evaluation mode by default using "),ut=s(Ho,"CODE",{});var Ud=d(ut);ga=r(Ud,"model.eval()"),Ud.forEach(o),_a=r(Ho,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),gt=s(Ho,"CODE",{});var Vd=d(gt);ba=r(Vd,"model.train()"),Vd.forEach(o),va=r(Ho,"."),Ho.forEach(o),ya=c(J),_t=s(J,"P",{});var Hd=d(_t);ka=r(Hd,"Example:"),Hd.forEach(o),Ta=c(J),g(Je.$$.fragment,J),J.forEach(o),j.forEach(o),on=c(t),se=s(t,"H2",{class:!0});var bn=d(se);ke=s(bn,"A",{id:!0,class:!0,href:!0});var Yd=d(ke);bt=s(Yd,"SPAN",{});var Jd=d(bt);g(Ze.$$.fragment,Jd),Jd.forEach(o),Yd.forEach(o),wa=c(bn),vt=s(bn,"SPAN",{});var Zd=d(vt);Ea=r(Zd,"TFEncoderDecoderModel"),Zd.forEach(o),bn.forEach(o),tn=c(t),D=s(t,"DIV",{class:!0});var $=d(D);g(Ke.$$.fragment,$),Da=c($),de=s($,"P",{});var Yo=d(de);za=r(Yo,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),yt=s(Yo,"CODE",{});var Kd=d(yt);Ma=r(Kd,"from_pretrained()"),Kd.forEach(o),xa=r(Yo,"function and the decoder is loaded via "),kt=s(Yo,"CODE",{});var Qd=d(kt);ja=r(Qd,"from_pretrained()"),Qd.forEach(o),$a=r(Yo,`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Yo.forEach(o),qa=c($),Qe=s($,"P",{});var vn=d(Qe);Pa=r(vn,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Xe=s(vn,"A",{href:!0,rel:!0});var Xd=d(Xe);Fa=r(Xd,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Xd.forEach(o),Ca=r(vn,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),vn.forEach(o),Aa=c($),Tt=s($,"P",{});var ei=d(Tt);Sa=r(ei,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),ei.forEach(o),Na=c($),eo=s($,"P",{});var yn=d(eo);Ia=r(yn,"This model inherits from "),Co=s(yn,"A",{href:!0});var oi=d(Co);La=r(oi,"TFPreTrainedModel"),oi.forEach(o),Ba=r(yn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yn.forEach(o),Oa=c($),oo=s($,"P",{});var kn=d(oo);Wa=r(kn,"This model is also a "),to=s(kn,"A",{href:!0,rel:!0});var ti=d(to);Ra=r(ti,"tf.keras.Model"),ti.forEach(o),Ga=r(kn,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kn.forEach(o),Ua=c($),V=s($,"P",{});var ko=d(V);Ao=s(ko,"A",{href:!0});var ni=d(Ao);Va=r(ni,"TFEncoderDecoderModel"),ni.forEach(o),Ha=r(ko,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),wt=s(ko,"CODE",{});var ri=d(wt);Ya=r(ri,"from_pretrained()"),ri.forEach(o),Ja=r(ko,"class method for the encoder and "),Et=s(ko,"CODE",{});var ai=d(Et);Za=r(ai,"from_pretrained()"),ai.forEach(o),Ka=r(ko,`class
method for the decoder.`),ko.forEach(o),Qa=c($),S=s($,"DIV",{class:!0});var Z=d(S);g(no.$$.fragment,Z),Xa=c(Z),ie=s(Z,"P",{});var Jo=d(ie);es=r(Jo,"The "),So=s(Jo,"A",{href:!0});var si=d(So);os=r(si,"TFEncoderDecoderModel"),si.forEach(o),ts=r(Jo," forward method, overrides the "),Dt=s(Jo,"CODE",{});var di=d(Dt);ns=r(di,"__call__"),di.forEach(o),rs=r(Jo," special method."),Jo.forEach(o),as=c(Z),g(Te.$$.fragment,Z),ss=c(Z),zt=s(Z,"P",{});var ii=d(zt);ds=r(ii,"Examples:"),ii.forEach(o),is=c(Z),g(ro.$$.fragment,Z),Z.forEach(o),cs=c($),L=s($,"DIV",{class:!0});var De=d(L);g(ao.$$.fragment,De),ls=c(De),Mt=s(De,"P",{});var ci=d(Mt);ps=r(ci,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ci.forEach(o),ms=c(De),xt=s(De,"P",{});var li=d(xt);hs=r(li,"Example:"),li.forEach(o),fs=c(De),g(so.$$.fragment,De),De.forEach(o),$.forEach(o),nn=c(t),ce=s(t,"H2",{class:!0});var Tn=d(ce);we=s(Tn,"A",{id:!0,class:!0,href:!0});var pi=d(we);jt=s(pi,"SPAN",{});var mi=d(jt);g(io.$$.fragment,mi),mi.forEach(o),pi.forEach(o),us=c(Tn),$t=s(Tn,"SPAN",{});var hi=d($t);gs=r(hi,"FlaxEncoderDecoderModel"),hi.forEach(o),Tn.forEach(o),rn=c(t),z=s(t,"DIV",{class:!0});var q=d(z);g(co.$$.fragment,q),_s=c(q),le=s(q,"P",{});var Zo=d(le);bs=r(Zo,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),qt=s(Zo,"CODE",{});var fi=d(qt);vs=r(fi,"from_pretrained()"),fi.forEach(o),ys=r(Zo,"function and the decoder is loaded via "),Pt=s(Zo,"CODE",{});var ui=d(Pt);ks=r(ui,"from_pretrained()"),ui.forEach(o),Ts=r(Zo,`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Zo.forEach(o),ws=c(q),lo=s(q,"P",{});var wn=d(lo);Es=r(wn,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),po=s(wn,"A",{href:!0,rel:!0});var gi=d(po);Ds=r(gi,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),gi.forEach(o),zs=r(wn,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),wn.forEach(o),Ms=c(q),Ft=s(q,"P",{});var _i=d(Ft);xs=r(_i,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),_i.forEach(o),js=c(q),mo=s(q,"P",{});var En=d(mo);$s=r(En,"This model inherits from "),No=s(En,"A",{href:!0});var bi=d(No);qs=r(bi,"FlaxPreTrainedModel"),bi.forEach(o),Ps=r(En,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),En.forEach(o),Fs=c(q),ho=s(q,"P",{});var Dn=d(ho);Cs=r(Dn,`This model is also a Flax Linen
`),fo=s(Dn,"A",{href:!0,rel:!0});var vi=d(fo);As=r(vi,"flax.nn.Module"),vi.forEach(o),Ss=r(Dn,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Dn.forEach(o),Ns=c(q),H=s(q,"P",{});var To=d(H);Io=s(To,"A",{href:!0});var yi=d(Io);Is=r(yi,"FlaxEncoderDecoderModel"),yi.forEach(o),Ls=r(To,` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),Ct=s(To,"EM",{});var ki=d(Ct);Bs=r(ki,"~transformers.FlaxAutoModel.from_pretrained"),ki.forEach(o),Os=r(To,` class method for the
encoder and :meth`),At=s(To,"EM",{});var Ti=d(At);Ws=r(Ti,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Ti.forEach(o),Rs=r(To," class method for the decoder."),To.forEach(o),Gs=c(q),N=s(q,"DIV",{class:!0});var K=d(N);g(uo.$$.fragment,K),Us=c(K),pe=s(K,"P",{});var Ko=d(pe);Vs=r(Ko,"The "),Lo=s(Ko,"A",{href:!0});var wi=d(Lo);Hs=r(wi,"FlaxEncoderDecoderModel"),wi.forEach(o),Ys=r(Ko," forward method, overrides the "),St=s(Ko,"CODE",{});var Ei=d(St);Js=r(Ei,"__call__"),Ei.forEach(o),Zs=r(Ko," special method."),Ko.forEach(o),Ks=c(K),g(Ee.$$.fragment,K),Qs=c(K),Nt=s(K,"P",{});var Di=d(Nt);Xs=r(Di,"Examples:"),Di.forEach(o),ed=c(K),g(go.$$.fragment,K),K.forEach(o),od=c(q),B=s(q,"DIV",{class:!0});var ze=d(B);g(_o.$$.fragment,ze),td=c(ze),It=s(ze,"P",{});var zi=d(It);nd=r(zi,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),zi.forEach(o),rd=c(ze),Lt=s(ze,"P",{});var Mi=d(Lt);ad=r(Mi,"Example:"),Mi.forEach(o),sd=c(ze),g(bo.$$.fragment,ze),ze.forEach(o),q.forEach(o),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Si)),l(w,"id","encoder-decoder-models"),l(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(w,"href","#encoder-decoder-models"),l(f,"class","relative group"),l(wo,"href","/docs/transformers/master/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(xe,"href","https://arxiv.org/abs/1907.12461"),l(xe,"rel","nofollow"),l(Eo,"href","/docs/transformers/master/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(Do,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertModel"),l(je,"href","https://arxiv.org/abs/1908.08345"),l(je,"rel","nofollow"),l(qe,"href","https://github.com/thomwolf"),l(qe,"rel","nofollow"),l(Pe,"href","https://github.com/ydshieh"),l(Pe,"rel","nofollow"),l(ue,"id","transformers.EncoderDecoderConfig"),l(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ue,"href","#transformers.EncoderDecoderConfig"),l(X,"class","relative group"),l(zo,"href","/docs/transformers/master/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),l(Mo,"href","/docs/transformers/master/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(xo,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(jo,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l($o,"href","/docs/transformers/master/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),l(_e,"class","docstring"),l(be,"class","docstring"),l(M,"class","docstring"),l(ve,"id","transformers.EncoderDecoderModel"),l(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ve,"href","#transformers.EncoderDecoderModel"),l(te,"class","relative group"),l(We,"href","https://arxiv.org/abs/1907.12461"),l(We,"rel","nofollow"),l(qo,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),l(Ue,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ue,"rel","nofollow"),l(Po,"href","/docs/transformers/master/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(Fo,"href","/docs/transformers/master/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(C,"class","docstring"),l(A,"class","docstring"),l(E,"class","docstring"),l(ke,"id","transformers.TFEncoderDecoderModel"),l(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ke,"href","#transformers.TFEncoderDecoderModel"),l(se,"class","relative group"),l(Xe,"href","https://arxiv.org/abs/1907.12461"),l(Xe,"rel","nofollow"),l(Co,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),l(to,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(to,"rel","nofollow"),l(Ao,"href","/docs/transformers/master/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),l(So,"href","/docs/transformers/master/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),l(S,"class","docstring"),l(L,"class","docstring"),l(D,"class","docstring"),l(we,"id","transformers.FlaxEncoderDecoderModel"),l(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(we,"href","#transformers.FlaxEncoderDecoderModel"),l(ce,"class","relative group"),l(po,"href","https://arxiv.org/abs/1907.12461"),l(po,"rel","nofollow"),l(No,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(fo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),l(fo,"rel","nofollow"),l(Io,"href","/docs/transformers/master/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),l(Lo,"href","/docs/transformers/master/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),l(N,"class","docstring"),l(B,"class","docstring"),l(z,"class","docstring")},m(t,p){e(document.head,m),h(t,x,p),h(t,f,p),e(f,w),e(w,P),_(k,P,null),e(f,T),e(f,F),e(F,zn),h(t,Gt,p),h(t,me,p),e(me,Mn),e(me,wo),e(wo,xn),e(me,jn),h(t,Ut,p),h(t,he,p),e(he,$n),e(he,xe),e(xe,qn),e(he,Pn),h(t,Vt,p),h(t,fe,p),e(fe,Fn),e(fe,Eo),e(Eo,Cn),e(fe,An),h(t,Ht,p),h(t,W,p),e(W,Sn),e(W,Do),e(Do,Nn),e(W,In),e(W,je),e(je,Ln),e(W,Bn),h(t,Yt,p),h(t,R,p),e(R,On),e(R,Qo),e(Qo,Wn),e(R,Rn),e(R,Xo),e(Xo,Gn),e(R,Un),h(t,Jt,p),_($e,t,p),h(t,Zt,p),h(t,G,p),e(G,Vn),e(G,qe),e(qe,Hn),e(G,Yn),e(G,Pe),e(Pe,Jn),e(G,Zn),h(t,Kt,p),h(t,X,p),e(X,ue),e(ue,et),_(Fe,et,null),e(X,Kn),e(X,ot),e(ot,Qn),h(t,Qt,p),h(t,M,p),_(Ce,M,null),e(M,Xn),e(M,ge),e(ge,zo),e(zo,er),e(ge,or),e(ge,Mo),e(Mo,tr),e(ge,nr),e(M,rr),e(M,ee),e(ee,ar),e(ee,xo),e(xo,sr),e(ee,dr),e(ee,jo),e(jo,ir),e(ee,cr),e(M,lr),e(M,tt),e(tt,pr),e(M,mr),_(Ae,M,null),e(M,hr),e(M,_e),_(Se,_e,null),e(_e,fr),e(_e,Ne),e(Ne,ur),e(Ne,$o),e($o,gr),e(Ne,_r),e(M,br),e(M,be),_(Ie,be,null),e(be,vr),e(be,oe),e(oe,yr),e(oe,nt),e(nt,kr),e(oe,Tr),e(oe,rt),e(rt,wr),e(oe,Er),h(t,Xt,p),h(t,te,p),e(te,ve),e(ve,at),_(Le,at,null),e(te,Dr),e(te,st),e(st,zr),h(t,en,p),h(t,E,p),_(Be,E,null),e(E,Mr),e(E,ne),e(ne,xr),e(ne,dt),e(dt,jr),e(ne,$r),e(ne,it),e(it,qr),e(ne,Pr),e(E,Fr),e(E,Oe),e(Oe,Cr),e(Oe,We),e(We,Ar),e(Oe,Sr),e(E,Nr),e(E,ct),e(ct,Ir),e(E,Lr),e(E,Re),e(Re,Br),e(Re,qo),e(qo,Or),e(Re,Wr),e(E,Rr),e(E,Ge),e(Ge,Gr),e(Ge,Ue),e(Ue,Ur),e(Ge,Vr),e(E,Hr),e(E,U),e(U,Po),e(Po,Yr),e(U,Jr),e(U,lt),e(lt,Zr),e(U,Kr),e(U,pt),e(pt,Qr),e(U,Xr),e(E,ea),e(E,C),_(Ve,C,null),e(C,oa),e(C,re),e(re,ta),e(re,Fo),e(Fo,na),e(re,ra),e(re,mt),e(mt,aa),e(re,sa),e(C,da),_(ye,C,null),e(C,ia),e(C,ht),e(ht,ca),e(C,la),_(He,C,null),e(E,pa),e(E,A),_(Ye,A,null),e(A,ma),e(A,ft),e(ft,ha),e(A,fa),e(A,ae),e(ae,ua),e(ae,ut),e(ut,ga),e(ae,_a),e(ae,gt),e(gt,ba),e(ae,va),e(A,ya),e(A,_t),e(_t,ka),e(A,Ta),_(Je,A,null),h(t,on,p),h(t,se,p),e(se,ke),e(ke,bt),_(Ze,bt,null),e(se,wa),e(se,vt),e(vt,Ea),h(t,tn,p),h(t,D,p),_(Ke,D,null),e(D,Da),e(D,de),e(de,za),e(de,yt),e(yt,Ma),e(de,xa),e(de,kt),e(kt,ja),e(de,$a),e(D,qa),e(D,Qe),e(Qe,Pa),e(Qe,Xe),e(Xe,Fa),e(Qe,Ca),e(D,Aa),e(D,Tt),e(Tt,Sa),e(D,Na),e(D,eo),e(eo,Ia),e(eo,Co),e(Co,La),e(eo,Ba),e(D,Oa),e(D,oo),e(oo,Wa),e(oo,to),e(to,Ra),e(oo,Ga),e(D,Ua),e(D,V),e(V,Ao),e(Ao,Va),e(V,Ha),e(V,wt),e(wt,Ya),e(V,Ja),e(V,Et),e(Et,Za),e(V,Ka),e(D,Qa),e(D,S),_(no,S,null),e(S,Xa),e(S,ie),e(ie,es),e(ie,So),e(So,os),e(ie,ts),e(ie,Dt),e(Dt,ns),e(ie,rs),e(S,as),_(Te,S,null),e(S,ss),e(S,zt),e(zt,ds),e(S,is),_(ro,S,null),e(D,cs),e(D,L),_(ao,L,null),e(L,ls),e(L,Mt),e(Mt,ps),e(L,ms),e(L,xt),e(xt,hs),e(L,fs),_(so,L,null),h(t,nn,p),h(t,ce,p),e(ce,we),e(we,jt),_(io,jt,null),e(ce,us),e(ce,$t),e($t,gs),h(t,rn,p),h(t,z,p),_(co,z,null),e(z,_s),e(z,le),e(le,bs),e(le,qt),e(qt,vs),e(le,ys),e(le,Pt),e(Pt,ks),e(le,Ts),e(z,ws),e(z,lo),e(lo,Es),e(lo,po),e(po,Ds),e(lo,zs),e(z,Ms),e(z,Ft),e(Ft,xs),e(z,js),e(z,mo),e(mo,$s),e(mo,No),e(No,qs),e(mo,Ps),e(z,Fs),e(z,ho),e(ho,Cs),e(ho,fo),e(fo,As),e(ho,Ss),e(z,Ns),e(z,H),e(H,Io),e(Io,Is),e(H,Ls),e(H,Ct),e(Ct,Bs),e(H,Os),e(H,At),e(At,Ws),e(H,Rs),e(z,Gs),e(z,N),_(uo,N,null),e(N,Us),e(N,pe),e(pe,Vs),e(pe,Lo),e(Lo,Hs),e(pe,Ys),e(pe,St),e(St,Js),e(pe,Zs),e(N,Ks),_(Ee,N,null),e(N,Qs),e(N,Nt),e(Nt,Xs),e(N,ed),_(go,N,null),e(z,od),e(z,B),_(_o,B,null),e(B,td),e(B,It),e(It,nd),e(B,rd),e(B,Lt),e(Lt,ad),e(B,sd),_(bo,B,null),an=!0},p(t,[p]){const vo={};p&2&&(vo.$$scope={dirty:p,ctx:t}),ye.$set(vo);const Bt={};p&2&&(Bt.$$scope={dirty:p,ctx:t}),Te.$set(Bt);const Ot={};p&2&&(Ot.$$scope={dirty:p,ctx:t}),Ee.$set(Ot)},i(t){an||(b(k.$$.fragment,t),b($e.$$.fragment,t),b(Fe.$$.fragment,t),b(Ce.$$.fragment,t),b(Ae.$$.fragment,t),b(Se.$$.fragment,t),b(Ie.$$.fragment,t),b(Le.$$.fragment,t),b(Be.$$.fragment,t),b(Ve.$$.fragment,t),b(ye.$$.fragment,t),b(He.$$.fragment,t),b(Ye.$$.fragment,t),b(Je.$$.fragment,t),b(Ze.$$.fragment,t),b(Ke.$$.fragment,t),b(no.$$.fragment,t),b(Te.$$.fragment,t),b(ro.$$.fragment,t),b(ao.$$.fragment,t),b(so.$$.fragment,t),b(io.$$.fragment,t),b(co.$$.fragment,t),b(uo.$$.fragment,t),b(Ee.$$.fragment,t),b(go.$$.fragment,t),b(_o.$$.fragment,t),b(bo.$$.fragment,t),an=!0)},o(t){v(k.$$.fragment,t),v($e.$$.fragment,t),v(Fe.$$.fragment,t),v(Ce.$$.fragment,t),v(Ae.$$.fragment,t),v(Se.$$.fragment,t),v(Ie.$$.fragment,t),v(Le.$$.fragment,t),v(Be.$$.fragment,t),v(Ve.$$.fragment,t),v(ye.$$.fragment,t),v(He.$$.fragment,t),v(Ye.$$.fragment,t),v(Je.$$.fragment,t),v(Ze.$$.fragment,t),v(Ke.$$.fragment,t),v(no.$$.fragment,t),v(Te.$$.fragment,t),v(ro.$$.fragment,t),v(ao.$$.fragment,t),v(so.$$.fragment,t),v(io.$$.fragment,t),v(co.$$.fragment,t),v(uo.$$.fragment,t),v(Ee.$$.fragment,t),v(go.$$.fragment,t),v(_o.$$.fragment,t),v(bo.$$.fragment,t),an=!1},d(t){o(m),t&&o(x),t&&o(f),y(k),t&&o(Gt),t&&o(me),t&&o(Ut),t&&o(he),t&&o(Vt),t&&o(fe),t&&o(Ht),t&&o(W),t&&o(Yt),t&&o(R),t&&o(Jt),y($e,t),t&&o(Zt),t&&o(G),t&&o(Kt),t&&o(X),y(Fe),t&&o(Qt),t&&o(M),y(Ce),y(Ae),y(Se),y(Ie),t&&o(Xt),t&&o(te),y(Le),t&&o(en),t&&o(E),y(Be),y(Ve),y(ye),y(He),y(Ye),y(Je),t&&o(on),t&&o(se),y(Ze),t&&o(tn),t&&o(D),y(Ke),y(no),y(Te),y(ro),y(ao),y(so),t&&o(nn),t&&o(ce),y(io),t&&o(rn),t&&o(z),y(co),y(uo),y(Ee),y(go),y(_o),y(bo)}}}const Si={local:"encoder-decoder-models",sections:[{local:"transformers.EncoderDecoderConfig",title:"EncoderDecoderConfig"},{local:"transformers.EncoderDecoderModel",title:"EncoderDecoderModel"},{local:"transformers.TFEncoderDecoderModel",title:"TFEncoderDecoderModel"},{local:"transformers.FlaxEncoderDecoderModel",title:"FlaxEncoderDecoderModel"}],title:"Encoder Decoder Models"};function Ni(Q,m,x){let{fw:f}=m;return Q.$$set=w=>{"fw"in w&&x(0,f=w.fw)},[f]}class Gi extends xi{constructor(m){super();ji(this,m,Ni,Ai,$i,{fw:0})}}export{Gi as default,Si as metadata};
