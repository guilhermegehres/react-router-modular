export interface Route{
    path: string | string [] | undefined;
    guards?: Array<Guard>
    component?: any;
    exact?: boolean;
    redirectTo?: string;
} 
export interface Guard{
    canActivate: () => boolean;
}