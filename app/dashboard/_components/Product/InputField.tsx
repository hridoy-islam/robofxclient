"use client";

import { Input } from "@/components/ui/input";
import React from "react";

interface InputFieldProps {
  label: string;
  id: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  value,
  onChange,
  type = "text",
}) => (
  <div className="flex flex-col">
    <label htmlFor={id}>{label}</label>
    <Input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="roboinput"
    />
  </div>
);

export default InputField;
