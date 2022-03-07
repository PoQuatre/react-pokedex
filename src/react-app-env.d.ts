/// <reference types="react-scripts" />

declare module "@fortawesome/fontawesome-svg-core/import.macro" {
  export function regular(
    icon: string
  ): import("@fortawesome/fontawesome-svg-core").IconProp;
  export function solid(
    icon: string
  ): import("@fortawesome/fontawesome-svg-core").IconProp;
}
