import styles from "./Questions.module.scss";
import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import plus from "../../../../assets/plus.png";
import minus from "../../../../assets/minus.png";
import greaterthandown from "../../../../assets/greaterthandown.png"
import greaterthan from "../../../../assets/greaterthan.png";
import { useState } from "react";
import AccordionDemo from "./Item";


export const Questions = () => {

    const [open, setOpen] = useState(false);

    return (
        <section className={styles.container}>
            <h2>Perguntas Frequentes</h2>

            <AccordionDemo/>
          {/*   <div className={styles.questionContainer} onClick={() => {open ? setOpen(false) : setOpen(true)}}>
                <div>
                    <div className={styles.questionCard}>
                        <div className={styles.textPlus}>
                            {open ?  <img src={minus} alt="sinal de menos" /> : <img src={plus} alt="sinal de mais" />}
                            <p>Pergunta</p>
                        </div>
                            {open ? <img src={greaterthandown} alt="sinal de maior" /> : <img src={greaterthan} alt="sinal de maior" />}
                    
                    </div>
                    {open ?  <div className={styles.text}>
                        <p>Se você quer se preparar para atuar no mercado de resíduos e se manter atualizado, este curso é para você.</p>
                    </div> : ""}
                </div>
            </div>
             */}
             

        </section>
    )
}

