export enum BroadcastEvent {
    FunctionDeleted,
    FunctionAdded,
    FunctionSelected,
    FunctionUpdated,
    // FunctionNew,
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
    AppDashboard,
    FunctionsDashboard,
    CreateFunctionAutoDetectDashboard,
    CreateFunctionDashboard,
    CreateFunctionQuickstartDashboard
}

export interface DirtyStateEvent {
    dirty: boolean;
    reason: string | null;
}