import{S as Ym,i as Jm,s as Km,e as r,k as d,w as k,t as o,M as Qm,c as s,d as t,m as l,a,x as b,h as n,b as m,G as e,g as P,y as v,q as T,o as y,B as w,v as Zm,L as ys}from"../../chunks/vendor-hf-doc-builder.js";import{T as Lr}from"../../chunks/Tip-hf-doc-builder.js";import{D as E}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ws}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as vs}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ts}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function eh(q){let p,$,f,h,x;return{c(){p=r("p"),$=o("This method is deprecated, "),f=r("code"),h=o("__call__"),x=o(" should be used instead.")},l(c){p=s(c,"P",{});var _=a(p);$=n(_,"This method is deprecated, "),f=s(_,"CODE",{});var L=a(f);h=n(L,"__call__"),L.forEach(t),x=n(_," should be used instead."),_.forEach(t)},m(c,_){P(c,p,_),e(p,$),e(p,f),e(f,h),e(p,x)},d(c){c&&t(p)}}}function th(q){let p,$,f,h,x;return{c(){p=r("p"),$=o("This method is deprecated, "),f=r("code"),h=o("__call__"),x=o(" should be used instead.")},l(c){p=s(c,"P",{});var _=a(p);$=n(_,"This method is deprecated, "),f=s(_,"CODE",{});var L=a(f);h=n(L,"__call__"),L.forEach(t),x=n(_," should be used instead."),_.forEach(t)},m(c,_){P(c,p,_),e(p,$),e(p,f),e(f,h),e(p,x)},d(c){c&&t(p)}}}function oh(q){let p,$,f,h,x;return{c(){p=r("p"),$=o("Passing "),f=r("code"),h=o("use_auth_token=True"),x=o(" is required when you want to use a private model.")},l(c){p=s(c,"P",{});var _=a(p);$=n(_,"Passing "),f=s(_,"CODE",{});var L=a(f);h=n(L,"use_auth_token=True"),L.forEach(t),x=n(_," is required when you want to use a private model."),_.forEach(t)},m(c,_){P(c,p,_),e(p,$),e(p,f),e(f,h),e(p,x)},d(c){c&&t(p)}}}function nh(q){let p,$,f,h,x;return h=new ws({props:{code:`# We can't instantiate directly the base class *PreTrainedTokenizerBase* so let's show our examples on a derived class: BertTokenizer
# Download vocabulary from huggingface.co and cache.
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

# Download vocabulary from huggingface.co (user-uploaded) and cache.
tokenizer = BertTokenizer.from_pretrained("dbmdz/bert-base-german-cased")

# If vocabulary files are in a directory (e.g. tokenizer was saved using *save_pretrained('./test/saved_model/')*)
tokenizer = BertTokenizer.from_pretrained("./test/saved_model/")

# If the tokenizer uses a single vocabulary file, you can point directly to this file
tokenizer = BertTokenizer.from_pretrained("./test/saved_model/my_vocab.txt")

# You can link tokens to special vocabulary when instantiating
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased", unk_token="<unk>")
# You should be sure '<unk>' is in the vocabulary when doing that.
# Otherwise use tokenizer.add_special_tokens({'unk_token': '<unk>'}) instead)
assert tokenizer.unk_token == "<unk>"`,highlighted:`<span class="hljs-comment"># We can&#x27;t instantiate directly the base class *PreTrainedTokenizerBase* so let&#x27;s show our examples on a derived class: BertTokenizer</span>
<span class="hljs-comment"># Download vocabulary from huggingface.co and cache.</span>
tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-comment"># Download vocabulary from huggingface.co (user-uploaded) and cache.</span>
tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-base-german-cased&quot;</span>)

<span class="hljs-comment"># If vocabulary files are in a directory (e.g. tokenizer was saved using *save_pretrained(&#x27;./test/saved_model/&#x27;)*)</span>
tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;./test/saved_model/&quot;</span>)

<span class="hljs-comment"># If the tokenizer uses a single vocabulary file, you can point directly to this file</span>
tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;./test/saved_model/my_vocab.txt&quot;</span>)

<span class="hljs-comment"># You can link tokens to special vocabulary when instantiating</span>
tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, unk_token=<span class="hljs-string">&quot;&lt;unk&gt;&quot;</span>)
<span class="hljs-comment"># You should be sure &#x27;&lt;unk&gt;&#x27; is in the vocabulary when doing that.</span>
<span class="hljs-comment"># Otherwise use tokenizer.add_special_tokens({&#x27;unk_token&#x27;: &#x27;&lt;unk&gt;&#x27;}) instead)</span>
<span class="hljs-keyword">assert</span> tokenizer.unk_token == <span class="hljs-string">&quot;&lt;unk&gt;&quot;</span>`}}),{c(){p=r("p"),$=o("Examples:"),f=d(),k(h.$$.fragment)},l(c){p=s(c,"P",{});var _=a(p);$=n(_,"Examples:"),_.forEach(t),f=l(c),b(h.$$.fragment,c)},m(c,_){P(c,p,_),e(p,$),P(c,f,_),v(h,c,_),x=!0},p:ys,i(c){x||(T(h.$$.fragment,c),x=!0)},o(c){y(h.$$.fragment,c),x=!1},d(c){c&&t(p),c&&t(f),w(h,c)}}}function rh(q){let p,$,f,h,x,c,_,L;return{c(){p=r("p"),$=o("If the "),f=r("code"),h=o("encoded_inputs"),x=o(` passed are dictionary of numpy arrays, PyTorch tensors or TensorFlow tensors, the
result will use the same type unless you provide a different tensor type with `),c=r("code"),_=o("return_tensors"),L=o(`. In the case of
PyTorch tensors, you will lose the specific device of your tensors however.`)},l(ge){p=s(ge,"P",{});var j=a(p);$=n(j,"If the "),f=s(j,"CODE",{});var D=a(f);h=n(D,"encoded_inputs"),D.forEach(t),x=n(j,` passed are dictionary of numpy arrays, PyTorch tensors or TensorFlow tensors, the
result will use the same type unless you provide a different tensor type with `),c=s(j,"CODE",{});var ro=a(c);_=n(ro,"return_tensors"),ro.forEach(t),L=n(j,`. In the case of
PyTorch tensors, you will lose the specific device of your tensors however.`),j.forEach(t)},m(ge,j){P(ge,p,j),e(p,$),e(p,f),e(f,h),e(p,x),e(p,c),e(c,_),e(p,L)},d(ge){ge&&t(p)}}}function sh(q){let p,$,f,h,x;return h=new ws({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")

# Push the tokenizer to your namespace with the name "my-finetuned-bert".
tokenizer.push_to_hub("my-finetuned-bert")

# Push the tokenizer to an organization with the name "my-finetuned-bert".
tokenizer.push_to_hub("huggingface/my-finetuned-bert")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-comment"># Push the tokenizer to your namespace with the name &quot;my-finetuned-bert&quot;.</span>
tokenizer.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>)

<span class="hljs-comment"># Push the tokenizer to an organization with the name &quot;my-finetuned-bert&quot;.</span>
tokenizer.push_to_hub(<span class="hljs-string">&quot;huggingface/my-finetuned-bert&quot;</span>)`}}),{c(){p=r("p"),$=o("Examples:"),f=d(),k(h.$$.fragment)},l(c){p=s(c,"P",{});var _=a(p);$=n(_,"Examples:"),_.forEach(t),f=l(c),b(h.$$.fragment,c)},m(c,_){P(c,p,_),e(p,$),P(c,f,_),v(h,c,_),x=!0},p:ys,i(c){x||(T(h.$$.fragment,c),x=!0)},o(c){y(h.$$.fragment,c),x=!1},d(c){c&&t(p),c&&t(f),w(h,c)}}}function ah(q){let p,$;return{c(){p=r("p"),$=o("This API is experimental and may have some slight breaking changes in the next releases.")},l(f){p=s(f,"P",{});var h=a(p);$=n(h,"This API is experimental and may have some slight breaking changes in the next releases."),h.forEach(t)},m(f,h){P(f,p,h),e(p,$)},d(f){f&&t(p)}}}function ih(q){let p,$,f,h,x;return h=new ws({props:{code:`# Let's see how to add a new classification token to GPT-2
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2Model.from_pretrained("gpt2")

special_tokens_dict = {"cls_token": "<CLS>"}

num_added_toks = tokenizer.add_special_tokens(special_tokens_dict)
print("We have added", num_added_toks, "tokens")
# Notice: resize_token_embeddings expect to receive the full size of the new vocabulary, i.e., the length of the tokenizer.
model.resize_token_embeddings(len(tokenizer))

assert tokenizer.cls_token == "<CLS>"`,highlighted:`<span class="hljs-comment"># Let&#x27;s see how to add a new classification token to GPT-2</span>
tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
model = GPT2Model.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

special_tokens_dict = {<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;&lt;CLS&gt;&quot;</span>}

num_added_toks = tokenizer.add_special_tokens(special_tokens_dict)
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;We have added&quot;</span>, num_added_toks, <span class="hljs-string">&quot;tokens&quot;</span>)
<span class="hljs-comment"># Notice: resize_token_embeddings expect to receive the full size of the new vocabulary, i.e., the length of the tokenizer.</span>
model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))

<span class="hljs-keyword">assert</span> tokenizer.cls_token == <span class="hljs-string">&quot;&lt;CLS&gt;&quot;</span>`}}),{c(){p=r("p"),$=o("Examples:"),f=d(),k(h.$$.fragment)},l(c){p=s(c,"P",{});var _=a(p);$=n(_,"Examples:"),_.forEach(t),f=l(c),b(h.$$.fragment,c)},m(c,_){P(c,p,_),e(p,$),P(c,f,_),v(h,c,_),x=!0},p:ys,i(c){x||(T(h.$$.fragment,c),x=!0)},o(c){y(h.$$.fragment,c),x=!1},d(c){c&&t(p),c&&t(f),w(h,c)}}}function dh(q){let p,$,f,h,x;return h=new ws({props:{code:`# Let's see how to increase the vocabulary of Bert model and tokenizer
tokenizer = BertTokenizerFast.from_pretrained("bert-base-uncased")
model = BertModel.from_pretrained("bert-base-uncased")

num_added_toks = tokenizer.add_tokens(["new_tok1", "my_new-tok2"])
print("We have added", num_added_toks, "tokens")
# Notice: resize_token_embeddings expect to receive the full size of the new vocabulary, i.e., the length of the tokenizer.
model.resize_token_embeddings(len(tokenizer))`,highlighted:`<span class="hljs-comment"># Let&#x27;s see how to increase the vocabulary of Bert model and tokenizer</span>
tokenizer = BertTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
model = BertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

num_added_toks = tokenizer.add_tokens([<span class="hljs-string">&quot;new_tok1&quot;</span>, <span class="hljs-string">&quot;my_new-tok2&quot;</span>])
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;We have added&quot;</span>, num_added_toks, <span class="hljs-string">&quot;tokens&quot;</span>)
<span class="hljs-comment"># Notice: resize_token_embeddings expect to receive the full size of the new vocabulary, i.e., the length of the tokenizer.</span>
model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))`}}),{c(){p=r("p"),$=o("Examples:"),f=d(),k(h.$$.fragment)},l(c){p=s(c,"P",{});var _=a(p);$=n(_,"Examples:"),_.forEach(t),f=l(c),b(h.$$.fragment,c)},m(c,_){P(c,p,_),e(p,$),P(c,f,_),v(h,c,_),x=!0},p:ys,i(c){x||(T(h.$$.fragment,c),x=!0)},o(c){y(h.$$.fragment,c),x=!1},d(c){c&&t(p),c&&t(f),w(h,c)}}}function lh(q){let p,$,f,h,x,c,_,L,ge,j,D,ro,so,zs,xs,ao,$s,Ps,io,Es,qs,lo,Bs,Ls,Dr,co,Ds,Ir,ke,Ie,Oo,at,Is,Wo,Ns,Nr,u,it,As,be,Fs,po,Ss,Cs,mo,Os,Ws,js,jo,Rs,Us,Ro,Ms,Vs,I,Z,Uo,Gs,Hs,Mo,Xs,Ys,Vo,Js,Ks,Qs,F,Go,Zs,ea,Ho,ta,oa,Xo,na,ra,Yo,sa,aa,Jo,ia,da,la,V,Ko,ca,pa,Qo,ma,ha,Zo,ua,fa,en,_a,ga,ka,S,tn,ba,va,on,Ta,ya,nn,wa,za,rn,xa,$a,ho,Pa,Ea,qa,Ne,sn,Ba,La,an,Da,Ia,Na,G,dn,Aa,Fa,ln,Sa,Ca,cn,Oa,Wa,pn,ja,Ra,Ua,H,mn,Ma,Va,hn,Ga,Ha,un,Xa,Ya,fn,Ja,Ka,Qa,Ae,dt,Za,_n,ei,ti,Fe,lt,oi,gn,ni,ri,Se,ct,si,kn,ai,ii,ee,pt,di,bn,li,ci,Ce,pi,te,mt,mi,vn,hi,ui,Tn,fi,_i,Oe,ht,gi,yn,ki,bi,We,ut,vi,ft,Ti,wn,yi,wi,zi,oe,_t,xi,uo,$i,fo,Pi,Ei,zn,qi,Bi,ne,gt,Li,xn,Di,Ii,kt,Ni,$n,Ai,Fi,Si,re,bt,Ci,Pn,Oi,Wi,vt,ji,En,Ri,Ui,Mi,se,Tt,Vi,qn,Gi,Hi,je,Xi,X,yt,Yi,wt,Ji,_o,Ki,Qi,Zi,Re,ed,Ue,td,Me,zt,od,ve,nd,Bn,rd,sd,Ln,ad,id,dd,ae,xt,ld,Dn,cd,pd,ie,In,md,hd,Nn,ud,fd,An,_d,gd,kd,C,$t,bd,Fn,vd,Td,J,yd,Sn,wd,zd,Cn,xd,$d,On,Pd,Ed,qd,Te,Bd,Wn,Ld,Dd,jn,Id,Nd,Ad,Ve,Fd,Ge,Pt,Sd,R,Cd,Rn,Od,Wd,Un,jd,Rd,Mn,Ud,Md,Vn,Vd,Gd,Hd,He,Et,Xd,Gn,Yd,Jd,de,qt,Kd,Bt,Qd,Hn,Zd,el,tl,Xe,ol,le,Lt,nl,Dt,rl,Xn,sl,al,il,Ye,dl,Y,It,ll,Yn,cl,pl,Nt,ml,Jn,hl,ul,fl,At,_l,Kn,gl,kl,bl,ce,Ft,vl,Qn,Tl,yl,St,wl,Zn,zl,xl,$l,Je,Ct,Pl,Ot,El,er,ql,Bl,Ll,Ke,Wt,Dl,tr,Il,Ar,ye,Qe,or,jt,Nl,nr,Al,Fr,A,Rt,Fl,we,Sl,go,Cl,Ol,ko,Wl,jl,Rl,B,Ut,Ul,rr,Ml,Vl,sr,Gl,Hl,Mt,Xl,bo,Yl,Jl,Kl,Vt,Ql,ar,Zl,ec,tc,Gt,ir,oc,nc,Ht,rc,dr,sc,ac,ic,U,dc,vo,lc,cc,lr,pc,mc,cr,hc,uc,pr,fc,_c,gc,Ze,kc,O,Xt,bc,mr,vc,Tc,hr,yc,wc,Yt,zc,To,xc,$c,Pc,et,Ec,pe,Jt,qc,ze,Bc,ur,Lc,Dc,fr,Ic,Nc,Ac,_r,Fc,Sr,xe,tt,gr,Kt,Sc,kr,Cc,Cr,$e,Qt,Oc,Pe,Wc,br,jc,Rc,ot,Uc,vr,Mc,Vc,Gc,Or,Ee,Zt,Hc,Tr,Xc,Wr,qe,eo,Yc,yr,Jc,jr;return c=new vs({}),at=new vs({}),it=new E({props:{name:"class transformers.PreTrainedTokenizerBase",anchor:"transformers.PreTrainedTokenizerBase",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.model_max_length",description:`<strong>model_max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum length (in number of tokens) for the inputs to the transformer model. When the tokenizer is
loaded with <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.from_pretrained">from_pretrained()</a>, this will be set to the
value stored for the associated model in <code>max_model_input_sizes</code> (see above). If no value is provided, will
default to VERY_LARGE_INTEGER (<code>int(1e30)</code>).`,name:"model_max_length"},{anchor:"transformers.PreTrainedTokenizerBase.padding_side",description:`<strong>padding_side</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The side on which the model should have padding applied. Should be selected between [&#x2018;right&#x2019;, &#x2018;left&#x2019;].
Default value is picked from the class attribute of the same name.`,name:"padding_side"},{anchor:"transformers.PreTrainedTokenizerBase.truncation_side",description:`<strong>truncation_side</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The side on which the model should have truncation applied. Should be selected between [&#x2018;right&#x2019;, &#x2018;left&#x2019;].
Default value is picked from the class attribute of the same name.`,name:"truncation_side"},{anchor:"transformers.PreTrainedTokenizerBase.model_input_names",description:`<strong>model_input_names</strong> (<code>List[string]</code>, <em>optional</em>) &#x2014;
The list of inputs accepted by the forward pass of the model (like <code>&quot;token_type_ids&quot;</code> or
<code>&quot;attention_mask&quot;</code>). Default value is picked from the class attribute of the same name.`,name:"model_input_names"},{anchor:"transformers.PreTrainedTokenizerBase.bos_token",description:`<strong>bos_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the beginning of a sentence. Will be associated to <code>self.bos_token</code> and
<code>self.bos_token_id</code>.`,name:"bos_token"},{anchor:"transformers.PreTrainedTokenizerBase.eos_token",description:`<strong>eos_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the end of a sentence. Will be associated to <code>self.eos_token</code> and
<code>self.eos_token_id</code>.`,name:"eos_token"},{anchor:"transformers.PreTrainedTokenizerBase.unk_token",description:`<strong>unk_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing an out-of-vocabulary token. Will be associated to <code>self.unk_token</code> and
<code>self.unk_token_id</code>.`,name:"unk_token"},{anchor:"transformers.PreTrainedTokenizerBase.sep_token",description:`<strong>sep_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token separating two different sentences in the same input (used by BERT for instance). Will be
associated to <code>self.sep_token</code> and <code>self.sep_token_id</code>.`,name:"sep_token"},{anchor:"transformers.PreTrainedTokenizerBase.pad_token",description:`<strong>pad_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token used to make arrays of tokens the same size for batching purpose. Will then be ignored by
attention mechanisms or loss computation. Will be associated to <code>self.pad_token</code> and <code>self.pad_token_id</code>.`,name:"pad_token"},{anchor:"transformers.PreTrainedTokenizerBase.cls_token",description:`<strong>cls_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the class of the input (used by BERT for instance). Will be associated to
<code>self.cls_token</code> and <code>self.cls_token_id</code>.`,name:"cls_token"},{anchor:"transformers.PreTrainedTokenizerBase.mask_token",description:`<strong>mask_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing a masked token (used by masked-language modeling pretraining objectives, like
BERT). Will be associated to <code>self.mask_token</code> and <code>self.mask_token_id</code>.`,name:"mask_token"},{anchor:"transformers.PreTrainedTokenizerBase.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (tuple or list of <code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A tuple or a list of additional special tokens. Add them here to ensure they won&#x2019;t be split by the
tokenization process. Will be associated to <code>self.additional_special_tokens</code> and
<code>self.additional_special_tokens_ids</code>.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L1451"}}),dt=new E({props:{name:"__call__",anchor:"transformers.PreTrainedTokenizerBase.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"text_target",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair_target",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.text_target",description:`<strong>text_target</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded as target texts. Each sequence can be a string or a
list of strings (pretokenized string). If the sequences are provided as list of strings (pretokenized),
you must set <code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_target"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.text_pair_target",description:`<strong>text_pair_target</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded as target texts. Each sequence can be a string or a
list of strings (pretokenized string). If the sequences are provided as list of strings (pretokenized),
you must set <code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair_target"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2403",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>token_type_ids</strong> \u2014 List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>\u201Ctoken_type_ids\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> \u2014 List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>\u201Cattention_mask\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>overflowing_tokens</strong> \u2014 List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> \u2014 Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> \u2014 List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>)</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),lt=new E({props:{name:"as_target_tokenizer",anchor:"transformers.PreTrainedTokenizerBase.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3529"}}),ct=new E({props:{name:"batch_decode",anchor:"transformers.PreTrainedTokenizerBase.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3363",returnDescription:`
<p>The list of decoded sentences.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),pt=new E({props:{name:"batch_encode_plus",anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus",parameters:[{name:"batch_text_or_text_pairs",val:": typing.Union[typing.List[str], typing.List[typing.Tuple[str, str]], typing.List[typing.List[str]], typing.List[typing.Tuple[typing.List[str], typing.List[str]]], typing.List[typing.List[int]], typing.List[typing.Tuple[typing.List[int], typing.List[int]]]]"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.batch_text_or_text_pairs",description:`<strong>batch_text_or_text_pairs</strong> (<code>List[str]</code>, <code>List[Tuple[str, str]]</code>, <code>List[List[str]]</code>, <code>List[Tuple[List[str], List[str]]]</code>, and for not-fast tokenizers, also <code>List[List[int]]</code>, <code>List[Tuple[List[int], List[int]]]</code>) &#x2014;
Batch of sequences or pair of sequences to be encoded. This can be a list of
string/string-sequences/int-sequences or a list of pair of string/string-sequences/int-sequence (see
details in <code>encode_plus</code>).`,name:"batch_text_or_text_pairs"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2700",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>token_type_ids</strong> \u2014 List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>\u201Ctoken_type_ids\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> \u2014 List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>\u201Cattention_mask\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>overflowing_tokens</strong> \u2014 List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> \u2014 Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> \u2014 List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>)</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),Ce=new Lr({props:{warning:!0,$$slots:{default:[eh]},$$scope:{ctx:q}}}),mt=new E({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2996",returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ht=new E({props:{name:"clean_up_tokenization",anchor:"transformers.PreTrainedTokenizerBase.clean_up_tokenization",parameters:[{name:"out_string",val:": str"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.clean_up_tokenization.out_string",description:"<strong>out_string</strong> (<code>str</code>) &#x2014; The text to clean up.",name:"out_string"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3472",returnDescription:`
<p>The cleaned-up string.</p>
`,returnType:`
<p><code>str</code></p>
`}}),ut=new E({props:{name:"convert_tokens_to_string",anchor:"transformers.PreTrainedTokenizerBase.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.convert_tokens_to_string.tokens",description:"<strong>tokens</strong> (<code>List[str]</code>) &#x2014; The token to join in a string.",name:"tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3350",returnDescription:`
<p>The joined tokens.</p>
`,returnType:`
<p><code>str</code></p>
`}}),_t=new E({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2976",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),gt=new E({props:{name:"decode",anchor:"transformers.PreTrainedTokenizerBase.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.PreTrainedTokenizerBase.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizerBase.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3396",returnDescription:`
<p>The decoded sentence.</p>
`,returnType:`
<p><code>str</code></p>
`}}),bt=new E({props:{name:"encode",anchor:"transformers.PreTrainedTokenizerBase.encode",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[int]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[int], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.encode.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code>) &#x2014;
The first sequence to be encoded. This can be a string, a list of strings (tokenized string using the
<code>tokenize</code> method) or a list of integers (tokenized string ids using the <code>convert_tokens_to_ids</code>
method).`,name:"text"},{anchor:"transformers.PreTrainedTokenizerBase.encode.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second sequence to be encoded. This can be a string, a list of strings (tokenized string using
the <code>tokenize</code> method) or a list of integers (tokenized string ids using the <code>convert_tokens_to_ids</code>
method).`,name:"text_pair"},{anchor:"transformers.PreTrainedTokenizerBase.encode.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.encode.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerBase.encode.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizerBase.encode.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerBase.encode.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.PreTrainedTokenizerBase.encode.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.PreTrainedTokenizerBase.encode.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerBase.encode.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>
<p>**kwargs &#x2014; Passed along to the <code>.tokenize()</code> method.`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2213",returnDescription:`
<p>The tokenized ids of the text.</p>
`,returnType:`
<p><code>List[int]</code>, <code>torch.Tensor</code>, <code>tf.Tensor</code> or <code>np.ndarray</code></p>
`}}),Tt=new E({props:{name:"encode_plus",anchor:"transformers.PreTrainedTokenizerBase.encode_plus",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[int]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[int], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code> (the latter only for not-fast tokenizers)) &#x2014;
The first sequence to be encoded. This can be a string, a list of strings (tokenized string using the
<code>tokenize</code> method) or a list of integers (tokenized string ids using the <code>convert_tokens_to_ids</code>
method).`,name:"text"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second sequence to be encoded. This can be a string, a list of strings (tokenized string using
the <code>tokenize</code> method) or a list of integers (tokenized string ids using the <code>convert_tokens_to_ids</code>
method).`,name:"text_pair"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2604",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>token_type_ids</strong> \u2014 List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>\u201Ctoken_type_ids\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> \u2014 List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>\u201Cattention_mask\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>overflowing_tokens</strong> \u2014 List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> \u2014 Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> \u2014 List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>)</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),je=new Lr({props:{warning:!0,$$slots:{default:[th]},$$scope:{ctx:q}}}),yt=new E({props:{name:"from_pretrained",anchor:"transformers.PreTrainedTokenizerBase.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"*init_inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a predefined tokenizer hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing vocabulary files required by the tokenizer, for instance saved
using the <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.save_pretrained">save_pretrained()</a> method, e.g.,
<code>./my_model_directory/</code>.</li>
<li>(<strong>Deprecated</strong>, not applicable to all derived classes) A path or url to a single saved vocabulary
file (if and only if the tokenizer only requires a single vocabulary file like Bert or XLNet), e.g.,
<code>./my_model_directory/vocab.txt</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.cache_dir",description:`<strong>cache_dir</strong> (<code>str</code> or <code>os.PathLike</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded predefined tokenizer vocabulary files should be cached if the
standard cache should not be used.`,name:"cache_dir"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to force the (re-)download the vocabulary files and override the cached versions if they
exist.`,name:"force_download"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to delete incompletely received files. Attempt to resume the download if such a file
exists.`,name:"resume_download"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.proxies",description:`<strong>proxies</strong> (<code>Dict[str, str]</code>, <em>optional</em>) &#x2014;
A dictionary of proxy servers to use by protocol or endpoint, e.g., <code>{&apos;http&apos;: &apos;foo.bar:3128&apos;, &apos;http://hostname&apos;: &apos;foo.bar:4012&apos;}</code>. The proxies are used on each request.`,name:"proxies"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.use_auth_token",description:`<strong>use_auth_token</strong> (<code>str</code> or <em>bool</em>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token generated
when running <code>huggingface-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"use_auth_token"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.local_files_only",description:`<strong>local_files_only</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to only rely on local files and not to attempt to download any files.`,name:"local_files_only"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;main&quot;</code>) &#x2014;
The specific model version to use. It can be a branch name, a tag name, or a commit id, since we use a
git-based system for storing models and other artifacts on huggingface.co, so <code>revision</code> can be any
identifier allowed by git.`,name:"revision"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.subfolder",description:`<strong>subfolder</strong> (<code>str</code>, <em>optional</em>) &#x2014;
In case the relevant files are located inside a subfolder of the model repo on huggingface.co (e.g. for
facebook/rag-token-base), specify it here.`,name:"subfolder"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.inputs",description:`<strong>inputs</strong> (additional positional arguments, <em>optional</em>) &#x2014;
Will be passed along to the Tokenizer <code>__init__</code> method.`,name:"inputs"},{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the Tokenizer <code>__init__</code> method. Can be used to set special tokens like <code>bos_token</code>,
<code>eos_token</code>, <code>unk_token</code>, <code>sep_token</code>, <code>pad_token</code>, <code>cls_token</code>, <code>mask_token</code>,
<code>additional_special_tokens</code>. See parameters in the <code>__init__</code> for more details.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L1568"}}),Re=new Lr({props:{$$slots:{default:[oh]},$$scope:{ctx:q}}}),Ue=new Ts({props:{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.example",$$slots:{default:[nh]},$$scope:{ctx:q}}}),zt=new E({props:{name:"get_special_tokens_mask",anchor:"transformers.PreTrainedTokenizerBase.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.PreTrainedTokenizerBase.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3441",returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),xt=new E({props:{name:"get_vocab",anchor:"transformers.PreTrainedTokenizerBase.get_vocab",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L1556",returnDescription:`
<p>The vocabulary.</p>
`,returnType:`
<p><code>Dict[str, int]</code></p>
`}}),$t=new E({props:{name:"pad",anchor:"transformers.PreTrainedTokenizerBase.pad",parameters:[{name:"encoded_inputs",val:": typing.Union[transformers.tokenization_utils_base.BatchEncoding, typing.List[transformers.tokenization_utils_base.BatchEncoding], typing.Dict[str, typing.List[int]], typing.Dict[str, typing.List[typing.List[int]]], typing.List[typing.Dict[str, typing.List[int]]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = True"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"verbose",val:": bool = True"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.pad.encoded_inputs",description:`<strong>encoded_inputs</strong> (<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding">BatchEncoding</a>, list of <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding">BatchEncoding</a>, <code>Dict[str, List[int]]</code>, <code>Dict[str, List[List[int]]</code> or <code>List[Dict[str, List[int]]]</code>) &#x2014;
Tokenized inputs. Can represent one input (<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding">BatchEncoding</a> or <code>Dict[str, List[int]]</code>) or a batch of
tokenized inputs (list of <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding">BatchEncoding</a>, <em>Dict[str, List[List[int]]]</em> or <em>List[Dict[str,
List[int]]]</em>) so you can use this method during preprocessing as well as in a PyTorch Dataloader
collate function.</p>
<p>Instead of <code>List[int]</code> you can have tensors (numpy arrays, PyTorch tensors or TensorFlow tensors), see
the note above for the return type.`,name:"encoded_inputs"},{anchor:"transformers.PreTrainedTokenizerBase.pad.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Select a strategy to pad the returned sequences (according to the model&#x2019;s padding side and padding
index) among:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerBase.pad.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of the returned list and optionally padding length (see above).`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerBase.pad.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value.</p>
<p>This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability</p>
<blockquote>
<p>= 7.5 (Volta).</p>
</blockquote>`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerBase.pad.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.PreTrainedTokenizerBase.pad.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.PreTrainedTokenizerBase.pad.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2803"}}),Ve=new Lr({props:{$$slots:{default:[rh]},$$scope:{ctx:q}}}),Pt=new E({props:{name:"prepare_for_model",anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model",parameters:[{name:"ids",val:": typing.List[int]"},{name:"pair_ids",val:": typing.Optional[typing.List[int]] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"prepend_batch_axis",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.ids",description:`<strong>ids</strong> (<code>List[int]</code>) &#x2014;
Tokenized input ids of the first sequence. Can be obtained from a string by chaining the <code>tokenize</code> and
<code>convert_tokens_to_ids</code> methods.`,name:"ids"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.pair_ids",description:`<strong>pair_ids</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Tokenized input ids of the second sequence. Can be obtained from a string by chaining the <code>tokenize</code>
and <code>convert_tokens_to_ids</code> methods.`,name:"pair_ids"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3016",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>token_type_ids</strong> \u2014 List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>\u201Ctoken_type_ids\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> \u2014 List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>\u201Cattention_mask\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>overflowing_tokens</strong> \u2014 List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> \u2014 Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> \u2014 List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>)</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),Et=new E({props:{name:"prepare_seq2seq_batch",anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch",parameters:[{name:"src_texts",val:": typing.List[str]"},{name:"tgt_texts",val:": typing.Optional[typing.List[str]] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"max_target_length",val:": typing.Optional[int] = None"},{name:"padding",val:": str = 'longest'"},{name:"return_tensors",val:": str = None"},{name:"truncation",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch.src_texts",description:`<strong>src_texts</strong> (<code>List[str]</code>) &#x2014;
List of documents to summarize or source language texts.`,name:"src_texts"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch.tgt_texts",description:`<strong>tgt_texts</strong> (<code>list</code>, <em>optional</em>) &#x2014;
List of summaries or target language texts.`,name:"tgt_texts"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length for encoder inputs (documents to summarize or source language texts) If
left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length is
required by one of the truncation/padding parameters. If the model has no specific maximum input length
(like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch.max_target_length",description:`<strong>max_target_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length of decoder inputs (target language texts or summaries) If left unset or set
to <code>None</code>, this will use the max_length value.`,name:"max_target_length"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).
**kwargs &#x2014;
Additional keyword arguments passed along to <code>self.__call__</code>.</li>
</ul>`,name:"truncation"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3572",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li><strong>input_ids</strong> \u2014 List of token ids to be fed to the encoder.</li>
<li><strong>attention_mask</strong> \u2014 List of indices specifying which tokens should be attended to by the model.</li>
<li><strong>labels</strong> \u2014 List of token ids for tgt_texts.</li>
</ul>
<p>The full set of keys <code>[input_ids, attention_mask, labels]</code>, will only be returned if tgt_texts is passed.
Otherwise, input_ids, attention_mask will be the only keys.</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),qt=new E({props:{name:"push_to_hub",anchor:"transformers.PreTrainedTokenizerBase.push_to_hub",parameters:[{name:"repo_id",val:": str"},{name:"use_temp_dir",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"},{name:"max_shard_size",val:": typing.Union[int, str, NoneType] = '10GB'"},{name:"create_pr",val:": bool = False"},{name:"**deprecated_kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The name of the repository you want to push your tokenizer to. It should contain your organization name
when pushing to a given organization.`,name:"repo_id"},{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.use_temp_dir",description:`<strong>use_temp_dir</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to use a temporary directory to store the files saved before they are pushed to the Hub.
Will default to <code>True</code> if there is no directory named like <code>repo_id</code>, <code>False</code> otherwise.`,name:"use_temp_dir"},{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Message to commit while pushing. Will default to <code>&quot;Upload tokenizer&quot;</code>.`,name:"commit_message"},{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not the repository created should be private (requires a paying subscription).`,name:"private"},{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token generated
when running <code>huggingface-cli login</code> (stored in <code>~/.huggingface</code>). Will default to <code>True</code> if <code>repo_url</code>
is not specified.`,name:"use_auth_token"},{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.max_shard_size",description:`<strong>max_shard_size</strong> (<code>int</code> or <code>str</code>, <em>optional</em>, defaults to <code>&quot;10GB&quot;</code>) &#x2014;
Only applicable for models. The maximum size for a checkpoint before being sharded. Checkpoints shard
will then be each of size lower than this size. If expressed as a string, needs to be digits followed
by a unit (like <code>&quot;5MB&quot;</code>).`,name:"max_shard_size"},{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.create_pr",description:`<strong>create_pr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to create a PR with the uploaded files or directly commit.`,name:"create_pr"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/utils/hub.py#L667"}}),Xe=new Ts({props:{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.example",$$slots:{default:[sh]},$$scope:{ctx:q}}}),Lt=new E({props:{name:"register_for_auto_class",anchor:"transformers.PreTrainedTokenizerBase.register_for_auto_class",parameters:[{name:"auto_class",val:" = 'AutoTokenizer'"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.register_for_auto_class.auto_class",description:`<strong>auto_class</strong> (<code>str</code> or <code>type</code>, <em>optional</em>, defaults to <code>&quot;AutoTokenizer&quot;</code>) &#x2014;
The auto class to register this new tokenizer with.`,name:"auto_class"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3546"}}),Ye=new Lr({props:{warning:!0,$$slots:{default:[ah]},$$scope:{ctx:q}}}),It=new E({props:{name:"save_pretrained",anchor:"transformers.PreTrainedTokenizerBase.save_pretrained",parameters:[{name:"save_directory",val:": typing.Union[str, os.PathLike]"},{name:"legacy_format",val:": typing.Optional[bool] = None"},{name:"filename_prefix",val:": typing.Optional[str] = None"},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.save_pretrained.save_directory",description:"<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014; The path to a directory where the tokenizer will be saved.",name:"save_directory"},{anchor:"transformers.PreTrainedTokenizerBase.save_pretrained.legacy_format",description:`<strong>legacy_format</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Only applicable for a fast tokenizer. If unset (default), will save the tokenizer in the unified JSON
format as well as in legacy format if it exists, i.e. with tokenizer specific vocabulary and a separate
added_tokens files.</p>
<p>If <code>False</code>, will only save the tokenizer in the unified JSON format. This format is incompatible with
&#x201C;slow&#x201D; tokenizers (not powered by the <em>tokenizers</em> library), so the tokenizer will not be able to be
loaded in the corresponding &#x201C;slow&#x201D; tokenizer.</p>
<p>If <code>True</code>, will save the tokenizer in legacy format. If the &#x201C;slow&#x201D; tokenizer doesn&#x2019;t exits, a value
error is raised.
filename_prefix &#x2014; (<code>str</code>, <em>optional</em>):
A prefix to add to the names of the files saved by the tokenizer.`,name:"legacy_format"},{anchor:"transformers.PreTrainedTokenizerBase.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).
kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2013",returnDescription:`
<p>The files saved.</p>
`,returnType:`
<p>A tuple of <code>str</code></p>
`}}),Ft=new E({props:{name:"save_vocabulary",anchor:"transformers.PreTrainedTokenizerBase.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.save_vocabulary.save_directory",description:`<strong>save_directory</strong> (<code>str</code>) &#x2014;
The directory in which to save the vocabulary.`,name:"save_directory"},{anchor:"transformers.PreTrainedTokenizerBase.save_vocabulary.filename_prefix",description:`<strong>filename_prefix</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional prefix to add to the named of the saved files.`,name:"filename_prefix"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2175",returnDescription:`
<p>Paths to the files saved.</p>
`,returnType:`
<p><code>Tuple(str)</code></p>
`}}),Ct=new E({props:{name:"tokenize",anchor:"transformers.PreTrainedTokenizerBase.tokenize",parameters:[{name:"text",val:": str"},{name:"pair",val:": typing.Optional[str] = None"},{name:"add_special_tokens",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.tokenize.text",description:`<strong>text</strong> (<code>str</code>) &#x2014;
The sequence to be encoded.`,name:"text"},{anchor:"transformers.PreTrainedTokenizerBase.tokenize.pair",description:`<strong>pair</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A second sequence to be encoded with the first.`,name:"pair"},{anchor:"transformers.PreTrainedTokenizerBase.tokenize.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add the special tokens associated with the corresponding model.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.tokenize.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific encode method. See details in
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"><strong>call</strong>()</a>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2193",returnDescription:`
<p>The list of tokens.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Wt=new E({props:{name:"truncate_sequences",anchor:"transformers.PreTrainedTokenizerBase.truncate_sequences",parameters:[{name:"ids",val:": typing.List[int]"},{name:"pair_ids",val:": typing.Optional[typing.List[int]] = None"},{name:"num_tokens_to_remove",val:": int = 0"},{name:"truncation_strategy",val:": typing.Union[str, transformers.tokenization_utils_base.TruncationStrategy] = 'longest_first'"},{name:"stride",val:": int = 0"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.truncate_sequences.ids",description:`<strong>ids</strong> (<code>List[int]</code>) &#x2014;
Tokenized input ids of the first sequence. Can be obtained from a string by chaining the <code>tokenize</code> and
<code>convert_tokens_to_ids</code> methods.`,name:"ids"},{anchor:"transformers.PreTrainedTokenizerBase.truncate_sequences.pair_ids",description:`<strong>pair_ids</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Tokenized input ids of the second sequence. Can be obtained from a string by chaining the <code>tokenize</code>
and <code>convert_tokens_to_ids</code> methods.`,name:"pair_ids"},{anchor:"transformers.PreTrainedTokenizerBase.truncate_sequences.num_tokens_to_remove",description:`<strong>num_tokens_to_remove</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Number of tokens to remove using the truncation strategy.`,name:"num_tokens_to_remove"},{anchor:"transformers.PreTrainedTokenizerBase.truncate_sequences.truncation_strategy",description:`<strong>truncation_strategy</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
The strategy to follow for truncation. Can be:</p>
<ul>
<li><code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will truncate
token by token, removing a token from the longest sequence in the pair if a pair of sequences (or a
batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths greater
than the model maximum admissible input size).</li>
</ul>`,name:"truncation_strategy"},{anchor:"transformers.PreTrainedTokenizerBase.truncate_sequences.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a positive number, the overflowing tokens returned will contain some tokens from the main
sequence returned. The value of this argument defines the number of additional tokens.`,name:"stride"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3152",returnDescription:`
<p>The truncated <code>ids</code>, the truncated <code>pair_ids</code> and the list of
overflowing tokens. Note: The <em>longest_first</em> strategy returns empty list of overflowing tokens if a pair
of sequences (or a batch of pairs) is provided.</p>
`,returnType:`
<p><code>Tuple[List[int], List[int], List[int]]</code></p>
`}}),jt=new vs({}),Rt=new E({props:{name:"class transformers.SpecialTokensMixin",anchor:"transformers.SpecialTokensMixin",parameters:[{name:"verbose",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpecialTokensMixin.bos_token",description:`<strong>bos_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the beginning of a sentence.`,name:"bos_token"},{anchor:"transformers.SpecialTokensMixin.eos_token",description:`<strong>eos_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the end of a sentence.`,name:"eos_token"},{anchor:"transformers.SpecialTokensMixin.unk_token",description:`<strong>unk_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing an out-of-vocabulary token.`,name:"unk_token"},{anchor:"transformers.SpecialTokensMixin.sep_token",description:`<strong>sep_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token separating two different sentences in the same input (used by BERT for instance).`,name:"sep_token"},{anchor:"transformers.SpecialTokensMixin.pad_token",description:`<strong>pad_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token used to make arrays of tokens the same size for batching purpose. Will then be ignored by
attention mechanisms or loss computation.`,name:"pad_token"},{anchor:"transformers.SpecialTokensMixin.cls_token",description:`<strong>cls_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the class of the input (used by BERT for instance).`,name:"cls_token"},{anchor:"transformers.SpecialTokensMixin.mask_token",description:`<strong>mask_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing a masked token (used by masked-language modeling pretraining objectives, like
BERT).`,name:"mask_token"},{anchor:"transformers.SpecialTokensMixin.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (tuple or list of <code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A tuple or a list of additional special tokens.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L761"}}),Ut=new E({props:{name:"add_special_tokens",anchor:"transformers.SpecialTokensMixin.add_special_tokens",parameters:[{name:"special_tokens_dict",val:": typing.Dict[str, typing.Union[str, tokenizers.AddedToken]]"}],parametersDescription:[{anchor:"transformers.SpecialTokensMixin.add_special_tokens.special_tokens_dict",description:`<strong>special_tokens_dict</strong> (dictionary <em>str</em> to <em>str</em> or <code>tokenizers.AddedToken</code>) &#x2014;
Keys should be in the list of predefined special attributes: [<code>bos_token</code>, <code>eos_token</code>, <code>unk_token</code>,
<code>sep_token</code>, <code>pad_token</code>, <code>cls_token</code>, <code>mask_token</code>, <code>additional_special_tokens</code>].</p>
<p>Tokens are only added if they are not already in the vocabulary (tested by checking if the tokenizer
assign the index of the <code>unk_token</code> to them).`,name:"special_tokens_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L841",returnDescription:`
<p>Number of tokens added to the vocabulary.</p>
`,returnType:`
<p><code>int</code></p>
`}}),Ze=new Ts({props:{anchor:"transformers.SpecialTokensMixin.add_special_tokens.example",$$slots:{default:[ih]},$$scope:{ctx:q}}}),Xt=new E({props:{name:"add_tokens",anchor:"transformers.SpecialTokensMixin.add_tokens",parameters:[{name:"new_tokens",val:": typing.Union[str, tokenizers.AddedToken, typing.List[typing.Union[str, tokenizers.AddedToken]]]"},{name:"special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.SpecialTokensMixin.add_tokens.new_tokens",description:`<strong>new_tokens</strong> (<code>str</code>, <code>tokenizers.AddedToken</code> or a list of <em>str</em> or <code>tokenizers.AddedToken</code>) &#x2014;
Tokens are only added if they are not already in the vocabulary. <code>tokenizers.AddedToken</code> wraps a string
token to let you personalize its behavior: whether this token should only match against a single word,
whether this token should strip all potential whitespaces on the left side, whether this token should
strip all potential whitespaces on the right side, etc.`,name:"new_tokens"},{anchor:"transformers.SpecialTokensMixin.add_tokens.special_tokens",description:`<strong>special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Can be used to specify if the token is a special token. This mostly change the normalization behavior
(special tokens like CLS or [MASK] are usually not lower-cased for instance).</p>
<p>See details for <code>tokenizers.AddedToken</code> in HuggingFace tokenizers library.`,name:"special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L913",returnDescription:`
<p>Number of tokens added to the vocabulary.</p>
`,returnType:`
<p><code>int</code></p>
`}}),et=new Ts({props:{anchor:"transformers.SpecialTokensMixin.add_tokens.example",$$slots:{default:[dh]},$$scope:{ctx:q}}}),Jt=new E({props:{name:"sanitize_special_tokens",anchor:"transformers.SpecialTokensMixin.sanitize_special_tokens",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L829",returnDescription:`
<p>The number of tokens added in the vocabulary during the operation.</p>
`,returnType:`
<p><code>int</code></p>
`}}),Kt=new vs({}),Qt=new E({props:{name:"class transformers.tokenization_utils_base.TruncationStrategy",anchor:"transformers.tokenization_utils_base.TruncationStrategy",parameters:[{name:"value",val:""},{name:"names",val:" = None"},{name:"module",val:" = None"},{name:"qualname",val:" = None"},{name:"type",val:" = None"},{name:"start",val:" = 1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L119"}}),Zt=new E({props:{name:"class transformers.CharSpan",anchor:"transformers.CharSpan",parameters:[{name:"start",val:": int"},{name:"end",val:": int"}],parametersDescription:[{anchor:"transformers.CharSpan.start",description:"<strong>start</strong> (<code>int</code>) &#x2014; Index of the first character in the original string.",name:"start"},{anchor:"transformers.CharSpan.end",description:"<strong>end</strong> (<code>int</code>) &#x2014; Index of the character following the last character in the original string.",name:"end"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L131"}}),eo=new E({props:{name:"class transformers.TokenSpan",anchor:"transformers.TokenSpan",parameters:[{name:"start",val:": int"},{name:"end",val:": int"}],parametersDescription:[{anchor:"transformers.TokenSpan.start",description:"<strong>start</strong> (<code>int</code>) &#x2014; Index of the first token in the span.",name:"start"},{anchor:"transformers.TokenSpan.end",description:"<strong>end</strong> (<code>int</code>) &#x2014; Index of the token following the last token in the span.",name:"end"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L144"}}),{c(){p=r("meta"),$=d(),f=r("h1"),h=r("a"),x=r("span"),k(c.$$.fragment),_=d(),L=r("span"),ge=o("Utilities for Tokenizers"),j=d(),D=r("p"),ro=o(`This page lists all the utility functions used by the tokenizers, mainly the class
`),so=r("a"),zs=o("PreTrainedTokenizerBase"),xs=o(` that implements the common methods between
`),ao=r("a"),$s=o("PreTrainedTokenizer"),Ps=o(" and "),io=r("a"),Es=o("PreTrainedTokenizerFast"),qs=o(` and the mixin
`),lo=r("a"),Bs=o("SpecialTokensMixin"),Ls=o("."),Dr=d(),co=r("p"),Ds=o("Most of those are only useful if you are studying the code of the tokenizers in the library."),Ir=d(),ke=r("h2"),Ie=r("a"),Oo=r("span"),k(at.$$.fragment),Is=d(),Wo=r("span"),Ns=o("PreTrainedTokenizerBase"),Nr=d(),u=r("div"),k(it.$$.fragment),As=d(),be=r("p"),Fs=o("Base class for "),po=r("a"),Ss=o("PreTrainedTokenizer"),Cs=o(" and "),mo=r("a"),Os=o("PreTrainedTokenizerFast"),Ws=o("."),js=d(),jo=r("p"),Rs=o("Handles shared (mostly boiler plate) methods for those two classes."),Us=d(),Ro=r("p"),Ms=o("Class attributes (overridden by derived classes)"),Vs=d(),I=r("ul"),Z=r("li"),Uo=r("strong"),Gs=o("vocab_files_names"),Hs=o(" ("),Mo=r("code"),Xs=o("Dict[str, str]"),Ys=o(") \u2014 A dictionary with, as keys, the "),Vo=r("code"),Js=o("__init__"),Ks=o(` keyword name of each
vocabulary file required by the model, and as associated values, the filename for saving the associated file
(string).`),Qs=d(),F=r("li"),Go=r("strong"),Zs=o("pretrained_vocab_files_map"),ea=o(" ("),Ho=r("code"),ta=o("Dict[str, Dict[str, str]]"),oa=o(`) \u2014 A dictionary of dictionaries, with the
high-level keys being the `),Xo=r("code"),na=o("__init__"),ra=o(` keyword name of each vocabulary file required by the model, the
low-level being the `),Yo=r("code"),sa=o("short-cut-names"),aa=o(" of the pretrained models with, as associated values, the "),Jo=r("code"),ia=o("url"),da=o(` to the
associated pretrained vocabulary file.`),la=d(),V=r("li"),Ko=r("strong"),ca=o("max_model_input_sizes"),pa=o(" ("),Qo=r("code"),ma=o("Dict[str, Optional[int]]"),ha=o(") \u2014 A dictionary with, as keys, the "),Zo=r("code"),ua=o("short-cut-names"),fa=o(`
of the pretrained models, and as associated values, the maximum length of the sequence inputs of this model,
or `),en=r("code"),_a=o("None"),ga=o(" if the model has no maximum input size."),ka=d(),S=r("li"),tn=r("strong"),ba=o("pretrained_init_configuration"),va=o(" ("),on=r("code"),Ta=o("Dict[str, Dict[str, Any]]"),ya=o(`) \u2014 A dictionary with, as keys, the
`),nn=r("code"),wa=o("short-cut-names"),za=o(` of the pretrained models, and as associated values, a dictionary of specific arguments to
pass to the `),rn=r("code"),xa=o("__init__"),$a=o(` method of the tokenizer class for this pretrained model when loading the tokenizer
with the `),ho=r("a"),Pa=o("from_pretrained()"),Ea=o(" method."),qa=d(),Ne=r("li"),sn=r("strong"),Ba=o("model_input_names"),La=o(" ("),an=r("code"),Da=o("List[str]"),Ia=o(") \u2014 A list of inputs expected in the forward pass of the model."),Na=d(),G=r("li"),dn=r("strong"),Aa=o("padding_side"),Fa=o(" ("),ln=r("code"),Sa=o("str"),Ca=o(`) \u2014 The default value for the side on which the model should have padding applied.
Should be `),cn=r("code"),Oa=o("'right'"),Wa=o(" or "),pn=r("code"),ja=o("'left'"),Ra=o("."),Ua=d(),H=r("li"),mn=r("strong"),Ma=o("truncation_side"),Va=o(" ("),hn=r("code"),Ga=o("str"),Ha=o(`) \u2014 The default value for the side on which the model should have truncation
applied. Should be `),un=r("code"),Xa=o("'right'"),Ya=o(" or "),fn=r("code"),Ja=o("'left'"),Ka=o("."),Qa=d(),Ae=r("div"),k(dt.$$.fragment),Za=d(),_n=r("p"),ei=o(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),ti=d(),Fe=r("div"),k(lt.$$.fragment),oi=d(),gn=r("p"),ni=o(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),ri=d(),Se=r("div"),k(ct.$$.fragment),si=d(),kn=r("p"),ai=o("Convert a list of lists of token ids into a list of strings by calling decode."),ii=d(),ee=r("div"),k(pt.$$.fragment),di=d(),bn=r("p"),li=o("Tokenize and prepare for the model a list of sequences or a list of pairs of sequences."),ci=d(),k(Ce.$$.fragment),pi=d(),te=r("div"),k(mt.$$.fragment),mi=d(),vn=r("p"),hi=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),ui=d(),Tn=r("p"),fi=o("This implementation does not add special tokens and this method should be overridden in a subclass."),_i=d(),Oe=r("div"),k(ht.$$.fragment),gi=d(),yn=r("p"),ki=o("Clean up a list of simple English tokenization artifacts like spaces before punctuations and abbreviated forms."),bi=d(),We=r("div"),k(ut.$$.fragment),vi=d(),ft=r("p"),Ti=o("Converts a sequence of tokens in a single string. The most simple way to do it is "),wn=r("code"),yi=o('" ".join(tokens)'),wi=o(` but we
often want to remove sub-word tokenization artifacts at the same time.`),zi=d(),oe=r("div"),k(_t.$$.fragment),xi=d(),uo=r("p"),$i=o("Create the token type IDs corresponding to the sequences passed. "),fo=r("a"),Pi=o(`What are token type
IDs?`),Ei=d(),zn=r("p"),qi=o("Should be overridden in a subclass if the model has a special way of building those."),Bi=d(),ne=r("div"),k(gt.$$.fragment),Li=d(),xn=r("p"),Di=o(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Ii=d(),kt=r("p"),Ni=o("Similar to doing "),$n=r("code"),Ai=o("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Fi=o("."),Si=d(),re=r("div"),k(bt.$$.fragment),Ci=d(),Pn=r("p"),Oi=o("Converts a string to a sequence of ids (integer), using the tokenizer and vocabulary."),Wi=d(),vt=r("p"),ji=o("Same as doing "),En=r("code"),Ri=o("self.convert_tokens_to_ids(self.tokenize(text))"),Ui=o("."),Mi=d(),se=r("div"),k(Tt.$$.fragment),Vi=d(),qn=r("p"),Gi=o("Tokenize and prepare for the model a sequence or a pair of sequences."),Hi=d(),k(je.$$.fragment),Xi=d(),X=r("div"),k(yt.$$.fragment),Yi=d(),wt=r("p"),Ji=o("Instantiate a "),_o=r("a"),Ki=o("PreTrainedTokenizerBase"),Qi=o(` (or a derived class) from a predefined
tokenizer.`),Zi=d(),k(Re.$$.fragment),ed=d(),k(Ue.$$.fragment),td=d(),Me=r("div"),k(zt.$$.fragment),od=d(),ve=r("p"),nd=o(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Bn=r("code"),rd=o("prepare_for_model"),sd=o(" or "),Ln=r("code"),ad=o("encode_plus"),id=o(" methods."),dd=d(),ae=r("div"),k(xt.$$.fragment),ld=d(),Dn=r("p"),cd=o("Returns the vocabulary as a dictionary of token to index."),pd=d(),ie=r("p"),In=r("code"),md=o("tokenizer.get_vocab()[token]"),hd=o(" is equivalent to "),Nn=r("code"),ud=o("tokenizer.convert_tokens_to_ids(token)"),fd=o(" when "),An=r("code"),_d=o("token"),gd=o(` is in the
vocab.`),kd=d(),C=r("div"),k($t.$$.fragment),bd=d(),Fn=r("p"),vd=o(`Pad a single encoded input or a batch of encoded inputs up to predefined length or to the max sequence length
in the batch.`),Td=d(),J=r("p"),yd=o("Padding side (left/right) padding token ids are defined at the tokenizer level (with "),Sn=r("code"),wd=o("self.padding_side"),zd=o(`,
`),Cn=r("code"),xd=o("self.pad_token_id"),$d=o(" and "),On=r("code"),Pd=o("self.pad_token_type_id"),Ed=o(")."),qd=d(),Te=r("p"),Bd=o("Please note that with a fast tokenizer, using the "),Wn=r("code"),Ld=o("__call__"),Dd=o(` method is faster than using a method to encode the
text followed by a call to the `),jn=r("code"),Id=o("pad"),Nd=o(" method to get a padded encoding."),Ad=d(),k(Ve.$$.fragment),Fd=d(),Ge=r("div"),k(Pt.$$.fragment),Sd=d(),R=r("p"),Cd=o(`Prepares a sequence of input id, or a pair of sequences of inputs ids so that it can be used by the model. It
adds special tokens, truncates sequences if overflowing while taking into account the special tokens and
manages a moving window (with user defined stride) for overflowing tokens. Please Note, for `),Rn=r("em"),Od=o("pair_ids"),Wd=o(`
different than `),Un=r("code"),jd=o("None"),Rd=o(" and "),Mn=r("em"),Ud=o("truncation_strategy = longest_first"),Md=o(" or "),Vn=r("code"),Vd=o("True"),Gd=o(`, it is not possible to return
overflowing tokens. Such a combination of arguments will raise an error.`),Hd=d(),He=r("div"),k(Et.$$.fragment),Xd=d(),Gn=r("p"),Yd=o("Prepare model inputs for translation. For best performance, translate one sentence at a time."),Jd=d(),de=r("div"),k(qt.$$.fragment),Kd=d(),Bt=r("p"),Qd=o(`Upload the tokenizer files to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),Hn=r("code"),Zd=o("repo_path_or_name"),el=o("."),tl=d(),k(Xe.$$.fragment),ol=d(),le=r("div"),k(Lt.$$.fragment),nl=d(),Dt=r("p"),rl=o(`Register this class with a given auto class. This should only be used for custom tokenizers as the ones in the
library are already mapped with `),Xn=r("code"),sl=o("AutoTokenizer"),al=o("."),il=d(),k(Ye.$$.fragment),dl=d(),Y=r("div"),k(It.$$.fragment),ll=d(),Yn=r("p"),cl=o("Save the full tokenizer state."),pl=d(),Nt=r("p"),ml=o(`This method make sure the full tokenizer can then be re-loaded using the
`),Jn=r("code"),hl=o("from_pretrained"),ul=o(" class method.."),fl=d(),At=r("p"),_l=o(`Warning,None This won\u2019t save modifications you may have applied to the tokenizer after the instantiation (for
instance, modifying `),Kn=r("code"),gl=o("tokenizer.do_lower_case"),kl=o(" after creation)."),bl=d(),ce=r("div"),k(Ft.$$.fragment),vl=d(),Qn=r("p"),Tl=o("Save only the vocabulary of the tokenizer (vocabulary + added tokens)."),yl=d(),St=r("p"),wl=o(`This method won\u2019t save the configuration and special token mappings of the tokenizer. Use
`),Zn=r("code"),zl=o("_save_pretrained()"),xl=o(" to save the whole state of the tokenizer."),$l=d(),Je=r("div"),k(Ct.$$.fragment),Pl=d(),Ot=r("p"),El=o("Converts a string in a sequence of tokens, replacing unknown tokens with the "),er=r("code"),ql=o("unk_token"),Bl=o("."),Ll=d(),Ke=r("div"),k(Wt.$$.fragment),Dl=d(),tr=r("p"),Il=o("Truncates a sequence pair in-place following the strategy."),Ar=d(),ye=r("h2"),Qe=r("a"),or=r("span"),k(jt.$$.fragment),Nl=d(),nr=r("span"),Al=o("SpecialTokensMixin"),Fr=d(),A=r("div"),k(Rt.$$.fragment),Fl=d(),we=r("p"),Sl=o("A mixin derived by "),go=r("a"),Cl=o("PreTrainedTokenizer"),Ol=o(" and "),ko=r("a"),Wl=o("PreTrainedTokenizerFast"),jl=o(` to handle specific behaviors related to
special tokens. In particular, this class hold the attributes which can be used to directly access these special
tokens in a model-independent manner and allow to set and update the special tokens.`),Rl=d(),B=r("div"),k(Ut.$$.fragment),Ul=d(),rr=r("p"),Ml=o(`Add a dictionary of special tokens (eos, pad, cls, etc.) to the encoder and link them to class attributes. If
special tokens are NOT in the vocabulary, they are added to it (indexed starting from the last index of the
current vocabulary).`),Vl=d(),sr=r("p"),Gl=o(`Note,None When adding new tokens to the vocabulary, you should make sure to also resize the token embedding
matrix of the model so that its embedding matrix matches the tokenizer.`),Hl=d(),Mt=r("p"),Xl=o("In order to do that, please use the "),bo=r("a"),Yl=o("resize_token_embeddings()"),Jl=o(" method."),Kl=d(),Vt=r("p"),Ql=o("Using "),ar=r("code"),Zl=o("add_special_tokens"),ec=o(" will ensure your special tokens can be used in several ways:"),tc=d(),Gt=r("ul"),ir=r("li"),oc=o("Special tokens are carefully handled by the tokenizer (they are never split)."),nc=d(),Ht=r("li"),rc=o("You can easily refer to special tokens using tokenizer class attributes like "),dr=r("code"),sc=o("tokenizer.cls_token"),ac=o(`. This
makes it easy to develop model-agnostic training and fine-tuning scripts.`),ic=d(),U=r("p"),dc=o(`When possible, special tokens are already registered for provided pretrained models (for instance
`),vo=r("a"),lc=o("BertTokenizer"),cc=d(),lr=r("code"),pc=o("cls_token"),mc=o(" is already registered to be :obj"),cr=r("em"),hc=o("\u2019[CLS]\u2019"),uc=o(` and XLM\u2019s one is also registered to be
`),pr=r("code"),fc=o("'</s>'"),_c=o(")."),gc=d(),k(Ze.$$.fragment),kc=d(),O=r("div"),k(Xt.$$.fragment),bc=d(),mr=r("p"),vc=o(`Add a list of new tokens to the tokenizer class. If the new tokens are not in the vocabulary, they are added to
it with indices starting from length of the current vocabulary and and will be isolated before the tokenization
algorithm is applied. Added tokens and tokens from the vocabulary of the tokenization algorithm are therefore
not treated in the same way.`),Tc=d(),hr=r("p"),yc=o(`Note, when adding new tokens to the vocabulary, you should make sure to also resize the token embedding matrix
of the model so that its embedding matrix matches the tokenizer.`),wc=d(),Yt=r("p"),zc=o("In order to do that, please use the "),To=r("a"),xc=o("resize_token_embeddings()"),$c=o(" method."),Pc=d(),k(et.$$.fragment),Ec=d(),pe=r("div"),k(Jt.$$.fragment),qc=d(),ze=r("p"),Bc=o("Make sure that all the special tokens attributes of the tokenizer ("),ur=r("code"),Lc=o("tokenizer.mask_token"),Dc=o(`,
`),fr=r("code"),Ic=o("tokenizer.cls_token"),Nc=o(", etc.) are in the vocabulary."),Ac=d(),_r=r("p"),Fc=o("Add the missing ones to the vocabulary if needed."),Sr=d(),xe=r("h2"),tt=r("a"),gr=r("span"),k(Kt.$$.fragment),Sc=d(),kr=r("span"),Cc=o("Enums and namedtuples"),Cr=d(),$e=r("div"),k(Qt.$$.fragment),Oc=d(),Pe=r("p"),Wc=o("Possible values for the "),br=r("code"),jc=o("truncation"),Rc=o(" argument in "),ot=r("a"),Uc=o("PreTrainedTokenizerBase."),vr=r("strong"),Mc=o("call"),Vc=o("()"),Gc=o(`. Useful for tab-completion in
an IDE.`),Or=d(),Ee=r("div"),k(Zt.$$.fragment),Hc=d(),Tr=r("p"),Xc=o("Character span in the original string."),Wr=d(),qe=r("div"),k(eo.$$.fragment),Yc=d(),yr=r("p"),Jc=o("Token span in an encoded string (list of tokens)."),this.h()},l(i){const z=Qm('[data-svelte="svelte-1phssyn"]',document.head);p=s(z,"META",{name:!0,content:!0}),z.forEach(t),$=l(i),f=s(i,"H1",{class:!0});var to=a(f);h=s(to,"A",{id:!0,class:!0,href:!0});var wr=a(h);x=s(wr,"SPAN",{});var zr=a(x);b(c.$$.fragment,zr),zr.forEach(t),wr.forEach(t),_=l(to),L=s(to,"SPAN",{});var xr=a(L);ge=n(xr,"Utilities for Tokenizers"),xr.forEach(t),to.forEach(t),j=l(i),D=s(i,"P",{});var M=a(D);ro=n(M,`This page lists all the utility functions used by the tokenizers, mainly the class
`),so=s(M,"A",{href:!0});var $r=a(so);zs=n($r,"PreTrainedTokenizerBase"),$r.forEach(t),xs=n(M,` that implements the common methods between
`),ao=s(M,"A",{href:!0});var Pr=a(ao);$s=n(Pr,"PreTrainedTokenizer"),Pr.forEach(t),Ps=n(M," and "),io=s(M,"A",{href:!0});var Er=a(io);Es=n(Er,"PreTrainedTokenizerFast"),Er.forEach(t),qs=n(M,` and the mixin
`),lo=s(M,"A",{href:!0});var qr=a(lo);Bs=n(qr,"SpecialTokensMixin"),qr.forEach(t),Ls=n(M,"."),M.forEach(t),Dr=l(i),co=s(i,"P",{});var Qc=a(co);Ds=n(Qc,"Most of those are only useful if you are studying the code of the tokenizers in the library."),Qc.forEach(t),Ir=l(i),ke=s(i,"H2",{class:!0});var Rr=a(ke);Ie=s(Rr,"A",{id:!0,class:!0,href:!0});var Zc=a(Ie);Oo=s(Zc,"SPAN",{});var ep=a(Oo);b(at.$$.fragment,ep),ep.forEach(t),Zc.forEach(t),Is=l(Rr),Wo=s(Rr,"SPAN",{});var tp=a(Wo);Ns=n(tp,"PreTrainedTokenizerBase"),tp.forEach(t),Rr.forEach(t),Nr=l(i),u=s(i,"DIV",{class:!0});var g=a(u);b(it.$$.fragment,g),As=l(g),be=s(g,"P",{});var yo=a(be);Fs=n(yo,"Base class for "),po=s(yo,"A",{href:!0});var op=a(po);Ss=n(op,"PreTrainedTokenizer"),op.forEach(t),Cs=n(yo," and "),mo=s(yo,"A",{href:!0});var np=a(mo);Os=n(np,"PreTrainedTokenizerFast"),np.forEach(t),Ws=n(yo,"."),yo.forEach(t),js=l(g),jo=s(g,"P",{});var rp=a(jo);Rs=n(rp,"Handles shared (mostly boiler plate) methods for those two classes."),rp.forEach(t),Us=l(g),Ro=s(g,"P",{});var sp=a(Ro);Ms=n(sp,"Class attributes (overridden by derived classes)"),sp.forEach(t),Vs=l(g),I=s(g,"UL",{});var W=a(I);Z=s(W,"LI",{});var oo=a(Z);Uo=s(oo,"STRONG",{});var ap=a(Uo);Gs=n(ap,"vocab_files_names"),ap.forEach(t),Hs=n(oo," ("),Mo=s(oo,"CODE",{});var ip=a(Mo);Xs=n(ip,"Dict[str, str]"),ip.forEach(t),Ys=n(oo,") \u2014 A dictionary with, as keys, the "),Vo=s(oo,"CODE",{});var dp=a(Vo);Js=n(dp,"__init__"),dp.forEach(t),Ks=n(oo,` keyword name of each
vocabulary file required by the model, and as associated values, the filename for saving the associated file
(string).`),oo.forEach(t),Qs=l(W),F=s(W,"LI",{});var K=a(F);Go=s(K,"STRONG",{});var lp=a(Go);Zs=n(lp,"pretrained_vocab_files_map"),lp.forEach(t),ea=n(K," ("),Ho=s(K,"CODE",{});var cp=a(Ho);ta=n(cp,"Dict[str, Dict[str, str]]"),cp.forEach(t),oa=n(K,`) \u2014 A dictionary of dictionaries, with the
high-level keys being the `),Xo=s(K,"CODE",{});var pp=a(Xo);na=n(pp,"__init__"),pp.forEach(t),ra=n(K,` keyword name of each vocabulary file required by the model, the
low-level being the `),Yo=s(K,"CODE",{});var mp=a(Yo);sa=n(mp,"short-cut-names"),mp.forEach(t),aa=n(K," of the pretrained models with, as associated values, the "),Jo=s(K,"CODE",{});var hp=a(Jo);ia=n(hp,"url"),hp.forEach(t),da=n(K,` to the
associated pretrained vocabulary file.`),K.forEach(t),la=l(W),V=s(W,"LI",{});var Be=a(V);Ko=s(Be,"STRONG",{});var up=a(Ko);ca=n(up,"max_model_input_sizes"),up.forEach(t),pa=n(Be," ("),Qo=s(Be,"CODE",{});var fp=a(Qo);ma=n(fp,"Dict[str, Optional[int]]"),fp.forEach(t),ha=n(Be,") \u2014 A dictionary with, as keys, the "),Zo=s(Be,"CODE",{});var _p=a(Zo);ua=n(_p,"short-cut-names"),_p.forEach(t),fa=n(Be,`
of the pretrained models, and as associated values, the maximum length of the sequence inputs of this model,
or `),en=s(Be,"CODE",{});var gp=a(en);_a=n(gp,"None"),gp.forEach(t),ga=n(Be," if the model has no maximum input size."),Be.forEach(t),ka=l(W),S=s(W,"LI",{});var Q=a(S);tn=s(Q,"STRONG",{});var kp=a(tn);ba=n(kp,"pretrained_init_configuration"),kp.forEach(t),va=n(Q," ("),on=s(Q,"CODE",{});var bp=a(on);Ta=n(bp,"Dict[str, Dict[str, Any]]"),bp.forEach(t),ya=n(Q,`) \u2014 A dictionary with, as keys, the
`),nn=s(Q,"CODE",{});var vp=a(nn);wa=n(vp,"short-cut-names"),vp.forEach(t),za=n(Q,` of the pretrained models, and as associated values, a dictionary of specific arguments to
pass to the `),rn=s(Q,"CODE",{});var Tp=a(rn);xa=n(Tp,"__init__"),Tp.forEach(t),$a=n(Q,` method of the tokenizer class for this pretrained model when loading the tokenizer
with the `),ho=s(Q,"A",{href:!0});var yp=a(ho);Pa=n(yp,"from_pretrained()"),yp.forEach(t),Ea=n(Q," method."),Q.forEach(t),qa=l(W),Ne=s(W,"LI",{});var Br=a(Ne);sn=s(Br,"STRONG",{});var wp=a(sn);Ba=n(wp,"model_input_names"),wp.forEach(t),La=n(Br," ("),an=s(Br,"CODE",{});var zp=a(an);Da=n(zp,"List[str]"),zp.forEach(t),Ia=n(Br,") \u2014 A list of inputs expected in the forward pass of the model."),Br.forEach(t),Na=l(W),G=s(W,"LI",{});var Le=a(G);dn=s(Le,"STRONG",{});var xp=a(dn);Aa=n(xp,"padding_side"),xp.forEach(t),Fa=n(Le," ("),ln=s(Le,"CODE",{});var $p=a(ln);Sa=n($p,"str"),$p.forEach(t),Ca=n(Le,`) \u2014 The default value for the side on which the model should have padding applied.
Should be `),cn=s(Le,"CODE",{});var Pp=a(cn);Oa=n(Pp,"'right'"),Pp.forEach(t),Wa=n(Le," or "),pn=s(Le,"CODE",{});var Ep=a(pn);ja=n(Ep,"'left'"),Ep.forEach(t),Ra=n(Le,"."),Le.forEach(t),Ua=l(W),H=s(W,"LI",{});var De=a(H);mn=s(De,"STRONG",{});var qp=a(mn);Ma=n(qp,"truncation_side"),qp.forEach(t),Va=n(De," ("),hn=s(De,"CODE",{});var Bp=a(hn);Ga=n(Bp,"str"),Bp.forEach(t),Ha=n(De,`) \u2014 The default value for the side on which the model should have truncation
applied. Should be `),un=s(De,"CODE",{});var Lp=a(un);Xa=n(Lp,"'right'"),Lp.forEach(t),Ya=n(De," or "),fn=s(De,"CODE",{});var Dp=a(fn);Ja=n(Dp,"'left'"),Dp.forEach(t),Ka=n(De,"."),De.forEach(t),W.forEach(t),Qa=l(g),Ae=s(g,"DIV",{class:!0});var Ur=a(Ae);b(dt.$$.fragment,Ur),Za=l(Ur),_n=s(Ur,"P",{});var Ip=a(_n);ei=n(Ip,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),Ip.forEach(t),Ur.forEach(t),ti=l(g),Fe=s(g,"DIV",{class:!0});var Mr=a(Fe);b(lt.$$.fragment,Mr),oi=l(Mr),gn=s(Mr,"P",{});var Np=a(gn);ni=n(Np,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Np.forEach(t),Mr.forEach(t),ri=l(g),Se=s(g,"DIV",{class:!0});var Vr=a(Se);b(ct.$$.fragment,Vr),si=l(Vr),kn=s(Vr,"P",{});var Ap=a(kn);ai=n(Ap,"Convert a list of lists of token ids into a list of strings by calling decode."),Ap.forEach(t),Vr.forEach(t),ii=l(g),ee=s(g,"DIV",{class:!0});var wo=a(ee);b(pt.$$.fragment,wo),di=l(wo),bn=s(wo,"P",{});var Fp=a(bn);li=n(Fp,"Tokenize and prepare for the model a list of sequences or a list of pairs of sequences."),Fp.forEach(t),ci=l(wo),b(Ce.$$.fragment,wo),wo.forEach(t),pi=l(g),te=s(g,"DIV",{class:!0});var zo=a(te);b(mt.$$.fragment,zo),mi=l(zo),vn=s(zo,"P",{});var Sp=a(vn);hi=n(Sp,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Sp.forEach(t),ui=l(zo),Tn=s(zo,"P",{});var Cp=a(Tn);fi=n(Cp,"This implementation does not add special tokens and this method should be overridden in a subclass."),Cp.forEach(t),zo.forEach(t),_i=l(g),Oe=s(g,"DIV",{class:!0});var Gr=a(Oe);b(ht.$$.fragment,Gr),gi=l(Gr),yn=s(Gr,"P",{});var Op=a(yn);ki=n(Op,"Clean up a list of simple English tokenization artifacts like spaces before punctuations and abbreviated forms."),Op.forEach(t),Gr.forEach(t),bi=l(g),We=s(g,"DIV",{class:!0});var Hr=a(We);b(ut.$$.fragment,Hr),vi=l(Hr),ft=s(Hr,"P",{});var Xr=a(ft);Ti=n(Xr,"Converts a sequence of tokens in a single string. The most simple way to do it is "),wn=s(Xr,"CODE",{});var Wp=a(wn);yi=n(Wp,'" ".join(tokens)'),Wp.forEach(t),wi=n(Xr,` but we
often want to remove sub-word tokenization artifacts at the same time.`),Xr.forEach(t),Hr.forEach(t),zi=l(g),oe=s(g,"DIV",{class:!0});var xo=a(oe);b(_t.$$.fragment,xo),xi=l(xo),uo=s(xo,"P",{});var Kc=a(uo);$i=n(Kc,"Create the token type IDs corresponding to the sequences passed. "),fo=s(Kc,"A",{href:!0});var jp=a(fo);Pi=n(jp,`What are token type
IDs?`),jp.forEach(t),Kc.forEach(t),Ei=l(xo),zn=s(xo,"P",{});var Rp=a(zn);qi=n(Rp,"Should be overridden in a subclass if the model has a special way of building those."),Rp.forEach(t),xo.forEach(t),Bi=l(g),ne=s(g,"DIV",{class:!0});var $o=a(ne);b(gt.$$.fragment,$o),Li=l($o),xn=s($o,"P",{});var Up=a(xn);Di=n(Up,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Up.forEach(t),Ii=l($o),kt=s($o,"P",{});var Yr=a(kt);Ni=n(Yr,"Similar to doing "),$n=s(Yr,"CODE",{});var Mp=a($n);Ai=n(Mp,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Mp.forEach(t),Fi=n(Yr,"."),Yr.forEach(t),$o.forEach(t),Si=l(g),re=s(g,"DIV",{class:!0});var Po=a(re);b(bt.$$.fragment,Po),Ci=l(Po),Pn=s(Po,"P",{});var Vp=a(Pn);Oi=n(Vp,"Converts a string to a sequence of ids (integer), using the tokenizer and vocabulary."),Vp.forEach(t),Wi=l(Po),vt=s(Po,"P",{});var Jr=a(vt);ji=n(Jr,"Same as doing "),En=s(Jr,"CODE",{});var Gp=a(En);Ri=n(Gp,"self.convert_tokens_to_ids(self.tokenize(text))"),Gp.forEach(t),Ui=n(Jr,"."),Jr.forEach(t),Po.forEach(t),Mi=l(g),se=s(g,"DIV",{class:!0});var Eo=a(se);b(Tt.$$.fragment,Eo),Vi=l(Eo),qn=s(Eo,"P",{});var Hp=a(qn);Gi=n(Hp,"Tokenize and prepare for the model a sequence or a pair of sequences."),Hp.forEach(t),Hi=l(Eo),b(je.$$.fragment,Eo),Eo.forEach(t),Xi=l(g),X=s(g,"DIV",{class:!0});var nt=a(X);b(yt.$$.fragment,nt),Yi=l(nt),wt=s(nt,"P",{});var Kr=a(wt);Ji=n(Kr,"Instantiate a "),_o=s(Kr,"A",{href:!0});var Xp=a(_o);Ki=n(Xp,"PreTrainedTokenizerBase"),Xp.forEach(t),Qi=n(Kr,` (or a derived class) from a predefined
tokenizer.`),Kr.forEach(t),Zi=l(nt),b(Re.$$.fragment,nt),ed=l(nt),b(Ue.$$.fragment,nt),nt.forEach(t),td=l(g),Me=s(g,"DIV",{class:!0});var Qr=a(Me);b(zt.$$.fragment,Qr),od=l(Qr),ve=s(Qr,"P",{});var qo=a(ve);nd=n(qo,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Bn=s(qo,"CODE",{});var Yp=a(Bn);rd=n(Yp,"prepare_for_model"),Yp.forEach(t),sd=n(qo," or "),Ln=s(qo,"CODE",{});var Jp=a(Ln);ad=n(Jp,"encode_plus"),Jp.forEach(t),id=n(qo," methods."),qo.forEach(t),Qr.forEach(t),dd=l(g),ae=s(g,"DIV",{class:!0});var Bo=a(ae);b(xt.$$.fragment,Bo),ld=l(Bo),Dn=s(Bo,"P",{});var Kp=a(Dn);cd=n(Kp,"Returns the vocabulary as a dictionary of token to index."),Kp.forEach(t),pd=l(Bo),ie=s(Bo,"P",{});var no=a(ie);In=s(no,"CODE",{});var Qp=a(In);md=n(Qp,"tokenizer.get_vocab()[token]"),Qp.forEach(t),hd=n(no," is equivalent to "),Nn=s(no,"CODE",{});var Zp=a(Nn);ud=n(Zp,"tokenizer.convert_tokens_to_ids(token)"),Zp.forEach(t),fd=n(no," when "),An=s(no,"CODE",{});var em=a(An);_d=n(em,"token"),em.forEach(t),gd=n(no,` is in the
vocab.`),no.forEach(t),Bo.forEach(t),kd=l(g),C=s(g,"DIV",{class:!0});var me=a(C);b($t.$$.fragment,me),bd=l(me),Fn=s(me,"P",{});var tm=a(Fn);vd=n(tm,`Pad a single encoded input or a batch of encoded inputs up to predefined length or to the max sequence length
in the batch.`),tm.forEach(t),Td=l(me),J=s(me,"P",{});var rt=a(J);yd=n(rt,"Padding side (left/right) padding token ids are defined at the tokenizer level (with "),Sn=s(rt,"CODE",{});var om=a(Sn);wd=n(om,"self.padding_side"),om.forEach(t),zd=n(rt,`,
`),Cn=s(rt,"CODE",{});var nm=a(Cn);xd=n(nm,"self.pad_token_id"),nm.forEach(t),$d=n(rt," and "),On=s(rt,"CODE",{});var rm=a(On);Pd=n(rm,"self.pad_token_type_id"),rm.forEach(t),Ed=n(rt,")."),rt.forEach(t),qd=l(me),Te=s(me,"P",{});var Lo=a(Te);Bd=n(Lo,"Please note that with a fast tokenizer, using the "),Wn=s(Lo,"CODE",{});var sm=a(Wn);Ld=n(sm,"__call__"),sm.forEach(t),Dd=n(Lo,` method is faster than using a method to encode the
text followed by a call to the `),jn=s(Lo,"CODE",{});var am=a(jn);Id=n(am,"pad"),am.forEach(t),Nd=n(Lo," method to get a padded encoding."),Lo.forEach(t),Ad=l(me),b(Ve.$$.fragment,me),me.forEach(t),Fd=l(g),Ge=s(g,"DIV",{class:!0});var Zr=a(Ge);b(Pt.$$.fragment,Zr),Sd=l(Zr),R=s(Zr,"P",{});var he=a(R);Cd=n(he,`Prepares a sequence of input id, or a pair of sequences of inputs ids so that it can be used by the model. It
adds special tokens, truncates sequences if overflowing while taking into account the special tokens and
manages a moving window (with user defined stride) for overflowing tokens. Please Note, for `),Rn=s(he,"EM",{});var im=a(Rn);Od=n(im,"pair_ids"),im.forEach(t),Wd=n(he,`
different than `),Un=s(he,"CODE",{});var dm=a(Un);jd=n(dm,"None"),dm.forEach(t),Rd=n(he," and "),Mn=s(he,"EM",{});var lm=a(Mn);Ud=n(lm,"truncation_strategy = longest_first"),lm.forEach(t),Md=n(he," or "),Vn=s(he,"CODE",{});var cm=a(Vn);Vd=n(cm,"True"),cm.forEach(t),Gd=n(he,`, it is not possible to return
overflowing tokens. Such a combination of arguments will raise an error.`),he.forEach(t),Zr.forEach(t),Hd=l(g),He=s(g,"DIV",{class:!0});var es=a(He);b(Et.$$.fragment,es),Xd=l(es),Gn=s(es,"P",{});var pm=a(Gn);Yd=n(pm,"Prepare model inputs for translation. For best performance, translate one sentence at a time."),pm.forEach(t),es.forEach(t),Jd=l(g),de=s(g,"DIV",{class:!0});var Do=a(de);b(qt.$$.fragment,Do),Kd=l(Do),Bt=s(Do,"P",{});var ts=a(Bt);Qd=n(ts,`Upload the tokenizer files to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),Hn=s(ts,"CODE",{});var mm=a(Hn);Zd=n(mm,"repo_path_or_name"),mm.forEach(t),el=n(ts,"."),ts.forEach(t),tl=l(Do),b(Xe.$$.fragment,Do),Do.forEach(t),ol=l(g),le=s(g,"DIV",{class:!0});var Io=a(le);b(Lt.$$.fragment,Io),nl=l(Io),Dt=s(Io,"P",{});var os=a(Dt);rl=n(os,`Register this class with a given auto class. This should only be used for custom tokenizers as the ones in the
library are already mapped with `),Xn=s(os,"CODE",{});var hm=a(Xn);sl=n(hm,"AutoTokenizer"),hm.forEach(t),al=n(os,"."),os.forEach(t),il=l(Io),b(Ye.$$.fragment,Io),Io.forEach(t),dl=l(g),Y=s(g,"DIV",{class:!0});var st=a(Y);b(It.$$.fragment,st),ll=l(st),Yn=s(st,"P",{});var um=a(Yn);cl=n(um,"Save the full tokenizer state."),um.forEach(t),pl=l(st),Nt=s(st,"P",{});var ns=a(Nt);ml=n(ns,`This method make sure the full tokenizer can then be re-loaded using the
`),Jn=s(ns,"CODE",{});var fm=a(Jn);hl=n(fm,"from_pretrained"),fm.forEach(t),ul=n(ns," class method.."),ns.forEach(t),fl=l(st),At=s(st,"P",{});var rs=a(At);_l=n(rs,`Warning,None This won\u2019t save modifications you may have applied to the tokenizer after the instantiation (for
instance, modifying `),Kn=s(rs,"CODE",{});var _m=a(Kn);gl=n(_m,"tokenizer.do_lower_case"),_m.forEach(t),kl=n(rs," after creation)."),rs.forEach(t),st.forEach(t),bl=l(g),ce=s(g,"DIV",{class:!0});var No=a(ce);b(Ft.$$.fragment,No),vl=l(No),Qn=s(No,"P",{});var gm=a(Qn);Tl=n(gm,"Save only the vocabulary of the tokenizer (vocabulary + added tokens)."),gm.forEach(t),yl=l(No),St=s(No,"P",{});var ss=a(St);wl=n(ss,`This method won\u2019t save the configuration and special token mappings of the tokenizer. Use
`),Zn=s(ss,"CODE",{});var km=a(Zn);zl=n(km,"_save_pretrained()"),km.forEach(t),xl=n(ss," to save the whole state of the tokenizer."),ss.forEach(t),No.forEach(t),$l=l(g),Je=s(g,"DIV",{class:!0});var as=a(Je);b(Ct.$$.fragment,as),Pl=l(as),Ot=s(as,"P",{});var is=a(Ot);El=n(is,"Converts a string in a sequence of tokens, replacing unknown tokens with the "),er=s(is,"CODE",{});var bm=a(er);ql=n(bm,"unk_token"),bm.forEach(t),Bl=n(is,"."),is.forEach(t),as.forEach(t),Ll=l(g),Ke=s(g,"DIV",{class:!0});var ds=a(Ke);b(Wt.$$.fragment,ds),Dl=l(ds),tr=s(ds,"P",{});var vm=a(tr);Il=n(vm,"Truncates a sequence pair in-place following the strategy."),vm.forEach(t),ds.forEach(t),g.forEach(t),Ar=l(i),ye=s(i,"H2",{class:!0});var ls=a(ye);Qe=s(ls,"A",{id:!0,class:!0,href:!0});var Tm=a(Qe);or=s(Tm,"SPAN",{});var ym=a(or);b(jt.$$.fragment,ym),ym.forEach(t),Tm.forEach(t),Nl=l(ls),nr=s(ls,"SPAN",{});var wm=a(nr);Al=n(wm,"SpecialTokensMixin"),wm.forEach(t),ls.forEach(t),Fr=l(i),A=s(i,"DIV",{class:!0});var ue=a(A);b(Rt.$$.fragment,ue),Fl=l(ue),we=s(ue,"P",{});var Ao=a(we);Sl=n(Ao,"A mixin derived by "),go=s(Ao,"A",{href:!0});var zm=a(go);Cl=n(zm,"PreTrainedTokenizer"),zm.forEach(t),Ol=n(Ao," and "),ko=s(Ao,"A",{href:!0});var xm=a(ko);Wl=n(xm,"PreTrainedTokenizerFast"),xm.forEach(t),jl=n(Ao,` to handle specific behaviors related to
special tokens. In particular, this class hold the attributes which can be used to directly access these special
tokens in a model-independent manner and allow to set and update the special tokens.`),Ao.forEach(t),Rl=l(ue),B=s(ue,"DIV",{class:!0});var N=a(B);b(Ut.$$.fragment,N),Ul=l(N),rr=s(N,"P",{});var $m=a(rr);Ml=n($m,`Add a dictionary of special tokens (eos, pad, cls, etc.) to the encoder and link them to class attributes. If
special tokens are NOT in the vocabulary, they are added to it (indexed starting from the last index of the
current vocabulary).`),$m.forEach(t),Vl=l(N),sr=s(N,"P",{});var Pm=a(sr);Gl=n(Pm,`Note,None When adding new tokens to the vocabulary, you should make sure to also resize the token embedding
matrix of the model so that its embedding matrix matches the tokenizer.`),Pm.forEach(t),Hl=l(N),Mt=s(N,"P",{});var cs=a(Mt);Xl=n(cs,"In order to do that, please use the "),bo=s(cs,"A",{href:!0});var Em=a(bo);Yl=n(Em,"resize_token_embeddings()"),Em.forEach(t),Jl=n(cs," method."),cs.forEach(t),Kl=l(N),Vt=s(N,"P",{});var ps=a(Vt);Ql=n(ps,"Using "),ar=s(ps,"CODE",{});var qm=a(ar);Zl=n(qm,"add_special_tokens"),qm.forEach(t),ec=n(ps," will ensure your special tokens can be used in several ways:"),ps.forEach(t),tc=l(N),Gt=s(N,"UL",{});var ms=a(Gt);ir=s(ms,"LI",{});var Bm=a(ir);oc=n(Bm,"Special tokens are carefully handled by the tokenizer (they are never split)."),Bm.forEach(t),nc=l(ms),Ht=s(ms,"LI",{});var hs=a(Ht);rc=n(hs,"You can easily refer to special tokens using tokenizer class attributes like "),dr=s(hs,"CODE",{});var Lm=a(dr);sc=n(Lm,"tokenizer.cls_token"),Lm.forEach(t),ac=n(hs,`. This
makes it easy to develop model-agnostic training and fine-tuning scripts.`),hs.forEach(t),ms.forEach(t),ic=l(N),U=s(N,"P",{});var fe=a(U);dc=n(fe,`When possible, special tokens are already registered for provided pretrained models (for instance
`),vo=s(fe,"A",{href:!0});var Dm=a(vo);lc=n(Dm,"BertTokenizer"),Dm.forEach(t),cc=l(fe),lr=s(fe,"CODE",{});var Im=a(lr);pc=n(Im,"cls_token"),Im.forEach(t),mc=n(fe," is already registered to be :obj"),cr=s(fe,"EM",{});var Nm=a(cr);hc=n(Nm,"\u2019[CLS]\u2019"),Nm.forEach(t),uc=n(fe,` and XLM\u2019s one is also registered to be
`),pr=s(fe,"CODE",{});var Am=a(pr);fc=n(Am,"'</s>'"),Am.forEach(t),_c=n(fe,")."),fe.forEach(t),gc=l(N),b(Ze.$$.fragment,N),N.forEach(t),kc=l(ue),O=s(ue,"DIV",{class:!0});var _e=a(O);b(Xt.$$.fragment,_e),bc=l(_e),mr=s(_e,"P",{});var Fm=a(mr);vc=n(Fm,`Add a list of new tokens to the tokenizer class. If the new tokens are not in the vocabulary, they are added to
it with indices starting from length of the current vocabulary and and will be isolated before the tokenization
algorithm is applied. Added tokens and tokens from the vocabulary of the tokenization algorithm are therefore
not treated in the same way.`),Fm.forEach(t),Tc=l(_e),hr=s(_e,"P",{});var Sm=a(hr);yc=n(Sm,`Note, when adding new tokens to the vocabulary, you should make sure to also resize the token embedding matrix
of the model so that its embedding matrix matches the tokenizer.`),Sm.forEach(t),wc=l(_e),Yt=s(_e,"P",{});var us=a(Yt);zc=n(us,"In order to do that, please use the "),To=s(us,"A",{href:!0});var Cm=a(To);xc=n(Cm,"resize_token_embeddings()"),Cm.forEach(t),$c=n(us," method."),us.forEach(t),Pc=l(_e),b(et.$$.fragment,_e),_e.forEach(t),Ec=l(ue),pe=s(ue,"DIV",{class:!0});var Fo=a(pe);b(Jt.$$.fragment,Fo),qc=l(Fo),ze=s(Fo,"P",{});var So=a(ze);Bc=n(So,"Make sure that all the special tokens attributes of the tokenizer ("),ur=s(So,"CODE",{});var Om=a(ur);Lc=n(Om,"tokenizer.mask_token"),Om.forEach(t),Dc=n(So,`,
`),fr=s(So,"CODE",{});var Wm=a(fr);Ic=n(Wm,"tokenizer.cls_token"),Wm.forEach(t),Nc=n(So,", etc.) are in the vocabulary."),So.forEach(t),Ac=l(Fo),_r=s(Fo,"P",{});var jm=a(_r);Fc=n(jm,"Add the missing ones to the vocabulary if needed."),jm.forEach(t),Fo.forEach(t),ue.forEach(t),Sr=l(i),xe=s(i,"H2",{class:!0});var fs=a(xe);tt=s(fs,"A",{id:!0,class:!0,href:!0});var Rm=a(tt);gr=s(Rm,"SPAN",{});var Um=a(gr);b(Kt.$$.fragment,Um),Um.forEach(t),Rm.forEach(t),Sc=l(fs),kr=s(fs,"SPAN",{});var Mm=a(kr);Cc=n(Mm,"Enums and namedtuples"),Mm.forEach(t),fs.forEach(t),Cr=l(i),$e=s(i,"DIV",{class:!0});var _s=a($e);b(Qt.$$.fragment,_s),Oc=l(_s),Pe=s(_s,"P",{});var Co=a(Pe);Wc=n(Co,"Possible values for the "),br=s(Co,"CODE",{});var Vm=a(br);jc=n(Vm,"truncation"),Vm.forEach(t),Rc=n(Co," argument in "),ot=s(Co,"A",{href:!0});var gs=a(ot);Uc=n(gs,"PreTrainedTokenizerBase."),vr=s(gs,"STRONG",{});var Gm=a(vr);Mc=n(Gm,"call"),Gm.forEach(t),Vc=n(gs,"()"),gs.forEach(t),Gc=n(Co,`. Useful for tab-completion in
an IDE.`),Co.forEach(t),_s.forEach(t),Or=l(i),Ee=s(i,"DIV",{class:!0});var ks=a(Ee);b(Zt.$$.fragment,ks),Hc=l(ks),Tr=s(ks,"P",{});var Hm=a(Tr);Xc=n(Hm,"Character span in the original string."),Hm.forEach(t),ks.forEach(t),Wr=l(i),qe=s(i,"DIV",{class:!0});var bs=a(qe);b(eo.$$.fragment,bs),Yc=l(bs),yr=s(bs,"P",{});var Xm=a(yr);Jc=n(Xm,"Token span in an encoded string (list of tokens)."),Xm.forEach(t),bs.forEach(t),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify(ch)),m(h,"id","utilities-for-tokenizers"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#utilities-for-tokenizers"),m(f,"class","relative group"),m(so,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase"),m(ao,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(io,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),m(lo,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.SpecialTokensMixin"),m(Ie,"id","transformers.PreTrainedTokenizerBase"),m(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ie,"href","#transformers.PreTrainedTokenizerBase"),m(ke,"class","relative group"),m(po,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(mo,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),m(ho,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.from_pretrained"),m(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fo,"href","../glossary#token-type-ids"),m(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_o,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase"),m(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qe,"id","transformers.SpecialTokensMixin"),m(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Qe,"href","#transformers.SpecialTokensMixin"),m(ye,"class","relative group"),m(go,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(ko,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),m(bo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.resize_token_embeddings"),m(vo,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(To,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.resize_token_embeddings"),m(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tt,"id","transformers.tokenization_utils_base.TruncationStrategy"),m(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(tt,"href","#transformers.tokenization_utils_base.TruncationStrategy"),m(xe,"class","relative group"),m(ot,"href","/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),m($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,z){e(document.head,p),P(i,$,z),P(i,f,z),e(f,h),e(h,x),v(c,x,null),e(f,_),e(f,L),e(L,ge),P(i,j,z),P(i,D,z),e(D,ro),e(D,so),e(so,zs),e(D,xs),e(D,ao),e(ao,$s),e(D,Ps),e(D,io),e(io,Es),e(D,qs),e(D,lo),e(lo,Bs),e(D,Ls),P(i,Dr,z),P(i,co,z),e(co,Ds),P(i,Ir,z),P(i,ke,z),e(ke,Ie),e(Ie,Oo),v(at,Oo,null),e(ke,Is),e(ke,Wo),e(Wo,Ns),P(i,Nr,z),P(i,u,z),v(it,u,null),e(u,As),e(u,be),e(be,Fs),e(be,po),e(po,Ss),e(be,Cs),e(be,mo),e(mo,Os),e(be,Ws),e(u,js),e(u,jo),e(jo,Rs),e(u,Us),e(u,Ro),e(Ro,Ms),e(u,Vs),e(u,I),e(I,Z),e(Z,Uo),e(Uo,Gs),e(Z,Hs),e(Z,Mo),e(Mo,Xs),e(Z,Ys),e(Z,Vo),e(Vo,Js),e(Z,Ks),e(I,Qs),e(I,F),e(F,Go),e(Go,Zs),e(F,ea),e(F,Ho),e(Ho,ta),e(F,oa),e(F,Xo),e(Xo,na),e(F,ra),e(F,Yo),e(Yo,sa),e(F,aa),e(F,Jo),e(Jo,ia),e(F,da),e(I,la),e(I,V),e(V,Ko),e(Ko,ca),e(V,pa),e(V,Qo),e(Qo,ma),e(V,ha),e(V,Zo),e(Zo,ua),e(V,fa),e(V,en),e(en,_a),e(V,ga),e(I,ka),e(I,S),e(S,tn),e(tn,ba),e(S,va),e(S,on),e(on,Ta),e(S,ya),e(S,nn),e(nn,wa),e(S,za),e(S,rn),e(rn,xa),e(S,$a),e(S,ho),e(ho,Pa),e(S,Ea),e(I,qa),e(I,Ne),e(Ne,sn),e(sn,Ba),e(Ne,La),e(Ne,an),e(an,Da),e(Ne,Ia),e(I,Na),e(I,G),e(G,dn),e(dn,Aa),e(G,Fa),e(G,ln),e(ln,Sa),e(G,Ca),e(G,cn),e(cn,Oa),e(G,Wa),e(G,pn),e(pn,ja),e(G,Ra),e(I,Ua),e(I,H),e(H,mn),e(mn,Ma),e(H,Va),e(H,hn),e(hn,Ga),e(H,Ha),e(H,un),e(un,Xa),e(H,Ya),e(H,fn),e(fn,Ja),e(H,Ka),e(u,Qa),e(u,Ae),v(dt,Ae,null),e(Ae,Za),e(Ae,_n),e(_n,ei),e(u,ti),e(u,Fe),v(lt,Fe,null),e(Fe,oi),e(Fe,gn),e(gn,ni),e(u,ri),e(u,Se),v(ct,Se,null),e(Se,si),e(Se,kn),e(kn,ai),e(u,ii),e(u,ee),v(pt,ee,null),e(ee,di),e(ee,bn),e(bn,li),e(ee,ci),v(Ce,ee,null),e(u,pi),e(u,te),v(mt,te,null),e(te,mi),e(te,vn),e(vn,hi),e(te,ui),e(te,Tn),e(Tn,fi),e(u,_i),e(u,Oe),v(ht,Oe,null),e(Oe,gi),e(Oe,yn),e(yn,ki),e(u,bi),e(u,We),v(ut,We,null),e(We,vi),e(We,ft),e(ft,Ti),e(ft,wn),e(wn,yi),e(ft,wi),e(u,zi),e(u,oe),v(_t,oe,null),e(oe,xi),e(oe,uo),e(uo,$i),e(uo,fo),e(fo,Pi),e(oe,Ei),e(oe,zn),e(zn,qi),e(u,Bi),e(u,ne),v(gt,ne,null),e(ne,Li),e(ne,xn),e(xn,Di),e(ne,Ii),e(ne,kt),e(kt,Ni),e(kt,$n),e($n,Ai),e(kt,Fi),e(u,Si),e(u,re),v(bt,re,null),e(re,Ci),e(re,Pn),e(Pn,Oi),e(re,Wi),e(re,vt),e(vt,ji),e(vt,En),e(En,Ri),e(vt,Ui),e(u,Mi),e(u,se),v(Tt,se,null),e(se,Vi),e(se,qn),e(qn,Gi),e(se,Hi),v(je,se,null),e(u,Xi),e(u,X),v(yt,X,null),e(X,Yi),e(X,wt),e(wt,Ji),e(wt,_o),e(_o,Ki),e(wt,Qi),e(X,Zi),v(Re,X,null),e(X,ed),v(Ue,X,null),e(u,td),e(u,Me),v(zt,Me,null),e(Me,od),e(Me,ve),e(ve,nd),e(ve,Bn),e(Bn,rd),e(ve,sd),e(ve,Ln),e(Ln,ad),e(ve,id),e(u,dd),e(u,ae),v(xt,ae,null),e(ae,ld),e(ae,Dn),e(Dn,cd),e(ae,pd),e(ae,ie),e(ie,In),e(In,md),e(ie,hd),e(ie,Nn),e(Nn,ud),e(ie,fd),e(ie,An),e(An,_d),e(ie,gd),e(u,kd),e(u,C),v($t,C,null),e(C,bd),e(C,Fn),e(Fn,vd),e(C,Td),e(C,J),e(J,yd),e(J,Sn),e(Sn,wd),e(J,zd),e(J,Cn),e(Cn,xd),e(J,$d),e(J,On),e(On,Pd),e(J,Ed),e(C,qd),e(C,Te),e(Te,Bd),e(Te,Wn),e(Wn,Ld),e(Te,Dd),e(Te,jn),e(jn,Id),e(Te,Nd),e(C,Ad),v(Ve,C,null),e(u,Fd),e(u,Ge),v(Pt,Ge,null),e(Ge,Sd),e(Ge,R),e(R,Cd),e(R,Rn),e(Rn,Od),e(R,Wd),e(R,Un),e(Un,jd),e(R,Rd),e(R,Mn),e(Mn,Ud),e(R,Md),e(R,Vn),e(Vn,Vd),e(R,Gd),e(u,Hd),e(u,He),v(Et,He,null),e(He,Xd),e(He,Gn),e(Gn,Yd),e(u,Jd),e(u,de),v(qt,de,null),e(de,Kd),e(de,Bt),e(Bt,Qd),e(Bt,Hn),e(Hn,Zd),e(Bt,el),e(de,tl),v(Xe,de,null),e(u,ol),e(u,le),v(Lt,le,null),e(le,nl),e(le,Dt),e(Dt,rl),e(Dt,Xn),e(Xn,sl),e(Dt,al),e(le,il),v(Ye,le,null),e(u,dl),e(u,Y),v(It,Y,null),e(Y,ll),e(Y,Yn),e(Yn,cl),e(Y,pl),e(Y,Nt),e(Nt,ml),e(Nt,Jn),e(Jn,hl),e(Nt,ul),e(Y,fl),e(Y,At),e(At,_l),e(At,Kn),e(Kn,gl),e(At,kl),e(u,bl),e(u,ce),v(Ft,ce,null),e(ce,vl),e(ce,Qn),e(Qn,Tl),e(ce,yl),e(ce,St),e(St,wl),e(St,Zn),e(Zn,zl),e(St,xl),e(u,$l),e(u,Je),v(Ct,Je,null),e(Je,Pl),e(Je,Ot),e(Ot,El),e(Ot,er),e(er,ql),e(Ot,Bl),e(u,Ll),e(u,Ke),v(Wt,Ke,null),e(Ke,Dl),e(Ke,tr),e(tr,Il),P(i,Ar,z),P(i,ye,z),e(ye,Qe),e(Qe,or),v(jt,or,null),e(ye,Nl),e(ye,nr),e(nr,Al),P(i,Fr,z),P(i,A,z),v(Rt,A,null),e(A,Fl),e(A,we),e(we,Sl),e(we,go),e(go,Cl),e(we,Ol),e(we,ko),e(ko,Wl),e(we,jl),e(A,Rl),e(A,B),v(Ut,B,null),e(B,Ul),e(B,rr),e(rr,Ml),e(B,Vl),e(B,sr),e(sr,Gl),e(B,Hl),e(B,Mt),e(Mt,Xl),e(Mt,bo),e(bo,Yl),e(Mt,Jl),e(B,Kl),e(B,Vt),e(Vt,Ql),e(Vt,ar),e(ar,Zl),e(Vt,ec),e(B,tc),e(B,Gt),e(Gt,ir),e(ir,oc),e(Gt,nc),e(Gt,Ht),e(Ht,rc),e(Ht,dr),e(dr,sc),e(Ht,ac),e(B,ic),e(B,U),e(U,dc),e(U,vo),e(vo,lc),e(U,cc),e(U,lr),e(lr,pc),e(U,mc),e(U,cr),e(cr,hc),e(U,uc),e(U,pr),e(pr,fc),e(U,_c),e(B,gc),v(Ze,B,null),e(A,kc),e(A,O),v(Xt,O,null),e(O,bc),e(O,mr),e(mr,vc),e(O,Tc),e(O,hr),e(hr,yc),e(O,wc),e(O,Yt),e(Yt,zc),e(Yt,To),e(To,xc),e(Yt,$c),e(O,Pc),v(et,O,null),e(A,Ec),e(A,pe),v(Jt,pe,null),e(pe,qc),e(pe,ze),e(ze,Bc),e(ze,ur),e(ur,Lc),e(ze,Dc),e(ze,fr),e(fr,Ic),e(ze,Nc),e(pe,Ac),e(pe,_r),e(_r,Fc),P(i,Sr,z),P(i,xe,z),e(xe,tt),e(tt,gr),v(Kt,gr,null),e(xe,Sc),e(xe,kr),e(kr,Cc),P(i,Cr,z),P(i,$e,z),v(Qt,$e,null),e($e,Oc),e($e,Pe),e(Pe,Wc),e(Pe,br),e(br,jc),e(Pe,Rc),e(Pe,ot),e(ot,Uc),e(ot,vr),e(vr,Mc),e(ot,Vc),e(Pe,Gc),P(i,Or,z),P(i,Ee,z),v(Zt,Ee,null),e(Ee,Hc),e(Ee,Tr),e(Tr,Xc),P(i,Wr,z),P(i,qe,z),v(eo,qe,null),e(qe,Yc),e(qe,yr),e(yr,Jc),jr=!0},p(i,[z]){const to={};z&2&&(to.$$scope={dirty:z,ctx:i}),Ce.$set(to);const wr={};z&2&&(wr.$$scope={dirty:z,ctx:i}),je.$set(wr);const zr={};z&2&&(zr.$$scope={dirty:z,ctx:i}),Re.$set(zr);const xr={};z&2&&(xr.$$scope={dirty:z,ctx:i}),Ue.$set(xr);const M={};z&2&&(M.$$scope={dirty:z,ctx:i}),Ve.$set(M);const $r={};z&2&&($r.$$scope={dirty:z,ctx:i}),Xe.$set($r);const Pr={};z&2&&(Pr.$$scope={dirty:z,ctx:i}),Ye.$set(Pr);const Er={};z&2&&(Er.$$scope={dirty:z,ctx:i}),Ze.$set(Er);const qr={};z&2&&(qr.$$scope={dirty:z,ctx:i}),et.$set(qr)},i(i){jr||(T(c.$$.fragment,i),T(at.$$.fragment,i),T(it.$$.fragment,i),T(dt.$$.fragment,i),T(lt.$$.fragment,i),T(ct.$$.fragment,i),T(pt.$$.fragment,i),T(Ce.$$.fragment,i),T(mt.$$.fragment,i),T(ht.$$.fragment,i),T(ut.$$.fragment,i),T(_t.$$.fragment,i),T(gt.$$.fragment,i),T(bt.$$.fragment,i),T(Tt.$$.fragment,i),T(je.$$.fragment,i),T(yt.$$.fragment,i),T(Re.$$.fragment,i),T(Ue.$$.fragment,i),T(zt.$$.fragment,i),T(xt.$$.fragment,i),T($t.$$.fragment,i),T(Ve.$$.fragment,i),T(Pt.$$.fragment,i),T(Et.$$.fragment,i),T(qt.$$.fragment,i),T(Xe.$$.fragment,i),T(Lt.$$.fragment,i),T(Ye.$$.fragment,i),T(It.$$.fragment,i),T(Ft.$$.fragment,i),T(Ct.$$.fragment,i),T(Wt.$$.fragment,i),T(jt.$$.fragment,i),T(Rt.$$.fragment,i),T(Ut.$$.fragment,i),T(Ze.$$.fragment,i),T(Xt.$$.fragment,i),T(et.$$.fragment,i),T(Jt.$$.fragment,i),T(Kt.$$.fragment,i),T(Qt.$$.fragment,i),T(Zt.$$.fragment,i),T(eo.$$.fragment,i),jr=!0)},o(i){y(c.$$.fragment,i),y(at.$$.fragment,i),y(it.$$.fragment,i),y(dt.$$.fragment,i),y(lt.$$.fragment,i),y(ct.$$.fragment,i),y(pt.$$.fragment,i),y(Ce.$$.fragment,i),y(mt.$$.fragment,i),y(ht.$$.fragment,i),y(ut.$$.fragment,i),y(_t.$$.fragment,i),y(gt.$$.fragment,i),y(bt.$$.fragment,i),y(Tt.$$.fragment,i),y(je.$$.fragment,i),y(yt.$$.fragment,i),y(Re.$$.fragment,i),y(Ue.$$.fragment,i),y(zt.$$.fragment,i),y(xt.$$.fragment,i),y($t.$$.fragment,i),y(Ve.$$.fragment,i),y(Pt.$$.fragment,i),y(Et.$$.fragment,i),y(qt.$$.fragment,i),y(Xe.$$.fragment,i),y(Lt.$$.fragment,i),y(Ye.$$.fragment,i),y(It.$$.fragment,i),y(Ft.$$.fragment,i),y(Ct.$$.fragment,i),y(Wt.$$.fragment,i),y(jt.$$.fragment,i),y(Rt.$$.fragment,i),y(Ut.$$.fragment,i),y(Ze.$$.fragment,i),y(Xt.$$.fragment,i),y(et.$$.fragment,i),y(Jt.$$.fragment,i),y(Kt.$$.fragment,i),y(Qt.$$.fragment,i),y(Zt.$$.fragment,i),y(eo.$$.fragment,i),jr=!1},d(i){t(p),i&&t($),i&&t(f),w(c),i&&t(j),i&&t(D),i&&t(Dr),i&&t(co),i&&t(Ir),i&&t(ke),w(at),i&&t(Nr),i&&t(u),w(it),w(dt),w(lt),w(ct),w(pt),w(Ce),w(mt),w(ht),w(ut),w(_t),w(gt),w(bt),w(Tt),w(je),w(yt),w(Re),w(Ue),w(zt),w(xt),w($t),w(Ve),w(Pt),w(Et),w(qt),w(Xe),w(Lt),w(Ye),w(It),w(Ft),w(Ct),w(Wt),i&&t(Ar),i&&t(ye),w(jt),i&&t(Fr),i&&t(A),w(Rt),w(Ut),w(Ze),w(Xt),w(et),w(Jt),i&&t(Sr),i&&t(xe),w(Kt),i&&t(Cr),i&&t($e),w(Qt),i&&t(Or),i&&t(Ee),w(Zt),i&&t(Wr),i&&t(qe),w(eo)}}}const ch={local:"utilities-for-tokenizers",sections:[{local:"transformers.PreTrainedTokenizerBase",title:"PreTrainedTokenizerBase"},{local:"transformers.SpecialTokensMixin",title:"SpecialTokensMixin"},{local:"transformers.tokenization_utils_base.TruncationStrategy",title:"Enums and namedtuples"}],title:"Utilities for Tokenizers"};function ph(q){return Zm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class kh extends Ym{constructor(p){super();Jm(this,p,ph,lh,Km,{})}}export{kh as default,ch as metadata};
