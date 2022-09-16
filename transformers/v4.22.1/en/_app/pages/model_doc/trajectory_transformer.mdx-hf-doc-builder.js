import{S as To,i as yo,s as vo,e as t,k as p,w,t as s,M as jo,c as a,d as o,m as g,a as n,x as $,h as i,b as l,G as r,g as h,y as k,q as C,o as x,B as z,v as bo,L as uo}from"../../chunks/vendor-hf-doc-builder.js";import{T as wo}from"../../chunks/Tip-hf-doc-builder.js";import{D as Ir}from"../../chunks/Docstring-hf-doc-builder.js";import{C as _o}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Je}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as go}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function $o(R){let d,_;return d=new _o({props:{code:`from transformers import TrajectoryTransformerModel, TrajectoryTransformerConfig

# Initializing a TrajectoryTransformer CarlCochet/trajectory-transformer-halfcheetah-medium-v2 style configuration
configuration = TrajectoryTransformerConfig()

# Initializing a model from the CarlCochet/trajectory-transformer-halfcheetah-medium-v2 style configuration
model = TrajectoryTransformerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrajectoryTransformerModel, TrajectoryTransformerConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a TrajectoryTransformer CarlCochet/trajectory-transformer-halfcheetah-medium-v2 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = TrajectoryTransformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the CarlCochet/trajectory-transformer-halfcheetah-medium-v2 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TrajectoryTransformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){w(d.$$.fragment)},l(m){$(d.$$.fragment,m)},m(m,u){k(d,m,u),_=!0},p:uo,i(m){_||(C(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){z(d,m)}}}function ko(R){let d,_,m,u,y;return{c(){d=t("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=t("code"),u=s("Module"),y=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(f){d=a(f,"P",{});var T=n(d);_=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(T,"CODE",{});var S=n(m);u=i(S,"Module"),S.forEach(o),y=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(f,T){h(f,d,T),r(d,_),r(d,m),r(m,u),r(d,y)},d(f){f&&o(d)}}}function Co(R){let d,_,m,u,y;return u=new _o({props:{code:`from transformers import TrajectoryTransformerModel
import torch

model = TrajectoryTransformerModel.from_pretrained(
    "CarlCochet/trajectory-transformer-halfcheetah-medium-v2"
)
model.to(device)
model.eval()

observations_dim, action_dim, batch_size = 17, 6, 256
seq_length = observations_dim + action_dim + 1

trajectories = torch.LongTensor([np.random.permutation(self.seq_length) for _ in range(batch_size)]).to(
    device
)
targets = torch.LongTensor([np.random.permutation(self.seq_length) for _ in range(batch_size)]).to(device)

outputs = model(
    trajectories,
    targets=targets,
    use_cache=True,
    output_attentions=True,
    output_hidden_states=True,
    return_dict=True,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrajectoryTransformerModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TrajectoryTransformerModel.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;CarlCochet/trajectory-transformer-halfcheetah-medium-v2&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.to(device)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">eval</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>observations_dim, action_dim, batch_size = <span class="hljs-number">17</span>, <span class="hljs-number">6</span>, <span class="hljs-number">256</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_length = observations_dim + action_dim + <span class="hljs-number">1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>trajectories = torch.LongTensor([np.random.permutation(self.seq_length) <span class="hljs-keyword">for</span> _ <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(batch_size)]).to(
<span class="hljs-meta">... </span>    device
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>targets = torch.LongTensor([np.random.permutation(self.seq_length) <span class="hljs-keyword">for</span> _ <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(batch_size)]).to(device)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    trajectories,
<span class="hljs-meta">... </span>    targets=targets,
<span class="hljs-meta">... </span>    use_cache=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    output_attentions=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    output_hidden_states=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    return_dict=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)`}}),{c(){d=t("p"),_=s("Examples:"),m=p(),w(u.$$.fragment)},l(f){d=a(f,"P",{});var T=n(d);_=i(T,"Examples:"),T.forEach(o),m=g(f),$(u.$$.fragment,f)},m(f,T){h(f,d,T),r(d,_),h(f,m,T),k(u,f,T),y=!0},p:uo,i(f){y||(C(u.$$.fragment,f),y=!0)},o(f){x(u.$$.fragment,f),y=!1},d(f){f&&o(d),f&&o(m),z(u,f)}}}function xo(R){let d,_,m,u,y,f,T,S,Ue,Ee,E,N,ye,U,Qe,ve,Ke,qe,F,Xe,Q,Ye,Ze,Pe,ie,er,Le,le,je,rr,Ae,ce,or,Oe,de,tr,Re,M,ar,K,nr,sr,X,ir,lr,Se,q,D,be,Y,cr,we,dr,Ne,v,Z,mr,P,fr,me,hr,pr,ee,gr,ur,_r,L,Tr,fe,yr,vr,he,jr,br,wr,I,Fe,A,W,$e,re,$r,ke,kr,De,j,oe,Cr,te,xr,ae,zr,Mr,Er,Ce,qr,Pr,b,ne,Lr,O,Ar,pe,Or,Rr,xe,Sr,Nr,Fr,H,Dr,B,Ie;return f=new Je({}),U=new Je({}),Y=new Je({}),Z=new Ir({props:{name:"class transformers.TrajectoryTransformerConfig",anchor:"transformers.TrajectoryTransformerConfig",parameters:[{name:"vocab_size",val:" = 100"},{name:"batch_size",val:" = 256"},{name:"action_weight",val:" = 5"},{name:"reward_weight",val:" = 1"},{name:"value_weight",val:" = 1"},{name:"block_size",val:" = 249"},{name:"action_dim",val:" = 6"},{name:"observation_dim",val:" = 17"},{name:"transition_dim",val:" = 25"},{name:"n_layer",val:" = 4"},{name:"n_head",val:" = 4"},{name:"n_embd",val:" = 128"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"resid_pdrop",val:" = 0.1"},{name:"learning_rate",val:" = 0.0006"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"kaiming_initializer_range",val:" = 1"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TrajectoryTransformerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Vocabulary size of the TrajectoryTransformer model. Defines the number of different tokens that can be
represented by the <code>trajectories</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/trajectory_transformer#transformers.TrajectoryTransformerModel">TrajectoryTransformerModel</a>`,name:"vocab_size"},{anchor:"transformers.TrajectoryTransformerConfig.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Size of the batch of trajectories passed to the model.`,name:"batch_size"},{anchor:"transformers.TrajectoryTransformerConfig.action_weight",description:`<strong>action_weight</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Weight of the action in the loss function`,name:"action_weight"},{anchor:"transformers.TrajectoryTransformerConfig.reward_weight",description:`<strong>reward_weight</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Weight of the reward in the loss function`,name:"reward_weight"},{anchor:"transformers.TrajectoryTransformerConfig.value_weight",description:`<strong>value_weight</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Weight of the value in the loss function`,name:"value_weight"},{anchor:"transformers.TrajectoryTransformerConfig.block_size",description:`<strong>block_size</strong> (<code>int</code>, <em>optional</em>, defaults to 249) &#x2014;
Size of the blocks in the trajectory transformer.`,name:"block_size"},{anchor:"transformers.TrajectoryTransformerConfig.action_dim",description:`<strong>action_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Dimension of the action space.`,name:"action_dim"},{anchor:"transformers.TrajectoryTransformerConfig.observation_dim",description:`<strong>observation_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 17) &#x2014;
Dimension of the observation space.`,name:"observation_dim"},{anchor:"transformers.TrajectoryTransformerConfig.transition_dim",description:`<strong>transition_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 25) &#x2014;
Dimension of the transition space.`,name:"transition_dim"},{anchor:"transformers.TrajectoryTransformerConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.TrajectoryTransformerConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.TrajectoryTransformerConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.TrajectoryTransformerConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.TrajectoryTransformerConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.TrajectoryTransformerConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.TrajectoryTransformerConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.TrajectoryTransformerConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.TrajectoryTransformerConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/trajectory_transformer#transformers.TrajectoryTransformerModel">TrajectoryTransformerModel</a>`,name:"type_vocab_size"},{anchor:"transformers.TrajectoryTransformerConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.TrajectoryTransformerConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.TrajectoryTransformerConfig.kaiming_initializer_range",description:"<strong>kaiming_initializer_range</strong> (`float, <em>optional</em>, defaults to 1) &#x2014;\nA coefficient scaling the negative slope of the kaiming initializer rectifier for EinLinear layers.",name:"kaiming_initializer_range"},{anchor:"transformers.TrajectoryTransformerConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.
Example &#x2014;`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/trajectory_transformer/configuration_trajectory_transformer.py#L31"}}),I=new go({props:{anchor:"transformers.TrajectoryTransformerConfig.example",$$slots:{default:[$o]},$$scope:{ctx:R}}}),re=new Je({}),oe=new Ir({props:{name:"class transformers.TrajectoryTransformerModel",anchor:"transformers.TrajectoryTransformerModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TrajectoryTransformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/trajectory_transformer#transformers.TrajectoryTransformerConfig">TrajectoryTransformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/trajectory_transformer/modeling_trajectory_transformer.py#L406"}}),ne=new Ir({props:{name:"forward",anchor:"transformers.TrajectoryTransformerModel.forward",parameters:[{name:"trajectories",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"targets",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.TrajectoryTransformerModel.forward.trajectories",description:`<strong>trajectories</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Batch of trajectories, where a trajectory is a sequence of states, actions and rewards.`,name:"trajectories"},{anchor:"transformers.TrajectoryTransformerModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>, <em>optional</em>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TrajectoryTransformerModel.forward.targets",description:`<strong>targets</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Desired targets used to compute the loss.`,name:"targets"},{anchor:"transformers.TrajectoryTransformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TrajectoryTransformerModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TrajectoryTransformerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TrajectoryTransformerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TrajectoryTransformerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/trajectory_transformer/modeling_trajectory_transformer.py#L467",returnDescription:`
<p>A <code>transformers.models.trajectory_transformer.modeling_trajectory_transformer.TrajectoryTransformerOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/trajectory_transformer#transformers.TrajectoryTransformerConfig"
>TrajectoryTransformerConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</li>
<li><strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of length <code>config.n_layers</code>, containing tuples of tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>). Contains pre-computed hidden-states (key and values in the
attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. GPT2Attentions weights after the attention softmax, used to compute the weighted average
in the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.trajectory_transformer.modeling_trajectory_transformer.TrajectoryTransformerOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),H=new wo({props:{$$slots:{default:[ko]},$$scope:{ctx:R}}}),B=new go({props:{anchor:"transformers.TrajectoryTransformerModel.forward.example",$$slots:{default:[Co]},$$scope:{ctx:R}}}),{c(){d=t("meta"),_=p(),m=t("h1"),u=t("a"),y=t("span"),w(f.$$.fragment),T=p(),S=t("span"),Ue=s("Trajectory Transformer"),Ee=p(),E=t("h2"),N=t("a"),ye=t("span"),w(U.$$.fragment),Qe=p(),ve=t("span"),Ke=s("Overview"),qe=p(),F=t("p"),Xe=s("The Trajectory Transformer model was proposed in "),Q=t("a"),Ye=s("Offline Reinforcement Learning as One Big Sequence Modeling Problem"),Ze=s("  by Michael Janner, Qiyang Li, Sergey Levine."),Pe=p(),ie=t("p"),er=s("The abstract from the paper is the following:"),Le=p(),le=t("p"),je=t("em"),rr=s(`Reinforcement learning (RL) is typically concerned with estimating stationary policies or single-step models,
leveraging the Markov property to factorize problems in time. However, we can also view RL as a generic sequence
modeling problem, with the goal being to produce a sequence of actions that leads to a sequence of high rewards.
Viewed in this way, it is tempting to consider whether high-capacity sequence prediction models that work well
in other domains, such as natural-language processing, can also provide effective solutions to the RL problem.
To this end, we explore how RL can be tackled with the tools of sequence modeling, using a Transformer architecture
to model distributions over trajectories and repurposing beam search as a planning algorithm. Framing RL as sequence
modeling problem simplifies a range of design decisions, allowing us to dispense with many of the components common
in offline RL algorithms. We demonstrate the flexibility of this approach across long-horizon dynamics prediction,
imitation learning, goal-conditioned RL, and offline RL. Further, we show that this approach can be combined with
existing model-free algorithms to yield a state-of-the-art planner in sparse-reward, long-horizon tasks.`),Ae=p(),ce=t("p"),or=s("Tips:"),Oe=p(),de=t("p"),tr=s(`This Transformer is used for deep reinforcement learning. To use it, you need to create sequences from
actions, states and rewards from all previous timesteps. This model will treat all these elements together
as one big sequence (a trajectory).`),Re=p(),M=t("p"),ar=s("This model was contributed by "),K=t("a"),nr=s("CarlCochet"),sr=s(". The original code can be found "),X=t("a"),ir=s("here"),lr=s("."),Se=p(),q=t("h2"),D=t("a"),be=t("span"),w(Y.$$.fragment),cr=p(),we=t("span"),dr=s("TrajectoryTransformerConfig"),Ne=p(),v=t("div"),w(Z.$$.fragment),mr=p(),P=t("p"),fr=s("This is the configuration class to store the configuration of a "),me=t("a"),hr=s("TrajectoryTransformerModel"),pr=s(`. It is used to
instantiate an TrajectoryTransformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
TrajectoryTransformer
`),ee=t("a"),gr=s("CarlCochet/trajectory-transformer-halfcheetah-medium-v2"),ur=s(`
architecture.`),_r=p(),L=t("p"),Tr=s("Configuration objects inherit from "),fe=t("a"),yr=s("PretrainedConfig"),vr=s(` and can be used to control the model outputs. Read the
documentation from `),he=t("a"),jr=s("PretrainedConfig"),br=s(" for more information."),wr=p(),w(I.$$.fragment),Fe=p(),A=t("h2"),W=t("a"),$e=t("span"),w(re.$$.fragment),$r=p(),ke=t("span"),kr=s("TrajectoryTransformerModel"),De=p(),j=t("div"),w(oe.$$.fragment),Cr=p(),te=t("p"),xr=s(`The bare TrajectoryTransformer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ae=t("a"),zr=s("torch.nn.Module"),Mr=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Er=p(),Ce=t("p"),qr=s("the full GPT language model, with a context size of block_size"),Pr=p(),b=t("div"),w(ne.$$.fragment),Lr=p(),O=t("p"),Ar=s("The "),pe=t("a"),Or=s("TrajectoryTransformerModel"),Rr=s(" forward method, overrides the "),xe=t("code"),Sr=s("__call__"),Nr=s(" special method."),Fr=p(),w(H.$$.fragment),Dr=p(),w(B.$$.fragment),this.h()},l(e){const c=jo('[data-svelte="svelte-1phssyn"]',document.head);d=a(c,"META",{name:!0,content:!0}),c.forEach(o),_=g(e),m=a(e,"H1",{class:!0});var se=n(m);u=a(se,"A",{id:!0,class:!0,href:!0});var ze=n(u);y=a(ze,"SPAN",{});var Me=n(y);$(f.$$.fragment,Me),Me.forEach(o),ze.forEach(o),T=g(se),S=a(se,"SPAN",{});var Wr=n(S);Ue=i(Wr,"Trajectory Transformer"),Wr.forEach(o),se.forEach(o),Ee=g(e),E=a(e,"H2",{class:!0});var We=n(E);N=a(We,"A",{id:!0,class:!0,href:!0});var Hr=n(N);ye=a(Hr,"SPAN",{});var Br=n(ye);$(U.$$.fragment,Br),Br.forEach(o),Hr.forEach(o),Qe=g(We),ve=a(We,"SPAN",{});var Vr=n(ve);Ke=i(Vr,"Overview"),Vr.forEach(o),We.forEach(o),qe=g(e),F=a(e,"P",{});var He=n(F);Xe=i(He,"The Trajectory Transformer model was proposed in "),Q=a(He,"A",{href:!0,rel:!0});var Gr=n(Q);Ye=i(Gr,"Offline Reinforcement Learning as One Big Sequence Modeling Problem"),Gr.forEach(o),Ze=i(He,"  by Michael Janner, Qiyang Li, Sergey Levine."),He.forEach(o),Pe=g(e),ie=a(e,"P",{});var Jr=n(ie);er=i(Jr,"The abstract from the paper is the following:"),Jr.forEach(o),Le=g(e),le=a(e,"P",{});var Ur=n(le);je=a(Ur,"EM",{});var Qr=n(je);rr=i(Qr,`Reinforcement learning (RL) is typically concerned with estimating stationary policies or single-step models,
leveraging the Markov property to factorize problems in time. However, we can also view RL as a generic sequence
modeling problem, with the goal being to produce a sequence of actions that leads to a sequence of high rewards.
Viewed in this way, it is tempting to consider whether high-capacity sequence prediction models that work well
in other domains, such as natural-language processing, can also provide effective solutions to the RL problem.
To this end, we explore how RL can be tackled with the tools of sequence modeling, using a Transformer architecture
to model distributions over trajectories and repurposing beam search as a planning algorithm. Framing RL as sequence
modeling problem simplifies a range of design decisions, allowing us to dispense with many of the components common
in offline RL algorithms. We demonstrate the flexibility of this approach across long-horizon dynamics prediction,
imitation learning, goal-conditioned RL, and offline RL. Further, we show that this approach can be combined with
existing model-free algorithms to yield a state-of-the-art planner in sparse-reward, long-horizon tasks.`),Qr.forEach(o),Ur.forEach(o),Ae=g(e),ce=a(e,"P",{});var Kr=n(ce);or=i(Kr,"Tips:"),Kr.forEach(o),Oe=g(e),de=a(e,"P",{});var Xr=n(de);tr=i(Xr,`This Transformer is used for deep reinforcement learning. To use it, you need to create sequences from
actions, states and rewards from all previous timesteps. This model will treat all these elements together
as one big sequence (a trajectory).`),Xr.forEach(o),Re=g(e),M=a(e,"P",{});var ge=n(M);ar=i(ge,"This model was contributed by "),K=a(ge,"A",{href:!0,rel:!0});var Yr=n(K);nr=i(Yr,"CarlCochet"),Yr.forEach(o),sr=i(ge,". The original code can be found "),X=a(ge,"A",{href:!0,rel:!0});var Zr=n(X);ir=i(Zr,"here"),Zr.forEach(o),lr=i(ge,"."),ge.forEach(o),Se=g(e),q=a(e,"H2",{class:!0});var Be=n(q);D=a(Be,"A",{id:!0,class:!0,href:!0});var eo=n(D);be=a(eo,"SPAN",{});var ro=n(be);$(Y.$$.fragment,ro),ro.forEach(o),eo.forEach(o),cr=g(Be),we=a(Be,"SPAN",{});var oo=n(we);dr=i(oo,"TrajectoryTransformerConfig"),oo.forEach(o),Be.forEach(o),Ne=g(e),v=a(e,"DIV",{class:!0});var V=n(v);$(Z.$$.fragment,V),mr=g(V),P=a(V,"P",{});var ue=n(P);fr=i(ue,"This is the configuration class to store the configuration of a "),me=a(ue,"A",{href:!0});var to=n(me);hr=i(to,"TrajectoryTransformerModel"),to.forEach(o),pr=i(ue,`. It is used to
instantiate an TrajectoryTransformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
TrajectoryTransformer
`),ee=a(ue,"A",{href:!0,rel:!0});var ao=n(ee);gr=i(ao,"CarlCochet/trajectory-transformer-halfcheetah-medium-v2"),ao.forEach(o),ur=i(ue,`
architecture.`),ue.forEach(o),_r=g(V),L=a(V,"P",{});var _e=n(L);Tr=i(_e,"Configuration objects inherit from "),fe=a(_e,"A",{href:!0});var no=n(fe);yr=i(no,"PretrainedConfig"),no.forEach(o),vr=i(_e,` and can be used to control the model outputs. Read the
documentation from `),he=a(_e,"A",{href:!0});var so=n(he);jr=i(so,"PretrainedConfig"),so.forEach(o),br=i(_e," for more information."),_e.forEach(o),wr=g(V),$(I.$$.fragment,V),V.forEach(o),Fe=g(e),A=a(e,"H2",{class:!0});var Ve=n(A);W=a(Ve,"A",{id:!0,class:!0,href:!0});var io=n(W);$e=a(io,"SPAN",{});var lo=n($e);$(re.$$.fragment,lo),lo.forEach(o),io.forEach(o),$r=g(Ve),ke=a(Ve,"SPAN",{});var co=n(ke);kr=i(co,"TrajectoryTransformerModel"),co.forEach(o),Ve.forEach(o),De=g(e),j=a(e,"DIV",{class:!0});var G=n(j);$(oe.$$.fragment,G),Cr=g(G),te=a(G,"P",{});var Ge=n(te);xr=i(Ge,`The bare TrajectoryTransformer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ae=a(Ge,"A",{href:!0,rel:!0});var mo=n(ae);zr=i(mo,"torch.nn.Module"),mo.forEach(o),Mr=i(Ge,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ge.forEach(o),Er=g(G),Ce=a(G,"P",{});var fo=n(Ce);qr=i(fo,"the full GPT language model, with a context size of block_size"),fo.forEach(o),Pr=g(G),b=a(G,"DIV",{class:!0});var J=n(b);$(ne.$$.fragment,J),Lr=g(J),O=a(J,"P",{});var Te=n(O);Ar=i(Te,"The "),pe=a(Te,"A",{href:!0});var ho=n(pe);Or=i(ho,"TrajectoryTransformerModel"),ho.forEach(o),Rr=i(Te," forward method, overrides the "),xe=a(Te,"CODE",{});var po=n(xe);Sr=i(po,"__call__"),po.forEach(o),Nr=i(Te," special method."),Te.forEach(o),Fr=g(J),$(H.$$.fragment,J),Dr=g(J),$(B.$$.fragment,J),J.forEach(o),G.forEach(o),this.h()},h(){l(d,"name","hf:doc:metadata"),l(d,"content",JSON.stringify(zo)),l(u,"id","trajectory-transformer"),l(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(u,"href","#trajectory-transformer"),l(m,"class","relative group"),l(N,"id","overview"),l(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(N,"href","#overview"),l(E,"class","relative group"),l(Q,"href","https://arxiv.org/abs/2106.02039"),l(Q,"rel","nofollow"),l(K,"href","https://huggingface.co/CarlCochet"),l(K,"rel","nofollow"),l(X,"href","https://github.com/jannerm/trajectory-transformer"),l(X,"rel","nofollow"),l(D,"id","transformers.TrajectoryTransformerConfig"),l(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(D,"href","#transformers.TrajectoryTransformerConfig"),l(q,"class","relative group"),l(me,"href","/docs/transformers/v4.22.1/en/model_doc/trajectory_transformer#transformers.TrajectoryTransformerModel"),l(ee,"href","https://huggingface.co/CarlCochet/trajectory-transformer-halfcheetah-medium-v2"),l(ee,"rel","nofollow"),l(fe,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),l(he,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),l(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(W,"id","transformers.TrajectoryTransformerModel"),l(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(W,"href","#transformers.TrajectoryTransformerModel"),l(A,"class","relative group"),l(ae,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ae,"rel","nofollow"),l(pe,"href","/docs/transformers/v4.22.1/en/model_doc/trajectory_transformer#transformers.TrajectoryTransformerModel"),l(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,c){r(document.head,d),h(e,_,c),h(e,m,c),r(m,u),r(u,y),k(f,y,null),r(m,T),r(m,S),r(S,Ue),h(e,Ee,c),h(e,E,c),r(E,N),r(N,ye),k(U,ye,null),r(E,Qe),r(E,ve),r(ve,Ke),h(e,qe,c),h(e,F,c),r(F,Xe),r(F,Q),r(Q,Ye),r(F,Ze),h(e,Pe,c),h(e,ie,c),r(ie,er),h(e,Le,c),h(e,le,c),r(le,je),r(je,rr),h(e,Ae,c),h(e,ce,c),r(ce,or),h(e,Oe,c),h(e,de,c),r(de,tr),h(e,Re,c),h(e,M,c),r(M,ar),r(M,K),r(K,nr),r(M,sr),r(M,X),r(X,ir),r(M,lr),h(e,Se,c),h(e,q,c),r(q,D),r(D,be),k(Y,be,null),r(q,cr),r(q,we),r(we,dr),h(e,Ne,c),h(e,v,c),k(Z,v,null),r(v,mr),r(v,P),r(P,fr),r(P,me),r(me,hr),r(P,pr),r(P,ee),r(ee,gr),r(P,ur),r(v,_r),r(v,L),r(L,Tr),r(L,fe),r(fe,yr),r(L,vr),r(L,he),r(he,jr),r(L,br),r(v,wr),k(I,v,null),h(e,Fe,c),h(e,A,c),r(A,W),r(W,$e),k(re,$e,null),r(A,$r),r(A,ke),r(ke,kr),h(e,De,c),h(e,j,c),k(oe,j,null),r(j,Cr),r(j,te),r(te,xr),r(te,ae),r(ae,zr),r(te,Mr),r(j,Er),r(j,Ce),r(Ce,qr),r(j,Pr),r(j,b),k(ne,b,null),r(b,Lr),r(b,O),r(O,Ar),r(O,pe),r(pe,Or),r(O,Rr),r(O,xe),r(xe,Sr),r(O,Nr),r(b,Fr),k(H,b,null),r(b,Dr),k(B,b,null),Ie=!0},p(e,[c]){const se={};c&2&&(se.$$scope={dirty:c,ctx:e}),I.$set(se);const ze={};c&2&&(ze.$$scope={dirty:c,ctx:e}),H.$set(ze);const Me={};c&2&&(Me.$$scope={dirty:c,ctx:e}),B.$set(Me)},i(e){Ie||(C(f.$$.fragment,e),C(U.$$.fragment,e),C(Y.$$.fragment,e),C(Z.$$.fragment,e),C(I.$$.fragment,e),C(re.$$.fragment,e),C(oe.$$.fragment,e),C(ne.$$.fragment,e),C(H.$$.fragment,e),C(B.$$.fragment,e),Ie=!0)},o(e){x(f.$$.fragment,e),x(U.$$.fragment,e),x(Y.$$.fragment,e),x(Z.$$.fragment,e),x(I.$$.fragment,e),x(re.$$.fragment,e),x(oe.$$.fragment,e),x(ne.$$.fragment,e),x(H.$$.fragment,e),x(B.$$.fragment,e),Ie=!1},d(e){o(d),e&&o(_),e&&o(m),z(f),e&&o(Ee),e&&o(E),z(U),e&&o(qe),e&&o(F),e&&o(Pe),e&&o(ie),e&&o(Le),e&&o(le),e&&o(Ae),e&&o(ce),e&&o(Oe),e&&o(de),e&&o(Re),e&&o(M),e&&o(Se),e&&o(q),z(Y),e&&o(Ne),e&&o(v),z(Z),z(I),e&&o(Fe),e&&o(A),z(re),e&&o(De),e&&o(j),z(oe),z(ne),z(H),z(B)}}}const zo={local:"trajectory-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.TrajectoryTransformerConfig",title:"TrajectoryTransformerConfig"},{local:"transformers.TrajectoryTransformerModel",title:"TrajectoryTransformerModel"}],title:"Trajectory Transformer"};function Mo(R){return bo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ro extends To{constructor(d){super();yo(this,d,Mo,xo,vo,{})}}export{Ro as default,zo as metadata};
