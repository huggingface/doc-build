import{S as Km,i as Zm,s as Xm,e as a,k as m,w as k,t,M as Jm,c as r,d as o,m as g,a as i,x as v,h as n,b as h,G as e,g as x,y,q as j,o as L,B as M,v as Qm,L as me}from"../../chunks/vendor-hf-doc-builder.js";import{T as Vm}from"../../chunks/Tip-hf-doc-builder.js";import{D as B}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ge}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as aa}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as pe}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ym(w){let d,f,u,c,_,s,p,W,S,H,A;return{c(){d=a("p"),f=t("Apart from "),u=a("code"),c=t("inputs"),_=t(`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),s=a("code"),p=t("config.json"),W=t(`) which in turn defaults to the
`),S=a("a"),H=t("PretrainedConfig"),A=t(" of the model."),this.h()},l(D){d=r(D,"P",{});var T=i(d);f=n(T,"Apart from "),u=r(T,"CODE",{});var Te=i(u);c=n(Te,"inputs"),Te.forEach(o),_=n(T,`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),s=r(T,"CODE",{});var Ee=i(s);p=n(Ee,"config.json"),Ee.forEach(o),W=n(T,`) which in turn defaults to the
`),S=r(T,"A",{href:!0});var be=i(S);H=n(be,"PretrainedConfig"),be.forEach(o),A=n(T," of the model."),T.forEach(o),this.h()},h(){h(S,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig")},m(D,T){x(D,d,T),e(d,f),e(d,u),e(u,c),e(d,_),e(d,s),e(s,p),e(d,W),e(d,S),e(S,H),e(d,A)},d(D){D&&o(d)}}}function eg(w){let d,f,u,c,_;return c=new ge({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM

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
[<span class="hljs-string">&#x27;Today I believe we can finally get to the point where we can make a difference in the lives of the people of the United States of America.\\n&#x27;</span>]`}}),{c(){d=a("p"),f=t("Greedy Decoding:"),u=m(),k(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Greedy Decoding:"),p.forEach(o),u=g(s),v(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:me,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){L(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),M(c,s)}}}function tg(w){let d,f,u,c,_;return c=new ge({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM
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
[<span class="hljs-string">&#x27;Today I believe we can finally get rid of discrimination,&quot; said Rep. Mark Pocan (D-Wis.).\\n\\n&quot;Just look at the&#x27;</span>]`}}),{c(){d=a("p"),f=t("Multinomial Sampling:"),u=m(),k(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Multinomial Sampling:"),p.forEach(o),u=g(s),v(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:me,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){L(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),M(c,s)}}}function ng(w){let d,f,u,c,_;return c=new ge({props:{code:`from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

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
[<span class="hljs-string">&#x27;Paris ist eines der dichtesten besiedelten Gebiete Europas.&#x27;</span>]`}}),{c(){d=a("p"),f=t("Beam-search decoding:"),u=m(),k(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Beam-search decoding:"),p.forEach(o),u=g(s),v(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:me,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){L(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),M(c,s)}}}function og(w){let d,f,u,c,_;return c=new ge({props:{code:`from transformers import (
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
[<span class="hljs-string">&quot;It might be possible to get a better understanding of the nature of the problem, but it&#x27;s not&quot;</span>]`}}),{c(){d=a("p"),f=t("Examples:"),u=m(),k(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Examples:"),p.forEach(o),u=g(s),v(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:me,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){L(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),M(c,s)}}}function sg(w){let d,f,u,c,_;return c=new ge({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Today is a beautiful day, and a wonderful day.\\n\\nI was lucky enough to meet the&#x27;</span>]`}}),{c(){d=a("p"),f=t("Examples:"),u=m(),k(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Examples:"),p.forEach(o),u=g(s),v(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:me,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){L(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),M(c,s)}}}function ag(w){let d,f,u,c,_;return c=new ge({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),{c(){d=a("p"),f=t("Examples:"),u=m(),k(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Examples:"),p.forEach(o),u=g(s),v(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:me,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){L(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),M(c,s)}}}function rg(w){let d,f,u,c,_;return c=new ge({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),{c(){d=a("p"),f=t("Examples:"),u=m(),k(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Examples:"),p.forEach(o),u=g(s),v(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:me,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){L(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),M(c,s)}}}function ig(w){let d,f,u,c,_;return c=new ge({props:{code:`from transformers import (
    AutoTokenizer,
    AutoModelForCausalLM,
    StoppingCriteriaList,
    MaxLengthCriteria,
)

tokenizer = AutoTokenizer.from_pretrained("facebook/opt-125m")
model = AutoModelForCausalLM.from_pretrained("facebook/opt-125m")
# set pad_token_id to eos_token_id because GPT2 does not have a PAD token
model.config.pad_token_id = model.config.eos_token_id
input_prompt = "DeepMind Company is"
input_ids = tokenizer(input_prompt, return_tensors="pt")
stopping_criteria = StoppingCriteriaList([MaxLengthCriteria(max_length=64)])
outputs = model.contrastive_search(
    **input_ids, penalty_alpha=0.6, top_k=4, stopping_criteria=stopping_criteria
)
tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForCausalLM,
<span class="hljs-meta">... </span>    StoppingCriteriaList,
<span class="hljs-meta">... </span>    MaxLengthCriteria,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-125m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/opt-125m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set pad_token_id to eos_token_id because GPT2 does not have a PAD token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>input_prompt = <span class="hljs-string">&quot;DeepMind Company is&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>stopping_criteria = StoppingCriteriaList([MaxLengthCriteria(max_length=<span class="hljs-number">64</span>)])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.contrastive_search(
<span class="hljs-meta">... </span>    **input_ids, penalty_alpha=<span class="hljs-number">0.6</span>, top_k=<span class="hljs-number">4</span>, stopping_criteria=stopping_criteria
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;DeepMind Company is a company that focuses on the development and commercialization of artificial intelligence (AI). DeepMind\u2019s mission is to help people understand and solve problems that are difficult to solve in the world today.\\n\\nIn this post, we talk about the benefits of deep learning in business and how it&#x27;</span>]`}}),{c(){d=a("p"),f=t("Examples:"),u=m(),k(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Examples:"),p.forEach(o),u=g(s),v(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:me,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){L(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),M(c,s)}}}function lg(w){let d,f,u,c,_;return c=new ge({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),{c(){d=a("p"),f=t("Examples:"),u=m(),k(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Examples:"),p.forEach(o),u=g(s),v(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:me,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){L(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),M(c,s)}}}function dg(w){let d,f,u,c,_;return c=new ge({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt sind Sie?&#x27;</span>]`}}),{c(){d=a("p"),f=t("Examples:"),u=m(),k(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Examples:"),p.forEach(o),u=g(s),v(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:me,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){L(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),M(c,s)}}}function cg(w){let d,f,u,c,_;return c=new ge({props:{code:`tokenizer = AutoTokenizer.from_pretrained("distilgpt2")  # Initialize tokenizer
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
)  <span class="hljs-comment"># generate sequences without allowing bad_words to be generated</span>`}}),{c(){d=a("p"),f=t("Examples:"),u=m(),k(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Examples:"),p.forEach(o),u=g(s),v(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:me,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){L(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),M(c,s)}}}function pg(w){let d,f,u,c,_,s,p,W,S,H,A;return{c(){d=a("p"),f=t("Apart from "),u=a("code"),c=t("inputs"),_=t(`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),s=a("code"),p=t("config.json"),W=t(`) which in turn defaults to the
`),S=a("a"),H=t("PretrainedConfig"),A=t(" of the model."),this.h()},l(D){d=r(D,"P",{});var T=i(d);f=n(T,"Apart from "),u=r(T,"CODE",{});var Te=i(u);c=n(Te,"inputs"),Te.forEach(o),_=n(T,`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),s=r(T,"CODE",{});var Ee=i(s);p=n(Ee,"config.json"),Ee.forEach(o),W=n(T,`) which in turn defaults to the
`),S=r(T,"A",{href:!0});var be=i(S);H=n(be,"PretrainedConfig"),be.forEach(o),A=n(T," of the model."),T.forEach(o),this.h()},h(){h(S,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig")},m(D,T){x(D,d,T),e(d,f),e(d,u),e(u,c),e(d,_),e(d,s),e(s,p),e(d,W),e(d,S),e(S,H),e(d,A)},d(D){D&&o(d)}}}function mg(w){let d,f,u,c,_;return c=new ge({props:{code:`from transformers import AutoTokenizer, FlaxAutoModelForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){d=a("p"),f=t("Examples:"),u=m(),k(c.$$.fragment)},l(s){d=r(s,"P",{});var p=i(d);f=n(p,"Examples:"),p.forEach(o),u=g(s),v(c.$$.fragment,s)},m(s,p){x(s,d,p),e(d,f),x(s,u,p),y(c,s,p),_=!0},p:me,i(s){_||(j(c.$$.fragment,s),_=!0)},o(s){L(c.$$.fragment,s),_=!1},d(s){s&&o(d),s&&o(u),M(c,s)}}}function gg(w){let d,f,u,c,_,s,p,W,S,H,A,D,T,Te,Ee,be,xe,Oe,ra,pn,ia,la,mn,da,ca,pa,Ge,ma,gn,ga,ua,un,_a,ha,fa,Se,ba,_n,xa,ka,hn,va,ya,qs,qe,rt,Vn,wt,ja,Kn,La,Fs,$,$t,Ma,Tt,wa,fn,$a,Ta,Ea,Et,Oa,bn,Ga,Sa,qa,q,R,Zn,Fa,Aa,xn,za,Pa,Xn,Da,Na,Jn,Ca,Ia,Wa,ue,Qn,Ba,Ha,kn,Ra,Ua,Yn,Va,Ka,eo,Za,Xa,U,to,Ja,Qa,vn,Ya,er,no,tr,nr,oo,or,sr,ar,V,so,rr,ir,yn,lr,dr,ao,cr,pr,ro,mr,gr,ur,K,io,_r,hr,jn,fr,br,lo,xr,kr,co,vr,yr,jr,Z,po,Lr,Mr,Ln,wr,$r,mo,Tr,Er,go,Or,Gr,Sr,X,uo,qr,Fr,Mn,Ar,zr,_o,Pr,Dr,ho,Nr,Cr,Ir,O,Ot,Wr,fo,Br,Hr,F,J,bo,Rr,Ur,wn,Vr,Kr,xo,Zr,Xr,ko,Jr,Qr,Yr,_e,vo,ei,ti,$n,ni,oi,yo,si,ai,jo,ri,ii,Q,Lo,li,di,Tn,ci,pi,Mo,mi,gi,wo,ui,_i,hi,Y,$o,fi,bi,En,xi,ki,To,vi,yi,Eo,ji,Li,Mi,ee,Oo,wi,$i,On,Ti,Ei,Go,Oi,Gi,So,Si,qi,Fi,te,qo,Ai,zi,Gn,Pi,Di,Fo,Ni,Ci,Ao,Ii,Wi,Bi,ne,zo,Hi,Ri,Sn,Ui,Vi,Po,Ki,Zi,Do,Xi,Ji,Qi,it,Yi,Gt,el,St,tl,nl,ol,No,sl,al,lt,rl,dt,il,ct,ll,ke,qt,dl,Ft,cl,Co,pl,ml,gl,pt,ul,ve,At,_l,zt,hl,Io,fl,bl,xl,mt,kl,ye,Pt,vl,Dt,yl,Wo,jl,Ll,Ml,gt,wl,je,Nt,$l,Ct,Tl,Bo,El,Ol,Gl,ut,Sl,Le,It,ql,Wt,Fl,Ho,Al,zl,Pl,_t,Dl,Me,Bt,Nl,Ht,Cl,Ro,Il,Wl,Bl,ht,Hl,we,Rt,Rl,Ut,Ul,Uo,Vl,Kl,Zl,ft,As,Fe,bt,Vo,Vt,Xl,Ko,Jl,zs,he,Kt,Ql,Zt,Yl,qn,ed,td,nd,z,Xt,od,Zo,sd,ad,Jt,rd,Qt,id,ld,dd,fe,cd,Xo,pd,md,Jo,gd,ud,Fn,_d,hd,fd,Yt,bd,en,xd,kd,vd,xt,Ps,Ae,kt,Qo,tn,yd,Yo,jd,Ds,N,nn,Ld,on,Md,An,wd,$d,Td,sn,Ed,zn,Od,Gd,Sd,ze,oe,es,qd,Fd,ts,Ad,zd,ns,Pd,Dd,os,Nd,Cd,Id,se,ss,Wd,Bd,as,Hd,Rd,rs,Ud,Vd,is,Kd,Zd,Xd,ae,ls,Jd,Qd,ds,Yd,ec,cs,tc,nc,ps,oc,sc,ac,P,an,rc,ms,ic,lc,Pe,re,gs,dc,cc,us,pc,mc,_s,gc,uc,hs,_c,hc,fc,ie,fs,bc,xc,bs,kc,vc,xs,yc,jc,ks,Lc,Mc,wc,le,vs,$c,Tc,ys,Ec,Oc,js,Gc,Sc,Ls,qc,Fc,Ac,vt,zc,rn,Pc,ln,Dc,Nc,Cc,yt,Ns;return s=new aa({}),wt=new aa({}),$t=new B({props:{name:"class transformers.generation_utils.GenerationMixin",anchor:"transformers.generation_utils.GenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L442"}}),Ot=new B({props:{name:"generate",anchor:"transformers.generation_utils.GenerationMixin.generate",parameters:[{name:"inputs",val:": typing.Optional[torch.Tensor] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"penalty_alpha",val:": typing.Optional[float] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"typical_p",val:": typing.Optional[float] = None"},{name:"repetition_penalty",val:": typing.Optional[float] = None"},{name:"bad_words_ids",val:": typing.Optional[typing.Iterable[int]] = None"},{name:"force_words_ids",val:": typing.Union[typing.Iterable[int], typing.Iterable[typing.Iterable[int]], NoneType] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"encoder_no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"num_return_sequences",val:": typing.Optional[int] = None"},{name:"max_time",val:": typing.Optional[float] = None"},{name:"max_new_tokens",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"num_beam_groups",val:": typing.Optional[int] = None"},{name:"diversity_penalty",val:": typing.Optional[float] = None"},{name:"prefix_allowed_tokens_fn",val:": typing.Union[typing.Callable[[int, torch.Tensor], typing.List[int]], NoneType] = None"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"renormalize_logits",val:": typing.Optional[bool] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"constraints",val:": typing.Optional[typing.List[transformers.generation_beam_constraints.Constraint]] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"remove_invalid_values",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"exponential_decay_length_penalty",val:": typing.Union[typing.Tuple[int, float], NoneType] = None"},{name:"suppress_tokens",val:": typing.Optional[typing.List[int]] = None"},{name:"begin_suppress_tokens",val:": typing.Optional[typing.List[int]] = None"},{name:"forced_decoder_ids",val:": typing.Optional[typing.List[typing.List[int]]] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.generate.inputs",description:`<strong>inputs</strong> (<code>torch.Tensor</code> of varying shape depending on the modality, <em>optional</em>) &#x2014;
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
The value used to module the next token probabilities.`,name:"temperature"},{anchor:"transformers.generation_utils.GenerationMixin.generate.penalty_alpha",description:`<strong>penalty_alpha</strong> (<code>float</code>, <em>optional</em>, defaults to <code>model.config.penalty_alpha</code> or None if the config does not set any value) &#x2014;
The values balance the model confidence and the degeneration penalty in contrastive search decoding.`,name:"penalty_alpha"},{anchor:"transformers.generation_utils.GenerationMixin.generate.top_k",description:`<strong>top_k</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.top_k</code> or 50 if the config does not set any value) &#x2014;
The number of highest probability vocabulary tokens to keep for top-k-filtering.`,name:"top_k"},{anchor:"transformers.generation_utils.GenerationMixin.generate.top_p",description:`<strong>top_p</strong> (<code>float</code>, <em>optional</em>, defaults to <code>model.config.top_p</code> or 1.0 if the config does not set any value) &#x2014;
If set to float &lt; 1, only the smallest set of most probable tokens with probabilities that add up to
<code>top_p</code> or higher are kept for generation.`,name:"top_p"},{anchor:"transformers.generation_utils.GenerationMixin.generate.typical_p",description:`<strong>typical_p</strong> (<code>float</code>, <em>optional</em>, defaults to <code>model.config.typical_p</code> or 1.0 if the config does not set any value) &#x2014;
The amount of probability mass from the original distribution to be considered in typical decoding. If
set to 1.0 it takes no effect. See <a href="https://arxiv.org/pdf/2202.00666.pdf" rel="nofollow">this paper</a> for more details.`,name:"typical_p"},{anchor:"transformers.generation_utils.GenerationMixin.generate.repetition_penalty",description:`<strong>repetition_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to <code>model.config.repetition_penalty</code> or 1.0 if the config does not set any value) &#x2014;
The parameter for repetition penalty. 1.0 means no penalty. See <a href="https://arxiv.org/pdf/1909.05858.pdf" rel="nofollow">this
paper</a> for more details.`,name:"repetition_penalty"},{anchor:"transformers.generation_utils.GenerationMixin.generate.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.pad_token_id</code>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.bos_token_id</code>) &#x2014;
The id of the <em>beginning-of-sequence</em> token.`,name:"bos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.eos_token_id</code>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.length_penalty",description:`<strong>length_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to <code>model.config.length_penalty</code> or 1.0 if the config does not set any value) &#x2014;
Exponential penalty to the length that is used with beam-based generation. It is applied as an exponent
to the sequence length, which in turn is used to divide the score of the sequence. Since the score is
the log likelihood of the sequence (i.e. negative), <code>length_penalty</code> &gt; 0.0 promotes longer sequences,
while <code>length_penalty</code> &lt; 0.0 encourages shorter sequences.`,name:"length_penalty"},{anchor:"transformers.generation_utils.GenerationMixin.generate.no_repeat_ngram_size",description:`<strong>no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.no_repeat_ngram_size</code> or 0 if the config does not set any value) &#x2014;
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
If an encoder-decoder model starts decoding with a different token than <em>bos</em>, the id of that token.`,name:"decoder_start_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should use the past last key/values attentions (if applicable to the model) to
speed up decoding.`,name:"use_cache"},{anchor:"transformers.generation_utils.GenerationMixin.generate.num_beam_groups",description:`<strong>num_beam_groups</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.num_beam_groups</code> or 1 if the config does not set any value) &#x2014;
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
config an error is thrown. This feature is intended for advanced users.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.generate.renormalize_logits",description:`<strong>renormalize_logits</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to renormalize the logits after applying all the logits processors or warpers (including the
custom ones). It&#x2019;s highly recommended to set this flag to <code>True</code> as the search algorithms suppose the
score logits are normalized but some logit processors or warpers break the normalization.`,name:"renormalize_logits"},{anchor:"transformers.generation_utils.GenerationMixin.generate.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.generate.forced_bos_token_id",description:`<strong>forced_bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.forced_bos_token_id</code>) &#x2014;
The id of the token to force as the first generated token after the <code>decoder_start_token_id</code>. Useful
for multilingual models like <a href="../model_doc/mbart">mBART</a> where the first generated token needs to be
the target language token.`,name:"forced_bos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.forced_eos_token_id</code>) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached.`,name:"forced_eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.remove_invalid_values",description:`<strong>remove_invalid_values</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>model.config.remove_invalid_values</code>) &#x2014;
Whether to remove possible <em>nan</em> and <em>inf</em> outputs of the model to prevent the generation method to
crash. Note that using <code>remove_invalid_values</code> can slow down generation.`,name:"remove_invalid_values"},{anchor:"transformers.generation_utils.GenerationMixin.generate.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)`,name:"synced_gpus"},{anchor:"transformers.generation_utils.GenerationMixin.generate.exponential_decay_length_penalty",description:`<strong>exponential_decay_length_penalty</strong> (<code>tuple(int, float)</code>, <em>optional</em>, defaults to <code>model.config.exponential_decay_length_penalty</code>) &#x2014;
This Tuple adds an exponentially increasing length penalty, after a certain amount of tokens have been
generated. The tuple shall consist of: <code>(start_index, decay_factor)</code> where <code>start_index</code> indicates
where penalty starts and <code>decay_factor</code> represents the factor of exponential decay`,name:"exponential_decay_length_penalty"},{anchor:"transformers.generation_utils.GenerationMixin.generate.suppress_tokens",description:`<strong>suppress_tokens</strong>  (<code>List[int]</code>, <em>optional</em>, defaults to <code>model.config.suppress_tokens</code>) &#x2014;
A list of tokens that will be supressed at generation. The <code>SupressTokens</code> logit processor will set
their log probs to <code>-inf</code> so that they are not sampled.`,name:"suppress_tokens"},{anchor:"transformers.generation_utils.GenerationMixin.generate.begin_suppress_tokens",description:`<strong>begin_suppress_tokens</strong>  (<code>List[int]</code>, <em>optional</em>, defaults to <code>model.config.begin_suppress_tokens</code>) &#x2014;
A list of tokens that will be supressed at the begining of the generation. The <code>SupressBeginTokens</code>
logit processor will set their log probs to <code>-inf</code> so that they are not sampled.`,name:"begin_suppress_tokens"},{anchor:"transformers.generation_utils.GenerationMixin.generate.forced_decoder_ids",description:`<strong>forced_decoder_ids</strong> (<code>List[List[int]]</code>, <em>optional</em>, defaults to <code>model.config.forced_decoder_ids</code>) &#x2014;
A list of pairs of integers which indicates a mapping from generation indices to token indices that
will be forced before sampling. For example, <code>[[1, 123]]</code> means the second generated token will always
be a token of index 123.
model<em>kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If the model
is an encoder-decoder model, encoder specific kwargs should not be prefixed and decoder specific kwargs
should be prefixed with *decoder</em>*.`,name:"forced_decoder_ids"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L969",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> (if <code>return_dict_in_generate=True</code>
or when <code>config.return_dict_in_generate=True</code>) or a <code>torch.FloatTensor</code>.</p>
<p>If the model is <em>not</em> an encoder-decoder model (<code>model.config.is_encoder_decoder=False</code>), the possible
<a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.GreedySearchDecoderOnlyOutput"
>GreedySearchDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.SampleDecoderOnlyOutput"
>SampleDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSampleDecoderOnlyOutput"
>BeamSampleDecoderOnlyOutput</a></li>
</ul>
<p>If the model is an encoder-decoder model (<code>model.config.is_encoder_decoder=True</code>), the possible
<a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.GreedySearchEncoderDecoderOutput"
>GreedySearchEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.SampleEncoderDecoderOutput"
>SampleEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSampleEncoderDecoderOutput"
>BeamSampleEncoderDecoderOutput</a></li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> or <code>torch.LongTensor</code></p>
`}}),it=new Vm({props:{warning:!0,$$slots:{default:[Ym]},$$scope:{ctx:w}}}),lt=new pe({props:{anchor:"transformers.generation_utils.GenerationMixin.generate.example",$$slots:{default:[eg]},$$scope:{ctx:w}}}),dt=new pe({props:{anchor:"transformers.generation_utils.GenerationMixin.generate.example-2",$$slots:{default:[tg]},$$scope:{ctx:w}}}),ct=new pe({props:{anchor:"transformers.generation_utils.GenerationMixin.generate.example-3",$$slots:{default:[ng]},$$scope:{ctx:w}}}),qt=new B({props:{name:"greedy_search",anchor:"transformers.generation_utils.GenerationMixin.greedy_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific keyword arguments will be forwarded to the <code>forward</code> function of the model.
If model is an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L2085",returnDescription:`
<p><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.GreedySearchDecoderOnlyOutput"
>GreedySearchDecoderOnlyOutput</a>, <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.GreedySearchEncoderDecoderOutput"
>GreedySearchEncoderDecoderOutput</a>
or <code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.GreedySearchDecoderOnlyOutput"
>GreedySearchDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.GreedySearchEncoderDecoderOutput"
>GreedySearchEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),pt=new pe({props:{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.example",$$slots:{default:[og]},$$scope:{ctx:w}}}),At=new B({props:{name:"sample",anchor:"transformers.generation_utils.GenerationMixin.sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.sample.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.sample.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.sample.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.sample.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L2313",returnDescription:`
<p><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.SampleDecoderOnlyOutput"
>SampleDecoderOnlyOutput</a>, <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.SampleEncoderDecoderOutput"
>SampleEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.SampleDecoderOnlyOutput"
>SampleDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.SampleEncoderDecoderOutput"
>SampleEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),mt=new pe({props:{anchor:"transformers.generation_utils.GenerationMixin.sample.example",$$slots:{default:[sg]},$$scope:{ctx:w}}}),Pt=new B({props:{name:"beam_search",anchor:"transformers.generation_utils.GenerationMixin.beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
An derived instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L2564",returnDescription:`
<p><code>generation_utilsBeamSearchDecoderOnlyOutput</code>, <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),gt=new pe({props:{anchor:"transformers.generation_utils.GenerationMixin.beam_search.example",$$slots:{default:[ag]},$$scope:{ctx:w}}}),Nt=new B({props:{name:"beam_sample",anchor:"transformers.generation_utils.GenerationMixin.beam_sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
A derived instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L2873",returnDescription:`
<p><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSampleDecoderOnlyOutput"
>BeamSampleDecoderOnlyOutput</a>, <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSampleEncoderDecoderOutput"
>BeamSampleEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSampleDecoderOnlyOutput"
>BeamSampleDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSampleEncoderDecoderOutput"
>BeamSampleEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),ut=new pe({props:{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.example",$$slots:{default:[rg]},$$scope:{ctx:w}}}),It=new B({props:{name:"contrastive_search",anchor:"transformers.generation_utils.GenerationMixin.contrastive_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"top_k",val:": typing.Optional[int] = 1"},{name:"penalty_alpha",val:": typing.Optional[float] = 0"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.contrastive_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.contrastive_search.top_k",description:`<strong>top_k</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The size of the candidate set that is used to re-rank for contrastive search`,name:"top_k"},{anchor:"transformers.generation_utils.GenerationMixin.contrastive_search.penalty_alpha",description:`<strong>penalty_alpha</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The degeneration penalty for contrastive search; activate when it is larger than 0`,name:"penalty_alpha"},{anchor:"transformers.generation_utils.GenerationMixin.contrastive_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.contrastive_search.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
to warp the prediction score distribution of the language modeling head applied before multinomial
sampling at each generation step.`,name:"logits_warper"},{anchor:"transformers.generation_utils.GenerationMixin.contrastive_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.contrastive_search.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.contrastive_search.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.contrastive_search.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_utils.GenerationMixin.contrastive_search.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_utils.GenerationMixin.contrastive_search.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_utils.GenerationMixin.contrastive_search.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.contrastive_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific keyword arguments will be forwarded to the <code>forward</code> function of the model.
If model is an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L1758",returnDescription:`
<p><code>ContrastiveSearchDecoderOnlyOutput</code>,
<code>ContrastiveSearchEncoderDecoderOutput</code> or <code>torch.LongTensor</code>: A <code>torch.LongTensor</code>
containing the generated tokens (default behaviour) or a
<code>ContrastiveSearchDecoderOnlyOutput</code> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <code>ContrastiveSearchEncoderDecoderOutput</code> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),_t=new pe({props:{anchor:"transformers.generation_utils.GenerationMixin.contrastive_search.example",$$slots:{default:[ig]},$$scope:{ctx:w}}}),Bt=new B({props:{name:"group_beam_search",anchor:"transformers.generation_utils.GenerationMixin.group_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
An derived instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)</p>
<p>model_kwargs &#x2014;
Additional model specific kwargs that will be forwarded to the <code>forward</code> function of the model. If
model is an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L3189",returnDescription:`
<p><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a>, <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if
<code>model.config.is_encoder_decoder=False</code> and <code>return_dict_in_generate=True</code> or a
<a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> if <code>model.config.is_encoder_decoder=True</code>.</p>
`}}),ht=new pe({props:{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.example",$$slots:{default:[lg]},$$scope:{ctx:w}}}),Rt=new B({props:{name:"constrained_beam_search",anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"constrained_beam_scorer",val:": ConstrainedBeamSearchScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.constrained_beam_scorer",description:`<strong>constrained_beam_scorer</strong> (<code>ConstrainedBeamSearchScorer</code>) &#x2014;
A derived instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation, while satisfying a list of positive constraints. For more information, the
documentation of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.ConstrainedBeamSearchScorer">ConstrainedBeamSearchScorer</a> should be read.`,name:"constrained_beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L3551",returnDescription:`
<p><code>generation_utilsBeamSearchDecoderOnlyOutput</code>, <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),ft=new pe({props:{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.example",$$slots:{default:[dg]},$$scope:{ctx:w}}}),Vt=new aa({}),Kt=new B({props:{name:"class transformers.generation_tf_utils.TFGenerationMixin",anchor:"transformers.generation_tf_utils.TFGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_tf_utils.py#L354"}}),Xt=new B({props:{name:"generate",anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate",parameters:[{name:"input_ids",val:" = None"},{name:"max_length",val:" = None"},{name:"max_new_tokens",val:" = None"},{name:"min_length",val:" = None"},{name:"do_sample",val:" = None"},{name:"early_stopping",val:" = None"},{name:"num_beams",val:" = None"},{name:"temperature",val:" = None"},{name:"top_k",val:" = None"},{name:"top_p",val:" = None"},{name:"repetition_penalty",val:" = None"},{name:"bad_words_ids",val:" = None"},{name:"bos_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"eos_token_id",val:" = None"},{name:"length_penalty",val:" = None"},{name:"no_repeat_ngram_size",val:" = None"},{name:"num_return_sequences",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_start_token_id",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_scores",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict_in_generate",val:" = None"},{name:"forced_bos_token_id",val:" = None"},{name:"forced_eos_token_id",val:" = None"},{name:"suppress_tokens",val:": typing.Optional[typing.List[int]] = None"},{name:"begin_suppress_tokens",val:": typing.Optional[typing.List[int]] = None"},{name:"forced_decoder_ids",val:": typing.Optional[typing.List[typing.List[int]]] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.input_ids",description:"<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, `(batch_size, sequence_length, &#x2014;",name:"input_ids"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.feature_dim)`",description:`<strong>feature_dim)\`</strong> or <code>(batch_size, num_channels, height, width)</code>, <em>optional</em>) &#x2014;
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
Exponential penalty to the length that is used with beam-based generation. It is applied as an exponent
to the sequence length, which in turn is used to divide the score of the sequence. Since the score is
the log likelihood of the sequence (i.e. negative), <code>length_penalty</code> &gt; 0.0 promotes longer sequences,
while <code>length_penalty</code> &lt; 0.0 encourages shorter sequences.`,name:"length_penalty"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.no_repeat_ngram_size",description:`<strong>no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to int &gt; 0, all ngrams of that size can only occur once.`,name:"no_repeat_ngram_size"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.bad_words_ids(List[int],",description:`<strong>bad_words_ids(<code>List[int]</code>,</strong> <em>optional</em>) &#x2014;
List of token ids that are not allowed to be generated. In order to get the tokens of the words that
should not appear in the generated text, use <code>tokenizer.encode(bad_word, add_prefix_space=True)</code>.`,name:"bad_words_ids(List[int],"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.num_return_sequences(int,",description:`<strong>num_return_sequences(<code>int</code>,</strong> <em>optional</em>, defaults to 1) &#x2014;
The number of independently computed returned sequences for each element in the batch.`,name:"num_return_sequences(int,"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of <code>dtype=tf.int32</code> and shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values are in <code>[0, 1]</code>, 1 for tokens
that are not masked, and 0 for masked tokens.</p>
<p>If not provided, will default to a tensor the same shape as <code>input_ids</code> that masks the pad token.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.decoder_start_token_id",description:`<strong>decoder_start_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If an encoder-decoder model starts decoding with a different token than <em>bos</em>, the id of that token.`,name:"decoder_start_token_id"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should use the past last key/values attentions (if applicable to the model) to
speed up decoding.`,name:"use_cache"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.forced_bos_token_id",description:`<strong>forced_bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the first generated token after the <code>decoder_start_token_id</code>. Useful
for multilingual models like <a href="../model_doc/mbart">mBART</a> where the first generated token needs to be
the target language token.`,name:"forced_bos_token_id"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached.`,name:"forced_eos_token_id"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.suppress_tokens",description:`<strong>suppress_tokens</strong>  (<code>List[int]</code>, <em>optional</em>, defaults to <code>model.config.suppress_tokens</code>) &#x2014;
A list of tokens that will be supressed at generation. The <code>SupressTokens</code> logit processor will set
their log probs to <code>-inf</code> so that they are not sampled.`,name:"suppress_tokens"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.begin_suppress_tokens",description:`<strong>begin_suppress_tokens</strong>  (<code>List[int]</code>, <em>optional</em>, defaults to <code>model.config.begin_suppress_tokens</code>) &#x2014;
A list of tokens that will be supressed at the begining of the generation. The <code>SupressBeginTokens</code>
logit processor will set their log probs to <code>-inf</code> so that they are not sampled.`,name:"begin_suppress_tokens"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.forced_decoder_ids",description:`<strong>forced_decoder_ids</strong> (<code>List[List[int]]</code>, <em>optional</em>, defaults to <code>model.config.forced_decoder_ids</code>) &#x2014;
A list of pairs of integers which indicates a mapping from generation indices to token indices that
will be forced before sampling. For example, <code>[[1, 123]]</code> means the second generated token will always
be a token of index 123.
model_specific_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model.`,name:"forced_decoder_ids"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_tf_utils.py#L379",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> (if <code>return_dict_in_generate=True</code> or when
<code>config.return_dict_in_generate=True</code>) or a <code>tf.Tensor</code>.</p>
<p>If the model is <em>not</em> an encoder-decoder model (<code>model.config.is_encoder_decoder=False</code>), the possible
<a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><code>TFGreedySearchDecoderOnlyOutput</code>,</li>
<li><code>TFSampleDecoderOnlyOutput</code>,</li>
<li><code>TFBeamSearchDecoderOnlyOutput</code>,</li>
<li><code>TFBeamSampleDecoderOnlyOutput</code></li>
</ul>
<p>If the model is an encoder-decoder model (<code>model.config.is_encoder_decoder=True</code>), the possible
<a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><code>TFGreedySearchEncoderDecoderOutput</code>,</li>
<li><code>TFSampleEncoderDecoderOutput</code>,</li>
<li><code>TFBeamSearchEncoderDecoderOutput</code>,</li>
<li><code>TFBeamSampleEncoderDecoderOutput</code></li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> or <code>tf.Tensor</code></p>
`}}),xt=new pe({props:{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.example",$$slots:{default:[cg]},$$scope:{ctx:w}}}),tn=new aa({}),nn=new B({props:{name:"class transformers.generation_flax_utils.FlaxGenerationMixin",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_flax_utils.py#L125"}}),an=new B({props:{name:"generate",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate",parameters:[{name:"input_ids",val:": ndarray"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"max_new_tokens",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"prng_key",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"trace",val:": bool = True"},{name:"params",val:": typing.Union[typing.Dict[str, jax._src.numpy.ndarray.ndarray], NoneType] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
should be prefixed with *decoder</em>*. Also accepts <code>encoder_outputs</code> to skip encoder part.`,name:"params"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_flax_utils.py#L211",returnDescription:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a>.</p>
`}}),vt=new Vm({props:{warning:!0,$$slots:{default:[pg]},$$scope:{ctx:w}}}),yt=new pe({props:{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.example",$$slots:{default:[mg]},$$scope:{ctx:w}}}),{c(){d=a("meta"),f=m(),u=a("h1"),c=a("a"),_=a("span"),k(s.$$.fragment),p=m(),W=a("span"),S=t("Generation"),H=m(),A=a("p"),D=t("Each framework has a generate method for auto-regressive text generation implemented in their respective "),T=a("code"),Te=t("GenerationMixin"),Ee=t(" class:"),be=m(),xe=a("ul"),Oe=a("li"),ra=t("PyTorch "),pn=a("a"),ia=t("generate()"),la=t(" is implemented in "),mn=a("a"),da=t("GenerationMixin"),ca=t("."),pa=m(),Ge=a("li"),ma=t("TensorFlow "),gn=a("a"),ga=t("generate()"),ua=t(" is implemented in "),un=a("a"),_a=t("TFGenerationMixin"),ha=t("."),fa=m(),Se=a("li"),ba=t("Flax/JAX "),_n=a("a"),xa=t("generate()"),ka=t(" is implemented in "),hn=a("a"),va=t("FlaxGenerationMixin"),ya=t("."),qs=m(),qe=a("h2"),rt=a("a"),Vn=a("span"),k(wt.$$.fragment),ja=m(),Kn=a("span"),La=t("GenerationMixin"),Fs=m(),$=a("div"),k($t.$$.fragment),Ma=m(),Tt=a("p"),wa=t("A class containing all functions for auto-regressive text generation, to be used as a mixin in "),fn=a("a"),$a=t("PreTrainedModel"),Ta=t("."),Ea=m(),Et=a("p"),Oa=t("The class exposes "),bn=a("a"),Ga=t("generate()"),Sa=t(", which can be used for:"),qa=m(),q=a("ul"),R=a("li"),Zn=a("em"),Fa=t("greedy decoding"),Aa=t(" by calling "),xn=a("a"),za=t("greedy_search()"),Pa=t(" if "),Xn=a("code"),Da=t("num_beams=1"),Na=t(` and
`),Jn=a("code"),Ca=t("do_sample=False"),Ia=t("."),Wa=m(),ue=a("li"),Qn=a("em"),Ba=t("contrastive search"),Ha=t(" by calling "),kn=a("a"),Ra=t("contrastive_search()"),Ua=t(" if "),Yn=a("code"),Va=t("penalty_alpha>0"),Ka=t(`
and `),eo=a("code"),Za=t("top_k>1"),Xa=m(),U=a("li"),to=a("em"),Ja=t("multinomial sampling"),Qa=t(" by calling "),vn=a("a"),Ya=t("sample()"),er=t(" if "),no=a("code"),tr=t("num_beams=1"),nr=t(` and
`),oo=a("code"),or=t("do_sample=True"),sr=t("."),ar=m(),V=a("li"),so=a("em"),rr=t("beam-search decoding"),ir=t(" by calling "),yn=a("a"),lr=t("beam_search()"),dr=t(" if "),ao=a("code"),cr=t("num_beams>1"),pr=t(` and
`),ro=a("code"),mr=t("do_sample=False"),gr=t("."),ur=m(),K=a("li"),io=a("em"),_r=t("beam-search multinomial sampling"),hr=t(" by calling "),jn=a("a"),fr=t("beam_sample()"),br=t(` if
`),lo=a("code"),xr=t("num_beams>1"),kr=t(" and "),co=a("code"),vr=t("do_sample=True"),yr=t("."),jr=m(),Z=a("li"),po=a("em"),Lr=t("diverse beam-search decoding"),Mr=t(" by calling "),Ln=a("a"),wr=t("group_beam_search()"),$r=t(`, if
`),mo=a("code"),Tr=t("num_beams>1"),Er=t(" and "),go=a("code"),Or=t("num_beam_groups>1"),Gr=t("."),Sr=m(),X=a("li"),uo=a("em"),qr=t("constrained beam-search decoding"),Fr=t(" by calling "),Mn=a("a"),Ar=t("constrained_beam_search()"),zr=t(`,
if `),_o=a("code"),Pr=t("constraints!=None"),Dr=t(" or "),ho=a("code"),Nr=t("force_words_ids!=None"),Cr=t("."),Ir=m(),O=a("div"),k(Ot.$$.fragment),Wr=m(),fo=a("p"),Br=t(`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),Hr=m(),F=a("ul"),J=a("li"),bo=a("em"),Rr=t("greedy decoding"),Ur=t(" by calling "),wn=a("a"),Vr=t("greedy_search()"),Kr=t(" if "),xo=a("code"),Zr=t("num_beams=1"),Xr=t(` and
`),ko=a("code"),Jr=t("do_sample=False"),Qr=t("."),Yr=m(),_e=a("li"),vo=a("em"),ei=t("contrastive search"),ti=t(" by calling "),$n=a("a"),ni=t("contrastive_search()"),oi=t(` if
`),yo=a("code"),si=t("penalty_alpha>0."),ai=t(" and "),jo=a("code"),ri=t("top_k>1"),ii=m(),Q=a("li"),Lo=a("em"),li=t("multinomial sampling"),di=t(" by calling "),Tn=a("a"),ci=t("sample()"),pi=t(" if "),Mo=a("code"),mi=t("num_beams=1"),gi=t(` and
`),wo=a("code"),ui=t("do_sample=True"),_i=t("."),hi=m(),Y=a("li"),$o=a("em"),fi=t("beam-search decoding"),bi=t(" by calling "),En=a("a"),xi=t("beam_search()"),ki=t(" if "),To=a("code"),vi=t("num_beams>1"),yi=t(` and
`),Eo=a("code"),ji=t("do_sample=False"),Li=t("."),Mi=m(),ee=a("li"),Oo=a("em"),wi=t("beam-search multinomial sampling"),$i=t(" by calling "),On=a("a"),Ti=t("beam_sample()"),Ei=t(` if
`),Go=a("code"),Oi=t("num_beams>1"),Gi=t(" and "),So=a("code"),Si=t("do_sample=True"),qi=t("."),Fi=m(),te=a("li"),qo=a("em"),Ai=t("diverse beam-search decoding"),zi=t(" by calling "),Gn=a("a"),Pi=t("group_beam_search()"),Di=t(`, if
`),Fo=a("code"),Ni=t("num_beams>1"),Ci=t(" and "),Ao=a("code"),Ii=t("num_beam_groups>1"),Wi=t("."),Bi=m(),ne=a("li"),zo=a("em"),Hi=t("constrained beam-search decoding"),Ri=t(` by calling
`),Sn=a("a"),Ui=t("constrained_beam_search()"),Vi=t(", if "),Po=a("code"),Ki=t("constraints!=None"),Zi=t(` or
`),Do=a("code"),Xi=t("force_words_ids!=None"),Ji=t("."),Qi=m(),k(it.$$.fragment),Yi=m(),Gt=a("p"),el=t("Most of these parameters are explained in more detail in "),St=a("a"),tl=t(`this blog
post`),nl=t("."),ol=m(),No=a("p"),sl=t("Examples:"),al=m(),k(lt.$$.fragment),rl=m(),k(dt.$$.fragment),il=m(),k(ct.$$.fragment),ll=m(),ke=a("div"),k(qt.$$.fragment),dl=m(),Ft=a("p"),cl=t("Generates sequences of token ids for models with a language modeling head using "),Co=a("strong"),pl=t("greedy decoding"),ml=t(` and can be
used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),gl=m(),k(pt.$$.fragment),ul=m(),ve=a("div"),k(At.$$.fragment),_l=m(),zt=a("p"),hl=t("Generates sequences of token ids for models with a language modeling head using "),Io=a("strong"),fl=t("multinomial sampling"),bl=t(` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),xl=m(),k(mt.$$.fragment),kl=m(),ye=a("div"),k(Pt.$$.fragment),vl=m(),Dt=a("p"),yl=t("Generates sequences of token ids for models with a language modeling head using "),Wo=a("strong"),jl=t("beam search decoding"),Ll=t(` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Ml=m(),k(gt.$$.fragment),wl=m(),je=a("div"),k(Nt.$$.fragment),$l=m(),Ct=a("p"),Tl=t("Generates sequences of token ids for models with a language modeling head using "),Bo=a("strong"),El=t(`beam search multinomial
sampling`),Ol=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Gl=m(),k(ut.$$.fragment),Sl=m(),Le=a("div"),k(It.$$.fragment),ql=m(),Wt=a("p"),Fl=t("Generates sequences of token ids for models with a language modeling head using "),Ho=a("strong"),Al=t("contrastive search"),zl=t(` and can
be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Pl=m(),k(_t.$$.fragment),Dl=m(),Me=a("div"),k(Bt.$$.fragment),Nl=m(),Ht=a("p"),Cl=t("Generates sequences of token ids for models with a language modeling head using "),Ro=a("strong"),Il=t(`diverse beam search
decoding`),Wl=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Bl=m(),k(ht.$$.fragment),Hl=m(),we=a("div"),k(Rt.$$.fragment),Rl=m(),Ut=a("p"),Ul=t("Generates sequences of token ids for models with a language modeling head using "),Uo=a("strong"),Vl=t(`constrained beam search
decoding`),Kl=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Zl=m(),k(ft.$$.fragment),As=m(),Fe=a("h2"),bt=a("a"),Vo=a("span"),k(Vt.$$.fragment),Xl=m(),Ko=a("span"),Jl=t("TFGenerationMixin"),zs=m(),he=a("div"),k(Kt.$$.fragment),Ql=m(),Zt=a("p"),Yl=t("A class containing all of the functions supporting generation, to be used as a mixin in "),qn=a("a"),ed=t("TFPreTrainedModel"),td=t("."),nd=m(),z=a("div"),k(Xt.$$.fragment),od=m(),Zo=a("p"),sd=t(`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),ad=m(),Jt=a("p"),rd=t("Adapted in part from "),Qt=a("a"),id=t(`Facebook\u2019s XLM beam search
code`),ld=t("."),dd=m(),fe=a("p"),cd=t("Apart from "),Xo=a("code"),pd=t("input_ids"),md=t(" and "),Jo=a("code"),gd=t("attention_mask"),ud=t(`, all the arguments below will default to the value of the attribute
of the same name inside the `),Fn=a("a"),_d=t("PretrainedConfig"),hd=t(` of the model. The default values indicated are the default
values of those config.`),fd=m(),Yt=a("p"),bd=t("Most of these parameters are explained in more detail in "),en=a("a"),xd=t(`this blog
post`),kd=t("."),vd=m(),k(xt.$$.fragment),Ps=m(),Ae=a("h2"),kt=a("a"),Qo=a("span"),k(tn.$$.fragment),yd=m(),Yo=a("span"),jd=t("FlaxGenerationMixin"),Ds=m(),N=a("div"),k(nn.$$.fragment),Ld=m(),on=a("p"),Md=t(`A class containing all functions for auto-regressive text generation, to be used as a mixin in
`),An=a("a"),wd=t("FlaxPreTrainedModel"),$d=t("."),Td=m(),sn=a("p"),Ed=t("The class exposes "),zn=a("a"),Od=t("generate()"),Gd=t(", which can be used for:"),Sd=m(),ze=a("ul"),oe=a("li"),es=a("em"),qd=t("greedy decoding"),Fd=t(" by calling "),ts=a("code"),Ad=t("_greedy_search()"),zd=t(` if
`),ns=a("code"),Pd=t("num_beams=1"),Dd=t(" and "),os=a("code"),Nd=t("do_sample=False"),Cd=t("."),Id=m(),se=a("li"),ss=a("em"),Wd=t("multinomial sampling"),Bd=t(" by calling "),as=a("code"),Hd=t("_sample()"),Rd=t(" if "),rs=a("code"),Ud=t("num_beams=1"),Vd=t(`
and `),is=a("code"),Kd=t("do_sample=True"),Zd=t("."),Xd=m(),ae=a("li"),ls=a("em"),Jd=t("beam-search decoding"),Qd=t(" by calling "),ds=a("code"),Yd=t("~generation_utils.FlaxGenerationMixin._beam_search"),ec=t(" if "),cs=a("code"),tc=t("num_beams>1"),nc=t(`
and `),ps=a("code"),oc=t("do_sample=False"),sc=t("."),ac=m(),P=a("div"),k(an.$$.fragment),rc=m(),ms=a("p"),ic=t(`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),lc=m(),Pe=a("ul"),re=a("li"),gs=a("em"),dc=t("greedy decoding"),cc=t(" by calling "),us=a("code"),pc=t("_greedy_search()"),mc=t(` if
`),_s=a("code"),gc=t("num_beams=1"),uc=t(" and "),hs=a("code"),_c=t("do_sample=False"),hc=t("."),fc=m(),ie=a("li"),fs=a("em"),bc=t("multinomial sampling"),xc=t(" by calling "),bs=a("code"),kc=t("_sample()"),vc=t(" if "),xs=a("code"),yc=t("num_beams=1"),jc=t(`
and `),ks=a("code"),Lc=t("do_sample=True"),Mc=t("."),wc=m(),le=a("li"),vs=a("em"),$c=t("beam-search decoding"),Tc=t(" by calling "),ys=a("code"),Ec=t("~generation_utils.FlaxGenerationMixin._beam_search"),Oc=t(" if "),js=a("code"),Gc=t("num_beams>1"),Sc=t(`
and `),Ls=a("code"),qc=t("do_sample=False"),Fc=t("."),Ac=m(),k(vt.$$.fragment),zc=m(),rn=a("p"),Pc=t("Most of these parameters are explained in more detail in "),ln=a("a"),Dc=t(`this blog
post`),Nc=t("."),Cc=m(),k(yt.$$.fragment),this.h()},l(l){const b=Jm('[data-svelte="svelte-1phssyn"]',document.head);d=r(b,"META",{name:!0,content:!0}),b.forEach(o),f=g(l),u=r(l,"H1",{class:!0});var dn=i(u);c=r(dn,"A",{id:!0,class:!0,href:!0});var Ms=i(c);_=r(Ms,"SPAN",{});var ws=i(_);v(s.$$.fragment,ws),ws.forEach(o),Ms.forEach(o),p=g(dn),W=r(dn,"SPAN",{});var $s=i(W);S=n($s,"Generation"),$s.forEach(o),dn.forEach(o),H=g(l),A=r(l,"P",{});var cn=i(A);D=n(cn,"Each framework has a generate method for auto-regressive text generation implemented in their respective "),T=r(cn,"CODE",{});var Ts=i(T);Te=n(Ts,"GenerationMixin"),Ts.forEach(o),Ee=n(cn," class:"),cn.forEach(o),be=g(l),xe=r(l,"UL",{});var De=i(xe);Oe=r(De,"LI",{});var Ne=i(Oe);ra=n(Ne,"PyTorch "),pn=r(Ne,"A",{href:!0});var Es=i(pn);ia=n(Es,"generate()"),Es.forEach(o),la=n(Ne," is implemented in "),mn=r(Ne,"A",{href:!0});var Os=i(mn);da=n(Os,"GenerationMixin"),Os.forEach(o),ca=n(Ne,"."),Ne.forEach(o),pa=g(De),Ge=r(De,"LI",{});var Ce=i(Ge);ma=n(Ce,"TensorFlow "),gn=r(Ce,"A",{href:!0});var Gs=i(gn);ga=n(Gs,"generate()"),Gs.forEach(o),ua=n(Ce," is implemented in "),un=r(Ce,"A",{href:!0});var Ss=i(un);_a=n(Ss,"TFGenerationMixin"),Ss.forEach(o),ha=n(Ce,"."),Ce.forEach(o),fa=g(De),Se=r(De,"LI",{});var Ie=i(Se);ba=n(Ie,"Flax/JAX "),_n=r(Ie,"A",{href:!0});var Ic=i(_n);xa=n(Ic,"generate()"),Ic.forEach(o),ka=n(Ie," is implemented in "),hn=r(Ie,"A",{href:!0});var Wc=i(hn);va=n(Wc,"FlaxGenerationMixin"),Wc.forEach(o),ya=n(Ie,"."),Ie.forEach(o),De.forEach(o),qs=g(l),qe=r(l,"H2",{class:!0});var Cs=i(qe);rt=r(Cs,"A",{id:!0,class:!0,href:!0});var Bc=i(rt);Vn=r(Bc,"SPAN",{});var Hc=i(Vn);v(wt.$$.fragment,Hc),Hc.forEach(o),Bc.forEach(o),ja=g(Cs),Kn=r(Cs,"SPAN",{});var Rc=i(Kn);La=n(Rc,"GenerationMixin"),Rc.forEach(o),Cs.forEach(o),Fs=g(l),$=r(l,"DIV",{class:!0});var E=i($);v($t.$$.fragment,E),Ma=g(E),Tt=r(E,"P",{});var Is=i(Tt);wa=n(Is,"A class containing all functions for auto-regressive text generation, to be used as a mixin in "),fn=r(Is,"A",{href:!0});var Uc=i(fn);$a=n(Uc,"PreTrainedModel"),Uc.forEach(o),Ta=n(Is,"."),Is.forEach(o),Ea=g(E),Et=r(E,"P",{});var Ws=i(Et);Oa=n(Ws,"The class exposes "),bn=r(Ws,"A",{href:!0});var Vc=i(bn);Ga=n(Vc,"generate()"),Vc.forEach(o),Sa=n(Ws,", which can be used for:"),Ws.forEach(o),qa=g(E),q=r(E,"UL",{});var C=i(q);R=r(C,"LI",{});var We=i(R);Zn=r(We,"EM",{});var Kc=i(Zn);Fa=n(Kc,"greedy decoding"),Kc.forEach(o),Aa=n(We," by calling "),xn=r(We,"A",{href:!0});var Zc=i(xn);za=n(Zc,"greedy_search()"),Zc.forEach(o),Pa=n(We," if "),Xn=r(We,"CODE",{});var Xc=i(Xn);Da=n(Xc,"num_beams=1"),Xc.forEach(o),Na=n(We,` and
`),Jn=r(We,"CODE",{});var Jc=i(Jn);Ca=n(Jc,"do_sample=False"),Jc.forEach(o),Ia=n(We,"."),We.forEach(o),Wa=g(C),ue=r(C,"LI",{});var jt=i(ue);Qn=r(jt,"EM",{});var Qc=i(Qn);Ba=n(Qc,"contrastive search"),Qc.forEach(o),Ha=n(jt," by calling "),kn=r(jt,"A",{href:!0});var Yc=i(kn);Ra=n(Yc,"contrastive_search()"),Yc.forEach(o),Ua=n(jt," if "),Yn=r(jt,"CODE",{});var ep=i(Yn);Va=n(ep,"penalty_alpha>0"),ep.forEach(o),Ka=n(jt,`
and `),eo=r(jt,"CODE",{});var tp=i(eo);Za=n(tp,"top_k>1"),tp.forEach(o),jt.forEach(o),Xa=g(C),U=r(C,"LI",{});var Be=i(U);to=r(Be,"EM",{});var np=i(to);Ja=n(np,"multinomial sampling"),np.forEach(o),Qa=n(Be," by calling "),vn=r(Be,"A",{href:!0});var op=i(vn);Ya=n(op,"sample()"),op.forEach(o),er=n(Be," if "),no=r(Be,"CODE",{});var sp=i(no);tr=n(sp,"num_beams=1"),sp.forEach(o),nr=n(Be,` and
`),oo=r(Be,"CODE",{});var ap=i(oo);or=n(ap,"do_sample=True"),ap.forEach(o),sr=n(Be,"."),Be.forEach(o),ar=g(C),V=r(C,"LI",{});var He=i(V);so=r(He,"EM",{});var rp=i(so);rr=n(rp,"beam-search decoding"),rp.forEach(o),ir=n(He," by calling "),yn=r(He,"A",{href:!0});var ip=i(yn);lr=n(ip,"beam_search()"),ip.forEach(o),dr=n(He," if "),ao=r(He,"CODE",{});var lp=i(ao);cr=n(lp,"num_beams>1"),lp.forEach(o),pr=n(He,` and
`),ro=r(He,"CODE",{});var dp=i(ro);mr=n(dp,"do_sample=False"),dp.forEach(o),gr=n(He,"."),He.forEach(o),ur=g(C),K=r(C,"LI",{});var Re=i(K);io=r(Re,"EM",{});var cp=i(io);_r=n(cp,"beam-search multinomial sampling"),cp.forEach(o),hr=n(Re," by calling "),jn=r(Re,"A",{href:!0});var pp=i(jn);fr=n(pp,"beam_sample()"),pp.forEach(o),br=n(Re,` if
`),lo=r(Re,"CODE",{});var mp=i(lo);xr=n(mp,"num_beams>1"),mp.forEach(o),kr=n(Re," and "),co=r(Re,"CODE",{});var gp=i(co);vr=n(gp,"do_sample=True"),gp.forEach(o),yr=n(Re,"."),Re.forEach(o),jr=g(C),Z=r(C,"LI",{});var Ue=i(Z);po=r(Ue,"EM",{});var up=i(po);Lr=n(up,"diverse beam-search decoding"),up.forEach(o),Mr=n(Ue," by calling "),Ln=r(Ue,"A",{href:!0});var _p=i(Ln);wr=n(_p,"group_beam_search()"),_p.forEach(o),$r=n(Ue,`, if
`),mo=r(Ue,"CODE",{});var hp=i(mo);Tr=n(hp,"num_beams>1"),hp.forEach(o),Er=n(Ue," and "),go=r(Ue,"CODE",{});var fp=i(go);Or=n(fp,"num_beam_groups>1"),fp.forEach(o),Gr=n(Ue,"."),Ue.forEach(o),Sr=g(C),X=r(C,"LI",{});var Ve=i(X);uo=r(Ve,"EM",{});var bp=i(uo);qr=n(bp,"constrained beam-search decoding"),bp.forEach(o),Fr=n(Ve," by calling "),Mn=r(Ve,"A",{href:!0});var xp=i(Mn);Ar=n(xp,"constrained_beam_search()"),xp.forEach(o),zr=n(Ve,`,
if `),_o=r(Ve,"CODE",{});var kp=i(_o);Pr=n(kp,"constraints!=None"),kp.forEach(o),Dr=n(Ve," or "),ho=r(Ve,"CODE",{});var vp=i(ho);Nr=n(vp,"force_words_ids!=None"),vp.forEach(o),Cr=n(Ve,"."),Ve.forEach(o),C.forEach(o),Ir=g(E),O=r(E,"DIV",{class:!0});var G=i(O);v(Ot.$$.fragment,G),Wr=g(G),fo=r(G,"P",{});var yp=i(fo);Br=n(yp,`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),yp.forEach(o),Hr=g(G),F=r(G,"UL",{});var I=i(F);J=r(I,"LI",{});var Ke=i(J);bo=r(Ke,"EM",{});var jp=i(bo);Rr=n(jp,"greedy decoding"),jp.forEach(o),Ur=n(Ke," by calling "),wn=r(Ke,"A",{href:!0});var Lp=i(wn);Vr=n(Lp,"greedy_search()"),Lp.forEach(o),Kr=n(Ke," if "),xo=r(Ke,"CODE",{});var Mp=i(xo);Zr=n(Mp,"num_beams=1"),Mp.forEach(o),Xr=n(Ke,` and
`),ko=r(Ke,"CODE",{});var wp=i(ko);Jr=n(wp,"do_sample=False"),wp.forEach(o),Qr=n(Ke,"."),Ke.forEach(o),Yr=g(I),_e=r(I,"LI",{});var Lt=i(_e);vo=r(Lt,"EM",{});var $p=i(vo);ei=n($p,"contrastive search"),$p.forEach(o),ti=n(Lt," by calling "),$n=r(Lt,"A",{href:!0});var Tp=i($n);ni=n(Tp,"contrastive_search()"),Tp.forEach(o),oi=n(Lt,` if
`),yo=r(Lt,"CODE",{});var Ep=i(yo);si=n(Ep,"penalty_alpha>0."),Ep.forEach(o),ai=n(Lt," and "),jo=r(Lt,"CODE",{});var Op=i(jo);ri=n(Op,"top_k>1"),Op.forEach(o),Lt.forEach(o),ii=g(I),Q=r(I,"LI",{});var Ze=i(Q);Lo=r(Ze,"EM",{});var Gp=i(Lo);li=n(Gp,"multinomial sampling"),Gp.forEach(o),di=n(Ze," by calling "),Tn=r(Ze,"A",{href:!0});var Sp=i(Tn);ci=n(Sp,"sample()"),Sp.forEach(o),pi=n(Ze," if "),Mo=r(Ze,"CODE",{});var qp=i(Mo);mi=n(qp,"num_beams=1"),qp.forEach(o),gi=n(Ze,` and
`),wo=r(Ze,"CODE",{});var Fp=i(wo);ui=n(Fp,"do_sample=True"),Fp.forEach(o),_i=n(Ze,"."),Ze.forEach(o),hi=g(I),Y=r(I,"LI",{});var Xe=i(Y);$o=r(Xe,"EM",{});var Ap=i($o);fi=n(Ap,"beam-search decoding"),Ap.forEach(o),bi=n(Xe," by calling "),En=r(Xe,"A",{href:!0});var zp=i(En);xi=n(zp,"beam_search()"),zp.forEach(o),ki=n(Xe," if "),To=r(Xe,"CODE",{});var Pp=i(To);vi=n(Pp,"num_beams>1"),Pp.forEach(o),yi=n(Xe,` and
`),Eo=r(Xe,"CODE",{});var Dp=i(Eo);ji=n(Dp,"do_sample=False"),Dp.forEach(o),Li=n(Xe,"."),Xe.forEach(o),Mi=g(I),ee=r(I,"LI",{});var Je=i(ee);Oo=r(Je,"EM",{});var Np=i(Oo);wi=n(Np,"beam-search multinomial sampling"),Np.forEach(o),$i=n(Je," by calling "),On=r(Je,"A",{href:!0});var Cp=i(On);Ti=n(Cp,"beam_sample()"),Cp.forEach(o),Ei=n(Je,` if
`),Go=r(Je,"CODE",{});var Ip=i(Go);Oi=n(Ip,"num_beams>1"),Ip.forEach(o),Gi=n(Je," and "),So=r(Je,"CODE",{});var Wp=i(So);Si=n(Wp,"do_sample=True"),Wp.forEach(o),qi=n(Je,"."),Je.forEach(o),Fi=g(I),te=r(I,"LI",{});var Qe=i(te);qo=r(Qe,"EM",{});var Bp=i(qo);Ai=n(Bp,"diverse beam-search decoding"),Bp.forEach(o),zi=n(Qe," by calling "),Gn=r(Qe,"A",{href:!0});var Hp=i(Gn);Pi=n(Hp,"group_beam_search()"),Hp.forEach(o),Di=n(Qe,`, if
`),Fo=r(Qe,"CODE",{});var Rp=i(Fo);Ni=n(Rp,"num_beams>1"),Rp.forEach(o),Ci=n(Qe," and "),Ao=r(Qe,"CODE",{});var Up=i(Ao);Ii=n(Up,"num_beam_groups>1"),Up.forEach(o),Wi=n(Qe,"."),Qe.forEach(o),Bi=g(I),ne=r(I,"LI",{});var Ye=i(ne);zo=r(Ye,"EM",{});var Vp=i(zo);Hi=n(Vp,"constrained beam-search decoding"),Vp.forEach(o),Ri=n(Ye,` by calling
`),Sn=r(Ye,"A",{href:!0});var Kp=i(Sn);Ui=n(Kp,"constrained_beam_search()"),Kp.forEach(o),Vi=n(Ye,", if "),Po=r(Ye,"CODE",{});var Zp=i(Po);Ki=n(Zp,"constraints!=None"),Zp.forEach(o),Zi=n(Ye,` or
`),Do=r(Ye,"CODE",{});var Xp=i(Do);Xi=n(Xp,"force_words_ids!=None"),Xp.forEach(o),Ji=n(Ye,"."),Ye.forEach(o),I.forEach(o),Qi=g(G),v(it.$$.fragment,G),Yi=g(G),Gt=r(G,"P",{});var Bs=i(Gt);el=n(Bs,"Most of these parameters are explained in more detail in "),St=r(Bs,"A",{href:!0,rel:!0});var Jp=i(St);tl=n(Jp,`this blog
post`),Jp.forEach(o),nl=n(Bs,"."),Bs.forEach(o),ol=g(G),No=r(G,"P",{});var Qp=i(No);sl=n(Qp,"Examples:"),Qp.forEach(o),al=g(G),v(lt.$$.fragment,G),rl=g(G),v(dt.$$.fragment,G),il=g(G),v(ct.$$.fragment,G),G.forEach(o),ll=g(E),ke=r(E,"DIV",{class:!0});var Pn=i(ke);v(qt.$$.fragment,Pn),dl=g(Pn),Ft=r(Pn,"P",{});var Hs=i(Ft);cl=n(Hs,"Generates sequences of token ids for models with a language modeling head using "),Co=r(Hs,"STRONG",{});var Yp=i(Co);pl=n(Yp,"greedy decoding"),Yp.forEach(o),ml=n(Hs,` and can be
used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Hs.forEach(o),gl=g(Pn),v(pt.$$.fragment,Pn),Pn.forEach(o),ul=g(E),ve=r(E,"DIV",{class:!0});var Dn=i(ve);v(At.$$.fragment,Dn),_l=g(Dn),zt=r(Dn,"P",{});var Rs=i(zt);hl=n(Rs,"Generates sequences of token ids for models with a language modeling head using "),Io=r(Rs,"STRONG",{});var em=i(Io);fl=n(em,"multinomial sampling"),em.forEach(o),bl=n(Rs,` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Rs.forEach(o),xl=g(Dn),v(mt.$$.fragment,Dn),Dn.forEach(o),kl=g(E),ye=r(E,"DIV",{class:!0});var Nn=i(ye);v(Pt.$$.fragment,Nn),vl=g(Nn),Dt=r(Nn,"P",{});var Us=i(Dt);yl=n(Us,"Generates sequences of token ids for models with a language modeling head using "),Wo=r(Us,"STRONG",{});var tm=i(Wo);jl=n(tm,"beam search decoding"),tm.forEach(o),Ll=n(Us,` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Us.forEach(o),Ml=g(Nn),v(gt.$$.fragment,Nn),Nn.forEach(o),wl=g(E),je=r(E,"DIV",{class:!0});var Cn=i(je);v(Nt.$$.fragment,Cn),$l=g(Cn),Ct=r(Cn,"P",{});var Vs=i(Ct);Tl=n(Vs,"Generates sequences of token ids for models with a language modeling head using "),Bo=r(Vs,"STRONG",{});var nm=i(Bo);El=n(nm,`beam search multinomial
sampling`),nm.forEach(o),Ol=n(Vs," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Vs.forEach(o),Gl=g(Cn),v(ut.$$.fragment,Cn),Cn.forEach(o),Sl=g(E),Le=r(E,"DIV",{class:!0});var In=i(Le);v(It.$$.fragment,In),ql=g(In),Wt=r(In,"P",{});var Ks=i(Wt);Fl=n(Ks,"Generates sequences of token ids for models with a language modeling head using "),Ho=r(Ks,"STRONG",{});var om=i(Ho);Al=n(om,"contrastive search"),om.forEach(o),zl=n(Ks,` and can
be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Ks.forEach(o),Pl=g(In),v(_t.$$.fragment,In),In.forEach(o),Dl=g(E),Me=r(E,"DIV",{class:!0});var Wn=i(Me);v(Bt.$$.fragment,Wn),Nl=g(Wn),Ht=r(Wn,"P",{});var Zs=i(Ht);Cl=n(Zs,"Generates sequences of token ids for models with a language modeling head using "),Ro=r(Zs,"STRONG",{});var sm=i(Ro);Il=n(sm,`diverse beam search
decoding`),sm.forEach(o),Wl=n(Zs," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Zs.forEach(o),Bl=g(Wn),v(ht.$$.fragment,Wn),Wn.forEach(o),Hl=g(E),we=r(E,"DIV",{class:!0});var Bn=i(we);v(Rt.$$.fragment,Bn),Rl=g(Bn),Ut=r(Bn,"P",{});var Xs=i(Ut);Ul=n(Xs,"Generates sequences of token ids for models with a language modeling head using "),Uo=r(Xs,"STRONG",{});var am=i(Uo);Vl=n(am,`constrained beam search
decoding`),am.forEach(o),Kl=n(Xs," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Xs.forEach(o),Zl=g(Bn),v(ft.$$.fragment,Bn),Bn.forEach(o),E.forEach(o),As=g(l),Fe=r(l,"H2",{class:!0});var Js=i(Fe);bt=r(Js,"A",{id:!0,class:!0,href:!0});var rm=i(bt);Vo=r(rm,"SPAN",{});var im=i(Vo);v(Vt.$$.fragment,im),im.forEach(o),rm.forEach(o),Xl=g(Js),Ko=r(Js,"SPAN",{});var lm=i(Ko);Jl=n(lm,"TFGenerationMixin"),lm.forEach(o),Js.forEach(o),zs=g(l),he=r(l,"DIV",{class:!0});var Hn=i(he);v(Kt.$$.fragment,Hn),Ql=g(Hn),Zt=r(Hn,"P",{});var Qs=i(Zt);Yl=n(Qs,"A class containing all of the functions supporting generation, to be used as a mixin in "),qn=r(Qs,"A",{href:!0});var dm=i(qn);ed=n(dm,"TFPreTrainedModel"),dm.forEach(o),td=n(Qs,"."),Qs.forEach(o),nd=g(Hn),z=r(Hn,"DIV",{class:!0});var de=i(z);v(Xt.$$.fragment,de),od=g(de),Zo=r(de,"P",{});var cm=i(Zo);sd=n(cm,`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),cm.forEach(o),ad=g(de),Jt=r(de,"P",{});var Ys=i(Jt);rd=n(Ys,"Adapted in part from "),Qt=r(Ys,"A",{href:!0,rel:!0});var pm=i(Qt);id=n(pm,`Facebook\u2019s XLM beam search
code`),pm.forEach(o),ld=n(Ys,"."),Ys.forEach(o),dd=g(de),fe=r(de,"P",{});var Mt=i(fe);cd=n(Mt,"Apart from "),Xo=r(Mt,"CODE",{});var mm=i(Xo);pd=n(mm,"input_ids"),mm.forEach(o),md=n(Mt," and "),Jo=r(Mt,"CODE",{});var gm=i(Jo);gd=n(gm,"attention_mask"),gm.forEach(o),ud=n(Mt,`, all the arguments below will default to the value of the attribute
of the same name inside the `),Fn=r(Mt,"A",{href:!0});var um=i(Fn);_d=n(um,"PretrainedConfig"),um.forEach(o),hd=n(Mt,` of the model. The default values indicated are the default
values of those config.`),Mt.forEach(o),fd=g(de),Yt=r(de,"P",{});var ea=i(Yt);bd=n(ea,"Most of these parameters are explained in more detail in "),en=r(ea,"A",{href:!0,rel:!0});var _m=i(en);xd=n(_m,`this blog
post`),_m.forEach(o),kd=n(ea,"."),ea.forEach(o),vd=g(de),v(xt.$$.fragment,de),de.forEach(o),Hn.forEach(o),Ps=g(l),Ae=r(l,"H2",{class:!0});var ta=i(Ae);kt=r(ta,"A",{id:!0,class:!0,href:!0});var hm=i(kt);Qo=r(hm,"SPAN",{});var fm=i(Qo);v(tn.$$.fragment,fm),fm.forEach(o),hm.forEach(o),yd=g(ta),Yo=r(ta,"SPAN",{});var bm=i(Yo);jd=n(bm,"FlaxGenerationMixin"),bm.forEach(o),ta.forEach(o),Ds=g(l),N=r(l,"DIV",{class:!0});var $e=i(N);v(nn.$$.fragment,$e),Ld=g($e),on=r($e,"P",{});var na=i(on);Md=n(na,`A class containing all functions for auto-regressive text generation, to be used as a mixin in
`),An=r(na,"A",{href:!0});var xm=i(An);wd=n(xm,"FlaxPreTrainedModel"),xm.forEach(o),$d=n(na,"."),na.forEach(o),Td=g($e),sn=r($e,"P",{});var oa=i(sn);Ed=n(oa,"The class exposes "),zn=r(oa,"A",{href:!0});var km=i(zn);Od=n(km,"generate()"),km.forEach(o),Gd=n(oa,", which can be used for:"),oa.forEach(o),Sd=g($e),ze=r($e,"UL",{});var Rn=i(ze);oe=r(Rn,"LI",{});var et=i(oe);es=r(et,"EM",{});var vm=i(es);qd=n(vm,"greedy decoding"),vm.forEach(o),Fd=n(et," by calling "),ts=r(et,"CODE",{});var ym=i(ts);Ad=n(ym,"_greedy_search()"),ym.forEach(o),zd=n(et,` if
`),ns=r(et,"CODE",{});var jm=i(ns);Pd=n(jm,"num_beams=1"),jm.forEach(o),Dd=n(et," and "),os=r(et,"CODE",{});var Lm=i(os);Nd=n(Lm,"do_sample=False"),Lm.forEach(o),Cd=n(et,"."),et.forEach(o),Id=g(Rn),se=r(Rn,"LI",{});var tt=i(se);ss=r(tt,"EM",{});var Mm=i(ss);Wd=n(Mm,"multinomial sampling"),Mm.forEach(o),Bd=n(tt," by calling "),as=r(tt,"CODE",{});var wm=i(as);Hd=n(wm,"_sample()"),wm.forEach(o),Rd=n(tt," if "),rs=r(tt,"CODE",{});var $m=i(rs);Ud=n($m,"num_beams=1"),$m.forEach(o),Vd=n(tt,`
and `),is=r(tt,"CODE",{});var Tm=i(is);Kd=n(Tm,"do_sample=True"),Tm.forEach(o),Zd=n(tt,"."),tt.forEach(o),Xd=g(Rn),ae=r(Rn,"LI",{});var nt=i(ae);ls=r(nt,"EM",{});var Em=i(ls);Jd=n(Em,"beam-search decoding"),Em.forEach(o),Qd=n(nt," by calling "),ds=r(nt,"CODE",{});var Om=i(ds);Yd=n(Om,"~generation_utils.FlaxGenerationMixin._beam_search"),Om.forEach(o),ec=n(nt," if "),cs=r(nt,"CODE",{});var Gm=i(cs);tc=n(Gm,"num_beams>1"),Gm.forEach(o),nc=n(nt,`
and `),ps=r(nt,"CODE",{});var Sm=i(ps);oc=n(Sm,"do_sample=False"),Sm.forEach(o),sc=n(nt,"."),nt.forEach(o),Rn.forEach(o),ac=g($e),P=r($e,"DIV",{class:!0});var ce=i(P);v(an.$$.fragment,ce),rc=g(ce),ms=r(ce,"P",{});var qm=i(ms);ic=n(qm,`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),qm.forEach(o),lc=g(ce),Pe=r(ce,"UL",{});var Un=i(Pe);re=r(Un,"LI",{});var ot=i(re);gs=r(ot,"EM",{});var Fm=i(gs);dc=n(Fm,"greedy decoding"),Fm.forEach(o),cc=n(ot," by calling "),us=r(ot,"CODE",{});var Am=i(us);pc=n(Am,"_greedy_search()"),Am.forEach(o),mc=n(ot,` if
`),_s=r(ot,"CODE",{});var zm=i(_s);gc=n(zm,"num_beams=1"),zm.forEach(o),uc=n(ot," and "),hs=r(ot,"CODE",{});var Pm=i(hs);_c=n(Pm,"do_sample=False"),Pm.forEach(o),hc=n(ot,"."),ot.forEach(o),fc=g(Un),ie=r(Un,"LI",{});var st=i(ie);fs=r(st,"EM",{});var Dm=i(fs);bc=n(Dm,"multinomial sampling"),Dm.forEach(o),xc=n(st," by calling "),bs=r(st,"CODE",{});var Nm=i(bs);kc=n(Nm,"_sample()"),Nm.forEach(o),vc=n(st," if "),xs=r(st,"CODE",{});var Cm=i(xs);yc=n(Cm,"num_beams=1"),Cm.forEach(o),jc=n(st,`
and `),ks=r(st,"CODE",{});var Im=i(ks);Lc=n(Im,"do_sample=True"),Im.forEach(o),Mc=n(st,"."),st.forEach(o),wc=g(Un),le=r(Un,"LI",{});var at=i(le);vs=r(at,"EM",{});var Wm=i(vs);$c=n(Wm,"beam-search decoding"),Wm.forEach(o),Tc=n(at," by calling "),ys=r(at,"CODE",{});var Bm=i(ys);Ec=n(Bm,"~generation_utils.FlaxGenerationMixin._beam_search"),Bm.forEach(o),Oc=n(at," if "),js=r(at,"CODE",{});var Hm=i(js);Gc=n(Hm,"num_beams>1"),Hm.forEach(o),Sc=n(at,`
and `),Ls=r(at,"CODE",{});var Rm=i(Ls);qc=n(Rm,"do_sample=False"),Rm.forEach(o),Fc=n(at,"."),at.forEach(o),Un.forEach(o),Ac=g(ce),v(vt.$$.fragment,ce),zc=g(ce),rn=r(ce,"P",{});var sa=i(rn);Pc=n(sa,"Most of these parameters are explained in more detail in "),ln=r(sa,"A",{href:!0,rel:!0});var Um=i(ln);Dc=n(Um,`this blog
post`),Um.forEach(o),Nc=n(sa,"."),sa.forEach(o),Cc=g(ce),v(yt.$$.fragment,ce),ce.forEach(o),$e.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(ug)),h(c,"id","generation"),h(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(c,"href","#generation"),h(u,"class","relative group"),h(pn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(mn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin"),h(gn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin.generate"),h(un,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin"),h(_n,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin.generate"),h(hn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin"),h(rt,"id","transformers.generation_utils.GenerationMixin"),h(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(rt,"href","#transformers.generation_utils.GenerationMixin"),h(qe,"class","relative group"),h(fn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(bn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(xn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),h(kn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.contrastive_search"),h(vn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),h(yn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),h(jn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),h(Ln,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),h(Mn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.constrained_beam_search"),h(wn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),h($n,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.contrastive_search"),h(Tn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),h(En,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),h(On,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),h(Gn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),h(Sn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.constrained_beam_search"),h(St,"href","https://huggingface.co/blog/how-to-generate"),h(St,"rel","nofollow"),h(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(bt,"id","transformers.generation_tf_utils.TFGenerationMixin"),h(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bt,"href","#transformers.generation_tf_utils.TFGenerationMixin"),h(Fe,"class","relative group"),h(qn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Qt,"href","https://github.com/facebookresearch/XLM/blob/9e6f6814d17be4fe5b15f2e6c43eb2b2d76daeb4/src/model/transformer.py#L529"),h(Qt,"rel","nofollow"),h(Fn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(en,"href","https://huggingface.co/blog/how-to-generate"),h(en,"rel","nofollow"),h(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(kt,"id","transformers.generation_flax_utils.FlaxGenerationMixin"),h(kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(kt,"href","#transformers.generation_flax_utils.FlaxGenerationMixin"),h(Ae,"class","relative group"),h(An,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(zn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin.generate"),h(ln,"href","https://huggingface.co/blog/how-to-generate"),h(ln,"rel","nofollow"),h(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(l,b){e(document.head,d),x(l,f,b),x(l,u,b),e(u,c),e(c,_),y(s,_,null),e(u,p),e(u,W),e(W,S),x(l,H,b),x(l,A,b),e(A,D),e(A,T),e(T,Te),e(A,Ee),x(l,be,b),x(l,xe,b),e(xe,Oe),e(Oe,ra),e(Oe,pn),e(pn,ia),e(Oe,la),e(Oe,mn),e(mn,da),e(Oe,ca),e(xe,pa),e(xe,Ge),e(Ge,ma),e(Ge,gn),e(gn,ga),e(Ge,ua),e(Ge,un),e(un,_a),e(Ge,ha),e(xe,fa),e(xe,Se),e(Se,ba),e(Se,_n),e(_n,xa),e(Se,ka),e(Se,hn),e(hn,va),e(Se,ya),x(l,qs,b),x(l,qe,b),e(qe,rt),e(rt,Vn),y(wt,Vn,null),e(qe,ja),e(qe,Kn),e(Kn,La),x(l,Fs,b),x(l,$,b),y($t,$,null),e($,Ma),e($,Tt),e(Tt,wa),e(Tt,fn),e(fn,$a),e(Tt,Ta),e($,Ea),e($,Et),e(Et,Oa),e(Et,bn),e(bn,Ga),e(Et,Sa),e($,qa),e($,q),e(q,R),e(R,Zn),e(Zn,Fa),e(R,Aa),e(R,xn),e(xn,za),e(R,Pa),e(R,Xn),e(Xn,Da),e(R,Na),e(R,Jn),e(Jn,Ca),e(R,Ia),e(q,Wa),e(q,ue),e(ue,Qn),e(Qn,Ba),e(ue,Ha),e(ue,kn),e(kn,Ra),e(ue,Ua),e(ue,Yn),e(Yn,Va),e(ue,Ka),e(ue,eo),e(eo,Za),e(q,Xa),e(q,U),e(U,to),e(to,Ja),e(U,Qa),e(U,vn),e(vn,Ya),e(U,er),e(U,no),e(no,tr),e(U,nr),e(U,oo),e(oo,or),e(U,sr),e(q,ar),e(q,V),e(V,so),e(so,rr),e(V,ir),e(V,yn),e(yn,lr),e(V,dr),e(V,ao),e(ao,cr),e(V,pr),e(V,ro),e(ro,mr),e(V,gr),e(q,ur),e(q,K),e(K,io),e(io,_r),e(K,hr),e(K,jn),e(jn,fr),e(K,br),e(K,lo),e(lo,xr),e(K,kr),e(K,co),e(co,vr),e(K,yr),e(q,jr),e(q,Z),e(Z,po),e(po,Lr),e(Z,Mr),e(Z,Ln),e(Ln,wr),e(Z,$r),e(Z,mo),e(mo,Tr),e(Z,Er),e(Z,go),e(go,Or),e(Z,Gr),e(q,Sr),e(q,X),e(X,uo),e(uo,qr),e(X,Fr),e(X,Mn),e(Mn,Ar),e(X,zr),e(X,_o),e(_o,Pr),e(X,Dr),e(X,ho),e(ho,Nr),e(X,Cr),e($,Ir),e($,O),y(Ot,O,null),e(O,Wr),e(O,fo),e(fo,Br),e(O,Hr),e(O,F),e(F,J),e(J,bo),e(bo,Rr),e(J,Ur),e(J,wn),e(wn,Vr),e(J,Kr),e(J,xo),e(xo,Zr),e(J,Xr),e(J,ko),e(ko,Jr),e(J,Qr),e(F,Yr),e(F,_e),e(_e,vo),e(vo,ei),e(_e,ti),e(_e,$n),e($n,ni),e(_e,oi),e(_e,yo),e(yo,si),e(_e,ai),e(_e,jo),e(jo,ri),e(F,ii),e(F,Q),e(Q,Lo),e(Lo,li),e(Q,di),e(Q,Tn),e(Tn,ci),e(Q,pi),e(Q,Mo),e(Mo,mi),e(Q,gi),e(Q,wo),e(wo,ui),e(Q,_i),e(F,hi),e(F,Y),e(Y,$o),e($o,fi),e(Y,bi),e(Y,En),e(En,xi),e(Y,ki),e(Y,To),e(To,vi),e(Y,yi),e(Y,Eo),e(Eo,ji),e(Y,Li),e(F,Mi),e(F,ee),e(ee,Oo),e(Oo,wi),e(ee,$i),e(ee,On),e(On,Ti),e(ee,Ei),e(ee,Go),e(Go,Oi),e(ee,Gi),e(ee,So),e(So,Si),e(ee,qi),e(F,Fi),e(F,te),e(te,qo),e(qo,Ai),e(te,zi),e(te,Gn),e(Gn,Pi),e(te,Di),e(te,Fo),e(Fo,Ni),e(te,Ci),e(te,Ao),e(Ao,Ii),e(te,Wi),e(F,Bi),e(F,ne),e(ne,zo),e(zo,Hi),e(ne,Ri),e(ne,Sn),e(Sn,Ui),e(ne,Vi),e(ne,Po),e(Po,Ki),e(ne,Zi),e(ne,Do),e(Do,Xi),e(ne,Ji),e(O,Qi),y(it,O,null),e(O,Yi),e(O,Gt),e(Gt,el),e(Gt,St),e(St,tl),e(Gt,nl),e(O,ol),e(O,No),e(No,sl),e(O,al),y(lt,O,null),e(O,rl),y(dt,O,null),e(O,il),y(ct,O,null),e($,ll),e($,ke),y(qt,ke,null),e(ke,dl),e(ke,Ft),e(Ft,cl),e(Ft,Co),e(Co,pl),e(Ft,ml),e(ke,gl),y(pt,ke,null),e($,ul),e($,ve),y(At,ve,null),e(ve,_l),e(ve,zt),e(zt,hl),e(zt,Io),e(Io,fl),e(zt,bl),e(ve,xl),y(mt,ve,null),e($,kl),e($,ye),y(Pt,ye,null),e(ye,vl),e(ye,Dt),e(Dt,yl),e(Dt,Wo),e(Wo,jl),e(Dt,Ll),e(ye,Ml),y(gt,ye,null),e($,wl),e($,je),y(Nt,je,null),e(je,$l),e(je,Ct),e(Ct,Tl),e(Ct,Bo),e(Bo,El),e(Ct,Ol),e(je,Gl),y(ut,je,null),e($,Sl),e($,Le),y(It,Le,null),e(Le,ql),e(Le,Wt),e(Wt,Fl),e(Wt,Ho),e(Ho,Al),e(Wt,zl),e(Le,Pl),y(_t,Le,null),e($,Dl),e($,Me),y(Bt,Me,null),e(Me,Nl),e(Me,Ht),e(Ht,Cl),e(Ht,Ro),e(Ro,Il),e(Ht,Wl),e(Me,Bl),y(ht,Me,null),e($,Hl),e($,we),y(Rt,we,null),e(we,Rl),e(we,Ut),e(Ut,Ul),e(Ut,Uo),e(Uo,Vl),e(Ut,Kl),e(we,Zl),y(ft,we,null),x(l,As,b),x(l,Fe,b),e(Fe,bt),e(bt,Vo),y(Vt,Vo,null),e(Fe,Xl),e(Fe,Ko),e(Ko,Jl),x(l,zs,b),x(l,he,b),y(Kt,he,null),e(he,Ql),e(he,Zt),e(Zt,Yl),e(Zt,qn),e(qn,ed),e(Zt,td),e(he,nd),e(he,z),y(Xt,z,null),e(z,od),e(z,Zo),e(Zo,sd),e(z,ad),e(z,Jt),e(Jt,rd),e(Jt,Qt),e(Qt,id),e(Jt,ld),e(z,dd),e(z,fe),e(fe,cd),e(fe,Xo),e(Xo,pd),e(fe,md),e(fe,Jo),e(Jo,gd),e(fe,ud),e(fe,Fn),e(Fn,_d),e(fe,hd),e(z,fd),e(z,Yt),e(Yt,bd),e(Yt,en),e(en,xd),e(Yt,kd),e(z,vd),y(xt,z,null),x(l,Ps,b),x(l,Ae,b),e(Ae,kt),e(kt,Qo),y(tn,Qo,null),e(Ae,yd),e(Ae,Yo),e(Yo,jd),x(l,Ds,b),x(l,N,b),y(nn,N,null),e(N,Ld),e(N,on),e(on,Md),e(on,An),e(An,wd),e(on,$d),e(N,Td),e(N,sn),e(sn,Ed),e(sn,zn),e(zn,Od),e(sn,Gd),e(N,Sd),e(N,ze),e(ze,oe),e(oe,es),e(es,qd),e(oe,Fd),e(oe,ts),e(ts,Ad),e(oe,zd),e(oe,ns),e(ns,Pd),e(oe,Dd),e(oe,os),e(os,Nd),e(oe,Cd),e(ze,Id),e(ze,se),e(se,ss),e(ss,Wd),e(se,Bd),e(se,as),e(as,Hd),e(se,Rd),e(se,rs),e(rs,Ud),e(se,Vd),e(se,is),e(is,Kd),e(se,Zd),e(ze,Xd),e(ze,ae),e(ae,ls),e(ls,Jd),e(ae,Qd),e(ae,ds),e(ds,Yd),e(ae,ec),e(ae,cs),e(cs,tc),e(ae,nc),e(ae,ps),e(ps,oc),e(ae,sc),e(N,ac),e(N,P),y(an,P,null),e(P,rc),e(P,ms),e(ms,ic),e(P,lc),e(P,Pe),e(Pe,re),e(re,gs),e(gs,dc),e(re,cc),e(re,us),e(us,pc),e(re,mc),e(re,_s),e(_s,gc),e(re,uc),e(re,hs),e(hs,_c),e(re,hc),e(Pe,fc),e(Pe,ie),e(ie,fs),e(fs,bc),e(ie,xc),e(ie,bs),e(bs,kc),e(ie,vc),e(ie,xs),e(xs,yc),e(ie,jc),e(ie,ks),e(ks,Lc),e(ie,Mc),e(Pe,wc),e(Pe,le),e(le,vs),e(vs,$c),e(le,Tc),e(le,ys),e(ys,Ec),e(le,Oc),e(le,js),e(js,Gc),e(le,Sc),e(le,Ls),e(Ls,qc),e(le,Fc),e(P,Ac),y(vt,P,null),e(P,zc),e(P,rn),e(rn,Pc),e(rn,ln),e(ln,Dc),e(rn,Nc),e(P,Cc),y(yt,P,null),Ns=!0},p(l,[b]){const dn={};b&2&&(dn.$$scope={dirty:b,ctx:l}),it.$set(dn);const Ms={};b&2&&(Ms.$$scope={dirty:b,ctx:l}),lt.$set(Ms);const ws={};b&2&&(ws.$$scope={dirty:b,ctx:l}),dt.$set(ws);const $s={};b&2&&($s.$$scope={dirty:b,ctx:l}),ct.$set($s);const cn={};b&2&&(cn.$$scope={dirty:b,ctx:l}),pt.$set(cn);const Ts={};b&2&&(Ts.$$scope={dirty:b,ctx:l}),mt.$set(Ts);const De={};b&2&&(De.$$scope={dirty:b,ctx:l}),gt.$set(De);const Ne={};b&2&&(Ne.$$scope={dirty:b,ctx:l}),ut.$set(Ne);const Es={};b&2&&(Es.$$scope={dirty:b,ctx:l}),_t.$set(Es);const Os={};b&2&&(Os.$$scope={dirty:b,ctx:l}),ht.$set(Os);const Ce={};b&2&&(Ce.$$scope={dirty:b,ctx:l}),ft.$set(Ce);const Gs={};b&2&&(Gs.$$scope={dirty:b,ctx:l}),xt.$set(Gs);const Ss={};b&2&&(Ss.$$scope={dirty:b,ctx:l}),vt.$set(Ss);const Ie={};b&2&&(Ie.$$scope={dirty:b,ctx:l}),yt.$set(Ie)},i(l){Ns||(j(s.$$.fragment,l),j(wt.$$.fragment,l),j($t.$$.fragment,l),j(Ot.$$.fragment,l),j(it.$$.fragment,l),j(lt.$$.fragment,l),j(dt.$$.fragment,l),j(ct.$$.fragment,l),j(qt.$$.fragment,l),j(pt.$$.fragment,l),j(At.$$.fragment,l),j(mt.$$.fragment,l),j(Pt.$$.fragment,l),j(gt.$$.fragment,l),j(Nt.$$.fragment,l),j(ut.$$.fragment,l),j(It.$$.fragment,l),j(_t.$$.fragment,l),j(Bt.$$.fragment,l),j(ht.$$.fragment,l),j(Rt.$$.fragment,l),j(ft.$$.fragment,l),j(Vt.$$.fragment,l),j(Kt.$$.fragment,l),j(Xt.$$.fragment,l),j(xt.$$.fragment,l),j(tn.$$.fragment,l),j(nn.$$.fragment,l),j(an.$$.fragment,l),j(vt.$$.fragment,l),j(yt.$$.fragment,l),Ns=!0)},o(l){L(s.$$.fragment,l),L(wt.$$.fragment,l),L($t.$$.fragment,l),L(Ot.$$.fragment,l),L(it.$$.fragment,l),L(lt.$$.fragment,l),L(dt.$$.fragment,l),L(ct.$$.fragment,l),L(qt.$$.fragment,l),L(pt.$$.fragment,l),L(At.$$.fragment,l),L(mt.$$.fragment,l),L(Pt.$$.fragment,l),L(gt.$$.fragment,l),L(Nt.$$.fragment,l),L(ut.$$.fragment,l),L(It.$$.fragment,l),L(_t.$$.fragment,l),L(Bt.$$.fragment,l),L(ht.$$.fragment,l),L(Rt.$$.fragment,l),L(ft.$$.fragment,l),L(Vt.$$.fragment,l),L(Kt.$$.fragment,l),L(Xt.$$.fragment,l),L(xt.$$.fragment,l),L(tn.$$.fragment,l),L(nn.$$.fragment,l),L(an.$$.fragment,l),L(vt.$$.fragment,l),L(yt.$$.fragment,l),Ns=!1},d(l){o(d),l&&o(f),l&&o(u),M(s),l&&o(H),l&&o(A),l&&o(be),l&&o(xe),l&&o(qs),l&&o(qe),M(wt),l&&o(Fs),l&&o($),M($t),M(Ot),M(it),M(lt),M(dt),M(ct),M(qt),M(pt),M(At),M(mt),M(Pt),M(gt),M(Nt),M(ut),M(It),M(_t),M(Bt),M(ht),M(Rt),M(ft),l&&o(As),l&&o(Fe),M(Vt),l&&o(zs),l&&o(he),M(Kt),M(Xt),M(xt),l&&o(Ps),l&&o(Ae),M(tn),l&&o(Ds),l&&o(N),M(nn),M(an),M(vt),M(yt)}}}const ug={local:"generation",sections:[{local:"transformers.generation_utils.GenerationMixin",title:"GenerationMixin"},{local:"transformers.generation_tf_utils.TFGenerationMixin",title:"TFGenerationMixin"},{local:"transformers.generation_flax_utils.FlaxGenerationMixin",title:"FlaxGenerationMixin"}],title:"Generation"};function _g(w){return Qm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class yg extends Km{constructor(d){super();Zm(this,d,_g,gg,Xm,{})}}export{yg as default,ug as metadata};
