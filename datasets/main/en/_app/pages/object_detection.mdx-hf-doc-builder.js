import{S as Nt,i as St,s as Mt,e as n,k as c,w as I,t,M as Ft,c as o,d as e,m,a as p,x as C,h as l,b as h,N as Xe,G as a,g as i,y as O,q as D,o as P,B as T,v as Ut}from"../chunks/vendor-hf-doc-builder.js";import{T as Yt}from"../chunks/Tip-hf-doc-builder.js";import{I as Vt}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as M}from"../chunks/CodeBlock-hf-doc-builder.js";function Ht(Ws){let f,L,g,j,A;return{c(){f=n("p"),L=t(`Now that you know how to process a dataset for object detection, learn
`),g=n("a"),j=t("how to train an object detection model"),A=t(`
and use it for inference.`),this.h()},l(b){f=o(b,"P",{});var y=p(f);L=l(y,`Now that you know how to process a dataset for object detection, learn
`),g=o(y,"A",{href:!0,rel:!0});var z=p(g);j=l(z,"how to train an object detection model"),z.forEach(e),A=l(y,`
and use it for inference.`),y.forEach(e),this.h()},h(){h(g,"href","https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/YOLOS/Fine_tuning_YOLOS_for_object_detection_on_custom_dataset_(balloon).ipynb"),h(g,"rel","nofollow")},m(b,y){i(b,f,y),a(f,L),a(f,g),a(g,j),a(f,A)},d(b){b&&e(f)}}}function Jt(Ws){let f,L,g,j,A,b,y,z,ka,Ks,v,Ia,F,Ca,Oa,U,Da,Pa,Qs,w,Ta,ws,Aa,La,$s,za,Ga,Xs,Y,Zs,G,Ba,V,Es,Ra,qa,sa,ps,Na,aa,H,ea,rs,Sa,ta,x,is,ks,Ma,Fa,Ua,cs,Is,Ya,Va,Ha,ms,Cs,Ja,Wa,Ka,hs,Os,Qa,Xa,Za,J,Ds,se,ae,_,fs,Ps,ee,te,le,gs,Ts,ne,oe,pe,B,As,re,ie,W,ce,me,he,d,Ls,fe,ge,zs,de,xe,Gs,be,ue,Bs,je,_e,Rs,ye,ve,qs,we,$e,la,$,Ee,Ns,ke,Ie,ds,Ce,Oe,na,K,oa,Q,Ss,Ze,pa,E,De,Ms,Pe,Te,Fs,Ae,Le,ra,X,Us,ze,Ge,ia,Z,ca,R,Be,Ys,Re,qe,ma,ss,ha,as,Vs,st,fa,xs,Ne,ga,es,da,q,Se,bs,Me,Fe,xa,ts,ba,us,Ue,ua,ls,ja,ns,Hs,at,_a,N,ya;return b=new Vt({}),Y=new M({props:{code:"pip install -U albumentations opencv-python",highlighted:'pip <span class="hljs-keyword">install</span> -U albumentations opencv-python'}}),H=new M({props:{code:`
ds = load_dataset("cppe-5")
example = ds['train'][0]
example`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;cppe-5&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = ds[<span class="hljs-string">&#x27;train&#x27;</span>][<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>example
{<span class="hljs-string">&#x27;height&#x27;</span>: <span class="hljs-number">663</span>,
 <span class="hljs-string">&#x27;image&#x27;</span>: &lt;PIL.JpegImagePlugin.JpegImageFile image mode=RGB size=943x663 at <span class="hljs-number">0x7FC3DC756250</span>&gt;,
 <span class="hljs-string">&#x27;image_id&#x27;</span>: <span class="hljs-number">15</span>,
 <span class="hljs-string">&#x27;objects&#x27;</span>: {<span class="hljs-string">&#x27;area&#x27;</span>: [<span class="hljs-number">3796</span>, <span class="hljs-number">1596</span>, <span class="hljs-number">152768</span>, <span class="hljs-number">81002</span>],
  <span class="hljs-string">&#x27;bbox&#x27;</span>: [[<span class="hljs-number">302.0</span>, <span class="hljs-number">109.0</span>, <span class="hljs-number">73.0</span>, <span class="hljs-number">52.0</span>],
   [<span class="hljs-number">810.0</span>, <span class="hljs-number">100.0</span>, <span class="hljs-number">57.0</span>, <span class="hljs-number">28.0</span>],
   [<span class="hljs-number">160.0</span>, <span class="hljs-number">31.0</span>, <span class="hljs-number">248.0</span>, <span class="hljs-number">616.0</span>],
   [<span class="hljs-number">741.0</span>, <span class="hljs-number">68.0</span>, <span class="hljs-number">202.0</span>, <span class="hljs-number">401.0</span>]],
  <span class="hljs-string">&#x27;category&#x27;</span>: [<span class="hljs-number">4</span>, <span class="hljs-number">4</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
  <span class="hljs-string">&#x27;id&#x27;</span>: [<span class="hljs-number">114</span>, <span class="hljs-number">115</span>, <span class="hljs-number">116</span>, <span class="hljs-number">117</span>]},
 <span class="hljs-string">&#x27;width&#x27;</span>: <span class="hljs-number">943</span>}`}}),K=new M({props:{code:`import torch
from torchvision.ops import box_convert
from torchvision.utils import draw_bounding_boxes
from torchvision.transforms.functional import pil_to_tensor, to_pil_image

categories = ds['train'].features['objects'].feature['category']

boxes_xywh = torch.tensor(example['objects']['bbox'])
boxes_xyxy = box_convert(boxes_xywh, 'xywh', 'xyxy')
labels = [categories.int2str(x) for x in example['objects']['category']]
to_pil_image(
    draw_bounding_boxes(
        pil_to_tensor(example['image']),
        boxes_xyxy,
        colors="red",
        labels=labels,
    )
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> torchvision.ops <span class="hljs-keyword">import</span> box_convert
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> torchvision.utils <span class="hljs-keyword">import</span> draw_bounding_boxes
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> torchvision.transforms.functional <span class="hljs-keyword">import</span> pil_to_tensor, to_pil_image

<span class="hljs-meta">&gt;&gt;&gt; </span>categories = ds[<span class="hljs-string">&#x27;train&#x27;</span>].features[<span class="hljs-string">&#x27;objects&#x27;</span>].feature[<span class="hljs-string">&#x27;category&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>boxes_xywh = torch.tensor(example[<span class="hljs-string">&#x27;objects&#x27;</span>][<span class="hljs-string">&#x27;bbox&#x27;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes_xyxy = box_convert(boxes_xywh, <span class="hljs-string">&#x27;xywh&#x27;</span>, <span class="hljs-string">&#x27;xyxy&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = [categories.int2str(x) <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> example[<span class="hljs-string">&#x27;objects&#x27;</span>][<span class="hljs-string">&#x27;category&#x27;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>to_pil_image(
<span class="hljs-meta">... </span>    draw_bounding_boxes(
<span class="hljs-meta">... </span>        pil_to_tensor(example[<span class="hljs-string">&#x27;image&#x27;</span>]),
<span class="hljs-meta">... </span>        boxes_xyxy,
<span class="hljs-meta">... </span>        colors=<span class="hljs-string">&quot;red&quot;</span>,
<span class="hljs-meta">... </span>        labels=labels,
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>)`}}),Z=new M({props:{code:`import albumentations as A
import numpy as np

transform = A.Compose([
    A.Resize(480, 480),
    A.HorizontalFlip(p=1.0),
    A.RandomBrightnessContrast(p=1.0),
], bbox_params=A.BboxParams(format='coco',  label_fields=['category']))

# RGB PIL Image -> BGR Numpy array
image = np.flip(np.array(example['image']), -1)
out = transform(
    image=image,
    bboxes=example['objects']['bbox'],
    category=example['objects']['category'],
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> albumentations <span class="hljs-keyword">as</span> A
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-meta">&gt;&gt;&gt; </span>transform = A.Compose([
<span class="hljs-meta">... </span>    A.Resize(<span class="hljs-number">480</span>, <span class="hljs-number">480</span>),
<span class="hljs-meta">... </span>    A.HorizontalFlip(p=<span class="hljs-number">1.0</span>),
<span class="hljs-meta">... </span>    A.RandomBrightnessContrast(p=<span class="hljs-number">1.0</span>),
<span class="hljs-meta">... </span>], bbox_params=A.BboxParams(<span class="hljs-built_in">format</span>=<span class="hljs-string">&#x27;coco&#x27;</span>,  label_fields=[<span class="hljs-string">&#x27;category&#x27;</span>]))

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># RGB PIL Image -&gt; BGR Numpy array</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = np.flip(np.array(example[<span class="hljs-string">&#x27;image&#x27;</span>]), -<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>out = transform(
<span class="hljs-meta">... </span>    image=image,
<span class="hljs-meta">... </span>    bboxes=example[<span class="hljs-string">&#x27;objects&#x27;</span>][<span class="hljs-string">&#x27;bbox&#x27;</span>],
<span class="hljs-meta">... </span>    category=example[<span class="hljs-string">&#x27;objects&#x27;</span>][<span class="hljs-string">&#x27;category&#x27;</span>],
<span class="hljs-meta">... </span>)`}}),ss=new M({props:{code:`image = torch.tensor(out['image']).flip(-1).permute(2, 0, 1)
boxes_xywh = torch.stack([torch.tensor(x) for x in out['bboxes']])
boxes_xyxy = box_convert(boxes_xywh, 'xywh', 'xyxy')
labels = [categories.int2str(x) for x in out['category']]
to_pil_image(
    draw_bounding_boxes(
        image,
        boxes_xyxy,
        colors='red',
        labels=labels
    )
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>image = torch.tensor(out[<span class="hljs-string">&#x27;image&#x27;</span>]).flip(-<span class="hljs-number">1</span>).permute(<span class="hljs-number">2</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes_xywh = torch.stack([torch.tensor(x) <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> out[<span class="hljs-string">&#x27;bboxes&#x27;</span>]])
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes_xyxy = box_convert(boxes_xywh, <span class="hljs-string">&#x27;xywh&#x27;</span>, <span class="hljs-string">&#x27;xyxy&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = [categories.int2str(x) <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> out[<span class="hljs-string">&#x27;category&#x27;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>to_pil_image(
<span class="hljs-meta">... </span>    draw_bounding_boxes(
<span class="hljs-meta">... </span>        image,
<span class="hljs-meta">... </span>        boxes_xyxy,
<span class="hljs-meta">... </span>        colors=<span class="hljs-string">&#x27;red&#x27;</span>,
<span class="hljs-meta">... </span>        labels=labels
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>)`}}),es=new M({props:{code:`def transforms(examples):
    images, bboxes, categories = [], [], []
    for image, objects in zip(examples['image'], examples['objects']):
        image = np.array(image.convert("RGB"))[:, :, ::-1]
        out = transform(
            image=image,
            bboxes=objects['bbox'],
            category=objects['category']
        )
        images.append(torch.tensor(out['image']).flip(-1).permute(2, 0, 1))
        bboxes.append(torch.tensor(out['bboxes']))
        categories.append(out['category'])
    return {'image': images, 'bbox': bboxes, 'category': categories}`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">transforms</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    images, bboxes, categories = [], [], []
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> image, objects <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(examples[<span class="hljs-string">&#x27;image&#x27;</span>], examples[<span class="hljs-string">&#x27;objects&#x27;</span>]):
<span class="hljs-meta">... </span>        image = np.array(image.convert(<span class="hljs-string">&quot;RGB&quot;</span>))[:, :, ::-<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        out = transform(
<span class="hljs-meta">... </span>            image=image,
<span class="hljs-meta">... </span>            bboxes=objects[<span class="hljs-string">&#x27;bbox&#x27;</span>],
<span class="hljs-meta">... </span>            category=objects[<span class="hljs-string">&#x27;category&#x27;</span>]
<span class="hljs-meta">... </span>        )
<span class="hljs-meta">... </span>        images.append(torch.tensor(out[<span class="hljs-string">&#x27;image&#x27;</span>]).flip(-<span class="hljs-number">1</span>).permute(<span class="hljs-number">2</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>))
<span class="hljs-meta">... </span>        bboxes.append(torch.tensor(out[<span class="hljs-string">&#x27;bboxes&#x27;</span>]))
<span class="hljs-meta">... </span>        categories.append(out[<span class="hljs-string">&#x27;category&#x27;</span>])
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> {<span class="hljs-string">&#x27;image&#x27;</span>: images, <span class="hljs-string">&#x27;bbox&#x27;</span>: bboxes, <span class="hljs-string">&#x27;category&#x27;</span>: categories}`}}),ts=new M({props:{code:"ds['train'].set_transform(transforms)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>ds[<span class="hljs-string">&#x27;train&#x27;</span>].set_transform(transforms)'}}),ls=new M({props:{code:`example = ds['train'][10]
to_pil_image(
    draw_bounding_boxes(
        example['image'],
        box_convert(example['bbox'], 'xywh', 'xyxy'),
        colors='red',
        labels=[categories.int2str(x) for x in example['category']]
    )
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>example = ds[<span class="hljs-string">&#x27;train&#x27;</span>][<span class="hljs-number">10</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>to_pil_image(
<span class="hljs-meta">... </span>    draw_bounding_boxes(
<span class="hljs-meta">... </span>        example[<span class="hljs-string">&#x27;image&#x27;</span>],
<span class="hljs-meta">... </span>        box_convert(example[<span class="hljs-string">&#x27;bbox&#x27;</span>], <span class="hljs-string">&#x27;xywh&#x27;</span>, <span class="hljs-string">&#x27;xyxy&#x27;</span>),
<span class="hljs-meta">... </span>        colors=<span class="hljs-string">&#x27;red&#x27;</span>,
<span class="hljs-meta">... </span>        labels=[categories.int2str(x) <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> example[<span class="hljs-string">&#x27;category&#x27;</span>]]
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>)`}}),N=new Yt({props:{$$slots:{default:[Ht]},$$scope:{ctx:Ws}}}),{c(){f=n("meta"),L=c(),g=n("h1"),j=n("a"),A=n("span"),I(b.$$.fragment),y=c(),z=n("span"),ka=t("Object detection"),Ks=c(),v=n("p"),Ia=t("Object detection models identify something in an image, and object detection datasets are used for applications such as autonomous driving and detecting natural hazards like wildfire. This guide will show you how to apply transformations to an object detection dataset following the "),F=n("a"),Ca=t("tutorial"),Oa=t(" from "),U=n("a"),Da=t("Albumentations"),Pa=t("."),Qs=c(),w=n("p"),Ta=t("To run these examples, make sure you have up-to-date versions of "),ws=n("code"),Aa=t("albumentations"),La=t(" and "),$s=n("code"),za=t("cv2"),Ga=t(" installed:"),Xs=c(),I(Y.$$.fragment),Zs=c(),G=n("p"),Ba=t("In this example, you\u2019ll use the "),V=n("a"),Es=n("code"),Ra=t("cppe-5"),qa=t(" dataset for identifying medical personal protective equipment (PPE) in the context of the COVID-19 pandemic."),sa=c(),ps=n("p"),Na=t("Load the dataset and take a look at an example:"),aa=c(),I(H.$$.fragment),ea=c(),rs=n("p"),Sa=t("The dataset has the following fields:"),ta=c(),x=n("ul"),is=n("li"),ks=n("code"),Ma=t("image"),Fa=t(": PIL.Image.Image object containing the image."),Ua=c(),cs=n("li"),Is=n("code"),Ya=t("image_id"),Va=t(": The image ID."),Ha=c(),ms=n("li"),Cs=n("code"),Ja=t("height"),Wa=t(": The image height."),Ka=c(),hs=n("li"),Os=n("code"),Qa=t("width"),Xa=t(": The image width."),Za=c(),J=n("li"),Ds=n("code"),se=t("objects"),ae=t(": A dictionary containing bounding box metadata for the objects in the image:"),_=n("ul"),fs=n("li"),Ps=n("code"),ee=t("id"),te=t(": The annotation id."),le=c(),gs=n("li"),Ts=n("code"),ne=t("area"),oe=t(": The area of the bounding box."),pe=c(),B=n("li"),As=n("code"),re=t("bbox"),ie=t(": The object\u2019s bounding box (in the "),W=n("a"),ce=t("coco"),me=t(" format)."),he=c(),d=n("li"),Ls=n("code"),fe=t("category"),ge=t(": The object\u2019s category, with possible values including "),zs=n("code"),de=t("Coverall (0)"),xe=t(", "),Gs=n("code"),be=t("Face_Shield (1)"),ue=t(", "),Bs=n("code"),je=t("Gloves (2)"),_e=t(", "),Rs=n("code"),ye=t("Goggles (3)"),ve=t(" and "),qs=n("code"),we=t("Mask (4)"),$e=t("."),la=c(),$=n("p"),Ee=t("You can visualize the "),Ns=n("code"),ke=t("bboxes"),Ie=t(" on the image using some internal torch utilities. To do that, you will need to reference the "),ds=n("a"),Ce=t("ClassLabel"),Oe=t(" feature associated with the category IDs so you can look up the string labels:"),na=c(),I(K.$$.fragment),oa=c(),Q=n("div"),Ss=n("img"),pa=c(),E=n("p"),De=t("With "),Ms=n("code"),Pe=t("albumentations"),Te=t(", you can apply transforms that will affect the image while also updating the "),Fs=n("code"),Ae=t("bboxes"),Le=t(" accordingly. In this case, the image is resized to (480, 480), flipped horizontally, and brightened."),ra=c(),X=n("p"),Us=n("code"),ze=t("albumentations"),Ge=t(" expects the image to be in BGR format, not RGB, so you\u2019ll have to convert the image before applying the transform."),ia=c(),I(Z.$$.fragment),ca=c(),R=n("p"),Be=t("Now when you visualize the result, the image should be flipped, but the "),Ys=n("code"),Re=t("bboxes"),qe=t(" should still be in the right places."),ma=c(),I(ss.$$.fragment),ha=c(),as=n("div"),Vs=n("img"),fa=c(),xs=n("p"),Ne=t("Create a function to apply the transform to a batch of examples:"),ga=c(),I(es.$$.fragment),da=c(),q=n("p"),Se=t("Use the "),bs=n("a"),Me=t("set_transform()"),Fe=t(" function to apply the transform on-the-fly which consumes less disk space. The randomness of data augmentation may return a different image if you access the same example twice. It is especially useful when training a model for several epochs."),xa=c(),I(ts.$$.fragment),ba=c(),us=n("p"),Ue=t("You can verify the transform works by visualizing the 10th example:"),ua=c(),I(ls.$$.fragment),ja=c(),ns=n("div"),Hs=n("img"),_a=c(),I(N.$$.fragment),this.h()},l(s){const r=Ft('[data-svelte="svelte-1phssyn"]',document.head);f=o(r,"META",{name:!0,content:!0}),r.forEach(e),L=m(s),g=o(s,"H1",{class:!0});var os=p(g);j=o(os,"A",{id:!0,class:!0,href:!0});var et=p(j);A=o(et,"SPAN",{});var tt=p(A);C(b.$$.fragment,tt),tt.forEach(e),et.forEach(e),y=m(os),z=o(os,"SPAN",{});var lt=p(z);ka=l(lt,"Object detection"),lt.forEach(e),os.forEach(e),Ks=m(s),v=o(s,"P",{});var js=p(v);Ia=l(js,"Object detection models identify something in an image, and object detection datasets are used for applications such as autonomous driving and detecting natural hazards like wildfire. This guide will show you how to apply transformations to an object detection dataset following the "),F=o(js,"A",{href:!0,rel:!0});var nt=p(F);Ca=l(nt,"tutorial"),nt.forEach(e),Oa=l(js," from "),U=o(js,"A",{href:!0,rel:!0});var ot=p(U);Da=l(ot,"Albumentations"),ot.forEach(e),Pa=l(js,"."),js.forEach(e),Qs=m(s),w=o(s,"P",{});var _s=p(w);Ta=l(_s,"To run these examples, make sure you have up-to-date versions of "),ws=o(_s,"CODE",{});var pt=p(ws);Aa=l(pt,"albumentations"),pt.forEach(e),La=l(_s," and "),$s=o(_s,"CODE",{});var rt=p($s);za=l(rt,"cv2"),rt.forEach(e),Ga=l(_s," installed:"),_s.forEach(e),Xs=m(s),C(Y.$$.fragment,s),Zs=m(s),G=o(s,"P",{});var va=p(G);Ba=l(va,"In this example, you\u2019ll use the "),V=o(va,"A",{href:!0,rel:!0});var it=p(V);Es=o(it,"CODE",{});var ct=p(Es);Ra=l(ct,"cppe-5"),ct.forEach(e),it.forEach(e),qa=l(va," dataset for identifying medical personal protective equipment (PPE) in the context of the COVID-19 pandemic."),va.forEach(e),sa=m(s),ps=o(s,"P",{});var mt=p(ps);Na=l(mt,"Load the dataset and take a look at an example:"),mt.forEach(e),aa=m(s),C(H.$$.fragment,s),ea=m(s),rs=o(s,"P",{});var ht=p(rs);Sa=l(ht,"The dataset has the following fields:"),ht.forEach(e),ta=m(s),x=o(s,"UL",{});var k=p(x);is=o(k,"LI",{});var Ye=p(is);ks=o(Ye,"CODE",{});var ft=p(ks);Ma=l(ft,"image"),ft.forEach(e),Fa=l(Ye,": PIL.Image.Image object containing the image."),Ye.forEach(e),Ua=m(k),cs=o(k,"LI",{});var Ve=p(cs);Is=o(Ve,"CODE",{});var gt=p(Is);Ya=l(gt,"image_id"),gt.forEach(e),Va=l(Ve,": The image ID."),Ve.forEach(e),Ha=m(k),ms=o(k,"LI",{});var He=p(ms);Cs=o(He,"CODE",{});var dt=p(Cs);Ja=l(dt,"height"),dt.forEach(e),Wa=l(He,": The image height."),He.forEach(e),Ka=m(k),hs=o(k,"LI",{});var Je=p(hs);Os=o(Je,"CODE",{});var xt=p(Os);Qa=l(xt,"width"),xt.forEach(e),Xa=l(Je,": The image width."),Je.forEach(e),Za=m(k),J=o(k,"LI",{});var wa=p(J);Ds=o(wa,"CODE",{});var bt=p(Ds);se=l(bt,"objects"),bt.forEach(e),ae=l(wa,": A dictionary containing bounding box metadata for the objects in the image:"),_=o(wa,"UL",{});var S=p(_);fs=o(S,"LI",{});var We=p(fs);Ps=o(We,"CODE",{});var ut=p(Ps);ee=l(ut,"id"),ut.forEach(e),te=l(We,": The annotation id."),We.forEach(e),le=m(S),gs=o(S,"LI",{});var Ke=p(gs);Ts=o(Ke,"CODE",{});var jt=p(Ts);ne=l(jt,"area"),jt.forEach(e),oe=l(Ke,": The area of the bounding box."),Ke.forEach(e),pe=m(S),B=o(S,"LI",{});var Js=p(B);As=o(Js,"CODE",{});var _t=p(As);re=l(_t,"bbox"),_t.forEach(e),ie=l(Js,": The object\u2019s bounding box (in the "),W=o(Js,"A",{href:!0,rel:!0});var yt=p(W);ce=l(yt,"coco"),yt.forEach(e),me=l(Js," format)."),Js.forEach(e),he=m(S),d=o(S,"LI",{});var u=p(d);Ls=o(u,"CODE",{});var vt=p(Ls);fe=l(vt,"category"),vt.forEach(e),ge=l(u,": The object\u2019s category, with possible values including "),zs=o(u,"CODE",{});var wt=p(zs);de=l(wt,"Coverall (0)"),wt.forEach(e),xe=l(u,", "),Gs=o(u,"CODE",{});var $t=p(Gs);be=l($t,"Face_Shield (1)"),$t.forEach(e),ue=l(u,", "),Bs=o(u,"CODE",{});var Et=p(Bs);je=l(Et,"Gloves (2)"),Et.forEach(e),_e=l(u,", "),Rs=o(u,"CODE",{});var kt=p(Rs);ye=l(kt,"Goggles (3)"),kt.forEach(e),ve=l(u," and "),qs=o(u,"CODE",{});var It=p(qs);we=l(It,"Mask (4)"),It.forEach(e),$e=l(u,"."),u.forEach(e),S.forEach(e),wa.forEach(e),k.forEach(e),la=m(s),$=o(s,"P",{});var ys=p($);Ee=l(ys,"You can visualize the "),Ns=o(ys,"CODE",{});var Ct=p(Ns);ke=l(Ct,"bboxes"),Ct.forEach(e),Ie=l(ys," on the image using some internal torch utilities. To do that, you will need to reference the "),ds=o(ys,"A",{href:!0});var Ot=p(ds);Ce=l(Ot,"ClassLabel"),Ot.forEach(e),Oe=l(ys," feature associated with the category IDs so you can look up the string labels:"),ys.forEach(e),na=m(s),C(K.$$.fragment,s),oa=m(s),Q=o(s,"DIV",{class:!0});var Dt=p(Q);Ss=o(Dt,"IMG",{src:!0}),Dt.forEach(e),pa=m(s),E=o(s,"P",{});var vs=p(E);De=l(vs,"With "),Ms=o(vs,"CODE",{});var Pt=p(Ms);Pe=l(Pt,"albumentations"),Pt.forEach(e),Te=l(vs,", you can apply transforms that will affect the image while also updating the "),Fs=o(vs,"CODE",{});var Tt=p(Fs);Ae=l(Tt,"bboxes"),Tt.forEach(e),Le=l(vs," accordingly. In this case, the image is resized to (480, 480), flipped horizontally, and brightened."),vs.forEach(e),ra=m(s),X=o(s,"P",{});var Qe=p(X);Us=o(Qe,"CODE",{});var At=p(Us);ze=l(At,"albumentations"),At.forEach(e),Ge=l(Qe," expects the image to be in BGR format, not RGB, so you\u2019ll have to convert the image before applying the transform."),Qe.forEach(e),ia=m(s),C(Z.$$.fragment,s),ca=m(s),R=o(s,"P",{});var $a=p(R);Be=l($a,"Now when you visualize the result, the image should be flipped, but the "),Ys=o($a,"CODE",{});var Lt=p(Ys);Re=l(Lt,"bboxes"),Lt.forEach(e),qe=l($a," should still be in the right places."),$a.forEach(e),ma=m(s),C(ss.$$.fragment,s),ha=m(s),as=o(s,"DIV",{class:!0});var zt=p(as);Vs=o(zt,"IMG",{src:!0}),zt.forEach(e),fa=m(s),xs=o(s,"P",{});var Gt=p(xs);Ne=l(Gt,"Create a function to apply the transform to a batch of examples:"),Gt.forEach(e),ga=m(s),C(es.$$.fragment,s),da=m(s),q=o(s,"P",{});var Ea=p(q);Se=l(Ea,"Use the "),bs=o(Ea,"A",{href:!0});var Bt=p(bs);Me=l(Bt,"set_transform()"),Bt.forEach(e),Fe=l(Ea," function to apply the transform on-the-fly which consumes less disk space. The randomness of data augmentation may return a different image if you access the same example twice. It is especially useful when training a model for several epochs."),Ea.forEach(e),xa=m(s),C(ts.$$.fragment,s),ba=m(s),us=o(s,"P",{});var Rt=p(us);Ue=l(Rt,"You can verify the transform works by visualizing the 10th example:"),Rt.forEach(e),ua=m(s),C(ls.$$.fragment,s),ja=m(s),ns=o(s,"DIV",{class:!0});var qt=p(ns);Hs=o(qt,"IMG",{src:!0}),qt.forEach(e),_a=m(s),C(N.$$.fragment,s),this.h()},h(){h(f,"name","hf:doc:metadata"),h(f,"content",JSON.stringify(Wt)),h(j,"id","object-detection"),h(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(j,"href","#object-detection"),h(g,"class","relative group"),h(F,"href","https://albumentations.ai/docs/examples/example_bboxes/"),h(F,"rel","nofollow"),h(U,"href","https://albumentations.ai/docs/"),h(U,"rel","nofollow"),h(V,"href","https://huggingface.co/datasets/cppe-5"),h(V,"rel","nofollow"),h(W,"href","https://albumentations.ai/docs/getting_started/bounding_boxes_augmentation/#coco"),h(W,"rel","nofollow"),h(ds,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.ClassLabel"),Xe(Ss.src,Ze="https://huggingface.co/datasets/nateraw/documentation-images/resolve/main/visualize_detection_example.png")||h(Ss,"src",Ze),h(Q,"class","flex justify-center"),Xe(Vs.src,st="https://huggingface.co/datasets/nateraw/documentation-images/resolve/main/visualize_detection_example_transformed.png")||h(Vs,"src",st),h(as,"class","flex justify-center"),h(bs,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Dataset.set_transform"),Xe(Hs.src,at="https://huggingface.co/datasets/nateraw/documentation-images/resolve/main/visualize_detection_example_transformed_2.png")||h(Hs,"src",at),h(ns,"class","flex justify-center")},m(s,r){a(document.head,f),i(s,L,r),i(s,g,r),a(g,j),a(j,A),O(b,A,null),a(g,y),a(g,z),a(z,ka),i(s,Ks,r),i(s,v,r),a(v,Ia),a(v,F),a(F,Ca),a(v,Oa),a(v,U),a(U,Da),a(v,Pa),i(s,Qs,r),i(s,w,r),a(w,Ta),a(w,ws),a(ws,Aa),a(w,La),a(w,$s),a($s,za),a(w,Ga),i(s,Xs,r),O(Y,s,r),i(s,Zs,r),i(s,G,r),a(G,Ba),a(G,V),a(V,Es),a(Es,Ra),a(G,qa),i(s,sa,r),i(s,ps,r),a(ps,Na),i(s,aa,r),O(H,s,r),i(s,ea,r),i(s,rs,r),a(rs,Sa),i(s,ta,r),i(s,x,r),a(x,is),a(is,ks),a(ks,Ma),a(is,Fa),a(x,Ua),a(x,cs),a(cs,Is),a(Is,Ya),a(cs,Va),a(x,Ha),a(x,ms),a(ms,Cs),a(Cs,Ja),a(ms,Wa),a(x,Ka),a(x,hs),a(hs,Os),a(Os,Qa),a(hs,Xa),a(x,Za),a(x,J),a(J,Ds),a(Ds,se),a(J,ae),a(J,_),a(_,fs),a(fs,Ps),a(Ps,ee),a(fs,te),a(_,le),a(_,gs),a(gs,Ts),a(Ts,ne),a(gs,oe),a(_,pe),a(_,B),a(B,As),a(As,re),a(B,ie),a(B,W),a(W,ce),a(B,me),a(_,he),a(_,d),a(d,Ls),a(Ls,fe),a(d,ge),a(d,zs),a(zs,de),a(d,xe),a(d,Gs),a(Gs,be),a(d,ue),a(d,Bs),a(Bs,je),a(d,_e),a(d,Rs),a(Rs,ye),a(d,ve),a(d,qs),a(qs,we),a(d,$e),i(s,la,r),i(s,$,r),a($,Ee),a($,Ns),a(Ns,ke),a($,Ie),a($,ds),a(ds,Ce),a($,Oe),i(s,na,r),O(K,s,r),i(s,oa,r),i(s,Q,r),a(Q,Ss),i(s,pa,r),i(s,E,r),a(E,De),a(E,Ms),a(Ms,Pe),a(E,Te),a(E,Fs),a(Fs,Ae),a(E,Le),i(s,ra,r),i(s,X,r),a(X,Us),a(Us,ze),a(X,Ge),i(s,ia,r),O(Z,s,r),i(s,ca,r),i(s,R,r),a(R,Be),a(R,Ys),a(Ys,Re),a(R,qe),i(s,ma,r),O(ss,s,r),i(s,ha,r),i(s,as,r),a(as,Vs),i(s,fa,r),i(s,xs,r),a(xs,Ne),i(s,ga,r),O(es,s,r),i(s,da,r),i(s,q,r),a(q,Se),a(q,bs),a(bs,Me),a(q,Fe),i(s,xa,r),O(ts,s,r),i(s,ba,r),i(s,us,r),a(us,Ue),i(s,ua,r),O(ls,s,r),i(s,ja,r),i(s,ns,r),a(ns,Hs),i(s,_a,r),O(N,s,r),ya=!0},p(s,[r]){const os={};r&2&&(os.$$scope={dirty:r,ctx:s}),N.$set(os)},i(s){ya||(D(b.$$.fragment,s),D(Y.$$.fragment,s),D(H.$$.fragment,s),D(K.$$.fragment,s),D(Z.$$.fragment,s),D(ss.$$.fragment,s),D(es.$$.fragment,s),D(ts.$$.fragment,s),D(ls.$$.fragment,s),D(N.$$.fragment,s),ya=!0)},o(s){P(b.$$.fragment,s),P(Y.$$.fragment,s),P(H.$$.fragment,s),P(K.$$.fragment,s),P(Z.$$.fragment,s),P(ss.$$.fragment,s),P(es.$$.fragment,s),P(ts.$$.fragment,s),P(ls.$$.fragment,s),P(N.$$.fragment,s),ya=!1},d(s){e(f),s&&e(L),s&&e(g),T(b),s&&e(Ks),s&&e(v),s&&e(Qs),s&&e(w),s&&e(Xs),T(Y,s),s&&e(Zs),s&&e(G),s&&e(sa),s&&e(ps),s&&e(aa),T(H,s),s&&e(ea),s&&e(rs),s&&e(ta),s&&e(x),s&&e(la),s&&e($),s&&e(na),T(K,s),s&&e(oa),s&&e(Q),s&&e(pa),s&&e(E),s&&e(ra),s&&e(X),s&&e(ia),T(Z,s),s&&e(ca),s&&e(R),s&&e(ma),T(ss,s),s&&e(ha),s&&e(as),s&&e(fa),s&&e(xs),s&&e(ga),T(es,s),s&&e(da),s&&e(q),s&&e(xa),T(ts,s),s&&e(ba),s&&e(us),s&&e(ua),T(ls,s),s&&e(ja),s&&e(ns),s&&e(_a),T(N,s)}}}const Wt={local:"object-detection",title:"Object detection"};function Kt(Ws){return Ut(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class al extends Nt{constructor(f){super();St(this,f,Kt,Jt,Mt,{})}}export{al as default,Wt as metadata};
