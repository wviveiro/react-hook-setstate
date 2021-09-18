declare const useCreateState: <T>(initialArgs: T) => [T, (args: Partial<T>) => void];
export default useCreateState;
