import styles from './purpose-item.module.scss'

function PurposeItem(props)
{

   

   // Component View ------------------------------------------------------------------------------
   return(
      <div className={styles.item} onClick={props.onPress}>
         {props.purposeName}
      </div>
   )
}

export default PurposeItem;