import{S as On,i as $n,s as zn,e as n,k as m,w as b,t as i,M as Mn,c as a,d as t,m as f,a as r,x as k,h as d,b as l,G as o,g as u,y,q as P,o as w,B as O,v as Cn,L as Gt}from"../../chunks/vendor-316217a5.js";import{T as xn}from"../../chunks/Tip-27e9fea0.js";import{D as Qe}from"../../chunks/Docstring-1fe4a33a.js";import{C as Bt}from"../../chunks/CodeBlock-8418a95e.js";import{I as Xe}from"../../chunks/IconCopyLink-40460835.js";import{E as Wt}from"../../chunks/ExampleCodeBlock-32fc0037.js";function En(E){let p,v,_,h,T;return h=new Bt({props:{code:`from transformers import OPTModel, OPTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),v=i("Example:"),_=m(),b(h.$$.fragment)},l(s){p=a(s,"P",{});var g=r(p);v=d(g,"Example:"),g.forEach(t),_=f(s),k(h.$$.fragment,s)},m(s,g){u(s,p,g),o(p,v),u(s,_,g),y(h,s,g),T=!0},p:Gt,i(s){T||(P(h.$$.fragment,s),T=!0)},o(s){w(h.$$.fragment,s),T=!1},d(s){s&&t(p),s&&t(_),O(h,s)}}}function qn(E){let p,v,_,h,T;return{c(){p=n("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),h=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){p=a(s,"P",{});var g=r(p);v=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(g,"CODE",{});var G=r(_);h=d(G,"Module"),G.forEach(t),T=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(s,g){u(s,p,g),o(p,v),o(p,_),o(_,h),o(p,T)},d(s){s&&t(p)}}}function Fn(E){let p,v,_,h,T;return h=new Bt({props:{code:`from transformers import GPT2Tokenizer, OPTModel
import torch

tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")
model = OPTModel.from_pretrained("facebook/opt-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, OPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTModel.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),v=i("Example:"),_=m(),b(h.$$.fragment)},l(s){p=a(s,"P",{});var g=r(p);v=d(g,"Example:"),g.forEach(t),_=f(s),k(h.$$.fragment,s)},m(s,g){u(s,p,g),o(p,v),u(s,_,g),y(h,s,g),T=!0},p:Gt,i(s){T||(P(h.$$.fragment,s),T=!0)},o(s){w(h.$$.fragment,s),T=!1},d(s){s&&t(p),s&&t(_),O(h,s)}}}function jn(E){let p,v,_,h,T;return h=new Bt({props:{code:`from transformers import GPT2Tokenizer, OPTForCausalLM

model = OPTForCausalLM.from_pretrained("facebook/opt-350m")
tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")

prompt = "Hey, are you consciours? Can you talk to me?"
inputs = tokenizer(prompt, return_tensors="pt")

# Generate
generate_ids = model.generate(inputs.input_ids, max_length=30)
tokenizer.batch_decode(generate_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, OPTForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Hey, are you consciours? Can you talk to me?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generate_ids = model.generate(inputs.input_ids, max_length=<span class="hljs-number">30</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generate_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;Hey, are you consciours? Can you talk to me?\\nI&#x27;m not consciours, but I can talk to you.&quot;</span>`}}),{c(){p=n("p"),v=i("Example:"),_=m(),b(h.$$.fragment)},l(s){p=a(s,"P",{});var g=r(p);v=d(g,"Example:"),g.forEach(t),_=f(s),k(h.$$.fragment,s)},m(s,g){u(s,p,g),o(p,v),u(s,_,g),y(h,s,g),T=!0},p:Gt,i(s){T||(P(h.$$.fragment,s),T=!0)},o(s){w(h.$$.fragment,s),T=!1},d(s){s&&t(p),s&&t(_),O(h,s)}}}function Ln(E){let p,v,_,h,T,s,g,G,$o,eo,j,B,Le,ne,zo,Ae,Mo,oo,H,Co,ae,xo,Eo,to,Pe,qo,no,we,Ie,Fo,ao,Oe,jo,ro,V,re,Lo,Ne,Ao,Io,No,z,So,Se,Do,Wo,De,Go,Bo,We,Ho,Vo,$e,Ro,Uo,so,$,Zo,se,Yo,Jo,ie,Ko,Qo,de,Xo,et,le,ot,tt,io,L,R,Ge,ce,nt,Be,at,lo,M,pe,rt,A,st,ze,it,dt,he,lt,ct,pt,I,ht,Me,ut,mt,Ce,ft,gt,_t,U,co,N,Z,He,ue,Tt,Ve,vt,po,C,me,bt,fe,kt,xe,yt,Pt,wt,ge,Ot,_e,$t,zt,Mt,x,Te,Ct,S,xt,Ee,Et,qt,Re,Ft,jt,Lt,Y,At,J,ho,D,K,Ue,ve,It,Ze,Nt,uo,W,be,St,Q,ke,Dt,X,mo;return s=new Xe({}),ne=new Xe({}),ce=new Xe({}),pe=new Qe({props:{name:"class transformers.OPTConfig",anchor:"transformers.OPTConfig",parameters:[{name:"vocab_size",val:" = 50272"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"ffn_dim",val:" = 3072"},{name:"max_position_embeddings",val:" = 2048"},{name:"do_layer_norm_before",val:" = True"},{name:"word_embed_proj_dim",val:" = None"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"num_attention_heads",val:" = 12"},{name:"activation_function",val:" = 'relu'"},{name:"layerdrop",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50272) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/configuration_opt.py#L32"}}),U=new Wt({props:{anchor:"transformers.OPTConfig.example",$$slots:{default:[En]},$$scope:{ctx:E}}}),ue=new Xe({}),me=new Qe({props:{name:"class transformers.OPTModel",anchor:"transformers.OPTModel",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L712"}}),Te=new Qe({props:{name:"forward",anchor:"transformers.OPTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L729",returnDescription:`
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
`}}),Y=new xn({props:{$$slots:{default:[qn]},$$scope:{ctx:E}}}),J=new Wt({props:{anchor:"transformers.OPTModel.forward.example",$$slots:{default:[Fn]},$$scope:{ctx:E}}}),ve=new Xe({}),be=new Qe({props:{name:"class transformers.OPTForCausalLM",anchor:"transformers.OPTForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L781"}}),ke=new Qe({props:{name:"forward",anchor:"transformers.OPTForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L812",returnDescription:`
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
`}}),X=new Wt({props:{anchor:"transformers.OPTForCausalLM.forward.example",$$slots:{default:[jn]},$$scope:{ctx:E}}}),{c(){p=n("meta"),v=m(),_=n("h1"),h=n("a"),T=n("span"),b(s.$$.fragment),g=m(),G=n("span"),$o=i("OPT"),eo=m(),j=n("h2"),B=n("a"),Le=n("span"),b(ne.$$.fragment),zo=m(),Ae=n("span"),Mo=i("Overview"),oo=m(),H=n("p"),Co=i("The OPT model was proposed in "),ae=n("a"),xo=i("Open Pre-trained Transformer Language Models"),Eo=i(` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),to=m(),Pe=n("p"),qo=i("The abstract from the paper is the following:"),no=m(),we=n("p"),Ie=n("em"),Fo=i("Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),ao=m(),Oe=n("p"),jo=i("Tips:"),ro=m(),V=n("ul"),re=n("li"),Lo=i("OPT has the same architecture as "),Ne=n("code"),Ao=i("BartDecoder"),Io=i("."),No=m(),z=n("li"),So=i("Contrary to GPT2, OPT adds the EOS token "),Se=n("code"),Do=i("</s>"),Wo=i(" to the beginning of every prompt. "),De=n("strong"),Go=i("Note"),Bo=i(": Make sure to pass "),We=n("code"),Ho=i("use_fast=False"),Vo=i(" when loading OPT\u2019s tokenizer with "),$e=n("a"),Ro=i("AutoTokenizer"),Uo=i(" to get the correct tokenizer."),so=m(),$=n("p"),Zo=i("This model was contributed by "),se=n("a"),Yo=i("Arthur Zucker"),Jo=i(", "),ie=n("a"),Ko=i("Younes Belkada"),Qo=i(", and "),de=n("a"),Xo=i("Patrick Von Platen"),et=i(`.
The original code can be found `),le=n("a"),ot=i("here"),tt=i("."),io=m(),L=n("h2"),R=n("a"),Ge=n("span"),b(ce.$$.fragment),nt=m(),Be=n("span"),at=i("OPTConfig"),lo=m(),M=n("div"),b(pe.$$.fragment),rt=m(),A=n("p"),st=i("This is the configuration class to store the configuration of a "),ze=n("a"),it=i("OPTModel"),dt=i(`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),he=n("a"),lt=i("facebook/opt-350m"),ct=i(" architecture."),pt=m(),I=n("p"),ht=i("Configuration objects inherit from "),Me=n("a"),ut=i("PretrainedConfig"),mt=i(` and can be used to control the model outputs. Read the
documentation from `),Ce=n("a"),ft=i("PretrainedConfig"),gt=i(" for more information."),_t=m(),b(U.$$.fragment),co=m(),N=n("h2"),Z=n("a"),He=n("span"),b(ue.$$.fragment),Tt=m(),Ve=n("span"),vt=i("OPTModel"),po=m(),C=n("div"),b(me.$$.fragment),bt=m(),fe=n("p"),kt=i(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),xe=n("a"),yt=i("PreTrainedModel"),Pt=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wt=m(),ge=n("p"),Ot=i("This model is also a PyTorch "),_e=n("a"),$t=i("torch.nn.Module"),zt=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mt=m(),x=n("div"),b(Te.$$.fragment),Ct=m(),S=n("p"),xt=i("The "),Ee=n("a"),Et=i("OPTModel"),qt=i(" forward method, overrides the "),Re=n("code"),Ft=i("__call__"),jt=i(" special method."),Lt=m(),b(Y.$$.fragment),At=m(),b(J.$$.fragment),ho=m(),D=n("h2"),K=n("a"),Ue=n("span"),b(ve.$$.fragment),It=m(),Ze=n("span"),Nt=i("OPTForCausalLM"),uo=m(),W=n("div"),b(be.$$.fragment),St=m(),Q=n("div"),b(ke.$$.fragment),Dt=m(),b(X.$$.fragment),this.h()},l(e){const c=Mn('[data-svelte="svelte-1phssyn"]',document.head);p=a(c,"META",{name:!0,content:!0}),c.forEach(t),v=f(e),_=a(e,"H1",{class:!0});var ye=r(_);h=a(ye,"A",{id:!0,class:!0,href:!0});var Ye=r(h);T=a(Ye,"SPAN",{});var Je=r(T);k(s.$$.fragment,Je),Je.forEach(t),Ye.forEach(t),g=f(ye),G=a(ye,"SPAN",{});var Ke=r(G);$o=d(Ke,"OPT"),Ke.forEach(t),ye.forEach(t),eo=f(e),j=a(e,"H2",{class:!0});var fo=r(j);B=a(fo,"A",{id:!0,class:!0,href:!0});var Ht=r(B);Le=a(Ht,"SPAN",{});var Vt=r(Le);k(ne.$$.fragment,Vt),Vt.forEach(t),Ht.forEach(t),zo=f(fo),Ae=a(fo,"SPAN",{});var Rt=r(Ae);Mo=d(Rt,"Overview"),Rt.forEach(t),fo.forEach(t),oo=f(e),H=a(e,"P",{});var go=r(H);Co=d(go,"The OPT model was proposed in "),ae=a(go,"A",{href:!0,rel:!0});var Ut=r(ae);xo=d(Ut,"Open Pre-trained Transformer Language Models"),Ut.forEach(t),Eo=d(go,` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),go.forEach(t),to=f(e),Pe=a(e,"P",{});var Zt=r(Pe);qo=d(Zt,"The abstract from the paper is the following:"),Zt.forEach(t),no=f(e),we=a(e,"P",{});var Yt=r(we);Ie=a(Yt,"EM",{});var Jt=r(Ie);Fo=d(Jt,"Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),Jt.forEach(t),Yt.forEach(t),ao=f(e),Oe=a(e,"P",{});var Kt=r(Oe);jo=d(Kt,"Tips:"),Kt.forEach(t),ro=f(e),V=a(e,"UL",{});var _o=r(V);re=a(_o,"LI",{});var To=r(re);Lo=d(To,"OPT has the same architecture as "),Ne=a(To,"CODE",{});var Qt=r(Ne);Ao=d(Qt,"BartDecoder"),Qt.forEach(t),Io=d(To,"."),To.forEach(t),No=f(_o),z=a(_o,"LI",{});var q=r(z);So=d(q,"Contrary to GPT2, OPT adds the EOS token "),Se=a(q,"CODE",{});var Xt=r(Se);Do=d(Xt,"</s>"),Xt.forEach(t),Wo=d(q," to the beginning of every prompt. "),De=a(q,"STRONG",{});var en=r(De);Go=d(en,"Note"),en.forEach(t),Bo=d(q,": Make sure to pass "),We=a(q,"CODE",{});var on=r(We);Ho=d(on,"use_fast=False"),on.forEach(t),Vo=d(q," when loading OPT\u2019s tokenizer with "),$e=a(q,"A",{href:!0});var tn=r($e);Ro=d(tn,"AutoTokenizer"),tn.forEach(t),Uo=d(q," to get the correct tokenizer."),q.forEach(t),_o.forEach(t),so=f(e),$=a(e,"P",{});var F=r($);Zo=d(F,"This model was contributed by "),se=a(F,"A",{href:!0,rel:!0});var nn=r(se);Yo=d(nn,"Arthur Zucker"),nn.forEach(t),Jo=d(F,", "),ie=a(F,"A",{href:!0,rel:!0});var an=r(ie);Ko=d(an,"Younes Belkada"),an.forEach(t),Qo=d(F,", and "),de=a(F,"A",{href:!0,rel:!0});var rn=r(de);Xo=d(rn,"Patrick Von Platen"),rn.forEach(t),et=d(F,`.
The original code can be found `),le=a(F,"A",{href:!0,rel:!0});var sn=r(le);ot=d(sn,"here"),sn.forEach(t),tt=d(F,"."),F.forEach(t),io=f(e),L=a(e,"H2",{class:!0});var vo=r(L);R=a(vo,"A",{id:!0,class:!0,href:!0});var dn=r(R);Ge=a(dn,"SPAN",{});var ln=r(Ge);k(ce.$$.fragment,ln),ln.forEach(t),dn.forEach(t),nt=f(vo),Be=a(vo,"SPAN",{});var cn=r(Be);at=d(cn,"OPTConfig"),cn.forEach(t),vo.forEach(t),lo=f(e),M=a(e,"DIV",{class:!0});var ee=r(M);k(pe.$$.fragment,ee),rt=f(ee),A=a(ee,"P",{});var qe=r(A);st=d(qe,"This is the configuration class to store the configuration of a "),ze=a(qe,"A",{href:!0});var pn=r(ze);it=d(pn,"OPTModel"),pn.forEach(t),dt=d(qe,`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),he=a(qe,"A",{href:!0,rel:!0});var hn=r(he);lt=d(hn,"facebook/opt-350m"),hn.forEach(t),ct=d(qe," architecture."),qe.forEach(t),pt=f(ee),I=a(ee,"P",{});var Fe=r(I);ht=d(Fe,"Configuration objects inherit from "),Me=a(Fe,"A",{href:!0});var un=r(Me);ut=d(un,"PretrainedConfig"),un.forEach(t),mt=d(Fe,` and can be used to control the model outputs. Read the
documentation from `),Ce=a(Fe,"A",{href:!0});var mn=r(Ce);ft=d(mn,"PretrainedConfig"),mn.forEach(t),gt=d(Fe," for more information."),Fe.forEach(t),_t=f(ee),k(U.$$.fragment,ee),ee.forEach(t),co=f(e),N=a(e,"H2",{class:!0});var bo=r(N);Z=a(bo,"A",{id:!0,class:!0,href:!0});var fn=r(Z);He=a(fn,"SPAN",{});var gn=r(He);k(ue.$$.fragment,gn),gn.forEach(t),fn.forEach(t),Tt=f(bo),Ve=a(bo,"SPAN",{});var _n=r(Ve);vt=d(_n,"OPTModel"),_n.forEach(t),bo.forEach(t),po=f(e),C=a(e,"DIV",{class:!0});var oe=r(C);k(me.$$.fragment,oe),bt=f(oe),fe=a(oe,"P",{});var ko=r(fe);kt=d(ko,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),xe=a(ko,"A",{href:!0});var Tn=r(xe);yt=d(Tn,"PreTrainedModel"),Tn.forEach(t),Pt=d(ko,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ko.forEach(t),wt=f(oe),ge=a(oe,"P",{});var yo=r(ge);Ot=d(yo,"This model is also a PyTorch "),_e=a(yo,"A",{href:!0,rel:!0});var vn=r(_e);$t=d(vn,"torch.nn.Module"),vn.forEach(t),zt=d(yo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yo.forEach(t),Mt=f(oe),x=a(oe,"DIV",{class:!0});var te=r(x);k(Te.$$.fragment,te),Ct=f(te),S=a(te,"P",{});var je=r(S);xt=d(je,"The "),Ee=a(je,"A",{href:!0});var bn=r(Ee);Et=d(bn,"OPTModel"),bn.forEach(t),qt=d(je," forward method, overrides the "),Re=a(je,"CODE",{});var kn=r(Re);Ft=d(kn,"__call__"),kn.forEach(t),jt=d(je," special method."),je.forEach(t),Lt=f(te),k(Y.$$.fragment,te),At=f(te),k(J.$$.fragment,te),te.forEach(t),oe.forEach(t),ho=f(e),D=a(e,"H2",{class:!0});var Po=r(D);K=a(Po,"A",{id:!0,class:!0,href:!0});var yn=r(K);Ue=a(yn,"SPAN",{});var Pn=r(Ue);k(ve.$$.fragment,Pn),Pn.forEach(t),yn.forEach(t),It=f(Po),Ze=a(Po,"SPAN",{});var wn=r(Ze);Nt=d(wn,"OPTForCausalLM"),wn.forEach(t),Po.forEach(t),uo=f(e),W=a(e,"DIV",{class:!0});var wo=r(W);k(be.$$.fragment,wo),St=f(wo),Q=a(wo,"DIV",{class:!0});var Oo=r(Q);k(ke.$$.fragment,Oo),Dt=f(Oo),k(X.$$.fragment,Oo),Oo.forEach(t),wo.forEach(t),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(An)),l(h,"id","opt"),l(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(h,"href","#opt"),l(_,"class","relative group"),l(B,"id","overview"),l(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(B,"href","#overview"),l(j,"class","relative group"),l(ae,"href","https://arxiv.org/pdf/2205.01068"),l(ae,"rel","nofollow"),l($e,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer"),l(se,"href","https://huggingface.co/ArthurZ"),l(se,"rel","nofollow"),l(ie,"href","https://huggingface.co/ybelkada"),l(ie,"rel","nofollow"),l(de,"href","https://huggingface.co/patrickvonplaten"),l(de,"rel","nofollow"),l(le,"href","https://github.com/facebookresearch/metaseq"),l(le,"rel","nofollow"),l(R,"id","transformers.OPTConfig"),l(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(R,"href","#transformers.OPTConfig"),l(L,"class","relative group"),l(ze,"href","/docs/transformers/main/en/model_doc/opt#transformers.OPTModel"),l(he,"href","https://huggingface.co/facebook/opt-350m"),l(he,"rel","nofollow"),l(Me,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(Ce,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Z,"id","transformers.OPTModel"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#transformers.OPTModel"),l(N,"class","relative group"),l(xe,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(_e,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(_e,"rel","nofollow"),l(Ee,"href","/docs/transformers/main/en/model_doc/opt#transformers.OPTModel"),l(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(K,"id","transformers.OPTForCausalLM"),l(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(K,"href","#transformers.OPTForCausalLM"),l(D,"class","relative group"),l(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,c){o(document.head,p),u(e,v,c),u(e,_,c),o(_,h),o(h,T),y(s,T,null),o(_,g),o(_,G),o(G,$o),u(e,eo,c),u(e,j,c),o(j,B),o(B,Le),y(ne,Le,null),o(j,zo),o(j,Ae),o(Ae,Mo),u(e,oo,c),u(e,H,c),o(H,Co),o(H,ae),o(ae,xo),o(H,Eo),u(e,to,c),u(e,Pe,c),o(Pe,qo),u(e,no,c),u(e,we,c),o(we,Ie),o(Ie,Fo),u(e,ao,c),u(e,Oe,c),o(Oe,jo),u(e,ro,c),u(e,V,c),o(V,re),o(re,Lo),o(re,Ne),o(Ne,Ao),o(re,Io),o(V,No),o(V,z),o(z,So),o(z,Se),o(Se,Do),o(z,Wo),o(z,De),o(De,Go),o(z,Bo),o(z,We),o(We,Ho),o(z,Vo),o(z,$e),o($e,Ro),o(z,Uo),u(e,so,c),u(e,$,c),o($,Zo),o($,se),o(se,Yo),o($,Jo),o($,ie),o(ie,Ko),o($,Qo),o($,de),o(de,Xo),o($,et),o($,le),o(le,ot),o($,tt),u(e,io,c),u(e,L,c),o(L,R),o(R,Ge),y(ce,Ge,null),o(L,nt),o(L,Be),o(Be,at),u(e,lo,c),u(e,M,c),y(pe,M,null),o(M,rt),o(M,A),o(A,st),o(A,ze),o(ze,it),o(A,dt),o(A,he),o(he,lt),o(A,ct),o(M,pt),o(M,I),o(I,ht),o(I,Me),o(Me,ut),o(I,mt),o(I,Ce),o(Ce,ft),o(I,gt),o(M,_t),y(U,M,null),u(e,co,c),u(e,N,c),o(N,Z),o(Z,He),y(ue,He,null),o(N,Tt),o(N,Ve),o(Ve,vt),u(e,po,c),u(e,C,c),y(me,C,null),o(C,bt),o(C,fe),o(fe,kt),o(fe,xe),o(xe,yt),o(fe,Pt),o(C,wt),o(C,ge),o(ge,Ot),o(ge,_e),o(_e,$t),o(ge,zt),o(C,Mt),o(C,x),y(Te,x,null),o(x,Ct),o(x,S),o(S,xt),o(S,Ee),o(Ee,Et),o(S,qt),o(S,Re),o(Re,Ft),o(S,jt),o(x,Lt),y(Y,x,null),o(x,At),y(J,x,null),u(e,ho,c),u(e,D,c),o(D,K),o(K,Ue),y(ve,Ue,null),o(D,It),o(D,Ze),o(Ze,Nt),u(e,uo,c),u(e,W,c),y(be,W,null),o(W,St),o(W,Q),y(ke,Q,null),o(Q,Dt),y(X,Q,null),mo=!0},p(e,[c]){const ye={};c&2&&(ye.$$scope={dirty:c,ctx:e}),U.$set(ye);const Ye={};c&2&&(Ye.$$scope={dirty:c,ctx:e}),Y.$set(Ye);const Je={};c&2&&(Je.$$scope={dirty:c,ctx:e}),J.$set(Je);const Ke={};c&2&&(Ke.$$scope={dirty:c,ctx:e}),X.$set(Ke)},i(e){mo||(P(s.$$.fragment,e),P(ne.$$.fragment,e),P(ce.$$.fragment,e),P(pe.$$.fragment,e),P(U.$$.fragment,e),P(ue.$$.fragment,e),P(me.$$.fragment,e),P(Te.$$.fragment,e),P(Y.$$.fragment,e),P(J.$$.fragment,e),P(ve.$$.fragment,e),P(be.$$.fragment,e),P(ke.$$.fragment,e),P(X.$$.fragment,e),mo=!0)},o(e){w(s.$$.fragment,e),w(ne.$$.fragment,e),w(ce.$$.fragment,e),w(pe.$$.fragment,e),w(U.$$.fragment,e),w(ue.$$.fragment,e),w(me.$$.fragment,e),w(Te.$$.fragment,e),w(Y.$$.fragment,e),w(J.$$.fragment,e),w(ve.$$.fragment,e),w(be.$$.fragment,e),w(ke.$$.fragment,e),w(X.$$.fragment,e),mo=!1},d(e){t(p),e&&t(v),e&&t(_),O(s),e&&t(eo),e&&t(j),O(ne),e&&t(oo),e&&t(H),e&&t(to),e&&t(Pe),e&&t(no),e&&t(we),e&&t(ao),e&&t(Oe),e&&t(ro),e&&t(V),e&&t(so),e&&t($),e&&t(io),e&&t(L),O(ce),e&&t(lo),e&&t(M),O(pe),O(U),e&&t(co),e&&t(N),O(ue),e&&t(po),e&&t(C),O(me),O(Te),O(Y),O(J),e&&t(ho),e&&t(D),O(ve),e&&t(uo),e&&t(W),O(be),O(ke),O(X)}}}const An={local:"opt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OPTConfig",title:"OPTConfig"},{local:"transformers.OPTModel",title:"OPTModel"},{local:"transformers.OPTForCausalLM",title:"OPTForCausalLM"}],title:"OPT"};function In(E){return Cn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Hn extends On{constructor(p){super();$n(this,p,In,Ln,zn,{})}}export{Hn as default,An as metadata};
