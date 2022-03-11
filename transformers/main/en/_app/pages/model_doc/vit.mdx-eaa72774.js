import{S as mm,i as fm,s as um,e as a,k as d,w,t as r,M as gm,c as s,d as t,m as c,a as n,x as b,h as i,b as l,F as e,g as f,y,q as $,o as x,B as V}from"../../chunks/vendor-4833417e.js";import{T as _e}from"../../chunks/Tip-fffd6df1.js";import{D as W}from"../../chunks/Docstring-4f315ed9.js";import{C as Vt}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as ve}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function _m(I){let h,v,m,g,T;return{c(){h=a("p"),v=r(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=a("a"),g=r("Github Issue"),T=r("."),this.h()},l(_){h=s(_,"P",{});var u=n(h);v=i(u,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=s(u,"A",{href:!0,rel:!0});var F=n(m);g=i(F,"Github Issue"),F.forEach(t),T=i(u,"."),u.forEach(t),this.h()},h(){l(m,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),l(m,"rel","nofollow")},m(_,u){f(_,h,u),e(h,v),e(h,m),e(m,g),e(h,T)},d(_){_&&t(h)}}}function vm(I){let h,v;return{c(){h=a("p"),v=r(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(m){h=s(m,"P",{});var g=n(h);v=i(g,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),g.forEach(t)},m(m,g){f(m,h,g),e(h,v)},d(m){m&&t(h)}}}function Tm(I){let h,v,m,g,T;return{c(){h=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var u=n(h);v=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var F=n(m);g=i(F,"Module"),F.forEach(t),T=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){f(_,h,u),e(h,v),e(h,m),e(m,g),e(h,T)},d(_){_&&t(h)}}}function wm(I){let h,v,m,g,T;return{c(){h=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var u=n(h);v=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var F=n(m);g=i(F,"Module"),F.forEach(t),T=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){f(_,h,u),e(h,v),e(h,m),e(m,g),e(h,T)},d(_){_&&t(h)}}}function bm(I){let h,v,m,g,T;return{c(){h=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var u=n(h);v=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var F=n(m);g=i(F,"Module"),F.forEach(t),T=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){f(_,h,u),e(h,v),e(h,m),e(m,g),e(h,T)},d(_){_&&t(h)}}}function ym(I){let h,v,m,g,T,_,u,F,he,R,k,ie,j,U,oe,C,pe,ae;return{c(){h=a("p"),v=r("TF 2.0 models accepts two formats as inputs:"),m=d(),g=a("ul"),T=a("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),u=d(),F=a("li"),he=r("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),ie=r("This second option is useful when using "),j=a("code"),U=r("tf.keras.Model.fit"),oe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),C=a("code"),pe=r("model(inputs)"),ae=r(".")},l(E){h=s(E,"P",{});var M=n(h);v=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=c(E),g=s(E,"UL",{});var z=n(g);T=s(z,"LI",{});var Me=n(T);_=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),u=c(z),F=s(z,"LI",{});var se=n(F);he=i(se,"having all inputs as a list, tuple or dict in the first positional arguments."),se.forEach(t),z.forEach(t),R=c(E),k=s(E,"P",{});var L=n(k);ie=i(L,"This second option is useful when using "),j=s(L,"CODE",{});var je=n(j);U=i(je,"tf.keras.Model.fit"),je.forEach(t),oe=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),C=s(L,"CODE",{});var Te=n(C);pe=i(Te,"model(inputs)"),Te.forEach(t),ae=i(L,"."),L.forEach(t)},m(E,M){f(E,h,M),e(h,v),f(E,m,M),f(E,g,M),e(g,T),e(T,_),e(g,u),e(g,F),e(F,he),f(E,R,M),f(E,k,M),e(k,ie),e(k,j),e(j,U),e(k,oe),e(k,C),e(C,pe),e(k,ae)},d(E){E&&t(h),E&&t(m),E&&t(g),E&&t(R),E&&t(k)}}}function $m(I){let h,v,m,g,T;return{c(){h=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var u=n(h);v=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var F=n(m);g=i(F,"Module"),F.forEach(t),T=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){f(_,h,u),e(h,v),e(h,m),e(m,g),e(h,T)},d(_){_&&t(h)}}}function xm(I){let h,v,m,g,T,_,u,F,he,R,k,ie,j,U,oe,C,pe,ae;return{c(){h=a("p"),v=r("TF 2.0 models accepts two formats as inputs:"),m=d(),g=a("ul"),T=a("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),u=d(),F=a("li"),he=r("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),ie=r("This second option is useful when using "),j=a("code"),U=r("tf.keras.Model.fit"),oe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),C=a("code"),pe=r("model(inputs)"),ae=r(".")},l(E){h=s(E,"P",{});var M=n(h);v=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=c(E),g=s(E,"UL",{});var z=n(g);T=s(z,"LI",{});var Me=n(T);_=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),u=c(z),F=s(z,"LI",{});var se=n(F);he=i(se,"having all inputs as a list, tuple or dict in the first positional arguments."),se.forEach(t),z.forEach(t),R=c(E),k=s(E,"P",{});var L=n(k);ie=i(L,"This second option is useful when using "),j=s(L,"CODE",{});var je=n(j);U=i(je,"tf.keras.Model.fit"),je.forEach(t),oe=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),C=s(L,"CODE",{});var Te=n(C);pe=i(Te,"model(inputs)"),Te.forEach(t),ae=i(L,"."),L.forEach(t)},m(E,M){f(E,h,M),e(h,v),f(E,m,M),f(E,g,M),e(g,T),e(T,_),e(g,u),e(g,F),e(F,he),f(E,R,M),f(E,k,M),e(k,ie),e(k,j),e(j,U),e(k,oe),e(k,C),e(C,pe),e(k,ae)},d(E){E&&t(h),E&&t(m),E&&t(g),E&&t(R),E&&t(k)}}}function Vm(I){let h,v,m,g,T;return{c(){h=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var u=n(h);v=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var F=n(m);g=i(F,"Module"),F.forEach(t),T=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){f(_,h,u),e(h,v),e(h,m),e(m,g),e(h,T)},d(_){_&&t(h)}}}function Fm(I){let h,v,m,g,T;return{c(){h=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var u=n(h);v=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var F=n(m);g=i(F,"Module"),F.forEach(t),T=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){f(_,h,u),e(h,v),e(h,m),e(m,g),e(h,T)},d(_){_&&t(h)}}}function Em(I){let h,v,m,g,T;return{c(){h=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var u=n(h);v=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var F=n(m);g=i(F,"Module"),F.forEach(t),T=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){f(_,h,u),e(h,v),e(h,m),e(m,g),e(h,T)},d(_){_&&t(h)}}}function km(I){let h,v,m,g,T,_,u,F,he,R,k,ie,j,U,oe,C,pe,ae,E,M,z,Me,se,L,je,Te,Xo,tr,sn,Zo,Da,or,nn,Qo,ar,rn,N,Ft,sr,Et,nr,rr,ir,Oa,lr,dr,kt,cr,Yo,hr,pr,mr,Pe,fr,Sa,ur,gr,It,_r,vr,Tr,Ce,wr,Mt,br,yr,jt,$r,xr,Vr,Ae,Fr,Pt,Er,kr,Ct,Ir,Mr,jr,Wa,Pr,ln,ea,Cr,dn,le,Ua,P,ta,Ar,qr,oa,zr,Nr,aa,Lr,Dr,Ba,Or,Sr,Ra,Wr,Ur,Ha,Br,Rr,Ja,Hr,Jr,sa,Kr,Gr,Xr,Ka,na,ra,Zr,Qr,Yr,Ga,At,ei,qt,ti,oi,ai,Xa,ia,la,si,ni,cn,we,ri,zt,ii,li,Nt,di,ci,hn,et,hi,Lt,pi,mi,pn,qe,tt,Za,Dt,fi,Qa,ui,mn,B,Ot,gi,ze,_i,da,vi,Ti,St,wi,bi,yi,Ne,$i,ca,xi,Vi,ha,Fi,Ei,ki,Ya,Ii,Mi,Wt,fn,Le,ot,es,Ut,ji,ts,Pi,un,ne,Bt,Ci,os,Ai,qi,Rt,zi,pa,Ni,Li,Di,be,Ht,Oi,as,Si,Wi,at,gn,De,st,ss,Jt,Ui,ns,Bi,_n,me,Kt,Ri,Gt,Hi,Xt,Ji,Ki,Gi,H,Zt,Xi,Oe,Zi,ma,Qi,Yi,rs,el,tl,ol,nt,al,is,sl,nl,Qt,vn,Se,rt,ls,Yt,rl,ds,il,Tn,fe,eo,ll,We,dl,cs,cl,hl,to,pl,ml,fl,J,oo,ul,Ue,gl,fa,_l,vl,hs,Tl,wl,bl,it,yl,ps,$l,xl,ao,wn,Be,lt,ms,so,Vl,fs,Fl,bn,re,no,El,us,kl,Il,ro,Ml,io,jl,Pl,Cl,K,lo,Al,Re,ql,ua,zl,Nl,gs,Ll,Dl,Ol,dt,Sl,_s,Wl,Ul,co,yn,He,ct,vs,ho,Bl,Ts,Rl,$n,D,po,Hl,ws,Jl,Kl,mo,Gl,ga,Xl,Zl,Ql,fo,Yl,uo,ed,td,od,ht,ad,G,go,sd,Je,nd,_a,rd,id,bs,ld,dd,cd,pt,hd,ys,pd,md,_o,xn,Ke,mt,$s,vo,fd,xs,ud,Vn,O,To,gd,Vs,_d,vd,wo,Td,va,wd,bd,yd,bo,$d,yo,xd,Vd,Fd,ft,Ed,X,$o,kd,Ge,Id,Ta,Md,jd,Fs,Pd,Cd,Ad,ut,qd,Es,zd,Nd,xo,Fn,Xe,gt,ks,Vo,Ld,Is,Dd,En,A,Fo,Od,Ms,Sd,Wd,Eo,Ud,wa,Bd,Rd,Hd,ko,Jd,Io,Kd,Gd,Xd,js,Zd,Qd,ue,Ps,Mo,Yd,ec,Cs,jo,tc,oc,As,Po,ac,sc,qs,Co,nc,rc,Z,Ao,ic,Ze,lc,zs,dc,cc,Ns,hc,pc,mc,_t,fc,Ls,uc,gc,qo,kn,Qe,vt,Ds,zo,_c,Os,vc,In,q,No,Tc,Ss,wc,bc,Lo,yc,ba,$c,xc,Vc,Do,Fc,Oo,Ec,kc,Ic,Ws,Mc,jc,ge,Us,So,Pc,Cc,Bs,Wo,Ac,qc,Rs,Uo,zc,Nc,Hs,Bo,Lc,Dc,Q,Ro,Oc,Ye,Sc,Js,Wc,Uc,Ks,Bc,Rc,Hc,Tt,Jc,Gs,Kc,Gc,Ho,Mn;return _=new ve({}),k=new _e({props:{$$slots:{default:[_m]},$$scope:{ctx:I}}}),C=new ve({}),Dt=new ve({}),Ot=new W({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/configuration_vit.py#L35",parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}]}}),Wt=new Vt({props:{code:`from transformers import ViTModel, ViTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Ut=new ve({}),Bt=new W({props:{name:"class transformers.ViTFeatureExtractor",anchor:"transformers.ViTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = 2"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/feature_extraction_vit.py#L37",parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}]}}),Ht=new W({props:{name:"__call__",anchor:"transformers.ViTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/feature_extraction_vit.py#L83",parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
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
`}}),at=new _e({props:{warning:"&lcub;true}",$$slots:{default:[vm]},$$scope:{ctx:I}}}),Jt=new ve({}),Kt=new W({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L487",parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Zt=new W({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"interpolate_pos_encoding",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L512",parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),nt=new _e({props:{$$slots:{default:[Tm]},$$scope:{ctx:I}}}),Qt=new Vt({props:{code:`from transformers import ViTFeatureExtractor, ViTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),Yt=new ve({}),eo=new W({props:{name:"class transformers.ViTForMaskedImageModeling",anchor:"transformers.ViTForMaskedImageModeling",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L592",parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),oo=new W({props:{name:"forward",anchor:"transformers.ViTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"interpolate_pos_encoding",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L606",parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
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
`}}),it=new _e({props:{$$slots:{default:[wm]},$$scope:{ctx:I}}}),ao=new Vt({props:{code:`from transformers import ViTFeatureExtractor, ViTForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),so=new ve({}),no=new W({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L702",parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new W({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"interpolate_pos_encoding",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L715",parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),dt=new _e({props:{$$slots:{default:[bm]},$$scope:{ctx:I}}}),co=new Vt({props:{code:`from transformers import ViTFeatureExtractor, ViTForImageClassification
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
Egyptian cat`}}),ho=new ve({}),po=new W({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L656",parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ht=new _e({props:{$$slots:{default:[ym]},$$scope:{ctx:I}}}),go=new W({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L662",parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
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
`}}),pt=new _e({props:{$$slots:{default:[$m]},$$scope:{ctx:I}}}),_o=new Vt({props:{code:`from transformers import ViTFeatureExtractor, TFViTModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),vo=new ve({}),To=new W({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L762",parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ft=new _e({props:{$$slots:{default:[xm]},$$scope:{ctx:I}}}),$o=new W({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L776",parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTForImageClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
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
`}}),ut=new _e({props:{$$slots:{default:[Vm]},$$scope:{ctx:I}}}),xo=new Vt({props:{code:`from transformers import ViTFeatureExtractor, TFViTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[<span class="hljs-built_in">int</span>(predicted_class_idx)])`}}),Vo=new ve({}),Fo=new W({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L510",parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ao=new W({props:{name:"__call__",anchor:"transformers.FlaxViTPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L425",returnDescription:`
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
`}}),_t=new _e({props:{$$slots:{default:[Fm]},$$scope:{ctx:I}}}),qo=new Vt({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
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
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ro=new W({props:{name:"__call__",anchor:"transformers.FlaxViTPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L425",returnDescription:`
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
`}}),Tt=new _e({props:{$$slots:{default:[Em]},$$scope:{ctx:I}}}),Ho=new Vt({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){h=a("meta"),v=d(),m=a("h1"),g=a("a"),T=a("span"),w(_.$$.fragment),u=d(),F=a("span"),he=r("Vision Transformer (ViT)"),R=d(),w(k.$$.fragment),ie=d(),j=a("h2"),U=a("a"),oe=a("span"),w(C.$$.fragment),pe=d(),ae=a("span"),E=r("Overview"),M=d(),z=a("p"),Me=r("The Vision Transformer (ViT) model was proposed in "),se=a("a"),L=r(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),je=r(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Te=d(),Xo=a("p"),tr=r("The abstract from the paper is the following:"),sn=d(),Zo=a("p"),Da=a("em"),or=r(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),nn=d(),Qo=a("p"),ar=r("Tips:"),rn=d(),N=a("ul"),Ft=a("li"),sr=r("Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),Et=a("a"),nr=r("here"),rr=r("."),ir=d(),Oa=a("li"),lr=r(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),dr=d(),kt=a("li"),cr=r(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Yo=a("a"),hr=r("ViTFeatureExtractor"),pr=r(" to resize (or rescale) and normalize images for the model."),mr=d(),Pe=a("li"),fr=r(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Sa=a("code"),ur=r("google/vit-base-patch16-224"),gr=r(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),It=a("a"),_r=r("hub"),vr=r("."),Tr=d(),Ce=a("li"),wr=r("The available checkpoints are either (1) pre-trained on "),Mt=a("a"),br=r("ImageNet-21k"),yr=r(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),jt=a("a"),$r=r("ImageNet"),xr=r(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Vr=d(),Ae=a("li"),Fr=r(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Pt=a("a"),Er=r("(Touvron et al., 2019)"),kr=r(", "),Ct=a("a"),Ir=r(`(Kolesnikov
et al., 2020)`),Mr=r(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),jr=d(),Wa=a("li"),Pr=r(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),ln=d(),ea=a("p"),Cr=r("Following the original Vision Transformer, some follow-up works have been made:"),dn=d(),le=a("ul"),Ua=a("li"),P=a("p"),ta=a("a"),Ar=r("DeiT"),qr=r(` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),oa=a("a"),zr=r("ViTModel"),Nr=r(` or
`),aa=a("a"),Lr=r("ViTForImageClassification"),Dr=r(". There are 4 variants available (in 3 different sizes): "),Ba=a("em"),Or=r("facebook/deit-tiny-patch16-224"),Sr=r(`,
`),Ra=a("em"),Wr=r("facebook/deit-small-patch16-224"),Ur=r(", "),Ha=a("em"),Br=r("facebook/deit-base-patch16-224"),Rr=r(" and "),Ja=a("em"),Hr=r("facebook/deit-base-patch16-384"),Jr=r(`. Note that one should
use `),sa=a("a"),Kr=r("DeiTFeatureExtractor"),Gr=r(" in order to prepare images for the model."),Xr=d(),Ka=a("li"),na=a("p"),ra=a("a"),Zr=r("BEiT"),Qr=r(` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Yr=d(),Ga=a("li"),At=a("p"),ei=r(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),qt=a("a"),ti=r("hub"),oi=r("."),ai=d(),Xa=a("li"),ia=a("p"),la=a("a"),si=r("MAE"),ni=r(` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),cn=d(),we=a("p"),ri=r("This model was contributed by "),zt=a("a"),ii=r("nielsr"),li=r(`. The original code (written in JAX) can be
found `),Nt=a("a"),di=r("here"),ci=r("."),hn=d(),et=a("p"),hi=r("Note that we converted the weights from Ross Wightman\u2019s "),Lt=a("a"),pi=r("timm library"),mi=r(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),pn=d(),qe=a("h2"),tt=a("a"),Za=a("span"),w(Dt.$$.fragment),fi=d(),Qa=a("span"),ui=r("ViTConfig"),mn=d(),B=a("div"),w(Ot.$$.fragment),gi=d(),ze=a("p"),_i=r("This is the configuration class to store the configuration of a "),da=a("a"),vi=r("ViTModel"),Ti=r(`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),St=a("a"),wi=r("google/vit-base-patch16-224"),bi=r(" architecture."),yi=d(),Ne=a("p"),$i=r("Configuration objects inherit from "),ca=a("a"),xi=r("PretrainedConfig"),Vi=r(` and can be used to control the model outputs. Read the
documentation from `),ha=a("a"),Fi=r("PretrainedConfig"),Ei=r(" for more information."),ki=d(),Ya=a("p"),Ii=r("Example:"),Mi=d(),w(Wt.$$.fragment),fn=d(),Le=a("h2"),ot=a("a"),es=a("span"),w(Ut.$$.fragment),ji=d(),ts=a("span"),Pi=r("ViTFeatureExtractor"),un=d(),ne=a("div"),w(Bt.$$.fragment),Ci=d(),os=a("p"),Ai=r("Constructs a ViT feature extractor."),qi=d(),Rt=a("p"),zi=r("This feature extractor inherits from "),pa=a("a"),Ni=r("FeatureExtractionMixin"),Li=r(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Di=d(),be=a("div"),w(Ht.$$.fragment),Oi=d(),as=a("p"),Si=r("Main method to prepare for the model one or several image(s)."),Wi=d(),w(at.$$.fragment),gn=d(),De=a("h2"),st=a("a"),ss=a("span"),w(Jt.$$.fragment),Ui=d(),ns=a("span"),Bi=r("ViTModel"),_n=d(),me=a("div"),w(Kt.$$.fragment),Ri=d(),Gt=a("p"),Hi=r(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Xt=a("a"),Ji=r("torch.nn.Module"),Ki=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gi=d(),H=a("div"),w(Zt.$$.fragment),Xi=d(),Oe=a("p"),Zi=r("The "),ma=a("a"),Qi=r("ViTModel"),Yi=r(" forward method, overrides the "),rs=a("code"),el=r("__call__"),tl=r(" special method."),ol=d(),w(nt.$$.fragment),al=d(),is=a("p"),sl=r("Example:"),nl=d(),w(Qt.$$.fragment),vn=d(),Se=a("h2"),rt=a("a"),ls=a("span"),w(Yt.$$.fragment),rl=d(),ds=a("span"),il=r("ViTForMaskedImageModeling"),Tn=d(),fe=a("div"),w(eo.$$.fragment),ll=d(),We=a("p"),dl=r("ViT Model with a decoder on top for masked image modeling, as proposed in "),cs=a("code"),cl=r("SimMIM <https://arxiv.org/abs/2111.09886>"),hl=r(`__.
This model is a PyTorch `),to=a("a"),pl=r("torch.nn.Module"),ml=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fl=d(),J=a("div"),w(oo.$$.fragment),ul=d(),Ue=a("p"),gl=r("The "),fa=a("a"),_l=r("ViTForMaskedImageModeling"),vl=r(" forward method, overrides the "),hs=a("code"),Tl=r("__call__"),wl=r(" special method."),bl=d(),w(it.$$.fragment),yl=d(),ps=a("p"),$l=r("Examples:"),xl=d(),w(ao.$$.fragment),wn=d(),Be=a("h2"),lt=a("a"),ms=a("span"),w(so.$$.fragment),Vl=d(),fs=a("span"),Fl=r("ViTForImageClassification"),bn=d(),re=a("div"),w(no.$$.fragment),El=d(),us=a("p"),kl=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Il=d(),ro=a("p"),Ml=r("This model is a PyTorch "),io=a("a"),jl=r("torch.nn.Module"),Pl=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cl=d(),K=a("div"),w(lo.$$.fragment),Al=d(),Re=a("p"),ql=r("The "),ua=a("a"),zl=r("ViTForImageClassification"),Nl=r(" forward method, overrides the "),gs=a("code"),Ll=r("__call__"),Dl=r(" special method."),Ol=d(),w(dt.$$.fragment),Sl=d(),_s=a("p"),Wl=r("Example:"),Ul=d(),w(co.$$.fragment),yn=d(),He=a("h2"),ct=a("a"),vs=a("span"),w(ho.$$.fragment),Bl=d(),Ts=a("span"),Rl=r("TFViTModel"),$n=d(),D=a("div"),w(po.$$.fragment),Hl=d(),ws=a("p"),Jl=r("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Kl=d(),mo=a("p"),Gl=r("This model inherits from "),ga=a("a"),Xl=r("TFPreTrainedModel"),Zl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ql=d(),fo=a("p"),Yl=r("This model is also a "),uo=a("a"),ed=r("tf.keras.Model"),td=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),od=d(),w(ht.$$.fragment),ad=d(),G=a("div"),w(go.$$.fragment),sd=d(),Je=a("p"),nd=r("The "),_a=a("a"),rd=r("TFViTModel"),id=r(" forward method, overrides the "),bs=a("code"),ld=r("__call__"),dd=r(" special method."),cd=d(),w(pt.$$.fragment),hd=d(),ys=a("p"),pd=r("Examples:"),md=d(),w(_o.$$.fragment),xn=d(),Ke=a("h2"),mt=a("a"),$s=a("span"),w(vo.$$.fragment),fd=d(),xs=a("span"),ud=r("TFViTForImageClassification"),Vn=d(),O=a("div"),w(To.$$.fragment),gd=d(),Vs=a("p"),_d=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),vd=d(),wo=a("p"),Td=r("This model inherits from "),va=a("a"),wd=r("TFPreTrainedModel"),bd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yd=d(),bo=a("p"),$d=r("This model is also a "),yo=a("a"),xd=r("tf.keras.Model"),Vd=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fd=d(),w(ft.$$.fragment),Ed=d(),X=a("div"),w($o.$$.fragment),kd=d(),Ge=a("p"),Id=r("The "),Ta=a("a"),Md=r("TFViTForImageClassification"),jd=r(" forward method, overrides the "),Fs=a("code"),Pd=r("__call__"),Cd=r(" special method."),Ad=d(),w(ut.$$.fragment),qd=d(),Es=a("p"),zd=r("Examples:"),Nd=d(),w(xo.$$.fragment),Fn=d(),Xe=a("h2"),gt=a("a"),ks=a("span"),w(Vo.$$.fragment),Ld=d(),Is=a("span"),Dd=r("FlaxVitModel"),En=d(),A=a("div"),w(Fo.$$.fragment),Od=d(),Ms=a("p"),Sd=r("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Wd=d(),Eo=a("p"),Ud=r("This model inherits from "),wa=a("a"),Bd=r("FlaxPreTrainedModel"),Rd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Hd=d(),ko=a("p"),Jd=r("This model is also a Flax Linen "),Io=a("a"),Kd=r("flax.linen.Module"),Gd=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xd=d(),js=a("p"),Zd=r("Finally, this model supports inherent JAX features such as:"),Qd=d(),ue=a("ul"),Ps=a("li"),Mo=a("a"),Yd=r("Just-In-Time (JIT) compilation"),ec=d(),Cs=a("li"),jo=a("a"),tc=r("Automatic Differentiation"),oc=d(),As=a("li"),Po=a("a"),ac=r("Vectorization"),sc=d(),qs=a("li"),Co=a("a"),nc=r("Parallelization"),rc=d(),Z=a("div"),w(Ao.$$.fragment),ic=d(),Ze=a("p"),lc=r("The "),zs=a("code"),dc=r("FlaxViTPreTrainedModel"),cc=r("forward method, overrides the "),Ns=a("code"),hc=r("__call__"),pc=r(" special method."),mc=d(),w(_t.$$.fragment),fc=d(),Ls=a("p"),uc=r("Examples:"),gc=d(),w(qo.$$.fragment),kn=d(),Qe=a("h2"),vt=a("a"),Ds=a("span"),w(zo.$$.fragment),_c=d(),Os=a("span"),vc=r("FlaxViTForImageClassification"),In=d(),q=a("div"),w(No.$$.fragment),Tc=d(),Ss=a("p"),wc=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),bc=d(),Lo=a("p"),yc=r("This model inherits from "),ba=a("a"),$c=r("FlaxPreTrainedModel"),xc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Vc=d(),Do=a("p"),Fc=r("This model is also a Flax Linen "),Oo=a("a"),Ec=r("flax.linen.Module"),kc=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ic=d(),Ws=a("p"),Mc=r("Finally, this model supports inherent JAX features such as:"),jc=d(),ge=a("ul"),Us=a("li"),So=a("a"),Pc=r("Just-In-Time (JIT) compilation"),Cc=d(),Bs=a("li"),Wo=a("a"),Ac=r("Automatic Differentiation"),qc=d(),Rs=a("li"),Uo=a("a"),zc=r("Vectorization"),Nc=d(),Hs=a("li"),Bo=a("a"),Lc=r("Parallelization"),Dc=d(),Q=a("div"),w(Ro.$$.fragment),Oc=d(),Ye=a("p"),Sc=r("The "),Js=a("code"),Wc=r("FlaxViTPreTrainedModel"),Uc=r("forward method, overrides the "),Ks=a("code"),Bc=r("__call__"),Rc=r(" special method."),Hc=d(),w(Tt.$$.fragment),Jc=d(),Gs=a("p"),Kc=r("Example:"),Gc=d(),w(Ho.$$.fragment),this.h()},l(o){const p=gm('[data-svelte="svelte-1phssyn"]',document.head);h=s(p,"META",{name:!0,content:!0}),p.forEach(t),v=c(o),m=s(o,"H1",{class:!0});var Jo=n(m);g=s(Jo,"A",{id:!0,class:!0,href:!0});var Xs=n(g);T=s(Xs,"SPAN",{});var Zs=n(T);b(_.$$.fragment,Zs),Zs.forEach(t),Xs.forEach(t),u=c(Jo),F=s(Jo,"SPAN",{});var Qs=n(F);he=i(Qs,"Vision Transformer (ViT)"),Qs.forEach(t),Jo.forEach(t),R=c(o),b(k.$$.fragment,o),ie=c(o),j=s(o,"H2",{class:!0});var Ko=n(j);U=s(Ko,"A",{id:!0,class:!0,href:!0});var Ys=n(U);oe=s(Ys,"SPAN",{});var en=n(oe);b(C.$$.fragment,en),en.forEach(t),Ys.forEach(t),pe=c(Ko),ae=s(Ko,"SPAN",{});var tn=n(ae);E=i(tn,"Overview"),tn.forEach(t),Ko.forEach(t),M=c(o),z=s(o,"P",{});var Go=n(z);Me=i(Go,"The Vision Transformer (ViT) model was proposed in "),se=s(Go,"A",{href:!0,rel:!0});var on=n(se);L=i(on,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),on.forEach(t),je=i(Go,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Go.forEach(t),Te=c(o),Xo=s(o,"P",{});var an=n(Xo);tr=i(an,"The abstract from the paper is the following:"),an.forEach(t),sn=c(o),Zo=s(o,"P",{});var Qc=n(Zo);Da=s(Qc,"EM",{});var Yc=n(Da);or=i(Yc,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),Yc.forEach(t),Qc.forEach(t),nn=c(o),Qo=s(o,"P",{});var eh=n(Qo);ar=i(eh,"Tips:"),eh.forEach(t),rn=c(o),N=s(o,"UL",{});var Y=n(N);Ft=s(Y,"LI",{});var jn=n(Ft);sr=i(jn,"Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),Et=s(jn,"A",{href:!0,rel:!0});var th=n(Et);nr=i(th,"here"),th.forEach(t),rr=i(jn,"."),jn.forEach(t),ir=c(Y),Oa=s(Y,"LI",{});var oh=n(Oa);lr=i(oh,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),oh.forEach(t),dr=c(Y),kt=s(Y,"LI",{});var Pn=n(kt);cr=i(Pn,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Yo=s(Pn,"A",{href:!0});var ah=n(Yo);hr=i(ah,"ViTFeatureExtractor"),ah.forEach(t),pr=i(Pn," to resize (or rescale) and normalize images for the model."),Pn.forEach(t),mr=c(Y),Pe=s(Y,"LI",{});var ya=n(Pe);fr=i(ya,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Sa=s(ya,"CODE",{});var sh=n(Sa);ur=i(sh,"google/vit-base-patch16-224"),sh.forEach(t),gr=i(ya,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),It=s(ya,"A",{href:!0,rel:!0});var nh=n(It);_r=i(nh,"hub"),nh.forEach(t),vr=i(ya,"."),ya.forEach(t),Tr=c(Y),Ce=s(Y,"LI",{});var $a=n(Ce);wr=i($a,"The available checkpoints are either (1) pre-trained on "),Mt=s($a,"A",{href:!0,rel:!0});var rh=n(Mt);br=i(rh,"ImageNet-21k"),rh.forEach(t),yr=i($a,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),jt=s($a,"A",{href:!0,rel:!0});var ih=n(jt);$r=i(ih,"ImageNet"),ih.forEach(t),xr=i($a,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),$a.forEach(t),Vr=c(Y),Ae=s(Y,"LI",{});var xa=n(Ae);Fr=i(xa,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Pt=s(xa,"A",{href:!0,rel:!0});var lh=n(Pt);Er=i(lh,"(Touvron et al., 2019)"),lh.forEach(t),kr=i(xa,", "),Ct=s(xa,"A",{href:!0,rel:!0});var dh=n(Ct);Ir=i(dh,`(Kolesnikov
et al., 2020)`),dh.forEach(t),Mr=i(xa,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),xa.forEach(t),jr=c(Y),Wa=s(Y,"LI",{});var ch=n(Wa);Pr=i(ch,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),ch.forEach(t),Y.forEach(t),ln=c(o),ea=s(o,"P",{});var hh=n(ea);Cr=i(hh,"Following the original Vision Transformer, some follow-up works have been made:"),hh.forEach(t),dn=c(o),le=s(o,"UL",{});var wt=n(le);Ua=s(wt,"LI",{});var ph=n(Ua);P=s(ph,"P",{});var S=n(P);ta=s(S,"A",{href:!0});var mh=n(ta);Ar=i(mh,"DeiT"),mh.forEach(t),qr=i(S,` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),oa=s(S,"A",{href:!0});var fh=n(oa);zr=i(fh,"ViTModel"),fh.forEach(t),Nr=i(S,` or
`),aa=s(S,"A",{href:!0});var uh=n(aa);Lr=i(uh,"ViTForImageClassification"),uh.forEach(t),Dr=i(S,". There are 4 variants available (in 3 different sizes): "),Ba=s(S,"EM",{});var gh=n(Ba);Or=i(gh,"facebook/deit-tiny-patch16-224"),gh.forEach(t),Sr=i(S,`,
`),Ra=s(S,"EM",{});var _h=n(Ra);Wr=i(_h,"facebook/deit-small-patch16-224"),_h.forEach(t),Ur=i(S,", "),Ha=s(S,"EM",{});var vh=n(Ha);Br=i(vh,"facebook/deit-base-patch16-224"),vh.forEach(t),Rr=i(S," and "),Ja=s(S,"EM",{});var Th=n(Ja);Hr=i(Th,"facebook/deit-base-patch16-384"),Th.forEach(t),Jr=i(S,`. Note that one should
use `),sa=s(S,"A",{href:!0});var wh=n(sa);Kr=i(wh,"DeiTFeatureExtractor"),wh.forEach(t),Gr=i(S," in order to prepare images for the model."),S.forEach(t),ph.forEach(t),Xr=c(wt),Ka=s(wt,"LI",{});var bh=n(Ka);na=s(bh,"P",{});var Xc=n(na);ra=s(Xc,"A",{href:!0});var yh=n(ra);Zr=i(yh,"BEiT"),yh.forEach(t),Qr=i(Xc,` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Xc.forEach(t),bh.forEach(t),Yr=c(wt),Ga=s(wt,"LI",{});var $h=n(Ga);At=s($h,"P",{});var Cn=n(At);ei=i(Cn,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),qt=s(Cn,"A",{href:!0,rel:!0});var xh=n(qt);ti=i(xh,"hub"),xh.forEach(t),oi=i(Cn,"."),Cn.forEach(t),$h.forEach(t),ai=c(wt),Xa=s(wt,"LI",{});var Vh=n(Xa);ia=s(Vh,"P",{});var Zc=n(ia);la=s(Zc,"A",{href:!0});var Fh=n(la);si=i(Fh,"MAE"),Fh.forEach(t),ni=i(Zc,` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Zc.forEach(t),Vh.forEach(t),wt.forEach(t),cn=c(o),we=s(o,"P",{});var Va=n(we);ri=i(Va,"This model was contributed by "),zt=s(Va,"A",{href:!0,rel:!0});var Eh=n(zt);ii=i(Eh,"nielsr"),Eh.forEach(t),li=i(Va,`. The original code (written in JAX) can be
found `),Nt=s(Va,"A",{href:!0,rel:!0});var kh=n(Nt);di=i(kh,"here"),kh.forEach(t),ci=i(Va,"."),Va.forEach(t),hn=c(o),et=s(o,"P",{});var An=n(et);hi=i(An,"Note that we converted the weights from Ross Wightman\u2019s "),Lt=s(An,"A",{href:!0,rel:!0});var Ih=n(Lt);pi=i(Ih,"timm library"),Ih.forEach(t),mi=i(An,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),An.forEach(t),pn=c(o),qe=s(o,"H2",{class:!0});var qn=n(qe);tt=s(qn,"A",{id:!0,class:!0,href:!0});var Mh=n(tt);Za=s(Mh,"SPAN",{});var jh=n(Za);b(Dt.$$.fragment,jh),jh.forEach(t),Mh.forEach(t),fi=c(qn),Qa=s(qn,"SPAN",{});var Ph=n(Qa);ui=i(Ph,"ViTConfig"),Ph.forEach(t),qn.forEach(t),mn=c(o),B=s(o,"DIV",{class:!0});var ye=n(B);b(Ot.$$.fragment,ye),gi=c(ye),ze=s(ye,"P",{});var Fa=n(ze);_i=i(Fa,"This is the configuration class to store the configuration of a "),da=s(Fa,"A",{href:!0});var Ch=n(da);vi=i(Ch,"ViTModel"),Ch.forEach(t),Ti=i(Fa,`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),St=s(Fa,"A",{href:!0,rel:!0});var Ah=n(St);wi=i(Ah,"google/vit-base-patch16-224"),Ah.forEach(t),bi=i(Fa," architecture."),Fa.forEach(t),yi=c(ye),Ne=s(ye,"P",{});var Ea=n(Ne);$i=i(Ea,"Configuration objects inherit from "),ca=s(Ea,"A",{href:!0});var qh=n(ca);xi=i(qh,"PretrainedConfig"),qh.forEach(t),Vi=i(Ea,` and can be used to control the model outputs. Read the
documentation from `),ha=s(Ea,"A",{href:!0});var zh=n(ha);Fi=i(zh,"PretrainedConfig"),zh.forEach(t),Ei=i(Ea," for more information."),Ea.forEach(t),ki=c(ye),Ya=s(ye,"P",{});var Nh=n(Ya);Ii=i(Nh,"Example:"),Nh.forEach(t),Mi=c(ye),b(Wt.$$.fragment,ye),ye.forEach(t),fn=c(o),Le=s(o,"H2",{class:!0});var zn=n(Le);ot=s(zn,"A",{id:!0,class:!0,href:!0});var Lh=n(ot);es=s(Lh,"SPAN",{});var Dh=n(es);b(Ut.$$.fragment,Dh),Dh.forEach(t),Lh.forEach(t),ji=c(zn),ts=s(zn,"SPAN",{});var Oh=n(ts);Pi=i(Oh,"ViTFeatureExtractor"),Oh.forEach(t),zn.forEach(t),un=c(o),ne=s(o,"DIV",{class:!0});var bt=n(ne);b(Bt.$$.fragment,bt),Ci=c(bt),os=s(bt,"P",{});var Sh=n(os);Ai=i(Sh,"Constructs a ViT feature extractor."),Sh.forEach(t),qi=c(bt),Rt=s(bt,"P",{});var Nn=n(Rt);zi=i(Nn,"This feature extractor inherits from "),pa=s(Nn,"A",{href:!0});var Wh=n(pa);Ni=i(Wh,"FeatureExtractionMixin"),Wh.forEach(t),Li=i(Nn,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Nn.forEach(t),Di=c(bt),be=s(bt,"DIV",{class:!0});var ka=n(be);b(Ht.$$.fragment,ka),Oi=c(ka),as=s(ka,"P",{});var Uh=n(as);Si=i(Uh,"Main method to prepare for the model one or several image(s)."),Uh.forEach(t),Wi=c(ka),b(at.$$.fragment,ka),ka.forEach(t),bt.forEach(t),gn=c(o),De=s(o,"H2",{class:!0});var Ln=n(De);st=s(Ln,"A",{id:!0,class:!0,href:!0});var Bh=n(st);ss=s(Bh,"SPAN",{});var Rh=n(ss);b(Jt.$$.fragment,Rh),Rh.forEach(t),Bh.forEach(t),Ui=c(Ln),ns=s(Ln,"SPAN",{});var Hh=n(ns);Bi=i(Hh,"ViTModel"),Hh.forEach(t),Ln.forEach(t),_n=c(o),me=s(o,"DIV",{class:!0});var Ia=n(me);b(Kt.$$.fragment,Ia),Ri=c(Ia),Gt=s(Ia,"P",{});var Dn=n(Gt);Hi=i(Dn,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Xt=s(Dn,"A",{href:!0,rel:!0});var Jh=n(Xt);Ji=i(Jh,"torch.nn.Module"),Jh.forEach(t),Ki=i(Dn,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dn.forEach(t),Gi=c(Ia),H=s(Ia,"DIV",{class:!0});var $e=n(H);b(Zt.$$.fragment,$e),Xi=c($e),Oe=s($e,"P",{});var Ma=n(Oe);Zi=i(Ma,"The "),ma=s(Ma,"A",{href:!0});var Kh=n(ma);Qi=i(Kh,"ViTModel"),Kh.forEach(t),Yi=i(Ma," forward method, overrides the "),rs=s(Ma,"CODE",{});var Gh=n(rs);el=i(Gh,"__call__"),Gh.forEach(t),tl=i(Ma," special method."),Ma.forEach(t),ol=c($e),b(nt.$$.fragment,$e),al=c($e),is=s($e,"P",{});var Xh=n(is);sl=i(Xh,"Example:"),Xh.forEach(t),nl=c($e),b(Qt.$$.fragment,$e),$e.forEach(t),Ia.forEach(t),vn=c(o),Se=s(o,"H2",{class:!0});var On=n(Se);rt=s(On,"A",{id:!0,class:!0,href:!0});var Zh=n(rt);ls=s(Zh,"SPAN",{});var Qh=n(ls);b(Yt.$$.fragment,Qh),Qh.forEach(t),Zh.forEach(t),rl=c(On),ds=s(On,"SPAN",{});var Yh=n(ds);il=i(Yh,"ViTForMaskedImageModeling"),Yh.forEach(t),On.forEach(t),Tn=c(o),fe=s(o,"DIV",{class:!0});var ja=n(fe);b(eo.$$.fragment,ja),ll=c(ja),We=s(ja,"P",{});var Pa=n(We);dl=i(Pa,"ViT Model with a decoder on top for masked image modeling, as proposed in "),cs=s(Pa,"CODE",{});var ep=n(cs);cl=i(ep,"SimMIM <https://arxiv.org/abs/2111.09886>"),ep.forEach(t),hl=i(Pa,`__.
This model is a PyTorch `),to=s(Pa,"A",{href:!0,rel:!0});var tp=n(to);pl=i(tp,"torch.nn.Module"),tp.forEach(t),ml=i(Pa,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pa.forEach(t),fl=c(ja),J=s(ja,"DIV",{class:!0});var xe=n(J);b(oo.$$.fragment,xe),ul=c(xe),Ue=s(xe,"P",{});var Ca=n(Ue);gl=i(Ca,"The "),fa=s(Ca,"A",{href:!0});var op=n(fa);_l=i(op,"ViTForMaskedImageModeling"),op.forEach(t),vl=i(Ca," forward method, overrides the "),hs=s(Ca,"CODE",{});var ap=n(hs);Tl=i(ap,"__call__"),ap.forEach(t),wl=i(Ca," special method."),Ca.forEach(t),bl=c(xe),b(it.$$.fragment,xe),yl=c(xe),ps=s(xe,"P",{});var sp=n(ps);$l=i(sp,"Examples:"),sp.forEach(t),xl=c(xe),b(ao.$$.fragment,xe),xe.forEach(t),ja.forEach(t),wn=c(o),Be=s(o,"H2",{class:!0});var Sn=n(Be);lt=s(Sn,"A",{id:!0,class:!0,href:!0});var np=n(lt);ms=s(np,"SPAN",{});var rp=n(ms);b(so.$$.fragment,rp),rp.forEach(t),np.forEach(t),Vl=c(Sn),fs=s(Sn,"SPAN",{});var ip=n(fs);Fl=i(ip,"ViTForImageClassification"),ip.forEach(t),Sn.forEach(t),bn=c(o),re=s(o,"DIV",{class:!0});var yt=n(re);b(no.$$.fragment,yt),El=c(yt),us=s(yt,"P",{});var lp=n(us);kl=i(lp,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),lp.forEach(t),Il=c(yt),ro=s(yt,"P",{});var Wn=n(ro);Ml=i(Wn,"This model is a PyTorch "),io=s(Wn,"A",{href:!0,rel:!0});var dp=n(io);jl=i(dp,"torch.nn.Module"),dp.forEach(t),Pl=i(Wn,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wn.forEach(t),Cl=c(yt),K=s(yt,"DIV",{class:!0});var Ve=n(K);b(lo.$$.fragment,Ve),Al=c(Ve),Re=s(Ve,"P",{});var Aa=n(Re);ql=i(Aa,"The "),ua=s(Aa,"A",{href:!0});var cp=n(ua);zl=i(cp,"ViTForImageClassification"),cp.forEach(t),Nl=i(Aa," forward method, overrides the "),gs=s(Aa,"CODE",{});var hp=n(gs);Ll=i(hp,"__call__"),hp.forEach(t),Dl=i(Aa," special method."),Aa.forEach(t),Ol=c(Ve),b(dt.$$.fragment,Ve),Sl=c(Ve),_s=s(Ve,"P",{});var pp=n(_s);Wl=i(pp,"Example:"),pp.forEach(t),Ul=c(Ve),b(co.$$.fragment,Ve),Ve.forEach(t),yt.forEach(t),yn=c(o),He=s(o,"H2",{class:!0});var Un=n(He);ct=s(Un,"A",{id:!0,class:!0,href:!0});var mp=n(ct);vs=s(mp,"SPAN",{});var fp=n(vs);b(ho.$$.fragment,fp),fp.forEach(t),mp.forEach(t),Bl=c(Un),Ts=s(Un,"SPAN",{});var up=n(Ts);Rl=i(up,"TFViTModel"),up.forEach(t),Un.forEach(t),$n=c(o),D=s(o,"DIV",{class:!0});var de=n(D);b(po.$$.fragment,de),Hl=c(de),ws=s(de,"P",{});var gp=n(ws);Jl=i(gp,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),gp.forEach(t),Kl=c(de),mo=s(de,"P",{});var Bn=n(mo);Gl=i(Bn,"This model inherits from "),ga=s(Bn,"A",{href:!0});var _p=n(ga);Xl=i(_p,"TFPreTrainedModel"),_p.forEach(t),Zl=i(Bn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bn.forEach(t),Ql=c(de),fo=s(de,"P",{});var Rn=n(fo);Yl=i(Rn,"This model is also a "),uo=s(Rn,"A",{href:!0,rel:!0});var vp=n(uo);ed=i(vp,"tf.keras.Model"),vp.forEach(t),td=i(Rn,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rn.forEach(t),od=c(de),b(ht.$$.fragment,de),ad=c(de),G=s(de,"DIV",{class:!0});var Fe=n(G);b(go.$$.fragment,Fe),sd=c(Fe),Je=s(Fe,"P",{});var qa=n(Je);nd=i(qa,"The "),_a=s(qa,"A",{href:!0});var Tp=n(_a);rd=i(Tp,"TFViTModel"),Tp.forEach(t),id=i(qa," forward method, overrides the "),bs=s(qa,"CODE",{});var wp=n(bs);ld=i(wp,"__call__"),wp.forEach(t),dd=i(qa," special method."),qa.forEach(t),cd=c(Fe),b(pt.$$.fragment,Fe),hd=c(Fe),ys=s(Fe,"P",{});var bp=n(ys);pd=i(bp,"Examples:"),bp.forEach(t),md=c(Fe),b(_o.$$.fragment,Fe),Fe.forEach(t),de.forEach(t),xn=c(o),Ke=s(o,"H2",{class:!0});var Hn=n(Ke);mt=s(Hn,"A",{id:!0,class:!0,href:!0});var yp=n(mt);$s=s(yp,"SPAN",{});var $p=n($s);b(vo.$$.fragment,$p),$p.forEach(t),yp.forEach(t),fd=c(Hn),xs=s(Hn,"SPAN",{});var xp=n(xs);ud=i(xp,"TFViTForImageClassification"),xp.forEach(t),Hn.forEach(t),Vn=c(o),O=s(o,"DIV",{class:!0});var ce=n(O);b(To.$$.fragment,ce),gd=c(ce),Vs=s(ce,"P",{});var Vp=n(Vs);_d=i(Vp,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Vp.forEach(t),vd=c(ce),wo=s(ce,"P",{});var Jn=n(wo);Td=i(Jn,"This model inherits from "),va=s(Jn,"A",{href:!0});var Fp=n(va);wd=i(Fp,"TFPreTrainedModel"),Fp.forEach(t),bd=i(Jn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jn.forEach(t),yd=c(ce),bo=s(ce,"P",{});var Kn=n(bo);$d=i(Kn,"This model is also a "),yo=s(Kn,"A",{href:!0,rel:!0});var Ep=n(yo);xd=i(Ep,"tf.keras.Model"),Ep.forEach(t),Vd=i(Kn,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kn.forEach(t),Fd=c(ce),b(ft.$$.fragment,ce),Ed=c(ce),X=s(ce,"DIV",{class:!0});var Ee=n(X);b($o.$$.fragment,Ee),kd=c(Ee),Ge=s(Ee,"P",{});var za=n(Ge);Id=i(za,"The "),Ta=s(za,"A",{href:!0});var kp=n(Ta);Md=i(kp,"TFViTForImageClassification"),kp.forEach(t),jd=i(za," forward method, overrides the "),Fs=s(za,"CODE",{});var Ip=n(Fs);Pd=i(Ip,"__call__"),Ip.forEach(t),Cd=i(za," special method."),za.forEach(t),Ad=c(Ee),b(ut.$$.fragment,Ee),qd=c(Ee),Es=s(Ee,"P",{});var Mp=n(Es);zd=i(Mp,"Examples:"),Mp.forEach(t),Nd=c(Ee),b(xo.$$.fragment,Ee),Ee.forEach(t),ce.forEach(t),Fn=c(o),Xe=s(o,"H2",{class:!0});var Gn=n(Xe);gt=s(Gn,"A",{id:!0,class:!0,href:!0});var jp=n(gt);ks=s(jp,"SPAN",{});var Pp=n(ks);b(Vo.$$.fragment,Pp),Pp.forEach(t),jp.forEach(t),Ld=c(Gn),Is=s(Gn,"SPAN",{});var Cp=n(Is);Dd=i(Cp,"FlaxVitModel"),Cp.forEach(t),Gn.forEach(t),En=c(o),A=s(o,"DIV",{class:!0});var ee=n(A);b(Fo.$$.fragment,ee),Od=c(ee),Ms=s(ee,"P",{});var Ap=n(Ms);Sd=i(Ap,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Ap.forEach(t),Wd=c(ee),Eo=s(ee,"P",{});var Xn=n(Eo);Ud=i(Xn,"This model inherits from "),wa=s(Xn,"A",{href:!0});var qp=n(wa);Bd=i(qp,"FlaxPreTrainedModel"),qp.forEach(t),Rd=i(Xn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Xn.forEach(t),Hd=c(ee),ko=s(ee,"P",{});var Zn=n(ko);Jd=i(Zn,"This model is also a Flax Linen "),Io=s(Zn,"A",{href:!0,rel:!0});var zp=n(Io);Kd=i(zp,"flax.linen.Module"),zp.forEach(t),Gd=i(Zn,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Zn.forEach(t),Xd=c(ee),js=s(ee,"P",{});var Np=n(js);Zd=i(Np,"Finally, this model supports inherent JAX features such as:"),Np.forEach(t),Qd=c(ee),ue=s(ee,"UL",{});var $t=n(ue);Ps=s($t,"LI",{});var Lp=n(Ps);Mo=s(Lp,"A",{href:!0,rel:!0});var Dp=n(Mo);Yd=i(Dp,"Just-In-Time (JIT) compilation"),Dp.forEach(t),Lp.forEach(t),ec=c($t),Cs=s($t,"LI",{});var Op=n(Cs);jo=s(Op,"A",{href:!0,rel:!0});var Sp=n(jo);tc=i(Sp,"Automatic Differentiation"),Sp.forEach(t),Op.forEach(t),oc=c($t),As=s($t,"LI",{});var Wp=n(As);Po=s(Wp,"A",{href:!0,rel:!0});var Up=n(Po);ac=i(Up,"Vectorization"),Up.forEach(t),Wp.forEach(t),sc=c($t),qs=s($t,"LI",{});var Bp=n(qs);Co=s(Bp,"A",{href:!0,rel:!0});var Rp=n(Co);nc=i(Rp,"Parallelization"),Rp.forEach(t),Bp.forEach(t),$t.forEach(t),rc=c(ee),Z=s(ee,"DIV",{class:!0});var ke=n(Z);b(Ao.$$.fragment,ke),ic=c(ke),Ze=s(ke,"P",{});var Na=n(Ze);lc=i(Na,"The "),zs=s(Na,"CODE",{});var Hp=n(zs);dc=i(Hp,"FlaxViTPreTrainedModel"),Hp.forEach(t),cc=i(Na,"forward method, overrides the "),Ns=s(Na,"CODE",{});var Jp=n(Ns);hc=i(Jp,"__call__"),Jp.forEach(t),pc=i(Na," special method."),Na.forEach(t),mc=c(ke),b(_t.$$.fragment,ke),fc=c(ke),Ls=s(ke,"P",{});var Kp=n(Ls);uc=i(Kp,"Examples:"),Kp.forEach(t),gc=c(ke),b(qo.$$.fragment,ke),ke.forEach(t),ee.forEach(t),kn=c(o),Qe=s(o,"H2",{class:!0});var Qn=n(Qe);vt=s(Qn,"A",{id:!0,class:!0,href:!0});var Gp=n(vt);Ds=s(Gp,"SPAN",{});var Xp=n(Ds);b(zo.$$.fragment,Xp),Xp.forEach(t),Gp.forEach(t),_c=c(Qn),Os=s(Qn,"SPAN",{});var Zp=n(Os);vc=i(Zp,"FlaxViTForImageClassification"),Zp.forEach(t),Qn.forEach(t),In=c(o),q=s(o,"DIV",{class:!0});var te=n(q);b(No.$$.fragment,te),Tc=c(te),Ss=s(te,"P",{});var Qp=n(Ss);wc=i(Qp,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Qp.forEach(t),bc=c(te),Lo=s(te,"P",{});var Yn=n(Lo);yc=i(Yn,"This model inherits from "),ba=s(Yn,"A",{href:!0});var Yp=n(ba);$c=i(Yp,"FlaxPreTrainedModel"),Yp.forEach(t),xc=i(Yn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yn.forEach(t),Vc=c(te),Do=s(te,"P",{});var er=n(Do);Fc=i(er,"This model is also a Flax Linen "),Oo=s(er,"A",{href:!0,rel:!0});var em=n(Oo);Ec=i(em,"flax.linen.Module"),em.forEach(t),kc=i(er,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),er.forEach(t),Ic=c(te),Ws=s(te,"P",{});var tm=n(Ws);Mc=i(tm,"Finally, this model supports inherent JAX features such as:"),tm.forEach(t),jc=c(te),ge=s(te,"UL",{});var xt=n(ge);Us=s(xt,"LI",{});var om=n(Us);So=s(om,"A",{href:!0,rel:!0});var am=n(So);Pc=i(am,"Just-In-Time (JIT) compilation"),am.forEach(t),om.forEach(t),Cc=c(xt),Bs=s(xt,"LI",{});var sm=n(Bs);Wo=s(sm,"A",{href:!0,rel:!0});var nm=n(Wo);Ac=i(nm,"Automatic Differentiation"),nm.forEach(t),sm.forEach(t),qc=c(xt),Rs=s(xt,"LI",{});var rm=n(Rs);Uo=s(rm,"A",{href:!0,rel:!0});var im=n(Uo);zc=i(im,"Vectorization"),im.forEach(t),rm.forEach(t),Nc=c(xt),Hs=s(xt,"LI",{});var lm=n(Hs);Bo=s(lm,"A",{href:!0,rel:!0});var dm=n(Bo);Lc=i(dm,"Parallelization"),dm.forEach(t),lm.forEach(t),xt.forEach(t),Dc=c(te),Q=s(te,"DIV",{class:!0});var Ie=n(Q);b(Ro.$$.fragment,Ie),Oc=c(Ie),Ye=s(Ie,"P",{});var La=n(Ye);Sc=i(La,"The "),Js=s(La,"CODE",{});var cm=n(Js);Wc=i(cm,"FlaxViTPreTrainedModel"),cm.forEach(t),Uc=i(La,"forward method, overrides the "),Ks=s(La,"CODE",{});var hm=n(Ks);Bc=i(hm,"__call__"),hm.forEach(t),Rc=i(La," special method."),La.forEach(t),Hc=c(Ie),b(Tt.$$.fragment,Ie),Jc=c(Ie),Gs=s(Ie,"P",{});var pm=n(Gs);Kc=i(pm,"Example:"),pm.forEach(t),Gc=c(Ie),b(Ho.$$.fragment,Ie),Ie.forEach(t),te.forEach(t),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(Im)),l(g,"id","vision-transformer-vit"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#vision-transformer-vit"),l(m,"class","relative group"),l(U,"id","overview"),l(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(U,"href","#overview"),l(j,"class","relative group"),l(se,"href","https://arxiv.org/abs/2010.11929"),l(se,"rel","nofollow"),l(Et,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),l(Et,"rel","nofollow"),l(Yo,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor"),l(It,"href","https://huggingface.co/models?search=vit"),l(It,"rel","nofollow"),l(Mt,"href","http://www.image-net.org/"),l(Mt,"rel","nofollow"),l(jt,"href","http://www.image-net.org/challenges/LSVRC/2012/"),l(jt,"rel","nofollow"),l(Pt,"href","https://arxiv.org/abs/1906.06423"),l(Pt,"rel","nofollow"),l(Ct,"href","https://arxiv.org/abs/1912.11370"),l(Ct,"rel","nofollow"),l(ta,"href","deit"),l(oa,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),l(aa,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),l(sa,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor"),l(ra,"href","beit"),l(qt,"href","https://huggingface.co/models?other=dino"),l(qt,"rel","nofollow"),l(la,"href","vit_mae"),l(zt,"href","https://huggingface.co/nielsr"),l(zt,"rel","nofollow"),l(Nt,"href","https://github.com/google-research/vision_transformer"),l(Nt,"rel","nofollow"),l(Lt,"href","https://github.com/rwightman/pytorch-image-models"),l(Lt,"rel","nofollow"),l(tt,"id","transformers.ViTConfig"),l(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(tt,"href","#transformers.ViTConfig"),l(qe,"class","relative group"),l(da,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),l(St,"href","https://huggingface.co/google/vit-base-patch16-224"),l(St,"rel","nofollow"),l(ca,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(ha,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(B,"class","docstring"),l(ot,"id","transformers.ViTFeatureExtractor"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.ViTFeatureExtractor"),l(Le,"class","relative group"),l(pa,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),l(be,"class","docstring"),l(ne,"class","docstring"),l(st,"id","transformers.ViTModel"),l(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(st,"href","#transformers.ViTModel"),l(De,"class","relative group"),l(Xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Xt,"rel","nofollow"),l(ma,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),l(H,"class","docstring"),l(me,"class","docstring"),l(rt,"id","transformers.ViTForMaskedImageModeling"),l(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(rt,"href","#transformers.ViTForMaskedImageModeling"),l(Se,"class","relative group"),l(to,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(to,"rel","nofollow"),l(fa,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForMaskedImageModeling"),l(J,"class","docstring"),l(fe,"class","docstring"),l(lt,"id","transformers.ViTForImageClassification"),l(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lt,"href","#transformers.ViTForImageClassification"),l(Be,"class","relative group"),l(io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(io,"rel","nofollow"),l(ua,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),l(K,"class","docstring"),l(re,"class","docstring"),l(ct,"id","transformers.TFViTModel"),l(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ct,"href","#transformers.TFViTModel"),l(He,"class","relative group"),l(ga,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),l(uo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(uo,"rel","nofollow"),l(_a,"href","/docs/transformers/main/en/model_doc/vit#transformers.TFViTModel"),l(G,"class","docstring"),l(D,"class","docstring"),l(mt,"id","transformers.TFViTForImageClassification"),l(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(mt,"href","#transformers.TFViTForImageClassification"),l(Ke,"class","relative group"),l(va,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),l(yo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(yo,"rel","nofollow"),l(Ta,"href","/docs/transformers/main/en/model_doc/vit#transformers.TFViTForImageClassification"),l(X,"class","docstring"),l(O,"class","docstring"),l(gt,"id","transformers.FlaxViTModel"),l(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(gt,"href","#transformers.FlaxViTModel"),l(Xe,"class","relative group"),l(wa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(Io,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Io,"rel","nofollow"),l(Mo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(Mo,"rel","nofollow"),l(jo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(jo,"rel","nofollow"),l(Po,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Po,"rel","nofollow"),l(Co,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Co,"rel","nofollow"),l(Z,"class","docstring"),l(A,"class","docstring"),l(vt,"id","transformers.FlaxViTForImageClassification"),l(vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(vt,"href","#transformers.FlaxViTForImageClassification"),l(Qe,"class","relative group"),l(ba,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(Oo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Oo,"rel","nofollow"),l(So,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(So,"rel","nofollow"),l(Wo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(Wo,"rel","nofollow"),l(Uo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Uo,"rel","nofollow"),l(Bo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Bo,"rel","nofollow"),l(Q,"class","docstring"),l(q,"class","docstring")},m(o,p){e(document.head,h),f(o,v,p),f(o,m,p),e(m,g),e(g,T),y(_,T,null),e(m,u),e(m,F),e(F,he),f(o,R,p),y(k,o,p),f(o,ie,p),f(o,j,p),e(j,U),e(U,oe),y(C,oe,null),e(j,pe),e(j,ae),e(ae,E),f(o,M,p),f(o,z,p),e(z,Me),e(z,se),e(se,L),e(z,je),f(o,Te,p),f(o,Xo,p),e(Xo,tr),f(o,sn,p),f(o,Zo,p),e(Zo,Da),e(Da,or),f(o,nn,p),f(o,Qo,p),e(Qo,ar),f(o,rn,p),f(o,N,p),e(N,Ft),e(Ft,sr),e(Ft,Et),e(Et,nr),e(Ft,rr),e(N,ir),e(N,Oa),e(Oa,lr),e(N,dr),e(N,kt),e(kt,cr),e(kt,Yo),e(Yo,hr),e(kt,pr),e(N,mr),e(N,Pe),e(Pe,fr),e(Pe,Sa),e(Sa,ur),e(Pe,gr),e(Pe,It),e(It,_r),e(Pe,vr),e(N,Tr),e(N,Ce),e(Ce,wr),e(Ce,Mt),e(Mt,br),e(Ce,yr),e(Ce,jt),e(jt,$r),e(Ce,xr),e(N,Vr),e(N,Ae),e(Ae,Fr),e(Ae,Pt),e(Pt,Er),e(Ae,kr),e(Ae,Ct),e(Ct,Ir),e(Ae,Mr),e(N,jr),e(N,Wa),e(Wa,Pr),f(o,ln,p),f(o,ea,p),e(ea,Cr),f(o,dn,p),f(o,le,p),e(le,Ua),e(Ua,P),e(P,ta),e(ta,Ar),e(P,qr),e(P,oa),e(oa,zr),e(P,Nr),e(P,aa),e(aa,Lr),e(P,Dr),e(P,Ba),e(Ba,Or),e(P,Sr),e(P,Ra),e(Ra,Wr),e(P,Ur),e(P,Ha),e(Ha,Br),e(P,Rr),e(P,Ja),e(Ja,Hr),e(P,Jr),e(P,sa),e(sa,Kr),e(P,Gr),e(le,Xr),e(le,Ka),e(Ka,na),e(na,ra),e(ra,Zr),e(na,Qr),e(le,Yr),e(le,Ga),e(Ga,At),e(At,ei),e(At,qt),e(qt,ti),e(At,oi),e(le,ai),e(le,Xa),e(Xa,ia),e(ia,la),e(la,si),e(ia,ni),f(o,cn,p),f(o,we,p),e(we,ri),e(we,zt),e(zt,ii),e(we,li),e(we,Nt),e(Nt,di),e(we,ci),f(o,hn,p),f(o,et,p),e(et,hi),e(et,Lt),e(Lt,pi),e(et,mi),f(o,pn,p),f(o,qe,p),e(qe,tt),e(tt,Za),y(Dt,Za,null),e(qe,fi),e(qe,Qa),e(Qa,ui),f(o,mn,p),f(o,B,p),y(Ot,B,null),e(B,gi),e(B,ze),e(ze,_i),e(ze,da),e(da,vi),e(ze,Ti),e(ze,St),e(St,wi),e(ze,bi),e(B,yi),e(B,Ne),e(Ne,$i),e(Ne,ca),e(ca,xi),e(Ne,Vi),e(Ne,ha),e(ha,Fi),e(Ne,Ei),e(B,ki),e(B,Ya),e(Ya,Ii),e(B,Mi),y(Wt,B,null),f(o,fn,p),f(o,Le,p),e(Le,ot),e(ot,es),y(Ut,es,null),e(Le,ji),e(Le,ts),e(ts,Pi),f(o,un,p),f(o,ne,p),y(Bt,ne,null),e(ne,Ci),e(ne,os),e(os,Ai),e(ne,qi),e(ne,Rt),e(Rt,zi),e(Rt,pa),e(pa,Ni),e(Rt,Li),e(ne,Di),e(ne,be),y(Ht,be,null),e(be,Oi),e(be,as),e(as,Si),e(be,Wi),y(at,be,null),f(o,gn,p),f(o,De,p),e(De,st),e(st,ss),y(Jt,ss,null),e(De,Ui),e(De,ns),e(ns,Bi),f(o,_n,p),f(o,me,p),y(Kt,me,null),e(me,Ri),e(me,Gt),e(Gt,Hi),e(Gt,Xt),e(Xt,Ji),e(Gt,Ki),e(me,Gi),e(me,H),y(Zt,H,null),e(H,Xi),e(H,Oe),e(Oe,Zi),e(Oe,ma),e(ma,Qi),e(Oe,Yi),e(Oe,rs),e(rs,el),e(Oe,tl),e(H,ol),y(nt,H,null),e(H,al),e(H,is),e(is,sl),e(H,nl),y(Qt,H,null),f(o,vn,p),f(o,Se,p),e(Se,rt),e(rt,ls),y(Yt,ls,null),e(Se,rl),e(Se,ds),e(ds,il),f(o,Tn,p),f(o,fe,p),y(eo,fe,null),e(fe,ll),e(fe,We),e(We,dl),e(We,cs),e(cs,cl),e(We,hl),e(We,to),e(to,pl),e(We,ml),e(fe,fl),e(fe,J),y(oo,J,null),e(J,ul),e(J,Ue),e(Ue,gl),e(Ue,fa),e(fa,_l),e(Ue,vl),e(Ue,hs),e(hs,Tl),e(Ue,wl),e(J,bl),y(it,J,null),e(J,yl),e(J,ps),e(ps,$l),e(J,xl),y(ao,J,null),f(o,wn,p),f(o,Be,p),e(Be,lt),e(lt,ms),y(so,ms,null),e(Be,Vl),e(Be,fs),e(fs,Fl),f(o,bn,p),f(o,re,p),y(no,re,null),e(re,El),e(re,us),e(us,kl),e(re,Il),e(re,ro),e(ro,Ml),e(ro,io),e(io,jl),e(ro,Pl),e(re,Cl),e(re,K),y(lo,K,null),e(K,Al),e(K,Re),e(Re,ql),e(Re,ua),e(ua,zl),e(Re,Nl),e(Re,gs),e(gs,Ll),e(Re,Dl),e(K,Ol),y(dt,K,null),e(K,Sl),e(K,_s),e(_s,Wl),e(K,Ul),y(co,K,null),f(o,yn,p),f(o,He,p),e(He,ct),e(ct,vs),y(ho,vs,null),e(He,Bl),e(He,Ts),e(Ts,Rl),f(o,$n,p),f(o,D,p),y(po,D,null),e(D,Hl),e(D,ws),e(ws,Jl),e(D,Kl),e(D,mo),e(mo,Gl),e(mo,ga),e(ga,Xl),e(mo,Zl),e(D,Ql),e(D,fo),e(fo,Yl),e(fo,uo),e(uo,ed),e(fo,td),e(D,od),y(ht,D,null),e(D,ad),e(D,G),y(go,G,null),e(G,sd),e(G,Je),e(Je,nd),e(Je,_a),e(_a,rd),e(Je,id),e(Je,bs),e(bs,ld),e(Je,dd),e(G,cd),y(pt,G,null),e(G,hd),e(G,ys),e(ys,pd),e(G,md),y(_o,G,null),f(o,xn,p),f(o,Ke,p),e(Ke,mt),e(mt,$s),y(vo,$s,null),e(Ke,fd),e(Ke,xs),e(xs,ud),f(o,Vn,p),f(o,O,p),y(To,O,null),e(O,gd),e(O,Vs),e(Vs,_d),e(O,vd),e(O,wo),e(wo,Td),e(wo,va),e(va,wd),e(wo,bd),e(O,yd),e(O,bo),e(bo,$d),e(bo,yo),e(yo,xd),e(bo,Vd),e(O,Fd),y(ft,O,null),e(O,Ed),e(O,X),y($o,X,null),e(X,kd),e(X,Ge),e(Ge,Id),e(Ge,Ta),e(Ta,Md),e(Ge,jd),e(Ge,Fs),e(Fs,Pd),e(Ge,Cd),e(X,Ad),y(ut,X,null),e(X,qd),e(X,Es),e(Es,zd),e(X,Nd),y(xo,X,null),f(o,Fn,p),f(o,Xe,p),e(Xe,gt),e(gt,ks),y(Vo,ks,null),e(Xe,Ld),e(Xe,Is),e(Is,Dd),f(o,En,p),f(o,A,p),y(Fo,A,null),e(A,Od),e(A,Ms),e(Ms,Sd),e(A,Wd),e(A,Eo),e(Eo,Ud),e(Eo,wa),e(wa,Bd),e(Eo,Rd),e(A,Hd),e(A,ko),e(ko,Jd),e(ko,Io),e(Io,Kd),e(ko,Gd),e(A,Xd),e(A,js),e(js,Zd),e(A,Qd),e(A,ue),e(ue,Ps),e(Ps,Mo),e(Mo,Yd),e(ue,ec),e(ue,Cs),e(Cs,jo),e(jo,tc),e(ue,oc),e(ue,As),e(As,Po),e(Po,ac),e(ue,sc),e(ue,qs),e(qs,Co),e(Co,nc),e(A,rc),e(A,Z),y(Ao,Z,null),e(Z,ic),e(Z,Ze),e(Ze,lc),e(Ze,zs),e(zs,dc),e(Ze,cc),e(Ze,Ns),e(Ns,hc),e(Ze,pc),e(Z,mc),y(_t,Z,null),e(Z,fc),e(Z,Ls),e(Ls,uc),e(Z,gc),y(qo,Z,null),f(o,kn,p),f(o,Qe,p),e(Qe,vt),e(vt,Ds),y(zo,Ds,null),e(Qe,_c),e(Qe,Os),e(Os,vc),f(o,In,p),f(o,q,p),y(No,q,null),e(q,Tc),e(q,Ss),e(Ss,wc),e(q,bc),e(q,Lo),e(Lo,yc),e(Lo,ba),e(ba,$c),e(Lo,xc),e(q,Vc),e(q,Do),e(Do,Fc),e(Do,Oo),e(Oo,Ec),e(Do,kc),e(q,Ic),e(q,Ws),e(Ws,Mc),e(q,jc),e(q,ge),e(ge,Us),e(Us,So),e(So,Pc),e(ge,Cc),e(ge,Bs),e(Bs,Wo),e(Wo,Ac),e(ge,qc),e(ge,Rs),e(Rs,Uo),e(Uo,zc),e(ge,Nc),e(ge,Hs),e(Hs,Bo),e(Bo,Lc),e(q,Dc),e(q,Q),y(Ro,Q,null),e(Q,Oc),e(Q,Ye),e(Ye,Sc),e(Ye,Js),e(Js,Wc),e(Ye,Uc),e(Ye,Ks),e(Ks,Bc),e(Ye,Rc),e(Q,Hc),y(Tt,Q,null),e(Q,Jc),e(Q,Gs),e(Gs,Kc),e(Q,Gc),y(Ho,Q,null),Mn=!0},p(o,[p]){const Jo={};p&2&&(Jo.$$scope={dirty:p,ctx:o}),k.$set(Jo);const Xs={};p&2&&(Xs.$$scope={dirty:p,ctx:o}),at.$set(Xs);const Zs={};p&2&&(Zs.$$scope={dirty:p,ctx:o}),nt.$set(Zs);const Qs={};p&2&&(Qs.$$scope={dirty:p,ctx:o}),it.$set(Qs);const Ko={};p&2&&(Ko.$$scope={dirty:p,ctx:o}),dt.$set(Ko);const Ys={};p&2&&(Ys.$$scope={dirty:p,ctx:o}),ht.$set(Ys);const en={};p&2&&(en.$$scope={dirty:p,ctx:o}),pt.$set(en);const tn={};p&2&&(tn.$$scope={dirty:p,ctx:o}),ft.$set(tn);const Go={};p&2&&(Go.$$scope={dirty:p,ctx:o}),ut.$set(Go);const on={};p&2&&(on.$$scope={dirty:p,ctx:o}),_t.$set(on);const an={};p&2&&(an.$$scope={dirty:p,ctx:o}),Tt.$set(an)},i(o){Mn||($(_.$$.fragment,o),$(k.$$.fragment,o),$(C.$$.fragment,o),$(Dt.$$.fragment,o),$(Ot.$$.fragment,o),$(Wt.$$.fragment,o),$(Ut.$$.fragment,o),$(Bt.$$.fragment,o),$(Ht.$$.fragment,o),$(at.$$.fragment,o),$(Jt.$$.fragment,o),$(Kt.$$.fragment,o),$(Zt.$$.fragment,o),$(nt.$$.fragment,o),$(Qt.$$.fragment,o),$(Yt.$$.fragment,o),$(eo.$$.fragment,o),$(oo.$$.fragment,o),$(it.$$.fragment,o),$(ao.$$.fragment,o),$(so.$$.fragment,o),$(no.$$.fragment,o),$(lo.$$.fragment,o),$(dt.$$.fragment,o),$(co.$$.fragment,o),$(ho.$$.fragment,o),$(po.$$.fragment,o),$(ht.$$.fragment,o),$(go.$$.fragment,o),$(pt.$$.fragment,o),$(_o.$$.fragment,o),$(vo.$$.fragment,o),$(To.$$.fragment,o),$(ft.$$.fragment,o),$($o.$$.fragment,o),$(ut.$$.fragment,o),$(xo.$$.fragment,o),$(Vo.$$.fragment,o),$(Fo.$$.fragment,o),$(Ao.$$.fragment,o),$(_t.$$.fragment,o),$(qo.$$.fragment,o),$(zo.$$.fragment,o),$(No.$$.fragment,o),$(Ro.$$.fragment,o),$(Tt.$$.fragment,o),$(Ho.$$.fragment,o),Mn=!0)},o(o){x(_.$$.fragment,o),x(k.$$.fragment,o),x(C.$$.fragment,o),x(Dt.$$.fragment,o),x(Ot.$$.fragment,o),x(Wt.$$.fragment,o),x(Ut.$$.fragment,o),x(Bt.$$.fragment,o),x(Ht.$$.fragment,o),x(at.$$.fragment,o),x(Jt.$$.fragment,o),x(Kt.$$.fragment,o),x(Zt.$$.fragment,o),x(nt.$$.fragment,o),x(Qt.$$.fragment,o),x(Yt.$$.fragment,o),x(eo.$$.fragment,o),x(oo.$$.fragment,o),x(it.$$.fragment,o),x(ao.$$.fragment,o),x(so.$$.fragment,o),x(no.$$.fragment,o),x(lo.$$.fragment,o),x(dt.$$.fragment,o),x(co.$$.fragment,o),x(ho.$$.fragment,o),x(po.$$.fragment,o),x(ht.$$.fragment,o),x(go.$$.fragment,o),x(pt.$$.fragment,o),x(_o.$$.fragment,o),x(vo.$$.fragment,o),x(To.$$.fragment,o),x(ft.$$.fragment,o),x($o.$$.fragment,o),x(ut.$$.fragment,o),x(xo.$$.fragment,o),x(Vo.$$.fragment,o),x(Fo.$$.fragment,o),x(Ao.$$.fragment,o),x(_t.$$.fragment,o),x(qo.$$.fragment,o),x(zo.$$.fragment,o),x(No.$$.fragment,o),x(Ro.$$.fragment,o),x(Tt.$$.fragment,o),x(Ho.$$.fragment,o),Mn=!1},d(o){t(h),o&&t(v),o&&t(m),V(_),o&&t(R),V(k,o),o&&t(ie),o&&t(j),V(C),o&&t(M),o&&t(z),o&&t(Te),o&&t(Xo),o&&t(sn),o&&t(Zo),o&&t(nn),o&&t(Qo),o&&t(rn),o&&t(N),o&&t(ln),o&&t(ea),o&&t(dn),o&&t(le),o&&t(cn),o&&t(we),o&&t(hn),o&&t(et),o&&t(pn),o&&t(qe),V(Dt),o&&t(mn),o&&t(B),V(Ot),V(Wt),o&&t(fn),o&&t(Le),V(Ut),o&&t(un),o&&t(ne),V(Bt),V(Ht),V(at),o&&t(gn),o&&t(De),V(Jt),o&&t(_n),o&&t(me),V(Kt),V(Zt),V(nt),V(Qt),o&&t(vn),o&&t(Se),V(Yt),o&&t(Tn),o&&t(fe),V(eo),V(oo),V(it),V(ao),o&&t(wn),o&&t(Be),V(so),o&&t(bn),o&&t(re),V(no),V(lo),V(dt),V(co),o&&t(yn),o&&t(He),V(ho),o&&t($n),o&&t(D),V(po),V(ht),V(go),V(pt),V(_o),o&&t(xn),o&&t(Ke),V(vo),o&&t(Vn),o&&t(O),V(To),V(ft),V($o),V(ut),V(xo),o&&t(Fn),o&&t(Xe),V(Vo),o&&t(En),o&&t(A),V(Fo),V(Ao),V(_t),V(qo),o&&t(kn),o&&t(Qe),V(zo),o&&t(In),o&&t(q),V(No),V(Ro),V(Tt),V(Ho)}}}const Im={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.ViTFeatureExtractor",title:"ViTFeatureExtractor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForMaskedImageModeling",title:"ViTForMaskedImageModeling"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function Mm(I,h,v){let{fw:m}=h;return I.$$set=g=>{"fw"in g&&v(0,m=g.fw)},[m]}class Nm extends mm{constructor(h){super();fm(this,h,Mm,km,um,{fw:0})}}export{Nm as default,Im as metadata};
