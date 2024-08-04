import TextComponent from '@/components/Text/Text';
import cn from 'classnames';
import styles from './AdvantagesDocumentsCard.module.scss';
import { AdvantagesDocumentsCardProps } from './AdvantagesDocumentsCard.props';

const AdvantagesDocumentsCard = ({text, className, optionText}: AdvantagesDocumentsCardProps) => {
  return (
    <div className={cn(styles["card"])}>
      <div className={cn(styles["card__image-block"], className)}></div>
      <p className={cn(styles["card__text"])}>
        <TextComponent text={text} targets={optionText.targets} textColor={optionText.colorText} fontWeight={optionText.fontWeight} />
      </p>
    </div>
  )
}

export default AdvantagesDocumentsCard;