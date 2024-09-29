document.querySelectorAll("li").forEach(function(e){var t=document.createElement("span");t.textContent=e.firstChild.textContent,e.firstChild.replaceWith(t),t.addEventListener("click",function(){var t=e.querySelector("ul");t&&(t.style.display="none"===t.style.display?"block":"none")})});
//# sourceMappingURL=index.b83390a6.js.map
