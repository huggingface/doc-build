import{S as ep,i as tp,s as op,e as a,k as d,w,t as n,L as ap,c as s,d as t,m as c,a as r,x as b,h as i,b as l,J as e,g as m,y,q as x,o as $,B as F}from"../../../chunks/vendor-e859c359.js";import{T as Fe}from"../../../chunks/Tip-edc75249.js";import{D as U}from"../../../chunks/Docstring-ade913b3.js";import{C as Ao}from"../../../chunks/CodeBlock-ce4317c2.js";import{I as Ee}from"../../../chunks/IconCopyLink-5fae3b20.js";import"../../../chunks/CopyButton-77addb3d.js";function sp(I){let h,v,f,u,T;return{c(){h=a("p"),v=n(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),f=a("a"),u=n("Github Issue"),T=n("."),this.h()},l(_){h=s(_,"P",{});var g=r(h);v=i(g,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),f=s(g,"A",{href:!0,rel:!0});var V=r(f);u=i(V,"Github Issue"),V.forEach(t),T=i(g,"."),g.forEach(t),this.h()},h(){l(f,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),l(f,"rel","nofollow")},m(_,g){m(_,h,g),e(h,v),e(h,f),e(f,u),e(h,T)},d(_){_&&t(h)}}}function rp(I){let h,v;return{c(){h=a("p"),v=n(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(f){h=s(f,"P",{});var u=r(h);v=i(u,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),u.forEach(t)},m(f,u){m(f,h,u),e(h,v)},d(f){f&&t(h)}}}function np(I){let h,v,f,u,T;return{c(){h=a("p"),v=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),u=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=r(h);v=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(g,"CODE",{});var V=r(f);u=i(V,"Module"),V.forEach(t),T=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(t)},m(_,g){m(_,h,g),e(h,v),e(h,f),e(f,u),e(h,T)},d(_){_&&t(h)}}}function ip(I){let h,v,f,u,T;return{c(){h=a("p"),v=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),u=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=r(h);v=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(g,"CODE",{});var V=r(f);u=i(V,"Module"),V.forEach(t),T=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(t)},m(_,g){m(_,h,g),e(h,v),e(h,f),e(f,u),e(h,T)},d(_){_&&t(h)}}}function lp(I){let h,v,f,u,T,_,g,V,de,R,k,re,P,S,ee,C,ce,te;return{c(){h=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),f=d(),u=a("ul"),T=a("li"),_=n("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),re=n("This second option is useful when using "),P=a("code"),S=n("tf.keras.Model.fit"),ee=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),C=a("code"),ce=n("model(inputs)"),te=n(".")},l(E){h=s(E,"P",{});var j=r(h);v=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),f=c(E),u=s(E,"UL",{});var N=r(u);T=s(N,"LI",{});var Ve=r(T);_=i(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),g=c(N),V=s(N,"LI",{});var oe=r(V);de=i(oe,"having all inputs as a list, tuple or dict in the first positional arguments."),oe.forEach(t),N.forEach(t),R=c(E),k=s(E,"P",{});var q=r(k);re=i(q,"This second option is useful when using "),P=s(q,"CODE",{});var ke=r(P);S=i(ke,"tf.keras.Model.fit"),ke.forEach(t),ee=i(q,` method which currently requires having all
the tensors in the first argument of the model call function: `),C=s(q,"CODE",{});var fe=r(C);ce=i(fe,"model(inputs)"),fe.forEach(t),te=i(q,"."),q.forEach(t)},m(E,j){m(E,h,j),e(h,v),m(E,f,j),m(E,u,j),e(u,T),e(T,_),e(u,g),e(u,V),e(V,de),m(E,R,j),m(E,k,j),e(k,re),e(k,P),e(P,S),e(k,ee),e(k,C),e(C,ce),e(k,te)},d(E){E&&t(h),E&&t(f),E&&t(u),E&&t(R),E&&t(k)}}}function dp(I){let h,v,f,u,T;return{c(){h=a("p"),v=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),u=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=r(h);v=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(g,"CODE",{});var V=r(f);u=i(V,"Module"),V.forEach(t),T=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(t)},m(_,g){m(_,h,g),e(h,v),e(h,f),e(f,u),e(h,T)},d(_){_&&t(h)}}}function cp(I){let h,v,f,u,T,_,g,V,de,R,k,re,P,S,ee,C,ce,te;return{c(){h=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),f=d(),u=a("ul"),T=a("li"),_=n("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),re=n("This second option is useful when using "),P=a("code"),S=n("tf.keras.Model.fit"),ee=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),C=a("code"),ce=n("model(inputs)"),te=n(".")},l(E){h=s(E,"P",{});var j=r(h);v=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),f=c(E),u=s(E,"UL",{});var N=r(u);T=s(N,"LI",{});var Ve=r(T);_=i(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),g=c(N),V=s(N,"LI",{});var oe=r(V);de=i(oe,"having all inputs as a list, tuple or dict in the first positional arguments."),oe.forEach(t),N.forEach(t),R=c(E),k=s(E,"P",{});var q=r(k);re=i(q,"This second option is useful when using "),P=s(q,"CODE",{});var ke=r(P);S=i(ke,"tf.keras.Model.fit"),ke.forEach(t),ee=i(q,` method which currently requires having all
the tensors in the first argument of the model call function: `),C=s(q,"CODE",{});var fe=r(C);ce=i(fe,"model(inputs)"),fe.forEach(t),te=i(q,"."),q.forEach(t)},m(E,j){m(E,h,j),e(h,v),m(E,f,j),m(E,u,j),e(u,T),e(T,_),e(u,g),e(u,V),e(V,de),m(E,R,j),m(E,k,j),e(k,re),e(k,P),e(P,S),e(k,ee),e(k,C),e(C,ce),e(k,te)},d(E){E&&t(h),E&&t(f),E&&t(u),E&&t(R),E&&t(k)}}}function hp(I){let h,v,f,u,T;return{c(){h=a("p"),v=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),u=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=r(h);v=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(g,"CODE",{});var V=r(f);u=i(V,"Module"),V.forEach(t),T=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(t)},m(_,g){m(_,h,g),e(h,v),e(h,f),e(f,u),e(h,T)},d(_){_&&t(h)}}}function pp(I){let h,v,f,u,T;return{c(){h=a("p"),v=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),u=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=r(h);v=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(g,"CODE",{});var V=r(f);u=i(V,"Module"),V.forEach(t),T=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(t)},m(_,g){m(_,h,g),e(h,v),e(h,f),e(f,u),e(h,T)},d(_){_&&t(h)}}}function mp(I){let h,v,f,u,T;return{c(){h=a("p"),v=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),u=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=r(h);v=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(g,"CODE",{});var V=r(f);u=i(V,"Module"),V.forEach(t),T=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(t)},m(_,g){m(_,h,g),e(h,v),e(h,f),e(f,u),e(h,T)},d(_){_&&t(h)}}}function fp(I){let h,v,f,u,T,_,g,V,de,R,k,re,P,S,ee,C,ce,te,E,j,N,Ve,oe,q,ke,fe,zo,xr,js,No,_a,$r,Ps,Lo,Fr,Ms,W,va,Er,Vr,gt,kr,qo,Ir,jr,Pr,Ie,Mr,Ta,Cr,Ar,_t,zr,Nr,Lr,je,qr,vt,Dr,Or,Tt,Sr,Wr,Br,Pe,Ur,wt,Rr,Hr,bt,Jr,Kr,Gr,wa,Xr,Cs,Do,Zr,As,ue,ba,M,Qr,Oo,Yr,en,So,tn,on,Wo,an,sn,ya,rn,nn,xa,ln,dn,$a,cn,hn,Fa,pn,mn,Bo,fn,un,gn,Ea,yt,_n,Uo,vn,Tn,wn,Va,xt,bn,$t,yn,xn,zs,ge,$n,Ft,Fn,En,Et,Vn,kn,Ns,Ke,In,Vt,jn,Pn,Ls,Me,Ge,ka,kt,Mn,Ia,Cn,qs,B,It,An,Ce,zn,Ro,Nn,Ln,jt,qn,Dn,On,Ae,Sn,Ho,Wn,Bn,Jo,Un,Rn,Hn,ja,Jn,Kn,Pt,Ds,ze,Xe,Pa,Mt,Gn,Ma,Xn,Os,ae,Ct,Zn,Ca,Qn,Yn,At,ei,Aa,ti,oi,ai,_e,zt,si,za,ri,ni,Ze,Ss,Ne,Qe,Na,Nt,ii,La,li,Ws,he,Lt,di,qt,ci,Dt,hi,pi,mi,H,Ot,fi,Le,ui,Ko,gi,_i,qa,vi,Ti,wi,Ye,bi,Da,yi,xi,St,Bs,qe,et,Oa,Wt,$i,Sa,Fi,Us,se,Bt,Ei,Wa,Vi,ki,Ut,Ii,Rt,ji,Pi,Mi,J,Ht,Ci,De,Ai,Go,zi,Ni,Ba,Li,qi,Di,tt,Oi,Ua,Si,Wi,Jt,Rs,Oe,ot,Ra,Kt,Bi,Ha,Ui,Hs,D,Gt,Ri,Ja,Hi,Ji,Xt,Ki,Xo,Gi,Xi,Zi,Zt,Qi,Qt,Yi,el,tl,at,ol,K,Yt,al,Se,sl,Zo,rl,nl,Ka,il,ll,dl,st,cl,Ga,hl,pl,eo,Js,We,rt,Xa,to,ml,Za,fl,Ks,O,oo,ul,Qa,gl,_l,ao,vl,Qo,Tl,wl,bl,so,yl,ro,xl,$l,Fl,nt,El,G,no,Vl,Be,kl,Yo,Il,jl,Ya,Pl,Ml,Cl,it,Al,es,zl,Nl,io,Gs,Ue,lt,ts,lo,Ll,os,ql,Xs,A,co,Dl,as,Ol,Sl,ho,Wl,ea,Bl,Ul,Rl,po,Hl,mo,Jl,Kl,Gl,ss,Xl,Zl,pe,rs,fo,Ql,Yl,ns,uo,ed,td,is,go,od,ad,ls,_o,sd,rd,X,vo,nd,Re,id,ds,ld,dd,cs,cd,hd,pd,dt,md,hs,fd,ud,To,Zs,He,ct,ps,wo,gd,ms,_d,Qs,z,bo,vd,fs,Td,wd,yo,bd,ta,yd,xd,$d,xo,Fd,$o,Ed,Vd,kd,us,Id,jd,me,gs,Fo,Pd,Md,_s,Eo,Cd,Ad,vs,Vo,zd,Nd,Ts,ko,Ld,qd,Z,Io,Dd,Je,Od,ws,Sd,Wd,bs,Bd,Ud,Rd,ht,Hd,ys,Jd,Kd,jo,Ys;return _=new Ee({}),k=new Fe({props:{$$slots:{default:[sp]},$$scope:{ctx:I}}}),C=new Ee({}),kt=new Ee({}),It=new U({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/configuration_vit.py#L29",parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"}]}}),Pt=new Ao({props:{code:`from transformers import ViTModel, ViTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Mt=new Ee({}),Ct=new U({props:{name:"class transformers.ViTFeatureExtractor",anchor:"transformers.ViTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = 2"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/feature_extraction_vit.py#L37",parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code>
is set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>.
Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}]}}),zt=new U({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.ViTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/feature_extraction_vit.py#L83",parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ViTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/master/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Ze=new Fe({props:{warning:!0,$$slots:{default:[rp]},$$scope:{ctx:I}}}),Nt=new Ee({}),Lt=new U({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_vit.py#L479",parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ot=new U({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"interpolate_pos_encoding",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_vit.py#L504",parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">transformers.ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ye=new Fe({props:{$$slots:{default:[np]},$$scope:{ctx:I}}}),St=new Ao({props:{code:`from transformers import ViTFeatureExtractor, ViTModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Wt=new Ee({}),Bt=new U({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_vit.py#L597",parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ht=new U({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"interpolate_pos_encoding",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_vit.py#L610",parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">transformers.ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tt=new Fe({props:{$$slots:{default:[ip]},$$scope:{ctx:I}}}),Jt=new Ao({props:{code:`from transformers import ViTFeatureExtractor, ViTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`}}),Kt=new Ee({}),Gt=new U({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_tf_vit.py#L654",parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),at=new Fe({props:{$$slots:{default:[lp]},$$scope:{ctx:I}}}),Yt=new U({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_tf_vit.py#L660",parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:'<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> `<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014; Pixel values. Pixel values can be obtained using <a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See <a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">transformers.ViTFeatureExtractor.<strong>call</strong>()</a> for details.',name:"pixel_values"},{anchor:"transformers.TFViTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>TFBaseModelOutputWithPooling</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),st=new Fe({props:{$$slots:{default:[dp]},$$scope:{ctx:I}}}),eo=new Ao({props:{code:`from transformers import ViTFeatureExtractor, TFViTModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),to=new Ee({}),oo=new U({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_tf_vit.py#L759",parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),nt=new Fe({props:{$$slots:{default:[cp]},$$scope:{ctx:I}}}),no=new U({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_tf_vit.py#L773",parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:'<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> `<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014; Pixel values. Pixel values can be obtained using <a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See <a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">transformers.ViTFeatureExtractor.<strong>call</strong>()</a> for details.',name:"pixel_values"},{anchor:"transformers.TFViTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTForImageClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFViTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>TFSequenceClassifierOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),it=new Fe({props:{$$slots:{default:[hp]},$$scope:{ctx:I}}}),io=new Ao({props:{code:`from transformers import ViTFeatureExtractor, TFViTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[<span class="hljs-built_in">int</span>(predicted_class_idx)])`}}),lo=new Ee({}),co=new U({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_flax_vit.py#L511",parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),vo=new U({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxViTPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_flax_vit.py#L426",returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dt=new Fe({props:{$$slots:{default:[pp]},$$scope:{ctx:I}}}),To=new Ao({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),wo=new Ee({}),bo=new U({props:{name:"class transformers.FlaxViTForImageClassification",anchor:"transformers.FlaxViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_flax_vit.py#L590",parametersDescription:[{anchor:"transformers.FlaxViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxViTForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Io=new U({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxViTPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_flax_vit.py#L426",returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ht=new Fe({props:{$$slots:{default:[mp]},$$scope:{ctx:I}}}),jo=new Ao({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){h=a("meta"),v=d(),f=a("h1"),u=a("a"),T=a("span"),w(_.$$.fragment),g=d(),V=a("span"),de=n("Vision Transformer (ViT)"),R=d(),w(k.$$.fragment),re=d(),P=a("h2"),S=a("a"),ee=a("span"),w(C.$$.fragment),ce=d(),te=a("span"),E=n("Overview"),j=d(),N=a("p"),Ve=n("The Vision Transformer (ViT) model was proposed in "),oe=a("a"),q=n(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),ke=n(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),fe=d(),zo=a("p"),xr=n("The abstract from the paper is the following:"),js=d(),No=a("p"),_a=a("em"),$r=n(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),Ps=d(),Lo=a("p"),Fr=n("Tips:"),Ms=d(),W=a("ul"),va=a("li"),Er=n(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),Vr=d(),gt=a("li"),kr=n(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),qo=a("a"),Ir=n("ViTFeatureExtractor"),jr=n(" to resize (or rescale) and normalize images for the model."),Pr=d(),Ie=a("li"),Mr=n(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Ta=a("code"),Cr=n("google/vit-base-patch16-224"),Ar=n(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),_t=a("a"),zr=n("hub"),Nr=n("."),Lr=d(),je=a("li"),qr=n("The available checkpoints are either (1) pre-trained on "),vt=a("a"),Dr=n("ImageNet-21k"),Or=n(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),Tt=a("a"),Sr=n("ImageNet"),Wr=n(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Br=d(),Pe=a("li"),Ur=n(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),wt=a("a"),Rr=n("(Touvron et al., 2019)"),Hr=n(", "),bt=a("a"),Jr=n(`(Kolesnikov
et al., 2020)`),Kr=n(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),Gr=d(),wa=a("li"),Xr=n(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),Cs=d(),Do=a("p"),Zr=n("Following the original Vision Transformer, some follow-up works have been made:"),As=d(),ue=a("ul"),ba=a("li"),M=a("p"),Qr=n(`DeiT (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers. Refer to
`),Oo=a("a"),Yr=n("DeiT\u2019s documentation page"),en=n(`. The authors of DeiT also released more efficiently trained ViT models, which
you can directly plug into `),So=a("a"),tn=n("ViTModel"),on=n(" or "),Wo=a("a"),an=n("ViTForImageClassification"),sn=n(`. There
are 4 variants available (in 3 different sizes): `),ya=a("em"),rn=n("facebook/deit-tiny-patch16-224"),nn=n(", "),xa=a("em"),ln=n("facebook/deit-small-patch16-224"),dn=n(`,
`),$a=a("em"),cn=n("facebook/deit-base-patch16-224"),hn=n(" and "),Fa=a("em"),pn=n("facebook/deit-base-patch16-384"),mn=n(`. Note that one should use
`),Bo=a("a"),fn=n("DeiTFeatureExtractor"),un=n(" in order to prepare images for the model."),gn=d(),Ea=a("li"),yt=a("p"),_n=n(`BEiT (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.
Refer to `),Uo=a("a"),vn=n("BEiT\u2019s documentation page"),Tn=n("."),wn=d(),Va=a("li"),xt=a("p"),bn=n(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),$t=a("a"),yn=n("hub"),xn=n("."),zs=d(),ge=a("p"),$n=n("This model was contributed by "),Ft=a("a"),Fn=n("nielsr"),En=n(`. The original code (written in JAX) can be
found `),Et=a("a"),Vn=n("here"),kn=n("."),Ns=d(),Ke=a("p"),In=n("Note that we converted the weights from Ross Wightman\u2019s "),Vt=a("a"),jn=n("timm library"),Pn=n(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),Ls=d(),Me=a("h2"),Ge=a("a"),ka=a("span"),w(kt.$$.fragment),Mn=d(),Ia=a("span"),Cn=n("ViTConfig"),qs=d(),B=a("div"),w(It.$$.fragment),An=d(),Ce=a("p"),zn=n("This is the configuration class to store the configuration of a "),Ro=a("a"),Nn=n("ViTModel"),Ln=n(`. It is used to
instantiate an ViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the ViT `),jt=a("a"),qn=n("google/vit-base-patch16-224"),Dn=n(" architecture."),On=d(),Ae=a("p"),Sn=n("Configuration objects inherit from "),Ho=a("a"),Wn=n("PretrainedConfig"),Bn=n(` and can be used to control the model
outputs. Read the documentation from `),Jo=a("a"),Un=n("PretrainedConfig"),Rn=n(" for more information."),Hn=d(),ja=a("p"),Jn=n("Example:"),Kn=d(),w(Pt.$$.fragment),Ds=d(),ze=a("h2"),Xe=a("a"),Pa=a("span"),w(Mt.$$.fragment),Gn=d(),Ma=a("span"),Xn=n("ViTFeatureExtractor"),Os=d(),ae=a("div"),w(Ct.$$.fragment),Zn=d(),Ca=a("p"),Qn=n("Constructs a ViT feature extractor."),Yn=d(),At=a("p"),ei=n("This feature extractor inherits from "),Aa=a("code"),ti=n("FeatureExtractionMixin"),oi=n(` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),ai=d(),_e=a("div"),w(zt.$$.fragment),si=d(),za=a("p"),ri=n("Main method to prepare for the model one or several image(s)."),ni=d(),w(Ze.$$.fragment),Ss=d(),Ne=a("h2"),Qe=a("a"),Na=a("span"),w(Nt.$$.fragment),ii=d(),La=a("span"),li=n("ViTModel"),Ws=d(),he=a("div"),w(Lt.$$.fragment),di=d(),qt=a("p"),ci=n(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Dt=a("a"),hi=n("torch.nn.Module"),pi=n(` subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mi=d(),H=a("div"),w(Ot.$$.fragment),fi=d(),Le=a("p"),ui=n("The "),Ko=a("a"),gi=n("ViTModel"),_i=n(" forward method, overrides the "),qa=a("code"),vi=n("__call__"),Ti=n(" special method."),wi=d(),w(Ye.$$.fragment),bi=d(),Da=a("p"),yi=n("Examples:"),xi=d(),w(St.$$.fragment),Bs=d(),qe=a("h2"),et=a("a"),Oa=a("span"),w(Wt.$$.fragment),$i=d(),Sa=a("span"),Fi=n("ViTForImageClassification"),Us=d(),se=a("div"),w(Bt.$$.fragment),Ei=d(),Wa=a("p"),Vi=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ki=d(),Ut=a("p"),Ii=n("This model is a PyTorch "),Rt=a("a"),ji=n("torch.nn.Module"),Pi=n(` subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Mi=d(),J=a("div"),w(Ht.$$.fragment),Ci=d(),De=a("p"),Ai=n("The "),Go=a("a"),zi=n("ViTForImageClassification"),Ni=n(" forward method, overrides the "),Ba=a("code"),Li=n("__call__"),qi=n(" special method."),Di=d(),w(tt.$$.fragment),Oi=d(),Ua=a("p"),Si=n("Examples:"),Wi=d(),w(Jt.$$.fragment),Rs=d(),Oe=a("h2"),ot=a("a"),Ra=a("span"),w(Kt.$$.fragment),Bi=d(),Ha=a("span"),Ui=n("TFViTModel"),Hs=d(),D=a("div"),w(Gt.$$.fragment),Ri=d(),Ja=a("p"),Hi=n("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Ji=d(),Xt=a("p"),Ki=n("This model inherits from "),Xo=a("a"),Gi=n("TFPreTrainedModel"),Xi=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Zi=d(),Zt=a("p"),Qi=n("This model is also a "),Qt=a("a"),Yi=n("tf.keras.Model"),el=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),tl=d(),w(at.$$.fragment),ol=d(),K=a("div"),w(Yt.$$.fragment),al=d(),Se=a("p"),sl=n("The "),Zo=a("a"),rl=n("TFViTModel"),nl=n(" forward method, overrides the "),Ka=a("code"),il=n("__call__"),ll=n(" special method."),dl=d(),w(st.$$.fragment),cl=d(),Ga=a("p"),hl=n("Examples:"),pl=d(),w(eo.$$.fragment),Js=d(),We=a("h2"),rt=a("a"),Xa=a("span"),w(to.$$.fragment),ml=d(),Za=a("span"),fl=n("TFViTForImageClassification"),Ks=d(),O=a("div"),w(oo.$$.fragment),ul=d(),Qa=a("p"),gl=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),_l=d(),ao=a("p"),vl=n("This model inherits from "),Qo=a("a"),Tl=n("TFPreTrainedModel"),wl=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),bl=d(),so=a("p"),yl=n("This model is also a "),ro=a("a"),xl=n("tf.keras.Model"),$l=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Fl=d(),w(nt.$$.fragment),El=d(),G=a("div"),w(no.$$.fragment),Vl=d(),Be=a("p"),kl=n("The "),Yo=a("a"),Il=n("TFViTForImageClassification"),jl=n(" forward method, overrides the "),Ya=a("code"),Pl=n("__call__"),Ml=n(" special method."),Cl=d(),w(it.$$.fragment),Al=d(),es=a("p"),zl=n("Examples:"),Nl=d(),w(io.$$.fragment),Gs=d(),Ue=a("h2"),lt=a("a"),ts=a("span"),w(lo.$$.fragment),Ll=d(),os=a("span"),ql=n("FlaxVitModel"),Xs=d(),A=a("div"),w(co.$$.fragment),Dl=d(),as=a("p"),Ol=n("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Sl=d(),ho=a("p"),Wl=n("This model inherits from "),ea=a("a"),Bl=n("FlaxPreTrainedModel"),Ul=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),Rl=d(),po=a("p"),Hl=n("This model is also a Flax Linen "),mo=a("a"),Jl=n("flax.linen.Module"),Kl=n(` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),Gl=d(),ss=a("p"),Xl=n("Finally, this model supports inherent JAX features such as:"),Zl=d(),pe=a("ul"),rs=a("li"),fo=a("a"),Ql=n("Just-In-Time (JIT) compilation"),Yl=d(),ns=a("li"),uo=a("a"),ed=n("Automatic Differentiation"),td=d(),is=a("li"),go=a("a"),od=n("Vectorization"),ad=d(),ls=a("li"),_o=a("a"),sd=n("Parallelization"),rd=d(),X=a("div"),w(vo.$$.fragment),nd=d(),Re=a("p"),id=n("The "),ds=a("code"),ld=n("FlaxViTPreTrainedModel"),dd=n(" forward method, overrides the "),cs=a("code"),cd=n("__call__"),hd=n(" special method."),pd=d(),w(dt.$$.fragment),md=d(),hs=a("p"),fd=n("Examples:"),ud=d(),w(To.$$.fragment),Zs=d(),He=a("h2"),ct=a("a"),ps=a("span"),w(wo.$$.fragment),gd=d(),ms=a("span"),_d=n("FlaxViTForImageClassification"),Qs=d(),z=a("div"),w(bo.$$.fragment),vd=d(),fs=a("p"),Td=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),wd=d(),yo=a("p"),bd=n("This model inherits from "),ta=a("a"),yd=n("FlaxPreTrainedModel"),xd=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),$d=d(),xo=a("p"),Fd=n("This model is also a Flax Linen "),$o=a("a"),Ed=n("flax.linen.Module"),Vd=n(` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),kd=d(),us=a("p"),Id=n("Finally, this model supports inherent JAX features such as:"),jd=d(),me=a("ul"),gs=a("li"),Fo=a("a"),Pd=n("Just-In-Time (JIT) compilation"),Md=d(),_s=a("li"),Eo=a("a"),Cd=n("Automatic Differentiation"),Ad=d(),vs=a("li"),Vo=a("a"),zd=n("Vectorization"),Nd=d(),Ts=a("li"),ko=a("a"),Ld=n("Parallelization"),qd=d(),Z=a("div"),w(Io.$$.fragment),Dd=d(),Je=a("p"),Od=n("The "),ws=a("code"),Sd=n("FlaxViTPreTrainedModel"),Wd=n(" forward method, overrides the "),bs=a("code"),Bd=n("__call__"),Ud=n(" special method."),Rd=d(),w(ht.$$.fragment),Hd=d(),ys=a("p"),Jd=n("Example:"),Kd=d(),w(jo.$$.fragment),this.h()},l(o){const p=ap('[data-svelte="svelte-1phssyn"]',document.head);h=s(p,"META",{name:!0,content:!0}),p.forEach(t),v=c(o),f=s(o,"H1",{class:!0});var Po=r(f);u=s(Po,"A",{id:!0,class:!0,href:!0});var xs=r(u);T=s(xs,"SPAN",{});var $s=r(T);b(_.$$.fragment,$s),$s.forEach(t),xs.forEach(t),g=c(Po),V=s(Po,"SPAN",{});var Fs=r(V);de=i(Fs,"Vision Transformer (ViT)"),Fs.forEach(t),Po.forEach(t),R=c(o),b(k.$$.fragment,o),re=c(o),P=s(o,"H2",{class:!0});var Mo=r(P);S=s(Mo,"A",{id:!0,class:!0,href:!0});var Es=r(S);ee=s(Es,"SPAN",{});var Vs=r(ee);b(C.$$.fragment,Vs),Vs.forEach(t),Es.forEach(t),ce=c(Mo),te=s(Mo,"SPAN",{});var ks=r(te);E=i(ks,"Overview"),ks.forEach(t),Mo.forEach(t),j=c(o),N=s(o,"P",{});var Co=r(N);Ve=i(Co,"The Vision Transformer (ViT) model was proposed in "),oe=s(Co,"A",{href:!0,rel:!0});var Is=r(oe);q=i(Is,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),Is.forEach(t),ke=i(Co,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Co.forEach(t),fe=c(o),zo=s(o,"P",{});var Gd=r(zo);xr=i(Gd,"The abstract from the paper is the following:"),Gd.forEach(t),js=c(o),No=s(o,"P",{});var Xd=r(No);_a=s(Xd,"EM",{});var Zd=r(_a);$r=i(Zd,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),Zd.forEach(t),Xd.forEach(t),Ps=c(o),Lo=s(o,"P",{});var Qd=r(Lo);Fr=i(Qd,"Tips:"),Qd.forEach(t),Ms=c(o),W=s(o,"UL",{});var ne=r(W);va=s(ne,"LI",{});var Yd=r(va);Er=i(Yd,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),Yd.forEach(t),Vr=c(ne),gt=s(ne,"LI",{});var er=r(gt);kr=i(er,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),qo=s(er,"A",{href:!0});var ec=r(qo);Ir=i(ec,"ViTFeatureExtractor"),ec.forEach(t),jr=i(er," to resize (or rescale) and normalize images for the model."),er.forEach(t),Pr=c(ne),Ie=s(ne,"LI",{});var oa=r(Ie);Mr=i(oa,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Ta=s(oa,"CODE",{});var tc=r(Ta);Cr=i(tc,"google/vit-base-patch16-224"),tc.forEach(t),Ar=i(oa,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),_t=s(oa,"A",{href:!0,rel:!0});var oc=r(_t);zr=i(oc,"hub"),oc.forEach(t),Nr=i(oa,"."),oa.forEach(t),Lr=c(ne),je=s(ne,"LI",{});var aa=r(je);qr=i(aa,"The available checkpoints are either (1) pre-trained on "),vt=s(aa,"A",{href:!0,rel:!0});var ac=r(vt);Dr=i(ac,"ImageNet-21k"),ac.forEach(t),Or=i(aa,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),Tt=s(aa,"A",{href:!0,rel:!0});var sc=r(Tt);Sr=i(sc,"ImageNet"),sc.forEach(t),Wr=i(aa,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),aa.forEach(t),Br=c(ne),Pe=s(ne,"LI",{});var sa=r(Pe);Ur=i(sa,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),wt=s(sa,"A",{href:!0,rel:!0});var rc=r(wt);Rr=i(rc,"(Touvron et al., 2019)"),rc.forEach(t),Hr=i(sa,", "),bt=s(sa,"A",{href:!0,rel:!0});var nc=r(bt);Jr=i(nc,`(Kolesnikov
et al., 2020)`),nc.forEach(t),Kr=i(sa,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),sa.forEach(t),Gr=c(ne),wa=s(ne,"LI",{});var ic=r(wa);Xr=i(ic,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),ic.forEach(t),ne.forEach(t),Cs=c(o),Do=s(o,"P",{});var lc=r(Do);Zr=i(lc,"Following the original Vision Transformer, some follow-up works have been made:"),lc.forEach(t),As=c(o),ue=s(o,"UL",{});var ra=r(ue);ba=s(ra,"LI",{});var dc=r(ba);M=s(dc,"P",{});var L=r(M);Qr=i(L,`DeiT (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers. Refer to
`),Oo=s(L,"A",{href:!0});var cc=r(Oo);Yr=i(cc,"DeiT\u2019s documentation page"),cc.forEach(t),en=i(L,`. The authors of DeiT also released more efficiently trained ViT models, which
you can directly plug into `),So=s(L,"A",{href:!0});var hc=r(So);tn=i(hc,"ViTModel"),hc.forEach(t),on=i(L," or "),Wo=s(L,"A",{href:!0});var pc=r(Wo);an=i(pc,"ViTForImageClassification"),pc.forEach(t),sn=i(L,`. There
are 4 variants available (in 3 different sizes): `),ya=s(L,"EM",{});var mc=r(ya);rn=i(mc,"facebook/deit-tiny-patch16-224"),mc.forEach(t),nn=i(L,", "),xa=s(L,"EM",{});var fc=r(xa);ln=i(fc,"facebook/deit-small-patch16-224"),fc.forEach(t),dn=i(L,`,
`),$a=s(L,"EM",{});var uc=r($a);cn=i(uc,"facebook/deit-base-patch16-224"),uc.forEach(t),hn=i(L," and "),Fa=s(L,"EM",{});var gc=r(Fa);pn=i(gc,"facebook/deit-base-patch16-384"),gc.forEach(t),mn=i(L,`. Note that one should use
`),Bo=s(L,"A",{href:!0});var _c=r(Bo);fn=i(_c,"DeiTFeatureExtractor"),_c.forEach(t),un=i(L," in order to prepare images for the model."),L.forEach(t),dc.forEach(t),gn=c(ra),Ea=s(ra,"LI",{});var vc=r(Ea);yt=s(vc,"P",{});var tr=r(yt);_n=i(tr,`BEiT (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.
Refer to `),Uo=s(tr,"A",{href:!0});var Tc=r(Uo);vn=i(Tc,"BEiT\u2019s documentation page"),Tc.forEach(t),Tn=i(tr,"."),tr.forEach(t),vc.forEach(t),wn=c(ra),Va=s(ra,"LI",{});var wc=r(Va);xt=s(wc,"P",{});var or=r(xt);bn=i(or,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),$t=s(or,"A",{href:!0,rel:!0});var bc=r($t);yn=i(bc,"hub"),bc.forEach(t),xn=i(or,"."),or.forEach(t),wc.forEach(t),ra.forEach(t),zs=c(o),ge=s(o,"P",{});var na=r(ge);$n=i(na,"This model was contributed by "),Ft=s(na,"A",{href:!0,rel:!0});var yc=r(Ft);Fn=i(yc,"nielsr"),yc.forEach(t),En=i(na,`. The original code (written in JAX) can be
found `),Et=s(na,"A",{href:!0,rel:!0});var xc=r(Et);Vn=i(xc,"here"),xc.forEach(t),kn=i(na,"."),na.forEach(t),Ns=c(o),Ke=s(o,"P",{});var ar=r(Ke);In=i(ar,"Note that we converted the weights from Ross Wightman\u2019s "),Vt=s(ar,"A",{href:!0,rel:!0});var $c=r(Vt);jn=i($c,"timm library"),$c.forEach(t),Pn=i(ar,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),ar.forEach(t),Ls=c(o),Me=s(o,"H2",{class:!0});var sr=r(Me);Ge=s(sr,"A",{id:!0,class:!0,href:!0});var Fc=r(Ge);ka=s(Fc,"SPAN",{});var Ec=r(ka);b(kt.$$.fragment,Ec),Ec.forEach(t),Fc.forEach(t),Mn=c(sr),Ia=s(sr,"SPAN",{});var Vc=r(Ia);Cn=i(Vc,"ViTConfig"),Vc.forEach(t),sr.forEach(t),qs=c(o),B=s(o,"DIV",{class:!0});var ve=r(B);b(It.$$.fragment,ve),An=c(ve),Ce=s(ve,"P",{});var ia=r(Ce);zn=i(ia,"This is the configuration class to store the configuration of a "),Ro=s(ia,"A",{href:!0});var kc=r(Ro);Nn=i(kc,"ViTModel"),kc.forEach(t),Ln=i(ia,`. It is used to
instantiate an ViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the ViT `),jt=s(ia,"A",{href:!0,rel:!0});var Ic=r(jt);qn=i(Ic,"google/vit-base-patch16-224"),Ic.forEach(t),Dn=i(ia," architecture."),ia.forEach(t),On=c(ve),Ae=s(ve,"P",{});var la=r(Ae);Sn=i(la,"Configuration objects inherit from "),Ho=s(la,"A",{href:!0});var jc=r(Ho);Wn=i(jc,"PretrainedConfig"),jc.forEach(t),Bn=i(la,` and can be used to control the model
outputs. Read the documentation from `),Jo=s(la,"A",{href:!0});var Pc=r(Jo);Un=i(Pc,"PretrainedConfig"),Pc.forEach(t),Rn=i(la," for more information."),la.forEach(t),Hn=c(ve),ja=s(ve,"P",{});var Mc=r(ja);Jn=i(Mc,"Example:"),Mc.forEach(t),Kn=c(ve),b(Pt.$$.fragment,ve),ve.forEach(t),Ds=c(o),ze=s(o,"H2",{class:!0});var rr=r(ze);Xe=s(rr,"A",{id:!0,class:!0,href:!0});var Cc=r(Xe);Pa=s(Cc,"SPAN",{});var Ac=r(Pa);b(Mt.$$.fragment,Ac),Ac.forEach(t),Cc.forEach(t),Gn=c(rr),Ma=s(rr,"SPAN",{});var zc=r(Ma);Xn=i(zc,"ViTFeatureExtractor"),zc.forEach(t),rr.forEach(t),Os=c(o),ae=s(o,"DIV",{class:!0});var pt=r(ae);b(Ct.$$.fragment,pt),Zn=c(pt),Ca=s(pt,"P",{});var Nc=r(Ca);Qn=i(Nc,"Constructs a ViT feature extractor."),Nc.forEach(t),Yn=c(pt),At=s(pt,"P",{});var nr=r(At);ei=i(nr,"This feature extractor inherits from "),Aa=s(nr,"CODE",{});var Lc=r(Aa);ti=i(Lc,"FeatureExtractionMixin"),Lc.forEach(t),oi=i(nr,` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),nr.forEach(t),ai=c(pt),_e=s(pt,"DIV",{class:!0});var da=r(_e);b(zt.$$.fragment,da),si=c(da),za=s(da,"P",{});var qc=r(za);ri=i(qc,"Main method to prepare for the model one or several image(s)."),qc.forEach(t),ni=c(da),b(Ze.$$.fragment,da),da.forEach(t),pt.forEach(t),Ss=c(o),Ne=s(o,"H2",{class:!0});var ir=r(Ne);Qe=s(ir,"A",{id:!0,class:!0,href:!0});var Dc=r(Qe);Na=s(Dc,"SPAN",{});var Oc=r(Na);b(Nt.$$.fragment,Oc),Oc.forEach(t),Dc.forEach(t),ii=c(ir),La=s(ir,"SPAN",{});var Sc=r(La);li=i(Sc,"ViTModel"),Sc.forEach(t),ir.forEach(t),Ws=c(o),he=s(o,"DIV",{class:!0});var ca=r(he);b(Lt.$$.fragment,ca),di=c(ca),qt=s(ca,"P",{});var lr=r(qt);ci=i(lr,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Dt=s(lr,"A",{href:!0,rel:!0});var Wc=r(Dt);hi=i(Wc,"torch.nn.Module"),Wc.forEach(t),pi=i(lr,` subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),lr.forEach(t),mi=c(ca),H=s(ca,"DIV",{class:!0});var Te=r(H);b(Ot.$$.fragment,Te),fi=c(Te),Le=s(Te,"P",{});var ha=r(Le);ui=i(ha,"The "),Ko=s(ha,"A",{href:!0});var Bc=r(Ko);gi=i(Bc,"ViTModel"),Bc.forEach(t),_i=i(ha," forward method, overrides the "),qa=s(ha,"CODE",{});var Uc=r(qa);vi=i(Uc,"__call__"),Uc.forEach(t),Ti=i(ha," special method."),ha.forEach(t),wi=c(Te),b(Ye.$$.fragment,Te),bi=c(Te),Da=s(Te,"P",{});var Rc=r(Da);yi=i(Rc,"Examples:"),Rc.forEach(t),xi=c(Te),b(St.$$.fragment,Te),Te.forEach(t),ca.forEach(t),Bs=c(o),qe=s(o,"H2",{class:!0});var dr=r(qe);et=s(dr,"A",{id:!0,class:!0,href:!0});var Hc=r(et);Oa=s(Hc,"SPAN",{});var Jc=r(Oa);b(Wt.$$.fragment,Jc),Jc.forEach(t),Hc.forEach(t),$i=c(dr),Sa=s(dr,"SPAN",{});var Kc=r(Sa);Fi=i(Kc,"ViTForImageClassification"),Kc.forEach(t),dr.forEach(t),Us=c(o),se=s(o,"DIV",{class:!0});var mt=r(se);b(Bt.$$.fragment,mt),Ei=c(mt),Wa=s(mt,"P",{});var Gc=r(Wa);Vi=i(Gc,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Gc.forEach(t),ki=c(mt),Ut=s(mt,"P",{});var cr=r(Ut);Ii=i(cr,"This model is a PyTorch "),Rt=s(cr,"A",{href:!0,rel:!0});var Xc=r(Rt);ji=i(Xc,"torch.nn.Module"),Xc.forEach(t),Pi=i(cr,` subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cr.forEach(t),Mi=c(mt),J=s(mt,"DIV",{class:!0});var we=r(J);b(Ht.$$.fragment,we),Ci=c(we),De=s(we,"P",{});var pa=r(De);Ai=i(pa,"The "),Go=s(pa,"A",{href:!0});var Zc=r(Go);zi=i(Zc,"ViTForImageClassification"),Zc.forEach(t),Ni=i(pa," forward method, overrides the "),Ba=s(pa,"CODE",{});var Qc=r(Ba);Li=i(Qc,"__call__"),Qc.forEach(t),qi=i(pa," special method."),pa.forEach(t),Di=c(we),b(tt.$$.fragment,we),Oi=c(we),Ua=s(we,"P",{});var Yc=r(Ua);Si=i(Yc,"Examples:"),Yc.forEach(t),Wi=c(we),b(Jt.$$.fragment,we),we.forEach(t),mt.forEach(t),Rs=c(o),Oe=s(o,"H2",{class:!0});var hr=r(Oe);ot=s(hr,"A",{id:!0,class:!0,href:!0});var eh=r(ot);Ra=s(eh,"SPAN",{});var th=r(Ra);b(Kt.$$.fragment,th),th.forEach(t),eh.forEach(t),Bi=c(hr),Ha=s(hr,"SPAN",{});var oh=r(Ha);Ui=i(oh,"TFViTModel"),oh.forEach(t),hr.forEach(t),Hs=c(o),D=s(o,"DIV",{class:!0});var ie=r(D);b(Gt.$$.fragment,ie),Ri=c(ie),Ja=s(ie,"P",{});var ah=r(Ja);Hi=i(ah,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),ah.forEach(t),Ji=c(ie),Xt=s(ie,"P",{});var pr=r(Xt);Ki=i(pr,"This model inherits from "),Xo=s(pr,"A",{href:!0});var sh=r(Xo);Gi=i(sh,"TFPreTrainedModel"),sh.forEach(t),Xi=i(pr,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),pr.forEach(t),Zi=c(ie),Zt=s(ie,"P",{});var mr=r(Zt);Qi=i(mr,"This model is also a "),Qt=s(mr,"A",{href:!0,rel:!0});var rh=r(Qt);Yi=i(rh,"tf.keras.Model"),rh.forEach(t),el=i(mr,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),mr.forEach(t),tl=c(ie),b(at.$$.fragment,ie),ol=c(ie),K=s(ie,"DIV",{class:!0});var be=r(K);b(Yt.$$.fragment,be),al=c(be),Se=s(be,"P",{});var ma=r(Se);sl=i(ma,"The "),Zo=s(ma,"A",{href:!0});var nh=r(Zo);rl=i(nh,"TFViTModel"),nh.forEach(t),nl=i(ma," forward method, overrides the "),Ka=s(ma,"CODE",{});var ih=r(Ka);il=i(ih,"__call__"),ih.forEach(t),ll=i(ma," special method."),ma.forEach(t),dl=c(be),b(st.$$.fragment,be),cl=c(be),Ga=s(be,"P",{});var lh=r(Ga);hl=i(lh,"Examples:"),lh.forEach(t),pl=c(be),b(eo.$$.fragment,be),be.forEach(t),ie.forEach(t),Js=c(o),We=s(o,"H2",{class:!0});var fr=r(We);rt=s(fr,"A",{id:!0,class:!0,href:!0});var dh=r(rt);Xa=s(dh,"SPAN",{});var ch=r(Xa);b(to.$$.fragment,ch),ch.forEach(t),dh.forEach(t),ml=c(fr),Za=s(fr,"SPAN",{});var hh=r(Za);fl=i(hh,"TFViTForImageClassification"),hh.forEach(t),fr.forEach(t),Ks=c(o),O=s(o,"DIV",{class:!0});var le=r(O);b(oo.$$.fragment,le),ul=c(le),Qa=s(le,"P",{});var ph=r(Qa);gl=i(ph,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ph.forEach(t),_l=c(le),ao=s(le,"P",{});var ur=r(ao);vl=i(ur,"This model inherits from "),Qo=s(ur,"A",{href:!0});var mh=r(Qo);Tl=i(mh,"TFPreTrainedModel"),mh.forEach(t),wl=i(ur,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ur.forEach(t),bl=c(le),so=s(le,"P",{});var gr=r(so);yl=i(gr,"This model is also a "),ro=s(gr,"A",{href:!0,rel:!0});var fh=r(ro);xl=i(fh,"tf.keras.Model"),fh.forEach(t),$l=i(gr,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),gr.forEach(t),Fl=c(le),b(nt.$$.fragment,le),El=c(le),G=s(le,"DIV",{class:!0});var ye=r(G);b(no.$$.fragment,ye),Vl=c(ye),Be=s(ye,"P",{});var fa=r(Be);kl=i(fa,"The "),Yo=s(fa,"A",{href:!0});var uh=r(Yo);Il=i(uh,"TFViTForImageClassification"),uh.forEach(t),jl=i(fa," forward method, overrides the "),Ya=s(fa,"CODE",{});var gh=r(Ya);Pl=i(gh,"__call__"),gh.forEach(t),Ml=i(fa," special method."),fa.forEach(t),Cl=c(ye),b(it.$$.fragment,ye),Al=c(ye),es=s(ye,"P",{});var _h=r(es);zl=i(_h,"Examples:"),_h.forEach(t),Nl=c(ye),b(io.$$.fragment,ye),ye.forEach(t),le.forEach(t),Gs=c(o),Ue=s(o,"H2",{class:!0});var _r=r(Ue);lt=s(_r,"A",{id:!0,class:!0,href:!0});var vh=r(lt);ts=s(vh,"SPAN",{});var Th=r(ts);b(lo.$$.fragment,Th),Th.forEach(t),vh.forEach(t),Ll=c(_r),os=s(_r,"SPAN",{});var wh=r(os);ql=i(wh,"FlaxVitModel"),wh.forEach(t),_r.forEach(t),Xs=c(o),A=s(o,"DIV",{class:!0});var Q=r(A);b(co.$$.fragment,Q),Dl=c(Q),as=s(Q,"P",{});var bh=r(as);Ol=i(bh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),bh.forEach(t),Sl=c(Q),ho=s(Q,"P",{});var vr=r(ho);Wl=i(vr,"This model inherits from "),ea=s(vr,"A",{href:!0});var yh=r(ea);Bl=i(yh,"FlaxPreTrainedModel"),yh.forEach(t),Ul=i(vr,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),vr.forEach(t),Rl=c(Q),po=s(Q,"P",{});var Tr=r(po);Hl=i(Tr,"This model is also a Flax Linen "),mo=s(Tr,"A",{href:!0,rel:!0});var xh=r(mo);Jl=i(xh,"flax.linen.Module"),xh.forEach(t),Kl=i(Tr,` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),Tr.forEach(t),Gl=c(Q),ss=s(Q,"P",{});var $h=r(ss);Xl=i($h,"Finally, this model supports inherent JAX features such as:"),$h.forEach(t),Zl=c(Q),pe=s(Q,"UL",{});var ft=r(pe);rs=s(ft,"LI",{});var Fh=r(rs);fo=s(Fh,"A",{href:!0,rel:!0});var Eh=r(fo);Ql=i(Eh,"Just-In-Time (JIT) compilation"),Eh.forEach(t),Fh.forEach(t),Yl=c(ft),ns=s(ft,"LI",{});var Vh=r(ns);uo=s(Vh,"A",{href:!0,rel:!0});var kh=r(uo);ed=i(kh,"Automatic Differentiation"),kh.forEach(t),Vh.forEach(t),td=c(ft),is=s(ft,"LI",{});var Ih=r(is);go=s(Ih,"A",{href:!0,rel:!0});var jh=r(go);od=i(jh,"Vectorization"),jh.forEach(t),Ih.forEach(t),ad=c(ft),ls=s(ft,"LI",{});var Ph=r(ls);_o=s(Ph,"A",{href:!0,rel:!0});var Mh=r(_o);sd=i(Mh,"Parallelization"),Mh.forEach(t),Ph.forEach(t),ft.forEach(t),rd=c(Q),X=s(Q,"DIV",{class:!0});var xe=r(X);b(vo.$$.fragment,xe),nd=c(xe),Re=s(xe,"P",{});var ua=r(Re);id=i(ua,"The "),ds=s(ua,"CODE",{});var Ch=r(ds);ld=i(Ch,"FlaxViTPreTrainedModel"),Ch.forEach(t),dd=i(ua," forward method, overrides the "),cs=s(ua,"CODE",{});var Ah=r(cs);cd=i(Ah,"__call__"),Ah.forEach(t),hd=i(ua," special method."),ua.forEach(t),pd=c(xe),b(dt.$$.fragment,xe),md=c(xe),hs=s(xe,"P",{});var zh=r(hs);fd=i(zh,"Examples:"),zh.forEach(t),ud=c(xe),b(To.$$.fragment,xe),xe.forEach(t),Q.forEach(t),Zs=c(o),He=s(o,"H2",{class:!0});var wr=r(He);ct=s(wr,"A",{id:!0,class:!0,href:!0});var Nh=r(ct);ps=s(Nh,"SPAN",{});var Lh=r(ps);b(wo.$$.fragment,Lh),Lh.forEach(t),Nh.forEach(t),gd=c(wr),ms=s(wr,"SPAN",{});var qh=r(ms);_d=i(qh,"FlaxViTForImageClassification"),qh.forEach(t),wr.forEach(t),Qs=c(o),z=s(o,"DIV",{class:!0});var Y=r(z);b(bo.$$.fragment,Y),vd=c(Y),fs=s(Y,"P",{});var Dh=r(fs);Td=i(Dh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Dh.forEach(t),wd=c(Y),yo=s(Y,"P",{});var br=r(yo);bd=i(br,"This model inherits from "),ta=s(br,"A",{href:!0});var Oh=r(ta);yd=i(Oh,"FlaxPreTrainedModel"),Oh.forEach(t),xd=i(br,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),br.forEach(t),$d=c(Y),xo=s(Y,"P",{});var yr=r(xo);Fd=i(yr,"This model is also a Flax Linen "),$o=s(yr,"A",{href:!0,rel:!0});var Sh=r($o);Ed=i(Sh,"flax.linen.Module"),Sh.forEach(t),Vd=i(yr,` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),yr.forEach(t),kd=c(Y),us=s(Y,"P",{});var Wh=r(us);Id=i(Wh,"Finally, this model supports inherent JAX features such as:"),Wh.forEach(t),jd=c(Y),me=s(Y,"UL",{});var ut=r(me);gs=s(ut,"LI",{});var Bh=r(gs);Fo=s(Bh,"A",{href:!0,rel:!0});var Uh=r(Fo);Pd=i(Uh,"Just-In-Time (JIT) compilation"),Uh.forEach(t),Bh.forEach(t),Md=c(ut),_s=s(ut,"LI",{});var Rh=r(_s);Eo=s(Rh,"A",{href:!0,rel:!0});var Hh=r(Eo);Cd=i(Hh,"Automatic Differentiation"),Hh.forEach(t),Rh.forEach(t),Ad=c(ut),vs=s(ut,"LI",{});var Jh=r(vs);Vo=s(Jh,"A",{href:!0,rel:!0});var Kh=r(Vo);zd=i(Kh,"Vectorization"),Kh.forEach(t),Jh.forEach(t),Nd=c(ut),Ts=s(ut,"LI",{});var Gh=r(Ts);ko=s(Gh,"A",{href:!0,rel:!0});var Xh=r(ko);Ld=i(Xh,"Parallelization"),Xh.forEach(t),Gh.forEach(t),ut.forEach(t),qd=c(Y),Z=s(Y,"DIV",{class:!0});var $e=r(Z);b(Io.$$.fragment,$e),Dd=c($e),Je=s($e,"P",{});var ga=r(Je);Od=i(ga,"The "),ws=s(ga,"CODE",{});var Zh=r(ws);Sd=i(Zh,"FlaxViTPreTrainedModel"),Zh.forEach(t),Wd=i(ga," forward method, overrides the "),bs=s(ga,"CODE",{});var Qh=r(bs);Bd=i(Qh,"__call__"),Qh.forEach(t),Ud=i(ga," special method."),ga.forEach(t),Rd=c($e),b(ht.$$.fragment,$e),Hd=c($e),ys=s($e,"P",{});var Yh=r(ys);Jd=i(Yh,"Example:"),Yh.forEach(t),Kd=c($e),b(jo.$$.fragment,$e),$e.forEach(t),Y.forEach(t),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(up)),l(u,"id","vision-transformer-vit"),l(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(u,"href","#vision-transformer-vit"),l(f,"class","relative group"),l(S,"id","overview"),l(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(S,"href","#overview"),l(P,"class","relative group"),l(oe,"href","https://arxiv.org/abs/2010.11929"),l(oe,"rel","nofollow"),l(qo,"href","/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor"),l(_t,"href","https://huggingface.co/models?search=vit"),l(_t,"rel","nofollow"),l(vt,"href","http://www.image-net.org/"),l(vt,"rel","nofollow"),l(Tt,"href","http://www.image-net.org/challenges/LSVRC/2012/"),l(Tt,"rel","nofollow"),l(wt,"href","https://arxiv.org/abs/1906.06423"),l(wt,"rel","nofollow"),l(bt,"href","https://arxiv.org/abs/1912.11370"),l(bt,"rel","nofollow"),l(Oo,"href","/docs/transformers/master/en/deit"),l(So,"href","/docs/transformers/master/en/model_doc/vit#transformers.ViTModel"),l(Wo,"href","/docs/transformers/master/en/model_doc/vit#transformers.ViTForImageClassification"),l(Bo,"href","/docs/transformers/master/en/model_doc/deit#transformers.DeiTFeatureExtractor"),l(Uo,"href","/docs/transformers/master/en/beit"),l($t,"href","https://huggingface.co/models?other=dino"),l($t,"rel","nofollow"),l(Ft,"href","https://huggingface.co/nielsr"),l(Ft,"rel","nofollow"),l(Et,"href","https://github.com/google-research/vision_transformer"),l(Et,"rel","nofollow"),l(Vt,"href","https://github.com/rwightman/pytorch-image-models"),l(Vt,"rel","nofollow"),l(Ge,"id","transformers.ViTConfig"),l(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ge,"href","#transformers.ViTConfig"),l(Me,"class","relative group"),l(Ro,"href","/docs/transformers/master/en/model_doc/vit#transformers.ViTModel"),l(jt,"href","https://huggingface.co/google/vit-base-patch16-224"),l(jt,"rel","nofollow"),l(Ho,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(Jo,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(B,"class","docstring"),l(Xe,"id","transformers.ViTFeatureExtractor"),l(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Xe,"href","#transformers.ViTFeatureExtractor"),l(ze,"class","relative group"),l(_e,"class","docstring"),l(ae,"class","docstring"),l(Qe,"id","transformers.ViTModel"),l(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Qe,"href","#transformers.ViTModel"),l(Ne,"class","relative group"),l(Dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Dt,"rel","nofollow"),l(Ko,"href","/docs/transformers/master/en/model_doc/vit#transformers.ViTModel"),l(H,"class","docstring"),l(he,"class","docstring"),l(et,"id","transformers.ViTForImageClassification"),l(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(et,"href","#transformers.ViTForImageClassification"),l(qe,"class","relative group"),l(Rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Rt,"rel","nofollow"),l(Go,"href","/docs/transformers/master/en/model_doc/vit#transformers.ViTForImageClassification"),l(J,"class","docstring"),l(se,"class","docstring"),l(ot,"id","transformers.TFViTModel"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.TFViTModel"),l(Oe,"class","relative group"),l(Xo,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),l(Qt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(Qt,"rel","nofollow"),l(Zo,"href","/docs/transformers/master/en/model_doc/vit#transformers.TFViTModel"),l(K,"class","docstring"),l(D,"class","docstring"),l(rt,"id","transformers.TFViTForImageClassification"),l(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(rt,"href","#transformers.TFViTForImageClassification"),l(We,"class","relative group"),l(Qo,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),l(ro,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(ro,"rel","nofollow"),l(Yo,"href","/docs/transformers/master/en/model_doc/vit#transformers.TFViTForImageClassification"),l(G,"class","docstring"),l(O,"class","docstring"),l(lt,"id","transformers.FlaxViTModel"),l(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lt,"href","#transformers.FlaxViTModel"),l(Ue,"class","relative group"),l(ea,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(mo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(mo,"rel","nofollow"),l(fo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(fo,"rel","nofollow"),l(uo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(uo,"rel","nofollow"),l(go,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(go,"rel","nofollow"),l(_o,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(_o,"rel","nofollow"),l(X,"class","docstring"),l(A,"class","docstring"),l(ct,"id","transformers.FlaxViTForImageClassification"),l(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ct,"href","#transformers.FlaxViTForImageClassification"),l(He,"class","relative group"),l(ta,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),l($o,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l($o,"rel","nofollow"),l(Fo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(Fo,"rel","nofollow"),l(Eo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(Eo,"rel","nofollow"),l(Vo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Vo,"rel","nofollow"),l(ko,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(ko,"rel","nofollow"),l(Z,"class","docstring"),l(z,"class","docstring")},m(o,p){e(document.head,h),m(o,v,p),m(o,f,p),e(f,u),e(u,T),y(_,T,null),e(f,g),e(f,V),e(V,de),m(o,R,p),y(k,o,p),m(o,re,p),m(o,P,p),e(P,S),e(S,ee),y(C,ee,null),e(P,ce),e(P,te),e(te,E),m(o,j,p),m(o,N,p),e(N,Ve),e(N,oe),e(oe,q),e(N,ke),m(o,fe,p),m(o,zo,p),e(zo,xr),m(o,js,p),m(o,No,p),e(No,_a),e(_a,$r),m(o,Ps,p),m(o,Lo,p),e(Lo,Fr),m(o,Ms,p),m(o,W,p),e(W,va),e(va,Er),e(W,Vr),e(W,gt),e(gt,kr),e(gt,qo),e(qo,Ir),e(gt,jr),e(W,Pr),e(W,Ie),e(Ie,Mr),e(Ie,Ta),e(Ta,Cr),e(Ie,Ar),e(Ie,_t),e(_t,zr),e(Ie,Nr),e(W,Lr),e(W,je),e(je,qr),e(je,vt),e(vt,Dr),e(je,Or),e(je,Tt),e(Tt,Sr),e(je,Wr),e(W,Br),e(W,Pe),e(Pe,Ur),e(Pe,wt),e(wt,Rr),e(Pe,Hr),e(Pe,bt),e(bt,Jr),e(Pe,Kr),e(W,Gr),e(W,wa),e(wa,Xr),m(o,Cs,p),m(o,Do,p),e(Do,Zr),m(o,As,p),m(o,ue,p),e(ue,ba),e(ba,M),e(M,Qr),e(M,Oo),e(Oo,Yr),e(M,en),e(M,So),e(So,tn),e(M,on),e(M,Wo),e(Wo,an),e(M,sn),e(M,ya),e(ya,rn),e(M,nn),e(M,xa),e(xa,ln),e(M,dn),e(M,$a),e($a,cn),e(M,hn),e(M,Fa),e(Fa,pn),e(M,mn),e(M,Bo),e(Bo,fn),e(M,un),e(ue,gn),e(ue,Ea),e(Ea,yt),e(yt,_n),e(yt,Uo),e(Uo,vn),e(yt,Tn),e(ue,wn),e(ue,Va),e(Va,xt),e(xt,bn),e(xt,$t),e($t,yn),e(xt,xn),m(o,zs,p),m(o,ge,p),e(ge,$n),e(ge,Ft),e(Ft,Fn),e(ge,En),e(ge,Et),e(Et,Vn),e(ge,kn),m(o,Ns,p),m(o,Ke,p),e(Ke,In),e(Ke,Vt),e(Vt,jn),e(Ke,Pn),m(o,Ls,p),m(o,Me,p),e(Me,Ge),e(Ge,ka),y(kt,ka,null),e(Me,Mn),e(Me,Ia),e(Ia,Cn),m(o,qs,p),m(o,B,p),y(It,B,null),e(B,An),e(B,Ce),e(Ce,zn),e(Ce,Ro),e(Ro,Nn),e(Ce,Ln),e(Ce,jt),e(jt,qn),e(Ce,Dn),e(B,On),e(B,Ae),e(Ae,Sn),e(Ae,Ho),e(Ho,Wn),e(Ae,Bn),e(Ae,Jo),e(Jo,Un),e(Ae,Rn),e(B,Hn),e(B,ja),e(ja,Jn),e(B,Kn),y(Pt,B,null),m(o,Ds,p),m(o,ze,p),e(ze,Xe),e(Xe,Pa),y(Mt,Pa,null),e(ze,Gn),e(ze,Ma),e(Ma,Xn),m(o,Os,p),m(o,ae,p),y(Ct,ae,null),e(ae,Zn),e(ae,Ca),e(Ca,Qn),e(ae,Yn),e(ae,At),e(At,ei),e(At,Aa),e(Aa,ti),e(At,oi),e(ae,ai),e(ae,_e),y(zt,_e,null),e(_e,si),e(_e,za),e(za,ri),e(_e,ni),y(Ze,_e,null),m(o,Ss,p),m(o,Ne,p),e(Ne,Qe),e(Qe,Na),y(Nt,Na,null),e(Ne,ii),e(Ne,La),e(La,li),m(o,Ws,p),m(o,he,p),y(Lt,he,null),e(he,di),e(he,qt),e(qt,ci),e(qt,Dt),e(Dt,hi),e(qt,pi),e(he,mi),e(he,H),y(Ot,H,null),e(H,fi),e(H,Le),e(Le,ui),e(Le,Ko),e(Ko,gi),e(Le,_i),e(Le,qa),e(qa,vi),e(Le,Ti),e(H,wi),y(Ye,H,null),e(H,bi),e(H,Da),e(Da,yi),e(H,xi),y(St,H,null),m(o,Bs,p),m(o,qe,p),e(qe,et),e(et,Oa),y(Wt,Oa,null),e(qe,$i),e(qe,Sa),e(Sa,Fi),m(o,Us,p),m(o,se,p),y(Bt,se,null),e(se,Ei),e(se,Wa),e(Wa,Vi),e(se,ki),e(se,Ut),e(Ut,Ii),e(Ut,Rt),e(Rt,ji),e(Ut,Pi),e(se,Mi),e(se,J),y(Ht,J,null),e(J,Ci),e(J,De),e(De,Ai),e(De,Go),e(Go,zi),e(De,Ni),e(De,Ba),e(Ba,Li),e(De,qi),e(J,Di),y(tt,J,null),e(J,Oi),e(J,Ua),e(Ua,Si),e(J,Wi),y(Jt,J,null),m(o,Rs,p),m(o,Oe,p),e(Oe,ot),e(ot,Ra),y(Kt,Ra,null),e(Oe,Bi),e(Oe,Ha),e(Ha,Ui),m(o,Hs,p),m(o,D,p),y(Gt,D,null),e(D,Ri),e(D,Ja),e(Ja,Hi),e(D,Ji),e(D,Xt),e(Xt,Ki),e(Xt,Xo),e(Xo,Gi),e(Xt,Xi),e(D,Zi),e(D,Zt),e(Zt,Qi),e(Zt,Qt),e(Qt,Yi),e(Zt,el),e(D,tl),y(at,D,null),e(D,ol),e(D,K),y(Yt,K,null),e(K,al),e(K,Se),e(Se,sl),e(Se,Zo),e(Zo,rl),e(Se,nl),e(Se,Ka),e(Ka,il),e(Se,ll),e(K,dl),y(st,K,null),e(K,cl),e(K,Ga),e(Ga,hl),e(K,pl),y(eo,K,null),m(o,Js,p),m(o,We,p),e(We,rt),e(rt,Xa),y(to,Xa,null),e(We,ml),e(We,Za),e(Za,fl),m(o,Ks,p),m(o,O,p),y(oo,O,null),e(O,ul),e(O,Qa),e(Qa,gl),e(O,_l),e(O,ao),e(ao,vl),e(ao,Qo),e(Qo,Tl),e(ao,wl),e(O,bl),e(O,so),e(so,yl),e(so,ro),e(ro,xl),e(so,$l),e(O,Fl),y(nt,O,null),e(O,El),e(O,G),y(no,G,null),e(G,Vl),e(G,Be),e(Be,kl),e(Be,Yo),e(Yo,Il),e(Be,jl),e(Be,Ya),e(Ya,Pl),e(Be,Ml),e(G,Cl),y(it,G,null),e(G,Al),e(G,es),e(es,zl),e(G,Nl),y(io,G,null),m(o,Gs,p),m(o,Ue,p),e(Ue,lt),e(lt,ts),y(lo,ts,null),e(Ue,Ll),e(Ue,os),e(os,ql),m(o,Xs,p),m(o,A,p),y(co,A,null),e(A,Dl),e(A,as),e(as,Ol),e(A,Sl),e(A,ho),e(ho,Wl),e(ho,ea),e(ea,Bl),e(ho,Ul),e(A,Rl),e(A,po),e(po,Hl),e(po,mo),e(mo,Jl),e(po,Kl),e(A,Gl),e(A,ss),e(ss,Xl),e(A,Zl),e(A,pe),e(pe,rs),e(rs,fo),e(fo,Ql),e(pe,Yl),e(pe,ns),e(ns,uo),e(uo,ed),e(pe,td),e(pe,is),e(is,go),e(go,od),e(pe,ad),e(pe,ls),e(ls,_o),e(_o,sd),e(A,rd),e(A,X),y(vo,X,null),e(X,nd),e(X,Re),e(Re,id),e(Re,ds),e(ds,ld),e(Re,dd),e(Re,cs),e(cs,cd),e(Re,hd),e(X,pd),y(dt,X,null),e(X,md),e(X,hs),e(hs,fd),e(X,ud),y(To,X,null),m(o,Zs,p),m(o,He,p),e(He,ct),e(ct,ps),y(wo,ps,null),e(He,gd),e(He,ms),e(ms,_d),m(o,Qs,p),m(o,z,p),y(bo,z,null),e(z,vd),e(z,fs),e(fs,Td),e(z,wd),e(z,yo),e(yo,bd),e(yo,ta),e(ta,yd),e(yo,xd),e(z,$d),e(z,xo),e(xo,Fd),e(xo,$o),e($o,Ed),e(xo,Vd),e(z,kd),e(z,us),e(us,Id),e(z,jd),e(z,me),e(me,gs),e(gs,Fo),e(Fo,Pd),e(me,Md),e(me,_s),e(_s,Eo),e(Eo,Cd),e(me,Ad),e(me,vs),e(vs,Vo),e(Vo,zd),e(me,Nd),e(me,Ts),e(Ts,ko),e(ko,Ld),e(z,qd),e(z,Z),y(Io,Z,null),e(Z,Dd),e(Z,Je),e(Je,Od),e(Je,ws),e(ws,Sd),e(Je,Wd),e(Je,bs),e(bs,Bd),e(Je,Ud),e(Z,Rd),y(ht,Z,null),e(Z,Hd),e(Z,ys),e(ys,Jd),e(Z,Kd),y(jo,Z,null),Ys=!0},p(o,[p]){const Po={};p&2&&(Po.$$scope={dirty:p,ctx:o}),k.$set(Po);const xs={};p&2&&(xs.$$scope={dirty:p,ctx:o}),Ze.$set(xs);const $s={};p&2&&($s.$$scope={dirty:p,ctx:o}),Ye.$set($s);const Fs={};p&2&&(Fs.$$scope={dirty:p,ctx:o}),tt.$set(Fs);const Mo={};p&2&&(Mo.$$scope={dirty:p,ctx:o}),at.$set(Mo);const Es={};p&2&&(Es.$$scope={dirty:p,ctx:o}),st.$set(Es);const Vs={};p&2&&(Vs.$$scope={dirty:p,ctx:o}),nt.$set(Vs);const ks={};p&2&&(ks.$$scope={dirty:p,ctx:o}),it.$set(ks);const Co={};p&2&&(Co.$$scope={dirty:p,ctx:o}),dt.$set(Co);const Is={};p&2&&(Is.$$scope={dirty:p,ctx:o}),ht.$set(Is)},i(o){Ys||(x(_.$$.fragment,o),x(k.$$.fragment,o),x(C.$$.fragment,o),x(kt.$$.fragment,o),x(It.$$.fragment,o),x(Pt.$$.fragment,o),x(Mt.$$.fragment,o),x(Ct.$$.fragment,o),x(zt.$$.fragment,o),x(Ze.$$.fragment,o),x(Nt.$$.fragment,o),x(Lt.$$.fragment,o),x(Ot.$$.fragment,o),x(Ye.$$.fragment,o),x(St.$$.fragment,o),x(Wt.$$.fragment,o),x(Bt.$$.fragment,o),x(Ht.$$.fragment,o),x(tt.$$.fragment,o),x(Jt.$$.fragment,o),x(Kt.$$.fragment,o),x(Gt.$$.fragment,o),x(at.$$.fragment,o),x(Yt.$$.fragment,o),x(st.$$.fragment,o),x(eo.$$.fragment,o),x(to.$$.fragment,o),x(oo.$$.fragment,o),x(nt.$$.fragment,o),x(no.$$.fragment,o),x(it.$$.fragment,o),x(io.$$.fragment,o),x(lo.$$.fragment,o),x(co.$$.fragment,o),x(vo.$$.fragment,o),x(dt.$$.fragment,o),x(To.$$.fragment,o),x(wo.$$.fragment,o),x(bo.$$.fragment,o),x(Io.$$.fragment,o),x(ht.$$.fragment,o),x(jo.$$.fragment,o),Ys=!0)},o(o){$(_.$$.fragment,o),$(k.$$.fragment,o),$(C.$$.fragment,o),$(kt.$$.fragment,o),$(It.$$.fragment,o),$(Pt.$$.fragment,o),$(Mt.$$.fragment,o),$(Ct.$$.fragment,o),$(zt.$$.fragment,o),$(Ze.$$.fragment,o),$(Nt.$$.fragment,o),$(Lt.$$.fragment,o),$(Ot.$$.fragment,o),$(Ye.$$.fragment,o),$(St.$$.fragment,o),$(Wt.$$.fragment,o),$(Bt.$$.fragment,o),$(Ht.$$.fragment,o),$(tt.$$.fragment,o),$(Jt.$$.fragment,o),$(Kt.$$.fragment,o),$(Gt.$$.fragment,o),$(at.$$.fragment,o),$(Yt.$$.fragment,o),$(st.$$.fragment,o),$(eo.$$.fragment,o),$(to.$$.fragment,o),$(oo.$$.fragment,o),$(nt.$$.fragment,o),$(no.$$.fragment,o),$(it.$$.fragment,o),$(io.$$.fragment,o),$(lo.$$.fragment,o),$(co.$$.fragment,o),$(vo.$$.fragment,o),$(dt.$$.fragment,o),$(To.$$.fragment,o),$(wo.$$.fragment,o),$(bo.$$.fragment,o),$(Io.$$.fragment,o),$(ht.$$.fragment,o),$(jo.$$.fragment,o),Ys=!1},d(o){t(h),o&&t(v),o&&t(f),F(_),o&&t(R),F(k,o),o&&t(re),o&&t(P),F(C),o&&t(j),o&&t(N),o&&t(fe),o&&t(zo),o&&t(js),o&&t(No),o&&t(Ps),o&&t(Lo),o&&t(Ms),o&&t(W),o&&t(Cs),o&&t(Do),o&&t(As),o&&t(ue),o&&t(zs),o&&t(ge),o&&t(Ns),o&&t(Ke),o&&t(Ls),o&&t(Me),F(kt),o&&t(qs),o&&t(B),F(It),F(Pt),o&&t(Ds),o&&t(ze),F(Mt),o&&t(Os),o&&t(ae),F(Ct),F(zt),F(Ze),o&&t(Ss),o&&t(Ne),F(Nt),o&&t(Ws),o&&t(he),F(Lt),F(Ot),F(Ye),F(St),o&&t(Bs),o&&t(qe),F(Wt),o&&t(Us),o&&t(se),F(Bt),F(Ht),F(tt),F(Jt),o&&t(Rs),o&&t(Oe),F(Kt),o&&t(Hs),o&&t(D),F(Gt),F(at),F(Yt),F(st),F(eo),o&&t(Js),o&&t(We),F(to),o&&t(Ks),o&&t(O),F(oo),F(nt),F(no),F(it),F(io),o&&t(Gs),o&&t(Ue),F(lo),o&&t(Xs),o&&t(A),F(co),F(vo),F(dt),F(To),o&&t(Zs),o&&t(He),F(wo),o&&t(Qs),o&&t(z),F(bo),F(Io),F(ht),F(jo)}}}const up={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.ViTFeatureExtractor",title:"ViTFeatureExtractor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function gp(I,h,v){let{fw:f}=h;return I.$$set=u=>{"fw"in u&&v(0,f=u.fw)},[f]}class xp extends ep{constructor(h){super();tp(this,h,gp,fp,op,{fw:0})}}export{xp as default,up as metadata};
