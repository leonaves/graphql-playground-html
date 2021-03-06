import { GraphQLConfigData } from 'graphql-config';
export interface MiddlewareOptions {
    endpoint?: string;
    subscriptionEndpoint?: string;
    workspaceName?: string;
    env?: any;
    config?: GraphQLConfigData;
    settings?: ISettings;
    schema?: IntrospectionResult;
    tabs?: Tab[];
    codeTheme?: EditorColours;
}
export declare type Theme = 'dark' | 'light';
export interface ISettings {
    'general.betaUpdates': boolean;
    'editor.theme': Theme;
    'editor.reuseHeaders': boolean;
    'tracing.hideTracingResponse': boolean;
    'editor.fontSize': number;
    'editor.fontFamily': string;
    'request.credentials': string;
}
export interface EditorColours {
    property: string;
    comment: string;
    punctuation: string;
    keyword: string;
    def: string;
    qualifier: string;
    attribute: string;
    number: string;
    string: string;
    builtin: string;
    string2: string;
    variable: string;
    meta: string;
    atom: string;
    ws: string;
    selection: string;
    cursorColor: string;
    editorBackground: string;
    resultBackground: string;
    leftDrawerBackground: string;
    rightDrawerBackground: string;
}
export interface IntrospectionResult {
    __schema: any;
}
export interface RenderPageOptions extends MiddlewareOptions {
    version: string;
    env?: any;
}
export interface Tab {
    endpoint: string;
    query: string;
    variables?: string;
    responses?: string[];
    headers?: {
        [key: string]: string;
    };
}
export declare function renderPlaygroundPage(options: RenderPageOptions): string;
