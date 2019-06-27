import { ComponentOptions, PluginObject, VueConstructor, PluginFunction } from "vue"
import { Vue } from "vue/types/vue"

export interface VueDaumPostcodePluginOptions {
  name?: string
}

export const install: PluginFunction<VueDaumPostcodePluginOptions>

declare const VueDaumPostcodePlugin: VueDaumPostcodePlugin
export default VueDaumPostcodePlugin
export interface VueDaumPostcodePlugin {
  install: PluginFunction<VueDaumPostcodePluginOptions>
}

export declare const VueDaumPostcode: ComponentOptions<any, any, any, any>
