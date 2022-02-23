import{S as bs,i as vs,s as ys,e as r,k as d,w as g,t as o,M as ws,c as a,d as t,m as c,a as s,x as p,h as n,b as h,F as e,g as A,y as _,q as b,o as v,B as y}from"../../chunks/vendor-ab4e3193.js";import{T as gs}from"../../chunks/Tip-b5c6375a.js";import{D}from"../../chunks/Docstring-91f1beab.js";import{C as ps}from"../../chunks/CodeBlock-516df0c5.js";import{I as _s}from"../../chunks/IconCopyLink-d992940d.js";import"../../chunks/CopyButton-204b56db.js";function $s(be){let m,C,u,w,j;return{c(){m=r("p"),C=o(`A configuration file can be loaded and saved to disk. Loading the configuration file and using this file to
initialize a model does `),u=r("strong"),w=o("not"),j=o(" load the model weights. It only affects the model\u2019s configuration.")},l($){m=a($,"P",{});var P=s(m);C=n(P,`A configuration file can be loaded and saved to disk. Loading the configuration file and using this file to
initialize a model does `),u=a(P,"STRONG",{});var q=s(u);w=n(q,"not"),q.forEach(t),j=n(P," load the model weights. It only affects the model\u2019s configuration."),P.forEach(t)},m($,P){A($,m,P),e(m,C),e(m,u),e(u,w),e(m,j)},d($){$&&t(m)}}}function ks(be){let m,C,u,w,j;return{c(){m=r("p"),C=o("Passing "),u=r("code"),w=o("use_auth_token=True"),j=o(" is required when you want to use a private model.")},l($){m=a($,"P",{});var P=s(m);C=n(P,"Passing "),u=a(P,"CODE",{});var q=s(u);w=n(q,"use_auth_token=True"),q.forEach(t),j=n(P," is required when you want to use a private model."),P.forEach(t)},m($,P){A($,m,P),e(m,C),e(m,u),e(u,w),e(m,j)},d($){$&&t(m)}}}function Ps(be){let m,C,u,w,j,$,P,q,$o,Yt,J,ko,Be,Po,Co,Zt,E,Eo,ot,To,xo,nt,Do,jo,rt,zo,Oo,at,Ao,qo,eo,V,R,st,ve,So,it,Fo,to,l,ye,Io,dt,Lo,No,G,Mo,ct,Wo,Ho,S,M,lt,Vo,Bo,ft,Uo,Jo,Ue,Ro,Go,Xo,T,ht,Ko,Qo,mt,Yo,Zo,Je,en,tn,Re,on,nn,Ge,rn,an,sn,X,ut,dn,cn,gt,ln,fn,hn,K,pt,mn,un,_t,gn,pn,_n,bt,bn,vn,F,Q,vt,yn,wn,yt,$n,kn,Pn,Y,wt,Cn,En,$t,Tn,xn,Dn,Z,kt,jn,zn,Pt,On,An,qn,ee,Ct,Sn,Fn,Et,In,Ln,Nn,z,we,Mn,$e,Wn,Tt,Hn,Vn,Bn,xt,Un,Jn,ke,Rn,te,Pe,Gn,I,Xn,Dt,Kn,Qn,jt,Yn,Zn,zt,er,tr,or,oe,Ce,nr,Ee,rr,Xe,ar,sr,ir,ne,Te,dr,xe,cr,Ke,lr,fr,hr,x,De,mr,je,ur,Qe,gr,pr,_r,re,br,Ot,vr,yr,ze,wr,ae,Oe,$r,L,kr,At,Pr,Cr,Ye,Er,Tr,qt,xr,Dr,jr,se,Ae,zr,B,Or,St,Ar,qr,Ze,Sr,Fr,Ir,ie,qe,Lr,Ft,Nr,Mr,de,Se,Wr,It,Hr,Vr,ce,Fe,Br,Lt,Ur,Jr,le,Ie,Rr,Nt,Gr,Xr,fe,Le,Kr,Ne,Qr,Mt,Yr,Zr,ea,O,Me,ta,We,oa,Wt,na,ra,aa,U,sa,Ht,ia,da,Vt,ca,la,fa,Bt,ha,oo;return $=new _s({}),ve=new _s({}),ye=new D({props:{name:"class transformers.PretrainedConfig",anchor:"transformers.PretrainedConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/configuration_utils.py#L52",parametersDescription:[{anchor:"transformers.PretrainedConfig.name_or_path",description:`<strong>name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&quot;</code>) &#x2014;
Store the string that was passed to <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">PreTrainedModel.from_pretrained()</a> or
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">TFPreTrainedModel.from_pretrained()</a> as <code>pretrained_model_name_or_path</code> if the configuration was created
with such a method.`,name:"name_or_path"},{anchor:"transformers.PretrainedConfig.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should return all hidden-states.`,name:"output_hidden_states"},{anchor:"transformers.PretrainedConfig.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should returns all attentions.`,name:"output_attentions"},{anchor:"transformers.PretrainedConfig.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PretrainedConfig.is_encoder_decoder",description:`<strong>is_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as an encoder/decoder or not.`,name:"is_encoder_decoder"},{anchor:"transformers.PretrainedConfig.is_decoder",description:`<strong>is_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as decoder or not (in which case it&#x2019;s used as an encoder).`,name:"is_decoder"},{anchor:"transformers.PretrainedConfig.cross_attention_hidden_size**",description:`<strong>cross_attention_hidden_size**</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
The hidden size of the cross-attention layer in case the model is used as a decoder in an encoder-decoder
setting and the cross-attention hidden dimension differs from <code>self.config.hidden_size</code>.`,name:"cross_attention_hidden_size**"},{anchor:"transformers.PretrainedConfig.add_cross_attention",description:`<strong>add_cross_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether cross-attention layers should be added to the model. Note, this option is only relevant for models
that can be used as decoder models within the <a href="/docs/transformers/v4.16.2/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel">EncoderDecoderModel</a> class, which consists of all models
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput"
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
`}]}}),G=new gs({props:{$$slots:{default:[$s]},$$scope:{ctx:be}}}),we=new D({props:{name:"push_to_hub",anchor:"transformers.file_utils.PushToHubMixin.push_to_hub",parameters:[{name:"repo_path_or_name",val:": typing.Optional[str] = None"},{name:"repo_url",val:": typing.Optional[str] = None"},{name:"use_temp_dir",val:": bool = False"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"},{name:"**model_card_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/file_utils.py#L2752",parametersDescription:[{anchor:"transformers.file_utils.PushToHubMixin.push_to_hub.repo_path_or_name",description:`<strong>repo_path_or_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
`}}),ke=new ps({props:{code:`from transformers import AutoConfig

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
config.push_to_hub("my-finetuned-bert", repo_url="https://huggingface.co/sgugger/my-finetuned-bert"),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoConfig

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
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>, repo_url=<span class="hljs-string">&quot;https://huggingface.co/sgugger/my-finetuned-bert&quot;</span>)`}}),Pe=new D({props:{name:"dict_torch_dtype_to_str",anchor:"transformers.PretrainedConfig.dict_torch_dtype_to_str",parameters:[{name:"d",val:": typing.Dict[str, typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/configuration_utils.py#L844"}}),Ce=new D({props:{name:"from_dict",anchor:"transformers.PretrainedConfig.from_dict",parameters:[{name:"config_dict",val:": typing.Dict[str, typing.Any]"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/configuration_utils.py#L648",parametersDescription:[{anchor:"transformers.PretrainedConfig.from_dict.config_dict",description:`<strong>config_dict</strong> (<code>Dict[str, Any]</code>) &#x2014;
Dictionary that will be used to instantiate the configuration object. Such a dictionary can be
retrieved from a pretrained checkpoint by leveraging the <a href="/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig.get_config_dict">get_config_dict()</a> method.`,name:"config_dict"},{anchor:"transformers.PretrainedConfig.from_dict.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>) &#x2014;
Additional parameters from which to initialize the configuration object.`,name:"kwargs"}],returnDescription:`
<p>The configuration object instantiated from those parameters.</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),Te=new D({props:{name:"from_json_file",anchor:"transformers.PretrainedConfig.from_json_file",parameters:[{name:"json_file",val:": typing.Union[str, os.PathLike]"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/configuration_utils.py#L686",parametersDescription:[{anchor:"transformers.PretrainedConfig.from_json_file.json_file",description:`<strong>json_file</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Path to the JSON file containing the parameters.`,name:"json_file"}],returnDescription:`
<p>The configuration object instantiated from that JSON file.</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),De=new D({props:{name:"from_pretrained",anchor:"transformers.PretrainedConfig.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/configuration_utils.py#L436",parametersDescription:[{anchor:"transformers.PretrainedConfig.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained model configuration hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a configuration file saved using the
<a href="/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
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
  href="/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),re=new gs({props:{$$slots:{default:[ks]},$$scope:{ctx:be}}}),ze=new ps({props:{code:`# We can't instantiate directly the base class *PretrainedConfig* so let's show the examples on a
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
assert unused_kwargs == {"foo": False},`,highlighted:`<span class="hljs-comment"># We can&#x27;t instantiate directly the base class *PretrainedConfig* so let&#x27;s show the examples on a</span>
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
<span class="hljs-keyword">assert</span> unused_kwargs == {<span class="hljs-string">&quot;foo&quot;</span>: <span class="hljs-literal">False</span>}`}}),Oe=new D({props:{name:"get_config_dict",anchor:"transformers.PretrainedConfig.get_config_dict",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/configuration_utils.py#L519",parametersDescription:[{anchor:"transformers.PretrainedConfig.get_config_dict.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
The identifier of the pre-trained checkpoint from which we want the dictionary of parameters.`,name:"pretrained_model_name_or_path"}],returnDescription:`
<p>The dictionary(ies) that will be used to instantiate the configuration object.</p>
`,returnType:`
<p><code>Tuple[Dict, Dict]</code></p>
`}}),Ae=new D({props:{name:"save_pretrained",anchor:"transformers.PretrainedConfig.save_pretrained",parameters:[{name:"save_directory",val:": typing.Union[str, os.PathLike]"},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/configuration_utils.py#L396",parametersDescription:[{anchor:"transformers.PretrainedConfig.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the configuration JSON file will be saved (will be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.PretrainedConfig.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.file_utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}]}}),qe=new D({props:{name:"to_dict",anchor:"transformers.PretrainedConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/configuration_utils.py#L746",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance.</p>
`,returnType:`
<p><code>Dict[str, Any]</code></p>
`}}),Se=new D({props:{name:"to_diff_dict",anchor:"transformers.PretrainedConfig.to_diff_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/configuration_utils.py#L714",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, Any]</code></p>
`}}),Fe=new D({props:{name:"to_json_file",anchor:"transformers.PretrainedConfig.to_json_file",parameters:[{name:"json_file_path",val:": typing.Union[str, os.PathLike]"},{name:"use_diff",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/configuration_utils.py#L782",parametersDescription:[{anchor:"transformers.PretrainedConfig.to_json_file.json_file_path",description:`<strong>json_file_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Path to the JSON file in which this configuration instance&#x2019;s parameters will be saved.`,name:"json_file_path"},{anchor:"transformers.PretrainedConfig.to_json_file.use_diff",description:`<strong>use_diff</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, only the difference between the config instance and the default <code>PretrainedConfig()</code>
is serialized to JSON file.`,name:"use_diff"}]}}),Ie=new D({props:{name:"to_json_string",anchor:"transformers.PretrainedConfig.to_json_string",parameters:[{name:"use_diff",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/configuration_utils.py#L764",parametersDescription:[{anchor:"transformers.PretrainedConfig.to_json_string.use_diff",description:`<strong>use_diff</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, only the difference between the config instance and the default <code>PretrainedConfig()</code>
is serialized to JSON string.`,name:"use_diff"}],returnDescription:`
<p>String containing all the attributes that make up this configuration instance in JSON format.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Le=new D({props:{name:"update",anchor:"transformers.PretrainedConfig.update",parameters:[{name:"config_dict",val:": typing.Dict[str, typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/configuration_utils.py#L796",parametersDescription:[{anchor:"transformers.PretrainedConfig.update.config_dict",description:"<strong>config_dict</strong> (<code>Dict[str, Any]</code>) &#x2014; Dictionary of attributes that should be updated for this class.",name:"config_dict"}]}}),Me=new D({props:{name:"update_from_string",anchor:"transformers.PretrainedConfig.update_from_string",parameters:[{name:"update_str",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/configuration_utils.py#L806",parametersDescription:[{anchor:"transformers.PretrainedConfig.update_from_string.update_str",description:"<strong>update_str</strong> (<code>str</code>) &#x2014; String with attributes that should be updated for this class.",name:"update_str"}]}}),{c(){m=r("meta"),C=d(),u=r("h1"),w=r("a"),j=r("span"),g($.$$.fragment),P=d(),q=r("span"),$o=o("Configuration"),Yt=d(),J=r("p"),ko=o("The base class "),Be=r("a"),Po=o("PretrainedConfig"),Co=o(` implements the common methods for loading/saving a configuration
either from a local file or directory, or from a pretrained model configuration provided by the library (downloaded
from HuggingFace\u2019s AWS S3 repository).`),Zt=d(),E=r("p"),Eo=o(`Each derived config class implements model specific attributes. Common attributes present in all config classes are:
`),ot=r("code"),To=o("hidden_size"),xo=o(", "),nt=r("code"),Do=o("num_attention_heads"),jo=o(", and "),rt=r("code"),zo=o("num_hidden_layers"),Oo=o(`. Text models further implement:
`),at=r("code"),Ao=o("vocab_size"),qo=o("."),eo=d(),V=r("h2"),R=r("a"),st=r("span"),g(ve.$$.fragment),So=d(),it=r("span"),Fo=o("PretrainedConfig"),to=d(),l=r("div"),g(ye.$$.fragment),Io=d(),dt=r("p"),Lo=o(`Base class for all configuration classes. Handles a few parameters common to all models\u2019 configurations as well as
methods for loading/downloading/saving configurations.`),No=d(),g(G.$$.fragment),Mo=d(),ct=r("p"),Wo=o("Class attributes (overridden by derived classes):"),Ho=d(),S=r("ul"),M=r("li"),lt=r("strong"),Vo=o("model_type"),Bo=o(" ("),ft=r("code"),Uo=o("str"),Jo=o(`) \u2014 An identifier for the model type, serialized into the JSON file, and used to recreate
the correct object in `),Ue=r("a"),Ro=o("AutoConfig"),Go=o("."),Xo=d(),T=r("li"),ht=r("strong"),Ko=o("is_composition"),Qo=o(" ("),mt=r("code"),Yo=o("bool"),Zo=o(`) \u2014 Whether the config class is composed of multiple sub-configs. In this case the
config has to be initialized from two or more configs of type `),Je=r("a"),en=o("PretrainedConfig"),tn=o(` like:
`),Re=r("a"),on=o("EncoderDecoderConfig"),nn=o(" or "),Ge=r("a"),rn=o("~RagConfig"),an=o("."),sn=d(),X=r("li"),ut=r("strong"),dn=o("keys_to_ignore_at_inference"),cn=o(" ("),gt=r("code"),ln=o("List[str]"),fn=o(`) \u2014 A list of keys to ignore by default when looking at dictionary
outputs of the model during inference.`),hn=d(),K=r("li"),pt=r("strong"),mn=o("attribute_map"),un=o(" ("),_t=r("code"),gn=o("Dict[str, str]"),pn=o(`) \u2014 A dict that maps model specific attribute names to the standardized
naming of attributes.`),_n=d(),bt=r("p"),bn=o("Common attributes (present in all subclasses):"),vn=d(),F=r("ul"),Q=r("li"),vt=r("strong"),yn=o("vocab_size"),wn=o(" ("),yt=r("code"),$n=o("int"),kn=o(`) \u2014 The number of tokens in the vocabulary, which is also the first dimension of the
embeddings matrix (this attribute may be missing for models that don\u2019t have a text modality like ViT).`),Pn=d(),Y=r("li"),wt=r("strong"),Cn=o("hidden_size"),En=o(" ("),$t=r("code"),Tn=o("int"),xn=o(") \u2014 The hidden size of the model."),Dn=d(),Z=r("li"),kt=r("strong"),jn=o("num_attention_heads"),zn=o(" ("),Pt=r("code"),On=o("int"),An=o(`) \u2014 The number of attention heads used in the multi-head attention layers of the
model.`),qn=d(),ee=r("li"),Ct=r("strong"),Sn=o("num_hidden_layers"),Fn=o(" ("),Et=r("code"),In=o("int"),Ln=o(") \u2014 The number of blocks in the model."),Nn=d(),z=r("div"),g(we.$$.fragment),Mn=d(),$e=r("p"),Wn=o(`Upload the configuration file to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),Tt=r("code"),Hn=o("repo_path_or_name"),Vn=o("."),Bn=d(),xt=r("p"),Un=o("Examples:"),Jn=d(),g(ke.$$.fragment),Rn=d(),te=r("div"),g(Pe.$$.fragment),Gn=d(),I=r("p"),Xn=o("Checks whether the passed dictionary has a "),Dt=r("em"),Kn=o("torch_dtype"),Qn=o(` key and if it\u2019s not None, converts torch.dtype to a
string of just the type. For example, `),jt=r("code"),Yn=o("torch.float32"),Zn=o(" get converted into "),zt=r("em"),er=o("\u201Cfloat32\u201D"),tr=o(` string, which can then be
stored in the json format.`),or=d(),oe=r("div"),g(Ce.$$.fragment),nr=d(),Ee=r("p"),rr=o("Instantiates a "),Xe=r("a"),ar=o("PretrainedConfig"),sr=o(" from a Python dictionary of parameters."),ir=d(),ne=r("div"),g(Te.$$.fragment),dr=d(),xe=r("p"),cr=o("Instantiates a "),Ke=r("a"),lr=o("PretrainedConfig"),fr=o(" from the path to a JSON file of parameters."),hr=d(),x=r("div"),g(De.$$.fragment),mr=d(),je=r("p"),ur=o("Instantiate a "),Qe=r("a"),gr=o("PretrainedConfig"),pr=o(" (or a derived class) from a pretrained model configuration."),_r=d(),g(re.$$.fragment),br=d(),Ot=r("p"),vr=o("Examples:"),yr=d(),g(ze.$$.fragment),wr=d(),ae=r("div"),g(Oe.$$.fragment),$r=d(),L=r("p"),kr=o("From a "),At=r("code"),Pr=o("pretrained_model_name_or_path"),Cr=o(`, resolve to a dictionary of parameters, to be used for instantiating a
`),Ye=r("a"),Er=o("PretrainedConfig"),Tr=o(" using "),qt=r("code"),xr=o("from_dict"),Dr=o("."),jr=d(),se=r("div"),g(Ae.$$.fragment),zr=d(),B=r("p"),Or=o("Save a configuration object to the directory "),St=r("code"),Ar=o("save_directory"),qr=o(`, so that it can be re-loaded using the
`),Ze=r("a"),Sr=o("from_pretrained()"),Fr=o(" class method."),Ir=d(),ie=r("div"),g(qe.$$.fragment),Lr=d(),Ft=r("p"),Nr=o("Serializes this instance to a Python dictionary."),Mr=d(),de=r("div"),g(Se.$$.fragment),Wr=d(),It=r("p"),Hr=o(`Removes all attributes from config which correspond to the default config attributes for better readability and
serializes to a Python dictionary.`),Vr=d(),ce=r("div"),g(Fe.$$.fragment),Br=d(),Lt=r("p"),Ur=o("Save this instance to a JSON file."),Jr=d(),le=r("div"),g(Ie.$$.fragment),Rr=d(),Nt=r("p"),Gr=o("Serializes this instance to a JSON string."),Xr=d(),fe=r("div"),g(Le.$$.fragment),Kr=d(),Ne=r("p"),Qr=o("Updates attributes of this class with attributes from "),Mt=r("code"),Yr=o("config_dict"),Zr=o("."),ea=d(),O=r("div"),g(Me.$$.fragment),ta=d(),We=r("p"),oa=o("Updates attributes of this class with attributes from "),Wt=r("code"),na=o("update_str"),ra=o("."),aa=d(),U=r("p"),sa=o("The expected format is ints, floats and strings as is, and for booleans use "),Ht=r("code"),ia=o("true"),da=o(" or "),Vt=r("code"),ca=o("false"),la=o(`. For example:
\u201Cn_embd=10,resid_pdrop=0.2,scale_attn_weights=false,summary_type=cls_index\u201D`),fa=d(),Bt=r("p"),ha=o("The keys to change have to already exist in the config object."),this.h()},l(i){const k=ws('[data-svelte="svelte-1phssyn"]',document.head);m=a(k,"META",{name:!0,content:!0}),k.forEach(t),C=c(i),u=a(i,"H1",{class:!0});var He=s(u);w=a(He,"A",{id:!0,class:!0,href:!0});var Ut=s(w);j=a(Ut,"SPAN",{});var ma=s(j);p($.$$.fragment,ma),ma.forEach(t),Ut.forEach(t),P=c(He),q=a(He,"SPAN",{});var ua=s(q);$o=n(ua,"Configuration"),ua.forEach(t),He.forEach(t),Yt=c(i),J=a(i,"P",{});var no=s(J);ko=n(no,"The base class "),Be=a(no,"A",{href:!0});var ga=s(Be);Po=n(ga,"PretrainedConfig"),ga.forEach(t),Co=n(no,` implements the common methods for loading/saving a configuration
either from a local file or directory, or from a pretrained model configuration provided by the library (downloaded
from HuggingFace\u2019s AWS S3 repository).`),no.forEach(t),Zt=c(i),E=a(i,"P",{});var W=s(E);Eo=n(W,`Each derived config class implements model specific attributes. Common attributes present in all config classes are:
`),ot=a(W,"CODE",{});var pa=s(ot);To=n(pa,"hidden_size"),pa.forEach(t),xo=n(W,", "),nt=a(W,"CODE",{});var _a=s(nt);Do=n(_a,"num_attention_heads"),_a.forEach(t),jo=n(W,", and "),rt=a(W,"CODE",{});var ba=s(rt);zo=n(ba,"num_hidden_layers"),ba.forEach(t),Oo=n(W,`. Text models further implement:
`),at=a(W,"CODE",{});var va=s(at);Ao=n(va,"vocab_size"),va.forEach(t),qo=n(W,"."),W.forEach(t),eo=c(i),V=a(i,"H2",{class:!0});var ro=s(V);R=a(ro,"A",{id:!0,class:!0,href:!0});var ya=s(R);st=a(ya,"SPAN",{});var wa=s(st);p(ve.$$.fragment,wa),wa.forEach(t),ya.forEach(t),So=c(ro),it=a(ro,"SPAN",{});var $a=s(it);Fo=n($a,"PretrainedConfig"),$a.forEach(t),ro.forEach(t),to=c(i),l=a(i,"DIV",{class:!0});var f=s(l);p(ye.$$.fragment,f),Io=c(f),dt=a(f,"P",{});var ka=s(dt);Lo=n(ka,`Base class for all configuration classes. Handles a few parameters common to all models\u2019 configurations as well as
methods for loading/downloading/saving configurations.`),ka.forEach(t),No=c(f),p(G.$$.fragment,f),Mo=c(f),ct=a(f,"P",{});var Pa=s(ct);Wo=n(Pa,"Class attributes (overridden by derived classes):"),Pa.forEach(t),Ho=c(f),S=a(f,"UL",{});var he=s(S);M=a(he,"LI",{});var Ve=s(M);lt=a(Ve,"STRONG",{});var Ca=s(lt);Vo=n(Ca,"model_type"),Ca.forEach(t),Bo=n(Ve," ("),ft=a(Ve,"CODE",{});var Ea=s(ft);Uo=n(Ea,"str"),Ea.forEach(t),Jo=n(Ve,`) \u2014 An identifier for the model type, serialized into the JSON file, and used to recreate
the correct object in `),Ue=a(Ve,"A",{href:!0});var Ta=s(Ue);Ro=n(Ta,"AutoConfig"),Ta.forEach(t),Go=n(Ve,"."),Ve.forEach(t),Xo=c(he),T=a(he,"LI",{});var N=s(T);ht=a(N,"STRONG",{});var xa=s(ht);Ko=n(xa,"is_composition"),xa.forEach(t),Qo=n(N," ("),mt=a(N,"CODE",{});var Da=s(mt);Yo=n(Da,"bool"),Da.forEach(t),Zo=n(N,`) \u2014 Whether the config class is composed of multiple sub-configs. In this case the
config has to be initialized from two or more configs of type `),Je=a(N,"A",{href:!0});var ja=s(Je);en=n(ja,"PretrainedConfig"),ja.forEach(t),tn=n(N,` like:
`),Re=a(N,"A",{href:!0});var za=s(Re);on=n(za,"EncoderDecoderConfig"),za.forEach(t),nn=n(N," or "),Ge=a(N,"A",{href:!0});var Oa=s(Ge);rn=n(Oa,"~RagConfig"),Oa.forEach(t),an=n(N,"."),N.forEach(t),sn=c(he),X=a(he,"LI",{});var Jt=s(X);ut=a(Jt,"STRONG",{});var Aa=s(ut);dn=n(Aa,"keys_to_ignore_at_inference"),Aa.forEach(t),cn=n(Jt," ("),gt=a(Jt,"CODE",{});var qa=s(gt);ln=n(qa,"List[str]"),qa.forEach(t),fn=n(Jt,`) \u2014 A list of keys to ignore by default when looking at dictionary
outputs of the model during inference.`),Jt.forEach(t),hn=c(he),K=a(he,"LI",{});var Rt=s(K);pt=a(Rt,"STRONG",{});var Sa=s(pt);mn=n(Sa,"attribute_map"),Sa.forEach(t),un=n(Rt," ("),_t=a(Rt,"CODE",{});var Fa=s(_t);gn=n(Fa,"Dict[str, str]"),Fa.forEach(t),pn=n(Rt,`) \u2014 A dict that maps model specific attribute names to the standardized
naming of attributes.`),Rt.forEach(t),he.forEach(t),_n=c(f),bt=a(f,"P",{});var Ia=s(bt);bn=n(Ia,"Common attributes (present in all subclasses):"),Ia.forEach(t),vn=c(f),F=a(f,"UL",{});var me=s(F);Q=a(me,"LI",{});var Gt=s(Q);vt=a(Gt,"STRONG",{});var La=s(vt);yn=n(La,"vocab_size"),La.forEach(t),wn=n(Gt," ("),yt=a(Gt,"CODE",{});var Na=s(yt);$n=n(Na,"int"),Na.forEach(t),kn=n(Gt,`) \u2014 The number of tokens in the vocabulary, which is also the first dimension of the
embeddings matrix (this attribute may be missing for models that don\u2019t have a text modality like ViT).`),Gt.forEach(t),Pn=c(me),Y=a(me,"LI",{});var Xt=s(Y);wt=a(Xt,"STRONG",{});var Ma=s(wt);Cn=n(Ma,"hidden_size"),Ma.forEach(t),En=n(Xt," ("),$t=a(Xt,"CODE",{});var Wa=s($t);Tn=n(Wa,"int"),Wa.forEach(t),xn=n(Xt,") \u2014 The hidden size of the model."),Xt.forEach(t),Dn=c(me),Z=a(me,"LI",{});var Kt=s(Z);kt=a(Kt,"STRONG",{});var Ha=s(kt);jn=n(Ha,"num_attention_heads"),Ha.forEach(t),zn=n(Kt," ("),Pt=a(Kt,"CODE",{});var Va=s(Pt);On=n(Va,"int"),Va.forEach(t),An=n(Kt,`) \u2014 The number of attention heads used in the multi-head attention layers of the
model.`),Kt.forEach(t),qn=c(me),ee=a(me,"LI",{});var Qt=s(ee);Ct=a(Qt,"STRONG",{});var Ba=s(Ct);Sn=n(Ba,"num_hidden_layers"),Ba.forEach(t),Fn=n(Qt," ("),Et=a(Qt,"CODE",{});var Ua=s(Et);In=n(Ua,"int"),Ua.forEach(t),Ln=n(Qt,") \u2014 The number of blocks in the model."),Qt.forEach(t),me.forEach(t),Nn=c(f),z=a(f,"DIV",{class:!0});var ue=s(z);p(we.$$.fragment,ue),Mn=c(ue),$e=a(ue,"P",{});var ao=s($e);Wn=n(ao,`Upload the configuration file to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),Tt=a(ao,"CODE",{});var Ja=s(Tt);Hn=n(Ja,"repo_path_or_name"),Ja.forEach(t),Vn=n(ao,"."),ao.forEach(t),Bn=c(ue),xt=a(ue,"P",{});var Ra=s(xt);Un=n(Ra,"Examples:"),Ra.forEach(t),Jn=c(ue),p(ke.$$.fragment,ue),ue.forEach(t),Rn=c(f),te=a(f,"DIV",{class:!0});var so=s(te);p(Pe.$$.fragment,so),Gn=c(so),I=a(so,"P",{});var ge=s(I);Xn=n(ge,"Checks whether the passed dictionary has a "),Dt=a(ge,"EM",{});var Ga=s(Dt);Kn=n(Ga,"torch_dtype"),Ga.forEach(t),Qn=n(ge,` key and if it\u2019s not None, converts torch.dtype to a
string of just the type. For example, `),jt=a(ge,"CODE",{});var Xa=s(jt);Yn=n(Xa,"torch.float32"),Xa.forEach(t),Zn=n(ge," get converted into "),zt=a(ge,"EM",{});var Ka=s(zt);er=n(Ka,"\u201Cfloat32\u201D"),Ka.forEach(t),tr=n(ge,` string, which can then be
stored in the json format.`),ge.forEach(t),so.forEach(t),or=c(f),oe=a(f,"DIV",{class:!0});var io=s(oe);p(Ce.$$.fragment,io),nr=c(io),Ee=a(io,"P",{});var co=s(Ee);rr=n(co,"Instantiates a "),Xe=a(co,"A",{href:!0});var Qa=s(Xe);ar=n(Qa,"PretrainedConfig"),Qa.forEach(t),sr=n(co," from a Python dictionary of parameters."),co.forEach(t),io.forEach(t),ir=c(f),ne=a(f,"DIV",{class:!0});var lo=s(ne);p(Te.$$.fragment,lo),dr=c(lo),xe=a(lo,"P",{});var fo=s(xe);cr=n(fo,"Instantiates a "),Ke=a(fo,"A",{href:!0});var Ya=s(Ke);lr=n(Ya,"PretrainedConfig"),Ya.forEach(t),fr=n(fo," from the path to a JSON file of parameters."),fo.forEach(t),lo.forEach(t),hr=c(f),x=a(f,"DIV",{class:!0});var H=s(x);p(De.$$.fragment,H),mr=c(H),je=a(H,"P",{});var ho=s(je);ur=n(ho,"Instantiate a "),Qe=a(ho,"A",{href:!0});var Za=s(Qe);gr=n(Za,"PretrainedConfig"),Za.forEach(t),pr=n(ho," (or a derived class) from a pretrained model configuration."),ho.forEach(t),_r=c(H),p(re.$$.fragment,H),br=c(H),Ot=a(H,"P",{});var es=s(Ot);vr=n(es,"Examples:"),es.forEach(t),yr=c(H),p(ze.$$.fragment,H),H.forEach(t),wr=c(f),ae=a(f,"DIV",{class:!0});var mo=s(ae);p(Oe.$$.fragment,mo),$r=c(mo),L=a(mo,"P",{});var pe=s(L);kr=n(pe,"From a "),At=a(pe,"CODE",{});var ts=s(At);Pr=n(ts,"pretrained_model_name_or_path"),ts.forEach(t),Cr=n(pe,`, resolve to a dictionary of parameters, to be used for instantiating a
`),Ye=a(pe,"A",{href:!0});var os=s(Ye);Er=n(os,"PretrainedConfig"),os.forEach(t),Tr=n(pe," using "),qt=a(pe,"CODE",{});var ns=s(qt);xr=n(ns,"from_dict"),ns.forEach(t),Dr=n(pe,"."),pe.forEach(t),mo.forEach(t),jr=c(f),se=a(f,"DIV",{class:!0});var uo=s(se);p(Ae.$$.fragment,uo),zr=c(uo),B=a(uo,"P",{});var et=s(B);Or=n(et,"Save a configuration object to the directory "),St=a(et,"CODE",{});var rs=s(St);Ar=n(rs,"save_directory"),rs.forEach(t),qr=n(et,`, so that it can be re-loaded using the
`),Ze=a(et,"A",{href:!0});var as=s(Ze);Sr=n(as,"from_pretrained()"),as.forEach(t),Fr=n(et," class method."),et.forEach(t),uo.forEach(t),Ir=c(f),ie=a(f,"DIV",{class:!0});var go=s(ie);p(qe.$$.fragment,go),Lr=c(go),Ft=a(go,"P",{});var ss=s(Ft);Nr=n(ss,"Serializes this instance to a Python dictionary."),ss.forEach(t),go.forEach(t),Mr=c(f),de=a(f,"DIV",{class:!0});var po=s(de);p(Se.$$.fragment,po),Wr=c(po),It=a(po,"P",{});var is=s(It);Hr=n(is,`Removes all attributes from config which correspond to the default config attributes for better readability and
serializes to a Python dictionary.`),is.forEach(t),po.forEach(t),Vr=c(f),ce=a(f,"DIV",{class:!0});var _o=s(ce);p(Fe.$$.fragment,_o),Br=c(_o),Lt=a(_o,"P",{});var ds=s(Lt);Ur=n(ds,"Save this instance to a JSON file."),ds.forEach(t),_o.forEach(t),Jr=c(f),le=a(f,"DIV",{class:!0});var bo=s(le);p(Ie.$$.fragment,bo),Rr=c(bo),Nt=a(bo,"P",{});var cs=s(Nt);Gr=n(cs,"Serializes this instance to a JSON string."),cs.forEach(t),bo.forEach(t),Xr=c(f),fe=a(f,"DIV",{class:!0});var vo=s(fe);p(Le.$$.fragment,vo),Kr=c(vo),Ne=a(vo,"P",{});var yo=s(Ne);Qr=n(yo,"Updates attributes of this class with attributes from "),Mt=a(yo,"CODE",{});var ls=s(Mt);Yr=n(ls,"config_dict"),ls.forEach(t),Zr=n(yo,"."),yo.forEach(t),vo.forEach(t),ea=c(f),O=a(f,"DIV",{class:!0});var _e=s(O);p(Me.$$.fragment,_e),ta=c(_e),We=a(_e,"P",{});var wo=s(We);oa=n(wo,"Updates attributes of this class with attributes from "),Wt=a(wo,"CODE",{});var fs=s(Wt);na=n(fs,"update_str"),fs.forEach(t),ra=n(wo,"."),wo.forEach(t),aa=c(_e),U=a(_e,"P",{});var tt=s(U);sa=n(tt,"The expected format is ints, floats and strings as is, and for booleans use "),Ht=a(tt,"CODE",{});var hs=s(Ht);ia=n(hs,"true"),hs.forEach(t),da=n(tt," or "),Vt=a(tt,"CODE",{});var ms=s(Vt);ca=n(ms,"false"),ms.forEach(t),la=n(tt,`. For example:
\u201Cn_embd=10,resid_pdrop=0.2,scale_attn_weights=false,summary_type=cls_index\u201D`),tt.forEach(t),fa=c(_e),Bt=a(_e,"P",{});var us=s(Bt);ha=n(us,"The keys to change have to already exist in the config object."),us.forEach(t),_e.forEach(t),f.forEach(t),this.h()},h(){h(m,"name","hf:doc:metadata"),h(m,"content",JSON.stringify(Cs)),h(w,"id","configuration"),h(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(w,"href","#configuration"),h(u,"class","relative group"),h(Be,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(R,"id","transformers.PretrainedConfig"),h(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(R,"href","#transformers.PretrainedConfig"),h(V,"class","relative group"),h(Ue,"href","/docs/transformers/v4.16.2/en/model_doc/auto#transformers.AutoConfig"),h(Je,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(Re,"href","/docs/transformers/v4.16.2/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),h(Ge,"href","/docs/transformers/v4.16.2/en/model_doc/rag#transformers.RagConfig"),h(z,"class","docstring"),h(te,"class","docstring"),h(Xe,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(oe,"class","docstring"),h(Ke,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(ne,"class","docstring"),h(Qe,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(x,"class","docstring"),h(Ye,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(ae,"class","docstring"),h(Ze,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig.from_pretrained"),h(se,"class","docstring"),h(ie,"class","docstring"),h(de,"class","docstring"),h(ce,"class","docstring"),h(le,"class","docstring"),h(fe,"class","docstring"),h(O,"class","docstring"),h(l,"class","docstring")},m(i,k){e(document.head,m),A(i,C,k),A(i,u,k),e(u,w),e(w,j),_($,j,null),e(u,P),e(u,q),e(q,$o),A(i,Yt,k),A(i,J,k),e(J,ko),e(J,Be),e(Be,Po),e(J,Co),A(i,Zt,k),A(i,E,k),e(E,Eo),e(E,ot),e(ot,To),e(E,xo),e(E,nt),e(nt,Do),e(E,jo),e(E,rt),e(rt,zo),e(E,Oo),e(E,at),e(at,Ao),e(E,qo),A(i,eo,k),A(i,V,k),e(V,R),e(R,st),_(ve,st,null),e(V,So),e(V,it),e(it,Fo),A(i,to,k),A(i,l,k),_(ye,l,null),e(l,Io),e(l,dt),e(dt,Lo),e(l,No),_(G,l,null),e(l,Mo),e(l,ct),e(ct,Wo),e(l,Ho),e(l,S),e(S,M),e(M,lt),e(lt,Vo),e(M,Bo),e(M,ft),e(ft,Uo),e(M,Jo),e(M,Ue),e(Ue,Ro),e(M,Go),e(S,Xo),e(S,T),e(T,ht),e(ht,Ko),e(T,Qo),e(T,mt),e(mt,Yo),e(T,Zo),e(T,Je),e(Je,en),e(T,tn),e(T,Re),e(Re,on),e(T,nn),e(T,Ge),e(Ge,rn),e(T,an),e(S,sn),e(S,X),e(X,ut),e(ut,dn),e(X,cn),e(X,gt),e(gt,ln),e(X,fn),e(S,hn),e(S,K),e(K,pt),e(pt,mn),e(K,un),e(K,_t),e(_t,gn),e(K,pn),e(l,_n),e(l,bt),e(bt,bn),e(l,vn),e(l,F),e(F,Q),e(Q,vt),e(vt,yn),e(Q,wn),e(Q,yt),e(yt,$n),e(Q,kn),e(F,Pn),e(F,Y),e(Y,wt),e(wt,Cn),e(Y,En),e(Y,$t),e($t,Tn),e(Y,xn),e(F,Dn),e(F,Z),e(Z,kt),e(kt,jn),e(Z,zn),e(Z,Pt),e(Pt,On),e(Z,An),e(F,qn),e(F,ee),e(ee,Ct),e(Ct,Sn),e(ee,Fn),e(ee,Et),e(Et,In),e(ee,Ln),e(l,Nn),e(l,z),_(we,z,null),e(z,Mn),e(z,$e),e($e,Wn),e($e,Tt),e(Tt,Hn),e($e,Vn),e(z,Bn),e(z,xt),e(xt,Un),e(z,Jn),_(ke,z,null),e(l,Rn),e(l,te),_(Pe,te,null),e(te,Gn),e(te,I),e(I,Xn),e(I,Dt),e(Dt,Kn),e(I,Qn),e(I,jt),e(jt,Yn),e(I,Zn),e(I,zt),e(zt,er),e(I,tr),e(l,or),e(l,oe),_(Ce,oe,null),e(oe,nr),e(oe,Ee),e(Ee,rr),e(Ee,Xe),e(Xe,ar),e(Ee,sr),e(l,ir),e(l,ne),_(Te,ne,null),e(ne,dr),e(ne,xe),e(xe,cr),e(xe,Ke),e(Ke,lr),e(xe,fr),e(l,hr),e(l,x),_(De,x,null),e(x,mr),e(x,je),e(je,ur),e(je,Qe),e(Qe,gr),e(je,pr),e(x,_r),_(re,x,null),e(x,br),e(x,Ot),e(Ot,vr),e(x,yr),_(ze,x,null),e(l,wr),e(l,ae),_(Oe,ae,null),e(ae,$r),e(ae,L),e(L,kr),e(L,At),e(At,Pr),e(L,Cr),e(L,Ye),e(Ye,Er),e(L,Tr),e(L,qt),e(qt,xr),e(L,Dr),e(l,jr),e(l,se),_(Ae,se,null),e(se,zr),e(se,B),e(B,Or),e(B,St),e(St,Ar),e(B,qr),e(B,Ze),e(Ze,Sr),e(B,Fr),e(l,Ir),e(l,ie),_(qe,ie,null),e(ie,Lr),e(ie,Ft),e(Ft,Nr),e(l,Mr),e(l,de),_(Se,de,null),e(de,Wr),e(de,It),e(It,Hr),e(l,Vr),e(l,ce),_(Fe,ce,null),e(ce,Br),e(ce,Lt),e(Lt,Ur),e(l,Jr),e(l,le),_(Ie,le,null),e(le,Rr),e(le,Nt),e(Nt,Gr),e(l,Xr),e(l,fe),_(Le,fe,null),e(fe,Kr),e(fe,Ne),e(Ne,Qr),e(Ne,Mt),e(Mt,Yr),e(Ne,Zr),e(l,ea),e(l,O),_(Me,O,null),e(O,ta),e(O,We),e(We,oa),e(We,Wt),e(Wt,na),e(We,ra),e(O,aa),e(O,U),e(U,sa),e(U,Ht),e(Ht,ia),e(U,da),e(U,Vt),e(Vt,ca),e(U,la),e(O,fa),e(O,Bt),e(Bt,ha),oo=!0},p(i,[k]){const He={};k&2&&(He.$$scope={dirty:k,ctx:i}),G.$set(He);const Ut={};k&2&&(Ut.$$scope={dirty:k,ctx:i}),re.$set(Ut)},i(i){oo||(b($.$$.fragment,i),b(ve.$$.fragment,i),b(ye.$$.fragment,i),b(G.$$.fragment,i),b(we.$$.fragment,i),b(ke.$$.fragment,i),b(Pe.$$.fragment,i),b(Ce.$$.fragment,i),b(Te.$$.fragment,i),b(De.$$.fragment,i),b(re.$$.fragment,i),b(ze.$$.fragment,i),b(Oe.$$.fragment,i),b(Ae.$$.fragment,i),b(qe.$$.fragment,i),b(Se.$$.fragment,i),b(Fe.$$.fragment,i),b(Ie.$$.fragment,i),b(Le.$$.fragment,i),b(Me.$$.fragment,i),oo=!0)},o(i){v($.$$.fragment,i),v(ve.$$.fragment,i),v(ye.$$.fragment,i),v(G.$$.fragment,i),v(we.$$.fragment,i),v(ke.$$.fragment,i),v(Pe.$$.fragment,i),v(Ce.$$.fragment,i),v(Te.$$.fragment,i),v(De.$$.fragment,i),v(re.$$.fragment,i),v(ze.$$.fragment,i),v(Oe.$$.fragment,i),v(Ae.$$.fragment,i),v(qe.$$.fragment,i),v(Se.$$.fragment,i),v(Fe.$$.fragment,i),v(Ie.$$.fragment,i),v(Le.$$.fragment,i),v(Me.$$.fragment,i),oo=!1},d(i){t(m),i&&t(C),i&&t(u),y($),i&&t(Yt),i&&t(J),i&&t(Zt),i&&t(E),i&&t(eo),i&&t(V),y(ve),i&&t(to),i&&t(l),y(ye),y(G),y(we),y(ke),y(Pe),y(Ce),y(Te),y(De),y(re),y(ze),y(Oe),y(Ae),y(qe),y(Se),y(Fe),y(Ie),y(Le),y(Me)}}}const Cs={local:"configuration",sections:[{local:"transformers.PretrainedConfig",title:"PretrainedConfig"}],title:"Configuration"};function Es(be,m,C){let{fw:u}=m;return be.$$set=w=>{"fw"in w&&C(0,u=w.fw)},[u]}class As extends bs{constructor(m){super();vs(this,m,Es,Ps,ys,{fw:0})}}export{As as default,Cs as metadata};
