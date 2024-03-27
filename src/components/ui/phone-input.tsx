import React from "react";
import ReactPhoneInput, {
  PhoneInputProps as ReactPhoneInputProps,
} from "react-phone-input-2";

const PhoneInput = (props: ReactPhoneInputProps) => {
  return <ReactPhoneInput {...props} />;
};

export { PhoneInput };
