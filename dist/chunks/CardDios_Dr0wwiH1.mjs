import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_BuQNP7kh.mjs';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$CardDios = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardDios;
  const { dios } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/dios/${dios.mitologia}/${dios.slug}`, "href")} class="flex justify-center items-center "> <div class="flex flex-col lg:w-1/2 overflow-hidden h-full mb-6 "> <div class="rounded-lg mb-2 overflow-hidden"> <picture> <img${addAttribute(dios.imagen, "src")}${addAttribute(dios.nombre, "alt")} class="w-full h-auto rounded-xl transition-transform duration-300 ease-out hover:scale-105"> </picture> </div> <div class="line-clamp-5"> <p class="text-[#252525] text-base font-medium leading-normal hover:underline">${dios.nombre}</p> <p class="text-[#757575] text-sm font-normal leading-normal text-justify">${dios.descripcion}</p> </div> </div> </a>`;
}, "C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/components/CardDios.astro", void 0);

export { $$CardDios as $ };
