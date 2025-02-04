
interface inputProps{
    value: string
    onChange: (e: any) => void
    label: string
    placeholder: string
    name: string
    type: string
}
const Input = ({
    value,
    onChange,
    label,
    placeholder,
    name,
    type= 'text' || 'number' || 'email',
}: inputProps) => {
  return (
    <div className="flex flex-col w-full">
        <label htmlFor={name} className="font-normal text-[10px] mb-2">{label}</label>
        <input 
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            className="outline-none border rounded-lg font-normal text-[10px] bg-Gray p-2 w-full"
             />
    </div>
  )
}

export default Input