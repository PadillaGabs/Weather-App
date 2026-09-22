import { useState } from "react";

export const useForm = (onSearch) => {
  const [inputValue, setInputValue] = useState("");

    const onChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = async(e) => {
        e.preventDefault()
        if(inputValue.trim().length <= 1) return;

        onSearch(inputValue)
        setInputValue("");
    }

  return {
    inputValue,
    onChange,
    onSubmit,
  }
}