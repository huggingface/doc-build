import{S as Es,i as xs,s as Ts,e as r,k as d,w as v,t as o,M as Ds,c as a,d as t,m as l,a as s,x as w,h as n,b as p,F as e,g as x,y as $,q as k,o as P,B as C,v as js,L as Ps}from"../../chunks/vendor-6b77c823.js";import{T as $a}from"../../chunks/Tip-39098574.js";import{D as T}from"../../chunks/Docstring-1088f2fb.js";import{C as Cs}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as $s}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as ks}from"../../chunks/ExampleCodeBlock-5212b321.js";function zs(z){let f,b,u,g,E;return{c(){f=r("p"),b=o(`A configuration file can be loaded and saved to disk. Loading the configuration file and using this file to
initialize a model does `),u=r("strong"),g=o("not"),E=o(" load the model weights. It only affects the model\u2019s configuration.")},l(c){f=a(c,"P",{});var _=s(f);b=n(_,`A configuration file can be loaded and saved to disk. Loading the configuration file and using this file to
initialize a model does `),u=a(_,"STRONG",{});var q=s(u);g=n(q,"not"),q.forEach(t),E=n(_," load the model weights. It only affects the model\u2019s configuration."),_.forEach(t)},m(c,_){x(c,f,_),e(f,b),e(f,u),e(u,g),e(f,E)},d(c){c&&t(f)}}}function As(z){let f,b,u,g,E;return g=new Cs({props:{code:`from transformers import AutoConfig

config = AutoConfig.from_pretrained("bert-base-cased")

# Push the config to your namespace with the name "my-finetuned-bert" and have a local clone in the
# *my-finetuned-bert* folder.
config.push_to_hub("my-finetuned-bert")

# Push the config to your namespace with the name "my-finetuned-bert" with no local clone.
config.push_to_hub("my-finetuned-bert", use_temp_dir=True)

# Push the config to an organization with the name "my-finetuned-bert" and have a local clone in the
# *my-finetuned-bert* folder.
config.push_to_hub("my-finetuned-bert", organization="huggingface")

# Make a change to an existing repo that has been cloned locally in *my-finetuned-bert*.
config.push_to_hub("my-finetuned-bert", repo_url="https://huggingface.co/sgugger/my-finetuned-bert")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoConfig

config = AutoConfig.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-comment"># Push the config to your namespace with the name &quot;my-finetuned-bert&quot; and have a local clone in the</span>
<span class="hljs-comment"># *my-finetuned-bert* folder.</span>
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>)

<span class="hljs-comment"># Push the config to your namespace with the name &quot;my-finetuned-bert&quot; with no local clone.</span>
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>, use_temp_dir=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Push the config to an organization with the name &quot;my-finetuned-bert&quot; and have a local clone in the</span>
<span class="hljs-comment"># *my-finetuned-bert* folder.</span>
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>, organization=<span class="hljs-string">&quot;huggingface&quot;</span>)

<span class="hljs-comment"># Make a change to an existing repo that has been cloned locally in *my-finetuned-bert*.</span>
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>, repo_url=<span class="hljs-string">&quot;https://huggingface.co/sgugger/my-finetuned-bert&quot;</span>)`}}),{c(){f=r("p"),b=o("Examples:"),u=d(),v(g.$$.fragment)},l(c){f=a(c,"P",{});var _=s(f);b=n(_,"Examples:"),_.forEach(t),u=l(c),w(g.$$.fragment,c)},m(c,_){x(c,f,_),e(f,b),x(c,u,_),$(g,c,_),E=!0},p:Ps,i(c){E||(k(g.$$.fragment,c),E=!0)},o(c){P(g.$$.fragment,c),E=!1},d(c){c&&t(f),c&&t(u),C(g,c)}}}function Os(z){let f,b,u,g,E;return{c(){f=r("p"),b=o("Passing "),u=r("code"),g=o("use_auth_token=True"),E=o(" is required when you want to use a private model.")},l(c){f=a(c,"P",{});var _=s(f);b=n(_,"Passing "),u=a(_,"CODE",{});var q=s(u);g=n(q,"use_auth_token=True"),q.forEach(t),E=n(_," is required when you want to use a private model."),_.forEach(t)},m(c,_){x(c,f,_),e(f,b),e(f,u),e(u,g),e(f,E)},d(c){c&&t(f)}}}function qs(z){let f,b,u,g,E;return g=new Cs({props:{code:`# We can't instantiate directly the base class *PretrainedConfig* so let's show the examples on a
# derived class: BertConfig
config = BertConfig.from_pretrained(
    "bert-base-uncased"
)  # Download configuration from huggingface.co and cache.
config = BertConfig.from_pretrained(
    "./test/saved_model/"
)  # E.g. config (or model) was saved using *save_pretrained('./test/saved_model/')*
config = BertConfig.from_pretrained("./test/saved_model/my_configuration.json")
config = BertConfig.from_pretrained("bert-base-uncased", output_attentions=True, foo=False)
assert config.output_attentions == True
config, unused_kwargs = BertConfig.from_pretrained(
    "bert-base-uncased", output_attentions=True, foo=False, return_unused_kwargs=True
)
assert config.output_attentions == True
assert unused_kwargs == {"foo": False}`,highlighted:`<span class="hljs-comment"># We can&#x27;t instantiate directly the base class *PretrainedConfig* so let&#x27;s show the examples on a</span>
<span class="hljs-comment"># derived class: BertConfig</span>
config = BertConfig.from_pretrained(
    <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
)  <span class="hljs-comment"># Download configuration from huggingface.co and cache.</span>
config = BertConfig.from_pretrained(
    <span class="hljs-string">&quot;./test/saved_model/&quot;</span>
)  <span class="hljs-comment"># E.g. config (or model) was saved using *save_pretrained(&#x27;./test/saved_model/&#x27;)*</span>
config = BertConfig.from_pretrained(<span class="hljs-string">&quot;./test/saved_model/my_configuration.json&quot;</span>)
config = BertConfig.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, output_attentions=<span class="hljs-literal">True</span>, foo=<span class="hljs-literal">False</span>)
<span class="hljs-keyword">assert</span> config.output_attentions == <span class="hljs-literal">True</span>
config, unused_kwargs = BertConfig.from_pretrained(
    <span class="hljs-string">&quot;bert-base-uncased&quot;</span>, output_attentions=<span class="hljs-literal">True</span>, foo=<span class="hljs-literal">False</span>, return_unused_kwargs=<span class="hljs-literal">True</span>
)
<span class="hljs-keyword">assert</span> config.output_attentions == <span class="hljs-literal">True</span>
<span class="hljs-keyword">assert</span> unused_kwargs == {<span class="hljs-string">&quot;foo&quot;</span>: <span class="hljs-literal">False</span>}`}}),{c(){f=r("p"),b=o("Examples:"),u=d(),v(g.$$.fragment)},l(c){f=a(c,"P",{});var _=s(f);b=n(_,"Examples:"),_.forEach(t),u=l(c),w(g.$$.fragment,c)},m(c,_){x(c,f,_),e(f,b),x(c,u,_),$(g,c,_),E=!0},p:Ps,i(c){E||(k(g.$$.fragment,c),E=!0)},o(c){P(g.$$.fragment,c),E=!1},d(c){c&&t(f),c&&t(u),C(g,c)}}}function Ss(z){let f,b;return{c(){f=r("p"),b=o("This API is experimental and may have some slight breaking changes in the next releases.")},l(u){f=a(u,"P",{});var g=s(f);b=n(g,"This API is experimental and may have some slight breaking changes in the next releases."),g.forEach(t)},m(u,g){x(u,f,g),e(f,b)},d(u){u&&t(f)}}}function Fs(z){let f,b,u,g,E,c,_,q,Do,ao,H,jo,Ge,zo,Ao,so,D,Oo,dt,qo,So,lt,Fo,Io,ct,Lo,No,ft,Wo,Mo,io,R,G,mt,$e,Bo,ht,Vo,lo,m,ke,Ro,ut,Uo,Jo,X,Ho,gt,Go,Xo,S,W,pt,Ko,Qo,_t,Yo,Zo,Xe,en,tn,on,j,bt,nn,rn,yt,an,sn,Ke,dn,ln,Qe,cn,fn,Ye,mn,hn,un,K,vt,gn,pn,wt,_n,bn,yn,Q,$t,vn,wn,kt,$n,kn,Pn,Pt,Cn,En,F,Y,Ct,xn,Tn,Et,Dn,jn,zn,Z,xt,An,On,Tt,qn,Sn,Fn,ee,Dt,In,Ln,jt,Nn,Wn,Mn,te,zt,Bn,Vn,At,Rn,Un,Jn,M,Pe,Hn,Ce,Gn,Ot,Xn,Kn,Qn,oe,Yn,ne,Ee,Zn,I,er,qt,tr,or,St,nr,rr,Ft,ar,sr,ir,re,xe,dr,Te,lr,Ze,cr,fr,mr,ae,De,hr,je,ur,et,gr,pr,_r,A,ze,br,Ae,yr,tt,vr,wr,$r,se,kr,ie,Pr,de,Oe,Cr,L,Er,It,xr,Tr,ot,Dr,jr,Lt,zr,Ar,Or,B,qe,qr,Se,Sr,Nt,Fr,Ir,Lr,le,Nr,ce,Fe,Wr,U,Mr,Wt,Br,Vr,nt,Rr,Ur,Jr,fe,Ie,Hr,Mt,Gr,Xr,me,Le,Kr,Bt,Qr,Yr,he,Ne,Zr,Vt,ea,ta,ue,We,oa,Rt,na,ra,ge,Me,aa,Be,sa,Ut,ia,da,la,O,Ve,ca,Re,fa,Jt,ma,ha,ua,J,ga,Ht,pa,_a,Gt,ba,ya,va,Xt,wa,co;return c=new $s({}),$e=new $s({}),ke=new T({props:{name:"class transformers.PretrainedConfig",anchor:"transformers.PretrainedConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PretrainedConfig.name_or_path",description:`<strong>name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&quot;</code>) &#x2014;
Store the string that was passed to <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">PreTrainedModel.from_pretrained()</a> or
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">TFPreTrainedModel.from_pretrained()</a> as <code>pretrained_model_name_or_path</code> if the configuration was created
with such a method.`,name:"name_or_path"},{anchor:"transformers.PretrainedConfig.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should return all hidden-states.`,name:"output_hidden_states"},{anchor:"transformers.PretrainedConfig.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should returns all attentions.`,name:"output_attentions"},{anchor:"transformers.PretrainedConfig.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PretrainedConfig.is_encoder_decoder",description:`<strong>is_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as an encoder/decoder or not.`,name:"is_encoder_decoder"},{anchor:"transformers.PretrainedConfig.is_decoder",description:`<strong>is_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as decoder or not (in which case it&#x2019;s used as an encoder).`,name:"is_decoder"},{anchor:"transformers.PretrainedConfig.cross_attention_hidden_size**",description:`<strong>cross_attention_hidden_size**</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
The hidden size of the cross-attention layer in case the model is used as a decoder in an encoder-decoder
setting and the cross-attention hidden dimension differs from <code>self.config.hidden_size</code>.`,name:"cross_attention_hidden_size**"},{anchor:"transformers.PretrainedConfig.add_cross_attention",description:`<strong>add_cross_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether cross-attention layers should be added to the model. Note, this option is only relevant for models
that can be used as decoder models within the <a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel">EncoderDecoderModel</a> class, which consists of all models
in <code>AUTO_MODELS_FOR_CAUSAL_LM</code>.`,name:"add_cross_attention"},{anchor:"transformers.PretrainedConfig.tie_encoder_decoder",description:`<strong>tie_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether all encoder weights should be tied to their equivalent decoder weights. This requires the encoder
and decoder model to have the exact same parameter names.`,name:"tie_encoder_decoder"},{anchor:"transformers.PretrainedConfig.prune_heads",description:`<strong>prune_heads</strong> (<code>Dict[int, List[int]]</code>, <em>optional</em>, defaults to <code>{}</code>) &#x2014;
Pruned heads of the model. The keys are the selected layer indices and the associated values, the list of
heads to prune in said layer.</p>
<p>For instance <code>{1: [0, 2], 2: [2, 3]}</code> will prune heads 0 and 2 on layer 1 and heads 2 and 3 on layer 2.`,name:"prune_heads"},{anchor:"transformers.PretrainedConfig.chunk_size_feed_forward",description:`<strong>chunk_size_feed_forward</strong> (<code>int</code>, <em>optional</em>, defaults to <code>0</code>) &#x2014;
The chunk size of all feed forward layers in the residual attention blocks. A chunk size of <code>0</code> means that
the feed forward layer is not chunked. A chunk size of n means that the feed forward layer processes <code>n</code> &lt;
sequence_length embeddings at a time. For more information on feed forward chunking, see <a href="../glossary.html#feed-forward-chunking">How does Feed
Forward Chunking work?</a>.`,name:"chunk_size_feed_forward"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/configuration_utils.py#L54",parameterGroups:[{title:"Parameters for sequence generation",parametersDescription:`
<ul>
<li><strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) \u2014
Maximum length that will be used by default in the <code>generate</code> method of the model.</li>
<li><strong>min_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) \u2014
Minimum length that will be used by default in the <code>generate</code> method of the model.</li>
<li><strong>do_sample</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Flag that will be used by default in the <code>generate</code> method of the model. Whether or not to use sampling ;
use greedy decoding otherwise.</li>
<li><strong>early_stopping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Flag that will be used by default in the <code>generate</code> method of the model. Whether to stop the beam search
when at least <code>num_beams</code> sentences are finished per batch or not.</li>
<li><strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 1) \u2014
Number of beams for beam search that will be used by default in the <code>generate</code> method of the model. 1 means
no beam search.</li>
<li><strong>num_beam_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) \u2014
Number of groups to divide <code>num_beams</code> into in order to ensure diversity among different groups of beams
that will be used by default in the <code>generate</code> method of the model. 1 means no group beam search.</li>
<li><strong>diversity_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) \u2014
Value to control diversity for group beam search. that will be used by default in the <code>generate</code> method of
the model. 0 means no diversity penalty. The higher the penalty, the more diverse are the outputs.</li>
<li><strong>temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1) \u2014
The value used to module the next token probabilities that will be used by default in the <code>generate</code> method
of the model. Must be strictly positive.</li>
<li><strong>top_k</strong> (<code>int</code>, <em>optional</em>, defaults to 50) \u2014
Number of highest probability vocabulary tokens to keep for top-k-filtering that will be used by default in
the <code>generate</code> method of the model.</li>
<li><strong>top_p</strong> (<code>float</code>, <em>optional</em>, defaults to 1) \u2014
Value that will be used by default in the <code>generate</code> method of the model for <code>top_p</code>. If set to float < 1,
only the most probable tokens with probabilities that add up to <code>top_p</code> or higher are kept for generation.</li>
<li><strong>repetition_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1) \u2014
Parameter for repetition penalty that will be used by default in the <code>generate</code> method of the model. 1.0
means no penalty.</li>
<li><strong>length_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1) \u2014
Exponential penalty to the length that will be used by default in the <code>generate</code> method of the model.</li>
<li><strong>no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) \u2014 Value that will be used by default in the \u2014
<code>generate</code> method of the model for <code>no_repeat_ngram_size</code>. If set to int > 0, all ngrams of that size can
only occur once.</li>
<li><strong>encoder_no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) \u2014 Value that will be used by \u2014
default in the <code>generate</code> method of the model for <code>encoder_no_repeat_ngram_size</code>. If set to int > 0, all
ngrams of that size that occur in the <code>encoder_input_ids</code> cannot occur in the <code>decoder_input_ids</code>.</li>
<li><strong>bad_words_ids</strong> (<code>List[int]</code>, <em>optional</em>) \u2014
List of token ids that are not allowed to be generated that will be used by default in the <code>generate</code>
method of the model. In order to get the tokens of the words that should not appear in the generated text,
use <code>tokenizer.encode(bad_word, add_prefix_space=True)</code>.</li>
<li><strong>num_return_sequences</strong> (<code>int</code>, <em>optional</em>, defaults to 1) \u2014
Number of independently computed returned sequences for each element in the batch that will be used by
default in the <code>generate</code> method of the model.</li>
<li><strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Whether the model should return the logits when used for generation.</li>
<li><strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Whether the model should return a <a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> instead of a <code>torch.LongTensor</code>.</li>
<li><strong>forced_bos_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014
The id of the token to force as the first generated token after the <code>decoder_start_token_id</code>. Useful for
multilingual models like <a href="../model_doc/mbart">mBART</a> where the first generated token needs to be the target
language token.</li>
<li><strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014
The id of the token to force as the last generated token when <code>max_length</code> is reached.</li>
<li><strong>remove_invalid_values</strong> (<code>bool</code>, <em>optional</em>) \u2014
Whether to remove possible <em>nan</em> and <em>inf</em> outputs of the model to prevent the generation method to crash.
Note that using <code>remove_invalid_values</code> can slow down generation.</li>
</ul>
`},{title:"Parameters for fine-tuning tasks",parametersDescription:`
<ul>
<li><strong>architectures</strong> (<code>List[str]</code>, <em>optional</em>) \u2014
Model architectures that can be used with the model pretrained weights.</li>
<li><strong>finetuning_task</strong> (<code>str</code>, <em>optional</em>) \u2014
Name of the task used to fine-tune the model. This can be used when converting from an original (TensorFlow
or PyTorch) checkpoint.</li>
<li><strong>id2label</strong> (<code>Dict[int, str]</code>, <em>optional</em>) \u2014
A map from index (for instance prediction index, or target index) to label.</li>
<li><strong>label2id</strong> (<code>Dict[str, int]</code>, <em>optional</em>) \u2014 A map from label to index for the model.</li>
<li><strong>num_labels</strong> (<code>int</code>, <em>optional</em>) \u2014
Number of labels to use in the last layer added to the model, typically for a classification task.</li>
<li><strong>task_specific_params</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) \u2014
Additional keyword arguments to store for the current task.</li>
<li><strong>problem_type</strong> (<code>str</code>, <em>optional</em>) \u2014
Problem type for <code>XxxForSequenceClassification</code> models. Can be one of <code>"regression"</code>,
<code>"single_label_classification"</code> or <code>"multi_label_classification"</code>.</li>
</ul>
`},{title:"Parameters linked to the tokenizer",parametersDescription:`
<ul>
<li><strong>tokenizer_class</strong> (<code>str</code>, <em>optional</em>) \u2014
The name of the associated tokenizer class to use (if none is set, will use the tokenizer associated to the
model by default).</li>
<li><strong>prefix</strong> (<code>str</code>, <em>optional</em>) \u2014
A specific prompt that should be added at the beginning of each text before calling the model.</li>
<li><strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014 The id of the <em>beginning-of-stream</em> token.</li>
<li><strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014 The id of the <em>padding</em> token.</li>
<li><strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014 The id of the <em>end-of-stream</em> token.</li>
<li><strong>decoder_start_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014
If an encoder-decoder model starts decoding with a different token than <em>bos</em>, the id of that token.</li>
<li><strong>sep_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014 The id of the <em>separation</em> token.</li>
</ul>
`},{title:"PyTorch specific parameters",parametersDescription:`
<ul>
<li>
<p><strong>torchscript</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Whether or not the model should be used with Torchscript.</p>
</li>
<li>
<p><strong>tie_word_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) \u2014
Whether the model\u2019s input and output word embeddings should be tied. Note that this is only relevant if the
model has a output word embedding layer.</p>
</li>
<li>
<p><strong>torch_dtype</strong> (<code>str</code>, <em>optional</em>) \u2014
The <code>dtype</code> of the weights. This attribute can be used to initialize the model to a non-default <code>dtype</code>
(which is normally <code>float32</code>) and thus allow for optimal storage allocation. For example, if the saved
model is <code>float16</code>, ideally we want to load it back using the minimal amount of memory needed to load
<code>float16</code> weights. Since the config object is stored in plain text, this attribute contains just the
floating type string without the <code>torch.</code> prefix. For example, for <code>torch.float16</code> \`<code>torch_dtype</code> is the
<code>"float16"</code> string.</p>
<p>This attribute is currently not being used during model loading time, but this may change in the future
versions. But we can already start preparing for the future by saving the dtype with save_pretrained.</p>
</li>
</ul>
`},{title:"TensorFlow specific parameters",parametersDescription:`
<ul>
<li><strong>use_bfloat16</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Whether or not the model should use BFloat16 scalars (only used by some TensorFlow models).</li>
</ul>
`}]}}),X=new $a({props:{$$slots:{default:[zs]},$$scope:{ctx:z}}}),Pe=new T({props:{name:"push_to_hub",anchor:"transformers.PretrainedConfig.push_to_hub",parameters:[{name:"repo_path_or_name",val:": typing.Optional[str] = None"},{name:"repo_url",val:": typing.Optional[str] = None"},{name:"use_temp_dir",val:": bool = False"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"},{name:"**model_card_kwargs",val:""}],parametersDescription:[{anchor:"transformers.PretrainedConfig.push_to_hub.repo_path_or_name",description:`<strong>repo_path_or_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Can either be a repository name for your config in the Hub or a path to a local folder (in which case
the repository will have the name of that local folder). If not specified, will default to the name
given by <code>repo_url</code> and a local directory with that name will be created.`,name:"repo_path_or_name"},{anchor:"transformers.PretrainedConfig.push_to_hub.repo_url",description:`<strong>repo_url</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Specify this in case you want to push to an existing repository in the hub. If unspecified, a new
repository will be created in your namespace (unless you specify an <code>organization</code>) with <code>repo_name</code>.`,name:"repo_url"},{anchor:"transformers.PretrainedConfig.push_to_hub.use_temp_dir",description:`<strong>use_temp_dir</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to clone the distant repo in a temporary directory or in <code>repo_path_or_name</code> inside the
current working directory. This will slow things down if you are making changes in an existing repo
since you will need to clone the repo before every push.`,name:"use_temp_dir"},{anchor:"transformers.PretrainedConfig.push_to_hub.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Message to commit while pushing. Will default to <code>&quot;add config&quot;</code>.`,name:"commit_message"},{anchor:"transformers.PretrainedConfig.push_to_hub.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Organization in which you want to push your config (you must be a member of this organization).`,name:"organization"},{anchor:"transformers.PretrainedConfig.push_to_hub.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not the repository created should be private (requires a paying subscription).`,name:"private"},{anchor:"transformers.PretrainedConfig.push_to_hub.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token generated
when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>). Will default to <code>True</code> if
<code>repo_url</code> is not specified.`,name:"use_auth_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/utils/hub.py#L846",returnDescription:`
<p>The url of the commit of your config in the given repository.</p>
`,returnType:`
<p><code>str</code></p>
`}}),oe=new ks({props:{anchor:"transformers.PretrainedConfig.push_to_hub.example",$$slots:{default:[As]},$$scope:{ctx:z}}}),Ee=new T({props:{name:"dict_torch_dtype_to_str",anchor:"transformers.PretrainedConfig.dict_torch_dtype_to_str",parameters:[{name:"d",val:": typing.Dict[str, typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/configuration_utils.py#L870"}}),xe=new T({props:{name:"from_dict",anchor:"transformers.PretrainedConfig.from_dict",parameters:[{name:"config_dict",val:": typing.Dict[str, typing.Any]"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PretrainedConfig.from_dict.config_dict",description:`<strong>config_dict</strong> (<code>Dict[str, Any]</code>) &#x2014;
Dictionary that will be used to instantiate the configuration object. Such a dictionary can be
retrieved from a pretrained checkpoint by leveraging the <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig.get_config_dict">get_config_dict()</a> method.`,name:"config_dict"},{anchor:"transformers.PretrainedConfig.from_dict.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>) &#x2014;
Additional parameters from which to initialize the configuration object.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/configuration_utils.py#L663",returnDescription:`
<p>The configuration object instantiated from those parameters.</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),De=new T({props:{name:"from_json_file",anchor:"transformers.PretrainedConfig.from_json_file",parameters:[{name:"json_file",val:": typing.Union[str, os.PathLike]"}],parametersDescription:[{anchor:"transformers.PretrainedConfig.from_json_file.json_file",description:`<strong>json_file</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Path to the JSON file containing the parameters.`,name:"json_file"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/configuration_utils.py#L710",returnDescription:`
<p>The configuration object instantiated from that JSON file.</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),ze=new T({props:{name:"from_pretrained",anchor:"transformers.PretrainedConfig.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PretrainedConfig.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained model configuration hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a configuration file saved using the
<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved configuration JSON <em>file</em>, e.g., <code>./my_model_directory/configuration.json</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"},{anchor:"transformers.PretrainedConfig.from_pretrained.cache_dir",description:`<strong>cache_dir</strong> (<code>str</code> or <code>os.PathLike</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded pretrained model configuration should be cached if the
standard cache should not be used.`,name:"cache_dir"},{anchor:"transformers.PretrainedConfig.from_pretrained.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to force to (re-)download the configuration files and override the cached versions if
they exist.`,name:"force_download"},{anchor:"transformers.PretrainedConfig.from_pretrained.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to delete incompletely received file. Attempts to resume the download if such a file
exists.`,name:"resume_download"},{anchor:"transformers.PretrainedConfig.from_pretrained.proxies",description:`<strong>proxies</strong> (<code>Dict[str, str]</code>, <em>optional</em>) &#x2014;
A dictionary of proxy servers to use by protocol or endpoint, e.g., <code>{&apos;http&apos;: &apos;foo.bar:3128&apos;, &apos;http://hostname&apos;: &apos;foo.bar:4012&apos;}.</code> The proxies are used on each request.`,name:"proxies"},{anchor:"transformers.PretrainedConfig.from_pretrained.use_auth_token",description:`<strong>use_auth_token</strong> (<code>str</code> or <em>bool</em>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token generated
when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"use_auth_token"},{anchor:"transformers.PretrainedConfig.from_pretrained.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;main&quot;</code>) &#x2014;
The specific model version to use. It can be a branch name, a tag name, or a commit id, since we use a
git-based system for storing models and other artifacts on huggingface.co, so <code>revision</code> can be any
identifier allowed by git.`,name:"revision"},{anchor:"transformers.PretrainedConfig.from_pretrained.return_unused_kwargs",description:`<strong>return_unused_kwargs</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>False</code>, then this function returns just the final configuration object.</p>
<p>If <code>True</code>, then this functions returns a <code>Tuple(config, unused_kwargs)</code> where <em>unused_kwargs</em> is a
dictionary consisting of the key/value pairs whose keys are not configuration attributes: i.e., the
part of <code>kwargs</code> which has not been used to update <code>config</code> and is otherwise ignored.`,name:"return_unused_kwargs"},{anchor:"transformers.PretrainedConfig.from_pretrained.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
The values in kwargs of any keys which are configuration attributes will be used to override the loaded
values. Behavior concerning key/value pairs whose keys are <em>not</em> configuration attributes is controlled
by the <code>return_unused_kwargs</code> keyword parameter.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/configuration_utils.py#L452",returnDescription:`
<p>The configuration object instantiated from this pretrained model.</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),se=new $a({props:{$$slots:{default:[Os]},$$scope:{ctx:z}}}),ie=new ks({props:{anchor:"transformers.PretrainedConfig.from_pretrained.example",$$slots:{default:[qs]},$$scope:{ctx:z}}}),Oe=new T({props:{name:"get_config_dict",anchor:"transformers.PretrainedConfig.get_config_dict",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PretrainedConfig.get_config_dict.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
The identifier of the pre-trained checkpoint from which we want the dictionary of parameters.`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/configuration_utils.py#L535",returnDescription:`
<p>The dictionary(ies) that will be used to instantiate the configuration object.</p>
`,returnType:`
<p><code>Tuple[Dict, Dict]</code></p>
`}}),qe=new T({props:{name:"register_for_auto_class",anchor:"transformers.PretrainedConfig.register_for_auto_class",parameters:[{name:"auto_class",val:" = 'AutoConfig'"}],parametersDescription:[{anchor:"transformers.PretrainedConfig.register_for_auto_class.auto_class",description:`<strong>auto_class</strong> (<code>str</code> or <code>type</code>, <em>optional</em>, defaults to <code>&quot;AutoConfig&quot;</code>) &#x2014;
The auto class to register this new configuration with.`,name:"auto_class"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/configuration_utils.py#L882"}}),le=new $a({props:{warning:!0,$$slots:{default:[Ss]},$$scope:{ctx:z}}}),Fe=new T({props:{name:"save_pretrained",anchor:"transformers.PretrainedConfig.save_pretrained",parameters:[{name:"save_directory",val:": typing.Union[str, os.PathLike]"},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PretrainedConfig.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the configuration JSON file will be saved (will be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.PretrainedConfig.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/configuration_utils.py#L406"}}),Ie=new T({props:{name:"to_dict",anchor:"transformers.PretrainedConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/configuration_utils.py#L770",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance.</p>
`,returnType:`
<p><code>Dict[str, Any]</code></p>
`}}),Le=new T({props:{name:"to_diff_dict",anchor:"transformers.PretrainedConfig.to_diff_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/configuration_utils.py#L738",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, Any]</code></p>
`}}),Ne=new T({props:{name:"to_json_file",anchor:"transformers.PretrainedConfig.to_json_file",parameters:[{name:"json_file_path",val:": typing.Union[str, os.PathLike]"},{name:"use_diff",val:": bool = True"}],parametersDescription:[{anchor:"transformers.PretrainedConfig.to_json_file.json_file_path",description:`<strong>json_file_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Path to the JSON file in which this configuration instance&#x2019;s parameters will be saved.`,name:"json_file_path"},{anchor:"transformers.PretrainedConfig.to_json_file.use_diff",description:`<strong>use_diff</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, only the difference between the config instance and the default <code>PretrainedConfig()</code>
is serialized to JSON file.`,name:"use_diff"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/configuration_utils.py#L808"}}),We=new T({props:{name:"to_json_string",anchor:"transformers.PretrainedConfig.to_json_string",parameters:[{name:"use_diff",val:": bool = True"}],parametersDescription:[{anchor:"transformers.PretrainedConfig.to_json_string.use_diff",description:`<strong>use_diff</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, only the difference between the config instance and the default <code>PretrainedConfig()</code>
is serialized to JSON string.`,name:"use_diff"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/configuration_utils.py#L790",returnDescription:`
<p>String containing all the attributes that make up this configuration instance in JSON format.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Me=new T({props:{name:"update",anchor:"transformers.PretrainedConfig.update",parameters:[{name:"config_dict",val:": typing.Dict[str, typing.Any]"}],parametersDescription:[{anchor:"transformers.PretrainedConfig.update.config_dict",description:"<strong>config_dict</strong> (<code>Dict[str, Any]</code>) &#x2014; Dictionary of attributes that should be updated for this class.",name:"config_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/configuration_utils.py#L822"}}),Ve=new T({props:{name:"update_from_string",anchor:"transformers.PretrainedConfig.update_from_string",parameters:[{name:"update_str",val:": str"}],parametersDescription:[{anchor:"transformers.PretrainedConfig.update_from_string.update_str",description:"<strong>update_str</strong> (<code>str</code>) &#x2014; String with attributes that should be updated for this class.",name:"update_str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/configuration_utils.py#L832"}}),{c(){f=r("meta"),b=d(),u=r("h1"),g=r("a"),E=r("span"),v(c.$$.fragment),_=d(),q=r("span"),Do=o("Configuration"),ao=d(),H=r("p"),jo=o("The base class "),Ge=r("a"),zo=o("PretrainedConfig"),Ao=o(` implements the common methods for loading/saving a configuration
either from a local file or directory, or from a pretrained model configuration provided by the library (downloaded
from HuggingFace\u2019s AWS S3 repository).`),so=d(),D=r("p"),Oo=o(`Each derived config class implements model specific attributes. Common attributes present in all config classes are:
`),dt=r("code"),qo=o("hidden_size"),So=o(", "),lt=r("code"),Fo=o("num_attention_heads"),Io=o(", and "),ct=r("code"),Lo=o("num_hidden_layers"),No=o(`. Text models further implement:
`),ft=r("code"),Wo=o("vocab_size"),Mo=o("."),io=d(),R=r("h2"),G=r("a"),mt=r("span"),v($e.$$.fragment),Bo=d(),ht=r("span"),Vo=o("PretrainedConfig"),lo=d(),m=r("div"),v(ke.$$.fragment),Ro=d(),ut=r("p"),Uo=o(`Base class for all configuration classes. Handles a few parameters common to all models\u2019 configurations as well as
methods for loading/downloading/saving configurations.`),Jo=d(),v(X.$$.fragment),Ho=d(),gt=r("p"),Go=o("Class attributes (overridden by derived classes):"),Xo=d(),S=r("ul"),W=r("li"),pt=r("strong"),Ko=o("model_type"),Qo=o(" ("),_t=r("code"),Yo=o("str"),Zo=o(`) \u2014 An identifier for the model type, serialized into the JSON file, and used to recreate
the correct object in `),Xe=r("a"),en=o("AutoConfig"),tn=o("."),on=d(),j=r("li"),bt=r("strong"),nn=o("is_composition"),rn=o(" ("),yt=r("code"),an=o("bool"),sn=o(`) \u2014 Whether the config class is composed of multiple sub-configs. In this case the
config has to be initialized from two or more configs of type `),Ke=r("a"),dn=o("PretrainedConfig"),ln=o(` like:
`),Qe=r("a"),cn=o("EncoderDecoderConfig"),fn=o(" or "),Ye=r("a"),mn=o("~RagConfig"),hn=o("."),un=d(),K=r("li"),vt=r("strong"),gn=o("keys_to_ignore_at_inference"),pn=o(" ("),wt=r("code"),_n=o("List[str]"),bn=o(`) \u2014 A list of keys to ignore by default when looking at dictionary
outputs of the model during inference.`),yn=d(),Q=r("li"),$t=r("strong"),vn=o("attribute_map"),wn=o(" ("),kt=r("code"),$n=o("Dict[str, str]"),kn=o(`) \u2014 A dict that maps model specific attribute names to the standardized
naming of attributes.`),Pn=d(),Pt=r("p"),Cn=o("Common attributes (present in all subclasses):"),En=d(),F=r("ul"),Y=r("li"),Ct=r("strong"),xn=o("vocab_size"),Tn=o(" ("),Et=r("code"),Dn=o("int"),jn=o(`) \u2014 The number of tokens in the vocabulary, which is also the first dimension of the
embeddings matrix (this attribute may be missing for models that don\u2019t have a text modality like ViT).`),zn=d(),Z=r("li"),xt=r("strong"),An=o("hidden_size"),On=o(" ("),Tt=r("code"),qn=o("int"),Sn=o(") \u2014 The hidden size of the model."),Fn=d(),ee=r("li"),Dt=r("strong"),In=o("num_attention_heads"),Ln=o(" ("),jt=r("code"),Nn=o("int"),Wn=o(`) \u2014 The number of attention heads used in the multi-head attention layers of the
model.`),Mn=d(),te=r("li"),zt=r("strong"),Bn=o("num_hidden_layers"),Vn=o(" ("),At=r("code"),Rn=o("int"),Un=o(") \u2014 The number of blocks in the model."),Jn=d(),M=r("div"),v(Pe.$$.fragment),Hn=d(),Ce=r("p"),Gn=o(`Upload the configuration file to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),Ot=r("code"),Xn=o("repo_path_or_name"),Kn=o("."),Qn=d(),v(oe.$$.fragment),Yn=d(),ne=r("div"),v(Ee.$$.fragment),Zn=d(),I=r("p"),er=o("Checks whether the passed dictionary and its nested dicts have a "),qt=r("em"),tr=o("torch_dtype"),or=o(` key and if it\u2019s not None,
converts torch.dtype to a string of just the type. For example, `),St=r("code"),nr=o("torch.float32"),rr=o(" get converted into "),Ft=r("em"),ar=o("\u201Cfloat32\u201D"),sr=o(`
string, which can then be stored in the json format.`),ir=d(),re=r("div"),v(xe.$$.fragment),dr=d(),Te=r("p"),lr=o("Instantiates a "),Ze=r("a"),cr=o("PretrainedConfig"),fr=o(" from a Python dictionary of parameters."),mr=d(),ae=r("div"),v(De.$$.fragment),hr=d(),je=r("p"),ur=o("Instantiates a "),et=r("a"),gr=o("PretrainedConfig"),pr=o(" from the path to a JSON file of parameters."),_r=d(),A=r("div"),v(ze.$$.fragment),br=d(),Ae=r("p"),yr=o("Instantiate a "),tt=r("a"),vr=o("PretrainedConfig"),wr=o(" (or a derived class) from a pretrained model configuration."),$r=d(),v(se.$$.fragment),kr=d(),v(ie.$$.fragment),Pr=d(),de=r("div"),v(Oe.$$.fragment),Cr=d(),L=r("p"),Er=o("From a "),It=r("code"),xr=o("pretrained_model_name_or_path"),Tr=o(`, resolve to a dictionary of parameters, to be used for instantiating a
`),ot=r("a"),Dr=o("PretrainedConfig"),jr=o(" using "),Lt=r("code"),zr=o("from_dict"),Ar=o("."),Or=d(),B=r("div"),v(qe.$$.fragment),qr=d(),Se=r("p"),Sr=o(`Register this class with a given auto class. This should only be used for custom configurations as the ones in
the library are already mapped with `),Nt=r("code"),Fr=o("AutoConfig"),Ir=o("."),Lr=d(),v(le.$$.fragment),Nr=d(),ce=r("div"),v(Fe.$$.fragment),Wr=d(),U=r("p"),Mr=o("Save a configuration object to the directory "),Wt=r("code"),Br=o("save_directory"),Vr=o(`, so that it can be re-loaded using the
`),nt=r("a"),Rr=o("from_pretrained()"),Ur=o(" class method."),Jr=d(),fe=r("div"),v(Ie.$$.fragment),Hr=d(),Mt=r("p"),Gr=o("Serializes this instance to a Python dictionary."),Xr=d(),me=r("div"),v(Le.$$.fragment),Kr=d(),Bt=r("p"),Qr=o(`Removes all attributes from config which correspond to the default config attributes for better readability and
serializes to a Python dictionary.`),Yr=d(),he=r("div"),v(Ne.$$.fragment),Zr=d(),Vt=r("p"),ea=o("Save this instance to a JSON file."),ta=d(),ue=r("div"),v(We.$$.fragment),oa=d(),Rt=r("p"),na=o("Serializes this instance to a JSON string."),ra=d(),ge=r("div"),v(Me.$$.fragment),aa=d(),Be=r("p"),sa=o("Updates attributes of this class with attributes from "),Ut=r("code"),ia=o("config_dict"),da=o("."),la=d(),O=r("div"),v(Ve.$$.fragment),ca=d(),Re=r("p"),fa=o("Updates attributes of this class with attributes from "),Jt=r("code"),ma=o("update_str"),ha=o("."),ua=d(),J=r("p"),ga=o("The expected format is ints, floats and strings as is, and for booleans use "),Ht=r("code"),pa=o("true"),_a=o(" or "),Gt=r("code"),ba=o("false"),ya=o(`. For example:
\u201Cn_embd=10,resid_pdrop=0.2,scale_attn_weights=false,summary_type=cls_index\u201D`),va=d(),Xt=r("p"),wa=o("The keys to change have to already exist in the config object."),this.h()},l(i){const y=Ds('[data-svelte="svelte-1phssyn"]',document.head);f=a(y,"META",{name:!0,content:!0}),y.forEach(t),b=l(i),u=a(i,"H1",{class:!0});var Ue=s(u);g=a(Ue,"A",{id:!0,class:!0,href:!0});var Kt=s(g);E=a(Kt,"SPAN",{});var Qt=s(E);w(c.$$.fragment,Qt),Qt.forEach(t),Kt.forEach(t),_=l(Ue),q=a(Ue,"SPAN",{});var Yt=s(q);Do=n(Yt,"Configuration"),Yt.forEach(t),Ue.forEach(t),ao=l(i),H=a(i,"P",{});var Je=s(H);jo=n(Je,"The base class "),Ge=a(Je,"A",{href:!0});var ka=s(Ge);zo=n(ka,"PretrainedConfig"),ka.forEach(t),Ao=n(Je,` implements the common methods for loading/saving a configuration
either from a local file or directory, or from a pretrained model configuration provided by the library (downloaded
from HuggingFace\u2019s AWS S3 repository).`),Je.forEach(t),so=l(i),D=a(i,"P",{});var V=s(D);Oo=n(V,`Each derived config class implements model specific attributes. Common attributes present in all config classes are:
`),dt=a(V,"CODE",{});var Pa=s(dt);qo=n(Pa,"hidden_size"),Pa.forEach(t),So=n(V,", "),lt=a(V,"CODE",{});var Ca=s(lt);Fo=n(Ca,"num_attention_heads"),Ca.forEach(t),Io=n(V,", and "),ct=a(V,"CODE",{});var Ea=s(ct);Lo=n(Ea,"num_hidden_layers"),Ea.forEach(t),No=n(V,`. Text models further implement:
`),ft=a(V,"CODE",{});var xa=s(ft);Wo=n(xa,"vocab_size"),xa.forEach(t),Mo=n(V,"."),V.forEach(t),io=l(i),R=a(i,"H2",{class:!0});var fo=s(R);G=a(fo,"A",{id:!0,class:!0,href:!0});var Ta=s(G);mt=a(Ta,"SPAN",{});var Da=s(mt);w($e.$$.fragment,Da),Da.forEach(t),Ta.forEach(t),Bo=l(fo),ht=a(fo,"SPAN",{});var ja=s(ht);Vo=n(ja,"PretrainedConfig"),ja.forEach(t),fo.forEach(t),lo=l(i),m=a(i,"DIV",{class:!0});var h=s(m);w(ke.$$.fragment,h),Ro=l(h),ut=a(h,"P",{});var za=s(ut);Uo=n(za,`Base class for all configuration classes. Handles a few parameters common to all models\u2019 configurations as well as
methods for loading/downloading/saving configurations.`),za.forEach(t),Jo=l(h),w(X.$$.fragment,h),Ho=l(h),gt=a(h,"P",{});var Aa=s(gt);Go=n(Aa,"Class attributes (overridden by derived classes):"),Aa.forEach(t),Xo=l(h),S=a(h,"UL",{});var pe=s(S);W=a(pe,"LI",{});var He=s(W);pt=a(He,"STRONG",{});var Oa=s(pt);Ko=n(Oa,"model_type"),Oa.forEach(t),Qo=n(He," ("),_t=a(He,"CODE",{});var qa=s(_t);Yo=n(qa,"str"),qa.forEach(t),Zo=n(He,`) \u2014 An identifier for the model type, serialized into the JSON file, and used to recreate
the correct object in `),Xe=a(He,"A",{href:!0});var Sa=s(Xe);en=n(Sa,"AutoConfig"),Sa.forEach(t),tn=n(He,"."),He.forEach(t),on=l(pe),j=a(pe,"LI",{});var N=s(j);bt=a(N,"STRONG",{});var Fa=s(bt);nn=n(Fa,"is_composition"),Fa.forEach(t),rn=n(N," ("),yt=a(N,"CODE",{});var Ia=s(yt);an=n(Ia,"bool"),Ia.forEach(t),sn=n(N,`) \u2014 Whether the config class is composed of multiple sub-configs. In this case the
config has to be initialized from two or more configs of type `),Ke=a(N,"A",{href:!0});var La=s(Ke);dn=n(La,"PretrainedConfig"),La.forEach(t),ln=n(N,` like:
`),Qe=a(N,"A",{href:!0});var Na=s(Qe);cn=n(Na,"EncoderDecoderConfig"),Na.forEach(t),fn=n(N," or "),Ye=a(N,"A",{href:!0});var Wa=s(Ye);mn=n(Wa,"~RagConfig"),Wa.forEach(t),hn=n(N,"."),N.forEach(t),un=l(pe),K=a(pe,"LI",{});var Zt=s(K);vt=a(Zt,"STRONG",{});var Ma=s(vt);gn=n(Ma,"keys_to_ignore_at_inference"),Ma.forEach(t),pn=n(Zt," ("),wt=a(Zt,"CODE",{});var Ba=s(wt);_n=n(Ba,"List[str]"),Ba.forEach(t),bn=n(Zt,`) \u2014 A list of keys to ignore by default when looking at dictionary
outputs of the model during inference.`),Zt.forEach(t),yn=l(pe),Q=a(pe,"LI",{});var eo=s(Q);$t=a(eo,"STRONG",{});var Va=s($t);vn=n(Va,"attribute_map"),Va.forEach(t),wn=n(eo," ("),kt=a(eo,"CODE",{});var Ra=s(kt);$n=n(Ra,"Dict[str, str]"),Ra.forEach(t),kn=n(eo,`) \u2014 A dict that maps model specific attribute names to the standardized
naming of attributes.`),eo.forEach(t),pe.forEach(t),Pn=l(h),Pt=a(h,"P",{});var Ua=s(Pt);Cn=n(Ua,"Common attributes (present in all subclasses):"),Ua.forEach(t),En=l(h),F=a(h,"UL",{});var _e=s(F);Y=a(_e,"LI",{});var to=s(Y);Ct=a(to,"STRONG",{});var Ja=s(Ct);xn=n(Ja,"vocab_size"),Ja.forEach(t),Tn=n(to," ("),Et=a(to,"CODE",{});var Ha=s(Et);Dn=n(Ha,"int"),Ha.forEach(t),jn=n(to,`) \u2014 The number of tokens in the vocabulary, which is also the first dimension of the
embeddings matrix (this attribute may be missing for models that don\u2019t have a text modality like ViT).`),to.forEach(t),zn=l(_e),Z=a(_e,"LI",{});var oo=s(Z);xt=a(oo,"STRONG",{});var Ga=s(xt);An=n(Ga,"hidden_size"),Ga.forEach(t),On=n(oo," ("),Tt=a(oo,"CODE",{});var Xa=s(Tt);qn=n(Xa,"int"),Xa.forEach(t),Sn=n(oo,") \u2014 The hidden size of the model."),oo.forEach(t),Fn=l(_e),ee=a(_e,"LI",{});var no=s(ee);Dt=a(no,"STRONG",{});var Ka=s(Dt);In=n(Ka,"num_attention_heads"),Ka.forEach(t),Ln=n(no," ("),jt=a(no,"CODE",{});var Qa=s(jt);Nn=n(Qa,"int"),Qa.forEach(t),Wn=n(no,`) \u2014 The number of attention heads used in the multi-head attention layers of the
model.`),no.forEach(t),Mn=l(_e),te=a(_e,"LI",{});var ro=s(te);zt=a(ro,"STRONG",{});var Ya=s(zt);Bn=n(Ya,"num_hidden_layers"),Ya.forEach(t),Vn=n(ro," ("),At=a(ro,"CODE",{});var Za=s(At);Rn=n(Za,"int"),Za.forEach(t),Un=n(ro,") \u2014 The number of blocks in the model."),ro.forEach(t),_e.forEach(t),Jn=l(h),M=a(h,"DIV",{class:!0});var rt=s(M);w(Pe.$$.fragment,rt),Hn=l(rt),Ce=a(rt,"P",{});var mo=s(Ce);Gn=n(mo,`Upload the configuration file to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),Ot=a(mo,"CODE",{});var es=s(Ot);Xn=n(es,"repo_path_or_name"),es.forEach(t),Kn=n(mo,"."),mo.forEach(t),Qn=l(rt),w(oe.$$.fragment,rt),rt.forEach(t),Yn=l(h),ne=a(h,"DIV",{class:!0});var ho=s(ne);w(Ee.$$.fragment,ho),Zn=l(ho),I=a(ho,"P",{});var be=s(I);er=n(be,"Checks whether the passed dictionary and its nested dicts have a "),qt=a(be,"EM",{});var ts=s(qt);tr=n(ts,"torch_dtype"),ts.forEach(t),or=n(be,` key and if it\u2019s not None,
converts torch.dtype to a string of just the type. For example, `),St=a(be,"CODE",{});var os=s(St);nr=n(os,"torch.float32"),os.forEach(t),rr=n(be," get converted into "),Ft=a(be,"EM",{});var ns=s(Ft);ar=n(ns,"\u201Cfloat32\u201D"),ns.forEach(t),sr=n(be,`
string, which can then be stored in the json format.`),be.forEach(t),ho.forEach(t),ir=l(h),re=a(h,"DIV",{class:!0});var uo=s(re);w(xe.$$.fragment,uo),dr=l(uo),Te=a(uo,"P",{});var go=s(Te);lr=n(go,"Instantiates a "),Ze=a(go,"A",{href:!0});var rs=s(Ze);cr=n(rs,"PretrainedConfig"),rs.forEach(t),fr=n(go," from a Python dictionary of parameters."),go.forEach(t),uo.forEach(t),mr=l(h),ae=a(h,"DIV",{class:!0});var po=s(ae);w(De.$$.fragment,po),hr=l(po),je=a(po,"P",{});var _o=s(je);ur=n(_o,"Instantiates a "),et=a(_o,"A",{href:!0});var as=s(et);gr=n(as,"PretrainedConfig"),as.forEach(t),pr=n(_o," from the path to a JSON file of parameters."),_o.forEach(t),po.forEach(t),_r=l(h),A=a(h,"DIV",{class:!0});var ye=s(A);w(ze.$$.fragment,ye),br=l(ye),Ae=a(ye,"P",{});var bo=s(Ae);yr=n(bo,"Instantiate a "),tt=a(bo,"A",{href:!0});var ss=s(tt);vr=n(ss,"PretrainedConfig"),ss.forEach(t),wr=n(bo," (or a derived class) from a pretrained model configuration."),bo.forEach(t),$r=l(ye),w(se.$$.fragment,ye),kr=l(ye),w(ie.$$.fragment,ye),ye.forEach(t),Pr=l(h),de=a(h,"DIV",{class:!0});var yo=s(de);w(Oe.$$.fragment,yo),Cr=l(yo),L=a(yo,"P",{});var ve=s(L);Er=n(ve,"From a "),It=a(ve,"CODE",{});var is=s(It);xr=n(is,"pretrained_model_name_or_path"),is.forEach(t),Tr=n(ve,`, resolve to a dictionary of parameters, to be used for instantiating a
`),ot=a(ve,"A",{href:!0});var ds=s(ot);Dr=n(ds,"PretrainedConfig"),ds.forEach(t),jr=n(ve," using "),Lt=a(ve,"CODE",{});var ls=s(Lt);zr=n(ls,"from_dict"),ls.forEach(t),Ar=n(ve,"."),ve.forEach(t),yo.forEach(t),Or=l(h),B=a(h,"DIV",{class:!0});var at=s(B);w(qe.$$.fragment,at),qr=l(at),Se=a(at,"P",{});var vo=s(Se);Sr=n(vo,`Register this class with a given auto class. This should only be used for custom configurations as the ones in
the library are already mapped with `),Nt=a(vo,"CODE",{});var cs=s(Nt);Fr=n(cs,"AutoConfig"),cs.forEach(t),Ir=n(vo,"."),vo.forEach(t),Lr=l(at),w(le.$$.fragment,at),at.forEach(t),Nr=l(h),ce=a(h,"DIV",{class:!0});var wo=s(ce);w(Fe.$$.fragment,wo),Wr=l(wo),U=a(wo,"P",{});var st=s(U);Mr=n(st,"Save a configuration object to the directory "),Wt=a(st,"CODE",{});var fs=s(Wt);Br=n(fs,"save_directory"),fs.forEach(t),Vr=n(st,`, so that it can be re-loaded using the
`),nt=a(st,"A",{href:!0});var ms=s(nt);Rr=n(ms,"from_pretrained()"),ms.forEach(t),Ur=n(st," class method."),st.forEach(t),wo.forEach(t),Jr=l(h),fe=a(h,"DIV",{class:!0});var $o=s(fe);w(Ie.$$.fragment,$o),Hr=l($o),Mt=a($o,"P",{});var hs=s(Mt);Gr=n(hs,"Serializes this instance to a Python dictionary."),hs.forEach(t),$o.forEach(t),Xr=l(h),me=a(h,"DIV",{class:!0});var ko=s(me);w(Le.$$.fragment,ko),Kr=l(ko),Bt=a(ko,"P",{});var us=s(Bt);Qr=n(us,`Removes all attributes from config which correspond to the default config attributes for better readability and
serializes to a Python dictionary.`),us.forEach(t),ko.forEach(t),Yr=l(h),he=a(h,"DIV",{class:!0});var Po=s(he);w(Ne.$$.fragment,Po),Zr=l(Po),Vt=a(Po,"P",{});var gs=s(Vt);ea=n(gs,"Save this instance to a JSON file."),gs.forEach(t),Po.forEach(t),ta=l(h),ue=a(h,"DIV",{class:!0});var Co=s(ue);w(We.$$.fragment,Co),oa=l(Co),Rt=a(Co,"P",{});var ps=s(Rt);na=n(ps,"Serializes this instance to a JSON string."),ps.forEach(t),Co.forEach(t),ra=l(h),ge=a(h,"DIV",{class:!0});var Eo=s(ge);w(Me.$$.fragment,Eo),aa=l(Eo),Be=a(Eo,"P",{});var xo=s(Be);sa=n(xo,"Updates attributes of this class with attributes from "),Ut=a(xo,"CODE",{});var _s=s(Ut);ia=n(_s,"config_dict"),_s.forEach(t),da=n(xo,"."),xo.forEach(t),Eo.forEach(t),la=l(h),O=a(h,"DIV",{class:!0});var we=s(O);w(Ve.$$.fragment,we),ca=l(we),Re=a(we,"P",{});var To=s(Re);fa=n(To,"Updates attributes of this class with attributes from "),Jt=a(To,"CODE",{});var bs=s(Jt);ma=n(bs,"update_str"),bs.forEach(t),ha=n(To,"."),To.forEach(t),ua=l(we),J=a(we,"P",{});var it=s(J);ga=n(it,"The expected format is ints, floats and strings as is, and for booleans use "),Ht=a(it,"CODE",{});var ys=s(Ht);pa=n(ys,"true"),ys.forEach(t),_a=n(it," or "),Gt=a(it,"CODE",{});var vs=s(Gt);ba=n(vs,"false"),vs.forEach(t),ya=n(it,`. For example:
\u201Cn_embd=10,resid_pdrop=0.2,scale_attn_weights=false,summary_type=cls_index\u201D`),it.forEach(t),va=l(we),Xt=a(we,"P",{});var ws=s(Xt);wa=n(ws,"The keys to change have to already exist in the config object."),ws.forEach(t),we.forEach(t),h.forEach(t),this.h()},h(){p(f,"name","hf:doc:metadata"),p(f,"content",JSON.stringify(Is)),p(g,"id","configuration"),p(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(g,"href","#configuration"),p(u,"class","relative group"),p(Ge,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(G,"id","transformers.PretrainedConfig"),p(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(G,"href","#transformers.PretrainedConfig"),p(R,"class","relative group"),p(Xe,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoConfig"),p(Ke,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(Qe,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),p(Ye,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagConfig"),p(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ze,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(et,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(tt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ot,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(nt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig.from_pretrained"),p(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(m,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,y){e(document.head,f),x(i,b,y),x(i,u,y),e(u,g),e(g,E),$(c,E,null),e(u,_),e(u,q),e(q,Do),x(i,ao,y),x(i,H,y),e(H,jo),e(H,Ge),e(Ge,zo),e(H,Ao),x(i,so,y),x(i,D,y),e(D,Oo),e(D,dt),e(dt,qo),e(D,So),e(D,lt),e(lt,Fo),e(D,Io),e(D,ct),e(ct,Lo),e(D,No),e(D,ft),e(ft,Wo),e(D,Mo),x(i,io,y),x(i,R,y),e(R,G),e(G,mt),$($e,mt,null),e(R,Bo),e(R,ht),e(ht,Vo),x(i,lo,y),x(i,m,y),$(ke,m,null),e(m,Ro),e(m,ut),e(ut,Uo),e(m,Jo),$(X,m,null),e(m,Ho),e(m,gt),e(gt,Go),e(m,Xo),e(m,S),e(S,W),e(W,pt),e(pt,Ko),e(W,Qo),e(W,_t),e(_t,Yo),e(W,Zo),e(W,Xe),e(Xe,en),e(W,tn),e(S,on),e(S,j),e(j,bt),e(bt,nn),e(j,rn),e(j,yt),e(yt,an),e(j,sn),e(j,Ke),e(Ke,dn),e(j,ln),e(j,Qe),e(Qe,cn),e(j,fn),e(j,Ye),e(Ye,mn),e(j,hn),e(S,un),e(S,K),e(K,vt),e(vt,gn),e(K,pn),e(K,wt),e(wt,_n),e(K,bn),e(S,yn),e(S,Q),e(Q,$t),e($t,vn),e(Q,wn),e(Q,kt),e(kt,$n),e(Q,kn),e(m,Pn),e(m,Pt),e(Pt,Cn),e(m,En),e(m,F),e(F,Y),e(Y,Ct),e(Ct,xn),e(Y,Tn),e(Y,Et),e(Et,Dn),e(Y,jn),e(F,zn),e(F,Z),e(Z,xt),e(xt,An),e(Z,On),e(Z,Tt),e(Tt,qn),e(Z,Sn),e(F,Fn),e(F,ee),e(ee,Dt),e(Dt,In),e(ee,Ln),e(ee,jt),e(jt,Nn),e(ee,Wn),e(F,Mn),e(F,te),e(te,zt),e(zt,Bn),e(te,Vn),e(te,At),e(At,Rn),e(te,Un),e(m,Jn),e(m,M),$(Pe,M,null),e(M,Hn),e(M,Ce),e(Ce,Gn),e(Ce,Ot),e(Ot,Xn),e(Ce,Kn),e(M,Qn),$(oe,M,null),e(m,Yn),e(m,ne),$(Ee,ne,null),e(ne,Zn),e(ne,I),e(I,er),e(I,qt),e(qt,tr),e(I,or),e(I,St),e(St,nr),e(I,rr),e(I,Ft),e(Ft,ar),e(I,sr),e(m,ir),e(m,re),$(xe,re,null),e(re,dr),e(re,Te),e(Te,lr),e(Te,Ze),e(Ze,cr),e(Te,fr),e(m,mr),e(m,ae),$(De,ae,null),e(ae,hr),e(ae,je),e(je,ur),e(je,et),e(et,gr),e(je,pr),e(m,_r),e(m,A),$(ze,A,null),e(A,br),e(A,Ae),e(Ae,yr),e(Ae,tt),e(tt,vr),e(Ae,wr),e(A,$r),$(se,A,null),e(A,kr),$(ie,A,null),e(m,Pr),e(m,de),$(Oe,de,null),e(de,Cr),e(de,L),e(L,Er),e(L,It),e(It,xr),e(L,Tr),e(L,ot),e(ot,Dr),e(L,jr),e(L,Lt),e(Lt,zr),e(L,Ar),e(m,Or),e(m,B),$(qe,B,null),e(B,qr),e(B,Se),e(Se,Sr),e(Se,Nt),e(Nt,Fr),e(Se,Ir),e(B,Lr),$(le,B,null),e(m,Nr),e(m,ce),$(Fe,ce,null),e(ce,Wr),e(ce,U),e(U,Mr),e(U,Wt),e(Wt,Br),e(U,Vr),e(U,nt),e(nt,Rr),e(U,Ur),e(m,Jr),e(m,fe),$(Ie,fe,null),e(fe,Hr),e(fe,Mt),e(Mt,Gr),e(m,Xr),e(m,me),$(Le,me,null),e(me,Kr),e(me,Bt),e(Bt,Qr),e(m,Yr),e(m,he),$(Ne,he,null),e(he,Zr),e(he,Vt),e(Vt,ea),e(m,ta),e(m,ue),$(We,ue,null),e(ue,oa),e(ue,Rt),e(Rt,na),e(m,ra),e(m,ge),$(Me,ge,null),e(ge,aa),e(ge,Be),e(Be,sa),e(Be,Ut),e(Ut,ia),e(Be,da),e(m,la),e(m,O),$(Ve,O,null),e(O,ca),e(O,Re),e(Re,fa),e(Re,Jt),e(Jt,ma),e(Re,ha),e(O,ua),e(O,J),e(J,ga),e(J,Ht),e(Ht,pa),e(J,_a),e(J,Gt),e(Gt,ba),e(J,ya),e(O,va),e(O,Xt),e(Xt,wa),co=!0},p(i,[y]){const Ue={};y&2&&(Ue.$$scope={dirty:y,ctx:i}),X.$set(Ue);const Kt={};y&2&&(Kt.$$scope={dirty:y,ctx:i}),oe.$set(Kt);const Qt={};y&2&&(Qt.$$scope={dirty:y,ctx:i}),se.$set(Qt);const Yt={};y&2&&(Yt.$$scope={dirty:y,ctx:i}),ie.$set(Yt);const Je={};y&2&&(Je.$$scope={dirty:y,ctx:i}),le.$set(Je)},i(i){co||(k(c.$$.fragment,i),k($e.$$.fragment,i),k(ke.$$.fragment,i),k(X.$$.fragment,i),k(Pe.$$.fragment,i),k(oe.$$.fragment,i),k(Ee.$$.fragment,i),k(xe.$$.fragment,i),k(De.$$.fragment,i),k(ze.$$.fragment,i),k(se.$$.fragment,i),k(ie.$$.fragment,i),k(Oe.$$.fragment,i),k(qe.$$.fragment,i),k(le.$$.fragment,i),k(Fe.$$.fragment,i),k(Ie.$$.fragment,i),k(Le.$$.fragment,i),k(Ne.$$.fragment,i),k(We.$$.fragment,i),k(Me.$$.fragment,i),k(Ve.$$.fragment,i),co=!0)},o(i){P(c.$$.fragment,i),P($e.$$.fragment,i),P(ke.$$.fragment,i),P(X.$$.fragment,i),P(Pe.$$.fragment,i),P(oe.$$.fragment,i),P(Ee.$$.fragment,i),P(xe.$$.fragment,i),P(De.$$.fragment,i),P(ze.$$.fragment,i),P(se.$$.fragment,i),P(ie.$$.fragment,i),P(Oe.$$.fragment,i),P(qe.$$.fragment,i),P(le.$$.fragment,i),P(Fe.$$.fragment,i),P(Ie.$$.fragment,i),P(Le.$$.fragment,i),P(Ne.$$.fragment,i),P(We.$$.fragment,i),P(Me.$$.fragment,i),P(Ve.$$.fragment,i),co=!1},d(i){t(f),i&&t(b),i&&t(u),C(c),i&&t(ao),i&&t(H),i&&t(so),i&&t(D),i&&t(io),i&&t(R),C($e),i&&t(lo),i&&t(m),C(ke),C(X),C(Pe),C(oe),C(Ee),C(xe),C(De),C(ze),C(se),C(ie),C(Oe),C(qe),C(le),C(Fe),C(Ie),C(Le),C(Ne),C(We),C(Me),C(Ve)}}}const Is={local:"configuration",sections:[{local:"transformers.PretrainedConfig",title:"PretrainedConfig"}],title:"Configuration"};function Ls(z){return js(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Us extends Es{constructor(f){super();xs(this,f,Ls,Fs,Ts,{})}}export{Us as default,Is as metadata};
