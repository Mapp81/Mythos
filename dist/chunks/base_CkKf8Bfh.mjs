import { c as createComponent, m as maybeRenderHead, d as addAttribute, f as renderScript, a as renderTemplate, g as renderHead, r as renderComponent, h as renderSlot } from './astro/server_BuQNP7kh.mjs';
import 'html-escaper';
/* empty css                            */
import 'clsx';

const LogoMythossinfondo = new Proxy({"src":"/_astro/LogoMythossinfondo.icLyrrWE.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/public/Images/LogoMythossinfondo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/public/Images/LogoMythossinfondo.png");
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative flex h-fit w-full flex-col bg-[#0e1014] border-b border-[#282e39] " style="font-family: Inter, &quot;Noto Sans&quot;, sans-serif;" data-astro-cid-3ef6ksr2> <div class="layout-container flex h-[200px] grow flex-col justify-center" data-astro-cid-3ef6ksr2> <header class="flex items-center justify-between whitespace-nowrap px-10 py-3" data-astro-cid-3ef6ksr2> <div class="hidden sm:flex items-center gap-4 text-white " data-astro-cid-3ef6ksr2> <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] " data-astro-cid-3ef6ksr2>Mitologías del Mundo</h2> </div> <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg" data-astro-cid-3ef6ksr2> <picture data-astro-cid-3ef6ksr2> <img${addAttribute(LogoMythossinfondo.src, "src")} alt="Logo Mythos" class="lg:w-[200px] lg:h-[300px] rounded-xl transition-transform duration-300 ease-out hover:scale-105" data-astro-cid-3ef6ksr2> </picture> </div> <div class="lg:hidden btn text-white" data-astro-cid-3ef6ksr2> <span class="material-symbols-outlined" data-astro-cid-3ef6ksr2>menu</span> </div> <nav class="hidden lg:block nav" data-astro-cid-3ef6ksr2> <div class="flex items-center gap-9" data-astro-cid-3ef6ksr2> <a class="text-white text-sm font-medium leading-normal hover:underline" href="/" data-astro-cid-3ef6ksr2>Inicio</a> <a class="text-white text-sm font-medium leading-normal hover:underline" href="" data-astro-cid-3ef6ksr2>Historias</a> <a class="text-white text-sm font-medium leading-normal hover:underline" href="/acercade" data-astro-cid-3ef6ksr2>Acerca de</a> </div> </nav> </header> </div> </div>  ${renderScript($$result, "C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-[#0e1014] border-t border-[#282e39] text-white px-10 py-8"> <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8"> <!-- Columna 1 --> <div> <h3 class="text-lg font-semibold tracking-tight">Mitologías del Mundo</h3> <p class="text-sm text-gray-400 mt-2 leading-relaxed">
Un viaje a través de los dioses, héroes y criaturas que forman las grandes leyendas de la humanidad.
</p> </div> <div class="flex flex-row justify-between md:flex-row md:justify-between md:gap-32"> <!-- Columna 2 --> <div> <h4 class="text-sm font-semibold tracking-wide mb-3">Secciones</h4> <ul class="flex flex-col gap-2 text-gray-300 text-sm"> <li><a href="/" class="hover:text-white transition">Inicio</a></li> <li><a href="#" class="hover:text-white transition">Historias</a></li> <li><a href="/acercade" class="hover:text-white transition">Acerca de</a></li> </ul> </div> <!-- Columna 3 --> <div> <h4 class="text-sm font-semibold tracking-wide mb-3">Mitologías</h4> <ul class="flex flex-col gap-2 text-gray-300 text-sm"> <li><a href="/griega" class="hover:text-white transition">Grecia</a></li> <li><a href="/romana" class="hover:text-white transition">Roma</a></li> <li><a href="/nordica" class="hover:text-white transition">Nórdica</a></li> <li><a href="/egipcia" class="hover:text-white transition">Egipto</a></li> </ul> </div> </div> </div> <!-- Texto inferior --> <div class="border-t border-[#282e39] mt-8 pt-4 text-center text-xs text-gray-500">
© 2025 Mitologías del Mundo — Todos los derechos reservados. Las imágenes de IA son creaciones de autor.
</div> </footer>`;
}, "C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/components/Footer.astro", void 0);

const $$Base = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/x-icon" href="data:image/x-icon;base64,"><link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin=""><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"><link rel="stylesheet" as="style" onload="this.rel='stylesheet'" href="https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40400%3B500%3B700%3B900&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/layouts/base.astro", void 0);

export { $$Base as $ };
