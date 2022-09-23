import{S as Tb,i as bb,s as yb,e as a,k as h,w as v,t as n,M as vb,c as r,d as t,m,a as i,x as k,h as s,b as f,G as e,g,y as w,q as $,o as P,B as M,v as kb,L as pe}from"../../chunks/vendor-hf-doc-builder.js";import{T as et}from"../../chunks/Tip-hf-doc-builder.js";import{D as S}from"../../chunks/Docstring-hf-doc-builder.js";import{C as he}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ve}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ce}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function wb(G){let d,_,p,u,T;return u=new he({props:{code:`from transformers import GPT2Model, GPT2Config

# Initializing a GPT2 configuration
configuration = GPT2Config()

# Initializing a model from the configuration
model = GPT2Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Model, GPT2Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPT2 configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GPT2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),_=n("Example:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function $b(G){let d,_,p,u,T;return u=new he({props:{code:`from transformers import GPT2Tokenizer
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=a("p"),_=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function Pb(G){let d,_,p,u,T;return{c(){d=a("p"),_=n("When used with "),p=a("code"),u=n("is_split_into_words=True"),T=n(", this tokenizer will add a space before each word (even the first one).")},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"When used with "),p=r(c,"CODE",{});var j=i(p);u=s(j,"is_split_into_words=True"),j.forEach(t),T=s(c,", this tokenizer will add a space before each word (even the first one)."),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,u),e(d,T)},d(l){l&&t(d)}}}function Mb(G){let d,_,p,u,T;return u=new he({props:{code:`from transformers import GPT2TokenizerFast
tokenizer = GPT2TokenizerFast.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2TokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPT2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=a("p"),_=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function Gb(G){let d,_,p,u,T,l,c,j;return{c(){d=a("p"),_=n("When used with "),p=a("code"),u=n("is_split_into_words=True"),T=n(", this tokenizer needs to be instantiated with "),l=a("code"),c=n("add_prefix_space=True"),j=n(".")},l(se){d=r(se,"P",{});var K=i(d);_=s(K,"When used with "),p=r(K,"CODE",{});var N=i(p);u=s(N,"is_split_into_words=True"),N.forEach(t),T=s(K,", this tokenizer needs to be instantiated with "),l=r(K,"CODE",{});var J=i(l);c=s(J,"add_prefix_space=True"),J.forEach(t),j=s(K,"."),K.forEach(t)},m(se,K){g(se,d,K),e(d,_),e(d,p),e(p,u),e(d,T),e(d,l),e(l,c),e(d,j)},d(se){se&&t(d)}}}function xb(G){let d,_,p,u,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);u=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,u),e(d,T)},d(l){l&&t(d)}}}function jb(G){let d,_,p,u,T;return u=new he({props:{code:`from transformers import GPT2Tokenizer, GPT2Model
import torch

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2Model.from_pretrained("gpt2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPT2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2Model.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=n("Example:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function Fb(G){let d,_,p,u,T;return u=new he({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:
model = GPT2LMHeadModel.from_pretrained("gpt2-xl")
device_map = {
    0: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    1: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    2: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
    3: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
}
model.parallelize(device_map)`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:</span>
model = GPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;gpt2-xl&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>, <span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">22</span>, <span class="hljs-number">23</span>, <span class="hljs-number">24</span>, <span class="hljs-number">25</span>, <span class="hljs-number">26</span>, <span class="hljs-number">27</span>, <span class="hljs-number">28</span>, <span class="hljs-number">29</span>, <span class="hljs-number">30</span>, <span class="hljs-number">31</span>, <span class="hljs-number">32</span>, <span class="hljs-number">33</span>, <span class="hljs-number">34</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">35</span>, <span class="hljs-number">36</span>, <span class="hljs-number">37</span>, <span class="hljs-number">38</span>, <span class="hljs-number">39</span>, <span class="hljs-number">40</span>, <span class="hljs-number">41</span>, <span class="hljs-number">42</span>, <span class="hljs-number">43</span>, <span class="hljs-number">44</span>, <span class="hljs-number">45</span>, <span class="hljs-number">46</span>, <span class="hljs-number">47</span>],
}
model.parallelize(device_map)`}}),{c(){d=a("p"),_=n("Example:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function zb(G){let d,_,p,u,T;return u=new he({props:{code:`# On a 4 GPU machine with gpt2-large:
model = GPT2LMHeadModel.from_pretrained("gpt2-large")
device_map = {
    0: [0, 1, 2, 3, 4, 5, 6, 7],
    1: [8, 9, 10, 11, 12, 13, 14, 15],
    2: [16, 17, 18, 19, 20, 21, 22, 23],
    3: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with gpt2-large:</span>
model = GPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;gpt2-large&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">16</span>, <span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">24</span>, <span class="hljs-number">25</span>, <span class="hljs-number">26</span>, <span class="hljs-number">27</span>, <span class="hljs-number">28</span>, <span class="hljs-number">29</span>, <span class="hljs-number">30</span>, <span class="hljs-number">31</span>, <span class="hljs-number">32</span>, <span class="hljs-number">33</span>, <span class="hljs-number">34</span>, <span class="hljs-number">35</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){d=a("p"),_=n("Example:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function Eb(G){let d,_,p,u,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);u=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,u),e(d,T)},d(l){l&&t(d)}}}function qb(G){let d,_,p,u,T;return u=new he({props:{code:`import torch
from transformers import GPT2Tokenizer, GPT2LMHeadModel

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2LMHeadModel.from_pretrained("gpt2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPT2LMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=n("Example:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function Cb(G){let d,_,p,u,T;return u=new he({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:
model = GPT2LMHeadModel.from_pretrained("gpt2-xl")
device_map = {
    0: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    1: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    2: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
    3: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
}
model.parallelize(device_map)`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:</span>
model = GPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;gpt2-xl&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>, <span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">22</span>, <span class="hljs-number">23</span>, <span class="hljs-number">24</span>, <span class="hljs-number">25</span>, <span class="hljs-number">26</span>, <span class="hljs-number">27</span>, <span class="hljs-number">28</span>, <span class="hljs-number">29</span>, <span class="hljs-number">30</span>, <span class="hljs-number">31</span>, <span class="hljs-number">32</span>, <span class="hljs-number">33</span>, <span class="hljs-number">34</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">35</span>, <span class="hljs-number">36</span>, <span class="hljs-number">37</span>, <span class="hljs-number">38</span>, <span class="hljs-number">39</span>, <span class="hljs-number">40</span>, <span class="hljs-number">41</span>, <span class="hljs-number">42</span>, <span class="hljs-number">43</span>, <span class="hljs-number">44</span>, <span class="hljs-number">45</span>, <span class="hljs-number">46</span>, <span class="hljs-number">47</span>],
}
model.parallelize(device_map)`}}),{c(){d=a("p"),_=n("Example:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function Db(G){let d,_,p,u,T;return u=new he({props:{code:`# On a 4 GPU machine with gpt2-large:
model = GPT2LMHeadModel.from_pretrained("gpt2-large")
device_map = {
    0: [0, 1, 2, 3, 4, 5, 6, 7],
    1: [8, 9, 10, 11, 12, 13, 14, 15],
    2: [16, 17, 18, 19, 20, 21, 22, 23],
    3: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with gpt2-large:</span>
model = GPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;gpt2-large&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">16</span>, <span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">24</span>, <span class="hljs-number">25</span>, <span class="hljs-number">26</span>, <span class="hljs-number">27</span>, <span class="hljs-number">28</span>, <span class="hljs-number">29</span>, <span class="hljs-number">30</span>, <span class="hljs-number">31</span>, <span class="hljs-number">32</span>, <span class="hljs-number">33</span>, <span class="hljs-number">34</span>, <span class="hljs-number">35</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){d=a("p"),_=n("Example:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function Lb(G){let d,_,p,u,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);u=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,u),e(d,T)},d(l){l&&t(d)}}}function Ob(G){let d,_,p,u,T;return u=new he({props:{code:`import torch
from transformers import GPT2Tokenizer, GPT2DoubleHeadsModel

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2DoubleHeadsModel.from_pretrained("gpt2")

# Add a [CLS] to the vocabulary (we should train it also!)
num_added_tokens = tokenizer.add_special_tokens({"cls_token": "[CLS]"})
# Update the model embeddings with the new vocabulary size
embedding_layer = model.resize_token_embeddings(len(tokenizer))

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
encoded_choices = [tokenizer.encode(s) for s in choices]
cls_token_location = [tokens.index(tokenizer.cls_token_id) for tokens in encoded_choices]

input_ids = torch.tensor(encoded_choices).unsqueeze(0)  # Batch size: 1, number of choices: 2
mc_token_ids = torch.tensor([cls_token_location])  # Batch size: 1

outputs = model(input_ids, mc_token_ids=mc_token_ids)
lm_logits = outputs.logits
mc_logits = outputs.mc_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPT2DoubleHeadsModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2DoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_added_tokens = tokenizer.add_special_tokens({<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>})
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Update the model embeddings with the new vocabulary size</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>embedding_layer = model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_choices = [tokenizer.encode(s) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> choices]
<span class="hljs-meta">&gt;&gt;&gt; </span>cls_token_location = [tokens.index(tokenizer.cls_token_id) <span class="hljs-keyword">for</span> tokens <span class="hljs-keyword">in</span> encoded_choices]

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(encoded_choices).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size: 1, number of choices: 2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_token_ids = torch.tensor([cls_token_location])  <span class="hljs-comment"># Batch size: 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, mc_token_ids=mc_token_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),{c(){d=a("p"),_=n("Example:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function Nb(G){let d,_,p,u,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);u=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,u),e(d,T)},d(l){l&&t(d)}}}function Hb(G){let d,_,p,u,T;return u=new he({props:{code:`import torch
from transformers import GPT2Tokenizer, GPT2ForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("microsoft/DialogRPT-updown")
model = GPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPT2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),_=n("Example of single-label classification:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example of single-label classification:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function Ib(G){let d,_;return d=new he({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = GPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">5.28</span>`}}),{c(){v(d.$$.fragment)},l(p){k(d.$$.fragment,p)},m(p,u){w(d,p,u),_=!0},p:pe,i(p){_||($(d.$$.fragment,p),_=!0)},o(p){P(d.$$.fragment,p),_=!1},d(p){M(d,p)}}}function Sb(G){let d,_,p,u,T;return u=new he({props:{code:`import torch
from transformers import GPT2Tokenizer, GPT2ForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("microsoft/DialogRPT-updown")
model = GPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPT2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),_=n("Example of multi-label classification:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example of multi-label classification:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function Ab(G){let d,_;return d=new he({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = GPT2ForSequenceClassification.from_pretrained(
    "microsoft/DialogRPT-updown", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(p){k(d.$$.fragment,p)},m(p,u){w(d,p,u),_=!0},p:pe,i(p){_||($(d.$$.fragment,p),_=!0)},o(p){P(d.$$.fragment,p),_=!1},d(p){M(d,p)}}}function Wb(G){let d,_,p,u,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);u=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,u),e(d,T)},d(l){l&&t(d)}}}function Ub(G){let d,_,p,u,T;return u=new he({props:{code:`from transformers import GPT2Tokenizer, GPT2ForTokenClassification
import torch

tokenizer = GPT2Tokenizer.from_pretrained("brad1141/gpt2-finetuned-comp2")
model = GPT2ForTokenClassification.from_pretrained("brad1141/gpt2-finetuned-comp2")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="pt"
)

with torch.no_grad():
    logits = model(**inputs).logits

predicted_token_class_ids = logits.argmax(-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t.item()] for t in predicted_token_class_ids[0]]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPT2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;brad1141/gpt2-finetuned-comp2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;brad1141/gpt2-finetuned-comp2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
[<span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Position&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>]`}}),{c(){d=a("p"),_=n("Example:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function Bb(G){let d,_;return d=new he({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.25</span>`}}),{c(){v(d.$$.fragment)},l(p){k(d.$$.fragment,p)},m(p,u){w(d,p,u),_=!0},p:pe,i(p){_||($(d.$$.fragment,p),_=!0)},o(p){P(d.$$.fragment,p),_=!1},d(p){M(d,p)}}}function Rb(G){let d,_,p,u,T,l,c,j,se,K,N,J,ae,x,$e,V,Pe,ye,A,Me,le,X,Ge,ve,B,xe,ke,R,me,je,ie,E,C,we,H,ue,Fe,Y,de,ze,q,Ee,Q,qe,L,Z,fe,Ce,W,ge,ee,De,re,D,Le,O,Oe,Ne;return{c(){d=a("p"),_=n("TensorFlow models and layers in "),p=a("code"),u=n("transformers"),T=n(" accept two formats as input:"),l=h(),c=a("ul"),j=a("li"),se=n("having all inputs as keyword arguments (like PyTorch models), or"),K=h(),N=a("li"),J=n("having all inputs as a list, tuple or dict in the first positional argument."),ae=h(),x=a("p"),$e=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Pe=n("model.fit()"),ye=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=a("code"),Me=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),X=a("code"),Ge=n("fit()"),ve=n(" and "),B=a("code"),xe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),R=a("code"),me=n("Functional"),je=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ie=h(),E=a("ul"),C=a("li"),we=n("a single Tensor with "),H=a("code"),ue=n("input_ids"),Fe=n(" only and nothing else: "),Y=a("code"),de=n("model(input_ids)"),ze=h(),q=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),qe=n("model([input_ids, attention_mask])"),L=n(" or "),Z=a("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),Ce=h(),W=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=a("code"),De=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re=h(),D=a("p"),Le=n(`Note that when creating models and layers with
`),O=a("a"),Oe=n("subclassing"),Ne=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var F=i(d);_=s(F,"TensorFlow models and layers in "),p=r(F,"CODE",{});var nt=i(p);u=s(nt,"transformers"),nt.forEach(t),T=s(F," accept two formats as input:"),F.forEach(t),l=m(y),c=r(y,"UL",{});var ne=i(c);j=r(ne,"LI",{});var st=i(j);se=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),K=m(ne),N=r(ne,"LI",{});var at=i(N);J=s(at,"having all inputs as a list, tuple or dict in the first positional argument."),at.forEach(t),ne.forEach(t),ae=m(y),x=r(y,"P",{});var z=i(x);$e=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(z,"CODE",{});var rt=i(V);Pe=s(rt,"model.fit()"),rt.forEach(t),ye=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=r(z,"CODE",{});var it=i(A);Me=s(it,"model.fit()"),it.forEach(t),le=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),X=r(z,"CODE",{});var Re=i(X);Ge=s(Re,"fit()"),Re.forEach(t),ve=s(z," and "),B=r(z,"CODE",{});var lt=i(B);xe=s(lt,"predict()"),lt.forEach(t),ke=s(z,`, such as when creating your own layers or models with
the Keras `),R=r(z,"CODE",{});var dt=i(R);me=s(dt,"Functional"),dt.forEach(t),je=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ie=m(y),E=r(y,"UL",{});var U=i(E);C=r(U,"LI",{});var I=i(C);we=s(I,"a single Tensor with "),H=r(I,"CODE",{});var ct=i(H);ue=s(ct,"input_ids"),ct.forEach(t),Fe=s(I," only and nothing else: "),Y=r(I,"CODE",{});var Je=i(Y);de=s(Je,"model(input_ids)"),Je.forEach(t),I.forEach(t),ze=m(U),q=r(U,"LI",{});var te=i(q);Ee=s(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(te,"CODE",{});var pt=i(Q);qe=s(pt,"model([input_ids, attention_mask])"),pt.forEach(t),L=s(te," or "),Z=r(te,"CODE",{});var Xe=i(Z);fe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),te.forEach(t),Ce=m(U),W=r(U,"LI",{});var He=i(W);ge=s(He,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=r(He,"CODE",{});var ht=i(ee);De=s(ht,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ht.forEach(t),He.forEach(t),U.forEach(t),re=m(y),D=r(y,"P",{});var oe=i(D);Le=s(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var mt=i(O);Oe=s(mt,"subclassing"),mt.forEach(t),Ne=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(y,F){g(y,d,F),e(d,_),e(d,p),e(p,u),e(d,T),g(y,l,F),g(y,c,F),e(c,j),e(j,se),e(c,K),e(c,N),e(N,J),g(y,ae,F),g(y,x,F),e(x,$e),e(x,V),e(V,Pe),e(x,ye),e(x,A),e(A,Me),e(x,le),e(x,X),e(X,Ge),e(x,ve),e(x,B),e(B,xe),e(x,ke),e(x,R),e(R,me),e(x,je),g(y,ie,F),g(y,E,F),e(E,C),e(C,we),e(C,H),e(H,ue),e(C,Fe),e(C,Y),e(Y,de),e(E,ze),e(E,q),e(q,Ee),e(q,Q),e(Q,qe),e(q,L),e(q,Z),e(Z,fe),e(E,Ce),e(E,W),e(W,ge),e(W,ee),e(ee,De),g(y,re,F),g(y,D,F),e(D,Le),e(D,O),e(O,Oe),e(D,Ne)},d(y){y&&t(d),y&&t(l),y&&t(c),y&&t(ae),y&&t(x),y&&t(ie),y&&t(E),y&&t(re),y&&t(D)}}}function Kb(G){let d,_,p,u,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);u=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,u),e(d,T)},d(l){l&&t(d)}}}function Vb(G){let d,_,p,u,T;return u=new he({props:{code:`from transformers import GPT2Tokenizer, TFGPT2Model
import tensorflow as tf

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = TFGPT2Model.from_pretrained("gpt2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, TFGPT2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPT2Model.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=n("Example:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function Jb(G){let d,_,p,u,T,l,c,j,se,K,N,J,ae,x,$e,V,Pe,ye,A,Me,le,X,Ge,ve,B,xe,ke,R,me,je,ie,E,C,we,H,ue,Fe,Y,de,ze,q,Ee,Q,qe,L,Z,fe,Ce,W,ge,ee,De,re,D,Le,O,Oe,Ne;return{c(){d=a("p"),_=n("TensorFlow models and layers in "),p=a("code"),u=n("transformers"),T=n(" accept two formats as input:"),l=h(),c=a("ul"),j=a("li"),se=n("having all inputs as keyword arguments (like PyTorch models), or"),K=h(),N=a("li"),J=n("having all inputs as a list, tuple or dict in the first positional argument."),ae=h(),x=a("p"),$e=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Pe=n("model.fit()"),ye=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=a("code"),Me=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),X=a("code"),Ge=n("fit()"),ve=n(" and "),B=a("code"),xe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),R=a("code"),me=n("Functional"),je=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ie=h(),E=a("ul"),C=a("li"),we=n("a single Tensor with "),H=a("code"),ue=n("input_ids"),Fe=n(" only and nothing else: "),Y=a("code"),de=n("model(input_ids)"),ze=h(),q=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),qe=n("model([input_ids, attention_mask])"),L=n(" or "),Z=a("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),Ce=h(),W=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=a("code"),De=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re=h(),D=a("p"),Le=n(`Note that when creating models and layers with
`),O=a("a"),Oe=n("subclassing"),Ne=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var F=i(d);_=s(F,"TensorFlow models and layers in "),p=r(F,"CODE",{});var nt=i(p);u=s(nt,"transformers"),nt.forEach(t),T=s(F," accept two formats as input:"),F.forEach(t),l=m(y),c=r(y,"UL",{});var ne=i(c);j=r(ne,"LI",{});var st=i(j);se=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),K=m(ne),N=r(ne,"LI",{});var at=i(N);J=s(at,"having all inputs as a list, tuple or dict in the first positional argument."),at.forEach(t),ne.forEach(t),ae=m(y),x=r(y,"P",{});var z=i(x);$e=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(z,"CODE",{});var rt=i(V);Pe=s(rt,"model.fit()"),rt.forEach(t),ye=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=r(z,"CODE",{});var it=i(A);Me=s(it,"model.fit()"),it.forEach(t),le=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),X=r(z,"CODE",{});var Re=i(X);Ge=s(Re,"fit()"),Re.forEach(t),ve=s(z," and "),B=r(z,"CODE",{});var lt=i(B);xe=s(lt,"predict()"),lt.forEach(t),ke=s(z,`, such as when creating your own layers or models with
the Keras `),R=r(z,"CODE",{});var dt=i(R);me=s(dt,"Functional"),dt.forEach(t),je=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ie=m(y),E=r(y,"UL",{});var U=i(E);C=r(U,"LI",{});var I=i(C);we=s(I,"a single Tensor with "),H=r(I,"CODE",{});var ct=i(H);ue=s(ct,"input_ids"),ct.forEach(t),Fe=s(I," only and nothing else: "),Y=r(I,"CODE",{});var Je=i(Y);de=s(Je,"model(input_ids)"),Je.forEach(t),I.forEach(t),ze=m(U),q=r(U,"LI",{});var te=i(q);Ee=s(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(te,"CODE",{});var pt=i(Q);qe=s(pt,"model([input_ids, attention_mask])"),pt.forEach(t),L=s(te," or "),Z=r(te,"CODE",{});var Xe=i(Z);fe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),te.forEach(t),Ce=m(U),W=r(U,"LI",{});var He=i(W);ge=s(He,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=r(He,"CODE",{});var ht=i(ee);De=s(ht,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ht.forEach(t),He.forEach(t),U.forEach(t),re=m(y),D=r(y,"P",{});var oe=i(D);Le=s(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var mt=i(O);Oe=s(mt,"subclassing"),mt.forEach(t),Ne=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(y,F){g(y,d,F),e(d,_),e(d,p),e(p,u),e(d,T),g(y,l,F),g(y,c,F),e(c,j),e(j,se),e(c,K),e(c,N),e(N,J),g(y,ae,F),g(y,x,F),e(x,$e),e(x,V),e(V,Pe),e(x,ye),e(x,A),e(A,Me),e(x,le),e(x,X),e(X,Ge),e(x,ve),e(x,B),e(B,xe),e(x,ke),e(x,R),e(R,me),e(x,je),g(y,ie,F),g(y,E,F),e(E,C),e(C,we),e(C,H),e(H,ue),e(C,Fe),e(C,Y),e(Y,de),e(E,ze),e(E,q),e(q,Ee),e(q,Q),e(Q,qe),e(q,L),e(q,Z),e(Z,fe),e(E,Ce),e(E,W),e(W,ge),e(W,ee),e(ee,De),g(y,re,F),g(y,D,F),e(D,Le),e(D,O),e(O,Oe),e(D,Ne)},d(y){y&&t(d),y&&t(l),y&&t(c),y&&t(ae),y&&t(x),y&&t(ie),y&&t(E),y&&t(re),y&&t(D)}}}function Xb(G){let d,_,p,u,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);u=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,u),e(d,T)},d(l){l&&t(d)}}}function Yb(G){let d,_,p,u,T;return u=new he({props:{code:`from transformers import GPT2Tokenizer, TFGPT2LMHeadModel
import tensorflow as tf

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = TFGPT2LMHeadModel.from_pretrained("gpt2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, TFGPT2LMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=n("Example:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function Qb(G){let d,_,p,u,T,l,c,j,se,K,N,J,ae,x,$e,V,Pe,ye,A,Me,le,X,Ge,ve,B,xe,ke,R,me,je,ie,E,C,we,H,ue,Fe,Y,de,ze,q,Ee,Q,qe,L,Z,fe,Ce,W,ge,ee,De,re,D,Le,O,Oe,Ne;return{c(){d=a("p"),_=n("TensorFlow models and layers in "),p=a("code"),u=n("transformers"),T=n(" accept two formats as input:"),l=h(),c=a("ul"),j=a("li"),se=n("having all inputs as keyword arguments (like PyTorch models), or"),K=h(),N=a("li"),J=n("having all inputs as a list, tuple or dict in the first positional argument."),ae=h(),x=a("p"),$e=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Pe=n("model.fit()"),ye=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=a("code"),Me=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),X=a("code"),Ge=n("fit()"),ve=n(" and "),B=a("code"),xe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),R=a("code"),me=n("Functional"),je=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ie=h(),E=a("ul"),C=a("li"),we=n("a single Tensor with "),H=a("code"),ue=n("input_ids"),Fe=n(" only and nothing else: "),Y=a("code"),de=n("model(input_ids)"),ze=h(),q=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),qe=n("model([input_ids, attention_mask])"),L=n(" or "),Z=a("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),Ce=h(),W=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=a("code"),De=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re=h(),D=a("p"),Le=n(`Note that when creating models and layers with
`),O=a("a"),Oe=n("subclassing"),Ne=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var F=i(d);_=s(F,"TensorFlow models and layers in "),p=r(F,"CODE",{});var nt=i(p);u=s(nt,"transformers"),nt.forEach(t),T=s(F," accept two formats as input:"),F.forEach(t),l=m(y),c=r(y,"UL",{});var ne=i(c);j=r(ne,"LI",{});var st=i(j);se=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),K=m(ne),N=r(ne,"LI",{});var at=i(N);J=s(at,"having all inputs as a list, tuple or dict in the first positional argument."),at.forEach(t),ne.forEach(t),ae=m(y),x=r(y,"P",{});var z=i(x);$e=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(z,"CODE",{});var rt=i(V);Pe=s(rt,"model.fit()"),rt.forEach(t),ye=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=r(z,"CODE",{});var it=i(A);Me=s(it,"model.fit()"),it.forEach(t),le=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),X=r(z,"CODE",{});var Re=i(X);Ge=s(Re,"fit()"),Re.forEach(t),ve=s(z," and "),B=r(z,"CODE",{});var lt=i(B);xe=s(lt,"predict()"),lt.forEach(t),ke=s(z,`, such as when creating your own layers or models with
the Keras `),R=r(z,"CODE",{});var dt=i(R);me=s(dt,"Functional"),dt.forEach(t),je=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ie=m(y),E=r(y,"UL",{});var U=i(E);C=r(U,"LI",{});var I=i(C);we=s(I,"a single Tensor with "),H=r(I,"CODE",{});var ct=i(H);ue=s(ct,"input_ids"),ct.forEach(t),Fe=s(I," only and nothing else: "),Y=r(I,"CODE",{});var Je=i(Y);de=s(Je,"model(input_ids)"),Je.forEach(t),I.forEach(t),ze=m(U),q=r(U,"LI",{});var te=i(q);Ee=s(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(te,"CODE",{});var pt=i(Q);qe=s(pt,"model([input_ids, attention_mask])"),pt.forEach(t),L=s(te," or "),Z=r(te,"CODE",{});var Xe=i(Z);fe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),te.forEach(t),Ce=m(U),W=r(U,"LI",{});var He=i(W);ge=s(He,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=r(He,"CODE",{});var ht=i(ee);De=s(ht,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ht.forEach(t),He.forEach(t),U.forEach(t),re=m(y),D=r(y,"P",{});var oe=i(D);Le=s(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var mt=i(O);Oe=s(mt,"subclassing"),mt.forEach(t),Ne=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(y,F){g(y,d,F),e(d,_),e(d,p),e(p,u),e(d,T),g(y,l,F),g(y,c,F),e(c,j),e(j,se),e(c,K),e(c,N),e(N,J),g(y,ae,F),g(y,x,F),e(x,$e),e(x,V),e(V,Pe),e(x,ye),e(x,A),e(A,Me),e(x,le),e(x,X),e(X,Ge),e(x,ve),e(x,B),e(B,xe),e(x,ke),e(x,R),e(R,me),e(x,je),g(y,ie,F),g(y,E,F),e(E,C),e(C,we),e(C,H),e(H,ue),e(C,Fe),e(C,Y),e(Y,de),e(E,ze),e(E,q),e(q,Ee),e(q,Q),e(Q,qe),e(q,L),e(q,Z),e(Z,fe),e(E,Ce),e(E,W),e(W,ge),e(W,ee),e(ee,De),g(y,re,F),g(y,D,F),e(D,Le),e(D,O),e(O,Oe),e(D,Ne)},d(y){y&&t(d),y&&t(l),y&&t(c),y&&t(ae),y&&t(x),y&&t(ie),y&&t(E),y&&t(re),y&&t(D)}}}function Zb(G){let d,_,p,u,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);u=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,u),e(d,T)},d(l){l&&t(d)}}}function ey(G){let d,_,p,u,T;return u=new he({props:{code:`import tensorflow as tf
from transformers import GPT2Tokenizer, TFGPT2DoubleHeadsModel

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = TFGPT2DoubleHeadsModel.from_pretrained("gpt2")

# Add a [CLS] to the vocabulary (we should train it also!)
num_added_tokens = tokenizer.add_special_tokens({"cls_token": "[CLS]"})

embedding_layer = model.resize_token_embeddings(
    len(tokenizer)
)  # Update the model embeddings with the new vocabulary size

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
encoded_choices = [tokenizer.encode(s) for s in choices]
cls_token_location = [tokens.index(tokenizer.cls_token_id) for tokens in encoded_choices]

input_ids = tf.constant(encoded_choices)[None, :]  # Batch size: 1, number of choices: 2
mc_token_ids = tf.constant([cls_token_location])  # Batch size: 1

outputs = model(input_ids, mc_token_ids=mc_token_ids)
lm_prediction_scores, mc_prediction_scores = outputs[:2]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, TFGPT2DoubleHeadsModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPT2DoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_added_tokens = tokenizer.add_special_tokens({<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>})

<span class="hljs-meta">&gt;&gt;&gt; </span>embedding_layer = model.resize_token_embeddings(
<span class="hljs-meta">... </span>    <span class="hljs-built_in">len</span>(tokenizer)
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Update the model embeddings with the new vocabulary size</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_choices = [tokenizer.encode(s) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> choices]
<span class="hljs-meta">&gt;&gt;&gt; </span>cls_token_location = [tokens.index(tokenizer.cls_token_id) <span class="hljs-keyword">for</span> tokens <span class="hljs-keyword">in</span> encoded_choices]

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(encoded_choices)[<span class="hljs-literal">None</span>, :]  <span class="hljs-comment"># Batch size: 1, number of choices: 2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_token_ids = tf.constant([cls_token_location])  <span class="hljs-comment"># Batch size: 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, mc_token_ids=mc_token_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=a("p"),_=n("Examples:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Examples:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function ty(G){let d,_,p,u,T,l,c,j,se,K,N,J,ae,x,$e,V,Pe,ye,A,Me,le,X,Ge,ve,B,xe,ke,R,me,je,ie,E,C,we,H,ue,Fe,Y,de,ze,q,Ee,Q,qe,L,Z,fe,Ce,W,ge,ee,De,re,D,Le,O,Oe,Ne;return{c(){d=a("p"),_=n("TensorFlow models and layers in "),p=a("code"),u=n("transformers"),T=n(" accept two formats as input:"),l=h(),c=a("ul"),j=a("li"),se=n("having all inputs as keyword arguments (like PyTorch models), or"),K=h(),N=a("li"),J=n("having all inputs as a list, tuple or dict in the first positional argument."),ae=h(),x=a("p"),$e=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Pe=n("model.fit()"),ye=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=a("code"),Me=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),X=a("code"),Ge=n("fit()"),ve=n(" and "),B=a("code"),xe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),R=a("code"),me=n("Functional"),je=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ie=h(),E=a("ul"),C=a("li"),we=n("a single Tensor with "),H=a("code"),ue=n("input_ids"),Fe=n(" only and nothing else: "),Y=a("code"),de=n("model(input_ids)"),ze=h(),q=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),qe=n("model([input_ids, attention_mask])"),L=n(" or "),Z=a("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),Ce=h(),W=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=a("code"),De=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re=h(),D=a("p"),Le=n(`Note that when creating models and layers with
`),O=a("a"),Oe=n("subclassing"),Ne=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var F=i(d);_=s(F,"TensorFlow models and layers in "),p=r(F,"CODE",{});var nt=i(p);u=s(nt,"transformers"),nt.forEach(t),T=s(F," accept two formats as input:"),F.forEach(t),l=m(y),c=r(y,"UL",{});var ne=i(c);j=r(ne,"LI",{});var st=i(j);se=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),K=m(ne),N=r(ne,"LI",{});var at=i(N);J=s(at,"having all inputs as a list, tuple or dict in the first positional argument."),at.forEach(t),ne.forEach(t),ae=m(y),x=r(y,"P",{});var z=i(x);$e=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(z,"CODE",{});var rt=i(V);Pe=s(rt,"model.fit()"),rt.forEach(t),ye=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=r(z,"CODE",{});var it=i(A);Me=s(it,"model.fit()"),it.forEach(t),le=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),X=r(z,"CODE",{});var Re=i(X);Ge=s(Re,"fit()"),Re.forEach(t),ve=s(z," and "),B=r(z,"CODE",{});var lt=i(B);xe=s(lt,"predict()"),lt.forEach(t),ke=s(z,`, such as when creating your own layers or models with
the Keras `),R=r(z,"CODE",{});var dt=i(R);me=s(dt,"Functional"),dt.forEach(t),je=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ie=m(y),E=r(y,"UL",{});var U=i(E);C=r(U,"LI",{});var I=i(C);we=s(I,"a single Tensor with "),H=r(I,"CODE",{});var ct=i(H);ue=s(ct,"input_ids"),ct.forEach(t),Fe=s(I," only and nothing else: "),Y=r(I,"CODE",{});var Je=i(Y);de=s(Je,"model(input_ids)"),Je.forEach(t),I.forEach(t),ze=m(U),q=r(U,"LI",{});var te=i(q);Ee=s(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(te,"CODE",{});var pt=i(Q);qe=s(pt,"model([input_ids, attention_mask])"),pt.forEach(t),L=s(te," or "),Z=r(te,"CODE",{});var Xe=i(Z);fe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),te.forEach(t),Ce=m(U),W=r(U,"LI",{});var He=i(W);ge=s(He,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=r(He,"CODE",{});var ht=i(ee);De=s(ht,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ht.forEach(t),He.forEach(t),U.forEach(t),re=m(y),D=r(y,"P",{});var oe=i(D);Le=s(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var mt=i(O);Oe=s(mt,"subclassing"),mt.forEach(t),Ne=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(y,F){g(y,d,F),e(d,_),e(d,p),e(p,u),e(d,T),g(y,l,F),g(y,c,F),e(c,j),e(j,se),e(c,K),e(c,N),e(N,J),g(y,ae,F),g(y,x,F),e(x,$e),e(x,V),e(V,Pe),e(x,ye),e(x,A),e(A,Me),e(x,le),e(x,X),e(X,Ge),e(x,ve),e(x,B),e(B,xe),e(x,ke),e(x,R),e(R,me),e(x,je),g(y,ie,F),g(y,E,F),e(E,C),e(C,we),e(C,H),e(H,ue),e(C,Fe),e(C,Y),e(Y,de),e(E,ze),e(E,q),e(q,Ee),e(q,Q),e(Q,qe),e(q,L),e(q,Z),e(Z,fe),e(E,Ce),e(E,W),e(W,ge),e(W,ee),e(ee,De),g(y,re,F),g(y,D,F),e(D,Le),e(D,O),e(O,Oe),e(D,Ne)},d(y){y&&t(d),y&&t(l),y&&t(c),y&&t(ae),y&&t(x),y&&t(ie),y&&t(E),y&&t(re),y&&t(D)}}}function oy(G){let d,_,p,u,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);u=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,u),e(d,T)},d(l){l&&t(d)}}}function ny(G){let d,_,p,u,T;return u=new he({props:{code:`from transformers import GPT2Tokenizer, TFGPT2ForSequenceClassification
import tensorflow as tf

tokenizer = GPT2Tokenizer.from_pretrained("microsoft/DialogRPT-updown")
model = TFGPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, TFGPT2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),_=n("Example:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function sy(G){let d,_;return d=new he({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFGPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(p){k(d.$$.fragment,p)},m(p,u){w(d,p,u),_=!0},p:pe,i(p){_||($(d.$$.fragment,p),_=!0)},o(p){P(d.$$.fragment,p),_=!1},d(p){M(d,p)}}}function ay(G){let d,_,p,u,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);u=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,u),e(d,T)},d(l){l&&t(d)}}}function ry(G){let d,_,p,u,T;return u=new he({props:{code:`from transformers import GPT2Tokenizer, FlaxGPT2Model

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = FlaxGPT2Model.from_pretrained("gpt2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxGPT2Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPT2Model.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=n("Example:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function iy(G){let d,_,p,u,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);u=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,u),e(d,T)},d(l){l&&t(d)}}}function ly(G){let d,_,p,u,T;return u=new he({props:{code:`from transformers import GPT2Tokenizer, FlaxGPT2LMHeadModel

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = FlaxGPT2LMHeadModel.from_pretrained("gpt2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxGPT2LMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=a("p"),_=n("Example:"),p=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=m(l),k(u.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(u,l,c),T=!0},p:pe,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){P(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(u,l)}}}function dy(G){let d,_,p,u,T,l,c,j,se,K,N,J,ae,x,$e,V,Pe,ye,A,Me,le,X,Ge,ve,B,xe,ke,R,me,je,ie,E,C,we,H,ue,Fe,Y,de,ze,q,Ee,Q,qe,L,Z,fe,Ce,W,ge,ee,De,re,D,Le,O,Oe,Ne,y,F,nt,ne,st,at,z,rt,it,Re,lt,dt,U,I,ct,Je,te,pt,Xe,He,ht,oe,mt,Pc,Ql,to,Zn,Mc,Gc,Ir,xc,jc,Zl,Rt,Fc,es,zc,Ec,ts,qc,Cc,ed,oo,Do,Sr,os,Dc,Ar,Lc,td,Pt,ns,Oc,St,Nc,Ja,Hc,Ic,Xa,Sc,Ac,ss,Wc,Uc,Bc,no,Rc,Ya,Kc,Vc,Qa,Jc,Xc,Yc,Lo,od,so,Oo,Wr,as,Qc,Ur,Zc,nd,_e,rs,ep,Br,tp,op,Rr,np,sp,No,ap,is,rp,Kr,ip,lp,dp,Ho,cp,ls,pp,Za,hp,mp,up,er,ds,sd,ao,Io,Vr,cs,fp,Jr,gp,ad,Ie,ps,_p,hs,Tp,Xr,bp,yp,vp,Yr,kp,wp,So,$p,ms,Pp,Qr,Mp,Gp,xp,Ao,jp,us,Fp,tr,zp,Ep,rd,ro,Wo,Zr,fs,qp,ei,Cp,id,io,gs,Dp,ti,Lp,ld,lo,_s,Op,oi,Np,dd,co,Uo,ni,Ts,Hp,si,Ip,cd,Se,bs,Sp,ai,Ap,Wp,ys,Up,or,Bp,Rp,Kp,vs,Vp,ks,Jp,Xp,Yp,xt,ws,Qp,po,Zp,nr,eh,th,ri,oh,nh,sh,Bo,ah,Ro,rh,jt,$s,ih,ii,lh,dh,li,ch,ph,Ko,hh,Kt,Ps,mh,di,uh,fh,Vo,pd,ho,Jo,ci,Ms,gh,pi,_h,hd,Ae,Gs,Th,hi,bh,yh,xs,vh,sr,kh,wh,$h,js,Ph,Fs,Mh,Gh,xh,Ft,zs,jh,mo,Fh,ar,zh,Eh,mi,qh,Ch,Dh,Xo,Lh,Yo,Oh,zt,Es,Nh,ui,Hh,Ih,fi,Sh,Ah,Qo,Wh,Vt,qs,Uh,gi,Bh,Rh,Zo,md,uo,en,_i,Cs,Kh,Ti,Vh,ud,ut,Ds,Jh,bi,Xh,Yh,Ls,Qh,rr,Zh,em,tm,Os,om,Ns,nm,sm,am,Et,Hs,rm,fo,im,ir,lm,dm,yi,cm,pm,hm,tn,mm,on,fd,go,nn,vi,Is,um,ki,fm,gd,We,Ss,gm,wi,_m,Tm,lr,dr,bm,ym,vm,Mt,km,$i,wm,$m,Pi,Pm,Mm,Mi,Gm,xm,Gi,jm,Fm,zm,As,Em,cr,qm,Cm,Dm,Ws,Lm,Us,Om,Nm,Hm,Ke,Bs,Im,_o,Sm,pr,Am,Wm,xi,Um,Bm,Rm,sn,Km,an,Vm,rn,Jm,ln,Xm,dn,_d,To,cn,ji,Rs,Ym,Fi,Qm,Td,ft,Ks,Zm,zi,eu,tu,Vs,ou,hr,nu,su,au,Js,ru,Xs,iu,lu,du,gt,Ys,cu,bo,pu,mr,hu,mu,Ei,uu,fu,gu,pn,_u,hn,Tu,mn,bd,yo,un,qi,Qs,bu,Ci,yu,yd,Ye,Zs,vu,Di,ku,wu,ea,$u,ur,Pu,Mu,Gu,ta,xu,oa,ju,Fu,zu,fn,Eu,qt,na,qu,vo,Cu,fr,Du,Lu,Li,Ou,Nu,Hu,gn,Iu,_n,vd,ko,Tn,Oi,sa,Su,Ni,Au,kd,Qe,aa,Wu,Hi,Uu,Bu,ra,Ru,gr,Ku,Vu,Ju,ia,Xu,la,Yu,Qu,Zu,bn,ef,Ct,da,tf,wo,of,_r,nf,sf,Ii,af,rf,lf,yn,df,vn,wd,$o,kn,Si,ca,cf,Ai,pf,$d,Ze,pa,hf,Wi,mf,uf,ha,ff,Tr,gf,_f,Tf,ma,bf,ua,yf,vf,kf,wn,wf,Dt,fa,$f,Po,Pf,br,Mf,Gf,Ui,xf,jf,Ff,$n,zf,Pn,Pd,Mo,Mn,Bi,ga,Ef,Ri,qf,Md,Te,_a,Cf,Ki,Df,Lf,yr,vr,Of,Nf,Hf,Gt,If,Vi,Sf,Af,Ji,Wf,Uf,Xi,Bf,Rf,Yi,Kf,Vf,Jf,Ta,Xf,kr,Yf,Qf,Zf,ba,eg,ya,tg,og,ng,Gn,sg,_t,va,ag,Go,rg,wr,ig,lg,Qi,dg,cg,pg,xn,hg,jn,mg,Fn,Gd,xo,zn,Zi,ka,ug,el,fg,xd,jo,wa,gg,tl,_g,jd,Fo,En,ol,$a,Tg,nl,bg,Fd,Ue,Pa,yg,sl,vg,kg,Ma,wg,$r,$g,Pg,Mg,Ga,Gg,xa,xg,jg,Fg,al,zg,Eg,At,rl,ja,qg,Cg,il,Fa,Dg,Lg,ll,za,Og,Ng,dl,Ea,Hg,Ig,Lt,qa,Sg,zo,Ag,cl,Wg,Ug,pl,Bg,Rg,Kg,qn,Vg,Cn,zd,Eo,Dn,hl,Ca,Jg,ml,Xg,Ed,Be,Da,Yg,ul,Qg,Zg,La,e_,Pr,t_,o_,n_,Oa,s_,Na,a_,r_,i_,fl,l_,d_,Wt,gl,Ha,c_,p_,_l,Ia,h_,m_,Tl,Sa,u_,f_,bl,Aa,g_,__,Ot,Wa,T_,qo,b_,yl,y_,v_,vl,k_,w_,$_,Ln,P_,On,qd;return l=new Ve({}),x=new Ve({}),os=new Ve({}),ns=new S({props:{name:"class transformers.GPT2Config",anchor:"transformers.GPT2Config",parameters:[{name:"vocab_size",val:" = 50257"},{name:"n_positions",val:" = 1024"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"scale_attn_by_inverse_layer_idx",val:" = False"},{name:"reorder_and_upcast_attn",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Model">GPT2Model</a> or <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2Model">TFGPT2Model</a>.`,name:"vocab_size"},{anchor:"transformers.GPT2Config.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.GPT2Config.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.GPT2Config.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.GPT2Config.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.GPT2Config.n_inner",description:`<strong>n_inner</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
Dimensionality of the inner feed-forward layers. <code>None</code> will set it to 4 times n_embd`,name:"n_inner"},{anchor:"transformers.GPT2Config.activation_function",description:`<strong>activation_function</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
Activation function, to be selected in the list <code>[&quot;relu&quot;, &quot;silu&quot;, &quot;gelu&quot;, &quot;tanh&quot;, &quot;gelu_new&quot;]</code>.`,name:"activation_function"},{anchor:"transformers.GPT2Config.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.GPT2Config.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.GPT2Config.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.GPT2Config.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.GPT2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GPT2Config.summary_type",description:`<strong>summary_type</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;cls_index&quot;</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.GPT2Config.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.GPT2Config.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in for the multiple choice head in
<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a>.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.GPT2Config.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.GPT2Config.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.GPT2Config.scale_attn_weights",description:`<strong>scale_attn_weights</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale attention weights by dividing by sqrt(hidden_size)..`,name:"scale_attn_weights"},{anchor:"transformers.GPT2Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.GPT2Config.scale_attn_by_inverse_layer_idx",description:`<strong>scale_attn_by_inverse_layer_idx</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to additionally scale attention weights by <code>1 / layer_idx + 1</code>.`,name:"scale_attn_by_inverse_layer_idx"},{anchor:"transformers.GPT2Config.reorder_and_upcast_attn",description:`<strong>reorder_and_upcast_attn</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to scale keys (K) prior to computing attention (dot-product) and upcast attention
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/configuration_gpt2.py#L38"}}),Lo=new ce({props:{anchor:"transformers.GPT2Config.example",$$slots:{default:[wb]},$$scope:{ctx:G}}}),as=new Ve({}),rs=new S({props:{name:"class transformers.GPT2Tokenizer",anchor:"transformers.GPT2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = None"},{name:"add_prefix_space",val:" = False"},{name:"add_bos_token",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.GPT2Tokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.GPT2Tokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.GPT2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.GPT2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.GPT2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.GPT2Tokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (GPT2 tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2.py#L104"}}),No=new ce({props:{anchor:"transformers.GPT2Tokenizer.example",$$slots:{default:[$b]},$$scope:{ctx:G}}}),Ho=new et({props:{$$slots:{default:[Pb]},$$scope:{ctx:G}}}),ds=new S({props:{name:"save_vocabulary",anchor:"transformers.GPT2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2.py#L320"}}),cs=new Ve({}),ps=new S({props:{name:"class transformers.GPT2TokenizerFast",anchor:"transformers.GPT2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.GPT2TokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.GPT2TokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.GPT2TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.GPT2TokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.GPT2TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.GPT2TokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (GPT2 tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.GPT2TokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2_fast.py#L70"}}),So=new ce({props:{anchor:"transformers.GPT2TokenizerFast.example",$$slots:{default:[Mb]},$$scope:{ctx:G}}}),Ao=new et({props:{$$slots:{default:[Gb]},$$scope:{ctx:G}}}),fs=new Ve({}),gs=new S({props:{name:"class transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.mc_loss",description:`<strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) &#x2014;
Multiple choice classification loss.`,name:"mc_loss"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of length <code>config.n_layers</code>, containing tuples of tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>GPT2Attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L487"}}),_s=new S({props:{name:"class transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput",anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L573"}}),Ts=new Ve({}),bs=new S({props:{name:"class transformers.GPT2Model",anchor:"transformers.GPT2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L667"}}),ws=new S({props:{name:"forward",anchor:"transformers.GPT2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPT2Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPT2Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPT2Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPT2Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPT2Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPT2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPT2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPT2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L736",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bo=new et({props:{$$slots:{default:[xb]},$$scope:{ctx:G}}}),Ro=new ce({props:{anchor:"transformers.GPT2Model.forward.example",$$slots:{default:[jb]},$$scope:{ctx:G}}}),$s=new S({props:{name:"parallelize",anchor:"transformers.GPT2Model.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the gpt2 models have the
following number of attention modules:</p>
<ul>
<li>gpt2: 12</li>
<li>gpt2-medium: 24</li>
<li>gpt2-large: 36</li>
<li>gpt2-xl: 48</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L690"}}),Ko=new ce({props:{anchor:"transformers.GPT2Model.parallelize.example",$$slots:{default:[Fb]},$$scope:{ctx:G}}}),Ps=new S({props:{name:"deparallelize",anchor:"transformers.GPT2Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L710"}}),Vo=new ce({props:{anchor:"transformers.GPT2Model.deparallelize.example",$$slots:{default:[zb]},$$scope:{ctx:G}}}),Ms=new Ve({}),Gs=new S({props:{name:"class transformers.GPT2LMHeadModel",anchor:"transformers.GPT2LMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L945"}}),zs=new S({props:{name:"forward",anchor:"transformers.GPT2LMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2LMHeadModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2LMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPT2LMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPT2LMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPT2LMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPT2LMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPT2LMHeadModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPT2LMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPT2LMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPT2LMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2LMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1014",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xo=new et({props:{$$slots:{default:[Eb]},$$scope:{ctx:G}}}),Yo=new ce({props:{anchor:"transformers.GPT2LMHeadModel.forward.example",$$slots:{default:[qb]},$$scope:{ctx:G}}}),Es=new S({props:{name:"parallelize",anchor:"transformers.GPT2LMHeadModel.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the gpt2 models have the
following number of attention modules:</p>
<ul>
<li>gpt2: 12</li>
<li>gpt2-medium: 24</li>
<li>gpt2-large: 36</li>
<li>gpt2-xl: 48</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L960"}}),Qo=new ce({props:{anchor:"transformers.GPT2LMHeadModel.parallelize.example",$$slots:{default:[Cb]},$$scope:{ctx:G}}}),qs=new S({props:{name:"deparallelize",anchor:"transformers.GPT2LMHeadModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L972"}}),Zo=new ce({props:{anchor:"transformers.GPT2LMHeadModel.deparallelize.example",$$slots:{default:[Db]},$$scope:{ctx:G}}}),Cs=new Ve({}),Ds=new S({props:{name:"class transformers.GPT2DoubleHeadsModel",anchor:"transformers.GPT2DoubleHeadsModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2DoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1114"}}),Hs=new S({props:{name:"forward",anchor:"transformers.GPT2DoubleHeadsModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_token_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"mc_labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2DoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code>. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to
<code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>`,name:"labels"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.mc_labels",description:`<strong>mc_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"mc_labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1188",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) \u2014 Multiple choice classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of length <code>config.n_layers</code>, containing tuples of tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>GPT2Attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new et({props:{$$slots:{default:[Lb]},$$scope:{ctx:G}}}),on=new ce({props:{anchor:"transformers.GPT2DoubleHeadsModel.forward.example",$$slots:{default:[Ob]},$$scope:{ctx:G}}}),Is=new Ve({}),Ss=new S({props:{name:"class transformers.GPT2ForSequenceClassification",anchor:"transformers.GPT2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1328"}}),Bs=new S({props:{name:"forward",anchor:"transformers.GPT2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2ForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPT2ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPT2ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPT2ForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPT2ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPT2ForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPT2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPT2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPT2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1344",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>)</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new et({props:{$$slots:{default:[Nb]},$$scope:{ctx:G}}}),an=new ce({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example",$$slots:{default:[Hb]},$$scope:{ctx:G}}}),rn=new ce({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-2",$$slots:{default:[Ib]},$$scope:{ctx:G}}}),ln=new ce({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-3",$$slots:{default:[Sb]},$$scope:{ctx:G}}}),dn=new ce({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-4",$$slots:{default:[Ab]},$$scope:{ctx:G}}}),Rs=new Ve({}),Ks=new S({props:{name:"class transformers.GPT2ForTokenClassification",anchor:"transformers.GPT2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1456"}}),Ys=new S({props:{name:"forward",anchor:"transformers.GPT2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2ForTokenClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPT2ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPT2ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPT2ForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPT2ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPT2ForTokenClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPT2ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPT2ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPT2ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1478",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pn=new et({props:{$$slots:{default:[Wb]},$$scope:{ctx:G}}}),hn=new ce({props:{anchor:"transformers.GPT2ForTokenClassification.forward.example",$$slots:{default:[Ub]},$$scope:{ctx:G}}}),mn=new ce({props:{anchor:"transformers.GPT2ForTokenClassification.forward.example-2",$$slots:{default:[Bb]},$$scope:{ctx:G}}}),Qs=new Ve({}),Zs=new S({props:{name:"class transformers.TFGPT2Model",anchor:"transformers.TFGPT2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L721"}}),fn=new et({props:{$$slots:{default:[Rb]},$$scope:{ctx:G}}}),na=new S({props:{name:"call",anchor:"transformers.TFGPT2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2Model.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFGPT2Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPT2Model.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPT2Model.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPT2Model.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPT2Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPT2Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPT2Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPT2Model.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2Model.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2Model.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFGPT2Model.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFGPT2Model.call.past",description:`<strong>past</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that don&#x2019;t have
their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past"},{anchor:"transformers.TFGPT2Model.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L726",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gn=new et({props:{$$slots:{default:[Kb]},$$scope:{ctx:G}}}),_n=new ce({props:{anchor:"transformers.TFGPT2Model.call.example",$$slots:{default:[Vb]},$$scope:{ctx:G}}}),sa=new Ve({}),aa=new S({props:{name:"class transformers.TFGPT2LMHeadModel",anchor:"transformers.TFGPT2LMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L819"}}),bn=new et({props:{$$slots:{default:[Jb]},$$scope:{ctx:G}}}),da=new S({props:{name:"call",anchor:"transformers.TFGPT2LMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2LMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2LMHeadModel.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFGPT2LMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPT2LMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPT2LMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPT2LMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPT2LMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPT2LMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPT2LMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPT2LMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2LMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2LMHeadModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFGPT2LMHeadModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFGPT2LMHeadModel.call.past",description:`<strong>past</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that don&#x2019;t have
their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past"},{anchor:"transformers.TFGPT2LMHeadModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFGPT2LMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),yn=new et({props:{$$slots:{default:[Xb]},$$scope:{ctx:G}}}),vn=new ce({props:{anchor:"transformers.TFGPT2LMHeadModel.call.example",$$slots:{default:[Yb]},$$scope:{ctx:G}}}),ca=new Ve({}),pa=new S({props:{name:"class transformers.TFGPT2DoubleHeadsModel",anchor:"transformers.TFGPT2DoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2DoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L970"}}),wn=new et({props:{$$slots:{default:[Qb]},$$scope:{ctx:G}}}),fa=new S({props:{name:"call",anchor:"transformers.TFGPT2DoubleHeadsModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mc_token_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2DoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L979",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$n=new et({props:{$$slots:{default:[Zb]},$$scope:{ctx:G}}}),Pn=new ce({props:{anchor:"transformers.TFGPT2DoubleHeadsModel.call.example",$$slots:{default:[ey]},$$scope:{ctx:G}}}),ga=new Ve({}),_a=new S({props:{name:"class transformers.TFGPT2ForSequenceClassification",anchor:"transformers.TFGPT2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1118"}}),Gn=new et({props:{$$slots:{default:[ty]},$$scope:{ctx:G}}}),va=new S({props:{name:"call",anchor:"transformers.TFGPT2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1130",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xn=new et({props:{$$slots:{default:[oy]},$$scope:{ctx:G}}}),jn=new ce({props:{anchor:"transformers.TFGPT2ForSequenceClassification.call.example",$$slots:{default:[ny]},$$scope:{ctx:G}}}),Fn=new ce({props:{anchor:"transformers.TFGPT2ForSequenceClassification.call.example-2",$$slots:{default:[sy]},$$scope:{ctx:G}}}),ka=new Ve({}),wa=new S({props:{name:"class transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/modeling_tf_outputs.py#L894"}}),$a=new Ve({}),Pa=new S({props:{name:"class transformers.FlaxGPT2Model",anchor:"transformers.FlaxGPT2Model",parameters:[{name:"config",val:": GPT2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPT2Model.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_flax_gpt2.py#L665"}}),qa=new S({props:{name:"__call__",anchor:"transformers.FlaxGPT2Model.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPT2Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPT2Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPT2Model.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPT2Model.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPT2Model.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPT2Model.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPT2Model.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_flax_gpt2.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qn=new et({props:{$$slots:{default:[ay]},$$scope:{ctx:G}}}),Cn=new ce({props:{anchor:"transformers.FlaxGPT2Model.__call__.example",$$slots:{default:[ry]},$$scope:{ctx:G}}}),Ca=new Ve({}),Da=new S({props:{name:"class transformers.FlaxGPT2LMHeadModel",anchor:"transformers.FlaxGPT2LMHeadModel",parameters:[{name:"config",val:": GPT2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPT2LMHeadModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_flax_gpt2.py#L743"}}),Wa=new S({props:{name:"__call__",anchor:"transformers.FlaxGPT2LMHeadModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_flax_gpt2.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ln=new et({props:{$$slots:{default:[iy]},$$scope:{ctx:G}}}),On=new ce({props:{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.example",$$slots:{default:[ly]},$$scope:{ctx:G}}}),{c(){d=a("meta"),_=h(),p=a("h1"),u=a("a"),T=a("span"),v(l.$$.fragment),c=h(),j=a("span"),se=n("OpenAI GPT2"),K=h(),N=a("h2"),J=a("a"),ae=a("span"),v(x.$$.fragment),$e=h(),V=a("span"),Pe=n("Overview"),ye=h(),A=a("p"),Me=n("OpenAI GPT-2 model was proposed in "),le=a("a"),X=n("Language Models are Unsupervised Multitask Learners"),Ge=n(` by Alec
Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei and Ilya Sutskever. It\u2019s a causal (unidirectional)
transformer pretrained using language modeling on a very large corpus of ~40 GB of text data.`),ve=h(),B=a("p"),xe=n("The abstract from the paper is the following:"),ke=h(),R=a("p"),me=a("em"),je=n(`GPT-2 is a large transformer-based language model with 1.5 billion parameters, trained on a dataset[1] of 8 million
web pages. GPT-2 is trained with a simple objective: predict the next word, given all of the previous words within some
text. The diversity of the dataset causes this simple goal to contain naturally occurring demonstrations of many tasks
across diverse domains. GPT-2 is a direct scale-up of GPT, with more than 10X the parameters and trained on more than
10X the amount of data.`),ie=h(),E=a("p"),C=n("Tips:"),we=h(),H=a("ul"),ue=a("li"),Fe=n(`GPT-2 is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Y=h(),de=a("li"),ze=n(`GPT-2 was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),q=a("em"),Ee=n("run_generation.py"),Q=n(" example script."),qe=h(),L=a("li"),Z=n("The model can take the "),fe=a("em"),Ce=n("past_key_values"),W=n(" (for PyTorch) or "),ge=a("em"),ee=n("past"),De=n(` (for TF) as input, which is the previously computed
key/value attention pairs. Using this (`),re=a("em"),D=n("past_key_values"),Le=n(" or "),O=a("em"),Oe=n("past"),Ne=n(`) value prevents the model from re-computing
pre-computed values in the context of text generation. For PyTorch, see `),y=a("em"),F=n("past_key_values"),nt=n(` argument of the
`),ne=a("a"),st=n("GPT2Model.forward()"),at=n(" method, or for TF the "),z=a("em"),rt=n("past"),it=n(` argument of the
`),Re=a("a"),lt=n("TFGPT2Model.call()"),dt=n(" method for more information on its usage."),U=h(),I=a("li"),ct=n("Enabling the "),Je=a("em"),te=n("scale_attn_by_inverse_layer_idx"),pt=n(" and "),Xe=a("em"),He=n("reorder_and_upcast_attn"),ht=n(` flags will apply the training stability
improvements from `),oe=a("a"),mt=n("Mistral"),Pc=n(" (for PyTorch only)."),Ql=h(),to=a("p"),Zn=a("a"),Mc=n("Write With Transformer"),Gc=n(` is a webapp created and hosted by
Hugging Face showcasing the generative capabilities of several models. GPT-2 is one of them and is available in five
different sizes: small, medium, large, xl and a distilled version of the small checkpoint: `),Ir=a("em"),xc=n("distilgpt-2"),jc=n("."),Zl=h(),Rt=a("p"),Fc=n("This model was contributed by "),es=a("a"),zc=n("thomwolf"),Ec=n(". The original code can be found "),ts=a("a"),qc=n("here"),Cc=n("."),ed=h(),oo=a("h2"),Do=a("a"),Sr=a("span"),v(os.$$.fragment),Dc=h(),Ar=a("span"),Lc=n("GPT2Config"),td=h(),Pt=a("div"),v(ns.$$.fragment),Oc=h(),St=a("p"),Nc=n("This is the configuration class to store the configuration of a "),Ja=a("a"),Hc=n("GPT2Model"),Ic=n(" or a "),Xa=a("a"),Sc=n("TFGPT2Model"),Ac=n(`. It is used to
instantiate a GPT-2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GPT-2
`),ss=a("a"),Wc=n("gpt2"),Uc=n(" architecture."),Bc=h(),no=a("p"),Rc=n("Configuration objects inherit from "),Ya=a("a"),Kc=n("PretrainedConfig"),Vc=n(` and can be used to control the model outputs. Read the
documentation from `),Qa=a("a"),Jc=n("PretrainedConfig"),Xc=n(" for more information."),Yc=h(),v(Lo.$$.fragment),od=h(),so=a("h2"),Oo=a("a"),Wr=a("span"),v(as.$$.fragment),Qc=h(),Ur=a("span"),Zc=n("GPT2Tokenizer"),nd=h(),_e=a("div"),v(rs.$$.fragment),ep=h(),Br=a("p"),tp=n("Construct a GPT-2 tokenizer. Based on byte-level Byte-Pair-Encoding."),op=h(),Rr=a("p"),np=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),sp=h(),v(No.$$.fragment),ap=h(),is=a("p"),rp=n("You can get around that behavior by passing "),Kr=a("code"),ip=n("add_prefix_space=True"),lp=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),dp=h(),v(Ho.$$.fragment),cp=h(),ls=a("p"),pp=n("This tokenizer inherits from "),Za=a("a"),hp=n("PreTrainedTokenizer"),mp=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),up=h(),er=a("div"),v(ds.$$.fragment),sd=h(),ao=a("h2"),Io=a("a"),Vr=a("span"),v(cs.$$.fragment),fp=h(),Jr=a("span"),gp=n("GPT2TokenizerFast"),ad=h(),Ie=a("div"),v(ps.$$.fragment),_p=h(),hs=a("p"),Tp=n("Construct a \u201Cfast\u201D GPT-2 tokenizer (backed by HuggingFace\u2019s "),Xr=a("em"),bp=n("tokenizers"),yp=n(` library). Based on byte-level
Byte-Pair-Encoding.`),vp=h(),Yr=a("p"),kp=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),wp=h(),v(So.$$.fragment),$p=h(),ms=a("p"),Pp=n("You can get around that behavior by passing "),Qr=a("code"),Mp=n("add_prefix_space=True"),Gp=n(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),xp=h(),v(Ao.$$.fragment),jp=h(),us=a("p"),Fp=n("This tokenizer inherits from "),tr=a("a"),zp=n("PreTrainedTokenizerFast"),Ep=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),rd=h(),ro=a("h2"),Wo=a("a"),Zr=a("span"),v(fs.$$.fragment),qp=h(),ei=a("span"),Cp=n("GPT2 specific outputs"),id=h(),io=a("div"),v(gs.$$.fragment),Dp=h(),ti=a("p"),Lp=n("Base class for outputs of models predicting if two sentences are consecutive or not."),ld=h(),lo=a("div"),v(_s.$$.fragment),Op=h(),oi=a("p"),Np=n("Base class for outputs of models predicting if two sentences are consecutive or not."),dd=h(),co=a("h2"),Uo=a("a"),ni=a("span"),v(Ts.$$.fragment),Hp=h(),si=a("span"),Ip=n("GPT2Model"),cd=h(),Se=a("div"),v(bs.$$.fragment),Sp=h(),ai=a("p"),Ap=n("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),Wp=h(),ys=a("p"),Up=n("This model inherits from "),or=a("a"),Bp=n("PreTrainedModel"),Rp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kp=h(),vs=a("p"),Vp=n("This model is also a PyTorch "),ks=a("a"),Jp=n("torch.nn.Module"),Xp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yp=h(),xt=a("div"),v(ws.$$.fragment),Qp=h(),po=a("p"),Zp=n("The "),nr=a("a"),eh=n("GPT2Model"),th=n(" forward method, overrides the "),ri=a("code"),oh=n("__call__"),nh=n(" special method."),sh=h(),v(Bo.$$.fragment),ah=h(),v(Ro.$$.fragment),rh=h(),jt=a("div"),v($s.$$.fragment),ih=h(),ii=a("p"),lh=n("This is an experimental feature and is a subject to change at a moment\u2019s notice."),dh=h(),li=a("p"),ch=n(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),ph=h(),v(Ko.$$.fragment),hh=h(),Kt=a("div"),v(Ps.$$.fragment),mh=h(),di=a("p"),uh=n("Moves the model to cpu from a model parallel state."),fh=h(),v(Vo.$$.fragment),pd=h(),ho=a("h2"),Jo=a("a"),ci=a("span"),v(Ms.$$.fragment),gh=h(),pi=a("span"),_h=n("GPT2LMHeadModel"),hd=h(),Ae=a("div"),v(Gs.$$.fragment),Th=h(),hi=a("p"),bh=n(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),yh=h(),xs=a("p"),vh=n("This model inherits from "),sr=a("a"),kh=n("PreTrainedModel"),wh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$h=h(),js=a("p"),Ph=n("This model is also a PyTorch "),Fs=a("a"),Mh=n("torch.nn.Module"),Gh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xh=h(),Ft=a("div"),v(zs.$$.fragment),jh=h(),mo=a("p"),Fh=n("The "),ar=a("a"),zh=n("GPT2LMHeadModel"),Eh=n(" forward method, overrides the "),mi=a("code"),qh=n("__call__"),Ch=n(" special method."),Dh=h(),v(Xo.$$.fragment),Lh=h(),v(Yo.$$.fragment),Oh=h(),zt=a("div"),v(Es.$$.fragment),Nh=h(),ui=a("p"),Hh=n("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Ih=h(),fi=a("p"),Sh=n(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Ah=h(),v(Qo.$$.fragment),Wh=h(),Vt=a("div"),v(qs.$$.fragment),Uh=h(),gi=a("p"),Bh=n("Moves the model to cpu from a model parallel state."),Rh=h(),v(Zo.$$.fragment),md=h(),uo=a("h2"),en=a("a"),_i=a("span"),v(Cs.$$.fragment),Kh=h(),Ti=a("span"),Vh=n("GPT2DoubleHeadsModel"),ud=h(),ut=a("div"),v(Ds.$$.fragment),Jh=h(),bi=a("p"),Xh=n(`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Yh=h(),Ls=a("p"),Qh=n("This model inherits from "),rr=a("a"),Zh=n("PreTrainedModel"),em=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tm=h(),Os=a("p"),om=n("This model is also a PyTorch "),Ns=a("a"),nm=n("torch.nn.Module"),sm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),am=h(),Et=a("div"),v(Hs.$$.fragment),rm=h(),fo=a("p"),im=n("The "),ir=a("a"),lm=n("GPT2DoubleHeadsModel"),dm=n(" forward method, overrides the "),yi=a("code"),cm=n("__call__"),pm=n(" special method."),hm=h(),v(tn.$$.fragment),mm=h(),v(on.$$.fragment),fd=h(),go=a("h2"),nn=a("a"),vi=a("span"),v(Is.$$.fragment),um=h(),ki=a("span"),fm=n("GPT2ForSequenceClassification"),gd=h(),We=a("div"),v(Ss.$$.fragment),gm=h(),wi=a("p"),_m=n("The GPT2 Model transformer with a sequence classification head on top (linear layer)."),Tm=h(),lr=a("p"),dr=a("a"),bm=n("GPT2ForSequenceClassification"),ym=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),vm=h(),Mt=a("p"),km=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),$i=a("code"),wm=n("pad_token_id"),$m=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Pi=a("code"),Pm=n("pad_token_id"),Mm=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Mi=a("code"),Gm=n("inputs_embeds"),xm=n(" are passed instead of "),Gi=a("code"),jm=n("input_ids"),Fm=n(`, it does the same (take the last value in
each row of the batch).`),zm=h(),As=a("p"),Em=n("This model inherits from "),cr=a("a"),qm=n("PreTrainedModel"),Cm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dm=h(),Ws=a("p"),Lm=n("This model is also a PyTorch "),Us=a("a"),Om=n("torch.nn.Module"),Nm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hm=h(),Ke=a("div"),v(Bs.$$.fragment),Im=h(),_o=a("p"),Sm=n("The "),pr=a("a"),Am=n("GPT2ForSequenceClassification"),Wm=n(" forward method, overrides the "),xi=a("code"),Um=n("__call__"),Bm=n(" special method."),Rm=h(),v(sn.$$.fragment),Km=h(),v(an.$$.fragment),Vm=h(),v(rn.$$.fragment),Jm=h(),v(ln.$$.fragment),Xm=h(),v(dn.$$.fragment),_d=h(),To=a("h2"),cn=a("a"),ji=a("span"),v(Rs.$$.fragment),Ym=h(),Fi=a("span"),Qm=n("GPT2ForTokenClassification"),Td=h(),ft=a("div"),v(Ks.$$.fragment),Zm=h(),zi=a("p"),eu=n(`GPT2 Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),tu=h(),Vs=a("p"),ou=n("This model inherits from "),hr=a("a"),nu=n("PreTrainedModel"),su=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),au=h(),Js=a("p"),ru=n("This model is also a PyTorch "),Xs=a("a"),iu=n("torch.nn.Module"),lu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),du=h(),gt=a("div"),v(Ys.$$.fragment),cu=h(),bo=a("p"),pu=n("The "),mr=a("a"),hu=n("GPT2ForTokenClassification"),mu=n(" forward method, overrides the "),Ei=a("code"),uu=n("__call__"),fu=n(" special method."),gu=h(),v(pn.$$.fragment),_u=h(),v(hn.$$.fragment),Tu=h(),v(mn.$$.fragment),bd=h(),yo=a("h2"),un=a("a"),qi=a("span"),v(Qs.$$.fragment),bu=h(),Ci=a("span"),yu=n("TFGPT2Model"),yd=h(),Ye=a("div"),v(Zs.$$.fragment),vu=h(),Di=a("p"),ku=n("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),wu=h(),ea=a("p"),$u=n("This model inherits from "),ur=a("a"),Pu=n("TFPreTrainedModel"),Mu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gu=h(),ta=a("p"),xu=n("This model is also a "),oa=a("a"),ju=n("tf.keras.Model"),Fu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zu=h(),v(fn.$$.fragment),Eu=h(),qt=a("div"),v(na.$$.fragment),qu=h(),vo=a("p"),Cu=n("The "),fr=a("a"),Du=n("TFGPT2Model"),Lu=n(" forward method, overrides the "),Li=a("code"),Ou=n("__call__"),Nu=n(" special method."),Hu=h(),v(gn.$$.fragment),Iu=h(),v(_n.$$.fragment),vd=h(),ko=a("h2"),Tn=a("a"),Oi=a("span"),v(sa.$$.fragment),Su=h(),Ni=a("span"),Au=n("TFGPT2LMHeadModel"),kd=h(),Qe=a("div"),v(aa.$$.fragment),Wu=h(),Hi=a("p"),Uu=n(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Bu=h(),ra=a("p"),Ru=n("This model inherits from "),gr=a("a"),Ku=n("TFPreTrainedModel"),Vu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ju=h(),ia=a("p"),Xu=n("This model is also a "),la=a("a"),Yu=n("tf.keras.Model"),Qu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zu=h(),v(bn.$$.fragment),ef=h(),Ct=a("div"),v(da.$$.fragment),tf=h(),wo=a("p"),of=n("The "),_r=a("a"),nf=n("TFGPT2LMHeadModel"),sf=n(" forward method, overrides the "),Ii=a("code"),af=n("__call__"),rf=n(" special method."),lf=h(),v(yn.$$.fragment),df=h(),v(vn.$$.fragment),wd=h(),$o=a("h2"),kn=a("a"),Si=a("span"),v(ca.$$.fragment),cf=h(),Ai=a("span"),pf=n("TFGPT2DoubleHeadsModel"),$d=h(),Ze=a("div"),v(pa.$$.fragment),hf=h(),Wi=a("p"),mf=n(`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),uf=h(),ha=a("p"),ff=n("This model inherits from "),Tr=a("a"),gf=n("TFPreTrainedModel"),_f=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf=h(),ma=a("p"),bf=n("This model is also a "),ua=a("a"),yf=n("tf.keras.Model"),vf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kf=h(),v(wn.$$.fragment),wf=h(),Dt=a("div"),v(fa.$$.fragment),$f=h(),Po=a("p"),Pf=n("The "),br=a("a"),Mf=n("TFGPT2DoubleHeadsModel"),Gf=n(" forward method, overrides the "),Ui=a("code"),xf=n("__call__"),jf=n(" special method."),Ff=h(),v($n.$$.fragment),zf=h(),v(Pn.$$.fragment),Pd=h(),Mo=a("h2"),Mn=a("a"),Bi=a("span"),v(ga.$$.fragment),Ef=h(),Ri=a("span"),qf=n("TFGPT2ForSequenceClassification"),Md=h(),Te=a("div"),v(_a.$$.fragment),Cf=h(),Ki=a("p"),Df=n("The GPT2 Model transformer with a sequence classification head on top (linear layer)."),Lf=h(),yr=a("p"),vr=a("a"),Of=n("TFGPT2ForSequenceClassification"),Nf=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),Hf=h(),Gt=a("p"),If=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Vi=a("code"),Sf=n("pad_token_id"),Af=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ji=a("code"),Wf=n("pad_token_id"),Uf=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Xi=a("code"),Bf=n("inputs_embeds"),Rf=n(" are passed instead of "),Yi=a("code"),Kf=n("input_ids"),Vf=n(`, it does the same (take the last value in
each row of the batch).`),Jf=h(),Ta=a("p"),Xf=n("This model inherits from "),kr=a("a"),Yf=n("TFPreTrainedModel"),Qf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zf=h(),ba=a("p"),eg=n("This model is also a "),ya=a("a"),tg=n("tf.keras.Model"),og=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ng=h(),v(Gn.$$.fragment),sg=h(),_t=a("div"),v(va.$$.fragment),ag=h(),Go=a("p"),rg=n("The "),wr=a("a"),ig=n("TFGPT2ForSequenceClassification"),lg=n(" forward method, overrides the "),Qi=a("code"),dg=n("__call__"),cg=n(" special method."),pg=h(),v(xn.$$.fragment),hg=h(),v(jn.$$.fragment),mg=h(),v(Fn.$$.fragment),Gd=h(),xo=a("h2"),zn=a("a"),Zi=a("span"),v(ka.$$.fragment),ug=h(),el=a("span"),fg=n("TFSequenceClassifierOutputWithPast"),xd=h(),jo=a("div"),v(wa.$$.fragment),gg=h(),tl=a("p"),_g=n("Base class for outputs of sentence classification models."),jd=h(),Fo=a("h2"),En=a("a"),ol=a("span"),v($a.$$.fragment),Tg=h(),nl=a("span"),bg=n("FlaxGPT2Model"),Fd=h(),Ue=a("div"),v(Pa.$$.fragment),yg=h(),sl=a("p"),vg=n("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),kg=h(),Ma=a("p"),wg=n("This model inherits from "),$r=a("a"),$g=n("FlaxPreTrainedModel"),Pg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mg=h(),Ga=a("p"),Gg=n(`This model is also a Flax Linen
`),xa=a("a"),xg=n("flax.nn.Module"),jg=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Fg=h(),al=a("p"),zg=n("Finally, this model supports inherent JAX features such as:"),Eg=h(),At=a("ul"),rl=a("li"),ja=a("a"),qg=n("Just-In-Time (JIT) compilation"),Cg=h(),il=a("li"),Fa=a("a"),Dg=n("Automatic Differentiation"),Lg=h(),ll=a("li"),za=a("a"),Og=n("Vectorization"),Ng=h(),dl=a("li"),Ea=a("a"),Hg=n("Parallelization"),Ig=h(),Lt=a("div"),v(qa.$$.fragment),Sg=h(),zo=a("p"),Ag=n("The "),cl=a("code"),Wg=n("FlaxGPT2PreTrainedModel"),Ug=n(" forward method, overrides the "),pl=a("code"),Bg=n("__call__"),Rg=n(" special method."),Kg=h(),v(qn.$$.fragment),Vg=h(),v(Cn.$$.fragment),zd=h(),Eo=a("h2"),Dn=a("a"),hl=a("span"),v(Ca.$$.fragment),Jg=h(),ml=a("span"),Xg=n("FlaxGPT2LMHeadModel"),Ed=h(),Be=a("div"),v(Da.$$.fragment),Yg=h(),ul=a("p"),Qg=n(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Zg=h(),La=a("p"),e_=n("This model inherits from "),Pr=a("a"),t_=n("FlaxPreTrainedModel"),o_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),n_=h(),Oa=a("p"),s_=n(`This model is also a Flax Linen
`),Na=a("a"),a_=n("flax.nn.Module"),r_=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),i_=h(),fl=a("p"),l_=n("Finally, this model supports inherent JAX features such as:"),d_=h(),Wt=a("ul"),gl=a("li"),Ha=a("a"),c_=n("Just-In-Time (JIT) compilation"),p_=h(),_l=a("li"),Ia=a("a"),h_=n("Automatic Differentiation"),m_=h(),Tl=a("li"),Sa=a("a"),u_=n("Vectorization"),f_=h(),bl=a("li"),Aa=a("a"),g_=n("Parallelization"),__=h(),Ot=a("div"),v(Wa.$$.fragment),T_=h(),qo=a("p"),b_=n("The "),yl=a("code"),y_=n("FlaxGPT2PreTrainedModel"),v_=n(" forward method, overrides the "),vl=a("code"),k_=n("__call__"),w_=n(" special method."),$_=h(),v(Ln.$$.fragment),P_=h(),v(On.$$.fragment),this.h()},l(o){const b=vb('[data-svelte="svelte-1phssyn"]',document.head);d=r(b,"META",{name:!0,content:!0}),b.forEach(t),_=m(o),p=r(o,"H1",{class:!0});var Ua=i(p);u=r(Ua,"A",{id:!0,class:!0,href:!0});var kl=i(u);T=r(kl,"SPAN",{});var wl=i(T);k(l.$$.fragment,wl),wl.forEach(t),kl.forEach(t),c=m(Ua),j=r(Ua,"SPAN",{});var $l=i(j);se=s($l,"OpenAI GPT2"),$l.forEach(t),Ua.forEach(t),K=m(o),N=r(o,"H2",{class:!0});var Ba=i(N);J=r(Ba,"A",{id:!0,class:!0,href:!0});var Pl=i(J);ae=r(Pl,"SPAN",{});var Ml=i(ae);k(x.$$.fragment,Ml),Ml.forEach(t),Pl.forEach(t),$e=m(Ba),V=r(Ba,"SPAN",{});var Gl=i(V);Pe=s(Gl,"Overview"),Gl.forEach(t),Ba.forEach(t),ye=m(o),A=r(o,"P",{});var Ra=i(A);Me=s(Ra,"OpenAI GPT-2 model was proposed in "),le=r(Ra,"A",{href:!0,rel:!0});var xl=i(le);X=s(xl,"Language Models are Unsupervised Multitask Learners"),xl.forEach(t),Ge=s(Ra,` by Alec
Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei and Ilya Sutskever. It\u2019s a causal (unidirectional)
transformer pretrained using language modeling on a very large corpus of ~40 GB of text data.`),Ra.forEach(t),ve=m(o),B=r(o,"P",{});var jl=i(B);xe=s(jl,"The abstract from the paper is the following:"),jl.forEach(t),ke=m(o),R=r(o,"P",{});var Fl=i(R);me=r(Fl,"EM",{});var zl=i(me);je=s(zl,`GPT-2 is a large transformer-based language model with 1.5 billion parameters, trained on a dataset[1] of 8 million
web pages. GPT-2 is trained with a simple objective: predict the next word, given all of the previous words within some
text. The diversity of the dataset causes this simple goal to contain naturally occurring demonstrations of many tasks
across diverse domains. GPT-2 is a direct scale-up of GPT, with more than 10X the parameters and trained on more than
10X the amount of data.`),zl.forEach(t),Fl.forEach(t),ie=m(o),E=r(o,"P",{});var El=i(E);C=s(El,"Tips:"),El.forEach(t),we=m(o),H=r(o,"UL",{});var Ut=i(H);ue=r(Ut,"LI",{});var ql=i(ue);Fe=s(ql,`GPT-2 is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),ql.forEach(t),Y=m(Ut),de=r(Ut,"LI",{});var Ka=i(de);ze=s(Ka,`GPT-2 was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),q=r(Ka,"EM",{});var Cl=i(q);Ee=s(Cl,"run_generation.py"),Cl.forEach(t),Q=s(Ka," example script."),Ka.forEach(t),qe=m(Ut),L=r(Ut,"LI",{});var be=i(L);Z=s(be,"The model can take the "),fe=r(be,"EM",{});var Dl=i(fe);Ce=s(Dl,"past_key_values"),Dl.forEach(t),W=s(be," (for PyTorch) or "),ge=r(be,"EM",{});var Ll=i(ge);ee=s(Ll,"past"),Ll.forEach(t),De=s(be,` (for TF) as input, which is the previously computed
key/value attention pairs. Using this (`),re=r(be,"EM",{});var Ol=i(re);D=s(Ol,"past_key_values"),Ol.forEach(t),Le=s(be," or "),O=r(be,"EM",{});var Nl=i(O);Oe=s(Nl,"past"),Nl.forEach(t),Ne=s(be,`) value prevents the model from re-computing
pre-computed values in the context of text generation. For PyTorch, see `),y=r(be,"EM",{});var Hl=i(y);F=s(Hl,"past_key_values"),Hl.forEach(t),nt=s(be,` argument of the
`),ne=r(be,"A",{href:!0});var Il=i(ne);st=s(Il,"GPT2Model.forward()"),Il.forEach(t),at=s(be," method, or for TF the "),z=r(be,"EM",{});var Sl=i(z);rt=s(Sl,"past"),Sl.forEach(t),it=s(be,` argument of the
`),Re=r(be,"A",{href:!0});var Al=i(Re);lt=s(Al,"TFGPT2Model.call()"),Al.forEach(t),dt=s(be," method for more information on its usage."),be.forEach(t),U=m(Ut),I=r(Ut,"LI",{});var Bt=i(I);ct=s(Bt,"Enabling the "),Je=r(Bt,"EM",{});var Wl=i(Je);te=s(Wl,"scale_attn_by_inverse_layer_idx"),Wl.forEach(t),pt=s(Bt," and "),Xe=r(Bt,"EM",{});var Ul=i(Xe);He=s(Ul,"reorder_and_upcast_attn"),Ul.forEach(t),ht=s(Bt,` flags will apply the training stability
improvements from `),oe=r(Bt,"A",{href:!0,rel:!0});var Bl=i(oe);mt=s(Bl,"Mistral"),Bl.forEach(t),Pc=s(Bt," (for PyTorch only)."),Bt.forEach(t),Ut.forEach(t),Ql=m(o),to=r(o,"P",{});var Nn=i(to);Zn=r(Nn,"A",{href:!0,rel:!0});var Rl=i(Zn);Mc=s(Rl,"Write With Transformer"),Rl.forEach(t),Gc=s(Nn,` is a webapp created and hosted by
Hugging Face showcasing the generative capabilities of several models. GPT-2 is one of them and is available in five
different sizes: small, medium, large, xl and a distilled version of the small checkpoint: `),Ir=r(Nn,"EM",{});var Kl=i(Ir);xc=s(Kl,"distilgpt-2"),Kl.forEach(t),jc=s(Nn,"."),Nn.forEach(t),Zl=m(o),Rt=r(o,"P",{});var Co=i(Rt);Fc=s(Co,"This model was contributed by "),es=r(Co,"A",{href:!0,rel:!0});var Vl=i(es);zc=s(Vl,"thomwolf"),Vl.forEach(t),Ec=s(Co,". The original code can be found "),ts=r(Co,"A",{href:!0,rel:!0});var Jl=i(ts);qc=s(Jl,"here"),Jl.forEach(t),Cc=s(Co,"."),Co.forEach(t),ed=m(o),oo=r(o,"H2",{class:!0});var Va=i(oo);Do=r(Va,"A",{id:!0,class:!0,href:!0});var Xl=i(Do);Sr=r(Xl,"SPAN",{});var Yl=i(Sr);k(os.$$.fragment,Yl),Yl.forEach(t),Xl.forEach(t),Dc=m(Va),Ar=r(Va,"SPAN",{});var x_=i(Ar);Lc=s(x_,"GPT2Config"),x_.forEach(t),Va.forEach(t),td=m(o),Pt=r(o,"DIV",{class:!0});var Hn=i(Pt);k(ns.$$.fragment,Hn),Oc=m(Hn),St=r(Hn,"P",{});var In=i(St);Nc=s(In,"This is the configuration class to store the configuration of a "),Ja=r(In,"A",{href:!0});var j_=i(Ja);Hc=s(j_,"GPT2Model"),j_.forEach(t),Ic=s(In," or a "),Xa=r(In,"A",{href:!0});var F_=i(Xa);Sc=s(F_,"TFGPT2Model"),F_.forEach(t),Ac=s(In,`. It is used to
instantiate a GPT-2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GPT-2
`),ss=r(In,"A",{href:!0,rel:!0});var z_=i(ss);Wc=s(z_,"gpt2"),z_.forEach(t),Uc=s(In," architecture."),In.forEach(t),Bc=m(Hn),no=r(Hn,"P",{});var Mr=i(no);Rc=s(Mr,"Configuration objects inherit from "),Ya=r(Mr,"A",{href:!0});var E_=i(Ya);Kc=s(E_,"PretrainedConfig"),E_.forEach(t),Vc=s(Mr,` and can be used to control the model outputs. Read the
documentation from `),Qa=r(Mr,"A",{href:!0});var q_=i(Qa);Jc=s(q_,"PretrainedConfig"),q_.forEach(t),Xc=s(Mr," for more information."),Mr.forEach(t),Yc=m(Hn),k(Lo.$$.fragment,Hn),Hn.forEach(t),od=m(o),so=r(o,"H2",{class:!0});var Cd=i(so);Oo=r(Cd,"A",{id:!0,class:!0,href:!0});var C_=i(Oo);Wr=r(C_,"SPAN",{});var D_=i(Wr);k(as.$$.fragment,D_),D_.forEach(t),C_.forEach(t),Qc=m(Cd),Ur=r(Cd,"SPAN",{});var L_=i(Ur);Zc=s(L_,"GPT2Tokenizer"),L_.forEach(t),Cd.forEach(t),nd=m(o),_e=r(o,"DIV",{class:!0});var tt=i(_e);k(rs.$$.fragment,tt),ep=m(tt),Br=r(tt,"P",{});var O_=i(Br);tp=s(O_,"Construct a GPT-2 tokenizer. Based on byte-level Byte-Pair-Encoding."),O_.forEach(t),op=m(tt),Rr=r(tt,"P",{});var N_=i(Rr);np=s(N_,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),N_.forEach(t),sp=m(tt),k(No.$$.fragment,tt),ap=m(tt),is=r(tt,"P",{});var Dd=i(is);rp=s(Dd,"You can get around that behavior by passing "),Kr=r(Dd,"CODE",{});var H_=i(Kr);ip=s(H_,"add_prefix_space=True"),H_.forEach(t),lp=s(Dd,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Dd.forEach(t),dp=m(tt),k(Ho.$$.fragment,tt),cp=m(tt),ls=r(tt,"P",{});var Ld=i(ls);pp=s(Ld,"This tokenizer inherits from "),Za=r(Ld,"A",{href:!0});var I_=i(Za);hp=s(I_,"PreTrainedTokenizer"),I_.forEach(t),mp=s(Ld,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ld.forEach(t),up=m(tt),er=r(tt,"DIV",{class:!0});var S_=i(er);k(ds.$$.fragment,S_),S_.forEach(t),tt.forEach(t),sd=m(o),ao=r(o,"H2",{class:!0});var Od=i(ao);Io=r(Od,"A",{id:!0,class:!0,href:!0});var A_=i(Io);Vr=r(A_,"SPAN",{});var W_=i(Vr);k(cs.$$.fragment,W_),W_.forEach(t),A_.forEach(t),fp=m(Od),Jr=r(Od,"SPAN",{});var U_=i(Jr);gp=s(U_,"GPT2TokenizerFast"),U_.forEach(t),Od.forEach(t),ad=m(o),Ie=r(o,"DIV",{class:!0});var Tt=i(Ie);k(ps.$$.fragment,Tt),_p=m(Tt),hs=r(Tt,"P",{});var Nd=i(hs);Tp=s(Nd,"Construct a \u201Cfast\u201D GPT-2 tokenizer (backed by HuggingFace\u2019s "),Xr=r(Nd,"EM",{});var B_=i(Xr);bp=s(B_,"tokenizers"),B_.forEach(t),yp=s(Nd,` library). Based on byte-level
Byte-Pair-Encoding.`),Nd.forEach(t),vp=m(Tt),Yr=r(Tt,"P",{});var R_=i(Yr);kp=s(R_,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),R_.forEach(t),wp=m(Tt),k(So.$$.fragment,Tt),$p=m(Tt),ms=r(Tt,"P",{});var Hd=i(ms);Pp=s(Hd,"You can get around that behavior by passing "),Qr=r(Hd,"CODE",{});var K_=i(Qr);Mp=s(K_,"add_prefix_space=True"),K_.forEach(t),Gp=s(Hd,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Hd.forEach(t),xp=m(Tt),k(Ao.$$.fragment,Tt),jp=m(Tt),us=r(Tt,"P",{});var Id=i(us);Fp=s(Id,"This tokenizer inherits from "),tr=r(Id,"A",{href:!0});var V_=i(tr);zp=s(V_,"PreTrainedTokenizerFast"),V_.forEach(t),Ep=s(Id,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Id.forEach(t),Tt.forEach(t),rd=m(o),ro=r(o,"H2",{class:!0});var Sd=i(ro);Wo=r(Sd,"A",{id:!0,class:!0,href:!0});var J_=i(Wo);Zr=r(J_,"SPAN",{});var X_=i(Zr);k(fs.$$.fragment,X_),X_.forEach(t),J_.forEach(t),qp=m(Sd),ei=r(Sd,"SPAN",{});var Y_=i(ei);Cp=s(Y_,"GPT2 specific outputs"),Y_.forEach(t),Sd.forEach(t),id=m(o),io=r(o,"DIV",{class:!0});var Ad=i(io);k(gs.$$.fragment,Ad),Dp=m(Ad),ti=r(Ad,"P",{});var Q_=i(ti);Lp=s(Q_,"Base class for outputs of models predicting if two sentences are consecutive or not."),Q_.forEach(t),Ad.forEach(t),ld=m(o),lo=r(o,"DIV",{class:!0});var Wd=i(lo);k(_s.$$.fragment,Wd),Op=m(Wd),oi=r(Wd,"P",{});var Z_=i(oi);Np=s(Z_,"Base class for outputs of models predicting if two sentences are consecutive or not."),Z_.forEach(t),Wd.forEach(t),dd=m(o),co=r(o,"H2",{class:!0});var Ud=i(co);Uo=r(Ud,"A",{id:!0,class:!0,href:!0});var eT=i(Uo);ni=r(eT,"SPAN",{});var tT=i(ni);k(Ts.$$.fragment,tT),tT.forEach(t),eT.forEach(t),Hp=m(Ud),si=r(Ud,"SPAN",{});var oT=i(si);Ip=s(oT,"GPT2Model"),oT.forEach(t),Ud.forEach(t),cd=m(o),Se=r(o,"DIV",{class:!0});var bt=i(Se);k(bs.$$.fragment,bt),Sp=m(bt),ai=r(bt,"P",{});var nT=i(ai);Ap=s(nT,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),nT.forEach(t),Wp=m(bt),ys=r(bt,"P",{});var Bd=i(ys);Up=s(Bd,"This model inherits from "),or=r(Bd,"A",{href:!0});var sT=i(or);Bp=s(sT,"PreTrainedModel"),sT.forEach(t),Rp=s(Bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bd.forEach(t),Kp=m(bt),vs=r(bt,"P",{});var Rd=i(vs);Vp=s(Rd,"This model is also a PyTorch "),ks=r(Rd,"A",{href:!0,rel:!0});var aT=i(ks);Jp=s(aT,"torch.nn.Module"),aT.forEach(t),Xp=s(Rd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rd.forEach(t),Yp=m(bt),xt=r(bt,"DIV",{class:!0});var Sn=i(xt);k(ws.$$.fragment,Sn),Qp=m(Sn),po=r(Sn,"P",{});var Gr=i(po);Zp=s(Gr,"The "),nr=r(Gr,"A",{href:!0});var rT=i(nr);eh=s(rT,"GPT2Model"),rT.forEach(t),th=s(Gr," forward method, overrides the "),ri=r(Gr,"CODE",{});var iT=i(ri);oh=s(iT,"__call__"),iT.forEach(t),nh=s(Gr," special method."),Gr.forEach(t),sh=m(Sn),k(Bo.$$.fragment,Sn),ah=m(Sn),k(Ro.$$.fragment,Sn),Sn.forEach(t),rh=m(bt),jt=r(bt,"DIV",{class:!0});var An=i(jt);k($s.$$.fragment,An),ih=m(An),ii=r(An,"P",{});var lT=i(ii);lh=s(lT,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),lT.forEach(t),dh=m(An),li=r(An,"P",{});var dT=i(li);ch=s(dT,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),dT.forEach(t),ph=m(An),k(Ko.$$.fragment,An),An.forEach(t),hh=m(bt),Kt=r(bt,"DIV",{class:!0});var xr=i(Kt);k(Ps.$$.fragment,xr),mh=m(xr),di=r(xr,"P",{});var cT=i(di);uh=s(cT,"Moves the model to cpu from a model parallel state."),cT.forEach(t),fh=m(xr),k(Vo.$$.fragment,xr),xr.forEach(t),bt.forEach(t),pd=m(o),ho=r(o,"H2",{class:!0});var Kd=i(ho);Jo=r(Kd,"A",{id:!0,class:!0,href:!0});var pT=i(Jo);ci=r(pT,"SPAN",{});var hT=i(ci);k(Ms.$$.fragment,hT),hT.forEach(t),pT.forEach(t),gh=m(Kd),pi=r(Kd,"SPAN",{});var mT=i(pi);_h=s(mT,"GPT2LMHeadModel"),mT.forEach(t),Kd.forEach(t),hd=m(o),Ae=r(o,"DIV",{class:!0});var yt=i(Ae);k(Gs.$$.fragment,yt),Th=m(yt),hi=r(yt,"P",{});var uT=i(hi);bh=s(uT,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),uT.forEach(t),yh=m(yt),xs=r(yt,"P",{});var Vd=i(xs);vh=s(Vd,"This model inherits from "),sr=r(Vd,"A",{href:!0});var fT=i(sr);kh=s(fT,"PreTrainedModel"),fT.forEach(t),wh=s(Vd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vd.forEach(t),$h=m(yt),js=r(yt,"P",{});var Jd=i(js);Ph=s(Jd,"This model is also a PyTorch "),Fs=r(Jd,"A",{href:!0,rel:!0});var gT=i(Fs);Mh=s(gT,"torch.nn.Module"),gT.forEach(t),Gh=s(Jd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jd.forEach(t),xh=m(yt),Ft=r(yt,"DIV",{class:!0});var Wn=i(Ft);k(zs.$$.fragment,Wn),jh=m(Wn),mo=r(Wn,"P",{});var jr=i(mo);Fh=s(jr,"The "),ar=r(jr,"A",{href:!0});var _T=i(ar);zh=s(_T,"GPT2LMHeadModel"),_T.forEach(t),Eh=s(jr," forward method, overrides the "),mi=r(jr,"CODE",{});var TT=i(mi);qh=s(TT,"__call__"),TT.forEach(t),Ch=s(jr," special method."),jr.forEach(t),Dh=m(Wn),k(Xo.$$.fragment,Wn),Lh=m(Wn),k(Yo.$$.fragment,Wn),Wn.forEach(t),Oh=m(yt),zt=r(yt,"DIV",{class:!0});var Un=i(zt);k(Es.$$.fragment,Un),Nh=m(Un),ui=r(Un,"P",{});var bT=i(ui);Hh=s(bT,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),bT.forEach(t),Ih=m(Un),fi=r(Un,"P",{});var yT=i(fi);Sh=s(yT,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),yT.forEach(t),Ah=m(Un),k(Qo.$$.fragment,Un),Un.forEach(t),Wh=m(yt),Vt=r(yt,"DIV",{class:!0});var Fr=i(Vt);k(qs.$$.fragment,Fr),Uh=m(Fr),gi=r(Fr,"P",{});var vT=i(gi);Bh=s(vT,"Moves the model to cpu from a model parallel state."),vT.forEach(t),Rh=m(Fr),k(Zo.$$.fragment,Fr),Fr.forEach(t),yt.forEach(t),md=m(o),uo=r(o,"H2",{class:!0});var Xd=i(uo);en=r(Xd,"A",{id:!0,class:!0,href:!0});var kT=i(en);_i=r(kT,"SPAN",{});var wT=i(_i);k(Cs.$$.fragment,wT),wT.forEach(t),kT.forEach(t),Kh=m(Xd),Ti=r(Xd,"SPAN",{});var $T=i(Ti);Vh=s($T,"GPT2DoubleHeadsModel"),$T.forEach(t),Xd.forEach(t),ud=m(o),ut=r(o,"DIV",{class:!0});var Jt=i(ut);k(Ds.$$.fragment,Jt),Jh=m(Jt),bi=r(Jt,"P",{});var PT=i(bi);Xh=s(PT,`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),PT.forEach(t),Yh=m(Jt),Ls=r(Jt,"P",{});var Yd=i(Ls);Qh=s(Yd,"This model inherits from "),rr=r(Yd,"A",{href:!0});var MT=i(rr);Zh=s(MT,"PreTrainedModel"),MT.forEach(t),em=s(Yd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yd.forEach(t),tm=m(Jt),Os=r(Jt,"P",{});var Qd=i(Os);om=s(Qd,"This model is also a PyTorch "),Ns=r(Qd,"A",{href:!0,rel:!0});var GT=i(Ns);nm=s(GT,"torch.nn.Module"),GT.forEach(t),sm=s(Qd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qd.forEach(t),am=m(Jt),Et=r(Jt,"DIV",{class:!0});var Bn=i(Et);k(Hs.$$.fragment,Bn),rm=m(Bn),fo=r(Bn,"P",{});var zr=i(fo);im=s(zr,"The "),ir=r(zr,"A",{href:!0});var xT=i(ir);lm=s(xT,"GPT2DoubleHeadsModel"),xT.forEach(t),dm=s(zr," forward method, overrides the "),yi=r(zr,"CODE",{});var jT=i(yi);cm=s(jT,"__call__"),jT.forEach(t),pm=s(zr," special method."),zr.forEach(t),hm=m(Bn),k(tn.$$.fragment,Bn),mm=m(Bn),k(on.$$.fragment,Bn),Bn.forEach(t),Jt.forEach(t),fd=m(o),go=r(o,"H2",{class:!0});var Zd=i(go);nn=r(Zd,"A",{id:!0,class:!0,href:!0});var FT=i(nn);vi=r(FT,"SPAN",{});var zT=i(vi);k(Is.$$.fragment,zT),zT.forEach(t),FT.forEach(t),um=m(Zd),ki=r(Zd,"SPAN",{});var ET=i(ki);fm=s(ET,"GPT2ForSequenceClassification"),ET.forEach(t),Zd.forEach(t),gd=m(o),We=r(o,"DIV",{class:!0});var vt=i(We);k(Ss.$$.fragment,vt),gm=m(vt),wi=r(vt,"P",{});var qT=i(wi);_m=s(qT,"The GPT2 Model transformer with a sequence classification head on top (linear layer)."),qT.forEach(t),Tm=m(vt),lr=r(vt,"P",{});var M_=i(lr);dr=r(M_,"A",{href:!0});var CT=i(dr);bm=s(CT,"GPT2ForSequenceClassification"),CT.forEach(t),ym=s(M_,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),M_.forEach(t),vm=m(vt),Mt=r(vt,"P",{});var Xt=i(Mt);km=s(Xt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),$i=r(Xt,"CODE",{});var DT=i($i);wm=s(DT,"pad_token_id"),DT.forEach(t),$m=s(Xt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Pi=r(Xt,"CODE",{});var LT=i(Pi);Pm=s(LT,"pad_token_id"),LT.forEach(t),Mm=s(Xt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Mi=r(Xt,"CODE",{});var OT=i(Mi);Gm=s(OT,"inputs_embeds"),OT.forEach(t),xm=s(Xt," are passed instead of "),Gi=r(Xt,"CODE",{});var NT=i(Gi);jm=s(NT,"input_ids"),NT.forEach(t),Fm=s(Xt,`, it does the same (take the last value in
each row of the batch).`),Xt.forEach(t),zm=m(vt),As=r(vt,"P",{});var ec=i(As);Em=s(ec,"This model inherits from "),cr=r(ec,"A",{href:!0});var HT=i(cr);qm=s(HT,"PreTrainedModel"),HT.forEach(t),Cm=s(ec,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ec.forEach(t),Dm=m(vt),Ws=r(vt,"P",{});var tc=i(Ws);Lm=s(tc,"This model is also a PyTorch "),Us=r(tc,"A",{href:!0,rel:!0});var IT=i(Us);Om=s(IT,"torch.nn.Module"),IT.forEach(t),Nm=s(tc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tc.forEach(t),Hm=m(vt),Ke=r(vt,"DIV",{class:!0});var kt=i(Ke);k(Bs.$$.fragment,kt),Im=m(kt),_o=r(kt,"P",{});var Er=i(_o);Sm=s(Er,"The "),pr=r(Er,"A",{href:!0});var ST=i(pr);Am=s(ST,"GPT2ForSequenceClassification"),ST.forEach(t),Wm=s(Er," forward method, overrides the "),xi=r(Er,"CODE",{});var AT=i(xi);Um=s(AT,"__call__"),AT.forEach(t),Bm=s(Er," special method."),Er.forEach(t),Rm=m(kt),k(sn.$$.fragment,kt),Km=m(kt),k(an.$$.fragment,kt),Vm=m(kt),k(rn.$$.fragment,kt),Jm=m(kt),k(ln.$$.fragment,kt),Xm=m(kt),k(dn.$$.fragment,kt),kt.forEach(t),vt.forEach(t),_d=m(o),To=r(o,"H2",{class:!0});var oc=i(To);cn=r(oc,"A",{id:!0,class:!0,href:!0});var WT=i(cn);ji=r(WT,"SPAN",{});var UT=i(ji);k(Rs.$$.fragment,UT),UT.forEach(t),WT.forEach(t),Ym=m(oc),Fi=r(oc,"SPAN",{});var BT=i(Fi);Qm=s(BT,"GPT2ForTokenClassification"),BT.forEach(t),oc.forEach(t),Td=m(o),ft=r(o,"DIV",{class:!0});var Yt=i(ft);k(Ks.$$.fragment,Yt),Zm=m(Yt),zi=r(Yt,"P",{});var RT=i(zi);eu=s(RT,`GPT2 Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),RT.forEach(t),tu=m(Yt),Vs=r(Yt,"P",{});var nc=i(Vs);ou=s(nc,"This model inherits from "),hr=r(nc,"A",{href:!0});var KT=i(hr);nu=s(KT,"PreTrainedModel"),KT.forEach(t),su=s(nc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nc.forEach(t),au=m(Yt),Js=r(Yt,"P",{});var sc=i(Js);ru=s(sc,"This model is also a PyTorch "),Xs=r(sc,"A",{href:!0,rel:!0});var VT=i(Xs);iu=s(VT,"torch.nn.Module"),VT.forEach(t),lu=s(sc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sc.forEach(t),du=m(Yt),gt=r(Yt,"DIV",{class:!0});var Qt=i(gt);k(Ys.$$.fragment,Qt),cu=m(Qt),bo=r(Qt,"P",{});var qr=i(bo);pu=s(qr,"The "),mr=r(qr,"A",{href:!0});var JT=i(mr);hu=s(JT,"GPT2ForTokenClassification"),JT.forEach(t),mu=s(qr," forward method, overrides the "),Ei=r(qr,"CODE",{});var XT=i(Ei);uu=s(XT,"__call__"),XT.forEach(t),fu=s(qr," special method."),qr.forEach(t),gu=m(Qt),k(pn.$$.fragment,Qt),_u=m(Qt),k(hn.$$.fragment,Qt),Tu=m(Qt),k(mn.$$.fragment,Qt),Qt.forEach(t),Yt.forEach(t),bd=m(o),yo=r(o,"H2",{class:!0});var ac=i(yo);un=r(ac,"A",{id:!0,class:!0,href:!0});var YT=i(un);qi=r(YT,"SPAN",{});var QT=i(qi);k(Qs.$$.fragment,QT),QT.forEach(t),YT.forEach(t),bu=m(ac),Ci=r(ac,"SPAN",{});var ZT=i(Ci);yu=s(ZT,"TFGPT2Model"),ZT.forEach(t),ac.forEach(t),yd=m(o),Ye=r(o,"DIV",{class:!0});var Nt=i(Ye);k(Zs.$$.fragment,Nt),vu=m(Nt),Di=r(Nt,"P",{});var e2=i(Di);ku=s(e2,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),e2.forEach(t),wu=m(Nt),ea=r(Nt,"P",{});var rc=i(ea);$u=s(rc,"This model inherits from "),ur=r(rc,"A",{href:!0});var t2=i(ur);Pu=s(t2,"TFPreTrainedModel"),t2.forEach(t),Mu=s(rc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rc.forEach(t),Gu=m(Nt),ta=r(Nt,"P",{});var ic=i(ta);xu=s(ic,"This model is also a "),oa=r(ic,"A",{href:!0,rel:!0});var o2=i(oa);ju=s(o2,"tf.keras.Model"),o2.forEach(t),Fu=s(ic,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ic.forEach(t),zu=m(Nt),k(fn.$$.fragment,Nt),Eu=m(Nt),qt=r(Nt,"DIV",{class:!0});var Rn=i(qt);k(na.$$.fragment,Rn),qu=m(Rn),vo=r(Rn,"P",{});var Cr=i(vo);Cu=s(Cr,"The "),fr=r(Cr,"A",{href:!0});var n2=i(fr);Du=s(n2,"TFGPT2Model"),n2.forEach(t),Lu=s(Cr," forward method, overrides the "),Li=r(Cr,"CODE",{});var s2=i(Li);Ou=s(s2,"__call__"),s2.forEach(t),Nu=s(Cr," special method."),Cr.forEach(t),Hu=m(Rn),k(gn.$$.fragment,Rn),Iu=m(Rn),k(_n.$$.fragment,Rn),Rn.forEach(t),Nt.forEach(t),vd=m(o),ko=r(o,"H2",{class:!0});var lc=i(ko);Tn=r(lc,"A",{id:!0,class:!0,href:!0});var a2=i(Tn);Oi=r(a2,"SPAN",{});var r2=i(Oi);k(sa.$$.fragment,r2),r2.forEach(t),a2.forEach(t),Su=m(lc),Ni=r(lc,"SPAN",{});var i2=i(Ni);Au=s(i2,"TFGPT2LMHeadModel"),i2.forEach(t),lc.forEach(t),kd=m(o),Qe=r(o,"DIV",{class:!0});var Ht=i(Qe);k(aa.$$.fragment,Ht),Wu=m(Ht),Hi=r(Ht,"P",{});var l2=i(Hi);Uu=s(l2,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),l2.forEach(t),Bu=m(Ht),ra=r(Ht,"P",{});var dc=i(ra);Ru=s(dc,"This model inherits from "),gr=r(dc,"A",{href:!0});var d2=i(gr);Ku=s(d2,"TFPreTrainedModel"),d2.forEach(t),Vu=s(dc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dc.forEach(t),Ju=m(Ht),ia=r(Ht,"P",{});var cc=i(ia);Xu=s(cc,"This model is also a "),la=r(cc,"A",{href:!0,rel:!0});var c2=i(la);Yu=s(c2,"tf.keras.Model"),c2.forEach(t),Qu=s(cc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cc.forEach(t),Zu=m(Ht),k(bn.$$.fragment,Ht),ef=m(Ht),Ct=r(Ht,"DIV",{class:!0});var Kn=i(Ct);k(da.$$.fragment,Kn),tf=m(Kn),wo=r(Kn,"P",{});var Dr=i(wo);of=s(Dr,"The "),_r=r(Dr,"A",{href:!0});var p2=i(_r);nf=s(p2,"TFGPT2LMHeadModel"),p2.forEach(t),sf=s(Dr," forward method, overrides the "),Ii=r(Dr,"CODE",{});var h2=i(Ii);af=s(h2,"__call__"),h2.forEach(t),rf=s(Dr," special method."),Dr.forEach(t),lf=m(Kn),k(yn.$$.fragment,Kn),df=m(Kn),k(vn.$$.fragment,Kn),Kn.forEach(t),Ht.forEach(t),wd=m(o),$o=r(o,"H2",{class:!0});var pc=i($o);kn=r(pc,"A",{id:!0,class:!0,href:!0});var m2=i(kn);Si=r(m2,"SPAN",{});var u2=i(Si);k(ca.$$.fragment,u2),u2.forEach(t),m2.forEach(t),cf=m(pc),Ai=r(pc,"SPAN",{});var f2=i(Ai);pf=s(f2,"TFGPT2DoubleHeadsModel"),f2.forEach(t),pc.forEach(t),$d=m(o),Ze=r(o,"DIV",{class:!0});var It=i(Ze);k(pa.$$.fragment,It),hf=m(It),Wi=r(It,"P",{});var g2=i(Wi);mf=s(g2,`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),g2.forEach(t),uf=m(It),ha=r(It,"P",{});var hc=i(ha);ff=s(hc,"This model inherits from "),Tr=r(hc,"A",{href:!0});var _2=i(Tr);gf=s(_2,"TFPreTrainedModel"),_2.forEach(t),_f=s(hc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hc.forEach(t),Tf=m(It),ma=r(It,"P",{});var mc=i(ma);bf=s(mc,"This model is also a "),ua=r(mc,"A",{href:!0,rel:!0});var T2=i(ua);yf=s(T2,"tf.keras.Model"),T2.forEach(t),vf=s(mc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mc.forEach(t),kf=m(It),k(wn.$$.fragment,It),wf=m(It),Dt=r(It,"DIV",{class:!0});var Vn=i(Dt);k(fa.$$.fragment,Vn),$f=m(Vn),Po=r(Vn,"P",{});var Lr=i(Po);Pf=s(Lr,"The "),br=r(Lr,"A",{href:!0});var b2=i(br);Mf=s(b2,"TFGPT2DoubleHeadsModel"),b2.forEach(t),Gf=s(Lr," forward method, overrides the "),Ui=r(Lr,"CODE",{});var y2=i(Ui);xf=s(y2,"__call__"),y2.forEach(t),jf=s(Lr," special method."),Lr.forEach(t),Ff=m(Vn),k($n.$$.fragment,Vn),zf=m(Vn),k(Pn.$$.fragment,Vn),Vn.forEach(t),It.forEach(t),Pd=m(o),Mo=r(o,"H2",{class:!0});var uc=i(Mo);Mn=r(uc,"A",{id:!0,class:!0,href:!0});var v2=i(Mn);Bi=r(v2,"SPAN",{});var k2=i(Bi);k(ga.$$.fragment,k2),k2.forEach(t),v2.forEach(t),Ef=m(uc),Ri=r(uc,"SPAN",{});var w2=i(Ri);qf=s(w2,"TFGPT2ForSequenceClassification"),w2.forEach(t),uc.forEach(t),Md=m(o),Te=r(o,"DIV",{class:!0});var ot=i(Te);k(_a.$$.fragment,ot),Cf=m(ot),Ki=r(ot,"P",{});var $2=i(Ki);Df=s($2,"The GPT2 Model transformer with a sequence classification head on top (linear layer)."),$2.forEach(t),Lf=m(ot),yr=r(ot,"P",{});var G_=i(yr);vr=r(G_,"A",{href:!0});var P2=i(vr);Of=s(P2,"TFGPT2ForSequenceClassification"),P2.forEach(t),Nf=s(G_,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),G_.forEach(t),Hf=m(ot),Gt=r(ot,"P",{});var Zt=i(Gt);If=s(Zt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Vi=r(Zt,"CODE",{});var M2=i(Vi);Sf=s(M2,"pad_token_id"),M2.forEach(t),Af=s(Zt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ji=r(Zt,"CODE",{});var G2=i(Ji);Wf=s(G2,"pad_token_id"),G2.forEach(t),Uf=s(Zt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Xi=r(Zt,"CODE",{});var x2=i(Xi);Bf=s(x2,"inputs_embeds"),x2.forEach(t),Rf=s(Zt," are passed instead of "),Yi=r(Zt,"CODE",{});var j2=i(Yi);Kf=s(j2,"input_ids"),j2.forEach(t),Vf=s(Zt,`, it does the same (take the last value in
each row of the batch).`),Zt.forEach(t),Jf=m(ot),Ta=r(ot,"P",{});var fc=i(Ta);Xf=s(fc,"This model inherits from "),kr=r(fc,"A",{href:!0});var F2=i(kr);Yf=s(F2,"TFPreTrainedModel"),F2.forEach(t),Qf=s(fc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fc.forEach(t),Zf=m(ot),ba=r(ot,"P",{});var gc=i(ba);eg=s(gc,"This model is also a "),ya=r(gc,"A",{href:!0,rel:!0});var z2=i(ya);tg=s(z2,"tf.keras.Model"),z2.forEach(t),og=s(gc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gc.forEach(t),ng=m(ot),k(Gn.$$.fragment,ot),sg=m(ot),_t=r(ot,"DIV",{class:!0});var eo=i(_t);k(va.$$.fragment,eo),ag=m(eo),Go=r(eo,"P",{});var Or=i(Go);rg=s(Or,"The "),wr=r(Or,"A",{href:!0});var E2=i(wr);ig=s(E2,"TFGPT2ForSequenceClassification"),E2.forEach(t),lg=s(Or," forward method, overrides the "),Qi=r(Or,"CODE",{});var q2=i(Qi);dg=s(q2,"__call__"),q2.forEach(t),cg=s(Or," special method."),Or.forEach(t),pg=m(eo),k(xn.$$.fragment,eo),hg=m(eo),k(jn.$$.fragment,eo),mg=m(eo),k(Fn.$$.fragment,eo),eo.forEach(t),ot.forEach(t),Gd=m(o),xo=r(o,"H2",{class:!0});var _c=i(xo);zn=r(_c,"A",{id:!0,class:!0,href:!0});var C2=i(zn);Zi=r(C2,"SPAN",{});var D2=i(Zi);k(ka.$$.fragment,D2),D2.forEach(t),C2.forEach(t),ug=m(_c),el=r(_c,"SPAN",{});var L2=i(el);fg=s(L2,"TFSequenceClassifierOutputWithPast"),L2.forEach(t),_c.forEach(t),xd=m(o),jo=r(o,"DIV",{class:!0});var Tc=i(jo);k(wa.$$.fragment,Tc),gg=m(Tc),tl=r(Tc,"P",{});var O2=i(tl);_g=s(O2,"Base class for outputs of sentence classification models."),O2.forEach(t),Tc.forEach(t),jd=m(o),Fo=r(o,"H2",{class:!0});var bc=i(Fo);En=r(bc,"A",{id:!0,class:!0,href:!0});var N2=i(En);ol=r(N2,"SPAN",{});var H2=i(ol);k($a.$$.fragment,H2),H2.forEach(t),N2.forEach(t),Tg=m(bc),nl=r(bc,"SPAN",{});var I2=i(nl);bg=s(I2,"FlaxGPT2Model"),I2.forEach(t),bc.forEach(t),Fd=m(o),Ue=r(o,"DIV",{class:!0});var wt=i(Ue);k(Pa.$$.fragment,wt),yg=m(wt),sl=r(wt,"P",{});var S2=i(sl);vg=s(S2,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),S2.forEach(t),kg=m(wt),Ma=r(wt,"P",{});var yc=i(Ma);wg=s(yc,"This model inherits from "),$r=r(yc,"A",{href:!0});var A2=i($r);$g=s(A2,"FlaxPreTrainedModel"),A2.forEach(t),Pg=s(yc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yc.forEach(t),Mg=m(wt),Ga=r(wt,"P",{});var vc=i(Ga);Gg=s(vc,`This model is also a Flax Linen
`),xa=r(vc,"A",{href:!0,rel:!0});var W2=i(xa);xg=s(W2,"flax.nn.Module"),W2.forEach(t),jg=s(vc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),vc.forEach(t),Fg=m(wt),al=r(wt,"P",{});var U2=i(al);zg=s(U2,"Finally, this model supports inherent JAX features such as:"),U2.forEach(t),Eg=m(wt),At=r(wt,"UL",{});var Jn=i(At);rl=r(Jn,"LI",{});var B2=i(rl);ja=r(B2,"A",{href:!0,rel:!0});var R2=i(ja);qg=s(R2,"Just-In-Time (JIT) compilation"),R2.forEach(t),B2.forEach(t),Cg=m(Jn),il=r(Jn,"LI",{});var K2=i(il);Fa=r(K2,"A",{href:!0,rel:!0});var V2=i(Fa);Dg=s(V2,"Automatic Differentiation"),V2.forEach(t),K2.forEach(t),Lg=m(Jn),ll=r(Jn,"LI",{});var J2=i(ll);za=r(J2,"A",{href:!0,rel:!0});var X2=i(za);Og=s(X2,"Vectorization"),X2.forEach(t),J2.forEach(t),Ng=m(Jn),dl=r(Jn,"LI",{});var Y2=i(dl);Ea=r(Y2,"A",{href:!0,rel:!0});var Q2=i(Ea);Hg=s(Q2,"Parallelization"),Q2.forEach(t),Y2.forEach(t),Jn.forEach(t),Ig=m(wt),Lt=r(wt,"DIV",{class:!0});var Xn=i(Lt);k(qa.$$.fragment,Xn),Sg=m(Xn),zo=r(Xn,"P",{});var Nr=i(zo);Ag=s(Nr,"The "),cl=r(Nr,"CODE",{});var Z2=i(cl);Wg=s(Z2,"FlaxGPT2PreTrainedModel"),Z2.forEach(t),Ug=s(Nr," forward method, overrides the "),pl=r(Nr,"CODE",{});var eb=i(pl);Bg=s(eb,"__call__"),eb.forEach(t),Rg=s(Nr," special method."),Nr.forEach(t),Kg=m(Xn),k(qn.$$.fragment,Xn),Vg=m(Xn),k(Cn.$$.fragment,Xn),Xn.forEach(t),wt.forEach(t),zd=m(o),Eo=r(o,"H2",{class:!0});var kc=i(Eo);Dn=r(kc,"A",{id:!0,class:!0,href:!0});var tb=i(Dn);hl=r(tb,"SPAN",{});var ob=i(hl);k(Ca.$$.fragment,ob),ob.forEach(t),tb.forEach(t),Jg=m(kc),ml=r(kc,"SPAN",{});var nb=i(ml);Xg=s(nb,"FlaxGPT2LMHeadModel"),nb.forEach(t),kc.forEach(t),Ed=m(o),Be=r(o,"DIV",{class:!0});var $t=i(Be);k(Da.$$.fragment,$t),Yg=m($t),ul=r($t,"P",{});var sb=i(ul);Qg=s(sb,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),sb.forEach(t),Zg=m($t),La=r($t,"P",{});var wc=i(La);e_=s(wc,"This model inherits from "),Pr=r(wc,"A",{href:!0});var ab=i(Pr);t_=s(ab,"FlaxPreTrainedModel"),ab.forEach(t),o_=s(wc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wc.forEach(t),n_=m($t),Oa=r($t,"P",{});var $c=i(Oa);s_=s($c,`This model is also a Flax Linen
`),Na=r($c,"A",{href:!0,rel:!0});var rb=i(Na);a_=s(rb,"flax.nn.Module"),rb.forEach(t),r_=s($c,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$c.forEach(t),i_=m($t),fl=r($t,"P",{});var ib=i(fl);l_=s(ib,"Finally, this model supports inherent JAX features such as:"),ib.forEach(t),d_=m($t),Wt=r($t,"UL",{});var Yn=i(Wt);gl=r(Yn,"LI",{});var lb=i(gl);Ha=r(lb,"A",{href:!0,rel:!0});var db=i(Ha);c_=s(db,"Just-In-Time (JIT) compilation"),db.forEach(t),lb.forEach(t),p_=m(Yn),_l=r(Yn,"LI",{});var cb=i(_l);Ia=r(cb,"A",{href:!0,rel:!0});var pb=i(Ia);h_=s(pb,"Automatic Differentiation"),pb.forEach(t),cb.forEach(t),m_=m(Yn),Tl=r(Yn,"LI",{});var hb=i(Tl);Sa=r(hb,"A",{href:!0,rel:!0});var mb=i(Sa);u_=s(mb,"Vectorization"),mb.forEach(t),hb.forEach(t),f_=m(Yn),bl=r(Yn,"LI",{});var ub=i(bl);Aa=r(ub,"A",{href:!0,rel:!0});var fb=i(Aa);g_=s(fb,"Parallelization"),fb.forEach(t),ub.forEach(t),Yn.forEach(t),__=m($t),Ot=r($t,"DIV",{class:!0});var Qn=i(Ot);k(Wa.$$.fragment,Qn),T_=m(Qn),qo=r(Qn,"P",{});var Hr=i(qo);b_=s(Hr,"The "),yl=r(Hr,"CODE",{});var gb=i(yl);y_=s(gb,"FlaxGPT2PreTrainedModel"),gb.forEach(t),v_=s(Hr," forward method, overrides the "),vl=r(Hr,"CODE",{});var _b=i(vl);k_=s(_b,"__call__"),_b.forEach(t),w_=s(Hr," special method."),Hr.forEach(t),$_=m(Qn),k(Ln.$$.fragment,Qn),P_=m(Qn),k(On.$$.fragment,Qn),Qn.forEach(t),$t.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(cy)),f(u,"id","openai-gpt2"),f(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(u,"href","#openai-gpt2"),f(p,"class","relative group"),f(J,"id","overview"),f(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(J,"href","#overview"),f(N,"class","relative group"),f(le,"href","https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"),f(le,"rel","nofollow"),f(ne,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Model.forward"),f(Re,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2Model.call"),f(oe,"href","https://github.com/stanford-crfm/mistral/"),f(oe,"rel","nofollow"),f(Zn,"href","https://transformer.huggingface.co/doc/gpt2-large"),f(Zn,"rel","nofollow"),f(es,"href","https://huggingface.co/thomwolf"),f(es,"rel","nofollow"),f(ts,"href","https://openai.com/blog/better-language-models/"),f(ts,"rel","nofollow"),f(Do,"id","transformers.GPT2Config"),f(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Do,"href","#transformers.GPT2Config"),f(oo,"class","relative group"),f(Ja,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Model"),f(Xa,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2Model"),f(ss,"href","https://huggingface.co/gpt2"),f(ss,"rel","nofollow"),f(Ya,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Qa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oo,"id","transformers.GPT2Tokenizer"),f(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Oo,"href","#transformers.GPT2Tokenizer"),f(so,"class","relative group"),f(Za,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(er,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Io,"id","transformers.GPT2TokenizerFast"),f(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Io,"href","#transformers.GPT2TokenizerFast"),f(ao,"class","relative group"),f(tr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wo,"id","transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"),f(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Wo,"href","#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"),f(ro,"class","relative group"),f(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Uo,"id","transformers.GPT2Model"),f(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Uo,"href","#transformers.GPT2Model"),f(co,"class","relative group"),f(or,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ks,"rel","nofollow"),f(nr,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Model"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jo,"id","transformers.GPT2LMHeadModel"),f(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jo,"href","#transformers.GPT2LMHeadModel"),f(ho,"class","relative group"),f(sr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Fs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Fs,"rel","nofollow"),f(ar,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2LMHeadModel"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(en,"id","transformers.GPT2DoubleHeadsModel"),f(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(en,"href","#transformers.GPT2DoubleHeadsModel"),f(uo,"class","relative group"),f(rr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ns,"rel","nofollow"),f(ir,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel"),f(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nn,"id","transformers.GPT2ForSequenceClassification"),f(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(nn,"href","#transformers.GPT2ForSequenceClassification"),f(go,"class","relative group"),f(dr,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2ForSequenceClassification"),f(cr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Us,"rel","nofollow"),f(pr,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2ForSequenceClassification"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(cn,"id","transformers.GPT2ForTokenClassification"),f(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(cn,"href","#transformers.GPT2ForTokenClassification"),f(To,"class","relative group"),f(hr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Xs,"rel","nofollow"),f(mr,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2ForTokenClassification"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(un,"id","transformers.TFGPT2Model"),f(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(un,"href","#transformers.TFGPT2Model"),f(yo,"class","relative group"),f(ur,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(oa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(oa,"rel","nofollow"),f(fr,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2Model"),f(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Tn,"id","transformers.TFGPT2LMHeadModel"),f(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Tn,"href","#transformers.TFGPT2LMHeadModel"),f(ko,"class","relative group"),f(gr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(la,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(la,"rel","nofollow"),f(_r,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2LMHeadModel"),f(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(kn,"id","transformers.TFGPT2DoubleHeadsModel"),f(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(kn,"href","#transformers.TFGPT2DoubleHeadsModel"),f($o,"class","relative group"),f(Tr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ua,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ua,"rel","nofollow"),f(br,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel"),f(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mn,"id","transformers.TFGPT2ForSequenceClassification"),f(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Mn,"href","#transformers.TFGPT2ForSequenceClassification"),f(Mo,"class","relative group"),f(vr,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2ForSequenceClassification"),f(kr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ya,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ya,"rel","nofollow"),f(wr,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2ForSequenceClassification"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zn,"id","transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"),f(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(zn,"href","#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"),f(xo,"class","relative group"),f(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(En,"id","transformers.FlaxGPT2Model"),f(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(En,"href","#transformers.FlaxGPT2Model"),f(Fo,"class","relative group"),f($r,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(xa,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(xa,"rel","nofollow"),f(ja,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ja,"rel","nofollow"),f(Fa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Fa,"rel","nofollow"),f(za,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(za,"rel","nofollow"),f(Ea,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ea,"rel","nofollow"),f(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Dn,"id","transformers.FlaxGPT2LMHeadModel"),f(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Dn,"href","#transformers.FlaxGPT2LMHeadModel"),f(Eo,"class","relative group"),f(Pr,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Na,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Na,"rel","nofollow"),f(Ha,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ha,"rel","nofollow"),f(Ia,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ia,"rel","nofollow"),f(Sa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Sa,"rel","nofollow"),f(Aa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Aa,"rel","nofollow"),f(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),g(o,_,b),g(o,p,b),e(p,u),e(u,T),w(l,T,null),e(p,c),e(p,j),e(j,se),g(o,K,b),g(o,N,b),e(N,J),e(J,ae),w(x,ae,null),e(N,$e),e(N,V),e(V,Pe),g(o,ye,b),g(o,A,b),e(A,Me),e(A,le),e(le,X),e(A,Ge),g(o,ve,b),g(o,B,b),e(B,xe),g(o,ke,b),g(o,R,b),e(R,me),e(me,je),g(o,ie,b),g(o,E,b),e(E,C),g(o,we,b),g(o,H,b),e(H,ue),e(ue,Fe),e(H,Y),e(H,de),e(de,ze),e(de,q),e(q,Ee),e(de,Q),e(H,qe),e(H,L),e(L,Z),e(L,fe),e(fe,Ce),e(L,W),e(L,ge),e(ge,ee),e(L,De),e(L,re),e(re,D),e(L,Le),e(L,O),e(O,Oe),e(L,Ne),e(L,y),e(y,F),e(L,nt),e(L,ne),e(ne,st),e(L,at),e(L,z),e(z,rt),e(L,it),e(L,Re),e(Re,lt),e(L,dt),e(H,U),e(H,I),e(I,ct),e(I,Je),e(Je,te),e(I,pt),e(I,Xe),e(Xe,He),e(I,ht),e(I,oe),e(oe,mt),e(I,Pc),g(o,Ql,b),g(o,to,b),e(to,Zn),e(Zn,Mc),e(to,Gc),e(to,Ir),e(Ir,xc),e(to,jc),g(o,Zl,b),g(o,Rt,b),e(Rt,Fc),e(Rt,es),e(es,zc),e(Rt,Ec),e(Rt,ts),e(ts,qc),e(Rt,Cc),g(o,ed,b),g(o,oo,b),e(oo,Do),e(Do,Sr),w(os,Sr,null),e(oo,Dc),e(oo,Ar),e(Ar,Lc),g(o,td,b),g(o,Pt,b),w(ns,Pt,null),e(Pt,Oc),e(Pt,St),e(St,Nc),e(St,Ja),e(Ja,Hc),e(St,Ic),e(St,Xa),e(Xa,Sc),e(St,Ac),e(St,ss),e(ss,Wc),e(St,Uc),e(Pt,Bc),e(Pt,no),e(no,Rc),e(no,Ya),e(Ya,Kc),e(no,Vc),e(no,Qa),e(Qa,Jc),e(no,Xc),e(Pt,Yc),w(Lo,Pt,null),g(o,od,b),g(o,so,b),e(so,Oo),e(Oo,Wr),w(as,Wr,null),e(so,Qc),e(so,Ur),e(Ur,Zc),g(o,nd,b),g(o,_e,b),w(rs,_e,null),e(_e,ep),e(_e,Br),e(Br,tp),e(_e,op),e(_e,Rr),e(Rr,np),e(_e,sp),w(No,_e,null),e(_e,ap),e(_e,is),e(is,rp),e(is,Kr),e(Kr,ip),e(is,lp),e(_e,dp),w(Ho,_e,null),e(_e,cp),e(_e,ls),e(ls,pp),e(ls,Za),e(Za,hp),e(ls,mp),e(_e,up),e(_e,er),w(ds,er,null),g(o,sd,b),g(o,ao,b),e(ao,Io),e(Io,Vr),w(cs,Vr,null),e(ao,fp),e(ao,Jr),e(Jr,gp),g(o,ad,b),g(o,Ie,b),w(ps,Ie,null),e(Ie,_p),e(Ie,hs),e(hs,Tp),e(hs,Xr),e(Xr,bp),e(hs,yp),e(Ie,vp),e(Ie,Yr),e(Yr,kp),e(Ie,wp),w(So,Ie,null),e(Ie,$p),e(Ie,ms),e(ms,Pp),e(ms,Qr),e(Qr,Mp),e(ms,Gp),e(Ie,xp),w(Ao,Ie,null),e(Ie,jp),e(Ie,us),e(us,Fp),e(us,tr),e(tr,zp),e(us,Ep),g(o,rd,b),g(o,ro,b),e(ro,Wo),e(Wo,Zr),w(fs,Zr,null),e(ro,qp),e(ro,ei),e(ei,Cp),g(o,id,b),g(o,io,b),w(gs,io,null),e(io,Dp),e(io,ti),e(ti,Lp),g(o,ld,b),g(o,lo,b),w(_s,lo,null),e(lo,Op),e(lo,oi),e(oi,Np),g(o,dd,b),g(o,co,b),e(co,Uo),e(Uo,ni),w(Ts,ni,null),e(co,Hp),e(co,si),e(si,Ip),g(o,cd,b),g(o,Se,b),w(bs,Se,null),e(Se,Sp),e(Se,ai),e(ai,Ap),e(Se,Wp),e(Se,ys),e(ys,Up),e(ys,or),e(or,Bp),e(ys,Rp),e(Se,Kp),e(Se,vs),e(vs,Vp),e(vs,ks),e(ks,Jp),e(vs,Xp),e(Se,Yp),e(Se,xt),w(ws,xt,null),e(xt,Qp),e(xt,po),e(po,Zp),e(po,nr),e(nr,eh),e(po,th),e(po,ri),e(ri,oh),e(po,nh),e(xt,sh),w(Bo,xt,null),e(xt,ah),w(Ro,xt,null),e(Se,rh),e(Se,jt),w($s,jt,null),e(jt,ih),e(jt,ii),e(ii,lh),e(jt,dh),e(jt,li),e(li,ch),e(jt,ph),w(Ko,jt,null),e(Se,hh),e(Se,Kt),w(Ps,Kt,null),e(Kt,mh),e(Kt,di),e(di,uh),e(Kt,fh),w(Vo,Kt,null),g(o,pd,b),g(o,ho,b),e(ho,Jo),e(Jo,ci),w(Ms,ci,null),e(ho,gh),e(ho,pi),e(pi,_h),g(o,hd,b),g(o,Ae,b),w(Gs,Ae,null),e(Ae,Th),e(Ae,hi),e(hi,bh),e(Ae,yh),e(Ae,xs),e(xs,vh),e(xs,sr),e(sr,kh),e(xs,wh),e(Ae,$h),e(Ae,js),e(js,Ph),e(js,Fs),e(Fs,Mh),e(js,Gh),e(Ae,xh),e(Ae,Ft),w(zs,Ft,null),e(Ft,jh),e(Ft,mo),e(mo,Fh),e(mo,ar),e(ar,zh),e(mo,Eh),e(mo,mi),e(mi,qh),e(mo,Ch),e(Ft,Dh),w(Xo,Ft,null),e(Ft,Lh),w(Yo,Ft,null),e(Ae,Oh),e(Ae,zt),w(Es,zt,null),e(zt,Nh),e(zt,ui),e(ui,Hh),e(zt,Ih),e(zt,fi),e(fi,Sh),e(zt,Ah),w(Qo,zt,null),e(Ae,Wh),e(Ae,Vt),w(qs,Vt,null),e(Vt,Uh),e(Vt,gi),e(gi,Bh),e(Vt,Rh),w(Zo,Vt,null),g(o,md,b),g(o,uo,b),e(uo,en),e(en,_i),w(Cs,_i,null),e(uo,Kh),e(uo,Ti),e(Ti,Vh),g(o,ud,b),g(o,ut,b),w(Ds,ut,null),e(ut,Jh),e(ut,bi),e(bi,Xh),e(ut,Yh),e(ut,Ls),e(Ls,Qh),e(Ls,rr),e(rr,Zh),e(Ls,em),e(ut,tm),e(ut,Os),e(Os,om),e(Os,Ns),e(Ns,nm),e(Os,sm),e(ut,am),e(ut,Et),w(Hs,Et,null),e(Et,rm),e(Et,fo),e(fo,im),e(fo,ir),e(ir,lm),e(fo,dm),e(fo,yi),e(yi,cm),e(fo,pm),e(Et,hm),w(tn,Et,null),e(Et,mm),w(on,Et,null),g(o,fd,b),g(o,go,b),e(go,nn),e(nn,vi),w(Is,vi,null),e(go,um),e(go,ki),e(ki,fm),g(o,gd,b),g(o,We,b),w(Ss,We,null),e(We,gm),e(We,wi),e(wi,_m),e(We,Tm),e(We,lr),e(lr,dr),e(dr,bm),e(lr,ym),e(We,vm),e(We,Mt),e(Mt,km),e(Mt,$i),e($i,wm),e(Mt,$m),e(Mt,Pi),e(Pi,Pm),e(Mt,Mm),e(Mt,Mi),e(Mi,Gm),e(Mt,xm),e(Mt,Gi),e(Gi,jm),e(Mt,Fm),e(We,zm),e(We,As),e(As,Em),e(As,cr),e(cr,qm),e(As,Cm),e(We,Dm),e(We,Ws),e(Ws,Lm),e(Ws,Us),e(Us,Om),e(Ws,Nm),e(We,Hm),e(We,Ke),w(Bs,Ke,null),e(Ke,Im),e(Ke,_o),e(_o,Sm),e(_o,pr),e(pr,Am),e(_o,Wm),e(_o,xi),e(xi,Um),e(_o,Bm),e(Ke,Rm),w(sn,Ke,null),e(Ke,Km),w(an,Ke,null),e(Ke,Vm),w(rn,Ke,null),e(Ke,Jm),w(ln,Ke,null),e(Ke,Xm),w(dn,Ke,null),g(o,_d,b),g(o,To,b),e(To,cn),e(cn,ji),w(Rs,ji,null),e(To,Ym),e(To,Fi),e(Fi,Qm),g(o,Td,b),g(o,ft,b),w(Ks,ft,null),e(ft,Zm),e(ft,zi),e(zi,eu),e(ft,tu),e(ft,Vs),e(Vs,ou),e(Vs,hr),e(hr,nu),e(Vs,su),e(ft,au),e(ft,Js),e(Js,ru),e(Js,Xs),e(Xs,iu),e(Js,lu),e(ft,du),e(ft,gt),w(Ys,gt,null),e(gt,cu),e(gt,bo),e(bo,pu),e(bo,mr),e(mr,hu),e(bo,mu),e(bo,Ei),e(Ei,uu),e(bo,fu),e(gt,gu),w(pn,gt,null),e(gt,_u),w(hn,gt,null),e(gt,Tu),w(mn,gt,null),g(o,bd,b),g(o,yo,b),e(yo,un),e(un,qi),w(Qs,qi,null),e(yo,bu),e(yo,Ci),e(Ci,yu),g(o,yd,b),g(o,Ye,b),w(Zs,Ye,null),e(Ye,vu),e(Ye,Di),e(Di,ku),e(Ye,wu),e(Ye,ea),e(ea,$u),e(ea,ur),e(ur,Pu),e(ea,Mu),e(Ye,Gu),e(Ye,ta),e(ta,xu),e(ta,oa),e(oa,ju),e(ta,Fu),e(Ye,zu),w(fn,Ye,null),e(Ye,Eu),e(Ye,qt),w(na,qt,null),e(qt,qu),e(qt,vo),e(vo,Cu),e(vo,fr),e(fr,Du),e(vo,Lu),e(vo,Li),e(Li,Ou),e(vo,Nu),e(qt,Hu),w(gn,qt,null),e(qt,Iu),w(_n,qt,null),g(o,vd,b),g(o,ko,b),e(ko,Tn),e(Tn,Oi),w(sa,Oi,null),e(ko,Su),e(ko,Ni),e(Ni,Au),g(o,kd,b),g(o,Qe,b),w(aa,Qe,null),e(Qe,Wu),e(Qe,Hi),e(Hi,Uu),e(Qe,Bu),e(Qe,ra),e(ra,Ru),e(ra,gr),e(gr,Ku),e(ra,Vu),e(Qe,Ju),e(Qe,ia),e(ia,Xu),e(ia,la),e(la,Yu),e(ia,Qu),e(Qe,Zu),w(bn,Qe,null),e(Qe,ef),e(Qe,Ct),w(da,Ct,null),e(Ct,tf),e(Ct,wo),e(wo,of),e(wo,_r),e(_r,nf),e(wo,sf),e(wo,Ii),e(Ii,af),e(wo,rf),e(Ct,lf),w(yn,Ct,null),e(Ct,df),w(vn,Ct,null),g(o,wd,b),g(o,$o,b),e($o,kn),e(kn,Si),w(ca,Si,null),e($o,cf),e($o,Ai),e(Ai,pf),g(o,$d,b),g(o,Ze,b),w(pa,Ze,null),e(Ze,hf),e(Ze,Wi),e(Wi,mf),e(Ze,uf),e(Ze,ha),e(ha,ff),e(ha,Tr),e(Tr,gf),e(ha,_f),e(Ze,Tf),e(Ze,ma),e(ma,bf),e(ma,ua),e(ua,yf),e(ma,vf),e(Ze,kf),w(wn,Ze,null),e(Ze,wf),e(Ze,Dt),w(fa,Dt,null),e(Dt,$f),e(Dt,Po),e(Po,Pf),e(Po,br),e(br,Mf),e(Po,Gf),e(Po,Ui),e(Ui,xf),e(Po,jf),e(Dt,Ff),w($n,Dt,null),e(Dt,zf),w(Pn,Dt,null),g(o,Pd,b),g(o,Mo,b),e(Mo,Mn),e(Mn,Bi),w(ga,Bi,null),e(Mo,Ef),e(Mo,Ri),e(Ri,qf),g(o,Md,b),g(o,Te,b),w(_a,Te,null),e(Te,Cf),e(Te,Ki),e(Ki,Df),e(Te,Lf),e(Te,yr),e(yr,vr),e(vr,Of),e(yr,Nf),e(Te,Hf),e(Te,Gt),e(Gt,If),e(Gt,Vi),e(Vi,Sf),e(Gt,Af),e(Gt,Ji),e(Ji,Wf),e(Gt,Uf),e(Gt,Xi),e(Xi,Bf),e(Gt,Rf),e(Gt,Yi),e(Yi,Kf),e(Gt,Vf),e(Te,Jf),e(Te,Ta),e(Ta,Xf),e(Ta,kr),e(kr,Yf),e(Ta,Qf),e(Te,Zf),e(Te,ba),e(ba,eg),e(ba,ya),e(ya,tg),e(ba,og),e(Te,ng),w(Gn,Te,null),e(Te,sg),e(Te,_t),w(va,_t,null),e(_t,ag),e(_t,Go),e(Go,rg),e(Go,wr),e(wr,ig),e(Go,lg),e(Go,Qi),e(Qi,dg),e(Go,cg),e(_t,pg),w(xn,_t,null),e(_t,hg),w(jn,_t,null),e(_t,mg),w(Fn,_t,null),g(o,Gd,b),g(o,xo,b),e(xo,zn),e(zn,Zi),w(ka,Zi,null),e(xo,ug),e(xo,el),e(el,fg),g(o,xd,b),g(o,jo,b),w(wa,jo,null),e(jo,gg),e(jo,tl),e(tl,_g),g(o,jd,b),g(o,Fo,b),e(Fo,En),e(En,ol),w($a,ol,null),e(Fo,Tg),e(Fo,nl),e(nl,bg),g(o,Fd,b),g(o,Ue,b),w(Pa,Ue,null),e(Ue,yg),e(Ue,sl),e(sl,vg),e(Ue,kg),e(Ue,Ma),e(Ma,wg),e(Ma,$r),e($r,$g),e(Ma,Pg),e(Ue,Mg),e(Ue,Ga),e(Ga,Gg),e(Ga,xa),e(xa,xg),e(Ga,jg),e(Ue,Fg),e(Ue,al),e(al,zg),e(Ue,Eg),e(Ue,At),e(At,rl),e(rl,ja),e(ja,qg),e(At,Cg),e(At,il),e(il,Fa),e(Fa,Dg),e(At,Lg),e(At,ll),e(ll,za),e(za,Og),e(At,Ng),e(At,dl),e(dl,Ea),e(Ea,Hg),e(Ue,Ig),e(Ue,Lt),w(qa,Lt,null),e(Lt,Sg),e(Lt,zo),e(zo,Ag),e(zo,cl),e(cl,Wg),e(zo,Ug),e(zo,pl),e(pl,Bg),e(zo,Rg),e(Lt,Kg),w(qn,Lt,null),e(Lt,Vg),w(Cn,Lt,null),g(o,zd,b),g(o,Eo,b),e(Eo,Dn),e(Dn,hl),w(Ca,hl,null),e(Eo,Jg),e(Eo,ml),e(ml,Xg),g(o,Ed,b),g(o,Be,b),w(Da,Be,null),e(Be,Yg),e(Be,ul),e(ul,Qg),e(Be,Zg),e(Be,La),e(La,e_),e(La,Pr),e(Pr,t_),e(La,o_),e(Be,n_),e(Be,Oa),e(Oa,s_),e(Oa,Na),e(Na,a_),e(Oa,r_),e(Be,i_),e(Be,fl),e(fl,l_),e(Be,d_),e(Be,Wt),e(Wt,gl),e(gl,Ha),e(Ha,c_),e(Wt,p_),e(Wt,_l),e(_l,Ia),e(Ia,h_),e(Wt,m_),e(Wt,Tl),e(Tl,Sa),e(Sa,u_),e(Wt,f_),e(Wt,bl),e(bl,Aa),e(Aa,g_),e(Be,__),e(Be,Ot),w(Wa,Ot,null),e(Ot,T_),e(Ot,qo),e(qo,b_),e(qo,yl),e(yl,y_),e(qo,v_),e(qo,vl),e(vl,k_),e(qo,w_),e(Ot,$_),w(Ln,Ot,null),e(Ot,P_),w(On,Ot,null),qd=!0},p(o,[b]){const Ua={};b&2&&(Ua.$$scope={dirty:b,ctx:o}),Lo.$set(Ua);const kl={};b&2&&(kl.$$scope={dirty:b,ctx:o}),No.$set(kl);const wl={};b&2&&(wl.$$scope={dirty:b,ctx:o}),Ho.$set(wl);const $l={};b&2&&($l.$$scope={dirty:b,ctx:o}),So.$set($l);const Ba={};b&2&&(Ba.$$scope={dirty:b,ctx:o}),Ao.$set(Ba);const Pl={};b&2&&(Pl.$$scope={dirty:b,ctx:o}),Bo.$set(Pl);const Ml={};b&2&&(Ml.$$scope={dirty:b,ctx:o}),Ro.$set(Ml);const Gl={};b&2&&(Gl.$$scope={dirty:b,ctx:o}),Ko.$set(Gl);const Ra={};b&2&&(Ra.$$scope={dirty:b,ctx:o}),Vo.$set(Ra);const xl={};b&2&&(xl.$$scope={dirty:b,ctx:o}),Xo.$set(xl);const jl={};b&2&&(jl.$$scope={dirty:b,ctx:o}),Yo.$set(jl);const Fl={};b&2&&(Fl.$$scope={dirty:b,ctx:o}),Qo.$set(Fl);const zl={};b&2&&(zl.$$scope={dirty:b,ctx:o}),Zo.$set(zl);const El={};b&2&&(El.$$scope={dirty:b,ctx:o}),tn.$set(El);const Ut={};b&2&&(Ut.$$scope={dirty:b,ctx:o}),on.$set(Ut);const ql={};b&2&&(ql.$$scope={dirty:b,ctx:o}),sn.$set(ql);const Ka={};b&2&&(Ka.$$scope={dirty:b,ctx:o}),an.$set(Ka);const Cl={};b&2&&(Cl.$$scope={dirty:b,ctx:o}),rn.$set(Cl);const be={};b&2&&(be.$$scope={dirty:b,ctx:o}),ln.$set(be);const Dl={};b&2&&(Dl.$$scope={dirty:b,ctx:o}),dn.$set(Dl);const Ll={};b&2&&(Ll.$$scope={dirty:b,ctx:o}),pn.$set(Ll);const Ol={};b&2&&(Ol.$$scope={dirty:b,ctx:o}),hn.$set(Ol);const Nl={};b&2&&(Nl.$$scope={dirty:b,ctx:o}),mn.$set(Nl);const Hl={};b&2&&(Hl.$$scope={dirty:b,ctx:o}),fn.$set(Hl);const Il={};b&2&&(Il.$$scope={dirty:b,ctx:o}),gn.$set(Il);const Sl={};b&2&&(Sl.$$scope={dirty:b,ctx:o}),_n.$set(Sl);const Al={};b&2&&(Al.$$scope={dirty:b,ctx:o}),bn.$set(Al);const Bt={};b&2&&(Bt.$$scope={dirty:b,ctx:o}),yn.$set(Bt);const Wl={};b&2&&(Wl.$$scope={dirty:b,ctx:o}),vn.$set(Wl);const Ul={};b&2&&(Ul.$$scope={dirty:b,ctx:o}),wn.$set(Ul);const Bl={};b&2&&(Bl.$$scope={dirty:b,ctx:o}),$n.$set(Bl);const Nn={};b&2&&(Nn.$$scope={dirty:b,ctx:o}),Pn.$set(Nn);const Rl={};b&2&&(Rl.$$scope={dirty:b,ctx:o}),Gn.$set(Rl);const Kl={};b&2&&(Kl.$$scope={dirty:b,ctx:o}),xn.$set(Kl);const Co={};b&2&&(Co.$$scope={dirty:b,ctx:o}),jn.$set(Co);const Vl={};b&2&&(Vl.$$scope={dirty:b,ctx:o}),Fn.$set(Vl);const Jl={};b&2&&(Jl.$$scope={dirty:b,ctx:o}),qn.$set(Jl);const Va={};b&2&&(Va.$$scope={dirty:b,ctx:o}),Cn.$set(Va);const Xl={};b&2&&(Xl.$$scope={dirty:b,ctx:o}),Ln.$set(Xl);const Yl={};b&2&&(Yl.$$scope={dirty:b,ctx:o}),On.$set(Yl)},i(o){qd||($(l.$$.fragment,o),$(x.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(Lo.$$.fragment,o),$(as.$$.fragment,o),$(rs.$$.fragment,o),$(No.$$.fragment,o),$(Ho.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(So.$$.fragment,o),$(Ao.$$.fragment,o),$(fs.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(Ts.$$.fragment,o),$(bs.$$.fragment,o),$(ws.$$.fragment,o),$(Bo.$$.fragment,o),$(Ro.$$.fragment,o),$($s.$$.fragment,o),$(Ko.$$.fragment,o),$(Ps.$$.fragment,o),$(Vo.$$.fragment,o),$(Ms.$$.fragment,o),$(Gs.$$.fragment,o),$(zs.$$.fragment,o),$(Xo.$$.fragment,o),$(Yo.$$.fragment,o),$(Es.$$.fragment,o),$(Qo.$$.fragment,o),$(qs.$$.fragment,o),$(Zo.$$.fragment,o),$(Cs.$$.fragment,o),$(Ds.$$.fragment,o),$(Hs.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(Is.$$.fragment,o),$(Ss.$$.fragment,o),$(Bs.$$.fragment,o),$(sn.$$.fragment,o),$(an.$$.fragment,o),$(rn.$$.fragment,o),$(ln.$$.fragment,o),$(dn.$$.fragment,o),$(Rs.$$.fragment,o),$(Ks.$$.fragment,o),$(Ys.$$.fragment,o),$(pn.$$.fragment,o),$(hn.$$.fragment,o),$(mn.$$.fragment,o),$(Qs.$$.fragment,o),$(Zs.$$.fragment,o),$(fn.$$.fragment,o),$(na.$$.fragment,o),$(gn.$$.fragment,o),$(_n.$$.fragment,o),$(sa.$$.fragment,o),$(aa.$$.fragment,o),$(bn.$$.fragment,o),$(da.$$.fragment,o),$(yn.$$.fragment,o),$(vn.$$.fragment,o),$(ca.$$.fragment,o),$(pa.$$.fragment,o),$(wn.$$.fragment,o),$(fa.$$.fragment,o),$($n.$$.fragment,o),$(Pn.$$.fragment,o),$(ga.$$.fragment,o),$(_a.$$.fragment,o),$(Gn.$$.fragment,o),$(va.$$.fragment,o),$(xn.$$.fragment,o),$(jn.$$.fragment,o),$(Fn.$$.fragment,o),$(ka.$$.fragment,o),$(wa.$$.fragment,o),$($a.$$.fragment,o),$(Pa.$$.fragment,o),$(qa.$$.fragment,o),$(qn.$$.fragment,o),$(Cn.$$.fragment,o),$(Ca.$$.fragment,o),$(Da.$$.fragment,o),$(Wa.$$.fragment,o),$(Ln.$$.fragment,o),$(On.$$.fragment,o),qd=!0)},o(o){P(l.$$.fragment,o),P(x.$$.fragment,o),P(os.$$.fragment,o),P(ns.$$.fragment,o),P(Lo.$$.fragment,o),P(as.$$.fragment,o),P(rs.$$.fragment,o),P(No.$$.fragment,o),P(Ho.$$.fragment,o),P(ds.$$.fragment,o),P(cs.$$.fragment,o),P(ps.$$.fragment,o),P(So.$$.fragment,o),P(Ao.$$.fragment,o),P(fs.$$.fragment,o),P(gs.$$.fragment,o),P(_s.$$.fragment,o),P(Ts.$$.fragment,o),P(bs.$$.fragment,o),P(ws.$$.fragment,o),P(Bo.$$.fragment,o),P(Ro.$$.fragment,o),P($s.$$.fragment,o),P(Ko.$$.fragment,o),P(Ps.$$.fragment,o),P(Vo.$$.fragment,o),P(Ms.$$.fragment,o),P(Gs.$$.fragment,o),P(zs.$$.fragment,o),P(Xo.$$.fragment,o),P(Yo.$$.fragment,o),P(Es.$$.fragment,o),P(Qo.$$.fragment,o),P(qs.$$.fragment,o),P(Zo.$$.fragment,o),P(Cs.$$.fragment,o),P(Ds.$$.fragment,o),P(Hs.$$.fragment,o),P(tn.$$.fragment,o),P(on.$$.fragment,o),P(Is.$$.fragment,o),P(Ss.$$.fragment,o),P(Bs.$$.fragment,o),P(sn.$$.fragment,o),P(an.$$.fragment,o),P(rn.$$.fragment,o),P(ln.$$.fragment,o),P(dn.$$.fragment,o),P(Rs.$$.fragment,o),P(Ks.$$.fragment,o),P(Ys.$$.fragment,o),P(pn.$$.fragment,o),P(hn.$$.fragment,o),P(mn.$$.fragment,o),P(Qs.$$.fragment,o),P(Zs.$$.fragment,o),P(fn.$$.fragment,o),P(na.$$.fragment,o),P(gn.$$.fragment,o),P(_n.$$.fragment,o),P(sa.$$.fragment,o),P(aa.$$.fragment,o),P(bn.$$.fragment,o),P(da.$$.fragment,o),P(yn.$$.fragment,o),P(vn.$$.fragment,o),P(ca.$$.fragment,o),P(pa.$$.fragment,o),P(wn.$$.fragment,o),P(fa.$$.fragment,o),P($n.$$.fragment,o),P(Pn.$$.fragment,o),P(ga.$$.fragment,o),P(_a.$$.fragment,o),P(Gn.$$.fragment,o),P(va.$$.fragment,o),P(xn.$$.fragment,o),P(jn.$$.fragment,o),P(Fn.$$.fragment,o),P(ka.$$.fragment,o),P(wa.$$.fragment,o),P($a.$$.fragment,o),P(Pa.$$.fragment,o),P(qa.$$.fragment,o),P(qn.$$.fragment,o),P(Cn.$$.fragment,o),P(Ca.$$.fragment,o),P(Da.$$.fragment,o),P(Wa.$$.fragment,o),P(Ln.$$.fragment,o),P(On.$$.fragment,o),qd=!1},d(o){t(d),o&&t(_),o&&t(p),M(l),o&&t(K),o&&t(N),M(x),o&&t(ye),o&&t(A),o&&t(ve),o&&t(B),o&&t(ke),o&&t(R),o&&t(ie),o&&t(E),o&&t(we),o&&t(H),o&&t(Ql),o&&t(to),o&&t(Zl),o&&t(Rt),o&&t(ed),o&&t(oo),M(os),o&&t(td),o&&t(Pt),M(ns),M(Lo),o&&t(od),o&&t(so),M(as),o&&t(nd),o&&t(_e),M(rs),M(No),M(Ho),M(ds),o&&t(sd),o&&t(ao),M(cs),o&&t(ad),o&&t(Ie),M(ps),M(So),M(Ao),o&&t(rd),o&&t(ro),M(fs),o&&t(id),o&&t(io),M(gs),o&&t(ld),o&&t(lo),M(_s),o&&t(dd),o&&t(co),M(Ts),o&&t(cd),o&&t(Se),M(bs),M(ws),M(Bo),M(Ro),M($s),M(Ko),M(Ps),M(Vo),o&&t(pd),o&&t(ho),M(Ms),o&&t(hd),o&&t(Ae),M(Gs),M(zs),M(Xo),M(Yo),M(Es),M(Qo),M(qs),M(Zo),o&&t(md),o&&t(uo),M(Cs),o&&t(ud),o&&t(ut),M(Ds),M(Hs),M(tn),M(on),o&&t(fd),o&&t(go),M(Is),o&&t(gd),o&&t(We),M(Ss),M(Bs),M(sn),M(an),M(rn),M(ln),M(dn),o&&t(_d),o&&t(To),M(Rs),o&&t(Td),o&&t(ft),M(Ks),M(Ys),M(pn),M(hn),M(mn),o&&t(bd),o&&t(yo),M(Qs),o&&t(yd),o&&t(Ye),M(Zs),M(fn),M(na),M(gn),M(_n),o&&t(vd),o&&t(ko),M(sa),o&&t(kd),o&&t(Qe),M(aa),M(bn),M(da),M(yn),M(vn),o&&t(wd),o&&t($o),M(ca),o&&t($d),o&&t(Ze),M(pa),M(wn),M(fa),M($n),M(Pn),o&&t(Pd),o&&t(Mo),M(ga),o&&t(Md),o&&t(Te),M(_a),M(Gn),M(va),M(xn),M(jn),M(Fn),o&&t(Gd),o&&t(xo),M(ka),o&&t(xd),o&&t(jo),M(wa),o&&t(jd),o&&t(Fo),M($a),o&&t(Fd),o&&t(Ue),M(Pa),M(qa),M(qn),M(Cn),o&&t(zd),o&&t(Eo),M(Ca),o&&t(Ed),o&&t(Be),M(Da),M(Wa),M(Ln),M(On)}}}const cy={local:"openai-gpt2",sections:[{local:"overview",title:"Overview"},{local:"transformers.GPT2Config",title:"GPT2Config"},{local:"transformers.GPT2Tokenizer",title:"GPT2Tokenizer"},{local:"transformers.GPT2TokenizerFast",title:"GPT2TokenizerFast"},{local:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",title:"GPT2 specific outputs"},{local:"transformers.GPT2Model",title:"GPT2Model"},{local:"transformers.GPT2LMHeadModel",title:"GPT2LMHeadModel"},{local:"transformers.GPT2DoubleHeadsModel",title:"GPT2DoubleHeadsModel"},{local:"transformers.GPT2ForSequenceClassification",title:"GPT2ForSequenceClassification"},{local:"transformers.GPT2ForTokenClassification",title:"GPT2ForTokenClassification"},{local:"transformers.TFGPT2Model",title:"TFGPT2Model"},{local:"transformers.TFGPT2LMHeadModel",title:"TFGPT2LMHeadModel"},{local:"transformers.TFGPT2DoubleHeadsModel",title:"TFGPT2DoubleHeadsModel"},{local:"transformers.TFGPT2ForSequenceClassification",title:"TFGPT2ForSequenceClassification"},{local:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",title:"TFSequenceClassifierOutputWithPast"},{local:"transformers.FlaxGPT2Model",title:"FlaxGPT2Model"},{local:"transformers.FlaxGPT2LMHeadModel",title:"FlaxGPT2LMHeadModel"}],title:"OpenAI GPT2"};function py(G){return kb(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ty extends Tb{constructor(d){super();bb(this,d,py,dy,yb,{})}}export{Ty as default,cy as metadata};
