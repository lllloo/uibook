import{k,r as W,G as $t,H as at,I as z,u as nt,J as Ht,K as It,d as zt,e as yt,n as xt,L as vt,y as jt,o as Xt}from"./vue.esm-bundler-fHwfCklp.js";import{_ as Yt}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Y=Math.min,$=Math.max,ot=Math.round,et=Math.floor,F=t=>({x:t,y:t}),qt={left:"right",right:"left",bottom:"top",top:"bottom"},Kt={start:"end",end:"start"};function ft(t,e,n){return $(t,Y(e,n))}function Q(t,e){return typeof t=="function"?t(e):t}function H(t){return t.split("-")[0]}function Z(t){return t.split("-")[1]}function Et(t){return t==="x"?"y":"x"}function mt(t){return t==="y"?"height":"width"}function st(t){return["top","bottom"].includes(H(t))?"y":"x"}function pt(t){return Et(st(t))}function Ut(t,e,n){n===void 0&&(n=!1);const o=Z(t),i=pt(t),s=mt(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=it(r)),[r,it(r)]}function Gt(t){const e=it(t);return[ut(t),e,ut(e)]}function ut(t){return t.replace(/start|end/g,e=>Kt[e])}function Jt(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function Qt(t,e,n,o){const i=Z(t);let s=Jt(H(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(ut)))),s}function it(t){return t.replace(/left|right|bottom|top/g,e=>qt[e])}function Zt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Tt(t){return typeof t!="number"?Zt(t):{top:t,right:t,bottom:t,left:t}}function rt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function bt(t,e,n){let{reference:o,floating:i}=t;const s=st(e),r=pt(e),l=mt(r),c=H(e),a=s==="y",u=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,p=o[l]/2-i[l]/2;let f;switch(c){case"top":f={x:u,y:o.y-i.height};break;case"bottom":f={x:u,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-i.width,y:d};break;default:f={x:o.x,y:o.y}}switch(Z(e)){case"start":f[r]-=p*(n&&a?-1:1);break;case"end":f[r]+=p*(n&&a?-1:1);break}return f}const te=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,l=s.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=bt(a,o,c),p=o,f={},m=0;for(let g=0;g<l.length;g++){const{name:y,fn:h}=l[g],{x,y:v,data:R,reset:b}=await h({x:u,y:d,initialPlacement:o,placement:p,strategy:i,middlewareData:f,rects:a,platform:r,elements:{reference:t,floating:e}});if(u=x??u,d=v??d,f={...f,[y]:{...f[y],...R}},b&&m<=50){m++,typeof b=="object"&&(b.placement&&(p=b.placement),b.rects&&(a=b.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:u,y:d}=bt(a,p,c)),g=-1;continue}}return{x:u,y:d,placement:p,strategy:i,middlewareData:f}};async function Dt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:f=0}=Q(e,t),m=Tt(f),y=l[p?d==="floating"?"reference":"floating":d],h=rt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(y)))==null||n?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:a,rootBoundary:u,strategy:c})),x=d==="floating"?{...r.floating,x:o,y:i}:r.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),R=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},b=rt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:v,strategy:c}):x);return{top:(h.top-b.top+m.top)/R.y,bottom:(b.bottom-h.bottom+m.bottom)/R.y,left:(h.left-b.left+m.left)/R.x,right:(b.right-h.right+m.right)/R.x}}const ee=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:l,middlewareData:c}=e,{element:a,padding:u=0}=Q(t,e)||{};if(a==null)return{};const d=Tt(u),p={x:n,y:o},f=pt(i),m=mt(f),g=await r.getDimensions(a),y=f==="y",h=y?"top":"left",x=y?"bottom":"right",v=y?"clientHeight":"clientWidth",R=s.reference[m]+s.reference[f]-p[f]-s.floating[m],b=p[f]-s.reference[f],O=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let w=O?O[v]:0;(!w||!await(r.isElement==null?void 0:r.isElement(O)))&&(w=l.floating[v]||s.floating[m]);const D=R/2-b/2,B=w/2-g[m]/2-1,K=Y(d[h],B),U=Y(d[x],B),E=K,G=w-g[m]-U,A=w/2-g[m]/2+D,L=ft(E,A,G),S=!c.arrow&&Z(i)!=null&&A!=L&&s.reference[m]/2-(A<E?K:U)-g[m]/2<0,_=S?A<E?A-E:A-G:0;return{[f]:p[f]+_,data:{[f]:L,centerOffset:A-L-_,...S&&{alignmentOffset:_}},reset:S}}}),ne=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:l,platform:c,elements:a}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...y}=Q(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const h=H(i),x=H(l)===l,v=await(c.isRTL==null?void 0:c.isRTL(a.floating)),R=p||(x||!g?[it(l)]:Gt(l));!p&&m!=="none"&&R.push(...Qt(l,g,m,v));const b=[l,...R],O=await Dt(e,y),w=[];let D=((o=s.flip)==null?void 0:o.overflows)||[];if(u&&w.push(O[h]),d){const E=Ut(i,r,v);w.push(O[E[0]],O[E[1]])}if(D=[...D,{placement:i,overflows:w}],!w.every(E=>E<=0)){var B,K;const E=(((B=s.flip)==null?void 0:B.index)||0)+1,G=b[E];if(G)return{data:{index:E,overflows:D},reset:{placement:G}};let A=(K=D.filter(L=>L.overflows[0]<=0).sort((L,S)=>L.overflows[1]-S.overflows[1])[0])==null?void 0:K.placement;if(!A)switch(f){case"bestFit":{var U;const L=(U=D.map(S=>[S.placement,S.overflows.filter(_=>_>0).reduce((_,Wt)=>_+Wt,0)]).sort((S,_)=>S[1]-_[1])[0])==null?void 0:U[0];L&&(A=L);break}case"initialPlacement":A=l;break}if(i!==A)return{reset:{placement:A}}}return{}}}};async function oe(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=H(n),l=Z(n),c=st(n)==="y",a=["left","top"].includes(r)?-1:1,u=s&&c?-1:1,d=Q(e,t);let{mainAxis:p,crossAxis:f,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof m=="number"&&(f=l==="end"?m*-1:m),c?{x:f*u,y:p*a}:{x:p*a,y:f*u}}const ie=function(t){return{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:l}=e,c=await oe(e,t);return r===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:s+c.y,data:{...c,placement:r}}}}},re=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:y=>{let{x:h,y:x}=y;return{x:h,y:x}}},...c}=Q(t,e),a={x:n,y:o},u=await Dt(e,c),d=st(H(i)),p=Et(d);let f=a[p],m=a[d];if(s){const y=p==="y"?"top":"left",h=p==="y"?"bottom":"right",x=f+u[y],v=f-u[h];f=ft(x,f,v)}if(r){const y=d==="y"?"top":"left",h=d==="y"?"bottom":"right",x=m+u[y],v=m-u[h];m=ft(x,m,v)}const g=l.fn({...e,[p]:f,[d]:m});return{...g,data:{x:g.x-n,y:g.y-o}}}}};function M(t){return Lt(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function N(t){var e;return(e=(Lt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Lt(t){return t instanceof Node||t instanceof C(t).Node}function V(t){return t instanceof Element||t instanceof C(t).Element}function P(t){return t instanceof HTMLElement||t instanceof C(t).HTMLElement}function Rt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}function tt(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function se(t){return["table","td","th"].includes(M(t))}function gt(t){const e=ht(),n=T(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function le(t){let e=q(t);for(;P(e)&&!lt(e);){if(gt(e))return e;e=q(e)}return null}function ht(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function lt(t){return["html","body","#document"].includes(M(t))}function T(t){return C(t).getComputedStyle(t)}function ct(t){return V(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function q(t){if(M(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Rt(t)&&t.host||N(t);return Rt(e)?e.host:e}function St(t){const e=q(t);return lt(e)?t.ownerDocument?t.ownerDocument.body:t.body:P(e)&&tt(e)?e:St(e)}function J(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=St(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=C(i);return s?e.concat(r,r.visualViewport||[],tt(i)?i:[],r.frameElement&&n?J(r.frameElement):[]):e.concat(i,J(i,[],n))}function Pt(t){const e=T(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=P(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,l=ot(n)!==s||ot(o)!==r;return l&&(n=s,o=r),{width:n,height:o,$:l}}function wt(t){return V(t)?t:t.contextElement}function X(t){const e=wt(t);if(!P(e))return F(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Pt(e);let r=(s?ot(n.width):n.width)/o,l=(s?ot(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const ce=F(0);function _t(t){const e=C(t);return!ht()||!e.visualViewport?ce:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ae(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==C(t)?!1:e}function I(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=wt(t);let r=F(1);e&&(o?V(o)&&(r=X(o)):r=X(t));const l=ae(s,n,o)?_t(s):F(0);let c=(i.left+l.x)/r.x,a=(i.top+l.y)/r.y,u=i.width/r.x,d=i.height/r.y;if(s){const p=C(s),f=o&&V(o)?C(o):o;let m=p.frameElement;for(;m&&o&&f!==p;){const g=X(m),y=m.getBoundingClientRect(),h=T(m),x=y.left+(m.clientLeft+parseFloat(h.paddingLeft))*g.x,v=y.top+(m.clientTop+parseFloat(h.paddingTop))*g.y;c*=g.x,a*=g.y,u*=g.x,d*=g.y,c+=x,a+=v,m=C(m).frameElement}}return rt({width:u,height:d,x:c,y:a})}function fe(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=P(n),s=N(n);if(n===s)return e;let r={scrollLeft:0,scrollTop:0},l=F(1);const c=F(0);if((i||!i&&o!=="fixed")&&((M(n)!=="body"||tt(s))&&(r=ct(n)),P(n))){const a=I(n);l=X(n),c.x=a.x+n.clientLeft,c.y=a.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-r.scrollLeft*l.x+c.x,y:e.y*l.y-r.scrollTop*l.y+c.y}}function ue(t){return Array.from(t.getClientRects())}function kt(t){return I(N(t)).left+ct(t).scrollLeft}function de(t){const e=N(t),n=ct(t),o=t.ownerDocument.body,i=$(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=$(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+kt(t);const l=-n.scrollTop;return T(o).direction==="rtl"&&(r+=$(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:l}}function me(t,e){const n=C(t),o=N(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,l=0,c=0;if(i){s=i.width,r=i.height;const a=ht();(!a||a&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:r,x:l,y:c}}function pe(t,e){const n=I(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=P(t)?X(t):F(1),r=t.clientWidth*s.x,l=t.clientHeight*s.y,c=i*s.x,a=o*s.y;return{width:r,height:l,x:c,y:a}}function Ot(t,e,n){let o;if(e==="viewport")o=me(t,n);else if(e==="document")o=de(N(t));else if(V(e))o=pe(e,n);else{const i=_t(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return rt(o)}function Vt(t,e){const n=q(t);return n===e||!V(n)||lt(n)?!1:T(n).position==="fixed"||Vt(n,e)}function ge(t,e){const n=e.get(t);if(n)return n;let o=J(t,[],!1).filter(l=>V(l)&&M(l)!=="body"),i=null;const s=T(t).position==="fixed";let r=s?q(t):t;for(;V(r)&&!lt(r);){const l=T(r),c=gt(r);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||tt(r)&&!c&&Vt(t,r))?o=o.filter(u=>u!==r):i=l,r=q(r)}return e.set(t,o),o}function he(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?ge(e,this._c):[].concat(n),o],l=r[0],c=r.reduce((a,u)=>{const d=Ot(e,u,i);return a.top=$(d.top,a.top),a.right=Y(d.right,a.right),a.bottom=Y(d.bottom,a.bottom),a.left=$(d.left,a.left),a},Ot(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function we(t){return Pt(t)}function ye(t,e,n){const o=P(e),i=N(e),s=n==="fixed",r=I(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=F(0);if(o||!o&&!s)if((M(e)!=="body"||tt(i))&&(l=ct(e)),o){const a=I(e,!0,s,e);c.x=a.x+e.clientLeft,c.y=a.y+e.clientTop}else i&&(c.x=kt(i));return{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}function At(t,e){return!P(t)||T(t).position==="fixed"?null:e?e(t):t.offsetParent}function Nt(t,e){const n=C(t);if(!P(t))return n;let o=At(t,e);for(;o&&se(o)&&T(o).position==="static";)o=At(o,e);return o&&(M(o)==="html"||M(o)==="body"&&T(o).position==="static"&&!gt(o))?n:o||le(t)||n}const xe=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||Nt,s=this.getDimensions;return{reference:ye(e,await i(n),o),floating:{x:0,y:0,...await s(n)}}};function ve(t){return T(t).direction==="rtl"}const be={convertOffsetParentRelativeRectToViewportRelativeRect:fe,getDocumentElement:N,getClippingRect:he,getOffsetParent:Nt,getElementRects:xe,getClientRects:ue,getDimensions:we,getScale:X,isElement:V,isRTL:ve};function Re(t,e){let n=null,o;const i=N(t);function s(){clearTimeout(o),n&&n.disconnect(),n=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const{left:a,top:u,width:d,height:p}=t.getBoundingClientRect();if(l||e(),!d||!p)return;const f=et(u),m=et(i.clientWidth-(a+d)),g=et(i.clientHeight-(u+p)),y=et(a),x={rootMargin:-f+"px "+-m+"px "+-g+"px "+-y+"px",threshold:$(0,Y(1,c))||1};let v=!0;function R(b){const O=b[0].intersectionRatio;if(O!==c){if(!v)return r();O?r(!1,O):o=setTimeout(()=>{r(!1,1e-7)},100)}v=!1}try{n=new IntersectionObserver(R,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(R,x)}n.observe(t)}return r(!0),s}function Oe(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=wt(t),u=i||s?[...a?J(a):[],...J(e)]:[];u.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),s&&h.addEventListener("resize",n)});const d=a&&l?Re(a,n):null;let p=-1,f=null;r&&(f=new ResizeObserver(h=>{let[x]=h;x&&x.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{f&&f.observe(e)})),n()}),a&&!c&&f.observe(a),f.observe(e));let m,g=c?I(t):null;c&&y();function y(){const h=I(t);g&&(h.x!==g.x||h.y!==g.y||h.width!==g.width||h.height!==g.height)&&n(),g=h,m=requestAnimationFrame(y)}return n(),()=>{u.forEach(h=>{i&&h.removeEventListener("scroll",n),s&&h.removeEventListener("resize",n)}),d&&d(),f&&f.disconnect(),f=null,c&&cancelAnimationFrame(m)}}const Ae=(t,e,n)=>{const o=new Map,i={platform:be,...n},s={...i.platform,_c:o};return te(t,e,{...i,platform:s})};function Ce(t){return Bt(t)?(t.nodeName||"").toLowerCase():"#document"}function Ee(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Bt(t){return t instanceof Node||t instanceof Ee(t).Node}function Te(t){return t!=null&&typeof t=="object"&&"$el"in t}function dt(t){if(Te(t)){const e=t.$el;return Bt(e)&&Ce(e)==="#comment"?null:e}return t}function j(t){return typeof t=="function"?t():nt(t)}function De(t){return{name:"arrow",options:t,fn(e){const n=dt(j(t.element));return n==null?{}:ee({element:n,padding:t.padding}).fn(e)}}}function Ft(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Ct(t,e){const n=Ft(t);return Math.round(e*n)/n}function Le(t,e,n){n===void 0&&(n={});const o=n.whileElementsMounted,i=k(()=>{var w;return(w=j(n.open))!=null?w:!0}),s=k(()=>j(n.middleware)),r=k(()=>{var w;return(w=j(n.placement))!=null?w:"bottom"}),l=k(()=>{var w;return(w=j(n.strategy))!=null?w:"absolute"}),c=k(()=>{var w;return(w=j(n.transform))!=null?w:!0}),a=k(()=>dt(t.value)),u=k(()=>dt(e.value)),d=W(0),p=W(0),f=W(l.value),m=W(r.value),g=$t({}),y=W(!1),h=k(()=>{const w={position:f.value,left:"0",top:"0"};if(!u.value)return w;const D=Ct(u.value,d.value),B=Ct(u.value,p.value);return c.value?{...w,transform:"translate("+D+"px, "+B+"px)",...Ft(u.value)>=1.5&&{willChange:"transform"}}:{position:f.value,left:D+"px",top:B+"px"}});let x;function v(){a.value==null||u.value==null||Ae(a.value,u.value,{middleware:s.value,placement:r.value,strategy:l.value}).then(w=>{d.value=w.x,p.value=w.y,f.value=w.strategy,m.value=w.placement,g.value=w.middlewareData,y.value=!0})}function R(){typeof x=="function"&&(x(),x=void 0)}function b(){if(R(),o===void 0){v();return}if(a.value!=null&&u.value!=null){x=o(a.value,u.value,v);return}}function O(){i.value||(y.value=!1)}return at([s,r,l],v,{flush:"sync"}),at([a,u],b,{flush:"sync"}),at(i,O,{flush:"sync"}),Ht()&&It(R),{x:z(d),y:z(p),strategy:z(f),placement:z(m),middlewareData:z(g),isPositioned:z(y),floatingStyles:h,update:v}}const Se={class:"base-tooltip__content"},Mt={__name:"BaseTooltip",props:{reference:{type:Object,required:!1,default:null},full:{type:Boolean,default:!1}},setup(t){const e=t,n=k(()=>{var c;return e.reference?e.reference:(c=o.value)==null?void 0:c.parentElement}),o=W(),i=W(),{floatingStyles:s,middlewareData:r,placement:l}=Le(n,o,{placement:"bottom",middleware:[ie(10),ne(),re(),De({element:i})],whileElementsMounted:Oe});return(c,a)=>{var u,d;return Xt(),zt("div",{ref_key:"tooltipRef",ref:o,class:xt(["base-tooltip",{"base-tooltip--full":t.full}]),style:vt(nt(s))},[yt("div",{ref_key:"arrowRef",ref:i,class:xt(["base-tooltip__arrow",{[nt(l)]:!0}]),style:vt({left:`${(d=(u=nt(r))==null?void 0:u.arrow)==null?void 0:d.x}px`})},null,6),yt("div",Se,[jt(c.$slots,"default",{},void 0,!0)])],6)}}},ke=Yt(Mt,[["__scopeId","data-v-a6978a17"]]);Mt.__docgenInfo={exportName:"default",displayName:"BaseTooltip",description:"",tags:{},props:[{name:"reference",type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"full",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/atom/BaseTooltip.vue"]};export{ke as _};
