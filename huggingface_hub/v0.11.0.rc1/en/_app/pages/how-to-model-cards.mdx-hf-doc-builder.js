import{S as Ar,i as Dr,s as qr,e as r,k as c,w as f,t as l,M as Rr,c as o,d as e,m as h,a as i,x as m,h as n,b as d,G as s,g as p,y as g,q as _,o as v,B as j,v as Hr}from"../chunks/vendor-hf-doc-builder.js";import{T as vn}from"../chunks/Tip-hf-doc-builder.js";import{I as ga}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as M}from"../chunks/CodeBlock-hf-doc-builder.js";function Nr(z){let u,x,$;return{c(){u=r("p"),x=r("a"),$=l("New (beta)! Try our experimental Model Card Creator App"),this.h()},l(y){u=o(y,"P",{});var E=i(u);x=o(E,"A",{href:!0,rel:!0});var b=i(x);$=n(b,"New (beta)! Try our experimental Model Card Creator App"),b.forEach(e),E.forEach(e),this.h()},h(){d(x,"href","https://huggingface.co/spaces/huggingface/Model_Cards_Writing_Tool"),d(x,"rel","nofollow")},m(y,E){p(y,u,E),s(u,x),s(x,$)},d(y){y&&e(u)}}}function Sr(z){let u,x,$,y,E,b,q,A;return{c(){u=r("p"),x=l("Note that you will have to have Jinja2 installed to use "),$=r("code"),y=l("from_template"),E=l(". You can do so with "),b=r("code"),q=l("pip install Jinja2"),A=l(".")},l(T){u=o(T,"P",{});var w=i(u);x=n(w,"Note that you will have to have Jinja2 installed to use "),$=o(w,"CODE",{});var k=i($);y=n(k,"from_template"),k.forEach(e),E=n(w,". You can do so with "),b=o(w,"CODE",{});var O=i(b);q=n(O,"pip install Jinja2"),O.forEach(e),A=n(w,"."),w.forEach(e)},m(T,w){p(T,u,w),s(u,x),s(u,$),s($,y),s(u,E),s(u,b),s(b,q),s(u,A)},d(T){T&&e(u)}}}function Ir(z){let u,x,$,y,E,b,q,A;return{c(){u=r("p"),x=l("Note that using this function requires you to include the "),$=r("code"),y=l("model_name"),E=l(" attribute in "),b=r("a"),q=l("ModelCardData"),A=l("."),this.h()},l(T){u=o(T,"P",{});var w=i(u);x=n(w,"Note that using this function requires you to include the "),$=o(w,"CODE",{});var k=i($);y=n(k,"model_name"),k.forEach(e),E=n(w," attribute in "),b=o(w,"A",{href:!0});var O=i(b);q=n(O,"ModelCardData"),O.forEach(e),A=n(w,"."),w.forEach(e),this.h()},h(){d(b,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cards#huggingface_hub.ModelCardData")},m(T,w){p(T,u,w),s(u,x),s(u,$),s($,y),s(u,E),s(u,b),s(b,q),s(u,A)},d(T){T&&e(u)}}}function Or(z){let u,x,$,y,E,b,q,A,T,w,k,O,ve,vt,jt,_a,$t,bt,ts,V,ls,L,G,je,va,yt,$e,wt,ns,R,xt,Qa,Et,Ct,ja,be,Mt,kt,rs,$a,os,Xa,Tt,is,H,N,ye,Pt,At,Za,Dt,qt,we,Rt,Ht,Nt,K,xe,St,It,Ee,Ot,Lt,Ft,Q,Ce,Bt,Jt,Me,Ut,Yt,ps,F,X,ke,ba,Wt,Te,zt,cs,B,Z,Pe,ya,Vt,Ae,Gt,hs,aa,Kt,De,Qt,Xt,ds,wa,us,ae,Zt,fs,ea,xa,al,ee,el,sl,tl,qe,ll,ms,Ea,gs,se,nl,_s,Ca,vs,J,sa,Re,Ma,rl,He,ol,js,ta,il,Ne,pl,cl,$s,ka,bs,te,hl,ys,Ta,ws,le,dl,xs,Pa,Es,ne,ul,Cs,Aa,Ms,la,fl,re,ml,gl,ks,U,na,Se,Da,_l,Ie,vl,Ts,S,jl,qa,$l,bl,Ra,yl,wl,Ps,ra,As,Ha,Ds,Y,oa,Oe,Na,xl,Le,El,qs,D,Cl,Fe,Ml,kl,oe,Tl,Pl,ie,Al,Dl,Rs,pe,ql,Hs,Sa,Ns,ce,Rl,Ss,Ia,Is,he,Hl,Os,Oa,Ls,ia,Nl,La,Sl,Il,Fs,I,Ol,Be,Ll,Fl,Je,Bl,Jl,Bs,Fa,Js,pa,Ul,Ba,Yl,Wl,Us,W,ca,Ue,Ja,zl,Ye,Vl,Ys,C,Gl,We,Kl,Ql,de,Xl,Zl,ze,an,en,Ve,sn,tn,Ge,ln,nn,Ua,rn,on,Ws,ha,zs,Ya,Vs,da,pn,Ke,cn,hn,Gs,Wa,Ks,ua,dn,Qe,un,fn,Qs,za,Xs,fa,mn,Xe,gn,_n,Zs,Va,at;return b=new ga({}),V=new vn({props:{$$slots:{default:[Nr]},$$scope:{ctx:z}}}),va=new ga({}),$a=new M({props:{code:`from huggingface_hub import ModelCard

card = ModelCard.load('nateraw/vit-base-beans')`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> ModelCard

card = ModelCard.load(<span class="hljs-string">&#x27;nateraw/vit-base-beans&#x27;</span>)`}}),ba=new ga({}),ya=new ga({}),wa=new M({props:{code:`content = """
---
language: en
license: mit
---

# My Model Card
"""

card = ModelCard(content)
card.data.to_dict() == {'language': 'en', 'license': 'mit'}  # True`,highlighted:`content = <span class="hljs-string">&quot;&quot;&quot;
---
language: en
license: mit
---

# My Model Card
&quot;&quot;&quot;</span>

card = ModelCard(content)
card.data.to_dict() == {<span class="hljs-string">&#x27;language&#x27;</span>: <span class="hljs-string">&#x27;en&#x27;</span>, <span class="hljs-string">&#x27;license&#x27;</span>: <span class="hljs-string">&#x27;mit&#x27;</span>}  <span class="hljs-comment"># True</span>`}}),Ea=new M({props:{code:`card_data = ModelCardData(language='en', license='mit', library='timm')

example_template_var = 'nateraw'
content = f"""
---
{ card_data.to_yaml() }
---

# My Model Card

This model created by [@{example_template_var}](https://github.com/{example_template_var})
"""

card = ModelCard(content)
print(card)`,highlighted:`card_data = ModelCardData(language=<span class="hljs-string">&#x27;en&#x27;</span>, license=<span class="hljs-string">&#x27;mit&#x27;</span>, library=<span class="hljs-string">&#x27;timm&#x27;</span>)

example_template_var = <span class="hljs-string">&#x27;nateraw&#x27;</span>
content = <span class="hljs-string">f&quot;&quot;&quot;
---
<span class="hljs-subst">{ card_data.to_yaml() }</span>
---

# My Model Card

This model created by [@<span class="hljs-subst">{example_template_var}</span>](https://github.com/<span class="hljs-subst">{example_template_var}</span>)
&quot;&quot;&quot;</span>

card = ModelCard(content)
<span class="hljs-built_in">print</span>(card)`}}),Ca=new M({props:{code:`---
language: en
license: mit
library: timm
---

# My Model Card

This model created by [@nateraw](https://github.com/nateraw)`,highlighted:`<span class="hljs-meta">---</span>
<span class="hljs-attr">language:</span> <span class="hljs-string">en</span>
<span class="hljs-attr">license:</span> <span class="hljs-string">mit</span>
<span class="hljs-attr">library:</span> <span class="hljs-string">timm</span>
<span class="hljs-meta">---
</span>
<span class="hljs-comment"># My Model Card</span>

<span class="hljs-string">This</span> <span class="hljs-string">model</span> <span class="hljs-string">created</span> <span class="hljs-string">by</span> [<span class="hljs-string">@nateraw</span>]<span class="hljs-string">(https://github.com/nateraw)</span>`}}),Ma=new ga({}),ka=new M({props:{code:`from pathlib import Path

from huggingface_hub import ModelCard, ModelCardData

# Define your jinja template
template_text = """
---
{{ card_data }}
---

# Model Card for MyCoolModel

This model does this and that.

This model was created by [@{{ author }}](https://hf.co/{{author}}).
""".strip()

# Write the template to a file
Path('custom_template.md').write_text(template_text)

# Define card metadata
card_data = ModelCardData(language='en', license='mit', library_name='keras')

# Create card from template, passing it any jinja template variables you want.
# In our case, we'll pass author
card = ModelCard.from_template(card_data, template_path='custom_template.md', author='nateraw')
card.save('my_model_card_1.md')
print(card)`,highlighted:`<span class="hljs-keyword">from</span> pathlib <span class="hljs-keyword">import</span> Path

<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> ModelCard, ModelCardData

<span class="hljs-comment"># Define your jinja template</span>
template_text = <span class="hljs-string">&quot;&quot;&quot;
---
{{ card_data }}
---

# Model Card for MyCoolModel

This model does this and that.

This model was created by [@{{ author }}](https://hf.co/{{author}}).
&quot;&quot;&quot;</span>.strip()

<span class="hljs-comment"># Write the template to a file</span>
Path(<span class="hljs-string">&#x27;custom_template.md&#x27;</span>).write_text(template_text)

<span class="hljs-comment"># Define card metadata</span>
card_data = ModelCardData(language=<span class="hljs-string">&#x27;en&#x27;</span>, license=<span class="hljs-string">&#x27;mit&#x27;</span>, library_name=<span class="hljs-string">&#x27;keras&#x27;</span>)

<span class="hljs-comment"># Create card from template, passing it any jinja template variables you want.</span>
<span class="hljs-comment"># In our case, we&#x27;ll pass author</span>
card = ModelCard.from_template(card_data, template_path=<span class="hljs-string">&#x27;custom_template.md&#x27;</span>, author=<span class="hljs-string">&#x27;nateraw&#x27;</span>)
card.save(<span class="hljs-string">&#x27;my_model_card_1.md&#x27;</span>)
<span class="hljs-built_in">print</span>(card)`}}),Ta=new M({props:{code:`---
language: en
license: mit
library_name: keras
---

# Model Card for MyCoolModel

This model does this and that.

This model was created by [@nateraw](https://hf.co/nateraw).`,highlighted:`<span class="hljs-meta">---</span>
<span class="hljs-attr">language:</span> <span class="hljs-string">en</span>
<span class="hljs-attr">license:</span> <span class="hljs-string">mit</span>
<span class="hljs-attr">library_name:</span> <span class="hljs-string">keras</span>
<span class="hljs-meta">---
</span>
<span class="hljs-comment"># Model Card for MyCoolModel</span>

<span class="hljs-string">This</span> <span class="hljs-string">model</span> <span class="hljs-string">does</span> <span class="hljs-string">this</span> <span class="hljs-string">and</span> <span class="hljs-string">that.</span>

<span class="hljs-string">This</span> <span class="hljs-string">model</span> <span class="hljs-string">was</span> <span class="hljs-string">created</span> <span class="hljs-string">by</span> [<span class="hljs-string">@nateraw</span>]<span class="hljs-string">(https://hf.co/nateraw).</span>`}}),Pa=new M({props:{code:`card.data.library_name = 'timm'
card.data.language = 'fr'
card.data.license = 'apache-2.0'
print(card)`,highlighted:`card<span class="hljs-selector-class">.data</span><span class="hljs-selector-class">.library_name</span> = <span class="hljs-string">&#x27;timm&#x27;</span>
card<span class="hljs-selector-class">.data</span><span class="hljs-selector-class">.language</span> = <span class="hljs-string">&#x27;fr&#x27;</span>
card<span class="hljs-selector-class">.data</span><span class="hljs-selector-class">.license</span> = <span class="hljs-string">&#x27;apache-2.0&#x27;</span>
<span class="hljs-function"><span class="hljs-title">print</span><span class="hljs-params">(card)</span></span>`}}),Aa=new M({props:{code:`---
language: fr
license: apache-2.0
library_name: timm
---

# Model Card for MyCoolModel

This model does this and that.

This model was created by [@nateraw](https://hf.co/nateraw).`,highlighted:`<span class="hljs-meta">---</span>
<span class="hljs-attr">language:</span> <span class="hljs-string">fr</span>
<span class="hljs-attr">license:</span> <span class="hljs-string">apache-2.0</span>
<span class="hljs-attr">library_name:</span> <span class="hljs-string">timm</span>
<span class="hljs-meta">---
</span>
<span class="hljs-comment"># Model Card for MyCoolModel</span>

<span class="hljs-string">This</span> <span class="hljs-string">model</span> <span class="hljs-string">does</span> <span class="hljs-string">this</span> <span class="hljs-string">and</span> <span class="hljs-string">that.</span>

<span class="hljs-string">This</span> <span class="hljs-string">model</span> <span class="hljs-string">was</span> <span class="hljs-string">created</span> <span class="hljs-string">by</span> [<span class="hljs-string">@nateraw</span>]<span class="hljs-string">(https://hf.co/nateraw).</span>`}}),Da=new ga({}),ra=new vn({props:{$$slots:{default:[Sr]},$$scope:{ctx:z}}}),Ha=new M({props:{code:`card_data = ModelCardData(language='en', license='mit', library_name='keras')
card = ModelCard.from_template(
    card_data,
    model_id='my-cool-model',
    model_description="this model does this and that",
    developers="Nate Raw",
    more_resources="https://github.com/huggingface/huggingface_hub",
)
card.save('my_model_card_2.md')
print(card)`,highlighted:`card_data = ModelCardData(language=<span class="hljs-string">&#x27;en&#x27;</span>, license=<span class="hljs-string">&#x27;mit&#x27;</span>, library_name=<span class="hljs-string">&#x27;keras&#x27;</span>)
card = ModelCard.from_template(
    card_data,
    model_id=<span class="hljs-string">&#x27;my-cool-model&#x27;</span>,
    model_description=<span class="hljs-string">&quot;this model does this and that&quot;</span>,
    developers=<span class="hljs-string">&quot;Nate Raw&quot;</span>,
    more_resources=<span class="hljs-string">&quot;https://github.com/huggingface/huggingface_hub&quot;</span>,
)
card.save(<span class="hljs-string">&#x27;my_model_card_2.md&#x27;</span>)
<span class="hljs-built_in">print</span>(card)`}}),Na=new ga({}),Sa=new M({props:{code:`from huggingface_hub import whoami, create_repo

user = whoami()['name']
repo_id = f'{user}/hf-hub-modelcards-pr-test'
url = create_repo(repo_id, exist_ok=True)`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> whoami, create_repo

user = whoami()[<span class="hljs-string">&#x27;name&#x27;</span>]
repo_id = <span class="hljs-string">f&#x27;<span class="hljs-subst">{user}</span>/hf-hub-modelcards-pr-test&#x27;</span>
url = create_repo(repo_id, exist_ok=<span class="hljs-literal">True</span>)`}}),Ia=new M({props:{code:`card_data = ModelCardData(language='en', license='mit', library_name='keras')
card = ModelCard.from_template(
    card_data,
    model_id='my-cool-model',
    model_description="this model does this and that",
    developers="Nate Raw",
    more_resources="https://github.com/huggingface/huggingface_hub",
)`,highlighted:`card_data = ModelCardData(language=<span class="hljs-string">&#x27;en&#x27;</span>, license=<span class="hljs-string">&#x27;mit&#x27;</span>, library_name=<span class="hljs-string">&#x27;keras&#x27;</span>)
card = ModelCard.from_template(
    card_data,
    model_id=<span class="hljs-string">&#x27;my-cool-model&#x27;</span>,
    model_description=<span class="hljs-string">&quot;this model does this and that&quot;</span>,
    developers=<span class="hljs-string">&quot;Nate Raw&quot;</span>,
    more_resources=<span class="hljs-string">&quot;https://github.com/huggingface/huggingface_hub&quot;</span>,
)`}}),Oa=new M({props:{code:"card.push_to_hub(repo_id)",highlighted:"card.push_to_hub(repo_id)"}}),Fa=new M({props:{code:"card.push_to_hub(repo_id, create_pr=True)",highlighted:'card.push_to_hub(repo_id, create_pr=<span class="hljs-literal">True</span>)'}}),Ja=new ga({}),ha=new vn({props:{$$slots:{default:[Ir]},$$scope:{ctx:z}}}),Ya=new M({props:{code:`card_data = ModelCardData(
    language='en',
    license='mit',
    model_name='my-cool-model',
    eval_results = EvalResult(
        task_type='image-classification',
        dataset_type='beans',
        dataset_name='Beans',
        metric_type='accuracy',
        metric_value=0.7
    )
)

card = ModelCard.from_template(card_data)
print(card.data)`,highlighted:`card_data = ModelCardData(
    language=<span class="hljs-string">&#x27;en&#x27;</span>,
    license=<span class="hljs-string">&#x27;mit&#x27;</span>,
    model_name=<span class="hljs-string">&#x27;my-cool-model&#x27;</span>,
    eval_results = EvalResult(
        task_type=<span class="hljs-string">&#x27;image-classification&#x27;</span>,
        dataset_type=<span class="hljs-string">&#x27;beans&#x27;</span>,
        dataset_name=<span class="hljs-string">&#x27;Beans&#x27;</span>,
        metric_type=<span class="hljs-string">&#x27;accuracy&#x27;</span>,
        metric_value=<span class="hljs-number">0.7</span>
    )
)

card = ModelCard.from_template(card_data)
<span class="hljs-built_in">print</span>(card.data)`}}),Wa=new M({props:{code:`language: en
license: mit
model-index:
- name: my-cool-model
  results:
  - task:
      type: image-classification
    dataset:
      name: Beans
      type: beans
    metrics:
    - type: accuracy
      value: 0.7`,highlighted:`<span class="hljs-attribute">language</span><span class="hljs-punctuation">:</span> <span class="hljs-string">en</span>
<span class="hljs-attribute">license</span><span class="hljs-punctuation">:</span> <span class="hljs-string">mit</span>
<span class="hljs-attribute">model-index</span><span class="hljs-punctuation">:</span>
<span class="hljs-bullet">-</span> <span class="hljs-string">name: my-cool-model</span>
  <span class="hljs-attribute">results</span><span class="hljs-punctuation">:</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">task:</span>
      <span class="hljs-attribute">type</span><span class="hljs-punctuation">:</span> <span class="hljs-string">image-classification</span>
    <span class="hljs-attribute">dataset</span><span class="hljs-punctuation">:</span>
      <span class="hljs-attribute">name</span><span class="hljs-punctuation">:</span> <span class="hljs-string">Beans</span>
      <span class="hljs-attribute">type</span><span class="hljs-punctuation">:</span> <span class="hljs-string">beans</span>
    <span class="hljs-attribute">metrics</span><span class="hljs-punctuation">:</span>
    <span class="hljs-bullet">-</span> <span class="hljs-string">type: accuracy</span>
      <span class="hljs-attribute">value</span><span class="hljs-punctuation">:</span> <span class="hljs-string">0.7</span>`}}),za=new M({props:{code:`card_data = ModelCardData(
    language='en',
    license='mit',
    model_name='my-cool-model',
    eval_results = [
        EvalResult(
            task_type='image-classification',
            dataset_type='beans',
            dataset_name='Beans',
            metric_type='accuracy',
            metric_value=0.7
        ),
        EvalResult(
            task_type='image-classification',
            dataset_type='beans',
            dataset_name='Beans',
            metric_type='f1',
            metric_value=0.65
        )
    ]
)
card = ModelCard.from_template(card_data)
card.data`,highlighted:`card_data = ModelCardData(
    language=<span class="hljs-string">&#x27;en&#x27;</span>,
    license=<span class="hljs-string">&#x27;mit&#x27;</span>,
    model_name=<span class="hljs-string">&#x27;my-cool-model&#x27;</span>,
    eval_results = [
        EvalResult(
            task_type=<span class="hljs-string">&#x27;image-classification&#x27;</span>,
            dataset_type=<span class="hljs-string">&#x27;beans&#x27;</span>,
            dataset_name=<span class="hljs-string">&#x27;Beans&#x27;</span>,
            metric_type=<span class="hljs-string">&#x27;accuracy&#x27;</span>,
            metric_value=<span class="hljs-number">0.7</span>
        ),
        EvalResult(
            task_type=<span class="hljs-string">&#x27;image-classification&#x27;</span>,
            dataset_type=<span class="hljs-string">&#x27;beans&#x27;</span>,
            dataset_name=<span class="hljs-string">&#x27;Beans&#x27;</span>,
            metric_type=<span class="hljs-string">&#x27;f1&#x27;</span>,
            metric_value=<span class="hljs-number">0.65</span>
        )
    ]
)
card = ModelCard.from_template(card_data)
card.data`}}),Va=new M({props:{code:`language: en
license: mit
model-index:
- name: my-cool-model
  results:
  - task:
      type: image-classification
    dataset:
      name: Beans
      type: beans
    metrics:
    - type: accuracy
      value: 0.7
    - type: f1
      value: 0.65`,highlighted:`<span class="hljs-attribute">language</span><span class="hljs-punctuation">:</span> <span class="hljs-string">en</span>
<span class="hljs-attribute">license</span><span class="hljs-punctuation">:</span> <span class="hljs-string">mit</span>
<span class="hljs-attribute">model-index</span><span class="hljs-punctuation">:</span>
<span class="hljs-bullet">-</span> <span class="hljs-string">name: my-cool-model</span>
  <span class="hljs-attribute">results</span><span class="hljs-punctuation">:</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">task:</span>
      <span class="hljs-attribute">type</span><span class="hljs-punctuation">:</span> <span class="hljs-string">image-classification</span>
    <span class="hljs-attribute">dataset</span><span class="hljs-punctuation">:</span>
      <span class="hljs-attribute">name</span><span class="hljs-punctuation">:</span> <span class="hljs-string">Beans</span>
      <span class="hljs-attribute">type</span><span class="hljs-punctuation">:</span> <span class="hljs-string">beans</span>
    <span class="hljs-attribute">metrics</span><span class="hljs-punctuation">:</span>
    <span class="hljs-bullet">-</span> <span class="hljs-string">type: accuracy</span>
      <span class="hljs-attribute">value</span><span class="hljs-punctuation">:</span> <span class="hljs-string">0.7</span>
    <span class="hljs-bullet">-</span> <span class="hljs-string">type: f1</span>
      <span class="hljs-attribute">value</span><span class="hljs-punctuation">:</span> <span class="hljs-string">0.65</span>`}}),{c(){u=r("meta"),x=c(),$=r("h1"),y=r("a"),E=r("span"),f(b.$$.fragment),q=c(),A=r("span"),T=l("Creating and Sharing Model Cards"),w=c(),k=r("p"),O=l("The "),ve=r("code"),vt=l("huggingface_hub"),jt=l(` library provides a Python interface to create, share, and update Model Cards.
Visit `),_a=r("a"),$t=l("the dedicated documentation page"),bt=l(`
for a deeper view of what Model Cards on the Hub are, and how they work under the hood.`),ts=c(),f(V.$$.fragment),ls=c(),L=r("h2"),G=r("a"),je=r("span"),f(va.$$.fragment),yt=c(),$e=r("span"),wt=l("Loading a Model Card from the Hub"),ns=c(),R=r("p"),xt=l("To load an existing card from the Hub, you can use the "),Qa=r("a"),Et=l("ModelCard.load()"),Ct=l(" function. Here, we\u2019ll load the card from "),ja=r("a"),be=r("code"),Mt=l("nateraw/vit-base-beans"),kt=l("."),rs=c(),f($a.$$.fragment),os=c(),Xa=r("p"),Tt=l("This card has some helpful attributes that you may want to access/leverage:"),is=c(),H=r("ul"),N=r("li"),ye=r("code"),Pt=l("card.data"),At=l(": Returns a "),Za=r("a"),Dt=l("ModelCardData"),qt=l(" instance with the model card\u2019s metadata. Call "),we=r("code"),Rt=l(".to_dict()"),Ht=l(" on this instance to get the representation as a dictionary."),Nt=c(),K=r("li"),xe=r("code"),St=l("card.text"),It=l(": Returns the text of the card, "),Ee=r("em"),Ot=l("excluding the metadata header"),Lt=l("."),Ft=c(),Q=r("li"),Ce=r("code"),Bt=l("card.content"),Jt=l(": Returns the text content of the card, "),Me=r("em"),Ut=l("including the metadata header"),Yt=l("."),ps=c(),F=r("h2"),X=r("a"),ke=r("span"),f(ba.$$.fragment),Wt=c(),Te=r("span"),zt=l("Creating Model Cards"),cs=c(),B=r("h3"),Z=r("a"),Pe=r("span"),f(ya.$$.fragment),Vt=c(),Ae=r("span"),Gt=l("From Text"),hs=c(),aa=r("p"),Kt=l("To initialize a Model Card from text, just pass the text content of the card to the "),De=r("code"),Qt=l("ModelCard"),Xt=l(" on init."),ds=c(),f(wa.$$.fragment),us=c(),ae=r("p"),Zt=l("Another way you might want to do this is with f-strings. In the following example, we:"),fs=c(),ea=r("ul"),xa=r("li"),al=l("Use "),ee=r("a"),el=l("ModelCardData.to_yaml()"),sl=l(" to convert metadata we defined to YAML so we can use it to insert the YAML block in the model card."),tl=c(),qe=r("li"),ll=l("Show how you might use a template variable via Python f-strings."),ms=c(),f(Ea.$$.fragment),gs=c(),se=r("p"),nl=l("The above example would leave us with a card that looks like this:"),_s=c(),f(Ca.$$.fragment),vs=c(),J=r("h3"),sa=r("a"),Re=r("span"),f(Ma.$$.fragment),rl=c(),He=r("span"),ol=l("From a Jinja Template"),js=c(),ta=r("p"),il=l("If you have "),Ne=r("code"),pl=l("Jinja2"),cl=l(" installed, you can create Model Cards from a jinja template file. Let\u2019s see a basic example:"),$s=c(),f(ka.$$.fragment),bs=c(),te=r("p"),hl=l("The resulting card\u2019s markdown looks like this:"),ys=c(),f(Ta.$$.fragment),ws=c(),le=r("p"),dl=l("If you update any card.data, it\u2019ll reflect in the card itself."),xs=c(),f(Pa.$$.fragment),Es=c(),ne=r("p"),ul=l("Now, as you can see, the metadata header has been updated:"),Cs=c(),f(Aa.$$.fragment),Ms=c(),la=r("p"),fl=l("As you update the card data, you can validate the card is still valid against the Hub by calling "),re=r("a"),ml=l("ModelCard.validate()"),gl=l(". This ensures that the card passes any validation rules set up on the Hugging Face Hub."),ks=c(),U=r("h3"),na=r("a"),Se=r("span"),f(Da.$$.fragment),_l=c(),Ie=r("span"),vl=l("From the Default Template"),Ts=c(),S=r("p"),jl=l("Instead of using your own template, you can also use the "),qa=r("a"),$l=l("default template"),bl=l(", which is a fully featured model card with tons of sections you may want to fill out. Under the hood, it uses "),Ra=r("a"),yl=l("Jinja2"),wl=l(" to fill out a template file."),Ps=c(),f(ra.$$.fragment),As=c(),f(Ha.$$.fragment),Ds=c(),Y=r("h2"),oa=r("a"),Oe=r("span"),f(Na.$$.fragment),xl=c(),Le=r("span"),El=l("Sharing Model Cards"),qs=c(),D=r("p"),Cl=l("If you\u2019re authenticated with the Hugging Face Hub (either by using "),Fe=r("code"),Ml=l("huggingface-cli login"),kl=l(" or "),oe=r("a"),Tl=l("login()"),Pl=l("), you can push cards to the Hub by simply calling "),ie=r("a"),Al=l("ModelCard.push_to_hub()"),Dl=l(". Let\u2019s take a look at how to do that\u2026"),Rs=c(),pe=r("p"),ql=l("First, we\u2019ll create a new repo called \u2018hf-hub-modelcards-pr-test\u2019 under the authenticated user\u2019s namespace:"),Hs=c(),f(Sa.$$.fragment),Ns=c(),ce=r("p"),Rl=l("Then, we\u2019ll create a card from the default template (same as the one defined in the section above):"),Ss=c(),f(Ia.$$.fragment),Is=c(),he=r("p"),Hl=l("Finally, we\u2019ll push that up to the hub"),Os=c(),f(Oa.$$.fragment),Ls=c(),ia=r("p"),Nl=l("You can check out the resulting card "),La=r("a"),Sl=l("here"),Il=l("."),Fs=c(),I=r("p"),Ol=l("If you instead wanted to push a card as a pull request, you can just say "),Be=r("code"),Ll=l("create_pr=True"),Fl=l(" when calling "),Je=r("code"),Bl=l("push_to_hub"),Jl=l(":"),Bs=c(),f(Fa.$$.fragment),Js=c(),pa=r("p"),Ul=l("A resulting PR created from this command can be seen "),Ba=r("a"),Yl=l("here"),Wl=l("."),Us=c(),W=r("h3"),ca=r("a"),Ue=r("span"),f(Ja.$$.fragment),zl=c(),Ye=r("span"),Vl=l("Including Evaluation Results"),Ys=c(),C=r("p"),Gl=l("To include evaluation results in the metadata "),We=r("code"),Kl=l("model-index"),Ql=l(", you can pass an "),de=r("a"),Xl=l("EvalResult"),Zl=l(" or a list of "),ze=r("code"),an=l("EvalResult"),en=l(" with your associated evaluation results. Under the hood it\u2019ll create the "),Ve=r("code"),sn=l("model-index"),tn=l(" when you call "),Ge=r("code"),ln=l("card.data.to_dict()"),nn=l(". For more information on how this works, you can check out "),Ua=r("a"),rn=l("this section of the Hub docs"),on=l("."),Ws=c(),f(ha.$$.fragment),zs=c(),f(Ya.$$.fragment),Vs=c(),da=r("p"),pn=l("The resulting "),Ke=r("code"),cn=l("card.data"),hn=l(" should look like this:"),Gs=c(),f(Wa.$$.fragment),Ks=c(),ua=r("p"),dn=l("If you have more than one evaluation result you\u2019d like to share, just pass a list of "),Qe=r("code"),un=l("EvalResult"),fn=l(":"),Qs=c(),f(za.$$.fragment),Xs=c(),fa=r("p"),mn=l("Which should leave you with the following "),Xe=r("code"),gn=l("card.data"),_n=l(":"),Zs=c(),f(Va.$$.fragment),this.h()},l(a){const t=Rr('[data-svelte="svelte-1phssyn"]',document.head);u=o(t,"META",{name:!0,content:!0}),t.forEach(e),x=h(a),$=o(a,"H1",{class:!0});var Ga=i($);y=o(Ga,"A",{id:!0,class:!0,href:!0});var Ze=i(y);E=o(Ze,"SPAN",{});var as=i(E);m(b.$$.fragment,as),as.forEach(e),Ze.forEach(e),q=h(Ga),A=o(Ga,"SPAN",{});var jn=i(A);T=n(jn,"Creating and Sharing Model Cards"),jn.forEach(e),Ga.forEach(e),w=h(a),k=o(a,"P",{});var ue=i(k);O=n(ue,"The "),ve=o(ue,"CODE",{});var $n=i(ve);vt=n($n,"huggingface_hub"),$n.forEach(e),jt=n(ue,` library provides a Python interface to create, share, and update Model Cards.
Visit `),_a=o(ue,"A",{href:!0,rel:!0});var bn=i(_a);$t=n(bn,"the dedicated documentation page"),bn.forEach(e),bt=n(ue,`
for a deeper view of what Model Cards on the Hub are, and how they work under the hood.`),ue.forEach(e),ts=h(a),m(V.$$.fragment,a),ls=h(a),L=o(a,"H2",{class:!0});var et=i(L);G=o(et,"A",{id:!0,class:!0,href:!0});var yn=i(G);je=o(yn,"SPAN",{});var wn=i(je);m(va.$$.fragment,wn),wn.forEach(e),yn.forEach(e),yt=h(et),$e=o(et,"SPAN",{});var xn=i($e);wt=n(xn,"Loading a Model Card from the Hub"),xn.forEach(e),et.forEach(e),ns=h(a),R=o(a,"P",{});var fe=i(R);xt=n(fe,"To load an existing card from the Hub, you can use the "),Qa=o(fe,"A",{href:!0});var En=i(Qa);Et=n(En,"ModelCard.load()"),En.forEach(e),Ct=n(fe," function. Here, we\u2019ll load the card from "),ja=o(fe,"A",{href:!0,rel:!0});var Cn=i(ja);be=o(Cn,"CODE",{});var Mn=i(be);Mt=n(Mn,"nateraw/vit-base-beans"),Mn.forEach(e),Cn.forEach(e),kt=n(fe,"."),fe.forEach(e),rs=h(a),m($a.$$.fragment,a),os=h(a),Xa=o(a,"P",{});var kn=i(Xa);Tt=n(kn,"This card has some helpful attributes that you may want to access/leverage:"),kn.forEach(e),is=h(a),H=o(a,"UL",{});var me=i(H);N=o(me,"LI",{});var Ka=i(N);ye=o(Ka,"CODE",{});var Tn=i(ye);Pt=n(Tn,"card.data"),Tn.forEach(e),At=n(Ka,": Returns a "),Za=o(Ka,"A",{href:!0});var Pn=i(Za);Dt=n(Pn,"ModelCardData"),Pn.forEach(e),qt=n(Ka," instance with the model card\u2019s metadata. Call "),we=o(Ka,"CODE",{});var An=i(we);Rt=n(An,".to_dict()"),An.forEach(e),Ht=n(Ka," on this instance to get the representation as a dictionary."),Ka.forEach(e),Nt=h(me),K=o(me,"LI",{});var es=i(K);xe=o(es,"CODE",{});var Dn=i(xe);St=n(Dn,"card.text"),Dn.forEach(e),It=n(es,": Returns the text of the card, "),Ee=o(es,"EM",{});var qn=i(Ee);Ot=n(qn,"excluding the metadata header"),qn.forEach(e),Lt=n(es,"."),es.forEach(e),Ft=h(me),Q=o(me,"LI",{});var ss=i(Q);Ce=o(ss,"CODE",{});var Rn=i(Ce);Bt=n(Rn,"card.content"),Rn.forEach(e),Jt=n(ss,": Returns the text content of the card, "),Me=o(ss,"EM",{});var Hn=i(Me);Ut=n(Hn,"including the metadata header"),Hn.forEach(e),Yt=n(ss,"."),ss.forEach(e),me.forEach(e),ps=h(a),F=o(a,"H2",{class:!0});var st=i(F);X=o(st,"A",{id:!0,class:!0,href:!0});var Nn=i(X);ke=o(Nn,"SPAN",{});var Sn=i(ke);m(ba.$$.fragment,Sn),Sn.forEach(e),Nn.forEach(e),Wt=h(st),Te=o(st,"SPAN",{});var In=i(Te);zt=n(In,"Creating Model Cards"),In.forEach(e),st.forEach(e),cs=h(a),B=o(a,"H3",{class:!0});var tt=i(B);Z=o(tt,"A",{id:!0,class:!0,href:!0});var On=i(Z);Pe=o(On,"SPAN",{});var Ln=i(Pe);m(ya.$$.fragment,Ln),Ln.forEach(e),On.forEach(e),Vt=h(tt),Ae=o(tt,"SPAN",{});var Fn=i(Ae);Gt=n(Fn,"From Text"),Fn.forEach(e),tt.forEach(e),hs=h(a),aa=o(a,"P",{});var lt=i(aa);Kt=n(lt,"To initialize a Model Card from text, just pass the text content of the card to the "),De=o(lt,"CODE",{});var Bn=i(De);Qt=n(Bn,"ModelCard"),Bn.forEach(e),Xt=n(lt," on init."),lt.forEach(e),ds=h(a),m(wa.$$.fragment,a),us=h(a),ae=o(a,"P",{});var Jn=i(ae);Zt=n(Jn,"Another way you might want to do this is with f-strings. In the following example, we:"),Jn.forEach(e),fs=h(a),ea=o(a,"UL",{});var nt=i(ea);xa=o(nt,"LI",{});var rt=i(xa);al=n(rt,"Use "),ee=o(rt,"A",{href:!0});var Un=i(ee);el=n(Un,"ModelCardData.to_yaml()"),Un.forEach(e),sl=n(rt," to convert metadata we defined to YAML so we can use it to insert the YAML block in the model card."),rt.forEach(e),tl=h(nt),qe=o(nt,"LI",{});var Yn=i(qe);ll=n(Yn,"Show how you might use a template variable via Python f-strings."),Yn.forEach(e),nt.forEach(e),ms=h(a),m(Ea.$$.fragment,a),gs=h(a),se=o(a,"P",{});var Wn=i(se);nl=n(Wn,"The above example would leave us with a card that looks like this:"),Wn.forEach(e),_s=h(a),m(Ca.$$.fragment,a),vs=h(a),J=o(a,"H3",{class:!0});var ot=i(J);sa=o(ot,"A",{id:!0,class:!0,href:!0});var zn=i(sa);Re=o(zn,"SPAN",{});var Vn=i(Re);m(Ma.$$.fragment,Vn),Vn.forEach(e),zn.forEach(e),rl=h(ot),He=o(ot,"SPAN",{});var Gn=i(He);ol=n(Gn,"From a Jinja Template"),Gn.forEach(e),ot.forEach(e),js=h(a),ta=o(a,"P",{});var it=i(ta);il=n(it,"If you have "),Ne=o(it,"CODE",{});var Kn=i(Ne);pl=n(Kn,"Jinja2"),Kn.forEach(e),cl=n(it," installed, you can create Model Cards from a jinja template file. Let\u2019s see a basic example:"),it.forEach(e),$s=h(a),m(ka.$$.fragment,a),bs=h(a),te=o(a,"P",{});var Qn=i(te);hl=n(Qn,"The resulting card\u2019s markdown looks like this:"),Qn.forEach(e),ys=h(a),m(Ta.$$.fragment,a),ws=h(a),le=o(a,"P",{});var Xn=i(le);dl=n(Xn,"If you update any card.data, it\u2019ll reflect in the card itself."),Xn.forEach(e),xs=h(a),m(Pa.$$.fragment,a),Es=h(a),ne=o(a,"P",{});var Zn=i(ne);ul=n(Zn,"Now, as you can see, the metadata header has been updated:"),Zn.forEach(e),Cs=h(a),m(Aa.$$.fragment,a),Ms=h(a),la=o(a,"P",{});var pt=i(la);fl=n(pt,"As you update the card data, you can validate the card is still valid against the Hub by calling "),re=o(pt,"A",{href:!0});var ar=i(re);ml=n(ar,"ModelCard.validate()"),ar.forEach(e),gl=n(pt,". This ensures that the card passes any validation rules set up on the Hugging Face Hub."),pt.forEach(e),ks=h(a),U=o(a,"H3",{class:!0});var ct=i(U);na=o(ct,"A",{id:!0,class:!0,href:!0});var er=i(na);Se=o(er,"SPAN",{});var sr=i(Se);m(Da.$$.fragment,sr),sr.forEach(e),er.forEach(e),_l=h(ct),Ie=o(ct,"SPAN",{});var tr=i(Ie);vl=n(tr,"From the Default Template"),tr.forEach(e),ct.forEach(e),Ts=h(a),S=o(a,"P",{});var ge=i(S);jl=n(ge,"Instead of using your own template, you can also use the "),qa=o(ge,"A",{href:!0,rel:!0});var lr=i(qa);$l=n(lr,"default template"),lr.forEach(e),bl=n(ge,", which is a fully featured model card with tons of sections you may want to fill out. Under the hood, it uses "),Ra=o(ge,"A",{href:!0,rel:!0});var nr=i(Ra);yl=n(nr,"Jinja2"),nr.forEach(e),wl=n(ge," to fill out a template file."),ge.forEach(e),Ps=h(a),m(ra.$$.fragment,a),As=h(a),m(Ha.$$.fragment,a),Ds=h(a),Y=o(a,"H2",{class:!0});var ht=i(Y);oa=o(ht,"A",{id:!0,class:!0,href:!0});var rr=i(oa);Oe=o(rr,"SPAN",{});var or=i(Oe);m(Na.$$.fragment,or),or.forEach(e),rr.forEach(e),xl=h(ht),Le=o(ht,"SPAN",{});var ir=i(Le);El=n(ir,"Sharing Model Cards"),ir.forEach(e),ht.forEach(e),qs=h(a),D=o(a,"P",{});var ma=i(D);Cl=n(ma,"If you\u2019re authenticated with the Hugging Face Hub (either by using "),Fe=o(ma,"CODE",{});var pr=i(Fe);Ml=n(pr,"huggingface-cli login"),pr.forEach(e),kl=n(ma," or "),oe=o(ma,"A",{href:!0});var cr=i(oe);Tl=n(cr,"login()"),cr.forEach(e),Pl=n(ma,"), you can push cards to the Hub by simply calling "),ie=o(ma,"A",{href:!0});var hr=i(ie);Al=n(hr,"ModelCard.push_to_hub()"),hr.forEach(e),Dl=n(ma,". Let\u2019s take a look at how to do that\u2026"),ma.forEach(e),Rs=h(a),pe=o(a,"P",{});var dr=i(pe);ql=n(dr,"First, we\u2019ll create a new repo called \u2018hf-hub-modelcards-pr-test\u2019 under the authenticated user\u2019s namespace:"),dr.forEach(e),Hs=h(a),m(Sa.$$.fragment,a),Ns=h(a),ce=o(a,"P",{});var ur=i(ce);Rl=n(ur,"Then, we\u2019ll create a card from the default template (same as the one defined in the section above):"),ur.forEach(e),Ss=h(a),m(Ia.$$.fragment,a),Is=h(a),he=o(a,"P",{});var fr=i(he);Hl=n(fr,"Finally, we\u2019ll push that up to the hub"),fr.forEach(e),Os=h(a),m(Oa.$$.fragment,a),Ls=h(a),ia=o(a,"P",{});var dt=i(ia);Nl=n(dt,"You can check out the resulting card "),La=o(dt,"A",{href:!0,rel:!0});var mr=i(La);Sl=n(mr,"here"),mr.forEach(e),Il=n(dt,"."),dt.forEach(e),Fs=h(a),I=o(a,"P",{});var _e=i(I);Ol=n(_e,"If you instead wanted to push a card as a pull request, you can just say "),Be=o(_e,"CODE",{});var gr=i(Be);Ll=n(gr,"create_pr=True"),gr.forEach(e),Fl=n(_e," when calling "),Je=o(_e,"CODE",{});var _r=i(Je);Bl=n(_r,"push_to_hub"),_r.forEach(e),Jl=n(_e,":"),_e.forEach(e),Bs=h(a),m(Fa.$$.fragment,a),Js=h(a),pa=o(a,"P",{});var ut=i(pa);Ul=n(ut,"A resulting PR created from this command can be seen "),Ba=o(ut,"A",{href:!0,rel:!0});var vr=i(Ba);Yl=n(vr,"here"),vr.forEach(e),Wl=n(ut,"."),ut.forEach(e),Us=h(a),W=o(a,"H3",{class:!0});var ft=i(W);ca=o(ft,"A",{id:!0,class:!0,href:!0});var jr=i(ca);Ue=o(jr,"SPAN",{});var $r=i(Ue);m(Ja.$$.fragment,$r),$r.forEach(e),jr.forEach(e),zl=h(ft),Ye=o(ft,"SPAN",{});var br=i(Ye);Vl=n(br,"Including Evaluation Results"),br.forEach(e),ft.forEach(e),Ys=h(a),C=o(a,"P",{});var P=i(C);Gl=n(P,"To include evaluation results in the metadata "),We=o(P,"CODE",{});var yr=i(We);Kl=n(yr,"model-index"),yr.forEach(e),Ql=n(P,", you can pass an "),de=o(P,"A",{href:!0});var wr=i(de);Xl=n(wr,"EvalResult"),wr.forEach(e),Zl=n(P," or a list of "),ze=o(P,"CODE",{});var xr=i(ze);an=n(xr,"EvalResult"),xr.forEach(e),en=n(P," with your associated evaluation results. Under the hood it\u2019ll create the "),Ve=o(P,"CODE",{});var Er=i(Ve);sn=n(Er,"model-index"),Er.forEach(e),tn=n(P," when you call "),Ge=o(P,"CODE",{});var Cr=i(Ge);ln=n(Cr,"card.data.to_dict()"),Cr.forEach(e),nn=n(P,". For more information on how this works, you can check out "),Ua=o(P,"A",{href:!0,rel:!0});var Mr=i(Ua);rn=n(Mr,"this section of the Hub docs"),Mr.forEach(e),on=n(P,"."),P.forEach(e),Ws=h(a),m(ha.$$.fragment,a),zs=h(a),m(Ya.$$.fragment,a),Vs=h(a),da=o(a,"P",{});var mt=i(da);pn=n(mt,"The resulting "),Ke=o(mt,"CODE",{});var kr=i(Ke);cn=n(kr,"card.data"),kr.forEach(e),hn=n(mt," should look like this:"),mt.forEach(e),Gs=h(a),m(Wa.$$.fragment,a),Ks=h(a),ua=o(a,"P",{});var gt=i(ua);dn=n(gt,"If you have more than one evaluation result you\u2019d like to share, just pass a list of "),Qe=o(gt,"CODE",{});var Tr=i(Qe);un=n(Tr,"EvalResult"),Tr.forEach(e),fn=n(gt,":"),gt.forEach(e),Qs=h(a),m(za.$$.fragment,a),Xs=h(a),fa=o(a,"P",{});var _t=i(fa);mn=n(_t,"Which should leave you with the following "),Xe=o(_t,"CODE",{});var Pr=i(Xe);gn=n(Pr,"card.data"),Pr.forEach(e),_n=n(_t,":"),_t.forEach(e),Zs=h(a),m(Va.$$.fragment,a),this.h()},h(){d(u,"name","hf:doc:metadata"),d(u,"content",JSON.stringify(Lr)),d(y,"id","creating-and-sharing-model-cards"),d(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(y,"href","#creating-and-sharing-model-cards"),d($,"class","relative group"),d(_a,"href","https://huggingface.co/docs/hub/models-cards"),d(_a,"rel","nofollow"),d(G,"id","loading-a-model-card-from-the-hub"),d(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(G,"href","#loading-a-model-card-from-the-hub"),d(L,"class","relative group"),d(Qa,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cards#huggingface_hub.repocard.RepoCard.load"),d(ja,"href","https://huggingface.co/nateraw/vit-base-beans"),d(ja,"rel","nofollow"),d(Za,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cards#huggingface_hub.ModelCardData"),d(X,"id","creating-model-cards"),d(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(X,"href","#creating-model-cards"),d(F,"class","relative group"),d(Z,"id","from-text"),d(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Z,"href","#from-text"),d(B,"class","relative group"),d(ee,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cards#huggingface_hub.CardData.to_yaml"),d(sa,"id","from-a-jinja-template"),d(sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(sa,"href","#from-a-jinja-template"),d(J,"class","relative group"),d(re,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cards#huggingface_hub.repocard.RepoCard.validate"),d(na,"id","from-the-default-template"),d(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(na,"href","#from-the-default-template"),d(U,"class","relative group"),d(qa,"href","https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/modelcard_template.md"),d(qa,"rel","nofollow"),d(Ra,"href","https://jinja.palletsprojects.com/en/3.1.x/"),d(Ra,"rel","nofollow"),d(oa,"id","sharing-model-cards"),d(oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(oa,"href","#sharing-model-cards"),d(Y,"class","relative group"),d(oe,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/login#huggingface_hub.login"),d(ie,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cards#huggingface_hub.repocard.RepoCard.push_to_hub"),d(La,"href","https://huggingface.co/nateraw/hf-hub-modelcards-pr-test/blob/main/README.md"),d(La,"rel","nofollow"),d(Ba,"href","https://huggingface.co/nateraw/hf-hub-modelcards-pr-test/discussions/3"),d(Ba,"rel","nofollow"),d(ca,"id","including-evaluation-results"),d(ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ca,"href","#including-evaluation-results"),d(W,"class","relative group"),d(de,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cards#huggingface_hub.EvalResult"),d(Ua,"href","https://huggingface.co/docs/hub/models-cards#evaluation-results"),d(Ua,"rel","nofollow")},m(a,t){s(document.head,u),p(a,x,t),p(a,$,t),s($,y),s(y,E),g(b,E,null),s($,q),s($,A),s(A,T),p(a,w,t),p(a,k,t),s(k,O),s(k,ve),s(ve,vt),s(k,jt),s(k,_a),s(_a,$t),s(k,bt),p(a,ts,t),g(V,a,t),p(a,ls,t),p(a,L,t),s(L,G),s(G,je),g(va,je,null),s(L,yt),s(L,$e),s($e,wt),p(a,ns,t),p(a,R,t),s(R,xt),s(R,Qa),s(Qa,Et),s(R,Ct),s(R,ja),s(ja,be),s(be,Mt),s(R,kt),p(a,rs,t),g($a,a,t),p(a,os,t),p(a,Xa,t),s(Xa,Tt),p(a,is,t),p(a,H,t),s(H,N),s(N,ye),s(ye,Pt),s(N,At),s(N,Za),s(Za,Dt),s(N,qt),s(N,we),s(we,Rt),s(N,Ht),s(H,Nt),s(H,K),s(K,xe),s(xe,St),s(K,It),s(K,Ee),s(Ee,Ot),s(K,Lt),s(H,Ft),s(H,Q),s(Q,Ce),s(Ce,Bt),s(Q,Jt),s(Q,Me),s(Me,Ut),s(Q,Yt),p(a,ps,t),p(a,F,t),s(F,X),s(X,ke),g(ba,ke,null),s(F,Wt),s(F,Te),s(Te,zt),p(a,cs,t),p(a,B,t),s(B,Z),s(Z,Pe),g(ya,Pe,null),s(B,Vt),s(B,Ae),s(Ae,Gt),p(a,hs,t),p(a,aa,t),s(aa,Kt),s(aa,De),s(De,Qt),s(aa,Xt),p(a,ds,t),g(wa,a,t),p(a,us,t),p(a,ae,t),s(ae,Zt),p(a,fs,t),p(a,ea,t),s(ea,xa),s(xa,al),s(xa,ee),s(ee,el),s(xa,sl),s(ea,tl),s(ea,qe),s(qe,ll),p(a,ms,t),g(Ea,a,t),p(a,gs,t),p(a,se,t),s(se,nl),p(a,_s,t),g(Ca,a,t),p(a,vs,t),p(a,J,t),s(J,sa),s(sa,Re),g(Ma,Re,null),s(J,rl),s(J,He),s(He,ol),p(a,js,t),p(a,ta,t),s(ta,il),s(ta,Ne),s(Ne,pl),s(ta,cl),p(a,$s,t),g(ka,a,t),p(a,bs,t),p(a,te,t),s(te,hl),p(a,ys,t),g(Ta,a,t),p(a,ws,t),p(a,le,t),s(le,dl),p(a,xs,t),g(Pa,a,t),p(a,Es,t),p(a,ne,t),s(ne,ul),p(a,Cs,t),g(Aa,a,t),p(a,Ms,t),p(a,la,t),s(la,fl),s(la,re),s(re,ml),s(la,gl),p(a,ks,t),p(a,U,t),s(U,na),s(na,Se),g(Da,Se,null),s(U,_l),s(U,Ie),s(Ie,vl),p(a,Ts,t),p(a,S,t),s(S,jl),s(S,qa),s(qa,$l),s(S,bl),s(S,Ra),s(Ra,yl),s(S,wl),p(a,Ps,t),g(ra,a,t),p(a,As,t),g(Ha,a,t),p(a,Ds,t),p(a,Y,t),s(Y,oa),s(oa,Oe),g(Na,Oe,null),s(Y,xl),s(Y,Le),s(Le,El),p(a,qs,t),p(a,D,t),s(D,Cl),s(D,Fe),s(Fe,Ml),s(D,kl),s(D,oe),s(oe,Tl),s(D,Pl),s(D,ie),s(ie,Al),s(D,Dl),p(a,Rs,t),p(a,pe,t),s(pe,ql),p(a,Hs,t),g(Sa,a,t),p(a,Ns,t),p(a,ce,t),s(ce,Rl),p(a,Ss,t),g(Ia,a,t),p(a,Is,t),p(a,he,t),s(he,Hl),p(a,Os,t),g(Oa,a,t),p(a,Ls,t),p(a,ia,t),s(ia,Nl),s(ia,La),s(La,Sl),s(ia,Il),p(a,Fs,t),p(a,I,t),s(I,Ol),s(I,Be),s(Be,Ll),s(I,Fl),s(I,Je),s(Je,Bl),s(I,Jl),p(a,Bs,t),g(Fa,a,t),p(a,Js,t),p(a,pa,t),s(pa,Ul),s(pa,Ba),s(Ba,Yl),s(pa,Wl),p(a,Us,t),p(a,W,t),s(W,ca),s(ca,Ue),g(Ja,Ue,null),s(W,zl),s(W,Ye),s(Ye,Vl),p(a,Ys,t),p(a,C,t),s(C,Gl),s(C,We),s(We,Kl),s(C,Ql),s(C,de),s(de,Xl),s(C,Zl),s(C,ze),s(ze,an),s(C,en),s(C,Ve),s(Ve,sn),s(C,tn),s(C,Ge),s(Ge,ln),s(C,nn),s(C,Ua),s(Ua,rn),s(C,on),p(a,Ws,t),g(ha,a,t),p(a,zs,t),g(Ya,a,t),p(a,Vs,t),p(a,da,t),s(da,pn),s(da,Ke),s(Ke,cn),s(da,hn),p(a,Gs,t),g(Wa,a,t),p(a,Ks,t),p(a,ua,t),s(ua,dn),s(ua,Qe),s(Qe,un),s(ua,fn),p(a,Qs,t),g(za,a,t),p(a,Xs,t),p(a,fa,t),s(fa,mn),s(fa,Xe),s(Xe,gn),s(fa,_n),p(a,Zs,t),g(Va,a,t),at=!0},p(a,[t]){const Ga={};t&2&&(Ga.$$scope={dirty:t,ctx:a}),V.$set(Ga);const Ze={};t&2&&(Ze.$$scope={dirty:t,ctx:a}),ra.$set(Ze);const as={};t&2&&(as.$$scope={dirty:t,ctx:a}),ha.$set(as)},i(a){at||(_(b.$$.fragment,a),_(V.$$.fragment,a),_(va.$$.fragment,a),_($a.$$.fragment,a),_(ba.$$.fragment,a),_(ya.$$.fragment,a),_(wa.$$.fragment,a),_(Ea.$$.fragment,a),_(Ca.$$.fragment,a),_(Ma.$$.fragment,a),_(ka.$$.fragment,a),_(Ta.$$.fragment,a),_(Pa.$$.fragment,a),_(Aa.$$.fragment,a),_(Da.$$.fragment,a),_(ra.$$.fragment,a),_(Ha.$$.fragment,a),_(Na.$$.fragment,a),_(Sa.$$.fragment,a),_(Ia.$$.fragment,a),_(Oa.$$.fragment,a),_(Fa.$$.fragment,a),_(Ja.$$.fragment,a),_(ha.$$.fragment,a),_(Ya.$$.fragment,a),_(Wa.$$.fragment,a),_(za.$$.fragment,a),_(Va.$$.fragment,a),at=!0)},o(a){v(b.$$.fragment,a),v(V.$$.fragment,a),v(va.$$.fragment,a),v($a.$$.fragment,a),v(ba.$$.fragment,a),v(ya.$$.fragment,a),v(wa.$$.fragment,a),v(Ea.$$.fragment,a),v(Ca.$$.fragment,a),v(Ma.$$.fragment,a),v(ka.$$.fragment,a),v(Ta.$$.fragment,a),v(Pa.$$.fragment,a),v(Aa.$$.fragment,a),v(Da.$$.fragment,a),v(ra.$$.fragment,a),v(Ha.$$.fragment,a),v(Na.$$.fragment,a),v(Sa.$$.fragment,a),v(Ia.$$.fragment,a),v(Oa.$$.fragment,a),v(Fa.$$.fragment,a),v(Ja.$$.fragment,a),v(ha.$$.fragment,a),v(Ya.$$.fragment,a),v(Wa.$$.fragment,a),v(za.$$.fragment,a),v(Va.$$.fragment,a),at=!1},d(a){e(u),a&&e(x),a&&e($),j(b),a&&e(w),a&&e(k),a&&e(ts),j(V,a),a&&e(ls),a&&e(L),j(va),a&&e(ns),a&&e(R),a&&e(rs),j($a,a),a&&e(os),a&&e(Xa),a&&e(is),a&&e(H),a&&e(ps),a&&e(F),j(ba),a&&e(cs),a&&e(B),j(ya),a&&e(hs),a&&e(aa),a&&e(ds),j(wa,a),a&&e(us),a&&e(ae),a&&e(fs),a&&e(ea),a&&e(ms),j(Ea,a),a&&e(gs),a&&e(se),a&&e(_s),j(Ca,a),a&&e(vs),a&&e(J),j(Ma),a&&e(js),a&&e(ta),a&&e($s),j(ka,a),a&&e(bs),a&&e(te),a&&e(ys),j(Ta,a),a&&e(ws),a&&e(le),a&&e(xs),j(Pa,a),a&&e(Es),a&&e(ne),a&&e(Cs),j(Aa,a),a&&e(Ms),a&&e(la),a&&e(ks),a&&e(U),j(Da),a&&e(Ts),a&&e(S),a&&e(Ps),j(ra,a),a&&e(As),j(Ha,a),a&&e(Ds),a&&e(Y),j(Na),a&&e(qs),a&&e(D),a&&e(Rs),a&&e(pe),a&&e(Hs),j(Sa,a),a&&e(Ns),a&&e(ce),a&&e(Ss),j(Ia,a),a&&e(Is),a&&e(he),a&&e(Os),j(Oa,a),a&&e(Ls),a&&e(ia),a&&e(Fs),a&&e(I),a&&e(Bs),j(Fa,a),a&&e(Js),a&&e(pa),a&&e(Us),a&&e(W),j(Ja),a&&e(Ys),a&&e(C),a&&e(Ws),j(ha,a),a&&e(zs),j(Ya,a),a&&e(Vs),a&&e(da),a&&e(Gs),j(Wa,a),a&&e(Ks),a&&e(ua),a&&e(Qs),j(za,a),a&&e(Xs),a&&e(fa),a&&e(Zs),j(Va,a)}}}const Lr={local:"creating-and-sharing-model-cards",sections:[{local:"loading-a-model-card-from-the-hub",title:"Loading a Model Card from the Hub"},{local:"creating-model-cards",sections:[{local:"from-text",title:"From Text"},{local:"from-a-jinja-template",title:"From a Jinja Template"},{local:"from-the-default-template",title:"From the Default Template"}],title:"Creating Model Cards"},{local:"sharing-model-cards",sections:[{local:"including-evaluation-results",title:"Including Evaluation Results"}],title:"Sharing Model Cards"}],title:"Creating and Sharing Model Cards"};function Fr(z){return Hr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Wr extends Ar{constructor(u){super();Dr(this,u,Fr,Or,qr,{})}}export{Wr as default,Lr as metadata};
