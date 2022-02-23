import{S as up,i as gp,s as _p,e as a,k as d,w,t as r,M as vp,c as s,d as t,m as c,a as n,x as b,h as i,b as l,F as e,g as f,y,q as $,o as x,B as F}from"../../chunks/vendor-ab4e3193.js";import{T as Fe}from"../../chunks/Tip-b5c6375a.js";import{D as U}from"../../chunks/Docstring-b69c0bd4.js";import{C as zo}from"../../chunks/CodeBlock-516df0c5.js";import{I as Ee}from"../../chunks/IconCopyLink-d992940d.js";import"../../chunks/CopyButton-204b56db.js";function Tp(I){let h,v,m,u,T;return{c(){h=a("p"),v=r(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=a("a"),u=r("Github Issue"),T=r("."),this.h()},l(_){h=s(_,"P",{});var g=n(h);v=i(g,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=s(g,"A",{href:!0,rel:!0});var V=n(m);u=i(V,"Github Issue"),V.forEach(t),T=i(g,"."),g.forEach(t),this.h()},h(){l(m,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),l(m,"rel","nofollow")},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function wp(I){let h,v;return{c(){h=a("p"),v=r(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(m){h=s(m,"P",{});var u=n(h);v=i(u,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),u.forEach(t)},m(m,u){f(m,h,u),e(h,v)},d(m){m&&t(h)}}}function bp(I){let h,v,m,u,T;return{c(){h=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=n(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var V=n(m);u=i(V,"Module"),V.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function yp(I){let h,v,m,u,T;return{c(){h=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=n(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var V=n(m);u=i(V,"Module"),V.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function $p(I){let h,v,m,u,T,_,g,V,ce,R,k,re,M,W,te,C,he,oe;return{c(){h=a("p"),v=r("TF 2.0 models accepts two formats as inputs:"),m=d(),u=a("ul"),T=a("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),V=a("li"),ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),re=r("This second option is useful when using "),M=a("code"),W=r("tf.keras.Model.fit"),te=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),C=a("code"),he=r("model(inputs)"),oe=r(".")},l(E){h=s(E,"P",{});var j=n(h);v=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=c(E),u=s(E,"UL",{});var z=n(u);T=s(z,"LI",{});var Ve=n(T);_=i(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),g=c(z),V=s(z,"LI",{});var ae=n(V);ce=i(ae,"having all inputs as a list, tuple or dict in the first positional arguments."),ae.forEach(t),z.forEach(t),R=c(E),k=s(E,"P",{});var L=n(k);re=i(L,"This second option is useful when using "),M=s(L,"CODE",{});var ke=n(M);W=i(ke,"tf.keras.Model.fit"),ke.forEach(t),te=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),C=s(L,"CODE",{});var ue=n(C);he=i(ue,"model(inputs)"),ue.forEach(t),oe=i(L,"."),L.forEach(t)},m(E,j){f(E,h,j),e(h,v),f(E,m,j),f(E,u,j),e(u,T),e(T,_),e(u,g),e(u,V),e(V,ce),f(E,R,j),f(E,k,j),e(k,re),e(k,M),e(M,W),e(k,te),e(k,C),e(C,he),e(k,oe)},d(E){E&&t(h),E&&t(m),E&&t(u),E&&t(R),E&&t(k)}}}function xp(I){let h,v,m,u,T;return{c(){h=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=n(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var V=n(m);u=i(V,"Module"),V.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function Fp(I){let h,v,m,u,T,_,g,V,ce,R,k,re,M,W,te,C,he,oe;return{c(){h=a("p"),v=r("TF 2.0 models accepts two formats as inputs:"),m=d(),u=a("ul"),T=a("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),V=a("li"),ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),re=r("This second option is useful when using "),M=a("code"),W=r("tf.keras.Model.fit"),te=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),C=a("code"),he=r("model(inputs)"),oe=r(".")},l(E){h=s(E,"P",{});var j=n(h);v=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=c(E),u=s(E,"UL",{});var z=n(u);T=s(z,"LI",{});var Ve=n(T);_=i(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),g=c(z),V=s(z,"LI",{});var ae=n(V);ce=i(ae,"having all inputs as a list, tuple or dict in the first positional arguments."),ae.forEach(t),z.forEach(t),R=c(E),k=s(E,"P",{});var L=n(k);re=i(L,"This second option is useful when using "),M=s(L,"CODE",{});var ke=n(M);W=i(ke,"tf.keras.Model.fit"),ke.forEach(t),te=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),C=s(L,"CODE",{});var ue=n(C);he=i(ue,"model(inputs)"),ue.forEach(t),oe=i(L,"."),L.forEach(t)},m(E,j){f(E,h,j),e(h,v),f(E,m,j),f(E,u,j),e(u,T),e(T,_),e(u,g),e(u,V),e(V,ce),f(E,R,j),f(E,k,j),e(k,re),e(k,M),e(M,W),e(k,te),e(k,C),e(C,he),e(k,oe)},d(E){E&&t(h),E&&t(m),E&&t(u),E&&t(R),E&&t(k)}}}function Ep(I){let h,v,m,u,T;return{c(){h=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=n(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var V=n(m);u=i(V,"Module"),V.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function Vp(I){let h,v,m,u,T;return{c(){h=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=n(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var V=n(m);u=i(V,"Module"),V.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function kp(I){let h,v,m,u,T;return{c(){h=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=n(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var V=n(m);u=i(V,"Module"),V.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function Ip(I){let h,v,m,u,T,_,g,V,ce,R,k,re,M,W,te,C,he,oe,E,j,z,Ve,ae,L,ke,ue,No,In,As,Lo,ba,jn,zs,Do,Mn,Ns,N,_t,Pn,vt,Cn,qn,An,ya,zn,Nn,Tt,Ln,Oo,Dn,On,Sn,Ie,Wn,$a,Bn,Un,wt,Rn,Hn,Jn,je,Kn,bt,Gn,Xn,yt,Zn,Qn,Yn,Me,er,$t,tr,or,xt,ar,sr,nr,xa,rr,Ls,So,ir,Ds,ie,Fa,P,Wo,lr,dr,Bo,cr,hr,Uo,pr,fr,Ea,mr,ur,Va,gr,_r,ka,vr,Tr,Ia,wr,br,Ro,yr,$r,xr,ja,Ho,Jo,Fr,Er,Vr,Ma,Ft,kr,Et,Ir,jr,Mr,Pa,Ko,Go,Pr,Cr,Os,ge,qr,Vt,Ar,zr,kt,Nr,Lr,Ss,Ke,Dr,It,Or,Sr,Ws,Pe,Ge,Ca,jt,Wr,qa,Br,Bs,B,Mt,Ur,Ce,Rr,Xo,Hr,Jr,Pt,Kr,Gr,Xr,qe,Zr,Zo,Qr,Yr,Qo,ei,ti,oi,Aa,ai,si,Ct,Us,Ae,Xe,za,qt,ni,Na,ri,Rs,se,At,ii,La,li,di,zt,ci,Da,hi,pi,fi,_e,Nt,mi,Oa,ui,gi,Ze,Hs,ze,Qe,Sa,Lt,_i,Wa,vi,Js,pe,Dt,Ti,Ot,wi,St,bi,yi,$i,H,Wt,xi,Ne,Fi,Yo,Ei,Vi,Ba,ki,Ii,ji,Ye,Mi,Ua,Pi,Ci,Bt,Ks,Le,et,Ra,Ut,qi,Ha,Ai,Gs,ne,Rt,zi,Ja,Ni,Li,Ht,Di,Jt,Oi,Si,Wi,J,Kt,Bi,De,Ui,ea,Ri,Hi,Ka,Ji,Ki,Gi,tt,Xi,Ga,Zi,Qi,Gt,Xs,Oe,ot,Xa,Xt,Yi,Za,el,Zs,D,Zt,tl,Qa,ol,al,Qt,sl,ta,nl,rl,il,Yt,ll,eo,dl,cl,hl,at,pl,K,to,fl,Se,ml,oa,ul,gl,Ya,_l,vl,Tl,st,wl,es,bl,yl,oo,Qs,We,nt,ts,ao,$l,os,xl,Ys,O,so,Fl,as,El,Vl,no,kl,aa,Il,jl,Ml,ro,Pl,io,Cl,ql,Al,rt,zl,G,lo,Nl,Be,Ll,sa,Dl,Ol,ss,Sl,Wl,Bl,it,Ul,ns,Rl,Hl,co,en,Ue,lt,rs,ho,Jl,is,Kl,tn,q,po,Gl,ls,Xl,Zl,fo,Ql,na,Yl,ed,td,mo,od,uo,ad,sd,nd,ds,rd,id,fe,cs,go,ld,dd,hs,_o,cd,hd,ps,vo,pd,fd,fs,To,md,ud,X,wo,gd,Re,_d,ms,vd,Td,us,wd,bd,yd,dt,$d,gs,xd,Fd,bo,on,He,ct,_s,yo,Ed,vs,Vd,an,A,$o,kd,Ts,Id,jd,xo,Md,ra,Pd,Cd,qd,Fo,Ad,Eo,zd,Nd,Ld,ws,Dd,Od,me,bs,Vo,Sd,Wd,ys,ko,Bd,Ud,$s,Io,Rd,Hd,xs,jo,Jd,Kd,Z,Mo,Gd,Je,Xd,Fs,Zd,Qd,Es,Yd,ec,tc,ht,oc,Vs,ac,sc,Po,sn;return _=new Ee({}),k=new Fe({props:{$$slots:{default:[Tp]},$$scope:{ctx:I}}}),C=new Ee({}),jt=new Ee({}),Mt=new U({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/vit/configuration_vit.py#L29",parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"}]}}),Ct=new zo({props:{code:`from transformers import ViTModel, ViTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),qt=new Ee({}),At=new U({props:{name:"class transformers.ViTFeatureExtractor",anchor:"transformers.ViTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = 2"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/vit/feature_extraction_vit.py#L37",parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}]}}),Nt=new U({props:{name:"__call__",anchor:"transformers.ViTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/vit/feature_extraction_vit.py#L83",parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ViTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.16.2/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Ze=new Fe({props:{warning:"&lcub;true}",$$slots:{default:[wp]},$$scope:{ctx:I}}}),Lt=new Ee({}),Dt=new U({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/vit/modeling_vit.py#L468",parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wt=new U({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"interpolate_pos_encoding",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/vit/modeling_vit.py#L493",parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ye=new Fe({props:{$$slots:{default:[bp]},$$scope:{ctx:I}}}),Bt=new zo({props:{code:`from transformers import ViTFeatureExtractor, ViTModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = ViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ut=new Ee({}),Rt=new U({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/vit/modeling_vit.py#L586",parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Kt=new U({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"interpolate_pos_encoding",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/vit/modeling_vit.py#L599",parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tt=new Fe({props:{$$slots:{default:[yp]},$$scope:{ctx:I}}}),Gt=new zo({props:{code:`from transformers import ViTFeatureExtractor, ViTForImageClassification
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = ViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
logits = outputs.logits
# model predicts one of the 1000 ImageNet classes
predicted_class_idx = logits.argmax(-1).item()
print("Predicted class:", model.config.id2label[predicted_class_idx]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`}}),Xt=new Ee({}),Zt=new U({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/vit/modeling_tf_vit.py#L656",parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),at=new Fe({props:{$$slots:{default:[$p]},$$scope:{ctx:I}}}),to=new U({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/vit/modeling_tf_vit.py#L662",parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),st=new Fe({props:{$$slots:{default:[xp]},$$scope:{ctx:I}}}),oo=new zo({props:{code:`from transformers import ViTFeatureExtractor, TFViTModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = TFViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(images=image, return_tensors="tf")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ao=new Ee({}),so=new U({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/vit/modeling_tf_vit.py#L762",parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),rt=new Fe({props:{$$slots:{default:[Fp]},$$scope:{ctx:I}}}),lo=new U({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/vit/modeling_tf_vit.py#L776",parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTForImageClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFViTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),it=new Fe({props:{$$slots:{default:[Ep]},$$scope:{ctx:I}}}),co=new zo({props:{code:`from transformers import ViTFeatureExtractor, TFViTForImageClassification
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
print("Predicted class:", model.config.id2label[int(predicted_class_idx)]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[<span class="hljs-built_in">int</span>(predicted_class_idx)])`}}),ho=new Ee({}),po=new U({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/vit/modeling_flax_vit.py#L510",parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),wo=new U({props:{name:"__call__",anchor:"transformers.FlaxViTPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/vit/modeling_flax_vit.py#L425",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dt=new Fe({props:{$$slots:{default:[Vp]},$$scope:{ctx:I}}}),bo=new zo({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = FlaxViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),yo=new Ee({}),$o=new U({props:{name:"class transformers.FlaxViTForImageClassification",anchor:"transformers.FlaxViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/vit/modeling_flax_vit.py#L591",parametersDescription:[{anchor:"transformers.FlaxViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Mo=new U({props:{name:"__call__",anchor:"transformers.FlaxViTPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/vit/modeling_flax_vit.py#L425",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ht=new Fe({props:{$$slots:{default:[kp]},$$scope:{ctx:I}}}),Po=new zo({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
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
print("Predicted class:", model.config.id2label[predicted_class_idx.item()]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){h=a("meta"),v=d(),m=a("h1"),u=a("a"),T=a("span"),w(_.$$.fragment),g=d(),V=a("span"),ce=r("Vision Transformer (ViT)"),R=d(),w(k.$$.fragment),re=d(),M=a("h2"),W=a("a"),te=a("span"),w(C.$$.fragment),he=d(),oe=a("span"),E=r("Overview"),j=d(),z=a("p"),Ve=r("The Vision Transformer (ViT) model was proposed in "),ae=a("a"),L=r(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),ke=r(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),ue=d(),No=a("p"),In=r("The abstract from the paper is the following:"),As=d(),Lo=a("p"),ba=a("em"),jn=r(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),zs=d(),Do=a("p"),Mn=r("Tips:"),Ns=d(),N=a("ul"),_t=a("li"),Pn=r("Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),vt=a("a"),Cn=r("here"),qn=r("."),An=d(),ya=a("li"),zn=r(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),Nn=d(),Tt=a("li"),Ln=r(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Oo=a("a"),Dn=r("ViTFeatureExtractor"),On=r(" to resize (or rescale) and normalize images for the model."),Sn=d(),Ie=a("li"),Wn=r(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),$a=a("code"),Bn=r("google/vit-base-patch16-224"),Un=r(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),wt=a("a"),Rn=r("hub"),Hn=r("."),Jn=d(),je=a("li"),Kn=r("The available checkpoints are either (1) pre-trained on "),bt=a("a"),Gn=r("ImageNet-21k"),Xn=r(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),yt=a("a"),Zn=r("ImageNet"),Qn=r(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Yn=d(),Me=a("li"),er=r(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),$t=a("a"),tr=r("(Touvron et al., 2019)"),or=r(", "),xt=a("a"),ar=r(`(Kolesnikov
et al., 2020)`),sr=r(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),nr=d(),xa=a("li"),rr=r(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),Ls=d(),So=a("p"),ir=r("Following the original Vision Transformer, some follow-up works have been made:"),Ds=d(),ie=a("ul"),Fa=a("li"),P=a("p"),Wo=a("a"),lr=r("DeiT"),dr=r(` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),Bo=a("a"),cr=r("ViTModel"),hr=r(` or
`),Uo=a("a"),pr=r("ViTForImageClassification"),fr=r(". There are 4 variants available (in 3 different sizes): "),Ea=a("em"),mr=r("facebook/deit-tiny-patch16-224"),ur=r(`,
`),Va=a("em"),gr=r("facebook/deit-small-patch16-224"),_r=r(", "),ka=a("em"),vr=r("facebook/deit-base-patch16-224"),Tr=r(" and "),Ia=a("em"),wr=r("facebook/deit-base-patch16-384"),br=r(`. Note that one should
use `),Ro=a("a"),yr=r("DeiTFeatureExtractor"),$r=r(" in order to prepare images for the model."),xr=d(),ja=a("li"),Ho=a("p"),Jo=a("a"),Fr=r("BEiT"),Er=r(` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Vr=d(),Ma=a("li"),Ft=a("p"),kr=r(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Et=a("a"),Ir=r("hub"),jr=r("."),Mr=d(),Pa=a("li"),Ko=a("p"),Go=a("a"),Pr=r("MAE"),Cr=r(` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Os=d(),ge=a("p"),qr=r("This model was contributed by "),Vt=a("a"),Ar=r("nielsr"),zr=r(`. The original code (written in JAX) can be
found `),kt=a("a"),Nr=r("here"),Lr=r("."),Ss=d(),Ke=a("p"),Dr=r("Note that we converted the weights from Ross Wightman\u2019s "),It=a("a"),Or=r("timm library"),Sr=r(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),Ws=d(),Pe=a("h2"),Ge=a("a"),Ca=a("span"),w(jt.$$.fragment),Wr=d(),qa=a("span"),Br=r("ViTConfig"),Bs=d(),B=a("div"),w(Mt.$$.fragment),Ur=d(),Ce=a("p"),Rr=r("This is the configuration class to store the configuration of a "),Xo=a("a"),Hr=r("ViTModel"),Jr=r(`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Pt=a("a"),Kr=r("google/vit-base-patch16-224"),Gr=r(" architecture."),Xr=d(),qe=a("p"),Zr=r("Configuration objects inherit from "),Zo=a("a"),Qr=r("PretrainedConfig"),Yr=r(` and can be used to control the model outputs. Read the
documentation from `),Qo=a("a"),ei=r("PretrainedConfig"),ti=r(" for more information."),oi=d(),Aa=a("p"),ai=r("Example:"),si=d(),w(Ct.$$.fragment),Us=d(),Ae=a("h2"),Xe=a("a"),za=a("span"),w(qt.$$.fragment),ni=d(),Na=a("span"),ri=r("ViTFeatureExtractor"),Rs=d(),se=a("div"),w(At.$$.fragment),ii=d(),La=a("p"),li=r("Constructs a ViT feature extractor."),di=d(),zt=a("p"),ci=r("This feature extractor inherits from "),Da=a("code"),hi=r("FeatureExtractionMixin"),pi=r(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),fi=d(),_e=a("div"),w(Nt.$$.fragment),mi=d(),Oa=a("p"),ui=r("Main method to prepare for the model one or several image(s)."),gi=d(),w(Ze.$$.fragment),Hs=d(),ze=a("h2"),Qe=a("a"),Sa=a("span"),w(Lt.$$.fragment),_i=d(),Wa=a("span"),vi=r("ViTModel"),Js=d(),pe=a("div"),w(Dt.$$.fragment),Ti=d(),Ot=a("p"),wi=r(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),St=a("a"),bi=r("torch.nn.Module"),yi=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$i=d(),H=a("div"),w(Wt.$$.fragment),xi=d(),Ne=a("p"),Fi=r("The "),Yo=a("a"),Ei=r("ViTModel"),Vi=r(" forward method, overrides the "),Ba=a("code"),ki=r("__call__"),Ii=r(" special method."),ji=d(),w(Ye.$$.fragment),Mi=d(),Ua=a("p"),Pi=r("Examples:"),Ci=d(),w(Bt.$$.fragment),Ks=d(),Le=a("h2"),et=a("a"),Ra=a("span"),w(Ut.$$.fragment),qi=d(),Ha=a("span"),Ai=r("ViTForImageClassification"),Gs=d(),ne=a("div"),w(Rt.$$.fragment),zi=d(),Ja=a("p"),Ni=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Li=d(),Ht=a("p"),Di=r("This model is a PyTorch "),Jt=a("a"),Oi=r("torch.nn.Module"),Si=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wi=d(),J=a("div"),w(Kt.$$.fragment),Bi=d(),De=a("p"),Ui=r("The "),ea=a("a"),Ri=r("ViTForImageClassification"),Hi=r(" forward method, overrides the "),Ka=a("code"),Ji=r("__call__"),Ki=r(" special method."),Gi=d(),w(tt.$$.fragment),Xi=d(),Ga=a("p"),Zi=r("Examples:"),Qi=d(),w(Gt.$$.fragment),Xs=d(),Oe=a("h2"),ot=a("a"),Xa=a("span"),w(Xt.$$.fragment),Yi=d(),Za=a("span"),el=r("TFViTModel"),Zs=d(),D=a("div"),w(Zt.$$.fragment),tl=d(),Qa=a("p"),ol=r("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),al=d(),Qt=a("p"),sl=r("This model inherits from "),ta=a("a"),nl=r("TFPreTrainedModel"),rl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),il=d(),Yt=a("p"),ll=r("This model is also a "),eo=a("a"),dl=r("tf.keras.Model"),cl=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hl=d(),w(at.$$.fragment),pl=d(),K=a("div"),w(to.$$.fragment),fl=d(),Se=a("p"),ml=r("The "),oa=a("a"),ul=r("TFViTModel"),gl=r(" forward method, overrides the "),Ya=a("code"),_l=r("__call__"),vl=r(" special method."),Tl=d(),w(st.$$.fragment),wl=d(),es=a("p"),bl=r("Examples:"),yl=d(),w(oo.$$.fragment),Qs=d(),We=a("h2"),nt=a("a"),ts=a("span"),w(ao.$$.fragment),$l=d(),os=a("span"),xl=r("TFViTForImageClassification"),Ys=d(),O=a("div"),w(so.$$.fragment),Fl=d(),as=a("p"),El=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Vl=d(),no=a("p"),kl=r("This model inherits from "),aa=a("a"),Il=r("TFPreTrainedModel"),jl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ml=d(),ro=a("p"),Pl=r("This model is also a "),io=a("a"),Cl=r("tf.keras.Model"),ql=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Al=d(),w(rt.$$.fragment),zl=d(),G=a("div"),w(lo.$$.fragment),Nl=d(),Be=a("p"),Ll=r("The "),sa=a("a"),Dl=r("TFViTForImageClassification"),Ol=r(" forward method, overrides the "),ss=a("code"),Sl=r("__call__"),Wl=r(" special method."),Bl=d(),w(it.$$.fragment),Ul=d(),ns=a("p"),Rl=r("Examples:"),Hl=d(),w(co.$$.fragment),en=d(),Ue=a("h2"),lt=a("a"),rs=a("span"),w(ho.$$.fragment),Jl=d(),is=a("span"),Kl=r("FlaxVitModel"),tn=d(),q=a("div"),w(po.$$.fragment),Gl=d(),ls=a("p"),Xl=r("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Zl=d(),fo=a("p"),Ql=r("This model inherits from "),na=a("a"),Yl=r("FlaxPreTrainedModel"),ed=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),td=d(),mo=a("p"),od=r("This model is also a Flax Linen "),uo=a("a"),ad=r("flax.linen.Module"),sd=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),nd=d(),ds=a("p"),rd=r("Finally, this model supports inherent JAX features such as:"),id=d(),fe=a("ul"),cs=a("li"),go=a("a"),ld=r("Just-In-Time (JIT) compilation"),dd=d(),hs=a("li"),_o=a("a"),cd=r("Automatic Differentiation"),hd=d(),ps=a("li"),vo=a("a"),pd=r("Vectorization"),fd=d(),fs=a("li"),To=a("a"),md=r("Parallelization"),ud=d(),X=a("div"),w(wo.$$.fragment),gd=d(),Re=a("p"),_d=r("The "),ms=a("code"),vd=r("FlaxViTPreTrainedModel"),Td=r("forward method, overrides the "),us=a("code"),wd=r("__call__"),bd=r(" special method."),yd=d(),w(dt.$$.fragment),$d=d(),gs=a("p"),xd=r("Examples:"),Fd=d(),w(bo.$$.fragment),on=d(),He=a("h2"),ct=a("a"),_s=a("span"),w(yo.$$.fragment),Ed=d(),vs=a("span"),Vd=r("FlaxViTForImageClassification"),an=d(),A=a("div"),w($o.$$.fragment),kd=d(),Ts=a("p"),Id=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),jd=d(),xo=a("p"),Md=r("This model inherits from "),ra=a("a"),Pd=r("FlaxPreTrainedModel"),Cd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),qd=d(),Fo=a("p"),Ad=r("This model is also a Flax Linen "),Eo=a("a"),zd=r("flax.linen.Module"),Nd=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ld=d(),ws=a("p"),Dd=r("Finally, this model supports inherent JAX features such as:"),Od=d(),me=a("ul"),bs=a("li"),Vo=a("a"),Sd=r("Just-In-Time (JIT) compilation"),Wd=d(),ys=a("li"),ko=a("a"),Bd=r("Automatic Differentiation"),Ud=d(),$s=a("li"),Io=a("a"),Rd=r("Vectorization"),Hd=d(),xs=a("li"),jo=a("a"),Jd=r("Parallelization"),Kd=d(),Z=a("div"),w(Mo.$$.fragment),Gd=d(),Je=a("p"),Xd=r("The "),Fs=a("code"),Zd=r("FlaxViTPreTrainedModel"),Qd=r("forward method, overrides the "),Es=a("code"),Yd=r("__call__"),ec=r(" special method."),tc=d(),w(ht.$$.fragment),oc=d(),Vs=a("p"),ac=r("Example:"),sc=d(),w(Po.$$.fragment),this.h()},l(o){const p=vp('[data-svelte="svelte-1phssyn"]',document.head);h=s(p,"META",{name:!0,content:!0}),p.forEach(t),v=c(o),m=s(o,"H1",{class:!0});var Co=n(m);u=s(Co,"A",{id:!0,class:!0,href:!0});var ks=n(u);T=s(ks,"SPAN",{});var Is=n(T);b(_.$$.fragment,Is),Is.forEach(t),ks.forEach(t),g=c(Co),V=s(Co,"SPAN",{});var js=n(V);ce=i(js,"Vision Transformer (ViT)"),js.forEach(t),Co.forEach(t),R=c(o),b(k.$$.fragment,o),re=c(o),M=s(o,"H2",{class:!0});var qo=n(M);W=s(qo,"A",{id:!0,class:!0,href:!0});var Ms=n(W);te=s(Ms,"SPAN",{});var Ps=n(te);b(C.$$.fragment,Ps),Ps.forEach(t),Ms.forEach(t),he=c(qo),oe=s(qo,"SPAN",{});var Cs=n(oe);E=i(Cs,"Overview"),Cs.forEach(t),qo.forEach(t),j=c(o),z=s(o,"P",{});var Ao=n(z);Ve=i(Ao,"The Vision Transformer (ViT) model was proposed in "),ae=s(Ao,"A",{href:!0,rel:!0});var qs=n(ae);L=i(qs,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),qs.forEach(t),ke=i(Ao,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Ao.forEach(t),ue=c(o),No=s(o,"P",{});var ic=n(No);In=i(ic,"The abstract from the paper is the following:"),ic.forEach(t),As=c(o),Lo=s(o,"P",{});var lc=n(Lo);ba=s(lc,"EM",{});var dc=n(ba);jn=i(dc,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),dc.forEach(t),lc.forEach(t),zs=c(o),Do=s(o,"P",{});var cc=n(Do);Mn=i(cc,"Tips:"),cc.forEach(t),Ns=c(o),N=s(o,"UL",{});var Q=n(N);_t=s(Q,"LI",{});var nn=n(_t);Pn=i(nn,"Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),vt=s(nn,"A",{href:!0,rel:!0});var hc=n(vt);Cn=i(hc,"here"),hc.forEach(t),qn=i(nn,"."),nn.forEach(t),An=c(Q),ya=s(Q,"LI",{});var pc=n(ya);zn=i(pc,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),pc.forEach(t),Nn=c(Q),Tt=s(Q,"LI",{});var rn=n(Tt);Ln=i(rn,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Oo=s(rn,"A",{href:!0});var fc=n(Oo);Dn=i(fc,"ViTFeatureExtractor"),fc.forEach(t),On=i(rn," to resize (or rescale) and normalize images for the model."),rn.forEach(t),Sn=c(Q),Ie=s(Q,"LI",{});var ia=n(Ie);Wn=i(ia,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),$a=s(ia,"CODE",{});var mc=n($a);Bn=i(mc,"google/vit-base-patch16-224"),mc.forEach(t),Un=i(ia,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),wt=s(ia,"A",{href:!0,rel:!0});var uc=n(wt);Rn=i(uc,"hub"),uc.forEach(t),Hn=i(ia,"."),ia.forEach(t),Jn=c(Q),je=s(Q,"LI",{});var la=n(je);Kn=i(la,"The available checkpoints are either (1) pre-trained on "),bt=s(la,"A",{href:!0,rel:!0});var gc=n(bt);Gn=i(gc,"ImageNet-21k"),gc.forEach(t),Xn=i(la,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),yt=s(la,"A",{href:!0,rel:!0});var _c=n(yt);Zn=i(_c,"ImageNet"),_c.forEach(t),Qn=i(la,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),la.forEach(t),Yn=c(Q),Me=s(Q,"LI",{});var da=n(Me);er=i(da,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),$t=s(da,"A",{href:!0,rel:!0});var vc=n($t);tr=i(vc,"(Touvron et al., 2019)"),vc.forEach(t),or=i(da,", "),xt=s(da,"A",{href:!0,rel:!0});var Tc=n(xt);ar=i(Tc,`(Kolesnikov
et al., 2020)`),Tc.forEach(t),sr=i(da,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),da.forEach(t),nr=c(Q),xa=s(Q,"LI",{});var wc=n(xa);rr=i(wc,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),wc.forEach(t),Q.forEach(t),Ls=c(o),So=s(o,"P",{});var bc=n(So);ir=i(bc,"Following the original Vision Transformer, some follow-up works have been made:"),bc.forEach(t),Ds=c(o),ie=s(o,"UL",{});var pt=n(ie);Fa=s(pt,"LI",{});var yc=n(Fa);P=s(yc,"P",{});var S=n(P);Wo=s(S,"A",{href:!0});var $c=n(Wo);lr=i($c,"DeiT"),$c.forEach(t),dr=i(S,` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),Bo=s(S,"A",{href:!0});var xc=n(Bo);cr=i(xc,"ViTModel"),xc.forEach(t),hr=i(S,` or
`),Uo=s(S,"A",{href:!0});var Fc=n(Uo);pr=i(Fc,"ViTForImageClassification"),Fc.forEach(t),fr=i(S,". There are 4 variants available (in 3 different sizes): "),Ea=s(S,"EM",{});var Ec=n(Ea);mr=i(Ec,"facebook/deit-tiny-patch16-224"),Ec.forEach(t),ur=i(S,`,
`),Va=s(S,"EM",{});var Vc=n(Va);gr=i(Vc,"facebook/deit-small-patch16-224"),Vc.forEach(t),_r=i(S,", "),ka=s(S,"EM",{});var kc=n(ka);vr=i(kc,"facebook/deit-base-patch16-224"),kc.forEach(t),Tr=i(S," and "),Ia=s(S,"EM",{});var Ic=n(Ia);wr=i(Ic,"facebook/deit-base-patch16-384"),Ic.forEach(t),br=i(S,`. Note that one should
use `),Ro=s(S,"A",{href:!0});var jc=n(Ro);yr=i(jc,"DeiTFeatureExtractor"),jc.forEach(t),$r=i(S," in order to prepare images for the model."),S.forEach(t),yc.forEach(t),xr=c(pt),ja=s(pt,"LI",{});var Mc=n(ja);Ho=s(Mc,"P",{});var nc=n(Ho);Jo=s(nc,"A",{href:!0});var Pc=n(Jo);Fr=i(Pc,"BEiT"),Pc.forEach(t),Er=i(nc,` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),nc.forEach(t),Mc.forEach(t),Vr=c(pt),Ma=s(pt,"LI",{});var Cc=n(Ma);Ft=s(Cc,"P",{});var ln=n(Ft);kr=i(ln,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Et=s(ln,"A",{href:!0,rel:!0});var qc=n(Et);Ir=i(qc,"hub"),qc.forEach(t),jr=i(ln,"."),ln.forEach(t),Cc.forEach(t),Mr=c(pt),Pa=s(pt,"LI",{});var Ac=n(Pa);Ko=s(Ac,"P",{});var rc=n(Ko);Go=s(rc,"A",{href:!0});var zc=n(Go);Pr=i(zc,"MAE"),zc.forEach(t),Cr=i(rc,` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),rc.forEach(t),Ac.forEach(t),pt.forEach(t),Os=c(o),ge=s(o,"P",{});var ca=n(ge);qr=i(ca,"This model was contributed by "),Vt=s(ca,"A",{href:!0,rel:!0});var Nc=n(Vt);Ar=i(Nc,"nielsr"),Nc.forEach(t),zr=i(ca,`. The original code (written in JAX) can be
found `),kt=s(ca,"A",{href:!0,rel:!0});var Lc=n(kt);Nr=i(Lc,"here"),Lc.forEach(t),Lr=i(ca,"."),ca.forEach(t),Ss=c(o),Ke=s(o,"P",{});var dn=n(Ke);Dr=i(dn,"Note that we converted the weights from Ross Wightman\u2019s "),It=s(dn,"A",{href:!0,rel:!0});var Dc=n(It);Or=i(Dc,"timm library"),Dc.forEach(t),Sr=i(dn,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),dn.forEach(t),Ws=c(o),Pe=s(o,"H2",{class:!0});var cn=n(Pe);Ge=s(cn,"A",{id:!0,class:!0,href:!0});var Oc=n(Ge);Ca=s(Oc,"SPAN",{});var Sc=n(Ca);b(jt.$$.fragment,Sc),Sc.forEach(t),Oc.forEach(t),Wr=c(cn),qa=s(cn,"SPAN",{});var Wc=n(qa);Br=i(Wc,"ViTConfig"),Wc.forEach(t),cn.forEach(t),Bs=c(o),B=s(o,"DIV",{class:!0});var ve=n(B);b(Mt.$$.fragment,ve),Ur=c(ve),Ce=s(ve,"P",{});var ha=n(Ce);Rr=i(ha,"This is the configuration class to store the configuration of a "),Xo=s(ha,"A",{href:!0});var Bc=n(Xo);Hr=i(Bc,"ViTModel"),Bc.forEach(t),Jr=i(ha,`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Pt=s(ha,"A",{href:!0,rel:!0});var Uc=n(Pt);Kr=i(Uc,"google/vit-base-patch16-224"),Uc.forEach(t),Gr=i(ha," architecture."),ha.forEach(t),Xr=c(ve),qe=s(ve,"P",{});var pa=n(qe);Zr=i(pa,"Configuration objects inherit from "),Zo=s(pa,"A",{href:!0});var Rc=n(Zo);Qr=i(Rc,"PretrainedConfig"),Rc.forEach(t),Yr=i(pa,` and can be used to control the model outputs. Read the
documentation from `),Qo=s(pa,"A",{href:!0});var Hc=n(Qo);ei=i(Hc,"PretrainedConfig"),Hc.forEach(t),ti=i(pa," for more information."),pa.forEach(t),oi=c(ve),Aa=s(ve,"P",{});var Jc=n(Aa);ai=i(Jc,"Example:"),Jc.forEach(t),si=c(ve),b(Ct.$$.fragment,ve),ve.forEach(t),Us=c(o),Ae=s(o,"H2",{class:!0});var hn=n(Ae);Xe=s(hn,"A",{id:!0,class:!0,href:!0});var Kc=n(Xe);za=s(Kc,"SPAN",{});var Gc=n(za);b(qt.$$.fragment,Gc),Gc.forEach(t),Kc.forEach(t),ni=c(hn),Na=s(hn,"SPAN",{});var Xc=n(Na);ri=i(Xc,"ViTFeatureExtractor"),Xc.forEach(t),hn.forEach(t),Rs=c(o),se=s(o,"DIV",{class:!0});var ft=n(se);b(At.$$.fragment,ft),ii=c(ft),La=s(ft,"P",{});var Zc=n(La);li=i(Zc,"Constructs a ViT feature extractor."),Zc.forEach(t),di=c(ft),zt=s(ft,"P",{});var pn=n(zt);ci=i(pn,"This feature extractor inherits from "),Da=s(pn,"CODE",{});var Qc=n(Da);hi=i(Qc,"FeatureExtractionMixin"),Qc.forEach(t),pi=i(pn,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),pn.forEach(t),fi=c(ft),_e=s(ft,"DIV",{class:!0});var fa=n(_e);b(Nt.$$.fragment,fa),mi=c(fa),Oa=s(fa,"P",{});var Yc=n(Oa);ui=i(Yc,"Main method to prepare for the model one or several image(s)."),Yc.forEach(t),gi=c(fa),b(Ze.$$.fragment,fa),fa.forEach(t),ft.forEach(t),Hs=c(o),ze=s(o,"H2",{class:!0});var fn=n(ze);Qe=s(fn,"A",{id:!0,class:!0,href:!0});var eh=n(Qe);Sa=s(eh,"SPAN",{});var th=n(Sa);b(Lt.$$.fragment,th),th.forEach(t),eh.forEach(t),_i=c(fn),Wa=s(fn,"SPAN",{});var oh=n(Wa);vi=i(oh,"ViTModel"),oh.forEach(t),fn.forEach(t),Js=c(o),pe=s(o,"DIV",{class:!0});var ma=n(pe);b(Dt.$$.fragment,ma),Ti=c(ma),Ot=s(ma,"P",{});var mn=n(Ot);wi=i(mn,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),St=s(mn,"A",{href:!0,rel:!0});var ah=n(St);bi=i(ah,"torch.nn.Module"),ah.forEach(t),yi=i(mn,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mn.forEach(t),$i=c(ma),H=s(ma,"DIV",{class:!0});var Te=n(H);b(Wt.$$.fragment,Te),xi=c(Te),Ne=s(Te,"P",{});var ua=n(Ne);Fi=i(ua,"The "),Yo=s(ua,"A",{href:!0});var sh=n(Yo);Ei=i(sh,"ViTModel"),sh.forEach(t),Vi=i(ua," forward method, overrides the "),Ba=s(ua,"CODE",{});var nh=n(Ba);ki=i(nh,"__call__"),nh.forEach(t),Ii=i(ua," special method."),ua.forEach(t),ji=c(Te),b(Ye.$$.fragment,Te),Mi=c(Te),Ua=s(Te,"P",{});var rh=n(Ua);Pi=i(rh,"Examples:"),rh.forEach(t),Ci=c(Te),b(Bt.$$.fragment,Te),Te.forEach(t),ma.forEach(t),Ks=c(o),Le=s(o,"H2",{class:!0});var un=n(Le);et=s(un,"A",{id:!0,class:!0,href:!0});var ih=n(et);Ra=s(ih,"SPAN",{});var lh=n(Ra);b(Ut.$$.fragment,lh),lh.forEach(t),ih.forEach(t),qi=c(un),Ha=s(un,"SPAN",{});var dh=n(Ha);Ai=i(dh,"ViTForImageClassification"),dh.forEach(t),un.forEach(t),Gs=c(o),ne=s(o,"DIV",{class:!0});var mt=n(ne);b(Rt.$$.fragment,mt),zi=c(mt),Ja=s(mt,"P",{});var ch=n(Ja);Ni=i(ch,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ch.forEach(t),Li=c(mt),Ht=s(mt,"P",{});var gn=n(Ht);Di=i(gn,"This model is a PyTorch "),Jt=s(gn,"A",{href:!0,rel:!0});var hh=n(Jt);Oi=i(hh,"torch.nn.Module"),hh.forEach(t),Si=i(gn,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gn.forEach(t),Wi=c(mt),J=s(mt,"DIV",{class:!0});var we=n(J);b(Kt.$$.fragment,we),Bi=c(we),De=s(we,"P",{});var ga=n(De);Ui=i(ga,"The "),ea=s(ga,"A",{href:!0});var ph=n(ea);Ri=i(ph,"ViTForImageClassification"),ph.forEach(t),Hi=i(ga," forward method, overrides the "),Ka=s(ga,"CODE",{});var fh=n(Ka);Ji=i(fh,"__call__"),fh.forEach(t),Ki=i(ga," special method."),ga.forEach(t),Gi=c(we),b(tt.$$.fragment,we),Xi=c(we),Ga=s(we,"P",{});var mh=n(Ga);Zi=i(mh,"Examples:"),mh.forEach(t),Qi=c(we),b(Gt.$$.fragment,we),we.forEach(t),mt.forEach(t),Xs=c(o),Oe=s(o,"H2",{class:!0});var _n=n(Oe);ot=s(_n,"A",{id:!0,class:!0,href:!0});var uh=n(ot);Xa=s(uh,"SPAN",{});var gh=n(Xa);b(Xt.$$.fragment,gh),gh.forEach(t),uh.forEach(t),Yi=c(_n),Za=s(_n,"SPAN",{});var _h=n(Za);el=i(_h,"TFViTModel"),_h.forEach(t),_n.forEach(t),Zs=c(o),D=s(o,"DIV",{class:!0});var le=n(D);b(Zt.$$.fragment,le),tl=c(le),Qa=s(le,"P",{});var vh=n(Qa);ol=i(vh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),vh.forEach(t),al=c(le),Qt=s(le,"P",{});var vn=n(Qt);sl=i(vn,"This model inherits from "),ta=s(vn,"A",{href:!0});var Th=n(ta);nl=i(Th,"TFPreTrainedModel"),Th.forEach(t),rl=i(vn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vn.forEach(t),il=c(le),Yt=s(le,"P",{});var Tn=n(Yt);ll=i(Tn,"This model is also a "),eo=s(Tn,"A",{href:!0,rel:!0});var wh=n(eo);dl=i(wh,"tf.keras.Model"),wh.forEach(t),cl=i(Tn,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tn.forEach(t),hl=c(le),b(at.$$.fragment,le),pl=c(le),K=s(le,"DIV",{class:!0});var be=n(K);b(to.$$.fragment,be),fl=c(be),Se=s(be,"P",{});var _a=n(Se);ml=i(_a,"The "),oa=s(_a,"A",{href:!0});var bh=n(oa);ul=i(bh,"TFViTModel"),bh.forEach(t),gl=i(_a," forward method, overrides the "),Ya=s(_a,"CODE",{});var yh=n(Ya);_l=i(yh,"__call__"),yh.forEach(t),vl=i(_a," special method."),_a.forEach(t),Tl=c(be),b(st.$$.fragment,be),wl=c(be),es=s(be,"P",{});var $h=n(es);bl=i($h,"Examples:"),$h.forEach(t),yl=c(be),b(oo.$$.fragment,be),be.forEach(t),le.forEach(t),Qs=c(o),We=s(o,"H2",{class:!0});var wn=n(We);nt=s(wn,"A",{id:!0,class:!0,href:!0});var xh=n(nt);ts=s(xh,"SPAN",{});var Fh=n(ts);b(ao.$$.fragment,Fh),Fh.forEach(t),xh.forEach(t),$l=c(wn),os=s(wn,"SPAN",{});var Eh=n(os);xl=i(Eh,"TFViTForImageClassification"),Eh.forEach(t),wn.forEach(t),Ys=c(o),O=s(o,"DIV",{class:!0});var de=n(O);b(so.$$.fragment,de),Fl=c(de),as=s(de,"P",{});var Vh=n(as);El=i(Vh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Vh.forEach(t),Vl=c(de),no=s(de,"P",{});var bn=n(no);kl=i(bn,"This model inherits from "),aa=s(bn,"A",{href:!0});var kh=n(aa);Il=i(kh,"TFPreTrainedModel"),kh.forEach(t),jl=i(bn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bn.forEach(t),Ml=c(de),ro=s(de,"P",{});var yn=n(ro);Pl=i(yn,"This model is also a "),io=s(yn,"A",{href:!0,rel:!0});var Ih=n(io);Cl=i(Ih,"tf.keras.Model"),Ih.forEach(t),ql=i(yn,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yn.forEach(t),Al=c(de),b(rt.$$.fragment,de),zl=c(de),G=s(de,"DIV",{class:!0});var ye=n(G);b(lo.$$.fragment,ye),Nl=c(ye),Be=s(ye,"P",{});var va=n(Be);Ll=i(va,"The "),sa=s(va,"A",{href:!0});var jh=n(sa);Dl=i(jh,"TFViTForImageClassification"),jh.forEach(t),Ol=i(va," forward method, overrides the "),ss=s(va,"CODE",{});var Mh=n(ss);Sl=i(Mh,"__call__"),Mh.forEach(t),Wl=i(va," special method."),va.forEach(t),Bl=c(ye),b(it.$$.fragment,ye),Ul=c(ye),ns=s(ye,"P",{});var Ph=n(ns);Rl=i(Ph,"Examples:"),Ph.forEach(t),Hl=c(ye),b(co.$$.fragment,ye),ye.forEach(t),de.forEach(t),en=c(o),Ue=s(o,"H2",{class:!0});var $n=n(Ue);lt=s($n,"A",{id:!0,class:!0,href:!0});var Ch=n(lt);rs=s(Ch,"SPAN",{});var qh=n(rs);b(ho.$$.fragment,qh),qh.forEach(t),Ch.forEach(t),Jl=c($n),is=s($n,"SPAN",{});var Ah=n(is);Kl=i(Ah,"FlaxVitModel"),Ah.forEach(t),$n.forEach(t),tn=c(o),q=s(o,"DIV",{class:!0});var Y=n(q);b(po.$$.fragment,Y),Gl=c(Y),ls=s(Y,"P",{});var zh=n(ls);Xl=i(zh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),zh.forEach(t),Zl=c(Y),fo=s(Y,"P",{});var xn=n(fo);Ql=i(xn,"This model inherits from "),na=s(xn,"A",{href:!0});var Nh=n(na);Yl=i(Nh,"FlaxPreTrainedModel"),Nh.forEach(t),ed=i(xn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xn.forEach(t),td=c(Y),mo=s(Y,"P",{});var Fn=n(mo);od=i(Fn,"This model is also a Flax Linen "),uo=s(Fn,"A",{href:!0,rel:!0});var Lh=n(uo);ad=i(Lh,"flax.linen.Module"),Lh.forEach(t),sd=i(Fn,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fn.forEach(t),nd=c(Y),ds=s(Y,"P",{});var Dh=n(ds);rd=i(Dh,"Finally, this model supports inherent JAX features such as:"),Dh.forEach(t),id=c(Y),fe=s(Y,"UL",{});var ut=n(fe);cs=s(ut,"LI",{});var Oh=n(cs);go=s(Oh,"A",{href:!0,rel:!0});var Sh=n(go);ld=i(Sh,"Just-In-Time (JIT) compilation"),Sh.forEach(t),Oh.forEach(t),dd=c(ut),hs=s(ut,"LI",{});var Wh=n(hs);_o=s(Wh,"A",{href:!0,rel:!0});var Bh=n(_o);cd=i(Bh,"Automatic Differentiation"),Bh.forEach(t),Wh.forEach(t),hd=c(ut),ps=s(ut,"LI",{});var Uh=n(ps);vo=s(Uh,"A",{href:!0,rel:!0});var Rh=n(vo);pd=i(Rh,"Vectorization"),Rh.forEach(t),Uh.forEach(t),fd=c(ut),fs=s(ut,"LI",{});var Hh=n(fs);To=s(Hh,"A",{href:!0,rel:!0});var Jh=n(To);md=i(Jh,"Parallelization"),Jh.forEach(t),Hh.forEach(t),ut.forEach(t),ud=c(Y),X=s(Y,"DIV",{class:!0});var $e=n(X);b(wo.$$.fragment,$e),gd=c($e),Re=s($e,"P",{});var Ta=n(Re);_d=i(Ta,"The "),ms=s(Ta,"CODE",{});var Kh=n(ms);vd=i(Kh,"FlaxViTPreTrainedModel"),Kh.forEach(t),Td=i(Ta,"forward method, overrides the "),us=s(Ta,"CODE",{});var Gh=n(us);wd=i(Gh,"__call__"),Gh.forEach(t),bd=i(Ta," special method."),Ta.forEach(t),yd=c($e),b(dt.$$.fragment,$e),$d=c($e),gs=s($e,"P",{});var Xh=n(gs);xd=i(Xh,"Examples:"),Xh.forEach(t),Fd=c($e),b(bo.$$.fragment,$e),$e.forEach(t),Y.forEach(t),on=c(o),He=s(o,"H2",{class:!0});var En=n(He);ct=s(En,"A",{id:!0,class:!0,href:!0});var Zh=n(ct);_s=s(Zh,"SPAN",{});var Qh=n(_s);b(yo.$$.fragment,Qh),Qh.forEach(t),Zh.forEach(t),Ed=c(En),vs=s(En,"SPAN",{});var Yh=n(vs);Vd=i(Yh,"FlaxViTForImageClassification"),Yh.forEach(t),En.forEach(t),an=c(o),A=s(o,"DIV",{class:!0});var ee=n(A);b($o.$$.fragment,ee),kd=c(ee),Ts=s(ee,"P",{});var ep=n(Ts);Id=i(ep,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ep.forEach(t),jd=c(ee),xo=s(ee,"P",{});var Vn=n(xo);Md=i(Vn,"This model inherits from "),ra=s(Vn,"A",{href:!0});var tp=n(ra);Pd=i(tp,"FlaxPreTrainedModel"),tp.forEach(t),Cd=i(Vn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Vn.forEach(t),qd=c(ee),Fo=s(ee,"P",{});var kn=n(Fo);Ad=i(kn,"This model is also a Flax Linen "),Eo=s(kn,"A",{href:!0,rel:!0});var op=n(Eo);zd=i(op,"flax.linen.Module"),op.forEach(t),Nd=i(kn,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),kn.forEach(t),Ld=c(ee),ws=s(ee,"P",{});var ap=n(ws);Dd=i(ap,"Finally, this model supports inherent JAX features such as:"),ap.forEach(t),Od=c(ee),me=s(ee,"UL",{});var gt=n(me);bs=s(gt,"LI",{});var sp=n(bs);Vo=s(sp,"A",{href:!0,rel:!0});var np=n(Vo);Sd=i(np,"Just-In-Time (JIT) compilation"),np.forEach(t),sp.forEach(t),Wd=c(gt),ys=s(gt,"LI",{});var rp=n(ys);ko=s(rp,"A",{href:!0,rel:!0});var ip=n(ko);Bd=i(ip,"Automatic Differentiation"),ip.forEach(t),rp.forEach(t),Ud=c(gt),$s=s(gt,"LI",{});var lp=n($s);Io=s(lp,"A",{href:!0,rel:!0});var dp=n(Io);Rd=i(dp,"Vectorization"),dp.forEach(t),lp.forEach(t),Hd=c(gt),xs=s(gt,"LI",{});var cp=n(xs);jo=s(cp,"A",{href:!0,rel:!0});var hp=n(jo);Jd=i(hp,"Parallelization"),hp.forEach(t),cp.forEach(t),gt.forEach(t),Kd=c(ee),Z=s(ee,"DIV",{class:!0});var xe=n(Z);b(Mo.$$.fragment,xe),Gd=c(xe),Je=s(xe,"P",{});var wa=n(Je);Xd=i(wa,"The "),Fs=s(wa,"CODE",{});var pp=n(Fs);Zd=i(pp,"FlaxViTPreTrainedModel"),pp.forEach(t),Qd=i(wa,"forward method, overrides the "),Es=s(wa,"CODE",{});var fp=n(Es);Yd=i(fp,"__call__"),fp.forEach(t),ec=i(wa," special method."),wa.forEach(t),tc=c(xe),b(ht.$$.fragment,xe),oc=c(xe),Vs=s(xe,"P",{});var mp=n(Vs);ac=i(mp,"Example:"),mp.forEach(t),sc=c(xe),b(Po.$$.fragment,xe),xe.forEach(t),ee.forEach(t),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(jp)),l(u,"id","vision-transformer-vit"),l(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(u,"href","#vision-transformer-vit"),l(m,"class","relative group"),l(W,"id","overview"),l(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(W,"href","#overview"),l(M,"class","relative group"),l(ae,"href","https://arxiv.org/abs/2010.11929"),l(ae,"rel","nofollow"),l(vt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),l(vt,"rel","nofollow"),l(Oo,"href","/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTFeatureExtractor"),l(wt,"href","https://huggingface.co/models?search=vit"),l(wt,"rel","nofollow"),l(bt,"href","http://www.image-net.org/"),l(bt,"rel","nofollow"),l(yt,"href","http://www.image-net.org/challenges/LSVRC/2012/"),l(yt,"rel","nofollow"),l($t,"href","https://arxiv.org/abs/1906.06423"),l($t,"rel","nofollow"),l(xt,"href","https://arxiv.org/abs/1912.11370"),l(xt,"rel","nofollow"),l(Wo,"href","deit"),l(Bo,"href","/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTModel"),l(Uo,"href","/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTForImageClassification"),l(Ro,"href","/docs/transformers/v4.16.2/en/model_doc/deit#transformers.DeiTFeatureExtractor"),l(Jo,"href","beit"),l(Et,"href","https://huggingface.co/models?other=dino"),l(Et,"rel","nofollow"),l(Go,"href","vit_mae"),l(Vt,"href","https://huggingface.co/nielsr"),l(Vt,"rel","nofollow"),l(kt,"href","https://github.com/google-research/vision_transformer"),l(kt,"rel","nofollow"),l(It,"href","https://github.com/rwightman/pytorch-image-models"),l(It,"rel","nofollow"),l(Ge,"id","transformers.ViTConfig"),l(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ge,"href","#transformers.ViTConfig"),l(Pe,"class","relative group"),l(Xo,"href","/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTModel"),l(Pt,"href","https://huggingface.co/google/vit-base-patch16-224"),l(Pt,"rel","nofollow"),l(Zo,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),l(Qo,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),l(B,"class","docstring"),l(Xe,"id","transformers.ViTFeatureExtractor"),l(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Xe,"href","#transformers.ViTFeatureExtractor"),l(Ae,"class","relative group"),l(_e,"class","docstring"),l(se,"class","docstring"),l(Qe,"id","transformers.ViTModel"),l(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Qe,"href","#transformers.ViTModel"),l(ze,"class","relative group"),l(St,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(St,"rel","nofollow"),l(Yo,"href","/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTModel"),l(H,"class","docstring"),l(pe,"class","docstring"),l(et,"id","transformers.ViTForImageClassification"),l(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(et,"href","#transformers.ViTForImageClassification"),l(Le,"class","relative group"),l(Jt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Jt,"rel","nofollow"),l(ea,"href","/docs/transformers/v4.16.2/en/model_doc/vit#transformers.ViTForImageClassification"),l(J,"class","docstring"),l(ne,"class","docstring"),l(ot,"id","transformers.TFViTModel"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.TFViTModel"),l(Oe,"class","relative group"),l(ta,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),l(eo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(eo,"rel","nofollow"),l(oa,"href","/docs/transformers/v4.16.2/en/model_doc/vit#transformers.TFViTModel"),l(K,"class","docstring"),l(D,"class","docstring"),l(nt,"id","transformers.TFViTForImageClassification"),l(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(nt,"href","#transformers.TFViTForImageClassification"),l(We,"class","relative group"),l(aa,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),l(io,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(io,"rel","nofollow"),l(sa,"href","/docs/transformers/v4.16.2/en/model_doc/vit#transformers.TFViTForImageClassification"),l(G,"class","docstring"),l(O,"class","docstring"),l(lt,"id","transformers.FlaxViTModel"),l(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lt,"href","#transformers.FlaxViTModel"),l(Ue,"class","relative group"),l(na,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(uo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(uo,"rel","nofollow"),l(go,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(go,"rel","nofollow"),l(_o,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(_o,"rel","nofollow"),l(vo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(vo,"rel","nofollow"),l(To,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(To,"rel","nofollow"),l(X,"class","docstring"),l(q,"class","docstring"),l(ct,"id","transformers.FlaxViTForImageClassification"),l(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ct,"href","#transformers.FlaxViTForImageClassification"),l(He,"class","relative group"),l(ra,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(Eo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Eo,"rel","nofollow"),l(Vo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(Vo,"rel","nofollow"),l(ko,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(ko,"rel","nofollow"),l(Io,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Io,"rel","nofollow"),l(jo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(jo,"rel","nofollow"),l(Z,"class","docstring"),l(A,"class","docstring")},m(o,p){e(document.head,h),f(o,v,p),f(o,m,p),e(m,u),e(u,T),y(_,T,null),e(m,g),e(m,V),e(V,ce),f(o,R,p),y(k,o,p),f(o,re,p),f(o,M,p),e(M,W),e(W,te),y(C,te,null),e(M,he),e(M,oe),e(oe,E),f(o,j,p),f(o,z,p),e(z,Ve),e(z,ae),e(ae,L),e(z,ke),f(o,ue,p),f(o,No,p),e(No,In),f(o,As,p),f(o,Lo,p),e(Lo,ba),e(ba,jn),f(o,zs,p),f(o,Do,p),e(Do,Mn),f(o,Ns,p),f(o,N,p),e(N,_t),e(_t,Pn),e(_t,vt),e(vt,Cn),e(_t,qn),e(N,An),e(N,ya),e(ya,zn),e(N,Nn),e(N,Tt),e(Tt,Ln),e(Tt,Oo),e(Oo,Dn),e(Tt,On),e(N,Sn),e(N,Ie),e(Ie,Wn),e(Ie,$a),e($a,Bn),e(Ie,Un),e(Ie,wt),e(wt,Rn),e(Ie,Hn),e(N,Jn),e(N,je),e(je,Kn),e(je,bt),e(bt,Gn),e(je,Xn),e(je,yt),e(yt,Zn),e(je,Qn),e(N,Yn),e(N,Me),e(Me,er),e(Me,$t),e($t,tr),e(Me,or),e(Me,xt),e(xt,ar),e(Me,sr),e(N,nr),e(N,xa),e(xa,rr),f(o,Ls,p),f(o,So,p),e(So,ir),f(o,Ds,p),f(o,ie,p),e(ie,Fa),e(Fa,P),e(P,Wo),e(Wo,lr),e(P,dr),e(P,Bo),e(Bo,cr),e(P,hr),e(P,Uo),e(Uo,pr),e(P,fr),e(P,Ea),e(Ea,mr),e(P,ur),e(P,Va),e(Va,gr),e(P,_r),e(P,ka),e(ka,vr),e(P,Tr),e(P,Ia),e(Ia,wr),e(P,br),e(P,Ro),e(Ro,yr),e(P,$r),e(ie,xr),e(ie,ja),e(ja,Ho),e(Ho,Jo),e(Jo,Fr),e(Ho,Er),e(ie,Vr),e(ie,Ma),e(Ma,Ft),e(Ft,kr),e(Ft,Et),e(Et,Ir),e(Ft,jr),e(ie,Mr),e(ie,Pa),e(Pa,Ko),e(Ko,Go),e(Go,Pr),e(Ko,Cr),f(o,Os,p),f(o,ge,p),e(ge,qr),e(ge,Vt),e(Vt,Ar),e(ge,zr),e(ge,kt),e(kt,Nr),e(ge,Lr),f(o,Ss,p),f(o,Ke,p),e(Ke,Dr),e(Ke,It),e(It,Or),e(Ke,Sr),f(o,Ws,p),f(o,Pe,p),e(Pe,Ge),e(Ge,Ca),y(jt,Ca,null),e(Pe,Wr),e(Pe,qa),e(qa,Br),f(o,Bs,p),f(o,B,p),y(Mt,B,null),e(B,Ur),e(B,Ce),e(Ce,Rr),e(Ce,Xo),e(Xo,Hr),e(Ce,Jr),e(Ce,Pt),e(Pt,Kr),e(Ce,Gr),e(B,Xr),e(B,qe),e(qe,Zr),e(qe,Zo),e(Zo,Qr),e(qe,Yr),e(qe,Qo),e(Qo,ei),e(qe,ti),e(B,oi),e(B,Aa),e(Aa,ai),e(B,si),y(Ct,B,null),f(o,Us,p),f(o,Ae,p),e(Ae,Xe),e(Xe,za),y(qt,za,null),e(Ae,ni),e(Ae,Na),e(Na,ri),f(o,Rs,p),f(o,se,p),y(At,se,null),e(se,ii),e(se,La),e(La,li),e(se,di),e(se,zt),e(zt,ci),e(zt,Da),e(Da,hi),e(zt,pi),e(se,fi),e(se,_e),y(Nt,_e,null),e(_e,mi),e(_e,Oa),e(Oa,ui),e(_e,gi),y(Ze,_e,null),f(o,Hs,p),f(o,ze,p),e(ze,Qe),e(Qe,Sa),y(Lt,Sa,null),e(ze,_i),e(ze,Wa),e(Wa,vi),f(o,Js,p),f(o,pe,p),y(Dt,pe,null),e(pe,Ti),e(pe,Ot),e(Ot,wi),e(Ot,St),e(St,bi),e(Ot,yi),e(pe,$i),e(pe,H),y(Wt,H,null),e(H,xi),e(H,Ne),e(Ne,Fi),e(Ne,Yo),e(Yo,Ei),e(Ne,Vi),e(Ne,Ba),e(Ba,ki),e(Ne,Ii),e(H,ji),y(Ye,H,null),e(H,Mi),e(H,Ua),e(Ua,Pi),e(H,Ci),y(Bt,H,null),f(o,Ks,p),f(o,Le,p),e(Le,et),e(et,Ra),y(Ut,Ra,null),e(Le,qi),e(Le,Ha),e(Ha,Ai),f(o,Gs,p),f(o,ne,p),y(Rt,ne,null),e(ne,zi),e(ne,Ja),e(Ja,Ni),e(ne,Li),e(ne,Ht),e(Ht,Di),e(Ht,Jt),e(Jt,Oi),e(Ht,Si),e(ne,Wi),e(ne,J),y(Kt,J,null),e(J,Bi),e(J,De),e(De,Ui),e(De,ea),e(ea,Ri),e(De,Hi),e(De,Ka),e(Ka,Ji),e(De,Ki),e(J,Gi),y(tt,J,null),e(J,Xi),e(J,Ga),e(Ga,Zi),e(J,Qi),y(Gt,J,null),f(o,Xs,p),f(o,Oe,p),e(Oe,ot),e(ot,Xa),y(Xt,Xa,null),e(Oe,Yi),e(Oe,Za),e(Za,el),f(o,Zs,p),f(o,D,p),y(Zt,D,null),e(D,tl),e(D,Qa),e(Qa,ol),e(D,al),e(D,Qt),e(Qt,sl),e(Qt,ta),e(ta,nl),e(Qt,rl),e(D,il),e(D,Yt),e(Yt,ll),e(Yt,eo),e(eo,dl),e(Yt,cl),e(D,hl),y(at,D,null),e(D,pl),e(D,K),y(to,K,null),e(K,fl),e(K,Se),e(Se,ml),e(Se,oa),e(oa,ul),e(Se,gl),e(Se,Ya),e(Ya,_l),e(Se,vl),e(K,Tl),y(st,K,null),e(K,wl),e(K,es),e(es,bl),e(K,yl),y(oo,K,null),f(o,Qs,p),f(o,We,p),e(We,nt),e(nt,ts),y(ao,ts,null),e(We,$l),e(We,os),e(os,xl),f(o,Ys,p),f(o,O,p),y(so,O,null),e(O,Fl),e(O,as),e(as,El),e(O,Vl),e(O,no),e(no,kl),e(no,aa),e(aa,Il),e(no,jl),e(O,Ml),e(O,ro),e(ro,Pl),e(ro,io),e(io,Cl),e(ro,ql),e(O,Al),y(rt,O,null),e(O,zl),e(O,G),y(lo,G,null),e(G,Nl),e(G,Be),e(Be,Ll),e(Be,sa),e(sa,Dl),e(Be,Ol),e(Be,ss),e(ss,Sl),e(Be,Wl),e(G,Bl),y(it,G,null),e(G,Ul),e(G,ns),e(ns,Rl),e(G,Hl),y(co,G,null),f(o,en,p),f(o,Ue,p),e(Ue,lt),e(lt,rs),y(ho,rs,null),e(Ue,Jl),e(Ue,is),e(is,Kl),f(o,tn,p),f(o,q,p),y(po,q,null),e(q,Gl),e(q,ls),e(ls,Xl),e(q,Zl),e(q,fo),e(fo,Ql),e(fo,na),e(na,Yl),e(fo,ed),e(q,td),e(q,mo),e(mo,od),e(mo,uo),e(uo,ad),e(mo,sd),e(q,nd),e(q,ds),e(ds,rd),e(q,id),e(q,fe),e(fe,cs),e(cs,go),e(go,ld),e(fe,dd),e(fe,hs),e(hs,_o),e(_o,cd),e(fe,hd),e(fe,ps),e(ps,vo),e(vo,pd),e(fe,fd),e(fe,fs),e(fs,To),e(To,md),e(q,ud),e(q,X),y(wo,X,null),e(X,gd),e(X,Re),e(Re,_d),e(Re,ms),e(ms,vd),e(Re,Td),e(Re,us),e(us,wd),e(Re,bd),e(X,yd),y(dt,X,null),e(X,$d),e(X,gs),e(gs,xd),e(X,Fd),y(bo,X,null),f(o,on,p),f(o,He,p),e(He,ct),e(ct,_s),y(yo,_s,null),e(He,Ed),e(He,vs),e(vs,Vd),f(o,an,p),f(o,A,p),y($o,A,null),e(A,kd),e(A,Ts),e(Ts,Id),e(A,jd),e(A,xo),e(xo,Md),e(xo,ra),e(ra,Pd),e(xo,Cd),e(A,qd),e(A,Fo),e(Fo,Ad),e(Fo,Eo),e(Eo,zd),e(Fo,Nd),e(A,Ld),e(A,ws),e(ws,Dd),e(A,Od),e(A,me),e(me,bs),e(bs,Vo),e(Vo,Sd),e(me,Wd),e(me,ys),e(ys,ko),e(ko,Bd),e(me,Ud),e(me,$s),e($s,Io),e(Io,Rd),e(me,Hd),e(me,xs),e(xs,jo),e(jo,Jd),e(A,Kd),e(A,Z),y(Mo,Z,null),e(Z,Gd),e(Z,Je),e(Je,Xd),e(Je,Fs),e(Fs,Zd),e(Je,Qd),e(Je,Es),e(Es,Yd),e(Je,ec),e(Z,tc),y(ht,Z,null),e(Z,oc),e(Z,Vs),e(Vs,ac),e(Z,sc),y(Po,Z,null),sn=!0},p(o,[p]){const Co={};p&2&&(Co.$$scope={dirty:p,ctx:o}),k.$set(Co);const ks={};p&2&&(ks.$$scope={dirty:p,ctx:o}),Ze.$set(ks);const Is={};p&2&&(Is.$$scope={dirty:p,ctx:o}),Ye.$set(Is);const js={};p&2&&(js.$$scope={dirty:p,ctx:o}),tt.$set(js);const qo={};p&2&&(qo.$$scope={dirty:p,ctx:o}),at.$set(qo);const Ms={};p&2&&(Ms.$$scope={dirty:p,ctx:o}),st.$set(Ms);const Ps={};p&2&&(Ps.$$scope={dirty:p,ctx:o}),rt.$set(Ps);const Cs={};p&2&&(Cs.$$scope={dirty:p,ctx:o}),it.$set(Cs);const Ao={};p&2&&(Ao.$$scope={dirty:p,ctx:o}),dt.$set(Ao);const qs={};p&2&&(qs.$$scope={dirty:p,ctx:o}),ht.$set(qs)},i(o){sn||($(_.$$.fragment,o),$(k.$$.fragment,o),$(C.$$.fragment,o),$(jt.$$.fragment,o),$(Mt.$$.fragment,o),$(Ct.$$.fragment,o),$(qt.$$.fragment,o),$(At.$$.fragment,o),$(Nt.$$.fragment,o),$(Ze.$$.fragment,o),$(Lt.$$.fragment,o),$(Dt.$$.fragment,o),$(Wt.$$.fragment,o),$(Ye.$$.fragment,o),$(Bt.$$.fragment,o),$(Ut.$$.fragment,o),$(Rt.$$.fragment,o),$(Kt.$$.fragment,o),$(tt.$$.fragment,o),$(Gt.$$.fragment,o),$(Xt.$$.fragment,o),$(Zt.$$.fragment,o),$(at.$$.fragment,o),$(to.$$.fragment,o),$(st.$$.fragment,o),$(oo.$$.fragment,o),$(ao.$$.fragment,o),$(so.$$.fragment,o),$(rt.$$.fragment,o),$(lo.$$.fragment,o),$(it.$$.fragment,o),$(co.$$.fragment,o),$(ho.$$.fragment,o),$(po.$$.fragment,o),$(wo.$$.fragment,o),$(dt.$$.fragment,o),$(bo.$$.fragment,o),$(yo.$$.fragment,o),$($o.$$.fragment,o),$(Mo.$$.fragment,o),$(ht.$$.fragment,o),$(Po.$$.fragment,o),sn=!0)},o(o){x(_.$$.fragment,o),x(k.$$.fragment,o),x(C.$$.fragment,o),x(jt.$$.fragment,o),x(Mt.$$.fragment,o),x(Ct.$$.fragment,o),x(qt.$$.fragment,o),x(At.$$.fragment,o),x(Nt.$$.fragment,o),x(Ze.$$.fragment,o),x(Lt.$$.fragment,o),x(Dt.$$.fragment,o),x(Wt.$$.fragment,o),x(Ye.$$.fragment,o),x(Bt.$$.fragment,o),x(Ut.$$.fragment,o),x(Rt.$$.fragment,o),x(Kt.$$.fragment,o),x(tt.$$.fragment,o),x(Gt.$$.fragment,o),x(Xt.$$.fragment,o),x(Zt.$$.fragment,o),x(at.$$.fragment,o),x(to.$$.fragment,o),x(st.$$.fragment,o),x(oo.$$.fragment,o),x(ao.$$.fragment,o),x(so.$$.fragment,o),x(rt.$$.fragment,o),x(lo.$$.fragment,o),x(it.$$.fragment,o),x(co.$$.fragment,o),x(ho.$$.fragment,o),x(po.$$.fragment,o),x(wo.$$.fragment,o),x(dt.$$.fragment,o),x(bo.$$.fragment,o),x(yo.$$.fragment,o),x($o.$$.fragment,o),x(Mo.$$.fragment,o),x(ht.$$.fragment,o),x(Po.$$.fragment,o),sn=!1},d(o){t(h),o&&t(v),o&&t(m),F(_),o&&t(R),F(k,o),o&&t(re),o&&t(M),F(C),o&&t(j),o&&t(z),o&&t(ue),o&&t(No),o&&t(As),o&&t(Lo),o&&t(zs),o&&t(Do),o&&t(Ns),o&&t(N),o&&t(Ls),o&&t(So),o&&t(Ds),o&&t(ie),o&&t(Os),o&&t(ge),o&&t(Ss),o&&t(Ke),o&&t(Ws),o&&t(Pe),F(jt),o&&t(Bs),o&&t(B),F(Mt),F(Ct),o&&t(Us),o&&t(Ae),F(qt),o&&t(Rs),o&&t(se),F(At),F(Nt),F(Ze),o&&t(Hs),o&&t(ze),F(Lt),o&&t(Js),o&&t(pe),F(Dt),F(Wt),F(Ye),F(Bt),o&&t(Ks),o&&t(Le),F(Ut),o&&t(Gs),o&&t(ne),F(Rt),F(Kt),F(tt),F(Gt),o&&t(Xs),o&&t(Oe),F(Xt),o&&t(Zs),o&&t(D),F(Zt),F(at),F(to),F(st),F(oo),o&&t(Qs),o&&t(We),F(ao),o&&t(Ys),o&&t(O),F(so),F(rt),F(lo),F(it),F(co),o&&t(en),o&&t(Ue),F(ho),o&&t(tn),o&&t(q),F(po),F(wo),F(dt),F(bo),o&&t(on),o&&t(He),F(yo),o&&t(an),o&&t(A),F($o),F(Mo),F(ht),F(Po)}}}const jp={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.ViTFeatureExtractor",title:"ViTFeatureExtractor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function Mp(I,h,v){let{fw:m}=h;return I.$$set=u=>{"fw"in u&&v(0,m=u.fw)},[m]}class Lp extends up{constructor(h){super();gp(this,h,Mp,Ip,_p,{fw:0})}}export{Lp as default,jp as metadata};
