import{S as Os,i as As,s as Ss,e as r,k as d,w as p,t as o,L as Fs,c as a,d as t,m as c,a as s,x as g,h as n,b as h,J as e,g as F,y as _,q as b,o as v,B as y}from"../../../chunks/vendor-b1433968.js";import{T as Ds}from"../../../chunks/Tip-c3840994.js";import{D as z}from"../../../chunks/Docstring-ff504c58.js";import{C as js}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as zs}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function Is(ge){let m,x,u,w,O;return{c(){m=r("p"),x=o(`A configuration file can be loaded and saved to disk. Loading the configuration file and using this file to
initialize a model does `),u=r("strong"),w=o("not"),O=o(" load the model weights. It only affects the model\u2019s configuration.")},l($){m=a($,"P",{});var C=s(m);x=n(C,`A configuration file can be loaded and saved to disk. Loading the configuration file and using this file to
initialize a model does `),u=a(C,"STRONG",{});var I=s(u);w=n(I,"not"),I.forEach(t),O=n(C," load the model weights. It only affects the model\u2019s configuration."),C.forEach(t)},m($,C){F($,m,C),e(m,x),e(m,u),e(u,w),e(m,O)},d($){$&&t(m)}}}function Ls(ge){let m,x,u,w,O;return{c(){m=r("p"),x=o("Passing "),u=r("code"),w=o("use_auth_token=True"),O=o(" is required when you want to use a private model.")},l($){m=a($,"P",{});var C=s(m);x=n(C,"Passing "),u=a(C,"CODE",{});var I=s(u);w=n(I,"use_auth_token=True"),I.forEach(t),O=n(C," is required when you want to use a private model."),C.forEach(t)},m($,C){F($,m,C),e(m,x),e(m,u),e(u,w),e(m,O)},d($){$&&t(m)}}}function Ns(ge){let m,x,u,w,O,$,C,I,Do,ro,R,jo,Ve,zo,Oo,ao,T,Ao,tt,So,Fo,ot,Io,Lo,nt,No,qo,rt,Mo,Wo,so,V,U,at,_e,Ho,st,Vo,io,l,be,Bo,it,Jo,Ro,G,Uo,dt,Go,Xo,P,ct,M,lt,Ko,Qo,ft,Yo,Zo,Be,en,tn,on,ht,D,mt,nn,rn,ut,an,sn,Je,dn,cn,Re,ln,fn,Ue,hn,mn,un,pt,X,gt,pn,gn,_t,_n,bn,vn,ve,K,bt,yn,wn,vt,$n,Pn,kn,yt,Cn,En,wt,Q,$t,xn,Tn,Pt,Dn,jn,zn,kt,Y,Ct,On,An,Et,Sn,Fn,In,xt,Z,Tt,Ln,Nn,Dt,qn,Mn,Wn,jt,ee,zt,Hn,Vn,Ot,Bn,Jn,Rn,A,ye,Un,we,Gn,At,Xn,Kn,Qn,St,Yn,Zn,$e,er,te,Pe,tr,L,or,Ft,nr,rr,It,ar,sr,Lt,ir,dr,cr,oe,ke,lr,Ce,fr,Ge,hr,mr,ur,ne,Ee,pr,xe,gr,Xe,_r,br,vr,j,Te,yr,De,wr,Ke,$r,Pr,kr,re,Cr,Nt,Er,xr,je,Tr,ae,ze,Dr,N,jr,qt,zr,Or,Qe,Ar,Sr,Mt,Fr,Ir,Lr,se,Oe,Nr,B,qr,Wt,Mr,Wr,Ye,Hr,Vr,Br,ie,Ae,Jr,Ht,Rr,Ur,de,Se,Gr,Vt,Xr,Kr,ce,Fe,Qr,Bt,Yr,Zr,le,Ie,ea,Jt,ta,oa,fe,Le,na,Ne,ra,Rt,aa,sa,ia,S,qe,da,Me,ca,Ut,la,fa,ha,J,ma,Gt,ua,pa,Xt,ga,_a,ba,Kt,va,co;return $=new zs({}),_e=new zs({}),be=new z({props:{name:"class transformers.PretrainedConfig",anchor:"transformers.PretrainedConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/configuration_utils.py#L48",parametersDescription:[{anchor:"transformers.PretrainedConfig.name_or_path",description:`<strong>name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&quot;</code>) &#x2014;
Store the string that was passed to <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">PreTrainedModel.from_pretrained()</a> or
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">TFPreTrainedModel.from_pretrained()</a> as <code>pretrained_model_name_or_path</code> if the configuration was created
with such a method.`,name:"name_or_path"},{anchor:"transformers.PretrainedConfig.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should return all hidden-states.`,name:"output_hidden_states"},{anchor:"transformers.PretrainedConfig.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should returns all attentions.`,name:"output_attentions"},{anchor:"transformers.PretrainedConfig.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PretrainedConfig.is_encoder_decoder",description:`<strong>is_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as an encoder/decoder or not.`,name:"is_encoder_decoder"},{anchor:"transformers.PretrainedConfig.is_decoder",description:`<strong>is_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as decoder or not (in which case it&#x2019;s used as an encoder).`,name:"is_decoder"},{anchor:"transformers.PretrainedConfig.cross_attention_hidden_size**",description:`<strong>cross_attention_hidden_size**</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
The hidden size of the cross-attention layer in case the model is used as a decoder in an encoder-decoder
setting and the cross-attention hidden dimension differs from <code>self.config.hidden_size</code>.`,name:"cross_attention_hidden_size**"},{anchor:"transformers.PretrainedConfig.add_cross_attention",description:`<strong>add_cross_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether cross-attention layers should be added to the model. Note, this option is only relevant for models
that can be used as decoder models within the <a href="/docs/transformers/v4.14.1/en/model_doc/encoderdecoder#transformers.EncoderDecoderModel">EncoderDecoderModel</a> class, which consists of all models
in <code>AUTO_MODELS_FOR_CAUSAL_LM</code>.`,name:"add_cross_attention"},{anchor:"transformers.PretrainedConfig.tie_encoder_decoder",description:`<strong>tie_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether all encoder weights should be tied to their equivalent decoder weights. This requires the encoder
and decoder model to have the exact same parameter names.`,name:"tie_encoder_decoder"},{anchor:"transformers.PretrainedConfig.prune_heads",description:`<strong>prune_heads</strong> (<code>Dict[int, List[int]]</code>, <em>optional</em>, defaults to <code>{}</code>) &#x2014;
Pruned heads of the model. The keys are the selected layer indices and the associated values, the list of
heads to prune in said layer.</p>
<p>          For instance <code>{1: [0, 2], 2: [2, 3]}</code> will prune heads 0 and 2 on layer 1 and heads 2 and 3 on layer 2.`,name:"prune_heads"},{anchor:"transformers.PretrainedConfig.chunk_size_feed_forward",description:`<strong>chunk_size_feed_forward</strong> (<code>int</code>, <em>optional</em>, defaults to <code>0</code>) &#x2014;
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput"
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
<li><strong>architectures</strong> (<code>List[str]</code>, <em>optional</em>) \u2014 Model architectures that can be used with the model pretrained weights.</li>
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
<p>          This attribute is currently not being used during model loading time, but this may change in the future
versions. But we can already start preparing for the future by saving the dtype with save_pretrained.</p>
</li>
</ul>
`},{title:"TensorFlow specific parameters",parametersDescription:`
<ul>
<li><strong>use_bfloat16</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Whether or not the model should use BFloat16 scalars (only used by some TensorFlow models).</li>
</ul>
`}]}}),G=new Ds({props:{$$slots:{default:[Is]},$$scope:{ctx:ge}}}),ye=new z({props:{name:"push\\_to\\_hub",anchor:"transformers.file_utils.PushToHubMixin.push_to_hub",parameters:[{name:"repo_path_or_name",val:": typing.Optional[str] = None"},{name:"repo_url",val:": typing.Optional[str] = None"},{name:"use_temp_dir",val:": bool = False"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"},{name:"**model_card_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/file_utils.py#L2329",parametersDescription:[{anchor:"transformers.file_utils.PushToHubMixin.push_to_hub.repo_path_or_name",description:`<strong>repo_path_or_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Can either be a repository name for your config in the Hub or a path to a local folder (in which case
the repository will have the name of that local folder). If not specified, will default to the name
given by <code>repo_url</code> and a local directory with that name will be created.`,name:"repo_path_or_name"},{anchor:"transformers.file_utils.PushToHubMixin.push_to_hub.repo_url",description:`<strong>repo_url</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Specify this in case you want to push to an existing repository in the hub. If unspecified, a new
repository will be created in your namespace (unless you specify an <code>organization</code>) with
<code>repo_name</code>.`,name:"repo_url"},{anchor:"transformers.file_utils.PushToHubMixin.push_to_hub.use_temp_dir",description:`<strong>use_temp_dir</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to clone the distant repo in a temporary directory or in <code>repo_path_or_name</code> inside
the current working directory. This will slow things down if you are making changes in an existing repo
since you will need to clone the repo before every push.`,name:"use_temp_dir"},{anchor:"transformers.file_utils.PushToHubMixin.push_to_hub.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Message to commit while pushing. Will default to <code>&quot;add config&quot;</code>.`,name:"commit_message"},{anchor:"transformers.file_utils.PushToHubMixin.push_to_hub.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Organization in which you want to push your config (you must be a member of this organization).`,name:"organization"},{anchor:"transformers.file_utils.PushToHubMixin.push_to_hub.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not the repository created should be private (requires a paying subscription).`,name:"private"},{anchor:"transformers.file_utils.PushToHubMixin.push_to_hub.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token
generated when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>). Will default to
<code>True</code> if <code>repo_url</code> is not specified.`,name:"use_auth_token"}],returnDescription:`
<p>The url of the commit of your config in the given repository.</p>
`,returnType:`
<p><code>str</code></p>
`}}),$e=new js({props:{code:`from transformers import AutoConfig

config = AutoConfig.from_pretrained("bert-base-cased")

# Push the config to your namespace with the name "my-finetuned-bert" and have a local clone in the
# _my-finetuned-bert_ folder.
config.push_to_hub("my-finetuned-bert")

# Push the config to your namespace with the name "my-finetuned-bert" with no local clone.
config.push_to_hub("my-finetuned-bert", use_temp_dir=True)

# Push the config to an organization with the name "my-finetuned-bert" and have a local clone in the
# _my-finetuned-bert_ folder.
config.push_to_hub("my-finetuned-bert", organization="huggingface")

# Make a change to an existing repo that has been cloned locally in _my-finetuned-bert_.
config.push_to_hub("my-finetuned-bert", repo_url="https://huggingface.co/sgugger/my-finetuned-bert"),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoConfig

config = AutoConfig.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-comment"># Push the config to your namespace with the name &quot;my-finetuned-bert&quot; and have a local clone in the</span>
<span class="hljs-comment"># _my-finetuned-bert_ folder.</span>
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>)

<span class="hljs-comment"># Push the config to your namespace with the name &quot;my-finetuned-bert&quot; with no local clone.</span>
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>, use_temp_dir=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Push the config to an organization with the name &quot;my-finetuned-bert&quot; and have a local clone in the</span>
<span class="hljs-comment"># _my-finetuned-bert_ folder.</span>
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>, organization=<span class="hljs-string">&quot;huggingface&quot;</span>)

<span class="hljs-comment"># Make a change to an existing repo that has been cloned locally in _my-finetuned-bert_.</span>
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>, repo_url=<span class="hljs-string">&quot;https://huggingface.co/sgugger/my-finetuned-bert&quot;</span>)`}}),Pe=new z({props:{name:"dict\\_torch\\_dtype\\_to\\_str",anchor:"transformers.PretrainedConfig.dict_torch_dtype_to_str",parameters:[{name:"d",val:": typing.Dict[str, typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/configuration_utils.py#L805"}}),ke=new z({props:{name:"from\\_dict",anchor:"transformers.PretrainedConfig.from_dict",parameters:[{name:"config_dict",val:": typing.Dict[str, typing.Any]"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/configuration_utils.py#L608",parametersDescription:[{anchor:"transformers.PretrainedConfig.from_dict.config_dict",description:`<strong>config_dict</strong> (<code>Dict[str, Any]</code>) &#x2014;
Dictionary that will be used to instantiate the configuration object. Such a dictionary can be
retrieved from a pretrained checkpoint by leveraging the
<a href="/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig.get_config_dict">get_config_dict()</a> method.`,name:"config_dict"},{anchor:"transformers.PretrainedConfig.from_dict.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>) &#x2014;
Additional parameters from which to initialize the configuration object.`,name:"kwargs"}],returnDescription:`
<p>The configuration object instantiated from those parameters.</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),Ee=new z({props:{name:"from\\_json\\_file",anchor:"transformers.PretrainedConfig.from_json_file",parameters:[{name:"json_file",val:": typing.Union[str, os.PathLike]"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/configuration_utils.py#L647",parametersDescription:[{anchor:"transformers.PretrainedConfig.from_json_file.json_file",description:`<strong>json_file</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Path to the JSON file containing the parameters.`,name:"json_file"}],returnDescription:`
<p>The configuration object instantiated from that JSON file.</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),Te=new z({props:{name:"from\\_pretrained",anchor:"transformers.PretrainedConfig.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/configuration_utils.py#L431",parametersDescription:[{anchor:"transformers.PretrainedConfig.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained model configuration hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a configuration file saved using the
<a href="/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved configuration JSON <em>file</em>, e.g.,
<code>./my_model_directory/configuration.json</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"},{anchor:"transformers.PretrainedConfig.from_pretrained.cache_dir",description:`<strong>cache_dir</strong> (<code>str</code> or <code>os.PathLike</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded pretrained model configuration should be cached if the
standard cache should not be used.`,name:"cache_dir"},{anchor:"transformers.PretrainedConfig.from_pretrained.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to force to (re-)download the configuration files and override the cached versions if
they exist.`,name:"force_download"},{anchor:"transformers.PretrainedConfig.from_pretrained.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to delete incompletely received file. Attempts to resume the download if such a file
exists.`,name:"resume_download"},{anchor:"transformers.PretrainedConfig.from_pretrained.proxies",description:`<strong>proxies</strong> (<code>Dict[str, str]</code>, <em>optional</em>) &#x2014;
A dictionary of proxy servers to use by protocol or endpoint, e.g., <code>{&apos;http&apos;: &apos;foo.bar:3128&apos;, &apos;http://hostname&apos;: &apos;foo.bar:4012&apos;}.</code> The proxies are used on each request.`,name:"proxies"},{anchor:"transformers.PretrainedConfig.from_pretrained.use_auth_token",description:`<strong>use_auth_token</strong> (<code>str</code> or <em>bool</em>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token
generated when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"use_auth_token"},{anchor:"transformers.PretrainedConfig.from_pretrained.revision(str,",description:`<strong>revision(<code>str</code>,</strong> <em>optional</em>, defaults to <code>&quot;main&quot;</code>) &#x2014;
The specific model version to use. It can be a branch name, a tag name, or a commit id, since we use a
git-based system for storing models and other artifacts on huggingface.co, so <code>revision</code> can be any
identifier allowed by git.`,name:"revision(str,"},{anchor:"transformers.PretrainedConfig.from_pretrained.return_unused_kwargs",description:`<strong>return_unused_kwargs</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>False</code>, then this function returns just the final configuration object.</p>
<p>If <code>True</code>, then this functions returns a <code>Tuple(config, unused_kwargs)</code> where <em>unused_kwargs</em>
is a dictionary consisting of the key/value pairs whose keys are not configuration attributes: i.e.,
the part of <code>kwargs</code> which has not been used to update <code>config</code> and is otherwise ignored.`,name:"return_unused_kwargs"},{anchor:"transformers.PretrainedConfig.from_pretrained.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
The values in kwargs of any keys which are configuration attributes will be used to override the loaded
values. Behavior concerning key/value pairs whose keys are <em>not</em> configuration attributes is controlled
by the <code>return_unused_kwargs</code> keyword parameter.`,name:"kwargs"}],returnDescription:`
<p>The configuration object instantiated from this pretrained model.</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),re=new Ds({props:{$$slots:{default:[Ls]},$$scope:{ctx:ge}}}),je=new js({props:{code:`# We can't instantiate directly the base class _PretrainedConfig_ so let's show the examples on a
# derived class: BertConfig
config = BertConfig.from_pretrained('bert-base-uncased')    # Download configuration from huggingface.co and cache.
config = BertConfig.from_pretrained('./test/saved_model/')  # E.g. config (or model) was saved using _save_pretrained('./test/saved_model/')_
config = BertConfig.from_pretrained('./test/saved_model/my_configuration.json')
config = BertConfig.from_pretrained('bert-base-uncased', output_attentions=True, foo=False)
assert config.output_attentions == True
config, unused_kwargs = BertConfig.from_pretrained('bert-base-uncased', output_attentions=True,
foo=False, return_unused_kwargs=True)
assert config.output_attentions == True
assert unused_kwargs == {'foo': False},`,highlighted:`<span class="hljs-comment"># We can&#x27;t instantiate directly the base class _PretrainedConfig_ so let&#x27;s show the examples on a</span>
<span class="hljs-comment"># derived class: BertConfig</span>
config = BertConfig.from_pretrained(<span class="hljs-string">&#x27;bert-base-uncased&#x27;</span>)    <span class="hljs-comment"># Download configuration from huggingface.co and cache.</span>
config = BertConfig.from_pretrained(<span class="hljs-string">&#x27;./test/saved_model/&#x27;</span>)  <span class="hljs-comment"># E.g. config (or model) was saved using _save_pretrained(&#x27;./test/saved_model/&#x27;)_</span>
config = BertConfig.from_pretrained(<span class="hljs-string">&#x27;./test/saved_model/my_configuration.json&#x27;</span>)
config = BertConfig.from_pretrained(<span class="hljs-string">&#x27;bert-base-uncased&#x27;</span>, output_attentions=<span class="hljs-literal">True</span>, foo=<span class="hljs-literal">False</span>)
<span class="hljs-keyword">assert</span> config.output_attentions == <span class="hljs-literal">True</span>
config, unused_kwargs = BertConfig.from_pretrained(<span class="hljs-string">&#x27;bert-base-uncased&#x27;</span>, output_attentions=<span class="hljs-literal">True</span>,
foo=<span class="hljs-literal">False</span>, return_unused_kwargs=<span class="hljs-literal">True</span>)
<span class="hljs-keyword">assert</span> config.output_attentions == <span class="hljs-literal">True</span>
<span class="hljs-keyword">assert</span> unused_kwargs == {<span class="hljs-string">&#x27;foo&#x27;</span>: <span class="hljs-literal">False</span>}`}}),ze=new z({props:{name:"get\\_config\\_dict",anchor:"transformers.PretrainedConfig.get_config_dict",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/configuration_utils.py#L510",parametersDescription:[{anchor:"transformers.PretrainedConfig.get_config_dict.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
The identifier of the pre-trained checkpoint from which we want the dictionary of parameters.`,name:"pretrained_model_name_or_path"}],returnDescription:`
<p>The dictionary(ies) that will be used to instantiate the configuration object.</p>
`,returnType:`
<p><code>Tuple[Dict, Dict]</code></p>
`}}),Oe=new z({props:{name:"save\\_pretrained",anchor:"transformers.PretrainedConfig.save_pretrained",parameters:[{name:"save_directory",val:": typing.Union[str, os.PathLike]"},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/configuration_utils.py#L391",parametersDescription:[{anchor:"transformers.PretrainedConfig.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the configuration JSON file will be saved (will be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.PretrainedConfig.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it.`,name:"push_to_hub"}]}}),Ae=new z({props:{name:"to\\_dict",anchor:"transformers.PretrainedConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/configuration_utils.py#L707",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance.</p>
`,returnType:`
<p><code>Dict[str, Any]</code></p>
`}}),Se=new z({props:{name:"to\\_diff\\_dict",anchor:"transformers.PretrainedConfig.to_diff_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/configuration_utils.py#L675",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, Any]</code></p>
`}}),Fe=new z({props:{name:"to\\_json\\_file",anchor:"transformers.PretrainedConfig.to_json_file",parameters:[{name:"json_file_path",val:": typing.Union[str, os.PathLike]"},{name:"use_diff",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/configuration_utils.py#L743",parametersDescription:[{anchor:"transformers.PretrainedConfig.to_json_file.json_file_path",description:`<strong>json_file_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Path to the JSON file in which this configuration instance&#x2019;s parameters will be saved.`,name:"json_file_path"},{anchor:"transformers.PretrainedConfig.to_json_file.use_diff",description:`<strong>use_diff</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, only the difference between the config instance and the default
<code>PretrainedConfig()</code> is serialized to JSON file.`,name:"use_diff"}]}}),Ie=new z({props:{name:"to\\_json\\_string",anchor:"transformers.PretrainedConfig.to_json_string",parameters:[{name:"use_diff",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/configuration_utils.py#L725",parametersDescription:[{anchor:"transformers.PretrainedConfig.to_json_string.use_diff",description:`<strong>use_diff</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, only the difference between the config instance and the default
<code>PretrainedConfig()</code> is serialized to JSON string.`,name:"use_diff"}],returnDescription:`
<p>String containing all the attributes that make up this configuration instance in JSON format.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Le=new z({props:{name:"update",anchor:"transformers.PretrainedConfig.update",parameters:[{name:"config_dict",val:": typing.Dict[str, typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/configuration_utils.py#L757",parametersDescription:[{anchor:"transformers.PretrainedConfig.update.config_dict",description:"<strong>config_dict</strong> (<code>Dict[str, Any]</code>) &#x2014; Dictionary of attributes that should be updated for this class.",name:"config_dict"}]}}),qe=new z({props:{name:"update\\_from\\_string",anchor:"transformers.PretrainedConfig.update_from_string",parameters:[{name:"update_str",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/configuration_utils.py#L767",parametersDescription:[{anchor:"transformers.PretrainedConfig.update_from_string.update_str",description:"<strong>update_str</strong> (<code>str</code>) &#x2014; String with attributes that should be updated for this class.",name:"update_str"}]}}),{c(){m=r("meta"),x=d(),u=r("h1"),w=r("a"),O=r("span"),p($.$$.fragment),C=d(),I=r("span"),Do=o("Configuration"),ro=d(),R=r("p"),jo=o("The base class "),Ve=r("a"),zo=o("PretrainedConfig"),Oo=o(` implements the common methods for loading/saving a configuration
either from a local file or directory, or from a pretrained model configuration provided by the library (downloaded
from HuggingFace\u2019s AWS S3 repository).`),ao=d(),T=r("p"),Ao=o(`Each derived config class implements model specific attributes. Common attributes present in all config classes are:
`),tt=r("code"),So=o("hidden_size"),Fo=o(", "),ot=r("code"),Io=o("num_attention_heads"),Lo=o(", and "),nt=r("code"),No=o("num_hidden_layers"),qo=o(`. Text models further implement:
`),rt=r("code"),Mo=o("vocab_size"),Wo=o("."),so=d(),V=r("h2"),U=r("a"),at=r("span"),p(_e.$$.fragment),Ho=d(),st=r("span"),Vo=o("PretrainedConfig"),io=d(),l=r("div"),p(be.$$.fragment),Bo=d(),it=r("p"),Jo=o(`Base class for all configuration classes. Handles a few parameters common to all models\u2019 configurations as well as
methods for loading/downloading/saving configurations.`),Ro=d(),p(G.$$.fragment),Uo=d(),dt=r("p"),Go=o("Class attributes (overridden by derived classes):"),Xo=d(),P=r("ul"),ct=r("li"),M=r("p"),lt=r("strong"),Ko=o("model_type"),Qo=o(" ("),ft=r("code"),Yo=o("str"),Zo=o(`) \u2014 An identifier for the model type, serialized into the JSON file, and used to recreate
the correct object in `),Be=r("a"),en=o("AutoConfig"),tn=o("."),on=d(),ht=r("li"),D=r("p"),mt=r("strong"),nn=o("is_composition"),rn=o(" ("),ut=r("code"),an=o("bool"),sn=o(`) \u2014 Whether the config class is composed of multiple sub-configs. In this case the
config has to be initialized from two or more configs of type `),Je=r("a"),dn=o("PretrainedConfig"),cn=o(` like:
`),Re=r("a"),ln=o("EncoderDecoderConfig"),fn=o(" or "),Ue=r("a"),hn=o("~RagConfig"),mn=o("."),un=d(),pt=r("li"),X=r("p"),gt=r("strong"),pn=o("keys_to_ignore_at_inference"),gn=o(" ("),_t=r("code"),_n=o("List[str]"),bn=o(`) \u2014 A list of keys to ignore by default when looking at dictionary
outputs of the model during inference.`),vn=d(),ve=r("li"),K=r("p"),bt=r("strong"),yn=o("attribute_map"),wn=o(" ("),vt=r("code"),$n=o("Dict[str, str]"),Pn=o(`) \u2014 A dict that maps model specific attribute names to the standardized
naming of attributes.`),kn=d(),yt=r("p"),Cn=o("Common attributes (present in all subclasses):"),En=d(),wt=r("li"),Q=r("p"),$t=r("strong"),xn=o("vocab_size"),Tn=o(" ("),Pt=r("code"),Dn=o("int"),jn=o(`) \u2014 The number of tokens in the vocabulary, which is also the first dimension of the
embeddings matrix (this attribute may be missing for models that don\u2019t have a text modality like ViT).`),zn=d(),kt=r("li"),Y=r("p"),Ct=r("strong"),On=o("hidden_size"),An=o(" ("),Et=r("code"),Sn=o("int"),Fn=o(") \u2014 The hidden size of the model."),In=d(),xt=r("li"),Z=r("p"),Tt=r("strong"),Ln=o("num_attention_heads"),Nn=o(" ("),Dt=r("code"),qn=o("int"),Mn=o(`) \u2014 The number of attention heads used in the multi-head attention layers of the
model.`),Wn=d(),jt=r("li"),ee=r("p"),zt=r("strong"),Hn=o("num_hidden_layers"),Vn=o(" ("),Ot=r("code"),Bn=o("int"),Jn=o(") \u2014 The number of blocks in the model."),Rn=d(),A=r("div"),p(ye.$$.fragment),Un=d(),we=r("p"),Gn=o(`Upload the configuration file to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),At=r("code"),Xn=o("repo_path_or_name"),Kn=o("."),Qn=d(),St=r("p"),Yn=o("Examples:"),Zn=d(),p($e.$$.fragment),er=d(),te=r("div"),p(Pe.$$.fragment),tr=d(),L=r("p"),or=o("Checks whether the passed dictionary has a "),Ft=r("em"),nr=o("torch_dtype"),rr=o(` key and if it\u2019s not None, converts torch.dtype to a
string of just the type. For example, `),It=r("code"),ar=o("torch.float32"),sr=o(" get converted into "),Lt=r("em"),ir=o("\u201Cfloat32\u201D"),dr=o(` string, which can
then be stored in the json format.`),cr=d(),oe=r("div"),p(ke.$$.fragment),lr=d(),Ce=r("p"),fr=o("Instantiates a "),Ge=r("a"),hr=o("PretrainedConfig"),mr=o(" from a Python dictionary of parameters."),ur=d(),ne=r("div"),p(Ee.$$.fragment),pr=d(),xe=r("p"),gr=o("Instantiates a "),Xe=r("a"),_r=o("PretrainedConfig"),br=o(" from the path to a JSON file of parameters."),vr=d(),j=r("div"),p(Te.$$.fragment),yr=d(),De=r("p"),wr=o("Instantiate a "),Ke=r("a"),$r=o("PretrainedConfig"),Pr=o(` (or a derived class) from a pretrained model
configuration.`),kr=d(),p(re.$$.fragment),Cr=d(),Nt=r("p"),Er=o("Examples:"),xr=d(),p(je.$$.fragment),Tr=d(),ae=r("div"),p(ze.$$.fragment),Dr=d(),N=r("p"),jr=o("From a "),qt=r("code"),zr=o("pretrained_model_name_or_path"),Or=o(`, resolve to a dictionary of parameters, to be used for instantiating a
`),Qe=r("a"),Ar=o("PretrainedConfig"),Sr=o(" using "),Mt=r("code"),Fr=o("from_dict"),Ir=o("."),Lr=d(),se=r("div"),p(Oe.$$.fragment),Nr=d(),B=r("p"),qr=o("Save a configuration object to the directory "),Wt=r("code"),Mr=o("save_directory"),Wr=o(`, so that it can be re-loaded using the
`),Ye=r("a"),Hr=o("from_pretrained()"),Vr=o(" class method."),Br=d(),ie=r("div"),p(Ae.$$.fragment),Jr=d(),Ht=r("p"),Rr=o("Serializes this instance to a Python dictionary."),Ur=d(),de=r("div"),p(Se.$$.fragment),Gr=d(),Vt=r("p"),Xr=o(`Removes all attributes from config which correspond to the default config attributes for better readability and
serializes to a Python dictionary.`),Kr=d(),ce=r("div"),p(Fe.$$.fragment),Qr=d(),Bt=r("p"),Yr=o("Save this instance to a JSON file."),Zr=d(),le=r("div"),p(Ie.$$.fragment),ea=d(),Jt=r("p"),ta=o("Serializes this instance to a JSON string."),oa=d(),fe=r("div"),p(Le.$$.fragment),na=d(),Ne=r("p"),ra=o("Updates attributes of this class with attributes from "),Rt=r("code"),aa=o("config_dict"),sa=o("."),ia=d(),S=r("div"),p(qe.$$.fragment),da=d(),Me=r("p"),ca=o("Updates attributes of this class with attributes from "),Ut=r("code"),la=o("update_str"),fa=o("."),ha=d(),J=r("p"),ma=o("The expected format is ints, floats and strings as is, and for booleans use "),Gt=r("code"),ua=o("true"),pa=o(" or "),Xt=r("code"),ga=o("false"),_a=o(`. For example:
\u201Cn_embd=10,resid_pdrop=0.2,scale_attn_weights=false,summary_type=cls_index\u201D`),ba=d(),Kt=r("p"),va=o("The keys to change have to already exist in the config object."),this.h()},l(i){const k=Fs('[data-svelte="svelte-1phssyn"]',document.head);m=a(k,"META",{name:!0,content:!0}),k.forEach(t),x=c(i),u=a(i,"H1",{class:!0});var We=s(u);w=a(We,"A",{id:!0,class:!0,href:!0});var Qt=s(w);O=a(Qt,"SPAN",{});var ya=s(O);g($.$$.fragment,ya),ya.forEach(t),Qt.forEach(t),C=c(We),I=a(We,"SPAN",{});var wa=s(I);Do=n(wa,"Configuration"),wa.forEach(t),We.forEach(t),ro=c(i),R=a(i,"P",{});var lo=s(R);jo=n(lo,"The base class "),Ve=a(lo,"A",{href:!0});var $a=s(Ve);zo=n($a,"PretrainedConfig"),$a.forEach(t),Oo=n(lo,` implements the common methods for loading/saving a configuration
either from a local file or directory, or from a pretrained model configuration provided by the library (downloaded
from HuggingFace\u2019s AWS S3 repository).`),lo.forEach(t),ao=c(i),T=a(i,"P",{});var W=s(T);Ao=n(W,`Each derived config class implements model specific attributes. Common attributes present in all config classes are:
`),tt=a(W,"CODE",{});var Pa=s(tt);So=n(Pa,"hidden_size"),Pa.forEach(t),Fo=n(W,", "),ot=a(W,"CODE",{});var ka=s(ot);Io=n(ka,"num_attention_heads"),ka.forEach(t),Lo=n(W,", and "),nt=a(W,"CODE",{});var Ca=s(nt);No=n(Ca,"num_hidden_layers"),Ca.forEach(t),qo=n(W,`. Text models further implement:
`),rt=a(W,"CODE",{});var Ea=s(rt);Mo=n(Ea,"vocab_size"),Ea.forEach(t),Wo=n(W,"."),W.forEach(t),so=c(i),V=a(i,"H2",{class:!0});var fo=s(V);U=a(fo,"A",{id:!0,class:!0,href:!0});var xa=s(U);at=a(xa,"SPAN",{});var Ta=s(at);g(_e.$$.fragment,Ta),Ta.forEach(t),xa.forEach(t),Ho=c(fo),st=a(fo,"SPAN",{});var Da=s(st);Vo=n(Da,"PretrainedConfig"),Da.forEach(t),fo.forEach(t),io=c(i),l=a(i,"DIV",{class:!0});var f=s(l);g(be.$$.fragment,f),Bo=c(f),it=a(f,"P",{});var ja=s(it);Jo=n(ja,`Base class for all configuration classes. Handles a few parameters common to all models\u2019 configurations as well as
methods for loading/downloading/saving configurations.`),ja.forEach(t),Ro=c(f),g(G.$$.fragment,f),Uo=c(f),dt=a(f,"P",{});var za=s(dt);Go=n(za,"Class attributes (overridden by derived classes):"),za.forEach(t),Xo=c(f),P=a(f,"UL",{});var E=s(P);ct=a(E,"LI",{});var Oa=s(ct);M=a(Oa,"P",{});var He=s(M);lt=a(He,"STRONG",{});var Aa=s(lt);Ko=n(Aa,"model_type"),Aa.forEach(t),Qo=n(He," ("),ft=a(He,"CODE",{});var Sa=s(ft);Yo=n(Sa,"str"),Sa.forEach(t),Zo=n(He,`) \u2014 An identifier for the model type, serialized into the JSON file, and used to recreate
the correct object in `),Be=a(He,"A",{href:!0});var Fa=s(Be);en=n(Fa,"AutoConfig"),Fa.forEach(t),tn=n(He,"."),He.forEach(t),Oa.forEach(t),on=c(E),ht=a(E,"LI",{});var Ia=s(ht);D=a(Ia,"P",{});var q=s(D);mt=a(q,"STRONG",{});var La=s(mt);nn=n(La,"is_composition"),La.forEach(t),rn=n(q," ("),ut=a(q,"CODE",{});var Na=s(ut);an=n(Na,"bool"),Na.forEach(t),sn=n(q,`) \u2014 Whether the config class is composed of multiple sub-configs. In this case the
config has to be initialized from two or more configs of type `),Je=a(q,"A",{href:!0});var qa=s(Je);dn=n(qa,"PretrainedConfig"),qa.forEach(t),cn=n(q,` like:
`),Re=a(q,"A",{href:!0});var Ma=s(Re);ln=n(Ma,"EncoderDecoderConfig"),Ma.forEach(t),fn=n(q," or "),Ue=a(q,"A",{href:!0});var Wa=s(Ue);hn=n(Wa,"~RagConfig"),Wa.forEach(t),mn=n(q,"."),q.forEach(t),Ia.forEach(t),un=c(E),pt=a(E,"LI",{});var Ha=s(pt);X=a(Ha,"P",{});var Yt=s(X);gt=a(Yt,"STRONG",{});var Va=s(gt);pn=n(Va,"keys_to_ignore_at_inference"),Va.forEach(t),gn=n(Yt," ("),_t=a(Yt,"CODE",{});var Ba=s(_t);_n=n(Ba,"List[str]"),Ba.forEach(t),bn=n(Yt,`) \u2014 A list of keys to ignore by default when looking at dictionary
outputs of the model during inference.`),Yt.forEach(t),Ha.forEach(t),vn=c(E),ve=a(E,"LI",{});var ho=s(ve);K=a(ho,"P",{});var Zt=s(K);bt=a(Zt,"STRONG",{});var Ja=s(bt);yn=n(Ja,"attribute_map"),Ja.forEach(t),wn=n(Zt," ("),vt=a(Zt,"CODE",{});var Ra=s(vt);$n=n(Ra,"Dict[str, str]"),Ra.forEach(t),Pn=n(Zt,`) \u2014 A dict that maps model specific attribute names to the standardized
naming of attributes.`),Zt.forEach(t),kn=c(ho),yt=a(ho,"P",{});var Ua=s(yt);Cn=n(Ua,"Common attributes (present in all subclasses):"),Ua.forEach(t),ho.forEach(t),En=c(E),wt=a(E,"LI",{});var Ga=s(wt);Q=a(Ga,"P",{});var eo=s(Q);$t=a(eo,"STRONG",{});var Xa=s($t);xn=n(Xa,"vocab_size"),Xa.forEach(t),Tn=n(eo," ("),Pt=a(eo,"CODE",{});var Ka=s(Pt);Dn=n(Ka,"int"),Ka.forEach(t),jn=n(eo,`) \u2014 The number of tokens in the vocabulary, which is also the first dimension of the
embeddings matrix (this attribute may be missing for models that don\u2019t have a text modality like ViT).`),eo.forEach(t),Ga.forEach(t),zn=c(E),kt=a(E,"LI",{});var Qa=s(kt);Y=a(Qa,"P",{});var to=s(Y);Ct=a(to,"STRONG",{});var Ya=s(Ct);On=n(Ya,"hidden_size"),Ya.forEach(t),An=n(to," ("),Et=a(to,"CODE",{});var Za=s(Et);Sn=n(Za,"int"),Za.forEach(t),Fn=n(to,") \u2014 The hidden size of the model."),to.forEach(t),Qa.forEach(t),In=c(E),xt=a(E,"LI",{});var es=s(xt);Z=a(es,"P",{});var oo=s(Z);Tt=a(oo,"STRONG",{});var ts=s(Tt);Ln=n(ts,"num_attention_heads"),ts.forEach(t),Nn=n(oo," ("),Dt=a(oo,"CODE",{});var os=s(Dt);qn=n(os,"int"),os.forEach(t),Mn=n(oo,`) \u2014 The number of attention heads used in the multi-head attention layers of the
model.`),oo.forEach(t),es.forEach(t),Wn=c(E),jt=a(E,"LI",{});var ns=s(jt);ee=a(ns,"P",{});var no=s(ee);zt=a(no,"STRONG",{});var rs=s(zt);Hn=n(rs,"num_hidden_layers"),rs.forEach(t),Vn=n(no," ("),Ot=a(no,"CODE",{});var as=s(Ot);Bn=n(as,"int"),as.forEach(t),Jn=n(no,") \u2014 The number of blocks in the model."),no.forEach(t),ns.forEach(t),E.forEach(t),Rn=c(f),A=a(f,"DIV",{class:!0});var he=s(A);g(ye.$$.fragment,he),Un=c(he),we=a(he,"P",{});var mo=s(we);Gn=n(mo,`Upload the configuration file to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),At=a(mo,"CODE",{});var ss=s(At);Xn=n(ss,"repo_path_or_name"),ss.forEach(t),Kn=n(mo,"."),mo.forEach(t),Qn=c(he),St=a(he,"P",{});var is=s(St);Yn=n(is,"Examples:"),is.forEach(t),Zn=c(he),g($e.$$.fragment,he),he.forEach(t),er=c(f),te=a(f,"DIV",{class:!0});var uo=s(te);g(Pe.$$.fragment,uo),tr=c(uo),L=a(uo,"P",{});var me=s(L);or=n(me,"Checks whether the passed dictionary has a "),Ft=a(me,"EM",{});var ds=s(Ft);nr=n(ds,"torch_dtype"),ds.forEach(t),rr=n(me,` key and if it\u2019s not None, converts torch.dtype to a
string of just the type. For example, `),It=a(me,"CODE",{});var cs=s(It);ar=n(cs,"torch.float32"),cs.forEach(t),sr=n(me," get converted into "),Lt=a(me,"EM",{});var ls=s(Lt);ir=n(ls,"\u201Cfloat32\u201D"),ls.forEach(t),dr=n(me,` string, which can
then be stored in the json format.`),me.forEach(t),uo.forEach(t),cr=c(f),oe=a(f,"DIV",{class:!0});var po=s(oe);g(ke.$$.fragment,po),lr=c(po),Ce=a(po,"P",{});var go=s(Ce);fr=n(go,"Instantiates a "),Ge=a(go,"A",{href:!0});var fs=s(Ge);hr=n(fs,"PretrainedConfig"),fs.forEach(t),mr=n(go," from a Python dictionary of parameters."),go.forEach(t),po.forEach(t),ur=c(f),ne=a(f,"DIV",{class:!0});var _o=s(ne);g(Ee.$$.fragment,_o),pr=c(_o),xe=a(_o,"P",{});var bo=s(xe);gr=n(bo,"Instantiates a "),Xe=a(bo,"A",{href:!0});var hs=s(Xe);_r=n(hs,"PretrainedConfig"),hs.forEach(t),br=n(bo," from the path to a JSON file of parameters."),bo.forEach(t),_o.forEach(t),vr=c(f),j=a(f,"DIV",{class:!0});var H=s(j);g(Te.$$.fragment,H),yr=c(H),De=a(H,"P",{});var vo=s(De);wr=n(vo,"Instantiate a "),Ke=a(vo,"A",{href:!0});var ms=s(Ke);$r=n(ms,"PretrainedConfig"),ms.forEach(t),Pr=n(vo,` (or a derived class) from a pretrained model
configuration.`),vo.forEach(t),kr=c(H),g(re.$$.fragment,H),Cr=c(H),Nt=a(H,"P",{});var us=s(Nt);Er=n(us,"Examples:"),us.forEach(t),xr=c(H),g(je.$$.fragment,H),H.forEach(t),Tr=c(f),ae=a(f,"DIV",{class:!0});var yo=s(ae);g(ze.$$.fragment,yo),Dr=c(yo),N=a(yo,"P",{});var ue=s(N);jr=n(ue,"From a "),qt=a(ue,"CODE",{});var ps=s(qt);zr=n(ps,"pretrained_model_name_or_path"),ps.forEach(t),Or=n(ue,`, resolve to a dictionary of parameters, to be used for instantiating a
`),Qe=a(ue,"A",{href:!0});var gs=s(Qe);Ar=n(gs,"PretrainedConfig"),gs.forEach(t),Sr=n(ue," using "),Mt=a(ue,"CODE",{});var _s=s(Mt);Fr=n(_s,"from_dict"),_s.forEach(t),Ir=n(ue,"."),ue.forEach(t),yo.forEach(t),Lr=c(f),se=a(f,"DIV",{class:!0});var wo=s(se);g(Oe.$$.fragment,wo),Nr=c(wo),B=a(wo,"P",{});var Ze=s(B);qr=n(Ze,"Save a configuration object to the directory "),Wt=a(Ze,"CODE",{});var bs=s(Wt);Mr=n(bs,"save_directory"),bs.forEach(t),Wr=n(Ze,`, so that it can be re-loaded using the
`),Ye=a(Ze,"A",{href:!0});var vs=s(Ye);Hr=n(vs,"from_pretrained()"),vs.forEach(t),Vr=n(Ze," class method."),Ze.forEach(t),wo.forEach(t),Br=c(f),ie=a(f,"DIV",{class:!0});var $o=s(ie);g(Ae.$$.fragment,$o),Jr=c($o),Ht=a($o,"P",{});var ys=s(Ht);Rr=n(ys,"Serializes this instance to a Python dictionary."),ys.forEach(t),$o.forEach(t),Ur=c(f),de=a(f,"DIV",{class:!0});var Po=s(de);g(Se.$$.fragment,Po),Gr=c(Po),Vt=a(Po,"P",{});var ws=s(Vt);Xr=n(ws,`Removes all attributes from config which correspond to the default config attributes for better readability and
serializes to a Python dictionary.`),ws.forEach(t),Po.forEach(t),Kr=c(f),ce=a(f,"DIV",{class:!0});var ko=s(ce);g(Fe.$$.fragment,ko),Qr=c(ko),Bt=a(ko,"P",{});var $s=s(Bt);Yr=n($s,"Save this instance to a JSON file."),$s.forEach(t),ko.forEach(t),Zr=c(f),le=a(f,"DIV",{class:!0});var Co=s(le);g(Ie.$$.fragment,Co),ea=c(Co),Jt=a(Co,"P",{});var Ps=s(Jt);ta=n(Ps,"Serializes this instance to a JSON string."),Ps.forEach(t),Co.forEach(t),oa=c(f),fe=a(f,"DIV",{class:!0});var Eo=s(fe);g(Le.$$.fragment,Eo),na=c(Eo),Ne=a(Eo,"P",{});var xo=s(Ne);ra=n(xo,"Updates attributes of this class with attributes from "),Rt=a(xo,"CODE",{});var ks=s(Rt);aa=n(ks,"config_dict"),ks.forEach(t),sa=n(xo,"."),xo.forEach(t),Eo.forEach(t),ia=c(f),S=a(f,"DIV",{class:!0});var pe=s(S);g(qe.$$.fragment,pe),da=c(pe),Me=a(pe,"P",{});var To=s(Me);ca=n(To,"Updates attributes of this class with attributes from "),Ut=a(To,"CODE",{});var Cs=s(Ut);la=n(Cs,"update_str"),Cs.forEach(t),fa=n(To,"."),To.forEach(t),ha=c(pe),J=a(pe,"P",{});var et=s(J);ma=n(et,"The expected format is ints, floats and strings as is, and for booleans use "),Gt=a(et,"CODE",{});var Es=s(Gt);ua=n(Es,"true"),Es.forEach(t),pa=n(et," or "),Xt=a(et,"CODE",{});var xs=s(Xt);ga=n(xs,"false"),xs.forEach(t),_a=n(et,`. For example:
\u201Cn_embd=10,resid_pdrop=0.2,scale_attn_weights=false,summary_type=cls_index\u201D`),et.forEach(t),ba=c(pe),Kt=a(pe,"P",{});var Ts=s(Kt);va=n(Ts,"The keys to change have to already exist in the config object."),Ts.forEach(t),pe.forEach(t),f.forEach(t),this.h()},h(){h(m,"name","hf:doc:metadata"),h(m,"content",JSON.stringify(qs)),h(w,"id","configuration"),h(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(w,"href","#configuration"),h(u,"class","relative group"),h(Ve,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),h(U,"id","transformers.PretrainedConfig"),h(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(U,"href","#transformers.PretrainedConfig"),h(V,"class","relative group"),h(Be,"href","/docs/transformers/v4.14.1/en/model_doc/auto#transformers.AutoConfig"),h(Je,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),h(Re,"href","/docs/transformers/v4.14.1/en/model_doc/encoderdecoder#transformers.EncoderDecoderConfig"),h(Ue,"href","/docs/transformers/v4.14.1/en/model_doc/rag#transformers.RagConfig"),h(A,"class","docstring"),h(te,"class","docstring"),h(Ge,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),h(oe,"class","docstring"),h(Xe,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),h(ne,"class","docstring"),h(Ke,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),h(j,"class","docstring"),h(Qe,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),h(ae,"class","docstring"),h(Ye,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig.from_pretrained"),h(se,"class","docstring"),h(ie,"class","docstring"),h(de,"class","docstring"),h(ce,"class","docstring"),h(le,"class","docstring"),h(fe,"class","docstring"),h(S,"class","docstring"),h(l,"class","docstring")},m(i,k){e(document.head,m),F(i,x,k),F(i,u,k),e(u,w),e(w,O),_($,O,null),e(u,C),e(u,I),e(I,Do),F(i,ro,k),F(i,R,k),e(R,jo),e(R,Ve),e(Ve,zo),e(R,Oo),F(i,ao,k),F(i,T,k),e(T,Ao),e(T,tt),e(tt,So),e(T,Fo),e(T,ot),e(ot,Io),e(T,Lo),e(T,nt),e(nt,No),e(T,qo),e(T,rt),e(rt,Mo),e(T,Wo),F(i,so,k),F(i,V,k),e(V,U),e(U,at),_(_e,at,null),e(V,Ho),e(V,st),e(st,Vo),F(i,io,k),F(i,l,k),_(be,l,null),e(l,Bo),e(l,it),e(it,Jo),e(l,Ro),_(G,l,null),e(l,Uo),e(l,dt),e(dt,Go),e(l,Xo),e(l,P),e(P,ct),e(ct,M),e(M,lt),e(lt,Ko),e(M,Qo),e(M,ft),e(ft,Yo),e(M,Zo),e(M,Be),e(Be,en),e(M,tn),e(P,on),e(P,ht),e(ht,D),e(D,mt),e(mt,nn),e(D,rn),e(D,ut),e(ut,an),e(D,sn),e(D,Je),e(Je,dn),e(D,cn),e(D,Re),e(Re,ln),e(D,fn),e(D,Ue),e(Ue,hn),e(D,mn),e(P,un),e(P,pt),e(pt,X),e(X,gt),e(gt,pn),e(X,gn),e(X,_t),e(_t,_n),e(X,bn),e(P,vn),e(P,ve),e(ve,K),e(K,bt),e(bt,yn),e(K,wn),e(K,vt),e(vt,$n),e(K,Pn),e(ve,kn),e(ve,yt),e(yt,Cn),e(P,En),e(P,wt),e(wt,Q),e(Q,$t),e($t,xn),e(Q,Tn),e(Q,Pt),e(Pt,Dn),e(Q,jn),e(P,zn),e(P,kt),e(kt,Y),e(Y,Ct),e(Ct,On),e(Y,An),e(Y,Et),e(Et,Sn),e(Y,Fn),e(P,In),e(P,xt),e(xt,Z),e(Z,Tt),e(Tt,Ln),e(Z,Nn),e(Z,Dt),e(Dt,qn),e(Z,Mn),e(P,Wn),e(P,jt),e(jt,ee),e(ee,zt),e(zt,Hn),e(ee,Vn),e(ee,Ot),e(Ot,Bn),e(ee,Jn),e(l,Rn),e(l,A),_(ye,A,null),e(A,Un),e(A,we),e(we,Gn),e(we,At),e(At,Xn),e(we,Kn),e(A,Qn),e(A,St),e(St,Yn),e(A,Zn),_($e,A,null),e(l,er),e(l,te),_(Pe,te,null),e(te,tr),e(te,L),e(L,or),e(L,Ft),e(Ft,nr),e(L,rr),e(L,It),e(It,ar),e(L,sr),e(L,Lt),e(Lt,ir),e(L,dr),e(l,cr),e(l,oe),_(ke,oe,null),e(oe,lr),e(oe,Ce),e(Ce,fr),e(Ce,Ge),e(Ge,hr),e(Ce,mr),e(l,ur),e(l,ne),_(Ee,ne,null),e(ne,pr),e(ne,xe),e(xe,gr),e(xe,Xe),e(Xe,_r),e(xe,br),e(l,vr),e(l,j),_(Te,j,null),e(j,yr),e(j,De),e(De,wr),e(De,Ke),e(Ke,$r),e(De,Pr),e(j,kr),_(re,j,null),e(j,Cr),e(j,Nt),e(Nt,Er),e(j,xr),_(je,j,null),e(l,Tr),e(l,ae),_(ze,ae,null),e(ae,Dr),e(ae,N),e(N,jr),e(N,qt),e(qt,zr),e(N,Or),e(N,Qe),e(Qe,Ar),e(N,Sr),e(N,Mt),e(Mt,Fr),e(N,Ir),e(l,Lr),e(l,se),_(Oe,se,null),e(se,Nr),e(se,B),e(B,qr),e(B,Wt),e(Wt,Mr),e(B,Wr),e(B,Ye),e(Ye,Hr),e(B,Vr),e(l,Br),e(l,ie),_(Ae,ie,null),e(ie,Jr),e(ie,Ht),e(Ht,Rr),e(l,Ur),e(l,de),_(Se,de,null),e(de,Gr),e(de,Vt),e(Vt,Xr),e(l,Kr),e(l,ce),_(Fe,ce,null),e(ce,Qr),e(ce,Bt),e(Bt,Yr),e(l,Zr),e(l,le),_(Ie,le,null),e(le,ea),e(le,Jt),e(Jt,ta),e(l,oa),e(l,fe),_(Le,fe,null),e(fe,na),e(fe,Ne),e(Ne,ra),e(Ne,Rt),e(Rt,aa),e(Ne,sa),e(l,ia),e(l,S),_(qe,S,null),e(S,da),e(S,Me),e(Me,ca),e(Me,Ut),e(Ut,la),e(Me,fa),e(S,ha),e(S,J),e(J,ma),e(J,Gt),e(Gt,ua),e(J,pa),e(J,Xt),e(Xt,ga),e(J,_a),e(S,ba),e(S,Kt),e(Kt,va),co=!0},p(i,[k]){const We={};k&2&&(We.$$scope={dirty:k,ctx:i}),G.$set(We);const Qt={};k&2&&(Qt.$$scope={dirty:k,ctx:i}),re.$set(Qt)},i(i){co||(b($.$$.fragment,i),b(_e.$$.fragment,i),b(be.$$.fragment,i),b(G.$$.fragment,i),b(ye.$$.fragment,i),b($e.$$.fragment,i),b(Pe.$$.fragment,i),b(ke.$$.fragment,i),b(Ee.$$.fragment,i),b(Te.$$.fragment,i),b(re.$$.fragment,i),b(je.$$.fragment,i),b(ze.$$.fragment,i),b(Oe.$$.fragment,i),b(Ae.$$.fragment,i),b(Se.$$.fragment,i),b(Fe.$$.fragment,i),b(Ie.$$.fragment,i),b(Le.$$.fragment,i),b(qe.$$.fragment,i),co=!0)},o(i){v($.$$.fragment,i),v(_e.$$.fragment,i),v(be.$$.fragment,i),v(G.$$.fragment,i),v(ye.$$.fragment,i),v($e.$$.fragment,i),v(Pe.$$.fragment,i),v(ke.$$.fragment,i),v(Ee.$$.fragment,i),v(Te.$$.fragment,i),v(re.$$.fragment,i),v(je.$$.fragment,i),v(ze.$$.fragment,i),v(Oe.$$.fragment,i),v(Ae.$$.fragment,i),v(Se.$$.fragment,i),v(Fe.$$.fragment,i),v(Ie.$$.fragment,i),v(Le.$$.fragment,i),v(qe.$$.fragment,i),co=!1},d(i){t(m),i&&t(x),i&&t(u),y($),i&&t(ro),i&&t(R),i&&t(ao),i&&t(T),i&&t(so),i&&t(V),y(_e),i&&t(io),i&&t(l),y(be),y(G),y(ye),y($e),y(Pe),y(ke),y(Ee),y(Te),y(re),y(je),y(ze),y(Oe),y(Ae),y(Se),y(Fe),y(Ie),y(Le),y(qe)}}}const qs={local:"configuration",sections:[{local:"transformers.PretrainedConfig",title:"PretrainedConfig"}],title:"Configuration"};function Ms(ge,m,x){let{fw:u}=m;return ge.$$set=w=>{"fw"in w&&x(0,u=w.fw)},[u]}class Us extends Os{constructor(m){super();As(this,m,Ms,Ns,Ss,{fw:0})}}export{Us as default,qs as metadata};
