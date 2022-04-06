import{S as Bo,i as Ko,s as Uo,e as n,k as d,w as T,t as i,M as Vo,c as r,d as o,m,a as s,x as b,h as c,b as a,F as t,g as f,y as w,q as y,o as D,B as $,v as Wo}from"../../chunks/vendor-6b77c823.js";import{T as Jo}from"../../chunks/Tip-39098574.js";import{D as Fe}from"../../chunks/Docstring-abef54e3.js";import{C as Ho}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ie}from"../../chunks/IconCopyLink-7a11ce68.js";function Qo(Ge){let h,I,p,j,P;return{c(){h=n("p"),I=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),j=i("Module"),P=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=r(_,"P",{});var k=s(h);I=c(k,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(k,"CODE",{});var G=s(p);j=c(G,"Module"),G.forEach(o),P=c(k,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),k.forEach(o)},m(_,k){f(_,h,k),t(h,I),t(h,p),t(p,j),t(h,P)},d(_){_&&o(h)}}}function Xo(Ge){let h,I,p,j,P,_,k,G,ct,Se,C,S,je,V,lt,ke,dt,Oe,z,mt,W,ft,ht,pt,He,fe,ut,Be,he,xe,gt,Ke,pe,_t,Ue,ue,vt,Ve,x,Tt,J,bt,wt,Q,yt,Dt,We,A,O,Ee,X,$t,Me,jt,Je,u,Y,kt,Z,xt,ge,Et,Mt,Pt,N,Ct,_e,zt,At,ve,Nt,qt,Lt,Pe,Rt,Ft,ee,Qe,q,H,Ce,te,It,ze,Gt,Xe,L,oe,St,Te,ne,Ye,R,B,Ae,re,Ot,Ne,Ht,Ze,v,se,Bt,ae,Kt,ie,Ut,Vt,Wt,be,Jt,ce,Qt,Xt,g,le,Yt,F,Zt,we,eo,to,qe,oo,no,ro,K,so,Le,ao,io,de,et;return _=new Ie({}),V=new Ie({}),X=new Ie({}),Y=new Fe({props:{name:"class transformers.DecisionTransformerConfig",anchor:"transformers.DecisionTransformerConfig",parameters:[{name:"state_dim",val:" = 17"},{name:"act_dim",val:" = 4"},{name:"hidden_size",val:" = 128"},{name:"max_ep_len",val:" = 4096"},{name:"action_tanh",val:" = True"},{name:"vocab_size",val:" = 1"},{name:"n_positions",val:" = 1024"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 3"},{name:"n_head",val:" = 1"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'relu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"scale_attn_by_inverse_layer_idx",val:" = False"},{name:"reorder_and_upcast_attn",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/decision_transformer/configuration_decision_transformer.py#L29",parametersDescription:[{anchor:"transformers.DecisionTransformerConfig.state_dim",description:`<strong>state_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 17) &#x2014;
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
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"}]}}),ee=new Ho({props:{code:`from transformers import DecisionTransformerModel, DecisionTransformerConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),te=new Ie({}),oe=new Fe({props:{name:"class transformers.DecisionTransformerGPT2Model",anchor:"transformers.DecisionTransformerGPT2Model",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/decision_transformer/modeling_decision_transformer.py#L478"}}),ne=new Fe({props:{name:"forward",anchor:"transformers.DecisionTransformerGPT2Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/decision_transformer/modeling_decision_transformer.py#L510"}}),re=new Ie({}),se=new Fe({props:{name:"class transformers.DecisionTransformerModel",anchor:"transformers.DecisionTransformerModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/decision_transformer/modeling_decision_transformer.py#L799",parametersDescription:[{anchor:"transformers.DecisionTransformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/decision_transformer#transformers.DecisionTransformerConfig">~DecisionTransformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),le=new Fe({props:{name:"forward",anchor:"transformers.DecisionTransformerModel.forward",parameters:[{name:"states",val:" = None"},{name:"actions",val:" = None"},{name:"rewards",val:" = None"},{name:"returns_to_go",val:" = None"},{name:"timesteps",val:" = None"},{name:"attention_mask",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"output_attentions",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/decision_transformer/modeling_decision_transformer.py#L832",parametersDescription:[{anchor:"transformers.DecisionTransformerModel.forward.states",description:`<strong>states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, episode_length, state_dim)</code>) &#x2014;
The states for each step in the trajectory`,name:"states"},{anchor:"transformers.DecisionTransformerModel.forward.actions",description:`<strong>actions</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, episode_length, act_dim)</code>) &#x2014;
The actions taken by the &#x201C;expert&#x201D; policy for the current state, these are masked for auto regressive
prediction`,name:"actions"},{anchor:"transformers.DecisionTransformerModel.forward.rewards",description:`<strong>rewards</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, episode_length, 1)</code>) &#x2014;
The rewards for each state, action`,name:"rewards"},{anchor:"transformers.DecisionTransformerModel.forward.returns_to_go",description:`<strong>returns_to_go</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, episode_length, 1)</code>) &#x2014;
The returns for each state in the trajectory`,name:"returns_to_go"},{anchor:"transformers.DecisionTransformerModel.forward.timesteps",description:`<strong>timesteps</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, episode_length)</code>) &#x2014;
The timestep for each step in the trajectory`,name:"timesteps"},{anchor:"transformers.DecisionTransformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, episode_length)</code>) &#x2014;
Masking, used to mask the actions when performing autoregressive prediction`,name:"attention_mask"}],returnDescription:`
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
<span class="hljs-meta">... </span>    )`}}),{c(){h=n("meta"),I=d(),p=n("h1"),j=n("a"),P=n("span"),T(_.$$.fragment),k=d(),G=n("span"),ct=i("Decision Transformer"),Se=d(),C=n("h2"),S=n("a"),je=n("span"),T(V.$$.fragment),lt=d(),ke=n("span"),dt=i("Overview"),Oe=d(),z=n("p"),mt=i("The Decision Transformer model was proposed in "),W=n("a"),ft=i("Decision Transformer: Reinforcement Learning via Sequence Modeling"),ht=n("br"),pt=i(`
by Lili Chen, Kevin Lu, Aravind Rajeswaran, Kimin Lee, Aditya Grover, Michael Laskin, Pieter Abbeel, Aravind Srinivas, Igor Mordatch.`),He=d(),fe=n("p"),ut=i("The abstract from the paper is the following:"),Be=d(),he=n("p"),xe=n("em"),gt=i(`We introduce a framework that abstracts Reinforcement Learning (RL) as a sequence modeling problem.
This allows us to draw upon the simplicity and scalability of the Transformer architecture, and associated advances
in language modeling such as GPT-x and BERT. In particular, we present Decision Transformer, an architecture that
casts the problem of RL as conditional sequence modeling. Unlike prior approaches to RL that fit value functions or
compute policy gradients, Decision Transformer simply outputs the optimal actions by leveraging a causally masked
Transformer. By conditioning an autoregressive model on the desired return (reward), past states, and actions, our
Decision Transformer model can generate future actions that achieve the desired return. Despite its simplicity,
Decision Transformer matches or exceeds the performance of state-of-the-art model-free offline RL baselines on
Atari, OpenAI Gym, and Key-to-Door tasks.`),Ke=d(),pe=n("p"),_t=i("Tips:"),Ue=d(),ue=n("p"),vt=i("This version of the model is for tasks where the state is a vector, image-based states will come soon."),Ve=d(),x=n("p"),Tt=i("This model was contributed by "),J=n("a"),bt=i("edbeeching"),wt=i(". The original code can be found "),Q=n("a"),yt=i("here"),Dt=i("."),We=d(),A=n("h2"),O=n("a"),Ee=n("span"),T(X.$$.fragment),$t=d(),Me=n("span"),jt=i("DecisionTransformerConfig"),Je=d(),u=n("div"),T(Y.$$.fragment),kt=d(),Z=n("p"),xt=i("This is the configuration class to store the configuration of a "),ge=n("a"),Et=i("DecisionTransformerModel"),Mt=i(`. It is used to
instantiate a Decision Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the standard
DecisionTransformer architecture. Many of the config options are used to instatiate the GPT2 model that is used as
part of the architecture.`),Pt=d(),N=n("p"),Ct=i("Configuration objects inherit from "),_e=n("a"),zt=i("PretrainedConfig"),At=i(` and can be used to control the model outputs. Read the
documentation from `),ve=n("a"),Nt=i("PretrainedConfig"),qt=i(" for more information."),Lt=d(),Pe=n("p"),Rt=i("Example:"),Ft=d(),T(ee.$$.fragment),Qe=d(),q=n("h2"),H=n("a"),Ce=n("span"),T(te.$$.fragment),It=d(),ze=n("span"),Gt=i("DecisionTransformerGPT2Model"),Xe=d(),L=n("div"),T(oe.$$.fragment),St=d(),Te=n("div"),T(ne.$$.fragment),Ye=d(),R=n("h2"),B=n("a"),Ae=n("span"),T(re.$$.fragment),Ot=d(),Ne=n("span"),Ht=i("DecisionTransformerModel"),Ze=d(),v=n("div"),T(se.$$.fragment),Bt=d(),ae=n("p"),Kt=i(`The Decision Transformer Model
This model is a PyTorch `),ie=n("a"),Ut=i("torch.nn.Module"),Vt=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wt=d(),be=n("p"),Jt=i(`The model builds upon the GPT2 architecture to perform autoregressive prediction of actions in an offline RL
setting. Refer to the paper for more details: `),ce=n("a"),Qt=i("https://arxiv.org/abs/2106.01345"),Xt=d(),g=n("div"),T(le.$$.fragment),Yt=d(),F=n("p"),Zt=i("The "),we=n("a"),eo=i("DecisionTransformerModel"),to=i(" forward method, overrides the "),qe=n("code"),oo=i("__call__"),no=i(" special method."),ro=d(),T(K.$$.fragment),so=d(),Le=n("p"),ao=i("Examples:"),io=d(),T(de.$$.fragment),this.h()},l(e){const l=Vo('[data-svelte="svelte-1phssyn"]',document.head);h=r(l,"META",{name:!0,content:!0}),l.forEach(o),I=m(e),p=r(e,"H1",{class:!0});var me=s(p);j=r(me,"A",{id:!0,class:!0,href:!0});var lo=s(j);P=r(lo,"SPAN",{});var mo=s(P);b(_.$$.fragment,mo),mo.forEach(o),lo.forEach(o),k=m(me),G=r(me,"SPAN",{});var fo=s(G);ct=c(fo,"Decision Transformer"),fo.forEach(o),me.forEach(o),Se=m(e),C=r(e,"H2",{class:!0});var tt=s(C);S=r(tt,"A",{id:!0,class:!0,href:!0});var ho=s(S);je=r(ho,"SPAN",{});var po=s(je);b(V.$$.fragment,po),po.forEach(o),ho.forEach(o),lt=m(tt),ke=r(tt,"SPAN",{});var uo=s(ke);dt=c(uo,"Overview"),uo.forEach(o),tt.forEach(o),Oe=m(e),z=r(e,"P",{});var Re=s(z);mt=c(Re,"The Decision Transformer model was proposed in "),W=r(Re,"A",{href:!0,rel:!0});var go=s(W);ft=c(go,"Decision Transformer: Reinforcement Learning via Sequence Modeling"),go.forEach(o),ht=r(Re,"BR",{}),pt=c(Re,`
by Lili Chen, Kevin Lu, Aravind Rajeswaran, Kimin Lee, Aditya Grover, Michael Laskin, Pieter Abbeel, Aravind Srinivas, Igor Mordatch.`),Re.forEach(o),He=m(e),fe=r(e,"P",{});var _o=s(fe);ut=c(_o,"The abstract from the paper is the following:"),_o.forEach(o),Be=m(e),he=r(e,"P",{});var vo=s(he);xe=r(vo,"EM",{});var To=s(xe);gt=c(To,`We introduce a framework that abstracts Reinforcement Learning (RL) as a sequence modeling problem.
This allows us to draw upon the simplicity and scalability of the Transformer architecture, and associated advances
in language modeling such as GPT-x and BERT. In particular, we present Decision Transformer, an architecture that
casts the problem of RL as conditional sequence modeling. Unlike prior approaches to RL that fit value functions or
compute policy gradients, Decision Transformer simply outputs the optimal actions by leveraging a causally masked
Transformer. By conditioning an autoregressive model on the desired return (reward), past states, and actions, our
Decision Transformer model can generate future actions that achieve the desired return. Despite its simplicity,
Decision Transformer matches or exceeds the performance of state-of-the-art model-free offline RL baselines on
Atari, OpenAI Gym, and Key-to-Door tasks.`),To.forEach(o),vo.forEach(o),Ke=m(e),pe=r(e,"P",{});var bo=s(pe);_t=c(bo,"Tips:"),bo.forEach(o),Ue=m(e),ue=r(e,"P",{});var wo=s(ue);vt=c(wo,"This version of the model is for tasks where the state is a vector, image-based states will come soon."),wo.forEach(o),Ve=m(e),x=r(e,"P",{});var ye=s(x);Tt=c(ye,"This model was contributed by "),J=r(ye,"A",{href:!0,rel:!0});var yo=s(J);bt=c(yo,"edbeeching"),yo.forEach(o),wt=c(ye,". The original code can be found "),Q=r(ye,"A",{href:!0,rel:!0});var Do=s(Q);yt=c(Do,"here"),Do.forEach(o),Dt=c(ye,"."),ye.forEach(o),We=m(e),A=r(e,"H2",{class:!0});var ot=s(A);O=r(ot,"A",{id:!0,class:!0,href:!0});var $o=s(O);Ee=r($o,"SPAN",{});var jo=s(Ee);b(X.$$.fragment,jo),jo.forEach(o),$o.forEach(o),$t=m(ot),Me=r(ot,"SPAN",{});var ko=s(Me);jt=c(ko,"DecisionTransformerConfig"),ko.forEach(o),ot.forEach(o),Je=m(e),u=r(e,"DIV",{class:!0});var E=s(u);b(Y.$$.fragment,E),kt=m(E),Z=r(E,"P",{});var nt=s(Z);xt=c(nt,"This is the configuration class to store the configuration of a "),ge=r(nt,"A",{href:!0});var xo=s(ge);Et=c(xo,"DecisionTransformerModel"),xo.forEach(o),Mt=c(nt,`. It is used to
instantiate a Decision Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the standard
DecisionTransformer architecture. Many of the config options are used to instatiate the GPT2 model that is used as
part of the architecture.`),nt.forEach(o),Pt=m(E),N=r(E,"P",{});var De=s(N);Ct=c(De,"Configuration objects inherit from "),_e=r(De,"A",{href:!0});var Eo=s(_e);zt=c(Eo,"PretrainedConfig"),Eo.forEach(o),At=c(De,` and can be used to control the model outputs. Read the
documentation from `),ve=r(De,"A",{href:!0});var Mo=s(ve);Nt=c(Mo,"PretrainedConfig"),Mo.forEach(o),qt=c(De," for more information."),De.forEach(o),Lt=m(E),Pe=r(E,"P",{});var Po=s(Pe);Rt=c(Po,"Example:"),Po.forEach(o),Ft=m(E),b(ee.$$.fragment,E),E.forEach(o),Qe=m(e),q=r(e,"H2",{class:!0});var rt=s(q);H=r(rt,"A",{id:!0,class:!0,href:!0});var Co=s(H);Ce=r(Co,"SPAN",{});var zo=s(Ce);b(te.$$.fragment,zo),zo.forEach(o),Co.forEach(o),It=m(rt),ze=r(rt,"SPAN",{});var Ao=s(ze);Gt=c(Ao,"DecisionTransformerGPT2Model"),Ao.forEach(o),rt.forEach(o),Xe=m(e),L=r(e,"DIV",{class:!0});var st=s(L);b(oe.$$.fragment,st),St=m(st),Te=r(st,"DIV",{class:!0});var No=s(Te);b(ne.$$.fragment,No),No.forEach(o),st.forEach(o),Ye=m(e),R=r(e,"H2",{class:!0});var at=s(R);B=r(at,"A",{id:!0,class:!0,href:!0});var qo=s(B);Ae=r(qo,"SPAN",{});var Lo=s(Ae);b(re.$$.fragment,Lo),Lo.forEach(o),qo.forEach(o),Ot=m(at),Ne=r(at,"SPAN",{});var Ro=s(Ne);Ht=c(Ro,"DecisionTransformerModel"),Ro.forEach(o),at.forEach(o),Ze=m(e),v=r(e,"DIV",{class:!0});var U=s(v);b(se.$$.fragment,U),Bt=m(U),ae=r(U,"P",{});var it=s(ae);Kt=c(it,`The Decision Transformer Model
This model is a PyTorch `),ie=r(it,"A",{href:!0,rel:!0});var Fo=s(ie);Ut=c(Fo,"torch.nn.Module"),Fo.forEach(o),Vt=c(it,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),it.forEach(o),Wt=m(U),be=r(U,"P",{});var co=s(be);Jt=c(co,`The model builds upon the GPT2 architecture to perform autoregressive prediction of actions in an offline RL
setting. Refer to the paper for more details: `),ce=r(co,"A",{href:!0,rel:!0});var Io=s(ce);Qt=c(Io,"https://arxiv.org/abs/2106.01345"),Io.forEach(o),co.forEach(o),Xt=m(U),g=r(U,"DIV",{class:!0});var M=s(g);b(le.$$.fragment,M),Yt=m(M),F=r(M,"P",{});var $e=s(F);Zt=c($e,"The "),we=r($e,"A",{href:!0});var Go=s(we);eo=c(Go,"DecisionTransformerModel"),Go.forEach(o),to=c($e," forward method, overrides the "),qe=r($e,"CODE",{});var So=s(qe);oo=c(So,"__call__"),So.forEach(o),no=c($e," special method."),$e.forEach(o),ro=m(M),b(K.$$.fragment,M),so=m(M),Le=r(M,"P",{});var Oo=s(Le);ao=c(Oo,"Examples:"),Oo.forEach(o),io=m(M),b(de.$$.fragment,M),M.forEach(o),U.forEach(o),this.h()},h(){a(h,"name","hf:doc:metadata"),a(h,"content",JSON.stringify(Yo)),a(j,"id","decision-transformer"),a(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(j,"href","#decision-transformer"),a(p,"class","relative group"),a(S,"id","overview"),a(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(S,"href","#overview"),a(C,"class","relative group"),a(W,"href","https://arxiv.org/abs/2106.01345"),a(W,"rel","nofollow"),a(J,"href","https://huggingface.co/edbeeching"),a(J,"rel","nofollow"),a(Q,"href","https://github.com/kzl/decision-transformer"),a(Q,"rel","nofollow"),a(O,"id","transformers.DecisionTransformerConfig"),a(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(O,"href","#transformers.DecisionTransformerConfig"),a(A,"class","relative group"),a(ge,"href","/docs/transformers/main/en/model_doc/decision_transformer#transformers.DecisionTransformerModel"),a(_e,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),a(ve,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),a(u,"class","docstring"),a(H,"id","transformers.DecisionTransformerGPT2Model"),a(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(H,"href","#transformers.DecisionTransformerGPT2Model"),a(q,"class","relative group"),a(Te,"class","docstring"),a(L,"class","docstring"),a(B,"id","transformers.DecisionTransformerModel"),a(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(B,"href","#transformers.DecisionTransformerModel"),a(R,"class","relative group"),a(ie,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),a(ie,"rel","nofollow"),a(ce,"href","https://arxiv.org/abs/2106.01345"),a(ce,"rel","nofollow"),a(we,"href","/docs/transformers/main/en/model_doc/decision_transformer#transformers.DecisionTransformerModel"),a(g,"class","docstring"),a(v,"class","docstring")},m(e,l){t(document.head,h),f(e,I,l),f(e,p,l),t(p,j),t(j,P),w(_,P,null),t(p,k),t(p,G),t(G,ct),f(e,Se,l),f(e,C,l),t(C,S),t(S,je),w(V,je,null),t(C,lt),t(C,ke),t(ke,dt),f(e,Oe,l),f(e,z,l),t(z,mt),t(z,W),t(W,ft),t(z,ht),t(z,pt),f(e,He,l),f(e,fe,l),t(fe,ut),f(e,Be,l),f(e,he,l),t(he,xe),t(xe,gt),f(e,Ke,l),f(e,pe,l),t(pe,_t),f(e,Ue,l),f(e,ue,l),t(ue,vt),f(e,Ve,l),f(e,x,l),t(x,Tt),t(x,J),t(J,bt),t(x,wt),t(x,Q),t(Q,yt),t(x,Dt),f(e,We,l),f(e,A,l),t(A,O),t(O,Ee),w(X,Ee,null),t(A,$t),t(A,Me),t(Me,jt),f(e,Je,l),f(e,u,l),w(Y,u,null),t(u,kt),t(u,Z),t(Z,xt),t(Z,ge),t(ge,Et),t(Z,Mt),t(u,Pt),t(u,N),t(N,Ct),t(N,_e),t(_e,zt),t(N,At),t(N,ve),t(ve,Nt),t(N,qt),t(u,Lt),t(u,Pe),t(Pe,Rt),t(u,Ft),w(ee,u,null),f(e,Qe,l),f(e,q,l),t(q,H),t(H,Ce),w(te,Ce,null),t(q,It),t(q,ze),t(ze,Gt),f(e,Xe,l),f(e,L,l),w(oe,L,null),t(L,St),t(L,Te),w(ne,Te,null),f(e,Ye,l),f(e,R,l),t(R,B),t(B,Ae),w(re,Ae,null),t(R,Ot),t(R,Ne),t(Ne,Ht),f(e,Ze,l),f(e,v,l),w(se,v,null),t(v,Bt),t(v,ae),t(ae,Kt),t(ae,ie),t(ie,Ut),t(ae,Vt),t(v,Wt),t(v,be),t(be,Jt),t(be,ce),t(ce,Qt),t(v,Xt),t(v,g),w(le,g,null),t(g,Yt),t(g,F),t(F,Zt),t(F,we),t(we,eo),t(F,to),t(F,qe),t(qe,oo),t(F,no),t(g,ro),w(K,g,null),t(g,so),t(g,Le),t(Le,ao),t(g,io),w(de,g,null),et=!0},p(e,[l]){const me={};l&2&&(me.$$scope={dirty:l,ctx:e}),K.$set(me)},i(e){et||(y(_.$$.fragment,e),y(V.$$.fragment,e),y(X.$$.fragment,e),y(Y.$$.fragment,e),y(ee.$$.fragment,e),y(te.$$.fragment,e),y(oe.$$.fragment,e),y(ne.$$.fragment,e),y(re.$$.fragment,e),y(se.$$.fragment,e),y(le.$$.fragment,e),y(K.$$.fragment,e),y(de.$$.fragment,e),et=!0)},o(e){D(_.$$.fragment,e),D(V.$$.fragment,e),D(X.$$.fragment,e),D(Y.$$.fragment,e),D(ee.$$.fragment,e),D(te.$$.fragment,e),D(oe.$$.fragment,e),D(ne.$$.fragment,e),D(re.$$.fragment,e),D(se.$$.fragment,e),D(le.$$.fragment,e),D(K.$$.fragment,e),D(de.$$.fragment,e),et=!1},d(e){o(h),e&&o(I),e&&o(p),$(_),e&&o(Se),e&&o(C),$(V),e&&o(Oe),e&&o(z),e&&o(He),e&&o(fe),e&&o(Be),e&&o(he),e&&o(Ke),e&&o(pe),e&&o(Ue),e&&o(ue),e&&o(Ve),e&&o(x),e&&o(We),e&&o(A),$(X),e&&o(Je),e&&o(u),$(Y),$(ee),e&&o(Qe),e&&o(q),$(te),e&&o(Xe),e&&o(L),$(oe),$(ne),e&&o(Ye),e&&o(R),$(re),e&&o(Ze),e&&o(v),$(se),$(le),$(K),$(de)}}}const Yo={local:"decision-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.DecisionTransformerConfig",title:"DecisionTransformerConfig"},{local:"transformers.DecisionTransformerGPT2Model",title:"DecisionTransformerGPT2Model"},{local:"transformers.DecisionTransformerModel",title:"DecisionTransformerModel"}],title:"Decision Transformer"};function Zo(Ge){return Wo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sn extends Bo{constructor(h){super();Ko(this,h,Zo,Xo,Uo,{})}}export{sn as default,Yo as metadata};
