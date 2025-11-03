 'use client'

 import React from 'react'
 import clsx from 'clsx'

 import styles from './Accordion.module.css'

 export type AccordionItem = {
   id: string
   title: React.ReactNode
   content: React.ReactNode
 }

export type AccordionProps = {
  items: AccordionItem[]
  defaultOpenId?: string | null
  className?: string
  itemClassName?: string
  onChange?: (openId: string | null) => void
}

 const Accordion: React.FC<AccordionProps> = ({
   items,
  defaultOpenId,
   className,
   itemClassName,
   onChange,
 }) => {
  const [openId, setOpenId] = React.useState<string | null>(() => {
    if (defaultOpenId !== undefined) {
      return defaultOpenId
    }

    return items.length > 0 ? items[0].id : null
  })

   const handleToggle = React.useCallback(
     (id: string) => {
       setOpenId((current) => {
         const nextId = current === id ? null : id

         onChange?.(nextId)

         return nextId
       })
     },
     [onChange],
   )

   return (
     <div className={clsx(styles.accordion, className)}>
       {items.map((item) => {
         const isOpen = item.id === openId
         const contentId = `${item.id}-content`

         return (
           <div
             key={item.id}
             className={clsx(styles.item, isOpen && styles.itemOpen, itemClassName)}
           >
             <button
               type="button"
               className={styles.trigger}
               onClick={() => handleToggle(item.id)}
               aria-expanded={isOpen}
               aria-controls={contentId}
             >
               <span className={styles.label}>{item.title}</span>
               <span className={styles.iconWrapper} aria-hidden>
                 <svg className={styles.icon} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                   <path d="M5.646 2.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L9.293 7.5 5.646 3.854a.5.5 0 0 1 0-.708z" />
                 </svg>
               </span>
             </button>
             <div
               id={contentId}
               className={styles.content}
               role="region"
               aria-hidden={!isOpen}
             >
               <div className={styles.contentInner}>{item.content}</div>
             </div>
           </div>
         )
       })}
     </div>
   )
 }

 export default Accordion


