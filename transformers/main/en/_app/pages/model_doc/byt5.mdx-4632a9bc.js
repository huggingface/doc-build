import{S as nt,i as tt,s as at,e as t,k as p,w as f,t as r,M as ot,c as a,d as n,m as c,a as o,x as g,h as l,b as h,F as e,g as d,y as _,L as rt,q as b,o as k,B as y,v as lt}from"../../chunks/vendor-6b77c823.js";import{D as Cs}from"../../chunks/Docstring-90e3aa51.js";import{C as jn}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as me}from"../../chunks/IconCopyLink-7a11ce68.js";function it(vn){let T,Ds,x,B,_s,I,ue,bs,fe,Ss,q,E,ks,M,ge,ys,_e,Fs,L,be,O,ke,ye,Ns,ts,je,Is,as,js,ve,Ms,j,we,R,Te,xe,G,qe,$e,Os,A,ze,os,Be,Ee,Rs,rs,Le,Gs,$,P,vs,U,Ae,ws,Pe,Us,ls,Ce,Hs,H,Ws,is,De,Vs,W,Xs,v,Se,ps,Fe,Ne,Ts,Ie,Me,Ks,V,Js,z,C,xs,X,Oe,qs,Re,Qs,m,K,Ge,$s,Ue,He,J,We,cs,Ve,Xe,Ke,w,Q,Je,zs,Qe,Ye,Y,hs,Ze,Bs,sn,en,ds,nn,Es,tn,an,D,Z,on,Ls,rn,ln,S,ss,pn,As,cn,hn,F,es,dn,ns,mn,Ps,un,fn,Ys,N,gn,ms,_n,bn,Zs;return I=new me({}),M=new me({}),U=new me({}),H=new jn({props:{code:`from transformers import T5ForConditionalGeneration
import torch

model = T5ForConditionalGeneration.from_pretrained("google/byt5-small")

num_special_tokens = 3
# Model has 3 special tokens which take up the input ids 0,1,2 of ByT5.
# => Need to shift utf-8 character encodings by 3 before passing ids to model.

input_ids = torch.tensor([list("Life is like a box of chocolates.".encode("utf-8"))]) + num_special_tokens

labels = torch.tensor([list("La vie est comme une bo\xEEte de chocolat.".encode("utf-8"))]) + num_special_tokens

loss = model(input_ids, labels=labels).loss
loss.item()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/byt5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_special_tokens = <span class="hljs-number">3</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Model has 3 special tokens which take up the input ids 0,1,2 of ByT5.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># =&gt; Need to shift utf-8 character encodings by 3 before passing ids to model.</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([<span class="hljs-built_in">list</span>(<span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>.encode(<span class="hljs-string">&quot;utf-8&quot;</span>))]) + num_special_tokens

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-built_in">list</span>(<span class="hljs-string">&quot;La vie est comme une bo\xEEte de chocolat.&quot;</span>.encode(<span class="hljs-string">&quot;utf-8&quot;</span>))]) + num_special_tokens

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">2.66</span>`}}),W=new jn({props:{code:`from transformers import T5ForConditionalGeneration, AutoTokenizer

model = T5ForConditionalGeneration.from_pretrained("google/byt5-small")
tokenizer = AutoTokenizer.from_pretrained("google/byt5-small")

model_inputs = tokenizer(
    ["Life is like a box of chocolates.", "Today is Monday."], padding="longest", return_tensors="pt"
)
labels_dict = tokenizer(
    ["La vie est comme une bo\xEEte de chocolat.", "Aujourd'hui c'est lundi."], padding="longest", return_tensors="pt"
)
labels = labels_dict.input_ids

loss = model(**model_inputs, labels=labels).loss
loss.item()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/byt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/byt5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(
<span class="hljs-meta">... </span>    [<span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>, <span class="hljs-string">&quot;Today is Monday.&quot;</span>], padding=<span class="hljs-string">&quot;longest&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels_dict = tokenizer(
<span class="hljs-meta">... </span>    [<span class="hljs-string">&quot;La vie est comme une bo\xEEte de chocolat.&quot;</span>, <span class="hljs-string">&quot;Aujourd&#x27;hui c&#x27;est lundi.&quot;</span>], padding=<span class="hljs-string">&quot;longest&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = labels_dict.input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**model_inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">17.9</span>`}}),V=new jn({props:{code:`from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch

tokenizer = AutoTokenizer.from_pretrained("google/byt5-base")
model = AutoModelForSeq2SeqLM.from_pretrained("google/byt5-base")

input_ids_prompt = "The dog chases a ball in the park."
input_ids = tokenizer(input_ids_prompt).input_ids

# Note that we cannot add "{extra_id_...}" to the string directly
# as the Byte tokenizer would incorrectly merge the tokens
# For ByT5, we need to work directly on the character level
# Contrary to T5, ByT5 does not use sentinel tokens for masking, but instead
# uses final utf character ids.
# UTF-8 is represented by 8 bits and ByT5 has 3 special tokens.
# => There are 2**8+2 = 259 input ids and mask tokens count down from index 258.
# => mask to "The dog [258]a ball [257]park."

input_ids = torch.tensor([input_ids[:8] + [258] + input_ids[14:21] + [257] + input_ids[28:]])
input_ids

# ByT5 produces only one char at a time so we need to produce many more output characters here -> set \`max_length=100\`.
output_ids = model.generate(input_ids, max_length=100)[0].tolist()
output_ids

# ^- Note how 258 descends to 257, 256, 255

# Now we need to split on the sentinel tokens, let's write a short loop for this
output_ids_list = []
start_token = 0
sentinel_token = 258
while sentinel_token in output_ids:
    split_idx = output_ids.index(sentinel_token)
    output_ids_list.append(output_ids[start_token:split_idx])
    start_token = split_idx
    sentinel_token -= 1

output_ids_list.append(output_ids[start_token:])
output_string = tokenizer.batch_decode(output_ids_list)
output_string`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSeq2SeqLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/byt5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;google/byt5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids_prompt = <span class="hljs-string">&quot;The dog chases a ball in the park.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_ids_prompt).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that we cannot add &quot;{extra_id_...}&quot; to the string directly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># as the Byte tokenizer would incorrectly merge the tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For ByT5, we need to work directly on the character level</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Contrary to T5, ByT5 does not use sentinel tokens for masking, but instead</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># uses final utf character ids.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># UTF-8 is represented by 8 bits and ByT5 has 3 special tokens.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># =&gt; There are 2**8+2 = 259 input ids and mask tokens count down from index 258.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># =&gt; mask to &quot;The dog [258]a ball [257]park.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([input_ids[:<span class="hljs-number">8</span>] + [<span class="hljs-number">258</span>] + input_ids[<span class="hljs-number">14</span>:<span class="hljs-number">21</span>] + [<span class="hljs-number">257</span>] + input_ids[<span class="hljs-number">28</span>:]])
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids
tensor([[ <span class="hljs-number">87</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">103</span>, <span class="hljs-number">114</span>, <span class="hljs-number">106</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">258</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">100</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">101</span>, <span class="hljs-number">100</span>, <span class="hljs-number">111</span>, <span class="hljs-number">111</span>, <span class="hljs-number">257</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">115</span>, <span class="hljs-number">100</span>, <span class="hljs-number">117</span>, <span class="hljs-number">110</span>,  <span class="hljs-number">49</span>,   <span class="hljs-number">1</span>]])

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># ByT5 produces only one char at a time so we need to produce many more output characters here -&gt; set \`max_length=100\`.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output_ids = model.generate(input_ids, max_length=<span class="hljs-number">100</span>)[<span class="hljs-number">0</span>].tolist()
<span class="hljs-meta">&gt;&gt;&gt; </span>output_ids
[<span class="hljs-number">0</span>, <span class="hljs-number">258</span>, <span class="hljs-number">108</span>, <span class="hljs-number">118</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">119</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">114</span>, <span class="hljs-number">113</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">122</span>, <span class="hljs-number">107</span>, <span class="hljs-number">114</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">103</span>, <span class="hljs-number">114</span>, <span class="hljs-number">104</span>, <span class="hljs-number">118</span>, <span class="hljs-number">257</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">108</span>, <span class="hljs-number">113</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">119</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">103</span>, <span class="hljs-number">108</span>, <span class="hljs-number">118</span>, <span class="hljs-number">102</span>, <span class="hljs-number">114</span>, <span class="hljs-number">256</span>, <span class="hljs-number">108</span>, <span class="hljs-number">113</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">119</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>, <span class="hljs-number">35</span>, <span class="hljs-number">115</span>, <span class="hljs-number">100</span>, <span class="hljs-number">117</span>, <span class="hljs-number">110</span>,  <span class="hljs-number">49</span>,  <span class="hljs-number">35</span>,  <span class="hljs-number">87</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">103</span>, <span class="hljs-number">114</span>, <span class="hljs-number">106</span>, <span class="hljs-number">35</span>, <span class="hljs-number">108</span>, <span class="hljs-number">118</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">119</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">114</span>, <span class="hljs-number">113</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">122</span>, <span class="hljs-number">107</span>, <span class="hljs-number">114</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">103</span>, <span class="hljs-number">114</span>, <span class="hljs-number">104</span>, <span class="hljs-number">118</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">100</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">101</span>, <span class="hljs-number">100</span>, <span class="hljs-number">111</span>, <span class="hljs-number">111</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">108</span>, <span class="hljs-number">113</span>, <span class="hljs-number">255</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">108</span>, <span class="hljs-number">113</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">119</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">115</span>, <span class="hljs-number">100</span>, <span class="hljs-number">117</span>, <span class="hljs-number">110</span>,  <span class="hljs-number">49</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># ^- Note how 258 descends to 257, 256, 255</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Now we need to split on the sentinel tokens, let&#x27;s write a short loop for this</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output_ids_list = []
<span class="hljs-meta">&gt;&gt;&gt; </span>start_token = <span class="hljs-number">0</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sentinel_token = <span class="hljs-number">258</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">while</span> sentinel_token <span class="hljs-keyword">in</span> output_ids:
<span class="hljs-meta">... </span>    split_idx = output_ids.index(sentinel_token)
<span class="hljs-meta">... </span>    output_ids_list.append(output_ids[start_token:split_idx])
<span class="hljs-meta">... </span>    start_token = split_idx
<span class="hljs-meta">... </span>    sentinel_token -= <span class="hljs-number">1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>output_ids_list.append(output_ids[start_token:])
<span class="hljs-meta">&gt;&gt;&gt; </span>output_string = tokenizer.batch_decode(output_ids_list)
<span class="hljs-meta">&gt;&gt;&gt; </span>output_string
[<span class="hljs-string">&#x27;&lt;pad&gt;&#x27;</span>, <span class="hljs-string">&#x27;is the one who does&#x27;</span>, <span class="hljs-string">&#x27; in the disco&#x27;</span>, <span class="hljs-string">&#x27;in the park. The dog is the one who does a ball in&#x27;</span>, <span class="hljs-string">&#x27; in the park.&#x27;</span>]`}}),X=new me({}),K=new Cs({props:{name:"class transformers.ByT5Tokenizer",anchor:"transformers.ByT5Tokenizer",parameters:[{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 125"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ByT5Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.ByT5Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.ByT5Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.ByT5Tokenizer.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the end of the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. Extra tokens are
indexed from the end of the vocabulary up to beginning (&#x201C;<extra_id_0>&#x201D; is the last token in the vocabulary
like in ByT5 preprocessing see
<a href="https://github.com/google-research/text-to-text-transfer-transformer/blob/9fd7b14a769417be33bc6c850f9598764913c833/t5/data/preprocessors.py#L2117" rel="nofollow">here</a>).</extra_id_0></extra<em>`,name:"extra_ids"},{anchor:"transformers.ByT5Tokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/byt5/tokenization_byt5.py#L28"}}),Q=new Cs({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/byt5/tokenization_byt5.py#L177",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Z=new Cs({props:{name:"convert_tokens_to_string",anchor:"transformers.ByT5Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/byt5/tokenization_byt5.py#L228"}}),ss=new Cs({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/byt5/tokenization_byt5.py#L155",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),es=new Cs({props:{name:"get_special_tokens_mask",anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/byt5/tokenization_byt5.py#L117",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){T=t("meta"),Ds=p(),x=t("h1"),B=t("a"),_s=t("span"),f(I.$$.fragment),ue=p(),bs=t("span"),fe=r("ByT5"),Ss=p(),q=t("h2"),E=t("a"),ks=t("span"),f(M.$$.fragment),ge=p(),ys=t("span"),_e=r("Overview"),Fs=p(),L=t("p"),be=r("The ByT5 model was presented in "),O=t("a"),ke=r("ByT5: Towards a token-free future with pre-trained byte-to-byte models"),ye=r(` by Linting Xue, Aditya Barua, Noah Constant, Rami Al-Rfou, Sharan Narang, Mihir
Kale, Adam Roberts, Colin Raffel.`),Ns=p(),ts=t("p"),je=r("The abstract from the paper is the following:"),Is=p(),as=t("p"),js=t("em"),ve=r(`Most widely-used pre-trained language models operate on sequences of tokens corresponding to word or subword units.
Encoding text as a sequence of tokens requires a tokenizer, which is typically created as an independent artifact from
the model. Token-free models that instead operate directly on raw text (bytes or characters) have many benefits: they
can process text in any language out of the box, they are more robust to noise, and they minimize technical debt by
removing complex and error-prone text preprocessing pipelines. Since byte or character sequences are longer than token
sequences, past work on token-free models has often introduced new model architectures designed to amortize the cost of
operating directly on raw text. In this paper, we show that a standard Transformer architecture can be used with
minimal modifications to process byte sequences. We carefully characterize the trade-offs in terms of parameter count,
training FLOPs, and inference speed, and show that byte-level models are competitive with their token-level
counterparts. We also demonstrate that byte-level models are significantly more robust to noise and perform better on
tasks that are sensitive to spelling and pronunciation. As part of our contribution, we release a new set of
pre-trained byte-level Transformer models based on the T5 architecture, as well as all code and data used in our
experiments.`),Ms=p(),j=t("p"),we=r("This model was contributed by "),R=t("a"),Te=r("patrickvonplaten"),xe=r(`. The original code can be
found `),G=t("a"),qe=r("here"),$e=r("."),Os=p(),A=t("p"),ze=r("ByT5\u2019s architecture is based on the T5v1.1 model, so one can refer to "),os=t("a"),Be=r("T5v1.1\u2019s documentation page"),Ee=r(`. They
only differ in how inputs should be prepared for the model, see the code examples below.`),Rs=p(),rs=t("p"),Le=r(`Since ByT5 was pre-trained unsupervisedly, there\u2019s no real advantage to using a task prefix during single-task
fine-tuning. If you are doing multi-task fine-tuning, you should use a prefix.`),Gs=p(),$=t("h3"),P=t("a"),vs=t("span"),f(U.$$.fragment),Ae=p(),ws=t("span"),Pe=r("Example"),Us=p(),ls=t("p"),Ce=r("ByT5 works on raw UTF-8 bytes, so it can be used without a tokenizer:"),Hs=p(),f(H.$$.fragment),Ws=p(),is=t("p"),De=r("For batched inference and training it is however recommended to make use of the tokenizer:"),Vs=p(),f(W.$$.fragment),Xs=p(),v=t("p"),Se=r("Similar to "),ps=t("a"),Fe=r("T5"),Ne=r(`, ByT5 was trained on the span-mask denoising task. However,
since the model works directly on characters, the pretraining task is a bit
different. Let\u2019s corrupt some characters of the
input sentence `),Ts=t("code"),Ie=r('"The dog chases a ball in the park."'),Me=r(` and ask ByT5 to predict them
for us.`),Ks=p(),f(V.$$.fragment),Js=p(),z=t("h2"),C=t("a"),xs=t("span"),f(X.$$.fragment),Oe=p(),qs=t("span"),Re=r("ByT5Tokenizer"),Qs=p(),m=t("div"),f(K.$$.fragment),Ge=p(),$s=t("p"),Ue=r("Construct a ByT5 tokenizer. ByT5 simply uses raw bytes utf-8 encoding."),He=p(),J=t("p"),We=r("This tokenizer inherits from "),cs=t("a"),Ve=r("PreTrainedTokenizer"),Xe=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ke=p(),w=t("div"),f(Q.$$.fragment),Je=p(),zs=t("p"),Qe=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Ye=p(),Y=t("ul"),hs=t("li"),Ze=r("single sequence: "),Bs=t("code"),sn=r("X </s>"),en=p(),ds=t("li"),nn=r("pair of sequences: "),Es=t("code"),tn=r("A </s> B </s>"),an=p(),D=t("div"),f(Z.$$.fragment),on=p(),Ls=t("p"),rn=r("Converts a sequence of tokens (string) in a single string."),ln=p(),S=t("div"),f(ss.$$.fragment),pn=p(),As=t("p"),cn=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. ByT5 does not
make use of token type ids, therefore a list of zeros is returned.`),hn=p(),F=t("div"),f(es.$$.fragment),dn=p(),ns=t("p"),mn=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ps=t("code"),un=r("prepare_for_model"),fn=r(" method."),Ys=p(),N=t("p"),gn=r("See "),ms=t("a"),_n=r("ByT5Tokenizer"),bn=r(" for all details."),this.h()},l(s){const i=ot('[data-svelte="svelte-1phssyn"]',document.head);T=a(i,"META",{name:!0,content:!0}),i.forEach(n),Ds=c(s),x=a(s,"H1",{class:!0});var se=o(x);B=a(se,"A",{id:!0,class:!0,href:!0});var wn=o(B);_s=a(wn,"SPAN",{});var Tn=o(_s);g(I.$$.fragment,Tn),Tn.forEach(n),wn.forEach(n),ue=c(se),bs=a(se,"SPAN",{});var xn=o(bs);fe=l(xn,"ByT5"),xn.forEach(n),se.forEach(n),Ss=c(s),q=a(s,"H2",{class:!0});var ee=o(q);E=a(ee,"A",{id:!0,class:!0,href:!0});var qn=o(E);ks=a(qn,"SPAN",{});var $n=o(ks);g(M.$$.fragment,$n),$n.forEach(n),qn.forEach(n),ge=c(ee),ys=a(ee,"SPAN",{});var zn=o(ys);_e=l(zn,"Overview"),zn.forEach(n),ee.forEach(n),Fs=c(s),L=a(s,"P",{});var ne=o(L);be=l(ne,"The ByT5 model was presented in "),O=a(ne,"A",{href:!0,rel:!0});var Bn=o(O);ke=l(Bn,"ByT5: Towards a token-free future with pre-trained byte-to-byte models"),Bn.forEach(n),ye=l(ne,` by Linting Xue, Aditya Barua, Noah Constant, Rami Al-Rfou, Sharan Narang, Mihir
Kale, Adam Roberts, Colin Raffel.`),ne.forEach(n),Ns=c(s),ts=a(s,"P",{});var En=o(ts);je=l(En,"The abstract from the paper is the following:"),En.forEach(n),Is=c(s),as=a(s,"P",{});var Ln=o(as);js=a(Ln,"EM",{});var An=o(js);ve=l(An,`Most widely-used pre-trained language models operate on sequences of tokens corresponding to word or subword units.
Encoding text as a sequence of tokens requires a tokenizer, which is typically created as an independent artifact from
the model. Token-free models that instead operate directly on raw text (bytes or characters) have many benefits: they
can process text in any language out of the box, they are more robust to noise, and they minimize technical debt by
removing complex and error-prone text preprocessing pipelines. Since byte or character sequences are longer than token
sequences, past work on token-free models has often introduced new model architectures designed to amortize the cost of
operating directly on raw text. In this paper, we show that a standard Transformer architecture can be used with
minimal modifications to process byte sequences. We carefully characterize the trade-offs in terms of parameter count,
training FLOPs, and inference speed, and show that byte-level models are competitive with their token-level
counterparts. We also demonstrate that byte-level models are significantly more robust to noise and perform better on
tasks that are sensitive to spelling and pronunciation. As part of our contribution, we release a new set of
pre-trained byte-level Transformer models based on the T5 architecture, as well as all code and data used in our
experiments.`),An.forEach(n),Ln.forEach(n),Ms=c(s),j=a(s,"P",{});var us=o(j);we=l(us,"This model was contributed by "),R=a(us,"A",{href:!0,rel:!0});var Pn=o(R);Te=l(Pn,"patrickvonplaten"),Pn.forEach(n),xe=l(us,`. The original code can be
found `),G=a(us,"A",{href:!0,rel:!0});var Cn=o(G);qe=l(Cn,"here"),Cn.forEach(n),$e=l(us,"."),us.forEach(n),Os=c(s),A=a(s,"P",{});var te=o(A);ze=l(te,"ByT5\u2019s architecture is based on the T5v1.1 model, so one can refer to "),os=a(te,"A",{href:!0});var Dn=o(os);Be=l(Dn,"T5v1.1\u2019s documentation page"),Dn.forEach(n),Ee=l(te,`. They
only differ in how inputs should be prepared for the model, see the code examples below.`),te.forEach(n),Rs=c(s),rs=a(s,"P",{});var Sn=o(rs);Le=l(Sn,`Since ByT5 was pre-trained unsupervisedly, there\u2019s no real advantage to using a task prefix during single-task
fine-tuning. If you are doing multi-task fine-tuning, you should use a prefix.`),Sn.forEach(n),Gs=c(s),$=a(s,"H3",{class:!0});var ae=o($);P=a(ae,"A",{id:!0,class:!0,href:!0});var Fn=o(P);vs=a(Fn,"SPAN",{});var Nn=o(vs);g(U.$$.fragment,Nn),Nn.forEach(n),Fn.forEach(n),Ae=c(ae),ws=a(ae,"SPAN",{});var In=o(ws);Pe=l(In,"Example"),In.forEach(n),ae.forEach(n),Us=c(s),ls=a(s,"P",{});var Mn=o(ls);Ce=l(Mn,"ByT5 works on raw UTF-8 bytes, so it can be used without a tokenizer:"),Mn.forEach(n),Hs=c(s),g(H.$$.fragment,s),Ws=c(s),is=a(s,"P",{});var On=o(is);De=l(On,"For batched inference and training it is however recommended to make use of the tokenizer:"),On.forEach(n),Vs=c(s),g(W.$$.fragment,s),Xs=c(s),v=a(s,"P",{});var fs=o(v);Se=l(fs,"Similar to "),ps=a(fs,"A",{href:!0});var Rn=o(ps);Fe=l(Rn,"T5"),Rn.forEach(n),Ne=l(fs,`, ByT5 was trained on the span-mask denoising task. However,
since the model works directly on characters, the pretraining task is a bit
different. Let\u2019s corrupt some characters of the
input sentence `),Ts=a(fs,"CODE",{});var Gn=o(Ts);Ie=l(Gn,'"The dog chases a ball in the park."'),Gn.forEach(n),Me=l(fs,` and ask ByT5 to predict them
for us.`),fs.forEach(n),Ks=c(s),g(V.$$.fragment,s),Js=c(s),z=a(s,"H2",{class:!0});var oe=o(z);C=a(oe,"A",{id:!0,class:!0,href:!0});var Un=o(C);xs=a(Un,"SPAN",{});var Hn=o(xs);g(X.$$.fragment,Hn),Hn.forEach(n),Un.forEach(n),Oe=c(oe),qs=a(oe,"SPAN",{});var Wn=o(qs);Re=l(Wn,"ByT5Tokenizer"),Wn.forEach(n),oe.forEach(n),Qs=c(s),m=a(s,"DIV",{class:!0});var u=o(m);g(K.$$.fragment,u),Ge=c(u),$s=a(u,"P",{});var Vn=o($s);Ue=l(Vn,"Construct a ByT5 tokenizer. ByT5 simply uses raw bytes utf-8 encoding."),Vn.forEach(n),He=c(u),J=a(u,"P",{});var re=o(J);We=l(re,"This tokenizer inherits from "),cs=a(re,"A",{href:!0});var Xn=o(cs);Ve=l(Xn,"PreTrainedTokenizer"),Xn.forEach(n),Xe=l(re,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),re.forEach(n),Ke=c(u),w=a(u,"DIV",{class:!0});var gs=o(w);g(Q.$$.fragment,gs),Je=c(gs),zs=a(gs,"P",{});var Kn=o(zs);Qe=l(Kn,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Kn.forEach(n),Ye=c(gs),Y=a(gs,"UL",{});var le=o(Y);hs=a(le,"LI",{});var kn=o(hs);Ze=l(kn,"single sequence: "),Bs=a(kn,"CODE",{});var Jn=o(Bs);sn=l(Jn,"X </s>"),Jn.forEach(n),kn.forEach(n),en=c(le),ds=a(le,"LI",{});var yn=o(ds);nn=l(yn,"pair of sequences: "),Es=a(yn,"CODE",{});var Qn=o(Es);tn=l(Qn,"A </s> B </s>"),Qn.forEach(n),yn.forEach(n),le.forEach(n),gs.forEach(n),an=c(u),D=a(u,"DIV",{class:!0});var ie=o(D);g(Z.$$.fragment,ie),on=c(ie),Ls=a(ie,"P",{});var Yn=o(Ls);rn=l(Yn,"Converts a sequence of tokens (string) in a single string."),Yn.forEach(n),ie.forEach(n),ln=c(u),S=a(u,"DIV",{class:!0});var pe=o(S);g(ss.$$.fragment,pe),pn=c(pe),As=a(pe,"P",{});var Zn=o(As);cn=l(Zn,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. ByT5 does not
make use of token type ids, therefore a list of zeros is returned.`),Zn.forEach(n),pe.forEach(n),hn=c(u),F=a(u,"DIV",{class:!0});var ce=o(F);g(es.$$.fragment,ce),dn=c(ce),ns=a(ce,"P",{});var he=o(ns);mn=l(he,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ps=a(he,"CODE",{});var st=o(Ps);un=l(st,"prepare_for_model"),st.forEach(n),fn=l(he," method."),he.forEach(n),ce.forEach(n),u.forEach(n),Ys=c(s),N=a(s,"P",{});var de=o(N);gn=l(de,"See "),ms=a(de,"A",{href:!0});var et=o(ms);_n=l(et,"ByT5Tokenizer"),et.forEach(n),bn=l(de," for all details."),de.forEach(n),this.h()},h(){h(T,"name","hf:doc:metadata"),h(T,"content",JSON.stringify(pt)),h(B,"id","byt5"),h(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(B,"href","#byt5"),h(x,"class","relative group"),h(E,"id","overview"),h(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(E,"href","#overview"),h(q,"class","relative group"),h(O,"href","https://arxiv.org/abs/2105.13626"),h(O,"rel","nofollow"),h(R,"href","https://huggingface.co/patrickvonplaten"),h(R,"rel","nofollow"),h(G,"href","https://github.com/google-research/byt5"),h(G,"rel","nofollow"),h(os,"href","t5v1.1"),h(P,"id","example"),h(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(P,"href","#example"),h($,"class","relative group"),h(ps,"href","t5"),h(C,"id","transformers.ByT5Tokenizer"),h(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(C,"href","#transformers.ByT5Tokenizer"),h(z,"class","relative group"),h(cs,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(w,"class","docstring"),h(D,"class","docstring"),h(S,"class","docstring"),h(F,"class","docstring"),h(m,"class","docstring"),h(ms,"href","/docs/transformers/main/en/model_doc/byt5#transformers.ByT5Tokenizer")},m(s,i){e(document.head,T),d(s,Ds,i),d(s,x,i),e(x,B),e(B,_s),_(I,_s,null),e(x,ue),e(x,bs),e(bs,fe),d(s,Ss,i),d(s,q,i),e(q,E),e(E,ks),_(M,ks,null),e(q,ge),e(q,ys),e(ys,_e),d(s,Fs,i),d(s,L,i),e(L,be),e(L,O),e(O,ke),e(L,ye),d(s,Ns,i),d(s,ts,i),e(ts,je),d(s,Is,i),d(s,as,i),e(as,js),e(js,ve),d(s,Ms,i),d(s,j,i),e(j,we),e(j,R),e(R,Te),e(j,xe),e(j,G),e(G,qe),e(j,$e),d(s,Os,i),d(s,A,i),e(A,ze),e(A,os),e(os,Be),e(A,Ee),d(s,Rs,i),d(s,rs,i),e(rs,Le),d(s,Gs,i),d(s,$,i),e($,P),e(P,vs),_(U,vs,null),e($,Ae),e($,ws),e(ws,Pe),d(s,Us,i),d(s,ls,i),e(ls,Ce),d(s,Hs,i),_(H,s,i),d(s,Ws,i),d(s,is,i),e(is,De),d(s,Vs,i),_(W,s,i),d(s,Xs,i),d(s,v,i),e(v,Se),e(v,ps),e(ps,Fe),e(v,Ne),e(v,Ts),e(Ts,Ie),e(v,Me),d(s,Ks,i),_(V,s,i),d(s,Js,i),d(s,z,i),e(z,C),e(C,xs),_(X,xs,null),e(z,Oe),e(z,qs),e(qs,Re),d(s,Qs,i),d(s,m,i),_(K,m,null),e(m,Ge),e(m,$s),e($s,Ue),e(m,He),e(m,J),e(J,We),e(J,cs),e(cs,Ve),e(J,Xe),e(m,Ke),e(m,w),_(Q,w,null),e(w,Je),e(w,zs),e(zs,Qe),e(w,Ye),e(w,Y),e(Y,hs),e(hs,Ze),e(hs,Bs),e(Bs,sn),e(Y,en),e(Y,ds),e(ds,nn),e(ds,Es),e(Es,tn),e(m,an),e(m,D),_(Z,D,null),e(D,on),e(D,Ls),e(Ls,rn),e(m,ln),e(m,S),_(ss,S,null),e(S,pn),e(S,As),e(As,cn),e(m,hn),e(m,F),_(es,F,null),e(F,dn),e(F,ns),e(ns,mn),e(ns,Ps),e(Ps,un),e(ns,fn),d(s,Ys,i),d(s,N,i),e(N,gn),e(N,ms),e(ms,_n),e(N,bn),Zs=!0},p:rt,i(s){Zs||(b(I.$$.fragment,s),b(M.$$.fragment,s),b(U.$$.fragment,s),b(H.$$.fragment,s),b(W.$$.fragment,s),b(V.$$.fragment,s),b(X.$$.fragment,s),b(K.$$.fragment,s),b(Q.$$.fragment,s),b(Z.$$.fragment,s),b(ss.$$.fragment,s),b(es.$$.fragment,s),Zs=!0)},o(s){k(I.$$.fragment,s),k(M.$$.fragment,s),k(U.$$.fragment,s),k(H.$$.fragment,s),k(W.$$.fragment,s),k(V.$$.fragment,s),k(X.$$.fragment,s),k(K.$$.fragment,s),k(Q.$$.fragment,s),k(Z.$$.fragment,s),k(ss.$$.fragment,s),k(es.$$.fragment,s),Zs=!1},d(s){n(T),s&&n(Ds),s&&n(x),y(I),s&&n(Ss),s&&n(q),y(M),s&&n(Fs),s&&n(L),s&&n(Ns),s&&n(ts),s&&n(Is),s&&n(as),s&&n(Ms),s&&n(j),s&&n(Os),s&&n(A),s&&n(Rs),s&&n(rs),s&&n(Gs),s&&n($),y(U),s&&n(Us),s&&n(ls),s&&n(Hs),y(H,s),s&&n(Ws),s&&n(is),s&&n(Vs),y(W,s),s&&n(Xs),s&&n(v),s&&n(Ks),y(V,s),s&&n(Js),s&&n(z),y(X),s&&n(Qs),s&&n(m),y(K),y(Q),y(Z),y(ss),y(es),s&&n(Ys),s&&n(N)}}}const pt={local:"byt5",sections:[{local:"overview",sections:[{local:"example",title:"Example"}],title:"Overview"},{local:"transformers.ByT5Tokenizer",title:"ByT5Tokenizer"}],title:"ByT5"};function ct(vn){return lt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ft extends nt{constructor(T){super();tt(this,T,ct,it,at,{})}}export{ft as default,pt as metadata};
