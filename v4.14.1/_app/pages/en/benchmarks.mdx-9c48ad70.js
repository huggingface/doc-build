import{S as Tt,i as Bt,s as $t,e as l,k as h,w as S,t as n,L as At,c as t,d as a,m,a as c,x as q,h as r,b,J as s,g as p,y as D,q as R,o as x,B as L}from"../../chunks/vendor-b1433968.js";import{T as Ct}from"../../chunks/Tip-c3840994.js";import{I as ua}from"../../chunks/IconCopyLink-7029626d.js";import{C as ba}from"../../chunks/CodeBlockFw-e3b92d56.js";import{C as Pt}from"../../chunks/ColabDropdown-727dc22f.js";import"../../chunks/CopyButton-f65cb278.js";function Nt($s){let j,P,_,E,z,T,ls,U;return{c(){j=l("p"),P=n("Hereby, "),_=l("em"),E=n("inference"),z=n(" is defined by a single forward pass, and "),T=l("em"),ls=n("training"),U=n(` is defined by a single forward pass and
backward pass.`)},l(V){j=t(V,"P",{});var B=c(j);P=r(B,"Hereby, "),_=t(B,"EM",{});var N=c(_);E=r(N,"inference"),N.forEach(a),z=r(B," is defined by a single forward pass, and "),T=t(B,"EM",{});var ts=c(T);ls=r(ts,"training"),ts.forEach(a),U=r(B,` is defined by a single forward pass and
backward pass.`),B.forEach(a)},m(V,B){p(V,j,B),s(j,P),s(j,_),s(_,E),s(j,z),s(j,T),s(T,ls),s(j,U)},d(V){V&&a(j)}}}function Ft($s){let j,P,_,E,z,T,ls,U,V,B,N,ts,ks,da,Se,W,fa,cs,ja,ga,qe,H,Y,As,os,_a,Cs,ya,De,y,ka,Ps,Ea,va,Ns,wa,Ta,Fs,Ba,$a,Ms,Aa,Ca,Is,Pa,Na,Os,Fa,Ma,Re,J,xe,g,Ia,Ss,Oa,Sa,qs,qa,Da,Ds,Ra,xa,Rs,La,za,xs,Ua,Va,Ls,Ha,Xa,zs,Ga,Wa,Le,ps,ze,i,Ya,Us,Ja,Qa,Vs,Ka,Za,Hs,sn,en,Xs,an,nn,Gs,rn,ln,hs,tn,cn,Ws,on,pn,Ys,hn,mn,Js,un,bn,Qs,dn,fn,Ks,jn,gn,Zs,_n,yn,se,kn,En,Ue,ms,Ve,Q,vn,ee,wn,Tn,He,is,Xe,u,Bn,ae,$n,An,ne,Cn,Pn,re,Nn,Fn,le,Mn,In,te,On,Sn,ce,qn,Dn,oe,Rn,xn,pe,Ln,zn,he,Un,Vn,me,Hn,Xn,ie,Gn,Wn,ue,Yn,Jn,be,Qn,Kn,Ge,A,Zn,de,sr,er,fe,ar,nr,je,rr,lr,We,us,Ye,v,tr,ge,cr,or,_e,pr,hr,ye,mr,ir,ke,ur,br,Je,X,K,Ee,bs,dr,ve,fr,Qe,Es,jr,Ke,F,C,gr,we,_r,yr,Te,kr,Er,Be,vr,wr,Tr,$,Br,$e,$r,Ar,Ae,Cr,Pr,Ce,Nr,Fr,Pe,Mr,Ir,Or,Ne,Sr,Ze,G,Z,Fe,ds,qr,Me,Dr,sa,ss,Rr,Ie,xr,Lr,ea,M,zr,fs,Ur,Vr,js,Hr,Xr,aa,es,Gr,Oe,Wr,Yr,na,as,vs,gs,Jr,Qr,Kr,ws,_s,Zr,sl,ra;return T=new ua({}),N=new Pt({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Mixed",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/benchmarks.ipynb"},{label:"PyTorch",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/pytorch/benchmarks.ipynb"},{label:"TensorFlow",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/tensorflow/benchmarks.ipynb"}]}}),os=new ua({}),J=new Ct({props:{$$slots:{default:[Nt]},$$scope:{ctx:$s}}}),ps=new ba({props:{pt:{code:`from transformers import PyTorchBenchmark, PyTorchBenchmarkArguments

args = PyTorchBenchmarkArguments(models=["bert-base-uncased"], batch_sizes=[8], sequence_lengths=[8, 32, 128, 512])
benchmark = PyTorchBenchmark(args)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PyTorchBenchmark, PyTorchBenchmarkArguments

<span class="hljs-meta">&gt;&gt;&gt; </span>args = PyTorchBenchmarkArguments(models=[<span class="hljs-string">&quot;bert-base-uncased&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark = PyTorchBenchmark(args)`},tf:{code:`from transformers import TensorFlowBenchmark, TensorFlowBenchmarkArguments

args = TensorFlowBenchmarkArguments(models=["bert-base-uncased"], batch_sizes=[8], sequence_lengths=[8, 32, 128, 512])
benchmark = TensorFlowBenchmark(args)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TensorFlowBenchmark, TensorFlowBenchmarkArguments

<span class="hljs-meta">&gt;&gt;&gt; </span>args = TensorFlowBenchmarkArguments(models=[<span class="hljs-string">&quot;bert-base-uncased&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark = TensorFlowBenchmark(args)`}}}),ms=new ba({props:{pt:{code:"python examples/pytorch/benchmarking/run_benchmark.py --help",highlighted:'python examples/pytorch/benchmarking/run_benchmark.py --<span class="hljs-built_in">help</span>'},tf:{code:"python examples/tensorflow/benchmarking/run_benchmark_tf.py --help",highlighted:'python examples/tensorflow/benchmarking/run_benchmark_tf.py --<span class="hljs-built_in">help</span>'}}}),is=new ba({props:{pt:{code:`results = benchmark.run()
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
- use_tpu: <span class="hljs-literal">False</span>`}}}),us=new ba({props:{pt:{code:`from transformers import PyTorchBenchmark, PyTorchBenchmarkArguments, BertConfig

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
- use_tpu: <span class="hljs-literal">False</span>`}}}),bs=new ua({}),ds=new ua({}),{c(){j=l("meta"),P=h(),_=l("h1"),E=l("a"),z=l("span"),S(T.$$.fragment),ls=h(),U=l("span"),V=n("Benchmarks"),B=h(),S(N.$$.fragment),ts=h(),ks=l("p"),da=n("Let\u2019s take a look at how \u{1F917} Transformer models can be benchmarked, best practices, and already available benchmarks."),Se=h(),W=l("p"),fa=n("A notebook explaining in more detail how to benchmark \u{1F917} Transformer models can be found "),cs=l("a"),ja=n("here"),ga=n("."),qe=h(),H=l("h2"),Y=l("a"),As=l("span"),S(os.$$.fragment),_a=h(),Cs=l("span"),ya=n("How to benchmark \u{1F917} Transformer models"),De=h(),y=l("p"),ka=n("The classes "),Ps=l("code"),Ea=n("PyTorchBenchmark"),va=n(" and "),Ns=l("code"),wa=n("TensorFlowBenchmark"),Ta=n(" allow to flexibly benchmark \u{1F917} Transformer models. The benchmark classes allow us to measure the "),Fs=l("em"),Ba=n("peak memory usage"),$a=n(" and "),Ms=l("em"),Aa=n("required time"),Ca=n(" for both "),Is=l("em"),Pa=n("inference"),Na=n(" and "),Os=l("em"),Fa=n("training"),Ma=n("."),Re=h(),S(J.$$.fragment),xe=h(),g=l("p"),Ia=n("The benchmark classes "),Ss=l("code"),Oa=n("PyTorchBenchmark"),Sa=n(" and "),qs=l("code"),qa=n("TensorFlowBenchmark"),Da=n(" expect an object of type "),Ds=l("code"),Ra=n("PyTorchBenchmarkArguments"),xa=n(` and
`),Rs=l("code"),La=n("TensorFlowBenchmarkArguments"),za=n(", respectively, for instantiation. "),xs=l("code"),Ua=n("PyTorchBenchmarkArguments"),Va=n(" and "),Ls=l("code"),Ha=n("TensorFlowBenchmarkArguments"),Xa=n(" are data classes and contain all relevant configurations for their corresponding benchmark class. In the following example, it is shown how a BERT model of type "),zs=l("em"),Ga=n("bert-base-cased"),Wa=n(" can be benchmarked."),Le=h(),S(ps.$$.fragment),ze=h(),i=l("p"),Ya=n("Here, three arguments are given to the benchmark argument data classes, namely "),Us=l("code"),Ja=n("models"),Qa=n(", "),Vs=l("code"),Ka=n("batch_sizes"),Za=n(`, and
`),Hs=l("code"),sn=n("sequence_lengths"),en=n(". The argument "),Xs=l("code"),an=n("models"),nn=n(" is required and expects a "),Gs=l("code"),rn=n("list"),ln=n(` of model identifiers from the
`),hs=l("a"),tn=n("model hub"),cn=n(" The "),Ws=l("code"),on=n("list"),pn=n(" arguments "),Ys=l("code"),hn=n("batch_sizes"),mn=n(" and "),Js=l("code"),un=n("sequence_lengths"),bn=n(` define
the size of the `),Qs=l("code"),dn=n("input_ids"),fn=n(` on which the model is benchmarked. There are many more parameters that can be configured
via the benchmark argument data classes. For more detail on these one can either directly consult the files
`),Ks=l("code"),jn=n("src/transformers/benchmark/benchmark_args_utils.py"),gn=n(", "),Zs=l("code"),_n=n("src/transformers/benchmark/benchmark_args.py"),yn=n(` (for PyTorch)
and `),se=l("code"),kn=n("src/transformers/benchmark/benchmark_args_tf.py"),En=n(` (for Tensorflow). Alternatively, running the following shell
commands from root will print out a descriptive list of all configurable parameters for PyTorch and Tensorflow
respectively.`),Ue=h(),S(ms.$$.fragment),Ve=h(),Q=l("p"),vn=n("An instantiated benchmark object can then simply be run by calling "),ee=l("code"),wn=n("benchmark.run()"),Tn=n("."),He=h(),S(is.$$.fragment),Xe=h(),u=l("p"),Bn=n("By default, the "),ae=l("em"),$n=n("time"),An=n(" and the "),ne=l("em"),Cn=n("required memory"),Pn=n(" for "),re=l("em"),Nn=n("inference"),Fn=n(` are benchmarked. In the example output above the first
two sections show the result corresponding to `),le=l("em"),Mn=n("inference time"),In=n(" and "),te=l("em"),On=n("inference memory"),Sn=n(`. In addition, all relevant
information about the computing environment, `),ce=l("em"),qn=n("e.g."),Dn=n(` the GPU type, the system, the library versions, etc\u2026 are printed
out in the third section under `),oe=l("em"),Rn=n("ENVIRONMENT INFORMATION"),xn=n(". This information can optionally be saved in a "),pe=l("em"),Ln=n(".csv"),zn=n(` file
when adding the argument `),he=l("code"),Un=n("save_to_csv=True"),Vn=n(" to "),me=l("code"),Hn=n("PyTorchBenchmarkArguments"),Xn=n(` and
`),ie=l("code"),Gn=n("TensorFlowBenchmarkArguments"),Wn=n(` respectively. In this case, every section is saved in a separate
`),ue=l("em"),Yn=n(".csv"),Jn=n(" file. The path to each "),be=l("em"),Qn=n(".csv"),Kn=n(" file can optionally be defined via the argument data classes."),Ge=h(),A=l("p"),Zn=n("Instead of benchmarking pre-trained models via their model identifier, "),de=l("em"),sr=n("e.g."),er=h(),fe=l("code"),ar=n("bert-base-uncased"),nr=n(`, the user can
alternatively benchmark an arbitrary configuration of any available model class. In this case, a `),je=l("code"),rr=n("list"),lr=n(` of
configurations must be inserted with the benchmark args as follows.`),We=h(),S(us.$$.fragment),Ye=h(),v=l("p"),tr=n("Again, "),ge=l("em"),cr=n("inference time"),or=n(" and "),_e=l("em"),pr=n("required memory"),hr=n(" for "),ye=l("em"),mr=n("inference"),ir=n(` are measured, but this time for customized configurations
of the `),ke=l("code"),ur=n("BertModel"),br=n(` class. This feature can especially be helpful when deciding for which configuration the model
should be trained.`),Je=h(),X=l("h2"),K=l("a"),Ee=l("span"),S(bs.$$.fragment),dr=h(),ve=l("span"),fr=n("Benchmark best practices"),Qe=h(),Es=l("p"),jr=n("This section lists a couple of best practices one should be aware of when benchmarking a model."),Ke=h(),F=l("ul"),C=l("li"),gr=n(`Currently, only single device benchmarking is supported. When benchmarking on GPU, it is recommended that the user
specifies on which device the code should be run by setting the `),we=l("code"),_r=n("CUDA_VISIBLE_DEVICES"),yr=n(` environment variable in the
shell, `),Te=l("em"),kr=n("e.g."),Er=h(),Be=l("code"),vr=n("export CUDA_VISIBLE_DEVICES=0"),wr=n(" before running the code."),Tr=h(),$=l("li"),Br=n("The option "),$e=l("code"),$r=n("no_multi_processing"),Ar=n(" should only be set to "),Ae=l("code"),Cr=n("True"),Pr=n(` for testing and debugging. To ensure accurate
memory measurement it is recommended to run each memory benchmark in a separate process by making sure
`),Ce=l("code"),Nr=n("no_multi_processing"),Fr=n(" is set to "),Pe=l("code"),Mr=n("True"),Ir=n("."),Or=h(),Ne=l("li"),Sr=n(`One should always state the environment information when sharing the results of a model benchmark. Results can vary
heavily between different GPU devices, library versions, etc., so that benchmark results on their own are not very
useful for the community.`),Ze=h(),G=l("h2"),Z=l("a"),Fe=l("span"),S(ds.$$.fragment),qr=h(),Me=l("span"),Dr=n("Sharing your benchmark"),sa=h(),ss=l("p"),Rr=n("Previously all available core models (10 at the time) have been benchmarked for "),Ie=l("em"),xr=n("inference time"),Lr=n(`, across many different
settings: using PyTorch, with and without TorchScript, using TensorFlow, with and without XLA. All of those tests were
done across CPUs (except for TensorFlow XLA) and GPUs.`),ea=h(),M=l("p"),zr=n("The approach is detailed in the "),fs=l("a"),Ur=n("following blogpost"),Vr=n(` and the results are
available `),js=l("a"),Hr=n("here"),Xr=n("."),aa=h(),es=l("p"),Gr=n("With the new "),Oe=l("em"),Wr=n("benchmark"),Yr=n(" tools, it is easier than ever to share your benchmark results with the community"),na=h(),as=l("ul"),vs=l("li"),gs=l("a"),Jr=n("PyTorch Benchmarking Results"),Qr=n("."),Kr=h(),ws=l("li"),_s=l("a"),Zr=n("TensorFlow Benchmarking Results"),sl=n("."),this.h()},l(e){const o=At('[data-svelte="svelte-1phssyn"]',document.head);j=t(o,"META",{name:!0,content:!0}),o.forEach(a),P=m(e),_=t(e,"H1",{class:!0});var ys=c(_);E=t(ys,"A",{id:!0,class:!0,href:!0});var nl=c(E);z=t(nl,"SPAN",{});var rl=c(z);q(T.$$.fragment,rl),rl.forEach(a),nl.forEach(a),ls=m(ys),U=t(ys,"SPAN",{});var ll=c(U);V=r(ll,"Benchmarks"),ll.forEach(a),ys.forEach(a),B=m(e),q(N.$$.fragment,e),ts=m(e),ks=t(e,"P",{});var tl=c(ks);da=r(tl,"Let\u2019s take a look at how \u{1F917} Transformer models can be benchmarked, best practices, and already available benchmarks."),tl.forEach(a),Se=m(e),W=t(e,"P",{});var la=c(W);fa=r(la,"A notebook explaining in more detail how to benchmark \u{1F917} Transformer models can be found "),cs=t(la,"A",{href:!0,rel:!0});var cl=c(cs);ja=r(cl,"here"),cl.forEach(a),ga=r(la,"."),la.forEach(a),qe=m(e),H=t(e,"H2",{class:!0});var ta=c(H);Y=t(ta,"A",{id:!0,class:!0,href:!0});var ol=c(Y);As=t(ol,"SPAN",{});var pl=c(As);q(os.$$.fragment,pl),pl.forEach(a),ol.forEach(a),_a=m(ta),Cs=t(ta,"SPAN",{});var hl=c(Cs);ya=r(hl,"How to benchmark \u{1F917} Transformer models"),hl.forEach(a),ta.forEach(a),De=m(e),y=t(e,"P",{});var w=c(y);ka=r(w,"The classes "),Ps=t(w,"CODE",{});var ml=c(Ps);Ea=r(ml,"PyTorchBenchmark"),ml.forEach(a),va=r(w," and "),Ns=t(w,"CODE",{});var il=c(Ns);wa=r(il,"TensorFlowBenchmark"),il.forEach(a),Ta=r(w," allow to flexibly benchmark \u{1F917} Transformer models. The benchmark classes allow us to measure the "),Fs=t(w,"EM",{});var ul=c(Fs);Ba=r(ul,"peak memory usage"),ul.forEach(a),$a=r(w," and "),Ms=t(w,"EM",{});var bl=c(Ms);Aa=r(bl,"required time"),bl.forEach(a),Ca=r(w," for both "),Is=t(w,"EM",{});var dl=c(Is);Pa=r(dl,"inference"),dl.forEach(a),Na=r(w," and "),Os=t(w,"EM",{});var fl=c(Os);Fa=r(fl,"training"),fl.forEach(a),Ma=r(w,"."),w.forEach(a),Re=m(e),q(J.$$.fragment,e),xe=m(e),g=t(e,"P",{});var k=c(g);Ia=r(k,"The benchmark classes "),Ss=t(k,"CODE",{});var jl=c(Ss);Oa=r(jl,"PyTorchBenchmark"),jl.forEach(a),Sa=r(k," and "),qs=t(k,"CODE",{});var gl=c(qs);qa=r(gl,"TensorFlowBenchmark"),gl.forEach(a),Da=r(k," expect an object of type "),Ds=t(k,"CODE",{});var _l=c(Ds);Ra=r(_l,"PyTorchBenchmarkArguments"),_l.forEach(a),xa=r(k,` and
`),Rs=t(k,"CODE",{});var yl=c(Rs);La=r(yl,"TensorFlowBenchmarkArguments"),yl.forEach(a),za=r(k,", respectively, for instantiation. "),xs=t(k,"CODE",{});var kl=c(xs);Ua=r(kl,"PyTorchBenchmarkArguments"),kl.forEach(a),Va=r(k," and "),Ls=t(k,"CODE",{});var El=c(Ls);Ha=r(El,"TensorFlowBenchmarkArguments"),El.forEach(a),Xa=r(k," are data classes and contain all relevant configurations for their corresponding benchmark class. In the following example, it is shown how a BERT model of type "),zs=t(k,"EM",{});var vl=c(zs);Ga=r(vl,"bert-base-cased"),vl.forEach(a),Wa=r(k," can be benchmarked."),k.forEach(a),Le=m(e),q(ps.$$.fragment,e),ze=m(e),i=t(e,"P",{});var d=c(i);Ya=r(d,"Here, three arguments are given to the benchmark argument data classes, namely "),Us=t(d,"CODE",{});var wl=c(Us);Ja=r(wl,"models"),wl.forEach(a),Qa=r(d,", "),Vs=t(d,"CODE",{});var Tl=c(Vs);Ka=r(Tl,"batch_sizes"),Tl.forEach(a),Za=r(d,`, and
`),Hs=t(d,"CODE",{});var Bl=c(Hs);sn=r(Bl,"sequence_lengths"),Bl.forEach(a),en=r(d,". The argument "),Xs=t(d,"CODE",{});var $l=c(Xs);an=r($l,"models"),$l.forEach(a),nn=r(d," is required and expects a "),Gs=t(d,"CODE",{});var Al=c(Gs);rn=r(Al,"list"),Al.forEach(a),ln=r(d,` of model identifiers from the
`),hs=t(d,"A",{href:!0,rel:!0});var Cl=c(hs);tn=r(Cl,"model hub"),Cl.forEach(a),cn=r(d," The "),Ws=t(d,"CODE",{});var Pl=c(Ws);on=r(Pl,"list"),Pl.forEach(a),pn=r(d," arguments "),Ys=t(d,"CODE",{});var Nl=c(Ys);hn=r(Nl,"batch_sizes"),Nl.forEach(a),mn=r(d," and "),Js=t(d,"CODE",{});var Fl=c(Js);un=r(Fl,"sequence_lengths"),Fl.forEach(a),bn=r(d,` define
the size of the `),Qs=t(d,"CODE",{});var Ml=c(Qs);dn=r(Ml,"input_ids"),Ml.forEach(a),fn=r(d,` on which the model is benchmarked. There are many more parameters that can be configured
via the benchmark argument data classes. For more detail on these one can either directly consult the files
`),Ks=t(d,"CODE",{});var Il=c(Ks);jn=r(Il,"src/transformers/benchmark/benchmark_args_utils.py"),Il.forEach(a),gn=r(d,", "),Zs=t(d,"CODE",{});var Ol=c(Zs);_n=r(Ol,"src/transformers/benchmark/benchmark_args.py"),Ol.forEach(a),yn=r(d,` (for PyTorch)
and `),se=t(d,"CODE",{});var Sl=c(se);kn=r(Sl,"src/transformers/benchmark/benchmark_args_tf.py"),Sl.forEach(a),En=r(d,` (for Tensorflow). Alternatively, running the following shell
commands from root will print out a descriptive list of all configurable parameters for PyTorch and Tensorflow
respectively.`),d.forEach(a),Ue=m(e),q(ms.$$.fragment,e),Ve=m(e),Q=t(e,"P",{});var ca=c(Q);vn=r(ca,"An instantiated benchmark object can then simply be run by calling "),ee=t(ca,"CODE",{});var ql=c(ee);wn=r(ql,"benchmark.run()"),ql.forEach(a),Tn=r(ca,"."),ca.forEach(a),He=m(e),q(is.$$.fragment,e),Xe=m(e),u=t(e,"P",{});var f=c(u);Bn=r(f,"By default, the "),ae=t(f,"EM",{});var Dl=c(ae);$n=r(Dl,"time"),Dl.forEach(a),An=r(f," and the "),ne=t(f,"EM",{});var Rl=c(ne);Cn=r(Rl,"required memory"),Rl.forEach(a),Pn=r(f," for "),re=t(f,"EM",{});var xl=c(re);Nn=r(xl,"inference"),xl.forEach(a),Fn=r(f,` are benchmarked. In the example output above the first
two sections show the result corresponding to `),le=t(f,"EM",{});var Ll=c(le);Mn=r(Ll,"inference time"),Ll.forEach(a),In=r(f," and "),te=t(f,"EM",{});var zl=c(te);On=r(zl,"inference memory"),zl.forEach(a),Sn=r(f,`. In addition, all relevant
information about the computing environment, `),ce=t(f,"EM",{});var Ul=c(ce);qn=r(Ul,"e.g."),Ul.forEach(a),Dn=r(f,` the GPU type, the system, the library versions, etc\u2026 are printed
out in the third section under `),oe=t(f,"EM",{});var Vl=c(oe);Rn=r(Vl,"ENVIRONMENT INFORMATION"),Vl.forEach(a),xn=r(f,". This information can optionally be saved in a "),pe=t(f,"EM",{});var Hl=c(pe);Ln=r(Hl,".csv"),Hl.forEach(a),zn=r(f,` file
when adding the argument `),he=t(f,"CODE",{});var Xl=c(he);Un=r(Xl,"save_to_csv=True"),Xl.forEach(a),Vn=r(f," to "),me=t(f,"CODE",{});var Gl=c(me);Hn=r(Gl,"PyTorchBenchmarkArguments"),Gl.forEach(a),Xn=r(f,` and
`),ie=t(f,"CODE",{});var Wl=c(ie);Gn=r(Wl,"TensorFlowBenchmarkArguments"),Wl.forEach(a),Wn=r(f,` respectively. In this case, every section is saved in a separate
`),ue=t(f,"EM",{});var Yl=c(ue);Yn=r(Yl,".csv"),Yl.forEach(a),Jn=r(f," file. The path to each "),be=t(f,"EM",{});var Jl=c(be);Qn=r(Jl,".csv"),Jl.forEach(a),Kn=r(f," file can optionally be defined via the argument data classes."),f.forEach(a),Ge=m(e),A=t(e,"P",{});var ns=c(A);Zn=r(ns,"Instead of benchmarking pre-trained models via their model identifier, "),de=t(ns,"EM",{});var Ql=c(de);sr=r(Ql,"e.g."),Ql.forEach(a),er=m(ns),fe=t(ns,"CODE",{});var Kl=c(fe);ar=r(Kl,"bert-base-uncased"),Kl.forEach(a),nr=r(ns,`, the user can
alternatively benchmark an arbitrary configuration of any available model class. In this case, a `),je=t(ns,"CODE",{});var Zl=c(je);rr=r(Zl,"list"),Zl.forEach(a),lr=r(ns,` of
configurations must be inserted with the benchmark args as follows.`),ns.forEach(a),We=m(e),q(us.$$.fragment,e),Ye=m(e),v=t(e,"P",{});var I=c(v);tr=r(I,"Again, "),ge=t(I,"EM",{});var st=c(ge);cr=r(st,"inference time"),st.forEach(a),or=r(I," and "),_e=t(I,"EM",{});var et=c(_e);pr=r(et,"required memory"),et.forEach(a),hr=r(I," for "),ye=t(I,"EM",{});var at=c(ye);mr=r(at,"inference"),at.forEach(a),ir=r(I,` are measured, but this time for customized configurations
of the `),ke=t(I,"CODE",{});var nt=c(ke);ur=r(nt,"BertModel"),nt.forEach(a),br=r(I,` class. This feature can especially be helpful when deciding for which configuration the model
should be trained.`),I.forEach(a),Je=m(e),X=t(e,"H2",{class:!0});var oa=c(X);K=t(oa,"A",{id:!0,class:!0,href:!0});var rt=c(K);Ee=t(rt,"SPAN",{});var lt=c(Ee);q(bs.$$.fragment,lt),lt.forEach(a),rt.forEach(a),dr=m(oa),ve=t(oa,"SPAN",{});var tt=c(ve);fr=r(tt,"Benchmark best practices"),tt.forEach(a),oa.forEach(a),Qe=m(e),Es=t(e,"P",{});var ct=c(Es);jr=r(ct,"This section lists a couple of best practices one should be aware of when benchmarking a model."),ct.forEach(a),Ke=m(e),F=t(e,"UL",{});var Ts=c(F);C=t(Ts,"LI",{});var rs=c(C);gr=r(rs,`Currently, only single device benchmarking is supported. When benchmarking on GPU, it is recommended that the user
specifies on which device the code should be run by setting the `),we=t(rs,"CODE",{});var ot=c(we);_r=r(ot,"CUDA_VISIBLE_DEVICES"),ot.forEach(a),yr=r(rs,` environment variable in the
shell, `),Te=t(rs,"EM",{});var pt=c(Te);kr=r(pt,"e.g."),pt.forEach(a),Er=m(rs),Be=t(rs,"CODE",{});var ht=c(Be);vr=r(ht,"export CUDA_VISIBLE_DEVICES=0"),ht.forEach(a),wr=r(rs," before running the code."),rs.forEach(a),Tr=m(Ts),$=t(Ts,"LI",{});var O=c($);Br=r(O,"The option "),$e=t(O,"CODE",{});var mt=c($e);$r=r(mt,"no_multi_processing"),mt.forEach(a),Ar=r(O," should only be set to "),Ae=t(O,"CODE",{});var it=c(Ae);Cr=r(it,"True"),it.forEach(a),Pr=r(O,` for testing and debugging. To ensure accurate
memory measurement it is recommended to run each memory benchmark in a separate process by making sure
`),Ce=t(O,"CODE",{});var ut=c(Ce);Nr=r(ut,"no_multi_processing"),ut.forEach(a),Fr=r(O," is set to "),Pe=t(O,"CODE",{});var bt=c(Pe);Mr=r(bt,"True"),bt.forEach(a),Ir=r(O,"."),O.forEach(a),Or=m(Ts),Ne=t(Ts,"LI",{});var dt=c(Ne);Sr=r(dt,`One should always state the environment information when sharing the results of a model benchmark. Results can vary
heavily between different GPU devices, library versions, etc., so that benchmark results on their own are not very
useful for the community.`),dt.forEach(a),Ts.forEach(a),Ze=m(e),G=t(e,"H2",{class:!0});var pa=c(G);Z=t(pa,"A",{id:!0,class:!0,href:!0});var ft=c(Z);Fe=t(ft,"SPAN",{});var jt=c(Fe);q(ds.$$.fragment,jt),jt.forEach(a),ft.forEach(a),qr=m(pa),Me=t(pa,"SPAN",{});var gt=c(Me);Dr=r(gt,"Sharing your benchmark"),gt.forEach(a),pa.forEach(a),sa=m(e),ss=t(e,"P",{});var ha=c(ss);Rr=r(ha,"Previously all available core models (10 at the time) have been benchmarked for "),Ie=t(ha,"EM",{});var _t=c(Ie);xr=r(_t,"inference time"),_t.forEach(a),Lr=r(ha,`, across many different
settings: using PyTorch, with and without TorchScript, using TensorFlow, with and without XLA. All of those tests were
done across CPUs (except for TensorFlow XLA) and GPUs.`),ha.forEach(a),ea=m(e),M=t(e,"P",{});var Bs=c(M);zr=r(Bs,"The approach is detailed in the "),fs=t(Bs,"A",{href:!0,rel:!0});var yt=c(fs);Ur=r(yt,"following blogpost"),yt.forEach(a),Vr=r(Bs,` and the results are
available `),js=t(Bs,"A",{href:!0,rel:!0});var kt=c(js);Hr=r(kt,"here"),kt.forEach(a),Xr=r(Bs,"."),Bs.forEach(a),aa=m(e),es=t(e,"P",{});var ma=c(es);Gr=r(ma,"With the new "),Oe=t(ma,"EM",{});var Et=c(Oe);Wr=r(Et,"benchmark"),Et.forEach(a),Yr=r(ma," tools, it is easier than ever to share your benchmark results with the community"),ma.forEach(a),na=m(e),as=t(e,"UL",{});var ia=c(as);vs=t(ia,"LI",{});var el=c(vs);gs=t(el,"A",{href:!0,rel:!0});var vt=c(gs);Jr=r(vt,"PyTorch Benchmarking Results"),vt.forEach(a),Qr=r(el,"."),el.forEach(a),Kr=m(ia),ws=t(ia,"LI",{});var al=c(ws);_s=t(al,"A",{href:!0,rel:!0});var wt=c(_s);Zr=r(wt,"TensorFlow Benchmarking Results"),wt.forEach(a),sl=r(al,"."),al.forEach(a),ia.forEach(a),this.h()},h(){b(j,"name","hf:doc:metadata"),b(j,"content",JSON.stringify(Mt)),b(E,"id","benchmarks"),b(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(E,"href","#benchmarks"),b(_,"class","relative group"),b(cs,"href","https://github.com/huggingface/transformers/tree/master/notebooks/05-benchmark.ipynb"),b(cs,"rel","nofollow"),b(Y,"id","how-to-benchmark-transformer-models"),b(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Y,"href","#how-to-benchmark-transformer-models"),b(H,"class","relative group"),b(hs,"href","https://huggingface.co/models"),b(hs,"rel","nofollow"),b(K,"id","benchmark-best-practices"),b(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(K,"href","#benchmark-best-practices"),b(X,"class","relative group"),b(Z,"id","sharing-your-benchmark"),b(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Z,"href","#sharing-your-benchmark"),b(G,"class","relative group"),b(fs,"href","https://medium.com/huggingface/benchmarking-transformers-pytorch-and-tensorflow-e2917fb891c2"),b(fs,"rel","nofollow"),b(js,"href","https://docs.google.com/spreadsheets/d/1sryqufw2D0XlUH4sq3e9Wnxu5EAQkaohzrJbd5HdQ_w/edit?usp=sharing"),b(js,"rel","nofollow"),b(gs,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/benchmarking/README.md"),b(gs,"rel","nofollow"),b(_s,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/benchmarking/README.md"),b(_s,"rel","nofollow")},m(e,o){s(document.head,j),p(e,P,o),p(e,_,o),s(_,E),s(E,z),D(T,z,null),s(_,ls),s(_,U),s(U,V),p(e,B,o),D(N,e,o),p(e,ts,o),p(e,ks,o),s(ks,da),p(e,Se,o),p(e,W,o),s(W,fa),s(W,cs),s(cs,ja),s(W,ga),p(e,qe,o),p(e,H,o),s(H,Y),s(Y,As),D(os,As,null),s(H,_a),s(H,Cs),s(Cs,ya),p(e,De,o),p(e,y,o),s(y,ka),s(y,Ps),s(Ps,Ea),s(y,va),s(y,Ns),s(Ns,wa),s(y,Ta),s(y,Fs),s(Fs,Ba),s(y,$a),s(y,Ms),s(Ms,Aa),s(y,Ca),s(y,Is),s(Is,Pa),s(y,Na),s(y,Os),s(Os,Fa),s(y,Ma),p(e,Re,o),D(J,e,o),p(e,xe,o),p(e,g,o),s(g,Ia),s(g,Ss),s(Ss,Oa),s(g,Sa),s(g,qs),s(qs,qa),s(g,Da),s(g,Ds),s(Ds,Ra),s(g,xa),s(g,Rs),s(Rs,La),s(g,za),s(g,xs),s(xs,Ua),s(g,Va),s(g,Ls),s(Ls,Ha),s(g,Xa),s(g,zs),s(zs,Ga),s(g,Wa),p(e,Le,o),D(ps,e,o),p(e,ze,o),p(e,i,o),s(i,Ya),s(i,Us),s(Us,Ja),s(i,Qa),s(i,Vs),s(Vs,Ka),s(i,Za),s(i,Hs),s(Hs,sn),s(i,en),s(i,Xs),s(Xs,an),s(i,nn),s(i,Gs),s(Gs,rn),s(i,ln),s(i,hs),s(hs,tn),s(i,cn),s(i,Ws),s(Ws,on),s(i,pn),s(i,Ys),s(Ys,hn),s(i,mn),s(i,Js),s(Js,un),s(i,bn),s(i,Qs),s(Qs,dn),s(i,fn),s(i,Ks),s(Ks,jn),s(i,gn),s(i,Zs),s(Zs,_n),s(i,yn),s(i,se),s(se,kn),s(i,En),p(e,Ue,o),D(ms,e,o),p(e,Ve,o),p(e,Q,o),s(Q,vn),s(Q,ee),s(ee,wn),s(Q,Tn),p(e,He,o),D(is,e,o),p(e,Xe,o),p(e,u,o),s(u,Bn),s(u,ae),s(ae,$n),s(u,An),s(u,ne),s(ne,Cn),s(u,Pn),s(u,re),s(re,Nn),s(u,Fn),s(u,le),s(le,Mn),s(u,In),s(u,te),s(te,On),s(u,Sn),s(u,ce),s(ce,qn),s(u,Dn),s(u,oe),s(oe,Rn),s(u,xn),s(u,pe),s(pe,Ln),s(u,zn),s(u,he),s(he,Un),s(u,Vn),s(u,me),s(me,Hn),s(u,Xn),s(u,ie),s(ie,Gn),s(u,Wn),s(u,ue),s(ue,Yn),s(u,Jn),s(u,be),s(be,Qn),s(u,Kn),p(e,Ge,o),p(e,A,o),s(A,Zn),s(A,de),s(de,sr),s(A,er),s(A,fe),s(fe,ar),s(A,nr),s(A,je),s(je,rr),s(A,lr),p(e,We,o),D(us,e,o),p(e,Ye,o),p(e,v,o),s(v,tr),s(v,ge),s(ge,cr),s(v,or),s(v,_e),s(_e,pr),s(v,hr),s(v,ye),s(ye,mr),s(v,ir),s(v,ke),s(ke,ur),s(v,br),p(e,Je,o),p(e,X,o),s(X,K),s(K,Ee),D(bs,Ee,null),s(X,dr),s(X,ve),s(ve,fr),p(e,Qe,o),p(e,Es,o),s(Es,jr),p(e,Ke,o),p(e,F,o),s(F,C),s(C,gr),s(C,we),s(we,_r),s(C,yr),s(C,Te),s(Te,kr),s(C,Er),s(C,Be),s(Be,vr),s(C,wr),s(F,Tr),s(F,$),s($,Br),s($,$e),s($e,$r),s($,Ar),s($,Ae),s(Ae,Cr),s($,Pr),s($,Ce),s(Ce,Nr),s($,Fr),s($,Pe),s(Pe,Mr),s($,Ir),s(F,Or),s(F,Ne),s(Ne,Sr),p(e,Ze,o),p(e,G,o),s(G,Z),s(Z,Fe),D(ds,Fe,null),s(G,qr),s(G,Me),s(Me,Dr),p(e,sa,o),p(e,ss,o),s(ss,Rr),s(ss,Ie),s(Ie,xr),s(ss,Lr),p(e,ea,o),p(e,M,o),s(M,zr),s(M,fs),s(fs,Ur),s(M,Vr),s(M,js),s(js,Hr),s(M,Xr),p(e,aa,o),p(e,es,o),s(es,Gr),s(es,Oe),s(Oe,Wr),s(es,Yr),p(e,na,o),p(e,as,o),s(as,vs),s(vs,gs),s(gs,Jr),s(vs,Qr),s(as,Kr),s(as,ws),s(ws,_s),s(_s,Zr),s(ws,sl),ra=!0},p(e,[o]){const ys={};o&2&&(ys.$$scope={dirty:o,ctx:e}),J.$set(ys)},i(e){ra||(R(T.$$.fragment,e),R(N.$$.fragment,e),R(os.$$.fragment,e),R(J.$$.fragment,e),R(ps.$$.fragment,e),R(ms.$$.fragment,e),R(is.$$.fragment,e),R(us.$$.fragment,e),R(bs.$$.fragment,e),R(ds.$$.fragment,e),ra=!0)},o(e){x(T.$$.fragment,e),x(N.$$.fragment,e),x(os.$$.fragment,e),x(J.$$.fragment,e),x(ps.$$.fragment,e),x(ms.$$.fragment,e),x(is.$$.fragment,e),x(us.$$.fragment,e),x(bs.$$.fragment,e),x(ds.$$.fragment,e),ra=!1},d(e){a(j),e&&a(P),e&&a(_),L(T),e&&a(B),L(N,e),e&&a(ts),e&&a(ks),e&&a(Se),e&&a(W),e&&a(qe),e&&a(H),L(os),e&&a(De),e&&a(y),e&&a(Re),L(J,e),e&&a(xe),e&&a(g),e&&a(Le),L(ps,e),e&&a(ze),e&&a(i),e&&a(Ue),L(ms,e),e&&a(Ve),e&&a(Q),e&&a(He),L(is,e),e&&a(Xe),e&&a(u),e&&a(Ge),e&&a(A),e&&a(We),L(us,e),e&&a(Ye),e&&a(v),e&&a(Je),e&&a(X),L(bs),e&&a(Qe),e&&a(Es),e&&a(Ke),e&&a(F),e&&a(Ze),e&&a(G),L(ds),e&&a(sa),e&&a(ss),e&&a(ea),e&&a(M),e&&a(aa),e&&a(es),e&&a(na),e&&a(as)}}}const Mt={local:"benchmarks",sections:[{local:"how-to-benchmark-transformer-models",title:"How to benchmark \u{1F917} Transformer models"},{local:"benchmark-best-practices",title:"Benchmark best practices"},{local:"sharing-your-benchmark",title:"Sharing your benchmark"}],title:"Benchmarks"};function It($s,j,P){let{fw:_}=j;return $s.$$set=E=>{"fw"in E&&P(0,_=E.fw)},[_]}class Lt extends Tt{constructor(j){super();Bt(this,j,It,Ft,$t,{fw:0})}}export{Lt as default,Mt as metadata};
