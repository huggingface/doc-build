import{S as $t,i as yt,s as wt,e as o,k as d,w as T,t as r,M as vt,c,d as a,m as g,a as p,x as B,h as l,b as k,G as s,g as b,y as P,q as A,o as C,B as M,v as Et,L as Ps}from"../chunks/vendor-hf-doc-builder.js";import{T as kt}from"../chunks/Tip-hf-doc-builder.js";import{I as da}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as hs}from"../chunks/CodeBlock-hf-doc-builder.js";import{D as Tt}from"../chunks/DocNotebookDropdown-hf-doc-builder.js";import{F as al,M as As}from"../chunks/Markdown-hf-doc-builder.js";function Bt(v){let t,m;return{c(){t=o("p"),m=r(`Hugging Face\u2019s Benchmarking tools are deprecated and it is advised to use external Benchmarking libraries to measure the speed
and memory complexity of Transformer models.`)},l(n){t=c(n,"P",{});var h=p(t);m=l(h,`Hugging Face\u2019s Benchmarking tools are deprecated and it is advised to use external Benchmarking libraries to measure the speed
and memory complexity of Transformer models.`),h.forEach(a)},m(n,h){b(n,t,h),s(t,m)},d(n){n&&a(t)}}}function Pt(v){let t,m,n,h,f,N,D,O;return{c(){t=o("p"),m=r("Hereby, "),n=o("em"),h=r("inference"),f=r(" is defined by a single forward pass, and "),N=o("em"),D=r("training"),O=r(` is defined by a single forward pass and
backward pass.`)},l(E){t=c(E,"P",{});var F=p(t);m=l(F,"Hereby, "),n=c(F,"EM",{});var u=p(n);h=l(u,"inference"),u.forEach(a),f=l(F," is defined by a single forward pass, and "),N=c(F,"EM",{});var $=p(N);D=l($,"training"),$.forEach(a),O=l(F,` is defined by a single forward pass and
backward pass.`),F.forEach(a)},m(E,F){b(E,t,F),s(t,m),s(t,n),s(n,h),s(t,f),s(t,N),s(N,D),s(t,O)},d(E){E&&a(t)}}}function At(v){let t,m;return t=new hs({props:{code:`from transformers import PyTorchBenchmark, PyTorchBenchmarkArguments

args = PyTorchBenchmarkArguments(models=["bert-base-uncased"], batch_sizes=[8], sequence_lengths=[8, 32, 128, 512])
benchmark = PyTorchBenchmark(args)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PyTorchBenchmark, PyTorchBenchmarkArguments

<span class="hljs-meta">&gt;&gt;&gt; </span>args = PyTorchBenchmarkArguments(models=[<span class="hljs-string">&quot;bert-base-uncased&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark = PyTorchBenchmark(args)`}}),{c(){T(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,h){P(t,n,h),m=!0},p:Ps,i(n){m||(A(t.$$.fragment,n),m=!0)},o(n){C(t.$$.fragment,n),m=!1},d(n){M(t,n)}}}function Ct(v){let t,m;return t=new As({props:{$$slots:{default:[At]},$$scope:{ctx:v}}}),{c(){T(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,h){P(t,n,h),m=!0},p(n,h){const f={};h&2&&(f.$$scope={dirty:h,ctx:n}),t.$set(f)},i(n){m||(A(t.$$.fragment,n),m=!0)},o(n){C(t.$$.fragment,n),m=!1},d(n){M(t,n)}}}function Mt(v){let t,m;return t=new hs({props:{code:`from transformers import TensorFlowBenchmark, TensorFlowBenchmarkArguments

args = TensorFlowBenchmarkArguments(
    models=["bert-base-uncased"], batch_sizes=[8], sequence_lengths=[8, 32, 128, 512]
)
benchmark = TensorFlowBenchmark(args)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TensorFlowBenchmark, TensorFlowBenchmarkArguments

<span class="hljs-meta">&gt;&gt;&gt; </span>args = TensorFlowBenchmarkArguments(
<span class="hljs-meta">... </span>    models=[<span class="hljs-string">&quot;bert-base-uncased&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark = TensorFlowBenchmark(args)`}}),{c(){T(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,h){P(t,n,h),m=!0},p:Ps,i(n){m||(A(t.$$.fragment,n),m=!0)},o(n){C(t.$$.fragment,n),m=!1},d(n){M(t,n)}}}function Ft(v){let t,m;return t=new As({props:{$$slots:{default:[Mt]},$$scope:{ctx:v}}}),{c(){T(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,h){P(t,n,h),m=!0},p(n,h){const f={};h&2&&(f.$$scope={dirty:h,ctx:n}),t.$set(f)},i(n){m||(A(t.$$.fragment,n),m=!0)},o(n){C(t.$$.fragment,n),m=!1},d(n){M(t,n)}}}function Nt(v){let t,m,n,h,f,N,D,O,E,F;return t=new hs({props:{code:"python examples/pytorch/benchmarking/run_benchmark.py --help",highlighted:'python examples/pytorch/benchmarking/run_benchmark.py --<span class="hljs-built_in">help</span>'}}),E=new hs({props:{code:`results = benchmark.run()
print(results)


`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>results = benchmark.run()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(results)
====================       INFERENCE - SPEED - RESULT       ====================
--------------------------------------------------------------------------------
Model Name             Batch Size     Seq Length     Time <span class="hljs-keyword">in</span> s                  
--------------------------------------------------------------------------------
bert-base-uncased          <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">0.006</span>     
bert-base-uncased          <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">0.006</span>     
bert-base-uncased          <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.018</span>     
bert-base-uncased          <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.088</span>     
--------------------------------------------------------------------------------

====================      INFERENCE - MEMORY - RESULT       ====================
--------------------------------------------------------------------------------
Model Name             Batch Size     Seq Length    Memory <span class="hljs-keyword">in</span> MB 
--------------------------------------------------------------------------------
bert-base-uncased          <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">1227</span>
bert-base-uncased          <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">1281</span>
bert-base-uncased          <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">1307</span>
bert-base-uncased          <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">1539</span>
--------------------------------------------------------------------------------

====================        ENVIRONMENT INFORMATION         ====================

- transformers_version: <span class="hljs-number">2.11</span><span class="hljs-number">.0</span>
- framework: PyTorch
- use_torchscript: <span class="hljs-literal">False</span>
- framework_version: <span class="hljs-number">1.4</span><span class="hljs-number">.0</span>
- python_version: <span class="hljs-number">3.6</span><span class="hljs-number">.10</span>
- system: Linux
- cpu: x86_64
- architecture: 64bit
- date: <span class="hljs-number">2020</span>-06-<span class="hljs-number">29</span>
- time: 08:<span class="hljs-number">58</span>:<span class="hljs-number">43.371351</span>
- fp16: <span class="hljs-literal">False</span>
- use_multiprocessing: <span class="hljs-literal">True</span>
- only_pretrain_model: <span class="hljs-literal">False</span>
- cpu_ram_mb: <span class="hljs-number">32088</span>
- use_gpu: <span class="hljs-literal">True</span>
- num_gpus: <span class="hljs-number">1</span>
- gpu: TITAN RTX
- gpu_ram_mb: <span class="hljs-number">24217</span>
- gpu_power_watts: <span class="hljs-number">280.0</span>
- gpu_performance_state: <span class="hljs-number">2</span>
- use_tpu: <span class="hljs-literal">False</span>`}}),{c(){T(t.$$.fragment),m=d(),n=o("p"),h=r("An instantiated benchmark object can then simply be run by calling "),f=o("code"),N=r("benchmark.run()"),D=r("."),O=d(),T(E.$$.fragment)},l(u){B(t.$$.fragment,u),m=g(u),n=c(u,"P",{});var $=p(n);h=l($,"An instantiated benchmark object can then simply be run by calling "),f=c($,"CODE",{});var L=p(f);N=l(L,"benchmark.run()"),L.forEach(a),D=l($,"."),$.forEach(a),O=g(u),B(E.$$.fragment,u)},m(u,$){P(t,u,$),b(u,m,$),b(u,n,$),s(n,h),s(n,f),s(f,N),s(n,D),b(u,O,$),P(E,u,$),F=!0},p:Ps,i(u){F||(A(t.$$.fragment,u),A(E.$$.fragment,u),F=!0)},o(u){C(t.$$.fragment,u),C(E.$$.fragment,u),F=!1},d(u){M(t,u),u&&a(m),u&&a(n),u&&a(O),M(E,u)}}}function It(v){let t,m;return t=new As({props:{$$slots:{default:[Nt]},$$scope:{ctx:v}}}),{c(){T(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,h){P(t,n,h),m=!0},p(n,h){const f={};h&2&&(f.$$scope={dirty:h,ctx:n}),t.$set(f)},i(n){m||(A(t.$$.fragment,n),m=!0)},o(n){C(t.$$.fragment,n),m=!1},d(n){M(t,n)}}}function Ot(v){let t,m,n,h,f,N,D,O,E,F;return t=new hs({props:{code:"python examples/tensorflow/benchmarking/run_benchmark_tf.py --help",highlighted:'python examples/tensorflow/benchmarking/run_benchmark_tf.py --<span class="hljs-built_in">help</span>'}}),E=new hs({props:{code:`results = benchmark.run()
print(results)
results = benchmark.run()
print(results)


`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>results = benchmark.run()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(results)
<span class="hljs-meta">&gt;&gt;&gt; </span>results = benchmark.run()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(results)
====================       INFERENCE - SPEED - RESULT       ====================
--------------------------------------------------------------------------------
Model Name             Batch Size     Seq Length     Time <span class="hljs-keyword">in</span> s                  
--------------------------------------------------------------------------------
bert-base-uncased          <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">0.005</span>
bert-base-uncased          <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">0.008</span>
bert-base-uncased          <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.022</span>
bert-base-uncased          <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.105</span>
--------------------------------------------------------------------------------

====================      INFERENCE - MEMORY - RESULT       ====================
--------------------------------------------------------------------------------
Model Name             Batch Size     Seq Length    Memory <span class="hljs-keyword">in</span> MB 
--------------------------------------------------------------------------------
bert-base-uncased          <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">1330</span>
bert-base-uncased          <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">1330</span>
bert-base-uncased          <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">1330</span>
bert-base-uncased          <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">1770</span>
--------------------------------------------------------------------------------

====================        ENVIRONMENT INFORMATION         ====================

- transformers_version: <span class="hljs-number">2.11</span><span class="hljs-number">.0</span>
- framework: Tensorflow
- use_xla: <span class="hljs-literal">False</span>
- framework_version: <span class="hljs-number">2.2</span><span class="hljs-number">.0</span>
- python_version: <span class="hljs-number">3.6</span><span class="hljs-number">.10</span>
- system: Linux
- cpu: x86_64
- architecture: 64bit
- date: <span class="hljs-number">2020</span>-06-<span class="hljs-number">29</span>
- time: 09:<span class="hljs-number">26</span>:<span class="hljs-number">35.617317</span>
- fp16: <span class="hljs-literal">False</span>
- use_multiprocessing: <span class="hljs-literal">True</span>
- only_pretrain_model: <span class="hljs-literal">False</span>
- cpu_ram_mb: <span class="hljs-number">32088</span>
- use_gpu: <span class="hljs-literal">True</span>
- num_gpus: <span class="hljs-number">1</span>
- gpu: TITAN RTX
- gpu_ram_mb: <span class="hljs-number">24217</span>
- gpu_power_watts: <span class="hljs-number">280.0</span>
- gpu_performance_state: <span class="hljs-number">2</span>
- use_tpu: <span class="hljs-literal">False</span>`}}),{c(){T(t.$$.fragment),m=d(),n=o("p"),h=r("An instantiated benchmark object can then simply be run by calling "),f=o("code"),N=r("benchmark.run()"),D=r("."),O=d(),T(E.$$.fragment)},l(u){B(t.$$.fragment,u),m=g(u),n=c(u,"P",{});var $=p(n);h=l($,"An instantiated benchmark object can then simply be run by calling "),f=c($,"CODE",{});var L=p(f);N=l(L,"benchmark.run()"),L.forEach(a),D=l($,"."),$.forEach(a),O=g(u),B(E.$$.fragment,u)},m(u,$){P(t,u,$),b(u,m,$),b(u,n,$),s(n,h),s(n,f),s(f,N),s(n,D),b(u,O,$),P(E,u,$),F=!0},p:Ps,i(u){F||(A(t.$$.fragment,u),A(E.$$.fragment,u),F=!0)},o(u){C(t.$$.fragment,u),C(E.$$.fragment,u),F=!1},d(u){M(t,u),u&&a(m),u&&a(n),u&&a(O),M(E,u)}}}function St(v){let t,m;return t=new As({props:{$$slots:{default:[Ot]},$$scope:{ctx:v}}}),{c(){T(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,h){P(t,n,h),m=!0},p(n,h){const f={};h&2&&(f.$$scope={dirty:h,ctx:n}),t.$set(f)},i(n){m||(A(t.$$.fragment,n),m=!0)},o(n){C(t.$$.fragment,n),m=!1},d(n){M(t,n)}}}function xt(v){let t,m;return t=new hs({props:{code:`from transformers import PyTorchBenchmark, PyTorchBenchmarkArguments, BertConfig

args = PyTorchBenchmarkArguments(
    models=["bert-base", "bert-384-hid", "bert-6-lay"], batch_sizes=[8], sequence_lengths=[8, 32, 128, 512]
)
config_base = BertConfig()
config_384_hid = BertConfig(hidden_size=384)
config_6_lay = BertConfig(num_hidden_layers=6)

benchmark = PyTorchBenchmark(args, configs=[config_base, config_384_hid, config_6_lay])
benchmark.run()


`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PyTorchBenchmark, PyTorchBenchmarkArguments, BertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>args = PyTorchBenchmarkArguments(
<span class="hljs-meta">... </span>    models=[<span class="hljs-string">&quot;bert-base&quot;</span>, <span class="hljs-string">&quot;bert-384-hid&quot;</span>, <span class="hljs-string">&quot;bert-6-lay&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config_base = BertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_384_hid = BertConfig(hidden_size=<span class="hljs-number">384</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config_6_lay = BertConfig(num_hidden_layers=<span class="hljs-number">6</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark = PyTorchBenchmark(args, configs=[config_base, config_384_hid, config_6_lay])
<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark.run()
====================       INFERENCE - SPEED - RESULT       ====================
--------------------------------------------------------------------------------
Model Name             Batch Size     Seq Length       Time <span class="hljs-keyword">in</span> s                  
--------------------------------------------------------------------------------
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.006</span>
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.006</span>
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.018</span>     
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.088</span>     
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">0.006</span>     
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">0.006</span>     
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.011</span>     
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.054</span>     
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">0.003</span>     
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">0.004</span>     
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.009</span>     
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.044</span>
--------------------------------------------------------------------------------

====================      INFERENCE - MEMORY - RESULT       ====================
--------------------------------------------------------------------------------
Model Name             Batch Size     Seq Length      Memory <span class="hljs-keyword">in</span> MB 
--------------------------------------------------------------------------------
bert-base                  <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">1277</span>
bert-base                  <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">1281</span>
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">1307</span>     
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">1539</span>     
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">1005</span>     
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">1027</span>     
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">1035</span>     
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">1255</span>     
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">1097</span>     
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">1101</span>     
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">1127</span>     
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">1359</span>
--------------------------------------------------------------------------------

====================        ENVIRONMENT INFORMATION         ====================

- transformers_version: <span class="hljs-number">2.11</span><span class="hljs-number">.0</span>
- framework: PyTorch
- use_torchscript: <span class="hljs-literal">False</span>
- framework_version: <span class="hljs-number">1.4</span><span class="hljs-number">.0</span>
- python_version: <span class="hljs-number">3.6</span><span class="hljs-number">.10</span>
- system: Linux
- cpu: x86_64
- architecture: 64bit
- date: <span class="hljs-number">2020</span>-06-<span class="hljs-number">29</span>
- time: 09:<span class="hljs-number">35</span>:<span class="hljs-number">25.143267</span>
- fp16: <span class="hljs-literal">False</span>
- use_multiprocessing: <span class="hljs-literal">True</span>
- only_pretrain_model: <span class="hljs-literal">False</span>
- cpu_ram_mb: <span class="hljs-number">32088</span>
- use_gpu: <span class="hljs-literal">True</span>
- num_gpus: <span class="hljs-number">1</span>
- gpu: TITAN RTX
- gpu_ram_mb: <span class="hljs-number">24217</span>
- gpu_power_watts: <span class="hljs-number">280.0</span>
- gpu_performance_state: <span class="hljs-number">2</span>
- use_tpu: <span class="hljs-literal">False</span>`}}),{c(){T(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,h){P(t,n,h),m=!0},p:Ps,i(n){m||(A(t.$$.fragment,n),m=!0)},o(n){C(t.$$.fragment,n),m=!1},d(n){M(t,n)}}}function Dt(v){let t,m;return t=new As({props:{$$slots:{default:[xt]},$$scope:{ctx:v}}}),{c(){T(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,h){P(t,n,h),m=!0},p(n,h){const f={};h&2&&(f.$$scope={dirty:h,ctx:n}),t.$set(f)},i(n){m||(A(t.$$.fragment,n),m=!0)},o(n){C(t.$$.fragment,n),m=!1},d(n){M(t,n)}}}function qt(v){let t,m;return t=new hs({props:{code:`from transformers import TensorFlowBenchmark, TensorFlowBenchmarkArguments, BertConfig

args = TensorFlowBenchmarkArguments(
    models=["bert-base", "bert-384-hid", "bert-6-lay"], batch_sizes=[8], sequence_lengths=[8, 32, 128, 512]
)
config_base = BertConfig()
config_384_hid = BertConfig(hidden_size=384)
config_6_lay = BertConfig(num_hidden_layers=6)

benchmark = TensorFlowBenchmark(args, configs=[config_base, config_384_hid, config_6_lay])
benchmark.run()


`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TensorFlowBenchmark, TensorFlowBenchmarkArguments, BertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>args = TensorFlowBenchmarkArguments(
<span class="hljs-meta">... </span>    models=[<span class="hljs-string">&quot;bert-base&quot;</span>, <span class="hljs-string">&quot;bert-384-hid&quot;</span>, <span class="hljs-string">&quot;bert-6-lay&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config_base = BertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_384_hid = BertConfig(hidden_size=<span class="hljs-number">384</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config_6_lay = BertConfig(num_hidden_layers=<span class="hljs-number">6</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark = TensorFlowBenchmark(args, configs=[config_base, config_384_hid, config_6_lay])
<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark.run()
====================       INFERENCE - SPEED - RESULT       ====================
--------------------------------------------------------------------------------
Model Name             Batch Size     Seq Length       Time <span class="hljs-keyword">in</span> s                  
--------------------------------------------------------------------------------
bert-base                  <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">0.005</span>
bert-base                  <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">0.008</span>
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.022</span>
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.106</span>
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">0.005</span>
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">0.007</span>
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.018</span>
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.064</span>
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">0.002</span>
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">0.003</span>
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.0011</span>
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.074</span>
--------------------------------------------------------------------------------

====================      INFERENCE - MEMORY - RESULT       ====================
--------------------------------------------------------------------------------
Model Name             Batch Size     Seq Length      Memory <span class="hljs-keyword">in</span> MB 
--------------------------------------------------------------------------------
bert-base                  <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">1330</span>
bert-base                  <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">1330</span>
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">1330</span>
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">1770</span>
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">1330</span>
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">1330</span>
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">1330</span>
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">1540</span>
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">1330</span>
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">1330</span>
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">1330</span>
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">1540</span>
--------------------------------------------------------------------------------

====================        ENVIRONMENT INFORMATION         ====================

- transformers_version: <span class="hljs-number">2.11</span><span class="hljs-number">.0</span>
- framework: Tensorflow
- use_xla: <span class="hljs-literal">False</span>
- framework_version: <span class="hljs-number">2.2</span><span class="hljs-number">.0</span>
- python_version: <span class="hljs-number">3.6</span><span class="hljs-number">.10</span>
- system: Linux
- cpu: x86_64
- architecture: 64bit
- date: <span class="hljs-number">2020</span>-06-<span class="hljs-number">29</span>
- time: 09:<span class="hljs-number">38</span>:<span class="hljs-number">15.487125</span>
- fp16: <span class="hljs-literal">False</span>
- use_multiprocessing: <span class="hljs-literal">True</span>
- only_pretrain_model: <span class="hljs-literal">False</span>
- cpu_ram_mb: <span class="hljs-number">32088</span>
- use_gpu: <span class="hljs-literal">True</span>
- num_gpus: <span class="hljs-number">1</span>
- gpu: TITAN RTX
- gpu_ram_mb: <span class="hljs-number">24217</span>
- gpu_power_watts: <span class="hljs-number">280.0</span>
- gpu_performance_state: <span class="hljs-number">2</span>
- use_tpu: <span class="hljs-literal">False</span>`}}),{c(){T(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,h){P(t,n,h),m=!0},p:Ps,i(n){m||(A(t.$$.fragment,n),m=!0)},o(n){C(t.$$.fragment,n),m=!1},d(n){M(t,n)}}}function Rt(v){let t,m;return t=new As({props:{$$slots:{default:[qt]},$$scope:{ctx:v}}}),{c(){T(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,h){P(t,n,h),m=!0},p(n,h){const f={};h&2&&(f.$$scope={dirty:h,ctx:n}),t.$set(f)},i(n){m||(A(t.$$.fragment,n),m=!0)},o(n){C(t.$$.fragment,n),m=!1},d(n){M(t,n)}}}function Lt(v){let t,m,n,h,f,N,D,O,E,F,u,$,L,Le,ys,ga,ze,K,ja,is,_a,ka,Ue,Y,Z,Cs,us,$a,Ms,ya,He,S,wa,Fs,va,Ea,Ns,Ta,Ba,Is,Pa,Aa,Os,Ca,Ma,Ss,Fa,Na,xs,Ia,Oa,Ve,ss,Ge,I,Sa,Ds,xa,Da,qs,qa,Ra,Rs,La,za,Ls,Ua,Ha,zs,Va,Ga,Us,Xa,Wa,Hs,Ya,Ja,Xe,es,We,j,Qa,Vs,Ka,Za,Gs,sn,en,Xs,an,nn,Ws,rn,ln,Ys,tn,on,bs,cn,pn,Js,mn,hn,Qs,un,bn,Ks,fn,dn,Zs,gn,jn,se,_n,kn,ee,$n,yn,ae,wn,vn,Ye,as,Je,_,En,ne,Tn,Bn,re,Pn,An,le,Cn,Mn,te,Fn,Nn,oe,In,On,ce,Sn,xn,pe,Dn,qn,me,Rn,Ln,he,zn,Un,ie,Hn,Vn,ue,Gn,Xn,be,Wn,Yn,fe,Jn,Qn,Qe,U,Kn,de,Zn,sr,ge,er,ar,je,nr,rr,Ke,ns,Ze,q,lr,_e,tr,or,ke,cr,pr,$e,mr,hr,ye,ir,ur,sa,J,rs,we,fs,br,ve,fr,ea,ws,dr,aa,V,H,gr,Ee,jr,_r,Te,kr,$r,Be,yr,wr,vr,z,Er,Pe,Tr,Br,Ae,Pr,Ar,Ce,Cr,Mr,Me,Fr,Nr,Ir,Fe,Or,na,Q,ls,Ne,ds,Sr,Ie,xr,ra,ts,Dr,Oe,qr,Rr,la,G,Lr,gs,zr,Ur,js,Hr,Vr,ta,os,Gr,Se,Xr,Wr,oa,cs,vs,_s,Yr,Jr,Qr,Es,ks,Kr,Zr,ca;return N=new da({}),u=new kt({props:{warning:!0,$$slots:{default:[Bt]},$$scope:{ctx:v}}}),L=new Tt({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Mixed",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/en/benchmarks.ipynb"},{label:"PyTorch",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/en/pytorch/benchmarks.ipynb"},{label:"TensorFlow",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/en/tensorflow/benchmarks.ipynb"},{label:"Mixed",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/en/benchmarks.ipynb"},{label:"PyTorch",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/en/pytorch/benchmarks.ipynb"},{label:"TensorFlow",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/en/tensorflow/benchmarks.ipynb"}]}}),us=new da({}),ss=new kt({props:{$$slots:{default:[Pt]},$$scope:{ctx:v}}}),es=new al({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Ft],pytorch:[Ct]},$$scope:{ctx:v}}}),as=new al({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[St],pytorch:[It]},$$scope:{ctx:v}}}),ns=new al({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Rt],pytorch:[Dt]},$$scope:{ctx:v}}}),fs=new da({}),ds=new da({}),{c(){t=o("meta"),m=d(),n=o("h1"),h=o("a"),f=o("span"),T(N.$$.fragment),D=d(),O=o("span"),E=r("Benchmarks"),F=d(),T(u.$$.fragment),$=d(),T(L.$$.fragment),Le=d(),ys=o("p"),ga=r("Let\u2019s take a look at how \u{1F917} Transformers models can be benchmarked, best practices, and already available benchmarks."),ze=d(),K=o("p"),ja=r("A notebook explaining in more detail how to benchmark \u{1F917} Transformers models can be found "),is=o("a"),_a=r("here"),ka=r("."),Ue=d(),Y=o("h2"),Z=o("a"),Cs=o("span"),T(us.$$.fragment),$a=d(),Ms=o("span"),ya=r("How to benchmark \u{1F917} Transformers models"),He=d(),S=o("p"),wa=r("The classes "),Fs=o("code"),va=r("PyTorchBenchmark"),Ea=r(" and "),Ns=o("code"),Ta=r("TensorFlowBenchmark"),Ba=r(" allow to flexibly benchmark \u{1F917} Transformers models. The benchmark classes allow us to measure the "),Is=o("em"),Pa=r("peak memory usage"),Aa=r(" and "),Os=o("em"),Ca=r("required time"),Ma=r(" for both "),Ss=o("em"),Fa=r("inference"),Na=r(" and "),xs=o("em"),Ia=r("training"),Oa=r("."),Ve=d(),T(ss.$$.fragment),Ge=d(),I=o("p"),Sa=r("The benchmark classes "),Ds=o("code"),xa=r("PyTorchBenchmark"),Da=r(" and "),qs=o("code"),qa=r("TensorFlowBenchmark"),Ra=r(" expect an object of type "),Rs=o("code"),La=r("PyTorchBenchmarkArguments"),za=r(` and
`),Ls=o("code"),Ua=r("TensorFlowBenchmarkArguments"),Ha=r(", respectively, for instantiation. "),zs=o("code"),Va=r("PyTorchBenchmarkArguments"),Ga=r(" and "),Us=o("code"),Xa=r("TensorFlowBenchmarkArguments"),Wa=r(" are data classes and contain all relevant configurations for their corresponding benchmark class. In the following example, it is shown how a BERT model of type "),Hs=o("em"),Ya=r("bert-base-cased"),Ja=r(" can be benchmarked."),Xe=d(),T(es.$$.fragment),We=d(),j=o("p"),Qa=r("Here, three arguments are given to the benchmark argument data classes, namely "),Vs=o("code"),Ka=r("models"),Za=r(", "),Gs=o("code"),sn=r("batch_sizes"),en=r(`, and
`),Xs=o("code"),an=r("sequence_lengths"),nn=r(". The argument "),Ws=o("code"),rn=r("models"),ln=r(" is required and expects a "),Ys=o("code"),tn=r("list"),on=r(` of model identifiers from the
`),bs=o("a"),cn=r("model hub"),pn=r(" The "),Js=o("code"),mn=r("list"),hn=r(" arguments "),Qs=o("code"),un=r("batch_sizes"),bn=r(" and "),Ks=o("code"),fn=r("sequence_lengths"),dn=r(` define
the size of the `),Zs=o("code"),gn=r("input_ids"),jn=r(` on which the model is benchmarked. There are many more parameters that can be configured
via the benchmark argument data classes. For more detail on these one can either directly consult the files
`),se=o("code"),_n=r("src/transformers/benchmark/benchmark_args_utils.py"),kn=r(", "),ee=o("code"),$n=r("src/transformers/benchmark/benchmark_args.py"),yn=r(` (for PyTorch)
and `),ae=o("code"),wn=r("src/transformers/benchmark/benchmark_args_tf.py"),vn=r(` (for Tensorflow). Alternatively, running the following shell
commands from root will print out a descriptive list of all configurable parameters for PyTorch and Tensorflow
respectively.`),Ye=d(),T(as.$$.fragment),Je=d(),_=o("p"),En=r("By default, the "),ne=o("em"),Tn=r("time"),Bn=r(" and the "),re=o("em"),Pn=r("required memory"),An=r(" for "),le=o("em"),Cn=r("inference"),Mn=r(` are benchmarked. In the example output above the first
two sections show the result corresponding to `),te=o("em"),Fn=r("inference time"),Nn=r(" and "),oe=o("em"),In=r("inference memory"),On=r(`. In addition, all relevant
information about the computing environment, `),ce=o("em"),Sn=r("e.g."),xn=r(` the GPU type, the system, the library versions, etc\u2026 are printed
out in the third section under `),pe=o("em"),Dn=r("ENVIRONMENT INFORMATION"),qn=r(". This information can optionally be saved in a "),me=o("em"),Rn=r(".csv"),Ln=r(` file
when adding the argument `),he=o("code"),zn=r("save_to_csv=True"),Un=r(" to "),ie=o("code"),Hn=r("PyTorchBenchmarkArguments"),Vn=r(` and
`),ue=o("code"),Gn=r("TensorFlowBenchmarkArguments"),Xn=r(` respectively. In this case, every section is saved in a separate
`),be=o("em"),Wn=r(".csv"),Yn=r(" file. The path to each "),fe=o("em"),Jn=r(".csv"),Qn=r(" file can optionally be defined via the argument data classes."),Qe=d(),U=o("p"),Kn=r("Instead of benchmarking pre-trained models via their model identifier, "),de=o("em"),Zn=r("e.g."),sr=d(),ge=o("code"),er=r("bert-base-uncased"),ar=r(`, the user can
alternatively benchmark an arbitrary configuration of any available model class. In this case, a `),je=o("code"),nr=r("list"),rr=r(` of
configurations must be inserted with the benchmark args as follows.`),Ke=d(),T(ns.$$.fragment),Ze=d(),q=o("p"),lr=r("Again, "),_e=o("em"),tr=r("inference time"),or=r(" and "),ke=o("em"),cr=r("required memory"),pr=r(" for "),$e=o("em"),mr=r("inference"),hr=r(` are measured, but this time for customized configurations
of the `),ye=o("code"),ir=r("BertModel"),ur=r(` class. This feature can especially be helpful when deciding for which configuration the model
should be trained.`),sa=d(),J=o("h2"),rs=o("a"),we=o("span"),T(fs.$$.fragment),br=d(),ve=o("span"),fr=r("Benchmark best practices"),ea=d(),ws=o("p"),dr=r("This section lists a couple of best practices one should be aware of when benchmarking a model."),aa=d(),V=o("ul"),H=o("li"),gr=r(`Currently, only single device benchmarking is supported. When benchmarking on GPU, it is recommended that the user
specifies on which device the code should be run by setting the `),Ee=o("code"),jr=r("CUDA_VISIBLE_DEVICES"),_r=r(` environment variable in the
shell, `),Te=o("em"),kr=r("e.g."),$r=d(),Be=o("code"),yr=r("export CUDA_VISIBLE_DEVICES=0"),wr=r(" before running the code."),vr=d(),z=o("li"),Er=r("The option "),Pe=o("code"),Tr=r("no_multi_processing"),Br=r(" should only be set to "),Ae=o("code"),Pr=r("True"),Ar=r(` for testing and debugging. To ensure accurate
memory measurement it is recommended to run each memory benchmark in a separate process by making sure
`),Ce=o("code"),Cr=r("no_multi_processing"),Mr=r(" is set to "),Me=o("code"),Fr=r("True"),Nr=r("."),Ir=d(),Fe=o("li"),Or=r(`One should always state the environment information when sharing the results of a model benchmark. Results can vary
heavily between different GPU devices, library versions, etc., so that benchmark results on their own are not very
useful for the community.`),na=d(),Q=o("h2"),ls=o("a"),Ne=o("span"),T(ds.$$.fragment),Sr=d(),Ie=o("span"),xr=r("Sharing your benchmark"),ra=d(),ts=o("p"),Dr=r("Previously all available core models (10 at the time) have been benchmarked for "),Oe=o("em"),qr=r("inference time"),Rr=r(`, across many different
settings: using PyTorch, with and without TorchScript, using TensorFlow, with and without XLA. All of those tests were
done across CPUs (except for TensorFlow XLA) and GPUs.`),la=d(),G=o("p"),Lr=r("The approach is detailed in the "),gs=o("a"),zr=r("following blogpost"),Ur=r(` and the results are
available `),js=o("a"),Hr=r("here"),Vr=r("."),ta=d(),os=o("p"),Gr=r("With the new "),Se=o("em"),Xr=r("benchmark"),Wr=r(" tools, it is easier than ever to share your benchmark results with the community"),oa=d(),cs=o("ul"),vs=o("li"),_s=o("a"),Yr=r("PyTorch Benchmarking Results"),Jr=r("."),Qr=d(),Es=o("li"),ks=o("a"),Kr=r("TensorFlow Benchmarking Results"),Zr=r("."),this.h()},l(e){const i=vt('[data-svelte="svelte-1phssyn"]',document.head);t=c(i,"META",{name:!0,content:!0}),i.forEach(a),m=g(e),n=c(e,"H1",{class:!0});var $s=p(n);h=c($s,"A",{id:!0,class:!0,href:!0});var xe=p(h);f=c(xe,"SPAN",{});var De=p(f);B(N.$$.fragment,De),De.forEach(a),xe.forEach(a),D=g($s),O=c($s,"SPAN",{});var qe=p(O);E=l(qe,"Benchmarks"),qe.forEach(a),$s.forEach(a),F=g(e),B(u.$$.fragment,e),$=g(e),B(L.$$.fragment,e),Le=g(e),ys=c(e,"P",{});var Re=p(ys);ga=l(Re,"Let\u2019s take a look at how \u{1F917} Transformers models can be benchmarked, best practices, and already available benchmarks."),Re.forEach(a),ze=g(e),K=c(e,"P",{});var pa=p(K);ja=l(pa,"A notebook explaining in more detail how to benchmark \u{1F917} Transformers models can be found "),is=c(pa,"A",{href:!0,rel:!0});var nl=p(is);_a=l(nl,"here"),nl.forEach(a),ka=l(pa,"."),pa.forEach(a),Ue=g(e),Y=c(e,"H2",{class:!0});var ma=p(Y);Z=c(ma,"A",{id:!0,class:!0,href:!0});var rl=p(Z);Cs=c(rl,"SPAN",{});var ll=p(Cs);B(us.$$.fragment,ll),ll.forEach(a),rl.forEach(a),$a=g(ma),Ms=c(ma,"SPAN",{});var tl=p(Ms);ya=l(tl,"How to benchmark \u{1F917} Transformers models"),tl.forEach(a),ma.forEach(a),He=g(e),S=c(e,"P",{});var R=p(S);wa=l(R,"The classes "),Fs=c(R,"CODE",{});var ol=p(Fs);va=l(ol,"PyTorchBenchmark"),ol.forEach(a),Ea=l(R," and "),Ns=c(R,"CODE",{});var cl=p(Ns);Ta=l(cl,"TensorFlowBenchmark"),cl.forEach(a),Ba=l(R," allow to flexibly benchmark \u{1F917} Transformers models. The benchmark classes allow us to measure the "),Is=c(R,"EM",{});var pl=p(Is);Pa=l(pl,"peak memory usage"),pl.forEach(a),Aa=l(R," and "),Os=c(R,"EM",{});var ml=p(Os);Ca=l(ml,"required time"),ml.forEach(a),Ma=l(R," for both "),Ss=c(R,"EM",{});var hl=p(Ss);Fa=l(hl,"inference"),hl.forEach(a),Na=l(R," and "),xs=c(R,"EM",{});var il=p(xs);Ia=l(il,"training"),il.forEach(a),Oa=l(R,"."),R.forEach(a),Ve=g(e),B(ss.$$.fragment,e),Ge=g(e),I=c(e,"P",{});var x=p(I);Sa=l(x,"The benchmark classes "),Ds=c(x,"CODE",{});var ul=p(Ds);xa=l(ul,"PyTorchBenchmark"),ul.forEach(a),Da=l(x," and "),qs=c(x,"CODE",{});var bl=p(qs);qa=l(bl,"TensorFlowBenchmark"),bl.forEach(a),Ra=l(x," expect an object of type "),Rs=c(x,"CODE",{});var fl=p(Rs);La=l(fl,"PyTorchBenchmarkArguments"),fl.forEach(a),za=l(x,` and
`),Ls=c(x,"CODE",{});var dl=p(Ls);Ua=l(dl,"TensorFlowBenchmarkArguments"),dl.forEach(a),Ha=l(x,", respectively, for instantiation. "),zs=c(x,"CODE",{});var gl=p(zs);Va=l(gl,"PyTorchBenchmarkArguments"),gl.forEach(a),Ga=l(x," and "),Us=c(x,"CODE",{});var jl=p(Us);Xa=l(jl,"TensorFlowBenchmarkArguments"),jl.forEach(a),Wa=l(x," are data classes and contain all relevant configurations for their corresponding benchmark class. In the following example, it is shown how a BERT model of type "),Hs=c(x,"EM",{});var _l=p(Hs);Ya=l(_l,"bert-base-cased"),_l.forEach(a),Ja=l(x," can be benchmarked."),x.forEach(a),Xe=g(e),B(es.$$.fragment,e),We=g(e),j=c(e,"P",{});var y=p(j);Qa=l(y,"Here, three arguments are given to the benchmark argument data classes, namely "),Vs=c(y,"CODE",{});var kl=p(Vs);Ka=l(kl,"models"),kl.forEach(a),Za=l(y,", "),Gs=c(y,"CODE",{});var $l=p(Gs);sn=l($l,"batch_sizes"),$l.forEach(a),en=l(y,`, and
`),Xs=c(y,"CODE",{});var yl=p(Xs);an=l(yl,"sequence_lengths"),yl.forEach(a),nn=l(y,". The argument "),Ws=c(y,"CODE",{});var wl=p(Ws);rn=l(wl,"models"),wl.forEach(a),ln=l(y," is required and expects a "),Ys=c(y,"CODE",{});var vl=p(Ys);tn=l(vl,"list"),vl.forEach(a),on=l(y,` of model identifiers from the
`),bs=c(y,"A",{href:!0,rel:!0});var El=p(bs);cn=l(El,"model hub"),El.forEach(a),pn=l(y," The "),Js=c(y,"CODE",{});var Tl=p(Js);mn=l(Tl,"list"),Tl.forEach(a),hn=l(y," arguments "),Qs=c(y,"CODE",{});var Bl=p(Qs);un=l(Bl,"batch_sizes"),Bl.forEach(a),bn=l(y," and "),Ks=c(y,"CODE",{});var Pl=p(Ks);fn=l(Pl,"sequence_lengths"),Pl.forEach(a),dn=l(y,` define
the size of the `),Zs=c(y,"CODE",{});var Al=p(Zs);gn=l(Al,"input_ids"),Al.forEach(a),jn=l(y,` on which the model is benchmarked. There are many more parameters that can be configured
via the benchmark argument data classes. For more detail on these one can either directly consult the files
`),se=c(y,"CODE",{});var Cl=p(se);_n=l(Cl,"src/transformers/benchmark/benchmark_args_utils.py"),Cl.forEach(a),kn=l(y,", "),ee=c(y,"CODE",{});var Ml=p(ee);$n=l(Ml,"src/transformers/benchmark/benchmark_args.py"),Ml.forEach(a),yn=l(y,` (for PyTorch)
and `),ae=c(y,"CODE",{});var Fl=p(ae);wn=l(Fl,"src/transformers/benchmark/benchmark_args_tf.py"),Fl.forEach(a),vn=l(y,` (for Tensorflow). Alternatively, running the following shell
commands from root will print out a descriptive list of all configurable parameters for PyTorch and Tensorflow
respectively.`),y.forEach(a),Ye=g(e),B(as.$$.fragment,e),Je=g(e),_=c(e,"P",{});var w=p(_);En=l(w,"By default, the "),ne=c(w,"EM",{});var Nl=p(ne);Tn=l(Nl,"time"),Nl.forEach(a),Bn=l(w," and the "),re=c(w,"EM",{});var Il=p(re);Pn=l(Il,"required memory"),Il.forEach(a),An=l(w," for "),le=c(w,"EM",{});var Ol=p(le);Cn=l(Ol,"inference"),Ol.forEach(a),Mn=l(w,` are benchmarked. In the example output above the first
two sections show the result corresponding to `),te=c(w,"EM",{});var Sl=p(te);Fn=l(Sl,"inference time"),Sl.forEach(a),Nn=l(w," and "),oe=c(w,"EM",{});var xl=p(oe);In=l(xl,"inference memory"),xl.forEach(a),On=l(w,`. In addition, all relevant
information about the computing environment, `),ce=c(w,"EM",{});var Dl=p(ce);Sn=l(Dl,"e.g."),Dl.forEach(a),xn=l(w,` the GPU type, the system, the library versions, etc\u2026 are printed
out in the third section under `),pe=c(w,"EM",{});var ql=p(pe);Dn=l(ql,"ENVIRONMENT INFORMATION"),ql.forEach(a),qn=l(w,". This information can optionally be saved in a "),me=c(w,"EM",{});var Rl=p(me);Rn=l(Rl,".csv"),Rl.forEach(a),Ln=l(w,` file
when adding the argument `),he=c(w,"CODE",{});var Ll=p(he);zn=l(Ll,"save_to_csv=True"),Ll.forEach(a),Un=l(w," to "),ie=c(w,"CODE",{});var zl=p(ie);Hn=l(zl,"PyTorchBenchmarkArguments"),zl.forEach(a),Vn=l(w,` and
`),ue=c(w,"CODE",{});var Ul=p(ue);Gn=l(Ul,"TensorFlowBenchmarkArguments"),Ul.forEach(a),Xn=l(w,` respectively. In this case, every section is saved in a separate
`),be=c(w,"EM",{});var Hl=p(be);Wn=l(Hl,".csv"),Hl.forEach(a),Yn=l(w," file. The path to each "),fe=c(w,"EM",{});var Vl=p(fe);Jn=l(Vl,".csv"),Vl.forEach(a),Qn=l(w," file can optionally be defined via the argument data classes."),w.forEach(a),Qe=g(e),U=c(e,"P",{});var ps=p(U);Kn=l(ps,"Instead of benchmarking pre-trained models via their model identifier, "),de=c(ps,"EM",{});var Gl=p(de);Zn=l(Gl,"e.g."),Gl.forEach(a),sr=g(ps),ge=c(ps,"CODE",{});var Xl=p(ge);er=l(Xl,"bert-base-uncased"),Xl.forEach(a),ar=l(ps,`, the user can
alternatively benchmark an arbitrary configuration of any available model class. In this case, a `),je=c(ps,"CODE",{});var Wl=p(je);nr=l(Wl,"list"),Wl.forEach(a),rr=l(ps,` of
configurations must be inserted with the benchmark args as follows.`),ps.forEach(a),Ke=g(e),B(ns.$$.fragment,e),Ze=g(e),q=c(e,"P",{});var X=p(q);lr=l(X,"Again, "),_e=c(X,"EM",{});var Yl=p(_e);tr=l(Yl,"inference time"),Yl.forEach(a),or=l(X," and "),ke=c(X,"EM",{});var Jl=p(ke);cr=l(Jl,"required memory"),Jl.forEach(a),pr=l(X," for "),$e=c(X,"EM",{});var Ql=p($e);mr=l(Ql,"inference"),Ql.forEach(a),hr=l(X,` are measured, but this time for customized configurations
of the `),ye=c(X,"CODE",{});var Kl=p(ye);ir=l(Kl,"BertModel"),Kl.forEach(a),ur=l(X,` class. This feature can especially be helpful when deciding for which configuration the model
should be trained.`),X.forEach(a),sa=g(e),J=c(e,"H2",{class:!0});var ha=p(J);rs=c(ha,"A",{id:!0,class:!0,href:!0});var Zl=p(rs);we=c(Zl,"SPAN",{});var st=p(we);B(fs.$$.fragment,st),st.forEach(a),Zl.forEach(a),br=g(ha),ve=c(ha,"SPAN",{});var et=p(ve);fr=l(et,"Benchmark best practices"),et.forEach(a),ha.forEach(a),ea=g(e),ws=c(e,"P",{});var at=p(ws);dr=l(at,"This section lists a couple of best practices one should be aware of when benchmarking a model."),at.forEach(a),aa=g(e),V=c(e,"UL",{});var Ts=p(V);H=c(Ts,"LI",{});var ms=p(H);gr=l(ms,`Currently, only single device benchmarking is supported. When benchmarking on GPU, it is recommended that the user
specifies on which device the code should be run by setting the `),Ee=c(ms,"CODE",{});var nt=p(Ee);jr=l(nt,"CUDA_VISIBLE_DEVICES"),nt.forEach(a),_r=l(ms,` environment variable in the
shell, `),Te=c(ms,"EM",{});var rt=p(Te);kr=l(rt,"e.g."),rt.forEach(a),$r=g(ms),Be=c(ms,"CODE",{});var lt=p(Be);yr=l(lt,"export CUDA_VISIBLE_DEVICES=0"),lt.forEach(a),wr=l(ms," before running the code."),ms.forEach(a),vr=g(Ts),z=c(Ts,"LI",{});var W=p(z);Er=l(W,"The option "),Pe=c(W,"CODE",{});var tt=p(Pe);Tr=l(tt,"no_multi_processing"),tt.forEach(a),Br=l(W," should only be set to "),Ae=c(W,"CODE",{});var ot=p(Ae);Pr=l(ot,"True"),ot.forEach(a),Ar=l(W,` for testing and debugging. To ensure accurate
memory measurement it is recommended to run each memory benchmark in a separate process by making sure
`),Ce=c(W,"CODE",{});var ct=p(Ce);Cr=l(ct,"no_multi_processing"),ct.forEach(a),Mr=l(W," is set to "),Me=c(W,"CODE",{});var pt=p(Me);Fr=l(pt,"True"),pt.forEach(a),Nr=l(W,"."),W.forEach(a),Ir=g(Ts),Fe=c(Ts,"LI",{});var mt=p(Fe);Or=l(mt,`One should always state the environment information when sharing the results of a model benchmark. Results can vary
heavily between different GPU devices, library versions, etc., so that benchmark results on their own are not very
useful for the community.`),mt.forEach(a),Ts.forEach(a),na=g(e),Q=c(e,"H2",{class:!0});var ia=p(Q);ls=c(ia,"A",{id:!0,class:!0,href:!0});var ht=p(ls);Ne=c(ht,"SPAN",{});var it=p(Ne);B(ds.$$.fragment,it),it.forEach(a),ht.forEach(a),Sr=g(ia),Ie=c(ia,"SPAN",{});var ut=p(Ie);xr=l(ut,"Sharing your benchmark"),ut.forEach(a),ia.forEach(a),ra=g(e),ts=c(e,"P",{});var ua=p(ts);Dr=l(ua,"Previously all available core models (10 at the time) have been benchmarked for "),Oe=c(ua,"EM",{});var bt=p(Oe);qr=l(bt,"inference time"),bt.forEach(a),Rr=l(ua,`, across many different
settings: using PyTorch, with and without TorchScript, using TensorFlow, with and without XLA. All of those tests were
done across CPUs (except for TensorFlow XLA) and GPUs.`),ua.forEach(a),la=g(e),G=c(e,"P",{});var Bs=p(G);Lr=l(Bs,"The approach is detailed in the "),gs=c(Bs,"A",{href:!0,rel:!0});var ft=p(gs);zr=l(ft,"following blogpost"),ft.forEach(a),Ur=l(Bs,` and the results are
available `),js=c(Bs,"A",{href:!0,rel:!0});var dt=p(js);Hr=l(dt,"here"),dt.forEach(a),Vr=l(Bs,"."),Bs.forEach(a),ta=g(e),os=c(e,"P",{});var ba=p(os);Gr=l(ba,"With the new "),Se=c(ba,"EM",{});var gt=p(Se);Xr=l(gt,"benchmark"),gt.forEach(a),Wr=l(ba," tools, it is easier than ever to share your benchmark results with the community"),ba.forEach(a),oa=g(e),cs=c(e,"UL",{});var fa=p(cs);vs=c(fa,"LI",{});var sl=p(vs);_s=c(sl,"A",{href:!0,rel:!0});var jt=p(_s);Yr=l(jt,"PyTorch Benchmarking Results"),jt.forEach(a),Jr=l(sl,"."),sl.forEach(a),Qr=g(fa),Es=c(fa,"LI",{});var el=p(Es);ks=c(el,"A",{href:!0,rel:!0});var _t=p(ks);Kr=l(_t,"TensorFlow Benchmarking Results"),_t.forEach(a),Zr=l(el,"."),el.forEach(a),fa.forEach(a),this.h()},h(){k(t,"name","hf:doc:metadata"),k(t,"content",JSON.stringify(zt)),k(h,"id","benchmarks"),k(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(h,"href","#benchmarks"),k(n,"class","relative group"),k(is,"href","https://github.com/huggingface/notebooks/tree/main/examples/benchmark.ipynb"),k(is,"rel","nofollow"),k(Z,"id","how-to-benchmark-transformers-models"),k(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Z,"href","#how-to-benchmark-transformers-models"),k(Y,"class","relative group"),k(bs,"href","https://huggingface.co/models"),k(bs,"rel","nofollow"),k(rs,"id","benchmark-best-practices"),k(rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(rs,"href","#benchmark-best-practices"),k(J,"class","relative group"),k(ls,"id","sharing-your-benchmark"),k(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(ls,"href","#sharing-your-benchmark"),k(Q,"class","relative group"),k(gs,"href","https://medium.com/huggingface/benchmarking-transformers-pytorch-and-tensorflow-e2917fb891c2"),k(gs,"rel","nofollow"),k(js,"href","https://docs.google.com/spreadsheets/d/1sryqufw2D0XlUH4sq3e9Wnxu5EAQkaohzrJbd5HdQ_w/edit?usp=sharing"),k(js,"rel","nofollow"),k(_s,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/benchmarking/README.md"),k(_s,"rel","nofollow"),k(ks,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/benchmarking/README.md"),k(ks,"rel","nofollow")},m(e,i){s(document.head,t),b(e,m,i),b(e,n,i),s(n,h),s(h,f),P(N,f,null),s(n,D),s(n,O),s(O,E),b(e,F,i),P(u,e,i),b(e,$,i),P(L,e,i),b(e,Le,i),b(e,ys,i),s(ys,ga),b(e,ze,i),b(e,K,i),s(K,ja),s(K,is),s(is,_a),s(K,ka),b(e,Ue,i),b(e,Y,i),s(Y,Z),s(Z,Cs),P(us,Cs,null),s(Y,$a),s(Y,Ms),s(Ms,ya),b(e,He,i),b(e,S,i),s(S,wa),s(S,Fs),s(Fs,va),s(S,Ea),s(S,Ns),s(Ns,Ta),s(S,Ba),s(S,Is),s(Is,Pa),s(S,Aa),s(S,Os),s(Os,Ca),s(S,Ma),s(S,Ss),s(Ss,Fa),s(S,Na),s(S,xs),s(xs,Ia),s(S,Oa),b(e,Ve,i),P(ss,e,i),b(e,Ge,i),b(e,I,i),s(I,Sa),s(I,Ds),s(Ds,xa),s(I,Da),s(I,qs),s(qs,qa),s(I,Ra),s(I,Rs),s(Rs,La),s(I,za),s(I,Ls),s(Ls,Ua),s(I,Ha),s(I,zs),s(zs,Va),s(I,Ga),s(I,Us),s(Us,Xa),s(I,Wa),s(I,Hs),s(Hs,Ya),s(I,Ja),b(e,Xe,i),P(es,e,i),b(e,We,i),b(e,j,i),s(j,Qa),s(j,Vs),s(Vs,Ka),s(j,Za),s(j,Gs),s(Gs,sn),s(j,en),s(j,Xs),s(Xs,an),s(j,nn),s(j,Ws),s(Ws,rn),s(j,ln),s(j,Ys),s(Ys,tn),s(j,on),s(j,bs),s(bs,cn),s(j,pn),s(j,Js),s(Js,mn),s(j,hn),s(j,Qs),s(Qs,un),s(j,bn),s(j,Ks),s(Ks,fn),s(j,dn),s(j,Zs),s(Zs,gn),s(j,jn),s(j,se),s(se,_n),s(j,kn),s(j,ee),s(ee,$n),s(j,yn),s(j,ae),s(ae,wn),s(j,vn),b(e,Ye,i),P(as,e,i),b(e,Je,i),b(e,_,i),s(_,En),s(_,ne),s(ne,Tn),s(_,Bn),s(_,re),s(re,Pn),s(_,An),s(_,le),s(le,Cn),s(_,Mn),s(_,te),s(te,Fn),s(_,Nn),s(_,oe),s(oe,In),s(_,On),s(_,ce),s(ce,Sn),s(_,xn),s(_,pe),s(pe,Dn),s(_,qn),s(_,me),s(me,Rn),s(_,Ln),s(_,he),s(he,zn),s(_,Un),s(_,ie),s(ie,Hn),s(_,Vn),s(_,ue),s(ue,Gn),s(_,Xn),s(_,be),s(be,Wn),s(_,Yn),s(_,fe),s(fe,Jn),s(_,Qn),b(e,Qe,i),b(e,U,i),s(U,Kn),s(U,de),s(de,Zn),s(U,sr),s(U,ge),s(ge,er),s(U,ar),s(U,je),s(je,nr),s(U,rr),b(e,Ke,i),P(ns,e,i),b(e,Ze,i),b(e,q,i),s(q,lr),s(q,_e),s(_e,tr),s(q,or),s(q,ke),s(ke,cr),s(q,pr),s(q,$e),s($e,mr),s(q,hr),s(q,ye),s(ye,ir),s(q,ur),b(e,sa,i),b(e,J,i),s(J,rs),s(rs,we),P(fs,we,null),s(J,br),s(J,ve),s(ve,fr),b(e,ea,i),b(e,ws,i),s(ws,dr),b(e,aa,i),b(e,V,i),s(V,H),s(H,gr),s(H,Ee),s(Ee,jr),s(H,_r),s(H,Te),s(Te,kr),s(H,$r),s(H,Be),s(Be,yr),s(H,wr),s(V,vr),s(V,z),s(z,Er),s(z,Pe),s(Pe,Tr),s(z,Br),s(z,Ae),s(Ae,Pr),s(z,Ar),s(z,Ce),s(Ce,Cr),s(z,Mr),s(z,Me),s(Me,Fr),s(z,Nr),s(V,Ir),s(V,Fe),s(Fe,Or),b(e,na,i),b(e,Q,i),s(Q,ls),s(ls,Ne),P(ds,Ne,null),s(Q,Sr),s(Q,Ie),s(Ie,xr),b(e,ra,i),b(e,ts,i),s(ts,Dr),s(ts,Oe),s(Oe,qr),s(ts,Rr),b(e,la,i),b(e,G,i),s(G,Lr),s(G,gs),s(gs,zr),s(G,Ur),s(G,js),s(js,Hr),s(G,Vr),b(e,ta,i),b(e,os,i),s(os,Gr),s(os,Se),s(Se,Xr),s(os,Wr),b(e,oa,i),b(e,cs,i),s(cs,vs),s(vs,_s),s(_s,Yr),s(vs,Jr),s(cs,Qr),s(cs,Es),s(Es,ks),s(ks,Kr),s(Es,Zr),ca=!0},p(e,[i]){const $s={};i&2&&($s.$$scope={dirty:i,ctx:e}),u.$set($s);const xe={};i&2&&(xe.$$scope={dirty:i,ctx:e}),ss.$set(xe);const De={};i&2&&(De.$$scope={dirty:i,ctx:e}),es.$set(De);const qe={};i&2&&(qe.$$scope={dirty:i,ctx:e}),as.$set(qe);const Re={};i&2&&(Re.$$scope={dirty:i,ctx:e}),ns.$set(Re)},i(e){ca||(A(N.$$.fragment,e),A(u.$$.fragment,e),A(L.$$.fragment,e),A(us.$$.fragment,e),A(ss.$$.fragment,e),A(es.$$.fragment,e),A(as.$$.fragment,e),A(ns.$$.fragment,e),A(fs.$$.fragment,e),A(ds.$$.fragment,e),ca=!0)},o(e){C(N.$$.fragment,e),C(u.$$.fragment,e),C(L.$$.fragment,e),C(us.$$.fragment,e),C(ss.$$.fragment,e),C(es.$$.fragment,e),C(as.$$.fragment,e),C(ns.$$.fragment,e),C(fs.$$.fragment,e),C(ds.$$.fragment,e),ca=!1},d(e){a(t),e&&a(m),e&&a(n),M(N),e&&a(F),M(u,e),e&&a($),M(L,e),e&&a(Le),e&&a(ys),e&&a(ze),e&&a(K),e&&a(Ue),e&&a(Y),M(us),e&&a(He),e&&a(S),e&&a(Ve),M(ss,e),e&&a(Ge),e&&a(I),e&&a(Xe),M(es,e),e&&a(We),e&&a(j),e&&a(Ye),M(as,e),e&&a(Je),e&&a(_),e&&a(Qe),e&&a(U),e&&a(Ke),M(ns,e),e&&a(Ze),e&&a(q),e&&a(sa),e&&a(J),M(fs),e&&a(ea),e&&a(ws),e&&a(aa),e&&a(V),e&&a(na),e&&a(Q),M(ds),e&&a(ra),e&&a(ts),e&&a(la),e&&a(G),e&&a(ta),e&&a(os),e&&a(oa),e&&a(cs)}}}const zt={local:"benchmarks",sections:[{local:"how-to-benchmark-transformers-models",title:"How to benchmark \u{1F917} Transformers models"},{local:"benchmark-best-practices",title:"Benchmark best practices"},{local:"sharing-your-benchmark",title:"Sharing your benchmark"}],title:"Benchmarks"};function Ut(v){return Et(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Jt extends $t{constructor(t){super();yt(this,t,Ut,Lt,wt,{})}}export{Jt as default,zt as metadata};
