import{S as Hm,i as Um,s as Zm,e as a,k as l,w as b,t as n,M as Ym,c as s,d as t,m as p,a as i,x as w,h as r,b as c,G as e,g,y as E,q as T,o as y,B as k,v as Jm,L as mt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Nl}from"../../chunks/Tip-hf-doc-builder.js";import{D as H}from"../../chunks/Docstring-hf-doc-builder.js";import{C as U}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Y}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as pt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Km(z){let h,x,_,f,v;return f=new U({props:{code:`from transformers import BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

# Initializing a ViT & BERT style configuration
config_encoder = ViTConfig()
config_decoder = BertConfig()

config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

# Initializing a ViTBert model from a ViT & bert-base-uncased style configurations
model = VisionEncoderDecoderModel(config=config)

# Accessing the model configuration
config_encoder = model.config.encoder
config_decoder = model.config.decoder
# set decoder config to causal lm
config_decoder.is_decoder = True
config_decoder.add_cross_attention = True

# Saving the model, including its configuration
model.save_pretrained("my-model")

# loading model and config from pretrained folder
encoder_decoder_config = VisionEncoderDecoderConfig.from_pretrained("my-model")
model = VisionEncoderDecoderModel.from_pretrained("my-model", config=encoder_decoder_config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT &amp; BERT style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = ViTConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViTBert model from a ViT &amp; bert-base-uncased style configurations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = model.config.encoder
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = model.config.decoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set decoder config to causal lm</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.add_cross_attention = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_decoder_config = VisionEncoderDecoderConfig.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),{c(){h=a("p"),x=n("Examples:"),_=l(),b(f.$$.fragment)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Examples:"),u.forEach(t),_=p(d),w(f.$$.fragment,d)},m(d,u){g(d,h,u),e(h,x),g(d,_,u),E(f,d,u),v=!0},p:mt,i(d){v||(T(f.$$.fragment,d),v=!0)},o(d){y(f.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),k(f,d)}}}function Qm(z){let h,x,_,f,v;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var I=i(_);f=r(I,"Module"),I.forEach(t),v=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){g(d,h,u),e(h,x),e(h,_),e(_,f),e(h,v)},d(d){d&&t(h)}}}function Xm(z){let h,x,_,f,v;return f=new U({props:{code:`from transformers import TrOCRProcessor, VisionEncoderDecoderModel
import requests
from PIL import Image
import torch

processor = TrOCRProcessor.from_pretrained("microsoft/trocr-base-handwritten")
model = VisionEncoderDecoderModel.from_pretrained("microsoft/trocr-base-handwritten")

# load image from the IAM dataset
url = "https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg"
image = Image.open(requests.get(url, stream=True).raw).convert("RGB")

# training
model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
model.config.pad_token_id = processor.tokenizer.pad_token_id
model.config.vocab_size = model.config.decoder.vocab_size

pixel_values = processor(image, return_tensors="pt").pixel_values
text = "hello world"
labels = processor.tokenizer(text, return_tensors="pt").input_ids
outputs = model(pixel_values=pixel_values, labels=labels)
loss = outputs.loss

# inference (generation)
generated_ids = model.generate(pixel_values)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrOCRProcessor, VisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = TrOCRProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load image from the IAM dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = processor.tokenizer.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.vocab_size = model.config.decoder.vocab_size

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;hello world&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = processor.tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values=pixel_values, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference (generation)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(pixel_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]`}}),{c(){h=a("p"),x=n("Examples:"),_=l(),b(f.$$.fragment)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Examples:"),u.forEach(t),_=p(d),w(f.$$.fragment,d)},m(d,u){g(d,h,u),e(h,x),g(d,_,u),E(f,d,u),v=!0},p:mt,i(d){v||(T(f.$$.fragment,d),v=!0)},o(d){y(f.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),k(f,d)}}}function eh(z){let h,x,_,f,v;return f=new U({props:{code:`from transformers import VisionEncoderDecoderModel

# initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized
model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "bert-base-uncased"
)
# saving model after fine-tuning
model.save_pretrained("./vit-bert")
# load fine-tuned model
model = VisionEncoderDecoderModel.from_pretrained("./vit-bert")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)`}}),{c(){h=a("p"),x=n("Example:"),_=l(),b(f.$$.fragment)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Example:"),u.forEach(t),_=p(d),w(f.$$.fragment,d)},m(d,u){g(d,h,u),e(h,x),g(d,_,u),E(f,d,u),v=!0},p:mt,i(d){v||(T(f.$$.fragment,d),v=!0)},o(d){y(f.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),k(f,d)}}}function oh(z){let h,x,_,f,v;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var I=i(_);f=r(I,"Module"),I.forEach(t),v=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){g(d,h,u),e(h,x),e(h,_),e(_,f),e(h,v)},d(d){d&&t(h)}}}function th(z){let h,x,_,f,v;return f=new U({props:{code:`from transformers import AutoFeatureExtractor, AutoTokenizer, TFVisionEncoderDecoderModel
from PIL import Image
import requests

feature_extractor = AutoFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
decoder_tokenizer = AutoTokenizer.from_pretrained("gpt2")

# initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "gpt2"
)

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
img = Image.open(requests.get(url, stream=True).raw)

# forward
pixel_values = feature_extractor(images=img, return_tensors="tf").pixel_values  # Batch size 1
decoder_input_ids = decoder_tokenizer("Linda Davis", return_tensors="tf").input_ids  # Batch size 1
outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids)

# training
outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids, labels=decoder_input_ids)
loss, logits = outputs.loss, outputs.logits

# save and load from pretrained
model.save_pretrained("vit-gpt2")
model = TFVisionEncoderDecoderModel.from_pretrained("vit-gpt2")

# generation
generated = model.generate(pixel_values, decoder_start_token_id=model.config.decoder.bos_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, AutoTokenizer, TFVisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>img = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=img, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).pixel_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = decoder_tokenizer(<span class="hljs-string">&quot;Linda Davis&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids, labels=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;vit-gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;vit-gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(pixel_values, decoder_start_token_id=model.config.decoder.bos_token_id)`}}),{c(){h=a("p"),x=n("Examples:"),_=l(),b(f.$$.fragment)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Examples:"),u.forEach(t),_=p(d),w(f.$$.fragment,d)},m(d,u){g(d,h,u),e(h,x),g(d,_,u),E(f,d,u),v=!0},p:mt,i(d){v||(T(f.$$.fragment,d),v=!0)},o(d){y(f.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),k(f,d)}}}function nh(z){let h,x,_,f,v;return f=new U({props:{code:`from transformers import TFVisionEncoderDecoderModel

# initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized
model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "bert-base-uncased"
)
# saving model after fine-tuning
model.save_pretrained("./vit-bert")
# load fine-tuned model
model = TFVisionEncoderDecoderModel.from_pretrained("./vit-bert")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFVisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)`}}),{c(){h=a("p"),x=n("Example:"),_=l(),b(f.$$.fragment)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Example:"),u.forEach(t),_=p(d),w(f.$$.fragment,d)},m(d,u){g(d,h,u),e(h,x),g(d,_,u),E(f,d,u),v=!0},p:mt,i(d){v||(T(f.$$.fragment,d),v=!0)},o(d){y(f.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),k(f,d)}}}function rh(z){let h,x,_,f,v;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var I=i(_);f=r(I,"Module"),I.forEach(t),v=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){g(d,h,u),e(h,x),e(h,_),e(_,f),e(h,v)},d(d){d&&t(h)}}}function ah(z){let h,x,_,f,v;return f=new U({props:{code:`from transformers import FlaxVisionEncoderDecoderModel, ViTFeatureExtractor, GPT2Tokenizer
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")

# load output tokenizer
tokenizer_output = GPT2Tokenizer.from_pretrained("gpt2")

# initialize a vit-gpt2 from pretrained ViT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "gpt2"
)

pixel_values = feature_extractor(images=image, return_tensors="np").pixel_values

# use GPT2's eos_token as the pad as well as eos token
model.config.eos_token_id = model.config.decoder.eos_token_id
model.config.pad_token_id = model.config.eos_token_id

# generation
sequences = model.generate(pixel_values, num_beams=4, max_length=12).sequences

captions = tokenizer_output.batch_decode(sequences, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxVisionEncoderDecoderModel, ViTFeatureExtractor, GPT2Tokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load output tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_output = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-gpt2 from pretrained ViT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use GPT2&#x27;s eos_token as the pad as well as eos token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.eos_token_id = model.config.decoder.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(pixel_values, num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">12</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>captions = tokenizer_output.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){h=a("p"),x=n("Examples:"),_=l(),b(f.$$.fragment)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Examples:"),u.forEach(t),_=p(d),w(f.$$.fragment,d)},m(d,u){g(d,h,u),e(h,x),g(d,_,u),E(f,d,u),v=!0},p:mt,i(d){v||(T(f.$$.fragment,d),v=!0)},o(d){y(f.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),k(f,d)}}}function sh(z){let h,x,_,f,v;return f=new U({props:{code:`from transformers import FlaxVisionEncoderDecoderModel

# initialize a vit-gpt2 from a pretrained ViT and a pretrained GPT2 model. Note that the cross-attention layers will be randomly initialized
model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "gpt2"
)
# saving model after fine-tuning
model.save_pretrained("./vit-gpt2")
# load fine-tuned model
model = FlaxVisionEncoderDecoderModel.from_pretrained("./vit-gpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxVisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-gpt2 from a pretrained ViT and a pretrained GPT2 model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./vit-gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-gpt2&quot;</span>)`}}),{c(){h=a("p"),x=n("Example:"),_=l(),b(f.$$.fragment)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Example:"),u.forEach(t),_=p(d),w(f.$$.fragment,d)},m(d,u){g(d,h,u),e(h,x),g(d,_,u),E(f,d,u),v=!0},p:mt,i(d){v||(T(f.$$.fragment,d),v=!0)},o(d){y(f.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),k(f,d)}}}function ih(z){let h,x,_,f,v,d,u,I,qa,yr,ne,ye,fn,to,za,gn,Fa,kr,$,Pa,ht,Aa,Ca,un,Sa,Ia,ft,La,Na,gt,Oa,Ra,ut,Ba,Ga,_t,Wa,Ha,_n,Ua,Za,vt,Ya,Ja,bt,Ka,Qa,wt,Xa,es,Et,os,ts,xr,ke,ns,no,rs,as,$r,xe,ss,Tt,is,ds,jr,J,cs,yt,ls,ps,kt,ms,hs,Mr,re,$e,vn,ro,fs,ao,gs,bn,us,_s,Vr,Z,xt,vs,bs,$t,ws,Es,wn,Ts,ys,Dr,so,qr,ae,je,En,io,ks,co,xs,Tn,$s,js,zr,M,jt,Ms,Vs,yn,Ds,qs,Mt,zs,Fs,kn,Ps,As,xn,Cs,Ss,$n,Is,Ls,Vt,Ns,Os,Me,Rs,jn,Bs,Gs,Mn,Ws,Hs,Dt,Us,Zs,Fr,lo,Pr,se,Ve,Vn,po,Ys,mo,Js,Dn,Ks,Qs,Ar,L,Xs,qn,ei,oi,qt,ti,ni,zn,ri,ai,Cr,De,si,Fn,ii,di,Sr,ho,Ir,ie,qe,Pn,fo,ci,go,li,An,pi,mi,Lr,de,Cn,hi,fi,Sn,gi,ui,Nr,uo,Or,ce,ze,In,_o,_i,Ln,vi,Rr,N,bi,Nn,wi,Ei,On,Ti,yi,Rn,ki,xi,Br,vo,Gr,K,$i,bo,ji,Mi,wo,Vi,Di,Wr,le,Fe,Bn,Eo,qi,Gn,zi,Hr,S,To,Fi,Pe,zt,Pi,Ai,Ft,Ci,Si,Ii,pe,Li,Pt,Ni,Oi,At,Ri,Bi,Gi,Ae,Wi,Ce,yo,Hi,ko,Ui,Ct,Zi,Yi,Ji,Se,xo,Ki,me,Qi,Wn,Xi,ed,Hn,od,td,Ur,he,Ie,Un,$o,nd,Zn,rd,Zr,V,jo,ad,fe,sd,St,id,dd,It,cd,ld,pd,Mo,md,Vo,hd,fd,gd,Do,ud,qo,_d,vd,bd,Yn,wd,Ed,zo,Td,Lt,yd,kd,xd,Fo,$d,Po,jd,Md,Vd,Q,Nt,Dd,qd,Jn,zd,Fd,Kn,Pd,Ad,Cd,O,Ao,Sd,ge,Id,Ot,Ld,Nd,Qn,Od,Rd,Bd,Le,Gd,Ne,Wd,R,Co,Hd,Xn,Ud,Zd,ue,Yd,er,Jd,Kd,or,Qd,Xd,ec,Oe,Yr,_e,Re,tr,So,oc,nr,tc,Jr,D,Io,nc,ve,rc,Rt,ac,sc,Bt,ic,dc,cc,Lo,lc,No,pc,mc,hc,Oo,fc,Ro,gc,uc,_c,rr,vc,bc,Bo,wc,Gt,Ec,Tc,yc,Go,kc,Wo,xc,$c,jc,X,Wt,Mc,Vc,Ht,Dc,qc,Ut,zc,Fc,Pc,B,Ho,Ac,be,Cc,Zt,Sc,Ic,ar,Lc,Nc,Oc,Be,Rc,Ge,Bc,ee,Uo,Gc,sr,Wc,Hc,We,Kr,we,He,ir,Zo,Uc,dr,Zc,Qr,q,Yo,Yc,Ee,Jc,Yt,Kc,Qc,Jt,Xc,el,ol,Jo,tl,Ko,nl,rl,al,Qo,sl,Xo,il,dl,cl,cr,ll,pl,et,ml,Kt,hl,fl,gl,ot,ul,tt,_l,vl,bl,oe,Qt,wl,El,lr,Tl,yl,pr,kl,xl,$l,G,nt,jl,Te,Ml,Xt,Vl,Dl,mr,ql,zl,Fl,Ue,Pl,Ze,Al,te,rt,Cl,hr,Sl,Il,Ye,Xr;return d=new Y({}),to=new Y({}),ro=new Y({}),so=new U({props:{code:`from transformers import BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

config_encoder = ViTConfig()
config_decoder = BertConfig()

config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
model = VisionEncoderDecoderModel(config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = ViTConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel(config=config)`}}),io=new Y({}),lo=new U({props:{code:`from transformers import VisionEncoderDecoderModel

model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "microsoft/swin-base-patch4-window7-224-in22k", "bert-base-uncased"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/swin-base-patch4-window7-224-in22k&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)`}}),po=new Y({}),ho=new U({props:{code:`import requests
from PIL import Image

from transformers import GPT2TokenizerFast, ViTFeatureExtractor, VisionEncoderDecoderModel

# load a fine-tuned image captioning model and corresponding tokenizer and feature extractor
model = VisionEncoderDecoderModel.from_pretrained("nlpconnect/vit-gpt2-image-captioning")
tokenizer = GPT2TokenizerFast.from_pretrained("nlpconnect/vit-gpt2-image-captioning")
feature_extractor = ViTFeatureExtractor.from_pretrained("nlpconnect/vit-gpt2-image-captioning")

# let's perform inference on an image
url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)
pixel_values = feature_extractor(image, return_tensors="pt").pixel_values

# autoregressively generate caption (uses greedy decoding by default)
generated_ids = model.generate(pixel_values)
generated_text = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
print(generated_text)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2TokenizerFast, ViTFeatureExtractor, VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned image captioning model and corresponding tokenizer and feature extractor</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;nlpconnect/vit-gpt2-image-captioning&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;nlpconnect/vit-gpt2-image-captioning&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;nlpconnect/vit-gpt2-image-captioning&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s perform inference on an image</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># autoregressively generate caption (uses greedy decoding by default)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(pixel_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(generated_text)
a cat laying on a blanket <span class="hljs-built_in">next</span> to a cat laying on a bed`}}),fo=new Y({}),uo=new U({props:{code:`from transformers import VisionEncoderDecoderModel, TFVisionEncoderDecoderModel

_model = VisionEncoderDecoderModel.from_pretrained("nlpconnect/vit-gpt2-image-captioning")

_model.encoder.save_pretrained("./encoder")
_model.decoder.save_pretrained("./decoder")

model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "./encoder", "./decoder", encoder_from_pt=True, decoder_from_pt=True
)
# This is only for copying some specific attributes of this particular model.
model.config = _model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VisionEncoderDecoderModel, TFVisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>_model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;nlpconnect/vit-gpt2-image-captioning&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>_model.encoder.save_pretrained(<span class="hljs-string">&quot;./encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>_model.decoder.save_pretrained(<span class="hljs-string">&quot;./decoder&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;./encoder&quot;</span>, <span class="hljs-string">&quot;./decoder&quot;</span>, encoder_from_pt=<span class="hljs-literal">True</span>, decoder_from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is only for copying some specific attributes of this particular model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config = _model.config`}}),_o=new Y({}),vo=new U({props:{code:`from transformers import ViTFeatureExtractor, BertTokenizer, VisionEncoderDecoderModel
from datasets import load_dataset

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "bert-base-uncased"
)

model.config.decoder_start_token_id = tokenizer.cls_token_id
model.config.pad_token_id = tokenizer.pad_token_id

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]
pixel_values = feature_extractor(image, return_tensors="pt").pixel_values

labels = tokenizer(
    "an image of two cats chilling on a couch",
    return_tensors="pt",
).input_ids

# the forward function automatically creates the correct decoder_input_ids
loss = model(pixel_values=pixel_values, labels=labels).loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, BertTokenizer, VisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = tokenizer.pad_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;an image of two cats chilling on a couch&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(pixel_values=pixel_values, labels=labels).loss`}}),Eo=new Y({}),To=new H({props:{name:"class transformers.VisionEncoderDecoderConfig",anchor:"transformers.VisionEncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L27"}}),Ae=new pt({props:{anchor:"transformers.VisionEncoderDecoderConfig.example",$$slots:{default:[Km]},$$scope:{ctx:z}}}),yo=new H({props:{name:"from_encoder_decoder_configs",anchor:"transformers.VisionEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L93",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a></p>
`}}),xo=new H({props:{name:"to_dict",anchor:"transformers.VisionEncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L110",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),$o=new Y({}),jo=new H({props:{name:"class transformers.VisionEncoderDecoderModel",anchor:"transformers.VisionEncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L148"}}),Ao=new H({props:{name:"forward",anchor:"transformers.VisionEncoderDecoderModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using a feature extractor (e.g. if you use ViT as the encoder,
you should use <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>). See <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code> to the
right, replacing -100 by the <code>pad_token_id</code> and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.VisionEncoderDecoderModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor
of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the
decoder.`,name:"encoder_outputs"},{anchor:"transformers.VisionEncoderDecoderModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.VisionEncoderDecoderModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.VisionEncoderDecoderModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.VisionEncoderDecoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisionEncoderDecoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisionEncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisionEncoderDecoderModel.forward.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014; Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L407",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a>) and inputs.</p>
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
`}}),Le=new Nl({props:{$$slots:{default:[Qm]},$$scope:{ctx:z}}}),Ne=new pt({props:{anchor:"transformers.VisionEncoderDecoderModel.forward.example",$$slots:{default:[Xm]},$$scope:{ctx:z}}}),Co=new H({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the image encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the text decoder. Can be either:</p>
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
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L253"}}),Oe=new pt({props:{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[eh]},$$scope:{ctx:z}}}),So=new Y({}),Io=new H({props:{name:"class transformers.TFVisionEncoderDecoderModel",anchor:"transformers.TFVisionEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L175"}}),Ho=new H({props:{name:"call",anchor:"transformers.TFVisionEncoderDecoderModel.call",parameters:[{name:"pixel_values",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using the vision&#x2019;s model&#x2019;s feature extractor. For example, using
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.`,name:"decoder_input_ids"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor of hidden-states at the output
of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014; Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L513",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a>) and inputs.</p>
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
`}}),Be=new Nl({props:{$$slots:{default:[oh]},$$scope:{ctx:z}}}),Ge=new pt({props:{anchor:"transformers.TFVisionEncoderDecoderModel.call.example",$$slots:{default:[th]},$$scope:{ctx:z}}}),Uo=new H({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch index checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>encoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <em>None</em>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>decoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L349"}}),We=new pt({props:{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[nh]},$$scope:{ctx:z}}}),Zo=new Y({}),Yo=new H({props:{name:"class transformers.FlaxVisionEncoderDecoderModel",anchor:"transformers.FlaxVisionEncoderDecoderModel",parameters:[{name:"config",val:": VisionEncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L268"}}),nt=new H({props:{name:"__call__",anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__",parameters:[{name:"pixel_values",val:": ndarray"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using the vision model&#x2019;s feature extractor. For example, using
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.decoder.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L599",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a>) and inputs.</p>
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
`}}),Ue=new Nl({props:{$$slots:{default:[rh]},$$scope:{ctx:z}}}),Ze=new pt({props:{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.example",$$slots:{default:[ah]},$$scope:{ctx:z}}}),rt=new H({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L724"}}),Ye=new pt({props:{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[sh]},$$scope:{ctx:z}}}),{c(){h=a("meta"),x=l(),_=a("h1"),f=a("a"),v=a("span"),b(d.$$.fragment),u=l(),I=a("span"),qa=n("Vision Encoder Decoder Models"),yr=l(),ne=a("h2"),ye=a("a"),fn=a("span"),b(to.$$.fragment),za=l(),gn=a("span"),Fa=n("Overview"),kr=l(),$=a("p"),Pa=n("The "),ht=a("a"),Aa=n("VisionEncoderDecoderModel"),Ca=n(` can be used to initialize an image-to-text model with any
pretrained Transformer-based vision model as the encoder (`),un=a("em"),Sa=n("e.g."),Ia=l(),ft=a("a"),La=n("ViT"),Na=n(", "),gt=a("a"),Oa=n("BEiT"),Ra=n(", "),ut=a("a"),Ba=n("DeiT"),Ga=n(", "),_t=a("a"),Wa=n("Swin"),Ha=n(`)
and any pretrained language model as the decoder (`),_n=a("em"),Ua=n("e.g."),Za=l(),vt=a("a"),Ya=n("RoBERTa"),Ja=n(", "),bt=a("a"),Ka=n("GPT2"),Qa=n(", "),wt=a("a"),Xa=n("BERT"),es=n(", "),Et=a("a"),os=n("DistilBERT"),ts=n(")."),xr=l(),ke=a("p"),ns=n(`The effectiveness of initializing image-to-text-sequence models with pretrained checkpoints has been shown in (for
example) `),no=a("a"),rs=n("TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models"),as=n(` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei.`),$r=l(),xe=a("p"),ss=n("After such a "),Tt=a("a"),is=n("VisionEncoderDecoderModel"),ds=n(` has been trained/fine-tuned, it can be saved/loaded just like any other models (see the examples below
for more information).`),jr=l(),J=a("p"),cs=n(`An example application is image captioning, in which the encoder is used to encode the image, after which an autoregressive language model generates
the caption. Another example is optical character recognition. Refer to `),yt=a("a"),ls=n("TrOCR"),ps=n(", which is an instance of "),kt=a("a"),ms=n("VisionEncoderDecoderModel"),hs=n("."),Mr=l(),re=a("h2"),$e=a("a"),vn=a("span"),b(ro.$$.fragment),fs=l(),ao=a("span"),gs=n("Randomly initializing "),bn=a("code"),us=n("VisionEncoderDecoderModel"),_s=n(" from model configurations."),Vr=l(),Z=a("p"),xt=a("a"),vs=n("VisionEncoderDecoderModel"),bs=n(" can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),$t=a("a"),ws=n("ViTModel"),Es=n(` configuration for the encoder
and the default `),wn=a("code"),Ts=n("BertForCausalLM"),ys=n(" configuration for the decoder."),Dr=l(),b(so.$$.fragment),qr=l(),ae=a("h2"),je=a("a"),En=a("span"),b(io.$$.fragment),ks=l(),co=a("span"),xs=n("Initialising "),Tn=a("code"),$s=n("VisionEncoderDecoderModel"),js=n(" from a pretrained encoder and a pretrained decoder."),zr=l(),M=a("p"),jt=a("a"),Ms=n("VisionEncoderDecoderModel"),Vs=n(" can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained Transformer-based vision model, "),yn=a("em"),Ds=n("e.g."),qs=l(),Mt=a("a"),zs=n("Swin"),Fs=n(", can serve as the encoder and both pretrained auto-encoding models, "),kn=a("em"),Ps=n("e.g."),As=n(" BERT, pretrained causal language models, "),xn=a("em"),Cs=n("e.g."),Ss=n(" GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),$n=a("em"),Is=n("e.g."),Ls=n(` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),Vt=a("a"),Ns=n("VisionEncoderDecoderModel"),Os=n(" from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),Me=a("a"),Rs=n("the "),jn=a("em"),Bs=n("Warm-starting-encoder-decoder blog post"),Gs=n(`.
To do so, the `),Mn=a("code"),Ws=n("VisionEncoderDecoderModel"),Hs=n(" class provides a "),Dt=a("a"),Us=n("VisionEncoderDecoderModel.from_encoder_decoder_pretrained()"),Zs=n(" method."),Fr=l(),b(lo.$$.fragment),Pr=l(),se=a("h2"),Ve=a("a"),Vn=a("span"),b(po.$$.fragment),Ys=l(),mo=a("span"),Js=n("Loading an existing "),Dn=a("code"),Ks=n("VisionEncoderDecoderModel"),Qs=n(" checkpoint and perform inference."),Ar=l(),L=a("p"),Xs=n("To load fine-tuned checkpoints of the "),qn=a("code"),ei=n("VisionEncoderDecoderModel"),oi=n(" class, "),qt=a("a"),ti=n("VisionEncoderDecoderModel"),ni=n(" provides the "),zn=a("code"),ri=n("from_pretrained(...)"),ai=n(" method just like any other model architecture in Transformers."),Cr=l(),De=a("p"),si=n("To perform inference, one uses the "),Fn=a("code"),ii=n("generate"),di=n(" method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),Sr=l(),b(ho.$$.fragment),Ir=l(),ie=a("h2"),qe=a("a"),Pn=a("span"),b(fo.$$.fragment),ci=l(),go=a("span"),li=n("Loading a PyTorch checkpoint into "),An=a("code"),pi=n("TFVisionEncoderDecoderModel"),mi=n("."),Lr=l(),de=a("p"),Cn=a("code"),hi=n("TFVisionEncoderDecoderModel.from_pretrained()"),fi=n(` currently doesn\u2019t support initializing the model from a
PyTorch checkpoint. Passing `),Sn=a("code"),gi=n("from_pt=True"),ui=n(` to this method will throw an exception. If there are only PyTorch
checkpoints for a particular vision encoder-decoder model, a workaround is:`),Nr=l(),b(uo.$$.fragment),Or=l(),ce=a("h2"),ze=a("a"),In=a("span"),b(_o.$$.fragment),_i=l(),Ln=a("span"),vi=n("Training"),Rr=l(),N=a("p"),bi=n(`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model on a dataset of (image, text) pairs.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),Nn=a("code"),wi=n("pixel_values"),Ei=n(` (which are the
images) and `),On=a("code"),Ti=n("labels"),yi=n(" (which are the "),Rn=a("code"),ki=n("input_ids"),xi=n(" of the encoded target sequence)."),Br=l(),b(vo.$$.fragment),Gr=l(),K=a("p"),$i=n("This model was contributed by "),bo=a("a"),ji=n("nielsr"),Mi=n(`. This model\u2019s TensorFlow and Flax versions
were contributed by `),wo=a("a"),Vi=n("ydshieh"),Di=n("."),Wr=l(),le=a("h2"),Fe=a("a"),Bn=a("span"),b(Eo.$$.fragment),qi=l(),Gn=a("span"),zi=n("VisionEncoderDecoderConfig"),Hr=l(),S=a("div"),b(To.$$.fragment),Fi=l(),Pe=a("p"),zt=a("a"),Pi=n("VisionEncoderDecoderConfig"),Ai=n(` is the configuration class to store the configuration of a
`),Ft=a("a"),Ci=n("VisionEncoderDecoderModel"),Si=n(`. It is used to instantiate a Vision-Encoder-Text-Decoder model according to the
specified arguments, defining the encoder and decoder configs.`),Ii=l(),pe=a("p"),Li=n("Configuration objects inherit from "),Pt=a("a"),Ni=n("PretrainedConfig"),Oi=n(` and can be used to control the model outputs. Read the
documentation from `),At=a("a"),Ri=n("PretrainedConfig"),Bi=n(" for more information."),Gi=l(),b(Ae.$$.fragment),Wi=l(),Ce=a("div"),b(yo.$$.fragment),Hi=l(),ko=a("p"),Ui=n("Instantiate a "),Ct=a("a"),Zi=n("VisionEncoderDecoderConfig"),Yi=n(` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),Ji=l(),Se=a("div"),b(xo.$$.fragment),Ki=l(),me=a("p"),Qi=n("Serializes this instance to a Python dictionary. Override the default "),Wn=a("em"),Xi=n("to_dict()"),ed=n(" from "),Hn=a("em"),od=n("PretrainedConfig"),td=n("."),Ur=l(),he=a("h2"),Ie=a("a"),Un=a("span"),b($o.$$.fragment),nd=l(),Zn=a("span"),rd=n("VisionEncoderDecoderModel"),Zr=l(),V=a("div"),b(jo.$$.fragment),ad=l(),fe=a("p"),sd=n(`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),St=a("a"),id=n("from_pretrained()"),dd=n(" function and the decoder is loaded via "),It=a("a"),cd=n("from_pretrained()"),ld=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),pd=l(),Mo=a("p"),md=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Vo=a("a"),hd=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),fd=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),gd=l(),Do=a("p"),ud=n("Additionally, in "),qo=a("a"),_d=n(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),vd=n(` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),bd=l(),Yn=a("p"),wd=n(`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Ed=l(),zo=a("p"),Td=n("This model inherits from "),Lt=a("a"),yd=n("PreTrainedModel"),kd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd=l(),Fo=a("p"),$d=n("This model is also a PyTorch "),Po=a("a"),jd=n("torch.nn.Module"),Md=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vd=l(),Q=a("p"),Nt=a("a"),Dd=n("VisionEncoderDecoderModel"),qd=n(` is a generic model class that will be instantiated as a transformer architecture with
one of the base vision model classes of the library as encoder and another one as decoder when created with the
:meth`),Jn=a("em"),zd=n("~transformers.AutoModel.from_pretrained"),Fd=n(` class method for the encoder and
:meth`),Kn=a("em"),Pd=n("~transformers.AutoModelForCausalLM.from_pretrained"),Ad=n(" class method for the decoder."),Cd=l(),O=a("div"),b(Ao.$$.fragment),Sd=l(),ge=a("p"),Id=n("The "),Ot=a("a"),Ld=n("VisionEncoderDecoderModel"),Nd=n(" forward method, overrides the "),Qn=a("code"),Od=n("__call__"),Rd=n(" special method."),Bd=l(),b(Le.$$.fragment),Gd=l(),b(Ne.$$.fragment),Wd=l(),R=a("div"),b(Co.$$.fragment),Hd=l(),Xn=a("p"),Ud=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Zd=l(),ue=a("p"),Yd=n("The model is set in evaluation mode by default using "),er=a("code"),Jd=n("model.eval()"),Kd=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),or=a("code"),Qd=n("model.train()"),Xd=n("."),ec=l(),b(Oe.$$.fragment),Yr=l(),_e=a("h2"),Re=a("a"),tr=a("span"),b(So.$$.fragment),oc=l(),nr=a("span"),tc=n("TFVisionEncoderDecoderModel"),Jr=l(),D=a("div"),b(Io.$$.fragment),nc=l(),ve=a("p"),rc=n(`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Rt=a("a"),ac=n("from_pretrained()"),sc=n(" function and the decoder is loaded via "),Bt=a("a"),ic=n("from_pretrained()"),dc=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),cc=l(),Lo=a("p"),lc=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),No=a("a"),pc=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),mc=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),hc=l(),Oo=a("p"),fc=n("Additionally, in "),Ro=a("a"),gc=n(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),uc=n(` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),_c=l(),rr=a("p"),vc=n(`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),bc=l(),Bo=a("p"),wc=n("This model inherits from "),Gt=a("a"),Ec=n("TFPreTrainedModel"),Tc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yc=l(),Go=a("p"),kc=n("This model is also a "),Wo=a("a"),xc=n("tf.keras.Model"),$c=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jc=l(),X=a("p"),Wt=a("a"),Mc=n("TFVisionEncoderDecoderModel"),Vc=n(` is a generic model class that will be instantiated as a transformer architecture
with one of the base vision model classes of the library as encoder and another one of the base model classes as
decoder when created with the `),Ht=a("a"),Dc=n("from_pretrained()"),qc=n(` class method for the encoder and
`),Ut=a("a"),zc=n("from_pretrained()"),Fc=n(" class method for the decoder."),Pc=l(),B=a("div"),b(Ho.$$.fragment),Ac=l(),be=a("p"),Cc=n("The "),Zt=a("a"),Sc=n("TFVisionEncoderDecoderModel"),Ic=n(" forward method, overrides the "),ar=a("code"),Lc=n("__call__"),Nc=n(" special method."),Oc=l(),b(Be.$$.fragment),Rc=l(),b(Ge.$$.fragment),Bc=l(),ee=a("div"),b(Uo.$$.fragment),Gc=l(),sr=a("p"),Wc=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Hc=l(),b(We.$$.fragment),Kr=l(),we=a("h2"),He=a("a"),ir=a("span"),b(Zo.$$.fragment),Uc=l(),dr=a("span"),Zc=n("FlaxVisionEncoderDecoderModel"),Qr=l(),q=a("div"),b(Yo.$$.fragment),Yc=l(),Ee=a("p"),Jc=n(`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Yt=a("a"),Kc=n("from_pretrained()"),Qc=n(" function and the decoder is loaded via "),Jt=a("a"),Xc=n("from_pretrained()"),el=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),ol=l(),Jo=a("p"),tl=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ko=a("a"),nl=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),rl=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),al=l(),Qo=a("p"),sl=n("Additionally, in "),Xo=a("a"),il=n(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),dl=n(` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),cl=l(),cr=a("p"),ll=n(`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),pl=l(),et=a("p"),ml=n("This model inherits from "),Kt=a("a"),hl=n("FlaxPreTrainedModel"),fl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gl=l(),ot=a("p"),ul=n(`This model is also a Flax Linen
`),tt=a("a"),_l=n("flax.nn.Module"),vl=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bl=l(),oe=a("p"),Qt=a("a"),wl=n("FlaxVisionEncoderDecoderModel"),El=n(` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base vision model classes of the library as encoder module and
another one as decoder module when created with the :meth`),lr=a("em"),Tl=n("~transformers.FlaxAutoModel.from_pretrained"),yl=n(` class method
for the encoder and :meth`),pr=a("em"),kl=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),xl=n(" class method for the decoder."),$l=l(),G=a("div"),b(nt.$$.fragment),jl=l(),Te=a("p"),Ml=n("The "),Xt=a("a"),Vl=n("FlaxVisionEncoderDecoderModel"),Dl=n(" forward method, overrides the "),mr=a("code"),ql=n("__call__"),zl=n(" special method."),Fl=l(),b(Ue.$$.fragment),Pl=l(),b(Ze.$$.fragment),Al=l(),te=a("div"),b(rt.$$.fragment),Cl=l(),hr=a("p"),Sl=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Il=l(),b(Ye.$$.fragment),this.h()},l(o){const m=Ym('[data-svelte="svelte-1phssyn"]',document.head);h=s(m,"META",{name:!0,content:!0}),m.forEach(t),x=p(o),_=s(o,"H1",{class:!0});var at=i(_);f=s(at,"A",{id:!0,class:!0,href:!0});var fr=i(f);v=s(fr,"SPAN",{});var gr=i(v);w(d.$$.fragment,gr),gr.forEach(t),fr.forEach(t),u=p(at),I=s(at,"SPAN",{});var ur=i(I);qa=r(ur,"Vision Encoder Decoder Models"),ur.forEach(t),at.forEach(t),yr=p(o),ne=s(o,"H2",{class:!0});var st=i(ne);ye=s(st,"A",{id:!0,class:!0,href:!0});var _r=i(ye);fn=s(_r,"SPAN",{});var vr=i(fn);w(to.$$.fragment,vr),vr.forEach(t),_r.forEach(t),za=p(st),gn=s(st,"SPAN",{});var br=i(gn);Fa=r(br,"Overview"),br.forEach(t),st.forEach(t),kr=p(o),$=s(o,"P",{});var j=i($);Pa=r(j,"The "),ht=s(j,"A",{href:!0});var wr=i(ht);Aa=r(wr,"VisionEncoderDecoderModel"),wr.forEach(t),Ca=r(j,` can be used to initialize an image-to-text model with any
pretrained Transformer-based vision model as the encoder (`),un=s(j,"EM",{});var Ol=i(un);Sa=r(Ol,"e.g."),Ol.forEach(t),Ia=p(j),ft=s(j,"A",{href:!0});var Rl=i(ft);La=r(Rl,"ViT"),Rl.forEach(t),Na=r(j,", "),gt=s(j,"A",{href:!0});var Bl=i(gt);Oa=r(Bl,"BEiT"),Bl.forEach(t),Ra=r(j,", "),ut=s(j,"A",{href:!0});var Gl=i(ut);Ba=r(Gl,"DeiT"),Gl.forEach(t),Ga=r(j,", "),_t=s(j,"A",{href:!0});var Wl=i(_t);Wa=r(Wl,"Swin"),Wl.forEach(t),Ha=r(j,`)
and any pretrained language model as the decoder (`),_n=s(j,"EM",{});var Hl=i(_n);Ua=r(Hl,"e.g."),Hl.forEach(t),Za=p(j),vt=s(j,"A",{href:!0});var Ul=i(vt);Ya=r(Ul,"RoBERTa"),Ul.forEach(t),Ja=r(j,", "),bt=s(j,"A",{href:!0});var Zl=i(bt);Ka=r(Zl,"GPT2"),Zl.forEach(t),Qa=r(j,", "),wt=s(j,"A",{href:!0});var Yl=i(wt);Xa=r(Yl,"BERT"),Yl.forEach(t),es=r(j,", "),Et=s(j,"A",{href:!0});var Jl=i(Et);os=r(Jl,"DistilBERT"),Jl.forEach(t),ts=r(j,")."),j.forEach(t),xr=p(o),ke=s(o,"P",{});var ea=i(ke);ns=r(ea,`The effectiveness of initializing image-to-text-sequence models with pretrained checkpoints has been shown in (for
example) `),no=s(ea,"A",{href:!0,rel:!0});var Kl=i(no);rs=r(Kl,"TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models"),Kl.forEach(t),as=r(ea,` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei.`),ea.forEach(t),$r=p(o),xe=s(o,"P",{});var oa=i(xe);ss=r(oa,"After such a "),Tt=s(oa,"A",{href:!0});var Ql=i(Tt);is=r(Ql,"VisionEncoderDecoderModel"),Ql.forEach(t),ds=r(oa,` has been trained/fine-tuned, it can be saved/loaded just like any other models (see the examples below
for more information).`),oa.forEach(t),jr=p(o),J=s(o,"P",{});var en=i(J);cs=r(en,`An example application is image captioning, in which the encoder is used to encode the image, after which an autoregressive language model generates
the caption. Another example is optical character recognition. Refer to `),yt=s(en,"A",{href:!0});var Xl=i(yt);ls=r(Xl,"TrOCR"),Xl.forEach(t),ps=r(en,", which is an instance of "),kt=s(en,"A",{href:!0});var ep=i(kt);ms=r(ep,"VisionEncoderDecoderModel"),ep.forEach(t),hs=r(en,"."),en.forEach(t),Mr=p(o),re=s(o,"H2",{class:!0});var ta=i(re);$e=s(ta,"A",{id:!0,class:!0,href:!0});var op=i($e);vn=s(op,"SPAN",{});var tp=i(vn);w(ro.$$.fragment,tp),tp.forEach(t),op.forEach(t),fs=p(ta),ao=s(ta,"SPAN",{});var na=i(ao);gs=r(na,"Randomly initializing "),bn=s(na,"CODE",{});var np=i(bn);us=r(np,"VisionEncoderDecoderModel"),np.forEach(t),_s=r(na," from model configurations."),na.forEach(t),ta.forEach(t),Vr=p(o),Z=s(o,"P",{});var it=i(Z);xt=s(it,"A",{href:!0});var rp=i(xt);vs=r(rp,"VisionEncoderDecoderModel"),rp.forEach(t),bs=r(it," can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),$t=s(it,"A",{href:!0});var ap=i($t);ws=r(ap,"ViTModel"),ap.forEach(t),Es=r(it,` configuration for the encoder
and the default `),wn=s(it,"CODE",{});var sp=i(wn);Ts=r(sp,"BertForCausalLM"),sp.forEach(t),ys=r(it," configuration for the decoder."),it.forEach(t),Dr=p(o),w(so.$$.fragment,o),qr=p(o),ae=s(o,"H2",{class:!0});var ra=i(ae);je=s(ra,"A",{id:!0,class:!0,href:!0});var ip=i(je);En=s(ip,"SPAN",{});var dp=i(En);w(io.$$.fragment,dp),dp.forEach(t),ip.forEach(t),ks=p(ra),co=s(ra,"SPAN",{});var aa=i(co);xs=r(aa,"Initialising "),Tn=s(aa,"CODE",{});var cp=i(Tn);$s=r(cp,"VisionEncoderDecoderModel"),cp.forEach(t),js=r(aa," from a pretrained encoder and a pretrained decoder."),aa.forEach(t),ra.forEach(t),zr=p(o),M=s(o,"P",{});var F=i(M);jt=s(F,"A",{href:!0});var lp=i(jt);Ms=r(lp,"VisionEncoderDecoderModel"),lp.forEach(t),Vs=r(F," can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained Transformer-based vision model, "),yn=s(F,"EM",{});var pp=i(yn);Ds=r(pp,"e.g."),pp.forEach(t),qs=p(F),Mt=s(F,"A",{href:!0});var mp=i(Mt);zs=r(mp,"Swin"),mp.forEach(t),Fs=r(F,", can serve as the encoder and both pretrained auto-encoding models, "),kn=s(F,"EM",{});var hp=i(kn);Ps=r(hp,"e.g."),hp.forEach(t),As=r(F," BERT, pretrained causal language models, "),xn=s(F,"EM",{});var fp=i(xn);Cs=r(fp,"e.g."),fp.forEach(t),Ss=r(F," GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),$n=s(F,"EM",{});var gp=i($n);Is=r(gp,"e.g."),gp.forEach(t),Ls=r(F,` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),Vt=s(F,"A",{href:!0});var up=i(Vt);Ns=r(up,"VisionEncoderDecoderModel"),up.forEach(t),Os=r(F," from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),Me=s(F,"A",{href:!0,rel:!0});var Ll=i(Me);Rs=r(Ll,"the "),jn=s(Ll,"EM",{});var _p=i(jn);Bs=r(_p,"Warm-starting-encoder-decoder blog post"),_p.forEach(t),Ll.forEach(t),Gs=r(F,`.
To do so, the `),Mn=s(F,"CODE",{});var vp=i(Mn);Ws=r(vp,"VisionEncoderDecoderModel"),vp.forEach(t),Hs=r(F," class provides a "),Dt=s(F,"A",{href:!0});var bp=i(Dt);Us=r(bp,"VisionEncoderDecoderModel.from_encoder_decoder_pretrained()"),bp.forEach(t),Zs=r(F," method."),F.forEach(t),Fr=p(o),w(lo.$$.fragment,o),Pr=p(o),se=s(o,"H2",{class:!0});var sa=i(se);Ve=s(sa,"A",{id:!0,class:!0,href:!0});var wp=i(Ve);Vn=s(wp,"SPAN",{});var Ep=i(Vn);w(po.$$.fragment,Ep),Ep.forEach(t),wp.forEach(t),Ys=p(sa),mo=s(sa,"SPAN",{});var ia=i(mo);Js=r(ia,"Loading an existing "),Dn=s(ia,"CODE",{});var Tp=i(Dn);Ks=r(Tp,"VisionEncoderDecoderModel"),Tp.forEach(t),Qs=r(ia," checkpoint and perform inference."),ia.forEach(t),sa.forEach(t),Ar=p(o),L=s(o,"P",{});var Je=i(L);Xs=r(Je,"To load fine-tuned checkpoints of the "),qn=s(Je,"CODE",{});var yp=i(qn);ei=r(yp,"VisionEncoderDecoderModel"),yp.forEach(t),oi=r(Je," class, "),qt=s(Je,"A",{href:!0});var kp=i(qt);ti=r(kp,"VisionEncoderDecoderModel"),kp.forEach(t),ni=r(Je," provides the "),zn=s(Je,"CODE",{});var xp=i(zn);ri=r(xp,"from_pretrained(...)"),xp.forEach(t),ai=r(Je," method just like any other model architecture in Transformers."),Je.forEach(t),Cr=p(o),De=s(o,"P",{});var da=i(De);si=r(da,"To perform inference, one uses the "),Fn=s(da,"CODE",{});var $p=i(Fn);ii=r($p,"generate"),$p.forEach(t),di=r(da," method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),da.forEach(t),Sr=p(o),w(ho.$$.fragment,o),Ir=p(o),ie=s(o,"H2",{class:!0});var ca=i(ie);qe=s(ca,"A",{id:!0,class:!0,href:!0});var jp=i(qe);Pn=s(jp,"SPAN",{});var Mp=i(Pn);w(fo.$$.fragment,Mp),Mp.forEach(t),jp.forEach(t),ci=p(ca),go=s(ca,"SPAN",{});var la=i(go);li=r(la,"Loading a PyTorch checkpoint into "),An=s(la,"CODE",{});var Vp=i(An);pi=r(Vp,"TFVisionEncoderDecoderModel"),Vp.forEach(t),mi=r(la,"."),la.forEach(t),ca.forEach(t),Lr=p(o),de=s(o,"P",{});var Er=i(de);Cn=s(Er,"CODE",{});var Dp=i(Cn);hi=r(Dp,"TFVisionEncoderDecoderModel.from_pretrained()"),Dp.forEach(t),fi=r(Er,` currently doesn\u2019t support initializing the model from a
PyTorch checkpoint. Passing `),Sn=s(Er,"CODE",{});var qp=i(Sn);gi=r(qp,"from_pt=True"),qp.forEach(t),ui=r(Er,` to this method will throw an exception. If there are only PyTorch
checkpoints for a particular vision encoder-decoder model, a workaround is:`),Er.forEach(t),Nr=p(o),w(uo.$$.fragment,o),Or=p(o),ce=s(o,"H2",{class:!0});var pa=i(ce);ze=s(pa,"A",{id:!0,class:!0,href:!0});var zp=i(ze);In=s(zp,"SPAN",{});var Fp=i(In);w(_o.$$.fragment,Fp),Fp.forEach(t),zp.forEach(t),_i=p(pa),Ln=s(pa,"SPAN",{});var Pp=i(Ln);vi=r(Pp,"Training"),Pp.forEach(t),pa.forEach(t),Rr=p(o),N=s(o,"P",{});var Ke=i(N);bi=r(Ke,`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model on a dataset of (image, text) pairs.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),Nn=s(Ke,"CODE",{});var Ap=i(Nn);wi=r(Ap,"pixel_values"),Ap.forEach(t),Ei=r(Ke,` (which are the
images) and `),On=s(Ke,"CODE",{});var Cp=i(On);Ti=r(Cp,"labels"),Cp.forEach(t),yi=r(Ke," (which are the "),Rn=s(Ke,"CODE",{});var Sp=i(Rn);ki=r(Sp,"input_ids"),Sp.forEach(t),xi=r(Ke," of the encoded target sequence)."),Ke.forEach(t),Br=p(o),w(vo.$$.fragment,o),Gr=p(o),K=s(o,"P",{});var on=i(K);$i=r(on,"This model was contributed by "),bo=s(on,"A",{href:!0,rel:!0});var Ip=i(bo);ji=r(Ip,"nielsr"),Ip.forEach(t),Mi=r(on,`. This model\u2019s TensorFlow and Flax versions
were contributed by `),wo=s(on,"A",{href:!0,rel:!0});var Lp=i(wo);Vi=r(Lp,"ydshieh"),Lp.forEach(t),Di=r(on,"."),on.forEach(t),Wr=p(o),le=s(o,"H2",{class:!0});var ma=i(le);Fe=s(ma,"A",{id:!0,class:!0,href:!0});var Np=i(Fe);Bn=s(Np,"SPAN",{});var Op=i(Bn);w(Eo.$$.fragment,Op),Op.forEach(t),Np.forEach(t),qi=p(ma),Gn=s(ma,"SPAN",{});var Rp=i(Gn);zi=r(Rp,"VisionEncoderDecoderConfig"),Rp.forEach(t),ma.forEach(t),Hr=p(o),S=s(o,"DIV",{class:!0});var W=i(S);w(To.$$.fragment,W),Fi=p(W),Pe=s(W,"P",{});var Tr=i(Pe);zt=s(Tr,"A",{href:!0});var Bp=i(zt);Pi=r(Bp,"VisionEncoderDecoderConfig"),Bp.forEach(t),Ai=r(Tr,` is the configuration class to store the configuration of a
`),Ft=s(Tr,"A",{href:!0});var Gp=i(Ft);Ci=r(Gp,"VisionEncoderDecoderModel"),Gp.forEach(t),Si=r(Tr,`. It is used to instantiate a Vision-Encoder-Text-Decoder model according to the
specified arguments, defining the encoder and decoder configs.`),Tr.forEach(t),Ii=p(W),pe=s(W,"P",{});var tn=i(pe);Li=r(tn,"Configuration objects inherit from "),Pt=s(tn,"A",{href:!0});var Wp=i(Pt);Ni=r(Wp,"PretrainedConfig"),Wp.forEach(t),Oi=r(tn,` and can be used to control the model outputs. Read the
documentation from `),At=s(tn,"A",{href:!0});var Hp=i(At);Ri=r(Hp,"PretrainedConfig"),Hp.forEach(t),Bi=r(tn," for more information."),tn.forEach(t),Gi=p(W),w(Ae.$$.fragment,W),Wi=p(W),Ce=s(W,"DIV",{class:!0});var ha=i(Ce);w(yo.$$.fragment,ha),Hi=p(ha),ko=s(ha,"P",{});var fa=i(ko);Ui=r(fa,"Instantiate a "),Ct=s(fa,"A",{href:!0});var Up=i(Ct);Zi=r(Up,"VisionEncoderDecoderConfig"),Up.forEach(t),Yi=r(fa,` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),fa.forEach(t),ha.forEach(t),Ji=p(W),Se=s(W,"DIV",{class:!0});var ga=i(Se);w(xo.$$.fragment,ga),Ki=p(ga),me=s(ga,"P",{});var nn=i(me);Qi=r(nn,"Serializes this instance to a Python dictionary. Override the default "),Wn=s(nn,"EM",{});var Zp=i(Wn);Xi=r(Zp,"to_dict()"),Zp.forEach(t),ed=r(nn," from "),Hn=s(nn,"EM",{});var Yp=i(Hn);od=r(Yp,"PretrainedConfig"),Yp.forEach(t),td=r(nn,"."),nn.forEach(t),ga.forEach(t),W.forEach(t),Ur=p(o),he=s(o,"H2",{class:!0});var ua=i(he);Ie=s(ua,"A",{id:!0,class:!0,href:!0});var Jp=i(Ie);Un=s(Jp,"SPAN",{});var Kp=i(Un);w($o.$$.fragment,Kp),Kp.forEach(t),Jp.forEach(t),nd=p(ua),Zn=s(ua,"SPAN",{});var Qp=i(Zn);rd=r(Qp,"VisionEncoderDecoderModel"),Qp.forEach(t),ua.forEach(t),Zr=p(o),V=s(o,"DIV",{class:!0});var P=i(V);w(jo.$$.fragment,P),ad=p(P),fe=s(P,"P",{});var rn=i(fe);sd=r(rn,`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),St=s(rn,"A",{href:!0});var Xp=i(St);id=r(Xp,"from_pretrained()"),Xp.forEach(t),dd=r(rn," function and the decoder is loaded via "),It=s(rn,"A",{href:!0});var em=i(It);cd=r(em,"from_pretrained()"),em.forEach(t),ld=r(rn,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),rn.forEach(t),pd=p(P),Mo=s(P,"P",{});var _a=i(Mo);md=r(_a,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Vo=s(_a,"A",{href:!0,rel:!0});var om=i(Vo);hd=r(om,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),om.forEach(t),fd=r(_a,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),_a.forEach(t),gd=p(P),Do=s(P,"P",{});var va=i(Do);ud=r(va,"Additionally, in "),qo=s(va,"A",{href:!0,rel:!0});var tm=i(qo);_d=r(tm,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),tm.forEach(t),vd=r(va,` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),va.forEach(t),bd=p(P),Yn=s(P,"P",{});var nm=i(Yn);wd=r(nm,`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),nm.forEach(t),Ed=p(P),zo=s(P,"P",{});var ba=i(zo);Td=r(ba,"This model inherits from "),Lt=s(ba,"A",{href:!0});var rm=i(Lt);yd=r(rm,"PreTrainedModel"),rm.forEach(t),kd=r(ba,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ba.forEach(t),xd=p(P),Fo=s(P,"P",{});var wa=i(Fo);$d=r(wa,"This model is also a PyTorch "),Po=s(wa,"A",{href:!0,rel:!0});var am=i(Po);jd=r(am,"torch.nn.Module"),am.forEach(t),Md=r(wa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wa.forEach(t),Vd=p(P),Q=s(P,"P",{});var dt=i(Q);Nt=s(dt,"A",{href:!0});var sm=i(Nt);Dd=r(sm,"VisionEncoderDecoderModel"),sm.forEach(t),qd=r(dt,` is a generic model class that will be instantiated as a transformer architecture with
one of the base vision model classes of the library as encoder and another one as decoder when created with the
:meth`),Jn=s(dt,"EM",{});var im=i(Jn);zd=r(im,"~transformers.AutoModel.from_pretrained"),im.forEach(t),Fd=r(dt,` class method for the encoder and
:meth`),Kn=s(dt,"EM",{});var dm=i(Kn);Pd=r(dm,"~transformers.AutoModelForCausalLM.from_pretrained"),dm.forEach(t),Ad=r(dt," class method for the decoder."),dt.forEach(t),Cd=p(P),O=s(P,"DIV",{class:!0});var Qe=i(O);w(Ao.$$.fragment,Qe),Sd=p(Qe),ge=s(Qe,"P",{});var an=i(ge);Id=r(an,"The "),Ot=s(an,"A",{href:!0});var cm=i(Ot);Ld=r(cm,"VisionEncoderDecoderModel"),cm.forEach(t),Nd=r(an," forward method, overrides the "),Qn=s(an,"CODE",{});var lm=i(Qn);Od=r(lm,"__call__"),lm.forEach(t),Rd=r(an," special method."),an.forEach(t),Bd=p(Qe),w(Le.$$.fragment,Qe),Gd=p(Qe),w(Ne.$$.fragment,Qe),Qe.forEach(t),Wd=p(P),R=s(P,"DIV",{class:!0});var Xe=i(R);w(Co.$$.fragment,Xe),Hd=p(Xe),Xn=s(Xe,"P",{});var pm=i(Xn);Ud=r(pm,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),pm.forEach(t),Zd=p(Xe),ue=s(Xe,"P",{});var sn=i(ue);Yd=r(sn,"The model is set in evaluation mode by default using "),er=s(sn,"CODE",{});var mm=i(er);Jd=r(mm,"model.eval()"),mm.forEach(t),Kd=r(sn,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),or=s(sn,"CODE",{});var hm=i(or);Qd=r(hm,"model.train()"),hm.forEach(t),Xd=r(sn,"."),sn.forEach(t),ec=p(Xe),w(Oe.$$.fragment,Xe),Xe.forEach(t),P.forEach(t),Yr=p(o),_e=s(o,"H2",{class:!0});var Ea=i(_e);Re=s(Ea,"A",{id:!0,class:!0,href:!0});var fm=i(Re);tr=s(fm,"SPAN",{});var gm=i(tr);w(So.$$.fragment,gm),gm.forEach(t),fm.forEach(t),oc=p(Ea),nr=s(Ea,"SPAN",{});var um=i(nr);tc=r(um,"TFVisionEncoderDecoderModel"),um.forEach(t),Ea.forEach(t),Jr=p(o),D=s(o,"DIV",{class:!0});var A=i(D);w(Io.$$.fragment,A),nc=p(A),ve=s(A,"P",{});var dn=i(ve);rc=r(dn,`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Rt=s(dn,"A",{href:!0});var _m=i(Rt);ac=r(_m,"from_pretrained()"),_m.forEach(t),sc=r(dn," function and the decoder is loaded via "),Bt=s(dn,"A",{href:!0});var vm=i(Bt);ic=r(vm,"from_pretrained()"),vm.forEach(t),dc=r(dn,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),dn.forEach(t),cc=p(A),Lo=s(A,"P",{});var Ta=i(Lo);lc=r(Ta,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),No=s(Ta,"A",{href:!0,rel:!0});var bm=i(No);pc=r(bm,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),bm.forEach(t),mc=r(Ta,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Ta.forEach(t),hc=p(A),Oo=s(A,"P",{});var ya=i(Oo);fc=r(ya,"Additionally, in "),Ro=s(ya,"A",{href:!0,rel:!0});var wm=i(Ro);gc=r(wm,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),wm.forEach(t),uc=r(ya,` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),ya.forEach(t),_c=p(A),rr=s(A,"P",{});var Em=i(rr);vc=r(Em,`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Em.forEach(t),bc=p(A),Bo=s(A,"P",{});var ka=i(Bo);wc=r(ka,"This model inherits from "),Gt=s(ka,"A",{href:!0});var Tm=i(Gt);Ec=r(Tm,"TFPreTrainedModel"),Tm.forEach(t),Tc=r(ka,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ka.forEach(t),yc=p(A),Go=s(A,"P",{});var xa=i(Go);kc=r(xa,"This model is also a "),Wo=s(xa,"A",{href:!0,rel:!0});var ym=i(Wo);xc=r(ym,"tf.keras.Model"),ym.forEach(t),$c=r(xa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xa.forEach(t),jc=p(A),X=s(A,"P",{});var ct=i(X);Wt=s(ct,"A",{href:!0});var km=i(Wt);Mc=r(km,"TFVisionEncoderDecoderModel"),km.forEach(t),Vc=r(ct,` is a generic model class that will be instantiated as a transformer architecture
with one of the base vision model classes of the library as encoder and another one of the base model classes as
decoder when created with the `),Ht=s(ct,"A",{href:!0});var xm=i(Ht);Dc=r(xm,"from_pretrained()"),xm.forEach(t),qc=r(ct,` class method for the encoder and
`),Ut=s(ct,"A",{href:!0});var $m=i(Ut);zc=r($m,"from_pretrained()"),$m.forEach(t),Fc=r(ct," class method for the decoder."),ct.forEach(t),Pc=p(A),B=s(A,"DIV",{class:!0});var eo=i(B);w(Ho.$$.fragment,eo),Ac=p(eo),be=s(eo,"P",{});var cn=i(be);Cc=r(cn,"The "),Zt=s(cn,"A",{href:!0});var jm=i(Zt);Sc=r(jm,"TFVisionEncoderDecoderModel"),jm.forEach(t),Ic=r(cn," forward method, overrides the "),ar=s(cn,"CODE",{});var Mm=i(ar);Lc=r(Mm,"__call__"),Mm.forEach(t),Nc=r(cn," special method."),cn.forEach(t),Oc=p(eo),w(Be.$$.fragment,eo),Rc=p(eo),w(Ge.$$.fragment,eo),eo.forEach(t),Bc=p(A),ee=s(A,"DIV",{class:!0});var ln=i(ee);w(Uo.$$.fragment,ln),Gc=p(ln),sr=s(ln,"P",{});var Vm=i(sr);Wc=r(Vm,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Vm.forEach(t),Hc=p(ln),w(We.$$.fragment,ln),ln.forEach(t),A.forEach(t),Kr=p(o),we=s(o,"H2",{class:!0});var $a=i(we);He=s($a,"A",{id:!0,class:!0,href:!0});var Dm=i(He);ir=s(Dm,"SPAN",{});var qm=i(ir);w(Zo.$$.fragment,qm),qm.forEach(t),Dm.forEach(t),Uc=p($a),dr=s($a,"SPAN",{});var zm=i(dr);Zc=r(zm,"FlaxVisionEncoderDecoderModel"),zm.forEach(t),$a.forEach(t),Qr=p(o),q=s(o,"DIV",{class:!0});var C=i(q);w(Yo.$$.fragment,C),Yc=p(C),Ee=s(C,"P",{});var pn=i(Ee);Jc=r(pn,`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Yt=s(pn,"A",{href:!0});var Fm=i(Yt);Kc=r(Fm,"from_pretrained()"),Fm.forEach(t),Qc=r(pn," function and the decoder is loaded via "),Jt=s(pn,"A",{href:!0});var Pm=i(Jt);Xc=r(Pm,"from_pretrained()"),Pm.forEach(t),el=r(pn,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),pn.forEach(t),ol=p(C),Jo=s(C,"P",{});var ja=i(Jo);tl=r(ja,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ko=s(ja,"A",{href:!0,rel:!0});var Am=i(Ko);nl=r(Am,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Am.forEach(t),rl=r(ja,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ja.forEach(t),al=p(C),Qo=s(C,"P",{});var Ma=i(Qo);sl=r(Ma,"Additionally, in "),Xo=s(Ma,"A",{href:!0,rel:!0});var Cm=i(Xo);il=r(Cm,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),Cm.forEach(t),dl=r(Ma,` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),Ma.forEach(t),cl=p(C),cr=s(C,"P",{});var Sm=i(cr);ll=r(Sm,`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Sm.forEach(t),pl=p(C),et=s(C,"P",{});var Va=i(et);ml=r(Va,"This model inherits from "),Kt=s(Va,"A",{href:!0});var Im=i(Kt);hl=r(Im,"FlaxPreTrainedModel"),Im.forEach(t),fl=r(Va,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Va.forEach(t),gl=p(C),ot=s(C,"P",{});var Da=i(ot);ul=r(Da,`This model is also a Flax Linen
`),tt=s(Da,"A",{href:!0,rel:!0});var Lm=i(tt);_l=r(Lm,"flax.nn.Module"),Lm.forEach(t),vl=r(Da,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Da.forEach(t),bl=p(C),oe=s(C,"P",{});var lt=i(oe);Qt=s(lt,"A",{href:!0});var Nm=i(Qt);wl=r(Nm,"FlaxVisionEncoderDecoderModel"),Nm.forEach(t),El=r(lt,` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base vision model classes of the library as encoder module and
another one as decoder module when created with the :meth`),lr=s(lt,"EM",{});var Om=i(lr);Tl=r(Om,"~transformers.FlaxAutoModel.from_pretrained"),Om.forEach(t),yl=r(lt,` class method
for the encoder and :meth`),pr=s(lt,"EM",{});var Rm=i(pr);kl=r(Rm,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Rm.forEach(t),xl=r(lt," class method for the decoder."),lt.forEach(t),$l=p(C),G=s(C,"DIV",{class:!0});var oo=i(G);w(nt.$$.fragment,oo),jl=p(oo),Te=s(oo,"P",{});var mn=i(Te);Ml=r(mn,"The "),Xt=s(mn,"A",{href:!0});var Bm=i(Xt);Vl=r(Bm,"FlaxVisionEncoderDecoderModel"),Bm.forEach(t),Dl=r(mn," forward method, overrides the "),mr=s(mn,"CODE",{});var Gm=i(mr);ql=r(Gm,"__call__"),Gm.forEach(t),zl=r(mn," special method."),mn.forEach(t),Fl=p(oo),w(Ue.$$.fragment,oo),Pl=p(oo),w(Ze.$$.fragment,oo),oo.forEach(t),Al=p(C),te=s(C,"DIV",{class:!0});var hn=i(te);w(rt.$$.fragment,hn),Cl=p(hn),hr=s(hn,"P",{});var Wm=i(hr);Sl=r(Wm,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Wm.forEach(t),Il=p(hn),w(Ye.$$.fragment,hn),hn.forEach(t),C.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(dh)),c(f,"id","vision-encoder-decoder-models"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#vision-encoder-decoder-models"),c(_,"class","relative group"),c(ye,"id","overview"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#overview"),c(ne,"class","relative group"),c(ht,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(ft,"href","vit"),c(gt,"href","beit"),c(ut,"href","deit"),c(_t,"href","swin"),c(vt,"href","roberta"),c(bt,"href","gpt2"),c(wt,"href","bert"),c(Et,"href","distilbert"),c(no,"href","https://arxiv.org/abs/2109.10282"),c(no,"rel","nofollow"),c(Tt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(yt,"href","trocr"),c(kt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c($e,"id","randomly-initializing-visionencoderdecodermodel-from-model-configurations"),c($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($e,"href","#randomly-initializing-visionencoderdecodermodel-from-model-configurations"),c(re,"class","relative group"),c(xt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c($t,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),c(je,"id","initialising-visionencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),c(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(je,"href","#initialising-visionencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),c(ae,"class","relative group"),c(jt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(Mt,"href","swin"),c(Vt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(Me,"href","https://huggingface.co/blog/warm-starting-encoder-decoder"),c(Me,"rel","nofollow"),c(Dt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained"),c(Ve,"id","loading-an-existing-visionencoderdecodermodel-checkpoint-and-perform-inference"),c(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ve,"href","#loading-an-existing-visionencoderdecodermodel-checkpoint-and-perform-inference"),c(se,"class","relative group"),c(qt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(qe,"id","loading-a-pytorch-checkpoint-into-tfvisionencoderdecodermodel"),c(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qe,"href","#loading-a-pytorch-checkpoint-into-tfvisionencoderdecodermodel"),c(ie,"class","relative group"),c(ze,"id","training"),c(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ze,"href","#training"),c(ce,"class","relative group"),c(bo,"href","https://github.com/nielsrogge"),c(bo,"rel","nofollow"),c(wo,"href","https://github.com/ydshieh"),c(wo,"rel","nofollow"),c(Fe,"id","transformers.VisionEncoderDecoderConfig"),c(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fe,"href","#transformers.VisionEncoderDecoderConfig"),c(le,"class","relative group"),c(zt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"),c(Ft,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(Pt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(At,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ct,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"),c(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ie,"id","transformers.VisionEncoderDecoderModel"),c(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ie,"href","#transformers.VisionEncoderDecoderModel"),c(he,"class","relative group"),c(St,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(It,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Vo,"href","https://arxiv.org/abs/1907.12461"),c(Vo,"rel","nofollow"),c(qo,"href","https://arxiv.org/abs/2109.10282"),c(qo,"rel","nofollow"),c(Lt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Po,"rel","nofollow"),c(Nt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(Ot,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Re,"id","transformers.TFVisionEncoderDecoderModel"),c(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Re,"href","#transformers.TFVisionEncoderDecoderModel"),c(_e,"class","relative group"),c(Rt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Bt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(No,"href","https://arxiv.org/abs/1907.12461"),c(No,"rel","nofollow"),c(Ro,"href","https://arxiv.org/abs/2109.10282"),c(Ro,"rel","nofollow"),c(Gt,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Wo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Wo,"rel","nofollow"),c(Wt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.TFVisionEncoderDecoderModel"),c(Ht,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Ut,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Zt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.TFVisionEncoderDecoderModel"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(He,"id","transformers.FlaxVisionEncoderDecoderModel"),c(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(He,"href","#transformers.FlaxVisionEncoderDecoderModel"),c(we,"class","relative group"),c(Yt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Jt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Ko,"href","https://arxiv.org/abs/1907.12461"),c(Ko,"rel","nofollow"),c(Xo,"href","https://arxiv.org/abs/2109.10282"),c(Xo,"rel","nofollow"),c(Kt,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(tt,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(tt,"rel","nofollow"),c(Qt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.FlaxVisionEncoderDecoderModel"),c(Xt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.FlaxVisionEncoderDecoderModel"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,h),g(o,x,m),g(o,_,m),e(_,f),e(f,v),E(d,v,null),e(_,u),e(_,I),e(I,qa),g(o,yr,m),g(o,ne,m),e(ne,ye),e(ye,fn),E(to,fn,null),e(ne,za),e(ne,gn),e(gn,Fa),g(o,kr,m),g(o,$,m),e($,Pa),e($,ht),e(ht,Aa),e($,Ca),e($,un),e(un,Sa),e($,Ia),e($,ft),e(ft,La),e($,Na),e($,gt),e(gt,Oa),e($,Ra),e($,ut),e(ut,Ba),e($,Ga),e($,_t),e(_t,Wa),e($,Ha),e($,_n),e(_n,Ua),e($,Za),e($,vt),e(vt,Ya),e($,Ja),e($,bt),e(bt,Ka),e($,Qa),e($,wt),e(wt,Xa),e($,es),e($,Et),e(Et,os),e($,ts),g(o,xr,m),g(o,ke,m),e(ke,ns),e(ke,no),e(no,rs),e(ke,as),g(o,$r,m),g(o,xe,m),e(xe,ss),e(xe,Tt),e(Tt,is),e(xe,ds),g(o,jr,m),g(o,J,m),e(J,cs),e(J,yt),e(yt,ls),e(J,ps),e(J,kt),e(kt,ms),e(J,hs),g(o,Mr,m),g(o,re,m),e(re,$e),e($e,vn),E(ro,vn,null),e(re,fs),e(re,ao),e(ao,gs),e(ao,bn),e(bn,us),e(ao,_s),g(o,Vr,m),g(o,Z,m),e(Z,xt),e(xt,vs),e(Z,bs),e(Z,$t),e($t,ws),e(Z,Es),e(Z,wn),e(wn,Ts),e(Z,ys),g(o,Dr,m),E(so,o,m),g(o,qr,m),g(o,ae,m),e(ae,je),e(je,En),E(io,En,null),e(ae,ks),e(ae,co),e(co,xs),e(co,Tn),e(Tn,$s),e(co,js),g(o,zr,m),g(o,M,m),e(M,jt),e(jt,Ms),e(M,Vs),e(M,yn),e(yn,Ds),e(M,qs),e(M,Mt),e(Mt,zs),e(M,Fs),e(M,kn),e(kn,Ps),e(M,As),e(M,xn),e(xn,Cs),e(M,Ss),e(M,$n),e($n,Is),e(M,Ls),e(M,Vt),e(Vt,Ns),e(M,Os),e(M,Me),e(Me,Rs),e(Me,jn),e(jn,Bs),e(M,Gs),e(M,Mn),e(Mn,Ws),e(M,Hs),e(M,Dt),e(Dt,Us),e(M,Zs),g(o,Fr,m),E(lo,o,m),g(o,Pr,m),g(o,se,m),e(se,Ve),e(Ve,Vn),E(po,Vn,null),e(se,Ys),e(se,mo),e(mo,Js),e(mo,Dn),e(Dn,Ks),e(mo,Qs),g(o,Ar,m),g(o,L,m),e(L,Xs),e(L,qn),e(qn,ei),e(L,oi),e(L,qt),e(qt,ti),e(L,ni),e(L,zn),e(zn,ri),e(L,ai),g(o,Cr,m),g(o,De,m),e(De,si),e(De,Fn),e(Fn,ii),e(De,di),g(o,Sr,m),E(ho,o,m),g(o,Ir,m),g(o,ie,m),e(ie,qe),e(qe,Pn),E(fo,Pn,null),e(ie,ci),e(ie,go),e(go,li),e(go,An),e(An,pi),e(go,mi),g(o,Lr,m),g(o,de,m),e(de,Cn),e(Cn,hi),e(de,fi),e(de,Sn),e(Sn,gi),e(de,ui),g(o,Nr,m),E(uo,o,m),g(o,Or,m),g(o,ce,m),e(ce,ze),e(ze,In),E(_o,In,null),e(ce,_i),e(ce,Ln),e(Ln,vi),g(o,Rr,m),g(o,N,m),e(N,bi),e(N,Nn),e(Nn,wi),e(N,Ei),e(N,On),e(On,Ti),e(N,yi),e(N,Rn),e(Rn,ki),e(N,xi),g(o,Br,m),E(vo,o,m),g(o,Gr,m),g(o,K,m),e(K,$i),e(K,bo),e(bo,ji),e(K,Mi),e(K,wo),e(wo,Vi),e(K,Di),g(o,Wr,m),g(o,le,m),e(le,Fe),e(Fe,Bn),E(Eo,Bn,null),e(le,qi),e(le,Gn),e(Gn,zi),g(o,Hr,m),g(o,S,m),E(To,S,null),e(S,Fi),e(S,Pe),e(Pe,zt),e(zt,Pi),e(Pe,Ai),e(Pe,Ft),e(Ft,Ci),e(Pe,Si),e(S,Ii),e(S,pe),e(pe,Li),e(pe,Pt),e(Pt,Ni),e(pe,Oi),e(pe,At),e(At,Ri),e(pe,Bi),e(S,Gi),E(Ae,S,null),e(S,Wi),e(S,Ce),E(yo,Ce,null),e(Ce,Hi),e(Ce,ko),e(ko,Ui),e(ko,Ct),e(Ct,Zi),e(ko,Yi),e(S,Ji),e(S,Se),E(xo,Se,null),e(Se,Ki),e(Se,me),e(me,Qi),e(me,Wn),e(Wn,Xi),e(me,ed),e(me,Hn),e(Hn,od),e(me,td),g(o,Ur,m),g(o,he,m),e(he,Ie),e(Ie,Un),E($o,Un,null),e(he,nd),e(he,Zn),e(Zn,rd),g(o,Zr,m),g(o,V,m),E(jo,V,null),e(V,ad),e(V,fe),e(fe,sd),e(fe,St),e(St,id),e(fe,dd),e(fe,It),e(It,cd),e(fe,ld),e(V,pd),e(V,Mo),e(Mo,md),e(Mo,Vo),e(Vo,hd),e(Mo,fd),e(V,gd),e(V,Do),e(Do,ud),e(Do,qo),e(qo,_d),e(Do,vd),e(V,bd),e(V,Yn),e(Yn,wd),e(V,Ed),e(V,zo),e(zo,Td),e(zo,Lt),e(Lt,yd),e(zo,kd),e(V,xd),e(V,Fo),e(Fo,$d),e(Fo,Po),e(Po,jd),e(Fo,Md),e(V,Vd),e(V,Q),e(Q,Nt),e(Nt,Dd),e(Q,qd),e(Q,Jn),e(Jn,zd),e(Q,Fd),e(Q,Kn),e(Kn,Pd),e(Q,Ad),e(V,Cd),e(V,O),E(Ao,O,null),e(O,Sd),e(O,ge),e(ge,Id),e(ge,Ot),e(Ot,Ld),e(ge,Nd),e(ge,Qn),e(Qn,Od),e(ge,Rd),e(O,Bd),E(Le,O,null),e(O,Gd),E(Ne,O,null),e(V,Wd),e(V,R),E(Co,R,null),e(R,Hd),e(R,Xn),e(Xn,Ud),e(R,Zd),e(R,ue),e(ue,Yd),e(ue,er),e(er,Jd),e(ue,Kd),e(ue,or),e(or,Qd),e(ue,Xd),e(R,ec),E(Oe,R,null),g(o,Yr,m),g(o,_e,m),e(_e,Re),e(Re,tr),E(So,tr,null),e(_e,oc),e(_e,nr),e(nr,tc),g(o,Jr,m),g(o,D,m),E(Io,D,null),e(D,nc),e(D,ve),e(ve,rc),e(ve,Rt),e(Rt,ac),e(ve,sc),e(ve,Bt),e(Bt,ic),e(ve,dc),e(D,cc),e(D,Lo),e(Lo,lc),e(Lo,No),e(No,pc),e(Lo,mc),e(D,hc),e(D,Oo),e(Oo,fc),e(Oo,Ro),e(Ro,gc),e(Oo,uc),e(D,_c),e(D,rr),e(rr,vc),e(D,bc),e(D,Bo),e(Bo,wc),e(Bo,Gt),e(Gt,Ec),e(Bo,Tc),e(D,yc),e(D,Go),e(Go,kc),e(Go,Wo),e(Wo,xc),e(Go,$c),e(D,jc),e(D,X),e(X,Wt),e(Wt,Mc),e(X,Vc),e(X,Ht),e(Ht,Dc),e(X,qc),e(X,Ut),e(Ut,zc),e(X,Fc),e(D,Pc),e(D,B),E(Ho,B,null),e(B,Ac),e(B,be),e(be,Cc),e(be,Zt),e(Zt,Sc),e(be,Ic),e(be,ar),e(ar,Lc),e(be,Nc),e(B,Oc),E(Be,B,null),e(B,Rc),E(Ge,B,null),e(D,Bc),e(D,ee),E(Uo,ee,null),e(ee,Gc),e(ee,sr),e(sr,Wc),e(ee,Hc),E(We,ee,null),g(o,Kr,m),g(o,we,m),e(we,He),e(He,ir),E(Zo,ir,null),e(we,Uc),e(we,dr),e(dr,Zc),g(o,Qr,m),g(o,q,m),E(Yo,q,null),e(q,Yc),e(q,Ee),e(Ee,Jc),e(Ee,Yt),e(Yt,Kc),e(Ee,Qc),e(Ee,Jt),e(Jt,Xc),e(Ee,el),e(q,ol),e(q,Jo),e(Jo,tl),e(Jo,Ko),e(Ko,nl),e(Jo,rl),e(q,al),e(q,Qo),e(Qo,sl),e(Qo,Xo),e(Xo,il),e(Qo,dl),e(q,cl),e(q,cr),e(cr,ll),e(q,pl),e(q,et),e(et,ml),e(et,Kt),e(Kt,hl),e(et,fl),e(q,gl),e(q,ot),e(ot,ul),e(ot,tt),e(tt,_l),e(ot,vl),e(q,bl),e(q,oe),e(oe,Qt),e(Qt,wl),e(oe,El),e(oe,lr),e(lr,Tl),e(oe,yl),e(oe,pr),e(pr,kl),e(oe,xl),e(q,$l),e(q,G),E(nt,G,null),e(G,jl),e(G,Te),e(Te,Ml),e(Te,Xt),e(Xt,Vl),e(Te,Dl),e(Te,mr),e(mr,ql),e(Te,zl),e(G,Fl),E(Ue,G,null),e(G,Pl),E(Ze,G,null),e(q,Al),e(q,te),E(rt,te,null),e(te,Cl),e(te,hr),e(hr,Sl),e(te,Il),E(Ye,te,null),Xr=!0},p(o,[m]){const at={};m&2&&(at.$$scope={dirty:m,ctx:o}),Ae.$set(at);const fr={};m&2&&(fr.$$scope={dirty:m,ctx:o}),Le.$set(fr);const gr={};m&2&&(gr.$$scope={dirty:m,ctx:o}),Ne.$set(gr);const ur={};m&2&&(ur.$$scope={dirty:m,ctx:o}),Oe.$set(ur);const st={};m&2&&(st.$$scope={dirty:m,ctx:o}),Be.$set(st);const _r={};m&2&&(_r.$$scope={dirty:m,ctx:o}),Ge.$set(_r);const vr={};m&2&&(vr.$$scope={dirty:m,ctx:o}),We.$set(vr);const br={};m&2&&(br.$$scope={dirty:m,ctx:o}),Ue.$set(br);const j={};m&2&&(j.$$scope={dirty:m,ctx:o}),Ze.$set(j);const wr={};m&2&&(wr.$$scope={dirty:m,ctx:o}),Ye.$set(wr)},i(o){Xr||(T(d.$$.fragment,o),T(to.$$.fragment,o),T(ro.$$.fragment,o),T(so.$$.fragment,o),T(io.$$.fragment,o),T(lo.$$.fragment,o),T(po.$$.fragment,o),T(ho.$$.fragment,o),T(fo.$$.fragment,o),T(uo.$$.fragment,o),T(_o.$$.fragment,o),T(vo.$$.fragment,o),T(Eo.$$.fragment,o),T(To.$$.fragment,o),T(Ae.$$.fragment,o),T(yo.$$.fragment,o),T(xo.$$.fragment,o),T($o.$$.fragment,o),T(jo.$$.fragment,o),T(Ao.$$.fragment,o),T(Le.$$.fragment,o),T(Ne.$$.fragment,o),T(Co.$$.fragment,o),T(Oe.$$.fragment,o),T(So.$$.fragment,o),T(Io.$$.fragment,o),T(Ho.$$.fragment,o),T(Be.$$.fragment,o),T(Ge.$$.fragment,o),T(Uo.$$.fragment,o),T(We.$$.fragment,o),T(Zo.$$.fragment,o),T(Yo.$$.fragment,o),T(nt.$$.fragment,o),T(Ue.$$.fragment,o),T(Ze.$$.fragment,o),T(rt.$$.fragment,o),T(Ye.$$.fragment,o),Xr=!0)},o(o){y(d.$$.fragment,o),y(to.$$.fragment,o),y(ro.$$.fragment,o),y(so.$$.fragment,o),y(io.$$.fragment,o),y(lo.$$.fragment,o),y(po.$$.fragment,o),y(ho.$$.fragment,o),y(fo.$$.fragment,o),y(uo.$$.fragment,o),y(_o.$$.fragment,o),y(vo.$$.fragment,o),y(Eo.$$.fragment,o),y(To.$$.fragment,o),y(Ae.$$.fragment,o),y(yo.$$.fragment,o),y(xo.$$.fragment,o),y($o.$$.fragment,o),y(jo.$$.fragment,o),y(Ao.$$.fragment,o),y(Le.$$.fragment,o),y(Ne.$$.fragment,o),y(Co.$$.fragment,o),y(Oe.$$.fragment,o),y(So.$$.fragment,o),y(Io.$$.fragment,o),y(Ho.$$.fragment,o),y(Be.$$.fragment,o),y(Ge.$$.fragment,o),y(Uo.$$.fragment,o),y(We.$$.fragment,o),y(Zo.$$.fragment,o),y(Yo.$$.fragment,o),y(nt.$$.fragment,o),y(Ue.$$.fragment,o),y(Ze.$$.fragment,o),y(rt.$$.fragment,o),y(Ye.$$.fragment,o),Xr=!1},d(o){t(h),o&&t(x),o&&t(_),k(d),o&&t(yr),o&&t(ne),k(to),o&&t(kr),o&&t($),o&&t(xr),o&&t(ke),o&&t($r),o&&t(xe),o&&t(jr),o&&t(J),o&&t(Mr),o&&t(re),k(ro),o&&t(Vr),o&&t(Z),o&&t(Dr),k(so,o),o&&t(qr),o&&t(ae),k(io),o&&t(zr),o&&t(M),o&&t(Fr),k(lo,o),o&&t(Pr),o&&t(se),k(po),o&&t(Ar),o&&t(L),o&&t(Cr),o&&t(De),o&&t(Sr),k(ho,o),o&&t(Ir),o&&t(ie),k(fo),o&&t(Lr),o&&t(de),o&&t(Nr),k(uo,o),o&&t(Or),o&&t(ce),k(_o),o&&t(Rr),o&&t(N),o&&t(Br),k(vo,o),o&&t(Gr),o&&t(K),o&&t(Wr),o&&t(le),k(Eo),o&&t(Hr),o&&t(S),k(To),k(Ae),k(yo),k(xo),o&&t(Ur),o&&t(he),k($o),o&&t(Zr),o&&t(V),k(jo),k(Ao),k(Le),k(Ne),k(Co),k(Oe),o&&t(Yr),o&&t(_e),k(So),o&&t(Jr),o&&t(D),k(Io),k(Ho),k(Be),k(Ge),k(Uo),k(We),o&&t(Kr),o&&t(we),k(Zo),o&&t(Qr),o&&t(q),k(Yo),k(nt),k(Ue),k(Ze),k(rt),k(Ye)}}}const dh={local:"vision-encoder-decoder-models",sections:[{local:"overview",title:"Overview"},{local:"randomly-initializing-visionencoderdecodermodel-from-model-configurations",title:"Randomly initializing `VisionEncoderDecoderModel` from model configurations."},{local:"initialising-visionencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder",title:"Initialising `VisionEncoderDecoderModel` from a pretrained encoder and a pretrained decoder."},{local:"loading-an-existing-visionencoderdecodermodel-checkpoint-and-perform-inference",title:"Loading an existing `VisionEncoderDecoderModel` checkpoint and perform inference."},{local:"loading-a-pytorch-checkpoint-into-tfvisionencoderdecodermodel",title:"Loading a PyTorch checkpoint into `TFVisionEncoderDecoderModel`."},{local:"training",title:"Training"},{local:"transformers.VisionEncoderDecoderConfig",title:"VisionEncoderDecoderConfig"},{local:"transformers.VisionEncoderDecoderModel",title:"VisionEncoderDecoderModel"},{local:"transformers.TFVisionEncoderDecoderModel",title:"TFVisionEncoderDecoderModel"},{local:"transformers.FlaxVisionEncoderDecoderModel",title:"FlaxVisionEncoderDecoderModel"}],title:"Vision Encoder Decoder Models"};function ch(z){return Jm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class uh extends Hm{constructor(h){super();Um(this,h,ch,ih,Zm,{})}}export{uh as default,dh as metadata};
