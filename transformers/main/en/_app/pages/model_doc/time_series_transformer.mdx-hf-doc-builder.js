import{S as Sn,i as xn,s as $n,e as a,k as m,w as b,t as o,M as En,c as n,d as t,m as f,a as i,x as w,h as s,b as h,G as e,g,y,q as k,o as S,B as x,v as zn,L as pa}from"../../chunks/vendor-hf-doc-builder.js";import{T as fa}from"../../chunks/Tip-hf-doc-builder.js";import{D as to}from"../../chunks/Docstring-hf-doc-builder.js";import{C as _a}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as oo}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ua}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function qn(C){let d,T,l,p,v;return{c(){d=a("p"),T=o(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),l=a("a"),p=o("Github Issue"),v=o("."),this.h()},l(c){d=n(c,"P",{});var _=i(d);T=s(_,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),l=n(_,"A",{href:!0,rel:!0});var M=i(l);p=s(M,"Github Issue"),M.forEach(t),v=s(_,"."),_.forEach(t),this.h()},h(){h(l,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),h(l,"rel","nofollow")},m(c,_){g(c,d,_),e(d,T),e(d,l),e(l,p),e(d,v)},d(c){c&&t(d)}}}function Cn(C){let d,T;return d=new _a({props:{code:`from transformers import TimeSeriesTransformerConfig, TimeSeriesTransformerModel

# Initializing a default Time Series Transformer configuration
configuration = TimeSeriesTransformerConfig()

# Randomly initializing a model from the configuration
model = TimeSeriesTransformerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TimeSeriesTransformerConfig, TimeSeriesTransformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a default Time Series Transformer configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = TimeSeriesTransformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Randomly initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TimeSeriesTransformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){b(d.$$.fragment)},l(l){w(d.$$.fragment,l)},m(l,p){y(d,l,p),T=!0},p:pa,i(l){T||(k(d.$$.fragment,l),T=!0)},o(l){S(d.$$.fragment,l),T=!1},d(l){x(d,l)}}}function Mn(C){let d,T,l,p,v;return{c(){d=a("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=a("code"),p=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){d=n(c,"P",{});var _=i(d);T=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=n(_,"CODE",{});var M=i(l);p=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(c,_){g(c,d,_),e(d,T),e(d,l),e(l,p),e(d,v)},d(c){c&&t(d)}}}function Fn(C){let d,T,l,p,v;return p=new _a({props:{code:`from transformers import TimeSeriesTransformerModel
import torch

model = TimeSeriesTransformerModel.from_pretrained("huggingface/tst-base")

inputs = dict()
batch_size = 2
cardinality = 5
num_time_features = 10
content_length = 8
prediction_length = 2
lags_sequence = [2, 3]
past_length = context_length + max(lags_sequence)

# encoder inputs
inputs["static_categorical_features"] = ids_tensor([batch_size, 1], cardinality)
inputs["static_real_features"] = torch.randn([batch_size, 1])
inputs["past_time_features"] = torch.randn([batch_size, past_length, num_time_features])
inputs["past_values"] = torch.randn([batch_size, past_length])
inputs["past_observed_mask"] = torch.ones([batch_size, past_length])

# decoder inputs
inputs["future_time_features"] = torch.randn([batch_size, prediction_length, num_time_features])
inputs["future_values"] = torch.randn([batch_size, prediction_length])

outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TimeSeriesTransformerModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TimeSeriesTransformerModel.from_pretrained(<span class="hljs-string">&quot;huggingface/tst-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = <span class="hljs-built_in">dict</span>()
<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size = <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>cardinality = <span class="hljs-number">5</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_time_features = <span class="hljs-number">10</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>content_length = <span class="hljs-number">8</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_length = <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>lags_sequence = [<span class="hljs-number">2</span>, <span class="hljs-number">3</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>past_length = context_length + <span class="hljs-built_in">max</span>(lags_sequence)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># encoder inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;static_categorical_features&quot;</span>] = ids_tensor([batch_size, <span class="hljs-number">1</span>], cardinality)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;static_real_features&quot;</span>] = torch.randn([batch_size, <span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;past_time_features&quot;</span>] = torch.randn([batch_size, past_length, num_time_features])
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;past_values&quot;</span>] = torch.randn([batch_size, past_length])
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;past_observed_mask&quot;</span>] = torch.ones([batch_size, past_length])

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># decoder inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;future_time_features&quot;</span>] = torch.randn([batch_size, prediction_length, num_time_features])
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;future_values&quot;</span>] = torch.randn([batch_size, prediction_length])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),T=o("Examples:"),l=m(),b(p.$$.fragment)},l(c){d=n(c,"P",{});var _=i(d);T=s(_,"Examples:"),_.forEach(t),l=f(c),w(p.$$.fragment,c)},m(c,_){g(c,d,_),e(d,T),g(c,l,_),y(p,c,_),v=!0},p:pa,i(c){v||(k(p.$$.fragment,c),v=!0)},o(c){S(p.$$.fragment,c),v=!1},d(c){c&&t(d),c&&t(l),x(p,c)}}}function jn(C){let d,T,l,p,v;return{c(){d=a("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=a("code"),p=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){d=n(c,"P",{});var _=i(d);T=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=n(_,"CODE",{});var M=i(l);p=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(c,_){g(c,d,_),e(d,T),e(d,l),e(l,p),e(d,v)},d(c){c&&t(d)}}}function Pn(C){let d,T,l,p,v;return p=new _a({props:{code:`from transformers import TimeSeriesTransformerForPrediction
import torch

model = TimeSeriesTransformerForPrediction.from_pretrained("huggingface/tst-base")

inputs = dict()
batch_size = 2
cardinality = 5
num_time_features = 10
content_length = 8
prediction_length = 2
lags_sequence = [2, 3]
past_length = context_length + max(lags_sequence)

# encoder inputs
inputs["static_categorical_features"] = ids_tensor([batch_size, 1], cardinality)
inputs["static_real_features"] = torch.randn([batch_size, 1])
inputs["past_time_features"] = torch.randn([batch_size, past_length, num_time_features])
inputs["past_values"] = torch.randn([batch_size, past_length])
inputs["past_observed_mask"] = torch.ones([batch_size, past_length])

# decoder inputs
inputs["future_time_features"] = torch.randn([batch_size, prediction_length, num_time_features])
inputs["future_values"] = torch.randn([batch_size, prediction_length])

outputs = model(**inputs)
loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TimeSeriesTransformerForPrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TimeSeriesTransformerForPrediction.from_pretrained(<span class="hljs-string">&quot;huggingface/tst-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = <span class="hljs-built_in">dict</span>()
<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size = <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>cardinality = <span class="hljs-number">5</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_time_features = <span class="hljs-number">10</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>content_length = <span class="hljs-number">8</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_length = <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>lags_sequence = [<span class="hljs-number">2</span>, <span class="hljs-number">3</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>past_length = context_length + <span class="hljs-built_in">max</span>(lags_sequence)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># encoder inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;static_categorical_features&quot;</span>] = ids_tensor([batch_size, <span class="hljs-number">1</span>], cardinality)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;static_real_features&quot;</span>] = torch.randn([batch_size, <span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;past_time_features&quot;</span>] = torch.randn([batch_size, past_length, num_time_features])
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;past_values&quot;</span>] = torch.randn([batch_size, past_length])
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;past_observed_mask&quot;</span>] = torch.ones([batch_size, past_length])

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># decoder inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;future_time_features&quot;</span>] = torch.randn([batch_size, prediction_length, num_time_features])
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;future_values&quot;</span>] = torch.randn([batch_size, prediction_length])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),T=o("Examples:"),l=m(),b(p.$$.fragment)},l(c){d=n(c,"P",{});var _=i(d);T=s(_,"Examples:"),_.forEach(t),l=f(c),w(p.$$.fragment,c)},m(c,_){g(c,d,_),e(d,T),g(c,l,_),y(p,c,_),v=!0},p:pa,i(c){v||(k(p.$$.fragment,c),v=!0)},o(c){S(p.$$.fragment,c),v=!1},d(c){c&&t(d),c&&t(l),x(p,c)}}}function On(C){let d,T,l,p,v,c,_,M,qo,so,te,ro,H,oe,ct,be,Co,lt,Mo,ao,Ue,Fo,no,He,jo,io,F,G,Po,Ge,Oo,Do,Ve,Ao,No,Io,$,Je,Lo,Bo,ht,Ro,Wo,mt,Uo,Ho,ft,Go,Vo,ut,Jo,Ko,pt,Qo,Xo,_t,Yo,Zo,es,R,ts,gt,os,ss,Tt,rs,as,L,se,vt,ns,is,bt,ds,cs,ls,re,wt,hs,ms,yt,fs,us,ps,W,kt,_s,gs,St,Ts,vs,xt,bs,ws,ys,A,$t,ks,Ss,Et,xs,$s,zt,Es,zs,Ke,qs,Cs,Ms,B,Fs,qt,js,Ps,Ct,Os,Ds,Mt,As,Ns,Is,we,Ls,Ft,Bs,Rs,co,ae,Ws,Qe,Us,Hs,lo,V,ne,jt,ye,Gs,Pt,Vs,ho,P,ke,Js,J,Ks,Xe,Qs,Xs,Se,Ys,Zs,er,K,tr,Ye,or,sr,Ze,rr,ar,nr,ie,mo,Q,de,Ot,xe,ir,Dt,dr,fo,O,$e,cr,Ee,lr,et,hr,mr,fr,ze,ur,qe,pr,_r,gr,N,Ce,Tr,X,vr,tt,br,wr,At,yr,kr,Sr,ce,xr,le,uo,Y,he,Nt,Me,$r,It,Er,po,D,Fe,zr,je,qr,ot,Cr,Mr,Fr,Pe,jr,Oe,Pr,Or,Dr,E,De,Ar,Z,Nr,st,Ir,Lr,Lt,Br,Rr,Wr,me,Ur,z,Hr,Bt,Gr,Vr,Rt,Jr,Kr,Wt,Qr,Xr,Ut,Yr,Zr,Ht,ea,ta,oa,Ae,Ne,sa,Gt,ra,aa,na,Ie,ia,Vt,da,ca,la,Jt,ha,ma,fe,_o;return c=new oo({}),te=new fa({props:{$$slots:{default:[qn]},$$scope:{ctx:C}}}),be=new oo({}),ye=new oo({}),ke=new to({props:{name:"class transformers.TimeSeriesTransformerConfig",anchor:"transformers.TimeSeriesTransformerConfig",parameters:[{name:"input_size",val:": int = 1"},{name:"prediction_length",val:": typing.Optional[int] = None"},{name:"context_length",val:": typing.Optional[int] = None"},{name:"distribution_output",val:": str = 'student_t'"},{name:"loss",val:": str = 'nll'"},{name:"lags_sequence",val:": typing.List[int] = [1, 2, 3, 4, 5, 6, 7]"},{name:"scaling",val:": bool = True"},{name:"num_dynamic_real_features",val:": int = 0"},{name:"num_static_categorical_features",val:": int = 0"},{name:"num_static_real_features",val:": int = 0"},{name:"num_time_features",val:": int = 0"},{name:"cardinality",val:": typing.Optional[typing.List[int]] = None"},{name:"embedding_dimension",val:": typing.Optional[typing.List[int]] = None"},{name:"encoder_ffn_dim",val:": int = 32"},{name:"decoder_ffn_dim",val:": int = 32"},{name:"encoder_attention_heads",val:": int = 2"},{name:"decoder_attention_heads",val:": int = 2"},{name:"encoder_layers",val:": int = 2"},{name:"decoder_layers",val:": int = 2"},{name:"is_encoder_decoder",val:": bool = True"},{name:"activation_function",val:": str = 'gelu'"},{name:"dropout",val:": float = 0.1"},{name:"encoder_layerdrop",val:": float = 0.1"},{name:"decoder_layerdrop",val:": float = 0.1"},{name:"attention_dropout",val:": float = 0.1"},{name:"activation_dropout",val:": float = 0.1"},{name:"num_parallel_samples",val:": int = 100"},{name:"init_std",val:": float = 0.02"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TimeSeriesTransformerConfig.prediction_length",description:`<strong>prediction_length</strong> (<code>int</code>) &#x2014;
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
<p>Example &#x2014;`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/time_series_transformer/configuration_time_series_transformer.py#L33"}}),ie=new ua({props:{anchor:"transformers.TimeSeriesTransformerConfig.example",$$slots:{default:[Cn]},$$scope:{ctx:C}}}),xe=new oo({}),$e=new to({props:{name:"class transformers.TimeSeriesTransformerModel",anchor:"transformers.TimeSeriesTransformerModel",parameters:[{name:"config",val:": TimeSeriesTransformerConfig"}],parametersDescription:[{anchor:"transformers.TimeSeriesTransformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerConfig">TimeSeriesTransformerConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/time_series_transformer/modeling_time_series_transformer.py#L1439"}}),Ce=new to({props:{name:"forward",anchor:"transformers.TimeSeriesTransformerModel.forward",parameters:[{name:"past_values",val:": Tensor"},{name:"past_time_features",val:": Tensor"},{name:"past_observed_mask",val:": Tensor"},{name:"static_categorical_features",val:": Tensor"},{name:"static_real_features",val:": Tensor"},{name:"future_values",val:": typing.Optional[torch.Tensor] = None"},{name:"future_time_features",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.TimeSeriesTransformerModel.forward.past_values",description:`<strong>past_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ce=new fa({props:{$$slots:{default:[Mn]},$$scope:{ctx:C}}}),le=new ua({props:{anchor:"transformers.TimeSeriesTransformerModel.forward.example",$$slots:{default:[Fn]},$$scope:{ctx:C}}}),Me=new oo({}),Fe=new to({props:{name:"class transformers.TimeSeriesTransformerForPrediction",anchor:"transformers.TimeSeriesTransformerForPrediction",parameters:[{name:"config",val:": TimeSeriesTransformerConfig"}],parametersDescription:[{anchor:"transformers.TimeSeriesTransformerForPrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerConfig">TimeSeriesTransformerConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/time_series_transformer/modeling_time_series_transformer.py#L1714"}}),De=new to({props:{name:"forward",anchor:"transformers.TimeSeriesTransformerForPrediction.forward",parameters:[{name:"past_values",val:": Tensor"},{name:"past_time_features",val:": Tensor"},{name:"past_observed_mask",val:": Tensor"},{name:"static_categorical_features",val:": Tensor"},{name:"static_real_features",val:": Tensor"},{name:"future_values",val:": typing.Optional[torch.Tensor] = None"},{name:"future_time_features",val:": typing.Optional[torch.Tensor] = None"},{name:"future_observed_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.past_values",description:`<strong>past_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/time_series_transformer/modeling_time_series_transformer.py#L1754",returnDescription:`
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
`}}),me=new fa({props:{$$slots:{default:[jn]},$$scope:{ctx:C}}}),fe=new ua({props:{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.example",$$slots:{default:[Pn]},$$scope:{ctx:C}}}),{c(){d=a("meta"),T=m(),l=a("h1"),p=a("a"),v=a("span"),b(c.$$.fragment),_=m(),M=a("span"),qo=o("Time Series Transformer"),so=m(),b(te.$$.fragment),ro=m(),H=a("h2"),oe=a("a"),ct=a("span"),b(be.$$.fragment),Co=m(),lt=a("span"),Mo=o("Overview"),ao=m(),Ue=a("p"),Fo=o("The Time Series Transformer model is a vanilla encoder-decoder Transformer for time series forecasting."),no=m(),He=a("p"),jo=o("Tips:"),io=m(),F=a("ul"),G=a("li"),Po=o("Similar to other models in the library, "),Ge=a("a"),Oo=o("TimeSeriesTransformerModel"),Do=o(" is the raw Transformer without any head on top, and "),Ve=a("a"),Ao=o("TimeSeriesTransformerForPrediction"),No=o(`
adds a distribution head on top of the former, which can be used for time-series forecasting. Note that this is a so-called probabilistic forecasting model, not a
point forecasting model. This means that the model learns a distribution, from which one can sample. The model doesn\u2019t directly output values.`),Io=m(),$=a("li"),Je=a("a"),Lo=o("TimeSeriesTransformerForPrediction"),Bo=o(" consists of 2 blocks: an encoder, which takes a "),ht=a("code"),Ro=o("context_length"),Wo=o(" of time series values as input (called "),mt=a("code"),Uo=o("past_values"),Ho=o(`),
and a decoder, which predicts a `),ft=a("code"),Go=o("prediction_length"),Vo=o(" of time series values into the future (called "),ut=a("code"),Jo=o("future_values"),Ko=o(`). During training, one needs to provide
pairs of (`),pt=a("code"),Qo=o("past_values"),Xo=o(" and "),_t=a("code"),Yo=o("future_values"),Zo=o(") to the model."),es=m(),R=a("li"),ts=o("In addition to the raw ("),gt=a("code"),os=o("past_values"),ss=o(" and "),Tt=a("code"),rs=o("future_values"),as=o("), one typically provides additional features to the model. These can be the following:"),L=a("ul"),se=a("li"),vt=a("code"),ns=o("past_time_features"),is=o(": temporal features which the model will add to "),bt=a("code"),ds=o("past_values"),cs=o(`. These serve as \u201Cpositional encodings\u201D for the Transformer encoder.
Examples are \u201Cday of the month\u201D, \u201Cmonth of the year\u201D, etc. as scalar values (and then stacked together as a vector).
e.g. if a given time-series value was obtained on the 11th of August, then one could have [11, 8] as time feature vector (11 being \u201Cday of the month\u201D, 8 being \u201Cmonth of the year\u201D).`),ls=m(),re=a("li"),wt=a("code"),hs=o("future_time_features"),ms=o(": temporal features which the model will add to "),yt=a("code"),fs=o("future_values"),us=o(`. These serve as \u201Cpositional encodings\u201D for the Transformer decoder.
Examples are \u201Cday of the month\u201D, \u201Cmonth of the year\u201D, etc. as scalar values (and then stacked together as a vector).
e.g. if a given time-series value was obtained on the 11th of August, then one could have [11, 8] as time feature vector (11 being \u201Cday of the month\u201D, 8 being \u201Cmonth of the year\u201D).`),ps=m(),W=a("li"),kt=a("code"),_s=o("static_categorical_features"),gs=o(": categorical features which are static over time (i.e., have the same value for all "),St=a("code"),Ts=o("past_values"),vs=o(" and "),xt=a("code"),bs=o("future_values"),ws=o(`).
An example here is the store ID or region ID that identifies a given time-series.
Note that these features need to be known for ALL data points (also those in the future).`),ys=m(),A=a("li"),$t=a("code"),ks=o("static_real_features"),Ss=o(": real-valued features which are static over time (i.e., have the same value for all "),Et=a("code"),xs=o("past_values"),$s=o(" and "),zt=a("code"),Es=o("future_values"),zs=o(`).
An example here is the image representation of the product for which you have the time-series values (like the `),Ke=a("a"),qs=o("ResNet"),Cs=o(` embedding of a \u201Cshoe\u201D picture,
if your time-series is about the sales of shoes).
Note that these features need to be known for ALL data points (also those in the future).`),Ms=m(),B=a("li"),Fs=o(`The model is trained using \u201Cteacher-forcing\u201D, similar to how a Transformer is trained for machine translation. This means that, during training, one shifts the
`),qt=a("code"),js=o("future_values"),Ps=o(" one position to the right as input to the decoder, prepended by the last value of "),Ct=a("code"),Os=o("past_values"),Ds=o(`. At each time step, the model needs to predict the
next target. So the set-up of training is similar to a GPT model for language, except that there\u2019s no notion of `),Mt=a("code"),As=o("decoder_start_token_id"),Ns=o(` (we just use the last value
of the context as initial input for the decoder).`),Is=m(),we=a("li"),Ls=o("At inference time, we give the final value of the "),Ft=a("code"),Bs=o("past_values"),Rs=o(` as input to the decoder. Next, we can sample from the model to make a prediction at the next time step,
which is then fed to the decoder in order to make the next prediction (also called autoregressive generation).`),co=m(),ae=a("p"),Ws=o("This model was contributed by "),Qe=a("a"),Us=o("kashif"),Hs=o("."),lo=m(),V=a("h2"),ne=a("a"),jt=a("span"),b(ye.$$.fragment),Gs=m(),Pt=a("span"),Vs=o("TimeSeriesTransformerConfig"),ho=m(),P=a("div"),b(ke.$$.fragment),Js=m(),J=a("p"),Ks=o("This is the configuration class to store the configuration of a "),Xe=a("a"),Qs=o("TimeSeriesTransformerModel"),Xs=o(`. It is used to
instantiate a Time Series Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Time Series
Transformer
`),Se=a("a"),Ys=o("huggingface/time-series-transformer-tourism-monthly"),Zs=o(`
architecture.`),er=m(),K=a("p"),tr=o("Configuration objects inherit from "),Ye=a("a"),or=o("PretrainedConfig"),sr=o(` can be used to control the model outputs. Read the
documentation from `),Ze=a("a"),rr=o("PretrainedConfig"),ar=o(" for more information."),nr=m(),b(ie.$$.fragment),mo=m(),Q=a("h2"),de=a("a"),Ot=a("span"),b(xe.$$.fragment),ir=m(),Dt=a("span"),dr=o("TimeSeriesTransformerModel"),fo=m(),O=a("div"),b($e.$$.fragment),cr=m(),Ee=a("p"),lr=o(`The bare Time Series Transformer Model outputting raw hidden-states without any specific head on top.
This model inherits from `),et=a("a"),hr=o("PreTrainedModel"),mr=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fr=m(),ze=a("p"),ur=o("This model is also a PyTorch "),qe=a("a"),pr=o("torch.nn.Module"),_r=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gr=m(),N=a("div"),b(Ce.$$.fragment),Tr=m(),X=a("p"),vr=o("The "),tt=a("a"),br=o("TimeSeriesTransformerModel"),wr=o(" forward method, overrides the "),At=a("code"),yr=o("__call__"),kr=o(" special method."),Sr=m(),b(ce.$$.fragment),xr=m(),b(le.$$.fragment),uo=m(),Y=a("h2"),he=a("a"),Nt=a("span"),b(Me.$$.fragment),$r=m(),It=a("span"),Er=o("TimeSeriesTransformerForPrediction"),po=m(),D=a("div"),b(Fe.$$.fragment),zr=m(),je=a("p"),qr=o(`The Time Series Transformer Model with a distribution head on top for time-series forecasting.
This model inherits from `),ot=a("a"),Cr=o("PreTrainedModel"),Mr=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fr=m(),Pe=a("p"),jr=o("This model is also a PyTorch "),Oe=a("a"),Pr=o("torch.nn.Module"),Or=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dr=m(),E=a("div"),b(De.$$.fragment),Ar=m(),Z=a("p"),Nr=o("The "),st=a("a"),Ir=o("TimeSeriesTransformerForPrediction"),Lr=o(" forward method, overrides the "),Lt=a("code"),Br=o("__call__"),Rr=o(" special method."),Wr=m(),b(me.$$.fragment),Ur=m(),z=a("p"),Hr=o("future_observed_mask ("),Bt=a("code"),Gr=o("torch.BoolTensor"),Vr=o(" of shape "),Rt=a("code"),Jr=o("(batch_size, sequence_length)"),Kr=o(", "),Wt=a("em"),Qr=o("optional"),Xr=o(`):
Boolean mask to indicate which `),Ut=a("code"),Yr=o("future_values"),Zr=o(` were observed and which were missing. Mask values selected
in `),Ht=a("code"),ea=o("[0, 1]"),ta=o(":"),oa=m(),Ae=a("ul"),Ne=a("li"),sa=o("1 for values that are "),Gt=a("strong"),ra=o("observed"),aa=o(","),na=m(),Ie=a("li"),ia=o("0 for values that are "),Vt=a("strong"),da=o("missing"),ca=o(" (i.e. NaNs that were replaced by zeros)."),la=m(),Jt=a("p"),ha=o("This mask is used to filter out missing values for the final loss calculation."),ma=m(),b(fe.$$.fragment),this.h()},l(r){const u=En('[data-svelte="svelte-1phssyn"]',document.head);d=n(u,"META",{name:!0,content:!0}),u.forEach(t),T=f(r),l=n(r,"H1",{class:!0});var Le=i(l);p=n(Le,"A",{id:!0,class:!0,href:!0});var Kt=i(p);v=n(Kt,"SPAN",{});var Qt=i(v);w(c.$$.fragment,Qt),Qt.forEach(t),Kt.forEach(t),_=f(Le),M=n(Le,"SPAN",{});var Xt=i(M);qo=s(Xt,"Time Series Transformer"),Xt.forEach(t),Le.forEach(t),so=f(r),w(te.$$.fragment,r),ro=f(r),H=n(r,"H2",{class:!0});var Be=i(H);oe=n(Be,"A",{id:!0,class:!0,href:!0});var Yt=i(oe);ct=n(Yt,"SPAN",{});var ga=i(ct);w(be.$$.fragment,ga),ga.forEach(t),Yt.forEach(t),Co=f(Be),lt=n(Be,"SPAN",{});var Ta=i(lt);Mo=s(Ta,"Overview"),Ta.forEach(t),Be.forEach(t),ao=f(r),Ue=n(r,"P",{});var va=i(Ue);Fo=s(va,"The Time Series Transformer model is a vanilla encoder-decoder Transformer for time series forecasting."),va.forEach(t),no=f(r),He=n(r,"P",{});var ba=i(He);jo=s(ba,"Tips:"),ba.forEach(t),io=f(r),F=n(r,"UL",{});var U=i(F);G=n(U,"LI",{});var rt=i(G);Po=s(rt,"Similar to other models in the library, "),Ge=n(rt,"A",{href:!0});var wa=i(Ge);Oo=s(wa,"TimeSeriesTransformerModel"),wa.forEach(t),Do=s(rt," is the raw Transformer without any head on top, and "),Ve=n(rt,"A",{href:!0});var ya=i(Ve);Ao=s(ya,"TimeSeriesTransformerForPrediction"),ya.forEach(t),No=s(rt,`
adds a distribution head on top of the former, which can be used for time-series forecasting. Note that this is a so-called probabilistic forecasting model, not a
point forecasting model. This means that the model learns a distribution, from which one can sample. The model doesn\u2019t directly output values.`),rt.forEach(t),Io=f(U),$=n(U,"LI",{});var q=i($);Je=n(q,"A",{href:!0});var ka=i(Je);Lo=s(ka,"TimeSeriesTransformerForPrediction"),ka.forEach(t),Bo=s(q," consists of 2 blocks: an encoder, which takes a "),ht=n(q,"CODE",{});var Sa=i(ht);Ro=s(Sa,"context_length"),Sa.forEach(t),Wo=s(q," of time series values as input (called "),mt=n(q,"CODE",{});var xa=i(mt);Uo=s(xa,"past_values"),xa.forEach(t),Ho=s(q,`),
and a decoder, which predicts a `),ft=n(q,"CODE",{});var $a=i(ft);Go=s($a,"prediction_length"),$a.forEach(t),Vo=s(q," of time series values into the future (called "),ut=n(q,"CODE",{});var Ea=i(ut);Jo=s(Ea,"future_values"),Ea.forEach(t),Ko=s(q,`). During training, one needs to provide
pairs of (`),pt=n(q,"CODE",{});var za=i(pt);Qo=s(za,"past_values"),za.forEach(t),Xo=s(q," and "),_t=n(q,"CODE",{});var qa=i(_t);Yo=s(qa,"future_values"),qa.forEach(t),Zo=s(q,") to the model."),q.forEach(t),es=f(U),R=n(U,"LI",{});var Re=i(R);ts=s(Re,"In addition to the raw ("),gt=n(Re,"CODE",{});var Ca=i(gt);os=s(Ca,"past_values"),Ca.forEach(t),ss=s(Re," and "),Tt=n(Re,"CODE",{});var Ma=i(Tt);rs=s(Ma,"future_values"),Ma.forEach(t),as=s(Re,"), one typically provides additional features to the model. These can be the following:"),L=n(Re,"UL",{});var ue=i(L);se=n(ue,"LI",{});var Zt=i(se);vt=n(Zt,"CODE",{});var Fa=i(vt);ns=s(Fa,"past_time_features"),Fa.forEach(t),is=s(Zt,": temporal features which the model will add to "),bt=n(Zt,"CODE",{});var ja=i(bt);ds=s(ja,"past_values"),ja.forEach(t),cs=s(Zt,`. These serve as \u201Cpositional encodings\u201D for the Transformer encoder.
Examples are \u201Cday of the month\u201D, \u201Cmonth of the year\u201D, etc. as scalar values (and then stacked together as a vector).
e.g. if a given time-series value was obtained on the 11th of August, then one could have [11, 8] as time feature vector (11 being \u201Cday of the month\u201D, 8 being \u201Cmonth of the year\u201D).`),Zt.forEach(t),ls=f(ue),re=n(ue,"LI",{});var eo=i(re);wt=n(eo,"CODE",{});var Pa=i(wt);hs=s(Pa,"future_time_features"),Pa.forEach(t),ms=s(eo,": temporal features which the model will add to "),yt=n(eo,"CODE",{});var Oa=i(yt);fs=s(Oa,"future_values"),Oa.forEach(t),us=s(eo,`. These serve as \u201Cpositional encodings\u201D for the Transformer decoder.
Examples are \u201Cday of the month\u201D, \u201Cmonth of the year\u201D, etc. as scalar values (and then stacked together as a vector).
e.g. if a given time-series value was obtained on the 11th of August, then one could have [11, 8] as time feature vector (11 being \u201Cday of the month\u201D, 8 being \u201Cmonth of the year\u201D).`),eo.forEach(t),ps=f(ue),W=n(ue,"LI",{});var We=i(W);kt=n(We,"CODE",{});var Da=i(kt);_s=s(Da,"static_categorical_features"),Da.forEach(t),gs=s(We,": categorical features which are static over time (i.e., have the same value for all "),St=n(We,"CODE",{});var Aa=i(St);Ts=s(Aa,"past_values"),Aa.forEach(t),vs=s(We," and "),xt=n(We,"CODE",{});var Na=i(xt);bs=s(Na,"future_values"),Na.forEach(t),ws=s(We,`).
An example here is the store ID or region ID that identifies a given time-series.
Note that these features need to be known for ALL data points (also those in the future).`),We.forEach(t),ys=f(ue),A=n(ue,"LI",{});var ee=i(A);$t=n(ee,"CODE",{});var Ia=i($t);ks=s(Ia,"static_real_features"),Ia.forEach(t),Ss=s(ee,": real-valued features which are static over time (i.e., have the same value for all "),Et=n(ee,"CODE",{});var La=i(Et);xs=s(La,"past_values"),La.forEach(t),$s=s(ee," and "),zt=n(ee,"CODE",{});var Ba=i(zt);Es=s(Ba,"future_values"),Ba.forEach(t),zs=s(ee,`).
An example here is the image representation of the product for which you have the time-series values (like the `),Ke=n(ee,"A",{href:!0});var Ra=i(Ke);qs=s(Ra,"ResNet"),Ra.forEach(t),Cs=s(ee,` embedding of a \u201Cshoe\u201D picture,
if your time-series is about the sales of shoes).
Note that these features need to be known for ALL data points (also those in the future).`),ee.forEach(t),ue.forEach(t),Re.forEach(t),Ms=f(U),B=n(U,"LI",{});var pe=i(B);Fs=s(pe,`The model is trained using \u201Cteacher-forcing\u201D, similar to how a Transformer is trained for machine translation. This means that, during training, one shifts the
`),qt=n(pe,"CODE",{});var Wa=i(qt);js=s(Wa,"future_values"),Wa.forEach(t),Ps=s(pe," one position to the right as input to the decoder, prepended by the last value of "),Ct=n(pe,"CODE",{});var Ua=i(Ct);Os=s(Ua,"past_values"),Ua.forEach(t),Ds=s(pe,`. At each time step, the model needs to predict the
next target. So the set-up of training is similar to a GPT model for language, except that there\u2019s no notion of `),Mt=n(pe,"CODE",{});var Ha=i(Mt);As=s(Ha,"decoder_start_token_id"),Ha.forEach(t),Ns=s(pe,` (we just use the last value
of the context as initial input for the decoder).`),pe.forEach(t),Is=f(U),we=n(U,"LI",{});var go=i(we);Ls=s(go,"At inference time, we give the final value of the "),Ft=n(go,"CODE",{});var Ga=i(Ft);Bs=s(Ga,"past_values"),Ga.forEach(t),Rs=s(go,` as input to the decoder. Next, we can sample from the model to make a prediction at the next time step,
which is then fed to the decoder in order to make the next prediction (also called autoregressive generation).`),go.forEach(t),U.forEach(t),co=f(r),ae=n(r,"P",{});var To=i(ae);Ws=s(To,"This model was contributed by "),Qe=n(To,"A",{href:!0});var Va=i(Qe);Us=s(Va,"kashif"),Va.forEach(t),Hs=s(To,"."),To.forEach(t),lo=f(r),V=n(r,"H2",{class:!0});var vo=i(V);ne=n(vo,"A",{id:!0,class:!0,href:!0});var Ja=i(ne);jt=n(Ja,"SPAN",{});var Ka=i(jt);w(ye.$$.fragment,Ka),Ka.forEach(t),Ja.forEach(t),Gs=f(vo),Pt=n(vo,"SPAN",{});var Qa=i(Pt);Vs=s(Qa,"TimeSeriesTransformerConfig"),Qa.forEach(t),vo.forEach(t),ho=f(r),P=n(r,"DIV",{class:!0});var _e=i(P);w(ke.$$.fragment,_e),Js=f(_e),J=n(_e,"P",{});var at=i(J);Ks=s(at,"This is the configuration class to store the configuration of a "),Xe=n(at,"A",{href:!0});var Xa=i(Xe);Qs=s(Xa,"TimeSeriesTransformerModel"),Xa.forEach(t),Xs=s(at,`. It is used to
instantiate a Time Series Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Time Series
Transformer
`),Se=n(at,"A",{href:!0,rel:!0});var Ya=i(Se);Ys=s(Ya,"huggingface/time-series-transformer-tourism-monthly"),Ya.forEach(t),Zs=s(at,`
architecture.`),at.forEach(t),er=f(_e),K=n(_e,"P",{});var nt=i(K);tr=s(nt,"Configuration objects inherit from "),Ye=n(nt,"A",{href:!0});var Za=i(Ye);or=s(Za,"PretrainedConfig"),Za.forEach(t),sr=s(nt,` can be used to control the model outputs. Read the
documentation from `),Ze=n(nt,"A",{href:!0});var en=i(Ze);rr=s(en,"PretrainedConfig"),en.forEach(t),ar=s(nt," for more information."),nt.forEach(t),nr=f(_e),w(ie.$$.fragment,_e),_e.forEach(t),mo=f(r),Q=n(r,"H2",{class:!0});var bo=i(Q);de=n(bo,"A",{id:!0,class:!0,href:!0});var tn=i(de);Ot=n(tn,"SPAN",{});var on=i(Ot);w(xe.$$.fragment,on),on.forEach(t),tn.forEach(t),ir=f(bo),Dt=n(bo,"SPAN",{});var sn=i(Dt);dr=s(sn,"TimeSeriesTransformerModel"),sn.forEach(t),bo.forEach(t),fo=f(r),O=n(r,"DIV",{class:!0});var ge=i(O);w($e.$$.fragment,ge),cr=f(ge),Ee=n(ge,"P",{});var wo=i(Ee);lr=s(wo,`The bare Time Series Transformer Model outputting raw hidden-states without any specific head on top.
This model inherits from `),et=n(wo,"A",{href:!0});var rn=i(et);hr=s(rn,"PreTrainedModel"),rn.forEach(t),mr=s(wo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wo.forEach(t),fr=f(ge),ze=n(ge,"P",{});var yo=i(ze);ur=s(yo,"This model is also a PyTorch "),qe=n(yo,"A",{href:!0,rel:!0});var an=i(qe);pr=s(an,"torch.nn.Module"),an.forEach(t),_r=s(yo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yo.forEach(t),gr=f(ge),N=n(ge,"DIV",{class:!0});var Te=i(N);w(Ce.$$.fragment,Te),Tr=f(Te),X=n(Te,"P",{});var it=i(X);vr=s(it,"The "),tt=n(it,"A",{href:!0});var nn=i(tt);br=s(nn,"TimeSeriesTransformerModel"),nn.forEach(t),wr=s(it," forward method, overrides the "),At=n(it,"CODE",{});var dn=i(At);yr=s(dn,"__call__"),dn.forEach(t),kr=s(it," special method."),it.forEach(t),Sr=f(Te),w(ce.$$.fragment,Te),xr=f(Te),w(le.$$.fragment,Te),Te.forEach(t),ge.forEach(t),uo=f(r),Y=n(r,"H2",{class:!0});var ko=i(Y);he=n(ko,"A",{id:!0,class:!0,href:!0});var cn=i(he);Nt=n(cn,"SPAN",{});var ln=i(Nt);w(Me.$$.fragment,ln),ln.forEach(t),cn.forEach(t),$r=f(ko),It=n(ko,"SPAN",{});var hn=i(It);Er=s(hn,"TimeSeriesTransformerForPrediction"),hn.forEach(t),ko.forEach(t),po=f(r),D=n(r,"DIV",{class:!0});var ve=i(D);w(Fe.$$.fragment,ve),zr=f(ve),je=n(ve,"P",{});var So=i(je);qr=s(So,`The Time Series Transformer Model with a distribution head on top for time-series forecasting.
This model inherits from `),ot=n(So,"A",{href:!0});var mn=i(ot);Cr=s(mn,"PreTrainedModel"),mn.forEach(t),Mr=s(So,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),So.forEach(t),Fr=f(ve),Pe=n(ve,"P",{});var xo=i(Pe);jr=s(xo,"This model is also a PyTorch "),Oe=n(xo,"A",{href:!0,rel:!0});var fn=i(Oe);Pr=s(fn,"torch.nn.Module"),fn.forEach(t),Or=s(xo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xo.forEach(t),Dr=f(ve),E=n(ve,"DIV",{class:!0});var j=i(E);w(De.$$.fragment,j),Ar=f(j),Z=n(j,"P",{});var dt=i(Z);Nr=s(dt,"The "),st=n(dt,"A",{href:!0});var un=i(st);Ir=s(un,"TimeSeriesTransformerForPrediction"),un.forEach(t),Lr=s(dt," forward method, overrides the "),Lt=n(dt,"CODE",{});var pn=i(Lt);Br=s(pn,"__call__"),pn.forEach(t),Rr=s(dt," special method."),dt.forEach(t),Wr=f(j),w(me.$$.fragment,j),Ur=f(j),z=n(j,"P",{});var I=i(z);Hr=s(I,"future_observed_mask ("),Bt=n(I,"CODE",{});var _n=i(Bt);Gr=s(_n,"torch.BoolTensor"),_n.forEach(t),Vr=s(I," of shape "),Rt=n(I,"CODE",{});var gn=i(Rt);Jr=s(gn,"(batch_size, sequence_length)"),gn.forEach(t),Kr=s(I,", "),Wt=n(I,"EM",{});var Tn=i(Wt);Qr=s(Tn,"optional"),Tn.forEach(t),Xr=s(I,`):
Boolean mask to indicate which `),Ut=n(I,"CODE",{});var vn=i(Ut);Yr=s(vn,"future_values"),vn.forEach(t),Zr=s(I,` were observed and which were missing. Mask values selected
in `),Ht=n(I,"CODE",{});var bn=i(Ht);ea=s(bn,"[0, 1]"),bn.forEach(t),ta=s(I,":"),I.forEach(t),oa=f(j),Ae=n(j,"UL",{});var $o=i(Ae);Ne=n($o,"LI",{});var Eo=i(Ne);sa=s(Eo,"1 for values that are "),Gt=n(Eo,"STRONG",{});var wn=i(Gt);ra=s(wn,"observed"),wn.forEach(t),aa=s(Eo,","),Eo.forEach(t),na=f($o),Ie=n($o,"LI",{});var zo=i(Ie);ia=s(zo,"0 for values that are "),Vt=n(zo,"STRONG",{});var yn=i(Vt);da=s(yn,"missing"),yn.forEach(t),ca=s(zo," (i.e. NaNs that were replaced by zeros)."),zo.forEach(t),$o.forEach(t),la=f(j),Jt=n(j,"P",{});var kn=i(Jt);ha=s(kn,"This mask is used to filter out missing values for the final loss calculation."),kn.forEach(t),ma=f(j),w(fe.$$.fragment,j),j.forEach(t),ve.forEach(t),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(Dn)),h(p,"id","time-series-transformer"),h(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(p,"href","#time-series-transformer"),h(l,"class","relative group"),h(oe,"id","overview"),h(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oe,"href","#overview"),h(H,"class","relative group"),h(Ge,"href","/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerModel"),h(Ve,"href","/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerForPrediction"),h(Je,"href","/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerForPrediction"),h(Ke,"href","resnet"),h(Qe,"href","<https://huggingface.co/kashif"),h(ne,"id","transformers.TimeSeriesTransformerConfig"),h(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ne,"href","#transformers.TimeSeriesTransformerConfig"),h(V,"class","relative group"),h(Xe,"href","/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerModel"),h(Se,"href","https://huggingface.co/huggingface/time-series-transformer-tourism-monthly"),h(Se,"rel","nofollow"),h(Ye,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Ze,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(de,"id","transformers.TimeSeriesTransformerModel"),h(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(de,"href","#transformers.TimeSeriesTransformerModel"),h(Q,"class","relative group"),h(et,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(qe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(qe,"rel","nofollow"),h(tt,"href","/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerModel"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(he,"id","transformers.TimeSeriesTransformerForPrediction"),h(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(he,"href","#transformers.TimeSeriesTransformerForPrediction"),h(Y,"class","relative group"),h(ot,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Oe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Oe,"rel","nofollow"),h(st,"href","/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerForPrediction"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(r,u){e(document.head,d),g(r,T,u),g(r,l,u),e(l,p),e(p,v),y(c,v,null),e(l,_),e(l,M),e(M,qo),g(r,so,u),y(te,r,u),g(r,ro,u),g(r,H,u),e(H,oe),e(oe,ct),y(be,ct,null),e(H,Co),e(H,lt),e(lt,Mo),g(r,ao,u),g(r,Ue,u),e(Ue,Fo),g(r,no,u),g(r,He,u),e(He,jo),g(r,io,u),g(r,F,u),e(F,G),e(G,Po),e(G,Ge),e(Ge,Oo),e(G,Do),e(G,Ve),e(Ve,Ao),e(G,No),e(F,Io),e(F,$),e($,Je),e(Je,Lo),e($,Bo),e($,ht),e(ht,Ro),e($,Wo),e($,mt),e(mt,Uo),e($,Ho),e($,ft),e(ft,Go),e($,Vo),e($,ut),e(ut,Jo),e($,Ko),e($,pt),e(pt,Qo),e($,Xo),e($,_t),e(_t,Yo),e($,Zo),e(F,es),e(F,R),e(R,ts),e(R,gt),e(gt,os),e(R,ss),e(R,Tt),e(Tt,rs),e(R,as),e(R,L),e(L,se),e(se,vt),e(vt,ns),e(se,is),e(se,bt),e(bt,ds),e(se,cs),e(L,ls),e(L,re),e(re,wt),e(wt,hs),e(re,ms),e(re,yt),e(yt,fs),e(re,us),e(L,ps),e(L,W),e(W,kt),e(kt,_s),e(W,gs),e(W,St),e(St,Ts),e(W,vs),e(W,xt),e(xt,bs),e(W,ws),e(L,ys),e(L,A),e(A,$t),e($t,ks),e(A,Ss),e(A,Et),e(Et,xs),e(A,$s),e(A,zt),e(zt,Es),e(A,zs),e(A,Ke),e(Ke,qs),e(A,Cs),e(F,Ms),e(F,B),e(B,Fs),e(B,qt),e(qt,js),e(B,Ps),e(B,Ct),e(Ct,Os),e(B,Ds),e(B,Mt),e(Mt,As),e(B,Ns),e(F,Is),e(F,we),e(we,Ls),e(we,Ft),e(Ft,Bs),e(we,Rs),g(r,co,u),g(r,ae,u),e(ae,Ws),e(ae,Qe),e(Qe,Us),e(ae,Hs),g(r,lo,u),g(r,V,u),e(V,ne),e(ne,jt),y(ye,jt,null),e(V,Gs),e(V,Pt),e(Pt,Vs),g(r,ho,u),g(r,P,u),y(ke,P,null),e(P,Js),e(P,J),e(J,Ks),e(J,Xe),e(Xe,Qs),e(J,Xs),e(J,Se),e(Se,Ys),e(J,Zs),e(P,er),e(P,K),e(K,tr),e(K,Ye),e(Ye,or),e(K,sr),e(K,Ze),e(Ze,rr),e(K,ar),e(P,nr),y(ie,P,null),g(r,mo,u),g(r,Q,u),e(Q,de),e(de,Ot),y(xe,Ot,null),e(Q,ir),e(Q,Dt),e(Dt,dr),g(r,fo,u),g(r,O,u),y($e,O,null),e(O,cr),e(O,Ee),e(Ee,lr),e(Ee,et),e(et,hr),e(Ee,mr),e(O,fr),e(O,ze),e(ze,ur),e(ze,qe),e(qe,pr),e(ze,_r),e(O,gr),e(O,N),y(Ce,N,null),e(N,Tr),e(N,X),e(X,vr),e(X,tt),e(tt,br),e(X,wr),e(X,At),e(At,yr),e(X,kr),e(N,Sr),y(ce,N,null),e(N,xr),y(le,N,null),g(r,uo,u),g(r,Y,u),e(Y,he),e(he,Nt),y(Me,Nt,null),e(Y,$r),e(Y,It),e(It,Er),g(r,po,u),g(r,D,u),y(Fe,D,null),e(D,zr),e(D,je),e(je,qr),e(je,ot),e(ot,Cr),e(je,Mr),e(D,Fr),e(D,Pe),e(Pe,jr),e(Pe,Oe),e(Oe,Pr),e(Pe,Or),e(D,Dr),e(D,E),y(De,E,null),e(E,Ar),e(E,Z),e(Z,Nr),e(Z,st),e(st,Ir),e(Z,Lr),e(Z,Lt),e(Lt,Br),e(Z,Rr),e(E,Wr),y(me,E,null),e(E,Ur),e(E,z),e(z,Hr),e(z,Bt),e(Bt,Gr),e(z,Vr),e(z,Rt),e(Rt,Jr),e(z,Kr),e(z,Wt),e(Wt,Qr),e(z,Xr),e(z,Ut),e(Ut,Yr),e(z,Zr),e(z,Ht),e(Ht,ea),e(z,ta),e(E,oa),e(E,Ae),e(Ae,Ne),e(Ne,sa),e(Ne,Gt),e(Gt,ra),e(Ne,aa),e(Ae,na),e(Ae,Ie),e(Ie,ia),e(Ie,Vt),e(Vt,da),e(Ie,ca),e(E,la),e(E,Jt),e(Jt,ha),e(E,ma),y(fe,E,null),_o=!0},p(r,[u]){const Le={};u&2&&(Le.$$scope={dirty:u,ctx:r}),te.$set(Le);const Kt={};u&2&&(Kt.$$scope={dirty:u,ctx:r}),ie.$set(Kt);const Qt={};u&2&&(Qt.$$scope={dirty:u,ctx:r}),ce.$set(Qt);const Xt={};u&2&&(Xt.$$scope={dirty:u,ctx:r}),le.$set(Xt);const Be={};u&2&&(Be.$$scope={dirty:u,ctx:r}),me.$set(Be);const Yt={};u&2&&(Yt.$$scope={dirty:u,ctx:r}),fe.$set(Yt)},i(r){_o||(k(c.$$.fragment,r),k(te.$$.fragment,r),k(be.$$.fragment,r),k(ye.$$.fragment,r),k(ke.$$.fragment,r),k(ie.$$.fragment,r),k(xe.$$.fragment,r),k($e.$$.fragment,r),k(Ce.$$.fragment,r),k(ce.$$.fragment,r),k(le.$$.fragment,r),k(Me.$$.fragment,r),k(Fe.$$.fragment,r),k(De.$$.fragment,r),k(me.$$.fragment,r),k(fe.$$.fragment,r),_o=!0)},o(r){S(c.$$.fragment,r),S(te.$$.fragment,r),S(be.$$.fragment,r),S(ye.$$.fragment,r),S(ke.$$.fragment,r),S(ie.$$.fragment,r),S(xe.$$.fragment,r),S($e.$$.fragment,r),S(Ce.$$.fragment,r),S(ce.$$.fragment,r),S(le.$$.fragment,r),S(Me.$$.fragment,r),S(Fe.$$.fragment,r),S(De.$$.fragment,r),S(me.$$.fragment,r),S(fe.$$.fragment,r),_o=!1},d(r){t(d),r&&t(T),r&&t(l),x(c),r&&t(so),x(te,r),r&&t(ro),r&&t(H),x(be),r&&t(ao),r&&t(Ue),r&&t(no),r&&t(He),r&&t(io),r&&t(F),r&&t(co),r&&t(ae),r&&t(lo),r&&t(V),x(ye),r&&t(ho),r&&t(P),x(ke),x(ie),r&&t(mo),r&&t(Q),x(xe),r&&t(fo),r&&t(O),x($e),x(Ce),x(ce),x(le),r&&t(uo),r&&t(Y),x(Me),r&&t(po),r&&t(D),x(Fe),x(De),x(me),x(fe)}}}const Dn={local:"time-series-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.TimeSeriesTransformerConfig",title:"TimeSeriesTransformerConfig"},{local:"transformers.TimeSeriesTransformerModel",title:"TimeSeriesTransformerModel"},{local:"transformers.TimeSeriesTransformerForPrediction",title:"TimeSeriesTransformerForPrediction"}],title:"Time Series Transformer"};function An(C){return zn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Un extends Sn{constructor(d){super();xn(this,d,An,On,$n,{})}}export{Un as default,Dn as metadata};
