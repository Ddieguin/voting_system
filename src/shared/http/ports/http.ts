export interface IHttpResponse {
    statusCode: number;
    body: any;
}

//TODO refactoring the types
export interface IHttpRequest {
    body?: any;
    user_id?: any;
    params?: any;
    query?: any;
}