import{S as Tr,i as Pr,s as Dr,e as r,k as c,w as f,t as l,M as Ar,c as o,d as e,m as h,a as i,x as m,h as n,b as d,G as s,g as p,y as g,q as _,o as v,B as j,v as qr}from"../chunks/vendor-hf-doc-builder.js";import{T as Mr}from"../chunks/Tip-hf-doc-builder.js";import{I as fa}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as x}from"../chunks/CodeBlock-hf-doc-builder.js";function Rr(Ga){let u,D,$,E,T,y,q,P;return{c(){u=r("p"),D=l("Note that you will have to have Jinja2 installed to use "),$=r("code"),E=l("from_template"),T=l(". You can do so with "),y=r("code"),q=l("pip install Jinja2"),P=l(".")},l(k){u=o(k,"P",{});var b=i(u);D=n(b,"Note that you will have to have Jinja2 installed to use "),$=o(b,"CODE",{});var C=i($);E=n(C,"from_template"),C.forEach(e),T=n(b,". You can do so with "),y=o(b,"CODE",{});var O=i(y);q=n(O,"pip install Jinja2"),O.forEach(e),P=n(b,"."),b.forEach(e)},m(k,b){p(k,u,b),s(u,D),s(u,$),s($,E),s(u,T),s(u,y),s(y,q),s(u,P)},d(k){k&&e(u)}}}function Hr(Ga){let u,D,$,E,T,y,q,P;return{c(){u=r("p"),D=l("Note that using this function requires you to include the "),$=r("code"),E=l("model_name"),T=l(" attribute in "),y=r("a"),q=l("ModelCardData"),P=l("."),this.h()},l(k){u=o(k,"P",{});var b=i(u);D=n(b,"Note that using this function requires you to include the "),$=o(b,"CODE",{});var C=i($);E=n(C,"model_name"),C.forEach(e),T=n(b," attribute in "),y=o(b,"A",{href:!0});var O=i(y);q=n(O,"ModelCardData"),O.forEach(e),P=n(b,"."),b.forEach(e),this.h()},h(){d(y,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/cards#huggingface_hub.ModelCardData")},m(k,b){p(k,u,b),s(u,D),s(u,$),s($,E),s(u,T),s(u,y),s(y,q),s(u,P)},d(k){k&&e(u)}}}function Sr(Ga){let u,D,$,E,T,y,q,P,k,b,C,O,ge,mt,gt,ma,_t,vt,es,L,z,_e,ga,jt,ve,bt,ss,R,$t,Ka,yt,wt,_a,je,xt,Et,ts,va,ls,Qa,Ct,ns,H,S,be,kt,Mt,Xa,Tt,Pt,$e,Dt,At,qt,V,ye,Rt,Ht,we,St,Nt,It,G,xe,Ot,Lt,Ee,Ft,Bt,rs,F,K,Ce,ja,Jt,ke,Ut,os,B,Q,Me,ba,Yt,Te,Wt,is,X,zt,Pe,Vt,Gt,ps,$a,cs,Za,Kt,hs,Z,ya,Qt,ae,Xt,Zt,al,De,el,ds,wa,us,ee,sl,fs,xa,ms,J,aa,Ae,Ea,tl,qe,ll,gs,ea,nl,Re,rl,ol,_s,Ca,vs,se,il,js,ka,bs,te,pl,$s,Ma,ys,le,cl,ws,Ta,xs,sa,hl,ne,dl,ul,Es,U,ta,He,Pa,fl,Se,ml,Cs,N,gl,Da,_l,vl,Aa,jl,bl,ks,la,Ms,qa,Ts,Y,na,Ne,Ra,$l,Ie,yl,Ps,A,wl,Oe,xl,El,Le,Cl,kl,re,Ml,Tl,Ds,oe,Pl,As,Ha,qs,ie,Dl,Rs,Sa,Hs,pe,Al,Ss,Na,Ns,ra,ql,Ia,Rl,Hl,Is,I,Sl,Fe,Nl,Il,Be,Ol,Ll,Os,Oa,Ls,oa,Fl,La,Bl,Jl,Fs,W,ia,Je,Fa,Ul,Ue,Yl,Bs,w,Wl,Ye,zl,Vl,ce,Gl,Kl,We,Ql,Xl,ze,Zl,an,Ve,en,sn,Ba,tn,ln,Js,pa,Us,Ja,Ys,ca,nn,Ge,rn,on,Ws,Ua,zs,ha,pn,Ke,cn,hn,Vs,Ya,Gs,da,dn,Qe,un,fn,Ks,Wa,Qs;return y=new fa({}),ga=new fa({}),va=new x({props:{code:`from huggingface_hub import ModelCard

card = ModelCard.load('nateraw/vit-base-beans')`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> ModelCard

card = ModelCard.load(<span class="hljs-string">&#x27;nateraw/vit-base-beans&#x27;</span>)`}}),ja=new fa({}),ba=new fa({}),$a=new x({props:{code:`content = """
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

<span class="hljs-string">This</span> <span class="hljs-string">model</span> <span class="hljs-string">created</span> <span class="hljs-string">by</span> [<span class="hljs-string">@nateraw</span>]<span class="hljs-string">(https://github.com/nateraw)</span>`}}),Ea=new fa({}),Ca=new x({props:{code:`from pathlib import Path

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

<span class="hljs-string">This</span> <span class="hljs-string">model</span> <span class="hljs-string">was</span> <span class="hljs-string">created</span> <span class="hljs-string">by</span> [<span class="hljs-string">@nateraw</span>]<span class="hljs-string">(https://hf.co/nateraw).</span>`}}),Pa=new fa({}),la=new Mr({props:{$$slots:{default:[Rr]},$$scope:{ctx:Ga}}}),qa=new x({props:{code:`card_data = ModelCardData(language='en', license='mit', library_name='keras')
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
<span class="hljs-built_in">print</span>(card)`}}),Ra=new fa({}),Ha=new x({props:{code:`from huggingface_hub import whoami, create_repo

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
)`}}),Na=new x({props:{code:"card.push_to_hub(repo_id)",highlighted:"card.push_to_hub(repo_id)"}}),Oa=new x({props:{code:"card.push_to_hub(repo_id, create_pr=True)",highlighted:'card.push_to_hub(repo_id, create_pr=<span class="hljs-literal">True</span>)'}}),Fa=new fa({}),pa=new Mr({props:{$$slots:{default:[Hr]},$$scope:{ctx:Ga}}}),Ja=new x({props:{code:`card_data = ModelCardData(
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
      <span class="hljs-attribute">value</span><span class="hljs-punctuation">:</span> <span class="hljs-string">0.65</span>`}}),{c(){u=r("meta"),D=c(),$=r("h1"),E=r("a"),T=r("span"),f(y.$$.fragment),q=c(),P=r("span"),k=l("Creating and Sharing Model Cards"),b=c(),C=r("p"),O=l("The "),ge=r("code"),mt=l("huggingface_hub"),gt=l(` library provides a Python interface to create, share, and update Model Cards.
Visit `),ma=r("a"),_t=l("the dedicated documentation page"),vt=l(`
for a deeper view of what Model Cards on the Hub are, and how they work under the hood.`),es=c(),L=r("h2"),z=r("a"),_e=r("span"),f(ga.$$.fragment),jt=c(),ve=r("span"),bt=l("Loading a Model Card from the Hub"),ss=c(),R=r("p"),$t=l("To load an existing card from the Hub, you can use the "),Ka=r("a"),yt=l("ModelCard.load()"),wt=l(" function. Here, we\u2019ll load the card from "),_a=r("a"),je=r("code"),xt=l("nateraw/vit-base-beans"),Et=l("."),ts=c(),f(va.$$.fragment),ls=c(),Qa=r("p"),Ct=l("This card has some helpful attributes that you may want to access/leverage:"),ns=c(),H=r("ul"),S=r("li"),be=r("code"),kt=l("card.data"),Mt=l(": Returns a "),Xa=r("a"),Tt=l("ModelCardData"),Pt=l(" instance with the model card\u2019s metadata. Call "),$e=r("code"),Dt=l(".to_dict()"),At=l(" on this instance to get the representation as a dictionary."),qt=c(),V=r("li"),ye=r("code"),Rt=l("card.text"),Ht=l(": Returns the text of the card, "),we=r("em"),St=l("excluding the metadata header"),Nt=l("."),It=c(),G=r("li"),xe=r("code"),Ot=l("card.content"),Lt=l(": Returns the text content of the card, "),Ee=r("em"),Ft=l("including the metadata header"),Bt=l("."),rs=c(),F=r("h2"),K=r("a"),Ce=r("span"),f(ja.$$.fragment),Jt=c(),ke=r("span"),Ut=l("Creating Model Cards"),os=c(),B=r("h3"),Q=r("a"),Me=r("span"),f(ba.$$.fragment),Yt=c(),Te=r("span"),Wt=l("From Text"),is=c(),X=r("p"),zt=l("To initialize a Model Card from text, just pass the text content of the card to the "),Pe=r("code"),Vt=l("ModelCard"),Gt=l(" on init."),ps=c(),f($a.$$.fragment),cs=c(),Za=r("p"),Kt=l("Another way you might want to do this is with f-strings. In the following example, we:"),hs=c(),Z=r("ul"),ya=r("li"),Qt=l("Use "),ae=r("a"),Xt=l("ModelCardData.to_yaml()"),Zt=l(" to convert metadata we defined to YAML so we can use it to insert the YAML block in the model card."),al=c(),De=r("li"),el=l("Show how you might use a template variable via Python f-strings."),ds=c(),f(wa.$$.fragment),us=c(),ee=r("p"),sl=l("The above example would leave us with a card that looks like this:"),fs=c(),f(xa.$$.fragment),ms=c(),J=r("h3"),aa=r("a"),Ae=r("span"),f(Ea.$$.fragment),tl=c(),qe=r("span"),ll=l("From a Jinja Template"),gs=c(),ea=r("p"),nl=l("If you have "),Re=r("code"),rl=l("Jinja2"),ol=l(" installed, you can create Model Cards from a jinja template file. Let\u2019s see a basic example:"),_s=c(),f(Ca.$$.fragment),vs=c(),se=r("p"),il=l("The resulting card\u2019s markdown looks like this:"),js=c(),f(ka.$$.fragment),bs=c(),te=r("p"),pl=l("If you update any card.data, it\u2019ll reflect in the card itself."),$s=c(),f(Ma.$$.fragment),ys=c(),le=r("p"),cl=l("Now, as you can see, the metadata header has been updated:"),ws=c(),f(Ta.$$.fragment),xs=c(),sa=r("p"),hl=l("As you update the card data, you can validate the card is still valid against the Hub by calling "),ne=r("a"),dl=l("ModelCard.validate()"),ul=l(". This ensures that the card passes any validation rules set up on the Hugging Face Hub."),Es=c(),U=r("h3"),ta=r("a"),He=r("span"),f(Pa.$$.fragment),fl=c(),Se=r("span"),ml=l("From the Default Template"),Cs=c(),N=r("p"),gl=l("Instead of using your own template, you can also use the "),Da=r("a"),_l=l("default template"),vl=l(", which is a fully featured model card with tons of sections you may want to fill out. Under the hood, it uses "),Aa=r("a"),jl=l("Jinja2"),bl=l(" to fill out a template file."),ks=c(),f(la.$$.fragment),Ms=c(),f(qa.$$.fragment),Ts=c(),Y=r("h2"),na=r("a"),Ne=r("span"),f(Ra.$$.fragment),$l=c(),Ie=r("span"),yl=l("Sharing Model Cards"),Ps=c(),A=r("p"),wl=l("If you\u2019re authenticated with the Hugging Face Hub (either by using "),Oe=r("code"),xl=l("huggingface-cli login"),El=l(" or "),Le=r("code"),Cl=l("huggingface_hub.notebook_login()"),kl=l("), you can push cards to the Hub by simply calling "),re=r("a"),Ml=l("ModelCard.push_to_hub()"),Tl=l(". Let\u2019s take a look at how to do that\u2026"),Ds=c(),oe=r("p"),Pl=l("First, we\u2019ll create a new repo called \u2018hf-hub-modelcards-pr-test\u2019 under the authenticated user\u2019s namespace:"),As=c(),f(Ha.$$.fragment),qs=c(),ie=r("p"),Dl=l("Then, we\u2019ll create a card from the default template (same as the one defined in the section above):"),Rs=c(),f(Sa.$$.fragment),Hs=c(),pe=r("p"),Al=l("Finally, we\u2019ll push that up to the hub"),Ss=c(),f(Na.$$.fragment),Ns=c(),ra=r("p"),ql=l("You can check out the resulting card "),Ia=r("a"),Rl=l("here"),Hl=l("."),Is=c(),I=r("p"),Sl=l("If you instead wanted to push a card as a pull request, you can just say "),Fe=r("code"),Nl=l("create_pr=True"),Il=l(" when calling "),Be=r("code"),Ol=l("push_to_hub"),Ll=l(":"),Os=c(),f(Oa.$$.fragment),Ls=c(),oa=r("p"),Fl=l("A resulting PR created from this command can be seen "),La=r("a"),Bl=l("here"),Jl=l("."),Fs=c(),W=r("h3"),ia=r("a"),Je=r("span"),f(Fa.$$.fragment),Ul=c(),Ue=r("span"),Yl=l("Including Evaluation Results"),Bs=c(),w=r("p"),Wl=l("To include evaluation results in the metadata "),Ye=r("code"),zl=l("model-index"),Vl=l(", you can pass an "),ce=r("a"),Gl=l("EvalResult"),Kl=l(" or a list of "),We=r("code"),Ql=l("EvalResult"),Xl=l(" with your associated evaluation results. Under the hood it\u2019ll create the "),ze=r("code"),Zl=l("model-index"),an=l(" when you call "),Ve=r("code"),en=l("card.data.to_dict()"),sn=l(". For more information on how this works, you can check out "),Ba=r("a"),tn=l("this section of the Hub docs"),ln=l("."),Js=c(),f(pa.$$.fragment),Us=c(),f(Ja.$$.fragment),Ys=c(),ca=r("p"),nn=l("The resulting "),Ge=r("code"),rn=l("card.data"),on=l(" should look like this:"),Ws=c(),f(Ua.$$.fragment),zs=c(),ha=r("p"),pn=l("If you have more than one evaluation result you\u2019d like to share, just pass a list of "),Ke=r("code"),cn=l("EvalResult"),hn=l(":"),Vs=c(),f(Ya.$$.fragment),Gs=c(),da=r("p"),dn=l("Which should leave you with the following "),Qe=r("code"),un=l("card.data"),fn=l(":"),Ks=c(),f(Wa.$$.fragment),this.h()},l(a){const t=Ar('[data-svelte="svelte-1phssyn"]',document.head);u=o(t,"META",{name:!0,content:!0}),t.forEach(e),D=h(a),$=o(a,"H1",{class:!0});var za=i($);E=o(za,"A",{id:!0,class:!0,href:!0});var Xe=i(E);T=o(Xe,"SPAN",{});var mn=i(T);m(y.$$.fragment,mn),mn.forEach(e),Xe.forEach(e),q=h(za),P=o(za,"SPAN",{});var gn=i(P);k=n(gn,"Creating and Sharing Model Cards"),gn.forEach(e),za.forEach(e),b=h(a),C=o(a,"P",{});var he=i(C);O=n(he,"The "),ge=o(he,"CODE",{});var _n=i(ge);mt=n(_n,"huggingface_hub"),_n.forEach(e),gt=n(he,` library provides a Python interface to create, share, and update Model Cards.
Visit `),ma=o(he,"A",{href:!0,rel:!0});var vn=i(ma);_t=n(vn,"the dedicated documentation page"),vn.forEach(e),vt=n(he,`
for a deeper view of what Model Cards on the Hub are, and how they work under the hood.`),he.forEach(e),es=h(a),L=o(a,"H2",{class:!0});var Xs=i(L);z=o(Xs,"A",{id:!0,class:!0,href:!0});var jn=i(z);_e=o(jn,"SPAN",{});var bn=i(_e);m(ga.$$.fragment,bn),bn.forEach(e),jn.forEach(e),jt=h(Xs),ve=o(Xs,"SPAN",{});var $n=i(ve);bt=n($n,"Loading a Model Card from the Hub"),$n.forEach(e),Xs.forEach(e),ss=h(a),R=o(a,"P",{});var de=i(R);$t=n(de,"To load an existing card from the Hub, you can use the "),Ka=o(de,"A",{href:!0});var yn=i(Ka);yt=n(yn,"ModelCard.load()"),yn.forEach(e),wt=n(de," function. Here, we\u2019ll load the card from "),_a=o(de,"A",{href:!0,rel:!0});var wn=i(_a);je=o(wn,"CODE",{});var xn=i(je);xt=n(xn,"nateraw/vit-base-beans"),xn.forEach(e),wn.forEach(e),Et=n(de,"."),de.forEach(e),ts=h(a),m(va.$$.fragment,a),ls=h(a),Qa=o(a,"P",{});var En=i(Qa);Ct=n(En,"This card has some helpful attributes that you may want to access/leverage:"),En.forEach(e),ns=h(a),H=o(a,"UL",{});var ue=i(H);S=o(ue,"LI",{});var Va=i(S);be=o(Va,"CODE",{});var Cn=i(be);kt=n(Cn,"card.data"),Cn.forEach(e),Mt=n(Va,": Returns a "),Xa=o(Va,"A",{href:!0});var kn=i(Xa);Tt=n(kn,"ModelCardData"),kn.forEach(e),Pt=n(Va," instance with the model card\u2019s metadata. Call "),$e=o(Va,"CODE",{});var Mn=i($e);Dt=n(Mn,".to_dict()"),Mn.forEach(e),At=n(Va," on this instance to get the representation as a dictionary."),Va.forEach(e),qt=h(ue),V=o(ue,"LI",{});var Ze=i(V);ye=o(Ze,"CODE",{});var Tn=i(ye);Rt=n(Tn,"card.text"),Tn.forEach(e),Ht=n(Ze,": Returns the text of the card, "),we=o(Ze,"EM",{});var Pn=i(we);St=n(Pn,"excluding the metadata header"),Pn.forEach(e),Nt=n(Ze,"."),Ze.forEach(e),It=h(ue),G=o(ue,"LI",{});var as=i(G);xe=o(as,"CODE",{});var Dn=i(xe);Ot=n(Dn,"card.content"),Dn.forEach(e),Lt=n(as,": Returns the text content of the card, "),Ee=o(as,"EM",{});var An=i(Ee);Ft=n(An,"including the metadata header"),An.forEach(e),Bt=n(as,"."),as.forEach(e),ue.forEach(e),rs=h(a),F=o(a,"H2",{class:!0});var Zs=i(F);K=o(Zs,"A",{id:!0,class:!0,href:!0});var qn=i(K);Ce=o(qn,"SPAN",{});var Rn=i(Ce);m(ja.$$.fragment,Rn),Rn.forEach(e),qn.forEach(e),Jt=h(Zs),ke=o(Zs,"SPAN",{});var Hn=i(ke);Ut=n(Hn,"Creating Model Cards"),Hn.forEach(e),Zs.forEach(e),os=h(a),B=o(a,"H3",{class:!0});var at=i(B);Q=o(at,"A",{id:!0,class:!0,href:!0});var Sn=i(Q);Me=o(Sn,"SPAN",{});var Nn=i(Me);m(ba.$$.fragment,Nn),Nn.forEach(e),Sn.forEach(e),Yt=h(at),Te=o(at,"SPAN",{});var In=i(Te);Wt=n(In,"From Text"),In.forEach(e),at.forEach(e),is=h(a),X=o(a,"P",{});var et=i(X);zt=n(et,"To initialize a Model Card from text, just pass the text content of the card to the "),Pe=o(et,"CODE",{});var On=i(Pe);Vt=n(On,"ModelCard"),On.forEach(e),Gt=n(et," on init."),et.forEach(e),ps=h(a),m($a.$$.fragment,a),cs=h(a),Za=o(a,"P",{});var Ln=i(Za);Kt=n(Ln,"Another way you might want to do this is with f-strings. In the following example, we:"),Ln.forEach(e),hs=h(a),Z=o(a,"UL",{});var st=i(Z);ya=o(st,"LI",{});var tt=i(ya);Qt=n(tt,"Use "),ae=o(tt,"A",{href:!0});var Fn=i(ae);Xt=n(Fn,"ModelCardData.to_yaml()"),Fn.forEach(e),Zt=n(tt," to convert metadata we defined to YAML so we can use it to insert the YAML block in the model card."),tt.forEach(e),al=h(st),De=o(st,"LI",{});var Bn=i(De);el=n(Bn,"Show how you might use a template variable via Python f-strings."),Bn.forEach(e),st.forEach(e),ds=h(a),m(wa.$$.fragment,a),us=h(a),ee=o(a,"P",{});var Jn=i(ee);sl=n(Jn,"The above example would leave us with a card that looks like this:"),Jn.forEach(e),fs=h(a),m(xa.$$.fragment,a),ms=h(a),J=o(a,"H3",{class:!0});var lt=i(J);aa=o(lt,"A",{id:!0,class:!0,href:!0});var Un=i(aa);Ae=o(Un,"SPAN",{});var Yn=i(Ae);m(Ea.$$.fragment,Yn),Yn.forEach(e),Un.forEach(e),tl=h(lt),qe=o(lt,"SPAN",{});var Wn=i(qe);ll=n(Wn,"From a Jinja Template"),Wn.forEach(e),lt.forEach(e),gs=h(a),ea=o(a,"P",{});var nt=i(ea);nl=n(nt,"If you have "),Re=o(nt,"CODE",{});var zn=i(Re);rl=n(zn,"Jinja2"),zn.forEach(e),ol=n(nt," installed, you can create Model Cards from a jinja template file. Let\u2019s see a basic example:"),nt.forEach(e),_s=h(a),m(Ca.$$.fragment,a),vs=h(a),se=o(a,"P",{});var Vn=i(se);il=n(Vn,"The resulting card\u2019s markdown looks like this:"),Vn.forEach(e),js=h(a),m(ka.$$.fragment,a),bs=h(a),te=o(a,"P",{});var Gn=i(te);pl=n(Gn,"If you update any card.data, it\u2019ll reflect in the card itself."),Gn.forEach(e),$s=h(a),m(Ma.$$.fragment,a),ys=h(a),le=o(a,"P",{});var Kn=i(le);cl=n(Kn,"Now, as you can see, the metadata header has been updated:"),Kn.forEach(e),ws=h(a),m(Ta.$$.fragment,a),xs=h(a),sa=o(a,"P",{});var rt=i(sa);hl=n(rt,"As you update the card data, you can validate the card is still valid against the Hub by calling "),ne=o(rt,"A",{href:!0});var Qn=i(ne);dl=n(Qn,"ModelCard.validate()"),Qn.forEach(e),ul=n(rt,". This ensures that the card passes any validation rules set up on the Hugging Face Hub."),rt.forEach(e),Es=h(a),U=o(a,"H3",{class:!0});var ot=i(U);ta=o(ot,"A",{id:!0,class:!0,href:!0});var Xn=i(ta);He=o(Xn,"SPAN",{});var Zn=i(He);m(Pa.$$.fragment,Zn),Zn.forEach(e),Xn.forEach(e),fl=h(ot),Se=o(ot,"SPAN",{});var ar=i(Se);ml=n(ar,"From the Default Template"),ar.forEach(e),ot.forEach(e),Cs=h(a),N=o(a,"P",{});var fe=i(N);gl=n(fe,"Instead of using your own template, you can also use the "),Da=o(fe,"A",{href:!0,rel:!0});var er=i(Da);_l=n(er,"default template"),er.forEach(e),vl=n(fe,", which is a fully featured model card with tons of sections you may want to fill out. Under the hood, it uses "),Aa=o(fe,"A",{href:!0,rel:!0});var sr=i(Aa);jl=n(sr,"Jinja2"),sr.forEach(e),bl=n(fe," to fill out a template file."),fe.forEach(e),ks=h(a),m(la.$$.fragment,a),Ms=h(a),m(qa.$$.fragment,a),Ts=h(a),Y=o(a,"H2",{class:!0});var it=i(Y);na=o(it,"A",{id:!0,class:!0,href:!0});var tr=i(na);Ne=o(tr,"SPAN",{});var lr=i(Ne);m(Ra.$$.fragment,lr),lr.forEach(e),tr.forEach(e),$l=h(it),Ie=o(it,"SPAN",{});var nr=i(Ie);yl=n(nr,"Sharing Model Cards"),nr.forEach(e),it.forEach(e),Ps=h(a),A=o(a,"P",{});var ua=i(A);wl=n(ua,"If you\u2019re authenticated with the Hugging Face Hub (either by using "),Oe=o(ua,"CODE",{});var rr=i(Oe);xl=n(rr,"huggingface-cli login"),rr.forEach(e),El=n(ua," or "),Le=o(ua,"CODE",{});var or=i(Le);Cl=n(or,"huggingface_hub.notebook_login()"),or.forEach(e),kl=n(ua,"), you can push cards to the Hub by simply calling "),re=o(ua,"A",{href:!0});var ir=i(re);Ml=n(ir,"ModelCard.push_to_hub()"),ir.forEach(e),Tl=n(ua,". Let\u2019s take a look at how to do that\u2026"),ua.forEach(e),Ds=h(a),oe=o(a,"P",{});var pr=i(oe);Pl=n(pr,"First, we\u2019ll create a new repo called \u2018hf-hub-modelcards-pr-test\u2019 under the authenticated user\u2019s namespace:"),pr.forEach(e),As=h(a),m(Ha.$$.fragment,a),qs=h(a),ie=o(a,"P",{});var cr=i(ie);Dl=n(cr,"Then, we\u2019ll create a card from the default template (same as the one defined in the section above):"),cr.forEach(e),Rs=h(a),m(Sa.$$.fragment,a),Hs=h(a),pe=o(a,"P",{});var hr=i(pe);Al=n(hr,"Finally, we\u2019ll push that up to the hub"),hr.forEach(e),Ss=h(a),m(Na.$$.fragment,a),Ns=h(a),ra=o(a,"P",{});var pt=i(ra);ql=n(pt,"You can check out the resulting card "),Ia=o(pt,"A",{href:!0,rel:!0});var dr=i(Ia);Rl=n(dr,"here"),dr.forEach(e),Hl=n(pt,"."),pt.forEach(e),Is=h(a),I=o(a,"P",{});var me=i(I);Sl=n(me,"If you instead wanted to push a card as a pull request, you can just say "),Fe=o(me,"CODE",{});var ur=i(Fe);Nl=n(ur,"create_pr=True"),ur.forEach(e),Il=n(me," when calling "),Be=o(me,"CODE",{});var fr=i(Be);Ol=n(fr,"push_to_hub"),fr.forEach(e),Ll=n(me,":"),me.forEach(e),Os=h(a),m(Oa.$$.fragment,a),Ls=h(a),oa=o(a,"P",{});var ct=i(oa);Fl=n(ct,"A resulting PR created from this command can be seen "),La=o(ct,"A",{href:!0,rel:!0});var mr=i(La);Bl=n(mr,"here"),mr.forEach(e),Jl=n(ct,"."),ct.forEach(e),Fs=h(a),W=o(a,"H3",{class:!0});var ht=i(W);ia=o(ht,"A",{id:!0,class:!0,href:!0});var gr=i(ia);Je=o(gr,"SPAN",{});var _r=i(Je);m(Fa.$$.fragment,_r),_r.forEach(e),gr.forEach(e),Ul=h(ht),Ue=o(ht,"SPAN",{});var vr=i(Ue);Yl=n(vr,"Including Evaluation Results"),vr.forEach(e),ht.forEach(e),Bs=h(a),w=o(a,"P",{});var M=i(w);Wl=n(M,"To include evaluation results in the metadata "),Ye=o(M,"CODE",{});var jr=i(Ye);zl=n(jr,"model-index"),jr.forEach(e),Vl=n(M,", you can pass an "),ce=o(M,"A",{href:!0});var br=i(ce);Gl=n(br,"EvalResult"),br.forEach(e),Kl=n(M," or a list of "),We=o(M,"CODE",{});var $r=i(We);Ql=n($r,"EvalResult"),$r.forEach(e),Xl=n(M," with your associated evaluation results. Under the hood it\u2019ll create the "),ze=o(M,"CODE",{});var yr=i(ze);Zl=n(yr,"model-index"),yr.forEach(e),an=n(M," when you call "),Ve=o(M,"CODE",{});var wr=i(Ve);en=n(wr,"card.data.to_dict()"),wr.forEach(e),sn=n(M,". For more information on how this works, you can check out "),Ba=o(M,"A",{href:!0,rel:!0});var xr=i(Ba);tn=n(xr,"this section of the Hub docs"),xr.forEach(e),ln=n(M,"."),M.forEach(e),Js=h(a),m(pa.$$.fragment,a),Us=h(a),m(Ja.$$.fragment,a),Ys=h(a),ca=o(a,"P",{});var dt=i(ca);nn=n(dt,"The resulting "),Ge=o(dt,"CODE",{});var Er=i(Ge);rn=n(Er,"card.data"),Er.forEach(e),on=n(dt," should look like this:"),dt.forEach(e),Ws=h(a),m(Ua.$$.fragment,a),zs=h(a),ha=o(a,"P",{});var ut=i(ha);pn=n(ut,"If you have more than one evaluation result you\u2019d like to share, just pass a list of "),Ke=o(ut,"CODE",{});var Cr=i(Ke);cn=n(Cr,"EvalResult"),Cr.forEach(e),hn=n(ut,":"),ut.forEach(e),Vs=h(a),m(Ya.$$.fragment,a),Gs=h(a),da=o(a,"P",{});var ft=i(da);dn=n(ft,"Which should leave you with the following "),Qe=o(ft,"CODE",{});var kr=i(Qe);un=n(kr,"card.data"),kr.forEach(e),fn=n(ft,":"),ft.forEach(e),Ks=h(a),m(Wa.$$.fragment,a),this.h()},h(){d(u,"name","hf:doc:metadata"),d(u,"content",JSON.stringify(Nr)),d(E,"id","creating-and-sharing-model-cards"),d(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(E,"href","#creating-and-sharing-model-cards"),d($,"class","relative group"),d(ma,"href","https://huggingface.co/docs/hub/models-cards"),d(ma,"rel","nofollow"),d(z,"id","loading-a-model-card-from-the-hub"),d(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(z,"href","#loading-a-model-card-from-the-hub"),d(L,"class","relative group"),d(Ka,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/cards#huggingface_hub.repocard.RepoCard.load"),d(_a,"href","https://huggingface.co/nateraw/vit-base-beans"),d(_a,"rel","nofollow"),d(Xa,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/cards#huggingface_hub.ModelCardData"),d(K,"id","creating-model-cards"),d(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(K,"href","#creating-model-cards"),d(F,"class","relative group"),d(Q,"id","from-text"),d(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Q,"href","#from-text"),d(B,"class","relative group"),d(ae,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/cards#huggingface_hub.CardData.to_yaml"),d(aa,"id","from-a-jinja-template"),d(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(aa,"href","#from-a-jinja-template"),d(J,"class","relative group"),d(ne,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/cards#huggingface_hub.repocard.RepoCard.validate"),d(ta,"id","from-the-default-template"),d(ta,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ta,"href","#from-the-default-template"),d(U,"class","relative group"),d(Da,"href","https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/modelcard_template.md"),d(Da,"rel","nofollow"),d(Aa,"href","https://jinja.palletsprojects.com/en/3.1.x/"),d(Aa,"rel","nofollow"),d(na,"id","sharing-model-cards"),d(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(na,"href","#sharing-model-cards"),d(Y,"class","relative group"),d(re,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/cards#huggingface_hub.repocard.RepoCard.push_to_hub"),d(Ia,"href","https://huggingface.co/nateraw/hf-hub-modelcards-pr-test/blob/main/README.md"),d(Ia,"rel","nofollow"),d(La,"href","https://huggingface.co/nateraw/hf-hub-modelcards-pr-test/discussions/3"),d(La,"rel","nofollow"),d(ia,"id","including-evaluation-results"),d(ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ia,"href","#including-evaluation-results"),d(W,"class","relative group"),d(ce,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/cards#huggingface_hub.EvalResult"),d(Ba,"href","https://huggingface.co/docs/hub/models-cards#evaluation-results"),d(Ba,"rel","nofollow")},m(a,t){s(document.head,u),p(a,D,t),p(a,$,t),s($,E),s(E,T),g(y,T,null),s($,q),s($,P),s(P,k),p(a,b,t),p(a,C,t),s(C,O),s(C,ge),s(ge,mt),s(C,gt),s(C,ma),s(ma,_t),s(C,vt),p(a,es,t),p(a,L,t),s(L,z),s(z,_e),g(ga,_e,null),s(L,jt),s(L,ve),s(ve,bt),p(a,ss,t),p(a,R,t),s(R,$t),s(R,Ka),s(Ka,yt),s(R,wt),s(R,_a),s(_a,je),s(je,xt),s(R,Et),p(a,ts,t),g(va,a,t),p(a,ls,t),p(a,Qa,t),s(Qa,Ct),p(a,ns,t),p(a,H,t),s(H,S),s(S,be),s(be,kt),s(S,Mt),s(S,Xa),s(Xa,Tt),s(S,Pt),s(S,$e),s($e,Dt),s(S,At),s(H,qt),s(H,V),s(V,ye),s(ye,Rt),s(V,Ht),s(V,we),s(we,St),s(V,Nt),s(H,It),s(H,G),s(G,xe),s(xe,Ot),s(G,Lt),s(G,Ee),s(Ee,Ft),s(G,Bt),p(a,rs,t),p(a,F,t),s(F,K),s(K,Ce),g(ja,Ce,null),s(F,Jt),s(F,ke),s(ke,Ut),p(a,os,t),p(a,B,t),s(B,Q),s(Q,Me),g(ba,Me,null),s(B,Yt),s(B,Te),s(Te,Wt),p(a,is,t),p(a,X,t),s(X,zt),s(X,Pe),s(Pe,Vt),s(X,Gt),p(a,ps,t),g($a,a,t),p(a,cs,t),p(a,Za,t),s(Za,Kt),p(a,hs,t),p(a,Z,t),s(Z,ya),s(ya,Qt),s(ya,ae),s(ae,Xt),s(ya,Zt),s(Z,al),s(Z,De),s(De,el),p(a,ds,t),g(wa,a,t),p(a,us,t),p(a,ee,t),s(ee,sl),p(a,fs,t),g(xa,a,t),p(a,ms,t),p(a,J,t),s(J,aa),s(aa,Ae),g(Ea,Ae,null),s(J,tl),s(J,qe),s(qe,ll),p(a,gs,t),p(a,ea,t),s(ea,nl),s(ea,Re),s(Re,rl),s(ea,ol),p(a,_s,t),g(Ca,a,t),p(a,vs,t),p(a,se,t),s(se,il),p(a,js,t),g(ka,a,t),p(a,bs,t),p(a,te,t),s(te,pl),p(a,$s,t),g(Ma,a,t),p(a,ys,t),p(a,le,t),s(le,cl),p(a,ws,t),g(Ta,a,t),p(a,xs,t),p(a,sa,t),s(sa,hl),s(sa,ne),s(ne,dl),s(sa,ul),p(a,Es,t),p(a,U,t),s(U,ta),s(ta,He),g(Pa,He,null),s(U,fl),s(U,Se),s(Se,ml),p(a,Cs,t),p(a,N,t),s(N,gl),s(N,Da),s(Da,_l),s(N,vl),s(N,Aa),s(Aa,jl),s(N,bl),p(a,ks,t),g(la,a,t),p(a,Ms,t),g(qa,a,t),p(a,Ts,t),p(a,Y,t),s(Y,na),s(na,Ne),g(Ra,Ne,null),s(Y,$l),s(Y,Ie),s(Ie,yl),p(a,Ps,t),p(a,A,t),s(A,wl),s(A,Oe),s(Oe,xl),s(A,El),s(A,Le),s(Le,Cl),s(A,kl),s(A,re),s(re,Ml),s(A,Tl),p(a,Ds,t),p(a,oe,t),s(oe,Pl),p(a,As,t),g(Ha,a,t),p(a,qs,t),p(a,ie,t),s(ie,Dl),p(a,Rs,t),g(Sa,a,t),p(a,Hs,t),p(a,pe,t),s(pe,Al),p(a,Ss,t),g(Na,a,t),p(a,Ns,t),p(a,ra,t),s(ra,ql),s(ra,Ia),s(Ia,Rl),s(ra,Hl),p(a,Is,t),p(a,I,t),s(I,Sl),s(I,Fe),s(Fe,Nl),s(I,Il),s(I,Be),s(Be,Ol),s(I,Ll),p(a,Os,t),g(Oa,a,t),p(a,Ls,t),p(a,oa,t),s(oa,Fl),s(oa,La),s(La,Bl),s(oa,Jl),p(a,Fs,t),p(a,W,t),s(W,ia),s(ia,Je),g(Fa,Je,null),s(W,Ul),s(W,Ue),s(Ue,Yl),p(a,Bs,t),p(a,w,t),s(w,Wl),s(w,Ye),s(Ye,zl),s(w,Vl),s(w,ce),s(ce,Gl),s(w,Kl),s(w,We),s(We,Ql),s(w,Xl),s(w,ze),s(ze,Zl),s(w,an),s(w,Ve),s(Ve,en),s(w,sn),s(w,Ba),s(Ba,tn),s(w,ln),p(a,Js,t),g(pa,a,t),p(a,Us,t),g(Ja,a,t),p(a,Ys,t),p(a,ca,t),s(ca,nn),s(ca,Ge),s(Ge,rn),s(ca,on),p(a,Ws,t),g(Ua,a,t),p(a,zs,t),p(a,ha,t),s(ha,pn),s(ha,Ke),s(Ke,cn),s(ha,hn),p(a,Vs,t),g(Ya,a,t),p(a,Gs,t),p(a,da,t),s(da,dn),s(da,Qe),s(Qe,un),s(da,fn),p(a,Ks,t),g(Wa,a,t),Qs=!0},p(a,[t]){const za={};t&2&&(za.$$scope={dirty:t,ctx:a}),la.$set(za);const Xe={};t&2&&(Xe.$$scope={dirty:t,ctx:a}),pa.$set(Xe)},i(a){Qs||(_(y.$$.fragment,a),_(ga.$$.fragment,a),_(va.$$.fragment,a),_(ja.$$.fragment,a),_(ba.$$.fragment,a),_($a.$$.fragment,a),_(wa.$$.fragment,a),_(xa.$$.fragment,a),_(Ea.$$.fragment,a),_(Ca.$$.fragment,a),_(ka.$$.fragment,a),_(Ma.$$.fragment,a),_(Ta.$$.fragment,a),_(Pa.$$.fragment,a),_(la.$$.fragment,a),_(qa.$$.fragment,a),_(Ra.$$.fragment,a),_(Ha.$$.fragment,a),_(Sa.$$.fragment,a),_(Na.$$.fragment,a),_(Oa.$$.fragment,a),_(Fa.$$.fragment,a),_(pa.$$.fragment,a),_(Ja.$$.fragment,a),_(Ua.$$.fragment,a),_(Ya.$$.fragment,a),_(Wa.$$.fragment,a),Qs=!0)},o(a){v(y.$$.fragment,a),v(ga.$$.fragment,a),v(va.$$.fragment,a),v(ja.$$.fragment,a),v(ba.$$.fragment,a),v($a.$$.fragment,a),v(wa.$$.fragment,a),v(xa.$$.fragment,a),v(Ea.$$.fragment,a),v(Ca.$$.fragment,a),v(ka.$$.fragment,a),v(Ma.$$.fragment,a),v(Ta.$$.fragment,a),v(Pa.$$.fragment,a),v(la.$$.fragment,a),v(qa.$$.fragment,a),v(Ra.$$.fragment,a),v(Ha.$$.fragment,a),v(Sa.$$.fragment,a),v(Na.$$.fragment,a),v(Oa.$$.fragment,a),v(Fa.$$.fragment,a),v(pa.$$.fragment,a),v(Ja.$$.fragment,a),v(Ua.$$.fragment,a),v(Ya.$$.fragment,a),v(Wa.$$.fragment,a),Qs=!1},d(a){e(u),a&&e(D),a&&e($),j(y),a&&e(b),a&&e(C),a&&e(es),a&&e(L),j(ga),a&&e(ss),a&&e(R),a&&e(ts),j(va,a),a&&e(ls),a&&e(Qa),a&&e(ns),a&&e(H),a&&e(rs),a&&e(F),j(ja),a&&e(os),a&&e(B),j(ba),a&&e(is),a&&e(X),a&&e(ps),j($a,a),a&&e(cs),a&&e(Za),a&&e(hs),a&&e(Z),a&&e(ds),j(wa,a),a&&e(us),a&&e(ee),a&&e(fs),j(xa,a),a&&e(ms),a&&e(J),j(Ea),a&&e(gs),a&&e(ea),a&&e(_s),j(Ca,a),a&&e(vs),a&&e(se),a&&e(js),j(ka,a),a&&e(bs),a&&e(te),a&&e($s),j(Ma,a),a&&e(ys),a&&e(le),a&&e(ws),j(Ta,a),a&&e(xs),a&&e(sa),a&&e(Es),a&&e(U),j(Pa),a&&e(Cs),a&&e(N),a&&e(ks),j(la,a),a&&e(Ms),j(qa,a),a&&e(Ts),a&&e(Y),j(Ra),a&&e(Ps),a&&e(A),a&&e(Ds),a&&e(oe),a&&e(As),j(Ha,a),a&&e(qs),a&&e(ie),a&&e(Rs),j(Sa,a),a&&e(Hs),a&&e(pe),a&&e(Ss),j(Na,a),a&&e(Ns),a&&e(ra),a&&e(Is),a&&e(I),a&&e(Os),j(Oa,a),a&&e(Ls),a&&e(oa),a&&e(Fs),a&&e(W),j(Fa),a&&e(Bs),a&&e(w),a&&e(Js),j(pa,a),a&&e(Us),j(Ja,a),a&&e(Ys),a&&e(ca),a&&e(Ws),j(Ua,a),a&&e(zs),a&&e(ha),a&&e(Vs),j(Ya,a),a&&e(Gs),a&&e(da),a&&e(Ks),j(Wa,a)}}}const Nr={local:"creating-and-sharing-model-cards",sections:[{local:"loading-a-model-card-from-the-hub",title:"Loading a Model Card from the Hub"},{local:"creating-model-cards",sections:[{local:"from-text",title:"From Text"},{local:"from-a-jinja-template",title:"From a Jinja Template"},{local:"from-the-default-template",title:"From the Default Template"}],title:"Creating Model Cards"},{local:"sharing-model-cards",sections:[{local:"including-evaluation-results",title:"Including Evaluation Results"}],title:"Sharing Model Cards"}],title:"Creating and Sharing Model Cards"};function Ir(Ga){return qr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Jr extends Tr{constructor(u){super();Pr(this,u,Ir,Sr,Dr,{})}}export{Jr as default,Nr as metadata};
