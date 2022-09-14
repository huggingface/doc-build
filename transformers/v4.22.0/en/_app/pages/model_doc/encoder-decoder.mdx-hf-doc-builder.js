import{S as Vp,i as Gp,s as Up,e as a,k as l,w as b,t as n,M as Hp,c as s,d as t,m as p,a as d,x as y,h as r,b as c,G as e,g as u,y as k,q as w,o as E,B as T,v as Zp,L as ct}from"../../chunks/vendor-hf-doc-builder.js";import{T as Jc}from"../../chunks/Tip-hf-doc-builder.js";import{D as V}from"../../chunks/Docstring-hf-doc-builder.js";import{C as G}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as H}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as it}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Yp(q){let h,$,_,f,v;return f=new G({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),{c(){h=a("p"),$=n("Examples:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Examples:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),v=!0},p:ct,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){E(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function Jp(q){let h,$,_,f,v;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var S=d(_);f=r(S,"Module"),S.forEach(t),v=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,$),e(h,_),e(_,f),e(h,v)},d(i){i&&t(h)}}}function Kp(q){let h,$,_,f,v;return f=new G({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer
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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids)`}}),{c(){h=a("p"),$=n("Examples:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Examples:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),v=!0},p:ct,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){E(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function Qp(q){let h,$,_,f,v;return f=new G({props:{code:`from transformers import EncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)`}}),{c(){h=a("p"),$=n("Example:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Example:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),v=!0},p:ct,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){E(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function Xp(q){let h,$,_,f,v;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var S=d(_);f=r(S,"Module"),S.forEach(t),v=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,$),e(h,_),e(_,f),e(h,v)},d(i){i&&t(h)}}}function em(q){let h,$,_,f,v;return f=new G({props:{code:`from transformers import TFEncoderDecoderModel, BertTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id)`}}),{c(){h=a("p"),$=n("Examples:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Examples:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),v=!0},p:ct,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){E(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function om(q){let h,$,_,f,v;return f=new G({props:{code:`from transformers import TFEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){h=a("p"),$=n("Example:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Example:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),v=!0},p:ct,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){E(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function tm(q){let h,$,_,f,v;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var S=d(_);f=r(S,"Module"),S.forEach(t),v=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(i,g){u(i,h,g),e(h,$),e(h,_),e(_,f),e(h,v)},d(i){i&&t(h)}}}function nm(q){let h,$,_,f,v;return f=new G({props:{code:`from transformers import FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> summary == <span class="hljs-string">&quot;SAS Alpha Epsilon suspended Sigma Alpha Epsilon members&quot;</span>`}}),{c(){h=a("p"),$=n("Examples:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Examples:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),v=!0},p:ct,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){E(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function rm(q){let h,$,_,f,v;return f=new G({props:{code:`from transformers import FlaxEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){h=a("p"),$=n("Example:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var g=d(h);$=r(g,"Example:"),g.forEach(t),_=p(i),y(f.$$.fragment,i)},m(i,g){u(i,h,g),e(h,$),u(i,_,g),k(f,i,g),v=!0},p:ct,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){E(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),T(f,i)}}}function am(q){let h,$,_,f,v,i,g,S,ga,cr,te,we,en,to,_a,on,va,lr,Ee,ba,lt,ya,ka,pr,Te,wa,no,Ea,Ta,mr,$e,$a,pt,Ma,Da,hr,Z,ja,mt,xa,qa,ro,za,Pa,fr,ne,Me,tn,ao,Fa,so,Aa,nn,Ca,Sa,ur,U,ht,Na,Ia,ft,La,Ba,rn,Oa,Ra,gr,io,_r,re,De,an,co,Wa,lo,Va,sn,Ga,Ua,vr,M,ut,Ha,Za,dn,Ya,Ja,cn,Ka,Qa,ln,Xa,es,pn,os,ts,gt,ns,rs,je,as,mn,ss,ds,hn,is,cs,_t,ls,ps,br,po,yr,ae,xe,fn,mo,ms,ho,hs,un,fs,us,kr,I,gs,gn,_s,vs,vt,bs,ys,_n,ks,ws,wr,qe,Es,vn,Ts,$s,Er,fo,Tr,se,ze,bn,uo,Ms,go,Ds,yn,js,xs,$r,de,kn,qs,zs,wn,Ps,Fs,Mr,_o,Dr,ie,Pe,En,vo,As,Tn,Cs,jr,N,Ss,$n,Ns,Is,Mn,Ls,Bs,Dn,Os,Rs,jn,Ws,Vs,xr,bo,qr,Fe,Gs,yo,Us,Hs,zr,Y,Zs,ko,Ys,Js,wo,Ks,Qs,Pr,ce,Ae,xn,Eo,Xs,qn,ed,Fr,C,To,od,Ce,bt,td,nd,yt,rd,ad,sd,le,dd,kt,id,cd,wt,ld,pd,md,Se,hd,Ne,$o,fd,Mo,ud,Et,gd,_d,vd,Ie,Do,bd,pe,yd,zn,kd,wd,Pn,Ed,Td,Ar,me,Le,Fn,jo,$d,An,Md,Cr,D,xo,Dd,he,jd,Tt,xd,qd,$t,zd,Pd,Fd,qo,Ad,zo,Cd,Sd,Nd,Cn,Id,Ld,Po,Bd,Mt,Od,Rd,Wd,Fo,Vd,Ao,Gd,Ud,Hd,J,Dt,Zd,Yd,Sn,Jd,Kd,Nn,Qd,Xd,ei,L,Co,oi,fe,ti,jt,ni,ri,In,ai,si,di,Be,ii,Oe,ci,B,So,li,Ln,pi,mi,ue,hi,Bn,fi,ui,On,gi,_i,vi,Re,Sr,ge,We,Rn,No,bi,Wn,yi,Nr,j,Io,ki,_e,wi,xt,Ei,Ti,qt,$i,Mi,Di,Lo,ji,Bo,xi,qi,zi,Vn,Pi,Fi,Oo,Ai,zt,Ci,Si,Ni,Ro,Ii,Wo,Li,Bi,Oi,K,Pt,Ri,Wi,Ft,Vi,Gi,At,Ui,Hi,Zi,O,Vo,Yi,ve,Ji,Ct,Ki,Qi,Gn,Xi,ec,oc,Ve,tc,Ge,nc,Q,Go,rc,Un,ac,sc,Ue,Ir,be,He,Hn,Uo,dc,Zn,ic,Lr,x,Ho,cc,ye,lc,St,pc,mc,Nt,hc,fc,uc,Zo,gc,Yo,_c,vc,bc,Yn,yc,kc,Jo,wc,It,Ec,Tc,$c,Ko,Mc,Qo,Dc,jc,xc,X,Lt,qc,zc,Jn,Pc,Fc,Kn,Ac,Cc,Sc,R,Xo,Nc,ke,Ic,Bt,Lc,Bc,Qn,Oc,Rc,Wc,Ze,Vc,Ye,Gc,ee,et,Uc,Xn,Hc,Zc,Je,Br;return i=new H({}),to=new H({}),ao=new H({}),io=new G({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

config_encoder = BertConfig()
config_decoder = BertConfig()

config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
model = EncoderDecoderModel(config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, EncoderDecoderConfig, EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = BertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel(config=config)`}}),co=new H({}),po=new G({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, BertTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),mo=new H({}),fo=new G({props:{code:`from transformers import AutoTokenizer, EncoderDecoderModel

# load a fine-tuned seq2seq model and corresponding tokenizer
model = EncoderDecoderModel.from_pretrained("patrickvonplaten/bert2bert_cnn_daily_mail")
tokenizer = AutoTokenizer.from_pretrained("patrickvonplaten/bert2bert_cnn_daily_mail")

# let's perform inference on a long piece of text
ARTICLE_TO_SUMMARIZE = (
    "PG&E stated it scheduled the blackouts in response to forecasts for high winds "
    "amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
    "scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
input_ids = tokenizer(ARTICLE_TO_SUMMARIZE, return_tensors="pt").input_ids

# autoregressively generate summary (uses greedy decoding by default)
generated_ids = model.generate(input_ids)
generated_text = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
print(generated_text)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned seq2seq model and corresponding tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2bert_cnn_daily_mail&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2bert_cnn_daily_mail&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s perform inference on a long piece of text</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(ARTICLE_TO_SUMMARIZE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># autoregressively generate summary (uses greedy decoding by default)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(generated_text)
nearly <span class="hljs-number">800</span> thousand customers were affected by the shutoffs. the aim <span class="hljs-keyword">is</span> to reduce the risk of wildfires. nearly <span class="hljs-number">800</span>, <span class="hljs-number">000</span> customers were expected to be affected by high winds amid dry conditions. pg &amp; e said it scheduled the blackouts to last through at least midday tomorrow.`}}),uo=new H({}),_o=new G({props:{code:`# a workaround to load from pytorch checkpoint
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
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config = _model.config`}}),vo=new H({}),bo=new G({props:{code:`from transformers import BertTokenizer, EncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids=input_ids, labels=labels).loss`}}),Eo=new H({}),To=new V({props:{name:"class transformers.EncoderDecoderConfig",anchor:"transformers.EncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L26"}}),Se=new it({props:{anchor:"transformers.EncoderDecoderConfig.example",$$slots:{default:[Yp]},$$scope:{ctx:q}}}),$o=new V({props:{name:"from_encoder_decoder_configs",anchor:"transformers.EncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L91",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a></p>
`}}),Do=new V({props:{name:"to_dict",anchor:"transformers.EncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L108",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),jo=new H({}),xo=new V({props:{name:"class transformers.EncoderDecoderModel",anchor:"transformers.EncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L165"}}),Co=new V({props:{name:"forward",anchor:"transformers.EncoderDecoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.EncoderDecoderModel.forward.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014; Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L430",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new Jc({props:{$$slots:{default:[Jp]},$$scope:{ctx:q}}}),Oe=new it({props:{anchor:"transformers.EncoderDecoderModel.forward.example",$$slots:{default:[Kp]},$$scope:{ctx:q}}}),So=new V({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L280"}}),Re=new it({props:{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Qp]},$$scope:{ctx:q}}}),No=new H({}),Io=new V({props:{name:"class transformers.TFEncoderDecoderModel",anchor:"transformers.TFEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L186"}}),Vo=new V({props:{name:"call",anchor:"transformers.TFEncoderDecoderModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFEncoderDecoderModel.call.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014; Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as \`**decoder_kwargs&#x201C; for the decoder forward function.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L495",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ve=new Jc({props:{$$slots:{default:[Xp]},$$scope:{ctx:q}}}),Ge=new it({props:{anchor:"transformers.TFEncoderDecoderModel.call.example",$$slots:{default:[em]},$$scope:{ctx:q}}}),Go=new V({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch index checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>encoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L332"}}),Ue=new it({props:{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[om]},$$scope:{ctx:q}}}),Uo=new H({}),Ho=new V({props:{name:"class transformers.FlaxEncoderDecoderModel",anchor:"transformers.FlaxEncoderDecoderModel",parameters:[{name:"config",val:": EncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L302"}}),Xo=new V({props:{name:"__call__",anchor:"transformers.FlaxEncoderDecoderModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L628",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ze=new Jc({props:{$$slots:{default:[tm]},$$scope:{ctx:q}}}),Ye=new it({props:{anchor:"transformers.FlaxEncoderDecoderModel.__call__.example",$$slots:{default:[nm]},$$scope:{ctx:q}}}),et=new V({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L760"}}),Je=new it({props:{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[rm]},$$scope:{ctx:q}}}),{c(){h=a("meta"),$=l(),_=a("h1"),f=a("a"),v=a("span"),b(i.$$.fragment),g=l(),S=a("span"),ga=n("Encoder Decoder Models"),cr=l(),te=a("h2"),we=a("a"),en=a("span"),b(to.$$.fragment),_a=l(),on=a("span"),va=n("Overview"),lr=l(),Ee=a("p"),ba=n("The "),lt=a("a"),ya=n("EncoderDecoderModel"),ka=n(` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),pr=l(),Te=a("p"),wa=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),no=a("a"),Ea=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Ta=n(` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),mr=l(),$e=a("p"),$a=n("After such an "),pt=a("a"),Ma=n("EncoderDecoderModel"),Da=n(` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),hr=l(),Z=a("p"),ja=n("An application of this architecture could be to leverage two pretrained "),mt=a("a"),xa=n("BertModel"),qa=n(` as the encoder
and decoder for a summarization model as was shown in: `),ro=a("a"),za=n("Text Summarization with Pretrained Encoders"),Pa=n(" by Yang Liu and Mirella Lapata."),fr=l(),ne=a("h2"),Me=a("a"),tn=a("span"),b(ao.$$.fragment),Fa=l(),so=a("span"),Aa=n("Randomly initializing "),nn=a("code"),Ca=n("EncoderDecoderModel"),Sa=n(" from model configurations."),ur=l(),U=a("p"),ht=a("a"),Na=n("EncoderDecoderModel"),Ia=n(" can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),ft=a("a"),La=n("BertModel"),Ba=n(" configuration for the encoder and the default "),rn=a("code"),Oa=n("BertForCausalLM"),Ra=n(" configuration for the decoder."),gr=l(),b(io.$$.fragment),_r=l(),re=a("h2"),De=a("a"),an=a("span"),b(co.$$.fragment),Wa=l(),lo=a("span"),Va=n("Initialising "),sn=a("code"),Ga=n("EncoderDecoderModel"),Ua=n(" from a pretrained encoder and a pretrained decoder."),vr=l(),M=a("p"),ut=a("a"),Ha=n("EncoderDecoderModel"),Za=n(" can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained auto-encoding model, "),dn=a("em"),Ya=n("e.g."),Ja=n(" BERT, can serve as the encoder and both pretrained auto-encoding models, "),cn=a("em"),Ka=n("e.g."),Qa=n(" BERT, pretrained causal language models, "),ln=a("em"),Xa=n("e.g."),es=n(" GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),pn=a("em"),os=n("e.g."),ts=n(` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),gt=a("a"),ns=n("EncoderDecoderModel"),rs=n(" from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),je=a("a"),as=n("the "),mn=a("em"),ss=n("Warm-starting-encoder-decoder blog post"),ds=n(`.
To do so, the `),hn=a("code"),is=n("EncoderDecoderModel"),cs=n(" class provides a "),_t=a("a"),ls=n("EncoderDecoderModel.from_encoder_decoder_pretrained()"),ps=n(" method."),br=l(),b(po.$$.fragment),yr=l(),ae=a("h2"),xe=a("a"),fn=a("span"),b(mo.$$.fragment),ms=l(),ho=a("span"),hs=n("Loading an existing "),un=a("code"),fs=n("EncoderDecoderModel"),us=n(" checkpoint and perform inference."),kr=l(),I=a("p"),gs=n("To load fine-tuned checkpoints of the "),gn=a("code"),_s=n("EncoderDecoderModel"),vs=n(" class, "),vt=a("a"),bs=n("EncoderDecoderModel"),ys=n(" provides the "),_n=a("code"),ks=n("from_pretrained(...)"),ws=n(" method just like any other model architecture in Transformers."),wr=l(),qe=a("p"),Es=n("To perform inference, one uses the "),vn=a("code"),Ts=n("generate"),$s=n(" method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),Er=l(),b(fo.$$.fragment),Tr=l(),se=a("h2"),ze=a("a"),bn=a("span"),b(uo.$$.fragment),Ms=l(),go=a("span"),Ds=n("Loading a PyTorch checkpoint into "),yn=a("code"),js=n("TFEncoderDecoderModel"),xs=n("."),$r=l(),de=a("p"),kn=a("code"),qs=n("TFEncoderDecoderModel.from_pretrained()"),zs=n(` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),wn=a("code"),Ps=n("from_pt=True"),Fs=n(` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Mr=l(),b(_o.$$.fragment),Dr=l(),ie=a("h2"),Pe=a("a"),En=a("span"),b(vo.$$.fragment),As=l(),Tn=a("span"),Cs=n("Training"),jr=l(),N=a("p"),Ss=n(`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),$n=a("code"),Ns=n("input_ids"),Is=n(` (which are the
`),Mn=a("code"),Ls=n("input_ids"),Bs=n(" of the encoded input sequence) and "),Dn=a("code"),Os=n("labels"),Rs=n(" (which are the "),jn=a("code"),Ws=n("input_ids"),Vs=n(` of the encoded
target sequence).`),xr=l(),b(bo.$$.fragment),qr=l(),Fe=a("p"),Gs=n("Detailed "),yo=a("a"),Us=n("colab"),Hs=n(" for training."),zr=l(),Y=a("p"),Zs=n("This model was contributed by "),ko=a("a"),Ys=n("thomwolf"),Js=n(`. This model\u2019s TensorFlow and Flax versions
were contributed by `),wo=a("a"),Ks=n("ydshieh"),Qs=n("."),Pr=l(),ce=a("h2"),Ae=a("a"),xn=a("span"),b(Eo.$$.fragment),Xs=l(),qn=a("span"),ed=n("EncoderDecoderConfig"),Fr=l(),C=a("div"),b(To.$$.fragment),od=l(),Ce=a("p"),bt=a("a"),td=n("EncoderDecoderConfig"),nd=n(" is the configuration class to store the configuration of a "),yt=a("a"),rd=n("EncoderDecoderModel"),ad=n(`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),sd=l(),le=a("p"),dd=n("Configuration objects inherit from "),kt=a("a"),id=n("PretrainedConfig"),cd=n(` and can be used to control the model outputs. Read the
documentation from `),wt=a("a"),ld=n("PretrainedConfig"),pd=n(" for more information."),md=l(),b(Se.$$.fragment),hd=l(),Ne=a("div"),b($o.$$.fragment),fd=l(),Mo=a("p"),ud=n("Instantiate a "),Et=a("a"),gd=n("EncoderDecoderConfig"),_d=n(` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),vd=l(),Ie=a("div"),b(Do.$$.fragment),bd=l(),pe=a("p"),yd=n("Serializes this instance to a Python dictionary. Override the default "),zn=a("em"),kd=n("to_dict()"),wd=n(" from "),Pn=a("em"),Ed=n("PretrainedConfig"),Td=n("."),Ar=l(),me=a("h2"),Le=a("a"),Fn=a("span"),b(jo.$$.fragment),$d=l(),An=a("span"),Md=n("EncoderDecoderModel"),Cr=l(),D=a("div"),b(xo.$$.fragment),Dd=l(),he=a("p"),jd=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Tt=a("a"),xd=n("from_pretrained()"),qd=n(" function and the decoder is loaded via "),$t=a("a"),zd=n("from_pretrained()"),Pd=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Fd=l(),qo=a("p"),Ad=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),zo=a("a"),Cd=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Sd=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Nd=l(),Cn=a("p"),Id=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Ld=l(),Po=a("p"),Bd=n("This model inherits from "),Mt=a("a"),Od=n("PreTrainedModel"),Rd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wd=l(),Fo=a("p"),Vd=n("This model is also a PyTorch "),Ao=a("a"),Gd=n("torch.nn.Module"),Ud=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hd=l(),J=a("p"),Dt=a("a"),Zd=n("EncoderDecoderModel"),Yd=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),Sn=a("em"),Jd=n("~transformers.AutoModel.from_pretrained"),Kd=n(` class method for the encoder and
:meth`),Nn=a("em"),Qd=n("~transformers.AutoModelForCausalLM.from_pretrained"),Xd=n(" class method for the decoder."),ei=l(),L=a("div"),b(Co.$$.fragment),oi=l(),fe=a("p"),ti=n("The "),jt=a("a"),ni=n("EncoderDecoderModel"),ri=n(" forward method, overrides the "),In=a("code"),ai=n("__call__"),si=n(" special method."),di=l(),b(Be.$$.fragment),ii=l(),b(Oe.$$.fragment),ci=l(),B=a("div"),b(So.$$.fragment),li=l(),Ln=a("p"),pi=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),mi=l(),ue=a("p"),hi=n("The model is set in evaluation mode by default using "),Bn=a("code"),fi=n("model.eval()"),ui=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),On=a("code"),gi=n("model.train()"),_i=n("."),vi=l(),b(Re.$$.fragment),Sr=l(),ge=a("h2"),We=a("a"),Rn=a("span"),b(No.$$.fragment),bi=l(),Wn=a("span"),yi=n("TFEncoderDecoderModel"),Nr=l(),j=a("div"),b(Io.$$.fragment),ki=l(),_e=a("p"),wi=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),xt=a("a"),Ei=n("from_pretrained()"),Ti=n(" function and the decoder is loaded via "),qt=a("a"),$i=n("from_pretrained()"),Mi=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Di=l(),Lo=a("p"),ji=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Bo=a("a"),xi=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),qi=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),zi=l(),Vn=a("p"),Pi=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Fi=l(),Oo=a("p"),Ai=n("This model inherits from "),zt=a("a"),Ci=n("TFPreTrainedModel"),Si=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ni=l(),Ro=a("p"),Ii=n("This model is also a "),Wo=a("a"),Li=n("tf.keras.Model"),Bi=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Oi=l(),K=a("p"),Pt=a("a"),Ri=n("TFEncoderDecoderModel"),Wi=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),Ft=a("a"),Vi=n("from_pretrained()"),Gi=n(" class method for the encoder and "),At=a("a"),Ui=n("from_pretrained()"),Hi=n(` class
method for the decoder.`),Zi=l(),O=a("div"),b(Vo.$$.fragment),Yi=l(),ve=a("p"),Ji=n("The "),Ct=a("a"),Ki=n("TFEncoderDecoderModel"),Qi=n(" forward method, overrides the "),Gn=a("code"),Xi=n("__call__"),ec=n(" special method."),oc=l(),b(Ve.$$.fragment),tc=l(),b(Ge.$$.fragment),nc=l(),Q=a("div"),b(Go.$$.fragment),rc=l(),Un=a("p"),ac=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),sc=l(),b(Ue.$$.fragment),Ir=l(),be=a("h2"),He=a("a"),Hn=a("span"),b(Uo.$$.fragment),dc=l(),Zn=a("span"),ic=n("FlaxEncoderDecoderModel"),Lr=l(),x=a("div"),b(Ho.$$.fragment),cc=l(),ye=a("p"),lc=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),St=a("a"),pc=n("from_pretrained()"),mc=n(" function and the decoder is loaded via "),Nt=a("a"),hc=n("from_pretrained()"),fc=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),uc=l(),Zo=a("p"),gc=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Yo=a("a"),_c=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),vc=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),bc=l(),Yn=a("p"),yc=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),kc=l(),Jo=a("p"),wc=n("This model inherits from "),It=a("a"),Ec=n("FlaxPreTrainedModel"),Tc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$c=l(),Ko=a("p"),Mc=n(`This model is also a Flax Linen
`),Qo=a("a"),Dc=n("flax.nn.Module"),jc=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),xc=l(),X=a("p"),Lt=a("a"),qc=n("FlaxEncoderDecoderModel"),zc=n(` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),Jn=a("em"),Pc=n("~transformers.FlaxAutoModel.from_pretrained"),Fc=n(` class method for the
encoder and :meth`),Kn=a("em"),Ac=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Cc=n(" class method for the decoder."),Sc=l(),R=a("div"),b(Xo.$$.fragment),Nc=l(),ke=a("p"),Ic=n("The "),Bt=a("a"),Lc=n("FlaxEncoderDecoderModel"),Bc=n(" forward method, overrides the "),Qn=a("code"),Oc=n("__call__"),Rc=n(" special method."),Wc=l(),b(Ze.$$.fragment),Vc=l(),b(Ye.$$.fragment),Gc=l(),ee=a("div"),b(et.$$.fragment),Uc=l(),Xn=a("p"),Hc=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Zc=l(),b(Je.$$.fragment),this.h()},l(o){const m=Hp('[data-svelte="svelte-1phssyn"]',document.head);h=s(m,"META",{name:!0,content:!0}),m.forEach(t),$=p(o),_=s(o,"H1",{class:!0});var ot=d(_);f=s(ot,"A",{id:!0,class:!0,href:!0});var er=d(f);v=s(er,"SPAN",{});var or=d(v);y(i.$$.fragment,or),or.forEach(t),er.forEach(t),g=p(ot),S=s(ot,"SPAN",{});var tr=d(S);ga=r(tr,"Encoder Decoder Models"),tr.forEach(t),ot.forEach(t),cr=p(o),te=s(o,"H2",{class:!0});var tt=d(te);we=s(tt,"A",{id:!0,class:!0,href:!0});var nr=d(we);en=s(nr,"SPAN",{});var rr=d(en);y(to.$$.fragment,rr),rr.forEach(t),nr.forEach(t),_a=p(tt),on=s(tt,"SPAN",{});var ar=d(on);va=r(ar,"Overview"),ar.forEach(t),tt.forEach(t),lr=p(o),Ee=s(o,"P",{});var nt=d(Ee);ba=r(nt,"The "),lt=s(nt,"A",{href:!0});var sr=d(lt);ya=r(sr,"EncoderDecoderModel"),sr.forEach(t),ka=r(nt,` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),nt.forEach(t),pr=p(o),Te=s(o,"P",{});var Or=d(Te);wa=r(Or,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),no=s(Or,"A",{href:!0,rel:!0});var Kc=d(no);Ea=r(Kc,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Kc.forEach(t),Ta=r(Or,` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),Or.forEach(t),mr=p(o),$e=s(o,"P",{});var Rr=d($e);$a=r(Rr,"After such an "),pt=s(Rr,"A",{href:!0});var Qc=d(pt);Ma=r(Qc,"EncoderDecoderModel"),Qc.forEach(t),Da=r(Rr,` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),Rr.forEach(t),hr=p(o),Z=s(o,"P",{});var Ot=d(Z);ja=r(Ot,"An application of this architecture could be to leverage two pretrained "),mt=s(Ot,"A",{href:!0});var Xc=d(mt);xa=r(Xc,"BertModel"),Xc.forEach(t),qa=r(Ot,` as the encoder
and decoder for a summarization model as was shown in: `),ro=s(Ot,"A",{href:!0,rel:!0});var el=d(ro);za=r(el,"Text Summarization with Pretrained Encoders"),el.forEach(t),Pa=r(Ot," by Yang Liu and Mirella Lapata."),Ot.forEach(t),fr=p(o),ne=s(o,"H2",{class:!0});var Wr=d(ne);Me=s(Wr,"A",{id:!0,class:!0,href:!0});var ol=d(Me);tn=s(ol,"SPAN",{});var tl=d(tn);y(ao.$$.fragment,tl),tl.forEach(t),ol.forEach(t),Fa=p(Wr),so=s(Wr,"SPAN",{});var Vr=d(so);Aa=r(Vr,"Randomly initializing "),nn=s(Vr,"CODE",{});var nl=d(nn);Ca=r(nl,"EncoderDecoderModel"),nl.forEach(t),Sa=r(Vr," from model configurations."),Vr.forEach(t),Wr.forEach(t),ur=p(o),U=s(o,"P",{});var rt=d(U);ht=s(rt,"A",{href:!0});var rl=d(ht);Na=r(rl,"EncoderDecoderModel"),rl.forEach(t),Ia=r(rt," can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),ft=s(rt,"A",{href:!0});var al=d(ft);La=r(al,"BertModel"),al.forEach(t),Ba=r(rt," configuration for the encoder and the default "),rn=s(rt,"CODE",{});var sl=d(rn);Oa=r(sl,"BertForCausalLM"),sl.forEach(t),Ra=r(rt," configuration for the decoder."),rt.forEach(t),gr=p(o),y(io.$$.fragment,o),_r=p(o),re=s(o,"H2",{class:!0});var Gr=d(re);De=s(Gr,"A",{id:!0,class:!0,href:!0});var dl=d(De);an=s(dl,"SPAN",{});var il=d(an);y(co.$$.fragment,il),il.forEach(t),dl.forEach(t),Wa=p(Gr),lo=s(Gr,"SPAN",{});var Ur=d(lo);Va=r(Ur,"Initialising "),sn=s(Ur,"CODE",{});var cl=d(sn);Ga=r(cl,"EncoderDecoderModel"),cl.forEach(t),Ua=r(Ur," from a pretrained encoder and a pretrained decoder."),Ur.forEach(t),Gr.forEach(t),vr=p(o),M=s(o,"P",{});var z=d(M);ut=s(z,"A",{href:!0});var ll=d(ut);Ha=r(ll,"EncoderDecoderModel"),ll.forEach(t),Za=r(z," can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained auto-encoding model, "),dn=s(z,"EM",{});var pl=d(dn);Ya=r(pl,"e.g."),pl.forEach(t),Ja=r(z," BERT, can serve as the encoder and both pretrained auto-encoding models, "),cn=s(z,"EM",{});var ml=d(cn);Ka=r(ml,"e.g."),ml.forEach(t),Qa=r(z," BERT, pretrained causal language models, "),ln=s(z,"EM",{});var hl=d(ln);Xa=r(hl,"e.g."),hl.forEach(t),es=r(z," GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),pn=s(z,"EM",{});var fl=d(pn);os=r(fl,"e.g."),fl.forEach(t),ts=r(z,` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),gt=s(z,"A",{href:!0});var ul=d(gt);ns=r(ul,"EncoderDecoderModel"),ul.forEach(t),rs=r(z," from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),je=s(z,"A",{href:!0,rel:!0});var Yc=d(je);as=r(Yc,"the "),mn=s(Yc,"EM",{});var gl=d(mn);ss=r(gl,"Warm-starting-encoder-decoder blog post"),gl.forEach(t),Yc.forEach(t),ds=r(z,`.
To do so, the `),hn=s(z,"CODE",{});var _l=d(hn);is=r(_l,"EncoderDecoderModel"),_l.forEach(t),cs=r(z," class provides a "),_t=s(z,"A",{href:!0});var vl=d(_t);ls=r(vl,"EncoderDecoderModel.from_encoder_decoder_pretrained()"),vl.forEach(t),ps=r(z," method."),z.forEach(t),br=p(o),y(po.$$.fragment,o),yr=p(o),ae=s(o,"H2",{class:!0});var Hr=d(ae);xe=s(Hr,"A",{id:!0,class:!0,href:!0});var bl=d(xe);fn=s(bl,"SPAN",{});var yl=d(fn);y(mo.$$.fragment,yl),yl.forEach(t),bl.forEach(t),ms=p(Hr),ho=s(Hr,"SPAN",{});var Zr=d(ho);hs=r(Zr,"Loading an existing "),un=s(Zr,"CODE",{});var kl=d(un);fs=r(kl,"EncoderDecoderModel"),kl.forEach(t),us=r(Zr," checkpoint and perform inference."),Zr.forEach(t),Hr.forEach(t),kr=p(o),I=s(o,"P",{});var Ke=d(I);gs=r(Ke,"To load fine-tuned checkpoints of the "),gn=s(Ke,"CODE",{});var wl=d(gn);_s=r(wl,"EncoderDecoderModel"),wl.forEach(t),vs=r(Ke," class, "),vt=s(Ke,"A",{href:!0});var El=d(vt);bs=r(El,"EncoderDecoderModel"),El.forEach(t),ys=r(Ke," provides the "),_n=s(Ke,"CODE",{});var Tl=d(_n);ks=r(Tl,"from_pretrained(...)"),Tl.forEach(t),ws=r(Ke," method just like any other model architecture in Transformers."),Ke.forEach(t),wr=p(o),qe=s(o,"P",{});var Yr=d(qe);Es=r(Yr,"To perform inference, one uses the "),vn=s(Yr,"CODE",{});var $l=d(vn);Ts=r($l,"generate"),$l.forEach(t),$s=r(Yr," method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),Yr.forEach(t),Er=p(o),y(fo.$$.fragment,o),Tr=p(o),se=s(o,"H2",{class:!0});var Jr=d(se);ze=s(Jr,"A",{id:!0,class:!0,href:!0});var Ml=d(ze);bn=s(Ml,"SPAN",{});var Dl=d(bn);y(uo.$$.fragment,Dl),Dl.forEach(t),Ml.forEach(t),Ms=p(Jr),go=s(Jr,"SPAN",{});var Kr=d(go);Ds=r(Kr,"Loading a PyTorch checkpoint into "),yn=s(Kr,"CODE",{});var jl=d(yn);js=r(jl,"TFEncoderDecoderModel"),jl.forEach(t),xs=r(Kr,"."),Kr.forEach(t),Jr.forEach(t),$r=p(o),de=s(o,"P",{});var dr=d(de);kn=s(dr,"CODE",{});var xl=d(kn);qs=r(xl,"TFEncoderDecoderModel.from_pretrained()"),xl.forEach(t),zs=r(dr,` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),wn=s(dr,"CODE",{});var ql=d(wn);Ps=r(ql,"from_pt=True"),ql.forEach(t),Fs=r(dr,` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),dr.forEach(t),Mr=p(o),y(_o.$$.fragment,o),Dr=p(o),ie=s(o,"H2",{class:!0});var Qr=d(ie);Pe=s(Qr,"A",{id:!0,class:!0,href:!0});var zl=d(Pe);En=s(zl,"SPAN",{});var Pl=d(En);y(vo.$$.fragment,Pl),Pl.forEach(t),zl.forEach(t),As=p(Qr),Tn=s(Qr,"SPAN",{});var Fl=d(Tn);Cs=r(Fl,"Training"),Fl.forEach(t),Qr.forEach(t),jr=p(o),N=s(o,"P",{});var oe=d(N);Ss=r(oe,`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),$n=s(oe,"CODE",{});var Al=d($n);Ns=r(Al,"input_ids"),Al.forEach(t),Is=r(oe,` (which are the
`),Mn=s(oe,"CODE",{});var Cl=d(Mn);Ls=r(Cl,"input_ids"),Cl.forEach(t),Bs=r(oe," of the encoded input sequence) and "),Dn=s(oe,"CODE",{});var Sl=d(Dn);Os=r(Sl,"labels"),Sl.forEach(t),Rs=r(oe," (which are the "),jn=s(oe,"CODE",{});var Nl=d(jn);Ws=r(Nl,"input_ids"),Nl.forEach(t),Vs=r(oe,` of the encoded
target sequence).`),oe.forEach(t),xr=p(o),y(bo.$$.fragment,o),qr=p(o),Fe=s(o,"P",{});var Xr=d(Fe);Gs=r(Xr,"Detailed "),yo=s(Xr,"A",{href:!0,rel:!0});var Il=d(yo);Us=r(Il,"colab"),Il.forEach(t),Hs=r(Xr," for training."),Xr.forEach(t),zr=p(o),Y=s(o,"P",{});var Rt=d(Y);Zs=r(Rt,"This model was contributed by "),ko=s(Rt,"A",{href:!0,rel:!0});var Ll=d(ko);Ys=r(Ll,"thomwolf"),Ll.forEach(t),Js=r(Rt,`. This model\u2019s TensorFlow and Flax versions
were contributed by `),wo=s(Rt,"A",{href:!0,rel:!0});var Bl=d(wo);Ks=r(Bl,"ydshieh"),Bl.forEach(t),Qs=r(Rt,"."),Rt.forEach(t),Pr=p(o),ce=s(o,"H2",{class:!0});var ea=d(ce);Ae=s(ea,"A",{id:!0,class:!0,href:!0});var Ol=d(Ae);xn=s(Ol,"SPAN",{});var Rl=d(xn);y(Eo.$$.fragment,Rl),Rl.forEach(t),Ol.forEach(t),Xs=p(ea),qn=s(ea,"SPAN",{});var Wl=d(qn);ed=r(Wl,"EncoderDecoderConfig"),Wl.forEach(t),ea.forEach(t),Fr=p(o),C=s(o,"DIV",{class:!0});var W=d(C);y(To.$$.fragment,W),od=p(W),Ce=s(W,"P",{});var ir=d(Ce);bt=s(ir,"A",{href:!0});var Vl=d(bt);td=r(Vl,"EncoderDecoderConfig"),Vl.forEach(t),nd=r(ir," is the configuration class to store the configuration of a "),yt=s(ir,"A",{href:!0});var Gl=d(yt);rd=r(Gl,"EncoderDecoderModel"),Gl.forEach(t),ad=r(ir,`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),ir.forEach(t),sd=p(W),le=s(W,"P",{});var Wt=d(le);dd=r(Wt,"Configuration objects inherit from "),kt=s(Wt,"A",{href:!0});var Ul=d(kt);id=r(Ul,"PretrainedConfig"),Ul.forEach(t),cd=r(Wt,` and can be used to control the model outputs. Read the
documentation from `),wt=s(Wt,"A",{href:!0});var Hl=d(wt);ld=r(Hl,"PretrainedConfig"),Hl.forEach(t),pd=r(Wt," for more information."),Wt.forEach(t),md=p(W),y(Se.$$.fragment,W),hd=p(W),Ne=s(W,"DIV",{class:!0});var oa=d(Ne);y($o.$$.fragment,oa),fd=p(oa),Mo=s(oa,"P",{});var ta=d(Mo);ud=r(ta,"Instantiate a "),Et=s(ta,"A",{href:!0});var Zl=d(Et);gd=r(Zl,"EncoderDecoderConfig"),Zl.forEach(t),_d=r(ta,` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),ta.forEach(t),oa.forEach(t),vd=p(W),Ie=s(W,"DIV",{class:!0});var na=d(Ie);y(Do.$$.fragment,na),bd=p(na),pe=s(na,"P",{});var Vt=d(pe);yd=r(Vt,"Serializes this instance to a Python dictionary. Override the default "),zn=s(Vt,"EM",{});var Yl=d(zn);kd=r(Yl,"to_dict()"),Yl.forEach(t),wd=r(Vt," from "),Pn=s(Vt,"EM",{});var Jl=d(Pn);Ed=r(Jl,"PretrainedConfig"),Jl.forEach(t),Td=r(Vt,"."),Vt.forEach(t),na.forEach(t),W.forEach(t),Ar=p(o),me=s(o,"H2",{class:!0});var ra=d(me);Le=s(ra,"A",{id:!0,class:!0,href:!0});var Kl=d(Le);Fn=s(Kl,"SPAN",{});var Ql=d(Fn);y(jo.$$.fragment,Ql),Ql.forEach(t),Kl.forEach(t),$d=p(ra),An=s(ra,"SPAN",{});var Xl=d(An);Md=r(Xl,"EncoderDecoderModel"),Xl.forEach(t),ra.forEach(t),Cr=p(o),D=s(o,"DIV",{class:!0});var P=d(D);y(xo.$$.fragment,P),Dd=p(P),he=s(P,"P",{});var Gt=d(he);jd=r(Gt,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Tt=s(Gt,"A",{href:!0});var ep=d(Tt);xd=r(ep,"from_pretrained()"),ep.forEach(t),qd=r(Gt," function and the decoder is loaded via "),$t=s(Gt,"A",{href:!0});var op=d($t);zd=r(op,"from_pretrained()"),op.forEach(t),Pd=r(Gt,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Gt.forEach(t),Fd=p(P),qo=s(P,"P",{});var aa=d(qo);Ad=r(aa,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),zo=s(aa,"A",{href:!0,rel:!0});var tp=d(zo);Cd=r(tp,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),tp.forEach(t),Sd=r(aa,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),aa.forEach(t),Nd=p(P),Cn=s(P,"P",{});var np=d(Cn);Id=r(np,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),np.forEach(t),Ld=p(P),Po=s(P,"P",{});var sa=d(Po);Bd=r(sa,"This model inherits from "),Mt=s(sa,"A",{href:!0});var rp=d(Mt);Od=r(rp,"PreTrainedModel"),rp.forEach(t),Rd=r(sa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sa.forEach(t),Wd=p(P),Fo=s(P,"P",{});var da=d(Fo);Vd=r(da,"This model is also a PyTorch "),Ao=s(da,"A",{href:!0,rel:!0});var ap=d(Ao);Gd=r(ap,"torch.nn.Module"),ap.forEach(t),Ud=r(da,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),da.forEach(t),Hd=p(P),J=s(P,"P",{});var at=d(J);Dt=s(at,"A",{href:!0});var sp=d(Dt);Zd=r(sp,"EncoderDecoderModel"),sp.forEach(t),Yd=r(at,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),Sn=s(at,"EM",{});var dp=d(Sn);Jd=r(dp,"~transformers.AutoModel.from_pretrained"),dp.forEach(t),Kd=r(at,` class method for the encoder and
:meth`),Nn=s(at,"EM",{});var ip=d(Nn);Qd=r(ip,"~transformers.AutoModelForCausalLM.from_pretrained"),ip.forEach(t),Xd=r(at," class method for the decoder."),at.forEach(t),ei=p(P),L=s(P,"DIV",{class:!0});var Qe=d(L);y(Co.$$.fragment,Qe),oi=p(Qe),fe=s(Qe,"P",{});var Ut=d(fe);ti=r(Ut,"The "),jt=s(Ut,"A",{href:!0});var cp=d(jt);ni=r(cp,"EncoderDecoderModel"),cp.forEach(t),ri=r(Ut," forward method, overrides the "),In=s(Ut,"CODE",{});var lp=d(In);ai=r(lp,"__call__"),lp.forEach(t),si=r(Ut," special method."),Ut.forEach(t),di=p(Qe),y(Be.$$.fragment,Qe),ii=p(Qe),y(Oe.$$.fragment,Qe),Qe.forEach(t),ci=p(P),B=s(P,"DIV",{class:!0});var Xe=d(B);y(So.$$.fragment,Xe),li=p(Xe),Ln=s(Xe,"P",{});var pp=d(Ln);pi=r(pp,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),pp.forEach(t),mi=p(Xe),ue=s(Xe,"P",{});var Ht=d(ue);hi=r(Ht,"The model is set in evaluation mode by default using "),Bn=s(Ht,"CODE",{});var mp=d(Bn);fi=r(mp,"model.eval()"),mp.forEach(t),ui=r(Ht,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),On=s(Ht,"CODE",{});var hp=d(On);gi=r(hp,"model.train()"),hp.forEach(t),_i=r(Ht,"."),Ht.forEach(t),vi=p(Xe),y(Re.$$.fragment,Xe),Xe.forEach(t),P.forEach(t),Sr=p(o),ge=s(o,"H2",{class:!0});var ia=d(ge);We=s(ia,"A",{id:!0,class:!0,href:!0});var fp=d(We);Rn=s(fp,"SPAN",{});var up=d(Rn);y(No.$$.fragment,up),up.forEach(t),fp.forEach(t),bi=p(ia),Wn=s(ia,"SPAN",{});var gp=d(Wn);yi=r(gp,"TFEncoderDecoderModel"),gp.forEach(t),ia.forEach(t),Nr=p(o),j=s(o,"DIV",{class:!0});var F=d(j);y(Io.$$.fragment,F),ki=p(F),_e=s(F,"P",{});var Zt=d(_e);wi=r(Zt,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),xt=s(Zt,"A",{href:!0});var _p=d(xt);Ei=r(_p,"from_pretrained()"),_p.forEach(t),Ti=r(Zt," function and the decoder is loaded via "),qt=s(Zt,"A",{href:!0});var vp=d(qt);$i=r(vp,"from_pretrained()"),vp.forEach(t),Mi=r(Zt,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Zt.forEach(t),Di=p(F),Lo=s(F,"P",{});var ca=d(Lo);ji=r(ca,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Bo=s(ca,"A",{href:!0,rel:!0});var bp=d(Bo);xi=r(bp,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),bp.forEach(t),qi=r(ca,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ca.forEach(t),zi=p(F),Vn=s(F,"P",{});var yp=d(Vn);Pi=r(yp,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),yp.forEach(t),Fi=p(F),Oo=s(F,"P",{});var la=d(Oo);Ai=r(la,"This model inherits from "),zt=s(la,"A",{href:!0});var kp=d(zt);Ci=r(kp,"TFPreTrainedModel"),kp.forEach(t),Si=r(la,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),la.forEach(t),Ni=p(F),Ro=s(F,"P",{});var pa=d(Ro);Ii=r(pa,"This model is also a "),Wo=s(pa,"A",{href:!0,rel:!0});var wp=d(Wo);Li=r(wp,"tf.keras.Model"),wp.forEach(t),Bi=r(pa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pa.forEach(t),Oi=p(F),K=s(F,"P",{});var st=d(K);Pt=s(st,"A",{href:!0});var Ep=d(Pt);Ri=r(Ep,"TFEncoderDecoderModel"),Ep.forEach(t),Wi=r(st,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),Ft=s(st,"A",{href:!0});var Tp=d(Ft);Vi=r(Tp,"from_pretrained()"),Tp.forEach(t),Gi=r(st," class method for the encoder and "),At=s(st,"A",{href:!0});var $p=d(At);Ui=r($p,"from_pretrained()"),$p.forEach(t),Hi=r(st,` class
method for the decoder.`),st.forEach(t),Zi=p(F),O=s(F,"DIV",{class:!0});var eo=d(O);y(Vo.$$.fragment,eo),Yi=p(eo),ve=s(eo,"P",{});var Yt=d(ve);Ji=r(Yt,"The "),Ct=s(Yt,"A",{href:!0});var Mp=d(Ct);Ki=r(Mp,"TFEncoderDecoderModel"),Mp.forEach(t),Qi=r(Yt," forward method, overrides the "),Gn=s(Yt,"CODE",{});var Dp=d(Gn);Xi=r(Dp,"__call__"),Dp.forEach(t),ec=r(Yt," special method."),Yt.forEach(t),oc=p(eo),y(Ve.$$.fragment,eo),tc=p(eo),y(Ge.$$.fragment,eo),eo.forEach(t),nc=p(F),Q=s(F,"DIV",{class:!0});var Jt=d(Q);y(Go.$$.fragment,Jt),rc=p(Jt),Un=s(Jt,"P",{});var jp=d(Un);ac=r(jp,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),jp.forEach(t),sc=p(Jt),y(Ue.$$.fragment,Jt),Jt.forEach(t),F.forEach(t),Ir=p(o),be=s(o,"H2",{class:!0});var ma=d(be);He=s(ma,"A",{id:!0,class:!0,href:!0});var xp=d(He);Hn=s(xp,"SPAN",{});var qp=d(Hn);y(Uo.$$.fragment,qp),qp.forEach(t),xp.forEach(t),dc=p(ma),Zn=s(ma,"SPAN",{});var zp=d(Zn);ic=r(zp,"FlaxEncoderDecoderModel"),zp.forEach(t),ma.forEach(t),Lr=p(o),x=s(o,"DIV",{class:!0});var A=d(x);y(Ho.$$.fragment,A),cc=p(A),ye=s(A,"P",{});var Kt=d(ye);lc=r(Kt,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),St=s(Kt,"A",{href:!0});var Pp=d(St);pc=r(Pp,"from_pretrained()"),Pp.forEach(t),mc=r(Kt," function and the decoder is loaded via "),Nt=s(Kt,"A",{href:!0});var Fp=d(Nt);hc=r(Fp,"from_pretrained()"),Fp.forEach(t),fc=r(Kt,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Kt.forEach(t),uc=p(A),Zo=s(A,"P",{});var ha=d(Zo);gc=r(ha,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Yo=s(ha,"A",{href:!0,rel:!0});var Ap=d(Yo);_c=r(Ap,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ap.forEach(t),vc=r(ha,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ha.forEach(t),bc=p(A),Yn=s(A,"P",{});var Cp=d(Yn);yc=r(Cp,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Cp.forEach(t),kc=p(A),Jo=s(A,"P",{});var fa=d(Jo);wc=r(fa,"This model inherits from "),It=s(fa,"A",{href:!0});var Sp=d(It);Ec=r(Sp,"FlaxPreTrainedModel"),Sp.forEach(t),Tc=r(fa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fa.forEach(t),$c=p(A),Ko=s(A,"P",{});var ua=d(Ko);Mc=r(ua,`This model is also a Flax Linen
`),Qo=s(ua,"A",{href:!0,rel:!0});var Np=d(Qo);Dc=r(Np,"flax.nn.Module"),Np.forEach(t),jc=r(ua,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ua.forEach(t),xc=p(A),X=s(A,"P",{});var dt=d(X);Lt=s(dt,"A",{href:!0});var Ip=d(Lt);qc=r(Ip,"FlaxEncoderDecoderModel"),Ip.forEach(t),zc=r(dt,` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),Jn=s(dt,"EM",{});var Lp=d(Jn);Pc=r(Lp,"~transformers.FlaxAutoModel.from_pretrained"),Lp.forEach(t),Fc=r(dt,` class method for the
encoder and :meth`),Kn=s(dt,"EM",{});var Bp=d(Kn);Ac=r(Bp,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Bp.forEach(t),Cc=r(dt," class method for the decoder."),dt.forEach(t),Sc=p(A),R=s(A,"DIV",{class:!0});var oo=d(R);y(Xo.$$.fragment,oo),Nc=p(oo),ke=s(oo,"P",{});var Qt=d(ke);Ic=r(Qt,"The "),Bt=s(Qt,"A",{href:!0});var Op=d(Bt);Lc=r(Op,"FlaxEncoderDecoderModel"),Op.forEach(t),Bc=r(Qt," forward method, overrides the "),Qn=s(Qt,"CODE",{});var Rp=d(Qn);Oc=r(Rp,"__call__"),Rp.forEach(t),Rc=r(Qt," special method."),Qt.forEach(t),Wc=p(oo),y(Ze.$$.fragment,oo),Vc=p(oo),y(Ye.$$.fragment,oo),oo.forEach(t),Gc=p(A),ee=s(A,"DIV",{class:!0});var Xt=d(ee);y(et.$$.fragment,Xt),Uc=p(Xt),Xn=s(Xt,"P",{});var Wp=d(Xn);Hc=r(Wp,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Wp.forEach(t),Zc=p(Xt),y(Je.$$.fragment,Xt),Xt.forEach(t),A.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(sm)),c(f,"id","encoder-decoder-models"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#encoder-decoder-models"),c(_,"class","relative group"),c(we,"id","overview"),c(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(we,"href","#overview"),c(te,"class","relative group"),c(lt,"href","/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(no,"href","https://arxiv.org/abs/1907.12461"),c(no,"rel","nofollow"),c(pt,"href","/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(mt,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertModel"),c(ro,"href","https://arxiv.org/abs/1908.08345"),c(ro,"rel","nofollow"),c(Me,"id","randomly-initializing-encoderdecodermodel-from-model-configurations"),c(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Me,"href","#randomly-initializing-encoderdecodermodel-from-model-configurations"),c(ne,"class","relative group"),c(ht,"href","/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(ft,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertModel"),c(De,"id","initialising-encoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),c(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(De,"href","#initialising-encoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),c(re,"class","relative group"),c(ut,"href","/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(gt,"href","/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(je,"href","https://huggingface.co/blog/warm-starting-encoder-decoder"),c(je,"rel","nofollow"),c(_t,"href","/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel.from_encoder_decoder_pretrained"),c(xe,"id","loading-an-existing-encoderdecodermodel-checkpoint-and-perform-inference"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#loading-an-existing-encoderdecodermodel-checkpoint-and-perform-inference"),c(ae,"class","relative group"),c(vt,"href","/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(ze,"id","loading-a-pytorch-checkpoint-into-tfencoderdecodermodel"),c(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ze,"href","#loading-a-pytorch-checkpoint-into-tfencoderdecodermodel"),c(se,"class","relative group"),c(Pe,"id","training"),c(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pe,"href","#training"),c(ie,"class","relative group"),c(yo,"href","https://colab.research.google.com/drive/1WIk2bxglElfZewOHboPFNj8H44_VAyKE?usp=sharing#scrollTo=ZwQIEhKOrJpl"),c(yo,"rel","nofollow"),c(ko,"href","https://github.com/thomwolf"),c(ko,"rel","nofollow"),c(wo,"href","https://github.com/ydshieh"),c(wo,"rel","nofollow"),c(Ae,"id","transformers.EncoderDecoderConfig"),c(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ae,"href","#transformers.EncoderDecoderConfig"),c(ce,"class","relative group"),c(bt,"href","/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),c(yt,"href","/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(kt,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(wt,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Et,"href","/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),c(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Le,"id","transformers.EncoderDecoderModel"),c(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Le,"href","#transformers.EncoderDecoderModel"),c(me,"class","relative group"),c(Tt,"href","/docs/transformers/v4.22.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c($t,"href","/docs/transformers/v4.22.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(zo,"href","https://arxiv.org/abs/1907.12461"),c(zo,"rel","nofollow"),c(Mt,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),c(Ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ao,"rel","nofollow"),c(Dt,"href","/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(jt,"href","/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(We,"id","transformers.TFEncoderDecoderModel"),c(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(We,"href","#transformers.TFEncoderDecoderModel"),c(ge,"class","relative group"),c(xt,"href","/docs/transformers/v4.22.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(qt,"href","/docs/transformers/v4.22.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Bo,"href","https://arxiv.org/abs/1907.12461"),c(Bo,"rel","nofollow"),c(zt,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Wo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Wo,"rel","nofollow"),c(Pt,"href","/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),c(Ft,"href","/docs/transformers/v4.22.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(At,"href","/docs/transformers/v4.22.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Ct,"href","/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(He,"id","transformers.FlaxEncoderDecoderModel"),c(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(He,"href","#transformers.FlaxEncoderDecoderModel"),c(be,"class","relative group"),c(St,"href","/docs/transformers/v4.22.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Nt,"href","/docs/transformers/v4.22.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Yo,"href","https://arxiv.org/abs/1907.12461"),c(Yo,"rel","nofollow"),c(It,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Qo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Qo,"rel","nofollow"),c(Lt,"href","/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),c(Bt,"href","/docs/transformers/v4.22.0/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,h),u(o,$,m),u(o,_,m),e(_,f),e(f,v),k(i,v,null),e(_,g),e(_,S),e(S,ga),u(o,cr,m),u(o,te,m),e(te,we),e(we,en),k(to,en,null),e(te,_a),e(te,on),e(on,va),u(o,lr,m),u(o,Ee,m),e(Ee,ba),e(Ee,lt),e(lt,ya),e(Ee,ka),u(o,pr,m),u(o,Te,m),e(Te,wa),e(Te,no),e(no,Ea),e(Te,Ta),u(o,mr,m),u(o,$e,m),e($e,$a),e($e,pt),e(pt,Ma),e($e,Da),u(o,hr,m),u(o,Z,m),e(Z,ja),e(Z,mt),e(mt,xa),e(Z,qa),e(Z,ro),e(ro,za),e(Z,Pa),u(o,fr,m),u(o,ne,m),e(ne,Me),e(Me,tn),k(ao,tn,null),e(ne,Fa),e(ne,so),e(so,Aa),e(so,nn),e(nn,Ca),e(so,Sa),u(o,ur,m),u(o,U,m),e(U,ht),e(ht,Na),e(U,Ia),e(U,ft),e(ft,La),e(U,Ba),e(U,rn),e(rn,Oa),e(U,Ra),u(o,gr,m),k(io,o,m),u(o,_r,m),u(o,re,m),e(re,De),e(De,an),k(co,an,null),e(re,Wa),e(re,lo),e(lo,Va),e(lo,sn),e(sn,Ga),e(lo,Ua),u(o,vr,m),u(o,M,m),e(M,ut),e(ut,Ha),e(M,Za),e(M,dn),e(dn,Ya),e(M,Ja),e(M,cn),e(cn,Ka),e(M,Qa),e(M,ln),e(ln,Xa),e(M,es),e(M,pn),e(pn,os),e(M,ts),e(M,gt),e(gt,ns),e(M,rs),e(M,je),e(je,as),e(je,mn),e(mn,ss),e(M,ds),e(M,hn),e(hn,is),e(M,cs),e(M,_t),e(_t,ls),e(M,ps),u(o,br,m),k(po,o,m),u(o,yr,m),u(o,ae,m),e(ae,xe),e(xe,fn),k(mo,fn,null),e(ae,ms),e(ae,ho),e(ho,hs),e(ho,un),e(un,fs),e(ho,us),u(o,kr,m),u(o,I,m),e(I,gs),e(I,gn),e(gn,_s),e(I,vs),e(I,vt),e(vt,bs),e(I,ys),e(I,_n),e(_n,ks),e(I,ws),u(o,wr,m),u(o,qe,m),e(qe,Es),e(qe,vn),e(vn,Ts),e(qe,$s),u(o,Er,m),k(fo,o,m),u(o,Tr,m),u(o,se,m),e(se,ze),e(ze,bn),k(uo,bn,null),e(se,Ms),e(se,go),e(go,Ds),e(go,yn),e(yn,js),e(go,xs),u(o,$r,m),u(o,de,m),e(de,kn),e(kn,qs),e(de,zs),e(de,wn),e(wn,Ps),e(de,Fs),u(o,Mr,m),k(_o,o,m),u(o,Dr,m),u(o,ie,m),e(ie,Pe),e(Pe,En),k(vo,En,null),e(ie,As),e(ie,Tn),e(Tn,Cs),u(o,jr,m),u(o,N,m),e(N,Ss),e(N,$n),e($n,Ns),e(N,Is),e(N,Mn),e(Mn,Ls),e(N,Bs),e(N,Dn),e(Dn,Os),e(N,Rs),e(N,jn),e(jn,Ws),e(N,Vs),u(o,xr,m),k(bo,o,m),u(o,qr,m),u(o,Fe,m),e(Fe,Gs),e(Fe,yo),e(yo,Us),e(Fe,Hs),u(o,zr,m),u(o,Y,m),e(Y,Zs),e(Y,ko),e(ko,Ys),e(Y,Js),e(Y,wo),e(wo,Ks),e(Y,Qs),u(o,Pr,m),u(o,ce,m),e(ce,Ae),e(Ae,xn),k(Eo,xn,null),e(ce,Xs),e(ce,qn),e(qn,ed),u(o,Fr,m),u(o,C,m),k(To,C,null),e(C,od),e(C,Ce),e(Ce,bt),e(bt,td),e(Ce,nd),e(Ce,yt),e(yt,rd),e(Ce,ad),e(C,sd),e(C,le),e(le,dd),e(le,kt),e(kt,id),e(le,cd),e(le,wt),e(wt,ld),e(le,pd),e(C,md),k(Se,C,null),e(C,hd),e(C,Ne),k($o,Ne,null),e(Ne,fd),e(Ne,Mo),e(Mo,ud),e(Mo,Et),e(Et,gd),e(Mo,_d),e(C,vd),e(C,Ie),k(Do,Ie,null),e(Ie,bd),e(Ie,pe),e(pe,yd),e(pe,zn),e(zn,kd),e(pe,wd),e(pe,Pn),e(Pn,Ed),e(pe,Td),u(o,Ar,m),u(o,me,m),e(me,Le),e(Le,Fn),k(jo,Fn,null),e(me,$d),e(me,An),e(An,Md),u(o,Cr,m),u(o,D,m),k(xo,D,null),e(D,Dd),e(D,he),e(he,jd),e(he,Tt),e(Tt,xd),e(he,qd),e(he,$t),e($t,zd),e(he,Pd),e(D,Fd),e(D,qo),e(qo,Ad),e(qo,zo),e(zo,Cd),e(qo,Sd),e(D,Nd),e(D,Cn),e(Cn,Id),e(D,Ld),e(D,Po),e(Po,Bd),e(Po,Mt),e(Mt,Od),e(Po,Rd),e(D,Wd),e(D,Fo),e(Fo,Vd),e(Fo,Ao),e(Ao,Gd),e(Fo,Ud),e(D,Hd),e(D,J),e(J,Dt),e(Dt,Zd),e(J,Yd),e(J,Sn),e(Sn,Jd),e(J,Kd),e(J,Nn),e(Nn,Qd),e(J,Xd),e(D,ei),e(D,L),k(Co,L,null),e(L,oi),e(L,fe),e(fe,ti),e(fe,jt),e(jt,ni),e(fe,ri),e(fe,In),e(In,ai),e(fe,si),e(L,di),k(Be,L,null),e(L,ii),k(Oe,L,null),e(D,ci),e(D,B),k(So,B,null),e(B,li),e(B,Ln),e(Ln,pi),e(B,mi),e(B,ue),e(ue,hi),e(ue,Bn),e(Bn,fi),e(ue,ui),e(ue,On),e(On,gi),e(ue,_i),e(B,vi),k(Re,B,null),u(o,Sr,m),u(o,ge,m),e(ge,We),e(We,Rn),k(No,Rn,null),e(ge,bi),e(ge,Wn),e(Wn,yi),u(o,Nr,m),u(o,j,m),k(Io,j,null),e(j,ki),e(j,_e),e(_e,wi),e(_e,xt),e(xt,Ei),e(_e,Ti),e(_e,qt),e(qt,$i),e(_e,Mi),e(j,Di),e(j,Lo),e(Lo,ji),e(Lo,Bo),e(Bo,xi),e(Lo,qi),e(j,zi),e(j,Vn),e(Vn,Pi),e(j,Fi),e(j,Oo),e(Oo,Ai),e(Oo,zt),e(zt,Ci),e(Oo,Si),e(j,Ni),e(j,Ro),e(Ro,Ii),e(Ro,Wo),e(Wo,Li),e(Ro,Bi),e(j,Oi),e(j,K),e(K,Pt),e(Pt,Ri),e(K,Wi),e(K,Ft),e(Ft,Vi),e(K,Gi),e(K,At),e(At,Ui),e(K,Hi),e(j,Zi),e(j,O),k(Vo,O,null),e(O,Yi),e(O,ve),e(ve,Ji),e(ve,Ct),e(Ct,Ki),e(ve,Qi),e(ve,Gn),e(Gn,Xi),e(ve,ec),e(O,oc),k(Ve,O,null),e(O,tc),k(Ge,O,null),e(j,nc),e(j,Q),k(Go,Q,null),e(Q,rc),e(Q,Un),e(Un,ac),e(Q,sc),k(Ue,Q,null),u(o,Ir,m),u(o,be,m),e(be,He),e(He,Hn),k(Uo,Hn,null),e(be,dc),e(be,Zn),e(Zn,ic),u(o,Lr,m),u(o,x,m),k(Ho,x,null),e(x,cc),e(x,ye),e(ye,lc),e(ye,St),e(St,pc),e(ye,mc),e(ye,Nt),e(Nt,hc),e(ye,fc),e(x,uc),e(x,Zo),e(Zo,gc),e(Zo,Yo),e(Yo,_c),e(Zo,vc),e(x,bc),e(x,Yn),e(Yn,yc),e(x,kc),e(x,Jo),e(Jo,wc),e(Jo,It),e(It,Ec),e(Jo,Tc),e(x,$c),e(x,Ko),e(Ko,Mc),e(Ko,Qo),e(Qo,Dc),e(Ko,jc),e(x,xc),e(x,X),e(X,Lt),e(Lt,qc),e(X,zc),e(X,Jn),e(Jn,Pc),e(X,Fc),e(X,Kn),e(Kn,Ac),e(X,Cc),e(x,Sc),e(x,R),k(Xo,R,null),e(R,Nc),e(R,ke),e(ke,Ic),e(ke,Bt),e(Bt,Lc),e(ke,Bc),e(ke,Qn),e(Qn,Oc),e(ke,Rc),e(R,Wc),k(Ze,R,null),e(R,Vc),k(Ye,R,null),e(x,Gc),e(x,ee),k(et,ee,null),e(ee,Uc),e(ee,Xn),e(Xn,Hc),e(ee,Zc),k(Je,ee,null),Br=!0},p(o,[m]){const ot={};m&2&&(ot.$$scope={dirty:m,ctx:o}),Se.$set(ot);const er={};m&2&&(er.$$scope={dirty:m,ctx:o}),Be.$set(er);const or={};m&2&&(or.$$scope={dirty:m,ctx:o}),Oe.$set(or);const tr={};m&2&&(tr.$$scope={dirty:m,ctx:o}),Re.$set(tr);const tt={};m&2&&(tt.$$scope={dirty:m,ctx:o}),Ve.$set(tt);const nr={};m&2&&(nr.$$scope={dirty:m,ctx:o}),Ge.$set(nr);const rr={};m&2&&(rr.$$scope={dirty:m,ctx:o}),Ue.$set(rr);const ar={};m&2&&(ar.$$scope={dirty:m,ctx:o}),Ze.$set(ar);const nt={};m&2&&(nt.$$scope={dirty:m,ctx:o}),Ye.$set(nt);const sr={};m&2&&(sr.$$scope={dirty:m,ctx:o}),Je.$set(sr)},i(o){Br||(w(i.$$.fragment,o),w(to.$$.fragment,o),w(ao.$$.fragment,o),w(io.$$.fragment,o),w(co.$$.fragment,o),w(po.$$.fragment,o),w(mo.$$.fragment,o),w(fo.$$.fragment,o),w(uo.$$.fragment,o),w(_o.$$.fragment,o),w(vo.$$.fragment,o),w(bo.$$.fragment,o),w(Eo.$$.fragment,o),w(To.$$.fragment,o),w(Se.$$.fragment,o),w($o.$$.fragment,o),w(Do.$$.fragment,o),w(jo.$$.fragment,o),w(xo.$$.fragment,o),w(Co.$$.fragment,o),w(Be.$$.fragment,o),w(Oe.$$.fragment,o),w(So.$$.fragment,o),w(Re.$$.fragment,o),w(No.$$.fragment,o),w(Io.$$.fragment,o),w(Vo.$$.fragment,o),w(Ve.$$.fragment,o),w(Ge.$$.fragment,o),w(Go.$$.fragment,o),w(Ue.$$.fragment,o),w(Uo.$$.fragment,o),w(Ho.$$.fragment,o),w(Xo.$$.fragment,o),w(Ze.$$.fragment,o),w(Ye.$$.fragment,o),w(et.$$.fragment,o),w(Je.$$.fragment,o),Br=!0)},o(o){E(i.$$.fragment,o),E(to.$$.fragment,o),E(ao.$$.fragment,o),E(io.$$.fragment,o),E(co.$$.fragment,o),E(po.$$.fragment,o),E(mo.$$.fragment,o),E(fo.$$.fragment,o),E(uo.$$.fragment,o),E(_o.$$.fragment,o),E(vo.$$.fragment,o),E(bo.$$.fragment,o),E(Eo.$$.fragment,o),E(To.$$.fragment,o),E(Se.$$.fragment,o),E($o.$$.fragment,o),E(Do.$$.fragment,o),E(jo.$$.fragment,o),E(xo.$$.fragment,o),E(Co.$$.fragment,o),E(Be.$$.fragment,o),E(Oe.$$.fragment,o),E(So.$$.fragment,o),E(Re.$$.fragment,o),E(No.$$.fragment,o),E(Io.$$.fragment,o),E(Vo.$$.fragment,o),E(Ve.$$.fragment,o),E(Ge.$$.fragment,o),E(Go.$$.fragment,o),E(Ue.$$.fragment,o),E(Uo.$$.fragment,o),E(Ho.$$.fragment,o),E(Xo.$$.fragment,o),E(Ze.$$.fragment,o),E(Ye.$$.fragment,o),E(et.$$.fragment,o),E(Je.$$.fragment,o),Br=!1},d(o){t(h),o&&t($),o&&t(_),T(i),o&&t(cr),o&&t(te),T(to),o&&t(lr),o&&t(Ee),o&&t(pr),o&&t(Te),o&&t(mr),o&&t($e),o&&t(hr),o&&t(Z),o&&t(fr),o&&t(ne),T(ao),o&&t(ur),o&&t(U),o&&t(gr),T(io,o),o&&t(_r),o&&t(re),T(co),o&&t(vr),o&&t(M),o&&t(br),T(po,o),o&&t(yr),o&&t(ae),T(mo),o&&t(kr),o&&t(I),o&&t(wr),o&&t(qe),o&&t(Er),T(fo,o),o&&t(Tr),o&&t(se),T(uo),o&&t($r),o&&t(de),o&&t(Mr),T(_o,o),o&&t(Dr),o&&t(ie),T(vo),o&&t(jr),o&&t(N),o&&t(xr),T(bo,o),o&&t(qr),o&&t(Fe),o&&t(zr),o&&t(Y),o&&t(Pr),o&&t(ce),T(Eo),o&&t(Fr),o&&t(C),T(To),T(Se),T($o),T(Do),o&&t(Ar),o&&t(me),T(jo),o&&t(Cr),o&&t(D),T(xo),T(Co),T(Be),T(Oe),T(So),T(Re),o&&t(Sr),o&&t(ge),T(No),o&&t(Nr),o&&t(j),T(Io),T(Vo),T(Ve),T(Ge),T(Go),T(Ue),o&&t(Ir),o&&t(be),T(Uo),o&&t(Lr),o&&t(x),T(Ho),T(Xo),T(Ze),T(Ye),T(et),T(Je)}}}const sm={local:"encoder-decoder-models",sections:[{local:"overview",title:"Overview"},{local:"randomly-initializing-encoderdecodermodel-from-model-configurations",title:"Randomly initializing `EncoderDecoderModel` from model configurations."},{local:"initialising-encoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder",title:"Initialising `EncoderDecoderModel` from a pretrained encoder and a pretrained decoder."},{local:"loading-an-existing-encoderdecodermodel-checkpoint-and-perform-inference",title:"Loading an existing `EncoderDecoderModel` checkpoint and perform inference."},{local:"loading-a-pytorch-checkpoint-into-tfencoderdecodermodel",title:"Loading a PyTorch checkpoint into `TFEncoderDecoderModel`."},{local:"training",title:"Training"},{local:"transformers.EncoderDecoderConfig",title:"EncoderDecoderConfig"},{local:"transformers.EncoderDecoderModel",title:"EncoderDecoderModel"},{local:"transformers.TFEncoderDecoderModel",title:"TFEncoderDecoderModel"},{local:"transformers.FlaxEncoderDecoderModel",title:"FlaxEncoderDecoderModel"}],title:"Encoder Decoder Models"};function dm(q){return Zp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fm extends Vp{constructor(h){super();Gp(this,h,dm,am,Up,{})}}export{fm as default,sm as metadata};
