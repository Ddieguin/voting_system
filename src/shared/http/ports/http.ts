export interface IHttpResponse {
    body: any;
    statusCode: number;
}

//TODO refactoring the types
export interface IHttpRequest {
    body?: any;
    voter_id?: any;
    params?: any;
    query?: any;
}