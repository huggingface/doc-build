import{S as Tv,i as vv,s as bv,e as a,k as h,w as y,t as n,M as yv,c as r,d as t,m as u,a as i,x as k,h as s,b as f,G as e,g,y as w,q as $,o as P,B as M,v as kv,L as pe}from"../../chunks/vendor-hf-doc-builder.js";import{T as et}from"../../chunks/Tip-hf-doc-builder.js";import{D as S}from"../../chunks/Docstring-hf-doc-builder.js";import{C as he}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ke}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ce}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function wv(G){let d,_,p,m,T;return m=new he({props:{code:`from transformers import GPT2Model, GPT2Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),_=n("Example:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function $v(G){let d,_,p,m,T;return m=new he({props:{code:`from transformers import GPT2Tokenizer
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=a("p"),_=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function Pv(G){let d,_,p,m,T;return{c(){d=a("p"),_=n("When used with "),p=a("code"),m=n("is_split_into_words=True"),T=n(", this tokenizer will add a space before each word (even the first one).")},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"When used with "),p=r(c,"CODE",{});var j=i(p);m=s(j,"is_split_into_words=True"),j.forEach(t),T=s(c,", this tokenizer will add a space before each word (even the first one)."),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,m),e(d,T)},d(l){l&&t(d)}}}function Mv(G){let d,_,p,m,T;return m=new he({props:{code:`from transformers import GPT2TokenizerFast
tokenizer = GPT2TokenizerFast.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2TokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPT2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=a("p"),_=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function Gv(G){let d,_,p,m,T,l,c,j;return{c(){d=a("p"),_=n("When used with "),p=a("code"),m=n("is_split_into_words=True"),T=n(", this tokenizer needs to be instantiated with "),l=a("code"),c=n("add_prefix_space=True"),j=n(".")},l(se){d=r(se,"P",{});var V=i(d);_=s(V,"When used with "),p=r(V,"CODE",{});var N=i(p);m=s(N,"is_split_into_words=True"),N.forEach(t),T=s(V,", this tokenizer needs to be instantiated with "),l=r(V,"CODE",{});var J=i(l);c=s(J,"add_prefix_space=True"),J.forEach(t),j=s(V,"."),V.forEach(t)},m(se,V){g(se,d,V),e(d,_),e(d,p),e(p,m),e(d,T),e(d,l),e(l,c),e(d,j)},d(se){se&&t(d)}}}function xv(G){let d,_,p,m,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);m=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,m),e(d,T)},d(l){l&&t(d)}}}function jv(G){let d,_,p,m,T;return m=new he({props:{code:`from transformers import GPT2Tokenizer, GPT2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=n("Example:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function Fv(G){let d,_,p,m,T;return m=new he({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:
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
model.parallelize(device_map)`}}),{c(){d=a("p"),_=n("Example:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function zv(G){let d,_,p,m,T;return m=new he({props:{code:`# On a 4 GPU machine with gpt2-large:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){d=a("p"),_=n("Example:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function Ev(G){let d,_,p,m,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);m=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,m),e(d,T)},d(l){l&&t(d)}}}function qv(G){let d,_,p,m,T;return m=new he({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=n("Example:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function Cv(G){let d,_,p,m,T;return m=new he({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:
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
model.parallelize(device_map)`}}),{c(){d=a("p"),_=n("Example:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function Dv(G){let d,_,p,m,T;return m=new he({props:{code:`# On a 4 GPU machine with gpt2-large:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){d=a("p"),_=n("Example:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function Lv(G){let d,_,p,m,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);m=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,m),e(d,T)},d(l){l&&t(d)}}}function Ov(G){let d,_,p,m,T;return m=new he({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),{c(){d=a("p"),_=n("Example:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function Nv(G){let d,_,p,m,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);m=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,m),e(d,T)},d(l){l&&t(d)}}}function Hv(G){let d,_,p,m,T;return m=new he({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),_=n("Example of single-label classification:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example of single-label classification:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function Iv(G){let d,_;return d=new he({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = GPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">5.28</span>`}}),{c(){y(d.$$.fragment)},l(p){k(d.$$.fragment,p)},m(p,m){w(d,p,m),_=!0},p:pe,i(p){_||($(d.$$.fragment,p),_=!0)},o(p){P(d.$$.fragment,p),_=!1},d(p){M(d,p)}}}function Sv(G){let d,_,p,m,T;return m=new he({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),_=n("Example of multi-label classification:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example of multi-label classification:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function Av(G){let d,_;return d=new he({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(p){k(d.$$.fragment,p)},m(p,m){w(d,p,m),_=!0},p:pe,i(p){_||($(d.$$.fragment,p),_=!0)},o(p){P(d.$$.fragment,p),_=!1},d(p){M(d,p)}}}function Wv(G){let d,_,p,m,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);m=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,m),e(d,T)},d(l){l&&t(d)}}}function Uv(G){let d,_,p,m,T;return m=new he({props:{code:`from transformers import GPT2Tokenizer, GPT2ForTokenClassification
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
[<span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Position&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>]`}}),{c(){d=a("p"),_=n("Example:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function Bv(G){let d,_;return d=new he({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.25</span>`}}),{c(){y(d.$$.fragment)},l(p){k(d.$$.fragment,p)},m(p,m){w(d,p,m),_=!0},p:pe,i(p){_||($(d.$$.fragment,p),_=!0)},o(p){P(d.$$.fragment,p),_=!1},d(p){M(d,p)}}}function Rv(G){let d,_,p,m,T,l,c,j,se,V,N,J,ae,x,$e,K,Pe,be,A,Me,le,X,Ge,ye,B,xe,ke,R,ue,je,ie,E,C,we,H,me,Fe,Y,de,ze,q,Ee,Q,qe,L,Z,fe,Ce,W,ge,ee,De,re,D,Le,O,Oe,Ne;return{c(){d=a("p"),_=n("TensorFlow models and layers in "),p=a("code"),m=n("transformers"),T=n(" accept two formats as input:"),l=h(),c=a("ul"),j=a("li"),se=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),N=a("li"),J=n("having all inputs as a list, tuple or dict in the first positional argument."),ae=h(),x=a("p"),$e=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Pe=n("model.fit()"),be=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=a("code"),Me=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),X=a("code"),Ge=n("fit()"),ye=n(" and "),B=a("code"),xe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),R=a("code"),ue=n("Functional"),je=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ie=h(),E=a("ul"),C=a("li"),we=n("a single Tensor with "),H=a("code"),me=n("input_ids"),Fe=n(" only and nothing else: "),Y=a("code"),de=n("model(input_ids)"),ze=h(),q=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),qe=n("model([input_ids, attention_mask])"),L=n(" or "),Z=a("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),Ce=h(),W=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=a("code"),De=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re=h(),D=a("p"),Le=n(`Note that when creating models and layers with
`),O=a("a"),Oe=n("subclassing"),Ne=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);_=s(F,"TensorFlow models and layers in "),p=r(F,"CODE",{});var nt=i(p);m=s(nt,"transformers"),nt.forEach(t),T=s(F," accept two formats as input:"),F.forEach(t),l=u(b),c=r(b,"UL",{});var ne=i(c);j=r(ne,"LI",{});var st=i(j);se=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),V=u(ne),N=r(ne,"LI",{});var at=i(N);J=s(at,"having all inputs as a list, tuple or dict in the first positional argument."),at.forEach(t),ne.forEach(t),ae=u(b),x=r(b,"P",{});var z=i(x);$e=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(z,"CODE",{});var rt=i(K);Pe=s(rt,"model.fit()"),rt.forEach(t),be=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=r(z,"CODE",{});var it=i(A);Me=s(it,"model.fit()"),it.forEach(t),le=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),X=r(z,"CODE",{});var Re=i(X);Ge=s(Re,"fit()"),Re.forEach(t),ye=s(z," and "),B=r(z,"CODE",{});var lt=i(B);xe=s(lt,"predict()"),lt.forEach(t),ke=s(z,`, such as when creating your own layers or models with
the Keras `),R=r(z,"CODE",{});var dt=i(R);ue=s(dt,"Functional"),dt.forEach(t),je=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ie=u(b),E=r(b,"UL",{});var U=i(E);C=r(U,"LI",{});var I=i(C);we=s(I,"a single Tensor with "),H=r(I,"CODE",{});var ct=i(H);me=s(ct,"input_ids"),ct.forEach(t),Fe=s(I," only and nothing else: "),Y=r(I,"CODE",{});var Je=i(Y);de=s(Je,"model(input_ids)"),Je.forEach(t),I.forEach(t),ze=u(U),q=r(U,"LI",{});var te=i(q);Ee=s(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(te,"CODE",{});var pt=i(Q);qe=s(pt,"model([input_ids, attention_mask])"),pt.forEach(t),L=s(te," or "),Z=r(te,"CODE",{});var Xe=i(Z);fe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),te.forEach(t),Ce=u(U),W=r(U,"LI",{});var He=i(W);ge=s(He,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=r(He,"CODE",{});var ht=i(ee);De=s(ht,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ht.forEach(t),He.forEach(t),U.forEach(t),re=u(b),D=r(b,"P",{});var oe=i(D);Le=s(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var ut=i(O);Oe=s(ut,"subclassing"),ut.forEach(t),Ne=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,_),e(d,p),e(p,m),e(d,T),g(b,l,F),g(b,c,F),e(c,j),e(j,se),e(c,V),e(c,N),e(N,J),g(b,ae,F),g(b,x,F),e(x,$e),e(x,K),e(K,Pe),e(x,be),e(x,A),e(A,Me),e(x,le),e(x,X),e(X,Ge),e(x,ye),e(x,B),e(B,xe),e(x,ke),e(x,R),e(R,ue),e(x,je),g(b,ie,F),g(b,E,F),e(E,C),e(C,we),e(C,H),e(H,me),e(C,Fe),e(C,Y),e(Y,de),e(E,ze),e(E,q),e(q,Ee),e(q,Q),e(Q,qe),e(q,L),e(q,Z),e(Z,fe),e(E,Ce),e(E,W),e(W,ge),e(W,ee),e(ee,De),g(b,re,F),g(b,D,F),e(D,Le),e(D,O),e(O,Oe),e(D,Ne)},d(b){b&&t(d),b&&t(l),b&&t(c),b&&t(ae),b&&t(x),b&&t(ie),b&&t(E),b&&t(re),b&&t(D)}}}function Vv(G){let d,_,p,m,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);m=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,m),e(d,T)},d(l){l&&t(d)}}}function Kv(G){let d,_,p,m,T;return m=new he({props:{code:`from transformers import GPT2Tokenizer, TFGPT2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=n("Example:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function Jv(G){let d,_,p,m,T,l,c,j,se,V,N,J,ae,x,$e,K,Pe,be,A,Me,le,X,Ge,ye,B,xe,ke,R,ue,je,ie,E,C,we,H,me,Fe,Y,de,ze,q,Ee,Q,qe,L,Z,fe,Ce,W,ge,ee,De,re,D,Le,O,Oe,Ne;return{c(){d=a("p"),_=n("TensorFlow models and layers in "),p=a("code"),m=n("transformers"),T=n(" accept two formats as input:"),l=h(),c=a("ul"),j=a("li"),se=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),N=a("li"),J=n("having all inputs as a list, tuple or dict in the first positional argument."),ae=h(),x=a("p"),$e=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Pe=n("model.fit()"),be=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=a("code"),Me=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),X=a("code"),Ge=n("fit()"),ye=n(" and "),B=a("code"),xe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),R=a("code"),ue=n("Functional"),je=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ie=h(),E=a("ul"),C=a("li"),we=n("a single Tensor with "),H=a("code"),me=n("input_ids"),Fe=n(" only and nothing else: "),Y=a("code"),de=n("model(input_ids)"),ze=h(),q=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),qe=n("model([input_ids, attention_mask])"),L=n(" or "),Z=a("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),Ce=h(),W=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=a("code"),De=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re=h(),D=a("p"),Le=n(`Note that when creating models and layers with
`),O=a("a"),Oe=n("subclassing"),Ne=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);_=s(F,"TensorFlow models and layers in "),p=r(F,"CODE",{});var nt=i(p);m=s(nt,"transformers"),nt.forEach(t),T=s(F," accept two formats as input:"),F.forEach(t),l=u(b),c=r(b,"UL",{});var ne=i(c);j=r(ne,"LI",{});var st=i(j);se=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),V=u(ne),N=r(ne,"LI",{});var at=i(N);J=s(at,"having all inputs as a list, tuple or dict in the first positional argument."),at.forEach(t),ne.forEach(t),ae=u(b),x=r(b,"P",{});var z=i(x);$e=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(z,"CODE",{});var rt=i(K);Pe=s(rt,"model.fit()"),rt.forEach(t),be=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=r(z,"CODE",{});var it=i(A);Me=s(it,"model.fit()"),it.forEach(t),le=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),X=r(z,"CODE",{});var Re=i(X);Ge=s(Re,"fit()"),Re.forEach(t),ye=s(z," and "),B=r(z,"CODE",{});var lt=i(B);xe=s(lt,"predict()"),lt.forEach(t),ke=s(z,`, such as when creating your own layers or models with
the Keras `),R=r(z,"CODE",{});var dt=i(R);ue=s(dt,"Functional"),dt.forEach(t),je=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ie=u(b),E=r(b,"UL",{});var U=i(E);C=r(U,"LI",{});var I=i(C);we=s(I,"a single Tensor with "),H=r(I,"CODE",{});var ct=i(H);me=s(ct,"input_ids"),ct.forEach(t),Fe=s(I," only and nothing else: "),Y=r(I,"CODE",{});var Je=i(Y);de=s(Je,"model(input_ids)"),Je.forEach(t),I.forEach(t),ze=u(U),q=r(U,"LI",{});var te=i(q);Ee=s(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(te,"CODE",{});var pt=i(Q);qe=s(pt,"model([input_ids, attention_mask])"),pt.forEach(t),L=s(te," or "),Z=r(te,"CODE",{});var Xe=i(Z);fe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),te.forEach(t),Ce=u(U),W=r(U,"LI",{});var He=i(W);ge=s(He,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=r(He,"CODE",{});var ht=i(ee);De=s(ht,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ht.forEach(t),He.forEach(t),U.forEach(t),re=u(b),D=r(b,"P",{});var oe=i(D);Le=s(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var ut=i(O);Oe=s(ut,"subclassing"),ut.forEach(t),Ne=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,_),e(d,p),e(p,m),e(d,T),g(b,l,F),g(b,c,F),e(c,j),e(j,se),e(c,V),e(c,N),e(N,J),g(b,ae,F),g(b,x,F),e(x,$e),e(x,K),e(K,Pe),e(x,be),e(x,A),e(A,Me),e(x,le),e(x,X),e(X,Ge),e(x,ye),e(x,B),e(B,xe),e(x,ke),e(x,R),e(R,ue),e(x,je),g(b,ie,F),g(b,E,F),e(E,C),e(C,we),e(C,H),e(H,me),e(C,Fe),e(C,Y),e(Y,de),e(E,ze),e(E,q),e(q,Ee),e(q,Q),e(Q,qe),e(q,L),e(q,Z),e(Z,fe),e(E,Ce),e(E,W),e(W,ge),e(W,ee),e(ee,De),g(b,re,F),g(b,D,F),e(D,Le),e(D,O),e(O,Oe),e(D,Ne)},d(b){b&&t(d),b&&t(l),b&&t(c),b&&t(ae),b&&t(x),b&&t(ie),b&&t(E),b&&t(re),b&&t(D)}}}function Xv(G){let d,_,p,m,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);m=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,m),e(d,T)},d(l){l&&t(d)}}}function Yv(G){let d,_,p,m,T;return m=new he({props:{code:`from transformers import GPT2Tokenizer, TFGPT2LMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=n("Example:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function Qv(G){let d,_,p,m,T,l,c,j,se,V,N,J,ae,x,$e,K,Pe,be,A,Me,le,X,Ge,ye,B,xe,ke,R,ue,je,ie,E,C,we,H,me,Fe,Y,de,ze,q,Ee,Q,qe,L,Z,fe,Ce,W,ge,ee,De,re,D,Le,O,Oe,Ne;return{c(){d=a("p"),_=n("TensorFlow models and layers in "),p=a("code"),m=n("transformers"),T=n(" accept two formats as input:"),l=h(),c=a("ul"),j=a("li"),se=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),N=a("li"),J=n("having all inputs as a list, tuple or dict in the first positional argument."),ae=h(),x=a("p"),$e=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Pe=n("model.fit()"),be=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=a("code"),Me=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),X=a("code"),Ge=n("fit()"),ye=n(" and "),B=a("code"),xe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),R=a("code"),ue=n("Functional"),je=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ie=h(),E=a("ul"),C=a("li"),we=n("a single Tensor with "),H=a("code"),me=n("input_ids"),Fe=n(" only and nothing else: "),Y=a("code"),de=n("model(input_ids)"),ze=h(),q=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),qe=n("model([input_ids, attention_mask])"),L=n(" or "),Z=a("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),Ce=h(),W=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=a("code"),De=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re=h(),D=a("p"),Le=n(`Note that when creating models and layers with
`),O=a("a"),Oe=n("subclassing"),Ne=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);_=s(F,"TensorFlow models and layers in "),p=r(F,"CODE",{});var nt=i(p);m=s(nt,"transformers"),nt.forEach(t),T=s(F," accept two formats as input:"),F.forEach(t),l=u(b),c=r(b,"UL",{});var ne=i(c);j=r(ne,"LI",{});var st=i(j);se=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),V=u(ne),N=r(ne,"LI",{});var at=i(N);J=s(at,"having all inputs as a list, tuple or dict in the first positional argument."),at.forEach(t),ne.forEach(t),ae=u(b),x=r(b,"P",{});var z=i(x);$e=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(z,"CODE",{});var rt=i(K);Pe=s(rt,"model.fit()"),rt.forEach(t),be=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=r(z,"CODE",{});var it=i(A);Me=s(it,"model.fit()"),it.forEach(t),le=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),X=r(z,"CODE",{});var Re=i(X);Ge=s(Re,"fit()"),Re.forEach(t),ye=s(z," and "),B=r(z,"CODE",{});var lt=i(B);xe=s(lt,"predict()"),lt.forEach(t),ke=s(z,`, such as when creating your own layers or models with
the Keras `),R=r(z,"CODE",{});var dt=i(R);ue=s(dt,"Functional"),dt.forEach(t),je=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ie=u(b),E=r(b,"UL",{});var U=i(E);C=r(U,"LI",{});var I=i(C);we=s(I,"a single Tensor with "),H=r(I,"CODE",{});var ct=i(H);me=s(ct,"input_ids"),ct.forEach(t),Fe=s(I," only and nothing else: "),Y=r(I,"CODE",{});var Je=i(Y);de=s(Je,"model(input_ids)"),Je.forEach(t),I.forEach(t),ze=u(U),q=r(U,"LI",{});var te=i(q);Ee=s(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(te,"CODE",{});var pt=i(Q);qe=s(pt,"model([input_ids, attention_mask])"),pt.forEach(t),L=s(te," or "),Z=r(te,"CODE",{});var Xe=i(Z);fe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),te.forEach(t),Ce=u(U),W=r(U,"LI",{});var He=i(W);ge=s(He,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=r(He,"CODE",{});var ht=i(ee);De=s(ht,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ht.forEach(t),He.forEach(t),U.forEach(t),re=u(b),D=r(b,"P",{});var oe=i(D);Le=s(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var ut=i(O);Oe=s(ut,"subclassing"),ut.forEach(t),Ne=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,_),e(d,p),e(p,m),e(d,T),g(b,l,F),g(b,c,F),e(c,j),e(j,se),e(c,V),e(c,N),e(N,J),g(b,ae,F),g(b,x,F),e(x,$e),e(x,K),e(K,Pe),e(x,be),e(x,A),e(A,Me),e(x,le),e(x,X),e(X,Ge),e(x,ye),e(x,B),e(B,xe),e(x,ke),e(x,R),e(R,ue),e(x,je),g(b,ie,F),g(b,E,F),e(E,C),e(C,we),e(C,H),e(H,me),e(C,Fe),e(C,Y),e(Y,de),e(E,ze),e(E,q),e(q,Ee),e(q,Q),e(Q,qe),e(q,L),e(q,Z),e(Z,fe),e(E,Ce),e(E,W),e(W,ge),e(W,ee),e(ee,De),g(b,re,F),g(b,D,F),e(D,Le),e(D,O),e(O,Oe),e(D,Ne)},d(b){b&&t(d),b&&t(l),b&&t(c),b&&t(ae),b&&t(x),b&&t(ie),b&&t(E),b&&t(re),b&&t(D)}}}function Zv(G){let d,_,p,m,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);m=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,m),e(d,T)},d(l){l&&t(d)}}}function eb(G){let d,_,p,m,T;return m=new he({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=a("p"),_=n("Examples:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Examples:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function tb(G){let d,_,p,m,T,l,c,j,se,V,N,J,ae,x,$e,K,Pe,be,A,Me,le,X,Ge,ye,B,xe,ke,R,ue,je,ie,E,C,we,H,me,Fe,Y,de,ze,q,Ee,Q,qe,L,Z,fe,Ce,W,ge,ee,De,re,D,Le,O,Oe,Ne;return{c(){d=a("p"),_=n("TensorFlow models and layers in "),p=a("code"),m=n("transformers"),T=n(" accept two formats as input:"),l=h(),c=a("ul"),j=a("li"),se=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),N=a("li"),J=n("having all inputs as a list, tuple or dict in the first positional argument."),ae=h(),x=a("p"),$e=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Pe=n("model.fit()"),be=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=a("code"),Me=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),X=a("code"),Ge=n("fit()"),ye=n(" and "),B=a("code"),xe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),R=a("code"),ue=n("Functional"),je=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ie=h(),E=a("ul"),C=a("li"),we=n("a single Tensor with "),H=a("code"),me=n("input_ids"),Fe=n(" only and nothing else: "),Y=a("code"),de=n("model(input_ids)"),ze=h(),q=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),qe=n("model([input_ids, attention_mask])"),L=n(" or "),Z=a("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),Ce=h(),W=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=a("code"),De=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re=h(),D=a("p"),Le=n(`Note that when creating models and layers with
`),O=a("a"),Oe=n("subclassing"),Ne=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);_=s(F,"TensorFlow models and layers in "),p=r(F,"CODE",{});var nt=i(p);m=s(nt,"transformers"),nt.forEach(t),T=s(F," accept two formats as input:"),F.forEach(t),l=u(b),c=r(b,"UL",{});var ne=i(c);j=r(ne,"LI",{});var st=i(j);se=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),V=u(ne),N=r(ne,"LI",{});var at=i(N);J=s(at,"having all inputs as a list, tuple or dict in the first positional argument."),at.forEach(t),ne.forEach(t),ae=u(b),x=r(b,"P",{});var z=i(x);$e=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(z,"CODE",{});var rt=i(K);Pe=s(rt,"model.fit()"),rt.forEach(t),be=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=r(z,"CODE",{});var it=i(A);Me=s(it,"model.fit()"),it.forEach(t),le=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),X=r(z,"CODE",{});var Re=i(X);Ge=s(Re,"fit()"),Re.forEach(t),ye=s(z," and "),B=r(z,"CODE",{});var lt=i(B);xe=s(lt,"predict()"),lt.forEach(t),ke=s(z,`, such as when creating your own layers or models with
the Keras `),R=r(z,"CODE",{});var dt=i(R);ue=s(dt,"Functional"),dt.forEach(t),je=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ie=u(b),E=r(b,"UL",{});var U=i(E);C=r(U,"LI",{});var I=i(C);we=s(I,"a single Tensor with "),H=r(I,"CODE",{});var ct=i(H);me=s(ct,"input_ids"),ct.forEach(t),Fe=s(I," only and nothing else: "),Y=r(I,"CODE",{});var Je=i(Y);de=s(Je,"model(input_ids)"),Je.forEach(t),I.forEach(t),ze=u(U),q=r(U,"LI",{});var te=i(q);Ee=s(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(te,"CODE",{});var pt=i(Q);qe=s(pt,"model([input_ids, attention_mask])"),pt.forEach(t),L=s(te," or "),Z=r(te,"CODE",{});var Xe=i(Z);fe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),te.forEach(t),Ce=u(U),W=r(U,"LI",{});var He=i(W);ge=s(He,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=r(He,"CODE",{});var ht=i(ee);De=s(ht,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ht.forEach(t),He.forEach(t),U.forEach(t),re=u(b),D=r(b,"P",{});var oe=i(D);Le=s(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var ut=i(O);Oe=s(ut,"subclassing"),ut.forEach(t),Ne=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,_),e(d,p),e(p,m),e(d,T),g(b,l,F),g(b,c,F),e(c,j),e(j,se),e(c,V),e(c,N),e(N,J),g(b,ae,F),g(b,x,F),e(x,$e),e(x,K),e(K,Pe),e(x,be),e(x,A),e(A,Me),e(x,le),e(x,X),e(X,Ge),e(x,ye),e(x,B),e(B,xe),e(x,ke),e(x,R),e(R,ue),e(x,je),g(b,ie,F),g(b,E,F),e(E,C),e(C,we),e(C,H),e(H,me),e(C,Fe),e(C,Y),e(Y,de),e(E,ze),e(E,q),e(q,Ee),e(q,Q),e(Q,qe),e(q,L),e(q,Z),e(Z,fe),e(E,Ce),e(E,W),e(W,ge),e(W,ee),e(ee,De),g(b,re,F),g(b,D,F),e(D,Le),e(D,O),e(O,Oe),e(D,Ne)},d(b){b&&t(d),b&&t(l),b&&t(c),b&&t(ae),b&&t(x),b&&t(ie),b&&t(E),b&&t(re),b&&t(D)}}}function ob(G){let d,_,p,m,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);m=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,m),e(d,T)},d(l){l&&t(d)}}}function nb(G){let d,_,p,m,T;return m=new he({props:{code:`from transformers import GPT2Tokenizer, TFGPT2ForSequenceClassification
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
`}}),{c(){d=a("p"),_=n("Example:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function sb(G){let d,_;return d=new he({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(d.$$.fragment)},l(p){k(d.$$.fragment,p)},m(p,m){w(d,p,m),_=!0},p:pe,i(p){_||($(d.$$.fragment,p),_=!0)},o(p){P(d.$$.fragment,p),_=!1},d(p){M(d,p)}}}function ab(G){let d,_,p,m,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);m=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,m),e(d,T)},d(l){l&&t(d)}}}function rb(G){let d,_,p,m,T;return m=new he({props:{code:`from transformers import GPT2Tokenizer, FlaxGPT2Model

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = FlaxGPT2Model.from_pretrained("gpt2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxGPT2Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPT2Model.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=n("Example:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function ib(G){let d,_,p,m,T;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var j=i(p);m=s(j,"Module"),j.forEach(t),T=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,_),e(d,p),e(p,m),e(d,T)},d(l){l&&t(d)}}}function lb(G){let d,_,p,m,T;return m=new he({props:{code:`from transformers import GPT2Tokenizer, FlaxGPT2LMHeadModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=a("p"),_=n("Example:"),p=h(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);_=s(c,"Example:"),c.forEach(t),p=u(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,_),g(l,p,c),w(m,l,c),T=!0},p:pe,i(l){T||($(m.$$.fragment,l),T=!0)},o(l){P(m.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(p),M(m,l)}}}function db(G){let d,_,p,m,T,l,c,j,se,V,N,J,ae,x,$e,K,Pe,be,A,Me,le,X,Ge,ye,B,xe,ke,R,ue,je,ie,E,C,we,H,me,Fe,Y,de,ze,q,Ee,Q,qe,L,Z,fe,Ce,W,ge,ee,De,re,D,Le,O,Oe,Ne,b,F,nt,ne,st,at,z,rt,it,Re,lt,dt,U,I,ct,Je,te,pt,Xe,He,ht,oe,ut,Pc,Ql,to,Zn,Mc,Gc,Ir,xc,jc,Zl,Rt,Fc,es,zc,Ec,ts,qc,Cc,ed,oo,Do,Sr,os,Dc,Ar,Lc,td,Pt,ns,Oc,St,Nc,Ja,Hc,Ic,Xa,Sc,Ac,ss,Wc,Uc,Bc,no,Rc,Ya,Vc,Kc,Qa,Jc,Xc,Yc,Lo,od,so,Oo,Wr,as,Qc,Ur,Zc,nd,_e,rs,ep,Br,tp,op,Rr,np,sp,No,ap,is,rp,Vr,ip,lp,dp,Ho,cp,ls,pp,Za,hp,up,mp,er,ds,sd,ao,Io,Kr,cs,fp,Jr,gp,ad,Ie,ps,_p,hs,Tp,Xr,vp,bp,yp,Yr,kp,wp,So,$p,us,Pp,Qr,Mp,Gp,xp,Ao,jp,ms,Fp,tr,zp,Ep,rd,ro,Wo,Zr,fs,qp,ei,Cp,id,io,gs,Dp,ti,Lp,ld,lo,_s,Op,oi,Np,dd,co,Uo,ni,Ts,Hp,si,Ip,cd,Se,vs,Sp,ai,Ap,Wp,bs,Up,or,Bp,Rp,Vp,ys,Kp,ks,Jp,Xp,Yp,xt,ws,Qp,po,Zp,nr,eh,th,ri,oh,nh,sh,Bo,ah,Ro,rh,jt,$s,ih,ii,lh,dh,li,ch,ph,Vo,hh,Vt,Ps,uh,di,mh,fh,Ko,pd,ho,Jo,ci,Ms,gh,pi,_h,hd,Ae,Gs,Th,hi,vh,bh,xs,yh,sr,kh,wh,$h,js,Ph,Fs,Mh,Gh,xh,Ft,zs,jh,uo,Fh,ar,zh,Eh,ui,qh,Ch,Dh,Xo,Lh,Yo,Oh,zt,Es,Nh,mi,Hh,Ih,fi,Sh,Ah,Qo,Wh,Kt,qs,Uh,gi,Bh,Rh,Zo,ud,mo,en,_i,Cs,Vh,Ti,Kh,md,mt,Ds,Jh,vi,Xh,Yh,Ls,Qh,rr,Zh,eu,tu,Os,ou,Ns,nu,su,au,Et,Hs,ru,fo,iu,ir,lu,du,bi,cu,pu,hu,tn,uu,on,fd,go,nn,yi,Is,mu,ki,fu,gd,We,Ss,gu,wi,_u,Tu,lr,dr,vu,bu,yu,Mt,ku,$i,wu,$u,Pi,Pu,Mu,Mi,Gu,xu,Gi,ju,Fu,zu,As,Eu,cr,qu,Cu,Du,Ws,Lu,Us,Ou,Nu,Hu,Ve,Bs,Iu,_o,Su,pr,Au,Wu,xi,Uu,Bu,Ru,sn,Vu,an,Ku,rn,Ju,ln,Xu,dn,_d,To,cn,ji,Rs,Yu,Fi,Qu,Td,ft,Vs,Zu,zi,em,tm,Ks,om,hr,nm,sm,am,Js,rm,Xs,im,lm,dm,gt,Ys,cm,vo,pm,ur,hm,um,Ei,mm,fm,gm,pn,_m,hn,Tm,un,vd,bo,mn,qi,Qs,vm,Ci,bm,bd,Ye,Zs,ym,Di,km,wm,ea,$m,mr,Pm,Mm,Gm,ta,xm,oa,jm,Fm,zm,fn,Em,qt,na,qm,yo,Cm,fr,Dm,Lm,Li,Om,Nm,Hm,gn,Im,_n,yd,ko,Tn,Oi,sa,Sm,Ni,Am,kd,Qe,aa,Wm,Hi,Um,Bm,ra,Rm,gr,Vm,Km,Jm,ia,Xm,la,Ym,Qm,Zm,vn,ef,Ct,da,tf,wo,of,_r,nf,sf,Ii,af,rf,lf,bn,df,yn,wd,$o,kn,Si,ca,cf,Ai,pf,$d,Ze,pa,hf,Wi,uf,mf,ha,ff,Tr,gf,_f,Tf,ua,vf,ma,bf,yf,kf,wn,wf,Dt,fa,$f,Po,Pf,vr,Mf,Gf,Ui,xf,jf,Ff,$n,zf,Pn,Pd,Mo,Mn,Bi,ga,Ef,Ri,qf,Md,Te,_a,Cf,Vi,Df,Lf,br,yr,Of,Nf,Hf,Gt,If,Ki,Sf,Af,Ji,Wf,Uf,Xi,Bf,Rf,Yi,Vf,Kf,Jf,Ta,Xf,kr,Yf,Qf,Zf,va,eg,ba,tg,og,ng,Gn,sg,_t,ya,ag,Go,rg,wr,ig,lg,Qi,dg,cg,pg,xn,hg,jn,ug,Fn,Gd,xo,zn,Zi,ka,mg,el,fg,xd,jo,wa,gg,tl,_g,jd,Fo,En,ol,$a,Tg,nl,vg,Fd,Ue,Pa,bg,sl,yg,kg,Ma,wg,$r,$g,Pg,Mg,Ga,Gg,xa,xg,jg,Fg,al,zg,Eg,At,rl,ja,qg,Cg,il,Fa,Dg,Lg,ll,za,Og,Ng,dl,Ea,Hg,Ig,Lt,qa,Sg,zo,Ag,cl,Wg,Ug,pl,Bg,Rg,Vg,qn,Kg,Cn,zd,Eo,Dn,hl,Ca,Jg,ul,Xg,Ed,Be,Da,Yg,ml,Qg,Zg,La,e_,Pr,t_,o_,n_,Oa,s_,Na,a_,r_,i_,fl,l_,d_,Wt,gl,Ha,c_,p_,_l,Ia,h_,u_,Tl,Sa,m_,f_,vl,Aa,g_,__,Ot,Wa,T_,qo,v_,bl,b_,y_,yl,k_,w_,$_,Ln,P_,On,qd;return l=new Ke({}),x=new Ke({}),os=new Ke({}),ns=new S({props:{name:"class transformers.GPT2Config",anchor:"transformers.GPT2Config",parameters:[{name:"vocab_size",val:" = 50257"},{name:"n_positions",val:" = 1024"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"scale_attn_by_inverse_layer_idx",val:" = False"},{name:"reorder_and_upcast_attn",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Model">GPT2Model</a> or <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.TFGPT2Model">TFGPT2Model</a>.`,name:"vocab_size"},{anchor:"transformers.GPT2Config.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.GPT2Config.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.GPT2Config.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in for the multiple choice head in
<a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a>.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.GPT2Config.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.GPT2Config.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.GPT2Config.scale_attn_weights",description:`<strong>scale_attn_weights</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale attention weights by dividing by sqrt(hidden_size)..`,name:"scale_attn_weights"},{anchor:"transformers.GPT2Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.GPT2Config.scale_attn_by_inverse_layer_idx",description:`<strong>scale_attn_by_inverse_layer_idx</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to additionally scale attention weights by <code>1 / layer_idx + 1</code>.`,name:"scale_attn_by_inverse_layer_idx"},{anchor:"transformers.GPT2Config.reorder_and_upcast_attn",description:`<strong>reorder_and_upcast_attn</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to scale keys (K) prior to computing attention (dot-product) and upcast attention
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/configuration_gpt2.py#L38"}}),Lo=new ce({props:{anchor:"transformers.GPT2Config.example",$$slots:{default:[wv]},$$scope:{ctx:G}}}),as=new Ke({}),rs=new S({props:{name:"class transformers.GPT2Tokenizer",anchor:"transformers.GPT2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = None"},{name:"add_prefix_space",val:" = False"},{name:"add_bos_token",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.GPT2Tokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.GPT2Tokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.GPT2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.GPT2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.GPT2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.GPT2Tokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (GPT2 tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/tokenization_gpt2.py#L104"}}),No=new ce({props:{anchor:"transformers.GPT2Tokenizer.example",$$slots:{default:[$v]},$$scope:{ctx:G}}}),Ho=new et({props:{$$slots:{default:[Pv]},$$scope:{ctx:G}}}),ds=new S({props:{name:"save_vocabulary",anchor:"transformers.GPT2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/tokenization_gpt2.py#L320"}}),cs=new Ke({}),ps=new S({props:{name:"class transformers.GPT2TokenizerFast",anchor:"transformers.GPT2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/tokenization_gpt2_fast.py#L70"}}),So=new ce({props:{anchor:"transformers.GPT2TokenizerFast.example",$$slots:{default:[Mv]},$$scope:{ctx:G}}}),Ao=new et({props:{$$slots:{default:[Gv]},$$scope:{ctx:G}}}),fs=new Ke({}),gs=new S({props:{name:"class transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_gpt2.py#L504"}}),_s=new S({props:{name:"class transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput",anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_tf_gpt2.py#L563"}}),Ts=new Ke({}),vs=new S({props:{name:"class transformers.GPT2Model",anchor:"transformers.GPT2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_gpt2.py#L684"}}),ws=new S({props:{name:"forward",anchor:"transformers.GPT2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_gpt2.py#L753",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bo=new et({props:{$$slots:{default:[xv]},$$scope:{ctx:G}}}),Ro=new ce({props:{anchor:"transformers.GPT2Model.forward.example",$$slots:{default:[jv]},$$scope:{ctx:G}}}),$s=new S({props:{name:"parallelize",anchor:"transformers.GPT2Model.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the gpt2 models have the
following number of attention modules:</p>
<ul>
<li>gpt2: 12</li>
<li>gpt2-medium: 24</li>
<li>gpt2-large: 36</li>
<li>gpt2-xl: 48</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_gpt2.py#L707"}}),Vo=new ce({props:{anchor:"transformers.GPT2Model.parallelize.example",$$slots:{default:[Fv]},$$scope:{ctx:G}}}),Ps=new S({props:{name:"deparallelize",anchor:"transformers.GPT2Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_gpt2.py#L727"}}),Ko=new ce({props:{anchor:"transformers.GPT2Model.deparallelize.example",$$slots:{default:[zv]},$$scope:{ctx:G}}}),Ms=new Ke({}),Gs=new S({props:{name:"class transformers.GPT2LMHeadModel",anchor:"transformers.GPT2LMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_gpt2.py#L962"}}),zs=new S({props:{name:"forward",anchor:"transformers.GPT2LMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2LMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_gpt2.py#L1031",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xo=new et({props:{$$slots:{default:[Ev]},$$scope:{ctx:G}}}),Yo=new ce({props:{anchor:"transformers.GPT2LMHeadModel.forward.example",$$slots:{default:[qv]},$$scope:{ctx:G}}}),Es=new S({props:{name:"parallelize",anchor:"transformers.GPT2LMHeadModel.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the gpt2 models have the
following number of attention modules:</p>
<ul>
<li>gpt2: 12</li>
<li>gpt2-medium: 24</li>
<li>gpt2-large: 36</li>
<li>gpt2-xl: 48</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_gpt2.py#L977"}}),Qo=new ce({props:{anchor:"transformers.GPT2LMHeadModel.parallelize.example",$$slots:{default:[Cv]},$$scope:{ctx:G}}}),qs=new S({props:{name:"deparallelize",anchor:"transformers.GPT2LMHeadModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_gpt2.py#L989"}}),Zo=new ce({props:{anchor:"transformers.GPT2LMHeadModel.deparallelize.example",$$slots:{default:[Dv]},$$scope:{ctx:G}}}),Cs=new Ke({}),Ds=new S({props:{name:"class transformers.GPT2DoubleHeadsModel",anchor:"transformers.GPT2DoubleHeadsModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2DoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_gpt2.py#L1131"}}),Hs=new S({props:{name:"forward",anchor:"transformers.GPT2DoubleHeadsModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_token_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"mc_labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2DoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code>. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to
<code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>`,name:"labels"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.mc_labels",description:`<strong>mc_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"mc_labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_gpt2.py#L1205",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new et({props:{$$slots:{default:[Lv]},$$scope:{ctx:G}}}),on=new ce({props:{anchor:"transformers.GPT2DoubleHeadsModel.forward.example",$$slots:{default:[Ov]},$$scope:{ctx:G}}}),Is=new Ke({}),Ss=new S({props:{name:"class transformers.GPT2ForSequenceClassification",anchor:"transformers.GPT2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_gpt2.py#L1345"}}),Bs=new S({props:{name:"forward",anchor:"transformers.GPT2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_gpt2.py#L1361",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config"
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
`}}),sn=new et({props:{$$slots:{default:[Nv]},$$scope:{ctx:G}}}),an=new ce({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example",$$slots:{default:[Hv]},$$scope:{ctx:G}}}),rn=new ce({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-2",$$slots:{default:[Iv]},$$scope:{ctx:G}}}),ln=new ce({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-3",$$slots:{default:[Sv]},$$scope:{ctx:G}}}),dn=new ce({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-4",$$slots:{default:[Av]},$$scope:{ctx:G}}}),Rs=new Ke({}),Vs=new S({props:{name:"class transformers.GPT2ForTokenClassification",anchor:"transformers.GPT2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_gpt2.py#L1473"}}),Ys=new S({props:{name:"forward",anchor:"transformers.GPT2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_gpt2.py#L1495",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pn=new et({props:{$$slots:{default:[Wv]},$$scope:{ctx:G}}}),hn=new ce({props:{anchor:"transformers.GPT2ForTokenClassification.forward.example",$$slots:{default:[Uv]},$$scope:{ctx:G}}}),un=new ce({props:{anchor:"transformers.GPT2ForTokenClassification.forward.example-2",$$slots:{default:[Bv]},$$scope:{ctx:G}}}),Qs=new Ke({}),Zs=new S({props:{name:"class transformers.TFGPT2Model",anchor:"transformers.TFGPT2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_tf_gpt2.py#L711"}}),fn=new et({props:{$$slots:{default:[Rv]},$$scope:{ctx:G}}}),na=new S({props:{name:"call",anchor:"transformers.TFGPT2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_tf_gpt2.py#L716",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gn=new et({props:{$$slots:{default:[Vv]},$$scope:{ctx:G}}}),_n=new ce({props:{anchor:"transformers.TFGPT2Model.call.example",$$slots:{default:[Kv]},$$scope:{ctx:G}}}),sa=new Ke({}),aa=new S({props:{name:"class transformers.TFGPT2LMHeadModel",anchor:"transformers.TFGPT2LMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_tf_gpt2.py#L809"}}),vn=new et({props:{$$slots:{default:[Jv]},$$scope:{ctx:G}}}),da=new S({props:{name:"call",anchor:"transformers.TFGPT2LMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2LMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_tf_gpt2.py#L845",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),bn=new et({props:{$$slots:{default:[Xv]},$$scope:{ctx:G}}}),yn=new ce({props:{anchor:"transformers.TFGPT2LMHeadModel.call.example",$$slots:{default:[Yv]},$$scope:{ctx:G}}}),ca=new Ke({}),pa=new S({props:{name:"class transformers.TFGPT2DoubleHeadsModel",anchor:"transformers.TFGPT2DoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2DoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_tf_gpt2.py#L960"}}),wn=new et({props:{$$slots:{default:[Qv]},$$scope:{ctx:G}}}),fa=new S({props:{name:"call",anchor:"transformers.TFGPT2DoubleHeadsModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mc_token_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2DoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_tf_gpt2.py#L969",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$n=new et({props:{$$slots:{default:[Zv]},$$scope:{ctx:G}}}),Pn=new ce({props:{anchor:"transformers.TFGPT2DoubleHeadsModel.call.example",$$slots:{default:[eb]},$$scope:{ctx:G}}}),ga=new Ke({}),_a=new S({props:{name:"class transformers.TFGPT2ForSequenceClassification",anchor:"transformers.TFGPT2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1108"}}),Gn=new et({props:{$$slots:{default:[tb]},$$scope:{ctx:G}}}),ya=new S({props:{name:"call",anchor:"transformers.TFGPT2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1120",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xn=new et({props:{$$slots:{default:[ob]},$$scope:{ctx:G}}}),jn=new ce({props:{anchor:"transformers.TFGPT2ForSequenceClassification.call.example",$$slots:{default:[nb]},$$scope:{ctx:G}}}),Fn=new ce({props:{anchor:"transformers.TFGPT2ForSequenceClassification.call.example-2",$$slots:{default:[sb]},$$scope:{ctx:G}}}),ka=new Ke({}),wa=new S({props:{name:"class transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/modeling_tf_outputs.py#L894"}}),$a=new Ke({}),Pa=new S({props:{name:"class transformers.FlaxGPT2Model",anchor:"transformers.FlaxGPT2Model",parameters:[{name:"config",val:": GPT2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPT2Model.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_flax_gpt2.py#L665"}}),qa=new S({props:{name:"__call__",anchor:"transformers.FlaxGPT2Model.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPT2Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_flax_gpt2.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qn=new et({props:{$$slots:{default:[ab]},$$scope:{ctx:G}}}),Cn=new ce({props:{anchor:"transformers.FlaxGPT2Model.__call__.example",$$slots:{default:[rb]},$$scope:{ctx:G}}}),Ca=new Ke({}),Da=new S({props:{name:"class transformers.FlaxGPT2LMHeadModel",anchor:"transformers.FlaxGPT2LMHeadModel",parameters:[{name:"config",val:": GPT2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPT2LMHeadModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_flax_gpt2.py#L743"}}),Wa=new S({props:{name:"__call__",anchor:"transformers.FlaxGPT2LMHeadModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/gpt2/modeling_flax_gpt2.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ln=new et({props:{$$slots:{default:[ib]},$$scope:{ctx:G}}}),On=new ce({props:{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.example",$$slots:{default:[lb]},$$scope:{ctx:G}}}),{c(){d=a("meta"),_=h(),p=a("h1"),m=a("a"),T=a("span"),y(l.$$.fragment),c=h(),j=a("span"),se=n("OpenAI GPT2"),V=h(),N=a("h2"),J=a("a"),ae=a("span"),y(x.$$.fragment),$e=h(),K=a("span"),Pe=n("Overview"),be=h(),A=a("p"),Me=n("OpenAI GPT-2 model was proposed in "),le=a("a"),X=n("Language Models are Unsupervised Multitask Learners"),Ge=n(` by Alec
Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei and Ilya Sutskever. It\u2019s a causal (unidirectional)
transformer pretrained using language modeling on a very large corpus of ~40 GB of text data.`),ye=h(),B=a("p"),xe=n("The abstract from the paper is the following:"),ke=h(),R=a("p"),ue=a("em"),je=n(`GPT-2 is a large transformer-based language model with 1.5 billion parameters, trained on a dataset[1] of 8 million
web pages. GPT-2 is trained with a simple objective: predict the next word, given all of the previous words within some
text. The diversity of the dataset causes this simple goal to contain naturally occurring demonstrations of many tasks
across diverse domains. GPT-2 is a direct scale-up of GPT, with more than 10X the parameters and trained on more than
10X the amount of data.`),ie=h(),E=a("p"),C=n("Tips:"),we=h(),H=a("ul"),me=a("li"),Fe=n(`GPT-2 is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Y=h(),de=a("li"),ze=n(`GPT-2 was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),q=a("em"),Ee=n("run_generation.py"),Q=n(" example script."),qe=h(),L=a("li"),Z=n("The model can take the "),fe=a("em"),Ce=n("past_key_values"),W=n(" (for PyTorch) or "),ge=a("em"),ee=n("past"),De=n(` (for TF) as input, which is the previously computed
key/value attention pairs. Using this (`),re=a("em"),D=n("past_key_values"),Le=n(" or "),O=a("em"),Oe=n("past"),Ne=n(`) value prevents the model from re-computing
pre-computed values in the context of text generation. For PyTorch, see `),b=a("em"),F=n("past_key_values"),nt=n(` argument of the
`),ne=a("a"),st=n("GPT2Model.forward()"),at=n(" method, or for TF the "),z=a("em"),rt=n("past"),it=n(` argument of the
`),Re=a("a"),lt=n("TFGPT2Model.call()"),dt=n(" method for more information on its usage."),U=h(),I=a("li"),ct=n("Enabling the "),Je=a("em"),te=n("scale_attn_by_inverse_layer_idx"),pt=n(" and "),Xe=a("em"),He=n("reorder_and_upcast_attn"),ht=n(` flags will apply the training stability
improvements from `),oe=a("a"),ut=n("Mistral"),Pc=n(" (for PyTorch only)."),Ql=h(),to=a("p"),Zn=a("a"),Mc=n("Write With Transformer"),Gc=n(` is a webapp created and hosted by
Hugging Face showcasing the generative capabilities of several models. GPT-2 is one of them and is available in five
different sizes: small, medium, large, xl and a distilled version of the small checkpoint: `),Ir=a("em"),xc=n("distilgpt-2"),jc=n("."),Zl=h(),Rt=a("p"),Fc=n("This model was contributed by "),es=a("a"),zc=n("thomwolf"),Ec=n(". The original code can be found "),ts=a("a"),qc=n("here"),Cc=n("."),ed=h(),oo=a("h2"),Do=a("a"),Sr=a("span"),y(os.$$.fragment),Dc=h(),Ar=a("span"),Lc=n("GPT2Config"),td=h(),Pt=a("div"),y(ns.$$.fragment),Oc=h(),St=a("p"),Nc=n("This is the configuration class to store the configuration of a "),Ja=a("a"),Hc=n("GPT2Model"),Ic=n(" or a "),Xa=a("a"),Sc=n("TFGPT2Model"),Ac=n(`. It is used to
instantiate a GPT-2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GPT-2
`),ss=a("a"),Wc=n("gpt2"),Uc=n(" architecture."),Bc=h(),no=a("p"),Rc=n("Configuration objects inherit from "),Ya=a("a"),Vc=n("PretrainedConfig"),Kc=n(` and can be used to control the model outputs. Read the
documentation from `),Qa=a("a"),Jc=n("PretrainedConfig"),Xc=n(" for more information."),Yc=h(),y(Lo.$$.fragment),od=h(),so=a("h2"),Oo=a("a"),Wr=a("span"),y(as.$$.fragment),Qc=h(),Ur=a("span"),Zc=n("GPT2Tokenizer"),nd=h(),_e=a("div"),y(rs.$$.fragment),ep=h(),Br=a("p"),tp=n("Construct a GPT-2 tokenizer. Based on byte-level Byte-Pair-Encoding."),op=h(),Rr=a("p"),np=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),sp=h(),y(No.$$.fragment),ap=h(),is=a("p"),rp=n("You can get around that behavior by passing "),Vr=a("code"),ip=n("add_prefix_space=True"),lp=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),dp=h(),y(Ho.$$.fragment),cp=h(),ls=a("p"),pp=n("This tokenizer inherits from "),Za=a("a"),hp=n("PreTrainedTokenizer"),up=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),mp=h(),er=a("div"),y(ds.$$.fragment),sd=h(),ao=a("h2"),Io=a("a"),Kr=a("span"),y(cs.$$.fragment),fp=h(),Jr=a("span"),gp=n("GPT2TokenizerFast"),ad=h(),Ie=a("div"),y(ps.$$.fragment),_p=h(),hs=a("p"),Tp=n("Construct a \u201Cfast\u201D GPT-2 tokenizer (backed by HuggingFace\u2019s "),Xr=a("em"),vp=n("tokenizers"),bp=n(` library). Based on byte-level
Byte-Pair-Encoding.`),yp=h(),Yr=a("p"),kp=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),wp=h(),y(So.$$.fragment),$p=h(),us=a("p"),Pp=n("You can get around that behavior by passing "),Qr=a("code"),Mp=n("add_prefix_space=True"),Gp=n(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),xp=h(),y(Ao.$$.fragment),jp=h(),ms=a("p"),Fp=n("This tokenizer inherits from "),tr=a("a"),zp=n("PreTrainedTokenizerFast"),Ep=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),rd=h(),ro=a("h2"),Wo=a("a"),Zr=a("span"),y(fs.$$.fragment),qp=h(),ei=a("span"),Cp=n("GPT2 specific outputs"),id=h(),io=a("div"),y(gs.$$.fragment),Dp=h(),ti=a("p"),Lp=n("Base class for outputs of models predicting if two sentences are consecutive or not."),ld=h(),lo=a("div"),y(_s.$$.fragment),Op=h(),oi=a("p"),Np=n("Base class for outputs of models predicting if two sentences are consecutive or not."),dd=h(),co=a("h2"),Uo=a("a"),ni=a("span"),y(Ts.$$.fragment),Hp=h(),si=a("span"),Ip=n("GPT2Model"),cd=h(),Se=a("div"),y(vs.$$.fragment),Sp=h(),ai=a("p"),Ap=n("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),Wp=h(),bs=a("p"),Up=n("This model inherits from "),or=a("a"),Bp=n("PreTrainedModel"),Rp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vp=h(),ys=a("p"),Kp=n("This model is also a PyTorch "),ks=a("a"),Jp=n("torch.nn.Module"),Xp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yp=h(),xt=a("div"),y(ws.$$.fragment),Qp=h(),po=a("p"),Zp=n("The "),nr=a("a"),eh=n("GPT2Model"),th=n(" forward method, overrides the "),ri=a("code"),oh=n("__call__"),nh=n(" special method."),sh=h(),y(Bo.$$.fragment),ah=h(),y(Ro.$$.fragment),rh=h(),jt=a("div"),y($s.$$.fragment),ih=h(),ii=a("p"),lh=n("This is an experimental feature and is a subject to change at a moment\u2019s notice."),dh=h(),li=a("p"),ch=n(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),ph=h(),y(Vo.$$.fragment),hh=h(),Vt=a("div"),y(Ps.$$.fragment),uh=h(),di=a("p"),mh=n("Moves the model to cpu from a model parallel state."),fh=h(),y(Ko.$$.fragment),pd=h(),ho=a("h2"),Jo=a("a"),ci=a("span"),y(Ms.$$.fragment),gh=h(),pi=a("span"),_h=n("GPT2LMHeadModel"),hd=h(),Ae=a("div"),y(Gs.$$.fragment),Th=h(),hi=a("p"),vh=n(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),bh=h(),xs=a("p"),yh=n("This model inherits from "),sr=a("a"),kh=n("PreTrainedModel"),wh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$h=h(),js=a("p"),Ph=n("This model is also a PyTorch "),Fs=a("a"),Mh=n("torch.nn.Module"),Gh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xh=h(),Ft=a("div"),y(zs.$$.fragment),jh=h(),uo=a("p"),Fh=n("The "),ar=a("a"),zh=n("GPT2LMHeadModel"),Eh=n(" forward method, overrides the "),ui=a("code"),qh=n("__call__"),Ch=n(" special method."),Dh=h(),y(Xo.$$.fragment),Lh=h(),y(Yo.$$.fragment),Oh=h(),zt=a("div"),y(Es.$$.fragment),Nh=h(),mi=a("p"),Hh=n("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Ih=h(),fi=a("p"),Sh=n(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Ah=h(),y(Qo.$$.fragment),Wh=h(),Kt=a("div"),y(qs.$$.fragment),Uh=h(),gi=a("p"),Bh=n("Moves the model to cpu from a model parallel state."),Rh=h(),y(Zo.$$.fragment),ud=h(),mo=a("h2"),en=a("a"),_i=a("span"),y(Cs.$$.fragment),Vh=h(),Ti=a("span"),Kh=n("GPT2DoubleHeadsModel"),md=h(),mt=a("div"),y(Ds.$$.fragment),Jh=h(),vi=a("p"),Xh=n(`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Yh=h(),Ls=a("p"),Qh=n("This model inherits from "),rr=a("a"),Zh=n("PreTrainedModel"),eu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tu=h(),Os=a("p"),ou=n("This model is also a PyTorch "),Ns=a("a"),nu=n("torch.nn.Module"),su=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),au=h(),Et=a("div"),y(Hs.$$.fragment),ru=h(),fo=a("p"),iu=n("The "),ir=a("a"),lu=n("GPT2DoubleHeadsModel"),du=n(" forward method, overrides the "),bi=a("code"),cu=n("__call__"),pu=n(" special method."),hu=h(),y(tn.$$.fragment),uu=h(),y(on.$$.fragment),fd=h(),go=a("h2"),nn=a("a"),yi=a("span"),y(Is.$$.fragment),mu=h(),ki=a("span"),fu=n("GPT2ForSequenceClassification"),gd=h(),We=a("div"),y(Ss.$$.fragment),gu=h(),wi=a("p"),_u=n("The GPT2 Model transformer with a sequence classification head on top (linear layer)."),Tu=h(),lr=a("p"),dr=a("a"),vu=n("GPT2ForSequenceClassification"),bu=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),yu=h(),Mt=a("p"),ku=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),$i=a("code"),wu=n("pad_token_id"),$u=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Pi=a("code"),Pu=n("pad_token_id"),Mu=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Mi=a("code"),Gu=n("inputs_embeds"),xu=n(" are passed instead of "),Gi=a("code"),ju=n("input_ids"),Fu=n(`, it does the same (take the last value in
each row of the batch).`),zu=h(),As=a("p"),Eu=n("This model inherits from "),cr=a("a"),qu=n("PreTrainedModel"),Cu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Du=h(),Ws=a("p"),Lu=n("This model is also a PyTorch "),Us=a("a"),Ou=n("torch.nn.Module"),Nu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hu=h(),Ve=a("div"),y(Bs.$$.fragment),Iu=h(),_o=a("p"),Su=n("The "),pr=a("a"),Au=n("GPT2ForSequenceClassification"),Wu=n(" forward method, overrides the "),xi=a("code"),Uu=n("__call__"),Bu=n(" special method."),Ru=h(),y(sn.$$.fragment),Vu=h(),y(an.$$.fragment),Ku=h(),y(rn.$$.fragment),Ju=h(),y(ln.$$.fragment),Xu=h(),y(dn.$$.fragment),_d=h(),To=a("h2"),cn=a("a"),ji=a("span"),y(Rs.$$.fragment),Yu=h(),Fi=a("span"),Qu=n("GPT2ForTokenClassification"),Td=h(),ft=a("div"),y(Vs.$$.fragment),Zu=h(),zi=a("p"),em=n(`GPT2 Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),tm=h(),Ks=a("p"),om=n("This model inherits from "),hr=a("a"),nm=n("PreTrainedModel"),sm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),am=h(),Js=a("p"),rm=n("This model is also a PyTorch "),Xs=a("a"),im=n("torch.nn.Module"),lm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dm=h(),gt=a("div"),y(Ys.$$.fragment),cm=h(),vo=a("p"),pm=n("The "),ur=a("a"),hm=n("GPT2ForTokenClassification"),um=n(" forward method, overrides the "),Ei=a("code"),mm=n("__call__"),fm=n(" special method."),gm=h(),y(pn.$$.fragment),_m=h(),y(hn.$$.fragment),Tm=h(),y(un.$$.fragment),vd=h(),bo=a("h2"),mn=a("a"),qi=a("span"),y(Qs.$$.fragment),vm=h(),Ci=a("span"),bm=n("TFGPT2Model"),bd=h(),Ye=a("div"),y(Zs.$$.fragment),ym=h(),Di=a("p"),km=n("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),wm=h(),ea=a("p"),$m=n("This model inherits from "),mr=a("a"),Pm=n("TFPreTrainedModel"),Mm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gm=h(),ta=a("p"),xm=n("This model is also a "),oa=a("a"),jm=n("tf.keras.Model"),Fm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zm=h(),y(fn.$$.fragment),Em=h(),qt=a("div"),y(na.$$.fragment),qm=h(),yo=a("p"),Cm=n("The "),fr=a("a"),Dm=n("TFGPT2Model"),Lm=n(" forward method, overrides the "),Li=a("code"),Om=n("__call__"),Nm=n(" special method."),Hm=h(),y(gn.$$.fragment),Im=h(),y(_n.$$.fragment),yd=h(),ko=a("h2"),Tn=a("a"),Oi=a("span"),y(sa.$$.fragment),Sm=h(),Ni=a("span"),Am=n("TFGPT2LMHeadModel"),kd=h(),Qe=a("div"),y(aa.$$.fragment),Wm=h(),Hi=a("p"),Um=n(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Bm=h(),ra=a("p"),Rm=n("This model inherits from "),gr=a("a"),Vm=n("TFPreTrainedModel"),Km=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jm=h(),ia=a("p"),Xm=n("This model is also a "),la=a("a"),Ym=n("tf.keras.Model"),Qm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zm=h(),y(vn.$$.fragment),ef=h(),Ct=a("div"),y(da.$$.fragment),tf=h(),wo=a("p"),of=n("The "),_r=a("a"),nf=n("TFGPT2LMHeadModel"),sf=n(" forward method, overrides the "),Ii=a("code"),af=n("__call__"),rf=n(" special method."),lf=h(),y(bn.$$.fragment),df=h(),y(yn.$$.fragment),wd=h(),$o=a("h2"),kn=a("a"),Si=a("span"),y(ca.$$.fragment),cf=h(),Ai=a("span"),pf=n("TFGPT2DoubleHeadsModel"),$d=h(),Ze=a("div"),y(pa.$$.fragment),hf=h(),Wi=a("p"),uf=n(`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),mf=h(),ha=a("p"),ff=n("This model inherits from "),Tr=a("a"),gf=n("TFPreTrainedModel"),_f=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf=h(),ua=a("p"),vf=n("This model is also a "),ma=a("a"),bf=n("tf.keras.Model"),yf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kf=h(),y(wn.$$.fragment),wf=h(),Dt=a("div"),y(fa.$$.fragment),$f=h(),Po=a("p"),Pf=n("The "),vr=a("a"),Mf=n("TFGPT2DoubleHeadsModel"),Gf=n(" forward method, overrides the "),Ui=a("code"),xf=n("__call__"),jf=n(" special method."),Ff=h(),y($n.$$.fragment),zf=h(),y(Pn.$$.fragment),Pd=h(),Mo=a("h2"),Mn=a("a"),Bi=a("span"),y(ga.$$.fragment),Ef=h(),Ri=a("span"),qf=n("TFGPT2ForSequenceClassification"),Md=h(),Te=a("div"),y(_a.$$.fragment),Cf=h(),Vi=a("p"),Df=n("The GPT2 Model transformer with a sequence classification head on top (linear layer)."),Lf=h(),br=a("p"),yr=a("a"),Of=n("TFGPT2ForSequenceClassification"),Nf=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),Hf=h(),Gt=a("p"),If=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ki=a("code"),Sf=n("pad_token_id"),Af=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ji=a("code"),Wf=n("pad_token_id"),Uf=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Xi=a("code"),Bf=n("inputs_embeds"),Rf=n(" are passed instead of "),Yi=a("code"),Vf=n("input_ids"),Kf=n(`, it does the same (take the last value in
each row of the batch).`),Jf=h(),Ta=a("p"),Xf=n("This model inherits from "),kr=a("a"),Yf=n("TFPreTrainedModel"),Qf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zf=h(),va=a("p"),eg=n("This model is also a "),ba=a("a"),tg=n("tf.keras.Model"),og=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ng=h(),y(Gn.$$.fragment),sg=h(),_t=a("div"),y(ya.$$.fragment),ag=h(),Go=a("p"),rg=n("The "),wr=a("a"),ig=n("TFGPT2ForSequenceClassification"),lg=n(" forward method, overrides the "),Qi=a("code"),dg=n("__call__"),cg=n(" special method."),pg=h(),y(xn.$$.fragment),hg=h(),y(jn.$$.fragment),ug=h(),y(Fn.$$.fragment),Gd=h(),xo=a("h2"),zn=a("a"),Zi=a("span"),y(ka.$$.fragment),mg=h(),el=a("span"),fg=n("TFSequenceClassifierOutputWithPast"),xd=h(),jo=a("div"),y(wa.$$.fragment),gg=h(),tl=a("p"),_g=n("Base class for outputs of sentence classification models."),jd=h(),Fo=a("h2"),En=a("a"),ol=a("span"),y($a.$$.fragment),Tg=h(),nl=a("span"),vg=n("FlaxGPT2Model"),Fd=h(),Ue=a("div"),y(Pa.$$.fragment),bg=h(),sl=a("p"),yg=n("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),kg=h(),Ma=a("p"),wg=n("This model inherits from "),$r=a("a"),$g=n("FlaxPreTrainedModel"),Pg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mg=h(),Ga=a("p"),Gg=n(`This model is also a Flax Linen
`),xa=a("a"),xg=n("flax.nn.Module"),jg=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Fg=h(),al=a("p"),zg=n("Finally, this model supports inherent JAX features such as:"),Eg=h(),At=a("ul"),rl=a("li"),ja=a("a"),qg=n("Just-In-Time (JIT) compilation"),Cg=h(),il=a("li"),Fa=a("a"),Dg=n("Automatic Differentiation"),Lg=h(),ll=a("li"),za=a("a"),Og=n("Vectorization"),Ng=h(),dl=a("li"),Ea=a("a"),Hg=n("Parallelization"),Ig=h(),Lt=a("div"),y(qa.$$.fragment),Sg=h(),zo=a("p"),Ag=n("The "),cl=a("code"),Wg=n("FlaxGPT2PreTrainedModel"),Ug=n(" forward method, overrides the "),pl=a("code"),Bg=n("__call__"),Rg=n(" special method."),Vg=h(),y(qn.$$.fragment),Kg=h(),y(Cn.$$.fragment),zd=h(),Eo=a("h2"),Dn=a("a"),hl=a("span"),y(Ca.$$.fragment),Jg=h(),ul=a("span"),Xg=n("FlaxGPT2LMHeadModel"),Ed=h(),Be=a("div"),y(Da.$$.fragment),Yg=h(),ml=a("p"),Qg=n(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Zg=h(),La=a("p"),e_=n("This model inherits from "),Pr=a("a"),t_=n("FlaxPreTrainedModel"),o_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),n_=h(),Oa=a("p"),s_=n(`This model is also a Flax Linen
`),Na=a("a"),a_=n("flax.nn.Module"),r_=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),i_=h(),fl=a("p"),l_=n("Finally, this model supports inherent JAX features such as:"),d_=h(),Wt=a("ul"),gl=a("li"),Ha=a("a"),c_=n("Just-In-Time (JIT) compilation"),p_=h(),_l=a("li"),Ia=a("a"),h_=n("Automatic Differentiation"),u_=h(),Tl=a("li"),Sa=a("a"),m_=n("Vectorization"),f_=h(),vl=a("li"),Aa=a("a"),g_=n("Parallelization"),__=h(),Ot=a("div"),y(Wa.$$.fragment),T_=h(),qo=a("p"),v_=n("The "),bl=a("code"),b_=n("FlaxGPT2PreTrainedModel"),y_=n(" forward method, overrides the "),yl=a("code"),k_=n("__call__"),w_=n(" special method."),$_=h(),y(Ln.$$.fragment),P_=h(),y(On.$$.fragment),this.h()},l(o){const v=yv('[data-svelte="svelte-1phssyn"]',document.head);d=r(v,"META",{name:!0,content:!0}),v.forEach(t),_=u(o),p=r(o,"H1",{class:!0});var Ua=i(p);m=r(Ua,"A",{id:!0,class:!0,href:!0});var kl=i(m);T=r(kl,"SPAN",{});var wl=i(T);k(l.$$.fragment,wl),wl.forEach(t),kl.forEach(t),c=u(Ua),j=r(Ua,"SPAN",{});var $l=i(j);se=s($l,"OpenAI GPT2"),$l.forEach(t),Ua.forEach(t),V=u(o),N=r(o,"H2",{class:!0});var Ba=i(N);J=r(Ba,"A",{id:!0,class:!0,href:!0});var Pl=i(J);ae=r(Pl,"SPAN",{});var Ml=i(ae);k(x.$$.fragment,Ml),Ml.forEach(t),Pl.forEach(t),$e=u(Ba),K=r(Ba,"SPAN",{});var Gl=i(K);Pe=s(Gl,"Overview"),Gl.forEach(t),Ba.forEach(t),be=u(o),A=r(o,"P",{});var Ra=i(A);Me=s(Ra,"OpenAI GPT-2 model was proposed in "),le=r(Ra,"A",{href:!0,rel:!0});var xl=i(le);X=s(xl,"Language Models are Unsupervised Multitask Learners"),xl.forEach(t),Ge=s(Ra,` by Alec
Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei and Ilya Sutskever. It\u2019s a causal (unidirectional)
transformer pretrained using language modeling on a very large corpus of ~40 GB of text data.`),Ra.forEach(t),ye=u(o),B=r(o,"P",{});var jl=i(B);xe=s(jl,"The abstract from the paper is the following:"),jl.forEach(t),ke=u(o),R=r(o,"P",{});var Fl=i(R);ue=r(Fl,"EM",{});var zl=i(ue);je=s(zl,`GPT-2 is a large transformer-based language model with 1.5 billion parameters, trained on a dataset[1] of 8 million
web pages. GPT-2 is trained with a simple objective: predict the next word, given all of the previous words within some
text. The diversity of the dataset causes this simple goal to contain naturally occurring demonstrations of many tasks
across diverse domains. GPT-2 is a direct scale-up of GPT, with more than 10X the parameters and trained on more than
10X the amount of data.`),zl.forEach(t),Fl.forEach(t),ie=u(o),E=r(o,"P",{});var El=i(E);C=s(El,"Tips:"),El.forEach(t),we=u(o),H=r(o,"UL",{});var Ut=i(H);me=r(Ut,"LI",{});var ql=i(me);Fe=s(ql,`GPT-2 is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),ql.forEach(t),Y=u(Ut),de=r(Ut,"LI",{});var Va=i(de);ze=s(Va,`GPT-2 was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),q=r(Va,"EM",{});var Cl=i(q);Ee=s(Cl,"run_generation.py"),Cl.forEach(t),Q=s(Va," example script."),Va.forEach(t),qe=u(Ut),L=r(Ut,"LI",{});var ve=i(L);Z=s(ve,"The model can take the "),fe=r(ve,"EM",{});var Dl=i(fe);Ce=s(Dl,"past_key_values"),Dl.forEach(t),W=s(ve," (for PyTorch) or "),ge=r(ve,"EM",{});var Ll=i(ge);ee=s(Ll,"past"),Ll.forEach(t),De=s(ve,` (for TF) as input, which is the previously computed
key/value attention pairs. Using this (`),re=r(ve,"EM",{});var Ol=i(re);D=s(Ol,"past_key_values"),Ol.forEach(t),Le=s(ve," or "),O=r(ve,"EM",{});var Nl=i(O);Oe=s(Nl,"past"),Nl.forEach(t),Ne=s(ve,`) value prevents the model from re-computing
pre-computed values in the context of text generation. For PyTorch, see `),b=r(ve,"EM",{});var Hl=i(b);F=s(Hl,"past_key_values"),Hl.forEach(t),nt=s(ve,` argument of the
`),ne=r(ve,"A",{href:!0});var Il=i(ne);st=s(Il,"GPT2Model.forward()"),Il.forEach(t),at=s(ve," method, or for TF the "),z=r(ve,"EM",{});var Sl=i(z);rt=s(Sl,"past"),Sl.forEach(t),it=s(ve,` argument of the
`),Re=r(ve,"A",{href:!0});var Al=i(Re);lt=s(Al,"TFGPT2Model.call()"),Al.forEach(t),dt=s(ve," method for more information on its usage."),ve.forEach(t),U=u(Ut),I=r(Ut,"LI",{});var Bt=i(I);ct=s(Bt,"Enabling the "),Je=r(Bt,"EM",{});var Wl=i(Je);te=s(Wl,"scale_attn_by_inverse_layer_idx"),Wl.forEach(t),pt=s(Bt," and "),Xe=r(Bt,"EM",{});var Ul=i(Xe);He=s(Ul,"reorder_and_upcast_attn"),Ul.forEach(t),ht=s(Bt,` flags will apply the training stability
improvements from `),oe=r(Bt,"A",{href:!0,rel:!0});var Bl=i(oe);ut=s(Bl,"Mistral"),Bl.forEach(t),Pc=s(Bt," (for PyTorch only)."),Bt.forEach(t),Ut.forEach(t),Ql=u(o),to=r(o,"P",{});var Nn=i(to);Zn=r(Nn,"A",{href:!0,rel:!0});var Rl=i(Zn);Mc=s(Rl,"Write With Transformer"),Rl.forEach(t),Gc=s(Nn,` is a webapp created and hosted by
Hugging Face showcasing the generative capabilities of several models. GPT-2 is one of them and is available in five
different sizes: small, medium, large, xl and a distilled version of the small checkpoint: `),Ir=r(Nn,"EM",{});var Vl=i(Ir);xc=s(Vl,"distilgpt-2"),Vl.forEach(t),jc=s(Nn,"."),Nn.forEach(t),Zl=u(o),Rt=r(o,"P",{});var Co=i(Rt);Fc=s(Co,"This model was contributed by "),es=r(Co,"A",{href:!0,rel:!0});var Kl=i(es);zc=s(Kl,"thomwolf"),Kl.forEach(t),Ec=s(Co,". The original code can be found "),ts=r(Co,"A",{href:!0,rel:!0});var Jl=i(ts);qc=s(Jl,"here"),Jl.forEach(t),Cc=s(Co,"."),Co.forEach(t),ed=u(o),oo=r(o,"H2",{class:!0});var Ka=i(oo);Do=r(Ka,"A",{id:!0,class:!0,href:!0});var Xl=i(Do);Sr=r(Xl,"SPAN",{});var Yl=i(Sr);k(os.$$.fragment,Yl),Yl.forEach(t),Xl.forEach(t),Dc=u(Ka),Ar=r(Ka,"SPAN",{});var x_=i(Ar);Lc=s(x_,"GPT2Config"),x_.forEach(t),Ka.forEach(t),td=u(o),Pt=r(o,"DIV",{class:!0});var Hn=i(Pt);k(ns.$$.fragment,Hn),Oc=u(Hn),St=r(Hn,"P",{});var In=i(St);Nc=s(In,"This is the configuration class to store the configuration of a "),Ja=r(In,"A",{href:!0});var j_=i(Ja);Hc=s(j_,"GPT2Model"),j_.forEach(t),Ic=s(In," or a "),Xa=r(In,"A",{href:!0});var F_=i(Xa);Sc=s(F_,"TFGPT2Model"),F_.forEach(t),Ac=s(In,`. It is used to
instantiate a GPT-2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GPT-2
`),ss=r(In,"A",{href:!0,rel:!0});var z_=i(ss);Wc=s(z_,"gpt2"),z_.forEach(t),Uc=s(In," architecture."),In.forEach(t),Bc=u(Hn),no=r(Hn,"P",{});var Mr=i(no);Rc=s(Mr,"Configuration objects inherit from "),Ya=r(Mr,"A",{href:!0});var E_=i(Ya);Vc=s(E_,"PretrainedConfig"),E_.forEach(t),Kc=s(Mr,` and can be used to control the model outputs. Read the
documentation from `),Qa=r(Mr,"A",{href:!0});var q_=i(Qa);Jc=s(q_,"PretrainedConfig"),q_.forEach(t),Xc=s(Mr," for more information."),Mr.forEach(t),Yc=u(Hn),k(Lo.$$.fragment,Hn),Hn.forEach(t),od=u(o),so=r(o,"H2",{class:!0});var Cd=i(so);Oo=r(Cd,"A",{id:!0,class:!0,href:!0});var C_=i(Oo);Wr=r(C_,"SPAN",{});var D_=i(Wr);k(as.$$.fragment,D_),D_.forEach(t),C_.forEach(t),Qc=u(Cd),Ur=r(Cd,"SPAN",{});var L_=i(Ur);Zc=s(L_,"GPT2Tokenizer"),L_.forEach(t),Cd.forEach(t),nd=u(o),_e=r(o,"DIV",{class:!0});var tt=i(_e);k(rs.$$.fragment,tt),ep=u(tt),Br=r(tt,"P",{});var O_=i(Br);tp=s(O_,"Construct a GPT-2 tokenizer. Based on byte-level Byte-Pair-Encoding."),O_.forEach(t),op=u(tt),Rr=r(tt,"P",{});var N_=i(Rr);np=s(N_,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),N_.forEach(t),sp=u(tt),k(No.$$.fragment,tt),ap=u(tt),is=r(tt,"P",{});var Dd=i(is);rp=s(Dd,"You can get around that behavior by passing "),Vr=r(Dd,"CODE",{});var H_=i(Vr);ip=s(H_,"add_prefix_space=True"),H_.forEach(t),lp=s(Dd,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Dd.forEach(t),dp=u(tt),k(Ho.$$.fragment,tt),cp=u(tt),ls=r(tt,"P",{});var Ld=i(ls);pp=s(Ld,"This tokenizer inherits from "),Za=r(Ld,"A",{href:!0});var I_=i(Za);hp=s(I_,"PreTrainedTokenizer"),I_.forEach(t),up=s(Ld,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ld.forEach(t),mp=u(tt),er=r(tt,"DIV",{class:!0});var S_=i(er);k(ds.$$.fragment,S_),S_.forEach(t),tt.forEach(t),sd=u(o),ao=r(o,"H2",{class:!0});var Od=i(ao);Io=r(Od,"A",{id:!0,class:!0,href:!0});var A_=i(Io);Kr=r(A_,"SPAN",{});var W_=i(Kr);k(cs.$$.fragment,W_),W_.forEach(t),A_.forEach(t),fp=u(Od),Jr=r(Od,"SPAN",{});var U_=i(Jr);gp=s(U_,"GPT2TokenizerFast"),U_.forEach(t),Od.forEach(t),ad=u(o),Ie=r(o,"DIV",{class:!0});var Tt=i(Ie);k(ps.$$.fragment,Tt),_p=u(Tt),hs=r(Tt,"P",{});var Nd=i(hs);Tp=s(Nd,"Construct a \u201Cfast\u201D GPT-2 tokenizer (backed by HuggingFace\u2019s "),Xr=r(Nd,"EM",{});var B_=i(Xr);vp=s(B_,"tokenizers"),B_.forEach(t),bp=s(Nd,` library). Based on byte-level
Byte-Pair-Encoding.`),Nd.forEach(t),yp=u(Tt),Yr=r(Tt,"P",{});var R_=i(Yr);kp=s(R_,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),R_.forEach(t),wp=u(Tt),k(So.$$.fragment,Tt),$p=u(Tt),us=r(Tt,"P",{});var Hd=i(us);Pp=s(Hd,"You can get around that behavior by passing "),Qr=r(Hd,"CODE",{});var V_=i(Qr);Mp=s(V_,"add_prefix_space=True"),V_.forEach(t),Gp=s(Hd,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Hd.forEach(t),xp=u(Tt),k(Ao.$$.fragment,Tt),jp=u(Tt),ms=r(Tt,"P",{});var Id=i(ms);Fp=s(Id,"This tokenizer inherits from "),tr=r(Id,"A",{href:!0});var K_=i(tr);zp=s(K_,"PreTrainedTokenizerFast"),K_.forEach(t),Ep=s(Id,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Id.forEach(t),Tt.forEach(t),rd=u(o),ro=r(o,"H2",{class:!0});var Sd=i(ro);Wo=r(Sd,"A",{id:!0,class:!0,href:!0});var J_=i(Wo);Zr=r(J_,"SPAN",{});var X_=i(Zr);k(fs.$$.fragment,X_),X_.forEach(t),J_.forEach(t),qp=u(Sd),ei=r(Sd,"SPAN",{});var Y_=i(ei);Cp=s(Y_,"GPT2 specific outputs"),Y_.forEach(t),Sd.forEach(t),id=u(o),io=r(o,"DIV",{class:!0});var Ad=i(io);k(gs.$$.fragment,Ad),Dp=u(Ad),ti=r(Ad,"P",{});var Q_=i(ti);Lp=s(Q_,"Base class for outputs of models predicting if two sentences are consecutive or not."),Q_.forEach(t),Ad.forEach(t),ld=u(o),lo=r(o,"DIV",{class:!0});var Wd=i(lo);k(_s.$$.fragment,Wd),Op=u(Wd),oi=r(Wd,"P",{});var Z_=i(oi);Np=s(Z_,"Base class for outputs of models predicting if two sentences are consecutive or not."),Z_.forEach(t),Wd.forEach(t),dd=u(o),co=r(o,"H2",{class:!0});var Ud=i(co);Uo=r(Ud,"A",{id:!0,class:!0,href:!0});var e2=i(Uo);ni=r(e2,"SPAN",{});var t2=i(ni);k(Ts.$$.fragment,t2),t2.forEach(t),e2.forEach(t),Hp=u(Ud),si=r(Ud,"SPAN",{});var o2=i(si);Ip=s(o2,"GPT2Model"),o2.forEach(t),Ud.forEach(t),cd=u(o),Se=r(o,"DIV",{class:!0});var vt=i(Se);k(vs.$$.fragment,vt),Sp=u(vt),ai=r(vt,"P",{});var n2=i(ai);Ap=s(n2,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),n2.forEach(t),Wp=u(vt),bs=r(vt,"P",{});var Bd=i(bs);Up=s(Bd,"This model inherits from "),or=r(Bd,"A",{href:!0});var s2=i(or);Bp=s(s2,"PreTrainedModel"),s2.forEach(t),Rp=s(Bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bd.forEach(t),Vp=u(vt),ys=r(vt,"P",{});var Rd=i(ys);Kp=s(Rd,"This model is also a PyTorch "),ks=r(Rd,"A",{href:!0,rel:!0});var a2=i(ks);Jp=s(a2,"torch.nn.Module"),a2.forEach(t),Xp=s(Rd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rd.forEach(t),Yp=u(vt),xt=r(vt,"DIV",{class:!0});var Sn=i(xt);k(ws.$$.fragment,Sn),Qp=u(Sn),po=r(Sn,"P",{});var Gr=i(po);Zp=s(Gr,"The "),nr=r(Gr,"A",{href:!0});var r2=i(nr);eh=s(r2,"GPT2Model"),r2.forEach(t),th=s(Gr," forward method, overrides the "),ri=r(Gr,"CODE",{});var i2=i(ri);oh=s(i2,"__call__"),i2.forEach(t),nh=s(Gr," special method."),Gr.forEach(t),sh=u(Sn),k(Bo.$$.fragment,Sn),ah=u(Sn),k(Ro.$$.fragment,Sn),Sn.forEach(t),rh=u(vt),jt=r(vt,"DIV",{class:!0});var An=i(jt);k($s.$$.fragment,An),ih=u(An),ii=r(An,"P",{});var l2=i(ii);lh=s(l2,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),l2.forEach(t),dh=u(An),li=r(An,"P",{});var d2=i(li);ch=s(d2,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),d2.forEach(t),ph=u(An),k(Vo.$$.fragment,An),An.forEach(t),hh=u(vt),Vt=r(vt,"DIV",{class:!0});var xr=i(Vt);k(Ps.$$.fragment,xr),uh=u(xr),di=r(xr,"P",{});var c2=i(di);mh=s(c2,"Moves the model to cpu from a model parallel state."),c2.forEach(t),fh=u(xr),k(Ko.$$.fragment,xr),xr.forEach(t),vt.forEach(t),pd=u(o),ho=r(o,"H2",{class:!0});var Vd=i(ho);Jo=r(Vd,"A",{id:!0,class:!0,href:!0});var p2=i(Jo);ci=r(p2,"SPAN",{});var h2=i(ci);k(Ms.$$.fragment,h2),h2.forEach(t),p2.forEach(t),gh=u(Vd),pi=r(Vd,"SPAN",{});var u2=i(pi);_h=s(u2,"GPT2LMHeadModel"),u2.forEach(t),Vd.forEach(t),hd=u(o),Ae=r(o,"DIV",{class:!0});var bt=i(Ae);k(Gs.$$.fragment,bt),Th=u(bt),hi=r(bt,"P",{});var m2=i(hi);vh=s(m2,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),m2.forEach(t),bh=u(bt),xs=r(bt,"P",{});var Kd=i(xs);yh=s(Kd,"This model inherits from "),sr=r(Kd,"A",{href:!0});var f2=i(sr);kh=s(f2,"PreTrainedModel"),f2.forEach(t),wh=s(Kd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kd.forEach(t),$h=u(bt),js=r(bt,"P",{});var Jd=i(js);Ph=s(Jd,"This model is also a PyTorch "),Fs=r(Jd,"A",{href:!0,rel:!0});var g2=i(Fs);Mh=s(g2,"torch.nn.Module"),g2.forEach(t),Gh=s(Jd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jd.forEach(t),xh=u(bt),Ft=r(bt,"DIV",{class:!0});var Wn=i(Ft);k(zs.$$.fragment,Wn),jh=u(Wn),uo=r(Wn,"P",{});var jr=i(uo);Fh=s(jr,"The "),ar=r(jr,"A",{href:!0});var _2=i(ar);zh=s(_2,"GPT2LMHeadModel"),_2.forEach(t),Eh=s(jr," forward method, overrides the "),ui=r(jr,"CODE",{});var T2=i(ui);qh=s(T2,"__call__"),T2.forEach(t),Ch=s(jr," special method."),jr.forEach(t),Dh=u(Wn),k(Xo.$$.fragment,Wn),Lh=u(Wn),k(Yo.$$.fragment,Wn),Wn.forEach(t),Oh=u(bt),zt=r(bt,"DIV",{class:!0});var Un=i(zt);k(Es.$$.fragment,Un),Nh=u(Un),mi=r(Un,"P",{});var v2=i(mi);Hh=s(v2,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),v2.forEach(t),Ih=u(Un),fi=r(Un,"P",{});var b2=i(fi);Sh=s(b2,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),b2.forEach(t),Ah=u(Un),k(Qo.$$.fragment,Un),Un.forEach(t),Wh=u(bt),Kt=r(bt,"DIV",{class:!0});var Fr=i(Kt);k(qs.$$.fragment,Fr),Uh=u(Fr),gi=r(Fr,"P",{});var y2=i(gi);Bh=s(y2,"Moves the model to cpu from a model parallel state."),y2.forEach(t),Rh=u(Fr),k(Zo.$$.fragment,Fr),Fr.forEach(t),bt.forEach(t),ud=u(o),mo=r(o,"H2",{class:!0});var Xd=i(mo);en=r(Xd,"A",{id:!0,class:!0,href:!0});var k2=i(en);_i=r(k2,"SPAN",{});var w2=i(_i);k(Cs.$$.fragment,w2),w2.forEach(t),k2.forEach(t),Vh=u(Xd),Ti=r(Xd,"SPAN",{});var $2=i(Ti);Kh=s($2,"GPT2DoubleHeadsModel"),$2.forEach(t),Xd.forEach(t),md=u(o),mt=r(o,"DIV",{class:!0});var Jt=i(mt);k(Ds.$$.fragment,Jt),Jh=u(Jt),vi=r(Jt,"P",{});var P2=i(vi);Xh=s(P2,`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),P2.forEach(t),Yh=u(Jt),Ls=r(Jt,"P",{});var Yd=i(Ls);Qh=s(Yd,"This model inherits from "),rr=r(Yd,"A",{href:!0});var M2=i(rr);Zh=s(M2,"PreTrainedModel"),M2.forEach(t),eu=s(Yd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yd.forEach(t),tu=u(Jt),Os=r(Jt,"P",{});var Qd=i(Os);ou=s(Qd,"This model is also a PyTorch "),Ns=r(Qd,"A",{href:!0,rel:!0});var G2=i(Ns);nu=s(G2,"torch.nn.Module"),G2.forEach(t),su=s(Qd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qd.forEach(t),au=u(Jt),Et=r(Jt,"DIV",{class:!0});var Bn=i(Et);k(Hs.$$.fragment,Bn),ru=u(Bn),fo=r(Bn,"P",{});var zr=i(fo);iu=s(zr,"The "),ir=r(zr,"A",{href:!0});var x2=i(ir);lu=s(x2,"GPT2DoubleHeadsModel"),x2.forEach(t),du=s(zr," forward method, overrides the "),bi=r(zr,"CODE",{});var j2=i(bi);cu=s(j2,"__call__"),j2.forEach(t),pu=s(zr," special method."),zr.forEach(t),hu=u(Bn),k(tn.$$.fragment,Bn),uu=u(Bn),k(on.$$.fragment,Bn),Bn.forEach(t),Jt.forEach(t),fd=u(o),go=r(o,"H2",{class:!0});var Zd=i(go);nn=r(Zd,"A",{id:!0,class:!0,href:!0});var F2=i(nn);yi=r(F2,"SPAN",{});var z2=i(yi);k(Is.$$.fragment,z2),z2.forEach(t),F2.forEach(t),mu=u(Zd),ki=r(Zd,"SPAN",{});var E2=i(ki);fu=s(E2,"GPT2ForSequenceClassification"),E2.forEach(t),Zd.forEach(t),gd=u(o),We=r(o,"DIV",{class:!0});var yt=i(We);k(Ss.$$.fragment,yt),gu=u(yt),wi=r(yt,"P",{});var q2=i(wi);_u=s(q2,"The GPT2 Model transformer with a sequence classification head on top (linear layer)."),q2.forEach(t),Tu=u(yt),lr=r(yt,"P",{});var M_=i(lr);dr=r(M_,"A",{href:!0});var C2=i(dr);vu=s(C2,"GPT2ForSequenceClassification"),C2.forEach(t),bu=s(M_,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),M_.forEach(t),yu=u(yt),Mt=r(yt,"P",{});var Xt=i(Mt);ku=s(Xt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),$i=r(Xt,"CODE",{});var D2=i($i);wu=s(D2,"pad_token_id"),D2.forEach(t),$u=s(Xt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Pi=r(Xt,"CODE",{});var L2=i(Pi);Pu=s(L2,"pad_token_id"),L2.forEach(t),Mu=s(Xt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Mi=r(Xt,"CODE",{});var O2=i(Mi);Gu=s(O2,"inputs_embeds"),O2.forEach(t),xu=s(Xt," are passed instead of "),Gi=r(Xt,"CODE",{});var N2=i(Gi);ju=s(N2,"input_ids"),N2.forEach(t),Fu=s(Xt,`, it does the same (take the last value in
each row of the batch).`),Xt.forEach(t),zu=u(yt),As=r(yt,"P",{});var ec=i(As);Eu=s(ec,"This model inherits from "),cr=r(ec,"A",{href:!0});var H2=i(cr);qu=s(H2,"PreTrainedModel"),H2.forEach(t),Cu=s(ec,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ec.forEach(t),Du=u(yt),Ws=r(yt,"P",{});var tc=i(Ws);Lu=s(tc,"This model is also a PyTorch "),Us=r(tc,"A",{href:!0,rel:!0});var I2=i(Us);Ou=s(I2,"torch.nn.Module"),I2.forEach(t),Nu=s(tc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tc.forEach(t),Hu=u(yt),Ve=r(yt,"DIV",{class:!0});var kt=i(Ve);k(Bs.$$.fragment,kt),Iu=u(kt),_o=r(kt,"P",{});var Er=i(_o);Su=s(Er,"The "),pr=r(Er,"A",{href:!0});var S2=i(pr);Au=s(S2,"GPT2ForSequenceClassification"),S2.forEach(t),Wu=s(Er," forward method, overrides the "),xi=r(Er,"CODE",{});var A2=i(xi);Uu=s(A2,"__call__"),A2.forEach(t),Bu=s(Er," special method."),Er.forEach(t),Ru=u(kt),k(sn.$$.fragment,kt),Vu=u(kt),k(an.$$.fragment,kt),Ku=u(kt),k(rn.$$.fragment,kt),Ju=u(kt),k(ln.$$.fragment,kt),Xu=u(kt),k(dn.$$.fragment,kt),kt.forEach(t),yt.forEach(t),_d=u(o),To=r(o,"H2",{class:!0});var oc=i(To);cn=r(oc,"A",{id:!0,class:!0,href:!0});var W2=i(cn);ji=r(W2,"SPAN",{});var U2=i(ji);k(Rs.$$.fragment,U2),U2.forEach(t),W2.forEach(t),Yu=u(oc),Fi=r(oc,"SPAN",{});var B2=i(Fi);Qu=s(B2,"GPT2ForTokenClassification"),B2.forEach(t),oc.forEach(t),Td=u(o),ft=r(o,"DIV",{class:!0});var Yt=i(ft);k(Vs.$$.fragment,Yt),Zu=u(Yt),zi=r(Yt,"P",{});var R2=i(zi);em=s(R2,`GPT2 Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),R2.forEach(t),tm=u(Yt),Ks=r(Yt,"P",{});var nc=i(Ks);om=s(nc,"This model inherits from "),hr=r(nc,"A",{href:!0});var V2=i(hr);nm=s(V2,"PreTrainedModel"),V2.forEach(t),sm=s(nc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nc.forEach(t),am=u(Yt),Js=r(Yt,"P",{});var sc=i(Js);rm=s(sc,"This model is also a PyTorch "),Xs=r(sc,"A",{href:!0,rel:!0});var K2=i(Xs);im=s(K2,"torch.nn.Module"),K2.forEach(t),lm=s(sc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sc.forEach(t),dm=u(Yt),gt=r(Yt,"DIV",{class:!0});var Qt=i(gt);k(Ys.$$.fragment,Qt),cm=u(Qt),vo=r(Qt,"P",{});var qr=i(vo);pm=s(qr,"The "),ur=r(qr,"A",{href:!0});var J2=i(ur);hm=s(J2,"GPT2ForTokenClassification"),J2.forEach(t),um=s(qr," forward method, overrides the "),Ei=r(qr,"CODE",{});var X2=i(Ei);mm=s(X2,"__call__"),X2.forEach(t),fm=s(qr," special method."),qr.forEach(t),gm=u(Qt),k(pn.$$.fragment,Qt),_m=u(Qt),k(hn.$$.fragment,Qt),Tm=u(Qt),k(un.$$.fragment,Qt),Qt.forEach(t),Yt.forEach(t),vd=u(o),bo=r(o,"H2",{class:!0});var ac=i(bo);mn=r(ac,"A",{id:!0,class:!0,href:!0});var Y2=i(mn);qi=r(Y2,"SPAN",{});var Q2=i(qi);k(Qs.$$.fragment,Q2),Q2.forEach(t),Y2.forEach(t),vm=u(ac),Ci=r(ac,"SPAN",{});var Z2=i(Ci);bm=s(Z2,"TFGPT2Model"),Z2.forEach(t),ac.forEach(t),bd=u(o),Ye=r(o,"DIV",{class:!0});var Nt=i(Ye);k(Zs.$$.fragment,Nt),ym=u(Nt),Di=r(Nt,"P",{});var eT=i(Di);km=s(eT,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),eT.forEach(t),wm=u(Nt),ea=r(Nt,"P",{});var rc=i(ea);$m=s(rc,"This model inherits from "),mr=r(rc,"A",{href:!0});var tT=i(mr);Pm=s(tT,"TFPreTrainedModel"),tT.forEach(t),Mm=s(rc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rc.forEach(t),Gm=u(Nt),ta=r(Nt,"P",{});var ic=i(ta);xm=s(ic,"This model is also a "),oa=r(ic,"A",{href:!0,rel:!0});var oT=i(oa);jm=s(oT,"tf.keras.Model"),oT.forEach(t),Fm=s(ic,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ic.forEach(t),zm=u(Nt),k(fn.$$.fragment,Nt),Em=u(Nt),qt=r(Nt,"DIV",{class:!0});var Rn=i(qt);k(na.$$.fragment,Rn),qm=u(Rn),yo=r(Rn,"P",{});var Cr=i(yo);Cm=s(Cr,"The "),fr=r(Cr,"A",{href:!0});var nT=i(fr);Dm=s(nT,"TFGPT2Model"),nT.forEach(t),Lm=s(Cr," forward method, overrides the "),Li=r(Cr,"CODE",{});var sT=i(Li);Om=s(sT,"__call__"),sT.forEach(t),Nm=s(Cr," special method."),Cr.forEach(t),Hm=u(Rn),k(gn.$$.fragment,Rn),Im=u(Rn),k(_n.$$.fragment,Rn),Rn.forEach(t),Nt.forEach(t),yd=u(o),ko=r(o,"H2",{class:!0});var lc=i(ko);Tn=r(lc,"A",{id:!0,class:!0,href:!0});var aT=i(Tn);Oi=r(aT,"SPAN",{});var rT=i(Oi);k(sa.$$.fragment,rT),rT.forEach(t),aT.forEach(t),Sm=u(lc),Ni=r(lc,"SPAN",{});var iT=i(Ni);Am=s(iT,"TFGPT2LMHeadModel"),iT.forEach(t),lc.forEach(t),kd=u(o),Qe=r(o,"DIV",{class:!0});var Ht=i(Qe);k(aa.$$.fragment,Ht),Wm=u(Ht),Hi=r(Ht,"P",{});var lT=i(Hi);Um=s(lT,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),lT.forEach(t),Bm=u(Ht),ra=r(Ht,"P",{});var dc=i(ra);Rm=s(dc,"This model inherits from "),gr=r(dc,"A",{href:!0});var dT=i(gr);Vm=s(dT,"TFPreTrainedModel"),dT.forEach(t),Km=s(dc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dc.forEach(t),Jm=u(Ht),ia=r(Ht,"P",{});var cc=i(ia);Xm=s(cc,"This model is also a "),la=r(cc,"A",{href:!0,rel:!0});var cT=i(la);Ym=s(cT,"tf.keras.Model"),cT.forEach(t),Qm=s(cc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cc.forEach(t),Zm=u(Ht),k(vn.$$.fragment,Ht),ef=u(Ht),Ct=r(Ht,"DIV",{class:!0});var Vn=i(Ct);k(da.$$.fragment,Vn),tf=u(Vn),wo=r(Vn,"P",{});var Dr=i(wo);of=s(Dr,"The "),_r=r(Dr,"A",{href:!0});var pT=i(_r);nf=s(pT,"TFGPT2LMHeadModel"),pT.forEach(t),sf=s(Dr," forward method, overrides the "),Ii=r(Dr,"CODE",{});var hT=i(Ii);af=s(hT,"__call__"),hT.forEach(t),rf=s(Dr," special method."),Dr.forEach(t),lf=u(Vn),k(bn.$$.fragment,Vn),df=u(Vn),k(yn.$$.fragment,Vn),Vn.forEach(t),Ht.forEach(t),wd=u(o),$o=r(o,"H2",{class:!0});var pc=i($o);kn=r(pc,"A",{id:!0,class:!0,href:!0});var uT=i(kn);Si=r(uT,"SPAN",{});var mT=i(Si);k(ca.$$.fragment,mT),mT.forEach(t),uT.forEach(t),cf=u(pc),Ai=r(pc,"SPAN",{});var fT=i(Ai);pf=s(fT,"TFGPT2DoubleHeadsModel"),fT.forEach(t),pc.forEach(t),$d=u(o),Ze=r(o,"DIV",{class:!0});var It=i(Ze);k(pa.$$.fragment,It),hf=u(It),Wi=r(It,"P",{});var gT=i(Wi);uf=s(gT,`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),gT.forEach(t),mf=u(It),ha=r(It,"P",{});var hc=i(ha);ff=s(hc,"This model inherits from "),Tr=r(hc,"A",{href:!0});var _T=i(Tr);gf=s(_T,"TFPreTrainedModel"),_T.forEach(t),_f=s(hc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hc.forEach(t),Tf=u(It),ua=r(It,"P",{});var uc=i(ua);vf=s(uc,"This model is also a "),ma=r(uc,"A",{href:!0,rel:!0});var TT=i(ma);bf=s(TT,"tf.keras.Model"),TT.forEach(t),yf=s(uc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uc.forEach(t),kf=u(It),k(wn.$$.fragment,It),wf=u(It),Dt=r(It,"DIV",{class:!0});var Kn=i(Dt);k(fa.$$.fragment,Kn),$f=u(Kn),Po=r(Kn,"P",{});var Lr=i(Po);Pf=s(Lr,"The "),vr=r(Lr,"A",{href:!0});var vT=i(vr);Mf=s(vT,"TFGPT2DoubleHeadsModel"),vT.forEach(t),Gf=s(Lr," forward method, overrides the "),Ui=r(Lr,"CODE",{});var bT=i(Ui);xf=s(bT,"__call__"),bT.forEach(t),jf=s(Lr," special method."),Lr.forEach(t),Ff=u(Kn),k($n.$$.fragment,Kn),zf=u(Kn),k(Pn.$$.fragment,Kn),Kn.forEach(t),It.forEach(t),Pd=u(o),Mo=r(o,"H2",{class:!0});var mc=i(Mo);Mn=r(mc,"A",{id:!0,class:!0,href:!0});var yT=i(Mn);Bi=r(yT,"SPAN",{});var kT=i(Bi);k(ga.$$.fragment,kT),kT.forEach(t),yT.forEach(t),Ef=u(mc),Ri=r(mc,"SPAN",{});var wT=i(Ri);qf=s(wT,"TFGPT2ForSequenceClassification"),wT.forEach(t),mc.forEach(t),Md=u(o),Te=r(o,"DIV",{class:!0});var ot=i(Te);k(_a.$$.fragment,ot),Cf=u(ot),Vi=r(ot,"P",{});var $T=i(Vi);Df=s($T,"The GPT2 Model transformer with a sequence classification head on top (linear layer)."),$T.forEach(t),Lf=u(ot),br=r(ot,"P",{});var G_=i(br);yr=r(G_,"A",{href:!0});var PT=i(yr);Of=s(PT,"TFGPT2ForSequenceClassification"),PT.forEach(t),Nf=s(G_,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),G_.forEach(t),Hf=u(ot),Gt=r(ot,"P",{});var Zt=i(Gt);If=s(Zt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ki=r(Zt,"CODE",{});var MT=i(Ki);Sf=s(MT,"pad_token_id"),MT.forEach(t),Af=s(Zt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ji=r(Zt,"CODE",{});var GT=i(Ji);Wf=s(GT,"pad_token_id"),GT.forEach(t),Uf=s(Zt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Xi=r(Zt,"CODE",{});var xT=i(Xi);Bf=s(xT,"inputs_embeds"),xT.forEach(t),Rf=s(Zt," are passed instead of "),Yi=r(Zt,"CODE",{});var jT=i(Yi);Vf=s(jT,"input_ids"),jT.forEach(t),Kf=s(Zt,`, it does the same (take the last value in
each row of the batch).`),Zt.forEach(t),Jf=u(ot),Ta=r(ot,"P",{});var fc=i(Ta);Xf=s(fc,"This model inherits from "),kr=r(fc,"A",{href:!0});var FT=i(kr);Yf=s(FT,"TFPreTrainedModel"),FT.forEach(t),Qf=s(fc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fc.forEach(t),Zf=u(ot),va=r(ot,"P",{});var gc=i(va);eg=s(gc,"This model is also a "),ba=r(gc,"A",{href:!0,rel:!0});var zT=i(ba);tg=s(zT,"tf.keras.Model"),zT.forEach(t),og=s(gc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gc.forEach(t),ng=u(ot),k(Gn.$$.fragment,ot),sg=u(ot),_t=r(ot,"DIV",{class:!0});var eo=i(_t);k(ya.$$.fragment,eo),ag=u(eo),Go=r(eo,"P",{});var Or=i(Go);rg=s(Or,"The "),wr=r(Or,"A",{href:!0});var ET=i(wr);ig=s(ET,"TFGPT2ForSequenceClassification"),ET.forEach(t),lg=s(Or," forward method, overrides the "),Qi=r(Or,"CODE",{});var qT=i(Qi);dg=s(qT,"__call__"),qT.forEach(t),cg=s(Or," special method."),Or.forEach(t),pg=u(eo),k(xn.$$.fragment,eo),hg=u(eo),k(jn.$$.fragment,eo),ug=u(eo),k(Fn.$$.fragment,eo),eo.forEach(t),ot.forEach(t),Gd=u(o),xo=r(o,"H2",{class:!0});var _c=i(xo);zn=r(_c,"A",{id:!0,class:!0,href:!0});var CT=i(zn);Zi=r(CT,"SPAN",{});var DT=i(Zi);k(ka.$$.fragment,DT),DT.forEach(t),CT.forEach(t),mg=u(_c),el=r(_c,"SPAN",{});var LT=i(el);fg=s(LT,"TFSequenceClassifierOutputWithPast"),LT.forEach(t),_c.forEach(t),xd=u(o),jo=r(o,"DIV",{class:!0});var Tc=i(jo);k(wa.$$.fragment,Tc),gg=u(Tc),tl=r(Tc,"P",{});var OT=i(tl);_g=s(OT,"Base class for outputs of sentence classification models."),OT.forEach(t),Tc.forEach(t),jd=u(o),Fo=r(o,"H2",{class:!0});var vc=i(Fo);En=r(vc,"A",{id:!0,class:!0,href:!0});var NT=i(En);ol=r(NT,"SPAN",{});var HT=i(ol);k($a.$$.fragment,HT),HT.forEach(t),NT.forEach(t),Tg=u(vc),nl=r(vc,"SPAN",{});var IT=i(nl);vg=s(IT,"FlaxGPT2Model"),IT.forEach(t),vc.forEach(t),Fd=u(o),Ue=r(o,"DIV",{class:!0});var wt=i(Ue);k(Pa.$$.fragment,wt),bg=u(wt),sl=r(wt,"P",{});var ST=i(sl);yg=s(ST,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),ST.forEach(t),kg=u(wt),Ma=r(wt,"P",{});var bc=i(Ma);wg=s(bc,"This model inherits from "),$r=r(bc,"A",{href:!0});var AT=i($r);$g=s(AT,"FlaxPreTrainedModel"),AT.forEach(t),Pg=s(bc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bc.forEach(t),Mg=u(wt),Ga=r(wt,"P",{});var yc=i(Ga);Gg=s(yc,`This model is also a Flax Linen
`),xa=r(yc,"A",{href:!0,rel:!0});var WT=i(xa);xg=s(WT,"flax.nn.Module"),WT.forEach(t),jg=s(yc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),yc.forEach(t),Fg=u(wt),al=r(wt,"P",{});var UT=i(al);zg=s(UT,"Finally, this model supports inherent JAX features such as:"),UT.forEach(t),Eg=u(wt),At=r(wt,"UL",{});var Jn=i(At);rl=r(Jn,"LI",{});var BT=i(rl);ja=r(BT,"A",{href:!0,rel:!0});var RT=i(ja);qg=s(RT,"Just-In-Time (JIT) compilation"),RT.forEach(t),BT.forEach(t),Cg=u(Jn),il=r(Jn,"LI",{});var VT=i(il);Fa=r(VT,"A",{href:!0,rel:!0});var KT=i(Fa);Dg=s(KT,"Automatic Differentiation"),KT.forEach(t),VT.forEach(t),Lg=u(Jn),ll=r(Jn,"LI",{});var JT=i(ll);za=r(JT,"A",{href:!0,rel:!0});var XT=i(za);Og=s(XT,"Vectorization"),XT.forEach(t),JT.forEach(t),Ng=u(Jn),dl=r(Jn,"LI",{});var YT=i(dl);Ea=r(YT,"A",{href:!0,rel:!0});var QT=i(Ea);Hg=s(QT,"Parallelization"),QT.forEach(t),YT.forEach(t),Jn.forEach(t),Ig=u(wt),Lt=r(wt,"DIV",{class:!0});var Xn=i(Lt);k(qa.$$.fragment,Xn),Sg=u(Xn),zo=r(Xn,"P",{});var Nr=i(zo);Ag=s(Nr,"The "),cl=r(Nr,"CODE",{});var ZT=i(cl);Wg=s(ZT,"FlaxGPT2PreTrainedModel"),ZT.forEach(t),Ug=s(Nr," forward method, overrides the "),pl=r(Nr,"CODE",{});var ev=i(pl);Bg=s(ev,"__call__"),ev.forEach(t),Rg=s(Nr," special method."),Nr.forEach(t),Vg=u(Xn),k(qn.$$.fragment,Xn),Kg=u(Xn),k(Cn.$$.fragment,Xn),Xn.forEach(t),wt.forEach(t),zd=u(o),Eo=r(o,"H2",{class:!0});var kc=i(Eo);Dn=r(kc,"A",{id:!0,class:!0,href:!0});var tv=i(Dn);hl=r(tv,"SPAN",{});var ov=i(hl);k(Ca.$$.fragment,ov),ov.forEach(t),tv.forEach(t),Jg=u(kc),ul=r(kc,"SPAN",{});var nv=i(ul);Xg=s(nv,"FlaxGPT2LMHeadModel"),nv.forEach(t),kc.forEach(t),Ed=u(o),Be=r(o,"DIV",{class:!0});var $t=i(Be);k(Da.$$.fragment,$t),Yg=u($t),ml=r($t,"P",{});var sv=i(ml);Qg=s(sv,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),sv.forEach(t),Zg=u($t),La=r($t,"P",{});var wc=i(La);e_=s(wc,"This model inherits from "),Pr=r(wc,"A",{href:!0});var av=i(Pr);t_=s(av,"FlaxPreTrainedModel"),av.forEach(t),o_=s(wc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wc.forEach(t),n_=u($t),Oa=r($t,"P",{});var $c=i(Oa);s_=s($c,`This model is also a Flax Linen
`),Na=r($c,"A",{href:!0,rel:!0});var rv=i(Na);a_=s(rv,"flax.nn.Module"),rv.forEach(t),r_=s($c,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$c.forEach(t),i_=u($t),fl=r($t,"P",{});var iv=i(fl);l_=s(iv,"Finally, this model supports inherent JAX features such as:"),iv.forEach(t),d_=u($t),Wt=r($t,"UL",{});var Yn=i(Wt);gl=r(Yn,"LI",{});var lv=i(gl);Ha=r(lv,"A",{href:!0,rel:!0});var dv=i(Ha);c_=s(dv,"Just-In-Time (JIT) compilation"),dv.forEach(t),lv.forEach(t),p_=u(Yn),_l=r(Yn,"LI",{});var cv=i(_l);Ia=r(cv,"A",{href:!0,rel:!0});var pv=i(Ia);h_=s(pv,"Automatic Differentiation"),pv.forEach(t),cv.forEach(t),u_=u(Yn),Tl=r(Yn,"LI",{});var hv=i(Tl);Sa=r(hv,"A",{href:!0,rel:!0});var uv=i(Sa);m_=s(uv,"Vectorization"),uv.forEach(t),hv.forEach(t),f_=u(Yn),vl=r(Yn,"LI",{});var mv=i(vl);Aa=r(mv,"A",{href:!0,rel:!0});var fv=i(Aa);g_=s(fv,"Parallelization"),fv.forEach(t),mv.forEach(t),Yn.forEach(t),__=u($t),Ot=r($t,"DIV",{class:!0});var Qn=i(Ot);k(Wa.$$.fragment,Qn),T_=u(Qn),qo=r(Qn,"P",{});var Hr=i(qo);v_=s(Hr,"The "),bl=r(Hr,"CODE",{});var gv=i(bl);b_=s(gv,"FlaxGPT2PreTrainedModel"),gv.forEach(t),y_=s(Hr," forward method, overrides the "),yl=r(Hr,"CODE",{});var _v=i(yl);k_=s(_v,"__call__"),_v.forEach(t),w_=s(Hr," special method."),Hr.forEach(t),$_=u(Qn),k(Ln.$$.fragment,Qn),P_=u(Qn),k(On.$$.fragment,Qn),Qn.forEach(t),$t.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(cb)),f(m,"id","openai-gpt2"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#openai-gpt2"),f(p,"class","relative group"),f(J,"id","overview"),f(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(J,"href","#overview"),f(N,"class","relative group"),f(le,"href","https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"),f(le,"rel","nofollow"),f(ne,"href","/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Model.forward"),f(Re,"href","/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.TFGPT2Model.call"),f(oe,"href","https://github.com/stanford-crfm/mistral/"),f(oe,"rel","nofollow"),f(Zn,"href","https://transformer.huggingface.co/doc/gpt2-large"),f(Zn,"rel","nofollow"),f(es,"href","https://huggingface.co/thomwolf"),f(es,"rel","nofollow"),f(ts,"href","https://openai.com/blog/better-language-models/"),f(ts,"rel","nofollow"),f(Do,"id","transformers.GPT2Config"),f(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Do,"href","#transformers.GPT2Config"),f(oo,"class","relative group"),f(Ja,"href","/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Model"),f(Xa,"href","/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.TFGPT2Model"),f(ss,"href","https://huggingface.co/gpt2"),f(ss,"rel","nofollow"),f(Ya,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),f(Qa,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),f(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oo,"id","transformers.GPT2Tokenizer"),f(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Oo,"href","#transformers.GPT2Tokenizer"),f(so,"class","relative group"),f(Za,"href","/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(er,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Io,"id","transformers.GPT2TokenizerFast"),f(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Io,"href","#transformers.GPT2TokenizerFast"),f(ao,"class","relative group"),f(tr,"href","/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wo,"id","transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"),f(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Wo,"href","#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"),f(ro,"class","relative group"),f(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Uo,"id","transformers.GPT2Model"),f(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Uo,"href","#transformers.GPT2Model"),f(co,"class","relative group"),f(or,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),f(ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ks,"rel","nofollow"),f(nr,"href","/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Model"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jo,"id","transformers.GPT2LMHeadModel"),f(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jo,"href","#transformers.GPT2LMHeadModel"),f(ho,"class","relative group"),f(sr,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),f(Fs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Fs,"rel","nofollow"),f(ar,"href","/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2LMHeadModel"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(en,"id","transformers.GPT2DoubleHeadsModel"),f(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(en,"href","#transformers.GPT2DoubleHeadsModel"),f(mo,"class","relative group"),f(rr,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),f(Ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ns,"rel","nofollow"),f(ir,"href","/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel"),f(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nn,"id","transformers.GPT2ForSequenceClassification"),f(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(nn,"href","#transformers.GPT2ForSequenceClassification"),f(go,"class","relative group"),f(dr,"href","/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2ForSequenceClassification"),f(cr,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),f(Us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Us,"rel","nofollow"),f(pr,"href","/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2ForSequenceClassification"),f(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(cn,"id","transformers.GPT2ForTokenClassification"),f(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(cn,"href","#transformers.GPT2ForTokenClassification"),f(To,"class","relative group"),f(hr,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),f(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Xs,"rel","nofollow"),f(ur,"href","/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2ForTokenClassification"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mn,"id","transformers.TFGPT2Model"),f(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(mn,"href","#transformers.TFGPT2Model"),f(bo,"class","relative group"),f(mr,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),f(oa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(oa,"rel","nofollow"),f(fr,"href","/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.TFGPT2Model"),f(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Tn,"id","transformers.TFGPT2LMHeadModel"),f(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Tn,"href","#transformers.TFGPT2LMHeadModel"),f(ko,"class","relative group"),f(gr,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),f(la,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(la,"rel","nofollow"),f(_r,"href","/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.TFGPT2LMHeadModel"),f(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(kn,"id","transformers.TFGPT2DoubleHeadsModel"),f(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(kn,"href","#transformers.TFGPT2DoubleHeadsModel"),f($o,"class","relative group"),f(Tr,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),f(ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ma,"rel","nofollow"),f(vr,"href","/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel"),f(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mn,"id","transformers.TFGPT2ForSequenceClassification"),f(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Mn,"href","#transformers.TFGPT2ForSequenceClassification"),f(Mo,"class","relative group"),f(yr,"href","/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.TFGPT2ForSequenceClassification"),f(kr,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),f(ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ba,"rel","nofollow"),f(wr,"href","/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.TFGPT2ForSequenceClassification"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zn,"id","transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"),f(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(zn,"href","#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"),f(xo,"class","relative group"),f(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(En,"id","transformers.FlaxGPT2Model"),f(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(En,"href","#transformers.FlaxGPT2Model"),f(Fo,"class","relative group"),f($r,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(xa,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(xa,"rel","nofollow"),f(ja,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ja,"rel","nofollow"),f(Fa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Fa,"rel","nofollow"),f(za,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(za,"rel","nofollow"),f(Ea,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ea,"rel","nofollow"),f(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Dn,"id","transformers.FlaxGPT2LMHeadModel"),f(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Dn,"href","#transformers.FlaxGPT2LMHeadModel"),f(Eo,"class","relative group"),f(Pr,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Na,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Na,"rel","nofollow"),f(Ha,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ha,"rel","nofollow"),f(Ia,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ia,"rel","nofollow"),f(Sa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Sa,"rel","nofollow"),f(Aa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Aa,"rel","nofollow"),f(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,v){e(document.head,d),g(o,_,v),g(o,p,v),e(p,m),e(m,T),w(l,T,null),e(p,c),e(p,j),e(j,se),g(o,V,v),g(o,N,v),e(N,J),e(J,ae),w(x,ae,null),e(N,$e),e(N,K),e(K,Pe),g(o,be,v),g(o,A,v),e(A,Me),e(A,le),e(le,X),e(A,Ge),g(o,ye,v),g(o,B,v),e(B,xe),g(o,ke,v),g(o,R,v),e(R,ue),e(ue,je),g(o,ie,v),g(o,E,v),e(E,C),g(o,we,v),g(o,H,v),e(H,me),e(me,Fe),e(H,Y),e(H,de),e(de,ze),e(de,q),e(q,Ee),e(de,Q),e(H,qe),e(H,L),e(L,Z),e(L,fe),e(fe,Ce),e(L,W),e(L,ge),e(ge,ee),e(L,De),e(L,re),e(re,D),e(L,Le),e(L,O),e(O,Oe),e(L,Ne),e(L,b),e(b,F),e(L,nt),e(L,ne),e(ne,st),e(L,at),e(L,z),e(z,rt),e(L,it),e(L,Re),e(Re,lt),e(L,dt),e(H,U),e(H,I),e(I,ct),e(I,Je),e(Je,te),e(I,pt),e(I,Xe),e(Xe,He),e(I,ht),e(I,oe),e(oe,ut),e(I,Pc),g(o,Ql,v),g(o,to,v),e(to,Zn),e(Zn,Mc),e(to,Gc),e(to,Ir),e(Ir,xc),e(to,jc),g(o,Zl,v),g(o,Rt,v),e(Rt,Fc),e(Rt,es),e(es,zc),e(Rt,Ec),e(Rt,ts),e(ts,qc),e(Rt,Cc),g(o,ed,v),g(o,oo,v),e(oo,Do),e(Do,Sr),w(os,Sr,null),e(oo,Dc),e(oo,Ar),e(Ar,Lc),g(o,td,v),g(o,Pt,v),w(ns,Pt,null),e(Pt,Oc),e(Pt,St),e(St,Nc),e(St,Ja),e(Ja,Hc),e(St,Ic),e(St,Xa),e(Xa,Sc),e(St,Ac),e(St,ss),e(ss,Wc),e(St,Uc),e(Pt,Bc),e(Pt,no),e(no,Rc),e(no,Ya),e(Ya,Vc),e(no,Kc),e(no,Qa),e(Qa,Jc),e(no,Xc),e(Pt,Yc),w(Lo,Pt,null),g(o,od,v),g(o,so,v),e(so,Oo),e(Oo,Wr),w(as,Wr,null),e(so,Qc),e(so,Ur),e(Ur,Zc),g(o,nd,v),g(o,_e,v),w(rs,_e,null),e(_e,ep),e(_e,Br),e(Br,tp),e(_e,op),e(_e,Rr),e(Rr,np),e(_e,sp),w(No,_e,null),e(_e,ap),e(_e,is),e(is,rp),e(is,Vr),e(Vr,ip),e(is,lp),e(_e,dp),w(Ho,_e,null),e(_e,cp),e(_e,ls),e(ls,pp),e(ls,Za),e(Za,hp),e(ls,up),e(_e,mp),e(_e,er),w(ds,er,null),g(o,sd,v),g(o,ao,v),e(ao,Io),e(Io,Kr),w(cs,Kr,null),e(ao,fp),e(ao,Jr),e(Jr,gp),g(o,ad,v),g(o,Ie,v),w(ps,Ie,null),e(Ie,_p),e(Ie,hs),e(hs,Tp),e(hs,Xr),e(Xr,vp),e(hs,bp),e(Ie,yp),e(Ie,Yr),e(Yr,kp),e(Ie,wp),w(So,Ie,null),e(Ie,$p),e(Ie,us),e(us,Pp),e(us,Qr),e(Qr,Mp),e(us,Gp),e(Ie,xp),w(Ao,Ie,null),e(Ie,jp),e(Ie,ms),e(ms,Fp),e(ms,tr),e(tr,zp),e(ms,Ep),g(o,rd,v),g(o,ro,v),e(ro,Wo),e(Wo,Zr),w(fs,Zr,null),e(ro,qp),e(ro,ei),e(ei,Cp),g(o,id,v),g(o,io,v),w(gs,io,null),e(io,Dp),e(io,ti),e(ti,Lp),g(o,ld,v),g(o,lo,v),w(_s,lo,null),e(lo,Op),e(lo,oi),e(oi,Np),g(o,dd,v),g(o,co,v),e(co,Uo),e(Uo,ni),w(Ts,ni,null),e(co,Hp),e(co,si),e(si,Ip),g(o,cd,v),g(o,Se,v),w(vs,Se,null),e(Se,Sp),e(Se,ai),e(ai,Ap),e(Se,Wp),e(Se,bs),e(bs,Up),e(bs,or),e(or,Bp),e(bs,Rp),e(Se,Vp),e(Se,ys),e(ys,Kp),e(ys,ks),e(ks,Jp),e(ys,Xp),e(Se,Yp),e(Se,xt),w(ws,xt,null),e(xt,Qp),e(xt,po),e(po,Zp),e(po,nr),e(nr,eh),e(po,th),e(po,ri),e(ri,oh),e(po,nh),e(xt,sh),w(Bo,xt,null),e(xt,ah),w(Ro,xt,null),e(Se,rh),e(Se,jt),w($s,jt,null),e(jt,ih),e(jt,ii),e(ii,lh),e(jt,dh),e(jt,li),e(li,ch),e(jt,ph),w(Vo,jt,null),e(Se,hh),e(Se,Vt),w(Ps,Vt,null),e(Vt,uh),e(Vt,di),e(di,mh),e(Vt,fh),w(Ko,Vt,null),g(o,pd,v),g(o,ho,v),e(ho,Jo),e(Jo,ci),w(Ms,ci,null),e(ho,gh),e(ho,pi),e(pi,_h),g(o,hd,v),g(o,Ae,v),w(Gs,Ae,null),e(Ae,Th),e(Ae,hi),e(hi,vh),e(Ae,bh),e(Ae,xs),e(xs,yh),e(xs,sr),e(sr,kh),e(xs,wh),e(Ae,$h),e(Ae,js),e(js,Ph),e(js,Fs),e(Fs,Mh),e(js,Gh),e(Ae,xh),e(Ae,Ft),w(zs,Ft,null),e(Ft,jh),e(Ft,uo),e(uo,Fh),e(uo,ar),e(ar,zh),e(uo,Eh),e(uo,ui),e(ui,qh),e(uo,Ch),e(Ft,Dh),w(Xo,Ft,null),e(Ft,Lh),w(Yo,Ft,null),e(Ae,Oh),e(Ae,zt),w(Es,zt,null),e(zt,Nh),e(zt,mi),e(mi,Hh),e(zt,Ih),e(zt,fi),e(fi,Sh),e(zt,Ah),w(Qo,zt,null),e(Ae,Wh),e(Ae,Kt),w(qs,Kt,null),e(Kt,Uh),e(Kt,gi),e(gi,Bh),e(Kt,Rh),w(Zo,Kt,null),g(o,ud,v),g(o,mo,v),e(mo,en),e(en,_i),w(Cs,_i,null),e(mo,Vh),e(mo,Ti),e(Ti,Kh),g(o,md,v),g(o,mt,v),w(Ds,mt,null),e(mt,Jh),e(mt,vi),e(vi,Xh),e(mt,Yh),e(mt,Ls),e(Ls,Qh),e(Ls,rr),e(rr,Zh),e(Ls,eu),e(mt,tu),e(mt,Os),e(Os,ou),e(Os,Ns),e(Ns,nu),e(Os,su),e(mt,au),e(mt,Et),w(Hs,Et,null),e(Et,ru),e(Et,fo),e(fo,iu),e(fo,ir),e(ir,lu),e(fo,du),e(fo,bi),e(bi,cu),e(fo,pu),e(Et,hu),w(tn,Et,null),e(Et,uu),w(on,Et,null),g(o,fd,v),g(o,go,v),e(go,nn),e(nn,yi),w(Is,yi,null),e(go,mu),e(go,ki),e(ki,fu),g(o,gd,v),g(o,We,v),w(Ss,We,null),e(We,gu),e(We,wi),e(wi,_u),e(We,Tu),e(We,lr),e(lr,dr),e(dr,vu),e(lr,bu),e(We,yu),e(We,Mt),e(Mt,ku),e(Mt,$i),e($i,wu),e(Mt,$u),e(Mt,Pi),e(Pi,Pu),e(Mt,Mu),e(Mt,Mi),e(Mi,Gu),e(Mt,xu),e(Mt,Gi),e(Gi,ju),e(Mt,Fu),e(We,zu),e(We,As),e(As,Eu),e(As,cr),e(cr,qu),e(As,Cu),e(We,Du),e(We,Ws),e(Ws,Lu),e(Ws,Us),e(Us,Ou),e(Ws,Nu),e(We,Hu),e(We,Ve),w(Bs,Ve,null),e(Ve,Iu),e(Ve,_o),e(_o,Su),e(_o,pr),e(pr,Au),e(_o,Wu),e(_o,xi),e(xi,Uu),e(_o,Bu),e(Ve,Ru),w(sn,Ve,null),e(Ve,Vu),w(an,Ve,null),e(Ve,Ku),w(rn,Ve,null),e(Ve,Ju),w(ln,Ve,null),e(Ve,Xu),w(dn,Ve,null),g(o,_d,v),g(o,To,v),e(To,cn),e(cn,ji),w(Rs,ji,null),e(To,Yu),e(To,Fi),e(Fi,Qu),g(o,Td,v),g(o,ft,v),w(Vs,ft,null),e(ft,Zu),e(ft,zi),e(zi,em),e(ft,tm),e(ft,Ks),e(Ks,om),e(Ks,hr),e(hr,nm),e(Ks,sm),e(ft,am),e(ft,Js),e(Js,rm),e(Js,Xs),e(Xs,im),e(Js,lm),e(ft,dm),e(ft,gt),w(Ys,gt,null),e(gt,cm),e(gt,vo),e(vo,pm),e(vo,ur),e(ur,hm),e(vo,um),e(vo,Ei),e(Ei,mm),e(vo,fm),e(gt,gm),w(pn,gt,null),e(gt,_m),w(hn,gt,null),e(gt,Tm),w(un,gt,null),g(o,vd,v),g(o,bo,v),e(bo,mn),e(mn,qi),w(Qs,qi,null),e(bo,vm),e(bo,Ci),e(Ci,bm),g(o,bd,v),g(o,Ye,v),w(Zs,Ye,null),e(Ye,ym),e(Ye,Di),e(Di,km),e(Ye,wm),e(Ye,ea),e(ea,$m),e(ea,mr),e(mr,Pm),e(ea,Mm),e(Ye,Gm),e(Ye,ta),e(ta,xm),e(ta,oa),e(oa,jm),e(ta,Fm),e(Ye,zm),w(fn,Ye,null),e(Ye,Em),e(Ye,qt),w(na,qt,null),e(qt,qm),e(qt,yo),e(yo,Cm),e(yo,fr),e(fr,Dm),e(yo,Lm),e(yo,Li),e(Li,Om),e(yo,Nm),e(qt,Hm),w(gn,qt,null),e(qt,Im),w(_n,qt,null),g(o,yd,v),g(o,ko,v),e(ko,Tn),e(Tn,Oi),w(sa,Oi,null),e(ko,Sm),e(ko,Ni),e(Ni,Am),g(o,kd,v),g(o,Qe,v),w(aa,Qe,null),e(Qe,Wm),e(Qe,Hi),e(Hi,Um),e(Qe,Bm),e(Qe,ra),e(ra,Rm),e(ra,gr),e(gr,Vm),e(ra,Km),e(Qe,Jm),e(Qe,ia),e(ia,Xm),e(ia,la),e(la,Ym),e(ia,Qm),e(Qe,Zm),w(vn,Qe,null),e(Qe,ef),e(Qe,Ct),w(da,Ct,null),e(Ct,tf),e(Ct,wo),e(wo,of),e(wo,_r),e(_r,nf),e(wo,sf),e(wo,Ii),e(Ii,af),e(wo,rf),e(Ct,lf),w(bn,Ct,null),e(Ct,df),w(yn,Ct,null),g(o,wd,v),g(o,$o,v),e($o,kn),e(kn,Si),w(ca,Si,null),e($o,cf),e($o,Ai),e(Ai,pf),g(o,$d,v),g(o,Ze,v),w(pa,Ze,null),e(Ze,hf),e(Ze,Wi),e(Wi,uf),e(Ze,mf),e(Ze,ha),e(ha,ff),e(ha,Tr),e(Tr,gf),e(ha,_f),e(Ze,Tf),e(Ze,ua),e(ua,vf),e(ua,ma),e(ma,bf),e(ua,yf),e(Ze,kf),w(wn,Ze,null),e(Ze,wf),e(Ze,Dt),w(fa,Dt,null),e(Dt,$f),e(Dt,Po),e(Po,Pf),e(Po,vr),e(vr,Mf),e(Po,Gf),e(Po,Ui),e(Ui,xf),e(Po,jf),e(Dt,Ff),w($n,Dt,null),e(Dt,zf),w(Pn,Dt,null),g(o,Pd,v),g(o,Mo,v),e(Mo,Mn),e(Mn,Bi),w(ga,Bi,null),e(Mo,Ef),e(Mo,Ri),e(Ri,qf),g(o,Md,v),g(o,Te,v),w(_a,Te,null),e(Te,Cf),e(Te,Vi),e(Vi,Df),e(Te,Lf),e(Te,br),e(br,yr),e(yr,Of),e(br,Nf),e(Te,Hf),e(Te,Gt),e(Gt,If),e(Gt,Ki),e(Ki,Sf),e(Gt,Af),e(Gt,Ji),e(Ji,Wf),e(Gt,Uf),e(Gt,Xi),e(Xi,Bf),e(Gt,Rf),e(Gt,Yi),e(Yi,Vf),e(Gt,Kf),e(Te,Jf),e(Te,Ta),e(Ta,Xf),e(Ta,kr),e(kr,Yf),e(Ta,Qf),e(Te,Zf),e(Te,va),e(va,eg),e(va,ba),e(ba,tg),e(va,og),e(Te,ng),w(Gn,Te,null),e(Te,sg),e(Te,_t),w(ya,_t,null),e(_t,ag),e(_t,Go),e(Go,rg),e(Go,wr),e(wr,ig),e(Go,lg),e(Go,Qi),e(Qi,dg),e(Go,cg),e(_t,pg),w(xn,_t,null),e(_t,hg),w(jn,_t,null),e(_t,ug),w(Fn,_t,null),g(o,Gd,v),g(o,xo,v),e(xo,zn),e(zn,Zi),w(ka,Zi,null),e(xo,mg),e(xo,el),e(el,fg),g(o,xd,v),g(o,jo,v),w(wa,jo,null),e(jo,gg),e(jo,tl),e(tl,_g),g(o,jd,v),g(o,Fo,v),e(Fo,En),e(En,ol),w($a,ol,null),e(Fo,Tg),e(Fo,nl),e(nl,vg),g(o,Fd,v),g(o,Ue,v),w(Pa,Ue,null),e(Ue,bg),e(Ue,sl),e(sl,yg),e(Ue,kg),e(Ue,Ma),e(Ma,wg),e(Ma,$r),e($r,$g),e(Ma,Pg),e(Ue,Mg),e(Ue,Ga),e(Ga,Gg),e(Ga,xa),e(xa,xg),e(Ga,jg),e(Ue,Fg),e(Ue,al),e(al,zg),e(Ue,Eg),e(Ue,At),e(At,rl),e(rl,ja),e(ja,qg),e(At,Cg),e(At,il),e(il,Fa),e(Fa,Dg),e(At,Lg),e(At,ll),e(ll,za),e(za,Og),e(At,Ng),e(At,dl),e(dl,Ea),e(Ea,Hg),e(Ue,Ig),e(Ue,Lt),w(qa,Lt,null),e(Lt,Sg),e(Lt,zo),e(zo,Ag),e(zo,cl),e(cl,Wg),e(zo,Ug),e(zo,pl),e(pl,Bg),e(zo,Rg),e(Lt,Vg),w(qn,Lt,null),e(Lt,Kg),w(Cn,Lt,null),g(o,zd,v),g(o,Eo,v),e(Eo,Dn),e(Dn,hl),w(Ca,hl,null),e(Eo,Jg),e(Eo,ul),e(ul,Xg),g(o,Ed,v),g(o,Be,v),w(Da,Be,null),e(Be,Yg),e(Be,ml),e(ml,Qg),e(Be,Zg),e(Be,La),e(La,e_),e(La,Pr),e(Pr,t_),e(La,o_),e(Be,n_),e(Be,Oa),e(Oa,s_),e(Oa,Na),e(Na,a_),e(Oa,r_),e(Be,i_),e(Be,fl),e(fl,l_),e(Be,d_),e(Be,Wt),e(Wt,gl),e(gl,Ha),e(Ha,c_),e(Wt,p_),e(Wt,_l),e(_l,Ia),e(Ia,h_),e(Wt,u_),e(Wt,Tl),e(Tl,Sa),e(Sa,m_),e(Wt,f_),e(Wt,vl),e(vl,Aa),e(Aa,g_),e(Be,__),e(Be,Ot),w(Wa,Ot,null),e(Ot,T_),e(Ot,qo),e(qo,v_),e(qo,bl),e(bl,b_),e(qo,y_),e(qo,yl),e(yl,k_),e(qo,w_),e(Ot,$_),w(Ln,Ot,null),e(Ot,P_),w(On,Ot,null),qd=!0},p(o,[v]){const Ua={};v&2&&(Ua.$$scope={dirty:v,ctx:o}),Lo.$set(Ua);const kl={};v&2&&(kl.$$scope={dirty:v,ctx:o}),No.$set(kl);const wl={};v&2&&(wl.$$scope={dirty:v,ctx:o}),Ho.$set(wl);const $l={};v&2&&($l.$$scope={dirty:v,ctx:o}),So.$set($l);const Ba={};v&2&&(Ba.$$scope={dirty:v,ctx:o}),Ao.$set(Ba);const Pl={};v&2&&(Pl.$$scope={dirty:v,ctx:o}),Bo.$set(Pl);const Ml={};v&2&&(Ml.$$scope={dirty:v,ctx:o}),Ro.$set(Ml);const Gl={};v&2&&(Gl.$$scope={dirty:v,ctx:o}),Vo.$set(Gl);const Ra={};v&2&&(Ra.$$scope={dirty:v,ctx:o}),Ko.$set(Ra);const xl={};v&2&&(xl.$$scope={dirty:v,ctx:o}),Xo.$set(xl);const jl={};v&2&&(jl.$$scope={dirty:v,ctx:o}),Yo.$set(jl);const Fl={};v&2&&(Fl.$$scope={dirty:v,ctx:o}),Qo.$set(Fl);const zl={};v&2&&(zl.$$scope={dirty:v,ctx:o}),Zo.$set(zl);const El={};v&2&&(El.$$scope={dirty:v,ctx:o}),tn.$set(El);const Ut={};v&2&&(Ut.$$scope={dirty:v,ctx:o}),on.$set(Ut);const ql={};v&2&&(ql.$$scope={dirty:v,ctx:o}),sn.$set(ql);const Va={};v&2&&(Va.$$scope={dirty:v,ctx:o}),an.$set(Va);const Cl={};v&2&&(Cl.$$scope={dirty:v,ctx:o}),rn.$set(Cl);const ve={};v&2&&(ve.$$scope={dirty:v,ctx:o}),ln.$set(ve);const Dl={};v&2&&(Dl.$$scope={dirty:v,ctx:o}),dn.$set(Dl);const Ll={};v&2&&(Ll.$$scope={dirty:v,ctx:o}),pn.$set(Ll);const Ol={};v&2&&(Ol.$$scope={dirty:v,ctx:o}),hn.$set(Ol);const Nl={};v&2&&(Nl.$$scope={dirty:v,ctx:o}),un.$set(Nl);const Hl={};v&2&&(Hl.$$scope={dirty:v,ctx:o}),fn.$set(Hl);const Il={};v&2&&(Il.$$scope={dirty:v,ctx:o}),gn.$set(Il);const Sl={};v&2&&(Sl.$$scope={dirty:v,ctx:o}),_n.$set(Sl);const Al={};v&2&&(Al.$$scope={dirty:v,ctx:o}),vn.$set(Al);const Bt={};v&2&&(Bt.$$scope={dirty:v,ctx:o}),bn.$set(Bt);const Wl={};v&2&&(Wl.$$scope={dirty:v,ctx:o}),yn.$set(Wl);const Ul={};v&2&&(Ul.$$scope={dirty:v,ctx:o}),wn.$set(Ul);const Bl={};v&2&&(Bl.$$scope={dirty:v,ctx:o}),$n.$set(Bl);const Nn={};v&2&&(Nn.$$scope={dirty:v,ctx:o}),Pn.$set(Nn);const Rl={};v&2&&(Rl.$$scope={dirty:v,ctx:o}),Gn.$set(Rl);const Vl={};v&2&&(Vl.$$scope={dirty:v,ctx:o}),xn.$set(Vl);const Co={};v&2&&(Co.$$scope={dirty:v,ctx:o}),jn.$set(Co);const Kl={};v&2&&(Kl.$$scope={dirty:v,ctx:o}),Fn.$set(Kl);const Jl={};v&2&&(Jl.$$scope={dirty:v,ctx:o}),qn.$set(Jl);const Ka={};v&2&&(Ka.$$scope={dirty:v,ctx:o}),Cn.$set(Ka);const Xl={};v&2&&(Xl.$$scope={dirty:v,ctx:o}),Ln.$set(Xl);const Yl={};v&2&&(Yl.$$scope={dirty:v,ctx:o}),On.$set(Yl)},i(o){qd||($(l.$$.fragment,o),$(x.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(Lo.$$.fragment,o),$(as.$$.fragment,o),$(rs.$$.fragment,o),$(No.$$.fragment,o),$(Ho.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(So.$$.fragment,o),$(Ao.$$.fragment,o),$(fs.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(Ts.$$.fragment,o),$(vs.$$.fragment,o),$(ws.$$.fragment,o),$(Bo.$$.fragment,o),$(Ro.$$.fragment,o),$($s.$$.fragment,o),$(Vo.$$.fragment,o),$(Ps.$$.fragment,o),$(Ko.$$.fragment,o),$(Ms.$$.fragment,o),$(Gs.$$.fragment,o),$(zs.$$.fragment,o),$(Xo.$$.fragment,o),$(Yo.$$.fragment,o),$(Es.$$.fragment,o),$(Qo.$$.fragment,o),$(qs.$$.fragment,o),$(Zo.$$.fragment,o),$(Cs.$$.fragment,o),$(Ds.$$.fragment,o),$(Hs.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(Is.$$.fragment,o),$(Ss.$$.fragment,o),$(Bs.$$.fragment,o),$(sn.$$.fragment,o),$(an.$$.fragment,o),$(rn.$$.fragment,o),$(ln.$$.fragment,o),$(dn.$$.fragment,o),$(Rs.$$.fragment,o),$(Vs.$$.fragment,o),$(Ys.$$.fragment,o),$(pn.$$.fragment,o),$(hn.$$.fragment,o),$(un.$$.fragment,o),$(Qs.$$.fragment,o),$(Zs.$$.fragment,o),$(fn.$$.fragment,o),$(na.$$.fragment,o),$(gn.$$.fragment,o),$(_n.$$.fragment,o),$(sa.$$.fragment,o),$(aa.$$.fragment,o),$(vn.$$.fragment,o),$(da.$$.fragment,o),$(bn.$$.fragment,o),$(yn.$$.fragment,o),$(ca.$$.fragment,o),$(pa.$$.fragment,o),$(wn.$$.fragment,o),$(fa.$$.fragment,o),$($n.$$.fragment,o),$(Pn.$$.fragment,o),$(ga.$$.fragment,o),$(_a.$$.fragment,o),$(Gn.$$.fragment,o),$(ya.$$.fragment,o),$(xn.$$.fragment,o),$(jn.$$.fragment,o),$(Fn.$$.fragment,o),$(ka.$$.fragment,o),$(wa.$$.fragment,o),$($a.$$.fragment,o),$(Pa.$$.fragment,o),$(qa.$$.fragment,o),$(qn.$$.fragment,o),$(Cn.$$.fragment,o),$(Ca.$$.fragment,o),$(Da.$$.fragment,o),$(Wa.$$.fragment,o),$(Ln.$$.fragment,o),$(On.$$.fragment,o),qd=!0)},o(o){P(l.$$.fragment,o),P(x.$$.fragment,o),P(os.$$.fragment,o),P(ns.$$.fragment,o),P(Lo.$$.fragment,o),P(as.$$.fragment,o),P(rs.$$.fragment,o),P(No.$$.fragment,o),P(Ho.$$.fragment,o),P(ds.$$.fragment,o),P(cs.$$.fragment,o),P(ps.$$.fragment,o),P(So.$$.fragment,o),P(Ao.$$.fragment,o),P(fs.$$.fragment,o),P(gs.$$.fragment,o),P(_s.$$.fragment,o),P(Ts.$$.fragment,o),P(vs.$$.fragment,o),P(ws.$$.fragment,o),P(Bo.$$.fragment,o),P(Ro.$$.fragment,o),P($s.$$.fragment,o),P(Vo.$$.fragment,o),P(Ps.$$.fragment,o),P(Ko.$$.fragment,o),P(Ms.$$.fragment,o),P(Gs.$$.fragment,o),P(zs.$$.fragment,o),P(Xo.$$.fragment,o),P(Yo.$$.fragment,o),P(Es.$$.fragment,o),P(Qo.$$.fragment,o),P(qs.$$.fragment,o),P(Zo.$$.fragment,o),P(Cs.$$.fragment,o),P(Ds.$$.fragment,o),P(Hs.$$.fragment,o),P(tn.$$.fragment,o),P(on.$$.fragment,o),P(Is.$$.fragment,o),P(Ss.$$.fragment,o),P(Bs.$$.fragment,o),P(sn.$$.fragment,o),P(an.$$.fragment,o),P(rn.$$.fragment,o),P(ln.$$.fragment,o),P(dn.$$.fragment,o),P(Rs.$$.fragment,o),P(Vs.$$.fragment,o),P(Ys.$$.fragment,o),P(pn.$$.fragment,o),P(hn.$$.fragment,o),P(un.$$.fragment,o),P(Qs.$$.fragment,o),P(Zs.$$.fragment,o),P(fn.$$.fragment,o),P(na.$$.fragment,o),P(gn.$$.fragment,o),P(_n.$$.fragment,o),P(sa.$$.fragment,o),P(aa.$$.fragment,o),P(vn.$$.fragment,o),P(da.$$.fragment,o),P(bn.$$.fragment,o),P(yn.$$.fragment,o),P(ca.$$.fragment,o),P(pa.$$.fragment,o),P(wn.$$.fragment,o),P(fa.$$.fragment,o),P($n.$$.fragment,o),P(Pn.$$.fragment,o),P(ga.$$.fragment,o),P(_a.$$.fragment,o),P(Gn.$$.fragment,o),P(ya.$$.fragment,o),P(xn.$$.fragment,o),P(jn.$$.fragment,o),P(Fn.$$.fragment,o),P(ka.$$.fragment,o),P(wa.$$.fragment,o),P($a.$$.fragment,o),P(Pa.$$.fragment,o),P(qa.$$.fragment,o),P(qn.$$.fragment,o),P(Cn.$$.fragment,o),P(Ca.$$.fragment,o),P(Da.$$.fragment,o),P(Wa.$$.fragment,o),P(Ln.$$.fragment,o),P(On.$$.fragment,o),qd=!1},d(o){t(d),o&&t(_),o&&t(p),M(l),o&&t(V),o&&t(N),M(x),o&&t(be),o&&t(A),o&&t(ye),o&&t(B),o&&t(ke),o&&t(R),o&&t(ie),o&&t(E),o&&t(we),o&&t(H),o&&t(Ql),o&&t(to),o&&t(Zl),o&&t(Rt),o&&t(ed),o&&t(oo),M(os),o&&t(td),o&&t(Pt),M(ns),M(Lo),o&&t(od),o&&t(so),M(as),o&&t(nd),o&&t(_e),M(rs),M(No),M(Ho),M(ds),o&&t(sd),o&&t(ao),M(cs),o&&t(ad),o&&t(Ie),M(ps),M(So),M(Ao),o&&t(rd),o&&t(ro),M(fs),o&&t(id),o&&t(io),M(gs),o&&t(ld),o&&t(lo),M(_s),o&&t(dd),o&&t(co),M(Ts),o&&t(cd),o&&t(Se),M(vs),M(ws),M(Bo),M(Ro),M($s),M(Vo),M(Ps),M(Ko),o&&t(pd),o&&t(ho),M(Ms),o&&t(hd),o&&t(Ae),M(Gs),M(zs),M(Xo),M(Yo),M(Es),M(Qo),M(qs),M(Zo),o&&t(ud),o&&t(mo),M(Cs),o&&t(md),o&&t(mt),M(Ds),M(Hs),M(tn),M(on),o&&t(fd),o&&t(go),M(Is),o&&t(gd),o&&t(We),M(Ss),M(Bs),M(sn),M(an),M(rn),M(ln),M(dn),o&&t(_d),o&&t(To),M(Rs),o&&t(Td),o&&t(ft),M(Vs),M(Ys),M(pn),M(hn),M(un),o&&t(vd),o&&t(bo),M(Qs),o&&t(bd),o&&t(Ye),M(Zs),M(fn),M(na),M(gn),M(_n),o&&t(yd),o&&t(ko),M(sa),o&&t(kd),o&&t(Qe),M(aa),M(vn),M(da),M(bn),M(yn),o&&t(wd),o&&t($o),M(ca),o&&t($d),o&&t(Ze),M(pa),M(wn),M(fa),M($n),M(Pn),o&&t(Pd),o&&t(Mo),M(ga),o&&t(Md),o&&t(Te),M(_a),M(Gn),M(ya),M(xn),M(jn),M(Fn),o&&t(Gd),o&&t(xo),M(ka),o&&t(xd),o&&t(jo),M(wa),o&&t(jd),o&&t(Fo),M($a),o&&t(Fd),o&&t(Ue),M(Pa),M(qa),M(qn),M(Cn),o&&t(zd),o&&t(Eo),M(Ca),o&&t(Ed),o&&t(Be),M(Da),M(Wa),M(Ln),M(On)}}}const cb={local:"openai-gpt2",sections:[{local:"overview",title:"Overview"},{local:"transformers.GPT2Config",title:"GPT2Config"},{local:"transformers.GPT2Tokenizer",title:"GPT2Tokenizer"},{local:"transformers.GPT2TokenizerFast",title:"GPT2TokenizerFast"},{local:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",title:"GPT2 specific outputs"},{local:"transformers.GPT2Model",title:"GPT2Model"},{local:"transformers.GPT2LMHeadModel",title:"GPT2LMHeadModel"},{local:"transformers.GPT2DoubleHeadsModel",title:"GPT2DoubleHeadsModel"},{local:"transformers.GPT2ForSequenceClassification",title:"GPT2ForSequenceClassification"},{local:"transformers.GPT2ForTokenClassification",title:"GPT2ForTokenClassification"},{local:"transformers.TFGPT2Model",title:"TFGPT2Model"},{local:"transformers.TFGPT2LMHeadModel",title:"TFGPT2LMHeadModel"},{local:"transformers.TFGPT2DoubleHeadsModel",title:"TFGPT2DoubleHeadsModel"},{local:"transformers.TFGPT2ForSequenceClassification",title:"TFGPT2ForSequenceClassification"},{local:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",title:"TFSequenceClassifierOutputWithPast"},{local:"transformers.FlaxGPT2Model",title:"FlaxGPT2Model"},{local:"transformers.FlaxGPT2LMHeadModel",title:"FlaxGPT2LMHeadModel"}],title:"OpenAI GPT2"};function pb(G){return kv(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Tb extends Tv{constructor(d){super();vv(this,d,pb,db,bv,{})}}export{Tb as default,cb as metadata};
