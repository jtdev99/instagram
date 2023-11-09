export type TResponseDto<T> = {
    status: boolean;
    msg: string;
    data: T;
};
