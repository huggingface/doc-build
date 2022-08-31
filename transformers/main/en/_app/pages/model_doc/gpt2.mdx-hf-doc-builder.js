import{S as Tb,i as bb,s as vb,e as s,k as p,w as y,t as r,M as yb,c as a,d as t,m as h,a as l,x as k,h as i,b as f,G as e,g as _,y as w,q as $,o as P,B as M,v as kb,L as ae}from"../../chunks/vendor-hf-doc-builder.js";import{T as He}from"../../chunks/Tip-hf-doc-builder.js";import{D as L}from"../../chunks/Docstring-hf-doc-builder.js";import{C as re}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as se}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function wb(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Model, GPT2Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function $b(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=s("p"),T=r("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Pb(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("When used with "),m=s("code"),c=r("is_split_into_words=True"),g=r(", this tokenizer will add a space before each word (even the first one).")},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"When used with "),m=a(u,"CODE",{});var F=l(m);c=i(F,"is_split_into_words=True"),F.forEach(t),g=i(u,", this tokenizer will add a space before each word (even the first one)."),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function Mb(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2TokenizerFast
tokenizer = GPT2TokenizerFast.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2TokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPT2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=s("p"),T=r("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Gb(G){let d,T,m,c,g,n,u,F;return{c(){d=s("p"),T=r("When used with "),m=s("code"),c=r("is_split_into_words=True"),g=r(", this tokenizer needs to be instantiated with "),n=s("code"),u=r("add_prefix_space=True"),F=r(".")},l(Q){d=a(Q,"P",{});var C=l(d);T=i(C,"When used with "),m=a(C,"CODE",{});var j=l(m);c=i(j,"is_split_into_words=True"),j.forEach(t),g=i(C,", this tokenizer needs to be instantiated with "),n=a(C,"CODE",{});var B=l(n);u=i(B,"add_prefix_space=True"),B.forEach(t),F=i(C,"."),C.forEach(t)},m(Q,C){_(Q,d,C),e(d,T),e(d,m),e(m,c),e(d,g),e(d,n),e(n,u),e(d,F)},d(Q){Q&&t(d)}}}function xb(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function Fb(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, GPT2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function jb(G){let d,T,m,c,g;return c=new re({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:
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
model.parallelize(device_map)`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function zb(G){let d,T,m,c,g;return c=new re({props:{code:`# On a 4 GPU machine with gpt2-large:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Eb(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function qb(G){let d,T,m,c,g;return c=new re({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Cb(G){let d,T,m,c,g;return c=new re({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:
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
model.parallelize(device_map)`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Db(G){let d,T,m,c,g;return c=new re({props:{code:`# On a 4 GPU machine with gpt2-large:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Lb(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function Ob(G){let d,T,m,c,g;return c=new re({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Nb(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function Hb(G){let d,T,m,c,g;return c=new re({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=s("p"),T=r("Example of single-label classification:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example of single-label classification:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Ib(G){let d,T;return d=new re({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = GPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">5.28</span>`}}),{c(){y(d.$$.fragment)},l(m){k(d.$$.fragment,m)},m(m,c){w(d,m,c),T=!0},p:ae,i(m){T||($(d.$$.fragment,m),T=!0)},o(m){P(d.$$.fragment,m),T=!1},d(m){M(d,m)}}}function Sb(G){let d,T,m,c,g;return c=new re({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=s("p"),T=r("Example of multi-label classification:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example of multi-label classification:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Ab(G){let d,T;return d=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(m){k(d.$$.fragment,m)},m(m,c){w(d,m,c),T=!0},p:ae,i(m){T||($(d.$$.fragment,m),T=!0)},o(m){P(d.$$.fragment,m),T=!1},d(m){M(d,m)}}}function Wb(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function Ub(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, GPT2ForTokenClassification
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
[<span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Position&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>]`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Rb(G){let d,T;return d=new re({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.25</span>`}}),{c(){y(d.$$.fragment)},l(m){k(d.$$.fragment,m)},m(m,c){w(d,m,c),T=!0},p:ae,i(m){T||($(d.$$.fragment,m),T=!0)},o(m){P(d.$$.fragment,m),T=!1},d(m){M(d,m)}}}function Bb(G){let d,T,m,c,g,n,u,F,Q,C,j,B,I,Z,_e,S,Te,ue,W,O,ee,te,z,q,ie,V,fe,le,A,be,ge,E,ve,U,R,de,K,ye,oe,N,ce,J,ke;return{c(){d=s("p"),T=r("TF 2.0 models accepts two formats as inputs:"),m=p(),c=s("ul"),g=s("li"),n=r("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),F=s("li"),Q=r("having all inputs as a list, tuple or dict in the first positional arguments."),C=p(),j=s("p"),B=r("This second option is useful when using "),I=s("code"),Z=r("tf.keras.Model.fit"),_e=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),Te=r("model(inputs)"),ue=r("."),W=p(),O=s("p"),ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=p(),z=s("ul"),q=s("li"),ie=r("a single Tensor with "),V=s("code"),fe=r("input_ids"),le=r(" only and nothing else: "),A=s("code"),be=r("model(inputs_ids)"),ge=p(),E=s("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s("code"),R=r("model([input_ids, attention_mask])"),de=r(" or "),K=s("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),oe=p(),N=s("li"),ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),ke=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=a(v,"P",{});var x=l(d);T=i(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),m=h(v),c=a(v,"UL",{});var ne=l(c);g=a(ne,"LI",{});var Ee=l(g);n=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),u=h(ne),F=a(ne,"LI",{});var Ae=l(F);Q=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),ne.forEach(t),C=h(v),j=a(v,"P",{});var H=l(j);B=i(H,"This second option is useful when using "),I=a(H,"CODE",{});var qe=l(I);Z=i(qe,"tf.keras.Model.fit"),qe.forEach(t),_e=i(H,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(H,"CODE",{});var We=l(S);Te=i(We,"model(inputs)"),We.forEach(t),ue=i(H,"."),H.forEach(t),W=h(v),O=a(v,"P",{});var Ue=l(O);ee=i(Ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ue.forEach(t),te=h(v),z=a(v,"UL",{});var D=l(z);q=a(D,"LI",{});var X=l(q);ie=i(X,"a single Tensor with "),V=a(X,"CODE",{});var Re=l(V);fe=i(Re,"input_ids"),Re.forEach(t),le=i(X," only and nothing else: "),A=a(X,"CODE",{});var Ce=l(A);be=i(Ce,"model(inputs_ids)"),Ce.forEach(t),X.forEach(t),ge=h(D),E=a(D,"LI",{});var Y=l(E);ve=i(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(Y,"CODE",{});var Be=l(U);R=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),de=i(Y," or "),K=a(Y,"CODE",{});var De=l(K);ye=i(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),oe=h(D),N=a(D,"LI",{});var we=l(N);ce=i(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(we,"CODE",{});var Ve=l(J);ke=i(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),we.forEach(t),D.forEach(t)},m(v,x){_(v,d,x),e(d,T),_(v,m,x),_(v,c,x),e(c,g),e(g,n),e(c,u),e(c,F),e(F,Q),_(v,C,x),_(v,j,x),e(j,B),e(j,I),e(I,Z),e(j,_e),e(j,S),e(S,Te),e(j,ue),_(v,W,x),_(v,O,x),e(O,ee),_(v,te,x),_(v,z,x),e(z,q),e(q,ie),e(q,V),e(V,fe),e(q,le),e(q,A),e(A,be),e(z,ge),e(z,E),e(E,ve),e(E,U),e(U,R),e(E,de),e(E,K),e(K,ye),e(z,oe),e(z,N),e(N,ce),e(N,J),e(J,ke)},d(v){v&&t(d),v&&t(m),v&&t(c),v&&t(C),v&&t(j),v&&t(W),v&&t(O),v&&t(te),v&&t(z)}}}function Vb(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function Kb(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, TFGPT2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Jb(G){let d,T,m,c,g,n,u,F,Q,C,j,B,I,Z,_e,S,Te,ue,W,O,ee,te,z,q,ie,V,fe,le,A,be,ge,E,ve,U,R,de,K,ye,oe,N,ce,J,ke;return{c(){d=s("p"),T=r("TF 2.0 models accepts two formats as inputs:"),m=p(),c=s("ul"),g=s("li"),n=r("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),F=s("li"),Q=r("having all inputs as a list, tuple or dict in the first positional arguments."),C=p(),j=s("p"),B=r("This second option is useful when using "),I=s("code"),Z=r("tf.keras.Model.fit"),_e=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),Te=r("model(inputs)"),ue=r("."),W=p(),O=s("p"),ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=p(),z=s("ul"),q=s("li"),ie=r("a single Tensor with "),V=s("code"),fe=r("input_ids"),le=r(" only and nothing else: "),A=s("code"),be=r("model(inputs_ids)"),ge=p(),E=s("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s("code"),R=r("model([input_ids, attention_mask])"),de=r(" or "),K=s("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),oe=p(),N=s("li"),ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),ke=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=a(v,"P",{});var x=l(d);T=i(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),m=h(v),c=a(v,"UL",{});var ne=l(c);g=a(ne,"LI",{});var Ee=l(g);n=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),u=h(ne),F=a(ne,"LI",{});var Ae=l(F);Q=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),ne.forEach(t),C=h(v),j=a(v,"P",{});var H=l(j);B=i(H,"This second option is useful when using "),I=a(H,"CODE",{});var qe=l(I);Z=i(qe,"tf.keras.Model.fit"),qe.forEach(t),_e=i(H,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(H,"CODE",{});var We=l(S);Te=i(We,"model(inputs)"),We.forEach(t),ue=i(H,"."),H.forEach(t),W=h(v),O=a(v,"P",{});var Ue=l(O);ee=i(Ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ue.forEach(t),te=h(v),z=a(v,"UL",{});var D=l(z);q=a(D,"LI",{});var X=l(q);ie=i(X,"a single Tensor with "),V=a(X,"CODE",{});var Re=l(V);fe=i(Re,"input_ids"),Re.forEach(t),le=i(X," only and nothing else: "),A=a(X,"CODE",{});var Ce=l(A);be=i(Ce,"model(inputs_ids)"),Ce.forEach(t),X.forEach(t),ge=h(D),E=a(D,"LI",{});var Y=l(E);ve=i(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(Y,"CODE",{});var Be=l(U);R=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),de=i(Y," or "),K=a(Y,"CODE",{});var De=l(K);ye=i(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),oe=h(D),N=a(D,"LI",{});var we=l(N);ce=i(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(we,"CODE",{});var Ve=l(J);ke=i(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),we.forEach(t),D.forEach(t)},m(v,x){_(v,d,x),e(d,T),_(v,m,x),_(v,c,x),e(c,g),e(g,n),e(c,u),e(c,F),e(F,Q),_(v,C,x),_(v,j,x),e(j,B),e(j,I),e(I,Z),e(j,_e),e(j,S),e(S,Te),e(j,ue),_(v,W,x),_(v,O,x),e(O,ee),_(v,te,x),_(v,z,x),e(z,q),e(q,ie),e(q,V),e(V,fe),e(q,le),e(q,A),e(A,be),e(z,ge),e(z,E),e(E,ve),e(E,U),e(U,R),e(E,de),e(E,K),e(K,ye),e(z,oe),e(z,N),e(N,ce),e(N,J),e(J,ke)},d(v){v&&t(d),v&&t(m),v&&t(c),v&&t(C),v&&t(j),v&&t(W),v&&t(O),v&&t(te),v&&t(z)}}}function Xb(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function Yb(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, TFGPT2LMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function Qb(G){let d,T,m,c,g,n,u,F,Q,C,j,B,I,Z,_e,S,Te,ue,W,O,ee,te,z,q,ie,V,fe,le,A,be,ge,E,ve,U,R,de,K,ye,oe,N,ce,J,ke;return{c(){d=s("p"),T=r("TF 2.0 models accepts two formats as inputs:"),m=p(),c=s("ul"),g=s("li"),n=r("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),F=s("li"),Q=r("having all inputs as a list, tuple or dict in the first positional arguments."),C=p(),j=s("p"),B=r("This second option is useful when using "),I=s("code"),Z=r("tf.keras.Model.fit"),_e=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),Te=r("model(inputs)"),ue=r("."),W=p(),O=s("p"),ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=p(),z=s("ul"),q=s("li"),ie=r("a single Tensor with "),V=s("code"),fe=r("input_ids"),le=r(" only and nothing else: "),A=s("code"),be=r("model(inputs_ids)"),ge=p(),E=s("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s("code"),R=r("model([input_ids, attention_mask])"),de=r(" or "),K=s("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),oe=p(),N=s("li"),ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),ke=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=a(v,"P",{});var x=l(d);T=i(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),m=h(v),c=a(v,"UL",{});var ne=l(c);g=a(ne,"LI",{});var Ee=l(g);n=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),u=h(ne),F=a(ne,"LI",{});var Ae=l(F);Q=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),ne.forEach(t),C=h(v),j=a(v,"P",{});var H=l(j);B=i(H,"This second option is useful when using "),I=a(H,"CODE",{});var qe=l(I);Z=i(qe,"tf.keras.Model.fit"),qe.forEach(t),_e=i(H,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(H,"CODE",{});var We=l(S);Te=i(We,"model(inputs)"),We.forEach(t),ue=i(H,"."),H.forEach(t),W=h(v),O=a(v,"P",{});var Ue=l(O);ee=i(Ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ue.forEach(t),te=h(v),z=a(v,"UL",{});var D=l(z);q=a(D,"LI",{});var X=l(q);ie=i(X,"a single Tensor with "),V=a(X,"CODE",{});var Re=l(V);fe=i(Re,"input_ids"),Re.forEach(t),le=i(X," only and nothing else: "),A=a(X,"CODE",{});var Ce=l(A);be=i(Ce,"model(inputs_ids)"),Ce.forEach(t),X.forEach(t),ge=h(D),E=a(D,"LI",{});var Y=l(E);ve=i(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(Y,"CODE",{});var Be=l(U);R=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),de=i(Y," or "),K=a(Y,"CODE",{});var De=l(K);ye=i(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),oe=h(D),N=a(D,"LI",{});var we=l(N);ce=i(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(we,"CODE",{});var Ve=l(J);ke=i(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),we.forEach(t),D.forEach(t)},m(v,x){_(v,d,x),e(d,T),_(v,m,x),_(v,c,x),e(c,g),e(g,n),e(c,u),e(c,F),e(F,Q),_(v,C,x),_(v,j,x),e(j,B),e(j,I),e(I,Z),e(j,_e),e(j,S),e(S,Te),e(j,ue),_(v,W,x),_(v,O,x),e(O,ee),_(v,te,x),_(v,z,x),e(z,q),e(q,ie),e(q,V),e(V,fe),e(q,le),e(q,A),e(A,be),e(z,ge),e(z,E),e(E,ve),e(E,U),e(U,R),e(E,de),e(E,K),e(K,ye),e(z,oe),e(z,N),e(N,ce),e(N,J),e(J,ke)},d(v){v&&t(d),v&&t(m),v&&t(c),v&&t(C),v&&t(j),v&&t(W),v&&t(O),v&&t(te),v&&t(z)}}}function Zb(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function ev(G){let d,T,m,c,g;return c=new re({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=s("p"),T=r("Examples:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Examples:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function tv(G){let d,T,m,c,g,n,u,F,Q,C,j,B,I,Z,_e,S,Te,ue,W,O,ee,te,z,q,ie,V,fe,le,A,be,ge,E,ve,U,R,de,K,ye,oe,N,ce,J,ke;return{c(){d=s("p"),T=r("TF 2.0 models accepts two formats as inputs:"),m=p(),c=s("ul"),g=s("li"),n=r("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),F=s("li"),Q=r("having all inputs as a list, tuple or dict in the first positional arguments."),C=p(),j=s("p"),B=r("This second option is useful when using "),I=s("code"),Z=r("tf.keras.Model.fit"),_e=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),Te=r("model(inputs)"),ue=r("."),W=p(),O=s("p"),ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=p(),z=s("ul"),q=s("li"),ie=r("a single Tensor with "),V=s("code"),fe=r("input_ids"),le=r(" only and nothing else: "),A=s("code"),be=r("model(inputs_ids)"),ge=p(),E=s("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s("code"),R=r("model([input_ids, attention_mask])"),de=r(" or "),K=s("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),oe=p(),N=s("li"),ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),ke=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=a(v,"P",{});var x=l(d);T=i(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),m=h(v),c=a(v,"UL",{});var ne=l(c);g=a(ne,"LI",{});var Ee=l(g);n=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),u=h(ne),F=a(ne,"LI",{});var Ae=l(F);Q=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),ne.forEach(t),C=h(v),j=a(v,"P",{});var H=l(j);B=i(H,"This second option is useful when using "),I=a(H,"CODE",{});var qe=l(I);Z=i(qe,"tf.keras.Model.fit"),qe.forEach(t),_e=i(H,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(H,"CODE",{});var We=l(S);Te=i(We,"model(inputs)"),We.forEach(t),ue=i(H,"."),H.forEach(t),W=h(v),O=a(v,"P",{});var Ue=l(O);ee=i(Ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ue.forEach(t),te=h(v),z=a(v,"UL",{});var D=l(z);q=a(D,"LI",{});var X=l(q);ie=i(X,"a single Tensor with "),V=a(X,"CODE",{});var Re=l(V);fe=i(Re,"input_ids"),Re.forEach(t),le=i(X," only and nothing else: "),A=a(X,"CODE",{});var Ce=l(A);be=i(Ce,"model(inputs_ids)"),Ce.forEach(t),X.forEach(t),ge=h(D),E=a(D,"LI",{});var Y=l(E);ve=i(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(Y,"CODE",{});var Be=l(U);R=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),de=i(Y," or "),K=a(Y,"CODE",{});var De=l(K);ye=i(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),oe=h(D),N=a(D,"LI",{});var we=l(N);ce=i(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(we,"CODE",{});var Ve=l(J);ke=i(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),we.forEach(t),D.forEach(t)},m(v,x){_(v,d,x),e(d,T),_(v,m,x),_(v,c,x),e(c,g),e(g,n),e(c,u),e(c,F),e(F,Q),_(v,C,x),_(v,j,x),e(j,B),e(j,I),e(I,Z),e(j,_e),e(j,S),e(S,Te),e(j,ue),_(v,W,x),_(v,O,x),e(O,ee),_(v,te,x),_(v,z,x),e(z,q),e(q,ie),e(q,V),e(V,fe),e(q,le),e(q,A),e(A,be),e(z,ge),e(z,E),e(E,ve),e(E,U),e(U,R),e(E,de),e(E,K),e(K,ye),e(z,oe),e(z,N),e(N,ce),e(N,J),e(J,ke)},d(v){v&&t(d),v&&t(m),v&&t(c),v&&t(C),v&&t(j),v&&t(W),v&&t(O),v&&t(te),v&&t(z)}}}function ov(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function nv(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, TFGPT2ForSequenceClassification
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
`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function sv(G){let d,T;return d=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(d.$$.fragment)},l(m){k(d.$$.fragment,m)},m(m,c){w(d,m,c),T=!0},p:ae,i(m){T||($(d.$$.fragment,m),T=!0)},o(m){P(d.$$.fragment,m),T=!1},d(m){M(d,m)}}}function av(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function rv(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, FlaxGPT2Model

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = FlaxGPT2Model.from_pretrained("gpt2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxGPT2Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPT2Model.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function iv(G){let d,T,m,c,g;return{c(){d=s("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var F=l(m);c=i(F,"Module"),F.forEach(t),g=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){_(n,d,u),e(d,T),e(d,m),e(m,c),e(d,g)},d(n){n&&t(d)}}}function lv(G){let d,T,m,c,g;return c=new re({props:{code:`from transformers import GPT2Tokenizer, FlaxGPT2LMHeadModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=s("p"),T=r("Example:"),m=p(),y(c.$$.fragment)},l(n){d=a(n,"P",{});var u=l(d);T=i(u,"Example:"),u.forEach(t),m=h(n),k(c.$$.fragment,n)},m(n,u){_(n,d,u),e(d,T),_(n,m,u),w(c,n,u),g=!0},p:ae,i(n){g||($(c.$$.fragment,n),g=!0)},o(n){P(c.$$.fragment,n),g=!1},d(n){n&&t(d),n&&t(m),M(c,n)}}}function dv(G){let d,T,m,c,g,n,u,F,Q,C,j,B,I,Z,_e,S,Te,ue,W,O,ee,te,z,q,ie,V,fe,le,A,be,ge,E,ve,U,R,de,K,ye,oe,N,ce,J,ke,v,x,ne,Ee,Ae,H,qe,We,Ue,D,X,Re,Ce,Y,Be,De,we,Ve,za,hc,mc,$r,uc,fc,Ea,gc,_c,Tc,yt,bc,Pr,vc,yc,Mr,kc,wc,Cn,$c,Pc,Hl,Lt,Dn,Mc,Gc,Gr,xc,Fc,Il,Gt,jc,Ln,zc,Ec,On,qc,Cc,Sl,Ot,go,xr,Nn,Dc,Fr,Lc,Al,at,Hn,Oc,kt,Nc,qa,Hc,Ic,Ca,Sc,Ac,In,Wc,Uc,Rc,Nt,Bc,Da,Vc,Kc,La,Jc,Xc,Yc,_o,Wl,Ht,To,jr,Sn,Qc,zr,Zc,Ul,pe,An,ep,Er,tp,op,qr,np,sp,bo,ap,Wn,rp,Cr,ip,lp,dp,vo,cp,Un,pp,Oa,hp,mp,up,Na,Rn,Rl,It,yo,Dr,Bn,fp,Lr,gp,Bl,$e,Vn,_p,Kn,Tp,Or,bp,vp,yp,Nr,kp,wp,ko,$p,Jn,Pp,Hr,Mp,Gp,xp,wo,Fp,Xn,jp,Ha,zp,Ep,Vl,St,$o,Ir,Yn,qp,Sr,Cp,Kl,At,Qn,Dp,Ar,Lp,Jl,Wt,Zn,Op,Wr,Np,Xl,Ut,Po,Ur,es,Hp,Rr,Ip,Yl,Pe,ts,Sp,Br,Ap,Wp,os,Up,Ia,Rp,Bp,Vp,ns,Kp,ss,Jp,Xp,Yp,lt,as,Qp,Rt,Zp,Sa,eh,th,Vr,oh,nh,sh,Mo,ah,Go,rh,dt,rs,ih,Kr,lh,dh,Jr,ch,ph,xo,hh,xt,is,mh,Xr,uh,fh,Fo,Ql,Bt,jo,Yr,ls,gh,Qr,_h,Zl,Me,ds,Th,Zr,bh,vh,cs,yh,Aa,kh,wh,$h,ps,Ph,hs,Mh,Gh,xh,ct,ms,Fh,Vt,jh,Wa,zh,Eh,ei,qh,Ch,Dh,zo,Lh,Eo,Oh,pt,us,Nh,ti,Hh,Ih,oi,Sh,Ah,qo,Wh,Ft,fs,Uh,ni,Rh,Bh,Co,ed,Kt,Do,si,gs,Vh,ai,Kh,td,Ke,_s,Jh,ri,Xh,Yh,Ts,Qh,Ua,Zh,em,tm,bs,om,vs,nm,sm,am,ht,ys,rm,Jt,im,Ra,lm,dm,ii,cm,pm,hm,Lo,mm,Oo,od,Xt,No,li,ks,um,di,fm,nd,Ge,ws,gm,ci,_m,Tm,Ba,Va,bm,vm,ym,rt,km,pi,wm,$m,hi,Pm,Mm,mi,Gm,xm,ui,Fm,jm,zm,$s,Em,Ka,qm,Cm,Dm,Ps,Lm,Ms,Om,Nm,Hm,je,Gs,Im,Yt,Sm,Ja,Am,Wm,fi,Um,Rm,Bm,Ho,Vm,Io,Km,So,Jm,Ao,Xm,Wo,sd,Qt,Uo,gi,xs,Ym,_i,Qm,ad,Je,Fs,Zm,Ti,eu,tu,js,ou,Xa,nu,su,au,zs,ru,Es,iu,lu,du,Xe,qs,cu,Zt,pu,Ya,hu,mu,bi,uu,fu,gu,Ro,_u,Bo,Tu,Vo,rd,eo,Ko,vi,Cs,bu,yi,vu,id,Le,Ds,yu,ki,ku,wu,Ls,$u,Qa,Pu,Mu,Gu,Os,xu,Ns,Fu,ju,zu,Jo,Eu,mt,Hs,qu,to,Cu,Za,Du,Lu,wi,Ou,Nu,Hu,Xo,Iu,Yo,ld,oo,Qo,$i,Is,Su,Pi,Au,dd,Oe,Ss,Wu,Mi,Uu,Ru,As,Bu,er,Vu,Ku,Ju,Ws,Xu,Us,Yu,Qu,Zu,Zo,ef,ut,Rs,tf,no,of,tr,nf,sf,Gi,af,rf,lf,en,df,tn,cd,so,on,xi,Bs,cf,Fi,pf,pd,Ne,Vs,hf,ji,mf,uf,Ks,ff,or,gf,_f,Tf,Js,bf,Xs,vf,yf,kf,nn,wf,ft,Ys,$f,ao,Pf,nr,Mf,Gf,zi,xf,Ff,jf,sn,zf,an,hd,ro,rn,Ei,Qs,Ef,qi,qf,md,he,Zs,Cf,Ci,Df,Lf,sr,ar,Of,Nf,Hf,it,If,Di,Sf,Af,Li,Wf,Uf,Oi,Rf,Bf,Ni,Vf,Kf,Jf,ea,Xf,rr,Yf,Qf,Zf,ta,eg,oa,tg,og,ng,ln,sg,Ye,na,ag,io,rg,ir,ig,lg,Hi,dg,cg,pg,dn,hg,cn,mg,pn,ud,lo,hn,Ii,sa,ug,Si,fg,fd,co,aa,gg,Ai,_g,gd,po,mn,Wi,ra,Tg,Ui,bg,_d,xe,ia,vg,Ri,yg,kg,la,wg,lr,$g,Pg,Mg,da,Gg,ca,xg,Fg,jg,Bi,zg,Eg,wt,Vi,pa,qg,Cg,Ki,ha,Dg,Lg,Ji,ma,Og,Ng,Xi,ua,Hg,Ig,gt,fa,Sg,ho,Ag,Yi,Wg,Ug,Qi,Rg,Bg,Vg,un,Kg,fn,Td,mo,gn,Zi,ga,Jg,el,Xg,bd,Fe,_a,Yg,tl,Qg,Zg,Ta,e_,dr,t_,o_,n_,ba,s_,va,a_,r_,i_,ol,l_,d_,$t,nl,ya,c_,p_,sl,ka,h_,m_,al,wa,u_,f_,rl,$a,g_,__,_t,Pa,T_,uo,b_,il,v_,y_,ll,k_,w_,$_,_n,P_,Tn,vd;return n=new ze({}),Z=new ze({}),Nn=new ze({}),Hn=new L({props:{name:"class transformers.GPT2Config",anchor:"transformers.GPT2Config",parameters:[{name:"vocab_size",val:" = 50257"},{name:"n_positions",val:" = 1024"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"scale_attn_by_inverse_layer_idx",val:" = False"},{name:"reorder_and_upcast_attn",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
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
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/configuration_gpt2.py#L38"}}),_o=new se({props:{anchor:"transformers.GPT2Config.example",$$slots:{default:[wb]},$$scope:{ctx:G}}}),Sn=new ze({}),An=new L({props:{name:"class transformers.GPT2Tokenizer",anchor:"transformers.GPT2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = None"},{name:"add_prefix_space",val:" = False"},{name:"add_bos_token",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.GPT2Tokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.GPT2Tokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.GPT2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.GPT2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.GPT2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.GPT2Tokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (GPT2 tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2.py#L104"}}),bo=new se({props:{anchor:"transformers.GPT2Tokenizer.example",$$slots:{default:[$b]},$$scope:{ctx:G}}}),vo=new He({props:{$$slots:{default:[Pb]},$$scope:{ctx:G}}}),Rn=new L({props:{name:"save_vocabulary",anchor:"transformers.GPT2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2.py#L288"}}),Bn=new ze({}),Vn=new L({props:{name:"class transformers.GPT2TokenizerFast",anchor:"transformers.GPT2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2_fast.py#L70"}}),ko=new se({props:{anchor:"transformers.GPT2TokenizerFast.example",$$slots:{default:[Mb]},$$scope:{ctx:G}}}),wo=new He({props:{$$slots:{default:[Gb]},$$scope:{ctx:G}}}),Yn=new ze({}),Qn=new L({props:{name:"class transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L504"}}),Zn=new L({props:{name:"class transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput",anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L563"}}),es=new ze({}),ts=new L({props:{name:"class transformers.GPT2Model",anchor:"transformers.GPT2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L684"}}),as=new L({props:{name:"forward",anchor:"transformers.GPT2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L753",returnDescription:`
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
`}}),Mo=new He({props:{$$slots:{default:[xb]},$$scope:{ctx:G}}}),Go=new se({props:{anchor:"transformers.GPT2Model.forward.example",$$slots:{default:[Fb]},$$scope:{ctx:G}}}),rs=new L({props:{name:"parallelize",anchor:"transformers.GPT2Model.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the gpt2 models have the
following number of attention modules:</p>
<ul>
<li>gpt2: 12</li>
<li>gpt2-medium: 24</li>
<li>gpt2-large: 36</li>
<li>gpt2-xl: 48</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L707"}}),xo=new se({props:{anchor:"transformers.GPT2Model.parallelize.example",$$slots:{default:[jb]},$$scope:{ctx:G}}}),is=new L({props:{name:"deparallelize",anchor:"transformers.GPT2Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L727"}}),Fo=new se({props:{anchor:"transformers.GPT2Model.deparallelize.example",$$slots:{default:[zb]},$$scope:{ctx:G}}}),ls=new ze({}),ds=new L({props:{name:"class transformers.GPT2LMHeadModel",anchor:"transformers.GPT2LMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L962"}}),ms=new L({props:{name:"forward",anchor:"transformers.GPT2LMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1031",returnDescription:`
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
`}}),zo=new He({props:{$$slots:{default:[Eb]},$$scope:{ctx:G}}}),Eo=new se({props:{anchor:"transformers.GPT2LMHeadModel.forward.example",$$slots:{default:[qb]},$$scope:{ctx:G}}}),us=new L({props:{name:"parallelize",anchor:"transformers.GPT2LMHeadModel.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the gpt2 models have the
following number of attention modules:</p>
<ul>
<li>gpt2: 12</li>
<li>gpt2-medium: 24</li>
<li>gpt2-large: 36</li>
<li>gpt2-xl: 48</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L977"}}),qo=new se({props:{anchor:"transformers.GPT2LMHeadModel.parallelize.example",$$slots:{default:[Cb]},$$scope:{ctx:G}}}),fs=new L({props:{name:"deparallelize",anchor:"transformers.GPT2LMHeadModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L989"}}),Co=new se({props:{anchor:"transformers.GPT2LMHeadModel.deparallelize.example",$$slots:{default:[Db]},$$scope:{ctx:G}}}),gs=new ze({}),_s=new L({props:{name:"class transformers.GPT2DoubleHeadsModel",anchor:"transformers.GPT2DoubleHeadsModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2DoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1131"}}),ys=new L({props:{name:"forward",anchor:"transformers.GPT2DoubleHeadsModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_token_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"mc_labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2DoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"mc_labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1205",returnDescription:`
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
`}}),Lo=new He({props:{$$slots:{default:[Lb]},$$scope:{ctx:G}}}),Oo=new se({props:{anchor:"transformers.GPT2DoubleHeadsModel.forward.example",$$slots:{default:[Ob]},$$scope:{ctx:G}}}),ks=new ze({}),ws=new L({props:{name:"class transformers.GPT2ForSequenceClassification",anchor:"transformers.GPT2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1345"}}),Gs=new L({props:{name:"forward",anchor:"transformers.GPT2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1361",returnDescription:`
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
`}}),Ho=new He({props:{$$slots:{default:[Nb]},$$scope:{ctx:G}}}),Io=new se({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example",$$slots:{default:[Hb]},$$scope:{ctx:G}}}),So=new se({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-2",$$slots:{default:[Ib]},$$scope:{ctx:G}}}),Ao=new se({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-3",$$slots:{default:[Sb]},$$scope:{ctx:G}}}),Wo=new se({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-4",$$slots:{default:[Ab]},$$scope:{ctx:G}}}),xs=new ze({}),Fs=new L({props:{name:"class transformers.GPT2ForTokenClassification",anchor:"transformers.GPT2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1473"}}),qs=new L({props:{name:"forward",anchor:"transformers.GPT2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPT2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1495",returnDescription:`
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
`}}),Ro=new He({props:{$$slots:{default:[Wb]},$$scope:{ctx:G}}}),Bo=new se({props:{anchor:"transformers.GPT2ForTokenClassification.forward.example",$$slots:{default:[Ub]},$$scope:{ctx:G}}}),Vo=new se({props:{anchor:"transformers.GPT2ForTokenClassification.forward.example-2",$$slots:{default:[Rb]},$$scope:{ctx:G}}}),Cs=new ze({}),Ds=new L({props:{name:"class transformers.TFGPT2Model",anchor:"transformers.TFGPT2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L706"}}),Jo=new He({props:{$$slots:{default:[Bb]},$$scope:{ctx:G}}}),Hs=new L({props:{name:"call",anchor:"transformers.TFGPT2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L711",returnDescription:`
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
`}}),Xo=new He({props:{$$slots:{default:[Vb]},$$scope:{ctx:G}}}),Yo=new se({props:{anchor:"transformers.TFGPT2Model.call.example",$$slots:{default:[Kb]},$$scope:{ctx:G}}}),Is=new ze({}),Ss=new L({props:{name:"class transformers.TFGPT2LMHeadModel",anchor:"transformers.TFGPT2LMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L804"}}),Zo=new He({props:{$$slots:{default:[Jb]},$$scope:{ctx:G}}}),Rs=new L({props:{name:"call",anchor:"transformers.TFGPT2LMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2LMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L840",returnDescription:`
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
`}}),en=new He({props:{$$slots:{default:[Xb]},$$scope:{ctx:G}}}),tn=new se({props:{anchor:"transformers.TFGPT2LMHeadModel.call.example",$$slots:{default:[Yb]},$$scope:{ctx:G}}}),Bs=new ze({}),Vs=new L({props:{name:"class transformers.TFGPT2DoubleHeadsModel",anchor:"transformers.TFGPT2DoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2DoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L955"}}),nn=new He({props:{$$slots:{default:[Qb]},$$scope:{ctx:G}}}),Ys=new L({props:{name:"call",anchor:"transformers.TFGPT2DoubleHeadsModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mc_token_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2DoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L964",returnDescription:`
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
`}}),sn=new He({props:{$$slots:{default:[Zb]},$$scope:{ctx:G}}}),an=new se({props:{anchor:"transformers.TFGPT2DoubleHeadsModel.call.example",$$slots:{default:[ev]},$$scope:{ctx:G}}}),Qs=new ze({}),Zs=new L({props:{name:"class transformers.TFGPT2ForSequenceClassification",anchor:"transformers.TFGPT2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1103"}}),ln=new He({props:{$$slots:{default:[tv]},$$scope:{ctx:G}}}),na=new L({props:{name:"call",anchor:"transformers.TFGPT2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1115",returnDescription:`
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
`}}),dn=new He({props:{$$slots:{default:[ov]},$$scope:{ctx:G}}}),cn=new se({props:{anchor:"transformers.TFGPT2ForSequenceClassification.call.example",$$slots:{default:[nv]},$$scope:{ctx:G}}}),pn=new se({props:{anchor:"transformers.TFGPT2ForSequenceClassification.call.example-2",$$slots:{default:[sv]},$$scope:{ctx:G}}}),sa=new ze({}),aa=new L({props:{name:"class transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/modeling_tf_outputs.py#L863"}}),ra=new ze({}),ia=new L({props:{name:"class transformers.FlaxGPT2Model",anchor:"transformers.FlaxGPT2Model",parameters:[{name:"config",val:": GPT2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPT2Model.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_flax_gpt2.py#L665"}}),fa=new L({props:{name:"__call__",anchor:"transformers.FlaxGPT2Model.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPT2Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),un=new He({props:{$$slots:{default:[av]},$$scope:{ctx:G}}}),fn=new se({props:{anchor:"transformers.FlaxGPT2Model.__call__.example",$$slots:{default:[rv]},$$scope:{ctx:G}}}),ga=new ze({}),_a=new L({props:{name:"class transformers.FlaxGPT2LMHeadModel",anchor:"transformers.FlaxGPT2LMHeadModel",parameters:[{name:"config",val:": GPT2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPT2LMHeadModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/modeling_flax_gpt2.py#L743"}}),Pa=new L({props:{name:"__call__",anchor:"transformers.FlaxGPT2LMHeadModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),_n=new He({props:{$$slots:{default:[iv]},$$scope:{ctx:G}}}),Tn=new se({props:{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.example",$$slots:{default:[lv]},$$scope:{ctx:G}}}),{c(){d=s("meta"),T=p(),m=s("h1"),c=s("a"),g=s("span"),y(n.$$.fragment),u=p(),F=s("span"),Q=r("OpenAI GPT2"),C=p(),j=s("h2"),B=s("a"),I=s("span"),y(Z.$$.fragment),_e=p(),S=s("span"),Te=r("Overview"),ue=p(),W=s("p"),O=r("OpenAI GPT-2 model was proposed in "),ee=s("a"),te=r("Language Models are Unsupervised Multitask Learners"),z=r(` by Alec
Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei and Ilya Sutskever. It\u2019s a causal (unidirectional)
transformer pretrained using language modeling on a very large corpus of ~40 GB of text data.`),q=p(),ie=s("p"),V=r("The abstract from the paper is the following:"),fe=p(),le=s("p"),A=s("em"),be=r(`GPT-2 is a large transformer-based language model with 1.5 billion parameters, trained on a dataset[1] of 8 million
web pages. GPT-2 is trained with a simple objective: predict the next word, given all of the previous words within some
text. The diversity of the dataset causes this simple goal to contain naturally occurring demonstrations of many tasks
across diverse domains. GPT-2 is a direct scale-up of GPT, with more than 10X the parameters and trained on more than
10X the amount of data.`),ge=p(),E=s("p"),ve=r("Tips:"),U=p(),R=s("ul"),de=s("li"),K=r(`GPT-2 is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),ye=p(),oe=s("li"),N=r(`GPT-2 was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ce=s("em"),J=r("run_generation.py"),ke=r(" example script."),v=p(),x=s("li"),ne=r("The model can take the "),Ee=s("em"),Ae=r("past_key_values"),H=r(" (for PyTorch) or "),qe=s("em"),We=r("past"),Ue=r(` (for TF) as input, which is the previously computed
key/value attention pairs. Using this (`),D=s("em"),X=r("past_key_values"),Re=r(" or "),Ce=s("em"),Y=r("past"),Be=r(`) value prevents the model from re-computing
pre-computed values in the context of text generation. For PyTorch, see `),De=s("em"),we=r("past_key_values"),Ve=r(` argument of the
`),za=s("a"),hc=r("GPT2Model.forward()"),mc=r(" method, or for TF the "),$r=s("em"),uc=r("past"),fc=r(` argument of the
`),Ea=s("a"),gc=r("TFGPT2Model.call()"),_c=r(" method for more information on its usage."),Tc=p(),yt=s("li"),bc=r("Enabling the "),Pr=s("em"),vc=r("scale_attn_by_inverse_layer_idx"),yc=r(" and "),Mr=s("em"),kc=r("reorder_and_upcast_attn"),wc=r(` flags will apply the training stability
improvements from `),Cn=s("a"),$c=r("Mistral"),Pc=r(" (for PyTorch only)."),Hl=p(),Lt=s("p"),Dn=s("a"),Mc=r("Write With Transformer"),Gc=r(` is a webapp created and hosted by
Hugging Face showcasing the generative capabilities of several models. GPT-2 is one of them and is available in five
different sizes: small, medium, large, xl and a distilled version of the small checkpoint: `),Gr=s("em"),xc=r("distilgpt-2"),Fc=r("."),Il=p(),Gt=s("p"),jc=r("This model was contributed by "),Ln=s("a"),zc=r("thomwolf"),Ec=r(". The original code can be found "),On=s("a"),qc=r("here"),Cc=r("."),Sl=p(),Ot=s("h2"),go=s("a"),xr=s("span"),y(Nn.$$.fragment),Dc=p(),Fr=s("span"),Lc=r("GPT2Config"),Al=p(),at=s("div"),y(Hn.$$.fragment),Oc=p(),kt=s("p"),Nc=r("This is the configuration class to store the configuration of a "),qa=s("a"),Hc=r("GPT2Model"),Ic=r(" or a "),Ca=s("a"),Sc=r("TFGPT2Model"),Ac=r(`. It is used to
instantiate a GPT-2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GPT-2
`),In=s("a"),Wc=r("gpt2"),Uc=r(" architecture."),Rc=p(),Nt=s("p"),Bc=r("Configuration objects inherit from "),Da=s("a"),Vc=r("PretrainedConfig"),Kc=r(` and can be used to control the model outputs. Read the
documentation from `),La=s("a"),Jc=r("PretrainedConfig"),Xc=r(" for more information."),Yc=p(),y(_o.$$.fragment),Wl=p(),Ht=s("h2"),To=s("a"),jr=s("span"),y(Sn.$$.fragment),Qc=p(),zr=s("span"),Zc=r("GPT2Tokenizer"),Ul=p(),pe=s("div"),y(An.$$.fragment),ep=p(),Er=s("p"),tp=r("Construct a GPT-2 tokenizer. Based on byte-level Byte-Pair-Encoding."),op=p(),qr=s("p"),np=r("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),sp=p(),y(bo.$$.fragment),ap=p(),Wn=s("p"),rp=r("You can get around that behavior by passing "),Cr=s("code"),ip=r("add_prefix_space=True"),lp=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),dp=p(),y(vo.$$.fragment),cp=p(),Un=s("p"),pp=r("This tokenizer inherits from "),Oa=s("a"),hp=r("PreTrainedTokenizer"),mp=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),up=p(),Na=s("div"),y(Rn.$$.fragment),Rl=p(),It=s("h2"),yo=s("a"),Dr=s("span"),y(Bn.$$.fragment),fp=p(),Lr=s("span"),gp=r("GPT2TokenizerFast"),Bl=p(),$e=s("div"),y(Vn.$$.fragment),_p=p(),Kn=s("p"),Tp=r("Construct a \u201Cfast\u201D GPT-2 tokenizer (backed by HuggingFace\u2019s "),Or=s("em"),bp=r("tokenizers"),vp=r(` library). Based on byte-level
Byte-Pair-Encoding.`),yp=p(),Nr=s("p"),kp=r("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),wp=p(),y(ko.$$.fragment),$p=p(),Jn=s("p"),Pp=r("You can get around that behavior by passing "),Hr=s("code"),Mp=r("add_prefix_space=True"),Gp=r(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),xp=p(),y(wo.$$.fragment),Fp=p(),Xn=s("p"),jp=r("This tokenizer inherits from "),Ha=s("a"),zp=r("PreTrainedTokenizerFast"),Ep=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vl=p(),St=s("h2"),$o=s("a"),Ir=s("span"),y(Yn.$$.fragment),qp=p(),Sr=s("span"),Cp=r("GPT2 specific outputs"),Kl=p(),At=s("div"),y(Qn.$$.fragment),Dp=p(),Ar=s("p"),Lp=r("Base class for outputs of models predicting if two sentences are consecutive or not."),Jl=p(),Wt=s("div"),y(Zn.$$.fragment),Op=p(),Wr=s("p"),Np=r("Base class for outputs of models predicting if two sentences are consecutive or not."),Xl=p(),Ut=s("h2"),Po=s("a"),Ur=s("span"),y(es.$$.fragment),Hp=p(),Rr=s("span"),Ip=r("GPT2Model"),Yl=p(),Pe=s("div"),y(ts.$$.fragment),Sp=p(),Br=s("p"),Ap=r("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),Wp=p(),os=s("p"),Up=r("This model inherits from "),Ia=s("a"),Rp=r("PreTrainedModel"),Bp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vp=p(),ns=s("p"),Kp=r("This model is also a PyTorch "),ss=s("a"),Jp=r("torch.nn.Module"),Xp=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yp=p(),lt=s("div"),y(as.$$.fragment),Qp=p(),Rt=s("p"),Zp=r("The "),Sa=s("a"),eh=r("GPT2Model"),th=r(" forward method, overrides the "),Vr=s("code"),oh=r("__call__"),nh=r(" special method."),sh=p(),y(Mo.$$.fragment),ah=p(),y(Go.$$.fragment),rh=p(),dt=s("div"),y(rs.$$.fragment),ih=p(),Kr=s("p"),lh=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),dh=p(),Jr=s("p"),ch=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),ph=p(),y(xo.$$.fragment),hh=p(),xt=s("div"),y(is.$$.fragment),mh=p(),Xr=s("p"),uh=r("Moves the model to cpu from a model parallel state."),fh=p(),y(Fo.$$.fragment),Ql=p(),Bt=s("h2"),jo=s("a"),Yr=s("span"),y(ls.$$.fragment),gh=p(),Qr=s("span"),_h=r("GPT2LMHeadModel"),Zl=p(),Me=s("div"),y(ds.$$.fragment),Th=p(),Zr=s("p"),bh=r(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),vh=p(),cs=s("p"),yh=r("This model inherits from "),Aa=s("a"),kh=r("PreTrainedModel"),wh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$h=p(),ps=s("p"),Ph=r("This model is also a PyTorch "),hs=s("a"),Mh=r("torch.nn.Module"),Gh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xh=p(),ct=s("div"),y(ms.$$.fragment),Fh=p(),Vt=s("p"),jh=r("The "),Wa=s("a"),zh=r("GPT2LMHeadModel"),Eh=r(" forward method, overrides the "),ei=s("code"),qh=r("__call__"),Ch=r(" special method."),Dh=p(),y(zo.$$.fragment),Lh=p(),y(Eo.$$.fragment),Oh=p(),pt=s("div"),y(us.$$.fragment),Nh=p(),ti=s("p"),Hh=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Ih=p(),oi=s("p"),Sh=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Ah=p(),y(qo.$$.fragment),Wh=p(),Ft=s("div"),y(fs.$$.fragment),Uh=p(),ni=s("p"),Rh=r("Moves the model to cpu from a model parallel state."),Bh=p(),y(Co.$$.fragment),ed=p(),Kt=s("h2"),Do=s("a"),si=s("span"),y(gs.$$.fragment),Vh=p(),ai=s("span"),Kh=r("GPT2DoubleHeadsModel"),td=p(),Ke=s("div"),y(_s.$$.fragment),Jh=p(),ri=s("p"),Xh=r(`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Yh=p(),Ts=s("p"),Qh=r("This model inherits from "),Ua=s("a"),Zh=r("PreTrainedModel"),em=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tm=p(),bs=s("p"),om=r("This model is also a PyTorch "),vs=s("a"),nm=r("torch.nn.Module"),sm=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),am=p(),ht=s("div"),y(ys.$$.fragment),rm=p(),Jt=s("p"),im=r("The "),Ra=s("a"),lm=r("GPT2DoubleHeadsModel"),dm=r(" forward method, overrides the "),ii=s("code"),cm=r("__call__"),pm=r(" special method."),hm=p(),y(Lo.$$.fragment),mm=p(),y(Oo.$$.fragment),od=p(),Xt=s("h2"),No=s("a"),li=s("span"),y(ks.$$.fragment),um=p(),di=s("span"),fm=r("GPT2ForSequenceClassification"),nd=p(),Ge=s("div"),y(ws.$$.fragment),gm=p(),ci=s("p"),_m=r("The GPT2 Model transformer with a sequence classification head on top (linear layer)."),Tm=p(),Ba=s("p"),Va=s("a"),bm=r("GPT2ForSequenceClassification"),vm=r(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),ym=p(),rt=s("p"),km=r(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),pi=s("code"),wm=r("pad_token_id"),$m=r(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),hi=s("code"),Pm=r("pad_token_id"),Mm=r(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),mi=s("code"),Gm=r("inputs_embeds"),xm=r(" are passed instead of "),ui=s("code"),Fm=r("input_ids"),jm=r(`, it does the same (take the last value in
each row of the batch).`),zm=p(),$s=s("p"),Em=r("This model inherits from "),Ka=s("a"),qm=r("PreTrainedModel"),Cm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dm=p(),Ps=s("p"),Lm=r("This model is also a PyTorch "),Ms=s("a"),Om=r("torch.nn.Module"),Nm=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hm=p(),je=s("div"),y(Gs.$$.fragment),Im=p(),Yt=s("p"),Sm=r("The "),Ja=s("a"),Am=r("GPT2ForSequenceClassification"),Wm=r(" forward method, overrides the "),fi=s("code"),Um=r("__call__"),Rm=r(" special method."),Bm=p(),y(Ho.$$.fragment),Vm=p(),y(Io.$$.fragment),Km=p(),y(So.$$.fragment),Jm=p(),y(Ao.$$.fragment),Xm=p(),y(Wo.$$.fragment),sd=p(),Qt=s("h2"),Uo=s("a"),gi=s("span"),y(xs.$$.fragment),Ym=p(),_i=s("span"),Qm=r("GPT2ForTokenClassification"),ad=p(),Je=s("div"),y(Fs.$$.fragment),Zm=p(),Ti=s("p"),eu=r(`GPT2 Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),tu=p(),js=s("p"),ou=r("This model inherits from "),Xa=s("a"),nu=r("PreTrainedModel"),su=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),au=p(),zs=s("p"),ru=r("This model is also a PyTorch "),Es=s("a"),iu=r("torch.nn.Module"),lu=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),du=p(),Xe=s("div"),y(qs.$$.fragment),cu=p(),Zt=s("p"),pu=r("The "),Ya=s("a"),hu=r("GPT2ForTokenClassification"),mu=r(" forward method, overrides the "),bi=s("code"),uu=r("__call__"),fu=r(" special method."),gu=p(),y(Ro.$$.fragment),_u=p(),y(Bo.$$.fragment),Tu=p(),y(Vo.$$.fragment),rd=p(),eo=s("h2"),Ko=s("a"),vi=s("span"),y(Cs.$$.fragment),bu=p(),yi=s("span"),vu=r("TFGPT2Model"),id=p(),Le=s("div"),y(Ds.$$.fragment),yu=p(),ki=s("p"),ku=r("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),wu=p(),Ls=s("p"),$u=r("This model inherits from "),Qa=s("a"),Pu=r("TFPreTrainedModel"),Mu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gu=p(),Os=s("p"),xu=r("This model is also a "),Ns=s("a"),Fu=r("tf.keras.Model"),ju=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zu=p(),y(Jo.$$.fragment),Eu=p(),mt=s("div"),y(Hs.$$.fragment),qu=p(),to=s("p"),Cu=r("The "),Za=s("a"),Du=r("TFGPT2Model"),Lu=r(" forward method, overrides the "),wi=s("code"),Ou=r("__call__"),Nu=r(" special method."),Hu=p(),y(Xo.$$.fragment),Iu=p(),y(Yo.$$.fragment),ld=p(),oo=s("h2"),Qo=s("a"),$i=s("span"),y(Is.$$.fragment),Su=p(),Pi=s("span"),Au=r("TFGPT2LMHeadModel"),dd=p(),Oe=s("div"),y(Ss.$$.fragment),Wu=p(),Mi=s("p"),Uu=r(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ru=p(),As=s("p"),Bu=r("This model inherits from "),er=s("a"),Vu=r("TFPreTrainedModel"),Ku=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ju=p(),Ws=s("p"),Xu=r("This model is also a "),Us=s("a"),Yu=r("tf.keras.Model"),Qu=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zu=p(),y(Zo.$$.fragment),ef=p(),ut=s("div"),y(Rs.$$.fragment),tf=p(),no=s("p"),of=r("The "),tr=s("a"),nf=r("TFGPT2LMHeadModel"),sf=r(" forward method, overrides the "),Gi=s("code"),af=r("__call__"),rf=r(" special method."),lf=p(),y(en.$$.fragment),df=p(),y(tn.$$.fragment),cd=p(),so=s("h2"),on=s("a"),xi=s("span"),y(Bs.$$.fragment),cf=p(),Fi=s("span"),pf=r("TFGPT2DoubleHeadsModel"),pd=p(),Ne=s("div"),y(Vs.$$.fragment),hf=p(),ji=s("p"),mf=r(`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),uf=p(),Ks=s("p"),ff=r("This model inherits from "),or=s("a"),gf=r("TFPreTrainedModel"),_f=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf=p(),Js=s("p"),bf=r("This model is also a "),Xs=s("a"),vf=r("tf.keras.Model"),yf=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kf=p(),y(nn.$$.fragment),wf=p(),ft=s("div"),y(Ys.$$.fragment),$f=p(),ao=s("p"),Pf=r("The "),nr=s("a"),Mf=r("TFGPT2DoubleHeadsModel"),Gf=r(" forward method, overrides the "),zi=s("code"),xf=r("__call__"),Ff=r(" special method."),jf=p(),y(sn.$$.fragment),zf=p(),y(an.$$.fragment),hd=p(),ro=s("h2"),rn=s("a"),Ei=s("span"),y(Qs.$$.fragment),Ef=p(),qi=s("span"),qf=r("TFGPT2ForSequenceClassification"),md=p(),he=s("div"),y(Zs.$$.fragment),Cf=p(),Ci=s("p"),Df=r("The GPT2 Model transformer with a sequence classification head on top (linear layer)."),Lf=p(),sr=s("p"),ar=s("a"),Of=r("TFGPT2ForSequenceClassification"),Nf=r(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),Hf=p(),it=s("p"),If=r(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Di=s("code"),Sf=r("pad_token_id"),Af=r(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Li=s("code"),Wf=r("pad_token_id"),Uf=r(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Oi=s("code"),Rf=r("inputs_embeds"),Bf=r(" are passed instead of "),Ni=s("code"),Vf=r("input_ids"),Kf=r(`, it does the same (take the last value in
each row of the batch).`),Jf=p(),ea=s("p"),Xf=r("This model inherits from "),rr=s("a"),Yf=r("TFPreTrainedModel"),Qf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zf=p(),ta=s("p"),eg=r("This model is also a "),oa=s("a"),tg=r("tf.keras.Model"),og=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ng=p(),y(ln.$$.fragment),sg=p(),Ye=s("div"),y(na.$$.fragment),ag=p(),io=s("p"),rg=r("The "),ir=s("a"),ig=r("TFGPT2ForSequenceClassification"),lg=r(" forward method, overrides the "),Hi=s("code"),dg=r("__call__"),cg=r(" special method."),pg=p(),y(dn.$$.fragment),hg=p(),y(cn.$$.fragment),mg=p(),y(pn.$$.fragment),ud=p(),lo=s("h2"),hn=s("a"),Ii=s("span"),y(sa.$$.fragment),ug=p(),Si=s("span"),fg=r("TFSequenceClassifierOutputWithPast"),fd=p(),co=s("div"),y(aa.$$.fragment),gg=p(),Ai=s("p"),_g=r("Base class for outputs of sentence classification models."),gd=p(),po=s("h2"),mn=s("a"),Wi=s("span"),y(ra.$$.fragment),Tg=p(),Ui=s("span"),bg=r("FlaxGPT2Model"),_d=p(),xe=s("div"),y(ia.$$.fragment),vg=p(),Ri=s("p"),yg=r("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),kg=p(),la=s("p"),wg=r("This model inherits from "),lr=s("a"),$g=r("FlaxPreTrainedModel"),Pg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mg=p(),da=s("p"),Gg=r(`This model is also a Flax Linen
`),ca=s("a"),xg=r("flax.nn.Module"),Fg=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jg=p(),Bi=s("p"),zg=r("Finally, this model supports inherent JAX features such as:"),Eg=p(),wt=s("ul"),Vi=s("li"),pa=s("a"),qg=r("Just-In-Time (JIT) compilation"),Cg=p(),Ki=s("li"),ha=s("a"),Dg=r("Automatic Differentiation"),Lg=p(),Ji=s("li"),ma=s("a"),Og=r("Vectorization"),Ng=p(),Xi=s("li"),ua=s("a"),Hg=r("Parallelization"),Ig=p(),gt=s("div"),y(fa.$$.fragment),Sg=p(),ho=s("p"),Ag=r("The "),Yi=s("code"),Wg=r("FlaxGPT2PreTrainedModel"),Ug=r(" forward method, overrides the "),Qi=s("code"),Rg=r("__call__"),Bg=r(" special method."),Vg=p(),y(un.$$.fragment),Kg=p(),y(fn.$$.fragment),Td=p(),mo=s("h2"),gn=s("a"),Zi=s("span"),y(ga.$$.fragment),Jg=p(),el=s("span"),Xg=r("FlaxGPT2LMHeadModel"),bd=p(),Fe=s("div"),y(_a.$$.fragment),Yg=p(),tl=s("p"),Qg=r(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Zg=p(),Ta=s("p"),e_=r("This model inherits from "),dr=s("a"),t_=r("FlaxPreTrainedModel"),o_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),n_=p(),ba=s("p"),s_=r(`This model is also a Flax Linen
`),va=s("a"),a_=r("flax.nn.Module"),r_=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),i_=p(),ol=s("p"),l_=r("Finally, this model supports inherent JAX features such as:"),d_=p(),$t=s("ul"),nl=s("li"),ya=s("a"),c_=r("Just-In-Time (JIT) compilation"),p_=p(),sl=s("li"),ka=s("a"),h_=r("Automatic Differentiation"),m_=p(),al=s("li"),wa=s("a"),u_=r("Vectorization"),f_=p(),rl=s("li"),$a=s("a"),g_=r("Parallelization"),__=p(),_t=s("div"),y(Pa.$$.fragment),T_=p(),uo=s("p"),b_=r("The "),il=s("code"),v_=r("FlaxGPT2PreTrainedModel"),y_=r(" forward method, overrides the "),ll=s("code"),k_=r("__call__"),w_=r(" special method."),$_=p(),y(_n.$$.fragment),P_=p(),y(Tn.$$.fragment),this.h()},l(o){const b=yb('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(t),T=h(o),m=a(o,"H1",{class:!0});var Ma=l(m);c=a(Ma,"A",{id:!0,class:!0,href:!0});var dl=l(c);g=a(dl,"SPAN",{});var cl=l(g);k(n.$$.fragment,cl),cl.forEach(t),dl.forEach(t),u=h(Ma),F=a(Ma,"SPAN",{});var pl=l(F);Q=i(pl,"OpenAI GPT2"),pl.forEach(t),Ma.forEach(t),C=h(o),j=a(o,"H2",{class:!0});var Ga=l(j);B=a(Ga,"A",{id:!0,class:!0,href:!0});var hl=l(B);I=a(hl,"SPAN",{});var ml=l(I);k(Z.$$.fragment,ml),ml.forEach(t),hl.forEach(t),_e=h(Ga),S=a(Ga,"SPAN",{});var ul=l(S);Te=i(ul,"Overview"),ul.forEach(t),Ga.forEach(t),ue=h(o),W=a(o,"P",{});var xa=l(W);O=i(xa,"OpenAI GPT-2 model was proposed in "),ee=a(xa,"A",{href:!0,rel:!0});var fl=l(ee);te=i(fl,"Language Models are Unsupervised Multitask Learners"),fl.forEach(t),z=i(xa,` by Alec
Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei and Ilya Sutskever. It\u2019s a causal (unidirectional)
transformer pretrained using language modeling on a very large corpus of ~40 GB of text data.`),xa.forEach(t),q=h(o),ie=a(o,"P",{});var gl=l(ie);V=i(gl,"The abstract from the paper is the following:"),gl.forEach(t),fe=h(o),le=a(o,"P",{});var _l=l(le);A=a(_l,"EM",{});var Tl=l(A);be=i(Tl,`GPT-2 is a large transformer-based language model with 1.5 billion parameters, trained on a dataset[1] of 8 million
web pages. GPT-2 is trained with a simple objective: predict the next word, given all of the previous words within some
text. The diversity of the dataset causes this simple goal to contain naturally occurring demonstrations of many tasks
across diverse domains. GPT-2 is a direct scale-up of GPT, with more than 10X the parameters and trained on more than
10X the amount of data.`),Tl.forEach(t),_l.forEach(t),ge=h(o),E=a(o,"P",{});var bl=l(E);ve=i(bl,"Tips:"),bl.forEach(t),U=h(o),R=a(o,"UL",{});var Pt=l(R);de=a(Pt,"LI",{});var vl=l(de);K=i(vl,`GPT-2 is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),vl.forEach(t),ye=h(Pt),oe=a(Pt,"LI",{});var Fa=l(oe);N=i(Fa,`GPT-2 was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ce=a(Fa,"EM",{});var yl=l(ce);J=i(yl,"run_generation.py"),yl.forEach(t),ke=i(Fa," example script."),Fa.forEach(t),v=h(Pt),x=a(Pt,"LI",{});var me=l(x);ne=i(me,"The model can take the "),Ee=a(me,"EM",{});var kl=l(Ee);Ae=i(kl,"past_key_values"),kl.forEach(t),H=i(me," (for PyTorch) or "),qe=a(me,"EM",{});var wl=l(qe);We=i(wl,"past"),wl.forEach(t),Ue=i(me,` (for TF) as input, which is the previously computed
key/value attention pairs. Using this (`),D=a(me,"EM",{});var $l=l(D);X=i($l,"past_key_values"),$l.forEach(t),Re=i(me," or "),Ce=a(me,"EM",{});var Pl=l(Ce);Y=i(Pl,"past"),Pl.forEach(t),Be=i(me,`) value prevents the model from re-computing
pre-computed values in the context of text generation. For PyTorch, see `),De=a(me,"EM",{});var Ml=l(De);we=i(Ml,"past_key_values"),Ml.forEach(t),Ve=i(me,` argument of the
`),za=a(me,"A",{href:!0});var Gl=l(za);hc=i(Gl,"GPT2Model.forward()"),Gl.forEach(t),mc=i(me," method, or for TF the "),$r=a(me,"EM",{});var xl=l($r);uc=i(xl,"past"),xl.forEach(t),fc=i(me,` argument of the
`),Ea=a(me,"A",{href:!0});var Fl=l(Ea);gc=i(Fl,"TFGPT2Model.call()"),Fl.forEach(t),_c=i(me," method for more information on its usage."),me.forEach(t),Tc=h(Pt),yt=a(Pt,"LI",{});var Mt=l(yt);bc=i(Mt,"Enabling the "),Pr=a(Mt,"EM",{});var jl=l(Pr);vc=i(jl,"scale_attn_by_inverse_layer_idx"),jl.forEach(t),yc=i(Mt," and "),Mr=a(Mt,"EM",{});var zl=l(Mr);kc=i(zl,"reorder_and_upcast_attn"),zl.forEach(t),wc=i(Mt,` flags will apply the training stability
improvements from `),Cn=a(Mt,"A",{href:!0,rel:!0});var El=l(Cn);$c=i(El,"Mistral"),El.forEach(t),Pc=i(Mt," (for PyTorch only)."),Mt.forEach(t),Pt.forEach(t),Hl=h(o),Lt=a(o,"P",{});var bn=l(Lt);Dn=a(bn,"A",{href:!0,rel:!0});var ql=l(Dn);Mc=i(ql,"Write With Transformer"),ql.forEach(t),Gc=i(bn,` is a webapp created and hosted by
Hugging Face showcasing the generative capabilities of several models. GPT-2 is one of them and is available in five
different sizes: small, medium, large, xl and a distilled version of the small checkpoint: `),Gr=a(bn,"EM",{});var Cl=l(Gr);xc=i(Cl,"distilgpt-2"),Cl.forEach(t),Fc=i(bn,"."),bn.forEach(t),Il=h(o),Gt=a(o,"P",{});var fo=l(Gt);jc=i(fo,"This model was contributed by "),Ln=a(fo,"A",{href:!0,rel:!0});var Dl=l(Ln);zc=i(Dl,"thomwolf"),Dl.forEach(t),Ec=i(fo,". The original code can be found "),On=a(fo,"A",{href:!0,rel:!0});var Ll=l(On);qc=i(Ll,"here"),Ll.forEach(t),Cc=i(fo,"."),fo.forEach(t),Sl=h(o),Ot=a(o,"H2",{class:!0});var ja=l(Ot);go=a(ja,"A",{id:!0,class:!0,href:!0});var Ol=l(go);xr=a(Ol,"SPAN",{});var Nl=l(xr);k(Nn.$$.fragment,Nl),Nl.forEach(t),Ol.forEach(t),Dc=h(ja),Fr=a(ja,"SPAN",{});var x_=l(Fr);Lc=i(x_,"GPT2Config"),x_.forEach(t),ja.forEach(t),Al=h(o),at=a(o,"DIV",{class:!0});var vn=l(at);k(Hn.$$.fragment,vn),Oc=h(vn),kt=a(vn,"P",{});var yn=l(kt);Nc=i(yn,"This is the configuration class to store the configuration of a "),qa=a(yn,"A",{href:!0});var F_=l(qa);Hc=i(F_,"GPT2Model"),F_.forEach(t),Ic=i(yn," or a "),Ca=a(yn,"A",{href:!0});var j_=l(Ca);Sc=i(j_,"TFGPT2Model"),j_.forEach(t),Ac=i(yn,`. It is used to
instantiate a GPT-2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GPT-2
`),In=a(yn,"A",{href:!0,rel:!0});var z_=l(In);Wc=i(z_,"gpt2"),z_.forEach(t),Uc=i(yn," architecture."),yn.forEach(t),Rc=h(vn),Nt=a(vn,"P",{});var cr=l(Nt);Bc=i(cr,"Configuration objects inherit from "),Da=a(cr,"A",{href:!0});var E_=l(Da);Vc=i(E_,"PretrainedConfig"),E_.forEach(t),Kc=i(cr,` and can be used to control the model outputs. Read the
documentation from `),La=a(cr,"A",{href:!0});var q_=l(La);Jc=i(q_,"PretrainedConfig"),q_.forEach(t),Xc=i(cr," for more information."),cr.forEach(t),Yc=h(vn),k(_o.$$.fragment,vn),vn.forEach(t),Wl=h(o),Ht=a(o,"H2",{class:!0});var yd=l(Ht);To=a(yd,"A",{id:!0,class:!0,href:!0});var C_=l(To);jr=a(C_,"SPAN",{});var D_=l(jr);k(Sn.$$.fragment,D_),D_.forEach(t),C_.forEach(t),Qc=h(yd),zr=a(yd,"SPAN",{});var L_=l(zr);Zc=i(L_,"GPT2Tokenizer"),L_.forEach(t),yd.forEach(t),Ul=h(o),pe=a(o,"DIV",{class:!0});var Ie=l(pe);k(An.$$.fragment,Ie),ep=h(Ie),Er=a(Ie,"P",{});var O_=l(Er);tp=i(O_,"Construct a GPT-2 tokenizer. Based on byte-level Byte-Pair-Encoding."),O_.forEach(t),op=h(Ie),qr=a(Ie,"P",{});var N_=l(qr);np=i(N_,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),N_.forEach(t),sp=h(Ie),k(bo.$$.fragment,Ie),ap=h(Ie),Wn=a(Ie,"P",{});var kd=l(Wn);rp=i(kd,"You can get around that behavior by passing "),Cr=a(kd,"CODE",{});var H_=l(Cr);ip=i(H_,"add_prefix_space=True"),H_.forEach(t),lp=i(kd,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),kd.forEach(t),dp=h(Ie),k(vo.$$.fragment,Ie),cp=h(Ie),Un=a(Ie,"P",{});var wd=l(Un);pp=i(wd,"This tokenizer inherits from "),Oa=a(wd,"A",{href:!0});var I_=l(Oa);hp=i(I_,"PreTrainedTokenizer"),I_.forEach(t),mp=i(wd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),wd.forEach(t),up=h(Ie),Na=a(Ie,"DIV",{class:!0});var S_=l(Na);k(Rn.$$.fragment,S_),S_.forEach(t),Ie.forEach(t),Rl=h(o),It=a(o,"H2",{class:!0});var $d=l(It);yo=a($d,"A",{id:!0,class:!0,href:!0});var A_=l(yo);Dr=a(A_,"SPAN",{});var W_=l(Dr);k(Bn.$$.fragment,W_),W_.forEach(t),A_.forEach(t),fp=h($d),Lr=a($d,"SPAN",{});var U_=l(Lr);gp=i(U_,"GPT2TokenizerFast"),U_.forEach(t),$d.forEach(t),Bl=h(o),$e=a(o,"DIV",{class:!0});var Qe=l($e);k(Vn.$$.fragment,Qe),_p=h(Qe),Kn=a(Qe,"P",{});var Pd=l(Kn);Tp=i(Pd,"Construct a \u201Cfast\u201D GPT-2 tokenizer (backed by HuggingFace\u2019s "),Or=a(Pd,"EM",{});var R_=l(Or);bp=i(R_,"tokenizers"),R_.forEach(t),vp=i(Pd,` library). Based on byte-level
Byte-Pair-Encoding.`),Pd.forEach(t),yp=h(Qe),Nr=a(Qe,"P",{});var B_=l(Nr);kp=i(B_,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),B_.forEach(t),wp=h(Qe),k(ko.$$.fragment,Qe),$p=h(Qe),Jn=a(Qe,"P",{});var Md=l(Jn);Pp=i(Md,"You can get around that behavior by passing "),Hr=a(Md,"CODE",{});var V_=l(Hr);Mp=i(V_,"add_prefix_space=True"),V_.forEach(t),Gp=i(Md,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Md.forEach(t),xp=h(Qe),k(wo.$$.fragment,Qe),Fp=h(Qe),Xn=a(Qe,"P",{});var Gd=l(Xn);jp=i(Gd,"This tokenizer inherits from "),Ha=a(Gd,"A",{href:!0});var K_=l(Ha);zp=i(K_,"PreTrainedTokenizerFast"),K_.forEach(t),Ep=i(Gd,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Gd.forEach(t),Qe.forEach(t),Vl=h(o),St=a(o,"H2",{class:!0});var xd=l(St);$o=a(xd,"A",{id:!0,class:!0,href:!0});var J_=l($o);Ir=a(J_,"SPAN",{});var X_=l(Ir);k(Yn.$$.fragment,X_),X_.forEach(t),J_.forEach(t),qp=h(xd),Sr=a(xd,"SPAN",{});var Y_=l(Sr);Cp=i(Y_,"GPT2 specific outputs"),Y_.forEach(t),xd.forEach(t),Kl=h(o),At=a(o,"DIV",{class:!0});var Fd=l(At);k(Qn.$$.fragment,Fd),Dp=h(Fd),Ar=a(Fd,"P",{});var Q_=l(Ar);Lp=i(Q_,"Base class for outputs of models predicting if two sentences are consecutive or not."),Q_.forEach(t),Fd.forEach(t),Jl=h(o),Wt=a(o,"DIV",{class:!0});var jd=l(Wt);k(Zn.$$.fragment,jd),Op=h(jd),Wr=a(jd,"P",{});var Z_=l(Wr);Np=i(Z_,"Base class for outputs of models predicting if two sentences are consecutive or not."),Z_.forEach(t),jd.forEach(t),Xl=h(o),Ut=a(o,"H2",{class:!0});var zd=l(Ut);Po=a(zd,"A",{id:!0,class:!0,href:!0});var eT=l(Po);Ur=a(eT,"SPAN",{});var tT=l(Ur);k(es.$$.fragment,tT),tT.forEach(t),eT.forEach(t),Hp=h(zd),Rr=a(zd,"SPAN",{});var oT=l(Rr);Ip=i(oT,"GPT2Model"),oT.forEach(t),zd.forEach(t),Yl=h(o),Pe=a(o,"DIV",{class:!0});var Ze=l(Pe);k(ts.$$.fragment,Ze),Sp=h(Ze),Br=a(Ze,"P",{});var nT=l(Br);Ap=i(nT,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),nT.forEach(t),Wp=h(Ze),os=a(Ze,"P",{});var Ed=l(os);Up=i(Ed,"This model inherits from "),Ia=a(Ed,"A",{href:!0});var sT=l(Ia);Rp=i(sT,"PreTrainedModel"),sT.forEach(t),Bp=i(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed.forEach(t),Vp=h(Ze),ns=a(Ze,"P",{});var qd=l(ns);Kp=i(qd,"This model is also a PyTorch "),ss=a(qd,"A",{href:!0,rel:!0});var aT=l(ss);Jp=i(aT,"torch.nn.Module"),aT.forEach(t),Xp=i(qd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qd.forEach(t),Yp=h(Ze),lt=a(Ze,"DIV",{class:!0});var kn=l(lt);k(as.$$.fragment,kn),Qp=h(kn),Rt=a(kn,"P",{});var pr=l(Rt);Zp=i(pr,"The "),Sa=a(pr,"A",{href:!0});var rT=l(Sa);eh=i(rT,"GPT2Model"),rT.forEach(t),th=i(pr," forward method, overrides the "),Vr=a(pr,"CODE",{});var iT=l(Vr);oh=i(iT,"__call__"),iT.forEach(t),nh=i(pr," special method."),pr.forEach(t),sh=h(kn),k(Mo.$$.fragment,kn),ah=h(kn),k(Go.$$.fragment,kn),kn.forEach(t),rh=h(Ze),dt=a(Ze,"DIV",{class:!0});var wn=l(dt);k(rs.$$.fragment,wn),ih=h(wn),Kr=a(wn,"P",{});var lT=l(Kr);lh=i(lT,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),lT.forEach(t),dh=h(wn),Jr=a(wn,"P",{});var dT=l(Jr);ch=i(dT,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),dT.forEach(t),ph=h(wn),k(xo.$$.fragment,wn),wn.forEach(t),hh=h(Ze),xt=a(Ze,"DIV",{class:!0});var hr=l(xt);k(is.$$.fragment,hr),mh=h(hr),Xr=a(hr,"P",{});var cT=l(Xr);uh=i(cT,"Moves the model to cpu from a model parallel state."),cT.forEach(t),fh=h(hr),k(Fo.$$.fragment,hr),hr.forEach(t),Ze.forEach(t),Ql=h(o),Bt=a(o,"H2",{class:!0});var Cd=l(Bt);jo=a(Cd,"A",{id:!0,class:!0,href:!0});var pT=l(jo);Yr=a(pT,"SPAN",{});var hT=l(Yr);k(ls.$$.fragment,hT),hT.forEach(t),pT.forEach(t),gh=h(Cd),Qr=a(Cd,"SPAN",{});var mT=l(Qr);_h=i(mT,"GPT2LMHeadModel"),mT.forEach(t),Cd.forEach(t),Zl=h(o),Me=a(o,"DIV",{class:!0});var et=l(Me);k(ds.$$.fragment,et),Th=h(et),Zr=a(et,"P",{});var uT=l(Zr);bh=i(uT,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),uT.forEach(t),vh=h(et),cs=a(et,"P",{});var Dd=l(cs);yh=i(Dd,"This model inherits from "),Aa=a(Dd,"A",{href:!0});var fT=l(Aa);kh=i(fT,"PreTrainedModel"),fT.forEach(t),wh=i(Dd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dd.forEach(t),$h=h(et),ps=a(et,"P",{});var Ld=l(ps);Ph=i(Ld,"This model is also a PyTorch "),hs=a(Ld,"A",{href:!0,rel:!0});var gT=l(hs);Mh=i(gT,"torch.nn.Module"),gT.forEach(t),Gh=i(Ld,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ld.forEach(t),xh=h(et),ct=a(et,"DIV",{class:!0});var $n=l(ct);k(ms.$$.fragment,$n),Fh=h($n),Vt=a($n,"P",{});var mr=l(Vt);jh=i(mr,"The "),Wa=a(mr,"A",{href:!0});var _T=l(Wa);zh=i(_T,"GPT2LMHeadModel"),_T.forEach(t),Eh=i(mr," forward method, overrides the "),ei=a(mr,"CODE",{});var TT=l(ei);qh=i(TT,"__call__"),TT.forEach(t),Ch=i(mr," special method."),mr.forEach(t),Dh=h($n),k(zo.$$.fragment,$n),Lh=h($n),k(Eo.$$.fragment,$n),$n.forEach(t),Oh=h(et),pt=a(et,"DIV",{class:!0});var Pn=l(pt);k(us.$$.fragment,Pn),Nh=h(Pn),ti=a(Pn,"P",{});var bT=l(ti);Hh=i(bT,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),bT.forEach(t),Ih=h(Pn),oi=a(Pn,"P",{});var vT=l(oi);Sh=i(vT,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),vT.forEach(t),Ah=h(Pn),k(qo.$$.fragment,Pn),Pn.forEach(t),Wh=h(et),Ft=a(et,"DIV",{class:!0});var ur=l(Ft);k(fs.$$.fragment,ur),Uh=h(ur),ni=a(ur,"P",{});var yT=l(ni);Rh=i(yT,"Moves the model to cpu from a model parallel state."),yT.forEach(t),Bh=h(ur),k(Co.$$.fragment,ur),ur.forEach(t),et.forEach(t),ed=h(o),Kt=a(o,"H2",{class:!0});var Od=l(Kt);Do=a(Od,"A",{id:!0,class:!0,href:!0});var kT=l(Do);si=a(kT,"SPAN",{});var wT=l(si);k(gs.$$.fragment,wT),wT.forEach(t),kT.forEach(t),Vh=h(Od),ai=a(Od,"SPAN",{});var $T=l(ai);Kh=i($T,"GPT2DoubleHeadsModel"),$T.forEach(t),Od.forEach(t),td=h(o),Ke=a(o,"DIV",{class:!0});var jt=l(Ke);k(_s.$$.fragment,jt),Jh=h(jt),ri=a(jt,"P",{});var PT=l(ri);Xh=i(PT,`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),PT.forEach(t),Yh=h(jt),Ts=a(jt,"P",{});var Nd=l(Ts);Qh=i(Nd,"This model inherits from "),Ua=a(Nd,"A",{href:!0});var MT=l(Ua);Zh=i(MT,"PreTrainedModel"),MT.forEach(t),em=i(Nd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nd.forEach(t),tm=h(jt),bs=a(jt,"P",{});var Hd=l(bs);om=i(Hd,"This model is also a PyTorch "),vs=a(Hd,"A",{href:!0,rel:!0});var GT=l(vs);nm=i(GT,"torch.nn.Module"),GT.forEach(t),sm=i(Hd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hd.forEach(t),am=h(jt),ht=a(jt,"DIV",{class:!0});var Mn=l(ht);k(ys.$$.fragment,Mn),rm=h(Mn),Jt=a(Mn,"P",{});var fr=l(Jt);im=i(fr,"The "),Ra=a(fr,"A",{href:!0});var xT=l(Ra);lm=i(xT,"GPT2DoubleHeadsModel"),xT.forEach(t),dm=i(fr," forward method, overrides the "),ii=a(fr,"CODE",{});var FT=l(ii);cm=i(FT,"__call__"),FT.forEach(t),pm=i(fr," special method."),fr.forEach(t),hm=h(Mn),k(Lo.$$.fragment,Mn),mm=h(Mn),k(Oo.$$.fragment,Mn),Mn.forEach(t),jt.forEach(t),od=h(o),Xt=a(o,"H2",{class:!0});var Id=l(Xt);No=a(Id,"A",{id:!0,class:!0,href:!0});var jT=l(No);li=a(jT,"SPAN",{});var zT=l(li);k(ks.$$.fragment,zT),zT.forEach(t),jT.forEach(t),um=h(Id),di=a(Id,"SPAN",{});var ET=l(di);fm=i(ET,"GPT2ForSequenceClassification"),ET.forEach(t),Id.forEach(t),nd=h(o),Ge=a(o,"DIV",{class:!0});var tt=l(Ge);k(ws.$$.fragment,tt),gm=h(tt),ci=a(tt,"P",{});var qT=l(ci);_m=i(qT,"The GPT2 Model transformer with a sequence classification head on top (linear layer)."),qT.forEach(t),Tm=h(tt),Ba=a(tt,"P",{});var M_=l(Ba);Va=a(M_,"A",{href:!0});var CT=l(Va);bm=i(CT,"GPT2ForSequenceClassification"),CT.forEach(t),vm=i(M_,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),M_.forEach(t),ym=h(tt),rt=a(tt,"P",{});var zt=l(rt);km=i(zt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),pi=a(zt,"CODE",{});var DT=l(pi);wm=i(DT,"pad_token_id"),DT.forEach(t),$m=i(zt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),hi=a(zt,"CODE",{});var LT=l(hi);Pm=i(LT,"pad_token_id"),LT.forEach(t),Mm=i(zt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),mi=a(zt,"CODE",{});var OT=l(mi);Gm=i(OT,"inputs_embeds"),OT.forEach(t),xm=i(zt," are passed instead of "),ui=a(zt,"CODE",{});var NT=l(ui);Fm=i(NT,"input_ids"),NT.forEach(t),jm=i(zt,`, it does the same (take the last value in
each row of the batch).`),zt.forEach(t),zm=h(tt),$s=a(tt,"P",{});var Sd=l($s);Em=i(Sd,"This model inherits from "),Ka=a(Sd,"A",{href:!0});var HT=l(Ka);qm=i(HT,"PreTrainedModel"),HT.forEach(t),Cm=i(Sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sd.forEach(t),Dm=h(tt),Ps=a(tt,"P",{});var Ad=l(Ps);Lm=i(Ad,"This model is also a PyTorch "),Ms=a(Ad,"A",{href:!0,rel:!0});var IT=l(Ms);Om=i(IT,"torch.nn.Module"),IT.forEach(t),Nm=i(Ad,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ad.forEach(t),Hm=h(tt),je=a(tt,"DIV",{class:!0});var ot=l(je);k(Gs.$$.fragment,ot),Im=h(ot),Yt=a(ot,"P",{});var gr=l(Yt);Sm=i(gr,"The "),Ja=a(gr,"A",{href:!0});var ST=l(Ja);Am=i(ST,"GPT2ForSequenceClassification"),ST.forEach(t),Wm=i(gr," forward method, overrides the "),fi=a(gr,"CODE",{});var AT=l(fi);Um=i(AT,"__call__"),AT.forEach(t),Rm=i(gr," special method."),gr.forEach(t),Bm=h(ot),k(Ho.$$.fragment,ot),Vm=h(ot),k(Io.$$.fragment,ot),Km=h(ot),k(So.$$.fragment,ot),Jm=h(ot),k(Ao.$$.fragment,ot),Xm=h(ot),k(Wo.$$.fragment,ot),ot.forEach(t),tt.forEach(t),sd=h(o),Qt=a(o,"H2",{class:!0});var Wd=l(Qt);Uo=a(Wd,"A",{id:!0,class:!0,href:!0});var WT=l(Uo);gi=a(WT,"SPAN",{});var UT=l(gi);k(xs.$$.fragment,UT),UT.forEach(t),WT.forEach(t),Ym=h(Wd),_i=a(Wd,"SPAN",{});var RT=l(_i);Qm=i(RT,"GPT2ForTokenClassification"),RT.forEach(t),Wd.forEach(t),ad=h(o),Je=a(o,"DIV",{class:!0});var Et=l(Je);k(Fs.$$.fragment,Et),Zm=h(Et),Ti=a(Et,"P",{});var BT=l(Ti);eu=i(BT,`GPT2 Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),BT.forEach(t),tu=h(Et),js=a(Et,"P",{});var Ud=l(js);ou=i(Ud,"This model inherits from "),Xa=a(Ud,"A",{href:!0});var VT=l(Xa);nu=i(VT,"PreTrainedModel"),VT.forEach(t),su=i(Ud,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ud.forEach(t),au=h(Et),zs=a(Et,"P",{});var Rd=l(zs);ru=i(Rd,"This model is also a PyTorch "),Es=a(Rd,"A",{href:!0,rel:!0});var KT=l(Es);iu=i(KT,"torch.nn.Module"),KT.forEach(t),lu=i(Rd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rd.forEach(t),du=h(Et),Xe=a(Et,"DIV",{class:!0});var qt=l(Xe);k(qs.$$.fragment,qt),cu=h(qt),Zt=a(qt,"P",{});var _r=l(Zt);pu=i(_r,"The "),Ya=a(_r,"A",{href:!0});var JT=l(Ya);hu=i(JT,"GPT2ForTokenClassification"),JT.forEach(t),mu=i(_r," forward method, overrides the "),bi=a(_r,"CODE",{});var XT=l(bi);uu=i(XT,"__call__"),XT.forEach(t),fu=i(_r," special method."),_r.forEach(t),gu=h(qt),k(Ro.$$.fragment,qt),_u=h(qt),k(Bo.$$.fragment,qt),Tu=h(qt),k(Vo.$$.fragment,qt),qt.forEach(t),Et.forEach(t),rd=h(o),eo=a(o,"H2",{class:!0});var Bd=l(eo);Ko=a(Bd,"A",{id:!0,class:!0,href:!0});var YT=l(Ko);vi=a(YT,"SPAN",{});var QT=l(vi);k(Cs.$$.fragment,QT),QT.forEach(t),YT.forEach(t),bu=h(Bd),yi=a(Bd,"SPAN",{});var ZT=l(yi);vu=i(ZT,"TFGPT2Model"),ZT.forEach(t),Bd.forEach(t),id=h(o),Le=a(o,"DIV",{class:!0});var Tt=l(Le);k(Ds.$$.fragment,Tt),yu=h(Tt),ki=a(Tt,"P",{});var e2=l(ki);ku=i(e2,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),e2.forEach(t),wu=h(Tt),Ls=a(Tt,"P",{});var Vd=l(Ls);$u=i(Vd,"This model inherits from "),Qa=a(Vd,"A",{href:!0});var t2=l(Qa);Pu=i(t2,"TFPreTrainedModel"),t2.forEach(t),Mu=i(Vd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vd.forEach(t),Gu=h(Tt),Os=a(Tt,"P",{});var Kd=l(Os);xu=i(Kd,"This model is also a "),Ns=a(Kd,"A",{href:!0,rel:!0});var o2=l(Ns);Fu=i(o2,"tf.keras.Model"),o2.forEach(t),ju=i(Kd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kd.forEach(t),zu=h(Tt),k(Jo.$$.fragment,Tt),Eu=h(Tt),mt=a(Tt,"DIV",{class:!0});var Gn=l(mt);k(Hs.$$.fragment,Gn),qu=h(Gn),to=a(Gn,"P",{});var Tr=l(to);Cu=i(Tr,"The "),Za=a(Tr,"A",{href:!0});var n2=l(Za);Du=i(n2,"TFGPT2Model"),n2.forEach(t),Lu=i(Tr," forward method, overrides the "),wi=a(Tr,"CODE",{});var s2=l(wi);Ou=i(s2,"__call__"),s2.forEach(t),Nu=i(Tr," special method."),Tr.forEach(t),Hu=h(Gn),k(Xo.$$.fragment,Gn),Iu=h(Gn),k(Yo.$$.fragment,Gn),Gn.forEach(t),Tt.forEach(t),ld=h(o),oo=a(o,"H2",{class:!0});var Jd=l(oo);Qo=a(Jd,"A",{id:!0,class:!0,href:!0});var a2=l(Qo);$i=a(a2,"SPAN",{});var r2=l($i);k(Is.$$.fragment,r2),r2.forEach(t),a2.forEach(t),Su=h(Jd),Pi=a(Jd,"SPAN",{});var i2=l(Pi);Au=i(i2,"TFGPT2LMHeadModel"),i2.forEach(t),Jd.forEach(t),dd=h(o),Oe=a(o,"DIV",{class:!0});var bt=l(Oe);k(Ss.$$.fragment,bt),Wu=h(bt),Mi=a(bt,"P",{});var l2=l(Mi);Uu=i(l2,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),l2.forEach(t),Ru=h(bt),As=a(bt,"P",{});var Xd=l(As);Bu=i(Xd,"This model inherits from "),er=a(Xd,"A",{href:!0});var d2=l(er);Vu=i(d2,"TFPreTrainedModel"),d2.forEach(t),Ku=i(Xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xd.forEach(t),Ju=h(bt),Ws=a(bt,"P",{});var Yd=l(Ws);Xu=i(Yd,"This model is also a "),Us=a(Yd,"A",{href:!0,rel:!0});var c2=l(Us);Yu=i(c2,"tf.keras.Model"),c2.forEach(t),Qu=i(Yd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yd.forEach(t),Zu=h(bt),k(Zo.$$.fragment,bt),ef=h(bt),ut=a(bt,"DIV",{class:!0});var xn=l(ut);k(Rs.$$.fragment,xn),tf=h(xn),no=a(xn,"P",{});var br=l(no);of=i(br,"The "),tr=a(br,"A",{href:!0});var p2=l(tr);nf=i(p2,"TFGPT2LMHeadModel"),p2.forEach(t),sf=i(br," forward method, overrides the "),Gi=a(br,"CODE",{});var h2=l(Gi);af=i(h2,"__call__"),h2.forEach(t),rf=i(br," special method."),br.forEach(t),lf=h(xn),k(en.$$.fragment,xn),df=h(xn),k(tn.$$.fragment,xn),xn.forEach(t),bt.forEach(t),cd=h(o),so=a(o,"H2",{class:!0});var Qd=l(so);on=a(Qd,"A",{id:!0,class:!0,href:!0});var m2=l(on);xi=a(m2,"SPAN",{});var u2=l(xi);k(Bs.$$.fragment,u2),u2.forEach(t),m2.forEach(t),cf=h(Qd),Fi=a(Qd,"SPAN",{});var f2=l(Fi);pf=i(f2,"TFGPT2DoubleHeadsModel"),f2.forEach(t),Qd.forEach(t),pd=h(o),Ne=a(o,"DIV",{class:!0});var vt=l(Ne);k(Vs.$$.fragment,vt),hf=h(vt),ji=a(vt,"P",{});var g2=l(ji);mf=i(g2,`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),g2.forEach(t),uf=h(vt),Ks=a(vt,"P",{});var Zd=l(Ks);ff=i(Zd,"This model inherits from "),or=a(Zd,"A",{href:!0});var _2=l(or);gf=i(_2,"TFPreTrainedModel"),_2.forEach(t),_f=i(Zd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zd.forEach(t),Tf=h(vt),Js=a(vt,"P",{});var ec=l(Js);bf=i(ec,"This model is also a "),Xs=a(ec,"A",{href:!0,rel:!0});var T2=l(Xs);vf=i(T2,"tf.keras.Model"),T2.forEach(t),yf=i(ec,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ec.forEach(t),kf=h(vt),k(nn.$$.fragment,vt),wf=h(vt),ft=a(vt,"DIV",{class:!0});var Fn=l(ft);k(Ys.$$.fragment,Fn),$f=h(Fn),ao=a(Fn,"P",{});var vr=l(ao);Pf=i(vr,"The "),nr=a(vr,"A",{href:!0});var b2=l(nr);Mf=i(b2,"TFGPT2DoubleHeadsModel"),b2.forEach(t),Gf=i(vr," forward method, overrides the "),zi=a(vr,"CODE",{});var v2=l(zi);xf=i(v2,"__call__"),v2.forEach(t),Ff=i(vr," special method."),vr.forEach(t),jf=h(Fn),k(sn.$$.fragment,Fn),zf=h(Fn),k(an.$$.fragment,Fn),Fn.forEach(t),vt.forEach(t),hd=h(o),ro=a(o,"H2",{class:!0});var tc=l(ro);rn=a(tc,"A",{id:!0,class:!0,href:!0});var y2=l(rn);Ei=a(y2,"SPAN",{});var k2=l(Ei);k(Qs.$$.fragment,k2),k2.forEach(t),y2.forEach(t),Ef=h(tc),qi=a(tc,"SPAN",{});var w2=l(qi);qf=i(w2,"TFGPT2ForSequenceClassification"),w2.forEach(t),tc.forEach(t),md=h(o),he=a(o,"DIV",{class:!0});var Se=l(he);k(Zs.$$.fragment,Se),Cf=h(Se),Ci=a(Se,"P",{});var $2=l(Ci);Df=i($2,"The GPT2 Model transformer with a sequence classification head on top (linear layer)."),$2.forEach(t),Lf=h(Se),sr=a(Se,"P",{});var G_=l(sr);ar=a(G_,"A",{href:!0});var P2=l(ar);Of=i(P2,"TFGPT2ForSequenceClassification"),P2.forEach(t),Nf=i(G_,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),G_.forEach(t),Hf=h(Se),it=a(Se,"P",{});var Ct=l(it);If=i(Ct,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Di=a(Ct,"CODE",{});var M2=l(Di);Sf=i(M2,"pad_token_id"),M2.forEach(t),Af=i(Ct,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Li=a(Ct,"CODE",{});var G2=l(Li);Wf=i(G2,"pad_token_id"),G2.forEach(t),Uf=i(Ct,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Oi=a(Ct,"CODE",{});var x2=l(Oi);Rf=i(x2,"inputs_embeds"),x2.forEach(t),Bf=i(Ct," are passed instead of "),Ni=a(Ct,"CODE",{});var F2=l(Ni);Vf=i(F2,"input_ids"),F2.forEach(t),Kf=i(Ct,`, it does the same (take the last value in
each row of the batch).`),Ct.forEach(t),Jf=h(Se),ea=a(Se,"P",{});var oc=l(ea);Xf=i(oc,"This model inherits from "),rr=a(oc,"A",{href:!0});var j2=l(rr);Yf=i(j2,"TFPreTrainedModel"),j2.forEach(t),Qf=i(oc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oc.forEach(t),Zf=h(Se),ta=a(Se,"P",{});var nc=l(ta);eg=i(nc,"This model is also a "),oa=a(nc,"A",{href:!0,rel:!0});var z2=l(oa);tg=i(z2,"tf.keras.Model"),z2.forEach(t),og=i(nc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nc.forEach(t),ng=h(Se),k(ln.$$.fragment,Se),sg=h(Se),Ye=a(Se,"DIV",{class:!0});var Dt=l(Ye);k(na.$$.fragment,Dt),ag=h(Dt),io=a(Dt,"P",{});var yr=l(io);rg=i(yr,"The "),ir=a(yr,"A",{href:!0});var E2=l(ir);ig=i(E2,"TFGPT2ForSequenceClassification"),E2.forEach(t),lg=i(yr," forward method, overrides the "),Hi=a(yr,"CODE",{});var q2=l(Hi);dg=i(q2,"__call__"),q2.forEach(t),cg=i(yr," special method."),yr.forEach(t),pg=h(Dt),k(dn.$$.fragment,Dt),hg=h(Dt),k(cn.$$.fragment,Dt),mg=h(Dt),k(pn.$$.fragment,Dt),Dt.forEach(t),Se.forEach(t),ud=h(o),lo=a(o,"H2",{class:!0});var sc=l(lo);hn=a(sc,"A",{id:!0,class:!0,href:!0});var C2=l(hn);Ii=a(C2,"SPAN",{});var D2=l(Ii);k(sa.$$.fragment,D2),D2.forEach(t),C2.forEach(t),ug=h(sc),Si=a(sc,"SPAN",{});var L2=l(Si);fg=i(L2,"TFSequenceClassifierOutputWithPast"),L2.forEach(t),sc.forEach(t),fd=h(o),co=a(o,"DIV",{class:!0});var ac=l(co);k(aa.$$.fragment,ac),gg=h(ac),Ai=a(ac,"P",{});var O2=l(Ai);_g=i(O2,"Base class for outputs of sentence classification models."),O2.forEach(t),ac.forEach(t),gd=h(o),po=a(o,"H2",{class:!0});var rc=l(po);mn=a(rc,"A",{id:!0,class:!0,href:!0});var N2=l(mn);Wi=a(N2,"SPAN",{});var H2=l(Wi);k(ra.$$.fragment,H2),H2.forEach(t),N2.forEach(t),Tg=h(rc),Ui=a(rc,"SPAN",{});var I2=l(Ui);bg=i(I2,"FlaxGPT2Model"),I2.forEach(t),rc.forEach(t),_d=h(o),xe=a(o,"DIV",{class:!0});var nt=l(xe);k(ia.$$.fragment,nt),vg=h(nt),Ri=a(nt,"P",{});var S2=l(Ri);yg=i(S2,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),S2.forEach(t),kg=h(nt),la=a(nt,"P",{});var ic=l(la);wg=i(ic,"This model inherits from "),lr=a(ic,"A",{href:!0});var A2=l(lr);$g=i(A2,"FlaxPreTrainedModel"),A2.forEach(t),Pg=i(ic,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ic.forEach(t),Mg=h(nt),da=a(nt,"P",{});var lc=l(da);Gg=i(lc,`This model is also a Flax Linen
`),ca=a(lc,"A",{href:!0,rel:!0});var W2=l(ca);xg=i(W2,"flax.nn.Module"),W2.forEach(t),Fg=i(lc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),lc.forEach(t),jg=h(nt),Bi=a(nt,"P",{});var U2=l(Bi);zg=i(U2,"Finally, this model supports inherent JAX features such as:"),U2.forEach(t),Eg=h(nt),wt=a(nt,"UL",{});var jn=l(wt);Vi=a(jn,"LI",{});var R2=l(Vi);pa=a(R2,"A",{href:!0,rel:!0});var B2=l(pa);qg=i(B2,"Just-In-Time (JIT) compilation"),B2.forEach(t),R2.forEach(t),Cg=h(jn),Ki=a(jn,"LI",{});var V2=l(Ki);ha=a(V2,"A",{href:!0,rel:!0});var K2=l(ha);Dg=i(K2,"Automatic Differentiation"),K2.forEach(t),V2.forEach(t),Lg=h(jn),Ji=a(jn,"LI",{});var J2=l(Ji);ma=a(J2,"A",{href:!0,rel:!0});var X2=l(ma);Og=i(X2,"Vectorization"),X2.forEach(t),J2.forEach(t),Ng=h(jn),Xi=a(jn,"LI",{});var Y2=l(Xi);ua=a(Y2,"A",{href:!0,rel:!0});var Q2=l(ua);Hg=i(Q2,"Parallelization"),Q2.forEach(t),Y2.forEach(t),jn.forEach(t),Ig=h(nt),gt=a(nt,"DIV",{class:!0});var zn=l(gt);k(fa.$$.fragment,zn),Sg=h(zn),ho=a(zn,"P",{});var kr=l(ho);Ag=i(kr,"The "),Yi=a(kr,"CODE",{});var Z2=l(Yi);Wg=i(Z2,"FlaxGPT2PreTrainedModel"),Z2.forEach(t),Ug=i(kr," forward method, overrides the "),Qi=a(kr,"CODE",{});var eb=l(Qi);Rg=i(eb,"__call__"),eb.forEach(t),Bg=i(kr," special method."),kr.forEach(t),Vg=h(zn),k(un.$$.fragment,zn),Kg=h(zn),k(fn.$$.fragment,zn),zn.forEach(t),nt.forEach(t),Td=h(o),mo=a(o,"H2",{class:!0});var dc=l(mo);gn=a(dc,"A",{id:!0,class:!0,href:!0});var tb=l(gn);Zi=a(tb,"SPAN",{});var ob=l(Zi);k(ga.$$.fragment,ob),ob.forEach(t),tb.forEach(t),Jg=h(dc),el=a(dc,"SPAN",{});var nb=l(el);Xg=i(nb,"FlaxGPT2LMHeadModel"),nb.forEach(t),dc.forEach(t),bd=h(o),Fe=a(o,"DIV",{class:!0});var st=l(Fe);k(_a.$$.fragment,st),Yg=h(st),tl=a(st,"P",{});var sb=l(tl);Qg=i(sb,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),sb.forEach(t),Zg=h(st),Ta=a(st,"P",{});var cc=l(Ta);e_=i(cc,"This model inherits from "),dr=a(cc,"A",{href:!0});var ab=l(dr);t_=i(ab,"FlaxPreTrainedModel"),ab.forEach(t),o_=i(cc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cc.forEach(t),n_=h(st),ba=a(st,"P",{});var pc=l(ba);s_=i(pc,`This model is also a Flax Linen
`),va=a(pc,"A",{href:!0,rel:!0});var rb=l(va);a_=i(rb,"flax.nn.Module"),rb.forEach(t),r_=i(pc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),pc.forEach(t),i_=h(st),ol=a(st,"P",{});var ib=l(ol);l_=i(ib,"Finally, this model supports inherent JAX features such as:"),ib.forEach(t),d_=h(st),$t=a(st,"UL",{});var En=l($t);nl=a(En,"LI",{});var lb=l(nl);ya=a(lb,"A",{href:!0,rel:!0});var db=l(ya);c_=i(db,"Just-In-Time (JIT) compilation"),db.forEach(t),lb.forEach(t),p_=h(En),sl=a(En,"LI",{});var cb=l(sl);ka=a(cb,"A",{href:!0,rel:!0});var pb=l(ka);h_=i(pb,"Automatic Differentiation"),pb.forEach(t),cb.forEach(t),m_=h(En),al=a(En,"LI",{});var hb=l(al);wa=a(hb,"A",{href:!0,rel:!0});var mb=l(wa);u_=i(mb,"Vectorization"),mb.forEach(t),hb.forEach(t),f_=h(En),rl=a(En,"LI",{});var ub=l(rl);$a=a(ub,"A",{href:!0,rel:!0});var fb=l($a);g_=i(fb,"Parallelization"),fb.forEach(t),ub.forEach(t),En.forEach(t),__=h(st),_t=a(st,"DIV",{class:!0});var qn=l(_t);k(Pa.$$.fragment,qn),T_=h(qn),uo=a(qn,"P",{});var wr=l(uo);b_=i(wr,"The "),il=a(wr,"CODE",{});var gb=l(il);v_=i(gb,"FlaxGPT2PreTrainedModel"),gb.forEach(t),y_=i(wr," forward method, overrides the "),ll=a(wr,"CODE",{});var _b=l(ll);k_=i(_b,"__call__"),_b.forEach(t),w_=i(wr," special method."),wr.forEach(t),$_=h(qn),k(_n.$$.fragment,qn),P_=h(qn),k(Tn.$$.fragment,qn),qn.forEach(t),st.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(cv)),f(c,"id","openai-gpt2"),f(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(c,"href","#openai-gpt2"),f(m,"class","relative group"),f(B,"id","overview"),f(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(B,"href","#overview"),f(j,"class","relative group"),f(ee,"href","https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"),f(ee,"rel","nofollow"),f(za,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Model.forward"),f(Ea,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2Model.call"),f(Cn,"href","https://github.com/stanford-crfm/mistral/"),f(Cn,"rel","nofollow"),f(Dn,"href","https://transformer.huggingface.co/doc/gpt2-large"),f(Dn,"rel","nofollow"),f(Ln,"href","https://huggingface.co/thomwolf"),f(Ln,"rel","nofollow"),f(On,"href","https://openai.com/blog/better-language-models/"),f(On,"rel","nofollow"),f(go,"id","transformers.GPT2Config"),f(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(go,"href","#transformers.GPT2Config"),f(Ot,"class","relative group"),f(qa,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Model"),f(Ca,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2Model"),f(In,"href","https://huggingface.co/gpt2"),f(In,"rel","nofollow"),f(Da,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(La,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(To,"id","transformers.GPT2Tokenizer"),f(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(To,"href","#transformers.GPT2Tokenizer"),f(Ht,"class","relative group"),f(Oa,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(Na,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(yo,"id","transformers.GPT2TokenizerFast"),f(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(yo,"href","#transformers.GPT2TokenizerFast"),f(It,"class","relative group"),f(Ha,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($o,"id","transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"),f($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($o,"href","#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"),f(St,"class","relative group"),f(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Po,"id","transformers.GPT2Model"),f(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Po,"href","#transformers.GPT2Model"),f(Ut,"class","relative group"),f(Ia,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ss,"rel","nofollow"),f(Sa,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Model"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jo,"id","transformers.GPT2LMHeadModel"),f(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(jo,"href","#transformers.GPT2LMHeadModel"),f(Bt,"class","relative group"),f(Aa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(hs,"rel","nofollow"),f(Wa,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2LMHeadModel"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Do,"id","transformers.GPT2DoubleHeadsModel"),f(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Do,"href","#transformers.GPT2DoubleHeadsModel"),f(Kt,"class","relative group"),f(Ua,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(vs,"rel","nofollow"),f(Ra,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(No,"id","transformers.GPT2ForSequenceClassification"),f(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(No,"href","#transformers.GPT2ForSequenceClassification"),f(Xt,"class","relative group"),f(Va,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2ForSequenceClassification"),f(Ka,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ms,"rel","nofollow"),f(Ja,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2ForSequenceClassification"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Uo,"id","transformers.GPT2ForTokenClassification"),f(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Uo,"href","#transformers.GPT2ForTokenClassification"),f(Qt,"class","relative group"),f(Xa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Es,"rel","nofollow"),f(Ya,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2ForTokenClassification"),f(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ko,"id","transformers.TFGPT2Model"),f(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ko,"href","#transformers.TFGPT2Model"),f(eo,"class","relative group"),f(Qa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ns,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ns,"rel","nofollow"),f(Za,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2Model"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qo,"id","transformers.TFGPT2LMHeadModel"),f(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qo,"href","#transformers.TFGPT2LMHeadModel"),f(oo,"class","relative group"),f(er,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Us,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Us,"rel","nofollow"),f(tr,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2LMHeadModel"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(on,"id","transformers.TFGPT2DoubleHeadsModel"),f(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(on,"href","#transformers.TFGPT2DoubleHeadsModel"),f(so,"class","relative group"),f(or,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Xs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Xs,"rel","nofollow"),f(nr,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rn,"id","transformers.TFGPT2ForSequenceClassification"),f(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rn,"href","#transformers.TFGPT2ForSequenceClassification"),f(ro,"class","relative group"),f(ar,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2ForSequenceClassification"),f(rr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(oa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(oa,"rel","nofollow"),f(ir,"href","/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2ForSequenceClassification"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(hn,"id","transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"),f(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(hn,"href","#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"),f(lo,"class","relative group"),f(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mn,"id","transformers.FlaxGPT2Model"),f(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(mn,"href","#transformers.FlaxGPT2Model"),f(po,"class","relative group"),f(lr,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ca,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(ca,"rel","nofollow"),f(pa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(pa,"rel","nofollow"),f(ha,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ha,"rel","nofollow"),f(ma,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ma,"rel","nofollow"),f(ua,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(ua,"rel","nofollow"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gn,"id","transformers.FlaxGPT2LMHeadModel"),f(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(gn,"href","#transformers.FlaxGPT2LMHeadModel"),f(mo,"class","relative group"),f(dr,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(va,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(va,"rel","nofollow"),f(ya,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ya,"rel","nofollow"),f(ka,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ka,"rel","nofollow"),f(wa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(wa,"rel","nofollow"),f($a,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f($a,"rel","nofollow"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),_(o,T,b),_(o,m,b),e(m,c),e(c,g),w(n,g,null),e(m,u),e(m,F),e(F,Q),_(o,C,b),_(o,j,b),e(j,B),e(B,I),w(Z,I,null),e(j,_e),e(j,S),e(S,Te),_(o,ue,b),_(o,W,b),e(W,O),e(W,ee),e(ee,te),e(W,z),_(o,q,b),_(o,ie,b),e(ie,V),_(o,fe,b),_(o,le,b),e(le,A),e(A,be),_(o,ge,b),_(o,E,b),e(E,ve),_(o,U,b),_(o,R,b),e(R,de),e(de,K),e(R,ye),e(R,oe),e(oe,N),e(oe,ce),e(ce,J),e(oe,ke),e(R,v),e(R,x),e(x,ne),e(x,Ee),e(Ee,Ae),e(x,H),e(x,qe),e(qe,We),e(x,Ue),e(x,D),e(D,X),e(x,Re),e(x,Ce),e(Ce,Y),e(x,Be),e(x,De),e(De,we),e(x,Ve),e(x,za),e(za,hc),e(x,mc),e(x,$r),e($r,uc),e(x,fc),e(x,Ea),e(Ea,gc),e(x,_c),e(R,Tc),e(R,yt),e(yt,bc),e(yt,Pr),e(Pr,vc),e(yt,yc),e(yt,Mr),e(Mr,kc),e(yt,wc),e(yt,Cn),e(Cn,$c),e(yt,Pc),_(o,Hl,b),_(o,Lt,b),e(Lt,Dn),e(Dn,Mc),e(Lt,Gc),e(Lt,Gr),e(Gr,xc),e(Lt,Fc),_(o,Il,b),_(o,Gt,b),e(Gt,jc),e(Gt,Ln),e(Ln,zc),e(Gt,Ec),e(Gt,On),e(On,qc),e(Gt,Cc),_(o,Sl,b),_(o,Ot,b),e(Ot,go),e(go,xr),w(Nn,xr,null),e(Ot,Dc),e(Ot,Fr),e(Fr,Lc),_(o,Al,b),_(o,at,b),w(Hn,at,null),e(at,Oc),e(at,kt),e(kt,Nc),e(kt,qa),e(qa,Hc),e(kt,Ic),e(kt,Ca),e(Ca,Sc),e(kt,Ac),e(kt,In),e(In,Wc),e(kt,Uc),e(at,Rc),e(at,Nt),e(Nt,Bc),e(Nt,Da),e(Da,Vc),e(Nt,Kc),e(Nt,La),e(La,Jc),e(Nt,Xc),e(at,Yc),w(_o,at,null),_(o,Wl,b),_(o,Ht,b),e(Ht,To),e(To,jr),w(Sn,jr,null),e(Ht,Qc),e(Ht,zr),e(zr,Zc),_(o,Ul,b),_(o,pe,b),w(An,pe,null),e(pe,ep),e(pe,Er),e(Er,tp),e(pe,op),e(pe,qr),e(qr,np),e(pe,sp),w(bo,pe,null),e(pe,ap),e(pe,Wn),e(Wn,rp),e(Wn,Cr),e(Cr,ip),e(Wn,lp),e(pe,dp),w(vo,pe,null),e(pe,cp),e(pe,Un),e(Un,pp),e(Un,Oa),e(Oa,hp),e(Un,mp),e(pe,up),e(pe,Na),w(Rn,Na,null),_(o,Rl,b),_(o,It,b),e(It,yo),e(yo,Dr),w(Bn,Dr,null),e(It,fp),e(It,Lr),e(Lr,gp),_(o,Bl,b),_(o,$e,b),w(Vn,$e,null),e($e,_p),e($e,Kn),e(Kn,Tp),e(Kn,Or),e(Or,bp),e(Kn,vp),e($e,yp),e($e,Nr),e(Nr,kp),e($e,wp),w(ko,$e,null),e($e,$p),e($e,Jn),e(Jn,Pp),e(Jn,Hr),e(Hr,Mp),e(Jn,Gp),e($e,xp),w(wo,$e,null),e($e,Fp),e($e,Xn),e(Xn,jp),e(Xn,Ha),e(Ha,zp),e(Xn,Ep),_(o,Vl,b),_(o,St,b),e(St,$o),e($o,Ir),w(Yn,Ir,null),e(St,qp),e(St,Sr),e(Sr,Cp),_(o,Kl,b),_(o,At,b),w(Qn,At,null),e(At,Dp),e(At,Ar),e(Ar,Lp),_(o,Jl,b),_(o,Wt,b),w(Zn,Wt,null),e(Wt,Op),e(Wt,Wr),e(Wr,Np),_(o,Xl,b),_(o,Ut,b),e(Ut,Po),e(Po,Ur),w(es,Ur,null),e(Ut,Hp),e(Ut,Rr),e(Rr,Ip),_(o,Yl,b),_(o,Pe,b),w(ts,Pe,null),e(Pe,Sp),e(Pe,Br),e(Br,Ap),e(Pe,Wp),e(Pe,os),e(os,Up),e(os,Ia),e(Ia,Rp),e(os,Bp),e(Pe,Vp),e(Pe,ns),e(ns,Kp),e(ns,ss),e(ss,Jp),e(ns,Xp),e(Pe,Yp),e(Pe,lt),w(as,lt,null),e(lt,Qp),e(lt,Rt),e(Rt,Zp),e(Rt,Sa),e(Sa,eh),e(Rt,th),e(Rt,Vr),e(Vr,oh),e(Rt,nh),e(lt,sh),w(Mo,lt,null),e(lt,ah),w(Go,lt,null),e(Pe,rh),e(Pe,dt),w(rs,dt,null),e(dt,ih),e(dt,Kr),e(Kr,lh),e(dt,dh),e(dt,Jr),e(Jr,ch),e(dt,ph),w(xo,dt,null),e(Pe,hh),e(Pe,xt),w(is,xt,null),e(xt,mh),e(xt,Xr),e(Xr,uh),e(xt,fh),w(Fo,xt,null),_(o,Ql,b),_(o,Bt,b),e(Bt,jo),e(jo,Yr),w(ls,Yr,null),e(Bt,gh),e(Bt,Qr),e(Qr,_h),_(o,Zl,b),_(o,Me,b),w(ds,Me,null),e(Me,Th),e(Me,Zr),e(Zr,bh),e(Me,vh),e(Me,cs),e(cs,yh),e(cs,Aa),e(Aa,kh),e(cs,wh),e(Me,$h),e(Me,ps),e(ps,Ph),e(ps,hs),e(hs,Mh),e(ps,Gh),e(Me,xh),e(Me,ct),w(ms,ct,null),e(ct,Fh),e(ct,Vt),e(Vt,jh),e(Vt,Wa),e(Wa,zh),e(Vt,Eh),e(Vt,ei),e(ei,qh),e(Vt,Ch),e(ct,Dh),w(zo,ct,null),e(ct,Lh),w(Eo,ct,null),e(Me,Oh),e(Me,pt),w(us,pt,null),e(pt,Nh),e(pt,ti),e(ti,Hh),e(pt,Ih),e(pt,oi),e(oi,Sh),e(pt,Ah),w(qo,pt,null),e(Me,Wh),e(Me,Ft),w(fs,Ft,null),e(Ft,Uh),e(Ft,ni),e(ni,Rh),e(Ft,Bh),w(Co,Ft,null),_(o,ed,b),_(o,Kt,b),e(Kt,Do),e(Do,si),w(gs,si,null),e(Kt,Vh),e(Kt,ai),e(ai,Kh),_(o,td,b),_(o,Ke,b),w(_s,Ke,null),e(Ke,Jh),e(Ke,ri),e(ri,Xh),e(Ke,Yh),e(Ke,Ts),e(Ts,Qh),e(Ts,Ua),e(Ua,Zh),e(Ts,em),e(Ke,tm),e(Ke,bs),e(bs,om),e(bs,vs),e(vs,nm),e(bs,sm),e(Ke,am),e(Ke,ht),w(ys,ht,null),e(ht,rm),e(ht,Jt),e(Jt,im),e(Jt,Ra),e(Ra,lm),e(Jt,dm),e(Jt,ii),e(ii,cm),e(Jt,pm),e(ht,hm),w(Lo,ht,null),e(ht,mm),w(Oo,ht,null),_(o,od,b),_(o,Xt,b),e(Xt,No),e(No,li),w(ks,li,null),e(Xt,um),e(Xt,di),e(di,fm),_(o,nd,b),_(o,Ge,b),w(ws,Ge,null),e(Ge,gm),e(Ge,ci),e(ci,_m),e(Ge,Tm),e(Ge,Ba),e(Ba,Va),e(Va,bm),e(Ba,vm),e(Ge,ym),e(Ge,rt),e(rt,km),e(rt,pi),e(pi,wm),e(rt,$m),e(rt,hi),e(hi,Pm),e(rt,Mm),e(rt,mi),e(mi,Gm),e(rt,xm),e(rt,ui),e(ui,Fm),e(rt,jm),e(Ge,zm),e(Ge,$s),e($s,Em),e($s,Ka),e(Ka,qm),e($s,Cm),e(Ge,Dm),e(Ge,Ps),e(Ps,Lm),e(Ps,Ms),e(Ms,Om),e(Ps,Nm),e(Ge,Hm),e(Ge,je),w(Gs,je,null),e(je,Im),e(je,Yt),e(Yt,Sm),e(Yt,Ja),e(Ja,Am),e(Yt,Wm),e(Yt,fi),e(fi,Um),e(Yt,Rm),e(je,Bm),w(Ho,je,null),e(je,Vm),w(Io,je,null),e(je,Km),w(So,je,null),e(je,Jm),w(Ao,je,null),e(je,Xm),w(Wo,je,null),_(o,sd,b),_(o,Qt,b),e(Qt,Uo),e(Uo,gi),w(xs,gi,null),e(Qt,Ym),e(Qt,_i),e(_i,Qm),_(o,ad,b),_(o,Je,b),w(Fs,Je,null),e(Je,Zm),e(Je,Ti),e(Ti,eu),e(Je,tu),e(Je,js),e(js,ou),e(js,Xa),e(Xa,nu),e(js,su),e(Je,au),e(Je,zs),e(zs,ru),e(zs,Es),e(Es,iu),e(zs,lu),e(Je,du),e(Je,Xe),w(qs,Xe,null),e(Xe,cu),e(Xe,Zt),e(Zt,pu),e(Zt,Ya),e(Ya,hu),e(Zt,mu),e(Zt,bi),e(bi,uu),e(Zt,fu),e(Xe,gu),w(Ro,Xe,null),e(Xe,_u),w(Bo,Xe,null),e(Xe,Tu),w(Vo,Xe,null),_(o,rd,b),_(o,eo,b),e(eo,Ko),e(Ko,vi),w(Cs,vi,null),e(eo,bu),e(eo,yi),e(yi,vu),_(o,id,b),_(o,Le,b),w(Ds,Le,null),e(Le,yu),e(Le,ki),e(ki,ku),e(Le,wu),e(Le,Ls),e(Ls,$u),e(Ls,Qa),e(Qa,Pu),e(Ls,Mu),e(Le,Gu),e(Le,Os),e(Os,xu),e(Os,Ns),e(Ns,Fu),e(Os,ju),e(Le,zu),w(Jo,Le,null),e(Le,Eu),e(Le,mt),w(Hs,mt,null),e(mt,qu),e(mt,to),e(to,Cu),e(to,Za),e(Za,Du),e(to,Lu),e(to,wi),e(wi,Ou),e(to,Nu),e(mt,Hu),w(Xo,mt,null),e(mt,Iu),w(Yo,mt,null),_(o,ld,b),_(o,oo,b),e(oo,Qo),e(Qo,$i),w(Is,$i,null),e(oo,Su),e(oo,Pi),e(Pi,Au),_(o,dd,b),_(o,Oe,b),w(Ss,Oe,null),e(Oe,Wu),e(Oe,Mi),e(Mi,Uu),e(Oe,Ru),e(Oe,As),e(As,Bu),e(As,er),e(er,Vu),e(As,Ku),e(Oe,Ju),e(Oe,Ws),e(Ws,Xu),e(Ws,Us),e(Us,Yu),e(Ws,Qu),e(Oe,Zu),w(Zo,Oe,null),e(Oe,ef),e(Oe,ut),w(Rs,ut,null),e(ut,tf),e(ut,no),e(no,of),e(no,tr),e(tr,nf),e(no,sf),e(no,Gi),e(Gi,af),e(no,rf),e(ut,lf),w(en,ut,null),e(ut,df),w(tn,ut,null),_(o,cd,b),_(o,so,b),e(so,on),e(on,xi),w(Bs,xi,null),e(so,cf),e(so,Fi),e(Fi,pf),_(o,pd,b),_(o,Ne,b),w(Vs,Ne,null),e(Ne,hf),e(Ne,ji),e(ji,mf),e(Ne,uf),e(Ne,Ks),e(Ks,ff),e(Ks,or),e(or,gf),e(Ks,_f),e(Ne,Tf),e(Ne,Js),e(Js,bf),e(Js,Xs),e(Xs,vf),e(Js,yf),e(Ne,kf),w(nn,Ne,null),e(Ne,wf),e(Ne,ft),w(Ys,ft,null),e(ft,$f),e(ft,ao),e(ao,Pf),e(ao,nr),e(nr,Mf),e(ao,Gf),e(ao,zi),e(zi,xf),e(ao,Ff),e(ft,jf),w(sn,ft,null),e(ft,zf),w(an,ft,null),_(o,hd,b),_(o,ro,b),e(ro,rn),e(rn,Ei),w(Qs,Ei,null),e(ro,Ef),e(ro,qi),e(qi,qf),_(o,md,b),_(o,he,b),w(Zs,he,null),e(he,Cf),e(he,Ci),e(Ci,Df),e(he,Lf),e(he,sr),e(sr,ar),e(ar,Of),e(sr,Nf),e(he,Hf),e(he,it),e(it,If),e(it,Di),e(Di,Sf),e(it,Af),e(it,Li),e(Li,Wf),e(it,Uf),e(it,Oi),e(Oi,Rf),e(it,Bf),e(it,Ni),e(Ni,Vf),e(it,Kf),e(he,Jf),e(he,ea),e(ea,Xf),e(ea,rr),e(rr,Yf),e(ea,Qf),e(he,Zf),e(he,ta),e(ta,eg),e(ta,oa),e(oa,tg),e(ta,og),e(he,ng),w(ln,he,null),e(he,sg),e(he,Ye),w(na,Ye,null),e(Ye,ag),e(Ye,io),e(io,rg),e(io,ir),e(ir,ig),e(io,lg),e(io,Hi),e(Hi,dg),e(io,cg),e(Ye,pg),w(dn,Ye,null),e(Ye,hg),w(cn,Ye,null),e(Ye,mg),w(pn,Ye,null),_(o,ud,b),_(o,lo,b),e(lo,hn),e(hn,Ii),w(sa,Ii,null),e(lo,ug),e(lo,Si),e(Si,fg),_(o,fd,b),_(o,co,b),w(aa,co,null),e(co,gg),e(co,Ai),e(Ai,_g),_(o,gd,b),_(o,po,b),e(po,mn),e(mn,Wi),w(ra,Wi,null),e(po,Tg),e(po,Ui),e(Ui,bg),_(o,_d,b),_(o,xe,b),w(ia,xe,null),e(xe,vg),e(xe,Ri),e(Ri,yg),e(xe,kg),e(xe,la),e(la,wg),e(la,lr),e(lr,$g),e(la,Pg),e(xe,Mg),e(xe,da),e(da,Gg),e(da,ca),e(ca,xg),e(da,Fg),e(xe,jg),e(xe,Bi),e(Bi,zg),e(xe,Eg),e(xe,wt),e(wt,Vi),e(Vi,pa),e(pa,qg),e(wt,Cg),e(wt,Ki),e(Ki,ha),e(ha,Dg),e(wt,Lg),e(wt,Ji),e(Ji,ma),e(ma,Og),e(wt,Ng),e(wt,Xi),e(Xi,ua),e(ua,Hg),e(xe,Ig),e(xe,gt),w(fa,gt,null),e(gt,Sg),e(gt,ho),e(ho,Ag),e(ho,Yi),e(Yi,Wg),e(ho,Ug),e(ho,Qi),e(Qi,Rg),e(ho,Bg),e(gt,Vg),w(un,gt,null),e(gt,Kg),w(fn,gt,null),_(o,Td,b),_(o,mo,b),e(mo,gn),e(gn,Zi),w(ga,Zi,null),e(mo,Jg),e(mo,el),e(el,Xg),_(o,bd,b),_(o,Fe,b),w(_a,Fe,null),e(Fe,Yg),e(Fe,tl),e(tl,Qg),e(Fe,Zg),e(Fe,Ta),e(Ta,e_),e(Ta,dr),e(dr,t_),e(Ta,o_),e(Fe,n_),e(Fe,ba),e(ba,s_),e(ba,va),e(va,a_),e(ba,r_),e(Fe,i_),e(Fe,ol),e(ol,l_),e(Fe,d_),e(Fe,$t),e($t,nl),e(nl,ya),e(ya,c_),e($t,p_),e($t,sl),e(sl,ka),e(ka,h_),e($t,m_),e($t,al),e(al,wa),e(wa,u_),e($t,f_),e($t,rl),e(rl,$a),e($a,g_),e(Fe,__),e(Fe,_t),w(Pa,_t,null),e(_t,T_),e(_t,uo),e(uo,b_),e(uo,il),e(il,v_),e(uo,y_),e(uo,ll),e(ll,k_),e(uo,w_),e(_t,$_),w(_n,_t,null),e(_t,P_),w(Tn,_t,null),vd=!0},p(o,[b]){const Ma={};b&2&&(Ma.$$scope={dirty:b,ctx:o}),_o.$set(Ma);const dl={};b&2&&(dl.$$scope={dirty:b,ctx:o}),bo.$set(dl);const cl={};b&2&&(cl.$$scope={dirty:b,ctx:o}),vo.$set(cl);const pl={};b&2&&(pl.$$scope={dirty:b,ctx:o}),ko.$set(pl);const Ga={};b&2&&(Ga.$$scope={dirty:b,ctx:o}),wo.$set(Ga);const hl={};b&2&&(hl.$$scope={dirty:b,ctx:o}),Mo.$set(hl);const ml={};b&2&&(ml.$$scope={dirty:b,ctx:o}),Go.$set(ml);const ul={};b&2&&(ul.$$scope={dirty:b,ctx:o}),xo.$set(ul);const xa={};b&2&&(xa.$$scope={dirty:b,ctx:o}),Fo.$set(xa);const fl={};b&2&&(fl.$$scope={dirty:b,ctx:o}),zo.$set(fl);const gl={};b&2&&(gl.$$scope={dirty:b,ctx:o}),Eo.$set(gl);const _l={};b&2&&(_l.$$scope={dirty:b,ctx:o}),qo.$set(_l);const Tl={};b&2&&(Tl.$$scope={dirty:b,ctx:o}),Co.$set(Tl);const bl={};b&2&&(bl.$$scope={dirty:b,ctx:o}),Lo.$set(bl);const Pt={};b&2&&(Pt.$$scope={dirty:b,ctx:o}),Oo.$set(Pt);const vl={};b&2&&(vl.$$scope={dirty:b,ctx:o}),Ho.$set(vl);const Fa={};b&2&&(Fa.$$scope={dirty:b,ctx:o}),Io.$set(Fa);const yl={};b&2&&(yl.$$scope={dirty:b,ctx:o}),So.$set(yl);const me={};b&2&&(me.$$scope={dirty:b,ctx:o}),Ao.$set(me);const kl={};b&2&&(kl.$$scope={dirty:b,ctx:o}),Wo.$set(kl);const wl={};b&2&&(wl.$$scope={dirty:b,ctx:o}),Ro.$set(wl);const $l={};b&2&&($l.$$scope={dirty:b,ctx:o}),Bo.$set($l);const Pl={};b&2&&(Pl.$$scope={dirty:b,ctx:o}),Vo.$set(Pl);const Ml={};b&2&&(Ml.$$scope={dirty:b,ctx:o}),Jo.$set(Ml);const Gl={};b&2&&(Gl.$$scope={dirty:b,ctx:o}),Xo.$set(Gl);const xl={};b&2&&(xl.$$scope={dirty:b,ctx:o}),Yo.$set(xl);const Fl={};b&2&&(Fl.$$scope={dirty:b,ctx:o}),Zo.$set(Fl);const Mt={};b&2&&(Mt.$$scope={dirty:b,ctx:o}),en.$set(Mt);const jl={};b&2&&(jl.$$scope={dirty:b,ctx:o}),tn.$set(jl);const zl={};b&2&&(zl.$$scope={dirty:b,ctx:o}),nn.$set(zl);const El={};b&2&&(El.$$scope={dirty:b,ctx:o}),sn.$set(El);const bn={};b&2&&(bn.$$scope={dirty:b,ctx:o}),an.$set(bn);const ql={};b&2&&(ql.$$scope={dirty:b,ctx:o}),ln.$set(ql);const Cl={};b&2&&(Cl.$$scope={dirty:b,ctx:o}),dn.$set(Cl);const fo={};b&2&&(fo.$$scope={dirty:b,ctx:o}),cn.$set(fo);const Dl={};b&2&&(Dl.$$scope={dirty:b,ctx:o}),pn.$set(Dl);const Ll={};b&2&&(Ll.$$scope={dirty:b,ctx:o}),un.$set(Ll);const ja={};b&2&&(ja.$$scope={dirty:b,ctx:o}),fn.$set(ja);const Ol={};b&2&&(Ol.$$scope={dirty:b,ctx:o}),_n.$set(Ol);const Nl={};b&2&&(Nl.$$scope={dirty:b,ctx:o}),Tn.$set(Nl)},i(o){vd||($(n.$$.fragment,o),$(Z.$$.fragment,o),$(Nn.$$.fragment,o),$(Hn.$$.fragment,o),$(_o.$$.fragment,o),$(Sn.$$.fragment,o),$(An.$$.fragment,o),$(bo.$$.fragment,o),$(vo.$$.fragment,o),$(Rn.$$.fragment,o),$(Bn.$$.fragment,o),$(Vn.$$.fragment,o),$(ko.$$.fragment,o),$(wo.$$.fragment,o),$(Yn.$$.fragment,o),$(Qn.$$.fragment,o),$(Zn.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(as.$$.fragment,o),$(Mo.$$.fragment,o),$(Go.$$.fragment,o),$(rs.$$.fragment,o),$(xo.$$.fragment,o),$(is.$$.fragment,o),$(Fo.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(ms.$$.fragment,o),$(zo.$$.fragment,o),$(Eo.$$.fragment,o),$(us.$$.fragment,o),$(qo.$$.fragment,o),$(fs.$$.fragment,o),$(Co.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(ys.$$.fragment,o),$(Lo.$$.fragment,o),$(Oo.$$.fragment,o),$(ks.$$.fragment,o),$(ws.$$.fragment,o),$(Gs.$$.fragment,o),$(Ho.$$.fragment,o),$(Io.$$.fragment,o),$(So.$$.fragment,o),$(Ao.$$.fragment,o),$(Wo.$$.fragment,o),$(xs.$$.fragment,o),$(Fs.$$.fragment,o),$(qs.$$.fragment,o),$(Ro.$$.fragment,o),$(Bo.$$.fragment,o),$(Vo.$$.fragment,o),$(Cs.$$.fragment,o),$(Ds.$$.fragment,o),$(Jo.$$.fragment,o),$(Hs.$$.fragment,o),$(Xo.$$.fragment,o),$(Yo.$$.fragment,o),$(Is.$$.fragment,o),$(Ss.$$.fragment,o),$(Zo.$$.fragment,o),$(Rs.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(Bs.$$.fragment,o),$(Vs.$$.fragment,o),$(nn.$$.fragment,o),$(Ys.$$.fragment,o),$(sn.$$.fragment,o),$(an.$$.fragment,o),$(Qs.$$.fragment,o),$(Zs.$$.fragment,o),$(ln.$$.fragment,o),$(na.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(sa.$$.fragment,o),$(aa.$$.fragment,o),$(ra.$$.fragment,o),$(ia.$$.fragment,o),$(fa.$$.fragment,o),$(un.$$.fragment,o),$(fn.$$.fragment,o),$(ga.$$.fragment,o),$(_a.$$.fragment,o),$(Pa.$$.fragment,o),$(_n.$$.fragment,o),$(Tn.$$.fragment,o),vd=!0)},o(o){P(n.$$.fragment,o),P(Z.$$.fragment,o),P(Nn.$$.fragment,o),P(Hn.$$.fragment,o),P(_o.$$.fragment,o),P(Sn.$$.fragment,o),P(An.$$.fragment,o),P(bo.$$.fragment,o),P(vo.$$.fragment,o),P(Rn.$$.fragment,o),P(Bn.$$.fragment,o),P(Vn.$$.fragment,o),P(ko.$$.fragment,o),P(wo.$$.fragment,o),P(Yn.$$.fragment,o),P(Qn.$$.fragment,o),P(Zn.$$.fragment,o),P(es.$$.fragment,o),P(ts.$$.fragment,o),P(as.$$.fragment,o),P(Mo.$$.fragment,o),P(Go.$$.fragment,o),P(rs.$$.fragment,o),P(xo.$$.fragment,o),P(is.$$.fragment,o),P(Fo.$$.fragment,o),P(ls.$$.fragment,o),P(ds.$$.fragment,o),P(ms.$$.fragment,o),P(zo.$$.fragment,o),P(Eo.$$.fragment,o),P(us.$$.fragment,o),P(qo.$$.fragment,o),P(fs.$$.fragment,o),P(Co.$$.fragment,o),P(gs.$$.fragment,o),P(_s.$$.fragment,o),P(ys.$$.fragment,o),P(Lo.$$.fragment,o),P(Oo.$$.fragment,o),P(ks.$$.fragment,o),P(ws.$$.fragment,o),P(Gs.$$.fragment,o),P(Ho.$$.fragment,o),P(Io.$$.fragment,o),P(So.$$.fragment,o),P(Ao.$$.fragment,o),P(Wo.$$.fragment,o),P(xs.$$.fragment,o),P(Fs.$$.fragment,o),P(qs.$$.fragment,o),P(Ro.$$.fragment,o),P(Bo.$$.fragment,o),P(Vo.$$.fragment,o),P(Cs.$$.fragment,o),P(Ds.$$.fragment,o),P(Jo.$$.fragment,o),P(Hs.$$.fragment,o),P(Xo.$$.fragment,o),P(Yo.$$.fragment,o),P(Is.$$.fragment,o),P(Ss.$$.fragment,o),P(Zo.$$.fragment,o),P(Rs.$$.fragment,o),P(en.$$.fragment,o),P(tn.$$.fragment,o),P(Bs.$$.fragment,o),P(Vs.$$.fragment,o),P(nn.$$.fragment,o),P(Ys.$$.fragment,o),P(sn.$$.fragment,o),P(an.$$.fragment,o),P(Qs.$$.fragment,o),P(Zs.$$.fragment,o),P(ln.$$.fragment,o),P(na.$$.fragment,o),P(dn.$$.fragment,o),P(cn.$$.fragment,o),P(pn.$$.fragment,o),P(sa.$$.fragment,o),P(aa.$$.fragment,o),P(ra.$$.fragment,o),P(ia.$$.fragment,o),P(fa.$$.fragment,o),P(un.$$.fragment,o),P(fn.$$.fragment,o),P(ga.$$.fragment,o),P(_a.$$.fragment,o),P(Pa.$$.fragment,o),P(_n.$$.fragment,o),P(Tn.$$.fragment,o),vd=!1},d(o){t(d),o&&t(T),o&&t(m),M(n),o&&t(C),o&&t(j),M(Z),o&&t(ue),o&&t(W),o&&t(q),o&&t(ie),o&&t(fe),o&&t(le),o&&t(ge),o&&t(E),o&&t(U),o&&t(R),o&&t(Hl),o&&t(Lt),o&&t(Il),o&&t(Gt),o&&t(Sl),o&&t(Ot),M(Nn),o&&t(Al),o&&t(at),M(Hn),M(_o),o&&t(Wl),o&&t(Ht),M(Sn),o&&t(Ul),o&&t(pe),M(An),M(bo),M(vo),M(Rn),o&&t(Rl),o&&t(It),M(Bn),o&&t(Bl),o&&t($e),M(Vn),M(ko),M(wo),o&&t(Vl),o&&t(St),M(Yn),o&&t(Kl),o&&t(At),M(Qn),o&&t(Jl),o&&t(Wt),M(Zn),o&&t(Xl),o&&t(Ut),M(es),o&&t(Yl),o&&t(Pe),M(ts),M(as),M(Mo),M(Go),M(rs),M(xo),M(is),M(Fo),o&&t(Ql),o&&t(Bt),M(ls),o&&t(Zl),o&&t(Me),M(ds),M(ms),M(zo),M(Eo),M(us),M(qo),M(fs),M(Co),o&&t(ed),o&&t(Kt),M(gs),o&&t(td),o&&t(Ke),M(_s),M(ys),M(Lo),M(Oo),o&&t(od),o&&t(Xt),M(ks),o&&t(nd),o&&t(Ge),M(ws),M(Gs),M(Ho),M(Io),M(So),M(Ao),M(Wo),o&&t(sd),o&&t(Qt),M(xs),o&&t(ad),o&&t(Je),M(Fs),M(qs),M(Ro),M(Bo),M(Vo),o&&t(rd),o&&t(eo),M(Cs),o&&t(id),o&&t(Le),M(Ds),M(Jo),M(Hs),M(Xo),M(Yo),o&&t(ld),o&&t(oo),M(Is),o&&t(dd),o&&t(Oe),M(Ss),M(Zo),M(Rs),M(en),M(tn),o&&t(cd),o&&t(so),M(Bs),o&&t(pd),o&&t(Ne),M(Vs),M(nn),M(Ys),M(sn),M(an),o&&t(hd),o&&t(ro),M(Qs),o&&t(md),o&&t(he),M(Zs),M(ln),M(na),M(dn),M(cn),M(pn),o&&t(ud),o&&t(lo),M(sa),o&&t(fd),o&&t(co),M(aa),o&&t(gd),o&&t(po),M(ra),o&&t(_d),o&&t(xe),M(ia),M(fa),M(un),M(fn),o&&t(Td),o&&t(mo),M(ga),o&&t(bd),o&&t(Fe),M(_a),M(Pa),M(_n),M(Tn)}}}const cv={local:"openai-gpt2",sections:[{local:"overview",title:"Overview"},{local:"transformers.GPT2Config",title:"GPT2Config"},{local:"transformers.GPT2Tokenizer",title:"GPT2Tokenizer"},{local:"transformers.GPT2TokenizerFast",title:"GPT2TokenizerFast"},{local:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",title:"GPT2 specific outputs"},{local:"transformers.GPT2Model",title:"GPT2Model"},{local:"transformers.GPT2LMHeadModel",title:"GPT2LMHeadModel"},{local:"transformers.GPT2DoubleHeadsModel",title:"GPT2DoubleHeadsModel"},{local:"transformers.GPT2ForSequenceClassification",title:"GPT2ForSequenceClassification"},{local:"transformers.GPT2ForTokenClassification",title:"GPT2ForTokenClassification"},{local:"transformers.TFGPT2Model",title:"TFGPT2Model"},{local:"transformers.TFGPT2LMHeadModel",title:"TFGPT2LMHeadModel"},{local:"transformers.TFGPT2DoubleHeadsModel",title:"TFGPT2DoubleHeadsModel"},{local:"transformers.TFGPT2ForSequenceClassification",title:"TFGPT2ForSequenceClassification"},{local:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",title:"TFSequenceClassifierOutputWithPast"},{local:"transformers.FlaxGPT2Model",title:"FlaxGPT2Model"},{local:"transformers.FlaxGPT2LMHeadModel",title:"FlaxGPT2LMHeadModel"}],title:"OpenAI GPT2"};function pv(G){return kb(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Tv extends Tb{constructor(d){super();bb(this,d,pv,dv,vb,{})}}export{Tv as default,cv as metadata};
