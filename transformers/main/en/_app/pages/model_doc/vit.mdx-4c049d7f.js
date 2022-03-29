import{S as mm,i as fm,s as um,e as a,k as d,w,t as r,M as gm,c as n,d as t,m as c,a as s,x as b,h as i,b as l,F as e,g as m,y,q as $,o as x,B as F,v as _m}from"../../chunks/vendor-6b77c823.js";import{T as _e}from"../../chunks/Tip-39098574.js";import{D as W}from"../../chunks/Docstring-abef54e3.js";import{C as Ft}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ve}from"../../chunks/IconCopyLink-7a11ce68.js";function vm(I){let h,T,f,g,v;return{c(){h=a("p"),T=r(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),f=a("a"),g=r("Github Issue"),v=r("."),this.h()},l(_){h=n(_,"P",{});var u=s(h);T=i(u,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),f=n(u,"A",{href:!0,rel:!0});var V=s(f);g=i(V,"Github Issue"),V.forEach(t),v=i(u,"."),u.forEach(t),this.h()},h(){l(f,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),l(f,"rel","nofollow")},m(_,u){m(_,h,u),e(h,T),e(h,f),e(f,g),e(h,v)},d(_){_&&t(h)}}}function Tm(I){let h,T;return{c(){h=a("p"),T=r(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(f){h=n(f,"P",{});var g=s(h);T=i(g,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),g.forEach(t)},m(f,g){m(f,h,g),e(h,T)},d(f){f&&t(h)}}}function wm(I){let h,T,f,g,v;return{c(){h=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var u=s(h);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(u,"CODE",{});var V=s(f);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,h,u),e(h,T),e(h,f),e(f,g),e(h,v)},d(_){_&&t(h)}}}function bm(I){let h,T,f,g,v;return{c(){h=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var u=s(h);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(u,"CODE",{});var V=s(f);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,h,u),e(h,T),e(h,f),e(f,g),e(h,v)},d(_){_&&t(h)}}}function ym(I){let h,T,f,g,v;return{c(){h=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var u=s(h);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(u,"CODE",{});var V=s(f);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,h,u),e(h,T),e(h,f),e(f,g),e(h,v)},d(_){_&&t(h)}}}function $m(I){let h,T,f,g,v,_,u,V,he,R,k,ie,j,B,oe,C,pe,ae;return{c(){h=a("p"),T=r("TF 2.0 models accepts two formats as inputs:"),f=d(),g=a("ul"),v=a("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),u=d(),V=a("li"),he=r("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),ie=r("This second option is useful when using "),j=a("code"),B=r("tf.keras.Model.fit"),oe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),C=a("code"),pe=r("model(inputs)"),ae=r(".")},l(E){h=n(E,"P",{});var M=s(h);T=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),f=c(E),g=n(E,"UL",{});var z=s(g);v=n(z,"LI",{});var Me=s(v);_=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),u=c(z),V=n(z,"LI",{});var ne=s(V);he=i(ne,"having all inputs as a list, tuple or dict in the first positional arguments."),ne.forEach(t),z.forEach(t),R=c(E),k=n(E,"P",{});var L=s(k);ie=i(L,"This second option is useful when using "),j=n(L,"CODE",{});var je=s(j);B=i(je,"tf.keras.Model.fit"),je.forEach(t),oe=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),C=n(L,"CODE",{});var Te=s(C);pe=i(Te,"model(inputs)"),Te.forEach(t),ae=i(L,"."),L.forEach(t)},m(E,M){m(E,h,M),e(h,T),m(E,f,M),m(E,g,M),e(g,v),e(v,_),e(g,u),e(g,V),e(V,he),m(E,R,M),m(E,k,M),e(k,ie),e(k,j),e(j,B),e(k,oe),e(k,C),e(C,pe),e(k,ae)},d(E){E&&t(h),E&&t(f),E&&t(g),E&&t(R),E&&t(k)}}}function xm(I){let h,T,f,g,v;return{c(){h=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var u=s(h);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(u,"CODE",{});var V=s(f);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,h,u),e(h,T),e(h,f),e(f,g),e(h,v)},d(_){_&&t(h)}}}function Fm(I){let h,T,f,g,v,_,u,V,he,R,k,ie,j,B,oe,C,pe,ae;return{c(){h=a("p"),T=r("TF 2.0 models accepts two formats as inputs:"),f=d(),g=a("ul"),v=a("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),u=d(),V=a("li"),he=r("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),ie=r("This second option is useful when using "),j=a("code"),B=r("tf.keras.Model.fit"),oe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),C=a("code"),pe=r("model(inputs)"),ae=r(".")},l(E){h=n(E,"P",{});var M=s(h);T=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),f=c(E),g=n(E,"UL",{});var z=s(g);v=n(z,"LI",{});var Me=s(v);_=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),u=c(z),V=n(z,"LI",{});var ne=s(V);he=i(ne,"having all inputs as a list, tuple or dict in the first positional arguments."),ne.forEach(t),z.forEach(t),R=c(E),k=n(E,"P",{});var L=s(k);ie=i(L,"This second option is useful when using "),j=n(L,"CODE",{});var je=s(j);B=i(je,"tf.keras.Model.fit"),je.forEach(t),oe=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),C=n(L,"CODE",{});var Te=s(C);pe=i(Te,"model(inputs)"),Te.forEach(t),ae=i(L,"."),L.forEach(t)},m(E,M){m(E,h,M),e(h,T),m(E,f,M),m(E,g,M),e(g,v),e(v,_),e(g,u),e(g,V),e(V,he),m(E,R,M),m(E,k,M),e(k,ie),e(k,j),e(j,B),e(k,oe),e(k,C),e(C,pe),e(k,ae)},d(E){E&&t(h),E&&t(f),E&&t(g),E&&t(R),E&&t(k)}}}function Vm(I){let h,T,f,g,v;return{c(){h=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var u=s(h);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(u,"CODE",{});var V=s(f);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,h,u),e(h,T),e(h,f),e(f,g),e(h,v)},d(_){_&&t(h)}}}function Em(I){let h,T,f,g,v;return{c(){h=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var u=s(h);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(u,"CODE",{});var V=s(f);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,h,u),e(h,T),e(h,f),e(f,g),e(h,v)},d(_){_&&t(h)}}}function km(I){let h,T,f,g,v;return{c(){h=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var u=s(h);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(u,"CODE",{});var V=s(f);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,h,u),e(h,T),e(h,f),e(f,g),e(h,v)},d(_){_&&t(h)}}}function Im(I){let h,T,f,g,v,_,u,V,he,R,k,ie,j,B,oe,C,pe,ae,E,M,z,Me,ne,L,je,Te,Xo,tr,ss,Zo,Da,or,rs,Qo,ar,is,N,Vt,nr,Et,sr,rr,ir,Oa,lr,dr,kt,cr,Yo,hr,pr,mr,Pe,fr,Sa,ur,gr,It,_r,vr,Tr,Ce,wr,Mt,br,yr,jt,$r,xr,Fr,qe,Vr,Pt,Er,kr,Ct,Ir,Mr,jr,Wa,Pr,ls,ea,Cr,ds,le,Ba,P,ta,qr,Ar,oa,zr,Nr,aa,Lr,Dr,Ua,Or,Sr,Ra,Wr,Br,Ha,Ur,Rr,Ja,Hr,Jr,na,Kr,Gr,Xr,Ka,sa,ra,Zr,Qr,Yr,Ga,qt,ei,At,ti,oi,ai,Xa,ia,la,ni,si,cs,we,ri,zt,ii,li,Nt,di,ci,hs,et,hi,Lt,pi,mi,ps,Ae,tt,Za,Dt,fi,Qa,ui,ms,U,Ot,gi,ze,_i,da,vi,Ti,St,wi,bi,yi,Ne,$i,ca,xi,Fi,ha,Vi,Ei,ki,Ya,Ii,Mi,Wt,fs,Le,ot,en,Bt,ji,tn,Pi,us,se,Ut,Ci,on,qi,Ai,Rt,zi,pa,Ni,Li,Di,be,Ht,Oi,an,Si,Wi,at,gs,De,nt,nn,Jt,Bi,sn,Ui,_s,me,Kt,Ri,Gt,Hi,Xt,Ji,Ki,Gi,H,Zt,Xi,Oe,Zi,ma,Qi,Yi,rn,el,tl,ol,st,al,ln,nl,sl,Qt,vs,Se,rt,dn,Yt,rl,cn,il,Ts,fe,eo,ll,We,dl,hn,cl,hl,to,pl,ml,fl,J,oo,ul,Be,gl,fa,_l,vl,pn,Tl,wl,bl,it,yl,mn,$l,xl,ao,ws,Ue,lt,fn,no,Fl,un,Vl,bs,re,so,El,gn,kl,Il,ro,Ml,io,jl,Pl,Cl,K,lo,ql,Re,Al,ua,zl,Nl,_n,Ll,Dl,Ol,dt,Sl,vn,Wl,Bl,co,ys,He,ct,Tn,ho,Ul,wn,Rl,$s,D,po,Hl,bn,Jl,Kl,mo,Gl,ga,Xl,Zl,Ql,fo,Yl,uo,ed,td,od,ht,ad,G,go,nd,Je,sd,_a,rd,id,yn,ld,dd,cd,pt,hd,$n,pd,md,_o,xs,Ke,mt,xn,vo,fd,Fn,ud,Fs,O,To,gd,Vn,_d,vd,wo,Td,va,wd,bd,yd,bo,$d,yo,xd,Fd,Vd,ft,Ed,X,$o,kd,Ge,Id,Ta,Md,jd,En,Pd,Cd,qd,ut,Ad,kn,zd,Nd,xo,Vs,Xe,gt,In,Fo,Ld,Mn,Dd,Es,q,Vo,Od,jn,Sd,Wd,Eo,Bd,wa,Ud,Rd,Hd,ko,Jd,Io,Kd,Gd,Xd,Pn,Zd,Qd,ue,Cn,Mo,Yd,ec,qn,jo,tc,oc,An,Po,ac,nc,zn,Co,sc,rc,Z,qo,ic,Ze,lc,Nn,dc,cc,Ln,hc,pc,mc,_t,fc,Dn,uc,gc,Ao,ks,Qe,vt,On,zo,_c,Sn,vc,Is,A,No,Tc,Wn,wc,bc,Lo,yc,ba,$c,xc,Fc,Do,Vc,Oo,Ec,kc,Ic,Bn,Mc,jc,ge,Un,So,Pc,Cc,Rn,Wo,qc,Ac,Hn,Bo,zc,Nc,Jn,Uo,Lc,Dc,Q,Ro,Oc,Ye,Sc,Kn,Wc,Bc,Gn,Uc,Rc,Hc,Tt,Jc,Xn,Kc,Gc,Ho,Ms;return _=new ve({}),k=new _e({props:{$$slots:{default:[vm]},$$scope:{ctx:I}}}),C=new ve({}),Dt=new ve({}),Ot=new W({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/configuration_vit.py#L35",parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ViTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ViTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ViTConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ViTConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ViTConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ViTConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ViTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ViTConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ViTConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>224</code>) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.ViTConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>16</code>) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.ViTConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to <code>3</code>) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.ViTConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.ViTConfig.encoder_stride",description:`<strong>encoder_stride</strong> (<code>int</code>, <code>optional</code>, defaults to 16) &#x2014;
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}]}}),Wt=new Ft({props:{code:`from transformers import ViTModel, ViTConfig

# Initializing a ViT vit-base-patch16-224 style configuration
configuration = ViTConfig()

# Initializing a model from the vit-base-patch16-224 style configuration
model = ViTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTModel, ViTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ViTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Bt=new ve({}),Ut=new W({props:{name:"class transformers.ViTFeatureExtractor",anchor:"transformers.ViTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = 2"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/feature_extraction_vit.py#L36",parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}]}}),Ht=new W({props:{name:"__call__",anchor:"transformers.ViTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/feature_extraction_vit.py#L82",parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ViTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),at=new _e({props:{warning:!0,$$slots:{default:[Tm]},$$scope:{ctx:I}}}),Jt=new ve({}),Kt=new W({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L511",parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Zt=new W({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L536",parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig"
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
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),st=new _e({props:{$$slots:{default:[wm]},$$scope:{ctx:I}}}),Qt=new Ft({props:{code:`from transformers import ViTFeatureExtractor, ViTModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = ViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),Yt=new ve({}),eo=new W({props:{name:"class transformers.ViTForMaskedImageModeling",anchor:"transformers.ViTForMaskedImageModeling",parameters:[{name:"config",val:": ViTConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L616",parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),oo=new W({props:{name:"forward",anchor:"transformers.ViTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L630",parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTForMaskedImageModeling.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),it=new _e({props:{$$slots:{default:[bm]},$$scope:{ctx:I}}}),ao=new Ft({props:{code:`from transformers import ViTFeatureExtractor, ViTForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = ViTForMaskedImageModeling.from_pretrained("google/vit-base-patch16-224-in21k")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),no=new ve({}),so=new W({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L726",parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new W({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L739",parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dt=new _e({props:{$$slots:{default:[ym]},$$scope:{ctx:I}}}),co=new Ft({props:{code:`from transformers import ViTFeatureExtractor, ViTForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = ViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
Egyptian cat`}}),ho=new ve({}),po=new W({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L641",parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ht=new _e({props:{$$slots:{default:[$m]},$$scope:{ctx:I}}}),go=new W({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L647",parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pt=new _e({props:{$$slots:{default:[xm]},$$scope:{ctx:I}}}),_o=new Ft({props:{code:`from transformers import ViTFeatureExtractor, TFViTModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = TFViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(images=image, return_tensors="tf")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),vo=new ve({}),To=new W({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L733",parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ft=new _e({props:{$$slots:{default:[Fm]},$$scope:{ctx:I}}}),$o=new W({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L747",parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTForImageClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFViTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ut=new _e({props:{$$slots:{default:[Vm]},$$scope:{ctx:I}}}),xo=new Ft({props:{code:`from transformers import ViTFeatureExtractor, TFViTForImageClassification
import tensorflow as tf
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = TFViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(images=image, return_tensors="tf")
outputs = model(**inputs)
logits = outputs.logits
# model predicts one of the 1000 ImageNet classes
predicted_class_idx = tf.math.argmax(logits, axis=-1)[0]
print("Predicted class:", model.config.id2label[int(predicted_class_idx)])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[<span class="hljs-built_in">int</span>(predicted_class_idx)])`}}),Fo=new ve({}),Vo=new W({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L510",parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),qo=new W({props:{name:"__call__",anchor:"transformers.FlaxViTModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L425",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.vit.configuration_vit.ViTConfig'&gt;</code>) and inputs.</p>
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
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_t=new _e({props:{$$slots:{default:[Em]},$$scope:{ctx:I}}}),Ao=new Ft({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = FlaxViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),zo=new ve({}),No=new W({props:{name:"class transformers.FlaxViTForImageClassification",anchor:"transformers.FlaxViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L591",parametersDescription:[{anchor:"transformers.FlaxViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ro=new W({props:{name:"__call__",anchor:"transformers.FlaxViTForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L425",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.vit.configuration_vit.ViTConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tt=new _e({props:{$$slots:{default:[km]},$$scope:{ctx:I}}}),Ho=new Ft({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
from PIL import Image
import jax
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = FlaxViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
logits = outputs.logits

# model predicts one of the 1000 ImageNet classes
predicted_class_idx = jax.numpy.argmax(logits, axis=-1)
print("Predicted class:", model.config.id2label[predicted_class_idx.item()])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = jax.numpy.argmax(logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){h=a("meta"),T=d(),f=a("h1"),g=a("a"),v=a("span"),w(_.$$.fragment),u=d(),V=a("span"),he=r("Vision Transformer (ViT)"),R=d(),w(k.$$.fragment),ie=d(),j=a("h2"),B=a("a"),oe=a("span"),w(C.$$.fragment),pe=d(),ae=a("span"),E=r("Overview"),M=d(),z=a("p"),Me=r("The Vision Transformer (ViT) model was proposed in "),ne=a("a"),L=r(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),je=r(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Te=d(),Xo=a("p"),tr=r("The abstract from the paper is the following:"),ss=d(),Zo=a("p"),Da=a("em"),or=r(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),rs=d(),Qo=a("p"),ar=r("Tips:"),is=d(),N=a("ul"),Vt=a("li"),nr=r("Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),Et=a("a"),sr=r("here"),rr=r("."),ir=d(),Oa=a("li"),lr=r(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),dr=d(),kt=a("li"),cr=r(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Yo=a("a"),hr=r("ViTFeatureExtractor"),pr=r(" to resize (or rescale) and normalize images for the model."),mr=d(),Pe=a("li"),fr=r(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Sa=a("code"),ur=r("google/vit-base-patch16-224"),gr=r(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),It=a("a"),_r=r("hub"),vr=r("."),Tr=d(),Ce=a("li"),wr=r("The available checkpoints are either (1) pre-trained on "),Mt=a("a"),br=r("ImageNet-21k"),yr=r(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),jt=a("a"),$r=r("ImageNet"),xr=r(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Fr=d(),qe=a("li"),Vr=r(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Pt=a("a"),Er=r("(Touvron et al., 2019)"),kr=r(", "),Ct=a("a"),Ir=r(`(Kolesnikov
et al., 2020)`),Mr=r(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),jr=d(),Wa=a("li"),Pr=r(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),ls=d(),ea=a("p"),Cr=r("Following the original Vision Transformer, some follow-up works have been made:"),ds=d(),le=a("ul"),Ba=a("li"),P=a("p"),ta=a("a"),qr=r("DeiT"),Ar=r(` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),oa=a("a"),zr=r("ViTModel"),Nr=r(` or
`),aa=a("a"),Lr=r("ViTForImageClassification"),Dr=r(". There are 4 variants available (in 3 different sizes): "),Ua=a("em"),Or=r("facebook/deit-tiny-patch16-224"),Sr=r(`,
`),Ra=a("em"),Wr=r("facebook/deit-small-patch16-224"),Br=r(", "),Ha=a("em"),Ur=r("facebook/deit-base-patch16-224"),Rr=r(" and "),Ja=a("em"),Hr=r("facebook/deit-base-patch16-384"),Jr=r(`. Note that one should
use `),na=a("a"),Kr=r("DeiTFeatureExtractor"),Gr=r(" in order to prepare images for the model."),Xr=d(),Ka=a("li"),sa=a("p"),ra=a("a"),Zr=r("BEiT"),Qr=r(` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Yr=d(),Ga=a("li"),qt=a("p"),ei=r(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),At=a("a"),ti=r("hub"),oi=r("."),ai=d(),Xa=a("li"),ia=a("p"),la=a("a"),ni=r("MAE"),si=r(` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),cs=d(),we=a("p"),ri=r("This model was contributed by "),zt=a("a"),ii=r("nielsr"),li=r(`. The original code (written in JAX) can be
found `),Nt=a("a"),di=r("here"),ci=r("."),hs=d(),et=a("p"),hi=r("Note that we converted the weights from Ross Wightman\u2019s "),Lt=a("a"),pi=r("timm library"),mi=r(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),ps=d(),Ae=a("h2"),tt=a("a"),Za=a("span"),w(Dt.$$.fragment),fi=d(),Qa=a("span"),ui=r("ViTConfig"),ms=d(),U=a("div"),w(Ot.$$.fragment),gi=d(),ze=a("p"),_i=r("This is the configuration class to store the configuration of a "),da=a("a"),vi=r("ViTModel"),Ti=r(`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),St=a("a"),wi=r("google/vit-base-patch16-224"),bi=r(" architecture."),yi=d(),Ne=a("p"),$i=r("Configuration objects inherit from "),ca=a("a"),xi=r("PretrainedConfig"),Fi=r(` and can be used to control the model outputs. Read the
documentation from `),ha=a("a"),Vi=r("PretrainedConfig"),Ei=r(" for more information."),ki=d(),Ya=a("p"),Ii=r("Example:"),Mi=d(),w(Wt.$$.fragment),fs=d(),Le=a("h2"),ot=a("a"),en=a("span"),w(Bt.$$.fragment),ji=d(),tn=a("span"),Pi=r("ViTFeatureExtractor"),us=d(),se=a("div"),w(Ut.$$.fragment),Ci=d(),on=a("p"),qi=r("Constructs a ViT feature extractor."),Ai=d(),Rt=a("p"),zi=r("This feature extractor inherits from "),pa=a("a"),Ni=r("FeatureExtractionMixin"),Li=r(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Di=d(),be=a("div"),w(Ht.$$.fragment),Oi=d(),an=a("p"),Si=r("Main method to prepare for the model one or several image(s)."),Wi=d(),w(at.$$.fragment),gs=d(),De=a("h2"),nt=a("a"),nn=a("span"),w(Jt.$$.fragment),Bi=d(),sn=a("span"),Ui=r("ViTModel"),_s=d(),me=a("div"),w(Kt.$$.fragment),Ri=d(),Gt=a("p"),Hi=r(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Xt=a("a"),Ji=r("torch.nn.Module"),Ki=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gi=d(),H=a("div"),w(Zt.$$.fragment),Xi=d(),Oe=a("p"),Zi=r("The "),ma=a("a"),Qi=r("ViTModel"),Yi=r(" forward method, overrides the "),rn=a("code"),el=r("__call__"),tl=r(" special method."),ol=d(),w(st.$$.fragment),al=d(),ln=a("p"),nl=r("Example:"),sl=d(),w(Qt.$$.fragment),vs=d(),Se=a("h2"),rt=a("a"),dn=a("span"),w(Yt.$$.fragment),rl=d(),cn=a("span"),il=r("ViTForMaskedImageModeling"),Ts=d(),fe=a("div"),w(eo.$$.fragment),ll=d(),We=a("p"),dl=r("ViT Model with a decoder on top for masked image modeling, as proposed in "),hn=a("code"),cl=r("SimMIM <https://arxiv.org/abs/2111.09886>"),hl=r(`__.
This model is a PyTorch `),to=a("a"),pl=r("torch.nn.Module"),ml=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fl=d(),J=a("div"),w(oo.$$.fragment),ul=d(),Be=a("p"),gl=r("The "),fa=a("a"),_l=r("ViTForMaskedImageModeling"),vl=r(" forward method, overrides the "),pn=a("code"),Tl=r("__call__"),wl=r(" special method."),bl=d(),w(it.$$.fragment),yl=d(),mn=a("p"),$l=r("Examples:"),xl=d(),w(ao.$$.fragment),ws=d(),Ue=a("h2"),lt=a("a"),fn=a("span"),w(no.$$.fragment),Fl=d(),un=a("span"),Vl=r("ViTForImageClassification"),bs=d(),re=a("div"),w(so.$$.fragment),El=d(),gn=a("p"),kl=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Il=d(),ro=a("p"),Ml=r("This model is a PyTorch "),io=a("a"),jl=r("torch.nn.Module"),Pl=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cl=d(),K=a("div"),w(lo.$$.fragment),ql=d(),Re=a("p"),Al=r("The "),ua=a("a"),zl=r("ViTForImageClassification"),Nl=r(" forward method, overrides the "),_n=a("code"),Ll=r("__call__"),Dl=r(" special method."),Ol=d(),w(dt.$$.fragment),Sl=d(),vn=a("p"),Wl=r("Example:"),Bl=d(),w(co.$$.fragment),ys=d(),He=a("h2"),ct=a("a"),Tn=a("span"),w(ho.$$.fragment),Ul=d(),wn=a("span"),Rl=r("TFViTModel"),$s=d(),D=a("div"),w(po.$$.fragment),Hl=d(),bn=a("p"),Jl=r("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Kl=d(),mo=a("p"),Gl=r("This model inherits from "),ga=a("a"),Xl=r("TFPreTrainedModel"),Zl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ql=d(),fo=a("p"),Yl=r("This model is also a "),uo=a("a"),ed=r("tf.keras.Model"),td=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),od=d(),w(ht.$$.fragment),ad=d(),G=a("div"),w(go.$$.fragment),nd=d(),Je=a("p"),sd=r("The "),_a=a("a"),rd=r("TFViTModel"),id=r(" forward method, overrides the "),yn=a("code"),ld=r("__call__"),dd=r(" special method."),cd=d(),w(pt.$$.fragment),hd=d(),$n=a("p"),pd=r("Examples:"),md=d(),w(_o.$$.fragment),xs=d(),Ke=a("h2"),mt=a("a"),xn=a("span"),w(vo.$$.fragment),fd=d(),Fn=a("span"),ud=r("TFViTForImageClassification"),Fs=d(),O=a("div"),w(To.$$.fragment),gd=d(),Vn=a("p"),_d=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),vd=d(),wo=a("p"),Td=r("This model inherits from "),va=a("a"),wd=r("TFPreTrainedModel"),bd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yd=d(),bo=a("p"),$d=r("This model is also a "),yo=a("a"),xd=r("tf.keras.Model"),Fd=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vd=d(),w(ft.$$.fragment),Ed=d(),X=a("div"),w($o.$$.fragment),kd=d(),Ge=a("p"),Id=r("The "),Ta=a("a"),Md=r("TFViTForImageClassification"),jd=r(" forward method, overrides the "),En=a("code"),Pd=r("__call__"),Cd=r(" special method."),qd=d(),w(ut.$$.fragment),Ad=d(),kn=a("p"),zd=r("Examples:"),Nd=d(),w(xo.$$.fragment),Vs=d(),Xe=a("h2"),gt=a("a"),In=a("span"),w(Fo.$$.fragment),Ld=d(),Mn=a("span"),Dd=r("FlaxVitModel"),Es=d(),q=a("div"),w(Vo.$$.fragment),Od=d(),jn=a("p"),Sd=r("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Wd=d(),Eo=a("p"),Bd=r("This model inherits from "),wa=a("a"),Ud=r("FlaxPreTrainedModel"),Rd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Hd=d(),ko=a("p"),Jd=r("This model is also a Flax Linen "),Io=a("a"),Kd=r("flax.linen.Module"),Gd=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xd=d(),Pn=a("p"),Zd=r("Finally, this model supports inherent JAX features such as:"),Qd=d(),ue=a("ul"),Cn=a("li"),Mo=a("a"),Yd=r("Just-In-Time (JIT) compilation"),ec=d(),qn=a("li"),jo=a("a"),tc=r("Automatic Differentiation"),oc=d(),An=a("li"),Po=a("a"),ac=r("Vectorization"),nc=d(),zn=a("li"),Co=a("a"),sc=r("Parallelization"),rc=d(),Z=a("div"),w(qo.$$.fragment),ic=d(),Ze=a("p"),lc=r("The "),Nn=a("code"),dc=r("FlaxViTPreTrainedModel"),cc=r("forward method, overrides the "),Ln=a("code"),hc=r("__call__"),pc=r(" special method."),mc=d(),w(_t.$$.fragment),fc=d(),Dn=a("p"),uc=r("Examples:"),gc=d(),w(Ao.$$.fragment),ks=d(),Qe=a("h2"),vt=a("a"),On=a("span"),w(zo.$$.fragment),_c=d(),Sn=a("span"),vc=r("FlaxViTForImageClassification"),Is=d(),A=a("div"),w(No.$$.fragment),Tc=d(),Wn=a("p"),wc=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),bc=d(),Lo=a("p"),yc=r("This model inherits from "),ba=a("a"),$c=r("FlaxPreTrainedModel"),xc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fc=d(),Do=a("p"),Vc=r("This model is also a Flax Linen "),Oo=a("a"),Ec=r("flax.linen.Module"),kc=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ic=d(),Bn=a("p"),Mc=r("Finally, this model supports inherent JAX features such as:"),jc=d(),ge=a("ul"),Un=a("li"),So=a("a"),Pc=r("Just-In-Time (JIT) compilation"),Cc=d(),Rn=a("li"),Wo=a("a"),qc=r("Automatic Differentiation"),Ac=d(),Hn=a("li"),Bo=a("a"),zc=r("Vectorization"),Nc=d(),Jn=a("li"),Uo=a("a"),Lc=r("Parallelization"),Dc=d(),Q=a("div"),w(Ro.$$.fragment),Oc=d(),Ye=a("p"),Sc=r("The "),Kn=a("code"),Wc=r("FlaxViTPreTrainedModel"),Bc=r("forward method, overrides the "),Gn=a("code"),Uc=r("__call__"),Rc=r(" special method."),Hc=d(),w(Tt.$$.fragment),Jc=d(),Xn=a("p"),Kc=r("Example:"),Gc=d(),w(Ho.$$.fragment),this.h()},l(o){const p=gm('[data-svelte="svelte-1phssyn"]',document.head);h=n(p,"META",{name:!0,content:!0}),p.forEach(t),T=c(o),f=n(o,"H1",{class:!0});var Jo=s(f);g=n(Jo,"A",{id:!0,class:!0,href:!0});var Zn=s(g);v=n(Zn,"SPAN",{});var Qn=s(v);b(_.$$.fragment,Qn),Qn.forEach(t),Zn.forEach(t),u=c(Jo),V=n(Jo,"SPAN",{});var Yn=s(V);he=i(Yn,"Vision Transformer (ViT)"),Yn.forEach(t),Jo.forEach(t),R=c(o),b(k.$$.fragment,o),ie=c(o),j=n(o,"H2",{class:!0});var Ko=s(j);B=n(Ko,"A",{id:!0,class:!0,href:!0});var es=s(B);oe=n(es,"SPAN",{});var ts=s(oe);b(C.$$.fragment,ts),ts.forEach(t),es.forEach(t),pe=c(Ko),ae=n(Ko,"SPAN",{});var os=s(ae);E=i(os,"Overview"),os.forEach(t),Ko.forEach(t),M=c(o),z=n(o,"P",{});var Go=s(z);Me=i(Go,"The Vision Transformer (ViT) model was proposed in "),ne=n(Go,"A",{href:!0,rel:!0});var as=s(ne);L=i(as,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),as.forEach(t),je=i(Go,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Go.forEach(t),Te=c(o),Xo=n(o,"P",{});var ns=s(Xo);tr=i(ns,"The abstract from the paper is the following:"),ns.forEach(t),ss=c(o),Zo=n(o,"P",{});var Qc=s(Zo);Da=n(Qc,"EM",{});var Yc=s(Da);or=i(Yc,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),Yc.forEach(t),Qc.forEach(t),rs=c(o),Qo=n(o,"P",{});var eh=s(Qo);ar=i(eh,"Tips:"),eh.forEach(t),is=c(o),N=n(o,"UL",{});var Y=s(N);Vt=n(Y,"LI",{});var js=s(Vt);nr=i(js,"Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),Et=n(js,"A",{href:!0,rel:!0});var th=s(Et);sr=i(th,"here"),th.forEach(t),rr=i(js,"."),js.forEach(t),ir=c(Y),Oa=n(Y,"LI",{});var oh=s(Oa);lr=i(oh,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),oh.forEach(t),dr=c(Y),kt=n(Y,"LI",{});var Ps=s(kt);cr=i(Ps,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Yo=n(Ps,"A",{href:!0});var ah=s(Yo);hr=i(ah,"ViTFeatureExtractor"),ah.forEach(t),pr=i(Ps," to resize (or rescale) and normalize images for the model."),Ps.forEach(t),mr=c(Y),Pe=n(Y,"LI",{});var ya=s(Pe);fr=i(ya,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Sa=n(ya,"CODE",{});var nh=s(Sa);ur=i(nh,"google/vit-base-patch16-224"),nh.forEach(t),gr=i(ya,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),It=n(ya,"A",{href:!0,rel:!0});var sh=s(It);_r=i(sh,"hub"),sh.forEach(t),vr=i(ya,"."),ya.forEach(t),Tr=c(Y),Ce=n(Y,"LI",{});var $a=s(Ce);wr=i($a,"The available checkpoints are either (1) pre-trained on "),Mt=n($a,"A",{href:!0,rel:!0});var rh=s(Mt);br=i(rh,"ImageNet-21k"),rh.forEach(t),yr=i($a,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),jt=n($a,"A",{href:!0,rel:!0});var ih=s(jt);$r=i(ih,"ImageNet"),ih.forEach(t),xr=i($a,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),$a.forEach(t),Fr=c(Y),qe=n(Y,"LI",{});var xa=s(qe);Vr=i(xa,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Pt=n(xa,"A",{href:!0,rel:!0});var lh=s(Pt);Er=i(lh,"(Touvron et al., 2019)"),lh.forEach(t),kr=i(xa,", "),Ct=n(xa,"A",{href:!0,rel:!0});var dh=s(Ct);Ir=i(dh,`(Kolesnikov
et al., 2020)`),dh.forEach(t),Mr=i(xa,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),xa.forEach(t),jr=c(Y),Wa=n(Y,"LI",{});var ch=s(Wa);Pr=i(ch,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),ch.forEach(t),Y.forEach(t),ls=c(o),ea=n(o,"P",{});var hh=s(ea);Cr=i(hh,"Following the original Vision Transformer, some follow-up works have been made:"),hh.forEach(t),ds=c(o),le=n(o,"UL",{});var wt=s(le);Ba=n(wt,"LI",{});var ph=s(Ba);P=n(ph,"P",{});var S=s(P);ta=n(S,"A",{href:!0});var mh=s(ta);qr=i(mh,"DeiT"),mh.forEach(t),Ar=i(S,` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),oa=n(S,"A",{href:!0});var fh=s(oa);zr=i(fh,"ViTModel"),fh.forEach(t),Nr=i(S,` or
`),aa=n(S,"A",{href:!0});var uh=s(aa);Lr=i(uh,"ViTForImageClassification"),uh.forEach(t),Dr=i(S,". There are 4 variants available (in 3 different sizes): "),Ua=n(S,"EM",{});var gh=s(Ua);Or=i(gh,"facebook/deit-tiny-patch16-224"),gh.forEach(t),Sr=i(S,`,
`),Ra=n(S,"EM",{});var _h=s(Ra);Wr=i(_h,"facebook/deit-small-patch16-224"),_h.forEach(t),Br=i(S,", "),Ha=n(S,"EM",{});var vh=s(Ha);Ur=i(vh,"facebook/deit-base-patch16-224"),vh.forEach(t),Rr=i(S," and "),Ja=n(S,"EM",{});var Th=s(Ja);Hr=i(Th,"facebook/deit-base-patch16-384"),Th.forEach(t),Jr=i(S,`. Note that one should
use `),na=n(S,"A",{href:!0});var wh=s(na);Kr=i(wh,"DeiTFeatureExtractor"),wh.forEach(t),Gr=i(S," in order to prepare images for the model."),S.forEach(t),ph.forEach(t),Xr=c(wt),Ka=n(wt,"LI",{});var bh=s(Ka);sa=n(bh,"P",{});var Xc=s(sa);ra=n(Xc,"A",{href:!0});var yh=s(ra);Zr=i(yh,"BEiT"),yh.forEach(t),Qr=i(Xc,` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Xc.forEach(t),bh.forEach(t),Yr=c(wt),Ga=n(wt,"LI",{});var $h=s(Ga);qt=n($h,"P",{});var Cs=s(qt);ei=i(Cs,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),At=n(Cs,"A",{href:!0,rel:!0});var xh=s(At);ti=i(xh,"hub"),xh.forEach(t),oi=i(Cs,"."),Cs.forEach(t),$h.forEach(t),ai=c(wt),Xa=n(wt,"LI",{});var Fh=s(Xa);ia=n(Fh,"P",{});var Zc=s(ia);la=n(Zc,"A",{href:!0});var Vh=s(la);ni=i(Vh,"MAE"),Vh.forEach(t),si=i(Zc,` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Zc.forEach(t),Fh.forEach(t),wt.forEach(t),cs=c(o),we=n(o,"P",{});var Fa=s(we);ri=i(Fa,"This model was contributed by "),zt=n(Fa,"A",{href:!0,rel:!0});var Eh=s(zt);ii=i(Eh,"nielsr"),Eh.forEach(t),li=i(Fa,`. The original code (written in JAX) can be
found `),Nt=n(Fa,"A",{href:!0,rel:!0});var kh=s(Nt);di=i(kh,"here"),kh.forEach(t),ci=i(Fa,"."),Fa.forEach(t),hs=c(o),et=n(o,"P",{});var qs=s(et);hi=i(qs,"Note that we converted the weights from Ross Wightman\u2019s "),Lt=n(qs,"A",{href:!0,rel:!0});var Ih=s(Lt);pi=i(Ih,"timm library"),Ih.forEach(t),mi=i(qs,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),qs.forEach(t),ps=c(o),Ae=n(o,"H2",{class:!0});var As=s(Ae);tt=n(As,"A",{id:!0,class:!0,href:!0});var Mh=s(tt);Za=n(Mh,"SPAN",{});var jh=s(Za);b(Dt.$$.fragment,jh),jh.forEach(t),Mh.forEach(t),fi=c(As),Qa=n(As,"SPAN",{});var Ph=s(Qa);ui=i(Ph,"ViTConfig"),Ph.forEach(t),As.forEach(t),ms=c(o),U=n(o,"DIV",{class:!0});var ye=s(U);b(Ot.$$.fragment,ye),gi=c(ye),ze=n(ye,"P",{});var Va=s(ze);_i=i(Va,"This is the configuration class to store the configuration of a "),da=n(Va,"A",{href:!0});var Ch=s(da);vi=i(Ch,"ViTModel"),Ch.forEach(t),Ti=i(Va,`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),St=n(Va,"A",{href:!0,rel:!0});var qh=s(St);wi=i(qh,"google/vit-base-patch16-224"),qh.forEach(t),bi=i(Va," architecture."),Va.forEach(t),yi=c(ye),Ne=n(ye,"P",{});var Ea=s(Ne);$i=i(Ea,"Configuration objects inherit from "),ca=n(Ea,"A",{href:!0});var Ah=s(ca);xi=i(Ah,"PretrainedConfig"),Ah.forEach(t),Fi=i(Ea,` and can be used to control the model outputs. Read the
documentation from `),ha=n(Ea,"A",{href:!0});var zh=s(ha);Vi=i(zh,"PretrainedConfig"),zh.forEach(t),Ei=i(Ea," for more information."),Ea.forEach(t),ki=c(ye),Ya=n(ye,"P",{});var Nh=s(Ya);Ii=i(Nh,"Example:"),Nh.forEach(t),Mi=c(ye),b(Wt.$$.fragment,ye),ye.forEach(t),fs=c(o),Le=n(o,"H2",{class:!0});var zs=s(Le);ot=n(zs,"A",{id:!0,class:!0,href:!0});var Lh=s(ot);en=n(Lh,"SPAN",{});var Dh=s(en);b(Bt.$$.fragment,Dh),Dh.forEach(t),Lh.forEach(t),ji=c(zs),tn=n(zs,"SPAN",{});var Oh=s(tn);Pi=i(Oh,"ViTFeatureExtractor"),Oh.forEach(t),zs.forEach(t),us=c(o),se=n(o,"DIV",{class:!0});var bt=s(se);b(Ut.$$.fragment,bt),Ci=c(bt),on=n(bt,"P",{});var Sh=s(on);qi=i(Sh,"Constructs a ViT feature extractor."),Sh.forEach(t),Ai=c(bt),Rt=n(bt,"P",{});var Ns=s(Rt);zi=i(Ns,"This feature extractor inherits from "),pa=n(Ns,"A",{href:!0});var Wh=s(pa);Ni=i(Wh,"FeatureExtractionMixin"),Wh.forEach(t),Li=i(Ns,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ns.forEach(t),Di=c(bt),be=n(bt,"DIV",{class:!0});var ka=s(be);b(Ht.$$.fragment,ka),Oi=c(ka),an=n(ka,"P",{});var Bh=s(an);Si=i(Bh,"Main method to prepare for the model one or several image(s)."),Bh.forEach(t),Wi=c(ka),b(at.$$.fragment,ka),ka.forEach(t),bt.forEach(t),gs=c(o),De=n(o,"H2",{class:!0});var Ls=s(De);nt=n(Ls,"A",{id:!0,class:!0,href:!0});var Uh=s(nt);nn=n(Uh,"SPAN",{});var Rh=s(nn);b(Jt.$$.fragment,Rh),Rh.forEach(t),Uh.forEach(t),Bi=c(Ls),sn=n(Ls,"SPAN",{});var Hh=s(sn);Ui=i(Hh,"ViTModel"),Hh.forEach(t),Ls.forEach(t),_s=c(o),me=n(o,"DIV",{class:!0});var Ia=s(me);b(Kt.$$.fragment,Ia),Ri=c(Ia),Gt=n(Ia,"P",{});var Ds=s(Gt);Hi=i(Ds,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Xt=n(Ds,"A",{href:!0,rel:!0});var Jh=s(Xt);Ji=i(Jh,"torch.nn.Module"),Jh.forEach(t),Ki=i(Ds,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ds.forEach(t),Gi=c(Ia),H=n(Ia,"DIV",{class:!0});var $e=s(H);b(Zt.$$.fragment,$e),Xi=c($e),Oe=n($e,"P",{});var Ma=s(Oe);Zi=i(Ma,"The "),ma=n(Ma,"A",{href:!0});var Kh=s(ma);Qi=i(Kh,"ViTModel"),Kh.forEach(t),Yi=i(Ma," forward method, overrides the "),rn=n(Ma,"CODE",{});var Gh=s(rn);el=i(Gh,"__call__"),Gh.forEach(t),tl=i(Ma," special method."),Ma.forEach(t),ol=c($e),b(st.$$.fragment,$e),al=c($e),ln=n($e,"P",{});var Xh=s(ln);nl=i(Xh,"Example:"),Xh.forEach(t),sl=c($e),b(Qt.$$.fragment,$e),$e.forEach(t),Ia.forEach(t),vs=c(o),Se=n(o,"H2",{class:!0});var Os=s(Se);rt=n(Os,"A",{id:!0,class:!0,href:!0});var Zh=s(rt);dn=n(Zh,"SPAN",{});var Qh=s(dn);b(Yt.$$.fragment,Qh),Qh.forEach(t),Zh.forEach(t),rl=c(Os),cn=n(Os,"SPAN",{});var Yh=s(cn);il=i(Yh,"ViTForMaskedImageModeling"),Yh.forEach(t),Os.forEach(t),Ts=c(o),fe=n(o,"DIV",{class:!0});var ja=s(fe);b(eo.$$.fragment,ja),ll=c(ja),We=n(ja,"P",{});var Pa=s(We);dl=i(Pa,"ViT Model with a decoder on top for masked image modeling, as proposed in "),hn=n(Pa,"CODE",{});var ep=s(hn);cl=i(ep,"SimMIM <https://arxiv.org/abs/2111.09886>"),ep.forEach(t),hl=i(Pa,`__.
This model is a PyTorch `),to=n(Pa,"A",{href:!0,rel:!0});var tp=s(to);pl=i(tp,"torch.nn.Module"),tp.forEach(t),ml=i(Pa,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pa.forEach(t),fl=c(ja),J=n(ja,"DIV",{class:!0});var xe=s(J);b(oo.$$.fragment,xe),ul=c(xe),Be=n(xe,"P",{});var Ca=s(Be);gl=i(Ca,"The "),fa=n(Ca,"A",{href:!0});var op=s(fa);_l=i(op,"ViTForMaskedImageModeling"),op.forEach(t),vl=i(Ca," forward method, overrides the "),pn=n(Ca,"CODE",{});var ap=s(pn);Tl=i(ap,"__call__"),ap.forEach(t),wl=i(Ca," special method."),Ca.forEach(t),bl=c(xe),b(it.$$.fragment,xe),yl=c(xe),mn=n(xe,"P",{});var np=s(mn);$l=i(np,"Examples:"),np.forEach(t),xl=c(xe),b(ao.$$.fragment,xe),xe.forEach(t),ja.forEach(t),ws=c(o),Ue=n(o,"H2",{class:!0});var Ss=s(Ue);lt=n(Ss,"A",{id:!0,class:!0,href:!0});var sp=s(lt);fn=n(sp,"SPAN",{});var rp=s(fn);b(no.$$.fragment,rp),rp.forEach(t),sp.forEach(t),Fl=c(Ss),un=n(Ss,"SPAN",{});var ip=s(un);Vl=i(ip,"ViTForImageClassification"),ip.forEach(t),Ss.forEach(t),bs=c(o),re=n(o,"DIV",{class:!0});var yt=s(re);b(so.$$.fragment,yt),El=c(yt),gn=n(yt,"P",{});var lp=s(gn);kl=i(lp,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),lp.forEach(t),Il=c(yt),ro=n(yt,"P",{});var Ws=s(ro);Ml=i(Ws,"This model is a PyTorch "),io=n(Ws,"A",{href:!0,rel:!0});var dp=s(io);jl=i(dp,"torch.nn.Module"),dp.forEach(t),Pl=i(Ws,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ws.forEach(t),Cl=c(yt),K=n(yt,"DIV",{class:!0});var Fe=s(K);b(lo.$$.fragment,Fe),ql=c(Fe),Re=n(Fe,"P",{});var qa=s(Re);Al=i(qa,"The "),ua=n(qa,"A",{href:!0});var cp=s(ua);zl=i(cp,"ViTForImageClassification"),cp.forEach(t),Nl=i(qa," forward method, overrides the "),_n=n(qa,"CODE",{});var hp=s(_n);Ll=i(hp,"__call__"),hp.forEach(t),Dl=i(qa," special method."),qa.forEach(t),Ol=c(Fe),b(dt.$$.fragment,Fe),Sl=c(Fe),vn=n(Fe,"P",{});var pp=s(vn);Wl=i(pp,"Example:"),pp.forEach(t),Bl=c(Fe),b(co.$$.fragment,Fe),Fe.forEach(t),yt.forEach(t),ys=c(o),He=n(o,"H2",{class:!0});var Bs=s(He);ct=n(Bs,"A",{id:!0,class:!0,href:!0});var mp=s(ct);Tn=n(mp,"SPAN",{});var fp=s(Tn);b(ho.$$.fragment,fp),fp.forEach(t),mp.forEach(t),Ul=c(Bs),wn=n(Bs,"SPAN",{});var up=s(wn);Rl=i(up,"TFViTModel"),up.forEach(t),Bs.forEach(t),$s=c(o),D=n(o,"DIV",{class:!0});var de=s(D);b(po.$$.fragment,de),Hl=c(de),bn=n(de,"P",{});var gp=s(bn);Jl=i(gp,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),gp.forEach(t),Kl=c(de),mo=n(de,"P",{});var Us=s(mo);Gl=i(Us,"This model inherits from "),ga=n(Us,"A",{href:!0});var _p=s(ga);Xl=i(_p,"TFPreTrainedModel"),_p.forEach(t),Zl=i(Us,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Us.forEach(t),Ql=c(de),fo=n(de,"P",{});var Rs=s(fo);Yl=i(Rs,"This model is also a "),uo=n(Rs,"A",{href:!0,rel:!0});var vp=s(uo);ed=i(vp,"tf.keras.Model"),vp.forEach(t),td=i(Rs,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rs.forEach(t),od=c(de),b(ht.$$.fragment,de),ad=c(de),G=n(de,"DIV",{class:!0});var Ve=s(G);b(go.$$.fragment,Ve),nd=c(Ve),Je=n(Ve,"P",{});var Aa=s(Je);sd=i(Aa,"The "),_a=n(Aa,"A",{href:!0});var Tp=s(_a);rd=i(Tp,"TFViTModel"),Tp.forEach(t),id=i(Aa," forward method, overrides the "),yn=n(Aa,"CODE",{});var wp=s(yn);ld=i(wp,"__call__"),wp.forEach(t),dd=i(Aa," special method."),Aa.forEach(t),cd=c(Ve),b(pt.$$.fragment,Ve),hd=c(Ve),$n=n(Ve,"P",{});var bp=s($n);pd=i(bp,"Examples:"),bp.forEach(t),md=c(Ve),b(_o.$$.fragment,Ve),Ve.forEach(t),de.forEach(t),xs=c(o),Ke=n(o,"H2",{class:!0});var Hs=s(Ke);mt=n(Hs,"A",{id:!0,class:!0,href:!0});var yp=s(mt);xn=n(yp,"SPAN",{});var $p=s(xn);b(vo.$$.fragment,$p),$p.forEach(t),yp.forEach(t),fd=c(Hs),Fn=n(Hs,"SPAN",{});var xp=s(Fn);ud=i(xp,"TFViTForImageClassification"),xp.forEach(t),Hs.forEach(t),Fs=c(o),O=n(o,"DIV",{class:!0});var ce=s(O);b(To.$$.fragment,ce),gd=c(ce),Vn=n(ce,"P",{});var Fp=s(Vn);_d=i(Fp,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Fp.forEach(t),vd=c(ce),wo=n(ce,"P",{});var Js=s(wo);Td=i(Js,"This model inherits from "),va=n(Js,"A",{href:!0});var Vp=s(va);wd=i(Vp,"TFPreTrainedModel"),Vp.forEach(t),bd=i(Js,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Js.forEach(t),yd=c(ce),bo=n(ce,"P",{});var Ks=s(bo);$d=i(Ks,"This model is also a "),yo=n(Ks,"A",{href:!0,rel:!0});var Ep=s(yo);xd=i(Ep,"tf.keras.Model"),Ep.forEach(t),Fd=i(Ks,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ks.forEach(t),Vd=c(ce),b(ft.$$.fragment,ce),Ed=c(ce),X=n(ce,"DIV",{class:!0});var Ee=s(X);b($o.$$.fragment,Ee),kd=c(Ee),Ge=n(Ee,"P",{});var za=s(Ge);Id=i(za,"The "),Ta=n(za,"A",{href:!0});var kp=s(Ta);Md=i(kp,"TFViTForImageClassification"),kp.forEach(t),jd=i(za," forward method, overrides the "),En=n(za,"CODE",{});var Ip=s(En);Pd=i(Ip,"__call__"),Ip.forEach(t),Cd=i(za," special method."),za.forEach(t),qd=c(Ee),b(ut.$$.fragment,Ee),Ad=c(Ee),kn=n(Ee,"P",{});var Mp=s(kn);zd=i(Mp,"Examples:"),Mp.forEach(t),Nd=c(Ee),b(xo.$$.fragment,Ee),Ee.forEach(t),ce.forEach(t),Vs=c(o),Xe=n(o,"H2",{class:!0});var Gs=s(Xe);gt=n(Gs,"A",{id:!0,class:!0,href:!0});var jp=s(gt);In=n(jp,"SPAN",{});var Pp=s(In);b(Fo.$$.fragment,Pp),Pp.forEach(t),jp.forEach(t),Ld=c(Gs),Mn=n(Gs,"SPAN",{});var Cp=s(Mn);Dd=i(Cp,"FlaxVitModel"),Cp.forEach(t),Gs.forEach(t),Es=c(o),q=n(o,"DIV",{class:!0});var ee=s(q);b(Vo.$$.fragment,ee),Od=c(ee),jn=n(ee,"P",{});var qp=s(jn);Sd=i(qp,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),qp.forEach(t),Wd=c(ee),Eo=n(ee,"P",{});var Xs=s(Eo);Bd=i(Xs,"This model inherits from "),wa=n(Xs,"A",{href:!0});var Ap=s(wa);Ud=i(Ap,"FlaxPreTrainedModel"),Ap.forEach(t),Rd=i(Xs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Xs.forEach(t),Hd=c(ee),ko=n(ee,"P",{});var Zs=s(ko);Jd=i(Zs,"This model is also a Flax Linen "),Io=n(Zs,"A",{href:!0,rel:!0});var zp=s(Io);Kd=i(zp,"flax.linen.Module"),zp.forEach(t),Gd=i(Zs,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Zs.forEach(t),Xd=c(ee),Pn=n(ee,"P",{});var Np=s(Pn);Zd=i(Np,"Finally, this model supports inherent JAX features such as:"),Np.forEach(t),Qd=c(ee),ue=n(ee,"UL",{});var $t=s(ue);Cn=n($t,"LI",{});var Lp=s(Cn);Mo=n(Lp,"A",{href:!0,rel:!0});var Dp=s(Mo);Yd=i(Dp,"Just-In-Time (JIT) compilation"),Dp.forEach(t),Lp.forEach(t),ec=c($t),qn=n($t,"LI",{});var Op=s(qn);jo=n(Op,"A",{href:!0,rel:!0});var Sp=s(jo);tc=i(Sp,"Automatic Differentiation"),Sp.forEach(t),Op.forEach(t),oc=c($t),An=n($t,"LI",{});var Wp=s(An);Po=n(Wp,"A",{href:!0,rel:!0});var Bp=s(Po);ac=i(Bp,"Vectorization"),Bp.forEach(t),Wp.forEach(t),nc=c($t),zn=n($t,"LI",{});var Up=s(zn);Co=n(Up,"A",{href:!0,rel:!0});var Rp=s(Co);sc=i(Rp,"Parallelization"),Rp.forEach(t),Up.forEach(t),$t.forEach(t),rc=c(ee),Z=n(ee,"DIV",{class:!0});var ke=s(Z);b(qo.$$.fragment,ke),ic=c(ke),Ze=n(ke,"P",{});var Na=s(Ze);lc=i(Na,"The "),Nn=n(Na,"CODE",{});var Hp=s(Nn);dc=i(Hp,"FlaxViTPreTrainedModel"),Hp.forEach(t),cc=i(Na,"forward method, overrides the "),Ln=n(Na,"CODE",{});var Jp=s(Ln);hc=i(Jp,"__call__"),Jp.forEach(t),pc=i(Na," special method."),Na.forEach(t),mc=c(ke),b(_t.$$.fragment,ke),fc=c(ke),Dn=n(ke,"P",{});var Kp=s(Dn);uc=i(Kp,"Examples:"),Kp.forEach(t),gc=c(ke),b(Ao.$$.fragment,ke),ke.forEach(t),ee.forEach(t),ks=c(o),Qe=n(o,"H2",{class:!0});var Qs=s(Qe);vt=n(Qs,"A",{id:!0,class:!0,href:!0});var Gp=s(vt);On=n(Gp,"SPAN",{});var Xp=s(On);b(zo.$$.fragment,Xp),Xp.forEach(t),Gp.forEach(t),_c=c(Qs),Sn=n(Qs,"SPAN",{});var Zp=s(Sn);vc=i(Zp,"FlaxViTForImageClassification"),Zp.forEach(t),Qs.forEach(t),Is=c(o),A=n(o,"DIV",{class:!0});var te=s(A);b(No.$$.fragment,te),Tc=c(te),Wn=n(te,"P",{});var Qp=s(Wn);wc=i(Qp,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Qp.forEach(t),bc=c(te),Lo=n(te,"P",{});var Ys=s(Lo);yc=i(Ys,"This model inherits from "),ba=n(Ys,"A",{href:!0});var Yp=s(ba);$c=i(Yp,"FlaxPreTrainedModel"),Yp.forEach(t),xc=i(Ys,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ys.forEach(t),Fc=c(te),Do=n(te,"P",{});var er=s(Do);Vc=i(er,"This model is also a Flax Linen "),Oo=n(er,"A",{href:!0,rel:!0});var em=s(Oo);Ec=i(em,"flax.linen.Module"),em.forEach(t),kc=i(er,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),er.forEach(t),Ic=c(te),Bn=n(te,"P",{});var tm=s(Bn);Mc=i(tm,"Finally, this model supports inherent JAX features such as:"),tm.forEach(t),jc=c(te),ge=n(te,"UL",{});var xt=s(ge);Un=n(xt,"LI",{});var om=s(Un);So=n(om,"A",{href:!0,rel:!0});var am=s(So);Pc=i(am,"Just-In-Time (JIT) compilation"),am.forEach(t),om.forEach(t),Cc=c(xt),Rn=n(xt,"LI",{});var nm=s(Rn);Wo=n(nm,"A",{href:!0,rel:!0});var sm=s(Wo);qc=i(sm,"Automatic Differentiation"),sm.forEach(t),nm.forEach(t),Ac=c(xt),Hn=n(xt,"LI",{});var rm=s(Hn);Bo=n(rm,"A",{href:!0,rel:!0});var im=s(Bo);zc=i(im,"Vectorization"),im.forEach(t),rm.forEach(t),Nc=c(xt),Jn=n(xt,"LI",{});var lm=s(Jn);Uo=n(lm,"A",{href:!0,rel:!0});var dm=s(Uo);Lc=i(dm,"Parallelization"),dm.forEach(t),lm.forEach(t),xt.forEach(t),Dc=c(te),Q=n(te,"DIV",{class:!0});var Ie=s(Q);b(Ro.$$.fragment,Ie),Oc=c(Ie),Ye=n(Ie,"P",{});var La=s(Ye);Sc=i(La,"The "),Kn=n(La,"CODE",{});var cm=s(Kn);Wc=i(cm,"FlaxViTPreTrainedModel"),cm.forEach(t),Bc=i(La,"forward method, overrides the "),Gn=n(La,"CODE",{});var hm=s(Gn);Uc=i(hm,"__call__"),hm.forEach(t),Rc=i(La," special method."),La.forEach(t),Hc=c(Ie),b(Tt.$$.fragment,Ie),Jc=c(Ie),Xn=n(Ie,"P",{});var pm=s(Xn);Kc=i(pm,"Example:"),pm.forEach(t),Gc=c(Ie),b(Ho.$$.fragment,Ie),Ie.forEach(t),te.forEach(t),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(Mm)),l(g,"id","vision-transformer-vit"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#vision-transformer-vit"),l(f,"class","relative group"),l(B,"id","overview"),l(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(B,"href","#overview"),l(j,"class","relative group"),l(ne,"href","https://arxiv.org/abs/2010.11929"),l(ne,"rel","nofollow"),l(Et,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),l(Et,"rel","nofollow"),l(Yo,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor"),l(It,"href","https://huggingface.co/models?search=vit"),l(It,"rel","nofollow"),l(Mt,"href","http://www.image-net.org/"),l(Mt,"rel","nofollow"),l(jt,"href","http://www.image-net.org/challenges/LSVRC/2012/"),l(jt,"rel","nofollow"),l(Pt,"href","https://arxiv.org/abs/1906.06423"),l(Pt,"rel","nofollow"),l(Ct,"href","https://arxiv.org/abs/1912.11370"),l(Ct,"rel","nofollow"),l(ta,"href","deit"),l(oa,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),l(aa,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),l(na,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor"),l(ra,"href","beit"),l(At,"href","https://huggingface.co/models?other=dino"),l(At,"rel","nofollow"),l(la,"href","vit_mae"),l(zt,"href","https://huggingface.co/nielsr"),l(zt,"rel","nofollow"),l(Nt,"href","https://github.com/google-research/vision_transformer"),l(Nt,"rel","nofollow"),l(Lt,"href","https://github.com/rwightman/pytorch-image-models"),l(Lt,"rel","nofollow"),l(tt,"id","transformers.ViTConfig"),l(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(tt,"href","#transformers.ViTConfig"),l(Ae,"class","relative group"),l(da,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),l(St,"href","https://huggingface.co/google/vit-base-patch16-224"),l(St,"rel","nofollow"),l(ca,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(ha,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(U,"class","docstring"),l(ot,"id","transformers.ViTFeatureExtractor"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.ViTFeatureExtractor"),l(Le,"class","relative group"),l(pa,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),l(be,"class","docstring"),l(se,"class","docstring"),l(nt,"id","transformers.ViTModel"),l(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(nt,"href","#transformers.ViTModel"),l(De,"class","relative group"),l(Xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Xt,"rel","nofollow"),l(ma,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),l(H,"class","docstring"),l(me,"class","docstring"),l(rt,"id","transformers.ViTForMaskedImageModeling"),l(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(rt,"href","#transformers.ViTForMaskedImageModeling"),l(Se,"class","relative group"),l(to,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(to,"rel","nofollow"),l(fa,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForMaskedImageModeling"),l(J,"class","docstring"),l(fe,"class","docstring"),l(lt,"id","transformers.ViTForImageClassification"),l(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lt,"href","#transformers.ViTForImageClassification"),l(Ue,"class","relative group"),l(io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(io,"rel","nofollow"),l(ua,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),l(K,"class","docstring"),l(re,"class","docstring"),l(ct,"id","transformers.TFViTModel"),l(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ct,"href","#transformers.TFViTModel"),l(He,"class","relative group"),l(ga,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),l(uo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(uo,"rel","nofollow"),l(_a,"href","/docs/transformers/main/en/model_doc/vit#transformers.TFViTModel"),l(G,"class","docstring"),l(D,"class","docstring"),l(mt,"id","transformers.TFViTForImageClassification"),l(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(mt,"href","#transformers.TFViTForImageClassification"),l(Ke,"class","relative group"),l(va,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),l(yo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(yo,"rel","nofollow"),l(Ta,"href","/docs/transformers/main/en/model_doc/vit#transformers.TFViTForImageClassification"),l(X,"class","docstring"),l(O,"class","docstring"),l(gt,"id","transformers.FlaxViTModel"),l(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(gt,"href","#transformers.FlaxViTModel"),l(Xe,"class","relative group"),l(wa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(Io,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Io,"rel","nofollow"),l(Mo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(Mo,"rel","nofollow"),l(jo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(jo,"rel","nofollow"),l(Po,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Po,"rel","nofollow"),l(Co,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Co,"rel","nofollow"),l(Z,"class","docstring"),l(q,"class","docstring"),l(vt,"id","transformers.FlaxViTForImageClassification"),l(vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(vt,"href","#transformers.FlaxViTForImageClassification"),l(Qe,"class","relative group"),l(ba,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(Oo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Oo,"rel","nofollow"),l(So,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(So,"rel","nofollow"),l(Wo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(Wo,"rel","nofollow"),l(Bo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Bo,"rel","nofollow"),l(Uo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Uo,"rel","nofollow"),l(Q,"class","docstring"),l(A,"class","docstring")},m(o,p){e(document.head,h),m(o,T,p),m(o,f,p),e(f,g),e(g,v),y(_,v,null),e(f,u),e(f,V),e(V,he),m(o,R,p),y(k,o,p),m(o,ie,p),m(o,j,p),e(j,B),e(B,oe),y(C,oe,null),e(j,pe),e(j,ae),e(ae,E),m(o,M,p),m(o,z,p),e(z,Me),e(z,ne),e(ne,L),e(z,je),m(o,Te,p),m(o,Xo,p),e(Xo,tr),m(o,ss,p),m(o,Zo,p),e(Zo,Da),e(Da,or),m(o,rs,p),m(o,Qo,p),e(Qo,ar),m(o,is,p),m(o,N,p),e(N,Vt),e(Vt,nr),e(Vt,Et),e(Et,sr),e(Vt,rr),e(N,ir),e(N,Oa),e(Oa,lr),e(N,dr),e(N,kt),e(kt,cr),e(kt,Yo),e(Yo,hr),e(kt,pr),e(N,mr),e(N,Pe),e(Pe,fr),e(Pe,Sa),e(Sa,ur),e(Pe,gr),e(Pe,It),e(It,_r),e(Pe,vr),e(N,Tr),e(N,Ce),e(Ce,wr),e(Ce,Mt),e(Mt,br),e(Ce,yr),e(Ce,jt),e(jt,$r),e(Ce,xr),e(N,Fr),e(N,qe),e(qe,Vr),e(qe,Pt),e(Pt,Er),e(qe,kr),e(qe,Ct),e(Ct,Ir),e(qe,Mr),e(N,jr),e(N,Wa),e(Wa,Pr),m(o,ls,p),m(o,ea,p),e(ea,Cr),m(o,ds,p),m(o,le,p),e(le,Ba),e(Ba,P),e(P,ta),e(ta,qr),e(P,Ar),e(P,oa),e(oa,zr),e(P,Nr),e(P,aa),e(aa,Lr),e(P,Dr),e(P,Ua),e(Ua,Or),e(P,Sr),e(P,Ra),e(Ra,Wr),e(P,Br),e(P,Ha),e(Ha,Ur),e(P,Rr),e(P,Ja),e(Ja,Hr),e(P,Jr),e(P,na),e(na,Kr),e(P,Gr),e(le,Xr),e(le,Ka),e(Ka,sa),e(sa,ra),e(ra,Zr),e(sa,Qr),e(le,Yr),e(le,Ga),e(Ga,qt),e(qt,ei),e(qt,At),e(At,ti),e(qt,oi),e(le,ai),e(le,Xa),e(Xa,ia),e(ia,la),e(la,ni),e(ia,si),m(o,cs,p),m(o,we,p),e(we,ri),e(we,zt),e(zt,ii),e(we,li),e(we,Nt),e(Nt,di),e(we,ci),m(o,hs,p),m(o,et,p),e(et,hi),e(et,Lt),e(Lt,pi),e(et,mi),m(o,ps,p),m(o,Ae,p),e(Ae,tt),e(tt,Za),y(Dt,Za,null),e(Ae,fi),e(Ae,Qa),e(Qa,ui),m(o,ms,p),m(o,U,p),y(Ot,U,null),e(U,gi),e(U,ze),e(ze,_i),e(ze,da),e(da,vi),e(ze,Ti),e(ze,St),e(St,wi),e(ze,bi),e(U,yi),e(U,Ne),e(Ne,$i),e(Ne,ca),e(ca,xi),e(Ne,Fi),e(Ne,ha),e(ha,Vi),e(Ne,Ei),e(U,ki),e(U,Ya),e(Ya,Ii),e(U,Mi),y(Wt,U,null),m(o,fs,p),m(o,Le,p),e(Le,ot),e(ot,en),y(Bt,en,null),e(Le,ji),e(Le,tn),e(tn,Pi),m(o,us,p),m(o,se,p),y(Ut,se,null),e(se,Ci),e(se,on),e(on,qi),e(se,Ai),e(se,Rt),e(Rt,zi),e(Rt,pa),e(pa,Ni),e(Rt,Li),e(se,Di),e(se,be),y(Ht,be,null),e(be,Oi),e(be,an),e(an,Si),e(be,Wi),y(at,be,null),m(o,gs,p),m(o,De,p),e(De,nt),e(nt,nn),y(Jt,nn,null),e(De,Bi),e(De,sn),e(sn,Ui),m(o,_s,p),m(o,me,p),y(Kt,me,null),e(me,Ri),e(me,Gt),e(Gt,Hi),e(Gt,Xt),e(Xt,Ji),e(Gt,Ki),e(me,Gi),e(me,H),y(Zt,H,null),e(H,Xi),e(H,Oe),e(Oe,Zi),e(Oe,ma),e(ma,Qi),e(Oe,Yi),e(Oe,rn),e(rn,el),e(Oe,tl),e(H,ol),y(st,H,null),e(H,al),e(H,ln),e(ln,nl),e(H,sl),y(Qt,H,null),m(o,vs,p),m(o,Se,p),e(Se,rt),e(rt,dn),y(Yt,dn,null),e(Se,rl),e(Se,cn),e(cn,il),m(o,Ts,p),m(o,fe,p),y(eo,fe,null),e(fe,ll),e(fe,We),e(We,dl),e(We,hn),e(hn,cl),e(We,hl),e(We,to),e(to,pl),e(We,ml),e(fe,fl),e(fe,J),y(oo,J,null),e(J,ul),e(J,Be),e(Be,gl),e(Be,fa),e(fa,_l),e(Be,vl),e(Be,pn),e(pn,Tl),e(Be,wl),e(J,bl),y(it,J,null),e(J,yl),e(J,mn),e(mn,$l),e(J,xl),y(ao,J,null),m(o,ws,p),m(o,Ue,p),e(Ue,lt),e(lt,fn),y(no,fn,null),e(Ue,Fl),e(Ue,un),e(un,Vl),m(o,bs,p),m(o,re,p),y(so,re,null),e(re,El),e(re,gn),e(gn,kl),e(re,Il),e(re,ro),e(ro,Ml),e(ro,io),e(io,jl),e(ro,Pl),e(re,Cl),e(re,K),y(lo,K,null),e(K,ql),e(K,Re),e(Re,Al),e(Re,ua),e(ua,zl),e(Re,Nl),e(Re,_n),e(_n,Ll),e(Re,Dl),e(K,Ol),y(dt,K,null),e(K,Sl),e(K,vn),e(vn,Wl),e(K,Bl),y(co,K,null),m(o,ys,p),m(o,He,p),e(He,ct),e(ct,Tn),y(ho,Tn,null),e(He,Ul),e(He,wn),e(wn,Rl),m(o,$s,p),m(o,D,p),y(po,D,null),e(D,Hl),e(D,bn),e(bn,Jl),e(D,Kl),e(D,mo),e(mo,Gl),e(mo,ga),e(ga,Xl),e(mo,Zl),e(D,Ql),e(D,fo),e(fo,Yl),e(fo,uo),e(uo,ed),e(fo,td),e(D,od),y(ht,D,null),e(D,ad),e(D,G),y(go,G,null),e(G,nd),e(G,Je),e(Je,sd),e(Je,_a),e(_a,rd),e(Je,id),e(Je,yn),e(yn,ld),e(Je,dd),e(G,cd),y(pt,G,null),e(G,hd),e(G,$n),e($n,pd),e(G,md),y(_o,G,null),m(o,xs,p),m(o,Ke,p),e(Ke,mt),e(mt,xn),y(vo,xn,null),e(Ke,fd),e(Ke,Fn),e(Fn,ud),m(o,Fs,p),m(o,O,p),y(To,O,null),e(O,gd),e(O,Vn),e(Vn,_d),e(O,vd),e(O,wo),e(wo,Td),e(wo,va),e(va,wd),e(wo,bd),e(O,yd),e(O,bo),e(bo,$d),e(bo,yo),e(yo,xd),e(bo,Fd),e(O,Vd),y(ft,O,null),e(O,Ed),e(O,X),y($o,X,null),e(X,kd),e(X,Ge),e(Ge,Id),e(Ge,Ta),e(Ta,Md),e(Ge,jd),e(Ge,En),e(En,Pd),e(Ge,Cd),e(X,qd),y(ut,X,null),e(X,Ad),e(X,kn),e(kn,zd),e(X,Nd),y(xo,X,null),m(o,Vs,p),m(o,Xe,p),e(Xe,gt),e(gt,In),y(Fo,In,null),e(Xe,Ld),e(Xe,Mn),e(Mn,Dd),m(o,Es,p),m(o,q,p),y(Vo,q,null),e(q,Od),e(q,jn),e(jn,Sd),e(q,Wd),e(q,Eo),e(Eo,Bd),e(Eo,wa),e(wa,Ud),e(Eo,Rd),e(q,Hd),e(q,ko),e(ko,Jd),e(ko,Io),e(Io,Kd),e(ko,Gd),e(q,Xd),e(q,Pn),e(Pn,Zd),e(q,Qd),e(q,ue),e(ue,Cn),e(Cn,Mo),e(Mo,Yd),e(ue,ec),e(ue,qn),e(qn,jo),e(jo,tc),e(ue,oc),e(ue,An),e(An,Po),e(Po,ac),e(ue,nc),e(ue,zn),e(zn,Co),e(Co,sc),e(q,rc),e(q,Z),y(qo,Z,null),e(Z,ic),e(Z,Ze),e(Ze,lc),e(Ze,Nn),e(Nn,dc),e(Ze,cc),e(Ze,Ln),e(Ln,hc),e(Ze,pc),e(Z,mc),y(_t,Z,null),e(Z,fc),e(Z,Dn),e(Dn,uc),e(Z,gc),y(Ao,Z,null),m(o,ks,p),m(o,Qe,p),e(Qe,vt),e(vt,On),y(zo,On,null),e(Qe,_c),e(Qe,Sn),e(Sn,vc),m(o,Is,p),m(o,A,p),y(No,A,null),e(A,Tc),e(A,Wn),e(Wn,wc),e(A,bc),e(A,Lo),e(Lo,yc),e(Lo,ba),e(ba,$c),e(Lo,xc),e(A,Fc),e(A,Do),e(Do,Vc),e(Do,Oo),e(Oo,Ec),e(Do,kc),e(A,Ic),e(A,Bn),e(Bn,Mc),e(A,jc),e(A,ge),e(ge,Un),e(Un,So),e(So,Pc),e(ge,Cc),e(ge,Rn),e(Rn,Wo),e(Wo,qc),e(ge,Ac),e(ge,Hn),e(Hn,Bo),e(Bo,zc),e(ge,Nc),e(ge,Jn),e(Jn,Uo),e(Uo,Lc),e(A,Dc),e(A,Q),y(Ro,Q,null),e(Q,Oc),e(Q,Ye),e(Ye,Sc),e(Ye,Kn),e(Kn,Wc),e(Ye,Bc),e(Ye,Gn),e(Gn,Uc),e(Ye,Rc),e(Q,Hc),y(Tt,Q,null),e(Q,Jc),e(Q,Xn),e(Xn,Kc),e(Q,Gc),y(Ho,Q,null),Ms=!0},p(o,[p]){const Jo={};p&2&&(Jo.$$scope={dirty:p,ctx:o}),k.$set(Jo);const Zn={};p&2&&(Zn.$$scope={dirty:p,ctx:o}),at.$set(Zn);const Qn={};p&2&&(Qn.$$scope={dirty:p,ctx:o}),st.$set(Qn);const Yn={};p&2&&(Yn.$$scope={dirty:p,ctx:o}),it.$set(Yn);const Ko={};p&2&&(Ko.$$scope={dirty:p,ctx:o}),dt.$set(Ko);const es={};p&2&&(es.$$scope={dirty:p,ctx:o}),ht.$set(es);const ts={};p&2&&(ts.$$scope={dirty:p,ctx:o}),pt.$set(ts);const os={};p&2&&(os.$$scope={dirty:p,ctx:o}),ft.$set(os);const Go={};p&2&&(Go.$$scope={dirty:p,ctx:o}),ut.$set(Go);const as={};p&2&&(as.$$scope={dirty:p,ctx:o}),_t.$set(as);const ns={};p&2&&(ns.$$scope={dirty:p,ctx:o}),Tt.$set(ns)},i(o){Ms||($(_.$$.fragment,o),$(k.$$.fragment,o),$(C.$$.fragment,o),$(Dt.$$.fragment,o),$(Ot.$$.fragment,o),$(Wt.$$.fragment,o),$(Bt.$$.fragment,o),$(Ut.$$.fragment,o),$(Ht.$$.fragment,o),$(at.$$.fragment,o),$(Jt.$$.fragment,o),$(Kt.$$.fragment,o),$(Zt.$$.fragment,o),$(st.$$.fragment,o),$(Qt.$$.fragment,o),$(Yt.$$.fragment,o),$(eo.$$.fragment,o),$(oo.$$.fragment,o),$(it.$$.fragment,o),$(ao.$$.fragment,o),$(no.$$.fragment,o),$(so.$$.fragment,o),$(lo.$$.fragment,o),$(dt.$$.fragment,o),$(co.$$.fragment,o),$(ho.$$.fragment,o),$(po.$$.fragment,o),$(ht.$$.fragment,o),$(go.$$.fragment,o),$(pt.$$.fragment,o),$(_o.$$.fragment,o),$(vo.$$.fragment,o),$(To.$$.fragment,o),$(ft.$$.fragment,o),$($o.$$.fragment,o),$(ut.$$.fragment,o),$(xo.$$.fragment,o),$(Fo.$$.fragment,o),$(Vo.$$.fragment,o),$(qo.$$.fragment,o),$(_t.$$.fragment,o),$(Ao.$$.fragment,o),$(zo.$$.fragment,o),$(No.$$.fragment,o),$(Ro.$$.fragment,o),$(Tt.$$.fragment,o),$(Ho.$$.fragment,o),Ms=!0)},o(o){x(_.$$.fragment,o),x(k.$$.fragment,o),x(C.$$.fragment,o),x(Dt.$$.fragment,o),x(Ot.$$.fragment,o),x(Wt.$$.fragment,o),x(Bt.$$.fragment,o),x(Ut.$$.fragment,o),x(Ht.$$.fragment,o),x(at.$$.fragment,o),x(Jt.$$.fragment,o),x(Kt.$$.fragment,o),x(Zt.$$.fragment,o),x(st.$$.fragment,o),x(Qt.$$.fragment,o),x(Yt.$$.fragment,o),x(eo.$$.fragment,o),x(oo.$$.fragment,o),x(it.$$.fragment,o),x(ao.$$.fragment,o),x(no.$$.fragment,o),x(so.$$.fragment,o),x(lo.$$.fragment,o),x(dt.$$.fragment,o),x(co.$$.fragment,o),x(ho.$$.fragment,o),x(po.$$.fragment,o),x(ht.$$.fragment,o),x(go.$$.fragment,o),x(pt.$$.fragment,o),x(_o.$$.fragment,o),x(vo.$$.fragment,o),x(To.$$.fragment,o),x(ft.$$.fragment,o),x($o.$$.fragment,o),x(ut.$$.fragment,o),x(xo.$$.fragment,o),x(Fo.$$.fragment,o),x(Vo.$$.fragment,o),x(qo.$$.fragment,o),x(_t.$$.fragment,o),x(Ao.$$.fragment,o),x(zo.$$.fragment,o),x(No.$$.fragment,o),x(Ro.$$.fragment,o),x(Tt.$$.fragment,o),x(Ho.$$.fragment,o),Ms=!1},d(o){t(h),o&&t(T),o&&t(f),F(_),o&&t(R),F(k,o),o&&t(ie),o&&t(j),F(C),o&&t(M),o&&t(z),o&&t(Te),o&&t(Xo),o&&t(ss),o&&t(Zo),o&&t(rs),o&&t(Qo),o&&t(is),o&&t(N),o&&t(ls),o&&t(ea),o&&t(ds),o&&t(le),o&&t(cs),o&&t(we),o&&t(hs),o&&t(et),o&&t(ps),o&&t(Ae),F(Dt),o&&t(ms),o&&t(U),F(Ot),F(Wt),o&&t(fs),o&&t(Le),F(Bt),o&&t(us),o&&t(se),F(Ut),F(Ht),F(at),o&&t(gs),o&&t(De),F(Jt),o&&t(_s),o&&t(me),F(Kt),F(Zt),F(st),F(Qt),o&&t(vs),o&&t(Se),F(Yt),o&&t(Ts),o&&t(fe),F(eo),F(oo),F(it),F(ao),o&&t(ws),o&&t(Ue),F(no),o&&t(bs),o&&t(re),F(so),F(lo),F(dt),F(co),o&&t(ys),o&&t(He),F(ho),o&&t($s),o&&t(D),F(po),F(ht),F(go),F(pt),F(_o),o&&t(xs),o&&t(Ke),F(vo),o&&t(Fs),o&&t(O),F(To),F(ft),F($o),F(ut),F(xo),o&&t(Vs),o&&t(Xe),F(Fo),o&&t(Es),o&&t(q),F(Vo),F(qo),F(_t),F(Ao),o&&t(ks),o&&t(Qe),F(zo),o&&t(Is),o&&t(A),F(No),F(Ro),F(Tt),F(Ho)}}}const Mm={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.ViTFeatureExtractor",title:"ViTFeatureExtractor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForMaskedImageModeling",title:"ViTForMaskedImageModeling"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function jm(I){return _m(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Nm extends mm{constructor(h){super();fm(this,h,jm,Im,um,{})}}export{Nm as default,Mm as metadata};
