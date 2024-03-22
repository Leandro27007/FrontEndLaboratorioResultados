
export interface BaseResponse<T> {
    data: T,
    ok: boolean,
    error: string
}