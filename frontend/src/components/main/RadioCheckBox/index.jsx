import DoneIcon from '@mui/icons-material/Done';
import styles from './styles.module.scss'
import clsx from 'clsx'

export default function RadioCheckBox({
  label,
  color,
  value,
  onChange
}) {
  return (
    <label className={styles['container']}>

      <input type="checkbox"
        value={value}
        onChange={onChange}
      />
      <span className={clsx(
        styles['checkmark']
      )}
        style={{
          borderColor: color,
          background: value ? color : 'white'
        }}
      >
        {value &&
          <DoneIcon className={styles['icon']} />
        }
      </span>
      <p>{label}</p>
    </label>

  )
}
