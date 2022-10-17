import{S as Tr,i as Pr,s as Dr,e as r,k as c,w as m,t as l,M as Ar,c as o,d as e,m as h,a as i,x as f,h as n,b as d,G as s,g as p,y as g,q as _,o as v,B as j,v as qr}from"../chunks/vendor-hf-doc-builder.js";import{T as Mr}from"../chunks/Tip-hf-doc-builder.js";import{I as ma}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as x}from"../chunks/CodeBlock-hf-doc-builder.js";function Rr(Ga){let u,D,b,E,T,y,q,P;return{c(){u=r("p"),D=l("Note that you will have to have Jinja2 installed to use "),b=r("code"),E=l("from_template"),T=l(". You can do so with "),y=r("code"),q=l("pip install Jinja2"),P=l(".")},l(k){u=o(k,"P",{});var $=i(u);D=n($,"Note that you will have to have Jinja2 installed to use "),b=o($,"CODE",{});var C=i(b);E=n(C,"from_template"),C.forEach(e),T=n($,". You can do so with "),y=o($,"CODE",{});var O=i(y);q=n(O,"pip install Jinja2"),O.forEach(e),P=n($,"."),$.forEach(e)},m(k,$){p(k,u,$),s(u,D),s(u,b),s(b,E),s(u,T),s(u,y),s(y,q),s(u,P)},d(k){k&&e(u)}}}function Hr(Ga){let u,D,b,E,T,y,q,P;return{c(){u=r("p"),D=l("Note that using this function requires you to include the "),b=r("code"),E=l("model_name"),T=l(" attribute in "),y=r("a"),q=l("ModelCardData"),P=l("."),this.h()},l(k){u=o(k,"P",{});var $=i(u);D=n($,"Note that using this function requires you to include the "),b=o($,"CODE",{});var C=i(b);E=n(C,"model_name"),C.forEach(e),T=n($," attribute in "),y=o($,"A",{href:!0});var O=i(y);q=n(O,"ModelCardData"),O.forEach(e),P=n($,"."),$.forEach(e),this.h()},h(){d(y,"href","/docs/huggingface_hub/main/en/package_reference/cards#huggingface_hub.ModelCardData")},m(k,$){p(k,u,$),s(u,D),s(u,b),s(b,E),s(u,T),s(u,y),s(y,q),s(u,P)},d(k){k&&e(u)}}}function Sr(Ga){let u,D,b,E,T,y,q,P,k,$,C,O,_e,ft,gt,fa,_t,vt,es,L,z,ve,ga,jt,je,$t,ss,R,bt,Ka,yt,wt,_a,$e,xt,Et,ts,va,ls,Qa,Ct,ns,H,S,be,kt,Mt,Xa,Tt,Pt,ye,Dt,At,qt,V,we,Rt,Ht,xe,St,Nt,It,G,Ee,Ot,Lt,Ce,Ft,Bt,rs,F,K,ke,ja,Jt,Me,Ut,os,B,Q,Te,$a,Yt,Pe,Wt,is,X,zt,De,Vt,Gt,ps,ba,cs,Za,Kt,hs,Z,ya,Qt,ae,Xt,Zt,al,Ae,el,ds,wa,us,ee,sl,ms,xa,fs,J,aa,qe,Ea,tl,Re,ll,gs,ea,nl,He,rl,ol,_s,Ca,vs,se,il,js,ka,$s,te,pl,bs,Ma,ys,le,cl,ws,Ta,xs,sa,hl,ne,dl,ul,Es,U,ta,Se,Pa,ml,Ne,fl,Cs,N,gl,Da,_l,vl,Aa,jl,$l,ks,la,Ms,qa,Ts,Y,na,Ie,Ra,bl,Oe,yl,Ps,A,wl,Le,xl,El,re,Cl,kl,oe,Ml,Tl,Ds,ie,Pl,As,Ha,qs,pe,Dl,Rs,Sa,Hs,ce,Al,Ss,Na,Ns,ra,ql,Ia,Rl,Hl,Is,I,Sl,Fe,Nl,Il,Be,Ol,Ll,Os,Oa,Ls,oa,Fl,La,Bl,Jl,Fs,W,ia,Je,Fa,Ul,Ue,Yl,Bs,w,Wl,Ye,zl,Vl,he,Gl,Kl,We,Ql,Xl,ze,Zl,an,Ve,en,sn,Ba,tn,ln,Js,pa,Us,Ja,Ys,ca,nn,Ge,rn,on,Ws,Ua,zs,ha,pn,Ke,cn,hn,Vs,Ya,Gs,da,dn,Qe,un,mn,Ks,Wa,Qs;return y=new ma({}),ga=new ma({}),va=new x({props:{code:`from huggingface_hub import ModelCard

card = ModelCard.load('nateraw/vit-base-beans')`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> ModelCard

card = ModelCard.load(<span class="hljs-string">&#x27;nateraw/vit-base-beans&#x27;</span>)`}}),ja=new ma({}),$a=new ma({}),ba=new x({props:{code:`content = """
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
card.data.to_dict() == {<span class="hljs-string">&#x27;language&#x27;</span>: <span class="hljs-string">&#x27;en&#x27;</span>, <span class="hljs-string">&#x27;license&#x27;</span>: <span class="hljs-string">&#x27;mit&#x27;</span>}  <span class="hljs-comment"># True</span>`}}),wa=new x({props:{code:`card_data = ModelCardData(language='en', license='mit', library='timm')

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
<span class="hljs-built_in">print</span>(card)`}}),xa=new x({props:{code:`---
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

<span class="hljs-string">This</span> <span class="hljs-string">model</span> <span class="hljs-string">created</span> <span class="hljs-string">by</span> [<span class="hljs-string">@nateraw</span>]<span class="hljs-string">(https://github.com/nateraw)</span>`}}),Ea=new ma({}),Ca=new x({props:{code:`from pathlib import Path

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
<span class="hljs-built_in">print</span>(card)`}}),ka=new x({props:{code:`---
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

<span class="hljs-string">This</span> <span class="hljs-string">model</span> <span class="hljs-string">was</span> <span class="hljs-string">created</span> <span class="hljs-string">by</span> [<span class="hljs-string">@nateraw</span>]<span class="hljs-string">(https://hf.co/nateraw).</span>`}}),Ma=new x({props:{code:`card.data.library_name = 'timm'
card.data.language = 'fr'
card.data.license = 'apache-2.0'
print(card)`,highlighted:`card<span class="hljs-selector-class">.data</span><span class="hljs-selector-class">.library_name</span> = <span class="hljs-string">&#x27;timm&#x27;</span>
card<span class="hljs-selector-class">.data</span><span class="hljs-selector-class">.language</span> = <span class="hljs-string">&#x27;fr&#x27;</span>
card<span class="hljs-selector-class">.data</span><span class="hljs-selector-class">.license</span> = <span class="hljs-string">&#x27;apache-2.0&#x27;</span>
<span class="hljs-function"><span class="hljs-title">print</span><span class="hljs-params">(card)</span></span>`}}),Ta=new x({props:{code:`---
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

<span class="hljs-string">This</span> <span class="hljs-string">model</span> <span class="hljs-string">was</span> <span class="hljs-string">created</span> <span class="hljs-string">by</span> [<span class="hljs-string">@nateraw</span>]<span class="hljs-string">(https://hf.co/nateraw).</span>`}}),Pa=new ma({}),la=new Mr({props:{$$slots:{default:[Rr]},$$scope:{ctx:Ga}}}),qa=new x({props:{code:`card_data = ModelCardData(language='en', license='mit', library_name='keras')
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
<span class="hljs-built_in">print</span>(card)`}}),Ra=new ma({}),Ha=new x({props:{code:`from huggingface_hub import whoami, create_repo

user = whoami()['name']
repo_id = f'{user}/hf-hub-modelcards-pr-test'
url = create_repo(repo_id, exist_ok=True)`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> whoami, create_repo

user = whoami()[<span class="hljs-string">&#x27;name&#x27;</span>]
repo_id = <span class="hljs-string">f&#x27;<span class="hljs-subst">{user}</span>/hf-hub-modelcards-pr-test&#x27;</span>
url = create_repo(repo_id, exist_ok=<span class="hljs-literal">True</span>)`}}),Sa=new x({props:{code:`card_data = ModelCardData(language='en', license='mit', library_name='keras')
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
)`}}),Na=new x({props:{code:"card.push_to_hub(repo_id)",highlighted:"card.push_to_hub(repo_id)"}}),Oa=new x({props:{code:"card.push_to_hub(repo_id, create_pr=True)",highlighted:'card.push_to_hub(repo_id, create_pr=<span class="hljs-literal">True</span>)'}}),Fa=new ma({}),pa=new Mr({props:{$$slots:{default:[Hr]},$$scope:{ctx:Ga}}}),Ja=new x({props:{code:`card_data = ModelCardData(
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
<span class="hljs-built_in">print</span>(card.data)`}}),Ua=new x({props:{code:`language: en
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
      <span class="hljs-attribute">value</span><span class="hljs-punctuation">:</span> <span class="hljs-string">0.7</span>`}}),Ya=new x({props:{code:`card_data = ModelCardData(
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
card.data`}}),Wa=new x({props:{code:`language: en
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
      <span class="hljs-attribute">value</span><span class="hljs-punctuation">:</span> <span class="hljs-string">0.65</span>`}}),{c(){u=r("meta"),D=c(),b=r("h1"),E=r("a"),T=r("span"),m(y.$$.fragment),q=c(),P=r("span"),k=l("Creating and Sharing Model Cards"),$=c(),C=r("p"),O=l("The "),_e=r("code"),ft=l("huggingface_hub"),gt=l(` library provides a Python interface to create, share, and update Model Cards.
Visit `),fa=r("a"),_t=l("the dedicated documentation page"),vt=l(`
for a deeper view of what Model Cards on the Hub are, and how they work under the hood.`),es=c(),L=r("h2"),z=r("a"),ve=r("span"),m(ga.$$.fragment),jt=c(),je=r("span"),$t=l("Loading a Model Card from the Hub"),ss=c(),R=r("p"),bt=l("To load an existing card from the Hub, you can use the "),Ka=r("a"),yt=l("ModelCard.load()"),wt=l(" function. Here, we\u2019ll load the card from "),_a=r("a"),$e=r("code"),xt=l("nateraw/vit-base-beans"),Et=l("."),ts=c(),m(va.$$.fragment),ls=c(),Qa=r("p"),Ct=l("This card has some helpful attributes that you may want to access/leverage:"),ns=c(),H=r("ul"),S=r("li"),be=r("code"),kt=l("card.data"),Mt=l(": Returns a "),Xa=r("a"),Tt=l("ModelCardData"),Pt=l(" instance with the model card\u2019s metadata. Call "),ye=r("code"),Dt=l(".to_dict()"),At=l(" on this instance to get the representation as a dictionary."),qt=c(),V=r("li"),we=r("code"),Rt=l("card.text"),Ht=l(": Returns the text of the card, "),xe=r("em"),St=l("excluding the metadata header"),Nt=l("."),It=c(),G=r("li"),Ee=r("code"),Ot=l("card.content"),Lt=l(": Returns the text content of the card, "),Ce=r("em"),Ft=l("including the metadata header"),Bt=l("."),rs=c(),F=r("h2"),K=r("a"),ke=r("span"),m(ja.$$.fragment),Jt=c(),Me=r("span"),Ut=l("Creating Model Cards"),os=c(),B=r("h3"),Q=r("a"),Te=r("span"),m($a.$$.fragment),Yt=c(),Pe=r("span"),Wt=l("From Text"),is=c(),X=r("p"),zt=l("To initialize a Model Card from text, just pass the text content of the card to the "),De=r("code"),Vt=l("ModelCard"),Gt=l(" on init."),ps=c(),m(ba.$$.fragment),cs=c(),Za=r("p"),Kt=l("Another way you might want to do this is with f-strings. In the following example, we:"),hs=c(),Z=r("ul"),ya=r("li"),Qt=l("Use "),ae=r("a"),Xt=l("ModelCardData.to_yaml()"),Zt=l(" to convert metadata we defined to YAML so we can use it to insert the YAML block in the model card."),al=c(),Ae=r("li"),el=l("Show how you might use a template variable via Python f-strings."),ds=c(),m(wa.$$.fragment),us=c(),ee=r("p"),sl=l("The above example would leave us with a card that looks like this:"),ms=c(),m(xa.$$.fragment),fs=c(),J=r("h3"),aa=r("a"),qe=r("span"),m(Ea.$$.fragment),tl=c(),Re=r("span"),ll=l("From a Jinja Template"),gs=c(),ea=r("p"),nl=l("If you have "),He=r("code"),rl=l("Jinja2"),ol=l(" installed, you can create Model Cards from a jinja template file. Let\u2019s see a basic example:"),_s=c(),m(Ca.$$.fragment),vs=c(),se=r("p"),il=l("The resulting card\u2019s markdown looks like this:"),js=c(),m(ka.$$.fragment),$s=c(),te=r("p"),pl=l("If you update any card.data, it\u2019ll reflect in the card itself."),bs=c(),m(Ma.$$.fragment),ys=c(),le=r("p"),cl=l("Now, as you can see, the metadata header has been updated:"),ws=c(),m(Ta.$$.fragment),xs=c(),sa=r("p"),hl=l("As you update the card data, you can validate the card is still valid against the Hub by calling "),ne=r("a"),dl=l("ModelCard.validate()"),ul=l(". This ensures that the card passes any validation rules set up on the Hugging Face Hub."),Es=c(),U=r("h3"),ta=r("a"),Se=r("span"),m(Pa.$$.fragment),ml=c(),Ne=r("span"),fl=l("From the Default Template"),Cs=c(),N=r("p"),gl=l("Instead of using your own template, you can also use the "),Da=r("a"),_l=l("default template"),vl=l(", which is a fully featured model card with tons of sections you may want to fill out. Under the hood, it uses "),Aa=r("a"),jl=l("Jinja2"),$l=l(" to fill out a template file."),ks=c(),m(la.$$.fragment),Ms=c(),m(qa.$$.fragment),Ts=c(),Y=r("h2"),na=r("a"),Ie=r("span"),m(Ra.$$.fragment),bl=c(),Oe=r("span"),yl=l("Sharing Model Cards"),Ps=c(),A=r("p"),wl=l("If you\u2019re authenticated with the Hugging Face Hub (either by using "),Le=r("code"),xl=l("huggingface-cli login"),El=l(" or "),re=r("a"),Cl=l("login()"),kl=l("), you can push cards to the Hub by simply calling "),oe=r("a"),Ml=l("ModelCard.push_to_hub()"),Tl=l(". Let\u2019s take a look at how to do that\u2026"),Ds=c(),ie=r("p"),Pl=l("First, we\u2019ll create a new repo called \u2018hf-hub-modelcards-pr-test\u2019 under the authenticated user\u2019s namespace:"),As=c(),m(Ha.$$.fragment),qs=c(),pe=r("p"),Dl=l("Then, we\u2019ll create a card from the default template (same as the one defined in the section above):"),Rs=c(),m(Sa.$$.fragment),Hs=c(),ce=r("p"),Al=l("Finally, we\u2019ll push that up to the hub"),Ss=c(),m(Na.$$.fragment),Ns=c(),ra=r("p"),ql=l("You can check out the resulting card "),Ia=r("a"),Rl=l("here"),Hl=l("."),Is=c(),I=r("p"),Sl=l("If you instead wanted to push a card as a pull request, you can just say "),Fe=r("code"),Nl=l("create_pr=True"),Il=l(" when calling "),Be=r("code"),Ol=l("push_to_hub"),Ll=l(":"),Os=c(),m(Oa.$$.fragment),Ls=c(),oa=r("p"),Fl=l("A resulting PR created from this command can be seen "),La=r("a"),Bl=l("here"),Jl=l("."),Fs=c(),W=r("h3"),ia=r("a"),Je=r("span"),m(Fa.$$.fragment),Ul=c(),Ue=r("span"),Yl=l("Including Evaluation Results"),Bs=c(),w=r("p"),Wl=l("To include evaluation results in the metadata "),Ye=r("code"),zl=l("model-index"),Vl=l(", you can pass an "),he=r("a"),Gl=l("EvalResult"),Kl=l(" or a list of "),We=r("code"),Ql=l("EvalResult"),Xl=l(" with your associated evaluation results. Under the hood it\u2019ll create the "),ze=r("code"),Zl=l("model-index"),an=l(" when you call "),Ve=r("code"),en=l("card.data.to_dict()"),sn=l(". For more information on how this works, you can check out "),Ba=r("a"),tn=l("this section of the Hub docs"),ln=l("."),Js=c(),m(pa.$$.fragment),Us=c(),m(Ja.$$.fragment),Ys=c(),ca=r("p"),nn=l("The resulting "),Ge=r("code"),rn=l("card.data"),on=l(" should look like this:"),Ws=c(),m(Ua.$$.fragment),zs=c(),ha=r("p"),pn=l("If you have more than one evaluation result you\u2019d like to share, just pass a list of "),Ke=r("code"),cn=l("EvalResult"),hn=l(":"),Vs=c(),m(Ya.$$.fragment),Gs=c(),da=r("p"),dn=l("Which should leave you with the following "),Qe=r("code"),un=l("card.data"),mn=l(":"),Ks=c(),m(Wa.$$.fragment),this.h()},l(a){const t=Ar('[data-svelte="svelte-1phssyn"]',document.head);u=o(t,"META",{name:!0,content:!0}),t.forEach(e),D=h(a),b=o(a,"H1",{class:!0});var za=i(b);E=o(za,"A",{id:!0,class:!0,href:!0});var Xe=i(E);T=o(Xe,"SPAN",{});var fn=i(T);f(y.$$.fragment,fn),fn.forEach(e),Xe.forEach(e),q=h(za),P=o(za,"SPAN",{});var gn=i(P);k=n(gn,"Creating and Sharing Model Cards"),gn.forEach(e),za.forEach(e),$=h(a),C=o(a,"P",{});var de=i(C);O=n(de,"The "),_e=o(de,"CODE",{});var _n=i(_e);ft=n(_n,"huggingface_hub"),_n.forEach(e),gt=n(de,` library provides a Python interface to create, share, and update Model Cards.
Visit `),fa=o(de,"A",{href:!0,rel:!0});var vn=i(fa);_t=n(vn,"the dedicated documentation page"),vn.forEach(e),vt=n(de,`
for a deeper view of what Model Cards on the Hub are, and how they work under the hood.`),de.forEach(e),es=h(a),L=o(a,"H2",{class:!0});var Xs=i(L);z=o(Xs,"A",{id:!0,class:!0,href:!0});var jn=i(z);ve=o(jn,"SPAN",{});var $n=i(ve);f(ga.$$.fragment,$n),$n.forEach(e),jn.forEach(e),jt=h(Xs),je=o(Xs,"SPAN",{});var bn=i(je);$t=n(bn,"Loading a Model Card from the Hub"),bn.forEach(e),Xs.forEach(e),ss=h(a),R=o(a,"P",{});var ue=i(R);bt=n(ue,"To load an existing card from the Hub, you can use the "),Ka=o(ue,"A",{href:!0});var yn=i(Ka);yt=n(yn,"ModelCard.load()"),yn.forEach(e),wt=n(ue," function. Here, we\u2019ll load the card from "),_a=o(ue,"A",{href:!0,rel:!0});var wn=i(_a);$e=o(wn,"CODE",{});var xn=i($e);xt=n(xn,"nateraw/vit-base-beans"),xn.forEach(e),wn.forEach(e),Et=n(ue,"."),ue.forEach(e),ts=h(a),f(va.$$.fragment,a),ls=h(a),Qa=o(a,"P",{});var En=i(Qa);Ct=n(En,"This card has some helpful attributes that you may want to access/leverage:"),En.forEach(e),ns=h(a),H=o(a,"UL",{});var me=i(H);S=o(me,"LI",{});var Va=i(S);be=o(Va,"CODE",{});var Cn=i(be);kt=n(Cn,"card.data"),Cn.forEach(e),Mt=n(Va,": Returns a "),Xa=o(Va,"A",{href:!0});var kn=i(Xa);Tt=n(kn,"ModelCardData"),kn.forEach(e),Pt=n(Va," instance with the model card\u2019s metadata. Call "),ye=o(Va,"CODE",{});var Mn=i(ye);Dt=n(Mn,".to_dict()"),Mn.forEach(e),At=n(Va," on this instance to get the representation as a dictionary."),Va.forEach(e),qt=h(me),V=o(me,"LI",{});var Ze=i(V);we=o(Ze,"CODE",{});var Tn=i(we);Rt=n(Tn,"card.text"),Tn.forEach(e),Ht=n(Ze,": Returns the text of the card, "),xe=o(Ze,"EM",{});var Pn=i(xe);St=n(Pn,"excluding the metadata header"),Pn.forEach(e),Nt=n(Ze,"."),Ze.forEach(e),It=h(me),G=o(me,"LI",{});var as=i(G);Ee=o(as,"CODE",{});var Dn=i(Ee);Ot=n(Dn,"card.content"),Dn.forEach(e),Lt=n(as,": Returns the text content of the card, "),Ce=o(as,"EM",{});var An=i(Ce);Ft=n(An,"including the metadata header"),An.forEach(e),Bt=n(as,"."),as.forEach(e),me.forEach(e),rs=h(a),F=o(a,"H2",{class:!0});var Zs=i(F);K=o(Zs,"A",{id:!0,class:!0,href:!0});var qn=i(K);ke=o(qn,"SPAN",{});var Rn=i(ke);f(ja.$$.fragment,Rn),Rn.forEach(e),qn.forEach(e),Jt=h(Zs),Me=o(Zs,"SPAN",{});var Hn=i(Me);Ut=n(Hn,"Creating Model Cards"),Hn.forEach(e),Zs.forEach(e),os=h(a),B=o(a,"H3",{class:!0});var at=i(B);Q=o(at,"A",{id:!0,class:!0,href:!0});var Sn=i(Q);Te=o(Sn,"SPAN",{});var Nn=i(Te);f($a.$$.fragment,Nn),Nn.forEach(e),Sn.forEach(e),Yt=h(at),Pe=o(at,"SPAN",{});var In=i(Pe);Wt=n(In,"From Text"),In.forEach(e),at.forEach(e),is=h(a),X=o(a,"P",{});var et=i(X);zt=n(et,"To initialize a Model Card from text, just pass the text content of the card to the "),De=o(et,"CODE",{});var On=i(De);Vt=n(On,"ModelCard"),On.forEach(e),Gt=n(et," on init."),et.forEach(e),ps=h(a),f(ba.$$.fragment,a),cs=h(a),Za=o(a,"P",{});var Ln=i(Za);Kt=n(Ln,"Another way you might want to do this is with f-strings. In the following example, we:"),Ln.forEach(e),hs=h(a),Z=o(a,"UL",{});var st=i(Z);ya=o(st,"LI",{});var tt=i(ya);Qt=n(tt,"Use "),ae=o(tt,"A",{href:!0});var Fn=i(ae);Xt=n(Fn,"ModelCardData.to_yaml()"),Fn.forEach(e),Zt=n(tt," to convert metadata we defined to YAML so we can use it to insert the YAML block in the model card."),tt.forEach(e),al=h(st),Ae=o(st,"LI",{});var Bn=i(Ae);el=n(Bn,"Show how you might use a template variable via Python f-strings."),Bn.forEach(e),st.forEach(e),ds=h(a),f(wa.$$.fragment,a),us=h(a),ee=o(a,"P",{});var Jn=i(ee);sl=n(Jn,"The above example would leave us with a card that looks like this:"),Jn.forEach(e),ms=h(a),f(xa.$$.fragment,a),fs=h(a),J=o(a,"H3",{class:!0});var lt=i(J);aa=o(lt,"A",{id:!0,class:!0,href:!0});var Un=i(aa);qe=o(Un,"SPAN",{});var Yn=i(qe);f(Ea.$$.fragment,Yn),Yn.forEach(e),Un.forEach(e),tl=h(lt),Re=o(lt,"SPAN",{});var Wn=i(Re);ll=n(Wn,"From a Jinja Template"),Wn.forEach(e),lt.forEach(e),gs=h(a),ea=o(a,"P",{});var nt=i(ea);nl=n(nt,"If you have "),He=o(nt,"CODE",{});var zn=i(He);rl=n(zn,"Jinja2"),zn.forEach(e),ol=n(nt," installed, you can create Model Cards from a jinja template file. Let\u2019s see a basic example:"),nt.forEach(e),_s=h(a),f(Ca.$$.fragment,a),vs=h(a),se=o(a,"P",{});var Vn=i(se);il=n(Vn,"The resulting card\u2019s markdown looks like this:"),Vn.forEach(e),js=h(a),f(ka.$$.fragment,a),$s=h(a),te=o(a,"P",{});var Gn=i(te);pl=n(Gn,"If you update any card.data, it\u2019ll reflect in the card itself."),Gn.forEach(e),bs=h(a),f(Ma.$$.fragment,a),ys=h(a),le=o(a,"P",{});var Kn=i(le);cl=n(Kn,"Now, as you can see, the metadata header has been updated:"),Kn.forEach(e),ws=h(a),f(Ta.$$.fragment,a),xs=h(a),sa=o(a,"P",{});var rt=i(sa);hl=n(rt,"As you update the card data, you can validate the card is still valid against the Hub by calling "),ne=o(rt,"A",{href:!0});var Qn=i(ne);dl=n(Qn,"ModelCard.validate()"),Qn.forEach(e),ul=n(rt,". This ensures that the card passes any validation rules set up on the Hugging Face Hub."),rt.forEach(e),Es=h(a),U=o(a,"H3",{class:!0});var ot=i(U);ta=o(ot,"A",{id:!0,class:!0,href:!0});var Xn=i(ta);Se=o(Xn,"SPAN",{});var Zn=i(Se);f(Pa.$$.fragment,Zn),Zn.forEach(e),Xn.forEach(e),ml=h(ot),Ne=o(ot,"SPAN",{});var ar=i(Ne);fl=n(ar,"From the Default Template"),ar.forEach(e),ot.forEach(e),Cs=h(a),N=o(a,"P",{});var fe=i(N);gl=n(fe,"Instead of using your own template, you can also use the "),Da=o(fe,"A",{href:!0,rel:!0});var er=i(Da);_l=n(er,"default template"),er.forEach(e),vl=n(fe,", which is a fully featured model card with tons of sections you may want to fill out. Under the hood, it uses "),Aa=o(fe,"A",{href:!0,rel:!0});var sr=i(Aa);jl=n(sr,"Jinja2"),sr.forEach(e),$l=n(fe," to fill out a template file."),fe.forEach(e),ks=h(a),f(la.$$.fragment,a),Ms=h(a),f(qa.$$.fragment,a),Ts=h(a),Y=o(a,"H2",{class:!0});var it=i(Y);na=o(it,"A",{id:!0,class:!0,href:!0});var tr=i(na);Ie=o(tr,"SPAN",{});var lr=i(Ie);f(Ra.$$.fragment,lr),lr.forEach(e),tr.forEach(e),bl=h(it),Oe=o(it,"SPAN",{});var nr=i(Oe);yl=n(nr,"Sharing Model Cards"),nr.forEach(e),it.forEach(e),Ps=h(a),A=o(a,"P",{});var ua=i(A);wl=n(ua,"If you\u2019re authenticated with the Hugging Face Hub (either by using "),Le=o(ua,"CODE",{});var rr=i(Le);xl=n(rr,"huggingface-cli login"),rr.forEach(e),El=n(ua," or "),re=o(ua,"A",{href:!0});var or=i(re);Cl=n(or,"login()"),or.forEach(e),kl=n(ua,"), you can push cards to the Hub by simply calling "),oe=o(ua,"A",{href:!0});var ir=i(oe);Ml=n(ir,"ModelCard.push_to_hub()"),ir.forEach(e),Tl=n(ua,". Let\u2019s take a look at how to do that\u2026"),ua.forEach(e),Ds=h(a),ie=o(a,"P",{});var pr=i(ie);Pl=n(pr,"First, we\u2019ll create a new repo called \u2018hf-hub-modelcards-pr-test\u2019 under the authenticated user\u2019s namespace:"),pr.forEach(e),As=h(a),f(Ha.$$.fragment,a),qs=h(a),pe=o(a,"P",{});var cr=i(pe);Dl=n(cr,"Then, we\u2019ll create a card from the default template (same as the one defined in the section above):"),cr.forEach(e),Rs=h(a),f(Sa.$$.fragment,a),Hs=h(a),ce=o(a,"P",{});var hr=i(ce);Al=n(hr,"Finally, we\u2019ll push that up to the hub"),hr.forEach(e),Ss=h(a),f(Na.$$.fragment,a),Ns=h(a),ra=o(a,"P",{});var pt=i(ra);ql=n(pt,"You can check out the resulting card "),Ia=o(pt,"A",{href:!0,rel:!0});var dr=i(Ia);Rl=n(dr,"here"),dr.forEach(e),Hl=n(pt,"."),pt.forEach(e),Is=h(a),I=o(a,"P",{});var ge=i(I);Sl=n(ge,"If you instead wanted to push a card as a pull request, you can just say "),Fe=o(ge,"CODE",{});var ur=i(Fe);Nl=n(ur,"create_pr=True"),ur.forEach(e),Il=n(ge," when calling "),Be=o(ge,"CODE",{});var mr=i(Be);Ol=n(mr,"push_to_hub"),mr.forEach(e),Ll=n(ge,":"),ge.forEach(e),Os=h(a),f(Oa.$$.fragment,a),Ls=h(a),oa=o(a,"P",{});var ct=i(oa);Fl=n(ct,"A resulting PR created from this command can be seen "),La=o(ct,"A",{href:!0,rel:!0});var fr=i(La);Bl=n(fr,"here"),fr.forEach(e),Jl=n(ct,"."),ct.forEach(e),Fs=h(a),W=o(a,"H3",{class:!0});var ht=i(W);ia=o(ht,"A",{id:!0,class:!0,href:!0});var gr=i(ia);Je=o(gr,"SPAN",{});var _r=i(Je);f(Fa.$$.fragment,_r),_r.forEach(e),gr.forEach(e),Ul=h(ht),Ue=o(ht,"SPAN",{});var vr=i(Ue);Yl=n(vr,"Including Evaluation Results"),vr.forEach(e),ht.forEach(e),Bs=h(a),w=o(a,"P",{});var M=i(w);Wl=n(M,"To include evaluation results in the metadata "),Ye=o(M,"CODE",{});var jr=i(Ye);zl=n(jr,"model-index"),jr.forEach(e),Vl=n(M,", you can pass an "),he=o(M,"A",{href:!0});var $r=i(he);Gl=n($r,"EvalResult"),$r.forEach(e),Kl=n(M," or a list of "),We=o(M,"CODE",{});var br=i(We);Ql=n(br,"EvalResult"),br.forEach(e),Xl=n(M," with your associated evaluation results. Under the hood it\u2019ll create the "),ze=o(M,"CODE",{});var yr=i(ze);Zl=n(yr,"model-index"),yr.forEach(e),an=n(M," when you call "),Ve=o(M,"CODE",{});var wr=i(Ve);en=n(wr,"card.data.to_dict()"),wr.forEach(e),sn=n(M,". For more information on how this works, you can check out "),Ba=o(M,"A",{href:!0,rel:!0});var xr=i(Ba);tn=n(xr,"this section of the Hub docs"),xr.forEach(e),ln=n(M,"."),M.forEach(e),Js=h(a),f(pa.$$.fragment,a),Us=h(a),f(Ja.$$.fragment,a),Ys=h(a),ca=o(a,"P",{});var dt=i(ca);nn=n(dt,"The resulting "),Ge=o(dt,"CODE",{});var Er=i(Ge);rn=n(Er,"card.data"),Er.forEach(e),on=n(dt," should look like this:"),dt.forEach(e),Ws=h(a),f(Ua.$$.fragment,a),zs=h(a),ha=o(a,"P",{});var ut=i(ha);pn=n(ut,"If you have more than one evaluation result you\u2019d like to share, just pass a list of "),Ke=o(ut,"CODE",{});var Cr=i(Ke);cn=n(Cr,"EvalResult"),Cr.forEach(e),hn=n(ut,":"),ut.forEach(e),Vs=h(a),f(Ya.$$.fragment,a),Gs=h(a),da=o(a,"P",{});var mt=i(da);dn=n(mt,"Which should leave you with the following "),Qe=o(mt,"CODE",{});var kr=i(Qe);un=n(kr,"card.data"),kr.forEach(e),mn=n(mt,":"),mt.forEach(e),Ks=h(a),f(Wa.$$.fragment,a),this.h()},h(){d(u,"name","hf:doc:metadata"),d(u,"content",JSON.stringify(Nr)),d(E,"id","creating-and-sharing-model-cards"),d(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(E,"href","#creating-and-sharing-model-cards"),d(b,"class","relative group"),d(fa,"href","https://huggingface.co/docs/hub/models-cards"),d(fa,"rel","nofollow"),d(z,"id","loading-a-model-card-from-the-hub"),d(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(z,"href","#loading-a-model-card-from-the-hub"),d(L,"class","relative group"),d(Ka,"href","/docs/huggingface_hub/main/en/package_reference/cards#huggingface_hub.repocard.RepoCard.load"),d(_a,"href","https://huggingface.co/nateraw/vit-base-beans"),d(_a,"rel","nofollow"),d(Xa,"href","/docs/huggingface_hub/main/en/package_reference/cards#huggingface_hub.ModelCardData"),d(K,"id","creating-model-cards"),d(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(K,"href","#creating-model-cards"),d(F,"class","relative group"),d(Q,"id","from-text"),d(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Q,"href","#from-text"),d(B,"class","relative group"),d(ae,"href","/docs/huggingface_hub/main/en/package_reference/cards#huggingface_hub.CardData.to_yaml"),d(aa,"id","from-a-jinja-template"),d(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(aa,"href","#from-a-jinja-template"),d(J,"class","relative group"),d(ne,"href","/docs/huggingface_hub/main/en/package_reference/cards#huggingface_hub.repocard.RepoCard.validate"),d(ta,"id","from-the-default-template"),d(ta,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ta,"href","#from-the-default-template"),d(U,"class","relative group"),d(Da,"href","https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/modelcard_template.md"),d(Da,"rel","nofollow"),d(Aa,"href","https://jinja.palletsprojects.com/en/3.1.x/"),d(Aa,"rel","nofollow"),d(na,"id","sharing-model-cards"),d(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(na,"href","#sharing-model-cards"),d(Y,"class","relative group"),d(re,"href","/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login"),d(oe,"href","/docs/huggingface_hub/main/en/package_reference/cards#huggingface_hub.repocard.RepoCard.push_to_hub"),d(Ia,"href","https://huggingface.co/nateraw/hf-hub-modelcards-pr-test/blob/main/README.md"),d(Ia,"rel","nofollow"),d(La,"href","https://huggingface.co/nateraw/hf-hub-modelcards-pr-test/discussions/3"),d(La,"rel","nofollow"),d(ia,"id","including-evaluation-results"),d(ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ia,"href","#including-evaluation-results"),d(W,"class","relative group"),d(he,"href","/docs/huggingface_hub/main/en/package_reference/cards#huggingface_hub.EvalResult"),d(Ba,"href","https://huggingface.co/docs/hub/models-cards#evaluation-results"),d(Ba,"rel","nofollow")},m(a,t){s(document.head,u),p(a,D,t),p(a,b,t),s(b,E),s(E,T),g(y,T,null),s(b,q),s(b,P),s(P,k),p(a,$,t),p(a,C,t),s(C,O),s(C,_e),s(_e,ft),s(C,gt),s(C,fa),s(fa,_t),s(C,vt),p(a,es,t),p(a,L,t),s(L,z),s(z,ve),g(ga,ve,null),s(L,jt),s(L,je),s(je,$t),p(a,ss,t),p(a,R,t),s(R,bt),s(R,Ka),s(Ka,yt),s(R,wt),s(R,_a),s(_a,$e),s($e,xt),s(R,Et),p(a,ts,t),g(va,a,t),p(a,ls,t),p(a,Qa,t),s(Qa,Ct),p(a,ns,t),p(a,H,t),s(H,S),s(S,be),s(be,kt),s(S,Mt),s(S,Xa),s(Xa,Tt),s(S,Pt),s(S,ye),s(ye,Dt),s(S,At),s(H,qt),s(H,V),s(V,we),s(we,Rt),s(V,Ht),s(V,xe),s(xe,St),s(V,Nt),s(H,It),s(H,G),s(G,Ee),s(Ee,Ot),s(G,Lt),s(G,Ce),s(Ce,Ft),s(G,Bt),p(a,rs,t),p(a,F,t),s(F,K),s(K,ke),g(ja,ke,null),s(F,Jt),s(F,Me),s(Me,Ut),p(a,os,t),p(a,B,t),s(B,Q),s(Q,Te),g($a,Te,null),s(B,Yt),s(B,Pe),s(Pe,Wt),p(a,is,t),p(a,X,t),s(X,zt),s(X,De),s(De,Vt),s(X,Gt),p(a,ps,t),g(ba,a,t),p(a,cs,t),p(a,Za,t),s(Za,Kt),p(a,hs,t),p(a,Z,t),s(Z,ya),s(ya,Qt),s(ya,ae),s(ae,Xt),s(ya,Zt),s(Z,al),s(Z,Ae),s(Ae,el),p(a,ds,t),g(wa,a,t),p(a,us,t),p(a,ee,t),s(ee,sl),p(a,ms,t),g(xa,a,t),p(a,fs,t),p(a,J,t),s(J,aa),s(aa,qe),g(Ea,qe,null),s(J,tl),s(J,Re),s(Re,ll),p(a,gs,t),p(a,ea,t),s(ea,nl),s(ea,He),s(He,rl),s(ea,ol),p(a,_s,t),g(Ca,a,t),p(a,vs,t),p(a,se,t),s(se,il),p(a,js,t),g(ka,a,t),p(a,$s,t),p(a,te,t),s(te,pl),p(a,bs,t),g(Ma,a,t),p(a,ys,t),p(a,le,t),s(le,cl),p(a,ws,t),g(Ta,a,t),p(a,xs,t),p(a,sa,t),s(sa,hl),s(sa,ne),s(ne,dl),s(sa,ul),p(a,Es,t),p(a,U,t),s(U,ta),s(ta,Se),g(Pa,Se,null),s(U,ml),s(U,Ne),s(Ne,fl),p(a,Cs,t),p(a,N,t),s(N,gl),s(N,Da),s(Da,_l),s(N,vl),s(N,Aa),s(Aa,jl),s(N,$l),p(a,ks,t),g(la,a,t),p(a,Ms,t),g(qa,a,t),p(a,Ts,t),p(a,Y,t),s(Y,na),s(na,Ie),g(Ra,Ie,null),s(Y,bl),s(Y,Oe),s(Oe,yl),p(a,Ps,t),p(a,A,t),s(A,wl),s(A,Le),s(Le,xl),s(A,El),s(A,re),s(re,Cl),s(A,kl),s(A,oe),s(oe,Ml),s(A,Tl),p(a,Ds,t),p(a,ie,t),s(ie,Pl),p(a,As,t),g(Ha,a,t),p(a,qs,t),p(a,pe,t),s(pe,Dl),p(a,Rs,t),g(Sa,a,t),p(a,Hs,t),p(a,ce,t),s(ce,Al),p(a,Ss,t),g(Na,a,t),p(a,Ns,t),p(a,ra,t),s(ra,ql),s(ra,Ia),s(Ia,Rl),s(ra,Hl),p(a,Is,t),p(a,I,t),s(I,Sl),s(I,Fe),s(Fe,Nl),s(I,Il),s(I,Be),s(Be,Ol),s(I,Ll),p(a,Os,t),g(Oa,a,t),p(a,Ls,t),p(a,oa,t),s(oa,Fl),s(oa,La),s(La,Bl),s(oa,Jl),p(a,Fs,t),p(a,W,t),s(W,ia),s(ia,Je),g(Fa,Je,null),s(W,Ul),s(W,Ue),s(Ue,Yl),p(a,Bs,t),p(a,w,t),s(w,Wl),s(w,Ye),s(Ye,zl),s(w,Vl),s(w,he),s(he,Gl),s(w,Kl),s(w,We),s(We,Ql),s(w,Xl),s(w,ze),s(ze,Zl),s(w,an),s(w,Ve),s(Ve,en),s(w,sn),s(w,Ba),s(Ba,tn),s(w,ln),p(a,Js,t),g(pa,a,t),p(a,Us,t),g(Ja,a,t),p(a,Ys,t),p(a,ca,t),s(ca,nn),s(ca,Ge),s(Ge,rn),s(ca,on),p(a,Ws,t),g(Ua,a,t),p(a,zs,t),p(a,ha,t),s(ha,pn),s(ha,Ke),s(Ke,cn),s(ha,hn),p(a,Vs,t),g(Ya,a,t),p(a,Gs,t),p(a,da,t),s(da,dn),s(da,Qe),s(Qe,un),s(da,mn),p(a,Ks,t),g(Wa,a,t),Qs=!0},p(a,[t]){const za={};t&2&&(za.$$scope={dirty:t,ctx:a}),la.$set(za);const Xe={};t&2&&(Xe.$$scope={dirty:t,ctx:a}),pa.$set(Xe)},i(a){Qs||(_(y.$$.fragment,a),_(ga.$$.fragment,a),_(va.$$.fragment,a),_(ja.$$.fragment,a),_($a.$$.fragment,a),_(ba.$$.fragment,a),_(wa.$$.fragment,a),_(xa.$$.fragment,a),_(Ea.$$.fragment,a),_(Ca.$$.fragment,a),_(ka.$$.fragment,a),_(Ma.$$.fragment,a),_(Ta.$$.fragment,a),_(Pa.$$.fragment,a),_(la.$$.fragment,a),_(qa.$$.fragment,a),_(Ra.$$.fragment,a),_(Ha.$$.fragment,a),_(Sa.$$.fragment,a),_(Na.$$.fragment,a),_(Oa.$$.fragment,a),_(Fa.$$.fragment,a),_(pa.$$.fragment,a),_(Ja.$$.fragment,a),_(Ua.$$.fragment,a),_(Ya.$$.fragment,a),_(Wa.$$.fragment,a),Qs=!0)},o(a){v(y.$$.fragment,a),v(ga.$$.fragment,a),v(va.$$.fragment,a),v(ja.$$.fragment,a),v($a.$$.fragment,a),v(ba.$$.fragment,a),v(wa.$$.fragment,a),v(xa.$$.fragment,a),v(Ea.$$.fragment,a),v(Ca.$$.fragment,a),v(ka.$$.fragment,a),v(Ma.$$.fragment,a),v(Ta.$$.fragment,a),v(Pa.$$.fragment,a),v(la.$$.fragment,a),v(qa.$$.fragment,a),v(Ra.$$.fragment,a),v(Ha.$$.fragment,a),v(Sa.$$.fragment,a),v(Na.$$.fragment,a),v(Oa.$$.fragment,a),v(Fa.$$.fragment,a),v(pa.$$.fragment,a),v(Ja.$$.fragment,a),v(Ua.$$.fragment,a),v(Ya.$$.fragment,a),v(Wa.$$.fragment,a),Qs=!1},d(a){e(u),a&&e(D),a&&e(b),j(y),a&&e($),a&&e(C),a&&e(es),a&&e(L),j(ga),a&&e(ss),a&&e(R),a&&e(ts),j(va,a),a&&e(ls),a&&e(Qa),a&&e(ns),a&&e(H),a&&e(rs),a&&e(F),j(ja),a&&e(os),a&&e(B),j($a),a&&e(is),a&&e(X),a&&e(ps),j(ba,a),a&&e(cs),a&&e(Za),a&&e(hs),a&&e(Z),a&&e(ds),j(wa,a),a&&e(us),a&&e(ee),a&&e(ms),j(xa,a),a&&e(fs),a&&e(J),j(Ea),a&&e(gs),a&&e(ea),a&&e(_s),j(Ca,a),a&&e(vs),a&&e(se),a&&e(js),j(ka,a),a&&e($s),a&&e(te),a&&e(bs),j(Ma,a),a&&e(ys),a&&e(le),a&&e(ws),j(Ta,a),a&&e(xs),a&&e(sa),a&&e(Es),a&&e(U),j(Pa),a&&e(Cs),a&&e(N),a&&e(ks),j(la,a),a&&e(Ms),j(qa,a),a&&e(Ts),a&&e(Y),j(Ra),a&&e(Ps),a&&e(A),a&&e(Ds),a&&e(ie),a&&e(As),j(Ha,a),a&&e(qs),a&&e(pe),a&&e(Rs),j(Sa,a),a&&e(Hs),a&&e(ce),a&&e(Ss),j(Na,a),a&&e(Ns),a&&e(ra),a&&e(Is),a&&e(I),a&&e(Os),j(Oa,a),a&&e(Ls),a&&e(oa),a&&e(Fs),a&&e(W),j(Fa),a&&e(Bs),a&&e(w),a&&e(Js),j(pa,a),a&&e(Us),j(Ja,a),a&&e(Ys),a&&e(ca),a&&e(Ws),j(Ua,a),a&&e(zs),a&&e(ha),a&&e(Vs),j(Ya,a),a&&e(Gs),a&&e(da),a&&e(Ks),j(Wa,a)}}}const Nr={local:"creating-and-sharing-model-cards",sections:[{local:"loading-a-model-card-from-the-hub",title:"Loading a Model Card from the Hub"},{local:"creating-model-cards",sections:[{local:"from-text",title:"From Text"},{local:"from-a-jinja-template",title:"From a Jinja Template"},{local:"from-the-default-template",title:"From the Default Template"}],title:"Creating Model Cards"},{local:"sharing-model-cards",sections:[{local:"including-evaluation-results",title:"Including Evaluation Results"}],title:"Sharing Model Cards"}],title:"Creating and Sharing Model Cards"};function Ir(Ga){return qr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Jr extends Tr{constructor(u){super();Pr(this,u,Ir,Sr,Dr,{})}}export{Jr as default,Nr as metadata};
