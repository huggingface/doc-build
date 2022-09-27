import{S as Qp,i as Yp,s as em,e as a,k as m,w as v,t,M as tm,c as r,d as o,m as g,a as i,x as k,h as n,b as h,G as e,g as x,y,q as j,o as M,B as w,v as nm,L as ue}from"../../chunks/vendor-hf-doc-builder.js";import{T as Jp}from"../../chunks/Tip-hf-doc-builder.js";import{D as ce}from"../../chunks/Docstring-hf-doc-builder.js";import{C as _e}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Cs}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ge}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function om(L){let d,f,u,c,_,s,p,C,q,I,S;return{c(){d=a("p"),f=t("Apart from "),u=a("code"),c=t("inputs"),_=t(`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),s=a("code"),p=t("config.json"),C=t(`) which in turn defaults to the
`),q=a("a"),I=t("PretrainedConfig"),S=t(" of the model."),this.h()},l(A){d=r(A,"P",{});var $=i(d);f=n($,"Apart from "),u=r($,"CODE",{});var we=i(u);c=n(we,"inputs"),we.forEach(o),_=n($,`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),s=r($,"CODE",{});var Le=i(s);p=n(Le,"config.json"),Le.forEach(o),C=n($,`) which in turn defaults to the
`),q=r($,"A",{href:!0});var he=i(q);I=n(he,"PretrainedConfig"),he.forEach(o),S=n($," of the model."),$.forEach(o),this.h()},h(){h(q,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig")},m(A,$){x(A,d,$),e(d,f),e(d,u),e(u,c),e(d,_),e(d,s),e(s,p),e(d,C),e(d,q),e(q,I),e(d,S)},d(A){A&&o(d)}}}function sm(L){let d,f,u,c,_;return c=new _e({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

prompt = "Today I believe we can finally"
input_ids = tokenizer(prompt, return_tensors="pt").input_ids

# generate up to 30 tokens
outputs = model.generate(input_ids, do_sample=False, max_length=30)
tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Today I believe we can finally&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generate up to 30 tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids, do_sample=<span class="hljs-literal">False</span>, max_length=<span class="hljs-number">30</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Today I believe we can finally get to the point where we can make a difference in the lives of the people of the United States of America.\\n&#x27;</span>]`}}),{c(){d=a("p"),f=t("Greedy Decoding:"),u=m(),v(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Greedy Decoding:"),p.forEach(o),u=g(s),k(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:ue,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){M(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),w(c,s)}}}function am(L){let d,f,u,c,_;return c=new _e({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

prompt = "Today I believe we can finally"
input_ids = tokenizer(prompt, return_tensors="pt").input_ids

# sample up to 30 tokens
torch.manual_seed(0)
outputs = model.generate(input_ids, do_sample=True, max_length=30)
tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Today I believe we can finally&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># sample up to 30 tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids, do_sample=<span class="hljs-literal">True</span>, max_length=<span class="hljs-number">30</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Today I believe we can finally get rid of discrimination,&quot; said Rep. Mark Pocan (D-Wis.).\\n\\n&quot;Just look at the&#x27;</span>]`}}),{c(){d=a("p"),f=t("Multinomial Sampling:"),u=m(),v(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Multinomial Sampling:"),p.forEach(o),u=g(s),k(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:ue,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){M(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),w(c,s)}}}function rm(L){let d,f,u,c,_;return c=new _e({props:{code:`from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

tokenizer = AutoTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = AutoModelForSeq2SeqLM.from_pretrained("Helsinki-NLP/opus-mt-en-de")

sentence = "Paris is one of the densest populated areas in Europe."
input_ids = tokenizer(sentence, return_tensors="pt").input_ids

outputs = model.generate(input_ids, num_beams=5)
tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSeq2SeqLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sentence = <span class="hljs-string">&quot;Paris is one of the densest populated areas in Europe.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids, num_beams=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Paris ist eines der dichtesten besiedelten Gebiete Europas.&#x27;</span>]`}}),{c(){d=a("p"),f=t("Beam-search decoding:"),u=m(),v(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Beam-search decoding:"),p.forEach(o),u=g(s),k(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:ue,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){M(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),w(c,s)}}}function im(L){let d,f,u,c,_;return c=new _e({props:{code:`from transformers import (
    AutoTokenizer,
    AutoModelForCausalLM,
    LogitsProcessorList,
    MinLengthLogitsProcessor,
    StoppingCriteriaList,
    MaxLengthCriteria,
)

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

# set pad_token_id to eos_token_id because GPT2 does not have a PAD token
model.config.pad_token_id = model.config.eos_token_id

input_prompt = "It might be possible to"
input_ids = tokenizer(input_prompt, return_tensors="pt").input_ids

# instantiate logits processors
logits_processor = LogitsProcessorList(
    [
        MinLengthLogitsProcessor(10, eos_token_id=model.config.eos_token_id),
    ]
)
stopping_criteria = StoppingCriteriaList([MaxLengthCriteria(max_length=20)])

outputs = model.greedy_search(
    input_ids, logits_processor=logits_processor, stopping_criteria=stopping_criteria
)

tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForCausalLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    StoppingCriteriaList,
<span class="hljs-meta">... </span>    MaxLengthCriteria,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set pad_token_id to eos_token_id because GPT2 does not have a PAD token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>input_prompt = <span class="hljs-string">&quot;It might be possible to&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        MinLengthLogitsProcessor(<span class="hljs-number">10</span>, eos_token_id=model.config.eos_token_id),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>stopping_criteria = StoppingCriteriaList([MaxLengthCriteria(max_length=<span class="hljs-number">20</span>)])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.greedy_search(
<span class="hljs-meta">... </span>    input_ids, logits_processor=logits_processor, stopping_criteria=stopping_criteria
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&quot;It might be possible to get a better understanding of the nature of the problem, but it&#x27;s not&quot;</span>]`}}),{c(){d=a("p"),f=t("Examples:"),u=m(),v(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Examples:"),p.forEach(o),u=g(s),k(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:ue,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){M(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),w(c,s)}}}function lm(L){let d,f,u,c,_;return c=new _e({props:{code:`from transformers import (
    AutoTokenizer,
    AutoModelForCausalLM,
    LogitsProcessorList,
    MinLengthLogitsProcessor,
    TopKLogitsWarper,
    TemperatureLogitsWarper,
    StoppingCriteriaList,
    MaxLengthCriteria,
)
import torch

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

# set pad_token_id to eos_token_id because GPT2 does not have a EOS token
model.config.pad_token_id = model.config.eos_token_id

input_prompt = "Today is a beautiful day, and"
input_ids = tokenizer(input_prompt, return_tensors="pt").input_ids

# instantiate logits processors
logits_processor = LogitsProcessorList(
    [
        MinLengthLogitsProcessor(15, eos_token_id=model.config.eos_token_id),
    ]
)
# instantiate logits processors
logits_warper = LogitsProcessorList(
    [
        TopKLogitsWarper(50),
        TemperatureLogitsWarper(0.7),
    ]
)

stopping_criteria = StoppingCriteriaList([MaxLengthCriteria(max_length=20)])

torch.manual_seed(0)
outputs = model.sample(
    input_ids,
    logits_processor=logits_processor,
    logits_warper=logits_warper,
    stopping_criteria=stopping_criteria,
)

tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForCausalLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    TopKLogitsWarper,
<span class="hljs-meta">... </span>    TemperatureLogitsWarper,
<span class="hljs-meta">... </span>    StoppingCriteriaList,
<span class="hljs-meta">... </span>    MaxLengthCriteria,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set pad_token_id to eos_token_id because GPT2 does not have a EOS token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>input_prompt = <span class="hljs-string">&quot;Today is a beautiful day, and&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        MinLengthLogitsProcessor(<span class="hljs-number">15</span>, eos_token_id=model.config.eos_token_id),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_warper = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        TopKLogitsWarper(<span class="hljs-number">50</span>),
<span class="hljs-meta">... </span>        TemperatureLogitsWarper(<span class="hljs-number">0.7</span>),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>stopping_criteria = StoppingCriteriaList([MaxLengthCriteria(max_length=<span class="hljs-number">20</span>)])

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.sample(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    logits_processor=logits_processor,
<span class="hljs-meta">... </span>    logits_warper=logits_warper,
<span class="hljs-meta">... </span>    stopping_criteria=stopping_criteria,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Today is a beautiful day, and a wonderful day.\\n\\nI was lucky enough to meet the&#x27;</span>]`}}),{c(){d=a("p"),f=t("Examples:"),u=m(),v(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Examples:"),p.forEach(o),u=g(s),k(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:ue,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){M(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),w(c,s)}}}function dm(L){let d,f,u,c,_;return c=new _e({props:{code:`from transformers import (
    AutoTokenizer,
    AutoModelForSeq2SeqLM,
    LogitsProcessorList,
    MinLengthLogitsProcessor,
    BeamSearchScorer,
)
import torch

tokenizer = AutoTokenizer.from_pretrained("t5-base")
model = AutoModelForSeq2SeqLM.from_pretrained("t5-base")

encoder_input_str = "translate English to German: How old are you?"
encoder_input_ids = tokenizer(encoder_input_str, return_tensors="pt").input_ids


# lets run beam search using 3 beams
num_beams = 3
# define decoder start token ids
input_ids = torch.ones((num_beams, 1), device=model.device, dtype=torch.long)
input_ids = input_ids * model.config.decoder_start_token_id

# add encoder_outputs to model keyword arguments
model_kwargs = {
    "encoder_outputs": model.get_encoder()(
        encoder_input_ids.repeat_interleave(num_beams, dim=0), return_dict=True
    )
}

# instantiate beam scorer
beam_scorer = BeamSearchScorer(
    batch_size=1,
    num_beams=num_beams,
    device=model.device,
)

# instantiate logits processors
logits_processor = LogitsProcessorList(
    [
        MinLengthLogitsProcessor(5, eos_token_id=model.config.eos_token_id),
    ]
)

outputs = model.beam_search(input_ids, beam_scorer, logits_processor=logits_processor, **model_kwargs)

tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForSeq2SeqLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    BeamSearchScorer,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_str = <span class="hljs-string">&quot;translate English to German: How old are you?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_ids = tokenizer(encoder_input_str, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># lets run beam search using 3 beams</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_beams = <span class="hljs-number">3</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># define decoder start token ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.ones((num_beams, <span class="hljs-number">1</span>), device=model.device, dtype=torch.long)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_ids * model.config.decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add encoder_outputs to model keyword arguments</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_kwargs = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;encoder_outputs&quot;</span>: model.get_encoder()(
<span class="hljs-meta">... </span>        encoder_input_ids.repeat_interleave(num_beams, dim=<span class="hljs-number">0</span>), return_dict=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>}

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate beam scorer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>beam_scorer = BeamSearchScorer(
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>    num_beams=num_beams,
<span class="hljs-meta">... </span>    device=model.device,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        MinLengthLogitsProcessor(<span class="hljs-number">5</span>, eos_token_id=model.config.eos_token_id),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.beam_search(input_ids, beam_scorer, logits_processor=logits_processor, **model_kwargs)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),{c(){d=a("p"),f=t("Examples:"),u=m(),v(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Examples:"),p.forEach(o),u=g(s),k(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:ue,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){M(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),w(c,s)}}}function cm(L){let d,f,u,c,_;return c=new _e({props:{code:`from transformers import (
    AutoTokenizer,
    AutoModelForSeq2SeqLM,
    LogitsProcessorList,
    MinLengthLogitsProcessor,
    TopKLogitsWarper,
    TemperatureLogitsWarper,
    BeamSearchScorer,
)
import torch

tokenizer = AutoTokenizer.from_pretrained("t5-base")
model = AutoModelForSeq2SeqLM.from_pretrained("t5-base")

encoder_input_str = "translate English to German: How old are you?"
encoder_input_ids = tokenizer(encoder_input_str, return_tensors="pt").input_ids

# lets run beam search using 3 beams
num_beams = 3
# define decoder start token ids
input_ids = torch.ones((num_beams, 1), device=model.device, dtype=torch.long)
input_ids = input_ids * model.config.decoder_start_token_id

# add encoder_outputs to model keyword arguments
model_kwargs = {
    "encoder_outputs": model.get_encoder()(
        encoder_input_ids.repeat_interleave(num_beams, dim=0), return_dict=True
    )
}

# instantiate beam scorer
beam_scorer = BeamSearchScorer(
    batch_size=1,
    max_length=model.config.max_length,
    num_beams=num_beams,
    device=model.device,
)

# instantiate logits processors
logits_processor = LogitsProcessorList(
    [MinLengthLogitsProcessor(5, eos_token_id=model.config.eos_token_id)]
)
# instantiate logits processors
logits_warper = LogitsProcessorList(
    [
        TopKLogitsWarper(50),
        TemperatureLogitsWarper(0.7),
    ]
)

outputs = model.beam_sample(
    input_ids, beam_scorer, logits_processor=logits_processor, logits_warper=logits_warper, **model_kwargs
)

tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForSeq2SeqLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    TopKLogitsWarper,
<span class="hljs-meta">... </span>    TemperatureLogitsWarper,
<span class="hljs-meta">... </span>    BeamSearchScorer,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_str = <span class="hljs-string">&quot;translate English to German: How old are you?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_ids = tokenizer(encoder_input_str, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># lets run beam search using 3 beams</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_beams = <span class="hljs-number">3</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># define decoder start token ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.ones((num_beams, <span class="hljs-number">1</span>), device=model.device, dtype=torch.long)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_ids * model.config.decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add encoder_outputs to model keyword arguments</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_kwargs = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;encoder_outputs&quot;</span>: model.get_encoder()(
<span class="hljs-meta">... </span>        encoder_input_ids.repeat_interleave(num_beams, dim=<span class="hljs-number">0</span>), return_dict=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>}

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate beam scorer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>beam_scorer = BeamSearchScorer(
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>    max_length=model.config.max_length,
<span class="hljs-meta">... </span>    num_beams=num_beams,
<span class="hljs-meta">... </span>    device=model.device,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [MinLengthLogitsProcessor(<span class="hljs-number">5</span>, eos_token_id=model.config.eos_token_id)]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_warper = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        TopKLogitsWarper(<span class="hljs-number">50</span>),
<span class="hljs-meta">... </span>        TemperatureLogitsWarper(<span class="hljs-number">0.7</span>),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.beam_sample(
<span class="hljs-meta">... </span>    input_ids, beam_scorer, logits_processor=logits_processor, logits_warper=logits_warper, **model_kwargs
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),{c(){d=a("p"),f=t("Examples:"),u=m(),v(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Examples:"),p.forEach(o),u=g(s),k(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:ue,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){M(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),w(c,s)}}}function pm(L){let d,f,u,c,_;return c=new _e({props:{code:`from transformers import (
    AutoTokenizer,
    AutoModelForSeq2SeqLM,
    LogitsProcessorList,
    MinLengthLogitsProcessor,
    HammingDiversityLogitsProcessor,
    BeamSearchScorer,
)
import torch

tokenizer = AutoTokenizer.from_pretrained("t5-base")
model = AutoModelForSeq2SeqLM.from_pretrained("t5-base")

encoder_input_str = "translate English to German: How old are you?"
encoder_input_ids = tokenizer(encoder_input_str, return_tensors="pt").input_ids


# lets run diverse beam search using 6 beams
num_beams = 6
# define decoder start token ids
input_ids = torch.ones((num_beams, 1), device=model.device, dtype=torch.long)
input_ids = input_ids * model.config.decoder_start_token_id

# add encoder_outputs to model keyword arguments
model_kwargs = {
    "encoder_outputs": model.get_encoder()(
        encoder_input_ids.repeat_interleave(num_beams, dim=0), return_dict=True
    )
}

# instantiate beam scorer
beam_scorer = BeamSearchScorer(
    batch_size=1,
    max_length=model.config.max_length,
    num_beams=num_beams,
    device=model.device,
    num_beam_groups=3,
)

# instantiate logits processors
logits_processor = LogitsProcessorList(
    [
        HammingDiversityLogitsProcessor(5.5, num_beams=6, num_beam_groups=3),
        MinLengthLogitsProcessor(5, eos_token_id=model.config.eos_token_id),
    ]
)

outputs = model.group_beam_search(
    input_ids, beam_scorer, logits_processor=logits_processor, **model_kwargs
)

tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForSeq2SeqLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    HammingDiversityLogitsProcessor,
<span class="hljs-meta">... </span>    BeamSearchScorer,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_str = <span class="hljs-string">&quot;translate English to German: How old are you?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_ids = tokenizer(encoder_input_str, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># lets run diverse beam search using 6 beams</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_beams = <span class="hljs-number">6</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># define decoder start token ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.ones((num_beams, <span class="hljs-number">1</span>), device=model.device, dtype=torch.long)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_ids * model.config.decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add encoder_outputs to model keyword arguments</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_kwargs = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;encoder_outputs&quot;</span>: model.get_encoder()(
<span class="hljs-meta">... </span>        encoder_input_ids.repeat_interleave(num_beams, dim=<span class="hljs-number">0</span>), return_dict=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>}

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate beam scorer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>beam_scorer = BeamSearchScorer(
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>    max_length=model.config.max_length,
<span class="hljs-meta">... </span>    num_beams=num_beams,
<span class="hljs-meta">... </span>    device=model.device,
<span class="hljs-meta">... </span>    num_beam_groups=<span class="hljs-number">3</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        HammingDiversityLogitsProcessor(<span class="hljs-number">5.5</span>, num_beams=<span class="hljs-number">6</span>, num_beam_groups=<span class="hljs-number">3</span>),
<span class="hljs-meta">... </span>        MinLengthLogitsProcessor(<span class="hljs-number">5</span>, eos_token_id=model.config.eos_token_id),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.group_beam_search(
<span class="hljs-meta">... </span>    input_ids, beam_scorer, logits_processor=logits_processor, **model_kwargs
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),{c(){d=a("p"),f=t("Examples:"),u=m(),v(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Examples:"),p.forEach(o),u=g(s),k(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:ue,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){M(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),w(c,s)}}}function mm(L){let d,f,u,c,_;return c=new _e({props:{code:`from transformers import (
    AutoTokenizer,
    AutoModelForSeq2SeqLM,
    LogitsProcessorList,
    MinLengthLogitsProcessor,
    ConstrainedBeamSearchScorer,
    PhrasalConstraint,
)
import torch

tokenizer = AutoTokenizer.from_pretrained("t5-base")
model = AutoModelForSeq2SeqLM.from_pretrained("t5-base")

encoder_input_str = "translate English to German: How old are you?"
encoder_input_ids = tokenizer(encoder_input_str, return_tensors="pt").input_ids


# lets run beam search using 3 beams
num_beams = 3
# define decoder start token ids
input_ids = torch.ones((num_beams, 1), device=model.device, dtype=torch.long)
input_ids = input_ids * model.config.decoder_start_token_id

# add encoder_outputs to model keyword arguments
model_kwargs = {
    "encoder_outputs": model.get_encoder()(
        encoder_input_ids.repeat_interleave(num_beams, dim=0), return_dict=True
    )
}

constraint_str = "Sie"
constraint_token_ids = tokenizer.encode(constraint_str)[:-1]  # slice to remove eos token
constraints = [PhrasalConstraint(token_ids=constraint_token_ids)]


# instantiate beam scorer
beam_scorer = ConstrainedBeamSearchScorer(
    batch_size=1, num_beams=num_beams, device=model.device, constraints=constraints
)

# instantiate logits processors
logits_processor = LogitsProcessorList(
    [
        MinLengthLogitsProcessor(5, eos_token_id=model.config.eos_token_id),
    ]
)

outputs = model.constrained_beam_search(
    input_ids, beam_scorer, constraints=constraints, logits_processor=logits_processor, **model_kwargs
)

tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForSeq2SeqLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    ConstrainedBeamSearchScorer,
<span class="hljs-meta">... </span>    PhrasalConstraint,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_str = <span class="hljs-string">&quot;translate English to German: How old are you?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_ids = tokenizer(encoder_input_str, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># lets run beam search using 3 beams</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_beams = <span class="hljs-number">3</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># define decoder start token ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.ones((num_beams, <span class="hljs-number">1</span>), device=model.device, dtype=torch.long)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_ids * model.config.decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add encoder_outputs to model keyword arguments</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_kwargs = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;encoder_outputs&quot;</span>: model.get_encoder()(
<span class="hljs-meta">... </span>        encoder_input_ids.repeat_interleave(num_beams, dim=<span class="hljs-number">0</span>), return_dict=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>}

<span class="hljs-meta">&gt;&gt;&gt; </span>constraint_str = <span class="hljs-string">&quot;Sie&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>constraint_token_ids = tokenizer.encode(constraint_str)[:-<span class="hljs-number">1</span>]  <span class="hljs-comment"># slice to remove eos token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>constraints = [PhrasalConstraint(token_ids=constraint_token_ids)]


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate beam scorer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>beam_scorer = ConstrainedBeamSearchScorer(
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">1</span>, num_beams=num_beams, device=model.device, constraints=constraints
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        MinLengthLogitsProcessor(<span class="hljs-number">5</span>, eos_token_id=model.config.eos_token_id),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.constrained_beam_search(
<span class="hljs-meta">... </span>    input_ids, beam_scorer, constraints=constraints, logits_processor=logits_processor, **model_kwargs
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Wie alt sind Sie?&#x27;</span>]`}}),{c(){d=a("p"),f=t("Examples:"),u=m(),v(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Examples:"),p.forEach(o),u=g(s),k(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:ue,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){M(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),w(c,s)}}}function gm(L){let d,f,u,c,_;return c=new _e({props:{code:`tokenizer = AutoTokenizer.from_pretrained("distilgpt2")  # Initialize tokenizer
model = TFAutoModelWithLMHead.from_pretrained(
    "distilgpt2"
)  # Download model and configuration from huggingface.co and cache.
outputs = model.generate(max_length=40)  # do greedy decoding
print(f"Generated: {tokenizer.decode(outputs[0], skip_special_tokens=True)}")

tokenizer = AutoTokenizer.from_pretrained("openai-gpt")  # Initialize tokenizer
model = TFAutoModelWithLMHead.from_pretrained(
    "openai-gpt"
)  # Download model and configuration from huggingface.co and cache.
input_context = "The dog"
input_ids = tokenizer.encode(input_context, return_tensors="tf")  # encode input context
outputs = model.generate(
    input_ids=input_ids, num_beams=5, num_return_sequences=3, temperature=1.5
)  # generate 3 independent sequences using beam search decoding (5 beams) with sampling from initial context 'The dog'
for i in range(3):  #  3 output sequences were generated
    print(f"Generated {i}: {tokenizer.decode(outputs[i], skip_special_tokens=True)}")

tokenizer = AutoTokenizer.from_pretrained("distilgpt2")  # Initialize tokenizer
model = TFAutoModelWithLMHead.from_pretrained(
    "distilgpt2"
)  # Download model and configuration from huggingface.co and cache.
input_context = "The dog"
input_ids = tokenizer.encode(input_context, return_tensors="tf")  # encode input context
outputs = model.generate(
    input_ids=input_ids, max_length=40, temperature=0.7, num_return_sequences=3, do_sample=True
)  # generate 3 candidates using sampling
for i in range(3):  #  3 output sequences were generated
    print(f"Generated {i}: {tokenizer.decode(outputs[i], skip_special_tokens=True)}")

tokenizer = AutoTokenizer.from_pretrained("ctrl")  # Initialize tokenizer
model = TFAutoModelWithLMHead.from_pretrained(
    "ctrl"
)  # Download model and configuration from huggingface.co and cache.
input_context = "Legal My neighbor is"  # "Legal" is one of the control codes for ctrl
input_ids = tokenizer.encode(input_context, return_tensors="tf")  # encode input context
outputs = model.generate(
    input_ids=input_ids, max_length=50, temperature=0.7, repetition_penalty=1.2
)  # generate sequences
print(f"Generated: {tokenizer.decode(outputs[0], skip_special_tokens=True)}")

tokenizer = AutoTokenizer.from_pretrained("gpt2")  # Initialize tokenizer
model = TFAutoModelWithLMHead.from_pretrained(
    "gpt2"
)  # Download model and configuration from huggingface.co and cache.
input_context = "My cute dog"
bad_words_ids = [
    tokenizer.encode(bad_word, add_prefix_space=True) for bad_word in ["idiot", "stupid", "shut up"]
]
input_ids = tokenizer.encode(input_context, return_tensors="tf")  # encode input context
outputs = model.generate(
    input_ids=input_ids, max_length=100, do_sample=True, bad_words_ids=bad_words_ids
)  # generate sequences without allowing bad_words to be generated`,highlighted:`tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)  <span class="hljs-comment"># Initialize tokenizer</span>
model = TFAutoModelWithLMHead.from_pretrained(
    <span class="hljs-string">&quot;distilgpt2&quot;</span>
)  <span class="hljs-comment"># Download model and configuration from huggingface.co and cache.</span>
outputs = model.generate(max_length=<span class="hljs-number">40</span>)  <span class="hljs-comment"># do greedy decoding</span>
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Generated: <span class="hljs-subst">{tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>)}</span>&quot;</span>)

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)  <span class="hljs-comment"># Initialize tokenizer</span>
model = TFAutoModelWithLMHead.from_pretrained(
    <span class="hljs-string">&quot;openai-gpt&quot;</span>
)  <span class="hljs-comment"># Download model and configuration from huggingface.co and cache.</span>
input_context = <span class="hljs-string">&quot;The dog&quot;</span>
input_ids = tokenizer.encode(input_context, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)  <span class="hljs-comment"># encode input context</span>
outputs = model.generate(
    input_ids=input_ids, num_beams=<span class="hljs-number">5</span>, num_return_sequences=<span class="hljs-number">3</span>, temperature=<span class="hljs-number">1.5</span>
)  <span class="hljs-comment"># generate 3 independent sequences using beam search decoding (5 beams) with sampling from initial context &#x27;The dog&#x27;</span>
<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">3</span>):  <span class="hljs-comment">#  3 output sequences were generated</span>
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Generated <span class="hljs-subst">{i}</span>: <span class="hljs-subst">{tokenizer.decode(outputs[i], skip_special_tokens=<span class="hljs-literal">True</span>)}</span>&quot;</span>)

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)  <span class="hljs-comment"># Initialize tokenizer</span>
model = TFAutoModelWithLMHead.from_pretrained(
    <span class="hljs-string">&quot;distilgpt2&quot;</span>
)  <span class="hljs-comment"># Download model and configuration from huggingface.co and cache.</span>
input_context = <span class="hljs-string">&quot;The dog&quot;</span>
input_ids = tokenizer.encode(input_context, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)  <span class="hljs-comment"># encode input context</span>
outputs = model.generate(
    input_ids=input_ids, max_length=<span class="hljs-number">40</span>, temperature=<span class="hljs-number">0.7</span>, num_return_sequences=<span class="hljs-number">3</span>, do_sample=<span class="hljs-literal">True</span>
)  <span class="hljs-comment"># generate 3 candidates using sampling</span>
<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">3</span>):  <span class="hljs-comment">#  3 output sequences were generated</span>
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Generated <span class="hljs-subst">{i}</span>: <span class="hljs-subst">{tokenizer.decode(outputs[i], skip_special_tokens=<span class="hljs-literal">True</span>)}</span>&quot;</span>)

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)  <span class="hljs-comment"># Initialize tokenizer</span>
model = TFAutoModelWithLMHead.from_pretrained(
    <span class="hljs-string">&quot;ctrl&quot;</span>
)  <span class="hljs-comment"># Download model and configuration from huggingface.co and cache.</span>
input_context = <span class="hljs-string">&quot;Legal My neighbor is&quot;</span>  <span class="hljs-comment"># &quot;Legal&quot; is one of the control codes for ctrl</span>
input_ids = tokenizer.encode(input_context, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)  <span class="hljs-comment"># encode input context</span>
outputs = model.generate(
    input_ids=input_ids, max_length=<span class="hljs-number">50</span>, temperature=<span class="hljs-number">0.7</span>, repetition_penalty=<span class="hljs-number">1.2</span>
)  <span class="hljs-comment"># generate sequences</span>
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Generated: <span class="hljs-subst">{tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>)}</span>&quot;</span>)

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)  <span class="hljs-comment"># Initialize tokenizer</span>
model = TFAutoModelWithLMHead.from_pretrained(
    <span class="hljs-string">&quot;gpt2&quot;</span>
)  <span class="hljs-comment"># Download model and configuration from huggingface.co and cache.</span>
input_context = <span class="hljs-string">&quot;My cute dog&quot;</span>
bad_words_ids = [
    tokenizer.encode(bad_word, add_prefix_space=<span class="hljs-literal">True</span>) <span class="hljs-keyword">for</span> bad_word <span class="hljs-keyword">in</span> [<span class="hljs-string">&quot;idiot&quot;</span>, <span class="hljs-string">&quot;stupid&quot;</span>, <span class="hljs-string">&quot;shut up&quot;</span>]
]
input_ids = tokenizer.encode(input_context, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)  <span class="hljs-comment"># encode input context</span>
outputs = model.generate(
    input_ids=input_ids, max_length=<span class="hljs-number">100</span>, do_sample=<span class="hljs-literal">True</span>, bad_words_ids=bad_words_ids
)  <span class="hljs-comment"># generate sequences without allowing bad_words to be generated</span>`}}),{c(){d=a("p"),f=t("Examples:"),u=m(),v(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Examples:"),p.forEach(o),u=g(s),k(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:ue,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){M(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),w(c,s)}}}function um(L){let d,f,u,c,_,s,p,C,q,I,S;return{c(){d=a("p"),f=t("Apart from "),u=a("code"),c=t("inputs"),_=t(`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),s=a("code"),p=t("config.json"),C=t(`) which in turn defaults to the
`),q=a("a"),I=t("PretrainedConfig"),S=t(" of the model."),this.h()},l(A){d=r(A,"P",{});var $=i(d);f=n($,"Apart from "),u=r($,"CODE",{});var we=i(u);c=n(we,"inputs"),we.forEach(o),_=n($,`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),s=r($,"CODE",{});var Le=i(s);p=n(Le,"config.json"),Le.forEach(o),C=n($,`) which in turn defaults to the
`),q=r($,"A",{href:!0});var he=i(q);I=n(he,"PretrainedConfig"),he.forEach(o),S=n($," of the model."),$.forEach(o),this.h()},h(){h(q,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig")},m(A,$){x(A,d,$),e(d,f),e(d,u),e(u,c),e(d,_),e(d,s),e(s,p),e(d,C),e(d,q),e(q,I),e(d,S)},d(A){A&&o(d)}}}function _m(L){let d,f,u,c,_;return c=new _e({props:{code:`from transformers import AutoTokenizer, FlaxAutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("distilgpt2")
model = FlaxAutoModelForCausalLM.from_pretrained("distilgpt2")
input_context = "The dog"
# encode input context
input_ids = tokenizer(input_context, return_tensors="np").input_ids
# generate candidates using sampling
outputs = model.generate(input_ids=input_ids, max_length=20, top_k=30, do_sample=True)
tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxAutoModelForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_context = <span class="hljs-string">&quot;The dog&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># encode input context</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_context, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generate candidates using sampling</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids=input_ids, max_length=<span class="hljs-number">20</span>, top_k=<span class="hljs-number">30</span>, do_sample=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){d=a("p"),f=t("Examples:"),u=m(),v(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Examples:"),p.forEach(o),u=g(s),k(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:ue,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){M(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),w(c,s)}}}function hm(L){let d,f,u,c,_,s,p,C,q,I,S,A,$,we,Le,he,fe,$e,Is,tn,Bs,Ws,nn,Hs,Rs,Us,Te,Vs,on,Ks,Zs,sn,Xs,Js,Qs,Ee,Ys,an,ea,ta,rn,na,oa,_s,Oe,nt,An,xt,sa,Pn,aa,hs,T,vt,ra,kt,ia,ln,la,da,ca,yt,pa,dn,ma,ga,ua,P,B,Dn,_a,ha,cn,fa,ba,Nn,xa,va,Cn,ka,ya,ja,W,In,Ma,wa,pn,La,$a,Bn,Ta,Ea,Wn,Oa,Ga,qa,H,Hn,Sa,Fa,mn,za,Aa,Rn,Pa,Da,Un,Na,Ca,Ia,R,Vn,Ba,Wa,gn,Ha,Ra,Kn,Ua,Va,Zn,Ka,Za,Xa,U,Xn,Ja,Qa,un,Ya,er,Jn,tr,nr,Qn,or,sr,ar,V,Yn,rr,ir,_n,lr,dr,eo,cr,pr,to,mr,gr,ur,E,jt,_r,no,hr,fr,D,K,oo,br,xr,hn,vr,kr,so,yr,jr,ao,Mr,wr,Lr,Z,ro,$r,Tr,fn,Er,Or,io,Gr,qr,lo,Sr,Fr,zr,X,co,Ar,Pr,bn,Dr,Nr,po,Cr,Ir,mo,Br,Wr,Hr,J,go,Rr,Ur,xn,Vr,Kr,uo,Zr,Xr,_o,Jr,Qr,Yr,Q,ho,ei,ti,vn,ni,oi,fo,si,ai,bo,ri,ii,li,Y,xo,di,ci,kn,pi,mi,vo,gi,ui,ko,_i,hi,fi,ot,bi,Mt,xi,wt,vi,ki,yi,yo,ji,Mi,st,wi,at,Li,rt,$i,be,Lt,Ti,$t,Ei,jo,Oi,Gi,qi,it,Si,xe,Tt,Fi,Et,zi,Mo,Ai,Pi,Di,lt,Ni,ve,Ot,Ci,Gt,Ii,wo,Bi,Wi,Hi,dt,Ri,ke,qt,Ui,St,Vi,Lo,Ki,Zi,Xi,ct,Ji,ye,Ft,Qi,zt,Yi,$o,el,tl,nl,pt,ol,je,At,sl,Pt,al,To,rl,il,ll,mt,fs,Ge,gt,Eo,Dt,dl,Oo,cl,bs,pe,Nt,pl,Ct,ml,yn,gl,ul,_l,F,It,hl,Go,fl,bl,Bt,xl,Wt,vl,kl,yl,me,jl,qo,Ml,wl,So,Ll,$l,jn,Tl,El,Ol,Ht,Gl,Rt,ql,Sl,Fl,ut,xs,qe,_t,Fo,Ut,zl,zo,Al,vs,N,Vt,Pl,Kt,Dl,Mn,Nl,Cl,Il,Zt,Bl,wn,Wl,Hl,Rl,Se,ee,Ao,Ul,Vl,Po,Kl,Zl,Do,Xl,Jl,No,Ql,Yl,ed,te,Co,td,nd,Io,od,sd,Bo,ad,rd,Wo,id,ld,dd,ne,Ho,cd,pd,Ro,md,gd,Uo,ud,_d,Vo,hd,fd,bd,z,Xt,xd,Ko,vd,kd,Fe,oe,Zo,yd,jd,Xo,Md,wd,Jo,Ld,$d,Qo,Td,Ed,Od,se,Yo,Gd,qd,es,Sd,Fd,ts,zd,Ad,ns,Pd,Dd,Nd,ae,os,Cd,Id,ss,Bd,Wd,as,Hd,Rd,rs,Ud,Vd,Kd,ht,Zd,Jt,Xd,Qt,Jd,Qd,Yd,ft,ks;return s=new Cs({}),xt=new Cs({}),vt=new ce({props:{name:"class transformers.generation_utils.GenerationMixin",anchor:"transformers.generation_utils.GenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/generation_utils.py#L379"}}),jt=new ce({props:{name:"generate",anchor:"transformers.generation_utils.GenerationMixin.generate",parameters:[{name:"inputs",val:": typing.Optional[torch.Tensor] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"typical_p",val:": typing.Optional[float] = None"},{name:"repetition_penalty",val:": typing.Optional[float] = None"},{name:"bad_words_ids",val:": typing.Optional[typing.Iterable[int]] = None"},{name:"force_words_ids",val:": typing.Union[typing.Iterable[int], typing.Iterable[typing.Iterable[int]], NoneType] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"encoder_no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"num_return_sequences",val:": typing.Optional[int] = None"},{name:"max_time",val:": typing.Optional[float] = None"},{name:"max_new_tokens",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"num_beam_groups",val:": typing.Optional[int] = None"},{name:"diversity_penalty",val:": typing.Optional[float] = None"},{name:"prefix_allowed_tokens_fn",val:": typing.Union[typing.Callable[[int, torch.Tensor], typing.List[int]], NoneType] = None"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = []"},{name:"renormalize_logits",val:": typing.Optional[bool] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = []"},{name:"constraints",val:": typing.Optional[typing.List[transformers.generation_beam_constraints.Constraint]] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"remove_invalid_values",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"exponential_decay_length_penalty",val:": typing.Union[typing.Tuple[typing.Union[int, float]], NoneType] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.generate.inputs",description:`<strong>inputs</strong> (<code>torch.Tensor</code> of varying shape depending on the modality, <em>optional</em>) &#x2014;
The sequence used as a prompt for the generation or as model inputs to the encoder. If <code>None</code> the
method initializes it with <code>bos_token_id</code> and a batch size of 1. For decoder-only models <code>inputs</code>
should of in the format of <code>input_ids</code>. For encoder-decoder models <em>inputs</em> can represent any of
<code>input_ids</code>, <code>input_values</code>, <code>input_features</code>, or <code>pixel_values</code>.`,name:"inputs"},{anchor:"transformers.generation_utils.GenerationMixin.generate.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.max_length</code>) &#x2014;
The maximum length the generated tokens can have. Corresponds to the length of the input prompt +
<code>max_new_tokens</code>. In general, prefer the use of <code>max_new_tokens</code>, which ignores the number of tokens in
the prompt.`,name:"max_length"},{anchor:"transformers.generation_utils.GenerationMixin.generate.max_new_tokens",description:`<strong>max_new_tokens</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum numbers of tokens to generate, ignoring the number of tokens in the prompt.`,name:"max_new_tokens"},{anchor:"transformers.generation_utils.GenerationMixin.generate.min_length",description:`<strong>min_length</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.min_length</code> or 10 if the config does not set any value) &#x2014;
The minimum length of the sequence to be generated.`,name:"min_length"},{anchor:"transformers.generation_utils.GenerationMixin.generate.do_sample",description:`<strong>do_sample</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>model.config.do_sample</code> or <code>False</code> if the config does not set any value) &#x2014;
Whether or not to use sampling ; use greedy decoding otherwise.`,name:"do_sample"},{anchor:"transformers.generation_utils.GenerationMixin.generate.early_stopping",description:`<strong>early_stopping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to stop the beam search when at least <code>num_beams</code> sentences are finished per batch or not.`,name:"early_stopping"},{anchor:"transformers.generation_utils.GenerationMixin.generate.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.num_beams</code> or 1 if the config does not set any value) &#x2014;
Number of beams for beam search. 1 means no beam search.`,name:"num_beams"},{anchor:"transformers.generation_utils.GenerationMixin.generate.temperature",description:`<strong>temperature</strong> (<code>float</code>, <em>optional</em>, defaults to <code>model.config.temperature</code> or 1.0 if the config does not set any value) &#x2014;
The value used to module the next token probabilities.`,name:"temperature"},{anchor:"transformers.generation_utils.GenerationMixin.generate.top_k",description:`<strong>top_k</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.top_k</code> or 50 if the config does not set any value) &#x2014;
The number of highest probability vocabulary tokens to keep for top-k-filtering.`,name:"top_k"},{anchor:"transformers.generation_utils.GenerationMixin.generate.top_p",description:`<strong>top_p</strong> (<code>float</code>, <em>optional</em>, defaults to <code>model.config.top_p</code> or 1.0 if the config does not set any value) &#x2014;
If set to float &lt; 1, only the most probable tokens with probabilities that add up to <code>top_p</code> or higher
are kept for generation.`,name:"top_p"},{anchor:"transformers.generation_utils.GenerationMixin.generate.typical_p",description:`<strong>typical_p</strong> (<code>float</code>, <em>optional</em>, defaults to <code>model.config.typical_p</code> or 1.0 if the config does not set any value) &#x2014;
The amount of probability mass from the original distribution to be considered in typical decoding. If
set to 1.0 it takes no effect. See <a href="https://arxiv.org/pdf/2202.00666.pdf" rel="nofollow">this paper</a> for more details.`,name:"typical_p"},{anchor:"transformers.generation_utils.GenerationMixin.generate.repetition_penalty",description:`<strong>repetition_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to <code>model.config.repetition_penalty</code> or 1.0 if the config does not set any value) &#x2014;
The parameter for repetition penalty. 1.0 means no penalty. See <a href="https://arxiv.org/pdf/1909.05858.pdf" rel="nofollow">this
paper</a> for more details.`,name:"repetition_penalty"},{anchor:"transformers.generation_utils.GenerationMixin.generate.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.pad_token_id</code>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.bos_token_id</code>) &#x2014;
The id of the <em>beginning-of-sequence</em> token.`,name:"bos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.eos_token_id</code>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.length_penalty",description:`<strong>length_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to <code>model.config.length_penalty</code> or 1.0 if the config does not set any value) &#x2014;
Exponential penalty to the length. 1.0 means that the beam score is penalized by the sequence length.
0.0 means no penalty. Set to values &lt; 0.0 in order to encourage the model to generate longer
sequences, to a value &gt; 0.0 in order to encourage the model to produce shorter sequences.`,name:"length_penalty"},{anchor:"transformers.generation_utils.GenerationMixin.generate.no_repeat_ngram_size",description:`<strong>no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.no_repeat_ngram_size</code> or 0 if the config does not set any value) &#x2014;
If set to int &gt; 0, all ngrams of that size can only occur once.`,name:"no_repeat_ngram_size"},{anchor:"transformers.generation_utils.GenerationMixin.generate.encoder_no_repeat_ngram_size",description:`<strong>encoder_no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.encoder_no_repeat_ngram_size</code> or 0 if the config does not set any value) &#x2014;
If set to int &gt; 0, all ngrams of that size that occur in the <code>encoder_input_ids</code> cannot occur in the
<code>decoder_input_ids</code>.`,name:"encoder_no_repeat_ngram_size"},{anchor:"transformers.generation_utils.GenerationMixin.generate.bad_words_ids(List[List[int]],",description:`<strong>bad_words_ids(<code>List[List[int]]</code>,</strong> <em>optional</em>, defaults to <code>model.config.bad_words_ids</code>) &#x2014;
List of token ids that are not allowed to be generated. In order to get the token ids of the words that
should not appear in the generated text, use <code>tokenizer(bad_words, add_prefix_space=True, add_special_tokens=False).input_ids</code>.`,name:"bad_words_ids(List[List[int]],"},{anchor:"transformers.generation_utils.GenerationMixin.generate.force_words_ids(List[List[int]]",description:`<strong>force_words_ids(<code>List[List[int]]</code></strong> or <code>List[List[List[int]]]</code>, <em>optional</em>) &#x2014;
List of token ids that must be generated. If given a <code>List[List[int]]</code>, this is treated as a simple
list of words that must be included, the opposite to <code>bad_words_ids</code>. If given <code>List[List[List[int]]]</code>,
this triggers a <a href="https://github.com/huggingface/transformers/issues/14081" rel="nofollow">disjunctive constraint</a>,
where one can allow different forms of each word.`,name:"force_words_ids(List[List[int]]"},{anchor:"transformers.generation_utils.GenerationMixin.generate.num_return_sequences(int,",description:`<strong>num_return_sequences(<code>int</code>,</strong> <em>optional</em>, defaults to <code>model.config.num_return_sequences</code> or 1 if the config does not set any value) &#x2014;
The number of independently computed returned sequences for each element in the batch.`,name:"num_return_sequences(int,"},{anchor:"transformers.generation_utils.GenerationMixin.generate.max_time(float,",description:`<strong>max_time(<code>float</code>,</strong> <em>optional</em>) &#x2014;
The maximum amount of time you allow the computation to run for in seconds. generation will still
finish the current pass after allocated time has been passed.`,name:"max_time(float,"},{anchor:"transformers.generation_utils.GenerationMixin.generate.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values are in <code>[0, 1]</code>, 1 for tokens
that are not masked, and 0 for masked tokens. If not provided, will default to a tensor the same shape
as <code>input_ids</code> that masks the pad token. <a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.generation_utils.GenerationMixin.generate.decoder_start_token_id",description:`<strong>decoder_start_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If an encoder-decoder model starts decoding with a different token than <em>bos</em>, the id of that token.
use_cache &#x2014; (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>):
Whether or not the model should use the past last key/values attentions (if applicable to the model) to
speed up decoding.`,name:"decoder_start_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.num_beam_groups",description:`<strong>num_beam_groups</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.num_beam_groups</code> or 1 if the config does not set any value) &#x2014;
Number of groups to divide <code>num_beams</code> into in order to ensure diversity among different groups of
beams. <a href="https://arxiv.org/pdf/1610.02424.pdf" rel="nofollow">this paper</a> for more details.`,name:"num_beam_groups"},{anchor:"transformers.generation_utils.GenerationMixin.generate.diversity_penalty",description:`<strong>diversity_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to <code>model.config.diversity_penalty</code> or 0.0 if the config does not set any value) &#x2014;
This value is subtracted from a beam&#x2019;s score if it generates a token same as any beam from other group
at a particular time. Note that <code>diversity_penalty</code> is only effective if <code>group beam search</code> is
enabled.`,name:"diversity_penalty"},{anchor:"transformers.generation_utils.GenerationMixin.generate.prefix_allowed_tokens_fn",description:`<strong>prefix_allowed_tokens_fn</strong> (<code>Callable[[int, torch.Tensor], List[int]]</code>, <em>optional</em>) &#x2014;
If provided, this function constraints the beam search to allowed tokens only at each step. If not
provided no constraint is applied. This function takes 2 arguments: the batch ID <code>batch_id</code> and
<code>input_ids</code>. It has to return a list with the allowed tokens for the next generation step conditioned
on the batch ID <code>batch_id</code> and the previously generated tokens <code>inputs_ids</code>. This argument is useful
for constrained generation conditioned on the prefix, as described in <a href="https://arxiv.org/abs/2010.00904" rel="nofollow">Autoregressive Entity
Retrieval</a>.`,name:"prefix_allowed_tokens_fn"},{anchor:"transformers.generation_utils.GenerationMixin.generate.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
Custom logits processors that complement the default logits processors built from arguments and a
model&#x2019;s config. If a logit processor is passed that is already created with the arguments or a model&#x2019;s
config an error is thrown. This feature is intended for advanced users.
renormalize_logits &#x2014; (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>):
Whether to renormalize the logits after applying all the logits processors or warpers (including the
custom ones). It&#x2019;s highly recommended to set this flag to <code>True</code> as the search algorithms suppose the
score logits are normalized but some logit processors or warpers break the normalization.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.generate.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
Custom stopping criteria that complement the default stopping criteria built from arguments and a
model&#x2019;s config. If a stopping criteria is passed that is already created with the arguments or a
model&#x2019;s config an error is thrown. This feature is intended for advanced users.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.generate.constraints",description:`<strong>constraints</strong> (<code>List[Constraint]</code>, <em>optional</em>) &#x2014;
Custom constraints that can be added to the generation to ensure that the output will contain the use
of certain tokens as defined by <code>Constraint</code> objects, in the most sensible way possible.`,name:"constraints"},{anchor:"transformers.generation_utils.GenerationMixin.generate.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>model.config.output_attentions</code> or <code>False</code> if the config does not set any value) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_utils.GenerationMixin.generate.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>model.config.output_hidden_states</code> or <code>False</code> if the config does not set any value) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_utils.GenerationMixin.generate.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>model.config.output_scores</code> or <code>False</code> if the config does not set any value) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_utils.GenerationMixin.generate.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>model.config.return_dict_in_generate</code> or <code>False</code> if the config does not set any value) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.generate.forced_bos_token_id",description:`<strong>forced_bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.forced_bos_token_id</code>) &#x2014;
The id of the token to force as the first generated token after the <code>decoder_start_token_id</code>. Useful
for multilingual models like <a href="../model_doc/mbart">mBART</a> where the first generated token needs to be
the target language token.`,name:"forced_bos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.forced_eos_token_id</code>) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached.`,name:"forced_eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.remove_invalid_values",description:`<strong>remove_invalid_values</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>model.config.remove_invalid_values</code>) &#x2014;
Whether to remove possible <em>nan</em> and <em>inf</em> outputs of the model to prevent the generation method to
crash. Note that using <code>remove_invalid_values</code> can slow down generation.`,name:"remove_invalid_values"},{anchor:"transformers.generation_utils.GenerationMixin.generate.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)`,name:"synced_gpus"},{anchor:"transformers.generation_utils.GenerationMixin.generate.exponential_decay_length_penalty",description:`<strong>exponential_decay_length_penalty</strong> (<code>tuple(int, float)</code>, <em>optional</em>, defaults to <code>model.config.exponential_decay_length_penalty</code>) &#x2014;
This Tuple adds an exponentially increasing length penalty, after a certain amount of tokens have been
generated. The tuple shall consist of: <code>(start_index, decay_factor)</code> where <code>start_index</code> indicates
where penalty starts and <code>decay_factor</code> represents the factor of exponential decay</p>
<p>model<em>kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If the model
is an encoder-decoder model, encoder specific kwargs should not be prefixed and decoder specific kwargs
should be prefixed with *decoder</em>*.`,name:"exponential_decay_length_penalty"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/generation_utils.py#L866",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> (if <code>return_dict_in_generate=True</code>
or when <code>config.return_dict_in_generate=True</code>) or a <code>torch.FloatTensor</code>.</p>
<p>If the model is <em>not</em> an encoder-decoder model (<code>model.config.is_encoder_decoder=False</code>), the possible
<a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.GreedySearchDecoderOnlyOutput"
>GreedySearchDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.SampleDecoderOnlyOutput"
>SampleDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSampleDecoderOnlyOutput"
>BeamSampleDecoderOnlyOutput</a></li>
</ul>
<p>If the model is an encoder-decoder model (<code>model.config.is_encoder_decoder=True</code>), the possible
<a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.GreedySearchEncoderDecoderOutput"
>GreedySearchEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.SampleEncoderDecoderOutput"
>SampleEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSampleEncoderDecoderOutput"
>BeamSampleEncoderDecoderOutput</a></li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> or <code>torch.LongTensor</code></p>
`}}),ot=new Jp({props:{warning:!0,$$slots:{default:[om]},$$scope:{ctx:L}}}),st=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.generate.example",$$slots:{default:[sm]},$$scope:{ctx:L}}}),at=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.generate.example-2",$$slots:{default:[am]},$$scope:{ctx:L}}}),rt=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.generate.example-3",$$slots:{default:[rm]},$$scope:{ctx:L}}}),Lt=new ce({props:{name:"greedy_search",anchor:"transformers.generation_utils.GenerationMixin.greedy_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific keyword arguments will be forwarded to the <code>forward</code> function of the model.
If model is an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/generation_utils.py#L1563",returnDescription:`
<p><a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.GreedySearchDecoderOnlyOutput"
>GreedySearchDecoderOnlyOutput</a>, <a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.GreedySearchEncoderDecoderOutput"
>GreedySearchEncoderDecoderOutput</a>
or <code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.GreedySearchDecoderOnlyOutput"
>GreedySearchDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.GreedySearchEncoderDecoderOutput"
>GreedySearchEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),it=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.example",$$slots:{default:[im]},$$scope:{ctx:L}}}),Tt=new ce({props:{name:"sample",anchor:"transformers.generation_utils.GenerationMixin.sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.sample.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.sample.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.sample.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
to warp the prediction score distribution of the language modeling head applied before multinomial
sampling at each generation step.`,name:"logits_warper"},{anchor:"transformers.generation_utils.GenerationMixin.sample.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.generation_utils.GenerationMixin.sample.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.sample.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.sample.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_utils.GenerationMixin.sample.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_utils.GenerationMixin.sample.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_utils.GenerationMixin.sample.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.sample.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/generation_utils.py#L1795",returnDescription:`
<p><a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.SampleDecoderOnlyOutput"
>SampleDecoderOnlyOutput</a>, <a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.SampleEncoderDecoderOutput"
>SampleEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.SampleDecoderOnlyOutput"
>SampleDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.SampleEncoderDecoderOutput"
>SampleEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),lt=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.sample.example",$$slots:{default:[lm]},$$scope:{ctx:L}}}),Ot=new ce({props:{name:"beam_search",anchor:"transformers.generation_utils.GenerationMixin.beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
An derived instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/generation_utils.py#L2051",returnDescription:`
<p><code>generation_utilsBeamSearchDecoderOnlyOutput</code>, <a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),dt=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.beam_search.example",$$slots:{default:[dm]},$$scope:{ctx:L}}}),qt=new ce({props:{name:"beam_sample",anchor:"transformers.generation_utils.GenerationMixin.beam_sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
A derived instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
to warp the prediction score distribution of the language modeling head applied before multinomial
sampling at each generation step.`,name:"logits_warper"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/generation_utils.py#L2358",returnDescription:`
<p><a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSampleDecoderOnlyOutput"
>BeamSampleDecoderOnlyOutput</a>, <a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSampleEncoderDecoderOutput"
>BeamSampleEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSampleDecoderOnlyOutput"
>BeamSampleDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSampleEncoderDecoderOutput"
>BeamSampleEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),ct=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.example",$$slots:{default:[cm]},$$scope:{ctx:L}}}),Ft=new ce({props:{name:"group_beam_search",anchor:"transformers.generation_utils.GenerationMixin.group_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
An derived instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)</p>
<p>model_kwargs &#x2014;
Additional model specific kwargs that will be forwarded to the <code>forward</code> function of the model. If
model is an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/generation_utils.py#L2675",returnDescription:`
<p><a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a>, <a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if <a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if
<code>model.config.is_encoder_decoder=False</code> and <code>return_dict_in_generate=True</code> or a
<a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> if <code>model.config.is_encoder_decoder=True</code>.</p>
`}}),pt=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.example",$$slots:{default:[pm]},$$scope:{ctx:L}}}),At=new ce({props:{name:"constrained_beam_search",anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"constrained_beam_scorer",val:": ConstrainedBeamSearchScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.constrained_beam_scorer",description:`<strong>constrained_beam_scorer</strong> (<code>ConstrainedBeamSearchScorer</code>) &#x2014;
A derived instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation, while satisfying a list of positive constraints. For more information, the
documentation of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.ConstrainedBeamSearchScorer">ConstrainedBeamSearchScorer</a> should be read.`,name:"constrained_beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
to warp the prediction score distribution of the language modeling head applied before multinomial
sampling at each generation step.`,name:"logits_warper"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/generation_utils.py#L3037",returnDescription:`
<p><code>generation_utilsBeamSearchDecoderOnlyOutput</code>, <a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/v4.22.2/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),mt=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.example",$$slots:{default:[mm]},$$scope:{ctx:L}}}),Dt=new Cs({}),Nt=new ce({props:{name:"class transformers.generation_tf_utils.TFGenerationMixin",anchor:"transformers.generation_tf_utils.TFGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/generation_tf_utils.py#L345"}}),It=new ce({props:{name:"generate",anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate",parameters:[{name:"input_ids",val:" = None"},{name:"max_length",val:" = None"},{name:"max_new_tokens",val:" = None"},{name:"min_length",val:" = None"},{name:"do_sample",val:" = None"},{name:"early_stopping",val:" = None"},{name:"num_beams",val:" = None"},{name:"temperature",val:" = None"},{name:"top_k",val:" = None"},{name:"top_p",val:" = None"},{name:"repetition_penalty",val:" = None"},{name:"bad_words_ids",val:" = None"},{name:"bos_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"eos_token_id",val:" = None"},{name:"length_penalty",val:" = None"},{name:"no_repeat_ngram_size",val:" = None"},{name:"num_return_sequences",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_start_token_id",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_scores",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict_in_generate",val:" = None"},{name:"forced_bos_token_id",val:" = None"},{name:"forced_eos_token_id",val:" = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.input_ids",description:"<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, `(batch_size, sequence_length, &#x2014;",name:"input_ids"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.feature_dim)`",description:`<strong>feature_dim)\`</strong> or <code>(batch_size, num_channels, height, width)</code>, <em>optional</em>) &#x2014;
The sequence used as a prompt for the generation or as model inputs to the encoder. If <code>None</code> the
method initializes it with <code>bos_token_id</code> and a batch size of 1. For decoder-only models <code>inputs</code>
should of in the format of <code>input_ids</code>. For encoder-decoder models <em>inputs</em> can represent any of
<code>input_ids</code>, <code>input_values</code>, <code>input_features</code>, or <code>pixel_values</code>.`,name:"feature_dim)`"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.max_length</code>) &#x2014;
The maximum length the generated tokens can have. Corresponds to the length of the input prompt +
<code>max_new_tokens</code>. In general, prefer the use of <code>max_new_tokens</code>, which ignores the number of tokens in
the prompt.`,name:"max_length"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.max_new_tokens",description:`<strong>max_new_tokens</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum numbers of tokens to generate, ignoring the number of tokens in the prompt.`,name:"max_new_tokens"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.min_length",description:`<strong>min_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
The minimum length of the sequence to be generated.`,name:"min_length"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.do_sample",description:`<strong>do_sample</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use sampling ; use greedy decoding otherwise.`,name:"do_sample"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.early_stopping",description:`<strong>early_stopping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to stop the beam search when at least <code>num_beams</code> sentences are finished per batch or not.`,name:"early_stopping"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of beams for beam search. 1 means no beam search.`,name:"num_beams"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.temperature",description:`<strong>temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
The value used to module the next token probabilities.`,name:"temperature"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.top_k",description:`<strong>top_k</strong> (<code>int</code>, <em>optional</em>, defaults to 50) &#x2014;
The number of highest probability vocabulary tokens to keep for top-k-filtering.`,name:"top_k"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.top_p",description:`<strong>top_p</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
If set to float &lt; 1, only the most probable tokens with probabilities that add up to <code>top_p</code> or higher
are kept for generation.`,name:"top_p"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.repetition_penalty",description:`<strong>repetition_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
The parameter for repetition penalty. 1.0 means no penalty. See <a href="https://arxiv.org/pdf/1909.05858.pdf" rel="nofollow">this
paper</a> for more details.`,name:"repetition_penalty"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>beginning-of-sequence</em> token.`,name:"bos_token_id"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.length_penalty",description:`<strong>length_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Exponential penalty to the length. 1.0 means no penalty.</p>
<p>Set to values &lt; 1.0 in order to encourage the model to generate shorter sequences, to a value &gt; 1.0 in
order to encourage the model to produce longer sequences.`,name:"length_penalty"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.no_repeat_ngram_size",description:`<strong>no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to int &gt; 0, all ngrams of that size can only occur once.`,name:"no_repeat_ngram_size"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.bad_words_ids(List[int],",description:`<strong>bad_words_ids(<code>List[int]</code>,</strong> <em>optional</em>) &#x2014;
List of token ids that are not allowed to be generated. In order to get the tokens of the words that
should not appear in the generated text, use <code>tokenizer.encode(bad_word, add_prefix_space=True)</code>.`,name:"bad_words_ids(List[int],"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.num_return_sequences(int,",description:`<strong>num_return_sequences(<code>int</code>,</strong> <em>optional</em>, defaults to 1) &#x2014;
The number of independently computed returned sequences for each element in the batch.`,name:"num_return_sequences(int,"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of <code>dtype=tf.int32</code> and shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values are in <code>[0, 1]</code>, 1 for tokens
that are not masked, and 0 for masked tokens.</p>
<p>If not provided, will default to a tensor the same shape as <code>input_ids</code> that masks the pad token.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.decoder_start_token_id",description:`<strong>decoder_start_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If an encoder-decoder model starts decoding with a different token than <em>bos</em>, the id of that token.
use_cache &#x2014; (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>):
Whether or not the model should use the past last key/values attentions (if applicable to the model) to
speed up decoding.`,name:"decoder_start_token_id"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.forced_bos_token_id",description:`<strong>forced_bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the first generated token after the <code>decoder_start_token_id</code>. Useful
for multilingual models like <a href="../model_doc/mbart">mBART</a> where the first generated token needs to be
the target language token.`,name:"forced_bos_token_id"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached.
model_specific_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/generation_tf_utils.py#L375",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> (if <code>return_dict_in_generate=True</code> or when
<code>config.return_dict_in_generate=True</code>) or a <code>tf.Tensor</code>.</p>
<p>If the model is <em>not</em> an encoder-decoder model (<code>model.config.is_encoder_decoder=False</code>), the possible
<a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><code>TFGreedySearchDecoderOnlyOutput</code>,</li>
<li><code>TFSampleDecoderOnlyOutput</code>,</li>
<li><code>TFBeamSearchDecoderOnlyOutput</code>,</li>
<li><code>TFBeamSampleDecoderOnlyOutput</code></li>
</ul>
<p>If the model is an encoder-decoder model (<code>model.config.is_encoder_decoder=True</code>), the possible
<a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><code>TFGreedySearchEncoderDecoderOutput</code>,</li>
<li><code>TFSampleEncoderDecoderOutput</code>,</li>
<li><code>TFBeamSearchEncoderDecoderOutput</code>,</li>
<li><code>TFBeamSampleEncoderDecoderOutput</code></li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> or <code>tf.Tensor</code></p>
`}}),ut=new ge({props:{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.example",$$slots:{default:[gm]},$$scope:{ctx:L}}}),Ut=new Cs({}),Vt=new ce({props:{name:"class transformers.generation_flax_utils.FlaxGenerationMixin",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/generation_flax_utils.py#L120"}}),Xt=new ce({props:{name:"generate",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate",parameters:[{name:"input_ids",val:": ndarray"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"max_new_tokens",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"prng_key",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"trace",val:": bool = True"},{name:"params",val:": typing.Union[typing.Dict[str, jax._src.numpy.ndarray.ndarray], NoneType] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.max_length</code>) &#x2014;
The maximum length the generated tokens can have. Corresponds to the length of the input prompt +
<code>max_new_tokens</code>. In general, prefer the use of <code>max_new_tokens</code>, which ignores the number of tokens in
the prompt.`,name:"max_length"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.max_new_tokens",description:`<strong>max_new_tokens</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum numbers of tokens to generate, ignoring the number of tokens in the prompt.`,name:"max_new_tokens"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.do_sample",description:`<strong>do_sample</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use sampling ; use greedy decoding otherwise.`,name:"do_sample"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.temperature",description:`<strong>temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
The value used to module the next token probabilities.`,name:"temperature"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.top_k",description:`<strong>top_k</strong> (<code>int</code>, <em>optional</em>, defaults to 50) &#x2014;
The number of highest probability vocabulary tokens to keep for top-k-filtering.`,name:"top_k"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.top_p",description:`<strong>top_p</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
If set to float &lt; 1, only the most probable tokens with probabilities that add up to <code>top_p</code> or higher
are kept for generation.`,name:"top_p"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>beginning-of-sequence</em> token.`,name:"bos_token_id"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of beams for beam search. 1 means no beam search.`,name:"num_beams"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.decoder_start_token_id",description:`<strong>decoder_start_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If an encoder-decoder model starts decoding with a different token than <em>bos</em>, the id of that token.`,name:"decoder_start_token_id"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.trace",description:`<strong>trace</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to trace generation. Setting <code>trace=False</code> should only be used for debugging and will lead to a
considerably slower runtime.`,name:"trace"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.params",description:`<strong>params</strong> (<code>Dict[str, jnp.ndarray]</code>, <em>optional</em>) &#x2014;
Optionally the model parameters can be passed. Can be useful for parallelized generation.
model<em>kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If the model
is an encoder-decoder model, encoder specific kwargs should not be prefixed and decoder specific kwargs
should be prefixed with *decoder</em>*. Also accepts <code>encoder_outputs</code> to skip encoder part.`,name:"params"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/generation_flax_utils.py#L182",returnDescription:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a>.</p>
`}}),ht=new Jp({props:{warning:!0,$$slots:{default:[um]},$$scope:{ctx:L}}}),ft=new ge({props:{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.example",$$slots:{default:[_m]},$$scope:{ctx:L}}}),{c(){d=a("meta"),f=m(),u=a("h1"),c=a("a"),_=a("span"),v(s.$$.fragment),p=m(),C=a("span"),q=t("Generation"),I=m(),S=a("p"),A=t("Each framework has a generate method for auto-regressive text generation implemented in their respective "),$=a("code"),we=t("GenerationMixin"),Le=t(" class:"),he=m(),fe=a("ul"),$e=a("li"),Is=t("PyTorch "),tn=a("a"),Bs=t("generate()"),Ws=t(" is implemented in "),nn=a("a"),Hs=t("GenerationMixin"),Rs=t("."),Us=m(),Te=a("li"),Vs=t("TensorFlow "),on=a("a"),Ks=t("generate()"),Zs=t(" is implemented in "),sn=a("a"),Xs=t("TFGenerationMixin"),Js=t("."),Qs=m(),Ee=a("li"),Ys=t("Flax/JAX "),an=a("a"),ea=t("generate()"),ta=t(" is implemented in "),rn=a("a"),na=t("FlaxGenerationMixin"),oa=t("."),_s=m(),Oe=a("h2"),nt=a("a"),An=a("span"),v(xt.$$.fragment),sa=m(),Pn=a("span"),aa=t("GenerationMixin"),hs=m(),T=a("div"),v(vt.$$.fragment),ra=m(),kt=a("p"),ia=t("A class containing all functions for auto-regressive text generation, to be used as a mixin in "),ln=a("a"),la=t("PreTrainedModel"),da=t("."),ca=m(),yt=a("p"),pa=t("The class exposes "),dn=a("a"),ma=t("generate()"),ga=t(", which can be used for:"),ua=m(),P=a("ul"),B=a("li"),Dn=a("em"),_a=t("greedy decoding"),ha=t(" by calling "),cn=a("a"),fa=t("greedy_search()"),ba=t(" if "),Nn=a("code"),xa=t("num_beams=1"),va=t(` and
`),Cn=a("code"),ka=t("do_sample=False"),ya=t("."),ja=m(),W=a("li"),In=a("em"),Ma=t("multinomial sampling"),wa=t(" by calling "),pn=a("a"),La=t("sample()"),$a=t(" if "),Bn=a("code"),Ta=t("num_beams=1"),Ea=t(` and
`),Wn=a("code"),Oa=t("do_sample=True"),Ga=t("."),qa=m(),H=a("li"),Hn=a("em"),Sa=t("beam-search decoding"),Fa=t(" by calling "),mn=a("a"),za=t("beam_search()"),Aa=t(" if "),Rn=a("code"),Pa=t("num_beams>1"),Da=t(` and
`),Un=a("code"),Na=t("do_sample=False"),Ca=t("."),Ia=m(),R=a("li"),Vn=a("em"),Ba=t("beam-search multinomial sampling"),Wa=t(" by calling "),gn=a("a"),Ha=t("beam_sample()"),Ra=t(` if
`),Kn=a("code"),Ua=t("num_beams>1"),Va=t(" and "),Zn=a("code"),Ka=t("do_sample=True"),Za=t("."),Xa=m(),U=a("li"),Xn=a("em"),Ja=t("diverse beam-search decoding"),Qa=t(" by calling "),un=a("a"),Ya=t("group_beam_search()"),er=t(`, if
`),Jn=a("code"),tr=t("num_beams>1"),nr=t(" and "),Qn=a("code"),or=t("num_beam_groups>1"),sr=t("."),ar=m(),V=a("li"),Yn=a("em"),rr=t("constrained beam-search decoding"),ir=t(" by calling "),_n=a("a"),lr=t("constrained_beam_search()"),dr=t(`,
if `),eo=a("code"),cr=t("constraints!=None"),pr=t(" or "),to=a("code"),mr=t("force_words_ids!=None"),gr=t("."),ur=m(),E=a("div"),v(jt.$$.fragment),_r=m(),no=a("p"),hr=t(`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),fr=m(),D=a("ul"),K=a("li"),oo=a("em"),br=t("greedy decoding"),xr=t(" by calling "),hn=a("a"),vr=t("greedy_search()"),kr=t(" if "),so=a("code"),yr=t("num_beams=1"),jr=t(` and
`),ao=a("code"),Mr=t("do_sample=False"),wr=t("."),Lr=m(),Z=a("li"),ro=a("em"),$r=t("multinomial sampling"),Tr=t(" by calling "),fn=a("a"),Er=t("sample()"),Or=t(" if "),io=a("code"),Gr=t("num_beams=1"),qr=t(` and
`),lo=a("code"),Sr=t("do_sample=True"),Fr=t("."),zr=m(),X=a("li"),co=a("em"),Ar=t("beam-search decoding"),Pr=t(" by calling "),bn=a("a"),Dr=t("beam_search()"),Nr=t(" if "),po=a("code"),Cr=t("num_beams>1"),Ir=t(` and
`),mo=a("code"),Br=t("do_sample=False"),Wr=t("."),Hr=m(),J=a("li"),go=a("em"),Rr=t("beam-search multinomial sampling"),Ur=t(" by calling "),xn=a("a"),Vr=t("beam_sample()"),Kr=t(` if
`),uo=a("code"),Zr=t("num_beams>1"),Xr=t(" and "),_o=a("code"),Jr=t("do_sample=True"),Qr=t("."),Yr=m(),Q=a("li"),ho=a("em"),ei=t("diverse beam-search decoding"),ti=t(" by calling "),vn=a("a"),ni=t("group_beam_search()"),oi=t(`, if
`),fo=a("code"),si=t("num_beams>1"),ai=t(" and "),bo=a("code"),ri=t("num_beam_groups>1"),ii=t("."),li=m(),Y=a("li"),xo=a("em"),di=t("constrained beam-search decoding"),ci=t(` by calling
`),kn=a("a"),pi=t("constrained_beam_search()"),mi=t(", if "),vo=a("code"),gi=t("constraints!=None"),ui=t(` or
`),ko=a("code"),_i=t("force_words_ids!=None"),hi=t("."),fi=m(),v(ot.$$.fragment),bi=m(),Mt=a("p"),xi=t("Most of these parameters are explained in more detail in "),wt=a("a"),vi=t(`this blog
post`),ki=t("."),yi=m(),yo=a("p"),ji=t("Examples:"),Mi=m(),v(st.$$.fragment),wi=m(),v(at.$$.fragment),Li=m(),v(rt.$$.fragment),$i=m(),be=a("div"),v(Lt.$$.fragment),Ti=m(),$t=a("p"),Ei=t("Generates sequences of token ids for models with a language modeling head using "),jo=a("strong"),Oi=t("greedy decoding"),Gi=t(` and can be
used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),qi=m(),v(it.$$.fragment),Si=m(),xe=a("div"),v(Tt.$$.fragment),Fi=m(),Et=a("p"),zi=t("Generates sequences of token ids for models with a language modeling head using "),Mo=a("strong"),Ai=t("multinomial sampling"),Pi=t(` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Di=m(),v(lt.$$.fragment),Ni=m(),ve=a("div"),v(Ot.$$.fragment),Ci=m(),Gt=a("p"),Ii=t("Generates sequences of token ids for models with a language modeling head using "),wo=a("strong"),Bi=t("beam search decoding"),Wi=t(` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Hi=m(),v(dt.$$.fragment),Ri=m(),ke=a("div"),v(qt.$$.fragment),Ui=m(),St=a("p"),Vi=t("Generates sequences of token ids for models with a language modeling head using "),Lo=a("strong"),Ki=t(`beam search multinomial
sampling`),Zi=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Xi=m(),v(ct.$$.fragment),Ji=m(),ye=a("div"),v(Ft.$$.fragment),Qi=m(),zt=a("p"),Yi=t("Generates sequences of token ids for models with a language modeling head using "),$o=a("strong"),el=t(`diverse beam search
decoding`),tl=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),nl=m(),v(pt.$$.fragment),ol=m(),je=a("div"),v(At.$$.fragment),sl=m(),Pt=a("p"),al=t("Generates sequences of token ids for models with a language modeling head using "),To=a("strong"),rl=t(`constrained beam search
decoding`),il=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),ll=m(),v(mt.$$.fragment),fs=m(),Ge=a("h2"),gt=a("a"),Eo=a("span"),v(Dt.$$.fragment),dl=m(),Oo=a("span"),cl=t("TFGenerationMixin"),bs=m(),pe=a("div"),v(Nt.$$.fragment),pl=m(),Ct=a("p"),ml=t("A class containing all of the functions supporting generation, to be used as a mixin in "),yn=a("a"),gl=t("TFPreTrainedModel"),ul=t("."),_l=m(),F=a("div"),v(It.$$.fragment),hl=m(),Go=a("p"),fl=t(`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),bl=m(),Bt=a("p"),xl=t("Adapted in part from "),Wt=a("a"),vl=t(`Facebook\u2019s XLM beam search
code`),kl=t("."),yl=m(),me=a("p"),jl=t("Apart from "),qo=a("code"),Ml=t("input_ids"),wl=t(" and "),So=a("code"),Ll=t("attention_mask"),$l=t(`, all the arguments below will default to the value of the attribute
of the same name inside the `),jn=a("a"),Tl=t("PretrainedConfig"),El=t(` of the model. The default values indicated are the default
values of those config.`),Ol=m(),Ht=a("p"),Gl=t("Most of these parameters are explained in more detail in "),Rt=a("a"),ql=t(`this blog
post`),Sl=t("."),Fl=m(),v(ut.$$.fragment),xs=m(),qe=a("h2"),_t=a("a"),Fo=a("span"),v(Ut.$$.fragment),zl=m(),zo=a("span"),Al=t("FlaxGenerationMixin"),vs=m(),N=a("div"),v(Vt.$$.fragment),Pl=m(),Kt=a("p"),Dl=t(`A class containing all functions for auto-regressive text generation, to be used as a mixin in
`),Mn=a("a"),Nl=t("FlaxPreTrainedModel"),Cl=t("."),Il=m(),Zt=a("p"),Bl=t("The class exposes "),wn=a("a"),Wl=t("generate()"),Hl=t(", which can be used for:"),Rl=m(),Se=a("ul"),ee=a("li"),Ao=a("em"),Ul=t("greedy decoding"),Vl=t(" by calling "),Po=a("code"),Kl=t("_greedy_search()"),Zl=t(` if
`),Do=a("code"),Xl=t("num_beams=1"),Jl=t(" and "),No=a("code"),Ql=t("do_sample=False"),Yl=t("."),ed=m(),te=a("li"),Co=a("em"),td=t("multinomial sampling"),nd=t(" by calling "),Io=a("code"),od=t("_sample()"),sd=t(" if "),Bo=a("code"),ad=t("num_beams=1"),rd=t(`
and `),Wo=a("code"),id=t("do_sample=True"),ld=t("."),dd=m(),ne=a("li"),Ho=a("em"),cd=t("beam-search decoding"),pd=t(" by calling "),Ro=a("code"),md=t("_beam_search"),gd=t(" if "),Uo=a("code"),ud=t("num_beams>1"),_d=t(`
and `),Vo=a("code"),hd=t("do_sample=False"),fd=t("."),bd=m(),z=a("div"),v(Xt.$$.fragment),xd=m(),Ko=a("p"),vd=t(`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),kd=m(),Fe=a("ul"),oe=a("li"),Zo=a("em"),yd=t("greedy decoding"),jd=t(" by calling "),Xo=a("code"),Md=t("_greedy_search()"),wd=t(` if
`),Jo=a("code"),Ld=t("num_beams=1"),$d=t(" and "),Qo=a("code"),Td=t("do_sample=False"),Ed=t("."),Od=m(),se=a("li"),Yo=a("em"),Gd=t("multinomial sampling"),qd=t(" by calling "),es=a("code"),Sd=t("_sample()"),Fd=t(" if "),ts=a("code"),zd=t("num_beams=1"),Ad=t(`
and `),ns=a("code"),Pd=t("do_sample=True"),Dd=t("."),Nd=m(),ae=a("li"),os=a("em"),Cd=t("beam-search decoding"),Id=t(" by calling "),ss=a("code"),Bd=t("_beam_search"),Wd=t(" if "),as=a("code"),Hd=t("num_beams>1"),Rd=t(`
and `),rs=a("code"),Ud=t("do_sample=False"),Vd=t("."),Kd=m(),v(ht.$$.fragment),Zd=m(),Jt=a("p"),Xd=t("Most of these parameters are explained in more detail in "),Qt=a("a"),Jd=t(`this blog
post`),Qd=t("."),Yd=m(),v(ft.$$.fragment),this.h()},l(l){const b=tm('[data-svelte="svelte-1phssyn"]',document.head);d=r(b,"META",{name:!0,content:!0}),b.forEach(o),f=g(l),u=r(l,"H1",{class:!0});var Yt=i(u);c=r(Yt,"A",{id:!0,class:!0,href:!0});var is=i(c);_=r(is,"SPAN",{});var ls=i(_);k(s.$$.fragment,ls),ls.forEach(o),is.forEach(o),p=g(Yt),C=r(Yt,"SPAN",{});var ds=i(C);q=n(ds,"Generation"),ds.forEach(o),Yt.forEach(o),I=g(l),S=r(l,"P",{});var en=i(S);A=n(en,"Each framework has a generate method for auto-regressive text generation implemented in their respective "),$=r(en,"CODE",{});var cs=i($);we=n(cs,"GenerationMixin"),cs.forEach(o),Le=n(en," class:"),en.forEach(o),he=g(l),fe=r(l,"UL",{});var ze=i(fe);$e=r(ze,"LI",{});var Ae=i($e);Is=n(Ae,"PyTorch "),tn=r(Ae,"A",{href:!0});var ps=i(tn);Bs=n(ps,"generate()"),ps.forEach(o),Ws=n(Ae," is implemented in "),nn=r(Ae,"A",{href:!0});var ms=i(nn);Hs=n(ms,"GenerationMixin"),ms.forEach(o),Rs=n(Ae,"."),Ae.forEach(o),Us=g(ze),Te=r(ze,"LI",{});var Pe=i(Te);Vs=n(Pe,"TensorFlow "),on=r(Pe,"A",{href:!0});var gs=i(on);Ks=n(gs,"generate()"),gs.forEach(o),Zs=n(Pe," is implemented in "),sn=r(Pe,"A",{href:!0});var us=i(sn);Xs=n(us,"TFGenerationMixin"),us.forEach(o),Js=n(Pe,"."),Pe.forEach(o),Qs=g(ze),Ee=r(ze,"LI",{});var Ln=i(Ee);Ys=n(Ln,"Flax/JAX "),an=r(Ln,"A",{href:!0});var ec=i(an);ea=n(ec,"generate()"),ec.forEach(o),ta=n(Ln," is implemented in "),rn=r(Ln,"A",{href:!0});var tc=i(rn);na=n(tc,"FlaxGenerationMixin"),tc.forEach(o),oa=n(Ln,"."),Ln.forEach(o),ze.forEach(o),_s=g(l),Oe=r(l,"H2",{class:!0});var ys=i(Oe);nt=r(ys,"A",{id:!0,class:!0,href:!0});var nc=i(nt);An=r(nc,"SPAN",{});var oc=i(An);k(xt.$$.fragment,oc),oc.forEach(o),nc.forEach(o),sa=g(ys),Pn=r(ys,"SPAN",{});var sc=i(Pn);aa=n(sc,"GenerationMixin"),sc.forEach(o),ys.forEach(o),hs=g(l),T=r(l,"DIV",{class:!0});var O=i(T);k(vt.$$.fragment,O),ra=g(O),kt=r(O,"P",{});var js=i(kt);ia=n(js,"A class containing all functions for auto-regressive text generation, to be used as a mixin in "),ln=r(js,"A",{href:!0});var ac=i(ln);la=n(ac,"PreTrainedModel"),ac.forEach(o),da=n(js,"."),js.forEach(o),ca=g(O),yt=r(O,"P",{});var Ms=i(yt);pa=n(Ms,"The class exposes "),dn=r(Ms,"A",{href:!0});var rc=i(dn);ma=n(rc,"generate()"),rc.forEach(o),ga=n(Ms,", which can be used for:"),Ms.forEach(o),ua=g(O),P=r(O,"UL",{});var re=i(P);B=r(re,"LI",{});var De=i(B);Dn=r(De,"EM",{});var ic=i(Dn);_a=n(ic,"greedy decoding"),ic.forEach(o),ha=n(De," by calling "),cn=r(De,"A",{href:!0});var lc=i(cn);fa=n(lc,"greedy_search()"),lc.forEach(o),ba=n(De," if "),Nn=r(De,"CODE",{});var dc=i(Nn);xa=n(dc,"num_beams=1"),dc.forEach(o),va=n(De,` and
`),Cn=r(De,"CODE",{});var cc=i(Cn);ka=n(cc,"do_sample=False"),cc.forEach(o),ya=n(De,"."),De.forEach(o),ja=g(re),W=r(re,"LI",{});var Ne=i(W);In=r(Ne,"EM",{});var pc=i(In);Ma=n(pc,"multinomial sampling"),pc.forEach(o),wa=n(Ne," by calling "),pn=r(Ne,"A",{href:!0});var mc=i(pn);La=n(mc,"sample()"),mc.forEach(o),$a=n(Ne," if "),Bn=r(Ne,"CODE",{});var gc=i(Bn);Ta=n(gc,"num_beams=1"),gc.forEach(o),Ea=n(Ne,` and
`),Wn=r(Ne,"CODE",{});var uc=i(Wn);Oa=n(uc,"do_sample=True"),uc.forEach(o),Ga=n(Ne,"."),Ne.forEach(o),qa=g(re),H=r(re,"LI",{});var Ce=i(H);Hn=r(Ce,"EM",{});var _c=i(Hn);Sa=n(_c,"beam-search decoding"),_c.forEach(o),Fa=n(Ce," by calling "),mn=r(Ce,"A",{href:!0});var hc=i(mn);za=n(hc,"beam_search()"),hc.forEach(o),Aa=n(Ce," if "),Rn=r(Ce,"CODE",{});var fc=i(Rn);Pa=n(fc,"num_beams>1"),fc.forEach(o),Da=n(Ce,` and
`),Un=r(Ce,"CODE",{});var bc=i(Un);Na=n(bc,"do_sample=False"),bc.forEach(o),Ca=n(Ce,"."),Ce.forEach(o),Ia=g(re),R=r(re,"LI",{});var Ie=i(R);Vn=r(Ie,"EM",{});var xc=i(Vn);Ba=n(xc,"beam-search multinomial sampling"),xc.forEach(o),Wa=n(Ie," by calling "),gn=r(Ie,"A",{href:!0});var vc=i(gn);Ha=n(vc,"beam_sample()"),vc.forEach(o),Ra=n(Ie,` if
`),Kn=r(Ie,"CODE",{});var kc=i(Kn);Ua=n(kc,"num_beams>1"),kc.forEach(o),Va=n(Ie," and "),Zn=r(Ie,"CODE",{});var yc=i(Zn);Ka=n(yc,"do_sample=True"),yc.forEach(o),Za=n(Ie,"."),Ie.forEach(o),Xa=g(re),U=r(re,"LI",{});var Be=i(U);Xn=r(Be,"EM",{});var jc=i(Xn);Ja=n(jc,"diverse beam-search decoding"),jc.forEach(o),Qa=n(Be," by calling "),un=r(Be,"A",{href:!0});var Mc=i(un);Ya=n(Mc,"group_beam_search()"),Mc.forEach(o),er=n(Be,`, if
`),Jn=r(Be,"CODE",{});var wc=i(Jn);tr=n(wc,"num_beams>1"),wc.forEach(o),nr=n(Be," and "),Qn=r(Be,"CODE",{});var Lc=i(Qn);or=n(Lc,"num_beam_groups>1"),Lc.forEach(o),sr=n(Be,"."),Be.forEach(o),ar=g(re),V=r(re,"LI",{});var We=i(V);Yn=r(We,"EM",{});var $c=i(Yn);rr=n($c,"constrained beam-search decoding"),$c.forEach(o),ir=n(We," by calling "),_n=r(We,"A",{href:!0});var Tc=i(_n);lr=n(Tc,"constrained_beam_search()"),Tc.forEach(o),dr=n(We,`,
if `),eo=r(We,"CODE",{});var Ec=i(eo);cr=n(Ec,"constraints!=None"),Ec.forEach(o),pr=n(We," or "),to=r(We,"CODE",{});var Oc=i(to);mr=n(Oc,"force_words_ids!=None"),Oc.forEach(o),gr=n(We,"."),We.forEach(o),re.forEach(o),ur=g(O),E=r(O,"DIV",{class:!0});var G=i(E);k(jt.$$.fragment,G),_r=g(G),no=r(G,"P",{});var Gc=i(no);hr=n(Gc,`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),Gc.forEach(o),fr=g(G),D=r(G,"UL",{});var ie=i(D);K=r(ie,"LI",{});var He=i(K);oo=r(He,"EM",{});var qc=i(oo);br=n(qc,"greedy decoding"),qc.forEach(o),xr=n(He," by calling "),hn=r(He,"A",{href:!0});var Sc=i(hn);vr=n(Sc,"greedy_search()"),Sc.forEach(o),kr=n(He," if "),so=r(He,"CODE",{});var Fc=i(so);yr=n(Fc,"num_beams=1"),Fc.forEach(o),jr=n(He,` and
`),ao=r(He,"CODE",{});var zc=i(ao);Mr=n(zc,"do_sample=False"),zc.forEach(o),wr=n(He,"."),He.forEach(o),Lr=g(ie),Z=r(ie,"LI",{});var Re=i(Z);ro=r(Re,"EM",{});var Ac=i(ro);$r=n(Ac,"multinomial sampling"),Ac.forEach(o),Tr=n(Re," by calling "),fn=r(Re,"A",{href:!0});var Pc=i(fn);Er=n(Pc,"sample()"),Pc.forEach(o),Or=n(Re," if "),io=r(Re,"CODE",{});var Dc=i(io);Gr=n(Dc,"num_beams=1"),Dc.forEach(o),qr=n(Re,` and
`),lo=r(Re,"CODE",{});var Nc=i(lo);Sr=n(Nc,"do_sample=True"),Nc.forEach(o),Fr=n(Re,"."),Re.forEach(o),zr=g(ie),X=r(ie,"LI",{});var Ue=i(X);co=r(Ue,"EM",{});var Cc=i(co);Ar=n(Cc,"beam-search decoding"),Cc.forEach(o),Pr=n(Ue," by calling "),bn=r(Ue,"A",{href:!0});var Ic=i(bn);Dr=n(Ic,"beam_search()"),Ic.forEach(o),Nr=n(Ue," if "),po=r(Ue,"CODE",{});var Bc=i(po);Cr=n(Bc,"num_beams>1"),Bc.forEach(o),Ir=n(Ue,` and
`),mo=r(Ue,"CODE",{});var Wc=i(mo);Br=n(Wc,"do_sample=False"),Wc.forEach(o),Wr=n(Ue,"."),Ue.forEach(o),Hr=g(ie),J=r(ie,"LI",{});var Ve=i(J);go=r(Ve,"EM",{});var Hc=i(go);Rr=n(Hc,"beam-search multinomial sampling"),Hc.forEach(o),Ur=n(Ve," by calling "),xn=r(Ve,"A",{href:!0});var Rc=i(xn);Vr=n(Rc,"beam_sample()"),Rc.forEach(o),Kr=n(Ve,` if
`),uo=r(Ve,"CODE",{});var Uc=i(uo);Zr=n(Uc,"num_beams>1"),Uc.forEach(o),Xr=n(Ve," and "),_o=r(Ve,"CODE",{});var Vc=i(_o);Jr=n(Vc,"do_sample=True"),Vc.forEach(o),Qr=n(Ve,"."),Ve.forEach(o),Yr=g(ie),Q=r(ie,"LI",{});var Ke=i(Q);ho=r(Ke,"EM",{});var Kc=i(ho);ei=n(Kc,"diverse beam-search decoding"),Kc.forEach(o),ti=n(Ke," by calling "),vn=r(Ke,"A",{href:!0});var Zc=i(vn);ni=n(Zc,"group_beam_search()"),Zc.forEach(o),oi=n(Ke,`, if
`),fo=r(Ke,"CODE",{});var Xc=i(fo);si=n(Xc,"num_beams>1"),Xc.forEach(o),ai=n(Ke," and "),bo=r(Ke,"CODE",{});var Jc=i(bo);ri=n(Jc,"num_beam_groups>1"),Jc.forEach(o),ii=n(Ke,"."),Ke.forEach(o),li=g(ie),Y=r(ie,"LI",{});var Ze=i(Y);xo=r(Ze,"EM",{});var Qc=i(xo);di=n(Qc,"constrained beam-search decoding"),Qc.forEach(o),ci=n(Ze,` by calling
`),kn=r(Ze,"A",{href:!0});var Yc=i(kn);pi=n(Yc,"constrained_beam_search()"),Yc.forEach(o),mi=n(Ze,", if "),vo=r(Ze,"CODE",{});var ep=i(vo);gi=n(ep,"constraints!=None"),ep.forEach(o),ui=n(Ze,` or
`),ko=r(Ze,"CODE",{});var tp=i(ko);_i=n(tp,"force_words_ids!=None"),tp.forEach(o),hi=n(Ze,"."),Ze.forEach(o),ie.forEach(o),fi=g(G),k(ot.$$.fragment,G),bi=g(G),Mt=r(G,"P",{});var ws=i(Mt);xi=n(ws,"Most of these parameters are explained in more detail in "),wt=r(ws,"A",{href:!0,rel:!0});var np=i(wt);vi=n(np,`this blog
post`),np.forEach(o),ki=n(ws,"."),ws.forEach(o),yi=g(G),yo=r(G,"P",{});var op=i(yo);ji=n(op,"Examples:"),op.forEach(o),Mi=g(G),k(st.$$.fragment,G),wi=g(G),k(at.$$.fragment,G),Li=g(G),k(rt.$$.fragment,G),G.forEach(o),$i=g(O),be=r(O,"DIV",{class:!0});var $n=i(be);k(Lt.$$.fragment,$n),Ti=g($n),$t=r($n,"P",{});var Ls=i($t);Ei=n(Ls,"Generates sequences of token ids for models with a language modeling head using "),jo=r(Ls,"STRONG",{});var sp=i(jo);Oi=n(sp,"greedy decoding"),sp.forEach(o),Gi=n(Ls,` and can be
used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Ls.forEach(o),qi=g($n),k(it.$$.fragment,$n),$n.forEach(o),Si=g(O),xe=r(O,"DIV",{class:!0});var Tn=i(xe);k(Tt.$$.fragment,Tn),Fi=g(Tn),Et=r(Tn,"P",{});var $s=i(Et);zi=n($s,"Generates sequences of token ids for models with a language modeling head using "),Mo=r($s,"STRONG",{});var ap=i(Mo);Ai=n(ap,"multinomial sampling"),ap.forEach(o),Pi=n($s,` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),$s.forEach(o),Di=g(Tn),k(lt.$$.fragment,Tn),Tn.forEach(o),Ni=g(O),ve=r(O,"DIV",{class:!0});var En=i(ve);k(Ot.$$.fragment,En),Ci=g(En),Gt=r(En,"P",{});var Ts=i(Gt);Ii=n(Ts,"Generates sequences of token ids for models with a language modeling head using "),wo=r(Ts,"STRONG",{});var rp=i(wo);Bi=n(rp,"beam search decoding"),rp.forEach(o),Wi=n(Ts,` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Ts.forEach(o),Hi=g(En),k(dt.$$.fragment,En),En.forEach(o),Ri=g(O),ke=r(O,"DIV",{class:!0});var On=i(ke);k(qt.$$.fragment,On),Ui=g(On),St=r(On,"P",{});var Es=i(St);Vi=n(Es,"Generates sequences of token ids for models with a language modeling head using "),Lo=r(Es,"STRONG",{});var ip=i(Lo);Ki=n(ip,`beam search multinomial
sampling`),ip.forEach(o),Zi=n(Es," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Es.forEach(o),Xi=g(On),k(ct.$$.fragment,On),On.forEach(o),Ji=g(O),ye=r(O,"DIV",{class:!0});var Gn=i(ye);k(Ft.$$.fragment,Gn),Qi=g(Gn),zt=r(Gn,"P",{});var Os=i(zt);Yi=n(Os,"Generates sequences of token ids for models with a language modeling head using "),$o=r(Os,"STRONG",{});var lp=i($o);el=n(lp,`diverse beam search
decoding`),lp.forEach(o),tl=n(Os," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Os.forEach(o),nl=g(Gn),k(pt.$$.fragment,Gn),Gn.forEach(o),ol=g(O),je=r(O,"DIV",{class:!0});var qn=i(je);k(At.$$.fragment,qn),sl=g(qn),Pt=r(qn,"P",{});var Gs=i(Pt);al=n(Gs,"Generates sequences of token ids for models with a language modeling head using "),To=r(Gs,"STRONG",{});var dp=i(To);rl=n(dp,`constrained beam search
decoding`),dp.forEach(o),il=n(Gs," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Gs.forEach(o),ll=g(qn),k(mt.$$.fragment,qn),qn.forEach(o),O.forEach(o),fs=g(l),Ge=r(l,"H2",{class:!0});var qs=i(Ge);gt=r(qs,"A",{id:!0,class:!0,href:!0});var cp=i(gt);Eo=r(cp,"SPAN",{});var pp=i(Eo);k(Dt.$$.fragment,pp),pp.forEach(o),cp.forEach(o),dl=g(qs),Oo=r(qs,"SPAN",{});var mp=i(Oo);cl=n(mp,"TFGenerationMixin"),mp.forEach(o),qs.forEach(o),bs=g(l),pe=r(l,"DIV",{class:!0});var Sn=i(pe);k(Nt.$$.fragment,Sn),pl=g(Sn),Ct=r(Sn,"P",{});var Ss=i(Ct);ml=n(Ss,"A class containing all of the functions supporting generation, to be used as a mixin in "),yn=r(Ss,"A",{href:!0});var gp=i(yn);gl=n(gp,"TFPreTrainedModel"),gp.forEach(o),ul=n(Ss,"."),Ss.forEach(o),_l=g(Sn),F=r(Sn,"DIV",{class:!0});var le=i(F);k(It.$$.fragment,le),hl=g(le),Go=r(le,"P",{});var up=i(Go);fl=n(up,`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),up.forEach(o),bl=g(le),Bt=r(le,"P",{});var Fs=i(Bt);xl=n(Fs,"Adapted in part from "),Wt=r(Fs,"A",{href:!0,rel:!0});var _p=i(Wt);vl=n(_p,`Facebook\u2019s XLM beam search
code`),_p.forEach(o),kl=n(Fs,"."),Fs.forEach(o),yl=g(le),me=r(le,"P",{});var bt=i(me);jl=n(bt,"Apart from "),qo=r(bt,"CODE",{});var hp=i(qo);Ml=n(hp,"input_ids"),hp.forEach(o),wl=n(bt," and "),So=r(bt,"CODE",{});var fp=i(So);Ll=n(fp,"attention_mask"),fp.forEach(o),$l=n(bt,`, all the arguments below will default to the value of the attribute
of the same name inside the `),jn=r(bt,"A",{href:!0});var bp=i(jn);Tl=n(bp,"PretrainedConfig"),bp.forEach(o),El=n(bt,` of the model. The default values indicated are the default
values of those config.`),bt.forEach(o),Ol=g(le),Ht=r(le,"P",{});var zs=i(Ht);Gl=n(zs,"Most of these parameters are explained in more detail in "),Rt=r(zs,"A",{href:!0,rel:!0});var xp=i(Rt);ql=n(xp,`this blog
post`),xp.forEach(o),Sl=n(zs,"."),zs.forEach(o),Fl=g(le),k(ut.$$.fragment,le),le.forEach(o),Sn.forEach(o),xs=g(l),qe=r(l,"H2",{class:!0});var As=i(qe);_t=r(As,"A",{id:!0,class:!0,href:!0});var vp=i(_t);Fo=r(vp,"SPAN",{});var kp=i(Fo);k(Ut.$$.fragment,kp),kp.forEach(o),vp.forEach(o),zl=g(As),zo=r(As,"SPAN",{});var yp=i(zo);Al=n(yp,"FlaxGenerationMixin"),yp.forEach(o),As.forEach(o),vs=g(l),N=r(l,"DIV",{class:!0});var Me=i(N);k(Vt.$$.fragment,Me),Pl=g(Me),Kt=r(Me,"P",{});var Ps=i(Kt);Dl=n(Ps,`A class containing all functions for auto-regressive text generation, to be used as a mixin in
`),Mn=r(Ps,"A",{href:!0});var jp=i(Mn);Nl=n(jp,"FlaxPreTrainedModel"),jp.forEach(o),Cl=n(Ps,"."),Ps.forEach(o),Il=g(Me),Zt=r(Me,"P",{});var Ds=i(Zt);Bl=n(Ds,"The class exposes "),wn=r(Ds,"A",{href:!0});var Mp=i(wn);Wl=n(Mp,"generate()"),Mp.forEach(o),Hl=n(Ds,", which can be used for:"),Ds.forEach(o),Rl=g(Me),Se=r(Me,"UL",{});var Fn=i(Se);ee=r(Fn,"LI",{});var Xe=i(ee);Ao=r(Xe,"EM",{});var wp=i(Ao);Ul=n(wp,"greedy decoding"),wp.forEach(o),Vl=n(Xe," by calling "),Po=r(Xe,"CODE",{});var Lp=i(Po);Kl=n(Lp,"_greedy_search()"),Lp.forEach(o),Zl=n(Xe,` if
`),Do=r(Xe,"CODE",{});var $p=i(Do);Xl=n($p,"num_beams=1"),$p.forEach(o),Jl=n(Xe," and "),No=r(Xe,"CODE",{});var Tp=i(No);Ql=n(Tp,"do_sample=False"),Tp.forEach(o),Yl=n(Xe,"."),Xe.forEach(o),ed=g(Fn),te=r(Fn,"LI",{});var Je=i(te);Co=r(Je,"EM",{});var Ep=i(Co);td=n(Ep,"multinomial sampling"),Ep.forEach(o),nd=n(Je," by calling "),Io=r(Je,"CODE",{});var Op=i(Io);od=n(Op,"_sample()"),Op.forEach(o),sd=n(Je," if "),Bo=r(Je,"CODE",{});var Gp=i(Bo);ad=n(Gp,"num_beams=1"),Gp.forEach(o),rd=n(Je,`
and `),Wo=r(Je,"CODE",{});var qp=i(Wo);id=n(qp,"do_sample=True"),qp.forEach(o),ld=n(Je,"."),Je.forEach(o),dd=g(Fn),ne=r(Fn,"LI",{});var Qe=i(ne);Ho=r(Qe,"EM",{});var Sp=i(Ho);cd=n(Sp,"beam-search decoding"),Sp.forEach(o),pd=n(Qe," by calling "),Ro=r(Qe,"CODE",{});var Fp=i(Ro);md=n(Fp,"_beam_search"),Fp.forEach(o),gd=n(Qe," if "),Uo=r(Qe,"CODE",{});var zp=i(Uo);ud=n(zp,"num_beams>1"),zp.forEach(o),_d=n(Qe,`
and `),Vo=r(Qe,"CODE",{});var Ap=i(Vo);hd=n(Ap,"do_sample=False"),Ap.forEach(o),fd=n(Qe,"."),Qe.forEach(o),Fn.forEach(o),bd=g(Me),z=r(Me,"DIV",{class:!0});var de=i(z);k(Xt.$$.fragment,de),xd=g(de),Ko=r(de,"P",{});var Pp=i(Ko);vd=n(Pp,`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),Pp.forEach(o),kd=g(de),Fe=r(de,"UL",{});var zn=i(Fe);oe=r(zn,"LI",{});var Ye=i(oe);Zo=r(Ye,"EM",{});var Dp=i(Zo);yd=n(Dp,"greedy decoding"),Dp.forEach(o),jd=n(Ye," by calling "),Xo=r(Ye,"CODE",{});var Np=i(Xo);Md=n(Np,"_greedy_search()"),Np.forEach(o),wd=n(Ye,` if
`),Jo=r(Ye,"CODE",{});var Cp=i(Jo);Ld=n(Cp,"num_beams=1"),Cp.forEach(o),$d=n(Ye," and "),Qo=r(Ye,"CODE",{});var Ip=i(Qo);Td=n(Ip,"do_sample=False"),Ip.forEach(o),Ed=n(Ye,"."),Ye.forEach(o),Od=g(zn),se=r(zn,"LI",{});var et=i(se);Yo=r(et,"EM",{});var Bp=i(Yo);Gd=n(Bp,"multinomial sampling"),Bp.forEach(o),qd=n(et," by calling "),es=r(et,"CODE",{});var Wp=i(es);Sd=n(Wp,"_sample()"),Wp.forEach(o),Fd=n(et," if "),ts=r(et,"CODE",{});var Hp=i(ts);zd=n(Hp,"num_beams=1"),Hp.forEach(o),Ad=n(et,`
and `),ns=r(et,"CODE",{});var Rp=i(ns);Pd=n(Rp,"do_sample=True"),Rp.forEach(o),Dd=n(et,"."),et.forEach(o),Nd=g(zn),ae=r(zn,"LI",{});var tt=i(ae);os=r(tt,"EM",{});var Up=i(os);Cd=n(Up,"beam-search decoding"),Up.forEach(o),Id=n(tt," by calling "),ss=r(tt,"CODE",{});var Vp=i(ss);Bd=n(Vp,"_beam_search"),Vp.forEach(o),Wd=n(tt," if "),as=r(tt,"CODE",{});var Kp=i(as);Hd=n(Kp,"num_beams>1"),Kp.forEach(o),Rd=n(tt,`
and `),rs=r(tt,"CODE",{});var Zp=i(rs);Ud=n(Zp,"do_sample=False"),Zp.forEach(o),Vd=n(tt,"."),tt.forEach(o),zn.forEach(o),Kd=g(de),k(ht.$$.fragment,de),Zd=g(de),Jt=r(de,"P",{});var Ns=i(Jt);Xd=n(Ns,"Most of these parameters are explained in more detail in "),Qt=r(Ns,"A",{href:!0,rel:!0});var Xp=i(Qt);Jd=n(Xp,`this blog
post`),Xp.forEach(o),Qd=n(Ns,"."),Ns.forEach(o),Yd=g(de),k(ft.$$.fragment,de),de.forEach(o),Me.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(fm)),h(c,"id","generation"),h(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(c,"href","#generation"),h(u,"class","relative group"),h(tn,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(nn,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin"),h(on,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin.generate"),h(sn,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin"),h(an,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin.generate"),h(rn,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin"),h(nt,"id","transformers.generation_utils.GenerationMixin"),h(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(nt,"href","#transformers.generation_utils.GenerationMixin"),h(Oe,"class","relative group"),h(ln,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),h(dn,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(cn,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),h(pn,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),h(mn,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),h(gn,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),h(un,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),h(_n,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.constrained_beam_search"),h(hn,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),h(fn,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),h(bn,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),h(xn,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),h(vn,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),h(kn,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.constrained_beam_search"),h(wt,"href","https://huggingface.co/blog/how-to-generate"),h(wt,"rel","nofollow"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(gt,"id","transformers.generation_tf_utils.TFGenerationMixin"),h(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(gt,"href","#transformers.generation_tf_utils.TFGenerationMixin"),h(Ge,"class","relative group"),h(yn,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),h(Wt,"href","https://github.com/facebookresearch/XLM/blob/9e6f6814d17be4fe5b15f2e6c43eb2b2d76daeb4/src/model/transformer.py#L529"),h(Wt,"rel","nofollow"),h(jn,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(Rt,"href","https://huggingface.co/blog/how-to-generate"),h(Rt,"rel","nofollow"),h(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_t,"id","transformers.generation_flax_utils.FlaxGenerationMixin"),h(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_t,"href","#transformers.generation_flax_utils.FlaxGenerationMixin"),h(qe,"class","relative group"),h(Mn,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(wn,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin.generate"),h(Qt,"href","https://huggingface.co/blog/how-to-generate"),h(Qt,"rel","nofollow"),h(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(l,b){e(document.head,d),x(l,f,b),x(l,u,b),e(u,c),e(c,_),y(s,_,null),e(u,p),e(u,C),e(C,q),x(l,I,b),x(l,S,b),e(S,A),e(S,$),e($,we),e(S,Le),x(l,he,b),x(l,fe,b),e(fe,$e),e($e,Is),e($e,tn),e(tn,Bs),e($e,Ws),e($e,nn),e(nn,Hs),e($e,Rs),e(fe,Us),e(fe,Te),e(Te,Vs),e(Te,on),e(on,Ks),e(Te,Zs),e(Te,sn),e(sn,Xs),e(Te,Js),e(fe,Qs),e(fe,Ee),e(Ee,Ys),e(Ee,an),e(an,ea),e(Ee,ta),e(Ee,rn),e(rn,na),e(Ee,oa),x(l,_s,b),x(l,Oe,b),e(Oe,nt),e(nt,An),y(xt,An,null),e(Oe,sa),e(Oe,Pn),e(Pn,aa),x(l,hs,b),x(l,T,b),y(vt,T,null),e(T,ra),e(T,kt),e(kt,ia),e(kt,ln),e(ln,la),e(kt,da),e(T,ca),e(T,yt),e(yt,pa),e(yt,dn),e(dn,ma),e(yt,ga),e(T,ua),e(T,P),e(P,B),e(B,Dn),e(Dn,_a),e(B,ha),e(B,cn),e(cn,fa),e(B,ba),e(B,Nn),e(Nn,xa),e(B,va),e(B,Cn),e(Cn,ka),e(B,ya),e(P,ja),e(P,W),e(W,In),e(In,Ma),e(W,wa),e(W,pn),e(pn,La),e(W,$a),e(W,Bn),e(Bn,Ta),e(W,Ea),e(W,Wn),e(Wn,Oa),e(W,Ga),e(P,qa),e(P,H),e(H,Hn),e(Hn,Sa),e(H,Fa),e(H,mn),e(mn,za),e(H,Aa),e(H,Rn),e(Rn,Pa),e(H,Da),e(H,Un),e(Un,Na),e(H,Ca),e(P,Ia),e(P,R),e(R,Vn),e(Vn,Ba),e(R,Wa),e(R,gn),e(gn,Ha),e(R,Ra),e(R,Kn),e(Kn,Ua),e(R,Va),e(R,Zn),e(Zn,Ka),e(R,Za),e(P,Xa),e(P,U),e(U,Xn),e(Xn,Ja),e(U,Qa),e(U,un),e(un,Ya),e(U,er),e(U,Jn),e(Jn,tr),e(U,nr),e(U,Qn),e(Qn,or),e(U,sr),e(P,ar),e(P,V),e(V,Yn),e(Yn,rr),e(V,ir),e(V,_n),e(_n,lr),e(V,dr),e(V,eo),e(eo,cr),e(V,pr),e(V,to),e(to,mr),e(V,gr),e(T,ur),e(T,E),y(jt,E,null),e(E,_r),e(E,no),e(no,hr),e(E,fr),e(E,D),e(D,K),e(K,oo),e(oo,br),e(K,xr),e(K,hn),e(hn,vr),e(K,kr),e(K,so),e(so,yr),e(K,jr),e(K,ao),e(ao,Mr),e(K,wr),e(D,Lr),e(D,Z),e(Z,ro),e(ro,$r),e(Z,Tr),e(Z,fn),e(fn,Er),e(Z,Or),e(Z,io),e(io,Gr),e(Z,qr),e(Z,lo),e(lo,Sr),e(Z,Fr),e(D,zr),e(D,X),e(X,co),e(co,Ar),e(X,Pr),e(X,bn),e(bn,Dr),e(X,Nr),e(X,po),e(po,Cr),e(X,Ir),e(X,mo),e(mo,Br),e(X,Wr),e(D,Hr),e(D,J),e(J,go),e(go,Rr),e(J,Ur),e(J,xn),e(xn,Vr),e(J,Kr),e(J,uo),e(uo,Zr),e(J,Xr),e(J,_o),e(_o,Jr),e(J,Qr),e(D,Yr),e(D,Q),e(Q,ho),e(ho,ei),e(Q,ti),e(Q,vn),e(vn,ni),e(Q,oi),e(Q,fo),e(fo,si),e(Q,ai),e(Q,bo),e(bo,ri),e(Q,ii),e(D,li),e(D,Y),e(Y,xo),e(xo,di),e(Y,ci),e(Y,kn),e(kn,pi),e(Y,mi),e(Y,vo),e(vo,gi),e(Y,ui),e(Y,ko),e(ko,_i),e(Y,hi),e(E,fi),y(ot,E,null),e(E,bi),e(E,Mt),e(Mt,xi),e(Mt,wt),e(wt,vi),e(Mt,ki),e(E,yi),e(E,yo),e(yo,ji),e(E,Mi),y(st,E,null),e(E,wi),y(at,E,null),e(E,Li),y(rt,E,null),e(T,$i),e(T,be),y(Lt,be,null),e(be,Ti),e(be,$t),e($t,Ei),e($t,jo),e(jo,Oi),e($t,Gi),e(be,qi),y(it,be,null),e(T,Si),e(T,xe),y(Tt,xe,null),e(xe,Fi),e(xe,Et),e(Et,zi),e(Et,Mo),e(Mo,Ai),e(Et,Pi),e(xe,Di),y(lt,xe,null),e(T,Ni),e(T,ve),y(Ot,ve,null),e(ve,Ci),e(ve,Gt),e(Gt,Ii),e(Gt,wo),e(wo,Bi),e(Gt,Wi),e(ve,Hi),y(dt,ve,null),e(T,Ri),e(T,ke),y(qt,ke,null),e(ke,Ui),e(ke,St),e(St,Vi),e(St,Lo),e(Lo,Ki),e(St,Zi),e(ke,Xi),y(ct,ke,null),e(T,Ji),e(T,ye),y(Ft,ye,null),e(ye,Qi),e(ye,zt),e(zt,Yi),e(zt,$o),e($o,el),e(zt,tl),e(ye,nl),y(pt,ye,null),e(T,ol),e(T,je),y(At,je,null),e(je,sl),e(je,Pt),e(Pt,al),e(Pt,To),e(To,rl),e(Pt,il),e(je,ll),y(mt,je,null),x(l,fs,b),x(l,Ge,b),e(Ge,gt),e(gt,Eo),y(Dt,Eo,null),e(Ge,dl),e(Ge,Oo),e(Oo,cl),x(l,bs,b),x(l,pe,b),y(Nt,pe,null),e(pe,pl),e(pe,Ct),e(Ct,ml),e(Ct,yn),e(yn,gl),e(Ct,ul),e(pe,_l),e(pe,F),y(It,F,null),e(F,hl),e(F,Go),e(Go,fl),e(F,bl),e(F,Bt),e(Bt,xl),e(Bt,Wt),e(Wt,vl),e(Bt,kl),e(F,yl),e(F,me),e(me,jl),e(me,qo),e(qo,Ml),e(me,wl),e(me,So),e(So,Ll),e(me,$l),e(me,jn),e(jn,Tl),e(me,El),e(F,Ol),e(F,Ht),e(Ht,Gl),e(Ht,Rt),e(Rt,ql),e(Ht,Sl),e(F,Fl),y(ut,F,null),x(l,xs,b),x(l,qe,b),e(qe,_t),e(_t,Fo),y(Ut,Fo,null),e(qe,zl),e(qe,zo),e(zo,Al),x(l,vs,b),x(l,N,b),y(Vt,N,null),e(N,Pl),e(N,Kt),e(Kt,Dl),e(Kt,Mn),e(Mn,Nl),e(Kt,Cl),e(N,Il),e(N,Zt),e(Zt,Bl),e(Zt,wn),e(wn,Wl),e(Zt,Hl),e(N,Rl),e(N,Se),e(Se,ee),e(ee,Ao),e(Ao,Ul),e(ee,Vl),e(ee,Po),e(Po,Kl),e(ee,Zl),e(ee,Do),e(Do,Xl),e(ee,Jl),e(ee,No),e(No,Ql),e(ee,Yl),e(Se,ed),e(Se,te),e(te,Co),e(Co,td),e(te,nd),e(te,Io),e(Io,od),e(te,sd),e(te,Bo),e(Bo,ad),e(te,rd),e(te,Wo),e(Wo,id),e(te,ld),e(Se,dd),e(Se,ne),e(ne,Ho),e(Ho,cd),e(ne,pd),e(ne,Ro),e(Ro,md),e(ne,gd),e(ne,Uo),e(Uo,ud),e(ne,_d),e(ne,Vo),e(Vo,hd),e(ne,fd),e(N,bd),e(N,z),y(Xt,z,null),e(z,xd),e(z,Ko),e(Ko,vd),e(z,kd),e(z,Fe),e(Fe,oe),e(oe,Zo),e(Zo,yd),e(oe,jd),e(oe,Xo),e(Xo,Md),e(oe,wd),e(oe,Jo),e(Jo,Ld),e(oe,$d),e(oe,Qo),e(Qo,Td),e(oe,Ed),e(Fe,Od),e(Fe,se),e(se,Yo),e(Yo,Gd),e(se,qd),e(se,es),e(es,Sd),e(se,Fd),e(se,ts),e(ts,zd),e(se,Ad),e(se,ns),e(ns,Pd),e(se,Dd),e(Fe,Nd),e(Fe,ae),e(ae,os),e(os,Cd),e(ae,Id),e(ae,ss),e(ss,Bd),e(ae,Wd),e(ae,as),e(as,Hd),e(ae,Rd),e(ae,rs),e(rs,Ud),e(ae,Vd),e(z,Kd),y(ht,z,null),e(z,Zd),e(z,Jt),e(Jt,Xd),e(Jt,Qt),e(Qt,Jd),e(Jt,Qd),e(z,Yd),y(ft,z,null),ks=!0},p(l,[b]){const Yt={};b&2&&(Yt.$$scope={dirty:b,ctx:l}),ot.$set(Yt);const is={};b&2&&(is.$$scope={dirty:b,ctx:l}),st.$set(is);const ls={};b&2&&(ls.$$scope={dirty:b,ctx:l}),at.$set(ls);const ds={};b&2&&(ds.$$scope={dirty:b,ctx:l}),rt.$set(ds);const en={};b&2&&(en.$$scope={dirty:b,ctx:l}),it.$set(en);const cs={};b&2&&(cs.$$scope={dirty:b,ctx:l}),lt.$set(cs);const ze={};b&2&&(ze.$$scope={dirty:b,ctx:l}),dt.$set(ze);const Ae={};b&2&&(Ae.$$scope={dirty:b,ctx:l}),ct.$set(Ae);const ps={};b&2&&(ps.$$scope={dirty:b,ctx:l}),pt.$set(ps);const ms={};b&2&&(ms.$$scope={dirty:b,ctx:l}),mt.$set(ms);const Pe={};b&2&&(Pe.$$scope={dirty:b,ctx:l}),ut.$set(Pe);const gs={};b&2&&(gs.$$scope={dirty:b,ctx:l}),ht.$set(gs);const us={};b&2&&(us.$$scope={dirty:b,ctx:l}),ft.$set(us)},i(l){ks||(j(s.$$.fragment,l),j(xt.$$.fragment,l),j(vt.$$.fragment,l),j(jt.$$.fragment,l),j(ot.$$.fragment,l),j(st.$$.fragment,l),j(at.$$.fragment,l),j(rt.$$.fragment,l),j(Lt.$$.fragment,l),j(it.$$.fragment,l),j(Tt.$$.fragment,l),j(lt.$$.fragment,l),j(Ot.$$.fragment,l),j(dt.$$.fragment,l),j(qt.$$.fragment,l),j(ct.$$.fragment,l),j(Ft.$$.fragment,l),j(pt.$$.fragment,l),j(At.$$.fragment,l),j(mt.$$.fragment,l),j(Dt.$$.fragment,l),j(Nt.$$.fragment,l),j(It.$$.fragment,l),j(ut.$$.fragment,l),j(Ut.$$.fragment,l),j(Vt.$$.fragment,l),j(Xt.$$.fragment,l),j(ht.$$.fragment,l),j(ft.$$.fragment,l),ks=!0)},o(l){M(s.$$.fragment,l),M(xt.$$.fragment,l),M(vt.$$.fragment,l),M(jt.$$.fragment,l),M(ot.$$.fragment,l),M(st.$$.fragment,l),M(at.$$.fragment,l),M(rt.$$.fragment,l),M(Lt.$$.fragment,l),M(it.$$.fragment,l),M(Tt.$$.fragment,l),M(lt.$$.fragment,l),M(Ot.$$.fragment,l),M(dt.$$.fragment,l),M(qt.$$.fragment,l),M(ct.$$.fragment,l),M(Ft.$$.fragment,l),M(pt.$$.fragment,l),M(At.$$.fragment,l),M(mt.$$.fragment,l),M(Dt.$$.fragment,l),M(Nt.$$.fragment,l),M(It.$$.fragment,l),M(ut.$$.fragment,l),M(Ut.$$.fragment,l),M(Vt.$$.fragment,l),M(Xt.$$.fragment,l),M(ht.$$.fragment,l),M(ft.$$.fragment,l),ks=!1},d(l){o(d),l&&o(f),l&&o(u),w(s),l&&o(I),l&&o(S),l&&o(he),l&&o(fe),l&&o(_s),l&&o(Oe),w(xt),l&&o(hs),l&&o(T),w(vt),w(jt),w(ot),w(st),w(at),w(rt),w(Lt),w(it),w(Tt),w(lt),w(Ot),w(dt),w(qt),w(ct),w(Ft),w(pt),w(At),w(mt),l&&o(fs),l&&o(Ge),w(Dt),l&&o(bs),l&&o(pe),w(Nt),w(It),w(ut),l&&o(xs),l&&o(qe),w(Ut),l&&o(vs),l&&o(N),w(Vt),w(Xt),w(ht),w(ft)}}}const fm={local:"generation",sections:[{local:"transformers.generation_utils.GenerationMixin",title:"GenerationMixin"},{local:"transformers.generation_tf_utils.TFGenerationMixin",title:"TFGenerationMixin"},{local:"transformers.generation_flax_utils.FlaxGenerationMixin",title:"FlaxGenerationMixin"}],title:"Generation"};function bm(L){return nm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class wm extends Qp{constructor(d){super();Yp(this,d,bm,hm,em,{})}}export{wm as default,fm as metadata};
