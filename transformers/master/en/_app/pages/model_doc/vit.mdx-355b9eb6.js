import{S as up,i as gp,s as _p,e as a,k as d,w,t as n,M as vp,c as s,d as t,m as c,a as r,x as b,h as i,b as l,F as e,g as f,y,q as $,o as x,B as E}from"../../chunks/vendor-329198bb.js";import{T as Ee}from"../../chunks/Tip-39ae8a84.js";import{D as B}from"../../chunks/Docstring-88811472.js";import{C as zo}from"../../chunks/CodeBlock-49151c5f.js";import{I as Ve}from"../../chunks/IconCopyLink-236b0ec7.js";import"../../chunks/CopyButton-970e2b07.js";function Tp(I){let h,v,m,u,T;return{c(){h=a("p"),v=n(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=a("a"),u=n("Github Issue"),T=n("."),this.h()},l(_){h=s(_,"P",{});var g=r(h);v=i(g,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=s(g,"A",{href:!0,rel:!0});var F=r(m);u=i(F,"Github Issue"),F.forEach(t),T=i(g,"."),g.forEach(t),this.h()},h(){l(m,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),l(m,"rel","nofollow")},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function wp(I){let h,v;return{c(){h=a("p"),v=n(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(m){h=s(m,"P",{});var u=r(h);v=i(u,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),u.forEach(t)},m(m,u){f(m,h,u),e(h,v)},d(m){m&&t(h)}}}function bp(I){let h,v,m,u,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=r(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);u=i(F,"Module"),F.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function yp(I){let h,v,m,u,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=r(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);u=i(F,"Module"),F.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function $p(I){let h,v,m,u,T,_,g,F,ce,R,k,ne,M,W,te,C,he,oe;return{c(){h=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),m=d(),u=a("ul"),T=a("li"),_=n("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),F=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),ne=n("This second option is useful when using "),M=a("code"),W=n("tf.keras.Model.fit"),te=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),C=a("code"),he=n("model(inputs)"),oe=n(".")},l(V){h=s(V,"P",{});var j=r(h);v=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=c(V),u=s(V,"UL",{});var z=r(u);T=s(z,"LI",{});var Fe=r(T);_=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),g=c(z),F=s(z,"LI",{});var ae=r(F);ce=i(ae,"having all inputs as a list, tuple or dict in the first positional arguments."),ae.forEach(t),z.forEach(t),R=c(V),k=s(V,"P",{});var L=r(k);ne=i(L,"This second option is useful when using "),M=s(L,"CODE",{});var ke=r(M);W=i(ke,"tf.keras.Model.fit"),ke.forEach(t),te=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),C=s(L,"CODE",{});var ue=r(C);he=i(ue,"model(inputs)"),ue.forEach(t),oe=i(L,"."),L.forEach(t)},m(V,j){f(V,h,j),e(h,v),f(V,m,j),f(V,u,j),e(u,T),e(T,_),e(u,g),e(u,F),e(F,ce),f(V,R,j),f(V,k,j),e(k,ne),e(k,M),e(M,W),e(k,te),e(k,C),e(C,he),e(k,oe)},d(V){V&&t(h),V&&t(m),V&&t(u),V&&t(R),V&&t(k)}}}function xp(I){let h,v,m,u,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=r(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);u=i(F,"Module"),F.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function Ep(I){let h,v,m,u,T,_,g,F,ce,R,k,ne,M,W,te,C,he,oe;return{c(){h=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),m=d(),u=a("ul"),T=a("li"),_=n("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),F=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),ne=n("This second option is useful when using "),M=a("code"),W=n("tf.keras.Model.fit"),te=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),C=a("code"),he=n("model(inputs)"),oe=n(".")},l(V){h=s(V,"P",{});var j=r(h);v=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=c(V),u=s(V,"UL",{});var z=r(u);T=s(z,"LI",{});var Fe=r(T);_=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),g=c(z),F=s(z,"LI",{});var ae=r(F);ce=i(ae,"having all inputs as a list, tuple or dict in the first positional arguments."),ae.forEach(t),z.forEach(t),R=c(V),k=s(V,"P",{});var L=r(k);ne=i(L,"This second option is useful when using "),M=s(L,"CODE",{});var ke=r(M);W=i(ke,"tf.keras.Model.fit"),ke.forEach(t),te=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),C=s(L,"CODE",{});var ue=r(C);he=i(ue,"model(inputs)"),ue.forEach(t),oe=i(L,"."),L.forEach(t)},m(V,j){f(V,h,j),e(h,v),f(V,m,j),f(V,u,j),e(u,T),e(T,_),e(u,g),e(u,F),e(F,ce),f(V,R,j),f(V,k,j),e(k,ne),e(k,M),e(M,W),e(k,te),e(k,C),e(C,he),e(k,oe)},d(V){V&&t(h),V&&t(m),V&&t(u),V&&t(R),V&&t(k)}}}function Vp(I){let h,v,m,u,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=r(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);u=i(F,"Module"),F.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function Fp(I){let h,v,m,u,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=r(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);u=i(F,"Module"),F.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function kp(I){let h,v,m,u,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var g=r(h);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);u=i(F,"Module"),F.forEach(t),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){f(_,h,g),e(h,v),e(h,m),e(m,u),e(h,T)},d(_){_&&t(h)}}}function Ip(I){let h,v,m,u,T,_,g,F,ce,R,k,ne,M,W,te,C,he,oe,V,j,z,Fe,ae,L,ke,ue,No,kr,qs,Lo,ya,Ir,zs,Do,jr,Ns,N,_t,Mr,vt,Pr,Cr,Ar,$a,qr,zr,Tt,Nr,Oo,Lr,Dr,Or,Ie,Sr,xa,Wr,Ur,wt,Br,Rr,Hr,je,Jr,bt,Kr,Gr,yt,Xr,Zr,Qr,Me,Yr,$t,en,tn,xt,on,an,sn,Ea,rn,Ls,So,nn,Ds,ie,Va,P,Wo,ln,dn,Uo,cn,hn,Bo,pn,fn,Fa,mn,un,ka,gn,_n,Ia,vn,Tn,ja,wn,bn,Ro,yn,$n,xn,Ma,Ho,Jo,En,Vn,Fn,Pa,Et,kn,Vt,In,jn,Mn,Ca,Ko,Go,Pn,Cn,Os,ge,An,Ft,qn,zn,kt,Nn,Ln,Ss,Ke,Dn,It,On,Sn,Ws,Pe,Ge,Aa,jt,Wn,qa,Un,Us,U,Mt,Bn,Ce,Rn,Xo,Hn,Jn,Pt,Kn,Gn,Xn,Ae,Zn,Zo,Qn,Yn,Qo,ei,ti,oi,za,ai,si,Ct,Bs,qe,Xe,Na,At,ri,La,ni,Rs,se,qt,ii,Da,li,di,zt,ci,Yo,hi,pi,fi,_e,Nt,mi,Oa,ui,gi,Ze,Hs,ze,Qe,Sa,Lt,_i,Wa,vi,Js,pe,Dt,Ti,Ot,wi,St,bi,yi,$i,H,Wt,xi,Ne,Ei,ea,Vi,Fi,Ua,ki,Ii,ji,Ye,Mi,Ba,Pi,Ci,Ut,Ks,Le,et,Ra,Bt,Ai,Ha,qi,Gs,re,Rt,zi,Ja,Ni,Li,Ht,Di,Jt,Oi,Si,Wi,J,Kt,Ui,De,Bi,ta,Ri,Hi,Ka,Ji,Ki,Gi,tt,Xi,Ga,Zi,Qi,Gt,Xs,Oe,ot,Xa,Xt,Yi,Za,el,Zs,D,Zt,tl,Qa,ol,al,Qt,sl,oa,rl,nl,il,Yt,ll,eo,dl,cl,hl,at,pl,K,to,fl,Se,ml,aa,ul,gl,Ya,_l,vl,Tl,st,wl,es,bl,yl,oo,Qs,We,rt,ts,ao,$l,os,xl,Ys,O,so,El,as,Vl,Fl,ro,kl,sa,Il,jl,Ml,no,Pl,io,Cl,Al,ql,nt,zl,G,lo,Nl,Ue,Ll,ra,Dl,Ol,ss,Sl,Wl,Ul,it,Bl,rs,Rl,Hl,co,er,Be,lt,ns,ho,Jl,is,Kl,tr,A,po,Gl,ls,Xl,Zl,fo,Ql,na,Yl,ed,td,mo,od,uo,ad,sd,rd,ds,nd,id,fe,cs,go,ld,dd,hs,_o,cd,hd,ps,vo,pd,fd,fs,To,md,ud,X,wo,gd,Re,_d,ms,vd,Td,us,wd,bd,yd,dt,$d,gs,xd,Ed,bo,or,He,ct,_s,yo,Vd,vs,Fd,ar,q,$o,kd,Ts,Id,jd,xo,Md,ia,Pd,Cd,Ad,Eo,qd,Vo,zd,Nd,Ld,ws,Dd,Od,me,bs,Fo,Sd,Wd,ys,ko,Ud,Bd,$s,Io,Rd,Hd,xs,jo,Jd,Kd,Z,Mo,Gd,Je,Xd,Es,Zd,Qd,Vs,Yd,ec,tc,ht,oc,Fs,ac,sc,Po,sr;return _=new Ve({}),k=new Ee({props:{$$slots:{default:[Tp]},$$scope:{ctx:I}}}),C=new Ve({}),jt=new Ve({}),Mt=new B({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/configuration_vit.py#L29",parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTModel, ViTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ViTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),At=new Ve({}),qt=new B({props:{name:"class transformers.ViTFeatureExtractor",anchor:"transformers.ViTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = 2"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/feature_extraction_vit.py#L37",parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}]}}),Nt=new B({props:{name:"__call__",anchor:"transformers.ViTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/feature_extraction_vit.py#L83",parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
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
`}}),Ze=new Ee({props:{warning:"&lcub;true}",$$slots:{default:[wp]},$$scope:{ctx:I}}}),Lt=new Ve({}),Dt=new B({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_vit.py#L478",parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wt=new B({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"interpolate_pos_encoding",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_vit.py#L503",parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
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
`}}),Ye=new Ee({props:{$$slots:{default:[bp]},$$scope:{ctx:I}}}),Ut=new zo({props:{code:`from transformers import ViTFeatureExtractor, ViTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),Bt=new Ve({}),Rt=new B({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_vit.py#L583",parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Kt=new B({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"interpolate_pos_encoding",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_vit.py#L596",parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
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
`}}),tt=new Ee({props:{$$slots:{default:[yp]},$$scope:{ctx:I}}}),Gt=new zo({props:{code:`from transformers import ViTFeatureExtractor, ViTForImageClassification
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
<span class="hljs-string">&#x27;Egyptian cat&#x27;</span>`}}),Xt=new Ve({}),Zt=new B({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_tf_vit.py#L656",parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),at=new Ee({props:{$$slots:{default:[$p]},$$scope:{ctx:I}}}),to=new B({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_tf_vit.py#L662",parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
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
`}}),st=new Ee({props:{$$slots:{default:[xp]},$$scope:{ctx:I}}}),oo=new zo({props:{code:`from transformers import ViTFeatureExtractor, TFViTModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ao=new Ve({}),so=new B({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_tf_vit.py#L762",parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),nt=new Ee({props:{$$slots:{default:[Ep]},$$scope:{ctx:I}}}),lo=new B({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_tf_vit.py#L776",parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTForImageClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFViTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
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
`}}),it=new Ee({props:{$$slots:{default:[Vp]},$$scope:{ctx:I}}}),co=new zo({props:{code:`from transformers import ViTFeatureExtractor, TFViTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[<span class="hljs-built_in">int</span>(predicted_class_idx)])`}}),ho=new Ve({}),po=new B({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_flax_vit.py#L510",parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),wo=new B({props:{name:"__call__",anchor:"transformers.FlaxViTPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_flax_vit.py#L425",returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
`}}),dt=new Ee({props:{$$slots:{default:[Fp]},$$scope:{ctx:I}}}),bo=new zo({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),yo=new Ve({}),$o=new B({props:{name:"class transformers.FlaxViTForImageClassification",anchor:"transformers.FlaxViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_flax_vit.py#L591",parametersDescription:[{anchor:"transformers.FlaxViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Mo=new B({props:{name:"__call__",anchor:"transformers.FlaxViTPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vit/modeling_flax_vit.py#L425",returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
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
`}}),ht=new Ee({props:{$$slots:{default:[kp]},$$scope:{ctx:I}}}),Po=new zo({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){h=a("meta"),v=d(),m=a("h1"),u=a("a"),T=a("span"),w(_.$$.fragment),g=d(),F=a("span"),ce=n("Vision Transformer (ViT)"),R=d(),w(k.$$.fragment),ne=d(),M=a("h2"),W=a("a"),te=a("span"),w(C.$$.fragment),he=d(),oe=a("span"),V=n("Overview"),j=d(),z=a("p"),Fe=n("The Vision Transformer (ViT) model was proposed in "),ae=a("a"),L=n(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),ke=n(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),ue=d(),No=a("p"),kr=n("The abstract from the paper is the following:"),qs=d(),Lo=a("p"),ya=a("em"),Ir=n(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),zs=d(),Do=a("p"),jr=n("Tips:"),Ns=d(),N=a("ul"),_t=a("li"),Mr=n("Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),vt=a("a"),Pr=n("here"),Cr=n("."),Ar=d(),$a=a("li"),qr=n(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),zr=d(),Tt=a("li"),Nr=n(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Oo=a("a"),Lr=n("ViTFeatureExtractor"),Dr=n(" to resize (or rescale) and normalize images for the model."),Or=d(),Ie=a("li"),Sr=n(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),xa=a("code"),Wr=n("google/vit-base-patch16-224"),Ur=n(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),wt=a("a"),Br=n("hub"),Rr=n("."),Hr=d(),je=a("li"),Jr=n("The available checkpoints are either (1) pre-trained on "),bt=a("a"),Kr=n("ImageNet-21k"),Gr=n(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),yt=a("a"),Xr=n("ImageNet"),Zr=n(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Qr=d(),Me=a("li"),Yr=n(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),$t=a("a"),en=n("(Touvron et al., 2019)"),tn=n(", "),xt=a("a"),on=n(`(Kolesnikov
et al., 2020)`),an=n(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),sn=d(),Ea=a("li"),rn=n(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),Ls=d(),So=a("p"),nn=n("Following the original Vision Transformer, some follow-up works have been made:"),Ds=d(),ie=a("ul"),Va=a("li"),P=a("p"),Wo=a("a"),ln=n("DeiT"),dn=n(` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),Uo=a("a"),cn=n("ViTModel"),hn=n(` or
`),Bo=a("a"),pn=n("ViTForImageClassification"),fn=n(". There are 4 variants available (in 3 different sizes): "),Fa=a("em"),mn=n("facebook/deit-tiny-patch16-224"),un=n(`,
`),ka=a("em"),gn=n("facebook/deit-small-patch16-224"),_n=n(", "),Ia=a("em"),vn=n("facebook/deit-base-patch16-224"),Tn=n(" and "),ja=a("em"),wn=n("facebook/deit-base-patch16-384"),bn=n(`. Note that one should
use `),Ro=a("a"),yn=n("DeiTFeatureExtractor"),$n=n(" in order to prepare images for the model."),xn=d(),Ma=a("li"),Ho=a("p"),Jo=a("a"),En=n("BEiT"),Vn=n(` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Fn=d(),Pa=a("li"),Et=a("p"),kn=n(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Vt=a("a"),In=n("hub"),jn=n("."),Mn=d(),Ca=a("li"),Ko=a("p"),Go=a("a"),Pn=n("MAE"),Cn=n(` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Os=d(),ge=a("p"),An=n("This model was contributed by "),Ft=a("a"),qn=n("nielsr"),zn=n(`. The original code (written in JAX) can be
found `),kt=a("a"),Nn=n("here"),Ln=n("."),Ss=d(),Ke=a("p"),Dn=n("Note that we converted the weights from Ross Wightman\u2019s "),It=a("a"),On=n("timm library"),Sn=n(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),Ws=d(),Pe=a("h2"),Ge=a("a"),Aa=a("span"),w(jt.$$.fragment),Wn=d(),qa=a("span"),Un=n("ViTConfig"),Us=d(),U=a("div"),w(Mt.$$.fragment),Bn=d(),Ce=a("p"),Rn=n("This is the configuration class to store the configuration of a "),Xo=a("a"),Hn=n("ViTModel"),Jn=n(`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Pt=a("a"),Kn=n("google/vit-base-patch16-224"),Gn=n(" architecture."),Xn=d(),Ae=a("p"),Zn=n("Configuration objects inherit from "),Zo=a("a"),Qn=n("PretrainedConfig"),Yn=n(` and can be used to control the model outputs. Read the
documentation from `),Qo=a("a"),ei=n("PretrainedConfig"),ti=n(" for more information."),oi=d(),za=a("p"),ai=n("Example:"),si=d(),w(Ct.$$.fragment),Bs=d(),qe=a("h2"),Xe=a("a"),Na=a("span"),w(At.$$.fragment),ri=d(),La=a("span"),ni=n("ViTFeatureExtractor"),Rs=d(),se=a("div"),w(qt.$$.fragment),ii=d(),Da=a("p"),li=n("Constructs a ViT feature extractor."),di=d(),zt=a("p"),ci=n("This feature extractor inherits from "),Yo=a("a"),hi=n("FeatureExtractionMixin"),pi=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),fi=d(),_e=a("div"),w(Nt.$$.fragment),mi=d(),Oa=a("p"),ui=n("Main method to prepare for the model one or several image(s)."),gi=d(),w(Ze.$$.fragment),Hs=d(),ze=a("h2"),Qe=a("a"),Sa=a("span"),w(Lt.$$.fragment),_i=d(),Wa=a("span"),vi=n("ViTModel"),Js=d(),pe=a("div"),w(Dt.$$.fragment),Ti=d(),Ot=a("p"),wi=n(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),St=a("a"),bi=n("torch.nn.Module"),yi=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$i=d(),H=a("div"),w(Wt.$$.fragment),xi=d(),Ne=a("p"),Ei=n("The "),ea=a("a"),Vi=n("ViTModel"),Fi=n(" forward method, overrides the "),Ua=a("code"),ki=n("__call__"),Ii=n(" special method."),ji=d(),w(Ye.$$.fragment),Mi=d(),Ba=a("p"),Pi=n("Example:"),Ci=d(),w(Ut.$$.fragment),Ks=d(),Le=a("h2"),et=a("a"),Ra=a("span"),w(Bt.$$.fragment),Ai=d(),Ha=a("span"),qi=n("ViTForImageClassification"),Gs=d(),re=a("div"),w(Rt.$$.fragment),zi=d(),Ja=a("p"),Ni=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Li=d(),Ht=a("p"),Di=n("This model is a PyTorch "),Jt=a("a"),Oi=n("torch.nn.Module"),Si=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wi=d(),J=a("div"),w(Kt.$$.fragment),Ui=d(),De=a("p"),Bi=n("The "),ta=a("a"),Ri=n("ViTForImageClassification"),Hi=n(" forward method, overrides the "),Ka=a("code"),Ji=n("__call__"),Ki=n(" special method."),Gi=d(),w(tt.$$.fragment),Xi=d(),Ga=a("p"),Zi=n("Example:"),Qi=d(),w(Gt.$$.fragment),Xs=d(),Oe=a("h2"),ot=a("a"),Xa=a("span"),w(Xt.$$.fragment),Yi=d(),Za=a("span"),el=n("TFViTModel"),Zs=d(),D=a("div"),w(Zt.$$.fragment),tl=d(),Qa=a("p"),ol=n("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),al=d(),Qt=a("p"),sl=n("This model inherits from "),oa=a("a"),rl=n("TFPreTrainedModel"),nl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),il=d(),Yt=a("p"),ll=n("This model is also a "),eo=a("a"),dl=n("tf.keras.Model"),cl=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hl=d(),w(at.$$.fragment),pl=d(),K=a("div"),w(to.$$.fragment),fl=d(),Se=a("p"),ml=n("The "),aa=a("a"),ul=n("TFViTModel"),gl=n(" forward method, overrides the "),Ya=a("code"),_l=n("__call__"),vl=n(" special method."),Tl=d(),w(st.$$.fragment),wl=d(),es=a("p"),bl=n("Examples:"),yl=d(),w(oo.$$.fragment),Qs=d(),We=a("h2"),rt=a("a"),ts=a("span"),w(ao.$$.fragment),$l=d(),os=a("span"),xl=n("TFViTForImageClassification"),Ys=d(),O=a("div"),w(so.$$.fragment),El=d(),as=a("p"),Vl=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Fl=d(),ro=a("p"),kl=n("This model inherits from "),sa=a("a"),Il=n("TFPreTrainedModel"),jl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ml=d(),no=a("p"),Pl=n("This model is also a "),io=a("a"),Cl=n("tf.keras.Model"),Al=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ql=d(),w(nt.$$.fragment),zl=d(),G=a("div"),w(lo.$$.fragment),Nl=d(),Ue=a("p"),Ll=n("The "),ra=a("a"),Dl=n("TFViTForImageClassification"),Ol=n(" forward method, overrides the "),ss=a("code"),Sl=n("__call__"),Wl=n(" special method."),Ul=d(),w(it.$$.fragment),Bl=d(),rs=a("p"),Rl=n("Examples:"),Hl=d(),w(co.$$.fragment),er=d(),Be=a("h2"),lt=a("a"),ns=a("span"),w(ho.$$.fragment),Jl=d(),is=a("span"),Kl=n("FlaxVitModel"),tr=d(),A=a("div"),w(po.$$.fragment),Gl=d(),ls=a("p"),Xl=n("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Zl=d(),fo=a("p"),Ql=n("This model inherits from "),na=a("a"),Yl=n("FlaxPreTrainedModel"),ed=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),td=d(),mo=a("p"),od=n("This model is also a Flax Linen "),uo=a("a"),ad=n("flax.linen.Module"),sd=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),rd=d(),ds=a("p"),nd=n("Finally, this model supports inherent JAX features such as:"),id=d(),fe=a("ul"),cs=a("li"),go=a("a"),ld=n("Just-In-Time (JIT) compilation"),dd=d(),hs=a("li"),_o=a("a"),cd=n("Automatic Differentiation"),hd=d(),ps=a("li"),vo=a("a"),pd=n("Vectorization"),fd=d(),fs=a("li"),To=a("a"),md=n("Parallelization"),ud=d(),X=a("div"),w(wo.$$.fragment),gd=d(),Re=a("p"),_d=n("The "),ms=a("code"),vd=n("FlaxViTPreTrainedModel"),Td=n("forward method, overrides the "),us=a("code"),wd=n("__call__"),bd=n(" special method."),yd=d(),w(dt.$$.fragment),$d=d(),gs=a("p"),xd=n("Examples:"),Ed=d(),w(bo.$$.fragment),or=d(),He=a("h2"),ct=a("a"),_s=a("span"),w(yo.$$.fragment),Vd=d(),vs=a("span"),Fd=n("FlaxViTForImageClassification"),ar=d(),q=a("div"),w($o.$$.fragment),kd=d(),Ts=a("p"),Id=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),jd=d(),xo=a("p"),Md=n("This model inherits from "),ia=a("a"),Pd=n("FlaxPreTrainedModel"),Cd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ad=d(),Eo=a("p"),qd=n("This model is also a Flax Linen "),Vo=a("a"),zd=n("flax.linen.Module"),Nd=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ld=d(),ws=a("p"),Dd=n("Finally, this model supports inherent JAX features such as:"),Od=d(),me=a("ul"),bs=a("li"),Fo=a("a"),Sd=n("Just-In-Time (JIT) compilation"),Wd=d(),ys=a("li"),ko=a("a"),Ud=n("Automatic Differentiation"),Bd=d(),$s=a("li"),Io=a("a"),Rd=n("Vectorization"),Hd=d(),xs=a("li"),jo=a("a"),Jd=n("Parallelization"),Kd=d(),Z=a("div"),w(Mo.$$.fragment),Gd=d(),Je=a("p"),Xd=n("The "),Es=a("code"),Zd=n("FlaxViTPreTrainedModel"),Qd=n("forward method, overrides the "),Vs=a("code"),Yd=n("__call__"),ec=n(" special method."),tc=d(),w(ht.$$.fragment),oc=d(),Fs=a("p"),ac=n("Example:"),sc=d(),w(Po.$$.fragment),this.h()},l(o){const p=vp('[data-svelte="svelte-1phssyn"]',document.head);h=s(p,"META",{name:!0,content:!0}),p.forEach(t),v=c(o),m=s(o,"H1",{class:!0});var Co=r(m);u=s(Co,"A",{id:!0,class:!0,href:!0});var ks=r(u);T=s(ks,"SPAN",{});var Is=r(T);b(_.$$.fragment,Is),Is.forEach(t),ks.forEach(t),g=c(Co),F=s(Co,"SPAN",{});var js=r(F);ce=i(js,"Vision Transformer (ViT)"),js.forEach(t),Co.forEach(t),R=c(o),b(k.$$.fragment,o),ne=c(o),M=s(o,"H2",{class:!0});var Ao=r(M);W=s(Ao,"A",{id:!0,class:!0,href:!0});var Ms=r(W);te=s(Ms,"SPAN",{});var Ps=r(te);b(C.$$.fragment,Ps),Ps.forEach(t),Ms.forEach(t),he=c(Ao),oe=s(Ao,"SPAN",{});var Cs=r(oe);V=i(Cs,"Overview"),Cs.forEach(t),Ao.forEach(t),j=c(o),z=s(o,"P",{});var qo=r(z);Fe=i(qo,"The Vision Transformer (ViT) model was proposed in "),ae=s(qo,"A",{href:!0,rel:!0});var As=r(ae);L=i(As,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),As.forEach(t),ke=i(qo,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),qo.forEach(t),ue=c(o),No=s(o,"P",{});var ic=r(No);kr=i(ic,"The abstract from the paper is the following:"),ic.forEach(t),qs=c(o),Lo=s(o,"P",{});var lc=r(Lo);ya=s(lc,"EM",{});var dc=r(ya);Ir=i(dc,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),dc.forEach(t),lc.forEach(t),zs=c(o),Do=s(o,"P",{});var cc=r(Do);jr=i(cc,"Tips:"),cc.forEach(t),Ns=c(o),N=s(o,"UL",{});var Q=r(N);_t=s(Q,"LI",{});var rr=r(_t);Mr=i(rr,"Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),vt=s(rr,"A",{href:!0,rel:!0});var hc=r(vt);Pr=i(hc,"here"),hc.forEach(t),Cr=i(rr,"."),rr.forEach(t),Ar=c(Q),$a=s(Q,"LI",{});var pc=r($a);qr=i(pc,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),pc.forEach(t),zr=c(Q),Tt=s(Q,"LI",{});var nr=r(Tt);Nr=i(nr,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Oo=s(nr,"A",{href:!0});var fc=r(Oo);Lr=i(fc,"ViTFeatureExtractor"),fc.forEach(t),Dr=i(nr," to resize (or rescale) and normalize images for the model."),nr.forEach(t),Or=c(Q),Ie=s(Q,"LI",{});var la=r(Ie);Sr=i(la,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),xa=s(la,"CODE",{});var mc=r(xa);Wr=i(mc,"google/vit-base-patch16-224"),mc.forEach(t),Ur=i(la,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),wt=s(la,"A",{href:!0,rel:!0});var uc=r(wt);Br=i(uc,"hub"),uc.forEach(t),Rr=i(la,"."),la.forEach(t),Hr=c(Q),je=s(Q,"LI",{});var da=r(je);Jr=i(da,"The available checkpoints are either (1) pre-trained on "),bt=s(da,"A",{href:!0,rel:!0});var gc=r(bt);Kr=i(gc,"ImageNet-21k"),gc.forEach(t),Gr=i(da,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),yt=s(da,"A",{href:!0,rel:!0});var _c=r(yt);Xr=i(_c,"ImageNet"),_c.forEach(t),Zr=i(da,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),da.forEach(t),Qr=c(Q),Me=s(Q,"LI",{});var ca=r(Me);Yr=i(ca,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),$t=s(ca,"A",{href:!0,rel:!0});var vc=r($t);en=i(vc,"(Touvron et al., 2019)"),vc.forEach(t),tn=i(ca,", "),xt=s(ca,"A",{href:!0,rel:!0});var Tc=r(xt);on=i(Tc,`(Kolesnikov
et al., 2020)`),Tc.forEach(t),an=i(ca,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),ca.forEach(t),sn=c(Q),Ea=s(Q,"LI",{});var wc=r(Ea);rn=i(wc,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),wc.forEach(t),Q.forEach(t),Ls=c(o),So=s(o,"P",{});var bc=r(So);nn=i(bc,"Following the original Vision Transformer, some follow-up works have been made:"),bc.forEach(t),Ds=c(o),ie=s(o,"UL",{});var pt=r(ie);Va=s(pt,"LI",{});var yc=r(Va);P=s(yc,"P",{});var S=r(P);Wo=s(S,"A",{href:!0});var $c=r(Wo);ln=i($c,"DeiT"),$c.forEach(t),dn=i(S,` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),Uo=s(S,"A",{href:!0});var xc=r(Uo);cn=i(xc,"ViTModel"),xc.forEach(t),hn=i(S,` or
`),Bo=s(S,"A",{href:!0});var Ec=r(Bo);pn=i(Ec,"ViTForImageClassification"),Ec.forEach(t),fn=i(S,". There are 4 variants available (in 3 different sizes): "),Fa=s(S,"EM",{});var Vc=r(Fa);mn=i(Vc,"facebook/deit-tiny-patch16-224"),Vc.forEach(t),un=i(S,`,
`),ka=s(S,"EM",{});var Fc=r(ka);gn=i(Fc,"facebook/deit-small-patch16-224"),Fc.forEach(t),_n=i(S,", "),Ia=s(S,"EM",{});var kc=r(Ia);vn=i(kc,"facebook/deit-base-patch16-224"),kc.forEach(t),Tn=i(S," and "),ja=s(S,"EM",{});var Ic=r(ja);wn=i(Ic,"facebook/deit-base-patch16-384"),Ic.forEach(t),bn=i(S,`. Note that one should
use `),Ro=s(S,"A",{href:!0});var jc=r(Ro);yn=i(jc,"DeiTFeatureExtractor"),jc.forEach(t),$n=i(S," in order to prepare images for the model."),S.forEach(t),yc.forEach(t),xn=c(pt),Ma=s(pt,"LI",{});var Mc=r(Ma);Ho=s(Mc,"P",{});var rc=r(Ho);Jo=s(rc,"A",{href:!0});var Pc=r(Jo);En=i(Pc,"BEiT"),Pc.forEach(t),Vn=i(rc,` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),rc.forEach(t),Mc.forEach(t),Fn=c(pt),Pa=s(pt,"LI",{});var Cc=r(Pa);Et=s(Cc,"P",{});var ir=r(Et);kn=i(ir,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Vt=s(ir,"A",{href:!0,rel:!0});var Ac=r(Vt);In=i(Ac,"hub"),Ac.forEach(t),jn=i(ir,"."),ir.forEach(t),Cc.forEach(t),Mn=c(pt),Ca=s(pt,"LI",{});var qc=r(Ca);Ko=s(qc,"P",{});var nc=r(Ko);Go=s(nc,"A",{href:!0});var zc=r(Go);Pn=i(zc,"MAE"),zc.forEach(t),Cn=i(nc,` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),nc.forEach(t),qc.forEach(t),pt.forEach(t),Os=c(o),ge=s(o,"P",{});var ha=r(ge);An=i(ha,"This model was contributed by "),Ft=s(ha,"A",{href:!0,rel:!0});var Nc=r(Ft);qn=i(Nc,"nielsr"),Nc.forEach(t),zn=i(ha,`. The original code (written in JAX) can be
found `),kt=s(ha,"A",{href:!0,rel:!0});var Lc=r(kt);Nn=i(Lc,"here"),Lc.forEach(t),Ln=i(ha,"."),ha.forEach(t),Ss=c(o),Ke=s(o,"P",{});var lr=r(Ke);Dn=i(lr,"Note that we converted the weights from Ross Wightman\u2019s "),It=s(lr,"A",{href:!0,rel:!0});var Dc=r(It);On=i(Dc,"timm library"),Dc.forEach(t),Sn=i(lr,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),lr.forEach(t),Ws=c(o),Pe=s(o,"H2",{class:!0});var dr=r(Pe);Ge=s(dr,"A",{id:!0,class:!0,href:!0});var Oc=r(Ge);Aa=s(Oc,"SPAN",{});var Sc=r(Aa);b(jt.$$.fragment,Sc),Sc.forEach(t),Oc.forEach(t),Wn=c(dr),qa=s(dr,"SPAN",{});var Wc=r(qa);Un=i(Wc,"ViTConfig"),Wc.forEach(t),dr.forEach(t),Us=c(o),U=s(o,"DIV",{class:!0});var ve=r(U);b(Mt.$$.fragment,ve),Bn=c(ve),Ce=s(ve,"P",{});var pa=r(Ce);Rn=i(pa,"This is the configuration class to store the configuration of a "),Xo=s(pa,"A",{href:!0});var Uc=r(Xo);Hn=i(Uc,"ViTModel"),Uc.forEach(t),Jn=i(pa,`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Pt=s(pa,"A",{href:!0,rel:!0});var Bc=r(Pt);Kn=i(Bc,"google/vit-base-patch16-224"),Bc.forEach(t),Gn=i(pa," architecture."),pa.forEach(t),Xn=c(ve),Ae=s(ve,"P",{});var fa=r(Ae);Zn=i(fa,"Configuration objects inherit from "),Zo=s(fa,"A",{href:!0});var Rc=r(Zo);Qn=i(Rc,"PretrainedConfig"),Rc.forEach(t),Yn=i(fa,` and can be used to control the model outputs. Read the
documentation from `),Qo=s(fa,"A",{href:!0});var Hc=r(Qo);ei=i(Hc,"PretrainedConfig"),Hc.forEach(t),ti=i(fa," for more information."),fa.forEach(t),oi=c(ve),za=s(ve,"P",{});var Jc=r(za);ai=i(Jc,"Example:"),Jc.forEach(t),si=c(ve),b(Ct.$$.fragment,ve),ve.forEach(t),Bs=c(o),qe=s(o,"H2",{class:!0});var cr=r(qe);Xe=s(cr,"A",{id:!0,class:!0,href:!0});var Kc=r(Xe);Na=s(Kc,"SPAN",{});var Gc=r(Na);b(At.$$.fragment,Gc),Gc.forEach(t),Kc.forEach(t),ri=c(cr),La=s(cr,"SPAN",{});var Xc=r(La);ni=i(Xc,"ViTFeatureExtractor"),Xc.forEach(t),cr.forEach(t),Rs=c(o),se=s(o,"DIV",{class:!0});var ft=r(se);b(qt.$$.fragment,ft),ii=c(ft),Da=s(ft,"P",{});var Zc=r(Da);li=i(Zc,"Constructs a ViT feature extractor."),Zc.forEach(t),di=c(ft),zt=s(ft,"P",{});var hr=r(zt);ci=i(hr,"This feature extractor inherits from "),Yo=s(hr,"A",{href:!0});var Qc=r(Yo);hi=i(Qc,"FeatureExtractionMixin"),Qc.forEach(t),pi=i(hr,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),hr.forEach(t),fi=c(ft),_e=s(ft,"DIV",{class:!0});var ma=r(_e);b(Nt.$$.fragment,ma),mi=c(ma),Oa=s(ma,"P",{});var Yc=r(Oa);ui=i(Yc,"Main method to prepare for the model one or several image(s)."),Yc.forEach(t),gi=c(ma),b(Ze.$$.fragment,ma),ma.forEach(t),ft.forEach(t),Hs=c(o),ze=s(o,"H2",{class:!0});var pr=r(ze);Qe=s(pr,"A",{id:!0,class:!0,href:!0});var eh=r(Qe);Sa=s(eh,"SPAN",{});var th=r(Sa);b(Lt.$$.fragment,th),th.forEach(t),eh.forEach(t),_i=c(pr),Wa=s(pr,"SPAN",{});var oh=r(Wa);vi=i(oh,"ViTModel"),oh.forEach(t),pr.forEach(t),Js=c(o),pe=s(o,"DIV",{class:!0});var ua=r(pe);b(Dt.$$.fragment,ua),Ti=c(ua),Ot=s(ua,"P",{});var fr=r(Ot);wi=i(fr,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),St=s(fr,"A",{href:!0,rel:!0});var ah=r(St);bi=i(ah,"torch.nn.Module"),ah.forEach(t),yi=i(fr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fr.forEach(t),$i=c(ua),H=s(ua,"DIV",{class:!0});var Te=r(H);b(Wt.$$.fragment,Te),xi=c(Te),Ne=s(Te,"P",{});var ga=r(Ne);Ei=i(ga,"The "),ea=s(ga,"A",{href:!0});var sh=r(ea);Vi=i(sh,"ViTModel"),sh.forEach(t),Fi=i(ga," forward method, overrides the "),Ua=s(ga,"CODE",{});var rh=r(Ua);ki=i(rh,"__call__"),rh.forEach(t),Ii=i(ga," special method."),ga.forEach(t),ji=c(Te),b(Ye.$$.fragment,Te),Mi=c(Te),Ba=s(Te,"P",{});var nh=r(Ba);Pi=i(nh,"Example:"),nh.forEach(t),Ci=c(Te),b(Ut.$$.fragment,Te),Te.forEach(t),ua.forEach(t),Ks=c(o),Le=s(o,"H2",{class:!0});var mr=r(Le);et=s(mr,"A",{id:!0,class:!0,href:!0});var ih=r(et);Ra=s(ih,"SPAN",{});var lh=r(Ra);b(Bt.$$.fragment,lh),lh.forEach(t),ih.forEach(t),Ai=c(mr),Ha=s(mr,"SPAN",{});var dh=r(Ha);qi=i(dh,"ViTForImageClassification"),dh.forEach(t),mr.forEach(t),Gs=c(o),re=s(o,"DIV",{class:!0});var mt=r(re);b(Rt.$$.fragment,mt),zi=c(mt),Ja=s(mt,"P",{});var ch=r(Ja);Ni=i(ch,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ch.forEach(t),Li=c(mt),Ht=s(mt,"P",{});var ur=r(Ht);Di=i(ur,"This model is a PyTorch "),Jt=s(ur,"A",{href:!0,rel:!0});var hh=r(Jt);Oi=i(hh,"torch.nn.Module"),hh.forEach(t),Si=i(ur,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ur.forEach(t),Wi=c(mt),J=s(mt,"DIV",{class:!0});var we=r(J);b(Kt.$$.fragment,we),Ui=c(we),De=s(we,"P",{});var _a=r(De);Bi=i(_a,"The "),ta=s(_a,"A",{href:!0});var ph=r(ta);Ri=i(ph,"ViTForImageClassification"),ph.forEach(t),Hi=i(_a," forward method, overrides the "),Ka=s(_a,"CODE",{});var fh=r(Ka);Ji=i(fh,"__call__"),fh.forEach(t),Ki=i(_a," special method."),_a.forEach(t),Gi=c(we),b(tt.$$.fragment,we),Xi=c(we),Ga=s(we,"P",{});var mh=r(Ga);Zi=i(mh,"Example:"),mh.forEach(t),Qi=c(we),b(Gt.$$.fragment,we),we.forEach(t),mt.forEach(t),Xs=c(o),Oe=s(o,"H2",{class:!0});var gr=r(Oe);ot=s(gr,"A",{id:!0,class:!0,href:!0});var uh=r(ot);Xa=s(uh,"SPAN",{});var gh=r(Xa);b(Xt.$$.fragment,gh),gh.forEach(t),uh.forEach(t),Yi=c(gr),Za=s(gr,"SPAN",{});var _h=r(Za);el=i(_h,"TFViTModel"),_h.forEach(t),gr.forEach(t),Zs=c(o),D=s(o,"DIV",{class:!0});var le=r(D);b(Zt.$$.fragment,le),tl=c(le),Qa=s(le,"P",{});var vh=r(Qa);ol=i(vh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),vh.forEach(t),al=c(le),Qt=s(le,"P",{});var _r=r(Qt);sl=i(_r,"This model inherits from "),oa=s(_r,"A",{href:!0});var Th=r(oa);rl=i(Th,"TFPreTrainedModel"),Th.forEach(t),nl=i(_r,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_r.forEach(t),il=c(le),Yt=s(le,"P",{});var vr=r(Yt);ll=i(vr,"This model is also a "),eo=s(vr,"A",{href:!0,rel:!0});var wh=r(eo);dl=i(wh,"tf.keras.Model"),wh.forEach(t),cl=i(vr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vr.forEach(t),hl=c(le),b(at.$$.fragment,le),pl=c(le),K=s(le,"DIV",{class:!0});var be=r(K);b(to.$$.fragment,be),fl=c(be),Se=s(be,"P",{});var va=r(Se);ml=i(va,"The "),aa=s(va,"A",{href:!0});var bh=r(aa);ul=i(bh,"TFViTModel"),bh.forEach(t),gl=i(va," forward method, overrides the "),Ya=s(va,"CODE",{});var yh=r(Ya);_l=i(yh,"__call__"),yh.forEach(t),vl=i(va," special method."),va.forEach(t),Tl=c(be),b(st.$$.fragment,be),wl=c(be),es=s(be,"P",{});var $h=r(es);bl=i($h,"Examples:"),$h.forEach(t),yl=c(be),b(oo.$$.fragment,be),be.forEach(t),le.forEach(t),Qs=c(o),We=s(o,"H2",{class:!0});var Tr=r(We);rt=s(Tr,"A",{id:!0,class:!0,href:!0});var xh=r(rt);ts=s(xh,"SPAN",{});var Eh=r(ts);b(ao.$$.fragment,Eh),Eh.forEach(t),xh.forEach(t),$l=c(Tr),os=s(Tr,"SPAN",{});var Vh=r(os);xl=i(Vh,"TFViTForImageClassification"),Vh.forEach(t),Tr.forEach(t),Ys=c(o),O=s(o,"DIV",{class:!0});var de=r(O);b(so.$$.fragment,de),El=c(de),as=s(de,"P",{});var Fh=r(as);Vl=i(Fh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Fh.forEach(t),Fl=c(de),ro=s(de,"P",{});var wr=r(ro);kl=i(wr,"This model inherits from "),sa=s(wr,"A",{href:!0});var kh=r(sa);Il=i(kh,"TFPreTrainedModel"),kh.forEach(t),jl=i(wr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wr.forEach(t),Ml=c(de),no=s(de,"P",{});var br=r(no);Pl=i(br,"This model is also a "),io=s(br,"A",{href:!0,rel:!0});var Ih=r(io);Cl=i(Ih,"tf.keras.Model"),Ih.forEach(t),Al=i(br,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),br.forEach(t),ql=c(de),b(nt.$$.fragment,de),zl=c(de),G=s(de,"DIV",{class:!0});var ye=r(G);b(lo.$$.fragment,ye),Nl=c(ye),Ue=s(ye,"P",{});var Ta=r(Ue);Ll=i(Ta,"The "),ra=s(Ta,"A",{href:!0});var jh=r(ra);Dl=i(jh,"TFViTForImageClassification"),jh.forEach(t),Ol=i(Ta," forward method, overrides the "),ss=s(Ta,"CODE",{});var Mh=r(ss);Sl=i(Mh,"__call__"),Mh.forEach(t),Wl=i(Ta," special method."),Ta.forEach(t),Ul=c(ye),b(it.$$.fragment,ye),Bl=c(ye),rs=s(ye,"P",{});var Ph=r(rs);Rl=i(Ph,"Examples:"),Ph.forEach(t),Hl=c(ye),b(co.$$.fragment,ye),ye.forEach(t),de.forEach(t),er=c(o),Be=s(o,"H2",{class:!0});var yr=r(Be);lt=s(yr,"A",{id:!0,class:!0,href:!0});var Ch=r(lt);ns=s(Ch,"SPAN",{});var Ah=r(ns);b(ho.$$.fragment,Ah),Ah.forEach(t),Ch.forEach(t),Jl=c(yr),is=s(yr,"SPAN",{});var qh=r(is);Kl=i(qh,"FlaxVitModel"),qh.forEach(t),yr.forEach(t),tr=c(o),A=s(o,"DIV",{class:!0});var Y=r(A);b(po.$$.fragment,Y),Gl=c(Y),ls=s(Y,"P",{});var zh=r(ls);Xl=i(zh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),zh.forEach(t),Zl=c(Y),fo=s(Y,"P",{});var $r=r(fo);Ql=i($r,"This model inherits from "),na=s($r,"A",{href:!0});var Nh=r(na);Yl=i(Nh,"FlaxPreTrainedModel"),Nh.forEach(t),ed=i($r,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),$r.forEach(t),td=c(Y),mo=s(Y,"P",{});var xr=r(mo);od=i(xr,"This model is also a Flax Linen "),uo=s(xr,"A",{href:!0,rel:!0});var Lh=r(uo);ad=i(Lh,"flax.linen.Module"),Lh.forEach(t),sd=i(xr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xr.forEach(t),rd=c(Y),ds=s(Y,"P",{});var Dh=r(ds);nd=i(Dh,"Finally, this model supports inherent JAX features such as:"),Dh.forEach(t),id=c(Y),fe=s(Y,"UL",{});var ut=r(fe);cs=s(ut,"LI",{});var Oh=r(cs);go=s(Oh,"A",{href:!0,rel:!0});var Sh=r(go);ld=i(Sh,"Just-In-Time (JIT) compilation"),Sh.forEach(t),Oh.forEach(t),dd=c(ut),hs=s(ut,"LI",{});var Wh=r(hs);_o=s(Wh,"A",{href:!0,rel:!0});var Uh=r(_o);cd=i(Uh,"Automatic Differentiation"),Uh.forEach(t),Wh.forEach(t),hd=c(ut),ps=s(ut,"LI",{});var Bh=r(ps);vo=s(Bh,"A",{href:!0,rel:!0});var Rh=r(vo);pd=i(Rh,"Vectorization"),Rh.forEach(t),Bh.forEach(t),fd=c(ut),fs=s(ut,"LI",{});var Hh=r(fs);To=s(Hh,"A",{href:!0,rel:!0});var Jh=r(To);md=i(Jh,"Parallelization"),Jh.forEach(t),Hh.forEach(t),ut.forEach(t),ud=c(Y),X=s(Y,"DIV",{class:!0});var $e=r(X);b(wo.$$.fragment,$e),gd=c($e),Re=s($e,"P",{});var wa=r(Re);_d=i(wa,"The "),ms=s(wa,"CODE",{});var Kh=r(ms);vd=i(Kh,"FlaxViTPreTrainedModel"),Kh.forEach(t),Td=i(wa,"forward method, overrides the "),us=s(wa,"CODE",{});var Gh=r(us);wd=i(Gh,"__call__"),Gh.forEach(t),bd=i(wa," special method."),wa.forEach(t),yd=c($e),b(dt.$$.fragment,$e),$d=c($e),gs=s($e,"P",{});var Xh=r(gs);xd=i(Xh,"Examples:"),Xh.forEach(t),Ed=c($e),b(bo.$$.fragment,$e),$e.forEach(t),Y.forEach(t),or=c(o),He=s(o,"H2",{class:!0});var Er=r(He);ct=s(Er,"A",{id:!0,class:!0,href:!0});var Zh=r(ct);_s=s(Zh,"SPAN",{});var Qh=r(_s);b(yo.$$.fragment,Qh),Qh.forEach(t),Zh.forEach(t),Vd=c(Er),vs=s(Er,"SPAN",{});var Yh=r(vs);Fd=i(Yh,"FlaxViTForImageClassification"),Yh.forEach(t),Er.forEach(t),ar=c(o),q=s(o,"DIV",{class:!0});var ee=r(q);b($o.$$.fragment,ee),kd=c(ee),Ts=s(ee,"P",{});var ep=r(Ts);Id=i(ep,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ep.forEach(t),jd=c(ee),xo=s(ee,"P",{});var Vr=r(xo);Md=i(Vr,"This model inherits from "),ia=s(Vr,"A",{href:!0});var tp=r(ia);Pd=i(tp,"FlaxPreTrainedModel"),tp.forEach(t),Cd=i(Vr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Vr.forEach(t),Ad=c(ee),Eo=s(ee,"P",{});var Fr=r(Eo);qd=i(Fr,"This model is also a Flax Linen "),Vo=s(Fr,"A",{href:!0,rel:!0});var op=r(Vo);zd=i(op,"flax.linen.Module"),op.forEach(t),Nd=i(Fr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fr.forEach(t),Ld=c(ee),ws=s(ee,"P",{});var ap=r(ws);Dd=i(ap,"Finally, this model supports inherent JAX features such as:"),ap.forEach(t),Od=c(ee),me=s(ee,"UL",{});var gt=r(me);bs=s(gt,"LI",{});var sp=r(bs);Fo=s(sp,"A",{href:!0,rel:!0});var rp=r(Fo);Sd=i(rp,"Just-In-Time (JIT) compilation"),rp.forEach(t),sp.forEach(t),Wd=c(gt),ys=s(gt,"LI",{});var np=r(ys);ko=s(np,"A",{href:!0,rel:!0});var ip=r(ko);Ud=i(ip,"Automatic Differentiation"),ip.forEach(t),np.forEach(t),Bd=c(gt),$s=s(gt,"LI",{});var lp=r($s);Io=s(lp,"A",{href:!0,rel:!0});var dp=r(Io);Rd=i(dp,"Vectorization"),dp.forEach(t),lp.forEach(t),Hd=c(gt),xs=s(gt,"LI",{});var cp=r(xs);jo=s(cp,"A",{href:!0,rel:!0});var hp=r(jo);Jd=i(hp,"Parallelization"),hp.forEach(t),cp.forEach(t),gt.forEach(t),Kd=c(ee),Z=s(ee,"DIV",{class:!0});var xe=r(Z);b(Mo.$$.fragment,xe),Gd=c(xe),Je=s(xe,"P",{});var ba=r(Je);Xd=i(ba,"The "),Es=s(ba,"CODE",{});var pp=r(Es);Zd=i(pp,"FlaxViTPreTrainedModel"),pp.forEach(t),Qd=i(ba,"forward method, overrides the "),Vs=s(ba,"CODE",{});var fp=r(Vs);Yd=i(fp,"__call__"),fp.forEach(t),ec=i(ba," special method."),ba.forEach(t),tc=c(xe),b(ht.$$.fragment,xe),oc=c(xe),Fs=s(xe,"P",{});var mp=r(Fs);ac=i(mp,"Example:"),mp.forEach(t),sc=c(xe),b(Po.$$.fragment,xe),xe.forEach(t),ee.forEach(t),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(jp)),l(u,"id","vision-transformer-vit"),l(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(u,"href","#vision-transformer-vit"),l(m,"class","relative group"),l(W,"id","overview"),l(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(W,"href","#overview"),l(M,"class","relative group"),l(ae,"href","https://arxiv.org/abs/2010.11929"),l(ae,"rel","nofollow"),l(vt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),l(vt,"rel","nofollow"),l(Oo,"href","/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor"),l(wt,"href","https://huggingface.co/models?search=vit"),l(wt,"rel","nofollow"),l(bt,"href","http://www.image-net.org/"),l(bt,"rel","nofollow"),l(yt,"href","http://www.image-net.org/challenges/LSVRC/2012/"),l(yt,"rel","nofollow"),l($t,"href","https://arxiv.org/abs/1906.06423"),l($t,"rel","nofollow"),l(xt,"href","https://arxiv.org/abs/1912.11370"),l(xt,"rel","nofollow"),l(Wo,"href","deit"),l(Uo,"href","/docs/transformers/master/en/model_doc/vit#transformers.ViTModel"),l(Bo,"href","/docs/transformers/master/en/model_doc/vit#transformers.ViTForImageClassification"),l(Ro,"href","/docs/transformers/master/en/model_doc/deit#transformers.DeiTFeatureExtractor"),l(Jo,"href","beit"),l(Vt,"href","https://huggingface.co/models?other=dino"),l(Vt,"rel","nofollow"),l(Go,"href","vit_mae"),l(Ft,"href","https://huggingface.co/nielsr"),l(Ft,"rel","nofollow"),l(kt,"href","https://github.com/google-research/vision_transformer"),l(kt,"rel","nofollow"),l(It,"href","https://github.com/rwightman/pytorch-image-models"),l(It,"rel","nofollow"),l(Ge,"id","transformers.ViTConfig"),l(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ge,"href","#transformers.ViTConfig"),l(Pe,"class","relative group"),l(Xo,"href","/docs/transformers/master/en/model_doc/vit#transformers.ViTModel"),l(Pt,"href","https://huggingface.co/google/vit-base-patch16-224"),l(Pt,"rel","nofollow"),l(Zo,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(Qo,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(U,"class","docstring"),l(Xe,"id","transformers.ViTFeatureExtractor"),l(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Xe,"href","#transformers.ViTFeatureExtractor"),l(qe,"class","relative group"),l(Yo,"href","/docs/transformers/master/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),l(_e,"class","docstring"),l(se,"class","docstring"),l(Qe,"id","transformers.ViTModel"),l(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Qe,"href","#transformers.ViTModel"),l(ze,"class","relative group"),l(St,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(St,"rel","nofollow"),l(ea,"href","/docs/transformers/master/en/model_doc/vit#transformers.ViTModel"),l(H,"class","docstring"),l(pe,"class","docstring"),l(et,"id","transformers.ViTForImageClassification"),l(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(et,"href","#transformers.ViTForImageClassification"),l(Le,"class","relative group"),l(Jt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Jt,"rel","nofollow"),l(ta,"href","/docs/transformers/master/en/model_doc/vit#transformers.ViTForImageClassification"),l(J,"class","docstring"),l(re,"class","docstring"),l(ot,"id","transformers.TFViTModel"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.TFViTModel"),l(Oe,"class","relative group"),l(oa,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),l(eo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(eo,"rel","nofollow"),l(aa,"href","/docs/transformers/master/en/model_doc/vit#transformers.TFViTModel"),l(K,"class","docstring"),l(D,"class","docstring"),l(rt,"id","transformers.TFViTForImageClassification"),l(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(rt,"href","#transformers.TFViTForImageClassification"),l(We,"class","relative group"),l(sa,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),l(io,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(io,"rel","nofollow"),l(ra,"href","/docs/transformers/master/en/model_doc/vit#transformers.TFViTForImageClassification"),l(G,"class","docstring"),l(O,"class","docstring"),l(lt,"id","transformers.FlaxViTModel"),l(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lt,"href","#transformers.FlaxViTModel"),l(Be,"class","relative group"),l(na,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(uo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(uo,"rel","nofollow"),l(go,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(go,"rel","nofollow"),l(_o,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(_o,"rel","nofollow"),l(vo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(vo,"rel","nofollow"),l(To,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(To,"rel","nofollow"),l(X,"class","docstring"),l(A,"class","docstring"),l(ct,"id","transformers.FlaxViTForImageClassification"),l(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ct,"href","#transformers.FlaxViTForImageClassification"),l(He,"class","relative group"),l(ia,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(Vo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Vo,"rel","nofollow"),l(Fo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(Fo,"rel","nofollow"),l(ko,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(ko,"rel","nofollow"),l(Io,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Io,"rel","nofollow"),l(jo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(jo,"rel","nofollow"),l(Z,"class","docstring"),l(q,"class","docstring")},m(o,p){e(document.head,h),f(o,v,p),f(o,m,p),e(m,u),e(u,T),y(_,T,null),e(m,g),e(m,F),e(F,ce),f(o,R,p),y(k,o,p),f(o,ne,p),f(o,M,p),e(M,W),e(W,te),y(C,te,null),e(M,he),e(M,oe),e(oe,V),f(o,j,p),f(o,z,p),e(z,Fe),e(z,ae),e(ae,L),e(z,ke),f(o,ue,p),f(o,No,p),e(No,kr),f(o,qs,p),f(o,Lo,p),e(Lo,ya),e(ya,Ir),f(o,zs,p),f(o,Do,p),e(Do,jr),f(o,Ns,p),f(o,N,p),e(N,_t),e(_t,Mr),e(_t,vt),e(vt,Pr),e(_t,Cr),e(N,Ar),e(N,$a),e($a,qr),e(N,zr),e(N,Tt),e(Tt,Nr),e(Tt,Oo),e(Oo,Lr),e(Tt,Dr),e(N,Or),e(N,Ie),e(Ie,Sr),e(Ie,xa),e(xa,Wr),e(Ie,Ur),e(Ie,wt),e(wt,Br),e(Ie,Rr),e(N,Hr),e(N,je),e(je,Jr),e(je,bt),e(bt,Kr),e(je,Gr),e(je,yt),e(yt,Xr),e(je,Zr),e(N,Qr),e(N,Me),e(Me,Yr),e(Me,$t),e($t,en),e(Me,tn),e(Me,xt),e(xt,on),e(Me,an),e(N,sn),e(N,Ea),e(Ea,rn),f(o,Ls,p),f(o,So,p),e(So,nn),f(o,Ds,p),f(o,ie,p),e(ie,Va),e(Va,P),e(P,Wo),e(Wo,ln),e(P,dn),e(P,Uo),e(Uo,cn),e(P,hn),e(P,Bo),e(Bo,pn),e(P,fn),e(P,Fa),e(Fa,mn),e(P,un),e(P,ka),e(ka,gn),e(P,_n),e(P,Ia),e(Ia,vn),e(P,Tn),e(P,ja),e(ja,wn),e(P,bn),e(P,Ro),e(Ro,yn),e(P,$n),e(ie,xn),e(ie,Ma),e(Ma,Ho),e(Ho,Jo),e(Jo,En),e(Ho,Vn),e(ie,Fn),e(ie,Pa),e(Pa,Et),e(Et,kn),e(Et,Vt),e(Vt,In),e(Et,jn),e(ie,Mn),e(ie,Ca),e(Ca,Ko),e(Ko,Go),e(Go,Pn),e(Ko,Cn),f(o,Os,p),f(o,ge,p),e(ge,An),e(ge,Ft),e(Ft,qn),e(ge,zn),e(ge,kt),e(kt,Nn),e(ge,Ln),f(o,Ss,p),f(o,Ke,p),e(Ke,Dn),e(Ke,It),e(It,On),e(Ke,Sn),f(o,Ws,p),f(o,Pe,p),e(Pe,Ge),e(Ge,Aa),y(jt,Aa,null),e(Pe,Wn),e(Pe,qa),e(qa,Un),f(o,Us,p),f(o,U,p),y(Mt,U,null),e(U,Bn),e(U,Ce),e(Ce,Rn),e(Ce,Xo),e(Xo,Hn),e(Ce,Jn),e(Ce,Pt),e(Pt,Kn),e(Ce,Gn),e(U,Xn),e(U,Ae),e(Ae,Zn),e(Ae,Zo),e(Zo,Qn),e(Ae,Yn),e(Ae,Qo),e(Qo,ei),e(Ae,ti),e(U,oi),e(U,za),e(za,ai),e(U,si),y(Ct,U,null),f(o,Bs,p),f(o,qe,p),e(qe,Xe),e(Xe,Na),y(At,Na,null),e(qe,ri),e(qe,La),e(La,ni),f(o,Rs,p),f(o,se,p),y(qt,se,null),e(se,ii),e(se,Da),e(Da,li),e(se,di),e(se,zt),e(zt,ci),e(zt,Yo),e(Yo,hi),e(zt,pi),e(se,fi),e(se,_e),y(Nt,_e,null),e(_e,mi),e(_e,Oa),e(Oa,ui),e(_e,gi),y(Ze,_e,null),f(o,Hs,p),f(o,ze,p),e(ze,Qe),e(Qe,Sa),y(Lt,Sa,null),e(ze,_i),e(ze,Wa),e(Wa,vi),f(o,Js,p),f(o,pe,p),y(Dt,pe,null),e(pe,Ti),e(pe,Ot),e(Ot,wi),e(Ot,St),e(St,bi),e(Ot,yi),e(pe,$i),e(pe,H),y(Wt,H,null),e(H,xi),e(H,Ne),e(Ne,Ei),e(Ne,ea),e(ea,Vi),e(Ne,Fi),e(Ne,Ua),e(Ua,ki),e(Ne,Ii),e(H,ji),y(Ye,H,null),e(H,Mi),e(H,Ba),e(Ba,Pi),e(H,Ci),y(Ut,H,null),f(o,Ks,p),f(o,Le,p),e(Le,et),e(et,Ra),y(Bt,Ra,null),e(Le,Ai),e(Le,Ha),e(Ha,qi),f(o,Gs,p),f(o,re,p),y(Rt,re,null),e(re,zi),e(re,Ja),e(Ja,Ni),e(re,Li),e(re,Ht),e(Ht,Di),e(Ht,Jt),e(Jt,Oi),e(Ht,Si),e(re,Wi),e(re,J),y(Kt,J,null),e(J,Ui),e(J,De),e(De,Bi),e(De,ta),e(ta,Ri),e(De,Hi),e(De,Ka),e(Ka,Ji),e(De,Ki),e(J,Gi),y(tt,J,null),e(J,Xi),e(J,Ga),e(Ga,Zi),e(J,Qi),y(Gt,J,null),f(o,Xs,p),f(o,Oe,p),e(Oe,ot),e(ot,Xa),y(Xt,Xa,null),e(Oe,Yi),e(Oe,Za),e(Za,el),f(o,Zs,p),f(o,D,p),y(Zt,D,null),e(D,tl),e(D,Qa),e(Qa,ol),e(D,al),e(D,Qt),e(Qt,sl),e(Qt,oa),e(oa,rl),e(Qt,nl),e(D,il),e(D,Yt),e(Yt,ll),e(Yt,eo),e(eo,dl),e(Yt,cl),e(D,hl),y(at,D,null),e(D,pl),e(D,K),y(to,K,null),e(K,fl),e(K,Se),e(Se,ml),e(Se,aa),e(aa,ul),e(Se,gl),e(Se,Ya),e(Ya,_l),e(Se,vl),e(K,Tl),y(st,K,null),e(K,wl),e(K,es),e(es,bl),e(K,yl),y(oo,K,null),f(o,Qs,p),f(o,We,p),e(We,rt),e(rt,ts),y(ao,ts,null),e(We,$l),e(We,os),e(os,xl),f(o,Ys,p),f(o,O,p),y(so,O,null),e(O,El),e(O,as),e(as,Vl),e(O,Fl),e(O,ro),e(ro,kl),e(ro,sa),e(sa,Il),e(ro,jl),e(O,Ml),e(O,no),e(no,Pl),e(no,io),e(io,Cl),e(no,Al),e(O,ql),y(nt,O,null),e(O,zl),e(O,G),y(lo,G,null),e(G,Nl),e(G,Ue),e(Ue,Ll),e(Ue,ra),e(ra,Dl),e(Ue,Ol),e(Ue,ss),e(ss,Sl),e(Ue,Wl),e(G,Ul),y(it,G,null),e(G,Bl),e(G,rs),e(rs,Rl),e(G,Hl),y(co,G,null),f(o,er,p),f(o,Be,p),e(Be,lt),e(lt,ns),y(ho,ns,null),e(Be,Jl),e(Be,is),e(is,Kl),f(o,tr,p),f(o,A,p),y(po,A,null),e(A,Gl),e(A,ls),e(ls,Xl),e(A,Zl),e(A,fo),e(fo,Ql),e(fo,na),e(na,Yl),e(fo,ed),e(A,td),e(A,mo),e(mo,od),e(mo,uo),e(uo,ad),e(mo,sd),e(A,rd),e(A,ds),e(ds,nd),e(A,id),e(A,fe),e(fe,cs),e(cs,go),e(go,ld),e(fe,dd),e(fe,hs),e(hs,_o),e(_o,cd),e(fe,hd),e(fe,ps),e(ps,vo),e(vo,pd),e(fe,fd),e(fe,fs),e(fs,To),e(To,md),e(A,ud),e(A,X),y(wo,X,null),e(X,gd),e(X,Re),e(Re,_d),e(Re,ms),e(ms,vd),e(Re,Td),e(Re,us),e(us,wd),e(Re,bd),e(X,yd),y(dt,X,null),e(X,$d),e(X,gs),e(gs,xd),e(X,Ed),y(bo,X,null),f(o,or,p),f(o,He,p),e(He,ct),e(ct,_s),y(yo,_s,null),e(He,Vd),e(He,vs),e(vs,Fd),f(o,ar,p),f(o,q,p),y($o,q,null),e(q,kd),e(q,Ts),e(Ts,Id),e(q,jd),e(q,xo),e(xo,Md),e(xo,ia),e(ia,Pd),e(xo,Cd),e(q,Ad),e(q,Eo),e(Eo,qd),e(Eo,Vo),e(Vo,zd),e(Eo,Nd),e(q,Ld),e(q,ws),e(ws,Dd),e(q,Od),e(q,me),e(me,bs),e(bs,Fo),e(Fo,Sd),e(me,Wd),e(me,ys),e(ys,ko),e(ko,Ud),e(me,Bd),e(me,$s),e($s,Io),e(Io,Rd),e(me,Hd),e(me,xs),e(xs,jo),e(jo,Jd),e(q,Kd),e(q,Z),y(Mo,Z,null),e(Z,Gd),e(Z,Je),e(Je,Xd),e(Je,Es),e(Es,Zd),e(Je,Qd),e(Je,Vs),e(Vs,Yd),e(Je,ec),e(Z,tc),y(ht,Z,null),e(Z,oc),e(Z,Fs),e(Fs,ac),e(Z,sc),y(Po,Z,null),sr=!0},p(o,[p]){const Co={};p&2&&(Co.$$scope={dirty:p,ctx:o}),k.$set(Co);const ks={};p&2&&(ks.$$scope={dirty:p,ctx:o}),Ze.$set(ks);const Is={};p&2&&(Is.$$scope={dirty:p,ctx:o}),Ye.$set(Is);const js={};p&2&&(js.$$scope={dirty:p,ctx:o}),tt.$set(js);const Ao={};p&2&&(Ao.$$scope={dirty:p,ctx:o}),at.$set(Ao);const Ms={};p&2&&(Ms.$$scope={dirty:p,ctx:o}),st.$set(Ms);const Ps={};p&2&&(Ps.$$scope={dirty:p,ctx:o}),nt.$set(Ps);const Cs={};p&2&&(Cs.$$scope={dirty:p,ctx:o}),it.$set(Cs);const qo={};p&2&&(qo.$$scope={dirty:p,ctx:o}),dt.$set(qo);const As={};p&2&&(As.$$scope={dirty:p,ctx:o}),ht.$set(As)},i(o){sr||($(_.$$.fragment,o),$(k.$$.fragment,o),$(C.$$.fragment,o),$(jt.$$.fragment,o),$(Mt.$$.fragment,o),$(Ct.$$.fragment,o),$(At.$$.fragment,o),$(qt.$$.fragment,o),$(Nt.$$.fragment,o),$(Ze.$$.fragment,o),$(Lt.$$.fragment,o),$(Dt.$$.fragment,o),$(Wt.$$.fragment,o),$(Ye.$$.fragment,o),$(Ut.$$.fragment,o),$(Bt.$$.fragment,o),$(Rt.$$.fragment,o),$(Kt.$$.fragment,o),$(tt.$$.fragment,o),$(Gt.$$.fragment,o),$(Xt.$$.fragment,o),$(Zt.$$.fragment,o),$(at.$$.fragment,o),$(to.$$.fragment,o),$(st.$$.fragment,o),$(oo.$$.fragment,o),$(ao.$$.fragment,o),$(so.$$.fragment,o),$(nt.$$.fragment,o),$(lo.$$.fragment,o),$(it.$$.fragment,o),$(co.$$.fragment,o),$(ho.$$.fragment,o),$(po.$$.fragment,o),$(wo.$$.fragment,o),$(dt.$$.fragment,o),$(bo.$$.fragment,o),$(yo.$$.fragment,o),$($o.$$.fragment,o),$(Mo.$$.fragment,o),$(ht.$$.fragment,o),$(Po.$$.fragment,o),sr=!0)},o(o){x(_.$$.fragment,o),x(k.$$.fragment,o),x(C.$$.fragment,o),x(jt.$$.fragment,o),x(Mt.$$.fragment,o),x(Ct.$$.fragment,o),x(At.$$.fragment,o),x(qt.$$.fragment,o),x(Nt.$$.fragment,o),x(Ze.$$.fragment,o),x(Lt.$$.fragment,o),x(Dt.$$.fragment,o),x(Wt.$$.fragment,o),x(Ye.$$.fragment,o),x(Ut.$$.fragment,o),x(Bt.$$.fragment,o),x(Rt.$$.fragment,o),x(Kt.$$.fragment,o),x(tt.$$.fragment,o),x(Gt.$$.fragment,o),x(Xt.$$.fragment,o),x(Zt.$$.fragment,o),x(at.$$.fragment,o),x(to.$$.fragment,o),x(st.$$.fragment,o),x(oo.$$.fragment,o),x(ao.$$.fragment,o),x(so.$$.fragment,o),x(nt.$$.fragment,o),x(lo.$$.fragment,o),x(it.$$.fragment,o),x(co.$$.fragment,o),x(ho.$$.fragment,o),x(po.$$.fragment,o),x(wo.$$.fragment,o),x(dt.$$.fragment,o),x(bo.$$.fragment,o),x(yo.$$.fragment,o),x($o.$$.fragment,o),x(Mo.$$.fragment,o),x(ht.$$.fragment,o),x(Po.$$.fragment,o),sr=!1},d(o){t(h),o&&t(v),o&&t(m),E(_),o&&t(R),E(k,o),o&&t(ne),o&&t(M),E(C),o&&t(j),o&&t(z),o&&t(ue),o&&t(No),o&&t(qs),o&&t(Lo),o&&t(zs),o&&t(Do),o&&t(Ns),o&&t(N),o&&t(Ls),o&&t(So),o&&t(Ds),o&&t(ie),o&&t(Os),o&&t(ge),o&&t(Ss),o&&t(Ke),o&&t(Ws),o&&t(Pe),E(jt),o&&t(Us),o&&t(U),E(Mt),E(Ct),o&&t(Bs),o&&t(qe),E(At),o&&t(Rs),o&&t(se),E(qt),E(Nt),E(Ze),o&&t(Hs),o&&t(ze),E(Lt),o&&t(Js),o&&t(pe),E(Dt),E(Wt),E(Ye),E(Ut),o&&t(Ks),o&&t(Le),E(Bt),o&&t(Gs),o&&t(re),E(Rt),E(Kt),E(tt),E(Gt),o&&t(Xs),o&&t(Oe),E(Xt),o&&t(Zs),o&&t(D),E(Zt),E(at),E(to),E(st),E(oo),o&&t(Qs),o&&t(We),E(ao),o&&t(Ys),o&&t(O),E(so),E(nt),E(lo),E(it),E(co),o&&t(er),o&&t(Be),E(ho),o&&t(tr),o&&t(A),E(po),E(wo),E(dt),E(bo),o&&t(or),o&&t(He),E(yo),o&&t(ar),o&&t(q),E($o),E(Mo),E(ht),E(Po)}}}const jp={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.ViTFeatureExtractor",title:"ViTFeatureExtractor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function Mp(I,h,v){let{fw:m}=h;return I.$$set=u=>{"fw"in u&&v(0,m=u.fw)},[m]}class Lp extends up{constructor(h){super();gp(this,h,Mp,Ip,_p,{fw:0})}}export{Lp as default,jp as metadata};
