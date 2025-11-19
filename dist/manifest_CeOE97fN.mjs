import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, i as decodeKey } from './chunks/astro/server_BuQNP7kh.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/","cacheDir":"file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/node_modules/.astro/","outDir":"file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/","srcDir":"file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/src/","publicDir":"file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/public/","buildClientDir":"file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/client/","buildServerDir":"file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/server/","adapterName":"","routes":[{"file":"file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/acercade/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/acercade","isIndex":false,"type":"page","pattern":"^\\/acercade\\/?$","segments":[[{"content":"acercade","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acercade.astro","pathname":"/acercade","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/azteca/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/azteca","isIndex":false,"type":"page","pattern":"^\\/azteca\\/?$","segments":[[{"content":"azteca","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/azteca.astro","pathname":"/azteca","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/egipcia/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/egipcia","isIndex":false,"type":"page","pattern":"^\\/egipcia\\/?$","segments":[[{"content":"egipcia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/egipcia.astro","pathname":"/egipcia","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/griega/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/griega","isIndex":false,"type":"page","pattern":"^\\/griega\\/?$","segments":[[{"content":"griega","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/griega.astro","pathname":"/griega","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/maya/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/maya","isIndex":false,"type":"page","pattern":"^\\/maya\\/?$","segments":[[{"content":"maya","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/maya.astro","pathname":"/maya","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/nordica/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nordica","isIndex":false,"type":"page","pattern":"^\\/nordica\\/?$","segments":[[{"content":"nordica","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nordica.astro","pathname":"/nordica","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/romana/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/romana","isIndex":false,"type":"page","pattern":"^\\/romana\\/?$","segments":[[{"content":"romana","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/romana.astro","pathname":"/romana","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/pages/acercade.astro",{"propagation":"none","containsHead":true}],["C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/pages/azteca.astro",{"propagation":"none","containsHead":true}],["C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/pages/dios/[mitologia]/[slug].astro",{"propagation":"none","containsHead":true}],["C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/pages/egipcia.astro",{"propagation":"none","containsHead":true}],["C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/pages/griega.astro",{"propagation":"none","containsHead":true}],["C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/pages/maya.astro",{"propagation":"none","containsHead":true}],["C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/pages/nordica.astro",{"propagation":"none","containsHead":true}],["C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/pages/romana.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/acercade@_@astro":"pages/acercade.astro.mjs","\u0000@astro-page:src/pages/azteca@_@astro":"pages/azteca.astro.mjs","\u0000@astro-page:src/pages/dios/[mitologia]/[slug]@_@astro":"pages/dios/_mitologia_/_slug_.astro.mjs","\u0000@astro-page:src/pages/egipcia@_@astro":"pages/egipcia.astro.mjs","\u0000@astro-page:src/pages/griega@_@astro":"pages/griega.astro.mjs","\u0000@astro-page:src/pages/maya@_@astro":"pages/maya.astro.mjs","\u0000@astro-page:src/pages/nordica@_@astro":"pages/nordica.astro.mjs","\u0000@astro-page:src/pages/romana@_@astro":"pages/romana.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CeOE97fN.mjs","C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BzAFutaX.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/AnitaSecretCode/AnitaSecretCode/Proyectos Mapp81/Dioses/dioses/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\".btn\"),t=document.querySelector(\".nav\");e?.addEventListener(\"click\",()=>{console.log(t?.textContent),t?.classList.toggle(\"nav-active\")});"]],"assets":["/file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/acercade/index.html","/file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/azteca/index.html","/file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/egipcia/index.html","/file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/griega/index.html","/file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/maya/index.html","/file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/nordica/index.html","/file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/romana/index.html","/file:///C:/AnitaSecretCode/AnitaSecretCode/Proyectos%20Mapp81/Dioses/dioses/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"serverIslandNameMap":[],"key":"CIJQrx1uKb2ZRHMopVYsHm79a+C94+SuNi8OPXSk4zc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
