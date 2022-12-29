import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import greaterthan from "../../../../../assets/greaterthan.png";
import styles from "./Item.module.scss";

const AccordionDemo = () => (
  <Accordion.Root className={styles.AccordionRoot} type="single" collapsible>
    <Accordion.Item className={styles.AccordionItem} value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className={styles.AccordionItem} value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and
        feel.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className={styles.AccordionItem} value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <Accordion.Content className={styles.AccordionContent}>
        <div className={styles.AccordionContentText}>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item className={styles.AccordionItem} value="item-4">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <Accordion.Content className={styles.AccordionContent}>
        <div className={styles.AccordionContentText}>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item className={styles.AccordionItem} value="item-5">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <Accordion.Content className={styles.AccordionContent}>
        <div className={styles.AccordionContentText}>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item className={styles.AccordionItem} value="item-6">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <Accordion.Content className={styles.AccordionContent}>
        <div className={styles.AccordionContentText}>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Header className={styles.AccordionHeader}>
      <Accordion.Trigger
        className={classNames([styles.AccordionTrigger], className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <img
          src={greaterthan}
          className={styles.AccordionChevron}
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Content
      className={classNames([styles.AccordionContent], className)}
      {...props}
      ref={forwardedRef}
    >
      <div className={styles.AccordionContentText}>{children}</div>
    </Accordion.Content>
  )
);

export default AccordionDemo;
