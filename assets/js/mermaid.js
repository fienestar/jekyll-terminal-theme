import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

const mermaid_code_list = Array.from(document.getElementsByClassName("language-mermaid"));

mermaid_code_list.forEach(mermaid_code => {
    const pre = mermaid_code.parentNode;
    pre.className = 'mermaid';
    pre.innerHTML = mermaid_code.innerHTML;
})

mermaid.initialize({
    theme: 'dark',
    startOnLoad: true
});
