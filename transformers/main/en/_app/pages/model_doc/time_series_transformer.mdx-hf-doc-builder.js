import{S as Sn,i as xn,s as $n,e as r,k as m,w as b,t as o,M as En,c as n,d as t,m as f,a as i,x as w,h as s,b as h,G as e,g,y,q as k,o as S,B as x,v as qn,L as pr}from"../../chunks/vendor-hf-doc-builder.js";import{T as fr}from"../../chunks/Tip-hf-doc-builder.js";import{D as to}from"../../chunks/Docstring-hf-doc-builder.js";import{C as _r}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as oo}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ur}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Cn(j){let d,T,c,p,v;return{c(){d=r("p"),T=o(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),c=r("a"),p=o("Github Issue"),v=o("."),this.h()},l(l){d=n(l,"P",{});var _=i(d);T=s(_,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),c=n(_,"A",{href:!0,rel:!0});var M=i(c);p=s(M,"Github Issue"),M.forEach(t),v=s(_,"."),_.forEach(t),this.h()},h(){h(c,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),h(c,"rel","nofollow")},m(l,_){g(l,d,_),e(d,T),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function jn(j){let d,T;return d=new _r({props:{code:`from transformers import TimeSeriesTransformerConfig, TimeSeriesTransformerModel

# Initializing a default Time Series Transformer configuration
configuration = TimeSeriesTransformerConfig()

# Randomly initializing a model (with random weights) from the configuration
model = TimeSeriesTransformerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TimeSeriesTransformerConfig, TimeSeriesTransformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a default Time Series Transformer configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = TimeSeriesTransformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Randomly initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TimeSeriesTransformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){b(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){y(d,c,p),T=!0},p:pr,i(c){T||(k(d.$$.fragment,c),T=!0)},o(c){S(d.$$.fragment,c),T=!1},d(c){x(d,c)}}}function Mn(j){let d,T,c,p,v;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var _=i(d);T=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(_,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){g(l,d,_),e(d,T),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Fn(j){let d,T,c,p,v;return p=new _r({props:{code:`from huggingface_hub import hf_hub_download
import torch
from transformers import TimeSeriesTransformerModel

file = hf_hub_download(
    repo_id="kashif/tourism-monthly-batch", filename="train-batch.pt", repo_type="dataset"
)
batch = torch.load(file)

model = TimeSeriesTransformerModel.from_pretrained("huggingface/time-series-transformer-tourism-monthly")

# during training, one provides both past and future values
# as well as possible additional features
outputs = model(
    past_values=batch["past_values"],
    past_time_features=batch["past_time_features"],
    past_observed_mask=batch["past_observed_mask"],
    static_categorical_features=batch["static_categorical_features"],
    static_real_features=batch["static_real_features"],
    future_values=batch["future_values"],
    future_time_features=batch["future_time_features"],
)

last_hidden_state = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TimeSeriesTransformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span>file = hf_hub_download(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;kashif/tourism-monthly-batch&quot;</span>, filename=<span class="hljs-string">&quot;train-batch.pt&quot;</span>, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = torch.load(file)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TimeSeriesTransformerModel.from_pretrained(<span class="hljs-string">&quot;huggingface/time-series-transformer-tourism-monthly&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># during training, one provides both past and future values</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># as well as possible additional features</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    past_values=batch[<span class="hljs-string">&quot;past_values&quot;</span>],
<span class="hljs-meta">... </span>    past_time_features=batch[<span class="hljs-string">&quot;past_time_features&quot;</span>],
<span class="hljs-meta">... </span>    past_observed_mask=batch[<span class="hljs-string">&quot;past_observed_mask&quot;</span>],
<span class="hljs-meta">... </span>    static_categorical_features=batch[<span class="hljs-string">&quot;static_categorical_features&quot;</span>],
<span class="hljs-meta">... </span>    static_real_features=batch[<span class="hljs-string">&quot;static_real_features&quot;</span>],
<span class="hljs-meta">... </span>    future_values=batch[<span class="hljs-string">&quot;future_values&quot;</span>],
<span class="hljs-meta">... </span>    future_time_features=batch[<span class="hljs-string">&quot;future_time_features&quot;</span>],
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state`}}),{c(){d=r("p"),T=o("Examples:"),c=m(),b(p.$$.fragment)},l(l){d=n(l,"P",{});var _=i(d);T=s(_,"Examples:"),_.forEach(t),c=f(l),w(p.$$.fragment,l)},m(l,_){g(l,d,_),e(d,T),g(l,c,_),y(p,l,_),v=!0},p:pr,i(l){v||(k(p.$$.fragment,l),v=!0)},o(l){S(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),x(p,l)}}}function Pn(j){let d,T,c,p,v;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var _=i(d);T=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(_,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){g(l,d,_),e(d,T),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function zn(j){let d,T,c,p,v;return p=new _r({props:{code:`from huggingface_hub import hf_hub_download
import torch
from transformers import TimeSeriesTransformerForPrediction

file = hf_hub_download(
    repo_id="kashif/tourism-monthly-batch", filename="train-batch.pt", repo_type="dataset"
)
batch = torch.load(file)

model = TimeSeriesTransformerForPrediction.from_pretrained(
    "huggingface/time-series-transformer-tourism-monthly"
)

# during training, one provides both past and future values
# as well as possible additional features
outputs = model(
    past_values=batch["past_values"],
    past_time_features=batch["past_time_features"],
    past_observed_mask=batch["past_observed_mask"],
    static_categorical_features=batch["static_categorical_features"],
    static_real_features=batch["static_real_features"],
    future_values=batch["future_values"],
    future_time_features=batch["future_time_features"],
)

loss = outputs.loss
loss.backward()

# during inference, one only provides past values
# as well as possible additional features
# the model autoregressively generates future values
outputs = model.generate(
    past_values=batch["past_values"],
    past_time_features=batch["past_time_features"],
    past_observed_mask=batch["past_observed_mask"],
    static_categorical_features=batch["static_categorical_features"],
    static_real_features=batch["static_real_features"],
    future_time_features=batch["future_time_features"],
)

mean_prediction = outputs.sequences.mean(dim=1)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TimeSeriesTransformerForPrediction

<span class="hljs-meta">&gt;&gt;&gt; </span>file = hf_hub_download(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;kashif/tourism-monthly-batch&quot;</span>, filename=<span class="hljs-string">&quot;train-batch.pt&quot;</span>, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = torch.load(file)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TimeSeriesTransformerForPrediction.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;huggingface/time-series-transformer-tourism-monthly&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># during training, one provides both past and future values</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># as well as possible additional features</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    past_values=batch[<span class="hljs-string">&quot;past_values&quot;</span>],
<span class="hljs-meta">... </span>    past_time_features=batch[<span class="hljs-string">&quot;past_time_features&quot;</span>],
<span class="hljs-meta">... </span>    past_observed_mask=batch[<span class="hljs-string">&quot;past_observed_mask&quot;</span>],
<span class="hljs-meta">... </span>    static_categorical_features=batch[<span class="hljs-string">&quot;static_categorical_features&quot;</span>],
<span class="hljs-meta">... </span>    static_real_features=batch[<span class="hljs-string">&quot;static_real_features&quot;</span>],
<span class="hljs-meta">... </span>    future_values=batch[<span class="hljs-string">&quot;future_values&quot;</span>],
<span class="hljs-meta">... </span>    future_time_features=batch[<span class="hljs-string">&quot;future_time_features&quot;</span>],
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># during inference, one only provides past values</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># as well as possible additional features</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the model autoregressively generates future values</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(
<span class="hljs-meta">... </span>    past_values=batch[<span class="hljs-string">&quot;past_values&quot;</span>],
<span class="hljs-meta">... </span>    past_time_features=batch[<span class="hljs-string">&quot;past_time_features&quot;</span>],
<span class="hljs-meta">... </span>    past_observed_mask=batch[<span class="hljs-string">&quot;past_observed_mask&quot;</span>],
<span class="hljs-meta">... </span>    static_categorical_features=batch[<span class="hljs-string">&quot;static_categorical_features&quot;</span>],
<span class="hljs-meta">... </span>    static_real_features=batch[<span class="hljs-string">&quot;static_real_features&quot;</span>],
<span class="hljs-meta">... </span>    future_time_features=batch[<span class="hljs-string">&quot;future_time_features&quot;</span>],
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>mean_prediction = outputs.sequences.mean(dim=<span class="hljs-number">1</span>)`}}),{c(){d=r("p"),T=o("Examples:"),c=m(),b(p.$$.fragment)},l(l){d=n(l,"P",{});var _=i(d);T=s(_,"Examples:"),_.forEach(t),c=f(l),w(p.$$.fragment,l)},m(l,_){g(l,d,_),e(d,T),g(l,c,_),y(p,l,_),v=!0},p:pr,i(l){v||(k(p.$$.fragment,l),v=!0)},o(l){S(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),x(p,l)}}}function On(j){let d,T,c,p,v,l,_,M,Co,so,te,ao,H,oe,lt,be,jo,ct,Mo,ro,Ue,Fo,no,He,Po,io,F,G,zo,Ge,Oo,Do,Ve,Ao,No,Io,$,Je,Lo,Bo,ht,Ro,Wo,mt,Uo,Ho,ft,Go,Vo,ut,Jo,Ko,pt,Qo,Xo,_t,Yo,Zo,es,R,ts,gt,os,ss,Tt,as,rs,L,se,vt,ns,is,bt,ds,ls,cs,ae,wt,hs,ms,yt,fs,us,ps,W,kt,_s,gs,St,Ts,vs,xt,bs,ws,ys,A,$t,ks,Ss,Et,xs,$s,qt,Es,qs,Ke,Cs,js,Ms,B,Fs,Ct,Ps,zs,jt,Os,Ds,Mt,As,Ns,Is,we,Ls,Ft,Bs,Rs,lo,re,Ws,Qe,Us,Hs,co,V,ne,Pt,ye,Gs,zt,Vs,ho,z,ke,Js,J,Ks,Xe,Qs,Xs,Se,Ys,Zs,ea,K,ta,Ye,oa,sa,Ze,aa,ra,na,ie,mo,Q,de,Ot,xe,ia,Dt,da,fo,O,$e,la,Ee,ca,et,ha,ma,fa,qe,ua,Ce,pa,_a,ga,N,je,Ta,X,va,tt,ba,wa,At,ya,ka,Sa,le,xa,ce,uo,Y,he,Nt,Me,$a,It,Ea,po,D,Fe,qa,Pe,Ca,ot,ja,Ma,Fa,ze,Pa,Oe,za,Oa,Da,E,De,Aa,Z,Na,st,Ia,La,Lt,Ba,Ra,Wa,me,Ua,q,Ha,Bt,Ga,Va,Rt,Ja,Ka,Wt,Qa,Xa,Ut,Ya,Za,Ht,er,tr,or,Ae,Ne,sr,Gt,ar,rr,nr,Ie,ir,Vt,dr,lr,cr,Jt,hr,mr,fe,_o;return l=new oo({}),te=new fr({props:{$$slots:{default:[Cn]},$$scope:{ctx:j}}}),be=new oo({}),ye=new oo({}),ke=new to({props:{name:"class transformers.TimeSeriesTransformerConfig",anchor:"transformers.TimeSeriesTransformerConfig",parameters:[{name:"input_size",val:": int = 1"},{name:"prediction_length",val:": typing.Optional[int] = None"},{name:"context_length",val:": typing.Optional[int] = None"},{name:"distribution_output",val:": str = 'student_t'"},{name:"loss",val:": str = 'nll'"},{name:"lags_sequence",val:": typing.List[int] = [1, 2, 3, 4, 5, 6, 7]"},{name:"scaling",val:": bool = True"},{name:"num_dynamic_real_features",val:": int = 0"},{name:"num_static_categorical_features",val:": int = 0"},{name:"num_static_real_features",val:": int = 0"},{name:"num_time_features",val:": int = 0"},{name:"cardinality",val:": typing.Optional[typing.List[int]] = None"},{name:"embedding_dimension",val:": typing.Optional[typing.List[int]] = None"},{name:"encoder_ffn_dim",val:": int = 32"},{name:"decoder_ffn_dim",val:": int = 32"},{name:"encoder_attention_heads",val:": int = 2"},{name:"decoder_attention_heads",val:": int = 2"},{name:"encoder_layers",val:": int = 2"},{name:"decoder_layers",val:": int = 2"},{name:"is_encoder_decoder",val:": bool = True"},{name:"activation_function",val:": str = 'gelu'"},{name:"dropout",val:": float = 0.1"},{name:"encoder_layerdrop",val:": float = 0.1"},{name:"decoder_layerdrop",val:": float = 0.1"},{name:"attention_dropout",val:": float = 0.1"},{name:"activation_dropout",val:": float = 0.1"},{name:"num_parallel_samples",val:": int = 100"},{name:"init_std",val:": float = 0.02"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TimeSeriesTransformerConfig.prediction_length",description:`<strong>prediction_length</strong> (<code>int</code>) &#x2014;
The prediction length for the decoder. In other words, the prediction horizon of the model.`,name:"prediction_length"},{anchor:"transformers.TimeSeriesTransformerConfig.context_length",description:`<strong>context_length</strong> (<code>int</code>, <em>optional</em>, defaults to <code>prediction_length</code>) &#x2014;
The context length for the encoder. If <code>None</code>, the context length will be the same as the
<code>prediction_length</code>.`,name:"context_length"},{anchor:"transformers.TimeSeriesTransformerConfig.distribution_output",description:`<strong>distribution_output</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;student_t&quot;</code>) &#x2014;
The distribution emission head for the model. Could be either &#x201C;student_t&#x201D;, &#x201C;normal&#x201D; or &#x201C;negative_binomial&#x201D;.`,name:"distribution_output"},{anchor:"transformers.TimeSeriesTransformerConfig.loss",description:`<strong>loss</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;nll&quot;</code>) &#x2014;
The loss function for the model corresponding to the <code>distribution_output</code> head. For parametric
distributions it is the negative log likelihood (nll) - which currently is the only supported one.`,name:"loss"},{anchor:"transformers.TimeSeriesTransformerConfig.input_size",description:`<strong>input_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The size of the target variable which by default is 1 for univariate targets. Would be &gt; 1 in case of
multivarate targets.`,name:"input_size"},{anchor:"transformers.TimeSeriesTransformerConfig.scaling",description:`<strong>scaling</strong> (<code>bool</code>, <em>optional</em> defaults to <code>True</code>) &#x2014;
Whether to scale the input targets.`,name:"scaling"},{anchor:"transformers.TimeSeriesTransformerConfig.lags_sequence",description:`<strong>lags_sequence</strong> (<code>list[int]</code>, <em>optional</em>, defaults to <code>[1, 2, 3, 4, 5, 6, 7]</code>) &#x2014;
The lags of the input time series as covariates often dictated by the frequency. Default is <code>[1, 2, 3, 4, 5, 6, 7]</code>.`,name:"lags_sequence"},{anchor:"transformers.TimeSeriesTransformerConfig.num_time_features",description:`<strong>num_time_features</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of time features in the input time series.`,name:"num_time_features"},{anchor:"transformers.TimeSeriesTransformerConfig.num_dynamic_real_features",description:`<strong>num_dynamic_real_features</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of dynamic real valued features.`,name:"num_dynamic_real_features"},{anchor:"transformers.TimeSeriesTransformerConfig.num_static_categorical_features",description:`<strong>num_static_categorical_features</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of static categorical features.`,name:"num_static_categorical_features"},{anchor:"transformers.TimeSeriesTransformerConfig.num_static_real_features",description:`<strong>num_static_real_features</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of static real valued features.`,name:"num_static_real_features"},{anchor:"transformers.TimeSeriesTransformerConfig.cardinality",description:`<strong>cardinality</strong> (<code>list[int]</code>, <em>optional</em>) &#x2014;
The cardinality (number of different values) for each of the static categorical features. Should be a list
of integers, having the same length as <code>num_static_categorical_features</code>. Cannot be <code>None</code> if
<code>num_static_categorical_features</code> is &gt; 0.`,name:"cardinality"},{anchor:"transformers.TimeSeriesTransformerConfig.embedding_dimension",description:`<strong>embedding_dimension</strong> (<code>list[int]</code>, <em>optional</em>) &#x2014;
The dimension of the embedding for each of the static categorical features. Should be a list of integers,
having the same length as <code>num_static_categorical_features</code>. Cannot be <code>None</code> if
<code>num_static_categorical_features</code> is &gt; 0.`,name:"embedding_dimension"},{anchor:"transformers.TimeSeriesTransformerConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.TimeSeriesTransformerConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.TimeSeriesTransformerConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.TimeSeriesTransformerConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.TimeSeriesTransformerConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in encoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.TimeSeriesTransformerConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.TimeSeriesTransformerConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and decoder. If string, <code>&quot;gelu&quot;</code> and
<code>&quot;relu&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.TimeSeriesTransformerConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the encoder, and decoder.`,name:"dropout"},{anchor:"transformers.TimeSeriesTransformerConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention and fully connected layers for each encoder layer.`,name:"encoder_layerdrop"},{anchor:"transformers.TimeSeriesTransformerConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention and fully connected layers for each decoder layer.`,name:"decoder_layerdrop"},{anchor:"transformers.TimeSeriesTransformerConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.TimeSeriesTransformerConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability used between the two layers of the feed-forward networks.`,name:"activation_dropout"},{anchor:"transformers.TimeSeriesTransformerConfig.num_parallel_samples",description:`<strong>num_parallel_samples</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
The number of samples to generate in parallel for each time step of inference.`,name:"num_parallel_samples"},{anchor:"transformers.TimeSeriesTransformerConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated normal weight initialization distribution.`,name:"init_std"},{anchor:"transformers.TimeSeriesTransformerConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use the past key/values attentions (if applicable to the model) to speed up decoding.</p>
<p>Example &#x2014;`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/time_series_transformer/configuration_time_series_transformer.py#L33"}}),ie=new ur({props:{anchor:"transformers.TimeSeriesTransformerConfig.example",$$slots:{default:[jn]},$$scope:{ctx:j}}}),xe=new oo({}),$e=new to({props:{name:"class transformers.TimeSeriesTransformerModel",anchor:"transformers.TimeSeriesTransformerModel",parameters:[{name:"config",val:": TimeSeriesTransformerConfig"}],parametersDescription:[{anchor:"transformers.TimeSeriesTransformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerConfig">TimeSeriesTransformerConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/time_series_transformer/modeling_time_series_transformer.py#L1439"}}),je=new to({props:{name:"forward",anchor:"transformers.TimeSeriesTransformerModel.forward",parameters:[{name:"past_values",val:": Tensor"},{name:"past_time_features",val:": Tensor"},{name:"past_observed_mask",val:": Tensor"},{name:"static_categorical_features",val:": Tensor"},{name:"static_real_features",val:": Tensor"},{name:"future_values",val:": typing.Optional[torch.Tensor] = None"},{name:"future_time_features",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.TimeSeriesTransformerModel.forward.past_values",description:`<strong>past_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Past values of the time series, that serve as context in order to predict the future. These values may
contain lags, i.e. additional values from the past which are added in order to serve as &#x201C;extra context&#x201D;.
The <code>past_values</code> is what the Transformer encoder gets as input (with optional additional features, such as
<code>static_categorical_features</code>, <code>static_real_features</code>, <code>past_time_features</code>).</p>
<p>The sequence length here is equal to <code>context_length</code> + <code>max(config.lags_sequence)</code>.</p>
<p>Missing values need to be replaced with zeros.`,name:"past_values"},{anchor:"transformers.TimeSeriesTransformerModel.forward.past_time_features",description:`<strong>past_time_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, num_features)</code>, <em>optional</em>) &#x2014;
Optional time features, which the model internally will add to <code>past_values</code>. These could be things like
&#x201C;month of year&#x201D;, &#x201C;day of the month&#x201D;, etc. encoded as vectors (for instance as Fourier features). These
could also be so-called &#x201C;age&#x201D; features, which basically help the model know &#x201C;at which point in life&#x201D; a
time-series is. Age features have small values for distant past time steps and increase monotonically the
more we approach the current time step.</p>
<p>These features serve as the &#x201C;positional encodings&#x201D; of the inputs. So contrary to a model like BERT, where
the position encodings are learned from scratch internally as parameters of the model, the Time Series
Transformer requires to provide additional time features.</p>
<p>The Time Series Transformer only learns additional embeddings for <code>static_categorical_features</code>.`,name:"past_time_features"},{anchor:"transformers.TimeSeriesTransformerModel.forward.past_observed_mask",description:`<strong>past_observed_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Boolean mask to indicate which <code>past_values</code> were observed and which were missing. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 for values that are <strong>observed</strong>,</li>
<li>0 for values that are <strong>missing</strong> (i.e. NaNs that were replaced by zeros).</li>
</ul>`,name:"past_observed_mask"},{anchor:"transformers.TimeSeriesTransformerModel.forward.static_categorical_features",description:`<strong>static_categorical_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, number of static categorical features)</code>, <em>optional</em>) &#x2014;
Optional static categorical features for which the model will learn an embedding, which it will add to the
values of the time series.</p>
<p>Static categorical features are features which have the same value for all time steps (static over time).</p>
<p>A typical example of a static categorical feature is a time series ID.`,name:"static_categorical_features"},{anchor:"transformers.TimeSeriesTransformerModel.forward.static_real_features",description:`<strong>static_real_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, number of static real features)</code>, <em>optional</em>) &#x2014;
Optional static real features which the model will add to the values of the time series.</p>
<p>Static real features are features which have the same value for all time steps (static over time).</p>
<p>A typical example of a static real feature is promotion information.`,name:"static_real_features"},{anchor:"transformers.TimeSeriesTransformerModel.forward.future_values",description:`<strong>future_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, prediction_length)</code>) &#x2014;
Future values of the time series, that serve as labels for the model. The <code>future_values</code> is what the
Transformer needs to learn to output, given the <code>past_values</code>.</p>
<p>See the demo notebook and code snippets for details.</p>
<p>Missing values need to be replaced with zeros.`,name:"future_values"},{anchor:"transformers.TimeSeriesTransformerModel.forward.future_time_features",description:`<strong>future_time_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, prediction_length, num_features)</code>, <em>optional</em>) &#x2014;
Optional time features, which the model internally will add to <code>future_values</code>. These could be things like
&#x201C;month of year&#x201D;, &#x201C;day of the month&#x201D;, etc. encoded as vectors (for instance as Fourier features). These
could also be so-called &#x201C;age&#x201D; features, which basically help the model know &#x201C;at which point in life&#x201D; a
time-series is. Age features have small values for distant past time steps and increase monotonically the
more we approach the current time step.</p>
<p>These features serve as the &#x201C;positional encodings&#x201D; of the inputs. So contrary to a model like BERT, where
the position encodings are learned from scratch internally as parameters of the model, the Time Series
Transformer requires to provide additional features.</p>
<p>The Time Series Transformer only learns additional embeddings for <code>static_categorical_features</code>.`,name:"future_time_features"},{anchor:"transformers.TimeSeriesTransformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on certain token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TimeSeriesTransformerModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on certain token indices. By default, a causal mask will be used, to
make sure the model can only look at previous inputs in order to predict the future.`,name:"decoder_attention_mask"},{anchor:"transformers.TimeSeriesTransformerModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TimeSeriesTransformerModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TimeSeriesTransformerModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TimeSeriesTransformerModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of <code>last_hidden_state</code>, <code>hidden_states</code> (<em>optional</em>) and <code>attentions</code> (<em>optional</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> (<em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TimeSeriesTransformerModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TimeSeriesTransformerModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TimeSeriesTransformerModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TimeSeriesTransformerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TimeSeriesTransformerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TimeSeriesTransformerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/time_series_transformer/modeling_time_series_transformer.py#L1589",returnDescription:`
<p>A <code>transformers.models.time_series_transformer.modeling_time_series_transformer.Seq2SeqTimeSeriesModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerConfig"
>TimeSeriesTransformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>scale:</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) \u2014 Scaling values of each time series\u2019 context window which is used to give the model inputs of the same
magnitude and then used to rescale to the original scale.</p>
</li>
<li>
<p><strong>static_features:</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature size)</code>, <em>optional</em>) \u2014 Static features of each time series\u2019 in a batch which are copied to the covariates at inference time.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.time_series_transformer.modeling_time_series_transformer.Seq2SeqTimeSeriesModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new fr({props:{$$slots:{default:[Mn]},$$scope:{ctx:j}}}),ce=new ur({props:{anchor:"transformers.TimeSeriesTransformerModel.forward.example",$$slots:{default:[Fn]},$$scope:{ctx:j}}}),Me=new oo({}),Fe=new to({props:{name:"class transformers.TimeSeriesTransformerForPrediction",anchor:"transformers.TimeSeriesTransformerForPrediction",parameters:[{name:"config",val:": TimeSeriesTransformerConfig"}],parametersDescription:[{anchor:"transformers.TimeSeriesTransformerForPrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerConfig">TimeSeriesTransformerConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/time_series_transformer/modeling_time_series_transformer.py#L1711"}}),De=new to({props:{name:"forward",anchor:"transformers.TimeSeriesTransformerForPrediction.forward",parameters:[{name:"past_values",val:": Tensor"},{name:"past_time_features",val:": Tensor"},{name:"past_observed_mask",val:": Tensor"},{name:"static_categorical_features",val:": Tensor"},{name:"static_real_features",val:": Tensor"},{name:"future_values",val:": typing.Optional[torch.Tensor] = None"},{name:"future_time_features",val:": typing.Optional[torch.Tensor] = None"},{name:"future_observed_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.past_values",description:`<strong>past_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Past values of the time series, that serve as context in order to predict the future. These values may
contain lags, i.e. additional values from the past which are added in order to serve as &#x201C;extra context&#x201D;.
The <code>past_values</code> is what the Transformer encoder gets as input (with optional additional features, such as
<code>static_categorical_features</code>, <code>static_real_features</code>, <code>past_time_features</code>).</p>
<p>The sequence length here is equal to <code>context_length</code> + <code>max(config.lags_sequence)</code>.</p>
<p>Missing values need to be replaced with zeros.`,name:"past_values"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.past_time_features",description:`<strong>past_time_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, num_features)</code>, <em>optional</em>) &#x2014;
Optional time features, which the model internally will add to <code>past_values</code>. These could be things like
&#x201C;month of year&#x201D;, &#x201C;day of the month&#x201D;, etc. encoded as vectors (for instance as Fourier features). These
could also be so-called &#x201C;age&#x201D; features, which basically help the model know &#x201C;at which point in life&#x201D; a
time-series is. Age features have small values for distant past time steps and increase monotonically the
more we approach the current time step.</p>
<p>These features serve as the &#x201C;positional encodings&#x201D; of the inputs. So contrary to a model like BERT, where
the position encodings are learned from scratch internally as parameters of the model, the Time Series
Transformer requires to provide additional time features.</p>
<p>The Time Series Transformer only learns additional embeddings for <code>static_categorical_features</code>.`,name:"past_time_features"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.past_observed_mask",description:`<strong>past_observed_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Boolean mask to indicate which <code>past_values</code> were observed and which were missing. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 for values that are <strong>observed</strong>,</li>
<li>0 for values that are <strong>missing</strong> (i.e. NaNs that were replaced by zeros).</li>
</ul>`,name:"past_observed_mask"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.static_categorical_features",description:`<strong>static_categorical_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, number of static categorical features)</code>, <em>optional</em>) &#x2014;
Optional static categorical features for which the model will learn an embedding, which it will add to the
values of the time series.</p>
<p>Static categorical features are features which have the same value for all time steps (static over time).</p>
<p>A typical example of a static categorical feature is a time series ID.`,name:"static_categorical_features"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.static_real_features",description:`<strong>static_real_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, number of static real features)</code>, <em>optional</em>) &#x2014;
Optional static real features which the model will add to the values of the time series.</p>
<p>Static real features are features which have the same value for all time steps (static over time).</p>
<p>A typical example of a static real feature is promotion information.`,name:"static_real_features"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.future_values",description:`<strong>future_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, prediction_length)</code>) &#x2014;
Future values of the time series, that serve as labels for the model. The <code>future_values</code> is what the
Transformer needs to learn to output, given the <code>past_values</code>.</p>
<p>See the demo notebook and code snippets for details.</p>
<p>Missing values need to be replaced with zeros.`,name:"future_values"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.future_time_features",description:`<strong>future_time_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, prediction_length, num_features)</code>, <em>optional</em>) &#x2014;
Optional time features, which the model internally will add to <code>future_values</code>. These could be things like
&#x201C;month of year&#x201D;, &#x201C;day of the month&#x201D;, etc. encoded as vectors (for instance as Fourier features). These
could also be so-called &#x201C;age&#x201D; features, which basically help the model know &#x201C;at which point in life&#x201D; a
time-series is. Age features have small values for distant past time steps and increase monotonically the
more we approach the current time step.</p>
<p>These features serve as the &#x201C;positional encodings&#x201D; of the inputs. So contrary to a model like BERT, where
the position encodings are learned from scratch internally as parameters of the model, the Time Series
Transformer requires to provide additional features.</p>
<p>The Time Series Transformer only learns additional embeddings for <code>static_categorical_features</code>.`,name:"future_time_features"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on certain token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on certain token indices. By default, a causal mask will be used, to
make sure the model can only look at previous inputs in order to predict the future.`,name:"decoder_attention_mask"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of <code>last_hidden_state</code>, <code>hidden_states</code> (<em>optional</em>) and <code>attentions</code> (<em>optional</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> (<em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/time_series_transformer/modeling_time_series_transformer.py#L1751",returnDescription:`
<p>A <code>transformers.models.time_series_transformer.modeling_time_series_transformer.Seq2SeqTimeSeriesModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerConfig"
>TimeSeriesTransformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>scale:</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) \u2014 Scaling values of each time series\u2019 context window which is used to give the model inputs of the same
magnitude and then used to rescale to the original scale.</p>
</li>
<li>
<p><strong>static_features:</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature size)</code>, <em>optional</em>) \u2014 Static features of each time series\u2019 in a batch which are copied to the covariates at inference time.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.time_series_transformer.modeling_time_series_transformer.Seq2SeqTimeSeriesModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),me=new fr({props:{$$slots:{default:[Pn]},$$scope:{ctx:j}}}),fe=new ur({props:{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.example",$$slots:{default:[zn]},$$scope:{ctx:j}}}),{c(){d=r("meta"),T=m(),c=r("h1"),p=r("a"),v=r("span"),b(l.$$.fragment),_=m(),M=r("span"),Co=o("Time Series Transformer"),so=m(),b(te.$$.fragment),ao=m(),H=r("h2"),oe=r("a"),lt=r("span"),b(be.$$.fragment),jo=m(),ct=r("span"),Mo=o("Overview"),ro=m(),Ue=r("p"),Fo=o("The Time Series Transformer model is a vanilla encoder-decoder Transformer for time series forecasting."),no=m(),He=r("p"),Po=o("Tips:"),io=m(),F=r("ul"),G=r("li"),zo=o("Similar to other models in the library, "),Ge=r("a"),Oo=o("TimeSeriesTransformerModel"),Do=o(" is the raw Transformer without any head on top, and "),Ve=r("a"),Ao=o("TimeSeriesTransformerForPrediction"),No=o(`
adds a distribution head on top of the former, which can be used for time-series forecasting. Note that this is a so-called probabilistic forecasting model, not a
point forecasting model. This means that the model learns a distribution, from which one can sample. The model doesn\u2019t directly output values.`),Io=m(),$=r("li"),Je=r("a"),Lo=o("TimeSeriesTransformerForPrediction"),Bo=o(" consists of 2 blocks: an encoder, which takes a "),ht=r("code"),Ro=o("context_length"),Wo=o(" of time series values as input (called "),mt=r("code"),Uo=o("past_values"),Ho=o(`),
and a decoder, which predicts a `),ft=r("code"),Go=o("prediction_length"),Vo=o(" of time series values into the future (called "),ut=r("code"),Jo=o("future_values"),Ko=o(`). During training, one needs to provide
pairs of (`),pt=r("code"),Qo=o("past_values"),Xo=o(" and "),_t=r("code"),Yo=o("future_values"),Zo=o(") to the model."),es=m(),R=r("li"),ts=o("In addition to the raw ("),gt=r("code"),os=o("past_values"),ss=o(" and "),Tt=r("code"),as=o("future_values"),rs=o("), one typically provides additional features to the model. These can be the following:"),L=r("ul"),se=r("li"),vt=r("code"),ns=o("past_time_features"),is=o(": temporal features which the model will add to "),bt=r("code"),ds=o("past_values"),ls=o(`. These serve as \u201Cpositional encodings\u201D for the Transformer encoder.
Examples are \u201Cday of the month\u201D, \u201Cmonth of the year\u201D, etc. as scalar values (and then stacked together as a vector).
e.g. if a given time-series value was obtained on the 11th of August, then one could have [11, 8] as time feature vector (11 being \u201Cday of the month\u201D, 8 being \u201Cmonth of the year\u201D).`),cs=m(),ae=r("li"),wt=r("code"),hs=o("future_time_features"),ms=o(": temporal features which the model will add to "),yt=r("code"),fs=o("future_values"),us=o(`. These serve as \u201Cpositional encodings\u201D for the Transformer decoder.
Examples are \u201Cday of the month\u201D, \u201Cmonth of the year\u201D, etc. as scalar values (and then stacked together as a vector).
e.g. if a given time-series value was obtained on the 11th of August, then one could have [11, 8] as time feature vector (11 being \u201Cday of the month\u201D, 8 being \u201Cmonth of the year\u201D).`),ps=m(),W=r("li"),kt=r("code"),_s=o("static_categorical_features"),gs=o(": categorical features which are static over time (i.e., have the same value for all "),St=r("code"),Ts=o("past_values"),vs=o(" and "),xt=r("code"),bs=o("future_values"),ws=o(`).
An example here is the store ID or region ID that identifies a given time-series.
Note that these features need to be known for ALL data points (also those in the future).`),ys=m(),A=r("li"),$t=r("code"),ks=o("static_real_features"),Ss=o(": real-valued features which are static over time (i.e., have the same value for all "),Et=r("code"),xs=o("past_values"),$s=o(" and "),qt=r("code"),Es=o("future_values"),qs=o(`).
An example here is the image representation of the product for which you have the time-series values (like the `),Ke=r("a"),Cs=o("ResNet"),js=o(` embedding of a \u201Cshoe\u201D picture,
if your time-series is about the sales of shoes).
Note that these features need to be known for ALL data points (also those in the future).`),Ms=m(),B=r("li"),Fs=o(`The model is trained using \u201Cteacher-forcing\u201D, similar to how a Transformer is trained for machine translation. This means that, during training, one shifts the
`),Ct=r("code"),Ps=o("future_values"),zs=o(" one position to the right as input to the decoder, prepended by the last value of "),jt=r("code"),Os=o("past_values"),Ds=o(`. At each time step, the model needs to predict the
next target. So the set-up of training is similar to a GPT model for language, except that there\u2019s no notion of `),Mt=r("code"),As=o("decoder_start_token_id"),Ns=o(` (we just use the last value
of the context as initial input for the decoder).`),Is=m(),we=r("li"),Ls=o("At inference time, we give the final value of the "),Ft=r("code"),Bs=o("past_values"),Rs=o(` as input to the decoder. Next, we can sample from the model to make a prediction at the next time step,
which is then fed to the decoder in order to make the next prediction (also called autoregressive generation).`),lo=m(),re=r("p"),Ws=o("This model was contributed by "),Qe=r("a"),Us=o("kashif"),Hs=o("."),co=m(),V=r("h2"),ne=r("a"),Pt=r("span"),b(ye.$$.fragment),Gs=m(),zt=r("span"),Vs=o("TimeSeriesTransformerConfig"),ho=m(),z=r("div"),b(ke.$$.fragment),Js=m(),J=r("p"),Ks=o("This is the configuration class to store the configuration of a "),Xe=r("a"),Qs=o("TimeSeriesTransformerModel"),Xs=o(`. It is used to
instantiate a Time Series Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Time Series
Transformer
`),Se=r("a"),Ys=o("huggingface/time-series-transformer-tourism-monthly"),Zs=o(`
architecture.`),ea=m(),K=r("p"),ta=o("Configuration objects inherit from "),Ye=r("a"),oa=o("PretrainedConfig"),sa=o(` can be used to control the model outputs. Read the
documentation from `),Ze=r("a"),aa=o("PretrainedConfig"),ra=o(" for more information."),na=m(),b(ie.$$.fragment),mo=m(),Q=r("h2"),de=r("a"),Ot=r("span"),b(xe.$$.fragment),ia=m(),Dt=r("span"),da=o("TimeSeriesTransformerModel"),fo=m(),O=r("div"),b($e.$$.fragment),la=m(),Ee=r("p"),ca=o(`The bare Time Series Transformer Model outputting raw hidden-states without any specific head on top.
This model inherits from `),et=r("a"),ha=o("PreTrainedModel"),ma=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fa=m(),qe=r("p"),ua=o("This model is also a PyTorch "),Ce=r("a"),pa=o("torch.nn.Module"),_a=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ga=m(),N=r("div"),b(je.$$.fragment),Ta=m(),X=r("p"),va=o("The "),tt=r("a"),ba=o("TimeSeriesTransformerModel"),wa=o(" forward method, overrides the "),At=r("code"),ya=o("__call__"),ka=o(" special method."),Sa=m(),b(le.$$.fragment),xa=m(),b(ce.$$.fragment),uo=m(),Y=r("h2"),he=r("a"),Nt=r("span"),b(Me.$$.fragment),$a=m(),It=r("span"),Ea=o("TimeSeriesTransformerForPrediction"),po=m(),D=r("div"),b(Fe.$$.fragment),qa=m(),Pe=r("p"),Ca=o(`The Time Series Transformer Model with a distribution head on top for time-series forecasting.
This model inherits from `),ot=r("a"),ja=o("PreTrainedModel"),Ma=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fa=m(),ze=r("p"),Pa=o("This model is also a PyTorch "),Oe=r("a"),za=o("torch.nn.Module"),Oa=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Da=m(),E=r("div"),b(De.$$.fragment),Aa=m(),Z=r("p"),Na=o("The "),st=r("a"),Ia=o("TimeSeriesTransformerForPrediction"),La=o(" forward method, overrides the "),Lt=r("code"),Ba=o("__call__"),Ra=o(" special method."),Wa=m(),b(me.$$.fragment),Ua=m(),q=r("p"),Ha=o("future_observed_mask ("),Bt=r("code"),Ga=o("torch.BoolTensor"),Va=o(" of shape "),Rt=r("code"),Ja=o("(batch_size, sequence_length)"),Ka=o(", "),Wt=r("em"),Qa=o("optional"),Xa=o(`):
Boolean mask to indicate which `),Ut=r("code"),Ya=o("future_values"),Za=o(` were observed and which were missing. Mask values selected
in `),Ht=r("code"),er=o("[0, 1]"),tr=o(":"),or=m(),Ae=r("ul"),Ne=r("li"),sr=o("1 for values that are "),Gt=r("strong"),ar=o("observed"),rr=o(","),nr=m(),Ie=r("li"),ir=o("0 for values that are "),Vt=r("strong"),dr=o("missing"),lr=o(" (i.e. NaNs that were replaced by zeros)."),cr=m(),Jt=r("p"),hr=o("This mask is used to filter out missing values for the final loss calculation."),mr=m(),b(fe.$$.fragment),this.h()},l(a){const u=En('[data-svelte="svelte-1phssyn"]',document.head);d=n(u,"META",{name:!0,content:!0}),u.forEach(t),T=f(a),c=n(a,"H1",{class:!0});var Le=i(c);p=n(Le,"A",{id:!0,class:!0,href:!0});var Kt=i(p);v=n(Kt,"SPAN",{});var Qt=i(v);w(l.$$.fragment,Qt),Qt.forEach(t),Kt.forEach(t),_=f(Le),M=n(Le,"SPAN",{});var Xt=i(M);Co=s(Xt,"Time Series Transformer"),Xt.forEach(t),Le.forEach(t),so=f(a),w(te.$$.fragment,a),ao=f(a),H=n(a,"H2",{class:!0});var Be=i(H);oe=n(Be,"A",{id:!0,class:!0,href:!0});var Yt=i(oe);lt=n(Yt,"SPAN",{});var gr=i(lt);w(be.$$.fragment,gr),gr.forEach(t),Yt.forEach(t),jo=f(Be),ct=n(Be,"SPAN",{});var Tr=i(ct);Mo=s(Tr,"Overview"),Tr.forEach(t),Be.forEach(t),ro=f(a),Ue=n(a,"P",{});var vr=i(Ue);Fo=s(vr,"The Time Series Transformer model is a vanilla encoder-decoder Transformer for time series forecasting."),vr.forEach(t),no=f(a),He=n(a,"P",{});var br=i(He);Po=s(br,"Tips:"),br.forEach(t),io=f(a),F=n(a,"UL",{});var U=i(F);G=n(U,"LI",{});var at=i(G);zo=s(at,"Similar to other models in the library, "),Ge=n(at,"A",{href:!0});var wr=i(Ge);Oo=s(wr,"TimeSeriesTransformerModel"),wr.forEach(t),Do=s(at," is the raw Transformer without any head on top, and "),Ve=n(at,"A",{href:!0});var yr=i(Ve);Ao=s(yr,"TimeSeriesTransformerForPrediction"),yr.forEach(t),No=s(at,`
adds a distribution head on top of the former, which can be used for time-series forecasting. Note that this is a so-called probabilistic forecasting model, not a
point forecasting model. This means that the model learns a distribution, from which one can sample. The model doesn\u2019t directly output values.`),at.forEach(t),Io=f(U),$=n(U,"LI",{});var C=i($);Je=n(C,"A",{href:!0});var kr=i(Je);Lo=s(kr,"TimeSeriesTransformerForPrediction"),kr.forEach(t),Bo=s(C," consists of 2 blocks: an encoder, which takes a "),ht=n(C,"CODE",{});var Sr=i(ht);Ro=s(Sr,"context_length"),Sr.forEach(t),Wo=s(C," of time series values as input (called "),mt=n(C,"CODE",{});var xr=i(mt);Uo=s(xr,"past_values"),xr.forEach(t),Ho=s(C,`),
and a decoder, which predicts a `),ft=n(C,"CODE",{});var $r=i(ft);Go=s($r,"prediction_length"),$r.forEach(t),Vo=s(C," of time series values into the future (called "),ut=n(C,"CODE",{});var Er=i(ut);Jo=s(Er,"future_values"),Er.forEach(t),Ko=s(C,`). During training, one needs to provide
pairs of (`),pt=n(C,"CODE",{});var qr=i(pt);Qo=s(qr,"past_values"),qr.forEach(t),Xo=s(C," and "),_t=n(C,"CODE",{});var Cr=i(_t);Yo=s(Cr,"future_values"),Cr.forEach(t),Zo=s(C,") to the model."),C.forEach(t),es=f(U),R=n(U,"LI",{});var Re=i(R);ts=s(Re,"In addition to the raw ("),gt=n(Re,"CODE",{});var jr=i(gt);os=s(jr,"past_values"),jr.forEach(t),ss=s(Re," and "),Tt=n(Re,"CODE",{});var Mr=i(Tt);as=s(Mr,"future_values"),Mr.forEach(t),rs=s(Re,"), one typically provides additional features to the model. These can be the following:"),L=n(Re,"UL",{});var ue=i(L);se=n(ue,"LI",{});var Zt=i(se);vt=n(Zt,"CODE",{});var Fr=i(vt);ns=s(Fr,"past_time_features"),Fr.forEach(t),is=s(Zt,": temporal features which the model will add to "),bt=n(Zt,"CODE",{});var Pr=i(bt);ds=s(Pr,"past_values"),Pr.forEach(t),ls=s(Zt,`. These serve as \u201Cpositional encodings\u201D for the Transformer encoder.
Examples are \u201Cday of the month\u201D, \u201Cmonth of the year\u201D, etc. as scalar values (and then stacked together as a vector).
e.g. if a given time-series value was obtained on the 11th of August, then one could have [11, 8] as time feature vector (11 being \u201Cday of the month\u201D, 8 being \u201Cmonth of the year\u201D).`),Zt.forEach(t),cs=f(ue),ae=n(ue,"LI",{});var eo=i(ae);wt=n(eo,"CODE",{});var zr=i(wt);hs=s(zr,"future_time_features"),zr.forEach(t),ms=s(eo,": temporal features which the model will add to "),yt=n(eo,"CODE",{});var Or=i(yt);fs=s(Or,"future_values"),Or.forEach(t),us=s(eo,`. These serve as \u201Cpositional encodings\u201D for the Transformer decoder.
Examples are \u201Cday of the month\u201D, \u201Cmonth of the year\u201D, etc. as scalar values (and then stacked together as a vector).
e.g. if a given time-series value was obtained on the 11th of August, then one could have [11, 8] as time feature vector (11 being \u201Cday of the month\u201D, 8 being \u201Cmonth of the year\u201D).`),eo.forEach(t),ps=f(ue),W=n(ue,"LI",{});var We=i(W);kt=n(We,"CODE",{});var Dr=i(kt);_s=s(Dr,"static_categorical_features"),Dr.forEach(t),gs=s(We,": categorical features which are static over time (i.e., have the same value for all "),St=n(We,"CODE",{});var Ar=i(St);Ts=s(Ar,"past_values"),Ar.forEach(t),vs=s(We," and "),xt=n(We,"CODE",{});var Nr=i(xt);bs=s(Nr,"future_values"),Nr.forEach(t),ws=s(We,`).
An example here is the store ID or region ID that identifies a given time-series.
Note that these features need to be known for ALL data points (also those in the future).`),We.forEach(t),ys=f(ue),A=n(ue,"LI",{});var ee=i(A);$t=n(ee,"CODE",{});var Ir=i($t);ks=s(Ir,"static_real_features"),Ir.forEach(t),Ss=s(ee,": real-valued features which are static over time (i.e., have the same value for all "),Et=n(ee,"CODE",{});var Lr=i(Et);xs=s(Lr,"past_values"),Lr.forEach(t),$s=s(ee," and "),qt=n(ee,"CODE",{});var Br=i(qt);Es=s(Br,"future_values"),Br.forEach(t),qs=s(ee,`).
An example here is the image representation of the product for which you have the time-series values (like the `),Ke=n(ee,"A",{href:!0});var Rr=i(Ke);Cs=s(Rr,"ResNet"),Rr.forEach(t),js=s(ee,` embedding of a \u201Cshoe\u201D picture,
if your time-series is about the sales of shoes).
Note that these features need to be known for ALL data points (also those in the future).`),ee.forEach(t),ue.forEach(t),Re.forEach(t),Ms=f(U),B=n(U,"LI",{});var pe=i(B);Fs=s(pe,`The model is trained using \u201Cteacher-forcing\u201D, similar to how a Transformer is trained for machine translation. This means that, during training, one shifts the
`),Ct=n(pe,"CODE",{});var Wr=i(Ct);Ps=s(Wr,"future_values"),Wr.forEach(t),zs=s(pe," one position to the right as input to the decoder, prepended by the last value of "),jt=n(pe,"CODE",{});var Ur=i(jt);Os=s(Ur,"past_values"),Ur.forEach(t),Ds=s(pe,`. At each time step, the model needs to predict the
next target. So the set-up of training is similar to a GPT model for language, except that there\u2019s no notion of `),Mt=n(pe,"CODE",{});var Hr=i(Mt);As=s(Hr,"decoder_start_token_id"),Hr.forEach(t),Ns=s(pe,` (we just use the last value
of the context as initial input for the decoder).`),pe.forEach(t),Is=f(U),we=n(U,"LI",{});var go=i(we);Ls=s(go,"At inference time, we give the final value of the "),Ft=n(go,"CODE",{});var Gr=i(Ft);Bs=s(Gr,"past_values"),Gr.forEach(t),Rs=s(go,` as input to the decoder. Next, we can sample from the model to make a prediction at the next time step,
which is then fed to the decoder in order to make the next prediction (also called autoregressive generation).`),go.forEach(t),U.forEach(t),lo=f(a),re=n(a,"P",{});var To=i(re);Ws=s(To,"This model was contributed by "),Qe=n(To,"A",{href:!0});var Vr=i(Qe);Us=s(Vr,"kashif"),Vr.forEach(t),Hs=s(To,"."),To.forEach(t),co=f(a),V=n(a,"H2",{class:!0});var vo=i(V);ne=n(vo,"A",{id:!0,class:!0,href:!0});var Jr=i(ne);Pt=n(Jr,"SPAN",{});var Kr=i(Pt);w(ye.$$.fragment,Kr),Kr.forEach(t),Jr.forEach(t),Gs=f(vo),zt=n(vo,"SPAN",{});var Qr=i(zt);Vs=s(Qr,"TimeSeriesTransformerConfig"),Qr.forEach(t),vo.forEach(t),ho=f(a),z=n(a,"DIV",{class:!0});var _e=i(z);w(ke.$$.fragment,_e),Js=f(_e),J=n(_e,"P",{});var rt=i(J);Ks=s(rt,"This is the configuration class to store the configuration of a "),Xe=n(rt,"A",{href:!0});var Xr=i(Xe);Qs=s(Xr,"TimeSeriesTransformerModel"),Xr.forEach(t),Xs=s(rt,`. It is used to
instantiate a Time Series Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Time Series
Transformer
`),Se=n(rt,"A",{href:!0,rel:!0});var Yr=i(Se);Ys=s(Yr,"huggingface/time-series-transformer-tourism-monthly"),Yr.forEach(t),Zs=s(rt,`
architecture.`),rt.forEach(t),ea=f(_e),K=n(_e,"P",{});var nt=i(K);ta=s(nt,"Configuration objects inherit from "),Ye=n(nt,"A",{href:!0});var Zr=i(Ye);oa=s(Zr,"PretrainedConfig"),Zr.forEach(t),sa=s(nt,` can be used to control the model outputs. Read the
documentation from `),Ze=n(nt,"A",{href:!0});var en=i(Ze);aa=s(en,"PretrainedConfig"),en.forEach(t),ra=s(nt," for more information."),nt.forEach(t),na=f(_e),w(ie.$$.fragment,_e),_e.forEach(t),mo=f(a),Q=n(a,"H2",{class:!0});var bo=i(Q);de=n(bo,"A",{id:!0,class:!0,href:!0});var tn=i(de);Ot=n(tn,"SPAN",{});var on=i(Ot);w(xe.$$.fragment,on),on.forEach(t),tn.forEach(t),ia=f(bo),Dt=n(bo,"SPAN",{});var sn=i(Dt);da=s(sn,"TimeSeriesTransformerModel"),sn.forEach(t),bo.forEach(t),fo=f(a),O=n(a,"DIV",{class:!0});var ge=i(O);w($e.$$.fragment,ge),la=f(ge),Ee=n(ge,"P",{});var wo=i(Ee);ca=s(wo,`The bare Time Series Transformer Model outputting raw hidden-states without any specific head on top.
This model inherits from `),et=n(wo,"A",{href:!0});var an=i(et);ha=s(an,"PreTrainedModel"),an.forEach(t),ma=s(wo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wo.forEach(t),fa=f(ge),qe=n(ge,"P",{});var yo=i(qe);ua=s(yo,"This model is also a PyTorch "),Ce=n(yo,"A",{href:!0,rel:!0});var rn=i(Ce);pa=s(rn,"torch.nn.Module"),rn.forEach(t),_a=s(yo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yo.forEach(t),ga=f(ge),N=n(ge,"DIV",{class:!0});var Te=i(N);w(je.$$.fragment,Te),Ta=f(Te),X=n(Te,"P",{});var it=i(X);va=s(it,"The "),tt=n(it,"A",{href:!0});var nn=i(tt);ba=s(nn,"TimeSeriesTransformerModel"),nn.forEach(t),wa=s(it," forward method, overrides the "),At=n(it,"CODE",{});var dn=i(At);ya=s(dn,"__call__"),dn.forEach(t),ka=s(it," special method."),it.forEach(t),Sa=f(Te),w(le.$$.fragment,Te),xa=f(Te),w(ce.$$.fragment,Te),Te.forEach(t),ge.forEach(t),uo=f(a),Y=n(a,"H2",{class:!0});var ko=i(Y);he=n(ko,"A",{id:!0,class:!0,href:!0});var ln=i(he);Nt=n(ln,"SPAN",{});var cn=i(Nt);w(Me.$$.fragment,cn),cn.forEach(t),ln.forEach(t),$a=f(ko),It=n(ko,"SPAN",{});var hn=i(It);Ea=s(hn,"TimeSeriesTransformerForPrediction"),hn.forEach(t),ko.forEach(t),po=f(a),D=n(a,"DIV",{class:!0});var ve=i(D);w(Fe.$$.fragment,ve),qa=f(ve),Pe=n(ve,"P",{});var So=i(Pe);Ca=s(So,`The Time Series Transformer Model with a distribution head on top for time-series forecasting.
This model inherits from `),ot=n(So,"A",{href:!0});var mn=i(ot);ja=s(mn,"PreTrainedModel"),mn.forEach(t),Ma=s(So,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),So.forEach(t),Fa=f(ve),ze=n(ve,"P",{});var xo=i(ze);Pa=s(xo,"This model is also a PyTorch "),Oe=n(xo,"A",{href:!0,rel:!0});var fn=i(Oe);za=s(fn,"torch.nn.Module"),fn.forEach(t),Oa=s(xo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xo.forEach(t),Da=f(ve),E=n(ve,"DIV",{class:!0});var P=i(E);w(De.$$.fragment,P),Aa=f(P),Z=n(P,"P",{});var dt=i(Z);Na=s(dt,"The "),st=n(dt,"A",{href:!0});var un=i(st);Ia=s(un,"TimeSeriesTransformerForPrediction"),un.forEach(t),La=s(dt," forward method, overrides the "),Lt=n(dt,"CODE",{});var pn=i(Lt);Ba=s(pn,"__call__"),pn.forEach(t),Ra=s(dt," special method."),dt.forEach(t),Wa=f(P),w(me.$$.fragment,P),Ua=f(P),q=n(P,"P",{});var I=i(q);Ha=s(I,"future_observed_mask ("),Bt=n(I,"CODE",{});var _n=i(Bt);Ga=s(_n,"torch.BoolTensor"),_n.forEach(t),Va=s(I," of shape "),Rt=n(I,"CODE",{});var gn=i(Rt);Ja=s(gn,"(batch_size, sequence_length)"),gn.forEach(t),Ka=s(I,", "),Wt=n(I,"EM",{});var Tn=i(Wt);Qa=s(Tn,"optional"),Tn.forEach(t),Xa=s(I,`):
Boolean mask to indicate which `),Ut=n(I,"CODE",{});var vn=i(Ut);Ya=s(vn,"future_values"),vn.forEach(t),Za=s(I,` were observed and which were missing. Mask values selected
in `),Ht=n(I,"CODE",{});var bn=i(Ht);er=s(bn,"[0, 1]"),bn.forEach(t),tr=s(I,":"),I.forEach(t),or=f(P),Ae=n(P,"UL",{});var $o=i(Ae);Ne=n($o,"LI",{});var Eo=i(Ne);sr=s(Eo,"1 for values that are "),Gt=n(Eo,"STRONG",{});var wn=i(Gt);ar=s(wn,"observed"),wn.forEach(t),rr=s(Eo,","),Eo.forEach(t),nr=f($o),Ie=n($o,"LI",{});var qo=i(Ie);ir=s(qo,"0 for values that are "),Vt=n(qo,"STRONG",{});var yn=i(Vt);dr=s(yn,"missing"),yn.forEach(t),lr=s(qo," (i.e. NaNs that were replaced by zeros)."),qo.forEach(t),$o.forEach(t),cr=f(P),Jt=n(P,"P",{});var kn=i(Jt);hr=s(kn,"This mask is used to filter out missing values for the final loss calculation."),kn.forEach(t),mr=f(P),w(fe.$$.fragment,P),P.forEach(t),ve.forEach(t),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(Dn)),h(p,"id","time-series-transformer"),h(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(p,"href","#time-series-transformer"),h(c,"class","relative group"),h(oe,"id","overview"),h(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oe,"href","#overview"),h(H,"class","relative group"),h(Ge,"href","/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerModel"),h(Ve,"href","/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerForPrediction"),h(Je,"href","/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerForPrediction"),h(Ke,"href","resnet"),h(Qe,"href","<https://huggingface.co/kashif"),h(ne,"id","transformers.TimeSeriesTransformerConfig"),h(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ne,"href","#transformers.TimeSeriesTransformerConfig"),h(V,"class","relative group"),h(Xe,"href","/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerModel"),h(Se,"href","https://huggingface.co/huggingface/time-series-transformer-tourism-monthly"),h(Se,"rel","nofollow"),h(Ye,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Ze,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(de,"id","transformers.TimeSeriesTransformerModel"),h(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(de,"href","#transformers.TimeSeriesTransformerModel"),h(Q,"class","relative group"),h(et,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Ce,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ce,"rel","nofollow"),h(tt,"href","/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerModel"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(he,"id","transformers.TimeSeriesTransformerForPrediction"),h(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(he,"href","#transformers.TimeSeriesTransformerForPrediction"),h(Y,"class","relative group"),h(ot,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Oe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Oe,"rel","nofollow"),h(st,"href","/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerForPrediction"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(a,u){e(document.head,d),g(a,T,u),g(a,c,u),e(c,p),e(p,v),y(l,v,null),e(c,_),e(c,M),e(M,Co),g(a,so,u),y(te,a,u),g(a,ao,u),g(a,H,u),e(H,oe),e(oe,lt),y(be,lt,null),e(H,jo),e(H,ct),e(ct,Mo),g(a,ro,u),g(a,Ue,u),e(Ue,Fo),g(a,no,u),g(a,He,u),e(He,Po),g(a,io,u),g(a,F,u),e(F,G),e(G,zo),e(G,Ge),e(Ge,Oo),e(G,Do),e(G,Ve),e(Ve,Ao),e(G,No),e(F,Io),e(F,$),e($,Je),e(Je,Lo),e($,Bo),e($,ht),e(ht,Ro),e($,Wo),e($,mt),e(mt,Uo),e($,Ho),e($,ft),e(ft,Go),e($,Vo),e($,ut),e(ut,Jo),e($,Ko),e($,pt),e(pt,Qo),e($,Xo),e($,_t),e(_t,Yo),e($,Zo),e(F,es),e(F,R),e(R,ts),e(R,gt),e(gt,os),e(R,ss),e(R,Tt),e(Tt,as),e(R,rs),e(R,L),e(L,se),e(se,vt),e(vt,ns),e(se,is),e(se,bt),e(bt,ds),e(se,ls),e(L,cs),e(L,ae),e(ae,wt),e(wt,hs),e(ae,ms),e(ae,yt),e(yt,fs),e(ae,us),e(L,ps),e(L,W),e(W,kt),e(kt,_s),e(W,gs),e(W,St),e(St,Ts),e(W,vs),e(W,xt),e(xt,bs),e(W,ws),e(L,ys),e(L,A),e(A,$t),e($t,ks),e(A,Ss),e(A,Et),e(Et,xs),e(A,$s),e(A,qt),e(qt,Es),e(A,qs),e(A,Ke),e(Ke,Cs),e(A,js),e(F,Ms),e(F,B),e(B,Fs),e(B,Ct),e(Ct,Ps),e(B,zs),e(B,jt),e(jt,Os),e(B,Ds),e(B,Mt),e(Mt,As),e(B,Ns),e(F,Is),e(F,we),e(we,Ls),e(we,Ft),e(Ft,Bs),e(we,Rs),g(a,lo,u),g(a,re,u),e(re,Ws),e(re,Qe),e(Qe,Us),e(re,Hs),g(a,co,u),g(a,V,u),e(V,ne),e(ne,Pt),y(ye,Pt,null),e(V,Gs),e(V,zt),e(zt,Vs),g(a,ho,u),g(a,z,u),y(ke,z,null),e(z,Js),e(z,J),e(J,Ks),e(J,Xe),e(Xe,Qs),e(J,Xs),e(J,Se),e(Se,Ys),e(J,Zs),e(z,ea),e(z,K),e(K,ta),e(K,Ye),e(Ye,oa),e(K,sa),e(K,Ze),e(Ze,aa),e(K,ra),e(z,na),y(ie,z,null),g(a,mo,u),g(a,Q,u),e(Q,de),e(de,Ot),y(xe,Ot,null),e(Q,ia),e(Q,Dt),e(Dt,da),g(a,fo,u),g(a,O,u),y($e,O,null),e(O,la),e(O,Ee),e(Ee,ca),e(Ee,et),e(et,ha),e(Ee,ma),e(O,fa),e(O,qe),e(qe,ua),e(qe,Ce),e(Ce,pa),e(qe,_a),e(O,ga),e(O,N),y(je,N,null),e(N,Ta),e(N,X),e(X,va),e(X,tt),e(tt,ba),e(X,wa),e(X,At),e(At,ya),e(X,ka),e(N,Sa),y(le,N,null),e(N,xa),y(ce,N,null),g(a,uo,u),g(a,Y,u),e(Y,he),e(he,Nt),y(Me,Nt,null),e(Y,$a),e(Y,It),e(It,Ea),g(a,po,u),g(a,D,u),y(Fe,D,null),e(D,qa),e(D,Pe),e(Pe,Ca),e(Pe,ot),e(ot,ja),e(Pe,Ma),e(D,Fa),e(D,ze),e(ze,Pa),e(ze,Oe),e(Oe,za),e(ze,Oa),e(D,Da),e(D,E),y(De,E,null),e(E,Aa),e(E,Z),e(Z,Na),e(Z,st),e(st,Ia),e(Z,La),e(Z,Lt),e(Lt,Ba),e(Z,Ra),e(E,Wa),y(me,E,null),e(E,Ua),e(E,q),e(q,Ha),e(q,Bt),e(Bt,Ga),e(q,Va),e(q,Rt),e(Rt,Ja),e(q,Ka),e(q,Wt),e(Wt,Qa),e(q,Xa),e(q,Ut),e(Ut,Ya),e(q,Za),e(q,Ht),e(Ht,er),e(q,tr),e(E,or),e(E,Ae),e(Ae,Ne),e(Ne,sr),e(Ne,Gt),e(Gt,ar),e(Ne,rr),e(Ae,nr),e(Ae,Ie),e(Ie,ir),e(Ie,Vt),e(Vt,dr),e(Ie,lr),e(E,cr),e(E,Jt),e(Jt,hr),e(E,mr),y(fe,E,null),_o=!0},p(a,[u]){const Le={};u&2&&(Le.$$scope={dirty:u,ctx:a}),te.$set(Le);const Kt={};u&2&&(Kt.$$scope={dirty:u,ctx:a}),ie.$set(Kt);const Qt={};u&2&&(Qt.$$scope={dirty:u,ctx:a}),le.$set(Qt);const Xt={};u&2&&(Xt.$$scope={dirty:u,ctx:a}),ce.$set(Xt);const Be={};u&2&&(Be.$$scope={dirty:u,ctx:a}),me.$set(Be);const Yt={};u&2&&(Yt.$$scope={dirty:u,ctx:a}),fe.$set(Yt)},i(a){_o||(k(l.$$.fragment,a),k(te.$$.fragment,a),k(be.$$.fragment,a),k(ye.$$.fragment,a),k(ke.$$.fragment,a),k(ie.$$.fragment,a),k(xe.$$.fragment,a),k($e.$$.fragment,a),k(je.$$.fragment,a),k(le.$$.fragment,a),k(ce.$$.fragment,a),k(Me.$$.fragment,a),k(Fe.$$.fragment,a),k(De.$$.fragment,a),k(me.$$.fragment,a),k(fe.$$.fragment,a),_o=!0)},o(a){S(l.$$.fragment,a),S(te.$$.fragment,a),S(be.$$.fragment,a),S(ye.$$.fragment,a),S(ke.$$.fragment,a),S(ie.$$.fragment,a),S(xe.$$.fragment,a),S($e.$$.fragment,a),S(je.$$.fragment,a),S(le.$$.fragment,a),S(ce.$$.fragment,a),S(Me.$$.fragment,a),S(Fe.$$.fragment,a),S(De.$$.fragment,a),S(me.$$.fragment,a),S(fe.$$.fragment,a),_o=!1},d(a){t(d),a&&t(T),a&&t(c),x(l),a&&t(so),x(te,a),a&&t(ao),a&&t(H),x(be),a&&t(ro),a&&t(Ue),a&&t(no),a&&t(He),a&&t(io),a&&t(F),a&&t(lo),a&&t(re),a&&t(co),a&&t(V),x(ye),a&&t(ho),a&&t(z),x(ke),x(ie),a&&t(mo),a&&t(Q),x(xe),a&&t(fo),a&&t(O),x($e),x(je),x(le),x(ce),a&&t(uo),a&&t(Y),x(Me),a&&t(po),a&&t(D),x(Fe),x(De),x(me),x(fe)}}}const Dn={local:"time-series-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.TimeSeriesTransformerConfig",title:"TimeSeriesTransformerConfig"},{local:"transformers.TimeSeriesTransformerModel",title:"TimeSeriesTransformerModel"},{local:"transformers.TimeSeriesTransformerForPrediction",title:"TimeSeriesTransformerForPrediction"}],title:"Time Series Transformer"};function An(j){return qn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Un extends Sn{constructor(d){super();xn(this,d,An,On,$n,{})}}export{Un as default,Dn as metadata};
