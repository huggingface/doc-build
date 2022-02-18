import{S as lp,i as dp,s as cp,e as a,k as d,w,t as r,L as hp,c as n,d as t,m as c,a as s,x as b,h as i,b as l,J as e,g as f,y,q as x,o as $,B as F}from"../../chunks/vendor-b1433968.js";import{T as Fe}from"../../chunks/Tip-c3840994.js";import{D as U}from"../../chunks/Docstring-ff504c58.js";import{C as No}from"../../chunks/CodeBlock-a320dbd7.js";import{I as Ee}from"../../chunks/IconCopyLink-7029626d.js";import"../../chunks/CopyButton-f65cb278.js";function pp(I){let h,v,m,u,T;return{c(){h=a("p"),v=r(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=a("a"),u=r("Github Issue"),T=r("."),this.h()},l(_){h=n(_,"P",{});var g=s(h);v=i(g,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=n(g,"A",{href:!0,rel:!0});var V=s(m);u=i(V,"Github Issue"),V.forEach(t),T=i(g,"."),g.forEach(t),this.h()},h(){l(m,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),l(m,"rel","nofollow")},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function fp(I){let h,v;return{c(){h=a("p"),v=r(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(m){h=n(m,"P",{});var u=s(h);v=i(u,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),u.forEach(t)},m(m,u){f(m,h,u),e(h,v)},d(m){m&&t(h)}}}function mp(I){let h,v,m,u,T;return{c(){h=a("p"),v=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),u=r("Module"),T=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(_){h=n(_,"P",{});var g=s(h);v=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=n(g,"CODE",{});var V=s(m);u=i(V,"Module"),V.forEach(t),T=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function up(I){let h,v,m,u,T;return{c(){h=a("p"),v=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),u=r("Module"),T=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(_){h=n(_,"P",{});var g=s(h);v=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=n(g,"CODE",{});var V=s(m);u=i(V,"Module"),V.forEach(t),T=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function gp(I){let h,v,m,u,T,_,g,V,de,R,k,re,P,W,te,C,ce,oe;return{c(){h=a("p"),v=r("TF 2.0 models accepts two formats as inputs:"),m=d(),u=a("ul"),T=a("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),V=a("li"),de=r("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),re=r("This second option is useful when using "),P=a("code"),W=r("tf.keras.Model.fit"),te=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),C=a("code"),ce=r("model(inputs)"),oe=r(".")},l(E){h=n(E,"P",{});var j=s(h);v=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=c(E),u=n(E,"UL",{});var N=s(u);T=n(N,"LI",{});var Ve=s(T);_=i(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),g=c(N),V=n(N,"LI",{});var ae=s(V);de=i(ae,"having all inputs as a list, tuple or dict in the first positional arguments."),ae.forEach(t),N.forEach(t),R=c(E),k=n(E,"P",{});var D=s(k);re=i(D,"This second option is useful when using "),P=n(D,"CODE",{});var ke=s(P);W=i(ke,"tf.keras.Model.fit"),ke.forEach(t),te=i(D,` method which currently requires having all
the tensors in the first argument of the model call function: `),C=n(D,"CODE",{});var me=s(C);ce=i(me,"model(inputs)"),me.forEach(t),oe=i(D,"."),D.forEach(t)},m(E,j){f(E,h,j),e(h,v),f(E,m,j),f(E,u,j),e(u,T),e(T,_),e(u,g),e(u,V),e(V,de),f(E,R,j),f(E,k,j),e(k,re),e(k,P),e(P,W),e(k,te),e(k,C),e(C,ce),e(k,oe)},d(E){E&&t(h),E&&t(m),E&&t(u),E&&t(R),E&&t(k)}}}function _p(I){let h,v,m,u,T;return{c(){h=a("p"),v=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),u=r("Module"),T=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(_){h=n(_,"P",{});var g=s(h);v=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=n(g,"CODE",{});var V=s(m);u=i(V,"Module"),V.forEach(t),T=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function vp(I){let h,v,m,u,T,_,g,V,de,R,k,re,P,W,te,C,ce,oe;return{c(){h=a("p"),v=r("TF 2.0 models accepts two formats as inputs:"),m=d(),u=a("ul"),T=a("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),V=a("li"),de=r("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),re=r("This second option is useful when using "),P=a("code"),W=r("tf.keras.Model.fit"),te=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),C=a("code"),ce=r("model(inputs)"),oe=r(".")},l(E){h=n(E,"P",{});var j=s(h);v=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=c(E),u=n(E,"UL",{});var N=s(u);T=n(N,"LI",{});var Ve=s(T);_=i(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),g=c(N),V=n(N,"LI",{});var ae=s(V);de=i(ae,"having all inputs as a list, tuple or dict in the first positional arguments."),ae.forEach(t),N.forEach(t),R=c(E),k=n(E,"P",{});var D=s(k);re=i(D,"This second option is useful when using "),P=n(D,"CODE",{});var ke=s(P);W=i(ke,"tf.keras.Model.fit"),ke.forEach(t),te=i(D,` method which currently requires having all
the tensors in the first argument of the model call function: `),C=n(D,"CODE",{});var me=s(C);ce=i(me,"model(inputs)"),me.forEach(t),oe=i(D,"."),D.forEach(t)},m(E,j){f(E,h,j),e(h,v),f(E,m,j),f(E,u,j),e(u,T),e(T,_),e(u,g),e(u,V),e(V,de),f(E,R,j),f(E,k,j),e(k,re),e(k,P),e(P,W),e(k,te),e(k,C),e(C,ce),e(k,oe)},d(E){E&&t(h),E&&t(m),E&&t(u),E&&t(R),E&&t(k)}}}function Tp(I){let h,v,m,u,T;return{c(){h=a("p"),v=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),u=r("Module"),T=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(_){h=n(_,"P",{});var g=s(h);v=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=n(g,"CODE",{});var V=s(m);u=i(V,"Module"),V.forEach(t),T=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function wp(I){let h,v,m,u,T;return{c(){h=a("p"),v=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),u=r("Module"),T=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(_){h=n(_,"P",{});var g=s(h);v=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=n(g,"CODE",{});var V=s(m);u=i(V,"Module"),V.forEach(t),T=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function bp(I){let h,v,m,u,T;return{c(){h=a("p"),v=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),u=r("Module"),T=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(_){h=n(_,"P",{});var g=s(h);v=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=n(g,"CODE",{});var V=s(m);u=i(V,"Module"),V.forEach(t),T=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function yp(I){let h,v,m,u,T,_,g,V,de,R,k,re,P,W,te,C,ce,oe,E,j,N,Ve,ae,D,ke,me,Lo,Vs,Cn,qo,Ta,ks,An,Do,Is,zn,L,gt,js,_t,Ps,Ms,Cs,wa,As,zs,vt,Ns,Oo,Ls,qs,Ds,Ie,Os,ba,Ss,Ws,Tt,Bs,Us,Rs,je,Hs,wt,Js,Ks,bt,Gs,Xs,Zs,Pe,Qs,yt,Ys,er,xt,tr,or,ar,ya,nr,Nn,So,sr,Ln,ue,xa,M,rr,Wo,ir,lr,Bo,dr,cr,Uo,hr,pr,$a,fr,mr,Fa,ur,gr,Ea,_r,vr,Va,Tr,wr,Ro,br,yr,xr,ka,$t,$r,Ho,Fr,Er,Vr,Ia,Ft,kr,Et,Ir,jr,qn,ge,Pr,Vt,Mr,Cr,kt,Ar,zr,Dn,Ke,Nr,It,Lr,qr,On,Me,Ge,ja,jt,Dr,Pa,Or,Sn,B,Pt,Sr,Ce,Wr,Jo,Br,Ur,Mt,Rr,Hr,Jr,Ae,Kr,Ko,Gr,Xr,Go,Zr,Qr,Yr,Ma,ei,ti,Ct,Wn,ze,Xe,Ca,At,oi,Aa,ai,Bn,ne,zt,ni,za,si,ri,Nt,ii,Na,li,di,ci,_e,Lt,hi,La,pi,fi,Ze,Un,Ne,Qe,qa,qt,mi,Da,ui,Rn,he,Dt,gi,Ot,_i,St,vi,Ti,wi,H,Wt,bi,Le,yi,Xo,xi,$i,Oa,Fi,Ei,Vi,Ye,ki,Sa,Ii,ji,Bt,Hn,qe,et,Wa,Ut,Pi,Ba,Mi,Jn,se,Rt,Ci,Ua,Ai,zi,Ht,Ni,Jt,Li,qi,Di,J,Kt,Oi,De,Si,Zo,Wi,Bi,Ra,Ui,Ri,Hi,tt,Ji,Ha,Ki,Gi,Gt,Kn,Oe,ot,Ja,Xt,Xi,Ka,Zi,Gn,O,Zt,Qi,Ga,Yi,el,Qt,tl,Qo,ol,al,nl,Yt,sl,eo,rl,il,ll,at,dl,K,to,cl,Se,hl,Yo,pl,fl,Xa,ml,ul,gl,nt,_l,Za,vl,Tl,oo,Xn,We,st,Qa,ao,wl,Ya,bl,Zn,S,no,yl,en,xl,$l,so,Fl,ea,El,Vl,kl,ro,Il,io,jl,Pl,Ml,rt,Cl,G,lo,Al,Be,zl,ta,Nl,Ll,tn,ql,Dl,Ol,it,Sl,on,Wl,Bl,co,Qn,Ue,lt,an,ho,Ul,nn,Rl,Yn,A,po,Hl,sn,Jl,Kl,fo,Gl,oa,Xl,Zl,Ql,mo,Yl,uo,ed,td,od,rn,ad,nd,pe,ln,go,sd,rd,dn,_o,id,ld,cn,vo,dd,cd,hn,To,hd,pd,X,wo,fd,Re,md,pn,ud,gd,fn,_d,vd,Td,dt,wd,mn,bd,yd,bo,es,He,ct,un,yo,xd,gn,$d,ts,z,xo,Fd,_n,Ed,Vd,$o,kd,aa,Id,jd,Pd,Fo,Md,Eo,Cd,Ad,zd,vn,Nd,Ld,fe,Tn,Vo,qd,Dd,wn,ko,Od,Sd,bn,Io,Wd,Bd,yn,jo,Ud,Rd,Z,Po,Hd,Je,Jd,xn,Kd,Gd,$n,Xd,Zd,Qd,ht,Yd,Fn,ec,tc,Mo,os;return _=new Ee({}),k=new Fe({props:{$$slots:{default:[pp]},$$scope:{ctx:I}}}),C=new Ee({}),jt=new Ee({}),Pt=new U({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/vit/configuration_vit.py#L29",parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ViTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ViTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ViTConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ViTConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ViTConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ViTConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ViTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ViTConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ViTConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>224</code>) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.ViTConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>16</code>) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.ViTConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to <code>3</code>) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.ViTConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"}]}}),Ct=new No({props:{code:`from transformers import ViTModel, ViTConfig

# Initializing a ViT vit-base-patch16-224 style configuration
configuration = ViTConfig()

# Initializing a model from the vit-base-patch16-224 style configuration
model = ViTModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTModel, ViTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ViTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),At=new Ee({}),zt=new U({props:{name:"class transformers.ViTFeatureExtractor",anchor:"transformers.ViTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = 2"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/vit/feature_extraction_vit.py#L37",parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code>
is set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>.
Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}]}}),Lt=new U({props:{name:"__call__",anchor:"transformers.ViTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/vit/feature_extraction_vit.py#L83",parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ViTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.14.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Ze=new Fe({props:{warning:!0,$$slots:{default:[fp]},$$scope:{ctx:I}}}),qt=new Ee({}),Dt=new U({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/vit/modeling_vit.py#L479",parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Wt=new U({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"interpolate_pos_encoding",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/vit/modeling_vit.py#L504",parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">transformers.ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTModel.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ye=new Fe({props:{$$slots:{default:[mp]},$$scope:{ctx:I}}}),Bt=new No({props:{code:`from transformers import ViTFeatureExtractor, ViTModel
from PIL import Image
import requests

url = 'http://images.cocodataset.org/val2017/000000039769.jpg'
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained('google/vit-base-patch16-224-in21k')
model = ViTModel.from_pretrained('google/vit-base-patch16-224-in21k')

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&#x27;http://images.cocodataset.org/val2017/000000039769.jpg&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&#x27;google/vit-base-patch16-224-in21k&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel.from_pretrained(<span class="hljs-string">&#x27;google/vit-base-patch16-224-in21k&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ut=new Ee({}),Rt=new U({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/vit/modeling_vit.py#L597",parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Kt=new U({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"interpolate_pos_encoding",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/vit/modeling_vit.py#L610",parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">transformers.ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTForImageClassification.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tt=new Fe({props:{$$slots:{default:[up]},$$scope:{ctx:I}}}),Gt=new No({props:{code:`from transformers import ViTFeatureExtractor, ViTForImageClassification
from PIL import Image
import requests

url = 'http://images.cocodataset.org/val2017/000000039769.jpg'
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained('google/vit-base-patch16-224')
model = ViTForImageClassification.from_pretrained('google/vit-base-patch16-224')

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
logits = outputs.logits
# model predicts one of the 1000 ImageNet classes
predicted_class_idx = logits.argmax(-1).item()
print("Predicted class:", model.config.id2label[predicted_class_idx]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&#x27;http://images.cocodataset.org/val2017/000000039769.jpg&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&#x27;google/vit-base-patch16-224&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTForImageClassification.from_pretrained(<span class="hljs-string">&#x27;google/vit-base-patch16-224&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`}}),Xt=new Ee({}),Zt=new U({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/vit/modeling_tf_vit.py#L654",parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),at=new Fe({props:{$$slots:{default:[gp]},$$scope:{ctx:I}}}),to=new U({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/vit/modeling_tf_vit.py#L660",parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:'<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> `<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014; Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See <a href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">transformers.ViTFeatureExtractor.<strong>call</strong>()</a> for details.',name:"pixel_values"},{anchor:"transformers.TFViTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFViTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFViTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFViTModel.call.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.TFViTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>TFBaseModelOutputWithPooling</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape \`(batch_size, num_heads, sequence_length, sequence_length)\u201C.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),nt=new Fe({props:{$$slots:{default:[_p]},$$scope:{ctx:I}}}),oo=new No({props:{code:`from transformers import ViTFeatureExtractor, TFViTModel
from PIL import Image
import requests

url = 'http://images.cocodataset.org/val2017/000000039769.jpg'
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained('google/vit-base-patch16-224-in21k')
model = TFViTModel.from_pretrained('google/vit-base-patch16-224-in21k')

inputs = feature_extractor(images=image, return_tensors="tf")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&#x27;http://images.cocodataset.org/val2017/000000039769.jpg&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&#x27;google/vit-base-patch16-224-in21k&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTModel.from_pretrained(<span class="hljs-string">&#x27;google/vit-base-patch16-224-in21k&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ao=new Ee({}),no=new U({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/vit/modeling_tf_vit.py#L759",parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),rt=new Fe({props:{$$slots:{default:[vp]},$$scope:{ctx:I}}}),lo=new U({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/vit/modeling_tf_vit.py#L773",parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:'<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> `<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014; Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See <a href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">transformers.ViTFeatureExtractor.<strong>call</strong>()</a> for details.',name:"pixel_values"},{anchor:"transformers.TFViTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFViTForImageClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFViTForImageClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFViTForImageClassification.call.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.TFViTForImageClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTForImageClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFViTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>TFSequenceClassifierOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape \`(batch_size, num_heads, sequence_length, sequence_length)\u201C.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),it=new Fe({props:{$$slots:{default:[Tp]},$$scope:{ctx:I}}}),co=new No({props:{code:`from transformers import ViTFeatureExtractor, TFViTForImageClassification
import tensorflow as tf
from PIL import Image
import requests

url = 'http://images.cocodataset.org/val2017/000000039769.jpg'
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained('google/vit-base-patch16-224')
model = TFViTForImageClassification.from_pretrained('google/vit-base-patch16-224')

inputs = feature_extractor(images=image, return_tensors="tf")
outputs = model(**inputs)
logits = outputs.logits
# model predicts one of the 1000 ImageNet classes
predicted_class_idx = tf.math.argmax(logits, axis=-1)[0]
print("Predicted class:", model.config.id2label[int(predicted_class_idx)]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&#x27;http://images.cocodataset.org/val2017/000000039769.jpg&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&#x27;google/vit-base-patch16-224&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTForImageClassification.from_pretrained(<span class="hljs-string">&#x27;google/vit-base-patch16-224&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[<span class="hljs-built_in">int</span>(predicted_class_idx)])`}}),ho=new Ee({}),po=new U({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/vit/modeling_flax_vit.py#L511",parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),wo=new U({props:{name:"__call__",anchor:"transformers.FlaxViTPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/vit/modeling_flax_vit.py#L426",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>ViTConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dt=new Fe({props:{$$slots:{default:[wp]},$$scope:{ctx:I}}}),bo=new No({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
from PIL import Image
import requests

url = 'http://images.cocodataset.org/val2017/000000039769.jpg'
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained('google/vit-base-patch16-224-in21k')
model = FlaxViTModel.from_pretrained('google/vit-base-patch16-224-in21k')

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&#x27;http://images.cocodataset.org/val2017/000000039769.jpg&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&#x27;google/vit-base-patch16-224-in21k&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxViTModel.from_pretrained(<span class="hljs-string">&#x27;google/vit-base-patch16-224-in21k&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),yo=new Ee({}),xo=new U({props:{name:"class transformers.FlaxViTForImageClassification",anchor:"transformers.FlaxViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/vit/modeling_flax_vit.py#L590",parametersDescription:[{anchor:"transformers.FlaxViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxViTForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Po=new U({props:{name:"__call__",anchor:"transformers.FlaxViTPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/vit/modeling_flax_vit.py#L426",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>ViTConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ht=new Fe({props:{$$slots:{default:[bp]},$$scope:{ctx:I}}}),Mo=new No({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
from PIL import Image
import jax
import requests

url = 'http://images.cocodataset.org/val2017/000000039769.jpg'
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained('google/vit-base-patch16-224')
model = FlaxViTForImageClassification.from_pretrained('google/vit-base-patch16-224')

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
logits = outputs.logits

# model predicts one of the 1000 ImageNet classes
predicted_class_idx = jax.numpy.argmax(logits, axis=-1)
print("Predicted class:", model.config.id2label[predicted_class_idx.item()]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&#x27;http://images.cocodataset.org/val2017/000000039769.jpg&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&#x27;google/vit-base-patch16-224&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxViTForImageClassification.from_pretrained(<span class="hljs-string">&#x27;google/vit-base-patch16-224&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = jax.numpy.argmax(logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){h=a("meta"),v=d(),m=a("h1"),u=a("a"),T=a("span"),w(_.$$.fragment),g=d(),V=a("span"),de=r("Vision Transformer (ViT)"),R=d(),w(k.$$.fragment),re=d(),P=a("h2"),W=a("a"),te=a("span"),w(C.$$.fragment),ce=d(),oe=a("span"),E=r("Overview"),j=d(),N=a("p"),Ve=r("The Vision Transformer (ViT) model was proposed in "),ae=a("a"),D=r(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),ke=r(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),me=d(),Lo=a("p"),Vs=r("The abstract from the paper is the following:"),Cn=d(),qo=a("p"),Ta=a("em"),ks=r(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),An=d(),Do=a("p"),Is=r("Tips:"),zn=d(),L=a("ul"),gt=a("li"),js=r("Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),_t=a("a"),Ps=r("here"),Ms=r("."),Cs=d(),wa=a("li"),As=r(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),zs=d(),vt=a("li"),Ns=r(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Oo=a("a"),Ls=r("ViTFeatureExtractor"),qs=r(" to resize (or rescale) and normalize images for the model."),Ds=d(),Ie=a("li"),Os=r(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),ba=a("code"),Ss=r("google/vit-base-patch16-224"),Ws=r(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Tt=a("a"),Bs=r("hub"),Us=r("."),Rs=d(),je=a("li"),Hs=r("The available checkpoints are either (1) pre-trained on "),wt=a("a"),Js=r("ImageNet-21k"),Ks=r(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),bt=a("a"),Gs=r("ImageNet"),Xs=r(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Zs=d(),Pe=a("li"),Qs=r(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),yt=a("a"),Ys=r("(Touvron et al., 2019)"),er=r(", "),xt=a("a"),tr=r(`(Kolesnikov
et al., 2020)`),or=r(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),ar=d(),ya=a("li"),nr=r(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),Nn=d(),So=a("p"),sr=r("Following the original Vision Transformer, some follow-up works have been made:"),Ln=d(),ue=a("ul"),xa=a("li"),M=a("p"),rr=r(`DeiT (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers. Refer to
`),Wo=a("a"),ir=r("DeiT\u2019s documentation page"),lr=r(`. The authors of DeiT also released more efficiently trained ViT models, which
you can directly plug into `),Bo=a("a"),dr=r("ViTModel"),cr=r(" or "),Uo=a("a"),hr=r("ViTForImageClassification"),pr=r(`. There
are 4 variants available (in 3 different sizes): `),$a=a("em"),fr=r("facebook/deit-tiny-patch16-224"),mr=r(", "),Fa=a("em"),ur=r("facebook/deit-small-patch16-224"),gr=r(`,
`),Ea=a("em"),_r=r("facebook/deit-base-patch16-224"),vr=r(" and "),Va=a("em"),Tr=r("facebook/deit-base-patch16-384"),wr=r(`. Note that one should use
`),Ro=a("a"),br=r("DeiTFeatureExtractor"),yr=r(" in order to prepare images for the model."),xr=d(),ka=a("li"),$t=a("p"),$r=r(`BEiT (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.
Refer to `),Ho=a("a"),Fr=r("BEiT\u2019s documentation page"),Er=r("."),Vr=d(),Ia=a("li"),Ft=a("p"),kr=r(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Et=a("a"),Ir=r("hub"),jr=r("."),qn=d(),ge=a("p"),Pr=r("This model was contributed by "),Vt=a("a"),Mr=r("nielsr"),Cr=r(`. The original code (written in JAX) can be
found `),kt=a("a"),Ar=r("here"),zr=r("."),Dn=d(),Ke=a("p"),Nr=r("Note that we converted the weights from Ross Wightman\u2019s "),It=a("a"),Lr=r("timm library"),qr=r(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),On=d(),Me=a("h2"),Ge=a("a"),ja=a("span"),w(jt.$$.fragment),Dr=d(),Pa=a("span"),Or=r("ViTConfig"),Sn=d(),B=a("div"),w(Pt.$$.fragment),Sr=d(),Ce=a("p"),Wr=r("This is the configuration class to store the configuration of a "),Jo=a("a"),Br=r("ViTModel"),Ur=r(`. It is used to
instantiate an ViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the ViT `),Mt=a("a"),Rr=r("google/vit-base-patch16-224"),Hr=r(" architecture."),Jr=d(),Ae=a("p"),Kr=r("Configuration objects inherit from "),Ko=a("a"),Gr=r("PretrainedConfig"),Xr=r(` and can be used to control the model
outputs. Read the documentation from `),Go=a("a"),Zr=r("PretrainedConfig"),Qr=r(" for more information."),Yr=d(),Ma=a("p"),ei=r("Example:"),ti=d(),w(Ct.$$.fragment),Wn=d(),ze=a("h2"),Xe=a("a"),Ca=a("span"),w(At.$$.fragment),oi=d(),Aa=a("span"),ai=r("ViTFeatureExtractor"),Bn=d(),ne=a("div"),w(zt.$$.fragment),ni=d(),za=a("p"),si=r("Constructs a ViT feature extractor."),ri=d(),Nt=a("p"),ii=r("This feature extractor inherits from "),Na=a("code"),li=r("FeatureExtractionMixin"),di=r(` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),ci=d(),_e=a("div"),w(Lt.$$.fragment),hi=d(),La=a("p"),pi=r("Main method to prepare for the model one or several image(s)."),fi=d(),w(Ze.$$.fragment),Un=d(),Ne=a("h2"),Qe=a("a"),qa=a("span"),w(qt.$$.fragment),mi=d(),Da=a("span"),ui=r("ViTModel"),Rn=d(),he=a("div"),w(Dt.$$.fragment),gi=d(),Ot=a("p"),_i=r(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),St=a("a"),vi=r("torch.nn.Module"),Ti=r(` subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wi=d(),H=a("div"),w(Wt.$$.fragment),bi=d(),Le=a("p"),yi=r("The "),Xo=a("a"),xi=r("ViTModel"),$i=r(" forward method, overrides the "),Oa=a("code"),Fi=r("__call__"),Ei=r(" special method."),Vi=d(),w(Ye.$$.fragment),ki=d(),Sa=a("p"),Ii=r("Examples:"),ji=d(),w(Bt.$$.fragment),Hn=d(),qe=a("h2"),et=a("a"),Wa=a("span"),w(Ut.$$.fragment),Pi=d(),Ba=a("span"),Mi=r("ViTForImageClassification"),Jn=d(),se=a("div"),w(Rt.$$.fragment),Ci=d(),Ua=a("p"),Ai=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),zi=d(),Ht=a("p"),Ni=r("This model is a PyTorch "),Jt=a("a"),Li=r("torch.nn.Module"),qi=r(` subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Di=d(),J=a("div"),w(Kt.$$.fragment),Oi=d(),De=a("p"),Si=r("The "),Zo=a("a"),Wi=r("ViTForImageClassification"),Bi=r(" forward method, overrides the "),Ra=a("code"),Ui=r("__call__"),Ri=r(" special method."),Hi=d(),w(tt.$$.fragment),Ji=d(),Ha=a("p"),Ki=r("Examples:"),Gi=d(),w(Gt.$$.fragment),Kn=d(),Oe=a("h2"),ot=a("a"),Ja=a("span"),w(Xt.$$.fragment),Xi=d(),Ka=a("span"),Zi=r("TFViTModel"),Gn=d(),O=a("div"),w(Zt.$$.fragment),Qi=d(),Ga=a("p"),Yi=r("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),el=d(),Qt=a("p"),tl=r("This model inherits from "),Qo=a("a"),ol=r("TFPreTrainedModel"),al=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),nl=d(),Yt=a("p"),sl=r("This model is also a "),eo=a("a"),rl=r("tf.keras.Model"),il=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),ll=d(),w(at.$$.fragment),dl=d(),K=a("div"),w(to.$$.fragment),cl=d(),Se=a("p"),hl=r("The "),Yo=a("a"),pl=r("TFViTModel"),fl=r(" forward method, overrides the "),Xa=a("code"),ml=r("__call__"),ul=r(" special method."),gl=d(),w(nt.$$.fragment),_l=d(),Za=a("p"),vl=r("Examples:"),Tl=d(),w(oo.$$.fragment),Xn=d(),We=a("h2"),st=a("a"),Qa=a("span"),w(ao.$$.fragment),wl=d(),Ya=a("span"),bl=r("TFViTForImageClassification"),Zn=d(),S=a("div"),w(no.$$.fragment),yl=d(),en=a("p"),xl=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),$l=d(),so=a("p"),Fl=r("This model inherits from "),ea=a("a"),El=r("TFPreTrainedModel"),Vl=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),kl=d(),ro=a("p"),Il=r("This model is also a "),io=a("a"),jl=r("tf.keras.Model"),Pl=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ml=d(),w(rt.$$.fragment),Cl=d(),G=a("div"),w(lo.$$.fragment),Al=d(),Be=a("p"),zl=r("The "),ta=a("a"),Nl=r("TFViTForImageClassification"),Ll=r(" forward method, overrides the "),tn=a("code"),ql=r("__call__"),Dl=r(" special method."),Ol=d(),w(it.$$.fragment),Sl=d(),on=a("p"),Wl=r("Examples:"),Bl=d(),w(co.$$.fragment),Qn=d(),Ue=a("h2"),lt=a("a"),an=a("span"),w(ho.$$.fragment),Ul=d(),nn=a("span"),Rl=r("FlaxVitModel"),Yn=d(),A=a("div"),w(po.$$.fragment),Hl=d(),sn=a("p"),Jl=r("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Kl=d(),fo=a("p"),Gl=r("This model inherits from "),oa=a("a"),Xl=r("FlaxPreTrainedModel"),Zl=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),Ql=d(),mo=a("p"),Yl=r("This model is also a Flax Linen "),uo=a("a"),ed=r("flax.linen.Module"),td=r(` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),od=d(),rn=a("p"),ad=r("Finally, this model supports inherent JAX features such as:"),nd=d(),pe=a("ul"),ln=a("li"),go=a("a"),sd=r("Just-In-Time (JIT) compilation"),rd=d(),dn=a("li"),_o=a("a"),id=r("Automatic Differentiation"),ld=d(),cn=a("li"),vo=a("a"),dd=r("Vectorization"),cd=d(),hn=a("li"),To=a("a"),hd=r("Parallelization"),pd=d(),X=a("div"),w(wo.$$.fragment),fd=d(),Re=a("p"),md=r("The "),pn=a("code"),ud=r("FlaxViTPreTrainedModel"),gd=r(" forward method, overrides the "),fn=a("code"),_d=r("__call__"),vd=r(" special method."),Td=d(),w(dt.$$.fragment),wd=d(),mn=a("p"),bd=r("Examples:"),yd=d(),w(bo.$$.fragment),es=d(),He=a("h2"),ct=a("a"),un=a("span"),w(yo.$$.fragment),xd=d(),gn=a("span"),$d=r("FlaxViTForImageClassification"),ts=d(),z=a("div"),w(xo.$$.fragment),Fd=d(),_n=a("p"),Ed=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Vd=d(),$o=a("p"),kd=r("This model inherits from "),aa=a("a"),Id=r("FlaxPreTrainedModel"),jd=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),Pd=d(),Fo=a("p"),Md=r("This model is also a Flax Linen "),Eo=a("a"),Cd=r("flax.linen.Module"),Ad=r(` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),zd=d(),vn=a("p"),Nd=r("Finally, this model supports inherent JAX features such as:"),Ld=d(),fe=a("ul"),Tn=a("li"),Vo=a("a"),qd=r("Just-In-Time (JIT) compilation"),Dd=d(),wn=a("li"),ko=a("a"),Od=r("Automatic Differentiation"),Sd=d(),bn=a("li"),Io=a("a"),Wd=r("Vectorization"),Bd=d(),yn=a("li"),jo=a("a"),Ud=r("Parallelization"),Rd=d(),Z=a("div"),w(Po.$$.fragment),Hd=d(),Je=a("p"),Jd=r("The "),xn=a("code"),Kd=r("FlaxViTPreTrainedModel"),Gd=r(" forward method, overrides the "),$n=a("code"),Xd=r("__call__"),Zd=r(" special method."),Qd=d(),w(ht.$$.fragment),Yd=d(),Fn=a("p"),ec=r("Example:"),tc=d(),w(Mo.$$.fragment),this.h()},l(o){const p=hp('[data-svelte="svelte-1phssyn"]',document.head);h=n(p,"META",{name:!0,content:!0}),p.forEach(t),v=c(o),m=n(o,"H1",{class:!0});var Co=s(m);u=n(Co,"A",{id:!0,class:!0,href:!0});var En=s(u);T=n(En,"SPAN",{});var Vn=s(T);b(_.$$.fragment,Vn),Vn.forEach(t),En.forEach(t),g=c(Co),V=n(Co,"SPAN",{});var kn=s(V);de=i(kn,"Vision Transformer (ViT)"),kn.forEach(t),Co.forEach(t),R=c(o),b(k.$$.fragment,o),re=c(o),P=n(o,"H2",{class:!0});var Ao=s(P);W=n(Ao,"A",{id:!0,class:!0,href:!0});var In=s(W);te=n(In,"SPAN",{});var jn=s(te);b(C.$$.fragment,jn),jn.forEach(t),In.forEach(t),ce=c(Ao),oe=n(Ao,"SPAN",{});var Pn=s(oe);E=i(Pn,"Overview"),Pn.forEach(t),Ao.forEach(t),j=c(o),N=n(o,"P",{});var zo=s(N);Ve=i(zo,"The Vision Transformer (ViT) model was proposed in "),ae=n(zo,"A",{href:!0,rel:!0});var Mn=s(ae);D=i(Mn,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),Mn.forEach(t),ke=i(zo,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),zo.forEach(t),me=c(o),Lo=n(o,"P",{});var oc=s(Lo);Vs=i(oc,"The abstract from the paper is the following:"),oc.forEach(t),Cn=c(o),qo=n(o,"P",{});var ac=s(qo);Ta=n(ac,"EM",{});var nc=s(Ta);ks=i(nc,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),nc.forEach(t),ac.forEach(t),An=c(o),Do=n(o,"P",{});var sc=s(Do);Is=i(sc,"Tips:"),sc.forEach(t),zn=c(o),L=n(o,"UL",{});var Q=s(L);gt=n(Q,"LI",{});var as=s(gt);js=i(as,"Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),_t=n(as,"A",{href:!0,rel:!0});var rc=s(_t);Ps=i(rc,"here"),rc.forEach(t),Ms=i(as,"."),as.forEach(t),Cs=c(Q),wa=n(Q,"LI",{});var ic=s(wa);As=i(ic,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),ic.forEach(t),zs=c(Q),vt=n(Q,"LI",{});var ns=s(vt);Ns=i(ns,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Oo=n(ns,"A",{href:!0});var lc=s(Oo);Ls=i(lc,"ViTFeatureExtractor"),lc.forEach(t),qs=i(ns," to resize (or rescale) and normalize images for the model."),ns.forEach(t),Ds=c(Q),Ie=n(Q,"LI",{});var na=s(Ie);Os=i(na,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),ba=n(na,"CODE",{});var dc=s(ba);Ss=i(dc,"google/vit-base-patch16-224"),dc.forEach(t),Ws=i(na,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Tt=n(na,"A",{href:!0,rel:!0});var cc=s(Tt);Bs=i(cc,"hub"),cc.forEach(t),Us=i(na,"."),na.forEach(t),Rs=c(Q),je=n(Q,"LI",{});var sa=s(je);Hs=i(sa,"The available checkpoints are either (1) pre-trained on "),wt=n(sa,"A",{href:!0,rel:!0});var hc=s(wt);Js=i(hc,"ImageNet-21k"),hc.forEach(t),Ks=i(sa,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),bt=n(sa,"A",{href:!0,rel:!0});var pc=s(bt);Gs=i(pc,"ImageNet"),pc.forEach(t),Xs=i(sa,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),sa.forEach(t),Zs=c(Q),Pe=n(Q,"LI",{});var ra=s(Pe);Qs=i(ra,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),yt=n(ra,"A",{href:!0,rel:!0});var fc=s(yt);Ys=i(fc,"(Touvron et al., 2019)"),fc.forEach(t),er=i(ra,", "),xt=n(ra,"A",{href:!0,rel:!0});var mc=s(xt);tr=i(mc,`(Kolesnikov
et al., 2020)`),mc.forEach(t),or=i(ra,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),ra.forEach(t),ar=c(Q),ya=n(Q,"LI",{});var uc=s(ya);nr=i(uc,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),uc.forEach(t),Q.forEach(t),Nn=c(o),So=n(o,"P",{});var gc=s(So);sr=i(gc,"Following the original Vision Transformer, some follow-up works have been made:"),gc.forEach(t),Ln=c(o),ue=n(o,"UL",{});var ia=s(ue);xa=n(ia,"LI",{});var _c=s(xa);M=n(_c,"P",{});var q=s(M);rr=i(q,`DeiT (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers. Refer to
`),Wo=n(q,"A",{href:!0});var vc=s(Wo);ir=i(vc,"DeiT\u2019s documentation page"),vc.forEach(t),lr=i(q,`. The authors of DeiT also released more efficiently trained ViT models, which
you can directly plug into `),Bo=n(q,"A",{href:!0});var Tc=s(Bo);dr=i(Tc,"ViTModel"),Tc.forEach(t),cr=i(q," or "),Uo=n(q,"A",{href:!0});var wc=s(Uo);hr=i(wc,"ViTForImageClassification"),wc.forEach(t),pr=i(q,`. There
are 4 variants available (in 3 different sizes): `),$a=n(q,"EM",{});var bc=s($a);fr=i(bc,"facebook/deit-tiny-patch16-224"),bc.forEach(t),mr=i(q,", "),Fa=n(q,"EM",{});var yc=s(Fa);ur=i(yc,"facebook/deit-small-patch16-224"),yc.forEach(t),gr=i(q,`,
`),Ea=n(q,"EM",{});var xc=s(Ea);_r=i(xc,"facebook/deit-base-patch16-224"),xc.forEach(t),vr=i(q," and "),Va=n(q,"EM",{});var $c=s(Va);Tr=i($c,"facebook/deit-base-patch16-384"),$c.forEach(t),wr=i(q,`. Note that one should use
`),Ro=n(q,"A",{href:!0});var Fc=s(Ro);br=i(Fc,"DeiTFeatureExtractor"),Fc.forEach(t),yr=i(q," in order to prepare images for the model."),q.forEach(t),_c.forEach(t),xr=c(ia),ka=n(ia,"LI",{});var Ec=s(ka);$t=n(Ec,"P",{});var ss=s($t);$r=i(ss,`BEiT (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.
Refer to `),Ho=n(ss,"A",{href:!0});var Vc=s(Ho);Fr=i(Vc,"BEiT\u2019s documentation page"),Vc.forEach(t),Er=i(ss,"."),ss.forEach(t),Ec.forEach(t),Vr=c(ia),Ia=n(ia,"LI",{});var kc=s(Ia);Ft=n(kc,"P",{});var rs=s(Ft);kr=i(rs,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Et=n(rs,"A",{href:!0,rel:!0});var Ic=s(Et);Ir=i(Ic,"hub"),Ic.forEach(t),jr=i(rs,"."),rs.forEach(t),kc.forEach(t),ia.forEach(t),qn=c(o),ge=n(o,"P",{});var la=s(ge);Pr=i(la,"This model was contributed by "),Vt=n(la,"A",{href:!0,rel:!0});var jc=s(Vt);Mr=i(jc,"nielsr"),jc.forEach(t),Cr=i(la,`. The original code (written in JAX) can be
found `),kt=n(la,"A",{href:!0,rel:!0});var Pc=s(kt);Ar=i(Pc,"here"),Pc.forEach(t),zr=i(la,"."),la.forEach(t),Dn=c(o),Ke=n(o,"P",{});var is=s(Ke);Nr=i(is,"Note that we converted the weights from Ross Wightman\u2019s "),It=n(is,"A",{href:!0,rel:!0});var Mc=s(It);Lr=i(Mc,"timm library"),Mc.forEach(t),qr=i(is,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),is.forEach(t),On=c(o),Me=n(o,"H2",{class:!0});var ls=s(Me);Ge=n(ls,"A",{id:!0,class:!0,href:!0});var Cc=s(Ge);ja=n(Cc,"SPAN",{});var Ac=s(ja);b(jt.$$.fragment,Ac),Ac.forEach(t),Cc.forEach(t),Dr=c(ls),Pa=n(ls,"SPAN",{});var zc=s(Pa);Or=i(zc,"ViTConfig"),zc.forEach(t),ls.forEach(t),Sn=c(o),B=n(o,"DIV",{class:!0});var ve=s(B);b(Pt.$$.fragment,ve),Sr=c(ve),Ce=n(ve,"P",{});var da=s(Ce);Wr=i(da,"This is the configuration class to store the configuration of a "),Jo=n(da,"A",{href:!0});var Nc=s(Jo);Br=i(Nc,"ViTModel"),Nc.forEach(t),Ur=i(da,`. It is used to
instantiate an ViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the ViT `),Mt=n(da,"A",{href:!0,rel:!0});var Lc=s(Mt);Rr=i(Lc,"google/vit-base-patch16-224"),Lc.forEach(t),Hr=i(da," architecture."),da.forEach(t),Jr=c(ve),Ae=n(ve,"P",{});var ca=s(Ae);Kr=i(ca,"Configuration objects inherit from "),Ko=n(ca,"A",{href:!0});var qc=s(Ko);Gr=i(qc,"PretrainedConfig"),qc.forEach(t),Xr=i(ca,` and can be used to control the model
outputs. Read the documentation from `),Go=n(ca,"A",{href:!0});var Dc=s(Go);Zr=i(Dc,"PretrainedConfig"),Dc.forEach(t),Qr=i(ca," for more information."),ca.forEach(t),Yr=c(ve),Ma=n(ve,"P",{});var Oc=s(Ma);ei=i(Oc,"Example:"),Oc.forEach(t),ti=c(ve),b(Ct.$$.fragment,ve),ve.forEach(t),Wn=c(o),ze=n(o,"H2",{class:!0});var ds=s(ze);Xe=n(ds,"A",{id:!0,class:!0,href:!0});var Sc=s(Xe);Ca=n(Sc,"SPAN",{});var Wc=s(Ca);b(At.$$.fragment,Wc),Wc.forEach(t),Sc.forEach(t),oi=c(ds),Aa=n(ds,"SPAN",{});var Bc=s(Aa);ai=i(Bc,"ViTFeatureExtractor"),Bc.forEach(t),ds.forEach(t),Bn=c(o),ne=n(o,"DIV",{class:!0});var pt=s(ne);b(zt.$$.fragment,pt),ni=c(pt),za=n(pt,"P",{});var Uc=s(za);si=i(Uc,"Constructs a ViT feature extractor."),Uc.forEach(t),ri=c(pt),Nt=n(pt,"P",{});var cs=s(Nt);ii=i(cs,"This feature extractor inherits from "),Na=n(cs,"CODE",{});var Rc=s(Na);li=i(Rc,"FeatureExtractionMixin"),Rc.forEach(t),di=i(cs,` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),cs.forEach(t),ci=c(pt),_e=n(pt,"DIV",{class:!0});var ha=s(_e);b(Lt.$$.fragment,ha),hi=c(ha),La=n(ha,"P",{});var Hc=s(La);pi=i(Hc,"Main method to prepare for the model one or several image(s)."),Hc.forEach(t),fi=c(ha),b(Ze.$$.fragment,ha),ha.forEach(t),pt.forEach(t),Un=c(o),Ne=n(o,"H2",{class:!0});var hs=s(Ne);Qe=n(hs,"A",{id:!0,class:!0,href:!0});var Jc=s(Qe);qa=n(Jc,"SPAN",{});var Kc=s(qa);b(qt.$$.fragment,Kc),Kc.forEach(t),Jc.forEach(t),mi=c(hs),Da=n(hs,"SPAN",{});var Gc=s(Da);ui=i(Gc,"ViTModel"),Gc.forEach(t),hs.forEach(t),Rn=c(o),he=n(o,"DIV",{class:!0});var pa=s(he);b(Dt.$$.fragment,pa),gi=c(pa),Ot=n(pa,"P",{});var ps=s(Ot);_i=i(ps,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),St=n(ps,"A",{href:!0,rel:!0});var Xc=s(St);vi=i(Xc,"torch.nn.Module"),Xc.forEach(t),Ti=i(ps,` subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ps.forEach(t),wi=c(pa),H=n(pa,"DIV",{class:!0});var Te=s(H);b(Wt.$$.fragment,Te),bi=c(Te),Le=n(Te,"P",{});var fa=s(Le);yi=i(fa,"The "),Xo=n(fa,"A",{href:!0});var Zc=s(Xo);xi=i(Zc,"ViTModel"),Zc.forEach(t),$i=i(fa," forward method, overrides the "),Oa=n(fa,"CODE",{});var Qc=s(Oa);Fi=i(Qc,"__call__"),Qc.forEach(t),Ei=i(fa," special method."),fa.forEach(t),Vi=c(Te),b(Ye.$$.fragment,Te),ki=c(Te),Sa=n(Te,"P",{});var Yc=s(Sa);Ii=i(Yc,"Examples:"),Yc.forEach(t),ji=c(Te),b(Bt.$$.fragment,Te),Te.forEach(t),pa.forEach(t),Hn=c(o),qe=n(o,"H2",{class:!0});var fs=s(qe);et=n(fs,"A",{id:!0,class:!0,href:!0});var eh=s(et);Wa=n(eh,"SPAN",{});var th=s(Wa);b(Ut.$$.fragment,th),th.forEach(t),eh.forEach(t),Pi=c(fs),Ba=n(fs,"SPAN",{});var oh=s(Ba);Mi=i(oh,"ViTForImageClassification"),oh.forEach(t),fs.forEach(t),Jn=c(o),se=n(o,"DIV",{class:!0});var ft=s(se);b(Rt.$$.fragment,ft),Ci=c(ft),Ua=n(ft,"P",{});var ah=s(Ua);Ai=i(ah,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ah.forEach(t),zi=c(ft),Ht=n(ft,"P",{});var ms=s(Ht);Ni=i(ms,"This model is a PyTorch "),Jt=n(ms,"A",{href:!0,rel:!0});var nh=s(Jt);Li=i(nh,"torch.nn.Module"),nh.forEach(t),qi=i(ms,` subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ms.forEach(t),Di=c(ft),J=n(ft,"DIV",{class:!0});var we=s(J);b(Kt.$$.fragment,we),Oi=c(we),De=n(we,"P",{});var ma=s(De);Si=i(ma,"The "),Zo=n(ma,"A",{href:!0});var sh=s(Zo);Wi=i(sh,"ViTForImageClassification"),sh.forEach(t),Bi=i(ma," forward method, overrides the "),Ra=n(ma,"CODE",{});var rh=s(Ra);Ui=i(rh,"__call__"),rh.forEach(t),Ri=i(ma," special method."),ma.forEach(t),Hi=c(we),b(tt.$$.fragment,we),Ji=c(we),Ha=n(we,"P",{});var ih=s(Ha);Ki=i(ih,"Examples:"),ih.forEach(t),Gi=c(we),b(Gt.$$.fragment,we),we.forEach(t),ft.forEach(t),Kn=c(o),Oe=n(o,"H2",{class:!0});var us=s(Oe);ot=n(us,"A",{id:!0,class:!0,href:!0});var lh=s(ot);Ja=n(lh,"SPAN",{});var dh=s(Ja);b(Xt.$$.fragment,dh),dh.forEach(t),lh.forEach(t),Xi=c(us),Ka=n(us,"SPAN",{});var ch=s(Ka);Zi=i(ch,"TFViTModel"),ch.forEach(t),us.forEach(t),Gn=c(o),O=n(o,"DIV",{class:!0});var ie=s(O);b(Zt.$$.fragment,ie),Qi=c(ie),Ga=n(ie,"P",{});var hh=s(Ga);Yi=i(hh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),hh.forEach(t),el=c(ie),Qt=n(ie,"P",{});var gs=s(Qt);tl=i(gs,"This model inherits from "),Qo=n(gs,"A",{href:!0});var ph=s(Qo);ol=i(ph,"TFPreTrainedModel"),ph.forEach(t),al=i(gs,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),gs.forEach(t),nl=c(ie),Yt=n(ie,"P",{});var _s=s(Yt);sl=i(_s,"This model is also a "),eo=n(_s,"A",{href:!0,rel:!0});var fh=s(eo);rl=i(fh,"tf.keras.Model"),fh.forEach(t),il=i(_s,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),_s.forEach(t),ll=c(ie),b(at.$$.fragment,ie),dl=c(ie),K=n(ie,"DIV",{class:!0});var be=s(K);b(to.$$.fragment,be),cl=c(be),Se=n(be,"P",{});var ua=s(Se);hl=i(ua,"The "),Yo=n(ua,"A",{href:!0});var mh=s(Yo);pl=i(mh,"TFViTModel"),mh.forEach(t),fl=i(ua," forward method, overrides the "),Xa=n(ua,"CODE",{});var uh=s(Xa);ml=i(uh,"__call__"),uh.forEach(t),ul=i(ua," special method."),ua.forEach(t),gl=c(be),b(nt.$$.fragment,be),_l=c(be),Za=n(be,"P",{});var gh=s(Za);vl=i(gh,"Examples:"),gh.forEach(t),Tl=c(be),b(oo.$$.fragment,be),be.forEach(t),ie.forEach(t),Xn=c(o),We=n(o,"H2",{class:!0});var vs=s(We);st=n(vs,"A",{id:!0,class:!0,href:!0});var _h=s(st);Qa=n(_h,"SPAN",{});var vh=s(Qa);b(ao.$$.fragment,vh),vh.forEach(t),_h.forEach(t),wl=c(vs),Ya=n(vs,"SPAN",{});var Th=s(Ya);bl=i(Th,"TFViTForImageClassification"),Th.forEach(t),vs.forEach(t),Zn=c(o),S=n(o,"DIV",{class:!0});var le=s(S);b(no.$$.fragment,le),yl=c(le),en=n(le,"P",{});var wh=s(en);xl=i(wh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),wh.forEach(t),$l=c(le),so=n(le,"P",{});var Ts=s(so);Fl=i(Ts,"This model inherits from "),ea=n(Ts,"A",{href:!0});var bh=s(ea);El=i(bh,"TFPreTrainedModel"),bh.forEach(t),Vl=i(Ts,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Ts.forEach(t),kl=c(le),ro=n(le,"P",{});var ws=s(ro);Il=i(ws,"This model is also a "),io=n(ws,"A",{href:!0,rel:!0});var yh=s(io);jl=i(yh,"tf.keras.Model"),yh.forEach(t),Pl=i(ws,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),ws.forEach(t),Ml=c(le),b(rt.$$.fragment,le),Cl=c(le),G=n(le,"DIV",{class:!0});var ye=s(G);b(lo.$$.fragment,ye),Al=c(ye),Be=n(ye,"P",{});var ga=s(Be);zl=i(ga,"The "),ta=n(ga,"A",{href:!0});var xh=s(ta);Nl=i(xh,"TFViTForImageClassification"),xh.forEach(t),Ll=i(ga," forward method, overrides the "),tn=n(ga,"CODE",{});var $h=s(tn);ql=i($h,"__call__"),$h.forEach(t),Dl=i(ga," special method."),ga.forEach(t),Ol=c(ye),b(it.$$.fragment,ye),Sl=c(ye),on=n(ye,"P",{});var Fh=s(on);Wl=i(Fh,"Examples:"),Fh.forEach(t),Bl=c(ye),b(co.$$.fragment,ye),ye.forEach(t),le.forEach(t),Qn=c(o),Ue=n(o,"H2",{class:!0});var bs=s(Ue);lt=n(bs,"A",{id:!0,class:!0,href:!0});var Eh=s(lt);an=n(Eh,"SPAN",{});var Vh=s(an);b(ho.$$.fragment,Vh),Vh.forEach(t),Eh.forEach(t),Ul=c(bs),nn=n(bs,"SPAN",{});var kh=s(nn);Rl=i(kh,"FlaxVitModel"),kh.forEach(t),bs.forEach(t),Yn=c(o),A=n(o,"DIV",{class:!0});var Y=s(A);b(po.$$.fragment,Y),Hl=c(Y),sn=n(Y,"P",{});var Ih=s(sn);Jl=i(Ih,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Ih.forEach(t),Kl=c(Y),fo=n(Y,"P",{});var ys=s(fo);Gl=i(ys,"This model inherits from "),oa=n(ys,"A",{href:!0});var jh=s(oa);Xl=i(jh,"FlaxPreTrainedModel"),jh.forEach(t),Zl=i(ys,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),ys.forEach(t),Ql=c(Y),mo=n(Y,"P",{});var xs=s(mo);Yl=i(xs,"This model is also a Flax Linen "),uo=n(xs,"A",{href:!0,rel:!0});var Ph=s(uo);ed=i(Ph,"flax.linen.Module"),Ph.forEach(t),td=i(xs,` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),xs.forEach(t),od=c(Y),rn=n(Y,"P",{});var Mh=s(rn);ad=i(Mh,"Finally, this model supports inherent JAX features such as:"),Mh.forEach(t),nd=c(Y),pe=n(Y,"UL",{});var mt=s(pe);ln=n(mt,"LI",{});var Ch=s(ln);go=n(Ch,"A",{href:!0,rel:!0});var Ah=s(go);sd=i(Ah,"Just-In-Time (JIT) compilation"),Ah.forEach(t),Ch.forEach(t),rd=c(mt),dn=n(mt,"LI",{});var zh=s(dn);_o=n(zh,"A",{href:!0,rel:!0});var Nh=s(_o);id=i(Nh,"Automatic Differentiation"),Nh.forEach(t),zh.forEach(t),ld=c(mt),cn=n(mt,"LI",{});var Lh=s(cn);vo=n(Lh,"A",{href:!0,rel:!0});var qh=s(vo);dd=i(qh,"Vectorization"),qh.forEach(t),Lh.forEach(t),cd=c(mt),hn=n(mt,"LI",{});var Dh=s(hn);To=n(Dh,"A",{href:!0,rel:!0});var Oh=s(To);hd=i(Oh,"Parallelization"),Oh.forEach(t),Dh.forEach(t),mt.forEach(t),pd=c(Y),X=n(Y,"DIV",{class:!0});var xe=s(X);b(wo.$$.fragment,xe),fd=c(xe),Re=n(xe,"P",{});var _a=s(Re);md=i(_a,"The "),pn=n(_a,"CODE",{});var Sh=s(pn);ud=i(Sh,"FlaxViTPreTrainedModel"),Sh.forEach(t),gd=i(_a," forward method, overrides the "),fn=n(_a,"CODE",{});var Wh=s(fn);_d=i(Wh,"__call__"),Wh.forEach(t),vd=i(_a," special method."),_a.forEach(t),Td=c(xe),b(dt.$$.fragment,xe),wd=c(xe),mn=n(xe,"P",{});var Bh=s(mn);bd=i(Bh,"Examples:"),Bh.forEach(t),yd=c(xe),b(bo.$$.fragment,xe),xe.forEach(t),Y.forEach(t),es=c(o),He=n(o,"H2",{class:!0});var $s=s(He);ct=n($s,"A",{id:!0,class:!0,href:!0});var Uh=s(ct);un=n(Uh,"SPAN",{});var Rh=s(un);b(yo.$$.fragment,Rh),Rh.forEach(t),Uh.forEach(t),xd=c($s),gn=n($s,"SPAN",{});var Hh=s(gn);$d=i(Hh,"FlaxViTForImageClassification"),Hh.forEach(t),$s.forEach(t),ts=c(o),z=n(o,"DIV",{class:!0});var ee=s(z);b(xo.$$.fragment,ee),Fd=c(ee),_n=n(ee,"P",{});var Jh=s(_n);Ed=i(Jh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Jh.forEach(t),Vd=c(ee),$o=n(ee,"P",{});var Fs=s($o);kd=i(Fs,"This model inherits from "),aa=n(Fs,"A",{href:!0});var Kh=s(aa);Id=i(Kh,"FlaxPreTrainedModel"),Kh.forEach(t),jd=i(Fs,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),Fs.forEach(t),Pd=c(ee),Fo=n(ee,"P",{});var Es=s(Fo);Md=i(Es,"This model is also a Flax Linen "),Eo=n(Es,"A",{href:!0,rel:!0});var Gh=s(Eo);Cd=i(Gh,"flax.linen.Module"),Gh.forEach(t),Ad=i(Es,` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),Es.forEach(t),zd=c(ee),vn=n(ee,"P",{});var Xh=s(vn);Nd=i(Xh,"Finally, this model supports inherent JAX features such as:"),Xh.forEach(t),Ld=c(ee),fe=n(ee,"UL",{});var ut=s(fe);Tn=n(ut,"LI",{});var Zh=s(Tn);Vo=n(Zh,"A",{href:!0,rel:!0});var Qh=s(Vo);qd=i(Qh,"Just-In-Time (JIT) compilation"),Qh.forEach(t),Zh.forEach(t),Dd=c(ut),wn=n(ut,"LI",{});var Yh=s(wn);ko=n(Yh,"A",{href:!0,rel:!0});var ep=s(ko);Od=i(ep,"Automatic Differentiation"),ep.forEach(t),Yh.forEach(t),Sd=c(ut),bn=n(ut,"LI",{});var tp=s(bn);Io=n(tp,"A",{href:!0,rel:!0});var op=s(Io);Wd=i(op,"Vectorization"),op.forEach(t),tp.forEach(t),Bd=c(ut),yn=n(ut,"LI",{});var ap=s(yn);jo=n(ap,"A",{href:!0,rel:!0});var np=s(jo);Ud=i(np,"Parallelization"),np.forEach(t),ap.forEach(t),ut.forEach(t),Rd=c(ee),Z=n(ee,"DIV",{class:!0});var $e=s(Z);b(Po.$$.fragment,$e),Hd=c($e),Je=n($e,"P",{});var va=s(Je);Jd=i(va,"The "),xn=n(va,"CODE",{});var sp=s(xn);Kd=i(sp,"FlaxViTPreTrainedModel"),sp.forEach(t),Gd=i(va," forward method, overrides the "),$n=n(va,"CODE",{});var rp=s($n);Xd=i(rp,"__call__"),rp.forEach(t),Zd=i(va," special method."),va.forEach(t),Qd=c($e),b(ht.$$.fragment,$e),Yd=c($e),Fn=n($e,"P",{});var ip=s(Fn);ec=i(ip,"Example:"),ip.forEach(t),tc=c($e),b(Mo.$$.fragment,$e),$e.forEach(t),ee.forEach(t),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(xp)),l(u,"id","vision-transformer-vit"),l(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(u,"href","#vision-transformer-vit"),l(m,"class","relative group"),l(W,"id","overview"),l(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(W,"href","#overview"),l(P,"class","relative group"),l(ae,"href","https://arxiv.org/abs/2010.11929"),l(ae,"rel","nofollow"),l(_t,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),l(_t,"rel","nofollow"),l(Oo,"href","/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTFeatureExtractor"),l(Tt,"href","https://huggingface.co/models?search=vit"),l(Tt,"rel","nofollow"),l(wt,"href","http://www.image-net.org/"),l(wt,"rel","nofollow"),l(bt,"href","http://www.image-net.org/challenges/LSVRC/2012/"),l(bt,"rel","nofollow"),l(yt,"href","https://arxiv.org/abs/1906.06423"),l(yt,"rel","nofollow"),l(xt,"href","https://arxiv.org/abs/1912.11370"),l(xt,"rel","nofollow"),l(Wo,"href","/docs/transformers/v4.14.1/en/deit"),l(Bo,"href","/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTModel"),l(Uo,"href","/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTForImageClassification"),l(Ro,"href","/docs/transformers/v4.14.1/en/model_doc/deit#transformers.DeiTFeatureExtractor"),l(Ho,"href","/docs/transformers/v4.14.1/en/beit"),l(Et,"href","https://huggingface.co/models?other=dino"),l(Et,"rel","nofollow"),l(Vt,"href","https://huggingface.co/nielsr"),l(Vt,"rel","nofollow"),l(kt,"href","https://github.com/google-research/vision_transformer"),l(kt,"rel","nofollow"),l(It,"href","https://github.com/rwightman/pytorch-image-models"),l(It,"rel","nofollow"),l(Ge,"id","transformers.ViTConfig"),l(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ge,"href","#transformers.ViTConfig"),l(Me,"class","relative group"),l(Jo,"href","/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTModel"),l(Mt,"href","https://huggingface.co/google/vit-base-patch16-224"),l(Mt,"rel","nofollow"),l(Ko,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),l(Go,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),l(B,"class","docstring"),l(Xe,"id","transformers.ViTFeatureExtractor"),l(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Xe,"href","#transformers.ViTFeatureExtractor"),l(ze,"class","relative group"),l(_e,"class","docstring"),l(ne,"class","docstring"),l(Qe,"id","transformers.ViTModel"),l(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Qe,"href","#transformers.ViTModel"),l(Ne,"class","relative group"),l(St,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(St,"rel","nofollow"),l(Xo,"href","/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTModel"),l(H,"class","docstring"),l(he,"class","docstring"),l(et,"id","transformers.ViTForImageClassification"),l(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(et,"href","#transformers.ViTForImageClassification"),l(qe,"class","relative group"),l(Jt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Jt,"rel","nofollow"),l(Zo,"href","/docs/transformers/v4.14.1/en/model_doc/vit#transformers.ViTForImageClassification"),l(J,"class","docstring"),l(se,"class","docstring"),l(ot,"id","transformers.TFViTModel"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.TFViTModel"),l(Oe,"class","relative group"),l(Qo,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),l(eo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(eo,"rel","nofollow"),l(Yo,"href","/docs/transformers/v4.14.1/en/model_doc/vit#transformers.TFViTModel"),l(K,"class","docstring"),l(O,"class","docstring"),l(st,"id","transformers.TFViTForImageClassification"),l(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(st,"href","#transformers.TFViTForImageClassification"),l(We,"class","relative group"),l(ea,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),l(io,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(io,"rel","nofollow"),l(ta,"href","/docs/transformers/v4.14.1/en/model_doc/vit#transformers.TFViTForImageClassification"),l(G,"class","docstring"),l(S,"class","docstring"),l(lt,"id","transformers.FlaxViTModel"),l(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lt,"href","#transformers.FlaxViTModel"),l(Ue,"class","relative group"),l(oa,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(uo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(uo,"rel","nofollow"),l(go,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(go,"rel","nofollow"),l(_o,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(_o,"rel","nofollow"),l(vo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(vo,"rel","nofollow"),l(To,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(To,"rel","nofollow"),l(X,"class","docstring"),l(A,"class","docstring"),l(ct,"id","transformers.FlaxViTForImageClassification"),l(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ct,"href","#transformers.FlaxViTForImageClassification"),l(He,"class","relative group"),l(aa,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(Eo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Eo,"rel","nofollow"),l(Vo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(Vo,"rel","nofollow"),l(ko,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(ko,"rel","nofollow"),l(Io,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Io,"rel","nofollow"),l(jo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(jo,"rel","nofollow"),l(Z,"class","docstring"),l(z,"class","docstring")},m(o,p){e(document.head,h),f(o,v,p),f(o,m,p),e(m,u),e(u,T),y(_,T,null),e(m,g),e(m,V),e(V,de),f(o,R,p),y(k,o,p),f(o,re,p),f(o,P,p),e(P,W),e(W,te),y(C,te,null),e(P,ce),e(P,oe),e(oe,E),f(o,j,p),f(o,N,p),e(N,Ve),e(N,ae),e(ae,D),e(N,ke),f(o,me,p),f(o,Lo,p),e(Lo,Vs),f(o,Cn,p),f(o,qo,p),e(qo,Ta),e(Ta,ks),f(o,An,p),f(o,Do,p),e(Do,Is),f(o,zn,p),f(o,L,p),e(L,gt),e(gt,js),e(gt,_t),e(_t,Ps),e(gt,Ms),e(L,Cs),e(L,wa),e(wa,As),e(L,zs),e(L,vt),e(vt,Ns),e(vt,Oo),e(Oo,Ls),e(vt,qs),e(L,Ds),e(L,Ie),e(Ie,Os),e(Ie,ba),e(ba,Ss),e(Ie,Ws),e(Ie,Tt),e(Tt,Bs),e(Ie,Us),e(L,Rs),e(L,je),e(je,Hs),e(je,wt),e(wt,Js),e(je,Ks),e(je,bt),e(bt,Gs),e(je,Xs),e(L,Zs),e(L,Pe),e(Pe,Qs),e(Pe,yt),e(yt,Ys),e(Pe,er),e(Pe,xt),e(xt,tr),e(Pe,or),e(L,ar),e(L,ya),e(ya,nr),f(o,Nn,p),f(o,So,p),e(So,sr),f(o,Ln,p),f(o,ue,p),e(ue,xa),e(xa,M),e(M,rr),e(M,Wo),e(Wo,ir),e(M,lr),e(M,Bo),e(Bo,dr),e(M,cr),e(M,Uo),e(Uo,hr),e(M,pr),e(M,$a),e($a,fr),e(M,mr),e(M,Fa),e(Fa,ur),e(M,gr),e(M,Ea),e(Ea,_r),e(M,vr),e(M,Va),e(Va,Tr),e(M,wr),e(M,Ro),e(Ro,br),e(M,yr),e(ue,xr),e(ue,ka),e(ka,$t),e($t,$r),e($t,Ho),e(Ho,Fr),e($t,Er),e(ue,Vr),e(ue,Ia),e(Ia,Ft),e(Ft,kr),e(Ft,Et),e(Et,Ir),e(Ft,jr),f(o,qn,p),f(o,ge,p),e(ge,Pr),e(ge,Vt),e(Vt,Mr),e(ge,Cr),e(ge,kt),e(kt,Ar),e(ge,zr),f(o,Dn,p),f(o,Ke,p),e(Ke,Nr),e(Ke,It),e(It,Lr),e(Ke,qr),f(o,On,p),f(o,Me,p),e(Me,Ge),e(Ge,ja),y(jt,ja,null),e(Me,Dr),e(Me,Pa),e(Pa,Or),f(o,Sn,p),f(o,B,p),y(Pt,B,null),e(B,Sr),e(B,Ce),e(Ce,Wr),e(Ce,Jo),e(Jo,Br),e(Ce,Ur),e(Ce,Mt),e(Mt,Rr),e(Ce,Hr),e(B,Jr),e(B,Ae),e(Ae,Kr),e(Ae,Ko),e(Ko,Gr),e(Ae,Xr),e(Ae,Go),e(Go,Zr),e(Ae,Qr),e(B,Yr),e(B,Ma),e(Ma,ei),e(B,ti),y(Ct,B,null),f(o,Wn,p),f(o,ze,p),e(ze,Xe),e(Xe,Ca),y(At,Ca,null),e(ze,oi),e(ze,Aa),e(Aa,ai),f(o,Bn,p),f(o,ne,p),y(zt,ne,null),e(ne,ni),e(ne,za),e(za,si),e(ne,ri),e(ne,Nt),e(Nt,ii),e(Nt,Na),e(Na,li),e(Nt,di),e(ne,ci),e(ne,_e),y(Lt,_e,null),e(_e,hi),e(_e,La),e(La,pi),e(_e,fi),y(Ze,_e,null),f(o,Un,p),f(o,Ne,p),e(Ne,Qe),e(Qe,qa),y(qt,qa,null),e(Ne,mi),e(Ne,Da),e(Da,ui),f(o,Rn,p),f(o,he,p),y(Dt,he,null),e(he,gi),e(he,Ot),e(Ot,_i),e(Ot,St),e(St,vi),e(Ot,Ti),e(he,wi),e(he,H),y(Wt,H,null),e(H,bi),e(H,Le),e(Le,yi),e(Le,Xo),e(Xo,xi),e(Le,$i),e(Le,Oa),e(Oa,Fi),e(Le,Ei),e(H,Vi),y(Ye,H,null),e(H,ki),e(H,Sa),e(Sa,Ii),e(H,ji),y(Bt,H,null),f(o,Hn,p),f(o,qe,p),e(qe,et),e(et,Wa),y(Ut,Wa,null),e(qe,Pi),e(qe,Ba),e(Ba,Mi),f(o,Jn,p),f(o,se,p),y(Rt,se,null),e(se,Ci),e(se,Ua),e(Ua,Ai),e(se,zi),e(se,Ht),e(Ht,Ni),e(Ht,Jt),e(Jt,Li),e(Ht,qi),e(se,Di),e(se,J),y(Kt,J,null),e(J,Oi),e(J,De),e(De,Si),e(De,Zo),e(Zo,Wi),e(De,Bi),e(De,Ra),e(Ra,Ui),e(De,Ri),e(J,Hi),y(tt,J,null),e(J,Ji),e(J,Ha),e(Ha,Ki),e(J,Gi),y(Gt,J,null),f(o,Kn,p),f(o,Oe,p),e(Oe,ot),e(ot,Ja),y(Xt,Ja,null),e(Oe,Xi),e(Oe,Ka),e(Ka,Zi),f(o,Gn,p),f(o,O,p),y(Zt,O,null),e(O,Qi),e(O,Ga),e(Ga,Yi),e(O,el),e(O,Qt),e(Qt,tl),e(Qt,Qo),e(Qo,ol),e(Qt,al),e(O,nl),e(O,Yt),e(Yt,sl),e(Yt,eo),e(eo,rl),e(Yt,il),e(O,ll),y(at,O,null),e(O,dl),e(O,K),y(to,K,null),e(K,cl),e(K,Se),e(Se,hl),e(Se,Yo),e(Yo,pl),e(Se,fl),e(Se,Xa),e(Xa,ml),e(Se,ul),e(K,gl),y(nt,K,null),e(K,_l),e(K,Za),e(Za,vl),e(K,Tl),y(oo,K,null),f(o,Xn,p),f(o,We,p),e(We,st),e(st,Qa),y(ao,Qa,null),e(We,wl),e(We,Ya),e(Ya,bl),f(o,Zn,p),f(o,S,p),y(no,S,null),e(S,yl),e(S,en),e(en,xl),e(S,$l),e(S,so),e(so,Fl),e(so,ea),e(ea,El),e(so,Vl),e(S,kl),e(S,ro),e(ro,Il),e(ro,io),e(io,jl),e(ro,Pl),e(S,Ml),y(rt,S,null),e(S,Cl),e(S,G),y(lo,G,null),e(G,Al),e(G,Be),e(Be,zl),e(Be,ta),e(ta,Nl),e(Be,Ll),e(Be,tn),e(tn,ql),e(Be,Dl),e(G,Ol),y(it,G,null),e(G,Sl),e(G,on),e(on,Wl),e(G,Bl),y(co,G,null),f(o,Qn,p),f(o,Ue,p),e(Ue,lt),e(lt,an),y(ho,an,null),e(Ue,Ul),e(Ue,nn),e(nn,Rl),f(o,Yn,p),f(o,A,p),y(po,A,null),e(A,Hl),e(A,sn),e(sn,Jl),e(A,Kl),e(A,fo),e(fo,Gl),e(fo,oa),e(oa,Xl),e(fo,Zl),e(A,Ql),e(A,mo),e(mo,Yl),e(mo,uo),e(uo,ed),e(mo,td),e(A,od),e(A,rn),e(rn,ad),e(A,nd),e(A,pe),e(pe,ln),e(ln,go),e(go,sd),e(pe,rd),e(pe,dn),e(dn,_o),e(_o,id),e(pe,ld),e(pe,cn),e(cn,vo),e(vo,dd),e(pe,cd),e(pe,hn),e(hn,To),e(To,hd),e(A,pd),e(A,X),y(wo,X,null),e(X,fd),e(X,Re),e(Re,md),e(Re,pn),e(pn,ud),e(Re,gd),e(Re,fn),e(fn,_d),e(Re,vd),e(X,Td),y(dt,X,null),e(X,wd),e(X,mn),e(mn,bd),e(X,yd),y(bo,X,null),f(o,es,p),f(o,He,p),e(He,ct),e(ct,un),y(yo,un,null),e(He,xd),e(He,gn),e(gn,$d),f(o,ts,p),f(o,z,p),y(xo,z,null),e(z,Fd),e(z,_n),e(_n,Ed),e(z,Vd),e(z,$o),e($o,kd),e($o,aa),e(aa,Id),e($o,jd),e(z,Pd),e(z,Fo),e(Fo,Md),e(Fo,Eo),e(Eo,Cd),e(Fo,Ad),e(z,zd),e(z,vn),e(vn,Nd),e(z,Ld),e(z,fe),e(fe,Tn),e(Tn,Vo),e(Vo,qd),e(fe,Dd),e(fe,wn),e(wn,ko),e(ko,Od),e(fe,Sd),e(fe,bn),e(bn,Io),e(Io,Wd),e(fe,Bd),e(fe,yn),e(yn,jo),e(jo,Ud),e(z,Rd),e(z,Z),y(Po,Z,null),e(Z,Hd),e(Z,Je),e(Je,Jd),e(Je,xn),e(xn,Kd),e(Je,Gd),e(Je,$n),e($n,Xd),e(Je,Zd),e(Z,Qd),y(ht,Z,null),e(Z,Yd),e(Z,Fn),e(Fn,ec),e(Z,tc),y(Mo,Z,null),os=!0},p(o,[p]){const Co={};p&2&&(Co.$$scope={dirty:p,ctx:o}),k.$set(Co);const En={};p&2&&(En.$$scope={dirty:p,ctx:o}),Ze.$set(En);const Vn={};p&2&&(Vn.$$scope={dirty:p,ctx:o}),Ye.$set(Vn);const kn={};p&2&&(kn.$$scope={dirty:p,ctx:o}),tt.$set(kn);const Ao={};p&2&&(Ao.$$scope={dirty:p,ctx:o}),at.$set(Ao);const In={};p&2&&(In.$$scope={dirty:p,ctx:o}),nt.$set(In);const jn={};p&2&&(jn.$$scope={dirty:p,ctx:o}),rt.$set(jn);const Pn={};p&2&&(Pn.$$scope={dirty:p,ctx:o}),it.$set(Pn);const zo={};p&2&&(zo.$$scope={dirty:p,ctx:o}),dt.$set(zo);const Mn={};p&2&&(Mn.$$scope={dirty:p,ctx:o}),ht.$set(Mn)},i(o){os||(x(_.$$.fragment,o),x(k.$$.fragment,o),x(C.$$.fragment,o),x(jt.$$.fragment,o),x(Pt.$$.fragment,o),x(Ct.$$.fragment,o),x(At.$$.fragment,o),x(zt.$$.fragment,o),x(Lt.$$.fragment,o),x(Ze.$$.fragment,o),x(qt.$$.fragment,o),x(Dt.$$.fragment,o),x(Wt.$$.fragment,o),x(Ye.$$.fragment,o),x(Bt.$$.fragment,o),x(Ut.$$.fragment,o),x(Rt.$$.fragment,o),x(Kt.$$.fragment,o),x(tt.$$.fragment,o),x(Gt.$$.fragment,o),x(Xt.$$.fragment,o),x(Zt.$$.fragment,o),x(at.$$.fragment,o),x(to.$$.fragment,o),x(nt.$$.fragment,o),x(oo.$$.fragment,o),x(ao.$$.fragment,o),x(no.$$.fragment,o),x(rt.$$.fragment,o),x(lo.$$.fragment,o),x(it.$$.fragment,o),x(co.$$.fragment,o),x(ho.$$.fragment,o),x(po.$$.fragment,o),x(wo.$$.fragment,o),x(dt.$$.fragment,o),x(bo.$$.fragment,o),x(yo.$$.fragment,o),x(xo.$$.fragment,o),x(Po.$$.fragment,o),x(ht.$$.fragment,o),x(Mo.$$.fragment,o),os=!0)},o(o){$(_.$$.fragment,o),$(k.$$.fragment,o),$(C.$$.fragment,o),$(jt.$$.fragment,o),$(Pt.$$.fragment,o),$(Ct.$$.fragment,o),$(At.$$.fragment,o),$(zt.$$.fragment,o),$(Lt.$$.fragment,o),$(Ze.$$.fragment,o),$(qt.$$.fragment,o),$(Dt.$$.fragment,o),$(Wt.$$.fragment,o),$(Ye.$$.fragment,o),$(Bt.$$.fragment,o),$(Ut.$$.fragment,o),$(Rt.$$.fragment,o),$(Kt.$$.fragment,o),$(tt.$$.fragment,o),$(Gt.$$.fragment,o),$(Xt.$$.fragment,o),$(Zt.$$.fragment,o),$(at.$$.fragment,o),$(to.$$.fragment,o),$(nt.$$.fragment,o),$(oo.$$.fragment,o),$(ao.$$.fragment,o),$(no.$$.fragment,o),$(rt.$$.fragment,o),$(lo.$$.fragment,o),$(it.$$.fragment,o),$(co.$$.fragment,o),$(ho.$$.fragment,o),$(po.$$.fragment,o),$(wo.$$.fragment,o),$(dt.$$.fragment,o),$(bo.$$.fragment,o),$(yo.$$.fragment,o),$(xo.$$.fragment,o),$(Po.$$.fragment,o),$(ht.$$.fragment,o),$(Mo.$$.fragment,o),os=!1},d(o){t(h),o&&t(v),o&&t(m),F(_),o&&t(R),F(k,o),o&&t(re),o&&t(P),F(C),o&&t(j),o&&t(N),o&&t(me),o&&t(Lo),o&&t(Cn),o&&t(qo),o&&t(An),o&&t(Do),o&&t(zn),o&&t(L),o&&t(Nn),o&&t(So),o&&t(Ln),o&&t(ue),o&&t(qn),o&&t(ge),o&&t(Dn),o&&t(Ke),o&&t(On),o&&t(Me),F(jt),o&&t(Sn),o&&t(B),F(Pt),F(Ct),o&&t(Wn),o&&t(ze),F(At),o&&t(Bn),o&&t(ne),F(zt),F(Lt),F(Ze),o&&t(Un),o&&t(Ne),F(qt),o&&t(Rn),o&&t(he),F(Dt),F(Wt),F(Ye),F(Bt),o&&t(Hn),o&&t(qe),F(Ut),o&&t(Jn),o&&t(se),F(Rt),F(Kt),F(tt),F(Gt),o&&t(Kn),o&&t(Oe),F(Xt),o&&t(Gn),o&&t(O),F(Zt),F(at),F(to),F(nt),F(oo),o&&t(Xn),o&&t(We),F(ao),o&&t(Zn),o&&t(S),F(no),F(rt),F(lo),F(it),F(co),o&&t(Qn),o&&t(Ue),F(ho),o&&t(Yn),o&&t(A),F(po),F(wo),F(dt),F(bo),o&&t(es),o&&t(He),F(yo),o&&t(ts),o&&t(z),F(xo),F(Po),F(ht),F(Mo)}}}const xp={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.ViTFeatureExtractor",title:"ViTFeatureExtractor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function $p(I,h,v){let{fw:m}=h;return I.$$set=u=>{"fw"in u&&v(0,m=u.fw)},[m]}class Pp extends lp{constructor(h){super();dp(this,h,$p,yp,cp,{fw:0})}}export{Pp as default,xp as metadata};
