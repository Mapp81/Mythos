import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BuQNP7kh.mjs';
import 'html-escaper';
import { $ as $$Base } from '../chunks/base_CkKf8Bfh.mjs';
import { $ as $$CardDios } from '../chunks/CardDios_Dr0wwiH1.mjs';
import { d as dioses } from '../chunks/dioses_CrlIk1lO.mjs';
export { renderers } from '../renderers.mjs';

const $$Romana = createComponent(($$result, $$props, $$slots) => {
  const diosesRomana = dioses.filter((d) => d.mitologia === "Romana");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center mt-10 w-full"> <div class="flex justify-center flex-col items-center"> <h1 class="text-4xl font-bold text-[#252525] mb-8">Dioses de Roma</h1> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2 lg:p-4 items-center"> ${diosesRomana.map((dios) => renderTemplate`${renderComponent($$result2, "DiosCard", $$CardDios, { "dios": dios })}`)} </div> </div> </section> ` })}`;
}, "C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/pages/romana.astro", void 0);

const $$file = "C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/pages/romana.astro";
const $$url = "/romana";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Romana,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
