import{S as qi,i as xi,s as ji,e as a,k as i,w as u,t,M as $i,c as s,d as o,m as c,a as d,x as g,h as r,b as l,F as e,g as h,y as _,q as b,o as v,B as y}from"../../chunks/vendor-4833417e.js";import{T as dd}from"../../chunks/Tip-fffd6df1.js";import{D as O}from"../../chunks/Docstring-4f315ed9.js";import{C as Me}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Gn}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Pi(Q){let m,q,f,w,P;return{c(){m=a("p"),q=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),w=t("Module"),P=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){m=s(k,"P",{});var T=d(m);q=r(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(T,"CODE",{});var F=d(f);w=r(F,"Module"),F.forEach(o),P=r(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(k,T){h(k,m,T),e(m,q),e(m,f),e(f,w),e(m,P)},d(k){k&&o(m)}}}function Fi(Q){let m,q,f,w,P;return{c(){m=a("p"),q=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),w=t("Module"),P=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){m=s(k,"P",{});var T=d(m);q=r(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(T,"CODE",{});var F=d(f);w=r(F,"Module"),F.forEach(o),P=r(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(k,T){h(k,m,T),e(m,q),e(m,f),e(f,w),e(m,P)},d(k){k&&o(m)}}}function Ci(Q){let m,q,f,w,P;return{c(){m=a("p"),q=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),w=t("Module"),P=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){m=s(k,"P",{});var T=d(m);q=r(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(T,"CODE",{});var F=d(f);w=r(F,"Module"),F.forEach(o),P=r(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(k,T){h(k,m,T),e(m,q),e(m,f),e(f,w),e(m,P)},d(k){k&&o(m)}}}function Ai(Q){let m,q,f,w,P,k,T,F,zt,Un,me,Mt,wo,qt,xt,Vn,he,jt,qe,$t,Pt,Hn,fe,Ft,Eo,Ct,At,Yn,W,St,Do,Nt,It,xe,Lt,Bt,Jn,R,Ot,Qo,Wt,Rt,Xo,Gt,Ut,Zn,je,Kn,G,Vt,$e,Ht,Yt,Pe,Jt,Zt,Qn,X,ue,en,Fe,Kt,on,Qt,Xn,M,Ce,Xt,ge,zo,er,or,Mo,nr,tr,rr,ee,ar,qo,sr,dr,xo,ir,cr,lr,nn,pr,mr,Ae,hr,_e,Se,fr,Ne,ur,jo,gr,_r,br,be,Ie,vr,oe,yr,tn,kr,Tr,rn,wr,Er,et,ne,ve,an,Le,Dr,sn,zr,ot,E,Be,Mr,te,qr,dn,xr,jr,cn,$r,Pr,Fr,Oe,Cr,We,Ar,Sr,Nr,ln,Ir,Lr,Re,Br,$o,Or,Wr,Rr,Ge,Gr,Ue,Ur,Vr,Hr,U,Po,Yr,Jr,pn,Zr,Kr,mn,Qr,Xr,ea,C,Ve,oa,re,na,Fo,ta,ra,hn,aa,sa,da,ye,ia,fn,ca,la,He,pa,A,Ye,ma,un,ha,fa,ae,ua,gn,ga,_a,_n,ba,va,ya,bn,ka,Ta,Je,nt,se,ke,vn,Ze,wa,yn,Ea,tt,D,Ke,Da,de,za,kn,Ma,qa,Tn,xa,ja,$a,Qe,Pa,Xe,Fa,Ca,Aa,wn,Sa,Na,eo,Ia,Co,La,Ba,Oa,oo,Wa,no,Ra,Ga,Ua,V,Ao,Va,Ha,En,Ya,Ja,Dn,Za,Ka,Qa,S,to,Xa,ie,es,So,os,ns,zn,ts,rs,as,Te,ss,Mn,ds,is,ro,cs,L,ao,ls,qn,ps,ms,xn,hs,fs,so,rt,ce,we,jn,io,us,$n,gs,at,z,co,_s,le,bs,Pn,vs,ys,Fn,ks,Ts,ws,lo,Es,po,Ds,zs,Ms,Cn,qs,xs,mo,js,No,$s,Ps,Fs,ho,Cs,fo,As,Ss,Ns,H,Io,Is,Ls,An,Bs,Os,Sn,Ws,Rs,Gs,N,uo,Us,pe,Vs,Lo,Hs,Ys,Nn,Js,Zs,Ks,Ee,Qs,In,Xs,ed,go,od,B,_o,nd,Ln,td,rd,Bn,ad,sd,bo,st;return k=new Gn({}),je=new Me({props:{code:`# a workaround to load from pytorch checkpoint
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
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config = _model.config`}}),Fe=new Gn({}),Ce=new O({props:{name:"class transformers.EncoderDecoderConfig",anchor:"transformers.EncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L26",parametersDescription:[{anchor:"transformers.EncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
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
`}}),Le=new Gn({}),Be=new O({props:{name:"class transformers.EncoderDecoderModel",anchor:"transformers.EncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L166",parametersDescription:[{anchor:"transformers.EncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ve=new O({props:{name:"forward",anchor:"transformers.EncoderDecoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L430",parametersDescription:[{anchor:"transformers.EncoderDecoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids)`}}),Ye=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L279",parametersDescription:[{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),Je=new Me({props:{code:`from transformers import EncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)`}}),Ze=new Gn({}),Ke=new O({props:{name:"class transformers.TFEncoderDecoderModel",anchor:"transformers.TFEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L186",parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),to=new O({props:{name:"call",anchor:"transformers.TFEncoderDecoderModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L494",parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),so=new Me({props:{code:`from transformers import TFEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),io=new Gn({}),co=new O({props:{name:"class transformers.FlaxEncoderDecoderModel",anchor:"transformers.FlaxEncoderDecoderModel",parameters:[{name:"config",val:": EncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L302",parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),uo=new O({props:{name:"__call__",anchor:"transformers.FlaxEncoderDecoderModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L611",parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> summary == <span class="hljs-string">&quot;SAS Alpha Epsilon suspended Sigma Alpha Epsilon members&quot;</span>`}}),_o=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L742",parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),bo=new Me({props:{code:`from transformers import FlaxEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){m=a("meta"),q=i(),f=a("h1"),w=a("a"),P=a("span"),u(k.$$.fragment),T=i(),F=a("span"),zt=t("Encoder Decoder Models"),Un=i(),me=a("p"),Mt=t("The "),wo=a("a"),qt=t("EncoderDecoderModel"),xt=t(` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),Vn=i(),he=a("p"),jt=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),qe=a("a"),$t=t("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Pt=t(` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),Hn=i(),fe=a("p"),Ft=t("After such an "),Eo=a("a"),Ct=t("EncoderDecoderModel"),At=t(` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),Yn=i(),W=a("p"),St=t("An application of this architecture could be to leverage two pretrained "),Do=a("a"),Nt=t("BertModel"),It=t(` as the encoder
and decoder for a summarization model as was shown in: `),xe=a("a"),Lt=t("Text Summarization with Pretrained Encoders"),Bt=t(" by Yang Liu and Mirella Lapata."),Jn=i(),R=a("p"),Ot=t("The "),Qo=a("code"),Wt=t("from_pretrained()"),Rt=t(`currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),Xo=a("code"),Gt=t("from_pt=True"),Ut=t(` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Zn=i(),u(je.$$.fragment),Kn=i(),G=a("p"),Vt=t("This model was contributed by "),$e=a("a"),Ht=t("thomwolf"),Yt=t(`. This model\u2019s TensorFlow and Flax versions
were contributed by `),Pe=a("a"),Jt=t("ydshieh"),Zt=t("."),Qn=i(),X=a("h2"),ue=a("a"),en=a("span"),u(Fe.$$.fragment),Kt=i(),on=a("span"),Qt=t("EncoderDecoderConfig"),Xn=i(),M=a("div"),u(Ce.$$.fragment),Xt=i(),ge=a("p"),zo=a("a"),er=t("EncoderDecoderConfig"),or=t(" is the configuration class to store the configuration of a "),Mo=a("a"),nr=t("EncoderDecoderModel"),tr=t(`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),rr=i(),ee=a("p"),ar=t("Configuration objects inherit from "),qo=a("a"),sr=t("PretrainedConfig"),dr=t(` and can be used to control the model outputs. Read the
documentation from `),xo=a("a"),ir=t("PretrainedConfig"),cr=t(" for more information."),lr=i(),nn=a("p"),pr=t("Examples:"),mr=i(),u(Ae.$$.fragment),hr=i(),_e=a("div"),u(Se.$$.fragment),fr=i(),Ne=a("p"),ur=t("Instantiate a "),jo=a("a"),gr=t("EncoderDecoderConfig"),_r=t(` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),br=i(),be=a("div"),u(Ie.$$.fragment),vr=i(),oe=a("p"),yr=t("Serializes this instance to a Python dictionary. Override the default "),tn=a("em"),kr=t("to_dict()"),Tr=t(" from "),rn=a("em"),wr=t("PretrainedConfig"),Er=t("."),et=i(),ne=a("h2"),ve=a("a"),an=a("span"),u(Le.$$.fragment),Dr=i(),sn=a("span"),zr=t("EncoderDecoderModel"),ot=i(),E=a("div"),u(Be.$$.fragment),Mr=i(),te=a("p"),qr=t(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),dn=a("code"),xr=t("from_pretrained()"),jr=t("function and the decoder is loaded via "),cn=a("code"),$r=t("from_pretrained()"),Pr=t(`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Fr=i(),Oe=a("p"),Cr=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),We=a("a"),Ar=t(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Sr=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Nr=i(),ln=a("p"),Ir=t(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Lr=i(),Re=a("p"),Br=t("This model inherits from "),$o=a("a"),Or=t("PreTrainedModel"),Wr=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rr=i(),Ge=a("p"),Gr=t("This model is also a PyTorch "),Ue=a("a"),Ur=t("torch.nn.Module"),Vr=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hr=i(),U=a("p"),Po=a("a"),Yr=t("EncoderDecoderModel"),Jr=t(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),pn=a("em"),Zr=t("~transformers.AutoModel.from_pretrained"),Kr=t(` class method for the encoder and
:meth`),mn=a("em"),Qr=t("~transformers.AutoModelForCausalLM.from_pretrained"),Xr=t(" class method for the decoder."),ea=i(),C=a("div"),u(Ve.$$.fragment),oa=i(),re=a("p"),na=t("The "),Fo=a("a"),ta=t("EncoderDecoderModel"),ra=t(" forward method, overrides the "),hn=a("code"),aa=t("__call__"),sa=t(" special method."),da=i(),u(ye.$$.fragment),ia=i(),fn=a("p"),ca=t("Examples:"),la=i(),u(He.$$.fragment),pa=i(),A=a("div"),u(Ye.$$.fragment),ma=i(),un=a("p"),ha=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),fa=i(),ae=a("p"),ua=t("The model is set in evaluation mode by default using "),gn=a("code"),ga=t("model.eval()"),_a=t(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),_n=a("code"),ba=t("model.train()"),va=t("."),ya=i(),bn=a("p"),ka=t("Example:"),Ta=i(),u(Je.$$.fragment),nt=i(),se=a("h2"),ke=a("a"),vn=a("span"),u(Ze.$$.fragment),wa=i(),yn=a("span"),Ea=t("TFEncoderDecoderModel"),tt=i(),D=a("div"),u(Ke.$$.fragment),Da=i(),de=a("p"),za=t(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),kn=a("code"),Ma=t("from_pretrained()"),qa=t("function and the decoder is loaded via "),Tn=a("code"),xa=t("from_pretrained()"),ja=t(`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),$a=i(),Qe=a("p"),Pa=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Xe=a("a"),Fa=t(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ca=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Aa=i(),wn=a("p"),Sa=t(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Na=i(),eo=a("p"),Ia=t("This model inherits from "),Co=a("a"),La=t("TFPreTrainedModel"),Ba=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oa=i(),oo=a("p"),Wa=t("This model is also a "),no=a("a"),Ra=t("tf.keras.Model"),Ga=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ua=i(),V=a("p"),Ao=a("a"),Va=t("TFEncoderDecoderModel"),Ha=t(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),En=a("code"),Ya=t("from_pretrained()"),Ja=t("class method for the encoder and "),Dn=a("code"),Za=t("from_pretrained()"),Ka=t(`class
method for the decoder.`),Qa=i(),S=a("div"),u(to.$$.fragment),Xa=i(),ie=a("p"),es=t("The "),So=a("a"),os=t("TFEncoderDecoderModel"),ns=t(" forward method, overrides the "),zn=a("code"),ts=t("__call__"),rs=t(" special method."),as=i(),u(Te.$$.fragment),ss=i(),Mn=a("p"),ds=t("Examples:"),is=i(),u(ro.$$.fragment),cs=i(),L=a("div"),u(ao.$$.fragment),ls=i(),qn=a("p"),ps=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ms=i(),xn=a("p"),hs=t("Example:"),fs=i(),u(so.$$.fragment),rt=i(),ce=a("h2"),we=a("a"),jn=a("span"),u(io.$$.fragment),us=i(),$n=a("span"),gs=t("FlaxEncoderDecoderModel"),at=i(),z=a("div"),u(co.$$.fragment),_s=i(),le=a("p"),bs=t(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Pn=a("code"),vs=t("from_pretrained()"),ys=t("function and the decoder is loaded via "),Fn=a("code"),ks=t("from_pretrained()"),Ts=t(`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),ws=i(),lo=a("p"),Es=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),po=a("a"),Ds=t(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),zs=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Ms=i(),Cn=a("p"),qs=t(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),xs=i(),mo=a("p"),js=t("This model inherits from "),No=a("a"),$s=t("FlaxPreTrainedModel"),Ps=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fs=i(),ho=a("p"),Cs=t(`This model is also a Flax Linen
`),fo=a("a"),As=t("flax.nn.Module"),Ss=t(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ns=i(),H=a("p"),Io=a("a"),Is=t("FlaxEncoderDecoderModel"),Ls=t(` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),An=a("em"),Bs=t("~transformers.FlaxAutoModel.from_pretrained"),Os=t(` class method for the
encoder and :meth`),Sn=a("em"),Ws=t("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Rs=t(" class method for the decoder."),Gs=i(),N=a("div"),u(uo.$$.fragment),Us=i(),pe=a("p"),Vs=t("The "),Lo=a("a"),Hs=t("FlaxEncoderDecoderModel"),Ys=t(" forward method, overrides the "),Nn=a("code"),Js=t("__call__"),Zs=t(" special method."),Ks=i(),u(Ee.$$.fragment),Qs=i(),In=a("p"),Xs=t("Examples:"),ed=i(),u(go.$$.fragment),od=i(),B=a("div"),u(_o.$$.fragment),nd=i(),Ln=a("p"),td=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),rd=i(),Bn=a("p"),ad=t("Example:"),sd=i(),u(bo.$$.fragment),this.h()},l(n){const p=$i('[data-svelte="svelte-1phssyn"]',document.head);m=s(p,"META",{name:!0,content:!0}),p.forEach(o),q=c(n),f=s(n,"H1",{class:!0});var vo=d(f);w=s(vo,"A",{id:!0,class:!0,href:!0});var On=d(w);P=s(On,"SPAN",{});var Wn=d(P);g(k.$$.fragment,Wn),Wn.forEach(o),On.forEach(o),T=c(vo),F=s(vo,"SPAN",{});var id=d(F);zt=r(id,"Encoder Decoder Models"),id.forEach(o),vo.forEach(o),Un=c(n),me=s(n,"P",{});var dt=d(me);Mt=r(dt,"The "),wo=s(dt,"A",{href:!0});var cd=d(wo);qt=r(cd,"EncoderDecoderModel"),cd.forEach(o),xt=r(dt,` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),dt.forEach(o),Vn=c(n),he=s(n,"P",{});var it=d(he);jt=r(it,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),qe=s(it,"A",{href:!0,rel:!0});var ld=d(qe);$t=r(ld,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),ld.forEach(o),Pt=r(it,` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),it.forEach(o),Hn=c(n),fe=s(n,"P",{});var ct=d(fe);Ft=r(ct,"After such an "),Eo=s(ct,"A",{href:!0});var pd=d(Eo);Ct=r(pd,"EncoderDecoderModel"),pd.forEach(o),At=r(ct,` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),ct.forEach(o),Yn=c(n),W=s(n,"P",{});var Bo=d(W);St=r(Bo,"An application of this architecture could be to leverage two pretrained "),Do=s(Bo,"A",{href:!0});var md=d(Do);Nt=r(md,"BertModel"),md.forEach(o),It=r(Bo,` as the encoder
and decoder for a summarization model as was shown in: `),xe=s(Bo,"A",{href:!0,rel:!0});var hd=d(xe);Lt=r(hd,"Text Summarization with Pretrained Encoders"),hd.forEach(o),Bt=r(Bo," by Yang Liu and Mirella Lapata."),Bo.forEach(o),Jn=c(n),R=s(n,"P",{});var Oo=d(R);Ot=r(Oo,"The "),Qo=s(Oo,"CODE",{});var fd=d(Qo);Wt=r(fd,"from_pretrained()"),fd.forEach(o),Rt=r(Oo,`currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),Xo=s(Oo,"CODE",{});var ud=d(Xo);Gt=r(ud,"from_pt=True"),ud.forEach(o),Ut=r(Oo,` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Oo.forEach(o),Zn=c(n),g(je.$$.fragment,n),Kn=c(n),G=s(n,"P",{});var Wo=d(G);Vt=r(Wo,"This model was contributed by "),$e=s(Wo,"A",{href:!0,rel:!0});var gd=d($e);Ht=r(gd,"thomwolf"),gd.forEach(o),Yt=r(Wo,`. This model\u2019s TensorFlow and Flax versions
were contributed by `),Pe=s(Wo,"A",{href:!0,rel:!0});var _d=d(Pe);Jt=r(_d,"ydshieh"),_d.forEach(o),Zt=r(Wo,"."),Wo.forEach(o),Qn=c(n),X=s(n,"H2",{class:!0});var lt=d(X);ue=s(lt,"A",{id:!0,class:!0,href:!0});var bd=d(ue);en=s(bd,"SPAN",{});var vd=d(en);g(Fe.$$.fragment,vd),vd.forEach(o),bd.forEach(o),Kt=c(lt),on=s(lt,"SPAN",{});var yd=d(on);Qt=r(yd,"EncoderDecoderConfig"),yd.forEach(o),lt.forEach(o),Xn=c(n),M=s(n,"DIV",{class:!0});var I=d(M);g(Ce.$$.fragment,I),Xt=c(I),ge=s(I,"P",{});var Rn=d(ge);zo=s(Rn,"A",{href:!0});var kd=d(zo);er=r(kd,"EncoderDecoderConfig"),kd.forEach(o),or=r(Rn," is the configuration class to store the configuration of a "),Mo=s(Rn,"A",{href:!0});var Td=d(Mo);nr=r(Td,"EncoderDecoderModel"),Td.forEach(o),tr=r(Rn,`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),Rn.forEach(o),rr=c(I),ee=s(I,"P",{});var Ro=d(ee);ar=r(Ro,"Configuration objects inherit from "),qo=s(Ro,"A",{href:!0});var wd=d(qo);sr=r(wd,"PretrainedConfig"),wd.forEach(o),dr=r(Ro,` and can be used to control the model outputs. Read the
documentation from `),xo=s(Ro,"A",{href:!0});var Ed=d(xo);ir=r(Ed,"PretrainedConfig"),Ed.forEach(o),cr=r(Ro," for more information."),Ro.forEach(o),lr=c(I),nn=s(I,"P",{});var Dd=d(nn);pr=r(Dd,"Examples:"),Dd.forEach(o),mr=c(I),g(Ae.$$.fragment,I),hr=c(I),_e=s(I,"DIV",{class:!0});var pt=d(_e);g(Se.$$.fragment,pt),fr=c(pt),Ne=s(pt,"P",{});var mt=d(Ne);ur=r(mt,"Instantiate a "),jo=s(mt,"A",{href:!0});var zd=d(jo);gr=r(zd,"EncoderDecoderConfig"),zd.forEach(o),_r=r(mt,` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),mt.forEach(o),pt.forEach(o),br=c(I),be=s(I,"DIV",{class:!0});var ht=d(be);g(Ie.$$.fragment,ht),vr=c(ht),oe=s(ht,"P",{});var Go=d(oe);yr=r(Go,"Serializes this instance to a Python dictionary. Override the default "),tn=s(Go,"EM",{});var Md=d(tn);kr=r(Md,"to_dict()"),Md.forEach(o),Tr=r(Go," from "),rn=s(Go,"EM",{});var qd=d(rn);wr=r(qd,"PretrainedConfig"),qd.forEach(o),Er=r(Go,"."),Go.forEach(o),ht.forEach(o),I.forEach(o),et=c(n),ne=s(n,"H2",{class:!0});var ft=d(ne);ve=s(ft,"A",{id:!0,class:!0,href:!0});var xd=d(ve);an=s(xd,"SPAN",{});var jd=d(an);g(Le.$$.fragment,jd),jd.forEach(o),xd.forEach(o),Dr=c(ft),sn=s(ft,"SPAN",{});var $d=d(sn);zr=r($d,"EncoderDecoderModel"),$d.forEach(o),ft.forEach(o),ot=c(n),E=s(n,"DIV",{class:!0});var x=d(E);g(Be.$$.fragment,x),Mr=c(x),te=s(x,"P",{});var Uo=d(te);qr=r(Uo,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),dn=s(Uo,"CODE",{});var Pd=d(dn);xr=r(Pd,"from_pretrained()"),Pd.forEach(o),jr=r(Uo,"function and the decoder is loaded via "),cn=s(Uo,"CODE",{});var Fd=d(cn);$r=r(Fd,"from_pretrained()"),Fd.forEach(o),Pr=r(Uo,`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Uo.forEach(o),Fr=c(x),Oe=s(x,"P",{});var ut=d(Oe);Cr=r(ut,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),We=s(ut,"A",{href:!0,rel:!0});var Cd=d(We);Ar=r(Cd,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Cd.forEach(o),Sr=r(ut,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ut.forEach(o),Nr=c(x),ln=s(x,"P",{});var Ad=d(ln);Ir=r(Ad,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Ad.forEach(o),Lr=c(x),Re=s(x,"P",{});var gt=d(Re);Br=r(gt,"This model inherits from "),$o=s(gt,"A",{href:!0});var Sd=d($o);Or=r(Sd,"PreTrainedModel"),Sd.forEach(o),Wr=r(gt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gt.forEach(o),Rr=c(x),Ge=s(x,"P",{});var _t=d(Ge);Gr=r(_t,"This model is also a PyTorch "),Ue=s(_t,"A",{href:!0,rel:!0});var Nd=d(Ue);Ur=r(Nd,"torch.nn.Module"),Nd.forEach(o),Vr=r(_t,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_t.forEach(o),Hr=c(x),U=s(x,"P",{});var yo=d(U);Po=s(yo,"A",{href:!0});var Id=d(Po);Yr=r(Id,"EncoderDecoderModel"),Id.forEach(o),Jr=r(yo,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),pn=s(yo,"EM",{});var Ld=d(pn);Zr=r(Ld,"~transformers.AutoModel.from_pretrained"),Ld.forEach(o),Kr=r(yo,` class method for the encoder and
:meth`),mn=s(yo,"EM",{});var Bd=d(mn);Qr=r(Bd,"~transformers.AutoModelForCausalLM.from_pretrained"),Bd.forEach(o),Xr=r(yo," class method for the decoder."),yo.forEach(o),ea=c(x),C=s(x,"DIV",{class:!0});var Y=d(C);g(Ve.$$.fragment,Y),oa=c(Y),re=s(Y,"P",{});var Vo=d(re);na=r(Vo,"The "),Fo=s(Vo,"A",{href:!0});var Od=d(Fo);ta=r(Od,"EncoderDecoderModel"),Od.forEach(o),ra=r(Vo," forward method, overrides the "),hn=s(Vo,"CODE",{});var Wd=d(hn);aa=r(Wd,"__call__"),Wd.forEach(o),sa=r(Vo," special method."),Vo.forEach(o),da=c(Y),g(ye.$$.fragment,Y),ia=c(Y),fn=s(Y,"P",{});var Rd=d(fn);ca=r(Rd,"Examples:"),Rd.forEach(o),la=c(Y),g(He.$$.fragment,Y),Y.forEach(o),pa=c(x),A=s(x,"DIV",{class:!0});var J=d(A);g(Ye.$$.fragment,J),ma=c(J),un=s(J,"P",{});var Gd=d(un);ha=r(Gd,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Gd.forEach(o),fa=c(J),ae=s(J,"P",{});var Ho=d(ae);ua=r(Ho,"The model is set in evaluation mode by default using "),gn=s(Ho,"CODE",{});var Ud=d(gn);ga=r(Ud,"model.eval()"),Ud.forEach(o),_a=r(Ho,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),_n=s(Ho,"CODE",{});var Vd=d(_n);ba=r(Vd,"model.train()"),Vd.forEach(o),va=r(Ho,"."),Ho.forEach(o),ya=c(J),bn=s(J,"P",{});var Hd=d(bn);ka=r(Hd,"Example:"),Hd.forEach(o),Ta=c(J),g(Je.$$.fragment,J),J.forEach(o),x.forEach(o),nt=c(n),se=s(n,"H2",{class:!0});var bt=d(se);ke=s(bt,"A",{id:!0,class:!0,href:!0});var Yd=d(ke);vn=s(Yd,"SPAN",{});var Jd=d(vn);g(Ze.$$.fragment,Jd),Jd.forEach(o),Yd.forEach(o),wa=c(bt),yn=s(bt,"SPAN",{});var Zd=d(yn);Ea=r(Zd,"TFEncoderDecoderModel"),Zd.forEach(o),bt.forEach(o),tt=c(n),D=s(n,"DIV",{class:!0});var j=d(D);g(Ke.$$.fragment,j),Da=c(j),de=s(j,"P",{});var Yo=d(de);za=r(Yo,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),kn=s(Yo,"CODE",{});var Kd=d(kn);Ma=r(Kd,"from_pretrained()"),Kd.forEach(o),qa=r(Yo,"function and the decoder is loaded via "),Tn=s(Yo,"CODE",{});var Qd=d(Tn);xa=r(Qd,"from_pretrained()"),Qd.forEach(o),ja=r(Yo,`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Yo.forEach(o),$a=c(j),Qe=s(j,"P",{});var vt=d(Qe);Pa=r(vt,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Xe=s(vt,"A",{href:!0,rel:!0});var Xd=d(Xe);Fa=r(Xd,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Xd.forEach(o),Ca=r(vt,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),vt.forEach(o),Aa=c(j),wn=s(j,"P",{});var ei=d(wn);Sa=r(ei,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),ei.forEach(o),Na=c(j),eo=s(j,"P",{});var yt=d(eo);Ia=r(yt,"This model inherits from "),Co=s(yt,"A",{href:!0});var oi=d(Co);La=r(oi,"TFPreTrainedModel"),oi.forEach(o),Ba=r(yt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yt.forEach(o),Oa=c(j),oo=s(j,"P",{});var kt=d(oo);Wa=r(kt,"This model is also a "),no=s(kt,"A",{href:!0,rel:!0});var ni=d(no);Ra=r(ni,"tf.keras.Model"),ni.forEach(o),Ga=r(kt,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kt.forEach(o),Ua=c(j),V=s(j,"P",{});var ko=d(V);Ao=s(ko,"A",{href:!0});var ti=d(Ao);Va=r(ti,"TFEncoderDecoderModel"),ti.forEach(o),Ha=r(ko,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),En=s(ko,"CODE",{});var ri=d(En);Ya=r(ri,"from_pretrained()"),ri.forEach(o),Ja=r(ko,"class method for the encoder and "),Dn=s(ko,"CODE",{});var ai=d(Dn);Za=r(ai,"from_pretrained()"),ai.forEach(o),Ka=r(ko,`class
method for the decoder.`),ko.forEach(o),Qa=c(j),S=s(j,"DIV",{class:!0});var Z=d(S);g(to.$$.fragment,Z),Xa=c(Z),ie=s(Z,"P",{});var Jo=d(ie);es=r(Jo,"The "),So=s(Jo,"A",{href:!0});var si=d(So);os=r(si,"TFEncoderDecoderModel"),si.forEach(o),ns=r(Jo," forward method, overrides the "),zn=s(Jo,"CODE",{});var di=d(zn);ts=r(di,"__call__"),di.forEach(o),rs=r(Jo," special method."),Jo.forEach(o),as=c(Z),g(Te.$$.fragment,Z),ss=c(Z),Mn=s(Z,"P",{});var ii=d(Mn);ds=r(ii,"Examples:"),ii.forEach(o),is=c(Z),g(ro.$$.fragment,Z),Z.forEach(o),cs=c(j),L=s(j,"DIV",{class:!0});var De=d(L);g(ao.$$.fragment,De),ls=c(De),qn=s(De,"P",{});var ci=d(qn);ps=r(ci,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ci.forEach(o),ms=c(De),xn=s(De,"P",{});var li=d(xn);hs=r(li,"Example:"),li.forEach(o),fs=c(De),g(so.$$.fragment,De),De.forEach(o),j.forEach(o),rt=c(n),ce=s(n,"H2",{class:!0});var Tt=d(ce);we=s(Tt,"A",{id:!0,class:!0,href:!0});var pi=d(we);jn=s(pi,"SPAN",{});var mi=d(jn);g(io.$$.fragment,mi),mi.forEach(o),pi.forEach(o),us=c(Tt),$n=s(Tt,"SPAN",{});var hi=d($n);gs=r(hi,"FlaxEncoderDecoderModel"),hi.forEach(o),Tt.forEach(o),at=c(n),z=s(n,"DIV",{class:!0});var $=d(z);g(co.$$.fragment,$),_s=c($),le=s($,"P",{});var Zo=d(le);bs=r(Zo,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Pn=s(Zo,"CODE",{});var fi=d(Pn);vs=r(fi,"from_pretrained()"),fi.forEach(o),ys=r(Zo,"function and the decoder is loaded via "),Fn=s(Zo,"CODE",{});var ui=d(Fn);ks=r(ui,"from_pretrained()"),ui.forEach(o),Ts=r(Zo,`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Zo.forEach(o),ws=c($),lo=s($,"P",{});var wt=d(lo);Es=r(wt,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),po=s(wt,"A",{href:!0,rel:!0});var gi=d(po);Ds=r(gi,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),gi.forEach(o),zs=r(wt,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),wt.forEach(o),Ms=c($),Cn=s($,"P",{});var _i=d(Cn);qs=r(_i,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),_i.forEach(o),xs=c($),mo=s($,"P",{});var Et=d(mo);js=r(Et,"This model inherits from "),No=s(Et,"A",{href:!0});var bi=d(No);$s=r(bi,"FlaxPreTrainedModel"),bi.forEach(o),Ps=r(Et,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Et.forEach(o),Fs=c($),ho=s($,"P",{});var Dt=d(ho);Cs=r(Dt,`This model is also a Flax Linen
`),fo=s(Dt,"A",{href:!0,rel:!0});var vi=d(fo);As=r(vi,"flax.nn.Module"),vi.forEach(o),Ss=r(Dt,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Dt.forEach(o),Ns=c($),H=s($,"P",{});var To=d(H);Io=s(To,"A",{href:!0});var yi=d(Io);Is=r(yi,"FlaxEncoderDecoderModel"),yi.forEach(o),Ls=r(To,` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),An=s(To,"EM",{});var ki=d(An);Bs=r(ki,"~transformers.FlaxAutoModel.from_pretrained"),ki.forEach(o),Os=r(To,` class method for the
encoder and :meth`),Sn=s(To,"EM",{});var Ti=d(Sn);Ws=r(Ti,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Ti.forEach(o),Rs=r(To," class method for the decoder."),To.forEach(o),Gs=c($),N=s($,"DIV",{class:!0});var K=d(N);g(uo.$$.fragment,K),Us=c(K),pe=s(K,"P",{});var Ko=d(pe);Vs=r(Ko,"The "),Lo=s(Ko,"A",{href:!0});var wi=d(Lo);Hs=r(wi,"FlaxEncoderDecoderModel"),wi.forEach(o),Ys=r(Ko," forward method, overrides the "),Nn=s(Ko,"CODE",{});var Ei=d(Nn);Js=r(Ei,"__call__"),Ei.forEach(o),Zs=r(Ko," special method."),Ko.forEach(o),Ks=c(K),g(Ee.$$.fragment,K),Qs=c(K),In=s(K,"P",{});var Di=d(In);Xs=r(Di,"Examples:"),Di.forEach(o),ed=c(K),g(go.$$.fragment,K),K.forEach(o),od=c($),B=s($,"DIV",{class:!0});var ze=d(B);g(_o.$$.fragment,ze),nd=c(ze),Ln=s(ze,"P",{});var zi=d(Ln);td=r(zi,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),zi.forEach(o),rd=c(ze),Bn=s(ze,"P",{});var Mi=d(Bn);ad=r(Mi,"Example:"),Mi.forEach(o),sd=c(ze),g(bo.$$.fragment,ze),ze.forEach(o),$.forEach(o),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Si)),l(w,"id","encoder-decoder-models"),l(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(w,"href","#encoder-decoder-models"),l(f,"class","relative group"),l(wo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(qe,"href","https://arxiv.org/abs/1907.12461"),l(qe,"rel","nofollow"),l(Eo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(Do,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),l(xe,"href","https://arxiv.org/abs/1908.08345"),l(xe,"rel","nofollow"),l($e,"href","https://github.com/thomwolf"),l($e,"rel","nofollow"),l(Pe,"href","https://github.com/ydshieh"),l(Pe,"rel","nofollow"),l(ue,"id","transformers.EncoderDecoderConfig"),l(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ue,"href","#transformers.EncoderDecoderConfig"),l(X,"class","relative group"),l(zo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),l(Mo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(qo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(xo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(jo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),l(_e,"class","docstring"),l(be,"class","docstring"),l(M,"class","docstring"),l(ve,"id","transformers.EncoderDecoderModel"),l(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ve,"href","#transformers.EncoderDecoderModel"),l(ne,"class","relative group"),l(We,"href","https://arxiv.org/abs/1907.12461"),l(We,"rel","nofollow"),l($o,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Ue,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ue,"rel","nofollow"),l(Po,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(Fo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(C,"class","docstring"),l(A,"class","docstring"),l(E,"class","docstring"),l(ke,"id","transformers.TFEncoderDecoderModel"),l(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ke,"href","#transformers.TFEncoderDecoderModel"),l(se,"class","relative group"),l(Xe,"href","https://arxiv.org/abs/1907.12461"),l(Xe,"rel","nofollow"),l(Co,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),l(no,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(no,"rel","nofollow"),l(Ao,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),l(So,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),l(S,"class","docstring"),l(L,"class","docstring"),l(D,"class","docstring"),l(we,"id","transformers.FlaxEncoderDecoderModel"),l(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(we,"href","#transformers.FlaxEncoderDecoderModel"),l(ce,"class","relative group"),l(po,"href","https://arxiv.org/abs/1907.12461"),l(po,"rel","nofollow"),l(No,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(fo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),l(fo,"rel","nofollow"),l(Io,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),l(Lo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),l(N,"class","docstring"),l(B,"class","docstring"),l(z,"class","docstring")},m(n,p){e(document.head,m),h(n,q,p),h(n,f,p),e(f,w),e(w,P),_(k,P,null),e(f,T),e(f,F),e(F,zt),h(n,Un,p),h(n,me,p),e(me,Mt),e(me,wo),e(wo,qt),e(me,xt),h(n,Vn,p),h(n,he,p),e(he,jt),e(he,qe),e(qe,$t),e(he,Pt),h(n,Hn,p),h(n,fe,p),e(fe,Ft),e(fe,Eo),e(Eo,Ct),e(fe,At),h(n,Yn,p),h(n,W,p),e(W,St),e(W,Do),e(Do,Nt),e(W,It),e(W,xe),e(xe,Lt),e(W,Bt),h(n,Jn,p),h(n,R,p),e(R,Ot),e(R,Qo),e(Qo,Wt),e(R,Rt),e(R,Xo),e(Xo,Gt),e(R,Ut),h(n,Zn,p),_(je,n,p),h(n,Kn,p),h(n,G,p),e(G,Vt),e(G,$e),e($e,Ht),e(G,Yt),e(G,Pe),e(Pe,Jt),e(G,Zt),h(n,Qn,p),h(n,X,p),e(X,ue),e(ue,en),_(Fe,en,null),e(X,Kt),e(X,on),e(on,Qt),h(n,Xn,p),h(n,M,p),_(Ce,M,null),e(M,Xt),e(M,ge),e(ge,zo),e(zo,er),e(ge,or),e(ge,Mo),e(Mo,nr),e(ge,tr),e(M,rr),e(M,ee),e(ee,ar),e(ee,qo),e(qo,sr),e(ee,dr),e(ee,xo),e(xo,ir),e(ee,cr),e(M,lr),e(M,nn),e(nn,pr),e(M,mr),_(Ae,M,null),e(M,hr),e(M,_e),_(Se,_e,null),e(_e,fr),e(_e,Ne),e(Ne,ur),e(Ne,jo),e(jo,gr),e(Ne,_r),e(M,br),e(M,be),_(Ie,be,null),e(be,vr),e(be,oe),e(oe,yr),e(oe,tn),e(tn,kr),e(oe,Tr),e(oe,rn),e(rn,wr),e(oe,Er),h(n,et,p),h(n,ne,p),e(ne,ve),e(ve,an),_(Le,an,null),e(ne,Dr),e(ne,sn),e(sn,zr),h(n,ot,p),h(n,E,p),_(Be,E,null),e(E,Mr),e(E,te),e(te,qr),e(te,dn),e(dn,xr),e(te,jr),e(te,cn),e(cn,$r),e(te,Pr),e(E,Fr),e(E,Oe),e(Oe,Cr),e(Oe,We),e(We,Ar),e(Oe,Sr),e(E,Nr),e(E,ln),e(ln,Ir),e(E,Lr),e(E,Re),e(Re,Br),e(Re,$o),e($o,Or),e(Re,Wr),e(E,Rr),e(E,Ge),e(Ge,Gr),e(Ge,Ue),e(Ue,Ur),e(Ge,Vr),e(E,Hr),e(E,U),e(U,Po),e(Po,Yr),e(U,Jr),e(U,pn),e(pn,Zr),e(U,Kr),e(U,mn),e(mn,Qr),e(U,Xr),e(E,ea),e(E,C),_(Ve,C,null),e(C,oa),e(C,re),e(re,na),e(re,Fo),e(Fo,ta),e(re,ra),e(re,hn),e(hn,aa),e(re,sa),e(C,da),_(ye,C,null),e(C,ia),e(C,fn),e(fn,ca),e(C,la),_(He,C,null),e(E,pa),e(E,A),_(Ye,A,null),e(A,ma),e(A,un),e(un,ha),e(A,fa),e(A,ae),e(ae,ua),e(ae,gn),e(gn,ga),e(ae,_a),e(ae,_n),e(_n,ba),e(ae,va),e(A,ya),e(A,bn),e(bn,ka),e(A,Ta),_(Je,A,null),h(n,nt,p),h(n,se,p),e(se,ke),e(ke,vn),_(Ze,vn,null),e(se,wa),e(se,yn),e(yn,Ea),h(n,tt,p),h(n,D,p),_(Ke,D,null),e(D,Da),e(D,de),e(de,za),e(de,kn),e(kn,Ma),e(de,qa),e(de,Tn),e(Tn,xa),e(de,ja),e(D,$a),e(D,Qe),e(Qe,Pa),e(Qe,Xe),e(Xe,Fa),e(Qe,Ca),e(D,Aa),e(D,wn),e(wn,Sa),e(D,Na),e(D,eo),e(eo,Ia),e(eo,Co),e(Co,La),e(eo,Ba),e(D,Oa),e(D,oo),e(oo,Wa),e(oo,no),e(no,Ra),e(oo,Ga),e(D,Ua),e(D,V),e(V,Ao),e(Ao,Va),e(V,Ha),e(V,En),e(En,Ya),e(V,Ja),e(V,Dn),e(Dn,Za),e(V,Ka),e(D,Qa),e(D,S),_(to,S,null),e(S,Xa),e(S,ie),e(ie,es),e(ie,So),e(So,os),e(ie,ns),e(ie,zn),e(zn,ts),e(ie,rs),e(S,as),_(Te,S,null),e(S,ss),e(S,Mn),e(Mn,ds),e(S,is),_(ro,S,null),e(D,cs),e(D,L),_(ao,L,null),e(L,ls),e(L,qn),e(qn,ps),e(L,ms),e(L,xn),e(xn,hs),e(L,fs),_(so,L,null),h(n,rt,p),h(n,ce,p),e(ce,we),e(we,jn),_(io,jn,null),e(ce,us),e(ce,$n),e($n,gs),h(n,at,p),h(n,z,p),_(co,z,null),e(z,_s),e(z,le),e(le,bs),e(le,Pn),e(Pn,vs),e(le,ys),e(le,Fn),e(Fn,ks),e(le,Ts),e(z,ws),e(z,lo),e(lo,Es),e(lo,po),e(po,Ds),e(lo,zs),e(z,Ms),e(z,Cn),e(Cn,qs),e(z,xs),e(z,mo),e(mo,js),e(mo,No),e(No,$s),e(mo,Ps),e(z,Fs),e(z,ho),e(ho,Cs),e(ho,fo),e(fo,As),e(ho,Ss),e(z,Ns),e(z,H),e(H,Io),e(Io,Is),e(H,Ls),e(H,An),e(An,Bs),e(H,Os),e(H,Sn),e(Sn,Ws),e(H,Rs),e(z,Gs),e(z,N),_(uo,N,null),e(N,Us),e(N,pe),e(pe,Vs),e(pe,Lo),e(Lo,Hs),e(pe,Ys),e(pe,Nn),e(Nn,Js),e(pe,Zs),e(N,Ks),_(Ee,N,null),e(N,Qs),e(N,In),e(In,Xs),e(N,ed),_(go,N,null),e(z,od),e(z,B),_(_o,B,null),e(B,nd),e(B,Ln),e(Ln,td),e(B,rd),e(B,Bn),e(Bn,ad),e(B,sd),_(bo,B,null),st=!0},p(n,[p]){const vo={};p&2&&(vo.$$scope={dirty:p,ctx:n}),ye.$set(vo);const On={};p&2&&(On.$$scope={dirty:p,ctx:n}),Te.$set(On);const Wn={};p&2&&(Wn.$$scope={dirty:p,ctx:n}),Ee.$set(Wn)},i(n){st||(b(k.$$.fragment,n),b(je.$$.fragment,n),b(Fe.$$.fragment,n),b(Ce.$$.fragment,n),b(Ae.$$.fragment,n),b(Se.$$.fragment,n),b(Ie.$$.fragment,n),b(Le.$$.fragment,n),b(Be.$$.fragment,n),b(Ve.$$.fragment,n),b(ye.$$.fragment,n),b(He.$$.fragment,n),b(Ye.$$.fragment,n),b(Je.$$.fragment,n),b(Ze.$$.fragment,n),b(Ke.$$.fragment,n),b(to.$$.fragment,n),b(Te.$$.fragment,n),b(ro.$$.fragment,n),b(ao.$$.fragment,n),b(so.$$.fragment,n),b(io.$$.fragment,n),b(co.$$.fragment,n),b(uo.$$.fragment,n),b(Ee.$$.fragment,n),b(go.$$.fragment,n),b(_o.$$.fragment,n),b(bo.$$.fragment,n),st=!0)},o(n){v(k.$$.fragment,n),v(je.$$.fragment,n),v(Fe.$$.fragment,n),v(Ce.$$.fragment,n),v(Ae.$$.fragment,n),v(Se.$$.fragment,n),v(Ie.$$.fragment,n),v(Le.$$.fragment,n),v(Be.$$.fragment,n),v(Ve.$$.fragment,n),v(ye.$$.fragment,n),v(He.$$.fragment,n),v(Ye.$$.fragment,n),v(Je.$$.fragment,n),v(Ze.$$.fragment,n),v(Ke.$$.fragment,n),v(to.$$.fragment,n),v(Te.$$.fragment,n),v(ro.$$.fragment,n),v(ao.$$.fragment,n),v(so.$$.fragment,n),v(io.$$.fragment,n),v(co.$$.fragment,n),v(uo.$$.fragment,n),v(Ee.$$.fragment,n),v(go.$$.fragment,n),v(_o.$$.fragment,n),v(bo.$$.fragment,n),st=!1},d(n){o(m),n&&o(q),n&&o(f),y(k),n&&o(Un),n&&o(me),n&&o(Vn),n&&o(he),n&&o(Hn),n&&o(fe),n&&o(Yn),n&&o(W),n&&o(Jn),n&&o(R),n&&o(Zn),y(je,n),n&&o(Kn),n&&o(G),n&&o(Qn),n&&o(X),y(Fe),n&&o(Xn),n&&o(M),y(Ce),y(Ae),y(Se),y(Ie),n&&o(et),n&&o(ne),y(Le),n&&o(ot),n&&o(E),y(Be),y(Ve),y(ye),y(He),y(Ye),y(Je),n&&o(nt),n&&o(se),y(Ze),n&&o(tt),n&&o(D),y(Ke),y(to),y(Te),y(ro),y(ao),y(so),n&&o(rt),n&&o(ce),y(io),n&&o(at),n&&o(z),y(co),y(uo),y(Ee),y(go),y(_o),y(bo)}}}const Si={local:"encoder-decoder-models",sections:[{local:"transformers.EncoderDecoderConfig",title:"EncoderDecoderConfig"},{local:"transformers.EncoderDecoderModel",title:"EncoderDecoderModel"},{local:"transformers.TFEncoderDecoderModel",title:"TFEncoderDecoderModel"},{local:"transformers.FlaxEncoderDecoderModel",title:"FlaxEncoderDecoderModel"}],title:"Encoder Decoder Models"};function Ni(Q,m,q){let{fw:f}=m;return Q.$$set=w=>{"fw"in w&&q(0,f=w.fw)},[f]}class Gi extends qi{constructor(m){super();xi(this,m,Ni,Ai,ji,{fw:0})}}export{Gi as default,Si as metadata};
