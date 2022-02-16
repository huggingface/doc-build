import{S as vt,i as wt,s as Tt,e as l,k as h,w as z,t as n,L as Bt,c as t,d as a,m,a as c,x as U,h as r,b,J as s,g as o,y as V,q as H,o as X,B as G}from"../../chunks/vendor-e859c359.js";import{T as $t}from"../../chunks/Tip-edc75249.js";import{I as ia}from"../../chunks/IconCopyLink-5fae3b20.js";import{C as ua}from"../../chunks/CodeBlockFw-cd1fa549.js";import"../../chunks/CopyButton-77addb3d.js";function At(Bs){let j,C,_,k,O,T,ls,S;return{c(){j=l("p"),C=n("Hereby, "),_=l("em"),k=n("inference"),O=n(" is defined by a single forward pass, and "),T=l("em"),ls=n("training"),S=n(` is defined by a single forward pass and
backward pass.`)},l(q){j=t(q,"P",{});var B=c(j);C=r(B,"Hereby, "),_=t(B,"EM",{});var D=c(_);k=r(D,"inference"),D.forEach(a),O=r(B," is defined by a single forward pass, and "),T=t(B,"EM",{});var ys=c(T);ls=r(ys,"training"),ys.forEach(a),S=r(B,` is defined by a single forward pass and
backward pass.`),B.forEach(a)},m(q,B){o(q,j,B),s(j,C),s(j,_),s(_,k),s(j,O),s(j,T),s(T,ls),s(j,S)},d(q){q&&a(j)}}}function Pt(Bs){let j,C,_,k,O,T,ls,S,q,B,D,ys,Oe,W,ba,ts,da,fa,Se,R,Y,$s,cs,ja,As,ga,qe,y,_a,Ps,ya,Ea,Cs,ka,va,Ns,wa,Ta,Fs,Ba,$a,Ms,Aa,Pa,Is,Ca,Na,De,J,Re,g,Fa,Os,Ma,Ia,Ss,Oa,Sa,qs,qa,Da,Ds,Ra,xa,Rs,La,za,xs,Ua,Va,Ls,Ha,Xa,xe,ps,Le,i,Ga,zs,Wa,Ya,Us,Ja,Qa,Vs,Ka,Za,Hs,sn,en,Xs,an,nn,os,rn,ln,Gs,tn,cn,Ws,pn,on,Ys,hn,mn,Js,un,bn,Qs,dn,fn,Ks,jn,gn,Zs,_n,yn,ze,hs,Ue,Q,En,se,kn,vn,Ve,ms,He,u,wn,ee,Tn,Bn,ae,$n,An,ne,Pn,Cn,re,Nn,Fn,le,Mn,In,te,On,Sn,ce,qn,Dn,pe,Rn,xn,oe,Ln,zn,he,Un,Vn,me,Hn,Xn,ie,Gn,Wn,ue,Yn,Jn,Xe,A,Qn,be,Kn,Zn,de,sr,er,fe,ar,nr,Ge,is,We,v,rr,je,lr,tr,ge,cr,pr,_e,or,hr,ye,mr,ir,Ye,x,K,Ee,us,ur,ke,br,Je,Es,dr,Qe,N,P,fr,ve,jr,gr,we,_r,yr,Te,Er,kr,vr,$,wr,Be,Tr,Br,$e,$r,Ar,Ae,Pr,Cr,Pe,Nr,Fr,Mr,Ce,Ir,Ke,L,Z,Ne,bs,Or,Fe,Sr,Ze,ss,qr,Me,Dr,Rr,sa,F,xr,ds,Lr,zr,fs,Ur,Vr,ea,es,Hr,Ie,Xr,Gr,aa,as,ks,js,Wr,Yr,Jr,vs,gs,Qr,Kr,na;return T=new ia({}),cs=new ia({}),J=new $t({props:{$$slots:{default:[At]},$$scope:{ctx:Bs}}}),ps=new ua({props:{pt:{code:`from transformers import PyTorchBenchmark, PyTorchBenchmarkArguments

args = PyTorchBenchmarkArguments(models=["bert-base-uncased"], batch_sizes=[8], sequence_lengths=[8, 32, 128, 512])
benchmark = PyTorchBenchmark(args)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PyTorchBenchmark, PyTorchBenchmarkArguments

<span class="hljs-meta">&gt;&gt;&gt; </span>args = PyTorchBenchmarkArguments(models=[<span class="hljs-string">&quot;bert-base-uncased&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark = PyTorchBenchmark(args)`},tf:{code:`from transformers import TensorFlowBenchmark, TensorFlowBenchmarkArguments

args = TensorFlowBenchmarkArguments(models=["bert-base-uncased"], batch_sizes=[8], sequence_lengths=[8, 32, 128, 512])
benchmark = TensorFlowBenchmark(args)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TensorFlowBenchmark, TensorFlowBenchmarkArguments

<span class="hljs-meta">&gt;&gt;&gt; </span>args = TensorFlowBenchmarkArguments(models=[<span class="hljs-string">&quot;bert-base-uncased&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark = TensorFlowBenchmark(args)`}}}),hs=new ua({props:{pt:{code:"python examples/pytorch/benchmarking/run_benchmark.py --help",highlighted:'python examples/pytorch/benchmarking/run_benchmark.py --<span class="hljs-built_in">help</span>'},tf:{code:"python examples/tensorflow/benchmarking/run_benchmark_tf.py --help",highlighted:'python examples/tensorflow/benchmarking/run_benchmark_tf.py --<span class="hljs-built_in">help</span>'}}}),ms=new ua({props:{pt:{code:`results = benchmark.run()
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
- use_tpu: <span class="hljs-literal">False</span>`}}}),is=new ua({props:{pt:{code:`from transformers import PyTorchBenchmark, PyTorchBenchmarkArguments, BertConfig

args = PyTorchBenchmarkArguments(models=["bert-base", "bert-384-hid", "bert-6-lay"], batch_sizes=[8], sequence_lengths=[8, 32, 128, 512])
config_base = BertConfig()
config_384_hid = BertConfig(hidden_size=384)
config_6_lay = BertConfig(num_hidden_layers=6)

benchmark = PyTorchBenchmark(args, configs=[config_base, config_384_hid, config_6_lay])
benchmark.run()


`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PyTorchBenchmark, PyTorchBenchmarkArguments, BertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>args = PyTorchBenchmarkArguments(models=[<span class="hljs-string">&quot;bert-base&quot;</span>, <span class="hljs-string">&quot;bert-384-hid&quot;</span>, <span class="hljs-string">&quot;bert-6-lay&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>])
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

args = TensorFlowBenchmarkArguments(models=["bert-base", "bert-384-hid", "bert-6-lay"], batch_sizes=[8], sequence_lengths=[8, 32, 128, 512])
config_base = BertConfig()
config_384_hid = BertConfig(hidden_size=384)
config_6_lay = BertConfig(num_hidden_layers=6)

benchmark = TensorFlowBenchmark(args, configs=[config_base, config_384_hid, config_6_lay])
benchmark.run()


`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TensorFlowBenchmark, TensorFlowBenchmarkArguments, BertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>args = TensorFlowBenchmarkArguments(models=[<span class="hljs-string">&quot;bert-base&quot;</span>, <span class="hljs-string">&quot;bert-384-hid&quot;</span>, <span class="hljs-string">&quot;bert-6-lay&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>])
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
- use_tpu: <span class="hljs-literal">False</span>`}}}),us=new ia({}),bs=new ia({}),{c(){j=l("meta"),C=h(),_=l("h1"),k=l("a"),O=l("span"),z(T.$$.fragment),ls=h(),S=l("span"),q=n("Benchmarks"),B=h(),D=l("p"),ys=n("Let\u2019s take a look at how \u{1F917} Transformer models can be benchmarked, best practices, and already available benchmarks."),Oe=h(),W=l("p"),ba=n("A notebook explaining in more detail how to benchmark \u{1F917} Transformer models can be found "),ts=l("a"),da=n("here"),fa=n("."),Se=h(),R=l("h2"),Y=l("a"),$s=l("span"),z(cs.$$.fragment),ja=h(),As=l("span"),ga=n("How to benchmark \u{1F917} Transformer models"),qe=h(),y=l("p"),_a=n("The classes "),Ps=l("code"),ya=n("PyTorchBenchmark"),Ea=n(" and "),Cs=l("code"),ka=n("TensorFlowBenchmark"),va=n(" allow to flexibly benchmark \u{1F917} Transformer models. The benchmark classes allow us to measure the "),Ns=l("em"),wa=n("peak memory usage"),Ta=n(" and "),Fs=l("em"),Ba=n("required time"),$a=n(" for both "),Ms=l("em"),Aa=n("inference"),Pa=n(" and "),Is=l("em"),Ca=n("training"),Na=n("."),De=h(),z(J.$$.fragment),Re=h(),g=l("p"),Fa=n("The benchmark classes "),Os=l("code"),Ma=n("PyTorchBenchmark"),Ia=n(" and "),Ss=l("code"),Oa=n("TensorFlowBenchmark"),Sa=n(" expect an object of type "),qs=l("code"),qa=n("PyTorchBenchmarkArguments"),Da=n(` and
`),Ds=l("code"),Ra=n("TensorFlowBenchmarkArguments"),xa=n(", respectively, for instantiation. "),Rs=l("code"),La=n("PyTorchBenchmarkArguments"),za=n(" and "),xs=l("code"),Ua=n("TensorFlowBenchmarkArguments"),Va=n(" are data classes and contain all relevant configurations for their corresponding benchmark class. In the following example, it is shown how a BERT model of type "),Ls=l("em"),Ha=n("bert-base-cased"),Xa=n(" can be benchmarked."),xe=h(),z(ps.$$.fragment),Le=h(),i=l("p"),Ga=n("Here, three arguments are given to the benchmark argument data classes, namely "),zs=l("code"),Wa=n("models"),Ya=n(", "),Us=l("code"),Ja=n("batch_sizes"),Qa=n(`, and
`),Vs=l("code"),Ka=n("sequence_lengths"),Za=n(". The argument "),Hs=l("code"),sn=n("models"),en=n(" is required and expects a "),Xs=l("code"),an=n("list"),nn=n(` of model identifiers from the
`),os=l("a"),rn=n("model hub"),ln=n(" The "),Gs=l("code"),tn=n("list"),cn=n(" arguments "),Ws=l("code"),pn=n("batch_sizes"),on=n(" and "),Ys=l("code"),hn=n("sequence_lengths"),mn=n(` define
the size of the `),Js=l("code"),un=n("input_ids"),bn=n(` on which the model is benchmarked. There are many more parameters that can be configured
via the benchmark argument data classes. For more detail on these one can either directly consult the files
`),Qs=l("code"),dn=n("src/transformers/benchmark/benchmark_args_utils.py"),fn=n(", "),Ks=l("code"),jn=n("src/transformers/benchmark/benchmark_args.py"),gn=n(` (for PyTorch)
and `),Zs=l("code"),_n=n("src/transformers/benchmark/benchmark_args_tf.py"),yn=n(` (for Tensorflow). Alternatively, running the following shell
commands from root will print out a descriptive list of all configurable parameters for PyTorch and Tensorflow
respectively.`),ze=h(),z(hs.$$.fragment),Ue=h(),Q=l("p"),En=n("An instantiated benchmark object can then simply be run by calling "),se=l("code"),kn=n("benchmark.run()"),vn=n("."),Ve=h(),z(ms.$$.fragment),He=h(),u=l("p"),wn=n("By default, the "),ee=l("em"),Tn=n("time"),Bn=n(" and the "),ae=l("em"),$n=n("required memory"),An=n(" for "),ne=l("em"),Pn=n("inference"),Cn=n(` are benchmarked. In the example output above the first
two sections show the result corresponding to `),re=l("em"),Nn=n("inference time"),Fn=n(" and "),le=l("em"),Mn=n("inference memory"),In=n(`. In addition, all relevant
information about the computing environment, `),te=l("em"),On=n("e.g."),Sn=n(` the GPU type, the system, the library versions, etc\u2026 are printed
out in the third section under `),ce=l("em"),qn=n("ENVIRONMENT INFORMATION"),Dn=n(". This information can optionally be saved in a "),pe=l("em"),Rn=n(".csv"),xn=n(` file
when adding the argument `),oe=l("code"),Ln=n("save_to_csv=True"),zn=n(" to "),he=l("code"),Un=n("PyTorchBenchmarkArguments"),Vn=n(` and
`),me=l("code"),Hn=n("TensorFlowBenchmarkArguments"),Xn=n(` respectively. In this case, every section is saved in a separate
`),ie=l("em"),Gn=n(".csv"),Wn=n(" file. The path to each "),ue=l("em"),Yn=n(".csv"),Jn=n(" file can optionally be defined via the argument data classes."),Xe=h(),A=l("p"),Qn=n("Instead of benchmarking pre-trained models via their model identifier, "),be=l("em"),Kn=n("e.g."),Zn=h(),de=l("code"),sr=n("bert-base-uncased"),er=n(`, the user can
alternatively benchmark an arbitrary configuration of any available model class. In this case, a `),fe=l("code"),ar=n("list"),nr=n(` of
configurations must be inserted with the benchmark args as follows.`),Ge=h(),z(is.$$.fragment),We=h(),v=l("p"),rr=n("Again, "),je=l("em"),lr=n("inference time"),tr=n(" and "),ge=l("em"),cr=n("required memory"),pr=n(" for "),_e=l("em"),or=n("inference"),hr=n(` are measured, but this time for customized configurations
of the `),ye=l("code"),mr=n("BertModel"),ir=n(` class. This feature can especially be helpful when deciding for which configuration the model
should be trained.`),Ye=h(),x=l("h2"),K=l("a"),Ee=l("span"),z(us.$$.fragment),ur=h(),ke=l("span"),br=n("Benchmark best practices"),Je=h(),Es=l("p"),dr=n("This section lists a couple of best practices one should be aware of when benchmarking a model."),Qe=h(),N=l("ul"),P=l("li"),fr=n(`Currently, only single device benchmarking is supported. When benchmarking on GPU, it is recommended that the user
specifies on which device the code should be run by setting the `),ve=l("code"),jr=n("CUDA_VISIBLE_DEVICES"),gr=n(` environment variable in the
shell, `),we=l("em"),_r=n("e.g."),yr=h(),Te=l("code"),Er=n("export CUDA_VISIBLE_DEVICES=0"),kr=n(" before running the code."),vr=h(),$=l("li"),wr=n("The option "),Be=l("code"),Tr=n("no_multi_processing"),Br=n(" should only be set to "),$e=l("code"),$r=n("True"),Ar=n(` for testing and debugging. To ensure accurate
memory measurement it is recommended to run each memory benchmark in a separate process by making sure
`),Ae=l("code"),Pr=n("no_multi_processing"),Cr=n(" is set to "),Pe=l("code"),Nr=n("True"),Fr=n("."),Mr=h(),Ce=l("li"),Ir=n(`One should always state the environment information when sharing the results of a model benchmark. Results can vary
heavily between different GPU devices, library versions, etc., so that benchmark results on their own are not very
useful for the community.`),Ke=h(),L=l("h2"),Z=l("a"),Ne=l("span"),z(bs.$$.fragment),Or=h(),Fe=l("span"),Sr=n("Sharing your benchmark"),Ze=h(),ss=l("p"),qr=n("Previously all available core models (10 at the time) have been benchmarked for "),Me=l("em"),Dr=n("inference time"),Rr=n(`, across many different
settings: using PyTorch, with and without TorchScript, using TensorFlow, with and without XLA. All of those tests were
done across CPUs (except for TensorFlow XLA) and GPUs.`),sa=h(),F=l("p"),xr=n("The approach is detailed in the "),ds=l("a"),Lr=n("following blogpost"),zr=n(` and the results are
available `),fs=l("a"),Ur=n("here"),Vr=n("."),ea=h(),es=l("p"),Hr=n("With the new "),Ie=l("em"),Xr=n("benchmark"),Gr=n(" tools, it is easier than ever to share your benchmark results with the community"),aa=h(),as=l("ul"),ks=l("li"),js=l("a"),Wr=n("PyTorch Benchmarking Results"),Yr=n("."),Jr=h(),vs=l("li"),gs=l("a"),Qr=n("TensorFlow Benchmarking Results"),Kr=n("."),this.h()},l(e){const p=Bt('[data-svelte="svelte-1phssyn"]',document.head);j=t(p,"META",{name:!0,content:!0}),p.forEach(a),C=m(e),_=t(e,"H1",{class:!0});var _s=c(_);k=t(_s,"A",{id:!0,class:!0,href:!0});var el=c(k);O=t(el,"SPAN",{});var al=c(O);U(T.$$.fragment,al),al.forEach(a),el.forEach(a),ls=m(_s),S=t(_s,"SPAN",{});var nl=c(S);q=r(nl,"Benchmarks"),nl.forEach(a),_s.forEach(a),B=m(e),D=t(e,"P",{});var rl=c(D);ys=r(rl,"Let\u2019s take a look at how \u{1F917} Transformer models can be benchmarked, best practices, and already available benchmarks."),rl.forEach(a),Oe=m(e),W=t(e,"P",{});var ra=c(W);ba=r(ra,"A notebook explaining in more detail how to benchmark \u{1F917} Transformer models can be found "),ts=t(ra,"A",{href:!0,rel:!0});var ll=c(ts);da=r(ll,"here"),ll.forEach(a),fa=r(ra,"."),ra.forEach(a),Se=m(e),R=t(e,"H2",{class:!0});var la=c(R);Y=t(la,"A",{id:!0,class:!0,href:!0});var tl=c(Y);$s=t(tl,"SPAN",{});var cl=c($s);U(cs.$$.fragment,cl),cl.forEach(a),tl.forEach(a),ja=m(la),As=t(la,"SPAN",{});var pl=c(As);ga=r(pl,"How to benchmark \u{1F917} Transformer models"),pl.forEach(a),la.forEach(a),qe=m(e),y=t(e,"P",{});var w=c(y);_a=r(w,"The classes "),Ps=t(w,"CODE",{});var ol=c(Ps);ya=r(ol,"PyTorchBenchmark"),ol.forEach(a),Ea=r(w," and "),Cs=t(w,"CODE",{});var hl=c(Cs);ka=r(hl,"TensorFlowBenchmark"),hl.forEach(a),va=r(w," allow to flexibly benchmark \u{1F917} Transformer models. The benchmark classes allow us to measure the "),Ns=t(w,"EM",{});var ml=c(Ns);wa=r(ml,"peak memory usage"),ml.forEach(a),Ta=r(w," and "),Fs=t(w,"EM",{});var il=c(Fs);Ba=r(il,"required time"),il.forEach(a),$a=r(w," for both "),Ms=t(w,"EM",{});var ul=c(Ms);Aa=r(ul,"inference"),ul.forEach(a),Pa=r(w," and "),Is=t(w,"EM",{});var bl=c(Is);Ca=r(bl,"training"),bl.forEach(a),Na=r(w,"."),w.forEach(a),De=m(e),U(J.$$.fragment,e),Re=m(e),g=t(e,"P",{});var E=c(g);Fa=r(E,"The benchmark classes "),Os=t(E,"CODE",{});var dl=c(Os);Ma=r(dl,"PyTorchBenchmark"),dl.forEach(a),Ia=r(E," and "),Ss=t(E,"CODE",{});var fl=c(Ss);Oa=r(fl,"TensorFlowBenchmark"),fl.forEach(a),Sa=r(E," expect an object of type "),qs=t(E,"CODE",{});var jl=c(qs);qa=r(jl,"PyTorchBenchmarkArguments"),jl.forEach(a),Da=r(E,` and
`),Ds=t(E,"CODE",{});var gl=c(Ds);Ra=r(gl,"TensorFlowBenchmarkArguments"),gl.forEach(a),xa=r(E,", respectively, for instantiation. "),Rs=t(E,"CODE",{});var _l=c(Rs);La=r(_l,"PyTorchBenchmarkArguments"),_l.forEach(a),za=r(E," and "),xs=t(E,"CODE",{});var yl=c(xs);Ua=r(yl,"TensorFlowBenchmarkArguments"),yl.forEach(a),Va=r(E," are data classes and contain all relevant configurations for their corresponding benchmark class. In the following example, it is shown how a BERT model of type "),Ls=t(E,"EM",{});var El=c(Ls);Ha=r(El,"bert-base-cased"),El.forEach(a),Xa=r(E," can be benchmarked."),E.forEach(a),xe=m(e),U(ps.$$.fragment,e),Le=m(e),i=t(e,"P",{});var d=c(i);Ga=r(d,"Here, three arguments are given to the benchmark argument data classes, namely "),zs=t(d,"CODE",{});var kl=c(zs);Wa=r(kl,"models"),kl.forEach(a),Ya=r(d,", "),Us=t(d,"CODE",{});var vl=c(Us);Ja=r(vl,"batch_sizes"),vl.forEach(a),Qa=r(d,`, and
`),Vs=t(d,"CODE",{});var wl=c(Vs);Ka=r(wl,"sequence_lengths"),wl.forEach(a),Za=r(d,". The argument "),Hs=t(d,"CODE",{});var Tl=c(Hs);sn=r(Tl,"models"),Tl.forEach(a),en=r(d," is required and expects a "),Xs=t(d,"CODE",{});var Bl=c(Xs);an=r(Bl,"list"),Bl.forEach(a),nn=r(d,` of model identifiers from the
`),os=t(d,"A",{href:!0,rel:!0});var $l=c(os);rn=r($l,"model hub"),$l.forEach(a),ln=r(d," The "),Gs=t(d,"CODE",{});var Al=c(Gs);tn=r(Al,"list"),Al.forEach(a),cn=r(d," arguments "),Ws=t(d,"CODE",{});var Pl=c(Ws);pn=r(Pl,"batch_sizes"),Pl.forEach(a),on=r(d," and "),Ys=t(d,"CODE",{});var Cl=c(Ys);hn=r(Cl,"sequence_lengths"),Cl.forEach(a),mn=r(d,` define
the size of the `),Js=t(d,"CODE",{});var Nl=c(Js);un=r(Nl,"input_ids"),Nl.forEach(a),bn=r(d,` on which the model is benchmarked. There are many more parameters that can be configured
via the benchmark argument data classes. For more detail on these one can either directly consult the files
`),Qs=t(d,"CODE",{});var Fl=c(Qs);dn=r(Fl,"src/transformers/benchmark/benchmark_args_utils.py"),Fl.forEach(a),fn=r(d,", "),Ks=t(d,"CODE",{});var Ml=c(Ks);jn=r(Ml,"src/transformers/benchmark/benchmark_args.py"),Ml.forEach(a),gn=r(d,` (for PyTorch)
and `),Zs=t(d,"CODE",{});var Il=c(Zs);_n=r(Il,"src/transformers/benchmark/benchmark_args_tf.py"),Il.forEach(a),yn=r(d,` (for Tensorflow). Alternatively, running the following shell
commands from root will print out a descriptive list of all configurable parameters for PyTorch and Tensorflow
respectively.`),d.forEach(a),ze=m(e),U(hs.$$.fragment,e),Ue=m(e),Q=t(e,"P",{});var ta=c(Q);En=r(ta,"An instantiated benchmark object can then simply be run by calling "),se=t(ta,"CODE",{});var Ol=c(se);kn=r(Ol,"benchmark.run()"),Ol.forEach(a),vn=r(ta,"."),ta.forEach(a),Ve=m(e),U(ms.$$.fragment,e),He=m(e),u=t(e,"P",{});var f=c(u);wn=r(f,"By default, the "),ee=t(f,"EM",{});var Sl=c(ee);Tn=r(Sl,"time"),Sl.forEach(a),Bn=r(f," and the "),ae=t(f,"EM",{});var ql=c(ae);$n=r(ql,"required memory"),ql.forEach(a),An=r(f," for "),ne=t(f,"EM",{});var Dl=c(ne);Pn=r(Dl,"inference"),Dl.forEach(a),Cn=r(f,` are benchmarked. In the example output above the first
two sections show the result corresponding to `),re=t(f,"EM",{});var Rl=c(re);Nn=r(Rl,"inference time"),Rl.forEach(a),Fn=r(f," and "),le=t(f,"EM",{});var xl=c(le);Mn=r(xl,"inference memory"),xl.forEach(a),In=r(f,`. In addition, all relevant
information about the computing environment, `),te=t(f,"EM",{});var Ll=c(te);On=r(Ll,"e.g."),Ll.forEach(a),Sn=r(f,` the GPU type, the system, the library versions, etc\u2026 are printed
out in the third section under `),ce=t(f,"EM",{});var zl=c(ce);qn=r(zl,"ENVIRONMENT INFORMATION"),zl.forEach(a),Dn=r(f,". This information can optionally be saved in a "),pe=t(f,"EM",{});var Ul=c(pe);Rn=r(Ul,".csv"),Ul.forEach(a),xn=r(f,` file
when adding the argument `),oe=t(f,"CODE",{});var Vl=c(oe);Ln=r(Vl,"save_to_csv=True"),Vl.forEach(a),zn=r(f," to "),he=t(f,"CODE",{});var Hl=c(he);Un=r(Hl,"PyTorchBenchmarkArguments"),Hl.forEach(a),Vn=r(f,` and
`),me=t(f,"CODE",{});var Xl=c(me);Hn=r(Xl,"TensorFlowBenchmarkArguments"),Xl.forEach(a),Xn=r(f,` respectively. In this case, every section is saved in a separate
`),ie=t(f,"EM",{});var Gl=c(ie);Gn=r(Gl,".csv"),Gl.forEach(a),Wn=r(f," file. The path to each "),ue=t(f,"EM",{});var Wl=c(ue);Yn=r(Wl,".csv"),Wl.forEach(a),Jn=r(f," file can optionally be defined via the argument data classes."),f.forEach(a),Xe=m(e),A=t(e,"P",{});var ns=c(A);Qn=r(ns,"Instead of benchmarking pre-trained models via their model identifier, "),be=t(ns,"EM",{});var Yl=c(be);Kn=r(Yl,"e.g."),Yl.forEach(a),Zn=m(ns),de=t(ns,"CODE",{});var Jl=c(de);sr=r(Jl,"bert-base-uncased"),Jl.forEach(a),er=r(ns,`, the user can
alternatively benchmark an arbitrary configuration of any available model class. In this case, a `),fe=t(ns,"CODE",{});var Ql=c(fe);ar=r(Ql,"list"),Ql.forEach(a),nr=r(ns,` of
configurations must be inserted with the benchmark args as follows.`),ns.forEach(a),Ge=m(e),U(is.$$.fragment,e),We=m(e),v=t(e,"P",{});var M=c(v);rr=r(M,"Again, "),je=t(M,"EM",{});var Kl=c(je);lr=r(Kl,"inference time"),Kl.forEach(a),tr=r(M," and "),ge=t(M,"EM",{});var Zl=c(ge);cr=r(Zl,"required memory"),Zl.forEach(a),pr=r(M," for "),_e=t(M,"EM",{});var st=c(_e);or=r(st,"inference"),st.forEach(a),hr=r(M,` are measured, but this time for customized configurations
of the `),ye=t(M,"CODE",{});var et=c(ye);mr=r(et,"BertModel"),et.forEach(a),ir=r(M,` class. This feature can especially be helpful when deciding for which configuration the model
should be trained.`),M.forEach(a),Ye=m(e),x=t(e,"H2",{class:!0});var ca=c(x);K=t(ca,"A",{id:!0,class:!0,href:!0});var at=c(K);Ee=t(at,"SPAN",{});var nt=c(Ee);U(us.$$.fragment,nt),nt.forEach(a),at.forEach(a),ur=m(ca),ke=t(ca,"SPAN",{});var rt=c(ke);br=r(rt,"Benchmark best practices"),rt.forEach(a),ca.forEach(a),Je=m(e),Es=t(e,"P",{});var lt=c(Es);dr=r(lt,"This section lists a couple of best practices one should be aware of when benchmarking a model."),lt.forEach(a),Qe=m(e),N=t(e,"UL",{});var ws=c(N);P=t(ws,"LI",{});var rs=c(P);fr=r(rs,`Currently, only single device benchmarking is supported. When benchmarking on GPU, it is recommended that the user
specifies on which device the code should be run by setting the `),ve=t(rs,"CODE",{});var tt=c(ve);jr=r(tt,"CUDA_VISIBLE_DEVICES"),tt.forEach(a),gr=r(rs,` environment variable in the
shell, `),we=t(rs,"EM",{});var ct=c(we);_r=r(ct,"e.g."),ct.forEach(a),yr=m(rs),Te=t(rs,"CODE",{});var pt=c(Te);Er=r(pt,"export CUDA_VISIBLE_DEVICES=0"),pt.forEach(a),kr=r(rs," before running the code."),rs.forEach(a),vr=m(ws),$=t(ws,"LI",{});var I=c($);wr=r(I,"The option "),Be=t(I,"CODE",{});var ot=c(Be);Tr=r(ot,"no_multi_processing"),ot.forEach(a),Br=r(I," should only be set to "),$e=t(I,"CODE",{});var ht=c($e);$r=r(ht,"True"),ht.forEach(a),Ar=r(I,` for testing and debugging. To ensure accurate
memory measurement it is recommended to run each memory benchmark in a separate process by making sure
`),Ae=t(I,"CODE",{});var mt=c(Ae);Pr=r(mt,"no_multi_processing"),mt.forEach(a),Cr=r(I," is set to "),Pe=t(I,"CODE",{});var it=c(Pe);Nr=r(it,"True"),it.forEach(a),Fr=r(I,"."),I.forEach(a),Mr=m(ws),Ce=t(ws,"LI",{});var ut=c(Ce);Ir=r(ut,`One should always state the environment information when sharing the results of a model benchmark. Results can vary
heavily between different GPU devices, library versions, etc., so that benchmark results on their own are not very
useful for the community.`),ut.forEach(a),ws.forEach(a),Ke=m(e),L=t(e,"H2",{class:!0});var pa=c(L);Z=t(pa,"A",{id:!0,class:!0,href:!0});var bt=c(Z);Ne=t(bt,"SPAN",{});var dt=c(Ne);U(bs.$$.fragment,dt),dt.forEach(a),bt.forEach(a),Or=m(pa),Fe=t(pa,"SPAN",{});var ft=c(Fe);Sr=r(ft,"Sharing your benchmark"),ft.forEach(a),pa.forEach(a),Ze=m(e),ss=t(e,"P",{});var oa=c(ss);qr=r(oa,"Previously all available core models (10 at the time) have been benchmarked for "),Me=t(oa,"EM",{});var jt=c(Me);Dr=r(jt,"inference time"),jt.forEach(a),Rr=r(oa,`, across many different
settings: using PyTorch, with and without TorchScript, using TensorFlow, with and without XLA. All of those tests were
done across CPUs (except for TensorFlow XLA) and GPUs.`),oa.forEach(a),sa=m(e),F=t(e,"P",{});var Ts=c(F);xr=r(Ts,"The approach is detailed in the "),ds=t(Ts,"A",{href:!0,rel:!0});var gt=c(ds);Lr=r(gt,"following blogpost"),gt.forEach(a),zr=r(Ts,` and the results are
available `),fs=t(Ts,"A",{href:!0,rel:!0});var _t=c(fs);Ur=r(_t,"here"),_t.forEach(a),Vr=r(Ts,"."),Ts.forEach(a),ea=m(e),es=t(e,"P",{});var ha=c(es);Hr=r(ha,"With the new "),Ie=t(ha,"EM",{});var yt=c(Ie);Xr=r(yt,"benchmark"),yt.forEach(a),Gr=r(ha," tools, it is easier than ever to share your benchmark results with the community"),ha.forEach(a),aa=m(e),as=t(e,"UL",{});var ma=c(as);ks=t(ma,"LI",{});var Zr=c(ks);js=t(Zr,"A",{href:!0,rel:!0});var Et=c(js);Wr=r(Et,"PyTorch Benchmarking Results"),Et.forEach(a),Yr=r(Zr,"."),Zr.forEach(a),Jr=m(ma),vs=t(ma,"LI",{});var sl=c(vs);gs=t(sl,"A",{href:!0,rel:!0});var kt=c(gs);Qr=r(kt,"TensorFlow Benchmarking Results"),kt.forEach(a),Kr=r(sl,"."),sl.forEach(a),ma.forEach(a),this.h()},h(){b(j,"name","hf:doc:metadata"),b(j,"content",JSON.stringify(Ct)),b(k,"id","benchmarks"),b(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(k,"href","#benchmarks"),b(_,"class","relative group"),b(ts,"href","https://github.com/huggingface/transformers/tree/master/notebooks/05-benchmark.ipynb"),b(ts,"rel","nofollow"),b(Y,"id","how-to-benchmark-transformer-models"),b(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Y,"href","#how-to-benchmark-transformer-models"),b(R,"class","relative group"),b(os,"href","https://huggingface.co/models"),b(os,"rel","nofollow"),b(K,"id","benchmark-best-practices"),b(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(K,"href","#benchmark-best-practices"),b(x,"class","relative group"),b(Z,"id","sharing-your-benchmark"),b(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Z,"href","#sharing-your-benchmark"),b(L,"class","relative group"),b(ds,"href","https://medium.com/huggingface/benchmarking-transformers-pytorch-and-tensorflow-e2917fb891c2"),b(ds,"rel","nofollow"),b(fs,"href","https://docs.google.com/spreadsheets/d/1sryqufw2D0XlUH4sq3e9Wnxu5EAQkaohzrJbd5HdQ_w/edit?usp=sharing"),b(fs,"rel","nofollow"),b(js,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/benchmarking/README.md"),b(js,"rel","nofollow"),b(gs,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/benchmarking/README.md"),b(gs,"rel","nofollow")},m(e,p){s(document.head,j),o(e,C,p),o(e,_,p),s(_,k),s(k,O),V(T,O,null),s(_,ls),s(_,S),s(S,q),o(e,B,p),o(e,D,p),s(D,ys),o(e,Oe,p),o(e,W,p),s(W,ba),s(W,ts),s(ts,da),s(W,fa),o(e,Se,p),o(e,R,p),s(R,Y),s(Y,$s),V(cs,$s,null),s(R,ja),s(R,As),s(As,ga),o(e,qe,p),o(e,y,p),s(y,_a),s(y,Ps),s(Ps,ya),s(y,Ea),s(y,Cs),s(Cs,ka),s(y,va),s(y,Ns),s(Ns,wa),s(y,Ta),s(y,Fs),s(Fs,Ba),s(y,$a),s(y,Ms),s(Ms,Aa),s(y,Pa),s(y,Is),s(Is,Ca),s(y,Na),o(e,De,p),V(J,e,p),o(e,Re,p),o(e,g,p),s(g,Fa),s(g,Os),s(Os,Ma),s(g,Ia),s(g,Ss),s(Ss,Oa),s(g,Sa),s(g,qs),s(qs,qa),s(g,Da),s(g,Ds),s(Ds,Ra),s(g,xa),s(g,Rs),s(Rs,La),s(g,za),s(g,xs),s(xs,Ua),s(g,Va),s(g,Ls),s(Ls,Ha),s(g,Xa),o(e,xe,p),V(ps,e,p),o(e,Le,p),o(e,i,p),s(i,Ga),s(i,zs),s(zs,Wa),s(i,Ya),s(i,Us),s(Us,Ja),s(i,Qa),s(i,Vs),s(Vs,Ka),s(i,Za),s(i,Hs),s(Hs,sn),s(i,en),s(i,Xs),s(Xs,an),s(i,nn),s(i,os),s(os,rn),s(i,ln),s(i,Gs),s(Gs,tn),s(i,cn),s(i,Ws),s(Ws,pn),s(i,on),s(i,Ys),s(Ys,hn),s(i,mn),s(i,Js),s(Js,un),s(i,bn),s(i,Qs),s(Qs,dn),s(i,fn),s(i,Ks),s(Ks,jn),s(i,gn),s(i,Zs),s(Zs,_n),s(i,yn),o(e,ze,p),V(hs,e,p),o(e,Ue,p),o(e,Q,p),s(Q,En),s(Q,se),s(se,kn),s(Q,vn),o(e,Ve,p),V(ms,e,p),o(e,He,p),o(e,u,p),s(u,wn),s(u,ee),s(ee,Tn),s(u,Bn),s(u,ae),s(ae,$n),s(u,An),s(u,ne),s(ne,Pn),s(u,Cn),s(u,re),s(re,Nn),s(u,Fn),s(u,le),s(le,Mn),s(u,In),s(u,te),s(te,On),s(u,Sn),s(u,ce),s(ce,qn),s(u,Dn),s(u,pe),s(pe,Rn),s(u,xn),s(u,oe),s(oe,Ln),s(u,zn),s(u,he),s(he,Un),s(u,Vn),s(u,me),s(me,Hn),s(u,Xn),s(u,ie),s(ie,Gn),s(u,Wn),s(u,ue),s(ue,Yn),s(u,Jn),o(e,Xe,p),o(e,A,p),s(A,Qn),s(A,be),s(be,Kn),s(A,Zn),s(A,de),s(de,sr),s(A,er),s(A,fe),s(fe,ar),s(A,nr),o(e,Ge,p),V(is,e,p),o(e,We,p),o(e,v,p),s(v,rr),s(v,je),s(je,lr),s(v,tr),s(v,ge),s(ge,cr),s(v,pr),s(v,_e),s(_e,or),s(v,hr),s(v,ye),s(ye,mr),s(v,ir),o(e,Ye,p),o(e,x,p),s(x,K),s(K,Ee),V(us,Ee,null),s(x,ur),s(x,ke),s(ke,br),o(e,Je,p),o(e,Es,p),s(Es,dr),o(e,Qe,p),o(e,N,p),s(N,P),s(P,fr),s(P,ve),s(ve,jr),s(P,gr),s(P,we),s(we,_r),s(P,yr),s(P,Te),s(Te,Er),s(P,kr),s(N,vr),s(N,$),s($,wr),s($,Be),s(Be,Tr),s($,Br),s($,$e),s($e,$r),s($,Ar),s($,Ae),s(Ae,Pr),s($,Cr),s($,Pe),s(Pe,Nr),s($,Fr),s(N,Mr),s(N,Ce),s(Ce,Ir),o(e,Ke,p),o(e,L,p),s(L,Z),s(Z,Ne),V(bs,Ne,null),s(L,Or),s(L,Fe),s(Fe,Sr),o(e,Ze,p),o(e,ss,p),s(ss,qr),s(ss,Me),s(Me,Dr),s(ss,Rr),o(e,sa,p),o(e,F,p),s(F,xr),s(F,ds),s(ds,Lr),s(F,zr),s(F,fs),s(fs,Ur),s(F,Vr),o(e,ea,p),o(e,es,p),s(es,Hr),s(es,Ie),s(Ie,Xr),s(es,Gr),o(e,aa,p),o(e,as,p),s(as,ks),s(ks,js),s(js,Wr),s(ks,Yr),s(as,Jr),s(as,vs),s(vs,gs),s(gs,Qr),s(vs,Kr),na=!0},p(e,[p]){const _s={};p&2&&(_s.$$scope={dirty:p,ctx:e}),J.$set(_s)},i(e){na||(H(T.$$.fragment,e),H(cs.$$.fragment,e),H(J.$$.fragment,e),H(ps.$$.fragment,e),H(hs.$$.fragment,e),H(ms.$$.fragment,e),H(is.$$.fragment,e),H(us.$$.fragment,e),H(bs.$$.fragment,e),na=!0)},o(e){X(T.$$.fragment,e),X(cs.$$.fragment,e),X(J.$$.fragment,e),X(ps.$$.fragment,e),X(hs.$$.fragment,e),X(ms.$$.fragment,e),X(is.$$.fragment,e),X(us.$$.fragment,e),X(bs.$$.fragment,e),na=!1},d(e){a(j),e&&a(C),e&&a(_),G(T),e&&a(B),e&&a(D),e&&a(Oe),e&&a(W),e&&a(Se),e&&a(R),G(cs),e&&a(qe),e&&a(y),e&&a(De),G(J,e),e&&a(Re),e&&a(g),e&&a(xe),G(ps,e),e&&a(Le),e&&a(i),e&&a(ze),G(hs,e),e&&a(Ue),e&&a(Q),e&&a(Ve),G(ms,e),e&&a(He),e&&a(u),e&&a(Xe),e&&a(A),e&&a(Ge),G(is,e),e&&a(We),e&&a(v),e&&a(Ye),e&&a(x),G(us),e&&a(Je),e&&a(Es),e&&a(Qe),e&&a(N),e&&a(Ke),e&&a(L),G(bs),e&&a(Ze),e&&a(ss),e&&a(sa),e&&a(F),e&&a(ea),e&&a(es),e&&a(aa),e&&a(as)}}}const Ct={local:"benchmarks",sections:[{local:"how-to-benchmark-transformer-models",title:"How to benchmark \u{1F917} Transformer models"},{local:"benchmark-best-practices",title:"Benchmark best practices"},{local:"sharing-your-benchmark",title:"Sharing your benchmark"}],title:"Benchmarks"};function Nt(Bs,j,C){let{fw:_}=j;return Bs.$$set=k=>{"fw"in k&&C(0,_=k.fw)},[_]}class qt extends vt{constructor(j){super();wt(this,j,Nt,Pt,Tt,{fw:0})}}export{qt as default,Ct as metadata};
