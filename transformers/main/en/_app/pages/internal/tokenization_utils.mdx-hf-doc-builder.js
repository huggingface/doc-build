import{S as Sm,i as Cm,s as Wm,e as r,k as d,w as k,t as o,M as Om,c as s,d as t,m as l,a,x as b,h as n,b as m,G as e,g as P,y as v,q as T,o as y,B as z,v as jm,L as ks}from"../../chunks/vendor-hf-doc-builder.js";import{T as Pr}from"../../chunks/Tip-hf-doc-builder.js";import{D as q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as bs}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as _s}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as gs}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Rm(E){let p,$,f,h,x;return{c(){p=r("p"),$=o("This method is deprecated, "),f=r("code"),h=o("__call__"),x=o(" should be used instead.")},l(c){p=s(c,"P",{});var _=a(p);$=n(_,"This method is deprecated, "),f=s(_,"CODE",{});var L=a(f);h=n(L,"__call__"),L.forEach(t),x=n(_," should be used instead."),_.forEach(t)},m(c,_){P(c,p,_),e(p,$),e(p,f),e(f,h),e(p,x)},d(c){c&&t(p)}}}function Um(E){let p,$,f,h,x;return{c(){p=r("p"),$=o("This method is deprecated, "),f=r("code"),h=o("__call__"),x=o(" should be used instead.")},l(c){p=s(c,"P",{});var _=a(p);$=n(_,"This method is deprecated, "),f=s(_,"CODE",{});var L=a(f);h=n(L,"__call__"),L.forEach(t),x=n(_," should be used instead."),_.forEach(t)},m(c,_){P(c,p,_),e(p,$),e(p,f),e(f,h),e(p,x)},d(c){c&&t(p)}}}function Mm(E){let p,$,f,h,x;return{c(){p=r("p"),$=o("Passing "),f=r("code"),h=o("use_auth_token=True"),x=o(" is required when you want to use a private model.")},l(c){p=s(c,"P",{});var _=a(p);$=n(_,"Passing "),f=s(_,"CODE",{});var L=a(f);h=n(L,"use_auth_token=True"),L.forEach(t),x=n(_," is required when you want to use a private model."),_.forEach(t)},m(c,_){P(c,p,_),e(p,$),e(p,f),e(f,h),e(p,x)},d(c){c&&t(p)}}}function Vm(E){let p,$,f,h,x;return h=new bs({props:{code:`# We can't instantiate directly the base class *PreTrainedTokenizerBase* so let's show our examples on a derived class: BertTokenizer
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
<span class="hljs-keyword">assert</span> tokenizer.unk_token == <span class="hljs-string">&quot;&lt;unk&gt;&quot;</span>`}}),{c(){p=r("p"),$=o("Examples:"),f=d(),k(h.$$.fragment)},l(c){p=s(c,"P",{});var _=a(p);$=n(_,"Examples:"),_.forEach(t),f=l(c),b(h.$$.fragment,c)},m(c,_){P(c,p,_),e(p,$),P(c,f,_),v(h,c,_),x=!0},p:ks,i(c){x||(T(h.$$.fragment,c),x=!0)},o(c){y(h.$$.fragment,c),x=!1},d(c){c&&t(p),c&&t(f),z(h,c)}}}function Gm(E){let p,$,f,h,x,c,_,L;return{c(){p=r("p"),$=o("If the "),f=r("code"),h=o("encoded_inputs"),x=o(` passed are dictionary of numpy arrays, PyTorch tensors or TensorFlow tensors, the
result will use the same type unless you provide a different tensor type with `),c=r("code"),_=o("return_tensors"),L=o(`. In the case of
PyTorch tensors, you will lose the specific device of your tensors however.`)},l(_e){p=s(_e,"P",{});var O=a(p);$=n(O,"If the "),f=s(O,"CODE",{});var D=a(f);h=n(D,"encoded_inputs"),D.forEach(t),x=n(O,` passed are dictionary of numpy arrays, PyTorch tensors or TensorFlow tensors, the
result will use the same type unless you provide a different tensor type with `),c=s(O,"CODE",{});var no=a(c);_=n(no,"return_tensors"),no.forEach(t),L=n(O,`. In the case of
PyTorch tensors, you will lose the specific device of your tensors however.`),O.forEach(t)},m(_e,O){P(_e,p,O),e(p,$),e(p,f),e(f,h),e(p,x),e(p,c),e(c,_),e(p,L)},d(_e){_e&&t(p)}}}function Hm(E){let p,$,f,h,x;return h=new bs({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")

# Push the tokenizer to your namespace with the name "my-finetuned-bert".
tokenizer.push_to_hub("my-finetuned-bert")

# Push the tokenizer to an organization with the name "my-finetuned-bert".
tokenizer.push_to_hub("huggingface/my-finetuned-bert")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-comment"># Push the tokenizer to your namespace with the name &quot;my-finetuned-bert&quot;.</span>
tokenizer.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>)

<span class="hljs-comment"># Push the tokenizer to an organization with the name &quot;my-finetuned-bert&quot;.</span>
tokenizer.push_to_hub(<span class="hljs-string">&quot;huggingface/my-finetuned-bert&quot;</span>)`}}),{c(){p=r("p"),$=o("Examples:"),f=d(),k(h.$$.fragment)},l(c){p=s(c,"P",{});var _=a(p);$=n(_,"Examples:"),_.forEach(t),f=l(c),b(h.$$.fragment,c)},m(c,_){P(c,p,_),e(p,$),P(c,f,_),v(h,c,_),x=!0},p:ks,i(c){x||(T(h.$$.fragment,c),x=!0)},o(c){y(h.$$.fragment,c),x=!1},d(c){c&&t(p),c&&t(f),z(h,c)}}}function Xm(E){let p,$;return{c(){p=r("p"),$=o("This API is experimental and may have some slight breaking changes in the next releases.")},l(f){p=s(f,"P",{});var h=a(p);$=n(h,"This API is experimental and may have some slight breaking changes in the next releases."),h.forEach(t)},m(f,h){P(f,p,h),e(p,$)},d(f){f&&t(p)}}}function Ym(E){let p,$,f,h,x;return h=new bs({props:{code:`# Let's see how to add a new classification token to GPT-2
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

<span class="hljs-keyword">assert</span> tokenizer.cls_token == <span class="hljs-string">&quot;&lt;CLS&gt;&quot;</span>`}}),{c(){p=r("p"),$=o("Examples:"),f=d(),k(h.$$.fragment)},l(c){p=s(c,"P",{});var _=a(p);$=n(_,"Examples:"),_.forEach(t),f=l(c),b(h.$$.fragment,c)},m(c,_){P(c,p,_),e(p,$),P(c,f,_),v(h,c,_),x=!0},p:ks,i(c){x||(T(h.$$.fragment,c),x=!0)},o(c){y(h.$$.fragment,c),x=!1},d(c){c&&t(p),c&&t(f),z(h,c)}}}function Jm(E){let p,$,f,h,x;return h=new bs({props:{code:`# Let's see how to increase the vocabulary of Bert model and tokenizer
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
model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))`}}),{c(){p=r("p"),$=o("Examples:"),f=d(),k(h.$$.fragment)},l(c){p=s(c,"P",{});var _=a(p);$=n(_,"Examples:"),_.forEach(t),f=l(c),b(h.$$.fragment,c)},m(c,_){P(c,p,_),e(p,$),P(c,f,_),v(h,c,_),x=!0},p:ks,i(c){x||(T(h.$$.fragment,c),x=!0)},o(c){y(h.$$.fragment,c),x=!1},d(c){c&&t(p),c&&t(f),z(h,c)}}}function Km(E){let p,$,f,h,x,c,_,L,_e,O,D,no,ro,vs,Ts,so,ys,zs,ao,ws,xs,io,$s,Ps,qr,lo,qs,Er,ge,Le,So,st,Es,Co,Bs,Br,u,at,Ls,ke,Ds,co,Is,Ns,po,As,Fs,Ss,Wo,Cs,Ws,Oo,Os,js,I,Z,jo,Rs,Us,Ro,Ms,Vs,Uo,Gs,Hs,Xs,F,Mo,Ys,Js,Vo,Ks,Qs,Go,Zs,ea,Ho,ta,oa,Xo,na,ra,sa,M,Yo,aa,ia,Jo,da,la,Ko,ca,pa,Qo,ma,ha,ua,S,Zo,fa,_a,en,ga,ka,tn,ba,va,on,Ta,ya,mo,za,wa,xa,De,nn,$a,Pa,rn,qa,Ea,Ba,V,sn,La,Da,an,Ia,Na,dn,Aa,Fa,ln,Sa,Ca,Wa,G,cn,Oa,ja,pn,Ra,Ua,mn,Ma,Va,hn,Ga,Ha,Xa,Ie,it,Ya,un,Ja,Ka,Ne,dt,Qa,fn,Za,ei,Ae,lt,ti,_n,oi,ni,ee,ct,ri,gn,si,ai,Fe,ii,te,pt,di,kn,li,ci,bn,pi,mi,Se,mt,hi,vn,ui,fi,Ce,ht,_i,ut,gi,Tn,ki,bi,vi,oe,ft,Ti,ho,yi,uo,zi,wi,yn,xi,$i,ne,_t,Pi,zn,qi,Ei,gt,Bi,wn,Li,Di,Ii,re,kt,Ni,xn,Ai,Fi,bt,Si,$n,Ci,Wi,Oi,se,vt,ji,Pn,Ri,Ui,We,Mi,H,Tt,Vi,yt,Gi,fo,Hi,Xi,Yi,Oe,Ji,je,Ki,Re,zt,Qi,be,Zi,qn,ed,td,En,od,nd,rd,ae,wt,sd,Bn,ad,id,ie,Ln,dd,ld,Dn,cd,pd,In,md,hd,ud,X,xt,fd,Nn,_d,gd,J,kd,An,bd,vd,Fn,Td,yd,Sn,zd,wd,xd,Ue,$d,Me,$t,Pd,j,qd,Cn,Ed,Bd,Wn,Ld,Dd,On,Id,Nd,jn,Ad,Fd,Sd,Ve,Pt,Cd,Rn,Wd,Od,de,qt,jd,Et,Rd,Un,Ud,Md,Vd,Ge,Gd,le,Bt,Hd,Lt,Xd,Mn,Yd,Jd,Kd,He,Qd,Y,Dt,Zd,Vn,el,tl,It,ol,Gn,nl,rl,sl,Nt,al,Hn,il,dl,ll,ce,At,cl,Xn,pl,ml,Ft,hl,Yn,ul,fl,_l,Xe,St,gl,Ct,kl,Jn,bl,vl,Tl,Ye,Wt,yl,Kn,zl,Lr,ve,Je,Qn,Ot,wl,Zn,xl,Dr,A,jt,$l,Te,Pl,_o,ql,El,go,Bl,Ll,Dl,B,Rt,Il,er,Nl,Al,tr,Fl,Sl,Ut,Cl,ko,Wl,Ol,jl,Mt,Rl,or,Ul,Ml,Vl,Vt,nr,Gl,Hl,Gt,Xl,rr,Yl,Jl,Kl,R,Ql,bo,Zl,ec,sr,tc,oc,ar,nc,rc,ir,sc,ac,ic,Ke,dc,C,Ht,lc,dr,cc,pc,lr,mc,hc,Xt,uc,vo,fc,_c,gc,Qe,kc,pe,Yt,bc,ye,vc,cr,Tc,yc,pr,zc,wc,xc,mr,$c,Ir,ze,Ze,hr,Jt,Pc,ur,qc,Nr,we,Kt,Ec,xe,Bc,fr,Lc,Dc,et,Ic,_r,Nc,Ac,Fc,Ar,$e,Qt,Sc,gr,Cc,Fr,Pe,Zt,Wc,kr,Oc,Sr;return c=new _s({}),st=new _s({}),at=new q({props:{name:"class transformers.PreTrainedTokenizerBase",anchor:"transformers.PreTrainedTokenizerBase",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.model_max_length",description:`<strong>model_max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
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
<code>self.additional_special_tokens_ids</code>.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L1449"}}),it=new q({props:{name:"__call__",anchor:"transformers.PreTrainedTokenizerBase.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"text_target",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair_target",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
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
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2389",returnDescription:`
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
`}}),dt=new q({props:{name:"as_target_tokenizer",anchor:"transformers.PreTrainedTokenizerBase.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3503"}}),lt=new q({props:{name:"batch_decode",anchor:"transformers.PreTrainedTokenizerBase.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizerBase.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3337",returnDescription:`
<p>The list of decoded sentences.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),ct=new q({props:{name:"batch_encode_plus",anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus",parameters:[{name:"batch_text_or_text_pairs",val:": typing.Union[typing.List[str], typing.List[typing.Tuple[str, str]], typing.List[typing.List[str]], typing.List[typing.Tuple[typing.List[str], typing.List[str]]], typing.List[typing.List[int]], typing.List[typing.Tuple[typing.List[int], typing.List[int]]]]"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.batch_encode_plus.batch_text_or_text_pairs",description:`<strong>batch_text_or_text_pairs</strong> (<code>List[str]</code>, <code>List[Tuple[str, str]]</code>, <code>List[List[str]]</code>, <code>List[Tuple[List[str], List[str]]]</code>, and for not-fast tokenizers, also <code>List[List[int]]</code>, <code>List[Tuple[List[int], List[int]]]</code>) &#x2014;
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
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2686",returnDescription:`
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
`}}),Fe=new Pr({props:{warning:!0,$$slots:{default:[Rm]},$$scope:{ctx:E}}}),pt=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2970",returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mt=new q({props:{name:"clean_up_tokenization",anchor:"transformers.PreTrainedTokenizerBase.clean_up_tokenization",parameters:[{name:"out_string",val:": str"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.clean_up_tokenization.out_string",description:"<strong>out_string</strong> (<code>str</code>) &#x2014; The text to clean up.",name:"out_string"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3446",returnDescription:`
<p>The cleaned-up string.</p>
`,returnType:`
<p><code>str</code></p>
`}}),ht=new q({props:{name:"convert_tokens_to_string",anchor:"transformers.PreTrainedTokenizerBase.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.convert_tokens_to_string.tokens",description:"<strong>tokens</strong> (<code>List[str]</code>) &#x2014; The token to join in a string.",name:"tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3324",returnDescription:`
<p>The joined tokens.</p>
`,returnType:`
<p><code>str</code></p>
`}}),ft=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2950",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),_t=new q({props:{name:"decode",anchor:"transformers.PreTrainedTokenizerBase.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.PreTrainedTokenizerBase.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizerBase.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3370",returnDescription:`
<p>The decoded sentence.</p>
`,returnType:`
<p><code>str</code></p>
`}}),kt=new q({props:{name:"encode",anchor:"transformers.PreTrainedTokenizerBase.encode",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[int]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[int], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.encode.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code>) &#x2014;
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
<p>**kwargs &#x2014; Passed along to the <code>.tokenize()</code> method.`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2199",returnDescription:`
<p>The tokenized ids of the text.</p>
`,returnType:`
<p><code>List[int]</code>, <code>torch.Tensor</code>, <code>tf.Tensor</code> or <code>np.ndarray</code></p>
`}}),vt=new q({props:{name:"encode_plus",anchor:"transformers.PreTrainedTokenizerBase.encode_plus",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[int]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[int], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.encode_plus.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code> (the latter only for not-fast tokenizers)) &#x2014;
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
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2590",returnDescription:`
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
`}}),We=new Pr({props:{warning:!0,$$slots:{default:[Um]},$$scope:{ctx:E}}}),Tt=new q({props:{name:"from_pretrained",anchor:"transformers.PreTrainedTokenizerBase.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"*init_inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
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
<code>additional_special_tokens</code>. See parameters in the <code>__init__</code> for more details.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L1566"}}),Oe=new Pr({props:{$$slots:{default:[Mm]},$$scope:{ctx:E}}}),je=new gs({props:{anchor:"transformers.PreTrainedTokenizerBase.from_pretrained.example",$$slots:{default:[Vm]},$$scope:{ctx:E}}}),zt=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.PreTrainedTokenizerBase.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.PreTrainedTokenizerBase.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3415",returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),wt=new q({props:{name:"get_vocab",anchor:"transformers.PreTrainedTokenizerBase.get_vocab",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L1554",returnDescription:`
<p>The vocabulary.</p>
`,returnType:`
<p><code>Dict[str, int]</code></p>
`}}),xt=new q({props:{name:"pad",anchor:"transformers.PreTrainedTokenizerBase.pad",parameters:[{name:"encoded_inputs",val:": typing.Union[transformers.tokenization_utils_base.BatchEncoding, typing.List[transformers.tokenization_utils_base.BatchEncoding], typing.Dict[str, typing.List[int]], typing.Dict[str, typing.List[typing.List[int]]], typing.List[typing.Dict[str, typing.List[int]]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = True"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"verbose",val:": bool = True"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.pad.encoded_inputs",description:`<strong>encoded_inputs</strong> (<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding">BatchEncoding</a>, list of <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding">BatchEncoding</a>, <code>Dict[str, List[int]]</code>, <code>Dict[str, List[List[int]]</code> or <code>List[Dict[str, List[int]]]</code>) &#x2014;
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
Whether or not to print more information and warnings.`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2789"}}),Ue=new Pr({props:{$$slots:{default:[Gm]},$$scope:{ctx:E}}}),$t=new q({props:{name:"prepare_for_model",anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model",parameters:[{name:"ids",val:": typing.List[int]"},{name:"pair_ids",val:": typing.Optional[typing.List[int]] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"prepend_batch_axis",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.prepare_for_model.ids",description:`<strong>ids</strong> (<code>List[int]</code>) &#x2014;
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
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2990",returnDescription:`
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
`}}),Pt=new q({props:{name:"prepare_seq2seq_batch",anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch",parameters:[{name:"src_texts",val:": typing.List[str]"},{name:"tgt_texts",val:": typing.Optional[typing.List[str]] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"max_target_length",val:": typing.Optional[int] = None"},{name:"padding",val:": str = 'longest'"},{name:"return_tensors",val:": str = None"},{name:"truncation",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.prepare_seq2seq_batch.src_texts",description:`<strong>src_texts</strong> (<code>List[str]</code>) &#x2014;
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
</ul>`,name:"truncation"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3546",returnDescription:`
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
`}}),qt=new q({props:{name:"push_to_hub",anchor:"transformers.PreTrainedTokenizerBase.push_to_hub",parameters:[{name:"repo_id",val:": str"},{name:"use_temp_dir",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"},{name:"max_shard_size",val:": typing.Union[int, str, NoneType] = '10GB'"},{name:"create_pr",val:": bool = False"},{name:"**deprecated_kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
Whether or not to create a PR with the uploaded files or directly commit.`,name:"create_pr"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/utils/hub.py#L623"}}),Ge=new gs({props:{anchor:"transformers.PreTrainedTokenizerBase.push_to_hub.example",$$slots:{default:[Hm]},$$scope:{ctx:E}}}),Bt=new q({props:{name:"register_for_auto_class",anchor:"transformers.PreTrainedTokenizerBase.register_for_auto_class",parameters:[{name:"auto_class",val:" = 'AutoTokenizer'"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.register_for_auto_class.auto_class",description:`<strong>auto_class</strong> (<code>str</code> or <code>type</code>, <em>optional</em>, defaults to <code>&quot;AutoTokenizer&quot;</code>) &#x2014;
The auto class to register this new tokenizer with.`,name:"auto_class"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3520"}}),He=new Pr({props:{warning:!0,$$slots:{default:[Xm]},$$scope:{ctx:E}}}),Dt=new q({props:{name:"save_pretrained",anchor:"transformers.PreTrainedTokenizerBase.save_pretrained",parameters:[{name:"save_directory",val:": typing.Union[str, os.PathLike]"},{name:"legacy_format",val:": typing.Optional[bool] = None"},{name:"filename_prefix",val:": typing.Optional[str] = None"},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.save_pretrained.save_directory",description:"<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014; The path to a directory where the tokenizer will be saved.",name:"save_directory"},{anchor:"transformers.PreTrainedTokenizerBase.save_pretrained.legacy_format",description:`<strong>legacy_format</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L1999",returnDescription:`
<p>The files saved.</p>
`,returnType:`
<p>A tuple of <code>str</code></p>
`}}),At=new q({props:{name:"save_vocabulary",anchor:"transformers.PreTrainedTokenizerBase.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.save_vocabulary.save_directory",description:`<strong>save_directory</strong> (<code>str</code>) &#x2014;
The directory in which to save the vocabulary.`,name:"save_directory"},{anchor:"transformers.PreTrainedTokenizerBase.save_vocabulary.filename_prefix",description:`<strong>filename_prefix</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional prefix to add to the named of the saved files.`,name:"filename_prefix"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2161",returnDescription:`
<p>Paths to the files saved.</p>
`,returnType:`
<p><code>Tuple(str)</code></p>
`}}),St=new q({props:{name:"tokenize",anchor:"transformers.PreTrainedTokenizerBase.tokenize",parameters:[{name:"text",val:": str"},{name:"pair",val:": typing.Optional[str] = None"},{name:"add_special_tokens",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.tokenize.text",description:`<strong>text</strong> (<code>str</code>) &#x2014;
The sequence to be encoded.`,name:"text"},{anchor:"transformers.PreTrainedTokenizerBase.tokenize.pair",description:`<strong>pair</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A second sequence to be encoded with the first.`,name:"pair"},{anchor:"transformers.PreTrainedTokenizerBase.tokenize.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add the special tokens associated with the corresponding model.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.tokenize.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific encode method. See details in
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"><strong>call</strong>()</a>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2179",returnDescription:`
<p>The list of tokens.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Wt=new q({props:{name:"truncate_sequences",anchor:"transformers.PreTrainedTokenizerBase.truncate_sequences",parameters:[{name:"ids",val:": typing.List[int]"},{name:"pair_ids",val:": typing.Optional[typing.List[int]] = None"},{name:"num_tokens_to_remove",val:": int = 0"},{name:"truncation_strategy",val:": typing.Union[str, transformers.tokenization_utils_base.TruncationStrategy] = 'longest_first'"},{name:"stride",val:": int = 0"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.truncate_sequences.ids",description:`<strong>ids</strong> (<code>List[int]</code>) &#x2014;
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
sequence returned. The value of this argument defines the number of additional tokens.`,name:"stride"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3126",returnDescription:`
<p>The truncated <code>ids</code>, the truncated <code>pair_ids</code> and the list of
overflowing tokens. Note: The <em>longest_first</em> strategy returns empty list of overflowing tokens if a pair
of sequences (or a batch of pairs) is provided.</p>
`,returnType:`
<p><code>Tuple[List[int], List[int], List[int]]</code></p>
`}}),Ot=new _s({}),jt=new q({props:{name:"class transformers.SpecialTokensMixin",anchor:"transformers.SpecialTokensMixin",parameters:[{name:"verbose",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpecialTokensMixin.bos_token",description:`<strong>bos_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the beginning of a sentence.`,name:"bos_token"},{anchor:"transformers.SpecialTokensMixin.eos_token",description:`<strong>eos_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the end of a sentence.`,name:"eos_token"},{anchor:"transformers.SpecialTokensMixin.unk_token",description:`<strong>unk_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing an out-of-vocabulary token.`,name:"unk_token"},{anchor:"transformers.SpecialTokensMixin.sep_token",description:`<strong>sep_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token separating two different sentences in the same input (used by BERT for instance).`,name:"sep_token"},{anchor:"transformers.SpecialTokensMixin.pad_token",description:`<strong>pad_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token used to make arrays of tokens the same size for batching purpose. Will then be ignored by
attention mechanisms or loss computation.`,name:"pad_token"},{anchor:"transformers.SpecialTokensMixin.cls_token",description:`<strong>cls_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the class of the input (used by BERT for instance).`,name:"cls_token"},{anchor:"transformers.SpecialTokensMixin.mask_token",description:`<strong>mask_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing a masked token (used by masked-language modeling pretraining objectives, like
BERT).`,name:"mask_token"},{anchor:"transformers.SpecialTokensMixin.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (tuple or list of <code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A tuple or a list of additional special tokens.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L761"}}),Rt=new q({props:{name:"add_special_tokens",anchor:"transformers.SpecialTokensMixin.add_special_tokens",parameters:[{name:"special_tokens_dict",val:": typing.Dict[str, typing.Union[str, tokenizers.AddedToken]]"}],parametersDescription:[{anchor:"transformers.SpecialTokensMixin.add_special_tokens.special_tokens_dict",description:`<strong>special_tokens_dict</strong> (dictionary <em>str</em> to <em>str</em> or <code>tokenizers.AddedToken</code>) &#x2014;
Keys should be in the list of predefined special attributes: [<code>bos_token</code>, <code>eos_token</code>, <code>unk_token</code>,
<code>sep_token</code>, <code>pad_token</code>, <code>cls_token</code>, <code>mask_token</code>, <code>additional_special_tokens</code>].</p>
<p>Tokens are only added if they are not already in the vocabulary (tested by checking if the tokenizer
assign the index of the <code>unk_token</code> to them).`,name:"special_tokens_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L841",returnDescription:`
<p>Number of tokens added to the vocabulary.</p>
`,returnType:`
<p><code>int</code></p>
`}}),Ke=new gs({props:{anchor:"transformers.SpecialTokensMixin.add_special_tokens.example",$$slots:{default:[Ym]},$$scope:{ctx:E}}}),Ht=new q({props:{name:"add_tokens",anchor:"transformers.SpecialTokensMixin.add_tokens",parameters:[{name:"new_tokens",val:": typing.Union[str, tokenizers.AddedToken, typing.List[typing.Union[str, tokenizers.AddedToken]]]"},{name:"special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.SpecialTokensMixin.add_tokens.new_tokens",description:`<strong>new_tokens</strong> (<code>str</code>, <code>tokenizers.AddedToken</code> or a list of <em>str</em> or <code>tokenizers.AddedToken</code>) &#x2014;
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
`}}),Qe=new gs({props:{anchor:"transformers.SpecialTokensMixin.add_tokens.example",$$slots:{default:[Jm]},$$scope:{ctx:E}}}),Yt=new q({props:{name:"sanitize_special_tokens",anchor:"transformers.SpecialTokensMixin.sanitize_special_tokens",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L829",returnDescription:`
<p>The number of tokens added in the vocabulary during the operation.</p>
`,returnType:`
<p><code>int</code></p>
`}}),Jt=new _s({}),Kt=new q({props:{name:"class transformers.tokenization_utils_base.TruncationStrategy",anchor:"transformers.tokenization_utils_base.TruncationStrategy",parameters:[{name:"value",val:""},{name:"names",val:" = None"},{name:"module",val:" = None"},{name:"qualname",val:" = None"},{name:"type",val:" = None"},{name:"start",val:" = 1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L119"}}),Qt=new q({props:{name:"class transformers.CharSpan",anchor:"transformers.CharSpan",parameters:[{name:"start",val:": int"},{name:"end",val:": int"}],parametersDescription:[{anchor:"transformers.CharSpan.start",description:"<strong>start</strong> (<code>int</code>) &#x2014; Index of the first character in the original string.",name:"start"},{anchor:"transformers.CharSpan.end",description:"<strong>end</strong> (<code>int</code>) &#x2014; Index of the character following the last character in the original string.",name:"end"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L131"}}),Zt=new q({props:{name:"class transformers.TokenSpan",anchor:"transformers.TokenSpan",parameters:[{name:"start",val:": int"},{name:"end",val:": int"}],parametersDescription:[{anchor:"transformers.TokenSpan.start",description:"<strong>start</strong> (<code>int</code>) &#x2014; Index of the first token in the span.",name:"start"},{anchor:"transformers.TokenSpan.end",description:"<strong>end</strong> (<code>int</code>) &#x2014; Index of the token following the last token in the span.",name:"end"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L144"}}),{c(){p=r("meta"),$=d(),f=r("h1"),h=r("a"),x=r("span"),k(c.$$.fragment),_=d(),L=r("span"),_e=o("Utilities for Tokenizers"),O=d(),D=r("p"),no=o(`This page lists all the utility functions used by the tokenizers, mainly the class
`),ro=r("a"),vs=o("PreTrainedTokenizerBase"),Ts=o(` that implements the common methods between
`),so=r("a"),ys=o("PreTrainedTokenizer"),zs=o(" and "),ao=r("a"),ws=o("PreTrainedTokenizerFast"),xs=o(` and the mixin
`),io=r("a"),$s=o("SpecialTokensMixin"),Ps=o("."),qr=d(),lo=r("p"),qs=o("Most of those are only useful if you are studying the code of the tokenizers in the library."),Er=d(),ge=r("h2"),Le=r("a"),So=r("span"),k(st.$$.fragment),Es=d(),Co=r("span"),Bs=o("PreTrainedTokenizerBase"),Br=d(),u=r("div"),k(at.$$.fragment),Ls=d(),ke=r("p"),Ds=o("Base class for "),co=r("a"),Is=o("PreTrainedTokenizer"),Ns=o(" and "),po=r("a"),As=o("PreTrainedTokenizerFast"),Fs=o("."),Ss=d(),Wo=r("p"),Cs=o("Handles shared (mostly boiler plate) methods for those two classes."),Ws=d(),Oo=r("p"),Os=o("Class attributes (overridden by derived classes)"),js=d(),I=r("ul"),Z=r("li"),jo=r("strong"),Rs=o("vocab_files_names"),Us=o(" ("),Ro=r("code"),Ms=o("Dict[str, str]"),Vs=o(") \u2014 A dictionary with, as keys, the "),Uo=r("code"),Gs=o("__init__"),Hs=o(` keyword name of each
vocabulary file required by the model, and as associated values, the filename for saving the associated file
(string).`),Xs=d(),F=r("li"),Mo=r("strong"),Ys=o("pretrained_vocab_files_map"),Js=o(" ("),Vo=r("code"),Ks=o("Dict[str, Dict[str, str]]"),Qs=o(`) \u2014 A dictionary of dictionaries, with the
high-level keys being the `),Go=r("code"),Zs=o("__init__"),ea=o(` keyword name of each vocabulary file required by the model, the
low-level being the `),Ho=r("code"),ta=o("short-cut-names"),oa=o(" of the pretrained models with, as associated values, the "),Xo=r("code"),na=o("url"),ra=o(` to the
associated pretrained vocabulary file.`),sa=d(),M=r("li"),Yo=r("strong"),aa=o("max_model_input_sizes"),ia=o(" ("),Jo=r("code"),da=o("Dict[str, Optional[int]]"),la=o(") \u2014 A dictionary with, as keys, the "),Ko=r("code"),ca=o("short-cut-names"),pa=o(`
of the pretrained models, and as associated values, the maximum length of the sequence inputs of this model,
or `),Qo=r("code"),ma=o("None"),ha=o(" if the model has no maximum input size."),ua=d(),S=r("li"),Zo=r("strong"),fa=o("pretrained_init_configuration"),_a=o(" ("),en=r("code"),ga=o("Dict[str, Dict[str, Any]]"),ka=o(`) \u2014 A dictionary with, as keys, the
`),tn=r("code"),ba=o("short-cut-names"),va=o(` of the pretrained models, and as associated values, a dictionary of specific arguments to
pass to the `),on=r("code"),Ta=o("__init__"),ya=o(` method of the tokenizer class for this pretrained model when loading the tokenizer
with the `),mo=r("a"),za=o("from_pretrained()"),wa=o(" method."),xa=d(),De=r("li"),nn=r("strong"),$a=o("model_input_names"),Pa=o(" ("),rn=r("code"),qa=o("List[str]"),Ea=o(") \u2014 A list of inputs expected in the forward pass of the model."),Ba=d(),V=r("li"),sn=r("strong"),La=o("padding_side"),Da=o(" ("),an=r("code"),Ia=o("str"),Na=o(`) \u2014 The default value for the side on which the model should have padding applied.
Should be `),dn=r("code"),Aa=o("'right'"),Fa=o(" or "),ln=r("code"),Sa=o("'left'"),Ca=o("."),Wa=d(),G=r("li"),cn=r("strong"),Oa=o("truncation_side"),ja=o(" ("),pn=r("code"),Ra=o("str"),Ua=o(`) \u2014 The default value for the side on which the model should have truncation
applied. Should be `),mn=r("code"),Ma=o("'right'"),Va=o(" or "),hn=r("code"),Ga=o("'left'"),Ha=o("."),Xa=d(),Ie=r("div"),k(it.$$.fragment),Ya=d(),un=r("p"),Ja=o(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),Ka=d(),Ne=r("div"),k(dt.$$.fragment),Qa=d(),fn=r("p"),Za=o(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),ei=d(),Ae=r("div"),k(lt.$$.fragment),ti=d(),_n=r("p"),oi=o("Convert a list of lists of token ids into a list of strings by calling decode."),ni=d(),ee=r("div"),k(ct.$$.fragment),ri=d(),gn=r("p"),si=o("Tokenize and prepare for the model a list of sequences or a list of pairs of sequences."),ai=d(),k(Fe.$$.fragment),ii=d(),te=r("div"),k(pt.$$.fragment),di=d(),kn=r("p"),li=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),ci=d(),bn=r("p"),pi=o("This implementation does not add special tokens and this method should be overridden in a subclass."),mi=d(),Se=r("div"),k(mt.$$.fragment),hi=d(),vn=r("p"),ui=o("Clean up a list of simple English tokenization artifacts like spaces before punctuations and abbreviated forms."),fi=d(),Ce=r("div"),k(ht.$$.fragment),_i=d(),ut=r("p"),gi=o("Converts a sequence of tokens in a single string. The most simple way to do it is "),Tn=r("code"),ki=o('" ".join(tokens)'),bi=o(` but we
often want to remove sub-word tokenization artifacts at the same time.`),vi=d(),oe=r("div"),k(ft.$$.fragment),Ti=d(),ho=r("p"),yi=o("Create the token type IDs corresponding to the sequences passed. "),uo=r("a"),zi=o(`What are token type
IDs?`),wi=d(),yn=r("p"),xi=o("Should be overridden in a subclass if the model has a special way of building those."),$i=d(),ne=r("div"),k(_t.$$.fragment),Pi=d(),zn=r("p"),qi=o(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Ei=d(),gt=r("p"),Bi=o("Similar to doing "),wn=r("code"),Li=o("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Di=o("."),Ii=d(),re=r("div"),k(kt.$$.fragment),Ni=d(),xn=r("p"),Ai=o("Converts a string to a sequence of ids (integer), using the tokenizer and vocabulary."),Fi=d(),bt=r("p"),Si=o("Same as doing "),$n=r("code"),Ci=o("self.convert_tokens_to_ids(self.tokenize(text))"),Wi=o("."),Oi=d(),se=r("div"),k(vt.$$.fragment),ji=d(),Pn=r("p"),Ri=o("Tokenize and prepare for the model a sequence or a pair of sequences."),Ui=d(),k(We.$$.fragment),Mi=d(),H=r("div"),k(Tt.$$.fragment),Vi=d(),yt=r("p"),Gi=o("Instantiate a "),fo=r("a"),Hi=o("PreTrainedTokenizerBase"),Xi=o(` (or a derived class) from a predefined
tokenizer.`),Yi=d(),k(Oe.$$.fragment),Ji=d(),k(je.$$.fragment),Ki=d(),Re=r("div"),k(zt.$$.fragment),Qi=d(),be=r("p"),Zi=o(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),qn=r("code"),ed=o("prepare_for_model"),td=o(" or "),En=r("code"),od=o("encode_plus"),nd=o(" methods."),rd=d(),ae=r("div"),k(wt.$$.fragment),sd=d(),Bn=r("p"),ad=o("Returns the vocabulary as a dictionary of token to index."),id=d(),ie=r("p"),Ln=r("code"),dd=o("tokenizer.get_vocab()[token]"),ld=o(" is equivalent to "),Dn=r("code"),cd=o("tokenizer.convert_tokens_to_ids(token)"),pd=o(" when "),In=r("code"),md=o("token"),hd=o(` is in the
vocab.`),ud=d(),X=r("div"),k(xt.$$.fragment),fd=d(),Nn=r("p"),_d=o(`Pad a single encoded input or a batch of encoded inputs up to predefined length or to the max sequence length
in the batch.`),gd=d(),J=r("p"),kd=o("Padding side (left/right) padding token ids are defined at the tokenizer level (with "),An=r("code"),bd=o("self.padding_side"),vd=o(`,
`),Fn=r("code"),Td=o("self.pad_token_id"),yd=o(" and "),Sn=r("code"),zd=o("self.pad_token_type_id"),wd=o(")"),xd=d(),k(Ue.$$.fragment),$d=d(),Me=r("div"),k($t.$$.fragment),Pd=d(),j=r("p"),qd=o(`Prepares a sequence of input id, or a pair of sequences of inputs ids so that it can be used by the model. It
adds special tokens, truncates sequences if overflowing while taking into account the special tokens and
manages a moving window (with user defined stride) for overflowing tokens. Please Note, for `),Cn=r("em"),Ed=o("pair_ids"),Bd=o(`
different than `),Wn=r("code"),Ld=o("None"),Dd=o(" and "),On=r("em"),Id=o("truncation_strategy = longest_first"),Nd=o(" or "),jn=r("code"),Ad=o("True"),Fd=o(`, it is not possible to return
overflowing tokens. Such a combination of arguments will raise an error.`),Sd=d(),Ve=r("div"),k(Pt.$$.fragment),Cd=d(),Rn=r("p"),Wd=o("Prepare model inputs for translation. For best performance, translate one sentence at a time."),Od=d(),de=r("div"),k(qt.$$.fragment),jd=d(),Et=r("p"),Rd=o(`Upload the tokenizer files to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),Un=r("code"),Ud=o("repo_path_or_name"),Md=o("."),Vd=d(),k(Ge.$$.fragment),Gd=d(),le=r("div"),k(Bt.$$.fragment),Hd=d(),Lt=r("p"),Xd=o(`Register this class with a given auto class. This should only be used for custom tokenizers as the ones in the
library are already mapped with `),Mn=r("code"),Yd=o("AutoTokenizer"),Jd=o("."),Kd=d(),k(He.$$.fragment),Qd=d(),Y=r("div"),k(Dt.$$.fragment),Zd=d(),Vn=r("p"),el=o("Save the full tokenizer state."),tl=d(),It=r("p"),ol=o(`This method make sure the full tokenizer can then be re-loaded using the
`),Gn=r("code"),nl=o("from_pretrained"),rl=o(" class method.."),sl=d(),Nt=r("p"),al=o(`Warning,None This won\u2019t save modifications you may have applied to the tokenizer after the instantiation (for
instance, modifying `),Hn=r("code"),il=o("tokenizer.do_lower_case"),dl=o(" after creation)."),ll=d(),ce=r("div"),k(At.$$.fragment),cl=d(),Xn=r("p"),pl=o("Save only the vocabulary of the tokenizer (vocabulary + added tokens)."),ml=d(),Ft=r("p"),hl=o(`This method won\u2019t save the configuration and special token mappings of the tokenizer. Use
`),Yn=r("code"),ul=o("_save_pretrained()"),fl=o(" to save the whole state of the tokenizer."),_l=d(),Xe=r("div"),k(St.$$.fragment),gl=d(),Ct=r("p"),kl=o("Converts a string in a sequence of tokens, replacing unknown tokens with the "),Jn=r("code"),bl=o("unk_token"),vl=o("."),Tl=d(),Ye=r("div"),k(Wt.$$.fragment),yl=d(),Kn=r("p"),zl=o("Truncates a sequence pair in-place following the strategy."),Lr=d(),ve=r("h2"),Je=r("a"),Qn=r("span"),k(Ot.$$.fragment),wl=d(),Zn=r("span"),xl=o("SpecialTokensMixin"),Dr=d(),A=r("div"),k(jt.$$.fragment),$l=d(),Te=r("p"),Pl=o("A mixin derived by "),_o=r("a"),ql=o("PreTrainedTokenizer"),El=o(" and "),go=r("a"),Bl=o("PreTrainedTokenizerFast"),Ll=o(` to handle specific behaviors related to
special tokens. In particular, this class hold the attributes which can be used to directly access these special
tokens in a model-independent manner and allow to set and update the special tokens.`),Dl=d(),B=r("div"),k(Rt.$$.fragment),Il=d(),er=r("p"),Nl=o(`Add a dictionary of special tokens (eos, pad, cls, etc.) to the encoder and link them to class attributes. If
special tokens are NOT in the vocabulary, they are added to it (indexed starting from the last index of the
current vocabulary).`),Al=d(),tr=r("p"),Fl=o(`Note,None When adding new tokens to the vocabulary, you should make sure to also resize the token embedding
matrix of the model so that its embedding matrix matches the tokenizer.`),Sl=d(),Ut=r("p"),Cl=o("In order to do that, please use the "),ko=r("a"),Wl=o("resize_token_embeddings()"),Ol=o(" method."),jl=d(),Mt=r("p"),Rl=o("Using "),or=r("code"),Ul=o("add_special_tokens"),Ml=o(" will ensure your special tokens can be used in several ways:"),Vl=d(),Vt=r("ul"),nr=r("li"),Gl=o("Special tokens are carefully handled by the tokenizer (they are never split)."),Hl=d(),Gt=r("li"),Xl=o("You can easily refer to special tokens using tokenizer class attributes like "),rr=r("code"),Yl=o("tokenizer.cls_token"),Jl=o(`. This
makes it easy to develop model-agnostic training and fine-tuning scripts.`),Kl=d(),R=r("p"),Ql=o(`When possible, special tokens are already registered for provided pretrained models (for instance
`),bo=r("a"),Zl=o("BertTokenizer"),ec=d(),sr=r("code"),tc=o("cls_token"),oc=o(" is already registered to be :obj"),ar=r("em"),nc=o("\u2019[CLS]\u2019"),rc=o(` and XLM\u2019s one is also registered to be
`),ir=r("code"),sc=o("'</s>'"),ac=o(")."),ic=d(),k(Ke.$$.fragment),dc=d(),C=r("div"),k(Ht.$$.fragment),lc=d(),dr=r("p"),cc=o(`Add a list of new tokens to the tokenizer class. If the new tokens are not in the vocabulary, they are added to
it with indices starting from length of the current vocabulary.`),pc=d(),lr=r("p"),mc=o(`Note,None When adding new tokens to the vocabulary, you should make sure to also resize the token embedding
matrix of the model so that its embedding matrix matches the tokenizer.`),hc=d(),Xt=r("p"),uc=o("In order to do that, please use the "),vo=r("a"),fc=o("resize_token_embeddings()"),_c=o(" method."),gc=d(),k(Qe.$$.fragment),kc=d(),pe=r("div"),k(Yt.$$.fragment),bc=d(),ye=r("p"),vc=o("Make sure that all the special tokens attributes of the tokenizer ("),cr=r("code"),Tc=o("tokenizer.mask_token"),yc=o(`,
`),pr=r("code"),zc=o("tokenizer.cls_token"),wc=o(", etc.) are in the vocabulary."),xc=d(),mr=r("p"),$c=o("Add the missing ones to the vocabulary if needed."),Ir=d(),ze=r("h2"),Ze=r("a"),hr=r("span"),k(Jt.$$.fragment),Pc=d(),ur=r("span"),qc=o("Enums and namedtuples"),Nr=d(),we=r("div"),k(Kt.$$.fragment),Ec=d(),xe=r("p"),Bc=o("Possible values for the "),fr=r("code"),Lc=o("truncation"),Dc=o(" argument in "),et=r("a"),Ic=o("PreTrainedTokenizerBase."),_r=r("strong"),Nc=o("call"),Ac=o("()"),Fc=o(`. Useful for tab-completion in
an IDE.`),Ar=d(),$e=r("div"),k(Qt.$$.fragment),Sc=d(),gr=r("p"),Cc=o("Character span in the original string."),Fr=d(),Pe=r("div"),k(Zt.$$.fragment),Wc=d(),kr=r("p"),Oc=o("Token span in an encoded string (list of tokens)."),this.h()},l(i){const w=Om('[data-svelte="svelte-1phssyn"]',document.head);p=s(w,"META",{name:!0,content:!0}),w.forEach(t),$=l(i),f=s(i,"H1",{class:!0});var eo=a(f);h=s(eo,"A",{id:!0,class:!0,href:!0});var br=a(h);x=s(br,"SPAN",{});var vr=a(x);b(c.$$.fragment,vr),vr.forEach(t),br.forEach(t),_=l(eo),L=s(eo,"SPAN",{});var Tr=a(L);_e=n(Tr,"Utilities for Tokenizers"),Tr.forEach(t),eo.forEach(t),O=l(i),D=s(i,"P",{});var U=a(D);no=n(U,`This page lists all the utility functions used by the tokenizers, mainly the class
`),ro=s(U,"A",{href:!0});var yr=a(ro);vs=n(yr,"PreTrainedTokenizerBase"),yr.forEach(t),Ts=n(U,` that implements the common methods between
`),so=s(U,"A",{href:!0});var zr=a(so);ys=n(zr,"PreTrainedTokenizer"),zr.forEach(t),zs=n(U," and "),ao=s(U,"A",{href:!0});var wr=a(ao);ws=n(wr,"PreTrainedTokenizerFast"),wr.forEach(t),xs=n(U,` and the mixin
`),io=s(U,"A",{href:!0});var xr=a(io);$s=n(xr,"SpecialTokensMixin"),xr.forEach(t),Ps=n(U,"."),U.forEach(t),qr=l(i),lo=s(i,"P",{});var Rc=a(lo);qs=n(Rc,"Most of those are only useful if you are studying the code of the tokenizers in the library."),Rc.forEach(t),Er=l(i),ge=s(i,"H2",{class:!0});var Cr=a(ge);Le=s(Cr,"A",{id:!0,class:!0,href:!0});var Uc=a(Le);So=s(Uc,"SPAN",{});var Mc=a(So);b(st.$$.fragment,Mc),Mc.forEach(t),Uc.forEach(t),Es=l(Cr),Co=s(Cr,"SPAN",{});var Vc=a(Co);Bs=n(Vc,"PreTrainedTokenizerBase"),Vc.forEach(t),Cr.forEach(t),Br=l(i),u=s(i,"DIV",{class:!0});var g=a(u);b(at.$$.fragment,g),Ls=l(g),ke=s(g,"P",{});var To=a(ke);Ds=n(To,"Base class for "),co=s(To,"A",{href:!0});var Gc=a(co);Is=n(Gc,"PreTrainedTokenizer"),Gc.forEach(t),Ns=n(To," and "),po=s(To,"A",{href:!0});var Hc=a(po);As=n(Hc,"PreTrainedTokenizerFast"),Hc.forEach(t),Fs=n(To,"."),To.forEach(t),Ss=l(g),Wo=s(g,"P",{});var Xc=a(Wo);Cs=n(Xc,"Handles shared (mostly boiler plate) methods for those two classes."),Xc.forEach(t),Ws=l(g),Oo=s(g,"P",{});var Yc=a(Oo);Os=n(Yc,"Class attributes (overridden by derived classes)"),Yc.forEach(t),js=l(g),I=s(g,"UL",{});var W=a(I);Z=s(W,"LI",{});var to=a(Z);jo=s(to,"STRONG",{});var Jc=a(jo);Rs=n(Jc,"vocab_files_names"),Jc.forEach(t),Us=n(to," ("),Ro=s(to,"CODE",{});var Kc=a(Ro);Ms=n(Kc,"Dict[str, str]"),Kc.forEach(t),Vs=n(to,") \u2014 A dictionary with, as keys, the "),Uo=s(to,"CODE",{});var Qc=a(Uo);Gs=n(Qc,"__init__"),Qc.forEach(t),Hs=n(to,` keyword name of each
vocabulary file required by the model, and as associated values, the filename for saving the associated file
(string).`),to.forEach(t),Xs=l(W),F=s(W,"LI",{});var K=a(F);Mo=s(K,"STRONG",{});var Zc=a(Mo);Ys=n(Zc,"pretrained_vocab_files_map"),Zc.forEach(t),Js=n(K," ("),Vo=s(K,"CODE",{});var ep=a(Vo);Ks=n(ep,"Dict[str, Dict[str, str]]"),ep.forEach(t),Qs=n(K,`) \u2014 A dictionary of dictionaries, with the
high-level keys being the `),Go=s(K,"CODE",{});var tp=a(Go);Zs=n(tp,"__init__"),tp.forEach(t),ea=n(K,` keyword name of each vocabulary file required by the model, the
low-level being the `),Ho=s(K,"CODE",{});var op=a(Ho);ta=n(op,"short-cut-names"),op.forEach(t),oa=n(K," of the pretrained models with, as associated values, the "),Xo=s(K,"CODE",{});var np=a(Xo);na=n(np,"url"),np.forEach(t),ra=n(K,` to the
associated pretrained vocabulary file.`),K.forEach(t),sa=l(W),M=s(W,"LI",{});var qe=a(M);Yo=s(qe,"STRONG",{});var rp=a(Yo);aa=n(rp,"max_model_input_sizes"),rp.forEach(t),ia=n(qe," ("),Jo=s(qe,"CODE",{});var sp=a(Jo);da=n(sp,"Dict[str, Optional[int]]"),sp.forEach(t),la=n(qe,") \u2014 A dictionary with, as keys, the "),Ko=s(qe,"CODE",{});var ap=a(Ko);ca=n(ap,"short-cut-names"),ap.forEach(t),pa=n(qe,`
of the pretrained models, and as associated values, the maximum length of the sequence inputs of this model,
or `),Qo=s(qe,"CODE",{});var ip=a(Qo);ma=n(ip,"None"),ip.forEach(t),ha=n(qe," if the model has no maximum input size."),qe.forEach(t),ua=l(W),S=s(W,"LI",{});var Q=a(S);Zo=s(Q,"STRONG",{});var dp=a(Zo);fa=n(dp,"pretrained_init_configuration"),dp.forEach(t),_a=n(Q," ("),en=s(Q,"CODE",{});var lp=a(en);ga=n(lp,"Dict[str, Dict[str, Any]]"),lp.forEach(t),ka=n(Q,`) \u2014 A dictionary with, as keys, the
`),tn=s(Q,"CODE",{});var cp=a(tn);ba=n(cp,"short-cut-names"),cp.forEach(t),va=n(Q,` of the pretrained models, and as associated values, a dictionary of specific arguments to
pass to the `),on=s(Q,"CODE",{});var pp=a(on);Ta=n(pp,"__init__"),pp.forEach(t),ya=n(Q,` method of the tokenizer class for this pretrained model when loading the tokenizer
with the `),mo=s(Q,"A",{href:!0});var mp=a(mo);za=n(mp,"from_pretrained()"),mp.forEach(t),wa=n(Q," method."),Q.forEach(t),xa=l(W),De=s(W,"LI",{});var $r=a(De);nn=s($r,"STRONG",{});var hp=a(nn);$a=n(hp,"model_input_names"),hp.forEach(t),Pa=n($r," ("),rn=s($r,"CODE",{});var up=a(rn);qa=n(up,"List[str]"),up.forEach(t),Ea=n($r,") \u2014 A list of inputs expected in the forward pass of the model."),$r.forEach(t),Ba=l(W),V=s(W,"LI",{});var Ee=a(V);sn=s(Ee,"STRONG",{});var fp=a(sn);La=n(fp,"padding_side"),fp.forEach(t),Da=n(Ee," ("),an=s(Ee,"CODE",{});var _p=a(an);Ia=n(_p,"str"),_p.forEach(t),Na=n(Ee,`) \u2014 The default value for the side on which the model should have padding applied.
Should be `),dn=s(Ee,"CODE",{});var gp=a(dn);Aa=n(gp,"'right'"),gp.forEach(t),Fa=n(Ee," or "),ln=s(Ee,"CODE",{});var kp=a(ln);Sa=n(kp,"'left'"),kp.forEach(t),Ca=n(Ee,"."),Ee.forEach(t),Wa=l(W),G=s(W,"LI",{});var Be=a(G);cn=s(Be,"STRONG",{});var bp=a(cn);Oa=n(bp,"truncation_side"),bp.forEach(t),ja=n(Be," ("),pn=s(Be,"CODE",{});var vp=a(pn);Ra=n(vp,"str"),vp.forEach(t),Ua=n(Be,`) \u2014 The default value for the side on which the model should have truncation
applied. Should be `),mn=s(Be,"CODE",{});var Tp=a(mn);Ma=n(Tp,"'right'"),Tp.forEach(t),Va=n(Be," or "),hn=s(Be,"CODE",{});var yp=a(hn);Ga=n(yp,"'left'"),yp.forEach(t),Ha=n(Be,"."),Be.forEach(t),W.forEach(t),Xa=l(g),Ie=s(g,"DIV",{class:!0});var Wr=a(Ie);b(it.$$.fragment,Wr),Ya=l(Wr),un=s(Wr,"P",{});var zp=a(un);Ja=n(zp,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),zp.forEach(t),Wr.forEach(t),Ka=l(g),Ne=s(g,"DIV",{class:!0});var Or=a(Ne);b(dt.$$.fragment,Or),Qa=l(Or),fn=s(Or,"P",{});var wp=a(fn);Za=n(wp,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),wp.forEach(t),Or.forEach(t),ei=l(g),Ae=s(g,"DIV",{class:!0});var jr=a(Ae);b(lt.$$.fragment,jr),ti=l(jr),_n=s(jr,"P",{});var xp=a(_n);oi=n(xp,"Convert a list of lists of token ids into a list of strings by calling decode."),xp.forEach(t),jr.forEach(t),ni=l(g),ee=s(g,"DIV",{class:!0});var yo=a(ee);b(ct.$$.fragment,yo),ri=l(yo),gn=s(yo,"P",{});var $p=a(gn);si=n($p,"Tokenize and prepare for the model a list of sequences or a list of pairs of sequences."),$p.forEach(t),ai=l(yo),b(Fe.$$.fragment,yo),yo.forEach(t),ii=l(g),te=s(g,"DIV",{class:!0});var zo=a(te);b(pt.$$.fragment,zo),di=l(zo),kn=s(zo,"P",{});var Pp=a(kn);li=n(Pp,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Pp.forEach(t),ci=l(zo),bn=s(zo,"P",{});var qp=a(bn);pi=n(qp,"This implementation does not add special tokens and this method should be overridden in a subclass."),qp.forEach(t),zo.forEach(t),mi=l(g),Se=s(g,"DIV",{class:!0});var Rr=a(Se);b(mt.$$.fragment,Rr),hi=l(Rr),vn=s(Rr,"P",{});var Ep=a(vn);ui=n(Ep,"Clean up a list of simple English tokenization artifacts like spaces before punctuations and abbreviated forms."),Ep.forEach(t),Rr.forEach(t),fi=l(g),Ce=s(g,"DIV",{class:!0});var Ur=a(Ce);b(ht.$$.fragment,Ur),_i=l(Ur),ut=s(Ur,"P",{});var Mr=a(ut);gi=n(Mr,"Converts a sequence of tokens in a single string. The most simple way to do it is "),Tn=s(Mr,"CODE",{});var Bp=a(Tn);ki=n(Bp,'" ".join(tokens)'),Bp.forEach(t),bi=n(Mr,` but we
often want to remove sub-word tokenization artifacts at the same time.`),Mr.forEach(t),Ur.forEach(t),vi=l(g),oe=s(g,"DIV",{class:!0});var wo=a(oe);b(ft.$$.fragment,wo),Ti=l(wo),ho=s(wo,"P",{});var jc=a(ho);yi=n(jc,"Create the token type IDs corresponding to the sequences passed. "),uo=s(jc,"A",{href:!0});var Lp=a(uo);zi=n(Lp,`What are token type
IDs?`),Lp.forEach(t),jc.forEach(t),wi=l(wo),yn=s(wo,"P",{});var Dp=a(yn);xi=n(Dp,"Should be overridden in a subclass if the model has a special way of building those."),Dp.forEach(t),wo.forEach(t),$i=l(g),ne=s(g,"DIV",{class:!0});var xo=a(ne);b(_t.$$.fragment,xo),Pi=l(xo),zn=s(xo,"P",{});var Ip=a(zn);qi=n(Ip,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Ip.forEach(t),Ei=l(xo),gt=s(xo,"P",{});var Vr=a(gt);Bi=n(Vr,"Similar to doing "),wn=s(Vr,"CODE",{});var Np=a(wn);Li=n(Np,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Np.forEach(t),Di=n(Vr,"."),Vr.forEach(t),xo.forEach(t),Ii=l(g),re=s(g,"DIV",{class:!0});var $o=a(re);b(kt.$$.fragment,$o),Ni=l($o),xn=s($o,"P",{});var Ap=a(xn);Ai=n(Ap,"Converts a string to a sequence of ids (integer), using the tokenizer and vocabulary."),Ap.forEach(t),Fi=l($o),bt=s($o,"P",{});var Gr=a(bt);Si=n(Gr,"Same as doing "),$n=s(Gr,"CODE",{});var Fp=a($n);Ci=n(Fp,"self.convert_tokens_to_ids(self.tokenize(text))"),Fp.forEach(t),Wi=n(Gr,"."),Gr.forEach(t),$o.forEach(t),Oi=l(g),se=s(g,"DIV",{class:!0});var Po=a(se);b(vt.$$.fragment,Po),ji=l(Po),Pn=s(Po,"P",{});var Sp=a(Pn);Ri=n(Sp,"Tokenize and prepare for the model a sequence or a pair of sequences."),Sp.forEach(t),Ui=l(Po),b(We.$$.fragment,Po),Po.forEach(t),Mi=l(g),H=s(g,"DIV",{class:!0});var tt=a(H);b(Tt.$$.fragment,tt),Vi=l(tt),yt=s(tt,"P",{});var Hr=a(yt);Gi=n(Hr,"Instantiate a "),fo=s(Hr,"A",{href:!0});var Cp=a(fo);Hi=n(Cp,"PreTrainedTokenizerBase"),Cp.forEach(t),Xi=n(Hr,` (or a derived class) from a predefined
tokenizer.`),Hr.forEach(t),Yi=l(tt),b(Oe.$$.fragment,tt),Ji=l(tt),b(je.$$.fragment,tt),tt.forEach(t),Ki=l(g),Re=s(g,"DIV",{class:!0});var Xr=a(Re);b(zt.$$.fragment,Xr),Qi=l(Xr),be=s(Xr,"P",{});var qo=a(be);Zi=n(qo,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),qn=s(qo,"CODE",{});var Wp=a(qn);ed=n(Wp,"prepare_for_model"),Wp.forEach(t),td=n(qo," or "),En=s(qo,"CODE",{});var Op=a(En);od=n(Op,"encode_plus"),Op.forEach(t),nd=n(qo," methods."),qo.forEach(t),Xr.forEach(t),rd=l(g),ae=s(g,"DIV",{class:!0});var Eo=a(ae);b(wt.$$.fragment,Eo),sd=l(Eo),Bn=s(Eo,"P",{});var jp=a(Bn);ad=n(jp,"Returns the vocabulary as a dictionary of token to index."),jp.forEach(t),id=l(Eo),ie=s(Eo,"P",{});var oo=a(ie);Ln=s(oo,"CODE",{});var Rp=a(Ln);dd=n(Rp,"tokenizer.get_vocab()[token]"),Rp.forEach(t),ld=n(oo," is equivalent to "),Dn=s(oo,"CODE",{});var Up=a(Dn);cd=n(Up,"tokenizer.convert_tokens_to_ids(token)"),Up.forEach(t),pd=n(oo," when "),In=s(oo,"CODE",{});var Mp=a(In);md=n(Mp,"token"),Mp.forEach(t),hd=n(oo,` is in the
vocab.`),oo.forEach(t),Eo.forEach(t),ud=l(g),X=s(g,"DIV",{class:!0});var ot=a(X);b(xt.$$.fragment,ot),fd=l(ot),Nn=s(ot,"P",{});var Vp=a(Nn);_d=n(Vp,`Pad a single encoded input or a batch of encoded inputs up to predefined length or to the max sequence length
in the batch.`),Vp.forEach(t),gd=l(ot),J=s(ot,"P",{});var nt=a(J);kd=n(nt,"Padding side (left/right) padding token ids are defined at the tokenizer level (with "),An=s(nt,"CODE",{});var Gp=a(An);bd=n(Gp,"self.padding_side"),Gp.forEach(t),vd=n(nt,`,
`),Fn=s(nt,"CODE",{});var Hp=a(Fn);Td=n(Hp,"self.pad_token_id"),Hp.forEach(t),yd=n(nt," and "),Sn=s(nt,"CODE",{});var Xp=a(Sn);zd=n(Xp,"self.pad_token_type_id"),Xp.forEach(t),wd=n(nt,")"),nt.forEach(t),xd=l(ot),b(Ue.$$.fragment,ot),ot.forEach(t),$d=l(g),Me=s(g,"DIV",{class:!0});var Yr=a(Me);b($t.$$.fragment,Yr),Pd=l(Yr),j=s(Yr,"P",{});var me=a(j);qd=n(me,`Prepares a sequence of input id, or a pair of sequences of inputs ids so that it can be used by the model. It
adds special tokens, truncates sequences if overflowing while taking into account the special tokens and
manages a moving window (with user defined stride) for overflowing tokens. Please Note, for `),Cn=s(me,"EM",{});var Yp=a(Cn);Ed=n(Yp,"pair_ids"),Yp.forEach(t),Bd=n(me,`
different than `),Wn=s(me,"CODE",{});var Jp=a(Wn);Ld=n(Jp,"None"),Jp.forEach(t),Dd=n(me," and "),On=s(me,"EM",{});var Kp=a(On);Id=n(Kp,"truncation_strategy = longest_first"),Kp.forEach(t),Nd=n(me," or "),jn=s(me,"CODE",{});var Qp=a(jn);Ad=n(Qp,"True"),Qp.forEach(t),Fd=n(me,`, it is not possible to return
overflowing tokens. Such a combination of arguments will raise an error.`),me.forEach(t),Yr.forEach(t),Sd=l(g),Ve=s(g,"DIV",{class:!0});var Jr=a(Ve);b(Pt.$$.fragment,Jr),Cd=l(Jr),Rn=s(Jr,"P",{});var Zp=a(Rn);Wd=n(Zp,"Prepare model inputs for translation. For best performance, translate one sentence at a time."),Zp.forEach(t),Jr.forEach(t),Od=l(g),de=s(g,"DIV",{class:!0});var Bo=a(de);b(qt.$$.fragment,Bo),jd=l(Bo),Et=s(Bo,"P",{});var Kr=a(Et);Rd=n(Kr,`Upload the tokenizer files to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),Un=s(Kr,"CODE",{});var em=a(Un);Ud=n(em,"repo_path_or_name"),em.forEach(t),Md=n(Kr,"."),Kr.forEach(t),Vd=l(Bo),b(Ge.$$.fragment,Bo),Bo.forEach(t),Gd=l(g),le=s(g,"DIV",{class:!0});var Lo=a(le);b(Bt.$$.fragment,Lo),Hd=l(Lo),Lt=s(Lo,"P",{});var Qr=a(Lt);Xd=n(Qr,`Register this class with a given auto class. This should only be used for custom tokenizers as the ones in the
library are already mapped with `),Mn=s(Qr,"CODE",{});var tm=a(Mn);Yd=n(tm,"AutoTokenizer"),tm.forEach(t),Jd=n(Qr,"."),Qr.forEach(t),Kd=l(Lo),b(He.$$.fragment,Lo),Lo.forEach(t),Qd=l(g),Y=s(g,"DIV",{class:!0});var rt=a(Y);b(Dt.$$.fragment,rt),Zd=l(rt),Vn=s(rt,"P",{});var om=a(Vn);el=n(om,"Save the full tokenizer state."),om.forEach(t),tl=l(rt),It=s(rt,"P",{});var Zr=a(It);ol=n(Zr,`This method make sure the full tokenizer can then be re-loaded using the
`),Gn=s(Zr,"CODE",{});var nm=a(Gn);nl=n(nm,"from_pretrained"),nm.forEach(t),rl=n(Zr," class method.."),Zr.forEach(t),sl=l(rt),Nt=s(rt,"P",{});var es=a(Nt);al=n(es,`Warning,None This won\u2019t save modifications you may have applied to the tokenizer after the instantiation (for
instance, modifying `),Hn=s(es,"CODE",{});var rm=a(Hn);il=n(rm,"tokenizer.do_lower_case"),rm.forEach(t),dl=n(es," after creation)."),es.forEach(t),rt.forEach(t),ll=l(g),ce=s(g,"DIV",{class:!0});var Do=a(ce);b(At.$$.fragment,Do),cl=l(Do),Xn=s(Do,"P",{});var sm=a(Xn);pl=n(sm,"Save only the vocabulary of the tokenizer (vocabulary + added tokens)."),sm.forEach(t),ml=l(Do),Ft=s(Do,"P",{});var ts=a(Ft);hl=n(ts,`This method won\u2019t save the configuration and special token mappings of the tokenizer. Use
`),Yn=s(ts,"CODE",{});var am=a(Yn);ul=n(am,"_save_pretrained()"),am.forEach(t),fl=n(ts," to save the whole state of the tokenizer."),ts.forEach(t),Do.forEach(t),_l=l(g),Xe=s(g,"DIV",{class:!0});var os=a(Xe);b(St.$$.fragment,os),gl=l(os),Ct=s(os,"P",{});var ns=a(Ct);kl=n(ns,"Converts a string in a sequence of tokens, replacing unknown tokens with the "),Jn=s(ns,"CODE",{});var im=a(Jn);bl=n(im,"unk_token"),im.forEach(t),vl=n(ns,"."),ns.forEach(t),os.forEach(t),Tl=l(g),Ye=s(g,"DIV",{class:!0});var rs=a(Ye);b(Wt.$$.fragment,rs),yl=l(rs),Kn=s(rs,"P",{});var dm=a(Kn);zl=n(dm,"Truncates a sequence pair in-place following the strategy."),dm.forEach(t),rs.forEach(t),g.forEach(t),Lr=l(i),ve=s(i,"H2",{class:!0});var ss=a(ve);Je=s(ss,"A",{id:!0,class:!0,href:!0});var lm=a(Je);Qn=s(lm,"SPAN",{});var cm=a(Qn);b(Ot.$$.fragment,cm),cm.forEach(t),lm.forEach(t),wl=l(ss),Zn=s(ss,"SPAN",{});var pm=a(Zn);xl=n(pm,"SpecialTokensMixin"),pm.forEach(t),ss.forEach(t),Dr=l(i),A=s(i,"DIV",{class:!0});var he=a(A);b(jt.$$.fragment,he),$l=l(he),Te=s(he,"P",{});var Io=a(Te);Pl=n(Io,"A mixin derived by "),_o=s(Io,"A",{href:!0});var mm=a(_o);ql=n(mm,"PreTrainedTokenizer"),mm.forEach(t),El=n(Io," and "),go=s(Io,"A",{href:!0});var hm=a(go);Bl=n(hm,"PreTrainedTokenizerFast"),hm.forEach(t),Ll=n(Io,` to handle specific behaviors related to
special tokens. In particular, this class hold the attributes which can be used to directly access these special
tokens in a model-independent manner and allow to set and update the special tokens.`),Io.forEach(t),Dl=l(he),B=s(he,"DIV",{class:!0});var N=a(B);b(Rt.$$.fragment,N),Il=l(N),er=s(N,"P",{});var um=a(er);Nl=n(um,`Add a dictionary of special tokens (eos, pad, cls, etc.) to the encoder and link them to class attributes. If
special tokens are NOT in the vocabulary, they are added to it (indexed starting from the last index of the
current vocabulary).`),um.forEach(t),Al=l(N),tr=s(N,"P",{});var fm=a(tr);Fl=n(fm,`Note,None When adding new tokens to the vocabulary, you should make sure to also resize the token embedding
matrix of the model so that its embedding matrix matches the tokenizer.`),fm.forEach(t),Sl=l(N),Ut=s(N,"P",{});var as=a(Ut);Cl=n(as,"In order to do that, please use the "),ko=s(as,"A",{href:!0});var _m=a(ko);Wl=n(_m,"resize_token_embeddings()"),_m.forEach(t),Ol=n(as," method."),as.forEach(t),jl=l(N),Mt=s(N,"P",{});var is=a(Mt);Rl=n(is,"Using "),or=s(is,"CODE",{});var gm=a(or);Ul=n(gm,"add_special_tokens"),gm.forEach(t),Ml=n(is," will ensure your special tokens can be used in several ways:"),is.forEach(t),Vl=l(N),Vt=s(N,"UL",{});var ds=a(Vt);nr=s(ds,"LI",{});var km=a(nr);Gl=n(km,"Special tokens are carefully handled by the tokenizer (they are never split)."),km.forEach(t),Hl=l(ds),Gt=s(ds,"LI",{});var ls=a(Gt);Xl=n(ls,"You can easily refer to special tokens using tokenizer class attributes like "),rr=s(ls,"CODE",{});var bm=a(rr);Yl=n(bm,"tokenizer.cls_token"),bm.forEach(t),Jl=n(ls,`. This
makes it easy to develop model-agnostic training and fine-tuning scripts.`),ls.forEach(t),ds.forEach(t),Kl=l(N),R=s(N,"P",{});var ue=a(R);Ql=n(ue,`When possible, special tokens are already registered for provided pretrained models (for instance
`),bo=s(ue,"A",{href:!0});var vm=a(bo);Zl=n(vm,"BertTokenizer"),vm.forEach(t),ec=l(ue),sr=s(ue,"CODE",{});var Tm=a(sr);tc=n(Tm,"cls_token"),Tm.forEach(t),oc=n(ue," is already registered to be :obj"),ar=s(ue,"EM",{});var ym=a(ar);nc=n(ym,"\u2019[CLS]\u2019"),ym.forEach(t),rc=n(ue,` and XLM\u2019s one is also registered to be
`),ir=s(ue,"CODE",{});var zm=a(ir);sc=n(zm,"'</s>'"),zm.forEach(t),ac=n(ue,")."),ue.forEach(t),ic=l(N),b(Ke.$$.fragment,N),N.forEach(t),dc=l(he),C=s(he,"DIV",{class:!0});var fe=a(C);b(Ht.$$.fragment,fe),lc=l(fe),dr=s(fe,"P",{});var wm=a(dr);cc=n(wm,`Add a list of new tokens to the tokenizer class. If the new tokens are not in the vocabulary, they are added to
it with indices starting from length of the current vocabulary.`),wm.forEach(t),pc=l(fe),lr=s(fe,"P",{});var xm=a(lr);mc=n(xm,`Note,None When adding new tokens to the vocabulary, you should make sure to also resize the token embedding
matrix of the model so that its embedding matrix matches the tokenizer.`),xm.forEach(t),hc=l(fe),Xt=s(fe,"P",{});var cs=a(Xt);uc=n(cs,"In order to do that, please use the "),vo=s(cs,"A",{href:!0});var $m=a(vo);fc=n($m,"resize_token_embeddings()"),$m.forEach(t),_c=n(cs," method."),cs.forEach(t),gc=l(fe),b(Qe.$$.fragment,fe),fe.forEach(t),kc=l(he),pe=s(he,"DIV",{class:!0});var No=a(pe);b(Yt.$$.fragment,No),bc=l(No),ye=s(No,"P",{});var Ao=a(ye);vc=n(Ao,"Make sure that all the special tokens attributes of the tokenizer ("),cr=s(Ao,"CODE",{});var Pm=a(cr);Tc=n(Pm,"tokenizer.mask_token"),Pm.forEach(t),yc=n(Ao,`,
`),pr=s(Ao,"CODE",{});var qm=a(pr);zc=n(qm,"tokenizer.cls_token"),qm.forEach(t),wc=n(Ao,", etc.) are in the vocabulary."),Ao.forEach(t),xc=l(No),mr=s(No,"P",{});var Em=a(mr);$c=n(Em,"Add the missing ones to the vocabulary if needed."),Em.forEach(t),No.forEach(t),he.forEach(t),Ir=l(i),ze=s(i,"H2",{class:!0});var ps=a(ze);Ze=s(ps,"A",{id:!0,class:!0,href:!0});var Bm=a(Ze);hr=s(Bm,"SPAN",{});var Lm=a(hr);b(Jt.$$.fragment,Lm),Lm.forEach(t),Bm.forEach(t),Pc=l(ps),ur=s(ps,"SPAN",{});var Dm=a(ur);qc=n(Dm,"Enums and namedtuples"),Dm.forEach(t),ps.forEach(t),Nr=l(i),we=s(i,"DIV",{class:!0});var ms=a(we);b(Kt.$$.fragment,ms),Ec=l(ms),xe=s(ms,"P",{});var Fo=a(xe);Bc=n(Fo,"Possible values for the "),fr=s(Fo,"CODE",{});var Im=a(fr);Lc=n(Im,"truncation"),Im.forEach(t),Dc=n(Fo," argument in "),et=s(Fo,"A",{href:!0});var hs=a(et);Ic=n(hs,"PreTrainedTokenizerBase."),_r=s(hs,"STRONG",{});var Nm=a(_r);Nc=n(Nm,"call"),Nm.forEach(t),Ac=n(hs,"()"),hs.forEach(t),Fc=n(Fo,`. Useful for tab-completion in
an IDE.`),Fo.forEach(t),ms.forEach(t),Ar=l(i),$e=s(i,"DIV",{class:!0});var us=a($e);b(Qt.$$.fragment,us),Sc=l(us),gr=s(us,"P",{});var Am=a(gr);Cc=n(Am,"Character span in the original string."),Am.forEach(t),us.forEach(t),Fr=l(i),Pe=s(i,"DIV",{class:!0});var fs=a(Pe);b(Zt.$$.fragment,fs),Wc=l(fs),kr=s(fs,"P",{});var Fm=a(kr);Oc=n(Fm,"Token span in an encoded string (list of tokens)."),Fm.forEach(t),fs.forEach(t),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify(Qm)),m(h,"id","utilities-for-tokenizers"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#utilities-for-tokenizers"),m(f,"class","relative group"),m(ro,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase"),m(so,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(ao,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),m(io,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.SpecialTokensMixin"),m(Le,"id","transformers.PreTrainedTokenizerBase"),m(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Le,"href","#transformers.PreTrainedTokenizerBase"),m(ge,"class","relative group"),m(co,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(po,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),m(mo,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.from_pretrained"),m(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(uo,"href","../glossary#token-type-ids"),m(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fo,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase"),m(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Je,"id","transformers.SpecialTokensMixin"),m(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Je,"href","#transformers.SpecialTokensMixin"),m(ve,"class","relative group"),m(_o,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(go,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),m(ko,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.resize_token_embeddings"),m(bo,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.resize_token_embeddings"),m(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ze,"id","transformers.tokenization_utils_base.TruncationStrategy"),m(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ze,"href","#transformers.tokenization_utils_base.TruncationStrategy"),m(ze,"class","relative group"),m(et,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),m(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,w){e(document.head,p),P(i,$,w),P(i,f,w),e(f,h),e(h,x),v(c,x,null),e(f,_),e(f,L),e(L,_e),P(i,O,w),P(i,D,w),e(D,no),e(D,ro),e(ro,vs),e(D,Ts),e(D,so),e(so,ys),e(D,zs),e(D,ao),e(ao,ws),e(D,xs),e(D,io),e(io,$s),e(D,Ps),P(i,qr,w),P(i,lo,w),e(lo,qs),P(i,Er,w),P(i,ge,w),e(ge,Le),e(Le,So),v(st,So,null),e(ge,Es),e(ge,Co),e(Co,Bs),P(i,Br,w),P(i,u,w),v(at,u,null),e(u,Ls),e(u,ke),e(ke,Ds),e(ke,co),e(co,Is),e(ke,Ns),e(ke,po),e(po,As),e(ke,Fs),e(u,Ss),e(u,Wo),e(Wo,Cs),e(u,Ws),e(u,Oo),e(Oo,Os),e(u,js),e(u,I),e(I,Z),e(Z,jo),e(jo,Rs),e(Z,Us),e(Z,Ro),e(Ro,Ms),e(Z,Vs),e(Z,Uo),e(Uo,Gs),e(Z,Hs),e(I,Xs),e(I,F),e(F,Mo),e(Mo,Ys),e(F,Js),e(F,Vo),e(Vo,Ks),e(F,Qs),e(F,Go),e(Go,Zs),e(F,ea),e(F,Ho),e(Ho,ta),e(F,oa),e(F,Xo),e(Xo,na),e(F,ra),e(I,sa),e(I,M),e(M,Yo),e(Yo,aa),e(M,ia),e(M,Jo),e(Jo,da),e(M,la),e(M,Ko),e(Ko,ca),e(M,pa),e(M,Qo),e(Qo,ma),e(M,ha),e(I,ua),e(I,S),e(S,Zo),e(Zo,fa),e(S,_a),e(S,en),e(en,ga),e(S,ka),e(S,tn),e(tn,ba),e(S,va),e(S,on),e(on,Ta),e(S,ya),e(S,mo),e(mo,za),e(S,wa),e(I,xa),e(I,De),e(De,nn),e(nn,$a),e(De,Pa),e(De,rn),e(rn,qa),e(De,Ea),e(I,Ba),e(I,V),e(V,sn),e(sn,La),e(V,Da),e(V,an),e(an,Ia),e(V,Na),e(V,dn),e(dn,Aa),e(V,Fa),e(V,ln),e(ln,Sa),e(V,Ca),e(I,Wa),e(I,G),e(G,cn),e(cn,Oa),e(G,ja),e(G,pn),e(pn,Ra),e(G,Ua),e(G,mn),e(mn,Ma),e(G,Va),e(G,hn),e(hn,Ga),e(G,Ha),e(u,Xa),e(u,Ie),v(it,Ie,null),e(Ie,Ya),e(Ie,un),e(un,Ja),e(u,Ka),e(u,Ne),v(dt,Ne,null),e(Ne,Qa),e(Ne,fn),e(fn,Za),e(u,ei),e(u,Ae),v(lt,Ae,null),e(Ae,ti),e(Ae,_n),e(_n,oi),e(u,ni),e(u,ee),v(ct,ee,null),e(ee,ri),e(ee,gn),e(gn,si),e(ee,ai),v(Fe,ee,null),e(u,ii),e(u,te),v(pt,te,null),e(te,di),e(te,kn),e(kn,li),e(te,ci),e(te,bn),e(bn,pi),e(u,mi),e(u,Se),v(mt,Se,null),e(Se,hi),e(Se,vn),e(vn,ui),e(u,fi),e(u,Ce),v(ht,Ce,null),e(Ce,_i),e(Ce,ut),e(ut,gi),e(ut,Tn),e(Tn,ki),e(ut,bi),e(u,vi),e(u,oe),v(ft,oe,null),e(oe,Ti),e(oe,ho),e(ho,yi),e(ho,uo),e(uo,zi),e(oe,wi),e(oe,yn),e(yn,xi),e(u,$i),e(u,ne),v(_t,ne,null),e(ne,Pi),e(ne,zn),e(zn,qi),e(ne,Ei),e(ne,gt),e(gt,Bi),e(gt,wn),e(wn,Li),e(gt,Di),e(u,Ii),e(u,re),v(kt,re,null),e(re,Ni),e(re,xn),e(xn,Ai),e(re,Fi),e(re,bt),e(bt,Si),e(bt,$n),e($n,Ci),e(bt,Wi),e(u,Oi),e(u,se),v(vt,se,null),e(se,ji),e(se,Pn),e(Pn,Ri),e(se,Ui),v(We,se,null),e(u,Mi),e(u,H),v(Tt,H,null),e(H,Vi),e(H,yt),e(yt,Gi),e(yt,fo),e(fo,Hi),e(yt,Xi),e(H,Yi),v(Oe,H,null),e(H,Ji),v(je,H,null),e(u,Ki),e(u,Re),v(zt,Re,null),e(Re,Qi),e(Re,be),e(be,Zi),e(be,qn),e(qn,ed),e(be,td),e(be,En),e(En,od),e(be,nd),e(u,rd),e(u,ae),v(wt,ae,null),e(ae,sd),e(ae,Bn),e(Bn,ad),e(ae,id),e(ae,ie),e(ie,Ln),e(Ln,dd),e(ie,ld),e(ie,Dn),e(Dn,cd),e(ie,pd),e(ie,In),e(In,md),e(ie,hd),e(u,ud),e(u,X),v(xt,X,null),e(X,fd),e(X,Nn),e(Nn,_d),e(X,gd),e(X,J),e(J,kd),e(J,An),e(An,bd),e(J,vd),e(J,Fn),e(Fn,Td),e(J,yd),e(J,Sn),e(Sn,zd),e(J,wd),e(X,xd),v(Ue,X,null),e(u,$d),e(u,Me),v($t,Me,null),e(Me,Pd),e(Me,j),e(j,qd),e(j,Cn),e(Cn,Ed),e(j,Bd),e(j,Wn),e(Wn,Ld),e(j,Dd),e(j,On),e(On,Id),e(j,Nd),e(j,jn),e(jn,Ad),e(j,Fd),e(u,Sd),e(u,Ve),v(Pt,Ve,null),e(Ve,Cd),e(Ve,Rn),e(Rn,Wd),e(u,Od),e(u,de),v(qt,de,null),e(de,jd),e(de,Et),e(Et,Rd),e(Et,Un),e(Un,Ud),e(Et,Md),e(de,Vd),v(Ge,de,null),e(u,Gd),e(u,le),v(Bt,le,null),e(le,Hd),e(le,Lt),e(Lt,Xd),e(Lt,Mn),e(Mn,Yd),e(Lt,Jd),e(le,Kd),v(He,le,null),e(u,Qd),e(u,Y),v(Dt,Y,null),e(Y,Zd),e(Y,Vn),e(Vn,el),e(Y,tl),e(Y,It),e(It,ol),e(It,Gn),e(Gn,nl),e(It,rl),e(Y,sl),e(Y,Nt),e(Nt,al),e(Nt,Hn),e(Hn,il),e(Nt,dl),e(u,ll),e(u,ce),v(At,ce,null),e(ce,cl),e(ce,Xn),e(Xn,pl),e(ce,ml),e(ce,Ft),e(Ft,hl),e(Ft,Yn),e(Yn,ul),e(Ft,fl),e(u,_l),e(u,Xe),v(St,Xe,null),e(Xe,gl),e(Xe,Ct),e(Ct,kl),e(Ct,Jn),e(Jn,bl),e(Ct,vl),e(u,Tl),e(u,Ye),v(Wt,Ye,null),e(Ye,yl),e(Ye,Kn),e(Kn,zl),P(i,Lr,w),P(i,ve,w),e(ve,Je),e(Je,Qn),v(Ot,Qn,null),e(ve,wl),e(ve,Zn),e(Zn,xl),P(i,Dr,w),P(i,A,w),v(jt,A,null),e(A,$l),e(A,Te),e(Te,Pl),e(Te,_o),e(_o,ql),e(Te,El),e(Te,go),e(go,Bl),e(Te,Ll),e(A,Dl),e(A,B),v(Rt,B,null),e(B,Il),e(B,er),e(er,Nl),e(B,Al),e(B,tr),e(tr,Fl),e(B,Sl),e(B,Ut),e(Ut,Cl),e(Ut,ko),e(ko,Wl),e(Ut,Ol),e(B,jl),e(B,Mt),e(Mt,Rl),e(Mt,or),e(or,Ul),e(Mt,Ml),e(B,Vl),e(B,Vt),e(Vt,nr),e(nr,Gl),e(Vt,Hl),e(Vt,Gt),e(Gt,Xl),e(Gt,rr),e(rr,Yl),e(Gt,Jl),e(B,Kl),e(B,R),e(R,Ql),e(R,bo),e(bo,Zl),e(R,ec),e(R,sr),e(sr,tc),e(R,oc),e(R,ar),e(ar,nc),e(R,rc),e(R,ir),e(ir,sc),e(R,ac),e(B,ic),v(Ke,B,null),e(A,dc),e(A,C),v(Ht,C,null),e(C,lc),e(C,dr),e(dr,cc),e(C,pc),e(C,lr),e(lr,mc),e(C,hc),e(C,Xt),e(Xt,uc),e(Xt,vo),e(vo,fc),e(Xt,_c),e(C,gc),v(Qe,C,null),e(A,kc),e(A,pe),v(Yt,pe,null),e(pe,bc),e(pe,ye),e(ye,vc),e(ye,cr),e(cr,Tc),e(ye,yc),e(ye,pr),e(pr,zc),e(ye,wc),e(pe,xc),e(pe,mr),e(mr,$c),P(i,Ir,w),P(i,ze,w),e(ze,Ze),e(Ze,hr),v(Jt,hr,null),e(ze,Pc),e(ze,ur),e(ur,qc),P(i,Nr,w),P(i,we,w),v(Kt,we,null),e(we,Ec),e(we,xe),e(xe,Bc),e(xe,fr),e(fr,Lc),e(xe,Dc),e(xe,et),e(et,Ic),e(et,_r),e(_r,Nc),e(et,Ac),e(xe,Fc),P(i,Ar,w),P(i,$e,w),v(Qt,$e,null),e($e,Sc),e($e,gr),e(gr,Cc),P(i,Fr,w),P(i,Pe,w),v(Zt,Pe,null),e(Pe,Wc),e(Pe,kr),e(kr,Oc),Sr=!0},p(i,[w]){const eo={};w&2&&(eo.$$scope={dirty:w,ctx:i}),Fe.$set(eo);const br={};w&2&&(br.$$scope={dirty:w,ctx:i}),We.$set(br);const vr={};w&2&&(vr.$$scope={dirty:w,ctx:i}),Oe.$set(vr);const Tr={};w&2&&(Tr.$$scope={dirty:w,ctx:i}),je.$set(Tr);const U={};w&2&&(U.$$scope={dirty:w,ctx:i}),Ue.$set(U);const yr={};w&2&&(yr.$$scope={dirty:w,ctx:i}),Ge.$set(yr);const zr={};w&2&&(zr.$$scope={dirty:w,ctx:i}),He.$set(zr);const wr={};w&2&&(wr.$$scope={dirty:w,ctx:i}),Ke.$set(wr);const xr={};w&2&&(xr.$$scope={dirty:w,ctx:i}),Qe.$set(xr)},i(i){Sr||(T(c.$$.fragment,i),T(st.$$.fragment,i),T(at.$$.fragment,i),T(it.$$.fragment,i),T(dt.$$.fragment,i),T(lt.$$.fragment,i),T(ct.$$.fragment,i),T(Fe.$$.fragment,i),T(pt.$$.fragment,i),T(mt.$$.fragment,i),T(ht.$$.fragment,i),T(ft.$$.fragment,i),T(_t.$$.fragment,i),T(kt.$$.fragment,i),T(vt.$$.fragment,i),T(We.$$.fragment,i),T(Tt.$$.fragment,i),T(Oe.$$.fragment,i),T(je.$$.fragment,i),T(zt.$$.fragment,i),T(wt.$$.fragment,i),T(xt.$$.fragment,i),T(Ue.$$.fragment,i),T($t.$$.fragment,i),T(Pt.$$.fragment,i),T(qt.$$.fragment,i),T(Ge.$$.fragment,i),T(Bt.$$.fragment,i),T(He.$$.fragment,i),T(Dt.$$.fragment,i),T(At.$$.fragment,i),T(St.$$.fragment,i),T(Wt.$$.fragment,i),T(Ot.$$.fragment,i),T(jt.$$.fragment,i),T(Rt.$$.fragment,i),T(Ke.$$.fragment,i),T(Ht.$$.fragment,i),T(Qe.$$.fragment,i),T(Yt.$$.fragment,i),T(Jt.$$.fragment,i),T(Kt.$$.fragment,i),T(Qt.$$.fragment,i),T(Zt.$$.fragment,i),Sr=!0)},o(i){y(c.$$.fragment,i),y(st.$$.fragment,i),y(at.$$.fragment,i),y(it.$$.fragment,i),y(dt.$$.fragment,i),y(lt.$$.fragment,i),y(ct.$$.fragment,i),y(Fe.$$.fragment,i),y(pt.$$.fragment,i),y(mt.$$.fragment,i),y(ht.$$.fragment,i),y(ft.$$.fragment,i),y(_t.$$.fragment,i),y(kt.$$.fragment,i),y(vt.$$.fragment,i),y(We.$$.fragment,i),y(Tt.$$.fragment,i),y(Oe.$$.fragment,i),y(je.$$.fragment,i),y(zt.$$.fragment,i),y(wt.$$.fragment,i),y(xt.$$.fragment,i),y(Ue.$$.fragment,i),y($t.$$.fragment,i),y(Pt.$$.fragment,i),y(qt.$$.fragment,i),y(Ge.$$.fragment,i),y(Bt.$$.fragment,i),y(He.$$.fragment,i),y(Dt.$$.fragment,i),y(At.$$.fragment,i),y(St.$$.fragment,i),y(Wt.$$.fragment,i),y(Ot.$$.fragment,i),y(jt.$$.fragment,i),y(Rt.$$.fragment,i),y(Ke.$$.fragment,i),y(Ht.$$.fragment,i),y(Qe.$$.fragment,i),y(Yt.$$.fragment,i),y(Jt.$$.fragment,i),y(Kt.$$.fragment,i),y(Qt.$$.fragment,i),y(Zt.$$.fragment,i),Sr=!1},d(i){t(p),i&&t($),i&&t(f),z(c),i&&t(O),i&&t(D),i&&t(qr),i&&t(lo),i&&t(Er),i&&t(ge),z(st),i&&t(Br),i&&t(u),z(at),z(it),z(dt),z(lt),z(ct),z(Fe),z(pt),z(mt),z(ht),z(ft),z(_t),z(kt),z(vt),z(We),z(Tt),z(Oe),z(je),z(zt),z(wt),z(xt),z(Ue),z($t),z(Pt),z(qt),z(Ge),z(Bt),z(He),z(Dt),z(At),z(St),z(Wt),i&&t(Lr),i&&t(ve),z(Ot),i&&t(Dr),i&&t(A),z(jt),z(Rt),z(Ke),z(Ht),z(Qe),z(Yt),i&&t(Ir),i&&t(ze),z(Jt),i&&t(Nr),i&&t(we),z(Kt),i&&t(Ar),i&&t($e),z(Qt),i&&t(Fr),i&&t(Pe),z(Zt)}}}const Qm={local:"utilities-for-tokenizers",sections:[{local:"transformers.PreTrainedTokenizerBase",title:"PreTrainedTokenizerBase"},{local:"transformers.SpecialTokensMixin",title:"SpecialTokensMixin"},{local:"transformers.tokenization_utils_base.TruncationStrategy",title:"Enums and namedtuples"}],title:"Utilities for Tokenizers"};function Zm(E){return jm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ah extends Sm{constructor(p){super();Cm(this,p,Zm,Km,Wm,{})}}export{ah as default,Qm as metadata};
