/// <reference types="@rbxts/types/plugin" />

declare module "@rbxts/services" {
	// @ts-expect-error
	export * from "@rbxts/services/index";

	export const Selection: Selection;
	export const CoreGui: CoreGui;
}
