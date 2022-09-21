import{S as il,i as pl,s as cl,e as h,k as j,w as c,t as g,M as ul,c as _,d as o,m as q,a as k,x as u,h as w,b as P,G as a,g as z,y as f,q as $,o as m,B as d,v as fl,L as b}from"../chunks/vendor-hf-doc-builder.js";import{I as Ie}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as v}from"../chunks/CodeBlock-hf-doc-builder.js";import{T as E,M as y}from"../chunks/TokenizersLanguageContent-hf-doc-builder.js";function $l(l){let t,s;return t=new v({props:{code:`from tokenizers import Tokenizer
tokenizer = Tokenizer.from_file("data/tokenizer-wiki.json")`,highlighted:`<span class="hljs-keyword">from</span> tokenizers <span class="hljs-keyword">import</span> Tokenizer
tokenizer = Tokenizer.from_file(<span class="hljs-string">&quot;data/tokenizer-wiki.json&quot;</span>)`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function ml(l){let t,s;return t=new y({props:{$$slots:{default:[$l]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function dl(l){let t,s;return t=new v({props:{code:`use tokenizers::Tokenizer;
let mut tokenizer = Tokenizer::from_file("data/tokenizer-wiki.json")?;`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::Tokenizer;
<span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">tokenizer</span> = Tokenizer::<span class="hljs-title function_ invoke__">from_file</span>(<span class="hljs-string">&quot;data/tokenizer-wiki.json&quot;</span>)?;`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function hl(l){let t,s;return t=new y({props:{$$slots:{default:[dl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function _l(l){let t,s;return t=new v({props:{code:`let { Tokenizer } = require("tokenizers/bindings/tokenizer");
let tokenizer = Tokenizer.fromFile("data/tokenizer-wiki.json");`,highlighted:`<span class="hljs-keyword">let</span> { <span class="hljs-title class_">Tokenizer</span> } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/tokenizer&quot;</span>);
<span class="hljs-keyword">let</span> tokenizer = <span class="hljs-title class_">Tokenizer</span>.<span class="hljs-title function_">fromFile</span>(<span class="hljs-string">&quot;data/tokenizer-wiki.json&quot;</span>);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function kl(l){let t,s;return t=new y({props:{$$slots:{default:[_l]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function gl(l){let t,s;return t=new v({props:{code:`from tokenizers import normalizers
from tokenizers.normalizers import NFD, StripAccents
normalizer = normalizers.Sequence([NFD(), StripAccents()])`,highlighted:`<span class="hljs-keyword">from</span> tokenizers <span class="hljs-keyword">import</span> normalizers
<span class="hljs-keyword">from</span> tokenizers.normalizers <span class="hljs-keyword">import</span> NFD, StripAccents
normalizer = normalizers.<span class="hljs-type">Sequence</span>([NFD(), StripAccents()])`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function wl(l){let t,s;return t=new y({props:{$$slots:{default:[gl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function zl(l){let t,s;return t=new v({props:{code:`use tokenizers::normalizers::{
    strip::StripAccents, unicode::NFD, utils::Sequence as NormalizerSequence,
};
let normalizer = NormalizerSequence::new(vec![NFD.into(), StripAccents.into()]);`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::normalizers::{
    strip::StripAccents, unicode::NFD, utils::Sequence <span class="hljs-keyword">as</span> NormalizerSequence,
};
<span class="hljs-keyword">let</span> <span class="hljs-variable">normalizer</span> = NormalizerSequence::<span class="hljs-title function_ invoke__">new</span>(<span class="hljs-built_in">vec!</span>[NFD.<span class="hljs-title function_ invoke__">into</span>(), StripAccents.<span class="hljs-title function_ invoke__">into</span>()]);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function jl(l){let t,s;return t=new y({props:{$$slots:{default:[zl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function ql(l){let t,s;return t=new v({props:{code:`let { sequenceNormalizer, nfdNormalizer, stripAccentsNormalizer } = require("tokenizers/bindings/normalizers");
let normalizer = sequenceNormalizer([nfdNormalizer(), stripAccentsNormalizer()]);`,highlighted:`<span class="hljs-keyword">let</span> { sequenceNormalizer, nfdNormalizer, stripAccentsNormalizer } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/normalizers&quot;</span>);
<span class="hljs-keyword">let</span> normalizer = <span class="hljs-title function_">sequenceNormalizer</span>([<span class="hljs-title function_">nfdNormalizer</span>(), <span class="hljs-title function_">stripAccentsNormalizer</span>()]);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function bl(l){let t,s;return t=new y({props:{$$slots:{default:[ql]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function vl(l){let t,s;return t=new v({props:{code:`normalizer.normalize_str("H\xE9ll\xF2 h\xF4w are \xFC?")
# "Hello how are u?"`,highlighted:`normalizer.normalize_str(<span class="hljs-string">&quot;H\xE9ll\xF2 h\xF4w are \xFC?&quot;</span>)
<span class="hljs-comment"># &quot;Hello how are u?&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function yl(l){let t,s;return t=new y({props:{$$slots:{default:[vl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Pl(l){let t,s;return t=new v({props:{code:`use tokenizers::{NormalizedString, Normalizer};
let mut normalized = NormalizedString::from("H\xE9ll\xF2 h\xF4w are \xFC?");
normalizer.normalize(&mut normalized)?;
println!("{}", normalized.get());
// "Hello how are u?"`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::{NormalizedString, Normalizer};
<span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">normalized</span> = NormalizedString::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;H\xE9ll\xF2 h\xF4w are \xFC?&quot;</span>);
normalizer.<span class="hljs-title function_ invoke__">normalize</span>(&amp;<span class="hljs-keyword">mut</span> normalized)?;
<span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, normalized.<span class="hljs-title function_ invoke__">get</span>());
<span class="hljs-comment">// &quot;Hello how are u?&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function El(l){let t,s;return t=new y({props:{$$slots:{default:[Pl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Tl(l){let t,s;return t=new v({props:{code:`let normalized = normalizer.normalizeString("H\xE9ll\xF2 h\xF4w are \xFC?")
// "Hello how are u?"`,highlighted:`<span class="hljs-keyword">let</span> normalized = normalizer.<span class="hljs-title function_">normalizeString</span>(<span class="hljs-string">&quot;H\xE9ll\xF2 h\xF4w are \xFC?&quot;</span>)
<span class="hljs-comment">// &quot;Hello how are u?&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Sl(l){let t,s;return t=new y({props:{$$slots:{default:[Tl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Nl(l){let t,s;return t=new v({props:{code:"tokenizer.normalizer = normalizer",highlighted:"tokenizer.normalizer = normalizer"}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Al(l){let t,s;return t=new y({props:{$$slots:{default:[Nl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Cl(l){let t,s;return t=new v({props:{code:"tokenizer.with_normalizer(normalizer);",highlighted:'tokenizer.<span class="hljs-title function_ invoke__">with_normalizer</span>(normalizer);'}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Dl(l){let t,s;return t=new y({props:{$$slots:{default:[Cl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function xl(l){let t,s;return t=new v({props:{code:"tokenizer.setNormalizer(normalizer)",highlighted:'tokenizer.<span class="hljs-title function_">setNormalizer</span>(normalizer)'}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Wl(l){let t,s;return t=new y({props:{$$slots:{default:[xl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Ll(l){let t,s;return t=new v({props:{code:`from tokenizers.pre_tokenizers import Whitespace
pre_tokenizer = Whitespace()
pre_tokenizer.pre_tokenize_str("Hello! How are you? I'm fine, thank you.")
# [("Hello", (0, 5)), ("!", (5, 6)), ("How", (7, 10)), ("are", (11, 14)), ("you", (15, 18)),
#  ("?", (18, 19)), ("I", (20, 21)), ("'", (21, 22)), ('m', (22, 23)), ("fine", (24, 28)),
#  (",", (28, 29)), ("thank", (30, 35)), ("you", (36, 39)), (".", (39, 40))]`,highlighted:`<span class="hljs-keyword">from</span> tokenizers.pre_tokenizers <span class="hljs-keyword">import</span> Whitespace
pre_tokenizer = Whitespace()
pre_tokenizer.pre_tokenize_str(<span class="hljs-string">&quot;Hello! How are you? I&#x27;m fine, thank you.&quot;</span>)
<span class="hljs-comment"># [(&quot;Hello&quot;, (0, 5)), (&quot;!&quot;, (5, 6)), (&quot;How&quot;, (7, 10)), (&quot;are&quot;, (11, 14)), (&quot;you&quot;, (15, 18)),</span>
<span class="hljs-comment">#  (&quot;?&quot;, (18, 19)), (&quot;I&quot;, (20, 21)), (&quot;&#x27;&quot;, (21, 22)), (&#x27;m&#x27;, (22, 23)), (&quot;fine&quot;, (24, 28)),</span>
<span class="hljs-comment">#  (&quot;,&quot;, (28, 29)), (&quot;thank&quot;, (30, 35)), (&quot;you&quot;, (36, 39)), (&quot;.&quot;, (39, 40))]</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Hl(l){let t,s;return t=new y({props:{$$slots:{default:[Ll]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Ol(l){let t,s;return t=new v({props:{code:`use tokenizers::pre_tokenizers::whitespace::Whitespace;
use tokenizers::{OffsetReferential, OffsetType, PreTokenizedString, PreTokenizer};
let pre_tokenizer = Whitespace::default();
let mut pre_tokenized = PreTokenizedString::from("Hello! How are you? I'm fine, thank you.");
pre_tokenizer.pre_tokenize(&mut pre_tokenized)?;
println!(
    "{:?}",
    pre_tokenized.get_splits(OffsetReferential::Original, OffsetType::Byte)
);
// [("Hello", (0, 5), None), ("!", (5, 6), None), ("How", (7, 10), None),
//  ("are", (11, 14), None), ("you", (15, 18), None), ("?", (18, 19), None),
//  ("I", (20, 21), None), ("\\'", (21, 22), None), ("m", (22, 23), None),
//  ("fine", (24, 28), None), (",", (28, 29), None), ("thank", (30, 35), None),
//  ("you", (36, 39), None), (".", (39, 40), None)]`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::pre_tokenizers::whitespace::Whitespace;
<span class="hljs-keyword">use</span> tokenizers::{OffsetReferential, OffsetType, PreTokenizedString, PreTokenizer};
<span class="hljs-keyword">let</span> <span class="hljs-variable">pre_tokenizer</span> = Whitespace::<span class="hljs-title function_ invoke__">default</span>();
<span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">pre_tokenized</span> = PreTokenizedString::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;Hello! How are you? I&#x27;m fine, thank you.&quot;</span>);
pre_tokenizer.<span class="hljs-title function_ invoke__">pre_tokenize</span>(&amp;<span class="hljs-keyword">mut</span> pre_tokenized)?;
<span class="hljs-built_in">println!</span>(
    <span class="hljs-string">&quot;{:?}&quot;</span>,
    pre_tokenized.<span class="hljs-title function_ invoke__">get_splits</span>(OffsetReferential::Original, OffsetType::Byte)
);
<span class="hljs-comment">// [(&quot;Hello&quot;, (0, 5), None), (&quot;!&quot;, (5, 6), None), (&quot;How&quot;, (7, 10), None),</span>
<span class="hljs-comment">//  (&quot;are&quot;, (11, 14), None), (&quot;you&quot;, (15, 18), None), (&quot;?&quot;, (18, 19), None),</span>
<span class="hljs-comment">//  (&quot;I&quot;, (20, 21), None), (&quot;\\&#x27;&quot;, (21, 22), None), (&quot;m&quot;, (22, 23), None),</span>
<span class="hljs-comment">//  (&quot;fine&quot;, (24, 28), None), (&quot;,&quot;, (28, 29), None), (&quot;thank&quot;, (30, 35), None),</span>
<span class="hljs-comment">//  (&quot;you&quot;, (36, 39), None), (&quot;.&quot;, (39, 40), None)]</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Il(l){let t,s;return t=new y({props:{$$slots:{default:[Ol]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Bl(l){let t,s;return t=new v({props:{code:`let { whitespacePreTokenizer } = require("tokenizers/bindings/pre-tokenizers");
var preTokenizer = whitespacePreTokenizer();
var preTokenized = preTokenizer.preTokenizeString("Hello! How are you? I'm fine, thank you.");`,highlighted:`<span class="hljs-keyword">let</span> { whitespacePreTokenizer } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/pre-tokenizers&quot;</span>);
<span class="hljs-keyword">var</span> preTokenizer = <span class="hljs-title function_">whitespacePreTokenizer</span>();
<span class="hljs-keyword">var</span> preTokenized = preTokenizer.<span class="hljs-title function_">preTokenizeString</span>(<span class="hljs-string">&quot;Hello! How are you? I&#x27;m fine, thank you.&quot;</span>);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Fl(l){let t,s;return t=new y({props:{$$slots:{default:[Bl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Ul(l){let t,s;return t=new v({props:{code:`from tokenizers import pre_tokenizers
from tokenizers.pre_tokenizers import Digits
pre_tokenizer = pre_tokenizers.Sequence([Whitespace(), Digits(individual_digits=True)])
pre_tokenizer.pre_tokenize_str("Call 911!")
# [("Call", (0, 4)), ("9", (5, 6)), ("1", (6, 7)), ("1", (7, 8)), ("!", (8, 9))]`,highlighted:`<span class="hljs-keyword">from</span> tokenizers <span class="hljs-keyword">import</span> pre_tokenizers
<span class="hljs-keyword">from</span> tokenizers.pre_tokenizers <span class="hljs-keyword">import</span> Digits
pre_tokenizer = pre_tokenizers.<span class="hljs-type">Sequence</span>([Whitespace(), Digits(individual_digits=<span class="hljs-literal">True</span>)])
pre_tokenizer.pre_tokenize_str(<span class="hljs-string">&quot;Call 911!&quot;</span>)
<span class="hljs-comment"># [(&quot;Call&quot;, (0, 4)), (&quot;9&quot;, (5, 6)), (&quot;1&quot;, (6, 7)), (&quot;1&quot;, (7, 8)), (&quot;!&quot;, (8, 9))]</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Kl(l){let t,s;return t=new y({props:{$$slots:{default:[Ul]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Rl(l){let t,s;return t=new v({props:{code:`use tokenizers::pre_tokenizers::{digits::Digits, sequence::Sequence};
let pre_tokenizer = Sequence::new(vec![Whitespace::default().into(), Digits::new(true).into()]);
let mut pre_tokenized = PreTokenizedString::from("Call 911!");
pre_tokenizer.pre_tokenize(&mut pre_tokenized)?;
println!(
    "{:?}",
    pre_tokenized.get_splits(OffsetReferential::Original, OffsetType::Byte)
);`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::pre_tokenizers::{digits::Digits, sequence::Sequence};
<span class="hljs-keyword">let</span> <span class="hljs-variable">pre_tokenizer</span> = Sequence::<span class="hljs-title function_ invoke__">new</span>(<span class="hljs-built_in">vec!</span>[Whitespace::<span class="hljs-title function_ invoke__">default</span>().<span class="hljs-title function_ invoke__">into</span>(), Digits::<span class="hljs-title function_ invoke__">new</span>(<span class="hljs-literal">true</span>).<span class="hljs-title function_ invoke__">into</span>()]);
<span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">pre_tokenized</span> = PreTokenizedString::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;Call 911!&quot;</span>);
pre_tokenizer.<span class="hljs-title function_ invoke__">pre_tokenize</span>(&amp;<span class="hljs-keyword">mut</span> pre_tokenized)?;
<span class="hljs-built_in">println!</span>(
    <span class="hljs-string">&quot;{:?}&quot;</span>,
    pre_tokenized.<span class="hljs-title function_ invoke__">get_splits</span>(OffsetReferential::Original, OffsetType::Byte)
);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Ml(l){let t,s;return t=new y({props:{$$slots:{default:[Rl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Yl(l){let t,s;return t=new v({props:{code:`let { sequencePreTokenizer, digitsPreTokenizer } = require("tokenizers/bindings/pre-tokenizers");
var preTokenizer = sequencePreTokenizer([whitespacePreTokenizer(), digitsPreTokenizer(true)]);
var preTokenized = preTokenizer.preTokenizeString("Call 911!");`,highlighted:`<span class="hljs-keyword">let</span> { sequencePreTokenizer, digitsPreTokenizer } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/pre-tokenizers&quot;</span>);
<span class="hljs-keyword">var</span> preTokenizer = <span class="hljs-title function_">sequencePreTokenizer</span>([<span class="hljs-title function_">whitespacePreTokenizer</span>(), <span class="hljs-title function_">digitsPreTokenizer</span>(<span class="hljs-literal">true</span>)]);
<span class="hljs-keyword">var</span> preTokenized = preTokenizer.<span class="hljs-title function_">preTokenizeString</span>(<span class="hljs-string">&quot;Call 911!&quot;</span>);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Gl(l){let t,s;return t=new y({props:{$$slots:{default:[Yl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Jl(l){let t,s;return t=new v({props:{code:"tokenizer.pre_tokenizer = pre_tokenizer",highlighted:"tokenizer.pre_tokenizer = pre_tokenizer"}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Ql(l){let t,s;return t=new y({props:{$$slots:{default:[Jl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Vl(l){let t,s;return t=new v({props:{code:"tokenizer.with_pre_tokenizer(pre_tokenizer);",highlighted:'tokenizer.<span class="hljs-title function_ invoke__">with_pre_tokenizer</span>(pre_tokenizer);'}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Xl(l){let t,s;return t=new y({props:{$$slots:{default:[Vl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Zl(l){let t,s;return t=new v({props:{code:"tokenizer.setPreTokenizer(preTokenizer)",highlighted:'tokenizer.<span class="hljs-title function_">setPreTokenizer</span>(preTokenizer)'}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function ei(l){let t,s;return t=new y({props:{$$slots:{default:[Zl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function ti(l){let t,s;return t=new v({props:{code:`from tokenizers.processors import TemplateProcessing
tokenizer.post_processor = TemplateProcessing(
    single="[CLS] $A [SEP]",
    pair="[CLS] $A [SEP] $B:1 [SEP]:1",
    special_tokens=[("[CLS]", 1), ("[SEP]", 2)],
)`,highlighted:`<span class="hljs-keyword">from</span> tokenizers.processors <span class="hljs-keyword">import</span> TemplateProcessing
tokenizer.post_processor = TemplateProcessing(
    single=<span class="hljs-string">&quot;[CLS] $A [SEP]&quot;</span>,
    pair=<span class="hljs-string">&quot;[CLS] $A [SEP] $B:1 [SEP]:1&quot;</span>,
    special_tokens=[(<span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-number">1</span>), (<span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-number">2</span>)],
)`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function si(l){let t,s;return t=new y({props:{$$slots:{default:[ti]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function ni(l){let t,s;return t=new v({props:{code:`use tokenizers::processors::template::TemplateProcessing;
tokenizer.with_post_processor(
    TemplateProcessing::builder()
        .try_single("[CLS] $A [SEP]")
        .unwrap()
        .try_pair("[CLS] $A [SEP] $B:1 [SEP]:1")
        .unwrap()
        .special_tokens(vec![("[CLS]", 1), ("[SEP]", 2)])
        .build()
        .unwrap(),
);`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::processors::template::TemplateProcessing;
tokenizer.<span class="hljs-title function_ invoke__">with_post_processor</span>(
    TemplateProcessing::<span class="hljs-title function_ invoke__">builder</span>()
        .<span class="hljs-title function_ invoke__">try_single</span>(<span class="hljs-string">&quot;[CLS] $A [SEP]&quot;</span>)
        .<span class="hljs-title function_ invoke__">unwrap</span>()
        .<span class="hljs-title function_ invoke__">try_pair</span>(<span class="hljs-string">&quot;[CLS] $A [SEP] $B:1 [SEP]:1&quot;</span>)
        .<span class="hljs-title function_ invoke__">unwrap</span>()
        .<span class="hljs-title function_ invoke__">special_tokens</span>(<span class="hljs-built_in">vec!</span>[(<span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-number">1</span>), (<span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-number">2</span>)])
        .<span class="hljs-title function_ invoke__">build</span>()
        .<span class="hljs-title function_ invoke__">unwrap</span>(),
);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function ri(l){let t,s;return t=new y({props:{$$slots:{default:[ni]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function oi(l){let t,s;return t=new v({props:{code:`let { templateProcessing } = require("tokenizers/bindings/post-processors");
tokenizer.setPostProcessor(templateProcessing(
    "[CLS] $A [SEP]",
    "[CLS] $A [SEP] $B:1 [SEP]:1",
    [["[CLS]", 1], ["[SEP]", 2]]
));`,highlighted:`<span class="hljs-keyword">let</span> { templateProcessing } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/post-processors&quot;</span>);
tokenizer.<span class="hljs-title function_">setPostProcessor</span>(<span class="hljs-title function_">templateProcessing</span>(
    <span class="hljs-string">&quot;[CLS] $A [SEP]&quot;</span>,
    <span class="hljs-string">&quot;[CLS] $A [SEP] $B:1 [SEP]:1&quot;</span>,
    [[<span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-number">1</span>], [<span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-number">2</span>]]
));`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function ai(l){let t,s;return t=new y({props:{$$slots:{default:[oi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function li(l){let t,s;return t=new v({props:{code:`from tokenizers import Tokenizer
from tokenizers.models import WordPiece
bert_tokenizer = Tokenizer(WordPiece(unk_token="[UNK]"))`,highlighted:`<span class="hljs-keyword">from</span> tokenizers <span class="hljs-keyword">import</span> Tokenizer
<span class="hljs-keyword">from</span> tokenizers.models <span class="hljs-keyword">import</span> WordPiece
bert_tokenizer = Tokenizer(WordPiece(unk_token=<span class="hljs-string">&quot;[UNK]&quot;</span>))`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function ii(l){let t,s;return t=new y({props:{$$slots:{default:[li]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function pi(l){let t,s;return t=new v({props:{code:`use tokenizers::models::wordpiece::WordPiece;
use tokenizers::Tokenizer;
let mut bert_tokenizer = Tokenizer::new(
    WordPiece::builder()
        .unk_token("[UNK]".to_string())
        .build()
        .unwrap(),
);`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::models::wordpiece::WordPiece;
<span class="hljs-keyword">use</span> tokenizers::Tokenizer;
<span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">bert_tokenizer</span> = Tokenizer::<span class="hljs-title function_ invoke__">new</span>(
    WordPiece::<span class="hljs-title function_ invoke__">builder</span>()
        .<span class="hljs-title function_ invoke__">unk_token</span>(<span class="hljs-string">&quot;[UNK]&quot;</span>.<span class="hljs-title function_ invoke__">to_string</span>())
        .<span class="hljs-title function_ invoke__">build</span>()
        .<span class="hljs-title function_ invoke__">unwrap</span>(),
);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function ci(l){let t,s;return t=new y({props:{$$slots:{default:[pi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function ui(l){let t,s;return t=new v({props:{code:`let { Tokenizer } = require("tokenizers/bindings/tokenizer");
let { WordPiece } = require("tokenizers/bindings/models");
let bertTokenizer = new Tokenizer(WordPiece.init({}, { unkToken: "[UNK]" }));`,highlighted:`<span class="hljs-keyword">let</span> { <span class="hljs-title class_">Tokenizer</span> } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/tokenizer&quot;</span>);
<span class="hljs-keyword">let</span> { <span class="hljs-title class_">WordPiece</span> } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/models&quot;</span>);
<span class="hljs-keyword">let</span> bertTokenizer = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Tokenizer</span>(<span class="hljs-title class_">WordPiece</span>.<span class="hljs-title function_">init</span>({}, { <span class="hljs-attr">unkToken</span>: <span class="hljs-string">&quot;[UNK]&quot;</span> }));`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function fi(l){let t,s;return t=new y({props:{$$slots:{default:[ui]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function $i(l){let t,s;return t=new v({props:{code:`from tokenizers import normalizers
from tokenizers.normalizers import Lowercase, NFD, StripAccents
bert_tokenizer.normalizer = normalizers.Sequence([NFD(), Lowercase(), StripAccents()])`,highlighted:`<span class="hljs-keyword">from</span> tokenizers <span class="hljs-keyword">import</span> normalizers
<span class="hljs-keyword">from</span> tokenizers.normalizers <span class="hljs-keyword">import</span> Lowercase, NFD, StripAccents
bert_tokenizer.normalizer = normalizers.<span class="hljs-type">Sequence</span>([NFD(), Lowercase(), StripAccents()])`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function mi(l){let t,s;return t=new y({props:{$$slots:{default:[$i]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function di(l){let t,s;return t=new v({props:{code:`use tokenizers::normalizers::utils::Sequence as NormalizerSequence;
use tokenizers::normalizers::{strip::StripAccents, unicode::NFD, utils::Lowercase};
bert_tokenizer.with_normalizer(NormalizerSequence::new(vec![
    NFD.into(),
    Lowercase.into(),
    StripAccents.into(),
]));`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::normalizers::utils::Sequence <span class="hljs-keyword">as</span> NormalizerSequence;
<span class="hljs-keyword">use</span> tokenizers::normalizers::{strip::StripAccents, unicode::NFD, utils::Lowercase};
bert_tokenizer.<span class="hljs-title function_ invoke__">with_normalizer</span>(NormalizerSequence::<span class="hljs-title function_ invoke__">new</span>(<span class="hljs-built_in">vec!</span>[
    NFD.<span class="hljs-title function_ invoke__">into</span>(),
    Lowercase.<span class="hljs-title function_ invoke__">into</span>(),
    StripAccents.<span class="hljs-title function_ invoke__">into</span>(),
]));`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function hi(l){let t,s;return t=new y({props:{$$slots:{default:[di]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function _i(l){let t,s;return t=new v({props:{code:`let { sequenceNormalizer, lowercaseNormalizer, nfdNormalizer, stripAccentsNormalizer }
    = require("tokenizers/bindings/normalizers");
bertTokenizer.setNormalizer(sequenceNormalizer([
    nfdNormalizer(), lowercaseNormalizer(), stripAccentsNormalizer()
]))`,highlighted:`<span class="hljs-keyword">let</span> { sequenceNormalizer, lowercaseNormalizer, nfdNormalizer, stripAccentsNormalizer }
    = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/normalizers&quot;</span>);
bertTokenizer.<span class="hljs-title function_">setNormalizer</span>(<span class="hljs-title function_">sequenceNormalizer</span>([
    <span class="hljs-title function_">nfdNormalizer</span>(), <span class="hljs-title function_">lowercaseNormalizer</span>(), <span class="hljs-title function_">stripAccentsNormalizer</span>()
]))`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function ki(l){let t,s;return t=new y({props:{$$slots:{default:[_i]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function gi(l){let t,s;return t=new v({props:{code:`from tokenizers.pre_tokenizers import Whitespace
bert_tokenizer.pre_tokenizer = Whitespace()`,highlighted:`<span class="hljs-keyword">from</span> tokenizers.pre_tokenizers <span class="hljs-keyword">import</span> Whitespace
bert_tokenizer.pre_tokenizer = Whitespace()`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function wi(l){let t,s;return t=new y({props:{$$slots:{default:[gi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function zi(l){let t,s;return t=new v({props:{code:`use tokenizers::pre_tokenizers::whitespace::Whitespace;
bert_tokenizer.with_pre_tokenizer(Whitespace::default());`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::pre_tokenizers::whitespace::Whitespace;
bert_tokenizer.<span class="hljs-title function_ invoke__">with_pre_tokenizer</span>(Whitespace::<span class="hljs-title function_ invoke__">default</span>());`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function ji(l){let t,s;return t=new y({props:{$$slots:{default:[zi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function qi(l){let t,s;return t=new v({props:{code:`let { whitespacePreTokenizer } = require("tokenizers/bindings/pre-tokenizers");
bertTokenizer.setPreTokenizer(whitespacePreTokenizer());`,highlighted:`<span class="hljs-keyword">let</span> { whitespacePreTokenizer } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/pre-tokenizers&quot;</span>);
bertTokenizer.<span class="hljs-title function_">setPreTokenizer</span>(<span class="hljs-title function_">whitespacePreTokenizer</span>());`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function bi(l){let t,s;return t=new y({props:{$$slots:{default:[qi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function vi(l){let t,s;return t=new v({props:{code:`from tokenizers.processors import TemplateProcessing
bert_tokenizer.post_processor = TemplateProcessing(
    single="[CLS] $A [SEP]",
    pair="[CLS] $A [SEP] $B:1 [SEP]:1",
    special_tokens=[
        ("[CLS]", 1),
        ("[SEP]", 2),
    ],
)`,highlighted:`<span class="hljs-keyword">from</span> tokenizers.processors <span class="hljs-keyword">import</span> TemplateProcessing
bert_tokenizer.post_processor = TemplateProcessing(
    single=<span class="hljs-string">&quot;[CLS] $A [SEP]&quot;</span>,
    pair=<span class="hljs-string">&quot;[CLS] $A [SEP] $B:1 [SEP]:1&quot;</span>,
    special_tokens=[
        (<span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-number">1</span>),
        (<span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-number">2</span>),
    ],
)`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function yi(l){let t,s;return t=new y({props:{$$slots:{default:[vi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Pi(l){let t,s;return t=new v({props:{code:`use tokenizers::processors::template::TemplateProcessing;
bert_tokenizer.with_post_processor(
    TemplateProcessing::builder()
        .try_single("[CLS] $A [SEP]")
        .unwrap()
        .try_pair("[CLS] $A [SEP] $B:1 [SEP]:1")
        .unwrap()
        .special_tokens(vec![("[CLS]", 1), ("[SEP]", 2)])
        .build()
        .unwrap(),
);`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::processors::template::TemplateProcessing;
bert_tokenizer.<span class="hljs-title function_ invoke__">with_post_processor</span>(
    TemplateProcessing::<span class="hljs-title function_ invoke__">builder</span>()
        .<span class="hljs-title function_ invoke__">try_single</span>(<span class="hljs-string">&quot;[CLS] $A [SEP]&quot;</span>)
        .<span class="hljs-title function_ invoke__">unwrap</span>()
        .<span class="hljs-title function_ invoke__">try_pair</span>(<span class="hljs-string">&quot;[CLS] $A [SEP] $B:1 [SEP]:1&quot;</span>)
        .<span class="hljs-title function_ invoke__">unwrap</span>()
        .<span class="hljs-title function_ invoke__">special_tokens</span>(<span class="hljs-built_in">vec!</span>[(<span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-number">1</span>), (<span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-number">2</span>)])
        .<span class="hljs-title function_ invoke__">build</span>()
        .<span class="hljs-title function_ invoke__">unwrap</span>(),
);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Ei(l){let t,s;return t=new y({props:{$$slots:{default:[Pi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Ti(l){let t,s;return t=new v({props:{code:`let { templateProcessing } = require("tokenizers/bindings/post-processors");
bertTokenizer.setPostProcessor(templateProcessing(
    "[CLS] $A [SEP]",
    "[CLS] $A [SEP] $B:1 [SEP]:1",
    [["[CLS]", 1], ["[SEP]", 2]]
));`,highlighted:`<span class="hljs-keyword">let</span> { templateProcessing } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/post-processors&quot;</span>);
bertTokenizer.<span class="hljs-title function_">setPostProcessor</span>(<span class="hljs-title function_">templateProcessing</span>(
    <span class="hljs-string">&quot;[CLS] $A [SEP]&quot;</span>,
    <span class="hljs-string">&quot;[CLS] $A [SEP] $B:1 [SEP]:1&quot;</span>,
    [[<span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-number">1</span>], [<span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-number">2</span>]]
));`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Si(l){let t,s;return t=new y({props:{$$slots:{default:[Ti]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Ni(l){let t,s;return t=new v({props:{code:`from tokenizers.trainers import WordPieceTrainer
trainer = WordPieceTrainer(
    vocab_size=30522, special_tokens=["[UNK]", "[CLS]", "[SEP]", "[PAD]", "[MASK]"]
)
files = [f"data/wikitext-103-raw/wiki.{split}.raw" for split in ["test", "train", "valid"]]
bert_tokenizer.train(files, trainer)
bert_tokenizer.save("data/bert-wiki.json")`,highlighted:`<span class="hljs-keyword">from</span> tokenizers.trainers <span class="hljs-keyword">import</span> WordPieceTrainer
trainer = WordPieceTrainer(
    vocab_size=<span class="hljs-number">30522</span>, special_tokens=[<span class="hljs-string">&quot;[UNK]&quot;</span>, <span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-string">&quot;[PAD]&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>]
)
files = [<span class="hljs-string">f&quot;data/wikitext-103-raw/wiki.<span class="hljs-subst">{split}</span>.raw&quot;</span> <span class="hljs-keyword">for</span> split <span class="hljs-keyword">in</span> [<span class="hljs-string">&quot;test&quot;</span>, <span class="hljs-string">&quot;train&quot;</span>, <span class="hljs-string">&quot;valid&quot;</span>]]
bert_tokenizer.train(files, trainer)
bert_tokenizer.save(<span class="hljs-string">&quot;data/bert-wiki.json&quot;</span>)`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Ai(l){let t,s;return t=new y({props:{$$slots:{default:[Ni]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Ci(l){let t,s;return t=new v({props:{code:`use tokenizers::models::{wordpiece::WordPieceTrainer, TrainerWrapper};
let mut trainer: TrainerWrapper = WordPieceTrainer::builder()
    .vocab_size(30_522)
    .special_tokens(vec![
        AddedToken::from("[UNK]", true),
        AddedToken::from("[CLS]", true),
        AddedToken::from("[SEP]", true),
        AddedToken::from("[PAD]", true),
        AddedToken::from("[MASK]", true),
    ])
    .build()
    .into();
let files = vec![
    "data/wikitext-103-raw/wiki.train.raw".into(),
    "data/wikitext-103-raw/wiki.test.raw".into(),
    "data/wikitext-103-raw/wiki.valid.raw".into(),
];
bert_tokenizer.train_from_files(&mut trainer, files)?;
bert_tokenizer.save("data/bert-wiki.json", false)?;`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::models::{wordpiece::WordPieceTrainer, TrainerWrapper};
<span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">trainer</span>: TrainerWrapper = WordPieceTrainer::<span class="hljs-title function_ invoke__">builder</span>()
    .<span class="hljs-title function_ invoke__">vocab_size</span>(<span class="hljs-number">30_522</span>)
    .<span class="hljs-title function_ invoke__">special_tokens</span>(<span class="hljs-built_in">vec!</span>[
        AddedToken::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;[UNK]&quot;</span>, <span class="hljs-literal">true</span>),
        AddedToken::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-literal">true</span>),
        AddedToken::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-literal">true</span>),
        AddedToken::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;[PAD]&quot;</span>, <span class="hljs-literal">true</span>),
        AddedToken::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;[MASK]&quot;</span>, <span class="hljs-literal">true</span>),
    ])
    .<span class="hljs-title function_ invoke__">build</span>()
    .<span class="hljs-title function_ invoke__">into</span>();
<span class="hljs-keyword">let</span> <span class="hljs-variable">files</span> = <span class="hljs-built_in">vec!</span>[
    <span class="hljs-string">&quot;data/wikitext-103-raw/wiki.train.raw&quot;</span>.<span class="hljs-title function_ invoke__">into</span>(),
    <span class="hljs-string">&quot;data/wikitext-103-raw/wiki.test.raw&quot;</span>.<span class="hljs-title function_ invoke__">into</span>(),
    <span class="hljs-string">&quot;data/wikitext-103-raw/wiki.valid.raw&quot;</span>.<span class="hljs-title function_ invoke__">into</span>(),
];
bert_tokenizer.<span class="hljs-title function_ invoke__">train_from_files</span>(&amp;<span class="hljs-keyword">mut</span> trainer, files)?;
bert_tokenizer.<span class="hljs-title function_ invoke__">save</span>(<span class="hljs-string">&quot;data/bert-wiki.json&quot;</span>, <span class="hljs-literal">false</span>)?;`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Di(l){let t,s;return t=new y({props:{$$slots:{default:[Ci]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function xi(l){let t,s;return t=new v({props:{code:`let { wordPieceTrainer } = require("tokenizers/bindings/trainers");
let trainer = wordPieceTrainer({
    vocabSize: 30522,
    specialTokens: ["[UNK]", "[CLS]", "[SEP]", "[PAD]", "[MASK]"]
});
let files = ["test", "train", "valid"].map(split => \`data/wikitext-103-raw/wiki.\${split}.raw\`);
bertTokenizer.train(files, trainer);
bertTokenizer.save("data/bert-wiki.json")`,highlighted:`<span class="hljs-keyword">let</span> { wordPieceTrainer } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/trainers&quot;</span>);
<span class="hljs-keyword">let</span> trainer = <span class="hljs-title function_">wordPieceTrainer</span>({
    <span class="hljs-attr">vocabSize</span>: <span class="hljs-number">30522</span>,
    <span class="hljs-attr">specialTokens</span>: [<span class="hljs-string">&quot;[UNK]&quot;</span>, <span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-string">&quot;[PAD]&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>]
});
<span class="hljs-keyword">let</span> files = [<span class="hljs-string">&quot;test&quot;</span>, <span class="hljs-string">&quot;train&quot;</span>, <span class="hljs-string">&quot;valid&quot;</span>].<span class="hljs-title function_">map</span>(<span class="hljs-function"><span class="hljs-params">split</span> =&gt;</span> <span class="hljs-string">\`data/wikitext-103-raw/wiki.<span class="hljs-subst">\${split}</span>.raw\`</span>);
bertTokenizer.<span class="hljs-title function_">train</span>(files, trainer);
bertTokenizer.<span class="hljs-title function_">save</span>(<span class="hljs-string">&quot;data/bert-wiki.json&quot;</span>)`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Wi(l){let t,s;return t=new y({props:{$$slots:{default:[xi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Li(l){let t,s;return t=new v({props:{code:`output = tokenizer.encode("Hello, y'all! How are you \u{1F601} ?")
print(output.ids)
# [1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2]
tokenizer.decode([1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2])
# "Hello , y ' all ! How are you ?"`,highlighted:`output = tokenizer.encode(<span class="hljs-string">&quot;Hello, y&#x27;all! How are you \u{1F601} ?&quot;</span>)
<span class="hljs-built_in">print</span>(output.ids)
<span class="hljs-comment"># [1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2]</span>
tokenizer.decode([<span class="hljs-number">1</span>, <span class="hljs-number">27253</span>, <span class="hljs-number">16</span>, <span class="hljs-number">93</span>, <span class="hljs-number">11</span>, <span class="hljs-number">5097</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7961</span>, <span class="hljs-number">5112</span>, <span class="hljs-number">6218</span>, <span class="hljs-number">0</span>, <span class="hljs-number">35</span>, <span class="hljs-number">2</span>])
<span class="hljs-comment"># &quot;Hello , y &#x27; all ! How are you ?&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Hi(l){let t,s;return t=new y({props:{$$slots:{default:[Li]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Oi(l){let t,s;return t=new v({props:{code:`let output = tokenizer.encode("Hello, y'all! How are you \u{1F601} ?", true)?;
println!("{:?}", output.get_ids());
// [1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2]
let decoded = tokenizer.decode(
    vec![1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2],
    true,
)?;
println!("{}", decoded);
// "Hello , y ' all ! How are you ?"`,highlighted:`<span class="hljs-keyword">let</span> <span class="hljs-variable">output</span> = tokenizer.<span class="hljs-title function_ invoke__">encode</span>(<span class="hljs-string">&quot;Hello, y&#x27;all! How are you \u{1F601} ?&quot;</span>, <span class="hljs-literal">true</span>)?;
<span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{:?}&quot;</span>, output.<span class="hljs-title function_ invoke__">get_ids</span>());
<span class="hljs-comment">// [1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2]</span>
<span class="hljs-keyword">let</span> <span class="hljs-variable">decoded</span> = tokenizer.<span class="hljs-title function_ invoke__">decode</span>(
    <span class="hljs-built_in">vec!</span>[<span class="hljs-number">1</span>, <span class="hljs-number">27253</span>, <span class="hljs-number">16</span>, <span class="hljs-number">93</span>, <span class="hljs-number">11</span>, <span class="hljs-number">5097</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7961</span>, <span class="hljs-number">5112</span>, <span class="hljs-number">6218</span>, <span class="hljs-number">0</span>, <span class="hljs-number">35</span>, <span class="hljs-number">2</span>],
    <span class="hljs-literal">true</span>,
)?;
<span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, decoded);
<span class="hljs-comment">// &quot;Hello , y &#x27; all ! How are you ?&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Ii(l){let t,s;return t=new y({props:{$$slots:{default:[Oi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Bi(l){let t,s;return t=new v({props:{code:`let { promisify } = require('util');
let encode = promisify(tokenizer.encode.bind(tokenizer));
let decode = promisify(tokenizer.decode.bind(tokenizer));
let output = await encode("Hello, y'all! How are you \u{1F601} ?");
console.log(output.getIds());
// [1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2]
let decoded = await decode([1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2], true);
// "Hello , y ' all ! How are you ?"`,highlighted:`<span class="hljs-keyword">let</span> { promisify } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;util&#x27;</span>);
<span class="hljs-keyword">let</span> encode = <span class="hljs-title function_">promisify</span>(tokenizer.<span class="hljs-property">encode</span>.<span class="hljs-title function_">bind</span>(tokenizer));
<span class="hljs-keyword">let</span> decode = <span class="hljs-title function_">promisify</span>(tokenizer.<span class="hljs-property">decode</span>.<span class="hljs-title function_">bind</span>(tokenizer));
<span class="hljs-keyword">let</span> output = <span class="hljs-keyword">await</span> <span class="hljs-title function_">encode</span>(<span class="hljs-string">&quot;Hello, y&#x27;all! How are you \u{1F601} ?&quot;</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(output.<span class="hljs-title function_">getIds</span>());
<span class="hljs-comment">// [1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2]</span>
<span class="hljs-keyword">let</span> decoded = <span class="hljs-keyword">await</span> <span class="hljs-title function_">decode</span>([<span class="hljs-number">1</span>, <span class="hljs-number">27253</span>, <span class="hljs-number">16</span>, <span class="hljs-number">93</span>, <span class="hljs-number">11</span>, <span class="hljs-number">5097</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7961</span>, <span class="hljs-number">5112</span>, <span class="hljs-number">6218</span>, <span class="hljs-number">0</span>, <span class="hljs-number">35</span>, <span class="hljs-number">2</span>], <span class="hljs-literal">true</span>);
<span class="hljs-comment">// &quot;Hello , y &#x27; all ! How are you ?&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Fi(l){let t,s;return t=new y({props:{$$slots:{default:[Bi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Ui(l){let t,s;return t=new v({props:{code:`output = bert_tokenizer.encode("Welcome to the \u{1F917} Tokenizers library.")
print(output.tokens)
# ["[CLS]", "welcome", "to", "the", "[UNK]", "tok", "##eni", "##zer", "##s", "library", ".", "[SEP]"]
bert_tokenizer.decode(output.ids)
# "welcome to the tok ##eni ##zer ##s library ."`,highlighted:`output = bert_tokenizer.encode(<span class="hljs-string">&quot;Welcome to the \u{1F917} Tokenizers library.&quot;</span>)
<span class="hljs-built_in">print</span>(output.tokens)
<span class="hljs-comment"># [&quot;[CLS]&quot;, &quot;welcome&quot;, &quot;to&quot;, &quot;the&quot;, &quot;[UNK]&quot;, &quot;tok&quot;, &quot;##eni&quot;, &quot;##zer&quot;, &quot;##s&quot;, &quot;library&quot;, &quot;.&quot;, &quot;[SEP]&quot;]</span>
bert_tokenizer.decode(output.ids)
<span class="hljs-comment"># &quot;welcome to the tok ##eni ##zer ##s library .&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Ki(l){let t,s;return t=new y({props:{$$slots:{default:[Ui]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Ri(l){let t,s;return t=new v({props:{code:`let output = bert_tokenizer.encode("Welcome to the \u{1F917} Tokenizers library.", true)?;
println!("{:?}", output.get_tokens());
// ["[CLS]", "welcome", "to", "the", "[UNK]", "tok", "##eni", "##zer", "##s", "library", ".", "[SEP]"]
let decoded = bert_tokenizer.decode(output.get_ids().to_vec(), true)?;
println!("{}", decoded);
// "welcome to the tok ##eni ##zer ##s library ."`,highlighted:`<span class="hljs-keyword">let</span> <span class="hljs-variable">output</span> = bert_tokenizer.<span class="hljs-title function_ invoke__">encode</span>(<span class="hljs-string">&quot;Welcome to the \u{1F917} Tokenizers library.&quot;</span>, <span class="hljs-literal">true</span>)?;
<span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{:?}&quot;</span>, output.<span class="hljs-title function_ invoke__">get_tokens</span>());
<span class="hljs-comment">// [&quot;[CLS]&quot;, &quot;welcome&quot;, &quot;to&quot;, &quot;the&quot;, &quot;[UNK]&quot;, &quot;tok&quot;, &quot;##eni&quot;, &quot;##zer&quot;, &quot;##s&quot;, &quot;library&quot;, &quot;.&quot;, &quot;[SEP]&quot;]</span>
<span class="hljs-keyword">let</span> <span class="hljs-variable">decoded</span> = bert_tokenizer.<span class="hljs-title function_ invoke__">decode</span>(output.<span class="hljs-title function_ invoke__">get_ids</span>().<span class="hljs-title function_ invoke__">to_vec</span>(), <span class="hljs-literal">true</span>)?;
<span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, decoded);
<span class="hljs-comment">// &quot;welcome to the tok ##eni ##zer ##s library .&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Mi(l){let t,s;return t=new y({props:{$$slots:{default:[Ri]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Yi(l){let t,s;return t=new v({props:{code:`let { promisify } = require("util");
let encode = promisify(bertTokenizer.encode.bind(bertTokenizer));
let decode = promisify(bertTokenizer.decode.bind(bertTokenizer));
let output = await encode("Welcome to the \u{1F917} Tokenizers library.");
console.log(output.getTokens());
// ["[CLS]", "welcome", "to", "the", "[UNK]", "tok", "##eni", "##zer", "##s", "library", ".", "[SEP]"]
var decoded = await decode(output.getIds(), true);
// "welcome to the tok ##eni ##zer ##s library ."`,highlighted:`<span class="hljs-keyword">let</span> { promisify } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;util&quot;</span>);
<span class="hljs-keyword">let</span> encode = <span class="hljs-title function_">promisify</span>(bertTokenizer.<span class="hljs-property">encode</span>.<span class="hljs-title function_">bind</span>(bertTokenizer));
<span class="hljs-keyword">let</span> decode = <span class="hljs-title function_">promisify</span>(bertTokenizer.<span class="hljs-property">decode</span>.<span class="hljs-title function_">bind</span>(bertTokenizer));
<span class="hljs-keyword">let</span> output = <span class="hljs-keyword">await</span> <span class="hljs-title function_">encode</span>(<span class="hljs-string">&quot;Welcome to the \u{1F917} Tokenizers library.&quot;</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(output.<span class="hljs-title function_">getTokens</span>());
<span class="hljs-comment">// [&quot;[CLS]&quot;, &quot;welcome&quot;, &quot;to&quot;, &quot;the&quot;, &quot;[UNK]&quot;, &quot;tok&quot;, &quot;##eni&quot;, &quot;##zer&quot;, &quot;##s&quot;, &quot;library&quot;, &quot;.&quot;, &quot;[SEP]&quot;]</span>
<span class="hljs-keyword">var</span> decoded = <span class="hljs-keyword">await</span> <span class="hljs-title function_">decode</span>(output.<span class="hljs-title function_">getIds</span>(), <span class="hljs-literal">true</span>);
<span class="hljs-comment">// &quot;welcome to the tok ##eni ##zer ##s library .&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Gi(l){let t,s;return t=new y({props:{$$slots:{default:[Yi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Ji(l){let t,s;return t=new v({props:{code:`from tokenizers import decoders
bert_tokenizer.decoder = decoders.WordPiece()
bert_tokenizer.decode(output.ids)
# "welcome to the tokenizers library."`,highlighted:`<span class="hljs-keyword">from</span> tokenizers <span class="hljs-keyword">import</span> decoders
bert_tokenizer.decoder = decoders.WordPiece()
bert_tokenizer.decode(output.ids)
<span class="hljs-comment"># &quot;welcome to the tokenizers library.&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Qi(l){let t,s;return t=new y({props:{$$slots:{default:[Ji]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Vi(l){let t,s;return t=new v({props:{code:`use tokenizers::decoders::wordpiece::WordPiece as WordPieceDecoder;
bert_tokenizer.with_decoder(WordPieceDecoder::default());
let decoded = bert_tokenizer.decode(output.get_ids().to_vec(), true)?;
// "welcome to the tokenizers library."`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::decoders::wordpiece::WordPiece <span class="hljs-keyword">as</span> WordPieceDecoder;
bert_tokenizer.<span class="hljs-title function_ invoke__">with_decoder</span>(WordPieceDecoder::<span class="hljs-title function_ invoke__">default</span>());
<span class="hljs-keyword">let</span> <span class="hljs-variable">decoded</span> = bert_tokenizer.<span class="hljs-title function_ invoke__">decode</span>(output.<span class="hljs-title function_ invoke__">get_ids</span>().<span class="hljs-title function_ invoke__">to_vec</span>(), <span class="hljs-literal">true</span>)?;
<span class="hljs-comment">// &quot;welcome to the tokenizers library.&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Xi(l){let t,s;return t=new y({props:{$$slots:{default:[Vi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function Zi(l){let t,s;return t=new v({props:{code:`let { wordPieceDecoder } = require("tokenizers/bindings/decoders");
bertTokenizer.setDecoder(wordPieceDecoder());
var decoded = await decode(output.getIds(), true);
// "welcome to the tokenizers library."`,highlighted:`<span class="hljs-keyword">let</span> { wordPieceDecoder } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/decoders&quot;</span>);
bertTokenizer.<span class="hljs-title function_">setDecoder</span>(<span class="hljs-title function_">wordPieceDecoder</span>());
<span class="hljs-keyword">var</span> decoded = <span class="hljs-keyword">await</span> <span class="hljs-title function_">decode</span>(output.<span class="hljs-title function_">getIds</span>(), <span class="hljs-literal">true</span>);
<span class="hljs-comment">// &quot;welcome to the tokenizers library.&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function ep(l){let t,s;return t=new y({props:{$$slots:{default:[Zi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function tp(l){let t,s,e,r,i,Se,Hn,st,On,gs,x,In,nt,Bn,Fn,rt,Un,Kn,ws,T,ot,at,Rn,Mn,lt,it,Yn,Gn,pt,ct,Jn,Qn,ut,ft,Vn,zs,W,Xn,$t,Zn,er,mt,tr,sr,js,L,nr,dt,rr,or,ht,ar,lr,qs,Y,bs,I,G,_t,Ne,ir,kt,pr,vs,J,cr,Ae,ur,fr,ys,H,$r,gt,mr,dr,wt,hr,_r,Ps,Q,Es,Be,kr,Ts,V,Ss,X,gr,zt,wr,zr,Ns,Z,As,Fe,jr,Cs,B,ee,jt,Ce,qr,qt,br,Ds,Ue,vr,xs,te,yr,bt,Pr,Er,Ws,se,Ls,S,Tr,vt,Sr,Nr,yt,Ar,Cr,Pt,Dr,xr,Hs,ne,Wr,Et,Lr,Hr,Os,re,Is,O,Or,Tt,Ir,Br,St,Fr,Ur,Bs,oe,Fs,Ke,Kr,Us,F,ae,Nt,De,Rr,At,Mr,Ks,le,Yr,Ct,Gr,Jr,Rs,Re,Qr,Ms,ie,Vr,Dt,Xr,Zr,Ys,N,xt,Wt,eo,to,Lt,Ht,so,no,Ot,It,ro,oo,Bt,Ft,ao,Gs,xe,lo,Me,io,Js,U,pe,Ut,We,po,Kt,co,Qs,ce,uo,Rt,fo,$o,Vs,ue,mo,Mt,ho,_o,Xs,fe,Zs,Ye,ko,en,K,$e,Yt,Le,go,Gt,wo,tn,me,zo,Jt,jo,qo,sn,de,nn,Ge,bo,rn,he,on,Je,vo,an,_e,ln,Qe,yo,pn,ke,cn,ge,Po,Qt,Eo,To,un,we,fn,R,ze,Vt,He,So,Xt,No,$n,A,Ao,Zt,Co,Do,es,xo,Wo,ts,Lo,Ho,mn,je,Oo,ss,Io,Bo,dn,qe,hn,C,Fo,ns,Uo,Ko,rs,Ro,Mo,os,Yo,Go,_n,be,kn,Ve,Jo,gn,ve,wn;return Se=new Ie({}),Y=new E({props:{python:!0,rust:!0,node:!0,$$slots:{node:[kl],rust:[hl],python:[ml]},$$scope:{ctx:l}}}),Ne=new Ie({}),Q=new E({props:{python:!0,rust:!0,node:!0,$$slots:{node:[bl],rust:[jl],python:[wl]},$$scope:{ctx:l}}}),V=new E({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Sl],rust:[El],python:[yl]},$$scope:{ctx:l}}}),Z=new E({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Wl],rust:[Dl],python:[Al]},$$scope:{ctx:l}}}),Ce=new Ie({}),se=new E({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Fl],rust:[Il],python:[Hl]},$$scope:{ctx:l}}}),re=new E({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Gl],rust:[Ml],python:[Kl]},$$scope:{ctx:l}}}),oe=new E({props:{python:!0,rust:!0,node:!0,$$slots:{node:[ei],rust:[Xl],python:[Ql]},$$scope:{ctx:l}}}),De=new Ie({}),We=new Ie({}),fe=new E({props:{python:!0,rust:!0,node:!0,$$slots:{node:[ai],rust:[ri],python:[si]},$$scope:{ctx:l}}}),Le=new Ie({}),de=new E({props:{python:!0,rust:!0,node:!0,$$slots:{node:[fi],rust:[ci],python:[ii]},$$scope:{ctx:l}}}),he=new E({props:{python:!0,rust:!0,node:!0,$$slots:{node:[ki],rust:[hi],python:[mi]},$$scope:{ctx:l}}}),_e=new E({props:{python:!0,rust:!0,node:!0,$$slots:{node:[bi],rust:[ji],python:[wi]},$$scope:{ctx:l}}}),ke=new E({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Si],rust:[Ei],python:[yi]},$$scope:{ctx:l}}}),we=new E({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Wi],rust:[Di],python:[Ai]},$$scope:{ctx:l}}}),He=new Ie({}),qe=new E({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Fi],rust:[Ii],python:[Hi]},$$scope:{ctx:l}}}),be=new E({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Gi],rust:[Mi],python:[Ki]},$$scope:{ctx:l}}}),ve=new E({props:{python:!0,rust:!0,node:!0,$$slots:{node:[ep],rust:[Xi],python:[Qi]},$$scope:{ctx:l}}}),{c(){t=h("meta"),s=j(),e=h("h1"),r=h("a"),i=h("span"),c(Se.$$.fragment),Hn=j(),st=h("span"),On=g("The tokenization pipeline"),gs=j(),x=h("p"),In=g("When calling "),nt=h("code"),Bn=g("Tokenizer.encode"),Fn=g(` or
`),rt=h("code"),Un=g("Tokenizer.encode_batch"),Kn=g(`, the input
text(s) go through the following pipeline:`),ws=j(),T=h("ul"),ot=h("li"),at=h("code"),Rn=g("normalization"),Mn=j(),lt=h("li"),it=h("code"),Yn=g("pre-tokenization"),Gn=j(),pt=h("li"),ct=h("code"),Jn=g("model"),Qn=j(),ut=h("li"),ft=h("code"),Vn=g("post-processing"),zs=j(),W=h("p"),Xn=g(`We\u2019ll see in details what happens during each of those steps in detail,
as well as when you want to `),$t=h("code"),Zn=g("decode <decoding>"),er=g(` some token ids, and how the \u{1F917} Tokenizers library allows you
to customize each of those steps to your needs. If you\u2019re already
familiar with those steps and want to learn by seeing some code, jump to
`),mt=h("code"),tr=g("our BERT from scratch example <example>"),sr=g("."),js=j(),L=h("p"),nr=g("For the examples that require a "),dt=h("code"),rr=g("Tokenizer"),or=g(` we will use the tokenizer we trained in the
`),ht=h("code"),ar=g("quicktour"),lr=g(", which you can load with:"),qs=j(),c(Y.$$.fragment),bs=j(),I=h("h2"),G=h("a"),_t=h("span"),c(Ne.$$.fragment),ir=j(),kt=h("span"),pr=g("Normalization"),vs=j(),J=h("p"),cr=g(`Normalization is, in a nutshell, a set of operations you apply to a raw
string to make it less random or \u201Ccleaner\u201D. Common operations include
stripping whitespace, removing accented characters or lowercasing all
text. If you\u2019re familiar with `),Ae=h("a"),ur=g(`Unicode
normalization`),fr=g(`, it is also a very
common normalization operation applied in most tokenizers.`),ys=j(),H=h("p"),$r=g(`Each normalization operation is represented in the \u{1F917} Tokenizers library
by a `),gt=h("code"),mr=g("Normalizer"),dr=g(`, and you can combine
several of those by using a `),wt=h("code"),hr=g("normalizers.Sequence"),_r=g(`. Here is a normalizer applying NFD Unicode normalization
and removing accents as an example:`),Ps=j(),c(Q.$$.fragment),Es=j(),Be=h("p"),kr=g("You can manually test that normalizer by applying it to any string:"),Ts=j(),c(V.$$.fragment),Ss=j(),X=h("p"),gr=g("When building a "),zt=h("code"),wr=g("Tokenizer"),zr=g(`, you can
customize its normalizer by just changing the corresponding attribute:`),Ns=j(),c(Z.$$.fragment),As=j(),Fe=h("p"),jr=g(`Of course, if you change the way a tokenizer applies normalization, you
should probably retrain it from scratch afterward.`),Cs=j(),B=h("h2"),ee=h("a"),jt=h("span"),c(Ce.$$.fragment),qr=j(),qt=h("span"),br=g("Pre-Tokenization"),Ds=j(),Ue=h("p"),vr=g(`Pre-tokenization is the act of splitting a text into smaller objects
that give an upper bound to what your tokens will be at the end of
training. A good way to think of this is that the pre-tokenizer will
split your text into \u201Cwords\u201D and then, your final tokens will be parts
of those words.`),xs=j(),te=h("p"),yr=g(`An easy way to pre-tokenize inputs is to split on spaces and
punctuations, which is done by the
`),bt=h("code"),Pr=g("pre_tokenizers.Whitespace"),Er=g(`
pre-tokenizer:`),Ws=j(),c(se.$$.fragment),Ls=j(),S=h("p"),Tr=g(`The output is a list of tuples, with each tuple containing one word and
its span in the original sentence (which is used to determine the final
`),vt=h("code"),Sr=g("offsets"),Nr=g(" of our "),yt=h("code"),Ar=g("Encoding"),Cr=g(`). Note that splitting on
punctuation will split contractions like `),Pt=h("code"),Dr=g(`"I'm"`),xr=g(" in this example."),Hs=j(),ne=h("p"),Wr=g("You can combine together any "),Et=h("code"),Lr=g("PreTokenizer"),Hr=g(` together. For instance, here is a pre-tokenizer that will
split on space, punctuation and digits, separating numbers in their
individual digits:`),Os=j(),c(re.$$.fragment),Is=j(),O=h("p"),Or=g("As we saw in the "),Tt=h("code"),Ir=g("quicktour"),Br=g(`, you can
customize the pre-tokenizer of a `),St=h("code"),Fr=g("Tokenizer"),Ur=g(" by just changing the corresponding attribute:"),Bs=j(),c(oe.$$.fragment),Fs=j(),Ke=h("p"),Kr=g(`Of course, if you change the way the pre-tokenizer, you should probably
retrain your tokenizer from scratch afterward.`),Us=j(),F=h("h2"),ae=h("a"),Nt=h("span"),c(De.$$.fragment),Rr=j(),At=h("span"),Mr=g("Model"),Ks=j(),le=h("p"),Yr=g(`Once the input texts are normalized and pre-tokenized, the
`),Ct=h("code"),Gr=g("Tokenizer"),Jr=g(` applies the model on the
pre-tokens. This is the part of the pipeline that needs training on your
corpus (or that has been trained if you are using a pretrained
tokenizer).`),Rs=j(),Re=h("p"),Qr=g(`The role of the model is to split your \u201Cwords\u201D into tokens, using the
rules it has learned. It\u2019s also responsible for mapping those tokens to
their corresponding IDs in the vocabulary of the model.`),Ms=j(),ie=h("p"),Vr=g(`This model is passed along when intializing the
`),Dt=h("code"),Xr=g("Tokenizer"),Zr=g(` so you already know how to
customize this part. Currently, the \u{1F917} Tokenizers library supports:`),Ys=j(),N=h("ul"),xt=h("li"),Wt=h("code"),eo=g("models.BPE"),to=j(),Lt=h("li"),Ht=h("code"),so=g("models.Unigram"),no=j(),Ot=h("li"),It=h("code"),ro=g("models.WordLevel"),oo=j(),Bt=h("li"),Ft=h("code"),ao=g("models.WordPiece"),Gs=j(),xe=h("p"),lo=g(`For more details about each model and its behavior, you can check
`),Me=h("a"),io=g("here"),Js=j(),U=h("h2"),pe=h("a"),Ut=h("span"),c(We.$$.fragment),po=j(),Kt=h("span"),co=g("Post-Processing"),Qs=j(),ce=h("p"),uo=g(`Post-processing is the last step of the tokenization pipeline, to
perform any additional transformation to the
`),Rt=h("code"),fo=g("Encoding"),$o=g(` before it\u2019s returned, like
adding potential special tokens.`),Vs=j(),ue=h("p"),mo=g(`As we saw in the quick tour, we can customize the post processor of a
`),Mt=h("code"),ho=g("Tokenizer"),_o=g(` by setting the
corresponding attribute. For instance, here is how we can post-process
to make the inputs suitable for the BERT model:`),Xs=j(),c(fe.$$.fragment),Zs=j(),Ye=h("p"),ko=g(`Note that contrarily to the pre-tokenizer or the normalizer, you don\u2019t
need to retrain a tokenizer after changing its post-processor.`),en=j(),K=h("h2"),$e=h("a"),Yt=h("span"),c(Le.$$.fragment),go=j(),Gt=h("span"),wo=g("All together: a BERT tokenizer from scratch"),tn=j(),me=h("p"),zo=g(`Let\u2019s put all those pieces together to build a BERT tokenizer. First,
BERT relies on WordPiece, so we instantiate a new
`),Jt=h("code"),jo=g("Tokenizer"),qo=g(" with this model:"),sn=j(),c(de.$$.fragment),nn=j(),Ge=h("p"),bo=g(`Then we know that BERT preprocesses texts by removing accents and
lowercasing. We also use a unicode normalizer:`),rn=j(),c(he.$$.fragment),on=j(),Je=h("p"),vo=g("The pre-tokenizer is just splitting on whitespace and punctuation:"),an=j(),c(_e.$$.fragment),ln=j(),Qe=h("p"),yo=g(`And the post-processing uses the template we saw in the previous
section:`),pn=j(),c(ke.$$.fragment),cn=j(),ge=h("p"),Po=g(`We can use this tokenizer and train on it on wikitext like in the
`),Qt=h("code"),Eo=g("quicktour"),To=g(":"),un=j(),c(we.$$.fragment),fn=j(),R=h("h2"),ze=h("a"),Vt=h("span"),c(He.$$.fragment),So=j(),Xt=h("span"),No=g("Decoding"),$n=j(),A=h("p"),Ao=g("On top of encoding the input texts, a "),Zt=h("code"),Co=g("Tokenizer"),Do=g(` also has an API for decoding, that is converting IDs
generated by your model back to a text. This is done by the methods
`),es=h("code"),xo=g("Tokenizer.decode"),Wo=g(" (for one predicted text) and "),ts=h("code"),Lo=g("Tokenizer.decode_batch"),Ho=g(" (for a batch of predictions)."),mn=j(),je=h("p"),Oo=g("The "),ss=h("code"),Io=g("decoder"),Bo=g(` will first convert the IDs back to tokens
(using the tokenizer\u2019s vocabulary) and remove all special tokens, then
join those tokens with spaces:`),dn=j(),c(qe.$$.fragment),hn=j(),C=h("p"),Fo=g(`If you used a model that added special characters to represent subtokens
of a given \u201Cword\u201D (like the `),ns=h("code"),Uo=g('"##"'),Ko=g(` in
WordPiece) you will need to customize the `),rs=h("code"),Ro=g("decoder"),Mo=g(` to treat
them properly. If we take our previous `),os=h("code"),Yo=g("bert_tokenizer"),Go=g(` for instance the
default decoing will give:`),_n=j(),c(be.$$.fragment),kn=j(),Ve=h("p"),Jo=g("But by changing it to a proper decoder, we get:"),gn=j(),c(ve.$$.fragment),this.h()},l(n){const p=ul('[data-svelte="svelte-1phssyn"]',document.head);t=_(p,"META",{name:!0,content:!0}),p.forEach(o),s=q(n),e=_(n,"H1",{class:!0});var Oe=k(e);r=_(Oe,"A",{id:!0,class:!0,href:!0});var as=k(r);i=_(as,"SPAN",{});var ls=k(i);u(Se.$$.fragment,ls),ls.forEach(o),as.forEach(o),Hn=q(Oe),st=_(Oe,"SPAN",{});var is=k(st);On=w(is,"The tokenization pipeline"),is.forEach(o),Oe.forEach(o),gs=q(n),x=_(n,"P",{});var M=k(x);In=w(M,"When calling "),nt=_(M,"CODE",{});var ps=k(nt);Bn=w(ps,"Tokenizer.encode"),ps.forEach(o),Fn=w(M,` or
`),rt=_(M,"CODE",{});var cs=k(rt);Un=w(cs,"Tokenizer.encode_batch"),cs.forEach(o),Kn=w(M,`, the input
text(s) go through the following pipeline:`),M.forEach(o),ws=q(n),T=_(n,"UL",{});var D=k(T);ot=_(D,"LI",{});var us=k(ot);at=_(us,"CODE",{});var fs=k(at);Rn=w(fs,"normalization"),fs.forEach(o),us.forEach(o),Mn=q(D),lt=_(D,"LI",{});var $s=k(lt);it=_($s,"CODE",{});var ms=k(it);Yn=w(ms,"pre-tokenization"),ms.forEach(o),$s.forEach(o),Gn=q(D),pt=_(D,"LI",{});var ds=k(pt);ct=_(ds,"CODE",{});var hs=k(ct);Jn=w(hs,"model"),hs.forEach(o),ds.forEach(o),Qn=q(D),ut=_(D,"LI",{});var _s=k(ut);ft=_(_s,"CODE",{});var ks=k(ft);Vn=w(ks,"post-processing"),ks.forEach(o),_s.forEach(o),D.forEach(o),zs=q(n),W=_(n,"P",{});var Xe=k(W);Xn=w(Xe,`We\u2019ll see in details what happens during each of those steps in detail,
as well as when you want to `),$t=_(Xe,"CODE",{});var Vo=k($t);Zn=w(Vo,"decode <decoding>"),Vo.forEach(o),er=w(Xe,` some token ids, and how the \u{1F917} Tokenizers library allows you
to customize each of those steps to your needs. If you\u2019re already
familiar with those steps and want to learn by seeing some code, jump to
`),mt=_(Xe,"CODE",{});var Xo=k(mt);tr=w(Xo,"our BERT from scratch example <example>"),Xo.forEach(o),sr=w(Xe,"."),Xe.forEach(o),js=q(n),L=_(n,"P",{});var Ze=k(L);nr=w(Ze,"For the examples that require a "),dt=_(Ze,"CODE",{});var Zo=k(dt);rr=w(Zo,"Tokenizer"),Zo.forEach(o),or=w(Ze,` we will use the tokenizer we trained in the
`),ht=_(Ze,"CODE",{});var ea=k(ht);ar=w(ea,"quicktour"),ea.forEach(o),lr=w(Ze,", which you can load with:"),Ze.forEach(o),qs=q(n),u(Y.$$.fragment,n),bs=q(n),I=_(n,"H2",{class:!0});var zn=k(I);G=_(zn,"A",{id:!0,class:!0,href:!0});var ta=k(G);_t=_(ta,"SPAN",{});var sa=k(_t);u(Ne.$$.fragment,sa),sa.forEach(o),ta.forEach(o),ir=q(zn),kt=_(zn,"SPAN",{});var na=k(kt);pr=w(na,"Normalization"),na.forEach(o),zn.forEach(o),vs=q(n),J=_(n,"P",{});var jn=k(J);cr=w(jn,`Normalization is, in a nutshell, a set of operations you apply to a raw
string to make it less random or \u201Ccleaner\u201D. Common operations include
stripping whitespace, removing accented characters or lowercasing all
text. If you\u2019re familiar with `),Ae=_(jn,"A",{href:!0,rel:!0});var ra=k(Ae);ur=w(ra,`Unicode
normalization`),ra.forEach(o),fr=w(jn,`, it is also a very
common normalization operation applied in most tokenizers.`),jn.forEach(o),ys=q(n),H=_(n,"P",{});var et=k(H);$r=w(et,`Each normalization operation is represented in the \u{1F917} Tokenizers library
by a `),gt=_(et,"CODE",{});var oa=k(gt);mr=w(oa,"Normalizer"),oa.forEach(o),dr=w(et,`, and you can combine
several of those by using a `),wt=_(et,"CODE",{});var aa=k(wt);hr=w(aa,"normalizers.Sequence"),aa.forEach(o),_r=w(et,`. Here is a normalizer applying NFD Unicode normalization
and removing accents as an example:`),et.forEach(o),Ps=q(n),u(Q.$$.fragment,n),Es=q(n),Be=_(n,"P",{});var la=k(Be);kr=w(la,"You can manually test that normalizer by applying it to any string:"),la.forEach(o),Ts=q(n),u(V.$$.fragment,n),Ss=q(n),X=_(n,"P",{});var qn=k(X);gr=w(qn,"When building a "),zt=_(qn,"CODE",{});var ia=k(zt);wr=w(ia,"Tokenizer"),ia.forEach(o),zr=w(qn,`, you can
customize its normalizer by just changing the corresponding attribute:`),qn.forEach(o),Ns=q(n),u(Z.$$.fragment,n),As=q(n),Fe=_(n,"P",{});var pa=k(Fe);jr=w(pa,`Of course, if you change the way a tokenizer applies normalization, you
should probably retrain it from scratch afterward.`),pa.forEach(o),Cs=q(n),B=_(n,"H2",{class:!0});var bn=k(B);ee=_(bn,"A",{id:!0,class:!0,href:!0});var ca=k(ee);jt=_(ca,"SPAN",{});var ua=k(jt);u(Ce.$$.fragment,ua),ua.forEach(o),ca.forEach(o),qr=q(bn),qt=_(bn,"SPAN",{});var fa=k(qt);br=w(fa,"Pre-Tokenization"),fa.forEach(o),bn.forEach(o),Ds=q(n),Ue=_(n,"P",{});var $a=k(Ue);vr=w($a,`Pre-tokenization is the act of splitting a text into smaller objects
that give an upper bound to what your tokens will be at the end of
training. A good way to think of this is that the pre-tokenizer will
split your text into \u201Cwords\u201D and then, your final tokens will be parts
of those words.`),$a.forEach(o),xs=q(n),te=_(n,"P",{});var vn=k(te);yr=w(vn,`An easy way to pre-tokenize inputs is to split on spaces and
punctuations, which is done by the
`),bt=_(vn,"CODE",{});var ma=k(bt);Pr=w(ma,"pre_tokenizers.Whitespace"),ma.forEach(o),Er=w(vn,`
pre-tokenizer:`),vn.forEach(o),Ws=q(n),u(se.$$.fragment,n),Ls=q(n),S=_(n,"P",{});var ye=k(S);Tr=w(ye,`The output is a list of tuples, with each tuple containing one word and
its span in the original sentence (which is used to determine the final
`),vt=_(ye,"CODE",{});var da=k(vt);Sr=w(da,"offsets"),da.forEach(o),Nr=w(ye," of our "),yt=_(ye,"CODE",{});var ha=k(yt);Ar=w(ha,"Encoding"),ha.forEach(o),Cr=w(ye,`). Note that splitting on
punctuation will split contractions like `),Pt=_(ye,"CODE",{});var _a=k(Pt);Dr=w(_a,`"I'm"`),_a.forEach(o),xr=w(ye," in this example."),ye.forEach(o),Hs=q(n),ne=_(n,"P",{});var yn=k(ne);Wr=w(yn,"You can combine together any "),Et=_(yn,"CODE",{});var ka=k(Et);Lr=w(ka,"PreTokenizer"),ka.forEach(o),Hr=w(yn,` together. For instance, here is a pre-tokenizer that will
split on space, punctuation and digits, separating numbers in their
individual digits:`),yn.forEach(o),Os=q(n),u(re.$$.fragment,n),Is=q(n),O=_(n,"P",{});var tt=k(O);Or=w(tt,"As we saw in the "),Tt=_(tt,"CODE",{});var ga=k(Tt);Ir=w(ga,"quicktour"),ga.forEach(o),Br=w(tt,`, you can
customize the pre-tokenizer of a `),St=_(tt,"CODE",{});var wa=k(St);Fr=w(wa,"Tokenizer"),wa.forEach(o),Ur=w(tt," by just changing the corresponding attribute:"),tt.forEach(o),Bs=q(n),u(oe.$$.fragment,n),Fs=q(n),Ke=_(n,"P",{});var za=k(Ke);Kr=w(za,`Of course, if you change the way the pre-tokenizer, you should probably
retrain your tokenizer from scratch afterward.`),za.forEach(o),Us=q(n),F=_(n,"H2",{class:!0});var Pn=k(F);ae=_(Pn,"A",{id:!0,class:!0,href:!0});var ja=k(ae);Nt=_(ja,"SPAN",{});var qa=k(Nt);u(De.$$.fragment,qa),qa.forEach(o),ja.forEach(o),Rr=q(Pn),At=_(Pn,"SPAN",{});var ba=k(At);Mr=w(ba,"Model"),ba.forEach(o),Pn.forEach(o),Ks=q(n),le=_(n,"P",{});var En=k(le);Yr=w(En,`Once the input texts are normalized and pre-tokenized, the
`),Ct=_(En,"CODE",{});var va=k(Ct);Gr=w(va,"Tokenizer"),va.forEach(o),Jr=w(En,` applies the model on the
pre-tokens. This is the part of the pipeline that needs training on your
corpus (or that has been trained if you are using a pretrained
tokenizer).`),En.forEach(o),Rs=q(n),Re=_(n,"P",{});var ya=k(Re);Qr=w(ya,`The role of the model is to split your \u201Cwords\u201D into tokens, using the
rules it has learned. It\u2019s also responsible for mapping those tokens to
their corresponding IDs in the vocabulary of the model.`),ya.forEach(o),Ms=q(n),ie=_(n,"P",{});var Tn=k(ie);Vr=w(Tn,`This model is passed along when intializing the
`),Dt=_(Tn,"CODE",{});var Pa=k(Dt);Xr=w(Pa,"Tokenizer"),Pa.forEach(o),Zr=w(Tn,` so you already know how to
customize this part. Currently, the \u{1F917} Tokenizers library supports:`),Tn.forEach(o),Ys=q(n),N=_(n,"UL",{});var Pe=k(N);xt=_(Pe,"LI",{});var Ea=k(xt);Wt=_(Ea,"CODE",{});var Ta=k(Wt);eo=w(Ta,"models.BPE"),Ta.forEach(o),Ea.forEach(o),to=q(Pe),Lt=_(Pe,"LI",{});var Sa=k(Lt);Ht=_(Sa,"CODE",{});var Na=k(Ht);so=w(Na,"models.Unigram"),Na.forEach(o),Sa.forEach(o),no=q(Pe),Ot=_(Pe,"LI",{});var Aa=k(Ot);It=_(Aa,"CODE",{});var Ca=k(It);ro=w(Ca,"models.WordLevel"),Ca.forEach(o),Aa.forEach(o),oo=q(Pe),Bt=_(Pe,"LI",{});var Da=k(Bt);Ft=_(Da,"CODE",{});var xa=k(Ft);ao=w(xa,"models.WordPiece"),xa.forEach(o),Da.forEach(o),Pe.forEach(o),Gs=q(n),xe=_(n,"P",{});var Qo=k(xe);lo=w(Qo,`For more details about each model and its behavior, you can check
`),Me=_(Qo,"A",{href:!0});var Wa=k(Me);io=w(Wa,"here"),Wa.forEach(o),Qo.forEach(o),Js=q(n),U=_(n,"H2",{class:!0});var Sn=k(U);pe=_(Sn,"A",{id:!0,class:!0,href:!0});var La=k(pe);Ut=_(La,"SPAN",{});var Ha=k(Ut);u(We.$$.fragment,Ha),Ha.forEach(o),La.forEach(o),po=q(Sn),Kt=_(Sn,"SPAN",{});var Oa=k(Kt);co=w(Oa,"Post-Processing"),Oa.forEach(o),Sn.forEach(o),Qs=q(n),ce=_(n,"P",{});var Nn=k(ce);uo=w(Nn,`Post-processing is the last step of the tokenization pipeline, to
perform any additional transformation to the
`),Rt=_(Nn,"CODE",{});var Ia=k(Rt);fo=w(Ia,"Encoding"),Ia.forEach(o),$o=w(Nn,` before it\u2019s returned, like
adding potential special tokens.`),Nn.forEach(o),Vs=q(n),ue=_(n,"P",{});var An=k(ue);mo=w(An,`As we saw in the quick tour, we can customize the post processor of a
`),Mt=_(An,"CODE",{});var Ba=k(Mt);ho=w(Ba,"Tokenizer"),Ba.forEach(o),_o=w(An,` by setting the
corresponding attribute. For instance, here is how we can post-process
to make the inputs suitable for the BERT model:`),An.forEach(o),Xs=q(n),u(fe.$$.fragment,n),Zs=q(n),Ye=_(n,"P",{});var Fa=k(Ye);ko=w(Fa,`Note that contrarily to the pre-tokenizer or the normalizer, you don\u2019t
need to retrain a tokenizer after changing its post-processor.`),Fa.forEach(o),en=q(n),K=_(n,"H2",{class:!0});var Cn=k(K);$e=_(Cn,"A",{id:!0,class:!0,href:!0});var Ua=k($e);Yt=_(Ua,"SPAN",{});var Ka=k(Yt);u(Le.$$.fragment,Ka),Ka.forEach(o),Ua.forEach(o),go=q(Cn),Gt=_(Cn,"SPAN",{});var Ra=k(Gt);wo=w(Ra,"All together: a BERT tokenizer from scratch"),Ra.forEach(o),Cn.forEach(o),tn=q(n),me=_(n,"P",{});var Dn=k(me);zo=w(Dn,`Let\u2019s put all those pieces together to build a BERT tokenizer. First,
BERT relies on WordPiece, so we instantiate a new
`),Jt=_(Dn,"CODE",{});var Ma=k(Jt);jo=w(Ma,"Tokenizer"),Ma.forEach(o),qo=w(Dn," with this model:"),Dn.forEach(o),sn=q(n),u(de.$$.fragment,n),nn=q(n),Ge=_(n,"P",{});var Ya=k(Ge);bo=w(Ya,`Then we know that BERT preprocesses texts by removing accents and
lowercasing. We also use a unicode normalizer:`),Ya.forEach(o),rn=q(n),u(he.$$.fragment,n),on=q(n),Je=_(n,"P",{});var Ga=k(Je);vo=w(Ga,"The pre-tokenizer is just splitting on whitespace and punctuation:"),Ga.forEach(o),an=q(n),u(_e.$$.fragment,n),ln=q(n),Qe=_(n,"P",{});var Ja=k(Qe);yo=w(Ja,`And the post-processing uses the template we saw in the previous
section:`),Ja.forEach(o),pn=q(n),u(ke.$$.fragment,n),cn=q(n),ge=_(n,"P",{});var xn=k(ge);Po=w(xn,`We can use this tokenizer and train on it on wikitext like in the
`),Qt=_(xn,"CODE",{});var Qa=k(Qt);Eo=w(Qa,"quicktour"),Qa.forEach(o),To=w(xn,":"),xn.forEach(o),un=q(n),u(we.$$.fragment,n),fn=q(n),R=_(n,"H2",{class:!0});var Wn=k(R);ze=_(Wn,"A",{id:!0,class:!0,href:!0});var Va=k(ze);Vt=_(Va,"SPAN",{});var Xa=k(Vt);u(He.$$.fragment,Xa),Xa.forEach(o),Va.forEach(o),So=q(Wn),Xt=_(Wn,"SPAN",{});var Za=k(Xt);No=w(Za,"Decoding"),Za.forEach(o),Wn.forEach(o),$n=q(n),A=_(n,"P",{});var Ee=k(A);Ao=w(Ee,"On top of encoding the input texts, a "),Zt=_(Ee,"CODE",{});var el=k(Zt);Co=w(el,"Tokenizer"),el.forEach(o),Do=w(Ee,` also has an API for decoding, that is converting IDs
generated by your model back to a text. This is done by the methods
`),es=_(Ee,"CODE",{});var tl=k(es);xo=w(tl,"Tokenizer.decode"),tl.forEach(o),Wo=w(Ee," (for one predicted text) and "),ts=_(Ee,"CODE",{});var sl=k(ts);Lo=w(sl,"Tokenizer.decode_batch"),sl.forEach(o),Ho=w(Ee," (for a batch of predictions)."),Ee.forEach(o),mn=q(n),je=_(n,"P",{});var Ln=k(je);Oo=w(Ln,"The "),ss=_(Ln,"CODE",{});var nl=k(ss);Io=w(nl,"decoder"),nl.forEach(o),Bo=w(Ln,` will first convert the IDs back to tokens
(using the tokenizer\u2019s vocabulary) and remove all special tokens, then
join those tokens with spaces:`),Ln.forEach(o),dn=q(n),u(qe.$$.fragment,n),hn=q(n),C=_(n,"P",{});var Te=k(C);Fo=w(Te,`If you used a model that added special characters to represent subtokens
of a given \u201Cword\u201D (like the `),ns=_(Te,"CODE",{});var rl=k(ns);Uo=w(rl,'"##"'),rl.forEach(o),Ko=w(Te,` in
WordPiece) you will need to customize the `),rs=_(Te,"CODE",{});var ol=k(rs);Ro=w(ol,"decoder"),ol.forEach(o),Mo=w(Te,` to treat
them properly. If we take our previous `),os=_(Te,"CODE",{});var al=k(os);Yo=w(al,"bert_tokenizer"),al.forEach(o),Go=w(Te,` for instance the
default decoing will give:`),Te.forEach(o),_n=q(n),u(be.$$.fragment,n),kn=q(n),Ve=_(n,"P",{});var ll=k(Ve);Jo=w(ll,"But by changing it to a proper decoder, we get:"),ll.forEach(o),gn=q(n),u(ve.$$.fragment,n),this.h()},h(){P(t,"name","hf:doc:metadata"),P(t,"content",JSON.stringify(sp)),P(r,"id","the-tokenization-pipeline"),P(r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(r,"href","#the-tokenization-pipeline"),P(e,"class","relative group"),P(G,"id","normalization"),P(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(G,"href","#normalization"),P(I,"class","relative group"),P(Ae,"href","https://unicode.org/reports/tr15"),P(Ae,"rel","nofollow"),P(ee,"id","pretokenization"),P(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(ee,"href","#pretokenization"),P(B,"class","relative group"),P(ae,"id","model"),P(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(ae,"href","#model"),P(F,"class","relative group"),P(Me,"href","components.html#models"),P(pe,"id","postprocessing"),P(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(pe,"href","#postprocessing"),P(U,"class","relative group"),P($e,"id","all-together-a-bert-tokenizer-from-scratch"),P($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P($e,"href","#all-together-a-bert-tokenizer-from-scratch"),P(K,"class","relative group"),P(ze,"id","decoding"),P(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(ze,"href","#decoding"),P(R,"class","relative group")},m(n,p){a(document.head,t),z(n,s,p),z(n,e,p),a(e,r),a(r,i),f(Se,i,null),a(e,Hn),a(e,st),a(st,On),z(n,gs,p),z(n,x,p),a(x,In),a(x,nt),a(nt,Bn),a(x,Fn),a(x,rt),a(rt,Un),a(x,Kn),z(n,ws,p),z(n,T,p),a(T,ot),a(ot,at),a(at,Rn),a(T,Mn),a(T,lt),a(lt,it),a(it,Yn),a(T,Gn),a(T,pt),a(pt,ct),a(ct,Jn),a(T,Qn),a(T,ut),a(ut,ft),a(ft,Vn),z(n,zs,p),z(n,W,p),a(W,Xn),a(W,$t),a($t,Zn),a(W,er),a(W,mt),a(mt,tr),a(W,sr),z(n,js,p),z(n,L,p),a(L,nr),a(L,dt),a(dt,rr),a(L,or),a(L,ht),a(ht,ar),a(L,lr),z(n,qs,p),f(Y,n,p),z(n,bs,p),z(n,I,p),a(I,G),a(G,_t),f(Ne,_t,null),a(I,ir),a(I,kt),a(kt,pr),z(n,vs,p),z(n,J,p),a(J,cr),a(J,Ae),a(Ae,ur),a(J,fr),z(n,ys,p),z(n,H,p),a(H,$r),a(H,gt),a(gt,mr),a(H,dr),a(H,wt),a(wt,hr),a(H,_r),z(n,Ps,p),f(Q,n,p),z(n,Es,p),z(n,Be,p),a(Be,kr),z(n,Ts,p),f(V,n,p),z(n,Ss,p),z(n,X,p),a(X,gr),a(X,zt),a(zt,wr),a(X,zr),z(n,Ns,p),f(Z,n,p),z(n,As,p),z(n,Fe,p),a(Fe,jr),z(n,Cs,p),z(n,B,p),a(B,ee),a(ee,jt),f(Ce,jt,null),a(B,qr),a(B,qt),a(qt,br),z(n,Ds,p),z(n,Ue,p),a(Ue,vr),z(n,xs,p),z(n,te,p),a(te,yr),a(te,bt),a(bt,Pr),a(te,Er),z(n,Ws,p),f(se,n,p),z(n,Ls,p),z(n,S,p),a(S,Tr),a(S,vt),a(vt,Sr),a(S,Nr),a(S,yt),a(yt,Ar),a(S,Cr),a(S,Pt),a(Pt,Dr),a(S,xr),z(n,Hs,p),z(n,ne,p),a(ne,Wr),a(ne,Et),a(Et,Lr),a(ne,Hr),z(n,Os,p),f(re,n,p),z(n,Is,p),z(n,O,p),a(O,Or),a(O,Tt),a(Tt,Ir),a(O,Br),a(O,St),a(St,Fr),a(O,Ur),z(n,Bs,p),f(oe,n,p),z(n,Fs,p),z(n,Ke,p),a(Ke,Kr),z(n,Us,p),z(n,F,p),a(F,ae),a(ae,Nt),f(De,Nt,null),a(F,Rr),a(F,At),a(At,Mr),z(n,Ks,p),z(n,le,p),a(le,Yr),a(le,Ct),a(Ct,Gr),a(le,Jr),z(n,Rs,p),z(n,Re,p),a(Re,Qr),z(n,Ms,p),z(n,ie,p),a(ie,Vr),a(ie,Dt),a(Dt,Xr),a(ie,Zr),z(n,Ys,p),z(n,N,p),a(N,xt),a(xt,Wt),a(Wt,eo),a(N,to),a(N,Lt),a(Lt,Ht),a(Ht,so),a(N,no),a(N,Ot),a(Ot,It),a(It,ro),a(N,oo),a(N,Bt),a(Bt,Ft),a(Ft,ao),z(n,Gs,p),z(n,xe,p),a(xe,lo),a(xe,Me),a(Me,io),z(n,Js,p),z(n,U,p),a(U,pe),a(pe,Ut),f(We,Ut,null),a(U,po),a(U,Kt),a(Kt,co),z(n,Qs,p),z(n,ce,p),a(ce,uo),a(ce,Rt),a(Rt,fo),a(ce,$o),z(n,Vs,p),z(n,ue,p),a(ue,mo),a(ue,Mt),a(Mt,ho),a(ue,_o),z(n,Xs,p),f(fe,n,p),z(n,Zs,p),z(n,Ye,p),a(Ye,ko),z(n,en,p),z(n,K,p),a(K,$e),a($e,Yt),f(Le,Yt,null),a(K,go),a(K,Gt),a(Gt,wo),z(n,tn,p),z(n,me,p),a(me,zo),a(me,Jt),a(Jt,jo),a(me,qo),z(n,sn,p),f(de,n,p),z(n,nn,p),z(n,Ge,p),a(Ge,bo),z(n,rn,p),f(he,n,p),z(n,on,p),z(n,Je,p),a(Je,vo),z(n,an,p),f(_e,n,p),z(n,ln,p),z(n,Qe,p),a(Qe,yo),z(n,pn,p),f(ke,n,p),z(n,cn,p),z(n,ge,p),a(ge,Po),a(ge,Qt),a(Qt,Eo),a(ge,To),z(n,un,p),f(we,n,p),z(n,fn,p),z(n,R,p),a(R,ze),a(ze,Vt),f(He,Vt,null),a(R,So),a(R,Xt),a(Xt,No),z(n,$n,p),z(n,A,p),a(A,Ao),a(A,Zt),a(Zt,Co),a(A,Do),a(A,es),a(es,xo),a(A,Wo),a(A,ts),a(ts,Lo),a(A,Ho),z(n,mn,p),z(n,je,p),a(je,Oo),a(je,ss),a(ss,Io),a(je,Bo),z(n,dn,p),f(qe,n,p),z(n,hn,p),z(n,C,p),a(C,Fo),a(C,ns),a(ns,Uo),a(C,Ko),a(C,rs),a(rs,Ro),a(C,Mo),a(C,os),a(os,Yo),a(C,Go),z(n,_n,p),f(be,n,p),z(n,kn,p),z(n,Ve,p),a(Ve,Jo),z(n,gn,p),f(ve,n,p),wn=!0},p(n,[p]){const Oe={};p&2&&(Oe.$$scope={dirty:p,ctx:n}),Y.$set(Oe);const as={};p&2&&(as.$$scope={dirty:p,ctx:n}),Q.$set(as);const ls={};p&2&&(ls.$$scope={dirty:p,ctx:n}),V.$set(ls);const is={};p&2&&(is.$$scope={dirty:p,ctx:n}),Z.$set(is);const M={};p&2&&(M.$$scope={dirty:p,ctx:n}),se.$set(M);const ps={};p&2&&(ps.$$scope={dirty:p,ctx:n}),re.$set(ps);const cs={};p&2&&(cs.$$scope={dirty:p,ctx:n}),oe.$set(cs);const D={};p&2&&(D.$$scope={dirty:p,ctx:n}),fe.$set(D);const us={};p&2&&(us.$$scope={dirty:p,ctx:n}),de.$set(us);const fs={};p&2&&(fs.$$scope={dirty:p,ctx:n}),he.$set(fs);const $s={};p&2&&($s.$$scope={dirty:p,ctx:n}),_e.$set($s);const ms={};p&2&&(ms.$$scope={dirty:p,ctx:n}),ke.$set(ms);const ds={};p&2&&(ds.$$scope={dirty:p,ctx:n}),we.$set(ds);const hs={};p&2&&(hs.$$scope={dirty:p,ctx:n}),qe.$set(hs);const _s={};p&2&&(_s.$$scope={dirty:p,ctx:n}),be.$set(_s);const ks={};p&2&&(ks.$$scope={dirty:p,ctx:n}),ve.$set(ks)},i(n){wn||($(Se.$$.fragment,n),$(Y.$$.fragment,n),$(Ne.$$.fragment,n),$(Q.$$.fragment,n),$(V.$$.fragment,n),$(Z.$$.fragment,n),$(Ce.$$.fragment,n),$(se.$$.fragment,n),$(re.$$.fragment,n),$(oe.$$.fragment,n),$(De.$$.fragment,n),$(We.$$.fragment,n),$(fe.$$.fragment,n),$(Le.$$.fragment,n),$(de.$$.fragment,n),$(he.$$.fragment,n),$(_e.$$.fragment,n),$(ke.$$.fragment,n),$(we.$$.fragment,n),$(He.$$.fragment,n),$(qe.$$.fragment,n),$(be.$$.fragment,n),$(ve.$$.fragment,n),wn=!0)},o(n){m(Se.$$.fragment,n),m(Y.$$.fragment,n),m(Ne.$$.fragment,n),m(Q.$$.fragment,n),m(V.$$.fragment,n),m(Z.$$.fragment,n),m(Ce.$$.fragment,n),m(se.$$.fragment,n),m(re.$$.fragment,n),m(oe.$$.fragment,n),m(De.$$.fragment,n),m(We.$$.fragment,n),m(fe.$$.fragment,n),m(Le.$$.fragment,n),m(de.$$.fragment,n),m(he.$$.fragment,n),m(_e.$$.fragment,n),m(ke.$$.fragment,n),m(we.$$.fragment,n),m(He.$$.fragment,n),m(qe.$$.fragment,n),m(be.$$.fragment,n),m(ve.$$.fragment,n),wn=!1},d(n){o(t),n&&o(s),n&&o(e),d(Se),n&&o(gs),n&&o(x),n&&o(ws),n&&o(T),n&&o(zs),n&&o(W),n&&o(js),n&&o(L),n&&o(qs),d(Y,n),n&&o(bs),n&&o(I),d(Ne),n&&o(vs),n&&o(J),n&&o(ys),n&&o(H),n&&o(Ps),d(Q,n),n&&o(Es),n&&o(Be),n&&o(Ts),d(V,n),n&&o(Ss),n&&o(X),n&&o(Ns),d(Z,n),n&&o(As),n&&o(Fe),n&&o(Cs),n&&o(B),d(Ce),n&&o(Ds),n&&o(Ue),n&&o(xs),n&&o(te),n&&o(Ws),d(se,n),n&&o(Ls),n&&o(S),n&&o(Hs),n&&o(ne),n&&o(Os),d(re,n),n&&o(Is),n&&o(O),n&&o(Bs),d(oe,n),n&&o(Fs),n&&o(Ke),n&&o(Us),n&&o(F),d(De),n&&o(Ks),n&&o(le),n&&o(Rs),n&&o(Re),n&&o(Ms),n&&o(ie),n&&o(Ys),n&&o(N),n&&o(Gs),n&&o(xe),n&&o(Js),n&&o(U),d(We),n&&o(Qs),n&&o(ce),n&&o(Vs),n&&o(ue),n&&o(Xs),d(fe,n),n&&o(Zs),n&&o(Ye),n&&o(en),n&&o(K),d(Le),n&&o(tn),n&&o(me),n&&o(sn),d(de,n),n&&o(nn),n&&o(Ge),n&&o(rn),d(he,n),n&&o(on),n&&o(Je),n&&o(an),d(_e,n),n&&o(ln),n&&o(Qe),n&&o(pn),d(ke,n),n&&o(cn),n&&o(ge),n&&o(un),d(we,n),n&&o(fn),n&&o(R),d(He),n&&o($n),n&&o(A),n&&o(mn),n&&o(je),n&&o(dn),d(qe,n),n&&o(hn),n&&o(C),n&&o(_n),d(be,n),n&&o(kn),n&&o(Ve),n&&o(gn),d(ve,n)}}}const sp={local:"the-tokenization-pipeline",sections:[{local:"normalization",title:"Normalization"},{local:"pretokenization",title:"Pre-Tokenization"},{local:"model",title:"Model"},{local:"postprocessing",title:"Post-Processing"},{local:"all-together-a-bert-tokenizer-from-scratch",title:"All together: a BERT tokenizer from scratch"},{local:"decoding",title:"Decoding"}],title:"The tokenization pipeline"};function np(l){return fl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ip extends il{constructor(t){super();pl(this,t,np,tp,cl,{})}}export{ip as default,sp as metadata};
