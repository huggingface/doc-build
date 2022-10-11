import{S as Yo,i as Zo,s as ei,e as o,k as u,w as f,t as n,M as si,c as i,d as s,m as c,a as p,x as h,h as l,b as D,G as a,g as r,y as b,q as j,o as v,B as _,v as ai}from"../chunks/vendor-hf-doc-builder.js";import{T as St}from"../chunks/Tip-hf-doc-builder.js";import{I as un}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as P}from"../chunks/CodeBlock-hf-doc-builder.js";function ni(M){let d,y;return{c(){d=o("p"),y=n("Questa funzionalit\xE0 al momento \xE8 disponibile solo per PyTorch.")},l(m){d=i(m,"P",{});var w=p(d);y=l(w,"Questa funzionalit\xE0 al momento \xE8 disponibile solo per PyTorch."),w.forEach(s)},m(m,w){r(m,d,w),a(d,y)},d(m){m&&s(d)}}}function li(M){let d,y,m,w,O;return{c(){d=o("p"),y=n("Per addestramento multi-GPU richiede DDP ("),m=o("code"),w=n("torch.distributed.launch"),O=n(").")},l($){d=i($,"P",{});var E=p(d);y=l(E,"Per addestramento multi-GPU richiede DDP ("),m=i(E,"CODE",{});var G=p(m);w=l(G,"torch.distributed.launch"),G.forEach(s),O=l(E,")."),E.forEach(s)},m($,E){r($,d,E),a(d,y),a(d,m),a(m,w),a(d,O)},d($){$&&s(d)}}}function ti(M){let d,y,m,w,O;return{c(){d=o("p"),y=n("Questa funzionalit\xE0 pu\xF2 essere usata con modelli basati su "),m=o("code"),w=n("nn.Module"),O=n(".")},l($){d=i($,"P",{});var E=p(d);y=l(E,"Questa funzionalit\xE0 pu\xF2 essere usata con modelli basati su "),m=i(E,"CODE",{});var G=p(m);w=l(G,"nn.Module"),G.forEach(s),O=l(E,"."),E.forEach(s)},m($,E){r($,d,E),a(d,y),a(d,m),a(m,w),a(d,O)},d($){$&&s(d)}}}function oi(M){let d,y,m,w,O,$,E,G,cn,Hs,A,K,Ve,ce,dn,We,mn,Js,B,fn,Xe,hn,bn,Vs,de,Ws,Ce,jn,Xs,me,Ys,qe,vn,Zs,Le,_n,ea,Se,wn,sa,H,gn,Ye,$n,Dn,aa,fe,na,Ne,En,la,F,J,Ze,he,yn,es,zn,ta,V,oa,W,ia,X,ra,q,kn,ss,Pn,On,as,Cn,qn,ns,Ln,Sn,pa,Y,Nn,ls,Un,Tn,ua,be,ca,R,Gn,ts,Rn,xn,os,An,Fn,da,Ue,In,ma,je,fa,C,is,Qn,Mn,rs,Kn,Bn,ps,Hn,Jn,us,Vn,Wn,ha,ve,ba,Te,Xn,ja,g,Yn,cs,Zn,el,ds,sl,al,ms,nl,ll,fs,tl,ol,hs,il,rl,bs,pl,ul,js,cl,dl,va,Z,ml,vs,fl,hl,_a,Ge,bl,wa,_e,ga,L,jl,_s,vl,_l,ws,wl,gl,gs,$l,Dl,$a,Re,El,Da,we,Ea,z,yl,$s,zl,kl,Ds,Pl,Ol,Es,Cl,ql,ys,Ll,Sl,zs,Nl,Ul,ya,S,Tl,ks,Gl,Rl,Ps,xl,Al,Os,Fl,Il,za,xe,Ql,ka,ee,Ml,Cs,Kl,Bl,Pa,ge,Oa,se,Hl,qs,Jl,Vl,Ca,ae,Wl,Ls,Xl,Yl,qa,N,Zl,Ss,et,st,Ns,at,nt,Us,lt,tt,La,$e,Sa,x,ot,Ts,it,rt,Gs,pt,ut,Na,De,Ua,U,ct,Rs,dt,mt,xs,ft,ht,As,bt,jt,Ta,ne,vt,Fs,_t,wt,Ga,Ae,gt,Ra,Ee,xa,I,le,Is,ye,$t,Qs,Dt,Aa,Fe,Et,Fa,te,yt,Ms,zt,kt,Ia,ze,Qa,Ie,Pt,Ma,Qe,Ot,Ka,Me,Ct,Ba,ke,Ha,Ke,qt,Ja,Be,Lt,Va,Pe,Wa;return $=new un({}),ce=new un({}),de=new P({props:{code:"wget https://raw.githubusercontent.com/huggingface/transformers/main/scripts/distributed/torch-distributed-gpu-test.py",highlighted:"wget https://raw.githubusercontent.com/huggingface/transformers/main/scripts/distributed/torch-distributed-gpu-test.py"}}),me=new P({props:{code:"python -m torch.distributed.run --nproc_per_node 2 --nnodes 1 torch-distributed-gpu-test.py",highlighted:"python -m torch.distributed.run --nproc_per_node 2 --nnodes 1 torch-distributed-gpu-test.py"}}),fe=new P({props:{code:"NCCL_DEBUG=INFO python -m torch.distributed.run --nproc_per_node 2 --nnodes 1 torch-distributed-gpu-test.py",highlighted:"NCCL_DEBUG=INFO python -m torch.distributed.run --nproc_per_node 2 --nnodes 1 torch-distributed-gpu-test.py"}}),he=new un({}),V=new St({props:{$$slots:{default:[ni]},$$scope:{ctx:M}}}),W=new St({props:{$$slots:{default:[li]},$$scope:{ctx:M}}}),X=new St({props:{$$slots:{default:[ti]},$$scope:{ctx:M}}}),be=new P({props:{code:"--debug underflow_overflow",highlighted:"--debug underflow_overflow"}}),je=new P({props:{code:`from .debug_utils import DebugUnderflowOverflow

debug_overflow = DebugUnderflowOverflow(model)`,highlighted:`<span class="hljs-keyword">from</span> .debug_utils <span class="hljs-keyword">import</span> DebugUnderflowOverflow

debug_overflow = DebugUnderflowOverflow(model)`}}),ve=new P({props:{code:`Detected inf/nan during batch_number=0
Last 21 forward frames:
abs min  abs max  metadata
                  encoder.block.1.layer.1.DenseReluDense.dropout Dropout
0.00e+00 2.57e+02 input[0]
0.00e+00 2.85e+02 output
[...]
                  encoder.block.2.layer.0 T5LayerSelfAttention
6.78e-04 3.15e+03 input[0]
2.65e-04 3.42e+03 output[0]
             None output[1]
2.25e-01 1.00e+04 output[2]
                  encoder.block.2.layer.1.layer_norm T5LayerNorm
8.69e-02 4.18e-01 weight
2.65e-04 3.42e+03 input[0]
1.79e-06 4.65e+00 output
                  encoder.block.2.layer.1.DenseReluDense.wi_0 Linear
2.17e-07 4.50e+00 weight
1.79e-06 4.65e+00 input[0]
2.68e-06 3.70e+01 output
                  encoder.block.2.layer.1.DenseReluDense.wi_1 Linear
8.08e-07 2.66e+01 weight
1.79e-06 4.65e+00 input[0]
1.27e-04 2.37e+02 output
                  encoder.block.2.layer.1.DenseReluDense.dropout Dropout
0.00e+00 8.76e+03 input[0]
0.00e+00 9.74e+03 output
                  encoder.block.2.layer.1.DenseReluDense.wo Linear
1.01e-06 6.44e+00 weight
0.00e+00 9.74e+03 input[0]
3.18e-04 6.27e+04 output
                  encoder.block.2.layer.1.DenseReluDense T5DenseGatedGeluDense
1.79e-06 4.65e+00 input[0]
3.18e-04 6.27e+04 output
                  encoder.block.2.layer.1.dropout Dropout
3.18e-04 6.27e+04 input[0]
0.00e+00      inf output`,highlighted:`<span class="hljs-attribute">Detected</span> inf/nan during batch_number=<span class="hljs-number">0</span>
<span class="hljs-attribute">Last</span> <span class="hljs-number">21</span> forward frames:
<span class="hljs-attribute">abs</span> min  abs max  metadata
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">1</span>.layer.<span class="hljs-number">1</span>.DenseReluDense.dropout Dropout
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span> <span class="hljs-number">2</span>.<span class="hljs-number">57</span>e+<span class="hljs-number">02</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span> <span class="hljs-number">2</span>.<span class="hljs-number">85</span>e+<span class="hljs-number">02</span> output<span class="hljs-meta">
[...]</span>
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">0</span> T5LayerSelfAttention
<span class="hljs-attribute">6</span>.<span class="hljs-number">78</span>e-<span class="hljs-number">04</span> <span class="hljs-number">3</span>.<span class="hljs-number">15</span>e+<span class="hljs-number">03</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">2</span>.<span class="hljs-number">65</span>e-<span class="hljs-number">04</span> <span class="hljs-number">3</span>.<span class="hljs-number">42</span>e+<span class="hljs-number">03</span> output[<span class="hljs-number">0</span>]
             <span class="hljs-attribute">None</span> output[<span class="hljs-number">1</span>]
<span class="hljs-attribute">2</span>.<span class="hljs-number">25</span>e-<span class="hljs-number">01</span> <span class="hljs-number">1</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">04</span> output[<span class="hljs-number">2</span>]
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.layer_norm T5LayerNorm
<span class="hljs-attribute">8</span>.<span class="hljs-number">69</span>e-<span class="hljs-number">02</span> <span class="hljs-number">4</span>.<span class="hljs-number">18</span>e-<span class="hljs-number">01</span> weight
<span class="hljs-attribute">2</span>.<span class="hljs-number">65</span>e-<span class="hljs-number">04</span> <span class="hljs-number">3</span>.<span class="hljs-number">42</span>e+<span class="hljs-number">03</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">1</span>.<span class="hljs-number">79</span>e-<span class="hljs-number">06</span> <span class="hljs-number">4</span>.<span class="hljs-number">65</span>e+<span class="hljs-number">00</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense.wi_0 Linear
<span class="hljs-attribute">2</span>.<span class="hljs-number">17</span>e-<span class="hljs-number">07</span> <span class="hljs-number">4</span>.<span class="hljs-number">50</span>e+<span class="hljs-number">00</span> weight
<span class="hljs-attribute">1</span>.<span class="hljs-number">79</span>e-<span class="hljs-number">06</span> <span class="hljs-number">4</span>.<span class="hljs-number">65</span>e+<span class="hljs-number">00</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">2</span>.<span class="hljs-number">68</span>e-<span class="hljs-number">06</span> <span class="hljs-number">3</span>.<span class="hljs-number">70</span>e+<span class="hljs-number">01</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense.wi_1 Linear
<span class="hljs-attribute">8</span>.<span class="hljs-number">08</span>e-<span class="hljs-number">07</span> <span class="hljs-number">2</span>.<span class="hljs-number">66</span>e+<span class="hljs-number">01</span> weight
<span class="hljs-attribute">1</span>.<span class="hljs-number">79</span>e-<span class="hljs-number">06</span> <span class="hljs-number">4</span>.<span class="hljs-number">65</span>e+<span class="hljs-number">00</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">1</span>.<span class="hljs-number">27</span>e-<span class="hljs-number">04</span> <span class="hljs-number">2</span>.<span class="hljs-number">37</span>e+<span class="hljs-number">02</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense.dropout Dropout
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span> <span class="hljs-number">8</span>.<span class="hljs-number">76</span>e+<span class="hljs-number">03</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span> <span class="hljs-number">9</span>.<span class="hljs-number">74</span>e+<span class="hljs-number">03</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense.wo Linear
<span class="hljs-attribute">1</span>.<span class="hljs-number">01</span>e-<span class="hljs-number">06</span> <span class="hljs-number">6</span>.<span class="hljs-number">44</span>e+<span class="hljs-number">00</span> weight
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span> <span class="hljs-number">9</span>.<span class="hljs-number">74</span>e+<span class="hljs-number">03</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">3</span>.<span class="hljs-number">18</span>e-<span class="hljs-number">04</span> <span class="hljs-number">6</span>.<span class="hljs-number">27</span>e+<span class="hljs-number">04</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense T5DenseGatedGeluDense
<span class="hljs-attribute">1</span>.<span class="hljs-number">79</span>e-<span class="hljs-number">06</span> <span class="hljs-number">4</span>.<span class="hljs-number">65</span>e+<span class="hljs-number">00</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">3</span>.<span class="hljs-number">18</span>e-<span class="hljs-number">04</span> <span class="hljs-number">6</span>.<span class="hljs-number">27</span>e+<span class="hljs-number">04</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.dropout Dropout
<span class="hljs-attribute">3</span>.<span class="hljs-number">18</span>e-<span class="hljs-number">04</span> <span class="hljs-number">6</span>.<span class="hljs-number">27</span>e+<span class="hljs-number">04</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span>      inf output`}}),_e=new P({props:{code:`                  encoder.block.2.layer.1.layer_norm T5LayerNorm
8.69e-02 4.18e-01 weight
2.65e-04 3.42e+03 input[0]
1.79e-06 4.65e+00 output`,highlighted:`                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.layer_norm T5LayerNorm
<span class="hljs-attribute">8</span>.<span class="hljs-number">69</span>e-<span class="hljs-number">02</span> <span class="hljs-number">4</span>.<span class="hljs-number">18</span>e-<span class="hljs-number">01</span> weight
<span class="hljs-attribute">2</span>.<span class="hljs-number">65</span>e-<span class="hljs-number">04</span> <span class="hljs-number">3</span>.<span class="hljs-number">42</span>e+<span class="hljs-number">03</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">1</span>.<span class="hljs-number">79</span>e-<span class="hljs-number">06</span> <span class="hljs-number">4</span>.<span class="hljs-number">65</span>e+<span class="hljs-number">00</span> output`}}),we=new P({props:{code:`Detected inf/nan during batch_number=0
Last 21 forward frames:
abs min  abs max  metadata
[...]
                  encoder.block.2.layer.1.DenseReluDense.wi_0 Linear
2.17e-07 4.50e+00 weight
1.79e-06 4.65e+00 input[0]
2.68e-06 3.70e+01 output
                  encoder.block.2.layer.1.DenseReluDense.wi_1 Linear
8.08e-07 2.66e+01 weight
1.79e-06 4.65e+00 input[0]
1.27e-04 2.37e+02 output
                  encoder.block.2.layer.1.DenseReluDense.wo Linear
1.01e-06 6.44e+00 weight
0.00e+00 9.74e+03 input[0]
3.18e-04 6.27e+04 output
                  encoder.block.2.layer.1.DenseReluDense T5DenseGatedGeluDense
1.79e-06 4.65e+00 input[0]
3.18e-04 6.27e+04 output
                  encoder.block.2.layer.1.dropout Dropout
3.18e-04 6.27e+04 input[0]
0.00e+00      inf output`,highlighted:`<span class="hljs-attribute">Detected</span> inf/nan during batch_number=<span class="hljs-number">0</span>
<span class="hljs-attribute">Last</span> <span class="hljs-number">21</span> forward frames:
<span class="hljs-attribute">abs</span> min  abs max  metadata<span class="hljs-meta">
[...]</span>
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense.wi_0 Linear
<span class="hljs-attribute">2</span>.<span class="hljs-number">17</span>e-<span class="hljs-number">07</span> <span class="hljs-number">4</span>.<span class="hljs-number">50</span>e+<span class="hljs-number">00</span> weight
<span class="hljs-attribute">1</span>.<span class="hljs-number">79</span>e-<span class="hljs-number">06</span> <span class="hljs-number">4</span>.<span class="hljs-number">65</span>e+<span class="hljs-number">00</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">2</span>.<span class="hljs-number">68</span>e-<span class="hljs-number">06</span> <span class="hljs-number">3</span>.<span class="hljs-number">70</span>e+<span class="hljs-number">01</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense.wi_1 Linear
<span class="hljs-attribute">8</span>.<span class="hljs-number">08</span>e-<span class="hljs-number">07</span> <span class="hljs-number">2</span>.<span class="hljs-number">66</span>e+<span class="hljs-number">01</span> weight
<span class="hljs-attribute">1</span>.<span class="hljs-number">79</span>e-<span class="hljs-number">06</span> <span class="hljs-number">4</span>.<span class="hljs-number">65</span>e+<span class="hljs-number">00</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">1</span>.<span class="hljs-number">27</span>e-<span class="hljs-number">04</span> <span class="hljs-number">2</span>.<span class="hljs-number">37</span>e+<span class="hljs-number">02</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense.wo Linear
<span class="hljs-attribute">1</span>.<span class="hljs-number">01</span>e-<span class="hljs-number">06</span> <span class="hljs-number">6</span>.<span class="hljs-number">44</span>e+<span class="hljs-number">00</span> weight
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span> <span class="hljs-number">9</span>.<span class="hljs-number">74</span>e+<span class="hljs-number">03</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">3</span>.<span class="hljs-number">18</span>e-<span class="hljs-number">04</span> <span class="hljs-number">6</span>.<span class="hljs-number">27</span>e+<span class="hljs-number">04</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense T5DenseGatedGeluDense
<span class="hljs-attribute">1</span>.<span class="hljs-number">79</span>e-<span class="hljs-number">06</span> <span class="hljs-number">4</span>.<span class="hljs-number">65</span>e+<span class="hljs-number">00</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">3</span>.<span class="hljs-number">18</span>e-<span class="hljs-number">04</span> <span class="hljs-number">6</span>.<span class="hljs-number">27</span>e+<span class="hljs-number">04</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.dropout Dropout
<span class="hljs-attribute">3</span>.<span class="hljs-number">18</span>e-<span class="hljs-number">04</span> <span class="hljs-number">6</span>.<span class="hljs-number">27</span>e+<span class="hljs-number">04</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span>      inf output`}}),ge=new P({props:{code:`class T5DenseGatedGeluDense(nn.Module):
    def __init__(self, config):
        super().__init__()
        self.wi_0 = nn.Linear(config.d_model, config.d_ff, bias=False)
        self.wi_1 = nn.Linear(config.d_model, config.d_ff, bias=False)
        self.wo = nn.Linear(config.d_ff, config.d_model, bias=False)
        self.dropout = nn.Dropout(config.dropout_rate)
        self.gelu_act = ACT2FN["gelu_new"]

    def forward(self, hidden_states):
        hidden_gelu = self.gelu_act(self.wi_0(hidden_states))
        hidden_linear = self.wi_1(hidden_states)
        hidden_states = hidden_gelu * hidden_linear
        hidden_states = self.dropout(hidden_states)
        hidden_states = self.wo(hidden_states)
        return hidden_states`,highlighted:`<span class="hljs-keyword">class</span> <span class="hljs-title class_">T5DenseGatedGeluDense</span>(nn.Module):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, config</span>):
        <span class="hljs-built_in">super</span>().__init__()
        self.wi_0 = nn.Linear(config.d_model, config.d_ff, bias=<span class="hljs-literal">False</span>)
        self.wi_1 = nn.Linear(config.d_model, config.d_ff, bias=<span class="hljs-literal">False</span>)
        self.wo = nn.Linear(config.d_ff, config.d_model, bias=<span class="hljs-literal">False</span>)
        self.dropout = nn.Dropout(config.dropout_rate)
        self.gelu_act = ACT2FN[<span class="hljs-string">&quot;gelu_new&quot;</span>]

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">forward</span>(<span class="hljs-params">self, hidden_states</span>):
        hidden_gelu = self.gelu_act(self.wi_0(hidden_states))
        hidden_linear = self.wi_1(hidden_states)
        hidden_states = hidden_gelu * hidden_linear
        hidden_states = self.dropout(hidden_states)
        hidden_states = self.wo(hidden_states)
        <span class="hljs-keyword">return</span> hidden_states`}}),$e=new P({props:{code:`def _forward(self, hidden_states):
    hidden_gelu = self.gelu_act(self.wi_0(hidden_states))
    hidden_linear = self.wi_1(hidden_states)
    hidden_states = hidden_gelu * hidden_linear
    hidden_states = self.dropout(hidden_states)
    hidden_states = self.wo(hidden_states)
    return hidden_states


import torch


def forward(self, hidden_states):
    if torch.is_autocast_enabled():
        with torch.cuda.amp.autocast(enabled=False):
            return self._forward(hidden_states)
    else:
        return self._forward(hidden_states)`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">_forward</span>(<span class="hljs-params">self, hidden_states</span>):
    hidden_gelu = self.gelu_act(self.wi_0(hidden_states))
    hidden_linear = self.wi_1(hidden_states)
    hidden_states = hidden_gelu * hidden_linear
    hidden_states = self.dropout(hidden_states)
    hidden_states = self.wo(hidden_states)
    <span class="hljs-keyword">return</span> hidden_states


<span class="hljs-keyword">import</span> torch


<span class="hljs-keyword">def</span> <span class="hljs-title function_">forward</span>(<span class="hljs-params">self, hidden_states</span>):
    <span class="hljs-keyword">if</span> torch.is_autocast_enabled():
        <span class="hljs-keyword">with</span> torch.cuda.amp.autocast(enabled=<span class="hljs-literal">False</span>):
            <span class="hljs-keyword">return</span> self._forward(hidden_states)
    <span class="hljs-keyword">else</span>:
        <span class="hljs-keyword">return</span> self._forward(hidden_states)`}}),De=new P({props:{code:`from debug_utils import detect_overflow


class T5LayerFF(nn.Module):
    [...]

    def forward(self, hidden_states):
        forwarded_states = self.layer_norm(hidden_states)
        detect_overflow(forwarded_states, "after layer_norm")
        forwarded_states = self.DenseReluDense(forwarded_states)
        detect_overflow(forwarded_states, "after DenseReluDense")
        return hidden_states + self.dropout(forwarded_states)`,highlighted:`<span class="hljs-keyword">from</span> debug_utils <span class="hljs-keyword">import</span> detect_overflow


<span class="hljs-keyword">class</span> <span class="hljs-title class_">T5LayerFF</span>(nn.Module):
    [...]

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">forward</span>(<span class="hljs-params">self, hidden_states</span>):
        forwarded_states = self.layer_norm(hidden_states)
        detect_overflow(forwarded_states, <span class="hljs-string">&quot;after layer_norm&quot;</span>)
        forwarded_states = self.DenseReluDense(forwarded_states)
        detect_overflow(forwarded_states, <span class="hljs-string">&quot;after DenseReluDense&quot;</span>)
        <span class="hljs-keyword">return</span> hidden_states + self.dropout(forwarded_states)`}}),Ee=new P({props:{code:`from .debug_utils import DebugUnderflowOverflow

debug_overflow = DebugUnderflowOverflow(model, max_frames_to_save=100)`,highlighted:`<span class="hljs-keyword">from</span> .debug_utils <span class="hljs-keyword">import</span> DebugUnderflowOverflow

debug_overflow = DebugUnderflowOverflow(model, max_frames_to_save=<span class="hljs-number">100</span>)`}}),ye=new un({}),ze=new P({props:{code:"debug_overflow = DebugUnderflowOverflow(model, trace_batch_nums=[1, 3])",highlighted:'debug_overflow = DebugUnderflowOverflow(model, trace_batch_nums=[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>])'}}),ke=new P({props:{code:`                  *** Starting batch number=1 ***
abs min  abs max  metadata
                  shared Embedding
1.01e-06 7.92e+02 weight
0.00e+00 2.47e+04 input[0]
5.36e-05 7.92e+02 output
[...]
                  decoder.dropout Dropout
1.60e-07 2.27e+01 input[0]
0.00e+00 2.52e+01 output
                  decoder T5Stack
     not a tensor output
                  lm_head Linear
1.01e-06 7.92e+02 weight
0.00e+00 1.11e+00 input[0]
6.06e-02 8.39e+01 output
                   T5ForConditionalGeneration
     not a tensor output

                  *** Starting batch number=3 ***
abs min  abs max  metadata
                  shared Embedding
1.01e-06 7.92e+02 weight
0.00e+00 2.78e+04 input[0]
5.36e-05 7.92e+02 output
[...]`,highlighted:`                  *** Starting batch number=1 ***
abs min  abs max  metadata
                  shared Embedding
1.01e<span class="hljs-string">-06</span> 7.92e<span class="hljs-string">+02</span> weight
0.00e<span class="hljs-string">+00</span> 2.47e<span class="hljs-string">+04</span> input[0]
5.36e<span class="hljs-string">-05</span> 7.92e<span class="hljs-string">+02</span> output
[...]
                  decoder.dropout Dropout
1.60e<span class="hljs-string">-07</span> 2.27e<span class="hljs-string">+01</span> input[0]
0.00e<span class="hljs-string">+00</span> 2.52e<span class="hljs-string">+01</span> output
                  decoder T5Stack
     not a tensor output
                  lm_head Linear
1.01e<span class="hljs-string">-06</span> 7.92e<span class="hljs-string">+02</span> weight
0.00e<span class="hljs-string">+00</span> 1.11e<span class="hljs-string">+00</span> input[0]
6.06e<span class="hljs-string">-02</span> 8.39e<span class="hljs-string">+01</span> output
                   T5ForConditionalGeneration
     not a tensor output

                  *** Starting batch number=3 ***
abs min  abs max  metadata
                  shared Embedding
1.01e<span class="hljs-string">-06</span> 7.92e<span class="hljs-string">+02</span> weight
0.00e<span class="hljs-string">+00</span> 2.78e<span class="hljs-string">+04</span> input[0]
5.36e<span class="hljs-string">-05</span> 7.92e<span class="hljs-string">+02</span> output
[...]`}}),Pe=new P({props:{code:"debug_overflow = DebugUnderflowOverflow(model, trace_batch_nums=[1, 3], abort_after_batch_num=3)",highlighted:'debug_overflow = DebugUnderflowOverflow(model, trace_batch_nums=[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>], abort_after_batch_num=<span class="hljs-number">3</span>)'}}),{c(){d=o("meta"),y=u(),m=o("h1"),w=o("a"),O=o("span"),f($.$$.fragment),E=u(),G=o("span"),cn=n("Debugging"),Hs=u(),A=o("h2"),K=o("a"),Ve=o("span"),f(ce.$$.fragment),dn=u(),We=o("span"),mn=n("Debug dei problemi di rete multi-GPU"),Js=u(),B=o("p"),fn=n("Quando addestri o fai inferenza con "),Xe=o("code"),hn=n("DistributedDataParallel"),bn=n(" e GPU multiple, se si verificano problemi di intercomunicazione tra processi e/o nodi, puoi utilizzare il seguente script per diagnosticare i problemi della rete."),Vs=u(),f(de.$$.fragment),Ws=u(),Ce=o("p"),jn=n("Per esempio per testare come 2 GPU interagiscono fai:"),Xs=u(),f(me.$$.fragment),Ys=u(),qe=o("p"),vn=n("Se entrambi i processi sono in grado di comunicare tra loro e di allocare la memoria della GPU, ciascuno di essi stamper\xE0 lo stato OK."),Zs=u(),Le=o("p"),_n=n("Per pi\xF9 GPU o nodi adatta gli argumenti nello script."),ea=u(),Se=o("p"),wn=n("All\u2019interno dello script di diagnostica troverai molti altri dettagli e anche una guida per eseguirlo in ambiente SLURM."),sa=u(),H=o("p"),gn=n("Un livello di debug superiore \xE8 aggiungere la variabile d\u2019ambiente "),Ye=o("code"),$n=n("NCCL_DEBUG=INFO"),Dn=n(" come di seguito:"),aa=u(),f(fe.$$.fragment),na=u(),Ne=o("p"),En=n("In questo modo si scaricano molte informazioni di debug relative a NCCL, che puoi cercare online in caso di problemi. Oppure, se non hai la sicurezza di come interpretare l\u2019output, puoi condividere il file di log in una Issue."),la=u(),F=o("h2"),J=o("a"),Ze=o("span"),f(he.$$.fragment),yn=u(),es=o("span"),zn=n("Rilevamento di Underflow e Overflow"),ta=u(),f(V.$$.fragment),oa=u(),f(W.$$.fragment),ia=u(),f(X.$$.fragment),ra=u(),q=o("p"),kn=n("Se inizi a ottenere "),ss=o("code"),Pn=n("loss=NaN"),On=n(" o il modello presenta qualche altro comportamento anomalo a causa di valori "),as=o("code"),Cn=n("inf"),qn=n(" o "),ns=o("code"),Ln=n("nan"),Sn=n(` in
attivazioni o nei pesi, \xE8 necessario scoprire dove si verifica il primo underflow o overflow e cosa lo ha determinato. Fortunatamente
\xE8 possibile farlo facilmente attivando un modulo speciale che effettuer\xE0 il rilevamento automaticamente.`),pa=u(),Y=o("p"),Nn=n("Se stai usando "),ls=o("code"),Un=n("Trainer"),Tn=n(", hai bisogno di aggiungere solo:"),ua=u(),f(be.$$.fragment),ca=u(),R=o("p"),Gn=n("ai normali argomenti della riga di comando, o passa "),ts=o("code"),Rn=n('debug="underflow_overflow"'),xn=n(` quando viene creato l\u2019oggetto
`),os=o("code"),An=n("TrainingArguments"),Fn=n("."),da=u(),Ue=o("p"),In=n("Se stai usando il tuo ciclo di allenamento o un altro trainer, puoi ottenere lo stesso risultato con:"),ma=u(),f(je.$$.fragment),fa=u(),C=o("p"),is=o("code"),Qn=n("DebugUnderflowOverflow"),Mn=n(` inserisce dei ganci nel modello che dopo ogni chiamata
testeranno le variabili di ingresso e di uscita e anche i pesi del modulo corrispondente. Non appena viene rilevato `),rs=o("code"),Kn=n("inf"),Bn=n(` o
o `),ps=o("code"),Hn=n("nan"),Jn=n(" in almeno un elemento delle attivazioni o dei pesi, il programma lo notifica e stampa un rapporto come il seguente (questo \xE8 stato rilevato con "),us=o("code"),Vn=n("google/mt5-small"),Wn=n(" sotto fp16 mixed precision):"),ha=u(),f(ve.$$.fragment),ba=u(),Te=o("p"),Xn=n("L\u2019output di esempio \xE8 stato tagliato al centro per brevit\xE0."),ja=u(),g=o("p"),Yn=n(`La seconda colonna mostra il valore dell\u2019elemento pi\xF9 grande in assoluto,cos\xEC se osserviamo da vicino gli ultimi istanti,
input e output sono nel range di `),cs=o("code"),Zn=n("1e4"),el=n(". Questo addestramento \xE8 stato eseguito con una mixed precision fp16 e l\u2019ultimo passo usciva fuori (sotto "),ds=o("code"),sl=n("fp16"),al=n(" il valore pi\xF9 grande prima di "),ms=o("code"),nl=n("inf"),ll=n(" \xE8 "),fs=o("code"),tl=n("64e3"),ol=n("). Per evitare overflows sotto "),hs=o("code"),il=n("fp16"),rl=n(" le attivazionioni devono rimanere molto al di sotto di "),bs=o("code"),pl=n("1e4"),ul=n(", perch\xE9 "),js=o("code"),cl=n("1e4 * 1e4 = 1e8"),dl=n(" quindi qualsiasi moltiplicazione di matrice con grandi attivazioni porter\xE0 a una condizione di overflow numerico."),va=u(),Z=o("p"),ml=n("All\u2019inizio della traccia \xE8 possibile scoprire a quale lotto si \xE8 verificato il problema (questo "),vs=o("code"),fl=n("Detected inf/nan during batch_number=0"),hl=n(" significa che il problema si \xE8 verificato nel primo lotto)."),_a=u(),Ge=o("p"),bl=n(`Ogni frame segnalato inizia dichiarando la voce completamente qualificata per il modulo corrispondente per il quale il frame \xE8 stato segnalato.
Se osserviamo il seguente frame:`),wa=u(),f(_e.$$.fragment),ga=u(),L=o("p"),jl=n("Questo, "),_s=o("code"),vl=n("encoder.block.2.layer.1.layer_norm"),_l=n(" indica che si tratta di un layer norm nel primo layer, del secondo blocco dell\u2019encoder. E le chiamata specifica di "),ws=o("code"),wl=n("forward"),gl=n(" \xE8 "),gs=o("code"),$l=n("T5LayerNorm"),Dl=n("."),$a=u(),Re=o("p"),El=n("Osserviamo gli ultimi frame del report:"),Da=u(),f(we.$$.fragment),Ea=u(),z=o("p"),yl=n("L\u2019ultimo frame report per la funzione "),$s=o("code"),zl=n("Dropout.forward"),kl=n(" con la prima voce per l\u2019unico input e la seconda per l\u2019unico output. Si pu\xF2 notare che \xE8 stato richiamato da un attibuto "),Ds=o("code"),Pl=n("dropout"),Ol=n(" dentro la classe "),Es=o("code"),Cl=n("DenseReluDense"),ql=n(". Si pu\xF2 notare che ci\xF2 \xE8 avvenuto durante il primo strato, del 2\xB0 blocco, durante il primissimo lotto. Infine, gli elementi di input pi\xF9 grandi in assoluto sono stati "),ys=o("code"),Ll=n("6.27e+04"),Sl=n(" e l\u2019equivalente per l\u2019output era "),zs=o("code"),Nl=n("inf"),Ul=n("."),ya=u(),S=o("p"),Tl=n("Puoi vedere qui, che "),ks=o("code"),Gl=n("T5DenseGatedGeluDense.forward"),Rl=n(" risulta in output activations, il cui valore massimo assoluto era circa 62,7K, che \xE8 molto vicino al limite massimo di 64K di fp16. Nel prossimo frame abbiamo "),Ps=o("code"),xl=n("Dropout"),Al=n(" che rinormalizza i pesi, dopo aver azzerato alcuni elementi, il che spinge il valore massimo assoluto a pi\xF9 di 64K e si verifica un overflow.("),Os=o("code"),Fl=n("inf"),Il=n(")."),za=u(),xe=o("p"),Ql=n("Come puoi notare, \xE8 nei frames precedenti che occorre esaminare quando i numeri iniziano a diventare molto grandi per i valori fp16."),ka=u(),ee=o("p"),Ml=n("Confrontiamo il report al codice "),Cs=o("code"),Kl=n("models/t5/modeling_t5.py"),Bl=n(":"),Pa=u(),f(ge.$$.fragment),Oa=u(),se=o("p"),Hl=n("Ora \xE8 facile vedere la chiamata "),qs=o("code"),Jl=n("dropout"),Vl=n(", e tutte le chiamate precedenti."),Ca=u(),ae=o("p"),Wl=n("Poich\xE9 il rilevamento avviene in un avanzamento (forward hook in eng.), i rapporti vengono creati immeditamente dopo ogni rientro da "),Ls=o("code"),Xl=n("forward"),Yl=n(" (forward returns in eng.)."),qa=u(),N=o("p"),Zl=n("Tornando al rapporto completo, per agire e risolvere il problema, dobbiamo andare qualche frame pi\xF9 in alto, dove i numeri hanno iniziato a salire, e probabilmente passare alla modalit\xE0 "),Ss=o("code"),et=n("fp32"),st=n(", in modo che i numeri non trabocchino quando vengono moltiplicati o sommati. Naturalmente, potrebbero esserci altre soluzioni. Per esempio, potremmo spegnere temporanemante "),Ns=o("code"),at=n("amp"),nt=n(" se \xE8 abilitato, successivamente spostare "),Us=o("code"),lt=n("forward"),tt=n(" in un helper wrapper, come:"),La=u(),f($e.$$.fragment),Sa=u(),x=o("p"),ot=n(`Poich\xE9 il rilevatore automatico riporta solo gli ingressi e le uscite di fotogrammi completi, una volta che si sa dove cercare, si pu\xF2
analizzare anche le fasi intermedie di una specifica funzione `),Ts=o("code"),it=n("forward"),rt=n(". In alcuni casi puoi usare la funzione di supporto "),Gs=o("code"),pt=n("detect_overflow"),ut=n(" per indirizzare il rilevatore dove preferisci, ad esempio:"),Na=u(),f(De.$$.fragment),Ua=u(),U=o("p"),ct=n("Si pu\xF2 vedere che abbiamo aggiunto 2 di questi e ora teniamo traccia se "),Rs=o("code"),dt=n("inf"),mt=n(" o "),xs=o("code"),ft=n("nan"),ht=n(" per "),As=o("code"),bt=n("forwarded_states"),jt=n(` \xE8 stato rilevato
da qualche parte.`),Ta=u(),ne=o("p"),vt=n("In realt\xE0, il rilevatore li riporta gi\xE0, perch\xE9 ciascuna delle chiamate nell\u2019esempio precedente \xE8 un "),Fs=o("code"),_t=n("nn.Module"),wt=n(`, ma
diciamo che se avessimo dei calcoli diretti locali, questo \xE8 il modo in cui lo faremmo.`),Ga=u(),Ae=o("p"),gt=n(`Inoltre, se si istanzia il debugger nel proprio codice, \xE8 possibile modificare il numero di fotogrammi stampati rispetto a
predefinito, ad esempio.:`),Ra=u(),f(Ee.$$.fragment),xa=u(),I=o("h3"),le=o("a"),Is=o("span"),f(ye.$$.fragment),$t=u(),Qs=o("span"),Dt=n("Tracciamento della mistura assoluta del lotto specifico e del valore massimo"),Aa=u(),Fe=o("p"),Et=n("La stessa classe di debug pu\xF2 essere utilizzata per il tracciamento per-batch con la funzione di rilevamento di underflow/overflow disattivata."),Fa=u(),te=o("p"),yt=n("Supponiamo di voler osservare i valori minimi e massimi assoluti per tutti gli ingredienti di ogni chiamata "),Ms=o("code"),zt=n("forward"),kt=n(` di un dato lotto.
lotto, e che lo si voglia fare solo per i lotti 1 e 3. Si istanzia questa classe come:`),Ia=u(),f(ze.$$.fragment),Qa=u(),Ie=o("p"),Pt=n("Ora i batch completi 1 e 3 saranno tracciati utilizzando lo stesso formato del rilevatore di underflow/overflow."),Ma=u(),Qe=o("p"),Ot=n("I batches sono 0-indexed."),Ka=u(),Me=o("p"),Ct=n(`Questo \xE8 utile se si sa che il programma inizia a comportarsi male dopo un certo numero di batch, in modo da poter avanzare velocemente fino a quell\u2019area.
direttamente a quell\u2019area. Ecco un esempio di output troncato per questa configurazione:`),Ba=u(),f(ke.$$.fragment),Ha=u(),Ke=o("p"),qt=n("Qui verr\xE0 scaricato un numero enorme di fotogrammi, tanti quanti sono le chiamate in avanti nel modello, quindi pu\xF2 essere o non essere quello che volete, ma a volte pu\xF2 essere pi\xF9 utile usarlo di un classico debugger. Per esempio, se il problema inizia a verificarsi a partire dal lotto numero 150. Quindi \xE8 possibile scaricare le tracce dei lotti 149 e 150 e confrontare i punti in cui i numeri hanno iniziato a divergere."),Ja=u(),Be=o("p"),Lt=n("\xC8 inoltre possibile specificare il numero di batch dopo il quale interrompere l\u2019addestramento, con:"),Va=u(),f(Pe.$$.fragment),this.h()},l(e){const t=si('[data-svelte="svelte-1phssyn"]',document.head);d=i(t,"META",{name:!0,content:!0}),t.forEach(s),y=c(e),m=i(e,"H1",{class:!0});var Oe=p(m);w=i(Oe,"A",{id:!0,class:!0,href:!0});var Ks=p(w);O=i(Ks,"SPAN",{});var Bs=p(O);h($.$$.fragment,Bs),Bs.forEach(s),Ks.forEach(s),E=c(Oe),G=i(Oe,"SPAN",{});var Nt=p(G);cn=l(Nt,"Debugging"),Nt.forEach(s),Oe.forEach(s),Hs=c(e),A=i(e,"H2",{class:!0});var Xa=p(A);K=i(Xa,"A",{id:!0,class:!0,href:!0});var Ut=p(K);Ve=i(Ut,"SPAN",{});var Tt=p(Ve);h(ce.$$.fragment,Tt),Tt.forEach(s),Ut.forEach(s),dn=c(Xa),We=i(Xa,"SPAN",{});var Gt=p(We);mn=l(Gt,"Debug dei problemi di rete multi-GPU"),Gt.forEach(s),Xa.forEach(s),Js=c(e),B=i(e,"P",{});var Ya=p(B);fn=l(Ya,"Quando addestri o fai inferenza con "),Xe=i(Ya,"CODE",{});var Rt=p(Xe);hn=l(Rt,"DistributedDataParallel"),Rt.forEach(s),bn=l(Ya," e GPU multiple, se si verificano problemi di intercomunicazione tra processi e/o nodi, puoi utilizzare il seguente script per diagnosticare i problemi della rete."),Ya.forEach(s),Vs=c(e),h(de.$$.fragment,e),Ws=c(e),Ce=i(e,"P",{});var xt=p(Ce);jn=l(xt,"Per esempio per testare come 2 GPU interagiscono fai:"),xt.forEach(s),Xs=c(e),h(me.$$.fragment,e),Ys=c(e),qe=i(e,"P",{});var At=p(qe);vn=l(At,"Se entrambi i processi sono in grado di comunicare tra loro e di allocare la memoria della GPU, ciascuno di essi stamper\xE0 lo stato OK."),At.forEach(s),Zs=c(e),Le=i(e,"P",{});var Ft=p(Le);_n=l(Ft,"Per pi\xF9 GPU o nodi adatta gli argumenti nello script."),Ft.forEach(s),ea=c(e),Se=i(e,"P",{});var It=p(Se);wn=l(It,"All\u2019interno dello script di diagnostica troverai molti altri dettagli e anche una guida per eseguirlo in ambiente SLURM."),It.forEach(s),sa=c(e),H=i(e,"P",{});var Za=p(H);gn=l(Za,"Un livello di debug superiore \xE8 aggiungere la variabile d\u2019ambiente "),Ye=i(Za,"CODE",{});var Qt=p(Ye);$n=l(Qt,"NCCL_DEBUG=INFO"),Qt.forEach(s),Dn=l(Za," come di seguito:"),Za.forEach(s),aa=c(e),h(fe.$$.fragment,e),na=c(e),Ne=i(e,"P",{});var Mt=p(Ne);En=l(Mt,"In questo modo si scaricano molte informazioni di debug relative a NCCL, che puoi cercare online in caso di problemi. Oppure, se non hai la sicurezza di come interpretare l\u2019output, puoi condividere il file di log in una Issue."),Mt.forEach(s),la=c(e),F=i(e,"H2",{class:!0});var en=p(F);J=i(en,"A",{id:!0,class:!0,href:!0});var Kt=p(J);Ze=i(Kt,"SPAN",{});var Bt=p(Ze);h(he.$$.fragment,Bt),Bt.forEach(s),Kt.forEach(s),yn=c(en),es=i(en,"SPAN",{});var Ht=p(es);zn=l(Ht,"Rilevamento di Underflow e Overflow"),Ht.forEach(s),en.forEach(s),ta=c(e),h(V.$$.fragment,e),oa=c(e),h(W.$$.fragment,e),ia=c(e),h(X.$$.fragment,e),ra=c(e),q=i(e,"P",{});var oe=p(q);kn=l(oe,"Se inizi a ottenere "),ss=i(oe,"CODE",{});var Jt=p(ss);Pn=l(Jt,"loss=NaN"),Jt.forEach(s),On=l(oe," o il modello presenta qualche altro comportamento anomalo a causa di valori "),as=i(oe,"CODE",{});var Vt=p(as);Cn=l(Vt,"inf"),Vt.forEach(s),qn=l(oe," o "),ns=i(oe,"CODE",{});var Wt=p(ns);Ln=l(Wt,"nan"),Wt.forEach(s),Sn=l(oe,` in
attivazioni o nei pesi, \xE8 necessario scoprire dove si verifica il primo underflow o overflow e cosa lo ha determinato. Fortunatamente
\xE8 possibile farlo facilmente attivando un modulo speciale che effettuer\xE0 il rilevamento automaticamente.`),oe.forEach(s),pa=c(e),Y=i(e,"P",{});var sn=p(Y);Nn=l(sn,"Se stai usando "),ls=i(sn,"CODE",{});var Xt=p(ls);Un=l(Xt,"Trainer"),Xt.forEach(s),Tn=l(sn,", hai bisogno di aggiungere solo:"),sn.forEach(s),ua=c(e),h(be.$$.fragment,e),ca=c(e),R=i(e,"P",{});var He=p(R);Gn=l(He,"ai normali argomenti della riga di comando, o passa "),ts=i(He,"CODE",{});var Yt=p(ts);Rn=l(Yt,'debug="underflow_overflow"'),Yt.forEach(s),xn=l(He,` quando viene creato l\u2019oggetto
`),os=i(He,"CODE",{});var Zt=p(os);An=l(Zt,"TrainingArguments"),Zt.forEach(s),Fn=l(He,"."),He.forEach(s),da=c(e),Ue=i(e,"P",{});var eo=p(Ue);In=l(eo,"Se stai usando il tuo ciclo di allenamento o un altro trainer, puoi ottenere lo stesso risultato con:"),eo.forEach(s),ma=c(e),h(je.$$.fragment,e),fa=c(e),C=i(e,"P",{});var Q=p(C);is=i(Q,"CODE",{});var so=p(is);Qn=l(so,"DebugUnderflowOverflow"),so.forEach(s),Mn=l(Q,` inserisce dei ganci nel modello che dopo ogni chiamata
testeranno le variabili di ingresso e di uscita e anche i pesi del modulo corrispondente. Non appena viene rilevato `),rs=i(Q,"CODE",{});var ao=p(rs);Kn=l(ao,"inf"),ao.forEach(s),Bn=l(Q,` o
o `),ps=i(Q,"CODE",{});var no=p(ps);Hn=l(no,"nan"),no.forEach(s),Jn=l(Q," in almeno un elemento delle attivazioni o dei pesi, il programma lo notifica e stampa un rapporto come il seguente (questo \xE8 stato rilevato con "),us=i(Q,"CODE",{});var lo=p(us);Vn=l(lo,"google/mt5-small"),lo.forEach(s),Wn=l(Q," sotto fp16 mixed precision):"),Q.forEach(s),ha=c(e),h(ve.$$.fragment,e),ba=c(e),Te=i(e,"P",{});var to=p(Te);Xn=l(to,"L\u2019output di esempio \xE8 stato tagliato al centro per brevit\xE0."),to.forEach(s),ja=c(e),g=i(e,"P",{});var k=p(g);Yn=l(k,`La seconda colonna mostra il valore dell\u2019elemento pi\xF9 grande in assoluto,cos\xEC se osserviamo da vicino gli ultimi istanti,
input e output sono nel range di `),cs=i(k,"CODE",{});var oo=p(cs);Zn=l(oo,"1e4"),oo.forEach(s),el=l(k,". Questo addestramento \xE8 stato eseguito con una mixed precision fp16 e l\u2019ultimo passo usciva fuori (sotto "),ds=i(k,"CODE",{});var io=p(ds);sl=l(io,"fp16"),io.forEach(s),al=l(k," il valore pi\xF9 grande prima di "),ms=i(k,"CODE",{});var ro=p(ms);nl=l(ro,"inf"),ro.forEach(s),ll=l(k," \xE8 "),fs=i(k,"CODE",{});var po=p(fs);tl=l(po,"64e3"),po.forEach(s),ol=l(k,"). Per evitare overflows sotto "),hs=i(k,"CODE",{});var uo=p(hs);il=l(uo,"fp16"),uo.forEach(s),rl=l(k," le attivazionioni devono rimanere molto al di sotto di "),bs=i(k,"CODE",{});var co=p(bs);pl=l(co,"1e4"),co.forEach(s),ul=l(k,", perch\xE9 "),js=i(k,"CODE",{});var mo=p(js);cl=l(mo,"1e4 * 1e4 = 1e8"),mo.forEach(s),dl=l(k," quindi qualsiasi moltiplicazione di matrice con grandi attivazioni porter\xE0 a una condizione di overflow numerico."),k.forEach(s),va=c(e),Z=i(e,"P",{});var an=p(Z);ml=l(an,"All\u2019inizio della traccia \xE8 possibile scoprire a quale lotto si \xE8 verificato il problema (questo "),vs=i(an,"CODE",{});var fo=p(vs);fl=l(fo,"Detected inf/nan during batch_number=0"),fo.forEach(s),hl=l(an," significa che il problema si \xE8 verificato nel primo lotto)."),an.forEach(s),_a=c(e),Ge=i(e,"P",{});var ho=p(Ge);bl=l(ho,`Ogni frame segnalato inizia dichiarando la voce completamente qualificata per il modulo corrispondente per il quale il frame \xE8 stato segnalato.
Se osserviamo il seguente frame:`),ho.forEach(s),wa=c(e),h(_e.$$.fragment,e),ga=c(e),L=i(e,"P",{});var ie=p(L);jl=l(ie,"Questo, "),_s=i(ie,"CODE",{});var bo=p(_s);vl=l(bo,"encoder.block.2.layer.1.layer_norm"),bo.forEach(s),_l=l(ie," indica che si tratta di un layer norm nel primo layer, del secondo blocco dell\u2019encoder. E le chiamata specifica di "),ws=i(ie,"CODE",{});var jo=p(ws);wl=l(jo,"forward"),jo.forEach(s),gl=l(ie," \xE8 "),gs=i(ie,"CODE",{});var vo=p(gs);$l=l(vo,"T5LayerNorm"),vo.forEach(s),Dl=l(ie,"."),ie.forEach(s),$a=c(e),Re=i(e,"P",{});var _o=p(Re);El=l(_o,"Osserviamo gli ultimi frame del report:"),_o.forEach(s),Da=c(e),h(we.$$.fragment,e),Ea=c(e),z=i(e,"P",{});var T=p(z);yl=l(T,"L\u2019ultimo frame report per la funzione "),$s=i(T,"CODE",{});var wo=p($s);zl=l(wo,"Dropout.forward"),wo.forEach(s),kl=l(T," con la prima voce per l\u2019unico input e la seconda per l\u2019unico output. Si pu\xF2 notare che \xE8 stato richiamato da un attibuto "),Ds=i(T,"CODE",{});var go=p(Ds);Pl=l(go,"dropout"),go.forEach(s),Ol=l(T," dentro la classe "),Es=i(T,"CODE",{});var $o=p(Es);Cl=l($o,"DenseReluDense"),$o.forEach(s),ql=l(T,". Si pu\xF2 notare che ci\xF2 \xE8 avvenuto durante il primo strato, del 2\xB0 blocco, durante il primissimo lotto. Infine, gli elementi di input pi\xF9 grandi in assoluto sono stati "),ys=i(T,"CODE",{});var Do=p(ys);Ll=l(Do,"6.27e+04"),Do.forEach(s),Sl=l(T," e l\u2019equivalente per l\u2019output era "),zs=i(T,"CODE",{});var Eo=p(zs);Nl=l(Eo,"inf"),Eo.forEach(s),Ul=l(T,"."),T.forEach(s),ya=c(e),S=i(e,"P",{});var re=p(S);Tl=l(re,"Puoi vedere qui, che "),ks=i(re,"CODE",{});var yo=p(ks);Gl=l(yo,"T5DenseGatedGeluDense.forward"),yo.forEach(s),Rl=l(re," risulta in output activations, il cui valore massimo assoluto era circa 62,7K, che \xE8 molto vicino al limite massimo di 64K di fp16. Nel prossimo frame abbiamo "),Ps=i(re,"CODE",{});var zo=p(Ps);xl=l(zo,"Dropout"),zo.forEach(s),Al=l(re," che rinormalizza i pesi, dopo aver azzerato alcuni elementi, il che spinge il valore massimo assoluto a pi\xF9 di 64K e si verifica un overflow.("),Os=i(re,"CODE",{});var ko=p(Os);Fl=l(ko,"inf"),ko.forEach(s),Il=l(re,")."),re.forEach(s),za=c(e),xe=i(e,"P",{});var Po=p(xe);Ql=l(Po,"Come puoi notare, \xE8 nei frames precedenti che occorre esaminare quando i numeri iniziano a diventare molto grandi per i valori fp16."),Po.forEach(s),ka=c(e),ee=i(e,"P",{});var nn=p(ee);Ml=l(nn,"Confrontiamo il report al codice "),Cs=i(nn,"CODE",{});var Oo=p(Cs);Kl=l(Oo,"models/t5/modeling_t5.py"),Oo.forEach(s),Bl=l(nn,":"),nn.forEach(s),Pa=c(e),h(ge.$$.fragment,e),Oa=c(e),se=i(e,"P",{});var ln=p(se);Hl=l(ln,"Ora \xE8 facile vedere la chiamata "),qs=i(ln,"CODE",{});var Co=p(qs);Jl=l(Co,"dropout"),Co.forEach(s),Vl=l(ln,", e tutte le chiamate precedenti."),ln.forEach(s),Ca=c(e),ae=i(e,"P",{});var tn=p(ae);Wl=l(tn,"Poich\xE9 il rilevamento avviene in un avanzamento (forward hook in eng.), i rapporti vengono creati immeditamente dopo ogni rientro da "),Ls=i(tn,"CODE",{});var qo=p(Ls);Xl=l(qo,"forward"),qo.forEach(s),Yl=l(tn," (forward returns in eng.)."),tn.forEach(s),qa=c(e),N=i(e,"P",{});var pe=p(N);Zl=l(pe,"Tornando al rapporto completo, per agire e risolvere il problema, dobbiamo andare qualche frame pi\xF9 in alto, dove i numeri hanno iniziato a salire, e probabilmente passare alla modalit\xE0 "),Ss=i(pe,"CODE",{});var Lo=p(Ss);et=l(Lo,"fp32"),Lo.forEach(s),st=l(pe,", in modo che i numeri non trabocchino quando vengono moltiplicati o sommati. Naturalmente, potrebbero esserci altre soluzioni. Per esempio, potremmo spegnere temporanemante "),Ns=i(pe,"CODE",{});var So=p(Ns);at=l(So,"amp"),So.forEach(s),nt=l(pe," se \xE8 abilitato, successivamente spostare "),Us=i(pe,"CODE",{});var No=p(Us);lt=l(No,"forward"),No.forEach(s),tt=l(pe," in un helper wrapper, come:"),pe.forEach(s),La=c(e),h($e.$$.fragment,e),Sa=c(e),x=i(e,"P",{});var Je=p(x);ot=l(Je,`Poich\xE9 il rilevatore automatico riporta solo gli ingressi e le uscite di fotogrammi completi, una volta che si sa dove cercare, si pu\xF2
analizzare anche le fasi intermedie di una specifica funzione `),Ts=i(Je,"CODE",{});var Uo=p(Ts);it=l(Uo,"forward"),Uo.forEach(s),rt=l(Je,". In alcuni casi puoi usare la funzione di supporto "),Gs=i(Je,"CODE",{});var To=p(Gs);pt=l(To,"detect_overflow"),To.forEach(s),ut=l(Je," per indirizzare il rilevatore dove preferisci, ad esempio:"),Je.forEach(s),Na=c(e),h(De.$$.fragment,e),Ua=c(e),U=i(e,"P",{});var ue=p(U);ct=l(ue,"Si pu\xF2 vedere che abbiamo aggiunto 2 di questi e ora teniamo traccia se "),Rs=i(ue,"CODE",{});var Go=p(Rs);dt=l(Go,"inf"),Go.forEach(s),mt=l(ue," o "),xs=i(ue,"CODE",{});var Ro=p(xs);ft=l(Ro,"nan"),Ro.forEach(s),ht=l(ue," per "),As=i(ue,"CODE",{});var xo=p(As);bt=l(xo,"forwarded_states"),xo.forEach(s),jt=l(ue,` \xE8 stato rilevato
da qualche parte.`),ue.forEach(s),Ta=c(e),ne=i(e,"P",{});var on=p(ne);vt=l(on,"In realt\xE0, il rilevatore li riporta gi\xE0, perch\xE9 ciascuna delle chiamate nell\u2019esempio precedente \xE8 un "),Fs=i(on,"CODE",{});var Ao=p(Fs);_t=l(Ao,"nn.Module"),Ao.forEach(s),wt=l(on,`, ma
diciamo che se avessimo dei calcoli diretti locali, questo \xE8 il modo in cui lo faremmo.`),on.forEach(s),Ga=c(e),Ae=i(e,"P",{});var Fo=p(Ae);gt=l(Fo,`Inoltre, se si istanzia il debugger nel proprio codice, \xE8 possibile modificare il numero di fotogrammi stampati rispetto a
predefinito, ad esempio.:`),Fo.forEach(s),Ra=c(e),h(Ee.$$.fragment,e),xa=c(e),I=i(e,"H3",{class:!0});var rn=p(I);le=i(rn,"A",{id:!0,class:!0,href:!0});var Io=p(le);Is=i(Io,"SPAN",{});var Qo=p(Is);h(ye.$$.fragment,Qo),Qo.forEach(s),Io.forEach(s),$t=c(rn),Qs=i(rn,"SPAN",{});var Mo=p(Qs);Dt=l(Mo,"Tracciamento della mistura assoluta del lotto specifico e del valore massimo"),Mo.forEach(s),rn.forEach(s),Aa=c(e),Fe=i(e,"P",{});var Ko=p(Fe);Et=l(Ko,"La stessa classe di debug pu\xF2 essere utilizzata per il tracciamento per-batch con la funzione di rilevamento di underflow/overflow disattivata."),Ko.forEach(s),Fa=c(e),te=i(e,"P",{});var pn=p(te);yt=l(pn,"Supponiamo di voler osservare i valori minimi e massimi assoluti per tutti gli ingredienti di ogni chiamata "),Ms=i(pn,"CODE",{});var Bo=p(Ms);zt=l(Bo,"forward"),Bo.forEach(s),kt=l(pn,` di un dato lotto.
lotto, e che lo si voglia fare solo per i lotti 1 e 3. Si istanzia questa classe come:`),pn.forEach(s),Ia=c(e),h(ze.$$.fragment,e),Qa=c(e),Ie=i(e,"P",{});var Ho=p(Ie);Pt=l(Ho,"Ora i batch completi 1 e 3 saranno tracciati utilizzando lo stesso formato del rilevatore di underflow/overflow."),Ho.forEach(s),Ma=c(e),Qe=i(e,"P",{});var Jo=p(Qe);Ot=l(Jo,"I batches sono 0-indexed."),Jo.forEach(s),Ka=c(e),Me=i(e,"P",{});var Vo=p(Me);Ct=l(Vo,`Questo \xE8 utile se si sa che il programma inizia a comportarsi male dopo un certo numero di batch, in modo da poter avanzare velocemente fino a quell\u2019area.
direttamente a quell\u2019area. Ecco un esempio di output troncato per questa configurazione:`),Vo.forEach(s),Ba=c(e),h(ke.$$.fragment,e),Ha=c(e),Ke=i(e,"P",{});var Wo=p(Ke);qt=l(Wo,"Qui verr\xE0 scaricato un numero enorme di fotogrammi, tanti quanti sono le chiamate in avanti nel modello, quindi pu\xF2 essere o non essere quello che volete, ma a volte pu\xF2 essere pi\xF9 utile usarlo di un classico debugger. Per esempio, se il problema inizia a verificarsi a partire dal lotto numero 150. Quindi \xE8 possibile scaricare le tracce dei lotti 149 e 150 e confrontare i punti in cui i numeri hanno iniziato a divergere."),Wo.forEach(s),Ja=c(e),Be=i(e,"P",{});var Xo=p(Be);Lt=l(Xo,"\xC8 inoltre possibile specificare il numero di batch dopo il quale interrompere l\u2019addestramento, con:"),Xo.forEach(s),Va=c(e),h(Pe.$$.fragment,e),this.h()},h(){D(d,"name","hf:doc:metadata"),D(d,"content",JSON.stringify(ii)),D(w,"id","debugging"),D(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),D(w,"href","#debugging"),D(m,"class","relative group"),D(K,"id","debug-dei-problemi-di-rete-multigpu"),D(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),D(K,"href","#debug-dei-problemi-di-rete-multigpu"),D(A,"class","relative group"),D(J,"id","rilevamento-di-underflow-e-overflow"),D(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),D(J,"href","#rilevamento-di-underflow-e-overflow"),D(F,"class","relative group"),D(le,"id","tracciamento-della-mistura-assoluta-del-lotto-specifico-e-del-valore-massimo"),D(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),D(le,"href","#tracciamento-della-mistura-assoluta-del-lotto-specifico-e-del-valore-massimo"),D(I,"class","relative group")},m(e,t){a(document.head,d),r(e,y,t),r(e,m,t),a(m,w),a(w,O),b($,O,null),a(m,E),a(m,G),a(G,cn),r(e,Hs,t),r(e,A,t),a(A,K),a(K,Ve),b(ce,Ve,null),a(A,dn),a(A,We),a(We,mn),r(e,Js,t),r(e,B,t),a(B,fn),a(B,Xe),a(Xe,hn),a(B,bn),r(e,Vs,t),b(de,e,t),r(e,Ws,t),r(e,Ce,t),a(Ce,jn),r(e,Xs,t),b(me,e,t),r(e,Ys,t),r(e,qe,t),a(qe,vn),r(e,Zs,t),r(e,Le,t),a(Le,_n),r(e,ea,t),r(e,Se,t),a(Se,wn),r(e,sa,t),r(e,H,t),a(H,gn),a(H,Ye),a(Ye,$n),a(H,Dn),r(e,aa,t),b(fe,e,t),r(e,na,t),r(e,Ne,t),a(Ne,En),r(e,la,t),r(e,F,t),a(F,J),a(J,Ze),b(he,Ze,null),a(F,yn),a(F,es),a(es,zn),r(e,ta,t),b(V,e,t),r(e,oa,t),b(W,e,t),r(e,ia,t),b(X,e,t),r(e,ra,t),r(e,q,t),a(q,kn),a(q,ss),a(ss,Pn),a(q,On),a(q,as),a(as,Cn),a(q,qn),a(q,ns),a(ns,Ln),a(q,Sn),r(e,pa,t),r(e,Y,t),a(Y,Nn),a(Y,ls),a(ls,Un),a(Y,Tn),r(e,ua,t),b(be,e,t),r(e,ca,t),r(e,R,t),a(R,Gn),a(R,ts),a(ts,Rn),a(R,xn),a(R,os),a(os,An),a(R,Fn),r(e,da,t),r(e,Ue,t),a(Ue,In),r(e,ma,t),b(je,e,t),r(e,fa,t),r(e,C,t),a(C,is),a(is,Qn),a(C,Mn),a(C,rs),a(rs,Kn),a(C,Bn),a(C,ps),a(ps,Hn),a(C,Jn),a(C,us),a(us,Vn),a(C,Wn),r(e,ha,t),b(ve,e,t),r(e,ba,t),r(e,Te,t),a(Te,Xn),r(e,ja,t),r(e,g,t),a(g,Yn),a(g,cs),a(cs,Zn),a(g,el),a(g,ds),a(ds,sl),a(g,al),a(g,ms),a(ms,nl),a(g,ll),a(g,fs),a(fs,tl),a(g,ol),a(g,hs),a(hs,il),a(g,rl),a(g,bs),a(bs,pl),a(g,ul),a(g,js),a(js,cl),a(g,dl),r(e,va,t),r(e,Z,t),a(Z,ml),a(Z,vs),a(vs,fl),a(Z,hl),r(e,_a,t),r(e,Ge,t),a(Ge,bl),r(e,wa,t),b(_e,e,t),r(e,ga,t),r(e,L,t),a(L,jl),a(L,_s),a(_s,vl),a(L,_l),a(L,ws),a(ws,wl),a(L,gl),a(L,gs),a(gs,$l),a(L,Dl),r(e,$a,t),r(e,Re,t),a(Re,El),r(e,Da,t),b(we,e,t),r(e,Ea,t),r(e,z,t),a(z,yl),a(z,$s),a($s,zl),a(z,kl),a(z,Ds),a(Ds,Pl),a(z,Ol),a(z,Es),a(Es,Cl),a(z,ql),a(z,ys),a(ys,Ll),a(z,Sl),a(z,zs),a(zs,Nl),a(z,Ul),r(e,ya,t),r(e,S,t),a(S,Tl),a(S,ks),a(ks,Gl),a(S,Rl),a(S,Ps),a(Ps,xl),a(S,Al),a(S,Os),a(Os,Fl),a(S,Il),r(e,za,t),r(e,xe,t),a(xe,Ql),r(e,ka,t),r(e,ee,t),a(ee,Ml),a(ee,Cs),a(Cs,Kl),a(ee,Bl),r(e,Pa,t),b(ge,e,t),r(e,Oa,t),r(e,se,t),a(se,Hl),a(se,qs),a(qs,Jl),a(se,Vl),r(e,Ca,t),r(e,ae,t),a(ae,Wl),a(ae,Ls),a(Ls,Xl),a(ae,Yl),r(e,qa,t),r(e,N,t),a(N,Zl),a(N,Ss),a(Ss,et),a(N,st),a(N,Ns),a(Ns,at),a(N,nt),a(N,Us),a(Us,lt),a(N,tt),r(e,La,t),b($e,e,t),r(e,Sa,t),r(e,x,t),a(x,ot),a(x,Ts),a(Ts,it),a(x,rt),a(x,Gs),a(Gs,pt),a(x,ut),r(e,Na,t),b(De,e,t),r(e,Ua,t),r(e,U,t),a(U,ct),a(U,Rs),a(Rs,dt),a(U,mt),a(U,xs),a(xs,ft),a(U,ht),a(U,As),a(As,bt),a(U,jt),r(e,Ta,t),r(e,ne,t),a(ne,vt),a(ne,Fs),a(Fs,_t),a(ne,wt),r(e,Ga,t),r(e,Ae,t),a(Ae,gt),r(e,Ra,t),b(Ee,e,t),r(e,xa,t),r(e,I,t),a(I,le),a(le,Is),b(ye,Is,null),a(I,$t),a(I,Qs),a(Qs,Dt),r(e,Aa,t),r(e,Fe,t),a(Fe,Et),r(e,Fa,t),r(e,te,t),a(te,yt),a(te,Ms),a(Ms,zt),a(te,kt),r(e,Ia,t),b(ze,e,t),r(e,Qa,t),r(e,Ie,t),a(Ie,Pt),r(e,Ma,t),r(e,Qe,t),a(Qe,Ot),r(e,Ka,t),r(e,Me,t),a(Me,Ct),r(e,Ba,t),b(ke,e,t),r(e,Ha,t),r(e,Ke,t),a(Ke,qt),r(e,Ja,t),r(e,Be,t),a(Be,Lt),r(e,Va,t),b(Pe,e,t),Wa=!0},p(e,[t]){const Oe={};t&2&&(Oe.$$scope={dirty:t,ctx:e}),V.$set(Oe);const Ks={};t&2&&(Ks.$$scope={dirty:t,ctx:e}),W.$set(Ks);const Bs={};t&2&&(Bs.$$scope={dirty:t,ctx:e}),X.$set(Bs)},i(e){Wa||(j($.$$.fragment,e),j(ce.$$.fragment,e),j(de.$$.fragment,e),j(me.$$.fragment,e),j(fe.$$.fragment,e),j(he.$$.fragment,e),j(V.$$.fragment,e),j(W.$$.fragment,e),j(X.$$.fragment,e),j(be.$$.fragment,e),j(je.$$.fragment,e),j(ve.$$.fragment,e),j(_e.$$.fragment,e),j(we.$$.fragment,e),j(ge.$$.fragment,e),j($e.$$.fragment,e),j(De.$$.fragment,e),j(Ee.$$.fragment,e),j(ye.$$.fragment,e),j(ze.$$.fragment,e),j(ke.$$.fragment,e),j(Pe.$$.fragment,e),Wa=!0)},o(e){v($.$$.fragment,e),v(ce.$$.fragment,e),v(de.$$.fragment,e),v(me.$$.fragment,e),v(fe.$$.fragment,e),v(he.$$.fragment,e),v(V.$$.fragment,e),v(W.$$.fragment,e),v(X.$$.fragment,e),v(be.$$.fragment,e),v(je.$$.fragment,e),v(ve.$$.fragment,e),v(_e.$$.fragment,e),v(we.$$.fragment,e),v(ge.$$.fragment,e),v($e.$$.fragment,e),v(De.$$.fragment,e),v(Ee.$$.fragment,e),v(ye.$$.fragment,e),v(ze.$$.fragment,e),v(ke.$$.fragment,e),v(Pe.$$.fragment,e),Wa=!1},d(e){s(d),e&&s(y),e&&s(m),_($),e&&s(Hs),e&&s(A),_(ce),e&&s(Js),e&&s(B),e&&s(Vs),_(de,e),e&&s(Ws),e&&s(Ce),e&&s(Xs),_(me,e),e&&s(Ys),e&&s(qe),e&&s(Zs),e&&s(Le),e&&s(ea),e&&s(Se),e&&s(sa),e&&s(H),e&&s(aa),_(fe,e),e&&s(na),e&&s(Ne),e&&s(la),e&&s(F),_(he),e&&s(ta),_(V,e),e&&s(oa),_(W,e),e&&s(ia),_(X,e),e&&s(ra),e&&s(q),e&&s(pa),e&&s(Y),e&&s(ua),_(be,e),e&&s(ca),e&&s(R),e&&s(da),e&&s(Ue),e&&s(ma),_(je,e),e&&s(fa),e&&s(C),e&&s(ha),_(ve,e),e&&s(ba),e&&s(Te),e&&s(ja),e&&s(g),e&&s(va),e&&s(Z),e&&s(_a),e&&s(Ge),e&&s(wa),_(_e,e),e&&s(ga),e&&s(L),e&&s($a),e&&s(Re),e&&s(Da),_(we,e),e&&s(Ea),e&&s(z),e&&s(ya),e&&s(S),e&&s(za),e&&s(xe),e&&s(ka),e&&s(ee),e&&s(Pa),_(ge,e),e&&s(Oa),e&&s(se),e&&s(Ca),e&&s(ae),e&&s(qa),e&&s(N),e&&s(La),_($e,e),e&&s(Sa),e&&s(x),e&&s(Na),_(De,e),e&&s(Ua),e&&s(U),e&&s(Ta),e&&s(ne),e&&s(Ga),e&&s(Ae),e&&s(Ra),_(Ee,e),e&&s(xa),e&&s(I),_(ye),e&&s(Aa),e&&s(Fe),e&&s(Fa),e&&s(te),e&&s(Ia),_(ze,e),e&&s(Qa),e&&s(Ie),e&&s(Ma),e&&s(Qe),e&&s(Ka),e&&s(Me),e&&s(Ba),_(ke,e),e&&s(Ha),e&&s(Ke),e&&s(Ja),e&&s(Be),e&&s(Va),_(Pe,e)}}}const ii={local:"debugging",sections:[{local:"debug-dei-problemi-di-rete-multigpu",title:"Debug dei problemi di rete multi-GPU"},{local:"rilevamento-di-underflow-e-overflow",sections:[{local:"tracciamento-della-mistura-assoluta-del-lotto-specifico-e-del-valore-massimo",title:"Tracciamento della mistura assoluta del lotto specifico e del valore massimo"}],title:"Rilevamento di Underflow e Overflow"}],title:"Debugging"};function ri(M){return ai(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class mi extends Yo{constructor(d){super();Zo(this,d,ri,oi,ei,{})}}export{mi as default,ii as metadata};
