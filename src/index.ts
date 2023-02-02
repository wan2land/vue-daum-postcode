import { App, Plugin } from "vue";

import VueDaumPostcode from "./VueDaumPostcode";
import { createVueDaumPostcode } from "./createVueDaumPostcode";
import type { CreateVueDaumPostcodeOptions } from "./createVueDaumPostcode";
import type {
  VueDaumPostcodeTheme,
  VueDaumPostcodeCompleteResult,
  VueDaumPostcodeSearchResult,
  VueDaumPostcodeResizeResult,
} from "./interfaces";

export interface VueDaumPostcodeInstallOptions
  extends CreateVueDaumPostcodeOptions {
  name?: string | null;
}

export function install(
  app: App,
  { name, ...options }: VueDaumPostcodeInstallOptions = {}
) {
  app.component(
    name ?? "VueDaumPostcode",
    Object.keys(options).length > 0
      ? createVueDaumPostcode(options)
      : VueDaumPostcode
  );
}

const plugin: Plugin = {
  install,
};

export {
  plugin as default,
  createVueDaumPostcode,
  CreateVueDaumPostcodeOptions,
  VueDaumPostcodeTheme,
  VueDaumPostcode,
  VueDaumPostcodeCompleteResult,
  VueDaumPostcodeSearchResult,
  VueDaumPostcodeResizeResult,
};
