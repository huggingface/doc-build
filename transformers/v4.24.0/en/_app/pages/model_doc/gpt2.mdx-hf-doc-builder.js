import{S as Sy,i as Wy,s as Uy,e as a,k as p,w as y,t as n,M as By,c as r,d as t,m as h,a as i,x as k,h as s,b as f,G as e,g,y as w,q as $,o as P,B as M,v as Ry,L as he}from"../../chunks/vendor-hf-doc-builder.js";import{T as ot}from"../../chunks/Tip-hf-doc-builder.js";import{D as I}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ue}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ve}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as pe}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";import{P as Ky}from"../../chunks/PipelineTag-hf-doc-builder.js";function Vy(G){let d,T,u,m,v;return m=new ue({props:{code:`from transformers import GPT2Config, GPT2Model

# Initializing a GPT2 configuration
configuration = GPT2Config()

# Initializing a model (with random weights) from the configuration
model = GPT2Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Config, GPT2Model

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPT2 configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GPT2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),T=n("Example:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Example:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function Jy(G){let d,T,u,m,v;return m=new ue({props:{code:`from transformers import GPT2Tokenizer
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=a("p"),T=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function Xy(G){let d,T,u,m,v;return{c(){d=a("p"),T=n("When used with "),u=a("code"),m=n("is_split_into_words=True"),v=n(", this tokenizer will add a space before each word (even the first one).")},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"When used with "),u=r(c,"CODE",{});var j=i(u);m=s(j,"is_split_into_words=True"),j.forEach(t),v=s(c,", this tokenizer will add a space before each word (even the first one)."),c.forEach(t)},m(l,c){g(l,d,c),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function Yy(G){let d,T,u,m,v;return m=new ue({props:{code:`from transformers import GPT2TokenizerFast
tokenizer = GPT2TokenizerFast.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2TokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPT2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=a("p"),T=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function Qy(G){let d,T,u,m,v,l,c,j;return{c(){d=a("p"),T=n("When used with "),u=a("code"),m=n("is_split_into_words=True"),v=n(", this tokenizer needs to be instantiated with "),l=a("code"),c=n("add_prefix_space=True"),j=n(".")},l(ae){d=r(ae,"P",{});var K=i(d);T=s(K,"When used with "),u=r(K,"CODE",{});var H=i(u);m=s(H,"is_split_into_words=True"),H.forEach(t),v=s(K,", this tokenizer needs to be instantiated with "),l=r(K,"CODE",{});var J=i(l);c=s(J,"add_prefix_space=True"),J.forEach(t),j=s(K,"."),K.forEach(t)},m(ae,K){g(ae,d,K),e(d,T),e(d,u),e(u,m),e(d,v),e(d,l),e(l,c),e(d,j)},d(ae){ae&&t(d)}}}function Zy(G){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var j=i(u);m=s(j,"Module"),j.forEach(t),v=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function ek(G){let d,T,u,m,v;return m=new ue({props:{code:`from transformers import GPT2Tokenizer, GPT2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),T=n("Example:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Example:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function tk(G){let d,T,u,m,v;return m=new ue({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:
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
model.parallelize(device_map)`}}),{c(){d=a("p"),T=n("Example:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Example:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function ok(G){let d,T,u,m,v;return m=new ue({props:{code:`# On a 4 GPU machine with gpt2-large:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){d=a("p"),T=n("Example:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Example:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function nk(G){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var j=i(u);m=s(j,"Module"),j.forEach(t),v=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function sk(G){let d,T,u,m,v;return m=new ue({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),T=n("Example:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Example:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function ak(G){let d,T,u,m,v;return m=new ue({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:
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
model.parallelize(device_map)`}}),{c(){d=a("p"),T=n("Example:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Example:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function rk(G){let d,T,u,m,v;return m=new ue({props:{code:`# On a 4 GPU machine with gpt2-large:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){d=a("p"),T=n("Example:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Example:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function ik(G){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var j=i(u);m=s(j,"Module"),j.forEach(t),v=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function lk(G){let d,T,u,m,v;return m=new ue({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),{c(){d=a("p"),T=n("Example:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Example:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function dk(G){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var j=i(u);m=s(j,"Module"),j.forEach(t),v=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function ck(G){let d,T,u,m,v;return m=new ue({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),T=n("Example of single-label classification:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Example of single-label classification:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function pk(G){let d,T;return d=new ue({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = GPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">5.28</span>`}}),{c(){y(d.$$.fragment)},l(u){k(d.$$.fragment,u)},m(u,m){w(d,u,m),T=!0},p:he,i(u){T||($(d.$$.fragment,u),T=!0)},o(u){P(d.$$.fragment,u),T=!1},d(u){M(d,u)}}}function hk(G){let d,T,u,m,v;return m=new ue({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),T=n("Example of multi-label classification:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Example of multi-label classification:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function uk(G){let d,T;return d=new ue({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(u){k(d.$$.fragment,u)},m(u,m){w(d,u,m),T=!0},p:he,i(u){T||($(d.$$.fragment,u),T=!0)},o(u){P(d.$$.fragment,u),T=!1},d(u){M(d,u)}}}function mk(G){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var j=i(u);m=s(j,"Module"),j.forEach(t),v=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function fk(G){let d,T,u,m,v;return m=new ue({props:{code:`from transformers import GPT2Tokenizer, GPT2ForTokenClassification
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
[<span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Position&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>]`}}),{c(){d=a("p"),T=n("Example:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Example:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function gk(G){let d,T;return d=new ue({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.25</span>`}}),{c(){y(d.$$.fragment)},l(u){k(d.$$.fragment,u)},m(u,m){w(d,u,m),T=!0},p:he,i(u){T||($(d.$$.fragment,u),T=!0)},o(u){P(d.$$.fragment,u),T=!1},d(u){M(d,u)}}}function _k(G){let d,T,u,m,v,l,c,j,ae,K,H,J,re,x,Me,V,Ge,ke,S,xe,de,X,je,we,B,Fe,$e,R,fe,Ee,le,z,C,Pe,N,ge,ze,Y,ce,qe,q,Ce,Q,De,L,Z,_e,Le,W,Te,ee,Oe,ie,D,He,O,Ne,Ae;return{c(){d=a("p"),T=n("TensorFlow models and layers in "),u=a("code"),m=n("transformers"),v=n(" accept two formats as input:"),l=p(),c=a("ul"),j=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),K=p(),H=a("li"),J=n("having all inputs as a list, tuple or dict in the first positional argument."),re=p(),x=a("p"),Me=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Ge=n("model.fit()"),ke=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),xe=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),X=a("code"),je=n("fit()"),we=n(" and "),B=a("code"),Fe=n("predict()"),$e=n(`, such as when creating your own layers or models with
the Keras `),R=a("code"),fe=n("Functional"),Ee=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),le=p(),z=a("ul"),C=a("li"),Pe=n("a single Tensor with "),N=a("code"),ge=n("input_ids"),ze=n(" only and nothing else: "),Y=a("code"),ce=n("model(input_ids)"),qe=p(),q=a("li"),Ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),De=n("model([input_ids, attention_mask])"),L=n(" or "),Z=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),Le=p(),W=a("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=a("code"),Oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie=p(),D=a("p"),He=n(`Note that when creating models and layers with
`),O=a("a"),Ne=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);T=s(F,"TensorFlow models and layers in "),u=r(F,"CODE",{});var at=i(u);m=s(at,"transformers"),at.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),l=h(b),c=r(b,"UL",{});var ne=i(c);j=r(ne,"LI",{});var rt=i(j);ae=s(rt,"having all inputs as keyword arguments (like PyTorch models), or"),rt.forEach(t),K=h(ne),H=r(ne,"LI",{});var it=i(H);J=s(it,"having all inputs as a list, tuple or dict in the first positional argument."),it.forEach(t),ne.forEach(t),re=h(b),x=r(b,"P",{});var E=i(x);Me=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(E,"CODE",{});var lt=i(V);Ge=s(lt,"model.fit()"),lt.forEach(t),ke=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var dt=i(S);xe=s(dt,"model.fit()"),dt.forEach(t),de=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),X=r(E,"CODE",{});var Je=i(X);je=s(Je,"fit()"),Je.forEach(t),we=s(E," and "),B=r(E,"CODE",{});var ct=i(B);Fe=s(ct,"predict()"),ct.forEach(t),$e=s(E,`, such as when creating your own layers or models with
the Keras `),R=r(E,"CODE",{});var pt=i(R);fe=s(pt,"Functional"),pt.forEach(t),Ee=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),le=h(b),z=r(b,"UL",{});var U=i(z);C=r(U,"LI",{});var A=i(C);Pe=s(A,"a single Tensor with "),N=r(A,"CODE",{});var ht=i(N);ge=s(ht,"input_ids"),ht.forEach(t),ze=s(A," only and nothing else: "),Y=r(A,"CODE",{});var Ye=i(Y);ce=s(Ye,"model(input_ids)"),Ye.forEach(t),A.forEach(t),qe=h(U),q=r(U,"LI",{});var te=i(q);Ce=s(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(te,"CODE",{});var ut=i(Q);De=s(ut,"model([input_ids, attention_mask])"),ut.forEach(t),L=s(te," or "),Z=r(te,"CODE",{});var Qe=i(Z);_e=s(Qe,"model([input_ids, attention_mask, token_type_ids])"),Qe.forEach(t),te.forEach(t),Le=h(U),W=r(U,"LI",{});var Ie=i(W);Te=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=r(Ie,"CODE",{});var mt=i(ee);Oe=s(mt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),mt.forEach(t),Ie.forEach(t),U.forEach(t),ie=h(b),D=r(b,"P",{});var oe=i(D);He=s(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var ft=i(O);Ne=s(ft,"subclassing"),ft.forEach(t),Ae=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,T),e(d,u),e(u,m),e(d,v),g(b,l,F),g(b,c,F),e(c,j),e(j,ae),e(c,K),e(c,H),e(H,J),g(b,re,F),g(b,x,F),e(x,Me),e(x,V),e(V,Ge),e(x,ke),e(x,S),e(S,xe),e(x,de),e(x,X),e(X,je),e(x,we),e(x,B),e(B,Fe),e(x,$e),e(x,R),e(R,fe),e(x,Ee),g(b,le,F),g(b,z,F),e(z,C),e(C,Pe),e(C,N),e(N,ge),e(C,ze),e(C,Y),e(Y,ce),e(z,qe),e(z,q),e(q,Ce),e(q,Q),e(Q,De),e(q,L),e(q,Z),e(Z,_e),e(z,Le),e(z,W),e(W,Te),e(W,ee),e(ee,Oe),g(b,ie,F),g(b,D,F),e(D,He),e(D,O),e(O,Ne),e(D,Ae)},d(b){b&&t(d),b&&t(l),b&&t(c),b&&t(re),b&&t(x),b&&t(le),b&&t(z),b&&t(ie),b&&t(D)}}}function Tk(G){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var j=i(u);m=s(j,"Module"),j.forEach(t),v=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function vk(G){let d,T,u,m,v;return m=new ue({props:{code:`from transformers import GPT2Tokenizer, TFGPT2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),T=n("Example:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Example:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function bk(G){let d,T,u,m,v,l,c,j,ae,K,H,J,re,x,Me,V,Ge,ke,S,xe,de,X,je,we,B,Fe,$e,R,fe,Ee,le,z,C,Pe,N,ge,ze,Y,ce,qe,q,Ce,Q,De,L,Z,_e,Le,W,Te,ee,Oe,ie,D,He,O,Ne,Ae;return{c(){d=a("p"),T=n("TensorFlow models and layers in "),u=a("code"),m=n("transformers"),v=n(" accept two formats as input:"),l=p(),c=a("ul"),j=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),K=p(),H=a("li"),J=n("having all inputs as a list, tuple or dict in the first positional argument."),re=p(),x=a("p"),Me=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Ge=n("model.fit()"),ke=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),xe=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),X=a("code"),je=n("fit()"),we=n(" and "),B=a("code"),Fe=n("predict()"),$e=n(`, such as when creating your own layers or models with
the Keras `),R=a("code"),fe=n("Functional"),Ee=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),le=p(),z=a("ul"),C=a("li"),Pe=n("a single Tensor with "),N=a("code"),ge=n("input_ids"),ze=n(" only and nothing else: "),Y=a("code"),ce=n("model(input_ids)"),qe=p(),q=a("li"),Ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),De=n("model([input_ids, attention_mask])"),L=n(" or "),Z=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),Le=p(),W=a("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=a("code"),Oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie=p(),D=a("p"),He=n(`Note that when creating models and layers with
`),O=a("a"),Ne=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);T=s(F,"TensorFlow models and layers in "),u=r(F,"CODE",{});var at=i(u);m=s(at,"transformers"),at.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),l=h(b),c=r(b,"UL",{});var ne=i(c);j=r(ne,"LI",{});var rt=i(j);ae=s(rt,"having all inputs as keyword arguments (like PyTorch models), or"),rt.forEach(t),K=h(ne),H=r(ne,"LI",{});var it=i(H);J=s(it,"having all inputs as a list, tuple or dict in the first positional argument."),it.forEach(t),ne.forEach(t),re=h(b),x=r(b,"P",{});var E=i(x);Me=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(E,"CODE",{});var lt=i(V);Ge=s(lt,"model.fit()"),lt.forEach(t),ke=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var dt=i(S);xe=s(dt,"model.fit()"),dt.forEach(t),de=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),X=r(E,"CODE",{});var Je=i(X);je=s(Je,"fit()"),Je.forEach(t),we=s(E," and "),B=r(E,"CODE",{});var ct=i(B);Fe=s(ct,"predict()"),ct.forEach(t),$e=s(E,`, such as when creating your own layers or models with
the Keras `),R=r(E,"CODE",{});var pt=i(R);fe=s(pt,"Functional"),pt.forEach(t),Ee=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),le=h(b),z=r(b,"UL",{});var U=i(z);C=r(U,"LI",{});var A=i(C);Pe=s(A,"a single Tensor with "),N=r(A,"CODE",{});var ht=i(N);ge=s(ht,"input_ids"),ht.forEach(t),ze=s(A," only and nothing else: "),Y=r(A,"CODE",{});var Ye=i(Y);ce=s(Ye,"model(input_ids)"),Ye.forEach(t),A.forEach(t),qe=h(U),q=r(U,"LI",{});var te=i(q);Ce=s(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(te,"CODE",{});var ut=i(Q);De=s(ut,"model([input_ids, attention_mask])"),ut.forEach(t),L=s(te," or "),Z=r(te,"CODE",{});var Qe=i(Z);_e=s(Qe,"model([input_ids, attention_mask, token_type_ids])"),Qe.forEach(t),te.forEach(t),Le=h(U),W=r(U,"LI",{});var Ie=i(W);Te=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=r(Ie,"CODE",{});var mt=i(ee);Oe=s(mt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),mt.forEach(t),Ie.forEach(t),U.forEach(t),ie=h(b),D=r(b,"P",{});var oe=i(D);He=s(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var ft=i(O);Ne=s(ft,"subclassing"),ft.forEach(t),Ae=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,T),e(d,u),e(u,m),e(d,v),g(b,l,F),g(b,c,F),e(c,j),e(j,ae),e(c,K),e(c,H),e(H,J),g(b,re,F),g(b,x,F),e(x,Me),e(x,V),e(V,Ge),e(x,ke),e(x,S),e(S,xe),e(x,de),e(x,X),e(X,je),e(x,we),e(x,B),e(B,Fe),e(x,$e),e(x,R),e(R,fe),e(x,Ee),g(b,le,F),g(b,z,F),e(z,C),e(C,Pe),e(C,N),e(N,ge),e(C,ze),e(C,Y),e(Y,ce),e(z,qe),e(z,q),e(q,Ce),e(q,Q),e(Q,De),e(q,L),e(q,Z),e(Z,_e),e(z,Le),e(z,W),e(W,Te),e(W,ee),e(ee,Oe),g(b,ie,F),g(b,D,F),e(D,He),e(D,O),e(O,Ne),e(D,Ae)},d(b){b&&t(d),b&&t(l),b&&t(c),b&&t(re),b&&t(x),b&&t(le),b&&t(z),b&&t(ie),b&&t(D)}}}function yk(G){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var j=i(u);m=s(j,"Module"),j.forEach(t),v=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function kk(G){let d,T,u,m,v;return m=new ue({props:{code:`from transformers import GPT2Tokenizer, TFGPT2LMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),T=n("Example:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Example:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function wk(G){let d,T,u,m,v,l,c,j,ae,K,H,J,re,x,Me,V,Ge,ke,S,xe,de,X,je,we,B,Fe,$e,R,fe,Ee,le,z,C,Pe,N,ge,ze,Y,ce,qe,q,Ce,Q,De,L,Z,_e,Le,W,Te,ee,Oe,ie,D,He,O,Ne,Ae;return{c(){d=a("p"),T=n("TensorFlow models and layers in "),u=a("code"),m=n("transformers"),v=n(" accept two formats as input:"),l=p(),c=a("ul"),j=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),K=p(),H=a("li"),J=n("having all inputs as a list, tuple or dict in the first positional argument."),re=p(),x=a("p"),Me=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Ge=n("model.fit()"),ke=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),xe=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),X=a("code"),je=n("fit()"),we=n(" and "),B=a("code"),Fe=n("predict()"),$e=n(`, such as when creating your own layers or models with
the Keras `),R=a("code"),fe=n("Functional"),Ee=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),le=p(),z=a("ul"),C=a("li"),Pe=n("a single Tensor with "),N=a("code"),ge=n("input_ids"),ze=n(" only and nothing else: "),Y=a("code"),ce=n("model(input_ids)"),qe=p(),q=a("li"),Ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),De=n("model([input_ids, attention_mask])"),L=n(" or "),Z=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),Le=p(),W=a("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=a("code"),Oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie=p(),D=a("p"),He=n(`Note that when creating models and layers with
`),O=a("a"),Ne=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);T=s(F,"TensorFlow models and layers in "),u=r(F,"CODE",{});var at=i(u);m=s(at,"transformers"),at.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),l=h(b),c=r(b,"UL",{});var ne=i(c);j=r(ne,"LI",{});var rt=i(j);ae=s(rt,"having all inputs as keyword arguments (like PyTorch models), or"),rt.forEach(t),K=h(ne),H=r(ne,"LI",{});var it=i(H);J=s(it,"having all inputs as a list, tuple or dict in the first positional argument."),it.forEach(t),ne.forEach(t),re=h(b),x=r(b,"P",{});var E=i(x);Me=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(E,"CODE",{});var lt=i(V);Ge=s(lt,"model.fit()"),lt.forEach(t),ke=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var dt=i(S);xe=s(dt,"model.fit()"),dt.forEach(t),de=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),X=r(E,"CODE",{});var Je=i(X);je=s(Je,"fit()"),Je.forEach(t),we=s(E," and "),B=r(E,"CODE",{});var ct=i(B);Fe=s(ct,"predict()"),ct.forEach(t),$e=s(E,`, such as when creating your own layers or models with
the Keras `),R=r(E,"CODE",{});var pt=i(R);fe=s(pt,"Functional"),pt.forEach(t),Ee=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),le=h(b),z=r(b,"UL",{});var U=i(z);C=r(U,"LI",{});var A=i(C);Pe=s(A,"a single Tensor with "),N=r(A,"CODE",{});var ht=i(N);ge=s(ht,"input_ids"),ht.forEach(t),ze=s(A," only and nothing else: "),Y=r(A,"CODE",{});var Ye=i(Y);ce=s(Ye,"model(input_ids)"),Ye.forEach(t),A.forEach(t),qe=h(U),q=r(U,"LI",{});var te=i(q);Ce=s(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(te,"CODE",{});var ut=i(Q);De=s(ut,"model([input_ids, attention_mask])"),ut.forEach(t),L=s(te," or "),Z=r(te,"CODE",{});var Qe=i(Z);_e=s(Qe,"model([input_ids, attention_mask, token_type_ids])"),Qe.forEach(t),te.forEach(t),Le=h(U),W=r(U,"LI",{});var Ie=i(W);Te=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=r(Ie,"CODE",{});var mt=i(ee);Oe=s(mt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),mt.forEach(t),Ie.forEach(t),U.forEach(t),ie=h(b),D=r(b,"P",{});var oe=i(D);He=s(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var ft=i(O);Ne=s(ft,"subclassing"),ft.forEach(t),Ae=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,T),e(d,u),e(u,m),e(d,v),g(b,l,F),g(b,c,F),e(c,j),e(j,ae),e(c,K),e(c,H),e(H,J),g(b,re,F),g(b,x,F),e(x,Me),e(x,V),e(V,Ge),e(x,ke),e(x,S),e(S,xe),e(x,de),e(x,X),e(X,je),e(x,we),e(x,B),e(B,Fe),e(x,$e),e(x,R),e(R,fe),e(x,Ee),g(b,le,F),g(b,z,F),e(z,C),e(C,Pe),e(C,N),e(N,ge),e(C,ze),e(C,Y),e(Y,ce),e(z,qe),e(z,q),e(q,Ce),e(q,Q),e(Q,De),e(q,L),e(q,Z),e(Z,_e),e(z,Le),e(z,W),e(W,Te),e(W,ee),e(ee,Oe),g(b,ie,F),g(b,D,F),e(D,He),e(D,O),e(O,Ne),e(D,Ae)},d(b){b&&t(d),b&&t(l),b&&t(c),b&&t(re),b&&t(x),b&&t(le),b&&t(z),b&&t(ie),b&&t(D)}}}function $k(G){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var j=i(u);m=s(j,"Module"),j.forEach(t),v=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function Pk(G){let d,T,u,m,v;return m=new ue({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=a("p"),T=n("Examples:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Examples:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function Mk(G){let d,T,u,m,v,l,c,j,ae,K,H,J,re,x,Me,V,Ge,ke,S,xe,de,X,je,we,B,Fe,$e,R,fe,Ee,le,z,C,Pe,N,ge,ze,Y,ce,qe,q,Ce,Q,De,L,Z,_e,Le,W,Te,ee,Oe,ie,D,He,O,Ne,Ae;return{c(){d=a("p"),T=n("TensorFlow models and layers in "),u=a("code"),m=n("transformers"),v=n(" accept two formats as input:"),l=p(),c=a("ul"),j=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),K=p(),H=a("li"),J=n("having all inputs as a list, tuple or dict in the first positional argument."),re=p(),x=a("p"),Me=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Ge=n("model.fit()"),ke=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),xe=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),X=a("code"),je=n("fit()"),we=n(" and "),B=a("code"),Fe=n("predict()"),$e=n(`, such as when creating your own layers or models with
the Keras `),R=a("code"),fe=n("Functional"),Ee=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),le=p(),z=a("ul"),C=a("li"),Pe=n("a single Tensor with "),N=a("code"),ge=n("input_ids"),ze=n(" only and nothing else: "),Y=a("code"),ce=n("model(input_ids)"),qe=p(),q=a("li"),Ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),De=n("model([input_ids, attention_mask])"),L=n(" or "),Z=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),Le=p(),W=a("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=a("code"),Oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie=p(),D=a("p"),He=n(`Note that when creating models and layers with
`),O=a("a"),Ne=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);T=s(F,"TensorFlow models and layers in "),u=r(F,"CODE",{});var at=i(u);m=s(at,"transformers"),at.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),l=h(b),c=r(b,"UL",{});var ne=i(c);j=r(ne,"LI",{});var rt=i(j);ae=s(rt,"having all inputs as keyword arguments (like PyTorch models), or"),rt.forEach(t),K=h(ne),H=r(ne,"LI",{});var it=i(H);J=s(it,"having all inputs as a list, tuple or dict in the first positional argument."),it.forEach(t),ne.forEach(t),re=h(b),x=r(b,"P",{});var E=i(x);Me=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(E,"CODE",{});var lt=i(V);Ge=s(lt,"model.fit()"),lt.forEach(t),ke=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var dt=i(S);xe=s(dt,"model.fit()"),dt.forEach(t),de=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),X=r(E,"CODE",{});var Je=i(X);je=s(Je,"fit()"),Je.forEach(t),we=s(E," and "),B=r(E,"CODE",{});var ct=i(B);Fe=s(ct,"predict()"),ct.forEach(t),$e=s(E,`, such as when creating your own layers or models with
the Keras `),R=r(E,"CODE",{});var pt=i(R);fe=s(pt,"Functional"),pt.forEach(t),Ee=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),le=h(b),z=r(b,"UL",{});var U=i(z);C=r(U,"LI",{});var A=i(C);Pe=s(A,"a single Tensor with "),N=r(A,"CODE",{});var ht=i(N);ge=s(ht,"input_ids"),ht.forEach(t),ze=s(A," only and nothing else: "),Y=r(A,"CODE",{});var Ye=i(Y);ce=s(Ye,"model(input_ids)"),Ye.forEach(t),A.forEach(t),qe=h(U),q=r(U,"LI",{});var te=i(q);Ce=s(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(te,"CODE",{});var ut=i(Q);De=s(ut,"model([input_ids, attention_mask])"),ut.forEach(t),L=s(te," or "),Z=r(te,"CODE",{});var Qe=i(Z);_e=s(Qe,"model([input_ids, attention_mask, token_type_ids])"),Qe.forEach(t),te.forEach(t),Le=h(U),W=r(U,"LI",{});var Ie=i(W);Te=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=r(Ie,"CODE",{});var mt=i(ee);Oe=s(mt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),mt.forEach(t),Ie.forEach(t),U.forEach(t),ie=h(b),D=r(b,"P",{});var oe=i(D);He=s(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var ft=i(O);Ne=s(ft,"subclassing"),ft.forEach(t),Ae=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,T),e(d,u),e(u,m),e(d,v),g(b,l,F),g(b,c,F),e(c,j),e(j,ae),e(c,K),e(c,H),e(H,J),g(b,re,F),g(b,x,F),e(x,Me),e(x,V),e(V,Ge),e(x,ke),e(x,S),e(S,xe),e(x,de),e(x,X),e(X,je),e(x,we),e(x,B),e(B,Fe),e(x,$e),e(x,R),e(R,fe),e(x,Ee),g(b,le,F),g(b,z,F),e(z,C),e(C,Pe),e(C,N),e(N,ge),e(C,ze),e(C,Y),e(Y,ce),e(z,qe),e(z,q),e(q,Ce),e(q,Q),e(Q,De),e(q,L),e(q,Z),e(Z,_e),e(z,Le),e(z,W),e(W,Te),e(W,ee),e(ee,Oe),g(b,ie,F),g(b,D,F),e(D,He),e(D,O),e(O,Ne),e(D,Ae)},d(b){b&&t(d),b&&t(l),b&&t(c),b&&t(re),b&&t(x),b&&t(le),b&&t(z),b&&t(ie),b&&t(D)}}}function Gk(G){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var j=i(u);m=s(j,"Module"),j.forEach(t),v=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function xk(G){let d,T,u,m,v;return m=new ue({props:{code:`from transformers import GPT2Tokenizer, TFGPT2ForSequenceClassification
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
`}}),{c(){d=a("p"),T=n("Example:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Example:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function jk(G){let d,T;return d=new ue({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(d.$$.fragment)},l(u){k(d.$$.fragment,u)},m(u,m){w(d,u,m),T=!0},p:he,i(u){T||($(d.$$.fragment,u),T=!0)},o(u){P(d.$$.fragment,u),T=!1},d(u){M(d,u)}}}function Fk(G){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var j=i(u);m=s(j,"Module"),j.forEach(t),v=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function Ek(G){let d,T,u,m,v;return m=new ue({props:{code:`from transformers import GPT2Tokenizer, FlaxGPT2Model

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = FlaxGPT2Model.from_pretrained("gpt2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxGPT2Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPT2Model.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),T=n("Example:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Example:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function zk(G){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var j=i(u);m=s(j,"Module"),j.forEach(t),v=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function qk(G){let d,T,u,m,v;return m=new ue({props:{code:`from transformers import GPT2Tokenizer, FlaxGPT2LMHeadModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=a("p"),T=n("Example:"),u=p(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var c=i(d);T=s(c,"Example:"),c.forEach(t),u=h(l),k(m.$$.fragment,l)},m(l,c){g(l,d,c),e(d,T),g(l,u,c),w(m,l,c),v=!0},p:he,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),M(m,l)}}}function Ck(G){let d,T,u,m,v,l,c,j,ae,K,H,J,re,x,Me,V,Ge,ke,S,xe,de,X,je,we,B,Fe,$e,R,fe,Ee,le,z,C,Pe,N,ge,ze,Y,ce,qe,q,Ce,Q,De,L,Z,_e,Le,W,Te,ee,Oe,ie,D,He,O,Ne,Ae,b,F,at,ne,rt,it,E,lt,dt,Je,ct,pt,U,A,ht,Ye,te,ut,Qe,Ie,mt,oe,ft,$p,Nd,ro,is,Pp,Mp,Pi,Gp,xp,Ad,Jt,jp,ls,Fp,Ep,ds,zp,qp,Id,io,So,Mi,cs,Cp,Gi,Dp,Sd,jr,Lp,Wd,ps,Ud,se,hs,Op,us,Hp,Np,Ap,ms,Ip,fs,Sp,Wp,Up,gs,Bp,_s,Rp,Kp,Vp,Ts,Jp,vs,Xp,Yp,Qp,bs,Zp,ys,eh,th,oh,ks,nh,ws,sh,ah,rh,$s,ih,Ps,lh,dh,ch,Fr,Ms,ph,hh,uh,Ft,Er,mh,fh,Gs,gh,_h,xs,Th,vh,js,bh,yh,kh,Xt,zr,wh,$h,Fs,Ph,Mh,Es,Gh,xh,jh,Yt,qr,Fh,Eh,zs,zh,qh,qs,Ch,Dh,Bd,lo,Wo,xi,Cs,Lh,ji,Oh,Rd,Gt,Ds,Hh,Ut,Nh,Cr,Ah,Ih,Dr,Sh,Wh,Ls,Uh,Bh,Rh,co,Kh,Lr,Vh,Jh,Or,Xh,Yh,Qh,Uo,Kd,po,Bo,Fi,Os,Zh,Ei,eu,Vd,ve,Hs,tu,zi,ou,nu,qi,su,au,Ro,ru,Ns,iu,Ci,lu,du,cu,Ko,pu,As,hu,Hr,uu,mu,fu,Nr,Is,Jd,ho,Vo,Di,Ss,gu,Li,_u,Xd,Se,Ws,Tu,Us,vu,Oi,bu,yu,ku,Hi,wu,$u,Jo,Pu,Bs,Mu,Ni,Gu,xu,ju,Xo,Fu,Rs,Eu,Ar,zu,qu,Yd,uo,Yo,Ai,Ks,Cu,Ii,Du,Qd,mo,Vs,Lu,Si,Ou,Zd,fo,Js,Hu,Wi,Nu,ec,go,Qo,Ui,Xs,Au,Bi,Iu,tc,We,Ys,Su,Ri,Wu,Uu,Qs,Bu,Ir,Ru,Ku,Vu,Zs,Ju,ea,Xu,Yu,Qu,Et,ta,Zu,_o,em,Sr,tm,om,Ki,nm,sm,am,Zo,rm,en,im,zt,oa,lm,Vi,dm,cm,Ji,pm,hm,tn,um,Qt,na,mm,Xi,fm,gm,on,oc,To,nn,Yi,sa,_m,Qi,Tm,nc,Ue,aa,vm,Zi,bm,ym,ra,km,Wr,wm,$m,Pm,ia,Mm,la,Gm,xm,jm,qt,da,Fm,vo,Em,Ur,zm,qm,el,Cm,Dm,Lm,sn,Om,an,Hm,Ct,ca,Nm,tl,Am,Im,ol,Sm,Wm,rn,Um,Zt,pa,Bm,nl,Rm,Km,ln,sc,bo,dn,sl,ha,Vm,al,Jm,ac,gt,ua,Xm,rl,Ym,Qm,ma,Zm,Br,ef,tf,of,fa,nf,ga,sf,af,rf,Dt,_a,lf,yo,df,Rr,cf,pf,il,hf,uf,mf,cn,ff,pn,rc,ko,hn,ll,Ta,gf,dl,_f,ic,Be,va,Tf,cl,vf,bf,Kr,Vr,yf,kf,wf,xt,$f,pl,Pf,Mf,hl,Gf,xf,ul,jf,Ff,ml,Ef,zf,qf,ba,Cf,Jr,Df,Lf,Of,ya,Hf,ka,Nf,Af,If,Xe,wa,Sf,wo,Wf,Xr,Uf,Bf,fl,Rf,Kf,Vf,un,Jf,mn,Xf,fn,Yf,gn,Qf,_n,lc,$o,Tn,gl,$a,Zf,_l,eg,dc,_t,Pa,tg,Tl,og,ng,Ma,sg,Yr,ag,rg,ig,Ga,lg,xa,dg,cg,pg,Tt,ja,hg,Po,ug,Qr,mg,fg,vl,gg,_g,Tg,vn,vg,bn,bg,yn,cc,Mo,kn,bl,Fa,yg,yl,kg,pc,Ze,Ea,wg,kl,$g,Pg,za,Mg,Zr,Gg,xg,jg,qa,Fg,Ca,Eg,zg,qg,wn,Cg,Lt,Da,Dg,Go,Lg,ei,Og,Hg,wl,Ng,Ag,Ig,$n,Sg,Pn,hc,xo,Mn,$l,La,Wg,Pl,Ug,uc,et,Oa,Bg,Ml,Rg,Kg,Ha,Vg,ti,Jg,Xg,Yg,Na,Qg,Aa,Zg,e_,t_,Gn,o_,Ot,Ia,n_,jo,s_,oi,a_,r_,Gl,i_,l_,d_,xn,c_,jn,mc,Fo,Fn,xl,Sa,p_,jl,h_,fc,tt,Wa,u_,Fl,m_,f_,Ua,g_,ni,__,T_,v_,Ba,b_,Ra,y_,k_,w_,En,$_,Ht,Ka,P_,Eo,M_,si,G_,x_,El,j_,F_,E_,zn,z_,qn,gc,zo,Cn,zl,Va,q_,ql,C_,_c,be,Ja,D_,Cl,L_,O_,ai,ri,H_,N_,A_,jt,I_,Dl,S_,W_,Ll,U_,B_,Ol,R_,K_,Hl,V_,J_,X_,Xa,Y_,ii,Q_,Z_,e2,Ya,t2,Qa,o2,n2,s2,Dn,a2,vt,Za,r2,qo,i2,li,l2,d2,Nl,c2,p2,h2,Ln,u2,On,m2,Hn,Tc,Co,Nn,Al,er,f2,Il,g2,vc,Do,tr,_2,Sl,T2,bc,Lo,An,Wl,or,v2,Ul,b2,yc,Re,nr,y2,Bl,k2,w2,sr,$2,di,P2,M2,G2,ar,x2,rr,j2,F2,E2,Rl,z2,q2,Bt,Kl,ir,C2,D2,Vl,lr,L2,O2,Jl,dr,H2,N2,Xl,cr,A2,I2,Nt,pr,S2,Oo,W2,Yl,U2,B2,Ql,R2,K2,V2,In,J2,Sn,kc,Ho,Wn,Zl,hr,X2,ed,Y2,wc,Ke,ur,Q2,td,Z2,eT,mr,tT,ci,oT,nT,sT,fr,aT,gr,rT,iT,lT,od,dT,cT,Rt,nd,_r,pT,hT,sd,Tr,uT,mT,ad,vr,fT,gT,rd,br,_T,TT,At,yr,vT,No,bT,id,yT,kT,ld,wT,$T,PT,Un,MT,Bn,$c;return l=new Ve({}),x=new Ve({}),cs=new Ve({}),ps=new Ky({props:{pipeline:"text-generation"}}),Cs=new Ve({}),Ds=new I({props:{name:"class transformers.GPT2Config",anchor:"transformers.GPT2Config",parameters:[{name:"vocab_size",val:" = 50257"},{name:"n_positions",val:" = 1024"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"scale_attn_by_inverse_layer_idx",val:" = False"},{name:"reorder_and_upcast_attn",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Model">GPT2Model</a> or <a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.TFGPT2Model">TFGPT2Model</a>.`,name:"vocab_size"},{anchor:"transformers.GPT2Config.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.GPT2Config.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.GPT2Config.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in for the multiple choice head in
<a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a>.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.GPT2Config.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.GPT2Config.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.GPT2Config.scale_attn_weights",description:`<strong>scale_attn_weights</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale attention weights by dividing by sqrt(hidden_size)..`,name:"scale_attn_weights"},{anchor:"transformers.GPT2Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.GPT2Config.scale_attn_by_inverse_layer_idx",description:`<strong>scale_attn_by_inverse_layer_idx</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to additionally scale attention weights by <code>1 / layer_idx + 1</code>.`,name:"scale_attn_by_inverse_layer_idx"},{anchor:"transformers.GPT2Config.reorder_and_upcast_attn",description:`<strong>reorder_and_upcast_attn</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to scale keys (K) prior to computing attention (dot-product) and upcast attention
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/configuration_gpt2.py#L38"}}),Uo=new pe({props:{anchor:"transformers.GPT2Config.example",$$slots:{default:[Vy]},$$scope:{ctx:G}}}),Os=new Ve({}),Hs=new I({props:{name:"class transformers.GPT2Tokenizer",anchor:"transformers.GPT2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = None"},{name:"add_prefix_space",val:" = False"},{name:"add_bos_token",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.GPT2Tokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.GPT2Tokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.GPT2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.GPT2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.GPT2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.GPT2Tokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (GPT2 tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/tokenization_gpt2.py#L104"}}),Ro=new pe({props:{anchor:"transformers.GPT2Tokenizer.example",$$slots:{default:[Jy]},$$scope:{ctx:G}}}),Ko=new ot({props:{$$slots:{default:[Xy]},$$scope:{ctx:G}}}),Is=new I({props:{name:"save_vocabulary",anchor:"transformers.GPT2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/tokenization_gpt2.py#L320"}}),Ss=new Ve({}),Ws=new I({props:{name:"class transformers.GPT2TokenizerFast",anchor:"transformers.GPT2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/tokenization_gpt2_fast.py#L70"}}),Jo=new pe({props:{anchor:"transformers.GPT2TokenizerFast.example",$$slots:{default:[Yy]},$$scope:{ctx:G}}}),Xo=new ot({props:{$$slots:{default:[Qy]},$$scope:{ctx:G}}}),Ks=new Ve({}),Vs=new I({props:{name:"class transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_gpt2.py#L487"}}),Js=new I({props:{name:"class transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput",anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L573"}}),Xs=new Ve({}),Ys=new I({props:{name:"class transformers.GPT2Model",anchor:"transformers.GPT2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_gpt2.py#L667"}}),ta=new I({props:{name:"forward",anchor:"transformers.GPT2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_gpt2.py#L736",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zo=new ot({props:{$$slots:{default:[Zy]},$$scope:{ctx:G}}}),en=new pe({props:{anchor:"transformers.GPT2Model.forward.example",$$slots:{default:[ek]},$$scope:{ctx:G}}}),oa=new I({props:{name:"parallelize",anchor:"transformers.GPT2Model.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the gpt2 models have the
following number of attention modules:</p>
<ul>
<li>gpt2: 12</li>
<li>gpt2-medium: 24</li>
<li>gpt2-large: 36</li>
<li>gpt2-xl: 48</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_gpt2.py#L690"}}),tn=new pe({props:{anchor:"transformers.GPT2Model.parallelize.example",$$slots:{default:[tk]},$$scope:{ctx:G}}}),na=new I({props:{name:"deparallelize",anchor:"transformers.GPT2Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_gpt2.py#L710"}}),on=new pe({props:{anchor:"transformers.GPT2Model.deparallelize.example",$$slots:{default:[ok]},$$scope:{ctx:G}}}),sa=new Ve({}),aa=new I({props:{name:"class transformers.GPT2LMHeadModel",anchor:"transformers.GPT2LMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_gpt2.py#L945"}}),da=new I({props:{name:"forward",anchor:"transformers.GPT2LMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2LMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_gpt2.py#L1014",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new ot({props:{$$slots:{default:[nk]},$$scope:{ctx:G}}}),an=new pe({props:{anchor:"transformers.GPT2LMHeadModel.forward.example",$$slots:{default:[sk]},$$scope:{ctx:G}}}),ca=new I({props:{name:"parallelize",anchor:"transformers.GPT2LMHeadModel.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the gpt2 models have the
following number of attention modules:</p>
<ul>
<li>gpt2: 12</li>
<li>gpt2-medium: 24</li>
<li>gpt2-large: 36</li>
<li>gpt2-xl: 48</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_gpt2.py#L960"}}),rn=new pe({props:{anchor:"transformers.GPT2LMHeadModel.parallelize.example",$$slots:{default:[ak]},$$scope:{ctx:G}}}),pa=new I({props:{name:"deparallelize",anchor:"transformers.GPT2LMHeadModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_gpt2.py#L972"}}),ln=new pe({props:{anchor:"transformers.GPT2LMHeadModel.deparallelize.example",$$slots:{default:[rk]},$$scope:{ctx:G}}}),ha=new Ve({}),ua=new I({props:{name:"class transformers.GPT2DoubleHeadsModel",anchor:"transformers.GPT2DoubleHeadsModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2DoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_gpt2.py#L1114"}}),_a=new I({props:{name:"forward",anchor:"transformers.GPT2DoubleHeadsModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_token_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"mc_labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2DoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code>. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to
<code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>`,name:"labels"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.mc_labels",description:`<strong>mc_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"mc_labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_gpt2.py#L1188",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),cn=new ot({props:{$$slots:{default:[ik]},$$scope:{ctx:G}}}),pn=new pe({props:{anchor:"transformers.GPT2DoubleHeadsModel.forward.example",$$slots:{default:[lk]},$$scope:{ctx:G}}}),Ta=new Ve({}),va=new I({props:{name:"class transformers.GPT2ForSequenceClassification",anchor:"transformers.GPT2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_gpt2.py#L1328"}}),wa=new I({props:{name:"forward",anchor:"transformers.GPT2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_gpt2.py#L1344",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config"
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
`}}),un=new ot({props:{$$slots:{default:[dk]},$$scope:{ctx:G}}}),mn=new pe({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example",$$slots:{default:[ck]},$$scope:{ctx:G}}}),fn=new pe({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-2",$$slots:{default:[pk]},$$scope:{ctx:G}}}),gn=new pe({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-3",$$slots:{default:[hk]},$$scope:{ctx:G}}}),_n=new pe({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-4",$$slots:{default:[uk]},$$scope:{ctx:G}}}),$a=new Ve({}),Pa=new I({props:{name:"class transformers.GPT2ForTokenClassification",anchor:"transformers.GPT2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_gpt2.py#L1456"}}),ja=new I({props:{name:"forward",anchor:"transformers.GPT2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_gpt2.py#L1478",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vn=new ot({props:{$$slots:{default:[mk]},$$scope:{ctx:G}}}),bn=new pe({props:{anchor:"transformers.GPT2ForTokenClassification.forward.example",$$slots:{default:[fk]},$$scope:{ctx:G}}}),yn=new pe({props:{anchor:"transformers.GPT2ForTokenClassification.forward.example-2",$$slots:{default:[gk]},$$scope:{ctx:G}}}),Fa=new Ve({}),Ea=new I({props:{name:"class transformers.TFGPT2Model",anchor:"transformers.TFGPT2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L722"}}),wn=new ot({props:{$$slots:{default:[_k]},$$scope:{ctx:G}}}),Da=new I({props:{name:"call",anchor:"transformers.TFGPT2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2Model.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The token ids which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPT2Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFGPT2Model.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that don&#x2019;t have
their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFGPT2Model.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L727",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$n=new ot({props:{$$slots:{default:[Tk]},$$scope:{ctx:G}}}),Pn=new pe({props:{anchor:"transformers.TFGPT2Model.call.example",$$slots:{default:[vk]},$$scope:{ctx:G}}}),La=new Ve({}),Oa=new I({props:{name:"class transformers.TFGPT2LMHeadModel",anchor:"transformers.TFGPT2LMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L820"}}),Gn=new ot({props:{$$slots:{default:[bk]},$$scope:{ctx:G}}}),Ia=new I({props:{name:"call",anchor:"transformers.TFGPT2LMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2LMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2LMHeadModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The token ids which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPT2LMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFGPT2LMHeadModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that don&#x2019;t have
their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFGPT2LMHeadModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFGPT2LMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L856",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xn=new ot({props:{$$slots:{default:[yk]},$$scope:{ctx:G}}}),jn=new pe({props:{anchor:"transformers.TFGPT2LMHeadModel.call.example",$$slots:{default:[kk]},$$scope:{ctx:G}}}),Sa=new Ve({}),Wa=new I({props:{name:"class transformers.TFGPT2DoubleHeadsModel",anchor:"transformers.TFGPT2DoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2DoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L971"}}),En=new ot({props:{$$slots:{default:[wk]},$$scope:{ctx:G}}}),Ka=new I({props:{name:"call",anchor:"transformers.TFGPT2DoubleHeadsModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mc_token_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2DoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The token ids which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L980",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zn=new ot({props:{$$slots:{default:[$k]},$$scope:{ctx:G}}}),qn=new pe({props:{anchor:"transformers.TFGPT2DoubleHeadsModel.call.example",$$slots:{default:[Pk]},$$scope:{ctx:G}}}),Va=new Ve({}),Ja=new I({props:{name:"class transformers.TFGPT2ForSequenceClassification",anchor:"transformers.TFGPT2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1119"}}),Dn=new ot({props:{$$slots:{default:[Mk]},$$scope:{ctx:G}}}),Za=new I({props:{name:"call",anchor:"transformers.TFGPT2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The token ids which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1131",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ln=new ot({props:{$$slots:{default:[Gk]},$$scope:{ctx:G}}}),On=new pe({props:{anchor:"transformers.TFGPT2ForSequenceClassification.call.example",$$slots:{default:[xk]},$$scope:{ctx:G}}}),Hn=new pe({props:{anchor:"transformers.TFGPT2ForSequenceClassification.call.example-2",$$slots:{default:[jk]},$$scope:{ctx:G}}}),er=new Ve({}),tr=new I({props:{name:"class transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/modeling_tf_outputs.py#L894"}}),or=new Ve({}),nr=new I({props:{name:"class transformers.FlaxGPT2Model",anchor:"transformers.FlaxGPT2Model",parameters:[{name:"config",val:": GPT2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPT2Model.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_flax_gpt2.py#L667"}}),pr=new I({props:{name:"__call__",anchor:"transformers.FlaxGPT2Model.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPT2Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_flax_gpt2.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),In=new ot({props:{$$slots:{default:[Fk]},$$scope:{ctx:G}}}),Sn=new pe({props:{anchor:"transformers.FlaxGPT2Model.__call__.example",$$slots:{default:[Ek]},$$scope:{ctx:G}}}),hr=new Ve({}),ur=new I({props:{name:"class transformers.FlaxGPT2LMHeadModel",anchor:"transformers.FlaxGPT2LMHeadModel",parameters:[{name:"config",val:": GPT2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPT2LMHeadModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_flax_gpt2.py#L745"}}),yr=new I({props:{name:"__call__",anchor:"transformers.FlaxGPT2LMHeadModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/gpt2/modeling_flax_gpt2.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Un=new ot({props:{$$slots:{default:[zk]},$$scope:{ctx:G}}}),Bn=new pe({props:{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.example",$$slots:{default:[qk]},$$scope:{ctx:G}}}),{c(){d=a("meta"),T=p(),u=a("h1"),m=a("a"),v=a("span"),y(l.$$.fragment),c=p(),j=a("span"),ae=n("OpenAI GPT2"),K=p(),H=a("h2"),J=a("a"),re=a("span"),y(x.$$.fragment),Me=p(),V=a("span"),Ge=n("Overview"),ke=p(),S=a("p"),xe=n("OpenAI GPT-2 model was proposed in "),de=a("a"),X=n("Language Models are Unsupervised Multitask Learners"),je=n(` by Alec
Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei and Ilya Sutskever. It\u2019s a causal (unidirectional)
transformer pretrained using language modeling on a very large corpus of ~40 GB of text data.`),we=p(),B=a("p"),Fe=n("The abstract from the paper is the following:"),$e=p(),R=a("p"),fe=a("em"),Ee=n(`GPT-2 is a large transformer-based language model with 1.5 billion parameters, trained on a dataset[1] of 8 million
web pages. GPT-2 is trained with a simple objective: predict the next word, given all of the previous words within some
text. The diversity of the dataset causes this simple goal to contain naturally occurring demonstrations of many tasks
across diverse domains. GPT-2 is a direct scale-up of GPT, with more than 10X the parameters and trained on more than
10X the amount of data.`),le=p(),z=a("p"),C=n("Tips:"),Pe=p(),N=a("ul"),ge=a("li"),ze=n(`GPT-2 is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Y=p(),ce=a("li"),qe=n(`GPT-2 was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),q=a("em"),Ce=n("run_generation.py"),Q=n(" example script."),De=p(),L=a("li"),Z=n("The model can take the "),_e=a("em"),Le=n("past_key_values"),W=n(" (for PyTorch) or "),Te=a("em"),ee=n("past"),Oe=n(` (for TF) as input, which is the previously computed
key/value attention pairs. Using this (`),ie=a("em"),D=n("past_key_values"),He=n(" or "),O=a("em"),Ne=n("past"),Ae=n(`) value prevents the model from re-computing
pre-computed values in the context of text generation. For PyTorch, see `),b=a("em"),F=n("past_key_values"),at=n(` argument of the
`),ne=a("a"),rt=n("GPT2Model.forward()"),it=n(" method, or for TF the "),E=a("em"),lt=n("past"),dt=n(` argument of the
`),Je=a("a"),ct=n("TFGPT2Model.call()"),pt=n(" method for more information on its usage."),U=p(),A=a("li"),ht=n("Enabling the "),Ye=a("em"),te=n("scale_attn_by_inverse_layer_idx"),ut=n(" and "),Qe=a("em"),Ie=n("reorder_and_upcast_attn"),mt=n(` flags will apply the training stability
improvements from `),oe=a("a"),ft=n("Mistral"),$p=n(" (for PyTorch only)."),Nd=p(),ro=a("p"),is=a("a"),Pp=n("Write With Transformer"),Mp=n(` is a webapp created and hosted by
Hugging Face showcasing the generative capabilities of several models. GPT-2 is one of them and is available in five
different sizes: small, medium, large, xl and a distilled version of the small checkpoint: `),Pi=a("em"),Gp=n("distilgpt-2"),xp=n("."),Ad=p(),Jt=a("p"),jp=n("This model was contributed by "),ls=a("a"),Fp=n("thomwolf"),Ep=n(". The original code can be found "),ds=a("a"),zp=n("here"),qp=n("."),Id=p(),io=a("h2"),So=a("a"),Mi=a("span"),y(cs.$$.fragment),Cp=p(),Gi=a("span"),Dp=n("Resources"),Sd=p(),jr=a("p"),Lp=n("A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with GPT2. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),Wd=p(),y(ps.$$.fragment),Ud=p(),se=a("ul"),hs=a("li"),Op=n("A blog on how to "),us=a("a"),Hp=n("Finetune a non-English GPT-2 Model with Hugging Face"),Np=n("."),Ap=p(),ms=a("li"),Ip=n("A blog on "),fs=a("a"),Sp=n("How to generate text: using different decoding methods for language generation with Transformers"),Wp=n(" with GPT-2."),Up=p(),gs=a("li"),Bp=n("A blog on "),_s=a("a"),Rp=n("Training CodeParrot \u{1F99C} from Scratch"),Kp=n(", a large GPT-2 model."),Vp=p(),Ts=a("li"),Jp=n("A blog on "),vs=a("a"),Xp=n("Faster Text Generation with TensorFlow and XLA"),Yp=n(" with GPT-2."),Qp=p(),bs=a("li"),Zp=n("A blog on "),ys=a("a"),eh=n("How to train a Language Model with Megatron-LM"),th=n(" with a GPT-2 model."),oh=p(),ks=a("li"),nh=n("A notebook on how to "),ws=a("a"),sh=n("finetune GPT2 to generate lyrics in the style of your favorite artist"),ah=n(". \u{1F30E}"),rh=p(),$s=a("li"),ih=n("A notebook on how to "),Ps=a("a"),lh=n("finetune GPT2 to generate tweets in the style of your favorite Twitter user"),dh=n(". \u{1F30E}"),ch=p(),Fr=a("li"),Ms=a("a"),ph=n("Causal language modeling"),hh=n(" chapter of the \u{1F917} Hugging Face Course."),uh=p(),Ft=a("li"),Er=a("a"),mh=n("GPT2LMHeadModel"),fh=n(" is suppported by this "),Gs=a("a"),gh=n("causal language modeling example script"),_h=n(", "),xs=a("a"),Th=n("text generation example script"),vh=n(", and "),js=a("a"),bh=n("notebook"),yh=n("."),kh=p(),Xt=a("li"),zr=a("a"),wh=n("TFGPT2LMHeadModel"),$h=n(" is supported by this "),Fs=a("a"),Ph=n("causal language modeling example script"),Mh=n(" and "),Es=a("a"),Gh=n("notebook"),xh=n("."),jh=p(),Yt=a("li"),qr=a("a"),Fh=n("FlaxGPT2LMHeadModel"),Eh=n(" is supported by this "),zs=a("a"),zh=n("causal language modeling example script"),qh=n(" and "),qs=a("a"),Ch=n("notebook"),Dh=n("."),Bd=p(),lo=a("h2"),Wo=a("a"),xi=a("span"),y(Cs.$$.fragment),Lh=p(),ji=a("span"),Oh=n("GPT2Config"),Rd=p(),Gt=a("div"),y(Ds.$$.fragment),Hh=p(),Ut=a("p"),Nh=n("This is the configuration class to store the configuration of a "),Cr=a("a"),Ah=n("GPT2Model"),Ih=n(" or a "),Dr=a("a"),Sh=n("TFGPT2Model"),Wh=n(`. It is used to
instantiate a GPT-2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GPT-2
`),Ls=a("a"),Uh=n("gpt2"),Bh=n(" architecture."),Rh=p(),co=a("p"),Kh=n("Configuration objects inherit from "),Lr=a("a"),Vh=n("PretrainedConfig"),Jh=n(` and can be used to control the model outputs. Read the
documentation from `),Or=a("a"),Xh=n("PretrainedConfig"),Yh=n(" for more information."),Qh=p(),y(Uo.$$.fragment),Kd=p(),po=a("h2"),Bo=a("a"),Fi=a("span"),y(Os.$$.fragment),Zh=p(),Ei=a("span"),eu=n("GPT2Tokenizer"),Vd=p(),ve=a("div"),y(Hs.$$.fragment),tu=p(),zi=a("p"),ou=n("Construct a GPT-2 tokenizer. Based on byte-level Byte-Pair-Encoding."),nu=p(),qi=a("p"),su=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),au=p(),y(Ro.$$.fragment),ru=p(),Ns=a("p"),iu=n("You can get around that behavior by passing "),Ci=a("code"),lu=n("add_prefix_space=True"),du=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),cu=p(),y(Ko.$$.fragment),pu=p(),As=a("p"),hu=n("This tokenizer inherits from "),Hr=a("a"),uu=n("PreTrainedTokenizer"),mu=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),fu=p(),Nr=a("div"),y(Is.$$.fragment),Jd=p(),ho=a("h2"),Vo=a("a"),Di=a("span"),y(Ss.$$.fragment),gu=p(),Li=a("span"),_u=n("GPT2TokenizerFast"),Xd=p(),Se=a("div"),y(Ws.$$.fragment),Tu=p(),Us=a("p"),vu=n("Construct a \u201Cfast\u201D GPT-2 tokenizer (backed by HuggingFace\u2019s "),Oi=a("em"),bu=n("tokenizers"),yu=n(` library). Based on byte-level
Byte-Pair-Encoding.`),ku=p(),Hi=a("p"),wu=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),$u=p(),y(Jo.$$.fragment),Pu=p(),Bs=a("p"),Mu=n("You can get around that behavior by passing "),Ni=a("code"),Gu=n("add_prefix_space=True"),xu=n(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),ju=p(),y(Xo.$$.fragment),Fu=p(),Rs=a("p"),Eu=n("This tokenizer inherits from "),Ar=a("a"),zu=n("PreTrainedTokenizerFast"),qu=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Yd=p(),uo=a("h2"),Yo=a("a"),Ai=a("span"),y(Ks.$$.fragment),Cu=p(),Ii=a("span"),Du=n("GPT2 specific outputs"),Qd=p(),mo=a("div"),y(Vs.$$.fragment),Lu=p(),Si=a("p"),Ou=n("Base class for outputs of models predicting if two sentences are consecutive or not."),Zd=p(),fo=a("div"),y(Js.$$.fragment),Hu=p(),Wi=a("p"),Nu=n("Base class for outputs of models predicting if two sentences are consecutive or not."),ec=p(),go=a("h2"),Qo=a("a"),Ui=a("span"),y(Xs.$$.fragment),Au=p(),Bi=a("span"),Iu=n("GPT2Model"),tc=p(),We=a("div"),y(Ys.$$.fragment),Su=p(),Ri=a("p"),Wu=n("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),Uu=p(),Qs=a("p"),Bu=n("This model inherits from "),Ir=a("a"),Ru=n("PreTrainedModel"),Ku=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vu=p(),Zs=a("p"),Ju=n("This model is also a PyTorch "),ea=a("a"),Xu=n("torch.nn.Module"),Yu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qu=p(),Et=a("div"),y(ta.$$.fragment),Zu=p(),_o=a("p"),em=n("The "),Sr=a("a"),tm=n("GPT2Model"),om=n(" forward method, overrides the "),Ki=a("code"),nm=n("__call__"),sm=n(" special method."),am=p(),y(Zo.$$.fragment),rm=p(),y(en.$$.fragment),im=p(),zt=a("div"),y(oa.$$.fragment),lm=p(),Vi=a("p"),dm=n("This is an experimental feature and is a subject to change at a moment\u2019s notice."),cm=p(),Ji=a("p"),pm=n(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),hm=p(),y(tn.$$.fragment),um=p(),Qt=a("div"),y(na.$$.fragment),mm=p(),Xi=a("p"),fm=n("Moves the model to cpu from a model parallel state."),gm=p(),y(on.$$.fragment),oc=p(),To=a("h2"),nn=a("a"),Yi=a("span"),y(sa.$$.fragment),_m=p(),Qi=a("span"),Tm=n("GPT2LMHeadModel"),nc=p(),Ue=a("div"),y(aa.$$.fragment),vm=p(),Zi=a("p"),bm=n(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),ym=p(),ra=a("p"),km=n("This model inherits from "),Wr=a("a"),wm=n("PreTrainedModel"),$m=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pm=p(),ia=a("p"),Mm=n("This model is also a PyTorch "),la=a("a"),Gm=n("torch.nn.Module"),xm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jm=p(),qt=a("div"),y(da.$$.fragment),Fm=p(),vo=a("p"),Em=n("The "),Ur=a("a"),zm=n("GPT2LMHeadModel"),qm=n(" forward method, overrides the "),el=a("code"),Cm=n("__call__"),Dm=n(" special method."),Lm=p(),y(sn.$$.fragment),Om=p(),y(an.$$.fragment),Hm=p(),Ct=a("div"),y(ca.$$.fragment),Nm=p(),tl=a("p"),Am=n("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Im=p(),ol=a("p"),Sm=n(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Wm=p(),y(rn.$$.fragment),Um=p(),Zt=a("div"),y(pa.$$.fragment),Bm=p(),nl=a("p"),Rm=n("Moves the model to cpu from a model parallel state."),Km=p(),y(ln.$$.fragment),sc=p(),bo=a("h2"),dn=a("a"),sl=a("span"),y(ha.$$.fragment),Vm=p(),al=a("span"),Jm=n("GPT2DoubleHeadsModel"),ac=p(),gt=a("div"),y(ua.$$.fragment),Xm=p(),rl=a("p"),Ym=n(`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Qm=p(),ma=a("p"),Zm=n("This model inherits from "),Br=a("a"),ef=n("PreTrainedModel"),tf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),of=p(),fa=a("p"),nf=n("This model is also a PyTorch "),ga=a("a"),sf=n("torch.nn.Module"),af=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rf=p(),Dt=a("div"),y(_a.$$.fragment),lf=p(),yo=a("p"),df=n("The "),Rr=a("a"),cf=n("GPT2DoubleHeadsModel"),pf=n(" forward method, overrides the "),il=a("code"),hf=n("__call__"),uf=n(" special method."),mf=p(),y(cn.$$.fragment),ff=p(),y(pn.$$.fragment),rc=p(),ko=a("h2"),hn=a("a"),ll=a("span"),y(Ta.$$.fragment),gf=p(),dl=a("span"),_f=n("GPT2ForSequenceClassification"),ic=p(),Be=a("div"),y(va.$$.fragment),Tf=p(),cl=a("p"),vf=n("The GPT2 Model transformer with a sequence classification head on top (linear layer)."),bf=p(),Kr=a("p"),Vr=a("a"),yf=n("GPT2ForSequenceClassification"),kf=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),wf=p(),xt=a("p"),$f=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),pl=a("code"),Pf=n("pad_token_id"),Mf=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),hl=a("code"),Gf=n("pad_token_id"),xf=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ul=a("code"),jf=n("inputs_embeds"),Ff=n(" are passed instead of "),ml=a("code"),Ef=n("input_ids"),zf=n(`, it does the same (take the last value in
each row of the batch).`),qf=p(),ba=a("p"),Cf=n("This model inherits from "),Jr=a("a"),Df=n("PreTrainedModel"),Lf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Of=p(),ya=a("p"),Hf=n("This model is also a PyTorch "),ka=a("a"),Nf=n("torch.nn.Module"),Af=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),If=p(),Xe=a("div"),y(wa.$$.fragment),Sf=p(),wo=a("p"),Wf=n("The "),Xr=a("a"),Uf=n("GPT2ForSequenceClassification"),Bf=n(" forward method, overrides the "),fl=a("code"),Rf=n("__call__"),Kf=n(" special method."),Vf=p(),y(un.$$.fragment),Jf=p(),y(mn.$$.fragment),Xf=p(),y(fn.$$.fragment),Yf=p(),y(gn.$$.fragment),Qf=p(),y(_n.$$.fragment),lc=p(),$o=a("h2"),Tn=a("a"),gl=a("span"),y($a.$$.fragment),Zf=p(),_l=a("span"),eg=n("GPT2ForTokenClassification"),dc=p(),_t=a("div"),y(Pa.$$.fragment),tg=p(),Tl=a("p"),og=n(`GPT2 Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ng=p(),Ma=a("p"),sg=n("This model inherits from "),Yr=a("a"),ag=n("PreTrainedModel"),rg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ig=p(),Ga=a("p"),lg=n("This model is also a PyTorch "),xa=a("a"),dg=n("torch.nn.Module"),cg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pg=p(),Tt=a("div"),y(ja.$$.fragment),hg=p(),Po=a("p"),ug=n("The "),Qr=a("a"),mg=n("GPT2ForTokenClassification"),fg=n(" forward method, overrides the "),vl=a("code"),gg=n("__call__"),_g=n(" special method."),Tg=p(),y(vn.$$.fragment),vg=p(),y(bn.$$.fragment),bg=p(),y(yn.$$.fragment),cc=p(),Mo=a("h2"),kn=a("a"),bl=a("span"),y(Fa.$$.fragment),yg=p(),yl=a("span"),kg=n("TFGPT2Model"),pc=p(),Ze=a("div"),y(Ea.$$.fragment),wg=p(),kl=a("p"),$g=n("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),Pg=p(),za=a("p"),Mg=n("This model inherits from "),Zr=a("a"),Gg=n("TFPreTrainedModel"),xg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jg=p(),qa=a("p"),Fg=n("This model is also a "),Ca=a("a"),Eg=n("tf.keras.Model"),zg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qg=p(),y(wn.$$.fragment),Cg=p(),Lt=a("div"),y(Da.$$.fragment),Dg=p(),Go=a("p"),Lg=n("The "),ei=a("a"),Og=n("TFGPT2Model"),Hg=n(" forward method, overrides the "),wl=a("code"),Ng=n("__call__"),Ag=n(" special method."),Ig=p(),y($n.$$.fragment),Sg=p(),y(Pn.$$.fragment),hc=p(),xo=a("h2"),Mn=a("a"),$l=a("span"),y(La.$$.fragment),Wg=p(),Pl=a("span"),Ug=n("TFGPT2LMHeadModel"),uc=p(),et=a("div"),y(Oa.$$.fragment),Bg=p(),Ml=a("p"),Rg=n(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Kg=p(),Ha=a("p"),Vg=n("This model inherits from "),ti=a("a"),Jg=n("TFPreTrainedModel"),Xg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yg=p(),Na=a("p"),Qg=n("This model is also a "),Aa=a("a"),Zg=n("tf.keras.Model"),e_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),t_=p(),y(Gn.$$.fragment),o_=p(),Ot=a("div"),y(Ia.$$.fragment),n_=p(),jo=a("p"),s_=n("The "),oi=a("a"),a_=n("TFGPT2LMHeadModel"),r_=n(" forward method, overrides the "),Gl=a("code"),i_=n("__call__"),l_=n(" special method."),d_=p(),y(xn.$$.fragment),c_=p(),y(jn.$$.fragment),mc=p(),Fo=a("h2"),Fn=a("a"),xl=a("span"),y(Sa.$$.fragment),p_=p(),jl=a("span"),h_=n("TFGPT2DoubleHeadsModel"),fc=p(),tt=a("div"),y(Wa.$$.fragment),u_=p(),Fl=a("p"),m_=n(`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),f_=p(),Ua=a("p"),g_=n("This model inherits from "),ni=a("a"),__=n("TFPreTrainedModel"),T_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),v_=p(),Ba=a("p"),b_=n("This model is also a "),Ra=a("a"),y_=n("tf.keras.Model"),k_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),w_=p(),y(En.$$.fragment),$_=p(),Ht=a("div"),y(Ka.$$.fragment),P_=p(),Eo=a("p"),M_=n("The "),si=a("a"),G_=n("TFGPT2DoubleHeadsModel"),x_=n(" forward method, overrides the "),El=a("code"),j_=n("__call__"),F_=n(" special method."),E_=p(),y(zn.$$.fragment),z_=p(),y(qn.$$.fragment),gc=p(),zo=a("h2"),Cn=a("a"),zl=a("span"),y(Va.$$.fragment),q_=p(),ql=a("span"),C_=n("TFGPT2ForSequenceClassification"),_c=p(),be=a("div"),y(Ja.$$.fragment),D_=p(),Cl=a("p"),L_=n("The GPT2 Model transformer with a sequence classification head on top (linear layer)."),O_=p(),ai=a("p"),ri=a("a"),H_=n("TFGPT2ForSequenceClassification"),N_=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),A_=p(),jt=a("p"),I_=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Dl=a("code"),S_=n("pad_token_id"),W_=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ll=a("code"),U_=n("pad_token_id"),B_=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ol=a("code"),R_=n("inputs_embeds"),K_=n(" are passed instead of "),Hl=a("code"),V_=n("input_ids"),J_=n(`, it does the same (take the last value in
each row of the batch).`),X_=p(),Xa=a("p"),Y_=n("This model inherits from "),ii=a("a"),Q_=n("TFPreTrainedModel"),Z_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),e2=p(),Ya=a("p"),t2=n("This model is also a "),Qa=a("a"),o2=n("tf.keras.Model"),n2=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),s2=p(),y(Dn.$$.fragment),a2=p(),vt=a("div"),y(Za.$$.fragment),r2=p(),qo=a("p"),i2=n("The "),li=a("a"),l2=n("TFGPT2ForSequenceClassification"),d2=n(" forward method, overrides the "),Nl=a("code"),c2=n("__call__"),p2=n(" special method."),h2=p(),y(Ln.$$.fragment),u2=p(),y(On.$$.fragment),m2=p(),y(Hn.$$.fragment),Tc=p(),Co=a("h2"),Nn=a("a"),Al=a("span"),y(er.$$.fragment),f2=p(),Il=a("span"),g2=n("TFSequenceClassifierOutputWithPast"),vc=p(),Do=a("div"),y(tr.$$.fragment),_2=p(),Sl=a("p"),T2=n("Base class for outputs of sentence classification models."),bc=p(),Lo=a("h2"),An=a("a"),Wl=a("span"),y(or.$$.fragment),v2=p(),Ul=a("span"),b2=n("FlaxGPT2Model"),yc=p(),Re=a("div"),y(nr.$$.fragment),y2=p(),Bl=a("p"),k2=n("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),w2=p(),sr=a("p"),$2=n("This model inherits from "),di=a("a"),P2=n("FlaxPreTrainedModel"),M2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),G2=p(),ar=a("p"),x2=n(`This model is also a Flax Linen
`),rr=a("a"),j2=n("flax.nn.Module"),F2=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),E2=p(),Rl=a("p"),z2=n("Finally, this model supports inherent JAX features such as:"),q2=p(),Bt=a("ul"),Kl=a("li"),ir=a("a"),C2=n("Just-In-Time (JIT) compilation"),D2=p(),Vl=a("li"),lr=a("a"),L2=n("Automatic Differentiation"),O2=p(),Jl=a("li"),dr=a("a"),H2=n("Vectorization"),N2=p(),Xl=a("li"),cr=a("a"),A2=n("Parallelization"),I2=p(),Nt=a("div"),y(pr.$$.fragment),S2=p(),Oo=a("p"),W2=n("The "),Yl=a("code"),U2=n("FlaxGPT2PreTrainedModel"),B2=n(" forward method, overrides the "),Ql=a("code"),R2=n("__call__"),K2=n(" special method."),V2=p(),y(In.$$.fragment),J2=p(),y(Sn.$$.fragment),kc=p(),Ho=a("h2"),Wn=a("a"),Zl=a("span"),y(hr.$$.fragment),X2=p(),ed=a("span"),Y2=n("FlaxGPT2LMHeadModel"),wc=p(),Ke=a("div"),y(ur.$$.fragment),Q2=p(),td=a("p"),Z2=n(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),eT=p(),mr=a("p"),tT=n("This model inherits from "),ci=a("a"),oT=n("FlaxPreTrainedModel"),nT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sT=p(),fr=a("p"),aT=n(`This model is also a Flax Linen
`),gr=a("a"),rT=n("flax.nn.Module"),iT=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),lT=p(),od=a("p"),dT=n("Finally, this model supports inherent JAX features such as:"),cT=p(),Rt=a("ul"),nd=a("li"),_r=a("a"),pT=n("Just-In-Time (JIT) compilation"),hT=p(),sd=a("li"),Tr=a("a"),uT=n("Automatic Differentiation"),mT=p(),ad=a("li"),vr=a("a"),fT=n("Vectorization"),gT=p(),rd=a("li"),br=a("a"),_T=n("Parallelization"),TT=p(),At=a("div"),y(yr.$$.fragment),vT=p(),No=a("p"),bT=n("The "),id=a("code"),yT=n("FlaxGPT2PreTrainedModel"),kT=n(" forward method, overrides the "),ld=a("code"),wT=n("__call__"),$T=n(" special method."),PT=p(),y(Un.$$.fragment),MT=p(),y(Bn.$$.fragment),this.h()},l(o){const _=By('[data-svelte="svelte-1phssyn"]',document.head);d=r(_,"META",{name:!0,content:!0}),_.forEach(t),T=h(o),u=r(o,"H1",{class:!0});var kr=i(u);m=r(kr,"A",{id:!0,class:!0,href:!0});var dd=i(m);v=r(dd,"SPAN",{});var cd=i(v);k(l.$$.fragment,cd),cd.forEach(t),dd.forEach(t),c=h(kr),j=r(kr,"SPAN",{});var pd=i(j);ae=s(pd,"OpenAI GPT2"),pd.forEach(t),kr.forEach(t),K=h(o),H=r(o,"H2",{class:!0});var wr=i(H);J=r(wr,"A",{id:!0,class:!0,href:!0});var hd=i(J);re=r(hd,"SPAN",{});var ud=i(re);k(x.$$.fragment,ud),ud.forEach(t),hd.forEach(t),Me=h(wr),V=r(wr,"SPAN",{});var md=i(V);Ge=s(md,"Overview"),md.forEach(t),wr.forEach(t),ke=h(o),S=r(o,"P",{});var $r=i(S);xe=s($r,"OpenAI GPT-2 model was proposed in "),de=r($r,"A",{href:!0,rel:!0});var fd=i(de);X=s(fd,"Language Models are Unsupervised Multitask Learners"),fd.forEach(t),je=s($r,` by Alec
Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei and Ilya Sutskever. It\u2019s a causal (unidirectional)
transformer pretrained using language modeling on a very large corpus of ~40 GB of text data.`),$r.forEach(t),we=h(o),B=r(o,"P",{});var gd=i(B);Fe=s(gd,"The abstract from the paper is the following:"),gd.forEach(t),$e=h(o),R=r(o,"P",{});var _d=i(R);fe=r(_d,"EM",{});var Td=i(fe);Ee=s(Td,`GPT-2 is a large transformer-based language model with 1.5 billion parameters, trained on a dataset[1] of 8 million
web pages. GPT-2 is trained with a simple objective: predict the next word, given all of the previous words within some
text. The diversity of the dataset causes this simple goal to contain naturally occurring demonstrations of many tasks
across diverse domains. GPT-2 is a direct scale-up of GPT, with more than 10X the parameters and trained on more than
10X the amount of data.`),Td.forEach(t),_d.forEach(t),le=h(o),z=r(o,"P",{});var vd=i(z);C=s(vd,"Tips:"),vd.forEach(t),Pe=h(o),N=r(o,"UL",{});var Kt=i(N);ge=r(Kt,"LI",{});var bd=i(ge);ze=s(bd,`GPT-2 is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),bd.forEach(t),Y=h(Kt),ce=r(Kt,"LI",{});var Pr=i(ce);qe=s(Pr,`GPT-2 was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),q=r(Pr,"EM",{});var yd=i(q);Ce=s(yd,"run_generation.py"),yd.forEach(t),Q=s(Pr," example script."),Pr.forEach(t),De=h(Kt),L=r(Kt,"LI",{});var ye=i(L);Z=s(ye,"The model can take the "),_e=r(ye,"EM",{});var kd=i(_e);Le=s(kd,"past_key_values"),kd.forEach(t),W=s(ye," (for PyTorch) or "),Te=r(ye,"EM",{});var wd=i(Te);ee=s(wd,"past"),wd.forEach(t),Oe=s(ye,` (for TF) as input, which is the previously computed
key/value attention pairs. Using this (`),ie=r(ye,"EM",{});var $d=i(ie);D=s($d,"past_key_values"),$d.forEach(t),He=s(ye," or "),O=r(ye,"EM",{});var Pd=i(O);Ne=s(Pd,"past"),Pd.forEach(t),Ae=s(ye,`) value prevents the model from re-computing
pre-computed values in the context of text generation. For PyTorch, see `),b=r(ye,"EM",{});var Md=i(b);F=s(Md,"past_key_values"),Md.forEach(t),at=s(ye,` argument of the
`),ne=r(ye,"A",{href:!0});var Gd=i(ne);rt=s(Gd,"GPT2Model.forward()"),Gd.forEach(t),it=s(ye," method, or for TF the "),E=r(ye,"EM",{});var xd=i(E);lt=s(xd,"past"),xd.forEach(t),dt=s(ye,` argument of the
`),Je=r(ye,"A",{href:!0});var jd=i(Je);ct=s(jd,"TFGPT2Model.call()"),jd.forEach(t),pt=s(ye," method for more information on its usage."),ye.forEach(t),U=h(Kt),A=r(Kt,"LI",{});var Vt=i(A);ht=s(Vt,"Enabling the "),Ye=r(Vt,"EM",{});var Fd=i(Ye);te=s(Fd,"scale_attn_by_inverse_layer_idx"),Fd.forEach(t),ut=s(Vt," and "),Qe=r(Vt,"EM",{});var Ed=i(Qe);Ie=s(Ed,"reorder_and_upcast_attn"),Ed.forEach(t),mt=s(Vt,` flags will apply the training stability
improvements from `),oe=r(Vt,"A",{href:!0,rel:!0});var zd=i(oe);ft=s(zd,"Mistral"),zd.forEach(t),$p=s(Vt," (for PyTorch only)."),Vt.forEach(t),Kt.forEach(t),Nd=h(o),ro=r(o,"P",{});var Rn=i(ro);is=r(Rn,"A",{href:!0,rel:!0});var qd=i(is);Pp=s(qd,"Write With Transformer"),qd.forEach(t),Mp=s(Rn,` is a webapp created and hosted by
Hugging Face showcasing the generative capabilities of several models. GPT-2 is one of them and is available in five
different sizes: small, medium, large, xl and a distilled version of the small checkpoint: `),Pi=r(Rn,"EM",{});var Cd=i(Pi);Gp=s(Cd,"distilgpt-2"),Cd.forEach(t),xp=s(Rn,"."),Rn.forEach(t),Ad=h(o),Jt=r(o,"P",{});var Ao=i(Jt);jp=s(Ao,"This model was contributed by "),ls=r(Ao,"A",{href:!0,rel:!0});var Dd=i(ls);Fp=s(Dd,"thomwolf"),Dd.forEach(t),Ep=s(Ao,". The original code can be found "),ds=r(Ao,"A",{href:!0,rel:!0});var Ld=i(ds);zp=s(Ld,"here"),Ld.forEach(t),qp=s(Ao,"."),Ao.forEach(t),Id=h(o),io=r(o,"H2",{class:!0});var Mr=i(io);So=r(Mr,"A",{id:!0,class:!0,href:!0});var Od=i(So);Mi=r(Od,"SPAN",{});var Hd=i(Mi);k(cs.$$.fragment,Hd),Hd.forEach(t),Od.forEach(t),Cp=h(Mr),Gi=r(Mr,"SPAN",{});var FT=i(Gi);Dp=s(FT,"Resources"),FT.forEach(t),Mr.forEach(t),Sd=h(o),jr=r(o,"P",{});var ET=i(jr);Lp=s(ET,"A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with GPT2. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),ET.forEach(t),Wd=h(o),k(ps.$$.fragment,o),Ud=h(o),se=r(o,"UL",{});var me=i(se);hs=r(me,"LI",{});var Pc=i(hs);Op=s(Pc,"A blog on how to "),us=r(Pc,"A",{href:!0,rel:!0});var zT=i(us);Hp=s(zT,"Finetune a non-English GPT-2 Model with Hugging Face"),zT.forEach(t),Np=s(Pc,"."),Pc.forEach(t),Ap=h(me),ms=r(me,"LI",{});var Mc=i(ms);Ip=s(Mc,"A blog on "),fs=r(Mc,"A",{href:!0,rel:!0});var qT=i(fs);Sp=s(qT,"How to generate text: using different decoding methods for language generation with Transformers"),qT.forEach(t),Wp=s(Mc," with GPT-2."),Mc.forEach(t),Up=h(me),gs=r(me,"LI",{});var Gc=i(gs);Bp=s(Gc,"A blog on "),_s=r(Gc,"A",{href:!0,rel:!0});var CT=i(_s);Rp=s(CT,"Training CodeParrot \u{1F99C} from Scratch"),CT.forEach(t),Kp=s(Gc,", a large GPT-2 model."),Gc.forEach(t),Vp=h(me),Ts=r(me,"LI",{});var xc=i(Ts);Jp=s(xc,"A blog on "),vs=r(xc,"A",{href:!0,rel:!0});var DT=i(vs);Xp=s(DT,"Faster Text Generation with TensorFlow and XLA"),DT.forEach(t),Yp=s(xc," with GPT-2."),xc.forEach(t),Qp=h(me),bs=r(me,"LI",{});var jc=i(bs);Zp=s(jc,"A blog on "),ys=r(jc,"A",{href:!0,rel:!0});var LT=i(ys);eh=s(LT,"How to train a Language Model with Megatron-LM"),LT.forEach(t),th=s(jc," with a GPT-2 model."),jc.forEach(t),oh=h(me),ks=r(me,"LI",{});var Fc=i(ks);nh=s(Fc,"A notebook on how to "),ws=r(Fc,"A",{href:!0,rel:!0});var OT=i(ws);sh=s(OT,"finetune GPT2 to generate lyrics in the style of your favorite artist"),OT.forEach(t),ah=s(Fc,". \u{1F30E}"),Fc.forEach(t),rh=h(me),$s=r(me,"LI",{});var Ec=i($s);ih=s(Ec,"A notebook on how to "),Ps=r(Ec,"A",{href:!0,rel:!0});var HT=i(Ps);lh=s(HT,"finetune GPT2 to generate tweets in the style of your favorite Twitter user"),HT.forEach(t),dh=s(Ec,". \u{1F30E}"),Ec.forEach(t),ch=h(me),Fr=r(me,"LI",{});var GT=i(Fr);Ms=r(GT,"A",{href:!0,rel:!0});var NT=i(Ms);ph=s(NT,"Causal language modeling"),NT.forEach(t),hh=s(GT," chapter of the \u{1F917} Hugging Face Course."),GT.forEach(t),uh=h(me),Ft=r(me,"LI",{});var Io=i(Ft);Er=r(Io,"A",{href:!0});var AT=i(Er);mh=s(AT,"GPT2LMHeadModel"),AT.forEach(t),fh=s(Io," is suppported by this "),Gs=r(Io,"A",{href:!0,rel:!0});var IT=i(Gs);gh=s(IT,"causal language modeling example script"),IT.forEach(t),_h=s(Io,", "),xs=r(Io,"A",{href:!0,rel:!0});var ST=i(xs);Th=s(ST,"text generation example script"),ST.forEach(t),vh=s(Io,", and "),js=r(Io,"A",{href:!0,rel:!0});var WT=i(js);bh=s(WT,"notebook"),WT.forEach(t),yh=s(Io,"."),Io.forEach(t),kh=h(me),Xt=r(me,"LI",{});var Gr=i(Xt);zr=r(Gr,"A",{href:!0});var UT=i(zr);wh=s(UT,"TFGPT2LMHeadModel"),UT.forEach(t),$h=s(Gr," is supported by this "),Fs=r(Gr,"A",{href:!0,rel:!0});var BT=i(Fs);Ph=s(BT,"causal language modeling example script"),BT.forEach(t),Mh=s(Gr," and "),Es=r(Gr,"A",{href:!0,rel:!0});var RT=i(Es);Gh=s(RT,"notebook"),RT.forEach(t),xh=s(Gr,"."),Gr.forEach(t),jh=h(me),Yt=r(me,"LI",{});var xr=i(Yt);qr=r(xr,"A",{href:!0});var KT=i(qr);Fh=s(KT,"FlaxGPT2LMHeadModel"),KT.forEach(t),Eh=s(xr," is supported by this "),zs=r(xr,"A",{href:!0,rel:!0});var VT=i(zs);zh=s(VT,"causal language modeling example script"),VT.forEach(t),qh=s(xr," and "),qs=r(xr,"A",{href:!0,rel:!0});var JT=i(qs);Ch=s(JT,"notebook"),JT.forEach(t),Dh=s(xr,"."),xr.forEach(t),me.forEach(t),Bd=h(o),lo=r(o,"H2",{class:!0});var zc=i(lo);Wo=r(zc,"A",{id:!0,class:!0,href:!0});var XT=i(Wo);xi=r(XT,"SPAN",{});var YT=i(xi);k(Cs.$$.fragment,YT),YT.forEach(t),XT.forEach(t),Lh=h(zc),ji=r(zc,"SPAN",{});var QT=i(ji);Oh=s(QT,"GPT2Config"),QT.forEach(t),zc.forEach(t),Rd=h(o),Gt=r(o,"DIV",{class:!0});var Kn=i(Gt);k(Ds.$$.fragment,Kn),Hh=h(Kn),Ut=r(Kn,"P",{});var Vn=i(Ut);Nh=s(Vn,"This is the configuration class to store the configuration of a "),Cr=r(Vn,"A",{href:!0});var ZT=i(Cr);Ah=s(ZT,"GPT2Model"),ZT.forEach(t),Ih=s(Vn," or a "),Dr=r(Vn,"A",{href:!0});var ev=i(Dr);Sh=s(ev,"TFGPT2Model"),ev.forEach(t),Wh=s(Vn,`. It is used to
instantiate a GPT-2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GPT-2
`),Ls=r(Vn,"A",{href:!0,rel:!0});var tv=i(Ls);Uh=s(tv,"gpt2"),tv.forEach(t),Bh=s(Vn," architecture."),Vn.forEach(t),Rh=h(Kn),co=r(Kn,"P",{});var pi=i(co);Kh=s(pi,"Configuration objects inherit from "),Lr=r(pi,"A",{href:!0});var ov=i(Lr);Vh=s(ov,"PretrainedConfig"),ov.forEach(t),Jh=s(pi,` and can be used to control the model outputs. Read the
documentation from `),Or=r(pi,"A",{href:!0});var nv=i(Or);Xh=s(nv,"PretrainedConfig"),nv.forEach(t),Yh=s(pi," for more information."),pi.forEach(t),Qh=h(Kn),k(Uo.$$.fragment,Kn),Kn.forEach(t),Kd=h(o),po=r(o,"H2",{class:!0});var qc=i(po);Bo=r(qc,"A",{id:!0,class:!0,href:!0});var sv=i(Bo);Fi=r(sv,"SPAN",{});var av=i(Fi);k(Os.$$.fragment,av),av.forEach(t),sv.forEach(t),Zh=h(qc),Ei=r(qc,"SPAN",{});var rv=i(Ei);eu=s(rv,"GPT2Tokenizer"),rv.forEach(t),qc.forEach(t),Vd=h(o),ve=r(o,"DIV",{class:!0});var nt=i(ve);k(Hs.$$.fragment,nt),tu=h(nt),zi=r(nt,"P",{});var iv=i(zi);ou=s(iv,"Construct a GPT-2 tokenizer. Based on byte-level Byte-Pair-Encoding."),iv.forEach(t),nu=h(nt),qi=r(nt,"P",{});var lv=i(qi);su=s(lv,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),lv.forEach(t),au=h(nt),k(Ro.$$.fragment,nt),ru=h(nt),Ns=r(nt,"P",{});var Cc=i(Ns);iu=s(Cc,"You can get around that behavior by passing "),Ci=r(Cc,"CODE",{});var dv=i(Ci);lu=s(dv,"add_prefix_space=True"),dv.forEach(t),du=s(Cc,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Cc.forEach(t),cu=h(nt),k(Ko.$$.fragment,nt),pu=h(nt),As=r(nt,"P",{});var Dc=i(As);hu=s(Dc,"This tokenizer inherits from "),Hr=r(Dc,"A",{href:!0});var cv=i(Hr);uu=s(cv,"PreTrainedTokenizer"),cv.forEach(t),mu=s(Dc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Dc.forEach(t),fu=h(nt),Nr=r(nt,"DIV",{class:!0});var pv=i(Nr);k(Is.$$.fragment,pv),pv.forEach(t),nt.forEach(t),Jd=h(o),ho=r(o,"H2",{class:!0});var Lc=i(ho);Vo=r(Lc,"A",{id:!0,class:!0,href:!0});var hv=i(Vo);Di=r(hv,"SPAN",{});var uv=i(Di);k(Ss.$$.fragment,uv),uv.forEach(t),hv.forEach(t),gu=h(Lc),Li=r(Lc,"SPAN",{});var mv=i(Li);_u=s(mv,"GPT2TokenizerFast"),mv.forEach(t),Lc.forEach(t),Xd=h(o),Se=r(o,"DIV",{class:!0});var bt=i(Se);k(Ws.$$.fragment,bt),Tu=h(bt),Us=r(bt,"P",{});var Oc=i(Us);vu=s(Oc,"Construct a \u201Cfast\u201D GPT-2 tokenizer (backed by HuggingFace\u2019s "),Oi=r(Oc,"EM",{});var fv=i(Oi);bu=s(fv,"tokenizers"),fv.forEach(t),yu=s(Oc,` library). Based on byte-level
Byte-Pair-Encoding.`),Oc.forEach(t),ku=h(bt),Hi=r(bt,"P",{});var gv=i(Hi);wu=s(gv,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),gv.forEach(t),$u=h(bt),k(Jo.$$.fragment,bt),Pu=h(bt),Bs=r(bt,"P",{});var Hc=i(Bs);Mu=s(Hc,"You can get around that behavior by passing "),Ni=r(Hc,"CODE",{});var _v=i(Ni);Gu=s(_v,"add_prefix_space=True"),_v.forEach(t),xu=s(Hc,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Hc.forEach(t),ju=h(bt),k(Xo.$$.fragment,bt),Fu=h(bt),Rs=r(bt,"P",{});var Nc=i(Rs);Eu=s(Nc,"This tokenizer inherits from "),Ar=r(Nc,"A",{href:!0});var Tv=i(Ar);zu=s(Tv,"PreTrainedTokenizerFast"),Tv.forEach(t),qu=s(Nc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Nc.forEach(t),bt.forEach(t),Yd=h(o),uo=r(o,"H2",{class:!0});var Ac=i(uo);Yo=r(Ac,"A",{id:!0,class:!0,href:!0});var vv=i(Yo);Ai=r(vv,"SPAN",{});var bv=i(Ai);k(Ks.$$.fragment,bv),bv.forEach(t),vv.forEach(t),Cu=h(Ac),Ii=r(Ac,"SPAN",{});var yv=i(Ii);Du=s(yv,"GPT2 specific outputs"),yv.forEach(t),Ac.forEach(t),Qd=h(o),mo=r(o,"DIV",{class:!0});var Ic=i(mo);k(Vs.$$.fragment,Ic),Lu=h(Ic),Si=r(Ic,"P",{});var kv=i(Si);Ou=s(kv,"Base class for outputs of models predicting if two sentences are consecutive or not."),kv.forEach(t),Ic.forEach(t),Zd=h(o),fo=r(o,"DIV",{class:!0});var Sc=i(fo);k(Js.$$.fragment,Sc),Hu=h(Sc),Wi=r(Sc,"P",{});var wv=i(Wi);Nu=s(wv,"Base class for outputs of models predicting if two sentences are consecutive or not."),wv.forEach(t),Sc.forEach(t),ec=h(o),go=r(o,"H2",{class:!0});var Wc=i(go);Qo=r(Wc,"A",{id:!0,class:!0,href:!0});var $v=i(Qo);Ui=r($v,"SPAN",{});var Pv=i(Ui);k(Xs.$$.fragment,Pv),Pv.forEach(t),$v.forEach(t),Au=h(Wc),Bi=r(Wc,"SPAN",{});var Mv=i(Bi);Iu=s(Mv,"GPT2Model"),Mv.forEach(t),Wc.forEach(t),tc=h(o),We=r(o,"DIV",{class:!0});var yt=i(We);k(Ys.$$.fragment,yt),Su=h(yt),Ri=r(yt,"P",{});var Gv=i(Ri);Wu=s(Gv,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),Gv.forEach(t),Uu=h(yt),Qs=r(yt,"P",{});var Uc=i(Qs);Bu=s(Uc,"This model inherits from "),Ir=r(Uc,"A",{href:!0});var xv=i(Ir);Ru=s(xv,"PreTrainedModel"),xv.forEach(t),Ku=s(Uc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uc.forEach(t),Vu=h(yt),Zs=r(yt,"P",{});var Bc=i(Zs);Ju=s(Bc,"This model is also a PyTorch "),ea=r(Bc,"A",{href:!0,rel:!0});var jv=i(ea);Xu=s(jv,"torch.nn.Module"),jv.forEach(t),Yu=s(Bc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bc.forEach(t),Qu=h(yt),Et=r(yt,"DIV",{class:!0});var Jn=i(Et);k(ta.$$.fragment,Jn),Zu=h(Jn),_o=r(Jn,"P",{});var hi=i(_o);em=s(hi,"The "),Sr=r(hi,"A",{href:!0});var Fv=i(Sr);tm=s(Fv,"GPT2Model"),Fv.forEach(t),om=s(hi," forward method, overrides the "),Ki=r(hi,"CODE",{});var Ev=i(Ki);nm=s(Ev,"__call__"),Ev.forEach(t),sm=s(hi," special method."),hi.forEach(t),am=h(Jn),k(Zo.$$.fragment,Jn),rm=h(Jn),k(en.$$.fragment,Jn),Jn.forEach(t),im=h(yt),zt=r(yt,"DIV",{class:!0});var Xn=i(zt);k(oa.$$.fragment,Xn),lm=h(Xn),Vi=r(Xn,"P",{});var zv=i(Vi);dm=s(zv,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),zv.forEach(t),cm=h(Xn),Ji=r(Xn,"P",{});var qv=i(Ji);pm=s(qv,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),qv.forEach(t),hm=h(Xn),k(tn.$$.fragment,Xn),Xn.forEach(t),um=h(yt),Qt=r(yt,"DIV",{class:!0});var ui=i(Qt);k(na.$$.fragment,ui),mm=h(ui),Xi=r(ui,"P",{});var Cv=i(Xi);fm=s(Cv,"Moves the model to cpu from a model parallel state."),Cv.forEach(t),gm=h(ui),k(on.$$.fragment,ui),ui.forEach(t),yt.forEach(t),oc=h(o),To=r(o,"H2",{class:!0});var Rc=i(To);nn=r(Rc,"A",{id:!0,class:!0,href:!0});var Dv=i(nn);Yi=r(Dv,"SPAN",{});var Lv=i(Yi);k(sa.$$.fragment,Lv),Lv.forEach(t),Dv.forEach(t),_m=h(Rc),Qi=r(Rc,"SPAN",{});var Ov=i(Qi);Tm=s(Ov,"GPT2LMHeadModel"),Ov.forEach(t),Rc.forEach(t),nc=h(o),Ue=r(o,"DIV",{class:!0});var kt=i(Ue);k(aa.$$.fragment,kt),vm=h(kt),Zi=r(kt,"P",{});var Hv=i(Zi);bm=s(Hv,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Hv.forEach(t),ym=h(kt),ra=r(kt,"P",{});var Kc=i(ra);km=s(Kc,"This model inherits from "),Wr=r(Kc,"A",{href:!0});var Nv=i(Wr);wm=s(Nv,"PreTrainedModel"),Nv.forEach(t),$m=s(Kc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kc.forEach(t),Pm=h(kt),ia=r(kt,"P",{});var Vc=i(ia);Mm=s(Vc,"This model is also a PyTorch "),la=r(Vc,"A",{href:!0,rel:!0});var Av=i(la);Gm=s(Av,"torch.nn.Module"),Av.forEach(t),xm=s(Vc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vc.forEach(t),jm=h(kt),qt=r(kt,"DIV",{class:!0});var Yn=i(qt);k(da.$$.fragment,Yn),Fm=h(Yn),vo=r(Yn,"P",{});var mi=i(vo);Em=s(mi,"The "),Ur=r(mi,"A",{href:!0});var Iv=i(Ur);zm=s(Iv,"GPT2LMHeadModel"),Iv.forEach(t),qm=s(mi," forward method, overrides the "),el=r(mi,"CODE",{});var Sv=i(el);Cm=s(Sv,"__call__"),Sv.forEach(t),Dm=s(mi," special method."),mi.forEach(t),Lm=h(Yn),k(sn.$$.fragment,Yn),Om=h(Yn),k(an.$$.fragment,Yn),Yn.forEach(t),Hm=h(kt),Ct=r(kt,"DIV",{class:!0});var Qn=i(Ct);k(ca.$$.fragment,Qn),Nm=h(Qn),tl=r(Qn,"P",{});var Wv=i(tl);Am=s(Wv,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),Wv.forEach(t),Im=h(Qn),ol=r(Qn,"P",{});var Uv=i(ol);Sm=s(Uv,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Uv.forEach(t),Wm=h(Qn),k(rn.$$.fragment,Qn),Qn.forEach(t),Um=h(kt),Zt=r(kt,"DIV",{class:!0});var fi=i(Zt);k(pa.$$.fragment,fi),Bm=h(fi),nl=r(fi,"P",{});var Bv=i(nl);Rm=s(Bv,"Moves the model to cpu from a model parallel state."),Bv.forEach(t),Km=h(fi),k(ln.$$.fragment,fi),fi.forEach(t),kt.forEach(t),sc=h(o),bo=r(o,"H2",{class:!0});var Jc=i(bo);dn=r(Jc,"A",{id:!0,class:!0,href:!0});var Rv=i(dn);sl=r(Rv,"SPAN",{});var Kv=i(sl);k(ha.$$.fragment,Kv),Kv.forEach(t),Rv.forEach(t),Vm=h(Jc),al=r(Jc,"SPAN",{});var Vv=i(al);Jm=s(Vv,"GPT2DoubleHeadsModel"),Vv.forEach(t),Jc.forEach(t),ac=h(o),gt=r(o,"DIV",{class:!0});var eo=i(gt);k(ua.$$.fragment,eo),Xm=h(eo),rl=r(eo,"P",{});var Jv=i(rl);Ym=s(Jv,`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Jv.forEach(t),Qm=h(eo),ma=r(eo,"P",{});var Xc=i(ma);Zm=s(Xc,"This model inherits from "),Br=r(Xc,"A",{href:!0});var Xv=i(Br);ef=s(Xv,"PreTrainedModel"),Xv.forEach(t),tf=s(Xc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xc.forEach(t),of=h(eo),fa=r(eo,"P",{});var Yc=i(fa);nf=s(Yc,"This model is also a PyTorch "),ga=r(Yc,"A",{href:!0,rel:!0});var Yv=i(ga);sf=s(Yv,"torch.nn.Module"),Yv.forEach(t),af=s(Yc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yc.forEach(t),rf=h(eo),Dt=r(eo,"DIV",{class:!0});var Zn=i(Dt);k(_a.$$.fragment,Zn),lf=h(Zn),yo=r(Zn,"P",{});var gi=i(yo);df=s(gi,"The "),Rr=r(gi,"A",{href:!0});var Qv=i(Rr);cf=s(Qv,"GPT2DoubleHeadsModel"),Qv.forEach(t),pf=s(gi," forward method, overrides the "),il=r(gi,"CODE",{});var Zv=i(il);hf=s(Zv,"__call__"),Zv.forEach(t),uf=s(gi," special method."),gi.forEach(t),mf=h(Zn),k(cn.$$.fragment,Zn),ff=h(Zn),k(pn.$$.fragment,Zn),Zn.forEach(t),eo.forEach(t),rc=h(o),ko=r(o,"H2",{class:!0});var Qc=i(ko);hn=r(Qc,"A",{id:!0,class:!0,href:!0});var eb=i(hn);ll=r(eb,"SPAN",{});var tb=i(ll);k(Ta.$$.fragment,tb),tb.forEach(t),eb.forEach(t),gf=h(Qc),dl=r(Qc,"SPAN",{});var ob=i(dl);_f=s(ob,"GPT2ForSequenceClassification"),ob.forEach(t),Qc.forEach(t),ic=h(o),Be=r(o,"DIV",{class:!0});var wt=i(Be);k(va.$$.fragment,wt),Tf=h(wt),cl=r(wt,"P",{});var nb=i(cl);vf=s(nb,"The GPT2 Model transformer with a sequence classification head on top (linear layer)."),nb.forEach(t),bf=h(wt),Kr=r(wt,"P",{});var xT=i(Kr);Vr=r(xT,"A",{href:!0});var sb=i(Vr);yf=s(sb,"GPT2ForSequenceClassification"),sb.forEach(t),kf=s(xT,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),xT.forEach(t),wf=h(wt),xt=r(wt,"P",{});var to=i(xt);$f=s(to,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),pl=r(to,"CODE",{});var ab=i(pl);Pf=s(ab,"pad_token_id"),ab.forEach(t),Mf=s(to,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),hl=r(to,"CODE",{});var rb=i(hl);Gf=s(rb,"pad_token_id"),rb.forEach(t),xf=s(to,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ul=r(to,"CODE",{});var ib=i(ul);jf=s(ib,"inputs_embeds"),ib.forEach(t),Ff=s(to," are passed instead of "),ml=r(to,"CODE",{});var lb=i(ml);Ef=s(lb,"input_ids"),lb.forEach(t),zf=s(to,`, it does the same (take the last value in
each row of the batch).`),to.forEach(t),qf=h(wt),ba=r(wt,"P",{});var Zc=i(ba);Cf=s(Zc,"This model inherits from "),Jr=r(Zc,"A",{href:!0});var db=i(Jr);Df=s(db,"PreTrainedModel"),db.forEach(t),Lf=s(Zc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zc.forEach(t),Of=h(wt),ya=r(wt,"P",{});var ep=i(ya);Hf=s(ep,"This model is also a PyTorch "),ka=r(ep,"A",{href:!0,rel:!0});var cb=i(ka);Nf=s(cb,"torch.nn.Module"),cb.forEach(t),Af=s(ep,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ep.forEach(t),If=h(wt),Xe=r(wt,"DIV",{class:!0});var $t=i(Xe);k(wa.$$.fragment,$t),Sf=h($t),wo=r($t,"P",{});var _i=i(wo);Wf=s(_i,"The "),Xr=r(_i,"A",{href:!0});var pb=i(Xr);Uf=s(pb,"GPT2ForSequenceClassification"),pb.forEach(t),Bf=s(_i," forward method, overrides the "),fl=r(_i,"CODE",{});var hb=i(fl);Rf=s(hb,"__call__"),hb.forEach(t),Kf=s(_i," special method."),_i.forEach(t),Vf=h($t),k(un.$$.fragment,$t),Jf=h($t),k(mn.$$.fragment,$t),Xf=h($t),k(fn.$$.fragment,$t),Yf=h($t),k(gn.$$.fragment,$t),Qf=h($t),k(_n.$$.fragment,$t),$t.forEach(t),wt.forEach(t),lc=h(o),$o=r(o,"H2",{class:!0});var tp=i($o);Tn=r(tp,"A",{id:!0,class:!0,href:!0});var ub=i(Tn);gl=r(ub,"SPAN",{});var mb=i(gl);k($a.$$.fragment,mb),mb.forEach(t),ub.forEach(t),Zf=h(tp),_l=r(tp,"SPAN",{});var fb=i(_l);eg=s(fb,"GPT2ForTokenClassification"),fb.forEach(t),tp.forEach(t),dc=h(o),_t=r(o,"DIV",{class:!0});var oo=i(_t);k(Pa.$$.fragment,oo),tg=h(oo),Tl=r(oo,"P",{});var gb=i(Tl);og=s(gb,`GPT2 Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),gb.forEach(t),ng=h(oo),Ma=r(oo,"P",{});var op=i(Ma);sg=s(op,"This model inherits from "),Yr=r(op,"A",{href:!0});var _b=i(Yr);ag=s(_b,"PreTrainedModel"),_b.forEach(t),rg=s(op,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),op.forEach(t),ig=h(oo),Ga=r(oo,"P",{});var np=i(Ga);lg=s(np,"This model is also a PyTorch "),xa=r(np,"A",{href:!0,rel:!0});var Tb=i(xa);dg=s(Tb,"torch.nn.Module"),Tb.forEach(t),cg=s(np,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),np.forEach(t),pg=h(oo),Tt=r(oo,"DIV",{class:!0});var no=i(Tt);k(ja.$$.fragment,no),hg=h(no),Po=r(no,"P",{});var Ti=i(Po);ug=s(Ti,"The "),Qr=r(Ti,"A",{href:!0});var vb=i(Qr);mg=s(vb,"GPT2ForTokenClassification"),vb.forEach(t),fg=s(Ti," forward method, overrides the "),vl=r(Ti,"CODE",{});var bb=i(vl);gg=s(bb,"__call__"),bb.forEach(t),_g=s(Ti," special method."),Ti.forEach(t),Tg=h(no),k(vn.$$.fragment,no),vg=h(no),k(bn.$$.fragment,no),bg=h(no),k(yn.$$.fragment,no),no.forEach(t),oo.forEach(t),cc=h(o),Mo=r(o,"H2",{class:!0});var sp=i(Mo);kn=r(sp,"A",{id:!0,class:!0,href:!0});var yb=i(kn);bl=r(yb,"SPAN",{});var kb=i(bl);k(Fa.$$.fragment,kb),kb.forEach(t),yb.forEach(t),yg=h(sp),yl=r(sp,"SPAN",{});var wb=i(yl);kg=s(wb,"TFGPT2Model"),wb.forEach(t),sp.forEach(t),pc=h(o),Ze=r(o,"DIV",{class:!0});var It=i(Ze);k(Ea.$$.fragment,It),wg=h(It),kl=r(It,"P",{});var $b=i(kl);$g=s($b,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),$b.forEach(t),Pg=h(It),za=r(It,"P",{});var ap=i(za);Mg=s(ap,"This model inherits from "),Zr=r(ap,"A",{href:!0});var Pb=i(Zr);Gg=s(Pb,"TFPreTrainedModel"),Pb.forEach(t),xg=s(ap,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ap.forEach(t),jg=h(It),qa=r(It,"P",{});var rp=i(qa);Fg=s(rp,"This model is also a "),Ca=r(rp,"A",{href:!0,rel:!0});var Mb=i(Ca);Eg=s(Mb,"tf.keras.Model"),Mb.forEach(t),zg=s(rp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rp.forEach(t),qg=h(It),k(wn.$$.fragment,It),Cg=h(It),Lt=r(It,"DIV",{class:!0});var es=i(Lt);k(Da.$$.fragment,es),Dg=h(es),Go=r(es,"P",{});var vi=i(Go);Lg=s(vi,"The "),ei=r(vi,"A",{href:!0});var Gb=i(ei);Og=s(Gb,"TFGPT2Model"),Gb.forEach(t),Hg=s(vi," forward method, overrides the "),wl=r(vi,"CODE",{});var xb=i(wl);Ng=s(xb,"__call__"),xb.forEach(t),Ag=s(vi," special method."),vi.forEach(t),Ig=h(es),k($n.$$.fragment,es),Sg=h(es),k(Pn.$$.fragment,es),es.forEach(t),It.forEach(t),hc=h(o),xo=r(o,"H2",{class:!0});var ip=i(xo);Mn=r(ip,"A",{id:!0,class:!0,href:!0});var jb=i(Mn);$l=r(jb,"SPAN",{});var Fb=i($l);k(La.$$.fragment,Fb),Fb.forEach(t),jb.forEach(t),Wg=h(ip),Pl=r(ip,"SPAN",{});var Eb=i(Pl);Ug=s(Eb,"TFGPT2LMHeadModel"),Eb.forEach(t),ip.forEach(t),uc=h(o),et=r(o,"DIV",{class:!0});var St=i(et);k(Oa.$$.fragment,St),Bg=h(St),Ml=r(St,"P",{});var zb=i(Ml);Rg=s(zb,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),zb.forEach(t),Kg=h(St),Ha=r(St,"P",{});var lp=i(Ha);Vg=s(lp,"This model inherits from "),ti=r(lp,"A",{href:!0});var qb=i(ti);Jg=s(qb,"TFPreTrainedModel"),qb.forEach(t),Xg=s(lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp.forEach(t),Yg=h(St),Na=r(St,"P",{});var dp=i(Na);Qg=s(dp,"This model is also a "),Aa=r(dp,"A",{href:!0,rel:!0});var Cb=i(Aa);Zg=s(Cb,"tf.keras.Model"),Cb.forEach(t),e_=s(dp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dp.forEach(t),t_=h(St),k(Gn.$$.fragment,St),o_=h(St),Ot=r(St,"DIV",{class:!0});var ts=i(Ot);k(Ia.$$.fragment,ts),n_=h(ts),jo=r(ts,"P",{});var bi=i(jo);s_=s(bi,"The "),oi=r(bi,"A",{href:!0});var Db=i(oi);a_=s(Db,"TFGPT2LMHeadModel"),Db.forEach(t),r_=s(bi," forward method, overrides the "),Gl=r(bi,"CODE",{});var Lb=i(Gl);i_=s(Lb,"__call__"),Lb.forEach(t),l_=s(bi," special method."),bi.forEach(t),d_=h(ts),k(xn.$$.fragment,ts),c_=h(ts),k(jn.$$.fragment,ts),ts.forEach(t),St.forEach(t),mc=h(o),Fo=r(o,"H2",{class:!0});var cp=i(Fo);Fn=r(cp,"A",{id:!0,class:!0,href:!0});var Ob=i(Fn);xl=r(Ob,"SPAN",{});var Hb=i(xl);k(Sa.$$.fragment,Hb),Hb.forEach(t),Ob.forEach(t),p_=h(cp),jl=r(cp,"SPAN",{});var Nb=i(jl);h_=s(Nb,"TFGPT2DoubleHeadsModel"),Nb.forEach(t),cp.forEach(t),fc=h(o),tt=r(o,"DIV",{class:!0});var Wt=i(tt);k(Wa.$$.fragment,Wt),u_=h(Wt),Fl=r(Wt,"P",{});var Ab=i(Fl);m_=s(Ab,`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Ab.forEach(t),f_=h(Wt),Ua=r(Wt,"P",{});var pp=i(Ua);g_=s(pp,"This model inherits from "),ni=r(pp,"A",{href:!0});var Ib=i(ni);__=s(Ib,"TFPreTrainedModel"),Ib.forEach(t),T_=s(pp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pp.forEach(t),v_=h(Wt),Ba=r(Wt,"P",{});var hp=i(Ba);b_=s(hp,"This model is also a "),Ra=r(hp,"A",{href:!0,rel:!0});var Sb=i(Ra);y_=s(Sb,"tf.keras.Model"),Sb.forEach(t),k_=s(hp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hp.forEach(t),w_=h(Wt),k(En.$$.fragment,Wt),$_=h(Wt),Ht=r(Wt,"DIV",{class:!0});var os=i(Ht);k(Ka.$$.fragment,os),P_=h(os),Eo=r(os,"P",{});var yi=i(Eo);M_=s(yi,"The "),si=r(yi,"A",{href:!0});var Wb=i(si);G_=s(Wb,"TFGPT2DoubleHeadsModel"),Wb.forEach(t),x_=s(yi," forward method, overrides the "),El=r(yi,"CODE",{});var Ub=i(El);j_=s(Ub,"__call__"),Ub.forEach(t),F_=s(yi," special method."),yi.forEach(t),E_=h(os),k(zn.$$.fragment,os),z_=h(os),k(qn.$$.fragment,os),os.forEach(t),Wt.forEach(t),gc=h(o),zo=r(o,"H2",{class:!0});var up=i(zo);Cn=r(up,"A",{id:!0,class:!0,href:!0});var Bb=i(Cn);zl=r(Bb,"SPAN",{});var Rb=i(zl);k(Va.$$.fragment,Rb),Rb.forEach(t),Bb.forEach(t),q_=h(up),ql=r(up,"SPAN",{});var Kb=i(ql);C_=s(Kb,"TFGPT2ForSequenceClassification"),Kb.forEach(t),up.forEach(t),_c=h(o),be=r(o,"DIV",{class:!0});var st=i(be);k(Ja.$$.fragment,st),D_=h(st),Cl=r(st,"P",{});var Vb=i(Cl);L_=s(Vb,"The GPT2 Model transformer with a sequence classification head on top (linear layer)."),Vb.forEach(t),O_=h(st),ai=r(st,"P",{});var jT=i(ai);ri=r(jT,"A",{href:!0});var Jb=i(ri);H_=s(Jb,"TFGPT2ForSequenceClassification"),Jb.forEach(t),N_=s(jT,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),jT.forEach(t),A_=h(st),jt=r(st,"P",{});var so=i(jt);I_=s(so,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Dl=r(so,"CODE",{});var Xb=i(Dl);S_=s(Xb,"pad_token_id"),Xb.forEach(t),W_=s(so,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ll=r(so,"CODE",{});var Yb=i(Ll);U_=s(Yb,"pad_token_id"),Yb.forEach(t),B_=s(so,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ol=r(so,"CODE",{});var Qb=i(Ol);R_=s(Qb,"inputs_embeds"),Qb.forEach(t),K_=s(so," are passed instead of "),Hl=r(so,"CODE",{});var Zb=i(Hl);V_=s(Zb,"input_ids"),Zb.forEach(t),J_=s(so,`, it does the same (take the last value in
each row of the batch).`),so.forEach(t),X_=h(st),Xa=r(st,"P",{});var mp=i(Xa);Y_=s(mp,"This model inherits from "),ii=r(mp,"A",{href:!0});var ey=i(ii);Q_=s(ey,"TFPreTrainedModel"),ey.forEach(t),Z_=s(mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mp.forEach(t),e2=h(st),Ya=r(st,"P",{});var fp=i(Ya);t2=s(fp,"This model is also a "),Qa=r(fp,"A",{href:!0,rel:!0});var ty=i(Qa);o2=s(ty,"tf.keras.Model"),ty.forEach(t),n2=s(fp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fp.forEach(t),s2=h(st),k(Dn.$$.fragment,st),a2=h(st),vt=r(st,"DIV",{class:!0});var ao=i(vt);k(Za.$$.fragment,ao),r2=h(ao),qo=r(ao,"P",{});var ki=i(qo);i2=s(ki,"The "),li=r(ki,"A",{href:!0});var oy=i(li);l2=s(oy,"TFGPT2ForSequenceClassification"),oy.forEach(t),d2=s(ki," forward method, overrides the "),Nl=r(ki,"CODE",{});var ny=i(Nl);c2=s(ny,"__call__"),ny.forEach(t),p2=s(ki," special method."),ki.forEach(t),h2=h(ao),k(Ln.$$.fragment,ao),u2=h(ao),k(On.$$.fragment,ao),m2=h(ao),k(Hn.$$.fragment,ao),ao.forEach(t),st.forEach(t),Tc=h(o),Co=r(o,"H2",{class:!0});var gp=i(Co);Nn=r(gp,"A",{id:!0,class:!0,href:!0});var sy=i(Nn);Al=r(sy,"SPAN",{});var ay=i(Al);k(er.$$.fragment,ay),ay.forEach(t),sy.forEach(t),f2=h(gp),Il=r(gp,"SPAN",{});var ry=i(Il);g2=s(ry,"TFSequenceClassifierOutputWithPast"),ry.forEach(t),gp.forEach(t),vc=h(o),Do=r(o,"DIV",{class:!0});var _p=i(Do);k(tr.$$.fragment,_p),_2=h(_p),Sl=r(_p,"P",{});var iy=i(Sl);T2=s(iy,"Base class for outputs of sentence classification models."),iy.forEach(t),_p.forEach(t),bc=h(o),Lo=r(o,"H2",{class:!0});var Tp=i(Lo);An=r(Tp,"A",{id:!0,class:!0,href:!0});var ly=i(An);Wl=r(ly,"SPAN",{});var dy=i(Wl);k(or.$$.fragment,dy),dy.forEach(t),ly.forEach(t),v2=h(Tp),Ul=r(Tp,"SPAN",{});var cy=i(Ul);b2=s(cy,"FlaxGPT2Model"),cy.forEach(t),Tp.forEach(t),yc=h(o),Re=r(o,"DIV",{class:!0});var Pt=i(Re);k(nr.$$.fragment,Pt),y2=h(Pt),Bl=r(Pt,"P",{});var py=i(Bl);k2=s(py,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),py.forEach(t),w2=h(Pt),sr=r(Pt,"P",{});var vp=i(sr);$2=s(vp,"This model inherits from "),di=r(vp,"A",{href:!0});var hy=i(di);P2=s(hy,"FlaxPreTrainedModel"),hy.forEach(t),M2=s(vp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vp.forEach(t),G2=h(Pt),ar=r(Pt,"P",{});var bp=i(ar);x2=s(bp,`This model is also a Flax Linen
`),rr=r(bp,"A",{href:!0,rel:!0});var uy=i(rr);j2=s(uy,"flax.nn.Module"),uy.forEach(t),F2=s(bp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bp.forEach(t),E2=h(Pt),Rl=r(Pt,"P",{});var my=i(Rl);z2=s(my,"Finally, this model supports inherent JAX features such as:"),my.forEach(t),q2=h(Pt),Bt=r(Pt,"UL",{});var ns=i(Bt);Kl=r(ns,"LI",{});var fy=i(Kl);ir=r(fy,"A",{href:!0,rel:!0});var gy=i(ir);C2=s(gy,"Just-In-Time (JIT) compilation"),gy.forEach(t),fy.forEach(t),D2=h(ns),Vl=r(ns,"LI",{});var _y=i(Vl);lr=r(_y,"A",{href:!0,rel:!0});var Ty=i(lr);L2=s(Ty,"Automatic Differentiation"),Ty.forEach(t),_y.forEach(t),O2=h(ns),Jl=r(ns,"LI",{});var vy=i(Jl);dr=r(vy,"A",{href:!0,rel:!0});var by=i(dr);H2=s(by,"Vectorization"),by.forEach(t),vy.forEach(t),N2=h(ns),Xl=r(ns,"LI",{});var yy=i(Xl);cr=r(yy,"A",{href:!0,rel:!0});var ky=i(cr);A2=s(ky,"Parallelization"),ky.forEach(t),yy.forEach(t),ns.forEach(t),I2=h(Pt),Nt=r(Pt,"DIV",{class:!0});var ss=i(Nt);k(pr.$$.fragment,ss),S2=h(ss),Oo=r(ss,"P",{});var wi=i(Oo);W2=s(wi,"The "),Yl=r(wi,"CODE",{});var wy=i(Yl);U2=s(wy,"FlaxGPT2PreTrainedModel"),wy.forEach(t),B2=s(wi," forward method, overrides the "),Ql=r(wi,"CODE",{});var $y=i(Ql);R2=s($y,"__call__"),$y.forEach(t),K2=s(wi," special method."),wi.forEach(t),V2=h(ss),k(In.$$.fragment,ss),J2=h(ss),k(Sn.$$.fragment,ss),ss.forEach(t),Pt.forEach(t),kc=h(o),Ho=r(o,"H2",{class:!0});var yp=i(Ho);Wn=r(yp,"A",{id:!0,class:!0,href:!0});var Py=i(Wn);Zl=r(Py,"SPAN",{});var My=i(Zl);k(hr.$$.fragment,My),My.forEach(t),Py.forEach(t),X2=h(yp),ed=r(yp,"SPAN",{});var Gy=i(ed);Y2=s(Gy,"FlaxGPT2LMHeadModel"),Gy.forEach(t),yp.forEach(t),wc=h(o),Ke=r(o,"DIV",{class:!0});var Mt=i(Ke);k(ur.$$.fragment,Mt),Q2=h(Mt),td=r(Mt,"P",{});var xy=i(td);Z2=s(xy,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),xy.forEach(t),eT=h(Mt),mr=r(Mt,"P",{});var kp=i(mr);tT=s(kp,"This model inherits from "),ci=r(kp,"A",{href:!0});var jy=i(ci);oT=s(jy,"FlaxPreTrainedModel"),jy.forEach(t),nT=s(kp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kp.forEach(t),sT=h(Mt),fr=r(Mt,"P",{});var wp=i(fr);aT=s(wp,`This model is also a Flax Linen
`),gr=r(wp,"A",{href:!0,rel:!0});var Fy=i(gr);rT=s(Fy,"flax.nn.Module"),Fy.forEach(t),iT=s(wp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wp.forEach(t),lT=h(Mt),od=r(Mt,"P",{});var Ey=i(od);dT=s(Ey,"Finally, this model supports inherent JAX features such as:"),Ey.forEach(t),cT=h(Mt),Rt=r(Mt,"UL",{});var as=i(Rt);nd=r(as,"LI",{});var zy=i(nd);_r=r(zy,"A",{href:!0,rel:!0});var qy=i(_r);pT=s(qy,"Just-In-Time (JIT) compilation"),qy.forEach(t),zy.forEach(t),hT=h(as),sd=r(as,"LI",{});var Cy=i(sd);Tr=r(Cy,"A",{href:!0,rel:!0});var Dy=i(Tr);uT=s(Dy,"Automatic Differentiation"),Dy.forEach(t),Cy.forEach(t),mT=h(as),ad=r(as,"LI",{});var Ly=i(ad);vr=r(Ly,"A",{href:!0,rel:!0});var Oy=i(vr);fT=s(Oy,"Vectorization"),Oy.forEach(t),Ly.forEach(t),gT=h(as),rd=r(as,"LI",{});var Hy=i(rd);br=r(Hy,"A",{href:!0,rel:!0});var Ny=i(br);_T=s(Ny,"Parallelization"),Ny.forEach(t),Hy.forEach(t),as.forEach(t),TT=h(Mt),At=r(Mt,"DIV",{class:!0});var rs=i(At);k(yr.$$.fragment,rs),vT=h(rs),No=r(rs,"P",{});var $i=i(No);bT=s($i,"The "),id=r($i,"CODE",{});var Ay=i(id);yT=s(Ay,"FlaxGPT2PreTrainedModel"),Ay.forEach(t),kT=s($i," forward method, overrides the "),ld=r($i,"CODE",{});var Iy=i(ld);wT=s(Iy,"__call__"),Iy.forEach(t),$T=s($i," special method."),$i.forEach(t),PT=h(rs),k(Un.$$.fragment,rs),MT=h(rs),k(Bn.$$.fragment,rs),rs.forEach(t),Mt.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Dk)),f(m,"id","openai-gpt2"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#openai-gpt2"),f(u,"class","relative group"),f(J,"id","overview"),f(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(J,"href","#overview"),f(H,"class","relative group"),f(de,"href","https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"),f(de,"rel","nofollow"),f(ne,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Model.forward"),f(Je,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.TFGPT2Model.call"),f(oe,"href","https://github.com/stanford-crfm/mistral/"),f(oe,"rel","nofollow"),f(is,"href","https://transformer.huggingface.co/doc/gpt2-large"),f(is,"rel","nofollow"),f(ls,"href","https://huggingface.co/thomwolf"),f(ls,"rel","nofollow"),f(ds,"href","https://openai.com/blog/better-language-models/"),f(ds,"rel","nofollow"),f(So,"id","resources"),f(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(So,"href","#resources"),f(io,"class","relative group"),f(us,"href","https://www.philschmid.de/fine-tune-a-non-english-gpt-2-model-with-huggingface"),f(us,"rel","nofollow"),f(fs,"href","https://huggingface.co/blog/how-to-generate"),f(fs,"rel","nofollow"),f(_s,"href","https://huggingface.co/blog/codeparrot"),f(_s,"rel","nofollow"),f(vs,"href","https://huggingface.co/blog/tf-xla-generate"),f(vs,"rel","nofollow"),f(ys,"href","https://huggingface.co/blog/megatron-training"),f(ys,"rel","nofollow"),f(ws,"href","https://colab.research.google.com/github/AlekseyKorshuk/huggingartists/blob/master/huggingartists-demo.ipynb"),f(ws,"rel","nofollow"),f(Ps,"href","https://colab.research.google.com/github/borisdayma/huggingtweets/blob/master/huggingtweets-demo.ipynb"),f(Ps,"rel","nofollow"),f(Ms,"href","https://huggingface.co/course/en/chapter7/6?fw=pt#training-a-causal-language-model-from-scratch"),f(Ms,"rel","nofollow"),f(Er,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2LMHeadModel"),f(Gs,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/language-modeling#gpt-2gpt-and-causal-language-modeling"),f(Gs,"rel","nofollow"),f(xs,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/text-generation"),f(xs,"rel","nofollow"),f(js,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling.ipynb"),f(js,"rel","nofollow"),f(zr,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.TFGPT2LMHeadModel"),f(Fs,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/language-modeling#run_clmpy"),f(Fs,"rel","nofollow"),f(Es,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling-tf.ipynb"),f(Es,"rel","nofollow"),f(qr,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.FlaxGPT2LMHeadModel"),f(zs,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling#causal-language-modeling"),f(zs,"rel","nofollow"),f(qs,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/causal_language_modeling_flax.ipynb"),f(qs,"rel","nofollow"),f(Wo,"id","transformers.GPT2Config"),f(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Wo,"href","#transformers.GPT2Config"),f(lo,"class","relative group"),f(Cr,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Model"),f(Dr,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.TFGPT2Model"),f(Ls,"href","https://huggingface.co/gpt2"),f(Ls,"rel","nofollow"),f(Lr,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),f(Or,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),f(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bo,"id","transformers.GPT2Tokenizer"),f(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Bo,"href","#transformers.GPT2Tokenizer"),f(po,"class","relative group"),f(Hr,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(Nr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Vo,"id","transformers.GPT2TokenizerFast"),f(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Vo,"href","#transformers.GPT2TokenizerFast"),f(ho,"class","relative group"),f(Ar,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Yo,"id","transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"),f(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Yo,"href","#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"),f(uo,"class","relative group"),f(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qo,"id","transformers.GPT2Model"),f(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qo,"href","#transformers.GPT2Model"),f(go,"class","relative group"),f(Ir,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),f(ea,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ea,"rel","nofollow"),f(Sr,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2Model"),f(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nn,"id","transformers.GPT2LMHeadModel"),f(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(nn,"href","#transformers.GPT2LMHeadModel"),f(To,"class","relative group"),f(Wr,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),f(la,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(la,"rel","nofollow"),f(Ur,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2LMHeadModel"),f(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dn,"id","transformers.GPT2DoubleHeadsModel"),f(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(dn,"href","#transformers.GPT2DoubleHeadsModel"),f(bo,"class","relative group"),f(Br,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),f(ga,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ga,"rel","nofollow"),f(Rr,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel"),f(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(hn,"id","transformers.GPT2ForSequenceClassification"),f(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(hn,"href","#transformers.GPT2ForSequenceClassification"),f(ko,"class","relative group"),f(Vr,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2ForSequenceClassification"),f(Jr,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),f(ka,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ka,"rel","nofollow"),f(Xr,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2ForSequenceClassification"),f(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Tn,"id","transformers.GPT2ForTokenClassification"),f(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Tn,"href","#transformers.GPT2ForTokenClassification"),f($o,"class","relative group"),f(Yr,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),f(xa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(xa,"rel","nofollow"),f(Qr,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.GPT2ForTokenClassification"),f(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(kn,"id","transformers.TFGPT2Model"),f(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(kn,"href","#transformers.TFGPT2Model"),f(Mo,"class","relative group"),f(Zr,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ca,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ca,"rel","nofollow"),f(ei,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.TFGPT2Model"),f(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mn,"id","transformers.TFGPT2LMHeadModel"),f(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Mn,"href","#transformers.TFGPT2LMHeadModel"),f(xo,"class","relative group"),f(ti,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Aa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Aa,"rel","nofollow"),f(oi,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.TFGPT2LMHeadModel"),f(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fn,"id","transformers.TFGPT2DoubleHeadsModel"),f(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fn,"href","#transformers.TFGPT2DoubleHeadsModel"),f(Fo,"class","relative group"),f(ni,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ra,"rel","nofollow"),f(si,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel"),f(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Cn,"id","transformers.TFGPT2ForSequenceClassification"),f(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Cn,"href","#transformers.TFGPT2ForSequenceClassification"),f(zo,"class","relative group"),f(ri,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.TFGPT2ForSequenceClassification"),f(ii,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Qa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Qa,"rel","nofollow"),f(li,"href","/docs/transformers/v4.24.0/en/model_doc/gpt2#transformers.TFGPT2ForSequenceClassification"),f(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Nn,"id","transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"),f(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Nn,"href","#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"),f(Co,"class","relative group"),f(Do,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(An,"id","transformers.FlaxGPT2Model"),f(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(An,"href","#transformers.FlaxGPT2Model"),f(Lo,"class","relative group"),f(di,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(rr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(rr,"rel","nofollow"),f(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ir,"rel","nofollow"),f(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(lr,"rel","nofollow"),f(dr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(dr,"rel","nofollow"),f(cr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(cr,"rel","nofollow"),f(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wn,"id","transformers.FlaxGPT2LMHeadModel"),f(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Wn,"href","#transformers.FlaxGPT2LMHeadModel"),f(Ho,"class","relative group"),f(ci,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(gr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(gr,"rel","nofollow"),f(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(_r,"rel","nofollow"),f(Tr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Tr,"rel","nofollow"),f(vr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(vr,"rel","nofollow"),f(br,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(br,"rel","nofollow"),f(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,d),g(o,T,_),g(o,u,_),e(u,m),e(m,v),w(l,v,null),e(u,c),e(u,j),e(j,ae),g(o,K,_),g(o,H,_),e(H,J),e(J,re),w(x,re,null),e(H,Me),e(H,V),e(V,Ge),g(o,ke,_),g(o,S,_),e(S,xe),e(S,de),e(de,X),e(S,je),g(o,we,_),g(o,B,_),e(B,Fe),g(o,$e,_),g(o,R,_),e(R,fe),e(fe,Ee),g(o,le,_),g(o,z,_),e(z,C),g(o,Pe,_),g(o,N,_),e(N,ge),e(ge,ze),e(N,Y),e(N,ce),e(ce,qe),e(ce,q),e(q,Ce),e(ce,Q),e(N,De),e(N,L),e(L,Z),e(L,_e),e(_e,Le),e(L,W),e(L,Te),e(Te,ee),e(L,Oe),e(L,ie),e(ie,D),e(L,He),e(L,O),e(O,Ne),e(L,Ae),e(L,b),e(b,F),e(L,at),e(L,ne),e(ne,rt),e(L,it),e(L,E),e(E,lt),e(L,dt),e(L,Je),e(Je,ct),e(L,pt),e(N,U),e(N,A),e(A,ht),e(A,Ye),e(Ye,te),e(A,ut),e(A,Qe),e(Qe,Ie),e(A,mt),e(A,oe),e(oe,ft),e(A,$p),g(o,Nd,_),g(o,ro,_),e(ro,is),e(is,Pp),e(ro,Mp),e(ro,Pi),e(Pi,Gp),e(ro,xp),g(o,Ad,_),g(o,Jt,_),e(Jt,jp),e(Jt,ls),e(ls,Fp),e(Jt,Ep),e(Jt,ds),e(ds,zp),e(Jt,qp),g(o,Id,_),g(o,io,_),e(io,So),e(So,Mi),w(cs,Mi,null),e(io,Cp),e(io,Gi),e(Gi,Dp),g(o,Sd,_),g(o,jr,_),e(jr,Lp),g(o,Wd,_),w(ps,o,_),g(o,Ud,_),g(o,se,_),e(se,hs),e(hs,Op),e(hs,us),e(us,Hp),e(hs,Np),e(se,Ap),e(se,ms),e(ms,Ip),e(ms,fs),e(fs,Sp),e(ms,Wp),e(se,Up),e(se,gs),e(gs,Bp),e(gs,_s),e(_s,Rp),e(gs,Kp),e(se,Vp),e(se,Ts),e(Ts,Jp),e(Ts,vs),e(vs,Xp),e(Ts,Yp),e(se,Qp),e(se,bs),e(bs,Zp),e(bs,ys),e(ys,eh),e(bs,th),e(se,oh),e(se,ks),e(ks,nh),e(ks,ws),e(ws,sh),e(ks,ah),e(se,rh),e(se,$s),e($s,ih),e($s,Ps),e(Ps,lh),e($s,dh),e(se,ch),e(se,Fr),e(Fr,Ms),e(Ms,ph),e(Fr,hh),e(se,uh),e(se,Ft),e(Ft,Er),e(Er,mh),e(Ft,fh),e(Ft,Gs),e(Gs,gh),e(Ft,_h),e(Ft,xs),e(xs,Th),e(Ft,vh),e(Ft,js),e(js,bh),e(Ft,yh),e(se,kh),e(se,Xt),e(Xt,zr),e(zr,wh),e(Xt,$h),e(Xt,Fs),e(Fs,Ph),e(Xt,Mh),e(Xt,Es),e(Es,Gh),e(Xt,xh),e(se,jh),e(se,Yt),e(Yt,qr),e(qr,Fh),e(Yt,Eh),e(Yt,zs),e(zs,zh),e(Yt,qh),e(Yt,qs),e(qs,Ch),e(Yt,Dh),g(o,Bd,_),g(o,lo,_),e(lo,Wo),e(Wo,xi),w(Cs,xi,null),e(lo,Lh),e(lo,ji),e(ji,Oh),g(o,Rd,_),g(o,Gt,_),w(Ds,Gt,null),e(Gt,Hh),e(Gt,Ut),e(Ut,Nh),e(Ut,Cr),e(Cr,Ah),e(Ut,Ih),e(Ut,Dr),e(Dr,Sh),e(Ut,Wh),e(Ut,Ls),e(Ls,Uh),e(Ut,Bh),e(Gt,Rh),e(Gt,co),e(co,Kh),e(co,Lr),e(Lr,Vh),e(co,Jh),e(co,Or),e(Or,Xh),e(co,Yh),e(Gt,Qh),w(Uo,Gt,null),g(o,Kd,_),g(o,po,_),e(po,Bo),e(Bo,Fi),w(Os,Fi,null),e(po,Zh),e(po,Ei),e(Ei,eu),g(o,Vd,_),g(o,ve,_),w(Hs,ve,null),e(ve,tu),e(ve,zi),e(zi,ou),e(ve,nu),e(ve,qi),e(qi,su),e(ve,au),w(Ro,ve,null),e(ve,ru),e(ve,Ns),e(Ns,iu),e(Ns,Ci),e(Ci,lu),e(Ns,du),e(ve,cu),w(Ko,ve,null),e(ve,pu),e(ve,As),e(As,hu),e(As,Hr),e(Hr,uu),e(As,mu),e(ve,fu),e(ve,Nr),w(Is,Nr,null),g(o,Jd,_),g(o,ho,_),e(ho,Vo),e(Vo,Di),w(Ss,Di,null),e(ho,gu),e(ho,Li),e(Li,_u),g(o,Xd,_),g(o,Se,_),w(Ws,Se,null),e(Se,Tu),e(Se,Us),e(Us,vu),e(Us,Oi),e(Oi,bu),e(Us,yu),e(Se,ku),e(Se,Hi),e(Hi,wu),e(Se,$u),w(Jo,Se,null),e(Se,Pu),e(Se,Bs),e(Bs,Mu),e(Bs,Ni),e(Ni,Gu),e(Bs,xu),e(Se,ju),w(Xo,Se,null),e(Se,Fu),e(Se,Rs),e(Rs,Eu),e(Rs,Ar),e(Ar,zu),e(Rs,qu),g(o,Yd,_),g(o,uo,_),e(uo,Yo),e(Yo,Ai),w(Ks,Ai,null),e(uo,Cu),e(uo,Ii),e(Ii,Du),g(o,Qd,_),g(o,mo,_),w(Vs,mo,null),e(mo,Lu),e(mo,Si),e(Si,Ou),g(o,Zd,_),g(o,fo,_),w(Js,fo,null),e(fo,Hu),e(fo,Wi),e(Wi,Nu),g(o,ec,_),g(o,go,_),e(go,Qo),e(Qo,Ui),w(Xs,Ui,null),e(go,Au),e(go,Bi),e(Bi,Iu),g(o,tc,_),g(o,We,_),w(Ys,We,null),e(We,Su),e(We,Ri),e(Ri,Wu),e(We,Uu),e(We,Qs),e(Qs,Bu),e(Qs,Ir),e(Ir,Ru),e(Qs,Ku),e(We,Vu),e(We,Zs),e(Zs,Ju),e(Zs,ea),e(ea,Xu),e(Zs,Yu),e(We,Qu),e(We,Et),w(ta,Et,null),e(Et,Zu),e(Et,_o),e(_o,em),e(_o,Sr),e(Sr,tm),e(_o,om),e(_o,Ki),e(Ki,nm),e(_o,sm),e(Et,am),w(Zo,Et,null),e(Et,rm),w(en,Et,null),e(We,im),e(We,zt),w(oa,zt,null),e(zt,lm),e(zt,Vi),e(Vi,dm),e(zt,cm),e(zt,Ji),e(Ji,pm),e(zt,hm),w(tn,zt,null),e(We,um),e(We,Qt),w(na,Qt,null),e(Qt,mm),e(Qt,Xi),e(Xi,fm),e(Qt,gm),w(on,Qt,null),g(o,oc,_),g(o,To,_),e(To,nn),e(nn,Yi),w(sa,Yi,null),e(To,_m),e(To,Qi),e(Qi,Tm),g(o,nc,_),g(o,Ue,_),w(aa,Ue,null),e(Ue,vm),e(Ue,Zi),e(Zi,bm),e(Ue,ym),e(Ue,ra),e(ra,km),e(ra,Wr),e(Wr,wm),e(ra,$m),e(Ue,Pm),e(Ue,ia),e(ia,Mm),e(ia,la),e(la,Gm),e(ia,xm),e(Ue,jm),e(Ue,qt),w(da,qt,null),e(qt,Fm),e(qt,vo),e(vo,Em),e(vo,Ur),e(Ur,zm),e(vo,qm),e(vo,el),e(el,Cm),e(vo,Dm),e(qt,Lm),w(sn,qt,null),e(qt,Om),w(an,qt,null),e(Ue,Hm),e(Ue,Ct),w(ca,Ct,null),e(Ct,Nm),e(Ct,tl),e(tl,Am),e(Ct,Im),e(Ct,ol),e(ol,Sm),e(Ct,Wm),w(rn,Ct,null),e(Ue,Um),e(Ue,Zt),w(pa,Zt,null),e(Zt,Bm),e(Zt,nl),e(nl,Rm),e(Zt,Km),w(ln,Zt,null),g(o,sc,_),g(o,bo,_),e(bo,dn),e(dn,sl),w(ha,sl,null),e(bo,Vm),e(bo,al),e(al,Jm),g(o,ac,_),g(o,gt,_),w(ua,gt,null),e(gt,Xm),e(gt,rl),e(rl,Ym),e(gt,Qm),e(gt,ma),e(ma,Zm),e(ma,Br),e(Br,ef),e(ma,tf),e(gt,of),e(gt,fa),e(fa,nf),e(fa,ga),e(ga,sf),e(fa,af),e(gt,rf),e(gt,Dt),w(_a,Dt,null),e(Dt,lf),e(Dt,yo),e(yo,df),e(yo,Rr),e(Rr,cf),e(yo,pf),e(yo,il),e(il,hf),e(yo,uf),e(Dt,mf),w(cn,Dt,null),e(Dt,ff),w(pn,Dt,null),g(o,rc,_),g(o,ko,_),e(ko,hn),e(hn,ll),w(Ta,ll,null),e(ko,gf),e(ko,dl),e(dl,_f),g(o,ic,_),g(o,Be,_),w(va,Be,null),e(Be,Tf),e(Be,cl),e(cl,vf),e(Be,bf),e(Be,Kr),e(Kr,Vr),e(Vr,yf),e(Kr,kf),e(Be,wf),e(Be,xt),e(xt,$f),e(xt,pl),e(pl,Pf),e(xt,Mf),e(xt,hl),e(hl,Gf),e(xt,xf),e(xt,ul),e(ul,jf),e(xt,Ff),e(xt,ml),e(ml,Ef),e(xt,zf),e(Be,qf),e(Be,ba),e(ba,Cf),e(ba,Jr),e(Jr,Df),e(ba,Lf),e(Be,Of),e(Be,ya),e(ya,Hf),e(ya,ka),e(ka,Nf),e(ya,Af),e(Be,If),e(Be,Xe),w(wa,Xe,null),e(Xe,Sf),e(Xe,wo),e(wo,Wf),e(wo,Xr),e(Xr,Uf),e(wo,Bf),e(wo,fl),e(fl,Rf),e(wo,Kf),e(Xe,Vf),w(un,Xe,null),e(Xe,Jf),w(mn,Xe,null),e(Xe,Xf),w(fn,Xe,null),e(Xe,Yf),w(gn,Xe,null),e(Xe,Qf),w(_n,Xe,null),g(o,lc,_),g(o,$o,_),e($o,Tn),e(Tn,gl),w($a,gl,null),e($o,Zf),e($o,_l),e(_l,eg),g(o,dc,_),g(o,_t,_),w(Pa,_t,null),e(_t,tg),e(_t,Tl),e(Tl,og),e(_t,ng),e(_t,Ma),e(Ma,sg),e(Ma,Yr),e(Yr,ag),e(Ma,rg),e(_t,ig),e(_t,Ga),e(Ga,lg),e(Ga,xa),e(xa,dg),e(Ga,cg),e(_t,pg),e(_t,Tt),w(ja,Tt,null),e(Tt,hg),e(Tt,Po),e(Po,ug),e(Po,Qr),e(Qr,mg),e(Po,fg),e(Po,vl),e(vl,gg),e(Po,_g),e(Tt,Tg),w(vn,Tt,null),e(Tt,vg),w(bn,Tt,null),e(Tt,bg),w(yn,Tt,null),g(o,cc,_),g(o,Mo,_),e(Mo,kn),e(kn,bl),w(Fa,bl,null),e(Mo,yg),e(Mo,yl),e(yl,kg),g(o,pc,_),g(o,Ze,_),w(Ea,Ze,null),e(Ze,wg),e(Ze,kl),e(kl,$g),e(Ze,Pg),e(Ze,za),e(za,Mg),e(za,Zr),e(Zr,Gg),e(za,xg),e(Ze,jg),e(Ze,qa),e(qa,Fg),e(qa,Ca),e(Ca,Eg),e(qa,zg),e(Ze,qg),w(wn,Ze,null),e(Ze,Cg),e(Ze,Lt),w(Da,Lt,null),e(Lt,Dg),e(Lt,Go),e(Go,Lg),e(Go,ei),e(ei,Og),e(Go,Hg),e(Go,wl),e(wl,Ng),e(Go,Ag),e(Lt,Ig),w($n,Lt,null),e(Lt,Sg),w(Pn,Lt,null),g(o,hc,_),g(o,xo,_),e(xo,Mn),e(Mn,$l),w(La,$l,null),e(xo,Wg),e(xo,Pl),e(Pl,Ug),g(o,uc,_),g(o,et,_),w(Oa,et,null),e(et,Bg),e(et,Ml),e(Ml,Rg),e(et,Kg),e(et,Ha),e(Ha,Vg),e(Ha,ti),e(ti,Jg),e(Ha,Xg),e(et,Yg),e(et,Na),e(Na,Qg),e(Na,Aa),e(Aa,Zg),e(Na,e_),e(et,t_),w(Gn,et,null),e(et,o_),e(et,Ot),w(Ia,Ot,null),e(Ot,n_),e(Ot,jo),e(jo,s_),e(jo,oi),e(oi,a_),e(jo,r_),e(jo,Gl),e(Gl,i_),e(jo,l_),e(Ot,d_),w(xn,Ot,null),e(Ot,c_),w(jn,Ot,null),g(o,mc,_),g(o,Fo,_),e(Fo,Fn),e(Fn,xl),w(Sa,xl,null),e(Fo,p_),e(Fo,jl),e(jl,h_),g(o,fc,_),g(o,tt,_),w(Wa,tt,null),e(tt,u_),e(tt,Fl),e(Fl,m_),e(tt,f_),e(tt,Ua),e(Ua,g_),e(Ua,ni),e(ni,__),e(Ua,T_),e(tt,v_),e(tt,Ba),e(Ba,b_),e(Ba,Ra),e(Ra,y_),e(Ba,k_),e(tt,w_),w(En,tt,null),e(tt,$_),e(tt,Ht),w(Ka,Ht,null),e(Ht,P_),e(Ht,Eo),e(Eo,M_),e(Eo,si),e(si,G_),e(Eo,x_),e(Eo,El),e(El,j_),e(Eo,F_),e(Ht,E_),w(zn,Ht,null),e(Ht,z_),w(qn,Ht,null),g(o,gc,_),g(o,zo,_),e(zo,Cn),e(Cn,zl),w(Va,zl,null),e(zo,q_),e(zo,ql),e(ql,C_),g(o,_c,_),g(o,be,_),w(Ja,be,null),e(be,D_),e(be,Cl),e(Cl,L_),e(be,O_),e(be,ai),e(ai,ri),e(ri,H_),e(ai,N_),e(be,A_),e(be,jt),e(jt,I_),e(jt,Dl),e(Dl,S_),e(jt,W_),e(jt,Ll),e(Ll,U_),e(jt,B_),e(jt,Ol),e(Ol,R_),e(jt,K_),e(jt,Hl),e(Hl,V_),e(jt,J_),e(be,X_),e(be,Xa),e(Xa,Y_),e(Xa,ii),e(ii,Q_),e(Xa,Z_),e(be,e2),e(be,Ya),e(Ya,t2),e(Ya,Qa),e(Qa,o2),e(Ya,n2),e(be,s2),w(Dn,be,null),e(be,a2),e(be,vt),w(Za,vt,null),e(vt,r2),e(vt,qo),e(qo,i2),e(qo,li),e(li,l2),e(qo,d2),e(qo,Nl),e(Nl,c2),e(qo,p2),e(vt,h2),w(Ln,vt,null),e(vt,u2),w(On,vt,null),e(vt,m2),w(Hn,vt,null),g(o,Tc,_),g(o,Co,_),e(Co,Nn),e(Nn,Al),w(er,Al,null),e(Co,f2),e(Co,Il),e(Il,g2),g(o,vc,_),g(o,Do,_),w(tr,Do,null),e(Do,_2),e(Do,Sl),e(Sl,T2),g(o,bc,_),g(o,Lo,_),e(Lo,An),e(An,Wl),w(or,Wl,null),e(Lo,v2),e(Lo,Ul),e(Ul,b2),g(o,yc,_),g(o,Re,_),w(nr,Re,null),e(Re,y2),e(Re,Bl),e(Bl,k2),e(Re,w2),e(Re,sr),e(sr,$2),e(sr,di),e(di,P2),e(sr,M2),e(Re,G2),e(Re,ar),e(ar,x2),e(ar,rr),e(rr,j2),e(ar,F2),e(Re,E2),e(Re,Rl),e(Rl,z2),e(Re,q2),e(Re,Bt),e(Bt,Kl),e(Kl,ir),e(ir,C2),e(Bt,D2),e(Bt,Vl),e(Vl,lr),e(lr,L2),e(Bt,O2),e(Bt,Jl),e(Jl,dr),e(dr,H2),e(Bt,N2),e(Bt,Xl),e(Xl,cr),e(cr,A2),e(Re,I2),e(Re,Nt),w(pr,Nt,null),e(Nt,S2),e(Nt,Oo),e(Oo,W2),e(Oo,Yl),e(Yl,U2),e(Oo,B2),e(Oo,Ql),e(Ql,R2),e(Oo,K2),e(Nt,V2),w(In,Nt,null),e(Nt,J2),w(Sn,Nt,null),g(o,kc,_),g(o,Ho,_),e(Ho,Wn),e(Wn,Zl),w(hr,Zl,null),e(Ho,X2),e(Ho,ed),e(ed,Y2),g(o,wc,_),g(o,Ke,_),w(ur,Ke,null),e(Ke,Q2),e(Ke,td),e(td,Z2),e(Ke,eT),e(Ke,mr),e(mr,tT),e(mr,ci),e(ci,oT),e(mr,nT),e(Ke,sT),e(Ke,fr),e(fr,aT),e(fr,gr),e(gr,rT),e(fr,iT),e(Ke,lT),e(Ke,od),e(od,dT),e(Ke,cT),e(Ke,Rt),e(Rt,nd),e(nd,_r),e(_r,pT),e(Rt,hT),e(Rt,sd),e(sd,Tr),e(Tr,uT),e(Rt,mT),e(Rt,ad),e(ad,vr),e(vr,fT),e(Rt,gT),e(Rt,rd),e(rd,br),e(br,_T),e(Ke,TT),e(Ke,At),w(yr,At,null),e(At,vT),e(At,No),e(No,bT),e(No,id),e(id,yT),e(No,kT),e(No,ld),e(ld,wT),e(No,$T),e(At,PT),w(Un,At,null),e(At,MT),w(Bn,At,null),$c=!0},p(o,[_]){const kr={};_&2&&(kr.$$scope={dirty:_,ctx:o}),Uo.$set(kr);const dd={};_&2&&(dd.$$scope={dirty:_,ctx:o}),Ro.$set(dd);const cd={};_&2&&(cd.$$scope={dirty:_,ctx:o}),Ko.$set(cd);const pd={};_&2&&(pd.$$scope={dirty:_,ctx:o}),Jo.$set(pd);const wr={};_&2&&(wr.$$scope={dirty:_,ctx:o}),Xo.$set(wr);const hd={};_&2&&(hd.$$scope={dirty:_,ctx:o}),Zo.$set(hd);const ud={};_&2&&(ud.$$scope={dirty:_,ctx:o}),en.$set(ud);const md={};_&2&&(md.$$scope={dirty:_,ctx:o}),tn.$set(md);const $r={};_&2&&($r.$$scope={dirty:_,ctx:o}),on.$set($r);const fd={};_&2&&(fd.$$scope={dirty:_,ctx:o}),sn.$set(fd);const gd={};_&2&&(gd.$$scope={dirty:_,ctx:o}),an.$set(gd);const _d={};_&2&&(_d.$$scope={dirty:_,ctx:o}),rn.$set(_d);const Td={};_&2&&(Td.$$scope={dirty:_,ctx:o}),ln.$set(Td);const vd={};_&2&&(vd.$$scope={dirty:_,ctx:o}),cn.$set(vd);const Kt={};_&2&&(Kt.$$scope={dirty:_,ctx:o}),pn.$set(Kt);const bd={};_&2&&(bd.$$scope={dirty:_,ctx:o}),un.$set(bd);const Pr={};_&2&&(Pr.$$scope={dirty:_,ctx:o}),mn.$set(Pr);const yd={};_&2&&(yd.$$scope={dirty:_,ctx:o}),fn.$set(yd);const ye={};_&2&&(ye.$$scope={dirty:_,ctx:o}),gn.$set(ye);const kd={};_&2&&(kd.$$scope={dirty:_,ctx:o}),_n.$set(kd);const wd={};_&2&&(wd.$$scope={dirty:_,ctx:o}),vn.$set(wd);const $d={};_&2&&($d.$$scope={dirty:_,ctx:o}),bn.$set($d);const Pd={};_&2&&(Pd.$$scope={dirty:_,ctx:o}),yn.$set(Pd);const Md={};_&2&&(Md.$$scope={dirty:_,ctx:o}),wn.$set(Md);const Gd={};_&2&&(Gd.$$scope={dirty:_,ctx:o}),$n.$set(Gd);const xd={};_&2&&(xd.$$scope={dirty:_,ctx:o}),Pn.$set(xd);const jd={};_&2&&(jd.$$scope={dirty:_,ctx:o}),Gn.$set(jd);const Vt={};_&2&&(Vt.$$scope={dirty:_,ctx:o}),xn.$set(Vt);const Fd={};_&2&&(Fd.$$scope={dirty:_,ctx:o}),jn.$set(Fd);const Ed={};_&2&&(Ed.$$scope={dirty:_,ctx:o}),En.$set(Ed);const zd={};_&2&&(zd.$$scope={dirty:_,ctx:o}),zn.$set(zd);const Rn={};_&2&&(Rn.$$scope={dirty:_,ctx:o}),qn.$set(Rn);const qd={};_&2&&(qd.$$scope={dirty:_,ctx:o}),Dn.$set(qd);const Cd={};_&2&&(Cd.$$scope={dirty:_,ctx:o}),Ln.$set(Cd);const Ao={};_&2&&(Ao.$$scope={dirty:_,ctx:o}),On.$set(Ao);const Dd={};_&2&&(Dd.$$scope={dirty:_,ctx:o}),Hn.$set(Dd);const Ld={};_&2&&(Ld.$$scope={dirty:_,ctx:o}),In.$set(Ld);const Mr={};_&2&&(Mr.$$scope={dirty:_,ctx:o}),Sn.$set(Mr);const Od={};_&2&&(Od.$$scope={dirty:_,ctx:o}),Un.$set(Od);const Hd={};_&2&&(Hd.$$scope={dirty:_,ctx:o}),Bn.$set(Hd)},i(o){$c||($(l.$$.fragment,o),$(x.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(Cs.$$.fragment,o),$(Ds.$$.fragment,o),$(Uo.$$.fragment,o),$(Os.$$.fragment,o),$(Hs.$$.fragment,o),$(Ro.$$.fragment,o),$(Ko.$$.fragment,o),$(Is.$$.fragment,o),$(Ss.$$.fragment,o),$(Ws.$$.fragment,o),$(Jo.$$.fragment,o),$(Xo.$$.fragment,o),$(Ks.$$.fragment,o),$(Vs.$$.fragment,o),$(Js.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(ta.$$.fragment,o),$(Zo.$$.fragment,o),$(en.$$.fragment,o),$(oa.$$.fragment,o),$(tn.$$.fragment,o),$(na.$$.fragment,o),$(on.$$.fragment,o),$(sa.$$.fragment,o),$(aa.$$.fragment,o),$(da.$$.fragment,o),$(sn.$$.fragment,o),$(an.$$.fragment,o),$(ca.$$.fragment,o),$(rn.$$.fragment,o),$(pa.$$.fragment,o),$(ln.$$.fragment,o),$(ha.$$.fragment,o),$(ua.$$.fragment,o),$(_a.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(Ta.$$.fragment,o),$(va.$$.fragment,o),$(wa.$$.fragment,o),$(un.$$.fragment,o),$(mn.$$.fragment,o),$(fn.$$.fragment,o),$(gn.$$.fragment,o),$(_n.$$.fragment,o),$($a.$$.fragment,o),$(Pa.$$.fragment,o),$(ja.$$.fragment,o),$(vn.$$.fragment,o),$(bn.$$.fragment,o),$(yn.$$.fragment,o),$(Fa.$$.fragment,o),$(Ea.$$.fragment,o),$(wn.$$.fragment,o),$(Da.$$.fragment,o),$($n.$$.fragment,o),$(Pn.$$.fragment,o),$(La.$$.fragment,o),$(Oa.$$.fragment,o),$(Gn.$$.fragment,o),$(Ia.$$.fragment,o),$(xn.$$.fragment,o),$(jn.$$.fragment,o),$(Sa.$$.fragment,o),$(Wa.$$.fragment,o),$(En.$$.fragment,o),$(Ka.$$.fragment,o),$(zn.$$.fragment,o),$(qn.$$.fragment,o),$(Va.$$.fragment,o),$(Ja.$$.fragment,o),$(Dn.$$.fragment,o),$(Za.$$.fragment,o),$(Ln.$$.fragment,o),$(On.$$.fragment,o),$(Hn.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),$(nr.$$.fragment,o),$(pr.$$.fragment,o),$(In.$$.fragment,o),$(Sn.$$.fragment,o),$(hr.$$.fragment,o),$(ur.$$.fragment,o),$(yr.$$.fragment,o),$(Un.$$.fragment,o),$(Bn.$$.fragment,o),$c=!0)},o(o){P(l.$$.fragment,o),P(x.$$.fragment,o),P(cs.$$.fragment,o),P(ps.$$.fragment,o),P(Cs.$$.fragment,o),P(Ds.$$.fragment,o),P(Uo.$$.fragment,o),P(Os.$$.fragment,o),P(Hs.$$.fragment,o),P(Ro.$$.fragment,o),P(Ko.$$.fragment,o),P(Is.$$.fragment,o),P(Ss.$$.fragment,o),P(Ws.$$.fragment,o),P(Jo.$$.fragment,o),P(Xo.$$.fragment,o),P(Ks.$$.fragment,o),P(Vs.$$.fragment,o),P(Js.$$.fragment,o),P(Xs.$$.fragment,o),P(Ys.$$.fragment,o),P(ta.$$.fragment,o),P(Zo.$$.fragment,o),P(en.$$.fragment,o),P(oa.$$.fragment,o),P(tn.$$.fragment,o),P(na.$$.fragment,o),P(on.$$.fragment,o),P(sa.$$.fragment,o),P(aa.$$.fragment,o),P(da.$$.fragment,o),P(sn.$$.fragment,o),P(an.$$.fragment,o),P(ca.$$.fragment,o),P(rn.$$.fragment,o),P(pa.$$.fragment,o),P(ln.$$.fragment,o),P(ha.$$.fragment,o),P(ua.$$.fragment,o),P(_a.$$.fragment,o),P(cn.$$.fragment,o),P(pn.$$.fragment,o),P(Ta.$$.fragment,o),P(va.$$.fragment,o),P(wa.$$.fragment,o),P(un.$$.fragment,o),P(mn.$$.fragment,o),P(fn.$$.fragment,o),P(gn.$$.fragment,o),P(_n.$$.fragment,o),P($a.$$.fragment,o),P(Pa.$$.fragment,o),P(ja.$$.fragment,o),P(vn.$$.fragment,o),P(bn.$$.fragment,o),P(yn.$$.fragment,o),P(Fa.$$.fragment,o),P(Ea.$$.fragment,o),P(wn.$$.fragment,o),P(Da.$$.fragment,o),P($n.$$.fragment,o),P(Pn.$$.fragment,o),P(La.$$.fragment,o),P(Oa.$$.fragment,o),P(Gn.$$.fragment,o),P(Ia.$$.fragment,o),P(xn.$$.fragment,o),P(jn.$$.fragment,o),P(Sa.$$.fragment,o),P(Wa.$$.fragment,o),P(En.$$.fragment,o),P(Ka.$$.fragment,o),P(zn.$$.fragment,o),P(qn.$$.fragment,o),P(Va.$$.fragment,o),P(Ja.$$.fragment,o),P(Dn.$$.fragment,o),P(Za.$$.fragment,o),P(Ln.$$.fragment,o),P(On.$$.fragment,o),P(Hn.$$.fragment,o),P(er.$$.fragment,o),P(tr.$$.fragment,o),P(or.$$.fragment,o),P(nr.$$.fragment,o),P(pr.$$.fragment,o),P(In.$$.fragment,o),P(Sn.$$.fragment,o),P(hr.$$.fragment,o),P(ur.$$.fragment,o),P(yr.$$.fragment,o),P(Un.$$.fragment,o),P(Bn.$$.fragment,o),$c=!1},d(o){t(d),o&&t(T),o&&t(u),M(l),o&&t(K),o&&t(H),M(x),o&&t(ke),o&&t(S),o&&t(we),o&&t(B),o&&t($e),o&&t(R),o&&t(le),o&&t(z),o&&t(Pe),o&&t(N),o&&t(Nd),o&&t(ro),o&&t(Ad),o&&t(Jt),o&&t(Id),o&&t(io),M(cs),o&&t(Sd),o&&t(jr),o&&t(Wd),M(ps,o),o&&t(Ud),o&&t(se),o&&t(Bd),o&&t(lo),M(Cs),o&&t(Rd),o&&t(Gt),M(Ds),M(Uo),o&&t(Kd),o&&t(po),M(Os),o&&t(Vd),o&&t(ve),M(Hs),M(Ro),M(Ko),M(Is),o&&t(Jd),o&&t(ho),M(Ss),o&&t(Xd),o&&t(Se),M(Ws),M(Jo),M(Xo),o&&t(Yd),o&&t(uo),M(Ks),o&&t(Qd),o&&t(mo),M(Vs),o&&t(Zd),o&&t(fo),M(Js),o&&t(ec),o&&t(go),M(Xs),o&&t(tc),o&&t(We),M(Ys),M(ta),M(Zo),M(en),M(oa),M(tn),M(na),M(on),o&&t(oc),o&&t(To),M(sa),o&&t(nc),o&&t(Ue),M(aa),M(da),M(sn),M(an),M(ca),M(rn),M(pa),M(ln),o&&t(sc),o&&t(bo),M(ha),o&&t(ac),o&&t(gt),M(ua),M(_a),M(cn),M(pn),o&&t(rc),o&&t(ko),M(Ta),o&&t(ic),o&&t(Be),M(va),M(wa),M(un),M(mn),M(fn),M(gn),M(_n),o&&t(lc),o&&t($o),M($a),o&&t(dc),o&&t(_t),M(Pa),M(ja),M(vn),M(bn),M(yn),o&&t(cc),o&&t(Mo),M(Fa),o&&t(pc),o&&t(Ze),M(Ea),M(wn),M(Da),M($n),M(Pn),o&&t(hc),o&&t(xo),M(La),o&&t(uc),o&&t(et),M(Oa),M(Gn),M(Ia),M(xn),M(jn),o&&t(mc),o&&t(Fo),M(Sa),o&&t(fc),o&&t(tt),M(Wa),M(En),M(Ka),M(zn),M(qn),o&&t(gc),o&&t(zo),M(Va),o&&t(_c),o&&t(be),M(Ja),M(Dn),M(Za),M(Ln),M(On),M(Hn),o&&t(Tc),o&&t(Co),M(er),o&&t(vc),o&&t(Do),M(tr),o&&t(bc),o&&t(Lo),M(or),o&&t(yc),o&&t(Re),M(nr),M(pr),M(In),M(Sn),o&&t(kc),o&&t(Ho),M(hr),o&&t(wc),o&&t(Ke),M(ur),M(yr),M(Un),M(Bn)}}}const Dk={local:"openai-gpt2",sections:[{local:"overview",title:"Overview"},{local:"resources",title:"Resources"},{local:"transformers.GPT2Config",title:"GPT2Config"},{local:"transformers.GPT2Tokenizer",title:"GPT2Tokenizer"},{local:"transformers.GPT2TokenizerFast",title:"GPT2TokenizerFast"},{local:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",title:"GPT2 specific outputs"},{local:"transformers.GPT2Model",title:"GPT2Model"},{local:"transformers.GPT2LMHeadModel",title:"GPT2LMHeadModel"},{local:"transformers.GPT2DoubleHeadsModel",title:"GPT2DoubleHeadsModel"},{local:"transformers.GPT2ForSequenceClassification",title:"GPT2ForSequenceClassification"},{local:"transformers.GPT2ForTokenClassification",title:"GPT2ForTokenClassification"},{local:"transformers.TFGPT2Model",title:"TFGPT2Model"},{local:"transformers.TFGPT2LMHeadModel",title:"TFGPT2LMHeadModel"},{local:"transformers.TFGPT2DoubleHeadsModel",title:"TFGPT2DoubleHeadsModel"},{local:"transformers.TFGPT2ForSequenceClassification",title:"TFGPT2ForSequenceClassification"},{local:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",title:"TFSequenceClassifierOutputWithPast"},{local:"transformers.FlaxGPT2Model",title:"FlaxGPT2Model"},{local:"transformers.FlaxGPT2LMHeadModel",title:"FlaxGPT2LMHeadModel"}],title:"OpenAI GPT2"};function Lk(G){return Ry(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Uk extends Sy{constructor(d){super();Wy(this,d,Lk,Ck,Uy,{})}}export{Uk as default,Dk as metadata};
