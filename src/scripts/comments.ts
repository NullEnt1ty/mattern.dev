export function initGiscusScript() {
	const giscusScriptElement = document.createElement("script");
	giscusScriptElement.src = "https://giscus.app/client.js";
	giscusScriptElement.setAttribute("data-repo", "NullEnt1ty/mattern.dev");
	giscusScriptElement.setAttribute("data-repo-id", "R_kgDOKsc0jw");
	giscusScriptElement.setAttribute("data-category", "Discussions");
	giscusScriptElement.setAttribute("data-category-id", "DIC_kwDOKsc0j84Clsp1");
	giscusScriptElement.setAttribute("data-mapping", "pathname");
	giscusScriptElement.setAttribute("data-strict", "1");
	giscusScriptElement.setAttribute("data-reactions-enabled", "1");
	giscusScriptElement.setAttribute("data-emit-metadata", "0");
	giscusScriptElement.setAttribute("data-input-position", "top");
	giscusScriptElement.setAttribute("data-theme", "preferred_color_scheme");
	giscusScriptElement.setAttribute("data-lang", "en");
	giscusScriptElement.crossOrigin = "anonymous";
	giscusScriptElement.async = true;

	return giscusScriptElement;
}

export function setAlwaysLoadComments(shouldLoad: boolean) {
	localStorage.setItem("alwaysLoadComments", shouldLoad ? "true" : "false");
}

export function getAlwaysLoadComments() {
	return localStorage.getItem("alwaysLoadComments") === "true";
}
