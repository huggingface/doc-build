import{S as Tv,i as vv,s as bv,e as s,k as p,w as y,t as r,M as yv,c as a,d as t,m as h,a as l,x as k,h as i,b as f,G as e,g as _,y as w,q as $,o as P,B as M,v as kv,L as ae}from"../../chunks/vendor-hf-doc-builder.js";import{T as He}from"../../chunks/Tip-hf-doc-builder.js";import{D as L}from"../../chunks/Docstring-hf-doc-builder.js";import{C as re}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as se}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function wv(G){let d,T,u,c,g;return c=new re({props:{code:`from transformers import GPT2Model, GPT2Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),T=r("Example:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Example:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function $v(G){let d,T,u,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=s("p"),T=r("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function Pv(G){let d,T,u,c,g;return{c(){d=s("p"),T=r("When used with "),u=s("code"),c=r("is_split_into_words=True"),g=r(", this tokenizer will add a space before each word (even the first one).")},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"When used with "),u=a(m,"CODE",{});var F=l(u);c=i(F,"is_split_into_words=True"),F.forEach(t),g=i(m,", this tokenizer will add a space before each word (even the first one)."),m.forEach(t)},m(n,m){_(n,d,m),e(d,T),e(d,u),e(u,c),e(d,g)},d(n){n&&t(d)}}}function Mv(G){let d,T,u,c,g;return c=new re({props:{code:`from transformers import GPT2TokenizerFast
tokenizer = GPT2TokenizerFast.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2TokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPT2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=s("p"),T=r("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function Gv(G){let d,T,u,c,g,n,m,F;return{c(){d=s("p"),T=r("When used with "),u=s("code"),c=r("is_split_into_words=True"),g=r(", this tokenizer needs to be instantiated with "),n=s("code"),m=r("add_prefix_space=True"),F=r(".")},l(Q){d=a(Q,"P",{});var C=l(d);T=i(C,"When used with "),u=a(C,"CODE",{});var j=l(u);c=i(j,"is_split_into_words=True"),j.forEach(t),g=i(C,", this tokenizer needs to be instantiated with "),n=a(C,"CODE",{});var B=l(n);m=i(B,"add_prefix_space=True"),B.forEach(t),F=i(C,"."),C.forEach(t)},m(Q,C){_(Q,d,C),e(d,T),e(d,u),e(u,c),e(d,g),e(d,n),e(n,m),e(d,F)},d(Q){Q&&t(d)}}}function xv(G){let d,T,u,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var F=l(u);c=i(F,"Module"),F.forEach(t),g=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(n,m){_(n,d,m),e(d,T),e(d,u),e(u,c),e(d,g)},d(n){n&&t(d)}}}function Fv(G){let d,T,u,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, GPT2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),T=r("Example:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Example:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function jv(G){let d,T,u,c,g;return c=new re({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:
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
model.parallelize(device_map)`}}),{c(){d=s("p"),T=r("Example:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Example:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function zv(G){let d,T,u,c,g;return c=new re({props:{code:`# On a 4 GPU machine with gpt2-large:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){d=s("p"),T=r("Example:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Example:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function Ev(G){let d,T,u,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var F=l(u);c=i(F,"Module"),F.forEach(t),g=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(n,m){_(n,d,m),e(d,T),e(d,u),e(u,c),e(d,g)},d(n){n&&t(d)}}}function qv(G){let d,T,u,c,g;return c=new re({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),T=r("Example:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Example:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function Cv(G){let d,T,u,c,g;return c=new re({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:
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
model.parallelize(device_map)`}}),{c(){d=s("p"),T=r("Example:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Example:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function Dv(G){let d,T,u,c,g;return c=new re({props:{code:`# On a 4 GPU machine with gpt2-large:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){d=s("p"),T=r("Example:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Example:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function Lv(G){let d,T,u,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var F=l(u);c=i(F,"Module"),F.forEach(t),g=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(n,m){_(n,d,m),e(d,T),e(d,u),e(u,c),e(d,g)},d(n){n&&t(d)}}}function Ov(G){let d,T,u,c,g;return c=new re({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),{c(){d=s("p"),T=r("Example:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Example:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function Nv(G){let d,T,u,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var F=l(u);c=i(F,"Module"),F.forEach(t),g=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(n,m){_(n,d,m),e(d,T),e(d,u),e(u,c),e(d,g)},d(n){n&&t(d)}}}function Hv(G){let d,T,u,c,g;return c=new re({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=s("p"),T=r("Example of single-label classification:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Example of single-label classification:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function Iv(G){let d,T;return d=new re({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = GPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">5.28</span>`}}),{c(){y(d.$$.fragment)},l(u){k(d.$$.fragment,u)},m(u,c){w(d,u,c),T=!0},p:ae,i(u){T||($(d.$$.fragment,u),T=!0)},o(u){P(d.$$.fragment,u),T=!1},d(u){M(d,u)}}}function Sv(G){let d,T,u,c,g;return c=new re({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=s("p"),T=r("Example of multi-label classification:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Example of multi-label classification:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function Av(G){let d,T;return d=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(u){k(d.$$.fragment,u)},m(u,c){w(d,u,c),T=!0},p:ae,i(u){T||($(d.$$.fragment,u),T=!0)},o(u){P(d.$$.fragment,u),T=!1},d(u){M(d,u)}}}function Wv(G){let d,T,u,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var F=l(u);c=i(F,"Module"),F.forEach(t),g=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(n,m){_(n,d,m),e(d,T),e(d,u),e(u,c),e(d,g)},d(n){n&&t(d)}}}function Uv(G){let d,T,u,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, GPT2ForTokenClassification
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
[<span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Position&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>]`}}),{c(){d=s("p"),T=r("Example:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Example:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function Rv(G){let d,T;return d=new re({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.25</span>`}}),{c(){y(d.$$.fragment)},l(u){k(d.$$.fragment,u)},m(u,c){w(d,u,c),T=!0},p:ae,i(u){T||($(d.$$.fragment,u),T=!0)},o(u){P(d.$$.fragment,u),T=!1},d(u){M(d,u)}}}function Bv(G){let d,T,u,c,g,n,m,F,Q,C,j,B,I,Z,_e,S,Te,me,W,O,ee,te,z,q,ie,V,fe,le,A,ve,ge,E,be,U,R,de,K,ye,oe,N,ce,J,ke;return{c(){d=s("p"),T=r("TF 2.0 models accepts two formats as inputs:"),u=p(),c=s("ul"),g=s("li"),n=r("having all inputs as keyword arguments (like PyTorch models), or"),m=p(),F=s("li"),Q=r("having all inputs as a list, tuple or dict in the first positional arguments."),C=p(),j=s("p"),B=r("This second option is useful when using "),I=s("code"),Z=r("tf.keras.Model.fit"),_e=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),Te=r("model(inputs)"),me=r("."),W=p(),O=s("p"),ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=p(),z=s("ul"),q=s("li"),ie=r("a single Tensor with "),V=s("code"),fe=r("input_ids"),le=r(" only and nothing else: "),A=s("code"),ve=r("model(inputs_ids)"),ge=p(),E=s("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s("code"),R=r("model([input_ids, attention_mask])"),de=r(" or "),K=s("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),oe=p(),N=s("li"),ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),ke=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){d=a(b,"P",{});var x=l(d);T=i(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),u=h(b),c=a(b,"UL",{});var ne=l(c);g=a(ne,"LI",{});var Ee=l(g);n=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=h(ne),F=a(ne,"LI",{});var Ae=l(F);Q=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),ne.forEach(t),C=h(b),j=a(b,"P",{});var H=l(j);B=i(H,"This second option is useful when using "),I=a(H,"CODE",{});var qe=l(I);Z=i(qe,"tf.keras.Model.fit"),qe.forEach(t),_e=i(H,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(H,"CODE",{});var We=l(S);Te=i(We,"model(inputs)"),We.forEach(t),me=i(H,"."),H.forEach(t),W=h(b),O=a(b,"P",{});var Ue=l(O);ee=i(Ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ue.forEach(t),te=h(b),z=a(b,"UL",{});var D=l(z);q=a(D,"LI",{});var X=l(q);ie=i(X,"a single Tensor with "),V=a(X,"CODE",{});var Re=l(V);fe=i(Re,"input_ids"),Re.forEach(t),le=i(X," only and nothing else: "),A=a(X,"CODE",{});var Ce=l(A);ve=i(Ce,"model(inputs_ids)"),Ce.forEach(t),X.forEach(t),ge=h(D),E=a(D,"LI",{});var Y=l(E);be=i(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(Y,"CODE",{});var Be=l(U);R=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),de=i(Y," or "),K=a(Y,"CODE",{});var De=l(K);ye=i(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),oe=h(D),N=a(D,"LI",{});var we=l(N);ce=i(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(we,"CODE",{});var Ve=l(J);ke=i(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),we.forEach(t),D.forEach(t)},m(b,x){_(b,d,x),e(d,T),_(b,u,x),_(b,c,x),e(c,g),e(g,n),e(c,m),e(c,F),e(F,Q),_(b,C,x),_(b,j,x),e(j,B),e(j,I),e(I,Z),e(j,_e),e(j,S),e(S,Te),e(j,me),_(b,W,x),_(b,O,x),e(O,ee),_(b,te,x),_(b,z,x),e(z,q),e(q,ie),e(q,V),e(V,fe),e(q,le),e(q,A),e(A,ve),e(z,ge),e(z,E),e(E,be),e(E,U),e(U,R),e(E,de),e(E,K),e(K,ye),e(z,oe),e(z,N),e(N,ce),e(N,J),e(J,ke)},d(b){b&&t(d),b&&t(u),b&&t(c),b&&t(C),b&&t(j),b&&t(W),b&&t(O),b&&t(te),b&&t(z)}}}function Vv(G){let d,T,u,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var F=l(u);c=i(F,"Module"),F.forEach(t),g=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(n,m){_(n,d,m),e(d,T),e(d,u),e(u,c),e(d,g)},d(n){n&&t(d)}}}function Kv(G){let d,T,u,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, TFGPT2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),T=r("Example:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Example:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function Jv(G){let d,T,u,c,g,n,m,F,Q,C,j,B,I,Z,_e,S,Te,me,W,O,ee,te,z,q,ie,V,fe,le,A,ve,ge,E,be,U,R,de,K,ye,oe,N,ce,J,ke;return{c(){d=s("p"),T=r("TF 2.0 models accepts two formats as inputs:"),u=p(),c=s("ul"),g=s("li"),n=r("having all inputs as keyword arguments (like PyTorch models), or"),m=p(),F=s("li"),Q=r("having all inputs as a list, tuple or dict in the first positional arguments."),C=p(),j=s("p"),B=r("This second option is useful when using "),I=s("code"),Z=r("tf.keras.Model.fit"),_e=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),Te=r("model(inputs)"),me=r("."),W=p(),O=s("p"),ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=p(),z=s("ul"),q=s("li"),ie=r("a single Tensor with "),V=s("code"),fe=r("input_ids"),le=r(" only and nothing else: "),A=s("code"),ve=r("model(inputs_ids)"),ge=p(),E=s("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s("code"),R=r("model([input_ids, attention_mask])"),de=r(" or "),K=s("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),oe=p(),N=s("li"),ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),ke=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){d=a(b,"P",{});var x=l(d);T=i(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),u=h(b),c=a(b,"UL",{});var ne=l(c);g=a(ne,"LI",{});var Ee=l(g);n=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=h(ne),F=a(ne,"LI",{});var Ae=l(F);Q=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),ne.forEach(t),C=h(b),j=a(b,"P",{});var H=l(j);B=i(H,"This second option is useful when using "),I=a(H,"CODE",{});var qe=l(I);Z=i(qe,"tf.keras.Model.fit"),qe.forEach(t),_e=i(H,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(H,"CODE",{});var We=l(S);Te=i(We,"model(inputs)"),We.forEach(t),me=i(H,"."),H.forEach(t),W=h(b),O=a(b,"P",{});var Ue=l(O);ee=i(Ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ue.forEach(t),te=h(b),z=a(b,"UL",{});var D=l(z);q=a(D,"LI",{});var X=l(q);ie=i(X,"a single Tensor with "),V=a(X,"CODE",{});var Re=l(V);fe=i(Re,"input_ids"),Re.forEach(t),le=i(X," only and nothing else: "),A=a(X,"CODE",{});var Ce=l(A);ve=i(Ce,"model(inputs_ids)"),Ce.forEach(t),X.forEach(t),ge=h(D),E=a(D,"LI",{});var Y=l(E);be=i(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(Y,"CODE",{});var Be=l(U);R=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),de=i(Y," or "),K=a(Y,"CODE",{});var De=l(K);ye=i(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),oe=h(D),N=a(D,"LI",{});var we=l(N);ce=i(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(we,"CODE",{});var Ve=l(J);ke=i(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),we.forEach(t),D.forEach(t)},m(b,x){_(b,d,x),e(d,T),_(b,u,x),_(b,c,x),e(c,g),e(g,n),e(c,m),e(c,F),e(F,Q),_(b,C,x),_(b,j,x),e(j,B),e(j,I),e(I,Z),e(j,_e),e(j,S),e(S,Te),e(j,me),_(b,W,x),_(b,O,x),e(O,ee),_(b,te,x),_(b,z,x),e(z,q),e(q,ie),e(q,V),e(V,fe),e(q,le),e(q,A),e(A,ve),e(z,ge),e(z,E),e(E,be),e(E,U),e(U,R),e(E,de),e(E,K),e(K,ye),e(z,oe),e(z,N),e(N,ce),e(N,J),e(J,ke)},d(b){b&&t(d),b&&t(u),b&&t(c),b&&t(C),b&&t(j),b&&t(W),b&&t(O),b&&t(te),b&&t(z)}}}function Xv(G){let d,T,u,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var F=l(u);c=i(F,"Module"),F.forEach(t),g=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(n,m){_(n,d,m),e(d,T),e(d,u),e(u,c),e(d,g)},d(n){n&&t(d)}}}function Yv(G){let d,T,u,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, TFGPT2LMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),T=r("Example:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Example:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function Qv(G){let d,T,u,c,g,n,m,F,Q,C,j,B,I,Z,_e,S,Te,me,W,O,ee,te,z,q,ie,V,fe,le,A,ve,ge,E,be,U,R,de,K,ye,oe,N,ce,J,ke;return{c(){d=s("p"),T=r("TF 2.0 models accepts two formats as inputs:"),u=p(),c=s("ul"),g=s("li"),n=r("having all inputs as keyword arguments (like PyTorch models), or"),m=p(),F=s("li"),Q=r("having all inputs as a list, tuple or dict in the first positional arguments."),C=p(),j=s("p"),B=r("This second option is useful when using "),I=s("code"),Z=r("tf.keras.Model.fit"),_e=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),Te=r("model(inputs)"),me=r("."),W=p(),O=s("p"),ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=p(),z=s("ul"),q=s("li"),ie=r("a single Tensor with "),V=s("code"),fe=r("input_ids"),le=r(" only and nothing else: "),A=s("code"),ve=r("model(inputs_ids)"),ge=p(),E=s("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s("code"),R=r("model([input_ids, attention_mask])"),de=r(" or "),K=s("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),oe=p(),N=s("li"),ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),ke=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){d=a(b,"P",{});var x=l(d);T=i(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),u=h(b),c=a(b,"UL",{});var ne=l(c);g=a(ne,"LI",{});var Ee=l(g);n=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=h(ne),F=a(ne,"LI",{});var Ae=l(F);Q=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),ne.forEach(t),C=h(b),j=a(b,"P",{});var H=l(j);B=i(H,"This second option is useful when using "),I=a(H,"CODE",{});var qe=l(I);Z=i(qe,"tf.keras.Model.fit"),qe.forEach(t),_e=i(H,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(H,"CODE",{});var We=l(S);Te=i(We,"model(inputs)"),We.forEach(t),me=i(H,"."),H.forEach(t),W=h(b),O=a(b,"P",{});var Ue=l(O);ee=i(Ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ue.forEach(t),te=h(b),z=a(b,"UL",{});var D=l(z);q=a(D,"LI",{});var X=l(q);ie=i(X,"a single Tensor with "),V=a(X,"CODE",{});var Re=l(V);fe=i(Re,"input_ids"),Re.forEach(t),le=i(X," only and nothing else: "),A=a(X,"CODE",{});var Ce=l(A);ve=i(Ce,"model(inputs_ids)"),Ce.forEach(t),X.forEach(t),ge=h(D),E=a(D,"LI",{});var Y=l(E);be=i(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(Y,"CODE",{});var Be=l(U);R=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),de=i(Y," or "),K=a(Y,"CODE",{});var De=l(K);ye=i(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),oe=h(D),N=a(D,"LI",{});var we=l(N);ce=i(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(we,"CODE",{});var Ve=l(J);ke=i(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),we.forEach(t),D.forEach(t)},m(b,x){_(b,d,x),e(d,T),_(b,u,x),_(b,c,x),e(c,g),e(g,n),e(c,m),e(c,F),e(F,Q),_(b,C,x),_(b,j,x),e(j,B),e(j,I),e(I,Z),e(j,_e),e(j,S),e(S,Te),e(j,me),_(b,W,x),_(b,O,x),e(O,ee),_(b,te,x),_(b,z,x),e(z,q),e(q,ie),e(q,V),e(V,fe),e(q,le),e(q,A),e(A,ve),e(z,ge),e(z,E),e(E,be),e(E,U),e(U,R),e(E,de),e(E,K),e(K,ye),e(z,oe),e(z,N),e(N,ce),e(N,J),e(J,ke)},d(b){b&&t(d),b&&t(u),b&&t(c),b&&t(C),b&&t(j),b&&t(W),b&&t(O),b&&t(te),b&&t(z)}}}function Zv(G){let d,T,u,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var F=l(u);c=i(F,"Module"),F.forEach(t),g=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(n,m){_(n,d,m),e(d,T),e(d,u),e(u,c),e(d,g)},d(n){n&&t(d)}}}function eb(G){let d,T,u,c,g;return c=new re({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=s("p"),T=r("Examples:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Examples:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function tb(G){let d,T,u,c,g,n,m,F,Q,C,j,B,I,Z,_e,S,Te,me,W,O,ee,te,z,q,ie,V,fe,le,A,ve,ge,E,be,U,R,de,K,ye,oe,N,ce,J,ke;return{c(){d=s("p"),T=r("TF 2.0 models accepts two formats as inputs:"),u=p(),c=s("ul"),g=s("li"),n=r("having all inputs as keyword arguments (like PyTorch models), or"),m=p(),F=s("li"),Q=r("having all inputs as a list, tuple or dict in the first positional arguments."),C=p(),j=s("p"),B=r("This second option is useful when using "),I=s("code"),Z=r("tf.keras.Model.fit"),_e=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),Te=r("model(inputs)"),me=r("."),W=p(),O=s("p"),ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=p(),z=s("ul"),q=s("li"),ie=r("a single Tensor with "),V=s("code"),fe=r("input_ids"),le=r(" only and nothing else: "),A=s("code"),ve=r("model(inputs_ids)"),ge=p(),E=s("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s("code"),R=r("model([input_ids, attention_mask])"),de=r(" or "),K=s("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),oe=p(),N=s("li"),ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),ke=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){d=a(b,"P",{});var x=l(d);T=i(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),u=h(b),c=a(b,"UL",{});var ne=l(c);g=a(ne,"LI",{});var Ee=l(g);n=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=h(ne),F=a(ne,"LI",{});var Ae=l(F);Q=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),ne.forEach(t),C=h(b),j=a(b,"P",{});var H=l(j);B=i(H,"This second option is useful when using "),I=a(H,"CODE",{});var qe=l(I);Z=i(qe,"tf.keras.Model.fit"),qe.forEach(t),_e=i(H,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(H,"CODE",{});var We=l(S);Te=i(We,"model(inputs)"),We.forEach(t),me=i(H,"."),H.forEach(t),W=h(b),O=a(b,"P",{});var Ue=l(O);ee=i(Ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ue.forEach(t),te=h(b),z=a(b,"UL",{});var D=l(z);q=a(D,"LI",{});var X=l(q);ie=i(X,"a single Tensor with "),V=a(X,"CODE",{});var Re=l(V);fe=i(Re,"input_ids"),Re.forEach(t),le=i(X," only and nothing else: "),A=a(X,"CODE",{});var Ce=l(A);ve=i(Ce,"model(inputs_ids)"),Ce.forEach(t),X.forEach(t),ge=h(D),E=a(D,"LI",{});var Y=l(E);be=i(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(Y,"CODE",{});var Be=l(U);R=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),de=i(Y," or "),K=a(Y,"CODE",{});var De=l(K);ye=i(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),oe=h(D),N=a(D,"LI",{});var we=l(N);ce=i(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(we,"CODE",{});var Ve=l(J);ke=i(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),we.forEach(t),D.forEach(t)},m(b,x){_(b,d,x),e(d,T),_(b,u,x),_(b,c,x),e(c,g),e(g,n),e(c,m),e(c,F),e(F,Q),_(b,C,x),_(b,j,x),e(j,B),e(j,I),e(I,Z),e(j,_e),e(j,S),e(S,Te),e(j,me),_(b,W,x),_(b,O,x),e(O,ee),_(b,te,x),_(b,z,x),e(z,q),e(q,ie),e(q,V),e(V,fe),e(q,le),e(q,A),e(A,ve),e(z,ge),e(z,E),e(E,be),e(E,U),e(U,R),e(E,de),e(E,K),e(K,ye),e(z,oe),e(z,N),e(N,ce),e(N,J),e(J,ke)},d(b){b&&t(d),b&&t(u),b&&t(c),b&&t(C),b&&t(j),b&&t(W),b&&t(O),b&&t(te),b&&t(z)}}}function ob(G){let d,T,u,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var F=l(u);c=i(F,"Module"),F.forEach(t),g=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(n,m){_(n,d,m),e(d,T),e(d,u),e(u,c),e(d,g)},d(n){n&&t(d)}}}function nb(G){let d,T,u,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, TFGPT2ForSequenceClassification
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
`}}),{c(){d=s("p"),T=r("Example:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Example:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function sb(G){let d,T;return d=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(d.$$.fragment)},l(u){k(d.$$.fragment,u)},m(u,c){w(d,u,c),T=!0},p:ae,i(u){T||($(d.$$.fragment,u),T=!0)},o(u){P(d.$$.fragment,u),T=!1},d(u){M(d,u)}}}function ab(G){let d,T,u,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var F=l(u);c=i(F,"Module"),F.forEach(t),g=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(n,m){_(n,d,m),e(d,T),e(d,u),e(u,c),e(d,g)},d(n){n&&t(d)}}}function rb(G){let d,T,u,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, FlaxGPT2Model

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = FlaxGPT2Model.from_pretrained("gpt2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxGPT2Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPT2Model.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),T=r("Example:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Example:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function ib(G){let d,T,u,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var F=l(u);c=i(F,"Module"),F.forEach(t),g=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(n,m){_(n,d,m),e(d,T),e(d,u),e(u,c),e(d,g)},d(n){n&&t(d)}}}function lb(G){let d,T,u,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, FlaxGPT2LMHeadModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=s("p"),T=r("Example:"),u=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var m=l(d);T=i(m,"Example:"),m.forEach(t),u=h(n),k(c.$$.fragment,n)},m(n,m){_(n,d,m),e(d,T),_(n,u,m),w(c,n,m),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(u),M(c,n)}}}function db(G){let d,T,u,c,g,n,m,F,Q,C,j,B,I,Z,_e,S,Te,me,W,O,ee,te,z,q,ie,V,fe,le,A,ve,ge,E,be,U,R,de,K,ye,oe,N,ce,J,ke,b,x,ne,Ee,Ae,H,qe,We,Ue,D,X,Re,Ce,Y,Be,De,we,Ve,za,hc,uc,$r,mc,fc,Ea,gc,_c,Tc,yt,vc,Pr,bc,yc,Mr,kc,wc,Cn,$c,Pc,Hl,Lt,Dn,Mc,Gc,Gr,xc,Fc,Il,Gt,jc,Ln,zc,Ec,On,qc,Cc,Sl,Ot,go,xr,Nn,Dc,Fr,Lc,Al,at,Hn,Oc,kt,Nc,qa,Hc,Ic,Ca,Sc,Ac,In,Wc,Uc,Rc,Nt,Bc,Da,Vc,Kc,La,Jc,Xc,Yc,_o,Wl,Ht,To,jr,Sn,Qc,zr,Zc,Ul,pe,An,ep,Er,tp,op,qr,np,sp,vo,ap,Wn,rp,Cr,ip,lp,dp,bo,cp,Un,pp,Oa,hp,up,mp,Na,Rn,Rl,It,yo,Dr,Bn,fp,Lr,gp,Bl,$e,Vn,_p,Kn,Tp,Or,vp,bp,yp,Nr,kp,wp,ko,$p,Jn,Pp,Hr,Mp,Gp,xp,wo,Fp,Xn,jp,Ha,zp,Ep,Vl,St,$o,Ir,Yn,qp,Sr,Cp,Kl,At,Qn,Dp,Ar,Lp,Jl,Wt,Zn,Op,Wr,Np,Xl,Ut,Po,Ur,es,Hp,Rr,Ip,Yl,Pe,ts,Sp,Br,Ap,Wp,os,Up,Ia,Rp,Bp,Vp,ns,Kp,ss,Jp,Xp,Yp,lt,as,Qp,Rt,Zp,Sa,eh,th,Vr,oh,nh,sh,Mo,ah,Go,rh,dt,rs,ih,Kr,lh,dh,Jr,ch,ph,xo,hh,xt,is,uh,Xr,mh,fh,Fo,Ql,Bt,jo,Yr,ls,gh,Qr,_h,Zl,Me,ds,Th,Zr,vh,bh,cs,yh,Aa,kh,wh,$h,ps,Ph,hs,Mh,Gh,xh,ct,us,Fh,Vt,jh,Wa,zh,Eh,ei,qh,Ch,Dh,zo,Lh,Eo,Oh,pt,ms,Nh,ti,Hh,Ih,oi,Sh,Ah,qo,Wh,Ft,fs,Uh,ni,Rh,Bh,Co,ed,Kt,Do,si,gs,Vh,ai,Kh,td,Ke,_s,Jh,ri,Xh,Yh,Ts,Qh,Ua,Zh,eu,tu,vs,ou,bs,nu,su,au,ht,ys,ru,Jt,iu,Ra,lu,du,ii,cu,pu,hu,Lo,uu,Oo,od,Xt,No,li,ks,mu,di,fu,nd,Ge,ws,gu,ci,_u,Tu,Ba,Va,vu,bu,yu,rt,ku,pi,wu,$u,hi,Pu,Mu,ui,Gu,xu,mi,Fu,ju,zu,$s,Eu,Ka,qu,Cu,Du,Ps,Lu,Ms,Ou,Nu,Hu,je,Gs,Iu,Yt,Su,Ja,Au,Wu,fi,Uu,Ru,Bu,Ho,Vu,Io,Ku,So,Ju,Ao,Xu,Wo,sd,Qt,Uo,gi,xs,Yu,_i,Qu,ad,Je,Fs,Zu,Ti,em,tm,js,om,Xa,nm,sm,am,zs,rm,Es,im,lm,dm,Xe,qs,cm,Zt,pm,Ya,hm,um,vi,mm,fm,gm,Ro,_m,Bo,Tm,Vo,rd,eo,Ko,bi,Cs,vm,yi,bm,id,Le,Ds,ym,ki,km,wm,Ls,$m,Qa,Pm,Mm,Gm,Os,xm,Ns,Fm,jm,zm,Jo,Em,ut,Hs,qm,to,Cm,Za,Dm,Lm,wi,Om,Nm,Hm,Xo,Im,Yo,ld,oo,Qo,$i,Is,Sm,Pi,Am,dd,Oe,Ss,Wm,Mi,Um,Rm,As,Bm,er,Vm,Km,Jm,Ws,Xm,Us,Ym,Qm,Zm,Zo,ef,mt,Rs,tf,no,of,tr,nf,sf,Gi,af,rf,lf,en,df,tn,cd,so,on,xi,Bs,cf,Fi,pf,pd,Ne,Vs,hf,ji,uf,mf,Ks,ff,or,gf,_f,Tf,Js,vf,Xs,bf,yf,kf,nn,wf,ft,Ys,$f,ao,Pf,nr,Mf,Gf,zi,xf,Ff,jf,sn,zf,an,hd,ro,rn,Ei,Qs,Ef,qi,qf,ud,he,Zs,Cf,Ci,Df,Lf,sr,ar,Of,Nf,Hf,it,If,Di,Sf,Af,Li,Wf,Uf,Oi,Rf,Bf,Ni,Vf,Kf,Jf,ea,Xf,rr,Yf,Qf,Zf,ta,eg,oa,tg,og,ng,ln,sg,Ye,na,ag,io,rg,ir,ig,lg,Hi,dg,cg,pg,dn,hg,cn,ug,pn,md,lo,hn,Ii,sa,mg,Si,fg,fd,co,aa,gg,Ai,_g,gd,po,un,Wi,ra,Tg,Ui,vg,_d,xe,ia,bg,Ri,yg,kg,la,wg,lr,$g,Pg,Mg,da,Gg,ca,xg,Fg,jg,Bi,zg,Eg,wt,Vi,pa,qg,Cg,Ki,ha,Dg,Lg,Ji,ua,Og,Ng,Xi,ma,Hg,Ig,gt,fa,Sg,ho,Ag,Yi,Wg,Ug,Qi,Rg,Bg,Vg,mn,Kg,fn,Td,uo,gn,Zi,ga,Jg,el,Xg,vd,Fe,_a,Yg,tl,Qg,Zg,Ta,e_,dr,t_,o_,n_,va,s_,ba,a_,r_,i_,ol,l_,d_,$t,nl,ya,c_,p_,sl,ka,h_,u_,al,wa,m_,f_,rl,$a,g_,__,_t,Pa,T_,mo,v_,il,b_,y_,ll,k_,w_,$_,_n,P_,Tn,bd;return n=new ze({}),Z=new ze({}),Nn=new ze({}),Hn=new L({props:{name:"class transformers.GPT2Config",anchor:"transformers.GPT2Config",parameters:[{name:"vocab_size",val:" = 50257"},{name:"n_positions",val:" = 1024"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"scale_attn_by_inverse_layer_idx",val:" = False"},{name:"reorder_and_upcast_attn",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Model">GPT2Model</a> or <a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.TFGPT2Model">TFGPT2Model</a>.`,name:"vocab_size"},{anchor:"transformers.GPT2Config.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.GPT2Config.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.GPT2Config.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in for the multiple choice head in
<a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a>.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.GPT2Config.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.GPT2Config.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.GPT2Config.scale_attn_weights",description:`<strong>scale_attn_weights</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale attention weights by dividing by sqrt(hidden_size)..`,name:"scale_attn_weights"},{anchor:"transformers.GPT2Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.GPT2Config.scale_attn_by_inverse_layer_idx",description:`<strong>scale_attn_by_inverse_layer_idx</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to additionally scale attention weights by <code>1 / layer_idx + 1</code>.`,name:"scale_attn_by_inverse_layer_idx"},{anchor:"transformers.GPT2Config.reorder_and_upcast_attn",description:`<strong>reorder_and_upcast_attn</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to scale keys (K) prior to computing attention (dot-product) and upcast attention
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/configuration_gpt2.py#L38"}}),_o=new se({props:{anchor:"transformers.GPT2Config.example",$$slots:{default:[wv]},$$scope:{ctx:G}}}),Sn=new ze({}),An=new L({props:{name:"class transformers.GPT2Tokenizer",anchor:"transformers.GPT2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = None"},{name:"add_prefix_space",val:" = False"},{name:"add_bos_token",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.GPT2Tokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.GPT2Tokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.GPT2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.GPT2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.GPT2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.GPT2Tokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (GPT2 tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/tokenization_gpt2.py#L104"}}),vo=new se({props:{anchor:"transformers.GPT2Tokenizer.example",$$slots:{default:[$v]},$$scope:{ctx:G}}}),bo=new He({props:{$$slots:{default:[Pv]},$$scope:{ctx:G}}}),Rn=new L({props:{name:"save_vocabulary",anchor:"transformers.GPT2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/tokenization_gpt2.py#L288"}}),Bn=new ze({}),Vn=new L({props:{name:"class transformers.GPT2TokenizerFast",anchor:"transformers.GPT2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/tokenization_gpt2_fast.py#L70"}}),ko=new se({props:{anchor:"transformers.GPT2TokenizerFast.example",$$slots:{default:[Mv]},$$scope:{ctx:G}}}),wo=new He({props:{$$slots:{default:[Gv]},$$scope:{ctx:G}}}),Yn=new ze({}),Qn=new L({props:{name:"class transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_gpt2.py#L499"}}),Zn=new L({props:{name:"class transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput",anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_tf_gpt2.py#L563"}}),es=new ze({}),ts=new L({props:{name:"class transformers.GPT2Model",anchor:"transformers.GPT2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_gpt2.py#L679"}}),as=new L({props:{name:"forward",anchor:"transformers.GPT2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_gpt2.py#L748",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mo=new He({props:{$$slots:{default:[xv]},$$scope:{ctx:G}}}),Go=new se({props:{anchor:"transformers.GPT2Model.forward.example",$$slots:{default:[Fv]},$$scope:{ctx:G}}}),rs=new L({props:{name:"parallelize",anchor:"transformers.GPT2Model.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the gpt2 models have the
following number of attention modules:</p>
<ul>
<li>gpt2: 12</li>
<li>gpt2-medium: 24</li>
<li>gpt2-large: 36</li>
<li>gpt2-xl: 48</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_gpt2.py#L702"}}),xo=new se({props:{anchor:"transformers.GPT2Model.parallelize.example",$$slots:{default:[jv]},$$scope:{ctx:G}}}),is=new L({props:{name:"deparallelize",anchor:"transformers.GPT2Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_gpt2.py#L722"}}),Fo=new se({props:{anchor:"transformers.GPT2Model.deparallelize.example",$$slots:{default:[zv]},$$scope:{ctx:G}}}),ls=new ze({}),ds=new L({props:{name:"class transformers.GPT2LMHeadModel",anchor:"transformers.GPT2LMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_gpt2.py#L957"}}),us=new L({props:{name:"forward",anchor:"transformers.GPT2LMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2LMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_gpt2.py#L1026",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zo=new He({props:{$$slots:{default:[Ev]},$$scope:{ctx:G}}}),Eo=new se({props:{anchor:"transformers.GPT2LMHeadModel.forward.example",$$slots:{default:[qv]},$$scope:{ctx:G}}}),ms=new L({props:{name:"parallelize",anchor:"transformers.GPT2LMHeadModel.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the gpt2 models have the
following number of attention modules:</p>
<ul>
<li>gpt2: 12</li>
<li>gpt2-medium: 24</li>
<li>gpt2-large: 36</li>
<li>gpt2-xl: 48</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_gpt2.py#L972"}}),qo=new se({props:{anchor:"transformers.GPT2LMHeadModel.parallelize.example",$$slots:{default:[Cv]},$$scope:{ctx:G}}}),fs=new L({props:{name:"deparallelize",anchor:"transformers.GPT2LMHeadModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_gpt2.py#L984"}}),Co=new se({props:{anchor:"transformers.GPT2LMHeadModel.deparallelize.example",$$slots:{default:[Dv]},$$scope:{ctx:G}}}),gs=new ze({}),_s=new L({props:{name:"class transformers.GPT2DoubleHeadsModel",anchor:"transformers.GPT2DoubleHeadsModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2DoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_gpt2.py#L1126"}}),ys=new L({props:{name:"forward",anchor:"transformers.GPT2DoubleHeadsModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_token_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"mc_labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2DoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1[</code>.`,name:"mc_token_ids"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code> All labels set to
<code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>`,name:"labels"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.mc_labels",description:`<strong>mc_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"mc_labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_gpt2.py#L1200",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lo=new He({props:{$$slots:{default:[Lv]},$$scope:{ctx:G}}}),Oo=new se({props:{anchor:"transformers.GPT2DoubleHeadsModel.forward.example",$$slots:{default:[Ov]},$$scope:{ctx:G}}}),ks=new ze({}),ws=new L({props:{name:"class transformers.GPT2ForSequenceClassification",anchor:"transformers.GPT2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_gpt2.py#L1340"}}),Gs=new L({props:{name:"forward",anchor:"transformers.GPT2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_gpt2.py#L1356",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config"
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
`}}),Ho=new He({props:{$$slots:{default:[Nv]},$$scope:{ctx:G}}}),Io=new se({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example",$$slots:{default:[Hv]},$$scope:{ctx:G}}}),So=new se({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-2",$$slots:{default:[Iv]},$$scope:{ctx:G}}}),Ao=new se({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-3",$$slots:{default:[Sv]},$$scope:{ctx:G}}}),Wo=new se({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-4",$$slots:{default:[Av]},$$scope:{ctx:G}}}),xs=new ze({}),Fs=new L({props:{name:"class transformers.GPT2ForTokenClassification",anchor:"transformers.GPT2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_gpt2.py#L1468"}}),qs=new L({props:{name:"forward",anchor:"transformers.GPT2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_gpt2.py#L1490",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new He({props:{$$slots:{default:[Wv]},$$scope:{ctx:G}}}),Bo=new se({props:{anchor:"transformers.GPT2ForTokenClassification.forward.example",$$slots:{default:[Uv]},$$scope:{ctx:G}}}),Vo=new se({props:{anchor:"transformers.GPT2ForTokenClassification.forward.example-2",$$slots:{default:[Rv]},$$scope:{ctx:G}}}),Cs=new ze({}),Ds=new L({props:{name:"class transformers.TFGPT2Model",anchor:"transformers.TFGPT2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_tf_gpt2.py#L706"}}),Jo=new He({props:{$$slots:{default:[Bv]},$$scope:{ctx:G}}}),Hs=new L({props:{name:"call",anchor:"transformers.TFGPT2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_tf_gpt2.py#L711",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xo=new He({props:{$$slots:{default:[Vv]},$$scope:{ctx:G}}}),Yo=new se({props:{anchor:"transformers.TFGPT2Model.call.example",$$slots:{default:[Kv]},$$scope:{ctx:G}}}),Is=new ze({}),Ss=new L({props:{name:"class transformers.TFGPT2LMHeadModel",anchor:"transformers.TFGPT2LMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_tf_gpt2.py#L804"}}),Zo=new He({props:{$$slots:{default:[Jv]},$$scope:{ctx:G}}}),Rs=new L({props:{name:"call",anchor:"transformers.TFGPT2LMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2LMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_tf_gpt2.py#L840",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),en=new He({props:{$$slots:{default:[Xv]},$$scope:{ctx:G}}}),tn=new se({props:{anchor:"transformers.TFGPT2LMHeadModel.call.example",$$slots:{default:[Yv]},$$scope:{ctx:G}}}),Bs=new ze({}),Vs=new L({props:{name:"class transformers.TFGPT2DoubleHeadsModel",anchor:"transformers.TFGPT2DoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2DoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_tf_gpt2.py#L955"}}),nn=new He({props:{$$slots:{default:[Qv]},$$scope:{ctx:G}}}),Ys=new L({props:{name:"call",anchor:"transformers.TFGPT2DoubleHeadsModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mc_token_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2DoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1[</code>.`,name:"mc_token_ids"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_tf_gpt2.py#L964",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),sn=new He({props:{$$slots:{default:[Zv]},$$scope:{ctx:G}}}),an=new se({props:{anchor:"transformers.TFGPT2DoubleHeadsModel.call.example",$$slots:{default:[eb]},$$scope:{ctx:G}}}),Qs=new ze({}),Zs=new L({props:{name:"class transformers.TFGPT2ForSequenceClassification",anchor:"transformers.TFGPT2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1103"}}),ln=new He({props:{$$slots:{default:[tb]},$$scope:{ctx:G}}}),na=new L({props:{name:"call",anchor:"transformers.TFGPT2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1115",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),dn=new He({props:{$$slots:{default:[ob]},$$scope:{ctx:G}}}),cn=new se({props:{anchor:"transformers.TFGPT2ForSequenceClassification.call.example",$$slots:{default:[nb]},$$scope:{ctx:G}}}),pn=new se({props:{anchor:"transformers.TFGPT2ForSequenceClassification.call.example-2",$$slots:{default:[sb]},$$scope:{ctx:G}}}),sa=new ze({}),aa=new L({props:{name:"class transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/modeling_tf_outputs.py#L863"}}),ra=new ze({}),ia=new L({props:{name:"class transformers.FlaxGPT2Model",anchor:"transformers.FlaxGPT2Model",parameters:[{name:"config",val:": GPT2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPT2Model.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_flax_gpt2.py#L665"}}),fa=new L({props:{name:"__call__",anchor:"transformers.FlaxGPT2Model.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPT2Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_flax_gpt2.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mn=new He({props:{$$slots:{default:[ab]},$$scope:{ctx:G}}}),fn=new se({props:{anchor:"transformers.FlaxGPT2Model.__call__.example",$$slots:{default:[rb]},$$scope:{ctx:G}}}),ga=new ze({}),_a=new L({props:{name:"class transformers.FlaxGPT2LMHeadModel",anchor:"transformers.FlaxGPT2LMHeadModel",parameters:[{name:"config",val:": GPT2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPT2LMHeadModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_flax_gpt2.py#L743"}}),Pa=new L({props:{name:"__call__",anchor:"transformers.FlaxGPT2LMHeadModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt2/modeling_flax_gpt2.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_n=new He({props:{$$slots:{default:[ib]},$$scope:{ctx:G}}}),Tn=new se({props:{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.example",$$slots:{default:[lb]},$$scope:{ctx:G}}}),{c(){d=s("meta"),T=p(),u=s("h1"),c=s("a"),g=s("span"),y(n.$$.fragment),m=p(),F=s("span"),Q=r("OpenAI GPT2"),C=p(),j=s("h2"),B=s("a"),I=s("span"),y(Z.$$.fragment),_e=p(),S=s("span"),Te=r("Overview"),me=p(),W=s("p"),O=r("OpenAI GPT-2 model was proposed in "),ee=s("a"),te=r("Language Models are Unsupervised Multitask Learners"),z=r(` by Alec
Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei and Ilya Sutskever. It\u2019s a causal (unidirectional)
transformer pretrained using language modeling on a very large corpus of ~40 GB of text data.`),q=p(),ie=s("p"),V=r("The abstract from the paper is the following:"),fe=p(),le=s("p"),A=s("em"),ve=r(`GPT-2 is a large transformer-based language model with 1.5 billion parameters, trained on a dataset[1] of 8 million
web pages. GPT-2 is trained with a simple objective: predict the next word, given all of the previous words within some
text. The diversity of the dataset causes this simple goal to contain naturally occurring demonstrations of many tasks
across diverse domains. GPT-2 is a direct scale-up of GPT, with more than 10X the parameters and trained on more than
10X the amount of data.`),ge=p(),E=s("p"),be=r("Tips:"),U=p(),R=s("ul"),de=s("li"),K=r(`GPT-2 is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),ye=p(),oe=s("li"),N=r(`GPT-2 was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ce=s("em"),J=r("run_generation.py"),ke=r(" example script."),b=p(),x=s("li"),ne=r("The model can take the "),Ee=s("em"),Ae=r("past_key_values"),H=r(" (for PyTorch) or "),qe=s("em"),We=r("past"),Ue=r(` (for TF) as input, which is the previously computed
key/value attention pairs. Using this (`),D=s("em"),X=r("past_key_values"),Re=r(" or "),Ce=s("em"),Y=r("past"),Be=r(`) value prevents the model from re-computing
pre-computed values in the context of text generation. For PyTorch, see `),De=s("em"),we=r("past_key_values"),Ve=r(` argument of the
`),za=s("a"),hc=r("GPT2Model.forward()"),uc=r(" method, or for TF the "),$r=s("em"),mc=r("past"),fc=r(` argument of the
`),Ea=s("a"),gc=r("TFGPT2Model.call()"),_c=r(" method for more information on its usage."),Tc=p(),yt=s("li"),vc=r("Enabling the "),Pr=s("em"),bc=r("scale_attn_by_inverse_layer_idx"),yc=r(" and "),Mr=s("em"),kc=r("reorder_and_upcast_attn"),wc=r(` flags will apply the training stability
improvements from `),Cn=s("a"),$c=r("Mistral"),Pc=r(" (for PyTorch only)."),Hl=p(),Lt=s("p"),Dn=s("a"),Mc=r("Write With Transformer"),Gc=r(` is a webapp created and hosted by
Hugging Face showcasing the generative capabilities of several models. GPT-2 is one of them and is available in five
different sizes: small, medium, large, xl and a distilled version of the small checkpoint: `),Gr=s("em"),xc=r("distilgpt-2"),Fc=r("."),Il=p(),Gt=s("p"),jc=r("This model was contributed by "),Ln=s("a"),zc=r("thomwolf"),Ec=r(". The original code can be found "),On=s("a"),qc=r("here"),Cc=r("."),Sl=p(),Ot=s("h2"),go=s("a"),xr=s("span"),y(Nn.$$.fragment),Dc=p(),Fr=s("span"),Lc=r("GPT2Config"),Al=p(),at=s("div"),y(Hn.$$.fragment),Oc=p(),kt=s("p"),Nc=r("This is the configuration class to store the configuration of a "),qa=s("a"),Hc=r("GPT2Model"),Ic=r(" or a "),Ca=s("a"),Sc=r("TFGPT2Model"),Ac=r(`. It is used to
instantiate a GPT-2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GPT-2
`),In=s("a"),Wc=r("gpt2"),Uc=r(" architecture."),Rc=p(),Nt=s("p"),Bc=r("Configuration objects inherit from "),Da=s("a"),Vc=r("PretrainedConfig"),Kc=r(` and can be used to control the model outputs. Read the
documentation from `),La=s("a"),Jc=r("PretrainedConfig"),Xc=r(" for more information."),Yc=p(),y(_o.$$.fragment),Wl=p(),Ht=s("h2"),To=s("a"),jr=s("span"),y(Sn.$$.fragment),Qc=p(),zr=s("span"),Zc=r("GPT2Tokenizer"),Ul=p(),pe=s("div"),y(An.$$.fragment),ep=p(),Er=s("p"),tp=r("Construct a GPT-2 tokenizer. Based on byte-level Byte-Pair-Encoding."),op=p(),qr=s("p"),np=r("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),sp=p(),y(vo.$$.fragment),ap=p(),Wn=s("p"),rp=r("You can get around that behavior by passing "),Cr=s("code"),ip=r("add_prefix_space=True"),lp=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),dp=p(),y(bo.$$.fragment),cp=p(),Un=s("p"),pp=r("This tokenizer inherits from "),Oa=s("a"),hp=r("PreTrainedTokenizer"),up=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),mp=p(),Na=s("div"),y(Rn.$$.fragment),Rl=p(),It=s("h2"),yo=s("a"),Dr=s("span"),y(Bn.$$.fragment),fp=p(),Lr=s("span"),gp=r("GPT2TokenizerFast"),Bl=p(),$e=s("div"),y(Vn.$$.fragment),_p=p(),Kn=s("p"),Tp=r("Construct a \u201Cfast\u201D GPT-2 tokenizer (backed by HuggingFace\u2019s "),Or=s("em"),vp=r("tokenizers"),bp=r(` library). Based on byte-level
Byte-Pair-Encoding.`),yp=p(),Nr=s("p"),kp=r("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),wp=p(),y(ko.$$.fragment),$p=p(),Jn=s("p"),Pp=r("You can get around that behavior by passing "),Hr=s("code"),Mp=r("add_prefix_space=True"),Gp=r(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),xp=p(),y(wo.$$.fragment),Fp=p(),Xn=s("p"),jp=r("This tokenizer inherits from "),Ha=s("a"),zp=r("PreTrainedTokenizerFast"),Ep=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vl=p(),St=s("h2"),$o=s("a"),Ir=s("span"),y(Yn.$$.fragment),qp=p(),Sr=s("span"),Cp=r("GPT2 specific outputs"),Kl=p(),At=s("div"),y(Qn.$$.fragment),Dp=p(),Ar=s("p"),Lp=r("Base class for outputs of models predicting if two sentences are consecutive or not."),Jl=p(),Wt=s("div"),y(Zn.$$.fragment),Op=p(),Wr=s("p"),Np=r("Base class for outputs of models predicting if two sentences are consecutive or not."),Xl=p(),Ut=s("h2"),Po=s("a"),Ur=s("span"),y(es.$$.fragment),Hp=p(),Rr=s("span"),Ip=r("GPT2Model"),Yl=p(),Pe=s("div"),y(ts.$$.fragment),Sp=p(),Br=s("p"),Ap=r("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),Wp=p(),os=s("p"),Up=r("This model inherits from "),Ia=s("a"),Rp=r("PreTrainedModel"),Bp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vp=p(),ns=s("p"),Kp=r("This model is also a PyTorch "),ss=s("a"),Jp=r("torch.nn.Module"),Xp=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yp=p(),lt=s("div"),y(as.$$.fragment),Qp=p(),Rt=s("p"),Zp=r("The "),Sa=s("a"),eh=r("GPT2Model"),th=r(" forward method, overrides the "),Vr=s("code"),oh=r("__call__"),nh=r(" special method."),sh=p(),y(Mo.$$.fragment),ah=p(),y(Go.$$.fragment),rh=p(),dt=s("div"),y(rs.$$.fragment),ih=p(),Kr=s("p"),lh=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),dh=p(),Jr=s("p"),ch=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),ph=p(),y(xo.$$.fragment),hh=p(),xt=s("div"),y(is.$$.fragment),uh=p(),Xr=s("p"),mh=r("Moves the model to cpu from a model parallel state."),fh=p(),y(Fo.$$.fragment),Ql=p(),Bt=s("h2"),jo=s("a"),Yr=s("span"),y(ls.$$.fragment),gh=p(),Qr=s("span"),_h=r("GPT2LMHeadModel"),Zl=p(),Me=s("div"),y(ds.$$.fragment),Th=p(),Zr=s("p"),vh=r(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),bh=p(),cs=s("p"),yh=r("This model inherits from "),Aa=s("a"),kh=r("PreTrainedModel"),wh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$h=p(),ps=s("p"),Ph=r("This model is also a PyTorch "),hs=s("a"),Mh=r("torch.nn.Module"),Gh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xh=p(),ct=s("div"),y(us.$$.fragment),Fh=p(),Vt=s("p"),jh=r("The "),Wa=s("a"),zh=r("GPT2LMHeadModel"),Eh=r(" forward method, overrides the "),ei=s("code"),qh=r("__call__"),Ch=r(" special method."),Dh=p(),y(zo.$$.fragment),Lh=p(),y(Eo.$$.fragment),Oh=p(),pt=s("div"),y(ms.$$.fragment),Nh=p(),ti=s("p"),Hh=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Ih=p(),oi=s("p"),Sh=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Ah=p(),y(qo.$$.fragment),Wh=p(),Ft=s("div"),y(fs.$$.fragment),Uh=p(),ni=s("p"),Rh=r("Moves the model to cpu from a model parallel state."),Bh=p(),y(Co.$$.fragment),ed=p(),Kt=s("h2"),Do=s("a"),si=s("span"),y(gs.$$.fragment),Vh=p(),ai=s("span"),Kh=r("GPT2DoubleHeadsModel"),td=p(),Ke=s("div"),y(_s.$$.fragment),Jh=p(),ri=s("p"),Xh=r(`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Yh=p(),Ts=s("p"),Qh=r("This model inherits from "),Ua=s("a"),Zh=r("PreTrainedModel"),eu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tu=p(),vs=s("p"),ou=r("This model is also a PyTorch "),bs=s("a"),nu=r("torch.nn.Module"),su=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),au=p(),ht=s("div"),y(ys.$$.fragment),ru=p(),Jt=s("p"),iu=r("The "),Ra=s("a"),lu=r("GPT2DoubleHeadsModel"),du=r(" forward method, overrides the "),ii=s("code"),cu=r("__call__"),pu=r(" special method."),hu=p(),y(Lo.$$.fragment),uu=p(),y(Oo.$$.fragment),od=p(),Xt=s("h2"),No=s("a"),li=s("span"),y(ks.$$.fragment),mu=p(),di=s("span"),fu=r("GPT2ForSequenceClassification"),nd=p(),Ge=s("div"),y(ws.$$.fragment),gu=p(),ci=s("p"),_u=r("The GPT2 Model transformer with a sequence classification head on top (linear layer)."),Tu=p(),Ba=s("p"),Va=s("a"),vu=r("GPT2ForSequenceClassification"),bu=r(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),yu=p(),rt=s("p"),ku=r(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),pi=s("code"),wu=r("pad_token_id"),$u=r(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),hi=s("code"),Pu=r("pad_token_id"),Mu=r(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ui=s("code"),Gu=r("inputs_embeds"),xu=r(" are passed instead of "),mi=s("code"),Fu=r("input_ids"),ju=r(`, it does the same (take the last value in
each row of the batch).`),zu=p(),$s=s("p"),Eu=r("This model inherits from "),Ka=s("a"),qu=r("PreTrainedModel"),Cu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Du=p(),Ps=s("p"),Lu=r("This model is also a PyTorch "),Ms=s("a"),Ou=r("torch.nn.Module"),Nu=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hu=p(),je=s("div"),y(Gs.$$.fragment),Iu=p(),Yt=s("p"),Su=r("The "),Ja=s("a"),Au=r("GPT2ForSequenceClassification"),Wu=r(" forward method, overrides the "),fi=s("code"),Uu=r("__call__"),Ru=r(" special method."),Bu=p(),y(Ho.$$.fragment),Vu=p(),y(Io.$$.fragment),Ku=p(),y(So.$$.fragment),Ju=p(),y(Ao.$$.fragment),Xu=p(),y(Wo.$$.fragment),sd=p(),Qt=s("h2"),Uo=s("a"),gi=s("span"),y(xs.$$.fragment),Yu=p(),_i=s("span"),Qu=r("GPT2ForTokenClassification"),ad=p(),Je=s("div"),y(Fs.$$.fragment),Zu=p(),Ti=s("p"),em=r(`GPT2 Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),tm=p(),js=s("p"),om=r("This model inherits from "),Xa=s("a"),nm=r("PreTrainedModel"),sm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),am=p(),zs=s("p"),rm=r("This model is also a PyTorch "),Es=s("a"),im=r("torch.nn.Module"),lm=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dm=p(),Xe=s("div"),y(qs.$$.fragment),cm=p(),Zt=s("p"),pm=r("The "),Ya=s("a"),hm=r("GPT2ForTokenClassification"),um=r(" forward method, overrides the "),vi=s("code"),mm=r("__call__"),fm=r(" special method."),gm=p(),y(Ro.$$.fragment),_m=p(),y(Bo.$$.fragment),Tm=p(),y(Vo.$$.fragment),rd=p(),eo=s("h2"),Ko=s("a"),bi=s("span"),y(Cs.$$.fragment),vm=p(),yi=s("span"),bm=r("TFGPT2Model"),id=p(),Le=s("div"),y(Ds.$$.fragment),ym=p(),ki=s("p"),km=r("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),wm=p(),Ls=s("p"),$m=r("This model inherits from "),Qa=s("a"),Pm=r("TFPreTrainedModel"),Mm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gm=p(),Os=s("p"),xm=r("This model is also a "),Ns=s("a"),Fm=r("tf.keras.Model"),jm=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zm=p(),y(Jo.$$.fragment),Em=p(),ut=s("div"),y(Hs.$$.fragment),qm=p(),to=s("p"),Cm=r("The "),Za=s("a"),Dm=r("TFGPT2Model"),Lm=r(" forward method, overrides the "),wi=s("code"),Om=r("__call__"),Nm=r(" special method."),Hm=p(),y(Xo.$$.fragment),Im=p(),y(Yo.$$.fragment),ld=p(),oo=s("h2"),Qo=s("a"),$i=s("span"),y(Is.$$.fragment),Sm=p(),Pi=s("span"),Am=r("TFGPT2LMHeadModel"),dd=p(),Oe=s("div"),y(Ss.$$.fragment),Wm=p(),Mi=s("p"),Um=r(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Rm=p(),As=s("p"),Bm=r("This model inherits from "),er=s("a"),Vm=r("TFPreTrainedModel"),Km=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jm=p(),Ws=s("p"),Xm=r("This model is also a "),Us=s("a"),Ym=r("tf.keras.Model"),Qm=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zm=p(),y(Zo.$$.fragment),ef=p(),mt=s("div"),y(Rs.$$.fragment),tf=p(),no=s("p"),of=r("The "),tr=s("a"),nf=r("TFGPT2LMHeadModel"),sf=r(" forward method, overrides the "),Gi=s("code"),af=r("__call__"),rf=r(" special method."),lf=p(),y(en.$$.fragment),df=p(),y(tn.$$.fragment),cd=p(),so=s("h2"),on=s("a"),xi=s("span"),y(Bs.$$.fragment),cf=p(),Fi=s("span"),pf=r("TFGPT2DoubleHeadsModel"),pd=p(),Ne=s("div"),y(Vs.$$.fragment),hf=p(),ji=s("p"),uf=r(`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),mf=p(),Ks=s("p"),ff=r("This model inherits from "),or=s("a"),gf=r("TFPreTrainedModel"),_f=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf=p(),Js=s("p"),vf=r("This model is also a "),Xs=s("a"),bf=r("tf.keras.Model"),yf=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kf=p(),y(nn.$$.fragment),wf=p(),ft=s("div"),y(Ys.$$.fragment),$f=p(),ao=s("p"),Pf=r("The "),nr=s("a"),Mf=r("TFGPT2DoubleHeadsModel"),Gf=r(" forward method, overrides the "),zi=s("code"),xf=r("__call__"),Ff=r(" special method."),jf=p(),y(sn.$$.fragment),zf=p(),y(an.$$.fragment),hd=p(),ro=s("h2"),rn=s("a"),Ei=s("span"),y(Qs.$$.fragment),Ef=p(),qi=s("span"),qf=r("TFGPT2ForSequenceClassification"),ud=p(),he=s("div"),y(Zs.$$.fragment),Cf=p(),Ci=s("p"),Df=r("The GPT2 Model transformer with a sequence classification head on top (linear layer)."),Lf=p(),sr=s("p"),ar=s("a"),Of=r("TFGPT2ForSequenceClassification"),Nf=r(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),Hf=p(),it=s("p"),If=r(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Di=s("code"),Sf=r("pad_token_id"),Af=r(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Li=s("code"),Wf=r("pad_token_id"),Uf=r(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Oi=s("code"),Rf=r("inputs_embeds"),Bf=r(" are passed instead of "),Ni=s("code"),Vf=r("input_ids"),Kf=r(`, it does the same (take the last value in
each row of the batch).`),Jf=p(),ea=s("p"),Xf=r("This model inherits from "),rr=s("a"),Yf=r("TFPreTrainedModel"),Qf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zf=p(),ta=s("p"),eg=r("This model is also a "),oa=s("a"),tg=r("tf.keras.Model"),og=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ng=p(),y(ln.$$.fragment),sg=p(),Ye=s("div"),y(na.$$.fragment),ag=p(),io=s("p"),rg=r("The "),ir=s("a"),ig=r("TFGPT2ForSequenceClassification"),lg=r(" forward method, overrides the "),Hi=s("code"),dg=r("__call__"),cg=r(" special method."),pg=p(),y(dn.$$.fragment),hg=p(),y(cn.$$.fragment),ug=p(),y(pn.$$.fragment),md=p(),lo=s("h2"),hn=s("a"),Ii=s("span"),y(sa.$$.fragment),mg=p(),Si=s("span"),fg=r("TFSequenceClassifierOutputWithPast"),fd=p(),co=s("div"),y(aa.$$.fragment),gg=p(),Ai=s("p"),_g=r("Base class for outputs of sentence classification models."),gd=p(),po=s("h2"),un=s("a"),Wi=s("span"),y(ra.$$.fragment),Tg=p(),Ui=s("span"),vg=r("FlaxGPT2Model"),_d=p(),xe=s("div"),y(ia.$$.fragment),bg=p(),Ri=s("p"),yg=r("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),kg=p(),la=s("p"),wg=r("This model inherits from "),lr=s("a"),$g=r("FlaxPreTrainedModel"),Pg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mg=p(),da=s("p"),Gg=r(`This model is also a Flax Linen
`),ca=s("a"),xg=r("flax.nn.Module"),Fg=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jg=p(),Bi=s("p"),zg=r("Finally, this model supports inherent JAX features such as:"),Eg=p(),wt=s("ul"),Vi=s("li"),pa=s("a"),qg=r("Just-In-Time (JIT) compilation"),Cg=p(),Ki=s("li"),ha=s("a"),Dg=r("Automatic Differentiation"),Lg=p(),Ji=s("li"),ua=s("a"),Og=r("Vectorization"),Ng=p(),Xi=s("li"),ma=s("a"),Hg=r("Parallelization"),Ig=p(),gt=s("div"),y(fa.$$.fragment),Sg=p(),ho=s("p"),Ag=r("The "),Yi=s("code"),Wg=r("FlaxGPT2PreTrainedModel"),Ug=r(" forward method, overrides the "),Qi=s("code"),Rg=r("__call__"),Bg=r(" special method."),Vg=p(),y(mn.$$.fragment),Kg=p(),y(fn.$$.fragment),Td=p(),uo=s("h2"),gn=s("a"),Zi=s("span"),y(ga.$$.fragment),Jg=p(),el=s("span"),Xg=r("FlaxGPT2LMHeadModel"),vd=p(),Fe=s("div"),y(_a.$$.fragment),Yg=p(),tl=s("p"),Qg=r(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Zg=p(),Ta=s("p"),e_=r("This model inherits from "),dr=s("a"),t_=r("FlaxPreTrainedModel"),o_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),n_=p(),va=s("p"),s_=r(`This model is also a Flax Linen
`),ba=s("a"),a_=r("flax.nn.Module"),r_=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),i_=p(),ol=s("p"),l_=r("Finally, this model supports inherent JAX features such as:"),d_=p(),$t=s("ul"),nl=s("li"),ya=s("a"),c_=r("Just-In-Time (JIT) compilation"),p_=p(),sl=s("li"),ka=s("a"),h_=r("Automatic Differentiation"),u_=p(),al=s("li"),wa=s("a"),m_=r("Vectorization"),f_=p(),rl=s("li"),$a=s("a"),g_=r("Parallelization"),__=p(),_t=s("div"),y(Pa.$$.fragment),T_=p(),mo=s("p"),v_=r("The "),il=s("code"),b_=r("FlaxGPT2PreTrainedModel"),y_=r(" forward method, overrides the "),ll=s("code"),k_=r("__call__"),w_=r(" special method."),$_=p(),y(_n.$$.fragment),P_=p(),y(Tn.$$.fragment),this.h()},l(o){const v=yv('[data-svelte="svelte-1phssyn"]',document.head);d=a(v,"META",{name:!0,content:!0}),v.forEach(t),T=h(o),u=a(o,"H1",{class:!0});var Ma=l(u);c=a(Ma,"A",{id:!0,class:!0,href:!0});var dl=l(c);g=a(dl,"SPAN",{});var cl=l(g);k(n.$$.fragment,cl),cl.forEach(t),dl.forEach(t),m=h(Ma),F=a(Ma,"SPAN",{});var pl=l(F);Q=i(pl,"OpenAI GPT2"),pl.forEach(t),Ma.forEach(t),C=h(o),j=a(o,"H2",{class:!0});var Ga=l(j);B=a(Ga,"A",{id:!0,class:!0,href:!0});var hl=l(B);I=a(hl,"SPAN",{});var ul=l(I);k(Z.$$.fragment,ul),ul.forEach(t),hl.forEach(t),_e=h(Ga),S=a(Ga,"SPAN",{});var ml=l(S);Te=i(ml,"Overview"),ml.forEach(t),Ga.forEach(t),me=h(o),W=a(o,"P",{});var xa=l(W);O=i(xa,"OpenAI GPT-2 model was proposed in "),ee=a(xa,"A",{href:!0,rel:!0});var fl=l(ee);te=i(fl,"Language Models are Unsupervised Multitask Learners"),fl.forEach(t),z=i(xa,` by Alec
Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei and Ilya Sutskever. It\u2019s a causal (unidirectional)
transformer pretrained using language modeling on a very large corpus of ~40 GB of text data.`),xa.forEach(t),q=h(o),ie=a(o,"P",{});var gl=l(ie);V=i(gl,"The abstract from the paper is the following:"),gl.forEach(t),fe=h(o),le=a(o,"P",{});var _l=l(le);A=a(_l,"EM",{});var Tl=l(A);ve=i(Tl,`GPT-2 is a large transformer-based language model with 1.5 billion parameters, trained on a dataset[1] of 8 million
web pages. GPT-2 is trained with a simple objective: predict the next word, given all of the previous words within some
text. The diversity of the dataset causes this simple goal to contain naturally occurring demonstrations of many tasks
across diverse domains. GPT-2 is a direct scale-up of GPT, with more than 10X the parameters and trained on more than
10X the amount of data.`),Tl.forEach(t),_l.forEach(t),ge=h(o),E=a(o,"P",{});var vl=l(E);be=i(vl,"Tips:"),vl.forEach(t),U=h(o),R=a(o,"UL",{});var Pt=l(R);de=a(Pt,"LI",{});var bl=l(de);K=i(bl,`GPT-2 is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),bl.forEach(t),ye=h(Pt),oe=a(Pt,"LI",{});var Fa=l(oe);N=i(Fa,`GPT-2 was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ce=a(Fa,"EM",{});var yl=l(ce);J=i(yl,"run_generation.py"),yl.forEach(t),ke=i(Fa," example script."),Fa.forEach(t),b=h(Pt),x=a(Pt,"LI",{});var ue=l(x);ne=i(ue,"The model can take the "),Ee=a(ue,"EM",{});var kl=l(Ee);Ae=i(kl,"past_key_values"),kl.forEach(t),H=i(ue," (for PyTorch) or "),qe=a(ue,"EM",{});var wl=l(qe);We=i(wl,"past"),wl.forEach(t),Ue=i(ue,` (for TF) as input, which is the previously computed
key/value attention pairs. Using this (`),D=a(ue,"EM",{});var $l=l(D);X=i($l,"past_key_values"),$l.forEach(t),Re=i(ue," or "),Ce=a(ue,"EM",{});var Pl=l(Ce);Y=i(Pl,"past"),Pl.forEach(t),Be=i(ue,`) value prevents the model from re-computing
pre-computed values in the context of text generation. For PyTorch, see `),De=a(ue,"EM",{});var Ml=l(De);we=i(Ml,"past_key_values"),Ml.forEach(t),Ve=i(ue,` argument of the
`),za=a(ue,"A",{href:!0});var Gl=l(za);hc=i(Gl,"GPT2Model.forward()"),Gl.forEach(t),uc=i(ue," method, or for TF the "),$r=a(ue,"EM",{});var xl=l($r);mc=i(xl,"past"),xl.forEach(t),fc=i(ue,` argument of the
`),Ea=a(ue,"A",{href:!0});var Fl=l(Ea);gc=i(Fl,"TFGPT2Model.call()"),Fl.forEach(t),_c=i(ue," method for more information on its usage."),ue.forEach(t),Tc=h(Pt),yt=a(Pt,"LI",{});var Mt=l(yt);vc=i(Mt,"Enabling the "),Pr=a(Mt,"EM",{});var jl=l(Pr);bc=i(jl,"scale_attn_by_inverse_layer_idx"),jl.forEach(t),yc=i(Mt," and "),Mr=a(Mt,"EM",{});var zl=l(Mr);kc=i(zl,"reorder_and_upcast_attn"),zl.forEach(t),wc=i(Mt,` flags will apply the training stability
improvements from `),Cn=a(Mt,"A",{href:!0,rel:!0});var El=l(Cn);$c=i(El,"Mistral"),El.forEach(t),Pc=i(Mt," (for PyTorch only)."),Mt.forEach(t),Pt.forEach(t),Hl=h(o),Lt=a(o,"P",{});var vn=l(Lt);Dn=a(vn,"A",{href:!0,rel:!0});var ql=l(Dn);Mc=i(ql,"Write With Transformer"),ql.forEach(t),Gc=i(vn,` is a webapp created and hosted by
Hugging Face showcasing the generative capabilities of several models. GPT-2 is one of them and is available in five
different sizes: small, medium, large, xl and a distilled version of the small checkpoint: `),Gr=a(vn,"EM",{});var Cl=l(Gr);xc=i(Cl,"distilgpt-2"),Cl.forEach(t),Fc=i(vn,"."),vn.forEach(t),Il=h(o),Gt=a(o,"P",{});var fo=l(Gt);jc=i(fo,"This model was contributed by "),Ln=a(fo,"A",{href:!0,rel:!0});var Dl=l(Ln);zc=i(Dl,"thomwolf"),Dl.forEach(t),Ec=i(fo,". The original code can be found "),On=a(fo,"A",{href:!0,rel:!0});var Ll=l(On);qc=i(Ll,"here"),Ll.forEach(t),Cc=i(fo,"."),fo.forEach(t),Sl=h(o),Ot=a(o,"H2",{class:!0});var ja=l(Ot);go=a(ja,"A",{id:!0,class:!0,href:!0});var Ol=l(go);xr=a(Ol,"SPAN",{});var Nl=l(xr);k(Nn.$$.fragment,Nl),Nl.forEach(t),Ol.forEach(t),Dc=h(ja),Fr=a(ja,"SPAN",{});var x_=l(Fr);Lc=i(x_,"GPT2Config"),x_.forEach(t),ja.forEach(t),Al=h(o),at=a(o,"DIV",{class:!0});var bn=l(at);k(Hn.$$.fragment,bn),Oc=h(bn),kt=a(bn,"P",{});var yn=l(kt);Nc=i(yn,"This is the configuration class to store the configuration of a "),qa=a(yn,"A",{href:!0});var F_=l(qa);Hc=i(F_,"GPT2Model"),F_.forEach(t),Ic=i(yn," or a "),Ca=a(yn,"A",{href:!0});var j_=l(Ca);Sc=i(j_,"TFGPT2Model"),j_.forEach(t),Ac=i(yn,`. It is used to
instantiate a GPT-2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GPT-2
`),In=a(yn,"A",{href:!0,rel:!0});var z_=l(In);Wc=i(z_,"gpt2"),z_.forEach(t),Uc=i(yn," architecture."),yn.forEach(t),Rc=h(bn),Nt=a(bn,"P",{});var cr=l(Nt);Bc=i(cr,"Configuration objects inherit from "),Da=a(cr,"A",{href:!0});var E_=l(Da);Vc=i(E_,"PretrainedConfig"),E_.forEach(t),Kc=i(cr,` and can be used to control the model outputs. Read the
documentation from `),La=a(cr,"A",{href:!0});var q_=l(La);Jc=i(q_,"PretrainedConfig"),q_.forEach(t),Xc=i(cr," for more information."),cr.forEach(t),Yc=h(bn),k(_o.$$.fragment,bn),bn.forEach(t),Wl=h(o),Ht=a(o,"H2",{class:!0});var yd=l(Ht);To=a(yd,"A",{id:!0,class:!0,href:!0});var C_=l(To);jr=a(C_,"SPAN",{});var D_=l(jr);k(Sn.$$.fragment,D_),D_.forEach(t),C_.forEach(t),Qc=h(yd),zr=a(yd,"SPAN",{});var L_=l(zr);Zc=i(L_,"GPT2Tokenizer"),L_.forEach(t),yd.forEach(t),Ul=h(o),pe=a(o,"DIV",{class:!0});var Ie=l(pe);k(An.$$.fragment,Ie),ep=h(Ie),Er=a(Ie,"P",{});var O_=l(Er);tp=i(O_,"Construct a GPT-2 tokenizer. Based on byte-level Byte-Pair-Encoding."),O_.forEach(t),op=h(Ie),qr=a(Ie,"P",{});var N_=l(qr);np=i(N_,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),N_.forEach(t),sp=h(Ie),k(vo.$$.fragment,Ie),ap=h(Ie),Wn=a(Ie,"P",{});var kd=l(Wn);rp=i(kd,"You can get around that behavior by passing "),Cr=a(kd,"CODE",{});var H_=l(Cr);ip=i(H_,"add_prefix_space=True"),H_.forEach(t),lp=i(kd,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),kd.forEach(t),dp=h(Ie),k(bo.$$.fragment,Ie),cp=h(Ie),Un=a(Ie,"P",{});var wd=l(Un);pp=i(wd,"This tokenizer inherits from "),Oa=a(wd,"A",{href:!0});var I_=l(Oa);hp=i(I_,"PreTrainedTokenizer"),I_.forEach(t),up=i(wd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),wd.forEach(t),mp=h(Ie),Na=a(Ie,"DIV",{class:!0});var S_=l(Na);k(Rn.$$.fragment,S_),S_.forEach(t),Ie.forEach(t),Rl=h(o),It=a(o,"H2",{class:!0});var $d=l(It);yo=a($d,"A",{id:!0,class:!0,href:!0});var A_=l(yo);Dr=a(A_,"SPAN",{});var W_=l(Dr);k(Bn.$$.fragment,W_),W_.forEach(t),A_.forEach(t),fp=h($d),Lr=a($d,"SPAN",{});var U_=l(Lr);gp=i(U_,"GPT2TokenizerFast"),U_.forEach(t),$d.forEach(t),Bl=h(o),$e=a(o,"DIV",{class:!0});var Qe=l($e);k(Vn.$$.fragment,Qe),_p=h(Qe),Kn=a(Qe,"P",{});var Pd=l(Kn);Tp=i(Pd,"Construct a \u201Cfast\u201D GPT-2 tokenizer (backed by HuggingFace\u2019s "),Or=a(Pd,"EM",{});var R_=l(Or);vp=i(R_,"tokenizers"),R_.forEach(t),bp=i(Pd,` library). Based on byte-level
Byte-Pair-Encoding.`),Pd.forEach(t),yp=h(Qe),Nr=a(Qe,"P",{});var B_=l(Nr);kp=i(B_,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),B_.forEach(t),wp=h(Qe),k(ko.$$.fragment,Qe),$p=h(Qe),Jn=a(Qe,"P",{});var Md=l(Jn);Pp=i(Md,"You can get around that behavior by passing "),Hr=a(Md,"CODE",{});var V_=l(Hr);Mp=i(V_,"add_prefix_space=True"),V_.forEach(t),Gp=i(Md,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Md.forEach(t),xp=h(Qe),k(wo.$$.fragment,Qe),Fp=h(Qe),Xn=a(Qe,"P",{});var Gd=l(Xn);jp=i(Gd,"This tokenizer inherits from "),Ha=a(Gd,"A",{href:!0});var K_=l(Ha);zp=i(K_,"PreTrainedTokenizerFast"),K_.forEach(t),Ep=i(Gd,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Gd.forEach(t),Qe.forEach(t),Vl=h(o),St=a(o,"H2",{class:!0});var xd=l(St);$o=a(xd,"A",{id:!0,class:!0,href:!0});var J_=l($o);Ir=a(J_,"SPAN",{});var X_=l(Ir);k(Yn.$$.fragment,X_),X_.forEach(t),J_.forEach(t),qp=h(xd),Sr=a(xd,"SPAN",{});var Y_=l(Sr);Cp=i(Y_,"GPT2 specific outputs"),Y_.forEach(t),xd.forEach(t),Kl=h(o),At=a(o,"DIV",{class:!0});var Fd=l(At);k(Qn.$$.fragment,Fd),Dp=h(Fd),Ar=a(Fd,"P",{});var Q_=l(Ar);Lp=i(Q_,"Base class for outputs of models predicting if two sentences are consecutive or not."),Q_.forEach(t),Fd.forEach(t),Jl=h(o),Wt=a(o,"DIV",{class:!0});var jd=l(Wt);k(Zn.$$.fragment,jd),Op=h(jd),Wr=a(jd,"P",{});var Z_=l(Wr);Np=i(Z_,"Base class for outputs of models predicting if two sentences are consecutive or not."),Z_.forEach(t),jd.forEach(t),Xl=h(o),Ut=a(o,"H2",{class:!0});var zd=l(Ut);Po=a(zd,"A",{id:!0,class:!0,href:!0});var e2=l(Po);Ur=a(e2,"SPAN",{});var t2=l(Ur);k(es.$$.fragment,t2),t2.forEach(t),e2.forEach(t),Hp=h(zd),Rr=a(zd,"SPAN",{});var o2=l(Rr);Ip=i(o2,"GPT2Model"),o2.forEach(t),zd.forEach(t),Yl=h(o),Pe=a(o,"DIV",{class:!0});var Ze=l(Pe);k(ts.$$.fragment,Ze),Sp=h(Ze),Br=a(Ze,"P",{});var n2=l(Br);Ap=i(n2,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),n2.forEach(t),Wp=h(Ze),os=a(Ze,"P",{});var Ed=l(os);Up=i(Ed,"This model inherits from "),Ia=a(Ed,"A",{href:!0});var s2=l(Ia);Rp=i(s2,"PreTrainedModel"),s2.forEach(t),Bp=i(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed.forEach(t),Vp=h(Ze),ns=a(Ze,"P",{});var qd=l(ns);Kp=i(qd,"This model is also a PyTorch "),ss=a(qd,"A",{href:!0,rel:!0});var a2=l(ss);Jp=i(a2,"torch.nn.Module"),a2.forEach(t),Xp=i(qd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qd.forEach(t),Yp=h(Ze),lt=a(Ze,"DIV",{class:!0});var kn=l(lt);k(as.$$.fragment,kn),Qp=h(kn),Rt=a(kn,"P",{});var pr=l(Rt);Zp=i(pr,"The "),Sa=a(pr,"A",{href:!0});var r2=l(Sa);eh=i(r2,"GPT2Model"),r2.forEach(t),th=i(pr," forward method, overrides the "),Vr=a(pr,"CODE",{});var i2=l(Vr);oh=i(i2,"__call__"),i2.forEach(t),nh=i(pr," special method."),pr.forEach(t),sh=h(kn),k(Mo.$$.fragment,kn),ah=h(kn),k(Go.$$.fragment,kn),kn.forEach(t),rh=h(Ze),dt=a(Ze,"DIV",{class:!0});var wn=l(dt);k(rs.$$.fragment,wn),ih=h(wn),Kr=a(wn,"P",{});var l2=l(Kr);lh=i(l2,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),l2.forEach(t),dh=h(wn),Jr=a(wn,"P",{});var d2=l(Jr);ch=i(d2,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),d2.forEach(t),ph=h(wn),k(xo.$$.fragment,wn),wn.forEach(t),hh=h(Ze),xt=a(Ze,"DIV",{class:!0});var hr=l(xt);k(is.$$.fragment,hr),uh=h(hr),Xr=a(hr,"P",{});var c2=l(Xr);mh=i(c2,"Moves the model to cpu from a model parallel state."),c2.forEach(t),fh=h(hr),k(Fo.$$.fragment,hr),hr.forEach(t),Ze.forEach(t),Ql=h(o),Bt=a(o,"H2",{class:!0});var Cd=l(Bt);jo=a(Cd,"A",{id:!0,class:!0,href:!0});var p2=l(jo);Yr=a(p2,"SPAN",{});var h2=l(Yr);k(ls.$$.fragment,h2),h2.forEach(t),p2.forEach(t),gh=h(Cd),Qr=a(Cd,"SPAN",{});var u2=l(Qr);_h=i(u2,"GPT2LMHeadModel"),u2.forEach(t),Cd.forEach(t),Zl=h(o),Me=a(o,"DIV",{class:!0});var et=l(Me);k(ds.$$.fragment,et),Th=h(et),Zr=a(et,"P",{});var m2=l(Zr);vh=i(m2,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),m2.forEach(t),bh=h(et),cs=a(et,"P",{});var Dd=l(cs);yh=i(Dd,"This model inherits from "),Aa=a(Dd,"A",{href:!0});var f2=l(Aa);kh=i(f2,"PreTrainedModel"),f2.forEach(t),wh=i(Dd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dd.forEach(t),$h=h(et),ps=a(et,"P",{});var Ld=l(ps);Ph=i(Ld,"This model is also a PyTorch "),hs=a(Ld,"A",{href:!0,rel:!0});var g2=l(hs);Mh=i(g2,"torch.nn.Module"),g2.forEach(t),Gh=i(Ld,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ld.forEach(t),xh=h(et),ct=a(et,"DIV",{class:!0});var $n=l(ct);k(us.$$.fragment,$n),Fh=h($n),Vt=a($n,"P",{});var ur=l(Vt);jh=i(ur,"The "),Wa=a(ur,"A",{href:!0});var _2=l(Wa);zh=i(_2,"GPT2LMHeadModel"),_2.forEach(t),Eh=i(ur," forward method, overrides the "),ei=a(ur,"CODE",{});var T2=l(ei);qh=i(T2,"__call__"),T2.forEach(t),Ch=i(ur," special method."),ur.forEach(t),Dh=h($n),k(zo.$$.fragment,$n),Lh=h($n),k(Eo.$$.fragment,$n),$n.forEach(t),Oh=h(et),pt=a(et,"DIV",{class:!0});var Pn=l(pt);k(ms.$$.fragment,Pn),Nh=h(Pn),ti=a(Pn,"P",{});var v2=l(ti);Hh=i(v2,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),v2.forEach(t),Ih=h(Pn),oi=a(Pn,"P",{});var b2=l(oi);Sh=i(b2,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),b2.forEach(t),Ah=h(Pn),k(qo.$$.fragment,Pn),Pn.forEach(t),Wh=h(et),Ft=a(et,"DIV",{class:!0});var mr=l(Ft);k(fs.$$.fragment,mr),Uh=h(mr),ni=a(mr,"P",{});var y2=l(ni);Rh=i(y2,"Moves the model to cpu from a model parallel state."),y2.forEach(t),Bh=h(mr),k(Co.$$.fragment,mr),mr.forEach(t),et.forEach(t),ed=h(o),Kt=a(o,"H2",{class:!0});var Od=l(Kt);Do=a(Od,"A",{id:!0,class:!0,href:!0});var k2=l(Do);si=a(k2,"SPAN",{});var w2=l(si);k(gs.$$.fragment,w2),w2.forEach(t),k2.forEach(t),Vh=h(Od),ai=a(Od,"SPAN",{});var $2=l(ai);Kh=i($2,"GPT2DoubleHeadsModel"),$2.forEach(t),Od.forEach(t),td=h(o),Ke=a(o,"DIV",{class:!0});var jt=l(Ke);k(_s.$$.fragment,jt),Jh=h(jt),ri=a(jt,"P",{});var P2=l(ri);Xh=i(P2,`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),P2.forEach(t),Yh=h(jt),Ts=a(jt,"P",{});var Nd=l(Ts);Qh=i(Nd,"This model inherits from "),Ua=a(Nd,"A",{href:!0});var M2=l(Ua);Zh=i(M2,"PreTrainedModel"),M2.forEach(t),eu=i(Nd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nd.forEach(t),tu=h(jt),vs=a(jt,"P",{});var Hd=l(vs);ou=i(Hd,"This model is also a PyTorch "),bs=a(Hd,"A",{href:!0,rel:!0});var G2=l(bs);nu=i(G2,"torch.nn.Module"),G2.forEach(t),su=i(Hd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hd.forEach(t),au=h(jt),ht=a(jt,"DIV",{class:!0});var Mn=l(ht);k(ys.$$.fragment,Mn),ru=h(Mn),Jt=a(Mn,"P",{});var fr=l(Jt);iu=i(fr,"The "),Ra=a(fr,"A",{href:!0});var x2=l(Ra);lu=i(x2,"GPT2DoubleHeadsModel"),x2.forEach(t),du=i(fr," forward method, overrides the "),ii=a(fr,"CODE",{});var F2=l(ii);cu=i(F2,"__call__"),F2.forEach(t),pu=i(fr," special method."),fr.forEach(t),hu=h(Mn),k(Lo.$$.fragment,Mn),uu=h(Mn),k(Oo.$$.fragment,Mn),Mn.forEach(t),jt.forEach(t),od=h(o),Xt=a(o,"H2",{class:!0});var Id=l(Xt);No=a(Id,"A",{id:!0,class:!0,href:!0});var j2=l(No);li=a(j2,"SPAN",{});var z2=l(li);k(ks.$$.fragment,z2),z2.forEach(t),j2.forEach(t),mu=h(Id),di=a(Id,"SPAN",{});var E2=l(di);fu=i(E2,"GPT2ForSequenceClassification"),E2.forEach(t),Id.forEach(t),nd=h(o),Ge=a(o,"DIV",{class:!0});var tt=l(Ge);k(ws.$$.fragment,tt),gu=h(tt),ci=a(tt,"P",{});var q2=l(ci);_u=i(q2,"The GPT2 Model transformer with a sequence classification head on top (linear layer)."),q2.forEach(t),Tu=h(tt),Ba=a(tt,"P",{});var M_=l(Ba);Va=a(M_,"A",{href:!0});var C2=l(Va);vu=i(C2,"GPT2ForSequenceClassification"),C2.forEach(t),bu=i(M_,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),M_.forEach(t),yu=h(tt),rt=a(tt,"P",{});var zt=l(rt);ku=i(zt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),pi=a(zt,"CODE",{});var D2=l(pi);wu=i(D2,"pad_token_id"),D2.forEach(t),$u=i(zt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),hi=a(zt,"CODE",{});var L2=l(hi);Pu=i(L2,"pad_token_id"),L2.forEach(t),Mu=i(zt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ui=a(zt,"CODE",{});var O2=l(ui);Gu=i(O2,"inputs_embeds"),O2.forEach(t),xu=i(zt," are passed instead of "),mi=a(zt,"CODE",{});var N2=l(mi);Fu=i(N2,"input_ids"),N2.forEach(t),ju=i(zt,`, it does the same (take the last value in
each row of the batch).`),zt.forEach(t),zu=h(tt),$s=a(tt,"P",{});var Sd=l($s);Eu=i(Sd,"This model inherits from "),Ka=a(Sd,"A",{href:!0});var H2=l(Ka);qu=i(H2,"PreTrainedModel"),H2.forEach(t),Cu=i(Sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sd.forEach(t),Du=h(tt),Ps=a(tt,"P",{});var Ad=l(Ps);Lu=i(Ad,"This model is also a PyTorch "),Ms=a(Ad,"A",{href:!0,rel:!0});var I2=l(Ms);Ou=i(I2,"torch.nn.Module"),I2.forEach(t),Nu=i(Ad,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ad.forEach(t),Hu=h(tt),je=a(tt,"DIV",{class:!0});var ot=l(je);k(Gs.$$.fragment,ot),Iu=h(ot),Yt=a(ot,"P",{});var gr=l(Yt);Su=i(gr,"The "),Ja=a(gr,"A",{href:!0});var S2=l(Ja);Au=i(S2,"GPT2ForSequenceClassification"),S2.forEach(t),Wu=i(gr," forward method, overrides the "),fi=a(gr,"CODE",{});var A2=l(fi);Uu=i(A2,"__call__"),A2.forEach(t),Ru=i(gr," special method."),gr.forEach(t),Bu=h(ot),k(Ho.$$.fragment,ot),Vu=h(ot),k(Io.$$.fragment,ot),Ku=h(ot),k(So.$$.fragment,ot),Ju=h(ot),k(Ao.$$.fragment,ot),Xu=h(ot),k(Wo.$$.fragment,ot),ot.forEach(t),tt.forEach(t),sd=h(o),Qt=a(o,"H2",{class:!0});var Wd=l(Qt);Uo=a(Wd,"A",{id:!0,class:!0,href:!0});var W2=l(Uo);gi=a(W2,"SPAN",{});var U2=l(gi);k(xs.$$.fragment,U2),U2.forEach(t),W2.forEach(t),Yu=h(Wd),_i=a(Wd,"SPAN",{});var R2=l(_i);Qu=i(R2,"GPT2ForTokenClassification"),R2.forEach(t),Wd.forEach(t),ad=h(o),Je=a(o,"DIV",{class:!0});var Et=l(Je);k(Fs.$$.fragment,Et),Zu=h(Et),Ti=a(Et,"P",{});var B2=l(Ti);em=i(B2,`GPT2 Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),B2.forEach(t),tm=h(Et),js=a(Et,"P",{});var Ud=l(js);om=i(Ud,"This model inherits from "),Xa=a(Ud,"A",{href:!0});var V2=l(Xa);nm=i(V2,"PreTrainedModel"),V2.forEach(t),sm=i(Ud,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ud.forEach(t),am=h(Et),zs=a(Et,"P",{});var Rd=l(zs);rm=i(Rd,"This model is also a PyTorch "),Es=a(Rd,"A",{href:!0,rel:!0});var K2=l(Es);im=i(K2,"torch.nn.Module"),K2.forEach(t),lm=i(Rd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rd.forEach(t),dm=h(Et),Xe=a(Et,"DIV",{class:!0});var qt=l(Xe);k(qs.$$.fragment,qt),cm=h(qt),Zt=a(qt,"P",{});var _r=l(Zt);pm=i(_r,"The "),Ya=a(_r,"A",{href:!0});var J2=l(Ya);hm=i(J2,"GPT2ForTokenClassification"),J2.forEach(t),um=i(_r," forward method, overrides the "),vi=a(_r,"CODE",{});var X2=l(vi);mm=i(X2,"__call__"),X2.forEach(t),fm=i(_r," special method."),_r.forEach(t),gm=h(qt),k(Ro.$$.fragment,qt),_m=h(qt),k(Bo.$$.fragment,qt),Tm=h(qt),k(Vo.$$.fragment,qt),qt.forEach(t),Et.forEach(t),rd=h(o),eo=a(o,"H2",{class:!0});var Bd=l(eo);Ko=a(Bd,"A",{id:!0,class:!0,href:!0});var Y2=l(Ko);bi=a(Y2,"SPAN",{});var Q2=l(bi);k(Cs.$$.fragment,Q2),Q2.forEach(t),Y2.forEach(t),vm=h(Bd),yi=a(Bd,"SPAN",{});var Z2=l(yi);bm=i(Z2,"TFGPT2Model"),Z2.forEach(t),Bd.forEach(t),id=h(o),Le=a(o,"DIV",{class:!0});var Tt=l(Le);k(Ds.$$.fragment,Tt),ym=h(Tt),ki=a(Tt,"P",{});var eT=l(ki);km=i(eT,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),eT.forEach(t),wm=h(Tt),Ls=a(Tt,"P",{});var Vd=l(Ls);$m=i(Vd,"This model inherits from "),Qa=a(Vd,"A",{href:!0});var tT=l(Qa);Pm=i(tT,"TFPreTrainedModel"),tT.forEach(t),Mm=i(Vd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vd.forEach(t),Gm=h(Tt),Os=a(Tt,"P",{});var Kd=l(Os);xm=i(Kd,"This model is also a "),Ns=a(Kd,"A",{href:!0,rel:!0});var oT=l(Ns);Fm=i(oT,"tf.keras.Model"),oT.forEach(t),jm=i(Kd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kd.forEach(t),zm=h(Tt),k(Jo.$$.fragment,Tt),Em=h(Tt),ut=a(Tt,"DIV",{class:!0});var Gn=l(ut);k(Hs.$$.fragment,Gn),qm=h(Gn),to=a(Gn,"P",{});var Tr=l(to);Cm=i(Tr,"The "),Za=a(Tr,"A",{href:!0});var nT=l(Za);Dm=i(nT,"TFGPT2Model"),nT.forEach(t),Lm=i(Tr," forward method, overrides the "),wi=a(Tr,"CODE",{});var sT=l(wi);Om=i(sT,"__call__"),sT.forEach(t),Nm=i(Tr," special method."),Tr.forEach(t),Hm=h(Gn),k(Xo.$$.fragment,Gn),Im=h(Gn),k(Yo.$$.fragment,Gn),Gn.forEach(t),Tt.forEach(t),ld=h(o),oo=a(o,"H2",{class:!0});var Jd=l(oo);Qo=a(Jd,"A",{id:!0,class:!0,href:!0});var aT=l(Qo);$i=a(aT,"SPAN",{});var rT=l($i);k(Is.$$.fragment,rT),rT.forEach(t),aT.forEach(t),Sm=h(Jd),Pi=a(Jd,"SPAN",{});var iT=l(Pi);Am=i(iT,"TFGPT2LMHeadModel"),iT.forEach(t),Jd.forEach(t),dd=h(o),Oe=a(o,"DIV",{class:!0});var vt=l(Oe);k(Ss.$$.fragment,vt),Wm=h(vt),Mi=a(vt,"P",{});var lT=l(Mi);Um=i(lT,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),lT.forEach(t),Rm=h(vt),As=a(vt,"P",{});var Xd=l(As);Bm=i(Xd,"This model inherits from "),er=a(Xd,"A",{href:!0});var dT=l(er);Vm=i(dT,"TFPreTrainedModel"),dT.forEach(t),Km=i(Xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xd.forEach(t),Jm=h(vt),Ws=a(vt,"P",{});var Yd=l(Ws);Xm=i(Yd,"This model is also a "),Us=a(Yd,"A",{href:!0,rel:!0});var cT=l(Us);Ym=i(cT,"tf.keras.Model"),cT.forEach(t),Qm=i(Yd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yd.forEach(t),Zm=h(vt),k(Zo.$$.fragment,vt),ef=h(vt),mt=a(vt,"DIV",{class:!0});var xn=l(mt);k(Rs.$$.fragment,xn),tf=h(xn),no=a(xn,"P",{});var vr=l(no);of=i(vr,"The "),tr=a(vr,"A",{href:!0});var pT=l(tr);nf=i(pT,"TFGPT2LMHeadModel"),pT.forEach(t),sf=i(vr," forward method, overrides the "),Gi=a(vr,"CODE",{});var hT=l(Gi);af=i(hT,"__call__"),hT.forEach(t),rf=i(vr," special method."),vr.forEach(t),lf=h(xn),k(en.$$.fragment,xn),df=h(xn),k(tn.$$.fragment,xn),xn.forEach(t),vt.forEach(t),cd=h(o),so=a(o,"H2",{class:!0});var Qd=l(so);on=a(Qd,"A",{id:!0,class:!0,href:!0});var uT=l(on);xi=a(uT,"SPAN",{});var mT=l(xi);k(Bs.$$.fragment,mT),mT.forEach(t),uT.forEach(t),cf=h(Qd),Fi=a(Qd,"SPAN",{});var fT=l(Fi);pf=i(fT,"TFGPT2DoubleHeadsModel"),fT.forEach(t),Qd.forEach(t),pd=h(o),Ne=a(o,"DIV",{class:!0});var bt=l(Ne);k(Vs.$$.fragment,bt),hf=h(bt),ji=a(bt,"P",{});var gT=l(ji);uf=i(gT,`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),gT.forEach(t),mf=h(bt),Ks=a(bt,"P",{});var Zd=l(Ks);ff=i(Zd,"This model inherits from "),or=a(Zd,"A",{href:!0});var _T=l(or);gf=i(_T,"TFPreTrainedModel"),_T.forEach(t),_f=i(Zd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zd.forEach(t),Tf=h(bt),Js=a(bt,"P",{});var ec=l(Js);vf=i(ec,"This model is also a "),Xs=a(ec,"A",{href:!0,rel:!0});var TT=l(Xs);bf=i(TT,"tf.keras.Model"),TT.forEach(t),yf=i(ec,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ec.forEach(t),kf=h(bt),k(nn.$$.fragment,bt),wf=h(bt),ft=a(bt,"DIV",{class:!0});var Fn=l(ft);k(Ys.$$.fragment,Fn),$f=h(Fn),ao=a(Fn,"P",{});var br=l(ao);Pf=i(br,"The "),nr=a(br,"A",{href:!0});var vT=l(nr);Mf=i(vT,"TFGPT2DoubleHeadsModel"),vT.forEach(t),Gf=i(br," forward method, overrides the "),zi=a(br,"CODE",{});var bT=l(zi);xf=i(bT,"__call__"),bT.forEach(t),Ff=i(br," special method."),br.forEach(t),jf=h(Fn),k(sn.$$.fragment,Fn),zf=h(Fn),k(an.$$.fragment,Fn),Fn.forEach(t),bt.forEach(t),hd=h(o),ro=a(o,"H2",{class:!0});var tc=l(ro);rn=a(tc,"A",{id:!0,class:!0,href:!0});var yT=l(rn);Ei=a(yT,"SPAN",{});var kT=l(Ei);k(Qs.$$.fragment,kT),kT.forEach(t),yT.forEach(t),Ef=h(tc),qi=a(tc,"SPAN",{});var wT=l(qi);qf=i(wT,"TFGPT2ForSequenceClassification"),wT.forEach(t),tc.forEach(t),ud=h(o),he=a(o,"DIV",{class:!0});var Se=l(he);k(Zs.$$.fragment,Se),Cf=h(Se),Ci=a(Se,"P",{});var $T=l(Ci);Df=i($T,"The GPT2 Model transformer with a sequence classification head on top (linear layer)."),$T.forEach(t),Lf=h(Se),sr=a(Se,"P",{});var G_=l(sr);ar=a(G_,"A",{href:!0});var PT=l(ar);Of=i(PT,"TFGPT2ForSequenceClassification"),PT.forEach(t),Nf=i(G_,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),G_.forEach(t),Hf=h(Se),it=a(Se,"P",{});var Ct=l(it);If=i(Ct,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Di=a(Ct,"CODE",{});var MT=l(Di);Sf=i(MT,"pad_token_id"),MT.forEach(t),Af=i(Ct,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Li=a(Ct,"CODE",{});var GT=l(Li);Wf=i(GT,"pad_token_id"),GT.forEach(t),Uf=i(Ct,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Oi=a(Ct,"CODE",{});var xT=l(Oi);Rf=i(xT,"inputs_embeds"),xT.forEach(t),Bf=i(Ct," are passed instead of "),Ni=a(Ct,"CODE",{});var FT=l(Ni);Vf=i(FT,"input_ids"),FT.forEach(t),Kf=i(Ct,`, it does the same (take the last value in
each row of the batch).`),Ct.forEach(t),Jf=h(Se),ea=a(Se,"P",{});var oc=l(ea);Xf=i(oc,"This model inherits from "),rr=a(oc,"A",{href:!0});var jT=l(rr);Yf=i(jT,"TFPreTrainedModel"),jT.forEach(t),Qf=i(oc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oc.forEach(t),Zf=h(Se),ta=a(Se,"P",{});var nc=l(ta);eg=i(nc,"This model is also a "),oa=a(nc,"A",{href:!0,rel:!0});var zT=l(oa);tg=i(zT,"tf.keras.Model"),zT.forEach(t),og=i(nc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nc.forEach(t),ng=h(Se),k(ln.$$.fragment,Se),sg=h(Se),Ye=a(Se,"DIV",{class:!0});var Dt=l(Ye);k(na.$$.fragment,Dt),ag=h(Dt),io=a(Dt,"P",{});var yr=l(io);rg=i(yr,"The "),ir=a(yr,"A",{href:!0});var ET=l(ir);ig=i(ET,"TFGPT2ForSequenceClassification"),ET.forEach(t),lg=i(yr," forward method, overrides the "),Hi=a(yr,"CODE",{});var qT=l(Hi);dg=i(qT,"__call__"),qT.forEach(t),cg=i(yr," special method."),yr.forEach(t),pg=h(Dt),k(dn.$$.fragment,Dt),hg=h(Dt),k(cn.$$.fragment,Dt),ug=h(Dt),k(pn.$$.fragment,Dt),Dt.forEach(t),Se.forEach(t),md=h(o),lo=a(o,"H2",{class:!0});var sc=l(lo);hn=a(sc,"A",{id:!0,class:!0,href:!0});var CT=l(hn);Ii=a(CT,"SPAN",{});var DT=l(Ii);k(sa.$$.fragment,DT),DT.forEach(t),CT.forEach(t),mg=h(sc),Si=a(sc,"SPAN",{});var LT=l(Si);fg=i(LT,"TFSequenceClassifierOutputWithPast"),LT.forEach(t),sc.forEach(t),fd=h(o),co=a(o,"DIV",{class:!0});var ac=l(co);k(aa.$$.fragment,ac),gg=h(ac),Ai=a(ac,"P",{});var OT=l(Ai);_g=i(OT,"Base class for outputs of sentence classification models."),OT.forEach(t),ac.forEach(t),gd=h(o),po=a(o,"H2",{class:!0});var rc=l(po);un=a(rc,"A",{id:!0,class:!0,href:!0});var NT=l(un);Wi=a(NT,"SPAN",{});var HT=l(Wi);k(ra.$$.fragment,HT),HT.forEach(t),NT.forEach(t),Tg=h(rc),Ui=a(rc,"SPAN",{});var IT=l(Ui);vg=i(IT,"FlaxGPT2Model"),IT.forEach(t),rc.forEach(t),_d=h(o),xe=a(o,"DIV",{class:!0});var nt=l(xe);k(ia.$$.fragment,nt),bg=h(nt),Ri=a(nt,"P",{});var ST=l(Ri);yg=i(ST,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),ST.forEach(t),kg=h(nt),la=a(nt,"P",{});var ic=l(la);wg=i(ic,"This model inherits from "),lr=a(ic,"A",{href:!0});var AT=l(lr);$g=i(AT,"FlaxPreTrainedModel"),AT.forEach(t),Pg=i(ic,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ic.forEach(t),Mg=h(nt),da=a(nt,"P",{});var lc=l(da);Gg=i(lc,`This model is also a Flax Linen
`),ca=a(lc,"A",{href:!0,rel:!0});var WT=l(ca);xg=i(WT,"flax.nn.Module"),WT.forEach(t),Fg=i(lc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),lc.forEach(t),jg=h(nt),Bi=a(nt,"P",{});var UT=l(Bi);zg=i(UT,"Finally, this model supports inherent JAX features such as:"),UT.forEach(t),Eg=h(nt),wt=a(nt,"UL",{});var jn=l(wt);Vi=a(jn,"LI",{});var RT=l(Vi);pa=a(RT,"A",{href:!0,rel:!0});var BT=l(pa);qg=i(BT,"Just-In-Time (JIT) compilation"),BT.forEach(t),RT.forEach(t),Cg=h(jn),Ki=a(jn,"LI",{});var VT=l(Ki);ha=a(VT,"A",{href:!0,rel:!0});var KT=l(ha);Dg=i(KT,"Automatic Differentiation"),KT.forEach(t),VT.forEach(t),Lg=h(jn),Ji=a(jn,"LI",{});var JT=l(Ji);ua=a(JT,"A",{href:!0,rel:!0});var XT=l(ua);Og=i(XT,"Vectorization"),XT.forEach(t),JT.forEach(t),Ng=h(jn),Xi=a(jn,"LI",{});var YT=l(Xi);ma=a(YT,"A",{href:!0,rel:!0});var QT=l(ma);Hg=i(QT,"Parallelization"),QT.forEach(t),YT.forEach(t),jn.forEach(t),Ig=h(nt),gt=a(nt,"DIV",{class:!0});var zn=l(gt);k(fa.$$.fragment,zn),Sg=h(zn),ho=a(zn,"P",{});var kr=l(ho);Ag=i(kr,"The "),Yi=a(kr,"CODE",{});var ZT=l(Yi);Wg=i(ZT,"FlaxGPT2PreTrainedModel"),ZT.forEach(t),Ug=i(kr," forward method, overrides the "),Qi=a(kr,"CODE",{});var ev=l(Qi);Rg=i(ev,"__call__"),ev.forEach(t),Bg=i(kr," special method."),kr.forEach(t),Vg=h(zn),k(mn.$$.fragment,zn),Kg=h(zn),k(fn.$$.fragment,zn),zn.forEach(t),nt.forEach(t),Td=h(o),uo=a(o,"H2",{class:!0});var dc=l(uo);gn=a(dc,"A",{id:!0,class:!0,href:!0});var tv=l(gn);Zi=a(tv,"SPAN",{});var ov=l(Zi);k(ga.$$.fragment,ov),ov.forEach(t),tv.forEach(t),Jg=h(dc),el=a(dc,"SPAN",{});var nv=l(el);Xg=i(nv,"FlaxGPT2LMHeadModel"),nv.forEach(t),dc.forEach(t),vd=h(o),Fe=a(o,"DIV",{class:!0});var st=l(Fe);k(_a.$$.fragment,st),Yg=h(st),tl=a(st,"P",{});var sv=l(tl);Qg=i(sv,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),sv.forEach(t),Zg=h(st),Ta=a(st,"P",{});var cc=l(Ta);e_=i(cc,"This model inherits from "),dr=a(cc,"A",{href:!0});var av=l(dr);t_=i(av,"FlaxPreTrainedModel"),av.forEach(t),o_=i(cc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cc.forEach(t),n_=h(st),va=a(st,"P",{});var pc=l(va);s_=i(pc,`This model is also a Flax Linen
`),ba=a(pc,"A",{href:!0,rel:!0});var rv=l(ba);a_=i(rv,"flax.nn.Module"),rv.forEach(t),r_=i(pc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),pc.forEach(t),i_=h(st),ol=a(st,"P",{});var iv=l(ol);l_=i(iv,"Finally, this model supports inherent JAX features such as:"),iv.forEach(t),d_=h(st),$t=a(st,"UL",{});var En=l($t);nl=a(En,"LI",{});var lv=l(nl);ya=a(lv,"A",{href:!0,rel:!0});var dv=l(ya);c_=i(dv,"Just-In-Time (JIT) compilation"),dv.forEach(t),lv.forEach(t),p_=h(En),sl=a(En,"LI",{});var cv=l(sl);ka=a(cv,"A",{href:!0,rel:!0});var pv=l(ka);h_=i(pv,"Automatic Differentiation"),pv.forEach(t),cv.forEach(t),u_=h(En),al=a(En,"LI",{});var hv=l(al);wa=a(hv,"A",{href:!0,rel:!0});var uv=l(wa);m_=i(uv,"Vectorization"),uv.forEach(t),hv.forEach(t),f_=h(En),rl=a(En,"LI",{});var mv=l(rl);$a=a(mv,"A",{href:!0,rel:!0});var fv=l($a);g_=i(fv,"Parallelization"),fv.forEach(t),mv.forEach(t),En.forEach(t),__=h(st),_t=a(st,"DIV",{class:!0});var qn=l(_t);k(Pa.$$.fragment,qn),T_=h(qn),mo=a(qn,"P",{});var wr=l(mo);v_=i(wr,"The "),il=a(wr,"CODE",{});var gv=l(il);b_=i(gv,"FlaxGPT2PreTrainedModel"),gv.forEach(t),y_=i(wr," forward method, overrides the "),ll=a(wr,"CODE",{});var _v=l(ll);k_=i(_v,"__call__"),_v.forEach(t),w_=i(wr," special method."),wr.forEach(t),$_=h(qn),k(_n.$$.fragment,qn),P_=h(qn),k(Tn.$$.fragment,qn),qn.forEach(t),st.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(cb)),f(c,"id","openai-gpt2"),f(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(c,"href","#openai-gpt2"),f(u,"class","relative group"),f(B,"id","overview"),f(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(B,"href","#overview"),f(j,"class","relative group"),f(ee,"href","https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"),f(ee,"rel","nofollow"),f(za,"href","/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Model.forward"),f(Ea,"href","/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.TFGPT2Model.call"),f(Cn,"href","https://github.com/stanford-crfm/mistral/"),f(Cn,"rel","nofollow"),f(Dn,"href","https://transformer.huggingface.co/doc/gpt2-large"),f(Dn,"rel","nofollow"),f(Ln,"href","https://huggingface.co/thomwolf"),f(Ln,"rel","nofollow"),f(On,"href","https://openai.com/blog/better-language-models/"),f(On,"rel","nofollow"),f(go,"id","transformers.GPT2Config"),f(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(go,"href","#transformers.GPT2Config"),f(Ot,"class","relative group"),f(qa,"href","/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Model"),f(Ca,"href","/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.TFGPT2Model"),f(In,"href","https://huggingface.co/gpt2"),f(In,"rel","nofollow"),f(Da,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),f(La,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(To,"id","transformers.GPT2Tokenizer"),f(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(To,"href","#transformers.GPT2Tokenizer"),f(Ht,"class","relative group"),f(Oa,"href","/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(Na,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(yo,"id","transformers.GPT2TokenizerFast"),f(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(yo,"href","#transformers.GPT2TokenizerFast"),f(It,"class","relative group"),f(Ha,"href","/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($o,"id","transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"),f($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($o,"href","#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"),f(St,"class","relative group"),f(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Po,"id","transformers.GPT2Model"),f(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Po,"href","#transformers.GPT2Model"),f(Ut,"class","relative group"),f(Ia,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),f(ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ss,"rel","nofollow"),f(Sa,"href","/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2Model"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jo,"id","transformers.GPT2LMHeadModel"),f(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(jo,"href","#transformers.GPT2LMHeadModel"),f(Bt,"class","relative group"),f(Aa,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),f(hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(hs,"rel","nofollow"),f(Wa,"href","/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2LMHeadModel"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Do,"id","transformers.GPT2DoubleHeadsModel"),f(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Do,"href","#transformers.GPT2DoubleHeadsModel"),f(Kt,"class","relative group"),f(Ua,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),f(bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(bs,"rel","nofollow"),f(Ra,"href","/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(No,"id","transformers.GPT2ForSequenceClassification"),f(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(No,"href","#transformers.GPT2ForSequenceClassification"),f(Xt,"class","relative group"),f(Va,"href","/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2ForSequenceClassification"),f(Ka,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),f(Ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ms,"rel","nofollow"),f(Ja,"href","/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2ForSequenceClassification"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Uo,"id","transformers.GPT2ForTokenClassification"),f(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Uo,"href","#transformers.GPT2ForTokenClassification"),f(Qt,"class","relative group"),f(Xa,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),f(Es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Es,"rel","nofollow"),f(Ya,"href","/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.GPT2ForTokenClassification"),f(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ko,"id","transformers.TFGPT2Model"),f(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ko,"href","#transformers.TFGPT2Model"),f(eo,"class","relative group"),f(Qa,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ns,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ns,"rel","nofollow"),f(Za,"href","/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.TFGPT2Model"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qo,"id","transformers.TFGPT2LMHeadModel"),f(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qo,"href","#transformers.TFGPT2LMHeadModel"),f(oo,"class","relative group"),f(er,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),f(Us,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Us,"rel","nofollow"),f(tr,"href","/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.TFGPT2LMHeadModel"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(on,"id","transformers.TFGPT2DoubleHeadsModel"),f(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(on,"href","#transformers.TFGPT2DoubleHeadsModel"),f(so,"class","relative group"),f(or,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),f(Xs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Xs,"rel","nofollow"),f(nr,"href","/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rn,"id","transformers.TFGPT2ForSequenceClassification"),f(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rn,"href","#transformers.TFGPT2ForSequenceClassification"),f(ro,"class","relative group"),f(ar,"href","/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.TFGPT2ForSequenceClassification"),f(rr,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),f(oa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(oa,"rel","nofollow"),f(ir,"href","/docs/transformers/v4.21.3/en/model_doc/gpt2#transformers.TFGPT2ForSequenceClassification"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(hn,"id","transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"),f(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(hn,"href","#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"),f(lo,"class","relative group"),f(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(un,"id","transformers.FlaxGPT2Model"),f(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(un,"href","#transformers.FlaxGPT2Model"),f(po,"class","relative group"),f(lr,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ca,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(ca,"rel","nofollow"),f(pa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(pa,"rel","nofollow"),f(ha,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ha,"rel","nofollow"),f(ua,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ua,"rel","nofollow"),f(ma,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(ma,"rel","nofollow"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gn,"id","transformers.FlaxGPT2LMHeadModel"),f(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(gn,"href","#transformers.FlaxGPT2LMHeadModel"),f(uo,"class","relative group"),f(dr,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ba,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(ba,"rel","nofollow"),f(ya,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ya,"rel","nofollow"),f(ka,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ka,"rel","nofollow"),f(wa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(wa,"rel","nofollow"),f($a,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f($a,"rel","nofollow"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,v){e(document.head,d),_(o,T,v),_(o,u,v),e(u,c),e(c,g),w(n,g,null),e(u,m),e(u,F),e(F,Q),_(o,C,v),_(o,j,v),e(j,B),e(B,I),w(Z,I,null),e(j,_e),e(j,S),e(S,Te),_(o,me,v),_(o,W,v),e(W,O),e(W,ee),e(ee,te),e(W,z),_(o,q,v),_(o,ie,v),e(ie,V),_(o,fe,v),_(o,le,v),e(le,A),e(A,ve),_(o,ge,v),_(o,E,v),e(E,be),_(o,U,v),_(o,R,v),e(R,de),e(de,K),e(R,ye),e(R,oe),e(oe,N),e(oe,ce),e(ce,J),e(oe,ke),e(R,b),e(R,x),e(x,ne),e(x,Ee),e(Ee,Ae),e(x,H),e(x,qe),e(qe,We),e(x,Ue),e(x,D),e(D,X),e(x,Re),e(x,Ce),e(Ce,Y),e(x,Be),e(x,De),e(De,we),e(x,Ve),e(x,za),e(za,hc),e(x,uc),e(x,$r),e($r,mc),e(x,fc),e(x,Ea),e(Ea,gc),e(x,_c),e(R,Tc),e(R,yt),e(yt,vc),e(yt,Pr),e(Pr,bc),e(yt,yc),e(yt,Mr),e(Mr,kc),e(yt,wc),e(yt,Cn),e(Cn,$c),e(yt,Pc),_(o,Hl,v),_(o,Lt,v),e(Lt,Dn),e(Dn,Mc),e(Lt,Gc),e(Lt,Gr),e(Gr,xc),e(Lt,Fc),_(o,Il,v),_(o,Gt,v),e(Gt,jc),e(Gt,Ln),e(Ln,zc),e(Gt,Ec),e(Gt,On),e(On,qc),e(Gt,Cc),_(o,Sl,v),_(o,Ot,v),e(Ot,go),e(go,xr),w(Nn,xr,null),e(Ot,Dc),e(Ot,Fr),e(Fr,Lc),_(o,Al,v),_(o,at,v),w(Hn,at,null),e(at,Oc),e(at,kt),e(kt,Nc),e(kt,qa),e(qa,Hc),e(kt,Ic),e(kt,Ca),e(Ca,Sc),e(kt,Ac),e(kt,In),e(In,Wc),e(kt,Uc),e(at,Rc),e(at,Nt),e(Nt,Bc),e(Nt,Da),e(Da,Vc),e(Nt,Kc),e(Nt,La),e(La,Jc),e(Nt,Xc),e(at,Yc),w(_o,at,null),_(o,Wl,v),_(o,Ht,v),e(Ht,To),e(To,jr),w(Sn,jr,null),e(Ht,Qc),e(Ht,zr),e(zr,Zc),_(o,Ul,v),_(o,pe,v),w(An,pe,null),e(pe,ep),e(pe,Er),e(Er,tp),e(pe,op),e(pe,qr),e(qr,np),e(pe,sp),w(vo,pe,null),e(pe,ap),e(pe,Wn),e(Wn,rp),e(Wn,Cr),e(Cr,ip),e(Wn,lp),e(pe,dp),w(bo,pe,null),e(pe,cp),e(pe,Un),e(Un,pp),e(Un,Oa),e(Oa,hp),e(Un,up),e(pe,mp),e(pe,Na),w(Rn,Na,null),_(o,Rl,v),_(o,It,v),e(It,yo),e(yo,Dr),w(Bn,Dr,null),e(It,fp),e(It,Lr),e(Lr,gp),_(o,Bl,v),_(o,$e,v),w(Vn,$e,null),e($e,_p),e($e,Kn),e(Kn,Tp),e(Kn,Or),e(Or,vp),e(Kn,bp),e($e,yp),e($e,Nr),e(Nr,kp),e($e,wp),w(ko,$e,null),e($e,$p),e($e,Jn),e(Jn,Pp),e(Jn,Hr),e(Hr,Mp),e(Jn,Gp),e($e,xp),w(wo,$e,null),e($e,Fp),e($e,Xn),e(Xn,jp),e(Xn,Ha),e(Ha,zp),e(Xn,Ep),_(o,Vl,v),_(o,St,v),e(St,$o),e($o,Ir),w(Yn,Ir,null),e(St,qp),e(St,Sr),e(Sr,Cp),_(o,Kl,v),_(o,At,v),w(Qn,At,null),e(At,Dp),e(At,Ar),e(Ar,Lp),_(o,Jl,v),_(o,Wt,v),w(Zn,Wt,null),e(Wt,Op),e(Wt,Wr),e(Wr,Np),_(o,Xl,v),_(o,Ut,v),e(Ut,Po),e(Po,Ur),w(es,Ur,null),e(Ut,Hp),e(Ut,Rr),e(Rr,Ip),_(o,Yl,v),_(o,Pe,v),w(ts,Pe,null),e(Pe,Sp),e(Pe,Br),e(Br,Ap),e(Pe,Wp),e(Pe,os),e(os,Up),e(os,Ia),e(Ia,Rp),e(os,Bp),e(Pe,Vp),e(Pe,ns),e(ns,Kp),e(ns,ss),e(ss,Jp),e(ns,Xp),e(Pe,Yp),e(Pe,lt),w(as,lt,null),e(lt,Qp),e(lt,Rt),e(Rt,Zp),e(Rt,Sa),e(Sa,eh),e(Rt,th),e(Rt,Vr),e(Vr,oh),e(Rt,nh),e(lt,sh),w(Mo,lt,null),e(lt,ah),w(Go,lt,null),e(Pe,rh),e(Pe,dt),w(rs,dt,null),e(dt,ih),e(dt,Kr),e(Kr,lh),e(dt,dh),e(dt,Jr),e(Jr,ch),e(dt,ph),w(xo,dt,null),e(Pe,hh),e(Pe,xt),w(is,xt,null),e(xt,uh),e(xt,Xr),e(Xr,mh),e(xt,fh),w(Fo,xt,null),_(o,Ql,v),_(o,Bt,v),e(Bt,jo),e(jo,Yr),w(ls,Yr,null),e(Bt,gh),e(Bt,Qr),e(Qr,_h),_(o,Zl,v),_(o,Me,v),w(ds,Me,null),e(Me,Th),e(Me,Zr),e(Zr,vh),e(Me,bh),e(Me,cs),e(cs,yh),e(cs,Aa),e(Aa,kh),e(cs,wh),e(Me,$h),e(Me,ps),e(ps,Ph),e(ps,hs),e(hs,Mh),e(ps,Gh),e(Me,xh),e(Me,ct),w(us,ct,null),e(ct,Fh),e(ct,Vt),e(Vt,jh),e(Vt,Wa),e(Wa,zh),e(Vt,Eh),e(Vt,ei),e(ei,qh),e(Vt,Ch),e(ct,Dh),w(zo,ct,null),e(ct,Lh),w(Eo,ct,null),e(Me,Oh),e(Me,pt),w(ms,pt,null),e(pt,Nh),e(pt,ti),e(ti,Hh),e(pt,Ih),e(pt,oi),e(oi,Sh),e(pt,Ah),w(qo,pt,null),e(Me,Wh),e(Me,Ft),w(fs,Ft,null),e(Ft,Uh),e(Ft,ni),e(ni,Rh),e(Ft,Bh),w(Co,Ft,null),_(o,ed,v),_(o,Kt,v),e(Kt,Do),e(Do,si),w(gs,si,null),e(Kt,Vh),e(Kt,ai),e(ai,Kh),_(o,td,v),_(o,Ke,v),w(_s,Ke,null),e(Ke,Jh),e(Ke,ri),e(ri,Xh),e(Ke,Yh),e(Ke,Ts),e(Ts,Qh),e(Ts,Ua),e(Ua,Zh),e(Ts,eu),e(Ke,tu),e(Ke,vs),e(vs,ou),e(vs,bs),e(bs,nu),e(vs,su),e(Ke,au),e(Ke,ht),w(ys,ht,null),e(ht,ru),e(ht,Jt),e(Jt,iu),e(Jt,Ra),e(Ra,lu),e(Jt,du),e(Jt,ii),e(ii,cu),e(Jt,pu),e(ht,hu),w(Lo,ht,null),e(ht,uu),w(Oo,ht,null),_(o,od,v),_(o,Xt,v),e(Xt,No),e(No,li),w(ks,li,null),e(Xt,mu),e(Xt,di),e(di,fu),_(o,nd,v),_(o,Ge,v),w(ws,Ge,null),e(Ge,gu),e(Ge,ci),e(ci,_u),e(Ge,Tu),e(Ge,Ba),e(Ba,Va),e(Va,vu),e(Ba,bu),e(Ge,yu),e(Ge,rt),e(rt,ku),e(rt,pi),e(pi,wu),e(rt,$u),e(rt,hi),e(hi,Pu),e(rt,Mu),e(rt,ui),e(ui,Gu),e(rt,xu),e(rt,mi),e(mi,Fu),e(rt,ju),e(Ge,zu),e(Ge,$s),e($s,Eu),e($s,Ka),e(Ka,qu),e($s,Cu),e(Ge,Du),e(Ge,Ps),e(Ps,Lu),e(Ps,Ms),e(Ms,Ou),e(Ps,Nu),e(Ge,Hu),e(Ge,je),w(Gs,je,null),e(je,Iu),e(je,Yt),e(Yt,Su),e(Yt,Ja),e(Ja,Au),e(Yt,Wu),e(Yt,fi),e(fi,Uu),e(Yt,Ru),e(je,Bu),w(Ho,je,null),e(je,Vu),w(Io,je,null),e(je,Ku),w(So,je,null),e(je,Ju),w(Ao,je,null),e(je,Xu),w(Wo,je,null),_(o,sd,v),_(o,Qt,v),e(Qt,Uo),e(Uo,gi),w(xs,gi,null),e(Qt,Yu),e(Qt,_i),e(_i,Qu),_(o,ad,v),_(o,Je,v),w(Fs,Je,null),e(Je,Zu),e(Je,Ti),e(Ti,em),e(Je,tm),e(Je,js),e(js,om),e(js,Xa),e(Xa,nm),e(js,sm),e(Je,am),e(Je,zs),e(zs,rm),e(zs,Es),e(Es,im),e(zs,lm),e(Je,dm),e(Je,Xe),w(qs,Xe,null),e(Xe,cm),e(Xe,Zt),e(Zt,pm),e(Zt,Ya),e(Ya,hm),e(Zt,um),e(Zt,vi),e(vi,mm),e(Zt,fm),e(Xe,gm),w(Ro,Xe,null),e(Xe,_m),w(Bo,Xe,null),e(Xe,Tm),w(Vo,Xe,null),_(o,rd,v),_(o,eo,v),e(eo,Ko),e(Ko,bi),w(Cs,bi,null),e(eo,vm),e(eo,yi),e(yi,bm),_(o,id,v),_(o,Le,v),w(Ds,Le,null),e(Le,ym),e(Le,ki),e(ki,km),e(Le,wm),e(Le,Ls),e(Ls,$m),e(Ls,Qa),e(Qa,Pm),e(Ls,Mm),e(Le,Gm),e(Le,Os),e(Os,xm),e(Os,Ns),e(Ns,Fm),e(Os,jm),e(Le,zm),w(Jo,Le,null),e(Le,Em),e(Le,ut),w(Hs,ut,null),e(ut,qm),e(ut,to),e(to,Cm),e(to,Za),e(Za,Dm),e(to,Lm),e(to,wi),e(wi,Om),e(to,Nm),e(ut,Hm),w(Xo,ut,null),e(ut,Im),w(Yo,ut,null),_(o,ld,v),_(o,oo,v),e(oo,Qo),e(Qo,$i),w(Is,$i,null),e(oo,Sm),e(oo,Pi),e(Pi,Am),_(o,dd,v),_(o,Oe,v),w(Ss,Oe,null),e(Oe,Wm),e(Oe,Mi),e(Mi,Um),e(Oe,Rm),e(Oe,As),e(As,Bm),e(As,er),e(er,Vm),e(As,Km),e(Oe,Jm),e(Oe,Ws),e(Ws,Xm),e(Ws,Us),e(Us,Ym),e(Ws,Qm),e(Oe,Zm),w(Zo,Oe,null),e(Oe,ef),e(Oe,mt),w(Rs,mt,null),e(mt,tf),e(mt,no),e(no,of),e(no,tr),e(tr,nf),e(no,sf),e(no,Gi),e(Gi,af),e(no,rf),e(mt,lf),w(en,mt,null),e(mt,df),w(tn,mt,null),_(o,cd,v),_(o,so,v),e(so,on),e(on,xi),w(Bs,xi,null),e(so,cf),e(so,Fi),e(Fi,pf),_(o,pd,v),_(o,Ne,v),w(Vs,Ne,null),e(Ne,hf),e(Ne,ji),e(ji,uf),e(Ne,mf),e(Ne,Ks),e(Ks,ff),e(Ks,or),e(or,gf),e(Ks,_f),e(Ne,Tf),e(Ne,Js),e(Js,vf),e(Js,Xs),e(Xs,bf),e(Js,yf),e(Ne,kf),w(nn,Ne,null),e(Ne,wf),e(Ne,ft),w(Ys,ft,null),e(ft,$f),e(ft,ao),e(ao,Pf),e(ao,nr),e(nr,Mf),e(ao,Gf),e(ao,zi),e(zi,xf),e(ao,Ff),e(ft,jf),w(sn,ft,null),e(ft,zf),w(an,ft,null),_(o,hd,v),_(o,ro,v),e(ro,rn),e(rn,Ei),w(Qs,Ei,null),e(ro,Ef),e(ro,qi),e(qi,qf),_(o,ud,v),_(o,he,v),w(Zs,he,null),e(he,Cf),e(he,Ci),e(Ci,Df),e(he,Lf),e(he,sr),e(sr,ar),e(ar,Of),e(sr,Nf),e(he,Hf),e(he,it),e(it,If),e(it,Di),e(Di,Sf),e(it,Af),e(it,Li),e(Li,Wf),e(it,Uf),e(it,Oi),e(Oi,Rf),e(it,Bf),e(it,Ni),e(Ni,Vf),e(it,Kf),e(he,Jf),e(he,ea),e(ea,Xf),e(ea,rr),e(rr,Yf),e(ea,Qf),e(he,Zf),e(he,ta),e(ta,eg),e(ta,oa),e(oa,tg),e(ta,og),e(he,ng),w(ln,he,null),e(he,sg),e(he,Ye),w(na,Ye,null),e(Ye,ag),e(Ye,io),e(io,rg),e(io,ir),e(ir,ig),e(io,lg),e(io,Hi),e(Hi,dg),e(io,cg),e(Ye,pg),w(dn,Ye,null),e(Ye,hg),w(cn,Ye,null),e(Ye,ug),w(pn,Ye,null),_(o,md,v),_(o,lo,v),e(lo,hn),e(hn,Ii),w(sa,Ii,null),e(lo,mg),e(lo,Si),e(Si,fg),_(o,fd,v),_(o,co,v),w(aa,co,null),e(co,gg),e(co,Ai),e(Ai,_g),_(o,gd,v),_(o,po,v),e(po,un),e(un,Wi),w(ra,Wi,null),e(po,Tg),e(po,Ui),e(Ui,vg),_(o,_d,v),_(o,xe,v),w(ia,xe,null),e(xe,bg),e(xe,Ri),e(Ri,yg),e(xe,kg),e(xe,la),e(la,wg),e(la,lr),e(lr,$g),e(la,Pg),e(xe,Mg),e(xe,da),e(da,Gg),e(da,ca),e(ca,xg),e(da,Fg),e(xe,jg),e(xe,Bi),e(Bi,zg),e(xe,Eg),e(xe,wt),e(wt,Vi),e(Vi,pa),e(pa,qg),e(wt,Cg),e(wt,Ki),e(Ki,ha),e(ha,Dg),e(wt,Lg),e(wt,Ji),e(Ji,ua),e(ua,Og),e(wt,Ng),e(wt,Xi),e(Xi,ma),e(ma,Hg),e(xe,Ig),e(xe,gt),w(fa,gt,null),e(gt,Sg),e(gt,ho),e(ho,Ag),e(ho,Yi),e(Yi,Wg),e(ho,Ug),e(ho,Qi),e(Qi,Rg),e(ho,Bg),e(gt,Vg),w(mn,gt,null),e(gt,Kg),w(fn,gt,null),_(o,Td,v),_(o,uo,v),e(uo,gn),e(gn,Zi),w(ga,Zi,null),e(uo,Jg),e(uo,el),e(el,Xg),_(o,vd,v),_(o,Fe,v),w(_a,Fe,null),e(Fe,Yg),e(Fe,tl),e(tl,Qg),e(Fe,Zg),e(Fe,Ta),e(Ta,e_),e(Ta,dr),e(dr,t_),e(Ta,o_),e(Fe,n_),e(Fe,va),e(va,s_),e(va,ba),e(ba,a_),e(va,r_),e(Fe,i_),e(Fe,ol),e(ol,l_),e(Fe,d_),e(Fe,$t),e($t,nl),e(nl,ya),e(ya,c_),e($t,p_),e($t,sl),e(sl,ka),e(ka,h_),e($t,u_),e($t,al),e(al,wa),e(wa,m_),e($t,f_),e($t,rl),e(rl,$a),e($a,g_),e(Fe,__),e(Fe,_t),w(Pa,_t,null),e(_t,T_),e(_t,mo),e(mo,v_),e(mo,il),e(il,b_),e(mo,y_),e(mo,ll),e(ll,k_),e(mo,w_),e(_t,$_),w(_n,_t,null),e(_t,P_),w(Tn,_t,null),bd=!0},p(o,[v]){const Ma={};v&2&&(Ma.$$scope={dirty:v,ctx:o}),_o.$set(Ma);const dl={};v&2&&(dl.$$scope={dirty:v,ctx:o}),vo.$set(dl);const cl={};v&2&&(cl.$$scope={dirty:v,ctx:o}),bo.$set(cl);const pl={};v&2&&(pl.$$scope={dirty:v,ctx:o}),ko.$set(pl);const Ga={};v&2&&(Ga.$$scope={dirty:v,ctx:o}),wo.$set(Ga);const hl={};v&2&&(hl.$$scope={dirty:v,ctx:o}),Mo.$set(hl);const ul={};v&2&&(ul.$$scope={dirty:v,ctx:o}),Go.$set(ul);const ml={};v&2&&(ml.$$scope={dirty:v,ctx:o}),xo.$set(ml);const xa={};v&2&&(xa.$$scope={dirty:v,ctx:o}),Fo.$set(xa);const fl={};v&2&&(fl.$$scope={dirty:v,ctx:o}),zo.$set(fl);const gl={};v&2&&(gl.$$scope={dirty:v,ctx:o}),Eo.$set(gl);const _l={};v&2&&(_l.$$scope={dirty:v,ctx:o}),qo.$set(_l);const Tl={};v&2&&(Tl.$$scope={dirty:v,ctx:o}),Co.$set(Tl);const vl={};v&2&&(vl.$$scope={dirty:v,ctx:o}),Lo.$set(vl);const Pt={};v&2&&(Pt.$$scope={dirty:v,ctx:o}),Oo.$set(Pt);const bl={};v&2&&(bl.$$scope={dirty:v,ctx:o}),Ho.$set(bl);const Fa={};v&2&&(Fa.$$scope={dirty:v,ctx:o}),Io.$set(Fa);const yl={};v&2&&(yl.$$scope={dirty:v,ctx:o}),So.$set(yl);const ue={};v&2&&(ue.$$scope={dirty:v,ctx:o}),Ao.$set(ue);const kl={};v&2&&(kl.$$scope={dirty:v,ctx:o}),Wo.$set(kl);const wl={};v&2&&(wl.$$scope={dirty:v,ctx:o}),Ro.$set(wl);const $l={};v&2&&($l.$$scope={dirty:v,ctx:o}),Bo.$set($l);const Pl={};v&2&&(Pl.$$scope={dirty:v,ctx:o}),Vo.$set(Pl);const Ml={};v&2&&(Ml.$$scope={dirty:v,ctx:o}),Jo.$set(Ml);const Gl={};v&2&&(Gl.$$scope={dirty:v,ctx:o}),Xo.$set(Gl);const xl={};v&2&&(xl.$$scope={dirty:v,ctx:o}),Yo.$set(xl);const Fl={};v&2&&(Fl.$$scope={dirty:v,ctx:o}),Zo.$set(Fl);const Mt={};v&2&&(Mt.$$scope={dirty:v,ctx:o}),en.$set(Mt);const jl={};v&2&&(jl.$$scope={dirty:v,ctx:o}),tn.$set(jl);const zl={};v&2&&(zl.$$scope={dirty:v,ctx:o}),nn.$set(zl);const El={};v&2&&(El.$$scope={dirty:v,ctx:o}),sn.$set(El);const vn={};v&2&&(vn.$$scope={dirty:v,ctx:o}),an.$set(vn);const ql={};v&2&&(ql.$$scope={dirty:v,ctx:o}),ln.$set(ql);const Cl={};v&2&&(Cl.$$scope={dirty:v,ctx:o}),dn.$set(Cl);const fo={};v&2&&(fo.$$scope={dirty:v,ctx:o}),cn.$set(fo);const Dl={};v&2&&(Dl.$$scope={dirty:v,ctx:o}),pn.$set(Dl);const Ll={};v&2&&(Ll.$$scope={dirty:v,ctx:o}),mn.$set(Ll);const ja={};v&2&&(ja.$$scope={dirty:v,ctx:o}),fn.$set(ja);const Ol={};v&2&&(Ol.$$scope={dirty:v,ctx:o}),_n.$set(Ol);const Nl={};v&2&&(Nl.$$scope={dirty:v,ctx:o}),Tn.$set(Nl)},i(o){bd||($(n.$$.fragment,o),$(Z.$$.fragment,o),$(Nn.$$.fragment,o),$(Hn.$$.fragment,o),$(_o.$$.fragment,o),$(Sn.$$.fragment,o),$(An.$$.fragment,o),$(vo.$$.fragment,o),$(bo.$$.fragment,o),$(Rn.$$.fragment,o),$(Bn.$$.fragment,o),$(Vn.$$.fragment,o),$(ko.$$.fragment,o),$(wo.$$.fragment,o),$(Yn.$$.fragment,o),$(Qn.$$.fragment,o),$(Zn.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(as.$$.fragment,o),$(Mo.$$.fragment,o),$(Go.$$.fragment,o),$(rs.$$.fragment,o),$(xo.$$.fragment,o),$(is.$$.fragment,o),$(Fo.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(us.$$.fragment,o),$(zo.$$.fragment,o),$(Eo.$$.fragment,o),$(ms.$$.fragment,o),$(qo.$$.fragment,o),$(fs.$$.fragment,o),$(Co.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(ys.$$.fragment,o),$(Lo.$$.fragment,o),$(Oo.$$.fragment,o),$(ks.$$.fragment,o),$(ws.$$.fragment,o),$(Gs.$$.fragment,o),$(Ho.$$.fragment,o),$(Io.$$.fragment,o),$(So.$$.fragment,o),$(Ao.$$.fragment,o),$(Wo.$$.fragment,o),$(xs.$$.fragment,o),$(Fs.$$.fragment,o),$(qs.$$.fragment,o),$(Ro.$$.fragment,o),$(Bo.$$.fragment,o),$(Vo.$$.fragment,o),$(Cs.$$.fragment,o),$(Ds.$$.fragment,o),$(Jo.$$.fragment,o),$(Hs.$$.fragment,o),$(Xo.$$.fragment,o),$(Yo.$$.fragment,o),$(Is.$$.fragment,o),$(Ss.$$.fragment,o),$(Zo.$$.fragment,o),$(Rs.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(Bs.$$.fragment,o),$(Vs.$$.fragment,o),$(nn.$$.fragment,o),$(Ys.$$.fragment,o),$(sn.$$.fragment,o),$(an.$$.fragment,o),$(Qs.$$.fragment,o),$(Zs.$$.fragment,o),$(ln.$$.fragment,o),$(na.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(sa.$$.fragment,o),$(aa.$$.fragment,o),$(ra.$$.fragment,o),$(ia.$$.fragment,o),$(fa.$$.fragment,o),$(mn.$$.fragment,o),$(fn.$$.fragment,o),$(ga.$$.fragment,o),$(_a.$$.fragment,o),$(Pa.$$.fragment,o),$(_n.$$.fragment,o),$(Tn.$$.fragment,o),bd=!0)},o(o){P(n.$$.fragment,o),P(Z.$$.fragment,o),P(Nn.$$.fragment,o),P(Hn.$$.fragment,o),P(_o.$$.fragment,o),P(Sn.$$.fragment,o),P(An.$$.fragment,o),P(vo.$$.fragment,o),P(bo.$$.fragment,o),P(Rn.$$.fragment,o),P(Bn.$$.fragment,o),P(Vn.$$.fragment,o),P(ko.$$.fragment,o),P(wo.$$.fragment,o),P(Yn.$$.fragment,o),P(Qn.$$.fragment,o),P(Zn.$$.fragment,o),P(es.$$.fragment,o),P(ts.$$.fragment,o),P(as.$$.fragment,o),P(Mo.$$.fragment,o),P(Go.$$.fragment,o),P(rs.$$.fragment,o),P(xo.$$.fragment,o),P(is.$$.fragment,o),P(Fo.$$.fragment,o),P(ls.$$.fragment,o),P(ds.$$.fragment,o),P(us.$$.fragment,o),P(zo.$$.fragment,o),P(Eo.$$.fragment,o),P(ms.$$.fragment,o),P(qo.$$.fragment,o),P(fs.$$.fragment,o),P(Co.$$.fragment,o),P(gs.$$.fragment,o),P(_s.$$.fragment,o),P(ys.$$.fragment,o),P(Lo.$$.fragment,o),P(Oo.$$.fragment,o),P(ks.$$.fragment,o),P(ws.$$.fragment,o),P(Gs.$$.fragment,o),P(Ho.$$.fragment,o),P(Io.$$.fragment,o),P(So.$$.fragment,o),P(Ao.$$.fragment,o),P(Wo.$$.fragment,o),P(xs.$$.fragment,o),P(Fs.$$.fragment,o),P(qs.$$.fragment,o),P(Ro.$$.fragment,o),P(Bo.$$.fragment,o),P(Vo.$$.fragment,o),P(Cs.$$.fragment,o),P(Ds.$$.fragment,o),P(Jo.$$.fragment,o),P(Hs.$$.fragment,o),P(Xo.$$.fragment,o),P(Yo.$$.fragment,o),P(Is.$$.fragment,o),P(Ss.$$.fragment,o),P(Zo.$$.fragment,o),P(Rs.$$.fragment,o),P(en.$$.fragment,o),P(tn.$$.fragment,o),P(Bs.$$.fragment,o),P(Vs.$$.fragment,o),P(nn.$$.fragment,o),P(Ys.$$.fragment,o),P(sn.$$.fragment,o),P(an.$$.fragment,o),P(Qs.$$.fragment,o),P(Zs.$$.fragment,o),P(ln.$$.fragment,o),P(na.$$.fragment,o),P(dn.$$.fragment,o),P(cn.$$.fragment,o),P(pn.$$.fragment,o),P(sa.$$.fragment,o),P(aa.$$.fragment,o),P(ra.$$.fragment,o),P(ia.$$.fragment,o),P(fa.$$.fragment,o),P(mn.$$.fragment,o),P(fn.$$.fragment,o),P(ga.$$.fragment,o),P(_a.$$.fragment,o),P(Pa.$$.fragment,o),P(_n.$$.fragment,o),P(Tn.$$.fragment,o),bd=!1},d(o){t(d),o&&t(T),o&&t(u),M(n),o&&t(C),o&&t(j),M(Z),o&&t(me),o&&t(W),o&&t(q),o&&t(ie),o&&t(fe),o&&t(le),o&&t(ge),o&&t(E),o&&t(U),o&&t(R),o&&t(Hl),o&&t(Lt),o&&t(Il),o&&t(Gt),o&&t(Sl),o&&t(Ot),M(Nn),o&&t(Al),o&&t(at),M(Hn),M(_o),o&&t(Wl),o&&t(Ht),M(Sn),o&&t(Ul),o&&t(pe),M(An),M(vo),M(bo),M(Rn),o&&t(Rl),o&&t(It),M(Bn),o&&t(Bl),o&&t($e),M(Vn),M(ko),M(wo),o&&t(Vl),o&&t(St),M(Yn),o&&t(Kl),o&&t(At),M(Qn),o&&t(Jl),o&&t(Wt),M(Zn),o&&t(Xl),o&&t(Ut),M(es),o&&t(Yl),o&&t(Pe),M(ts),M(as),M(Mo),M(Go),M(rs),M(xo),M(is),M(Fo),o&&t(Ql),o&&t(Bt),M(ls),o&&t(Zl),o&&t(Me),M(ds),M(us),M(zo),M(Eo),M(ms),M(qo),M(fs),M(Co),o&&t(ed),o&&t(Kt),M(gs),o&&t(td),o&&t(Ke),M(_s),M(ys),M(Lo),M(Oo),o&&t(od),o&&t(Xt),M(ks),o&&t(nd),o&&t(Ge),M(ws),M(Gs),M(Ho),M(Io),M(So),M(Ao),M(Wo),o&&t(sd),o&&t(Qt),M(xs),o&&t(ad),o&&t(Je),M(Fs),M(qs),M(Ro),M(Bo),M(Vo),o&&t(rd),o&&t(eo),M(Cs),o&&t(id),o&&t(Le),M(Ds),M(Jo),M(Hs),M(Xo),M(Yo),o&&t(ld),o&&t(oo),M(Is),o&&t(dd),o&&t(Oe),M(Ss),M(Zo),M(Rs),M(en),M(tn),o&&t(cd),o&&t(so),M(Bs),o&&t(pd),o&&t(Ne),M(Vs),M(nn),M(Ys),M(sn),M(an),o&&t(hd),o&&t(ro),M(Qs),o&&t(ud),o&&t(he),M(Zs),M(ln),M(na),M(dn),M(cn),M(pn),o&&t(md),o&&t(lo),M(sa),o&&t(fd),o&&t(co),M(aa),o&&t(gd),o&&t(po),M(ra),o&&t(_d),o&&t(xe),M(ia),M(fa),M(mn),M(fn),o&&t(Td),o&&t(uo),M(ga),o&&t(vd),o&&t(Fe),M(_a),M(Pa),M(_n),M(Tn)}}}const cb={local:"openai-gpt2",sections:[{local:"overview",title:"Overview"},{local:"transformers.GPT2Config",title:"GPT2Config"},{local:"transformers.GPT2Tokenizer",title:"GPT2Tokenizer"},{local:"transformers.GPT2TokenizerFast",title:"GPT2TokenizerFast"},{local:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",title:"GPT2 specific outputs"},{local:"transformers.GPT2Model",title:"GPT2Model"},{local:"transformers.GPT2LMHeadModel",title:"GPT2LMHeadModel"},{local:"transformers.GPT2DoubleHeadsModel",title:"GPT2DoubleHeadsModel"},{local:"transformers.GPT2ForSequenceClassification",title:"GPT2ForSequenceClassification"},{local:"transformers.GPT2ForTokenClassification",title:"GPT2ForTokenClassification"},{local:"transformers.TFGPT2Model",title:"TFGPT2Model"},{local:"transformers.TFGPT2LMHeadModel",title:"TFGPT2LMHeadModel"},{local:"transformers.TFGPT2DoubleHeadsModel",title:"TFGPT2DoubleHeadsModel"},{local:"transformers.TFGPT2ForSequenceClassification",title:"TFGPT2ForSequenceClassification"},{local:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",title:"TFSequenceClassifierOutputWithPast"},{local:"transformers.FlaxGPT2Model",title:"FlaxGPT2Model"},{local:"transformers.FlaxGPT2LMHeadModel",title:"FlaxGPT2LMHeadModel"}],title:"OpenAI GPT2"};function pb(G){return kv(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Tb extends Tv{constructor(d){super();vv(this,d,pb,db,bv,{})}}export{Tb as default,cb as metadata};
