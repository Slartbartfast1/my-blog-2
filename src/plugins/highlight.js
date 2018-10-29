import Vue from 'vue'
import Hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript.js'
import 'highlight.js/styles/atom-one-light.css'
Hljs.registerLanguage('javascript', javascript)
let Highlight = {};
Highlight.install = function (Vue, options) {
    Vue.directive('highlight', function (el) {
        let blocks = el.querySelectorAll('pre code');
        console.log(blocks)
        blocks.forEach((block) => {
            Hljs.highlightBlock(block);
        })
    })
}
;

Vue.use(Highlight)
