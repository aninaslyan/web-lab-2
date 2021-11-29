// Observer type
export type Observer = (T: string) => void;

// Iterator types
// IterableIterator type comes from ts
export interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}

interface IteratorResult<T> {
    done: boolean;
    value: T;
}
