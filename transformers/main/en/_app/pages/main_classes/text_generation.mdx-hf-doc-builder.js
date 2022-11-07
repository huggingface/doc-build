import{S as K_,i as Z_,s as X_,e as s,k as p,w as k,t,M as J_,c as a,d as o,m,a as r,x as v,h as n,b as h,G as e,g as x,y,q as j,o as L,B as M,v as Q_,L as xe}from"../../chunks/vendor-hf-doc-builder.js";import{T as V_}from"../../chunks/Tip-hf-doc-builder.js";import{D as R}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ke}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as rr}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as be}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Y_(w){let d,f,u,c,_,i,g,H,q,U,D;return{c(){d=s("p"),f=t("Apart from "),u=s("code"),c=t("inputs"),_=t(`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),i=s("code"),g=t("config.json"),H=t(`) which in turn defaults to the
`),q=s("a"),U=t("PretrainedConfig"),D=t(" of the model."),this.h()},l(C){d=a(C,"P",{});var $=r(d);f=n($,"Apart from "),u=a($,"CODE",{});var Pe=r(u);c=n(Pe,"inputs"),Pe.forEach(o),_=n($,`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),i=a($,"CODE",{});var Ne=r(i);g=n(Ne,"config.json"),Ne.forEach(o),H=n($,`) which in turn defaults to the
`),q=a($,"A",{href:!0});var $e=r(q);U=n($e,"PretrainedConfig"),$e.forEach(o),D=n($," of the model."),$.forEach(o),this.h()},h(){h(q,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig")},m(C,$){x(C,d,$),e(d,f),e(d,u),e(u,c),e(d,_),e(d,i),e(i,g),e(d,H),e(d,q),e(q,U),e(d,D)},d(C){C&&o(d)}}}function eh(w){let d,f,u,c,_;return c=new ke({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM

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
[<span class="hljs-string">&#x27;Today I believe we can finally get to the point where we can make a difference in the lives of the people of the United States of America.\\n&#x27;</span>]`}}),{c(){d=s("p"),f=t("Greedy Decoding:"),u=p(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var g=r(d);f=n(g,"Greedy Decoding:"),g.forEach(o),u=m(i),v(c.$$.fragment,i)},m(i,g){x(i,d,g),e(d,f),x(i,u,g),y(c,i,g),_=!0},p:xe,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){L(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),M(c,i)}}}function th(w){let d,f,u,c,_;return c=new ke({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM
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
[<span class="hljs-string">&#x27;Today I believe we can finally get rid of discrimination,&quot; said Rep. Mark Pocan (D-Wis.).\\n\\n&quot;Just look at the&#x27;</span>]`}}),{c(){d=s("p"),f=t("Multinomial Sampling:"),u=p(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var g=r(d);f=n(g,"Multinomial Sampling:"),g.forEach(o),u=m(i),v(c.$$.fragment,i)},m(i,g){x(i,d,g),e(d,f),x(i,u,g),y(c,i,g),_=!0},p:xe,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){L(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),M(c,i)}}}function nh(w){let d,f,u,c,_;return c=new ke({props:{code:`from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

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
[<span class="hljs-string">&#x27;Paris ist eines der dichtesten besiedelten Gebiete Europas.&#x27;</span>]`}}),{c(){d=s("p"),f=t("Beam-search decoding:"),u=p(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var g=r(d);f=n(g,"Beam-search decoding:"),g.forEach(o),u=m(i),v(c.$$.fragment,i)},m(i,g){x(i,d,g),e(d,f),x(i,u,g),y(c,i,g),_=!0},p:xe,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){L(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),M(c,i)}}}function oh(w){let d,f,u,c,_;return c=new ke({props:{code:`from transformers import (
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
[<span class="hljs-string">&quot;It might be possible to get a better understanding of the nature of the problem, but it&#x27;s not&quot;</span>]`}}),{c(){d=s("p"),f=t("Examples:"),u=p(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var g=r(d);f=n(g,"Examples:"),g.forEach(o),u=m(i),v(c.$$.fragment,i)},m(i,g){x(i,d,g),e(d,f),x(i,u,g),y(c,i,g),_=!0},p:xe,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){L(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),M(c,i)}}}function sh(w){let d,f,u,c,_;return c=new ke({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Today is a beautiful day, and a wonderful day.\\n\\nI was lucky enough to meet the&#x27;</span>]`}}),{c(){d=s("p"),f=t("Examples:"),u=p(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var g=r(d);f=n(g,"Examples:"),g.forEach(o),u=m(i),v(c.$$.fragment,i)},m(i,g){x(i,d,g),e(d,f),x(i,u,g),y(c,i,g),_=!0},p:xe,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){L(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),M(c,i)}}}function ah(w){let d,f,u,c,_;return c=new ke({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),{c(){d=s("p"),f=t("Examples:"),u=p(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var g=r(d);f=n(g,"Examples:"),g.forEach(o),u=m(i),v(c.$$.fragment,i)},m(i,g){x(i,d,g),e(d,f),x(i,u,g),y(c,i,g),_=!0},p:xe,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){L(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),M(c,i)}}}function rh(w){let d,f,u,c,_;return c=new ke({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),{c(){d=s("p"),f=t("Examples:"),u=p(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var g=r(d);f=n(g,"Examples:"),g.forEach(o),u=m(i),v(c.$$.fragment,i)},m(i,g){x(i,d,g),e(d,f),x(i,u,g),y(c,i,g),_=!0},p:xe,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){L(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),M(c,i)}}}function ih(w){let d,f,u,c,_;return c=new ke({props:{code:`from transformers import (
    AutoTokenizer,
    AutoModelForCausalLM,
    StoppingCriteriaList,
    MaxLengthCriteria,
)

tokenizer = AutoTokenizer.from_pretrained("facebook/opt-125m")
model = AutoModelForCausalLM.from_pretrained("facebook/opt-125m")
# set pad_token_id to eos_token_id because OPT does not have a PAD token
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set pad_token_id to eos_token_id because OPT does not have a PAD token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>input_prompt = <span class="hljs-string">&quot;DeepMind Company is&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>stopping_criteria = StoppingCriteriaList([MaxLengthCriteria(max_length=<span class="hljs-number">64</span>)])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.contrastive_search(
<span class="hljs-meta">... </span>    **input_ids, penalty_alpha=<span class="hljs-number">0.6</span>, top_k=<span class="hljs-number">4</span>, stopping_criteria=stopping_criteria
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;DeepMind Company is a company that focuses on the development and commercialization of artificial intelligence (AI). DeepMind\u2019s mission is to help people understand and solve problems that are difficult to solve in the world today.\\n\\nIn this post, we talk about the benefits of deep learning in business and how it&#x27;</span>]`}}),{c(){d=s("p"),f=t("Examples:"),u=p(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var g=r(d);f=n(g,"Examples:"),g.forEach(o),u=m(i),v(c.$$.fragment,i)},m(i,g){x(i,d,g),e(d,f),x(i,u,g),y(c,i,g),_=!0},p:xe,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){L(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),M(c,i)}}}function lh(w){let d,f,u,c,_;return c=new ke({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),{c(){d=s("p"),f=t("Examples:"),u=p(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var g=r(d);f=n(g,"Examples:"),g.forEach(o),u=m(i),v(c.$$.fragment,i)},m(i,g){x(i,d,g),e(d,f),x(i,u,g),y(c,i,g),_=!0},p:xe,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){L(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),M(c,i)}}}function dh(w){let d,f,u,c,_;return c=new ke({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt sind Sie?&#x27;</span>]`}}),{c(){d=s("p"),f=t("Examples:"),u=p(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var g=r(d);f=n(g,"Examples:"),g.forEach(o),u=m(i),v(c.$$.fragment,i)},m(i,g){x(i,d,g),e(d,f),x(i,u,g),y(c,i,g),_=!0},p:xe,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){L(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),M(c,i)}}}function ch(w){let d,f,u,c,_;return c=new ke({props:{code:`tokenizer = AutoTokenizer.from_pretrained("distilgpt2")  # Initialize tokenizer
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
)  <span class="hljs-comment"># generate sequences without allowing bad_words to be generated</span>`}}),{c(){d=s("p"),f=t("Examples:"),u=p(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var g=r(d);f=n(g,"Examples:"),g.forEach(o),u=m(i),v(c.$$.fragment,i)},m(i,g){x(i,d,g),e(d,f),x(i,u,g),y(c,i,g),_=!0},p:xe,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){L(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),M(c,i)}}}function ph(w){let d,f,u,c,_,i,g,H,q,U,D;return{c(){d=s("p"),f=t("Apart from "),u=s("code"),c=t("inputs"),_=t(`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),i=s("code"),g=t("config.json"),H=t(`) which in turn defaults to the
`),q=s("a"),U=t("PretrainedConfig"),D=t(" of the model."),this.h()},l(C){d=a(C,"P",{});var $=r(d);f=n($,"Apart from "),u=a($,"CODE",{});var Pe=r(u);c=n(Pe,"inputs"),Pe.forEach(o),_=n($,`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),i=a($,"CODE",{});var Ne=r(i);g=n(Ne,"config.json"),Ne.forEach(o),H=n($,`) which in turn defaults to the
`),q=a($,"A",{href:!0});var $e=r(q);U=n($e,"PretrainedConfig"),$e.forEach(o),D=n($," of the model."),$.forEach(o),this.h()},h(){h(q,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig")},m(C,$){x(C,d,$),e(d,f),e(d,u),e(u,c),e(d,_),e(d,i),e(i,g),e(d,H),e(d,q),e(q,U),e(d,D)},d(C){C&&o(d)}}}function mh(w){let d,f,u,c,_;return c=new ke({props:{code:`from transformers import AutoTokenizer, FlaxAutoModelForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){d=s("p"),f=t("Examples:"),u=p(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var g=r(d);f=n(g,"Examples:"),g.forEach(o),u=m(i),v(c.$$.fragment,i)},m(i,g){x(i,d,g),e(d,f),x(i,u,g),y(c,i,g),_=!0},p:xe,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){L(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),M(c,i)}}}function gh(w){let d,f,u,c,_,i,g,H,q,U,D,C,$,Pe,Ne,$e,Te,Ie,ir,qn,lr,dr,Fn,cr,pr,mr,We,gr,An,ur,_r,Dn,hr,fr,br,Be,xr,zn,kr,vr,Cn,yr,jr,qa,He,jt,ho,Vt,Lr,fo,Mr,Fa,E,Kt,wr,Zt,Er,Pn,$r,Tr,Or,Xt,Gr,Nn,Sr,qr,Fr,F,V,bo,Ar,Dr,In,zr,Cr,xo,Pr,Nr,ko,Ir,Wr,Br,ve,vo,Hr,Rr,Wn,Ur,Vr,yo,Kr,Zr,jo,Xr,Jr,K,Lo,Qr,Yr,Bn,ei,ti,Mo,ni,oi,wo,si,ai,ri,Z,Eo,ii,li,Hn,di,ci,$o,pi,mi,To,gi,ui,_i,X,Oo,hi,fi,Rn,bi,xi,Go,ki,vi,So,yi,ji,Li,J,qo,Mi,wi,Un,Ei,$i,Fo,Ti,Oi,Ao,Gi,Si,qi,Q,Do,Fi,Ai,Vn,Di,zi,zo,Ci,Pi,Co,Ni,Ii,Wi,O,Jt,Bi,Po,Hi,Ri,A,Y,No,Ui,Vi,Kn,Ki,Zi,Io,Xi,Ji,Wo,Qi,Yi,el,ye,Bo,tl,nl,Zn,ol,sl,Ho,al,rl,Ro,il,ll,ee,Uo,dl,cl,Xn,pl,ml,Vo,gl,ul,Ko,_l,hl,fl,te,Zo,bl,xl,Jn,kl,vl,Xo,yl,jl,Jo,Ll,Ml,wl,ne,Qo,El,$l,Qn,Tl,Ol,Yo,Gl,Sl,es,ql,Fl,Al,oe,ts,Dl,zl,Yn,Cl,Pl,ns,Nl,Il,os,Wl,Bl,Hl,se,ss,Rl,Ul,eo,Vl,Kl,as,Zl,Xl,rs,Jl,Ql,Yl,Lt,ed,Qt,td,Yt,nd,od,sd,is,ad,rd,Mt,id,wt,ld,Et,dd,Oe,en,cd,tn,pd,ls,md,gd,ud,$t,_d,Ge,nn,hd,on,fd,ds,bd,xd,kd,Tt,vd,Se,sn,yd,an,jd,cs,Ld,Md,wd,Ot,Ed,qe,rn,$d,ln,Td,ps,Od,Gd,Sd,Gt,qd,Fe,dn,Fd,cn,Ad,ms,Dd,zd,Cd,St,Pd,Ae,pn,Nd,mn,Id,gs,Wd,Bd,Hd,qt,Rd,De,gn,Ud,un,Vd,us,Kd,Zd,Xd,Ft,Aa,Re,At,_s,_n,Jd,hs,Qd,Da,P,hn,Yd,fn,ec,to,tc,nc,oc,bn,sc,no,ac,rc,ic,je,ae,fs,lc,dc,bs,cc,pc,xs,mc,gc,ks,uc,_c,hc,Le,vs,fc,bc,ys,xc,kc,js,vc,yc,Ls,jc,Lc,re,Ms,Mc,wc,ws,Ec,$c,Es,Tc,Oc,$s,Gc,Sc,qc,ie,Ts,Fc,Ac,Os,Dc,zc,Gs,Cc,Pc,Ss,Nc,Ic,Wc,G,xn,Bc,qs,Hc,Rc,Me,le,Fs,Uc,Vc,As,Kc,Zc,Ds,Xc,Jc,zs,Qc,Yc,ep,we,Cs,tp,np,Ps,op,sp,Ns,ap,rp,Is,ip,lp,de,Ws,dp,cp,Bs,pp,mp,Hs,gp,up,Rs,_p,hp,fp,ce,Us,bp,xp,Vs,kp,vp,Ks,yp,jp,Zs,Lp,Mp,wp,kn,Ep,vn,$p,Tp,Op,Ee,Gp,Xs,Sp,qp,Js,Fp,Ap,oo,Dp,zp,Cp,yn,Pp,jn,Np,Ip,Wp,Dt,za,Ue,zt,Qs,Ln,Bp,Ys,Hp,Ca,N,Mn,Rp,wn,Up,so,Vp,Kp,Zp,En,Xp,ao,Jp,Qp,Yp,Ve,pe,ea,em,tm,ta,nm,om,na,sm,am,oa,rm,im,lm,me,sa,dm,cm,aa,pm,mm,ra,gm,um,ia,_m,hm,fm,ge,la,bm,xm,da,km,vm,ca,ym,jm,pa,Lm,Mm,wm,z,$n,Em,ma,$m,Tm,Ke,ue,ga,Om,Gm,ua,Sm,qm,_a,Fm,Am,ha,Dm,zm,Cm,_e,fa,Pm,Nm,ba,Im,Wm,xa,Bm,Hm,ka,Rm,Um,Vm,he,va,Km,Zm,ya,Xm,Jm,ja,Qm,Ym,La,eg,tg,ng,Ct,og,Tn,sg,On,ag,rg,ig,Pt,Pa;return i=new rr({}),Vt=new rr({}),Kt=new R({props:{name:"class transformers.generation_utils.GenerationMixin",anchor:"transformers.generation_utils.GenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L460"}}),Jt=new R({props:{name:"generate",anchor:"transformers.generation_utils.GenerationMixin.generate",parameters:[{name:"inputs",val:": typing.Optional[torch.Tensor] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"penalty_alpha",val:": typing.Optional[float] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"typical_p",val:": typing.Optional[float] = None"},{name:"repetition_penalty",val:": typing.Optional[float] = None"},{name:"bad_words_ids",val:": typing.Optional[typing.Iterable[int]] = None"},{name:"force_words_ids",val:": typing.Union[typing.Iterable[int], typing.Iterable[typing.Iterable[int]], NoneType] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"encoder_no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"num_return_sequences",val:": typing.Optional[int] = None"},{name:"max_time",val:": typing.Optional[float] = None"},{name:"max_new_tokens",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"num_beam_groups",val:": typing.Optional[int] = None"},{name:"diversity_penalty",val:": typing.Optional[float] = None"},{name:"prefix_allowed_tokens_fn",val:": typing.Union[typing.Callable[[int, torch.Tensor], typing.List[int]], NoneType] = None"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"renormalize_logits",val:": typing.Optional[bool] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"constraints",val:": typing.Optional[typing.List[transformers.generation_beam_constraints.Constraint]] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"remove_invalid_values",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"exponential_decay_length_penalty",val:": typing.Union[typing.Tuple[int, float], NoneType] = None"},{name:"suppress_tokens",val:": typing.Optional[typing.List[int]] = None"},{name:"begin_suppress_tokens",val:": typing.Optional[typing.List[int]] = None"},{name:"forced_decoder_ids",val:": typing.Optional[typing.List[typing.List[int]]] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.generate.inputs",description:`<strong>inputs</strong> (<code>torch.Tensor</code> of varying shape depending on the modality, <em>optional</em>) &#x2014;
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
should be prefixed with *decoder</em>*.`,name:"forced_decoder_ids"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L988",returnDescription:`
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
`}}),Lt=new V_({props:{warning:!0,$$slots:{default:[Y_]},$$scope:{ctx:w}}}),Mt=new be({props:{anchor:"transformers.generation_utils.GenerationMixin.generate.example",$$slots:{default:[eh]},$$scope:{ctx:w}}}),wt=new be({props:{anchor:"transformers.generation_utils.GenerationMixin.generate.example-2",$$slots:{default:[th]},$$scope:{ctx:w}}}),Et=new be({props:{anchor:"transformers.generation_utils.GenerationMixin.generate.example-3",$$slots:{default:[nh]},$$scope:{ctx:w}}}),en=new R({props:{name:"greedy_search",anchor:"transformers.generation_utils.GenerationMixin.greedy_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
If model is an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L2126",returnDescription:`
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
`}}),$t=new be({props:{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.example",$$slots:{default:[oh]},$$scope:{ctx:w}}}),nn=new R({props:{name:"sample",anchor:"transformers.generation_utils.GenerationMixin.sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L2354",returnDescription:`
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
`}}),Tt=new be({props:{anchor:"transformers.generation_utils.GenerationMixin.sample.example",$$slots:{default:[sh]},$$scope:{ctx:w}}}),sn=new R({props:{name:"beam_search",anchor:"transformers.generation_utils.GenerationMixin.beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L2605",returnDescription:`
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
`}}),Ot=new be({props:{anchor:"transformers.generation_utils.GenerationMixin.beam_search.example",$$slots:{default:[ah]},$$scope:{ctx:w}}}),rn=new R({props:{name:"beam_sample",anchor:"transformers.generation_utils.GenerationMixin.beam_sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L2914",returnDescription:`
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
`}}),Gt=new be({props:{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.example",$$slots:{default:[rh]},$$scope:{ctx:w}}}),dn=new R({props:{name:"contrastive_search",anchor:"transformers.generation_utils.GenerationMixin.contrastive_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"top_k",val:": typing.Optional[int] = 1"},{name:"penalty_alpha",val:": typing.Optional[float] = 0"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.contrastive_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
If model is an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L1786",returnDescription:`
<p><code>ContrastiveSearchDecoderOnlyOutput</code>,
<code>ContrastiveSearchEncoderDecoderOutput</code> or <code>torch.LongTensor</code>: A <code>torch.LongTensor</code>
containing the generated tokens (default behaviour) or a
<code>ContrastiveSearchDecoderOnlyOutput</code> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <code>ContrastiveSearchEncoderDecoderOutput</code> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),St=new be({props:{anchor:"transformers.generation_utils.GenerationMixin.contrastive_search.example",$$slots:{default:[ih]},$$scope:{ctx:w}}}),pn=new R({props:{name:"group_beam_search",anchor:"transformers.generation_utils.GenerationMixin.group_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
model is an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L3230",returnDescription:`
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
`}}),qt=new be({props:{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.example",$$slots:{default:[lh]},$$scope:{ctx:w}}}),gn=new R({props:{name:"constrained_beam_search",anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"constrained_beam_scorer",val:": ConstrainedBeamSearchScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_utils.py#L3592",returnDescription:`
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
`}}),Ft=new be({props:{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.example",$$slots:{default:[dh]},$$scope:{ctx:w}}}),_n=new rr({}),hn=new R({props:{name:"class transformers.generation_tf_utils.TFGenerationMixin",anchor:"transformers.generation_tf_utils.TFGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_tf_utils.py#L429"}}),xn=new R({props:{name:"generate",anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate",parameters:[{name:"input_ids",val:" = None"},{name:"max_length",val:" = None"},{name:"max_new_tokens",val:" = None"},{name:"min_length",val:" = None"},{name:"do_sample",val:" = None"},{name:"early_stopping",val:" = None"},{name:"num_beams",val:" = None"},{name:"temperature",val:" = None"},{name:"penalty_alpha",val:" = None"},{name:"top_k",val:" = None"},{name:"top_p",val:" = None"},{name:"repetition_penalty",val:" = None"},{name:"bad_words_ids",val:" = None"},{name:"bos_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"eos_token_id",val:" = None"},{name:"length_penalty",val:" = None"},{name:"no_repeat_ngram_size",val:" = None"},{name:"num_return_sequences",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_start_token_id",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_scores",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict_in_generate",val:" = None"},{name:"forced_bos_token_id",val:" = None"},{name:"forced_eos_token_id",val:" = None"},{name:"suppress_tokens",val:": typing.Optional[typing.List[int]] = None"},{name:"begin_suppress_tokens",val:": typing.Optional[typing.List[int]] = None"},{name:"forced_decoder_ids",val:": typing.Optional[typing.List[typing.List[int]]] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.input_ids",description:"<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, `(batch_size, sequence_length, &#x2014;",name:"input_ids"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.feature_dim)`",description:`<strong>feature_dim)\`</strong> or <code>(batch_size, num_channels, height, width)</code>, <em>optional</em>) &#x2014;
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
The value used to module the next token probabilities.`,name:"temperature"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.penalty_alpha",description:`<strong>penalty_alpha</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The values balance the model confidence and the degeneration penalty in contrastive search decoding.`,name:"penalty_alpha"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.top_k",description:`<strong>top_k</strong> (<code>int</code>, <em>optional</em>, defaults to 50) &#x2014;
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
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model.`,name:"forced_decoder_ids"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_tf_utils.py#L464",returnDescription:`
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
`}}),Dt=new be({props:{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.example",$$slots:{default:[ch]},$$scope:{ctx:w}}}),Ln=new rr({}),Mn=new R({props:{name:"class transformers.generation_flax_utils.FlaxGenerationMixin",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/generation_flax_utils.py#L125"}}),$n=new R({props:{name:"generate",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate",parameters:[{name:"input_ids",val:": ndarray"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"max_new_tokens",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"prng_key",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"trace",val:": bool = True"},{name:"params",val:": typing.Union[typing.Dict[str, jax._src.numpy.ndarray.ndarray], NoneType] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ct=new V_({props:{warning:!0,$$slots:{default:[ph]},$$scope:{ctx:w}}}),Pt=new be({props:{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.example",$$slots:{default:[mh]},$$scope:{ctx:w}}}),{c(){d=s("meta"),f=p(),u=s("h1"),c=s("a"),_=s("span"),k(i.$$.fragment),g=p(),H=s("span"),q=t("Generation"),U=p(),D=s("p"),C=t("Each framework has a generate method for auto-regressive text generation implemented in their respective "),$=s("code"),Pe=t("GenerationMixin"),Ne=t(" class:"),$e=p(),Te=s("ul"),Ie=s("li"),ir=t("PyTorch "),qn=s("a"),lr=t("generate()"),dr=t(" is implemented in "),Fn=s("a"),cr=t("GenerationMixin"),pr=t("."),mr=p(),We=s("li"),gr=t("TensorFlow "),An=s("a"),ur=t("generate()"),_r=t(" is implemented in "),Dn=s("a"),hr=t("TFGenerationMixin"),fr=t("."),br=p(),Be=s("li"),xr=t("Flax/JAX "),zn=s("a"),kr=t("generate()"),vr=t(" is implemented in "),Cn=s("a"),yr=t("FlaxGenerationMixin"),jr=t("."),qa=p(),He=s("h2"),jt=s("a"),ho=s("span"),k(Vt.$$.fragment),Lr=p(),fo=s("span"),Mr=t("GenerationMixin"),Fa=p(),E=s("div"),k(Kt.$$.fragment),wr=p(),Zt=s("p"),Er=t("A class containing all functions for auto-regressive text generation, to be used as a mixin in "),Pn=s("a"),$r=t("PreTrainedModel"),Tr=t("."),Or=p(),Xt=s("p"),Gr=t("The class exposes "),Nn=s("a"),Sr=t("generate()"),qr=t(", which can be used for:"),Fr=p(),F=s("ul"),V=s("li"),bo=s("em"),Ar=t("greedy decoding"),Dr=t(" by calling "),In=s("a"),zr=t("greedy_search()"),Cr=t(" if "),xo=s("code"),Pr=t("num_beams=1"),Nr=t(` and
`),ko=s("code"),Ir=t("do_sample=False"),Wr=t("."),Br=p(),ve=s("li"),vo=s("em"),Hr=t("contrastive search"),Rr=t(" by calling "),Wn=s("a"),Ur=t("contrastive_search()"),Vr=t(" if "),yo=s("code"),Kr=t("penalty_alpha>0"),Zr=t(`
and `),jo=s("code"),Xr=t("top_k>1"),Jr=p(),K=s("li"),Lo=s("em"),Qr=t("multinomial sampling"),Yr=t(" by calling "),Bn=s("a"),ei=t("sample()"),ti=t(" if "),Mo=s("code"),ni=t("num_beams=1"),oi=t(` and
`),wo=s("code"),si=t("do_sample=True"),ai=t("."),ri=p(),Z=s("li"),Eo=s("em"),ii=t("beam-search decoding"),li=t(" by calling "),Hn=s("a"),di=t("beam_search()"),ci=t(" if "),$o=s("code"),pi=t("num_beams>1"),mi=t(` and
`),To=s("code"),gi=t("do_sample=False"),ui=t("."),_i=p(),X=s("li"),Oo=s("em"),hi=t("beam-search multinomial sampling"),fi=t(" by calling "),Rn=s("a"),bi=t("beam_sample()"),xi=t(` if
`),Go=s("code"),ki=t("num_beams>1"),vi=t(" and "),So=s("code"),yi=t("do_sample=True"),ji=t("."),Li=p(),J=s("li"),qo=s("em"),Mi=t("diverse beam-search decoding"),wi=t(" by calling "),Un=s("a"),Ei=t("group_beam_search()"),$i=t(`, if
`),Fo=s("code"),Ti=t("num_beams>1"),Oi=t(" and "),Ao=s("code"),Gi=t("num_beam_groups>1"),Si=t("."),qi=p(),Q=s("li"),Do=s("em"),Fi=t("constrained beam-search decoding"),Ai=t(" by calling "),Vn=s("a"),Di=t("constrained_beam_search()"),zi=t(`,
if `),zo=s("code"),Ci=t("constraints!=None"),Pi=t(" or "),Co=s("code"),Ni=t("force_words_ids!=None"),Ii=t("."),Wi=p(),O=s("div"),k(Jt.$$.fragment),Bi=p(),Po=s("p"),Hi=t(`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),Ri=p(),A=s("ul"),Y=s("li"),No=s("em"),Ui=t("greedy decoding"),Vi=t(" by calling "),Kn=s("a"),Ki=t("greedy_search()"),Zi=t(" if "),Io=s("code"),Xi=t("num_beams=1"),Ji=t(` and
`),Wo=s("code"),Qi=t("do_sample=False"),Yi=t("."),el=p(),ye=s("li"),Bo=s("em"),tl=t("contrastive search"),nl=t(" by calling "),Zn=s("a"),ol=t("contrastive_search()"),sl=t(` if
`),Ho=s("code"),al=t("penalty_alpha>0."),rl=t(" and "),Ro=s("code"),il=t("top_k>1"),ll=p(),ee=s("li"),Uo=s("em"),dl=t("multinomial sampling"),cl=t(" by calling "),Xn=s("a"),pl=t("sample()"),ml=t(" if "),Vo=s("code"),gl=t("num_beams=1"),ul=t(` and
`),Ko=s("code"),_l=t("do_sample=True"),hl=t("."),fl=p(),te=s("li"),Zo=s("em"),bl=t("beam-search decoding"),xl=t(" by calling "),Jn=s("a"),kl=t("beam_search()"),vl=t(" if "),Xo=s("code"),yl=t("num_beams>1"),jl=t(` and
`),Jo=s("code"),Ll=t("do_sample=False"),Ml=t("."),wl=p(),ne=s("li"),Qo=s("em"),El=t("beam-search multinomial sampling"),$l=t(" by calling "),Qn=s("a"),Tl=t("beam_sample()"),Ol=t(` if
`),Yo=s("code"),Gl=t("num_beams>1"),Sl=t(" and "),es=s("code"),ql=t("do_sample=True"),Fl=t("."),Al=p(),oe=s("li"),ts=s("em"),Dl=t("diverse beam-search decoding"),zl=t(" by calling "),Yn=s("a"),Cl=t("group_beam_search()"),Pl=t(`, if
`),ns=s("code"),Nl=t("num_beams>1"),Il=t(" and "),os=s("code"),Wl=t("num_beam_groups>1"),Bl=t("."),Hl=p(),se=s("li"),ss=s("em"),Rl=t("constrained beam-search decoding"),Ul=t(` by calling
`),eo=s("a"),Vl=t("constrained_beam_search()"),Kl=t(", if "),as=s("code"),Zl=t("constraints!=None"),Xl=t(` or
`),rs=s("code"),Jl=t("force_words_ids!=None"),Ql=t("."),Yl=p(),k(Lt.$$.fragment),ed=p(),Qt=s("p"),td=t("Most of these parameters are explained in more detail in "),Yt=s("a"),nd=t(`this blog
post`),od=t("."),sd=p(),is=s("p"),ad=t("Examples:"),rd=p(),k(Mt.$$.fragment),id=p(),k(wt.$$.fragment),ld=p(),k(Et.$$.fragment),dd=p(),Oe=s("div"),k(en.$$.fragment),cd=p(),tn=s("p"),pd=t("Generates sequences of token ids for models with a language modeling head using "),ls=s("strong"),md=t("greedy decoding"),gd=t(` and can be
used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),ud=p(),k($t.$$.fragment),_d=p(),Ge=s("div"),k(nn.$$.fragment),hd=p(),on=s("p"),fd=t("Generates sequences of token ids for models with a language modeling head using "),ds=s("strong"),bd=t("multinomial sampling"),xd=t(` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),kd=p(),k(Tt.$$.fragment),vd=p(),Se=s("div"),k(sn.$$.fragment),yd=p(),an=s("p"),jd=t("Generates sequences of token ids for models with a language modeling head using "),cs=s("strong"),Ld=t("beam search decoding"),Md=t(` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),wd=p(),k(Ot.$$.fragment),Ed=p(),qe=s("div"),k(rn.$$.fragment),$d=p(),ln=s("p"),Td=t("Generates sequences of token ids for models with a language modeling head using "),ps=s("strong"),Od=t(`beam search multinomial
sampling`),Gd=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Sd=p(),k(Gt.$$.fragment),qd=p(),Fe=s("div"),k(dn.$$.fragment),Fd=p(),cn=s("p"),Ad=t("Generates sequences of token ids for models with a language modeling head using "),ms=s("strong"),Dd=t("contrastive search"),zd=t(` and can
be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Cd=p(),k(St.$$.fragment),Pd=p(),Ae=s("div"),k(pn.$$.fragment),Nd=p(),mn=s("p"),Id=t("Generates sequences of token ids for models with a language modeling head using "),gs=s("strong"),Wd=t(`diverse beam search
decoding`),Bd=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Hd=p(),k(qt.$$.fragment),Rd=p(),De=s("div"),k(gn.$$.fragment),Ud=p(),un=s("p"),Vd=t("Generates sequences of token ids for models with a language modeling head using "),us=s("strong"),Kd=t(`constrained beam search
decoding`),Zd=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Xd=p(),k(Ft.$$.fragment),Aa=p(),Re=s("h2"),At=s("a"),_s=s("span"),k(_n.$$.fragment),Jd=p(),hs=s("span"),Qd=t("TFGenerationMixin"),Da=p(),P=s("div"),k(hn.$$.fragment),Yd=p(),fn=s("p"),ec=t("A class containing all of the functions supporting generation, to be used as a mixin in "),to=s("a"),tc=t("TFPreTrainedModel"),nc=t("."),oc=p(),bn=s("p"),sc=t("The class exposes "),no=s("a"),ac=t("generate()"),rc=t(", which can be used for:"),ic=p(),je=s("ul"),ae=s("li"),fs=s("em"),lc=t("greedy decoding"),dc=t(" by calling "),bs=s("code"),cc=t("greedy_search()"),pc=t(" if "),xs=s("code"),mc=t("num_beams=1"),gc=t(` and
`),ks=s("code"),uc=t("do_sample=False"),_c=t("."),hc=p(),Le=s("li"),vs=s("em"),fc=t("contrastive search"),bc=t(" by calling "),ys=s("code"),xc=t("contrastive_search()"),kc=t(` if
`),js=s("code"),vc=t("penalty_alpha>0"),yc=t(" and "),Ls=s("code"),jc=t("top_k>1"),Lc=p(),re=s("li"),Ms=s("em"),Mc=t("multinomial sampling"),wc=t(" by calling "),ws=s("code"),Ec=t("sample()"),$c=t(" if "),Es=s("code"),Tc=t("num_beams=1"),Oc=t(` and
`),$s=s("code"),Gc=t("do_sample=True"),Sc=t("."),qc=p(),ie=s("li"),Ts=s("em"),Fc=t("beam-search decoding"),Ac=t(" by calling "),Os=s("code"),Dc=t("beam_search()"),zc=t(" if "),Gs=s("code"),Cc=t("num_beams>1"),Pc=t(` and
`),Ss=s("code"),Nc=t("do_sample=False"),Ic=t("."),Wc=p(),G=s("div"),k(xn.$$.fragment),Bc=p(),qs=s("p"),Hc=t(`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),Rc=p(),Me=s("ul"),le=s("li"),Fs=s("em"),Uc=t("greedy decoding"),Vc=t(" by calling "),As=s("code"),Kc=t("greedy_search()"),Zc=t(" if "),Ds=s("code"),Xc=t("num_beams=1"),Jc=t(`
and `),zs=s("code"),Qc=t("do_sample=False"),Yc=t("."),ep=p(),we=s("li"),Cs=s("em"),tp=t("contrastive search"),np=t(" by calling "),Ps=s("code"),op=t("contrastive_search()"),sp=t(` if
`),Ns=s("code"),ap=t("penalty_alpha>0"),rp=t(" and "),Is=s("code"),ip=t("top_k>1"),lp=p(),de=s("li"),Ws=s("em"),dp=t("multinomial sampling"),cp=t(" by calling "),Bs=s("code"),pp=t("sample()"),mp=t(" if "),Hs=s("code"),gp=t("num_beams=1"),up=t(` and
`),Rs=s("code"),_p=t("do_sample=True"),hp=t("."),fp=p(),ce=s("li"),Us=s("em"),bp=t("beam-search decoding"),xp=t(" by calling "),Vs=s("code"),kp=t("beam_search()"),vp=t(" if "),Ks=s("code"),yp=t("num_beams>1"),jp=t(`
and `),Zs=s("code"),Lp=t("do_sample=False"),Mp=t("."),wp=p(),kn=s("p"),Ep=t("Adapted in part from "),vn=s("a"),$p=t(`Facebook\u2019s XLM beam search
code`),Tp=t("."),Op=p(),Ee=s("p"),Gp=t("Apart from "),Xs=s("code"),Sp=t("input_ids"),qp=t(" and "),Js=s("code"),Fp=t("attention_mask"),Ap=t(`, all the arguments below will default to the value of the attribute
of the same name inside the `),oo=s("a"),Dp=t("PretrainedConfig"),zp=t(` of the model. The default values indicated are the default
values of those config.`),Cp=p(),yn=s("p"),Pp=t("Most of these parameters are explained in more detail in "),jn=s("a"),Np=t(`this blog
post`),Ip=t("."),Wp=p(),k(Dt.$$.fragment),za=p(),Ue=s("h2"),zt=s("a"),Qs=s("span"),k(Ln.$$.fragment),Bp=p(),Ys=s("span"),Hp=t("FlaxGenerationMixin"),Ca=p(),N=s("div"),k(Mn.$$.fragment),Rp=p(),wn=s("p"),Up=t(`A class containing all functions for auto-regressive text generation, to be used as a mixin in
`),so=s("a"),Vp=t("FlaxPreTrainedModel"),Kp=t("."),Zp=p(),En=s("p"),Xp=t("The class exposes "),ao=s("a"),Jp=t("generate()"),Qp=t(", which can be used for:"),Yp=p(),Ve=s("ul"),pe=s("li"),ea=s("em"),em=t("greedy decoding"),tm=t(" by calling "),ta=s("code"),nm=t("_greedy_search()"),om=t(` if
`),na=s("code"),sm=t("num_beams=1"),am=t(" and "),oa=s("code"),rm=t("do_sample=False"),im=t("."),lm=p(),me=s("li"),sa=s("em"),dm=t("multinomial sampling"),cm=t(" by calling "),aa=s("code"),pm=t("_sample()"),mm=t(" if "),ra=s("code"),gm=t("num_beams=1"),um=t(`
and `),ia=s("code"),_m=t("do_sample=True"),hm=t("."),fm=p(),ge=s("li"),la=s("em"),bm=t("beam-search decoding"),xm=t(" by calling "),da=s("code"),km=t("~generation_utils.FlaxGenerationMixin._beam_search"),vm=t(" if "),ca=s("code"),ym=t("num_beams>1"),jm=t(`
and `),pa=s("code"),Lm=t("do_sample=False"),Mm=t("."),wm=p(),z=s("div"),k($n.$$.fragment),Em=p(),ma=s("p"),$m=t(`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),Tm=p(),Ke=s("ul"),ue=s("li"),ga=s("em"),Om=t("greedy decoding"),Gm=t(" by calling "),ua=s("code"),Sm=t("_greedy_search()"),qm=t(` if
`),_a=s("code"),Fm=t("num_beams=1"),Am=t(" and "),ha=s("code"),Dm=t("do_sample=False"),zm=t("."),Cm=p(),_e=s("li"),fa=s("em"),Pm=t("multinomial sampling"),Nm=t(" by calling "),ba=s("code"),Im=t("_sample()"),Wm=t(" if "),xa=s("code"),Bm=t("num_beams=1"),Hm=t(`
and `),ka=s("code"),Rm=t("do_sample=True"),Um=t("."),Vm=p(),he=s("li"),va=s("em"),Km=t("beam-search decoding"),Zm=t(" by calling "),ya=s("code"),Xm=t("~generation_utils.FlaxGenerationMixin._beam_search"),Jm=t(" if "),ja=s("code"),Qm=t("num_beams>1"),Ym=t(`
and `),La=s("code"),eg=t("do_sample=False"),tg=t("."),ng=p(),k(Ct.$$.fragment),og=p(),Tn=s("p"),sg=t("Most of these parameters are explained in more detail in "),On=s("a"),ag=t(`this blog
post`),rg=t("."),ig=p(),k(Pt.$$.fragment),this.h()},l(l){const b=J_('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(o),f=m(l),u=a(l,"H1",{class:!0});var Gn=r(u);c=a(Gn,"A",{id:!0,class:!0,href:!0});var Ma=r(c);_=a(Ma,"SPAN",{});var wa=r(_);v(i.$$.fragment,wa),wa.forEach(o),Ma.forEach(o),g=m(Gn),H=a(Gn,"SPAN",{});var Ea=r(H);q=n(Ea,"Generation"),Ea.forEach(o),Gn.forEach(o),U=m(l),D=a(l,"P",{});var Sn=r(D);C=n(Sn,"Each framework has a generate method for auto-regressive text generation implemented in their respective "),$=a(Sn,"CODE",{});var $a=r($);Pe=n($a,"GenerationMixin"),$a.forEach(o),Ne=n(Sn," class:"),Sn.forEach(o),$e=m(l),Te=a(l,"UL",{});var Ze=r(Te);Ie=a(Ze,"LI",{});var Xe=r(Ie);ir=n(Xe,"PyTorch "),qn=a(Xe,"A",{href:!0});var Ta=r(qn);lr=n(Ta,"generate()"),Ta.forEach(o),dr=n(Xe," is implemented in "),Fn=a(Xe,"A",{href:!0});var Oa=r(Fn);cr=n(Oa,"GenerationMixin"),Oa.forEach(o),pr=n(Xe,"."),Xe.forEach(o),mr=m(Ze),We=a(Ze,"LI",{});var Je=r(We);gr=n(Je,"TensorFlow "),An=a(Je,"A",{href:!0});var Ga=r(An);ur=n(Ga,"generate()"),Ga.forEach(o),_r=n(Je," is implemented in "),Dn=a(Je,"A",{href:!0});var Sa=r(Dn);hr=n(Sa,"TFGenerationMixin"),Sa.forEach(o),fr=n(Je,"."),Je.forEach(o),br=m(Ze),Be=a(Ze,"LI",{});var Qe=r(Be);xr=n(Qe,"Flax/JAX "),zn=a(Qe,"A",{href:!0});var lg=r(zn);kr=n(lg,"generate()"),lg.forEach(o),vr=n(Qe," is implemented in "),Cn=a(Qe,"A",{href:!0});var dg=r(Cn);yr=n(dg,"FlaxGenerationMixin"),dg.forEach(o),jr=n(Qe,"."),Qe.forEach(o),Ze.forEach(o),qa=m(l),He=a(l,"H2",{class:!0});var Na=r(He);jt=a(Na,"A",{id:!0,class:!0,href:!0});var cg=r(jt);ho=a(cg,"SPAN",{});var pg=r(ho);v(Vt.$$.fragment,pg),pg.forEach(o),cg.forEach(o),Lr=m(Na),fo=a(Na,"SPAN",{});var mg=r(fo);Mr=n(mg,"GenerationMixin"),mg.forEach(o),Na.forEach(o),Fa=m(l),E=a(l,"DIV",{class:!0});var T=r(E);v(Kt.$$.fragment,T),wr=m(T),Zt=a(T,"P",{});var Ia=r(Zt);Er=n(Ia,"A class containing all functions for auto-regressive text generation, to be used as a mixin in "),Pn=a(Ia,"A",{href:!0});var gg=r(Pn);$r=n(gg,"PreTrainedModel"),gg.forEach(o),Tr=n(Ia,"."),Ia.forEach(o),Or=m(T),Xt=a(T,"P",{});var Wa=r(Xt);Gr=n(Wa,"The class exposes "),Nn=a(Wa,"A",{href:!0});var ug=r(Nn);Sr=n(ug,"generate()"),ug.forEach(o),qr=n(Wa,", which can be used for:"),Wa.forEach(o),Fr=m(T),F=a(T,"UL",{});var I=r(F);V=a(I,"LI",{});var Ye=r(V);bo=a(Ye,"EM",{});var _g=r(bo);Ar=n(_g,"greedy decoding"),_g.forEach(o),Dr=n(Ye," by calling "),In=a(Ye,"A",{href:!0});var hg=r(In);zr=n(hg,"greedy_search()"),hg.forEach(o),Cr=n(Ye," if "),xo=a(Ye,"CODE",{});var fg=r(xo);Pr=n(fg,"num_beams=1"),fg.forEach(o),Nr=n(Ye,` and
`),ko=a(Ye,"CODE",{});var bg=r(ko);Ir=n(bg,"do_sample=False"),bg.forEach(o),Wr=n(Ye,"."),Ye.forEach(o),Br=m(I),ve=a(I,"LI",{});var Nt=r(ve);vo=a(Nt,"EM",{});var xg=r(vo);Hr=n(xg,"contrastive search"),xg.forEach(o),Rr=n(Nt," by calling "),Wn=a(Nt,"A",{href:!0});var kg=r(Wn);Ur=n(kg,"contrastive_search()"),kg.forEach(o),Vr=n(Nt," if "),yo=a(Nt,"CODE",{});var vg=r(yo);Kr=n(vg,"penalty_alpha>0"),vg.forEach(o),Zr=n(Nt,`
and `),jo=a(Nt,"CODE",{});var yg=r(jo);Xr=n(yg,"top_k>1"),yg.forEach(o),Nt.forEach(o),Jr=m(I),K=a(I,"LI",{});var et=r(K);Lo=a(et,"EM",{});var jg=r(Lo);Qr=n(jg,"multinomial sampling"),jg.forEach(o),Yr=n(et," by calling "),Bn=a(et,"A",{href:!0});var Lg=r(Bn);ei=n(Lg,"sample()"),Lg.forEach(o),ti=n(et," if "),Mo=a(et,"CODE",{});var Mg=r(Mo);ni=n(Mg,"num_beams=1"),Mg.forEach(o),oi=n(et,` and
`),wo=a(et,"CODE",{});var wg=r(wo);si=n(wg,"do_sample=True"),wg.forEach(o),ai=n(et,"."),et.forEach(o),ri=m(I),Z=a(I,"LI",{});var tt=r(Z);Eo=a(tt,"EM",{});var Eg=r(Eo);ii=n(Eg,"beam-search decoding"),Eg.forEach(o),li=n(tt," by calling "),Hn=a(tt,"A",{href:!0});var $g=r(Hn);di=n($g,"beam_search()"),$g.forEach(o),ci=n(tt," if "),$o=a(tt,"CODE",{});var Tg=r($o);pi=n(Tg,"num_beams>1"),Tg.forEach(o),mi=n(tt,` and
`),To=a(tt,"CODE",{});var Og=r(To);gi=n(Og,"do_sample=False"),Og.forEach(o),ui=n(tt,"."),tt.forEach(o),_i=m(I),X=a(I,"LI",{});var nt=r(X);Oo=a(nt,"EM",{});var Gg=r(Oo);hi=n(Gg,"beam-search multinomial sampling"),Gg.forEach(o),fi=n(nt," by calling "),Rn=a(nt,"A",{href:!0});var Sg=r(Rn);bi=n(Sg,"beam_sample()"),Sg.forEach(o),xi=n(nt,` if
`),Go=a(nt,"CODE",{});var qg=r(Go);ki=n(qg,"num_beams>1"),qg.forEach(o),vi=n(nt," and "),So=a(nt,"CODE",{});var Fg=r(So);yi=n(Fg,"do_sample=True"),Fg.forEach(o),ji=n(nt,"."),nt.forEach(o),Li=m(I),J=a(I,"LI",{});var ot=r(J);qo=a(ot,"EM",{});var Ag=r(qo);Mi=n(Ag,"diverse beam-search decoding"),Ag.forEach(o),wi=n(ot," by calling "),Un=a(ot,"A",{href:!0});var Dg=r(Un);Ei=n(Dg,"group_beam_search()"),Dg.forEach(o),$i=n(ot,`, if
`),Fo=a(ot,"CODE",{});var zg=r(Fo);Ti=n(zg,"num_beams>1"),zg.forEach(o),Oi=n(ot," and "),Ao=a(ot,"CODE",{});var Cg=r(Ao);Gi=n(Cg,"num_beam_groups>1"),Cg.forEach(o),Si=n(ot,"."),ot.forEach(o),qi=m(I),Q=a(I,"LI",{});var st=r(Q);Do=a(st,"EM",{});var Pg=r(Do);Fi=n(Pg,"constrained beam-search decoding"),Pg.forEach(o),Ai=n(st," by calling "),Vn=a(st,"A",{href:!0});var Ng=r(Vn);Di=n(Ng,"constrained_beam_search()"),Ng.forEach(o),zi=n(st,`,
if `),zo=a(st,"CODE",{});var Ig=r(zo);Ci=n(Ig,"constraints!=None"),Ig.forEach(o),Pi=n(st," or "),Co=a(st,"CODE",{});var Wg=r(Co);Ni=n(Wg,"force_words_ids!=None"),Wg.forEach(o),Ii=n(st,"."),st.forEach(o),I.forEach(o),Wi=m(T),O=a(T,"DIV",{class:!0});var S=r(O);v(Jt.$$.fragment,S),Bi=m(S),Po=a(S,"P",{});var Bg=r(Po);Hi=n(Bg,`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),Bg.forEach(o),Ri=m(S),A=a(S,"UL",{});var W=r(A);Y=a(W,"LI",{});var at=r(Y);No=a(at,"EM",{});var Hg=r(No);Ui=n(Hg,"greedy decoding"),Hg.forEach(o),Vi=n(at," by calling "),Kn=a(at,"A",{href:!0});var Rg=r(Kn);Ki=n(Rg,"greedy_search()"),Rg.forEach(o),Zi=n(at," if "),Io=a(at,"CODE",{});var Ug=r(Io);Xi=n(Ug,"num_beams=1"),Ug.forEach(o),Ji=n(at,` and
`),Wo=a(at,"CODE",{});var Vg=r(Wo);Qi=n(Vg,"do_sample=False"),Vg.forEach(o),Yi=n(at,"."),at.forEach(o),el=m(W),ye=a(W,"LI",{});var It=r(ye);Bo=a(It,"EM",{});var Kg=r(Bo);tl=n(Kg,"contrastive search"),Kg.forEach(o),nl=n(It," by calling "),Zn=a(It,"A",{href:!0});var Zg=r(Zn);ol=n(Zg,"contrastive_search()"),Zg.forEach(o),sl=n(It,` if
`),Ho=a(It,"CODE",{});var Xg=r(Ho);al=n(Xg,"penalty_alpha>0."),Xg.forEach(o),rl=n(It," and "),Ro=a(It,"CODE",{});var Jg=r(Ro);il=n(Jg,"top_k>1"),Jg.forEach(o),It.forEach(o),ll=m(W),ee=a(W,"LI",{});var rt=r(ee);Uo=a(rt,"EM",{});var Qg=r(Uo);dl=n(Qg,"multinomial sampling"),Qg.forEach(o),cl=n(rt," by calling "),Xn=a(rt,"A",{href:!0});var Yg=r(Xn);pl=n(Yg,"sample()"),Yg.forEach(o),ml=n(rt," if "),Vo=a(rt,"CODE",{});var eu=r(Vo);gl=n(eu,"num_beams=1"),eu.forEach(o),ul=n(rt,` and
`),Ko=a(rt,"CODE",{});var tu=r(Ko);_l=n(tu,"do_sample=True"),tu.forEach(o),hl=n(rt,"."),rt.forEach(o),fl=m(W),te=a(W,"LI",{});var it=r(te);Zo=a(it,"EM",{});var nu=r(Zo);bl=n(nu,"beam-search decoding"),nu.forEach(o),xl=n(it," by calling "),Jn=a(it,"A",{href:!0});var ou=r(Jn);kl=n(ou,"beam_search()"),ou.forEach(o),vl=n(it," if "),Xo=a(it,"CODE",{});var su=r(Xo);yl=n(su,"num_beams>1"),su.forEach(o),jl=n(it,` and
`),Jo=a(it,"CODE",{});var au=r(Jo);Ll=n(au,"do_sample=False"),au.forEach(o),Ml=n(it,"."),it.forEach(o),wl=m(W),ne=a(W,"LI",{});var lt=r(ne);Qo=a(lt,"EM",{});var ru=r(Qo);El=n(ru,"beam-search multinomial sampling"),ru.forEach(o),$l=n(lt," by calling "),Qn=a(lt,"A",{href:!0});var iu=r(Qn);Tl=n(iu,"beam_sample()"),iu.forEach(o),Ol=n(lt,` if
`),Yo=a(lt,"CODE",{});var lu=r(Yo);Gl=n(lu,"num_beams>1"),lu.forEach(o),Sl=n(lt," and "),es=a(lt,"CODE",{});var du=r(es);ql=n(du,"do_sample=True"),du.forEach(o),Fl=n(lt,"."),lt.forEach(o),Al=m(W),oe=a(W,"LI",{});var dt=r(oe);ts=a(dt,"EM",{});var cu=r(ts);Dl=n(cu,"diverse beam-search decoding"),cu.forEach(o),zl=n(dt," by calling "),Yn=a(dt,"A",{href:!0});var pu=r(Yn);Cl=n(pu,"group_beam_search()"),pu.forEach(o),Pl=n(dt,`, if
`),ns=a(dt,"CODE",{});var mu=r(ns);Nl=n(mu,"num_beams>1"),mu.forEach(o),Il=n(dt," and "),os=a(dt,"CODE",{});var gu=r(os);Wl=n(gu,"num_beam_groups>1"),gu.forEach(o),Bl=n(dt,"."),dt.forEach(o),Hl=m(W),se=a(W,"LI",{});var ct=r(se);ss=a(ct,"EM",{});var uu=r(ss);Rl=n(uu,"constrained beam-search decoding"),uu.forEach(o),Ul=n(ct,` by calling
`),eo=a(ct,"A",{href:!0});var _u=r(eo);Vl=n(_u,"constrained_beam_search()"),_u.forEach(o),Kl=n(ct,", if "),as=a(ct,"CODE",{});var hu=r(as);Zl=n(hu,"constraints!=None"),hu.forEach(o),Xl=n(ct,` or
`),rs=a(ct,"CODE",{});var fu=r(rs);Jl=n(fu,"force_words_ids!=None"),fu.forEach(o),Ql=n(ct,"."),ct.forEach(o),W.forEach(o),Yl=m(S),v(Lt.$$.fragment,S),ed=m(S),Qt=a(S,"P",{});var Ba=r(Qt);td=n(Ba,"Most of these parameters are explained in more detail in "),Yt=a(Ba,"A",{href:!0,rel:!0});var bu=r(Yt);nd=n(bu,`this blog
post`),bu.forEach(o),od=n(Ba,"."),Ba.forEach(o),sd=m(S),is=a(S,"P",{});var xu=r(is);ad=n(xu,"Examples:"),xu.forEach(o),rd=m(S),v(Mt.$$.fragment,S),id=m(S),v(wt.$$.fragment,S),ld=m(S),v(Et.$$.fragment,S),S.forEach(o),dd=m(T),Oe=a(T,"DIV",{class:!0});var ro=r(Oe);v(en.$$.fragment,ro),cd=m(ro),tn=a(ro,"P",{});var Ha=r(tn);pd=n(Ha,"Generates sequences of token ids for models with a language modeling head using "),ls=a(Ha,"STRONG",{});var ku=r(ls);md=n(ku,"greedy decoding"),ku.forEach(o),gd=n(Ha,` and can be
used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Ha.forEach(o),ud=m(ro),v($t.$$.fragment,ro),ro.forEach(o),_d=m(T),Ge=a(T,"DIV",{class:!0});var io=r(Ge);v(nn.$$.fragment,io),hd=m(io),on=a(io,"P",{});var Ra=r(on);fd=n(Ra,"Generates sequences of token ids for models with a language modeling head using "),ds=a(Ra,"STRONG",{});var vu=r(ds);bd=n(vu,"multinomial sampling"),vu.forEach(o),xd=n(Ra,` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Ra.forEach(o),kd=m(io),v(Tt.$$.fragment,io),io.forEach(o),vd=m(T),Se=a(T,"DIV",{class:!0});var lo=r(Se);v(sn.$$.fragment,lo),yd=m(lo),an=a(lo,"P",{});var Ua=r(an);jd=n(Ua,"Generates sequences of token ids for models with a language modeling head using "),cs=a(Ua,"STRONG",{});var yu=r(cs);Ld=n(yu,"beam search decoding"),yu.forEach(o),Md=n(Ua,` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Ua.forEach(o),wd=m(lo),v(Ot.$$.fragment,lo),lo.forEach(o),Ed=m(T),qe=a(T,"DIV",{class:!0});var co=r(qe);v(rn.$$.fragment,co),$d=m(co),ln=a(co,"P",{});var Va=r(ln);Td=n(Va,"Generates sequences of token ids for models with a language modeling head using "),ps=a(Va,"STRONG",{});var ju=r(ps);Od=n(ju,`beam search multinomial
sampling`),ju.forEach(o),Gd=n(Va," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Va.forEach(o),Sd=m(co),v(Gt.$$.fragment,co),co.forEach(o),qd=m(T),Fe=a(T,"DIV",{class:!0});var po=r(Fe);v(dn.$$.fragment,po),Fd=m(po),cn=a(po,"P",{});var Ka=r(cn);Ad=n(Ka,"Generates sequences of token ids for models with a language modeling head using "),ms=a(Ka,"STRONG",{});var Lu=r(ms);Dd=n(Lu,"contrastive search"),Lu.forEach(o),zd=n(Ka,` and can
be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Ka.forEach(o),Cd=m(po),v(St.$$.fragment,po),po.forEach(o),Pd=m(T),Ae=a(T,"DIV",{class:!0});var mo=r(Ae);v(pn.$$.fragment,mo),Nd=m(mo),mn=a(mo,"P",{});var Za=r(mn);Id=n(Za,"Generates sequences of token ids for models with a language modeling head using "),gs=a(Za,"STRONG",{});var Mu=r(gs);Wd=n(Mu,`diverse beam search
decoding`),Mu.forEach(o),Bd=n(Za," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Za.forEach(o),Hd=m(mo),v(qt.$$.fragment,mo),mo.forEach(o),Rd=m(T),De=a(T,"DIV",{class:!0});var go=r(De);v(gn.$$.fragment,go),Ud=m(go),un=a(go,"P",{});var Xa=r(un);Vd=n(Xa,"Generates sequences of token ids for models with a language modeling head using "),us=a(Xa,"STRONG",{});var wu=r(us);Kd=n(wu,`constrained beam search
decoding`),wu.forEach(o),Zd=n(Xa," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Xa.forEach(o),Xd=m(go),v(Ft.$$.fragment,go),go.forEach(o),T.forEach(o),Aa=m(l),Re=a(l,"H2",{class:!0});var Ja=r(Re);At=a(Ja,"A",{id:!0,class:!0,href:!0});var Eu=r(At);_s=a(Eu,"SPAN",{});var $u=r(_s);v(_n.$$.fragment,$u),$u.forEach(o),Eu.forEach(o),Jd=m(Ja),hs=a(Ja,"SPAN",{});var Tu=r(hs);Qd=n(Tu,"TFGenerationMixin"),Tu.forEach(o),Ja.forEach(o),Da=m(l),P=a(l,"DIV",{class:!0});var ze=r(P);v(hn.$$.fragment,ze),Yd=m(ze),fn=a(ze,"P",{});var Qa=r(fn);ec=n(Qa,"A class containing all of the functions supporting generation, to be used as a mixin in "),to=a(Qa,"A",{href:!0});var Ou=r(to);tc=n(Ou,"TFPreTrainedModel"),Ou.forEach(o),nc=n(Qa,"."),Qa.forEach(o),oc=m(ze),bn=a(ze,"P",{});var Ya=r(bn);sc=n(Ya,"The class exposes "),no=a(Ya,"A",{href:!0});var Gu=r(no);ac=n(Gu,"generate()"),Gu.forEach(o),rc=n(Ya,", which can be used for:"),Ya.forEach(o),ic=m(ze),je=a(ze,"UL",{});var Wt=r(je);ae=a(Wt,"LI",{});var pt=r(ae);fs=a(pt,"EM",{});var Su=r(fs);lc=n(Su,"greedy decoding"),Su.forEach(o),dc=n(pt," by calling "),bs=a(pt,"CODE",{});var qu=r(bs);cc=n(qu,"greedy_search()"),qu.forEach(o),pc=n(pt," if "),xs=a(pt,"CODE",{});var Fu=r(xs);mc=n(Fu,"num_beams=1"),Fu.forEach(o),gc=n(pt,` and
`),ks=a(pt,"CODE",{});var Au=r(ks);uc=n(Au,"do_sample=False"),Au.forEach(o),_c=n(pt,"."),pt.forEach(o),hc=m(Wt),Le=a(Wt,"LI",{});var Bt=r(Le);vs=a(Bt,"EM",{});var Du=r(vs);fc=n(Du,"contrastive search"),Du.forEach(o),bc=n(Bt," by calling "),ys=a(Bt,"CODE",{});var zu=r(ys);xc=n(zu,"contrastive_search()"),zu.forEach(o),kc=n(Bt,` if
`),js=a(Bt,"CODE",{});var Cu=r(js);vc=n(Cu,"penalty_alpha>0"),Cu.forEach(o),yc=n(Bt," and "),Ls=a(Bt,"CODE",{});var Pu=r(Ls);jc=n(Pu,"top_k>1"),Pu.forEach(o),Bt.forEach(o),Lc=m(Wt),re=a(Wt,"LI",{});var mt=r(re);Ms=a(mt,"EM",{});var Nu=r(Ms);Mc=n(Nu,"multinomial sampling"),Nu.forEach(o),wc=n(mt," by calling "),ws=a(mt,"CODE",{});var Iu=r(ws);Ec=n(Iu,"sample()"),Iu.forEach(o),$c=n(mt," if "),Es=a(mt,"CODE",{});var Wu=r(Es);Tc=n(Wu,"num_beams=1"),Wu.forEach(o),Oc=n(mt,` and
`),$s=a(mt,"CODE",{});var Bu=r($s);Gc=n(Bu,"do_sample=True"),Bu.forEach(o),Sc=n(mt,"."),mt.forEach(o),qc=m(Wt),ie=a(Wt,"LI",{});var gt=r(ie);Ts=a(gt,"EM",{});var Hu=r(Ts);Fc=n(Hu,"beam-search decoding"),Hu.forEach(o),Ac=n(gt," by calling "),Os=a(gt,"CODE",{});var Ru=r(Os);Dc=n(Ru,"beam_search()"),Ru.forEach(o),zc=n(gt," if "),Gs=a(gt,"CODE",{});var Uu=r(Gs);Cc=n(Uu,"num_beams>1"),Uu.forEach(o),Pc=n(gt,` and
`),Ss=a(gt,"CODE",{});var Vu=r(Ss);Nc=n(Vu,"do_sample=False"),Vu.forEach(o),Ic=n(gt,"."),gt.forEach(o),Wt.forEach(o),Wc=m(ze),G=a(ze,"DIV",{class:!0});var B=r(G);v(xn.$$.fragment,B),Bc=m(B),qs=a(B,"P",{});var Ku=r(qs);Hc=n(Ku,`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),Ku.forEach(o),Rc=m(B),Me=a(B,"UL",{});var Ht=r(Me);le=a(Ht,"LI",{});var ut=r(le);Fs=a(ut,"EM",{});var Zu=r(Fs);Uc=n(Zu,"greedy decoding"),Zu.forEach(o),Vc=n(ut," by calling "),As=a(ut,"CODE",{});var Xu=r(As);Kc=n(Xu,"greedy_search()"),Xu.forEach(o),Zc=n(ut," if "),Ds=a(ut,"CODE",{});var Ju=r(Ds);Xc=n(Ju,"num_beams=1"),Ju.forEach(o),Jc=n(ut,`
and `),zs=a(ut,"CODE",{});var Qu=r(zs);Qc=n(Qu,"do_sample=False"),Qu.forEach(o),Yc=n(ut,"."),ut.forEach(o),ep=m(Ht),we=a(Ht,"LI",{});var Rt=r(we);Cs=a(Rt,"EM",{});var Yu=r(Cs);tp=n(Yu,"contrastive search"),Yu.forEach(o),np=n(Rt," by calling "),Ps=a(Rt,"CODE",{});var e_=r(Ps);op=n(e_,"contrastive_search()"),e_.forEach(o),sp=n(Rt,` if
`),Ns=a(Rt,"CODE",{});var t_=r(Ns);ap=n(t_,"penalty_alpha>0"),t_.forEach(o),rp=n(Rt," and "),Is=a(Rt,"CODE",{});var n_=r(Is);ip=n(n_,"top_k>1"),n_.forEach(o),Rt.forEach(o),lp=m(Ht),de=a(Ht,"LI",{});var _t=r(de);Ws=a(_t,"EM",{});var o_=r(Ws);dp=n(o_,"multinomial sampling"),o_.forEach(o),cp=n(_t," by calling "),Bs=a(_t,"CODE",{});var s_=r(Bs);pp=n(s_,"sample()"),s_.forEach(o),mp=n(_t," if "),Hs=a(_t,"CODE",{});var a_=r(Hs);gp=n(a_,"num_beams=1"),a_.forEach(o),up=n(_t,` and
`),Rs=a(_t,"CODE",{});var r_=r(Rs);_p=n(r_,"do_sample=True"),r_.forEach(o),hp=n(_t,"."),_t.forEach(o),fp=m(Ht),ce=a(Ht,"LI",{});var ht=r(ce);Us=a(ht,"EM",{});var i_=r(Us);bp=n(i_,"beam-search decoding"),i_.forEach(o),xp=n(ht," by calling "),Vs=a(ht,"CODE",{});var l_=r(Vs);kp=n(l_,"beam_search()"),l_.forEach(o),vp=n(ht," if "),Ks=a(ht,"CODE",{});var d_=r(Ks);yp=n(d_,"num_beams>1"),d_.forEach(o),jp=n(ht,`
and `),Zs=a(ht,"CODE",{});var c_=r(Zs);Lp=n(c_,"do_sample=False"),c_.forEach(o),Mp=n(ht,"."),ht.forEach(o),Ht.forEach(o),wp=m(B),kn=a(B,"P",{});var er=r(kn);Ep=n(er,"Adapted in part from "),vn=a(er,"A",{href:!0,rel:!0});var p_=r(vn);$p=n(p_,`Facebook\u2019s XLM beam search
code`),p_.forEach(o),Tp=n(er,"."),er.forEach(o),Op=m(B),Ee=a(B,"P",{});var Ut=r(Ee);Gp=n(Ut,"Apart from "),Xs=a(Ut,"CODE",{});var m_=r(Xs);Sp=n(m_,"input_ids"),m_.forEach(o),qp=n(Ut," and "),Js=a(Ut,"CODE",{});var g_=r(Js);Fp=n(g_,"attention_mask"),g_.forEach(o),Ap=n(Ut,`, all the arguments below will default to the value of the attribute
of the same name inside the `),oo=a(Ut,"A",{href:!0});var u_=r(oo);Dp=n(u_,"PretrainedConfig"),u_.forEach(o),zp=n(Ut,` of the model. The default values indicated are the default
values of those config.`),Ut.forEach(o),Cp=m(B),yn=a(B,"P",{});var tr=r(yn);Pp=n(tr,"Most of these parameters are explained in more detail in "),jn=a(tr,"A",{href:!0,rel:!0});var __=r(jn);Np=n(__,`this blog
post`),__.forEach(o),Ip=n(tr,"."),tr.forEach(o),Wp=m(B),v(Dt.$$.fragment,B),B.forEach(o),ze.forEach(o),za=m(l),Ue=a(l,"H2",{class:!0});var nr=r(Ue);zt=a(nr,"A",{id:!0,class:!0,href:!0});var h_=r(zt);Qs=a(h_,"SPAN",{});var f_=r(Qs);v(Ln.$$.fragment,f_),f_.forEach(o),h_.forEach(o),Bp=m(nr),Ys=a(nr,"SPAN",{});var b_=r(Ys);Hp=n(b_,"FlaxGenerationMixin"),b_.forEach(o),nr.forEach(o),Ca=m(l),N=a(l,"DIV",{class:!0});var Ce=r(N);v(Mn.$$.fragment,Ce),Rp=m(Ce),wn=a(Ce,"P",{});var or=r(wn);Up=n(or,`A class containing all functions for auto-regressive text generation, to be used as a mixin in
`),so=a(or,"A",{href:!0});var x_=r(so);Vp=n(x_,"FlaxPreTrainedModel"),x_.forEach(o),Kp=n(or,"."),or.forEach(o),Zp=m(Ce),En=a(Ce,"P",{});var sr=r(En);Xp=n(sr,"The class exposes "),ao=a(sr,"A",{href:!0});var k_=r(ao);Jp=n(k_,"generate()"),k_.forEach(o),Qp=n(sr,", which can be used for:"),sr.forEach(o),Yp=m(Ce),Ve=a(Ce,"UL",{});var uo=r(Ve);pe=a(uo,"LI",{});var ft=r(pe);ea=a(ft,"EM",{});var v_=r(ea);em=n(v_,"greedy decoding"),v_.forEach(o),tm=n(ft," by calling "),ta=a(ft,"CODE",{});var y_=r(ta);nm=n(y_,"_greedy_search()"),y_.forEach(o),om=n(ft,` if
`),na=a(ft,"CODE",{});var j_=r(na);sm=n(j_,"num_beams=1"),j_.forEach(o),am=n(ft," and "),oa=a(ft,"CODE",{});var L_=r(oa);rm=n(L_,"do_sample=False"),L_.forEach(o),im=n(ft,"."),ft.forEach(o),lm=m(uo),me=a(uo,"LI",{});var bt=r(me);sa=a(bt,"EM",{});var M_=r(sa);dm=n(M_,"multinomial sampling"),M_.forEach(o),cm=n(bt," by calling "),aa=a(bt,"CODE",{});var w_=r(aa);pm=n(w_,"_sample()"),w_.forEach(o),mm=n(bt," if "),ra=a(bt,"CODE",{});var E_=r(ra);gm=n(E_,"num_beams=1"),E_.forEach(o),um=n(bt,`
and `),ia=a(bt,"CODE",{});var $_=r(ia);_m=n($_,"do_sample=True"),$_.forEach(o),hm=n(bt,"."),bt.forEach(o),fm=m(uo),ge=a(uo,"LI",{});var xt=r(ge);la=a(xt,"EM",{});var T_=r(la);bm=n(T_,"beam-search decoding"),T_.forEach(o),xm=n(xt," by calling "),da=a(xt,"CODE",{});var O_=r(da);km=n(O_,"~generation_utils.FlaxGenerationMixin._beam_search"),O_.forEach(o),vm=n(xt," if "),ca=a(xt,"CODE",{});var G_=r(ca);ym=n(G_,"num_beams>1"),G_.forEach(o),jm=n(xt,`
and `),pa=a(xt,"CODE",{});var S_=r(pa);Lm=n(S_,"do_sample=False"),S_.forEach(o),Mm=n(xt,"."),xt.forEach(o),uo.forEach(o),wm=m(Ce),z=a(Ce,"DIV",{class:!0});var fe=r(z);v($n.$$.fragment,fe),Em=m(fe),ma=a(fe,"P",{});var q_=r(ma);$m=n(q_,`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),q_.forEach(o),Tm=m(fe),Ke=a(fe,"UL",{});var _o=r(Ke);ue=a(_o,"LI",{});var kt=r(ue);ga=a(kt,"EM",{});var F_=r(ga);Om=n(F_,"greedy decoding"),F_.forEach(o),Gm=n(kt," by calling "),ua=a(kt,"CODE",{});var A_=r(ua);Sm=n(A_,"_greedy_search()"),A_.forEach(o),qm=n(kt,` if
`),_a=a(kt,"CODE",{});var D_=r(_a);Fm=n(D_,"num_beams=1"),D_.forEach(o),Am=n(kt," and "),ha=a(kt,"CODE",{});var z_=r(ha);Dm=n(z_,"do_sample=False"),z_.forEach(o),zm=n(kt,"."),kt.forEach(o),Cm=m(_o),_e=a(_o,"LI",{});var vt=r(_e);fa=a(vt,"EM",{});var C_=r(fa);Pm=n(C_,"multinomial sampling"),C_.forEach(o),Nm=n(vt," by calling "),ba=a(vt,"CODE",{});var P_=r(ba);Im=n(P_,"_sample()"),P_.forEach(o),Wm=n(vt," if "),xa=a(vt,"CODE",{});var N_=r(xa);Bm=n(N_,"num_beams=1"),N_.forEach(o),Hm=n(vt,`
and `),ka=a(vt,"CODE",{});var I_=r(ka);Rm=n(I_,"do_sample=True"),I_.forEach(o),Um=n(vt,"."),vt.forEach(o),Vm=m(_o),he=a(_o,"LI",{});var yt=r(he);va=a(yt,"EM",{});var W_=r(va);Km=n(W_,"beam-search decoding"),W_.forEach(o),Zm=n(yt," by calling "),ya=a(yt,"CODE",{});var B_=r(ya);Xm=n(B_,"~generation_utils.FlaxGenerationMixin._beam_search"),B_.forEach(o),Jm=n(yt," if "),ja=a(yt,"CODE",{});var H_=r(ja);Qm=n(H_,"num_beams>1"),H_.forEach(o),Ym=n(yt,`
and `),La=a(yt,"CODE",{});var R_=r(La);eg=n(R_,"do_sample=False"),R_.forEach(o),tg=n(yt,"."),yt.forEach(o),_o.forEach(o),ng=m(fe),v(Ct.$$.fragment,fe),og=m(fe),Tn=a(fe,"P",{});var ar=r(Tn);sg=n(ar,"Most of these parameters are explained in more detail in "),On=a(ar,"A",{href:!0,rel:!0});var U_=r(On);ag=n(U_,`this blog
post`),U_.forEach(o),rg=n(ar,"."),ar.forEach(o),ig=m(fe),v(Pt.$$.fragment,fe),fe.forEach(o),Ce.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(uh)),h(c,"id","generation"),h(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(c,"href","#generation"),h(u,"class","relative group"),h(qn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(Fn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin"),h(An,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin.generate"),h(Dn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin"),h(zn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin.generate"),h(Cn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin"),h(jt,"id","transformers.generation_utils.GenerationMixin"),h(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(jt,"href","#transformers.generation_utils.GenerationMixin"),h(He,"class","relative group"),h(Pn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Nn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(In,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),h(Wn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.contrastive_search"),h(Bn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),h(Hn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),h(Rn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),h(Un,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),h(Vn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.constrained_beam_search"),h(Kn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),h(Zn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.contrastive_search"),h(Xn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),h(Jn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),h(Qn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),h(Yn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),h(eo,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.constrained_beam_search"),h(Yt,"href","https://huggingface.co/blog/how-to-generate"),h(Yt,"rel","nofollow"),h(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(At,"id","transformers.generation_tf_utils.TFGenerationMixin"),h(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(At,"href","#transformers.generation_tf_utils.TFGenerationMixin"),h(Re,"class","relative group"),h(to,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(no,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin.generate"),h(vn,"href","https://github.com/facebookresearch/XLM/blob/9e6f6814d17be4fe5b15f2e6c43eb2b2d76daeb4/src/model/transformer.py#L529"),h(vn,"rel","nofollow"),h(oo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(jn,"href","https://huggingface.co/blog/how-to-generate"),h(jn,"rel","nofollow"),h(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(zt,"id","transformers.generation_flax_utils.FlaxGenerationMixin"),h(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zt,"href","#transformers.generation_flax_utils.FlaxGenerationMixin"),h(Ue,"class","relative group"),h(so,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(ao,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin.generate"),h(On,"href","https://huggingface.co/blog/how-to-generate"),h(On,"rel","nofollow"),h(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(l,b){e(document.head,d),x(l,f,b),x(l,u,b),e(u,c),e(c,_),y(i,_,null),e(u,g),e(u,H),e(H,q),x(l,U,b),x(l,D,b),e(D,C),e(D,$),e($,Pe),e(D,Ne),x(l,$e,b),x(l,Te,b),e(Te,Ie),e(Ie,ir),e(Ie,qn),e(qn,lr),e(Ie,dr),e(Ie,Fn),e(Fn,cr),e(Ie,pr),e(Te,mr),e(Te,We),e(We,gr),e(We,An),e(An,ur),e(We,_r),e(We,Dn),e(Dn,hr),e(We,fr),e(Te,br),e(Te,Be),e(Be,xr),e(Be,zn),e(zn,kr),e(Be,vr),e(Be,Cn),e(Cn,yr),e(Be,jr),x(l,qa,b),x(l,He,b),e(He,jt),e(jt,ho),y(Vt,ho,null),e(He,Lr),e(He,fo),e(fo,Mr),x(l,Fa,b),x(l,E,b),y(Kt,E,null),e(E,wr),e(E,Zt),e(Zt,Er),e(Zt,Pn),e(Pn,$r),e(Zt,Tr),e(E,Or),e(E,Xt),e(Xt,Gr),e(Xt,Nn),e(Nn,Sr),e(Xt,qr),e(E,Fr),e(E,F),e(F,V),e(V,bo),e(bo,Ar),e(V,Dr),e(V,In),e(In,zr),e(V,Cr),e(V,xo),e(xo,Pr),e(V,Nr),e(V,ko),e(ko,Ir),e(V,Wr),e(F,Br),e(F,ve),e(ve,vo),e(vo,Hr),e(ve,Rr),e(ve,Wn),e(Wn,Ur),e(ve,Vr),e(ve,yo),e(yo,Kr),e(ve,Zr),e(ve,jo),e(jo,Xr),e(F,Jr),e(F,K),e(K,Lo),e(Lo,Qr),e(K,Yr),e(K,Bn),e(Bn,ei),e(K,ti),e(K,Mo),e(Mo,ni),e(K,oi),e(K,wo),e(wo,si),e(K,ai),e(F,ri),e(F,Z),e(Z,Eo),e(Eo,ii),e(Z,li),e(Z,Hn),e(Hn,di),e(Z,ci),e(Z,$o),e($o,pi),e(Z,mi),e(Z,To),e(To,gi),e(Z,ui),e(F,_i),e(F,X),e(X,Oo),e(Oo,hi),e(X,fi),e(X,Rn),e(Rn,bi),e(X,xi),e(X,Go),e(Go,ki),e(X,vi),e(X,So),e(So,yi),e(X,ji),e(F,Li),e(F,J),e(J,qo),e(qo,Mi),e(J,wi),e(J,Un),e(Un,Ei),e(J,$i),e(J,Fo),e(Fo,Ti),e(J,Oi),e(J,Ao),e(Ao,Gi),e(J,Si),e(F,qi),e(F,Q),e(Q,Do),e(Do,Fi),e(Q,Ai),e(Q,Vn),e(Vn,Di),e(Q,zi),e(Q,zo),e(zo,Ci),e(Q,Pi),e(Q,Co),e(Co,Ni),e(Q,Ii),e(E,Wi),e(E,O),y(Jt,O,null),e(O,Bi),e(O,Po),e(Po,Hi),e(O,Ri),e(O,A),e(A,Y),e(Y,No),e(No,Ui),e(Y,Vi),e(Y,Kn),e(Kn,Ki),e(Y,Zi),e(Y,Io),e(Io,Xi),e(Y,Ji),e(Y,Wo),e(Wo,Qi),e(Y,Yi),e(A,el),e(A,ye),e(ye,Bo),e(Bo,tl),e(ye,nl),e(ye,Zn),e(Zn,ol),e(ye,sl),e(ye,Ho),e(Ho,al),e(ye,rl),e(ye,Ro),e(Ro,il),e(A,ll),e(A,ee),e(ee,Uo),e(Uo,dl),e(ee,cl),e(ee,Xn),e(Xn,pl),e(ee,ml),e(ee,Vo),e(Vo,gl),e(ee,ul),e(ee,Ko),e(Ko,_l),e(ee,hl),e(A,fl),e(A,te),e(te,Zo),e(Zo,bl),e(te,xl),e(te,Jn),e(Jn,kl),e(te,vl),e(te,Xo),e(Xo,yl),e(te,jl),e(te,Jo),e(Jo,Ll),e(te,Ml),e(A,wl),e(A,ne),e(ne,Qo),e(Qo,El),e(ne,$l),e(ne,Qn),e(Qn,Tl),e(ne,Ol),e(ne,Yo),e(Yo,Gl),e(ne,Sl),e(ne,es),e(es,ql),e(ne,Fl),e(A,Al),e(A,oe),e(oe,ts),e(ts,Dl),e(oe,zl),e(oe,Yn),e(Yn,Cl),e(oe,Pl),e(oe,ns),e(ns,Nl),e(oe,Il),e(oe,os),e(os,Wl),e(oe,Bl),e(A,Hl),e(A,se),e(se,ss),e(ss,Rl),e(se,Ul),e(se,eo),e(eo,Vl),e(se,Kl),e(se,as),e(as,Zl),e(se,Xl),e(se,rs),e(rs,Jl),e(se,Ql),e(O,Yl),y(Lt,O,null),e(O,ed),e(O,Qt),e(Qt,td),e(Qt,Yt),e(Yt,nd),e(Qt,od),e(O,sd),e(O,is),e(is,ad),e(O,rd),y(Mt,O,null),e(O,id),y(wt,O,null),e(O,ld),y(Et,O,null),e(E,dd),e(E,Oe),y(en,Oe,null),e(Oe,cd),e(Oe,tn),e(tn,pd),e(tn,ls),e(ls,md),e(tn,gd),e(Oe,ud),y($t,Oe,null),e(E,_d),e(E,Ge),y(nn,Ge,null),e(Ge,hd),e(Ge,on),e(on,fd),e(on,ds),e(ds,bd),e(on,xd),e(Ge,kd),y(Tt,Ge,null),e(E,vd),e(E,Se),y(sn,Se,null),e(Se,yd),e(Se,an),e(an,jd),e(an,cs),e(cs,Ld),e(an,Md),e(Se,wd),y(Ot,Se,null),e(E,Ed),e(E,qe),y(rn,qe,null),e(qe,$d),e(qe,ln),e(ln,Td),e(ln,ps),e(ps,Od),e(ln,Gd),e(qe,Sd),y(Gt,qe,null),e(E,qd),e(E,Fe),y(dn,Fe,null),e(Fe,Fd),e(Fe,cn),e(cn,Ad),e(cn,ms),e(ms,Dd),e(cn,zd),e(Fe,Cd),y(St,Fe,null),e(E,Pd),e(E,Ae),y(pn,Ae,null),e(Ae,Nd),e(Ae,mn),e(mn,Id),e(mn,gs),e(gs,Wd),e(mn,Bd),e(Ae,Hd),y(qt,Ae,null),e(E,Rd),e(E,De),y(gn,De,null),e(De,Ud),e(De,un),e(un,Vd),e(un,us),e(us,Kd),e(un,Zd),e(De,Xd),y(Ft,De,null),x(l,Aa,b),x(l,Re,b),e(Re,At),e(At,_s),y(_n,_s,null),e(Re,Jd),e(Re,hs),e(hs,Qd),x(l,Da,b),x(l,P,b),y(hn,P,null),e(P,Yd),e(P,fn),e(fn,ec),e(fn,to),e(to,tc),e(fn,nc),e(P,oc),e(P,bn),e(bn,sc),e(bn,no),e(no,ac),e(bn,rc),e(P,ic),e(P,je),e(je,ae),e(ae,fs),e(fs,lc),e(ae,dc),e(ae,bs),e(bs,cc),e(ae,pc),e(ae,xs),e(xs,mc),e(ae,gc),e(ae,ks),e(ks,uc),e(ae,_c),e(je,hc),e(je,Le),e(Le,vs),e(vs,fc),e(Le,bc),e(Le,ys),e(ys,xc),e(Le,kc),e(Le,js),e(js,vc),e(Le,yc),e(Le,Ls),e(Ls,jc),e(je,Lc),e(je,re),e(re,Ms),e(Ms,Mc),e(re,wc),e(re,ws),e(ws,Ec),e(re,$c),e(re,Es),e(Es,Tc),e(re,Oc),e(re,$s),e($s,Gc),e(re,Sc),e(je,qc),e(je,ie),e(ie,Ts),e(Ts,Fc),e(ie,Ac),e(ie,Os),e(Os,Dc),e(ie,zc),e(ie,Gs),e(Gs,Cc),e(ie,Pc),e(ie,Ss),e(Ss,Nc),e(ie,Ic),e(P,Wc),e(P,G),y(xn,G,null),e(G,Bc),e(G,qs),e(qs,Hc),e(G,Rc),e(G,Me),e(Me,le),e(le,Fs),e(Fs,Uc),e(le,Vc),e(le,As),e(As,Kc),e(le,Zc),e(le,Ds),e(Ds,Xc),e(le,Jc),e(le,zs),e(zs,Qc),e(le,Yc),e(Me,ep),e(Me,we),e(we,Cs),e(Cs,tp),e(we,np),e(we,Ps),e(Ps,op),e(we,sp),e(we,Ns),e(Ns,ap),e(we,rp),e(we,Is),e(Is,ip),e(Me,lp),e(Me,de),e(de,Ws),e(Ws,dp),e(de,cp),e(de,Bs),e(Bs,pp),e(de,mp),e(de,Hs),e(Hs,gp),e(de,up),e(de,Rs),e(Rs,_p),e(de,hp),e(Me,fp),e(Me,ce),e(ce,Us),e(Us,bp),e(ce,xp),e(ce,Vs),e(Vs,kp),e(ce,vp),e(ce,Ks),e(Ks,yp),e(ce,jp),e(ce,Zs),e(Zs,Lp),e(ce,Mp),e(G,wp),e(G,kn),e(kn,Ep),e(kn,vn),e(vn,$p),e(kn,Tp),e(G,Op),e(G,Ee),e(Ee,Gp),e(Ee,Xs),e(Xs,Sp),e(Ee,qp),e(Ee,Js),e(Js,Fp),e(Ee,Ap),e(Ee,oo),e(oo,Dp),e(Ee,zp),e(G,Cp),e(G,yn),e(yn,Pp),e(yn,jn),e(jn,Np),e(yn,Ip),e(G,Wp),y(Dt,G,null),x(l,za,b),x(l,Ue,b),e(Ue,zt),e(zt,Qs),y(Ln,Qs,null),e(Ue,Bp),e(Ue,Ys),e(Ys,Hp),x(l,Ca,b),x(l,N,b),y(Mn,N,null),e(N,Rp),e(N,wn),e(wn,Up),e(wn,so),e(so,Vp),e(wn,Kp),e(N,Zp),e(N,En),e(En,Xp),e(En,ao),e(ao,Jp),e(En,Qp),e(N,Yp),e(N,Ve),e(Ve,pe),e(pe,ea),e(ea,em),e(pe,tm),e(pe,ta),e(ta,nm),e(pe,om),e(pe,na),e(na,sm),e(pe,am),e(pe,oa),e(oa,rm),e(pe,im),e(Ve,lm),e(Ve,me),e(me,sa),e(sa,dm),e(me,cm),e(me,aa),e(aa,pm),e(me,mm),e(me,ra),e(ra,gm),e(me,um),e(me,ia),e(ia,_m),e(me,hm),e(Ve,fm),e(Ve,ge),e(ge,la),e(la,bm),e(ge,xm),e(ge,da),e(da,km),e(ge,vm),e(ge,ca),e(ca,ym),e(ge,jm),e(ge,pa),e(pa,Lm),e(ge,Mm),e(N,wm),e(N,z),y($n,z,null),e(z,Em),e(z,ma),e(ma,$m),e(z,Tm),e(z,Ke),e(Ke,ue),e(ue,ga),e(ga,Om),e(ue,Gm),e(ue,ua),e(ua,Sm),e(ue,qm),e(ue,_a),e(_a,Fm),e(ue,Am),e(ue,ha),e(ha,Dm),e(ue,zm),e(Ke,Cm),e(Ke,_e),e(_e,fa),e(fa,Pm),e(_e,Nm),e(_e,ba),e(ba,Im),e(_e,Wm),e(_e,xa),e(xa,Bm),e(_e,Hm),e(_e,ka),e(ka,Rm),e(_e,Um),e(Ke,Vm),e(Ke,he),e(he,va),e(va,Km),e(he,Zm),e(he,ya),e(ya,Xm),e(he,Jm),e(he,ja),e(ja,Qm),e(he,Ym),e(he,La),e(La,eg),e(he,tg),e(z,ng),y(Ct,z,null),e(z,og),e(z,Tn),e(Tn,sg),e(Tn,On),e(On,ag),e(Tn,rg),e(z,ig),y(Pt,z,null),Pa=!0},p(l,[b]){const Gn={};b&2&&(Gn.$$scope={dirty:b,ctx:l}),Lt.$set(Gn);const Ma={};b&2&&(Ma.$$scope={dirty:b,ctx:l}),Mt.$set(Ma);const wa={};b&2&&(wa.$$scope={dirty:b,ctx:l}),wt.$set(wa);const Ea={};b&2&&(Ea.$$scope={dirty:b,ctx:l}),Et.$set(Ea);const Sn={};b&2&&(Sn.$$scope={dirty:b,ctx:l}),$t.$set(Sn);const $a={};b&2&&($a.$$scope={dirty:b,ctx:l}),Tt.$set($a);const Ze={};b&2&&(Ze.$$scope={dirty:b,ctx:l}),Ot.$set(Ze);const Xe={};b&2&&(Xe.$$scope={dirty:b,ctx:l}),Gt.$set(Xe);const Ta={};b&2&&(Ta.$$scope={dirty:b,ctx:l}),St.$set(Ta);const Oa={};b&2&&(Oa.$$scope={dirty:b,ctx:l}),qt.$set(Oa);const Je={};b&2&&(Je.$$scope={dirty:b,ctx:l}),Ft.$set(Je);const Ga={};b&2&&(Ga.$$scope={dirty:b,ctx:l}),Dt.$set(Ga);const Sa={};b&2&&(Sa.$$scope={dirty:b,ctx:l}),Ct.$set(Sa);const Qe={};b&2&&(Qe.$$scope={dirty:b,ctx:l}),Pt.$set(Qe)},i(l){Pa||(j(i.$$.fragment,l),j(Vt.$$.fragment,l),j(Kt.$$.fragment,l),j(Jt.$$.fragment,l),j(Lt.$$.fragment,l),j(Mt.$$.fragment,l),j(wt.$$.fragment,l),j(Et.$$.fragment,l),j(en.$$.fragment,l),j($t.$$.fragment,l),j(nn.$$.fragment,l),j(Tt.$$.fragment,l),j(sn.$$.fragment,l),j(Ot.$$.fragment,l),j(rn.$$.fragment,l),j(Gt.$$.fragment,l),j(dn.$$.fragment,l),j(St.$$.fragment,l),j(pn.$$.fragment,l),j(qt.$$.fragment,l),j(gn.$$.fragment,l),j(Ft.$$.fragment,l),j(_n.$$.fragment,l),j(hn.$$.fragment,l),j(xn.$$.fragment,l),j(Dt.$$.fragment,l),j(Ln.$$.fragment,l),j(Mn.$$.fragment,l),j($n.$$.fragment,l),j(Ct.$$.fragment,l),j(Pt.$$.fragment,l),Pa=!0)},o(l){L(i.$$.fragment,l),L(Vt.$$.fragment,l),L(Kt.$$.fragment,l),L(Jt.$$.fragment,l),L(Lt.$$.fragment,l),L(Mt.$$.fragment,l),L(wt.$$.fragment,l),L(Et.$$.fragment,l),L(en.$$.fragment,l),L($t.$$.fragment,l),L(nn.$$.fragment,l),L(Tt.$$.fragment,l),L(sn.$$.fragment,l),L(Ot.$$.fragment,l),L(rn.$$.fragment,l),L(Gt.$$.fragment,l),L(dn.$$.fragment,l),L(St.$$.fragment,l),L(pn.$$.fragment,l),L(qt.$$.fragment,l),L(gn.$$.fragment,l),L(Ft.$$.fragment,l),L(_n.$$.fragment,l),L(hn.$$.fragment,l),L(xn.$$.fragment,l),L(Dt.$$.fragment,l),L(Ln.$$.fragment,l),L(Mn.$$.fragment,l),L($n.$$.fragment,l),L(Ct.$$.fragment,l),L(Pt.$$.fragment,l),Pa=!1},d(l){o(d),l&&o(f),l&&o(u),M(i),l&&o(U),l&&o(D),l&&o($e),l&&o(Te),l&&o(qa),l&&o(He),M(Vt),l&&o(Fa),l&&o(E),M(Kt),M(Jt),M(Lt),M(Mt),M(wt),M(Et),M(en),M($t),M(nn),M(Tt),M(sn),M(Ot),M(rn),M(Gt),M(dn),M(St),M(pn),M(qt),M(gn),M(Ft),l&&o(Aa),l&&o(Re),M(_n),l&&o(Da),l&&o(P),M(hn),M(xn),M(Dt),l&&o(za),l&&o(Ue),M(Ln),l&&o(Ca),l&&o(N),M(Mn),M($n),M(Ct),M(Pt)}}}const uh={local:"generation",sections:[{local:"transformers.generation_utils.GenerationMixin",title:"GenerationMixin"},{local:"transformers.generation_tf_utils.TFGenerationMixin",title:"TFGenerationMixin"},{local:"transformers.generation_flax_utils.FlaxGenerationMixin",title:"FlaxGenerationMixin"}],title:"Generation"};function _h(w){return Q_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class yh extends K_{constructor(d){super();Z_(this,d,_h,gh,X_,{})}}export{yh as default,uh as metadata};
