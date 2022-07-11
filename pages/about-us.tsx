import React from "react";
import styles from "../styles/AboutUs.module.css";
import { GiTeacher } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import { ImPlay3 } from "react-icons/im";
import { FiMonitor } from "react-icons/fi";
import { MdHighQuality } from "react-icons/md";

type Props = {};

function AboutUs({}: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.peopleSection}>
                <h2>انضم الینا لتحقیق هدفک</h2>
                <h6>
                    لکن لا بد ان اوضح لک ان کل هذه الافکار المغلوطه حول اسنکار النشوه و تمجید الالم
                    نشات بالفعل
                </h6>
                <div className={styles.peopleImages}>
                    <div className={styles.column1}>
                        <div></div>
                    </div>
                    <div className={styles.column2}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.column3}>
                        <div></div>
                    </div>
                    <div className={styles.column4}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.column5}>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className={styles.manSection}>
                <div className={styles.manSectionContent}>
                    <h3>
                        لدینا محتریفین من ذوی الخبره وافضل الدورات لتحقیق هدفک . سعادتک عی اولویتنا
                        الاولی
                    </h3>
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
                    <button className={styles.moreBtn}>اقرا اکثر &gt; </button>
                </div>
                <div className={styles.manImage}>
                    <div>
                        <div className={styles.outerCircle}>
                            <div className={styles.middleCircle}>
                                <div className={styles.innerCircle}>
                                    <ImPlay3 color="white" size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.achieveBar}>
                <div className={styles.icon}>
                    <div>
                        <span>+ ١٨٠,٠٠٠</span>
                        <span>الطلاب</span>
                    </div>
                    <FaGraduationCap size={36} color="white" />
                </div>
                <div className={styles.icon}>
                    <div>
                        <span>+ ٦٠٠٠</span>
                        <span>دوره المحضر</span>
                    </div>
                    <BsClock size={36} color="white" />
                </div>
                <div className={styles.icon}>
                    <div>
                        <span>+ ٩٨</span>
                        <span>الدورات</span>
                    </div>
                    <FiMonitor size={36} color="white" />
                </div>
                <div className={styles.icon}>
                    <div>
                        <span>+ ٥٩</span>
                        <span>معلمون</span>
                    </div>
                    <GiTeacher size={36} color="white" />
                </div>
            </div>
            <div className={styles.ourCourses}>
                <h3>میزات دوراتنا</h3>
                <div className={styles.ourCoursesWrapper}>
                    <div className={styles.coursesItem}>
                        <div className={styles.coursesIcon}>
                            <MdHighQuality size={24} />
                        </div>
                        <div className={styles.coursescontent}>
                            <h4>افضل جوده</h4>
                            <p>
                                تساعد المصممین و المبرمجین علی استخدام رسائل الاختبار لاثبات
                                تصامیمهم التی تم اکمالها لصاحب العمل
                            </p>
                        </div>
                    </div>
                    <div className={styles.coursesItem}>two</div>
                    <div className={styles.coursesItem}>three</div>
                </div>
            </div>
            <div className={styles.ourTeam}></div>
        </div>
    );
}

export default AboutUs;
