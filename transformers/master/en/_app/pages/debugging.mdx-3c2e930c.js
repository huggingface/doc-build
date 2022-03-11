import{S as Vl,i as Xl,s as Zl,e as r,k as i,w as j,t as n,M as er,c as o,d as a,m as c,a as p,x as _,h as t,b as E,F as s,g as u,y as v,q as y,o as g,B as $}from"../chunks/vendor-329198bb.js";import{T as Mt}from"../chunks/Tip-39ae8a84.js";import{I as Ht}from"../chunks/IconCopyLink-236b0ec7.js";import{C as F}from"../chunks/CodeBlock-49151c5f.js";import"../chunks/CopyButton-970e2b07.js";function sr(I){let h,w;return{c(){h=r("p"),w=n("This feature is currently available for PyTorch-only.")},l(d){h=o(d,"P",{});var f=p(h);w=t(f,"This feature is currently available for PyTorch-only."),f.forEach(a)},m(d,f){u(d,h,f),s(h,w)},d(d){d&&a(h)}}}function ar(I){let h,w,d,f,x;return{c(){h=r("p"),w=n("For multi-GPU training it requires DDP ("),d=r("code"),f=n("torch.distributed.launch"),x=n(").")},l(b){h=o(b,"P",{});var D=p(h);w=t(D,"For multi-GPU training it requires DDP ("),d=o(D,"CODE",{});var N=p(d);f=t(N,"torch.distributed.launch"),N.forEach(a),x=t(D,")."),D.forEach(a)},m(b,D){u(b,h,D),s(h,w),s(h,d),s(d,f),s(h,x)},d(b){b&&a(h)}}}function nr(I){let h,w,d,f,x;return{c(){h=r("p"),w=n("This feature can be used with any "),d=r("code"),f=n("nn.Module"),x=n("-based model.")},l(b){h=o(b,"P",{});var D=p(h);w=t(D,"This feature can be used with any "),d=o(D,"CODE",{});var N=p(d);f=t(N,"nn.Module"),N.forEach(a),x=t(D,"-based model."),D.forEach(a)},m(b,D){u(b,h,D),s(h,w),s(h,d),s(d,f),s(h,x)},d(b){b&&a(h)}}}function tr(I){let h,w,d,f,x,b,D,N,La,Cs,q,Y,Ue,oe,Aa,Ie,Sa,Ps,K,Ls,z,As,B,Ss,C,Ra,qe,Fa,Na,Me,Ga,Ua,He,Ia,qa,Rs,W,Ma,ge,Ha,Ya,Fs,pe,Ns,G,Ka,Ye,za,Ba,$e,Wa,Ja,Gs,De,Qa,Us,ue,Is,T,Ee,Va,Xa,Ke,Za,en,ze,sn,an,Be,nn,tn,qs,ie,Ms,ke,ln,Hs,m,rn,We,on,pn,Je,un,cn,Qe,hn,dn,Ve,fn,mn,Xe,bn,wn,Ze,jn,_n,es,vn,yn,Ys,J,gn,ss,$n,Dn,Ks,Oe,En,zs,ce,Bs,P,kn,as,On,xn,ns,Tn,Cn,ts,Pn,Ln,Ws,xe,An,Js,he,Qs,k,Sn,ls,Rn,Fn,rs,Nn,Gn,os,Un,In,ps,qn,Mn,us,Hn,Yn,Vs,L,Kn,is,zn,Bn,cs,Wn,Jn,hs,Qn,Vn,Xs,Te,Xn,Zs,Q,Zn,ds,et,st,ea,de,sa,V,at,fs,nt,tt,aa,X,lt,ms,rt,ot,na,A,pt,bs,ut,it,ws,ct,ht,js,dt,ft,ta,fe,la,U,mt,_s,bt,wt,vs,jt,_t,ra,me,oa,S,vt,ys,yt,gt,gs,$t,Dt,$s,Et,kt,pa,Z,Ot,Ds,xt,Tt,ua,Ce,Ct,ia,be,ca,M,ee,Es,we,Pt,ks,Lt,ha,Pe,At,da,se,St,Os,Rt,Ft,fa,je,ma,Le,Nt,ba,Ae,Gt,wa,Se,Ut,ja,_e,_a,Re,It,va,Fe,qt,ya,ve,ga;return b=new Ht({}),oe=new Ht({}),K=new Mt({props:{$$slots:{default:[sr]},$$scope:{ctx:I}}}),z=new Mt({props:{$$slots:{default:[ar]},$$scope:{ctx:I}}}),B=new Mt({props:{$$slots:{default:[nr]},$$scope:{ctx:I}}}),pe=new F({props:{code:"--debug underflow_overflow",highlighted:"--debug underflow_overflow"}}),ue=new F({props:{code:`from .debug_utils import DebugUnderflowOverflow

debug_overflow = DebugUnderflowOverflow(model)`,highlighted:`<span class="hljs-keyword">from</span> .debug_utils <span class="hljs-keyword">import</span> DebugUnderflowOverflow

debug_overflow = DebugUnderflowOverflow(model)`}}),ie=new F({props:{code:`Detected inf/nan during batch_number=0
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
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span>      inf output`}}),ce=new F({props:{code:`                  encoder.block.2.layer.1.layer_norm T5LayerNorm
8.69e-02 4.18e-01 weight
2.65e-04 3.42e+03 input[0]
1.79e-06 4.65e+00 output`,highlighted:`                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.layer_norm T5LayerNorm
<span class="hljs-attribute">8</span>.<span class="hljs-number">69</span>e-<span class="hljs-number">02</span> <span class="hljs-number">4</span>.<span class="hljs-number">18</span>e-<span class="hljs-number">01</span> weight
<span class="hljs-attribute">2</span>.<span class="hljs-number">65</span>e-<span class="hljs-number">04</span> <span class="hljs-number">3</span>.<span class="hljs-number">42</span>e+<span class="hljs-number">03</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">1</span>.<span class="hljs-number">79</span>e-<span class="hljs-number">06</span> <span class="hljs-number">4</span>.<span class="hljs-number">65</span>e+<span class="hljs-number">00</span> output`}}),he=new F({props:{code:`Detected inf/nan during batch_number=0
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
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span>      inf output`}}),de=new F({props:{code:`class T5DenseGatedGeluDense(nn.Module):
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
        <span class="hljs-keyword">return</span> hidden_states`}}),fe=new F({props:{code:`def _forward(self, hidden_states):
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
        <span class="hljs-keyword">return</span> self._forward(hidden_states)`}}),me=new F({props:{code:`from debug_utils import detect_overflow


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
        <span class="hljs-keyword">return</span> hidden_states + self.dropout(forwarded_states)`}}),be=new F({props:{code:`from .debug_utils import DebugUnderflowOverflow

debug_overflow = DebugUnderflowOverflow(model, max_frames_to_save=100)`,highlighted:`<span class="hljs-keyword">from</span> .debug_utils <span class="hljs-keyword">import</span> DebugUnderflowOverflow

debug_overflow = DebugUnderflowOverflow(model, max_frames_to_save=<span class="hljs-number">100</span>)`}}),we=new Ht({}),je=new F({props:{code:"debug_overflow = DebugUnderflowOverflow(model, trace_batch_nums=[1, 3])",highlighted:'debug_overflow = DebugUnderflowOverflow(model, trace_batch_nums=[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>])'}}),_e=new F({props:{code:`                  *** Starting batch number=1 ***
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
[...]`}}),ve=new F({props:{code:"debug_overflow = DebugUnderflowOverflow(model, trace_batch_nums=[1, 3], abort_after_batch_num=3)",highlighted:'debug_overflow = DebugUnderflowOverflow(model, trace_batch_nums=[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>], abort_after_batch_num=<span class="hljs-number">3</span>)'}}),{c(){h=r("meta"),w=i(),d=r("h1"),f=r("a"),x=r("span"),j(b.$$.fragment),D=i(),N=r("span"),La=n("Debugging"),Cs=i(),q=r("h2"),Y=r("a"),Ue=r("span"),j(oe.$$.fragment),Aa=i(),Ie=r("span"),Sa=n("Underflow and Overflow Detection"),Ps=i(),j(K.$$.fragment),Ls=i(),j(z.$$.fragment),As=i(),j(B.$$.fragment),Ss=i(),C=r("p"),Ra=n("If you start getting "),qe=r("code"),Fa=n("loss=NaN"),Na=n(" or the model inhibits some other abnormal behavior due to "),Me=r("code"),Ga=n("inf"),Ua=n(" or "),He=r("code"),Ia=n("nan"),qa=n(` in
activations or weights one needs to discover where the first underflow or overflow happens and what led to it. Luckily
you can accomplish that easily by activating a special module that will do the detection automatically.`),Rs=i(),W=r("p"),Ma=n("If you\u2019re using "),ge=r("a"),Ha=n("Trainer"),Ya=n(", you just need to add:"),Fs=i(),j(pe.$$.fragment),Ns=i(),G=r("p"),Ka=n("to the normal command line arguments, or pass "),Ye=r("code"),za=n('debug="underflow_overflow"'),Ba=n(` when creating the
`),$e=r("a"),Wa=n("TrainingArguments"),Ja=n(" object."),Gs=i(),De=r("p"),Qa=n("If you\u2019re using your own training loop or another Trainer you can accomplish the same with:"),Us=i(),j(ue.$$.fragment),Is=i(),T=r("p"),Ee=r("a"),Va=n("DebugUnderflowOverflow"),Xa=n(` inserts hooks into the model that immediately after each
forward call will test input and output variables and also the corresponding module\u2019s weights. As soon as `),Ke=r("code"),Za=n("inf"),en=n(` or
`),ze=r("code"),sn=n("nan"),an=n(` is detected in at least one element of the activations or weights, the program will assert and print a report
like this (this was caught with `),Be=r("code"),nn=n("google/mt5-small"),tn=n(" under fp16 mixed precision):"),qs=i(),j(ie.$$.fragment),Ms=i(),ke=r("p"),ln=n("The example output has been trimmed in the middle for brevity."),Hs=i(),m=r("p"),rn=n(`The second column shows the value of the absolute largest element, so if you have a closer look at the last few frames,
the inputs and outputs were in the range of `),We=r("code"),on=n("1e4"),pn=n(`. So when this training was done under fp16 mixed precision the very
last step overflowed (since under `),Je=r("code"),un=n("fp16"),cn=n(" the largest number before "),Qe=r("code"),hn=n("inf"),dn=n(" is "),Ve=r("code"),fn=n("64e3"),mn=n(`). To avoid overflows under
`),Xe=r("code"),bn=n("fp16"),wn=n(" the activations must remain way below "),Ze=r("code"),jn=n("1e4"),_n=n(", because "),es=r("code"),vn=n("1e4 * 1e4 = 1e8"),yn=n(` so any matrix multiplication with
large activations is going to lead to a numerical overflow condition.`),Ys=i(),J=r("p"),gn=n("At the very start of the trace you can discover at which batch number the problem occurred (here "),ss=r("code"),$n=n("Detected inf/nan during batch_number=0"),Dn=n(" means the problem occurred on the first batch)."),Ks=i(),Oe=r("p"),En=n(`Each reported frame starts by declaring the fully qualified entry for the corresponding module this frame is reporting
for. If we look just at this frame:`),zs=i(),j(ce.$$.fragment),Bs=i(),P=r("p"),kn=n("Here, "),as=r("code"),On=n("encoder.block.2.layer.1.layer_norm"),xn=n(` indicates that it was a layer norm for the first layer, of the second
block of the encoder. And the specific calls of the `),ns=r("code"),Tn=n("forward"),Cn=n(" is "),ts=r("code"),Pn=n("T5LayerNorm"),Ln=n("."),Ws=i(),xe=r("p"),An=n("Let\u2019s look at the last few frames of that report:"),Js=i(),j(he.$$.fragment),Qs=i(),k=r("p"),Sn=n("The last frame reports for "),ls=r("code"),Rn=n("Dropout.forward"),Fn=n(` function with the first entry for the only input and the second for the
only output. You can see that it was called from an attribute `),rs=r("code"),Nn=n("dropout"),Gn=n(" inside "),os=r("code"),Un=n("DenseReluDense"),In=n(` class. We can see
that it happened during the first layer, of the 2nd block, during the very first batch. Finally, the absolute largest
input elements was `),ps=r("code"),qn=n("6.27e+04"),Mn=n(" and same for the output was "),us=r("code"),Hn=n("inf"),Yn=n("."),Vs=i(),L=r("p"),Kn=n("You can see here, that "),is=r("code"),zn=n("T5DenseGatedGeluDense.forward"),Bn=n(` resulted in output activations, whose absolute max value was
around 62.7K, which is very close to fp16\u2019s top limit of 64K. In the next frame we have `),cs=r("code"),Wn=n("Dropout"),Jn=n(` which renormalizes
the weights, after it zeroed some of the elements, which pushes the absolute max value to more than 64K, and we get an
overflow (`),hs=r("code"),Qn=n("inf"),Vn=n(")."),Xs=i(),Te=r("p"),Xn=n(`As you can see it\u2019s the previous frames that we need to look into when the numbers start going into very large for fp16
numbers.`),Zs=i(),Q=r("p"),Zn=n("Let\u2019s match the report to the code from "),ds=r("code"),et=n("models/t5/modeling_t5.py"),st=n(":"),ea=i(),j(de.$$.fragment),sa=i(),V=r("p"),at=n("Now it\u2019s easy to see the "),fs=r("code"),nt=n("dropout"),tt=n(" call, and all the previous calls as well."),aa=i(),X=r("p"),lt=n("Since the detection is happening in a forward hook, these reports are printed immediately after each "),ms=r("code"),rt=n("forward"),ot=n(`
returns.`),na=i(),A=r("p"),pt=n(`Going back to the full report, to act on it and to fix the problem, we need to go a few frames up where the numbers
started to go up and most likely switch to the `),bs=r("code"),ut=n("fp32"),it=n(` mode here, so that the numbers don\u2019t overflow when multiplied
or summed up. Of course, there might be other solutions. For example, we could turn off `),ws=r("code"),ct=n("amp"),ht=n(` temporarily if it\u2019s
enabled, after moving the original `),js=r("code"),dt=n("forward"),ft=n(" into a helper wrapper, like so:"),ta=i(),j(fe.$$.fragment),la=i(),U=r("p"),mt=n(`Since the automatic detector only reports on inputs and outputs of full frames, once you know where to look, you may
want to analyse the intermediary stages of any specific `),_s=r("code"),bt=n("forward"),wt=n(` function as well. In such a case you can use the
`),vs=r("code"),jt=n("detect_overflow"),_t=n(" helper function to inject the detector where you want it, for example:"),ra=i(),j(me.$$.fragment),oa=i(),S=r("p"),vt=n("You can see that we added 2 of these and now we track if "),ys=r("code"),yt=n("inf"),gt=n(" or "),gs=r("code"),$t=n("nan"),Dt=n(" for "),$s=r("code"),Et=n("forwarded_states"),kt=n(` was detected
somewhere in between.`),pa=i(),Z=r("p"),Ot=n("Actually, the detector already reports these because each of the calls in the example above is a "),Ds=r("code"),xt=n("nn.Module"),Tt=n(`, but
let\u2019s say if you had some local direct calculations this is how you\u2019d do that.`),ua=i(),Ce=r("p"),Ct=n(`Additionally, if you\u2019re instantiating the debugger in your own code, you can adjust the number of frames printed from
its default, e.g.:`),ia=i(),j(be.$$.fragment),ca=i(),M=r("h3"),ee=r("a"),Es=r("span"),j(we.$$.fragment),Pt=i(),ks=r("span"),Lt=n("Specific batch absolute mix and max value tracing"),ha=i(),Pe=r("p"),At=n("The same debugging class can be used for per-batch tracing with the underflow/overflow detection feature turned off."),da=i(),se=r("p"),St=n("Let\u2019s say you want to watch the absolute min and max values for all the ingredients of each "),Os=r("code"),Rt=n("forward"),Ft=n(` call of a given
batch, and only do that for batches 1 and 3. Then you instantiate this class as:`),fa=i(),j(je.$$.fragment),ma=i(),Le=r("p"),Nt=n("And now full batches 1 and 3 will be traced using the same format as the underflow/overflow detector does."),ba=i(),Ae=r("p"),Gt=n("Batches are 0-indexed."),wa=i(),Se=r("p"),Ut=n(`This is helpful if you know that the program starts misbehaving after a certain batch number, so you can fast-forward
right to that area. Here is a sample truncated output for such configuration:`),ja=i(),j(_e.$$.fragment),_a=i(),Re=r("p"),It=n(`Here you will get a huge number of frames dumped - as many as there were forward calls in your model, so it may or may
not what you want, but sometimes it can be easier to use for debugging purposes than a normal debugger. For example, if
a problem starts happening at batch number 150. So you can dump traces for batches 149 and 150 and compare where
numbers started to diverge.`),va=i(),Fe=r("p"),qt=n("You can also specify the batch number after which to stop the training, with:"),ya=i(),j(ve.$$.fragment),this.h()},l(e){const l=er('[data-svelte="svelte-1phssyn"]',document.head);h=o(l,"META",{name:!0,content:!0}),l.forEach(a),w=c(e),d=o(e,"H1",{class:!0});var ye=p(d);f=o(ye,"A",{id:!0,class:!0,href:!0});var xs=p(f);x=o(xs,"SPAN",{});var Ts=p(x);_(b.$$.fragment,Ts),Ts.forEach(a),xs.forEach(a),D=c(ye),N=o(ye,"SPAN",{});var Yt=p(N);La=t(Yt,"Debugging"),Yt.forEach(a),ye.forEach(a),Cs=c(e),q=o(e,"H2",{class:!0});var $a=p(q);Y=o($a,"A",{id:!0,class:!0,href:!0});var Kt=p(Y);Ue=o(Kt,"SPAN",{});var zt=p(Ue);_(oe.$$.fragment,zt),zt.forEach(a),Kt.forEach(a),Aa=c($a),Ie=o($a,"SPAN",{});var Bt=p(Ie);Sa=t(Bt,"Underflow and Overflow Detection"),Bt.forEach(a),$a.forEach(a),Ps=c(e),_(K.$$.fragment,e),Ls=c(e),_(z.$$.fragment,e),As=c(e),_(B.$$.fragment,e),Ss=c(e),C=o(e,"P",{});var ae=p(C);Ra=t(ae,"If you start getting "),qe=o(ae,"CODE",{});var Wt=p(qe);Fa=t(Wt,"loss=NaN"),Wt.forEach(a),Na=t(ae," or the model inhibits some other abnormal behavior due to "),Me=o(ae,"CODE",{});var Jt=p(Me);Ga=t(Jt,"inf"),Jt.forEach(a),Ua=t(ae," or "),He=o(ae,"CODE",{});var Qt=p(He);Ia=t(Qt,"nan"),Qt.forEach(a),qa=t(ae,` in
activations or weights one needs to discover where the first underflow or overflow happens and what led to it. Luckily
you can accomplish that easily by activating a special module that will do the detection automatically.`),ae.forEach(a),Rs=c(e),W=o(e,"P",{});var Da=p(W);Ma=t(Da,"If you\u2019re using "),ge=o(Da,"A",{href:!0});var Vt=p(ge);Ha=t(Vt,"Trainer"),Vt.forEach(a),Ya=t(Da,", you just need to add:"),Da.forEach(a),Fs=c(e),_(pe.$$.fragment,e),Ns=c(e),G=o(e,"P",{});var Ne=p(G);Ka=t(Ne,"to the normal command line arguments, or pass "),Ye=o(Ne,"CODE",{});var Xt=p(Ye);za=t(Xt,'debug="underflow_overflow"'),Xt.forEach(a),Ba=t(Ne,` when creating the
`),$e=o(Ne,"A",{href:!0});var Zt=p($e);Wa=t(Zt,"TrainingArguments"),Zt.forEach(a),Ja=t(Ne," object."),Ne.forEach(a),Gs=c(e),De=o(e,"P",{});var el=p(De);Qa=t(el,"If you\u2019re using your own training loop or another Trainer you can accomplish the same with:"),el.forEach(a),Us=c(e),_(ue.$$.fragment,e),Is=c(e),T=o(e,"P",{});var H=p(T);Ee=o(H,"A",{href:!0});var sl=p(Ee);Va=t(sl,"DebugUnderflowOverflow"),sl.forEach(a),Xa=t(H,` inserts hooks into the model that immediately after each
forward call will test input and output variables and also the corresponding module\u2019s weights. As soon as `),Ke=o(H,"CODE",{});var al=p(Ke);Za=t(al,"inf"),al.forEach(a),en=t(H,` or
`),ze=o(H,"CODE",{});var nl=p(ze);sn=t(nl,"nan"),nl.forEach(a),an=t(H,` is detected in at least one element of the activations or weights, the program will assert and print a report
like this (this was caught with `),Be=o(H,"CODE",{});var tl=p(Be);nn=t(tl,"google/mt5-small"),tl.forEach(a),tn=t(H," under fp16 mixed precision):"),H.forEach(a),qs=c(e),_(ie.$$.fragment,e),Ms=c(e),ke=o(e,"P",{});var ll=p(ke);ln=t(ll,"The example output has been trimmed in the middle for brevity."),ll.forEach(a),Hs=c(e),m=o(e,"P",{});var O=p(m);rn=t(O,`The second column shows the value of the absolute largest element, so if you have a closer look at the last few frames,
the inputs and outputs were in the range of `),We=o(O,"CODE",{});var rl=p(We);on=t(rl,"1e4"),rl.forEach(a),pn=t(O,`. So when this training was done under fp16 mixed precision the very
last step overflowed (since under `),Je=o(O,"CODE",{});var ol=p(Je);un=t(ol,"fp16"),ol.forEach(a),cn=t(O," the largest number before "),Qe=o(O,"CODE",{});var pl=p(Qe);hn=t(pl,"inf"),pl.forEach(a),dn=t(O," is "),Ve=o(O,"CODE",{});var ul=p(Ve);fn=t(ul,"64e3"),ul.forEach(a),mn=t(O,`). To avoid overflows under
`),Xe=o(O,"CODE",{});var il=p(Xe);bn=t(il,"fp16"),il.forEach(a),wn=t(O," the activations must remain way below "),Ze=o(O,"CODE",{});var cl=p(Ze);jn=t(cl,"1e4"),cl.forEach(a),_n=t(O,", because "),es=o(O,"CODE",{});var hl=p(es);vn=t(hl,"1e4 * 1e4 = 1e8"),hl.forEach(a),yn=t(O,` so any matrix multiplication with
large activations is going to lead to a numerical overflow condition.`),O.forEach(a),Ys=c(e),J=o(e,"P",{});var Ea=p(J);gn=t(Ea,"At the very start of the trace you can discover at which batch number the problem occurred (here "),ss=o(Ea,"CODE",{});var dl=p(ss);$n=t(dl,"Detected inf/nan during batch_number=0"),dl.forEach(a),Dn=t(Ea," means the problem occurred on the first batch)."),Ea.forEach(a),Ks=c(e),Oe=o(e,"P",{});var fl=p(Oe);En=t(fl,`Each reported frame starts by declaring the fully qualified entry for the corresponding module this frame is reporting
for. If we look just at this frame:`),fl.forEach(a),zs=c(e),_(ce.$$.fragment,e),Bs=c(e),P=o(e,"P",{});var ne=p(P);kn=t(ne,"Here, "),as=o(ne,"CODE",{});var ml=p(as);On=t(ml,"encoder.block.2.layer.1.layer_norm"),ml.forEach(a),xn=t(ne,` indicates that it was a layer norm for the first layer, of the second
block of the encoder. And the specific calls of the `),ns=o(ne,"CODE",{});var bl=p(ns);Tn=t(bl,"forward"),bl.forEach(a),Cn=t(ne," is "),ts=o(ne,"CODE",{});var wl=p(ts);Pn=t(wl,"T5LayerNorm"),wl.forEach(a),Ln=t(ne,"."),ne.forEach(a),Ws=c(e),xe=o(e,"P",{});var jl=p(xe);An=t(jl,"Let\u2019s look at the last few frames of that report:"),jl.forEach(a),Js=c(e),_(he.$$.fragment,e),Qs=c(e),k=o(e,"P",{});var R=p(k);Sn=t(R,"The last frame reports for "),ls=o(R,"CODE",{});var _l=p(ls);Rn=t(_l,"Dropout.forward"),_l.forEach(a),Fn=t(R,` function with the first entry for the only input and the second for the
only output. You can see that it was called from an attribute `),rs=o(R,"CODE",{});var vl=p(rs);Nn=t(vl,"dropout"),vl.forEach(a),Gn=t(R," inside "),os=o(R,"CODE",{});var yl=p(os);Un=t(yl,"DenseReluDense"),yl.forEach(a),In=t(R,` class. We can see
that it happened during the first layer, of the 2nd block, during the very first batch. Finally, the absolute largest
input elements was `),ps=o(R,"CODE",{});var gl=p(ps);qn=t(gl,"6.27e+04"),gl.forEach(a),Mn=t(R," and same for the output was "),us=o(R,"CODE",{});var $l=p(us);Hn=t($l,"inf"),$l.forEach(a),Yn=t(R,"."),R.forEach(a),Vs=c(e),L=o(e,"P",{});var te=p(L);Kn=t(te,"You can see here, that "),is=o(te,"CODE",{});var Dl=p(is);zn=t(Dl,"T5DenseGatedGeluDense.forward"),Dl.forEach(a),Bn=t(te,` resulted in output activations, whose absolute max value was
around 62.7K, which is very close to fp16\u2019s top limit of 64K. In the next frame we have `),cs=o(te,"CODE",{});var El=p(cs);Wn=t(El,"Dropout"),El.forEach(a),Jn=t(te,` which renormalizes
the weights, after it zeroed some of the elements, which pushes the absolute max value to more than 64K, and we get an
overflow (`),hs=o(te,"CODE",{});var kl=p(hs);Qn=t(kl,"inf"),kl.forEach(a),Vn=t(te,")."),te.forEach(a),Xs=c(e),Te=o(e,"P",{});var Ol=p(Te);Xn=t(Ol,`As you can see it\u2019s the previous frames that we need to look into when the numbers start going into very large for fp16
numbers.`),Ol.forEach(a),Zs=c(e),Q=o(e,"P",{});var ka=p(Q);Zn=t(ka,"Let\u2019s match the report to the code from "),ds=o(ka,"CODE",{});var xl=p(ds);et=t(xl,"models/t5/modeling_t5.py"),xl.forEach(a),st=t(ka,":"),ka.forEach(a),ea=c(e),_(de.$$.fragment,e),sa=c(e),V=o(e,"P",{});var Oa=p(V);at=t(Oa,"Now it\u2019s easy to see the "),fs=o(Oa,"CODE",{});var Tl=p(fs);nt=t(Tl,"dropout"),Tl.forEach(a),tt=t(Oa," call, and all the previous calls as well."),Oa.forEach(a),aa=c(e),X=o(e,"P",{});var xa=p(X);lt=t(xa,"Since the detection is happening in a forward hook, these reports are printed immediately after each "),ms=o(xa,"CODE",{});var Cl=p(ms);rt=t(Cl,"forward"),Cl.forEach(a),ot=t(xa,`
returns.`),xa.forEach(a),na=c(e),A=o(e,"P",{});var le=p(A);pt=t(le,`Going back to the full report, to act on it and to fix the problem, we need to go a few frames up where the numbers
started to go up and most likely switch to the `),bs=o(le,"CODE",{});var Pl=p(bs);ut=t(Pl,"fp32"),Pl.forEach(a),it=t(le,` mode here, so that the numbers don\u2019t overflow when multiplied
or summed up. Of course, there might be other solutions. For example, we could turn off `),ws=o(le,"CODE",{});var Ll=p(ws);ct=t(Ll,"amp"),Ll.forEach(a),ht=t(le,` temporarily if it\u2019s
enabled, after moving the original `),js=o(le,"CODE",{});var Al=p(js);dt=t(Al,"forward"),Al.forEach(a),ft=t(le," into a helper wrapper, like so:"),le.forEach(a),ta=c(e),_(fe.$$.fragment,e),la=c(e),U=o(e,"P",{});var Ge=p(U);mt=t(Ge,`Since the automatic detector only reports on inputs and outputs of full frames, once you know where to look, you may
want to analyse the intermediary stages of any specific `),_s=o(Ge,"CODE",{});var Sl=p(_s);bt=t(Sl,"forward"),Sl.forEach(a),wt=t(Ge,` function as well. In such a case you can use the
`),vs=o(Ge,"CODE",{});var Rl=p(vs);jt=t(Rl,"detect_overflow"),Rl.forEach(a),_t=t(Ge," helper function to inject the detector where you want it, for example:"),Ge.forEach(a),ra=c(e),_(me.$$.fragment,e),oa=c(e),S=o(e,"P",{});var re=p(S);vt=t(re,"You can see that we added 2 of these and now we track if "),ys=o(re,"CODE",{});var Fl=p(ys);yt=t(Fl,"inf"),Fl.forEach(a),gt=t(re," or "),gs=o(re,"CODE",{});var Nl=p(gs);$t=t(Nl,"nan"),Nl.forEach(a),Dt=t(re," for "),$s=o(re,"CODE",{});var Gl=p($s);Et=t(Gl,"forwarded_states"),Gl.forEach(a),kt=t(re,` was detected
somewhere in between.`),re.forEach(a),pa=c(e),Z=o(e,"P",{});var Ta=p(Z);Ot=t(Ta,"Actually, the detector already reports these because each of the calls in the example above is a "),Ds=o(Ta,"CODE",{});var Ul=p(Ds);xt=t(Ul,"nn.Module"),Ul.forEach(a),Tt=t(Ta,`, but
let\u2019s say if you had some local direct calculations this is how you\u2019d do that.`),Ta.forEach(a),ua=c(e),Ce=o(e,"P",{});var Il=p(Ce);Ct=t(Il,`Additionally, if you\u2019re instantiating the debugger in your own code, you can adjust the number of frames printed from
its default, e.g.:`),Il.forEach(a),ia=c(e),_(be.$$.fragment,e),ca=c(e),M=o(e,"H3",{class:!0});var Ca=p(M);ee=o(Ca,"A",{id:!0,class:!0,href:!0});var ql=p(ee);Es=o(ql,"SPAN",{});var Ml=p(Es);_(we.$$.fragment,Ml),Ml.forEach(a),ql.forEach(a),Pt=c(Ca),ks=o(Ca,"SPAN",{});var Hl=p(ks);Lt=t(Hl,"Specific batch absolute mix and max value tracing"),Hl.forEach(a),Ca.forEach(a),ha=c(e),Pe=o(e,"P",{});var Yl=p(Pe);At=t(Yl,"The same debugging class can be used for per-batch tracing with the underflow/overflow detection feature turned off."),Yl.forEach(a),da=c(e),se=o(e,"P",{});var Pa=p(se);St=t(Pa,"Let\u2019s say you want to watch the absolute min and max values for all the ingredients of each "),Os=o(Pa,"CODE",{});var Kl=p(Os);Rt=t(Kl,"forward"),Kl.forEach(a),Ft=t(Pa,` call of a given
batch, and only do that for batches 1 and 3. Then you instantiate this class as:`),Pa.forEach(a),fa=c(e),_(je.$$.fragment,e),ma=c(e),Le=o(e,"P",{});var zl=p(Le);Nt=t(zl,"And now full batches 1 and 3 will be traced using the same format as the underflow/overflow detector does."),zl.forEach(a),ba=c(e),Ae=o(e,"P",{});var Bl=p(Ae);Gt=t(Bl,"Batches are 0-indexed."),Bl.forEach(a),wa=c(e),Se=o(e,"P",{});var Wl=p(Se);Ut=t(Wl,`This is helpful if you know that the program starts misbehaving after a certain batch number, so you can fast-forward
right to that area. Here is a sample truncated output for such configuration:`),Wl.forEach(a),ja=c(e),_(_e.$$.fragment,e),_a=c(e),Re=o(e,"P",{});var Jl=p(Re);It=t(Jl,`Here you will get a huge number of frames dumped - as many as there were forward calls in your model, so it may or may
not what you want, but sometimes it can be easier to use for debugging purposes than a normal debugger. For example, if
a problem starts happening at batch number 150. So you can dump traces for batches 149 and 150 and compare where
numbers started to diverge.`),Jl.forEach(a),va=c(e),Fe=o(e,"P",{});var Ql=p(Fe);qt=t(Ql,"You can also specify the batch number after which to stop the training, with:"),Ql.forEach(a),ya=c(e),_(ve.$$.fragment,e),this.h()},h(){E(h,"name","hf:doc:metadata"),E(h,"content",JSON.stringify(lr)),E(f,"id","debugging"),E(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),E(f,"href","#debugging"),E(d,"class","relative group"),E(Y,"id","underflow-and-overflow-detection"),E(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),E(Y,"href","#underflow-and-overflow-detection"),E(q,"class","relative group"),E(ge,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),E($e,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),E(Ee,"href","/docs/transformers/master/en/internal/trainer_utils#transformers.debug_utils.DebugUnderflowOverflow"),E(ee,"id","specific-batch-absolute-mix-and-max-value-tracing"),E(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),E(ee,"href","#specific-batch-absolute-mix-and-max-value-tracing"),E(M,"class","relative group")},m(e,l){s(document.head,h),u(e,w,l),u(e,d,l),s(d,f),s(f,x),v(b,x,null),s(d,D),s(d,N),s(N,La),u(e,Cs,l),u(e,q,l),s(q,Y),s(Y,Ue),v(oe,Ue,null),s(q,Aa),s(q,Ie),s(Ie,Sa),u(e,Ps,l),v(K,e,l),u(e,Ls,l),v(z,e,l),u(e,As,l),v(B,e,l),u(e,Ss,l),u(e,C,l),s(C,Ra),s(C,qe),s(qe,Fa),s(C,Na),s(C,Me),s(Me,Ga),s(C,Ua),s(C,He),s(He,Ia),s(C,qa),u(e,Rs,l),u(e,W,l),s(W,Ma),s(W,ge),s(ge,Ha),s(W,Ya),u(e,Fs,l),v(pe,e,l),u(e,Ns,l),u(e,G,l),s(G,Ka),s(G,Ye),s(Ye,za),s(G,Ba),s(G,$e),s($e,Wa),s(G,Ja),u(e,Gs,l),u(e,De,l),s(De,Qa),u(e,Us,l),v(ue,e,l),u(e,Is,l),u(e,T,l),s(T,Ee),s(Ee,Va),s(T,Xa),s(T,Ke),s(Ke,Za),s(T,en),s(T,ze),s(ze,sn),s(T,an),s(T,Be),s(Be,nn),s(T,tn),u(e,qs,l),v(ie,e,l),u(e,Ms,l),u(e,ke,l),s(ke,ln),u(e,Hs,l),u(e,m,l),s(m,rn),s(m,We),s(We,on),s(m,pn),s(m,Je),s(Je,un),s(m,cn),s(m,Qe),s(Qe,hn),s(m,dn),s(m,Ve),s(Ve,fn),s(m,mn),s(m,Xe),s(Xe,bn),s(m,wn),s(m,Ze),s(Ze,jn),s(m,_n),s(m,es),s(es,vn),s(m,yn),u(e,Ys,l),u(e,J,l),s(J,gn),s(J,ss),s(ss,$n),s(J,Dn),u(e,Ks,l),u(e,Oe,l),s(Oe,En),u(e,zs,l),v(ce,e,l),u(e,Bs,l),u(e,P,l),s(P,kn),s(P,as),s(as,On),s(P,xn),s(P,ns),s(ns,Tn),s(P,Cn),s(P,ts),s(ts,Pn),s(P,Ln),u(e,Ws,l),u(e,xe,l),s(xe,An),u(e,Js,l),v(he,e,l),u(e,Qs,l),u(e,k,l),s(k,Sn),s(k,ls),s(ls,Rn),s(k,Fn),s(k,rs),s(rs,Nn),s(k,Gn),s(k,os),s(os,Un),s(k,In),s(k,ps),s(ps,qn),s(k,Mn),s(k,us),s(us,Hn),s(k,Yn),u(e,Vs,l),u(e,L,l),s(L,Kn),s(L,is),s(is,zn),s(L,Bn),s(L,cs),s(cs,Wn),s(L,Jn),s(L,hs),s(hs,Qn),s(L,Vn),u(e,Xs,l),u(e,Te,l),s(Te,Xn),u(e,Zs,l),u(e,Q,l),s(Q,Zn),s(Q,ds),s(ds,et),s(Q,st),u(e,ea,l),v(de,e,l),u(e,sa,l),u(e,V,l),s(V,at),s(V,fs),s(fs,nt),s(V,tt),u(e,aa,l),u(e,X,l),s(X,lt),s(X,ms),s(ms,rt),s(X,ot),u(e,na,l),u(e,A,l),s(A,pt),s(A,bs),s(bs,ut),s(A,it),s(A,ws),s(ws,ct),s(A,ht),s(A,js),s(js,dt),s(A,ft),u(e,ta,l),v(fe,e,l),u(e,la,l),u(e,U,l),s(U,mt),s(U,_s),s(_s,bt),s(U,wt),s(U,vs),s(vs,jt),s(U,_t),u(e,ra,l),v(me,e,l),u(e,oa,l),u(e,S,l),s(S,vt),s(S,ys),s(ys,yt),s(S,gt),s(S,gs),s(gs,$t),s(S,Dt),s(S,$s),s($s,Et),s(S,kt),u(e,pa,l),u(e,Z,l),s(Z,Ot),s(Z,Ds),s(Ds,xt),s(Z,Tt),u(e,ua,l),u(e,Ce,l),s(Ce,Ct),u(e,ia,l),v(be,e,l),u(e,ca,l),u(e,M,l),s(M,ee),s(ee,Es),v(we,Es,null),s(M,Pt),s(M,ks),s(ks,Lt),u(e,ha,l),u(e,Pe,l),s(Pe,At),u(e,da,l),u(e,se,l),s(se,St),s(se,Os),s(Os,Rt),s(se,Ft),u(e,fa,l),v(je,e,l),u(e,ma,l),u(e,Le,l),s(Le,Nt),u(e,ba,l),u(e,Ae,l),s(Ae,Gt),u(e,wa,l),u(e,Se,l),s(Se,Ut),u(e,ja,l),v(_e,e,l),u(e,_a,l),u(e,Re,l),s(Re,It),u(e,va,l),u(e,Fe,l),s(Fe,qt),u(e,ya,l),v(ve,e,l),ga=!0},p(e,[l]){const ye={};l&2&&(ye.$$scope={dirty:l,ctx:e}),K.$set(ye);const xs={};l&2&&(xs.$$scope={dirty:l,ctx:e}),z.$set(xs);const Ts={};l&2&&(Ts.$$scope={dirty:l,ctx:e}),B.$set(Ts)},i(e){ga||(y(b.$$.fragment,e),y(oe.$$.fragment,e),y(K.$$.fragment,e),y(z.$$.fragment,e),y(B.$$.fragment,e),y(pe.$$.fragment,e),y(ue.$$.fragment,e),y(ie.$$.fragment,e),y(ce.$$.fragment,e),y(he.$$.fragment,e),y(de.$$.fragment,e),y(fe.$$.fragment,e),y(me.$$.fragment,e),y(be.$$.fragment,e),y(we.$$.fragment,e),y(je.$$.fragment,e),y(_e.$$.fragment,e),y(ve.$$.fragment,e),ga=!0)},o(e){g(b.$$.fragment,e),g(oe.$$.fragment,e),g(K.$$.fragment,e),g(z.$$.fragment,e),g(B.$$.fragment,e),g(pe.$$.fragment,e),g(ue.$$.fragment,e),g(ie.$$.fragment,e),g(ce.$$.fragment,e),g(he.$$.fragment,e),g(de.$$.fragment,e),g(fe.$$.fragment,e),g(me.$$.fragment,e),g(be.$$.fragment,e),g(we.$$.fragment,e),g(je.$$.fragment,e),g(_e.$$.fragment,e),g(ve.$$.fragment,e),ga=!1},d(e){a(h),e&&a(w),e&&a(d),$(b),e&&a(Cs),e&&a(q),$(oe),e&&a(Ps),$(K,e),e&&a(Ls),$(z,e),e&&a(As),$(B,e),e&&a(Ss),e&&a(C),e&&a(Rs),e&&a(W),e&&a(Fs),$(pe,e),e&&a(Ns),e&&a(G),e&&a(Gs),e&&a(De),e&&a(Us),$(ue,e),e&&a(Is),e&&a(T),e&&a(qs),$(ie,e),e&&a(Ms),e&&a(ke),e&&a(Hs),e&&a(m),e&&a(Ys),e&&a(J),e&&a(Ks),e&&a(Oe),e&&a(zs),$(ce,e),e&&a(Bs),e&&a(P),e&&a(Ws),e&&a(xe),e&&a(Js),$(he,e),e&&a(Qs),e&&a(k),e&&a(Vs),e&&a(L),e&&a(Xs),e&&a(Te),e&&a(Zs),e&&a(Q),e&&a(ea),$(de,e),e&&a(sa),e&&a(V),e&&a(aa),e&&a(X),e&&a(na),e&&a(A),e&&a(ta),$(fe,e),e&&a(la),e&&a(U),e&&a(ra),$(me,e),e&&a(oa),e&&a(S),e&&a(pa),e&&a(Z),e&&a(ua),e&&a(Ce),e&&a(ia),$(be,e),e&&a(ca),e&&a(M),$(we),e&&a(ha),e&&a(Pe),e&&a(da),e&&a(se),e&&a(fa),$(je,e),e&&a(ma),e&&a(Le),e&&a(ba),e&&a(Ae),e&&a(wa),e&&a(Se),e&&a(ja),$(_e,e),e&&a(_a),e&&a(Re),e&&a(va),e&&a(Fe),e&&a(ya),$(ve,e)}}}const lr={local:"debugging",sections:[{local:"underflow-and-overflow-detection",sections:[{local:"specific-batch-absolute-mix-and-max-value-tracing",title:"Specific batch absolute mix and max value tracing"}],title:"Underflow and Overflow Detection"}],title:"Debugging"};function rr(I,h,w){let{fw:d}=h;return I.$$set=f=>{"fw"in f&&w(0,d=f.fw)},[d]}class hr extends Vl{constructor(h){super();Xl(this,h,rr,tr,Zl,{fw:0})}}export{hr as default,lr as metadata};
