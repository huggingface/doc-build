import{S as On,i as $n,s as zn,e as n,k as m,w as b,t as i,M as Mn,c as a,d as t,m as f,a as s,x as y,h as d,b as l,F as o,g as u,y as w,q as P,o as k,B as O,v as Cn,L as Bt}from"../../chunks/vendor-6b77c823.js";import{T as xn}from"../../chunks/Tip-39098574.js";import{D as Qe}from"../../chunks/Docstring-1088f2fb.js";import{C as Gt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Xe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Wt}from"../../chunks/ExampleCodeBlock-5212b321.js";function En(E){let p,v,_,h,T;return h=new Gt({props:{code:`from transformers import OPTModel, OPTConfig

# Initializing a OPT facebook/opt-large style configuration
configuration = OPTConfig()

# Initializing a model from the facebook/opt-large style configuration
model = OPTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OPTModel, OPTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a OPT facebook/opt-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = OPTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/opt-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),v=i("Example:"),_=m(),b(h.$$.fragment)},l(r){p=a(r,"P",{});var g=s(p);v=d(g,"Example:"),g.forEach(t),_=f(r),y(h.$$.fragment,r)},m(r,g){u(r,p,g),o(p,v),u(r,_,g),w(h,r,g),T=!0},p:Bt,i(r){T||(P(h.$$.fragment,r),T=!0)},o(r){k(h.$$.fragment,r),T=!1},d(r){r&&t(p),r&&t(_),O(h,r)}}}function qn(E){let p,v,_,h,T;return{c(){p=n("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),h=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){p=a(r,"P",{});var g=s(p);v=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(g,"CODE",{});var B=s(_);h=d(B,"Module"),B.forEach(t),T=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(r,g){u(r,p,g),o(p,v),o(p,_),o(_,h),o(p,T)},d(r){r&&t(p)}}}function Fn(E){let p,v,_,h,T;return h=new Gt({props:{code:`from transformers import GPT2Tokenizer, OPTModel
import torch

tokenizer = GPT2Tokenizer.from_pretrained("")
model = OPTModel.from_pretrained("")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, OPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTModel.from_pretrained(<span class="hljs-string">&quot;&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),v=i("Example:"),_=m(),b(h.$$.fragment)},l(r){p=a(r,"P",{});var g=s(p);v=d(g,"Example:"),g.forEach(t),_=f(r),y(h.$$.fragment,r)},m(r,g){u(r,p,g),o(p,v),u(r,_,g),w(h,r,g),T=!0},p:Bt,i(r){T||(P(h.$$.fragment,r),T=!0)},o(r){k(h.$$.fragment,r),T=!1},d(r){r&&t(p),r&&t(_),O(h,r)}}}function jn(E){let p,v,_,h,T;return h=new Gt({props:{code:`from transformers import OPTTokenizer, OPTForCausalLM

tokenizer = OPTTokenizer.from_pretrained("patrickvonplaten/opt_gpt2_tokenizer")
model = OPTForCausalLM.from_pretrained("ArthurZ/opt-350m")
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OPTTokenizer, OPTForCausalLM
<span class="hljs-comment"># this needs fixing</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OPTTokenizer.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/opt_gpt2_tokenizer&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForCausalLM.from_pretrained(<span class="hljs-string">&quot;ArthurZ/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){p=n("p"),v=i("Example:"),_=m(),b(h.$$.fragment)},l(r){p=a(r,"P",{});var g=s(p);v=d(g,"Example:"),g.forEach(t),_=f(r),y(h.$$.fragment,r)},m(r,g){u(r,p,g),o(p,v),u(r,_,g),w(h,r,g),T=!0},p:Bt,i(r){T||(P(h.$$.fragment,r),T=!0)},o(r){k(h.$$.fragment,r),T=!1},d(r){r&&t(p),r&&t(_),O(h,r)}}}function Ln(E){let p,v,_,h,T,r,g,B,$o,eo,j,G,Le,ne,zo,Ae,Mo,oo,H,Co,ae,xo,Eo,to,Pe,qo,no,ke,Ie,Fo,ao,Oe,jo,so,V,se,Lo,Ne,Ao,Io,No,z,So,Se,Do,Wo,De,Bo,Go,We,Ho,Vo,$e,Zo,Ro,ro,$,Uo,re,Yo,Jo,ie,Ko,Qo,de,Xo,et,le,ot,tt,io,L,Z,Be,ce,nt,Ge,at,lo,M,pe,st,A,rt,ze,it,dt,he,lt,ct,pt,I,ht,Me,ut,mt,Ce,ft,gt,_t,R,co,N,U,He,ue,Tt,Ve,vt,po,C,me,bt,fe,yt,xe,wt,Pt,kt,ge,Ot,_e,$t,zt,Mt,x,Te,Ct,S,xt,Ee,Et,qt,Ze,Ft,jt,Lt,Y,At,J,ho,D,K,Re,ve,It,Ue,Nt,uo,W,be,St,Q,ye,Dt,X,mo;return r=new Xe({}),ne=new Xe({}),ce=new Xe({}),pe=new Qe({props:{name:"class transformers.OPTConfig",anchor:"transformers.OPTConfig",parameters:[{name:"vocab_size",val:" = 50272"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"ffn_dim",val:" = 3072"},{name:"max_position_embeddings",val:" = 2048"},{name:"do_layer_norm_before",val:" = True"},{name:"word_embed_proj_dim",val:" = None"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"num_attention_heads",val:" = 12"},{name:"activation_function",val:" = 'relu'"},{name:"layerdrop",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50272) &#x2014;
Vocabulary size of the OPT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTModel">OPTModel</a>`,name:"vocab_size"},{anchor:"transformers.OPTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.OPTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"num_hidden_layers"},{anchor:"transformers.OPTConfig.ffn_dim",description:`<strong>ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"ffn_dim"},{anchor:"transformers.OPTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"num_attention_heads"},{anchor:"transformers.OPTConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.OPTConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.OPTConfig.do_layer_norm_before",description:`<strong>do_layer_norm_before</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to perform layer normalization before the attention block.`,name:"do_layer_norm_before"},{anchor:"transformers.OPTConfig.word_embed_proj_dim",description:`<strong>word_embed_proj_dim</strong> (<code>int</code>, <em>optional</em>) &#x2014;
<code>word_embed_proj_dim</code> can be set to down-project word embeddings, <em>e.g.</em> <code>opt-350m</code>. Defaults to
<code>hidden_size</code>.`,name:"word_embed_proj_dim"},{anchor:"transformers.OPTConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.OPTConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.OPTConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.
layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more
details.`,name:"activation_dropout"},{anchor:"transformers.OPTConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.OPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/configuration_opt.py#L32"}}),R=new Wt({props:{anchor:"transformers.OPTConfig.example",$$slots:{default:[En]},$$scope:{ctx:E}}}),ue=new Xe({}),me=new Qe({props:{name:"class transformers.OPTModel",anchor:"transformers.OPTModel",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L762"}}),Te=new Qe({props:{name:"forward",anchor:"transformers.OPTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>If you want to change padding behavior, you should read <code>modeling_opt._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"attention_mask"},{anchor:"transformers.OPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OPTModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.OPTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OPTModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.OPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L779",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Y=new xn({props:{$$slots:{default:[qn]},$$scope:{ctx:E}}}),J=new Wt({props:{anchor:"transformers.OPTModel.forward.example",$$slots:{default:[Fn]},$$scope:{ctx:E}}}),ve=new Xe({}),be=new Qe({props:{name:"class transformers.OPTForCausalLM",anchor:"transformers.OPTForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L831"}}),ye=new Qe({props:{name:"forward",anchor:"transformers.OPTForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OPTForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_hidden_layers, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OPTForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.OPTForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OPTForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.OPTForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.OPTForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L862",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>)</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),X=new Wt({props:{anchor:"transformers.OPTForCausalLM.forward.example",$$slots:{default:[jn]},$$scope:{ctx:E}}}),{c(){p=n("meta"),v=m(),_=n("h1"),h=n("a"),T=n("span"),b(r.$$.fragment),g=m(),B=n("span"),$o=i("OPT"),eo=m(),j=n("h2"),G=n("a"),Le=n("span"),b(ne.$$.fragment),zo=m(),Ae=n("span"),Mo=i("Overview"),oo=m(),H=n("p"),Co=i("The OPT model was proposed in "),ae=n("a"),xo=i("Open Pre-trained Transformer Language Models"),Eo=i(` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),to=m(),Pe=n("p"),qo=i("The abstract from the paper is the following:"),no=m(),ke=n("p"),Ie=n("em"),Fo=i("Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),ao=m(),Oe=n("p"),jo=i("Tips:"),so=m(),V=n("ul"),se=n("li"),Lo=i("OPT has the same architecture as "),Ne=n("code"),Ao=i("BartDecoder"),Io=i("."),No=m(),z=n("li"),So=i("Contrary to GPT2, OPT adds the EOS token "),Se=n("code"),Do=i("</s>"),Wo=i(" to the beginning of every prompt. "),De=n("strong"),Bo=i("Note"),Go=i(": Make sure to pass "),We=n("code"),Ho=i("use_fast=False"),Vo=i(" when loading OPT\u2019s tokenizer with "),$e=n("a"),Zo=i("AutoTokenizer"),Ro=i(" to get the correct tokenizer."),ro=m(),$=n("p"),Uo=i("This model was contributed by "),re=n("a"),Yo=i("Arthur Zucker"),Jo=i(", "),ie=n("a"),Ko=i("Younes Belkada"),Qo=i(", and "),de=n("a"),Xo=i("Patrick Von Platen"),et=i(`.
The original code can be found `),le=n("a"),ot=i("here"),tt=i("."),io=m(),L=n("h2"),Z=n("a"),Be=n("span"),b(ce.$$.fragment),nt=m(),Ge=n("span"),at=i("OPTConfig"),lo=m(),M=n("div"),b(pe.$$.fragment),st=m(),A=n("p"),rt=i("This is the configuration class to store the configuration of a "),ze=n("a"),it=i("OPTModel"),dt=i(`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),he=n("a"),lt=i("facebook/opt-350m"),ct=i(" architecture."),pt=m(),I=n("p"),ht=i("Configuration objects inherit from "),Me=n("a"),ut=i("PretrainedConfig"),mt=i(` and can be used to control the model outputs. Read the
documentation from `),Ce=n("a"),ft=i("PretrainedConfig"),gt=i(" for more information."),_t=m(),b(R.$$.fragment),co=m(),N=n("h2"),U=n("a"),He=n("span"),b(ue.$$.fragment),Tt=m(),Ve=n("span"),vt=i("OPTModel"),po=m(),C=n("div"),b(me.$$.fragment),bt=m(),fe=n("p"),yt=i(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),xe=n("a"),wt=i("PreTrainedModel"),Pt=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kt=m(),ge=n("p"),Ot=i("This model is also a PyTorch "),_e=n("a"),$t=i("torch.nn.Module"),zt=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mt=m(),x=n("div"),b(Te.$$.fragment),Ct=m(),S=n("p"),xt=i("The "),Ee=n("a"),Et=i("OPTModel"),qt=i(" forward method, overrides the "),Ze=n("code"),Ft=i("__call__"),jt=i(" special method."),Lt=m(),b(Y.$$.fragment),At=m(),b(J.$$.fragment),ho=m(),D=n("h2"),K=n("a"),Re=n("span"),b(ve.$$.fragment),It=m(),Ue=n("span"),Nt=i("OPTForCausalLM"),uo=m(),W=n("div"),b(be.$$.fragment),St=m(),Q=n("div"),b(ye.$$.fragment),Dt=m(),b(X.$$.fragment),this.h()},l(e){const c=Mn('[data-svelte="svelte-1phssyn"]',document.head);p=a(c,"META",{name:!0,content:!0}),c.forEach(t),v=f(e),_=a(e,"H1",{class:!0});var we=s(_);h=a(we,"A",{id:!0,class:!0,href:!0});var Ye=s(h);T=a(Ye,"SPAN",{});var Je=s(T);y(r.$$.fragment,Je),Je.forEach(t),Ye.forEach(t),g=f(we),B=a(we,"SPAN",{});var Ke=s(B);$o=d(Ke,"OPT"),Ke.forEach(t),we.forEach(t),eo=f(e),j=a(e,"H2",{class:!0});var fo=s(j);G=a(fo,"A",{id:!0,class:!0,href:!0});var Ht=s(G);Le=a(Ht,"SPAN",{});var Vt=s(Le);y(ne.$$.fragment,Vt),Vt.forEach(t),Ht.forEach(t),zo=f(fo),Ae=a(fo,"SPAN",{});var Zt=s(Ae);Mo=d(Zt,"Overview"),Zt.forEach(t),fo.forEach(t),oo=f(e),H=a(e,"P",{});var go=s(H);Co=d(go,"The OPT model was proposed in "),ae=a(go,"A",{href:!0,rel:!0});var Rt=s(ae);xo=d(Rt,"Open Pre-trained Transformer Language Models"),Rt.forEach(t),Eo=d(go,` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),go.forEach(t),to=f(e),Pe=a(e,"P",{});var Ut=s(Pe);qo=d(Ut,"The abstract from the paper is the following:"),Ut.forEach(t),no=f(e),ke=a(e,"P",{});var Yt=s(ke);Ie=a(Yt,"EM",{});var Jt=s(Ie);Fo=d(Jt,"Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),Jt.forEach(t),Yt.forEach(t),ao=f(e),Oe=a(e,"P",{});var Kt=s(Oe);jo=d(Kt,"Tips:"),Kt.forEach(t),so=f(e),V=a(e,"UL",{});var _o=s(V);se=a(_o,"LI",{});var To=s(se);Lo=d(To,"OPT has the same architecture as "),Ne=a(To,"CODE",{});var Qt=s(Ne);Ao=d(Qt,"BartDecoder"),Qt.forEach(t),Io=d(To,"."),To.forEach(t),No=f(_o),z=a(_o,"LI",{});var q=s(z);So=d(q,"Contrary to GPT2, OPT adds the EOS token "),Se=a(q,"CODE",{});var Xt=s(Se);Do=d(Xt,"</s>"),Xt.forEach(t),Wo=d(q," to the beginning of every prompt. "),De=a(q,"STRONG",{});var en=s(De);Bo=d(en,"Note"),en.forEach(t),Go=d(q,": Make sure to pass "),We=a(q,"CODE",{});var on=s(We);Ho=d(on,"use_fast=False"),on.forEach(t),Vo=d(q," when loading OPT\u2019s tokenizer with "),$e=a(q,"A",{href:!0});var tn=s($e);Zo=d(tn,"AutoTokenizer"),tn.forEach(t),Ro=d(q," to get the correct tokenizer."),q.forEach(t),_o.forEach(t),ro=f(e),$=a(e,"P",{});var F=s($);Uo=d(F,"This model was contributed by "),re=a(F,"A",{href:!0,rel:!0});var nn=s(re);Yo=d(nn,"Arthur Zucker"),nn.forEach(t),Jo=d(F,", "),ie=a(F,"A",{href:!0,rel:!0});var an=s(ie);Ko=d(an,"Younes Belkada"),an.forEach(t),Qo=d(F,", and "),de=a(F,"A",{href:!0,rel:!0});var sn=s(de);Xo=d(sn,"Patrick Von Platen"),sn.forEach(t),et=d(F,`.
The original code can be found `),le=a(F,"A",{href:!0,rel:!0});var rn=s(le);ot=d(rn,"here"),rn.forEach(t),tt=d(F,"."),F.forEach(t),io=f(e),L=a(e,"H2",{class:!0});var vo=s(L);Z=a(vo,"A",{id:!0,class:!0,href:!0});var dn=s(Z);Be=a(dn,"SPAN",{});var ln=s(Be);y(ce.$$.fragment,ln),ln.forEach(t),dn.forEach(t),nt=f(vo),Ge=a(vo,"SPAN",{});var cn=s(Ge);at=d(cn,"OPTConfig"),cn.forEach(t),vo.forEach(t),lo=f(e),M=a(e,"DIV",{class:!0});var ee=s(M);y(pe.$$.fragment,ee),st=f(ee),A=a(ee,"P",{});var qe=s(A);rt=d(qe,"This is the configuration class to store the configuration of a "),ze=a(qe,"A",{href:!0});var pn=s(ze);it=d(pn,"OPTModel"),pn.forEach(t),dt=d(qe,`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),he=a(qe,"A",{href:!0,rel:!0});var hn=s(he);lt=d(hn,"facebook/opt-350m"),hn.forEach(t),ct=d(qe," architecture."),qe.forEach(t),pt=f(ee),I=a(ee,"P",{});var Fe=s(I);ht=d(Fe,"Configuration objects inherit from "),Me=a(Fe,"A",{href:!0});var un=s(Me);ut=d(un,"PretrainedConfig"),un.forEach(t),mt=d(Fe,` and can be used to control the model outputs. Read the
documentation from `),Ce=a(Fe,"A",{href:!0});var mn=s(Ce);ft=d(mn,"PretrainedConfig"),mn.forEach(t),gt=d(Fe," for more information."),Fe.forEach(t),_t=f(ee),y(R.$$.fragment,ee),ee.forEach(t),co=f(e),N=a(e,"H2",{class:!0});var bo=s(N);U=a(bo,"A",{id:!0,class:!0,href:!0});var fn=s(U);He=a(fn,"SPAN",{});var gn=s(He);y(ue.$$.fragment,gn),gn.forEach(t),fn.forEach(t),Tt=f(bo),Ve=a(bo,"SPAN",{});var _n=s(Ve);vt=d(_n,"OPTModel"),_n.forEach(t),bo.forEach(t),po=f(e),C=a(e,"DIV",{class:!0});var oe=s(C);y(me.$$.fragment,oe),bt=f(oe),fe=a(oe,"P",{});var yo=s(fe);yt=d(yo,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),xe=a(yo,"A",{href:!0});var Tn=s(xe);wt=d(Tn,"PreTrainedModel"),Tn.forEach(t),Pt=d(yo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yo.forEach(t),kt=f(oe),ge=a(oe,"P",{});var wo=s(ge);Ot=d(wo,"This model is also a PyTorch "),_e=a(wo,"A",{href:!0,rel:!0});var vn=s(_e);$t=d(vn,"torch.nn.Module"),vn.forEach(t),zt=d(wo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wo.forEach(t),Mt=f(oe),x=a(oe,"DIV",{class:!0});var te=s(x);y(Te.$$.fragment,te),Ct=f(te),S=a(te,"P",{});var je=s(S);xt=d(je,"The "),Ee=a(je,"A",{href:!0});var bn=s(Ee);Et=d(bn,"OPTModel"),bn.forEach(t),qt=d(je," forward method, overrides the "),Ze=a(je,"CODE",{});var yn=s(Ze);Ft=d(yn,"__call__"),yn.forEach(t),jt=d(je," special method."),je.forEach(t),Lt=f(te),y(Y.$$.fragment,te),At=f(te),y(J.$$.fragment,te),te.forEach(t),oe.forEach(t),ho=f(e),D=a(e,"H2",{class:!0});var Po=s(D);K=a(Po,"A",{id:!0,class:!0,href:!0});var wn=s(K);Re=a(wn,"SPAN",{});var Pn=s(Re);y(ve.$$.fragment,Pn),Pn.forEach(t),wn.forEach(t),It=f(Po),Ue=a(Po,"SPAN",{});var kn=s(Ue);Nt=d(kn,"OPTForCausalLM"),kn.forEach(t),Po.forEach(t),uo=f(e),W=a(e,"DIV",{class:!0});var ko=s(W);y(be.$$.fragment,ko),St=f(ko),Q=a(ko,"DIV",{class:!0});var Oo=s(Q);y(ye.$$.fragment,Oo),Dt=f(Oo),y(X.$$.fragment,Oo),Oo.forEach(t),ko.forEach(t),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(An)),l(h,"id","opt"),l(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(h,"href","#opt"),l(_,"class","relative group"),l(G,"id","overview"),l(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(G,"href","#overview"),l(j,"class","relative group"),l(ae,"href","https://arxiv.org/pdf/2205.01068"),l(ae,"rel","nofollow"),l($e,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer"),l(re,"href","https://huggingface.co/ArthurZ"),l(re,"rel","nofollow"),l(ie,"href","https://huggingface.co/ybelkada"),l(ie,"rel","nofollow"),l(de,"href","https://huggingface.co/patrickvonplaten"),l(de,"rel","nofollow"),l(le,"href","https://github.com/facebookresearch/metaseq"),l(le,"rel","nofollow"),l(Z,"id","transformers.OPTConfig"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#transformers.OPTConfig"),l(L,"class","relative group"),l(ze,"href","/docs/transformers/main/en/model_doc/opt#transformers.OPTModel"),l(he,"href","https://huggingface.co/facebook/opt-350m"),l(he,"rel","nofollow"),l(Me,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(Ce,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(U,"id","transformers.OPTModel"),l(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(U,"href","#transformers.OPTModel"),l(N,"class","relative group"),l(xe,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(_e,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(_e,"rel","nofollow"),l(Ee,"href","/docs/transformers/main/en/model_doc/opt#transformers.OPTModel"),l(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(K,"id","transformers.OPTForCausalLM"),l(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(K,"href","#transformers.OPTForCausalLM"),l(D,"class","relative group"),l(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,c){o(document.head,p),u(e,v,c),u(e,_,c),o(_,h),o(h,T),w(r,T,null),o(_,g),o(_,B),o(B,$o),u(e,eo,c),u(e,j,c),o(j,G),o(G,Le),w(ne,Le,null),o(j,zo),o(j,Ae),o(Ae,Mo),u(e,oo,c),u(e,H,c),o(H,Co),o(H,ae),o(ae,xo),o(H,Eo),u(e,to,c),u(e,Pe,c),o(Pe,qo),u(e,no,c),u(e,ke,c),o(ke,Ie),o(Ie,Fo),u(e,ao,c),u(e,Oe,c),o(Oe,jo),u(e,so,c),u(e,V,c),o(V,se),o(se,Lo),o(se,Ne),o(Ne,Ao),o(se,Io),o(V,No),o(V,z),o(z,So),o(z,Se),o(Se,Do),o(z,Wo),o(z,De),o(De,Bo),o(z,Go),o(z,We),o(We,Ho),o(z,Vo),o(z,$e),o($e,Zo),o(z,Ro),u(e,ro,c),u(e,$,c),o($,Uo),o($,re),o(re,Yo),o($,Jo),o($,ie),o(ie,Ko),o($,Qo),o($,de),o(de,Xo),o($,et),o($,le),o(le,ot),o($,tt),u(e,io,c),u(e,L,c),o(L,Z),o(Z,Be),w(ce,Be,null),o(L,nt),o(L,Ge),o(Ge,at),u(e,lo,c),u(e,M,c),w(pe,M,null),o(M,st),o(M,A),o(A,rt),o(A,ze),o(ze,it),o(A,dt),o(A,he),o(he,lt),o(A,ct),o(M,pt),o(M,I),o(I,ht),o(I,Me),o(Me,ut),o(I,mt),o(I,Ce),o(Ce,ft),o(I,gt),o(M,_t),w(R,M,null),u(e,co,c),u(e,N,c),o(N,U),o(U,He),w(ue,He,null),o(N,Tt),o(N,Ve),o(Ve,vt),u(e,po,c),u(e,C,c),w(me,C,null),o(C,bt),o(C,fe),o(fe,yt),o(fe,xe),o(xe,wt),o(fe,Pt),o(C,kt),o(C,ge),o(ge,Ot),o(ge,_e),o(_e,$t),o(ge,zt),o(C,Mt),o(C,x),w(Te,x,null),o(x,Ct),o(x,S),o(S,xt),o(S,Ee),o(Ee,Et),o(S,qt),o(S,Ze),o(Ze,Ft),o(S,jt),o(x,Lt),w(Y,x,null),o(x,At),w(J,x,null),u(e,ho,c),u(e,D,c),o(D,K),o(K,Re),w(ve,Re,null),o(D,It),o(D,Ue),o(Ue,Nt),u(e,uo,c),u(e,W,c),w(be,W,null),o(W,St),o(W,Q),w(ye,Q,null),o(Q,Dt),w(X,Q,null),mo=!0},p(e,[c]){const we={};c&2&&(we.$$scope={dirty:c,ctx:e}),R.$set(we);const Ye={};c&2&&(Ye.$$scope={dirty:c,ctx:e}),Y.$set(Ye);const Je={};c&2&&(Je.$$scope={dirty:c,ctx:e}),J.$set(Je);const Ke={};c&2&&(Ke.$$scope={dirty:c,ctx:e}),X.$set(Ke)},i(e){mo||(P(r.$$.fragment,e),P(ne.$$.fragment,e),P(ce.$$.fragment,e),P(pe.$$.fragment,e),P(R.$$.fragment,e),P(ue.$$.fragment,e),P(me.$$.fragment,e),P(Te.$$.fragment,e),P(Y.$$.fragment,e),P(J.$$.fragment,e),P(ve.$$.fragment,e),P(be.$$.fragment,e),P(ye.$$.fragment,e),P(X.$$.fragment,e),mo=!0)},o(e){k(r.$$.fragment,e),k(ne.$$.fragment,e),k(ce.$$.fragment,e),k(pe.$$.fragment,e),k(R.$$.fragment,e),k(ue.$$.fragment,e),k(me.$$.fragment,e),k(Te.$$.fragment,e),k(Y.$$.fragment,e),k(J.$$.fragment,e),k(ve.$$.fragment,e),k(be.$$.fragment,e),k(ye.$$.fragment,e),k(X.$$.fragment,e),mo=!1},d(e){t(p),e&&t(v),e&&t(_),O(r),e&&t(eo),e&&t(j),O(ne),e&&t(oo),e&&t(H),e&&t(to),e&&t(Pe),e&&t(no),e&&t(ke),e&&t(ao),e&&t(Oe),e&&t(so),e&&t(V),e&&t(ro),e&&t($),e&&t(io),e&&t(L),O(ce),e&&t(lo),e&&t(M),O(pe),O(R),e&&t(co),e&&t(N),O(ue),e&&t(po),e&&t(C),O(me),O(Te),O(Y),O(J),e&&t(ho),e&&t(D),O(ve),e&&t(uo),e&&t(W),O(be),O(ye),O(X)}}}const An={local:"opt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OPTConfig",title:"OPTConfig"},{local:"transformers.OPTModel",title:"OPTModel"},{local:"transformers.OPTForCausalLM",title:"OPTForCausalLM"}],title:"OPT"};function In(E){return Cn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Hn extends On{constructor(p){super();$n(this,p,In,Ln,zn,{})}}export{Hn as default,An as metadata};
