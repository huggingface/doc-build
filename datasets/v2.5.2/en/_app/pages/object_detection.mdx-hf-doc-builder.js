import{S as Rt,i as qt,s as Mt,e as n,k as c,w as E,t,M as Nt,c as o,d as e,m,a as p,x as $,h as l,b as h,N as We,G as a,g as i,y as k,L as St,q as I,o as C,B as D,v as Ut}from"../chunks/vendor-hf-doc-builder.js";import{I as Ft}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as G}from"../chunks/CodeBlock-hf-doc-builder.js";function Vt(Ke){let v,Vs,w,O,bs,B,va,us,wa,Ys,b,Ea,R,$a,ka,q,Ia,Ca,Hs,u,Da,js,Oa,Pa,_s,Aa,Ta,Js,M,Ws,P,La,N,ys,za,Ga,Ks,as,Ba,Qs,S,Xs,es,Ra,Zs,f,ts,vs,qa,Ma,Na,ls,ws,Sa,Ua,Fa,ns,Es,Va,Ya,Ha,os,$s,Ja,Wa,Ka,U,ks,Qa,Xa,x,ps,Is,Za,se,ae,rs,Cs,ee,te,le,A,Ds,ne,oe,F,pe,re,ie,g,Os,ce,me,Ps,he,ge,As,fe,de,Ts,xe,be,Ls,ue,je,zs,_e,ye,sa,j,ve,Gs,we,Ee,is,$e,ke,aa,V,ea,Y,Bs,Qe,ta,_,Ie,Rs,Ce,De,qs,Oe,Pe,la,H,Ms,Ae,Te,na,J,oa,T,Le,Ns,ze,Ge,pa,W,ra,K,Ss,Xe,ia,cs,Be,ca,Q,ma,L,Re,ms,qe,Me,ha,X,ga,hs,Ne,fa,Z,da,ss,Us,Ze,xa;return B=new Ft({}),M=new G({props:{code:"pip install -U albumentations opencv-python",highlighted:'pip <span class="hljs-keyword">install</span> -U albumentations opencv-python'}}),S=new G({props:{code:`
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
 <span class="hljs-string">&#x27;width&#x27;</span>: <span class="hljs-number">943</span>}`}}),V=new G({props:{code:`import torch
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
<span class="hljs-meta">... </span>)`}}),J=new G({props:{code:`import albumentations as A
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
<span class="hljs-meta">... </span>)`}}),W=new G({props:{code:`image = torch.tensor(out['image']).flip(-1).permute(2, 0, 1)
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
<span class="hljs-meta">... </span>)`}}),Q=new G({props:{code:`def transforms(examples):
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
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> {<span class="hljs-string">&#x27;image&#x27;</span>: images, <span class="hljs-string">&#x27;bbox&#x27;</span>: bboxes, <span class="hljs-string">&#x27;category&#x27;</span>: categories}`}}),X=new G({props:{code:"ds['train'].set_transform(transforms)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>ds[<span class="hljs-string">&#x27;train&#x27;</span>].set_transform(transforms)'}}),Z=new G({props:{code:`example = ds['train'][10]
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
<span class="hljs-meta">... </span>)`}}),{c(){v=n("meta"),Vs=c(),w=n("h1"),O=n("a"),bs=n("span"),E(B.$$.fragment),va=c(),us=n("span"),wa=t("Object detection"),Ys=c(),b=n("p"),Ea=t("Object detection models identify something in an image, and object detection datasets are used for applications such as autonomous driving and detecting natural hazards like wildfire. This guide will show you how to apply transformations to an object detection dataset following the "),R=n("a"),$a=t("tutorial"),ka=t(" from "),q=n("a"),Ia=t("Albumentations"),Ca=t("."),Hs=c(),u=n("p"),Da=t("To run these examples, make sure you have up-to-date versions of "),js=n("code"),Oa=t("albumentations"),Pa=t(" and "),_s=n("code"),Aa=t("cv2"),Ta=t(" installed:"),Js=c(),E(M.$$.fragment),Ws=c(),P=n("p"),La=t("In this example, you\u2019ll use the "),N=n("a"),ys=n("code"),za=t("cppe-5"),Ga=t(" dataset for identifying medical personal protective equipment (PPE) in the context of the COVID-19 pandemic."),Ks=c(),as=n("p"),Ba=t("Load the dataset and take a look at an example:"),Qs=c(),E(S.$$.fragment),Xs=c(),es=n("p"),Ra=t("The dataset has the following fields:"),Zs=c(),f=n("ul"),ts=n("li"),vs=n("code"),qa=t("image"),Ma=t(": PIL.Image.Image object containing the image."),Na=c(),ls=n("li"),ws=n("code"),Sa=t("image_id"),Ua=t(": The image ID."),Fa=c(),ns=n("li"),Es=n("code"),Va=t("height"),Ya=t(": The image height."),Ha=c(),os=n("li"),$s=n("code"),Ja=t("width"),Wa=t(": The image width."),Ka=c(),U=n("li"),ks=n("code"),Qa=t("objects"),Xa=t(": A dictionary containing bounding box metadata for the objects in the image:"),x=n("ul"),ps=n("li"),Is=n("code"),Za=t("id"),se=t(": The annotation id."),ae=c(),rs=n("li"),Cs=n("code"),ee=t("area"),te=t(": The area of the bounding box."),le=c(),A=n("li"),Ds=n("code"),ne=t("bbox"),oe=t(": The object\u2019s bounding box (in the "),F=n("a"),pe=t("coco"),re=t(" format)."),ie=c(),g=n("li"),Os=n("code"),ce=t("category"),me=t(": The object\u2019s category, with possible values including "),Ps=n("code"),he=t("Coverall (0)"),ge=t(", "),As=n("code"),fe=t("Face_Shield (1)"),de=t(", "),Ts=n("code"),xe=t("Gloves (2)"),be=t(", "),Ls=n("code"),ue=t("Goggles (3)"),je=t(" and "),zs=n("code"),_e=t("Mask (4)"),ye=t("."),sa=c(),j=n("p"),ve=t("You can visualize the "),Gs=n("code"),we=t("bboxes"),Ee=t(" on the image using some internal torch utilities. To do that, you will need to reference the "),is=n("a"),$e=t("ClassLabel"),ke=t(" feature associated with the category IDs so you can look up the string labels:"),aa=c(),E(V.$$.fragment),ea=c(),Y=n("div"),Bs=n("img"),ta=c(),_=n("p"),Ie=t("With "),Rs=n("code"),Ce=t("albumentations"),De=t(", you can apply transforms that will affect the image while also updating the "),qs=n("code"),Oe=t("bboxes"),Pe=t(" accordingly. In this case, the image is resized to (480, 480), flipped horizontally, and brightened."),la=c(),H=n("p"),Ms=n("code"),Ae=t("albumentations"),Te=t(" expects the image to be in BGR format, not RGB, so you\u2019ll have to convert the image before applying the transform."),na=c(),E(J.$$.fragment),oa=c(),T=n("p"),Le=t("Now when you visualize the result, the image should be flipped, but the "),Ns=n("code"),ze=t("bboxes"),Ge=t(" should still be in the right places."),pa=c(),E(W.$$.fragment),ra=c(),K=n("div"),Ss=n("img"),ia=c(),cs=n("p"),Be=t("Create a function to apply the transform to a batch of examples:"),ca=c(),E(Q.$$.fragment),ma=c(),L=n("p"),Re=t("Use the "),ms=n("a"),qe=t("set_transform()"),Me=t(" function to apply the transform on-the-fly which consumes less disk space. The randomness of data augmentation may return a different image if you access the same example twice. It is especially useful when training a model for several epochs."),ha=c(),E(X.$$.fragment),ga=c(),hs=n("p"),Ne=t("You can verify the transform works by visualizing the 10th example:"),fa=c(),E(Z.$$.fragment),da=c(),ss=n("div"),Us=n("img"),this.h()},l(s){const r=Nt('[data-svelte="svelte-1phssyn"]',document.head);v=o(r,"META",{name:!0,content:!0}),r.forEach(e),Vs=m(s),w=o(s,"H1",{class:!0});var ba=p(w);O=o(ba,"A",{id:!0,class:!0,href:!0});var st=p(O);bs=o(st,"SPAN",{});var at=p(bs);$(B.$$.fragment,at),at.forEach(e),st.forEach(e),va=m(ba),us=o(ba,"SPAN",{});var et=p(us);wa=l(et,"Object detection"),et.forEach(e),ba.forEach(e),Ys=m(s),b=o(s,"P",{});var gs=p(b);Ea=l(gs,"Object detection models identify something in an image, and object detection datasets are used for applications such as autonomous driving and detecting natural hazards like wildfire. This guide will show you how to apply transformations to an object detection dataset following the "),R=o(gs,"A",{href:!0,rel:!0});var tt=p(R);$a=l(tt,"tutorial"),tt.forEach(e),ka=l(gs," from "),q=o(gs,"A",{href:!0,rel:!0});var lt=p(q);Ia=l(lt,"Albumentations"),lt.forEach(e),Ca=l(gs,"."),gs.forEach(e),Hs=m(s),u=o(s,"P",{});var fs=p(u);Da=l(fs,"To run these examples, make sure you have up-to-date versions of "),js=o(fs,"CODE",{});var nt=p(js);Oa=l(nt,"albumentations"),nt.forEach(e),Pa=l(fs," and "),_s=o(fs,"CODE",{});var ot=p(_s);Aa=l(ot,"cv2"),ot.forEach(e),Ta=l(fs," installed:"),fs.forEach(e),Js=m(s),$(M.$$.fragment,s),Ws=m(s),P=o(s,"P",{});var ua=p(P);La=l(ua,"In this example, you\u2019ll use the "),N=o(ua,"A",{href:!0,rel:!0});var pt=p(N);ys=o(pt,"CODE",{});var rt=p(ys);za=l(rt,"cppe-5"),rt.forEach(e),pt.forEach(e),Ga=l(ua," dataset for identifying medical personal protective equipment (PPE) in the context of the COVID-19 pandemic."),ua.forEach(e),Ks=m(s),as=o(s,"P",{});var it=p(as);Ba=l(it,"Load the dataset and take a look at an example:"),it.forEach(e),Qs=m(s),$(S.$$.fragment,s),Xs=m(s),es=o(s,"P",{});var ct=p(es);Ra=l(ct,"The dataset has the following fields:"),ct.forEach(e),Zs=m(s),f=o(s,"UL",{});var y=p(f);ts=o(y,"LI",{});var Se=p(ts);vs=o(Se,"CODE",{});var mt=p(vs);qa=l(mt,"image"),mt.forEach(e),Ma=l(Se,": PIL.Image.Image object containing the image."),Se.forEach(e),Na=m(y),ls=o(y,"LI",{});var Ue=p(ls);ws=o(Ue,"CODE",{});var ht=p(ws);Sa=l(ht,"image_id"),ht.forEach(e),Ua=l(Ue,": The image ID."),Ue.forEach(e),Fa=m(y),ns=o(y,"LI",{});var Fe=p(ns);Es=o(Fe,"CODE",{});var gt=p(Es);Va=l(gt,"height"),gt.forEach(e),Ya=l(Fe,": The image height."),Fe.forEach(e),Ha=m(y),os=o(y,"LI",{});var Ve=p(os);$s=o(Ve,"CODE",{});var ft=p($s);Ja=l(ft,"width"),ft.forEach(e),Wa=l(Ve,": The image width."),Ve.forEach(e),Ka=m(y),U=o(y,"LI",{});var ja=p(U);ks=o(ja,"CODE",{});var dt=p(ks);Qa=l(dt,"objects"),dt.forEach(e),Xa=l(ja,": A dictionary containing bounding box metadata for the objects in the image:"),x=o(ja,"UL",{});var z=p(x);ps=o(z,"LI",{});var Ye=p(ps);Is=o(Ye,"CODE",{});var xt=p(Is);Za=l(xt,"id"),xt.forEach(e),se=l(Ye,": The annotation id."),Ye.forEach(e),ae=m(z),rs=o(z,"LI",{});var He=p(rs);Cs=o(He,"CODE",{});var bt=p(Cs);ee=l(bt,"area"),bt.forEach(e),te=l(He,": The area of the bounding box."),He.forEach(e),le=m(z),A=o(z,"LI",{});var Fs=p(A);Ds=o(Fs,"CODE",{});var ut=p(Ds);ne=l(ut,"bbox"),ut.forEach(e),oe=l(Fs,": The object\u2019s bounding box (in the "),F=o(Fs,"A",{href:!0,rel:!0});var jt=p(F);pe=l(jt,"coco"),jt.forEach(e),re=l(Fs," format)."),Fs.forEach(e),ie=m(z),g=o(z,"LI",{});var d=p(g);Os=o(d,"CODE",{});var _t=p(Os);ce=l(_t,"category"),_t.forEach(e),me=l(d,": The object\u2019s category, with possible values including "),Ps=o(d,"CODE",{});var yt=p(Ps);he=l(yt,"Coverall (0)"),yt.forEach(e),ge=l(d,", "),As=o(d,"CODE",{});var vt=p(As);fe=l(vt,"Face_Shield (1)"),vt.forEach(e),de=l(d,", "),Ts=o(d,"CODE",{});var wt=p(Ts);xe=l(wt,"Gloves (2)"),wt.forEach(e),be=l(d,", "),Ls=o(d,"CODE",{});var Et=p(Ls);ue=l(Et,"Goggles (3)"),Et.forEach(e),je=l(d," and "),zs=o(d,"CODE",{});var $t=p(zs);_e=l($t,"Mask (4)"),$t.forEach(e),ye=l(d,"."),d.forEach(e),z.forEach(e),ja.forEach(e),y.forEach(e),sa=m(s),j=o(s,"P",{});var ds=p(j);ve=l(ds,"You can visualize the "),Gs=o(ds,"CODE",{});var kt=p(Gs);we=l(kt,"bboxes"),kt.forEach(e),Ee=l(ds," on the image using some internal torch utilities. To do that, you will need to reference the "),is=o(ds,"A",{href:!0});var It=p(is);$e=l(It,"ClassLabel"),It.forEach(e),ke=l(ds," feature associated with the category IDs so you can look up the string labels:"),ds.forEach(e),aa=m(s),$(V.$$.fragment,s),ea=m(s),Y=o(s,"DIV",{class:!0});var Ct=p(Y);Bs=o(Ct,"IMG",{src:!0}),Ct.forEach(e),ta=m(s),_=o(s,"P",{});var xs=p(_);Ie=l(xs,"With "),Rs=o(xs,"CODE",{});var Dt=p(Rs);Ce=l(Dt,"albumentations"),Dt.forEach(e),De=l(xs,", you can apply transforms that will affect the image while also updating the "),qs=o(xs,"CODE",{});var Ot=p(qs);Oe=l(Ot,"bboxes"),Ot.forEach(e),Pe=l(xs," accordingly. In this case, the image is resized to (480, 480), flipped horizontally, and brightened."),xs.forEach(e),la=m(s),H=o(s,"P",{});var Je=p(H);Ms=o(Je,"CODE",{});var Pt=p(Ms);Ae=l(Pt,"albumentations"),Pt.forEach(e),Te=l(Je," expects the image to be in BGR format, not RGB, so you\u2019ll have to convert the image before applying the transform."),Je.forEach(e),na=m(s),$(J.$$.fragment,s),oa=m(s),T=o(s,"P",{});var _a=p(T);Le=l(_a,"Now when you visualize the result, the image should be flipped, but the "),Ns=o(_a,"CODE",{});var At=p(Ns);ze=l(At,"bboxes"),At.forEach(e),Ge=l(_a," should still be in the right places."),_a.forEach(e),pa=m(s),$(W.$$.fragment,s),ra=m(s),K=o(s,"DIV",{class:!0});var Tt=p(K);Ss=o(Tt,"IMG",{src:!0}),Tt.forEach(e),ia=m(s),cs=o(s,"P",{});var Lt=p(cs);Be=l(Lt,"Create a function to apply the transform to a batch of examples:"),Lt.forEach(e),ca=m(s),$(Q.$$.fragment,s),ma=m(s),L=o(s,"P",{});var ya=p(L);Re=l(ya,"Use the "),ms=o(ya,"A",{href:!0});var zt=p(ms);qe=l(zt,"set_transform()"),zt.forEach(e),Me=l(ya," function to apply the transform on-the-fly which consumes less disk space. The randomness of data augmentation may return a different image if you access the same example twice. It is especially useful when training a model for several epochs."),ya.forEach(e),ha=m(s),$(X.$$.fragment,s),ga=m(s),hs=o(s,"P",{});var Gt=p(hs);Ne=l(Gt,"You can verify the transform works by visualizing the 10th example:"),Gt.forEach(e),fa=m(s),$(Z.$$.fragment,s),da=m(s),ss=o(s,"DIV",{class:!0});var Bt=p(ss);Us=o(Bt,"IMG",{src:!0}),Bt.forEach(e),this.h()},h(){h(v,"name","hf:doc:metadata"),h(v,"content",JSON.stringify(Yt)),h(O,"id","object-detection"),h(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(O,"href","#object-detection"),h(w,"class","relative group"),h(R,"href","https://albumentations.ai/docs/examples/example_bboxes/"),h(R,"rel","nofollow"),h(q,"href","https://albumentations.ai/docs/"),h(q,"rel","nofollow"),h(N,"href","https://huggingface.co/datasets/cppe-5"),h(N,"rel","nofollow"),h(F,"href","https://albumentations.ai/docs/getting_started/bounding_boxes_augmentation/#coco"),h(F,"rel","nofollow"),h(is,"href","/docs/datasets/v2.5.2/en/package_reference/main_classes#datasets.ClassLabel"),We(Bs.src,Qe="https://huggingface.co/datasets/nateraw/documentation-images/resolve/main/visualize_detection_example.png")||h(Bs,"src",Qe),h(Y,"class","flex justify-center"),We(Ss.src,Xe="https://huggingface.co/datasets/nateraw/documentation-images/resolve/main/visualize_detection_example_transformed.png")||h(Ss,"src",Xe),h(K,"class","flex justify-center"),h(ms,"href","/docs/datasets/v2.5.2/en/package_reference/main_classes#datasets.Dataset.set_transform"),We(Us.src,Ze="https://huggingface.co/datasets/nateraw/documentation-images/resolve/main/visualize_detection_example_transformed_2.png")||h(Us,"src",Ze),h(ss,"class","flex justify-center")},m(s,r){a(document.head,v),i(s,Vs,r),i(s,w,r),a(w,O),a(O,bs),k(B,bs,null),a(w,va),a(w,us),a(us,wa),i(s,Ys,r),i(s,b,r),a(b,Ea),a(b,R),a(R,$a),a(b,ka),a(b,q),a(q,Ia),a(b,Ca),i(s,Hs,r),i(s,u,r),a(u,Da),a(u,js),a(js,Oa),a(u,Pa),a(u,_s),a(_s,Aa),a(u,Ta),i(s,Js,r),k(M,s,r),i(s,Ws,r),i(s,P,r),a(P,La),a(P,N),a(N,ys),a(ys,za),a(P,Ga),i(s,Ks,r),i(s,as,r),a(as,Ba),i(s,Qs,r),k(S,s,r),i(s,Xs,r),i(s,es,r),a(es,Ra),i(s,Zs,r),i(s,f,r),a(f,ts),a(ts,vs),a(vs,qa),a(ts,Ma),a(f,Na),a(f,ls),a(ls,ws),a(ws,Sa),a(ls,Ua),a(f,Fa),a(f,ns),a(ns,Es),a(Es,Va),a(ns,Ya),a(f,Ha),a(f,os),a(os,$s),a($s,Ja),a(os,Wa),a(f,Ka),a(f,U),a(U,ks),a(ks,Qa),a(U,Xa),a(U,x),a(x,ps),a(ps,Is),a(Is,Za),a(ps,se),a(x,ae),a(x,rs),a(rs,Cs),a(Cs,ee),a(rs,te),a(x,le),a(x,A),a(A,Ds),a(Ds,ne),a(A,oe),a(A,F),a(F,pe),a(A,re),a(x,ie),a(x,g),a(g,Os),a(Os,ce),a(g,me),a(g,Ps),a(Ps,he),a(g,ge),a(g,As),a(As,fe),a(g,de),a(g,Ts),a(Ts,xe),a(g,be),a(g,Ls),a(Ls,ue),a(g,je),a(g,zs),a(zs,_e),a(g,ye),i(s,sa,r),i(s,j,r),a(j,ve),a(j,Gs),a(Gs,we),a(j,Ee),a(j,is),a(is,$e),a(j,ke),i(s,aa,r),k(V,s,r),i(s,ea,r),i(s,Y,r),a(Y,Bs),i(s,ta,r),i(s,_,r),a(_,Ie),a(_,Rs),a(Rs,Ce),a(_,De),a(_,qs),a(qs,Oe),a(_,Pe),i(s,la,r),i(s,H,r),a(H,Ms),a(Ms,Ae),a(H,Te),i(s,na,r),k(J,s,r),i(s,oa,r),i(s,T,r),a(T,Le),a(T,Ns),a(Ns,ze),a(T,Ge),i(s,pa,r),k(W,s,r),i(s,ra,r),i(s,K,r),a(K,Ss),i(s,ia,r),i(s,cs,r),a(cs,Be),i(s,ca,r),k(Q,s,r),i(s,ma,r),i(s,L,r),a(L,Re),a(L,ms),a(ms,qe),a(L,Me),i(s,ha,r),k(X,s,r),i(s,ga,r),i(s,hs,r),a(hs,Ne),i(s,fa,r),k(Z,s,r),i(s,da,r),i(s,ss,r),a(ss,Us),xa=!0},p:St,i(s){xa||(I(B.$$.fragment,s),I(M.$$.fragment,s),I(S.$$.fragment,s),I(V.$$.fragment,s),I(J.$$.fragment,s),I(W.$$.fragment,s),I(Q.$$.fragment,s),I(X.$$.fragment,s),I(Z.$$.fragment,s),xa=!0)},o(s){C(B.$$.fragment,s),C(M.$$.fragment,s),C(S.$$.fragment,s),C(V.$$.fragment,s),C(J.$$.fragment,s),C(W.$$.fragment,s),C(Q.$$.fragment,s),C(X.$$.fragment,s),C(Z.$$.fragment,s),xa=!1},d(s){e(v),s&&e(Vs),s&&e(w),D(B),s&&e(Ys),s&&e(b),s&&e(Hs),s&&e(u),s&&e(Js),D(M,s),s&&e(Ws),s&&e(P),s&&e(Ks),s&&e(as),s&&e(Qs),D(S,s),s&&e(Xs),s&&e(es),s&&e(Zs),s&&e(f),s&&e(sa),s&&e(j),s&&e(aa),D(V,s),s&&e(ea),s&&e(Y),s&&e(ta),s&&e(_),s&&e(la),s&&e(H),s&&e(na),D(J,s),s&&e(oa),s&&e(T),s&&e(pa),D(W,s),s&&e(ra),s&&e(K),s&&e(ia),s&&e(cs),s&&e(ca),D(Q,s),s&&e(ma),s&&e(L),s&&e(ha),D(X,s),s&&e(ga),s&&e(hs),s&&e(fa),D(Z,s),s&&e(da),s&&e(ss)}}}const Yt={local:"object-detection",title:"Object detection"};function Ht(Ke){return Ut(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qt extends Rt{constructor(v){super();qt(this,v,Ht,Vt,Mt,{})}}export{Qt as default,Yt as metadata};
