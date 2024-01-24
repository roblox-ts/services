/// <reference types="@rbxts/types/plugin" />

declare module "@rbxts/services" {
	// @ts-ignore
	export * from "@rbxts/services/index";
}

declare module "@rbxts/services" {
	export const ChangeHistoryService: ChangeHistoryService;
	export const CoreGui: CoreGui;
	export const DebuggerManager: DebuggerManager;
	export const NetworkClient: NetworkClient;
	export const NetworkServer: NetworkServer;
	export const NetworkSettings: NetworkSettings;
	export const PackageService: PackageService;
	export const PluginDebugService: PluginDebugService;
	export const PluginGuiService: PluginGuiService;
	export const RenderSettings: RenderSettings;
	export const RobloxPluginGuiService: RobloxPluginGuiService;
	export const ScriptEditorService: ScriptEditorService;
	export const Selection: Selection;
	export const Studio: Studio;
	export const StudioData: StudioData;
	export const StudioService: StudioService;
	export const TaskScheduler: TaskScheduler;
	export const TestService: TestService;
	export const VersionControlService: VersionControlService;
}
