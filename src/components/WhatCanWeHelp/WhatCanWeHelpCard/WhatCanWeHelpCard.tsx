import { WhatCanWeHelpCardProps } from "./WhatCanWeHelpCard.props";
import cn from 'classnames';
import styles from './WhatCanWeHelpCard.module.scss';

const WhatCanWeHelpCard = ({text, className}: WhatCanWeHelpCardProps) => {
  return (
    <div className={cn(styles["card"])}>
      <div className={cn(styles["card__background"], className)}></div>
      <p className={cn(styles["card__text"])}>{text}</p>
    </div>
  )
}

export default WhatCanWeHelpCard;