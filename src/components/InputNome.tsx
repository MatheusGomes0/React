interface Props {
  type: Text
  placeholder: string
}

function ButtonFatec({ type, placeholder }: Props) {
  return (
    <button className={styles.Input} type={type}>
      {placeholder}
    </button>
  )
}

export default ButtonFatec