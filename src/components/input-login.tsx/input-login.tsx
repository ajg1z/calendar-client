import React from "react";
import "./input-login.scss";
import InputMask from "react-input-mask";

const formats: { [key: string]: any } = {
  "2": "(999)-999-99",
  "7": "999-999-999",
  "6": "9-99-999-99-99",
};
export const InputLogin: React.FC<{
  value: string;
  setValue: any;
  error: boolean;
  setError: any;
}> = ({ error, setError, setValue, value }) => {
  const formatChars = {
    "9": "[0-9]",
    w: "[A-Za-z]",
    "*": "[A-Za-z0-9]",
  };
  const [type, setType] = React.useState<"tell" | "letter" | null>(null);
  const [firstSymbol, setFirstSymbol] = React.useState("");

  const defineMask = React.useMemo(() => {
    // debugger
    switch (type) {
      case "tell":
        if (formats[firstSymbol]) {
          return formats[firstSymbol];
        } else {
          setError(true);
          return "9";
        }
      case "letter":
        return "w".repeat(255);
      default:
        return "*";
    }
  }, [value, type]);
  console.log(firstSymbol);
  return (
    <InputMask
      // @ts-ignore:next-line
      beforeMaskedValueChange={(values, oldState, userInput) => {
        // debugger
        // if(!inputVal.length)
        const inputVal = values.value;
        // if(!inputVal)  return {
        //     value:inputVal,
        //     selection:{start:values.selection.start,end:values.selection.end}
        // }

        if (inputVal.length === 1) {
          if (Number.isNaN(inputVal)) {
            setType("letter");
          } else setType("tell");
          setFirstSymbol(inputVal);
        }
        if (!inputVal) setFirstSymbol("*");
        setValue(inputVal);
        // debugger
        return {
          value: inputVal,
          selection: {
            start: values.selection.start + 1,
            end: values.selection.end + 1,
          },
        };
      }}
      formatChars={formatChars}
      className="input-login"
      maskChar={""}
      mask={defineMask}
      value={value}
    />
  );
};
