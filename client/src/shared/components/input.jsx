const variants={
    waite:"bg-slate-100"
}

const baseclass="inline-flex items-center justify-center"

export default function Input({
    variant,
    className="",
    ...props
}){

     const selectedvariants=variants[variant]

    return(
        <input className={`
            ${baseclass}
            ${className}
            ${selectedvariants}
        `} 
        {...props}
        />
    )
}