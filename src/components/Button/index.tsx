 export type ButtonProp = {
  content: string
  theme: string
  size: string
}

const Button = ({content, theme, size}: ButtonProp) => {
  let text = ''
  let bg = ''
  let border = ''
  let dimensions = ''

  if (theme === 'blue') {
    text = 'text-secondary'
    bg = 'bg-primary'
  }

  if (theme === 'yellow') {
    text = 'text-primary'
    bg = 'bg-secondary'
  }

  if (theme === 'transparent') {
    text = 'text-secondary'
    border = 'border-secondary border border-solid'
  }

  if (size === 'large') {
    dimensions = 'h-[53px] px-[29px] py-[12px] rounded-[30px]'
  }

  if (size === 'small') {
    dimensions = 'h-[35px] px-[25px] py-[7px] rounded-[25px]'
  }

  return (
    <>
      <button className={`flex flex-col items-center justify-center cursor-pointer text-[16px] md:text-[18px] w-fit ${text} ${bg} ${border} ${dimensions} hover:scale-105 transition-transform duration-300`}>{content}</button>
    </>
  )
}

export default Button