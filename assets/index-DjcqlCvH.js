import{ae as e}from"./index-s8FnwFmv.js";const o={},c=e.createContext(o);function u(n){const t=e.useContext(c);return e.useMemo(function(){return typeof n=="function"?n(t):{...t,...n}},[t,n])}function s(n){let t;return n.disableParentContext?t=typeof n.components=="function"?n.components(o):n.components||o:t=u(n.components),e.createElement(c.Provider,{value:t},n.children)}export{s as M,u};
