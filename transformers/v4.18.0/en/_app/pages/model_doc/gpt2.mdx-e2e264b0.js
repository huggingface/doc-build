import{S as Tv,i as vv,s as bv,e as s,k as p,w as y,t as r,M as yv,c as a,d as t,m as h,a as l,x as k,h as i,b as f,F as e,g as _,y as w,q as $,o as P,B as M,v as kv,L as ae}from"../../chunks/vendor-6b77c823.js";import{T as Se}from"../../chunks/Tip-39098574.js";import{D as N}from"../../chunks/Docstring-1088f2fb.js";import{C as re}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ze}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as se}from"../../chunks/ExampleCodeBlock-5212b321.js";function wv(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Model, GPT2Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function $v(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=s("p"),T=r("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Pv(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("When used with "),m=s("code"),c=r("is_split_into_words=True"),g=r(", this tokenizer will add a space before each word (even the first one).")},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"When used with "),m=a(u,"CODE",{});var F=l(m);c=i(F,"is_split_into_words=True"),F.forEach(t),g=i(u,", this tokenizer will add a space before each word (even the first one)."),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function Mv(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2TokenizerFast
tokenizer = GPT2TokenizerFast.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2TokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPT2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=s("p"),T=r("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Gv(G){let d,T,m,c,g,n,u,F;return{c(){d=s("p"),T=r("When used with "),m=s("code"),c=r("is_split_into_words=True"),g=r(", this tokenizer needs to be instantiated with "),n=s("code"),u=r("add_prefix_space=True"),F=r(".")},l(Q){d=a(Q,"P",{});var C=l(d);T=i(C,"When used with "),m=a(C,"CODE",{});var j=l(m);c=i(j,"is_split_into_words=True"),j.forEach(t),g=i(C,", this tokenizer needs to be instantiated with "),n=a(C,"CODE",{});var B=l(n);u=i(B,"add_prefix_space=True"),B.forEach(t),F=i(C,"."),C.forEach(t)},m(Q,C){_(Q,d,C),e(d,T),e(d,m),e(m,c),e(d,g),e(d,n),e(n,u),e(d,F)},d(Q){Q&&t(d)}}}function xv(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function Fv(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, GPT2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function jv(G){let d,T,m,c,g;return c=new re({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:
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
model.parallelize(device_map)`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function zv(G){let d,T,m,c,g;return c=new re({props:{code:`# On a 4 GPU machine with gpt2-large:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Ev(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function qv(G){let d,T,m,c,g;return c=new re({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Cv(G){let d,T,m,c,g;return c=new re({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:
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
model.parallelize(device_map)`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Dv(G){let d,T,m,c,g;return c=new re({props:{code:`# On a 4 GPU machine with gpt2-large:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Nv(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function Hv(G){let d,T,m,c,g;return c=new re({props:{code:`import torch
from transformers import GPT2Tokenizer, GPT2DoubleHeadsModel

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2DoubleHeadsModel.from_pretrained("gpt2")

# Add a [CLS] to the vocabulary (we should train it also!)
num_added_tokens = tokenizer.add_special_tokens({"cls_token": "[CLS]"})

embedding_layer = model.resize_token_embeddings(
    len(tokenizer)
)  # Update the model embeddings with the new vocabulary size

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

<span class="hljs-meta">&gt;&gt;&gt; </span>embedding_layer = model.resize_token_embeddings(
<span class="hljs-meta">... </span>    <span class="hljs-built_in">len</span>(tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Update the model embeddings with the new vocabulary size</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_choices = [tokenizer.encode(s) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> choices]
<span class="hljs-meta">&gt;&gt;&gt; </span>cls_token_location = [tokens.index(tokenizer.cls_token_id) <span class="hljs-keyword">for</span> tokens <span class="hljs-keyword">in</span> encoded_choices]

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(encoded_choices).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size: 1, number of choices: 2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_token_ids = torch.tensor([cls_token_location])  <span class="hljs-comment"># Batch size: 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, mc_token_ids=mc_token_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Lv(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function Sv(G){let d,T,m,c,g;return c=new re({props:{code:`import torch
from transformers import GPT2Tokenizer, GPT2ForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("microsoft/DialogRPT-updown")
model = GPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPT2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=s("p"),T=r("Example of single-label classification:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example of single-label classification:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Iv(G){let d,T;return d=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = GPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(m){k(d.$$.fragment,m)},m(m,c){w(d,m,c),T=!0},p:ae,i(m){T||($(d.$$.fragment,m),T=!0)},o(m){P(d.$$.fragment,m),T=!1},d(m){M(d,m)}}}function Av(G){let d,T,m,c,g;return c=new re({props:{code:`import torch
from transformers import GPT2Tokenizer, GPT2ForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("microsoft/DialogRPT-updown")
model = GPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPT2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=s("p"),T=r("Example of multi-label classification:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example of multi-label classification:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Ov(G){let d,T;return d=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = GPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(m){k(d.$$.fragment,m)},m(m,c){w(d,m,c),T=!0},p:ae,i(m){T||($(d.$$.fragment,m),T=!0)},o(m){P(d.$$.fragment,m),T=!1},d(m){M(d,m)}}}function Wv(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function Uv(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, GPT2ForTokenClassification
import torch

tokenizer = GPT2Tokenizer.from_pretrained("microsoft/DialogRPT-updown")
model = GPT2ForTokenClassification.from_pretrained("microsoft/DialogRPT-updown")

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
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPT2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)

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
`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Rv(G){let d,T;return d=new re({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(m){k(d.$$.fragment,m)},m(m,c){w(d,m,c),T=!0},p:ae,i(m){T||($(d.$$.fragment,m),T=!0)},o(m){P(d.$$.fragment,m),T=!1},d(m){M(d,m)}}}function Bv(G){let d,T,m,c,g,n,u,F,Q,C,j,B,I,Z,_e,A,Te,ue,W,H,ee,te,z,q,ie,V,fe,le,O,ve,ge,E,be,U,R,de,K,ye,oe,L,ce,J,ke;return{c(){d=s("p"),T=r("TF 2.0 models accepts two formats as inputs:"),m=p(),c=s("ul"),g=s("li"),n=r("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),F=s("li"),Q=r("having all inputs as a list, tuple or dict in the first positional arguments."),C=p(),j=s("p"),B=r("This second option is useful when using "),I=s("code"),Z=r("tf.keras.Model.fit"),_e=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=s("code"),Te=r("model(inputs)"),ue=r("."),W=p(),H=s("p"),ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=p(),z=s("ul"),q=s("li"),ie=r("a single Tensor with "),V=s("code"),fe=r("input_ids"),le=r(" only and nothing else: "),O=s("code"),ve=r("model(inputs_ids)"),ge=p(),E=s("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s("code"),R=r("model([input_ids, attention_mask])"),de=r(" or "),K=s("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),oe=p(),L=s("li"),ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),ke=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){d=a(b,"P",{});var x=l(d);T=i(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),m=h(b),c=a(b,"UL",{});var ne=l(c);g=a(ne,"LI",{});var Ee=l(g);n=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),u=h(ne),F=a(ne,"LI",{});var Oe=l(F);Q=i(Oe,"having all inputs as a list, tuple or dict in the first positional arguments."),Oe.forEach(t),ne.forEach(t),C=h(b),j=a(b,"P",{});var S=l(j);B=i(S,"This second option is useful when using "),I=a(S,"CODE",{});var qe=l(I);Z=i(qe,"tf.keras.Model.fit"),qe.forEach(t),_e=i(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a(S,"CODE",{});var We=l(A);Te=i(We,"model(inputs)"),We.forEach(t),ue=i(S,"."),S.forEach(t),W=h(b),H=a(b,"P",{});var Ue=l(H);ee=i(Ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ue.forEach(t),te=h(b),z=a(b,"UL",{});var D=l(z);q=a(D,"LI",{});var X=l(q);ie=i(X,"a single Tensor with "),V=a(X,"CODE",{});var Re=l(V);fe=i(Re,"input_ids"),Re.forEach(t),le=i(X," only and nothing else: "),O=a(X,"CODE",{});var Ce=l(O);ve=i(Ce,"model(inputs_ids)"),Ce.forEach(t),X.forEach(t),ge=h(D),E=a(D,"LI",{});var Y=l(E);be=i(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(Y,"CODE",{});var Be=l(U);R=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),de=i(Y," or "),K=a(Y,"CODE",{});var De=l(K);ye=i(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),oe=h(D),L=a(D,"LI",{});var we=l(L);ce=i(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(we,"CODE",{});var Ve=l(J);ke=i(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),we.forEach(t),D.forEach(t)},m(b,x){_(b,d,x),e(d,T),_(b,m,x),_(b,c,x),e(c,g),e(g,n),e(c,u),e(c,F),e(F,Q),_(b,C,x),_(b,j,x),e(j,B),e(j,I),e(I,Z),e(j,_e),e(j,A),e(A,Te),e(j,ue),_(b,W,x),_(b,H,x),e(H,ee),_(b,te,x),_(b,z,x),e(z,q),e(q,ie),e(q,V),e(V,fe),e(q,le),e(q,O),e(O,ve),e(z,ge),e(z,E),e(E,be),e(E,U),e(U,R),e(E,de),e(E,K),e(K,ye),e(z,oe),e(z,L),e(L,ce),e(L,J),e(J,ke)},d(b){b&&t(d),b&&t(m),b&&t(c),b&&t(C),b&&t(j),b&&t(W),b&&t(H),b&&t(te),b&&t(z)}}}function Vv(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function Kv(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, TFGPT2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Jv(G){let d,T,m,c,g,n,u,F,Q,C,j,B,I,Z,_e,A,Te,ue,W,H,ee,te,z,q,ie,V,fe,le,O,ve,ge,E,be,U,R,de,K,ye,oe,L,ce,J,ke;return{c(){d=s("p"),T=r("TF 2.0 models accepts two formats as inputs:"),m=p(),c=s("ul"),g=s("li"),n=r("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),F=s("li"),Q=r("having all inputs as a list, tuple or dict in the first positional arguments."),C=p(),j=s("p"),B=r("This second option is useful when using "),I=s("code"),Z=r("tf.keras.Model.fit"),_e=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=s("code"),Te=r("model(inputs)"),ue=r("."),W=p(),H=s("p"),ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=p(),z=s("ul"),q=s("li"),ie=r("a single Tensor with "),V=s("code"),fe=r("input_ids"),le=r(" only and nothing else: "),O=s("code"),ve=r("model(inputs_ids)"),ge=p(),E=s("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s("code"),R=r("model([input_ids, attention_mask])"),de=r(" or "),K=s("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),oe=p(),L=s("li"),ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),ke=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){d=a(b,"P",{});var x=l(d);T=i(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),m=h(b),c=a(b,"UL",{});var ne=l(c);g=a(ne,"LI",{});var Ee=l(g);n=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),u=h(ne),F=a(ne,"LI",{});var Oe=l(F);Q=i(Oe,"having all inputs as a list, tuple or dict in the first positional arguments."),Oe.forEach(t),ne.forEach(t),C=h(b),j=a(b,"P",{});var S=l(j);B=i(S,"This second option is useful when using "),I=a(S,"CODE",{});var qe=l(I);Z=i(qe,"tf.keras.Model.fit"),qe.forEach(t),_e=i(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a(S,"CODE",{});var We=l(A);Te=i(We,"model(inputs)"),We.forEach(t),ue=i(S,"."),S.forEach(t),W=h(b),H=a(b,"P",{});var Ue=l(H);ee=i(Ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ue.forEach(t),te=h(b),z=a(b,"UL",{});var D=l(z);q=a(D,"LI",{});var X=l(q);ie=i(X,"a single Tensor with "),V=a(X,"CODE",{});var Re=l(V);fe=i(Re,"input_ids"),Re.forEach(t),le=i(X," only and nothing else: "),O=a(X,"CODE",{});var Ce=l(O);ve=i(Ce,"model(inputs_ids)"),Ce.forEach(t),X.forEach(t),ge=h(D),E=a(D,"LI",{});var Y=l(E);be=i(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(Y,"CODE",{});var Be=l(U);R=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),de=i(Y," or "),K=a(Y,"CODE",{});var De=l(K);ye=i(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),oe=h(D),L=a(D,"LI",{});var we=l(L);ce=i(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(we,"CODE",{});var Ve=l(J);ke=i(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),we.forEach(t),D.forEach(t)},m(b,x){_(b,d,x),e(d,T),_(b,m,x),_(b,c,x),e(c,g),e(g,n),e(c,u),e(c,F),e(F,Q),_(b,C,x),_(b,j,x),e(j,B),e(j,I),e(I,Z),e(j,_e),e(j,A),e(A,Te),e(j,ue),_(b,W,x),_(b,H,x),e(H,ee),_(b,te,x),_(b,z,x),e(z,q),e(q,ie),e(q,V),e(V,fe),e(q,le),e(q,O),e(O,ve),e(z,ge),e(z,E),e(E,be),e(E,U),e(U,R),e(E,de),e(E,K),e(K,ye),e(z,oe),e(z,L),e(L,ce),e(L,J),e(J,ke)},d(b){b&&t(d),b&&t(m),b&&t(c),b&&t(C),b&&t(j),b&&t(W),b&&t(H),b&&t(te),b&&t(z)}}}function Xv(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function Yv(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, TFGPT2LMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Qv(G){let d,T,m,c,g,n,u,F,Q,C,j,B,I,Z,_e,A,Te,ue,W,H,ee,te,z,q,ie,V,fe,le,O,ve,ge,E,be,U,R,de,K,ye,oe,L,ce,J,ke;return{c(){d=s("p"),T=r("TF 2.0 models accepts two formats as inputs:"),m=p(),c=s("ul"),g=s("li"),n=r("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),F=s("li"),Q=r("having all inputs as a list, tuple or dict in the first positional arguments."),C=p(),j=s("p"),B=r("This second option is useful when using "),I=s("code"),Z=r("tf.keras.Model.fit"),_e=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=s("code"),Te=r("model(inputs)"),ue=r("."),W=p(),H=s("p"),ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=p(),z=s("ul"),q=s("li"),ie=r("a single Tensor with "),V=s("code"),fe=r("input_ids"),le=r(" only and nothing else: "),O=s("code"),ve=r("model(inputs_ids)"),ge=p(),E=s("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s("code"),R=r("model([input_ids, attention_mask])"),de=r(" or "),K=s("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),oe=p(),L=s("li"),ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),ke=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){d=a(b,"P",{});var x=l(d);T=i(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),m=h(b),c=a(b,"UL",{});var ne=l(c);g=a(ne,"LI",{});var Ee=l(g);n=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),u=h(ne),F=a(ne,"LI",{});var Oe=l(F);Q=i(Oe,"having all inputs as a list, tuple or dict in the first positional arguments."),Oe.forEach(t),ne.forEach(t),C=h(b),j=a(b,"P",{});var S=l(j);B=i(S,"This second option is useful when using "),I=a(S,"CODE",{});var qe=l(I);Z=i(qe,"tf.keras.Model.fit"),qe.forEach(t),_e=i(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a(S,"CODE",{});var We=l(A);Te=i(We,"model(inputs)"),We.forEach(t),ue=i(S,"."),S.forEach(t),W=h(b),H=a(b,"P",{});var Ue=l(H);ee=i(Ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ue.forEach(t),te=h(b),z=a(b,"UL",{});var D=l(z);q=a(D,"LI",{});var X=l(q);ie=i(X,"a single Tensor with "),V=a(X,"CODE",{});var Re=l(V);fe=i(Re,"input_ids"),Re.forEach(t),le=i(X," only and nothing else: "),O=a(X,"CODE",{});var Ce=l(O);ve=i(Ce,"model(inputs_ids)"),Ce.forEach(t),X.forEach(t),ge=h(D),E=a(D,"LI",{});var Y=l(E);be=i(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(Y,"CODE",{});var Be=l(U);R=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),de=i(Y," or "),K=a(Y,"CODE",{});var De=l(K);ye=i(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),oe=h(D),L=a(D,"LI",{});var we=l(L);ce=i(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(we,"CODE",{});var Ve=l(J);ke=i(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),we.forEach(t),D.forEach(t)},m(b,x){_(b,d,x),e(d,T),_(b,m,x),_(b,c,x),e(c,g),e(g,n),e(c,u),e(c,F),e(F,Q),_(b,C,x),_(b,j,x),e(j,B),e(j,I),e(I,Z),e(j,_e),e(j,A),e(A,Te),e(j,ue),_(b,W,x),_(b,H,x),e(H,ee),_(b,te,x),_(b,z,x),e(z,q),e(q,ie),e(q,V),e(V,fe),e(q,le),e(q,O),e(O,ve),e(z,ge),e(z,E),e(E,be),e(E,U),e(U,R),e(E,de),e(E,K),e(K,ye),e(z,oe),e(z,L),e(L,ce),e(L,J),e(J,ke)},d(b){b&&t(d),b&&t(m),b&&t(c),b&&t(C),b&&t(j),b&&t(W),b&&t(H),b&&t(te),b&&t(z)}}}function Zv(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function eb(G){let d,T,m,c,g;return c=new re({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Update the model embeddings with the new vocabulary size</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_choices = [tokenizer.encode(s) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> choices]
<span class="hljs-meta">&gt;&gt;&gt; </span>cls_token_location = [tokens.index(tokenizer.cls_token_id) <span class="hljs-keyword">for</span> tokens <span class="hljs-keyword">in</span> encoded_choices]

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(encoded_choices)[<span class="hljs-literal">None</span>, :]  <span class="hljs-comment"># Batch size: 1, number of choices: 2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_token_ids = tf.constant([cls_token_location])  <span class="hljs-comment"># Batch size: 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, mc_token_ids=mc_token_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=s("p"),T=r("Examples:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Examples:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function tb(G){let d,T,m,c,g,n,u,F,Q,C,j,B,I,Z,_e,A,Te,ue,W,H,ee,te,z,q,ie,V,fe,le,O,ve,ge,E,be,U,R,de,K,ye,oe,L,ce,J,ke;return{c(){d=s("p"),T=r("TF 2.0 models accepts two formats as inputs:"),m=p(),c=s("ul"),g=s("li"),n=r("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),F=s("li"),Q=r("having all inputs as a list, tuple or dict in the first positional arguments."),C=p(),j=s("p"),B=r("This second option is useful when using "),I=s("code"),Z=r("tf.keras.Model.fit"),_e=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=s("code"),Te=r("model(inputs)"),ue=r("."),W=p(),H=s("p"),ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=p(),z=s("ul"),q=s("li"),ie=r("a single Tensor with "),V=s("code"),fe=r("input_ids"),le=r(" only and nothing else: "),O=s("code"),ve=r("model(inputs_ids)"),ge=p(),E=s("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s("code"),R=r("model([input_ids, attention_mask])"),de=r(" or "),K=s("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),oe=p(),L=s("li"),ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),ke=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){d=a(b,"P",{});var x=l(d);T=i(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),m=h(b),c=a(b,"UL",{});var ne=l(c);g=a(ne,"LI",{});var Ee=l(g);n=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),u=h(ne),F=a(ne,"LI",{});var Oe=l(F);Q=i(Oe,"having all inputs as a list, tuple or dict in the first positional arguments."),Oe.forEach(t),ne.forEach(t),C=h(b),j=a(b,"P",{});var S=l(j);B=i(S,"This second option is useful when using "),I=a(S,"CODE",{});var qe=l(I);Z=i(qe,"tf.keras.Model.fit"),qe.forEach(t),_e=i(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a(S,"CODE",{});var We=l(A);Te=i(We,"model(inputs)"),We.forEach(t),ue=i(S,"."),S.forEach(t),W=h(b),H=a(b,"P",{});var Ue=l(H);ee=i(Ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ue.forEach(t),te=h(b),z=a(b,"UL",{});var D=l(z);q=a(D,"LI",{});var X=l(q);ie=i(X,"a single Tensor with "),V=a(X,"CODE",{});var Re=l(V);fe=i(Re,"input_ids"),Re.forEach(t),le=i(X," only and nothing else: "),O=a(X,"CODE",{});var Ce=l(O);ve=i(Ce,"model(inputs_ids)"),Ce.forEach(t),X.forEach(t),ge=h(D),E=a(D,"LI",{});var Y=l(E);be=i(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(Y,"CODE",{});var Be=l(U);R=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),de=i(Y," or "),K=a(Y,"CODE",{});var De=l(K);ye=i(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),oe=h(D),L=a(D,"LI",{});var we=l(L);ce=i(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(we,"CODE",{});var Ve=l(J);ke=i(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),we.forEach(t),D.forEach(t)},m(b,x){_(b,d,x),e(d,T),_(b,m,x),_(b,c,x),e(c,g),e(g,n),e(c,u),e(c,F),e(F,Q),_(b,C,x),_(b,j,x),e(j,B),e(j,I),e(I,Z),e(j,_e),e(j,A),e(A,Te),e(j,ue),_(b,W,x),_(b,H,x),e(H,ee),_(b,te,x),_(b,z,x),e(z,q),e(q,ie),e(q,V),e(V,fe),e(q,le),e(q,O),e(O,ve),e(z,ge),e(z,E),e(E,be),e(E,U),e(U,R),e(E,de),e(E,K),e(K,ye),e(z,oe),e(z,L),e(L,ce),e(L,J),e(J,ke)},d(b){b&&t(d),b&&t(m),b&&t(c),b&&t(C),b&&t(j),b&&t(W),b&&t(H),b&&t(te),b&&t(z)}}}function ob(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function nb(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, TFGPT2ForSequenceClassification
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
`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function sb(G){let d,T;return d=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(d.$$.fragment)},l(m){k(d.$$.fragment,m)},m(m,c){w(d,m,c),T=!0},p:ae,i(m){T||($(d.$$.fragment,m),T=!0)},o(m){P(d.$$.fragment,m),T=!1},d(m){M(d,m)}}}function ab(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function rb(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, FlaxGPT2Model

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = FlaxGPT2Model.from_pretrained("gpt2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxGPT2Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPT2Model.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function ib(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function lb(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, FlaxGPT2LMHeadModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function db(G){let d,T,m,c,g,n,u,F,Q,C,j,B,I,Z,_e,A,Te,ue,W,H,ee,te,z,q,ie,V,fe,le,O,ve,ge,E,be,U,R,de,K,ye,oe,L,ce,J,ke,b,x,ne,Ee,Oe,S,qe,We,Ue,D,X,Re,Ce,Y,Be,De,we,Ve,za,hc,mc,$r,uc,fc,Ea,gc,_c,Tc,yt,vc,Pr,bc,yc,Mr,kc,wc,Cn,$c,Pc,Sl,Nt,Dn,Mc,Gc,Gr,xc,Fc,Il,Gt,jc,Nn,zc,Ec,Hn,qc,Cc,Al,Ht,go,xr,Ln,Dc,Fr,Nc,Ol,at,Sn,Hc,kt,Lc,qa,Sc,Ic,Ca,Ac,Oc,In,Wc,Uc,Rc,Lt,Bc,Da,Vc,Kc,Na,Jc,Xc,Yc,_o,Wl,St,To,jr,An,Qc,zr,Zc,Ul,pe,On,ep,Er,tp,op,qr,np,sp,vo,ap,Wn,rp,Cr,ip,lp,dp,bo,cp,Un,pp,Ha,hp,mp,up,La,Rn,Rl,It,yo,Dr,Bn,fp,Nr,gp,Bl,$e,Vn,_p,Kn,Tp,Hr,vp,bp,yp,Lr,kp,wp,ko,$p,Jn,Pp,Sr,Mp,Gp,xp,wo,Fp,Xn,jp,Sa,zp,Ep,Vl,At,$o,Ir,Yn,qp,Ar,Cp,Kl,Ot,Qn,Dp,Or,Np,Jl,Wt,Zn,Hp,Wr,Lp,Xl,Ut,Po,Ur,es,Sp,Rr,Ip,Yl,Pe,ts,Ap,Br,Op,Wp,os,Up,Ia,Rp,Bp,Vp,ns,Kp,ss,Jp,Xp,Yp,lt,as,Qp,Rt,Zp,Aa,eh,th,Vr,oh,nh,sh,Mo,ah,Go,rh,dt,rs,ih,Kr,lh,dh,Jr,ch,ph,xo,hh,xt,is,mh,Xr,uh,fh,Fo,Ql,Bt,jo,Yr,ls,gh,Qr,_h,Zl,Me,ds,Th,Zr,vh,bh,cs,yh,Oa,kh,wh,$h,ps,Ph,hs,Mh,Gh,xh,ct,ms,Fh,Vt,jh,Wa,zh,Eh,ei,qh,Ch,Dh,zo,Nh,Eo,Hh,pt,us,Lh,ti,Sh,Ih,oi,Ah,Oh,qo,Wh,Ft,fs,Uh,ni,Rh,Bh,Co,ed,Kt,Do,si,gs,Vh,ai,Kh,td,Ke,_s,Jh,ri,Xh,Yh,Ts,Qh,Ua,Zh,em,tm,vs,om,bs,nm,sm,am,ht,ys,rm,Jt,im,Ra,lm,dm,ii,cm,pm,hm,No,mm,Ho,od,Xt,Lo,li,ks,um,di,fm,nd,Ge,ws,gm,ci,_m,Tm,Ba,Va,vm,bm,ym,rt,km,pi,wm,$m,hi,Pm,Mm,mi,Gm,xm,ui,Fm,jm,zm,$s,Em,Ka,qm,Cm,Dm,Ps,Nm,Ms,Hm,Lm,Sm,je,Gs,Im,Yt,Am,Ja,Om,Wm,fi,Um,Rm,Bm,So,Vm,Io,Km,Ao,Jm,Oo,Xm,Wo,sd,Qt,Uo,gi,xs,Ym,_i,Qm,ad,Je,Fs,Zm,Ti,eu,tu,js,ou,Xa,nu,su,au,zs,ru,Es,iu,lu,du,Xe,qs,cu,Zt,pu,Ya,hu,mu,vi,uu,fu,gu,Ro,_u,Bo,Tu,Vo,rd,eo,Ko,bi,Cs,vu,yi,bu,id,Ne,Ds,yu,ki,ku,wu,Ns,$u,Qa,Pu,Mu,Gu,Hs,xu,Ls,Fu,ju,zu,Jo,Eu,mt,Ss,qu,to,Cu,Za,Du,Nu,wi,Hu,Lu,Su,Xo,Iu,Yo,ld,oo,Qo,$i,Is,Au,Pi,Ou,dd,He,As,Wu,Mi,Uu,Ru,Os,Bu,er,Vu,Ku,Ju,Ws,Xu,Us,Yu,Qu,Zu,Zo,ef,ut,Rs,tf,no,of,tr,nf,sf,Gi,af,rf,lf,en,df,tn,cd,so,on,xi,Bs,cf,Fi,pf,pd,Le,Vs,hf,ji,mf,uf,Ks,ff,or,gf,_f,Tf,Js,vf,Xs,bf,yf,kf,nn,wf,ft,Ys,$f,ao,Pf,nr,Mf,Gf,zi,xf,Ff,jf,sn,zf,an,hd,ro,rn,Ei,Qs,Ef,qi,qf,md,he,Zs,Cf,Ci,Df,Nf,sr,ar,Hf,Lf,Sf,it,If,Di,Af,Of,Ni,Wf,Uf,Hi,Rf,Bf,Li,Vf,Kf,Jf,ea,Xf,rr,Yf,Qf,Zf,ta,eg,oa,tg,og,ng,ln,sg,Ye,na,ag,io,rg,ir,ig,lg,Si,dg,cg,pg,dn,hg,cn,mg,pn,ud,lo,hn,Ii,sa,ug,Ai,fg,fd,co,aa,gg,Oi,_g,gd,po,mn,Wi,ra,Tg,Ui,vg,_d,xe,ia,bg,Ri,yg,kg,la,wg,lr,$g,Pg,Mg,da,Gg,ca,xg,Fg,jg,Bi,zg,Eg,wt,Vi,pa,qg,Cg,Ki,ha,Dg,Ng,Ji,ma,Hg,Lg,Xi,ua,Sg,Ig,gt,fa,Ag,ho,Og,Yi,Wg,Ug,Qi,Rg,Bg,Vg,un,Kg,fn,Td,mo,gn,Zi,ga,Jg,el,Xg,vd,Fe,_a,Yg,tl,Qg,Zg,Ta,e_,dr,t_,o_,n_,va,s_,ba,a_,r_,i_,ol,l_,d_,$t,nl,ya,c_,p_,sl,ka,h_,m_,al,wa,u_,f_,rl,$a,g_,__,_t,Pa,T_,uo,v_,il,b_,y_,ll,k_,w_,$_,_n,P_,Tn,bd;return n=new ze({}),Z=new ze({}),Ln=new ze({}),Sn=new N({props:{name:"class transformers.GPT2Config",anchor:"transformers.GPT2Config",parameters:[{name:"vocab_size",val:" = 50257"},{name:"n_positions",val:" = 1024"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"scale_attn_by_inverse_layer_idx",val:" = False"},{name:"reorder_and_upcast_attn",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Model">GPT2Model</a> or <a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.TFGPT2Model">TFGPT2Model</a>.`,name:"vocab_size"},{anchor:"transformers.GPT2Config.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.GPT2Config.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.GPT2Config.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in for the multiple choice head in
<a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a>.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.GPT2Config.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.GPT2Config.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.GPT2Config.scale_attn_weights",description:`<strong>scale_attn_weights</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale attention weights by dividing by sqrt(hidden_size)..`,name:"scale_attn_weights"},{anchor:"transformers.GPT2Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.GPT2Config.scale_attn_by_inverse_layer_idx",description:`<strong>scale_attn_by_inverse_layer_idx</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to additionally scale attention weights by <code>1 / layer_idx + 1</code>.`,name:"scale_attn_by_inverse_layer_idx"},{anchor:"transformers.GPT2Config.reorder_and_upcast_attn",description:`<strong>reorder_and_upcast_attn</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to scale keys (K) prior to computing attention (dot-product) and upcast attention
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/configuration_gpt2.py#L38"}}),_o=new se({props:{anchor:"transformers.GPT2Config.example",$$slots:{default:[wv]},$$scope:{ctx:G}}}),An=new ze({}),On=new N({props:{name:"class transformers.GPT2Tokenizer",anchor:"transformers.GPT2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.GPT2Tokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.GPT2Tokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.GPT2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.GPT2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.GPT2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.GPT2Tokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (GPT2 tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/tokenization_gpt2.py#L104"}}),vo=new se({props:{anchor:"transformers.GPT2Tokenizer.example",$$slots:{default:[$v]},$$scope:{ctx:G}}}),bo=new Se({props:{$$slots:{default:[Pv]},$$scope:{ctx:G}}}),Rn=new N({props:{name:"save_vocabulary",anchor:"transformers.GPT2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/tokenization_gpt2.py#L269"}}),Bn=new ze({}),Vn=new N({props:{name:"class transformers.GPT2TokenizerFast",anchor:"transformers.GPT2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/tokenization_gpt2_fast.py#L70"}}),ko=new se({props:{anchor:"transformers.GPT2TokenizerFast.example",$$slots:{default:[Mv]},$$scope:{ctx:G}}}),wo=new Se({props:{$$slots:{default:[Gv]},$$scope:{ctx:G}}}),Yn=new ze({}),Qn=new N({props:{name:"class transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_gpt2.py#L492"}}),Zn=new N({props:{name:"class transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput",anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L564"}}),es=new ze({}),ts=new N({props:{name:"class transformers.GPT2Model",anchor:"transformers.GPT2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_gpt2.py#L668"}}),as=new N({props:{name:"forward",anchor:"transformers.GPT2Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_gpt2.py#L737",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mo=new Se({props:{$$slots:{default:[xv]},$$scope:{ctx:G}}}),Go=new se({props:{anchor:"transformers.GPT2Model.forward.example",$$slots:{default:[Fv]},$$scope:{ctx:G}}}),rs=new N({props:{name:"parallelize",anchor:"transformers.GPT2Model.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the gpt2 models have the
following number of attention modules:</p>
<ul>
<li>gpt2: 12</li>
<li>gpt2-medium: 24</li>
<li>gpt2-large: 36</li>
<li>gpt2-xl: 48</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_gpt2.py#L691"}}),xo=new se({props:{anchor:"transformers.GPT2Model.parallelize.example",$$slots:{default:[jv]},$$scope:{ctx:G}}}),is=new N({props:{name:"deparallelize",anchor:"transformers.GPT2Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_gpt2.py#L711"}}),Fo=new se({props:{anchor:"transformers.GPT2Model.deparallelize.example",$$slots:{default:[zv]},$$scope:{ctx:G}}}),ls=new ze({}),ds=new N({props:{name:"class transformers.GPT2LMHeadModel",anchor:"transformers.GPT2LMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_gpt2.py#L946"}}),ms=new N({props:{name:"forward",anchor:"transformers.GPT2LMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2LMHeadModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2LMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2LMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_gpt2.py#L1015",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zo=new Se({props:{$$slots:{default:[Ev]},$$scope:{ctx:G}}}),Eo=new se({props:{anchor:"transformers.GPT2LMHeadModel.forward.example",$$slots:{default:[qv]},$$scope:{ctx:G}}}),us=new N({props:{name:"parallelize",anchor:"transformers.GPT2LMHeadModel.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the gpt2 models have the
following number of attention modules:</p>
<ul>
<li>gpt2: 12</li>
<li>gpt2-medium: 24</li>
<li>gpt2-large: 36</li>
<li>gpt2-xl: 48</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_gpt2.py#L961"}}),qo=new se({props:{anchor:"transformers.GPT2LMHeadModel.parallelize.example",$$slots:{default:[Cv]},$$scope:{ctx:G}}}),fs=new N({props:{name:"deparallelize",anchor:"transformers.GPT2LMHeadModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_gpt2.py#L973"}}),Co=new se({props:{anchor:"transformers.GPT2LMHeadModel.deparallelize.example",$$slots:{default:[Dv]},$$scope:{ctx:G}}}),gs=new ze({}),_s=new N({props:{name:"class transformers.GPT2DoubleHeadsModel",anchor:"transformers.GPT2DoubleHeadsModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2DoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_gpt2.py#L1115"}}),ys=new N({props:{name:"forward",anchor:"transformers.GPT2DoubleHeadsModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"labels",val:" = None"},{name:"mc_labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2DoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1[</code>.`,name:"mc_token_ids"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code> All labels set to
<code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>`,name:"labels"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.mc_labels",description:`<strong>mc_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"mc_labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_gpt2.py#L1189",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new Se({props:{$$slots:{default:[Nv]},$$scope:{ctx:G}}}),Ho=new se({props:{anchor:"transformers.GPT2DoubleHeadsModel.forward.example",$$slots:{default:[Hv]},$$scope:{ctx:G}}}),ks=new ze({}),ws=new N({props:{name:"class transformers.GPT2ForSequenceClassification",anchor:"transformers.GPT2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_gpt2.py#L1331"}}),Gs=new N({props:{name:"forward",anchor:"transformers.GPT2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2ForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_gpt2.py#L1347",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config"
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
`}}),So=new Se({props:{$$slots:{default:[Lv]},$$scope:{ctx:G}}}),Io=new se({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example",$$slots:{default:[Sv]},$$scope:{ctx:G}}}),Ao=new se({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-2",$$slots:{default:[Iv]},$$scope:{ctx:G}}}),Oo=new se({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-3",$$slots:{default:[Av]},$$scope:{ctx:G}}}),Wo=new se({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-4",$$slots:{default:[Ov]},$$scope:{ctx:G}}}),xs=new ze({}),Fs=new N({props:{name:"class transformers.GPT2ForTokenClassification",anchor:"transformers.GPT2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_gpt2.py#L1457"}}),qs=new N({props:{name:"forward",anchor:"transformers.GPT2ForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2ForTokenClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_gpt2.py#L1479",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new Se({props:{$$slots:{default:[Wv]},$$scope:{ctx:G}}}),Bo=new se({props:{anchor:"transformers.GPT2ForTokenClassification.forward.example",$$slots:{default:[Uv]},$$scope:{ctx:G}}}),Vo=new se({props:{anchor:"transformers.GPT2ForTokenClassification.forward.example-2",$$slots:{default:[Rv]},$$scope:{ctx:G}}}),Cs=new ze({}),Ds=new N({props:{name:"class transformers.TFGPT2Model",anchor:"transformers.TFGPT2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L703"}}),Jo=new Se({props:{$$slots:{default:[Bv]},$$scope:{ctx:G}}}),Ss=new N({props:{name:"call",anchor:"transformers.TFGPT2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2Model.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFGPT2Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L708",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xo=new Se({props:{$$slots:{default:[Vv]},$$scope:{ctx:G}}}),Yo=new se({props:{anchor:"transformers.TFGPT2Model.call.example",$$slots:{default:[Kv]},$$scope:{ctx:G}}}),Is=new ze({}),As=new N({props:{name:"class transformers.TFGPT2LMHeadModel",anchor:"transformers.TFGPT2LMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L801"}}),Zo=new Se({props:{$$slots:{default:[Jv]},$$scope:{ctx:G}}}),Rs=new N({props:{name:"call",anchor:"transformers.TFGPT2LMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2LMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2LMHeadModel.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFGPT2LMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L896",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),en=new Se({props:{$$slots:{default:[Xv]},$$scope:{ctx:G}}}),tn=new se({props:{anchor:"transformers.TFGPT2LMHeadModel.call.example",$$slots:{default:[Yv]},$$scope:{ctx:G}}}),Bs=new ze({}),Vs=new N({props:{name:"class transformers.TFGPT2DoubleHeadsModel",anchor:"transformers.TFGPT2DoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2DoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1011"}}),nn=new Se({props:{$$slots:{default:[Qv]},$$scope:{ctx:G}}}),Ys=new N({props:{name:"call",anchor:"transformers.TFGPT2DoubleHeadsModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mc_token_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2DoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1[</code>.`,name:"mc_token_ids"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1020",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),sn=new Se({props:{$$slots:{default:[Zv]},$$scope:{ctx:G}}}),an=new se({props:{anchor:"transformers.TFGPT2DoubleHeadsModel.call.example",$$slots:{default:[eb]},$$scope:{ctx:G}}}),Qs=new ze({}),Zs=new N({props:{name:"class transformers.TFGPT2ForSequenceClassification",anchor:"transformers.TFGPT2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1159"}}),ln=new Se({props:{$$slots:{default:[tb]},$$scope:{ctx:G}}}),na=new N({props:{name:"call",anchor:"transformers.TFGPT2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1171",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),dn=new Se({props:{$$slots:{default:[ob]},$$scope:{ctx:G}}}),cn=new se({props:{anchor:"transformers.TFGPT2ForSequenceClassification.call.example",$$slots:{default:[nb]},$$scope:{ctx:G}}}),pn=new se({props:{anchor:"transformers.TFGPT2ForSequenceClassification.call.example-2",$$slots:{default:[sb]},$$scope:{ctx:G}}}),sa=new ze({}),aa=new N({props:{name:"class transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/modeling_tf_outputs.py#L758"}}),ra=new ze({}),ia=new N({props:{name:"class transformers.FlaxGPT2Model",anchor:"transformers.FlaxGPT2Model",parameters:[{name:"config",val:": GPT2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPT2Model.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_flax_gpt2.py#L653"}}),fa=new N({props:{name:"__call__",anchor:"transformers.FlaxGPT2Model.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPT2Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_flax_gpt2.py#L446",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),un=new Se({props:{$$slots:{default:[ab]},$$scope:{ctx:G}}}),fn=new se({props:{anchor:"transformers.FlaxGPT2Model.__call__.example",$$slots:{default:[rb]},$$scope:{ctx:G}}}),ga=new ze({}),_a=new N({props:{name:"class transformers.FlaxGPT2LMHeadModel",anchor:"transformers.FlaxGPT2LMHeadModel",parameters:[{name:"config",val:": GPT2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPT2LMHeadModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_flax_gpt2.py#L731"}}),Pa=new N({props:{name:"__call__",anchor:"transformers.FlaxGPT2LMHeadModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gpt2/modeling_flax_gpt2.py#L446",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Config"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_n=new Se({props:{$$slots:{default:[ib]},$$scope:{ctx:G}}}),Tn=new se({props:{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.example",$$slots:{default:[lb]},$$scope:{ctx:G}}}),{c(){d=s("meta"),T=p(),m=s("h1"),c=s("a"),g=s("span"),y(n.$$.fragment),u=p(),F=s("span"),Q=r("OpenAI GPT2"),C=p(),j=s("h2"),B=s("a"),I=s("span"),y(Z.$$.fragment),_e=p(),A=s("span"),Te=r("Overview"),ue=p(),W=s("p"),H=r("OpenAI GPT-2 model was proposed in "),ee=s("a"),te=r("Language Models are Unsupervised Multitask Learners"),z=r(` by Alec
Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei and Ilya Sutskever. It\u2019s a causal (unidirectional)
transformer pretrained using language modeling on a very large corpus of ~40 GB of text data.`),q=p(),ie=s("p"),V=r("The abstract from the paper is the following:"),fe=p(),le=s("p"),O=s("em"),ve=r(`GPT-2 is a large transformer-based language model with 1.5 billion parameters, trained on a dataset[1] of 8 million
web pages. GPT-2 is trained with a simple objective: predict the next word, given all of the previous words within some
text. The diversity of the dataset causes this simple goal to contain naturally occurring demonstrations of many tasks
across diverse domains. GPT-2 is a direct scale-up of GPT, with more than 10X the parameters and trained on more than
10X the amount of data.`),ge=p(),E=s("p"),be=r("Tips:"),U=p(),R=s("ul"),de=s("li"),K=r(`GPT-2 is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),ye=p(),oe=s("li"),L=r(`GPT-2 was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ce=s("em"),J=r("run_generation.py"),ke=r(" example script."),b=p(),x=s("li"),ne=r("The model can take the "),Ee=s("em"),Oe=r("past_key_values"),S=r(" (for PyTorch) or "),qe=s("em"),We=r("past"),Ue=r(` (for TF) as input, which is the previously computed
key/value attention pairs. Using this (`),D=s("em"),X=r("past_key_values"),Re=r(" or "),Ce=s("em"),Y=r("past"),Be=r(`) value prevents the model from re-computing
pre-computed values in the context of text generation. For PyTorch, see `),De=s("em"),we=r("past_key_values"),Ve=r(` argument of the
`),za=s("a"),hc=r("GPT2Model.forward()"),mc=r(" method, or for TF the "),$r=s("em"),uc=r("past"),fc=r(` argument of the
`),Ea=s("a"),gc=r("TFGPT2Model.call()"),_c=r(" method for more information on its usage."),Tc=p(),yt=s("li"),vc=r("Enabling the "),Pr=s("em"),bc=r("scale_attn_by_inverse_layer_idx"),yc=r(" and "),Mr=s("em"),kc=r("reorder_and_upcast_attn"),wc=r(` flags will apply the training stability
improvements from `),Cn=s("a"),$c=r("Mistral"),Pc=r(" (for PyTorch only)."),Sl=p(),Nt=s("p"),Dn=s("a"),Mc=r("Write With Transformer"),Gc=r(` is a webapp created and hosted by
Hugging Face showcasing the generative capabilities of several models. GPT-2 is one of them and is available in five
different sizes: small, medium, large, xl and a distilled version of the small checkpoint: `),Gr=s("em"),xc=r("distilgpt-2"),Fc=r("."),Il=p(),Gt=s("p"),jc=r("This model was contributed by "),Nn=s("a"),zc=r("thomwolf"),Ec=r(". The original code can be found "),Hn=s("a"),qc=r("here"),Cc=r("."),Al=p(),Ht=s("h2"),go=s("a"),xr=s("span"),y(Ln.$$.fragment),Dc=p(),Fr=s("span"),Nc=r("GPT2Config"),Ol=p(),at=s("div"),y(Sn.$$.fragment),Hc=p(),kt=s("p"),Lc=r("This is the configuration class to store the configuration of a "),qa=s("a"),Sc=r("GPT2Model"),Ic=r(" or a "),Ca=s("a"),Ac=r("TFGPT2Model"),Oc=r(`. It is used to
instantiate a GPT-2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GPT-2
`),In=s("a"),Wc=r("small"),Uc=r(" architecture."),Rc=p(),Lt=s("p"),Bc=r("Configuration objects inherit from "),Da=s("a"),Vc=r("PretrainedConfig"),Kc=r(` and can be used to control the model outputs. Read the
documentation from `),Na=s("a"),Jc=r("PretrainedConfig"),Xc=r(" for more information."),Yc=p(),y(_o.$$.fragment),Wl=p(),St=s("h2"),To=s("a"),jr=s("span"),y(An.$$.fragment),Qc=p(),zr=s("span"),Zc=r("GPT2Tokenizer"),Ul=p(),pe=s("div"),y(On.$$.fragment),ep=p(),Er=s("p"),tp=r("Construct a GPT-2 tokenizer. Based on byte-level Byte-Pair-Encoding."),op=p(),qr=s("p"),np=r("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),sp=p(),y(vo.$$.fragment),ap=p(),Wn=s("p"),rp=r("You can get around that behavior by passing "),Cr=s("code"),ip=r("add_prefix_space=True"),lp=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),dp=p(),y(bo.$$.fragment),cp=p(),Un=s("p"),pp=r("This tokenizer inherits from "),Ha=s("a"),hp=r("PreTrainedTokenizer"),mp=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),up=p(),La=s("div"),y(Rn.$$.fragment),Rl=p(),It=s("h2"),yo=s("a"),Dr=s("span"),y(Bn.$$.fragment),fp=p(),Nr=s("span"),gp=r("GPT2TokenizerFast"),Bl=p(),$e=s("div"),y(Vn.$$.fragment),_p=p(),Kn=s("p"),Tp=r("Construct a \u201Cfast\u201D GPT-2 tokenizer (backed by HuggingFace\u2019s "),Hr=s("em"),vp=r("tokenizers"),bp=r(` library). Based on byte-level
Byte-Pair-Encoding.`),yp=p(),Lr=s("p"),kp=r("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),wp=p(),y(ko.$$.fragment),$p=p(),Jn=s("p"),Pp=r("You can get around that behavior by passing "),Sr=s("code"),Mp=r("add_prefix_space=True"),Gp=r(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),xp=p(),y(wo.$$.fragment),Fp=p(),Xn=s("p"),jp=r("This tokenizer inherits from "),Sa=s("a"),zp=r("PreTrainedTokenizerFast"),Ep=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vl=p(),At=s("h2"),$o=s("a"),Ir=s("span"),y(Yn.$$.fragment),qp=p(),Ar=s("span"),Cp=r("GPT2 specific outputs"),Kl=p(),Ot=s("div"),y(Qn.$$.fragment),Dp=p(),Or=s("p"),Np=r("Base class for outputs of models predicting if two sentences are consecutive or not."),Jl=p(),Wt=s("div"),y(Zn.$$.fragment),Hp=p(),Wr=s("p"),Lp=r("Base class for outputs of models predicting if two sentences are consecutive or not."),Xl=p(),Ut=s("h2"),Po=s("a"),Ur=s("span"),y(es.$$.fragment),Sp=p(),Rr=s("span"),Ip=r("GPT2Model"),Yl=p(),Pe=s("div"),y(ts.$$.fragment),Ap=p(),Br=s("p"),Op=r("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),Wp=p(),os=s("p"),Up=r("This model inherits from "),Ia=s("a"),Rp=r("PreTrainedModel"),Bp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vp=p(),ns=s("p"),Kp=r("This model is also a PyTorch "),ss=s("a"),Jp=r("torch.nn.Module"),Xp=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yp=p(),lt=s("div"),y(as.$$.fragment),Qp=p(),Rt=s("p"),Zp=r("The "),Aa=s("a"),eh=r("GPT2Model"),th=r(" forward method, overrides the "),Vr=s("code"),oh=r("__call__"),nh=r(" special method."),sh=p(),y(Mo.$$.fragment),ah=p(),y(Go.$$.fragment),rh=p(),dt=s("div"),y(rs.$$.fragment),ih=p(),Kr=s("p"),lh=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),dh=p(),Jr=s("p"),ch=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),ph=p(),y(xo.$$.fragment),hh=p(),xt=s("div"),y(is.$$.fragment),mh=p(),Xr=s("p"),uh=r("Moves the model to cpu from a model parallel state."),fh=p(),y(Fo.$$.fragment),Ql=p(),Bt=s("h2"),jo=s("a"),Yr=s("span"),y(ls.$$.fragment),gh=p(),Qr=s("span"),_h=r("GPT2LMHeadModel"),Zl=p(),Me=s("div"),y(ds.$$.fragment),Th=p(),Zr=s("p"),vh=r(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),bh=p(),cs=s("p"),yh=r("This model inherits from "),Oa=s("a"),kh=r("PreTrainedModel"),wh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$h=p(),ps=s("p"),Ph=r("This model is also a PyTorch "),hs=s("a"),Mh=r("torch.nn.Module"),Gh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xh=p(),ct=s("div"),y(ms.$$.fragment),Fh=p(),Vt=s("p"),jh=r("The "),Wa=s("a"),zh=r("GPT2LMHeadModel"),Eh=r(" forward method, overrides the "),ei=s("code"),qh=r("__call__"),Ch=r(" special method."),Dh=p(),y(zo.$$.fragment),Nh=p(),y(Eo.$$.fragment),Hh=p(),pt=s("div"),y(us.$$.fragment),Lh=p(),ti=s("p"),Sh=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Ih=p(),oi=s("p"),Ah=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Oh=p(),y(qo.$$.fragment),Wh=p(),Ft=s("div"),y(fs.$$.fragment),Uh=p(),ni=s("p"),Rh=r("Moves the model to cpu from a model parallel state."),Bh=p(),y(Co.$$.fragment),ed=p(),Kt=s("h2"),Do=s("a"),si=s("span"),y(gs.$$.fragment),Vh=p(),ai=s("span"),Kh=r("GPT2DoubleHeadsModel"),td=p(),Ke=s("div"),y(_s.$$.fragment),Jh=p(),ri=s("p"),Xh=r(`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Yh=p(),Ts=s("p"),Qh=r("This model inherits from "),Ua=s("a"),Zh=r("PreTrainedModel"),em=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tm=p(),vs=s("p"),om=r("This model is also a PyTorch "),bs=s("a"),nm=r("torch.nn.Module"),sm=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),am=p(),ht=s("div"),y(ys.$$.fragment),rm=p(),Jt=s("p"),im=r("The "),Ra=s("a"),lm=r("GPT2DoubleHeadsModel"),dm=r(" forward method, overrides the "),ii=s("code"),cm=r("__call__"),pm=r(" special method."),hm=p(),y(No.$$.fragment),mm=p(),y(Ho.$$.fragment),od=p(),Xt=s("h2"),Lo=s("a"),li=s("span"),y(ks.$$.fragment),um=p(),di=s("span"),fm=r("GPT2ForSequenceClassification"),nd=p(),Ge=s("div"),y(ws.$$.fragment),gm=p(),ci=s("p"),_m=r("The GPT2 Model transformer with a sequence classification head on top (linear layer)."),Tm=p(),Ba=s("p"),Va=s("a"),vm=r("GPT2ForSequenceClassification"),bm=r(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),ym=p(),rt=s("p"),km=r(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),pi=s("code"),wm=r("pad_token_id"),$m=r(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),hi=s("code"),Pm=r("pad_token_id"),Mm=r(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),mi=s("code"),Gm=r("inputs_embeds"),xm=r(" are passed instead of "),ui=s("code"),Fm=r("input_ids"),jm=r(`, it does the same (take the last value in
each row of the batch).`),zm=p(),$s=s("p"),Em=r("This model inherits from "),Ka=s("a"),qm=r("PreTrainedModel"),Cm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dm=p(),Ps=s("p"),Nm=r("This model is also a PyTorch "),Ms=s("a"),Hm=r("torch.nn.Module"),Lm=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sm=p(),je=s("div"),y(Gs.$$.fragment),Im=p(),Yt=s("p"),Am=r("The "),Ja=s("a"),Om=r("GPT2ForSequenceClassification"),Wm=r(" forward method, overrides the "),fi=s("code"),Um=r("__call__"),Rm=r(" special method."),Bm=p(),y(So.$$.fragment),Vm=p(),y(Io.$$.fragment),Km=p(),y(Ao.$$.fragment),Jm=p(),y(Oo.$$.fragment),Xm=p(),y(Wo.$$.fragment),sd=p(),Qt=s("h2"),Uo=s("a"),gi=s("span"),y(xs.$$.fragment),Ym=p(),_i=s("span"),Qm=r("GPT2ForTokenClassification"),ad=p(),Je=s("div"),y(Fs.$$.fragment),Zm=p(),Ti=s("p"),eu=r(`GPT2 Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),tu=p(),js=s("p"),ou=r("This model inherits from "),Xa=s("a"),nu=r("PreTrainedModel"),su=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),au=p(),zs=s("p"),ru=r("This model is also a PyTorch "),Es=s("a"),iu=r("torch.nn.Module"),lu=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),du=p(),Xe=s("div"),y(qs.$$.fragment),cu=p(),Zt=s("p"),pu=r("The "),Ya=s("a"),hu=r("GPT2ForTokenClassification"),mu=r(" forward method, overrides the "),vi=s("code"),uu=r("__call__"),fu=r(" special method."),gu=p(),y(Ro.$$.fragment),_u=p(),y(Bo.$$.fragment),Tu=p(),y(Vo.$$.fragment),rd=p(),eo=s("h2"),Ko=s("a"),bi=s("span"),y(Cs.$$.fragment),vu=p(),yi=s("span"),bu=r("TFGPT2Model"),id=p(),Ne=s("div"),y(Ds.$$.fragment),yu=p(),ki=s("p"),ku=r("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),wu=p(),Ns=s("p"),$u=r("This model inherits from "),Qa=s("a"),Pu=r("TFPreTrainedModel"),Mu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gu=p(),Hs=s("p"),xu=r("This model is also a "),Ls=s("a"),Fu=r("tf.keras.Model"),ju=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zu=p(),y(Jo.$$.fragment),Eu=p(),mt=s("div"),y(Ss.$$.fragment),qu=p(),to=s("p"),Cu=r("The "),Za=s("a"),Du=r("TFGPT2Model"),Nu=r(" forward method, overrides the "),wi=s("code"),Hu=r("__call__"),Lu=r(" special method."),Su=p(),y(Xo.$$.fragment),Iu=p(),y(Yo.$$.fragment),ld=p(),oo=s("h2"),Qo=s("a"),$i=s("span"),y(Is.$$.fragment),Au=p(),Pi=s("span"),Ou=r("TFGPT2LMHeadModel"),dd=p(),He=s("div"),y(As.$$.fragment),Wu=p(),Mi=s("p"),Uu=r(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ru=p(),Os=s("p"),Bu=r("This model inherits from "),er=s("a"),Vu=r("TFPreTrainedModel"),Ku=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ju=p(),Ws=s("p"),Xu=r("This model is also a "),Us=s("a"),Yu=r("tf.keras.Model"),Qu=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zu=p(),y(Zo.$$.fragment),ef=p(),ut=s("div"),y(Rs.$$.fragment),tf=p(),no=s("p"),of=r("The "),tr=s("a"),nf=r("TFGPT2LMHeadModel"),sf=r(" forward method, overrides the "),Gi=s("code"),af=r("__call__"),rf=r(" special method."),lf=p(),y(en.$$.fragment),df=p(),y(tn.$$.fragment),cd=p(),so=s("h2"),on=s("a"),xi=s("span"),y(Bs.$$.fragment),cf=p(),Fi=s("span"),pf=r("TFGPT2DoubleHeadsModel"),pd=p(),Le=s("div"),y(Vs.$$.fragment),hf=p(),ji=s("p"),mf=r(`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),uf=p(),Ks=s("p"),ff=r("This model inherits from "),or=s("a"),gf=r("TFPreTrainedModel"),_f=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf=p(),Js=s("p"),vf=r("This model is also a "),Xs=s("a"),bf=r("tf.keras.Model"),yf=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kf=p(),y(nn.$$.fragment),wf=p(),ft=s("div"),y(Ys.$$.fragment),$f=p(),ao=s("p"),Pf=r("The "),nr=s("a"),Mf=r("TFGPT2DoubleHeadsModel"),Gf=r(" forward method, overrides the "),zi=s("code"),xf=r("__call__"),Ff=r(" special method."),jf=p(),y(sn.$$.fragment),zf=p(),y(an.$$.fragment),hd=p(),ro=s("h2"),rn=s("a"),Ei=s("span"),y(Qs.$$.fragment),Ef=p(),qi=s("span"),qf=r("TFGPT2ForSequenceClassification"),md=p(),he=s("div"),y(Zs.$$.fragment),Cf=p(),Ci=s("p"),Df=r("The GPT2 Model transformer with a sequence classification head on top (linear layer)."),Nf=p(),sr=s("p"),ar=s("a"),Hf=r("TFGPT2ForSequenceClassification"),Lf=r(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),Sf=p(),it=s("p"),If=r(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Di=s("code"),Af=r("pad_token_id"),Of=r(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ni=s("code"),Wf=r("pad_token_id"),Uf=r(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Hi=s("code"),Rf=r("inputs_embeds"),Bf=r(" are passed instead of "),Li=s("code"),Vf=r("input_ids"),Kf=r(`, it does the same (take the last value in
each row of the batch).`),Jf=p(),ea=s("p"),Xf=r("This model inherits from "),rr=s("a"),Yf=r("TFPreTrainedModel"),Qf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zf=p(),ta=s("p"),eg=r("This model is also a "),oa=s("a"),tg=r("tf.keras.Model"),og=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ng=p(),y(ln.$$.fragment),sg=p(),Ye=s("div"),y(na.$$.fragment),ag=p(),io=s("p"),rg=r("The "),ir=s("a"),ig=r("TFGPT2ForSequenceClassification"),lg=r(" forward method, overrides the "),Si=s("code"),dg=r("__call__"),cg=r(" special method."),pg=p(),y(dn.$$.fragment),hg=p(),y(cn.$$.fragment),mg=p(),y(pn.$$.fragment),ud=p(),lo=s("h2"),hn=s("a"),Ii=s("span"),y(sa.$$.fragment),ug=p(),Ai=s("span"),fg=r("TFSequenceClassifierOutputWithPast"),fd=p(),co=s("div"),y(aa.$$.fragment),gg=p(),Oi=s("p"),_g=r("Base class for outputs of sentence classification models."),gd=p(),po=s("h2"),mn=s("a"),Wi=s("span"),y(ra.$$.fragment),Tg=p(),Ui=s("span"),vg=r("FlaxGPT2Model"),_d=p(),xe=s("div"),y(ia.$$.fragment),bg=p(),Ri=s("p"),yg=r("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),kg=p(),la=s("p"),wg=r("This model inherits from "),lr=s("a"),$g=r("FlaxPreTrainedModel"),Pg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mg=p(),da=s("p"),Gg=r(`This model is also a Flax Linen
`),ca=s("a"),xg=r("flax.nn.Module"),Fg=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jg=p(),Bi=s("p"),zg=r("Finally, this model supports inherent JAX features such as:"),Eg=p(),wt=s("ul"),Vi=s("li"),pa=s("a"),qg=r("Just-In-Time (JIT) compilation"),Cg=p(),Ki=s("li"),ha=s("a"),Dg=r("Automatic Differentiation"),Ng=p(),Ji=s("li"),ma=s("a"),Hg=r("Vectorization"),Lg=p(),Xi=s("li"),ua=s("a"),Sg=r("Parallelization"),Ig=p(),gt=s("div"),y(fa.$$.fragment),Ag=p(),ho=s("p"),Og=r("The "),Yi=s("code"),Wg=r("FlaxGPT2PreTrainedModel"),Ug=r(" forward method, overrides the "),Qi=s("code"),Rg=r("__call__"),Bg=r(" special method."),Vg=p(),y(un.$$.fragment),Kg=p(),y(fn.$$.fragment),Td=p(),mo=s("h2"),gn=s("a"),Zi=s("span"),y(ga.$$.fragment),Jg=p(),el=s("span"),Xg=r("FlaxGPT2LMHeadModel"),vd=p(),Fe=s("div"),y(_a.$$.fragment),Yg=p(),tl=s("p"),Qg=r(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Zg=p(),Ta=s("p"),e_=r("This model inherits from "),dr=s("a"),t_=r("FlaxPreTrainedModel"),o_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),n_=p(),va=s("p"),s_=r(`This model is also a Flax Linen
`),ba=s("a"),a_=r("flax.nn.Module"),r_=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),i_=p(),ol=s("p"),l_=r("Finally, this model supports inherent JAX features such as:"),d_=p(),$t=s("ul"),nl=s("li"),ya=s("a"),c_=r("Just-In-Time (JIT) compilation"),p_=p(),sl=s("li"),ka=s("a"),h_=r("Automatic Differentiation"),m_=p(),al=s("li"),wa=s("a"),u_=r("Vectorization"),f_=p(),rl=s("li"),$a=s("a"),g_=r("Parallelization"),__=p(),_t=s("div"),y(Pa.$$.fragment),T_=p(),uo=s("p"),v_=r("The "),il=s("code"),b_=r("FlaxGPT2PreTrainedModel"),y_=r(" forward method, overrides the "),ll=s("code"),k_=r("__call__"),w_=r(" special method."),$_=p(),y(_n.$$.fragment),P_=p(),y(Tn.$$.fragment),this.h()},l(o){const v=yv('[data-svelte="svelte-1phssyn"]',document.head);d=a(v,"META",{name:!0,content:!0}),v.forEach(t),T=h(o),m=a(o,"H1",{class:!0});var Ma=l(m);c=a(Ma,"A",{id:!0,class:!0,href:!0});var dl=l(c);g=a(dl,"SPAN",{});var cl=l(g);k(n.$$.fragment,cl),cl.forEach(t),dl.forEach(t),u=h(Ma),F=a(Ma,"SPAN",{});var pl=l(F);Q=i(pl,"OpenAI GPT2"),pl.forEach(t),Ma.forEach(t),C=h(o),j=a(o,"H2",{class:!0});var Ga=l(j);B=a(Ga,"A",{id:!0,class:!0,href:!0});var hl=l(B);I=a(hl,"SPAN",{});var ml=l(I);k(Z.$$.fragment,ml),ml.forEach(t),hl.forEach(t),_e=h(Ga),A=a(Ga,"SPAN",{});var ul=l(A);Te=i(ul,"Overview"),ul.forEach(t),Ga.forEach(t),ue=h(o),W=a(o,"P",{});var xa=l(W);H=i(xa,"OpenAI GPT-2 model was proposed in "),ee=a(xa,"A",{href:!0,rel:!0});var fl=l(ee);te=i(fl,"Language Models are Unsupervised Multitask Learners"),fl.forEach(t),z=i(xa,` by Alec
Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei and Ilya Sutskever. It\u2019s a causal (unidirectional)
transformer pretrained using language modeling on a very large corpus of ~40 GB of text data.`),xa.forEach(t),q=h(o),ie=a(o,"P",{});var gl=l(ie);V=i(gl,"The abstract from the paper is the following:"),gl.forEach(t),fe=h(o),le=a(o,"P",{});var _l=l(le);O=a(_l,"EM",{});var Tl=l(O);ve=i(Tl,`GPT-2 is a large transformer-based language model with 1.5 billion parameters, trained on a dataset[1] of 8 million
web pages. GPT-2 is trained with a simple objective: predict the next word, given all of the previous words within some
text. The diversity of the dataset causes this simple goal to contain naturally occurring demonstrations of many tasks
across diverse domains. GPT-2 is a direct scale-up of GPT, with more than 10X the parameters and trained on more than
10X the amount of data.`),Tl.forEach(t),_l.forEach(t),ge=h(o),E=a(o,"P",{});var vl=l(E);be=i(vl,"Tips:"),vl.forEach(t),U=h(o),R=a(o,"UL",{});var Pt=l(R);de=a(Pt,"LI",{});var bl=l(de);K=i(bl,`GPT-2 is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),bl.forEach(t),ye=h(Pt),oe=a(Pt,"LI",{});var Fa=l(oe);L=i(Fa,`GPT-2 was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ce=a(Fa,"EM",{});var yl=l(ce);J=i(yl,"run_generation.py"),yl.forEach(t),ke=i(Fa," example script."),Fa.forEach(t),b=h(Pt),x=a(Pt,"LI",{});var me=l(x);ne=i(me,"The model can take the "),Ee=a(me,"EM",{});var kl=l(Ee);Oe=i(kl,"past_key_values"),kl.forEach(t),S=i(me," (for PyTorch) or "),qe=a(me,"EM",{});var wl=l(qe);We=i(wl,"past"),wl.forEach(t),Ue=i(me,` (for TF) as input, which is the previously computed
key/value attention pairs. Using this (`),D=a(me,"EM",{});var $l=l(D);X=i($l,"past_key_values"),$l.forEach(t),Re=i(me," or "),Ce=a(me,"EM",{});var Pl=l(Ce);Y=i(Pl,"past"),Pl.forEach(t),Be=i(me,`) value prevents the model from re-computing
pre-computed values in the context of text generation. For PyTorch, see `),De=a(me,"EM",{});var Ml=l(De);we=i(Ml,"past_key_values"),Ml.forEach(t),Ve=i(me,` argument of the
`),za=a(me,"A",{href:!0});var Gl=l(za);hc=i(Gl,"GPT2Model.forward()"),Gl.forEach(t),mc=i(me," method, or for TF the "),$r=a(me,"EM",{});var xl=l($r);uc=i(xl,"past"),xl.forEach(t),fc=i(me,` argument of the
`),Ea=a(me,"A",{href:!0});var Fl=l(Ea);gc=i(Fl,"TFGPT2Model.call()"),Fl.forEach(t),_c=i(me," method for more information on its usage."),me.forEach(t),Tc=h(Pt),yt=a(Pt,"LI",{});var Mt=l(yt);vc=i(Mt,"Enabling the "),Pr=a(Mt,"EM",{});var jl=l(Pr);bc=i(jl,"scale_attn_by_inverse_layer_idx"),jl.forEach(t),yc=i(Mt," and "),Mr=a(Mt,"EM",{});var zl=l(Mr);kc=i(zl,"reorder_and_upcast_attn"),zl.forEach(t),wc=i(Mt,` flags will apply the training stability
improvements from `),Cn=a(Mt,"A",{href:!0,rel:!0});var El=l(Cn);$c=i(El,"Mistral"),El.forEach(t),Pc=i(Mt," (for PyTorch only)."),Mt.forEach(t),Pt.forEach(t),Sl=h(o),Nt=a(o,"P",{});var vn=l(Nt);Dn=a(vn,"A",{href:!0,rel:!0});var ql=l(Dn);Mc=i(ql,"Write With Transformer"),ql.forEach(t),Gc=i(vn,` is a webapp created and hosted by
Hugging Face showcasing the generative capabilities of several models. GPT-2 is one of them and is available in five
different sizes: small, medium, large, xl and a distilled version of the small checkpoint: `),Gr=a(vn,"EM",{});var Cl=l(Gr);xc=i(Cl,"distilgpt-2"),Cl.forEach(t),Fc=i(vn,"."),vn.forEach(t),Il=h(o),Gt=a(o,"P",{});var fo=l(Gt);jc=i(fo,"This model was contributed by "),Nn=a(fo,"A",{href:!0,rel:!0});var Dl=l(Nn);zc=i(Dl,"thomwolf"),Dl.forEach(t),Ec=i(fo,". The original code can be found "),Hn=a(fo,"A",{href:!0,rel:!0});var Nl=l(Hn);qc=i(Nl,"here"),Nl.forEach(t),Cc=i(fo,"."),fo.forEach(t),Al=h(o),Ht=a(o,"H2",{class:!0});var ja=l(Ht);go=a(ja,"A",{id:!0,class:!0,href:!0});var Hl=l(go);xr=a(Hl,"SPAN",{});var Ll=l(xr);k(Ln.$$.fragment,Ll),Ll.forEach(t),Hl.forEach(t),Dc=h(ja),Fr=a(ja,"SPAN",{});var x_=l(Fr);Nc=i(x_,"GPT2Config"),x_.forEach(t),ja.forEach(t),Ol=h(o),at=a(o,"DIV",{class:!0});var bn=l(at);k(Sn.$$.fragment,bn),Hc=h(bn),kt=a(bn,"P",{});var yn=l(kt);Lc=i(yn,"This is the configuration class to store the configuration of a "),qa=a(yn,"A",{href:!0});var F_=l(qa);Sc=i(F_,"GPT2Model"),F_.forEach(t),Ic=i(yn," or a "),Ca=a(yn,"A",{href:!0});var j_=l(Ca);Ac=i(j_,"TFGPT2Model"),j_.forEach(t),Oc=i(yn,`. It is used to
instantiate a GPT-2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GPT-2
`),In=a(yn,"A",{href:!0,rel:!0});var z_=l(In);Wc=i(z_,"small"),z_.forEach(t),Uc=i(yn," architecture."),yn.forEach(t),Rc=h(bn),Lt=a(bn,"P",{});var cr=l(Lt);Bc=i(cr,"Configuration objects inherit from "),Da=a(cr,"A",{href:!0});var E_=l(Da);Vc=i(E_,"PretrainedConfig"),E_.forEach(t),Kc=i(cr,` and can be used to control the model outputs. Read the
documentation from `),Na=a(cr,"A",{href:!0});var q_=l(Na);Jc=i(q_,"PretrainedConfig"),q_.forEach(t),Xc=i(cr," for more information."),cr.forEach(t),Yc=h(bn),k(_o.$$.fragment,bn),bn.forEach(t),Wl=h(o),St=a(o,"H2",{class:!0});var yd=l(St);To=a(yd,"A",{id:!0,class:!0,href:!0});var C_=l(To);jr=a(C_,"SPAN",{});var D_=l(jr);k(An.$$.fragment,D_),D_.forEach(t),C_.forEach(t),Qc=h(yd),zr=a(yd,"SPAN",{});var N_=l(zr);Zc=i(N_,"GPT2Tokenizer"),N_.forEach(t),yd.forEach(t),Ul=h(o),pe=a(o,"DIV",{class:!0});var Ie=l(pe);k(On.$$.fragment,Ie),ep=h(Ie),Er=a(Ie,"P",{});var H_=l(Er);tp=i(H_,"Construct a GPT-2 tokenizer. Based on byte-level Byte-Pair-Encoding."),H_.forEach(t),op=h(Ie),qr=a(Ie,"P",{});var L_=l(qr);np=i(L_,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),L_.forEach(t),sp=h(Ie),k(vo.$$.fragment,Ie),ap=h(Ie),Wn=a(Ie,"P",{});var kd=l(Wn);rp=i(kd,"You can get around that behavior by passing "),Cr=a(kd,"CODE",{});var S_=l(Cr);ip=i(S_,"add_prefix_space=True"),S_.forEach(t),lp=i(kd,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),kd.forEach(t),dp=h(Ie),k(bo.$$.fragment,Ie),cp=h(Ie),Un=a(Ie,"P",{});var wd=l(Un);pp=i(wd,"This tokenizer inherits from "),Ha=a(wd,"A",{href:!0});var I_=l(Ha);hp=i(I_,"PreTrainedTokenizer"),I_.forEach(t),mp=i(wd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),wd.forEach(t),up=h(Ie),La=a(Ie,"DIV",{class:!0});var A_=l(La);k(Rn.$$.fragment,A_),A_.forEach(t),Ie.forEach(t),Rl=h(o),It=a(o,"H2",{class:!0});var $d=l(It);yo=a($d,"A",{id:!0,class:!0,href:!0});var O_=l(yo);Dr=a(O_,"SPAN",{});var W_=l(Dr);k(Bn.$$.fragment,W_),W_.forEach(t),O_.forEach(t),fp=h($d),Nr=a($d,"SPAN",{});var U_=l(Nr);gp=i(U_,"GPT2TokenizerFast"),U_.forEach(t),$d.forEach(t),Bl=h(o),$e=a(o,"DIV",{class:!0});var Qe=l($e);k(Vn.$$.fragment,Qe),_p=h(Qe),Kn=a(Qe,"P",{});var Pd=l(Kn);Tp=i(Pd,"Construct a \u201Cfast\u201D GPT-2 tokenizer (backed by HuggingFace\u2019s "),Hr=a(Pd,"EM",{});var R_=l(Hr);vp=i(R_,"tokenizers"),R_.forEach(t),bp=i(Pd,` library). Based on byte-level
Byte-Pair-Encoding.`),Pd.forEach(t),yp=h(Qe),Lr=a(Qe,"P",{});var B_=l(Lr);kp=i(B_,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),B_.forEach(t),wp=h(Qe),k(ko.$$.fragment,Qe),$p=h(Qe),Jn=a(Qe,"P",{});var Md=l(Jn);Pp=i(Md,"You can get around that behavior by passing "),Sr=a(Md,"CODE",{});var V_=l(Sr);Mp=i(V_,"add_prefix_space=True"),V_.forEach(t),Gp=i(Md,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Md.forEach(t),xp=h(Qe),k(wo.$$.fragment,Qe),Fp=h(Qe),Xn=a(Qe,"P",{});var Gd=l(Xn);jp=i(Gd,"This tokenizer inherits from "),Sa=a(Gd,"A",{href:!0});var K_=l(Sa);zp=i(K_,"PreTrainedTokenizerFast"),K_.forEach(t),Ep=i(Gd,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Gd.forEach(t),Qe.forEach(t),Vl=h(o),At=a(o,"H2",{class:!0});var xd=l(At);$o=a(xd,"A",{id:!0,class:!0,href:!0});var J_=l($o);Ir=a(J_,"SPAN",{});var X_=l(Ir);k(Yn.$$.fragment,X_),X_.forEach(t),J_.forEach(t),qp=h(xd),Ar=a(xd,"SPAN",{});var Y_=l(Ar);Cp=i(Y_,"GPT2 specific outputs"),Y_.forEach(t),xd.forEach(t),Kl=h(o),Ot=a(o,"DIV",{class:!0});var Fd=l(Ot);k(Qn.$$.fragment,Fd),Dp=h(Fd),Or=a(Fd,"P",{});var Q_=l(Or);Np=i(Q_,"Base class for outputs of models predicting if two sentences are consecutive or not."),Q_.forEach(t),Fd.forEach(t),Jl=h(o),Wt=a(o,"DIV",{class:!0});var jd=l(Wt);k(Zn.$$.fragment,jd),Hp=h(jd),Wr=a(jd,"P",{});var Z_=l(Wr);Lp=i(Z_,"Base class for outputs of models predicting if two sentences are consecutive or not."),Z_.forEach(t),jd.forEach(t),Xl=h(o),Ut=a(o,"H2",{class:!0});var zd=l(Ut);Po=a(zd,"A",{id:!0,class:!0,href:!0});var eT=l(Po);Ur=a(eT,"SPAN",{});var tT=l(Ur);k(es.$$.fragment,tT),tT.forEach(t),eT.forEach(t),Sp=h(zd),Rr=a(zd,"SPAN",{});var oT=l(Rr);Ip=i(oT,"GPT2Model"),oT.forEach(t),zd.forEach(t),Yl=h(o),Pe=a(o,"DIV",{class:!0});var Ze=l(Pe);k(ts.$$.fragment,Ze),Ap=h(Ze),Br=a(Ze,"P",{});var nT=l(Br);Op=i(nT,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),nT.forEach(t),Wp=h(Ze),os=a(Ze,"P",{});var Ed=l(os);Up=i(Ed,"This model inherits from "),Ia=a(Ed,"A",{href:!0});var sT=l(Ia);Rp=i(sT,"PreTrainedModel"),sT.forEach(t),Bp=i(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed.forEach(t),Vp=h(Ze),ns=a(Ze,"P",{});var qd=l(ns);Kp=i(qd,"This model is also a PyTorch "),ss=a(qd,"A",{href:!0,rel:!0});var aT=l(ss);Jp=i(aT,"torch.nn.Module"),aT.forEach(t),Xp=i(qd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qd.forEach(t),Yp=h(Ze),lt=a(Ze,"DIV",{class:!0});var kn=l(lt);k(as.$$.fragment,kn),Qp=h(kn),Rt=a(kn,"P",{});var pr=l(Rt);Zp=i(pr,"The "),Aa=a(pr,"A",{href:!0});var rT=l(Aa);eh=i(rT,"GPT2Model"),rT.forEach(t),th=i(pr," forward method, overrides the "),Vr=a(pr,"CODE",{});var iT=l(Vr);oh=i(iT,"__call__"),iT.forEach(t),nh=i(pr," special method."),pr.forEach(t),sh=h(kn),k(Mo.$$.fragment,kn),ah=h(kn),k(Go.$$.fragment,kn),kn.forEach(t),rh=h(Ze),dt=a(Ze,"DIV",{class:!0});var wn=l(dt);k(rs.$$.fragment,wn),ih=h(wn),Kr=a(wn,"P",{});var lT=l(Kr);lh=i(lT,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),lT.forEach(t),dh=h(wn),Jr=a(wn,"P",{});var dT=l(Jr);ch=i(dT,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),dT.forEach(t),ph=h(wn),k(xo.$$.fragment,wn),wn.forEach(t),hh=h(Ze),xt=a(Ze,"DIV",{class:!0});var hr=l(xt);k(is.$$.fragment,hr),mh=h(hr),Xr=a(hr,"P",{});var cT=l(Xr);uh=i(cT,"Moves the model to cpu from a model parallel state."),cT.forEach(t),fh=h(hr),k(Fo.$$.fragment,hr),hr.forEach(t),Ze.forEach(t),Ql=h(o),Bt=a(o,"H2",{class:!0});var Cd=l(Bt);jo=a(Cd,"A",{id:!0,class:!0,href:!0});var pT=l(jo);Yr=a(pT,"SPAN",{});var hT=l(Yr);k(ls.$$.fragment,hT),hT.forEach(t),pT.forEach(t),gh=h(Cd),Qr=a(Cd,"SPAN",{});var mT=l(Qr);_h=i(mT,"GPT2LMHeadModel"),mT.forEach(t),Cd.forEach(t),Zl=h(o),Me=a(o,"DIV",{class:!0});var et=l(Me);k(ds.$$.fragment,et),Th=h(et),Zr=a(et,"P",{});var uT=l(Zr);vh=i(uT,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),uT.forEach(t),bh=h(et),cs=a(et,"P",{});var Dd=l(cs);yh=i(Dd,"This model inherits from "),Oa=a(Dd,"A",{href:!0});var fT=l(Oa);kh=i(fT,"PreTrainedModel"),fT.forEach(t),wh=i(Dd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dd.forEach(t),$h=h(et),ps=a(et,"P",{});var Nd=l(ps);Ph=i(Nd,"This model is also a PyTorch "),hs=a(Nd,"A",{href:!0,rel:!0});var gT=l(hs);Mh=i(gT,"torch.nn.Module"),gT.forEach(t),Gh=i(Nd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nd.forEach(t),xh=h(et),ct=a(et,"DIV",{class:!0});var $n=l(ct);k(ms.$$.fragment,$n),Fh=h($n),Vt=a($n,"P",{});var mr=l(Vt);jh=i(mr,"The "),Wa=a(mr,"A",{href:!0});var _T=l(Wa);zh=i(_T,"GPT2LMHeadModel"),_T.forEach(t),Eh=i(mr," forward method, overrides the "),ei=a(mr,"CODE",{});var TT=l(ei);qh=i(TT,"__call__"),TT.forEach(t),Ch=i(mr," special method."),mr.forEach(t),Dh=h($n),k(zo.$$.fragment,$n),Nh=h($n),k(Eo.$$.fragment,$n),$n.forEach(t),Hh=h(et),pt=a(et,"DIV",{class:!0});var Pn=l(pt);k(us.$$.fragment,Pn),Lh=h(Pn),ti=a(Pn,"P",{});var vT=l(ti);Sh=i(vT,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),vT.forEach(t),Ih=h(Pn),oi=a(Pn,"P",{});var bT=l(oi);Ah=i(bT,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),bT.forEach(t),Oh=h(Pn),k(qo.$$.fragment,Pn),Pn.forEach(t),Wh=h(et),Ft=a(et,"DIV",{class:!0});var ur=l(Ft);k(fs.$$.fragment,ur),Uh=h(ur),ni=a(ur,"P",{});var yT=l(ni);Rh=i(yT,"Moves the model to cpu from a model parallel state."),yT.forEach(t),Bh=h(ur),k(Co.$$.fragment,ur),ur.forEach(t),et.forEach(t),ed=h(o),Kt=a(o,"H2",{class:!0});var Hd=l(Kt);Do=a(Hd,"A",{id:!0,class:!0,href:!0});var kT=l(Do);si=a(kT,"SPAN",{});var wT=l(si);k(gs.$$.fragment,wT),wT.forEach(t),kT.forEach(t),Vh=h(Hd),ai=a(Hd,"SPAN",{});var $T=l(ai);Kh=i($T,"GPT2DoubleHeadsModel"),$T.forEach(t),Hd.forEach(t),td=h(o),Ke=a(o,"DIV",{class:!0});var jt=l(Ke);k(_s.$$.fragment,jt),Jh=h(jt),ri=a(jt,"P",{});var PT=l(ri);Xh=i(PT,`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),PT.forEach(t),Yh=h(jt),Ts=a(jt,"P",{});var Ld=l(Ts);Qh=i(Ld,"This model inherits from "),Ua=a(Ld,"A",{href:!0});var MT=l(Ua);Zh=i(MT,"PreTrainedModel"),MT.forEach(t),em=i(Ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ld.forEach(t),tm=h(jt),vs=a(jt,"P",{});var Sd=l(vs);om=i(Sd,"This model is also a PyTorch "),bs=a(Sd,"A",{href:!0,rel:!0});var GT=l(bs);nm=i(GT,"torch.nn.Module"),GT.forEach(t),sm=i(Sd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sd.forEach(t),am=h(jt),ht=a(jt,"DIV",{class:!0});var Mn=l(ht);k(ys.$$.fragment,Mn),rm=h(Mn),Jt=a(Mn,"P",{});var fr=l(Jt);im=i(fr,"The "),Ra=a(fr,"A",{href:!0});var xT=l(Ra);lm=i(xT,"GPT2DoubleHeadsModel"),xT.forEach(t),dm=i(fr," forward method, overrides the "),ii=a(fr,"CODE",{});var FT=l(ii);cm=i(FT,"__call__"),FT.forEach(t),pm=i(fr," special method."),fr.forEach(t),hm=h(Mn),k(No.$$.fragment,Mn),mm=h(Mn),k(Ho.$$.fragment,Mn),Mn.forEach(t),jt.forEach(t),od=h(o),Xt=a(o,"H2",{class:!0});var Id=l(Xt);Lo=a(Id,"A",{id:!0,class:!0,href:!0});var jT=l(Lo);li=a(jT,"SPAN",{});var zT=l(li);k(ks.$$.fragment,zT),zT.forEach(t),jT.forEach(t),um=h(Id),di=a(Id,"SPAN",{});var ET=l(di);fm=i(ET,"GPT2ForSequenceClassification"),ET.forEach(t),Id.forEach(t),nd=h(o),Ge=a(o,"DIV",{class:!0});var tt=l(Ge);k(ws.$$.fragment,tt),gm=h(tt),ci=a(tt,"P",{});var qT=l(ci);_m=i(qT,"The GPT2 Model transformer with a sequence classification head on top (linear layer)."),qT.forEach(t),Tm=h(tt),Ba=a(tt,"P",{});var M_=l(Ba);Va=a(M_,"A",{href:!0});var CT=l(Va);vm=i(CT,"GPT2ForSequenceClassification"),CT.forEach(t),bm=i(M_,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),M_.forEach(t),ym=h(tt),rt=a(tt,"P",{});var zt=l(rt);km=i(zt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),pi=a(zt,"CODE",{});var DT=l(pi);wm=i(DT,"pad_token_id"),DT.forEach(t),$m=i(zt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),hi=a(zt,"CODE",{});var NT=l(hi);Pm=i(NT,"pad_token_id"),NT.forEach(t),Mm=i(zt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),mi=a(zt,"CODE",{});var HT=l(mi);Gm=i(HT,"inputs_embeds"),HT.forEach(t),xm=i(zt," are passed instead of "),ui=a(zt,"CODE",{});var LT=l(ui);Fm=i(LT,"input_ids"),LT.forEach(t),jm=i(zt,`, it does the same (take the last value in
each row of the batch).`),zt.forEach(t),zm=h(tt),$s=a(tt,"P",{});var Ad=l($s);Em=i(Ad,"This model inherits from "),Ka=a(Ad,"A",{href:!0});var ST=l(Ka);qm=i(ST,"PreTrainedModel"),ST.forEach(t),Cm=i(Ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ad.forEach(t),Dm=h(tt),Ps=a(tt,"P",{});var Od=l(Ps);Nm=i(Od,"This model is also a PyTorch "),Ms=a(Od,"A",{href:!0,rel:!0});var IT=l(Ms);Hm=i(IT,"torch.nn.Module"),IT.forEach(t),Lm=i(Od,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Od.forEach(t),Sm=h(tt),je=a(tt,"DIV",{class:!0});var ot=l(je);k(Gs.$$.fragment,ot),Im=h(ot),Yt=a(ot,"P",{});var gr=l(Yt);Am=i(gr,"The "),Ja=a(gr,"A",{href:!0});var AT=l(Ja);Om=i(AT,"GPT2ForSequenceClassification"),AT.forEach(t),Wm=i(gr," forward method, overrides the "),fi=a(gr,"CODE",{});var OT=l(fi);Um=i(OT,"__call__"),OT.forEach(t),Rm=i(gr," special method."),gr.forEach(t),Bm=h(ot),k(So.$$.fragment,ot),Vm=h(ot),k(Io.$$.fragment,ot),Km=h(ot),k(Ao.$$.fragment,ot),Jm=h(ot),k(Oo.$$.fragment,ot),Xm=h(ot),k(Wo.$$.fragment,ot),ot.forEach(t),tt.forEach(t),sd=h(o),Qt=a(o,"H2",{class:!0});var Wd=l(Qt);Uo=a(Wd,"A",{id:!0,class:!0,href:!0});var WT=l(Uo);gi=a(WT,"SPAN",{});var UT=l(gi);k(xs.$$.fragment,UT),UT.forEach(t),WT.forEach(t),Ym=h(Wd),_i=a(Wd,"SPAN",{});var RT=l(_i);Qm=i(RT,"GPT2ForTokenClassification"),RT.forEach(t),Wd.forEach(t),ad=h(o),Je=a(o,"DIV",{class:!0});var Et=l(Je);k(Fs.$$.fragment,Et),Zm=h(Et),Ti=a(Et,"P",{});var BT=l(Ti);eu=i(BT,`GPT2 Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),BT.forEach(t),tu=h(Et),js=a(Et,"P",{});var Ud=l(js);ou=i(Ud,"This model inherits from "),Xa=a(Ud,"A",{href:!0});var VT=l(Xa);nu=i(VT,"PreTrainedModel"),VT.forEach(t),su=i(Ud,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ud.forEach(t),au=h(Et),zs=a(Et,"P",{});var Rd=l(zs);ru=i(Rd,"This model is also a PyTorch "),Es=a(Rd,"A",{href:!0,rel:!0});var KT=l(Es);iu=i(KT,"torch.nn.Module"),KT.forEach(t),lu=i(Rd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rd.forEach(t),du=h(Et),Xe=a(Et,"DIV",{class:!0});var qt=l(Xe);k(qs.$$.fragment,qt),cu=h(qt),Zt=a(qt,"P",{});var _r=l(Zt);pu=i(_r,"The "),Ya=a(_r,"A",{href:!0});var JT=l(Ya);hu=i(JT,"GPT2ForTokenClassification"),JT.forEach(t),mu=i(_r," forward method, overrides the "),vi=a(_r,"CODE",{});var XT=l(vi);uu=i(XT,"__call__"),XT.forEach(t),fu=i(_r," special method."),_r.forEach(t),gu=h(qt),k(Ro.$$.fragment,qt),_u=h(qt),k(Bo.$$.fragment,qt),Tu=h(qt),k(Vo.$$.fragment,qt),qt.forEach(t),Et.forEach(t),rd=h(o),eo=a(o,"H2",{class:!0});var Bd=l(eo);Ko=a(Bd,"A",{id:!0,class:!0,href:!0});var YT=l(Ko);bi=a(YT,"SPAN",{});var QT=l(bi);k(Cs.$$.fragment,QT),QT.forEach(t),YT.forEach(t),vu=h(Bd),yi=a(Bd,"SPAN",{});var ZT=l(yi);bu=i(ZT,"TFGPT2Model"),ZT.forEach(t),Bd.forEach(t),id=h(o),Ne=a(o,"DIV",{class:!0});var Tt=l(Ne);k(Ds.$$.fragment,Tt),yu=h(Tt),ki=a(Tt,"P",{});var e2=l(ki);ku=i(e2,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),e2.forEach(t),wu=h(Tt),Ns=a(Tt,"P",{});var Vd=l(Ns);$u=i(Vd,"This model inherits from "),Qa=a(Vd,"A",{href:!0});var t2=l(Qa);Pu=i(t2,"TFPreTrainedModel"),t2.forEach(t),Mu=i(Vd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vd.forEach(t),Gu=h(Tt),Hs=a(Tt,"P",{});var Kd=l(Hs);xu=i(Kd,"This model is also a "),Ls=a(Kd,"A",{href:!0,rel:!0});var o2=l(Ls);Fu=i(o2,"tf.keras.Model"),o2.forEach(t),ju=i(Kd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kd.forEach(t),zu=h(Tt),k(Jo.$$.fragment,Tt),Eu=h(Tt),mt=a(Tt,"DIV",{class:!0});var Gn=l(mt);k(Ss.$$.fragment,Gn),qu=h(Gn),to=a(Gn,"P",{});var Tr=l(to);Cu=i(Tr,"The "),Za=a(Tr,"A",{href:!0});var n2=l(Za);Du=i(n2,"TFGPT2Model"),n2.forEach(t),Nu=i(Tr," forward method, overrides the "),wi=a(Tr,"CODE",{});var s2=l(wi);Hu=i(s2,"__call__"),s2.forEach(t),Lu=i(Tr," special method."),Tr.forEach(t),Su=h(Gn),k(Xo.$$.fragment,Gn),Iu=h(Gn),k(Yo.$$.fragment,Gn),Gn.forEach(t),Tt.forEach(t),ld=h(o),oo=a(o,"H2",{class:!0});var Jd=l(oo);Qo=a(Jd,"A",{id:!0,class:!0,href:!0});var a2=l(Qo);$i=a(a2,"SPAN",{});var r2=l($i);k(Is.$$.fragment,r2),r2.forEach(t),a2.forEach(t),Au=h(Jd),Pi=a(Jd,"SPAN",{});var i2=l(Pi);Ou=i(i2,"TFGPT2LMHeadModel"),i2.forEach(t),Jd.forEach(t),dd=h(o),He=a(o,"DIV",{class:!0});var vt=l(He);k(As.$$.fragment,vt),Wu=h(vt),Mi=a(vt,"P",{});var l2=l(Mi);Uu=i(l2,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),l2.forEach(t),Ru=h(vt),Os=a(vt,"P",{});var Xd=l(Os);Bu=i(Xd,"This model inherits from "),er=a(Xd,"A",{href:!0});var d2=l(er);Vu=i(d2,"TFPreTrainedModel"),d2.forEach(t),Ku=i(Xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xd.forEach(t),Ju=h(vt),Ws=a(vt,"P",{});var Yd=l(Ws);Xu=i(Yd,"This model is also a "),Us=a(Yd,"A",{href:!0,rel:!0});var c2=l(Us);Yu=i(c2,"tf.keras.Model"),c2.forEach(t),Qu=i(Yd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yd.forEach(t),Zu=h(vt),k(Zo.$$.fragment,vt),ef=h(vt),ut=a(vt,"DIV",{class:!0});var xn=l(ut);k(Rs.$$.fragment,xn),tf=h(xn),no=a(xn,"P",{});var vr=l(no);of=i(vr,"The "),tr=a(vr,"A",{href:!0});var p2=l(tr);nf=i(p2,"TFGPT2LMHeadModel"),p2.forEach(t),sf=i(vr," forward method, overrides the "),Gi=a(vr,"CODE",{});var h2=l(Gi);af=i(h2,"__call__"),h2.forEach(t),rf=i(vr," special method."),vr.forEach(t),lf=h(xn),k(en.$$.fragment,xn),df=h(xn),k(tn.$$.fragment,xn),xn.forEach(t),vt.forEach(t),cd=h(o),so=a(o,"H2",{class:!0});var Qd=l(so);on=a(Qd,"A",{id:!0,class:!0,href:!0});var m2=l(on);xi=a(m2,"SPAN",{});var u2=l(xi);k(Bs.$$.fragment,u2),u2.forEach(t),m2.forEach(t),cf=h(Qd),Fi=a(Qd,"SPAN",{});var f2=l(Fi);pf=i(f2,"TFGPT2DoubleHeadsModel"),f2.forEach(t),Qd.forEach(t),pd=h(o),Le=a(o,"DIV",{class:!0});var bt=l(Le);k(Vs.$$.fragment,bt),hf=h(bt),ji=a(bt,"P",{});var g2=l(ji);mf=i(g2,`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),g2.forEach(t),uf=h(bt),Ks=a(bt,"P",{});var Zd=l(Ks);ff=i(Zd,"This model inherits from "),or=a(Zd,"A",{href:!0});var _2=l(or);gf=i(_2,"TFPreTrainedModel"),_2.forEach(t),_f=i(Zd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zd.forEach(t),Tf=h(bt),Js=a(bt,"P",{});var ec=l(Js);vf=i(ec,"This model is also a "),Xs=a(ec,"A",{href:!0,rel:!0});var T2=l(Xs);bf=i(T2,"tf.keras.Model"),T2.forEach(t),yf=i(ec,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ec.forEach(t),kf=h(bt),k(nn.$$.fragment,bt),wf=h(bt),ft=a(bt,"DIV",{class:!0});var Fn=l(ft);k(Ys.$$.fragment,Fn),$f=h(Fn),ao=a(Fn,"P",{});var br=l(ao);Pf=i(br,"The "),nr=a(br,"A",{href:!0});var v2=l(nr);Mf=i(v2,"TFGPT2DoubleHeadsModel"),v2.forEach(t),Gf=i(br," forward method, overrides the "),zi=a(br,"CODE",{});var b2=l(zi);xf=i(b2,"__call__"),b2.forEach(t),Ff=i(br," special method."),br.forEach(t),jf=h(Fn),k(sn.$$.fragment,Fn),zf=h(Fn),k(an.$$.fragment,Fn),Fn.forEach(t),bt.forEach(t),hd=h(o),ro=a(o,"H2",{class:!0});var tc=l(ro);rn=a(tc,"A",{id:!0,class:!0,href:!0});var y2=l(rn);Ei=a(y2,"SPAN",{});var k2=l(Ei);k(Qs.$$.fragment,k2),k2.forEach(t),y2.forEach(t),Ef=h(tc),qi=a(tc,"SPAN",{});var w2=l(qi);qf=i(w2,"TFGPT2ForSequenceClassification"),w2.forEach(t),tc.forEach(t),md=h(o),he=a(o,"DIV",{class:!0});var Ae=l(he);k(Zs.$$.fragment,Ae),Cf=h(Ae),Ci=a(Ae,"P",{});var $2=l(Ci);Df=i($2,"The GPT2 Model transformer with a sequence classification head on top (linear layer)."),$2.forEach(t),Nf=h(Ae),sr=a(Ae,"P",{});var G_=l(sr);ar=a(G_,"A",{href:!0});var P2=l(ar);Hf=i(P2,"TFGPT2ForSequenceClassification"),P2.forEach(t),Lf=i(G_,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),G_.forEach(t),Sf=h(Ae),it=a(Ae,"P",{});var Ct=l(it);If=i(Ct,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Di=a(Ct,"CODE",{});var M2=l(Di);Af=i(M2,"pad_token_id"),M2.forEach(t),Of=i(Ct,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ni=a(Ct,"CODE",{});var G2=l(Ni);Wf=i(G2,"pad_token_id"),G2.forEach(t),Uf=i(Ct,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Hi=a(Ct,"CODE",{});var x2=l(Hi);Rf=i(x2,"inputs_embeds"),x2.forEach(t),Bf=i(Ct," are passed instead of "),Li=a(Ct,"CODE",{});var F2=l(Li);Vf=i(F2,"input_ids"),F2.forEach(t),Kf=i(Ct,`, it does the same (take the last value in
each row of the batch).`),Ct.forEach(t),Jf=h(Ae),ea=a(Ae,"P",{});var oc=l(ea);Xf=i(oc,"This model inherits from "),rr=a(oc,"A",{href:!0});var j2=l(rr);Yf=i(j2,"TFPreTrainedModel"),j2.forEach(t),Qf=i(oc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oc.forEach(t),Zf=h(Ae),ta=a(Ae,"P",{});var nc=l(ta);eg=i(nc,"This model is also a "),oa=a(nc,"A",{href:!0,rel:!0});var z2=l(oa);tg=i(z2,"tf.keras.Model"),z2.forEach(t),og=i(nc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nc.forEach(t),ng=h(Ae),k(ln.$$.fragment,Ae),sg=h(Ae),Ye=a(Ae,"DIV",{class:!0});var Dt=l(Ye);k(na.$$.fragment,Dt),ag=h(Dt),io=a(Dt,"P",{});var yr=l(io);rg=i(yr,"The "),ir=a(yr,"A",{href:!0});var E2=l(ir);ig=i(E2,"TFGPT2ForSequenceClassification"),E2.forEach(t),lg=i(yr," forward method, overrides the "),Si=a(yr,"CODE",{});var q2=l(Si);dg=i(q2,"__call__"),q2.forEach(t),cg=i(yr," special method."),yr.forEach(t),pg=h(Dt),k(dn.$$.fragment,Dt),hg=h(Dt),k(cn.$$.fragment,Dt),mg=h(Dt),k(pn.$$.fragment,Dt),Dt.forEach(t),Ae.forEach(t),ud=h(o),lo=a(o,"H2",{class:!0});var sc=l(lo);hn=a(sc,"A",{id:!0,class:!0,href:!0});var C2=l(hn);Ii=a(C2,"SPAN",{});var D2=l(Ii);k(sa.$$.fragment,D2),D2.forEach(t),C2.forEach(t),ug=h(sc),Ai=a(sc,"SPAN",{});var N2=l(Ai);fg=i(N2,"TFSequenceClassifierOutputWithPast"),N2.forEach(t),sc.forEach(t),fd=h(o),co=a(o,"DIV",{class:!0});var ac=l(co);k(aa.$$.fragment,ac),gg=h(ac),Oi=a(ac,"P",{});var H2=l(Oi);_g=i(H2,"Base class for outputs of sentence classification models."),H2.forEach(t),ac.forEach(t),gd=h(o),po=a(o,"H2",{class:!0});var rc=l(po);mn=a(rc,"A",{id:!0,class:!0,href:!0});var L2=l(mn);Wi=a(L2,"SPAN",{});var S2=l(Wi);k(ra.$$.fragment,S2),S2.forEach(t),L2.forEach(t),Tg=h(rc),Ui=a(rc,"SPAN",{});var I2=l(Ui);vg=i(I2,"FlaxGPT2Model"),I2.forEach(t),rc.forEach(t),_d=h(o),xe=a(o,"DIV",{class:!0});var nt=l(xe);k(ia.$$.fragment,nt),bg=h(nt),Ri=a(nt,"P",{});var A2=l(Ri);yg=i(A2,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),A2.forEach(t),kg=h(nt),la=a(nt,"P",{});var ic=l(la);wg=i(ic,"This model inherits from "),lr=a(ic,"A",{href:!0});var O2=l(lr);$g=i(O2,"FlaxPreTrainedModel"),O2.forEach(t),Pg=i(ic,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ic.forEach(t),Mg=h(nt),da=a(nt,"P",{});var lc=l(da);Gg=i(lc,`This model is also a Flax Linen
`),ca=a(lc,"A",{href:!0,rel:!0});var W2=l(ca);xg=i(W2,"flax.nn.Module"),W2.forEach(t),Fg=i(lc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),lc.forEach(t),jg=h(nt),Bi=a(nt,"P",{});var U2=l(Bi);zg=i(U2,"Finally, this model supports inherent JAX features such as:"),U2.forEach(t),Eg=h(nt),wt=a(nt,"UL",{});var jn=l(wt);Vi=a(jn,"LI",{});var R2=l(Vi);pa=a(R2,"A",{href:!0,rel:!0});var B2=l(pa);qg=i(B2,"Just-In-Time (JIT) compilation"),B2.forEach(t),R2.forEach(t),Cg=h(jn),Ki=a(jn,"LI",{});var V2=l(Ki);ha=a(V2,"A",{href:!0,rel:!0});var K2=l(ha);Dg=i(K2,"Automatic Differentiation"),K2.forEach(t),V2.forEach(t),Ng=h(jn),Ji=a(jn,"LI",{});var J2=l(Ji);ma=a(J2,"A",{href:!0,rel:!0});var X2=l(ma);Hg=i(X2,"Vectorization"),X2.forEach(t),J2.forEach(t),Lg=h(jn),Xi=a(jn,"LI",{});var Y2=l(Xi);ua=a(Y2,"A",{href:!0,rel:!0});var Q2=l(ua);Sg=i(Q2,"Parallelization"),Q2.forEach(t),Y2.forEach(t),jn.forEach(t),Ig=h(nt),gt=a(nt,"DIV",{class:!0});var zn=l(gt);k(fa.$$.fragment,zn),Ag=h(zn),ho=a(zn,"P",{});var kr=l(ho);Og=i(kr,"The "),Yi=a(kr,"CODE",{});var Z2=l(Yi);Wg=i(Z2,"FlaxGPT2PreTrainedModel"),Z2.forEach(t),Ug=i(kr," forward method, overrides the "),Qi=a(kr,"CODE",{});var ev=l(Qi);Rg=i(ev,"__call__"),ev.forEach(t),Bg=i(kr," special method."),kr.forEach(t),Vg=h(zn),k(un.$$.fragment,zn),Kg=h(zn),k(fn.$$.fragment,zn),zn.forEach(t),nt.forEach(t),Td=h(o),mo=a(o,"H2",{class:!0});var dc=l(mo);gn=a(dc,"A",{id:!0,class:!0,href:!0});var tv=l(gn);Zi=a(tv,"SPAN",{});var ov=l(Zi);k(ga.$$.fragment,ov),ov.forEach(t),tv.forEach(t),Jg=h(dc),el=a(dc,"SPAN",{});var nv=l(el);Xg=i(nv,"FlaxGPT2LMHeadModel"),nv.forEach(t),dc.forEach(t),vd=h(o),Fe=a(o,"DIV",{class:!0});var st=l(Fe);k(_a.$$.fragment,st),Yg=h(st),tl=a(st,"P",{});var sv=l(tl);Qg=i(sv,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),sv.forEach(t),Zg=h(st),Ta=a(st,"P",{});var cc=l(Ta);e_=i(cc,"This model inherits from "),dr=a(cc,"A",{href:!0});var av=l(dr);t_=i(av,"FlaxPreTrainedModel"),av.forEach(t),o_=i(cc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cc.forEach(t),n_=h(st),va=a(st,"P",{});var pc=l(va);s_=i(pc,`This model is also a Flax Linen
`),ba=a(pc,"A",{href:!0,rel:!0});var rv=l(ba);a_=i(rv,"flax.nn.Module"),rv.forEach(t),r_=i(pc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),pc.forEach(t),i_=h(st),ol=a(st,"P",{});var iv=l(ol);l_=i(iv,"Finally, this model supports inherent JAX features such as:"),iv.forEach(t),d_=h(st),$t=a(st,"UL",{});var En=l($t);nl=a(En,"LI",{});var lv=l(nl);ya=a(lv,"A",{href:!0,rel:!0});var dv=l(ya);c_=i(dv,"Just-In-Time (JIT) compilation"),dv.forEach(t),lv.forEach(t),p_=h(En),sl=a(En,"LI",{});var cv=l(sl);ka=a(cv,"A",{href:!0,rel:!0});var pv=l(ka);h_=i(pv,"Automatic Differentiation"),pv.forEach(t),cv.forEach(t),m_=h(En),al=a(En,"LI",{});var hv=l(al);wa=a(hv,"A",{href:!0,rel:!0});var mv=l(wa);u_=i(mv,"Vectorization"),mv.forEach(t),hv.forEach(t),f_=h(En),rl=a(En,"LI",{});var uv=l(rl);$a=a(uv,"A",{href:!0,rel:!0});var fv=l($a);g_=i(fv,"Parallelization"),fv.forEach(t),uv.forEach(t),En.forEach(t),__=h(st),_t=a(st,"DIV",{class:!0});var qn=l(_t);k(Pa.$$.fragment,qn),T_=h(qn),uo=a(qn,"P",{});var wr=l(uo);v_=i(wr,"The "),il=a(wr,"CODE",{});var gv=l(il);b_=i(gv,"FlaxGPT2PreTrainedModel"),gv.forEach(t),y_=i(wr," forward method, overrides the "),ll=a(wr,"CODE",{});var _v=l(ll);k_=i(_v,"__call__"),_v.forEach(t),w_=i(wr," special method."),wr.forEach(t),$_=h(qn),k(_n.$$.fragment,qn),P_=h(qn),k(Tn.$$.fragment,qn),qn.forEach(t),st.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(cb)),f(c,"id","openai-gpt2"),f(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(c,"href","#openai-gpt2"),f(m,"class","relative group"),f(B,"id","overview"),f(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(B,"href","#overview"),f(j,"class","relative group"),f(ee,"href","https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"),f(ee,"rel","nofollow"),f(za,"href","/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Model.forward"),f(Ea,"href","/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.TFGPT2Model.call"),f(Cn,"href","https://github.com/stanford-crfm/mistral/"),f(Cn,"rel","nofollow"),f(Dn,"href","https://transformer.huggingface.co/doc/gpt2-large"),f(Dn,"rel","nofollow"),f(Nn,"href","https://huggingface.co/thomwolf"),f(Nn,"rel","nofollow"),f(Hn,"href","https://openai.com/blog/better-language-models/"),f(Hn,"rel","nofollow"),f(go,"id","transformers.GPT2Config"),f(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(go,"href","#transformers.GPT2Config"),f(Ht,"class","relative group"),f(qa,"href","/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Model"),f(Ca,"href","/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.TFGPT2Model"),f(In,"href","https://huggingface.co/gpt2"),f(In,"rel","nofollow"),f(Da,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),f(Na,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(To,"id","transformers.GPT2Tokenizer"),f(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(To,"href","#transformers.GPT2Tokenizer"),f(St,"class","relative group"),f(Ha,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(La,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(yo,"id","transformers.GPT2TokenizerFast"),f(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(yo,"href","#transformers.GPT2TokenizerFast"),f(It,"class","relative group"),f(Sa,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($o,"id","transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"),f($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($o,"href","#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"),f(At,"class","relative group"),f(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Po,"id","transformers.GPT2Model"),f(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Po,"href","#transformers.GPT2Model"),f(Ut,"class","relative group"),f(Ia,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),f(ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ss,"rel","nofollow"),f(Aa,"href","/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2Model"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jo,"id","transformers.GPT2LMHeadModel"),f(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(jo,"href","#transformers.GPT2LMHeadModel"),f(Bt,"class","relative group"),f(Oa,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),f(hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(hs,"rel","nofollow"),f(Wa,"href","/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2LMHeadModel"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Do,"id","transformers.GPT2DoubleHeadsModel"),f(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Do,"href","#transformers.GPT2DoubleHeadsModel"),f(Kt,"class","relative group"),f(Ua,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),f(bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(bs,"rel","nofollow"),f(Ra,"href","/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Lo,"id","transformers.GPT2ForSequenceClassification"),f(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Lo,"href","#transformers.GPT2ForSequenceClassification"),f(Xt,"class","relative group"),f(Va,"href","/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2ForSequenceClassification"),f(Ka,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),f(Ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ms,"rel","nofollow"),f(Ja,"href","/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2ForSequenceClassification"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Uo,"id","transformers.GPT2ForTokenClassification"),f(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Uo,"href","#transformers.GPT2ForTokenClassification"),f(Qt,"class","relative group"),f(Xa,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),f(Es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Es,"rel","nofollow"),f(Ya,"href","/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.GPT2ForTokenClassification"),f(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ko,"id","transformers.TFGPT2Model"),f(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ko,"href","#transformers.TFGPT2Model"),f(eo,"class","relative group"),f(Qa,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ls,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ls,"rel","nofollow"),f(Za,"href","/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.TFGPT2Model"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qo,"id","transformers.TFGPT2LMHeadModel"),f(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qo,"href","#transformers.TFGPT2LMHeadModel"),f(oo,"class","relative group"),f(er,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Us,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Us,"rel","nofollow"),f(tr,"href","/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.TFGPT2LMHeadModel"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(on,"id","transformers.TFGPT2DoubleHeadsModel"),f(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(on,"href","#transformers.TFGPT2DoubleHeadsModel"),f(so,"class","relative group"),f(or,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Xs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Xs,"rel","nofollow"),f(nr,"href","/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rn,"id","transformers.TFGPT2ForSequenceClassification"),f(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rn,"href","#transformers.TFGPT2ForSequenceClassification"),f(ro,"class","relative group"),f(ar,"href","/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.TFGPT2ForSequenceClassification"),f(rr,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(oa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(oa,"rel","nofollow"),f(ir,"href","/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.TFGPT2ForSequenceClassification"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(hn,"id","transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"),f(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(hn,"href","#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"),f(lo,"class","relative group"),f(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mn,"id","transformers.FlaxGPT2Model"),f(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(mn,"href","#transformers.FlaxGPT2Model"),f(po,"class","relative group"),f(lr,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ca,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(ca,"rel","nofollow"),f(pa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(pa,"rel","nofollow"),f(ha,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ha,"rel","nofollow"),f(ma,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ma,"rel","nofollow"),f(ua,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(ua,"rel","nofollow"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gn,"id","transformers.FlaxGPT2LMHeadModel"),f(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(gn,"href","#transformers.FlaxGPT2LMHeadModel"),f(mo,"class","relative group"),f(dr,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ba,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(ba,"rel","nofollow"),f(ya,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ya,"rel","nofollow"),f(ka,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ka,"rel","nofollow"),f(wa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(wa,"rel","nofollow"),f($a,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f($a,"rel","nofollow"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,v){e(document.head,d),_(o,T,v),_(o,m,v),e(m,c),e(c,g),w(n,g,null),e(m,u),e(m,F),e(F,Q),_(o,C,v),_(o,j,v),e(j,B),e(B,I),w(Z,I,null),e(j,_e),e(j,A),e(A,Te),_(o,ue,v),_(o,W,v),e(W,H),e(W,ee),e(ee,te),e(W,z),_(o,q,v),_(o,ie,v),e(ie,V),_(o,fe,v),_(o,le,v),e(le,O),e(O,ve),_(o,ge,v),_(o,E,v),e(E,be),_(o,U,v),_(o,R,v),e(R,de),e(de,K),e(R,ye),e(R,oe),e(oe,L),e(oe,ce),e(ce,J),e(oe,ke),e(R,b),e(R,x),e(x,ne),e(x,Ee),e(Ee,Oe),e(x,S),e(x,qe),e(qe,We),e(x,Ue),e(x,D),e(D,X),e(x,Re),e(x,Ce),e(Ce,Y),e(x,Be),e(x,De),e(De,we),e(x,Ve),e(x,za),e(za,hc),e(x,mc),e(x,$r),e($r,uc),e(x,fc),e(x,Ea),e(Ea,gc),e(x,_c),e(R,Tc),e(R,yt),e(yt,vc),e(yt,Pr),e(Pr,bc),e(yt,yc),e(yt,Mr),e(Mr,kc),e(yt,wc),e(yt,Cn),e(Cn,$c),e(yt,Pc),_(o,Sl,v),_(o,Nt,v),e(Nt,Dn),e(Dn,Mc),e(Nt,Gc),e(Nt,Gr),e(Gr,xc),e(Nt,Fc),_(o,Il,v),_(o,Gt,v),e(Gt,jc),e(Gt,Nn),e(Nn,zc),e(Gt,Ec),e(Gt,Hn),e(Hn,qc),e(Gt,Cc),_(o,Al,v),_(o,Ht,v),e(Ht,go),e(go,xr),w(Ln,xr,null),e(Ht,Dc),e(Ht,Fr),e(Fr,Nc),_(o,Ol,v),_(o,at,v),w(Sn,at,null),e(at,Hc),e(at,kt),e(kt,Lc),e(kt,qa),e(qa,Sc),e(kt,Ic),e(kt,Ca),e(Ca,Ac),e(kt,Oc),e(kt,In),e(In,Wc),e(kt,Uc),e(at,Rc),e(at,Lt),e(Lt,Bc),e(Lt,Da),e(Da,Vc),e(Lt,Kc),e(Lt,Na),e(Na,Jc),e(Lt,Xc),e(at,Yc),w(_o,at,null),_(o,Wl,v),_(o,St,v),e(St,To),e(To,jr),w(An,jr,null),e(St,Qc),e(St,zr),e(zr,Zc),_(o,Ul,v),_(o,pe,v),w(On,pe,null),e(pe,ep),e(pe,Er),e(Er,tp),e(pe,op),e(pe,qr),e(qr,np),e(pe,sp),w(vo,pe,null),e(pe,ap),e(pe,Wn),e(Wn,rp),e(Wn,Cr),e(Cr,ip),e(Wn,lp),e(pe,dp),w(bo,pe,null),e(pe,cp),e(pe,Un),e(Un,pp),e(Un,Ha),e(Ha,hp),e(Un,mp),e(pe,up),e(pe,La),w(Rn,La,null),_(o,Rl,v),_(o,It,v),e(It,yo),e(yo,Dr),w(Bn,Dr,null),e(It,fp),e(It,Nr),e(Nr,gp),_(o,Bl,v),_(o,$e,v),w(Vn,$e,null),e($e,_p),e($e,Kn),e(Kn,Tp),e(Kn,Hr),e(Hr,vp),e(Kn,bp),e($e,yp),e($e,Lr),e(Lr,kp),e($e,wp),w(ko,$e,null),e($e,$p),e($e,Jn),e(Jn,Pp),e(Jn,Sr),e(Sr,Mp),e(Jn,Gp),e($e,xp),w(wo,$e,null),e($e,Fp),e($e,Xn),e(Xn,jp),e(Xn,Sa),e(Sa,zp),e(Xn,Ep),_(o,Vl,v),_(o,At,v),e(At,$o),e($o,Ir),w(Yn,Ir,null),e(At,qp),e(At,Ar),e(Ar,Cp),_(o,Kl,v),_(o,Ot,v),w(Qn,Ot,null),e(Ot,Dp),e(Ot,Or),e(Or,Np),_(o,Jl,v),_(o,Wt,v),w(Zn,Wt,null),e(Wt,Hp),e(Wt,Wr),e(Wr,Lp),_(o,Xl,v),_(o,Ut,v),e(Ut,Po),e(Po,Ur),w(es,Ur,null),e(Ut,Sp),e(Ut,Rr),e(Rr,Ip),_(o,Yl,v),_(o,Pe,v),w(ts,Pe,null),e(Pe,Ap),e(Pe,Br),e(Br,Op),e(Pe,Wp),e(Pe,os),e(os,Up),e(os,Ia),e(Ia,Rp),e(os,Bp),e(Pe,Vp),e(Pe,ns),e(ns,Kp),e(ns,ss),e(ss,Jp),e(ns,Xp),e(Pe,Yp),e(Pe,lt),w(as,lt,null),e(lt,Qp),e(lt,Rt),e(Rt,Zp),e(Rt,Aa),e(Aa,eh),e(Rt,th),e(Rt,Vr),e(Vr,oh),e(Rt,nh),e(lt,sh),w(Mo,lt,null),e(lt,ah),w(Go,lt,null),e(Pe,rh),e(Pe,dt),w(rs,dt,null),e(dt,ih),e(dt,Kr),e(Kr,lh),e(dt,dh),e(dt,Jr),e(Jr,ch),e(dt,ph),w(xo,dt,null),e(Pe,hh),e(Pe,xt),w(is,xt,null),e(xt,mh),e(xt,Xr),e(Xr,uh),e(xt,fh),w(Fo,xt,null),_(o,Ql,v),_(o,Bt,v),e(Bt,jo),e(jo,Yr),w(ls,Yr,null),e(Bt,gh),e(Bt,Qr),e(Qr,_h),_(o,Zl,v),_(o,Me,v),w(ds,Me,null),e(Me,Th),e(Me,Zr),e(Zr,vh),e(Me,bh),e(Me,cs),e(cs,yh),e(cs,Oa),e(Oa,kh),e(cs,wh),e(Me,$h),e(Me,ps),e(ps,Ph),e(ps,hs),e(hs,Mh),e(ps,Gh),e(Me,xh),e(Me,ct),w(ms,ct,null),e(ct,Fh),e(ct,Vt),e(Vt,jh),e(Vt,Wa),e(Wa,zh),e(Vt,Eh),e(Vt,ei),e(ei,qh),e(Vt,Ch),e(ct,Dh),w(zo,ct,null),e(ct,Nh),w(Eo,ct,null),e(Me,Hh),e(Me,pt),w(us,pt,null),e(pt,Lh),e(pt,ti),e(ti,Sh),e(pt,Ih),e(pt,oi),e(oi,Ah),e(pt,Oh),w(qo,pt,null),e(Me,Wh),e(Me,Ft),w(fs,Ft,null),e(Ft,Uh),e(Ft,ni),e(ni,Rh),e(Ft,Bh),w(Co,Ft,null),_(o,ed,v),_(o,Kt,v),e(Kt,Do),e(Do,si),w(gs,si,null),e(Kt,Vh),e(Kt,ai),e(ai,Kh),_(o,td,v),_(o,Ke,v),w(_s,Ke,null),e(Ke,Jh),e(Ke,ri),e(ri,Xh),e(Ke,Yh),e(Ke,Ts),e(Ts,Qh),e(Ts,Ua),e(Ua,Zh),e(Ts,em),e(Ke,tm),e(Ke,vs),e(vs,om),e(vs,bs),e(bs,nm),e(vs,sm),e(Ke,am),e(Ke,ht),w(ys,ht,null),e(ht,rm),e(ht,Jt),e(Jt,im),e(Jt,Ra),e(Ra,lm),e(Jt,dm),e(Jt,ii),e(ii,cm),e(Jt,pm),e(ht,hm),w(No,ht,null),e(ht,mm),w(Ho,ht,null),_(o,od,v),_(o,Xt,v),e(Xt,Lo),e(Lo,li),w(ks,li,null),e(Xt,um),e(Xt,di),e(di,fm),_(o,nd,v),_(o,Ge,v),w(ws,Ge,null),e(Ge,gm),e(Ge,ci),e(ci,_m),e(Ge,Tm),e(Ge,Ba),e(Ba,Va),e(Va,vm),e(Ba,bm),e(Ge,ym),e(Ge,rt),e(rt,km),e(rt,pi),e(pi,wm),e(rt,$m),e(rt,hi),e(hi,Pm),e(rt,Mm),e(rt,mi),e(mi,Gm),e(rt,xm),e(rt,ui),e(ui,Fm),e(rt,jm),e(Ge,zm),e(Ge,$s),e($s,Em),e($s,Ka),e(Ka,qm),e($s,Cm),e(Ge,Dm),e(Ge,Ps),e(Ps,Nm),e(Ps,Ms),e(Ms,Hm),e(Ps,Lm),e(Ge,Sm),e(Ge,je),w(Gs,je,null),e(je,Im),e(je,Yt),e(Yt,Am),e(Yt,Ja),e(Ja,Om),e(Yt,Wm),e(Yt,fi),e(fi,Um),e(Yt,Rm),e(je,Bm),w(So,je,null),e(je,Vm),w(Io,je,null),e(je,Km),w(Ao,je,null),e(je,Jm),w(Oo,je,null),e(je,Xm),w(Wo,je,null),_(o,sd,v),_(o,Qt,v),e(Qt,Uo),e(Uo,gi),w(xs,gi,null),e(Qt,Ym),e(Qt,_i),e(_i,Qm),_(o,ad,v),_(o,Je,v),w(Fs,Je,null),e(Je,Zm),e(Je,Ti),e(Ti,eu),e(Je,tu),e(Je,js),e(js,ou),e(js,Xa),e(Xa,nu),e(js,su),e(Je,au),e(Je,zs),e(zs,ru),e(zs,Es),e(Es,iu),e(zs,lu),e(Je,du),e(Je,Xe),w(qs,Xe,null),e(Xe,cu),e(Xe,Zt),e(Zt,pu),e(Zt,Ya),e(Ya,hu),e(Zt,mu),e(Zt,vi),e(vi,uu),e(Zt,fu),e(Xe,gu),w(Ro,Xe,null),e(Xe,_u),w(Bo,Xe,null),e(Xe,Tu),w(Vo,Xe,null),_(o,rd,v),_(o,eo,v),e(eo,Ko),e(Ko,bi),w(Cs,bi,null),e(eo,vu),e(eo,yi),e(yi,bu),_(o,id,v),_(o,Ne,v),w(Ds,Ne,null),e(Ne,yu),e(Ne,ki),e(ki,ku),e(Ne,wu),e(Ne,Ns),e(Ns,$u),e(Ns,Qa),e(Qa,Pu),e(Ns,Mu),e(Ne,Gu),e(Ne,Hs),e(Hs,xu),e(Hs,Ls),e(Ls,Fu),e(Hs,ju),e(Ne,zu),w(Jo,Ne,null),e(Ne,Eu),e(Ne,mt),w(Ss,mt,null),e(mt,qu),e(mt,to),e(to,Cu),e(to,Za),e(Za,Du),e(to,Nu),e(to,wi),e(wi,Hu),e(to,Lu),e(mt,Su),w(Xo,mt,null),e(mt,Iu),w(Yo,mt,null),_(o,ld,v),_(o,oo,v),e(oo,Qo),e(Qo,$i),w(Is,$i,null),e(oo,Au),e(oo,Pi),e(Pi,Ou),_(o,dd,v),_(o,He,v),w(As,He,null),e(He,Wu),e(He,Mi),e(Mi,Uu),e(He,Ru),e(He,Os),e(Os,Bu),e(Os,er),e(er,Vu),e(Os,Ku),e(He,Ju),e(He,Ws),e(Ws,Xu),e(Ws,Us),e(Us,Yu),e(Ws,Qu),e(He,Zu),w(Zo,He,null),e(He,ef),e(He,ut),w(Rs,ut,null),e(ut,tf),e(ut,no),e(no,of),e(no,tr),e(tr,nf),e(no,sf),e(no,Gi),e(Gi,af),e(no,rf),e(ut,lf),w(en,ut,null),e(ut,df),w(tn,ut,null),_(o,cd,v),_(o,so,v),e(so,on),e(on,xi),w(Bs,xi,null),e(so,cf),e(so,Fi),e(Fi,pf),_(o,pd,v),_(o,Le,v),w(Vs,Le,null),e(Le,hf),e(Le,ji),e(ji,mf),e(Le,uf),e(Le,Ks),e(Ks,ff),e(Ks,or),e(or,gf),e(Ks,_f),e(Le,Tf),e(Le,Js),e(Js,vf),e(Js,Xs),e(Xs,bf),e(Js,yf),e(Le,kf),w(nn,Le,null),e(Le,wf),e(Le,ft),w(Ys,ft,null),e(ft,$f),e(ft,ao),e(ao,Pf),e(ao,nr),e(nr,Mf),e(ao,Gf),e(ao,zi),e(zi,xf),e(ao,Ff),e(ft,jf),w(sn,ft,null),e(ft,zf),w(an,ft,null),_(o,hd,v),_(o,ro,v),e(ro,rn),e(rn,Ei),w(Qs,Ei,null),e(ro,Ef),e(ro,qi),e(qi,qf),_(o,md,v),_(o,he,v),w(Zs,he,null),e(he,Cf),e(he,Ci),e(Ci,Df),e(he,Nf),e(he,sr),e(sr,ar),e(ar,Hf),e(sr,Lf),e(he,Sf),e(he,it),e(it,If),e(it,Di),e(Di,Af),e(it,Of),e(it,Ni),e(Ni,Wf),e(it,Uf),e(it,Hi),e(Hi,Rf),e(it,Bf),e(it,Li),e(Li,Vf),e(it,Kf),e(he,Jf),e(he,ea),e(ea,Xf),e(ea,rr),e(rr,Yf),e(ea,Qf),e(he,Zf),e(he,ta),e(ta,eg),e(ta,oa),e(oa,tg),e(ta,og),e(he,ng),w(ln,he,null),e(he,sg),e(he,Ye),w(na,Ye,null),e(Ye,ag),e(Ye,io),e(io,rg),e(io,ir),e(ir,ig),e(io,lg),e(io,Si),e(Si,dg),e(io,cg),e(Ye,pg),w(dn,Ye,null),e(Ye,hg),w(cn,Ye,null),e(Ye,mg),w(pn,Ye,null),_(o,ud,v),_(o,lo,v),e(lo,hn),e(hn,Ii),w(sa,Ii,null),e(lo,ug),e(lo,Ai),e(Ai,fg),_(o,fd,v),_(o,co,v),w(aa,co,null),e(co,gg),e(co,Oi),e(Oi,_g),_(o,gd,v),_(o,po,v),e(po,mn),e(mn,Wi),w(ra,Wi,null),e(po,Tg),e(po,Ui),e(Ui,vg),_(o,_d,v),_(o,xe,v),w(ia,xe,null),e(xe,bg),e(xe,Ri),e(Ri,yg),e(xe,kg),e(xe,la),e(la,wg),e(la,lr),e(lr,$g),e(la,Pg),e(xe,Mg),e(xe,da),e(da,Gg),e(da,ca),e(ca,xg),e(da,Fg),e(xe,jg),e(xe,Bi),e(Bi,zg),e(xe,Eg),e(xe,wt),e(wt,Vi),e(Vi,pa),e(pa,qg),e(wt,Cg),e(wt,Ki),e(Ki,ha),e(ha,Dg),e(wt,Ng),e(wt,Ji),e(Ji,ma),e(ma,Hg),e(wt,Lg),e(wt,Xi),e(Xi,ua),e(ua,Sg),e(xe,Ig),e(xe,gt),w(fa,gt,null),e(gt,Ag),e(gt,ho),e(ho,Og),e(ho,Yi),e(Yi,Wg),e(ho,Ug),e(ho,Qi),e(Qi,Rg),e(ho,Bg),e(gt,Vg),w(un,gt,null),e(gt,Kg),w(fn,gt,null),_(o,Td,v),_(o,mo,v),e(mo,gn),e(gn,Zi),w(ga,Zi,null),e(mo,Jg),e(mo,el),e(el,Xg),_(o,vd,v),_(o,Fe,v),w(_a,Fe,null),e(Fe,Yg),e(Fe,tl),e(tl,Qg),e(Fe,Zg),e(Fe,Ta),e(Ta,e_),e(Ta,dr),e(dr,t_),e(Ta,o_),e(Fe,n_),e(Fe,va),e(va,s_),e(va,ba),e(ba,a_),e(va,r_),e(Fe,i_),e(Fe,ol),e(ol,l_),e(Fe,d_),e(Fe,$t),e($t,nl),e(nl,ya),e(ya,c_),e($t,p_),e($t,sl),e(sl,ka),e(ka,h_),e($t,m_),e($t,al),e(al,wa),e(wa,u_),e($t,f_),e($t,rl),e(rl,$a),e($a,g_),e(Fe,__),e(Fe,_t),w(Pa,_t,null),e(_t,T_),e(_t,uo),e(uo,v_),e(uo,il),e(il,b_),e(uo,y_),e(uo,ll),e(ll,k_),e(uo,w_),e(_t,$_),w(_n,_t,null),e(_t,P_),w(Tn,_t,null),bd=!0},p(o,[v]){const Ma={};v&2&&(Ma.$$scope={dirty:v,ctx:o}),_o.$set(Ma);const dl={};v&2&&(dl.$$scope={dirty:v,ctx:o}),vo.$set(dl);const cl={};v&2&&(cl.$$scope={dirty:v,ctx:o}),bo.$set(cl);const pl={};v&2&&(pl.$$scope={dirty:v,ctx:o}),ko.$set(pl);const Ga={};v&2&&(Ga.$$scope={dirty:v,ctx:o}),wo.$set(Ga);const hl={};v&2&&(hl.$$scope={dirty:v,ctx:o}),Mo.$set(hl);const ml={};v&2&&(ml.$$scope={dirty:v,ctx:o}),Go.$set(ml);const ul={};v&2&&(ul.$$scope={dirty:v,ctx:o}),xo.$set(ul);const xa={};v&2&&(xa.$$scope={dirty:v,ctx:o}),Fo.$set(xa);const fl={};v&2&&(fl.$$scope={dirty:v,ctx:o}),zo.$set(fl);const gl={};v&2&&(gl.$$scope={dirty:v,ctx:o}),Eo.$set(gl);const _l={};v&2&&(_l.$$scope={dirty:v,ctx:o}),qo.$set(_l);const Tl={};v&2&&(Tl.$$scope={dirty:v,ctx:o}),Co.$set(Tl);const vl={};v&2&&(vl.$$scope={dirty:v,ctx:o}),No.$set(vl);const Pt={};v&2&&(Pt.$$scope={dirty:v,ctx:o}),Ho.$set(Pt);const bl={};v&2&&(bl.$$scope={dirty:v,ctx:o}),So.$set(bl);const Fa={};v&2&&(Fa.$$scope={dirty:v,ctx:o}),Io.$set(Fa);const yl={};v&2&&(yl.$$scope={dirty:v,ctx:o}),Ao.$set(yl);const me={};v&2&&(me.$$scope={dirty:v,ctx:o}),Oo.$set(me);const kl={};v&2&&(kl.$$scope={dirty:v,ctx:o}),Wo.$set(kl);const wl={};v&2&&(wl.$$scope={dirty:v,ctx:o}),Ro.$set(wl);const $l={};v&2&&($l.$$scope={dirty:v,ctx:o}),Bo.$set($l);const Pl={};v&2&&(Pl.$$scope={dirty:v,ctx:o}),Vo.$set(Pl);const Ml={};v&2&&(Ml.$$scope={dirty:v,ctx:o}),Jo.$set(Ml);const Gl={};v&2&&(Gl.$$scope={dirty:v,ctx:o}),Xo.$set(Gl);const xl={};v&2&&(xl.$$scope={dirty:v,ctx:o}),Yo.$set(xl);const Fl={};v&2&&(Fl.$$scope={dirty:v,ctx:o}),Zo.$set(Fl);const Mt={};v&2&&(Mt.$$scope={dirty:v,ctx:o}),en.$set(Mt);const jl={};v&2&&(jl.$$scope={dirty:v,ctx:o}),tn.$set(jl);const zl={};v&2&&(zl.$$scope={dirty:v,ctx:o}),nn.$set(zl);const El={};v&2&&(El.$$scope={dirty:v,ctx:o}),sn.$set(El);const vn={};v&2&&(vn.$$scope={dirty:v,ctx:o}),an.$set(vn);const ql={};v&2&&(ql.$$scope={dirty:v,ctx:o}),ln.$set(ql);const Cl={};v&2&&(Cl.$$scope={dirty:v,ctx:o}),dn.$set(Cl);const fo={};v&2&&(fo.$$scope={dirty:v,ctx:o}),cn.$set(fo);const Dl={};v&2&&(Dl.$$scope={dirty:v,ctx:o}),pn.$set(Dl);const Nl={};v&2&&(Nl.$$scope={dirty:v,ctx:o}),un.$set(Nl);const ja={};v&2&&(ja.$$scope={dirty:v,ctx:o}),fn.$set(ja);const Hl={};v&2&&(Hl.$$scope={dirty:v,ctx:o}),_n.$set(Hl);const Ll={};v&2&&(Ll.$$scope={dirty:v,ctx:o}),Tn.$set(Ll)},i(o){bd||($(n.$$.fragment,o),$(Z.$$.fragment,o),$(Ln.$$.fragment,o),$(Sn.$$.fragment,o),$(_o.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(vo.$$.fragment,o),$(bo.$$.fragment,o),$(Rn.$$.fragment,o),$(Bn.$$.fragment,o),$(Vn.$$.fragment,o),$(ko.$$.fragment,o),$(wo.$$.fragment,o),$(Yn.$$.fragment,o),$(Qn.$$.fragment,o),$(Zn.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(as.$$.fragment,o),$(Mo.$$.fragment,o),$(Go.$$.fragment,o),$(rs.$$.fragment,o),$(xo.$$.fragment,o),$(is.$$.fragment,o),$(Fo.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(ms.$$.fragment,o),$(zo.$$.fragment,o),$(Eo.$$.fragment,o),$(us.$$.fragment,o),$(qo.$$.fragment,o),$(fs.$$.fragment,o),$(Co.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(ys.$$.fragment,o),$(No.$$.fragment,o),$(Ho.$$.fragment,o),$(ks.$$.fragment,o),$(ws.$$.fragment,o),$(Gs.$$.fragment,o),$(So.$$.fragment,o),$(Io.$$.fragment,o),$(Ao.$$.fragment,o),$(Oo.$$.fragment,o),$(Wo.$$.fragment,o),$(xs.$$.fragment,o),$(Fs.$$.fragment,o),$(qs.$$.fragment,o),$(Ro.$$.fragment,o),$(Bo.$$.fragment,o),$(Vo.$$.fragment,o),$(Cs.$$.fragment,o),$(Ds.$$.fragment,o),$(Jo.$$.fragment,o),$(Ss.$$.fragment,o),$(Xo.$$.fragment,o),$(Yo.$$.fragment,o),$(Is.$$.fragment,o),$(As.$$.fragment,o),$(Zo.$$.fragment,o),$(Rs.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(Bs.$$.fragment,o),$(Vs.$$.fragment,o),$(nn.$$.fragment,o),$(Ys.$$.fragment,o),$(sn.$$.fragment,o),$(an.$$.fragment,o),$(Qs.$$.fragment,o),$(Zs.$$.fragment,o),$(ln.$$.fragment,o),$(na.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(sa.$$.fragment,o),$(aa.$$.fragment,o),$(ra.$$.fragment,o),$(ia.$$.fragment,o),$(fa.$$.fragment,o),$(un.$$.fragment,o),$(fn.$$.fragment,o),$(ga.$$.fragment,o),$(_a.$$.fragment,o),$(Pa.$$.fragment,o),$(_n.$$.fragment,o),$(Tn.$$.fragment,o),bd=!0)},o(o){P(n.$$.fragment,o),P(Z.$$.fragment,o),P(Ln.$$.fragment,o),P(Sn.$$.fragment,o),P(_o.$$.fragment,o),P(An.$$.fragment,o),P(On.$$.fragment,o),P(vo.$$.fragment,o),P(bo.$$.fragment,o),P(Rn.$$.fragment,o),P(Bn.$$.fragment,o),P(Vn.$$.fragment,o),P(ko.$$.fragment,o),P(wo.$$.fragment,o),P(Yn.$$.fragment,o),P(Qn.$$.fragment,o),P(Zn.$$.fragment,o),P(es.$$.fragment,o),P(ts.$$.fragment,o),P(as.$$.fragment,o),P(Mo.$$.fragment,o),P(Go.$$.fragment,o),P(rs.$$.fragment,o),P(xo.$$.fragment,o),P(is.$$.fragment,o),P(Fo.$$.fragment,o),P(ls.$$.fragment,o),P(ds.$$.fragment,o),P(ms.$$.fragment,o),P(zo.$$.fragment,o),P(Eo.$$.fragment,o),P(us.$$.fragment,o),P(qo.$$.fragment,o),P(fs.$$.fragment,o),P(Co.$$.fragment,o),P(gs.$$.fragment,o),P(_s.$$.fragment,o),P(ys.$$.fragment,o),P(No.$$.fragment,o),P(Ho.$$.fragment,o),P(ks.$$.fragment,o),P(ws.$$.fragment,o),P(Gs.$$.fragment,o),P(So.$$.fragment,o),P(Io.$$.fragment,o),P(Ao.$$.fragment,o),P(Oo.$$.fragment,o),P(Wo.$$.fragment,o),P(xs.$$.fragment,o),P(Fs.$$.fragment,o),P(qs.$$.fragment,o),P(Ro.$$.fragment,o),P(Bo.$$.fragment,o),P(Vo.$$.fragment,o),P(Cs.$$.fragment,o),P(Ds.$$.fragment,o),P(Jo.$$.fragment,o),P(Ss.$$.fragment,o),P(Xo.$$.fragment,o),P(Yo.$$.fragment,o),P(Is.$$.fragment,o),P(As.$$.fragment,o),P(Zo.$$.fragment,o),P(Rs.$$.fragment,o),P(en.$$.fragment,o),P(tn.$$.fragment,o),P(Bs.$$.fragment,o),P(Vs.$$.fragment,o),P(nn.$$.fragment,o),P(Ys.$$.fragment,o),P(sn.$$.fragment,o),P(an.$$.fragment,o),P(Qs.$$.fragment,o),P(Zs.$$.fragment,o),P(ln.$$.fragment,o),P(na.$$.fragment,o),P(dn.$$.fragment,o),P(cn.$$.fragment,o),P(pn.$$.fragment,o),P(sa.$$.fragment,o),P(aa.$$.fragment,o),P(ra.$$.fragment,o),P(ia.$$.fragment,o),P(fa.$$.fragment,o),P(un.$$.fragment,o),P(fn.$$.fragment,o),P(ga.$$.fragment,o),P(_a.$$.fragment,o),P(Pa.$$.fragment,o),P(_n.$$.fragment,o),P(Tn.$$.fragment,o),bd=!1},d(o){t(d),o&&t(T),o&&t(m),M(n),o&&t(C),o&&t(j),M(Z),o&&t(ue),o&&t(W),o&&t(q),o&&t(ie),o&&t(fe),o&&t(le),o&&t(ge),o&&t(E),o&&t(U),o&&t(R),o&&t(Sl),o&&t(Nt),o&&t(Il),o&&t(Gt),o&&t(Al),o&&t(Ht),M(Ln),o&&t(Ol),o&&t(at),M(Sn),M(_o),o&&t(Wl),o&&t(St),M(An),o&&t(Ul),o&&t(pe),M(On),M(vo),M(bo),M(Rn),o&&t(Rl),o&&t(It),M(Bn),o&&t(Bl),o&&t($e),M(Vn),M(ko),M(wo),o&&t(Vl),o&&t(At),M(Yn),o&&t(Kl),o&&t(Ot),M(Qn),o&&t(Jl),o&&t(Wt),M(Zn),o&&t(Xl),o&&t(Ut),M(es),o&&t(Yl),o&&t(Pe),M(ts),M(as),M(Mo),M(Go),M(rs),M(xo),M(is),M(Fo),o&&t(Ql),o&&t(Bt),M(ls),o&&t(Zl),o&&t(Me),M(ds),M(ms),M(zo),M(Eo),M(us),M(qo),M(fs),M(Co),o&&t(ed),o&&t(Kt),M(gs),o&&t(td),o&&t(Ke),M(_s),M(ys),M(No),M(Ho),o&&t(od),o&&t(Xt),M(ks),o&&t(nd),o&&t(Ge),M(ws),M(Gs),M(So),M(Io),M(Ao),M(Oo),M(Wo),o&&t(sd),o&&t(Qt),M(xs),o&&t(ad),o&&t(Je),M(Fs),M(qs),M(Ro),M(Bo),M(Vo),o&&t(rd),o&&t(eo),M(Cs),o&&t(id),o&&t(Ne),M(Ds),M(Jo),M(Ss),M(Xo),M(Yo),o&&t(ld),o&&t(oo),M(Is),o&&t(dd),o&&t(He),M(As),M(Zo),M(Rs),M(en),M(tn),o&&t(cd),o&&t(so),M(Bs),o&&t(pd),o&&t(Le),M(Vs),M(nn),M(Ys),M(sn),M(an),o&&t(hd),o&&t(ro),M(Qs),o&&t(md),o&&t(he),M(Zs),M(ln),M(na),M(dn),M(cn),M(pn),o&&t(ud),o&&t(lo),M(sa),o&&t(fd),o&&t(co),M(aa),o&&t(gd),o&&t(po),M(ra),o&&t(_d),o&&t(xe),M(ia),M(fa),M(un),M(fn),o&&t(Td),o&&t(mo),M(ga),o&&t(vd),o&&t(Fe),M(_a),M(Pa),M(_n),M(Tn)}}}const cb={local:"openai-gpt2",sections:[{local:"overview",title:"Overview"},{local:"transformers.GPT2Config",title:"GPT2Config"},{local:"transformers.GPT2Tokenizer",title:"GPT2Tokenizer"},{local:"transformers.GPT2TokenizerFast",title:"GPT2TokenizerFast"},{local:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",title:"GPT2 specific outputs"},{local:"transformers.GPT2Model",title:"GPT2Model"},{local:"transformers.GPT2LMHeadModel",title:"GPT2LMHeadModel"},{local:"transformers.GPT2DoubleHeadsModel",title:"GPT2DoubleHeadsModel"},{local:"transformers.GPT2ForSequenceClassification",title:"GPT2ForSequenceClassification"},{local:"transformers.GPT2ForTokenClassification",title:"GPT2ForTokenClassification"},{local:"transformers.TFGPT2Model",title:"TFGPT2Model"},{local:"transformers.TFGPT2LMHeadModel",title:"TFGPT2LMHeadModel"},{local:"transformers.TFGPT2DoubleHeadsModel",title:"TFGPT2DoubleHeadsModel"},{local:"transformers.TFGPT2ForSequenceClassification",title:"TFGPT2ForSequenceClassification"},{local:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",title:"TFSequenceClassifierOutputWithPast"},{local:"transformers.FlaxGPT2Model",title:"FlaxGPT2Model"},{local:"transformers.FlaxGPT2LMHeadModel",title:"FlaxGPT2LMHeadModel"}],title:"OpenAI GPT2"};function pb(G){return kv(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Tb extends Tv{constructor(d){super();vv(this,d,pb,db,bv,{})}}export{Tb as default,cb as metadata};
