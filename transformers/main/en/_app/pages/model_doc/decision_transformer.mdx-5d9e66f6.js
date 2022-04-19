import{S as Bo,i as Ko,s as Uo,e as r,k as d,w as T,t as i,M as Vo,c as n,d as o,m,a as s,x as b,h as c,b as a,F as t,g as f,y,q as w,o as D,B as $,v as Wo}from"../../chunks/vendor-6b77c823.js";import{T as Jo}from"../../chunks/Tip-39098574.js";import{D as Fe}from"../../chunks/Docstring-1088f2fb.js";import{C as Ho}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ie}from"../../chunks/IconCopyLink-7a11ce68.js";function Qo(Ge){let h,I,p,j,P;return{c(){h=r("p"),I=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r("code"),j=i("Module"),P=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var x=s(h);I=c(x,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(x,"CODE",{});var G=s(p);j=c(G,"Module"),G.forEach(o),P=c(x,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),x.forEach(o)},m(_,x){f(_,h,x),t(h,I),t(h,p),t(p,j),t(h,P)},d(_){_&&o(h)}}}function Xo(Ge){let h,I,p,j,P,_,x,G,ct,Se,C,S,je,V,lt,xe,dt,Oe,z,mt,W,ft,ht,pt,He,fe,ut,Be,he,ke,gt,Ke,pe,_t,Ue,ue,vt,Ve,k,Tt,J,bt,yt,Q,wt,Dt,We,A,O,Ee,X,$t,Me,jt,Je,u,Y,xt,Z,kt,ge,Et,Mt,Pt,N,Ct,_e,zt,At,ve,Nt,qt,Lt,Pe,Rt,Ft,ee,Qe,q,H,Ce,te,It,ze,Gt,Xe,L,oe,St,Te,re,Ye,R,B,Ae,ne,Ot,Ne,Ht,Ze,v,se,Bt,ae,Kt,ie,Ut,Vt,Wt,be,Jt,ce,Qt,Xt,g,le,Yt,F,Zt,ye,eo,to,qe,oo,ro,no,K,so,Le,ao,io,de,et;return _=new Ie({}),V=new Ie({}),X=new Ie({}),Y=new Fe({props:{name:"class transformers.DecisionTransformerConfig",anchor:"transformers.DecisionTransformerConfig",parameters:[{name:"state_dim",val:" = 17"},{name:"act_dim",val:" = 4"},{name:"hidden_size",val:" = 128"},{name:"max_ep_len",val:" = 4096"},{name:"action_tanh",val:" = True"},{name:"vocab_size",val:" = 1"},{name:"n_positions",val:" = 1024"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 3"},{name:"n_head",val:" = 1"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'relu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"scale_attn_by_inverse_layer_idx",val:" = False"},{name:"reorder_and_upcast_attn",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DecisionTransformerConfig.state_dim",description:`<strong>state_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 17) &#x2014;
The state size for the RL environment`,name:"state_dim"},{anchor:"transformers.DecisionTransformerConfig.act_dim",description:`<strong>act_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The size of the output action space`,name:"act_dim"},{anchor:"transformers.DecisionTransformerConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The size of the hidden layers`,name:"hidden_size"},{anchor:"transformers.DecisionTransformerConfig.max_ep_len",description:`<strong>max_ep_len</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
The maximum length of an episode in the environment`,name:"max_ep_len"},{anchor:"transformers.DecisionTransformerConfig.action_tanh",description:`<strong>action_tanh</strong> (<code>bool</code>, <em>optional</em>, defaults to True) &#x2014;
Whether to use a tanh activation on action prediction`,name:"action_tanh"},{anchor:"transformers.DecisionTransformerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/decision_transformer#transformers.DecisionTransformerModel">DecisionTransformerModel</a>.`,name:"vocab_size"},{anchor:"transformers.DecisionTransformerConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.DecisionTransformerConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.DecisionTransformerConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.DecisionTransformerConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.DecisionTransformerConfig.n_inner",description:`<strong>n_inner</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Dimensionality of the inner feed-forward layers. If unset, will default to 4 times <code>n_embd</code>.`,name:"n_inner"},{anchor:"transformers.DecisionTransformerConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
Activation function, to be selected in the list <code>[&quot;relu&quot;, &quot;silu&quot;, &quot;gelu&quot;, &quot;tanh&quot;, &quot;gelu_new&quot;]</code>.`,name:"activation_function"},{anchor:"transformers.DecisionTransformerConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.DecisionTransformerConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.DecisionTransformerConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.DecisionTransformerConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.DecisionTransformerConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DecisionTransformerConfig.scale_attn_weights",description:`<strong>scale_attn_weights</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale attention weights by dividing by sqrt(hidden_size)..`,name:"scale_attn_weights"},{anchor:"transformers.DecisionTransformerConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.DecisionTransformerConfig.scale_attn_by_inverse_layer_idx",description:`<strong>scale_attn_by_inverse_layer_idx</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to additionally scale attention weights by <code>1 / layer_idx + 1</code>.`,name:"scale_attn_by_inverse_layer_idx"},{anchor:"transformers.DecisionTransformerConfig.reorder_and_upcast_attn",description:`<strong>reorder_and_upcast_attn</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to scale keys (K) prior to computing attention (dot-product) and upcast attention
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/decision_transformer/configuration_decision_transformer.py#L29"}}),ee=new Ho({props:{code:`from transformers import DecisionTransformerModel, DecisionTransformerConfig

# Initializing a DecisionTransformer configuration
configuration = DecisionTransformerConfig()

# Initializing a model from the configuration
model = DecisionTransformerConfig(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DecisionTransformerModel, DecisionTransformerConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DecisionTransformer configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DecisionTransformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DecisionTransformerConfig(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),te=new Ie({}),oe=new Fe({props:{name:"class transformers.DecisionTransformerGPT2Model",anchor:"transformers.DecisionTransformerGPT2Model",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/decision_transformer/modeling_decision_transformer.py#L479"}}),re=new Fe({props:{name:"forward",anchor:"transformers.DecisionTransformerGPT2Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/decision_transformer/modeling_decision_transformer.py#L511"}}),ne=new Ie({}),se=new Fe({props:{name:"class transformers.DecisionTransformerModel",anchor:"transformers.DecisionTransformerModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DecisionTransformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/decision_transformer#transformers.DecisionTransformerConfig">~DecisionTransformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/decision_transformer/modeling_decision_transformer.py#L800"}}),le=new Fe({props:{name:"forward",anchor:"transformers.DecisionTransformerModel.forward",parameters:[{name:"states",val:" = None"},{name:"actions",val:" = None"},{name:"rewards",val:" = None"},{name:"returns_to_go",val:" = None"},{name:"timesteps",val:" = None"},{name:"attention_mask",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"output_attentions",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DecisionTransformerModel.forward.states",description:`<strong>states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, episode_length, state_dim)</code>) &#x2014;
The states for each step in the trajectory`,name:"states"},{anchor:"transformers.DecisionTransformerModel.forward.actions",description:`<strong>actions</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, episode_length, act_dim)</code>) &#x2014;
The actions taken by the &#x201C;expert&#x201D; policy for the current state, these are masked for auto regressive
prediction`,name:"actions"},{anchor:"transformers.DecisionTransformerModel.forward.rewards",description:`<strong>rewards</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, episode_length, 1)</code>) &#x2014;
The rewards for each state, action`,name:"rewards"},{anchor:"transformers.DecisionTransformerModel.forward.returns_to_go",description:`<strong>returns_to_go</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, episode_length, 1)</code>) &#x2014;
The returns for each state in the trajectory`,name:"returns_to_go"},{anchor:"transformers.DecisionTransformerModel.forward.timesteps",description:`<strong>timesteps</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, episode_length)</code>) &#x2014;
The timestep for each step in the trajectory`,name:"timesteps"},{anchor:"transformers.DecisionTransformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, episode_length)</code>) &#x2014;
Masking, used to mask the actions when performing autoregressive prediction`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/decision_transformer/modeling_decision_transformer.py#L833",returnDescription:`
<p>A <code>transformers.models.decision_transformer.modeling_decision_transformer.DecisionTransformerOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/decision_transformer#transformers.DecisionTransformerConfig"
>DecisionTransformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>state_preds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, state_dim)</code>) \u2014 Environment state predictions</p>
</li>
<li>
<p><strong>action_preds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, action_dim)</code>) \u2014 Model action predictions</p>
</li>
<li>
<p><strong>return_preds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, 1)</code>) \u2014 Predicted returns for each state</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.decision_transformer.modeling_decision_transformer.DecisionTransformerOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),K=new Jo({props:{$$slots:{default:[Qo]},$$scope:{ctx:Ge}}}),de=new Ho({props:{code:`from transformers import DecisionTransformerModel
import torch

model = DecisionTransformerModel.from_pretrained("edbeeching/decision-transformer-gym-hopper-medium")
# evaluation
model = model.to(device)
model.eval()

env = gym.make("Hopper-v3")
state_dim = env.observation_space.shape[0]
act_dim = env.action_space.shape[0]

state = env.reset()
states = torch.from_numpy(state).reshape(1, 1, state_dim).to(device=device, dtype=torch.float32)
actions = torch.zeros((1, 1, act_dim), device=device, dtype=torch.float32)
rewards = torch.zeros(1, 1, device=device, dtype=torch.float32)
target_return = torch.tensor(TARGET_RETURN, dtype=torch.float32).reshape(1, 1)
timesteps = torch.tensor(0, device=device, dtype=torch.long).reshape(1, 1)
attention_mask = torch.zeros(1, 1, device=device, dtype=torch.float32)

# forward pass
with torch.no_grad():
    state_preds, action_preds, return_preds = model(
        states=states,
        actions=actions,
        rewards=rewards,
        returns_to_go=target_return,
        timesteps=timesteps,
        attention_mask=attention_mask,
        return_dict=False,
    )`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DecisionTransformerModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = DecisionTransformerModel.from_pretrained(<span class="hljs-string">&quot;edbeeching/decision-transformer-gym-hopper-medium&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># evaluation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = model.to(device)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">eval</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>env = gym.make(<span class="hljs-string">&quot;Hopper-v3&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>state_dim = env.observation_space.shape[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>act_dim = env.action_space.shape[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>state = env.reset()
<span class="hljs-meta">&gt;&gt;&gt; </span>states = torch.from_numpy(state).reshape(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, state_dim).to(device=device, dtype=torch.float32)
<span class="hljs-meta">&gt;&gt;&gt; </span>actions = torch.zeros((<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, act_dim), device=device, dtype=torch.float32)
<span class="hljs-meta">&gt;&gt;&gt; </span>rewards = torch.zeros(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, device=device, dtype=torch.float32)
<span class="hljs-meta">&gt;&gt;&gt; </span>target_return = torch.tensor(TARGET_RETURN, dtype=torch.float32).reshape(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>timesteps = torch.tensor(<span class="hljs-number">0</span>, device=device, dtype=torch.long).reshape(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = torch.zeros(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, device=device, dtype=torch.float32)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    state_preds, action_preds, return_preds = model(
<span class="hljs-meta">... </span>        states=states,
<span class="hljs-meta">... </span>        actions=actions,
<span class="hljs-meta">... </span>        rewards=rewards,
<span class="hljs-meta">... </span>        returns_to_go=target_return,
<span class="hljs-meta">... </span>        timesteps=timesteps,
<span class="hljs-meta">... </span>        attention_mask=attention_mask,
<span class="hljs-meta">... </span>        return_dict=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    )`}}),{c(){h=r("meta"),I=d(),p=r("h1"),j=r("a"),P=r("span"),T(_.$$.fragment),x=d(),G=r("span"),ct=i("Decision Transformer"),Se=d(),C=r("h2"),S=r("a"),je=r("span"),T(V.$$.fragment),lt=d(),xe=r("span"),dt=i("Overview"),Oe=d(),z=r("p"),mt=i("The Decision Transformer model was proposed in "),W=r("a"),ft=i("Decision Transformer: Reinforcement Learning via Sequence Modeling"),ht=r("br"),pt=i(`
by Lili Chen, Kevin Lu, Aravind Rajeswaran, Kimin Lee, Aditya Grover, Michael Laskin, Pieter Abbeel, Aravind Srinivas, Igor Mordatch.`),He=d(),fe=r("p"),ut=i("The abstract from the paper is the following:"),Be=d(),he=r("p"),ke=r("em"),gt=i(`We introduce a framework that abstracts Reinforcement Learning (RL) as a sequence modeling problem.
This allows us to draw upon the simplicity and scalability of the Transformer architecture, and associated advances
in language modeling such as GPT-x and BERT. In particular, we present Decision Transformer, an architecture that
casts the problem of RL as conditional sequence modeling. Unlike prior approaches to RL that fit value functions or
compute policy gradients, Decision Transformer simply outputs the optimal actions by leveraging a causally masked
Transformer. By conditioning an autoregressive model on the desired return (reward), past states, and actions, our
Decision Transformer model can generate future actions that achieve the desired return. Despite its simplicity,
Decision Transformer matches or exceeds the performance of state-of-the-art model-free offline RL baselines on
Atari, OpenAI Gym, and Key-to-Door tasks.`),Ke=d(),pe=r("p"),_t=i("Tips:"),Ue=d(),ue=r("p"),vt=i("This version of the model is for tasks where the state is a vector, image-based states will come soon."),Ve=d(),k=r("p"),Tt=i("This model was contributed by "),J=r("a"),bt=i("edbeeching"),yt=i(". The original code can be found "),Q=r("a"),wt=i("here"),Dt=i("."),We=d(),A=r("h2"),O=r("a"),Ee=r("span"),T(X.$$.fragment),$t=d(),Me=r("span"),jt=i("DecisionTransformerConfig"),Je=d(),u=r("div"),T(Y.$$.fragment),xt=d(),Z=r("p"),kt=i("This is the configuration class to store the configuration of a "),ge=r("a"),Et=i("DecisionTransformerModel"),Mt=i(`. It is used to
instantiate a Decision Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the standard
DecisionTransformer architecture. Many of the config options are used to instatiate the GPT2 model that is used as
part of the architecture.`),Pt=d(),N=r("p"),Ct=i("Configuration objects inherit from "),_e=r("a"),zt=i("PretrainedConfig"),At=i(` and can be used to control the model outputs. Read the
documentation from `),ve=r("a"),Nt=i("PretrainedConfig"),qt=i(" for more information."),Lt=d(),Pe=r("p"),Rt=i("Example:"),Ft=d(),T(ee.$$.fragment),Qe=d(),q=r("h2"),H=r("a"),Ce=r("span"),T(te.$$.fragment),It=d(),ze=r("span"),Gt=i("DecisionTransformerGPT2Model"),Xe=d(),L=r("div"),T(oe.$$.fragment),St=d(),Te=r("div"),T(re.$$.fragment),Ye=d(),R=r("h2"),B=r("a"),Ae=r("span"),T(ne.$$.fragment),Ot=d(),Ne=r("span"),Ht=i("DecisionTransformerModel"),Ze=d(),v=r("div"),T(se.$$.fragment),Bt=d(),ae=r("p"),Kt=i(`The Decision Transformer Model
This model is a PyTorch `),ie=r("a"),Ut=i("torch.nn.Module"),Vt=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wt=d(),be=r("p"),Jt=i(`The model builds upon the GPT2 architecture to perform autoregressive prediction of actions in an offline RL
setting. Refer to the paper for more details: `),ce=r("a"),Qt=i("https://arxiv.org/abs/2106.01345"),Xt=d(),g=r("div"),T(le.$$.fragment),Yt=d(),F=r("p"),Zt=i("The "),ye=r("a"),eo=i("DecisionTransformerModel"),to=i(" forward method, overrides the "),qe=r("code"),oo=i("__call__"),ro=i(" special method."),no=d(),T(K.$$.fragment),so=d(),Le=r("p"),ao=i("Examples:"),io=d(),T(de.$$.fragment),this.h()},l(e){const l=Vo('[data-svelte="svelte-1phssyn"]',document.head);h=n(l,"META",{name:!0,content:!0}),l.forEach(o),I=m(e),p=n(e,"H1",{class:!0});var me=s(p);j=n(me,"A",{id:!0,class:!0,href:!0});var lo=s(j);P=n(lo,"SPAN",{});var mo=s(P);b(_.$$.fragment,mo),mo.forEach(o),lo.forEach(o),x=m(me),G=n(me,"SPAN",{});var fo=s(G);ct=c(fo,"Decision Transformer"),fo.forEach(o),me.forEach(o),Se=m(e),C=n(e,"H2",{class:!0});var tt=s(C);S=n(tt,"A",{id:!0,class:!0,href:!0});var ho=s(S);je=n(ho,"SPAN",{});var po=s(je);b(V.$$.fragment,po),po.forEach(o),ho.forEach(o),lt=m(tt),xe=n(tt,"SPAN",{});var uo=s(xe);dt=c(uo,"Overview"),uo.forEach(o),tt.forEach(o),Oe=m(e),z=n(e,"P",{});var Re=s(z);mt=c(Re,"The Decision Transformer model was proposed in "),W=n(Re,"A",{href:!0,rel:!0});var go=s(W);ft=c(go,"Decision Transformer: Reinforcement Learning via Sequence Modeling"),go.forEach(o),ht=n(Re,"BR",{}),pt=c(Re,`
by Lili Chen, Kevin Lu, Aravind Rajeswaran, Kimin Lee, Aditya Grover, Michael Laskin, Pieter Abbeel, Aravind Srinivas, Igor Mordatch.`),Re.forEach(o),He=m(e),fe=n(e,"P",{});var _o=s(fe);ut=c(_o,"The abstract from the paper is the following:"),_o.forEach(o),Be=m(e),he=n(e,"P",{});var vo=s(he);ke=n(vo,"EM",{});var To=s(ke);gt=c(To,`We introduce a framework that abstracts Reinforcement Learning (RL) as a sequence modeling problem.
This allows us to draw upon the simplicity and scalability of the Transformer architecture, and associated advances
in language modeling such as GPT-x and BERT. In particular, we present Decision Transformer, an architecture that
casts the problem of RL as conditional sequence modeling. Unlike prior approaches to RL that fit value functions or
compute policy gradients, Decision Transformer simply outputs the optimal actions by leveraging a causally masked
Transformer. By conditioning an autoregressive model on the desired return (reward), past states, and actions, our
Decision Transformer model can generate future actions that achieve the desired return. Despite its simplicity,
Decision Transformer matches or exceeds the performance of state-of-the-art model-free offline RL baselines on
Atari, OpenAI Gym, and Key-to-Door tasks.`),To.forEach(o),vo.forEach(o),Ke=m(e),pe=n(e,"P",{});var bo=s(pe);_t=c(bo,"Tips:"),bo.forEach(o),Ue=m(e),ue=n(e,"P",{});var yo=s(ue);vt=c(yo,"This version of the model is for tasks where the state is a vector, image-based states will come soon."),yo.forEach(o),Ve=m(e),k=n(e,"P",{});var we=s(k);Tt=c(we,"This model was contributed by "),J=n(we,"A",{href:!0,rel:!0});var wo=s(J);bt=c(wo,"edbeeching"),wo.forEach(o),yt=c(we,". The original code can be found "),Q=n(we,"A",{href:!0,rel:!0});var Do=s(Q);wt=c(Do,"here"),Do.forEach(o),Dt=c(we,"."),we.forEach(o),We=m(e),A=n(e,"H2",{class:!0});var ot=s(A);O=n(ot,"A",{id:!0,class:!0,href:!0});var $o=s(O);Ee=n($o,"SPAN",{});var jo=s(Ee);b(X.$$.fragment,jo),jo.forEach(o),$o.forEach(o),$t=m(ot),Me=n(ot,"SPAN",{});var xo=s(Me);jt=c(xo,"DecisionTransformerConfig"),xo.forEach(o),ot.forEach(o),Je=m(e),u=n(e,"DIV",{class:!0});var E=s(u);b(Y.$$.fragment,E),xt=m(E),Z=n(E,"P",{});var rt=s(Z);kt=c(rt,"This is the configuration class to store the configuration of a "),ge=n(rt,"A",{href:!0});var ko=s(ge);Et=c(ko,"DecisionTransformerModel"),ko.forEach(o),Mt=c(rt,`. It is used to
instantiate a Decision Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the standard
DecisionTransformer architecture. Many of the config options are used to instatiate the GPT2 model that is used as
part of the architecture.`),rt.forEach(o),Pt=m(E),N=n(E,"P",{});var De=s(N);Ct=c(De,"Configuration objects inherit from "),_e=n(De,"A",{href:!0});var Eo=s(_e);zt=c(Eo,"PretrainedConfig"),Eo.forEach(o),At=c(De,` and can be used to control the model outputs. Read the
documentation from `),ve=n(De,"A",{href:!0});var Mo=s(ve);Nt=c(Mo,"PretrainedConfig"),Mo.forEach(o),qt=c(De," for more information."),De.forEach(o),Lt=m(E),Pe=n(E,"P",{});var Po=s(Pe);Rt=c(Po,"Example:"),Po.forEach(o),Ft=m(E),b(ee.$$.fragment,E),E.forEach(o),Qe=m(e),q=n(e,"H2",{class:!0});var nt=s(q);H=n(nt,"A",{id:!0,class:!0,href:!0});var Co=s(H);Ce=n(Co,"SPAN",{});var zo=s(Ce);b(te.$$.fragment,zo),zo.forEach(o),Co.forEach(o),It=m(nt),ze=n(nt,"SPAN",{});var Ao=s(ze);Gt=c(Ao,"DecisionTransformerGPT2Model"),Ao.forEach(o),nt.forEach(o),Xe=m(e),L=n(e,"DIV",{class:!0});var st=s(L);b(oe.$$.fragment,st),St=m(st),Te=n(st,"DIV",{class:!0});var No=s(Te);b(re.$$.fragment,No),No.forEach(o),st.forEach(o),Ye=m(e),R=n(e,"H2",{class:!0});var at=s(R);B=n(at,"A",{id:!0,class:!0,href:!0});var qo=s(B);Ae=n(qo,"SPAN",{});var Lo=s(Ae);b(ne.$$.fragment,Lo),Lo.forEach(o),qo.forEach(o),Ot=m(at),Ne=n(at,"SPAN",{});var Ro=s(Ne);Ht=c(Ro,"DecisionTransformerModel"),Ro.forEach(o),at.forEach(o),Ze=m(e),v=n(e,"DIV",{class:!0});var U=s(v);b(se.$$.fragment,U),Bt=m(U),ae=n(U,"P",{});var it=s(ae);Kt=c(it,`The Decision Transformer Model
This model is a PyTorch `),ie=n(it,"A",{href:!0,rel:!0});var Fo=s(ie);Ut=c(Fo,"torch.nn.Module"),Fo.forEach(o),Vt=c(it,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),it.forEach(o),Wt=m(U),be=n(U,"P",{});var co=s(be);Jt=c(co,`The model builds upon the GPT2 architecture to perform autoregressive prediction of actions in an offline RL
setting. Refer to the paper for more details: `),ce=n(co,"A",{href:!0,rel:!0});var Io=s(ce);Qt=c(Io,"https://arxiv.org/abs/2106.01345"),Io.forEach(o),co.forEach(o),Xt=m(U),g=n(U,"DIV",{class:!0});var M=s(g);b(le.$$.fragment,M),Yt=m(M),F=n(M,"P",{});var $e=s(F);Zt=c($e,"The "),ye=n($e,"A",{href:!0});var Go=s(ye);eo=c(Go,"DecisionTransformerModel"),Go.forEach(o),to=c($e," forward method, overrides the "),qe=n($e,"CODE",{});var So=s(qe);oo=c(So,"__call__"),So.forEach(o),ro=c($e," special method."),$e.forEach(o),no=m(M),b(K.$$.fragment,M),so=m(M),Le=n(M,"P",{});var Oo=s(Le);ao=c(Oo,"Examples:"),Oo.forEach(o),io=m(M),b(de.$$.fragment,M),M.forEach(o),U.forEach(o),this.h()},h(){a(h,"name","hf:doc:metadata"),a(h,"content",JSON.stringify(Yo)),a(j,"id","decision-transformer"),a(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(j,"href","#decision-transformer"),a(p,"class","relative group"),a(S,"id","overview"),a(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(S,"href","#overview"),a(C,"class","relative group"),a(W,"href","https://arxiv.org/abs/2106.01345"),a(W,"rel","nofollow"),a(J,"href","https://huggingface.co/edbeeching"),a(J,"rel","nofollow"),a(Q,"href","https://github.com/kzl/decision-transformer"),a(Q,"rel","nofollow"),a(O,"id","transformers.DecisionTransformerConfig"),a(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(O,"href","#transformers.DecisionTransformerConfig"),a(A,"class","relative group"),a(ge,"href","/docs/transformers/main/en/model_doc/decision_transformer#transformers.DecisionTransformerModel"),a(_e,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),a(ve,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),a(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),a(H,"id","transformers.DecisionTransformerGPT2Model"),a(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(H,"href","#transformers.DecisionTransformerGPT2Model"),a(q,"class","relative group"),a(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),a(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),a(B,"id","transformers.DecisionTransformerModel"),a(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(B,"href","#transformers.DecisionTransformerModel"),a(R,"class","relative group"),a(ie,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),a(ie,"rel","nofollow"),a(ce,"href","https://arxiv.org/abs/2106.01345"),a(ce,"rel","nofollow"),a(ye,"href","/docs/transformers/main/en/model_doc/decision_transformer#transformers.DecisionTransformerModel"),a(g,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),a(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,l){t(document.head,h),f(e,I,l),f(e,p,l),t(p,j),t(j,P),y(_,P,null),t(p,x),t(p,G),t(G,ct),f(e,Se,l),f(e,C,l),t(C,S),t(S,je),y(V,je,null),t(C,lt),t(C,xe),t(xe,dt),f(e,Oe,l),f(e,z,l),t(z,mt),t(z,W),t(W,ft),t(z,ht),t(z,pt),f(e,He,l),f(e,fe,l),t(fe,ut),f(e,Be,l),f(e,he,l),t(he,ke),t(ke,gt),f(e,Ke,l),f(e,pe,l),t(pe,_t),f(e,Ue,l),f(e,ue,l),t(ue,vt),f(e,Ve,l),f(e,k,l),t(k,Tt),t(k,J),t(J,bt),t(k,yt),t(k,Q),t(Q,wt),t(k,Dt),f(e,We,l),f(e,A,l),t(A,O),t(O,Ee),y(X,Ee,null),t(A,$t),t(A,Me),t(Me,jt),f(e,Je,l),f(e,u,l),y(Y,u,null),t(u,xt),t(u,Z),t(Z,kt),t(Z,ge),t(ge,Et),t(Z,Mt),t(u,Pt),t(u,N),t(N,Ct),t(N,_e),t(_e,zt),t(N,At),t(N,ve),t(ve,Nt),t(N,qt),t(u,Lt),t(u,Pe),t(Pe,Rt),t(u,Ft),y(ee,u,null),f(e,Qe,l),f(e,q,l),t(q,H),t(H,Ce),y(te,Ce,null),t(q,It),t(q,ze),t(ze,Gt),f(e,Xe,l),f(e,L,l),y(oe,L,null),t(L,St),t(L,Te),y(re,Te,null),f(e,Ye,l),f(e,R,l),t(R,B),t(B,Ae),y(ne,Ae,null),t(R,Ot),t(R,Ne),t(Ne,Ht),f(e,Ze,l),f(e,v,l),y(se,v,null),t(v,Bt),t(v,ae),t(ae,Kt),t(ae,ie),t(ie,Ut),t(ae,Vt),t(v,Wt),t(v,be),t(be,Jt),t(be,ce),t(ce,Qt),t(v,Xt),t(v,g),y(le,g,null),t(g,Yt),t(g,F),t(F,Zt),t(F,ye),t(ye,eo),t(F,to),t(F,qe),t(qe,oo),t(F,ro),t(g,no),y(K,g,null),t(g,so),t(g,Le),t(Le,ao),t(g,io),y(de,g,null),et=!0},p(e,[l]){const me={};l&2&&(me.$$scope={dirty:l,ctx:e}),K.$set(me)},i(e){et||(w(_.$$.fragment,e),w(V.$$.fragment,e),w(X.$$.fragment,e),w(Y.$$.fragment,e),w(ee.$$.fragment,e),w(te.$$.fragment,e),w(oe.$$.fragment,e),w(re.$$.fragment,e),w(ne.$$.fragment,e),w(se.$$.fragment,e),w(le.$$.fragment,e),w(K.$$.fragment,e),w(de.$$.fragment,e),et=!0)},o(e){D(_.$$.fragment,e),D(V.$$.fragment,e),D(X.$$.fragment,e),D(Y.$$.fragment,e),D(ee.$$.fragment,e),D(te.$$.fragment,e),D(oe.$$.fragment,e),D(re.$$.fragment,e),D(ne.$$.fragment,e),D(se.$$.fragment,e),D(le.$$.fragment,e),D(K.$$.fragment,e),D(de.$$.fragment,e),et=!1},d(e){o(h),e&&o(I),e&&o(p),$(_),e&&o(Se),e&&o(C),$(V),e&&o(Oe),e&&o(z),e&&o(He),e&&o(fe),e&&o(Be),e&&o(he),e&&o(Ke),e&&o(pe),e&&o(Ue),e&&o(ue),e&&o(Ve),e&&o(k),e&&o(We),e&&o(A),$(X),e&&o(Je),e&&o(u),$(Y),$(ee),e&&o(Qe),e&&o(q),$(te),e&&o(Xe),e&&o(L),$(oe),$(re),e&&o(Ye),e&&o(R),$(ne),e&&o(Ze),e&&o(v),$(se),$(le),$(K),$(de)}}}const Yo={local:"decision-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.DecisionTransformerConfig",title:"DecisionTransformerConfig"},{local:"transformers.DecisionTransformerGPT2Model",title:"DecisionTransformerGPT2Model"},{local:"transformers.DecisionTransformerModel",title:"DecisionTransformerModel"}],title:"Decision Transformer"};function Zo(Ge){return Wo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sr extends Bo{constructor(h){super();Ko(this,h,Zo,Xo,Uo,{})}}export{sr as default,Yo as metadata};
