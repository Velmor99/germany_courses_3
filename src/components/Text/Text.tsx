import { TextComponentProps } from "./Text.props";
import styles from './Text.module.scss';
import cn from 'classnames';

const TextComponent = ({text, targets, textColor, fontWeight}: TextComponentProps) => {
  const wrapWords = () => {
    const arr = text.split(" ")
    const result: Array<string | {target: string}> = arr.map((item: string | {target: string}) => {
      targets.map((target) => {
        if(item === target) {
          return item = {target: target}
        }
      })
      return item;
    })
    
    return (
      <span>
        {result.map(item => {
          if(typeof item === "object") {
            return <span className={cn(styles["text__"+textColor], styles["text__weight-"+fontWeight])}>{item.target + " "}</span>
          } else {
            return item + " "
          }
        })}
      </span>
    )
  }
  
  return (
    <>
    {wrapWords()}
    </>
  )
}

export default TextComponent;