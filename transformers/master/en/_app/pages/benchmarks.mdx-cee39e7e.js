import{S as Tt,i as Bt,s as $t,e as l,k as h,w as S,t as n,L as At,c as t,d as a,m,a as o,x as D,h as r,b,J as s,g as p,y as q,q as x,o as R,B as L}from"../chunks/vendor-9e2b328e.js";import{T as Pt}from"../chunks/Tip-76f97a76.js";import{I as ua}from"../chunks/IconCopyLink-fd0e58fd.js";import{C as ba}from"../chunks/CodeBlockFw-9c69f7d0.js";import{D as Ct}from"../chunks/DocNotebookDropdown-112a30e3.js";import"../chunks/CopyButton-4ae140ab.js";function Nt($s){let j,C,_,E,z,T,ls,U;return{c(){j=l("p"),C=n("Hereby, "),_=l("em"),E=n("inference"),z=n(" is defined by a single forward pass, and "),T=l("em"),ls=n("training"),U=n(` is defined by a single forward pass and
backward pass.`)},l(V){j=t(V,"P",{});var B=o(j);C=r(B,"Hereby, "),_=t(B,"EM",{});var N=o(_);E=r(N,"inference"),N.forEach(a),z=r(B," is defined by a single forward pass, and "),T=t(B,"EM",{});var ts=o(T);ls=r(ts,"training"),ts.forEach(a),U=r(B,` is defined by a single forward pass and
backward pass.`),B.forEach(a)},m(V,B){p(V,j,B),s(j,C),s(j,_),s(_,E),s(j,z),s(j,T),s(T,ls),s(j,U)},d(V){V&&a(j)}}}function Ft($s){let j,C,_,E,z,T,ls,U,V,B,N,ts,ks,da,Se,W,fa,os,ja,ga,De,H,Y,As,cs,_a,Ps,ya,qe,y,ka,Cs,Ea,va,Ns,wa,Ta,Fs,Ba,$a,Ms,Aa,Pa,Is,Ca,Na,Os,Fa,Ma,xe,J,Re,g,Ia,Ss,Oa,Sa,Ds,Da,qa,qs,xa,Ra,xs,La,za,Rs,Ua,Va,Ls,Ha,Xa,zs,Ga,Wa,Le,ps,ze,i,Ya,Us,Ja,Qa,Vs,Ka,Za,Hs,sn,en,Xs,an,nn,Gs,rn,ln,hs,tn,on,Ws,cn,pn,Ys,hn,mn,Js,un,bn,Qs,dn,fn,Ks,jn,gn,Zs,_n,yn,se,kn,En,Ue,ms,Ve,Q,vn,ee,wn,Tn,He,is,Xe,u,Bn,ae,$n,An,ne,Pn,Cn,re,Nn,Fn,le,Mn,In,te,On,Sn,oe,Dn,qn,ce,xn,Rn,pe,Ln,zn,he,Un,Vn,me,Hn,Xn,ie,Gn,Wn,ue,Yn,Jn,be,Qn,Kn,Ge,A,Zn,de,sr,er,fe,ar,nr,je,rr,lr,We,us,Ye,v,tr,ge,or,cr,_e,pr,hr,ye,mr,ir,ke,ur,br,Je,X,K,Ee,bs,dr,ve,fr,Qe,Es,jr,Ke,F,P,gr,we,_r,yr,Te,kr,Er,Be,vr,wr,Tr,$,Br,$e,$r,Ar,Ae,Pr,Cr,Pe,Nr,Fr,Ce,Mr,Ir,Or,Ne,Sr,Ze,G,Z,Fe,ds,Dr,Me,qr,sa,ss,xr,Ie,Rr,Lr,ea,M,zr,fs,Ur,Vr,js,Hr,Xr,aa,es,Gr,Oe,Wr,Yr,na,as,vs,gs,Jr,Qr,Kr,ws,_s,Zr,sl,ra;return T=new ua({}),N=new Ct({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Mixed",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/benchmarks.ipynb"},{label:"PyTorch",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/pytorch/benchmarks.ipynb"},{label:"TensorFlow",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/tensorflow/benchmarks.ipynb"},{label:"Mixed",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/transformers_doc/benchmarks.ipynb"},{label:"PyTorch",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/transformers_doc/pytorch/benchmarks.ipynb"},{label:"TensorFlow",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/transformers_doc/tensorflow/benchmarks.ipynb"}]}}),cs=new ua({}),J=new Pt({props:{$$slots:{default:[Nt]},$$scope:{ctx:$s}}}),ps=new ba({props:{pt:{code:`from transformers import PyTorchBenchmark, PyTorchBenchmarkArguments

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
- use_tpu: <span class="hljs-literal">False</span>`}}}),bs=new ua({}),ds=new ua({}),{c(){j=l("meta"),C=h(),_=l("h1"),E=l("a"),z=l("span"),S(T.$$.fragment),ls=h(),U=l("span"),V=n("Benchmarks"),B=h(),S(N.$$.fragment),ts=h(),ks=l("p"),da=n("Let\u2019s take a look at how \u{1F917} Transformers models can be benchmarked, best practices, and already available benchmarks."),Se=h(),W=l("p"),fa=n("A notebook explaining in more detail how to benchmark \u{1F917} Transformers models can be found "),os=l("a"),ja=n("here"),ga=n("."),De=h(),H=l("h2"),Y=l("a"),As=l("span"),S(cs.$$.fragment),_a=h(),Ps=l("span"),ya=n("How to benchmark \u{1F917} Transformers models"),qe=h(),y=l("p"),ka=n("The classes "),Cs=l("code"),Ea=n("PyTorchBenchmark"),va=n("and "),Ns=l("code"),wa=n("TensorFlowBenchmark"),Ta=n("allow to flexibly benchmark \u{1F917} Transformers models. The benchmark classes allow us to measure the "),Fs=l("em"),Ba=n("peak memory usage"),$a=n(" and "),Ms=l("em"),Aa=n("required time"),Pa=n(" for both "),Is=l("em"),Ca=n("inference"),Na=n(" and "),Os=l("em"),Fa=n("training"),Ma=n("."),xe=h(),S(J.$$.fragment),Re=h(),g=l("p"),Ia=n("The benchmark classes "),Ss=l("code"),Oa=n("PyTorchBenchmark"),Sa=n("and "),Ds=l("code"),Da=n("TensorFlowBenchmark"),qa=n("expect an object of type "),qs=l("code"),xa=n("PyTorchBenchmarkArguments"),Ra=n(`and
`),xs=l("code"),La=n("TensorFlowBenchmarkArguments"),za=n(" respectively, for instantiation. "),Rs=l("code"),Ua=n("PyTorchBenchmarkArguments"),Va=n("and "),Ls=l("code"),Ha=n("TensorFlowBenchmarkArguments"),Xa=n("are data classes and contain all relevant configurations for their corresponding benchmark class. In the following example, it is shown how a BERT model of type "),zs=l("em"),Ga=n("bert-base-cased"),Wa=n(" can be benchmarked."),Le=h(),S(ps.$$.fragment),ze=h(),i=l("p"),Ya=n("Here, three arguments are given to the benchmark argument data classes, namely "),Us=l("code"),Ja=n("models"),Qa=n(", "),Vs=l("code"),Ka=n("batch_sizes"),Za=n(`, and
`),Hs=l("code"),sn=n("sequence_lengths"),en=n(". The argument "),Xs=l("code"),an=n("models"),nn=n(" is required and expects a "),Gs=l("code"),rn=n("list"),ln=n(` of model identifiers from the
`),hs=l("a"),tn=n("model hub"),on=n(" The "),Ws=l("code"),cn=n("list"),pn=n(" arguments "),Ys=l("code"),hn=n("batch_sizes"),mn=n(" and "),Js=l("code"),un=n("sequence_lengths"),bn=n(` define
the size of the `),Qs=l("code"),dn=n("input_ids"),fn=n(` on which the model is benchmarked. There are many more parameters that can be configured
via the benchmark argument data classes. For more detail on these one can either directly consult the files
`),Ks=l("code"),jn=n("src/transformers/benchmark/benchmark_args_utils.py"),gn=n(", "),Zs=l("code"),_n=n("src/transformers/benchmark/benchmark_args.py"),yn=n(` (for PyTorch)
and `),se=l("code"),kn=n("src/transformers/benchmark/benchmark_args_tf.py"),En=n(` (for Tensorflow). Alternatively, running the following shell
commands from root will print out a descriptive list of all configurable parameters for PyTorch and Tensorflow
respectively.`),Ue=h(),S(ms.$$.fragment),Ve=h(),Q=l("p"),vn=n("An instantiated benchmark object can then simply be run by calling "),ee=l("code"),wn=n("benchmark.run()"),Tn=n("."),He=h(),S(is.$$.fragment),Xe=h(),u=l("p"),Bn=n("By default, the "),ae=l("em"),$n=n("time"),An=n(" and the "),ne=l("em"),Pn=n("required memory"),Cn=n(" for "),re=l("em"),Nn=n("inference"),Fn=n(` are benchmarked. In the example output above the first
two sections show the result corresponding to `),le=l("em"),Mn=n("inference time"),In=n(" and "),te=l("em"),On=n("inference memory"),Sn=n(`. In addition, all relevant
information about the computing environment, `),oe=l("em"),Dn=n("e.g."),qn=n(` the GPU type, the system, the library versions, etc\u2026 are printed
out in the third section under `),ce=l("em"),xn=n("ENVIRONMENT INFORMATION"),Rn=n(". This information can optionally be saved in a "),pe=l("em"),Ln=n(".csv"),zn=n(` file
when adding the argument `),he=l("code"),Un=n("save_to_csv=True"),Vn=n(" to "),me=l("code"),Hn=n("PyTorchBenchmarkArguments"),Xn=n(`and
`),ie=l("code"),Gn=n("TensorFlowBenchmarkArguments"),Wn=n(`respectively. In this case, every section is saved in a separate
`),ue=l("em"),Yn=n(".csv"),Jn=n(" file. The path to each "),be=l("em"),Qn=n(".csv"),Kn=n(" file can optionally be defined via the argument data classes."),Ge=h(),A=l("p"),Zn=n("Instead of benchmarking pre-trained models via their model identifier, "),de=l("em"),sr=n("e.g."),er=h(),fe=l("code"),ar=n("bert-base-uncased"),nr=n(`, the user can
alternatively benchmark an arbitrary configuration of any available model class. In this case, a `),je=l("code"),rr=n("list"),lr=n(` of
configurations must be inserted with the benchmark args as follows.`),We=h(),S(us.$$.fragment),Ye=h(),v=l("p"),tr=n("Again, "),ge=l("em"),or=n("inference time"),cr=n(" and "),_e=l("em"),pr=n("required memory"),hr=n(" for "),ye=l("em"),mr=n("inference"),ir=n(` are measured, but this time for customized configurations
of the `),ke=l("code"),ur=n("BertModel"),br=n(` class. This feature can especially be helpful when deciding for which configuration the model
should be trained.`),Je=h(),X=l("h2"),K=l("a"),Ee=l("span"),S(bs.$$.fragment),dr=h(),ve=l("span"),fr=n("Benchmark best practices"),Qe=h(),Es=l("p"),jr=n("This section lists a couple of best practices one should be aware of when benchmarking a model."),Ke=h(),F=l("ul"),P=l("li"),gr=n(`Currently, only single device benchmarking is supported. When benchmarking on GPU, it is recommended that the user
specifies on which device the code should be run by setting the `),we=l("code"),_r=n("CUDA_VISIBLE_DEVICES"),yr=n(` environment variable in the
shell, `),Te=l("em"),kr=n("e.g."),Er=h(),Be=l("code"),vr=n("export CUDA_VISIBLE_DEVICES=0"),wr=n(" before running the code."),Tr=h(),$=l("li"),Br=n("The option "),$e=l("code"),$r=n("no_multi_processing"),Ar=n(" should only be set to "),Ae=l("code"),Pr=n("True"),Cr=n(` for testing and debugging. To ensure accurate
memory measurement it is recommended to run each memory benchmark in a separate process by making sure
`),Pe=l("code"),Nr=n("no_multi_processing"),Fr=n(" is set to "),Ce=l("code"),Mr=n("True"),Ir=n("."),Or=h(),Ne=l("li"),Sr=n(`One should always state the environment information when sharing the results of a model benchmark. Results can vary
heavily between different GPU devices, library versions, etc., so that benchmark results on their own are not very
useful for the community.`),Ze=h(),G=l("h2"),Z=l("a"),Fe=l("span"),S(ds.$$.fragment),Dr=h(),Me=l("span"),qr=n("Sharing your benchmark"),sa=h(),ss=l("p"),xr=n("Previously all available core models (10 at the time) have been benchmarked for "),Ie=l("em"),Rr=n("inference time"),Lr=n(`, across many different
settings: using PyTorch, with and without TorchScript, using TensorFlow, with and without XLA. All of those tests were
done across CPUs (except for TensorFlow XLA) and GPUs.`),ea=h(),M=l("p"),zr=n("The approach is detailed in the "),fs=l("a"),Ur=n("following blogpost"),Vr=n(` and the results are
available `),js=l("a"),Hr=n("here"),Xr=n("."),aa=h(),es=l("p"),Gr=n("With the new "),Oe=l("em"),Wr=n("benchmark"),Yr=n(" tools, it is easier than ever to share your benchmark results with the community"),na=h(),as=l("ul"),vs=l("li"),gs=l("a"),Jr=n("PyTorch Benchmarking Results"),Qr=n("."),Kr=h(),ws=l("li"),_s=l("a"),Zr=n("TensorFlow Benchmarking Results"),sl=n("."),this.h()},l(e){const c=At('[data-svelte="svelte-1phssyn"]',document.head);j=t(c,"META",{name:!0,content:!0}),c.forEach(a),C=m(e),_=t(e,"H1",{class:!0});var ys=o(_);E=t(ys,"A",{id:!0,class:!0,href:!0});var nl=o(E);z=t(nl,"SPAN",{});var rl=o(z);D(T.$$.fragment,rl),rl.forEach(a),nl.forEach(a),ls=m(ys),U=t(ys,"SPAN",{});var ll=o(U);V=r(ll,"Benchmarks"),ll.forEach(a),ys.forEach(a),B=m(e),D(N.$$.fragment,e),ts=m(e),ks=t(e,"P",{});var tl=o(ks);da=r(tl,"Let\u2019s take a look at how \u{1F917} Transformers models can be benchmarked, best practices, and already available benchmarks."),tl.forEach(a),Se=m(e),W=t(e,"P",{});var la=o(W);fa=r(la,"A notebook explaining in more detail how to benchmark \u{1F917} Transformers models can be found "),os=t(la,"A",{href:!0,rel:!0});var ol=o(os);ja=r(ol,"here"),ol.forEach(a),ga=r(la,"."),la.forEach(a),De=m(e),H=t(e,"H2",{class:!0});var ta=o(H);Y=t(ta,"A",{id:!0,class:!0,href:!0});var cl=o(Y);As=t(cl,"SPAN",{});var pl=o(As);D(cs.$$.fragment,pl),pl.forEach(a),cl.forEach(a),_a=m(ta),Ps=t(ta,"SPAN",{});var hl=o(Ps);ya=r(hl,"How to benchmark \u{1F917} Transformers models"),hl.forEach(a),ta.forEach(a),qe=m(e),y=t(e,"P",{});var w=o(y);ka=r(w,"The classes "),Cs=t(w,"CODE",{});var ml=o(Cs);Ea=r(ml,"PyTorchBenchmark"),ml.forEach(a),va=r(w,"and "),Ns=t(w,"CODE",{});var il=o(Ns);wa=r(il,"TensorFlowBenchmark"),il.forEach(a),Ta=r(w,"allow to flexibly benchmark \u{1F917} Transformers models. The benchmark classes allow us to measure the "),Fs=t(w,"EM",{});var ul=o(Fs);Ba=r(ul,"peak memory usage"),ul.forEach(a),$a=r(w," and "),Ms=t(w,"EM",{});var bl=o(Ms);Aa=r(bl,"required time"),bl.forEach(a),Pa=r(w," for both "),Is=t(w,"EM",{});var dl=o(Is);Ca=r(dl,"inference"),dl.forEach(a),Na=r(w," and "),Os=t(w,"EM",{});var fl=o(Os);Fa=r(fl,"training"),fl.forEach(a),Ma=r(w,"."),w.forEach(a),xe=m(e),D(J.$$.fragment,e),Re=m(e),g=t(e,"P",{});var k=o(g);Ia=r(k,"The benchmark classes "),Ss=t(k,"CODE",{});var jl=o(Ss);Oa=r(jl,"PyTorchBenchmark"),jl.forEach(a),Sa=r(k,"and "),Ds=t(k,"CODE",{});var gl=o(Ds);Da=r(gl,"TensorFlowBenchmark"),gl.forEach(a),qa=r(k,"expect an object of type "),qs=t(k,"CODE",{});var _l=o(qs);xa=r(_l,"PyTorchBenchmarkArguments"),_l.forEach(a),Ra=r(k,`and
`),xs=t(k,"CODE",{});var yl=o(xs);La=r(yl,"TensorFlowBenchmarkArguments"),yl.forEach(a),za=r(k," respectively, for instantiation. "),Rs=t(k,"CODE",{});var kl=o(Rs);Ua=r(kl,"PyTorchBenchmarkArguments"),kl.forEach(a),Va=r(k,"and "),Ls=t(k,"CODE",{});var El=o(Ls);Ha=r(El,"TensorFlowBenchmarkArguments"),El.forEach(a),Xa=r(k,"are data classes and contain all relevant configurations for their corresponding benchmark class. In the following example, it is shown how a BERT model of type "),zs=t(k,"EM",{});var vl=o(zs);Ga=r(vl,"bert-base-cased"),vl.forEach(a),Wa=r(k," can be benchmarked."),k.forEach(a),Le=m(e),D(ps.$$.fragment,e),ze=m(e),i=t(e,"P",{});var d=o(i);Ya=r(d,"Here, three arguments are given to the benchmark argument data classes, namely "),Us=t(d,"CODE",{});var wl=o(Us);Ja=r(wl,"models"),wl.forEach(a),Qa=r(d,", "),Vs=t(d,"CODE",{});var Tl=o(Vs);Ka=r(Tl,"batch_sizes"),Tl.forEach(a),Za=r(d,`, and
`),Hs=t(d,"CODE",{});var Bl=o(Hs);sn=r(Bl,"sequence_lengths"),Bl.forEach(a),en=r(d,". The argument "),Xs=t(d,"CODE",{});var $l=o(Xs);an=r($l,"models"),$l.forEach(a),nn=r(d," is required and expects a "),Gs=t(d,"CODE",{});var Al=o(Gs);rn=r(Al,"list"),Al.forEach(a),ln=r(d,` of model identifiers from the
`),hs=t(d,"A",{href:!0,rel:!0});var Pl=o(hs);tn=r(Pl,"model hub"),Pl.forEach(a),on=r(d," The "),Ws=t(d,"CODE",{});var Cl=o(Ws);cn=r(Cl,"list"),Cl.forEach(a),pn=r(d," arguments "),Ys=t(d,"CODE",{});var Nl=o(Ys);hn=r(Nl,"batch_sizes"),Nl.forEach(a),mn=r(d," and "),Js=t(d,"CODE",{});var Fl=o(Js);un=r(Fl,"sequence_lengths"),Fl.forEach(a),bn=r(d,` define
the size of the `),Qs=t(d,"CODE",{});var Ml=o(Qs);dn=r(Ml,"input_ids"),Ml.forEach(a),fn=r(d,` on which the model is benchmarked. There are many more parameters that can be configured
via the benchmark argument data classes. For more detail on these one can either directly consult the files
`),Ks=t(d,"CODE",{});var Il=o(Ks);jn=r(Il,"src/transformers/benchmark/benchmark_args_utils.py"),Il.forEach(a),gn=r(d,", "),Zs=t(d,"CODE",{});var Ol=o(Zs);_n=r(Ol,"src/transformers/benchmark/benchmark_args.py"),Ol.forEach(a),yn=r(d,` (for PyTorch)
and `),se=t(d,"CODE",{});var Sl=o(se);kn=r(Sl,"src/transformers/benchmark/benchmark_args_tf.py"),Sl.forEach(a),En=r(d,` (for Tensorflow). Alternatively, running the following shell
commands from root will print out a descriptive list of all configurable parameters for PyTorch and Tensorflow
respectively.`),d.forEach(a),Ue=m(e),D(ms.$$.fragment,e),Ve=m(e),Q=t(e,"P",{});var oa=o(Q);vn=r(oa,"An instantiated benchmark object can then simply be run by calling "),ee=t(oa,"CODE",{});var Dl=o(ee);wn=r(Dl,"benchmark.run()"),Dl.forEach(a),Tn=r(oa,"."),oa.forEach(a),He=m(e),D(is.$$.fragment,e),Xe=m(e),u=t(e,"P",{});var f=o(u);Bn=r(f,"By default, the "),ae=t(f,"EM",{});var ql=o(ae);$n=r(ql,"time"),ql.forEach(a),An=r(f," and the "),ne=t(f,"EM",{});var xl=o(ne);Pn=r(xl,"required memory"),xl.forEach(a),Cn=r(f," for "),re=t(f,"EM",{});var Rl=o(re);Nn=r(Rl,"inference"),Rl.forEach(a),Fn=r(f,` are benchmarked. In the example output above the first
two sections show the result corresponding to `),le=t(f,"EM",{});var Ll=o(le);Mn=r(Ll,"inference time"),Ll.forEach(a),In=r(f," and "),te=t(f,"EM",{});var zl=o(te);On=r(zl,"inference memory"),zl.forEach(a),Sn=r(f,`. In addition, all relevant
information about the computing environment, `),oe=t(f,"EM",{});var Ul=o(oe);Dn=r(Ul,"e.g."),Ul.forEach(a),qn=r(f,` the GPU type, the system, the library versions, etc\u2026 are printed
out in the third section under `),ce=t(f,"EM",{});var Vl=o(ce);xn=r(Vl,"ENVIRONMENT INFORMATION"),Vl.forEach(a),Rn=r(f,". This information can optionally be saved in a "),pe=t(f,"EM",{});var Hl=o(pe);Ln=r(Hl,".csv"),Hl.forEach(a),zn=r(f,` file
when adding the argument `),he=t(f,"CODE",{});var Xl=o(he);Un=r(Xl,"save_to_csv=True"),Xl.forEach(a),Vn=r(f," to "),me=t(f,"CODE",{});var Gl=o(me);Hn=r(Gl,"PyTorchBenchmarkArguments"),Gl.forEach(a),Xn=r(f,`and
`),ie=t(f,"CODE",{});var Wl=o(ie);Gn=r(Wl,"TensorFlowBenchmarkArguments"),Wl.forEach(a),Wn=r(f,`respectively. In this case, every section is saved in a separate
`),ue=t(f,"EM",{});var Yl=o(ue);Yn=r(Yl,".csv"),Yl.forEach(a),Jn=r(f," file. The path to each "),be=t(f,"EM",{});var Jl=o(be);Qn=r(Jl,".csv"),Jl.forEach(a),Kn=r(f," file can optionally be defined via the argument data classes."),f.forEach(a),Ge=m(e),A=t(e,"P",{});var ns=o(A);Zn=r(ns,"Instead of benchmarking pre-trained models via their model identifier, "),de=t(ns,"EM",{});var Ql=o(de);sr=r(Ql,"e.g."),Ql.forEach(a),er=m(ns),fe=t(ns,"CODE",{});var Kl=o(fe);ar=r(Kl,"bert-base-uncased"),Kl.forEach(a),nr=r(ns,`, the user can
alternatively benchmark an arbitrary configuration of any available model class. In this case, a `),je=t(ns,"CODE",{});var Zl=o(je);rr=r(Zl,"list"),Zl.forEach(a),lr=r(ns,` of
configurations must be inserted with the benchmark args as follows.`),ns.forEach(a),We=m(e),D(us.$$.fragment,e),Ye=m(e),v=t(e,"P",{});var I=o(v);tr=r(I,"Again, "),ge=t(I,"EM",{});var st=o(ge);or=r(st,"inference time"),st.forEach(a),cr=r(I," and "),_e=t(I,"EM",{});var et=o(_e);pr=r(et,"required memory"),et.forEach(a),hr=r(I," for "),ye=t(I,"EM",{});var at=o(ye);mr=r(at,"inference"),at.forEach(a),ir=r(I,` are measured, but this time for customized configurations
of the `),ke=t(I,"CODE",{});var nt=o(ke);ur=r(nt,"BertModel"),nt.forEach(a),br=r(I,` class. This feature can especially be helpful when deciding for which configuration the model
should be trained.`),I.forEach(a),Je=m(e),X=t(e,"H2",{class:!0});var ca=o(X);K=t(ca,"A",{id:!0,class:!0,href:!0});var rt=o(K);Ee=t(rt,"SPAN",{});var lt=o(Ee);D(bs.$$.fragment,lt),lt.forEach(a),rt.forEach(a),dr=m(ca),ve=t(ca,"SPAN",{});var tt=o(ve);fr=r(tt,"Benchmark best practices"),tt.forEach(a),ca.forEach(a),Qe=m(e),Es=t(e,"P",{});var ot=o(Es);jr=r(ot,"This section lists a couple of best practices one should be aware of when benchmarking a model."),ot.forEach(a),Ke=m(e),F=t(e,"UL",{});var Ts=o(F);P=t(Ts,"LI",{});var rs=o(P);gr=r(rs,`Currently, only single device benchmarking is supported. When benchmarking on GPU, it is recommended that the user
specifies on which device the code should be run by setting the `),we=t(rs,"CODE",{});var ct=o(we);_r=r(ct,"CUDA_VISIBLE_DEVICES"),ct.forEach(a),yr=r(rs,` environment variable in the
shell, `),Te=t(rs,"EM",{});var pt=o(Te);kr=r(pt,"e.g."),pt.forEach(a),Er=m(rs),Be=t(rs,"CODE",{});var ht=o(Be);vr=r(ht,"export CUDA_VISIBLE_DEVICES=0"),ht.forEach(a),wr=r(rs," before running the code."),rs.forEach(a),Tr=m(Ts),$=t(Ts,"LI",{});var O=o($);Br=r(O,"The option "),$e=t(O,"CODE",{});var mt=o($e);$r=r(mt,"no_multi_processing"),mt.forEach(a),Ar=r(O," should only be set to "),Ae=t(O,"CODE",{});var it=o(Ae);Pr=r(it,"True"),it.forEach(a),Cr=r(O,` for testing and debugging. To ensure accurate
memory measurement it is recommended to run each memory benchmark in a separate process by making sure
`),Pe=t(O,"CODE",{});var ut=o(Pe);Nr=r(ut,"no_multi_processing"),ut.forEach(a),Fr=r(O," is set to "),Ce=t(O,"CODE",{});var bt=o(Ce);Mr=r(bt,"True"),bt.forEach(a),Ir=r(O,"."),O.forEach(a),Or=m(Ts),Ne=t(Ts,"LI",{});var dt=o(Ne);Sr=r(dt,`One should always state the environment information when sharing the results of a model benchmark. Results can vary
heavily between different GPU devices, library versions, etc., so that benchmark results on their own are not very
useful for the community.`),dt.forEach(a),Ts.forEach(a),Ze=m(e),G=t(e,"H2",{class:!0});var pa=o(G);Z=t(pa,"A",{id:!0,class:!0,href:!0});var ft=o(Z);Fe=t(ft,"SPAN",{});var jt=o(Fe);D(ds.$$.fragment,jt),jt.forEach(a),ft.forEach(a),Dr=m(pa),Me=t(pa,"SPAN",{});var gt=o(Me);qr=r(gt,"Sharing your benchmark"),gt.forEach(a),pa.forEach(a),sa=m(e),ss=t(e,"P",{});var ha=o(ss);xr=r(ha,"Previously all available core models (10 at the time) have been benchmarked for "),Ie=t(ha,"EM",{});var _t=o(Ie);Rr=r(_t,"inference time"),_t.forEach(a),Lr=r(ha,`, across many different
settings: using PyTorch, with and without TorchScript, using TensorFlow, with and without XLA. All of those tests were
done across CPUs (except for TensorFlow XLA) and GPUs.`),ha.forEach(a),ea=m(e),M=t(e,"P",{});var Bs=o(M);zr=r(Bs,"The approach is detailed in the "),fs=t(Bs,"A",{href:!0,rel:!0});var yt=o(fs);Ur=r(yt,"following blogpost"),yt.forEach(a),Vr=r(Bs,` and the results are
available `),js=t(Bs,"A",{href:!0,rel:!0});var kt=o(js);Hr=r(kt,"here"),kt.forEach(a),Xr=r(Bs,"."),Bs.forEach(a),aa=m(e),es=t(e,"P",{});var ma=o(es);Gr=r(ma,"With the new "),Oe=t(ma,"EM",{});var Et=o(Oe);Wr=r(Et,"benchmark"),Et.forEach(a),Yr=r(ma," tools, it is easier than ever to share your benchmark results with the community"),ma.forEach(a),na=m(e),as=t(e,"UL",{});var ia=o(as);vs=t(ia,"LI",{});var el=o(vs);gs=t(el,"A",{href:!0,rel:!0});var vt=o(gs);Jr=r(vt,"PyTorch Benchmarking Results"),vt.forEach(a),Qr=r(el,"."),el.forEach(a),Kr=m(ia),ws=t(ia,"LI",{});var al=o(ws);_s=t(al,"A",{href:!0,rel:!0});var wt=o(_s);Zr=r(wt,"TensorFlow Benchmarking Results"),wt.forEach(a),sl=r(al,"."),al.forEach(a),ia.forEach(a),this.h()},h(){b(j,"name","hf:doc:metadata"),b(j,"content",JSON.stringify(Mt)),b(E,"id","benchmarks"),b(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(E,"href","#benchmarks"),b(_,"class","relative group"),b(os,"href","https://github.com/huggingface/notebooks/tree/master/examples/benchmark.ipynb"),b(os,"rel","nofollow"),b(Y,"id","how-to-benchmark-transformers-models"),b(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Y,"href","#how-to-benchmark-transformers-models"),b(H,"class","relative group"),b(hs,"href","https://huggingface.co/models"),b(hs,"rel","nofollow"),b(K,"id","benchmark-best-practices"),b(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(K,"href","#benchmark-best-practices"),b(X,"class","relative group"),b(Z,"id","sharing-your-benchmark"),b(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Z,"href","#sharing-your-benchmark"),b(G,"class","relative group"),b(fs,"href","https://medium.com/huggingface/benchmarking-transformers-pytorch-and-tensorflow-e2917fb891c2"),b(fs,"rel","nofollow"),b(js,"href","https://docs.google.com/spreadsheets/d/1sryqufw2D0XlUH4sq3e9Wnxu5EAQkaohzrJbd5HdQ_w/edit?usp=sharing"),b(js,"rel","nofollow"),b(gs,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/benchmarking/README.md"),b(gs,"rel","nofollow"),b(_s,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/benchmarking/README.md"),b(_s,"rel","nofollow")},m(e,c){s(document.head,j),p(e,C,c),p(e,_,c),s(_,E),s(E,z),q(T,z,null),s(_,ls),s(_,U),s(U,V),p(e,B,c),q(N,e,c),p(e,ts,c),p(e,ks,c),s(ks,da),p(e,Se,c),p(e,W,c),s(W,fa),s(W,os),s(os,ja),s(W,ga),p(e,De,c),p(e,H,c),s(H,Y),s(Y,As),q(cs,As,null),s(H,_a),s(H,Ps),s(Ps,ya),p(e,qe,c),p(e,y,c),s(y,ka),s(y,Cs),s(Cs,Ea),s(y,va),s(y,Ns),s(Ns,wa),s(y,Ta),s(y,Fs),s(Fs,Ba),s(y,$a),s(y,Ms),s(Ms,Aa),s(y,Pa),s(y,Is),s(Is,Ca),s(y,Na),s(y,Os),s(Os,Fa),s(y,Ma),p(e,xe,c),q(J,e,c),p(e,Re,c),p(e,g,c),s(g,Ia),s(g,Ss),s(Ss,Oa),s(g,Sa),s(g,Ds),s(Ds,Da),s(g,qa),s(g,qs),s(qs,xa),s(g,Ra),s(g,xs),s(xs,La),s(g,za),s(g,Rs),s(Rs,Ua),s(g,Va),s(g,Ls),s(Ls,Ha),s(g,Xa),s(g,zs),s(zs,Ga),s(g,Wa),p(e,Le,c),q(ps,e,c),p(e,ze,c),p(e,i,c),s(i,Ya),s(i,Us),s(Us,Ja),s(i,Qa),s(i,Vs),s(Vs,Ka),s(i,Za),s(i,Hs),s(Hs,sn),s(i,en),s(i,Xs),s(Xs,an),s(i,nn),s(i,Gs),s(Gs,rn),s(i,ln),s(i,hs),s(hs,tn),s(i,on),s(i,Ws),s(Ws,cn),s(i,pn),s(i,Ys),s(Ys,hn),s(i,mn),s(i,Js),s(Js,un),s(i,bn),s(i,Qs),s(Qs,dn),s(i,fn),s(i,Ks),s(Ks,jn),s(i,gn),s(i,Zs),s(Zs,_n),s(i,yn),s(i,se),s(se,kn),s(i,En),p(e,Ue,c),q(ms,e,c),p(e,Ve,c),p(e,Q,c),s(Q,vn),s(Q,ee),s(ee,wn),s(Q,Tn),p(e,He,c),q(is,e,c),p(e,Xe,c),p(e,u,c),s(u,Bn),s(u,ae),s(ae,$n),s(u,An),s(u,ne),s(ne,Pn),s(u,Cn),s(u,re),s(re,Nn),s(u,Fn),s(u,le),s(le,Mn),s(u,In),s(u,te),s(te,On),s(u,Sn),s(u,oe),s(oe,Dn),s(u,qn),s(u,ce),s(ce,xn),s(u,Rn),s(u,pe),s(pe,Ln),s(u,zn),s(u,he),s(he,Un),s(u,Vn),s(u,me),s(me,Hn),s(u,Xn),s(u,ie),s(ie,Gn),s(u,Wn),s(u,ue),s(ue,Yn),s(u,Jn),s(u,be),s(be,Qn),s(u,Kn),p(e,Ge,c),p(e,A,c),s(A,Zn),s(A,de),s(de,sr),s(A,er),s(A,fe),s(fe,ar),s(A,nr),s(A,je),s(je,rr),s(A,lr),p(e,We,c),q(us,e,c),p(e,Ye,c),p(e,v,c),s(v,tr),s(v,ge),s(ge,or),s(v,cr),s(v,_e),s(_e,pr),s(v,hr),s(v,ye),s(ye,mr),s(v,ir),s(v,ke),s(ke,ur),s(v,br),p(e,Je,c),p(e,X,c),s(X,K),s(K,Ee),q(bs,Ee,null),s(X,dr),s(X,ve),s(ve,fr),p(e,Qe,c),p(e,Es,c),s(Es,jr),p(e,Ke,c),p(e,F,c),s(F,P),s(P,gr),s(P,we),s(we,_r),s(P,yr),s(P,Te),s(Te,kr),s(P,Er),s(P,Be),s(Be,vr),s(P,wr),s(F,Tr),s(F,$),s($,Br),s($,$e),s($e,$r),s($,Ar),s($,Ae),s(Ae,Pr),s($,Cr),s($,Pe),s(Pe,Nr),s($,Fr),s($,Ce),s(Ce,Mr),s($,Ir),s(F,Or),s(F,Ne),s(Ne,Sr),p(e,Ze,c),p(e,G,c),s(G,Z),s(Z,Fe),q(ds,Fe,null),s(G,Dr),s(G,Me),s(Me,qr),p(e,sa,c),p(e,ss,c),s(ss,xr),s(ss,Ie),s(Ie,Rr),s(ss,Lr),p(e,ea,c),p(e,M,c),s(M,zr),s(M,fs),s(fs,Ur),s(M,Vr),s(M,js),s(js,Hr),s(M,Xr),p(e,aa,c),p(e,es,c),s(es,Gr),s(es,Oe),s(Oe,Wr),s(es,Yr),p(e,na,c),p(e,as,c),s(as,vs),s(vs,gs),s(gs,Jr),s(vs,Qr),s(as,Kr),s(as,ws),s(ws,_s),s(_s,Zr),s(ws,sl),ra=!0},p(e,[c]){const ys={};c&2&&(ys.$$scope={dirty:c,ctx:e}),J.$set(ys)},i(e){ra||(x(T.$$.fragment,e),x(N.$$.fragment,e),x(cs.$$.fragment,e),x(J.$$.fragment,e),x(ps.$$.fragment,e),x(ms.$$.fragment,e),x(is.$$.fragment,e),x(us.$$.fragment,e),x(bs.$$.fragment,e),x(ds.$$.fragment,e),ra=!0)},o(e){R(T.$$.fragment,e),R(N.$$.fragment,e),R(cs.$$.fragment,e),R(J.$$.fragment,e),R(ps.$$.fragment,e),R(ms.$$.fragment,e),R(is.$$.fragment,e),R(us.$$.fragment,e),R(bs.$$.fragment,e),R(ds.$$.fragment,e),ra=!1},d(e){a(j),e&&a(C),e&&a(_),L(T),e&&a(B),L(N,e),e&&a(ts),e&&a(ks),e&&a(Se),e&&a(W),e&&a(De),e&&a(H),L(cs),e&&a(qe),e&&a(y),e&&a(xe),L(J,e),e&&a(Re),e&&a(g),e&&a(Le),L(ps,e),e&&a(ze),e&&a(i),e&&a(Ue),L(ms,e),e&&a(Ve),e&&a(Q),e&&a(He),L(is,e),e&&a(Xe),e&&a(u),e&&a(Ge),e&&a(A),e&&a(We),L(us,e),e&&a(Ye),e&&a(v),e&&a(Je),e&&a(X),L(bs),e&&a(Qe),e&&a(Es),e&&a(Ke),e&&a(F),e&&a(Ze),e&&a(G),L(ds),e&&a(sa),e&&a(ss),e&&a(ea),e&&a(M),e&&a(aa),e&&a(es),e&&a(na),e&&a(as)}}}const Mt={local:"benchmarks",sections:[{local:"how-to-benchmark-transformers-models",title:"How to benchmark \u{1F917} Transformers models"},{local:"benchmark-best-practices",title:"Benchmark best practices"},{local:"sharing-your-benchmark",title:"Sharing your benchmark"}],title:"Benchmarks"};function It($s,j,C){let{fw:_}=j;return $s.$$set=E=>{"fw"in E&&C(0,_=E.fw)},[_]}class Lt extends Tt{constructor(j){super();Bt(this,j,It,Ft,$t,{fw:0})}}export{Lt as default,Mt as metadata};
