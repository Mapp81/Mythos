import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BuQNP7kh.mjs';
import 'html-escaper';
import { $ as $$Base } from '../chunks/base_CkKf8Bfh.mjs';
import { $ as $$CardDios } from '../chunks/CardDios_Dr0wwiH1.mjs';
import { d as dioses } from '../chunks/dioses_CrlIk1lO.mjs';
export { renderers } from '../renderers.mjs';

const $$Azteca = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center mt-10"> <h1 class="text-4xl font-bold text-black mb-8">🌩️ Dioses Aztecas</h1> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4"> ${dioses.map((dios) => renderTemplate`${renderComponent($$result2, "DiosCard", $$CardDios, { "dios": dios })}`)} </div> </section> ` })}`;
}, "C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/pages/azteca.astro", void 0);

const $$file = "C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/pages/azteca.astro";
const $$url = "/azteca";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Azteca,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
