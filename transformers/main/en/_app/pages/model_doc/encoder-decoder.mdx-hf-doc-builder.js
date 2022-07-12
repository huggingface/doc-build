import{S as gp,i as _p,s as bp,e as a,k as l,w as v,t as n,M as vp,c as s,d as t,m as p,a as d,x as y,h as r,b as c,G as e,g as u,y as k,q as w,o as E,B as T,v as yp,L as nt}from"../../chunks/vendor-hf-doc-builder.js";import{T as $c}from"../../chunks/Tip-hf-doc-builder.js";import{D as W}from"../../chunks/Docstring-hf-doc-builder.js";import{C as V}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as G}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as tt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function kp(q){let h,$,_,f,b;return f=new V({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

# Initializing a BERT bert-base-uncased style configuration
config_encoder = BertConfig()
config_decoder = BertConfig()

config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

# Initializing a Bert2Bert model from the bert-base-uncased style configurations
model = EncoderDecoderModel(config=config)

# Accessing the model configuration
config_encoder = model.config.encoder
config_decoder = model.config.decoder
# set decoder config to causal lm
config_decoder.is_decoder = True
config_decoder.add_cross_attention = True

# Saving the model, including its configuration
model.save_pretrained("my-model")

# loading model and config from pretrained folder
encoder_decoder_config = EncoderDecoderConfig.from_pretrained("my-model")
model = EncoderDecoderModel.from_pretrained("my-model", config=encoder_decoder_config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, EncoderDecoderConfig, EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BERT bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = BertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Bert2Bert model from the bert-base-uncased style configurations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = model.config.encoder
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = model.config.decoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set decoder config to causal lm</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.add_cross_attention = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_decoder_config = EncoderDecoderConfig.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),{c(){h=a("p"),$=n("Examples:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Examples:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:nt,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function wp(q){let h,$,_,f,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var S=d(_);f=r(S,"Module"),S.forEach(t),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,$),e(h,_),e(_,f),e(h,b)},d(i){i&&t(h)}}}function Ep(q){let h,$,_,f,b;return f=new V({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained(
    "bert-base-uncased", "bert-base-uncased"
)  # initialize Bert2Bert from pre-trained checkpoints

# training
model.config.decoder_start_token_id = tokenizer.cls_token_id
model.config.pad_token_id = tokenizer.pad_token_id
model.config.vocab_size = model.config.decoder.vocab_size

input_ids = tokenizer("This is a really long text", return_tensors="pt").input_ids
labels = tokenizer("This is the corresponding summary", return_tensors="pt").input_ids
outputs = model(input_ids=input_ids, labels=input_ids)
loss, logits = outputs.loss, outputs.logits

# save and load from pretrained
model.save_pretrained("bert2bert")
model = EncoderDecoderModel.from_pretrained("bert2bert")

# generation
generated = model.generate(input_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, BertTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># initialize Bert2Bert from pre-trained checkpoints</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = tokenizer.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.vocab_size = model.config.decoder.vocab_size

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;This is a really long text&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;This is the corresponding summary&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;bert2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;bert2bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids)`}}),{c(){h=a("p"),$=n("Examples:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Examples:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:nt,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function Tp(q){let h,$,_,f,b;return f=new V({props:{code:`from transformers import EncoderDecoderModel

# initialize a bert2bert from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized
model = EncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "bert-base-uncased")
# saving model after fine-tuning
model.save_pretrained("./bert2bert")
# load fine-tuned model
model = EncoderDecoderModel.from_pretrained("./bert2bert")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2bert from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)`}}),{c(){h=a("p"),$=n("Example:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Example:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:nt,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function $p(q){let h,$,_,f,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var S=d(_);f=r(S,"Module"),S.forEach(t),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,$),e(h,_),e(_,f),e(h,b)},d(i){i&&t(h)}}}function Mp(q){let h,$,_,f,b;return f=new V({props:{code:`from transformers import TFEncoderDecoderModel, BertTokenizer

# initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = TFEncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-cased", "gpt2")

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")

# forward
input_ids = tokenizer.encode(
    "Hello, my dog is cute", add_special_tokens=True, return_tensors="tf"
)  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=input_ids)

# training
outputs = model(input_ids=input_ids, decoder_input_ids=input_ids, labels=input_ids)
loss, logits = outputs.loss, outputs.logits

# save and load from pretrained
model.save_pretrained("bert2gpt2")
model = TFEncoderDecoderModel.from_pretrained("bert2gpt2")

# generation
generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFEncoderDecoderModel, BertTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer.encode(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=input_ids, labels=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;bert2gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id)`}}),{c(){h=a("p"),$=n("Examples:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Examples:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:nt,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function Dp(q){let h,$,_,f,b;return f=new V({props:{code:`from transformers import TFEncoderDecoderModel

# initialize a bert2gpt2 from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized
model = TFEncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "gpt2")
# saving model after fine-tuning
model.save_pretrained("./bert2gpt2")
# load fine-tuned model
model = TFEncoderDecoderModel.from_pretrained("./bert2gpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){h=a("p"),$=n("Example:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Example:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:nt,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function xp(q){let h,$,_,f,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var S=d(_);f=r(S,"Module"),S.forEach(t),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,$),e(h,_),e(_,f),e(h,b)},d(i){i&&t(h)}}}function zp(q){let h,$,_,f,b;return f=new V({props:{code:`from transformers import FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

# load a fine-tuned bert2gpt2 model
model = FlaxEncoderDecoderModel.from_pretrained("patrickvonplaten/bert2gpt2-cnn_dailymail-fp16")
# load input & output tokenizer
tokenizer_input = BertTokenizer.from_pretrained("bert-base-cased")
tokenizer_output = GPT2Tokenizer.from_pretrained("gpt2")

article = '''Sigma Alpha Epsilon is under fire for a video showing party-bound fraternity members
singing a racist chant. SAE's national chapter suspended the students,
but University of Oklahoma President David Boren took it a step further,
saying the university's affiliation with the fraternity is permanently done.'''

input_ids = tokenizer_input(article, add_special_tokens=True, return_tensors="np").input_ids

# use GPT2's eos_token as the pad as well as eos token
model.config.eos_token_id = model.config.decoder.eos_token_id
model.config.pad_token_id = model.config.eos_token_id

sequences = model.generate(input_ids, num_beams=4, max_length=12).sequences

summary = tokenizer_output.batch_decode(sequences, skip_special_tokens=True)[0]
assert summary == "SAS Alpha Epsilon suspended Sigma Alpha Epsilon members"`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned bert2gpt2 model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2gpt2-cnn_dailymail-fp16&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load input &amp; output tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_input = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_output = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&#x27;&#x27;&#x27;Sigma Alpha Epsilon is under fire for a video showing party-bound fraternity members
<span class="hljs-meta">&gt;&gt;&gt; </span>singing a racist chant. SAE&#x27;s national chapter suspended the students,
<span class="hljs-meta">&gt;&gt;&gt; </span>but University of Oklahoma President David Boren took it a step further,
<span class="hljs-meta">&gt;&gt;&gt; </span>saying the university&#x27;s affiliation with the fraternity is permanently done.&#x27;&#x27;&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer_input(article, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use GPT2&#x27;s eos_token as the pad as well as eos token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.eos_token_id = model.config.decoder.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(input_ids, num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">12</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>summary = tokenizer_output.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> summary == <span class="hljs-string">&quot;SAS Alpha Epsilon suspended Sigma Alpha Epsilon members&quot;</span>`}}),{c(){h=a("p"),$=n("Examples:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Examples:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:nt,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function qp(q){let h,$,_,f,b;return f=new V({props:{code:`from transformers import FlaxEncoderDecoderModel

# initialize a bert2gpt2 from pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = FlaxEncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-cased", "gpt2")
# saving model after fine-tuning
model.save_pretrained("./bert2gpt2")
# load fine-tuned model
model = FlaxEncoderDecoderModel.from_pretrained("./bert2gpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){h=a("p"),$=n("Example:"),_=l(),v(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Example:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),b=!0},p:nt,i(i){b||(w(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function jp(q){let h,$,_,f,b,i,g,S,ra,tr,oe,we,Yt,eo,aa,Jt,sa,nr,Ee,da,rt,ia,ca,rr,Te,la,oo,pa,ma,ar,$e,ha,at,fa,ua,sr,H,ga,st,_a,ba,to,va,ya,dr,te,Me,Zt,no,ka,Kt,wa,ir,ne,dt,Ea,Ta,it,$a,Ma,cr,ro,lr,re,De,Qt,ao,Da,Xt,xa,pr,M,ct,za,qa,en,ja,Fa,on,Pa,Aa,tn,Ca,Sa,nn,Na,Ia,lt,La,Ba,xe,Oa,rn,Ra,Wa,an,Va,Ga,pt,Ha,Ua,mr,so,hr,ae,ze,sn,io,Ya,dn,Ja,fr,U,Za,cn,Ka,Qa,ln,Xa,es,ur,co,gr,se,qe,pn,lo,os,po,ts,mn,ns,rs,_r,de,hn,as,ss,fn,ds,is,br,mo,vr,ie,je,un,ho,cs,gn,ls,yr,N,ps,_n,ms,hs,bn,fs,us,vn,gs,_s,yn,bs,vs,kr,fo,wr,Fe,ys,uo,ks,ws,Er,Y,Es,go,Ts,$s,_o,Ms,Ds,Tr,ce,Pe,kn,bo,xs,wn,zs,$r,C,vo,qs,Ae,mt,js,Fs,ht,Ps,As,Cs,le,Ss,ft,Ns,Is,ut,Ls,Bs,Os,Ce,Rs,Se,yo,Ws,ko,Vs,gt,Gs,Hs,Us,Ne,wo,Ys,pe,Js,En,Zs,Ks,Tn,Qs,Xs,Mr,me,Ie,$n,Eo,ed,Mn,od,Dr,D,To,td,he,nd,_t,rd,ad,bt,sd,dd,id,$o,cd,Mo,ld,pd,md,Dn,hd,fd,Do,ud,vt,gd,_d,bd,xo,vd,zo,yd,kd,wd,J,yt,Ed,Td,xn,$d,Md,zn,Dd,xd,zd,I,qo,qd,fe,jd,kt,Fd,Pd,qn,Ad,Cd,Sd,Le,Nd,Be,Id,L,jo,Ld,jn,Bd,Od,ue,Rd,Fn,Wd,Vd,Pn,Gd,Hd,Ud,Oe,xr,ge,Re,An,Fo,Yd,Cn,Jd,zr,x,Po,Zd,_e,Kd,wt,Qd,Xd,Et,ei,oi,ti,Ao,ni,Co,ri,ai,si,Sn,di,ii,So,ci,Tt,li,pi,mi,No,hi,Io,fi,ui,gi,Z,$t,_i,bi,Mt,vi,yi,Dt,ki,wi,Ei,B,Lo,Ti,be,$i,xt,Mi,Di,Nn,xi,zi,qi,We,ji,Ve,Fi,K,Bo,Pi,In,Ai,Ci,Ge,qr,ve,He,Ln,Oo,Si,Bn,Ni,jr,z,Ro,Ii,ye,Li,zt,Bi,Oi,qt,Ri,Wi,Vi,Wo,Gi,Vo,Hi,Ui,Yi,On,Ji,Zi,Go,Ki,jt,Qi,Xi,ec,Ho,oc,Uo,tc,nc,rc,Q,Ft,ac,sc,Rn,dc,ic,Wn,cc,lc,pc,O,Yo,mc,ke,hc,Pt,fc,uc,Vn,gc,_c,bc,Ue,vc,Ye,yc,X,Jo,kc,Gn,wc,Ec,Je,Fr;return i=new G({}),eo=new G({}),no=new G({}),ro=new V({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

config_encoder = BertConfig()
config_decoder = BertConfig()

config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
model = EncoderDecoderModel(config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, EncoderDecoderConfig, EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = BertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel(config=config)`}}),ao=new G({}),so=new V({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, BertTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),io=new G({}),co=new V({props:{code:`from transformers import EncoderDecoderModel

model = EncoderDecoderModel.from_pretrained("patrickvonplaten/bert2bert_cnn_daily_mail")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2bert_cnn_daily_mail&quot;</span>)`}}),lo=new G({}),mo=new V({props:{code:`# a workaround to load from pytorch checkpoint
from transformers import EncoderDecoderModel, TFEncoderDecoderModel

_model = EncoderDecoderModel.from_pretrained("patrickvonplaten/bert2bert-cnn_dailymail-fp16")

_model.encoder.save_pretrained("./encoder")
_model.decoder.save_pretrained("./decoder")

model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(
    "./encoder", "./decoder", encoder_from_pt=True, decoder_from_pt=True
)
# This is only for copying some specific attributes of this particular model.
model.config = _model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># a workaround to load from pytorch checkpoint</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, TFEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>_model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2bert-cnn_dailymail-fp16&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>_model.encoder.save_pretrained(<span class="hljs-string">&quot;./encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>_model.decoder.save_pretrained(<span class="hljs-string">&quot;./decoder&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;./encoder&quot;</span>, <span class="hljs-string">&quot;./decoder&quot;</span>, encoder_from_pt=<span class="hljs-literal">True</span>, decoder_from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is only for copying some specific attributes of this particular model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config = _model.config`}}),ho=new G({}),fo=new V({props:{code:`from transformers import BertTokenizer, EncoderDecoderModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "bert-base-uncased")

model.config.decoder_start_token_id = tokenizer.cls_token_id
model.config.pad_token_id = tokenizer.pad_token_id

input_ids = tokenizer(
    "The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side.During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was  finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft).Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.",
    return_tensors="pt",
).input_ids

labels = tokenizer(
    "the eiffel tower surpassed the washington monument to become the tallest structure in the world. it was the first structure to reach a height of 300 metres in paris in 1930. it is now taller than the chrysler building by 5. 2 metres ( 17 ft ) and is the second tallest free - standing structure in paris.",
    return_tensors="pt",
).input_ids

# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = tokenizer.pad_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side.During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was  finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft).Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;the eiffel tower surpassed the washington monument to become the tallest structure in the world. it was the first structure to reach a height of 300 metres in paris in 1930. it is now taller than the chrysler building by 5. 2 metres ( 17 ft ) and is the second tallest free - standing structure in paris.&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids=input_ids, labels=labels).loss`}}),bo=new G({}),vo=new W({props:{name:"class transformers.EncoderDecoderConfig",anchor:"transformers.EncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L26"}}),Ce=new tt({props:{anchor:"transformers.EncoderDecoderConfig.example",$$slots:{default:[kp]},$$scope:{ctx:q}}}),yo=new W({props:{name:"from_encoder_decoder_configs",anchor:"transformers.EncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L91",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a></p>
`}}),wo=new W({props:{name:"to_dict",anchor:"transformers.EncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L108",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),Eo=new G({}),To=new W({props:{name:"class transformers.EncoderDecoderModel",anchor:"transformers.EncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L165"}}),qo=new W({props:{name:"forward",anchor:"transformers.EncoderDecoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code> to the
right, replacing -100 by the <code>pad_token_id</code> and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor
of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the
decoder.`,name:"encoder_outputs"},{anchor:"transformers.EncoderDecoderModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.EncoderDecoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.EncoderDecoderModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.EncoderDecoderModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.EncoderDecoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.EncoderDecoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.EncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L430",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Le=new $c({props:{$$slots:{default:[wp]},$$scope:{ctx:q}}}),Be=new tt({props:{anchor:"transformers.EncoderDecoderModel.forward.example",$$slots:{default:[Ep]},$$scope:{ctx:q}}}),jo=new W({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaining positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L280"}}),Oe=new tt({props:{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Tp]},$$scope:{ctx:q}}}),Fo=new G({}),Po=new W({props:{name:"class transformers.TFEncoderDecoderModel",anchor:"transformers.TFEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L186"}}),Lo=new W({props:{name:"call",anchor:"transformers.TFEncoderDecoderModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.`,name:"decoder_input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor of hidden-states at the output
of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFEncoderDecoderModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFEncoderDecoderModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFEncoderDecoderModel.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.TFEncoderDecoderModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFEncoderDecoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFEncoderDecoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFEncoderDecoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFEncoderDecoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as \`**decoder_kwargs&#x201C; for the decoder forward function.</li>
</ul>`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L495",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),We=new $c({props:{$$slots:{default:[$p]},$$scope:{ctx:q}}}),Ve=new tt({props:{anchor:"transformers.TFEncoderDecoderModel.call.example",$$slots:{default:[Mp]},$$scope:{ctx:q}}}),Bo=new W({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch index checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>encoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>decoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L332"}}),Ge=new tt({props:{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Dp]},$$scope:{ctx:q}}}),Oo=new G({}),Ro=new W({props:{name:"class transformers.FlaxEncoderDecoderModel",anchor:"transformers.FlaxEncoderDecoderModel",parameters:[{name:"config",val:": EncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L302"}}),Yo=new W({props:{name:"__call__",anchor:"transformers.FlaxEncoderDecoderModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For sequence to sequence training, <code>decoder_input_ids</code> should be provided. <code>decoder_input_ids</code> should be
created outside of the model by shifting the <code>labels</code> to the right, replacing -100 by the <code>pad_token_id</code>
and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.encoder.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.decoder.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L628",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ue=new $c({props:{$$slots:{default:[xp]},$$scope:{ctx:q}}}),Ye=new tt({props:{anchor:"transformers.FlaxEncoderDecoderModel.__call__.example",$$slots:{default:[zp]},$$scope:{ctx:q}}}),Jo=new W({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L760"}}),Je=new tt({props:{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[qp]},$$scope:{ctx:q}}}),{c(){h=a("meta"),$=l(),_=a("h1"),f=a("a"),b=a("span"),v(i.$$.fragment),g=l(),S=a("span"),ra=n("Encoder Decoder Models"),tr=l(),oe=a("h2"),we=a("a"),Yt=a("span"),v(eo.$$.fragment),aa=l(),Jt=a("span"),sa=n("Overview"),nr=l(),Ee=a("p"),da=n("The "),rt=a("a"),ia=n("EncoderDecoderModel"),ca=n(` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),rr=l(),Te=a("p"),la=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),oo=a("a"),pa=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),ma=n(` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),ar=l(),$e=a("p"),ha=n("After such an "),at=a("a"),fa=n("EncoderDecoderModel"),ua=n(` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),sr=l(),H=a("p"),ga=n("An application of this architecture could be to leverage two pretrained "),st=a("a"),_a=n("BertModel"),ba=n(` as the encoder
and decoder for a summarization model as was shown in: `),to=a("a"),va=n("Text Summarization with Pretrained Encoders"),ya=n(" by Yang Liu and Mirella Lapata."),dr=l(),te=a("h2"),Me=a("a"),Zt=a("span"),v(no.$$.fragment),ka=l(),Kt=a("span"),wa=n("Randomly initializing [EncoderDecoderModel](/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) from model configurations."),ir=l(),ne=a("p"),dt=a("a"),Ea=n("EncoderDecoderModel"),Ta=n(" can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),it=a("a"),$a=n("BertModel"),Ma=n(" configuration for both the encoder and the decoder."),cr=l(),v(ro.$$.fragment),lr=l(),re=a("h2"),De=a("a"),Qt=a("span"),v(ao.$$.fragment),Da=l(),Xt=a("span"),xa=n("Initialising [EncoderDecoderModel](/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) from a pretrained encoder and a pretrained decoder."),pr=l(),M=a("p"),ct=a("a"),za=n("EncoderDecoderModel"),qa=n(" can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained auto-encoding model, "),en=a("em"),ja=n("e.g."),Fa=n(" BERT, can serve as the encoder and both pretrained auto-encoding models, "),on=a("em"),Pa=n("e.g."),Aa=n(" BERT, pretrained causal language models, "),tn=a("em"),Ca=n("e.g."),Sa=n(" GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),nn=a("em"),Na=n("e.g."),Ia=n(` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),lt=a("a"),La=n("EncoderDecoderModel"),Ba=n(" from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),xe=a("a"),Oa=n("the "),rn=a("em"),Ra=n("Warm-starting-encoder-decoder blog post"),Wa=n(`.
To do so, the `),an=a("code"),Va=n("EncoderDecoderModel"),Ga=n(" class provides a "),pt=a("a"),Ha=n("EncoderDecoderModel.from_encoder_decoder_pretrained()"),Ua=n(" method."),mr=l(),v(so.$$.fragment),hr=l(),ae=a("h2"),ze=a("a"),sn=a("span"),v(io.$$.fragment),Ya=l(),dn=a("span"),Ja=n("Loading an existing [EncoderDecoderModel](/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) checkpoint."),fr=l(),U=a("p"),Za=n("To load fine-tuned checkpoints of the "),cn=a("code"),Ka=n("EncoderDecoderModel"),Qa=n(" class, [\u2018EncoderDecoderModel`] provides the "),ln=a("code"),Xa=n("from_pretrained(...)"),es=n(" method just like any other model architecture in Transformers."),ur=l(),v(co.$$.fragment),gr=l(),se=a("h2"),qe=a("a"),pn=a("span"),v(lo.$$.fragment),os=l(),po=a("span"),ts=n("Loading a PyTorch checkpoint into "),mn=a("code"),ns=n("TFEncoderDecoderModel"),rs=n("."),_r=l(),de=a("p"),hn=a("code"),as=n("TFEncoderDecoderModel.from_pretrained()"),ss=n(` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),fn=a("code"),ds=n("from_pt=True"),is=n(` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),br=l(),v(mo.$$.fragment),vr=l(),ie=a("h2"),je=a("a"),un=a("span"),v(ho.$$.fragment),cs=l(),gn=a("span"),ls=n("Training"),yr=l(),N=a("p"),ps=n(`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),_n=a("code"),ms=n("input_ids"),hs=n(` (which are the
`),bn=a("code"),fs=n("input_ids"),us=n(" of the encoded input sequence) and "),vn=a("code"),gs=n("labels"),_s=n(" (which are the "),yn=a("code"),bs=n("input_ids"),vs=n(` of the encoded
target sequence).`),kr=l(),v(fo.$$.fragment),wr=l(),Fe=a("p"),ys=n("Detailed "),uo=a("a"),ks=n("colab"),ws=n(" for training."),Er=l(),Y=a("p"),Es=n("This model was contributed by "),go=a("a"),Ts=n("thomwolf"),$s=n(`. This model\u2019s TensorFlow and Flax versions
were contributed by `),_o=a("a"),Ms=n("ydshieh"),Ds=n("."),Tr=l(),ce=a("h2"),Pe=a("a"),kn=a("span"),v(bo.$$.fragment),xs=l(),wn=a("span"),zs=n("EncoderDecoderConfig"),$r=l(),C=a("div"),v(vo.$$.fragment),qs=l(),Ae=a("p"),mt=a("a"),js=n("EncoderDecoderConfig"),Fs=n(" is the configuration class to store the configuration of a "),ht=a("a"),Ps=n("EncoderDecoderModel"),As=n(`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),Cs=l(),le=a("p"),Ss=n("Configuration objects inherit from "),ft=a("a"),Ns=n("PretrainedConfig"),Is=n(` and can be used to control the model outputs. Read the
documentation from `),ut=a("a"),Ls=n("PretrainedConfig"),Bs=n(" for more information."),Os=l(),v(Ce.$$.fragment),Rs=l(),Se=a("div"),v(yo.$$.fragment),Ws=l(),ko=a("p"),Vs=n("Instantiate a "),gt=a("a"),Gs=n("EncoderDecoderConfig"),Hs=n(` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),Us=l(),Ne=a("div"),v(wo.$$.fragment),Ys=l(),pe=a("p"),Js=n("Serializes this instance to a Python dictionary. Override the default "),En=a("em"),Zs=n("to_dict()"),Ks=n(" from "),Tn=a("em"),Qs=n("PretrainedConfig"),Xs=n("."),Mr=l(),me=a("h2"),Ie=a("a"),$n=a("span"),v(Eo.$$.fragment),ed=l(),Mn=a("span"),od=n("EncoderDecoderModel"),Dr=l(),D=a("div"),v(To.$$.fragment),td=l(),he=a("p"),nd=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),_t=a("a"),rd=n("from_pretrained()"),ad=n(" function and the decoder is loaded via "),bt=a("a"),sd=n("from_pretrained()"),dd=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),id=l(),$o=a("p"),cd=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Mo=a("a"),ld=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),pd=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),md=l(),Dn=a("p"),hd=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),fd=l(),Do=a("p"),ud=n("This model inherits from "),vt=a("a"),gd=n("PreTrainedModel"),_d=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bd=l(),xo=a("p"),vd=n("This model is also a PyTorch "),zo=a("a"),yd=n("torch.nn.Module"),kd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wd=l(),J=a("p"),yt=a("a"),Ed=n("EncoderDecoderModel"),Td=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),xn=a("em"),$d=n("~transformers.AutoModel.from_pretrained"),Md=n(` class method for the encoder and
:meth`),zn=a("em"),Dd=n("~transformers.AutoModelForCausalLM.from_pretrained"),xd=n(" class method for the decoder."),zd=l(),I=a("div"),v(qo.$$.fragment),qd=l(),fe=a("p"),jd=n("The "),kt=a("a"),Fd=n("EncoderDecoderModel"),Pd=n(" forward method, overrides the "),qn=a("code"),Ad=n("__call__"),Cd=n(" special method."),Sd=l(),v(Le.$$.fragment),Nd=l(),v(Be.$$.fragment),Id=l(),L=a("div"),v(jo.$$.fragment),Ld=l(),jn=a("p"),Bd=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Od=l(),ue=a("p"),Rd=n("The model is set in evaluation mode by default using "),Fn=a("code"),Wd=n("model.eval()"),Vd=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Pn=a("code"),Gd=n("model.train()"),Hd=n("."),Ud=l(),v(Oe.$$.fragment),xr=l(),ge=a("h2"),Re=a("a"),An=a("span"),v(Fo.$$.fragment),Yd=l(),Cn=a("span"),Jd=n("TFEncoderDecoderModel"),zr=l(),x=a("div"),v(Po.$$.fragment),Zd=l(),_e=a("p"),Kd=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),wt=a("a"),Qd=n("from_pretrained()"),Xd=n(" function and the decoder is loaded via "),Et=a("a"),ei=n("from_pretrained()"),oi=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),ti=l(),Ao=a("p"),ni=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Co=a("a"),ri=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),ai=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),si=l(),Sn=a("p"),di=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),ii=l(),So=a("p"),ci=n("This model inherits from "),Tt=a("a"),li=n("TFPreTrainedModel"),pi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mi=l(),No=a("p"),hi=n("This model is also a "),Io=a("a"),fi=n("tf.keras.Model"),ui=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gi=l(),Z=a("p"),$t=a("a"),_i=n("TFEncoderDecoderModel"),bi=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),Mt=a("a"),vi=n("from_pretrained()"),yi=n(" class method for the encoder and "),Dt=a("a"),ki=n("from_pretrained()"),wi=n(` class
method for the decoder.`),Ei=l(),B=a("div"),v(Lo.$$.fragment),Ti=l(),be=a("p"),$i=n("The "),xt=a("a"),Mi=n("TFEncoderDecoderModel"),Di=n(" forward method, overrides the "),Nn=a("code"),xi=n("__call__"),zi=n(" special method."),qi=l(),v(We.$$.fragment),ji=l(),v(Ve.$$.fragment),Fi=l(),K=a("div"),v(Bo.$$.fragment),Pi=l(),In=a("p"),Ai=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Ci=l(),v(Ge.$$.fragment),qr=l(),ve=a("h2"),He=a("a"),Ln=a("span"),v(Oo.$$.fragment),Si=l(),Bn=a("span"),Ni=n("FlaxEncoderDecoderModel"),jr=l(),z=a("div"),v(Ro.$$.fragment),Ii=l(),ye=a("p"),Li=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),zt=a("a"),Bi=n("from_pretrained()"),Oi=n(" function and the decoder is loaded via "),qt=a("a"),Ri=n("from_pretrained()"),Wi=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Vi=l(),Wo=a("p"),Gi=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Vo=a("a"),Hi=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ui=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Yi=l(),On=a("p"),Ji=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Zi=l(),Go=a("p"),Ki=n("This model inherits from "),jt=a("a"),Qi=n("FlaxPreTrainedModel"),Xi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ec=l(),Ho=a("p"),oc=n(`This model is also a Flax Linen
`),Uo=a("a"),tc=n("flax.nn.Module"),nc=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rc=l(),Q=a("p"),Ft=a("a"),ac=n("FlaxEncoderDecoderModel"),sc=n(` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),Rn=a("em"),dc=n("~transformers.FlaxAutoModel.from_pretrained"),ic=n(` class method for the
encoder and :meth`),Wn=a("em"),cc=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),lc=n(" class method for the decoder."),pc=l(),O=a("div"),v(Yo.$$.fragment),mc=l(),ke=a("p"),hc=n("The "),Pt=a("a"),fc=n("FlaxEncoderDecoderModel"),uc=n(" forward method, overrides the "),Vn=a("code"),gc=n("__call__"),_c=n(" special method."),bc=l(),v(Ue.$$.fragment),vc=l(),v(Ye.$$.fragment),yc=l(),X=a("div"),v(Jo.$$.fragment),kc=l(),Gn=a("p"),wc=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Ec=l(),v(Je.$$.fragment),this.h()},l(o){const m=vp('[data-svelte="svelte-1phssyn"]',document.head);h=s(m,"META",{name:!0,content:!0}),m.forEach(t),$=p(o),_=s(o,"H1",{class:!0});var Zo=d(_);f=s(Zo,"A",{id:!0,class:!0,href:!0});var Hn=d(f);b=s(Hn,"SPAN",{});var Un=d(b);y(i.$$.fragment,Un),Un.forEach(t),Hn.forEach(t),g=p(Zo),S=s(Zo,"SPAN",{});var Yn=d(S);ra=r(Yn,"Encoder Decoder Models"),Yn.forEach(t),Zo.forEach(t),tr=p(o),oe=s(o,"H2",{class:!0});var Ko=d(oe);we=s(Ko,"A",{id:!0,class:!0,href:!0});var Jn=d(we);Yt=s(Jn,"SPAN",{});var Zn=d(Yt);y(eo.$$.fragment,Zn),Zn.forEach(t),Jn.forEach(t),aa=p(Ko),Jt=s(Ko,"SPAN",{});var Kn=d(Jt);sa=r(Kn,"Overview"),Kn.forEach(t),Ko.forEach(t),nr=p(o),Ee=s(o,"P",{});var Qo=d(Ee);da=r(Qo,"The "),rt=s(Qo,"A",{href:!0});var Qn=d(rt);ia=r(Qn,"EncoderDecoderModel"),Qn.forEach(t),ca=r(Qo,` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),Qo.forEach(t),rr=p(o),Te=s(o,"P",{});var Pr=d(Te);la=r(Pr,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),oo=s(Pr,"A",{href:!0,rel:!0});var Mc=d(oo);pa=r(Mc,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Mc.forEach(t),ma=r(Pr,` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),Pr.forEach(t),ar=p(o),$e=s(o,"P",{});var Ar=d($e);ha=r(Ar,"After such an "),at=s(Ar,"A",{href:!0});var Dc=d(at);fa=r(Dc,"EncoderDecoderModel"),Dc.forEach(t),ua=r(Ar,` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),Ar.forEach(t),sr=p(o),H=s(o,"P",{});var At=d(H);ga=r(At,"An application of this architecture could be to leverage two pretrained "),st=s(At,"A",{href:!0});var xc=d(st);_a=r(xc,"BertModel"),xc.forEach(t),ba=r(At,` as the encoder
and decoder for a summarization model as was shown in: `),to=s(At,"A",{href:!0,rel:!0});var zc=d(to);va=r(zc,"Text Summarization with Pretrained Encoders"),zc.forEach(t),ya=r(At," by Yang Liu and Mirella Lapata."),At.forEach(t),dr=p(o),te=s(o,"H2",{class:!0});var Cr=d(te);Me=s(Cr,"A",{id:!0,class:!0,href:!0});var qc=d(Me);Zt=s(qc,"SPAN",{});var jc=d(Zt);y(no.$$.fragment,jc),jc.forEach(t),qc.forEach(t),ka=p(Cr),Kt=s(Cr,"SPAN",{});var Fc=d(Kt);wa=r(Fc,"Randomly initializing [EncoderDecoderModel](/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) from model configurations."),Fc.forEach(t),Cr.forEach(t),ir=p(o),ne=s(o,"P",{});var Xn=d(ne);dt=s(Xn,"A",{href:!0});var Pc=d(dt);Ea=r(Pc,"EncoderDecoderModel"),Pc.forEach(t),Ta=r(Xn," can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),it=s(Xn,"A",{href:!0});var Ac=d(it);$a=r(Ac,"BertModel"),Ac.forEach(t),Ma=r(Xn," configuration for both the encoder and the decoder."),Xn.forEach(t),cr=p(o),y(ro.$$.fragment,o),lr=p(o),re=s(o,"H2",{class:!0});var Sr=d(re);De=s(Sr,"A",{id:!0,class:!0,href:!0});var Cc=d(De);Qt=s(Cc,"SPAN",{});var Sc=d(Qt);y(ao.$$.fragment,Sc),Sc.forEach(t),Cc.forEach(t),Da=p(Sr),Xt=s(Sr,"SPAN",{});var Nc=d(Xt);xa=r(Nc,"Initialising [EncoderDecoderModel](/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) from a pretrained encoder and a pretrained decoder."),Nc.forEach(t),Sr.forEach(t),pr=p(o),M=s(o,"P",{});var j=d(M);ct=s(j,"A",{href:!0});var Ic=d(ct);za=r(Ic,"EncoderDecoderModel"),Ic.forEach(t),qa=r(j," can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained auto-encoding model, "),en=s(j,"EM",{});var Lc=d(en);ja=r(Lc,"e.g."),Lc.forEach(t),Fa=r(j," BERT, can serve as the encoder and both pretrained auto-encoding models, "),on=s(j,"EM",{});var Bc=d(on);Pa=r(Bc,"e.g."),Bc.forEach(t),Aa=r(j," BERT, pretrained causal language models, "),tn=s(j,"EM",{});var Oc=d(tn);Ca=r(Oc,"e.g."),Oc.forEach(t),Sa=r(j," GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),nn=s(j,"EM",{});var Rc=d(nn);Na=r(Rc,"e.g."),Rc.forEach(t),Ia=r(j,` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),lt=s(j,"A",{href:!0});var Wc=d(lt);La=r(Wc,"EncoderDecoderModel"),Wc.forEach(t),Ba=r(j," from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),xe=s(j,"A",{href:!0,rel:!0});var Tc=d(xe);Oa=r(Tc,"the "),rn=s(Tc,"EM",{});var Vc=d(rn);Ra=r(Vc,"Warm-starting-encoder-decoder blog post"),Vc.forEach(t),Tc.forEach(t),Wa=r(j,`.
To do so, the `),an=s(j,"CODE",{});var Gc=d(an);Va=r(Gc,"EncoderDecoderModel"),Gc.forEach(t),Ga=r(j," class provides a "),pt=s(j,"A",{href:!0});var Hc=d(pt);Ha=r(Hc,"EncoderDecoderModel.from_encoder_decoder_pretrained()"),Hc.forEach(t),Ua=r(j," method."),j.forEach(t),mr=p(o),y(so.$$.fragment,o),hr=p(o),ae=s(o,"H2",{class:!0});var Nr=d(ae);ze=s(Nr,"A",{id:!0,class:!0,href:!0});var Uc=d(ze);sn=s(Uc,"SPAN",{});var Yc=d(sn);y(io.$$.fragment,Yc),Yc.forEach(t),Uc.forEach(t),Ya=p(Nr),dn=s(Nr,"SPAN",{});var Jc=d(dn);Ja=r(Jc,"Loading an existing [EncoderDecoderModel](/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) checkpoint."),Jc.forEach(t),Nr.forEach(t),fr=p(o),U=s(o,"P",{});var Ct=d(U);Za=r(Ct,"To load fine-tuned checkpoints of the "),cn=s(Ct,"CODE",{});var Zc=d(cn);Ka=r(Zc,"EncoderDecoderModel"),Zc.forEach(t),Qa=r(Ct," class, [\u2018EncoderDecoderModel`] provides the "),ln=s(Ct,"CODE",{});var Kc=d(ln);Xa=r(Kc,"from_pretrained(...)"),Kc.forEach(t),es=r(Ct," method just like any other model architecture in Transformers."),Ct.forEach(t),ur=p(o),y(co.$$.fragment,o),gr=p(o),se=s(o,"H2",{class:!0});var Ir=d(se);qe=s(Ir,"A",{id:!0,class:!0,href:!0});var Qc=d(qe);pn=s(Qc,"SPAN",{});var Xc=d(pn);y(lo.$$.fragment,Xc),Xc.forEach(t),Qc.forEach(t),os=p(Ir),po=s(Ir,"SPAN",{});var Lr=d(po);ts=r(Lr,"Loading a PyTorch checkpoint into "),mn=s(Lr,"CODE",{});var el=d(mn);ns=r(el,"TFEncoderDecoderModel"),el.forEach(t),rs=r(Lr,"."),Lr.forEach(t),Ir.forEach(t),_r=p(o),de=s(o,"P",{});var er=d(de);hn=s(er,"CODE",{});var ol=d(hn);as=r(ol,"TFEncoderDecoderModel.from_pretrained()"),ol.forEach(t),ss=r(er,` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),fn=s(er,"CODE",{});var tl=d(fn);ds=r(tl,"from_pt=True"),tl.forEach(t),is=r(er,` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),er.forEach(t),br=p(o),y(mo.$$.fragment,o),vr=p(o),ie=s(o,"H2",{class:!0});var Br=d(ie);je=s(Br,"A",{id:!0,class:!0,href:!0});var nl=d(je);un=s(nl,"SPAN",{});var rl=d(un);y(ho.$$.fragment,rl),rl.forEach(t),nl.forEach(t),cs=p(Br),gn=s(Br,"SPAN",{});var al=d(gn);ls=r(al,"Training"),al.forEach(t),Br.forEach(t),yr=p(o),N=s(o,"P",{});var ee=d(N);ps=r(ee,`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),_n=s(ee,"CODE",{});var sl=d(_n);ms=r(sl,"input_ids"),sl.forEach(t),hs=r(ee,` (which are the
`),bn=s(ee,"CODE",{});var dl=d(bn);fs=r(dl,"input_ids"),dl.forEach(t),us=r(ee," of the encoded input sequence) and "),vn=s(ee,"CODE",{});var il=d(vn);gs=r(il,"labels"),il.forEach(t),_s=r(ee," (which are the "),yn=s(ee,"CODE",{});var cl=d(yn);bs=r(cl,"input_ids"),cl.forEach(t),vs=r(ee,` of the encoded
target sequence).`),ee.forEach(t),kr=p(o),y(fo.$$.fragment,o),wr=p(o),Fe=s(o,"P",{});var Or=d(Fe);ys=r(Or,"Detailed "),uo=s(Or,"A",{href:!0,rel:!0});var ll=d(uo);ks=r(ll,"colab"),ll.forEach(t),ws=r(Or," for training."),Or.forEach(t),Er=p(o),Y=s(o,"P",{});var St=d(Y);Es=r(St,"This model was contributed by "),go=s(St,"A",{href:!0,rel:!0});var pl=d(go);Ts=r(pl,"thomwolf"),pl.forEach(t),$s=r(St,`. This model\u2019s TensorFlow and Flax versions
were contributed by `),_o=s(St,"A",{href:!0,rel:!0});var ml=d(_o);Ms=r(ml,"ydshieh"),ml.forEach(t),Ds=r(St,"."),St.forEach(t),Tr=p(o),ce=s(o,"H2",{class:!0});var Rr=d(ce);Pe=s(Rr,"A",{id:!0,class:!0,href:!0});var hl=d(Pe);kn=s(hl,"SPAN",{});var fl=d(kn);y(bo.$$.fragment,fl),fl.forEach(t),hl.forEach(t),xs=p(Rr),wn=s(Rr,"SPAN",{});var ul=d(wn);zs=r(ul,"EncoderDecoderConfig"),ul.forEach(t),Rr.forEach(t),$r=p(o),C=s(o,"DIV",{class:!0});var R=d(C);y(vo.$$.fragment,R),qs=p(R),Ae=s(R,"P",{});var or=d(Ae);mt=s(or,"A",{href:!0});var gl=d(mt);js=r(gl,"EncoderDecoderConfig"),gl.forEach(t),Fs=r(or," is the configuration class to store the configuration of a "),ht=s(or,"A",{href:!0});var _l=d(ht);Ps=r(_l,"EncoderDecoderModel"),_l.forEach(t),As=r(or,`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),or.forEach(t),Cs=p(R),le=s(R,"P",{});var Nt=d(le);Ss=r(Nt,"Configuration objects inherit from "),ft=s(Nt,"A",{href:!0});var bl=d(ft);Ns=r(bl,"PretrainedConfig"),bl.forEach(t),Is=r(Nt,` and can be used to control the model outputs. Read the
documentation from `),ut=s(Nt,"A",{href:!0});var vl=d(ut);Ls=r(vl,"PretrainedConfig"),vl.forEach(t),Bs=r(Nt," for more information."),Nt.forEach(t),Os=p(R),y(Ce.$$.fragment,R),Rs=p(R),Se=s(R,"DIV",{class:!0});var Wr=d(Se);y(yo.$$.fragment,Wr),Ws=p(Wr),ko=s(Wr,"P",{});var Vr=d(ko);Vs=r(Vr,"Instantiate a "),gt=s(Vr,"A",{href:!0});var yl=d(gt);Gs=r(yl,"EncoderDecoderConfig"),yl.forEach(t),Hs=r(Vr,` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),Vr.forEach(t),Wr.forEach(t),Us=p(R),Ne=s(R,"DIV",{class:!0});var Gr=d(Ne);y(wo.$$.fragment,Gr),Ys=p(Gr),pe=s(Gr,"P",{});var It=d(pe);Js=r(It,"Serializes this instance to a Python dictionary. Override the default "),En=s(It,"EM",{});var kl=d(En);Zs=r(kl,"to_dict()"),kl.forEach(t),Ks=r(It," from "),Tn=s(It,"EM",{});var wl=d(Tn);Qs=r(wl,"PretrainedConfig"),wl.forEach(t),Xs=r(It,"."),It.forEach(t),Gr.forEach(t),R.forEach(t),Mr=p(o),me=s(o,"H2",{class:!0});var Hr=d(me);Ie=s(Hr,"A",{id:!0,class:!0,href:!0});var El=d(Ie);$n=s(El,"SPAN",{});var Tl=d($n);y(Eo.$$.fragment,Tl),Tl.forEach(t),El.forEach(t),ed=p(Hr),Mn=s(Hr,"SPAN",{});var $l=d(Mn);od=r($l,"EncoderDecoderModel"),$l.forEach(t),Hr.forEach(t),Dr=p(o),D=s(o,"DIV",{class:!0});var F=d(D);y(To.$$.fragment,F),td=p(F),he=s(F,"P",{});var Lt=d(he);nd=r(Lt,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),_t=s(Lt,"A",{href:!0});var Ml=d(_t);rd=r(Ml,"from_pretrained()"),Ml.forEach(t),ad=r(Lt," function and the decoder is loaded via "),bt=s(Lt,"A",{href:!0});var Dl=d(bt);sd=r(Dl,"from_pretrained()"),Dl.forEach(t),dd=r(Lt,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Lt.forEach(t),id=p(F),$o=s(F,"P",{});var Ur=d($o);cd=r(Ur,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Mo=s(Ur,"A",{href:!0,rel:!0});var xl=d(Mo);ld=r(xl,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),xl.forEach(t),pd=r(Ur,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Ur.forEach(t),md=p(F),Dn=s(F,"P",{});var zl=d(Dn);hd=r(zl,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),zl.forEach(t),fd=p(F),Do=s(F,"P",{});var Yr=d(Do);ud=r(Yr,"This model inherits from "),vt=s(Yr,"A",{href:!0});var ql=d(vt);gd=r(ql,"PreTrainedModel"),ql.forEach(t),_d=r(Yr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yr.forEach(t),bd=p(F),xo=s(F,"P",{});var Jr=d(xo);vd=r(Jr,"This model is also a PyTorch "),zo=s(Jr,"A",{href:!0,rel:!0});var jl=d(zo);yd=r(jl,"torch.nn.Module"),jl.forEach(t),kd=r(Jr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr.forEach(t),wd=p(F),J=s(F,"P",{});var Xo=d(J);yt=s(Xo,"A",{href:!0});var Fl=d(yt);Ed=r(Fl,"EncoderDecoderModel"),Fl.forEach(t),Td=r(Xo,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),xn=s(Xo,"EM",{});var Pl=d(xn);$d=r(Pl,"~transformers.AutoModel.from_pretrained"),Pl.forEach(t),Md=r(Xo,` class method for the encoder and
:meth`),zn=s(Xo,"EM",{});var Al=d(zn);Dd=r(Al,"~transformers.AutoModelForCausalLM.from_pretrained"),Al.forEach(t),xd=r(Xo," class method for the decoder."),Xo.forEach(t),zd=p(F),I=s(F,"DIV",{class:!0});var Ze=d(I);y(qo.$$.fragment,Ze),qd=p(Ze),fe=s(Ze,"P",{});var Bt=d(fe);jd=r(Bt,"The "),kt=s(Bt,"A",{href:!0});var Cl=d(kt);Fd=r(Cl,"EncoderDecoderModel"),Cl.forEach(t),Pd=r(Bt," forward method, overrides the "),qn=s(Bt,"CODE",{});var Sl=d(qn);Ad=r(Sl,"__call__"),Sl.forEach(t),Cd=r(Bt," special method."),Bt.forEach(t),Sd=p(Ze),y(Le.$$.fragment,Ze),Nd=p(Ze),y(Be.$$.fragment,Ze),Ze.forEach(t),Id=p(F),L=s(F,"DIV",{class:!0});var Ke=d(L);y(jo.$$.fragment,Ke),Ld=p(Ke),jn=s(Ke,"P",{});var Nl=d(jn);Bd=r(Nl,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Nl.forEach(t),Od=p(Ke),ue=s(Ke,"P",{});var Ot=d(ue);Rd=r(Ot,"The model is set in evaluation mode by default using "),Fn=s(Ot,"CODE",{});var Il=d(Fn);Wd=r(Il,"model.eval()"),Il.forEach(t),Vd=r(Ot,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),Pn=s(Ot,"CODE",{});var Ll=d(Pn);Gd=r(Ll,"model.train()"),Ll.forEach(t),Hd=r(Ot,"."),Ot.forEach(t),Ud=p(Ke),y(Oe.$$.fragment,Ke),Ke.forEach(t),F.forEach(t),xr=p(o),ge=s(o,"H2",{class:!0});var Zr=d(ge);Re=s(Zr,"A",{id:!0,class:!0,href:!0});var Bl=d(Re);An=s(Bl,"SPAN",{});var Ol=d(An);y(Fo.$$.fragment,Ol),Ol.forEach(t),Bl.forEach(t),Yd=p(Zr),Cn=s(Zr,"SPAN",{});var Rl=d(Cn);Jd=r(Rl,"TFEncoderDecoderModel"),Rl.forEach(t),Zr.forEach(t),zr=p(o),x=s(o,"DIV",{class:!0});var P=d(x);y(Po.$$.fragment,P),Zd=p(P),_e=s(P,"P",{});var Rt=d(_e);Kd=r(Rt,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),wt=s(Rt,"A",{href:!0});var Wl=d(wt);Qd=r(Wl,"from_pretrained()"),Wl.forEach(t),Xd=r(Rt," function and the decoder is loaded via "),Et=s(Rt,"A",{href:!0});var Vl=d(Et);ei=r(Vl,"from_pretrained()"),Vl.forEach(t),oi=r(Rt,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Rt.forEach(t),ti=p(P),Ao=s(P,"P",{});var Kr=d(Ao);ni=r(Kr,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Co=s(Kr,"A",{href:!0,rel:!0});var Gl=d(Co);ri=r(Gl,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Gl.forEach(t),ai=r(Kr,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Kr.forEach(t),si=p(P),Sn=s(P,"P",{});var Hl=d(Sn);di=r(Hl,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Hl.forEach(t),ii=p(P),So=s(P,"P",{});var Qr=d(So);ci=r(Qr,"This model inherits from "),Tt=s(Qr,"A",{href:!0});var Ul=d(Tt);li=r(Ul,"TFPreTrainedModel"),Ul.forEach(t),pi=r(Qr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qr.forEach(t),mi=p(P),No=s(P,"P",{});var Xr=d(No);hi=r(Xr,"This model is also a "),Io=s(Xr,"A",{href:!0,rel:!0});var Yl=d(Io);fi=r(Yl,"tf.keras.Model"),Yl.forEach(t),ui=r(Xr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xr.forEach(t),gi=p(P),Z=s(P,"P",{});var et=d(Z);$t=s(et,"A",{href:!0});var Jl=d($t);_i=r(Jl,"TFEncoderDecoderModel"),Jl.forEach(t),bi=r(et,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),Mt=s(et,"A",{href:!0});var Zl=d(Mt);vi=r(Zl,"from_pretrained()"),Zl.forEach(t),yi=r(et," class method for the encoder and "),Dt=s(et,"A",{href:!0});var Kl=d(Dt);ki=r(Kl,"from_pretrained()"),Kl.forEach(t),wi=r(et,` class
method for the decoder.`),et.forEach(t),Ei=p(P),B=s(P,"DIV",{class:!0});var Qe=d(B);y(Lo.$$.fragment,Qe),Ti=p(Qe),be=s(Qe,"P",{});var Wt=d(be);$i=r(Wt,"The "),xt=s(Wt,"A",{href:!0});var Ql=d(xt);Mi=r(Ql,"TFEncoderDecoderModel"),Ql.forEach(t),Di=r(Wt," forward method, overrides the "),Nn=s(Wt,"CODE",{});var Xl=d(Nn);xi=r(Xl,"__call__"),Xl.forEach(t),zi=r(Wt," special method."),Wt.forEach(t),qi=p(Qe),y(We.$$.fragment,Qe),ji=p(Qe),y(Ve.$$.fragment,Qe),Qe.forEach(t),Fi=p(P),K=s(P,"DIV",{class:!0});var Vt=d(K);y(Bo.$$.fragment,Vt),Pi=p(Vt),In=s(Vt,"P",{});var ep=d(In);Ai=r(ep,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ep.forEach(t),Ci=p(Vt),y(Ge.$$.fragment,Vt),Vt.forEach(t),P.forEach(t),qr=p(o),ve=s(o,"H2",{class:!0});var ea=d(ve);He=s(ea,"A",{id:!0,class:!0,href:!0});var op=d(He);Ln=s(op,"SPAN",{});var tp=d(Ln);y(Oo.$$.fragment,tp),tp.forEach(t),op.forEach(t),Si=p(ea),Bn=s(ea,"SPAN",{});var np=d(Bn);Ni=r(np,"FlaxEncoderDecoderModel"),np.forEach(t),ea.forEach(t),jr=p(o),z=s(o,"DIV",{class:!0});var A=d(z);y(Ro.$$.fragment,A),Ii=p(A),ye=s(A,"P",{});var Gt=d(ye);Li=r(Gt,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),zt=s(Gt,"A",{href:!0});var rp=d(zt);Bi=r(rp,"from_pretrained()"),rp.forEach(t),Oi=r(Gt," function and the decoder is loaded via "),qt=s(Gt,"A",{href:!0});var ap=d(qt);Ri=r(ap,"from_pretrained()"),ap.forEach(t),Wi=r(Gt,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Gt.forEach(t),Vi=p(A),Wo=s(A,"P",{});var oa=d(Wo);Gi=r(oa,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Vo=s(oa,"A",{href:!0,rel:!0});var sp=d(Vo);Hi=r(sp,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),sp.forEach(t),Ui=r(oa,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),oa.forEach(t),Yi=p(A),On=s(A,"P",{});var dp=d(On);Ji=r(dp,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),dp.forEach(t),Zi=p(A),Go=s(A,"P",{});var ta=d(Go);Ki=r(ta,"This model inherits from "),jt=s(ta,"A",{href:!0});var ip=d(jt);Qi=r(ip,"FlaxPreTrainedModel"),ip.forEach(t),Xi=r(ta,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ta.forEach(t),ec=p(A),Ho=s(A,"P",{});var na=d(Ho);oc=r(na,`This model is also a Flax Linen
`),Uo=s(na,"A",{href:!0,rel:!0});var cp=d(Uo);tc=r(cp,"flax.nn.Module"),cp.forEach(t),nc=r(na,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),na.forEach(t),rc=p(A),Q=s(A,"P",{});var ot=d(Q);Ft=s(ot,"A",{href:!0});var lp=d(Ft);ac=r(lp,"FlaxEncoderDecoderModel"),lp.forEach(t),sc=r(ot,` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),Rn=s(ot,"EM",{});var pp=d(Rn);dc=r(pp,"~transformers.FlaxAutoModel.from_pretrained"),pp.forEach(t),ic=r(ot,` class method for the
encoder and :meth`),Wn=s(ot,"EM",{});var mp=d(Wn);cc=r(mp,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),mp.forEach(t),lc=r(ot," class method for the decoder."),ot.forEach(t),pc=p(A),O=s(A,"DIV",{class:!0});var Xe=d(O);y(Yo.$$.fragment,Xe),mc=p(Xe),ke=s(Xe,"P",{});var Ht=d(ke);hc=r(Ht,"The "),Pt=s(Ht,"A",{href:!0});var hp=d(Pt);fc=r(hp,"FlaxEncoderDecoderModel"),hp.forEach(t),uc=r(Ht," forward method, overrides the "),Vn=s(Ht,"CODE",{});var fp=d(Vn);gc=r(fp,"__call__"),fp.forEach(t),_c=r(Ht," special method."),Ht.forEach(t),bc=p(Xe),y(Ue.$$.fragment,Xe),vc=p(Xe),y(Ye.$$.fragment,Xe),Xe.forEach(t),yc=p(A),X=s(A,"DIV",{class:!0});var Ut=d(X);y(Jo.$$.fragment,Ut),kc=p(Ut),Gn=s(Ut,"P",{});var up=d(Gn);wc=r(up,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),up.forEach(t),Ec=p(Ut),y(Je.$$.fragment,Ut),Ut.forEach(t),A.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(Fp)),c(f,"id","encoder-decoder-models"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#encoder-decoder-models"),c(_,"class","relative group"),c(we,"id","overview"),c(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(we,"href","#overview"),c(oe,"class","relative group"),c(rt,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(oo,"href","https://arxiv.org/abs/1907.12461"),c(oo,"rel","nofollow"),c(at,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(st,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),c(to,"href","https://arxiv.org/abs/1908.08345"),c(to,"rel","nofollow"),c(Me,"id","randomly-initializing-encoderdecodermodeldocstransformersmainenmodeldocencoderdecodertransformersencoderdecodermodel-from-model-configurations"),c(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Me,"href","#randomly-initializing-encoderdecodermodeldocstransformersmainenmodeldocencoderdecodertransformersencoderdecodermodel-from-model-configurations"),c(te,"class","relative group"),c(dt,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(it,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),c(De,"id","initialising-encoderdecodermodeldocstransformersmainenmodeldocencoderdecodertransformersencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),c(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(De,"href","#initialising-encoderdecodermodeldocstransformersmainenmodeldocencoderdecodertransformersencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),c(re,"class","relative group"),c(ct,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(lt,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(xe,"href","https://huggingface.co/blog/warm-starting-encoder-decoder"),c(xe,"rel","nofollow"),c(pt,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel.from_encoder_decoder_pretrained"),c(ze,"id","loading-an-existing-encoderdecodermodeldocstransformersmainenmodeldocencoderdecodertransformersencoderdecodermodel-checkpoint"),c(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ze,"href","#loading-an-existing-encoderdecodermodeldocstransformersmainenmodeldocencoderdecodertransformersencoderdecodermodel-checkpoint"),c(ae,"class","relative group"),c(qe,"id","loading-a-pytorch-checkpoint-into-tfencoderdecodermodel"),c(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qe,"href","#loading-a-pytorch-checkpoint-into-tfencoderdecodermodel"),c(se,"class","relative group"),c(je,"id","training"),c(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(je,"href","#training"),c(ie,"class","relative group"),c(uo,"href","https://colab.research.google.com/drive/1WIk2bxglElfZewOHboPFNj8H44_VAyKE?usp=sharing#scrollTo=ZwQIEhKOrJpl"),c(uo,"rel","nofollow"),c(go,"href","https://github.com/thomwolf"),c(go,"rel","nofollow"),c(_o,"href","https://github.com/ydshieh"),c(_o,"rel","nofollow"),c(Pe,"id","transformers.EncoderDecoderConfig"),c(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pe,"href","#transformers.EncoderDecoderConfig"),c(ce,"class","relative group"),c(mt,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),c(ht,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(ft,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ut,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(gt,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ie,"id","transformers.EncoderDecoderModel"),c(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ie,"href","#transformers.EncoderDecoderModel"),c(me,"class","relative group"),c(_t,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(bt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Mo,"href","https://arxiv.org/abs/1907.12461"),c(Mo,"rel","nofollow"),c(vt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(zo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(zo,"rel","nofollow"),c(yt,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(kt,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Re,"id","transformers.TFEncoderDecoderModel"),c(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Re,"href","#transformers.TFEncoderDecoderModel"),c(ge,"class","relative group"),c(wt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Et,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Co,"href","https://arxiv.org/abs/1907.12461"),c(Co,"rel","nofollow"),c(Tt,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Io,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Io,"rel","nofollow"),c($t,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),c(Mt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Dt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(xt,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(He,"id","transformers.FlaxEncoderDecoderModel"),c(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(He,"href","#transformers.FlaxEncoderDecoderModel"),c(ve,"class","relative group"),c(zt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(qt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Vo,"href","https://arxiv.org/abs/1907.12461"),c(Vo,"rel","nofollow"),c(jt,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Uo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Uo,"rel","nofollow"),c(Ft,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),c(Pt,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,h),u(o,$,m),u(o,_,m),e(_,f),e(f,b),k(i,b,null),e(_,g),e(_,S),e(S,ra),u(o,tr,m),u(o,oe,m),e(oe,we),e(we,Yt),k(eo,Yt,null),e(oe,aa),e(oe,Jt),e(Jt,sa),u(o,nr,m),u(o,Ee,m),e(Ee,da),e(Ee,rt),e(rt,ia),e(Ee,ca),u(o,rr,m),u(o,Te,m),e(Te,la),e(Te,oo),e(oo,pa),e(Te,ma),u(o,ar,m),u(o,$e,m),e($e,ha),e($e,at),e(at,fa),e($e,ua),u(o,sr,m),u(o,H,m),e(H,ga),e(H,st),e(st,_a),e(H,ba),e(H,to),e(to,va),e(H,ya),u(o,dr,m),u(o,te,m),e(te,Me),e(Me,Zt),k(no,Zt,null),e(te,ka),e(te,Kt),e(Kt,wa),u(o,ir,m),u(o,ne,m),e(ne,dt),e(dt,Ea),e(ne,Ta),e(ne,it),e(it,$a),e(ne,Ma),u(o,cr,m),k(ro,o,m),u(o,lr,m),u(o,re,m),e(re,De),e(De,Qt),k(ao,Qt,null),e(re,Da),e(re,Xt),e(Xt,xa),u(o,pr,m),u(o,M,m),e(M,ct),e(ct,za),e(M,qa),e(M,en),e(en,ja),e(M,Fa),e(M,on),e(on,Pa),e(M,Aa),e(M,tn),e(tn,Ca),e(M,Sa),e(M,nn),e(nn,Na),e(M,Ia),e(M,lt),e(lt,La),e(M,Ba),e(M,xe),e(xe,Oa),e(xe,rn),e(rn,Ra),e(M,Wa),e(M,an),e(an,Va),e(M,Ga),e(M,pt),e(pt,Ha),e(M,Ua),u(o,mr,m),k(so,o,m),u(o,hr,m),u(o,ae,m),e(ae,ze),e(ze,sn),k(io,sn,null),e(ae,Ya),e(ae,dn),e(dn,Ja),u(o,fr,m),u(o,U,m),e(U,Za),e(U,cn),e(cn,Ka),e(U,Qa),e(U,ln),e(ln,Xa),e(U,es),u(o,ur,m),k(co,o,m),u(o,gr,m),u(o,se,m),e(se,qe),e(qe,pn),k(lo,pn,null),e(se,os),e(se,po),e(po,ts),e(po,mn),e(mn,ns),e(po,rs),u(o,_r,m),u(o,de,m),e(de,hn),e(hn,as),e(de,ss),e(de,fn),e(fn,ds),e(de,is),u(o,br,m),k(mo,o,m),u(o,vr,m),u(o,ie,m),e(ie,je),e(je,un),k(ho,un,null),e(ie,cs),e(ie,gn),e(gn,ls),u(o,yr,m),u(o,N,m),e(N,ps),e(N,_n),e(_n,ms),e(N,hs),e(N,bn),e(bn,fs),e(N,us),e(N,vn),e(vn,gs),e(N,_s),e(N,yn),e(yn,bs),e(N,vs),u(o,kr,m),k(fo,o,m),u(o,wr,m),u(o,Fe,m),e(Fe,ys),e(Fe,uo),e(uo,ks),e(Fe,ws),u(o,Er,m),u(o,Y,m),e(Y,Es),e(Y,go),e(go,Ts),e(Y,$s),e(Y,_o),e(_o,Ms),e(Y,Ds),u(o,Tr,m),u(o,ce,m),e(ce,Pe),e(Pe,kn),k(bo,kn,null),e(ce,xs),e(ce,wn),e(wn,zs),u(o,$r,m),u(o,C,m),k(vo,C,null),e(C,qs),e(C,Ae),e(Ae,mt),e(mt,js),e(Ae,Fs),e(Ae,ht),e(ht,Ps),e(Ae,As),e(C,Cs),e(C,le),e(le,Ss),e(le,ft),e(ft,Ns),e(le,Is),e(le,ut),e(ut,Ls),e(le,Bs),e(C,Os),k(Ce,C,null),e(C,Rs),e(C,Se),k(yo,Se,null),e(Se,Ws),e(Se,ko),e(ko,Vs),e(ko,gt),e(gt,Gs),e(ko,Hs),e(C,Us),e(C,Ne),k(wo,Ne,null),e(Ne,Ys),e(Ne,pe),e(pe,Js),e(pe,En),e(En,Zs),e(pe,Ks),e(pe,Tn),e(Tn,Qs),e(pe,Xs),u(o,Mr,m),u(o,me,m),e(me,Ie),e(Ie,$n),k(Eo,$n,null),e(me,ed),e(me,Mn),e(Mn,od),u(o,Dr,m),u(o,D,m),k(To,D,null),e(D,td),e(D,he),e(he,nd),e(he,_t),e(_t,rd),e(he,ad),e(he,bt),e(bt,sd),e(he,dd),e(D,id),e(D,$o),e($o,cd),e($o,Mo),e(Mo,ld),e($o,pd),e(D,md),e(D,Dn),e(Dn,hd),e(D,fd),e(D,Do),e(Do,ud),e(Do,vt),e(vt,gd),e(Do,_d),e(D,bd),e(D,xo),e(xo,vd),e(xo,zo),e(zo,yd),e(xo,kd),e(D,wd),e(D,J),e(J,yt),e(yt,Ed),e(J,Td),e(J,xn),e(xn,$d),e(J,Md),e(J,zn),e(zn,Dd),e(J,xd),e(D,zd),e(D,I),k(qo,I,null),e(I,qd),e(I,fe),e(fe,jd),e(fe,kt),e(kt,Fd),e(fe,Pd),e(fe,qn),e(qn,Ad),e(fe,Cd),e(I,Sd),k(Le,I,null),e(I,Nd),k(Be,I,null),e(D,Id),e(D,L),k(jo,L,null),e(L,Ld),e(L,jn),e(jn,Bd),e(L,Od),e(L,ue),e(ue,Rd),e(ue,Fn),e(Fn,Wd),e(ue,Vd),e(ue,Pn),e(Pn,Gd),e(ue,Hd),e(L,Ud),k(Oe,L,null),u(o,xr,m),u(o,ge,m),e(ge,Re),e(Re,An),k(Fo,An,null),e(ge,Yd),e(ge,Cn),e(Cn,Jd),u(o,zr,m),u(o,x,m),k(Po,x,null),e(x,Zd),e(x,_e),e(_e,Kd),e(_e,wt),e(wt,Qd),e(_e,Xd),e(_e,Et),e(Et,ei),e(_e,oi),e(x,ti),e(x,Ao),e(Ao,ni),e(Ao,Co),e(Co,ri),e(Ao,ai),e(x,si),e(x,Sn),e(Sn,di),e(x,ii),e(x,So),e(So,ci),e(So,Tt),e(Tt,li),e(So,pi),e(x,mi),e(x,No),e(No,hi),e(No,Io),e(Io,fi),e(No,ui),e(x,gi),e(x,Z),e(Z,$t),e($t,_i),e(Z,bi),e(Z,Mt),e(Mt,vi),e(Z,yi),e(Z,Dt),e(Dt,ki),e(Z,wi),e(x,Ei),e(x,B),k(Lo,B,null),e(B,Ti),e(B,be),e(be,$i),e(be,xt),e(xt,Mi),e(be,Di),e(be,Nn),e(Nn,xi),e(be,zi),e(B,qi),k(We,B,null),e(B,ji),k(Ve,B,null),e(x,Fi),e(x,K),k(Bo,K,null),e(K,Pi),e(K,In),e(In,Ai),e(K,Ci),k(Ge,K,null),u(o,qr,m),u(o,ve,m),e(ve,He),e(He,Ln),k(Oo,Ln,null),e(ve,Si),e(ve,Bn),e(Bn,Ni),u(o,jr,m),u(o,z,m),k(Ro,z,null),e(z,Ii),e(z,ye),e(ye,Li),e(ye,zt),e(zt,Bi),e(ye,Oi),e(ye,qt),e(qt,Ri),e(ye,Wi),e(z,Vi),e(z,Wo),e(Wo,Gi),e(Wo,Vo),e(Vo,Hi),e(Wo,Ui),e(z,Yi),e(z,On),e(On,Ji),e(z,Zi),e(z,Go),e(Go,Ki),e(Go,jt),e(jt,Qi),e(Go,Xi),e(z,ec),e(z,Ho),e(Ho,oc),e(Ho,Uo),e(Uo,tc),e(Ho,nc),e(z,rc),e(z,Q),e(Q,Ft),e(Ft,ac),e(Q,sc),e(Q,Rn),e(Rn,dc),e(Q,ic),e(Q,Wn),e(Wn,cc),e(Q,lc),e(z,pc),e(z,O),k(Yo,O,null),e(O,mc),e(O,ke),e(ke,hc),e(ke,Pt),e(Pt,fc),e(ke,uc),e(ke,Vn),e(Vn,gc),e(ke,_c),e(O,bc),k(Ue,O,null),e(O,vc),k(Ye,O,null),e(z,yc),e(z,X),k(Jo,X,null),e(X,kc),e(X,Gn),e(Gn,wc),e(X,Ec),k(Je,X,null),Fr=!0},p(o,[m]){const Zo={};m&2&&(Zo.$$scope={dirty:m,ctx:o}),Ce.$set(Zo);const Hn={};m&2&&(Hn.$$scope={dirty:m,ctx:o}),Le.$set(Hn);const Un={};m&2&&(Un.$$scope={dirty:m,ctx:o}),Be.$set(Un);const Yn={};m&2&&(Yn.$$scope={dirty:m,ctx:o}),Oe.$set(Yn);const Ko={};m&2&&(Ko.$$scope={dirty:m,ctx:o}),We.$set(Ko);const Jn={};m&2&&(Jn.$$scope={dirty:m,ctx:o}),Ve.$set(Jn);const Zn={};m&2&&(Zn.$$scope={dirty:m,ctx:o}),Ge.$set(Zn);const Kn={};m&2&&(Kn.$$scope={dirty:m,ctx:o}),Ue.$set(Kn);const Qo={};m&2&&(Qo.$$scope={dirty:m,ctx:o}),Ye.$set(Qo);const Qn={};m&2&&(Qn.$$scope={dirty:m,ctx:o}),Je.$set(Qn)},i(o){Fr||(w(i.$$.fragment,o),w(eo.$$.fragment,o),w(no.$$.fragment,o),w(ro.$$.fragment,o),w(ao.$$.fragment,o),w(so.$$.fragment,o),w(io.$$.fragment,o),w(co.$$.fragment,o),w(lo.$$.fragment,o),w(mo.$$.fragment,o),w(ho.$$.fragment,o),w(fo.$$.fragment,o),w(bo.$$.fragment,o),w(vo.$$.fragment,o),w(Ce.$$.fragment,o),w(yo.$$.fragment,o),w(wo.$$.fragment,o),w(Eo.$$.fragment,o),w(To.$$.fragment,o),w(qo.$$.fragment,o),w(Le.$$.fragment,o),w(Be.$$.fragment,o),w(jo.$$.fragment,o),w(Oe.$$.fragment,o),w(Fo.$$.fragment,o),w(Po.$$.fragment,o),w(Lo.$$.fragment,o),w(We.$$.fragment,o),w(Ve.$$.fragment,o),w(Bo.$$.fragment,o),w(Ge.$$.fragment,o),w(Oo.$$.fragment,o),w(Ro.$$.fragment,o),w(Yo.$$.fragment,o),w(Ue.$$.fragment,o),w(Ye.$$.fragment,o),w(Jo.$$.fragment,o),w(Je.$$.fragment,o),Fr=!0)},o(o){E(i.$$.fragment,o),E(eo.$$.fragment,o),E(no.$$.fragment,o),E(ro.$$.fragment,o),E(ao.$$.fragment,o),E(so.$$.fragment,o),E(io.$$.fragment,o),E(co.$$.fragment,o),E(lo.$$.fragment,o),E(mo.$$.fragment,o),E(ho.$$.fragment,o),E(fo.$$.fragment,o),E(bo.$$.fragment,o),E(vo.$$.fragment,o),E(Ce.$$.fragment,o),E(yo.$$.fragment,o),E(wo.$$.fragment,o),E(Eo.$$.fragment,o),E(To.$$.fragment,o),E(qo.$$.fragment,o),E(Le.$$.fragment,o),E(Be.$$.fragment,o),E(jo.$$.fragment,o),E(Oe.$$.fragment,o),E(Fo.$$.fragment,o),E(Po.$$.fragment,o),E(Lo.$$.fragment,o),E(We.$$.fragment,o),E(Ve.$$.fragment,o),E(Bo.$$.fragment,o),E(Ge.$$.fragment,o),E(Oo.$$.fragment,o),E(Ro.$$.fragment,o),E(Yo.$$.fragment,o),E(Ue.$$.fragment,o),E(Ye.$$.fragment,o),E(Jo.$$.fragment,o),E(Je.$$.fragment,o),Fr=!1},d(o){t(h),o&&t($),o&&t(_),T(i),o&&t(tr),o&&t(oe),T(eo),o&&t(nr),o&&t(Ee),o&&t(rr),o&&t(Te),o&&t(ar),o&&t($e),o&&t(sr),o&&t(H),o&&t(dr),o&&t(te),T(no),o&&t(ir),o&&t(ne),o&&t(cr),T(ro,o),o&&t(lr),o&&t(re),T(ao),o&&t(pr),o&&t(M),o&&t(mr),T(so,o),o&&t(hr),o&&t(ae),T(io),o&&t(fr),o&&t(U),o&&t(ur),T(co,o),o&&t(gr),o&&t(se),T(lo),o&&t(_r),o&&t(de),o&&t(br),T(mo,o),o&&t(vr),o&&t(ie),T(ho),o&&t(yr),o&&t(N),o&&t(kr),T(fo,o),o&&t(wr),o&&t(Fe),o&&t(Er),o&&t(Y),o&&t(Tr),o&&t(ce),T(bo),o&&t($r),o&&t(C),T(vo),T(Ce),T(yo),T(wo),o&&t(Mr),o&&t(me),T(Eo),o&&t(Dr),o&&t(D),T(To),T(qo),T(Le),T(Be),T(jo),T(Oe),o&&t(xr),o&&t(ge),T(Fo),o&&t(zr),o&&t(x),T(Po),T(Lo),T(We),T(Ve),T(Bo),T(Ge),o&&t(qr),o&&t(ve),T(Oo),o&&t(jr),o&&t(z),T(Ro),T(Yo),T(Ue),T(Ye),T(Jo),T(Je)}}}const Fp={local:"encoder-decoder-models",sections:[{local:"overview",title:"Overview"},{local:"randomly-initializing-encoderdecodermodeldocstransformersmainenmodeldocencoderdecodertransformersencoderdecodermodel-from-model-configurations",title:"Randomly initializing [EncoderDecoderModel](/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) from model configurations."},{local:"initialising-encoderdecodermodeldocstransformersmainenmodeldocencoderdecodertransformersencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder",title:"Initialising [EncoderDecoderModel](/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) from a pretrained encoder and a pretrained decoder."},{local:"loading-an-existing-encoderdecodermodeldocstransformersmainenmodeldocencoderdecodertransformersencoderdecodermodel-checkpoint",title:"Loading an existing [EncoderDecoderModel](/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel) checkpoint."},{local:"loading-a-pytorch-checkpoint-into-tfencoderdecodermodel",title:"Loading a PyTorch checkpoint into `TFEncoderDecoderModel`."},{local:"training",title:"Training"},{local:"transformers.EncoderDecoderConfig",title:"EncoderDecoderConfig"},{local:"transformers.EncoderDecoderModel",title:"EncoderDecoderModel"},{local:"transformers.TFEncoderDecoderModel",title:"TFEncoderDecoderModel"},{local:"transformers.FlaxEncoderDecoderModel",title:"FlaxEncoderDecoderModel"}],title:"Encoder Decoder Models"};function Pp(q){return yp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Bp extends gp{constructor(h){super();_p(this,h,Pp,jp,bp,{})}}export{Bp as default,Fp as metadata};
