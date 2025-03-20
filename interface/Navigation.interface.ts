
type ActionType = "CREATE-FLOW" | "EDIT" | "SAVE-FLOW";

export interface PageAction {
    type: ActionType;
    // Add more properties here if needed in the future
}

export interface SimpleAppHeaderProps {
    title?: string;
    subtitle?: string;
    pageAction?: PageAction;
    isBackButton?: boolean;
    nodeId?: string;
    isLanding?: boolean;
}