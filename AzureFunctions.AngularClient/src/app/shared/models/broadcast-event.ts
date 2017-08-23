export enum BroadcastEvent {
    TreeViewChanged,
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
    DirtyStateChange
}

export interface DirtyStateEvent {
    dirty: boolean;
    reason: string | null;
}