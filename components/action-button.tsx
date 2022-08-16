import styles from '../styles/action-button.module.css'

interface Props {
  children: JSX.Element | string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  style?: string
}

export default function ActionButton({
  children,
  onClick,
  style = 'primary',
}: Props) {
  const className = `${styles.button} ${styles[style]}`

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}
