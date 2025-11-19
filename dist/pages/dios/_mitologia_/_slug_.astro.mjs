import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_BuQNP7kh.mjs';
import 'html-escaper';
import { $ as $$Base } from '../../../chunks/base_CkKf8Bfh.mjs';
import { d as dioses } from '../../../chunks/dioses_CrlIk1lO.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return dioses.map((dios) => ({
    params: {
      mitologia: dios.mitologia,
      // ej. "griega"
      slug: dios.slug
    },
    props: { dios }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { dios } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate`${dios ? renderTemplate`${maybeRenderHead()}<section class="flex justify-center py-10 text-[#252525] mb-12"> <div class="flex justify-center flex-col items-left lg:w-1/2 px-6"> <div class="flex justify-center items-center"> <div class="rounded-lg mb-6 w-[400px] h-[600px]"> <picture> <img${addAttribute(dios.imagen, "src")}${addAttribute(dios.nombre, "alt")} class="w-full h-auto rounded-xl"> </picture> </div> </div> <h2 class="text-3xl font-bold mb-4 text-center">${dios.nombre}</h2> <p class="text-center mb-6">${dios.descripcion}</p> <h3 class="text-xl font-semibold mt-8 p-1 bg-[#bdbdbd] w-full text-center">Atributos</h3> <ul class="list-none list-inside mb-4 text-[#757575]"> ${Object.entries(dios.atributos).map(([key, val]) => renderTemplate`<li><strong>${key}:</strong> ${val}</li>`)} </ul> <h3 class="text-xl font-semibold mt-8 p-1 bg-[#bdbdbd] w-full text-center">Familia</h3> <ul class="list-none list-inside text-[#757575]"> ${Object.entries(dios.familia ?? {}).map(([key, val]) => renderTemplate`<li><strong>${key}:</strong> ${val}</li>`)} </ul> </div> </section>` : renderTemplate`<p class="text-center text-red-400">Dios no encontrado</p>`}` })}`;
}, "C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/pages/dios/[mitologia]/[slug].astro", void 0);

const $$file = "C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/pages/dios/[mitologia]/[slug].astro";
const $$url = "/dios/[mitologia]/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
