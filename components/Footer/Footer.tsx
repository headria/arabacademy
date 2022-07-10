import React from "react";
import styles from "../../styles/Footer.module.css";
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FcGraduationCap } from "react-icons/fc";
import { FiMail } from "react-icons/fi";
import { MdOutlinePhone } from "react-icons/md";

type Props = {};

function Footer({}: Props) {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.capSection}>
                    <FcGraduationCap size={38} />
                    <div className={styles.capSectionText}>
                        <span>Arab</span>
                        <span> Academy</span>
                    </div>
                </div>
                <div className={styles.content}>
                    <ul className={styles.column3}>
                        <li>روابط عامه</li>
                        <li>معلومات عنا</li>
                        <li>اتصل بنا</li>
                        <li>مصطلح و الخدمات</li>
                        <li>الاجمالیه</li>
                        <li>التعلیمات</li>
                    </ul>
                    <ul className={styles.column2}>
                        <li>روابط مفیده</li>
                        <li>الدورات</li>
                        <li>معلمون</li>
                        <li>الفئه</li>
                        <li>مقاطع فیدیو تعلیمیه</li>
                    </ul>
                    <ul className={styles.column1}>
                        <li className={styles.aboutUs}>
                            هذه هی قطعه اختبار تساعد المصممین و المبرمجین علی استخدام رسائل الاختبار
                            لاثبات تصامیمهم التی تم اکمالها لصاحب العمل ، و ذلک بااستخدام نص الختبار
                            هذا الذی یمکن ان یسرع
                        </li>
                        <li className={styles.aboutUsMail}>
                            arabacademy@info.com
                            <FiMail size={12} color="#11b67a" />
                        </li>
                        <li className={styles.aboutUsPhone}>
                            (+25) 08932-3285
                            <MdOutlinePhone size={12} color="#11b67a" />
                        </li>
                    </ul>
                </div>
                <div className={styles.strip}>
                    <ul className={styles.iconsWrapper}>
                        <li className={styles.icon}>
                            <FaYoutube color="white" size={16} />
                        </li>
                        <li className={styles.icon}>
                            <FaWhatsapp color="white" size={16} />
                        </li>
                        <li className={styles.icon}>
                            <FaInstagram color="white" size={16} />
                        </li>
                        <li className={styles.icon}>
                            <FaFacebook color="white" size={16} />
                        </li>
                        <li className={styles.icon}>
                            <FaTwitter color="white" size={16} />
                        </li>
                    </ul>
                    <div className={styles.stripText}>
                        <p>
                            حقوق النشر &copy; 2021 | الاکادیمیه العربیه مع &#10084;&#65039; الشبکه
                            العربیه
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
