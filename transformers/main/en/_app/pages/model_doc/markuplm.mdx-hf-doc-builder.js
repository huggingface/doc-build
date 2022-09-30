import{S as Ny,i as Sy,s as By,e as a,k as l,w as k,t as o,M as Ry,c as r,d as t,m as d,a as i,x as v,h as n,b as c,N as Wy,G as e,g as u,y as b,q as M,o as w,B as y,v as Uy,L as Qs}from"../../chunks/vendor-hf-doc-builder.js";import{T as vc}from"../../chunks/Tip-hf-doc-builder.js";import{D as z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Te}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as xe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Vs}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Hy(P){let m,T,_,g,x;return g=new Te({props:{code:`from transformers import MarkupLMModel, MarkupLMConfig

# Initializing a MarkupLM microsoft/markuplm-base style configuration
configuration = MarkupLMConfig()

# Initializing a model from the microsoft/markuplm-base style configuration
model = MarkupLMModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarkupLMModel, MarkupLMConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MarkupLM microsoft/markuplm-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MarkupLMConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/markuplm-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarkupLMModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){m=a("p"),T=o("Examples:"),_=l(),k(g.$$.fragment)},l(p){m=r(p,"P",{});var f=i(m);T=n(f,"Examples:"),f.forEach(t),_=d(p),v(g.$$.fragment,p)},m(p,f){u(p,m,f),e(m,T),u(p,_,f),b(g,p,f),x=!0},p:Qs,i(p){x||(M(g.$$.fragment,p),x=!0)},o(p){w(g.$$.fragment,p),x=!1},d(p){p&&t(m),p&&t(_),y(g,p)}}}function Vy(P){let m,T,_,g,x;return g=new Te({props:{code:`from transformers import MarkupLMFeatureExtractor

page_name_1 = "page1.html"
page_name_2 = "page2.html"
page_name_3 = "page3.html"

with open(page_name_1) as f:
    single_html_string = f.read()

feature_extractor = MarkupLMFeatureExtractor()

# single example
encoding = feature_extractor(single_html_string)
print(encoding.keys())
# dict_keys(['nodes', 'xpaths'])

# batched example

multi_html_strings = []

with open(page_name_2) as f:
    multi_html_strings.append(f.read())
with open(page_name_3) as f:
    multi_html_strings.append(f.read())

encoding = feature_extractor(multi_html_strings)
print(encoding.keys())
# dict_keys(['nodes', 'xpaths'])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarkupLMFeatureExtractor

<span class="hljs-meta">&gt;&gt;&gt; </span>page_name_1 = <span class="hljs-string">&quot;page1.html&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>page_name_2 = <span class="hljs-string">&quot;page2.html&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>page_name_3 = <span class="hljs-string">&quot;page3.html&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> <span class="hljs-built_in">open</span>(page_name_1) <span class="hljs-keyword">as</span> f:
<span class="hljs-meta">... </span>    single_html_string = f.read()

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = MarkupLMFeatureExtractor()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># single example</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(single_html_string)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;nodes&#x27;, &#x27;xpaths&#x27;])</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># batched example</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>multi_html_strings = []

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> <span class="hljs-built_in">open</span>(page_name_2) <span class="hljs-keyword">as</span> f:
<span class="hljs-meta">... </span>    multi_html_strings.append(f.read())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> <span class="hljs-built_in">open</span>(page_name_3) <span class="hljs-keyword">as</span> f:
<span class="hljs-meta">... </span>    multi_html_strings.append(f.read())

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(multi_html_strings)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;nodes&#x27;, &#x27;xpaths&#x27;])</span>`}}),{c(){m=a("p"),T=o("Examples:"),_=l(),k(g.$$.fragment)},l(p){m=r(p,"P",{});var f=i(m);T=n(f,"Examples:"),f.forEach(t),_=d(p),v(g.$$.fragment,p)},m(p,f){u(p,m,f),e(m,T),u(p,_,f),b(g,p,f),x=!0},p:Qs,i(p){x||(M(g.$$.fragment,p),x=!0)},o(p){w(g.$$.fragment,p),x=!1},d(p){p&&t(m),p&&t(_),y(g,p)}}}function Qy(P){let m,T,_,g,x;return{c(){m=a("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),g=o("Module"),x=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){m=r(p,"P",{});var f=i(m);T=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(f,"CODE",{});var G=i(_);g=n(G,"Module"),G.forEach(t),x=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(p,f){u(p,m,f),e(m,T),e(m,_),e(_,g),e(m,x)},d(p){p&&t(m)}}}function Xy(P){let m,T,_,g,x;return g=new Te({props:{code:`from transformers import MarkupLMProcessor, MarkupLMModel

processor = MarkupLMProcessor.from_pretrained("microsoft/markuplm-base")
model = MarkupLMModel.from_pretrained("microsoft/markuplm-base")

html_string = "<html> <head> <title>Page Title</title> </head> </html>"

encoding = processor(html_string, return_tensors="pt")

outputs = model(**encoding)
last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarkupLMProcessor, MarkupLMModel

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = MarkupLMProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/markuplm-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarkupLMModel.from_pretrained(<span class="hljs-string">&quot;microsoft/markuplm-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>html_string = <span class="hljs-string">&quot;&lt;html&gt; &lt;head&gt; &lt;title&gt;Page Title&lt;/title&gt; &lt;/head&gt; &lt;/html&gt;&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(html_string, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">4</span>, <span class="hljs-number">768</span>]`}}),{c(){m=a("p"),T=o("Examples:"),_=l(),k(g.$$.fragment)},l(p){m=r(p,"P",{});var f=i(m);T=n(f,"Examples:"),f.forEach(t),_=d(p),v(g.$$.fragment,p)},m(p,f){u(p,m,f),e(m,T),u(p,_,f),b(g,p,f),x=!0},p:Qs,i(p){x||(M(g.$$.fragment,p),x=!0)},o(p){w(g.$$.fragment,p),x=!1},d(p){p&&t(m),p&&t(_),y(g,p)}}}function Gy(P){let m,T,_,g,x;return{c(){m=a("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),g=o("Module"),x=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){m=r(p,"P",{});var f=i(m);T=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(f,"CODE",{});var G=i(_);g=n(G,"Module"),G.forEach(t),x=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(p,f){u(p,m,f),e(m,T),e(m,_),e(_,g),e(m,x)},d(p){p&&t(m)}}}function Ky(P){let m,T,_,g,x;return g=new Te({props:{code:`from transformers import AutoProcessor, AutoModelForSequenceClassification
import torch

processor = AutoProcessor.from_pretrained("microsoft/markuplm-base")
model = AutoModelForSequenceClassification.from_pretrained("microsoft/markuplm-base", num_labels=7)

html_string = "<html> <head> <title>Page Title</title> </head> </html>"
encoding = processor(html_string, return_tensors="pt")

with torch.no_grad():
    outputs = model(**encoding)

loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/markuplm-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/markuplm-base&quot;</span>, num_labels=<span class="hljs-number">7</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>html_string = <span class="hljs-string">&quot;&lt;html&gt; &lt;head&gt; &lt;title&gt;Page Title&lt;/title&gt; &lt;/head&gt; &lt;/html&gt;&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(html_string, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**encoding)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){m=a("p"),T=o("Examples:"),_=l(),k(g.$$.fragment)},l(p){m=r(p,"P",{});var f=i(m);T=n(f,"Examples:"),f.forEach(t),_=d(p),v(g.$$.fragment,p)},m(p,f){u(p,m,f),e(m,T),u(p,_,f),b(g,p,f),x=!0},p:Qs,i(p){x||(M(g.$$.fragment,p),x=!0)},o(p){w(g.$$.fragment,p),x=!1},d(p){p&&t(m),p&&t(_),y(g,p)}}}function Yy(P){let m,T,_,g,x;return{c(){m=a("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),g=o("Module"),x=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){m=r(p,"P",{});var f=i(m);T=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(f,"CODE",{});var G=i(_);g=n(G,"Module"),G.forEach(t),x=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(p,f){u(p,m,f),e(m,T),e(m,_),e(_,g),e(m,x)},d(p){p&&t(m)}}}function Jy(P){let m,T,_,g,x;return g=new Te({props:{code:`from transformers import AutoProcessor, AutoModelForTokenClassification
import torch

processor = AutoProcessor.from_pretrained("microsoft/markuplm-base")
processor.parse_html = False
model = AutoModelForTokenClassification.from_pretrained("microsoft/markuplm-base", num_labels=7)

nodes = ["hello", "world"]
xpaths = ["/html/body/div/li[1]/div/span", "/html/body/div/li[1]/div/span"]
node_labels = [1, 2]
encoding = processor(nodes=nodes, xpaths=xpaths, node_labels=node_labels, return_tensors="pt")

with torch.no_grad():
    outputs = model(**encoding)

loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/markuplm-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor.parse_html = <span class="hljs-literal">False</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/markuplm-base&quot;</span>, num_labels=<span class="hljs-number">7</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>nodes = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>xpaths = [<span class="hljs-string">&quot;/html/body/div/li[1]/div/span&quot;</span>, <span class="hljs-string">&quot;/html/body/div/li[1]/div/span&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>node_labels = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(nodes=nodes, xpaths=xpaths, node_labels=node_labels, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**encoding)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){m=a("p"),T=o("Examples:"),_=l(),k(g.$$.fragment)},l(p){m=r(p,"P",{});var f=i(m);T=n(f,"Examples:"),f.forEach(t),_=d(p),v(g.$$.fragment,p)},m(p,f){u(p,m,f),e(m,T),u(p,_,f),b(g,p,f),x=!0},p:Qs,i(p){x||(M(g.$$.fragment,p),x=!0)},o(p){w(g.$$.fragment,p),x=!1},d(p){p&&t(m),p&&t(_),y(g,p)}}}function Zy(P){let m,T,_,g,x;return{c(){m=a("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),g=o("Module"),x=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){m=r(p,"P",{});var f=i(m);T=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(f,"CODE",{});var G=i(_);g=n(G,"Module"),G.forEach(t),x=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(p,f){u(p,m,f),e(m,T),e(m,_),e(_,g),e(m,x)},d(p){p&&t(m)}}}function ex(P){let m,T,_,g,x;return g=new Te({props:{code:`from transformers import MarkupLMProcessor, MarkupLMForQuestionAnswering
import torch

processor = MarkupLMProcessor.from_pretrained("microsoft/markuplm-base-finetuned-websrc")
model = MarkupLMForQuestionAnswering.from_pretrained("microsoft/markuplm-base-finetuned-websrc")

html_string = "<html> <head> <title>My name is Niels</title> </head> </html>"
question = "What's his name?"

encoding = processor(html_string, questions=question, return_tensors="pt")

with torch.no_grad():
    outputs = model(**encoding)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = encoding.input_ids[0, answer_start_index : answer_end_index + 1]
processor.decode(predict_answer_tokens).strip()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarkupLMProcessor, MarkupLMForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = MarkupLMProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/markuplm-base-finetuned-websrc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarkupLMForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/markuplm-base-finetuned-websrc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>html_string = <span class="hljs-string">&quot;&lt;html&gt; &lt;head&gt; &lt;title&gt;My name is Niels&lt;/title&gt; &lt;/head&gt; &lt;/html&gt;&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;What&#x27;s his name?&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(html_string, questions=question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**encoding)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = encoding.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>processor.decode(predict_answer_tokens).strip()
<span class="hljs-string">&#x27;Niels&#x27;</span>`}}),{c(){m=a("p"),T=o("Examples:"),_=l(),k(g.$$.fragment)},l(p){m=r(p,"P",{});var f=i(m);T=n(f,"Examples:"),f.forEach(t),_=d(p),v(g.$$.fragment,p)},m(p,f){u(p,m,f),e(m,T),u(p,_,f),b(g,p,f),x=!0},p:Qs,i(p){x||(M(g.$$.fragment,p),x=!0)},o(p){w(g.$$.fragment,p),x=!1},d(p){p&&t(m),p&&t(_),y(g,p)}}}function tx(P){let m,T,_,g,x,p,f,G,bc,Jl,Se,ct,Xs,ro,Mc,Gs,wc,Zl,qe,yc,io,xc,Tc,yn,Ec,Lc,ed,xn,qc,td,pt,Tn,lo,$c,Fc,zc,En,co,jc,Cc,od,Ln,Pc,nd,qn,Ks,Dc,sd,$n,Ac,ad,$e,le,Ic,Ys,Oc,Nc,Fn,Sc,Bc,Js,Rc,Wc,Zs,Uc,Hc,Vc,Be,Qc,zn,Xc,Gc,jn,Kc,Yc,Jc,po,Zc,ho,ep,tp,rd,ht,Ob,id,uo,op,Cn,np,ld,Fe,sp,mo,ap,rp,fo,ip,lp,dd,Re,ut,ea,go,dp,ta,cp,cd,J,pp,Pn,hp,up,Dn,mp,fp,An,gp,_p,In,kp,vp,oa,bp,Mp,pd,_o,hd,F,wp,On,yp,xp,Nn,Tp,Ep,Sn,Lp,qp,Bn,$p,Fp,na,zp,jp,sa,Cp,Pp,aa,Dp,Ap,ra,Ip,Op,ia,Np,Sp,la,Bp,Rp,ud,de,Rn,Wp,Up,ko,Hp,Vp,Wn,Qp,Xp,Un,Gp,Kp,md,Hn,Yp,fd,Vn,da,Jp,gd,Qn,Zp,_d,vo,kd,Xn,ca,eh,vd,ze,th,pa,oh,nh,ha,sh,ah,bd,bo,Md,Gn,ua,rh,wd,Z,ih,Mo,lh,dh,ma,ch,ph,fa,hh,uh,ga,mh,fh,_a,gh,_h,yd,wo,xd,Kn,ka,kh,Td,Yn,vh,Ed,yo,Ld,Jn,va,bh,qd,je,Mh,ba,wh,yh,Ma,xh,Th,$d,xo,Fd,We,mt,wa,To,Eh,ya,Lh,zd,ce,Eo,qh,Ue,$h,Zn,Fh,zh,Lo,jh,Ch,Ph,He,Dh,es,Ah,Ih,ts,Oh,Nh,Sh,ft,jd,Ve,gt,xa,qo,Bh,Ta,Rh,Cd,pe,$o,Wh,Ea,Uh,Hh,Fo,Vh,La,Qh,Xh,Gh,Ce,zo,Kh,qa,Yh,Jh,_t,Pd,Qe,kt,$a,jo,Zh,Fa,eu,Dd,K,Co,tu,S,ou,os,nu,su,za,au,ru,ja,iu,lu,Ca,du,cu,Pa,pu,hu,Da,uu,mu,ns,fu,gu,_u,Pe,Po,ku,Aa,vu,bu,Do,ss,Mu,Ia,wu,yu,as,xu,Oa,Tu,Eu,rs,Ao,Lu,vt,Io,qu,Na,$u,Fu,is,Oo,Ad,Xe,bt,Sa,No,zu,Ba,ju,Id,j,So,Cu,Ra,Pu,Du,B,ls,Au,Iu,Wa,Ou,Nu,Ua,Su,Bu,Ha,Ru,Wu,Va,Uu,Hu,Qa,Vu,Qu,ds,Xu,Gu,Ku,Xa,Yu,Ju,R,Bo,Zu,A,em,Ga,tm,om,Ka,nm,sm,Ya,am,rm,Ja,im,lm,Za,dm,cm,cs,pm,hm,er,um,mm,tr,fm,gm,_m,Y,or,Mt,nr,km,vm,sr,bm,Mm,wm,ar,wt,rr,ym,xm,ir,Tm,Em,Lm,lr,W,dr,qm,$m,cr,Fm,zm,pr,jm,Cm,hr,Pm,Dm,ps,Am,Im,ur,Om,Nm,mr,Sm,Bm,Rm,fr,De,gr,Wm,Um,_r,Hm,Vm,kr,Qm,Xm,Gm,vr,yt,br,Km,Ym,Mr,Jm,Zm,ef,wr,xt,yr,tf,of,xr,nf,sf,af,Tr,me,Er,rf,lf,Lr,df,cf,qr,pf,hf,$r,uf,mf,ff,E,gf,Fr,_f,kf,zr,vf,bf,jr,Mf,wf,Cr,yf,xf,Pr,Tf,Ef,Dr,Lf,qf,Ar,$f,Ff,Ir,zf,jf,Or,Cf,Pf,Nr,Df,Af,Sr,If,Of,Br,Nf,Sf,hs,Bf,Rf,Rr,Wf,Uf,Hf,Ge,Tt,Wr,Vf,Qf,Ur,Xf,Gf,Kf,Et,Hr,Yf,Jf,Vr,Zf,eg,tg,Lt,Qr,og,ng,Xr,sg,ag,rg,I,ig,Gr,lg,dg,Kr,cg,pg,Yr,hg,ug,Jr,mg,fg,Zr,gg,_g,us,kg,vg,ei,bg,Mg,ti,wg,yg,xg,C,oi,qt,ni,Tg,Eg,si,Lg,qg,$g,ai,$t,ri,Fg,zg,ii,jg,Cg,Pg,li,U,di,Dg,Ag,ci,Ig,Og,pi,Ng,Sg,hi,Bg,Rg,ms,Wg,Ug,ui,Hg,Vg,mi,Qg,Xg,Gg,fi,Ae,gi,Kg,Yg,_i,Jg,Zg,ki,e_,t_,o_,vi,Ft,bi,n_,s_,Mi,a_,r_,i_,wi,zt,yi,l_,d_,xi,c_,p_,h_,Ti,L,Ei,u_,m_,Li,f_,g_,qi,__,k_,$i,v_,b_,Fi,M_,w_,zi,y_,x_,ji,T_,E_,Ci,L_,q_,Pi,$_,F_,Di,z_,j_,Ai,C_,P_,Ii,D_,A_,fs,I_,O_,Oi,N_,S_,B_,Ni,jt,Si,R_,W_,Bi,U_,H_,V_,Ri,Ct,Wi,Q_,X_,Ui,G_,K_,Y_,Hi,Pt,Vi,J_,Z_,Qi,ek,tk,ok,Ie,Ro,nk,Xi,sk,ak,Wo,gs,rk,Gi,ik,lk,_s,dk,Ki,ck,pk,Dt,Uo,hk,Yi,uk,mk,At,Ho,fk,Vo,gk,Ji,_k,kk,vk,It,Qo,bk,Zi,Mk,Od,Ke,Ot,el,Xo,wk,tl,yk,Nd,te,Go,xk,ol,Tk,Ek,ks,vs,Lk,qk,$k,O,Fk,bs,zk,jk,Ms,Ck,Pk,ws,Dk,Ak,nl,Ik,Ok,sl,Nk,Sk,al,Bk,Rk,rl,Wk,Uk,il,Hk,Vk,Qk,fe,Ko,Xk,oe,Gk,ll,Kk,Yk,Yo,dl,Jk,Zk,ev,cl,tv,ov,pl,nv,sv,hl,av,rv,iv,Jo,lv,ul,dv,cv,pv,ml,hv,Sd,Ye,Nt,fl,Zo,uv,gl,mv,Bd,Ee,en,fv,tn,gv,on,_v,kv,vv,ge,nn,bv,Je,Mv,ys,wv,yv,_l,xv,Tv,Ev,St,Lv,Bt,Rd,Ze,Rt,kl,sn,qv,vl,$v,Wd,he,an,Fv,bl,zv,jv,rn,Cv,ln,Pv,Dv,Av,_e,dn,Iv,et,Ov,xs,Nv,Sv,Ml,Bv,Rv,Wv,Wt,Uv,Ut,Ud,tt,Ht,wl,cn,Hv,yl,Vv,Hd,Le,pn,Qv,ot,Xv,xl,Gv,Kv,hn,Yv,Jv,Zv,ke,un,eb,nt,tb,Ts,ob,nb,Tl,sb,ab,rb,Vt,ib,Qt,Vd,st,Xt,El,mn,lb,Ll,db,Qd,ue,fn,cb,at,pb,ql,hb,ub,$l,mb,fb,gb,gn,_b,_n,kb,vb,bb,ve,kn,Mb,rt,wb,Es,yb,xb,Fl,Tb,Eb,Lb,Gt,qb,Kt,Xd;return p=new xe({}),ro=new xe({}),go=new xe({}),_o=new Te({props:{code:`from transformers import MarkupLMFeatureExtractor, MarkupLMTokenizerFast, MarkupLMProcessor

feature_extractor = MarkupLMFeatureExtractor()
tokenizer = MarkupLMTokenizerFast.from_pretrained("microsoft/markuplm-base")
processor = MarkupLMProcessor(feature_extractor, tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarkupLMFeatureExtractor, MarkupLMTokenizerFast, MarkupLMProcessor

feature_extractor = MarkupLMFeatureExtractor()
tokenizer = MarkupLMTokenizerFast.from_pretrained(<span class="hljs-string">&quot;microsoft/markuplm-base&quot;</span>)
processor = MarkupLMProcessor(feature_extractor, tokenizer)`}}),vo=new Te({props:{code:`from transformers import MarkupLMProcessor

processor = MarkupLMProcessor.from_pretrained("microsoft/markuplm-base")

html_string = """
 <!DOCTYPE html>
 <html>
 <head>
 <title>Hello world</title>
 </head>
 <body>

 <h1 class="relative group">
	<a 
		id="welcome" 
		class="header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full" 
		href="#welcome"
	>
		<span><IconCopyLink/></span>
	</a>
	<span>
		Welcome
	</span>
</h1>

 <p>Here is my website.</p>

 </body>
 </html>"""

# note that you can also add provide all tokenizer parameters here such as padding, truncation
encoding = processor(html_string, return_tensors="pt")
print(encoding.keys())`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarkupLMProcessor

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = MarkupLMProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/markuplm-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>html_string = <span class="hljs-string">&quot;&quot;&quot;
<span class="hljs-meta">... </span> &lt;!DOCTYPE html&gt;
<span class="hljs-meta">... </span> &lt;html&gt;
<span class="hljs-meta">... </span> &lt;head&gt;
<span class="hljs-meta">... </span> &lt;title&gt;Hello world&lt;/title&gt;
<span class="hljs-meta">... </span> &lt;/head&gt;
<span class="hljs-meta">... </span> &lt;body&gt;

<span class="hljs-meta">... </span> &lt;h1&gt;Welcome&lt;/h1&gt;
<span class="hljs-meta">... </span> &lt;p&gt;Here is my website.&lt;/p&gt;

<span class="hljs-meta">... </span> &lt;/body&gt;
<span class="hljs-meta">... </span> &lt;/html&gt;&quot;&quot;&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># note that you can also add provide all tokenizer parameters here such as padding, truncation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(html_string, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
dict_keys([<span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;token_type_ids&#x27;</span>, <span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;xpath_tags_seq&#x27;</span>, <span class="hljs-string">&#x27;xpath_subs_seq&#x27;</span>])`}}),bo=new Te({props:{code:`from transformers import MarkupLMProcessor

processor = MarkupLMProcessor.from_pretrained("microsoft/markuplm-base")
processor.parse_html = False

nodes = ["hello", "world", "how", "are"]
xpaths = ["/html/body/div/li[1]/div/span", "/html/body/div/li[1]/div/span", "html/body", "html/body/div"]
encoding = processor(nodes=nodes, xpaths=xpaths, return_tensors="pt")
print(encoding.keys())`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarkupLMProcessor

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = MarkupLMProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/markuplm-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor.parse_html = <span class="hljs-literal">False</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>nodes = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>, <span class="hljs-string">&quot;how&quot;</span>, <span class="hljs-string">&quot;are&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>xpaths = [<span class="hljs-string">&quot;/html/body/div/li[1]/div/span&quot;</span>, <span class="hljs-string">&quot;/html/body/div/li[1]/div/span&quot;</span>, <span class="hljs-string">&quot;html/body&quot;</span>, <span class="hljs-string">&quot;html/body/div&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(nodes=nodes, xpaths=xpaths, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
dict_keys([<span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;token_type_ids&#x27;</span>, <span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;xpath_tags_seq&#x27;</span>, <span class="hljs-string">&#x27;xpath_subs_seq&#x27;</span>])`}}),wo=new Te({props:{code:`from transformers import MarkupLMProcessor

processor = MarkupLMProcessor.from_pretrained("microsoft/markuplm-base")
processor.parse_html = False

nodes = ["hello", "world", "how", "are"]
xpaths = ["/html/body/div/li[1]/div/span", "/html/body/div/li[1]/div/span", "html/body", "html/body/div"]
node_labels = [1, 2, 2, 1]
encoding = processor(nodes=nodes, xpaths=xpaths, node_labels=node_labels, return_tensors="pt")
print(encoding.keys())`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarkupLMProcessor

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = MarkupLMProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/markuplm-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor.parse_html = <span class="hljs-literal">False</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>nodes = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>, <span class="hljs-string">&quot;how&quot;</span>, <span class="hljs-string">&quot;are&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>xpaths = [<span class="hljs-string">&quot;/html/body/div/li[1]/div/span&quot;</span>, <span class="hljs-string">&quot;/html/body/div/li[1]/div/span&quot;</span>, <span class="hljs-string">&quot;html/body&quot;</span>, <span class="hljs-string">&quot;html/body/div&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>node_labels = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(nodes=nodes, xpaths=xpaths, node_labels=node_labels, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
dict_keys([<span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;token_type_ids&#x27;</span>, <span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;xpath_tags_seq&#x27;</span>, <span class="hljs-string">&#x27;xpath_subs_seq&#x27;</span>, <span class="hljs-string">&#x27;labels&#x27;</span>])`}}),yo=new Te({props:{code:`from transformers import MarkupLMProcessor

processor = MarkupLMProcessor.from_pretrained("microsoft/markuplm-base")

html_string = """
 <!DOCTYPE html>
 <html>
 <head>
 <title>Hello world</title>
 </head>
 <body>

 <h1 class="relative group">
	<a 
		id="welcome" 
		class="header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full" 
		href="#welcome"
	>
		<span><IconCopyLink/></span>
	</a>
	<span>
		Welcome
	</span>
</h1>

 <p>My name is Niels.</p>

 </body>
 </html>"""

question = "What's his name?"
encoding = processor(html_string, questions=question, return_tensors="pt")
print(encoding.keys())`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarkupLMProcessor

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = MarkupLMProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/markuplm-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>html_string = <span class="hljs-string">&quot;&quot;&quot;
<span class="hljs-meta">... </span> &lt;!DOCTYPE html&gt;
<span class="hljs-meta">... </span> &lt;html&gt;
<span class="hljs-meta">... </span> &lt;head&gt;
<span class="hljs-meta">... </span> &lt;title&gt;Hello world&lt;/title&gt;
<span class="hljs-meta">... </span> &lt;/head&gt;
<span class="hljs-meta">... </span> &lt;body&gt;

<span class="hljs-meta">... </span> &lt;h1&gt;Welcome&lt;/h1&gt;
<span class="hljs-meta">... </span> &lt;p&gt;My name is Niels.&lt;/p&gt;

<span class="hljs-meta">... </span> &lt;/body&gt;
<span class="hljs-meta">... </span> &lt;/html&gt;&quot;&quot;&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;What&#x27;s his name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(html_string, questions=question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
dict_keys([<span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;token_type_ids&#x27;</span>, <span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;xpath_tags_seq&#x27;</span>, <span class="hljs-string">&#x27;xpath_subs_seq&#x27;</span>])`}}),xo=new Te({props:{code:`from transformers import MarkupLMProcessor

processor = MarkupLMProcessor.from_pretrained("microsoft/markuplm-base")
processor.parse_html = False

nodes = ["hello", "world", "how", "are"]
xpaths = ["/html/body/div/li[1]/div/span", "/html/body/div/li[1]/div/span", "html/body", "html/body/div"]
question = "What's his name?"
encoding = processor(nodes=nodes, xpaths=xpaths, questions=question, return_tensors="pt")
print(encoding.keys())`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarkupLMProcessor

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = MarkupLMProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/markuplm-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor.parse_html = <span class="hljs-literal">False</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>nodes = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>, <span class="hljs-string">&quot;how&quot;</span>, <span class="hljs-string">&quot;are&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>xpaths = [<span class="hljs-string">&quot;/html/body/div/li[1]/div/span&quot;</span>, <span class="hljs-string">&quot;/html/body/div/li[1]/div/span&quot;</span>, <span class="hljs-string">&quot;html/body&quot;</span>, <span class="hljs-string">&quot;html/body/div&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;What&#x27;s his name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(nodes=nodes, xpaths=xpaths, questions=question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
dict_keys([<span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;token_type_ids&#x27;</span>, <span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;xpath_tags_seq&#x27;</span>, <span class="hljs-string">&#x27;xpath_subs_seq&#x27;</span>])`}}),To=new xe({}),Eo=new z({props:{name:"class transformers.MarkupLMConfig",anchor:"transformers.MarkupLMConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"gradient_checkpointing",val:" = False"},{name:"max_xpath_tag_unit_embeddings",val:" = 256"},{name:"max_xpath_subs_unit_embeddings",val:" = 1024"},{name:"tag_pad_id",val:" = 216"},{name:"subs_pad_id",val:" = 1001"},{name:"xpath_unit_hidden_size",val:" = 32"},{name:"max_depth",val:" = 50"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MarkupLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the MarkupLM model. Defines the different tokens that can be represented by the
<em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMModel">MarkupLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.MarkupLMConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.MarkupLMConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.MarkupLMConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.MarkupLMConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.MarkupLMConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.MarkupLMConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.MarkupLMConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.MarkupLMConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MarkupLMConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed into <a href="/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMModel">MarkupLMModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.MarkupLMConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.MarkupLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.MarkupLMConfig.gradient_checkpointing",description:`<strong>gradient_checkpointing</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If True, use gradient checkpointing to save memory at the expense of slower backward pass.`,name:"gradient_checkpointing"},{anchor:"transformers.MarkupLMConfig.max_tree_id_unit_embeddings",description:`<strong>max_tree_id_unit_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the tree id unit embedding might ever use. Typically set this to something large
just in case (e.g., 1024).`,name:"max_tree_id_unit_embeddings"},{anchor:"transformers.MarkupLMConfig.max_xpath_tag_unit_embeddings",description:`<strong>max_xpath_tag_unit_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The maximum value that the xpath tag unit embedding might ever use. Typically set this to something large
just in case (e.g., 256).`,name:"max_xpath_tag_unit_embeddings"},{anchor:"transformers.MarkupLMConfig.max_xpath_subs_unit_embeddings",description:`<strong>max_xpath_subs_unit_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the xpath subscript unit embedding might ever use. Typically set this to something
large just in case (e.g., 1024).`,name:"max_xpath_subs_unit_embeddings"},{anchor:"transformers.MarkupLMConfig.tag_pad_id",description:`<strong>tag_pad_id</strong> (<code>int</code>, <em>optional</em>, defaults to 216) &#x2014;
The id of the padding token in the xpath tags.`,name:"tag_pad_id"},{anchor:"transformers.MarkupLMConfig.subs_pad_id",description:`<strong>subs_pad_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1001) &#x2014;
The id of the padding token in the xpath subscripts.`,name:"subs_pad_id"},{anchor:"transformers.MarkupLMConfig.xpath_tag_unit_hidden_size",description:`<strong>xpath_tag_unit_hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The hidden size of each tree id unit. One complete tree index will have
(50*xpath_tag_unit_hidden_size)-dim.`,name:"xpath_tag_unit_hidden_size"},{anchor:"transformers.MarkupLMConfig.max_depth",description:`<strong>max_depth</strong> (<code>int</code>, <em>optional</em>, defaults to 50) &#x2014;
The maximum depth in xpath.`,name:"max_depth"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/configuration_markuplm.py#L29"}}),ft=new Vs({props:{anchor:"transformers.MarkupLMConfig.example",$$slots:{default:[Hy]},$$scope:{ctx:P}}}),qo=new xe({}),$o=new z({props:{name:"class transformers.MarkupLMFeatureExtractor",anchor:"transformers.MarkupLMFeatureExtractor",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/feature_extraction_markuplm.py#L33"}}),zo=new z({props:{name:"__call__",anchor:"transformers.MarkupLMFeatureExtractor.__call__",parameters:[{name:"html_strings",val:""}],parametersDescription:[{anchor:"transformers.MarkupLMFeatureExtractor.__call__.html_strings",description:`<strong>html_strings</strong> (<code>str</code>, <code>List[str]</code>) &#x2014;
The HTML string or batch of HTML strings from which to extract nodes and corresponding xpaths.`,name:"html_strings"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/feature_extraction_markuplm.py#L99",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>nodes</strong> \u2014 Nodes.</li>
<li><strong>xpaths</strong> \u2014 Corresponding xpaths.</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),_t=new Vs({props:{anchor:"transformers.MarkupLMFeatureExtractor.__call__.example",$$slots:{default:[Vy]},$$scope:{ctx:P}}}),jo=new xe({}),Co=new z({props:{name:"class transformers.MarkupLMTokenizer",anchor:"transformers.MarkupLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"tags_dict",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"max_depth",val:" = 50"},{name:"max_width",val:" = 1000"},{name:"pad_width",val:" = 1001"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MarkupLMTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MarkupLMTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.MarkupLMTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.MarkupLMTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MarkupLMTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MarkupLMTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MarkupLMTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MarkupLMTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MarkupLMTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MarkupLMTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MarkupLMTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/tokenization_markuplm.py#L145"}}),Po=new z({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MarkupLMTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MarkupLMTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MarkupLMTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/tokenization_markuplm.py#L423",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ao=new z({props:{name:"get_special_tokens_mask",anchor:"transformers.MarkupLMTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.MarkupLMTokenizer.get_special_tokens_mask.Retrieve",description:"<strong>Retrieve</strong> sequence ids from a token list that has no special tokens added. This method is called when adding &#x2014;",name:"Retrieve"},{anchor:"transformers.MarkupLMTokenizer.get_special_tokens_mask.special",description:`<strong>special</strong> tokens using the tokenizer <code>prepare_for_model</code> method. &#x2014;
token_ids_0 (<code>List[int]</code>):
List of IDs.
token_ids_1 (<code>List[int]</code>, <em>optional</em>):
Optional second list of IDs for sequence pairs.
already_has_special_tokens (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>):
Whether or not the token list is already formatted with special tokens for the model.`,name:"special"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/tokenization_markuplm.py#L461",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Io=new z({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MarkupLMTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MarkupLMTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MarkupLMTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/tokenization_markuplm.py#L486",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Oo=new z({props:{name:"save_vocabulary",anchor:"transformers.MarkupLMTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/tokenization_markuplm.py#L386"}}),No=new xe({}),So=new z({props:{name:"class transformers.MarkupLMTokenizerFast",anchor:"transformers.MarkupLMTokenizerFast",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"tags_dict",val:""},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"max_depth",val:" = 50"},{name:"max_width",val:" = 1000"},{name:"pad_width",val:" = 1001"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"trim_offsets",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MarkupLMTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MarkupLMTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.MarkupLMTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.MarkupLMTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MarkupLMTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MarkupLMTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MarkupLMTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MarkupLMTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MarkupLMTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MarkupLMTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MarkupLMTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/tokenization_markuplm_fast.py#L99"}}),Bo=new z({props:{name:"batch_encode_plus",anchor:"transformers.MarkupLMTokenizerFast.batch_encode_plus",parameters:[{name:"batch_text_or_text_pairs",val:": typing.Union[typing.List[str], typing.List[typing.Tuple[str, str]], typing.List[typing.List[str]]]"},{name:"is_pair",val:": bool = None"},{name:"xpaths",val:": typing.Optional[typing.List[typing.List[typing.List[int]]]] = None"},{name:"node_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/tokenization_markuplm_fast.py#L428"}}),Ro=new z({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MarkupLMTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MarkupLMTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MarkupLMTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/tokenization_markuplm_fast.py#L878",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Uo=new z({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MarkupLMTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MarkupLMTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MarkupLMTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/tokenization_markuplm_fast.py#L900",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ho=new z({props:{name:"encode_plus",anchor:"transformers.MarkupLMTokenizerFast.encode_plus",parameters:[{name:"text",val:": typing.Union[str, typing.List[str]]"},{name:"text_pair",val:": typing.Optional[typing.List[str]] = None"},{name:"xpaths",val:": typing.Optional[typing.List[typing.List[int]]] = None"},{name:"node_labels",val:": typing.Optional[typing.List[int]] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MarkupLMTokenizerFast.encode_plus.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The first sequence to be encoded. This can be a string, a list of strings or a list of list of strings.`,name:"text"},{anchor:"transformers.MarkupLMTokenizerFast.encode_plus.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code> or <code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second sequence to be encoded. This can be a list of strings (words of a single example) or a
list of list of strings (words of a batch of examples).`,name:"text_pair"},{anchor:"transformers.MarkupLMTokenizerFast.encode_plus.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.MarkupLMTokenizerFast.encode_plus.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.MarkupLMTokenizerFast.encode_plus.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.MarkupLMTokenizerFast.encode_plus.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.MarkupLMTokenizerFast.encode_plus.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.MarkupLMTokenizerFast.encode_plus.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.MarkupLMTokenizerFast.encode_plus.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.MarkupLMTokenizerFast.encode_plus.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.MarkupLMTokenizerFast.encode_plus.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.MarkupLMTokenizerFast.encode_plus.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.MarkupLMTokenizerFast.encode_plus.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.MarkupLMTokenizerFast.encode_plus.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
<code>None</code>, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.MarkupLMTokenizerFast.encode_plus.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.MarkupLMTokenizerFast.encode_plus.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.MarkupLMTokenizerFast.encode_plus.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/tokenization_markuplm_fast.py#L495"}}),Qo=new z({props:{name:"get_xpath_seq",anchor:"transformers.MarkupLMTokenizerFast.get_xpath_seq",parameters:[{name:"xpath",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/tokenization_markuplm_fast.py#L259"}}),Xo=new xe({}),Go=new z({props:{name:"class transformers.MarkupLMProcessor",anchor:"transformers.MarkupLMProcessor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MarkupLMProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>MarkupLMFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMFeatureExtractor">MarkupLMFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.MarkupLMProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>MarkupLMTokenizer</code> or <code>MarkupLMTokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMTokenizer">MarkupLMTokenizer</a> or <a href="/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMTokenizerFast">MarkupLMTokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"},{anchor:"transformers.MarkupLMProcessor.parse_html",description:`<strong>parse_html</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use <code>MarkupLMFeatureExtractor</code> to parse HTML strings into nodes and corresponding xpaths.`,name:"parse_html"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/processing_markuplm.py#L25"}}),Ko=new z({props:{name:"__call__",anchor:"transformers.MarkupLMProcessor.__call__",parameters:[{name:"html_strings",val:" = None"},{name:"nodes",val:" = None"},{name:"xpaths",val:" = None"},{name:"node_labels",val:" = None"},{name:"questions",val:" = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/processing_markuplm.py#L48"}}),Zo=new xe({}),en=new z({props:{name:"class transformers.MarkupLMModel",anchor:"transformers.MarkupLMModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MarkupLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMConfig">MarkupLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/modeling_markuplm.py#L800"}}),nn=new z({props:{name:"forward",anchor:"transformers.MarkupLMModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"xpath_tags_seq",val:" = None"},{name:"xpath_subs_seq",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MarkupLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMTokenizer">MarkupLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarkupLMModel.forward.xpath_tags_seq",description:`<strong>xpath_tags_seq</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, config.max_depth)</code>, <em>optional</em>) &#x2014;
Tag IDs for each token in the input sequence, padded up to config.max_depth.`,name:"xpath_tags_seq"},{anchor:"transformers.MarkupLMModel.forward.xpath_subs_seq",description:`<strong>xpath_subs_seq</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, config.max_depth)</code>, <em>optional</em>) &#x2014;
Subscript IDs for each token in the input sequence, padded up to config.max_depth.`,name:"xpath_subs_seq"},{anchor:"transformers.MarkupLMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarkupLMModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MarkupLMModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MarkupLMModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.MarkupLMModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MarkupLMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarkupLMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarkupLMModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/modeling_markuplm.py#L828",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMConfig"
>MarkupLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
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
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),St=new vc({props:{$$slots:{default:[Qy]},$$scope:{ctx:P}}}),Bt=new Vs({props:{anchor:"transformers.MarkupLMModel.forward.example",$$slots:{default:[Xy]},$$scope:{ctx:P}}}),sn=new xe({}),an=new z({props:{name:"class transformers.MarkupLMForSequenceClassification",anchor:"transformers.MarkupLMForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MarkupLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMConfig">MarkupLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/modeling_markuplm.py#L1188"}}),dn=new z({props:{name:"forward",anchor:"transformers.MarkupLMForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"xpath_tags_seq",val:" = None"},{name:"xpath_subs_seq",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MarkupLMForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMTokenizer">MarkupLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarkupLMForSequenceClassification.forward.xpath_tags_seq",description:`<strong>xpath_tags_seq</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, config.max_depth)</code>, <em>optional</em>) &#x2014;
Tag IDs for each token in the input sequence, padded up to config.max_depth.`,name:"xpath_tags_seq"},{anchor:"transformers.MarkupLMForSequenceClassification.forward.xpath_subs_seq",description:`<strong>xpath_subs_seq</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, config.max_depth)</code>, <em>optional</em>) &#x2014;
Subscript IDs for each token in the input sequence, padded up to config.max_depth.`,name:"xpath_subs_seq"},{anchor:"transformers.MarkupLMForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarkupLMForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MarkupLMForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MarkupLMForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.MarkupLMForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MarkupLMForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarkupLMForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarkupLMForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MarkupLMForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/modeling_markuplm.py#L1205",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMConfig"
>MarkupLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wt=new vc({props:{$$slots:{default:[Gy]},$$scope:{ctx:P}}}),Ut=new Vs({props:{anchor:"transformers.MarkupLMForSequenceClassification.forward.example",$$slots:{default:[Ky]},$$scope:{ctx:P}}}),cn=new xe({}),pn=new z({props:{name:"class transformers.MarkupLMForTokenClassification",anchor:"transformers.MarkupLMForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MarkupLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMConfig">MarkupLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/modeling_markuplm.py#L1082"}}),un=new z({props:{name:"forward",anchor:"transformers.MarkupLMForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"xpath_tags_seq",val:" = None"},{name:"xpath_subs_seq",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MarkupLMForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMTokenizer">MarkupLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarkupLMForTokenClassification.forward.xpath_tags_seq",description:`<strong>xpath_tags_seq</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, config.max_depth)</code>, <em>optional</em>) &#x2014;
Tag IDs for each token in the input sequence, padded up to config.max_depth.`,name:"xpath_tags_seq"},{anchor:"transformers.MarkupLMForTokenClassification.forward.xpath_subs_seq",description:`<strong>xpath_subs_seq</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, config.max_depth)</code>, <em>optional</em>) &#x2014;
Subscript IDs for each token in the input sequence, padded up to config.max_depth.`,name:"xpath_subs_seq"},{anchor:"transformers.MarkupLMForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarkupLMForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MarkupLMForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MarkupLMForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.MarkupLMForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MarkupLMForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarkupLMForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarkupLMForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MarkupLMForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/modeling_markuplm.py#L1098",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMConfig"
>MarkupLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vt=new vc({props:{$$slots:{default:[Yy]},$$scope:{ctx:P}}}),Qt=new Vs({props:{anchor:"transformers.MarkupLMForTokenClassification.forward.example",$$slots:{default:[Jy]},$$scope:{ctx:P}}}),mn=new xe({}),fn=new z({props:{name:"class transformers.MarkupLMForQuestionAnswering",anchor:"transformers.MarkupLMForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MarkupLMForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMConfig">MarkupLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/modeling_markuplm.py#L960"}}),kn=new z({props:{name:"forward",anchor:"transformers.MarkupLMForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"xpath_tags_seq",val:" = None"},{name:"xpath_subs_seq",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MarkupLMForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMTokenizer">MarkupLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarkupLMForQuestionAnswering.forward.xpath_tags_seq",description:`<strong>xpath_tags_seq</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, config.max_depth)</code>, <em>optional</em>) &#x2014;
Tag IDs for each token in the input sequence, padded up to config.max_depth.`,name:"xpath_tags_seq"},{anchor:"transformers.MarkupLMForQuestionAnswering.forward.xpath_subs_seq",description:`<strong>xpath_subs_seq</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, config.max_depth)</code>, <em>optional</em>) &#x2014;
Subscript IDs for each token in the input sequence, padded up to config.max_depth.`,name:"xpath_subs_seq"},{anchor:"transformers.MarkupLMForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarkupLMForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MarkupLMForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MarkupLMForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.MarkupLMForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MarkupLMForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarkupLMForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarkupLMForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MarkupLMForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MarkupLMForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/markuplm/modeling_markuplm.py#L974",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMConfig"
>MarkupLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gt=new vc({props:{$$slots:{default:[Zy]},$$scope:{ctx:P}}}),Kt=new Vs({props:{anchor:"transformers.MarkupLMForQuestionAnswering.forward.example",$$slots:{default:[ex]},$$scope:{ctx:P}}}),{c(){m=a("meta"),T=l(),_=a("h1"),g=a("a"),x=a("span"),k(p.$$.fragment),f=l(),G=a("span"),bc=o("MarkupLM"),Jl=l(),Se=a("h2"),ct=a("a"),Xs=a("span"),k(ro.$$.fragment),Mc=l(),Gs=a("span"),wc=o("Overview"),Zl=l(),qe=a("p"),yc=o("The MarkupLM model was proposed in "),io=a("a"),xc=o(`MarkupLM: Pre-training of Text and Markup Language for Visually-rich Document
Understanding`),Tc=o(` by Junlong Li, Yiheng Xu, Lei Cui, Furu Wei. MarkupLM is BERT, but
applied to HTML pages instead of raw text documents. The model incorporates additional embedding layers to improve
performance, similar to `),yn=a("a"),Ec=o("LayoutLM"),Lc=o("."),ed=l(),xn=a("p"),qc=o(`The model can be used for tasks like question answering on web pages or information extraction from web pages. It obtains
state-of-the-art results on 2 important benchmarks:`),td=l(),pt=a("ul"),Tn=a("li"),lo=a("a"),$c=o("WebSRC"),Fc=o(", a dataset for Web-Based Structual Reading Comprehension (a bit like SQuAD but for web pages)"),zc=l(),En=a("li"),co=a("a"),jc=o("SWDE"),Cc=o(`, a dataset
for information extraction from web pages (basically named-entity recogntion on web pages)`),od=l(),Ln=a("p"),Pc=o("The abstract from the paper is the following:"),nd=l(),qn=a("p"),Ks=a("em"),Dc=o(`Multimodal pre-training with text, layout, and image has made significant progress for Visually-rich Document
Understanding (VrDU), especially the fixed-layout documents such as scanned document images. While, there are still a
large number of digital documents where the layout information is not fixed and needs to be interactively and
dynamically rendered for visualization, making existing layout-based pre-training approaches not easy to apply. In this
paper, we propose MarkupLM for document understanding tasks with markup languages as the backbone such as
HTML/XML-based documents, where text and markup information is jointly pre-trained. Experiment results show that the
pre-trained MarkupLM significantly outperforms the existing strong baseline models on several document understanding
tasks. The pre-trained model and code will be publicly available.`),sd=l(),$n=a("p"),Ac=o("Tips:"),ad=l(),$e=a("ul"),le=a("li"),Ic=o("In addition to "),Ys=a("code"),Oc=o("input_ids"),Nc=o(", "),Fn=a("a"),Sc=o("forward()"),Bc=o(" expects 2 additional inputs, namely "),Js=a("code"),Rc=o("xpath_tags_seq"),Wc=o(" and "),Zs=a("code"),Uc=o("xpath_subs_seq"),Hc=o(`.
These are the XPATH tags and subscripts respectively for each token in the input sequence.`),Vc=l(),Be=a("li"),Qc=o("One can use "),zn=a("a"),Xc=o("MarkupLMProcessor"),Gc=o(" to prepare all data for the model. Refer to the "),jn=a("a"),Kc=o("usage guide"),Yc=o(" for more info."),Jc=l(),po=a("li"),Zc=o("Demo notebooks can be found "),ho=a("a"),ep=o("here"),tp=o("."),rd=l(),ht=a("img"),id=l(),uo=a("small"),op=o("MarkupLM architecture. Taken from the "),Cn=a("a"),np=o("original paper."),ld=l(),Fe=a("p"),sp=o("This model was contributed by "),mo=a("a"),ap=o("nielsr"),rp=o(". The original code can be found "),fo=a("a"),ip=o("here"),lp=o("."),dd=l(),Re=a("h2"),ut=a("a"),ea=a("span"),k(go.$$.fragment),dp=l(),ta=a("span"),cp=o("Usage: MarkupLMProcessor"),cd=l(),J=a("p"),pp=o("The easiest way to prepare data for the model is to use "),Pn=a("a"),hp=o("MarkupLMProcessor"),up=o(`, which internally combines a feature extractor
(`),Dn=a("a"),mp=o("MarkupLMFeatureExtractor"),fp=o(") and a tokenizer ("),An=a("a"),gp=o("MarkupLMTokenizer"),_p=o(" or "),In=a("a"),kp=o("MarkupLMTokenizerFast"),vp=o(`). The feature extractor is
used to extract all nodes and xpaths from the HTML strings, which are then provided to the tokenizer, which turns them into the
token-level inputs of the model (`),oa=a("code"),bp=o("input_ids"),Mp=o(` etc.). Note that you can still use the feature extractor and tokenizer separately,
if you only want to handle one of the two tasks.`),pd=l(),k(_o.$$.fragment),hd=l(),F=a("p"),wp=o("In short, one can provide HTML strings (and possibly additional data) to "),On=a("a"),yp=o("MarkupLMProcessor"),xp=o(`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),Nn=a("a"),Tp=o("MarkupLMFeatureExtractor"),Ep=o(` to get a list of nodes and corresponding xpaths. The nodes and
xpaths are then provided to `),Sn=a("a"),Lp=o("MarkupLMTokenizer"),qp=o(" or "),Bn=a("a"),$p=o("MarkupLMTokenizerFast"),Fp=o(`, which converts them
to token-level `),na=a("code"),zp=o("input_ids"),jp=o(", "),sa=a("code"),Cp=o("attention_mask"),Pp=o(", "),aa=a("code"),Dp=o("token_type_ids"),Ap=o(", "),ra=a("code"),Ip=o("xpath_subs_seq"),Op=o(", "),ia=a("code"),Np=o("xpath_tags_seq"),Sp=o(`.
Optionally, one can provide node labels to the processor, which are turned into token-level `),la=a("code"),Bp=o("labels"),Rp=o("."),ud=l(),de=a("p"),Rn=a("a"),Wp=o("MarkupLMFeatureExtractor"),Up=o(" uses "),ko=a("a"),Hp=o("Beautiful Soup"),Vp=o(`, a Python library for
pulling data out of HTML and XML files, under the hood. Note that you can still use your own parsing solution of
choice, and provide the nodes and xpaths yourself to `),Wn=a("a"),Qp=o("MarkupLMTokenizer"),Xp=o(" or "),Un=a("a"),Gp=o("MarkupLMTokenizerFast"),Kp=o("."),md=l(),Hn=a("p"),Yp=o(`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),fd=l(),Vn=a("p"),da=a("strong"),Jp=o("Use case 1: web page classification (training, inference) + token classification (inference), parse_html = True"),gd=l(),Qn=a("p"),Zp=o("This is the simplest case, in which the processor will use the feature extractor to get all nodes and xpaths from the HTML."),_d=l(),k(vo.$$.fragment),kd=l(),Xn=a("p"),ca=a("strong"),eh=o("Use case 2: web page classification (training, inference) + token classification (inference), parse_html=False"),vd=l(),ze=a("p"),th=o(`In case one already has obtained all nodes and xpaths, one doesn\u2019t need the feature extractor. In that case, one should
provide the nodes and corresponding xpaths themselves to the processor, and make sure to set `),pa=a("code"),oh=o("parse_html"),nh=o(" to "),ha=a("code"),sh=o("False"),ah=o("."),bd=l(),k(bo.$$.fragment),Md=l(),Gn=a("p"),ua=a("strong"),rh=o("Use case 3: token classification (training), parse_html=False"),wd=l(),Z=a("p"),ih=o("For token classification tasks (such as "),Mo=a("a"),lh=o("SWDE"),dh=o(`), one can also provide the
corresponding node labels in order to train a model. The processor will then convert these into token-level `),ma=a("code"),ch=o("labels"),ph=o(`.
By default, it will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),fa=a("code"),hh=o("ignore_index"),uh=o(` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),ga=a("code"),mh=o("only_label_first_subword"),fh=o(" set to "),_a=a("code"),gh=o("False"),_h=o("."),yd=l(),k(wo.$$.fragment),xd=l(),Kn=a("p"),ka=a("strong"),kh=o("Use case 4: web page question answering (inference), parse_html=True"),Td=l(),Yn=a("p"),vh=o(`For question answering tasks on web pages, you can provide a question to the processor. By default, the
processor will use the feature extractor to get all nodes and xpaths, and create [CLS] question tokens [SEP] word tokens [SEP].`),Ed=l(),k(yo.$$.fragment),Ld=l(),Jn=a("p"),va=a("strong"),bh=o("Use case 5: web page question answering (inference), apply_ocr=False"),qd=l(),je=a("p"),Mh=o(`For question answering tasks (such as WebSRC), you can provide a question to the processor. If you have extracted
all nodes and xpaths yourself, you can provide them directly to the processor. Make sure to set `),ba=a("code"),wh=o("parse_html"),yh=o(" to "),Ma=a("code"),xh=o("False"),Th=o("."),$d=l(),k(xo.$$.fragment),Fd=l(),We=a("h2"),mt=a("a"),wa=a("span"),k(To.$$.fragment),Eh=l(),ya=a("span"),Lh=o("MarkupLMConfig"),zd=l(),ce=a("div"),k(Eo.$$.fragment),qh=l(),Ue=a("p"),$h=o("This is the configuration class to store the configuration of a "),Zn=a("a"),Fh=o("MarkupLMModel"),zh=o(`. It is used to instantiate a
MarkupLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the MarkupLM
`),Lo=a("a"),jh=o("microsoft/markuplm-base-uncased"),Ch=o(" architecture."),Ph=l(),He=a("p"),Dh=o("Configuration objects inherit from "),es=a("a"),Ah=o("BertConfig"),Ih=o(` and can be used to control the model outputs. Read the
documentation from `),ts=a("a"),Oh=o("BertConfig"),Nh=o(" for more information."),Sh=l(),k(ft.$$.fragment),jd=l(),Ve=a("h2"),gt=a("a"),xa=a("span"),k(qo.$$.fragment),Bh=l(),Ta=a("span"),Rh=o("MarkupLMFeatureExtractor"),Cd=l(),pe=a("div"),k($o.$$.fragment),Wh=l(),Ea=a("p"),Uh=o(`Constructs a MarkupLM feature extractor. This can be used to get a list of nodes and corresponding xpaths from HTML
strings.`),Hh=l(),Fo=a("p"),Vh=o("This feature extractor inherits from "),La=a("code"),Qh=o("PreTrainedFeatureExtractor()"),Xh=o(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),Gh=l(),Ce=a("div"),k(zo.$$.fragment),Kh=l(),qa=a("p"),Yh=o("Main method to prepare for the model one or several HTML strings."),Jh=l(),k(_t.$$.fragment),Pd=l(),Qe=a("h2"),kt=a("a"),$a=a("span"),k(jo.$$.fragment),Zh=l(),Fa=a("span"),eu=o("MarkupLMTokenizer"),Dd=l(),K=a("div"),k(Co.$$.fragment),tu=l(),S=a("p"),ou=o("Construct a MarkupLM tokenizer. Based on byte-level Byte-Pair-Encoding (BPE). "),os=a("a"),nu=o("MarkupLMTokenizer"),su=o(` can be used to
turn HTML strings into to token-level `),za=a("code"),au=o("input_ids"),ru=o(", "),ja=a("code"),iu=o("attention_mask"),lu=o(", "),Ca=a("code"),du=o("token_type_ids"),cu=o(", "),Pa=a("code"),pu=o("xpath_tags_seq"),hu=o(` and
`),Da=a("code"),uu=o("xpath_tags_seq"),mu=o(". This tokenizer inherits from "),ns=a("a"),fu=o("PreTrainedTokenizer"),gu=o(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),_u=l(),Pe=a("div"),k(Po.$$.fragment),ku=l(),Aa=a("p"),vu=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),bu=l(),Do=a("ul"),ss=a("li"),Mu=o("single sequence: "),Ia=a("code"),wu=o("<s> X </s>"),yu=l(),as=a("li"),xu=o("pair of sequences: "),Oa=a("code"),Tu=o("<s> A </s></s> B </s>"),Eu=l(),rs=a("div"),k(Ao.$$.fragment),Lu=l(),vt=a("div"),k(Io.$$.fragment),qu=l(),Na=a("p"),$u=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),Fu=l(),is=a("div"),k(Oo.$$.fragment),Ad=l(),Xe=a("h2"),bt=a("a"),Sa=a("span"),k(No.$$.fragment),zu=l(),Ba=a("span"),ju=o("MarkupLMTokenizerFast"),Id=l(),j=a("div"),k(So.$$.fragment),Cu=l(),Ra=a("p"),Pu=o("Construct a MarkupLM tokenizer. Based on byte-level Byte-Pair-Encoding (BPE)."),Du=l(),B=a("p"),ls=a("a"),Au=o("MarkupLMTokenizerFast"),Iu=o(" can be used to turn HTML strings into to token-level "),Wa=a("code"),Ou=o("input_ids"),Nu=o(", "),Ua=a("code"),Su=o("attention_mask"),Bu=o(`,
`),Ha=a("code"),Ru=o("token_type_ids"),Wu=o(", "),Va=a("code"),Uu=o("xpath_tags_seq"),Hu=o(" and "),Qa=a("code"),Vu=o("xpath_tags_seq"),Qu=o(". This tokenizer inherits from "),ds=a("a"),Xu=o("PreTrainedTokenizer"),Gu=o(` which
contains most of the main methods.`),Ku=l(),Xa=a("p"),Yu=o("Users should refer to this superclass for more information regarding those methods."),Ju=l(),R=a("div"),k(Bo.$$.fragment),Zu=l(),A=a("p"),em=o("add_special_tokens ("),Ga=a("code"),tm=o("bool"),om=o(", "),Ka=a("em"),nm=o("optional"),sm=o(", defaults to "),Ya=a("code"),am=o("True"),rm=o(`):
Whether or not to encode the sequences with the special tokens relative to their model.
padding (`),Ja=a("code"),im=o("bool"),lm=o(", "),Za=a("code"),dm=o("str"),cm=o(" or "),cs=a("a"),pm=o("PaddingStrategy"),hm=o(", "),er=a("em"),um=o("optional"),mm=o(", defaults to "),tr=a("code"),fm=o("False"),gm=o(`):
Activates and controls padding. Accepts the following values:`),_m=l(),Y=a("ul"),or=a("li"),Mt=a("p"),nr=a("code"),km=o("True"),vm=o(" or "),sr=a("code"),bm=o("'longest'"),Mm=o(`: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).`),wm=l(),ar=a("li"),wt=a("p"),rr=a("code"),ym=o("'max_length'"),xm=o(": Pad to a maximum length specified with the argument "),ir=a("code"),Tm=o("max_length"),Em=o(` or to the maximum
acceptable input length for the model if that argument is not provided.`),Lm=l(),lr=a("li"),W=a("p"),dr=a("code"),qm=o("False"),$m=o(" or "),cr=a("code"),Fm=o("'do_not_pad'"),zm=o(` (default): No padding (i.e., can output a batch with sequences of different
lengths).
truncation (`),pr=a("code"),jm=o("bool"),Cm=o(", "),hr=a("code"),Pm=o("str"),Dm=o(" or "),ps=a("a"),Am=o("TruncationStrategy"),Im=o(", "),ur=a("em"),Om=o("optional"),Nm=o(", defaults to "),mr=a("code"),Sm=o("False"),Bm=o(`):
Activates and controls truncation. Accepts the following values:`),Rm=l(),fr=a("li"),De=a("p"),gr=a("code"),Wm=o("True"),Um=o(" or "),_r=a("code"),Hm=o("'longest_first'"),Vm=o(": Truncate to a maximum length specified with the argument "),kr=a("code"),Qm=o("max_length"),Xm=o(` or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.`),Gm=l(),vr=a("li"),yt=a("p"),br=a("code"),Km=o("'only_first'"),Ym=o(": Truncate to a maximum length specified with the argument "),Mr=a("code"),Jm=o("max_length"),Zm=o(` or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.`),ef=l(),wr=a("li"),xt=a("p"),yr=a("code"),tf=o("'only_second'"),of=o(": Truncate to a maximum length specified with the argument "),xr=a("code"),nf=o("max_length"),sf=o(` or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.`),af=l(),Tr=a("li"),me=a("p"),Er=a("code"),rf=o("False"),lf=o(" or "),Lr=a("code"),df=o("'do_not_truncate'"),cf=o(` (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).
max_length (`),qr=a("code"),pf=o("int"),hf=o(", "),$r=a("em"),uf=o("optional"),mf=o(`):
Controls the maximum length to use by one of the truncation/padding parameters.`),ff=l(),E=a("p"),gf=o("If left unset or set to "),Fr=a("code"),_f=o("None"),kf=o(`, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.
stride (`),zr=a("code"),vf=o("int"),bf=o(", "),jr=a("em"),Mf=o("optional"),wf=o(`, defaults to 0):
If set to a number along with `),Cr=a("code"),yf=o("max_length"),xf=o(`, the overflowing tokens returned when
`),Pr=a("code"),Tf=o("return_overflowing_tokens=True"),Ef=o(` will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.
is_split_into_words (`),Dr=a("code"),Lf=o("bool"),qf=o(", "),Ar=a("em"),$f=o("optional"),Ff=o(", defaults to "),Ir=a("code"),zf=o("False"),jf=o(`):
Whether or not the input is already pre-tokenized (e.g., split into words). If set to `),Or=a("code"),Cf=o("True"),Pf=o(`, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.
pad_to_multiple_of (`),Nr=a("code"),Df=o("int"),Af=o(", "),Sr=a("em"),If=o("optional"),Of=o(`):
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability >= 7.5 (Volta).
return_tensors (`),Br=a("code"),Nf=o("str"),Sf=o(" or "),hs=a("a"),Bf=o("TensorType"),Rf=o(", "),Rr=a("em"),Wf=o("optional"),Uf=o(`):
If set, will return tensors instead of list of python integers. Acceptable values are:`),Hf=l(),Ge=a("ul"),Tt=a("li"),Wr=a("code"),Vf=o("'tf'"),Qf=o(": Return TensorFlow "),Ur=a("code"),Xf=o("tf.constant"),Gf=o(" objects."),Kf=l(),Et=a("li"),Hr=a("code"),Yf=o("'pt'"),Jf=o(": Return PyTorch "),Vr=a("code"),Zf=o("torch.Tensor"),eg=o(" objects."),tg=l(),Lt=a("li"),Qr=a("code"),og=o("'np'"),ng=o(": Return Numpy "),Xr=a("code"),sg=o("np.ndarray"),ag=o(" objects."),rg=l(),I=a("p"),ig=o("add_special_tokens ("),Gr=a("code"),lg=o("bool"),dg=o(", "),Kr=a("em"),cg=o("optional"),pg=o(", defaults to "),Yr=a("code"),hg=o("True"),ug=o(`):
Whether or not to encode the sequences with the special tokens relative to their model.
padding (`),Jr=a("code"),mg=o("bool"),fg=o(", "),Zr=a("code"),gg=o("str"),_g=o(" or "),us=a("a"),kg=o("PaddingStrategy"),vg=o(", "),ei=a("em"),bg=o("optional"),Mg=o(", defaults to "),ti=a("code"),wg=o("False"),yg=o(`):
Activates and controls padding. Accepts the following values:`),xg=l(),C=a("ul"),oi=a("li"),qt=a("p"),ni=a("code"),Tg=o("True"),Eg=o(" or "),si=a("code"),Lg=o("'longest'"),qg=o(`: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).`),$g=l(),ai=a("li"),$t=a("p"),ri=a("code"),Fg=o("'max_length'"),zg=o(": Pad to a maximum length specified with the argument "),ii=a("code"),jg=o("max_length"),Cg=o(` or to the maximum
acceptable input length for the model if that argument is not provided.`),Pg=l(),li=a("li"),U=a("p"),di=a("code"),Dg=o("False"),Ag=o(" or "),ci=a("code"),Ig=o("'do_not_pad'"),Og=o(` (default): No padding (i.e., can output a batch with sequences of different
lengths).
truncation (`),pi=a("code"),Ng=o("bool"),Sg=o(", "),hi=a("code"),Bg=o("str"),Rg=o(" or "),ms=a("a"),Wg=o("TruncationStrategy"),Ug=o(", "),ui=a("em"),Hg=o("optional"),Vg=o(", defaults to "),mi=a("code"),Qg=o("False"),Xg=o(`):
Activates and controls truncation. Accepts the following values:`),Gg=l(),fi=a("li"),Ae=a("p"),gi=a("code"),Kg=o("True"),Yg=o(" or "),_i=a("code"),Jg=o("'longest_first'"),Zg=o(": Truncate to a maximum length specified with the argument "),ki=a("code"),e_=o("max_length"),t_=o(` or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.`),o_=l(),vi=a("li"),Ft=a("p"),bi=a("code"),n_=o("'only_first'"),s_=o(": Truncate to a maximum length specified with the argument "),Mi=a("code"),a_=o("max_length"),r_=o(` or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.`),i_=l(),wi=a("li"),zt=a("p"),yi=a("code"),l_=o("'only_second'"),d_=o(": Truncate to a maximum length specified with the argument "),xi=a("code"),c_=o("max_length"),p_=o(` or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.`),h_=l(),Ti=a("li"),L=a("p"),Ei=a("code"),u_=o("False"),m_=o(" or "),Li=a("code"),f_=o("'do_not_truncate'"),g_=o(` (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).
max_length (`),qi=a("code"),__=o("int"),k_=o(", "),$i=a("em"),v_=o("optional"),b_=o(`):
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
`),Fi=a("code"),M_=o("None"),w_=o(`, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.
stride (`),zi=a("code"),y_=o("int"),x_=o(", "),ji=a("em"),T_=o("optional"),E_=o(`, defaults to 0):
If set to a number along with `),Ci=a("code"),L_=o("max_length"),q_=o(`, the overflowing tokens returned when
`),Pi=a("code"),$_=o("return_overflowing_tokens=True"),F_=o(` will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.
pad_to_multiple_of (`),Di=a("code"),z_=o("int"),j_=o(", "),Ai=a("em"),C_=o("optional"),P_=o(`):
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability >= 7.5 (Volta).
return_tensors (`),Ii=a("code"),D_=o("str"),A_=o(" or "),fs=a("a"),I_=o("TensorType"),O_=o(", "),Oi=a("em"),N_=o("optional"),S_=o(`):
If set, will return tensors instead of list of python integers. Acceptable values are:`),B_=l(),Ni=a("li"),jt=a("p"),Si=a("code"),R_=o("'tf'"),W_=o(": Return TensorFlow "),Bi=a("code"),U_=o("tf.constant"),H_=o(" objects."),V_=l(),Ri=a("li"),Ct=a("p"),Wi=a("code"),Q_=o("'pt'"),X_=o(": Return PyTorch "),Ui=a("code"),G_=o("torch.Tensor"),K_=o(" objects."),Y_=l(),Hi=a("li"),Pt=a("p"),Vi=a("code"),J_=o("'np'"),Z_=o(": Return Numpy "),Qi=a("code"),ek=o("np.ndarray"),tk=o(" objects."),ok=l(),Ie=a("div"),k(Ro.$$.fragment),nk=l(),Xi=a("p"),sk=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),ak=l(),Wo=a("ul"),gs=a("li"),rk=o("single sequence: "),Gi=a("code"),ik=o("<s> X </s>"),lk=l(),_s=a("li"),dk=o("pair of sequences: "),Ki=a("code"),ck=o("<s> A </s></s> B </s>"),pk=l(),Dt=a("div"),k(Uo.$$.fragment),hk=l(),Yi=a("p"),uk=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),mk=l(),At=a("div"),k(Ho.$$.fragment),fk=l(),Vo=a("p"),gk=o(`Tokenize and prepare for the model a sequence or a pair of sequences. .. warning:: This method is deprecated,
`),Ji=a("code"),_k=o("__call__"),kk=o(" should be used instead."),vk=l(),It=a("div"),k(Qo.$$.fragment),bk=l(),Zi=a("p"),Mk=o(`Given the xpath expression of one particular node (like \u201C/html/body/div/li[1]/div/span[2]\u201D), return a list of
tag IDs and corresponding subscripts, taking into account max depth.`),Od=l(),Ke=a("h2"),Ot=a("a"),el=a("span"),k(Xo.$$.fragment),wk=l(),tl=a("span"),yk=o("MarkupLMProcessor"),Nd=l(),te=a("div"),k(Go.$$.fragment),xk=l(),ol=a("p"),Tk=o(`Constructs a MarkupLM processor which combines a MarkupLM feature extractor and a MarkupLM tokenizer into a single
processor.`),Ek=l(),ks=a("p"),vs=a("a"),Lk=o("MarkupLMProcessor"),qk=o(" offers all the functionalities you need to prepare data for the model."),$k=l(),O=a("p"),Fk=o("It first uses "),bs=a("a"),zk=o("MarkupLMFeatureExtractor"),jk=o(` to extract nodes and corresponding xpaths from one or more HTML strings.
Next, these are provided to `),Ms=a("a"),Ck=o("MarkupLMTokenizer"),Pk=o(" or "),ws=a("a"),Dk=o("MarkupLMTokenizerFast"),Ak=o(`, which turns them into token-level
`),nl=a("code"),Ik=o("input_ids"),Ok=o(", "),sl=a("code"),Nk=o("attention_mask"),Sk=o(", "),al=a("code"),Bk=o("token_type_ids"),Rk=o(", "),rl=a("code"),Wk=o("xpath_tags_seq"),Uk=o(" and "),il=a("code"),Hk=o("xpath_subs_seq"),Vk=o("."),Qk=l(),fe=a("div"),k(Ko.$$.fragment),Xk=l(),oe=a("p"),Gk=o("This method first forwards the "),ll=a("code"),Kk=o("html_strings"),Yk=o(" argument to "),Yo=a("a"),dl=a("strong"),Jk=o("call"),Zk=o("()"),ev=o(`. Next, it
passes the `),cl=a("code"),tv=o("nodes"),ov=o(" and "),pl=a("code"),nv=o("xpaths"),sv=o(" along with the additional arguments to "),hl=a("code"),av=o("__call__()"),rv=o(` and
returns the output.`),iv=l(),Jo=a("p"),lv=o("Optionally, one can also provide a "),ul=a("code"),dv=o("text"),cv=o(" argument which is passed along as first sequence."),pv=l(),ml=a("p"),hv=o("Please refer to the docstring of the above two methods for more information."),Sd=l(),Ye=a("h2"),Nt=a("a"),fl=a("span"),k(Zo.$$.fragment),uv=l(),gl=a("span"),mv=o("MarkupLMModel"),Bd=l(),Ee=a("div"),k(en.$$.fragment),fv=l(),tn=a("p"),gv=o(`The bare MarkupLM Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),on=a("a"),_v=o("torch.nn.Module"),kv=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vv=l(),ge=a("div"),k(nn.$$.fragment),bv=l(),Je=a("p"),Mv=o("The "),ys=a("a"),wv=o("MarkupLMModel"),yv=o(" forward method, overrides the "),_l=a("code"),xv=o("__call__"),Tv=o(" special method."),Ev=l(),k(St.$$.fragment),Lv=l(),k(Bt.$$.fragment),Rd=l(),Ze=a("h2"),Rt=a("a"),kl=a("span"),k(sn.$$.fragment),qv=l(),vl=a("span"),$v=o("MarkupLMForSequenceClassification"),Wd=l(),he=a("div"),k(an.$$.fragment),Fv=l(),bl=a("p"),zv=o(`MarkupLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),jv=l(),rn=a("p"),Cv=o("This model is a PyTorch "),ln=a("a"),Pv=o("torch.nn.Module"),Dv=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Av=l(),_e=a("div"),k(dn.$$.fragment),Iv=l(),et=a("p"),Ov=o("The "),xs=a("a"),Nv=o("MarkupLMForSequenceClassification"),Sv=o(" forward method, overrides the "),Ml=a("code"),Bv=o("__call__"),Rv=o(" special method."),Wv=l(),k(Wt.$$.fragment),Uv=l(),k(Ut.$$.fragment),Ud=l(),tt=a("h2"),Ht=a("a"),wl=a("span"),k(cn.$$.fragment),Hv=l(),yl=a("span"),Vv=o("MarkupLMForTokenClassification"),Hd=l(),Le=a("div"),k(pn.$$.fragment),Qv=l(),ot=a("p"),Xv=o("MarkupLM Model with a "),xl=a("code"),Gv=o("token_classification"),Kv=o(` head on top.
This model is a PyTorch `),hn=a("a"),Yv=o("torch.nn.Module"),Jv=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zv=l(),ke=a("div"),k(un.$$.fragment),eb=l(),nt=a("p"),tb=o("The "),Ts=a("a"),ob=o("MarkupLMForTokenClassification"),nb=o(" forward method, overrides the "),Tl=a("code"),sb=o("__call__"),ab=o(" special method."),rb=l(),k(Vt.$$.fragment),ib=l(),k(Qt.$$.fragment),Vd=l(),st=a("h2"),Xt=a("a"),El=a("span"),k(mn.$$.fragment),lb=l(),Ll=a("span"),db=o("MarkupLMForQuestionAnswering"),Qd=l(),ue=a("div"),k(fn.$$.fragment),cb=l(),at=a("p"),pb=o(`MarkupLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ql=a("code"),hb=o("span start logits"),ub=o(" and "),$l=a("code"),mb=o("span end logits"),fb=o(")."),gb=l(),gn=a("p"),_b=o("This model is a PyTorch "),_n=a("a"),kb=o("torch.nn.Module"),vb=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),bb=l(),ve=a("div"),k(kn.$$.fragment),Mb=l(),rt=a("p"),wb=o("The "),Es=a("a"),yb=o("MarkupLMForQuestionAnswering"),xb=o(" forward method, overrides the "),Fl=a("code"),Tb=o("__call__"),Eb=o(" special method."),Lb=l(),k(Gt.$$.fragment),qb=l(),k(Kt.$$.fragment),this.h()},l(s){const h=Ry('[data-svelte="svelte-1phssyn"]',document.head);m=r(h,"META",{name:!0,content:!0}),h.forEach(t),T=d(s),_=r(s,"H1",{class:!0});var vn=i(_);g=r(vn,"A",{id:!0,class:!0,href:!0});var zl=i(g);x=r(zl,"SPAN",{});var jl=i(x);v(p.$$.fragment,jl),jl.forEach(t),zl.forEach(t),f=d(vn),G=r(vn,"SPAN",{});var Cl=i(G);bc=n(Cl,"MarkupLM"),Cl.forEach(t),vn.forEach(t),Jl=d(s),Se=r(s,"H2",{class:!0});var bn=i(Se);ct=r(bn,"A",{id:!0,class:!0,href:!0});var Pl=i(ct);Xs=r(Pl,"SPAN",{});var Dl=i(Xs);v(ro.$$.fragment,Dl),Dl.forEach(t),Pl.forEach(t),Mc=d(bn),Gs=r(bn,"SPAN",{});var Al=i(Gs);wc=n(Al,"Overview"),Al.forEach(t),bn.forEach(t),Zl=d(s),qe=r(s,"P",{});var it=i(qe);yc=n(it,"The MarkupLM model was proposed in "),io=r(it,"A",{href:!0,rel:!0});var Il=i(io);xc=n(Il,`MarkupLM: Pre-training of Text and Markup Language for Visually-rich Document
Understanding`),Il.forEach(t),Tc=n(it,` by Junlong Li, Yiheng Xu, Lei Cui, Furu Wei. MarkupLM is BERT, but
applied to HTML pages instead of raw text documents. The model incorporates additional embedding layers to improve
performance, similar to `),yn=r(it,"A",{href:!0});var Nb=i(yn);Ec=n(Nb,"LayoutLM"),Nb.forEach(t),Lc=n(it,"."),it.forEach(t),ed=d(s),xn=r(s,"P",{});var Sb=i(xn);qc=n(Sb,`The model can be used for tasks like question answering on web pages or information extraction from web pages. It obtains
state-of-the-art results on 2 important benchmarks:`),Sb.forEach(t),td=d(s),pt=r(s,"UL",{});var Gd=i(pt);Tn=r(Gd,"LI",{});var $b=i(Tn);lo=r($b,"A",{href:!0,rel:!0});var Bb=i(lo);$c=n(Bb,"WebSRC"),Bb.forEach(t),Fc=n($b,", a dataset for Web-Based Structual Reading Comprehension (a bit like SQuAD but for web pages)"),$b.forEach(t),zc=d(Gd),En=r(Gd,"LI",{});var Fb=i(En);co=r(Fb,"A",{href:!0,rel:!0});var Rb=i(co);jc=n(Rb,"SWDE"),Rb.forEach(t),Cc=n(Fb,`, a dataset
for information extraction from web pages (basically named-entity recogntion on web pages)`),Fb.forEach(t),Gd.forEach(t),od=d(s),Ln=r(s,"P",{});var Wb=i(Ln);Pc=n(Wb,"The abstract from the paper is the following:"),Wb.forEach(t),nd=d(s),qn=r(s,"P",{});var Ub=i(qn);Ks=r(Ub,"EM",{});var Hb=i(Ks);Dc=n(Hb,`Multimodal pre-training with text, layout, and image has made significant progress for Visually-rich Document
Understanding (VrDU), especially the fixed-layout documents such as scanned document images. While, there are still a
large number of digital documents where the layout information is not fixed and needs to be interactively and
dynamically rendered for visualization, making existing layout-based pre-training approaches not easy to apply. In this
paper, we propose MarkupLM for document understanding tasks with markup languages as the backbone such as
HTML/XML-based documents, where text and markup information is jointly pre-trained. Experiment results show that the
pre-trained MarkupLM significantly outperforms the existing strong baseline models on several document understanding
tasks. The pre-trained model and code will be publicly available.`),Hb.forEach(t),Ub.forEach(t),sd=d(s),$n=r(s,"P",{});var Vb=i($n);Ac=n(Vb,"Tips:"),Vb.forEach(t),ad=d(s),$e=r(s,"UL",{});var Ls=i($e);le=r(Ls,"LI",{});var Oe=i(le);Ic=n(Oe,"In addition to "),Ys=r(Oe,"CODE",{});var Qb=i(Ys);Oc=n(Qb,"input_ids"),Qb.forEach(t),Nc=n(Oe,", "),Fn=r(Oe,"A",{href:!0});var Xb=i(Fn);Sc=n(Xb,"forward()"),Xb.forEach(t),Bc=n(Oe," expects 2 additional inputs, namely "),Js=r(Oe,"CODE",{});var Gb=i(Js);Rc=n(Gb,"xpath_tags_seq"),Gb.forEach(t),Wc=n(Oe," and "),Zs=r(Oe,"CODE",{});var Kb=i(Zs);Uc=n(Kb,"xpath_subs_seq"),Kb.forEach(t),Hc=n(Oe,`.
These are the XPATH tags and subscripts respectively for each token in the input sequence.`),Oe.forEach(t),Vc=d(Ls),Be=r(Ls,"LI",{});var qs=i(Be);Qc=n(qs,"One can use "),zn=r(qs,"A",{href:!0});var Yb=i(zn);Xc=n(Yb,"MarkupLMProcessor"),Yb.forEach(t),Gc=n(qs," to prepare all data for the model. Refer to the "),jn=r(qs,"A",{href:!0});var Jb=i(jn);Kc=n(Jb,"usage guide"),Jb.forEach(t),Yc=n(qs," for more info."),qs.forEach(t),Jc=d(Ls),po=r(Ls,"LI",{});var Kd=i(po);Zc=n(Kd,"Demo notebooks can be found "),ho=r(Kd,"A",{href:!0,rel:!0});var Zb=i(ho);ep=n(Zb,"here"),Zb.forEach(t),tp=n(Kd,"."),Kd.forEach(t),Ls.forEach(t),rd=d(s),ht=r(s,"IMG",{src:!0,alt:!0,width:!0}),id=d(s),uo=r(s,"SMALL",{});var zb=i(uo);op=n(zb,"MarkupLM architecture. Taken from the "),Cn=r(zb,"A",{href:!0});var eM=i(Cn);np=n(eM,"original paper."),eM.forEach(t),zb.forEach(t),ld=d(s),Fe=r(s,"P",{});var $s=i(Fe);sp=n($s,"This model was contributed by "),mo=r($s,"A",{href:!0,rel:!0});var tM=i(mo);ap=n(tM,"nielsr"),tM.forEach(t),rp=n($s,". The original code can be found "),fo=r($s,"A",{href:!0,rel:!0});var oM=i(fo);ip=n(oM,"here"),oM.forEach(t),lp=n($s,"."),$s.forEach(t),dd=d(s),Re=r(s,"H2",{class:!0});var Yd=i(Re);ut=r(Yd,"A",{id:!0,class:!0,href:!0});var nM=i(ut);ea=r(nM,"SPAN",{});var sM=i(ea);v(go.$$.fragment,sM),sM.forEach(t),nM.forEach(t),dp=d(Yd),ta=r(Yd,"SPAN",{});var aM=i(ta);cp=n(aM,"Usage: MarkupLMProcessor"),aM.forEach(t),Yd.forEach(t),cd=d(s),J=r(s,"P",{});var be=i(J);pp=n(be,"The easiest way to prepare data for the model is to use "),Pn=r(be,"A",{href:!0});var rM=i(Pn);hp=n(rM,"MarkupLMProcessor"),rM.forEach(t),up=n(be,`, which internally combines a feature extractor
(`),Dn=r(be,"A",{href:!0});var iM=i(Dn);mp=n(iM,"MarkupLMFeatureExtractor"),iM.forEach(t),fp=n(be,") and a tokenizer ("),An=r(be,"A",{href:!0});var lM=i(An);gp=n(lM,"MarkupLMTokenizer"),lM.forEach(t),_p=n(be," or "),In=r(be,"A",{href:!0});var dM=i(In);kp=n(dM,"MarkupLMTokenizerFast"),dM.forEach(t),vp=n(be,`). The feature extractor is
used to extract all nodes and xpaths from the HTML strings, which are then provided to the tokenizer, which turns them into the
token-level inputs of the model (`),oa=r(be,"CODE",{});var cM=i(oa);bp=n(cM,"input_ids"),cM.forEach(t),Mp=n(be,` etc.). Note that you can still use the feature extractor and tokenizer separately,
if you only want to handle one of the two tasks.`),be.forEach(t),pd=d(s),v(_o.$$.fragment,s),hd=d(s),F=r(s,"P",{});var D=i(F);wp=n(D,"In short, one can provide HTML strings (and possibly additional data) to "),On=r(D,"A",{href:!0});var pM=i(On);yp=n(pM,"MarkupLMProcessor"),pM.forEach(t),xp=n(D,`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),Nn=r(D,"A",{href:!0});var hM=i(Nn);Tp=n(hM,"MarkupLMFeatureExtractor"),hM.forEach(t),Ep=n(D,` to get a list of nodes and corresponding xpaths. The nodes and
xpaths are then provided to `),Sn=r(D,"A",{href:!0});var uM=i(Sn);Lp=n(uM,"MarkupLMTokenizer"),uM.forEach(t),qp=n(D," or "),Bn=r(D,"A",{href:!0});var mM=i(Bn);$p=n(mM,"MarkupLMTokenizerFast"),mM.forEach(t),Fp=n(D,`, which converts them
to token-level `),na=r(D,"CODE",{});var fM=i(na);zp=n(fM,"input_ids"),fM.forEach(t),jp=n(D,", "),sa=r(D,"CODE",{});var gM=i(sa);Cp=n(gM,"attention_mask"),gM.forEach(t),Pp=n(D,", "),aa=r(D,"CODE",{});var _M=i(aa);Dp=n(_M,"token_type_ids"),_M.forEach(t),Ap=n(D,", "),ra=r(D,"CODE",{});var kM=i(ra);Ip=n(kM,"xpath_subs_seq"),kM.forEach(t),Op=n(D,", "),ia=r(D,"CODE",{});var vM=i(ia);Np=n(vM,"xpath_tags_seq"),vM.forEach(t),Sp=n(D,`.
Optionally, one can provide node labels to the processor, which are turned into token-level `),la=r(D,"CODE",{});var bM=i(la);Bp=n(bM,"labels"),bM.forEach(t),Rp=n(D,"."),D.forEach(t),ud=d(s),de=r(s,"P",{});var lt=i(de);Rn=r(lt,"A",{href:!0});var MM=i(Rn);Wp=n(MM,"MarkupLMFeatureExtractor"),MM.forEach(t),Up=n(lt," uses "),ko=r(lt,"A",{href:!0,rel:!0});var wM=i(ko);Hp=n(wM,"Beautiful Soup"),wM.forEach(t),Vp=n(lt,`, a Python library for
pulling data out of HTML and XML files, under the hood. Note that you can still use your own parsing solution of
choice, and provide the nodes and xpaths yourself to `),Wn=r(lt,"A",{href:!0});var yM=i(Wn);Qp=n(yM,"MarkupLMTokenizer"),yM.forEach(t),Xp=n(lt," or "),Un=r(lt,"A",{href:!0});var xM=i(Un);Gp=n(xM,"MarkupLMTokenizerFast"),xM.forEach(t),Kp=n(lt,"."),lt.forEach(t),md=d(s),Hn=r(s,"P",{});var TM=i(Hn);Yp=n(TM,`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),TM.forEach(t),fd=d(s),Vn=r(s,"P",{});var EM=i(Vn);da=r(EM,"STRONG",{});var LM=i(da);Jp=n(LM,"Use case 1: web page classification (training, inference) + token classification (inference), parse_html = True"),LM.forEach(t),EM.forEach(t),gd=d(s),Qn=r(s,"P",{});var qM=i(Qn);Zp=n(qM,"This is the simplest case, in which the processor will use the feature extractor to get all nodes and xpaths from the HTML."),qM.forEach(t),_d=d(s),v(vo.$$.fragment,s),kd=d(s),Xn=r(s,"P",{});var $M=i(Xn);ca=r($M,"STRONG",{});var FM=i(ca);eh=n(FM,"Use case 2: web page classification (training, inference) + token classification (inference), parse_html=False"),FM.forEach(t),$M.forEach(t),vd=d(s),ze=r(s,"P",{});var Fs=i(ze);th=n(Fs,`In case one already has obtained all nodes and xpaths, one doesn\u2019t need the feature extractor. In that case, one should
provide the nodes and corresponding xpaths themselves to the processor, and make sure to set `),pa=r(Fs,"CODE",{});var zM=i(pa);oh=n(zM,"parse_html"),zM.forEach(t),nh=n(Fs," to "),ha=r(Fs,"CODE",{});var jM=i(ha);sh=n(jM,"False"),jM.forEach(t),ah=n(Fs,"."),Fs.forEach(t),bd=d(s),v(bo.$$.fragment,s),Md=d(s),Gn=r(s,"P",{});var CM=i(Gn);ua=r(CM,"STRONG",{});var PM=i(ua);rh=n(PM,"Use case 3: token classification (training), parse_html=False"),PM.forEach(t),CM.forEach(t),wd=d(s),Z=r(s,"P",{});var Me=i(Z);ih=n(Me,"For token classification tasks (such as "),Mo=r(Me,"A",{href:!0,rel:!0});var DM=i(Mo);lh=n(DM,"SWDE"),DM.forEach(t),dh=n(Me,`), one can also provide the
corresponding node labels in order to train a model. The processor will then convert these into token-level `),ma=r(Me,"CODE",{});var AM=i(ma);ch=n(AM,"labels"),AM.forEach(t),ph=n(Me,`.
By default, it will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),fa=r(Me,"CODE",{});var IM=i(fa);hh=n(IM,"ignore_index"),IM.forEach(t),uh=n(Me,` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),ga=r(Me,"CODE",{});var OM=i(ga);mh=n(OM,"only_label_first_subword"),OM.forEach(t),fh=n(Me," set to "),_a=r(Me,"CODE",{});var NM=i(_a);gh=n(NM,"False"),NM.forEach(t),_h=n(Me,"."),Me.forEach(t),yd=d(s),v(wo.$$.fragment,s),xd=d(s),Kn=r(s,"P",{});var SM=i(Kn);ka=r(SM,"STRONG",{});var BM=i(ka);kh=n(BM,"Use case 4: web page question answering (inference), parse_html=True"),BM.forEach(t),SM.forEach(t),Td=d(s),Yn=r(s,"P",{});var RM=i(Yn);vh=n(RM,`For question answering tasks on web pages, you can provide a question to the processor. By default, the
processor will use the feature extractor to get all nodes and xpaths, and create [CLS] question tokens [SEP] word tokens [SEP].`),RM.forEach(t),Ed=d(s),v(yo.$$.fragment,s),Ld=d(s),Jn=r(s,"P",{});var WM=i(Jn);va=r(WM,"STRONG",{});var UM=i(va);bh=n(UM,"Use case 5: web page question answering (inference), apply_ocr=False"),UM.forEach(t),WM.forEach(t),qd=d(s),je=r(s,"P",{});var zs=i(je);Mh=n(zs,`For question answering tasks (such as WebSRC), you can provide a question to the processor. If you have extracted
all nodes and xpaths yourself, you can provide them directly to the processor. Make sure to set `),ba=r(zs,"CODE",{});var HM=i(ba);wh=n(HM,"parse_html"),HM.forEach(t),yh=n(zs," to "),Ma=r(zs,"CODE",{});var VM=i(Ma);xh=n(VM,"False"),VM.forEach(t),Th=n(zs,"."),zs.forEach(t),$d=d(s),v(xo.$$.fragment,s),Fd=d(s),We=r(s,"H2",{class:!0});var Jd=i(We);mt=r(Jd,"A",{id:!0,class:!0,href:!0});var QM=i(mt);wa=r(QM,"SPAN",{});var XM=i(wa);v(To.$$.fragment,XM),XM.forEach(t),QM.forEach(t),Eh=d(Jd),ya=r(Jd,"SPAN",{});var GM=i(ya);Lh=n(GM,"MarkupLMConfig"),GM.forEach(t),Jd.forEach(t),zd=d(s),ce=r(s,"DIV",{class:!0});var Yt=i(ce);v(Eo.$$.fragment,Yt),qh=d(Yt),Ue=r(Yt,"P",{});var js=i(Ue);$h=n(js,"This is the configuration class to store the configuration of a "),Zn=r(js,"A",{href:!0});var KM=i(Zn);Fh=n(KM,"MarkupLMModel"),KM.forEach(t),zh=n(js,`. It is used to instantiate a
MarkupLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the MarkupLM
`),Lo=r(js,"A",{href:!0,rel:!0});var YM=i(Lo);jh=n(YM,"microsoft/markuplm-base-uncased"),YM.forEach(t),Ch=n(js," architecture."),js.forEach(t),Ph=d(Yt),He=r(Yt,"P",{});var Cs=i(He);Dh=n(Cs,"Configuration objects inherit from "),es=r(Cs,"A",{href:!0});var JM=i(es);Ah=n(JM,"BertConfig"),JM.forEach(t),Ih=n(Cs,` and can be used to control the model outputs. Read the
documentation from `),ts=r(Cs,"A",{href:!0});var ZM=i(ts);Oh=n(ZM,"BertConfig"),ZM.forEach(t),Nh=n(Cs," for more information."),Cs.forEach(t),Sh=d(Yt),v(ft.$$.fragment,Yt),Yt.forEach(t),jd=d(s),Ve=r(s,"H2",{class:!0});var Zd=i(Ve);gt=r(Zd,"A",{id:!0,class:!0,href:!0});var e1=i(gt);xa=r(e1,"SPAN",{});var t1=i(xa);v(qo.$$.fragment,t1),t1.forEach(t),e1.forEach(t),Bh=d(Zd),Ta=r(Zd,"SPAN",{});var o1=i(Ta);Rh=n(o1,"MarkupLMFeatureExtractor"),o1.forEach(t),Zd.forEach(t),Cd=d(s),pe=r(s,"DIV",{class:!0});var Jt=i(pe);v($o.$$.fragment,Jt),Wh=d(Jt),Ea=r(Jt,"P",{});var n1=i(Ea);Uh=n(n1,`Constructs a MarkupLM feature extractor. This can be used to get a list of nodes and corresponding xpaths from HTML
strings.`),n1.forEach(t),Hh=d(Jt),Fo=r(Jt,"P",{});var ec=i(Fo);Vh=n(ec,"This feature extractor inherits from "),La=r(ec,"CODE",{});var s1=i(La);Qh=n(s1,"PreTrainedFeatureExtractor()"),s1.forEach(t),Xh=n(ec,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),ec.forEach(t),Gh=d(Jt),Ce=r(Jt,"DIV",{class:!0});var Ps=i(Ce);v(zo.$$.fragment,Ps),Kh=d(Ps),qa=r(Ps,"P",{});var a1=i(qa);Yh=n(a1,"Main method to prepare for the model one or several HTML strings."),a1.forEach(t),Jh=d(Ps),v(_t.$$.fragment,Ps),Ps.forEach(t),Jt.forEach(t),Pd=d(s),Qe=r(s,"H2",{class:!0});var tc=i(Qe);kt=r(tc,"A",{id:!0,class:!0,href:!0});var r1=i(kt);$a=r(r1,"SPAN",{});var i1=i($a);v(jo.$$.fragment,i1),i1.forEach(t),r1.forEach(t),Zh=d(tc),Fa=r(tc,"SPAN",{});var l1=i(Fa);eu=n(l1,"MarkupLMTokenizer"),l1.forEach(t),tc.forEach(t),Dd=d(s),K=r(s,"DIV",{class:!0});var we=i(K);v(Co.$$.fragment,we),tu=d(we),S=r(we,"P",{});var ee=i(S);ou=n(ee,"Construct a MarkupLM tokenizer. Based on byte-level Byte-Pair-Encoding (BPE). "),os=r(ee,"A",{href:!0});var d1=i(os);nu=n(d1,"MarkupLMTokenizer"),d1.forEach(t),su=n(ee,` can be used to
turn HTML strings into to token-level `),za=r(ee,"CODE",{});var c1=i(za);au=n(c1,"input_ids"),c1.forEach(t),ru=n(ee,", "),ja=r(ee,"CODE",{});var p1=i(ja);iu=n(p1,"attention_mask"),p1.forEach(t),lu=n(ee,", "),Ca=r(ee,"CODE",{});var h1=i(Ca);du=n(h1,"token_type_ids"),h1.forEach(t),cu=n(ee,", "),Pa=r(ee,"CODE",{});var u1=i(Pa);pu=n(u1,"xpath_tags_seq"),u1.forEach(t),hu=n(ee,` and
`),Da=r(ee,"CODE",{});var m1=i(Da);uu=n(m1,"xpath_tags_seq"),m1.forEach(t),mu=n(ee,". This tokenizer inherits from "),ns=r(ee,"A",{href:!0});var f1=i(ns);fu=n(f1,"PreTrainedTokenizer"),f1.forEach(t),gu=n(ee,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),ee.forEach(t),_u=d(we),Pe=r(we,"DIV",{class:!0});var Ds=i(Pe);v(Po.$$.fragment,Ds),ku=d(Ds),Aa=r(Ds,"P",{});var g1=i(Aa);vu=n(g1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),g1.forEach(t),bu=d(Ds),Do=r(Ds,"UL",{});var oc=i(Do);ss=r(oc,"LI",{});var jb=i(ss);Mu=n(jb,"single sequence: "),Ia=r(jb,"CODE",{});var _1=i(Ia);wu=n(_1,"<s> X </s>"),_1.forEach(t),jb.forEach(t),yu=d(oc),as=r(oc,"LI",{});var Cb=i(as);xu=n(Cb,"pair of sequences: "),Oa=r(Cb,"CODE",{});var k1=i(Oa);Tu=n(k1,"<s> A </s></s> B </s>"),k1.forEach(t),Cb.forEach(t),oc.forEach(t),Ds.forEach(t),Eu=d(we),rs=r(we,"DIV",{class:!0});var v1=i(rs);v(Ao.$$.fragment,v1),v1.forEach(t),Lu=d(we),vt=r(we,"DIV",{class:!0});var nc=i(vt);v(Io.$$.fragment,nc),qu=d(nc),Na=r(nc,"P",{});var b1=i(Na);$u=n(b1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),b1.forEach(t),nc.forEach(t),Fu=d(we),is=r(we,"DIV",{class:!0});var M1=i(is);v(Oo.$$.fragment,M1),M1.forEach(t),we.forEach(t),Ad=d(s),Xe=r(s,"H2",{class:!0});var sc=i(Xe);bt=r(sc,"A",{id:!0,class:!0,href:!0});var w1=i(bt);Sa=r(w1,"SPAN",{});var y1=i(Sa);v(No.$$.fragment,y1),y1.forEach(t),w1.forEach(t),zu=d(sc),Ba=r(sc,"SPAN",{});var x1=i(Ba);ju=n(x1,"MarkupLMTokenizerFast"),x1.forEach(t),sc.forEach(t),Id=d(s),j=r(s,"DIV",{class:!0});var H=i(j);v(So.$$.fragment,H),Cu=d(H),Ra=r(H,"P",{});var T1=i(Ra);Pu=n(T1,"Construct a MarkupLM tokenizer. Based on byte-level Byte-Pair-Encoding (BPE)."),T1.forEach(t),Du=d(H),B=r(H,"P",{});var ne=i(B);ls=r(ne,"A",{href:!0});var E1=i(ls);Au=n(E1,"MarkupLMTokenizerFast"),E1.forEach(t),Iu=n(ne," can be used to turn HTML strings into to token-level "),Wa=r(ne,"CODE",{});var L1=i(Wa);Ou=n(L1,"input_ids"),L1.forEach(t),Nu=n(ne,", "),Ua=r(ne,"CODE",{});var q1=i(Ua);Su=n(q1,"attention_mask"),q1.forEach(t),Bu=n(ne,`,
`),Ha=r(ne,"CODE",{});var $1=i(Ha);Ru=n($1,"token_type_ids"),$1.forEach(t),Wu=n(ne,", "),Va=r(ne,"CODE",{});var F1=i(Va);Uu=n(F1,"xpath_tags_seq"),F1.forEach(t),Hu=n(ne," and "),Qa=r(ne,"CODE",{});var z1=i(Qa);Vu=n(z1,"xpath_tags_seq"),z1.forEach(t),Qu=n(ne,". This tokenizer inherits from "),ds=r(ne,"A",{href:!0});var j1=i(ds);Xu=n(j1,"PreTrainedTokenizer"),j1.forEach(t),Gu=n(ne,` which
contains most of the main methods.`),ne.forEach(t),Ku=d(H),Xa=r(H,"P",{});var C1=i(Xa);Yu=n(C1,"Users should refer to this superclass for more information regarding those methods."),C1.forEach(t),Ju=d(H),R=r(H,"DIV",{class:!0});var re=i(R);v(Bo.$$.fragment,re),Zu=d(re),A=r(re,"P",{});var V=i(A);em=n(V,"add_special_tokens ("),Ga=r(V,"CODE",{});var P1=i(Ga);tm=n(P1,"bool"),P1.forEach(t),om=n(V,", "),Ka=r(V,"EM",{});var D1=i(Ka);nm=n(D1,"optional"),D1.forEach(t),sm=n(V,", defaults to "),Ya=r(V,"CODE",{});var A1=i(Ya);am=n(A1,"True"),A1.forEach(t),rm=n(V,`):
Whether or not to encode the sequences with the special tokens relative to their model.
padding (`),Ja=r(V,"CODE",{});var I1=i(Ja);im=n(I1,"bool"),I1.forEach(t),lm=n(V,", "),Za=r(V,"CODE",{});var O1=i(Za);dm=n(O1,"str"),O1.forEach(t),cm=n(V," or "),cs=r(V,"A",{href:!0});var N1=i(cs);pm=n(N1,"PaddingStrategy"),N1.forEach(t),hm=n(V,", "),er=r(V,"EM",{});var S1=i(er);um=n(S1,"optional"),S1.forEach(t),mm=n(V,", defaults to "),tr=r(V,"CODE",{});var B1=i(tr);fm=n(B1,"False"),B1.forEach(t),gm=n(V,`):
Activates and controls padding. Accepts the following values:`),V.forEach(t),_m=d(re),Y=r(re,"UL",{});var ie=i(Y);or=r(ie,"LI",{});var R1=i(or);Mt=r(R1,"P",{});var Ol=i(Mt);nr=r(Ol,"CODE",{});var W1=i(nr);km=n(W1,"True"),W1.forEach(t),vm=n(Ol," or "),sr=r(Ol,"CODE",{});var U1=i(sr);bm=n(U1,"'longest'"),U1.forEach(t),Mm=n(Ol,`: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).`),Ol.forEach(t),R1.forEach(t),wm=d(ie),ar=r(ie,"LI",{});var H1=i(ar);wt=r(H1,"P",{});var Nl=i(wt);rr=r(Nl,"CODE",{});var V1=i(rr);ym=n(V1,"'max_length'"),V1.forEach(t),xm=n(Nl,": Pad to a maximum length specified with the argument "),ir=r(Nl,"CODE",{});var Q1=i(ir);Tm=n(Q1,"max_length"),Q1.forEach(t),Em=n(Nl,` or to the maximum
acceptable input length for the model if that argument is not provided.`),Nl.forEach(t),H1.forEach(t),Lm=d(ie),lr=r(ie,"LI",{});var X1=i(lr);W=r(X1,"P",{});var se=i(W);dr=r(se,"CODE",{});var G1=i(dr);qm=n(G1,"False"),G1.forEach(t),$m=n(se," or "),cr=r(se,"CODE",{});var K1=i(cr);Fm=n(K1,"'do_not_pad'"),K1.forEach(t),zm=n(se,` (default): No padding (i.e., can output a batch with sequences of different
lengths).
truncation (`),pr=r(se,"CODE",{});var Y1=i(pr);jm=n(Y1,"bool"),Y1.forEach(t),Cm=n(se,", "),hr=r(se,"CODE",{});var J1=i(hr);Pm=n(J1,"str"),J1.forEach(t),Dm=n(se," or "),ps=r(se,"A",{href:!0});var Z1=i(ps);Am=n(Z1,"TruncationStrategy"),Z1.forEach(t),Im=n(se,", "),ur=r(se,"EM",{});var ew=i(ur);Om=n(ew,"optional"),ew.forEach(t),Nm=n(se,", defaults to "),mr=r(se,"CODE",{});var tw=i(mr);Sm=n(tw,"False"),tw.forEach(t),Bm=n(se,`):
Activates and controls truncation. Accepts the following values:`),se.forEach(t),X1.forEach(t),Rm=d(ie),fr=r(ie,"LI",{});var ow=i(fr);De=r(ow,"P",{});var Mn=i(De);gr=r(Mn,"CODE",{});var nw=i(gr);Wm=n(nw,"True"),nw.forEach(t),Um=n(Mn," or "),_r=r(Mn,"CODE",{});var sw=i(_r);Hm=n(sw,"'longest_first'"),sw.forEach(t),Vm=n(Mn,": Truncate to a maximum length specified with the argument "),kr=r(Mn,"CODE",{});var aw=i(kr);Qm=n(aw,"max_length"),aw.forEach(t),Xm=n(Mn,` or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.`),Mn.forEach(t),ow.forEach(t),Gm=d(ie),vr=r(ie,"LI",{});var rw=i(vr);yt=r(rw,"P",{});var Sl=i(yt);br=r(Sl,"CODE",{});var iw=i(br);Km=n(iw,"'only_first'"),iw.forEach(t),Ym=n(Sl,": Truncate to a maximum length specified with the argument "),Mr=r(Sl,"CODE",{});var lw=i(Mr);Jm=n(lw,"max_length"),lw.forEach(t),Zm=n(Sl,` or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.`),Sl.forEach(t),rw.forEach(t),ef=d(ie),wr=r(ie,"LI",{});var dw=i(wr);xt=r(dw,"P",{});var Bl=i(xt);yr=r(Bl,"CODE",{});var cw=i(yr);tf=n(cw,"'only_second'"),cw.forEach(t),of=n(Bl,": Truncate to a maximum length specified with the argument "),xr=r(Bl,"CODE",{});var pw=i(xr);nf=n(pw,"max_length"),pw.forEach(t),sf=n(Bl,` or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.`),Bl.forEach(t),dw.forEach(t),af=d(ie),Tr=r(ie,"LI",{});var hw=i(Tr);me=r(hw,"P",{});var dt=i(me);Er=r(dt,"CODE",{});var uw=i(Er);rf=n(uw,"False"),uw.forEach(t),lf=n(dt," or "),Lr=r(dt,"CODE",{});var mw=i(Lr);df=n(mw,"'do_not_truncate'"),mw.forEach(t),cf=n(dt,` (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).
max_length (`),qr=r(dt,"CODE",{});var fw=i(qr);pf=n(fw,"int"),fw.forEach(t),hf=n(dt,", "),$r=r(dt,"EM",{});var gw=i($r);uf=n(gw,"optional"),gw.forEach(t),mf=n(dt,`):
Controls the maximum length to use by one of the truncation/padding parameters.`),dt.forEach(t),hw.forEach(t),ie.forEach(t),ff=d(re),E=r(re,"P",{});var q=i(E);gf=n(q,"If left unset or set to "),Fr=r(q,"CODE",{});var _w=i(Fr);_f=n(_w,"None"),_w.forEach(t),kf=n(q,`, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.
stride (`),zr=r(q,"CODE",{});var kw=i(zr);vf=n(kw,"int"),kw.forEach(t),bf=n(q,", "),jr=r(q,"EM",{});var vw=i(jr);Mf=n(vw,"optional"),vw.forEach(t),wf=n(q,`, defaults to 0):
If set to a number along with `),Cr=r(q,"CODE",{});var bw=i(Cr);yf=n(bw,"max_length"),bw.forEach(t),xf=n(q,`, the overflowing tokens returned when
`),Pr=r(q,"CODE",{});var Mw=i(Pr);Tf=n(Mw,"return_overflowing_tokens=True"),Mw.forEach(t),Ef=n(q,` will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.
is_split_into_words (`),Dr=r(q,"CODE",{});var ww=i(Dr);Lf=n(ww,"bool"),ww.forEach(t),qf=n(q,", "),Ar=r(q,"EM",{});var yw=i(Ar);$f=n(yw,"optional"),yw.forEach(t),Ff=n(q,", defaults to "),Ir=r(q,"CODE",{});var xw=i(Ir);zf=n(xw,"False"),xw.forEach(t),jf=n(q,`):
Whether or not the input is already pre-tokenized (e.g., split into words). If set to `),Or=r(q,"CODE",{});var Tw=i(Or);Cf=n(Tw,"True"),Tw.forEach(t),Pf=n(q,`, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.
pad_to_multiple_of (`),Nr=r(q,"CODE",{});var Ew=i(Nr);Df=n(Ew,"int"),Ew.forEach(t),Af=n(q,", "),Sr=r(q,"EM",{});var Lw=i(Sr);If=n(Lw,"optional"),Lw.forEach(t),Of=n(q,`):
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability >= 7.5 (Volta).
return_tensors (`),Br=r(q,"CODE",{});var qw=i(Br);Nf=n(qw,"str"),qw.forEach(t),Sf=n(q," or "),hs=r(q,"A",{href:!0});var $w=i(hs);Bf=n($w,"TensorType"),$w.forEach(t),Rf=n(q,", "),Rr=r(q,"EM",{});var Fw=i(Rr);Wf=n(Fw,"optional"),Fw.forEach(t),Uf=n(q,`):
If set, will return tensors instead of list of python integers. Acceptable values are:`),q.forEach(t),Hf=d(re),Ge=r(re,"UL",{});var As=i(Ge);Tt=r(As,"LI",{});var Rl=i(Tt);Wr=r(Rl,"CODE",{});var zw=i(Wr);Vf=n(zw,"'tf'"),zw.forEach(t),Qf=n(Rl,": Return TensorFlow "),Ur=r(Rl,"CODE",{});var jw=i(Ur);Xf=n(jw,"tf.constant"),jw.forEach(t),Gf=n(Rl," objects."),Rl.forEach(t),Kf=d(As),Et=r(As,"LI",{});var Wl=i(Et);Hr=r(Wl,"CODE",{});var Cw=i(Hr);Yf=n(Cw,"'pt'"),Cw.forEach(t),Jf=n(Wl,": Return PyTorch "),Vr=r(Wl,"CODE",{});var Pw=i(Vr);Zf=n(Pw,"torch.Tensor"),Pw.forEach(t),eg=n(Wl," objects."),Wl.forEach(t),tg=d(As),Lt=r(As,"LI",{});var Ul=i(Lt);Qr=r(Ul,"CODE",{});var Dw=i(Qr);og=n(Dw,"'np'"),Dw.forEach(t),ng=n(Ul,": Return Numpy "),Xr=r(Ul,"CODE",{});var Aw=i(Xr);sg=n(Aw,"np.ndarray"),Aw.forEach(t),ag=n(Ul," objects."),Ul.forEach(t),As.forEach(t),rg=d(re),I=r(re,"P",{});var Q=i(I);ig=n(Q,"add_special_tokens ("),Gr=r(Q,"CODE",{});var Iw=i(Gr);lg=n(Iw,"bool"),Iw.forEach(t),dg=n(Q,", "),Kr=r(Q,"EM",{});var Ow=i(Kr);cg=n(Ow,"optional"),Ow.forEach(t),pg=n(Q,", defaults to "),Yr=r(Q,"CODE",{});var Nw=i(Yr);hg=n(Nw,"True"),Nw.forEach(t),ug=n(Q,`):
Whether or not to encode the sequences with the special tokens relative to their model.
padding (`),Jr=r(Q,"CODE",{});var Sw=i(Jr);mg=n(Sw,"bool"),Sw.forEach(t),fg=n(Q,", "),Zr=r(Q,"CODE",{});var Bw=i(Zr);gg=n(Bw,"str"),Bw.forEach(t),_g=n(Q," or "),us=r(Q,"A",{href:!0});var Rw=i(us);kg=n(Rw,"PaddingStrategy"),Rw.forEach(t),vg=n(Q,", "),ei=r(Q,"EM",{});var Ww=i(ei);bg=n(Ww,"optional"),Ww.forEach(t),Mg=n(Q,", defaults to "),ti=r(Q,"CODE",{});var Uw=i(ti);wg=n(Uw,"False"),Uw.forEach(t),yg=n(Q,`):
Activates and controls padding. Accepts the following values:`),Q.forEach(t),xg=d(re),C=r(re,"UL",{});var N=i(C);oi=r(N,"LI",{});var Hw=i(oi);qt=r(Hw,"P",{});var Hl=i(qt);ni=r(Hl,"CODE",{});var Vw=i(ni);Tg=n(Vw,"True"),Vw.forEach(t),Eg=n(Hl," or "),si=r(Hl,"CODE",{});var Qw=i(si);Lg=n(Qw,"'longest'"),Qw.forEach(t),qg=n(Hl,`: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).`),Hl.forEach(t),Hw.forEach(t),$g=d(N),ai=r(N,"LI",{});var Xw=i(ai);$t=r(Xw,"P",{});var Vl=i($t);ri=r(Vl,"CODE",{});var Gw=i(ri);Fg=n(Gw,"'max_length'"),Gw.forEach(t),zg=n(Vl,": Pad to a maximum length specified with the argument "),ii=r(Vl,"CODE",{});var Kw=i(ii);jg=n(Kw,"max_length"),Kw.forEach(t),Cg=n(Vl,` or to the maximum
acceptable input length for the model if that argument is not provided.`),Vl.forEach(t),Xw.forEach(t),Pg=d(N),li=r(N,"LI",{});var Yw=i(li);U=r(Yw,"P",{});var ae=i(U);di=r(ae,"CODE",{});var Jw=i(di);Dg=n(Jw,"False"),Jw.forEach(t),Ag=n(ae," or "),ci=r(ae,"CODE",{});var Zw=i(ci);Ig=n(Zw,"'do_not_pad'"),Zw.forEach(t),Og=n(ae,` (default): No padding (i.e., can output a batch with sequences of different
lengths).
truncation (`),pi=r(ae,"CODE",{});var e2=i(pi);Ng=n(e2,"bool"),e2.forEach(t),Sg=n(ae,", "),hi=r(ae,"CODE",{});var t2=i(hi);Bg=n(t2,"str"),t2.forEach(t),Rg=n(ae," or "),ms=r(ae,"A",{href:!0});var o2=i(ms);Wg=n(o2,"TruncationStrategy"),o2.forEach(t),Ug=n(ae,", "),ui=r(ae,"EM",{});var n2=i(ui);Hg=n(n2,"optional"),n2.forEach(t),Vg=n(ae,", defaults to "),mi=r(ae,"CODE",{});var s2=i(mi);Qg=n(s2,"False"),s2.forEach(t),Xg=n(ae,`):
Activates and controls truncation. Accepts the following values:`),ae.forEach(t),Yw.forEach(t),Gg=d(N),fi=r(N,"LI",{});var a2=i(fi);Ae=r(a2,"P",{});var wn=i(Ae);gi=r(wn,"CODE",{});var r2=i(gi);Kg=n(r2,"True"),r2.forEach(t),Yg=n(wn," or "),_i=r(wn,"CODE",{});var i2=i(_i);Jg=n(i2,"'longest_first'"),i2.forEach(t),Zg=n(wn,": Truncate to a maximum length specified with the argument "),ki=r(wn,"CODE",{});var l2=i(ki);e_=n(l2,"max_length"),l2.forEach(t),t_=n(wn,` or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.`),wn.forEach(t),a2.forEach(t),o_=d(N),vi=r(N,"LI",{});var d2=i(vi);Ft=r(d2,"P",{});var Ql=i(Ft);bi=r(Ql,"CODE",{});var c2=i(bi);n_=n(c2,"'only_first'"),c2.forEach(t),s_=n(Ql,": Truncate to a maximum length specified with the argument "),Mi=r(Ql,"CODE",{});var p2=i(Mi);a_=n(p2,"max_length"),p2.forEach(t),r_=n(Ql,` or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.`),Ql.forEach(t),d2.forEach(t),i_=d(N),wi=r(N,"LI",{});var h2=i(wi);zt=r(h2,"P",{});var Xl=i(zt);yi=r(Xl,"CODE",{});var u2=i(yi);l_=n(u2,"'only_second'"),u2.forEach(t),d_=n(Xl,": Truncate to a maximum length specified with the argument "),xi=r(Xl,"CODE",{});var m2=i(xi);c_=n(m2,"max_length"),m2.forEach(t),p_=n(Xl,` or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.`),Xl.forEach(t),h2.forEach(t),h_=d(N),Ti=r(N,"LI",{});var f2=i(Ti);L=r(f2,"P",{});var $=i(L);Ei=r($,"CODE",{});var g2=i(Ei);u_=n(g2,"False"),g2.forEach(t),m_=n($," or "),Li=r($,"CODE",{});var _2=i(Li);f_=n(_2,"'do_not_truncate'"),_2.forEach(t),g_=n($,` (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).
max_length (`),qi=r($,"CODE",{});var k2=i(qi);__=n(k2,"int"),k2.forEach(t),k_=n($,", "),$i=r($,"EM",{});var v2=i($i);v_=n(v2,"optional"),v2.forEach(t),b_=n($,`):
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
`),Fi=r($,"CODE",{});var b2=i(Fi);M_=n(b2,"None"),b2.forEach(t),w_=n($,`, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.
stride (`),zi=r($,"CODE",{});var M2=i(zi);y_=n(M2,"int"),M2.forEach(t),x_=n($,", "),ji=r($,"EM",{});var w2=i(ji);T_=n(w2,"optional"),w2.forEach(t),E_=n($,`, defaults to 0):
If set to a number along with `),Ci=r($,"CODE",{});var y2=i(Ci);L_=n(y2,"max_length"),y2.forEach(t),q_=n($,`, the overflowing tokens returned when
`),Pi=r($,"CODE",{});var x2=i(Pi);$_=n(x2,"return_overflowing_tokens=True"),x2.forEach(t),F_=n($,` will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.
pad_to_multiple_of (`),Di=r($,"CODE",{});var T2=i(Di);z_=n(T2,"int"),T2.forEach(t),j_=n($,", "),Ai=r($,"EM",{});var E2=i(Ai);C_=n(E2,"optional"),E2.forEach(t),P_=n($,`):
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability >= 7.5 (Volta).
return_tensors (`),Ii=r($,"CODE",{});var L2=i(Ii);D_=n(L2,"str"),L2.forEach(t),A_=n($," or "),fs=r($,"A",{href:!0});var q2=i(fs);I_=n(q2,"TensorType"),q2.forEach(t),O_=n($,", "),Oi=r($,"EM",{});var $2=i(Oi);N_=n($2,"optional"),$2.forEach(t),S_=n($,`):
If set, will return tensors instead of list of python integers. Acceptable values are:`),$.forEach(t),f2.forEach(t),B_=d(N),Ni=r(N,"LI",{});var F2=i(Ni);jt=r(F2,"P",{});var Gl=i(jt);Si=r(Gl,"CODE",{});var z2=i(Si);R_=n(z2,"'tf'"),z2.forEach(t),W_=n(Gl,": Return TensorFlow "),Bi=r(Gl,"CODE",{});var j2=i(Bi);U_=n(j2,"tf.constant"),j2.forEach(t),H_=n(Gl," objects."),Gl.forEach(t),F2.forEach(t),V_=d(N),Ri=r(N,"LI",{});var C2=i(Ri);Ct=r(C2,"P",{});var Kl=i(Ct);Wi=r(Kl,"CODE",{});var P2=i(Wi);Q_=n(P2,"'pt'"),P2.forEach(t),X_=n(Kl,": Return PyTorch "),Ui=r(Kl,"CODE",{});var D2=i(Ui);G_=n(D2,"torch.Tensor"),D2.forEach(t),K_=n(Kl," objects."),Kl.forEach(t),C2.forEach(t),Y_=d(N),Hi=r(N,"LI",{});var A2=i(Hi);Pt=r(A2,"P",{});var Yl=i(Pt);Vi=r(Yl,"CODE",{});var I2=i(Vi);J_=n(I2,"'np'"),I2.forEach(t),Z_=n(Yl,": Return Numpy "),Qi=r(Yl,"CODE",{});var O2=i(Qi);ek=n(O2,"np.ndarray"),O2.forEach(t),tk=n(Yl," objects."),Yl.forEach(t),A2.forEach(t),N.forEach(t),re.forEach(t),ok=d(H),Ie=r(H,"DIV",{class:!0});var Is=i(Ie);v(Ro.$$.fragment,Is),nk=d(Is),Xi=r(Is,"P",{});var N2=i(Xi);sk=n(N2,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),N2.forEach(t),ak=d(Is),Wo=r(Is,"UL",{});var ac=i(Wo);gs=r(ac,"LI",{});var Pb=i(gs);rk=n(Pb,"single sequence: "),Gi=r(Pb,"CODE",{});var S2=i(Gi);ik=n(S2,"<s> X </s>"),S2.forEach(t),Pb.forEach(t),lk=d(ac),_s=r(ac,"LI",{});var Db=i(_s);dk=n(Db,"pair of sequences: "),Ki=r(Db,"CODE",{});var B2=i(Ki);ck=n(B2,"<s> A </s></s> B </s>"),B2.forEach(t),Db.forEach(t),ac.forEach(t),Is.forEach(t),pk=d(H),Dt=r(H,"DIV",{class:!0});var rc=i(Dt);v(Uo.$$.fragment,rc),hk=d(rc),Yi=r(rc,"P",{});var R2=i(Yi);uk=n(R2,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),R2.forEach(t),rc.forEach(t),mk=d(H),At=r(H,"DIV",{class:!0});var ic=i(At);v(Ho.$$.fragment,ic),fk=d(ic),Vo=r(ic,"P",{});var lc=i(Vo);gk=n(lc,`Tokenize and prepare for the model a sequence or a pair of sequences. .. warning:: This method is deprecated,
`),Ji=r(lc,"CODE",{});var W2=i(Ji);_k=n(W2,"__call__"),W2.forEach(t),kk=n(lc," should be used instead."),lc.forEach(t),ic.forEach(t),vk=d(H),It=r(H,"DIV",{class:!0});var dc=i(It);v(Qo.$$.fragment,dc),bk=d(dc),Zi=r(dc,"P",{});var U2=i(Zi);Mk=n(U2,`Given the xpath expression of one particular node (like \u201C/html/body/div/li[1]/div/span[2]\u201D), return a list of
tag IDs and corresponding subscripts, taking into account max depth.`),U2.forEach(t),dc.forEach(t),H.forEach(t),Od=d(s),Ke=r(s,"H2",{class:!0});var cc=i(Ke);Ot=r(cc,"A",{id:!0,class:!0,href:!0});var H2=i(Ot);el=r(H2,"SPAN",{});var V2=i(el);v(Xo.$$.fragment,V2),V2.forEach(t),H2.forEach(t),wk=d(cc),tl=r(cc,"SPAN",{});var Q2=i(tl);yk=n(Q2,"MarkupLMProcessor"),Q2.forEach(t),cc.forEach(t),Nd=d(s),te=r(s,"DIV",{class:!0});var Ne=i(te);v(Go.$$.fragment,Ne),xk=d(Ne),ol=r(Ne,"P",{});var X2=i(ol);Tk=n(X2,`Constructs a MarkupLM processor which combines a MarkupLM feature extractor and a MarkupLM tokenizer into a single
processor.`),X2.forEach(t),Ek=d(Ne),ks=r(Ne,"P",{});var Ab=i(ks);vs=r(Ab,"A",{href:!0});var G2=i(vs);Lk=n(G2,"MarkupLMProcessor"),G2.forEach(t),qk=n(Ab," offers all the functionalities you need to prepare data for the model."),Ab.forEach(t),$k=d(Ne),O=r(Ne,"P",{});var X=i(O);Fk=n(X,"It first uses "),bs=r(X,"A",{href:!0});var K2=i(bs);zk=n(K2,"MarkupLMFeatureExtractor"),K2.forEach(t),jk=n(X,` to extract nodes and corresponding xpaths from one or more HTML strings.
Next, these are provided to `),Ms=r(X,"A",{href:!0});var Y2=i(Ms);Ck=n(Y2,"MarkupLMTokenizer"),Y2.forEach(t),Pk=n(X," or "),ws=r(X,"A",{href:!0});var J2=i(ws);Dk=n(J2,"MarkupLMTokenizerFast"),J2.forEach(t),Ak=n(X,`, which turns them into token-level
`),nl=r(X,"CODE",{});var Z2=i(nl);Ik=n(Z2,"input_ids"),Z2.forEach(t),Ok=n(X,", "),sl=r(X,"CODE",{});var ey=i(sl);Nk=n(ey,"attention_mask"),ey.forEach(t),Sk=n(X,", "),al=r(X,"CODE",{});var ty=i(al);Bk=n(ty,"token_type_ids"),ty.forEach(t),Rk=n(X,", "),rl=r(X,"CODE",{});var oy=i(rl);Wk=n(oy,"xpath_tags_seq"),oy.forEach(t),Uk=n(X," and "),il=r(X,"CODE",{});var ny=i(il);Hk=n(ny,"xpath_subs_seq"),ny.forEach(t),Vk=n(X,"."),X.forEach(t),Qk=d(Ne),fe=r(Ne,"DIV",{class:!0});var Zt=i(fe);v(Ko.$$.fragment,Zt),Xk=d(Zt),oe=r(Zt,"P",{});var ye=i(oe);Gk=n(ye,"This method first forwards the "),ll=r(ye,"CODE",{});var sy=i(ll);Kk=n(sy,"html_strings"),sy.forEach(t),Yk=n(ye," argument to "),Yo=r(ye,"A",{href:!0});var Ib=i(Yo);dl=r(Ib,"STRONG",{});var ay=i(dl);Jk=n(ay,"call"),ay.forEach(t),Zk=n(Ib,"()"),Ib.forEach(t),ev=n(ye,`. Next, it
passes the `),cl=r(ye,"CODE",{});var ry=i(cl);tv=n(ry,"nodes"),ry.forEach(t),ov=n(ye," and "),pl=r(ye,"CODE",{});var iy=i(pl);nv=n(iy,"xpaths"),iy.forEach(t),sv=n(ye," along with the additional arguments to "),hl=r(ye,"CODE",{});var ly=i(hl);av=n(ly,"__call__()"),ly.forEach(t),rv=n(ye,` and
returns the output.`),ye.forEach(t),iv=d(Zt),Jo=r(Zt,"P",{});var pc=i(Jo);lv=n(pc,"Optionally, one can also provide a "),ul=r(pc,"CODE",{});var dy=i(ul);dv=n(dy,"text"),dy.forEach(t),cv=n(pc," argument which is passed along as first sequence."),pc.forEach(t),pv=d(Zt),ml=r(Zt,"P",{});var cy=i(ml);hv=n(cy,"Please refer to the docstring of the above two methods for more information."),cy.forEach(t),Zt.forEach(t),Ne.forEach(t),Sd=d(s),Ye=r(s,"H2",{class:!0});var hc=i(Ye);Nt=r(hc,"A",{id:!0,class:!0,href:!0});var py=i(Nt);fl=r(py,"SPAN",{});var hy=i(fl);v(Zo.$$.fragment,hy),hy.forEach(t),py.forEach(t),uv=d(hc),gl=r(hc,"SPAN",{});var uy=i(gl);mv=n(uy,"MarkupLMModel"),uy.forEach(t),hc.forEach(t),Bd=d(s),Ee=r(s,"DIV",{class:!0});var Os=i(Ee);v(en.$$.fragment,Os),fv=d(Os),tn=r(Os,"P",{});var uc=i(tn);gv=n(uc,`The bare MarkupLM Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),on=r(uc,"A",{href:!0,rel:!0});var my=i(on);_v=n(my,"torch.nn.Module"),my.forEach(t),kv=n(uc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),uc.forEach(t),vv=d(Os),ge=r(Os,"DIV",{class:!0});var eo=i(ge);v(nn.$$.fragment,eo),bv=d(eo),Je=r(eo,"P",{});var Ns=i(Je);Mv=n(Ns,"The "),ys=r(Ns,"A",{href:!0});var fy=i(ys);wv=n(fy,"MarkupLMModel"),fy.forEach(t),yv=n(Ns," forward method, overrides the "),_l=r(Ns,"CODE",{});var gy=i(_l);xv=n(gy,"__call__"),gy.forEach(t),Tv=n(Ns," special method."),Ns.forEach(t),Ev=d(eo),v(St.$$.fragment,eo),Lv=d(eo),v(Bt.$$.fragment,eo),eo.forEach(t),Os.forEach(t),Rd=d(s),Ze=r(s,"H2",{class:!0});var mc=i(Ze);Rt=r(mc,"A",{id:!0,class:!0,href:!0});var _y=i(Rt);kl=r(_y,"SPAN",{});var ky=i(kl);v(sn.$$.fragment,ky),ky.forEach(t),_y.forEach(t),qv=d(mc),vl=r(mc,"SPAN",{});var vy=i(vl);$v=n(vy,"MarkupLMForSequenceClassification"),vy.forEach(t),mc.forEach(t),Wd=d(s),he=r(s,"DIV",{class:!0});var to=i(he);v(an.$$.fragment,to),Fv=d(to),bl=r(to,"P",{});var by=i(bl);zv=n(by,`MarkupLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),by.forEach(t),jv=d(to),rn=r(to,"P",{});var fc=i(rn);Cv=n(fc,"This model is a PyTorch "),ln=r(fc,"A",{href:!0,rel:!0});var My=i(ln);Pv=n(My,"torch.nn.Module"),My.forEach(t),Dv=n(fc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fc.forEach(t),Av=d(to),_e=r(to,"DIV",{class:!0});var oo=i(_e);v(dn.$$.fragment,oo),Iv=d(oo),et=r(oo,"P",{});var Ss=i(et);Ov=n(Ss,"The "),xs=r(Ss,"A",{href:!0});var wy=i(xs);Nv=n(wy,"MarkupLMForSequenceClassification"),wy.forEach(t),Sv=n(Ss," forward method, overrides the "),Ml=r(Ss,"CODE",{});var yy=i(Ml);Bv=n(yy,"__call__"),yy.forEach(t),Rv=n(Ss," special method."),Ss.forEach(t),Wv=d(oo),v(Wt.$$.fragment,oo),Uv=d(oo),v(Ut.$$.fragment,oo),oo.forEach(t),to.forEach(t),Ud=d(s),tt=r(s,"H2",{class:!0});var gc=i(tt);Ht=r(gc,"A",{id:!0,class:!0,href:!0});var xy=i(Ht);wl=r(xy,"SPAN",{});var Ty=i(wl);v(cn.$$.fragment,Ty),Ty.forEach(t),xy.forEach(t),Hv=d(gc),yl=r(gc,"SPAN",{});var Ey=i(yl);Vv=n(Ey,"MarkupLMForTokenClassification"),Ey.forEach(t),gc.forEach(t),Hd=d(s),Le=r(s,"DIV",{class:!0});var Bs=i(Le);v(pn.$$.fragment,Bs),Qv=d(Bs),ot=r(Bs,"P",{});var Rs=i(ot);Xv=n(Rs,"MarkupLM Model with a "),xl=r(Rs,"CODE",{});var Ly=i(xl);Gv=n(Ly,"token_classification"),Ly.forEach(t),Kv=n(Rs,` head on top.
This model is a PyTorch `),hn=r(Rs,"A",{href:!0,rel:!0});var qy=i(hn);Yv=n(qy,"torch.nn.Module"),qy.forEach(t),Jv=n(Rs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Rs.forEach(t),Zv=d(Bs),ke=r(Bs,"DIV",{class:!0});var no=i(ke);v(un.$$.fragment,no),eb=d(no),nt=r(no,"P",{});var Ws=i(nt);tb=n(Ws,"The "),Ts=r(Ws,"A",{href:!0});var $y=i(Ts);ob=n($y,"MarkupLMForTokenClassification"),$y.forEach(t),nb=n(Ws," forward method, overrides the "),Tl=r(Ws,"CODE",{});var Fy=i(Tl);sb=n(Fy,"__call__"),Fy.forEach(t),ab=n(Ws," special method."),Ws.forEach(t),rb=d(no),v(Vt.$$.fragment,no),ib=d(no),v(Qt.$$.fragment,no),no.forEach(t),Bs.forEach(t),Vd=d(s),st=r(s,"H2",{class:!0});var _c=i(st);Xt=r(_c,"A",{id:!0,class:!0,href:!0});var zy=i(Xt);El=r(zy,"SPAN",{});var jy=i(El);v(mn.$$.fragment,jy),jy.forEach(t),zy.forEach(t),lb=d(_c),Ll=r(_c,"SPAN",{});var Cy=i(Ll);db=n(Cy,"MarkupLMForQuestionAnswering"),Cy.forEach(t),_c.forEach(t),Qd=d(s),ue=r(s,"DIV",{class:!0});var so=i(ue);v(fn.$$.fragment,so),cb=d(so),at=r(so,"P",{});var Us=i(at);pb=n(Us,`MarkupLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ql=r(Us,"CODE",{});var Py=i(ql);hb=n(Py,"span start logits"),Py.forEach(t),ub=n(Us," and "),$l=r(Us,"CODE",{});var Dy=i($l);mb=n(Dy,"span end logits"),Dy.forEach(t),fb=n(Us,")."),Us.forEach(t),gb=d(so),gn=r(so,"P",{});var kc=i(gn);_b=n(kc,"This model is a PyTorch "),_n=r(kc,"A",{href:!0,rel:!0});var Ay=i(_n);kb=n(Ay,"torch.nn.Module"),Ay.forEach(t),vb=n(kc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kc.forEach(t),bb=d(so),ve=r(so,"DIV",{class:!0});var ao=i(ve);v(kn.$$.fragment,ao),Mb=d(ao),rt=r(ao,"P",{});var Hs=i(rt);wb=n(Hs,"The "),Es=r(Hs,"A",{href:!0});var Iy=i(Es);yb=n(Iy,"MarkupLMForQuestionAnswering"),Iy.forEach(t),xb=n(Hs," forward method, overrides the "),Fl=r(Hs,"CODE",{});var Oy=i(Fl);Tb=n(Oy,"__call__"),Oy.forEach(t),Eb=n(Hs," special method."),Hs.forEach(t),Lb=d(ao),v(Gt.$$.fragment,ao),qb=d(ao),v(Kt.$$.fragment,ao),ao.forEach(t),so.forEach(t),this.h()},h(){c(m,"name","hf:doc:metadata"),c(m,"content",JSON.stringify(ox)),c(g,"id","markuplm"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#markuplm"),c(_,"class","relative group"),c(ct,"id","overview"),c(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ct,"href","#overview"),c(Se,"class","relative group"),c(io,"href","https://arxiv.org/abs/2110.08518"),c(io,"rel","nofollow"),c(yn,"href","layoutlm"),c(lo,"href","https://x-lance.github.io/WebSRC/"),c(lo,"rel","nofollow"),c(co,"href","https://www.researchgate.net/publication/221299838_From_one_tree_to_a_forest_a_unified_solution_for_structured_web_data_extraction"),c(co,"rel","nofollow"),c(Fn,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMModel.forward"),c(zn,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMProcessor"),c(jn,"href","#usage-markuplmprocessor"),c(ho,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/MarkupLM"),c(ho,"rel","nofollow"),Wy(ht.src,Ob="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/markuplm_architecture.jpg")||c(ht,"src",Ob),c(ht,"alt","drawing"),c(ht,"width","600"),c(Cn,"href","https://arxiv.org/abs/2110.08518"),c(mo,"href","https://huggingface.co/nielsr"),c(mo,"rel","nofollow"),c(fo,"href","https://github.com/microsoft/unilm/tree/master/markuplm"),c(fo,"rel","nofollow"),c(ut,"id","usage-markuplmprocessor"),c(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ut,"href","#usage-markuplmprocessor"),c(Re,"class","relative group"),c(Pn,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMProcessor"),c(Dn,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMFeatureExtractor"),c(An,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMTokenizer"),c(In,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMTokenizerFast"),c(On,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMProcessor"),c(Nn,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMFeatureExtractor"),c(Sn,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMTokenizer"),c(Bn,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMTokenizerFast"),c(Rn,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMFeatureExtractor"),c(ko,"href","https://www.crummy.com/software/BeautifulSoup/bs4/doc/"),c(ko,"rel","nofollow"),c(Wn,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMTokenizer"),c(Un,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMTokenizerFast"),c(Mo,"href","https://paperswithcode.com/dataset/swde"),c(Mo,"rel","nofollow"),c(mt,"id","transformers.MarkupLMConfig"),c(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mt,"href","#transformers.MarkupLMConfig"),c(We,"class","relative group"),c(Zn,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMModel"),c(Lo,"href","https://huggingface.co/microsoft/markuplm-base-uncased"),c(Lo,"rel","nofollow"),c(es,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"),c(ts,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"),c(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(gt,"id","transformers.MarkupLMFeatureExtractor"),c(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(gt,"href","#transformers.MarkupLMFeatureExtractor"),c(Ve,"class","relative group"),c(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(kt,"id","transformers.MarkupLMTokenizer"),c(kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(kt,"href","#transformers.MarkupLMTokenizer"),c(Qe,"class","relative group"),c(os,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMTokenizer"),c(ns,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(rs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(is,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(bt,"id","transformers.MarkupLMTokenizerFast"),c(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bt,"href","#transformers.MarkupLMTokenizerFast"),c(Xe,"class","relative group"),c(ls,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMTokenizerFast"),c(ds,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(cs,"href","/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy"),c(ps,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy"),c(hs,"href","/docs/transformers/main/en/internal/file_utils#transformers.TensorType"),c(us,"href","/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy"),c(ms,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy"),c(fs,"href","/docs/transformers/main/en/internal/file_utils#transformers.TensorType"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ot,"id","transformers.MarkupLMProcessor"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.MarkupLMProcessor"),c(Ke,"class","relative group"),c(vs,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMProcessor"),c(bs,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMFeatureExtractor"),c(Ms,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMTokenizer"),c(ws,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMTokenizerFast"),c(Yo,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMFeatureExtractor.__call__"),c(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Nt,"id","transformers.MarkupLMModel"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#transformers.MarkupLMModel"),c(Ye,"class","relative group"),c(on,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(on,"rel","nofollow"),c(ys,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMModel"),c(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Rt,"id","transformers.MarkupLMForSequenceClassification"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.MarkupLMForSequenceClassification"),c(Ze,"class","relative group"),c(ln,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ln,"rel","nofollow"),c(xs,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMForSequenceClassification"),c(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ht,"id","transformers.MarkupLMForTokenClassification"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.MarkupLMForTokenClassification"),c(tt,"class","relative group"),c(hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(hn,"rel","nofollow"),c(Ts,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMForTokenClassification"),c(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xt,"id","transformers.MarkupLMForQuestionAnswering"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.MarkupLMForQuestionAnswering"),c(st,"class","relative group"),c(_n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_n,"rel","nofollow"),c(Es,"href","/docs/transformers/main/en/model_doc/markuplm#transformers.MarkupLMForQuestionAnswering"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,h){e(document.head,m),u(s,T,h),u(s,_,h),e(_,g),e(g,x),b(p,x,null),e(_,f),e(_,G),e(G,bc),u(s,Jl,h),u(s,Se,h),e(Se,ct),e(ct,Xs),b(ro,Xs,null),e(Se,Mc),e(Se,Gs),e(Gs,wc),u(s,Zl,h),u(s,qe,h),e(qe,yc),e(qe,io),e(io,xc),e(qe,Tc),e(qe,yn),e(yn,Ec),e(qe,Lc),u(s,ed,h),u(s,xn,h),e(xn,qc),u(s,td,h),u(s,pt,h),e(pt,Tn),e(Tn,lo),e(lo,$c),e(Tn,Fc),e(pt,zc),e(pt,En),e(En,co),e(co,jc),e(En,Cc),u(s,od,h),u(s,Ln,h),e(Ln,Pc),u(s,nd,h),u(s,qn,h),e(qn,Ks),e(Ks,Dc),u(s,sd,h),u(s,$n,h),e($n,Ac),u(s,ad,h),u(s,$e,h),e($e,le),e(le,Ic),e(le,Ys),e(Ys,Oc),e(le,Nc),e(le,Fn),e(Fn,Sc),e(le,Bc),e(le,Js),e(Js,Rc),e(le,Wc),e(le,Zs),e(Zs,Uc),e(le,Hc),e($e,Vc),e($e,Be),e(Be,Qc),e(Be,zn),e(zn,Xc),e(Be,Gc),e(Be,jn),e(jn,Kc),e(Be,Yc),e($e,Jc),e($e,po),e(po,Zc),e(po,ho),e(ho,ep),e(po,tp),u(s,rd,h),u(s,ht,h),u(s,id,h),u(s,uo,h),e(uo,op),e(uo,Cn),e(Cn,np),u(s,ld,h),u(s,Fe,h),e(Fe,sp),e(Fe,mo),e(mo,ap),e(Fe,rp),e(Fe,fo),e(fo,ip),e(Fe,lp),u(s,dd,h),u(s,Re,h),e(Re,ut),e(ut,ea),b(go,ea,null),e(Re,dp),e(Re,ta),e(ta,cp),u(s,cd,h),u(s,J,h),e(J,pp),e(J,Pn),e(Pn,hp),e(J,up),e(J,Dn),e(Dn,mp),e(J,fp),e(J,An),e(An,gp),e(J,_p),e(J,In),e(In,kp),e(J,vp),e(J,oa),e(oa,bp),e(J,Mp),u(s,pd,h),b(_o,s,h),u(s,hd,h),u(s,F,h),e(F,wp),e(F,On),e(On,yp),e(F,xp),e(F,Nn),e(Nn,Tp),e(F,Ep),e(F,Sn),e(Sn,Lp),e(F,qp),e(F,Bn),e(Bn,$p),e(F,Fp),e(F,na),e(na,zp),e(F,jp),e(F,sa),e(sa,Cp),e(F,Pp),e(F,aa),e(aa,Dp),e(F,Ap),e(F,ra),e(ra,Ip),e(F,Op),e(F,ia),e(ia,Np),e(F,Sp),e(F,la),e(la,Bp),e(F,Rp),u(s,ud,h),u(s,de,h),e(de,Rn),e(Rn,Wp),e(de,Up),e(de,ko),e(ko,Hp),e(de,Vp),e(de,Wn),e(Wn,Qp),e(de,Xp),e(de,Un),e(Un,Gp),e(de,Kp),u(s,md,h),u(s,Hn,h),e(Hn,Yp),u(s,fd,h),u(s,Vn,h),e(Vn,da),e(da,Jp),u(s,gd,h),u(s,Qn,h),e(Qn,Zp),u(s,_d,h),b(vo,s,h),u(s,kd,h),u(s,Xn,h),e(Xn,ca),e(ca,eh),u(s,vd,h),u(s,ze,h),e(ze,th),e(ze,pa),e(pa,oh),e(ze,nh),e(ze,ha),e(ha,sh),e(ze,ah),u(s,bd,h),b(bo,s,h),u(s,Md,h),u(s,Gn,h),e(Gn,ua),e(ua,rh),u(s,wd,h),u(s,Z,h),e(Z,ih),e(Z,Mo),e(Mo,lh),e(Z,dh),e(Z,ma),e(ma,ch),e(Z,ph),e(Z,fa),e(fa,hh),e(Z,uh),e(Z,ga),e(ga,mh),e(Z,fh),e(Z,_a),e(_a,gh),e(Z,_h),u(s,yd,h),b(wo,s,h),u(s,xd,h),u(s,Kn,h),e(Kn,ka),e(ka,kh),u(s,Td,h),u(s,Yn,h),e(Yn,vh),u(s,Ed,h),b(yo,s,h),u(s,Ld,h),u(s,Jn,h),e(Jn,va),e(va,bh),u(s,qd,h),u(s,je,h),e(je,Mh),e(je,ba),e(ba,wh),e(je,yh),e(je,Ma),e(Ma,xh),e(je,Th),u(s,$d,h),b(xo,s,h),u(s,Fd,h),u(s,We,h),e(We,mt),e(mt,wa),b(To,wa,null),e(We,Eh),e(We,ya),e(ya,Lh),u(s,zd,h),u(s,ce,h),b(Eo,ce,null),e(ce,qh),e(ce,Ue),e(Ue,$h),e(Ue,Zn),e(Zn,Fh),e(Ue,zh),e(Ue,Lo),e(Lo,jh),e(Ue,Ch),e(ce,Ph),e(ce,He),e(He,Dh),e(He,es),e(es,Ah),e(He,Ih),e(He,ts),e(ts,Oh),e(He,Nh),e(ce,Sh),b(ft,ce,null),u(s,jd,h),u(s,Ve,h),e(Ve,gt),e(gt,xa),b(qo,xa,null),e(Ve,Bh),e(Ve,Ta),e(Ta,Rh),u(s,Cd,h),u(s,pe,h),b($o,pe,null),e(pe,Wh),e(pe,Ea),e(Ea,Uh),e(pe,Hh),e(pe,Fo),e(Fo,Vh),e(Fo,La),e(La,Qh),e(Fo,Xh),e(pe,Gh),e(pe,Ce),b(zo,Ce,null),e(Ce,Kh),e(Ce,qa),e(qa,Yh),e(Ce,Jh),b(_t,Ce,null),u(s,Pd,h),u(s,Qe,h),e(Qe,kt),e(kt,$a),b(jo,$a,null),e(Qe,Zh),e(Qe,Fa),e(Fa,eu),u(s,Dd,h),u(s,K,h),b(Co,K,null),e(K,tu),e(K,S),e(S,ou),e(S,os),e(os,nu),e(S,su),e(S,za),e(za,au),e(S,ru),e(S,ja),e(ja,iu),e(S,lu),e(S,Ca),e(Ca,du),e(S,cu),e(S,Pa),e(Pa,pu),e(S,hu),e(S,Da),e(Da,uu),e(S,mu),e(S,ns),e(ns,fu),e(S,gu),e(K,_u),e(K,Pe),b(Po,Pe,null),e(Pe,ku),e(Pe,Aa),e(Aa,vu),e(Pe,bu),e(Pe,Do),e(Do,ss),e(ss,Mu),e(ss,Ia),e(Ia,wu),e(Do,yu),e(Do,as),e(as,xu),e(as,Oa),e(Oa,Tu),e(K,Eu),e(K,rs),b(Ao,rs,null),e(K,Lu),e(K,vt),b(Io,vt,null),e(vt,qu),e(vt,Na),e(Na,$u),e(K,Fu),e(K,is),b(Oo,is,null),u(s,Ad,h),u(s,Xe,h),e(Xe,bt),e(bt,Sa),b(No,Sa,null),e(Xe,zu),e(Xe,Ba),e(Ba,ju),u(s,Id,h),u(s,j,h),b(So,j,null),e(j,Cu),e(j,Ra),e(Ra,Pu),e(j,Du),e(j,B),e(B,ls),e(ls,Au),e(B,Iu),e(B,Wa),e(Wa,Ou),e(B,Nu),e(B,Ua),e(Ua,Su),e(B,Bu),e(B,Ha),e(Ha,Ru),e(B,Wu),e(B,Va),e(Va,Uu),e(B,Hu),e(B,Qa),e(Qa,Vu),e(B,Qu),e(B,ds),e(ds,Xu),e(B,Gu),e(j,Ku),e(j,Xa),e(Xa,Yu),e(j,Ju),e(j,R),b(Bo,R,null),e(R,Zu),e(R,A),e(A,em),e(A,Ga),e(Ga,tm),e(A,om),e(A,Ka),e(Ka,nm),e(A,sm),e(A,Ya),e(Ya,am),e(A,rm),e(A,Ja),e(Ja,im),e(A,lm),e(A,Za),e(Za,dm),e(A,cm),e(A,cs),e(cs,pm),e(A,hm),e(A,er),e(er,um),e(A,mm),e(A,tr),e(tr,fm),e(A,gm),e(R,_m),e(R,Y),e(Y,or),e(or,Mt),e(Mt,nr),e(nr,km),e(Mt,vm),e(Mt,sr),e(sr,bm),e(Mt,Mm),e(Y,wm),e(Y,ar),e(ar,wt),e(wt,rr),e(rr,ym),e(wt,xm),e(wt,ir),e(ir,Tm),e(wt,Em),e(Y,Lm),e(Y,lr),e(lr,W),e(W,dr),e(dr,qm),e(W,$m),e(W,cr),e(cr,Fm),e(W,zm),e(W,pr),e(pr,jm),e(W,Cm),e(W,hr),e(hr,Pm),e(W,Dm),e(W,ps),e(ps,Am),e(W,Im),e(W,ur),e(ur,Om),e(W,Nm),e(W,mr),e(mr,Sm),e(W,Bm),e(Y,Rm),e(Y,fr),e(fr,De),e(De,gr),e(gr,Wm),e(De,Um),e(De,_r),e(_r,Hm),e(De,Vm),e(De,kr),e(kr,Qm),e(De,Xm),e(Y,Gm),e(Y,vr),e(vr,yt),e(yt,br),e(br,Km),e(yt,Ym),e(yt,Mr),e(Mr,Jm),e(yt,Zm),e(Y,ef),e(Y,wr),e(wr,xt),e(xt,yr),e(yr,tf),e(xt,of),e(xt,xr),e(xr,nf),e(xt,sf),e(Y,af),e(Y,Tr),e(Tr,me),e(me,Er),e(Er,rf),e(me,lf),e(me,Lr),e(Lr,df),e(me,cf),e(me,qr),e(qr,pf),e(me,hf),e(me,$r),e($r,uf),e(me,mf),e(R,ff),e(R,E),e(E,gf),e(E,Fr),e(Fr,_f),e(E,kf),e(E,zr),e(zr,vf),e(E,bf),e(E,jr),e(jr,Mf),e(E,wf),e(E,Cr),e(Cr,yf),e(E,xf),e(E,Pr),e(Pr,Tf),e(E,Ef),e(E,Dr),e(Dr,Lf),e(E,qf),e(E,Ar),e(Ar,$f),e(E,Ff),e(E,Ir),e(Ir,zf),e(E,jf),e(E,Or),e(Or,Cf),e(E,Pf),e(E,Nr),e(Nr,Df),e(E,Af),e(E,Sr),e(Sr,If),e(E,Of),e(E,Br),e(Br,Nf),e(E,Sf),e(E,hs),e(hs,Bf),e(E,Rf),e(E,Rr),e(Rr,Wf),e(E,Uf),e(R,Hf),e(R,Ge),e(Ge,Tt),e(Tt,Wr),e(Wr,Vf),e(Tt,Qf),e(Tt,Ur),e(Ur,Xf),e(Tt,Gf),e(Ge,Kf),e(Ge,Et),e(Et,Hr),e(Hr,Yf),e(Et,Jf),e(Et,Vr),e(Vr,Zf),e(Et,eg),e(Ge,tg),e(Ge,Lt),e(Lt,Qr),e(Qr,og),e(Lt,ng),e(Lt,Xr),e(Xr,sg),e(Lt,ag),e(R,rg),e(R,I),e(I,ig),e(I,Gr),e(Gr,lg),e(I,dg),e(I,Kr),e(Kr,cg),e(I,pg),e(I,Yr),e(Yr,hg),e(I,ug),e(I,Jr),e(Jr,mg),e(I,fg),e(I,Zr),e(Zr,gg),e(I,_g),e(I,us),e(us,kg),e(I,vg),e(I,ei),e(ei,bg),e(I,Mg),e(I,ti),e(ti,wg),e(I,yg),e(R,xg),e(R,C),e(C,oi),e(oi,qt),e(qt,ni),e(ni,Tg),e(qt,Eg),e(qt,si),e(si,Lg),e(qt,qg),e(C,$g),e(C,ai),e(ai,$t),e($t,ri),e(ri,Fg),e($t,zg),e($t,ii),e(ii,jg),e($t,Cg),e(C,Pg),e(C,li),e(li,U),e(U,di),e(di,Dg),e(U,Ag),e(U,ci),e(ci,Ig),e(U,Og),e(U,pi),e(pi,Ng),e(U,Sg),e(U,hi),e(hi,Bg),e(U,Rg),e(U,ms),e(ms,Wg),e(U,Ug),e(U,ui),e(ui,Hg),e(U,Vg),e(U,mi),e(mi,Qg),e(U,Xg),e(C,Gg),e(C,fi),e(fi,Ae),e(Ae,gi),e(gi,Kg),e(Ae,Yg),e(Ae,_i),e(_i,Jg),e(Ae,Zg),e(Ae,ki),e(ki,e_),e(Ae,t_),e(C,o_),e(C,vi),e(vi,Ft),e(Ft,bi),e(bi,n_),e(Ft,s_),e(Ft,Mi),e(Mi,a_),e(Ft,r_),e(C,i_),e(C,wi),e(wi,zt),e(zt,yi),e(yi,l_),e(zt,d_),e(zt,xi),e(xi,c_),e(zt,p_),e(C,h_),e(C,Ti),e(Ti,L),e(L,Ei),e(Ei,u_),e(L,m_),e(L,Li),e(Li,f_),e(L,g_),e(L,qi),e(qi,__),e(L,k_),e(L,$i),e($i,v_),e(L,b_),e(L,Fi),e(Fi,M_),e(L,w_),e(L,zi),e(zi,y_),e(L,x_),e(L,ji),e(ji,T_),e(L,E_),e(L,Ci),e(Ci,L_),e(L,q_),e(L,Pi),e(Pi,$_),e(L,F_),e(L,Di),e(Di,z_),e(L,j_),e(L,Ai),e(Ai,C_),e(L,P_),e(L,Ii),e(Ii,D_),e(L,A_),e(L,fs),e(fs,I_),e(L,O_),e(L,Oi),e(Oi,N_),e(L,S_),e(C,B_),e(C,Ni),e(Ni,jt),e(jt,Si),e(Si,R_),e(jt,W_),e(jt,Bi),e(Bi,U_),e(jt,H_),e(C,V_),e(C,Ri),e(Ri,Ct),e(Ct,Wi),e(Wi,Q_),e(Ct,X_),e(Ct,Ui),e(Ui,G_),e(Ct,K_),e(C,Y_),e(C,Hi),e(Hi,Pt),e(Pt,Vi),e(Vi,J_),e(Pt,Z_),e(Pt,Qi),e(Qi,ek),e(Pt,tk),e(j,ok),e(j,Ie),b(Ro,Ie,null),e(Ie,nk),e(Ie,Xi),e(Xi,sk),e(Ie,ak),e(Ie,Wo),e(Wo,gs),e(gs,rk),e(gs,Gi),e(Gi,ik),e(Wo,lk),e(Wo,_s),e(_s,dk),e(_s,Ki),e(Ki,ck),e(j,pk),e(j,Dt),b(Uo,Dt,null),e(Dt,hk),e(Dt,Yi),e(Yi,uk),e(j,mk),e(j,At),b(Ho,At,null),e(At,fk),e(At,Vo),e(Vo,gk),e(Vo,Ji),e(Ji,_k),e(Vo,kk),e(j,vk),e(j,It),b(Qo,It,null),e(It,bk),e(It,Zi),e(Zi,Mk),u(s,Od,h),u(s,Ke,h),e(Ke,Ot),e(Ot,el),b(Xo,el,null),e(Ke,wk),e(Ke,tl),e(tl,yk),u(s,Nd,h),u(s,te,h),b(Go,te,null),e(te,xk),e(te,ol),e(ol,Tk),e(te,Ek),e(te,ks),e(ks,vs),e(vs,Lk),e(ks,qk),e(te,$k),e(te,O),e(O,Fk),e(O,bs),e(bs,zk),e(O,jk),e(O,Ms),e(Ms,Ck),e(O,Pk),e(O,ws),e(ws,Dk),e(O,Ak),e(O,nl),e(nl,Ik),e(O,Ok),e(O,sl),e(sl,Nk),e(O,Sk),e(O,al),e(al,Bk),e(O,Rk),e(O,rl),e(rl,Wk),e(O,Uk),e(O,il),e(il,Hk),e(O,Vk),e(te,Qk),e(te,fe),b(Ko,fe,null),e(fe,Xk),e(fe,oe),e(oe,Gk),e(oe,ll),e(ll,Kk),e(oe,Yk),e(oe,Yo),e(Yo,dl),e(dl,Jk),e(Yo,Zk),e(oe,ev),e(oe,cl),e(cl,tv),e(oe,ov),e(oe,pl),e(pl,nv),e(oe,sv),e(oe,hl),e(hl,av),e(oe,rv),e(fe,iv),e(fe,Jo),e(Jo,lv),e(Jo,ul),e(ul,dv),e(Jo,cv),e(fe,pv),e(fe,ml),e(ml,hv),u(s,Sd,h),u(s,Ye,h),e(Ye,Nt),e(Nt,fl),b(Zo,fl,null),e(Ye,uv),e(Ye,gl),e(gl,mv),u(s,Bd,h),u(s,Ee,h),b(en,Ee,null),e(Ee,fv),e(Ee,tn),e(tn,gv),e(tn,on),e(on,_v),e(tn,kv),e(Ee,vv),e(Ee,ge),b(nn,ge,null),e(ge,bv),e(ge,Je),e(Je,Mv),e(Je,ys),e(ys,wv),e(Je,yv),e(Je,_l),e(_l,xv),e(Je,Tv),e(ge,Ev),b(St,ge,null),e(ge,Lv),b(Bt,ge,null),u(s,Rd,h),u(s,Ze,h),e(Ze,Rt),e(Rt,kl),b(sn,kl,null),e(Ze,qv),e(Ze,vl),e(vl,$v),u(s,Wd,h),u(s,he,h),b(an,he,null),e(he,Fv),e(he,bl),e(bl,zv),e(he,jv),e(he,rn),e(rn,Cv),e(rn,ln),e(ln,Pv),e(rn,Dv),e(he,Av),e(he,_e),b(dn,_e,null),e(_e,Iv),e(_e,et),e(et,Ov),e(et,xs),e(xs,Nv),e(et,Sv),e(et,Ml),e(Ml,Bv),e(et,Rv),e(_e,Wv),b(Wt,_e,null),e(_e,Uv),b(Ut,_e,null),u(s,Ud,h),u(s,tt,h),e(tt,Ht),e(Ht,wl),b(cn,wl,null),e(tt,Hv),e(tt,yl),e(yl,Vv),u(s,Hd,h),u(s,Le,h),b(pn,Le,null),e(Le,Qv),e(Le,ot),e(ot,Xv),e(ot,xl),e(xl,Gv),e(ot,Kv),e(ot,hn),e(hn,Yv),e(ot,Jv),e(Le,Zv),e(Le,ke),b(un,ke,null),e(ke,eb),e(ke,nt),e(nt,tb),e(nt,Ts),e(Ts,ob),e(nt,nb),e(nt,Tl),e(Tl,sb),e(nt,ab),e(ke,rb),b(Vt,ke,null),e(ke,ib),b(Qt,ke,null),u(s,Vd,h),u(s,st,h),e(st,Xt),e(Xt,El),b(mn,El,null),e(st,lb),e(st,Ll),e(Ll,db),u(s,Qd,h),u(s,ue,h),b(fn,ue,null),e(ue,cb),e(ue,at),e(at,pb),e(at,ql),e(ql,hb),e(at,ub),e(at,$l),e($l,mb),e(at,fb),e(ue,gb),e(ue,gn),e(gn,_b),e(gn,_n),e(_n,kb),e(gn,vb),e(ue,bb),e(ue,ve),b(kn,ve,null),e(ve,Mb),e(ve,rt),e(rt,wb),e(rt,Es),e(Es,yb),e(rt,xb),e(rt,Fl),e(Fl,Tb),e(rt,Eb),e(ve,Lb),b(Gt,ve,null),e(ve,qb),b(Kt,ve,null),Xd=!0},p(s,[h]){const vn={};h&2&&(vn.$$scope={dirty:h,ctx:s}),ft.$set(vn);const zl={};h&2&&(zl.$$scope={dirty:h,ctx:s}),_t.$set(zl);const jl={};h&2&&(jl.$$scope={dirty:h,ctx:s}),St.$set(jl);const Cl={};h&2&&(Cl.$$scope={dirty:h,ctx:s}),Bt.$set(Cl);const bn={};h&2&&(bn.$$scope={dirty:h,ctx:s}),Wt.$set(bn);const Pl={};h&2&&(Pl.$$scope={dirty:h,ctx:s}),Ut.$set(Pl);const Dl={};h&2&&(Dl.$$scope={dirty:h,ctx:s}),Vt.$set(Dl);const Al={};h&2&&(Al.$$scope={dirty:h,ctx:s}),Qt.$set(Al);const it={};h&2&&(it.$$scope={dirty:h,ctx:s}),Gt.$set(it);const Il={};h&2&&(Il.$$scope={dirty:h,ctx:s}),Kt.$set(Il)},i(s){Xd||(M(p.$$.fragment,s),M(ro.$$.fragment,s),M(go.$$.fragment,s),M(_o.$$.fragment,s),M(vo.$$.fragment,s),M(bo.$$.fragment,s),M(wo.$$.fragment,s),M(yo.$$.fragment,s),M(xo.$$.fragment,s),M(To.$$.fragment,s),M(Eo.$$.fragment,s),M(ft.$$.fragment,s),M(qo.$$.fragment,s),M($o.$$.fragment,s),M(zo.$$.fragment,s),M(_t.$$.fragment,s),M(jo.$$.fragment,s),M(Co.$$.fragment,s),M(Po.$$.fragment,s),M(Ao.$$.fragment,s),M(Io.$$.fragment,s),M(Oo.$$.fragment,s),M(No.$$.fragment,s),M(So.$$.fragment,s),M(Bo.$$.fragment,s),M(Ro.$$.fragment,s),M(Uo.$$.fragment,s),M(Ho.$$.fragment,s),M(Qo.$$.fragment,s),M(Xo.$$.fragment,s),M(Go.$$.fragment,s),M(Ko.$$.fragment,s),M(Zo.$$.fragment,s),M(en.$$.fragment,s),M(nn.$$.fragment,s),M(St.$$.fragment,s),M(Bt.$$.fragment,s),M(sn.$$.fragment,s),M(an.$$.fragment,s),M(dn.$$.fragment,s),M(Wt.$$.fragment,s),M(Ut.$$.fragment,s),M(cn.$$.fragment,s),M(pn.$$.fragment,s),M(un.$$.fragment,s),M(Vt.$$.fragment,s),M(Qt.$$.fragment,s),M(mn.$$.fragment,s),M(fn.$$.fragment,s),M(kn.$$.fragment,s),M(Gt.$$.fragment,s),M(Kt.$$.fragment,s),Xd=!0)},o(s){w(p.$$.fragment,s),w(ro.$$.fragment,s),w(go.$$.fragment,s),w(_o.$$.fragment,s),w(vo.$$.fragment,s),w(bo.$$.fragment,s),w(wo.$$.fragment,s),w(yo.$$.fragment,s),w(xo.$$.fragment,s),w(To.$$.fragment,s),w(Eo.$$.fragment,s),w(ft.$$.fragment,s),w(qo.$$.fragment,s),w($o.$$.fragment,s),w(zo.$$.fragment,s),w(_t.$$.fragment,s),w(jo.$$.fragment,s),w(Co.$$.fragment,s),w(Po.$$.fragment,s),w(Ao.$$.fragment,s),w(Io.$$.fragment,s),w(Oo.$$.fragment,s),w(No.$$.fragment,s),w(So.$$.fragment,s),w(Bo.$$.fragment,s),w(Ro.$$.fragment,s),w(Uo.$$.fragment,s),w(Ho.$$.fragment,s),w(Qo.$$.fragment,s),w(Xo.$$.fragment,s),w(Go.$$.fragment,s),w(Ko.$$.fragment,s),w(Zo.$$.fragment,s),w(en.$$.fragment,s),w(nn.$$.fragment,s),w(St.$$.fragment,s),w(Bt.$$.fragment,s),w(sn.$$.fragment,s),w(an.$$.fragment,s),w(dn.$$.fragment,s),w(Wt.$$.fragment,s),w(Ut.$$.fragment,s),w(cn.$$.fragment,s),w(pn.$$.fragment,s),w(un.$$.fragment,s),w(Vt.$$.fragment,s),w(Qt.$$.fragment,s),w(mn.$$.fragment,s),w(fn.$$.fragment,s),w(kn.$$.fragment,s),w(Gt.$$.fragment,s),w(Kt.$$.fragment,s),Xd=!1},d(s){t(m),s&&t(T),s&&t(_),y(p),s&&t(Jl),s&&t(Se),y(ro),s&&t(Zl),s&&t(qe),s&&t(ed),s&&t(xn),s&&t(td),s&&t(pt),s&&t(od),s&&t(Ln),s&&t(nd),s&&t(qn),s&&t(sd),s&&t($n),s&&t(ad),s&&t($e),s&&t(rd),s&&t(ht),s&&t(id),s&&t(uo),s&&t(ld),s&&t(Fe),s&&t(dd),s&&t(Re),y(go),s&&t(cd),s&&t(J),s&&t(pd),y(_o,s),s&&t(hd),s&&t(F),s&&t(ud),s&&t(de),s&&t(md),s&&t(Hn),s&&t(fd),s&&t(Vn),s&&t(gd),s&&t(Qn),s&&t(_d),y(vo,s),s&&t(kd),s&&t(Xn),s&&t(vd),s&&t(ze),s&&t(bd),y(bo,s),s&&t(Md),s&&t(Gn),s&&t(wd),s&&t(Z),s&&t(yd),y(wo,s),s&&t(xd),s&&t(Kn),s&&t(Td),s&&t(Yn),s&&t(Ed),y(yo,s),s&&t(Ld),s&&t(Jn),s&&t(qd),s&&t(je),s&&t($d),y(xo,s),s&&t(Fd),s&&t(We),y(To),s&&t(zd),s&&t(ce),y(Eo),y(ft),s&&t(jd),s&&t(Ve),y(qo),s&&t(Cd),s&&t(pe),y($o),y(zo),y(_t),s&&t(Pd),s&&t(Qe),y(jo),s&&t(Dd),s&&t(K),y(Co),y(Po),y(Ao),y(Io),y(Oo),s&&t(Ad),s&&t(Xe),y(No),s&&t(Id),s&&t(j),y(So),y(Bo),y(Ro),y(Uo),y(Ho),y(Qo),s&&t(Od),s&&t(Ke),y(Xo),s&&t(Nd),s&&t(te),y(Go),y(Ko),s&&t(Sd),s&&t(Ye),y(Zo),s&&t(Bd),s&&t(Ee),y(en),y(nn),y(St),y(Bt),s&&t(Rd),s&&t(Ze),y(sn),s&&t(Wd),s&&t(he),y(an),y(dn),y(Wt),y(Ut),s&&t(Ud),s&&t(tt),y(cn),s&&t(Hd),s&&t(Le),y(pn),y(un),y(Vt),y(Qt),s&&t(Vd),s&&t(st),y(mn),s&&t(Qd),s&&t(ue),y(fn),y(kn),y(Gt),y(Kt)}}}const ox={local:"markuplm",sections:[{local:"overview",title:"Overview"},{local:"usage-markuplmprocessor",title:"Usage: MarkupLMProcessor"},{local:"transformers.MarkupLMConfig",title:"MarkupLMConfig"},{local:"transformers.MarkupLMFeatureExtractor",title:"MarkupLMFeatureExtractor"},{local:"transformers.MarkupLMTokenizer",title:"MarkupLMTokenizer"},{local:"transformers.MarkupLMTokenizerFast",title:"MarkupLMTokenizerFast"},{local:"transformers.MarkupLMProcessor",title:"MarkupLMProcessor"},{local:"transformers.MarkupLMModel",title:"MarkupLMModel"},{local:"transformers.MarkupLMForSequenceClassification",title:"MarkupLMForSequenceClassification"},{local:"transformers.MarkupLMForTokenClassification",title:"MarkupLMForTokenClassification"},{local:"transformers.MarkupLMForQuestionAnswering",title:"MarkupLMForQuestionAnswering"}],title:"MarkupLM"};function nx(P){return Uy(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cx extends Ny{constructor(m){super();Sy(this,m,nx,tx,By,{})}}export{cx as default,ox as metadata};
