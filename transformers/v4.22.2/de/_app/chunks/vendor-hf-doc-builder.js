function h(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function T(){return Object.create(null)}function b(t){t.forEach(B)}function W(t){return typeof t=="function"}function G(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function lt(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function J(t){return Object.keys(t).length===0}function K(t,...n){if(t==null)return h;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(K(n,e))}function at(t,n,e,i){if(t){const c=L(t,n,e,i);return t[0](c)}}function L(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],o=Math.max(n.dirty.length,c.length);for(let u=0;u<o;u+=1)l[u]=n.dirty[u]|c[u];return l}return n.dirty|c}return n.dirty}function _t(t,n,e,i,c,l){if(c){const o=L(n,e,i,l);t.p(o,c)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function mt(t){const n={};for(const e in t)n[e]=!0;return n}function pt(t,n,e){return t.set(e),n}let k=!1;function Q(){k=!0}function R(){k=!1}function U(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=s?c+1:U(1,c,g=>n[e[g]].claim_order,s))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const l=[],o=[];let u=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(l.push(n[r-1]);u>=r;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);l.reverse(),o.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<o.length;r++){for(;s<l.length&&o[r].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(o[r],a)}}function X(t,n){if(k){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function yt(t,n,e){k&&!e?X(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Y(t){t.parentNode.removeChild(t)}function bt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Z(t){return document.createElement(t)}function tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function gt(){return v(" ")}function xt(){return v("")}function wt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function $t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function nt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,c=!1){et(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function P(t,n,e,i){return O(t,c=>c.nodeName===n,c=>{const l=[];for(let o=0;o<c.attributes.length;o++){const u=c.attributes[o];e[u.name]||l.push(u.name)}l.forEach(o=>c.removeAttribute(o))},()=>i(n))}function Et(t,n,e){return P(t,n,e,Z)}function kt(t,n,e){return P(t,n,e,tt)}function it(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function St(t){return it(t," ")}function At(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Nt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function jt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let y;function p(t){y=t}function S(){if(!y)throw new Error("Function called outside component initialization");return y}function vt(t){S().$$.on_mount.push(t)}function qt(t){S().$$.after_update.push(t)}function Ct(t){S().$$.on_destroy.push(t)}function Tt(t,n){S().$$.context.set(t,n)}const m=[],M=[],$=[],z=[],D=Promise.resolve();let N=!1;function F(){N||(N=!0,D.then(H))}function Mt(){return F(),D}function j(t){$.push(t)}const A=new Set;let w=0;function H(){const t=y;do{for(;w<m.length;){const n=m[w];w++,p(n),rt(n.$$)}for(p(null),m.length=0,w=0;M.length;)M.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];A.has(e)||(A.add(e),e())}$.length=0}while(m.length);for(;z.length;)z.pop()();N=!1,A.clear(),p(t)}function rt(t){if(t.fragment!==null){t.update(),b(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const E=new Set;let d;function zt(){d={r:0,c:[],p:d}}function Bt(){d.r||b(d.c),d=d.p}function ct(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Lt(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}const Ot=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Pt(t,n){const e={},i={},c={$$scope:1};let l=t.length;for(;l--;){const o=t[l],u=n[l];if(u){for(const r in o)r in u||(i[r]=1);for(const r in u)c[r]||(e[r]=u[r],c[r]=1);t[l]=u}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Dt(t){return typeof t=="object"&&t!==null?t:{}}function Ft(t){t&&t.c()}function Ht(t,n){t&&t.l(n)}function ot(t,n,e,i){const{fragment:c,on_mount:l,on_destroy:o,after_update:u}=t.$$;c&&c.m(n,e),i||j(()=>{const r=l.map(B).filter(W);o?o.push(...r):b(r),t.$$.on_mount=[]}),u.forEach(j)}function ut(t,n){const e=t.$$;e.fragment!==null&&(b(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){t.$$.dirty[0]===-1&&(m.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function It(t,n,e,i,c,l,o,u=[-1]){const r=y;p(t);const s=t.$$={fragment:null,ctx:null,props:l,update:h,not_equal:c,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:T(),dirty:u,skip_bound:!1,root:n.target||r.$$.root};o&&o(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,g,...q)=>{const C=q.length?q[0]:g;return s.ctx&&c(s.ctx[f],s.ctx[f]=C)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](C),a&&st(t,f)),g}):[],s.update(),a=!0,b(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){Q();const f=nt(n.target);s.fragment&&s.fragment.l(f),f.forEach(Y)}else s.fragment&&s.fragment.c();n.intro&&ct(t.$$.fragment),ot(t,n.target,n.anchor,n.customElement),R(),H()}p(r)}class Wt{$destroy(){ut(this,1),this.$destroy=h}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!J(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const _=[];function Gt(t,n=h){let e;const i=new Set;function c(u){if(G(t,u)&&(t=u,e)){const r=!_.length;for(const s of i)s[1](),_.push(s,t);if(r){for(let s=0;s<_.length;s+=2)_[s][0](_[s+1]);_.length=0}}}function l(u){c(u(t))}function o(u,r=h){const s=[u,r];return i.add(s),i.size===1&&(e=n(c)||h),u(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:c,update:l,subscribe:o}}export{Dt as A,ut as B,I as C,Gt as D,Mt as E,at as F,X as G,_t as H,ht as I,dt as J,bt as K,h as L,jt as M,lt as N,tt as O,kt as P,wt as Q,Ct as R,Wt as S,b as T,W as U,M as V,mt as W,Ot as X,ft as Y,pt as Z,nt as a,$t as b,Et as c,Y as d,Z as e,Nt as f,yt as g,it as h,It as i,At as j,gt as k,xt as l,St as m,zt as n,Lt as o,Bt as p,ct as q,Tt as r,G as s,v as t,qt as u,vt as v,Ft as w,Ht as x,ot as y,Pt as z};
