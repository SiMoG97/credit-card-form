import { ComponentProps, forwardRef } from "react";

type InputProps = { notValid: boolean } & ComponentProps<"input">;

// export default function Input(props: InputProps) {
//     return <input {...props} />;
// }

export const Input = forwardRef<HTMLInputElement, InputProps>(function (
  { notValid, ...props },
  ref,
) {
  return (
    <div className="relative  w-full  p-[2px]">
      <input
        className={`peer h-full w-full rounded-[6px] border-transparent px-4 py-2  text-2xl text-myviolet-900 outline-none placeholder:text-grayviolet-200 `}
        ref={ref}
        {...props}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 top-0  -z-10 rounded-lg bg-grayviolet-200  from-indigo-600 to-violet-900  ${
          notValid ? "bg-red-500" : "peer-focus:bg-gradient-to-r"
        }`}
      ></div>
    </div>
  );
});

type LabelProps = { children: React.ReactNode } & ComponentProps<"label">;
export function Label({ children, ...props }: LabelProps) {
  return (
    <label
      className="block truncate text-ellipsis py-2 uppercase text-myviolet-900 "
      {...props}
    >
      {children}
    </label>
  );
}

export function ErrorMessage({
  message,
  showError,
}: {
  message?: string;
  showError: boolean;
}) {
  return (
    <>
      {showError ? (
        <p className="mt-1 text-xs text-red-500">{message}</p>
      ) : (
        <></>
      )}
    </>
  );
}
