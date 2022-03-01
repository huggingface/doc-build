import{S as At,i as Pt,s as Ct,e as l,k as h,w as N,t as n,M as Ft,c as t,d as a,m,a as o,x as M,h as r,b,F as s,g as p,y as I,q as O,o as S,B as D}from"../chunks/vendor-4833417e.js";import{T as $t}from"../chunks/Tip-fffd6df1.js";import{I as fa}from"../chunks/IconCopyLink-4b81c553.js";import{C as ga}from"../chunks/CodeBlockFw-9971d57b.js";import{D as Nt}from"../chunks/DocNotebookDropdown-ecff2a90.js";import"../chunks/CopyButton-dacfbfaf.js";function Mt(ls){let d,E;return{c(){d=l("p"),E=n(`Hugging Face\u2019s Benchmarking tools are deprecated and it is advised to use external Benchmarking libraries to measure the speed
and memory complexity of Transformer models.`)},l(j){d=t(j,"P",{});var _=o(d);E=r(_,`Hugging Face\u2019s Benchmarking tools are deprecated and it is advised to use external Benchmarking libraries to measure the speed
and memory complexity of Transformer models.`),_.forEach(a)},m(j,_){p(j,d,_),s(d,E)},d(j){j&&a(d)}}}function It(ls){let d,E,j,_,z,B,ts,U;return{c(){d=l("p"),E=n("Hereby, "),j=l("em"),_=n("inference"),z=n(" is defined by a single forward pass, and "),B=l("em"),ts=n("training"),U=n(` is defined by a single forward pass and
backward pass.`)},l(H){d=t(H,"P",{});var $=o(d);E=r($,"Hereby, "),j=t($,"EM",{});var C=o(j);_=r(C,"inference"),C.forEach(a),z=r($," is defined by a single forward pass, and "),B=t($,"EM",{});var os=o(B);ts=r(os,"training"),os.forEach(a),U=r($,` is defined by a single forward pass and
backward pass.`),$.forEach(a)},m(H,$){p(H,d,$),s(d,E),s(d,j),s(j,_),s(d,z),s(d,B),s(B,ts),s(d,U)},d(H){H&&a(d)}}}function Ot(ls){let d,E,j,_,z,B,ts,U,H,$,C,os,cs,qe,Es,ja,xe,W,_a,ps,ya,ka,Re,V,Y,Ps,hs,va,Cs,Ea,Le,k,wa,Fs,Ta,Ba,Ns,$a,Aa,Ms,Pa,Ca,Is,Fa,Na,Os,Ma,Ia,Ss,Oa,Sa,ze,J,Ue,y,Da,Ds,qa,xa,qs,Ra,La,xs,za,Ua,Rs,Ha,Va,Ls,Xa,Ga,zs,Wa,Ya,Us,Ja,Qa,He,ms,Ve,i,Ka,Hs,Za,sn,Vs,en,an,Xs,nn,rn,Gs,ln,tn,Ws,on,cn,is,pn,hn,Ys,mn,un,Js,bn,dn,Qs,fn,gn,Ks,jn,_n,Zs,yn,kn,se,vn,En,ee,wn,Tn,Xe,us,Ge,Q,Bn,ae,$n,An,We,bs,Ye,u,Pn,ne,Cn,Fn,re,Nn,Mn,le,In,On,te,Sn,Dn,oe,qn,xn,ce,Rn,Ln,pe,zn,Un,he,Hn,Vn,me,Xn,Gn,ie,Wn,Yn,ue,Jn,Qn,be,Kn,Zn,de,sr,er,Je,P,ar,fe,nr,rr,ge,lr,tr,je,or,cr,Qe,ds,Ke,w,pr,_e,hr,mr,ye,ir,ur,ke,br,dr,ve,fr,gr,Ze,X,K,Ee,fs,jr,we,_r,sa,ws,yr,ea,q,F,kr,Te,vr,Er,Be,wr,Tr,$e,Br,$r,Ar,A,Pr,Ae,Cr,Fr,Pe,Nr,Mr,Ce,Ir,Or,Fe,Sr,Dr,qr,Ne,xr,aa,G,Z,Me,gs,Rr,Ie,Lr,na,ss,zr,Oe,Ur,Hr,ra,x,Vr,js,Xr,Gr,_s,Wr,Yr,la,es,Jr,Se,Qr,Kr,ta,as,Ts,ys,Zr,sl,el,Bs,ks,al,nl,oa;return B=new fa({}),C=new $t({props:{warning:"&lcub;true}",$$slots:{default:[Mt]},$$scope:{ctx:ls}}}),cs=new Nt({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Mixed",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/benchmarks.ipynb"},{label:"PyTorch",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/pytorch/benchmarks.ipynb"},{label:"TensorFlow",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/tensorflow/benchmarks.ipynb"},{label:"Mixed",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/transformers_doc/benchmarks.ipynb"},{label:"PyTorch",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/transformers_doc/pytorch/benchmarks.ipynb"},{label:"TensorFlow",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/transformers_doc/tensorflow/benchmarks.ipynb"}]}}),hs=new fa({}),J=new $t({props:{$$slots:{default:[It]},$$scope:{ctx:ls}}}),ms=new ga({props:{pt:{code:`from transformers import PyTorchBenchmark, PyTorchBenchmarkArguments

args = PyTorchBenchmarkArguments(models=["bert-base-uncased"], batch_sizes=[8], sequence_lengths=[8, 32, 128, 512])
benchmark = PyTorchBenchmark(args)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PyTorchBenchmark, PyTorchBenchmarkArguments

<span class="hljs-meta">&gt;&gt;&gt; </span>args = PyTorchBenchmarkArguments(models=[<span class="hljs-string">&quot;bert-base-uncased&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark = PyTorchBenchmark(args)`},tf:{code:`from transformers import TensorFlowBenchmark, TensorFlowBenchmarkArguments

args = TensorFlowBenchmarkArguments(
    models=["bert-base-uncased"], batch_sizes=[8], sequence_lengths=[8, 32, 128, 512]
)
benchmark = TensorFlowBenchmark(args)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TensorFlowBenchmark, TensorFlowBenchmarkArguments

<span class="hljs-meta">&gt;&gt;&gt; </span>args = TensorFlowBenchmarkArguments(
<span class="hljs-meta">... </span>    models=[<span class="hljs-string">&quot;bert-base-uncased&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark = TensorFlowBenchmark(args)`}}}),us=new ga({props:{pt:{code:"python examples/pytorch/benchmarking/run_benchmark.py --help",highlighted:'python examples/pytorch/benchmarking/run_benchmark.py --<span class="hljs-built_in">help</span>'},tf:{code:"python examples/tensorflow/benchmarking/run_benchmark_tf.py --help",highlighted:'python examples/tensorflow/benchmarking/run_benchmark_tf.py --<span class="hljs-built_in">help</span>'}}}),bs=new ga({props:{pt:{code:`results = benchmark.run()
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
- use_tpu: <span class="hljs-literal">False</span>`},tf:{code:`results = benchmark.run()
print(results)


`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>results = benchmark.run()
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
- use_tpu: <span class="hljs-literal">False</span>`}}}),ds=new ga({props:{pt:{code:`from transformers import PyTorchBenchmark, PyTorchBenchmarkArguments, BertConfig

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
- use_tpu: <span class="hljs-literal">False</span>`},tf:{code:`from transformers import TensorFlowBenchmark, TensorFlowBenchmarkArguments, BertConfig

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
- use_tpu: <span class="hljs-literal">False</span>`}}}),fs=new fa({}),gs=new fa({}),{c(){d=l("meta"),E=h(),j=l("h1"),_=l("a"),z=l("span"),N(B.$$.fragment),ts=h(),U=l("span"),H=n("Benchmarks"),$=h(),N(C.$$.fragment),os=h(),N(cs.$$.fragment),qe=h(),Es=l("p"),ja=n("Let\u2019s take a look at how \u{1F917} Transformers models can be benchmarked, best practices, and already available benchmarks."),xe=h(),W=l("p"),_a=n("A notebook explaining in more detail how to benchmark \u{1F917} Transformers models can be found "),ps=l("a"),ya=n("here"),ka=n("."),Re=h(),V=l("h2"),Y=l("a"),Ps=l("span"),N(hs.$$.fragment),va=h(),Cs=l("span"),Ea=n("How to benchmark \u{1F917} Transformers models"),Le=h(),k=l("p"),wa=n("The classes "),Fs=l("code"),Ta=n("PyTorchBenchmark"),Ba=n("and "),Ns=l("code"),$a=n("TensorFlowBenchmark"),Aa=n("allow to flexibly benchmark \u{1F917} Transformers models. The benchmark classes allow us to measure the "),Ms=l("em"),Pa=n("peak memory usage"),Ca=n(" and "),Is=l("em"),Fa=n("required time"),Na=n(" for both "),Os=l("em"),Ma=n("inference"),Ia=n(" and "),Ss=l("em"),Oa=n("training"),Sa=n("."),ze=h(),N(J.$$.fragment),Ue=h(),y=l("p"),Da=n("The benchmark classes "),Ds=l("code"),qa=n("PyTorchBenchmark"),xa=n("and "),qs=l("code"),Ra=n("TensorFlowBenchmark"),La=n("expect an object of type "),xs=l("code"),za=n("PyTorchBenchmarkArguments"),Ua=n(`and
`),Rs=l("code"),Ha=n("TensorFlowBenchmarkArguments"),Va=n(" respectively, for instantiation. "),Ls=l("code"),Xa=n("PyTorchBenchmarkArguments"),Ga=n("and "),zs=l("code"),Wa=n("TensorFlowBenchmarkArguments"),Ya=n("are data classes and contain all relevant configurations for their corresponding benchmark class. In the following example, it is shown how a BERT model of type "),Us=l("em"),Ja=n("bert-base-cased"),Qa=n(" can be benchmarked."),He=h(),N(ms.$$.fragment),Ve=h(),i=l("p"),Ka=n("Here, three arguments are given to the benchmark argument data classes, namely "),Hs=l("code"),Za=n("models"),sn=n(", "),Vs=l("code"),en=n("batch_sizes"),an=n(`, and
`),Xs=l("code"),nn=n("sequence_lengths"),rn=n(". The argument "),Gs=l("code"),ln=n("models"),tn=n(" is required and expects a "),Ws=l("code"),on=n("list"),cn=n(` of model identifiers from the
`),is=l("a"),pn=n("model hub"),hn=n(" The "),Ys=l("code"),mn=n("list"),un=n(" arguments "),Js=l("code"),bn=n("batch_sizes"),dn=n(" and "),Qs=l("code"),fn=n("sequence_lengths"),gn=n(` define
the size of the `),Ks=l("code"),jn=n("input_ids"),_n=n(` on which the model is benchmarked. There are many more parameters that can be configured
via the benchmark argument data classes. For more detail on these one can either directly consult the files
`),Zs=l("code"),yn=n("src/transformers/benchmark/benchmark_args_utils.py"),kn=n(", "),se=l("code"),vn=n("src/transformers/benchmark/benchmark_args.py"),En=n(` (for PyTorch)
and `),ee=l("code"),wn=n("src/transformers/benchmark/benchmark_args_tf.py"),Tn=n(` (for Tensorflow). Alternatively, running the following shell
commands from root will print out a descriptive list of all configurable parameters for PyTorch and Tensorflow
respectively.`),Xe=h(),N(us.$$.fragment),Ge=h(),Q=l("p"),Bn=n("An instantiated benchmark object can then simply be run by calling "),ae=l("code"),$n=n("benchmark.run()"),An=n("."),We=h(),N(bs.$$.fragment),Ye=h(),u=l("p"),Pn=n("By default, the "),ne=l("em"),Cn=n("time"),Fn=n(" and the "),re=l("em"),Nn=n("required memory"),Mn=n(" for "),le=l("em"),In=n("inference"),On=n(` are benchmarked. In the example output above the first
two sections show the result corresponding to `),te=l("em"),Sn=n("inference time"),Dn=n(" and "),oe=l("em"),qn=n("inference memory"),xn=n(`. In addition, all relevant
information about the computing environment, `),ce=l("em"),Rn=n("e.g."),Ln=n(` the GPU type, the system, the library versions, etc\u2026 are printed
out in the third section under `),pe=l("em"),zn=n("ENVIRONMENT INFORMATION"),Un=n(". This information can optionally be saved in a "),he=l("em"),Hn=n(".csv"),Vn=n(` file
when adding the argument `),me=l("code"),Xn=n("save_to_csv=True"),Gn=n(" to "),ie=l("code"),Wn=n("PyTorchBenchmarkArguments"),Yn=n(`and
`),ue=l("code"),Jn=n("TensorFlowBenchmarkArguments"),Qn=n(`respectively. In this case, every section is saved in a separate
`),be=l("em"),Kn=n(".csv"),Zn=n(" file. The path to each "),de=l("em"),sr=n(".csv"),er=n(" file can optionally be defined via the argument data classes."),Je=h(),P=l("p"),ar=n("Instead of benchmarking pre-trained models via their model identifier, "),fe=l("em"),nr=n("e.g."),rr=h(),ge=l("code"),lr=n("bert-base-uncased"),tr=n(`, the user can
alternatively benchmark an arbitrary configuration of any available model class. In this case, a `),je=l("code"),or=n("list"),cr=n(` of
configurations must be inserted with the benchmark args as follows.`),Qe=h(),N(ds.$$.fragment),Ke=h(),w=l("p"),pr=n("Again, "),_e=l("em"),hr=n("inference time"),mr=n(" and "),ye=l("em"),ir=n("required memory"),ur=n(" for "),ke=l("em"),br=n("inference"),dr=n(` are measured, but this time for customized configurations
of the `),ve=l("code"),fr=n("BertModel"),gr=n(` class. This feature can especially be helpful when deciding for which configuration the model
should be trained.`),Ze=h(),X=l("h2"),K=l("a"),Ee=l("span"),N(fs.$$.fragment),jr=h(),we=l("span"),_r=n("Benchmark best practices"),sa=h(),ws=l("p"),yr=n("This section lists a couple of best practices one should be aware of when benchmarking a model."),ea=h(),q=l("ul"),F=l("li"),kr=n(`Currently, only single device benchmarking is supported. When benchmarking on GPU, it is recommended that the user
specifies on which device the code should be run by setting the `),Te=l("code"),vr=n("CUDA_VISIBLE_DEVICES"),Er=n(` environment variable in the
shell, `),Be=l("em"),wr=n("e.g."),Tr=h(),$e=l("code"),Br=n("export CUDA_VISIBLE_DEVICES=0"),$r=n(" before running the code."),Ar=h(),A=l("li"),Pr=n("The option "),Ae=l("code"),Cr=n("no_multi_processing"),Fr=n(" should only be set to "),Pe=l("code"),Nr=n("True"),Mr=n(` for testing and debugging. To ensure accurate
memory measurement it is recommended to run each memory benchmark in a separate process by making sure
`),Ce=l("code"),Ir=n("no_multi_processing"),Or=n(" is set to "),Fe=l("code"),Sr=n("True"),Dr=n("."),qr=h(),Ne=l("li"),xr=n(`One should always state the environment information when sharing the results of a model benchmark. Results can vary
heavily between different GPU devices, library versions, etc., so that benchmark results on their own are not very
useful for the community.`),aa=h(),G=l("h2"),Z=l("a"),Me=l("span"),N(gs.$$.fragment),Rr=h(),Ie=l("span"),Lr=n("Sharing your benchmark"),na=h(),ss=l("p"),zr=n("Previously all available core models (10 at the time) have been benchmarked for "),Oe=l("em"),Ur=n("inference time"),Hr=n(`, across many different
settings: using PyTorch, with and without TorchScript, using TensorFlow, with and without XLA. All of those tests were
done across CPUs (except for TensorFlow XLA) and GPUs.`),ra=h(),x=l("p"),Vr=n("The approach is detailed in the "),js=l("a"),Xr=n("following blogpost"),Gr=n(` and the results are
available `),_s=l("a"),Wr=n("here"),Yr=n("."),la=h(),es=l("p"),Jr=n("With the new "),Se=l("em"),Qr=n("benchmark"),Kr=n(" tools, it is easier than ever to share your benchmark results with the community"),ta=h(),as=l("ul"),Ts=l("li"),ys=l("a"),Zr=n("PyTorch Benchmarking Results"),sl=n("."),el=h(),Bs=l("li"),ks=l("a"),al=n("TensorFlow Benchmarking Results"),nl=n("."),this.h()},l(e){const c=Ft('[data-svelte="svelte-1phssyn"]',document.head);d=t(c,"META",{name:!0,content:!0}),c.forEach(a),E=m(e),j=t(e,"H1",{class:!0});var vs=o(j);_=t(vs,"A",{id:!0,class:!0,href:!0});var De=o(_);z=t(De,"SPAN",{});var tl=o(z);M(B.$$.fragment,tl),tl.forEach(a),De.forEach(a),ts=m(vs),U=t(vs,"SPAN",{});var ol=o(U);H=r(ol,"Benchmarks"),ol.forEach(a),vs.forEach(a),$=m(e),M(C.$$.fragment,e),os=m(e),M(cs.$$.fragment,e),qe=m(e),Es=t(e,"P",{});var cl=o(Es);ja=r(cl,"Let\u2019s take a look at how \u{1F917} Transformers models can be benchmarked, best practices, and already available benchmarks."),cl.forEach(a),xe=m(e),W=t(e,"P",{});var ca=o(W);_a=r(ca,"A notebook explaining in more detail how to benchmark \u{1F917} Transformers models can be found "),ps=t(ca,"A",{href:!0,rel:!0});var pl=o(ps);ya=r(pl,"here"),pl.forEach(a),ka=r(ca,"."),ca.forEach(a),Re=m(e),V=t(e,"H2",{class:!0});var pa=o(V);Y=t(pa,"A",{id:!0,class:!0,href:!0});var hl=o(Y);Ps=t(hl,"SPAN",{});var ml=o(Ps);M(hs.$$.fragment,ml),ml.forEach(a),hl.forEach(a),va=m(pa),Cs=t(pa,"SPAN",{});var il=o(Cs);Ea=r(il,"How to benchmark \u{1F917} Transformers models"),il.forEach(a),pa.forEach(a),Le=m(e),k=t(e,"P",{});var T=o(k);wa=r(T,"The classes "),Fs=t(T,"CODE",{});var ul=o(Fs);Ta=r(ul,"PyTorchBenchmark"),ul.forEach(a),Ba=r(T,"and "),Ns=t(T,"CODE",{});var bl=o(Ns);$a=r(bl,"TensorFlowBenchmark"),bl.forEach(a),Aa=r(T,"allow to flexibly benchmark \u{1F917} Transformers models. The benchmark classes allow us to measure the "),Ms=t(T,"EM",{});var dl=o(Ms);Pa=r(dl,"peak memory usage"),dl.forEach(a),Ca=r(T," and "),Is=t(T,"EM",{});var fl=o(Is);Fa=r(fl,"required time"),fl.forEach(a),Na=r(T," for both "),Os=t(T,"EM",{});var gl=o(Os);Ma=r(gl,"inference"),gl.forEach(a),Ia=r(T," and "),Ss=t(T,"EM",{});var jl=o(Ss);Oa=r(jl,"training"),jl.forEach(a),Sa=r(T,"."),T.forEach(a),ze=m(e),M(J.$$.fragment,e),Ue=m(e),y=t(e,"P",{});var v=o(y);Da=r(v,"The benchmark classes "),Ds=t(v,"CODE",{});var _l=o(Ds);qa=r(_l,"PyTorchBenchmark"),_l.forEach(a),xa=r(v,"and "),qs=t(v,"CODE",{});var yl=o(qs);Ra=r(yl,"TensorFlowBenchmark"),yl.forEach(a),La=r(v,"expect an object of type "),xs=t(v,"CODE",{});var kl=o(xs);za=r(kl,"PyTorchBenchmarkArguments"),kl.forEach(a),Ua=r(v,`and
`),Rs=t(v,"CODE",{});var vl=o(Rs);Ha=r(vl,"TensorFlowBenchmarkArguments"),vl.forEach(a),Va=r(v," respectively, for instantiation. "),Ls=t(v,"CODE",{});var El=o(Ls);Xa=r(El,"PyTorchBenchmarkArguments"),El.forEach(a),Ga=r(v,"and "),zs=t(v,"CODE",{});var wl=o(zs);Wa=r(wl,"TensorFlowBenchmarkArguments"),wl.forEach(a),Ya=r(v,"are data classes and contain all relevant configurations for their corresponding benchmark class. In the following example, it is shown how a BERT model of type "),Us=t(v,"EM",{});var Tl=o(Us);Ja=r(Tl,"bert-base-cased"),Tl.forEach(a),Qa=r(v," can be benchmarked."),v.forEach(a),He=m(e),M(ms.$$.fragment,e),Ve=m(e),i=t(e,"P",{});var f=o(i);Ka=r(f,"Here, three arguments are given to the benchmark argument data classes, namely "),Hs=t(f,"CODE",{});var Bl=o(Hs);Za=r(Bl,"models"),Bl.forEach(a),sn=r(f,", "),Vs=t(f,"CODE",{});var $l=o(Vs);en=r($l,"batch_sizes"),$l.forEach(a),an=r(f,`, and
`),Xs=t(f,"CODE",{});var Al=o(Xs);nn=r(Al,"sequence_lengths"),Al.forEach(a),rn=r(f,". The argument "),Gs=t(f,"CODE",{});var Pl=o(Gs);ln=r(Pl,"models"),Pl.forEach(a),tn=r(f," is required and expects a "),Ws=t(f,"CODE",{});var Cl=o(Ws);on=r(Cl,"list"),Cl.forEach(a),cn=r(f,` of model identifiers from the
`),is=t(f,"A",{href:!0,rel:!0});var Fl=o(is);pn=r(Fl,"model hub"),Fl.forEach(a),hn=r(f," The "),Ys=t(f,"CODE",{});var Nl=o(Ys);mn=r(Nl,"list"),Nl.forEach(a),un=r(f," arguments "),Js=t(f,"CODE",{});var Ml=o(Js);bn=r(Ml,"batch_sizes"),Ml.forEach(a),dn=r(f," and "),Qs=t(f,"CODE",{});var Il=o(Qs);fn=r(Il,"sequence_lengths"),Il.forEach(a),gn=r(f,` define
the size of the `),Ks=t(f,"CODE",{});var Ol=o(Ks);jn=r(Ol,"input_ids"),Ol.forEach(a),_n=r(f,` on which the model is benchmarked. There are many more parameters that can be configured
via the benchmark argument data classes. For more detail on these one can either directly consult the files
`),Zs=t(f,"CODE",{});var Sl=o(Zs);yn=r(Sl,"src/transformers/benchmark/benchmark_args_utils.py"),Sl.forEach(a),kn=r(f,", "),se=t(f,"CODE",{});var Dl=o(se);vn=r(Dl,"src/transformers/benchmark/benchmark_args.py"),Dl.forEach(a),En=r(f,` (for PyTorch)
and `),ee=t(f,"CODE",{});var ql=o(ee);wn=r(ql,"src/transformers/benchmark/benchmark_args_tf.py"),ql.forEach(a),Tn=r(f,` (for Tensorflow). Alternatively, running the following shell
commands from root will print out a descriptive list of all configurable parameters for PyTorch and Tensorflow
respectively.`),f.forEach(a),Xe=m(e),M(us.$$.fragment,e),Ge=m(e),Q=t(e,"P",{});var ha=o(Q);Bn=r(ha,"An instantiated benchmark object can then simply be run by calling "),ae=t(ha,"CODE",{});var xl=o(ae);$n=r(xl,"benchmark.run()"),xl.forEach(a),An=r(ha,"."),ha.forEach(a),We=m(e),M(bs.$$.fragment,e),Ye=m(e),u=t(e,"P",{});var g=o(u);Pn=r(g,"By default, the "),ne=t(g,"EM",{});var Rl=o(ne);Cn=r(Rl,"time"),Rl.forEach(a),Fn=r(g," and the "),re=t(g,"EM",{});var Ll=o(re);Nn=r(Ll,"required memory"),Ll.forEach(a),Mn=r(g," for "),le=t(g,"EM",{});var zl=o(le);In=r(zl,"inference"),zl.forEach(a),On=r(g,` are benchmarked. In the example output above the first
two sections show the result corresponding to `),te=t(g,"EM",{});var Ul=o(te);Sn=r(Ul,"inference time"),Ul.forEach(a),Dn=r(g," and "),oe=t(g,"EM",{});var Hl=o(oe);qn=r(Hl,"inference memory"),Hl.forEach(a),xn=r(g,`. In addition, all relevant
information about the computing environment, `),ce=t(g,"EM",{});var Vl=o(ce);Rn=r(Vl,"e.g."),Vl.forEach(a),Ln=r(g,` the GPU type, the system, the library versions, etc\u2026 are printed
out in the third section under `),pe=t(g,"EM",{});var Xl=o(pe);zn=r(Xl,"ENVIRONMENT INFORMATION"),Xl.forEach(a),Un=r(g,". This information can optionally be saved in a "),he=t(g,"EM",{});var Gl=o(he);Hn=r(Gl,".csv"),Gl.forEach(a),Vn=r(g,` file
when adding the argument `),me=t(g,"CODE",{});var Wl=o(me);Xn=r(Wl,"save_to_csv=True"),Wl.forEach(a),Gn=r(g," to "),ie=t(g,"CODE",{});var Yl=o(ie);Wn=r(Yl,"PyTorchBenchmarkArguments"),Yl.forEach(a),Yn=r(g,`and
`),ue=t(g,"CODE",{});var Jl=o(ue);Jn=r(Jl,"TensorFlowBenchmarkArguments"),Jl.forEach(a),Qn=r(g,`respectively. In this case, every section is saved in a separate
`),be=t(g,"EM",{});var Ql=o(be);Kn=r(Ql,".csv"),Ql.forEach(a),Zn=r(g," file. The path to each "),de=t(g,"EM",{});var Kl=o(de);sr=r(Kl,".csv"),Kl.forEach(a),er=r(g," file can optionally be defined via the argument data classes."),g.forEach(a),Je=m(e),P=t(e,"P",{});var ns=o(P);ar=r(ns,"Instead of benchmarking pre-trained models via their model identifier, "),fe=t(ns,"EM",{});var Zl=o(fe);nr=r(Zl,"e.g."),Zl.forEach(a),rr=m(ns),ge=t(ns,"CODE",{});var st=o(ge);lr=r(st,"bert-base-uncased"),st.forEach(a),tr=r(ns,`, the user can
alternatively benchmark an arbitrary configuration of any available model class. In this case, a `),je=t(ns,"CODE",{});var et=o(je);or=r(et,"list"),et.forEach(a),cr=r(ns,` of
configurations must be inserted with the benchmark args as follows.`),ns.forEach(a),Qe=m(e),M(ds.$$.fragment,e),Ke=m(e),w=t(e,"P",{});var R=o(w);pr=r(R,"Again, "),_e=t(R,"EM",{});var at=o(_e);hr=r(at,"inference time"),at.forEach(a),mr=r(R," and "),ye=t(R,"EM",{});var nt=o(ye);ir=r(nt,"required memory"),nt.forEach(a),ur=r(R," for "),ke=t(R,"EM",{});var rt=o(ke);br=r(rt,"inference"),rt.forEach(a),dr=r(R,` are measured, but this time for customized configurations
of the `),ve=t(R,"CODE",{});var lt=o(ve);fr=r(lt,"BertModel"),lt.forEach(a),gr=r(R,` class. This feature can especially be helpful when deciding for which configuration the model
should be trained.`),R.forEach(a),Ze=m(e),X=t(e,"H2",{class:!0});var ma=o(X);K=t(ma,"A",{id:!0,class:!0,href:!0});var tt=o(K);Ee=t(tt,"SPAN",{});var ot=o(Ee);M(fs.$$.fragment,ot),ot.forEach(a),tt.forEach(a),jr=m(ma),we=t(ma,"SPAN",{});var ct=o(we);_r=r(ct,"Benchmark best practices"),ct.forEach(a),ma.forEach(a),sa=m(e),ws=t(e,"P",{});var pt=o(ws);yr=r(pt,"This section lists a couple of best practices one should be aware of when benchmarking a model."),pt.forEach(a),ea=m(e),q=t(e,"UL",{});var $s=o(q);F=t($s,"LI",{});var rs=o(F);kr=r(rs,`Currently, only single device benchmarking is supported. When benchmarking on GPU, it is recommended that the user
specifies on which device the code should be run by setting the `),Te=t(rs,"CODE",{});var ht=o(Te);vr=r(ht,"CUDA_VISIBLE_DEVICES"),ht.forEach(a),Er=r(rs,` environment variable in the
shell, `),Be=t(rs,"EM",{});var mt=o(Be);wr=r(mt,"e.g."),mt.forEach(a),Tr=m(rs),$e=t(rs,"CODE",{});var it=o($e);Br=r(it,"export CUDA_VISIBLE_DEVICES=0"),it.forEach(a),$r=r(rs," before running the code."),rs.forEach(a),Ar=m($s),A=t($s,"LI",{});var L=o(A);Pr=r(L,"The option "),Ae=t(L,"CODE",{});var ut=o(Ae);Cr=r(ut,"no_multi_processing"),ut.forEach(a),Fr=r(L," should only be set to "),Pe=t(L,"CODE",{});var bt=o(Pe);Nr=r(bt,"True"),bt.forEach(a),Mr=r(L,` for testing and debugging. To ensure accurate
memory measurement it is recommended to run each memory benchmark in a separate process by making sure
`),Ce=t(L,"CODE",{});var dt=o(Ce);Ir=r(dt,"no_multi_processing"),dt.forEach(a),Or=r(L," is set to "),Fe=t(L,"CODE",{});var ft=o(Fe);Sr=r(ft,"True"),ft.forEach(a),Dr=r(L,"."),L.forEach(a),qr=m($s),Ne=t($s,"LI",{});var gt=o(Ne);xr=r(gt,`One should always state the environment information when sharing the results of a model benchmark. Results can vary
heavily between different GPU devices, library versions, etc., so that benchmark results on their own are not very
useful for the community.`),gt.forEach(a),$s.forEach(a),aa=m(e),G=t(e,"H2",{class:!0});var ia=o(G);Z=t(ia,"A",{id:!0,class:!0,href:!0});var jt=o(Z);Me=t(jt,"SPAN",{});var _t=o(Me);M(gs.$$.fragment,_t),_t.forEach(a),jt.forEach(a),Rr=m(ia),Ie=t(ia,"SPAN",{});var yt=o(Ie);Lr=r(yt,"Sharing your benchmark"),yt.forEach(a),ia.forEach(a),na=m(e),ss=t(e,"P",{});var ua=o(ss);zr=r(ua,"Previously all available core models (10 at the time) have been benchmarked for "),Oe=t(ua,"EM",{});var kt=o(Oe);Ur=r(kt,"inference time"),kt.forEach(a),Hr=r(ua,`, across many different
settings: using PyTorch, with and without TorchScript, using TensorFlow, with and without XLA. All of those tests were
done across CPUs (except for TensorFlow XLA) and GPUs.`),ua.forEach(a),ra=m(e),x=t(e,"P",{});var As=o(x);Vr=r(As,"The approach is detailed in the "),js=t(As,"A",{href:!0,rel:!0});var vt=o(js);Xr=r(vt,"following blogpost"),vt.forEach(a),Gr=r(As,` and the results are
available `),_s=t(As,"A",{href:!0,rel:!0});var Et=o(_s);Wr=r(Et,"here"),Et.forEach(a),Yr=r(As,"."),As.forEach(a),la=m(e),es=t(e,"P",{});var ba=o(es);Jr=r(ba,"With the new "),Se=t(ba,"EM",{});var wt=o(Se);Qr=r(wt,"benchmark"),wt.forEach(a),Kr=r(ba," tools, it is easier than ever to share your benchmark results with the community"),ba.forEach(a),ta=m(e),as=t(e,"UL",{});var da=o(as);Ts=t(da,"LI",{});var rl=o(Ts);ys=t(rl,"A",{href:!0,rel:!0});var Tt=o(ys);Zr=r(Tt,"PyTorch Benchmarking Results"),Tt.forEach(a),sl=r(rl,"."),rl.forEach(a),el=m(da),Bs=t(da,"LI",{});var ll=o(Bs);ks=t(ll,"A",{href:!0,rel:!0});var Bt=o(ks);al=r(Bt,"TensorFlow Benchmarking Results"),Bt.forEach(a),nl=r(ll,"."),ll.forEach(a),da.forEach(a),this.h()},h(){b(d,"name","hf:doc:metadata"),b(d,"content",JSON.stringify(St)),b(_,"id","benchmarks"),b(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(_,"href","#benchmarks"),b(j,"class","relative group"),b(ps,"href","https://github.com/huggingface/notebooks/tree/master/examples/benchmark.ipynb"),b(ps,"rel","nofollow"),b(Y,"id","how-to-benchmark-transformers-models"),b(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Y,"href","#how-to-benchmark-transformers-models"),b(V,"class","relative group"),b(is,"href","https://huggingface.co/models"),b(is,"rel","nofollow"),b(K,"id","benchmark-best-practices"),b(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(K,"href","#benchmark-best-practices"),b(X,"class","relative group"),b(Z,"id","sharing-your-benchmark"),b(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Z,"href","#sharing-your-benchmark"),b(G,"class","relative group"),b(js,"href","https://medium.com/huggingface/benchmarking-transformers-pytorch-and-tensorflow-e2917fb891c2"),b(js,"rel","nofollow"),b(_s,"href","https://docs.google.com/spreadsheets/d/1sryqufw2D0XlUH4sq3e9Wnxu5EAQkaohzrJbd5HdQ_w/edit?usp=sharing"),b(_s,"rel","nofollow"),b(ys,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/benchmarking/README.md"),b(ys,"rel","nofollow"),b(ks,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/benchmarking/README.md"),b(ks,"rel","nofollow")},m(e,c){s(document.head,d),p(e,E,c),p(e,j,c),s(j,_),s(_,z),I(B,z,null),s(j,ts),s(j,U),s(U,H),p(e,$,c),I(C,e,c),p(e,os,c),I(cs,e,c),p(e,qe,c),p(e,Es,c),s(Es,ja),p(e,xe,c),p(e,W,c),s(W,_a),s(W,ps),s(ps,ya),s(W,ka),p(e,Re,c),p(e,V,c),s(V,Y),s(Y,Ps),I(hs,Ps,null),s(V,va),s(V,Cs),s(Cs,Ea),p(e,Le,c),p(e,k,c),s(k,wa),s(k,Fs),s(Fs,Ta),s(k,Ba),s(k,Ns),s(Ns,$a),s(k,Aa),s(k,Ms),s(Ms,Pa),s(k,Ca),s(k,Is),s(Is,Fa),s(k,Na),s(k,Os),s(Os,Ma),s(k,Ia),s(k,Ss),s(Ss,Oa),s(k,Sa),p(e,ze,c),I(J,e,c),p(e,Ue,c),p(e,y,c),s(y,Da),s(y,Ds),s(Ds,qa),s(y,xa),s(y,qs),s(qs,Ra),s(y,La),s(y,xs),s(xs,za),s(y,Ua),s(y,Rs),s(Rs,Ha),s(y,Va),s(y,Ls),s(Ls,Xa),s(y,Ga),s(y,zs),s(zs,Wa),s(y,Ya),s(y,Us),s(Us,Ja),s(y,Qa),p(e,He,c),I(ms,e,c),p(e,Ve,c),p(e,i,c),s(i,Ka),s(i,Hs),s(Hs,Za),s(i,sn),s(i,Vs),s(Vs,en),s(i,an),s(i,Xs),s(Xs,nn),s(i,rn),s(i,Gs),s(Gs,ln),s(i,tn),s(i,Ws),s(Ws,on),s(i,cn),s(i,is),s(is,pn),s(i,hn),s(i,Ys),s(Ys,mn),s(i,un),s(i,Js),s(Js,bn),s(i,dn),s(i,Qs),s(Qs,fn),s(i,gn),s(i,Ks),s(Ks,jn),s(i,_n),s(i,Zs),s(Zs,yn),s(i,kn),s(i,se),s(se,vn),s(i,En),s(i,ee),s(ee,wn),s(i,Tn),p(e,Xe,c),I(us,e,c),p(e,Ge,c),p(e,Q,c),s(Q,Bn),s(Q,ae),s(ae,$n),s(Q,An),p(e,We,c),I(bs,e,c),p(e,Ye,c),p(e,u,c),s(u,Pn),s(u,ne),s(ne,Cn),s(u,Fn),s(u,re),s(re,Nn),s(u,Mn),s(u,le),s(le,In),s(u,On),s(u,te),s(te,Sn),s(u,Dn),s(u,oe),s(oe,qn),s(u,xn),s(u,ce),s(ce,Rn),s(u,Ln),s(u,pe),s(pe,zn),s(u,Un),s(u,he),s(he,Hn),s(u,Vn),s(u,me),s(me,Xn),s(u,Gn),s(u,ie),s(ie,Wn),s(u,Yn),s(u,ue),s(ue,Jn),s(u,Qn),s(u,be),s(be,Kn),s(u,Zn),s(u,de),s(de,sr),s(u,er),p(e,Je,c),p(e,P,c),s(P,ar),s(P,fe),s(fe,nr),s(P,rr),s(P,ge),s(ge,lr),s(P,tr),s(P,je),s(je,or),s(P,cr),p(e,Qe,c),I(ds,e,c),p(e,Ke,c),p(e,w,c),s(w,pr),s(w,_e),s(_e,hr),s(w,mr),s(w,ye),s(ye,ir),s(w,ur),s(w,ke),s(ke,br),s(w,dr),s(w,ve),s(ve,fr),s(w,gr),p(e,Ze,c),p(e,X,c),s(X,K),s(K,Ee),I(fs,Ee,null),s(X,jr),s(X,we),s(we,_r),p(e,sa,c),p(e,ws,c),s(ws,yr),p(e,ea,c),p(e,q,c),s(q,F),s(F,kr),s(F,Te),s(Te,vr),s(F,Er),s(F,Be),s(Be,wr),s(F,Tr),s(F,$e),s($e,Br),s(F,$r),s(q,Ar),s(q,A),s(A,Pr),s(A,Ae),s(Ae,Cr),s(A,Fr),s(A,Pe),s(Pe,Nr),s(A,Mr),s(A,Ce),s(Ce,Ir),s(A,Or),s(A,Fe),s(Fe,Sr),s(A,Dr),s(q,qr),s(q,Ne),s(Ne,xr),p(e,aa,c),p(e,G,c),s(G,Z),s(Z,Me),I(gs,Me,null),s(G,Rr),s(G,Ie),s(Ie,Lr),p(e,na,c),p(e,ss,c),s(ss,zr),s(ss,Oe),s(Oe,Ur),s(ss,Hr),p(e,ra,c),p(e,x,c),s(x,Vr),s(x,js),s(js,Xr),s(x,Gr),s(x,_s),s(_s,Wr),s(x,Yr),p(e,la,c),p(e,es,c),s(es,Jr),s(es,Se),s(Se,Qr),s(es,Kr),p(e,ta,c),p(e,as,c),s(as,Ts),s(Ts,ys),s(ys,Zr),s(Ts,sl),s(as,el),s(as,Bs),s(Bs,ks),s(ks,al),s(Bs,nl),oa=!0},p(e,[c]){const vs={};c&2&&(vs.$$scope={dirty:c,ctx:e}),C.$set(vs);const De={};c&2&&(De.$$scope={dirty:c,ctx:e}),J.$set(De)},i(e){oa||(O(B.$$.fragment,e),O(C.$$.fragment,e),O(cs.$$.fragment,e),O(hs.$$.fragment,e),O(J.$$.fragment,e),O(ms.$$.fragment,e),O(us.$$.fragment,e),O(bs.$$.fragment,e),O(ds.$$.fragment,e),O(fs.$$.fragment,e),O(gs.$$.fragment,e),oa=!0)},o(e){S(B.$$.fragment,e),S(C.$$.fragment,e),S(cs.$$.fragment,e),S(hs.$$.fragment,e),S(J.$$.fragment,e),S(ms.$$.fragment,e),S(us.$$.fragment,e),S(bs.$$.fragment,e),S(ds.$$.fragment,e),S(fs.$$.fragment,e),S(gs.$$.fragment,e),oa=!1},d(e){a(d),e&&a(E),e&&a(j),D(B),e&&a($),D(C,e),e&&a(os),D(cs,e),e&&a(qe),e&&a(Es),e&&a(xe),e&&a(W),e&&a(Re),e&&a(V),D(hs),e&&a(Le),e&&a(k),e&&a(ze),D(J,e),e&&a(Ue),e&&a(y),e&&a(He),D(ms,e),e&&a(Ve),e&&a(i),e&&a(Xe),D(us,e),e&&a(Ge),e&&a(Q),e&&a(We),D(bs,e),e&&a(Ye),e&&a(u),e&&a(Je),e&&a(P),e&&a(Qe),D(ds,e),e&&a(Ke),e&&a(w),e&&a(Ze),e&&a(X),D(fs),e&&a(sa),e&&a(ws),e&&a(ea),e&&a(q),e&&a(aa),e&&a(G),D(gs),e&&a(na),e&&a(ss),e&&a(ra),e&&a(x),e&&a(la),e&&a(es),e&&a(ta),e&&a(as)}}}const St={local:"benchmarks",sections:[{local:"how-to-benchmark-transformers-models",title:"How to benchmark \u{1F917} Transformers models"},{local:"benchmark-best-practices",title:"Benchmark best practices"},{local:"sharing-your-benchmark",title:"Sharing your benchmark"}],title:"Benchmarks"};function Dt(ls,d,E){let{fw:j}=d;return ls.$$set=_=>{"fw"in _&&E(0,j=_.fw)},[j]}class Ht extends At{constructor(d){super();Pt(this,d,Dt,Ot,Ct,{fw:0})}}export{Ht as default,St as metadata};
