export interface Message {
    to: string | undefined,
    body: string | undefined,
    timestamp: string | undefined
}


export interface MessageResponse {
    success: boolean,
    code: number,
    messages: Message[],
}

export interface ErrorMessage {
    headers: {},
    error: {},
    message: string,
    name: string,
    ok: boolean,
    status: number,
    statusText: string,
    url: string,
}