export enum BroadcastEvent {
    FunctionDeleted,
    FunctionAdded,
    FunctionSelected,
    FunctionUpdated,
    FunctionNew,
    BusyState,
    TutorialStep,
    IntegrateChanged,
    Error,
    VersionUpdated,
    TrialExpired,
    ResetKeySelection,
    RefreshPortal,
    ClearError,
    OpenTab,
    DirtyStateChange,
    AppsDashboard,
    AppDashboard
}

export interface DirtyStateEvent {
    dirty: boolean;
    reason: string | null;
}