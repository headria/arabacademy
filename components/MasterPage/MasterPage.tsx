import React from "react";
import { MdHome } from "react-icons/md";
import styles from "../../styles/MasterPage.module.css";

type Props = {};

function MasterPage({}: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.topRibbon}>
                <div className={styles.topRibbonText}>
                    <span>
                        <h3>خصوصیه</h3>
                    </span>
                    <span className={styles.breadcrumbs}>
                        <MdHome color="#11b67a" size={18} /> مسکن / <span className={styles.active}>معلمون</span>
                    </span>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.contentBox}>
                    <h3>قوانینا</h3>
                    <p>
                        هذه هی قطعه اختبار تساعد المصممین و المبرمجین علی استخدام رسائل الاختبار
                        لاثبات تصامیمهم التی تم اکمالها لصاحب العمل ، و ذلک بااستخدام نص الختبار هذا
                        الذی یمکن ان یسرع هذه هی قطعه اختبار تساعد المصممین و المبرمجین علی استخدام
                        رسائل الاختبار لاثبات تصامیمهم التی تم اکمالها لصاحب العمل ، و ذلک بااستخدام
                        نص الختبار هذا الذی یمکن ان یسرع هذه هی قطعه اختبار تساعد المصممین و
                        المبرمجین علی استخدام رسائل الاختبار لاثبات تصامیمهم التی تم اکمالها لصاحب
                        العمل ، و ذلک بااستخدام نص الختبار هذا الذی یمکن ان یسرع هذه هی قطعه اختبار
                        تساعد المصممین و المبرمجین علی استخدام رسائل الاختبار لاثبات تصامیمهم التی
                        تم اکمالها لصاحب العمل ، و ذلک بااستخدام نص الختبار هذا الذی یمکن ان یسرع
                    </p>
                    <p>
                        هذه هی قطعه اختبار تساعد المصممین و المبرمجین علی استخدام رسائل الاختبار
                        لاثبات تصامیمهم التی تم اکمالها لصاحب العمل ، و ذلک بااستخدام نص الختبار هذا
                        الذی یمکن ان یسرع هذه هی قطعه اختبار تساعد المصممین و المبرمجین علی استخدام
                        رسائل الاختبار لاثبات تصامیمهم التی تم اکمالها لصاحب العمل ، و ذلک بااستخدام
                        نص الختبار هذا الذی یمکن ان یسرع هذه هی قطعه اختبار تساعد المصممین و
                        المبرمجین علی استخدام رسائل الاختبار لاثبات تصامیمهم التی تم اکمالها لصاحب
                        العمل ، و ذلک بااستخدام نص الختبار هذا الذی یمکن ان یسرع هذه هی قطعه اختبار
                        تساعد المصممین و المبرمجین علی استخدام رسائل الاختبار لاثبات تصامیمهم التی
                        تم اکمالها لصاحب العمل ، و ذلک بااستخدام نص الختبار هذا الذی یمکن ان یسرع
                    </p>
                    <p>
                        هذه هی قطعه اختبار تساعد المصممین و المبرمجین علی استخدام رسائل الاختبار
                        لاثبات تصامیمهم التی تم اکمالها لصاحب العمل ، و ذلک بااستخدام نص الختبار هذا
                        الذی یمکن ان یسرع هذه هی قطعه اختبار تساعد المصممین و المبرمجین علی استخدام
                        رسائل الاختبار لاثبات تصامیمهم التی تم اکمالها لصاحب العمل ، و ذلک بااستخدام
                        نص الختبار هذا الذی یمکن ان یسرع هذه هی قطعه اختبار تساعد المصممین و
                        المبرمجین علی استخدام رسائل الاختبار لاثبات تصامیمهم التی تم اکمالها لصاحب
                        العمل ، و ذلک بااستخدام نص الختبار هذا الذی یمکن ان یسرع هذه هی قطعه اختبار
                        تساعد المصممین و المبرمجین علی استخدام رسائل الاختبار لاثبات تصامیمهم التی
                        تم اکمالها لصاحب العمل ، و ذلک بااستخدام نص الختبار هذا الذی یمکن ان یسرع
                    </p>
                    <h3>الاستخدامات</h3>
                    <ul>
                        <li>ذی یمکن ان یسرع هذه هی قطعه اختبار تساعد المص</li>
                        <li>ذی یمکن ان یسرع هذه هی قطعه اختبا</li>
                        <li>ذی یمکن ان یسرع هذه هی قطعه اختبار تساعد المص</li>
                        <li>ذی یمکن ان یسرع هذه هی قطعه اختبار تساعد المص</li>
                        <li>ذی یمکن ان یسرع هذه هی قطعه اختبار تساعد المص</li>
                        <li>ذی یمکن ان یسرع هذه هی قطعه اختبار تساعد المص</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MasterPage;
