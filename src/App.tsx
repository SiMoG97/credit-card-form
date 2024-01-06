import LeftSide from "./components/LeftSide";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";
import { ErrorMessage, Input, Label } from "./components/Input";
import { AnimatePresence } from "framer-motion";
import { FormType, formSchema } from "./formSchema";
import AnimatedDiv from "./components/AnimatedDiv";
import iconComplete from "./assets/icon-complete.svg";
import { handleCardNUmberSpacing } from "./utils";

function App() {
  const { register, control, watch, setValue, formState, handleSubmit, reset } =
    useForm<FormType>({ resolver: zodResolver(formSchema) });
  const { errors, isSubmitSuccessful } = formState;

  function numbersOnlyHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    // Allow digits, Backspace, Tab, and Delete
    if (
      !(event.key >= "0" && event.key <= "9") &&
      event.key !== "Backspace" &&
      event.key !== "Delete" &&
      event.key !== "Enter" &&
      event.key !== "Tab"
    ) {
      event.preventDefault();
    }
  }
  function charsOnlyHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    // Allow characters, Backspace, Tab, space, and Delete
    if (
      !(event.key >= "a" && event.key <= "z") &&
      !(event.key >= "A" && event.key <= "Z") &&
      event.key !== "Backspace" &&
      event.key !== "Enter" &&
      event.key !== "Delete" &&
      event.key !== " " &&
      event.key !== "Tab"
    ) {
      event.preventDefault();
    }
  }

  return (
    <main>
      <div className="h-screen md:flex">
        {/* Left Side starts here*/}
        <LeftSide
          cardHolderName={watch("cardHolderName")}
          cardNumber={handleCardNUmberSpacing(watch("cardNumber", ""))}
          year={watch("year")}
          month={watch("month")}
          cvc={watch("cvc")}
        />
        {/* Left Side ends here*/}
        {/* Right side start here */}

        <div className="flex w-full items-center justify-center overflow-hidden px-3 md:h-full md:w-2/3">
          <div className="w-96 overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSubmitSuccessful ? (
                <AnimatedDiv key="somehting">
                  <form
                    onSubmit={handleSubmit((data) => {
                      console.log(data);
                    })}
                    className="flex w-full flex-col gap-4"
                  >
                    <div>
                      <Label htmlFor="cardHolderName">cardholder name</Label>
                      <Input
                        {...register("cardHolderName", {
                          required: "Required",
                        })}
                        type="text"
                        placeholder="e.g Jane Appleseed"
                        maxLength={30}
                        onKeyDown={charsOnlyHandler}
                        notValid={!!errors.cardHolderName}
                      />

                      <ErrorMessage
                        showError={!!errors.cardHolderName}
                        message={errors.cardHolderName?.message}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardNumber">card number</Label>
                      <Input
                        {...register("cardNumber")}
                        id="cardNumber"
                        type="text"
                        maxLength={19}
                        placeholder="e.g 1234 5678 9123 0000"
                        notValid={!!errors.cardNumber}
                        onKeyUp={() => {
                          setValue(
                            "cardNumber",
                            handleCardNUmberSpacing(watch("cardNumber", "")),
                          );
                        }}
                        onKeyDown={numbersOnlyHandler}
                      />
                      <ErrorMessage
                        showError={!!errors.cardNumber}
                        message={errors.cardNumber?.message}
                      />
                    </div>

                    <div className="flex gap-2">
                      <div className="w-full">
                        <Label htmlFor="date">exp. date (mm/yy)</Label>
                        <div className="flex gap-2">
                          <div>
                            <Input
                              {...register("month", {
                                setValueAs: (v) =>
                                  v === "" ? undefined : parseInt(v, 10),
                              })}
                              id="date"
                              type="text"
                              maxLength={2}
                              placeholder="MM"
                              onKeyDown={numbersOnlyHandler}
                              notValid={!!errors.month}
                            />{" "}
                            <ErrorMessage
                              showError={!!errors.month}
                              message={errors.month?.message}
                            />
                          </div>
                          <div>
                            <Input
                              {...register("year", {
                                setValueAs: (v) =>
                                  v === "" ? undefined : parseInt(v, 10),
                              })}
                              type="text"
                              maxLength={2}
                              placeholder="YY"
                              onKeyDown={numbersOnlyHandler}
                              notValid={!!errors.year}
                            />
                            <ErrorMessage
                              showError={!!errors.year}
                              message={errors.year?.message}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <Label htmlFor="cvc">cvc</Label>
                        <Input
                          {...register("cvc", {
                            setValueAs: (v) =>
                              v === "" ? undefined : parseInt(v, 10),
                            required: true,
                          })}
                          id="cvc"
                          type="text"
                          maxLength={3}
                          placeholder="e.g. 123"
                          onKeyDown={numbersOnlyHandler}
                          notValid={!!errors.cvc}
                        />

                        <ErrorMessage
                          showError={!!errors.cvc}
                          message={errors.cvc?.message}
                        />
                      </div>
                    </div>
                    <button className="mt-4 w-full rounded-md bg-myviolet-900 py-4 text-lg text-grayviolet-200">
                      Confirm
                    </button>
                  </form>
                </AnimatedDiv>
              ) : (
                <AnimatedDiv
                  key="anotherone"
                  className="flex w-full flex-col items-center"
                >
                  <img src={iconComplete} className="mx-auto mb-10" />
                  <h1 className="my-4 text-3xl tracking-wide text-myviolet-900">
                    THANK YOU!
                  </h1>
                  <p className="text-grayviolet-400">
                    We've added your card details
                  </p>
                  <button
                    onClick={() => {
                      reset();
                    }}
                    className="mt-10 w-full rounded-md bg-myviolet-900 py-4 text-lg text-grayviolet-200"
                  >
                    Continue
                  </button>
                </AnimatedDiv>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right side ends here */}
      </div>
      {/* <DevTool control={control} /> */}
    </main>
  );
}

export default App;
