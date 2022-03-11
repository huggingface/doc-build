import{S as js,i as zs,s as As,e as r,k as d,w as g,t as o,M as Os,c as a,d as t,m as c,a as s,x as p,h as n,b as h,F as e,g as O,y as _,q as b,o as y,B as v}from"../../chunks/vendor-329198bb.js";import{T as Ts}from"../../chunks/Tip-39ae8a84.js";import{D as C}from"../../chunks/Docstring-88811472.js";import{C as xs}from"../../chunks/CodeBlock-49151c5f.js";import{I as Ds}from"../../chunks/IconCopyLink-236b0ec7.js";import"../../chunks/CopyButton-970e2b07.js";function qs(ye){let m,E,u,w,j;return{c(){m=r("p"),E=o(`A configuration file can be loaded and saved to disk. Loading the configuration file and using this file to
initialize a model does `),u=r("strong"),w=o("not"),j=o(" load the model weights. It only affects the model\u2019s configuration.")},l($){m=a($,"P",{});var P=s(m);E=n(P,`A configuration file can be loaded and saved to disk. Loading the configuration file and using this file to
initialize a model does `),u=a(P,"STRONG",{});var q=s(u);w=n(q,"not"),q.forEach(t),j=n(P," load the model weights. It only affects the model\u2019s configuration."),P.forEach(t)},m($,P){O($,m,P),e(m,E),e(m,u),e(u,w),e(m,j)},d($){$&&t(m)}}}function Ss(ye){let m,E,u,w,j;return{c(){m=r("p"),E=o("Passing "),u=r("code"),w=o("use_auth_token=True"),j=o(" is required when you want to use a private model.")},l($){m=a($,"P",{});var P=s(m);E=n(P,"Passing "),u=a(P,"CODE",{});var q=s(u);w=n(q,"use_auth_token=True"),q.forEach(t),j=n(P," is required when you want to use a private model."),P.forEach(t)},m($,P){O($,m,P),e(m,E),e(m,u),e(u,w),e(m,j)},d($){$&&t(m)}}}function Fs(ye){let m,E,u,w,j,$,P,q,xo,oo,U,Do,Je,jo,zo,no,T,Ao,at,Oo,qo,st,So,Fo,it,Io,Lo,dt,No,Mo,ro,V,J,ct,ve,Wo,lt,Ho,ao,l,we,Vo,ft,Bo,Ro,G,Uo,ht,Jo,Go,S,M,mt,Xo,Ko,ut,Qo,Yo,Ge,Zo,en,tn,x,gt,on,nn,pt,rn,an,Xe,sn,dn,Ke,cn,ln,Qe,fn,hn,mn,X,_t,un,gn,bt,pn,_n,bn,K,yt,yn,vn,vt,wn,$n,kn,wt,Pn,Cn,F,Q,$t,En,Tn,kt,xn,Dn,jn,Y,Pt,zn,An,Ct,On,qn,Sn,Z,Et,Fn,In,Tt,Ln,Nn,Mn,ee,xt,Wn,Hn,Dt,Vn,Bn,Rn,z,$e,Un,ke,Jn,jt,Gn,Xn,Kn,zt,Qn,Yn,Pe,Zn,te,Ce,er,I,tr,At,or,nr,Ot,rr,ar,qt,sr,ir,dr,oe,Ee,cr,Te,lr,Ye,fr,hr,mr,ne,xe,ur,De,gr,Ze,pr,_r,br,D,je,yr,ze,vr,et,wr,$r,kr,re,Pr,St,Cr,Er,Ae,Tr,ae,Oe,xr,L,Dr,Ft,jr,zr,tt,Ar,Or,It,qr,Sr,Fr,se,qe,Ir,Se,Lr,Lt,Nr,Mr,Wr,ie,Fe,Hr,B,Vr,Nt,Br,Rr,ot,Ur,Jr,Gr,de,Ie,Xr,Mt,Kr,Qr,ce,Le,Yr,Wt,Zr,ea,le,Ne,ta,Ht,oa,na,fe,Me,ra,Vt,aa,sa,he,We,ia,He,da,Bt,ca,la,fa,A,Ve,ha,Be,ma,Rt,ua,ga,pa,R,_a,Ut,ba,ya,Jt,va,wa,$a,Gt,ka,so;return $=new Ds({}),ve=new Ds({}),we=new C({props:{name:"class transformers.PretrainedConfig",anchor:"transformers.PretrainedConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/configuration_utils.py#L53",parametersDescription:[{anchor:"transformers.PretrainedConfig.name_or_path",description:`<strong>name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&quot;</code>) &#x2014;
Store the string that was passed to <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">PreTrainedModel.from_pretrained()</a> or
<a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">TFPreTrainedModel.from_pretrained()</a> as <code>pretrained_model_name_or_path</code> if the configuration was created
with such a method.`,name:"name_or_path"},{anchor:"transformers.PretrainedConfig.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should return all hidden-states.`,name:"output_hidden_states"},{anchor:"transformers.PretrainedConfig.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should returns all attentions.`,name:"output_attentions"},{anchor:"transformers.PretrainedConfig.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PretrainedConfig.is_encoder_decoder",description:`<strong>is_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as an encoder/decoder or not.`,name:"is_encoder_decoder"},{anchor:"transformers.PretrainedConfig.is_decoder",description:`<strong>is_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as decoder or not (in which case it&#x2019;s used as an encoder).`,name:"is_decoder"},{anchor:"transformers.PretrainedConfig.cross_attention_hidden_size**",description:`<strong>cross_attention_hidden_size**</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
The hidden size of the cross-attention layer in case the model is used as a decoder in an encoder-decoder
setting and the cross-attention hidden dimension differs from <code>self.config.hidden_size</code>.`,name:"cross_attention_hidden_size**"},{anchor:"transformers.PretrainedConfig.add_cross_attention",description:`<strong>add_cross_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether cross-attention layers should be added to the model. Note, this option is only relevant for models
that can be used as decoder models within the <a href="/docs/transformers/master/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel">EncoderDecoderModel</a> class, which consists of all models
in <code>AUTO_MODELS_FOR_CAUSAL_LM</code>.`,name:"add_cross_attention"},{anchor:"transformers.PretrainedConfig.tie_encoder_decoder",description:`<strong>tie_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether all encoder weights should be tied to their equivalent decoder weights. This requires the encoder
and decoder model to have the exact same parameter names.`,name:"tie_encoder_decoder"},{anchor:"transformers.PretrainedConfig.prune_heads",description:`<strong>prune_heads</strong> (<code>Dict[int, List[int]]</code>, <em>optional</em>, defaults to <code>{}</code>) &#x2014;
Pruned heads of the model. The keys are the selected layer indices and the associated values, the list of
heads to prune in said layer.</p>
<p>For instance <code>{1: [0, 2], 2: [2, 3]}</code> will prune heads 0 and 2 on layer 1 and heads 2 and 3 on layer 2.`,name:"prune_heads"},{anchor:"transformers.PretrainedConfig.chunk_size_feed_forward",description:`<strong>chunk_size_feed_forward</strong> (<code>int</code>, <em>optional</em>, defaults to <code>0</code>) &#x2014;
The chunk size of all feed forward layers in the residual attention blocks. A chunk size of <code>0</code> means that
the feed forward layer is not chunked. A chunk size of n means that the feed forward layer processes <code>n</code> &lt;
sequence_length embeddings at a time. For more information on feed forward chunking, see <a href="../glossary.html#feed-forward-chunking">How does Feed
Forward Chunking work?</a>.`,name:"chunk_size_feed_forward"}],parameterGroups:[{title:"Parameters for sequence generation",parametersDescription:`
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
  href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput"
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
`}]}}),G=new Ts({props:{$$slots:{default:[qs]},$$scope:{ctx:ye}}}),$e=new C({props:{name:"push_to_hub",anchor:"transformers.file_utils.PushToHubMixin.push_to_hub",parameters:[{name:"repo_path_or_name",val:": typing.Optional[str] = None"},{name:"repo_url",val:": typing.Optional[str] = None"},{name:"use_temp_dir",val:": bool = False"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"},{name:"**model_card_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/file_utils.py#L2810",parametersDescription:[{anchor:"transformers.file_utils.PushToHubMixin.push_to_hub.repo_path_or_name",description:`<strong>repo_path_or_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Can either be a repository name for your config in the Hub or a path to a local folder (in which case
the repository will have the name of that local folder). If not specified, will default to the name
given by <code>repo_url</code> and a local directory with that name will be created.`,name:"repo_path_or_name"},{anchor:"transformers.file_utils.PushToHubMixin.push_to_hub.repo_url",description:`<strong>repo_url</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Specify this in case you want to push to an existing repository in the hub. If unspecified, a new
repository will be created in your namespace (unless you specify an <code>organization</code>) with <code>repo_name</code>.`,name:"repo_url"},{anchor:"transformers.file_utils.PushToHubMixin.push_to_hub.use_temp_dir",description:`<strong>use_temp_dir</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to clone the distant repo in a temporary directory or in <code>repo_path_or_name</code> inside the
current working directory. This will slow things down if you are making changes in an existing repo
since you will need to clone the repo before every push.`,name:"use_temp_dir"},{anchor:"transformers.file_utils.PushToHubMixin.push_to_hub.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Message to commit while pushing. Will default to <code>&quot;add config&quot;</code>.`,name:"commit_message"},{anchor:"transformers.file_utils.PushToHubMixin.push_to_hub.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Organization in which you want to push your config (you must be a member of this organization).`,name:"organization"},{anchor:"transformers.file_utils.PushToHubMixin.push_to_hub.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not the repository created should be private (requires a paying subscription).`,name:"private"},{anchor:"transformers.file_utils.PushToHubMixin.push_to_hub.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token generated
when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>). Will default to <code>True</code> if
<code>repo_url</code> is not specified.`,name:"use_auth_token"}],returnDescription:`
<p>The url of the commit of your config in the given repository.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Pe=new xs({props:{code:`from transformers import AutoConfig

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
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>, repo_url=<span class="hljs-string">&quot;https://huggingface.co/sgugger/my-finetuned-bert&quot;</span>)`}}),Ce=new C({props:{name:"dict_torch_dtype_to_str",anchor:"transformers.PretrainedConfig.dict_torch_dtype_to_str",parameters:[{name:"d",val:": typing.Dict[str, typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/configuration_utils.py#L855"}}),Ee=new C({props:{name:"from_dict",anchor:"transformers.PretrainedConfig.from_dict",parameters:[{name:"config_dict",val:": typing.Dict[str, typing.Any]"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/configuration_utils.py#L657",parametersDescription:[{anchor:"transformers.PretrainedConfig.from_dict.config_dict",description:`<strong>config_dict</strong> (<code>Dict[str, Any]</code>) &#x2014;
Dictionary that will be used to instantiate the configuration object. Such a dictionary can be
retrieved from a pretrained checkpoint by leveraging the <a href="/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig.get_config_dict">get_config_dict()</a> method.`,name:"config_dict"},{anchor:"transformers.PretrainedConfig.from_dict.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>) &#x2014;
Additional parameters from which to initialize the configuration object.`,name:"kwargs"}],returnDescription:`
<p>The configuration object instantiated from those parameters.</p>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),xe=new C({props:{name:"from_json_file",anchor:"transformers.PretrainedConfig.from_json_file",parameters:[{name:"json_file",val:": typing.Union[str, os.PathLike]"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/configuration_utils.py#L695",parametersDescription:[{anchor:"transformers.PretrainedConfig.from_json_file.json_file",description:`<strong>json_file</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Path to the JSON file containing the parameters.`,name:"json_file"}],returnDescription:`
<p>The configuration object instantiated from that JSON file.</p>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),je=new C({props:{name:"from_pretrained",anchor:"transformers.PretrainedConfig.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/configuration_utils.py#L445",parametersDescription:[{anchor:"transformers.PretrainedConfig.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained model configuration hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a configuration file saved using the
<a href="/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
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
when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"use_auth_token"},{anchor:"transformers.PretrainedConfig.from_pretrained.revision(str,",description:`<strong>revision(<code>str</code>,</strong> <em>optional</em>, defaults to <code>&quot;main&quot;</code>) &#x2014;
The specific model version to use. It can be a branch name, a tag name, or a commit id, since we use a
git-based system for storing models and other artifacts on huggingface.co, so <code>revision</code> can be any
identifier allowed by git.`,name:"revision(str,"},{anchor:"transformers.PretrainedConfig.from_pretrained.return_unused_kwargs",description:`<strong>return_unused_kwargs</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>False</code>, then this function returns just the final configuration object.</p>
<p>If <code>True</code>, then this functions returns a <code>Tuple(config, unused_kwargs)</code> where <em>unused_kwargs</em> is a
dictionary consisting of the key/value pairs whose keys are not configuration attributes: i.e., the
part of <code>kwargs</code> which has not been used to update <code>config</code> and is otherwise ignored.`,name:"return_unused_kwargs"},{anchor:"transformers.PretrainedConfig.from_pretrained.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
The values in kwargs of any keys which are configuration attributes will be used to override the loaded
values. Behavior concerning key/value pairs whose keys are <em>not</em> configuration attributes is controlled
by the <code>return_unused_kwargs</code> keyword parameter.`,name:"kwargs"}],returnDescription:`
<p>The configuration object instantiated from this pretrained model.</p>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),re=new Ts({props:{$$slots:{default:[Ss]},$$scope:{ctx:ye}}}),Ae=new xs({props:{code:`# We can't instantiate directly the base class *PretrainedConfig* so let's show the examples on a
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
<span class="hljs-keyword">assert</span> unused_kwargs == {<span class="hljs-string">&quot;foo&quot;</span>: <span class="hljs-literal">False</span>}`}}),Oe=new C({props:{name:"get_config_dict",anchor:"transformers.PretrainedConfig.get_config_dict",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/configuration_utils.py#L528",parametersDescription:[{anchor:"transformers.PretrainedConfig.get_config_dict.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
The identifier of the pre-trained checkpoint from which we want the dictionary of parameters.`,name:"pretrained_model_name_or_path"}],returnDescription:`
<p>The dictionary(ies) that will be used to instantiate the configuration object.</p>
`,returnType:`
<p><code>Tuple[Dict, Dict]</code></p>
`}}),qe=new C({props:{name:"register_for_auto_class",anchor:"transformers.PretrainedConfig.register_for_auto_class",parameters:[{name:"auto_class",val:" = 'AutoConfig'"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/configuration_utils.py#L864",parametersDescription:[{anchor:"transformers.PretrainedConfig.register_for_auto_class.auto_class",description:`<strong>auto_class</strong> (<code>str</code> or <code>type</code>, <em>optional</em>, defaults to <code>&quot;AutoConfig&quot;</code>) &#x2014;
The auto class to register this new configuration with.`,name:"auto_class"}]}}),Fe=new C({props:{name:"save_pretrained",anchor:"transformers.PretrainedConfig.save_pretrained",parameters:[{name:"save_directory",val:": typing.Union[str, os.PathLike]"},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/configuration_utils.py#L399",parametersDescription:[{anchor:"transformers.PretrainedConfig.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the configuration JSON file will be saved (will be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.PretrainedConfig.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/master/en/main_classes/model#transformers.file_utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}]}}),Ie=new C({props:{name:"to_dict",anchor:"transformers.PretrainedConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/configuration_utils.py#L755",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance.</p>
`,returnType:`
<p><code>Dict[str, Any]</code></p>
`}}),Le=new C({props:{name:"to_diff_dict",anchor:"transformers.PretrainedConfig.to_diff_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/configuration_utils.py#L723",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, Any]</code></p>
`}}),Ne=new C({props:{name:"to_json_file",anchor:"transformers.PretrainedConfig.to_json_file",parameters:[{name:"json_file_path",val:": typing.Union[str, os.PathLike]"},{name:"use_diff",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/configuration_utils.py#L793",parametersDescription:[{anchor:"transformers.PretrainedConfig.to_json_file.json_file_path",description:`<strong>json_file_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Path to the JSON file in which this configuration instance&#x2019;s parameters will be saved.`,name:"json_file_path"},{anchor:"transformers.PretrainedConfig.to_json_file.use_diff",description:`<strong>use_diff</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, only the difference between the config instance and the default <code>PretrainedConfig()</code>
is serialized to JSON file.`,name:"use_diff"}]}}),Me=new C({props:{name:"to_json_string",anchor:"transformers.PretrainedConfig.to_json_string",parameters:[{name:"use_diff",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/configuration_utils.py#L775",parametersDescription:[{anchor:"transformers.PretrainedConfig.to_json_string.use_diff",description:`<strong>use_diff</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, only the difference between the config instance and the default <code>PretrainedConfig()</code>
is serialized to JSON string.`,name:"use_diff"}],returnDescription:`
<p>String containing all the attributes that make up this configuration instance in JSON format.</p>
`,returnType:`
<p><code>str</code></p>
`}}),We=new C({props:{name:"update",anchor:"transformers.PretrainedConfig.update",parameters:[{name:"config_dict",val:": typing.Dict[str, typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/configuration_utils.py#L807",parametersDescription:[{anchor:"transformers.PretrainedConfig.update.config_dict",description:"<strong>config_dict</strong> (<code>Dict[str, Any]</code>) &#x2014; Dictionary of attributes that should be updated for this class.",name:"config_dict"}]}}),Ve=new C({props:{name:"update_from_string",anchor:"transformers.PretrainedConfig.update_from_string",parameters:[{name:"update_str",val:": str"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/configuration_utils.py#L817",parametersDescription:[{anchor:"transformers.PretrainedConfig.update_from_string.update_str",description:"<strong>update_str</strong> (<code>str</code>) &#x2014; String with attributes that should be updated for this class.",name:"update_str"}]}}),{c(){m=r("meta"),E=d(),u=r("h1"),w=r("a"),j=r("span"),g($.$$.fragment),P=d(),q=r("span"),xo=o("Configuration"),oo=d(),U=r("p"),Do=o("The base class "),Je=r("a"),jo=o("PretrainedConfig"),zo=o(` implements the common methods for loading/saving a configuration
either from a local file or directory, or from a pretrained model configuration provided by the library (downloaded
from HuggingFace\u2019s AWS S3 repository).`),no=d(),T=r("p"),Ao=o(`Each derived config class implements model specific attributes. Common attributes present in all config classes are:
`),at=r("code"),Oo=o("hidden_size"),qo=o(", "),st=r("code"),So=o("num_attention_heads"),Fo=o(", and "),it=r("code"),Io=o("num_hidden_layers"),Lo=o(`. Text models further implement:
`),dt=r("code"),No=o("vocab_size"),Mo=o("."),ro=d(),V=r("h2"),J=r("a"),ct=r("span"),g(ve.$$.fragment),Wo=d(),lt=r("span"),Ho=o("PretrainedConfig"),ao=d(),l=r("div"),g(we.$$.fragment),Vo=d(),ft=r("p"),Bo=o(`Base class for all configuration classes. Handles a few parameters common to all models\u2019 configurations as well as
methods for loading/downloading/saving configurations.`),Ro=d(),g(G.$$.fragment),Uo=d(),ht=r("p"),Jo=o("Class attributes (overridden by derived classes):"),Go=d(),S=r("ul"),M=r("li"),mt=r("strong"),Xo=o("model_type"),Ko=o(" ("),ut=r("code"),Qo=o("str"),Yo=o(`) \u2014 An identifier for the model type, serialized into the JSON file, and used to recreate
the correct object in `),Ge=r("a"),Zo=o("AutoConfig"),en=o("."),tn=d(),x=r("li"),gt=r("strong"),on=o("is_composition"),nn=o(" ("),pt=r("code"),rn=o("bool"),an=o(`) \u2014 Whether the config class is composed of multiple sub-configs. In this case the
config has to be initialized from two or more configs of type `),Xe=r("a"),sn=o("PretrainedConfig"),dn=o(` like:
`),Ke=r("a"),cn=o("EncoderDecoderConfig"),ln=o(" or "),Qe=r("a"),fn=o("~RagConfig"),hn=o("."),mn=d(),X=r("li"),_t=r("strong"),un=o("keys_to_ignore_at_inference"),gn=o(" ("),bt=r("code"),pn=o("List[str]"),_n=o(`) \u2014 A list of keys to ignore by default when looking at dictionary
outputs of the model during inference.`),bn=d(),K=r("li"),yt=r("strong"),yn=o("attribute_map"),vn=o(" ("),vt=r("code"),wn=o("Dict[str, str]"),$n=o(`) \u2014 A dict that maps model specific attribute names to the standardized
naming of attributes.`),kn=d(),wt=r("p"),Pn=o("Common attributes (present in all subclasses):"),Cn=d(),F=r("ul"),Q=r("li"),$t=r("strong"),En=o("vocab_size"),Tn=o(" ("),kt=r("code"),xn=o("int"),Dn=o(`) \u2014 The number of tokens in the vocabulary, which is also the first dimension of the
embeddings matrix (this attribute may be missing for models that don\u2019t have a text modality like ViT).`),jn=d(),Y=r("li"),Pt=r("strong"),zn=o("hidden_size"),An=o(" ("),Ct=r("code"),On=o("int"),qn=o(") \u2014 The hidden size of the model."),Sn=d(),Z=r("li"),Et=r("strong"),Fn=o("num_attention_heads"),In=o(" ("),Tt=r("code"),Ln=o("int"),Nn=o(`) \u2014 The number of attention heads used in the multi-head attention layers of the
model.`),Mn=d(),ee=r("li"),xt=r("strong"),Wn=o("num_hidden_layers"),Hn=o(" ("),Dt=r("code"),Vn=o("int"),Bn=o(") \u2014 The number of blocks in the model."),Rn=d(),z=r("div"),g($e.$$.fragment),Un=d(),ke=r("p"),Jn=o(`Upload the configuration file to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),jt=r("code"),Gn=o("repo_path_or_name"),Xn=o("."),Kn=d(),zt=r("p"),Qn=o("Examples:"),Yn=d(),g(Pe.$$.fragment),Zn=d(),te=r("div"),g(Ce.$$.fragment),er=d(),I=r("p"),tr=o("Checks whether the passed dictionary has a "),At=r("em"),or=o("torch_dtype"),nr=o(` key and if it\u2019s not None, converts torch.dtype to a
string of just the type. For example, `),Ot=r("code"),rr=o("torch.float32"),ar=o(" get converted into "),qt=r("em"),sr=o("\u201Cfloat32\u201D"),ir=o(` string, which can then be
stored in the json format.`),dr=d(),oe=r("div"),g(Ee.$$.fragment),cr=d(),Te=r("p"),lr=o("Instantiates a "),Ye=r("a"),fr=o("PretrainedConfig"),hr=o(" from a Python dictionary of parameters."),mr=d(),ne=r("div"),g(xe.$$.fragment),ur=d(),De=r("p"),gr=o("Instantiates a "),Ze=r("a"),pr=o("PretrainedConfig"),_r=o(" from the path to a JSON file of parameters."),br=d(),D=r("div"),g(je.$$.fragment),yr=d(),ze=r("p"),vr=o("Instantiate a "),et=r("a"),wr=o("PretrainedConfig"),$r=o(" (or a derived class) from a pretrained model configuration."),kr=d(),g(re.$$.fragment),Pr=d(),St=r("p"),Cr=o("Examples:"),Er=d(),g(Ae.$$.fragment),Tr=d(),ae=r("div"),g(Oe.$$.fragment),xr=d(),L=r("p"),Dr=o("From a "),Ft=r("code"),jr=o("pretrained_model_name_or_path"),zr=o(`, resolve to a dictionary of parameters, to be used for instantiating a
`),tt=r("a"),Ar=o("PretrainedConfig"),Or=o(" using "),It=r("code"),qr=o("from_dict"),Sr=o("."),Fr=d(),se=r("div"),g(qe.$$.fragment),Ir=d(),Se=r("p"),Lr=o(`Register this class with a given auto class. This should only be used for custom configurations as the ones in
the library are already mapped with `),Lt=r("code"),Nr=o("AutoConfig"),Mr=o("."),Wr=d(),ie=r("div"),g(Fe.$$.fragment),Hr=d(),B=r("p"),Vr=o("Save a configuration object to the directory "),Nt=r("code"),Br=o("save_directory"),Rr=o(`, so that it can be re-loaded using the
`),ot=r("a"),Ur=o("from_pretrained()"),Jr=o(" class method."),Gr=d(),de=r("div"),g(Ie.$$.fragment),Xr=d(),Mt=r("p"),Kr=o("Serializes this instance to a Python dictionary."),Qr=d(),ce=r("div"),g(Le.$$.fragment),Yr=d(),Wt=r("p"),Zr=o(`Removes all attributes from config which correspond to the default config attributes for better readability and
serializes to a Python dictionary.`),ea=d(),le=r("div"),g(Ne.$$.fragment),ta=d(),Ht=r("p"),oa=o("Save this instance to a JSON file."),na=d(),fe=r("div"),g(Me.$$.fragment),ra=d(),Vt=r("p"),aa=o("Serializes this instance to a JSON string."),sa=d(),he=r("div"),g(We.$$.fragment),ia=d(),He=r("p"),da=o("Updates attributes of this class with attributes from "),Bt=r("code"),ca=o("config_dict"),la=o("."),fa=d(),A=r("div"),g(Ve.$$.fragment),ha=d(),Be=r("p"),ma=o("Updates attributes of this class with attributes from "),Rt=r("code"),ua=o("update_str"),ga=o("."),pa=d(),R=r("p"),_a=o("The expected format is ints, floats and strings as is, and for booleans use "),Ut=r("code"),ba=o("true"),ya=o(" or "),Jt=r("code"),va=o("false"),wa=o(`. For example:
\u201Cn_embd=10,resid_pdrop=0.2,scale_attn_weights=false,summary_type=cls_index\u201D`),$a=d(),Gt=r("p"),ka=o("The keys to change have to already exist in the config object."),this.h()},l(i){const k=Os('[data-svelte="svelte-1phssyn"]',document.head);m=a(k,"META",{name:!0,content:!0}),k.forEach(t),E=c(i),u=a(i,"H1",{class:!0});var Re=s(u);w=a(Re,"A",{id:!0,class:!0,href:!0});var Xt=s(w);j=a(Xt,"SPAN",{});var Pa=s(j);p($.$$.fragment,Pa),Pa.forEach(t),Xt.forEach(t),P=c(Re),q=a(Re,"SPAN",{});var Ca=s(q);xo=n(Ca,"Configuration"),Ca.forEach(t),Re.forEach(t),oo=c(i),U=a(i,"P",{});var io=s(U);Do=n(io,"The base class "),Je=a(io,"A",{href:!0});var Ea=s(Je);jo=n(Ea,"PretrainedConfig"),Ea.forEach(t),zo=n(io,` implements the common methods for loading/saving a configuration
either from a local file or directory, or from a pretrained model configuration provided by the library (downloaded
from HuggingFace\u2019s AWS S3 repository).`),io.forEach(t),no=c(i),T=a(i,"P",{});var W=s(T);Ao=n(W,`Each derived config class implements model specific attributes. Common attributes present in all config classes are:
`),at=a(W,"CODE",{});var Ta=s(at);Oo=n(Ta,"hidden_size"),Ta.forEach(t),qo=n(W,", "),st=a(W,"CODE",{});var xa=s(st);So=n(xa,"num_attention_heads"),xa.forEach(t),Fo=n(W,", and "),it=a(W,"CODE",{});var Da=s(it);Io=n(Da,"num_hidden_layers"),Da.forEach(t),Lo=n(W,`. Text models further implement:
`),dt=a(W,"CODE",{});var ja=s(dt);No=n(ja,"vocab_size"),ja.forEach(t),Mo=n(W,"."),W.forEach(t),ro=c(i),V=a(i,"H2",{class:!0});var co=s(V);J=a(co,"A",{id:!0,class:!0,href:!0});var za=s(J);ct=a(za,"SPAN",{});var Aa=s(ct);p(ve.$$.fragment,Aa),Aa.forEach(t),za.forEach(t),Wo=c(co),lt=a(co,"SPAN",{});var Oa=s(lt);Ho=n(Oa,"PretrainedConfig"),Oa.forEach(t),co.forEach(t),ao=c(i),l=a(i,"DIV",{class:!0});var f=s(l);p(we.$$.fragment,f),Vo=c(f),ft=a(f,"P",{});var qa=s(ft);Bo=n(qa,`Base class for all configuration classes. Handles a few parameters common to all models\u2019 configurations as well as
methods for loading/downloading/saving configurations.`),qa.forEach(t),Ro=c(f),p(G.$$.fragment,f),Uo=c(f),ht=a(f,"P",{});var Sa=s(ht);Jo=n(Sa,"Class attributes (overridden by derived classes):"),Sa.forEach(t),Go=c(f),S=a(f,"UL",{});var me=s(S);M=a(me,"LI",{});var Ue=s(M);mt=a(Ue,"STRONG",{});var Fa=s(mt);Xo=n(Fa,"model_type"),Fa.forEach(t),Ko=n(Ue," ("),ut=a(Ue,"CODE",{});var Ia=s(ut);Qo=n(Ia,"str"),Ia.forEach(t),Yo=n(Ue,`) \u2014 An identifier for the model type, serialized into the JSON file, and used to recreate
the correct object in `),Ge=a(Ue,"A",{href:!0});var La=s(Ge);Zo=n(La,"AutoConfig"),La.forEach(t),en=n(Ue,"."),Ue.forEach(t),tn=c(me),x=a(me,"LI",{});var N=s(x);gt=a(N,"STRONG",{});var Na=s(gt);on=n(Na,"is_composition"),Na.forEach(t),nn=n(N," ("),pt=a(N,"CODE",{});var Ma=s(pt);rn=n(Ma,"bool"),Ma.forEach(t),an=n(N,`) \u2014 Whether the config class is composed of multiple sub-configs. In this case the
config has to be initialized from two or more configs of type `),Xe=a(N,"A",{href:!0});var Wa=s(Xe);sn=n(Wa,"PretrainedConfig"),Wa.forEach(t),dn=n(N,` like:
`),Ke=a(N,"A",{href:!0});var Ha=s(Ke);cn=n(Ha,"EncoderDecoderConfig"),Ha.forEach(t),ln=n(N," or "),Qe=a(N,"A",{href:!0});var Va=s(Qe);fn=n(Va,"~RagConfig"),Va.forEach(t),hn=n(N,"."),N.forEach(t),mn=c(me),X=a(me,"LI",{});var Kt=s(X);_t=a(Kt,"STRONG",{});var Ba=s(_t);un=n(Ba,"keys_to_ignore_at_inference"),Ba.forEach(t),gn=n(Kt," ("),bt=a(Kt,"CODE",{});var Ra=s(bt);pn=n(Ra,"List[str]"),Ra.forEach(t),_n=n(Kt,`) \u2014 A list of keys to ignore by default when looking at dictionary
outputs of the model during inference.`),Kt.forEach(t),bn=c(me),K=a(me,"LI",{});var Qt=s(K);yt=a(Qt,"STRONG",{});var Ua=s(yt);yn=n(Ua,"attribute_map"),Ua.forEach(t),vn=n(Qt," ("),vt=a(Qt,"CODE",{});var Ja=s(vt);wn=n(Ja,"Dict[str, str]"),Ja.forEach(t),$n=n(Qt,`) \u2014 A dict that maps model specific attribute names to the standardized
naming of attributes.`),Qt.forEach(t),me.forEach(t),kn=c(f),wt=a(f,"P",{});var Ga=s(wt);Pn=n(Ga,"Common attributes (present in all subclasses):"),Ga.forEach(t),Cn=c(f),F=a(f,"UL",{});var ue=s(F);Q=a(ue,"LI",{});var Yt=s(Q);$t=a(Yt,"STRONG",{});var Xa=s($t);En=n(Xa,"vocab_size"),Xa.forEach(t),Tn=n(Yt," ("),kt=a(Yt,"CODE",{});var Ka=s(kt);xn=n(Ka,"int"),Ka.forEach(t),Dn=n(Yt,`) \u2014 The number of tokens in the vocabulary, which is also the first dimension of the
embeddings matrix (this attribute may be missing for models that don\u2019t have a text modality like ViT).`),Yt.forEach(t),jn=c(ue),Y=a(ue,"LI",{});var Zt=s(Y);Pt=a(Zt,"STRONG",{});var Qa=s(Pt);zn=n(Qa,"hidden_size"),Qa.forEach(t),An=n(Zt," ("),Ct=a(Zt,"CODE",{});var Ya=s(Ct);On=n(Ya,"int"),Ya.forEach(t),qn=n(Zt,") \u2014 The hidden size of the model."),Zt.forEach(t),Sn=c(ue),Z=a(ue,"LI",{});var eo=s(Z);Et=a(eo,"STRONG",{});var Za=s(Et);Fn=n(Za,"num_attention_heads"),Za.forEach(t),In=n(eo," ("),Tt=a(eo,"CODE",{});var es=s(Tt);Ln=n(es,"int"),es.forEach(t),Nn=n(eo,`) \u2014 The number of attention heads used in the multi-head attention layers of the
model.`),eo.forEach(t),Mn=c(ue),ee=a(ue,"LI",{});var to=s(ee);xt=a(to,"STRONG",{});var ts=s(xt);Wn=n(ts,"num_hidden_layers"),ts.forEach(t),Hn=n(to," ("),Dt=a(to,"CODE",{});var os=s(Dt);Vn=n(os,"int"),os.forEach(t),Bn=n(to,") \u2014 The number of blocks in the model."),to.forEach(t),ue.forEach(t),Rn=c(f),z=a(f,"DIV",{class:!0});var ge=s(z);p($e.$$.fragment,ge),Un=c(ge),ke=a(ge,"P",{});var lo=s(ke);Jn=n(lo,`Upload the configuration file to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),jt=a(lo,"CODE",{});var ns=s(jt);Gn=n(ns,"repo_path_or_name"),ns.forEach(t),Xn=n(lo,"."),lo.forEach(t),Kn=c(ge),zt=a(ge,"P",{});var rs=s(zt);Qn=n(rs,"Examples:"),rs.forEach(t),Yn=c(ge),p(Pe.$$.fragment,ge),ge.forEach(t),Zn=c(f),te=a(f,"DIV",{class:!0});var fo=s(te);p(Ce.$$.fragment,fo),er=c(fo),I=a(fo,"P",{});var pe=s(I);tr=n(pe,"Checks whether the passed dictionary has a "),At=a(pe,"EM",{});var as=s(At);or=n(as,"torch_dtype"),as.forEach(t),nr=n(pe,` key and if it\u2019s not None, converts torch.dtype to a
string of just the type. For example, `),Ot=a(pe,"CODE",{});var ss=s(Ot);rr=n(ss,"torch.float32"),ss.forEach(t),ar=n(pe," get converted into "),qt=a(pe,"EM",{});var is=s(qt);sr=n(is,"\u201Cfloat32\u201D"),is.forEach(t),ir=n(pe,` string, which can then be
stored in the json format.`),pe.forEach(t),fo.forEach(t),dr=c(f),oe=a(f,"DIV",{class:!0});var ho=s(oe);p(Ee.$$.fragment,ho),cr=c(ho),Te=a(ho,"P",{});var mo=s(Te);lr=n(mo,"Instantiates a "),Ye=a(mo,"A",{href:!0});var ds=s(Ye);fr=n(ds,"PretrainedConfig"),ds.forEach(t),hr=n(mo," from a Python dictionary of parameters."),mo.forEach(t),ho.forEach(t),mr=c(f),ne=a(f,"DIV",{class:!0});var uo=s(ne);p(xe.$$.fragment,uo),ur=c(uo),De=a(uo,"P",{});var go=s(De);gr=n(go,"Instantiates a "),Ze=a(go,"A",{href:!0});var cs=s(Ze);pr=n(cs,"PretrainedConfig"),cs.forEach(t),_r=n(go," from the path to a JSON file of parameters."),go.forEach(t),uo.forEach(t),br=c(f),D=a(f,"DIV",{class:!0});var H=s(D);p(je.$$.fragment,H),yr=c(H),ze=a(H,"P",{});var po=s(ze);vr=n(po,"Instantiate a "),et=a(po,"A",{href:!0});var ls=s(et);wr=n(ls,"PretrainedConfig"),ls.forEach(t),$r=n(po," (or a derived class) from a pretrained model configuration."),po.forEach(t),kr=c(H),p(re.$$.fragment,H),Pr=c(H),St=a(H,"P",{});var fs=s(St);Cr=n(fs,"Examples:"),fs.forEach(t),Er=c(H),p(Ae.$$.fragment,H),H.forEach(t),Tr=c(f),ae=a(f,"DIV",{class:!0});var _o=s(ae);p(Oe.$$.fragment,_o),xr=c(_o),L=a(_o,"P",{});var _e=s(L);Dr=n(_e,"From a "),Ft=a(_e,"CODE",{});var hs=s(Ft);jr=n(hs,"pretrained_model_name_or_path"),hs.forEach(t),zr=n(_e,`, resolve to a dictionary of parameters, to be used for instantiating a
`),tt=a(_e,"A",{href:!0});var ms=s(tt);Ar=n(ms,"PretrainedConfig"),ms.forEach(t),Or=n(_e," using "),It=a(_e,"CODE",{});var us=s(It);qr=n(us,"from_dict"),us.forEach(t),Sr=n(_e,"."),_e.forEach(t),_o.forEach(t),Fr=c(f),se=a(f,"DIV",{class:!0});var bo=s(se);p(qe.$$.fragment,bo),Ir=c(bo),Se=a(bo,"P",{});var yo=s(Se);Lr=n(yo,`Register this class with a given auto class. This should only be used for custom configurations as the ones in
the library are already mapped with `),Lt=a(yo,"CODE",{});var gs=s(Lt);Nr=n(gs,"AutoConfig"),gs.forEach(t),Mr=n(yo,"."),yo.forEach(t),bo.forEach(t),Wr=c(f),ie=a(f,"DIV",{class:!0});var vo=s(ie);p(Fe.$$.fragment,vo),Hr=c(vo),B=a(vo,"P",{});var nt=s(B);Vr=n(nt,"Save a configuration object to the directory "),Nt=a(nt,"CODE",{});var ps=s(Nt);Br=n(ps,"save_directory"),ps.forEach(t),Rr=n(nt,`, so that it can be re-loaded using the
`),ot=a(nt,"A",{href:!0});var _s=s(ot);Ur=n(_s,"from_pretrained()"),_s.forEach(t),Jr=n(nt," class method."),nt.forEach(t),vo.forEach(t),Gr=c(f),de=a(f,"DIV",{class:!0});var wo=s(de);p(Ie.$$.fragment,wo),Xr=c(wo),Mt=a(wo,"P",{});var bs=s(Mt);Kr=n(bs,"Serializes this instance to a Python dictionary."),bs.forEach(t),wo.forEach(t),Qr=c(f),ce=a(f,"DIV",{class:!0});var $o=s(ce);p(Le.$$.fragment,$o),Yr=c($o),Wt=a($o,"P",{});var ys=s(Wt);Zr=n(ys,`Removes all attributes from config which correspond to the default config attributes for better readability and
serializes to a Python dictionary.`),ys.forEach(t),$o.forEach(t),ea=c(f),le=a(f,"DIV",{class:!0});var ko=s(le);p(Ne.$$.fragment,ko),ta=c(ko),Ht=a(ko,"P",{});var vs=s(Ht);oa=n(vs,"Save this instance to a JSON file."),vs.forEach(t),ko.forEach(t),na=c(f),fe=a(f,"DIV",{class:!0});var Po=s(fe);p(Me.$$.fragment,Po),ra=c(Po),Vt=a(Po,"P",{});var ws=s(Vt);aa=n(ws,"Serializes this instance to a JSON string."),ws.forEach(t),Po.forEach(t),sa=c(f),he=a(f,"DIV",{class:!0});var Co=s(he);p(We.$$.fragment,Co),ia=c(Co),He=a(Co,"P",{});var Eo=s(He);da=n(Eo,"Updates attributes of this class with attributes from "),Bt=a(Eo,"CODE",{});var $s=s(Bt);ca=n($s,"config_dict"),$s.forEach(t),la=n(Eo,"."),Eo.forEach(t),Co.forEach(t),fa=c(f),A=a(f,"DIV",{class:!0});var be=s(A);p(Ve.$$.fragment,be),ha=c(be),Be=a(be,"P",{});var To=s(Be);ma=n(To,"Updates attributes of this class with attributes from "),Rt=a(To,"CODE",{});var ks=s(Rt);ua=n(ks,"update_str"),ks.forEach(t),ga=n(To,"."),To.forEach(t),pa=c(be),R=a(be,"P",{});var rt=s(R);_a=n(rt,"The expected format is ints, floats and strings as is, and for booleans use "),Ut=a(rt,"CODE",{});var Ps=s(Ut);ba=n(Ps,"true"),Ps.forEach(t),ya=n(rt," or "),Jt=a(rt,"CODE",{});var Cs=s(Jt);va=n(Cs,"false"),Cs.forEach(t),wa=n(rt,`. For example:
\u201Cn_embd=10,resid_pdrop=0.2,scale_attn_weights=false,summary_type=cls_index\u201D`),rt.forEach(t),$a=c(be),Gt=a(be,"P",{});var Es=s(Gt);ka=n(Es,"The keys to change have to already exist in the config object."),Es.forEach(t),be.forEach(t),f.forEach(t),this.h()},h(){h(m,"name","hf:doc:metadata"),h(m,"content",JSON.stringify(Is)),h(w,"id","configuration"),h(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(w,"href","#configuration"),h(u,"class","relative group"),h(Je,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),h(J,"id","transformers.PretrainedConfig"),h(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(J,"href","#transformers.PretrainedConfig"),h(V,"class","relative group"),h(Ge,"href","/docs/transformers/master/en/model_doc/auto#transformers.AutoConfig"),h(Xe,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),h(Ke,"href","/docs/transformers/master/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),h(Qe,"href","/docs/transformers/master/en/model_doc/rag#transformers.RagConfig"),h(z,"class","docstring"),h(te,"class","docstring"),h(Ye,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),h(oe,"class","docstring"),h(Ze,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),h(ne,"class","docstring"),h(et,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),h(D,"class","docstring"),h(tt,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),h(ae,"class","docstring"),h(se,"class","docstring"),h(ot,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig.from_pretrained"),h(ie,"class","docstring"),h(de,"class","docstring"),h(ce,"class","docstring"),h(le,"class","docstring"),h(fe,"class","docstring"),h(he,"class","docstring"),h(A,"class","docstring"),h(l,"class","docstring")},m(i,k){e(document.head,m),O(i,E,k),O(i,u,k),e(u,w),e(w,j),_($,j,null),e(u,P),e(u,q),e(q,xo),O(i,oo,k),O(i,U,k),e(U,Do),e(U,Je),e(Je,jo),e(U,zo),O(i,no,k),O(i,T,k),e(T,Ao),e(T,at),e(at,Oo),e(T,qo),e(T,st),e(st,So),e(T,Fo),e(T,it),e(it,Io),e(T,Lo),e(T,dt),e(dt,No),e(T,Mo),O(i,ro,k),O(i,V,k),e(V,J),e(J,ct),_(ve,ct,null),e(V,Wo),e(V,lt),e(lt,Ho),O(i,ao,k),O(i,l,k),_(we,l,null),e(l,Vo),e(l,ft),e(ft,Bo),e(l,Ro),_(G,l,null),e(l,Uo),e(l,ht),e(ht,Jo),e(l,Go),e(l,S),e(S,M),e(M,mt),e(mt,Xo),e(M,Ko),e(M,ut),e(ut,Qo),e(M,Yo),e(M,Ge),e(Ge,Zo),e(M,en),e(S,tn),e(S,x),e(x,gt),e(gt,on),e(x,nn),e(x,pt),e(pt,rn),e(x,an),e(x,Xe),e(Xe,sn),e(x,dn),e(x,Ke),e(Ke,cn),e(x,ln),e(x,Qe),e(Qe,fn),e(x,hn),e(S,mn),e(S,X),e(X,_t),e(_t,un),e(X,gn),e(X,bt),e(bt,pn),e(X,_n),e(S,bn),e(S,K),e(K,yt),e(yt,yn),e(K,vn),e(K,vt),e(vt,wn),e(K,$n),e(l,kn),e(l,wt),e(wt,Pn),e(l,Cn),e(l,F),e(F,Q),e(Q,$t),e($t,En),e(Q,Tn),e(Q,kt),e(kt,xn),e(Q,Dn),e(F,jn),e(F,Y),e(Y,Pt),e(Pt,zn),e(Y,An),e(Y,Ct),e(Ct,On),e(Y,qn),e(F,Sn),e(F,Z),e(Z,Et),e(Et,Fn),e(Z,In),e(Z,Tt),e(Tt,Ln),e(Z,Nn),e(F,Mn),e(F,ee),e(ee,xt),e(xt,Wn),e(ee,Hn),e(ee,Dt),e(Dt,Vn),e(ee,Bn),e(l,Rn),e(l,z),_($e,z,null),e(z,Un),e(z,ke),e(ke,Jn),e(ke,jt),e(jt,Gn),e(ke,Xn),e(z,Kn),e(z,zt),e(zt,Qn),e(z,Yn),_(Pe,z,null),e(l,Zn),e(l,te),_(Ce,te,null),e(te,er),e(te,I),e(I,tr),e(I,At),e(At,or),e(I,nr),e(I,Ot),e(Ot,rr),e(I,ar),e(I,qt),e(qt,sr),e(I,ir),e(l,dr),e(l,oe),_(Ee,oe,null),e(oe,cr),e(oe,Te),e(Te,lr),e(Te,Ye),e(Ye,fr),e(Te,hr),e(l,mr),e(l,ne),_(xe,ne,null),e(ne,ur),e(ne,De),e(De,gr),e(De,Ze),e(Ze,pr),e(De,_r),e(l,br),e(l,D),_(je,D,null),e(D,yr),e(D,ze),e(ze,vr),e(ze,et),e(et,wr),e(ze,$r),e(D,kr),_(re,D,null),e(D,Pr),e(D,St),e(St,Cr),e(D,Er),_(Ae,D,null),e(l,Tr),e(l,ae),_(Oe,ae,null),e(ae,xr),e(ae,L),e(L,Dr),e(L,Ft),e(Ft,jr),e(L,zr),e(L,tt),e(tt,Ar),e(L,Or),e(L,It),e(It,qr),e(L,Sr),e(l,Fr),e(l,se),_(qe,se,null),e(se,Ir),e(se,Se),e(Se,Lr),e(Se,Lt),e(Lt,Nr),e(Se,Mr),e(l,Wr),e(l,ie),_(Fe,ie,null),e(ie,Hr),e(ie,B),e(B,Vr),e(B,Nt),e(Nt,Br),e(B,Rr),e(B,ot),e(ot,Ur),e(B,Jr),e(l,Gr),e(l,de),_(Ie,de,null),e(de,Xr),e(de,Mt),e(Mt,Kr),e(l,Qr),e(l,ce),_(Le,ce,null),e(ce,Yr),e(ce,Wt),e(Wt,Zr),e(l,ea),e(l,le),_(Ne,le,null),e(le,ta),e(le,Ht),e(Ht,oa),e(l,na),e(l,fe),_(Me,fe,null),e(fe,ra),e(fe,Vt),e(Vt,aa),e(l,sa),e(l,he),_(We,he,null),e(he,ia),e(he,He),e(He,da),e(He,Bt),e(Bt,ca),e(He,la),e(l,fa),e(l,A),_(Ve,A,null),e(A,ha),e(A,Be),e(Be,ma),e(Be,Rt),e(Rt,ua),e(Be,ga),e(A,pa),e(A,R),e(R,_a),e(R,Ut),e(Ut,ba),e(R,ya),e(R,Jt),e(Jt,va),e(R,wa),e(A,$a),e(A,Gt),e(Gt,ka),so=!0},p(i,[k]){const Re={};k&2&&(Re.$$scope={dirty:k,ctx:i}),G.$set(Re);const Xt={};k&2&&(Xt.$$scope={dirty:k,ctx:i}),re.$set(Xt)},i(i){so||(b($.$$.fragment,i),b(ve.$$.fragment,i),b(we.$$.fragment,i),b(G.$$.fragment,i),b($e.$$.fragment,i),b(Pe.$$.fragment,i),b(Ce.$$.fragment,i),b(Ee.$$.fragment,i),b(xe.$$.fragment,i),b(je.$$.fragment,i),b(re.$$.fragment,i),b(Ae.$$.fragment,i),b(Oe.$$.fragment,i),b(qe.$$.fragment,i),b(Fe.$$.fragment,i),b(Ie.$$.fragment,i),b(Le.$$.fragment,i),b(Ne.$$.fragment,i),b(Me.$$.fragment,i),b(We.$$.fragment,i),b(Ve.$$.fragment,i),so=!0)},o(i){y($.$$.fragment,i),y(ve.$$.fragment,i),y(we.$$.fragment,i),y(G.$$.fragment,i),y($e.$$.fragment,i),y(Pe.$$.fragment,i),y(Ce.$$.fragment,i),y(Ee.$$.fragment,i),y(xe.$$.fragment,i),y(je.$$.fragment,i),y(re.$$.fragment,i),y(Ae.$$.fragment,i),y(Oe.$$.fragment,i),y(qe.$$.fragment,i),y(Fe.$$.fragment,i),y(Ie.$$.fragment,i),y(Le.$$.fragment,i),y(Ne.$$.fragment,i),y(Me.$$.fragment,i),y(We.$$.fragment,i),y(Ve.$$.fragment,i),so=!1},d(i){t(m),i&&t(E),i&&t(u),v($),i&&t(oo),i&&t(U),i&&t(no),i&&t(T),i&&t(ro),i&&t(V),v(ve),i&&t(ao),i&&t(l),v(we),v(G),v($e),v(Pe),v(Ce),v(Ee),v(xe),v(je),v(re),v(Ae),v(Oe),v(qe),v(Fe),v(Ie),v(Le),v(Ne),v(Me),v(We),v(Ve)}}}const Is={local:"configuration",sections:[{local:"transformers.PretrainedConfig",title:"PretrainedConfig"}],title:"Configuration"};function Ls(ye,m,E){let{fw:u}=m;return ye.$$set=w=>{"fw"in w&&E(0,u=w.fw)},[u]}class Rs extends js{constructor(m){super();zs(this,m,Ls,Fs,As,{fw:0})}}export{Rs as default,Is as metadata};
