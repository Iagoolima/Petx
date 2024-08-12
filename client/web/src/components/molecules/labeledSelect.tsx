import React, { useEffect, useState } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface LabeledSelectProps {
  id: string;
  label: string;
  color: string;
  fontSize: string;
  placeholder: string;
  width: string;
  height: string;
  register: UseFormRegister<any>;
  name: string;
  error?: FieldError;
  list: string;
  params: string;
  defaultValue: string;
}

const LabeledSelect: React.FC<LabeledSelectProps> = ({
  id,
  label,
  color,
  fontSize,
  placeholder,
  width,
  height,
  register,
  name,
  list,
  params,
  defaultValue,
}) => {
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(`/data/${list}.json`);
        const data = await response.json();

        if (data && data[params] && Array.isArray(data[params])) {
          setOptions([defaultValue, ...data[params]]);
        } else {
          console.warn(`No valid options found for params: ${params}`);
          setOptions([]);
        }
      } catch (error) {
        console.error("Erro ao carregar opções:", error);
        setOptions([]);
      }
    };

    fetchOptions();
  }, [params, defaultValue]);
  const filteredOptions = options.filter((option) => option !== defaultValue);

  return (
    <div className="flex flex-col relative w-full">
      <label htmlFor={id} className={`${color} ${fontSize} mb-1`}>
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          className={`${width} ${height} px-3 py-2 border rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-blue-500 text-custom-blue`}
          {...register(name, {
            required: `${label} é obrigatório`,
          })}
        >
          <option value="">{placeholder}</option>
          {defaultValue && <option value={defaultValue}>{defaultValue}</option>}
          {filteredOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LabeledSelect;
