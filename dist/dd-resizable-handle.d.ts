declare module GridStack {
/**
 * dd-resizable-handle.ts 7.2.3-dev
 * Copyright (c) 2021-2022 Alain Dumesny - see GridStack root license
 */
export interface DDResizableHandleOpt {
    start?: (event: any) => void;
    move?: (event: any) => void;
    stop?: (event: any) => void;
}
export class DDResizableHandle {
    constructor(host: HTMLElement, direction: string, option: DDResizableHandleOpt);
    /** call this when resize handle needs to be removed and cleaned up */
    destroy(): DDResizableHandle;
}

}
