import{S as Jl,i as Wl,s as Yl,e as n,k as c,w as x,t as h,M as Kl,c as r,d as t,m as p,a as o,x as $,h as m,b as l,G as a,g as u,y,q as j,o as w,B as D,v as Ql,L as oe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Gl}from"../../chunks/Tip-hf-doc-builder.js";import{D as E}from"../../chunks/Docstring-hf-doc-builder.js";import{C as le}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as M}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as re}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Xl(C){let d,v,_,i,b;return i=new le({props:{code:`from huggingface_hub.repocard import RepoCard
text = '''
---
language: en
license: mit
---
# My repo
'''
card = RepoCard(text)
card.data.to_dict()
card.text
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub.repocard <span class="hljs-keyword">import</span> RepoCard
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&#x27;&#x27;&#x27;
<span class="hljs-meta">... </span>---
<span class="hljs-meta">... </span>language: en
<span class="hljs-meta">... </span>license: mit
<span class="hljs-meta">... </span>---
...
<span class="hljs-meta">... </span># My repo
<span class="hljs-meta">... </span>&#x27;&#x27;&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>card = RepoCard(text)
<span class="hljs-meta">&gt;&gt;&gt; </span>card.data.to_dict()
{<span class="hljs-string">&#x27;language&#x27;</span>: <span class="hljs-string">&#x27;en&#x27;</span>, <span class="hljs-string">&#x27;license&#x27;</span>: <span class="hljs-string">&#x27;mit&#x27;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>card.text
<span class="hljs-string">&#x27;\\n# My repo\\n&#x27;</span>
`}}),{c(){d=n("p"),v=h("Example:"),_=c(),x(i.$$.fragment)},l(s){d=r(s,"P",{});var f=o(d);v=m(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,d,f),a(d,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(d),s&&t(_),D(i,s)}}}function Zl(C){let d,v,_,i,b,s,f;return{c(){d=h(`Raises the following error:
`),v=n("ul"),_=n("li"),i=n("a"),b=n("code"),s=h("ValueError"),f=h(`
when the content of the repo card metadata is not a dictionary.`),this.h()},l(A){d=m(A,`Raises the following error:
`),v=r(A,"UL",{});var T=o(v);_=r(T,"LI",{});var q=o(_);i=r(q,"A",{href:!0,rel:!0});var k=o(i);b=r(k,"CODE",{});var Z=o(b);s=m(Z,"ValueError"),Z.forEach(t),k.forEach(t),f=m(q,`
when the content of the repo card metadata is not a dictionary.`),q.forEach(t),T.forEach(t),this.h()},h(){l(i,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),l(i,"rel","nofollow")},m(A,T){u(A,d,T),u(A,v,T),a(v,_),a(_,i),a(i,b),a(b,s),a(_,f)},d(A){A&&t(d),A&&t(v)}}}function ei(C){let d,v,_,i,b;return i=new le({props:{code:`from huggingface_hub.repocard import RepoCard
card = RepoCard.load("nateraw/food")
assert card.data.tags == ["generated_from_trainer", "image-classification", "pytorch"]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub.repocard <span class="hljs-keyword">import</span> RepoCard
<span class="hljs-meta">&gt;&gt;&gt; </span>card = RepoCard.load(<span class="hljs-string">&quot;nateraw/food&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> card.data.tags == [<span class="hljs-string">&quot;generated_from_trainer&quot;</span>, <span class="hljs-string">&quot;image-classification&quot;</span>, <span class="hljs-string">&quot;pytorch&quot;</span>]
`}}),{c(){d=n("p"),v=h("Example:"),_=c(),x(i.$$.fragment)},l(s){d=r(s,"P",{});var f=o(d);v=m(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,d,f),a(d,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(d),s&&t(_),D(i,s)}}}function ai(C){let d,v,_,i,b;return i=new le({props:{code:`from huggingface_hub.repocard import RepoCard
card = RepoCard("---\\nlanguage: en\\n---\\n# This is a test repo card")
card.save("/tmp/test.md")
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub.repocard <span class="hljs-keyword">import</span> RepoCard
<span class="hljs-meta">&gt;&gt;&gt; </span>card = RepoCard(<span class="hljs-string">&quot;---\\nlanguage: en\\n---\\n# This is a test repo card&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>card.save(<span class="hljs-string">&quot;/tmp/test.md&quot;</span>)
`}}),{c(){d=n("p"),v=h("Example:"),_=c(),x(i.$$.fragment)},l(s){d=r(s,"P",{});var f=o(d);v=m(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,d,f),a(d,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(d),s&&t(_),D(i,s)}}}function ti(C){let d,v,_,i,b,s,f,A,T,q,k,Z,V;return{c(){d=h(`Raises the following errors:
`),v=n("ul"),_=n("li"),i=n("a"),b=n("code"),s=h("ValueError"),f=h(`
if the card fails validation checks.`),A=c(),T=n("li"),q=n("a"),k=n("code"),Z=h("HTTPError"),V=h(`
if the request to the Hub API fails for any other reason.`),this.h()},l(L){d=m(L,`Raises the following errors:
`),v=r(L,"UL",{});var B=o(v);_=r(B,"LI",{});var ee=o(_);i=r(ee,"A",{href:!0,rel:!0});var Ka=o(i);b=r(Ka,"CODE",{});var Qa=o(b);s=m(Qa,"ValueError"),Qa.forEach(t),Ka.forEach(t),f=m(ee,`
if the card fails validation checks.`),ee.forEach(t),A=p(B),T=r(B,"LI",{});var De=o(T);q=r(De,"A",{href:!0,rel:!0});var H=o(q);k=r(H,"CODE",{});var z=o(k);Z=m(z,"HTTPError"),z.forEach(t),H.forEach(t),V=m(De,`
if the request to the Hub API fails for any other reason.`),De.forEach(t),B.forEach(t),this.h()},h(){l(i,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),l(i,"rel","nofollow"),l(q,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),l(q,"rel","nofollow")},m(L,B){u(L,d,B),u(L,v,B),a(v,_),a(_,i),a(i,b),a(b,s),a(_,f),a(v,A),a(v,T),a(T,q),a(q,k),a(k,Z),a(T,V)},d(L){L&&t(d),L&&t(v)}}}function si(C){let d,v,_,i,b;return i=new le({props:{code:`from huggingface_hub import ModelCard, ModelCardData, EvalResult

# Using the Default Template
card_data = ModelCardData(
    language='en',
    license='mit',
    library_name='timm',
    tags=['image-classification', 'resnet'],
    datasets='beans',
    metrics=['accuracy'],
)
card = ModelCard.from_template(
    card_data,
    model_description='This model does x + y...'
)

# Including Evaluation Results
card_data = ModelCardData(
    language='en',
    tags=['image-classification', 'resnet'],
    eval_results=[
        EvalResult(
            task_type='image-classification',
            dataset_type='beans',
            dataset_name='Beans',
            metric_type='accuracy',
            metric_value=0.9,
        ),
    ],
    model_name='my-cool-model',
)
card = ModelCard.from_template(card_data)

# Using a Custom Template
card_data = ModelCardData(
    language='en',
    tags=['image-classification', 'resnet']
)
card = ModelCard.from_template(
    card_data=card_data,
    template_path='./src/huggingface_hub/templates/modelcard_template.md',
    custom_template_var='custom value',  # will be replaced in template if it exists
)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> ModelCard, ModelCardData, EvalResult

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using the Default Template</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>card_data = ModelCardData(
<span class="hljs-meta">... </span>    language=<span class="hljs-string">&#x27;en&#x27;</span>,
<span class="hljs-meta">... </span>    license=<span class="hljs-string">&#x27;mit&#x27;</span>,
<span class="hljs-meta">... </span>    library_name=<span class="hljs-string">&#x27;timm&#x27;</span>,
<span class="hljs-meta">... </span>    tags=[<span class="hljs-string">&#x27;image-classification&#x27;</span>, <span class="hljs-string">&#x27;resnet&#x27;</span>],
<span class="hljs-meta">... </span>    datasets=<span class="hljs-string">&#x27;beans&#x27;</span>,
<span class="hljs-meta">... </span>    metrics=[<span class="hljs-string">&#x27;accuracy&#x27;</span>],
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>card = ModelCard.from_template(
<span class="hljs-meta">... </span>    card_data,
<span class="hljs-meta">... </span>    model_description=<span class="hljs-string">&#x27;This model does x + y...&#x27;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Including Evaluation Results</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>card_data = ModelCardData(
<span class="hljs-meta">... </span>    language=<span class="hljs-string">&#x27;en&#x27;</span>,
<span class="hljs-meta">... </span>    tags=[<span class="hljs-string">&#x27;image-classification&#x27;</span>, <span class="hljs-string">&#x27;resnet&#x27;</span>],
<span class="hljs-meta">... </span>    eval_results=[
<span class="hljs-meta">... </span>        EvalResult(
<span class="hljs-meta">... </span>            task_type=<span class="hljs-string">&#x27;image-classification&#x27;</span>,
<span class="hljs-meta">... </span>            dataset_type=<span class="hljs-string">&#x27;beans&#x27;</span>,
<span class="hljs-meta">... </span>            dataset_name=<span class="hljs-string">&#x27;Beans&#x27;</span>,
<span class="hljs-meta">... </span>            metric_type=<span class="hljs-string">&#x27;accuracy&#x27;</span>,
<span class="hljs-meta">... </span>            metric_value=<span class="hljs-number">0.9</span>,
<span class="hljs-meta">... </span>        ),
<span class="hljs-meta">... </span>    ],
<span class="hljs-meta">... </span>    model_name=<span class="hljs-string">&#x27;my-cool-model&#x27;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>card = ModelCard.from_template(card_data)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using a Custom Template</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>card_data = ModelCardData(
<span class="hljs-meta">... </span>    language=<span class="hljs-string">&#x27;en&#x27;</span>,
<span class="hljs-meta">... </span>    tags=[<span class="hljs-string">&#x27;image-classification&#x27;</span>, <span class="hljs-string">&#x27;resnet&#x27;</span>]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>card = ModelCard.from_template(
<span class="hljs-meta">... </span>    card_data=card_data,
<span class="hljs-meta">... </span>    template_path=<span class="hljs-string">&#x27;./src/huggingface_hub/templates/modelcard_template.md&#x27;</span>,
<span class="hljs-meta">... </span>    custom_template_var=<span class="hljs-string">&#x27;custom value&#x27;</span>,  <span class="hljs-comment"># will be replaced in template if it exists</span>
<span class="hljs-meta">... </span>)
`}}),{c(){d=n("p"),v=h("Example:"),_=c(),x(i.$$.fragment)},l(s){d=r(s,"P",{});var f=o(d);v=m(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,d,f),a(d,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(d),s&&t(_),D(i,s)}}}function ni(C){let d,v,_,i,b;return i=new le({props:{code:`from huggingface_hub import ModelCardData
card_data = ModelCardData(
    language="en",
    license="mit",
    library_name="timm",
    tags=['image-classification', 'resnet'],
)
card_data.to_dict()
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> ModelCardData
<span class="hljs-meta">&gt;&gt;&gt; </span>card_data = ModelCardData(
<span class="hljs-meta">... </span>    language=<span class="hljs-string">&quot;en&quot;</span>,
<span class="hljs-meta">... </span>    license=<span class="hljs-string">&quot;mit&quot;</span>,
<span class="hljs-meta">... </span>    library_name=<span class="hljs-string">&quot;timm&quot;</span>,
<span class="hljs-meta">... </span>    tags=[<span class="hljs-string">&#x27;image-classification&#x27;</span>, <span class="hljs-string">&#x27;resnet&#x27;</span>],
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>card_data.to_dict()
{<span class="hljs-string">&#x27;language&#x27;</span>: <span class="hljs-string">&#x27;en&#x27;</span>, <span class="hljs-string">&#x27;license&#x27;</span>: <span class="hljs-string">&#x27;mit&#x27;</span>, <span class="hljs-string">&#x27;library_name&#x27;</span>: <span class="hljs-string">&#x27;timm&#x27;</span>, <span class="hljs-string">&#x27;tags&#x27;</span>: [<span class="hljs-string">&#x27;image-classification&#x27;</span>, <span class="hljs-string">&#x27;resnet&#x27;</span>]}
`}}),{c(){d=n("p"),v=h("Example:"),_=c(),x(i.$$.fragment)},l(s){d=r(s,"P",{});var f=o(d);v=m(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,d,f),a(d,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(d),s&&t(_),D(i,s)}}}function ri(C){let d,v,_,i,b;return i=new le({props:{code:`from huggingface_hub import DatasetCard, DatasetCardData

# Using the Default Template
card_data = DatasetCardData(
    language='en',
    license='mit',
    annotations_creators='crowdsourced',
    task_categories=['text-classification'],
    task_ids=['sentiment-classification', 'text-scoring'],
    multilinguality='monolingual',
    pretty_name='My Text Classification Dataset',
)
card = DatasetCard.from_template(
    card_data,
    pretty_name=card_data.pretty_name,
)

# Using a Custom Template
card_data = DatasetCardData(
    language='en',
    license='mit',
)
card = DatasetCard.from_template(
    card_data=card_data,
    template_path='./src/huggingface_hub/templates/datasetcard_template.md',
    custom_template_var='custom value',  # will be replaced in template if it exists
)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> DatasetCard, DatasetCardData

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using the Default Template</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>card_data = DatasetCardData(
<span class="hljs-meta">... </span>    language=<span class="hljs-string">&#x27;en&#x27;</span>,
<span class="hljs-meta">... </span>    license=<span class="hljs-string">&#x27;mit&#x27;</span>,
<span class="hljs-meta">... </span>    annotations_creators=<span class="hljs-string">&#x27;crowdsourced&#x27;</span>,
<span class="hljs-meta">... </span>    task_categories=[<span class="hljs-string">&#x27;text-classification&#x27;</span>],
<span class="hljs-meta">... </span>    task_ids=[<span class="hljs-string">&#x27;sentiment-classification&#x27;</span>, <span class="hljs-string">&#x27;text-scoring&#x27;</span>],
<span class="hljs-meta">... </span>    multilinguality=<span class="hljs-string">&#x27;monolingual&#x27;</span>,
<span class="hljs-meta">... </span>    pretty_name=<span class="hljs-string">&#x27;My Text Classification Dataset&#x27;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>card = DatasetCard.from_template(
<span class="hljs-meta">... </span>    card_data,
<span class="hljs-meta">... </span>    pretty_name=card_data.pretty_name,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using a Custom Template</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>card_data = DatasetCardData(
<span class="hljs-meta">... </span>    language=<span class="hljs-string">&#x27;en&#x27;</span>,
<span class="hljs-meta">... </span>    license=<span class="hljs-string">&#x27;mit&#x27;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>card = DatasetCard.from_template(
<span class="hljs-meta">... </span>    card_data=card_data,
<span class="hljs-meta">... </span>    template_path=<span class="hljs-string">&#x27;./src/huggingface_hub/templates/datasetcard_template.md&#x27;</span>,
<span class="hljs-meta">... </span>    custom_template_var=<span class="hljs-string">&#x27;custom value&#x27;</span>,  <span class="hljs-comment"># will be replaced in template if it exists</span>
<span class="hljs-meta">... </span>)
`}}),{c(){d=n("p"),v=h("Example:"),_=c(),x(i.$$.fragment)},l(s){d=r(s,"P",{});var f=o(d);v=m(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,d,f),a(d,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(d),s&&t(_),D(i,s)}}}function oi(C){let d,v,_,i,b;return i=new le({props:{code:`from huggingface_hub.repocard_data import model_index_to_eval_results
# Define a minimal model index
model_index = [
    {
        "name": "my-cool-model",
        "results": [
            {
                "task": {
                    "type": "image-classification"
                },
                "dataset": {
                    "type": "beans",
                    "name": "Beans"
                },
                "metrics": [
                    {
                        "type": "accuracy",
                        "value": 0.9
                    }
                ]
            }
        ]
    }
]
model_name, eval_results = model_index_to_eval_results(model_index)
model_name
eval_results[0].task_type
eval_results[0].metric_type
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub.repocard_data <span class="hljs-keyword">import</span> model_index_to_eval_results
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Define a minimal model index</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_index = [
<span class="hljs-meta">... </span>    {
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;my-cool-model&quot;</span>,
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;results&quot;</span>: [
<span class="hljs-meta">... </span>            {
<span class="hljs-meta">... </span>                <span class="hljs-string">&quot;task&quot;</span>: {
<span class="hljs-meta">... </span>                    <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;image-classification&quot;</span>
<span class="hljs-meta">... </span>                },
<span class="hljs-meta">... </span>                <span class="hljs-string">&quot;dataset&quot;</span>: {
<span class="hljs-meta">... </span>                    <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;beans&quot;</span>,
<span class="hljs-meta">... </span>                    <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;Beans&quot;</span>
<span class="hljs-meta">... </span>                },
<span class="hljs-meta">... </span>                <span class="hljs-string">&quot;metrics&quot;</span>: [
<span class="hljs-meta">... </span>                    {
<span class="hljs-meta">... </span>                        <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;accuracy&quot;</span>,
<span class="hljs-meta">... </span>                        <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-number">0.9</span>
<span class="hljs-meta">... </span>                    }
<span class="hljs-meta">... </span>                ]
<span class="hljs-meta">... </span>            }
<span class="hljs-meta">... </span>        ]
<span class="hljs-meta">... </span>    }
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>model_name, eval_results = model_index_to_eval_results(model_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>model_name
<span class="hljs-string">&#x27;my-cool-model&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>eval_results[<span class="hljs-number">0</span>].task_type
<span class="hljs-string">&#x27;image-classification&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>eval_results[<span class="hljs-number">0</span>].metric_type
<span class="hljs-string">&#x27;accuracy&#x27;</span>
`}}),{c(){d=n("p"),v=h("Example:"),_=c(),x(i.$$.fragment)},l(s){d=r(s,"P",{});var f=o(d);v=m(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,d,f),a(d,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(d),s&&t(_),D(i,s)}}}function li(C){let d,v,_,i,b;return i=new le({props:{code:`from huggingface_hub.repocard_data import eval_results_to_model_index, EvalResult
# Define minimal eval_results
eval_results = [
    EvalResult(
        task_type="image-classification",  # Required
        dataset_type="beans",  # Required
        dataset_name="Beans",  # Required
        metric_type="accuracy",  # Required
        metric_value=0.9,  # Required
    )
]
eval_results_to_model_index("my-cool-model", eval_results)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub.repocard_data <span class="hljs-keyword">import</span> eval_results_to_model_index, EvalResult
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Define minimal eval_results</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>eval_results = [
<span class="hljs-meta">... </span>    EvalResult(
<span class="hljs-meta">... </span>        task_type=<span class="hljs-string">&quot;image-classification&quot;</span>,  <span class="hljs-comment"># Required</span>
<span class="hljs-meta">... </span>        dataset_type=<span class="hljs-string">&quot;beans&quot;</span>,  <span class="hljs-comment"># Required</span>
<span class="hljs-meta">... </span>        dataset_name=<span class="hljs-string">&quot;Beans&quot;</span>,  <span class="hljs-comment"># Required</span>
<span class="hljs-meta">... </span>        metric_type=<span class="hljs-string">&quot;accuracy&quot;</span>,  <span class="hljs-comment"># Required</span>
<span class="hljs-meta">... </span>        metric_value=<span class="hljs-number">0.9</span>,  <span class="hljs-comment"># Required</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>eval_results_to_model_index(<span class="hljs-string">&quot;my-cool-model&quot;</span>, eval_results)
[{<span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;my-cool-model&#x27;</span>, <span class="hljs-string">&#x27;results&#x27;</span>: [{<span class="hljs-string">&#x27;task&#x27;</span>: {<span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;image-classification&#x27;</span>}, <span class="hljs-string">&#x27;dataset&#x27;</span>: {<span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;Beans&#x27;</span>, <span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;beans&#x27;</span>}, <span class="hljs-string">&#x27;metrics&#x27;</span>: [{<span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;accuracy&#x27;</span>, <span class="hljs-string">&#x27;value&#x27;</span>: <span class="hljs-number">0.9</span>}]}]}]
`}}),{c(){d=n("p"),v=h("Example:"),_=c(),x(i.$$.fragment)},l(s){d=r(s,"P",{});var f=o(d);v=m(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,d,f),a(d,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(d),s&&t(_),D(i,s)}}}function ii(C){let d,v,_,i,b;return i=new le({props:{code:`from huggingface_hub import metadata_eval_result
results = metadata_eval_result(
        model_pretty_name="RoBERTa fine-tuned on ReactionGIF",
        task_pretty_name="Text Classification",
        task_id="text-classification",
        metrics_pretty_name="Accuracy",
        metrics_id="accuracy",
        metrics_value=0.2662102282047272,
        dataset_pretty_name="ReactionJPEG",
        dataset_id="julien-c/reactionjpeg",
        dataset_config="default",
        dataset_split="test",
)
results == {
    'model-index': [
        {
            'name': 'RoBERTa fine-tuned on ReactionGIF',
            'results': [
                {
                    'task': {
                        'type': 'text-classification',
                        'name': 'Text Classification'
                    },
                    'dataset': {
                        'name': 'ReactionJPEG',
                        'type': 'julien-c/reactionjpeg',
                        'config': 'default',
                        'split': 'test'
                    },
                    'metrics': [
                        {
                            'type': 'accuracy',
                            'value': 0.2662102282047272,
                            'name': 'Accuracy',
                            'verified': False
                        }
                    ]
                }
            ]
        }
    ]
}
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> metadata_eval_result
<span class="hljs-meta">&gt;&gt;&gt; </span>results = metadata_eval_result(
<span class="hljs-meta">... </span>        model_pretty_name=<span class="hljs-string">&quot;RoBERTa fine-tuned on ReactionGIF&quot;</span>,
<span class="hljs-meta">... </span>        task_pretty_name=<span class="hljs-string">&quot;Text Classification&quot;</span>,
<span class="hljs-meta">... </span>        task_id=<span class="hljs-string">&quot;text-classification&quot;</span>,
<span class="hljs-meta">... </span>        metrics_pretty_name=<span class="hljs-string">&quot;Accuracy&quot;</span>,
<span class="hljs-meta">... </span>        metrics_id=<span class="hljs-string">&quot;accuracy&quot;</span>,
<span class="hljs-meta">... </span>        metrics_value=<span class="hljs-number">0.2662102282047272</span>,
<span class="hljs-meta">... </span>        dataset_pretty_name=<span class="hljs-string">&quot;ReactionJPEG&quot;</span>,
<span class="hljs-meta">... </span>        dataset_id=<span class="hljs-string">&quot;julien-c/reactionjpeg&quot;</span>,
<span class="hljs-meta">... </span>        dataset_config=<span class="hljs-string">&quot;default&quot;</span>,
<span class="hljs-meta">... </span>        dataset_split=<span class="hljs-string">&quot;test&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>results == {
<span class="hljs-meta">... </span>    <span class="hljs-string">&#x27;model-index&#x27;</span>: [
<span class="hljs-meta">... </span>        {
<span class="hljs-meta">... </span>            <span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;RoBERTa fine-tuned on ReactionGIF&#x27;</span>,
<span class="hljs-meta">... </span>            <span class="hljs-string">&#x27;results&#x27;</span>: [
<span class="hljs-meta">... </span>                {
<span class="hljs-meta">... </span>                    <span class="hljs-string">&#x27;task&#x27;</span>: {
<span class="hljs-meta">... </span>                        <span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;text-classification&#x27;</span>,
<span class="hljs-meta">... </span>                        <span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;Text Classification&#x27;</span>
<span class="hljs-meta">... </span>                    },
<span class="hljs-meta">... </span>                    <span class="hljs-string">&#x27;dataset&#x27;</span>: {
<span class="hljs-meta">... </span>                        <span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;ReactionJPEG&#x27;</span>,
<span class="hljs-meta">... </span>                        <span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;julien-c/reactionjpeg&#x27;</span>,
<span class="hljs-meta">... </span>                        <span class="hljs-string">&#x27;config&#x27;</span>: <span class="hljs-string">&#x27;default&#x27;</span>,
<span class="hljs-meta">... </span>                        <span class="hljs-string">&#x27;split&#x27;</span>: <span class="hljs-string">&#x27;test&#x27;</span>
<span class="hljs-meta">... </span>                    },
<span class="hljs-meta">... </span>                    <span class="hljs-string">&#x27;metrics&#x27;</span>: [
<span class="hljs-meta">... </span>                        {
<span class="hljs-meta">... </span>                            <span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;accuracy&#x27;</span>,
<span class="hljs-meta">... </span>                            <span class="hljs-string">&#x27;value&#x27;</span>: <span class="hljs-number">0.2662102282047272</span>,
<span class="hljs-meta">... </span>                            <span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;Accuracy&#x27;</span>,
<span class="hljs-meta">... </span>                            <span class="hljs-string">&#x27;verified&#x27;</span>: <span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>                        }
<span class="hljs-meta">... </span>                    ]
<span class="hljs-meta">... </span>                }
<span class="hljs-meta">... </span>            ]
<span class="hljs-meta">... </span>        }
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>}
<span class="hljs-literal">True</span>
`}}),{c(){d=n("p"),v=h("Example:"),_=c(),x(i.$$.fragment)},l(s){d=r(s,"P",{});var f=o(d);v=m(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,d,f),a(d,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(d),s&&t(_),D(i,s)}}}function ci(C){let d,v,_,i,b;return i=new le({props:{code:`from huggingface_hub import metadata_update
metadata = {'model-index': [{'name': 'RoBERTa fine-tuned on ReactionGIF',
            'results': [{'dataset': {'name': 'ReactionGIF',
                                     'type': 'julien-c/reactiongif'},
                          'metrics': [{'name': 'Recall',
                                       'type': 'recall',
                                       'value': 0.7762102282047272}],
                         'task': {'name': 'Text Classification',
                                  'type': 'text-classification'}}]}]}
url = metadata_update("hf-internal-testing/reactiongif-roberta-card", metadata)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> metadata_update
<span class="hljs-meta">&gt;&gt;&gt; </span>metadata = {<span class="hljs-string">&#x27;model-index&#x27;</span>: [{<span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;RoBERTa fine-tuned on ReactionGIF&#x27;</span>,
<span class="hljs-meta">... </span>            <span class="hljs-string">&#x27;results&#x27;</span>: [{<span class="hljs-string">&#x27;dataset&#x27;</span>: {<span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;ReactionGIF&#x27;</span>,
<span class="hljs-meta">... </span>                                     <span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;julien-c/reactiongif&#x27;</span>},
<span class="hljs-meta">... </span>                          <span class="hljs-string">&#x27;metrics&#x27;</span>: [{<span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;Recall&#x27;</span>,
<span class="hljs-meta">... </span>                                       <span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;recall&#x27;</span>,
<span class="hljs-meta">... </span>                                       <span class="hljs-string">&#x27;value&#x27;</span>: <span class="hljs-number">0.7762102282047272</span>}],
<span class="hljs-meta">... </span>                         <span class="hljs-string">&#x27;task&#x27;</span>: {<span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;Text Classification&#x27;</span>,
<span class="hljs-meta">... </span>                                  <span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;text-classification&#x27;</span>}}]}]}
<span class="hljs-meta">&gt;&gt;&gt; </span>url = metadata_update(<span class="hljs-string">&quot;hf-internal-testing/reactiongif-roberta-card&quot;</span>, metadata)
`}}),{c(){d=n("p"),v=h("Example:"),_=c(),x(i.$$.fragment)},l(s){d=r(s,"P",{});var f=o(d);v=m(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,d,f),a(d,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(d),s&&t(_),D(i,s)}}}function pi(C){let d,v,_,i,b,s,f,A,T,q,k,Z,V,L,B,ee,Ka,Qa,De,H,z,bt,ra,fn,vt,_n,bs,I,bn,xt,vn,xn,Xa,$n,yn,Za,jn,wn,vs,R,oa,Dn,O,la,Cn,$t,En,kn,Ce,Rn,Ee,An,ae,ia,Tn,yt,qn,Mn,jt,Nn,Pn,te,ca,Ln,wt,Hn,In,ke,On,Re,pa,Un,Dt,Fn,Sn,se,da,Vn,Ct,Bn,zn,Ae,Gn,ne,ga,Jn,ha,Wn,et,Yn,Kn,Qn,Te,xs,ie,qe,Et,ma,Xn,kt,Zn,$s,U,er,at,ar,tr,tt,sr,nr,st,rr,or,ys,G,ua,lr,Me,fa,ir,Rt,cr,pr,Ne,_a,dr,At,gr,js,ce,Pe,Tt,ba,hr,qt,mr,ws,pe,Le,Mt,va,ur,Nt,fr,Ds,de,xa,_r,F,$a,br,nt,vr,ya,xr,$r,Pt,yr,jr,He,Cs,ge,Ie,Lt,ja,wr,Ht,Dr,Es,J,wa,Cr,It,Er,kr,Oe,ks,he,Ue,Ot,Da,Rr,Ut,Ar,Rs,rt,Tr,As,me,Fe,Ft,Ca,qr,St,Mr,Ts,ue,Ea,Nr,S,ka,Pr,ot,Lr,Ra,Hr,Ir,Vt,Or,Ur,Se,qs,fe,Ve,Bt,Aa,Fr,zt,Sr,Ms,_e,Ta,Vr,Gt,Br,Ns,be,Be,Jt,qa,zr,Wt,Gr,Ps,ve,ze,Yt,Ma,Jr,Kt,Wr,Ls,W,Na,Yr,Qt,Kr,Qr,Pa,Xr,La,Zr,eo,Hs,xe,Ge,Xt,Ha,ao,Zt,to,Is,P,Ia,so,Oa,no,es,ro,oo,lo,lt,io,Ua,co,po,Je,Os,$e,We,as,Fa,go,ts,ho,Us,Y,Sa,mo,Va,uo,ss,fo,_o,bo,Ye,Fs,ye,Ke,ns,Ba,vo,rs,xo,Ss,K,za,$o,os,yo,jo,Qe,Vs,je,Xe,ls,Ga,wo,is,Do,Bs,Q,Ja,Co,cs,Eo,ko,Ze,zs;return s=new M({}),ra=new M({}),oa=new E({props:{name:"class huggingface_hub.repocard.RepoCard",anchor:"huggingface_hub.repocard.RepoCard",parameters:[{name:"content",val:": str"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard.py#L43"}}),la=new E({props:{name:"__init__",anchor:"huggingface_hub.repocard.RepoCard.__init__",parameters:[{name:"content",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.__init__.content",description:"<strong>content</strong> (<code>str</code>) &#x2014; The content of the Markdown file.",name:"content"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard.py#L48"}}),Ce=new re({props:{anchor:"huggingface_hub.repocard.RepoCard.__init__.example",$$slots:{default:[Xl]},$$scope:{ctx:C}}}),Ee=new Gl({props:{$$slots:{default:[Zl]},$$scope:{ctx:C}}}),ia=new E({props:{name:"from_template",anchor:"huggingface_hub.repocard.RepoCard.from_template",parameters:[{name:"card_data",val:": CardData"},{name:"template_path",val:": typing.Optional[str] = None"},{name:"**template_kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.from_template.card_data",description:`<strong>card_data</strong> (<code>huggingface_hub.CardData</code>) &#x2014;
A huggingface_hub.CardData instance containing the metadata you want to include in the YAML
header of the repo card on the Hugging Face Hub.`,name:"card_data"},{anchor:"huggingface_hub.repocard.RepoCard.from_template.template_path",description:`<strong>template_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A path to a markdown file with optional Jinja template variables that can be filled
in with <code>template_kwargs</code>. Defaults to the default template.`,name:"template_path"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard.py#L276",returnDescription:`
<p>A RepoCard instance with the specified card data and content from the
template.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/cards#huggingface_hub.repocard.RepoCard"
>huggingface_hub.repocard.RepoCard</a></p>
`}}),ca=new E({props:{name:"load",anchor:"huggingface_hub.repocard.RepoCard.load",parameters:[{name:"repo_id_or_path",val:": typing.Union[str, pathlib.Path]"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.load.repo_id_or_path",description:`<strong>repo_id_or_path</strong> (<code>Union[str, Path]</code>) &#x2014;
The repo ID associated with a Hugging Face Hub repo or a local filepath.`,name:"repo_id_or_path"},{anchor:"huggingface_hub.repocard.RepoCard.load.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The type of Hugging Face repo to push to. Defaults to None, which will use
use &#x201C;model&#x201D;. Other options are &#x201C;dataset&#x201D; and &#x201C;space&#x201D;. Not used when loading from
a local filepath. If this is called from a child class, the default value will be
the child class&#x2019;s <code>repo_type</code>.`,name:"repo_type"},{anchor:"huggingface_hub.repocard.RepoCard.load.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>huggingface_hub.HfApi.login</code> method. Will default to
the stored token.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard.py#L124",returnDescription:`
<p>The RepoCard (or subclass) initialized from the repo\u2019s
README.md file or filepath.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/cards#huggingface_hub.repocard.RepoCard"
>huggingface_hub.repocard.RepoCard</a></p>
`}}),ke=new re({props:{anchor:"huggingface_hub.repocard.RepoCard.load.example",$$slots:{default:[ei]},$$scope:{ctx:C}}}),pa=new E({props:{name:"push_to_hub",anchor:"huggingface_hub.repocard.RepoCard.push_to_hub",parameters:[{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.push_to_hub.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repo ID of the Hugging Face Hub repo to push to. Example: &#x201C;nateraw/food&#x201D;.`,name:"repo_id"},{anchor:"huggingface_hub.repocard.RepoCard.push_to_hub.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>huggingface_hub.HfApi.login</code> method. Will default to
the stored token.`,name:"token"},{anchor:"huggingface_hub.repocard.RepoCard.push_to_hub.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>, defaults to &#x201C;model&#x201D;) &#x2014;
The type of Hugging Face repo to push to. Options are &#x201C;model&#x201D;, &#x201C;dataset&#x201D;, and &#x201C;space&#x201D;. If this
function is called by a child class, it will default to the child class&#x2019;s <code>repo_type</code>.`,name:"repo_type"},{anchor:"huggingface_hub.repocard.RepoCard.push_to_hub.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary / title / first line of the generated commit.`,name:"commit_message"},{anchor:"huggingface_hub.repocard.RepoCard.push_to_hub.commit_description",description:`<strong>commit_description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The description of the generated commit.`,name:"commit_description"},{anchor:"huggingface_hub.repocard.RepoCard.push_to_hub.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the <code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.repocard.RepoCard.push_to_hub.create_pr",description:`<strong>create_pr</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request with this commit. Defaults to <code>False</code>.`,name:"create_pr"},{anchor:"huggingface_hub.repocard.RepoCard.push_to_hub.parent_commit",description:`<strong>parent_commit</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The OID / SHA of the parent commit, as a hexadecimal string. Shorthands (7 first characters) are also supported.
If specified and <code>create_pr</code> is <code>False</code>, the commit will fail if <code>revision</code> does not point to <code>parent_commit</code>.
If specified and <code>create_pr</code> is <code>True</code>, the pull request will be created from <code>parent_commit</code>.
Specifying <code>parent_commit</code> ensures the repo has not changed before committing the changes, and can be
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard.py#L213",returnDescription:`
<p>URL of the commit which updated the card metadata.</p>
`,returnType:`
<p><code>str</code></p>
`}}),da=new E({props:{name:"save",anchor:"huggingface_hub.repocard.RepoCard.save",parameters:[{name:"filepath",val:": typing.Union[pathlib.Path, str]"}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.save.filepath",description:"<strong>filepath</strong> (<code>Union[Path, str]</code>) &#x2014; Filepath to the markdown file to save.",name:"filepath"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard.py#L106"}}),Ae=new re({props:{anchor:"huggingface_hub.repocard.RepoCard.save.example",$$slots:{default:[ai]},$$scope:{ctx:C}}}),ga=new E({props:{name:"validate",anchor:"huggingface_hub.repocard.RepoCard.validate",parameters:[{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.validate.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>, defaults to &#x201C;model&#x201D;) &#x2014;
The type of Hugging Face repo to push to. Options are &#x201C;model&#x201D;, &#x201C;dataset&#x201D;, and &#x201C;space&#x201D;.
If this function is called from a child class, the default will be the child class&#x2019;s <code>repo_type</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard.py#L172"}}),Te=new Gl({props:{$$slots:{default:[ti]},$$scope:{ctx:C}}}),ma=new M({}),ua=new E({props:{name:"class huggingface_hub.CardData",anchor:"huggingface_hub.CardData",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard_data.py#L121"}}),fa=new E({props:{name:"to_dict",anchor:"huggingface_hub.CardData.to_dict",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard_data.py#L125",returnDescription:`
<p>CardData represented as a dictionary ready to be dumped to a YAML
block for inclusion in a README.md file.</p>
`,returnType:`
<p><code>dict</code></p>
`}}),_a=new E({props:{name:"to_yaml",anchor:"huggingface_hub.CardData.to_yaml",parameters:[{name:"line_break",val:" = None"}],parametersDescription:[{anchor:"huggingface_hub.CardData.to_yaml.line_break",description:`<strong>line_break</strong> (str, <em>optional</em>) &#x2014;
The line break to use when dumping to yaml.`,name:"line_break"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard_data.py#L145",returnDescription:`
<p>CardData represented as a YAML block.</p>
`,returnType:`
<p><code>str</code></p>
`}}),ba=new M({}),va=new M({}),xa=new E({props:{name:"class huggingface_hub.ModelCard",anchor:"huggingface_hub.ModelCard",parameters:[{name:"content",val:": str"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard.py#L316"}}),$a=new E({props:{name:"from_template",anchor:"huggingface_hub.ModelCard.from_template",parameters:[{name:"card_data",val:": ModelCardData"},{name:"template_path",val:": typing.Optional[str] = None"},{name:"**template_kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.ModelCard.from_template.card_data",description:`<strong>card_data</strong> (<code>huggingface_hub.ModelCardData</code>) &#x2014;
A huggingface_hub.ModelCardData instance containing the metadata you want to include in the YAML
header of the model card on the Hugging Face Hub.`,name:"card_data"},{anchor:"huggingface_hub.ModelCard.from_template.template_path",description:`<strong>template_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A path to a markdown file with optional Jinja template variables that can be filled
in with <code>template_kwargs</code>. Defaults to the default template.`,name:"template_path"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard.py#L321",returnDescription:`
<p>A ModelCard instance with the specified card data and content from the
template.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/cards#huggingface_hub.ModelCard"
>huggingface_hub.ModelCard</a></p>
`}}),He=new re({props:{anchor:"huggingface_hub.ModelCard.from_template.example",$$slots:{default:[si]},$$scope:{ctx:C}}}),ja=new M({}),wa=new E({props:{name:"class huggingface_hub.ModelCardData",anchor:"huggingface_hub.ModelCardData",parameters:[{name:"language",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"license",val:": typing.Optional[str] = None"},{name:"library_name",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"datasets",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"metrics",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"eval_results",val:": typing.Optional[typing.List[huggingface_hub.repocard_data.EvalResult]] = None"},{name:"model_name",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.ModelCardData.language",description:`<strong>language</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
Language of model&#x2019;s training data or metadata. It must be an ISO 639-1, 639-2 or
639-3 code (two/three letters), or a special value like &#x201C;code&#x201D;, &#x201C;multilingual&#x201D;. Defaults to <code>None</code>.`,name:"language"},{anchor:"huggingface_hub.ModelCardData.license",description:`<strong>license</strong> (<code>str</code>, <em>optional</em>) &#x2014;
License of this model. Example: apache-2.0 or any license from
<a href="https://huggingface.co/docs/hub/repositories-licenses" rel="nofollow">https://huggingface.co/docs/hub/repositories-licenses</a>. Defaults to None.`,name:"license"},{anchor:"huggingface_hub.ModelCardData.library_name",description:`<strong>library_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Name of library used by this model. Example: keras or any library from
<a href="https://github.com/huggingface/hub-docs/blob/main/js/src/lib/interfaces/Libraries.ts" rel="nofollow">https://github.com/huggingface/hub-docs/blob/main/js/src/lib/interfaces/Libraries.ts</a>.
Defaults to None.`,name:"library_name"},{anchor:"huggingface_hub.ModelCardData.tags",description:`<strong>tags</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
List of tags to add to your model that can be used when filtering on the Hugging
Face Hub. Defaults to None.`,name:"tags"},{anchor:"huggingface_hub.ModelCardData.datasets",description:`<strong>datasets</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
Dataset or list of datasets that were used to train this model. Should be a dataset ID
found on <a href="https://hf.co/datasets" rel="nofollow">https://hf.co/datasets</a>. Defaults to None.`,name:"datasets"},{anchor:"huggingface_hub.ModelCardData.metrics",description:`<strong>metrics</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
List of metrics used to evaluate this model. Should be a metric name that can be found
at <a href="https://hf.co/metrics" rel="nofollow">https://hf.co/metrics</a>. Example: &#x2018;accuracy&#x2019;. Defaults to None.`,name:"metrics"},{anchor:"huggingface_hub.ModelCardData.eval_results",description:`<strong>eval_results</strong> (<code>Union[List[EvalResult], EvalResult]</code>, <em>optional</em>) &#x2014;
List of <code>huggingface_hub.EvalResult</code> that define evaluation results of the model. If provided,
<code>model_name</code> kwarg must be provided. Defaults to <code>None</code>.`,name:"eval_results"},{anchor:"huggingface_hub.ModelCardData.model_name",description:`<strong>model_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A name for this model. Required if you provide <code>eval_results</code>. It is used along with
<code>eval_results</code> to construct the <code>model-index</code> within the card&#x2019;s metadata. The name
you supply here is what will be used on PapersWithCode&#x2019;s leaderboards. Defaults to None.`,name:"model_name"},{anchor:"huggingface_hub.ModelCardData.kwargs",description:`<strong>kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Additional metadata that will be added to the model card. Defaults to None.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard_data.py#L161"}}),Oe=new re({props:{anchor:"huggingface_hub.ModelCardData.example",$$slots:{default:[ni]},$$scope:{ctx:C}}}),Da=new M({}),Ca=new M({}),Ea=new E({props:{name:"class huggingface_hub.DatasetCard",anchor:"huggingface_hub.DatasetCard",parameters:[{name:"content",val:": str"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard.py#L396"}}),ka=new E({props:{name:"from_template",anchor:"huggingface_hub.DatasetCard.from_template",parameters:[{name:"card_data",val:": DatasetCardData"},{name:"template_path",val:": typing.Optional[str] = None"},{name:"**template_kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.DatasetCard.from_template.card_data",description:`<strong>card_data</strong> (<code>huggingface_hub.DatasetCardData</code>) &#x2014;
A huggingface_hub.DatasetCardData instance containing the metadata you want to include in the YAML
header of the dataset card on the Hugging Face Hub.`,name:"card_data"},{anchor:"huggingface_hub.DatasetCard.from_template.template_path",description:`<strong>template_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A path to a markdown file with optional Jinja template variables that can be filled
in with <code>template_kwargs</code>. Defaults to the default template.`,name:"template_path"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard.py#L401",returnDescription:`
<p>A DatasetCard instance with the specified card data and content from the
template.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/cards#huggingface_hub.DatasetCard"
>huggingface_hub.DatasetCard</a></p>
`}}),Se=new re({props:{anchor:"huggingface_hub.DatasetCard.from_template.example",$$slots:{default:[ri]},$$scope:{ctx:C}}}),Aa=new M({}),Ta=new E({props:{name:"class huggingface_hub.DatasetCardData",anchor:"huggingface_hub.DatasetCardData",parameters:[{name:"language",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"license",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"annotations_creators",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"language_creators",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"multilinguality",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"size_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"source_datasets",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_ids",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"paperswithcode_id",val:": typing.Optional[str] = None"},{name:"pretty_name",val:": typing.Optional[str] = None"},{name:"train_eval_index",val:": typing.Optional[typing.Dict] = None"},{name:"configs",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.DatasetCardData.language",description:`<strong>language</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
Language of dataset&#x2019;s data or metadata. It must be an ISO 639-1, 639-2 or
639-3 code (two/three letters), or a special value like &#x201C;code&#x201D;, &#x201C;multilingual&#x201D;.`,name:"language"},{anchor:"huggingface_hub.DatasetCardData.license",description:`<strong>license</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
License(s) of this dataset. Example: apache-2.0 or any license from
<a href="https://huggingface.co/docs/hub/repositories-licenses" rel="nofollow">https://huggingface.co/docs/hub/repositories-licenses</a>.`,name:"license"},{anchor:"huggingface_hub.DatasetCardData.annotations_creators",description:`<strong>annotations_creators</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
How the annotations for the dataset were created.
Options are: &#x2018;found&#x2019;, &#x2018;crowdsourced&#x2019;, &#x2018;expert-generated&#x2019;, &#x2018;machine-generated&#x2019;, &#x2018;no-annotation&#x2019;, &#x2018;other&#x2019;.`,name:"annotations_creators"},{anchor:"huggingface_hub.DatasetCardData.language_creators",description:`<strong>language_creators</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
How the text-based data in the dataset was created.
Options are: &#x2018;found&#x2019;, &#x2018;crowdsourced&#x2019;, &#x2018;expert-generated&#x2019;, &#x2018;machine-generated&#x2019;, &#x2018;other&#x2019;`,name:"language_creators"},{anchor:"huggingface_hub.DatasetCardData.multilinguality",description:`<strong>multilinguality</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
Whether the dataset is multilingual.
Options are: &#x2018;monolingual&#x2019;, &#x2018;multilingual&#x2019;, &#x2018;translation&#x2019;, &#x2018;other&#x2019;.`,name:"multilinguality"},{anchor:"huggingface_hub.DatasetCardData.size_categories",description:`<strong>size_categories</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
The number of examples in the dataset. Options are: &#x2018;n&lt;1K&#x2019;, &#x2018;1K<n<10k\u2019, \u201810k<n<100k\u2019, \u2018100k<n<1m\u2019, \u20181m<n<10m\u2019, \u201810m<n<100m\u2019, \u2018100m<n<1b\u2019, \u20181b<n<10b\u2019, \u201810b<n<100b\u2019, \u2018100b<n<1t\u2019, \u2018n>1T&#x2019;, and &#x2018;other&#x2019;.</n<10k\u2019,>`,name:"size_categories"},{anchor:"huggingface_hub.DatasetCardData.source_datasets",description:`<strong>source_datasets</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
Indicates whether the dataset is an original dataset or extended from another existing dataset.
Options are: &#x2018;original&#x2019; and &#x2018;extended&#x2019;.`,name:"source_datasets"},{anchor:"huggingface_hub.DatasetCardData.task_categories",description:`<strong>task_categories</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
What categories of task does the dataset support?`,name:"task_categories"},{anchor:"huggingface_hub.DatasetCardData.task_ids",description:`<strong>task_ids</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
What specific tasks does the dataset support?`,name:"task_ids"},{anchor:"huggingface_hub.DatasetCardData.paperswithcode_id",description:`<strong>paperswithcode_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
ID of the dataset on PapersWithCode.`,name:"paperswithcode_id"},{anchor:"huggingface_hub.DatasetCardData.pretty_name",description:`<strong>pretty_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A more human-readable name for the dataset. (ex. &#x201C;Cats vs. Dogs&#x201D;)`,name:"pretty_name"},{anchor:"huggingface_hub.DatasetCardData.train_eval_index",description:`<strong>train_eval_index</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
A dictionary that describes the necessary spec for doing evaluation on the Hub.
If not provided, it will be gathered from the &#x2018;train-eval-index&#x2019; key of the kwargs.`,name:"train_eval_index"},{anchor:"huggingface_hub.DatasetCardData.configs",description:`<strong>configs</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
A list of the available dataset configs for the dataset.`,name:"configs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard_data.py#L261"}}),qa=new M({}),Ma=new M({}),Na=new E({props:{name:"class huggingface_hub.EvalResult",anchor:"huggingface_hub.EvalResult",parameters:[{name:"task_type",val:": str"},{name:"dataset_type",val:": str"},{name:"dataset_name",val:": str"},{name:"metric_type",val:": str"},{name:"metric_value",val:": typing.Any"},{name:"task_name",val:": typing.Optional[str] = None"},{name:"dataset_config",val:": typing.Optional[str] = None"},{name:"dataset_split",val:": typing.Optional[str] = None"},{name:"dataset_revision",val:": typing.Optional[str] = None"},{name:"dataset_args",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"metric_name",val:": typing.Optional[str] = None"},{name:"metric_config",val:": typing.Optional[str] = None"},{name:"metric_args",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"verified",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.EvalResult.task_type",description:`<strong>task_type</strong> (<code>str</code>) &#x2014;
The task identifier. Example: &#x201C;image-classification&#x201D;.`,name:"task_type"},{anchor:"huggingface_hub.EvalResult.dataset_type",description:`<strong>dataset_type</strong> (<code>str</code>) &#x2014;
The dataset identifier. Example: &#x201C;common_voice&#x201D;. Use dataset id from <a href="https://hf.co/datasets" rel="nofollow">https://hf.co/datasets</a>.`,name:"dataset_type"},{anchor:"huggingface_hub.EvalResult.dataset_name",description:`<strong>dataset_name</strong> (<code>str</code>) &#x2014;
A pretty name for the dataset. Example: &#x201C;Common Voice (French)&#x201C;.`,name:"dataset_name"},{anchor:"huggingface_hub.EvalResult.metric_type",description:`<strong>metric_type</strong> (<code>str</code>) &#x2014;
The metric identifier. Example: &#x201C;wer&#x201D;. Use metric id from <a href="https://hf.co/metrics" rel="nofollow">https://hf.co/metrics</a>.`,name:"metric_type"},{anchor:"huggingface_hub.EvalResult.metric_value",description:`<strong>metric_value</strong> (<code>Any</code>) &#x2014;
The metric value. Example: 0.9 or &#x201C;20.0 &#xB1; 1.2&#x201D;.`,name:"metric_value"},{anchor:"huggingface_hub.EvalResult.task_name",description:`<strong>task_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A pretty name for the task. Example: &#x201C;Speech Recognition&#x201D;.`,name:"task_name"},{anchor:"huggingface_hub.EvalResult.dataset_config",description:`<strong>dataset_config</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The name of the dataset configuration used in <code>load_dataset()</code>.
Example: fr in <code>load_dataset(&quot;common_voice&quot;, &quot;fr&quot;)</code>. See the <code>datasets</code> docs for more info:
<a href="https://hf.co/docs/datasets/package_reference/loading_methods#datasets.load_dataset.name" rel="nofollow">https://hf.co/docs/datasets/package_reference/loading_methods#datasets.load_dataset.name</a>`,name:"dataset_config"},{anchor:"huggingface_hub.EvalResult.dataset_split",description:`<strong>dataset_split</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The split used in <code>load_dataset()</code>. Example: &#x201C;test&#x201D;.`,name:"dataset_split"},{anchor:"huggingface_hub.EvalResult.dataset_revision",description:`<strong>dataset_revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision (AKA Git Sha) of the dataset used in <code>load_dataset()</code>.
Example: 5503434ddd753f426f4b38109466949a1217c2bb`,name:"dataset_revision"},{anchor:"huggingface_hub.EvalResult.dataset_args",description:`<strong>dataset_args</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
The arguments passed during <code>Metric.compute()</code>. Example for <code>bleu</code>: <code>{&quot;max_order&quot;: 4}</code>`,name:"dataset_args"},{anchor:"huggingface_hub.EvalResult.metric_name",description:`<strong>metric_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A pretty name for the metric. Example: &#x201C;Test WER&#x201D;.`,name:"metric_name"},{anchor:"huggingface_hub.EvalResult.metric_config",description:`<strong>metric_config</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The name of the metric configuration used in <code>load_metric()</code>.
Example: bleurt-large-512 in <code>load_metric(&quot;bleurt&quot;, &quot;bleurt-large-512&quot;)</code>.
See the <code>datasets</code> docs for more info: <a href="https://huggingface.co/docs/datasets/v2.1.0/en/loading#load-configurations" rel="nofollow">https://huggingface.co/docs/datasets/v2.1.0/en/loading#load-configurations</a>`,name:"metric_config"},{anchor:"huggingface_hub.EvalResult.metric_args",description:`<strong>metric_args</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
The arguments passed during <code>Metric.compute()</code>. Example for <code>bleu</code>: max_order: 4`,name:"metric_args"},{anchor:"huggingface_hub.EvalResult.verified",description:`<strong>verified</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If true, indicates that evaluation was generated by Hugging Face (vs. self-reported).`,name:"verified"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard_data.py#L15"}}),Ha=new M({}),Ia=new E({props:{name:"huggingface_hub.repocard_data.model_index_to_eval_results",anchor:"huggingface_hub.repocard_data.model_index_to_eval_results",parameters:[{name:"model_index",val:": typing.List[typing.Dict[str, typing.Any]]"}],parametersDescription:[{anchor:"huggingface_hub.repocard_data.model_index_to_eval_results.model_index",description:`<strong>model_index</strong> (<code>List[Dict[str, Any]]</code>) &#x2014;
A model index data structure, likely coming from a README.md file on the
Hugging Face Hub.`,name:"model_index"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard_data.py#L340",returnDescription:`
<p>The name of the model as found in the model index. This is used as the
identifier for the model on leaderboards like PapersWithCode.
eval_results (<code>List[EvalResult]</code>):
A list of <code>huggingface_hub.EvalResult</code> objects containing the metrics
reported in the provided model_index.</p>
`,returnType:`
<p>model_name (<code>str</code>)</p>
`}}),Je=new re({props:{anchor:"huggingface_hub.repocard_data.model_index_to_eval_results.example",$$slots:{default:[oi]},$$scope:{ctx:C}}}),Fa=new M({}),Sa=new E({props:{name:"huggingface_hub.repocard_data.eval_results_to_model_index",anchor:"huggingface_hub.repocard_data.eval_results_to_model_index",parameters:[{name:"model_name",val:": str"},{name:"eval_results",val:": typing.List[huggingface_hub.repocard_data.EvalResult]"}],parametersDescription:[{anchor:"huggingface_hub.repocard_data.eval_results_to_model_index.model_name",description:`<strong>model_name</strong> (<code>str</code>) &#x2014;
Name of the model (ex. &#x201C;my-cool-model&#x201D;). This is used as the identifier
for the model on leaderboards like PapersWithCode.`,name:"model_name"},{anchor:"huggingface_hub.repocard_data.eval_results_to_model_index.eval_results",description:`<strong>eval_results</strong> (<code>List[EvalResult]</code>) &#x2014;
List of <code>huggingface_hub.EvalResult</code> objects containing the metrics to be
reported in the model-index.`,name:"eval_results"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard_data.py#L456",returnDescription:`
<p>The eval_results converted to a model-index.</p>
`,returnType:`
<p>model_index (<code>List[Dict[str, Any]]</code>)</p>
`}}),Ye=new re({props:{anchor:"huggingface_hub.repocard_data.eval_results_to_model_index.example",$$slots:{default:[li]},$$scope:{ctx:C}}}),Ba=new M({}),za=new E({props:{name:"huggingface_hub.metadata_eval_result",anchor:"huggingface_hub.metadata_eval_result",parameters:[{name:"model_pretty_name",val:": str"},{name:"task_pretty_name",val:": str"},{name:"task_id",val:": str"},{name:"metrics_pretty_name",val:": str"},{name:"metrics_id",val:": str"},{name:"metrics_value",val:": typing.Any"},{name:"dataset_pretty_name",val:": str"},{name:"dataset_id",val:": str"},{name:"metrics_config",val:": typing.Optional[str] = None"},{name:"metrics_verified",val:": typing.Optional[bool] = False"},{name:"dataset_config",val:": typing.Optional[str] = None"},{name:"dataset_split",val:": typing.Optional[str] = None"},{name:"dataset_revision",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.metadata_eval_result.model_pretty_name",description:`<strong>model_pretty_name</strong> (<code>str</code>) &#x2014;
The name of the model in natural language.`,name:"model_pretty_name"},{anchor:"huggingface_hub.metadata_eval_result.task_pretty_name",description:`<strong>task_pretty_name</strong> (<code>str</code>) &#x2014;
The name of a task in natural language.`,name:"task_pretty_name"},{anchor:"huggingface_hub.metadata_eval_result.task_id",description:`<strong>task_id</strong> (<code>str</code>) &#x2014;
Example: automatic-speech-recognition. A task id.`,name:"task_id"},{anchor:"huggingface_hub.metadata_eval_result.metrics_pretty_name",description:`<strong>metrics_pretty_name</strong> (<code>str</code>) &#x2014;
A name for the metric in natural language. Example: Test WER.`,name:"metrics_pretty_name"},{anchor:"huggingface_hub.metadata_eval_result.metrics_id",description:`<strong>metrics_id</strong> (<code>str</code>) &#x2014;
Example: wer. A metric id from <a href="https://hf.co/metrics" rel="nofollow">https://hf.co/metrics</a>.`,name:"metrics_id"},{anchor:"huggingface_hub.metadata_eval_result.metrics_value",description:`<strong>metrics_value</strong> (<code>Any</code>) &#x2014;
The value from the metric. Example: 20.0 or &#x201C;20.0 &#xB1; 1.2&#x201D;.`,name:"metrics_value"},{anchor:"huggingface_hub.metadata_eval_result.dataset_pretty_name",description:`<strong>dataset_pretty_name</strong> (<code>str</code>) &#x2014;
The name of the dataset in natural language.`,name:"dataset_pretty_name"},{anchor:"huggingface_hub.metadata_eval_result.dataset_id",description:`<strong>dataset_id</strong> (<code>str</code>) &#x2014;
Example: common_voice. A dataset id from <a href="https://hf.co/datasets" rel="nofollow">https://hf.co/datasets</a>.`,name:"dataset_id"},{anchor:"huggingface_hub.metadata_eval_result.metrics_config",description:`<strong>metrics_config</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The name of the metric configuration used in <code>load_metric()</code>.
Example: bleurt-large-512 in <code>load_metric(&quot;bleurt&quot;, &quot;bleurt-large-512&quot;)</code>.`,name:"metrics_config"},{anchor:"huggingface_hub.metadata_eval_result.metrics_verified",description:`<strong>metrics_verified</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If true, indicates that evaluation was generated by Hugging Face (vs. self-reported).
If a user tries to push self-reported metric results with verified=True, the push
will be rejected.`,name:"metrics_verified"},{anchor:"huggingface_hub.metadata_eval_result.dataset_config",description:`<strong>dataset_config</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Example: fr. The name of the dataset configuration used in <code>load_dataset()</code>.`,name:"dataset_config"},{anchor:"huggingface_hub.metadata_eval_result.dataset_split",description:`<strong>dataset_split</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Example: test. The name of the dataset split used in <code>load_dataset()</code>.`,name:"dataset_split"},{anchor:"huggingface_hub.metadata_eval_result.dataset_revision",description:`<strong>dataset_revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Example: 5503434ddd753f426f4b38109466949a1217c2bb. The name of the dataset dataset revision
used in <code>load_dataset()</code>.`,name:"dataset_revision"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard.py#L531",returnDescription:`
<p>a metadata dict with the result from a model evaluated on a dataset.</p>
`,returnType:`
<p><code>dict</code></p>
`}}),Qe=new re({props:{anchor:"huggingface_hub.metadata_eval_result.example",$$slots:{default:[ii]},$$scope:{ctx:C}}}),Ga=new M({}),Ja=new E({props:{name:"huggingface_hub.metadata_update",anchor:"huggingface_hub.metadata_update",parameters:[{name:"repo_id",val:": str"},{name:"metadata",val:": typing.Dict"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"overwrite",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": bool = False"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.metadata_update.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The name of the repository.`,name:"repo_id"},{anchor:"huggingface_hub.metadata_update.metadata",description:`<strong>metadata</strong> (<code>dict</code>) &#x2014;
A dictionary containing the metadata to be updated.`,name:"metadata"},{anchor:"huggingface_hub.metadata_update.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if updating to a dataset or space,
<code>None</code> or <code>&quot;model&quot;</code> if updating to a model. Default is <code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.metadata_update.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If set to <code>True</code> an existing field can be overwritten, otherwise
attempting to overwrite an existing field will cause an error.`,name:"overwrite"},{anchor:"huggingface_hub.metadata_update.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token.`,name:"token"},{anchor:"huggingface_hub.metadata_update.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary / title / first line of the generated commit. Defaults to
<code>f&quot;Update metdata with huggingface_hub&quot;</code>`,name:"commit_message"},{anchor:"huggingface_hub.metadata_update.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"},{anchor:"huggingface_hub.metadata_update.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.metadata_update.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <code>revision</code> with that commit.
Defaults to <code>False</code>.`,name:"create_pr"},{anchor:"huggingface_hub.metadata_update.parent_commit",description:`<strong>parent_commit</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The OID / SHA of the parent commit, as a hexadecimal string. Shorthands (7 first characters) are also supported.
If specified and <code>create_pr</code> is <code>False</code>, the commit will fail if <code>revision</code> does not point to <code>parent_commit</code>.
If specified and <code>create_pr</code> is <code>True</code>, the pull request will be created from <code>parent_commit</code>.
Specifying <code>parent_commit</code> ensures the repo has not changed before committing the changes, and can be
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/repocard.py#L656",returnDescription:`
<p>URL of the commit which updated the card metadata.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ze=new re({props:{anchor:"huggingface_hub.metadata_update.example",$$slots:{default:[ci]},$$scope:{ctx:C}}}),{c(){d=n("meta"),v=c(),_=n("h1"),i=n("a"),b=n("span"),x(s.$$.fragment),f=c(),A=n("span"),T=h("Repository Cards"),q=c(),k=n("p"),Z=h(`The huggingface_hub library provides a Python interface to create, share, and update Model/Dataset Cards.
Visit the `),V=n("a"),L=h("dedicated documentation page"),B=h(` for a deeper view of what
Model Cards on the Hub are, and how they work under the hood. You can also check out our `),ee=n("a"),Ka=h("Model Cards guide"),Qa=h(` to
get a feel for how you would use these utilities in your own projects.`),De=c(),H=n("h2"),z=n("a"),bt=n("span"),x(ra.$$.fragment),fn=c(),vt=n("span"),_n=h("Repo Card"),bs=c(),I=n("p"),bn=h("The "),xt=n("code"),vn=h("RepoCard"),xn=h(" object is the parent class of "),Xa=n("a"),$n=h("ModelCard"),yn=h(" and "),Za=n("a"),jn=h("DatasetCard"),wn=h("."),vs=c(),R=n("div"),x(oa.$$.fragment),Dn=c(),O=n("div"),x(la.$$.fragment),Cn=c(),$t=n("p"),En=h(`Initialize a RepoCard from string content. The content should be a
Markdown file with a YAML block at the beginning and a Markdown body.`),kn=c(),x(Ce.$$.fragment),Rn=c(),x(Ee.$$.fragment),An=c(),ae=n("div"),x(ia.$$.fragment),Tn=c(),yt=n("p"),qn=h("Initialize a RepoCard from a template. By default, it uses the default template."),Mn=c(),jt=n("p"),Nn=h("Templates are Jinja2 templates that can be customized by passing keyword arguments."),Pn=c(),te=n("div"),x(ca.$$.fragment),Ln=c(),wt=n("p"),Hn=h("Initialize a RepoCard from a Hugging Face Hub repo\u2019s README.md or a local filepath."),In=c(),x(ke.$$.fragment),On=c(),Re=n("div"),x(pa.$$.fragment),Un=c(),Dt=n("p"),Fn=h("Push a RepoCard to a Hugging Face Hub repo."),Sn=c(),se=n("div"),x(da.$$.fragment),Vn=c(),Ct=n("p"),Bn=h("Save a RepoCard to a file."),zn=c(),x(Ae.$$.fragment),Gn=c(),ne=n("div"),x(ga.$$.fragment),Jn=c(),ha=n("p"),Wn=h(`Validates card against Hugging Face Hub\u2019s card validation logic.
Using this function requires access to the internet, so it is only called
internally by `),et=n("a"),Yn=h("huggingface_hub.repocard.RepoCard.push_to_hub()"),Kn=h("."),Qn=c(),x(Te.$$.fragment),xs=c(),ie=n("h2"),qe=n("a"),Et=n("span"),x(ma.$$.fragment),Xn=c(),kt=n("span"),Zn=h("Card Data"),$s=c(),U=n("p"),er=h("The "),at=n("a"),ar=h("CardData"),tr=h(" object is the parent class of "),tt=n("a"),sr=h("ModelCardData"),nr=h(" and "),st=n("a"),rr=h("DatasetCardData"),or=h("."),ys=c(),G=n("div"),x(ua.$$.fragment),lr=c(),Me=n("div"),x(fa.$$.fragment),ir=c(),Rt=n("p"),cr=h("Converts CardData to a dict."),pr=c(),Ne=n("div"),x(_a.$$.fragment),dr=c(),At=n("p"),gr=h("Dumps CardData to a YAML block for inclusion in a README.md file."),js=c(),ce=n("h2"),Pe=n("a"),Tt=n("span"),x(ba.$$.fragment),hr=c(),qt=n("span"),mr=h("Model Cards"),ws=c(),pe=n("h3"),Le=n("a"),Mt=n("span"),x(va.$$.fragment),ur=c(),Nt=n("span"),fr=h("ModelCard"),Ds=c(),de=n("div"),x(xa.$$.fragment),_r=c(),F=n("div"),x($a.$$.fragment),br=c(),nt=n("p"),vr=h(`Initialize a ModelCard from a template. By default, it uses the default template, which can be found here:
`),ya=n("a"),xr=h("https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/modelcard_template.md"),$r=c(),Pt=n("p"),yr=h("Templates are Jinja2 templates that can be customized by passing keyword arguments."),jr=c(),x(He.$$.fragment),Cs=c(),ge=n("h3"),Ie=n("a"),Lt=n("span"),x(ja.$$.fragment),wr=c(),Ht=n("span"),Dr=h("ModelCardData"),Es=c(),J=n("div"),x(wa.$$.fragment),Cr=c(),It=n("p"),Er=h("Model Card Metadata that is used by Hugging Face Hub when included at the top of your README.md"),kr=c(),x(Oe.$$.fragment),ks=c(),he=n("h2"),Ue=n("a"),Ot=n("span"),x(Da.$$.fragment),Rr=c(),Ut=n("span"),Ar=h("Dataset Cards"),Rs=c(),rt=n("p"),Tr=h("Dataset cards are also known as Data Cards in the ML Community."),As=c(),me=n("h3"),Fe=n("a"),Ft=n("span"),x(Ca.$$.fragment),qr=c(),St=n("span"),Mr=h("DatasetCard"),Ts=c(),ue=n("div"),x(Ea.$$.fragment),Nr=c(),S=n("div"),x(ka.$$.fragment),Pr=c(),ot=n("p"),Lr=h(`Initialize a DatasetCard from a template. By default, it uses the default template, which can be found here:
`),Ra=n("a"),Hr=h("https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/datasetcard_template.md"),Ir=c(),Vt=n("p"),Or=h("Templates are Jinja2 templates that can be customized by passing keyword arguments."),Ur=c(),x(Se.$$.fragment),qs=c(),fe=n("h3"),Ve=n("a"),Bt=n("span"),x(Aa.$$.fragment),Fr=c(),zt=n("span"),Sr=h("DatasetCardData"),Ms=c(),_e=n("div"),x(Ta.$$.fragment),Vr=c(),Gt=n("p"),Br=h("Dataset Card Metadata that is used by Hugging Face Hub when included at the top of your README.md"),Ns=c(),be=n("h2"),Be=n("a"),Jt=n("span"),x(qa.$$.fragment),zr=c(),Wt=n("span"),Gr=h("Utilities"),Ps=c(),ve=n("h3"),ze=n("a"),Yt=n("span"),x(Ma.$$.fragment),Jr=c(),Kt=n("span"),Wr=h("EvalResult"),Ls=c(),W=n("div"),x(Na.$$.fragment),Yr=c(),Qt=n("p"),Kr=h("Flattened representation of individual evaluation results found in model-index of Model Cards."),Qr=c(),Pa=n("p"),Xr=h("For more information on the model-index spec, see "),La=n("a"),Zr=h("https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),eo=h("."),Hs=c(),xe=n("h3"),Ge=n("a"),Xt=n("span"),x(Ha.$$.fragment),ao=c(),Zt=n("span"),to=h("model_index_to_eval_results"),Is=c(),P=n("div"),x(Ia.$$.fragment),so=c(),Oa=n("p"),no=h("Takes in a model index and returns the model name and a list of "),es=n("code"),ro=h("huggingface_hub.EvalResult"),oo=h(" objects."),lo=c(),lt=n("p"),io=h(`A detailed spec of the model index can be found here:
`),Ua=n("a"),co=h("https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),po=c(),x(Je.$$.fragment),Os=c(),$e=n("h3"),We=n("a"),as=n("span"),x(Fa.$$.fragment),go=c(),ts=n("span"),ho=h("eval_results_to_model_index"),Us=c(),Y=n("div"),x(Sa.$$.fragment),mo=c(),Va=n("p"),uo=h("Takes in given model name and list of "),ss=n("code"),fo=h("huggingface_hub.EvalResult"),_o=h(` and returns a
valid model-index that will be compatible with the format expected by the
Hugging Face Hub.`),bo=c(),x(Ye.$$.fragment),Fs=c(),ye=n("h3"),Ke=n("a"),ns=n("span"),x(Ba.$$.fragment),vo=c(),rs=n("span"),xo=h("metadata_eval_result"),Ss=c(),K=n("div"),x(za.$$.fragment),$o=c(),os=n("p"),yo=h("Creates a metadata dict with the result from a model evaluated on a dataset."),jo=c(),x(Qe.$$.fragment),Vs=c(),je=n("h3"),Xe=n("a"),ls=n("span"),x(Ga.$$.fragment),wo=c(),is=n("span"),Do=h("metadata_update"),Bs=c(),Q=n("div"),x(Ja.$$.fragment),Co=c(),cs=n("p"),Eo=h("Updates the metadata in the README.md of a repository on the Hugging Face Hub."),ko=c(),x(Ze.$$.fragment),this.h()},l(e){const g=Kl('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(t),v=p(e),_=r(e,"H1",{class:!0});var Wa=o(_);i=r(Wa,"A",{id:!0,class:!0,href:!0});var ps=o(i);b=r(ps,"SPAN",{});var ds=o(b);$(s.$$.fragment,ds),ds.forEach(t),ps.forEach(t),f=p(Wa),A=r(Wa,"SPAN",{});var gs=o(A);T=m(gs,"Repository Cards"),gs.forEach(t),Wa.forEach(t),q=p(e),k=r(e,"P",{});var we=o(k);Z=m(we,`The huggingface_hub library provides a Python interface to create, share, and update Model/Dataset Cards.
Visit the `),V=r(we,"A",{href:!0,rel:!0});var hs=o(V);L=m(hs,"dedicated documentation page"),hs.forEach(t),B=m(we,` for a deeper view of what
Model Cards on the Hub are, and how they work under the hood. You can also check out our `),ee=r(we,"A",{href:!0});var ms=o(ee);Ka=m(ms,"Model Cards guide"),ms.forEach(t),Qa=m(we,` to
get a feel for how you would use these utilities in your own projects.`),we.forEach(t),De=p(e),H=r(e,"H2",{class:!0});var Ya=o(H);z=r(Ya,"A",{id:!0,class:!0,href:!0});var us=o(z);bt=r(us,"SPAN",{});var fs=o(bt);$(ra.$$.fragment,fs),fs.forEach(t),us.forEach(t),fn=p(Ya),vt=r(Ya,"SPAN",{});var _s=o(vt);_n=m(_s,"Repo Card"),_s.forEach(t),Ya.forEach(t),bs=p(e),I=r(e,"P",{});var X=o(I);bn=m(X,"The "),xt=r(X,"CODE",{});var qo=o(xt);vn=m(qo,"RepoCard"),qo.forEach(t),xn=m(X," object is the parent class of "),Xa=r(X,"A",{href:!0});var Mo=o(Xa);$n=m(Mo,"ModelCard"),Mo.forEach(t),yn=m(X," and "),Za=r(X,"A",{href:!0});var No=o(Za);jn=m(No,"DatasetCard"),No.forEach(t),wn=m(X,"."),X.forEach(t),vs=p(e),R=r(e,"DIV",{class:!0});var N=o(R);$(oa.$$.fragment,N),Dn=p(N),O=r(N,"DIV",{class:!0});var ea=o(O);$(la.$$.fragment,ea),Cn=p(ea),$t=r(ea,"P",{});var Po=o($t);En=m(Po,`Initialize a RepoCard from string content. The content should be a
Markdown file with a YAML block at the beginning and a Markdown body.`),Po.forEach(t),kn=p(ea),$(Ce.$$.fragment,ea),Rn=p(ea),$(Ee.$$.fragment,ea),ea.forEach(t),An=p(N),ae=r(N,"DIV",{class:!0});var it=o(ae);$(ia.$$.fragment,it),Tn=p(it),yt=r(it,"P",{});var Lo=o(yt);qn=m(Lo,"Initialize a RepoCard from a template. By default, it uses the default template."),Lo.forEach(t),Mn=p(it),jt=r(it,"P",{});var Ho=o(jt);Nn=m(Ho,"Templates are Jinja2 templates that can be customized by passing keyword arguments."),Ho.forEach(t),it.forEach(t),Pn=p(N),te=r(N,"DIV",{class:!0});var ct=o(te);$(ca.$$.fragment,ct),Ln=p(ct),wt=r(ct,"P",{});var Io=o(wt);Hn=m(Io,"Initialize a RepoCard from a Hugging Face Hub repo\u2019s README.md or a local filepath."),Io.forEach(t),In=p(ct),$(ke.$$.fragment,ct),ct.forEach(t),On=p(N),Re=r(N,"DIV",{class:!0});var Gs=o(Re);$(pa.$$.fragment,Gs),Un=p(Gs),Dt=r(Gs,"P",{});var Oo=o(Dt);Fn=m(Oo,"Push a RepoCard to a Hugging Face Hub repo."),Oo.forEach(t),Gs.forEach(t),Sn=p(N),se=r(N,"DIV",{class:!0});var pt=o(se);$(da.$$.fragment,pt),Vn=p(pt),Ct=r(pt,"P",{});var Uo=o(Ct);Bn=m(Uo,"Save a RepoCard to a file."),Uo.forEach(t),zn=p(pt),$(Ae.$$.fragment,pt),pt.forEach(t),Gn=p(N),ne=r(N,"DIV",{class:!0});var dt=o(ne);$(ga.$$.fragment,dt),Jn=p(dt),ha=r(dt,"P",{});var Js=o(ha);Wn=m(Js,`Validates card against Hugging Face Hub\u2019s card validation logic.
Using this function requires access to the internet, so it is only called
internally by `),et=r(Js,"A",{href:!0});var Fo=o(et);Yn=m(Fo,"huggingface_hub.repocard.RepoCard.push_to_hub()"),Fo.forEach(t),Kn=m(Js,"."),Js.forEach(t),Qn=p(dt),$(Te.$$.fragment,dt),dt.forEach(t),N.forEach(t),xs=p(e),ie=r(e,"H2",{class:!0});var Ws=o(ie);qe=r(Ws,"A",{id:!0,class:!0,href:!0});var So=o(qe);Et=r(So,"SPAN",{});var Vo=o(Et);$(ma.$$.fragment,Vo),Vo.forEach(t),So.forEach(t),Xn=p(Ws),kt=r(Ws,"SPAN",{});var Bo=o(kt);Zn=m(Bo,"Card Data"),Bo.forEach(t),Ws.forEach(t),$s=p(e),U=r(e,"P",{});var aa=o(U);er=m(aa,"The "),at=r(aa,"A",{href:!0});var zo=o(at);ar=m(zo,"CardData"),zo.forEach(t),tr=m(aa," object is the parent class of "),tt=r(aa,"A",{href:!0});var Go=o(tt);sr=m(Go,"ModelCardData"),Go.forEach(t),nr=m(aa," and "),st=r(aa,"A",{href:!0});var Jo=o(st);rr=m(Jo,"DatasetCardData"),Jo.forEach(t),or=m(aa,"."),aa.forEach(t),ys=p(e),G=r(e,"DIV",{class:!0});var gt=o(G);$(ua.$$.fragment,gt),lr=p(gt),Me=r(gt,"DIV",{class:!0});var Ys=o(Me);$(fa.$$.fragment,Ys),ir=p(Ys),Rt=r(Ys,"P",{});var Wo=o(Rt);cr=m(Wo,"Converts CardData to a dict."),Wo.forEach(t),Ys.forEach(t),pr=p(gt),Ne=r(gt,"DIV",{class:!0});var Ks=o(Ne);$(_a.$$.fragment,Ks),dr=p(Ks),At=r(Ks,"P",{});var Yo=o(At);gr=m(Yo,"Dumps CardData to a YAML block for inclusion in a README.md file."),Yo.forEach(t),Ks.forEach(t),gt.forEach(t),js=p(e),ce=r(e,"H2",{class:!0});var Qs=o(ce);Pe=r(Qs,"A",{id:!0,class:!0,href:!0});var Ko=o(Pe);Tt=r(Ko,"SPAN",{});var Qo=o(Tt);$(ba.$$.fragment,Qo),Qo.forEach(t),Ko.forEach(t),hr=p(Qs),qt=r(Qs,"SPAN",{});var Xo=o(qt);mr=m(Xo,"Model Cards"),Xo.forEach(t),Qs.forEach(t),ws=p(e),pe=r(e,"H3",{class:!0});var Xs=o(pe);Le=r(Xs,"A",{id:!0,class:!0,href:!0});var Zo=o(Le);Mt=r(Zo,"SPAN",{});var el=o(Mt);$(va.$$.fragment,el),el.forEach(t),Zo.forEach(t),ur=p(Xs),Nt=r(Xs,"SPAN",{});var al=o(Nt);fr=m(al,"ModelCard"),al.forEach(t),Xs.forEach(t),Ds=p(e),de=r(e,"DIV",{class:!0});var Zs=o(de);$(xa.$$.fragment,Zs),_r=p(Zs),F=r(Zs,"DIV",{class:!0});var ta=o(F);$($a.$$.fragment,ta),br=p(ta),nt=r(ta,"P",{});var Ro=o(nt);vr=m(Ro,`Initialize a ModelCard from a template. By default, it uses the default template, which can be found here:
`),ya=r(Ro,"A",{href:!0,rel:!0});var tl=o(ya);xr=m(tl,"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/modelcard_template.md"),tl.forEach(t),Ro.forEach(t),$r=p(ta),Pt=r(ta,"P",{});var sl=o(Pt);yr=m(sl,"Templates are Jinja2 templates that can be customized by passing keyword arguments."),sl.forEach(t),jr=p(ta),$(He.$$.fragment,ta),ta.forEach(t),Zs.forEach(t),Cs=p(e),ge=r(e,"H3",{class:!0});var en=o(ge);Ie=r(en,"A",{id:!0,class:!0,href:!0});var nl=o(Ie);Lt=r(nl,"SPAN",{});var rl=o(Lt);$(ja.$$.fragment,rl),rl.forEach(t),nl.forEach(t),wr=p(en),Ht=r(en,"SPAN",{});var ol=o(Ht);Dr=m(ol,"ModelCardData"),ol.forEach(t),en.forEach(t),Es=p(e),J=r(e,"DIV",{class:!0});var ht=o(J);$(wa.$$.fragment,ht),Cr=p(ht),It=r(ht,"P",{});var ll=o(It);Er=m(ll,"Model Card Metadata that is used by Hugging Face Hub when included at the top of your README.md"),ll.forEach(t),kr=p(ht),$(Oe.$$.fragment,ht),ht.forEach(t),ks=p(e),he=r(e,"H2",{class:!0});var an=o(he);Ue=r(an,"A",{id:!0,class:!0,href:!0});var il=o(Ue);Ot=r(il,"SPAN",{});var cl=o(Ot);$(Da.$$.fragment,cl),cl.forEach(t),il.forEach(t),Rr=p(an),Ut=r(an,"SPAN",{});var pl=o(Ut);Ar=m(pl,"Dataset Cards"),pl.forEach(t),an.forEach(t),Rs=p(e),rt=r(e,"P",{});var dl=o(rt);Tr=m(dl,"Dataset cards are also known as Data Cards in the ML Community."),dl.forEach(t),As=p(e),me=r(e,"H3",{class:!0});var tn=o(me);Fe=r(tn,"A",{id:!0,class:!0,href:!0});var gl=o(Fe);Ft=r(gl,"SPAN",{});var hl=o(Ft);$(Ca.$$.fragment,hl),hl.forEach(t),gl.forEach(t),qr=p(tn),St=r(tn,"SPAN",{});var ml=o(St);Mr=m(ml,"DatasetCard"),ml.forEach(t),tn.forEach(t),Ts=p(e),ue=r(e,"DIV",{class:!0});var sn=o(ue);$(Ea.$$.fragment,sn),Nr=p(sn),S=r(sn,"DIV",{class:!0});var sa=o(S);$(ka.$$.fragment,sa),Pr=p(sa),ot=r(sa,"P",{});var Ao=o(ot);Lr=m(Ao,`Initialize a DatasetCard from a template. By default, it uses the default template, which can be found here:
`),Ra=r(Ao,"A",{href:!0,rel:!0});var ul=o(Ra);Hr=m(ul,"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/datasetcard_template.md"),ul.forEach(t),Ao.forEach(t),Ir=p(sa),Vt=r(sa,"P",{});var fl=o(Vt);Or=m(fl,"Templates are Jinja2 templates that can be customized by passing keyword arguments."),fl.forEach(t),Ur=p(sa),$(Se.$$.fragment,sa),sa.forEach(t),sn.forEach(t),qs=p(e),fe=r(e,"H3",{class:!0});var nn=o(fe);Ve=r(nn,"A",{id:!0,class:!0,href:!0});var _l=o(Ve);Bt=r(_l,"SPAN",{});var bl=o(Bt);$(Aa.$$.fragment,bl),bl.forEach(t),_l.forEach(t),Fr=p(nn),zt=r(nn,"SPAN",{});var vl=o(zt);Sr=m(vl,"DatasetCardData"),vl.forEach(t),nn.forEach(t),Ms=p(e),_e=r(e,"DIV",{class:!0});var rn=o(_e);$(Ta.$$.fragment,rn),Vr=p(rn),Gt=r(rn,"P",{});var xl=o(Gt);Br=m(xl,"Dataset Card Metadata that is used by Hugging Face Hub when included at the top of your README.md"),xl.forEach(t),rn.forEach(t),Ns=p(e),be=r(e,"H2",{class:!0});var on=o(be);Be=r(on,"A",{id:!0,class:!0,href:!0});var $l=o(Be);Jt=r($l,"SPAN",{});var yl=o(Jt);$(qa.$$.fragment,yl),yl.forEach(t),$l.forEach(t),zr=p(on),Wt=r(on,"SPAN",{});var jl=o(Wt);Gr=m(jl,"Utilities"),jl.forEach(t),on.forEach(t),Ps=p(e),ve=r(e,"H3",{class:!0});var ln=o(ve);ze=r(ln,"A",{id:!0,class:!0,href:!0});var wl=o(ze);Yt=r(wl,"SPAN",{});var Dl=o(Yt);$(Ma.$$.fragment,Dl),Dl.forEach(t),wl.forEach(t),Jr=p(ln),Kt=r(ln,"SPAN",{});var Cl=o(Kt);Wr=m(Cl,"EvalResult"),Cl.forEach(t),ln.forEach(t),Ls=p(e),W=r(e,"DIV",{class:!0});var mt=o(W);$(Na.$$.fragment,mt),Yr=p(mt),Qt=r(mt,"P",{});var El=o(Qt);Kr=m(El,"Flattened representation of individual evaluation results found in model-index of Model Cards."),El.forEach(t),Qr=p(mt),Pa=r(mt,"P",{});var cn=o(Pa);Xr=m(cn,"For more information on the model-index spec, see "),La=r(cn,"A",{href:!0,rel:!0});var kl=o(La);Zr=m(kl,"https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),kl.forEach(t),eo=m(cn,"."),cn.forEach(t),mt.forEach(t),Hs=p(e),xe=r(e,"H3",{class:!0});var pn=o(xe);Ge=r(pn,"A",{id:!0,class:!0,href:!0});var Rl=o(Ge);Xt=r(Rl,"SPAN",{});var Al=o(Xt);$(Ha.$$.fragment,Al),Al.forEach(t),Rl.forEach(t),ao=p(pn),Zt=r(pn,"SPAN",{});var Tl=o(Zt);to=m(Tl,"model_index_to_eval_results"),Tl.forEach(t),pn.forEach(t),Is=p(e),P=r(e,"DIV",{class:!0});var na=o(P);$(Ia.$$.fragment,na),so=p(na),Oa=r(na,"P",{});var dn=o(Oa);no=m(dn,"Takes in a model index and returns the model name and a list of "),es=r(dn,"CODE",{});var ql=o(es);ro=m(ql,"huggingface_hub.EvalResult"),ql.forEach(t),oo=m(dn," objects."),dn.forEach(t),lo=p(na),lt=r(na,"P",{});var To=o(lt);io=m(To,`A detailed spec of the model index can be found here:
`),Ua=r(To,"A",{href:!0,rel:!0});var Ml=o(Ua);co=m(Ml,"https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),Ml.forEach(t),To.forEach(t),po=p(na),$(Je.$$.fragment,na),na.forEach(t),Os=p(e),$e=r(e,"H3",{class:!0});var gn=o($e);We=r(gn,"A",{id:!0,class:!0,href:!0});var Nl=o(We);as=r(Nl,"SPAN",{});var Pl=o(as);$(Fa.$$.fragment,Pl),Pl.forEach(t),Nl.forEach(t),go=p(gn),ts=r(gn,"SPAN",{});var Ll=o(ts);ho=m(Ll,"eval_results_to_model_index"),Ll.forEach(t),gn.forEach(t),Us=p(e),Y=r(e,"DIV",{class:!0});var ut=o(Y);$(Sa.$$.fragment,ut),mo=p(ut),Va=r(ut,"P",{});var hn=o(Va);uo=m(hn,"Takes in given model name and list of "),ss=r(hn,"CODE",{});var Hl=o(ss);fo=m(Hl,"huggingface_hub.EvalResult"),Hl.forEach(t),_o=m(hn,` and returns a
valid model-index that will be compatible with the format expected by the
Hugging Face Hub.`),hn.forEach(t),bo=p(ut),$(Ye.$$.fragment,ut),ut.forEach(t),Fs=p(e),ye=r(e,"H3",{class:!0});var mn=o(ye);Ke=r(mn,"A",{id:!0,class:!0,href:!0});var Il=o(Ke);ns=r(Il,"SPAN",{});var Ol=o(ns);$(Ba.$$.fragment,Ol),Ol.forEach(t),Il.forEach(t),vo=p(mn),rs=r(mn,"SPAN",{});var Ul=o(rs);xo=m(Ul,"metadata_eval_result"),Ul.forEach(t),mn.forEach(t),Ss=p(e),K=r(e,"DIV",{class:!0});var ft=o(K);$(za.$$.fragment,ft),$o=p(ft),os=r(ft,"P",{});var Fl=o(os);yo=m(Fl,"Creates a metadata dict with the result from a model evaluated on a dataset."),Fl.forEach(t),jo=p(ft),$(Qe.$$.fragment,ft),ft.forEach(t),Vs=p(e),je=r(e,"H3",{class:!0});var un=o(je);Xe=r(un,"A",{id:!0,class:!0,href:!0});var Sl=o(Xe);ls=r(Sl,"SPAN",{});var Vl=o(ls);$(Ga.$$.fragment,Vl),Vl.forEach(t),Sl.forEach(t),wo=p(un),is=r(un,"SPAN",{});var Bl=o(is);Do=m(Bl,"metadata_update"),Bl.forEach(t),un.forEach(t),Bs=p(e),Q=r(e,"DIV",{class:!0});var _t=o(Q);$(Ja.$$.fragment,_t),Co=p(_t),cs=r(_t,"P",{});var zl=o(cs);Eo=m(zl,"Updates the metadata in the README.md of a repository on the Hugging Face Hub."),zl.forEach(t),ko=p(_t),$(Ze.$$.fragment,_t),_t.forEach(t),this.h()},h(){l(d,"name","hf:doc:metadata"),l(d,"content",JSON.stringify(di)),l(i,"id","repository-cards"),l(i,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(i,"href","#repository-cards"),l(_,"class","relative group"),l(V,"href","https://huggingface.co/docs/hub/models-cards"),l(V,"rel","nofollow"),l(ee,"href","../how-to-model-cards"),l(z,"id","huggingface_hub.repocard.RepoCard"),l(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(z,"href","#huggingface_hub.repocard.RepoCard"),l(H,"class","relative group"),l(Xa,"href","/docs/huggingface_hub/main/en/package_reference/cards#huggingface_hub.ModelCard"),l(Za,"href","/docs/huggingface_hub/main/en/package_reference/cards#huggingface_hub.DatasetCard"),l(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(et,"href","/docs/huggingface_hub/main/en/package_reference/cards#huggingface_hub.repocard.RepoCard.push_to_hub"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(qe,"id","huggingface_hub.CardData"),l(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(qe,"href","#huggingface_hub.CardData"),l(ie,"class","relative group"),l(at,"href","/docs/huggingface_hub/main/en/package_reference/cards#huggingface_hub.CardData"),l(tt,"href","/docs/huggingface_hub/main/en/package_reference/cards#huggingface_hub.ModelCardData"),l(st,"href","/docs/huggingface_hub/main/en/package_reference/cards#huggingface_hub.DatasetCardData"),l(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Pe,"id","model-cards"),l(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Pe,"href","#model-cards"),l(ce,"class","relative group"),l(Le,"id","huggingface_hub.ModelCard"),l(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Le,"href","#huggingface_hub.ModelCard"),l(pe,"class","relative group"),l(ya,"href","https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/modelcard_template.md"),l(ya,"rel","nofollow"),l(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ie,"id","huggingface_hub.ModelCardData"),l(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ie,"href","#huggingface_hub.ModelCardData"),l(ge,"class","relative group"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ue,"id","dataset-cards"),l(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ue,"href","#dataset-cards"),l(he,"class","relative group"),l(Fe,"id","huggingface_hub.DatasetCard"),l(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Fe,"href","#huggingface_hub.DatasetCard"),l(me,"class","relative group"),l(Ra,"href","https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/datasetcard_template.md"),l(Ra,"rel","nofollow"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ve,"id","huggingface_hub.DatasetCardData"),l(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ve,"href","#huggingface_hub.DatasetCardData"),l(fe,"class","relative group"),l(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Be,"id","utilities"),l(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Be,"href","#utilities"),l(be,"class","relative group"),l(ze,"id","huggingface_hub.EvalResult"),l(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ze,"href","#huggingface_hub.EvalResult"),l(ve,"class","relative group"),l(La,"href","https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),l(La,"rel","nofollow"),l(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ge,"id","huggingface_hub.repocard_data.model_index_to_eval_results"),l(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ge,"href","#huggingface_hub.repocard_data.model_index_to_eval_results"),l(xe,"class","relative group"),l(Ua,"href","https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),l(Ua,"rel","nofollow"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(We,"id","huggingface_hub.repocard_data.eval_results_to_model_index"),l(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(We,"href","#huggingface_hub.repocard_data.eval_results_to_model_index"),l($e,"class","relative group"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ke,"id","huggingface_hub.metadata_eval_result"),l(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ke,"href","#huggingface_hub.metadata_eval_result"),l(ye,"class","relative group"),l(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Xe,"id","huggingface_hub.metadata_update"),l(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Xe,"href","#huggingface_hub.metadata_update"),l(je,"class","relative group"),l(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,g){a(document.head,d),u(e,v,g),u(e,_,g),a(_,i),a(i,b),y(s,b,null),a(_,f),a(_,A),a(A,T),u(e,q,g),u(e,k,g),a(k,Z),a(k,V),a(V,L),a(k,B),a(k,ee),a(ee,Ka),a(k,Qa),u(e,De,g),u(e,H,g),a(H,z),a(z,bt),y(ra,bt,null),a(H,fn),a(H,vt),a(vt,_n),u(e,bs,g),u(e,I,g),a(I,bn),a(I,xt),a(xt,vn),a(I,xn),a(I,Xa),a(Xa,$n),a(I,yn),a(I,Za),a(Za,jn),a(I,wn),u(e,vs,g),u(e,R,g),y(oa,R,null),a(R,Dn),a(R,O),y(la,O,null),a(O,Cn),a(O,$t),a($t,En),a(O,kn),y(Ce,O,null),a(O,Rn),y(Ee,O,null),a(R,An),a(R,ae),y(ia,ae,null),a(ae,Tn),a(ae,yt),a(yt,qn),a(ae,Mn),a(ae,jt),a(jt,Nn),a(R,Pn),a(R,te),y(ca,te,null),a(te,Ln),a(te,wt),a(wt,Hn),a(te,In),y(ke,te,null),a(R,On),a(R,Re),y(pa,Re,null),a(Re,Un),a(Re,Dt),a(Dt,Fn),a(R,Sn),a(R,se),y(da,se,null),a(se,Vn),a(se,Ct),a(Ct,Bn),a(se,zn),y(Ae,se,null),a(R,Gn),a(R,ne),y(ga,ne,null),a(ne,Jn),a(ne,ha),a(ha,Wn),a(ha,et),a(et,Yn),a(ha,Kn),a(ne,Qn),y(Te,ne,null),u(e,xs,g),u(e,ie,g),a(ie,qe),a(qe,Et),y(ma,Et,null),a(ie,Xn),a(ie,kt),a(kt,Zn),u(e,$s,g),u(e,U,g),a(U,er),a(U,at),a(at,ar),a(U,tr),a(U,tt),a(tt,sr),a(U,nr),a(U,st),a(st,rr),a(U,or),u(e,ys,g),u(e,G,g),y(ua,G,null),a(G,lr),a(G,Me),y(fa,Me,null),a(Me,ir),a(Me,Rt),a(Rt,cr),a(G,pr),a(G,Ne),y(_a,Ne,null),a(Ne,dr),a(Ne,At),a(At,gr),u(e,js,g),u(e,ce,g),a(ce,Pe),a(Pe,Tt),y(ba,Tt,null),a(ce,hr),a(ce,qt),a(qt,mr),u(e,ws,g),u(e,pe,g),a(pe,Le),a(Le,Mt),y(va,Mt,null),a(pe,ur),a(pe,Nt),a(Nt,fr),u(e,Ds,g),u(e,de,g),y(xa,de,null),a(de,_r),a(de,F),y($a,F,null),a(F,br),a(F,nt),a(nt,vr),a(nt,ya),a(ya,xr),a(F,$r),a(F,Pt),a(Pt,yr),a(F,jr),y(He,F,null),u(e,Cs,g),u(e,ge,g),a(ge,Ie),a(Ie,Lt),y(ja,Lt,null),a(ge,wr),a(ge,Ht),a(Ht,Dr),u(e,Es,g),u(e,J,g),y(wa,J,null),a(J,Cr),a(J,It),a(It,Er),a(J,kr),y(Oe,J,null),u(e,ks,g),u(e,he,g),a(he,Ue),a(Ue,Ot),y(Da,Ot,null),a(he,Rr),a(he,Ut),a(Ut,Ar),u(e,Rs,g),u(e,rt,g),a(rt,Tr),u(e,As,g),u(e,me,g),a(me,Fe),a(Fe,Ft),y(Ca,Ft,null),a(me,qr),a(me,St),a(St,Mr),u(e,Ts,g),u(e,ue,g),y(Ea,ue,null),a(ue,Nr),a(ue,S),y(ka,S,null),a(S,Pr),a(S,ot),a(ot,Lr),a(ot,Ra),a(Ra,Hr),a(S,Ir),a(S,Vt),a(Vt,Or),a(S,Ur),y(Se,S,null),u(e,qs,g),u(e,fe,g),a(fe,Ve),a(Ve,Bt),y(Aa,Bt,null),a(fe,Fr),a(fe,zt),a(zt,Sr),u(e,Ms,g),u(e,_e,g),y(Ta,_e,null),a(_e,Vr),a(_e,Gt),a(Gt,Br),u(e,Ns,g),u(e,be,g),a(be,Be),a(Be,Jt),y(qa,Jt,null),a(be,zr),a(be,Wt),a(Wt,Gr),u(e,Ps,g),u(e,ve,g),a(ve,ze),a(ze,Yt),y(Ma,Yt,null),a(ve,Jr),a(ve,Kt),a(Kt,Wr),u(e,Ls,g),u(e,W,g),y(Na,W,null),a(W,Yr),a(W,Qt),a(Qt,Kr),a(W,Qr),a(W,Pa),a(Pa,Xr),a(Pa,La),a(La,Zr),a(Pa,eo),u(e,Hs,g),u(e,xe,g),a(xe,Ge),a(Ge,Xt),y(Ha,Xt,null),a(xe,ao),a(xe,Zt),a(Zt,to),u(e,Is,g),u(e,P,g),y(Ia,P,null),a(P,so),a(P,Oa),a(Oa,no),a(Oa,es),a(es,ro),a(Oa,oo),a(P,lo),a(P,lt),a(lt,io),a(lt,Ua),a(Ua,co),a(P,po),y(Je,P,null),u(e,Os,g),u(e,$e,g),a($e,We),a(We,as),y(Fa,as,null),a($e,go),a($e,ts),a(ts,ho),u(e,Us,g),u(e,Y,g),y(Sa,Y,null),a(Y,mo),a(Y,Va),a(Va,uo),a(Va,ss),a(ss,fo),a(Va,_o),a(Y,bo),y(Ye,Y,null),u(e,Fs,g),u(e,ye,g),a(ye,Ke),a(Ke,ns),y(Ba,ns,null),a(ye,vo),a(ye,rs),a(rs,xo),u(e,Ss,g),u(e,K,g),y(za,K,null),a(K,$o),a(K,os),a(os,yo),a(K,jo),y(Qe,K,null),u(e,Vs,g),u(e,je,g),a(je,Xe),a(Xe,ls),y(Ga,ls,null),a(je,wo),a(je,is),a(is,Do),u(e,Bs,g),u(e,Q,g),y(Ja,Q,null),a(Q,Co),a(Q,cs),a(cs,Eo),a(Q,ko),y(Ze,Q,null),zs=!0},p(e,[g]){const Wa={};g&2&&(Wa.$$scope={dirty:g,ctx:e}),Ce.$set(Wa);const ps={};g&2&&(ps.$$scope={dirty:g,ctx:e}),Ee.$set(ps);const ds={};g&2&&(ds.$$scope={dirty:g,ctx:e}),ke.$set(ds);const gs={};g&2&&(gs.$$scope={dirty:g,ctx:e}),Ae.$set(gs);const we={};g&2&&(we.$$scope={dirty:g,ctx:e}),Te.$set(we);const hs={};g&2&&(hs.$$scope={dirty:g,ctx:e}),He.$set(hs);const ms={};g&2&&(ms.$$scope={dirty:g,ctx:e}),Oe.$set(ms);const Ya={};g&2&&(Ya.$$scope={dirty:g,ctx:e}),Se.$set(Ya);const us={};g&2&&(us.$$scope={dirty:g,ctx:e}),Je.$set(us);const fs={};g&2&&(fs.$$scope={dirty:g,ctx:e}),Ye.$set(fs);const _s={};g&2&&(_s.$$scope={dirty:g,ctx:e}),Qe.$set(_s);const X={};g&2&&(X.$$scope={dirty:g,ctx:e}),Ze.$set(X)},i(e){zs||(j(s.$$.fragment,e),j(ra.$$.fragment,e),j(oa.$$.fragment,e),j(la.$$.fragment,e),j(Ce.$$.fragment,e),j(Ee.$$.fragment,e),j(ia.$$.fragment,e),j(ca.$$.fragment,e),j(ke.$$.fragment,e),j(pa.$$.fragment,e),j(da.$$.fragment,e),j(Ae.$$.fragment,e),j(ga.$$.fragment,e),j(Te.$$.fragment,e),j(ma.$$.fragment,e),j(ua.$$.fragment,e),j(fa.$$.fragment,e),j(_a.$$.fragment,e),j(ba.$$.fragment,e),j(va.$$.fragment,e),j(xa.$$.fragment,e),j($a.$$.fragment,e),j(He.$$.fragment,e),j(ja.$$.fragment,e),j(wa.$$.fragment,e),j(Oe.$$.fragment,e),j(Da.$$.fragment,e),j(Ca.$$.fragment,e),j(Ea.$$.fragment,e),j(ka.$$.fragment,e),j(Se.$$.fragment,e),j(Aa.$$.fragment,e),j(Ta.$$.fragment,e),j(qa.$$.fragment,e),j(Ma.$$.fragment,e),j(Na.$$.fragment,e),j(Ha.$$.fragment,e),j(Ia.$$.fragment,e),j(Je.$$.fragment,e),j(Fa.$$.fragment,e),j(Sa.$$.fragment,e),j(Ye.$$.fragment,e),j(Ba.$$.fragment,e),j(za.$$.fragment,e),j(Qe.$$.fragment,e),j(Ga.$$.fragment,e),j(Ja.$$.fragment,e),j(Ze.$$.fragment,e),zs=!0)},o(e){w(s.$$.fragment,e),w(ra.$$.fragment,e),w(oa.$$.fragment,e),w(la.$$.fragment,e),w(Ce.$$.fragment,e),w(Ee.$$.fragment,e),w(ia.$$.fragment,e),w(ca.$$.fragment,e),w(ke.$$.fragment,e),w(pa.$$.fragment,e),w(da.$$.fragment,e),w(Ae.$$.fragment,e),w(ga.$$.fragment,e),w(Te.$$.fragment,e),w(ma.$$.fragment,e),w(ua.$$.fragment,e),w(fa.$$.fragment,e),w(_a.$$.fragment,e),w(ba.$$.fragment,e),w(va.$$.fragment,e),w(xa.$$.fragment,e),w($a.$$.fragment,e),w(He.$$.fragment,e),w(ja.$$.fragment,e),w(wa.$$.fragment,e),w(Oe.$$.fragment,e),w(Da.$$.fragment,e),w(Ca.$$.fragment,e),w(Ea.$$.fragment,e),w(ka.$$.fragment,e),w(Se.$$.fragment,e),w(Aa.$$.fragment,e),w(Ta.$$.fragment,e),w(qa.$$.fragment,e),w(Ma.$$.fragment,e),w(Na.$$.fragment,e),w(Ha.$$.fragment,e),w(Ia.$$.fragment,e),w(Je.$$.fragment,e),w(Fa.$$.fragment,e),w(Sa.$$.fragment,e),w(Ye.$$.fragment,e),w(Ba.$$.fragment,e),w(za.$$.fragment,e),w(Qe.$$.fragment,e),w(Ga.$$.fragment,e),w(Ja.$$.fragment,e),w(Ze.$$.fragment,e),zs=!1},d(e){t(d),e&&t(v),e&&t(_),D(s),e&&t(q),e&&t(k),e&&t(De),e&&t(H),D(ra),e&&t(bs),e&&t(I),e&&t(vs),e&&t(R),D(oa),D(la),D(Ce),D(Ee),D(ia),D(ca),D(ke),D(pa),D(da),D(Ae),D(ga),D(Te),e&&t(xs),e&&t(ie),D(ma),e&&t($s),e&&t(U),e&&t(ys),e&&t(G),D(ua),D(fa),D(_a),e&&t(js),e&&t(ce),D(ba),e&&t(ws),e&&t(pe),D(va),e&&t(Ds),e&&t(de),D(xa),D($a),D(He),e&&t(Cs),e&&t(ge),D(ja),e&&t(Es),e&&t(J),D(wa),D(Oe),e&&t(ks),e&&t(he),D(Da),e&&t(Rs),e&&t(rt),e&&t(As),e&&t(me),D(Ca),e&&t(Ts),e&&t(ue),D(Ea),D(ka),D(Se),e&&t(qs),e&&t(fe),D(Aa),e&&t(Ms),e&&t(_e),D(Ta),e&&t(Ns),e&&t(be),D(qa),e&&t(Ps),e&&t(ve),D(Ma),e&&t(Ls),e&&t(W),D(Na),e&&t(Hs),e&&t(xe),D(Ha),e&&t(Is),e&&t(P),D(Ia),D(Je),e&&t(Os),e&&t($e),D(Fa),e&&t(Us),e&&t(Y),D(Sa),D(Ye),e&&t(Fs),e&&t(ye),D(Ba),e&&t(Ss),e&&t(K),D(za),D(Qe),e&&t(Vs),e&&t(je),D(Ga),e&&t(Bs),e&&t(Q),D(Ja),D(Ze)}}}const di={local:"repository-cards",sections:[{local:"huggingface_hub.repocard.RepoCard",title:"Repo Card"},{local:"huggingface_hub.CardData",title:"Card Data"},{local:"model-cards",sections:[{local:"huggingface_hub.ModelCard",title:"ModelCard"},{local:"huggingface_hub.ModelCardData",title:"ModelCardData"}],title:"Model Cards"},{local:"dataset-cards",sections:[{local:"huggingface_hub.DatasetCard",title:"DatasetCard"},{local:"huggingface_hub.DatasetCardData",title:"DatasetCardData"}],title:"Dataset Cards"},{local:"utilities",sections:[{local:"huggingface_hub.EvalResult",title:"EvalResult"},{local:"huggingface_hub.repocard_data.model_index_to_eval_results",title:"model_index_to_eval_results"},{local:"huggingface_hub.repocard_data.eval_results_to_model_index",title:"eval_results_to_model_index"},{local:"huggingface_hub.metadata_eval_result",title:"metadata_eval_result"},{local:"huggingface_hub.metadata_update",title:"metadata_update"}],title:"Utilities"}],title:"Repository Cards"};function gi(C){return Ql(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vi extends Jl{constructor(d){super();Wl(this,d,gi,pi,Yl,{})}}export{vi as default,di as metadata};
